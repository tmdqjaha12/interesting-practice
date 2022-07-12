/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

import {
  ChonkyActions,
  ChonkyFileActionData,
  FileArray,
  FileBrowserProps,
  FileData,
  FileHelper,
  FullFileBrowser,
} from "chonky";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// import DemoFsMap from "../demos/demo.fs_map.json";
import Button from "@material-ui/core/Button";
import { showActionNotification } from "@utils/vfs";

const DemoFsMap = {
  rootFolderId: "qwerty123456",
  fileMap: {
    qwerty123456: {
      id: "qwerty123456",
      name: "Chonky Demo",
      isDir: true,
      childrenIds: [
        "e598a85f843c",
        "b53aa057fad1",
        "b6667221f24b",
        "002705459ca4",
        "a9fd7c8a04db",
        "549c1f93247a",
        "zFe",
        "zJr",
        "zHy",
        "vCt",
      ],
      childrenCount: 6,
    },
    e598a85f843c: {
      id: "e598a85f843c",
      name: "Chonky Source Code",
      isDir: true,
      modDate: "2020-10-24T17:48:39.866Z",
      childrenIds: [
        "9514a3d74d57",
        "ed918037b975",
        "c21e08daf308",
        "0729af954fe6",
        "a1361e98e01d",
        "12dd195bb146",
        "f9b3b8472664",
        "998c5fed54dc",
        "e6b2e6181d54",
        "24c33e69f0f1",
        "a3a6f4860f0a",
        "b4344ec9eb06",
        "0b05bc983fd9",
      ],
      childrenCount: 13,
      parentId: "qwerty123456",
    },
    "9514a3d74d57": {
      id: "9514a3d74d57",
      name: ".eslintrc.js",
      isHidden: true,
      size: 2293,
      modDate: "2020-10-20T03:11:50.570Z",
      parentId: "e598a85f843c",
    },
    ed918037b975: {
      id: "ed918037b975",
      name: ".gitignore",
      isHidden: true,
      size: 347,
      modDate: "2020-10-20T13:22:59.144Z",
      parentId: "e598a85f843c",
    },
    c21e08daf308: {
      id: "c21e08daf308",
      name: ".prettierrc.js",
      isHidden: true,
      size: 144,
      modDate: "2020-10-20T03:11:50.570Z",
      parentId: "e598a85f843c",
    },
    "0729af954fe6": {
      id: "0729af954fe6",
      name: ".travis.yml",
      isHidden: true,
      size: 191,
      modDate: "2020-10-24T16:43:46.520Z",
      parentId: "e598a85f843c",
    },
    a1361e98e01d: {
      id: "a1361e98e01d",
      name: "LICENSE",
      size: 1103,
      modDate: "2020-10-22T04:05:02.289Z",
      parentId: "e598a85f843c",
    },
    "12dd195bb146": {
      id: "12dd195bb146",
      name: "README.md",
      size: 1457,
      modDate: "2020-10-22T04:17:54.294Z",
      parentId: "e598a85f843c",
    },
    f9b3b8472664: {
      id: "f9b3b8472664",
      name: "lerna-debug.log",
      size: 1119,
      modDate: "2020-10-24T17:48:39.866Z",
      parentId: "e598a85f843c",
    },
    "998c5fed54dc": {
      id: "998c5fed54dc",
      name: "lerna.json",
      size: 71,
      modDate: "2020-10-20T04:15:42.657Z",
      parentId: "e598a85f843c",
    },
    e6b2e6181d54: {
      id: "e6b2e6181d54",
      name: "logo",
      isDir: true,
      modDate: "2020-10-21T15:59:46.786Z",
      parentId: "e598a85f843c",
      childrenIds: [
        "148ffc6cc2e0",
        "02c01aedf901",
        "0a7e2fce8e7a",
        "7bcecbc35fda",
        "6adc7b20c64b",
        "e977504c47b7",
      ],
      childrenCount: 6,
    },
    "148ffc6cc2e0": {
      id: "148ffc6cc2e0",
      name: "chonky-logo-v2.png",
      size: 74588,
      modDate: "2020-10-21T15:55:52.555Z",
      parentId: "e6b2e6181d54",
      thumbnailUrl: "/thumbnails/148ffc6cc2e0.jpg",
    },
    "02c01aedf901": {
      id: "02c01aedf901",
      name: "chonky-logo-v2.svg",
      size: 157045,
      modDate: "2020-10-21T15:55:52.611Z",
      parentId: "e6b2e6181d54",
    },
    "0a7e2fce8e7a": {
      id: "0a7e2fce8e7a",
      name: "chonky-logo.ai",
      size: 91103,
      modDate: "2020-10-21T15:55:52.455Z",
      parentId: "e6b2e6181d54",
    },
    "7bcecbc35fda": {
      id: "7bcecbc35fda",
      name: "chonky-logo.svg",
      size: 156620,
      modDate: "2020-10-21T15:55:52.519Z",
      parentId: "e6b2e6181d54",
    },
    "6adc7b20c64b": {
      id: "6adc7b20c64b",
      name: "chonky-sphere-v2.png",
      size: 63043,
      modDate: "2020-10-21T15:59:46.806Z",
      parentId: "e6b2e6181d54",
      thumbnailUrl: "/thumbnails/6adc7b20c64b.jpg",
    },
    e977504c47b7: {
      id: "e977504c47b7",
      name: "chonky-sphere.svg",
      size: 155078,
      modDate: "2020-10-21T15:55:52.667Z",
      parentId: "e6b2e6181d54",
    },
    "24c33e69f0f1": {
      id: "24c33e69f0f1",
      name: "package-lock.json",
      size: 671832,
      modDate: "2020-10-24T17:45:53.305Z",
      parentId: "e598a85f843c",
    },
    a3a6f4860f0a: {
      id: "a3a6f4860f0a",
      name: "package.json",
      size: 1003,
      modDate: "2020-10-24T17:45:52.745Z",
      parentId: "e598a85f843c",
    },
    b4344ec9eb06: {
      id: "b4344ec9eb06",
      name: "packages",
      isDir: true,
      modDate: "2020-10-20T04:16:50.196Z",
      parentId: "e598a85f843c",
      childrenIds: ["08e9a34357a0", "43d749c47bbe"],
      childrenCount: 2,
    },
    "08e9a34357a0": {
      id: "08e9a34357a0",
      name: "chonky",
      isDir: true,
      modDate: "2020-10-24T18:33:09.643Z",
      parentId: "b4344ec9eb06",
      childrenIds: [
        "8e6390f5ce3c",
        "36659b55f402",
        "5ca005a238ee",
        "ccaeef8ef43f",
        "232ab2ded9a2",
        "efaae6261dd2",
        "d3e4ad8b7899",
        "f22891ef4c60",
        "543d473f1c38",
        "684400d53b85",
        "8296bba42999",
      ],
      childrenCount: 11,
    },
    "8e6390f5ce3c": {
      id: "8e6390f5ce3c",
      name: ".npmignore",
      isHidden: true,
      size: 19,
      modDate: "2020-10-20T04:14:20.462Z",
      parentId: "08e9a34357a0",
    },
    "36659b55f402": {
      id: "36659b55f402",
      name: "LICENSE",
      size: 1103,
      modDate: "2020-10-22T04:05:02.189Z",
      parentId: "08e9a34357a0",
    },
    "5ca005a238ee": {
      id: "5ca005a238ee",
      name: "README.md",
      size: 3304,
      modDate: "2020-10-22T04:13:22.234Z",
      parentId: "08e9a34357a0",
    },
    ccaeef8ef43f: {
      id: "ccaeef8ef43f",
      name: "jest.config.js",
      size: 108,
      modDate: "2020-10-24T17:50:59.584Z",
      parentId: "08e9a34357a0",
    },
    "232ab2ded9a2": {
      id: "232ab2ded9a2",
      name: "package-lock.json",
      size: 58201,
      modDate: "2020-10-24T17:55:57.396Z",
      parentId: "08e9a34357a0",
    },
    efaae6261dd2: {
      id: "efaae6261dd2",
      name: "package.json",
      size: 2504,
      modDate: "2020-10-24T18:33:09.643Z",
      parentId: "08e9a34357a0",
    },
    d3e4ad8b7899: {
      id: "d3e4ad8b7899",
      name: "src",
      isDir: true,
      modDate: "2020-10-24T15:43:58.573Z",
      parentId: "08e9a34357a0",
      childrenIds: [
        "e63419ad8876",
        "bbc23e48013e",
        "0fc90868914b",
        "1f5e98ca265e",
        "757357e35eb9",
        "4f0514c89627",
      ],
      childrenCount: 6,
    },
    e63419ad8876: {
      id: "e63419ad8876",
      name: "action-definitions",
      isDir: true,
      modDate: "2020-10-24T16:49:22.927Z",
      parentId: "d3e4ad8b7899",
      childrenIds: [
        "c340af44766a",
        "d9e86056caed",
        "1cadbc6ac017",
        "2a064b95ddd2",
      ],
      childrenCount: 4,
    },
    c340af44766a: {
      id: "c340af44766a",
      name: "default.ts",
      size: 4680,
      modDate: "2020-10-24T18:25:34.649Z",
      parentId: "e63419ad8876",
    },
    d9e86056caed: {
      id: "d9e86056caed",
      name: "essential.ts",
      size: 10794,
      modDate: "2020-10-24T18:20:31.266Z",
      parentId: "e63419ad8876",
    },
    "1cadbc6ac017": {
      id: "1cadbc6ac017",
      name: "index.ts",
      size: 976,
      modDate: "2020-10-24T17:02:06.892Z",
      parentId: "e63419ad8876",
    },
    "2a064b95ddd2": {
      id: "2a064b95ddd2",
      name: "other.ts",
      size: 1706,
      modDate: "2020-10-24T18:26:38.828Z",
      parentId: "e63419ad8876",
    },
    bbc23e48013e: {
      id: "bbc23e48013e",
      name: "components",
      isDir: true,
      modDate: "2020-10-22T16:12:57.200Z",
      parentId: "d3e4ad8b7899",
      childrenIds: [
        "ebb33a8320b7",
        "f792cce1f126",
        "acac9b332214",
        "16df703a0e34",
      ],
      childrenCount: 4,
    },
    ebb33a8320b7: {
      id: "ebb33a8320b7",
      name: "external",
      isDir: true,
      modDate: "2020-10-23T23:50:58.325Z",
      parentId: "bbc23e48013e",
      childrenIds: [
        "6492307a5acd",
        "1f1e663f7a95",
        "17467a52f595",
        "90de868d6c92",
        "b4ceb816ab04",
        "0e586e88b821",
        "4a13651533aa",
        "32236429b973",
        "4fb825f757d8",
        "03c6919c4be0",
        "b0761f6e733c",
        "aa98fe4152a7",
        "7f90887a0b55",
      ],
      childrenCount: 13,
    },
    "6492307a5acd": {
      id: "6492307a5acd",
      name: "ChonkyIcon.tsx",
      size: 7875,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "ebb33a8320b7",
    },
    "1f1e663f7a95": {
      id: "1f1e663f7a95",
      name: "FileBrowser.tsx",
      size: 2578,
      modDate: "2020-10-23T21:37:02.606Z",
      parentId: "ebb33a8320b7",
    },
    "17467a52f595": {
      id: "17467a52f595",
      name: "FileContextMenu-hooks.ts",
      size: 1746,
      modDate: "2020-10-24T16:26:47.115Z",
      parentId: "ebb33a8320b7",
    },
    "90de868d6c92": {
      id: "90de868d6c92",
      name: "FileContextMenu.tsx",
      size: 3080,
      modDate: "2020-10-24T16:28:45.473Z",
      parentId: "ebb33a8320b7",
    },
    b4ceb816ab04: {
      id: "b4ceb816ab04",
      name: "FileNavbar-hooks.ts",
      size: 1602,
      modDate: "2020-10-24T15:02:21.169Z",
      parentId: "ebb33a8320b7",
    },
    "0e586e88b821": {
      id: "0e586e88b821",
      name: "FileNavbar.tsx",
      size: 3122,
      modDate: "2020-10-24T15:02:21.213Z",
      parentId: "ebb33a8320b7",
    },
    "4a13651533aa": {
      id: "4a13651533aa",
      name: "FileToolbar.tsx",
      size: 2163,
      modDate: "2020-10-24T00:31:44.378Z",
      parentId: "ebb33a8320b7",
    },
    "32236429b973": {
      id: "32236429b973",
      name: "TextPlaceholder.tsx",
      size: 752,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "ebb33a8320b7",
    },
    "4fb825f757d8": {
      id: "4fb825f757d8",
      name: "ToolbarButton.tsx",
      size: 3856,
      modDate: "2020-10-22T19:33:01.267Z",
      parentId: "ebb33a8320b7",
    },
    "03c6919c4be0": {
      id: "03c6919c4be0",
      name: "ToolbarDropdown.tsx",
      size: 1955,
      modDate: "2020-10-24T16:28:45.465Z",
      parentId: "ebb33a8320b7",
    },
    b0761f6e733c: {
      id: "b0761f6e733c",
      name: "ToolbarDropdownButton.tsx",
      size: 3549,
      modDate: "2020-10-24T01:01:02.195Z",
      parentId: "ebb33a8320b7",
    },
    aa98fe4152a7: {
      id: "aa98fe4152a7",
      name: "ToolbarInfo.tsx",
      size: 1481,
      modDate: "2020-10-22T00:28:16.619Z",
      parentId: "ebb33a8320b7",
    },
    "7f90887a0b55": {
      id: "7f90887a0b55",
      name: "ToolbarSearch.tsx",
      size: 1710,
      modDate: "2020-10-21T00:50:23.792Z",
      parentId: "ebb33a8320b7",
    },
    f792cce1f126: {
      id: "f792cce1f126",
      name: "file-entry",
      isDir: true,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "bbc23e48013e",
      childrenIds: [
        "ea363491e29c",
        "8a0dd72dc223",
        "836d378b2fb4",
        "b303b40eba33",
        "3df2618f8ea1",
        "869fadc64ed3",
        "374a4778152a",
        "1953147eee99",
        "e805e42f66fa",
      ],
      childrenCount: 9,
    },
    ea363491e29c: {
      id: "ea363491e29c",
      name: "ClickableFileEntry-hooks.tsx",
      size: 2142,
      modDate: "2020-10-24T15:02:21.193Z",
      parentId: "f792cce1f126",
    },
    "8a0dd72dc223": {
      id: "8a0dd72dc223",
      name: "ClickableFileEntry.tsx",
      size: 1242,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "f792cce1f126",
    },
    "836d378b2fb4": {
      id: "836d378b2fb4",
      name: "DnDFileEntry.tsx",
      size: 4443,
      modDate: "2020-10-24T15:02:21.197Z",
      parentId: "f792cce1f126",
    },
    b303b40eba33: {
      id: "b303b40eba33",
      name: "DnDFileListDragLayer.tsx",
      size: 2853,
      modDate: "2020-10-22T00:08:59.184Z",
      parentId: "f792cce1f126",
    },
    "3df2618f8ea1": {
      id: "3df2618f8ea1",
      name: "FileEntry-hooks.tsx",
      size: 6272,
      modDate: "2020-10-24T18:04:18.416Z",
      parentId: "f792cce1f126",
    },
    "869fadc64ed3": {
      id: "869fadc64ed3",
      name: "FileEntry.tsx",
      size: 432,
      modDate: "2020-10-24T17:15:16.388Z",
      parentId: "f792cce1f126",
    },
    "374a4778152a": {
      id: "374a4778152a",
      name: "FileEntryGrid.tsx",
      size: 3559,
      modDate: "2020-10-24T17:20:45.191Z",
      parentId: "f792cce1f126",
    },
    "1953147eee99": {
      id: "1953147eee99",
      name: "FileEntryList.tsx",
      size: 3165,
      modDate: "2020-10-24T17:20:45.191Z",
      parentId: "f792cce1f126",
    },
    e805e42f66fa: {
      id: "e805e42f66fa",
      name: "SmartFileEntry.tsx",
      size: 1230,
      modDate: "2020-10-22T01:09:57.186Z",
      parentId: "f792cce1f126",
    },
    acac9b332214: {
      id: "acac9b332214",
      name: "file-list",
      isDir: true,
      modDate: "2020-10-22T17:06:35.681Z",
      parentId: "bbc23e48013e",
      childrenIds: [
        "3ec0fdc85293",
        "07c1b362ab80",
        "ed52b1577cbd",
        "f73e6e5fc3ac",
        "20ac09e4b8c0",
      ],
      childrenCount: 5,
    },
    "3ec0fdc85293": {
      id: "3ec0fdc85293",
      name: "FileList-hooks.tsx",
      size: 892,
      modDate: "2020-10-24T17:23:15.113Z",
      parentId: "acac9b332214",
    },
    "07c1b362ab80": {
      id: "07c1b362ab80",
      name: "FileList.tsx",
      size: 2007,
      modDate: "2020-10-24T19:04:16.476Z",
      parentId: "acac9b332214",
    },
    ed52b1577cbd: {
      id: "ed52b1577cbd",
      name: "FileListEmpty.tsx",
      size: 961,
      modDate: "2020-10-22T16:30:27.040Z",
      parentId: "acac9b332214",
    },
    f73e6e5fc3ac: {
      id: "f73e6e5fc3ac",
      name: "FileListGrid.tsx",
      size: 5471,
      modDate: "2020-10-22T17:23:26.674Z",
      parentId: "acac9b332214",
    },
    "20ac09e4b8c0": {
      id: "20ac09e4b8c0",
      name: "FileListList.tsx",
      size: 1959,
      modDate: "2020-10-22T16:30:39.684Z",
      parentId: "acac9b332214",
    },
    "16df703a0e34": {
      id: "16df703a0e34",
      name: "internal",
      isDir: true,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "bbc23e48013e",
      childrenIds: [
        "bae240ccdb0d",
        "0517169a653e",
        "0929ebecda08",
        "15fb0260468b",
        "767d14961ba2",
        "6823f91fbd62",
        "d1b0d830ccfc",
      ],
      childrenCount: 7,
    },
    bae240ccdb0d: {
      id: "bae240ccdb0d",
      name: "ChonkyBusinessLogic.tsx",
      size: 2189,
      modDate: "2020-10-23T21:29:58.392Z",
      parentId: "16df703a0e34",
    },
    "0517169a653e": {
      id: "0517169a653e",
      name: "ChonkyPresentationLayer.tsx",
      size: 4073,
      modDate: "2020-10-24T01:27:15.160Z",
      parentId: "16df703a0e34",
    },
    "0929ebecda08": {
      id: "0929ebecda08",
      name: "ClickableWrapper-hooks.tsx",
      size: 2874,
      modDate: "2020-10-22T01:17:59.838Z",
      parentId: "16df703a0e34",
    },
    "15fb0260468b": {
      id: "15fb0260468b",
      name: "ClickableWrapper.tsx",
      size: 1895,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "16df703a0e34",
    },
    "767d14961ba2": {
      id: "767d14961ba2",
      name: "ErrorMessage.tsx",
      size: 787,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "16df703a0e34",
    },
    "6823f91fbd62": {
      id: "6823f91fbd62",
      name: "FileThumbnail.tsx",
      size: 711,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "16df703a0e34",
    },
    d1b0d830ccfc: {
      id: "d1b0d830ccfc",
      name: "HotkeyListener.tsx",
      size: 1250,
      modDate: "2020-10-23T21:22:54.374Z",
      parentId: "16df703a0e34",
    },
    "0fc90868914b": {
      id: "0fc90868914b",
      name: "index.ts",
      size: 1289,
      modDate: "2020-10-24T15:02:21.201Z",
      parentId: "d3e4ad8b7899",
    },
    "1f5e98ca265e": {
      id: "1f5e98ca265e",
      name: "redux",
      isDir: true,
      modDate: "2020-10-23T15:12:22.151Z",
      parentId: "d3e4ad8b7899",
      childrenIds: [
        "8f24e9d3c3d9",
        "b993f382ec52",
        "4a3b28a83369",
        "f8c35945417a",
        "c81dbb9abcc0",
        "3bc086273549",
        "0b415f2bdc4d",
        "7703a3d450bb",
      ],
      childrenCount: 8,
    },
    "8f24e9d3c3d9": {
      id: "8f24e9d3c3d9",
      name: "files-transforms.ts",
      size: 2985,
      modDate: "2020-10-24T14:59:09.588Z",
      parentId: "1f5e98ca265e",
    },
    b993f382ec52: {
      id: "b993f382ec52",
      name: "reducers.ts",
      size: 7691,
      modDate: "2020-10-24T15:06:10.670Z",
      parentId: "1f5e98ca265e",
    },
    "4a3b28a83369": {
      id: "4a3b28a83369",
      name: "selectors.ts",
      size: 4766,
      modDate: "2020-10-24T02:35:09.515Z",
      parentId: "1f5e98ca265e",
    },
    f8c35945417a: {
      id: "f8c35945417a",
      name: "state.ts",
      size: 1133,
      modDate: "2020-10-24T15:02:21.193Z",
      parentId: "1f5e98ca265e",
    },
    c81dbb9abcc0: {
      id: "c81dbb9abcc0",
      name: "store.ts",
      size: 1990,
      modDate: "2020-10-23T17:03:59.027Z",
      parentId: "1f5e98ca265e",
    },
    "3bc086273549": {
      id: "3bc086273549",
      name: "thunks",
      isDir: true,
      modDate: "2020-10-23T21:13:15.091Z",
      parentId: "1f5e98ca265e",
      childrenIds: ["a2db415a6e18", "65238c94e4e6", "93e6d0a7b61b"],
      childrenCount: 3,
    },
    a2db415a6e18: {
      id: "a2db415a6e18",
      name: "dispatchers.thunks.ts",
      size: 5790,
      modDate: "2020-10-24T16:26:47.115Z",
      parentId: "3bc086273549",
    },
    "65238c94e4e6": {
      id: "65238c94e4e6",
      name: "file-actions.thunks.ts",
      size: 6552,
      modDate: "2020-10-24T16:26:47.115Z",
      parentId: "3bc086273549",
    },
    "93e6d0a7b61b": {
      id: "93e6d0a7b61b",
      name: "files.thunks.ts",
      size: 4200,
      modDate: "2020-10-24T15:02:21.205Z",
      parentId: "3bc086273549",
    },
    "0b415f2bdc4d": {
      id: "0b415f2bdc4d",
      name: "types.ts",
      size: 2433,
      modDate: "2020-10-24T16:26:47.115Z",
      parentId: "1f5e98ca265e",
    },
    "7703a3d450bb": {
      id: "7703a3d450bb",
      name: "watchers.ts",
      size: 2955,
      modDate: "2020-10-24T15:02:21.189Z",
      parentId: "1f5e98ca265e",
    },
    "757357e35eb9": {
      id: "757357e35eb9",
      name: "types",
      isDir: true,
      modDate: "2020-10-24T15:00:36.227Z",
      parentId: "d3e4ad8b7899",
      childrenIds: [
        "b7a2a86f17af",
        "a5845a192903",
        "278b8e70fd00",
        "335428d20376",
        "1b4ae6757e66",
        "bac1fc5d2348",
        "76f7cdfe3e4e",
        "7ad6dbf5bde1",
        "135e7f4a6fd4",
        "fc916f7048fa",
        "2b8624bab96b",
        "5acb74d37cbb",
        "718a4c2e24dd",
        "cdf88bda378f",
      ],
      childrenCount: 14,
    },
    b7a2a86f17af: {
      id: "b7a2a86f17af",
      name: "action-handler.types.ts",
      size: 669,
      modDate: "2020-10-24T15:00:13.051Z",
      parentId: "757357e35eb9",
    },
    a5845a192903: {
      id: "a5845a192903",
      name: "action-menus.types.ts",
      size: 144,
      modDate: "2020-10-24T15:00:36.227Z",
      parentId: "757357e35eb9",
    },
    "278b8e70fd00": {
      id: "278b8e70fd00",
      name: "action-payloads.types.ts",
      size: 1089,
      modDate: "2020-10-24T14:49:34.381Z",
      parentId: "757357e35eb9",
    },
    "335428d20376": {
      id: "335428d20376",
      name: "action.types.ts",
      size: 3650,
      modDate: "2020-10-24T18:27:59.783Z",
      parentId: "757357e35eb9",
    },
    "1b4ae6757e66": {
      id: "1b4ae6757e66",
      name: "context-menu.types.ts",
      size: 79,
      modDate: "2020-10-23T23:19:40.211Z",
      parentId: "757357e35eb9",
    },
    bac1fc5d2348: {
      id: "bac1fc5d2348",
      name: "file-browser.types.ts",
      size: 4697,
      modDate: "2020-10-24T16:26:47.115Z",
      parentId: "757357e35eb9",
    },
    "76f7cdfe3e4e": {
      id: "76f7cdfe3e4e",
      name: "file-view.types.ts",
      size: 217,
      modDate: "2020-10-21T23:04:47.359Z",
      parentId: "757357e35eb9",
    },
    "7ad6dbf5bde1": {
      id: "7ad6dbf5bde1",
      name: "files.types.ts",
      size: 1457,
      modDate: "2020-10-23T20:34:53.649Z",
      parentId: "757357e35eb9",
    },
    "135e7f4a6fd4": {
      id: "135e7f4a6fd4",
      name: "icons.types.ts",
      size: 2008,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "757357e35eb9",
    },
    fc916f7048fa: {
      id: "fc916f7048fa",
      name: "options.types.ts",
      size: 53,
      modDate: "2020-10-21T22:58:06.758Z",
      parentId: "757357e35eb9",
    },
    "2b8624bab96b": {
      id: "2b8624bab96b",
      name: "selection.types.ts",
      size: 295,
      modDate: "2020-10-22T02:20:14.005Z",
      parentId: "757357e35eb9",
    },
    "5acb74d37cbb": {
      id: "5acb74d37cbb",
      name: "sort.types.ts",
      size: 210,
      modDate: "2020-10-21T22:58:06.754Z",
      parentId: "757357e35eb9",
    },
    "718a4c2e24dd": {
      id: "718a4c2e24dd",
      name: "thumbnails.types.ts",
      size: 180,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "757357e35eb9",
    },
    cdf88bda378f: {
      id: "cdf88bda378f",
      name: "validation.types.ts",
      size: 82,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "757357e35eb9",
    },
    "4f0514c89627": {
      id: "4f0514c89627",
      name: "util",
      isDir: true,
      modDate: "2020-10-23T14:02:20.974Z",
      parentId: "d3e4ad8b7899",
      childrenIds: [
        "7db03dc4e3bb",
        "78be7381a930",
        "9389a5c0e0b4",
        "05999054fe1e",
        "bbdb776662a9",
        "cc3291b04d93",
        "5e89ab628fca",
        "87692dd3f70c",
        "9f44137375e8",
        "fccc459d5c10",
      ],
      childrenCount: 10,
    },
    "7db03dc4e3bb": {
      id: "7db03dc4e3bb",
      name: "file-actions-definitions.ts",
      size: 1877,
      modDate: "2020-10-24T14:59:09.600Z",
      parentId: "4f0514c89627",
    },
    "78be7381a930": {
      id: "78be7381a930",
      name: "file-actions.ts",
      size: 3433,
      modDate: "2020-10-24T15:06:31.894Z",
      parentId: "4f0514c89627",
    },
    "9389a5c0e0b4": {
      id: "9389a5c0e0b4",
      name: "file-browser-handle.ts",
      size: 1022,
      modDate: "2020-10-24T15:06:31.902Z",
      parentId: "4f0514c89627",
    },
    "05999054fe1e": {
      id: "05999054fe1e",
      name: "file-helper.ts",
      size: 3269,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "4f0514c89627",
    },
    bbdb776662a9: {
      id: "bbdb776662a9",
      name: "file-icon-helper.ts",
      size: 8403,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "4f0514c89627",
    },
    cc3291b04d93: {
      id: "cc3291b04d93",
      name: "helpers.ts",
      size: 2433,
      modDate: "2020-10-24T14:59:09.604Z",
      parentId: "4f0514c89627",
    },
    "5e89ab628fca": {
      id: "5e89ab628fca",
      name: "hooks-helpers.ts",
      size: 962,
      modDate: "2020-10-24T15:06:31.974Z",
      parentId: "4f0514c89627",
    },
    "87692dd3f70c": {
      id: "87692dd3f70c",
      name: "logger.ts",
      size: 617,
      modDate: "2020-10-20T03:15:57.395Z",
      parentId: "4f0514c89627",
    },
    "9f44137375e8": {
      id: "9f44137375e8",
      name: "styles.ts",
      size: 1113,
      modDate: "2020-10-22T13:19:22.779Z",
      parentId: "4f0514c89627",
    },
    fccc459d5c10: {
      id: "fccc459d5c10",
      name: "validation.ts",
      size: 12340,
      modDate: "2020-10-24T14:59:09.588Z",
      parentId: "4f0514c89627",
    },
    f22891ef4c60: {
      id: "f22891ef4c60",
      name: "style",
      isDir: true,
      modDate: "2020-10-22T11:47:46.053Z",
      parentId: "08e9a34357a0",
      childrenIds: [
        "e7920873e598",
        "32d418cfcd2c",
        "7f7937a9431a",
        "02f6b6ea7336",
        "66c055cedf5d",
        "98c35be5a56e",
        "07150c45bc8a",
        "ca1a85cd8053",
        "4ea5c40da335",
        "b965a53e37bd",
      ],
      childrenCount: 10,
    },
    e7920873e598: {
      id: "e7920873e598",
      name: "_file-entry-grid.scss",
      size: 6486,
      modDate: "2020-10-20T03:15:57.399Z",
      parentId: "f22891ef4c60",
    },
    "32d418cfcd2c": {
      id: "32d418cfcd2c",
      name: "_file-entry-list.scss",
      size: 2644,
      modDate: "2020-10-20T03:15:57.399Z",
      parentId: "f22891ef4c60",
    },
    "7f7937a9431a": {
      id: "7f7937a9431a",
      name: "_file-entry.scss",
      size: 505,
      modDate: "2020-10-20T03:15:57.399Z",
      parentId: "f22891ef4c60",
    },
    "02f6b6ea7336": {
      id: "02f6b6ea7336",
      name: "_file-list.scss",
      size: 401,
      modDate: "2020-10-20T03:15:57.399Z",
      parentId: "f22891ef4c60",
    },
    "66c055cedf5d": {
      id: "66c055cedf5d",
      name: "_shared.scss",
      size: 448,
      modDate: "2020-10-22T13:08:29.133Z",
      parentId: "f22891ef4c60",
    },
    "98c35be5a56e": {
      id: "98c35be5a56e",
      name: "_text-placeholder.scss",
      size: 462,
      modDate: "2020-10-20T03:15:57.399Z",
      parentId: "f22891ef4c60",
    },
    "07150c45bc8a": {
      id: "07150c45bc8a",
      name: "_util.scss",
      size: 3522,
      modDate: "2020-10-20T03:15:57.399Z",
      parentId: "f22891ef4c60",
    },
    ca1a85cd8053: {
      id: "ca1a85cd8053",
      name: "main.css",
      size: 10305,
      modDate: "2020-10-22T13:08:29.489Z",
      parentId: "f22891ef4c60",
    },
    "4ea5c40da335": {
      id: "4ea5c40da335",
      name: "main.css.map",
      size: 2243,
      modDate: "2020-10-22T13:08:29.489Z",
      parentId: "f22891ef4c60",
    },
    b965a53e37bd: {
      id: "b965a53e37bd",
      name: "main.scss",
      size: 159,
      modDate: "2020-10-22T11:47:50.757Z",
      parentId: "f22891ef4c60",
    },
    "543d473f1c38": {
      id: "543d473f1c38",
      name: "test",
      isDir: true,
      modDate: "2020-10-24T18:32:19.055Z",
      parentId: "08e9a34357a0",
      childrenIds: [
        "d9bcd9d845fe",
        "3c9c725386fd",
        "d6143c55b442",
        "e9d658e3bd16",
      ],
      childrenCount: 4,
    },
    d9bcd9d845fe: {
      id: "d9bcd9d845fe",
      name: "__snapshots__",
      isDir: true,
      modDate: "2020-10-24T18:12:45.201Z",
      parentId: "543d473f1c38",
      childrenIds: ["d832ee48342e"],
      childrenCount: 1,
    },
    d832ee48342e: {
      id: "d832ee48342e",
      name: "component-hierarchy.test.tsx.snap",
      size: 52337,
      modDate: "2020-10-24T18:14:54.631Z",
      parentId: "d9bcd9d845fe",
    },
    "3c9c725386fd": {
      id: "3c9c725386fd",
      name: "component-hierarchy.test.tsx",
      size: 1095,
      modDate: "2020-10-24T18:14:42.335Z",
      parentId: "543d473f1c38",
    },
    d6143c55b442: {
      id: "d6143c55b442",
      name: "file-action-handler.test.tsx",
      size: 1519,
      modDate: "2020-10-24T18:06:46.018Z",
      parentId: "543d473f1c38",
    },
    e9d658e3bd16: {
      id: "e9d658e3bd16",
      name: "test-util.ts",
      size: 102,
      modDate: "2020-10-24T17:52:08.507Z",
      parentId: "543d473f1c38",
    },
    "684400d53b85": {
      id: "684400d53b85",
      name: "tsconfig.build.json",
      size: 132,
      modDate: "2020-10-24T16:47:15.589Z",
      parentId: "08e9a34357a0",
    },
    "8296bba42999": {
      id: "8296bba42999",
      name: "tsconfig.json",
      size: 156,
      modDate: "2020-10-24T17:51:48.111Z",
      parentId: "08e9a34357a0",
    },
    "43d749c47bbe": {
      id: "43d749c47bbe",
      name: "chonky-icon-fontawesome",
      isDir: true,
      modDate: "2020-10-24T18:33:09.643Z",
      parentId: "b4344ec9eb06",
      childrenIds: [
        "a4c13c4816f4",
        "b2007bcba768",
        "70543cbe2624",
        "e9e4f67dc916",
        "56cb4f7c8489",
        "51e3d64a108a",
      ],
      childrenCount: 6,
    },
    a4c13c4816f4: {
      id: "a4c13c4816f4",
      name: "LICENSE",
      size: 1103,
      modDate: "2020-10-22T04:05:02.193Z",
      parentId: "43d749c47bbe",
    },
    b2007bcba768: {
      id: "b2007bcba768",
      name: "README.md",
      size: 160,
      modDate: "2020-10-20T04:16:50.196Z",
      parentId: "43d749c47bbe",
    },
    "70543cbe2624": {
      id: "70543cbe2624",
      name: "package-lock.json",
      size: 60041,
      modDate: "2020-10-24T17:55:59.632Z",
      parentId: "43d749c47bbe",
    },
    e9e4f67dc916: {
      id: "e9e4f67dc916",
      name: "package.json",
      size: 1235,
      modDate: "2020-10-24T18:33:09.643Z",
      parentId: "43d749c47bbe",
    },
    "56cb4f7c8489": {
      id: "56cb4f7c8489",
      name: "src",
      isDir: true,
      modDate: "2020-10-20T13:09:34.294Z",
      parentId: "43d749c47bbe",
      childrenIds: ["3c8091a3c0ab", "456be3cd3136"],
      childrenCount: 2,
    },
    "3c8091a3c0ab": {
      id: "3c8091a3c0ab",
      name: "ChonkyIconFA.tsx",
      size: 311,
      modDate: "2020-10-24T16:39:43.439Z",
      parentId: "56cb4f7c8489",
    },
    "456be3cd3136": {
      id: "456be3cd3136",
      name: "index.ts",
      size: 47,
      modDate: "2020-10-20T13:09:44.914Z",
      parentId: "56cb4f7c8489",
    },
    "51e3d64a108a": {
      id: "51e3d64a108a",
      name: "tsconfig.json",
      size: 132,
      modDate: "2020-10-20T13:13:55.871Z",
      parentId: "43d749c47bbe",
    },
    "0b05bc983fd9": {
      id: "0b05bc983fd9",
      name: "react.tsconfig.json",
      size: 648,
      modDate: "2020-10-20T13:13:02.620Z",
      parentId: "e598a85f843c",
    },
    b53aa057fad1: {
      id: "b53aa057fad1",
      name: "Images with thumbnails",
      isDir: true,
      modDate: "2020-06-27T12:28:53.648Z",
      childrenIds: [
        "353f63dbd169",
        "28f0f5f391eb",
        "d1b9dc5457b8",
        "0c8fa73e4685",
        "0b74a148c890",
        "7cd701884c5d",
        "6655c71cdc8d",
        "653f1108cf87",
      ],
      childrenCount: 8,
      parentId: "qwerty123456",
    },
    "353f63dbd169": {
      id: "353f63dbd169",
      name: "Dotonbori.jpg",
      size: 212024,
      modDate: "2020-06-27T12:16:46.392Z",
      parentId: "b53aa057fad1",
      thumbnailUrl: "/thumbnails/353f63dbd169.jpg",
    },
    "28f0f5f391eb": {
      id: "28f0f5f391eb",
      name: "Itsukushima.jpg",
      size: 90820,
      modDate: "2020-06-27T12:14:34.529Z",
      parentId: "b53aa057fad1",
      thumbnailUrl: "/thumbnails/28f0f5f391eb.jpg",
    },
    d1b9dc5457b8: {
      id: "d1b9dc5457b8",
      name: "Kyoto Station.jpg",
      size: 204463,
      modDate: "2020-06-27T12:21:44.549Z",
      parentId: "b53aa057fad1",
      thumbnailUrl: "/thumbnails/d1b9dc5457b8.jpg",
    },
    "0c8fa73e4685": {
      id: "0c8fa73e4685",
      name: "Mount Fuji.jpg",
      size: 62851,
      modDate: "2020-06-27T12:13:19.034Z",
      parentId: "b53aa057fad1",
      thumbnailUrl: "/thumbnails/0c8fa73e4685.jpg",
    },
    "0b74a148c890": {
      id: "0b74a148c890",
      name: "Osaka Castle.jpg",
      size: 87531,
      modDate: "2020-06-27T12:15:28.237Z",
      parentId: "b53aa057fad1",
      thumbnailUrl: "/thumbnails/0b74a148c890.jpg",
    },
    "7cd701884c5d": {
      id: "7cd701884c5d",
      name: "Tokyo Skytree.jpg",
      size: 164850,
      modDate: "2020-06-27T12:21:21.209Z",
      parentId: "b53aa057fad1",
      thumbnailUrl: "/thumbnails/7cd701884c5d.jpg",
    },
    "6655c71cdc8d": {
      id: "6655c71cdc8d",
      name: "Tokyo.jpg",
      size: 109441,
      modDate: "2020-06-27T12:17:34.935Z",
      parentId: "b53aa057fad1",
      thumbnailUrl: "/thumbnails/6655c71cdc8d.jpg",
    },
    "653f1108cf87": {
      id: "653f1108cf87",
      name: "Yoshinoyama.jpg",
      size: 201866,
      modDate: "2020-06-27T12:22:07.869Z",
      parentId: "b53aa057fad1",
      thumbnailUrl: "/thumbnails/653f1108cf87.jpg",
    },
    b6667221f24b: {
      id: "b6667221f24b",
      name: "Files with long names",
      isDir: true,
      modDate: "2020-06-27T13:38:08.776Z",
      childrenIds: ["8d6a608dbd08", "6b8711a21780", "4a2c1afcc755"],
      childrenCount: 3,
      parentId: "qwerty123456",
    },
    "8d6a608dbd08": {
      id: "8d6a608dbd08",
      name:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis nunc diam. Etiam accumsan, diam non sodales sollicitudin.txt",
      size: 0,
      modDate: "2020-06-27T13:38:08.776Z",
      parentId: "b6667221f24b",
    },
    "6b8711a21780": {
      id: "6b8711a21780",
      name:
        "Sed at tempus arcu. Vestibulum viverra nisl eget mi porta sodales. In suscipit luctus vestibulum.pdf",
      size: 0,
      modDate: "2020-06-27T13:35:40.786Z",
      parentId: "b6667221f24b",
    },
    "4a2c1afcc755": {
      id: "4a2c1afcc755",
      name:
        "this_is_a_python_script_with_an_extremely_long_name_that_tries_to_be_descriptive_but_ends_up_being_too_verbose.py",
      size: 0,
      modDate: "2020-06-27T13:31:15.978Z",
      parentId: "b6667221f24b",
    },
    "002705459ca4": {
      id: "002705459ca4",
      name: "Empty folder",
      isDir: true,
      modDate: "2020-07-18T22:27:23.864Z",
      childrenIds: [],
      childrenCount: 0,
      parentId: "qwerty123456",
    },
    a9fd7c8a04db: {
      id: "a9fd7c8a04db",
      name: "15 nested folders",
      isDir: true,
      modDate: "2020-06-27T13:32:07.253Z",
      childrenIds: ["e3bcade90390"],
      childrenCount: 1,
      parentId: "qwerty123456",
    },
    e3bcade90390: {
      id: "e3bcade90390",
      name: "Level 1",
      isDir: true,
      modDate: "2020-06-27T13:32:10.805Z",
      parentId: "a9fd7c8a04db",
      childrenIds: ["99a4ce856444"],
      childrenCount: 1,
    },
    "99a4ce856444": {
      id: "99a4ce856444",
      name: "Level 2",
      isDir: true,
      modDate: "2020-06-27T13:32:14.109Z",
      parentId: "e3bcade90390",
      childrenIds: ["7263c24adb31"],
      childrenCount: 1,
    },
    "7263c24adb31": {
      id: "7263c24adb31",
      name: "Level 3",
      isDir: true,
      modDate: "2020-06-27T13:32:17.225Z",
      parentId: "99a4ce856444",
      childrenIds: ["ca1a1fd357a3"],
      childrenCount: 1,
    },
    ca1a1fd357a3: {
      id: "ca1a1fd357a3",
      name: "Level 4",
      isDir: true,
      modDate: "2020-06-27T13:32:20.329Z",
      parentId: "7263c24adb31",
      childrenIds: ["f5962105e6bf"],
      childrenCount: 1,
    },
    f5962105e6bf: {
      id: "f5962105e6bf",
      name: "Level 5",
      isDir: true,
      modDate: "2020-06-27T13:32:24.209Z",
      parentId: "ca1a1fd357a3",
      childrenIds: ["eb99622b6bf7"],
      childrenCount: 1,
    },
    eb99622b6bf7: {
      id: "eb99622b6bf7",
      name: "Level 6",
      isDir: true,
      modDate: "2020-06-27T13:32:28.661Z",
      parentId: "f5962105e6bf",
      childrenIds: ["eb6ef39dcf7e"],
      childrenCount: 1,
    },
    eb6ef39dcf7e: {
      id: "eb6ef39dcf7e",
      name: "Level 7",
      isDir: true,
      modDate: "2020-06-27T13:32:33.273Z",
      parentId: "eb99622b6bf7",
      childrenIds: ["a09fd90e8a3e"],
      childrenCount: 1,
    },
    a09fd90e8a3e: {
      id: "a09fd90e8a3e",
      name: "Level 8",
      isDir: true,
      modDate: "2020-06-27T13:32:36.993Z",
      parentId: "eb6ef39dcf7e",
      childrenIds: ["8e7120860c41"],
      childrenCount: 1,
    },
    "8e7120860c41": {
      id: "8e7120860c41",
      name: "Level 9",
      isDir: true,
      modDate: "2020-06-27T13:32:40.877Z",
      parentId: "a09fd90e8a3e",
      childrenIds: ["3dc12662a950"],
      childrenCount: 1,
    },
    "3dc12662a950": {
      id: "3dc12662a950",
      name: "Level 10",
      isDir: true,
      modDate: "2020-06-27T13:32:44.009Z",
      parentId: "8e7120860c41",
      childrenIds: ["1062ab9dec65"],
      childrenCount: 1,
    },
    "1062ab9dec65": {
      id: "1062ab9dec65",
      name: "Level 11",
      isDir: true,
      modDate: "2020-06-27T13:32:46.497Z",
      parentId: "3dc12662a950",
      childrenIds: ["ca09fe075bf4"],
      childrenCount: 1,
    },
    ca09fe075bf4: {
      id: "ca09fe075bf4",
      name: "Level 12",
      isDir: true,
      modDate: "2020-06-27T13:32:49.597Z",
      parentId: "1062ab9dec65",
      childrenIds: ["29fda22251ec"],
      childrenCount: 1,
    },
    "29fda22251ec": {
      id: "29fda22251ec",
      name: "Level 13",
      isDir: true,
      modDate: "2020-06-27T13:32:52.861Z",
      parentId: "ca09fe075bf4",
      childrenIds: ["8270c2231d78"],
      childrenCount: 1,
    },
    "8270c2231d78": {
      id: "8270c2231d78",
      name: "Level 14",
      isDir: true,
      modDate: "2020-06-27T13:32:56.657Z",
      parentId: "29fda22251ec",
      childrenIds: ["e3c798d6abf7"],
      childrenCount: 1,
    },
    e3c798d6abf7: {
      id: "e3c798d6abf7",
      name: "Level 15",
      isDir: true,
      modDate: "2020-06-27T13:34:35.083Z",
      parentId: "8270c2231d78",
      childrenIds: ["d2551145553d"],
      childrenCount: 1,
    },
    d2551145553d: {
      id: "d2551145553d",
      name: "Bigfoot Footage.avi",
      size: 3601921,
      modDate: "2020-06-27T13:34:35.083Z",
      parentId: "e3c798d6abf7",
    },
    "549c1f93247a": {
      id: "549c1f93247a",
      name: "Files that load forever",
      isDir: true,
      modDate: "2020-06-27T13:58:16.428Z",
      childrenIds: ["34308fe0264f", "79e0e1372800", "a358142e72e3"],
      childrenCount: 3,
      parentId: "qwerty123456",
    },
    "34308fe0264f": null,
    "79e0e1372800": null,
    a358142e72e3: null,
    zFe: {
      id: "zFe",
      name: ".hidden.txt",
      isHidden: true,
      modDate: "1997-04-26T11:00:00.000Z",
      size: 42,
      parentId: "qwerty123456",
    },
    zJr: {
      id: "zJr",
      name: "encrypted.zip",
      isEncrypted: true,
      modDate: "2020-10-24T19:10:17.659Z",
      size: 1337,
      parentId: "qwerty123456",
    },
    zHy: {
      id: "zHy",
      name: "chonky-sphere-v2.png",
      thumbnailUrl: "/chonky-sphere-v2.png",
      modDate: "2020-10-24T19:10:17.659Z",
      size: 322,
      parentId: "qwerty123456",
    },
    vCt: {
      id: "vCt",
      name: "nyan-cat.gif",
      thumbnailUrl: "/nyan-cat.gif",
      size: 9001,
      modDate: "2020-10-24T19:10:17.659Z",
      parentId: "qwerty123456",
    },
  },
};

