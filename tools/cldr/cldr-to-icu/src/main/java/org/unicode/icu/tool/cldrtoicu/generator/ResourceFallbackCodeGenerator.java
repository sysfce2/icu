package org.unicode.icu.tool.cldrtoicu.generator;

import static com.google.common.base.CharMatcher.whitespace;

import java.io.PrintWriter;
import java.nio.file.Path;
import java.util.Collection;
import java.util.Map;
import java.util.TreeMap;
import java.util.TreeSet;

import org.unicode.cldr.api.AttributeKey;
import org.unicode.cldr.api.CldrData;
import org.unicode.cldr.api.CldrDataSupplier;
import org.unicode.cldr.api.CldrDataType;
import org.unicode.cldr.api.CldrPath;
import org.unicode.cldr.api.CldrValue;
import org.unicode.icu.tool.cldrtoicu.CodeGenerator;

import com.google.common.base.Splitter;

public class ResourceFallbackCodeGenerator implements CodeGenerator {
    private Map<String, String> defaultScripts;
    private Map<String, String> parentLocales;
    private Splitter localeIDSplitter;
    private Splitter childLocaleSplitter;

    @Override
    public void generateCode(Path cldrPath, PrintWriter cFileOut, PrintWriter javaFileOut) {
        defaultScripts = new TreeMap<String, String>();
        parentLocales = new TreeMap<String, String>();
        localeIDSplitter = Splitter.on('_');
        childLocaleSplitter = Splitter.on(whitespace()).omitEmptyStrings();

        CldrDataSupplier supplier = CldrDataSupplier.forCldrFilesIn(cldrPath);
        CldrData supplementalData = supplier.getDataForType(CldrDataType.SUPPLEMENTAL);
        supplementalData.accept(CldrData.PathOrder.NESTED_GROUPING, new CldrData.PrefixVisitor() {
            @Override
            public void visitPrefixStart(CldrPath prefix, Context context) {
                if (prefix.getName().endsWith("likelySubtags")) {
                    context.install(cldrValue -> handleLikelySubtag(cldrValue));
                } else if (prefix.getName().endsWith("parentLocales")) {
                    context.install(cldrValue -> handleParentLocale(cldrValue));
                }
            }
        });

        generateCFile(cFileOut);
        generateJavaFile(javaFileOut);
    }

    private void handleLikelySubtag(CldrValue value) {
        String from = value.get(AttributeKey.keyOf("likelySubtag", "from"));
        String to = value.get(AttributeKey.keyOf("likelySubtag", "to"));

        String[] fromPieces = localeIDSplitter.splitToList(from).toArray(new String[] {});
        String[] toPieces = localeIDSplitter.splitToList(to).toArray(new String[] {});

        if (toPieces.length != 3) {
            throw new IllegalArgumentException("Didn't get 3 segments in 'to' value: from=" + from + ", to=" + to);
        }
        if (fromPieces[0].equals("und")) {
            // ignore "und" entries-- they don't yield useful default-script information
            return;
        }
        if (fromPieces.length >= 3) {
            throw new IllegalArgumentException("'from' entry has a non-'und' language and also has a script code: from=" + from + ", to=" + to);
        }
        if (fromPieces.length == 2 && fromPieces[1].length() > 3) {
            // the locale ID consists of just a language and a script-- the script code is redundant and doesn't
            // supply any default-script info
            return;
        }

        String defaultScript = toPieces[1]; // toPieces is always three elements, so the second one is always the script
        if (!defaultScript.equals("Latn")) {
            // to save room, don't include all the entries where the default script is Latn
            defaultScripts.put(from, defaultScript);
        }
    }

    private void handleParentLocale(CldrValue value) {
        String component = value.get(AttributeKey.keyOf("parentLocales", "component"));
        if (component != null) {
            // CLDR-16253 added component-specific parents, which we ignore for now.
            return;
        }
        String parent = value.get(AttributeKey.keyOf("parentLocale", "parent"));
        String childrenStr = value.get(AttributeKey.keyOf("parentLocale", "locales"));

        for (String child : childLocaleSplitter.split(childrenStr)) {
            parentLocales.put(child, parent);
        }
    }

