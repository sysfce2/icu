window.BENCHMARK_DATA = {
  "lastUpdate": 1667232715940,
  "repoUrl": "https://github.com/unicode-org/icu",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "80ee559205dd165c2d647610376d6f9a06822ae4",
          "message": "ICU-21843 Add ICU4C performance tests to continuous integration\n\nSee #1987",
          "timestamp": "2022-03-07T12:53:44-08:00",
          "tree_id": "7da686bd1662079612215dc8b0f27437626720c3",
          "url": "https://github.com/unicode-org/icu/commit/80ee559205dd165c2d647610376d6f9a06822ae4"
        },
        "date": 1646687241525,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.5915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.0719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.0939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0548,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1427,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avetlov@riverlogic.com",
            "name": "Alexey Vetlov",
            "username": "avetlov"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "1393face12f7205a133a63f13bb592f561b4abfb",
          "message": "ICU-21768 Fixed (u_snprintf improperly counts the required buffer size). Modified TestSnprintf to test the null buffer case.",
          "timestamp": "2022-03-08T23:09:54Z",
          "tree_id": "586d92fe70bb8985ec51cb46c5c3b4f26dadd05c",
          "url": "https://github.com/unicode-org/icu/commit/1393face12f7205a133a63f13bb592f561b4abfb"
        },
        "date": 1646781650617,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.5967,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.0676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.0961,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "31871cc14f5b55a53511884d9787494905a80a00",
          "message": "ICU-21801 Fix array comparison warning in uspoof_impl.cpp\n\nSee #2015",
          "timestamp": "2022-03-08T15:21:53-08:00",
          "tree_id": "bd6da903ad6a15330b5714ac76b55b1000680a13",
          "url": "https://github.com/unicode-org/icu/commit/31871cc14f5b55a53511884d9787494905a80a00"
        },
        "date": 1646782442627,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.3105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.5546,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.5376,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.5522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.4443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.6179,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "f57ef9ebf72d889e9b93be90fbc020fae0e374ae",
          "message": "ICU-21527 Assert pattern equality instead of object equality",
          "timestamp": "2022-03-08T15:31:52-08:00",
          "tree_id": "ecf2895c54243a8853b544b889a8c7677e6381b5",
          "url": "https://github.com/unicode-org/icu/commit/f57ef9ebf72d889e9b93be90fbc020fae0e374ae"
        },
        "date": 1646783001644,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.8072,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2254,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.2969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9327,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.7896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.8498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "f79f03dad5ffcd0e7ac9e1bcbd05fc38bff8e3a2",
          "message": "ICU-21322 Add parse and format methods for DecimalQuantity with exponent\n\nSee #2012",
          "timestamp": "2022-03-08T15:56:50-08:00",
          "tree_id": "e99f29d061b511c3a728814891002ca64d0008cd",
          "url": "https://github.com/unicode-org/icu/commit/f79f03dad5ffcd0e7ac9e1bcbd05fc38bff8e3a2"
        },
        "date": 1646784413463,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6004,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.0667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.0891,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1458,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1294,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daniel.bevenius@gmail.com",
            "name": "Daniel Bevenius",
            "username": "danbev"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "55a51fa9bde41598fb70c5931d313e908f21ca65",
          "message": "ICU-21784 suppress -Wunused-function warning in unistr.cpp\n\nThis commit adds an ignore of the unused function\nuprv_UnicodeStringDummy.",
          "timestamp": "2022-03-09T03:31:37Z",
          "tree_id": "6f7b710d4a93a3e7597bccfba1321df26f0084ee",
          "url": "https://github.com/unicode-org/icu/commit/55a51fa9bde41598fb70c5931d313e908f21ca65"
        },
        "date": 1646797341264,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.8215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.0715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.3805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.3638,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.429,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexandermv@gmail.com",
            "name": "Alexander Morozov",
            "username": "alxrmorozov"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "234cbe2c17034c68d6dd6df09fda79a052f0a238",
          "message": "ICU-21805 Remove useless check",
          "timestamp": "2022-03-09T03:37:37Z",
          "tree_id": "9e1ab2725eb42216e690fc018fce2b085fddb70f",
          "url": "https://github.com/unicode-org/icu/commit/234cbe2c17034c68d6dd6df09fda79a052f0a238"
        },
        "date": 1646797888451,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2718,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.879,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.5714,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.6035,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.6196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "77e0c9e371994b739e4049ab4dc476ab8b8c5719",
          "message": "ICU-21900 Adjusts performance alert threshold to 150%, i.e. the alert only is\ntriggered if the current measured execution time is 50% higher than the previous\ntime.\nThe current setting of 100% means that even a 1% increase from previous time\ntriggers the alert already.",
          "timestamp": "2022-03-09T11:10:43-08:00",
          "tree_id": "430a4aa2ed3e70bf913386f73e673d6391f87c4b",
          "url": "https://github.com/unicode-org/icu/commit/77e0c9e371994b739e4049ab4dc476ab8b8c5719"
        },
        "date": 1646853770433,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.5874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.9461,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.0702,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.1086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies.mahmoud@gmail.com",
            "name": "Younies",
            "username": "younies"
          },
          "committer": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "distinct": true,
          "id": "bb822ba38a8b8e0ebd33d8311579043bd7978794",
          "message": "ICU-21936 Make the internal units converters public\n\nSee #2021",
          "timestamp": "2022-03-09T22:42:04+01:00",
          "tree_id": "1e1a52e65f91a8ea8454578ce854063b1be82290",
          "url": "https://github.com/unicode-org/icu/commit/bb822ba38a8b8e0ebd33d8311579043bd7978794"
        },
        "date": 1646862782413,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2653,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.8716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.5699,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.6145,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.6127,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "571d12abfbe73a974fbe9d260b85975cbfd5f43c",
          "message": "ICU-21409 add word for bell to laodict",
          "timestamp": "2022-03-09T15:14:42-08:00",
          "tree_id": "360a095baf4597f47ff422696cb50d2e95e1e59d",
          "url": "https://github.com/unicode-org/icu/commit/571d12abfbe73a974fbe9d260b85975cbfd5f43c"
        },
        "date": 1646868359305,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.0986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1702,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mspector@fastmail.com",
            "name": "Michael Spector",
            "username": "spektom"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e730bce02f15fecc290fe042cdf6f74cc9a78a4c",
          "message": "ICU-21815 Remove unused line",
          "timestamp": "2022-03-10T01:00:26Z",
          "tree_id": "d9fdd09810b4069b89b80efbb1e108c11f85f1bb",
          "url": "https://github.com/unicode-org/icu/commit/e730bce02f15fecc290fe042cdf6f74cc9a78a4c"
        },
        "date": 1646874619224,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.5759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0251,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "8a5f045992eab8898eff5f6628650e75b8f13bc3",
          "message": "ICU-21900 Fix issue filtering in commit checker",
          "timestamp": "2022-03-09T19:20:02-08:00",
          "tree_id": "40c23771b9eb09cead8bd04f2a099e81767191cb",
          "url": "https://github.com/unicode-org/icu/commit/8a5f045992eab8898eff5f6628650e75b8f13bc3"
        },
        "date": 1646882990874,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.5697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1416,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1552,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0484,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "996378821c4ee89e68dc74183359e00f7130de0d",
          "message": "ICU-21839 Add ICU4J test that ISO8601 inherits patterns/symbols grom Gregorian",
          "timestamp": "2022-03-10T09:37:21-08:00",
          "tree_id": "0106e37264406db1343e6cef2ec0b5afbf40768c",
          "url": "https://github.com/unicode-org/icu/commit/996378821c4ee89e68dc74183359e00f7130de0d"
        },
        "date": 1646934500952,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.6125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.014,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.7663,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.6193,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.5835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.8103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "f374427f6018056a6643c6519bbfadf869755ae0",
          "message": "ICU-21900 integrate CLDR release-41-beta1 to ICU main for 71rc",
          "timestamp": "2022-03-10T11:17:09-08:00",
          "tree_id": "52377cd9d7b956ff5192e4fa0fe3d53b630e9a63",
          "url": "https://github.com/unicode-org/icu/commit/f374427f6018056a6643c6519bbfadf869755ae0"
        },
        "date": 1646940555953,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.0081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.4366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.1766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.2444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.1949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "7fe330119e6b5503232cfd780869f5ff685ecdea",
          "message": "ICU-21900 ICU4C 71 change report\n\nSee #2024. Includes update to generator that removes the minor version indication from the reports.",
          "timestamp": "2022-03-10T15:50:45-08:00",
          "tree_id": "006f83812ce403ec53e3769323919eb155941a7e",
          "url": "https://github.com/unicode-org/icu/commit/7fe330119e6b5503232cfd780869f5ff685ecdea"
        },
        "date": 1646956844154,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.645,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.3883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5116,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "19c13048d24f0dc010d48249331913bf436fedb0",
          "message": "ICU-21900 Update ICU4J Change report (BRS#20)\n\nUpdate to show only major release numbers.",
          "timestamp": "2022-03-10T17:58:16-08:00",
          "tree_id": "eceff86f8dff9a267d5dfed594393cb554113fef",
          "url": "https://github.com/unicode-org/icu/commit/19c13048d24f0dc010d48249331913bf436fedb0"
        },
        "date": 1646964486068,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.7269,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2161,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.1093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.0926,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "b5f10c4a1c19a0fe50bc4faa73062df4ed7d41fc",
          "message": "ICU-21332 Add tests from ICU4C TestDelimiters() into related ICU4J test",
          "timestamp": "2022-03-10T21:20:11-08:00",
          "tree_id": "3155b8800258c99573d9556c3e7be8ede960b1ba",
          "url": "https://github.com/unicode-org/icu/commit/b5f10c4a1c19a0fe50bc4faa73062df4ed7d41fc"
        },
        "date": 1646976619115,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.1206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.557,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.4,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.3859,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.4123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.2539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zhin@google.com",
            "name": "Ng Zhi An",
            "username": "ngzhian"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e0bb2ccdeb2d14000c2af63fc530b019f9361200",
          "message": "ICU-21844 Fix variable shadowing",
          "timestamp": "2022-03-11T19:10:53Z",
          "tree_id": "e2752ea8ab56cc092a5a06e9079d324bc5af7500",
          "url": "https://github.com/unicode-org/icu/commit/e0bb2ccdeb2d14000c2af63fc530b019f9361200"
        },
        "date": 1647026456947,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.7975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.4282,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.2686,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.3264,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.3343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "df6a8c877c76a120846323e7662016d534d0690f",
          "message": "ICU-13619 Now that UDATPG_NARROW is @stable, can reference it in header",
          "timestamp": "2022-03-11T13:06:50-08:00",
          "tree_id": "3b6dbaef199f1c19fb5e03bbf08bd8e40c6d29a6",
          "url": "https://github.com/unicode-org/icu/commit/df6a8c877c76a120846323e7662016d534d0690f"
        },
        "date": 1647033443923,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6527,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.7337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4109,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5419,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.5703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "29111fd19582bb995f6a3a8052d21e4fd756b3b4",
          "message": "ICU-21824 make the Unicode license match exactly\n\nThe ICU copy of the Unicode license was missing some lines that are\nconsidered part of the license text.\n\nSee https://github.com/unicode-org/template-repo/blob/main/LICENSE\nand https://www.unicode.org/license.txt",
          "timestamp": "2022-03-14T19:50:44Z",
          "tree_id": "fc1f892d2ef84e0169155887767528a32ca956a5",
          "url": "https://github.com/unicode-org/icu/commit/29111fd19582bb995f6a3a8052d21e4fd756b3b4"
        },
        "date": 1647288113685,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.0751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.6283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4422,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.5784,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.6445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "bfca3ccaac707f5168f5888b2446a4518426bb04",
          "message": "ICU-21875 improve C API coverage",
          "timestamp": "2022-03-15T05:07:59Z",
          "tree_id": "8225a14dcf2fd2abc50cc44b8cbc4b0d4b5643be",
          "url": "https://github.com/unicode-org/icu/commit/bfca3ccaac707f5168f5888b2446a4518426bb04"
        },
        "date": 1647321540468,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.1101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.8576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.6405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.4607,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.5425,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.5324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "811351f67cca8291f0404d9ee30f0acf191b926b",
          "message": "ICU-21900 BRS71 Updated serialization test data for 71.1",
          "timestamp": "2022-03-15T09:47:57-04:00",
          "tree_id": "6fec003664bd37e4fd2da820024913a5620c6207",
          "url": "https://github.com/unicode-org/icu/commit/811351f67cca8291f0404d9ee30f0acf191b926b"
        },
        "date": 1647352681949,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2204,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.7315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4072,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.5395,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "5b4559df24b8b610998b9c3596534dbcf6744bc4",
          "message": "ICU-21900 BRS71 Cleanup import statements in ICU4J",
          "timestamp": "2022-03-15T09:47:25-04:00",
          "tree_id": "710673993a1d12aa96e3404892847295c45f2e07",
          "url": "https://github.com/unicode-org/icu/commit/5b4559df24b8b610998b9c3596534dbcf6744bc4"
        },
        "date": 1647353083109,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.5742,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1364,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1491,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9818,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0338,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0269,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "dbf7c20be650d9425ba8f25784c3f70b4c07f838",
          "message": "ICU-21942 Fix Kosovo 3-letter code to be XKK for uloc_getISO3Country etc.",
          "timestamp": "2022-03-15T10:59:13-07:00",
          "tree_id": "33cac0a5222e84bdd8a8acd8d8f0092e4f2a2765",
          "url": "https://github.com/unicode-org/icu/commit/dbf7c20be650d9425ba8f25784c3f70b4c07f838"
        },
        "date": 1647367834165,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.0236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.516,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.3014,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.6456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.7819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shaobero@adobe.com",
            "name": "shaobero",
            "username": "shaobero"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "b1269c91211deab8f94c3cf85accb51e5a71ca5c",
          "message": "ICU-21823 Adding changes to fix charset detection incase of no match",
          "timestamp": "2022-03-15T21:47:40Z",
          "tree_id": "4dccceca277645512aea849db22a064750395d60",
          "url": "https://github.com/unicode-org/icu/commit/b1269c91211deab8f94c3cf85accb51e5a71ca5c"
        },
        "date": 1647381637327,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.2389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.2173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies.mahmoud@gmail.com",
            "name": "Younies",
            "username": "younies"
          },
          "committer": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "distinct": true,
          "id": "f30956fc9c9fd9e83189ac1c8b372dea0832eb90",
          "message": "ICU-21840 Fix formatting Aliases\n\nSee #2016",
          "timestamp": "2022-03-15T23:27:43+01:00",
          "tree_id": "effd861fbdf9feda8b88ac7df6e6337ffc160e42",
          "url": "https://github.com/unicode-org/icu/commit/f30956fc9c9fd9e83189ac1c8b372dea0832eb90"
        },
        "date": 1647383914933,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.7983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4127,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.282,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.3226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.3284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daju@microsoft.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "committer": {
            "email": "41210545+daniel-ju@users.noreply.github.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "distinct": true,
          "id": "741bbddcf9279f41385862be8913ed13b9e342c0",
          "message": "ICU-21900 BRS71RC Update version number and regenerate configure",
          "timestamp": "2022-03-15T18:26:10-05:00",
          "tree_id": "1b2b5e930f41b85f81e6baf2dc1b46dda2462bd9",
          "url": "https://github.com/unicode-org/icu/commit/741bbddcf9279f41385862be8913ed13b9e342c0"
        },
        "date": 1647387536408,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6143,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1503,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0458,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0611,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "33c9b61b26250e9fe39e098f9f131549d9aa516f",
          "message": "ICU-21871 Make behavior consistent on list format of empty strings",
          "timestamp": "2022-03-15T18:11:57-07:00",
          "tree_id": "fecddd3c2aad1ff68252adb1d70169a10776b5b8",
          "url": "https://github.com/unicode-org/icu/commit/33c9b61b26250e9fe39e098f9f131549d9aa516f"
        },
        "date": 1647393817139,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2119,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.2386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.1051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.1164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.0904,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "633070497465bea1d19d66ad2162a1ec5f4bdda3",
          "message": "ICU-21944 Sync recent uloc_getLanguage/Countries updates to ICU4J; add \"mo\" mapping for C",
          "timestamp": "2022-03-16T09:01:59-07:00",
          "tree_id": "3ddb1ecd0ec14e15c35b4d94a5ec8352fd487ac8",
          "url": "https://github.com/unicode-org/icu/commit/633070497465bea1d19d66ad2162a1ec5f4bdda3"
        },
        "date": 1647447620737,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.5019,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.9026,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.9274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.6325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.7335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "8575c0dacef68253329608650b25412e6db7ca78",
          "message": "ICU-21900 check non-stable API macros, move class boilerplate out of conditionals",
          "timestamp": "2022-03-16T09:03:05-07:00",
          "tree_id": "a400718b943fe30bfd9da7c0ac9a99ed55899aa7",
          "url": "https://github.com/unicode-org/icu/commit/8575c0dacef68253329608650b25412e6db7ca78"
        },
        "date": 1647447970126,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.8435,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.4417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.3539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.3943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "89c5d03023d5e96945188bc365a3d15e53441c86",
          "message": "ICU-21900 BRS71 ICU4J API signature file",
          "timestamp": "2022-03-16T12:36:40-04:00",
          "tree_id": "45a430aee8792898a7dc2a9bc6970172d466a6b5",
          "url": "https://github.com/unicode-org/icu/commit/89c5d03023d5e96945188bc365a3d15e53441c86"
        },
        "date": 1647449282678,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.3025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.7621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.8479,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.5417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.609,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.6099,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "0f49e5086850b0a5171000964a07b570749dc1c3",
          "message": "ICU-21843 Increase performance alert threshold to 200% to avoid false alerts\nfrom occasional spikes.",
          "timestamp": "2022-03-17T09:31:53-07:00",
          "tree_id": "ba17dca7ac476bc685815bcd81bb86df6a6f1d95",
          "url": "https://github.com/unicode-org/icu/commit/0f49e5086850b0a5171000964a07b570749dc1c3"
        },
        "date": 1647535347838,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.256,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.752,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.3,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.3303,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.3447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "ee6433c297477453bf12cd1cdb83a58ef74aea4e",
          "message": "ICU-21949 tzdata2022a update in ICU",
          "timestamp": "2022-03-17T13:56:20-04:00",
          "tree_id": "e98ba87a01a2366cff5ef67b84a910d40deb71cf",
          "url": "https://github.com/unicode-org/icu/commit/ee6433c297477453bf12cd1cdb83a58ef74aea4e"
        },
        "date": 1647540356416,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0521,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "ee6433c297477453bf12cd1cdb83a58ef74aea4e",
          "message": "ICU-21949 tzdata2022a update in ICU",
          "timestamp": "2022-03-17T13:56:20-04:00",
          "tree_id": "e98ba87a01a2366cff5ef67b84a910d40deb71cf",
          "url": "https://github.com/unicode-org/icu/commit/ee6433c297477453bf12cd1cdb83a58ef74aea4e"
        },
        "date": 1647542782702,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6268,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1291,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1068,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daju@microsoft.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "committer": {
            "email": "41210545+daniel-ju@users.noreply.github.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "distinct": true,
          "id": "09331b75bf4eba38e9e4eb3c06109c54ad940dd4",
          "message": "ICU-21901 BRS71GA Update version number",
          "timestamp": "2022-03-21T15:01:26-05:00",
          "tree_id": "5a68777dbd795812fe73f8d7d51314dfe6a1d6dd",
          "url": "https://github.com/unicode-org/icu/commit/09331b75bf4eba38e9e4eb3c06109c54ad940dd4"
        },
        "date": 1647893597881,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.5362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.0052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.6794,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.7695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.7304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d9cc717e2b93b8b27b84b2969c3bfc9a4d0a593",
          "message": "ICU-21956 Merge maint-71 to main\n\nMerging the maint/maint-71 branch into the main branch.",
          "timestamp": "2022-03-23T12:50:13-07:00",
          "tree_id": "5a68777dbd795812fe73f8d7d51314dfe6a1d6dd",
          "url": "https://github.com/unicode-org/icu/commit/1d9cc717e2b93b8b27b84b2969c3bfc9a4d0a593"
        },
        "date": 1648065635310,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6174,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1574,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.035,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0846,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "9b3c0c328c78d5ea74bfdff9026f31e91b173c0b",
          "message": "ICU-21901 integrate CLDR release-41-beta2 to ICU main for 71ga",
          "timestamp": "2022-03-23T16:43:02-07:00",
          "tree_id": "aea6b6784ef5f219025dc77f8d8bf48d19777bc9",
          "url": "https://github.com/unicode-org/icu/commit/9b3c0c328c78d5ea74bfdff9026f31e91b173c0b"
        },
        "date": 1648079647146,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6122,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0992,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1207,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "2aa2a7221c2d28c331ffbe0209b74d3156bbe312",
          "message": "ICU-21953 remove outdated ucdterms.txt\n\nThis is an old version of the Unicode license from 2004,\nwhen the ICU license was different from the Unicode license.\n\nWe should have removed this file in 2016,\nwhen the Unicode license was revised,\nand when the ICU project became a project of the Unicode Consortium,\nadopting the Unicode license for all of ICU.\n\nSince 2016, the Unicode data files are covered by the same license as the\ntop license text in the ICU LICENSE file.",
          "timestamp": "2022-03-24T00:14:02Z",
          "tree_id": "1ceb57fa15c77488db9f7db1a5f553c0d902a004",
          "url": "https://github.com/unicode-org/icu/commit/2aa2a7221c2d28c331ffbe0209b74d3156bbe312"
        },
        "date": 1648081424253,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "ed1d9efc153bce41d61dd10b0ee4641b8513c431",
          "message": "ICU-21954 LICENSE: add more license texts from icu4c files",
          "timestamp": "2022-03-24T21:22:05Z",
          "tree_id": "95b674daae808a0ca19eb48d26139fbd81742c43",
          "url": "https://github.com/unicode-org/icu/commit/ed1d9efc153bce41d61dd10b0ee4641b8513c431"
        },
        "date": 1648157585359,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.127,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.0754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.122,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "2612b8b55af90106c11422a3558006bdc8016bc4",
          "message": "ICU-21965 fix utilities.jar module name\n\ncom.ibm.icu.utilities - otherwise the automatic module name is unusable",
          "timestamp": "2022-03-30T11:09:53-05:00",
          "tree_id": "c25c55651b6b9eedb525e2eafeff337ca86dedcb",
          "url": "https://github.com/unicode-org/icu/commit/2612b8b55af90106c11422a3558006bdc8016bc4"
        },
        "date": 1648657322958,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1285,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1591,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.058,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1169,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "b144aac447e4ddbc20cbec90ed625ef983a64fd9",
          "message": "ICU-21762 Export Script_Extensions with --all flag in icuexportdata\n\nSee #2054",
          "timestamp": "2022-03-30T11:44:02-07:00",
          "tree_id": "9f2a01db8caee468c31e2289b4569774b0bebc48",
          "url": "https://github.com/unicode-org/icu/commit/b144aac447e4ddbc20cbec90ed625ef983a64fd9"
        },
        "date": 1648666515545,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.114,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.5532,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6208,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.3478,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4317,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "c205e7ee49a7086a28b9c275fcfdac9ca3dc815d",
          "message": "ICU-21971 Added a new numeric currecny code SLE/695 for Sierra Leone Leone.",
          "timestamp": "2022-03-30T13:49:51-07:00",
          "tree_id": "f4b713638cc22c33d7948a0c67f139597d39895e",
          "url": "https://github.com/unicode-org/icu/commit/c205e7ee49a7086a28b9c275fcfdac9ca3dc815d"
        },
        "date": 1648674102764,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.6774,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.1008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.1092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.7273,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.7951,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.7827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "committer": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "distinct": true,
          "id": "861e55c246bf56867699a11d274c1875e0690fcc",
          "message": "ICU-21972 Use a shared props file for the ICU Major Version number in the Windows Visual Studio project files.",
          "timestamp": "2022-03-30T20:55:36-07:00",
          "tree_id": "69b9145357b51f281cc1709e50a968a3b0498b49",
          "url": "https://github.com/unicode-org/icu/commit/861e55c246bf56867699a11d274c1875e0690fcc"
        },
        "date": 1648699606832,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2449,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.8877,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.5426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.5993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jubrianc@microsoft.com",
            "name": "Julien Brianceau",
            "username": "jbrianceau"
          },
          "committer": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "distinct": true,
          "id": "a2c90781f14869f6fbd9267d03e155efa192b245",
          "message": "ICU-21967 Remove obsolete references in makedata.vcxproj and makedata_uwp.vcxproj\n\nThese references should have been removed in ICU-20489 and ICU-21420.\nTake the opportunity to update the doc as well.",
          "timestamp": "2022-03-31T11:23:29-07:00",
          "tree_id": "f609c16843cff6482f6dd06be11b759537e87d3b",
          "url": "https://github.com/unicode-org/icu/commit/a2c90781f14869f6fbd9267d03e155efa192b245"
        },
        "date": 1648751626641,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.9873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.7008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.6269,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.319,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.5739,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daju@microsoft.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "committer": {
            "email": "41210545+daniel-ju@users.noreply.github.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "distinct": true,
          "id": "f4f74c1f2ee380c20434f224d7fea05fdb4e91d6",
          "message": "ICU-21957 BRS72RC Update version number to 72.0.1",
          "timestamp": "2022-03-31T16:39:13-07:00",
          "tree_id": "490d3bcef2c5aed9fa04a64e006f6eea14f5098b",
          "url": "https://github.com/unicode-org/icu/commit/f4f74c1f2ee380c20434f224d7fea05fdb4e91d6"
        },
        "date": 1648770545943,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.7779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.2927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.1743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.2864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.2499,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "4833cc89b2fae2e8863b46bf1dc785964847e882",
          "message": "ICU-20715 CollationDataBuilder reset outdated prefix+contraction values\n\nSee #2052",
          "timestamp": "2022-04-04T16:10:13Z",
          "tree_id": "32748a15222ff1509cad57b04d3294c0f402e8df",
          "url": "https://github.com/unicode-org/icu/commit/4833cc89b2fae2e8863b46bf1dc785964847e882"
        },
        "date": 1649089305573,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.2077,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.6008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.6454,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.3023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.224,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "4747484273dc65a18a0469aca4d36840d64c10c6",
          "message": "ICU-21966 Cleanup -Wunused-but-set-variable\n\nSee #2055",
          "timestamp": "2022-04-06T12:51:46-07:00",
          "tree_id": "61c6000acd9127af32ccdebbe58a5458d0f63962",
          "url": "https://github.com/unicode-org/icu/commit/4747484273dc65a18a0469aca4d36840d64c10c6"
        },
        "date": 1649275369003,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.9006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.4636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4346,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "87cee860e035e93cee30cc0dab1be8a697f42646",
          "message": "ICU-21984 Fix DateIntervalFormat.normalizeHourMetacharacters() so that it doesn't require the hour and day-period\nfields to appear in any particular order or position in the skeleton string.",
          "timestamp": "2022-04-11T14:37:15-07:00",
          "tree_id": "9d15834932f32762c8a0a350e9263a8dd2a38900",
          "url": "https://github.com/unicode-org/icu/commit/87cee860e035e93cee30cc0dab1be8a697f42646"
        },
        "date": 1649713674070,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.7322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2416,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.3038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.8614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.9046,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.0155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "131146a5f43955eee68693e1e627df13da1ae384",
          "message": "ICU-21984 Fix DateIntervalFormat.normalizeHourMetacharacters() so that it doesn't require the hour and day-period\nfields to appear in any particular order or position in the skeleton string.",
          "timestamp": "2022-04-14T14:21:02-07:00",
          "tree_id": "fb805e6034ebad2b48accba6256dbdf1297371ac",
          "url": "https://github.com/unicode-org/icu/commit/131146a5f43955eee68693e1e627df13da1ae384"
        },
        "date": 1649971916097,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.1325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.159,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47824c5568f0a1528c44e5264cb65e9e18705c18",
          "message": "ICU-21956 Merge maint-71 to main",
          "timestamp": "2022-04-14T17:45:38-07:00",
          "tree_id": "b53a205780b474ed928dcf2732513ac8de8743a6",
          "url": "https://github.com/unicode-org/icu/commit/47824c5568f0a1528c44e5264cb65e9e18705c18"
        },
        "date": 1649984140615,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2126,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.73,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.7933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5671,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.5847,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "fca6b342c03d89998eba227d284e232dabbfab47",
          "message": "ICU-21994 Fix heap-buffer-overflow",
          "timestamp": "2022-04-20T12:03:35-07:00",
          "tree_id": "09972e260fbe59552e69bb75887d064410144398",
          "url": "https://github.com/unicode-org/icu/commit/fca6b342c03d89998eba227d284e232dabbfab47"
        },
        "date": 1650482071985,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.3869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.8641,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.9551,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.4134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.5404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.4681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17109322+hugovdm@users.noreply.github.com",
            "name": "Hugo van der Merwe",
            "username": "hugovdm"
          },
          "committer": {
            "email": "17109322+hugovdm@users.noreply.github.com",
            "name": "Hugo van der Merwe",
            "username": "hugovdm"
          },
          "distinct": true,
          "id": "50e14fe15bcde3311f3e76bb196977a0724d7e8b",
          "message": "ICU-21959 Update stale Jira tickets in ICU4J TODOs\n\nSee #2062",
          "timestamp": "2022-04-27T23:31:46+02:00",
          "tree_id": "320adf839470614e0950cfe770d84936a3fe9df2",
          "url": "https://github.com/unicode-org/icu/commit/50e14fe15bcde3311f3e76bb196977a0724d7e8b"
        },
        "date": 1651095699960,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6878,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2059,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.1778,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.2106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "cb6b778e1b5ef6a1bb82e085aaf427fc086331c9",
          "message": "ICU-21959 Online demos how to update\n\nSee #2069",
          "timestamp": "2022-04-29T09:36:51-07:00",
          "tree_id": "0e8fc014a5ef382a0bcb4e65b3f1013839bed3db",
          "url": "https://github.com/unicode-org/icu/commit/cb6b778e1b5ef6a1bb82e085aaf427fc086331c9"
        },
        "date": 1651250892866,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.8477,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.3259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.9743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.9917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "43d082665e72d853ef66626e0b17470722776497",
          "message": "ICU-22006 icupkg: %%ALIAS & %%Parent do not need truncation parent",
          "timestamp": "2022-04-29T17:50:11Z",
          "tree_id": "cc8b7de3a086a733ec693be2cd739669cd6d57c9",
          "url": "https://github.com/unicode-org/icu/commit/43d082665e72d853ef66626e0b17470722776497"
        },
        "date": 1651255196443,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6919,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.1444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1664,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1601,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "505535813fd539800de0930883cdb0e0ba678842",
          "message": "ICU-22007 remove outdated terms of use from Unicode conversion files",
          "timestamp": "2022-04-29T19:51:01Z",
          "tree_id": "0648d877b9f7113b462aa8be66a35844db09208a",
          "url": "https://github.com/unicode-org/icu/commit/505535813fd539800de0930883cdb0e0ba678842"
        },
        "date": 1651262739781,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6871,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2044,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.1488,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1798,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "07a50207b7a0ae162a5b51856f43576f39751377",
          "message": "ICU-21679 avoid escape of U+FFFF in a character literal",
          "timestamp": "2022-04-29T20:43:53Z",
          "tree_id": "0eab5a9224a4cf8dcff516967a14f248572b25be",
          "url": "https://github.com/unicode-org/icu/commit/07a50207b7a0ae162a5b51856f43576f39751377"
        },
        "date": 1651265641521,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1851,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2079,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.1231,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "e96e9410bde06962c211fa6f21c3d91263a90f86",
          "message": "ICU-22005 Fix int32 overflow in FormattedStringBuilder\n\nSee #2070",
          "timestamp": "2022-04-29T18:25:01-07:00",
          "tree_id": "02cea832ea6354cb413ef3ac4167fba0fde781bd",
          "url": "https://github.com/unicode-org/icu/commit/e96e9410bde06962c211fa6f21c3d91263a90f86"
        },
        "date": 1651282487100,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6903,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2039,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.1335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1668,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "eea7985e5a7108d00f1224ed36f0220fa9441cdc",
          "message": "ICU-22016 utrie2.h need not include mutex.h",
          "timestamp": "2022-05-06T20:50:58Z",
          "tree_id": "f2382974fa83f3747ccc3c7bf9e390d0f9d141dc",
          "url": "https://github.com/unicode-org/icu/commit/eea7985e5a7108d00f1224ed36f0220fa9441cdc"
        },
        "date": 1651870926379,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.9287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.3809,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.4412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.0693,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "fda4a82bba405579a280b71922056c801c2b3ca2",
          "message": "ICU-21960 fix clang 13 C++20 warnings",
          "timestamp": "2022-05-07T15:21:08Z",
          "tree_id": "d4b6c9e51f35a2735c3c07de3993e596cb42e051",
          "url": "https://github.com/unicode-org/icu/commit/fda4a82bba405579a280b71922056c801c2b3ca2"
        },
        "date": 1651937527526,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6877,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2043,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.1447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1769,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1764,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chetanladdha@microsoft.com",
            "name": "Chetan Laddha",
            "username": "chetanladdha"
          },
          "committer": {
            "email": "chetan.laddha@gmail.com",
            "name": "Chetan Laddha",
            "username": "chetanladdha"
          },
          "distinct": true,
          "id": "5961aacd3c66f3bb8f51d9b4833c03613c57dc01",
          "message": "ICU-21945 Add support for Visual Studio 2022\n\nSee #2059",
          "timestamp": "2022-05-10T22:57:18+05:30",
          "tree_id": "0a38273102e79b4fb0c96aae8fd320b79fae8c57",
          "url": "https://github.com/unicode-org/icu/commit/5961aacd3c66f3bb8f51d9b4833c03613c57dc01"
        },
        "date": 1652204309180,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.9115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.3356,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.3909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0479,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.08,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "bdcec144b9f627c8f96261a6afeebb52e4d81ab0",
          "message": "ICU-22012 Add four Japanese word into the dictionary\n\nSee #2072",
          "timestamp": "2022-05-11T08:19:53-07:00",
          "tree_id": "85e2beca4e203db5c621d2700bc85b0a8c9b1b52",
          "url": "https://github.com/unicode-org/icu/commit/bdcec144b9f627c8f96261a6afeebb52e4d81ab0"
        },
        "date": 1652283078163,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.8009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.2523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.8255,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.8727,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "f8a0810a5a9a8811d13e1e4d9ef266ef5a102729",
          "message": "ICU-22030 Modifies GHA CI performance testing so that existing files in the\nperformance results publishing repository are no longer deleted when the test\nresults are forwarded. This concretely affects the README file in the icu-perf\nrepository, which got deleted with the first data transfer.\n\nRestoring the README file in icu-perf will be a complementary PR.",
          "timestamp": "2022-05-13T17:00:05-07:00",
          "tree_id": "9ba8576b904411dc587d6603ba71189588114912",
          "url": "https://github.com/unicode-org/icu/commit/f8a0810a5a9a8811d13e1e4d9ef266ef5a102729"
        },
        "date": 1652487114520,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.9355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.3665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.3585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.908,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.872,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "distinct": true,
          "id": "85705f04e03f9cb41d4406bcd38c3e419eb7889d",
          "message": "ICU-21960 C++20 Warnings from ATOMIC_VAR_INIT\n\nRemove the ICU macros ATOMIC_INT32_T_INITIALIZER and U_INITONCE_INITIALIZER,\nwhich made use of C++ ATOMIC_VAR_INIT, which has been removed from C++20.\n\nWith modern C++ features being available, these macros no longer served\nany real need.",
          "timestamp": "2022-05-17T15:45:06-07:00",
          "tree_id": "4f972e8ea8588a819020277d8c518b5102e52695",
          "url": "https://github.com/unicode-org/icu/commit/85705f04e03f9cb41d4406bcd38c3e419eb7889d"
        },
        "date": 1652828102714,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.1264,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "3d89af0f72d78d0825fbf17fd7808a4d80b6b4ad",
          "message": "ICU-22023 Fix Calendar::get() return out of bound value and SimpleDateTime::format assert while TimeZone is \"UTC\" and value is -1e-9\n\nSee #2086",
          "timestamp": "2022-05-19T13:45:59-07:00",
          "tree_id": "b9cf8e61607c058b52fb71efef44dedd843e1ae7",
          "url": "https://github.com/unicode-org/icu/commit/3d89af0f72d78d0825fbf17fd7808a4d80b6b4ad"
        },
        "date": 1652993757134,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8171,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.7614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.8061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4166,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "committer": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "distinct": true,
          "id": "f6300c97cd4b8f1224776e43226d3a8bbb695c2c",
          "message": "ICU-22040 Update clang-13 build bots to clang-14. Add libc++ build bot.",
          "timestamp": "2022-05-19T14:05:14-07:00",
          "tree_id": "4a40a3af51ba2ebe33f2fbb66613585625f0a00c",
          "url": "https://github.com/unicode-org/icu/commit/f6300c97cd4b8f1224776e43226d3a8bbb695c2c"
        },
        "date": 1652994920204,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.9811,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.3735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.3985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.1791,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.2784,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "8fcb22f88e7100cd714861b672a3137c7d431a01",
          "message": "ICU-22037 Adds performance tests for ICU forward and backward\nstring search.\n\nICU-22037 Removes a left-over escaped doublequote; removes a\ntest print-out.",
          "timestamp": "2022-05-20T11:56:11-07:00",
          "tree_id": "52eaabe6b81058bf46f32476bad6441fe6d1175c",
          "url": "https://github.com/unicode-org/icu/commit/8fcb22f88e7100cd714861b672a3137c7d431a01"
        },
        "date": 1653073613318,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.483,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.2724,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.3777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "committer": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "distinct": true,
          "id": "fcc981a5b7a11628187ee6a1f97203449b48bd36",
          "message": "ICU-21935 Add DisplayOptions\n\nSee #2061",
          "timestamp": "2022-05-21T03:20:37+02:00",
          "tree_id": "11b85ea79fcb3796ba2871ae8602fce888bb0309",
          "url": "https://github.com/unicode-org/icu/commit/fcc981a5b7a11628187ee6a1f97203449b48bd36"
        },
        "date": 1653096682958,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9664,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0606,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0693,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "74a723f22fe2c53445087215d0d1acee69efdda6",
          "message": "ICU-21959 Fix the URL to the icu-le-hb repository.\n\nhttps://sourceforge.net/p/icu/mailman/message/37657918/",
          "timestamp": "2022-05-24T20:55:00+02:00",
          "tree_id": "9acb2514b5ff0f3877d1f8808f75c88511903b33",
          "url": "https://github.com/unicode-org/icu/commit/74a723f22fe2c53445087215d0d1acee69efdda6"
        },
        "date": 1653419398995,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.0781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.7791,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.6177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.3864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.5496,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.5656,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "f5f4813d161d685a807aa5ea25efa685b0f6eaeb",
          "message": "ICU-22043 Change minimum ZONE_OFFSET value from -12h to -16h\n\nSee #2100",
          "timestamp": "2022-05-24T16:11:39-07:00",
          "tree_id": "affebcf816f9f90df71ea765d812209d8e6490d9",
          "url": "https://github.com/unicode-org/icu/commit/f5f4813d161d685a807aa5ea25efa685b0f6eaeb"
        },
        "date": 1653434724723,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.8464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.3983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.4101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.2576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e17219582ed0396d993927066e95af0c9199f8db",
          "message": "ICU-21980 add missing comments, finish change log",
          "timestamp": "2022-05-25T18:23:11Z",
          "tree_id": "f3a73d2dbd02b2945b6b3253c0c5e0532259f4fd",
          "url": "https://github.com/unicode-org/icu/commit/e17219582ed0396d993927066e95af0c9199f8db"
        },
        "date": 1653503661041,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.8439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.4244,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.2689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.3514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.3606,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "8d5a97ae0f49f6974372736ca67db15c37522f6f",
          "message": "ICU-21935 DisplayOptions cleanup",
          "timestamp": "2022-05-26T18:30:07Z",
          "tree_id": "398c8d5544c475dd1e10c83bfec4a84e5b6f66d9",
          "url": "https://github.com/unicode-org/icu/commit/8d5a97ae0f49f6974372736ca67db15c37522f6f"
        },
        "date": 1653590444652,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6379,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9769,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0671,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "fc64f8db3f21464b748d4e22383268e9cf5cdb58",
          "message": "ICU-22041 Fix \"Africa/Casablanca\" show strange LONG displayName\n\nSee #2096",
          "timestamp": "2022-05-26T14:59:10-07:00",
          "tree_id": "458cb5f8db5aad448a044731d505ac5a4701a132",
          "url": "https://github.com/unicode-org/icu/commit/fc64f8db3f21464b748d4e22383268e9cf5cdb58"
        },
        "date": 1653603093906,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.2265,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.6181,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.5985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.1423,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.2053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.1941,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "64b35481263ac4df37a28a9c549553ecc9710db2",
          "message": "ICU-21957 integrate CLDR release-42-m1 (early milestone) to ICU main for 72 (rebased on main) +\nFormattedStringBuilderTest::testInsertOverflow infolns,logKnownIssue skip for CI exhaustive crash",
          "timestamp": "2022-05-27T13:50:43-07:00",
          "tree_id": "df4c6331dadbb97587cbcf5982199f57d20160b3",
          "url": "https://github.com/unicode-org/icu/commit/64b35481263ac4df37a28a9c549553ecc9710db2"
        },
        "date": 1653686119622,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1191,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0655,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0668,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "committer": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "distinct": true,
          "id": "d6fc9b828c95f0d8d10a8648b3471459d05fb8c4",
          "message": "ICU-21935 Add DisplayOptions to NumberFormatterSettings\n\nSee #2099",
          "timestamp": "2022-05-31T13:02:01-07:00",
          "tree_id": "e043f84264e963b665a5b126a084fab5dd042bbd",
          "url": "https://github.com/unicode-org/icu/commit/d6fc9b828c95f0d8d10a8648b3471459d05fb8c4"
        },
        "date": 1654027940860,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1269,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.1511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9785,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "c5d0fff5a07390f8cf65db8e177489e5b03ff422",
          "message": "ICU-21980 parse multiple `@missing` lines",
          "timestamp": "2022-06-02T21:29:24Z",
          "tree_id": "14e81937066103dfc9353c958a0bb41c72dbf84d",
          "url": "https://github.com/unicode-org/icu/commit/c5d0fff5a07390f8cf65db8e177489e5b03ff422"
        },
        "date": 1654205952499,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0541,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.5719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.2701,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.3567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.3668,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "33af80e980ff918ab4e34d85dd9e3d864ad17e2e",
          "message": "ICU-21957 improve logKnownIssue skip for FormattedStringBuilderTest::testInsertOverflow crash",
          "timestamp": "2022-06-03T09:02:31-07:00",
          "tree_id": "62e75a5c1e84e5ed56035da1986beab420f8c1f4",
          "url": "https://github.com/unicode-org/icu/commit/33af80e980ff918ab4e34d85dd9e3d864ad17e2e"
        },
        "date": 1654272873135,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.4595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.8709,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.7451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.3028,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.5953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "agrieve@chromium.org",
            "name": "agrieve",
            "username": "agrieve"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "18dd0e4c223716b73e2b0735cc2b653cef5ee1ab",
          "message": "ICU-21960 Add missing \"const\" to kAttributeKey\n\nThis variable was flagged by a chromium check that looks for variables named like constants that end up in the `.data` ELF section (rather than in `.rodata`).",
          "timestamp": "2022-06-08T16:56:24Z",
          "tree_id": "27918448252d8943e20b1969b94b193224488ead",
          "url": "https://github.com/unicode-org/icu/commit/18dd0e4c223716b73e2b0735cc2b653cef5ee1ab"
        },
        "date": 1654708026737,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.0051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.4688,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.5102,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9272,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.9735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.9365,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "distinct": true,
          "id": "0dcb1cb065d60685aa487848050c3b385c9e6c0b",
          "message": "ICU-22035 Remove instances of pre c++11 default constructor prevention pattern",
          "timestamp": "2022-06-08T16:28:02-07:00",
          "tree_id": "eff466f1fdf88e3b23d1de71c12ac226948e7455",
          "url": "https://github.com/unicode-org/icu/commit/0dcb1cb065d60685aa487848050c3b385c9e6c0b"
        },
        "date": 1654732043988,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6752,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.2253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8156,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "distinct": true,
          "id": "1eb6f38b96116b456eaf2c06726a7d764c4df62d",
          "message": "ICU-22053 Clean up usages of Macro Header Guards",
          "timestamp": "2022-06-09T10:18:28-07:00",
          "tree_id": "ec128dbd6d1be5eb97d215131cd69b53c0d201c3",
          "url": "https://github.com/unicode-org/icu/commit/1eb6f38b96116b456eaf2c06726a7d764c4df62d"
        },
        "date": 1654795806764,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.208,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.6729,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.7464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.1351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.2471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "df8fbc22e8dbb7adb7a0677692184e508ebd7e2e",
          "message": "ICU-22036 Modify ICU4J performance test framework to work when executed by\nGitHub Action. This includes introducing a new flag (-a) to indicate\ninvocation from command line/GHA shell, moving elements of the workflow\nfrom Perl into the Java framework (calculation of iteration numbers), and\ngenerating NDJSON output for GitHub Benchmark processing.\nBackward compatibility with the Perl script invocation has been preserved.\n\nICU-22036 Adds a comment clarifying the reason why NDJSON output is generated.",
          "timestamp": "2022-06-09T14:57:21-07:00",
          "tree_id": "85631259fdd484ac01da942bdb50b24f3d40e06b",
          "url": "https://github.com/unicode-org/icu/commit/df8fbc22e8dbb7adb7a0677692184e508ebd7e2e"
        },
        "date": 1654812691568,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.9308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.4332,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.4695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.8991,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.9093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.9014,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "c5872e7f679e2acdcc00fda97da92e2d82dbc5e3",
          "message": "ICU-22017 Fix numbering system resolution in NumberRangeFormatter\n\nSee #2085",
          "timestamp": "2022-06-15T13:08:46-07:00",
          "tree_id": "ad7ac4ace1153b30fadd7deadaac7d7e44615d15",
          "url": "https://github.com/unicode-org/icu/commit/c5872e7f679e2acdcc00fda97da92e2d82dbc5e3"
        },
        "date": 1655324345577,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.3452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.7316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.8252,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.2553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.2946,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.311,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "5a77fd9d110fba9f6fd4b16a5b969d64facd766e",
          "message": "ICU-21997 Fixes currency code retrieval for locale: instead of selecting the\nfirst currency in the list now select the first legal tender currency in the\nlist. Or the first currency if the list has no legal tender currencies (which\nis the previous behaviour).\n\nICU-21997 Removed an overlooked earlier unit test attempt.\n\nICU-21997 Shields C++ unit test from compilation when configuration flag\nUCONFIG_NO_FORMATTING is set.",
          "timestamp": "2022-06-16T13:49:15-07:00",
          "tree_id": "a749cb19ab2ddd2b88b536b237fe01a7cf76dec7",
          "url": "https://github.com/unicode-org/icu/commit/5a77fd9d110fba9f6fd4b16a5b969d64facd766e"
        },
        "date": 1655413234132,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "2f6cc2f7e736878c5ea8ec2c8e067b74805eeafc",
          "message": "ICU-22070 Return if UErrorCode is error in calendar.cpp",
          "timestamp": "2022-06-23T09:26:41-07:00",
          "tree_id": "5810453e007e207811355c0fe52a81a09ea8e327",
          "url": "https://github.com/unicode-org/icu/commit/2f6cc2f7e736878c5ea8ec2c8e067b74805eeafc"
        },
        "date": 1656002196924,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8077,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.428,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7968,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "harris.pc@gmail.com",
            "name": "Paul Harris",
            "username": "paulharris"
          },
          "committer": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "distinct": true,
          "id": "86cc2b98cbf694074cfe951467cc373d26fa9df2",
          "message": "ICU-22002 Don't undef __STRICT_ANSI__",
          "timestamp": "2022-06-23T11:55:06-07:00",
          "tree_id": "dd0638ba208752e363678cf0bd3a696689f351a2",
          "url": "https://github.com/unicode-org/icu/commit/86cc2b98cbf694074cfe951467cc373d26fa9df2"
        },
        "date": 1656011144166,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8538,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "43f2ae75ca9f70475f0c36e0c3edfb48b568dcbc",
          "message": "ICU-22004 Avoid UBSan bug by casting only when success",
          "timestamp": "2022-06-24T18:00:03-07:00",
          "tree_id": "8e486672184faf7753fdca3ac821a798f44d29be",
          "url": "https://github.com/unicode-org/icu/commit/43f2ae75ca9f70475f0c36e0c3edfb48b568dcbc"
        },
        "date": 1656119381099,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2683,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.8913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4992,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "6df8bb7307ae9f9ebc961f0887c106f64ea05aa9",
          "message": "ICU-22036 Adds ICU4J performance tests to post-merge continuous integration\nworkflow. Also fixes a tiny oversight in the ICU4J performance framework.",
          "timestamp": "2022-06-27T08:47:48-07:00",
          "tree_id": "f40e02e24289a5397ac51ef5272fedc20596f358",
          "url": "https://github.com/unicode-org/icu/commit/6df8bb7307ae9f9ebc961f0887c106f64ea05aa9"
        },
        "date": 1656345536804,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3863,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4159,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7707,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "929cf40ecbf464bb133113995185c7353f2e106d",
          "message": "ICU-22059 Add one Thai word into the Thai dictionary\n\nSee #2112",
          "timestamp": "2022-06-27T09:27:56-07:00",
          "tree_id": "06e8f81c97ab94be546a5187c8e251db670d5e2f",
          "url": "https://github.com/unicode-org/icu/commit/929cf40ecbf464bb133113995185c7353f2e106d"
        },
        "date": 1656348081769,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3085,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7725,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.7466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.6939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d7c424b00f89ad2cb6734b106964ed72a3390415",
          "message": "ICU-22073 Do not throw away CompactDecimalFormat's affixes",
          "timestamp": "2022-06-27T12:53:22-07:00",
          "tree_id": "ec0d98e1ce9116d2d5820db9421d646147cb6f92",
          "url": "https://github.com/unicode-org/icu/commit/d7c424b00f89ad2cb6734b106964ed72a3390415"
        },
        "date": 1656360275171,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2671,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8557,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.8975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4303,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5001,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4952,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "3cefbd55c7aafbb29bc67aa9a27df9bf13293a5a",
          "message": "ICU-22028 Export collation and normalization data for ICU4X",
          "timestamp": "2022-06-28T08:37:32-07:00",
          "tree_id": "dc6bb456103fdf93ff19ad327327005cd0d65e6f",
          "url": "https://github.com/unicode-org/icu/commit/3cefbd55c7aafbb29bc67aa9a27df9bf13293a5a"
        },
        "date": 1656431449258,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8561,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.9049,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4329,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5026,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.5091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "ea970109f85a85e720c9259f101ec33be6e9d912",
          "message": "ICU-22028 Export collation and normalization data for ICU4X",
          "timestamp": "2022-06-28T09:07:30-07:00",
          "tree_id": "6da2a4d39d5743dbd057c6ebd599885404d26bbc",
          "url": "https://github.com/unicode-org/icu/commit/ea970109f85a85e720c9259f101ec33be6e9d912"
        },
        "date": 1656433279056,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.9692,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4501,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.5135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.2214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.3011,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.3177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "58060eafdc69ac7a060e8b80d942246adc471f0f",
          "message": "ICU-22036 Adds ICU4J date formatting performance test, which is last of the\nICU4J performance tests.",
          "timestamp": "2022-06-29T12:02:29-07:00",
          "tree_id": "c282c6da7f45a320f8d00b465f596b5b55770b50",
          "url": "https://github.com/unicode-org/icu/commit/58060eafdc69ac7a060e8b80d942246adc471f0f"
        },
        "date": 1656530008181,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.9038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.5074,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robertbastian@users.noreply.github.com",
            "name": "Robert Bastian",
            "username": "robertbastian"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "783b4f7b6a7f0996563c802bcec296e2a81d882f",
          "message": "ICU-22061 rename",
          "timestamp": "2022-06-29T13:16:26-07:00",
          "tree_id": "acffa8df9f2a19ac3aa86209887641a5cf2fcb49",
          "url": "https://github.com/unicode-org/icu/commit/783b4f7b6a7f0996563c802bcec296e2a81d882f"
        },
        "date": 1656534402646,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7904,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "58060eafdc69ac7a060e8b80d942246adc471f0f",
          "message": "ICU-22036 Adds ICU4J date formatting performance test, which is last of the\nICU4J performance tests.",
          "timestamp": "2022-06-29T12:02:29-07:00",
          "tree_id": "c282c6da7f45a320f8d00b465f596b5b55770b50",
          "url": "https://github.com/unicode-org/icu/commit/58060eafdc69ac7a060e8b80d942246adc471f0f"
        },
        "date": 1656541628164,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4213,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8415,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robertbastian@users.noreply.github.com",
            "name": "Robert Bastian",
            "username": "robertbastian"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "6cb4fd58488060ac87f71d2702b56f972e5861a8",
          "message": "ICU-22061 rename",
          "timestamp": "2022-06-29T16:28:44-07:00",
          "tree_id": "c222a2addef0db0bb07146e49550eef2671edc21",
          "url": "https://github.com/unicode-org/icu/commit/6cb4fd58488060ac87f71d2702b56f972e5861a8"
        },
        "date": 1656545923734,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.9826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.4138,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.5142,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0392,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.1649,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.3278,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "distinct": true,
          "id": "e2ae4f5324e863a92bf79892ef1a2e0d6b183af7",
          "message": "ICU-22054 Remove declarations for unimplemented APIs\n\nThis patch also includes marking `=delete` on specific `normal` member functions, as opposed to compiler generated functions,\nbased on the description of such functions' surrounding comments.",
          "timestamp": "2022-07-01T08:57:10-07:00",
          "tree_id": "fda6935be0dbf84c2fec7832622127bc05ca0b48",
          "url": "https://github.com/unicode-org/icu/commit/e2ae4f5324e863a92bf79892ef1a2e0d6b183af7"
        },
        "date": 1656691647457,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.2171,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.7408,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.8245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0599,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.1106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daschuer@mixxx.org",
            "name": "Daniel Schürmann",
            "username": "daschuer"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "9f358ccb2472866a849aa4f393ef4528448c3e9d",
          "message": "ICU-22010 Add early check for AX_CHECK_COMPILE_FLAG\n\nThis helps to avoid missleading error message:\n\n```\n./source/configure: line 7981: syntax error near unexpected token 'newline'\n./source/configure: line 7981: 'AX_CHECK_COMPILE_FLAG('\n```",
          "timestamp": "2022-07-12T13:30:01+05:30",
          "tree_id": "cb81138f619f83e5a8667ed95e034c4d81ae9b8b",
          "url": "https://github.com/unicode-org/icu/commit/9f358ccb2472866a849aa4f393ef4528448c3e9d"
        },
        "date": 1657613546052,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8049,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4232,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7903,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "721d41153ec4f80cd8556ac57dc023d169ef9dd2",
          "message": "ICU-22071 Fixed DateTimePatternGenerator to respect the locale's \"rg\" subtag (when it has one) when determining the hour cycle.",
          "timestamp": "2022-07-12T10:55:03-07:00",
          "tree_id": "c8298bfaaccafa158a689ec1bfd5c56a0cc8f44d",
          "url": "https://github.com/unicode-org/icu/commit/721d41153ec4f80cd8556ac57dc023d169ef9dd2"
        },
        "date": 1657649141513,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.9995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6693,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.1042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.1689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.1491,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "4f6f087f2eaa4011237ee0c4e4cf2b1e47ea70fc",
          "message": "ICU-22085 Fix old typo on calculating path size in loadTestData() and add a few small changes to support running ICU unit tests in Xcode.",
          "timestamp": "2022-07-14T08:53:16-07:00",
          "tree_id": "35a3d64dc578f2aac68d1255b7f91072d95f1e29",
          "url": "https://github.com/unicode-org/icu/commit/4f6f087f2eaa4011237ee0c4e4cf2b1e47ea70fc"
        },
        "date": 1657814616034,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.8881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.5204,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.5518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9415,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.9777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "william.marlow@ibm.com",
            "name": "William Marlow",
            "username": "lux01"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "9a7b0e08d0bb8ed11775c76f935eabc155fdc795",
          "message": "ICU-22086 Add ibm-clang_r/ibm-clang++_r to runConfigureICU",
          "timestamp": "2022-07-14T17:38:59Z",
          "tree_id": "0fedd85fc633e091452763491c5688581ca32177",
          "url": "https://github.com/unicode-org/icu/commit/9a7b0e08d0bb8ed11775c76f935eabc155fdc795"
        },
        "date": 1657820927578,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7887,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8448,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "6394a48d067134a99faca4c7329accee0c580301",
          "message": "ICU-21957 integrate CLDR release-42-m2 (mid milestone) to ICU main for 72",
          "timestamp": "2022-07-14T10:56:39-07:00",
          "tree_id": "313c19455be6773aa335e6e10e0b9518d142b996",
          "url": "https://github.com/unicode-org/icu/commit/6394a48d067134a99faca4c7329accee0c580301"
        },
        "date": 1657822006769,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2613,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.9004,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4292,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4962,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "a8594a401f3241b19f9b8b61bf786fde917b4c72",
          "message": "ICU-22056 Add a new unum_hasAttribute() method.",
          "timestamp": "2022-07-15T16:03:56-07:00",
          "tree_id": "1db5acef8d7251a4829b61c61c686f5822486667",
          "url": "https://github.com/unicode-org/icu/commit/a8594a401f3241b19f9b8b61bf786fde917b4c72"
        },
        "date": 1657927593324,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2713,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.9056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.5092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "9c72bf975890a1edacce046a2e55e88023a86389",
          "message": "ICU-22087 Export a non-recursive canonical decomposition supplement for ICU4X",
          "timestamp": "2022-07-18T10:05:10-07:00",
          "tree_id": "cf9c0091bce7abf7054b71884fd644acc42cae16",
          "url": "https://github.com/unicode-org/icu/commit/9c72bf975890a1edacce046a2e55e88023a86389"
        },
        "date": 1658164834498,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.9041,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4492,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "8e4af7693ded13e4eb1056044651760bcec05d27",
          "message": "ICU-22087 Export a non-recursive canonical decomposition supplement for ICU4X",
          "timestamp": "2022-07-18T13:25:43-07:00",
          "tree_id": "bab799ee9751794cad779d688f0b42f6513b3c01",
          "url": "https://github.com/unicode-org/icu/commit/8e4af7693ded13e4eb1056044651760bcec05d27"
        },
        "date": 1658176538021,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 5.8502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.4274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.2768,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.3452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.3397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "9d230f923c51bb72af9420e8cf53a019894a8e52",
          "message": "ICU-21939 Fix bogus \"conflicting fields\" error in DateIntervalFormat.",
          "timestamp": "2022-07-18T15:16:40-07:00",
          "tree_id": "c0319f3181cebd91a769eaebd21495a02b16a9cb",
          "url": "https://github.com/unicode-org/icu/commit/9d230f923c51bb72af9420e8cf53a019894a8e52"
        },
        "date": 1658183319968,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.1888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.7642,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.8221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.1003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.1329,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.1599,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "86166e0a2dd1119e086d04b8973dc486b4af8dcc",
          "message": "ICU-22075 Adds a random waiting period (0 - 179 secs) to each test that runs as\npart of a high concurrency performance test setup. This will disperse commits\nof performance test results into the data branch over a wider time frame and\ndrastically reduces the chance of data uploads failing after ten unsuccesful\ncommit attempts.\n\nTest runs showed a huge drop in failed commits/retry, from a high of 113\nwithout wait down to only 4 with the extra wait.\n\nICU-22075 Add comment explaining the rationale of the random\nsleep period prior to test execution.",
          "timestamp": "2022-07-22T08:14:58-07:00",
          "tree_id": "e00a8df1e80c75ce21faf8a38134eaaa9b3b31d3",
          "url": "https://github.com/unicode-org/icu/commit/86166e0a2dd1119e086d04b8973dc486b4af8dcc"
        },
        "date": 1658503730845,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.8974,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.499,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "c258f3d6f81a2514b76d72c5deae8cbc295aecd6",
          "message": "ICU-22095 Export ICU4X normalization data with tries only without Unicode sets",
          "timestamp": "2022-07-25T15:54:29-07:00",
          "tree_id": "1e4ac369923311e8ac0922960bbb1cc63650003f",
          "url": "https://github.com/unicode-org/icu/commit/c258f3d6f81a2514b76d72c5deae8cbc295aecd6"
        },
        "date": 1658790850239,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8048,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8527,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "ed2b3a335bb0dc7f0a3866807c326277c8b8119d",
          "message": "ICU-22095 Export ICU4X normalization data with tries only without Unicode sets",
          "timestamp": "2022-07-25T15:54:31-07:00",
          "tree_id": "55e92ebb6e61c3ea32ba795080b0831e075ef7b8",
          "url": "https://github.com/unicode-org/icu/commit/ed2b3a335bb0dc7f0a3866807c326277c8b8119d"
        },
        "date": 1658791647168,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.15,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0501,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "58a51495dd1c94d29cda93ffc29a904d77e50d31",
          "message": "ICU-22088 Various fixes to make dealing with NUMBERING_SYSTEM formatters easier.",
          "timestamp": "2022-07-28T16:18:01-07:00",
          "tree_id": "69c47d1745ae982673f69de39b18f9c44cdc75b7",
          "url": "https://github.com/unicode-org/icu/commit/58a51495dd1c94d29cda93ffc29a904d77e50d31"
        },
        "date": 1659051122617,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.4806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.9318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.0384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.2314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.3549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.2491,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "dcd19ae9bc0914f8be439a2de1a5fbc17e7b5447",
          "message": "ICU-21957 integrate CLDR release-42-alpha0 (first with Survey Tool data) to ICU main for 72 (#2142)",
          "timestamp": "2022-07-29T15:32:45-07:00",
          "tree_id": "6e9b3f20e3d80a16de21313da72a5cb5b6ac2361",
          "url": "https://github.com/unicode-org/icu/commit/dcd19ae9bc0914f8be439a2de1a5fbc17e7b5447"
        },
        "date": 1659135495202,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.8084,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.6098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.5196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.5274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.4568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "4cf4116dadd2f34c20d9df42b1272cac7dcb30c4",
          "message": "ICU-22074 Increase the valgrind CI timeout",
          "timestamp": "2022-08-01T12:51:55+05:30",
          "tree_id": "5219374afb583705529f150783e07b0ac009b0c1",
          "url": "https://github.com/unicode-org/icu/commit/4cf4116dadd2f34c20d9df42b1272cac7dcb30c4"
        },
        "date": 1659339330334,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.801,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8424,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "0266970e977b9e2488dfbf788cc280be3a0338ca",
          "message": "ICU-21957 integrate CLDR release-42-alpha1 to ICU main for 72",
          "timestamp": "2022-08-05T09:39:58-07:00",
          "tree_id": "ae5c1572c4ed62ac177b5a843ecc6451b53749b2",
          "url": "https://github.com/unicode-org/icu/commit/0266970e977b9e2488dfbf788cc280be3a0338ca"
        },
        "date": 1659718410279,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7981,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3899,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4187,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d99abb6d65fd48db3bbf6aad523e7aaa793781ec",
          "message": "ICU-21957 integrate CLDR release-42-alpha1b to ICU main for 72",
          "timestamp": "2022-08-09T16:05:20-07:00",
          "tree_id": "114745d9b1092b441127d501c28853c12f8182a3",
          "url": "https://github.com/unicode-org/icu/commit/d99abb6d65fd48db3bbf6aad523e7aaa793781ec"
        },
        "date": 1660087192392,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4043,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.8215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8902,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "0eecb25011de051c57f68c75d767ad3586de7859",
          "message": "ICU-22101 Error prone reports \"StringSplitter\" error in PluralRules.java\n\nString.split(String) and Pattern.split(CharSequence) have surprising behaviour.\n\"a::b:\".split(\":\") produces [\"a\", \"b\"], when one would expect [\"a\", \"\", \"b\", \"\"]\n\nThe recommended fix is to use the Guava Splitter, or setting an explicit limit:\nString.split(String,int limit) and Pattern.split(CharSequence,int limit)",
          "timestamp": "2022-08-11T08:27:19-07:00",
          "tree_id": "724c7700b37e1fcbaf574d25414c4370ec250537",
          "url": "https://github.com/unicode-org/icu/commit/0eecb25011de051c57f68c75d767ad3586de7859"
        },
        "date": 1660232432908,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.8997,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5133,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.5137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "3ef03a408714cf0be1f6be62e3fad57757403da3",
          "message": "ICU-21947 Replace FixedDecimal with DecimalQuantity in PluralRule sample parsing\n\nSee #2007",
          "timestamp": "2022-08-11T15:10:37-07:00",
          "tree_id": "2216414cc87171c10282454fcf0a35d917a80fbd",
          "url": "https://github.com/unicode-org/icu/commit/3ef03a408714cf0be1f6be62e3fad57757403da3"
        },
        "date": 1660256966884,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3956,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7904,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8564,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8347,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "8492a8291670aa0af0f3fa6c088ddaf4ff373833",
          "message": "ICU-22105 Fixed the unit-conversion logic to work correctly with negative temperature values.",
          "timestamp": "2022-08-16T10:18:24-07:00",
          "tree_id": "ade7eb2c651708551e62d475d3987927dec81353",
          "url": "https://github.com/unicode-org/icu/commit/8492a8291670aa0af0f3fa6c088ddaf4ff373833"
        },
        "date": 1660671238079,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.2631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.8539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.9054,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.5038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.5013,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "59615c93f694227eaacf242d22a549c316557cdf",
          "message": "ICU-22115 Merge passthrough and canonical combining class data into the NFD trie for ICU4X",
          "timestamp": "2022-08-16T15:53:56-07:00",
          "tree_id": "4f51bc73e1477d7f636740f5506076ee6756f1af",
          "url": "https://github.com/unicode-org/icu/commit/59615c93f694227eaacf242d22a549c316557cdf"
        },
        "date": 1660691364212,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8019,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3922,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7863,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8605,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8402,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "01c194a366f2b18dd89cae4952e60c4719897d1f",
          "message": "ICU-22115 Merge passthrough and canonical combining class data into the NFD trie for ICU4X",
          "timestamp": "2022-08-16T15:54:01-07:00",
          "tree_id": "1431d8b0ce6c447915eebcb86c86a9307f8df52f",
          "url": "https://github.com/unicode-org/icu/commit/01c194a366f2b18dd89cae4952e60c4719897d1f"
        },
        "date": 1660691730639,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.6402,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.1159,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.0578,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "26733782601ec384b8070019a8121795f01000cd",
          "message": "ICU-22118 tzdata2022b updates in icu code\n\nSee #2157",
          "timestamp": "2022-08-18T19:12:31-04:00",
          "tree_id": "5db269c3b030282c375195f2c01fbe94b8459a95",
          "url": "https://github.com/unicode-org/icu/commit/26733782601ec384b8070019a8121795f01000cd"
        },
        "date": 1660865332604,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.7534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.1995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.2334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.5081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.6033,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.5825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "b95c6b1f3eb12eb84c2dabe438fe36be55a0772c",
          "message": "ICU-21946 RBBI Break Cache Optimizations\n\nAdjust RuleBasedBreakIterator::BreakCache::populateNear() to retain the cache\nthe cache contents in additional cases where are still useful, resulting in\nimproved performance.\n\nThis change is related to PR #2039, which addressed the same problem. This one\nretains the cache contents in more situations.",
          "timestamp": "2022-08-20T16:16:30-07:00",
          "tree_id": "4d8c5b400952f14136ae2a89ba22db2a736a2745",
          "url": "https://github.com/unicode-org/icu/commit/b95c6b1f3eb12eb84c2dabe438fe36be55a0772c"
        },
        "date": 1661038181972,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.6459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.1377,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.2146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.632,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.6849,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.6254,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.purdie@linuxfoundation.org",
            "name": "Richard Purdie",
            "username": "rpurdie"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "4ac7cd13938d44137bbf3949bcb7b63ff8bfaf23",
          "message": "ICU-22109 icu-config hardcodes build paths unnecessarily\n\nThe makefile hardcodes paths to the build directory into icu-config. It doesn’t\nneed to do this and it unnecessarily breaks build reproducibility. This patch\nmakes a simple change to avoid this.\n\nSigned-off-by: Richard Purdie <richard.purdie@linuxfoundation.org>",
          "timestamp": "2022-08-22T15:02:39-05:00",
          "tree_id": "2f9a426bc80fc925c0774e0e8263f93d45635d65",
          "url": "https://github.com/unicode-org/icu/commit/4ac7cd13938d44137bbf3949bcb7b63ff8bfaf23"
        },
        "date": 1661199778855,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.0533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.0015,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.3819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.2935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "ca9bdb97801cb1d0383c36b66b43bf0587b7697a",
          "message": "ICU-21957 integrate CLDR release-42-alpha2 to ICU main for 72",
          "timestamp": "2022-08-22T13:07:59-07:00",
          "tree_id": "b48551e7f45f096b68a791d5158448659d5c0d62",
          "url": "https://github.com/unicode-org/icu/commit/ca9bdb97801cb1d0383c36b66b43bf0587b7697a"
        },
        "date": 1661200154554,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.9032,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "8c669a7c2e6da8a1fbff1c5054bfffccb115c769",
          "message": "ICU-22012 Add more Japanese words into the dictionary",
          "timestamp": "2022-08-23T10:18:45-07:00",
          "tree_id": "9f7136671717ceea712b975ae541f65937d4ab53",
          "url": "https://github.com/unicode-org/icu/commit/8c669a7c2e6da8a1fbff1c5054bfffccb115c769"
        },
        "date": 1661276028280,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.159,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4662,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "49d192fefe09fcc38547203487cf4e63d2dad61f",
          "message": "ICU-22112 word break updates for @,colon; colon tailorings for fi,sv\n\nSee #2159",
          "timestamp": "2022-08-23T12:45:55-07:00",
          "tree_id": "860bf4fdbcdb8953fab05089e4b3d0b92fbd27bc",
          "url": "https://github.com/unicode-org/icu/commit/49d192fefe09fcc38547203487cf4e63d2dad61f"
        },
        "date": 1661284767755,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.1836,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6678,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4279,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4638,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "37e295627156bc334e1f1e88807025fac984da0e",
          "message": "ICU-21957 ICU4J API status and change report",
          "timestamp": "2022-08-26T11:33:50-07:00",
          "tree_id": "22673db46dd386a73e7498417bba169e1e62c780",
          "url": "https://github.com/unicode-org/icu/commit/37e295627156bc334e1f1e88807025fac984da0e"
        },
        "date": 1661539675669,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.1586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.463,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3e6219ba4d309acb7f48deca96100127ade8d084",
          "message": "ICU-21957 BRS72 organize import statements",
          "timestamp": "2022-08-30T19:34:01-04:00",
          "tree_id": "b0d2f65c1c26b0904a5b30ddac24f9151758e67f",
          "url": "https://github.com/unicode-org/icu/commit/3e6219ba4d309acb7f48deca96100127ade8d084"
        },
        "date": 1661904402300,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.898,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.8969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3d935f2d493bc613d9884a7878d04fb5515f5005",
          "message": "ICU-21957 BRS72 Updating currency numeric code data.",
          "timestamp": "2022-08-30T19:34:49-04:00",
          "tree_id": "f1ca2d572a984c9eac3146ef873f3cd4e95cdb74",
          "url": "https://github.com/unicode-org/icu/commit/3d935f2d493bc613d9884a7878d04fb5515f5005"
        },
        "date": 1661904815202,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.6646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.0973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.0875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.4742,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.5917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.6088,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "5334e2819d769c5992dae2c07a999b90e26db308",
          "message": "ICU-21958 ICU 70 API Promotions",
          "timestamp": "2022-08-31T15:38:22-07:00",
          "tree_id": "3e789d667b6ae477513c5444f8705583ac00b853",
          "url": "https://github.com/unicode-org/icu/commit/5334e2819d769c5992dae2c07a999b90e26db308"
        },
        "date": 1661986284204,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.8421,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.4376,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.0275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.3624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.4563,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.7955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "8050af54847348504a879564c28008203510201d",
          "message": "ICU-21980 Unicode 15 update 2022aug30",
          "timestamp": "2022-08-31T16:15:42-07:00",
          "tree_id": "95cbedfa8185c379bfc37eb45bca48716bae6869",
          "url": "https://github.com/unicode-org/icu/commit/8050af54847348504a879564c28008203510201d"
        },
        "date": 1661988599723,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0891,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6424,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6999,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.2285,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.2818,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.2723,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "9acba58c493123234b9c3ed4326d35d8f73cbcc1",
          "message": "ICU-22116 Updating minimum Java runtime support to Java 8",
          "timestamp": "2022-09-01T13:02:27-04:00",
          "tree_id": "3effaf2286da632e64849215f3216eb05a4448f1",
          "url": "https://github.com/unicode-org/icu/commit/9acba58c493123234b9c3ed4326d35d8f73cbcc1"
        },
        "date": 1662052618537,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.1906,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.5928,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.6525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9232,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.1299,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.1177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "4ab713b1c6fb604d3854e7781bee2051878d6814",
          "message": "ICU-22081 Added missing copyright notice to PersonName.java.",
          "timestamp": "2022-09-01T13:36:05-07:00",
          "tree_id": "30653b09944911ad017a064338ff8254052c36ae",
          "url": "https://github.com/unicode-org/icu/commit/4ab713b1c6fb604d3854e7781bee2051878d6814"
        },
        "date": 1662065367044,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8994,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.401,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "baa104b50b51218b35e4bd629aa45f3ea88a4a96",
          "message": "ICU-21957 Clean-up of TODO and logKnownIssue entries (BRS task):\n\nRemoved logKnownIssue(ICU-21322) in plurults.cpp, ICU-21322 is done and the\nentire if-statement was commented out.\n\nReplaced CLDR-13700 with CLDR-13701 in several TODOs. 13700 is a duplicate of\n13701.\n\nLikewise for CLDR-14502 --> CLDR-14582.\n\nPR#1999 from ICU 71 release missed some of the cases.",
          "timestamp": "2022-09-02T09:54:57-07:00",
          "tree_id": "91b7432c24997b436155399ab6c285c33f6ed5ee",
          "url": "https://github.com/unicode-org/icu/commit/baa104b50b51218b35e4bd629aa45f3ea88a4a96"
        },
        "date": 1662138477162,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.5774,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.0414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.1191,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.5062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.5327,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "6e3a9230563b97cb925723a6d9e91888396f2035",
          "message": "ICU-22116 Update CI job for ICU4J to use Java 8 instead of Java 7\n\nSee #2173",
          "timestamp": "2022-09-06T09:09:22-07:00",
          "tree_id": "c82f414f17d7a8f69e9a123155d5900893e5f77e",
          "url": "https://github.com/unicode-org/icu/commit/6e3a9230563b97cb925723a6d9e91888396f2035"
        },
        "date": 1662481288995,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.1485,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4516,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "00003dcbf2065d79fa45f8d53ef779861f71adb5",
          "message": "ICU-21957 Update TODO ticket reference: CLDR-13044 (done) ---> ICU-21420 (open).",
          "timestamp": "2022-09-06T09:14:07-07:00",
          "tree_id": "4d26f8c373ecc777e50d8ad362170299340629a3",
          "url": "https://github.com/unicode-org/icu/commit/00003dcbf2065d79fa45f8d53ef779861f71adb5"
        },
        "date": 1662482145558,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4046,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.8985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "030fa1a4791ee7c2f58505ebb61253c3032916ec",
          "message": "ICU-21148 Consistently use standard lowercase true/false everywhere.\n\nThis is the normal standard way in C, C++ as well as Java and there's no\nlonger any reason for ICU to be different. The various internal macros\nproviding custom boolean constants can all be deleted and code as well\nas documentation can be updated to use lowercase true/false everywhere.",
          "timestamp": "2022-09-07T20:56:33+02:00",
          "tree_id": "849f746cda1267d213f8ae31b557ea7d847f3acc",
          "url": "https://github.com/unicode-org/icu/commit/030fa1a4791ee7c2f58505ebb61253c3032916ec"
        },
        "date": 1662578025216,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.1667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.43,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "03b94e9cb3045072c73d50938ee0e14597d24ce0",
          "message": "ICU-22068 Cleanup inconsistent annotations between declarations and definitions\n\nThis cleans up inconsistent annotations between declared APIs in headers\nvs defined implementations in cpp's. This better ensures the API's\nreferenceable in headers represent what is exposed and defined in the\nultimate binary library's symbol table.",
          "timestamp": "2022-09-08T08:34:56-07:00",
          "tree_id": "a65dc75f11c10725ce59a87a1d3376169142f030",
          "url": "https://github.com/unicode-org/icu/commit/03b94e9cb3045072c73d50938ee0e14597d24ce0"
        },
        "date": 1662652005315,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.9494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4507,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.5188,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9296,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.0064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "bebcd6b8bb3239b2288fcf279ad1a1b5b3b68d1d",
          "message": "ICU-22114 Update pipeline workflows to use macOS-latest",
          "timestamp": "2022-09-08T09:02:31-07:00",
          "tree_id": "6d3af8477fed20b557199ee7fe82c616f56eb3b8",
          "url": "https://github.com/unicode-org/icu/commit/bebcd6b8bb3239b2288fcf279ad1a1b5b3b68d1d"
        },
        "date": 1662653758892,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.161,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.651,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4736,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4711,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "48124d170635f4abcd7440c5beeb6ea9878de32b",
          "message": "ICU-22072 Update Darwin Specific Macros\n\n* Update `U_PF_IPHONE` to be 0 when building for macOS/macCatalyst.\n* add macro definition for `attribute((visibility(\"hidden\")))` for cases\n  where internal structs exist within exposed classes.",
          "timestamp": "2022-09-08T09:08:57-07:00",
          "tree_id": "0dafe5b7ad2082eb0fdf56246a27bbef07669cd9",
          "url": "https://github.com/unicode-org/icu/commit/48124d170635f4abcd7440c5beeb6ea9878de32b"
        },
        "date": 1662654601546,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.6328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2372,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.2326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.7193,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.7976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.7842,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "1de1e36d6f6050d05b2db027f4c64ae6823eae2a",
          "message": "ICU-21957 integrate CLDR release-42-alpha3 to ICU main for 72",
          "timestamp": "2022-09-08T18:19:10-07:00",
          "tree_id": "43c37bedd13165396856bfd9fd7a067a73e93291",
          "url": "https://github.com/unicode-org/icu/commit/1de1e36d6f6050d05b2db027f4c64ae6823eae2a"
        },
        "date": 1662687772741,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.1868,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.6203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.7027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.1398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.0714,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d3a753a0d4a3e6e9d4b5392ec7a0777d229c71f5",
          "message": "ICU-21957 BRS 72rc, update urename.h",
          "timestamp": "2022-09-08T18:19:30-07:00",
          "tree_id": "0c076a705771be959218146920f7658d04800557",
          "url": "https://github.com/unicode-org/icu/commit/d3a753a0d4a3e6e9d4b5392ec7a0777d229c71f5"
        },
        "date": 1662688427271,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.4481,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.1827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.0561,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.5378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.7081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.7975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "5de6ee0c61b38feb4e35b842bc81d9d8030d2afa",
          "message": "ICU-21959 fix DateIntervalFormat general usage example",
          "timestamp": "2022-09-08T18:59:19-07:00",
          "tree_id": "0397c38bdb1077ee68baebac985ebe4ad514188a",
          "url": "https://github.com/unicode-org/icu/commit/5de6ee0c61b38feb4e35b842bc81d9d8030d2afa"
        },
        "date": 1662689981015,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.8996,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.956,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44496574+floratmin@users.noreply.github.com",
            "name": "floratmin",
            "username": "floratmin"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "1dfe456fe8a98de1f8ea966c45ef157f16160da6",
          "message": "ICU-21983 Fix fraction precision skeleton\n\nSee #2058",
          "timestamp": "2022-09-08T20:17:48-07:00",
          "tree_id": "3d308762dd0f304b04e153e238616d745d769ee9",
          "url": "https://github.com/unicode-org/icu/commit/1dfe456fe8a98de1f8ea966c45ef157f16160da6"
        },
        "date": 1662694413205,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.158,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6054,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.649,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4812,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "baee21aa7ac4ad952dd93c3430326f35cc54941b",
          "message": "ICU-22125 Add note about future deprecation to MeasureUnit createMetricTon/getMetricTon/METRIC_TON",
          "timestamp": "2022-09-08T20:59:07-07:00",
          "tree_id": "0de5e44d6f2ee5329452d8a04fed8b26ad09528d",
          "url": "https://github.com/unicode-org/icu/commit/baee21aa7ac4ad952dd93c3430326f35cc54941b"
        },
        "date": 1662697221924,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.1778,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.5765,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.6218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.0637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "b9fdd2a7cfcf77454762ce9479bdfc40fe14168e",
          "message": "ICU-22025 Rename the enum type for Hebrew calendar to Month",
          "timestamp": "2022-09-09T01:29:06-07:00",
          "tree_id": "7fa42099194411991193f0d32c484edf4a92baa6",
          "url": "https://github.com/unicode-org/icu/commit/b9fdd2a7cfcf77454762ce9479bdfc40fe14168e"
        },
        "date": 1662712851546,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.6546,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6499,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.1788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.2235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.2537,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "e4df3043677bf7fc10ec03c8cc37142fc46a7fda",
          "message": "ICU-21957 Update double-conversion to 256ac809561b756645e73ab7127c2aaaeabaa427\n\nSee #2179",
          "timestamp": "2022-09-09T15:47:12-07:00",
          "tree_id": "ca2a638aaa9226a53a37118d05ee384d7996789f",
          "url": "https://github.com/unicode-org/icu/commit/e4df3043677bf7fc10ec03c8cc37142fc46a7fda"
        },
        "date": 1662764910008,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4532,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "krlmlr@users.noreply.github.com",
            "name": "Kirill Müller",
            "username": "krlmlr"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "a48ae42864e8fcb702a5dfb6f6a076e4dde7e397",
          "message": "ICU-22117 Replace uprv_strncpy() by uprv_memcpy()\n\nThis fixes a warning on gcc 9.4.0, which is triggered because the third argument to strncpy() depends on the length of the second argument (but should actually indicate the buffer size). Replacing by memcpy() seems harmless because a null terminator is appended further below, and the buffer is sized to be \"large enough\" elsewhere.\n\nSee https://github.com/duckdb/duckdb/issues/4391 for details.\n\nFixing the warning is important for us, because the checks in the duckdb repository treat all warnings as errors.",
          "timestamp": "2022-09-09T17:07:53-07:00",
          "tree_id": "5204a95a33d0eb3b78a5a30a3fee3cee294a0da7",
          "url": "https://github.com/unicode-org/icu/commit/a48ae42864e8fcb702a5dfb6f6a076e4dde7e397"
        },
        "date": 1662770028740,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.2544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.6666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.6569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0002,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.121,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.0975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "99dee47fb783b1839af5cc742797ba5cdf8924ac",
          "message": "ICU-21959 add the uemoji feature to ICU Data Build Tool chapter",
          "timestamp": "2022-09-12T08:57:06-07:00",
          "tree_id": "5d7f297d26373540044bd9d1355a8b92bf240108",
          "url": "https://github.com/unicode-org/icu/commit/99dee47fb783b1839af5cc742797ba5cdf8924ac"
        },
        "date": 1662999076961,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.7207,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.1924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.2472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.6309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.6035,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.6615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "cfd99f3f3f309fc224a43377395085bea58b58cb",
          "message": "ICU-22143 Increase COMPACT_MAX_DIGITS from 15 to 20, needed for new ja data",
          "timestamp": "2022-09-12T17:17:19-07:00",
          "tree_id": "587d6e1872cc987a2bd6e5d4d8f00882be138e94",
          "url": "https://github.com/unicode-org/icu/commit/cfd99f3f3f309fc224a43377395085bea58b58cb"
        },
        "date": 1663029211827,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.894,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4496,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9149,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9609,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9532,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "06259cc6c33d220108d68818a9cdaec8942f9552",
          "message": "ICU-21957 integrate CLDR release-42-beta1 to ICU main for 72",
          "timestamp": "2022-09-13T11:18:37-07:00",
          "tree_id": "cb8a27062497043f6cc5be9122738e0d43981cad",
          "url": "https://github.com/unicode-org/icu/commit/06259cc6c33d220108d68818a9cdaec8942f9552"
        },
        "date": 1663093991180,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4526,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.8934,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9574,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "db5903479332caf213e3d6813dfa75ed7e91720c",
          "message": "ICU-22124 Adding a tech preview implementation of MessageFormat v2\n\nSee #2170",
          "timestamp": "2022-09-15T10:32:13-07:00",
          "tree_id": "5bf067f7e5996c2571bf2c901465dd8757b4af77",
          "url": "https://github.com/unicode-org/icu/commit/db5903479332caf213e3d6813dfa75ed7e91720c"
        },
        "date": 1663263930255,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.2805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.6861,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.7505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.0875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.1469,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.1388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "b7340487995b6db9e70567690d2d14870739e97f",
          "message": "ICU-21957 fix NumberFormatterSettings::unitDisplayCase status, remove FormattedNumber:getGender",
          "timestamp": "2022-09-16T08:34:28-07:00",
          "tree_id": "9b37f45d9b4d6104f4c533de4df87c275083a6b9",
          "url": "https://github.com/unicode-org/icu/commit/b7340487995b6db9e70567690d2d14870739e97f"
        },
        "date": 1663343277896,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.4186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.8673,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.3666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.6933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.6743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "9dc1c020a19a5b950af3e6304b97e7396b92aaaf",
          "message": "ICU-20512 Add extra matchers to handle empty currency symbols",
          "timestamp": "2022-09-16T09:00:50-07:00",
          "tree_id": "24a6fbc2a421138fe4900be8283523091a3cfbc7",
          "url": "https://github.com/unicode-org/icu/commit/9dc1c020a19a5b950af3e6304b97e7396b92aaaf"
        },
        "date": 1663344809490,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.9011,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.4112,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.4554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.9051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.9715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "498abf69611ca32ed41c5811f82ab7dfcb244757",
          "message": "ICU-21125 Improvements to resource fallback:\n\n- Added code to use the parentLocales data in supplementalData.xml to determine the \"parent locale ID\" to use when\n  the requested resource bundle is not present (ICU-21126).\n- Added code to change the parent-chain search path to handle the script better (ICU-21125; algorithm was described\n  in CLDR-15265):\n  - The base search patch is now ll_Ssss_RR -> ll_RR -> ll_Ssss -> ll -> root\n  - If the requested script is not the default script for the requested language and region, we automatically\n    avoid fallbacks that will implicitly change the script.\n- Added new code to the CLDR-to-ICU data generation tool to generate source code, and used it to generate the lookup\n  tables for the new resource-fallback logic (we can't use the existing resource files for this, since that would\n  involve opening a resource bundle while trying to open another resource bundle).  The data-generation stuff is\n  intended to be generic enough to allow for us to generate more static data tables in the future.\n- Commented out a few collator tests, and changed one resource bundle test, because they're incompatible with the\n  new fallback logic (specifically, the default-script logic).",
          "timestamp": "2022-09-16T14:26:50-07:00",
          "tree_id": "4e378c360728a7aa22646c603405ea06d07168d3",
          "url": "https://github.com/unicode-org/icu/commit/498abf69611ca32ed41c5811f82ab7dfcb244757"
        },
        "date": 1663364420557,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.5883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.0186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.0578,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.2733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.3602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.3221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "17435c4533c173b228d60e47413f35c1c6a9d748",
          "message": "ICU-22151 Update timezone-region supplementation mapping data for Jan Mayen and some others",
          "timestamp": "2022-09-16T16:49:42-07:00",
          "tree_id": "b53cde68b9a46dfbf1b6ce2fe8afcb340e7a4275",
          "url": "https://github.com/unicode-org/icu/commit/17435c4533c173b228d60e47413f35c1c6a9d748"
        },
        "date": 1663373400354,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.1108,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.5872,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.6441,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4688,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "e646ea23e9988fff220ae8c135adf577dfe4c65c",
          "message": "ICU-20512 ICU4J: just add test of parse with empty curr symbol, code already works",
          "timestamp": "2022-09-16T19:01:06-07:00",
          "tree_id": "99ac611eaa8870e031f49960b83b84848d839c25",
          "url": "https://github.com/unicode-org/icu/commit/e646ea23e9988fff220ae8c135adf577dfe4c65c"
        },
        "date": 1663381021807,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8725,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3548,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.761,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8102,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "b403a10e514d7317999c78a53e300b15c85616a5",
          "message": "ICU-21957 integrate CLDR release-42-beta1b to ICU main for 72",
          "timestamp": "2022-09-19T14:43:59-07:00",
          "tree_id": "04722e603f2a579cf386a39865f6ee0178114e18",
          "url": "https://github.com/unicode-org/icu/commit/b403a10e514d7317999c78a53e300b15c85616a5"
        },
        "date": 1663624676222,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.04,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.5308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.5768,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4185,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4557,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "f5367befba65cc6a94cea5ff557bf72f1af9254c",
          "message": "ICU-22124 Update the MessageFormat v2 links to the main branch",
          "timestamp": "2022-09-20T16:47:38-07:00",
          "tree_id": "6a3c5be851b439f5e83d53d6b21a2431eedb8e83",
          "url": "https://github.com/unicode-org/icu/commit/f5367befba65cc6a94cea5ff557bf72f1af9254c"
        },
        "date": 1663719514769,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8902,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.3744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8149,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.7947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies.mahmoud@gmail.com",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "dbfe83010856a58698edf68476ef693236f49a5a",
          "message": "ICU-22122 Support Locale Tags (ms, mu and rg)\n\nSee #2182",
          "timestamp": "2022-09-20T16:51:24-07:00",
          "tree_id": "4817fd24c8d0124c0b6375b844fafa8a93c32998",
          "url": "https://github.com/unicode-org/icu/commit/dbfe83010856a58698edf68476ef693236f49a5a"
        },
        "date": 1663720281957,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.373,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8262,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8089,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rp9.next@gmail.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "b08e51fa911c03c9b98eed36594b1c1970e2ccf9",
          "message": "ICU-21957 BRS72RC Update version number and regenerate configure",
          "timestamp": "2022-09-21T12:06:18+05:30",
          "tree_id": "1cdef136e269849dc95bf823bc26c3cf34ced39d",
          "url": "https://github.com/unicode-org/icu/commit/b08e51fa911c03c9b98eed36594b1c1970e2ccf9"
        },
        "date": 1663743027909,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.2639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.6553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.6699,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0048,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "b23d6c1afe339a09da31943f5fe104cd3f2689ff",
          "message": "ICU-22124 Tag the default constructor of OrderedMap as internal/deprecated\n\nICU-22124 Tag the default constructor of OrderedMap as internal/deprecated\r\n\r\nFix for apireport, see #2193",
          "timestamp": "2022-09-21T11:50:09-07:00",
          "tree_id": "2d04f8c14ced0ad2bb157e2c6f7df13de67bcf0d",
          "url": "https://github.com/unicode-org/icu/commit/b23d6c1afe339a09da31943f5fe104cd3f2689ff"
        },
        "date": 1663787330818,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.9894,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.3636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.4931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.7105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.783,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.7325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "4f707beadeb1bccdbe15fc45c7fa03b13141a959",
          "message": "ICU-21957 Update ICU4J & ICU4C Change Reports BRS#19 and BRS#20\n\nSee #2193",
          "timestamp": "2022-09-21T16:16:28-07:00",
          "tree_id": "525225c26a294115e70799ecf39e6a85b6810271",
          "url": "https://github.com/unicode-org/icu/commit/4f707beadeb1bccdbe15fc45c7fa03b13141a959"
        },
        "date": 1663802931364,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.0785,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.5272,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.5245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.7547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.8281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.8204,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "329c95e3b9df2d22fb20b02044a035fb509ef5f4",
          "message": "ICU-21957 BRS72 Cleanup import statements",
          "timestamp": "2022-09-22T08:07:12-04:00",
          "tree_id": "fd306139753f0b8e767268d57390120887aa73d9",
          "url": "https://github.com/unicode-org/icu/commit/329c95e3b9df2d22fb20b02044a035fb509ef5f4"
        },
        "date": 1663849163507,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.5246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.5776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4481,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "0c9d6f6b856c698bf8631c3971ff1fd8581b402b",
          "message": "ICU-21957 Fix status tags for U_HIDDEN, unum_hasAttribute",
          "timestamp": "2022-09-22T10:50:22-07:00",
          "tree_id": "284aa4e537dcb92e7f3c21d350654e469bc666fb",
          "url": "https://github.com/unicode-org/icu/commit/0c9d6f6b856c698bf8631c3971ff1fd8581b402b"
        },
        "date": 1663870104626,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.356,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.3715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "b5acb0ffc2fee16bf09bb657b19278c60f9f03e0",
          "message": "ICU-21957 Fixed java compiler warnings",
          "timestamp": "2022-09-22T16:37:56-04:00",
          "tree_id": "29fa83c5f6eaf9f033d4bd23b94f0a6101619241",
          "url": "https://github.com/unicode-org/icu/commit/b5acb0ffc2fee16bf09bb657b19278c60f9f03e0"
        },
        "date": 1663880532799,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0228,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.5167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.3951,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4395,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4376,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "306be3ddf6160ac4799a20dc67704891101dc9bd",
          "message": "ICU-21957 BRS72 J API signature file",
          "timestamp": "2022-09-22T16:39:47-04:00",
          "tree_id": "b9e110ee3d076db6c0277539125e2e7d750e8cc0",
          "url": "https://github.com/unicode-org/icu/commit/306be3ddf6160ac4799a20dc67704891101dc9bd"
        },
        "date": 1663881364522,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.7548,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.3295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.4439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.5266,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "ef706cddf1aa4a94b796411925bbf4be63a110a8",
          "message": "ICU-21957 BRS72 ICU4J serialization test data",
          "timestamp": "2022-09-22T16:49:16-04:00",
          "tree_id": "7a931aa92a3a77163857f33bf61fc2279fb77205",
          "url": "https://github.com/unicode-org/icu/commit/ef706cddf1aa4a94b796411925bbf4be63a110a8"
        },
        "date": 1663882700826,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.5247,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.5745,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4065,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "cd12cebb8768edc4d47c158c903be40c32af4cde",
          "message": "ICU-21879 Fix UserGuide link to info in Korean transliteration",
          "timestamp": "2022-09-22T13:54:40-07:00",
          "tree_id": "92eec4df02a7500358b90dad09e005b9fd90cac1",
          "url": "https://github.com/unicode-org/icu/commit/cd12cebb8768edc4d47c158c903be40c32af4cde"
        },
        "date": 1663883139900,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8727,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.3733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7686,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8174,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "7c1f8d675b2424e07942010cfd86feabaa83a6cc",
          "message": "ICU-21957 update API Changes in ICU4C 72",
          "timestamp": "2022-09-22T14:55:24-07:00",
          "tree_id": "c83ef7f23364370852bacc7dbe033e770de8dd2b",
          "url": "https://github.com/unicode-org/icu/commit/7c1f8d675b2424e07942010cfd86feabaa83a6cc"
        },
        "date": 1663884869519,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0338,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.5231,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.5743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4513,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "8f5529f30d25b282dfd7b12f87b1b69ab704a0eb",
          "message": "ICU-20894 Add UserGuide info on date pattern chars B, b",
          "timestamp": "2022-09-22T16:14:44-07:00",
          "tree_id": "1d83d348bba378665bf1005bb1d2c53b30ca1bb6",
          "url": "https://github.com/unicode-org/icu/commit/8f5529f30d25b282dfd7b12f87b1b69ab704a0eb"
        },
        "date": 1663889330234,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.3741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "123e5c1cd6f033a1f52f71c879cf93228d2f7387",
          "message": "ICU-21957 Change the internal/deprecated javadoc tags",
          "timestamp": "2022-09-22T16:31:38-07:00",
          "tree_id": "2500781058c4d621fcfeec34ef1ac2ccc9f7fcae",
          "url": "https://github.com/unicode-org/icu/commit/123e5c1cd6f033a1f52f71c879cf93228d2f7387"
        },
        "date": 1663890663061,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.3534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.792,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.9355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "123e5c1cd6f033a1f52f71c879cf93228d2f7387",
          "message": "ICU-21957 Change the internal/deprecated javadoc tags",
          "timestamp": "2022-09-22T16:31:38-07:00",
          "tree_id": "2500781058c4d621fcfeec34ef1ac2ccc9f7fcae",
          "url": "https://github.com/unicode-org/icu/commit/123e5c1cd6f033a1f52f71c879cf93228d2f7387"
        },
        "date": 1663891537322,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.8815,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.3651,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.3714,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "2f07ce2c6cdae63cea58efb98deeed8fe5f4e8c5",
          "message": "ICU-22158 Make TestAlgorithmicParentFallback() test more robust to different default locales.",
          "timestamp": "2022-09-23T13:37:42-07:00",
          "tree_id": "fcd14af32a7124526598b13771c483a8314acedd",
          "url": "https://github.com/unicode-org/icu/commit/2f07ce2c6cdae63cea58efb98deeed8fe5f4e8c5"
        },
        "date": 1663966469981,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.5264,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.5753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.4119,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "e5980f1dcb9c3700c2d5b9b4d7f3641279cf01c6",
          "message": "ICU-22081 Fix table in PersonNameFormatter Javadoc.",
          "timestamp": "2022-09-26T16:17:17-07:00",
          "tree_id": "7e8bb38007c260785083dae5351b83062631707e",
          "url": "https://github.com/unicode-org/icu/commit/e5980f1dcb9c3700c2d5b9b4d7f3641279cf01c6"
        },
        "date": 1664235595132,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.5469,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.1094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.1788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.5132,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.4559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.4734,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e72233f8b7526bbb840ae7742948a892686acfee",
          "message": "ICU-21959 fix file-level doxygen issues",
          "timestamp": "2022-09-27T15:58:43-07:00",
          "tree_id": "e935fae45795ccdd00637839bd409b521f5265ff",
          "url": "https://github.com/unicode-org/icu/commit/e72233f8b7526bbb840ae7742948a892686acfee"
        },
        "date": 1664320710176,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.6024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2926,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.2761,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.5633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.5477,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.6351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "49b08b414d5cb03901eaeca5e223ec835f59d3c5",
          "message": "ICU-21958 integrate CLDR release-42-beta2 to ICU main for 72",
          "timestamp": "2022-09-29T10:12:36-07:00",
          "tree_id": "9f70acc7afe174eafa0a00cbe205f70fc144472d",
          "url": "https://github.com/unicode-org/icu/commit/49b08b414d5cb03901eaeca5e223ec835f59d3c5"
        },
        "date": 1664472423687,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.1763,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.656,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.7034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.8432,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.6068,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.6835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "702e529d31acf4a2ae225147876be7ac99c11a74",
          "message": "ICU-22165 Update ICU tzdata to 2022d",
          "timestamp": "2022-09-30T15:56:00-04:00",
          "tree_id": "0ac7309770029b5e6a07ef9634629c85e5de1c75",
          "url": "https://github.com/unicode-org/icu/commit/702e529d31acf4a2ae225147876be7ac99c11a74"
        },
        "date": 1664568687652,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.7603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2531,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.2576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.635,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.6599,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "fe17bab2bb1499a30f10453228ab31173f0d2e83",
          "message": "ICU-21958 integrate CLDR release-42-beta3 to ICU main for 72",
          "timestamp": "2022-10-06T08:40:32-07:00",
          "tree_id": "d7afe17aae18d2fa4edc38a5a0d269d7ca13be5b",
          "url": "https://github.com/unicode-org/icu/commit/fe17bab2bb1499a30f10453228ab31173f0d2e83"
        },
        "date": 1665071719679,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.2513,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7823,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8255,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "599ecdc4a181062c47ea500a72145c40e42982d8",
          "message": "ICU-21958 Improved process for Releasing ICU API Docs",
          "timestamp": "2022-10-06T09:07:55-07:00",
          "tree_id": "d63d033e13575c68686acb09a088dff586018ce8",
          "url": "https://github.com/unicode-org/icu/commit/599ecdc4a181062c47ea500a72145c40e42982d8"
        },
        "date": 1665073438834,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7561,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.2533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2868,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8244,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "be9a07907c7bc452bdcf9ec8b3511338718aa2cf",
          "message": "ICU-21958 Fix typo in displayoptions.h documentation",
          "timestamp": "2022-10-06T11:21:21-07:00",
          "tree_id": "2071800fd38dfad3febb25135d4322865b313800",
          "url": "https://github.com/unicode-org/icu/commit/be9a07907c7bc452bdcf9ec8b3511338718aa2cf"
        },
        "date": 1665081283658,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0179,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4785,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.5499,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.3522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "felipe@felipegasper.com",
            "name": "Felipe Gasper",
            "username": "FGasper"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "ff4ecd9f5017b940a7a29e5a25a70289dc3652db",
          "message": "ICU-22170 Fix typo in resource bundle documentation.\n\nhttps://unicode-org.atlassian.net/browse/ICU-22170",
          "timestamp": "2022-10-06T13:00:31-07:00",
          "tree_id": "7cbd9ccfdce9b92a9b79154d1263690414f6ac98",
          "url": "https://github.com/unicode-org/icu/commit/ff4ecd9f5017b940a7a29e5a25a70289dc3652db"
        },
        "date": 1665087305686,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9122,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.4087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.4792,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.5822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.6789,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.7047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "c203003b173fb867db26ebb2e838ca142400d1bb",
          "message": "ICU-21958 Revise C++ API Change reports\n\nAfter updating icu4c displayoptions.h",
          "timestamp": "2022-10-07T09:57:56-07:00",
          "tree_id": "09efaf3a4e405b24546df4f4bf982b08910341a3",
          "url": "https://github.com/unicode-org/icu/commit/c203003b173fb867db26ebb2e838ca142400d1bb"
        },
        "date": 1665162709044,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.2483,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2843,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7738,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8282,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "ea4fca604f975b88753abbcdbb8b80f707709894",
          "message": "ICU-21958 BRS72GA Update version number",
          "timestamp": "2022-10-11T22:19:20+05:30",
          "tree_id": "3c93225b8f8f2a7abbef6c56c17e697624e85860",
          "url": "https://github.com/unicode-org/icu/commit/ea4fca604f975b88753abbcdbb8b80f707709894"
        },
        "date": 1665507860460,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.2544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "c6c01f4b79bcd46377b71506d466ef0f54e21ec2",
          "message": "ICU-21958 integrate CLDR release-42-beta4 to ICU main for 72",
          "timestamp": "2022-10-11T19:44:30-07:00",
          "tree_id": "b299f9a7baebb8658bf821519d2ddc91ef1be6ef",
          "url": "https://github.com/unicode-org/icu/commit/c6c01f4b79bcd46377b71506d466ef0f54e21ec2"
        },
        "date": 1665543466328,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.2521,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8195,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "a620057d76c2a107f04f924d13678b5aa4bfb0d0",
          "message": "ICU-21958 BRS72 Updated ISO currency data URLs",
          "timestamp": "2022-10-12T12:37:52-04:00",
          "tree_id": "c75f8e572065d8dac1beb717d1357487b82b1730",
          "url": "https://github.com/unicode-org/icu/commit/a620057d76c2a107f04f924d13678b5aa4bfb0d0"
        },
        "date": 1665593545793,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 7.6799,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.2098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.2709,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.5002,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.4965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.5078,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "00a4cdbd5be8efabc7141ad7eec3b457b415fcef",
          "message": "ICU-22178 Update ICU tzdata to 2022e",
          "timestamp": "2022-10-12T21:07:34-04:00",
          "tree_id": "fb525902cbff3e9a7be2469d45821cc35074267b",
          "url": "https://github.com/unicode-org/icu/commit/00a4cdbd5be8efabc7141ad7eec3b457b415fcef"
        },
        "date": 1665624092002,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.0327,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.4247,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.4549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.8669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.9471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.9994,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "954d999126e5960cb32e80ce642870735949760f",
          "message": "ICU-21755 commit checker: skip No Time To Do This\n\n- also, verify that ALL resolutions are accounted for.",
          "timestamp": "2022-10-13T12:05:17-05:00",
          "tree_id": "05c4bb3a5c032f31313cfc3d3853f5521bf712da",
          "url": "https://github.com/unicode-org/icu/commit/954d999126e5960cb32e80ce642870735949760f"
        },
        "date": 1665681591968,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.4098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.4241,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.6364,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.7732,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.6369,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "f949713ce8647a1b35031ed81e578b3a19cb05c6",
          "message": "ICU-22177 Replace angular brackets in include with double quotes.",
          "timestamp": "2022-10-13T13:51:05-07:00",
          "tree_id": "aeb72421b7346d9a5a1af2131d06fd709c95b12c",
          "url": "https://github.com/unicode-org/icu/commit/f949713ce8647a1b35031ed81e578b3a19cb05c6"
        },
        "date": 1665695147899,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0171,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4755,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.3522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4487,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "ff3514f257ea10afe7e710e9f946f68d256704b1",
          "message": "ICU-21958 integrate CLDR release-42-beta5 to ICU main for 72",
          "timestamp": "2022-10-13T16:23:11-07:00",
          "tree_id": "1434057e6698a7015f43aae6e113805e7d938078",
          "url": "https://github.com/unicode-org/icu/commit/ff3514f257ea10afe7e710e9f946f68d256704b1"
        },
        "date": 1665704103430,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7635,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8161,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "649c5f0176b2f737155130b2fa63a2f5c9b7d07a",
          "message": "ICU-22189 Merge maint/maint-72 to main (#2235)",
          "timestamp": "2022-10-20T13:53:44-07:00",
          "tree_id": "247df49532cbacf779bb05db3c4f257ea7cf9ef0",
          "url": "https://github.com/unicode-org/icu/commit/649c5f0176b2f737155130b2fa63a2f5c9b7d07a"
        },
        "date": 1666300064341,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.0237,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.4259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.5265,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9408,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.9927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "511b4111f2f1d97a70d08c6a885c333a8542a729",
          "message": "ICU-22190 Add public PGP Key\n\nSee #2236",
          "timestamp": "2022-10-20T23:29:13+02:00",
          "tree_id": "ba77322f3b9d45d1dc97c474231d3dbd2a211139",
          "url": "https://github.com/unicode-org/icu/commit/511b4111f2f1d97a70d08c6a885c333a8542a729"
        },
        "date": 1666302164984,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.5459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.3469,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4495,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4532,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "d453c12bfacde783b7e985cdb4eb15c6db277f78",
          "message": "ICU-22190 Update KEYS with additional public key\n\nSee #2237",
          "timestamp": "2022-10-21T02:13:32+02:00",
          "tree_id": "0fc2e58be4144d2ed6f6e966dda6667392347a4b",
          "url": "https://github.com/unicode-org/icu/commit/d453c12bfacde783b7e985cdb4eb15c6db277f78"
        },
        "date": 1666312022749,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.0139,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 5.4786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 5.551,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.3506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.4614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.4658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "fbb4a5a167192d2d918ee0020e8e084c299de97d",
          "message": "ICU-22190 Update KEYS with additional signature data.",
          "timestamp": "2022-10-24T12:39:23-07:00",
          "tree_id": "031c0f6d3b697be99f016d7a0f08de1467a3af78",
          "url": "https://github.com/unicode-org/icu/commit/fbb4a5a167192d2d918ee0020e8e084c299de97d"
        },
        "date": 1666641207582,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9648,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.3364,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.3524,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 7.4176,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.749,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 7.7833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "distinct": true,
          "id": "866254ef12750bda67b86cc685d07e7906765aac",
          "message": "ICU-21180 BreakIterator, change all NULL to nulptr\n\nIn the C++ break iterator code, change all use of NULL to nullptr.\nThis is in preparation for follow-on PRs to improve out-of-memory error handling\nin Break Iterators, keeping use of nullptr consistent between old and new\nor updated code.",
          "timestamp": "2022-10-26T18:55:48-07:00",
          "tree_id": "f96afd8a247d599df392b27c6be44b2aa97565f5",
          "url": "https://github.com/unicode-org/icu/commit/866254ef12750bda67b86cc685d07e7906765aac"
        },
        "date": 1666836575681,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.2602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2911,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8359,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vital.had@gmail.com",
            "name": "Sergey Fedorov",
            "username": "barracuda156"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "2b77e39fbbe08468aaa9102843b172a200019a9c",
          "message": "ICU-22191 writesrc.cpp: fix cinttypes header and place after C headers",
          "timestamp": "2022-10-28T08:41:22-07:00",
          "tree_id": "f82402c905121c4f1ffdb84918196b7ff9f31496",
          "url": "https://github.com/unicode-org/icu/commit/2b77e39fbbe08468aaa9102843b172a200019a9c"
        },
        "date": 1666972700462,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.1121,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 7.5053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 7.5496,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 7.0032,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.9881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "e0f2d491aa35739e699a52803a1c968fd2e96397",
          "message": "ICU-22194 Fix typo in doc for BreakIterator rules update",
          "timestamp": "2022-10-28T14:37:49-07:00",
          "tree_id": "5d31f29279e1c1e35d3f099ab5fe34fdfed99b7a",
          "url": "https://github.com/unicode-org/icu/commit/e0f2d491aa35739e699a52803a1c968fd2e96397"
        },
        "date": 1666993890645,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.752,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.2526,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2866,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7843,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8228,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "9f3feed545bf6acf6c9811c125e2c17b9e9d4a3e",
          "message": "ICU-22160 clean up Calendar code\n\nRemove unnecessary BuddhistCalendar::handleComputeMonthStart\nRemove unnecessary include",
          "timestamp": "2022-10-31T08:41:54-07:00",
          "tree_id": "857aad0e45023a84ad0ca41f441fc9b0ce7de298",
          "url": "https://github.com/unicode-org/icu/commit/9f3feed545bf6acf6c9811c125e2c17b9e9d4a3e"
        },
        "date": 1667232706875,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.7534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.2511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.2864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 5.7795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 5.8319,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 5.8198,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}