// modules/media_viewer/native/components/MediaModalYoutube.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var7 = var5[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot4 = var6;
    var7 = 2;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.jsx;
    var _closure1_slot5 = var7;
    var7 = var3.window;
    var7 = var7.GLOBAL_ENV;
    var8 = var7.WEBAPP_ENDPOINT;
    var3 = var3.HermesInternal;
    var7 = var3.concat;
    var3 = 'https:';
    var3 = var7.bind(var3)(var8);
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        var2 = _closure1_slot8;
        var1 = undefined;
        var0 = arg0;
        var3 = var2.bind(var1)(var0);
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>';
        var0 = '</script>\n  </head>\n  <body>\n    <div id="player"></div>\n  </body>\n</html>\n';
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        _fun76547: for (var _fun76547_ip = 0;;) switch (_fun76547_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.start;
                var2 = null;
                var1 = var2 == var1;
                var8 = '';
                var7 = var8;
                if (var1) {
                    _fun76547_ip = 58;
                    continue _fun76547
                }
            case 24:
                var5 = var0.start;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = "'start': ";
                var1 = ',';
                var7 = var4.bind(var3)(var5, var1);
            case 58:
                var1 = var0.clip;
                var1 = var2 == var1;
                var6 = var8;
                if (var1) {
                    _fun76547_ip = 111;
                    continue _fun76547
                }
            case 74:
                var5 = var0.clip;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = "'clip': '";
                var1 = "',";
                var6 = var4.bind(var3)(var5, var1);
            case 111:
                var1 = var0.clipt;
                var1 = var2 == var1;
                if (var1) {
                    _fun76547_ip = 161;
                    continue _fun76547
                }
            case 124:
                var4 = var0.clipt;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = "'clipt': '";
                var1 = "',";
                var8 = var3.bind(var2)(var4, var1);
            case 161:
                var16 = var0.videoId;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var17 = '\nconst tag = document.createElement(\'script\');\ntag.setAttribute(\'src\', "https://www.youtube.com/iframe_api");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player(\'player\', {\n    height:     \'100%\',\n    width:      \'100%\',\n    videoId:    \'';
                var15 = "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      ";
                var1 = '\n      ';
                var9 = "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n";
                var14 = var8;
                var13 = var1;
                var12 = var6;
                var11 = var1;
                var10 = var7;
                var0 = var17[var4](var16, var15, var14, var13, var12, var11, var10, var9, var8);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun76548: for (var _fun76548_ip = 0;;) switch (_fun76548_ip) {
            case 0:
                var4 = arg0;
                var19 = var4.visible;
                var _closure2_slot0 = var19;
                var11 = var4.style;
                var3 = var4.source;
                var2 = {
                    'visible': 0,
                    'style': 0,
                    'source': 0
                };
                var0 = null;
                var23 = var2;
                var22 = null;
                var1 = silentSetPrototypeOf(var23, var22);
                var6 = 0;
                var23 = {};
                var22 = var4;
                var21 = var2;
                var2 = copyDataProperties(var23, var22, var21);
                var16 = _closure1_slot4;
                var10 = var16.useState;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var13 = 3;
                var9 = var5[var13];
                var4 = undefined;
                var9 = var7.bind(var4)(var9);
                var9 = var9.PlayerState;
                var9 = var9.UNREADY;
                var9 = var10.bind(var16)(var9);
                var15 = _closure1_slot3;
                var14 = 2;
                var9 = var15.bind(var4)(var9, var14);
                var10 = var9[var6];
                var _closure2_slot1 = var10;
                var12 = 1;
                var9 = var9[var12];
                var _closure2_slot2 = var9;
                var9 = var16.useState;
                var9 = var9.bind(var16)(var4);
                var9 = var15.bind(var4)(var9, var14);
                var6 = var9[var6];
                var9 = var9[var12];
                var _closure2_slot3 = var9;
                var12 = _closure1_slot1;
                var9 = 4;
                var14 = var5[var9];
                var14 = var12.bind(var4)(var14);
                var17 = var14.bind(var4)(var10);
                var _closure2_slot4 = var17;
                var9 = var5[var9];
                var9 = var12.bind(var4)(var9);
                var18 = var9.bind(var4)(var19);
                var _closure2_slot5 = var18;
                var9 = var16.useRef;
                var12 = var9.bind(var16)(var0);
                var _closure2_slot6 = var12;
                var15 = var16.useEffect;
                var14 = function() { // Environment: var8
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.MediaViewerAnalytics;
                    var2 = var3.trackMessageEmbedsActionCompleted;
                    var1 = {
                        'platform': 'youtube',
                        'action': 'attempted'
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9 = new Array(0);
                var9 = var15.bind(var16)(var14, var9);
                var15 = var16.useCallback;
                var14 = function(arg0) { // Environment: var8
                    _fun76550: for (var _fun76550_ip = 0;;) switch (_fun76550_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.JSON;
                            var1 = var2.parse;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var2 = var0.type;
                            var1 = var0.value;
                            var0 = 'onReady';
                            if (!(var0 !== var2)) {
                                _fun76550_ip = 517;
                                continue _fun76550
                            }
                        case 43:
                            var0 = 'onError';
                            if (!(var0 !== var2)) {
                                _fun76550_ip = 297;
                                continue _fun76550
                            }
                        case 54:
                            var0 = 'onStateChange';
                            if (!(var0 === var2)) {
                                _fun76550_ip = 615;
                                continue _fun76550
                            }
                        case 65:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var6 = 3;
                            var7 = var2[var6];
                            var3 = undefined;
                            var7 = var5.bind(var3)(var7);
                            var7 = var7.PlayerState;
                            var7 = var7.UNSTARTED;
                            var0['-1'] = var7;
                            var7 = var2[var6];
                            var7 = var5.bind(var3)(var7);
                            var7 = var7.PlayerState;
                            var7 = var7.ENDED;
                            var0[0] = var7;
                            var7 = var2[var6];
                            var7 = var5.bind(var3)(var7);
                            var7 = var7.PlayerState;
                            var7 = var7.PLAYING;
                            var0[1] = var7;
                            var7 = var2[var6];
                            var7 = var5.bind(var3)(var7);
                            var7 = var7.PlayerState;
                            var7 = var7.PAUSED;
                            var0[2] = var7;
                            var7 = var2[var6];
                            var7 = var5.bind(var3)(var7);
                            var7 = var7.PlayerState;
                            var7 = var7.BUFFERING;
                            var0[3] = var7;
                            var2 = var2[var6];
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.PlayerState;
                            var2 = var2.VIDEO_CUED;
                            var0[5] = var2;
                            var2 = var0[var1];
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun76550_ip = 274;
                                continue _fun76550
                            }
                        case 247:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var6];
                            var4 = var5.bind(var3)(var4);
                            var4 = var4.PlayerState;
                            var0 = var2 in var4;
                        case 274:
                            if (!var0) {
                                _fun76550_ip = 615;
                                continue _fun76550
                            }
                        case 280:
                            var0 = _closure2_slot2;
                            var0 = var0.bind(var3)(var2);
                            _fun76550_ip = 615;
                            continue _fun76550;
                        case 297:
                            var3 = 'number';
                            var0 = typeof var1;
                            var2 = var1;
                            if (!(var3 === var0)) {
                                _fun76550_ip = 320;
                                continue _fun76550
                            }
                        case 311:
                            var0 = var1.toString;
                            var2 = var0.bind(var1)();
                        case 320:
                            var0 = '2';
                            if (!(var0 !== var2)) {
                                _fun76550_ip = 404;
                                continue _fun76550
                            }
                        case 330:
                            var0 = '5';
                            if (!(var0 !== var2)) {
                                _fun76550_ip = 396;
                                continue _fun76550
                            }
                        case 340:
                            var0 = '100';
                            if (!(var0 !== var2)) {
                                _fun76550_ip = 388;
                                continue _fun76550
                            }
                        case 350:
                            var3 = 'embed_not_allowed';
                            var0 = '101';
                            var4 = var3;
                            if (!(var0 !== var2)) {
                                _fun76550_ip = 410;
                                continue _fun76550
                            }
                        case 369:
                            var0 = '150';
                            var4 = var3;
                            if (!(var0 !== var2)) {
                                _fun76550_ip = 410;
                                continue _fun76550
                            }
                        case 382:
                            var4 = 'unknown';
                            _fun76550_ip = 410;
                            continue _fun76550;
                        case 388:
                            var4 = 'video_not_found';
                            _fun76550_ip = 410;
                            continue _fun76550;
                        case 396:
                            var4 = 'html5_error';
                            _fun76550_ip = 410;
                            continue _fun76550;
                        case 404:
                            var4 = 'invalid_parameter';
                        case 410:
                            var7 = _closure2_slot2;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 3;
                            var6 = var5[var2];
                            var2 = undefined;
                            var6 = var3.bind(var2)(var6);
                            var6 = var6.PlayerState;
                            var6 = var6.ERRORED;
                            var6 = var7.bind(var2)(var6);
                            var0 = _closure2_slot3;
                            var0 = var0.bind(var2)(var4);
                            var0 = 5;
                            var0 = var5[var0];
                            var0 = var3.bind(var2)(var0);
                            var3 = var0.MediaViewerAnalytics;
                            var2 = var3.trackMessageEmbedsActionCompleted;
                            var0 = {
                                'platform': 'youtube',
                                'action': 'errored'
                            };
                            var0.error = var4;
                            var0 = var2.bind(var3)(var0);
                            _fun76550_ip = 615;
                            continue _fun76550;
                        case 517:
                            var2 = _closure2_slot2;
                            var0 = '-1';
                            if (!(var0 !== var1)) {
                                _fun76550_ip = 571;
                                continue _fun76550
                            }
                        case 532:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var1);
                            var0 = var0.PlayerState;
                            var1 = var0.READY;
                            _fun76550_ip = 608;
                            continue _fun76550;
                        case 571:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 3;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.PlayerState;
                            var1 = var0.ERRORED;
                        case 608:
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 615:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = new Array(0);
                var9 = var15.bind(var16)(var14, var9);
                var15 = var16.useEffect;
                var14 = new Array(5);
                var14[0] = var12;
                var14[1] = var19;
                var14[2] = var18;
                var14[3] = var17;
                var14[4] = var10;
                var8 = function() { // Environment: var8
                    _fun76551: for (var _fun76551_ip = 0;;) switch (_fun76551_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var2 = var1.current;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun76551_ip = 66;
                                continue _fun76551
                            }
                        case 21:
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 3;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.PlayerState;
                            var2 = var2.UNREADY;
                            var1 = var3 !== var2;
                        case 66:
                            if (!var1) {
                                _fun76551_ip = 287;
                                continue _fun76551
                            }
                        case 72:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun76551_ip = 124;
                                continue _fun76551
                            }
                        case 79:
                            var3 = _closure2_slot4;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 3;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.PlayerState;
                            var2 = var2.UNREADY;
                            var1 = var3 === var2;
                        case 124:
                            if (!var1) {
                                _fun76551_ip = 172;
                                continue _fun76551
                            }
                        case 127:
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 3;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.PlayerState;
                            var2 = var2.READY;
                            var1 = var3 === var2;
                        case 172:
                            if (!var1) {
                                _fun76551_ip = 201;
                                continue _fun76551
                            }
                        case 175:
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var2 = var3.injectJavaScript;
                            var1 = 'window.player.playVideo();  true;';
                            var1 = var2.bind(var3)(var1);
                        case 201:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun76551_ip = 215;
                                continue _fun76551
                            }
                        case 208:
                            var2 = _closure2_slot5;
                            var1 = !var2;
                        case 215:
                            if (!var1) {
                                _fun76551_ip = 244;
                                continue _fun76551
                            }
                        case 218:
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var2 = var3.injectJavaScript;
                            var1 = 'window.player.playVideo();  true;';
                            var1 = var2.bind(var3)(var1);
                        case 244:
                            var1 = _closure2_slot0;
                            var1 = !var1;
                            if (!var1) {
                                _fun76551_ip = 258;
                                continue _fun76551
                            }
                        case 254:
                            var1 = _closure2_slot5;
                        case 258:
                            if (!var1) {
                                _fun76551_ip = 287;
                                continue _fun76551
                            }
                        case 261:
                            var0 = _closure2_slot6;
                            var2 = var0.current;
                            var1 = var2.injectJavaScript;
                            var0 = 'window.player.pauseVideo(); true;';
                            var0 = var1.bind(var2)(var0);
                        case 287:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var15.bind(var16)(var8, var14);
                var14 = 6;
                var5 = var5[var14];
                var8 = var7.bind(var4)(var5);
                var7 = var8.getYoutubeVideoIdFromURI;
                var5 = var3.uri;
                var5 = var7.bind(var8)(var5);
                if (!(var0 == var5)) {
                    _fun76548_ip = 383;
                    continue _fun76548
                }
            case 350:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var14];
                var8 = var8.bind(var4)(var7);
                var7 = var8.getYoutubeClipVideoIdFromURI;
                var3 = var3.uri;
                var5 = var7.bind(var8)(var3);
            case 383:
                if (!(var0 != var5)) {
                    _fun76548_ip = 654;
                    continue _fun76548
                }
            case 390:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var13];
                var3 = var7.bind(var4)(var3);
                var3 = var3.PlayerState;
                var3 = var3.ERRORED;
                if (!(var10 === var3)) {
                    _fun76548_ip = 436;
                    continue _fun76548
                }
            case 423:
                var3 = 'embed_not_allowed';
                if (!(var3 !== var6)) {
                    _fun76548_ip = 609;
                    continue _fun76548
                }
            case 436:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 8;
                var3 = var7[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.isAndroid;
                var3 = var3.bind(var6)();
                if (var3) {
                    _fun76548_ip = 473;
                    continue _fun76548
                }
            case 469:
                var8 = {};
                _fun76548_ip = 487;
                continue _fun76548;
            case 473:
                var8 = {
                    'nestedScrollEnabled': true,
                    'overScrollMode': 'never',
                    'domStorageEnabled': true,
                    'mixedContentMode': 'compatibility'
                };
            case 487:
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var13];
                var6 = var6.bind(var4)(var3);
                var3 = {};
                var3.ref = var12;
                var3.style = var11;
                var12 = {};
                var11 = _closure1_slot7;
                var11 = var11.bind(var4)(var5);
                var12.html = var11;
                var11 = _closure1_slot6;
                var12.baseUrl = var11;
                var3.source = var12;
                var3.baseURL = var11;
                var3.playerState = var10;
                var3.onDataReceived = var9;
                var9 = true;
                var3.javaScriptEnabled = var9;
                var3.javaScriptCanOpenWindowsAutomatically = var9;
                var23 = var3;
                var22 = var8;
                var8 = copyDataProperties(var23, var22);
                var23 = var3;
                var22 = var2;
                var2 = copyDataProperties(var23, var22);
                var2 = var5.videoId;
                var2 = var7.bind(var4)(var6, var3, var2);
                return var2;
            case 609:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var5 = var5.videoId;
                var1.videoId = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 654:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaModalYoutube.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 8872, 5306, 8857, 8856, 9751, 478, 2]);