    private void generateCFile(PrintWriter out) {
        out.println("// © 2022 and later: Unicode, Inc. and others.");
        out.println("// License & terms of use: http://www.unicode.org/copyright.html");
        out.println("//");
        out.println("// Internal static data tables used by uresbund.cpp");
        out.println("// WARNING: This file is mechanically generated by the CLDR-to-ICU tool");
        out.println("// (see tools/cldr/cldr-to-icu/src/main/java/org/unicode/tool/cldrtoicu/generator/ResourcFallbackCodeGenerator.java).");
        out.println("// DO NOT HAND EDIT!!!");
        out.println();
        out.println("#ifdef INCLUDED_FROM_URESBUND_CPP");
        out.println();

        out.println("//======================================================================");
        out.println("// Default script table");
        Map<String, Integer> scriptIndex = buildCompositeString(defaultScripts.values(), "scriptCodeChars", out);
        Map<String, Integer> localeIDIndex = buildCompositeString(defaultScripts.keySet(), "dsLocaleIDChars", out);
        writeStringToStringIndex(defaultScripts, localeIDIndex, scriptIndex, "defaultScriptTable", out);

        out.println("//======================================================================");
        out.println("// Parent locale table");
        TreeSet<String> combinedLocaleIDs = new TreeSet<>();
        combinedLocaleIDs.addAll(parentLocales.keySet());
        combinedLocaleIDs.addAll(parentLocales.values());
        localeIDIndex = buildCompositeString(combinedLocaleIDs, "parentLocaleChars", out);
        writeStringToStringIndex(parentLocales, localeIDIndex, localeIDIndex, "parentLocaleTable", out);

        out.println();
        out.println("#endif  // INCLUDED_FROM_URESBUND_CPP");
    }

    private Map<String, Integer> buildCompositeString(Collection<String> strings, String variableName, PrintWriter out) {
        Map<String, Integer> stringIndex = new TreeMap<>();
        for (String string : strings) {
            stringIndex.putIfAbsent(string, 0);
        }
        out.println("const char " + variableName + "[] =");
        out.print("    \"");
        int nextStringOffset = 0;
        int charsOnLine = 0;
        for (String string : stringIndex.keySet()) {
            out.print(string);
            out.print("\\0");
            stringIndex.put(string, nextStringOffset);
            nextStringOffset += string.length() + 1;
            charsOnLine += string.length() + 2;

            if (charsOnLine > 60) {
                out.println("\"");
                out.print("    \"");
                charsOnLine = 0;
            }
        }
        out.println("\";");
        out.println();
        return stringIndex;
    }

    private void writeStringToStringIndex(Map<String, String> index, Map<String, Integer> keyIndex, Map<String, Integer> valueIndex, String variableName, PrintWriter out) {
        out.println("const int32_t " + variableName + "[] = {");
        for (Map.Entry<String, String> entry : index.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            out.println("    " + keyIndex.get(key) + ", " + valueIndex.get(value) + ",  // " + key + " -> " + value);
        }
        out.println("};");
        out.println();
    }

    private void generateJavaFile(PrintWriter out) {
        out.println("// © 2022 and later: Unicode, Inc. and others.");
        out.println("// License & terms of use: http://www.unicode.org/copyright.html");
        out.println("//");
        out.println("// Internal static data tables used by ICUResourceBundle.java");
        out.println("// WARNING: This file is mechanically generated by the CLDR-to-ICU tool");
        out.println("// (see tools/cldr/cldr-to-icu/src/main/java/org/unicode/tool/cldrtoicu/generator/ResourcFallbackCodeGenerator.java).");
        out.println("// DO NOT HAND EDIT!!!");
        out.println();

        out.println("package com.ibm.icu.impl;");
        out.println();
		out.println("import java.util.Collections;");
		out.println("import java.util.HashMap;");
		out.println("import java.util.Map;");
        out.println();
        out.println("class LocaleFallbackData {");

        out.println("    //======================================================================");
        out.println("    // Default script table");
		out.println("    public static final Map<String, String> DEFAULT_SCRIPT_TABLE = buildDefaultScriptTable();");
		out.println();
		out.println("    private static Map<String, String> buildDefaultScriptTable() {");
		out.println("        Map<String, String> t = new HashMap<>();");
        for (Map.Entry<String, String> entry : defaultScripts.entrySet()) {
            out.println("        t.put(\"" + entry.getKey() + "\", \"" + entry.getValue() + "\");");
        }
		out.println("        return Collections.unmodifiableMap(t);");
        out.println("    }");
        out.println();

        out.println("    //======================================================================");
        out.println("    // Parent locale table");
		out.println("    public static final Map<String, String> PARENT_LOCALE_TABLE = buildParentLocaleTable();");
		out.println();
		out.println("    private static Map<String, String> buildParentLocaleTable() {");
		out.println("        Map<String, String> t = new HashMap<>();");
        for (Map.Entry<String, String> entry : parentLocales.entrySet()) {
            out.println("        t.put(\"" + entry.getKey() + "\", \"" + entry.getValue() + "\");");
        }
		out.println("        return Collections.unmodifiableMap(t);");
        out.println("    }");
        out.println("}");
    }
}
