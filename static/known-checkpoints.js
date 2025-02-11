const KNOWN_CHECKPOINTS = {
  "d787396aa0c": {
    "id": "d787396aa0c",
    "label": "S1 gen",
    "offset": 33,
    "start": "",
    "end": ""
  },
  "65d0f867bf3": {
    "id": "65d0f867bf3",
    "label": "S1 election (Peck)",
    "offset": 41,
    "start": "2020-07-26T19:00:00Z",
    "end": ""
  },
  "cc9536f599c": {
    "id": "cc9536f599c",
    "label": "S1 election (Poole)",
    "offset": 61,
    "start": "2020-07-26T19:00:00Z",
    "end": ""
  },
  "5377164b577": {
    "id": "5377164b577",
    "label": "S1 election (Derrick)",
    "offset": 24,
    "start": "2020-07-26T19:00:00Z",
    "end": ""
  },
  "e791cf95bcb": {
    "id": "e791cf95bcb",
    "label": "Rangel-Stanton",
    "offset": 61,
    "start": "2020-07-28T04:22:00Z",
    "end": "2020-07-28T16:16:00Z"
  },
  "cde2723d566": {
    "id": "cde2723d566",
    "label": "Felix Garbage",
    "offset": null,
    "start": "2020-07-29T08:31:00Z",
    "end": ""
  },
  "44a205c3eb9": {
    "id": "44a205c3eb9",
    "label": "Stink-Holloway",
    "offset": 14,
    "start": "2020-07-29T23:13:26.051Z",
    "end": "2020-07-31T20:15:38.656Z"
  },
  "a879bd5f6d5": {
    "id": "a879bd5f6d5",
    "label": "S2 election",
    "offset": 57,
    "start": "2020-08-02T19:09:06.375Z",
    "end": ""
  },
  "afd50b91d3b": {
    "id": "afd50b91d3b",
    "label": "Dudley Mueller",
    "offset": null,
    "start": "2020-08-03T17:24:29.813Z",
    "end": ""
  },
  "b571a70d405": {
    "id": "b571a70d405",
    "label": "Cash-Woodman",
    "offset": 42,
    "start": "2020-08-03T22:11:32.429Z",
    "end": "2020-08-03T23:24:36.267Z"
  },
  "c95338b545a": {
    "id": "c95338b545a",
    "label": "Santiago-Horne",
    "offset": 1,
    "start": "2020-08-04T00:03:32.991Z",
    "end": "2020-08-04T22:21:31.295Z"
  },
  "314f0e52752": {
    "id": "314f0e52752",
    "label": "Jonbois-Lotus",
    "offset": 0,
    "start": "2020-08-05T06:03:54.981Z",
    "end": "2020-08-06T00:15:55.392Z"
  },
  "a747983bb33": {
    "id": "a747983bb33",
    "label": "O'Brian-McBlase",
    "offset": 20,
    "start": "2020-08-06T02:02:02.256Z",
    "end": "2020-08-06T20:40:18.592Z"
  },
  "b8c629aed5b": {
    "id": "b8c629aed5b",
    "label": "Cedric Spliff",
    "offset": null,
    "start": "2020-08-06T22:25:33.674Z",
    "end": ""
  },
  "dbdda873bfd": {
    "id": "dbdda873bfd",
    "label": "Blood Hamburger",
    "offset": null,
    "start": "2020-08-07T00:00:52.644Z",
    "end": "2020-08-07T00:26:19.794Z"
  },
  "e253c1eb8d6": {
    "id": "e253c1eb8d6",
    "label": "Fig-Kravitz",
    "offset": 37,
    "start": "2020-08-07T01:11:28.191Z",
    "end": "2020-08-07T18:11:01.45Z"
  },
  "89900c96dc4": {
    "id": "89900c96dc4",
    "label": "Kline Greenlemon",
    "offset": 8,
    "start": "2020-08-08T02:00:17.189Z",
    "end": "2020-08-08T21:15:39.311Z"
  },
  "78409c3360c": {
    "id": "78409c3360c",
    "label": "Paula Turnip",
    "offset": null,
    "start": "2020-08-09T00:20:37.531Z",
    "end": ""
  },
  "749b62b0554": {
    "id": "749b62b0554",
    "label": "S3 election",
    "offset": null,
    "start": "2020-08-09T19:27:42.24Z",
    "end": ""
  },
  "de0d18051bd": {
    "id": "de0d18051bd",
    "label": "Stew Briggs",
    "offset": null,
    "start": "2020-08-25T05:21:09.031Z",
    "end": ""
  },
  "a2b244307ba": {
    "id": "a2b244307ba",
    "label": "Combs Estes",
    "offset": null,
    "start": "2020-08-26T17:15:07.862Z",
    "end": ""
  },
  "2baa26443fb": {
    "id": "2baa26443fb",
    "label": "Lenny Spruce",
    "offset": 9,
    "start": "2020-08-26T22:19:32.777Z",
    "end": ""
  },
  "82e19e21c72": {
    "id": "82e19e21c72",
    "label": "Gloria Bugsnax",
    "offset": 15,
    "start": "2020-08-27T02:15:44.985Z",
    "end": ""
  },
  "e1624540844": {
    "id": "e1624540844",
    "label": "Finn James",
    "offset": 58,
    "start": "2020-08-27T16:04:25.835Z",
    "end": ""
  },
  "bac3eec2276": {
    "id": "bac3eec2276",
    "label": "Sixpack Dogwalker",
    "offset": 36,
    "start": "2020-08-28T15:19:34.297Z",
    "end": ""
  },
  "328a49fde2b": {
    "id": "328a49fde2b",
    "label": "Inez Owens",
    "offset": null,
    "start": "2020-08-29T06:24:33.303Z",
    "end": ""
  },
  "94fc6612022": {
    "id": "94fc6612022",
    "label": "S4 election",
    "offset": 23,
    "start": "2020-08-30T19:18:18.412Z",
    "end": ""
  },
  "a987441f6f5": {
    "id": "a987441f6f5",
    "label": "Annie Roland",
    "offset": 55,
    "start": "2020-09-02T07:33:20.885Z",
    "end": ""
  },
  "ddc4b5eb976": {
    "id": "ddc4b5eb976",
    "label": "Sutton Bishop",
    "offset": 28,
    "start": "2020-09-04T10:45:33.293Z",
    "end": ""
  },
  "a617ff42ca4": {
    "id": "a617ff42ca4",
    "label": "S5 election",
    "offset": null,
    "start": "2020-09-06T19:06:17.18Z",
    "end": ""
  },
  "6e9bafb41e5": {
    "id": "6e9bafb41e5",
    "label": "Cerveza-Cerna",
    "offset": null,
    "start": "2020-09-08T12:17:15.194Z",
    "end": "2020-09-08T22:05:00.99Z"
  },
  "c2fcabe77c5": {
    "id": "c2fcabe77c5",
    "label": "Steph Weeks",
    "offset": null,
    "start": "2020-09-11T03:15:00.633Z",
    "end": ""
  },
  "2954c1188d7": {
    "id": "2954c1188d7",
    "label": "Jaxon Buckley",
    "offset": null,
    "start": "2020-09-11T14:35:01.025Z",
    "end": ""
  },
  "44c9972f69b": {
    "id": "44c9972f69b",
    "label": "S6 election",
    "offset": null,
    "start": "2020-09-13T19:20:00.689Z",
    "end": ""
  },
  "df64f39beed": {
    "id": "df64f39beed",
    "label": "Ruby Tuesday pt1",
    "offset": 32,
    "start": "2020-09-15T15:05:01.023Z",
    "end": "2020-09-15T23:20:00.429Z"
  },
  "46eaaa83e78": {
    "id": "46eaaa83e78",
    "label": "Ruby Tuesday pt2",
    "offset": 20,
    "start": "2020-09-16T01:05:00.818Z",
    "end": "2020-09-16T01:10:01.084Z"
  },
  "b0ec2b0c444": {
    "id": "b0ec2b0c444",
    "label": "Seabright-Sports",
    "offset": 36,
    "start": "2020-09-17T03:20:00.461Z",
    "end": "2020-09-17T06:03:59.71Z"
  },
  "6714cc0f6ee": {
    "id": "6714cc0f6ee",
    "label": "Crueller-Vapor",
    "offset": 55,
    "start": "2020-09-17T11:20:00.693Z",
    "end": "2020-09-18T06:25:00.508Z"
  },
  "8fa3f4cac32": {
    "id": "8fa3f4cac32",
    "label": "Pudge Nakamoto",
    "offset": 52,
    "start": "2020-09-18T10:05:00.241Z",
    "end": "2020-09-18T19:25:11.18Z"
  },
  "6d73b966601": {
    "id": "6d73b966601",
    "label": "S7 D99",
    "offset": 56,
    "start": "2020-09-18T20:25:01.073Z",
    "end": "2020-09-18T20:43:40.363Z"
  },
  "dc87a9e4163": {
    "id": "dc87a9e4163",
    "label": "Case Sports",
    "offset": null,
    "start": "2020-09-19T20:25:00.265Z",
    "end": ""
  },
  "8c30c6dce1c": {
    "id": "8c30c6dce1c",
    "label": "S7 election",
    "offset": 54,
    "start": "2020-09-20T19:20:06.148Z",
    "end": ""
  },
  "9866fe413fe": {
    "id": "9866fe413fe",
    "label": "Pitching Machine",
    "offset": null,
    "start": "2020-09-21T16:00:00.646Z",
    "end": ""
  },
  "0420534ebc4": {
    "id": "0420534ebc4",
    "label": "Rai Spliff",
    "offset": null,
    "start": "2020-09-22T01:15:00.276Z",
    "end": ""
  },
  "df915e583be": {
    "id": "df915e583be",
    "label": "Goobie Ballson",
    "offset": 14,
    "start": "2020-09-23T03:10:00.513Z",
    "end": ""
  },
  "b1254dad88d": {
    "id": "b1254dad88d",
    "label": "Late S8 1",
    "offset": 62,
    "start": "2020-09-25T03:05:00.854529Z",
    "end": "2020-09-25T05:25:00.878229Z"
  },
  "cb5c07496f3": {
    "id": "cb5c07496f3",
    "label": "Late S8 2",
    "offset": 4,
    "start": "2020-09-25T06:05:00.284Z",
    "end": "2020-09-25T15:25:10.002077Z"
  },
  "05e17a4401a": {
    "id": "05e17a4401a",
    "label": "Late S8 3",
    "offset": 37,
    "start": "2020-09-25T16:05:00.138203Z",
    "end": "2020-09-25T18:25:00.486Z"
  },
  "8214d2e7485": {
    "id": "8214d2e7485",
    "label": "S8 election",
    "offset": 57,
    "start": "2020-09-27T19:02:00.205705Z",
    "end": ""
  },
  "e86718ca271": {
    "id": "e86718ca271",
    "label": "Silvaire Roadhouse",
    "offset": 44,
    "start": "2020-10-08T07:12:00.546084Z",
    "end": "2020-10-08T23:10:00.139941Z"
  },
  "1d25c73f701": {
    "id": "1d25c73f701",
    "label": "Late S9 1",
    "offset": 16,
    "start": "2020-10-09T01:08:00.646094Z",
    "end": "2020-10-09T16:22:00.493025Z"
  },
  "cdfaf1b008c": {
    "id": "cdfaf1b008c",
    "label": "Late S9 2",
    "offset": 40,
    "start": "2020-10-09T17:04:00.605228Z",
    "end": "2020-10-09T18:22:00.399452Z"
  },
  "9da3457f48d": {
    "id": "9da3457f48d",
    "label": "S9 playoff births",
    "offset": 31,
    "start": "2020-10-09T19:02:00.757285Z",
    "end": ""
  },
  "54163dc8607": {
    "id": "54163dc8607",
    "label": "S9 election",
    "offset": 46,
    "start": "2020-10-11T19:02:00.973214Z",
    "end": ""
  },
  "e6e2d2e3bde": {
    "id": "e6e2d2e3bde",
    "label": "Yusef Puddles",
    "offset": 5,
    "start": "2020-10-13T04:06:00.596476Z",
    "end": ""
  },
  "7c98aabe476": {
    "id": "7c98aabe476",
    "label": "Bonk Jokes",
    "offset": null,
    "start": "2020-10-14T07:02:00.35214Z",
    "end": ""
  },
  "443190ed3e9": {
    "id": "443190ed3e9",
    "label": "Late S10 1",
    "offset": 1,
    "start": "2020-10-16T02:22:00.121408Z",
    "end": "2020-10-16T06:28:00.11819Z"
  },
  "2a1c5249013": {
    "id": "2a1c5249013",
    "label": "Late S10 2",
    "offset": 23,
    "start": "2020-10-16T07:22:00.11881Z",
    "end": "2020-10-16T18:18:00.142463Z"
  },
  "5232ea6f82d": {
    "id": "5232ea6f82d",
    "label": "S10 playoff births",
    "offset": 3,
    "start": "2020-10-16T19:02:00.444418Z",
    "end": "2020-10-16T20:00:00.943084Z"
  },
  "0ca51ff4458": {
    "id": "0ca51ff4458",
    "label": "Tokyo Lift",
    "offset": 47,
    "start": "2020-10-18T19:00:13.082987Z",
    "end": ""
  },
  "1013c207f10": {
    "id": "1013c207f10",
    "label": "Late S11 1",
    "offset": null,
    "start": "2020-10-22T18:02:00.132668Z",
    "end": "2020-10-22T18:04:00.124015Z"
  },
  "ebccd1df0e5": {
    "id": "ebccd1df0e5",
    "label": "Late S11 2",
    "offset": null,
    "start": "2020-10-22T18:20:00.172677Z",
    "end": "2020-10-23T02:08:00.685329Z"
  },
  "5043991893b": {
    "id": "5043991893b",
    "label": "Late S11 3",
    "offset": 21,
    "start": "2020-10-23T03:08:00.113791Z",
    "end": "2020-10-23T03:08:00.113791Z"
  },
  "e58f7898380": {
    "id": "e58f7898380",
    "label": "Late S11 4",
    "offset": 49,
    "start": "2020-10-23T05:18:00.37172Z",
    "end": "2020-10-23T18:24:22.222498Z"
  },
  "1f05a364a61": {
    "id": "1f05a364a61",
    "label": "S11 playoff births",
    "offset": 57,
    "start": "2020-10-23T19:02:00.123376Z",
    "end": "2020-10-23T19:36:14.792438Z"
  },
  "3d189440bb1": {
    "id": "3d189440bb1",
    "label": "Coffee Cup teams",
    "offset": 20,
    "start": "2020-11-16T17:22:43.760235Z",
    "end": ""
  },
  "beeeee3a041": {
    "id": "beeeee3a041",
    "label": "Electric Kettle",
    "offset": 44,
    "start": "2020-11-18T00:10:00.235845Z",
    "end": ""
  },
  "24dfd4376bf": {
    "id": "24dfd4376bf",
    "label": "Breach Teams",
    "offset": 63,
    "start": "2021-03-04T16:32:00.826961Z",
    "end": ""
  },
  "c140e7c86ab": {
    "id": "c140e7c86ab",
    "label": "Sundae-Sparrow",
    "offset": null,
    "start": "2021-03-05T00:12:03.324621Z",
    "end": "2021-03-05T19:14:00.457212Z"
  },
  "74adb7df2e8": {
    "id": "74adb7df2e8",
    "label": "S12 playoff births",
    "offset": 35,
    "start": "2021-03-05T19:22:00.678847Z",
    "end": "2021-03-05T21:02:01.414022Z"
  },
  "55dc3b681b9": {
    "id": "55dc3b681b9",
    "label": "S12 election",
    "offset": 49,
    "start": "2021-03-07T19:02:00.415806Z",
    "end": ""
  },
  "d0a460989df": {
    "id": "d0a460989df",
    "label": "Crueller-Keming",
    "offset": null,
    "start": "2021-03-09T04:14:01.097295Z",
    "end": "2021-03-09T11:16:00.930233Z"
  },
  "5dd709ec8da": {
    "id": "5dd709ec8da",
    "label": "Blather-Firewall",
    "offset": 39,
    "start": "2021-03-09T22:04:01.080713Z",
    "end": "2021-03-10T21:20:00Z"
  },
  "0e0f78bead0": {
    "id": "0e0f78bead0",
    "label": "Late S13",
    "offset": 34,
    "start": "2021-03-11T12:38:00.223077Z",
    "end": ""
  },
  "81ba9e5222c": {
    "id": "81ba9e5222c",
    "label": "Firestar-Judochop",
    "offset": 6,
    "start": "2021-03-11T15:04:00.329652Z",
    "end": "2021-03-12T00:24:00.732891Z"
  },
  "4361ae7928a": {
    "id": "4361ae7928a",
    "label": "Late S13 2",
    "offset": 2,
    "start": "2021-03-12T01:30:00.515135Z",
    "end": ""
  },
  "030d3c1f3dc": {
    "id": "030d3c1f3dc",
    "label": "Late S13 3",
    "offset": 53,
    "start": "2021-03-12T02:04:00.77239Z",
    "end": "2021-03-12T09:16:00.577322Z"
  },
  "97a7d270b95": {
    "id": "97a7d270b95",
    "label": "Ji-Eun-Statter",
    "offset": 62,
    "start": "2021-03-12T09:26:00.533701Z",
    "end": "2021-03-12T19:32:00.942232Z"
  },
  "21f84e3788a": {
    "id": "21f84e3788a",
    "label": "S13 playoff births",
    "offset": 10,
    "start": "2021-03-12T20:02:00.260624Z",
    "end": "2021-03-12T21:02:00.793455Z"
  },
  "e67dfda6fe5": {
    "id": "e67dfda6fe5",
    "label": "S13 election",
    "offset": 38,
    "start": "2021-03-14T18:02:00.918535Z",
    "end": ""
  },
  "2e6bb359b33": {
    "id": "2e6bb359b33",
    "label": "Bennett Bluesky",
    "offset": 4,
    "start": "2021-03-15T21:08:03.235462Z",
    "end": "2021-03-16T14:01:04.826078Z"
  },
  "08312a7c3c6": {
    "id": "08312a7c3c6",
    "label": "Jomgy Rolsenthal",
    "offset": 7,
    "start": "2021-03-16T13:26:21.71887Z",
    "end": "2021-03-17T18:16:03.957125Z"
  },
  "b5139b8c846": {
    "id": "b5139b8c846",
    "label": "Mid S14",
    "offset": 37,
    "start": "2021-03-17T20:06:37.673409Z",
    "end": "2021-03-18T14:36:59.861728Z"
  },
  "e5ce3a1e365": {
    "id": "e5ce3a1e365",
    "label": "S14 latesiesta",
    "offset": 46,
    "start": "2021-03-18T15:09:41.363109Z",
    "end": "2021-03-18T17:09:48.273155Z"
  },
  "d65069bd873": {
    "id": "d65069bd873",
    "label": "Lucien Patchwork",
    "offset": 16,
    "start": "2021-03-19T01:13:43.981559Z",
    "end": "2021-03-19T18:26:00.547002Z"
  },
  "d93744d6353": {
    "id": "d93744d6353",
    "label": "S14 D99",
    "offset": 41,
    "start": "2021-03-19T19:04:00.932616Z",
    "end": "2021-03-19T19:18:00.97561Z"
  },
  "ff7e92ec5d9": {
    "id": "ff7e92ec5d9",
    "label": "S14 playoff births",
    "offset": 45,
    "start": "2021-03-19T19:24:00.184091Z",
    "end": "2021-03-20T19:06:00.336206Z"
  },
  "af6ee8c6bfe": {
    "id": "af6ee8c6bfe",
    "label": "S14 finals",
    "offset": null,
    "start": "2021-03-20T23:18:00.651325Z",
    "end": "2021-03-20T23:18:00.651325Z"
  },
  "d85b92cb1a1": {
    "id": "d85b92cb1a1",
    "label": "S14 election",
    "offset": 20,
    "start": "2021-03-21T18:02:01.231885Z",
    "end": ""
  },
  "5a25a01a6f6": {
    "id": "5a25a01a6f6",
    "label": "Early S15",
    "offset": 16,
    "start": "2021-04-05T15:02:56Z",
    "end": "2021-04-05T16:25:56Z"
  },
  "5ff79f05a04": {
    "id": "5ff79f05a04",
    "label": "Rat Batson",
    "offset": 56,
    "start": "2021-04-06T00:18:24.765945Z",
    "end": "2021-04-06T16:10:53.937947Z"
  },
  "bf24da63d97": {
    "id": "bf24da63d97",
    "label": "Earlsiesta area",
    "offset": 52,
    "start": "2021-04-06T17:12:13.183Z",
    "end": "2021-04-06T22:00:36Z"
  },
  "0bd2ebf19be": {
    "id": "0bd2ebf19be",
    "label": "Late S15 1",
    "offset": 41,
    "start": "2021-04-06T23:00:36Z",
    "end": "2021-04-07T16:23:35.733622Z"
  },
  "ea6b24f49bd": {
    "id": "ea6b24f49bd",
    "label": "Late S15 2",
    "offset": null,
    "start": "2021-04-08T02:19:39.600545Z",
    "end": "2021-04-08T14:07:19.807208Z"
  },
  "97ec8b44b20": {
    "id": "97ec8b44b20",
    "label": "Late S15 3",
    "offset": 47,
    "start": "2021-04-08T17:17:57Z",
    "end": "2021-04-08T17:20:57Z"
  },
  "e875a8dd0fb": {
    "id": "e875a8dd0fb",
    "label": "S15 playoff births",
    "offset": 35,
    "start": "2021-04-08T20:04:33.804096Z",
    "end": "2021-04-09T20:01:41Z"
  },
  "074db6ae700": {
    "id": "074db6ae700",
    "label": "S15 playoffs",
    "offset": 23,
    "start": "2021-04-09T23:25:44Z",
    "end": "2021-04-10T17:23:59Z"
  },
  "0eb52cbb762": {
    "id": "0eb52cbb762",
    "label": "S15 election",
    "offset": 53,
    "start": "2021-04-11T18:16:47Z",
    "end": ""
  },
  "6f0075ce727": {
    "id": "6f0075ce727",
    "label": "Salih Ultrabass",
    "offset": 7,
    "start": "2021-04-12T16:22:32Z",
    "end": "2021-04-12T17:25:35Z"
  },
  "80986635a4e": {
    "id": "80986635a4e",
    "label": "Early S16 1",
    "offset": 4,
    "start": "2021-04-12T18:03:51.789Z",
    "end": "2021-04-13T02:15:30.353Z"
  },
  "99b6747b4a4": {
    "id": "99b6747b4a4",
    "label": "Early S16 2",
    "offset": 61,
    "start": "2021-04-13T04:10:20.86Z",
    "end": "2021-04-13T22:20:22.393993Z"
  },
  "be6bc645d96": {
    "id": "be6bc645d96",
    "label": "Early S16 3",
    "offset": 18,
    "start": "2021-04-13T23:00:00Z",
    "end": "2021-04-14T22:25:20.695Z"
  },
  "782b1d53c9b": {
    "id": "782b1d53c9b",
    "label": "Early S16 4",
    "offset": 40,
    "start": "2021-04-15T00:02:40.181Z",
    "end": "2021-04-15T14:03:06.071Z"
  },
  "1aa8b6f173f": {
    "id": "1aa8b6f173f",
    "label": "Hammer-Elemefayo",
    "offset": 41,
    "start": "2021-04-15T15:07:10.252Z",
    "end": "2021-04-16T15:04:09.44Z"
  },
  "c4aa0795b4f": {
    "id": "c4aa0795b4f",
    "label": "S16 playoff births",
    "offset": 34,
    "start": "2021-04-16T15:13:11Z",
    "end": "2021-04-16T23:16:00.1594Z"
  },
  "38ac472fa25": {
    "id": "38ac472fa25",
    "label": "S16 playoffs",
    "offset": null,
    "start": "2021-04-17T23:24:00.659768Z",
    "end": ""
  },
  "c170488d2d5": {
    "id": "c170488d2d5",
    "label": "S16 election",
    "offset": 52,
    "start": "2021-04-18T18:02:00.756414Z",
    "end": ""
  },
  "d65e80c846b": {
    "id": "d65e80c846b",
    "label": "Smaht-Halifax",
    "offset": 6,
    "start": "2021-04-19T15:22:01.314374Z",
    "end": "2021-04-19T16:20:01.320197Z"
  },
  "697ff85e7eb": {
    "id": "697ff85e7eb",
    "label": "Donna Milicic",
    "offset": null,
    "start": "2021-04-20T02:20:01.836379Z",
    "end": ""
  },
  "8e2d0e643bb": {
    "id": "8e2d0e643bb",
    "label": "Kranch-Tumblehome",
    "offset": 14,
    "start": "2021-04-21T03:20:00.854658Z",
    "end": "2021-04-21T21:24:00.96003Z"
  },
  "59508d602dd": {
    "id": "59508d602dd",
    "label": "Frankie Incarnate",
    "offset": null,
    "start": "2021-04-22T05:06:01.443266Z",
    "end": "2021-04-22T18:28:00.755323Z"
  },
  "e7a99730563": {
    "id": "e7a99730563",
    "label": "Late S17",
    "offset": null,
    "start": "2021-04-22T21:14:01.572849Z",
    "end": "2021-04-22T21:18:01.43153Z"
  },
  "5acfcaac5b4": {
    "id": "5acfcaac5b4",
    "label": "Late S17 2",
    "offset": 40,
    "start": "2021-04-22T22:22:00.903948Z",
    "end": "2021-04-23T05:26:00.551486Z"
  },
  "d3c85d2821d": {
    "id": "d3c85d2821d",
    "label": "S17 playoff births",
    "offset": 0,
    "start": "2021-04-23T06:14:00.934813Z",
    "end": "2021-04-24T01:14:01.128688Z"
  },
  "ad7bd24d0d3": {
    "id": "ad7bd24d0d3",
    "label": "S17 election",
    "offset": 31,
    "start": "2021-04-25T18:02:01.533104Z",
    "end": ""
  },
  "980a09815e0": {
    "id": "980a09815e0",
    "label": "Zippy DeShields",
    "offset": 48,
    "start": "2021-05-10T17:06:02.041528Z",
    "end": "2021-05-10T17:26:00.896257Z"
  },
  "ae76db4c6b5": {
    "id": "ae76db4c6b5",
    "label": "Early S18",
    "offset": 43,
    "start": "2021-05-10T19:20:00.409117Z",
    "end": "2021-05-10T21:08:00.427196Z"
  },
  "a41aa5a3d7b": {
    "id": "a41aa5a3d7b",
    "label": "Early S18 2",
    "offset": 3,
    "start": "2021-05-10T22:04:00.690507Z",
    "end": "2021-05-11T00:11:48.398366Z"
  },
  "02ea6604c2d": {
    "id": "02ea6604c2d",
    "label": "Early S18 3",
    "offset": 1,
    "start": "2021-05-11T02:01:59.989534Z",
    "end": "2021-05-11T15:14:32.581684Z"
  },
  "8c577fa1d47": {
    "id": "8c577fa1d47",
    "label": "Scarlet Caster",
    "offset": 49,
    "start": "2021-05-11T18:10:00.429037Z",
    "end": "2021-05-12T13:22:01.741215Z"
  },
  "8fb56c03060": {
    "id": "8fb56c03060",
    "label": "Lancelot Kane",
    "offset": 61,
    "start": "2021-05-12T19:32:43.372783Z",
    "end": "2021-05-12T23:24:00.29079Z"
  },
  "5cc9a2c3d6b": {
    "id": "5cc9a2c3d6b",
    "label": "Late S18",
    "offset": 43,
    "start": "2021-05-13T02:08:00.288998Z",
    "end": "2021-05-13T05:03:02.436596Z"
  },
  "b5439d50f10": {
    "id": "b5439d50f10",
    "label": "Trinity Roche",
    "offset": null,
    "start": "2021-05-13T08:12:01.037254Z",
    "end": "2021-05-13T14:18:01.178936Z"
  },
  "d9702cf6dba": {
    "id": "d9702cf6dba",
    "label": "Zeruel Kramer",
    "offset": 13,
    "start": "2021-05-13T15:28:01.350954Z",
    "end": "2021-05-14T15:02:00.217701Z"
  },
  "8b3862c20bc": {
    "id": "8b3862c20bc",
    "label": "S18 playoff births",
    "offset": 4,
    "start": "2021-05-14T15:06:01.268554Z",
    "end": "2021-05-15T03:17:45.449Z"
  },
  "7a4e330e39e": {
    "id": "7a4e330e39e",
    "label": "S18 later playoffs",
    "offset": null,
    "start": "2021-05-15T04:06:00.750488Z",
    "end": "2021-05-15T22:04:17.409Z"
  },
  "b969cda9287": {
    "id": "b969cda9287",
    "label": "S18 election",
    "offset": 30,
    "start": "2021-05-16T18:02:00.430578Z",
    "end": ""
  },
  "f54386f2ad2": {
    "id": "f54386f2ad2",
    "label": "Early S19",
    "offset": 52,
    "start": "2021-05-17T15:03:35.487376Z",
    "end": "2021-05-17T18:24:47.803806Z"
  },
  "4f7166035da": {
    "id": "4f7166035da",
    "label": "Moss-Aqualuft",
    "offset": 25,
    "start": "2021-05-17T19:22:01.535502Z",
    "end": "2021-05-18T16:25:34.148899Z"
  },
  "0fd89c1e362": {
    "id": "0fd89c1e362",
    "label": "Geepa Beanpot",
    "offset": 13,
    "start": "2021-05-18T19:14:00.229743Z",
    "end": "2021-05-19T17:28:01.704525Z"
  },
  "a4cd360a620": {
    "id": "a4cd360a620",
    "label": "Late S19 1",
    "offset": 16,
    "start": "2021-05-20T06:14:21.725047Z",
    "end": "2021-05-21T05:32:05.196993Z"
  },
  "4dec076279f": {
    "id": "4dec076279f",
    "label": "Lenjamin Zhuge",
    "offset": 13,
    "start": "2021-05-21T07:20:35.810987Z",
    "end": "2021-05-22T03:23:23.079Z"
  },
  "825b4a39fac": {
    "id": "825b4a39fac",
    "label": "S19 finals",
    "offset": 15,
    "start": "2021-05-22T16:13:34.143863Z",
    "end": "2021-05-23T00:28:00.525664Z"
  },
  "67437347350": {
    "id": "67437347350",
    "label": "S19 election",
    "offset": 38,
    "start": "2021-05-23T18:02:01.970863Z",
    "end": ""
  },
  "5615e96a591": {
    "id": "5615e96a591",
    "label": "Early S20",
    "offset": 58,
    "start": "2021-06-14T15:24:26.978302Z",
    "end": "2021-06-14T19:12:00.81064Z"
  },
  "856e1dec030": {
    "id": "856e1dec030",
    "label": "Early S20 2",
    "offset": 61,
    "start": "2021-06-14T19:22:01.90683Z",
    "end": "2021-06-15T02:26:01.167795Z"
  },
  "e5d7bda5911": {
    "id": "e5d7bda5911",
    "label": "Early S20 3",
    "offset": 25,
    "start": "2021-06-15T04:08:08.778003Z",
    "end": "2021-06-15T04:28:01.999379Z"
  },
  "8848e29eb90": {
    "id": "8848e29eb90",
    "label": "Early S20 4",
    "offset": 49,
    "start": "2021-06-15T05:21:50.112506Z",
    "end": "2021-06-15T20:10:44.046695Z"
  },
  "213c40c24ca": {
    "id": "213c40c24ca",
    "label": "Clove Ji-Eun",
    "offset": 16,
    "start": "2021-06-16T01:18:00.972703Z",
    "end": "2021-06-16T22:07:41.377Z"
  },
  "d6ac2eb1f08": {
    "id": "d6ac2eb1f08",
    "label": "Mid S20",
    "offset": 42,
    "start": "2021-06-16T23:35:46.086Z",
    "end": "2021-06-17T13:36:00.79637Z"
  },
  "30524d8df8f": {
    "id": "30524d8df8f",
    "label": "Mid S20 2",
    "offset": 43,
    "start": "2021-06-17T17:12:03.827425Z",
    "end": "2021-06-17T17:15:12.826885Z"
  },
  "1b23452b8a9": {
    "id": "1b23452b8a9",
    "label": "Mid S20 3",
    "offset": 48,
    "start": "2021-06-17T18:02:00.572861Z",
    "end": "2021-06-17T20:30:02.272796Z"
  },
  "0672acad2e5": {
    "id": "0672acad2e5",
    "label": "Vernon Shotwell",
    "offset": 12,
    "start": "2021-06-17T22:22:01.460153Z",
    "end": "2021-06-18T00:28:00.518946Z"
  },
  "9ffa8cca756": {
    "id": "9ffa8cca756",
    "label": "S20 playoff births",
    "offset": 59,
    "start": "2021-06-18T01:06:01.176673Z",
    "end": "2021-06-19T01:02:01.888398Z"
  },
  "5ff886623b7": {
    "id": "5ff886623b7",
    "label": "S20 playoffs",
    "offset": 49,
    "start": "2021-06-19T02:05:16.770197Z",
    "end": "2021-06-19T22:06:00.88864Z"
  },
  "b25984be14d": {
    "id": "b25984be14d",
    "label": "S20 election",
    "offset": 27,
    "start": "2021-06-20T18:02:02.064326Z",
    "end": ""
  },
  "1dc8ff72ec9": {
    "id": "1dc8ff72ec9",
    "label": "Steals Mondegreen",
    "offset": 28,
    "start": "2021-06-21T17:04:01.056922Z",
    "end": "2021-06-22T15:24:01.147355Z"
  },
  "a8da815aeef": {
    "id": "a8da815aeef",
    "label": "Mid S21",
    "offset": 29,
    "start": "2021-06-22T16:08:57.559012Z",
    "end": "2021-06-22T17:26:00.785622Z"
  },
  "999d3b56588": {
    "id": "999d3b56588",
    "label": "Mid S21 2",
    "offset": 18,
    "start": "2021-06-22T20:21:30.683649Z",
    "end": "2021-06-23T09:22:00.868932Z"
  },
  "a9f4d78b77d": {
    "id": "a9f4d78b77d",
    "label": "Mid S21 3",
    "offset": null,
    "start": "2021-06-23T19:01:21.882424Z",
    "end": "2021-06-23T19:28:00.545358Z"
  },
  "8b01f2dca3f": {
    "id": "8b01f2dca3f",
    "label": "Mid S21 4",
    "offset": 46,
    "start": "2021-06-23T22:10:14.884237Z",
    "end": "2021-06-24T14:21:40.322061Z"
  },
  "d9fe120145c": {
    "id": "d9fe120145c",
    "label": "Mid S21 5",
    "offset": 36,
    "start": "2021-06-24T17:04:09.560832Z",
    "end": "2021-06-24T18:28:00.747577Z"
  },
  "50fb761240d": {
    "id": "50fb761240d",
    "label": "Mid S21 6",
    "offset": 37,
    "start": "2021-06-24T19:26:01.06817Z",
    "end": "2021-06-24T20:42:33.561132Z"
  },
  "77105487e64": {
    "id": "77105487e64",
    "label": "Late S21",
    "offset": 52,
    "start": "2021-06-24T21:02:03.840913Z",
    "end": "2021-06-25T02:30:02.842526Z"
  },
  "15a40d77900": {
    "id": "15a40d77900",
    "label": "S21 playoff births",
    "offset": 18,
    "start": "2021-06-25T03:28:01.100421Z",
    "end": "2021-06-25T20:28:00.502463Z"
  },
  "a28ea62cdec": {
    "id": "a28ea62cdec",
    "label": "S21 playoffs",
    "offset": 17,
    "start": "2021-06-25T22:12:01.289138Z",
    "end": "2021-06-26T21:22:02.454507Z"
  },
  "f603676c4e8": {
    "id": "f603676c4e8",
    "label": "S21 elections",
    "offset": 14,
    "start": "2021-06-27T18:02:01.062892Z",
    "end": ""
  },
  "9fadd20291f": {
    "id": "9fadd20291f",
    "label": "Early S22",
    "offset": 48,
    "start": "2021-06-28T15:01:38.947692Z",
    "end": "2021-06-28T15:40:02.021147Z"
  },
  "beb7570f102": {
    "id": "beb7570f102",
    "label": "Pannonica Oko",
    "offset": 51,
    "start": "2021-06-28T16:24:01.999525Z",
    "end": "2021-06-29T00:32:00.88586Z"
  },
  "5c1f6c4b3b9": {
    "id": "5c1f6c4b3b9",
    "label": "Pitchy-Jeff",
    "offset": 7,
    "start": "2021-06-29T01:28:02.071869Z",
    "end": "2021-06-29T20:22:01.002536Z"
  },
  "915ff3d8899": {
    "id": "915ff3d8899",
    "label": "Early S22 2",
    "offset": 54,
    "start": "2021-06-29T21:24:00.729135Z",
    "end": "2021-06-29T23:32:01.67107Z"
  },
  "227e5a4cc56": {
    "id": "227e5a4cc56",
    "label": "Early S22 3",
    "offset": 34,
    "start": "2021-06-30T00:24:01.829821Z",
    "end": "2021-06-30T23:26:16.822Z"
  },
  "f1a75ee472d": {
    "id": "f1a75ee472d",
    "label": "Late S22",
    "offset": 27,
    "start": "2021-07-01T00:42:00.696735Z",
    "end": "2021-07-01T15:02:00.456843Z"
  },
  "59123e2da4f": {
    "id": "59123e2da4f",
    "label": "Late S22 2",
    "offset": 61,
    "start": "2021-07-01T15:06:01.312106Z",
    "end": "2021-07-01T15:30:00.753881Z"
  },
  "e245edd338e": {
    "id": "e245edd338e",
    "label": "Late S22 3",
    "offset": 41,
    "start": "2021-07-01T18:09:55.295089Z",
    "end": "2021-07-02T18:06:01.787584Z"
  },
  "810835094f3": {
    "id": "810835094f3",
    "label": "S22 playoff births",
    "offset": 37,
    "start": "2021-07-02T18:08:02.405876Z",
    "end": "2021-07-03T15:34:02.713701Z"
  },
  "0e2e20190ae": {
    "id": "0e2e20190ae",
    "label": "S22 finals",
    "offset": 5,
    "start": "2021-07-03T20:03:59.362937Z",
    "end": "2021-07-03T21:18:02.556792Z"
  },
  "62519c60032": {
    "id": "62519c60032",
    "label": "S22 election",
    "offset": 42,
    "start": "2021-07-04T18:02:02.870154Z",
    "end": ""
  },
  "0e6afc598e0": {
    "id": "0e6afc598e0",
    "label": "Earlier S23",
    "offset": 54,
    "start": "2021-07-19T16:16:09.251933Z",
    "end": "2021-07-19T21:24:00.046975Z"
  },
  "57d7a220f19": {
    "id": "57d7a220f19",
    "label": "Earlier S23 2",
    "offset": 55,
    "start": "2021-07-19T22:06:01.136246Z",
    "end": "2021-07-20T02:32:04.323263Z"
  },
  "28de87795ca": {
    "id": "28de87795ca",
    "label": "Early S23",
    "offset": 22,
    "start": "2021-07-20T04:24:02.539543Z",
    "end": "2021-07-20T15:30:01.71212Z"
  },
  "46883e3f366": {
    "id": "46883e3f366",
    "label": "S23 D26ish",
    "offset": 17,
    "start": "2021-07-20T16:10:24.430216Z",
    "end": "2021-07-20T16:30:03.068152Z"
  },
  "111ceb44388": {
    "id": "111ceb44388",
    "label": "S23 just after earlsiesta",
    "offset": null,
    "start": "2021-07-20T17:02:07.549056Z",
    "end": "2021-07-20T21:32:02.439387Z"
  },
  "41f62a822c6": {
    "id": "41f62a822c6",
    "label": "S23 midseason",
    "offset": 11,
    "start": "2021-07-20T22:23:48.040696Z",
    "end": "2021-07-21T21:24:00.963023Z"
  },
  "0791e05964d": {
    "id": "0791e05964d",
    "label": "S23 midseason 2",
    "offset": 42,
    "start": "2021-07-21T22:18:02.85175Z",
    "end": "2021-07-22T01:26:00.899569Z"
  },
  "2cfd517a407": {
    "id": "2cfd517a407",
    "label": "Ngozi-Toast",
    "offset": 13,
    "start": "2021-07-22T03:24:03.401013Z",
    "end": "2021-07-22T13:50:03.256907Z"
  },
  "854498fd37f": {
    "id": "854498fd37f",
    "label": "Orion Ultrabass",
    "offset": 50,
    "start": "2021-07-22T15:14:03.42929Z",
    "end": "2021-07-23T14:22:01.489208Z"
  },
  "e6bba65475a": {
    "id": "e6bba65475a",
    "label": "Yulia Skitter",
    "offset": 2,
    "start": "2021-07-23T14:26:03.210953Z",
    "end": "2021-07-23T18:14:00.52154Z"
  },
  "b8498ac02e7": {
    "id": "b8498ac02e7",
    "label": "S23 playoff births",
    "offset": 8,
    "start": "2021-07-23T19:02:01.724813Z",
    "end": "2021-07-23T23:26:02.488439Z"
  },
  "5b55dffd5ca": {
    "id": "5b55dffd5ca",
    "label": "S23 playoffs",
    "offset": 23,
    "start": "2021-07-24T02:04:01.589623Z",
    "end": "2021-07-24T21:14:49.244519Z"
  },
  "4a0e662b6ba": {
    "id": "4a0e662b6ba",
    "label": "S23 pre-semicent",
    "offset": 18,
    "start": "2021-07-25T00:28:00.52908Z",
    "end": "2021-07-25T00:28:03.210491Z"
  },
  "6662a5268ba": {
    "id": "6662a5268ba",
    "label": "uhhhh idk",
    "offset": 43,
    "start": "2021-07-26T15:12:00.925437Z",
    "end": "2021-07-26T17:32:03.569716Z"
  },
  "7ed105635c0": {
    "id": "7ed105635c0",
    "label": "Ruffian Scrobbles",
    "offset": 19,
    "start": "2021-07-26T18:10:01.586505Z",
    "end": "2021-07-26T18:26:03.254685Z"
  },
  "dee30a85bc8": {
    "id": "dee30a85bc8",
    "label": "Marion Shriffle",
    "offset": 42,
    "start": "2021-07-26T19:16:03.446639Z",
    "end": "2021-07-26T20:14:03.114693Z"
  },
  "1e1ee21f923": {
    "id": "1e1ee21f923",
    "label": "Scouse Bedazzle",
    "offset": 38,
    "start": "2021-07-26T21:12:01.258994Z",
    "end": "2021-07-27T16:28:02.588606Z"
  },
  "28c94771ce1": {
    "id": "28c94771ce1",
    "label": "Clarinet Mccormick",
    "offset": 36,
    "start": "2021-07-27T23:14:00.555889Z",
    "end": "2021-07-28T16:28:04.452026Z"
  },
  "d6e7c4bc158": {
    "id": "d6e7c4bc158",
    "label": "Will Statter Jr.",
    "offset": 8,
    "start": "2021-07-29T05:18:02.492741Z",
    "end": "2021-07-29T14:14:04.773506Z"
  },
  "e2f12b30966": {
    "id": "e2f12b30966",
    "label": "Late S24",
    "offset": 34,
    "start": "2021-07-29T19:06:01.289419Z",
    "end": "2021-07-30T00:22:01.046951Z"
  },
  "d17155b6166": {
    "id": "d17155b6166",
    "label": "Late S24 2",
    "offset": 41,
    "start": "2021-07-30T02:36:01.397105Z",
    "end": ""
  },
  "4dcbd37b8a5": {
    "id": "4dcbd37b8a5",
    "label": "Late S24 3",
    "offset": 40,
    "start": "2021-07-30T04:02:00.554Z",
    "end": "2021-07-30T18:17:06.894Z"
  }
};