// We define a custom interface for file data because we want to add some custom fields
// to Chonky's built-in `FileData` interface.
interface CustomFileData extends FileData {
  parentId?: string;
  childrenIds?: string[];
}
interface CustomFileMap {
  [fileId: string]: CustomFileData;
}

// Helper method to attach our custom TypeScript types to the imported JSON file map.
const prepareCustomFileMap = () => {
  const baseFileMap = (DemoFsMap.fileMap as unknown) as CustomFileMap;
  const rootFolderId = DemoFsMap.rootFolderId;
  return { baseFileMap, rootFolderId };
};

// Hook that sets up our file map and defines functions used to mutate - `deleteFiles`,
// `moveFiles`, and so on.
const useCustomFileMap = () => {
  const { baseFileMap, rootFolderId } = useMemo(prepareCustomFileMap, []);

  // Setup the React state for our file map and the current folder.
  const [fileMap, setFileMap] = useState(baseFileMap);
  const [currentFolderId, setCurrentFolderId] = useState(rootFolderId);

  // Setup the function used to reset our file map to its initial value. Note that
  // here and below we will always use `useCallback` hook for our functions - this is
  // a crucial React performance optimization, read more about it here:
  // https://reactjs.org/docs/hooks-reference.html#usecallback
  const resetFileMap = useCallback(() => {
    setFileMap(baseFileMap);
    setCurrentFolderId(rootFolderId);
  }, [baseFileMap, rootFolderId]);

  // Setup logic to listen to changes in current folder ID without having to update
  // `useCallback` hooks. Read more about it here:
  // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
  const currentFolderIdRef = useRef(currentFolderId);
  useEffect(() => {
    currentFolderIdRef.current = currentFolderId;
  }, [currentFolderId]);

  // Function that will be called when user deletes files either using the toolbar
  // button or `Delete` key.
  const deleteFiles = useCallback((files: CustomFileData[]) => {
    // We use the so-called "functional update" to set the new file map. This
    // lets us access the current file map value without having to track it
    // explicitly. Read more about it here:
    // https://reactjs.org/docs/hooks-reference.html#functional-updates
    setFileMap((currentFileMap) => {
      // Create a copy of the file map to make sure we don't mutate it.
      const newFileMap = { ...currentFileMap };

      files.forEach((file) => {
        // Delete file from the file map.
        delete newFileMap[file.id];

        // Update the parent folder to make sure it doesn't try to load the
        // file we just deleted.
        if (file.parentId) {
          const parent = newFileMap[file.parentId]!;
          const newChildrenIds = parent.childrenIds!.filter(
            (id) => id !== file.id
          );
          newFileMap[file.parentId] = {
            ...parent,
            childrenIds: newChildrenIds,
            childrenCount: newChildrenIds.length,
          };
        }
      });

      return newFileMap;
    });
  }, []);

  // Function that will be called when files are moved from one folder to another
  // using drag & drop.
  const moveFiles = useCallback(
    (
      files: CustomFileData[],
      source: CustomFileData,
      destination: CustomFileData
    ) => {
      setFileMap((currentFileMap) => {
        const newFileMap = { ...currentFileMap };
        const moveFileIds = new Set(files.map((f) => f.id));

        // Delete files from their source folder.
        const newSourceChildrenIds = source.childrenIds!.filter(
          (id) => !moveFileIds.has(id)
        );
        newFileMap[source.id] = {
          ...source,
          childrenIds: newSourceChildrenIds,
          childrenCount: newSourceChildrenIds.length,
        };

        // Add the files to their destination folder.
        const newDestinationChildrenIds = [
          ...destination.childrenIds!,
          ...files.map((f) => f.id),
        ];
        newFileMap[destination.id] = {
          ...destination,
          childrenIds: newDestinationChildrenIds,
          childrenCount: newDestinationChildrenIds.length,
        };

        // Finally, update the parent folder ID on the files from source folder
        // ID to the destination folder ID.
        files.forEach((file) => {
          newFileMap[file.id] = {
            ...file,
            parentId: destination.id,
          };
        });

        return newFileMap;
      });
    },
    []
  );

  // Function that will be called when user creates a new folder using the toolbar
  // button. That that we use incremental integer IDs for new folder, but this is
  // not a good practice in production! Instead, you should use something like UUIDs
  // or MD5 hashes for file paths.
  const idCounter = useRef(0);
  const createFolder = useCallback((folderName: string) => {
    setFileMap((currentFileMap) => {
      const newFileMap = { ...currentFileMap };

      // Create the new folder
      const newFolderId = `new-folder-${idCounter.current++}`;
      newFileMap[newFolderId] = {
        id: newFolderId,
        name: folderName,
        isDir: true,
        modDate: new Date(),
        parentId: currentFolderIdRef.current,
        childrenIds: [],
        childrenCount: 0,
      };

      // Update parent folder to reference the new folder.
      const parent = newFileMap[currentFolderIdRef.current];
      newFileMap[currentFolderIdRef.current] = {
        ...parent,
        childrenIds: [...parent.childrenIds!, newFolderId],
      };

      return newFileMap;
    });
  }, []);

  return {
    fileMap,
    currentFolderId,
    setCurrentFolderId,
    resetFileMap,
    deleteFiles,
    moveFiles,
    createFolder,
  };
};

