// © 2016 and later: Unicode, Inc. and others.
// License & terms of use: http://www.unicode.org/copyright.html
/**
*******************************************************************************
* Copyright (C) 2004-2013, International Business Machines Corporation and    *
* others. All Rights Reserved.                                                *
*******************************************************************************
*/

/**
 * Compare two API files (generated by GatherAPIData) and generate a report
 * on the differences.
 *
 * Sample invocation:
 * java -old: icu4j28.api.zip -new: icu4j30.api -html -out: icu4j_compare_28_30.html
 *
 * TODO:
 * - make 'changed apis' smarter - detect method parameter or return type change
 *   for this, the sequential search through methods ordered by signature won't do.
 *     We need to gather all added and removed overloads for a method, and then
 *     compare all added against all removed in order to identify this kind of
 *     change.
 */

package com.ibm.icu.dev.tool.docs;

import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class ReportAPI {
    APIData oldData;
    APIData newData;
    boolean html;
    String outputFile;

    TreeSet<APIInfo> added;
    TreeSet<APIInfo> removed;
    TreeSet<APIInfo> promotedStable;
    TreeSet<APIInfo> promotedDraft;
    TreeSet<APIInfo> obsoleted;
    ArrayList<DeltaInfo> changed;

    static final class DeltaInfo extends APIInfo {
        APIInfo added;
        APIInfo removed;

        DeltaInfo(APIInfo added, APIInfo removed) {
            this.added = added;
            this.removed = removed;
        }

        @Override
        public int getVal(int typ) {
            return added.getVal(typ);
        }

        @Override
        public String get(int typ, boolean brief) {
            return added.get(typ, brief);
        }

        @Override
        public void print(PrintWriter pw, boolean detail, boolean html) {
            pw.print("    ");
            removed.print(pw, detail, html);
            if (html) {
                pw.println("</br>");
            } else {
                pw.println();
                pw.print("--> ");
            }
            added.print(pw, detail, html);
        }
    }

    public static void main(String[] args) {
        String oldFile = null;
        String newFile = null;
        String outFile = null;
        boolean html = false;
        boolean internal = false;
        for (int i = 0; i < args.length; ++i) {
            String arg = args[i];
            if (arg.equals("-old:")) {
                oldFile = args[++i];
            } else if (arg.equals("-new:")) {
                newFile = args[++i];
            } else if (arg.equals("-out:")) {
                outFile = args[++i];
            } else if (arg.equals("-html")) {
                html = true;
            } else if (arg.equals("-internal")) {
                internal = true;
            }
        }

        new ReportAPI(oldFile, newFile, internal).writeReport(outFile, html, internal);
    }

    /*
      while the both are methods and the class and method names are the same, collect
      overloads.  when you hit a new method or class, compare the overloads
      looking for the same # of params and simple param changes.  ideally
      there are just a few.

      String oldA = null;
      String oldR = null;
      if (!a.isMethod()) {
      remove and continue
      }
      String am = a.getClassName() + "." + a.getName();
      String rm = r.getClassName() + "." + r.getName();
      int comp = am.compare(rm);
      if (comp == 0 && a.isMethod() && r.isMethod())

    */

    ReportAPI(String oldFile, String newFile, boolean internal) {
        this(APIData.read(oldFile, internal), APIData.read(newFile, internal));
    }

    ReportAPI(APIData oldData, APIData newData) {
        this.oldData = oldData;
        this.newData = newData;

        removed = (TreeSet<APIInfo>)oldData.set.clone();
        removed.removeAll(newData.set);

        added = (TreeSet<APIInfo>)newData.set.clone();
        added.removeAll(oldData.set);

        changed = new ArrayList<DeltaInfo>();
        Iterator<APIInfo> ai = added.iterator();
        Iterator<APIInfo> ri = removed.iterator();
        Comparator<APIInfo> c = APIInfo.changedComparator();

        ArrayList<APIInfo> ams = new ArrayList<APIInfo>();
        ArrayList<APIInfo> rms = new ArrayList<APIInfo>();
        //PrintWriter outpw = new PrintWriter(System.out);

        APIInfo a = null, r = null;
        while ((a != null || ai.hasNext()) && (r != null || ri.hasNext())) {
            if (a == null) a = ai.next();
            if (r == null) r = ri.next();

            String am = a.getClassName() + "." + a.getName();
            String rm = r.getClassName() + "." + r.getName();
            int comp = am.compareTo(rm);
            if (comp == 0 && a.isMethod() && r.isMethod()) { // collect overloads
                ams.add(a); a = null;
                rms.add(r); r = null;
                continue;
            }

            if (!ams.isEmpty()) {
                // simplest case first
                if (ams.size() == 1 && rms.size() == 1) {
                    changed.add(new DeltaInfo(ams.get(0), rms.get(0)));
                } else {
                    // dang, what to do now?
                    // TODO: modify deltainfo to deal with lists of added and removed
                }
                ams.clear();
                rms.clear();
            }

            int result = c.compare(a, r);
            if (result < 0) {
                a = null;
            } else if (result > 0) {
                r = null;
            } else {
                changed.add(new DeltaInfo(a, r));
                a = null;
                r = null;
            }
        }

        // now clean up added and removed by cleaning out the changed members
        Iterator<DeltaInfo> ci = changed.iterator();
        while (ci.hasNext()) {
            DeltaInfo di = ci.next();
            added.remove(di.added);
            removed.remove(di.removed);
        }

        Set<APIInfo> tempAdded = new HashSet<APIInfo>();
        tempAdded.addAll(newData.set);
        tempAdded.removeAll(removed);
        TreeSet<APIInfo> changedAdded = new TreeSet<APIInfo>(APIInfo.defaultComparator());
        changedAdded.addAll(tempAdded);

        Set<APIInfo> tempRemoved = new HashSet<APIInfo>();
        tempRemoved.addAll(oldData.set);
        tempRemoved.removeAll(added);
        TreeSet<APIInfo> changedRemoved = new TreeSet<APIInfo>(APIInfo.defaultComparator());
        changedRemoved.addAll(tempRemoved);

        promotedStable = new TreeSet<APIInfo>(APIInfo.defaultComparator());
        promotedDraft = new TreeSet<APIInfo>(APIInfo.defaultComparator());
        obsoleted = new TreeSet<APIInfo>(APIInfo.defaultComparator());
        ai = changedAdded.iterator();
        ri = changedRemoved.iterator();
        a = r = null;
        while ((a != null || ai.hasNext()) && (r != null || ri.hasNext())) {
            if (a == null) a = ai.next();
            if (r == null) r = ri.next();
            int result = c.compare(a, r);
            if (result < 0) {
                a = null;
            } else if (result > 0) {
                r = null;
            } else {
                int change = statusChange(a, r);
                if (change > 0) {
                    if (a.isStable()) {
                        promotedStable.add(a);
                    } else {
                        promotedDraft.add(a);
                    }
                } else if (change < 0) {
                    obsoleted.add(a);
                }
                a = null;
                r = null;
            }
        }

        added = stripAndResort(added);
        removed = stripAndResort(removed);
        promotedStable = stripAndResort(promotedStable);
        promotedDraft = stripAndResort(promotedDraft);
        obsoleted = stripAndResort(obsoleted);
    }

    private int statusChange(APIInfo lhs, APIInfo rhs) { // new. old
        for (int i = 0; i < APIInfo.NUM_TYPES; ++i) {
            if (lhs.get(i, true).equals(rhs.get(i, true)) == (i == APIInfo.STA)) {
                return 0;
            }
        }
        int lstatus = lhs.getVal(APIInfo.STA);
        if (lstatus == APIInfo.STA_OBSOLETE
            || lstatus == APIInfo.STA_DEPRECATED
            || lstatus == APIInfo.STA_INTERNAL) {
            return -1;
        }
        return 1;
    }

    private boolean writeReport(String outFile, boolean html, boolean internal) {
        OutputStream os = System.out;
        if (outFile != null) {
            try {
                os = new FileOutputStream(outFile);
            }
            catch (FileNotFoundException e) {
                RuntimeException re = new RuntimeException(e.getMessage());
                re.initCause(e);
                throw re;
            }
        }

        PrintWriter pw = null;
        try {
            pw = new PrintWriter(new BufferedWriter(new OutputStreamWriter(os, "UTF-8")));
        }
        catch (UnsupportedEncodingException e) {
            throw new IllegalStateException(); // UTF-8 should always be supported
        }

        // Change names to remove minor, milli, and micro version numbers for the report.
        String oldName = oldData.name;
        int ptIndex = oldName.indexOf('.');
        if (ptIndex >= 0) {
            oldName = oldName.substring(0, ptIndex);
        }
        String newName = newData.name;
        ptIndex = newName.indexOf('.');
        if (ptIndex >= 0) {
            newName = newName.substring(0, ptIndex);
        }


        DateFormat fmt = new SimpleDateFormat("yyyy");
        String year = fmt.format(new Date());
        String title = "ICU4J API Comparison: " + oldName + " with " + newName;
        String info = "Contents generated by ReportAPI tool on " + new Date().toString();
        String copyright = "© " + year + " and later: Unicode, Inc. and others."
                + " License & terms of use: <a href=\"http://www.unicode.org/copyright.html\">"
                + "http://www.unicode.org/copyright.html</a>";

        if (html) {
            pw.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
            pw.println("<html>");
            pw.println("<head>");
            pw.println("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">");
            pw.println("<!-- © " + year + " and later: Unicode, Inc. and others. -->");
            pw.println("<!-- License & terms of use: http://www.unicode.org/copyright.html -->");
            pw.println("<title>" + title + "</title>");
            pw.println("</head>");
            pw.println("<body>");

            pw.println("<h1>" + title + "</h1>");

            pw.println();
            pw.println("<hr/>");
            pw.println("<h2>Removed from " + oldName +"</h2>");
            if (removed.size() > 0) {
                printResults(removed, pw, true, false);
            } else {
                pw.println("<p>(no API removed)</p>");
            }

            pw.println();
            pw.println("<hr/>");
            if (internal) {
                pw.println("<h2>Withdrawn, Deprecated, or Obsoleted in " + newName + "</h2>");
            } else {
                pw.println("<h2>Deprecated or Obsoleted in " + newName + "</h2>");
            }
            if (obsoleted.size() > 0) {
                printResults(obsoleted, pw, true, false);
            } else {
                pw.println("<p>(no API obsoleted)</p>");
            }

            pw.println();
            pw.println("<hr/>");
            pw.println("<h2>Changed in " + newName + " (old, new)</h2>");
            if (changed.size() > 0) {
                printResults(changed, pw, true, true);
            } else {
                pw.println("<p>(no API changed)</p>");
            }

            pw.println();
            pw.println("<hr/>");
            pw.println("<h2>Promoted to stable in " + newName + "</h2>");
            if (promotedStable.size() > 0) {
                printResults(promotedStable, pw, true, false);
            } else {
                pw.println("<p>(no API promoted to stable)</p>");
            }

            if (internal) {
                // APIs promoted from internal to draft is reported only when
                // internal API check is enabled
                pw.println();
                pw.println("<hr/>");
                pw.println("<h2>Promoted to draft in " + newName + "</h2>");
                if (promotedDraft.size() > 0) {
                    printResults(promotedDraft, pw, true, false);
                } else {
                    pw.println("<p>(no API promoted to draft)</p>");
                }
            }

            pw.println();
            pw.println("<hr/>");
            pw.println("<h2>Added in " + newName + "</h2>");
            if (added.size() > 0) {
                printResults(added, pw, true, false);
            } else {
                pw.println("<p>(no API added)</p>");
            }

            pw.println("<hr/>");
            pw.println("<p><i><font size=\"-1\">" + info + "<br/>" + copyright + "</font></i></p>");
            pw.println("</body>");
            pw.println("</html>");
        } else {
            pw.println(title);
            pw.println();
            pw.println();

            pw.println("=== Removed from " + oldName + " ===");
            if (removed.size() > 0) {
                printResults(removed, pw, false, false);
            } else {
                pw.println("(no API removed)");
            }

            pw.println();
            pw.println();
            if (internal) {
                pw.println("=== Withdrawn, Deprecated, or Obsoleted in " + newName + " ===");
            } else {
                pw.println("=== Deprecated or Obsoleted in " + newName + " ===");
            }
            if (obsoleted.size() > 0) {
                printResults(obsoleted, pw, false, false);
            } else {
                pw.println("(no API obsoleted)");
            }

            pw.println();
            pw.println();
            pw.println("=== Changed in " + newName + " (old, new) ===");
            if (changed.size() > 0) {
                printResults(changed, pw, false, true);
            } else {
                pw.println("(no API changed)");
            }

            pw.println();
            pw.println();
            pw.println("=== Promoted to stable in " + newName + " ===");
            if (promotedStable.size() > 0) {
                printResults(promotedStable, pw, false, false);
            } else {
                pw.println("(no API promoted to stable)");
            }

            if (internal) {
                pw.println();
                pw.println();
                pw.println("=== Promoted to draft in " + newName + " ===");
                if (promotedDraft.size() > 0) {
                    printResults(promotedDraft, pw, false, false);
                } else {
                    pw.println("(no API promoted to draft)");
                }
            }

            pw.println();
            pw.println();
            pw.println("=== Added in " + newName + " ===");
            if (added.size() > 0) {
                printResults(added, pw, false, false);
            } else {
                pw.println("(no API added)");
            }

            pw.println();
            pw.println("================");
            pw.println(info);
            pw.println(copyright);
        }
        pw.close();

        return false;
    }

    private static void printResults(Collection<? extends APIInfo> c, PrintWriter pw, boolean html,
                                     boolean isChangedAPIs) {
        Iterator<? extends APIInfo> iter = c.iterator();
        String pack = null;
        String clas = null;
        while (iter.hasNext()) {
            APIInfo info = iter.next();

            String packageName = info.getPackageName();
            if (!packageName.equals(pack)) {
                if (html) {
                    if (clas != null) {
                        pw.println("</ul>");
                    }
                    if (pack != null) {
                        pw.println("</ul>");
                    }
                    pw.println();
                    pw.println("<h3>Package " + packageName + "</h3>");
                    pw.print("<ul>");
                } else {
                    if (pack != null) {
                        pw.println();
                    }
                    pw.println();
                    pw.println("Package " + packageName + ":");
                }
                pw.println();

                pack = packageName;
                clas = null;
            }

            if (!info.isClass() && !info.isEnum()) {
                String className = info.getClassName();
                if (!className.equals(clas)) {
                    if (html) {
                        if (clas != null) {
                            pw.println("</ul>");
                        }
                        pw.println(className);
                        pw.println("<ul>");
                    } else {
                        pw.println(className);
                    }
                    clas = className;
                }
            }

            if (html) {
                pw.print("<li>");
                info.print(pw, isChangedAPIs, html);
                pw.println("</li>");
            } else {
                info.println(pw, isChangedAPIs, html);
            }
        }

        if (html) {
            if (clas != null) {
                pw.println("</ul>");
            }
            if (pack != null) {
                pw.println("</ul>");
            }
        }
        pw.println();
    }

    private static TreeSet<APIInfo> stripAndResort(TreeSet<APIInfo> t) {
        stripClassInfo(t);
        TreeSet<APIInfo> r = new TreeSet<APIInfo>(APIInfo.classFirstComparator());
        r.addAll(t);
        return r;
    }

    private static void stripClassInfo(Collection<APIInfo> c) {
        // c is sorted with class info first
        Iterator<? extends APIInfo> iter = c.iterator();
        String cname = null;
        while (iter.hasNext()) {
            APIInfo info = iter.next();
            String className = info.getClassName();
            if (cname != null) {
                if (cname.equals(className)) {
                    iter.remove();
                    continue;
                }
                cname = null;
            }
            if (info.isClass()) {
                cname = info.getName();
            }
        }
    }
}
