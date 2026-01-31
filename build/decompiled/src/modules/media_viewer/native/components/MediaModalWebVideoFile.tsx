// modules/media_viewer/native/components/MediaModalWebVideoFile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var3.window;
    var4 = var4.GLOBAL_ENV;
    var8 = var4.WEBAPP_ENDPOINT;
    var3 = var3.HermesInternal;
    var4 = var3.concat;
    var3 = 'https:';
    var3 = var4.bind(var3)(var8);
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        var0 = global;
        var3 = var0.JSON;
        var2 = var3.stringify;
        var1 = arg0;
        var4 = var2.bind(var3)(var1);
        var1 = var0.HermesInternal;
        var3 = var1.concat;
        var2 = "\nfunction onReady() {\n  const player = window.player = document.createElement('video');\n  player.controls = false;\n  player.autoplay = false;\n  player.playsInline = true;\n  player.disablePictureInPicture = true;\n  const addEvent = (name, func) => {\n    player.addEventListener(name, (e) => {\n      window.ReactNativeWebView.postMessage(\n        JSON.stringify({type: name, value: func ? func() : undefined})\n      );\n    });\n  };\n  addEvent('error', () => player.error);\n  addEvent('canplay');\n  addEvent('ended');\n  addEvent('pause');\n  addEvent('play');\n  addEvent('stalled');\n  addEvent('durationchange', () => player.duration);\n  addEvent('timeupdate', () => player.currentTime);\n  addEvent('progress', () => {\n    const ranges = player.buffered;\n    let total = 0;\n    for (let i = 0; i < ranges.length; i++) {\n      total += (ranges.end(i) - ranges.start(i));\n    }\n    return total;\n  });\n  player.src = ";
        var1 = ";\n  document.body.appendChild(player);\n  player.load();\n  window.ReactNativeWebView.postMessage(JSON.stringify({type: 'loaded'}));\n}\nwindow.addEventListener('load', onReady);\n";
        var3 = var3.bind(var2)(var4, var1);
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        object-fit: contain;\n      }\n    </style>\n    <script>';
        var0 = '</script>\n  </head>\n  <body>\n  </body>\n</html>\n';
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var _closure1_slot7 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun70465: for (var _fun70465_ip = 0;;) switch (_fun70465_ip) {
            case 0:
                var7 = arg0;
                var17 = var7.visible;
                var _closure2_slot0 = var17;
                var9 = var7.style;
                var0 = var7.source;
                var3 = var7.controls;
                var _closure2_slot1 = var3;
                var5 = {
                    'visible': 0,
                    'style': 0,
                    'source': 0,
                    'controls': 0
                };
                var1 = null;
                var21 = var5;
                var20 = null;
                var4 = silentSetPrototypeOf(var21, var20);
                var6 = 0;
                var21 = {};
                var20 = var7;
                var19 = var5;
                var5 = copyDataProperties(var21, var20, var19);
                var4 = undefined;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var13 = _closure1_slot4;
                var10 = var13.useState;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = 3;
                var7 = var11[var12];
                var7 = var14.bind(var4)(var7);
                var7 = var7.PlayerState;
                var7 = var7.UNREADY;
                var13 = var10.bind(var13)(var7);
                var10 = _closure1_slot3;
                var7 = 2;
                var10 = var10.bind(var4)(var13, var7);
                var7 = var10[var6];
                var _closure2_slot2 = var7;
                var6 = 1;
                var6 = var10[var6];
                var _closure2_slot3 = var6;
                var10 = _closure1_slot1;
                var6 = 4;
                var13 = var11[var6];
                var13 = var10.bind(var4)(var13);
                var15 = var13.bind(var4)(var7);
                var _closure2_slot4 = var15;
                var6 = var11[var6];
                var6 = var10.bind(var4)(var6);
                var16 = var6.bind(var4)(var17);
                var _closure2_slot5 = var16;
                var6 = var1 == var3;
                var11 = undefined;
                if (var6) {
                    _fun70465_ip = 236;
                    continue _fun70465
                }
            case 217:
                var6 = var3.props;
                var10 = var1 == var6;
                var11 = undefined;
                if (var10) {
                    _fun70465_ip = 236;
                    continue _fun70465
                }
            case 231:
                var11 = var6.ref;
            case 236:
                _closure2_slot6 = var11;
                var10 = _closure1_slot4;
                var14 = var10.useEffect;
                var13 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.MediaViewerAnalytics;
                    var2 = var3.trackMessageEmbedsActionCompleted;
                    var1 = {
                        'platform': 'file',
                        'action': 'attempted'
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = new Array(0);
                var6 = var14.bind(var10)(var13, var6);
                var6 = var10.useCallback;
                var13 = var1 == var3;
                var1 = undefined;
                if (var13) {
                    _fun70465_ip = 285;
                    continue _fun70465
                }
            case 280:
                var1 = var3.props;
            case 285:
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function(arg0) { // Environment: var2
                    _fun70467: for (var _fun70467_ip = 0;;) switch (_fun70467_ip) {
                        case 0:
                            var0 = arg0;
                        case 3: // try_start_0
                            var1 = global;
                            var2 = var1.JSON;
                            var1 = var2.parse;
                            var0 = var1.bind(var2)(var0);
                        case 22: // try_end0
                            _fun70467_ip = 28;
                            continue _fun70467;
                        case 24: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var0 = {};
                        case 28:
                            var1 = var0.type;
                            var2 = var0.value;
                            var0 = 'loaded';
                            if (!(var0 !== var1)) {
                                _fun70467_ip = 1145;
                                continue _fun70467
                            }
                        case 49:
                            var0 = 'canplay';
                            if (!(var0 !== var1)) {
                                _fun70467_ip = 1014;
                                continue _fun70467
                            }
                        case 62:
                            var0 = 'error';
                            if (!(var0 !== var1)) {
                                _fun70467_ip = 917;
                                continue _fun70467
                            }
                        case 73:
                            var0 = 'ended';
                            if (!(var0 !== var1)) {
                                _fun70467_ip = 783;
                                continue _fun70467
                            }
                        case 84:
                            var0 = 'play';
                            if (!(var0 !== var1)) {
                                _fun70467_ip = 649;
                                continue _fun70467
                            }
                        case 95:
                            var0 = 'pause';
                            if (!(var0 !== var1)) {
                                _fun70467_ip = 515;
                                continue _fun70467
                            }
                        case 106:
                            var0 = 'stalled';
                            if (!(var0 !== var1)) {
                                _fun70467_ip = 381;
                                continue _fun70467
                            }
                        case 119:
                            var0 = 'durationchange';
                            if (!(var0 !== var1)) {
                                _fun70467_ip = 305;
                                continue _fun70467
                            }
                        case 132:
                            var0 = 'progress';
                            if (!(var0 !== var1)) {
                                _fun70467_ip = 229;
                                continue _fun70467
                            }
                        case 140:
                            var0 = 'timeupdate';
                            if (!(var0 === var1)) {
                                _fun70467_ip = 1194;
                                continue _fun70467
                            }
                        case 153:
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun70467_ip = 1194;
                                continue _fun70467
                            }
                        case 162:
                            var0 = _closure2_slot1;
                            var0 = var4 == var0;
                            var1 = undefined;
                            if (var0) {
                                _fun70467_ip = 194;
                                continue _fun70467
                            }
                        case 178:
                            var3 = _closure2_slot1;
                            var3 = var3.props;
                            var0 = var4 == var3;
                            var1 = var3;
                        case 194:
                            if (var0) {
                                _fun70467_ip = 207;
                                continue _fun70467
                            }
                        case 197:
                            var3 = var1.onCurrentSecond;
                            var0 = var4 == var3;
                        case 207:
                            if (var0) {
                                _fun70467_ip = 1194;
                                continue _fun70467
                            }
                        case 213:
                            var0 = var1.onCurrentSecond;
                            var0 = var0.bind(var1)(var2);
                            _fun70467_ip = 1194;
                            continue _fun70467;
                        case 229:
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun70467_ip = 1194;
                                continue _fun70467
                            }
                        case 238:
                            var0 = _closure2_slot1;
                            var0 = var4 == var0;
                            var1 = undefined;
                            if (var0) {
                                _fun70467_ip = 270;
                                continue _fun70467
                            }
                        case 254:
                            var3 = _closure2_slot1;
                            var3 = var3.props;
                            var0 = var4 == var3;
                            var1 = var3;
                        case 270:
                            if (var0) {
                                _fun70467_ip = 283;
                                continue _fun70467
                            }
                        case 273:
                            var3 = var1.onDownloadProgress;
                            var0 = var4 == var3;
                        case 283:
                            if (var0) {
                                _fun70467_ip = 1194;
                                continue _fun70467
                            }
                        case 289:
                            var0 = var1.onDownloadProgress;
                            var0 = var0.bind(var1)(var2);
                            _fun70467_ip = 1194;
                            continue _fun70467;
                        case 305:
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun70467_ip = 1194;
                                continue _fun70467
                            }
                        case 314:
                            var0 = _closure2_slot1;
                            var0 = var4 == var0;
                            var1 = undefined;
                            if (var0) {
                                _fun70467_ip = 346;
                                continue _fun70467
                            }
                        case 330:
                            var3 = _closure2_slot1;
                            var3 = var3.props;
                            var0 = var4 == var3;
                            var1 = var3;
                        case 346:
                            if (var0) {
                                _fun70467_ip = 359;
                                continue _fun70467
                            }
                        case 349:
                            var3 = var1.onDuration;
                            var0 = var4 == var3;
                        case 359:
                            if (var0) {
                                _fun70467_ip = 1194;
                                continue _fun70467
                            }
                        case 365:
                            var0 = var1.onDuration;
                            var0 = var0.bind(var1)(var2);
                            _fun70467_ip = 1194;
                            continue _fun70467;
                        case 381:
                            var1 = _closure2_slot1;
                            var5 = null;
                            var1 = var5 == var1;
                            var2 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun70467_ip = 417;
                                continue _fun70467
                            }
                        case 401:
                            var3 = _closure2_slot1;
                            var3 = var3.props;
                            var1 = var5 == var3;
                            var4 = var3;
                        case 417:
                            if (var1) {
                                _fun70467_ip = 466;
                                continue _fun70467
                            }
                        case 420:
                            var3 = var4.onPlayerStateChange;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 3;
                            var1 = var6[var1];
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.PlayerState;
                            var1 = var1.BUFFERING;
                            var1 = var3.bind(var4)(var1);
                        case 466:
                            var1 = _closure2_slot3;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 3;
                            var0 = var4[var0];
                            var0 = var3.bind(var2)(var0);
                            var0 = var0.PlayerState;
                            var0 = var0.BUFFERING;
                            var0 = var1.bind(var2)(var0);
                            _fun70467_ip = 1194;
                            continue _fun70467;
                        case 515:
                            var1 = _closure2_slot1;
                            var5 = null;
                            var1 = var5 == var1;
                            var2 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun70467_ip = 551;
                                continue _fun70467
                            }
                        case 535:
                            var3 = _closure2_slot1;
                            var3 = var3.props;
                            var1 = var5 == var3;
                            var4 = var3;
                        case 551:
                            if (var1) {
                                _fun70467_ip = 600;
                                continue _fun70467
                            }
                        case 554:
                            var3 = var4.onPlayerStateChange;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 3;
                            var1 = var6[var1];
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.PlayerState;
                            var1 = var1.PAUSED;
                            var1 = var3.bind(var4)(var1);
                        case 600:
                            var1 = _closure2_slot3;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 3;
                            var0 = var4[var0];
                            var0 = var3.bind(var2)(var0);
                            var0 = var0.PlayerState;
                            var0 = var0.PAUSED;
                            var0 = var1.bind(var2)(var0);
                            _fun70467_ip = 1194;
                            continue _fun70467;
                        case 649:
                            var1 = _closure2_slot1;
                            var5 = null;
                            var1 = var5 == var1;
                            var2 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun70467_ip = 685;
                                continue _fun70467
                            }
                        case 669:
                            var3 = _closure2_slot1;
                            var3 = var3.props;
                            var1 = var5 == var3;
                            var4 = var3;
                        case 685:
                            if (var1) {
                                _fun70467_ip = 734;
                                continue _fun70467
                            }
                        case 688:
                            var3 = var4.onPlayerStateChange;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 3;
                            var1 = var6[var1];
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.PlayerState;
                            var1 = var1.PLAYING;
                            var1 = var3.bind(var4)(var1);
                        case 734:
                            var1 = _closure2_slot3;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 3;
                            var0 = var4[var0];
                            var0 = var3.bind(var2)(var0);
                            var0 = var0.PlayerState;
                            var0 = var0.PLAYING;
                            var0 = var1.bind(var2)(var0);
                            _fun70467_ip = 1194;
                            continue _fun70467;
                        case 783:
                            var1 = _closure2_slot1;
                            var5 = null;
                            var1 = var5 == var1;
                            var2 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun70467_ip = 819;
                                continue _fun70467
                            }
                        case 803:
                            var3 = _closure2_slot1;
                            var3 = var3.props;
                            var1 = var5 == var3;
                            var4 = var3;
                        case 819:
                            if (var1) {
                                _fun70467_ip = 868;
                                continue _fun70467
                            }
                        case 822:
                            var3 = var4.onPlayerStateChange;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 3;
                            var1 = var6[var1];
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.PlayerState;
                            var1 = var1.ENDED;
                            var1 = var3.bind(var4)(var1);
                        case 868:
                            var1 = _closure2_slot3;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 3;
                            var0 = var4[var0];
                            var0 = var3.bind(var2)(var0);
                            var0 = var0.PlayerState;
                            var0 = var0.ENDED;
                            var0 = var1.bind(var2)(var0);
                            _fun70467_ip = 1194;
                            continue _fun70467;
                        case 917:
                            var4 = _closure2_slot3;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 3;
                            var0 = var3[var0];
                            var1 = undefined;
                            var0 = var2.bind(var1)(var0);
                            var0 = var0.PlayerState;
                            var0 = var0.ERRORED;
                            var0 = var4.bind(var1)(var0);
                            var0 = 5;
                            var0 = var3[var0];
                            var0 = var2.bind(var1)(var0);
                            var2 = var0.MediaViewerAnalytics;
                            var1 = var2.trackMessageEmbedsActionCompleted;
                            var0 = {
                                'platform': 'file',
                                'action': 'errored',
                                'error': 'unknown'
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun70467_ip = 1194;
                            continue _fun70467;
                        case 1014:
                            var1 = _closure2_slot1;
                            var5 = null;
                            var1 = var5 == var1;
                            var2 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun70467_ip = 1050;
                                continue _fun70467
                            }
                        case 1034:
                            var3 = _closure2_slot1;
                            var3 = var3.props;
                            var1 = var5 == var3;
                            var4 = var3;
                        case 1050:
                            if (var1) {
                                _fun70467_ip = 1099;
                                continue _fun70467
                            }
                        case 1053:
                            var3 = var4.onPlayerStateChange;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 3;
                            var1 = var6[var1];
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.PlayerState;
                            var1 = var1.VIDEO_CUED;
                            var1 = var3.bind(var4)(var1);
                        case 1099:
                            var1 = _closure2_slot3;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 3;
                            var0 = var4[var0];
                            var0 = var3.bind(var2)(var0);
                            var0 = var0.PlayerState;
                            var0 = var0.VIDEO_CUED;
                            var0 = var1.bind(var2)(var0);
                            _fun70467_ip = 1194;
                            continue _fun70467;
                        case 1145:
                            var2 = _closure2_slot3;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var0.PlayerState;
                            var0 = var0.READY;
                            var0 = var2.bind(var1)(var0);
                        case 1194:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var6.bind(var10)(var1, var3);
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 6;
                var3 = var1[var3];
                var13 = var10.bind(var4)(var3);
                var10 = var13.useMediaPlayerMutedStore;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.isMuted;
                    return var0;
                };
                var14 = var10.bind(var13)(var3);
                _closure2_slot7 = var14;
                var13 = _closure1_slot4;
                var10 = var13.useEffect;
                var3 = new Array(6);
                var3[0] = var11;
                var3[1] = var17;
                var3[2] = var16;
                var3[3] = var15;
                var3[4] = var7;
                var3[5] = var14;
                var2 = function() { // Environment: var2
                    _fun70469: for (var _fun70469_ip = 0;;) switch (_fun70469_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var3 = null;
                            var4 = var3 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun70469_ip = 29;
                                continue _fun70469
                            }
                        case 20:
                            var4 = _closure2_slot6;
                            var2 = var4.current;
                        case 29:
                            var2 = var3 != var2;
                            if (!var2) {
                                _fun70469_ip = 79;
                                continue _fun70469
                            }
                        case 36:
                            var4 = _closure2_slot2;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 3;
                            var3 = var6[var3];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.PlayerState;
                            var3 = var3.UNREADY;
                            var2 = var4 !== var3;
                        case 79:
                            if (!var2) {
                                _fun70469_ip = 368;
                                continue _fun70469
                            }
                        case 85:
                            var2 = _closure2_slot6;
                            var4 = var2.current;
                            var3 = var4.injectJavaScript;
                            var2 = global;
                            var7 = var2.JSON;
                            var6 = var7.stringify;
                            var5 = _closure2_slot7;
                            var7 = var6.bind(var7)(var5);
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var5 = 'window.player.muted = ';
                            var2 = '; true;';
                            var2 = var6.bind(var5)(var7, var2);
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun70469_ip = 207;
                                continue _fun70469
                            }
                        case 164:
                            var4 = _closure2_slot4;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 3;
                            var3 = var6[var3];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.PlayerState;
                            var3 = var3.UNREADY;
                            var2 = var4 === var3;
                        case 207:
                            if (!var2) {
                                _fun70469_ip = 253;
                                continue _fun70469
                            }
                        case 210:
                            var4 = _closure2_slot2;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 3;
                            var3 = var6[var3];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.PlayerState;
                            var3 = var3.READY;
                            var2 = var4 === var3;
                        case 253:
                            if (!var2) {
                                _fun70469_ip = 282;
                                continue _fun70469
                            }
                        case 256:
                            var2 = _closure2_slot6;
                            var4 = var2.current;
                            var3 = var4.injectJavaScript;
                            var2 = 'window.player.play();  true;';
                            var2 = var3.bind(var4)(var2);
                        case 282:
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun70469_ip = 296;
                                continue _fun70469
                            }
                        case 289:
                            var3 = _closure2_slot5;
                            var2 = !var3;
                        case 296:
                            if (!var2) {
                                _fun70469_ip = 325;
                                continue _fun70469
                            }
                        case 299:
                            var2 = _closure2_slot6;
                            var4 = var2.current;
                            var3 = var4.injectJavaScript;
                            var2 = 'window.player.play();  true;';
                            var2 = var3.bind(var4)(var2);
                        case 325:
                            var2 = _closure2_slot0;
                            var2 = !var2;
                            if (!var2) {
                                _fun70469_ip = 339;
                                continue _fun70469
                            }
                        case 335:
                            var2 = _closure2_slot5;
                        case 339:
                            if (!var2) {
                                _fun70469_ip = 368;
                                continue _fun70469
                            }
                        case 342:
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var2 = var3.injectJavaScript;
                            var1 = 'window.player.pause(); true;';
                            var1 = var2.bind(var3)(var1);
                        case 368:
                            return var0;
                    }
                };
                var2 = var10.bind(var13)(var2, var3);
                var3 = _closure1_slot7;
                var2 = var0.uri;
                var10 = var3.bind(var4)(var2);
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var1 = var1[var12];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.ref = var11;
                var1.style = var9;
                var9 = {};
                var9.html = var10;
                var8 = _closure1_slot6;
                var9.baseUrl = var8;
                var1.source = var9;
                var1.baseURL = var8;
                var1.playerState = var7;
                var1.onDataReceived = var6;
                var6 = true;
                var1.javaScriptEnabled = var6;
                var1.javaScriptCanOpenWindowsAutomatically = var6;
                var21 = var1;
                var20 = var5;
                var5 = copyDataProperties(var21, var20);
                var0 = var0.uri;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaModalWebVideoFile.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function() {
        var1 = _closure1_slot4;
        var0 = var1.createRef;
        var3 = var0.bind(var1)();
        var _closure2_slot3 = var3;
        var0 = 0;
        var _closure2_slot4 = var0;
        var _closure2_slot5 = var0;
        var _closure2_slot6 = var0;
        var0 = function() {
            _fun70471: for (var _fun70471_ip = 0;;) switch (_fun70471_ip) {
                case 0:
                    var2 = _closure2_slot5;
                    var1 = 0;
                    if (!(var2 > var1)) {
                        _fun70471_ip = 46;
                        continue _fun70471
                    }
                case 13:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70471_ip = 46;
                        continue _fun70471
                    }
                case 23:
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot5;
                    var1 = var1 / var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 46:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot7 = var0;
        var0 = {};
        var1 = function arg0() {
            _fun70472: for (var _fun70472_ip = 0;;) switch (_fun70472_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    var2 = var0.current;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun70472_ip = 80;
                        continue _fun70472
                    }
                case 18:
                    var1 = var2.injectJavaScript;
                    var0 = global;
                    var5 = var0.JSON;
                    var4 = var5.stringify;
                    var3 = arg0;
                    var5 = var4.bind(var5)(var3);
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var3 = 'window.player.currentTime = ';
                    var0 = '; true;';
                    var0 = var4.bind(var3)(var5, var0);
                    var0 = var1.bind(var2)(var0);
                case 80:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.seek = var1;
        var1 = function arg0() {
            _fun70473: for (var _fun70473_ip = 0;;) switch (_fun70473_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    var2 = var0.current;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun70473_ip = 74;
                        continue _fun70473
                    }
                case 18:
                    var1 = var2.injectJavaScript;
                    var5 = 'play';
                    var0 = arg0;
                    if (!var0) {
                        _fun70473_ip = 38;
                        continue _fun70473
                    }
                case 34:
                    var5 = 'pause';
                case 38:
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var3 = 'window.player.';
                    var0 = '(); true;';
                    var0 = var4.bind(var3)(var5, var0);
                    var0 = var1.bind(var2)(var0);
                case 74:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.pause = var1;
        var1 = function arg0, arg1, arg2() {
            var0 = arg0;
            var _closure2_slot0 = var0;
            var0 = arg1;
            var _closure2_slot1 = var0;
            var0 = arg2;
            var _closure2_slot2 = var0;
            var3 = _closure1_slot4;
            var2 = var3.useLayoutEffect;
            var1 = function() { // Environment: var0
                _fun70475: for (var _fun70475_ip = 0;;) switch (_fun70475_ip) {
                    case 0:
                        var2 = _closure2_slot0;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun70475_ip = 33;
                            continue _fun70475
                        }
                    case 13:
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot4;
                        var1 = _closure2_slot5;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                    case 33:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.useSubscribe = var1;
        var1 = {};
        var1.ref = var3;
        var3 = function arg0() {
            _fun70476: for (var _fun70476_ip = 0;;) switch (_fun70476_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70476_ip = 102;
                        continue _fun70476
                    }
                case 16:
                    var2 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 3;
                    var0 = var0[var6];
                    var1 = undefined;
                    var0 = var5.bind(var1)(var0);
                    var0 = var0.PlayerState;
                    var0 = var0.PAUSED;
                    var0 = var4 === var0;
                    if (var0) {
                        _fun70476_ip = 97;
                        continue _fun70476
                    }
                case 64:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.ENDED;
                    var0 = var4 === var3;
                case 97:
                    var0 = var2.bind(var1)(var0);
                case 102:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.onPlayerStateChange = var3;
        var3 = function arg0() {
            _fun70477: for (var _fun70477_ip = 0;;) switch (_fun70477_ip) {
                case 0:
                    var1 = arg0;
                    _closure2_slot4 = var1;
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70477_ip = 40;
                        continue _fun70477
                    }
                case 20:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.onCurrentSecond = var3;
        var3 = function arg0() {
            _fun70478: for (var _fun70478_ip = 0;;) switch (_fun70478_ip) {
                case 0:
                    var1 = arg0;
                    _closure2_slot5 = var1;
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70478_ip = 40;
                        continue _fun70478
                    }
                case 20:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                case 40:
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var1.onDuration = var3;
        var2 = function arg0() {
            var1 = arg0;
            _closure2_slot6 = var1;
            var1 = _closure2_slot7;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1.onDownloadProgress = var2;
        var0.props = var1;
        return var0;
    };
    var2.createWebFileVideoControls = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 8819, 5268, 8804, 8809, 2]);