export const useFiles = (
  fileMap: CustomFileMap,
  currentFolderId: string
): FileArray => {
  return useMemo(() => {
    const currentFolder = fileMap[currentFolderId];
    const childrenIds = currentFolder.childrenIds!;
    const files = childrenIds.map((fileId: string) => fileMap[fileId]);
    return files;
  }, [currentFolderId, fileMap]);
};

export const useFolderChain = (
  fileMap: CustomFileMap,
  currentFolderId: string
): FileArray => {
  return useMemo(() => {
    const currentFolder = fileMap[currentFolderId];

    const folderChain = [currentFolder];

    let parentId = currentFolder.parentId;
    while (parentId) {
      const parentFile = fileMap[parentId];
      if (parentFile) {
        folderChain.unshift(parentFile);
        parentId = parentFile.parentId;
      } else {
        break;
      }
    }

    return folderChain;
  }, [currentFolderId, fileMap]);
};

export const useFileActionHandler = (
  setCurrentFolderId: (folderId: string) => void,
  deleteFiles: (files: CustomFileData[]) => void,
  moveFiles: (
    files: FileData[],
    source: FileData,
    destination: FileData
  ) => void,
  createFolder: (folderName: string) => void
) => {
  return useCallback(
    (data: ChonkyFileActionData) => {
      if (data.id === ChonkyActions.OpenFiles.id) {
        const { targetFile, files } = data.payload;
        const fileToOpen = targetFile ?? files[0];
        if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
          setCurrentFolderId(fileToOpen.id);
          return;
        }
      } else if (data.id === ChonkyActions.DeleteFiles.id) {
        deleteFiles(data.state.selectedFilesForAction!);
      } else if (data.id === ChonkyActions.MoveFiles.id) {
        moveFiles(
          data.payload.files,
          data.payload.source!,
          data.payload.destination
        );
      } else if (data.id === ChonkyActions.CreateFolder.id) {
        const folderName = prompt("Provide the name for your new folder:");
        if (folderName) createFolder(folderName);
      }

      showActionNotification(data);
    },
    [createFolder, deleteFiles, moveFiles, setCurrentFolderId]
  );
};

export type VFSProps = Partial<FileBrowserProps>;

export const VFSBrowser: React.FC<VFSProps> = React.memo(function VFSBrowser(
  props
) {
  const {
    fileMap,
    currentFolderId,
    setCurrentFolderId,
    resetFileMap,
    deleteFiles,
    moveFiles,
    createFolder,
  } = useCustomFileMap();
  const files = useFiles(fileMap, currentFolderId);
  const folderChain = useFolderChain(fileMap, currentFolderId);
  const handleFileAction = useFileActionHandler(
    setCurrentFolderId,
    deleteFiles,
    moveFiles,
    createFolder
  );
  const fileActions = useMemo(
    () => [ChonkyActions.CreateFolder, ChonkyActions.DeleteFiles],
    []
  );
  const thumbnailGenerator = useCallback(
    (file: FileData) =>
      file.thumbnailUrl ? `https://chonky.io${file.thumbnailUrl}` : null,
    []
  );

  return (
    <>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={resetFileMap}
        style={{ marginBottom: 15 }}
      >
        Reset file map
      </Button>
      <div style={{ height: 400 }}>
        <FullFileBrowser
          files={files}
          folderChain={folderChain}
          fileActions={fileActions}
          onFileAction={handleFileAction}
          thumbnailGenerator={thumbnailGenerator}
          {...props}
        />
      </div>
    </>
  );
});
