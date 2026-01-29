// modules/media_viewer/native/components/MediaModalTiktok.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: getReadablePlayerError, environment: var1
        _fun70369: for (var _fun70369_ip = 0;;) switch (_fun70369_ip) {
            case 0:
                var1 = arg0;
                var0 = '1';
                if (!(var0 !== var1)) {
                    _fun70369_ip = 73;
                    continue _fun70369
                }
            case 13:
                var0 = '2';
                if (!(var0 !== var1)) {
                    _fun70369_ip = 65;
                    continue _fun70369
                }
            case 23:
                var0 = '3';
                if (!(var0 !== var1)) {
                    _fun70369_ip = 57;
                    continue _fun70369
                }
            case 33:
                var0 = '4';
                if (!(var0 !== var1)) {
                    _fun70369_ip = 49;
                    continue _fun70369
                }
            case 43:
                var0 = 'UNKNOWN';
                return var0;
            case 49:
                var0 = 'MEDIA_ERR_SRC_NOT_SUPPORTED';
                return var0;
            case 57:
                var0 = 'MEDIA_ERR_DECODE';
                return var0;
            case 65:
                var0 = 'MEDIA_ERR_NETWORK';
                return var0;
            case 73:
                var0 = 'MEDIA_ERR_ABORTED';
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: postMessage, environment: var1
        _fun70370: for (var _fun70370_ip = 0;;) switch (_fun70370_ip) {
            case 0:
                var0 = global;
                var3 = var0.JSON;
                var2 = var3.stringify;
                var1 = {};
                var4 = true;
                var1['x-tiktok-player'] = var4;
                var6 = arg1;
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var5 = var2.bind(var3)(var1);
                var1 = arg0;
                var2 = var1.current;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun70370_ip = 94;
                    continue _fun70370
                }
            case 54:
                var1 = var2.injectJavaScript;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '\n    window.postMessage(';
                var0 = ", '*')\n  ";
                var0 = var4.bind(var3)(var5, var0);
                var0 = var1.bind(var2)(var0);
            case 94:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var4 = var6[var3];
    var3 = arg3;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {
        'controls': 0,
        'enable_music_info': 0,
        'enable_timestamp': 0,
        'utm_source': 'discord.gg'
    };
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 3;
    var8 = var6[var4];
    var8 = var5.bind(var0)(var8);
    var8 = var8.PlayerState;
    var8 = var8.UNSTARTED;
    var3['-1'] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var0)(var8);
    var8 = var8.PlayerState;
    var8 = var8.ENDED;
    var3[0] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var0)(var8);
    var8 = var8.PlayerState;
    var8 = var8.PLAYING;
    var3[1] = var8;
    var8 = var6[var4];
    var8 = var5.bind(var0)(var8);
    var8 = var8.PlayerState;
    var8 = var8.PAUSED;
    var3[2] = var8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PlayerState;
    var4 = var4.BUFFERING;
    var3[3] = var4;
    var _closure1_slot7 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun70371: for (var _fun70371_ip = 0;;) switch (_fun70371_ip) {
            case 0:
                var4 = arg0;
                var17 = var4.visible;
                var _closure2_slot0 = var17;
                var7 = var4.style;
                var8 = var4.source;
                var _closure2_slot1 = var8;
                var6 = var4.controls;
                var _closure2_slot2 = var6;
                var3 = {
                    'visible': 0,
                    'style': 0,
                    'source': 0,
                    'controls': 0
                };
                var0 = null;
                var21 = var3;
                var20 = null;
                var1 = silentSetPrototypeOf(var21, var20);
                var5 = 0;
                var21 = {};
                var20 = var4;
                var19 = var3;
                var4 = copyDataProperties(var21, var20, var19);
                var3 = undefined;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var13 = _closure1_slot4;
                var10 = var13.useState;
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var11 = 3;
                var9 = var12[var11];
                var9 = var14.bind(var3)(var9);
                var9 = var9.PlayerState;
                var9 = var9.UNREADY;
                var13 = var10.bind(var13)(var9);
                var10 = _closure1_slot3;
                var9 = 2;
                var10 = var10.bind(var3)(var13, var9);
                var5 = var10[var5];
                var _closure2_slot3 = var5;
                var9 = 1;
                var9 = var10[var9];
                var _closure2_slot4 = var9;
                var10 = _closure1_slot1;
                var9 = 4;
                var13 = var12[var9];
                var13 = var10.bind(var3)(var13);
                var15 = var13.bind(var3)(var5);
                var _closure2_slot5 = var15;
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var16 = var9.bind(var3)(var17);
                var _closure2_slot6 = var16;
                var9 = var0 == var6;
                var10 = undefined;
                if (var9) {
                    _fun70371_ip = 240;
                    continue _fun70371
                }
            case 221:
                var9 = var6.props;
                var12 = var0 == var9;
                var10 = undefined;
                if (var12) {
                    _fun70371_ip = 240;
                    continue _fun70371
                }
            case 235:
                var10 = var9.ref;
            case 240:
                _closure2_slot7 = var10;
                var12 = _closure1_slot4;
                var9 = var12.useCallback;
                var13 = var0 == var6;
                var0 = undefined;
                if (var13) {
                    _fun70371_ip = 267;
                    continue _fun70371
                }
            case 262:
                var0 = var6.props;
            case 267:
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function(arg0) { // Environment: var2
                    _fun70372: for (var _fun70372_ip = 0;;) switch (_fun70372_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.JSON;
                            var1 = var2.parse;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var2 = var0.type;
                            var1 = 'onPlayerReady';
                            if (!(var1 !== var2)) {
                                _fun70372_ip = 473;
                                continue _fun70372
                            }
                        case 40:
                            var1 = 'onStateChange';
                            if (!(var1 !== var2)) {
                                _fun70372_ip = 392;
                                continue _fun70372
                            }
                        case 51:
                            var1 = 'onError';
                            if (!(var1 !== var2)) {
                                _fun70372_ip = 277;
                                continue _fun70372
                            }
                        case 62:
                            var1 = 'onCurrentTime';
                            if (!(var1 !== var2)) {
                                _fun70372_ip = 131;
                                continue _fun70372
                            }
                        case 72:
                            var1 = 'onMute';
                            if (!(var1 === var2)) {
                                _fun70372_ip = 522;
                                continue _fun70372
                            }
                        case 85:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.setMuted;
                            var1 = var0.value;
                            var1 = var2.bind(var3)(var1);
                            _fun70372_ip = 522;
                            continue _fun70372;
                        case 131:
                            var1 = _closure2_slot2;
                            var4 = null;
                            var1 = var4 == var1;
                            var6 = undefined;
                            if (var1) {
                                _fun70372_ip = 165;
                                continue _fun70372
                            }
                        case 149:
                            var5 = _closure2_slot2;
                            var5 = var5.props;
                            var1 = var4 == var5;
                            var6 = var5;
                        case 165:
                            if (var1) {
                                _fun70372_ip = 178;
                                continue _fun70372
                            }
                        case 168:
                            var5 = var6.onCurrentSecond;
                            var1 = var4 == var5;
                        case 178:
                            if (var1) {
                                _fun70372_ip = 203;
                                continue _fun70372
                            }
                        case 181:
                            var5 = var6.onCurrentSecond;
                            var1 = var0.value;
                            var1 = var1.currentTime;
                            var1 = var5.bind(var6)(var1);
                        case 203:
                            var1 = _closure2_slot2;
                            var1 = var4 == var1;
                            var3 = undefined;
                            if (var1) {
                                _fun70372_ip = 232;
                                continue _fun70372
                            }
                        case 216:
                            var2 = _closure2_slot2;
                            var2 = var2.props;
                            var1 = var4 == var2;
                            var3 = var2;
                        case 232:
                            if (var1) {
                                _fun70372_ip = 245;
                                continue _fun70372
                            }
                        case 235:
                            var2 = var3.onDuration;
                            var1 = var4 == var2;
                        case 245:
                            if (var1) {
                                _fun70372_ip = 522;
                                continue _fun70372
                            }
                        case 251:
                            var2 = var3.onDuration;
                            var1 = var0.value;
                            var1 = var1.duration;
                            var1 = var2.bind(var3)(var1);
                            _fun70372_ip = 522;
                            continue _fun70372;
                        case 277:
                            var5 = _closure2_slot4;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 3;
                            var1 = var3[var1];
                            var6 = undefined;
                            var1 = var2.bind(var6)(var1);
                            var1 = var1.PlayerState;
                            var1 = var1.ERRORED;
                            var1 = var5.bind(var6)(var1);
                            var1 = 5;
                            var1 = var3[var1];
                            var1 = var2.bind(var6)(var1);
                            var3 = var1.MediaViewerAnalytics;
                            var2 = var3.trackMessageEmbedsActionCompleted;
                            var1 = {
                                'platform': 'tiktok',
                                'action': 'errored'
                            };
                            var5 = _closure1_slot8;
                            var4 = var0.value;
                            var4 = var5.bind(var6)(var4);
                            var1.error = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun70372_ip = 522;
                            continue _fun70372;
                        case 392:
                            var1 = _closure1_slot7;
                            var0 = var0.value;
                            var2 = var1[var0];
                            var6 = null;
                            if (!(var6 != var2)) {
                                _fun70372_ip = 522;
                                continue _fun70372
                            }
                        case 414:
                            var1 = _closure2_slot2;
                            var3 = var6 == var1;
                            var1 = undefined;
                            var4 = undefined;
                            if (var3) {
                                _fun70372_ip = 448;
                                continue _fun70372
                            }
                        case 432:
                            var5 = _closure2_slot2;
                            var5 = var5.props;
                            var3 = var6 == var5;
                            var4 = var5;
                        case 448:
                            if (var3) {
                                _fun70372_ip = 462;
                                continue _fun70372
                            }
                        case 451:
                            var3 = var4.onPlayerStateChange;
                            var3 = var3.bind(var4)(var2);
                        case 462:
                            var0 = _closure2_slot4;
                            var0 = var0.bind(var1)(var2);
                            _fun70372_ip = 522;
                            continue _fun70372;
                        case 473:
                            var2 = _closure2_slot4;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var0.PlayerState;
                            var0 = var0.READY;
                            var0 = var2.bind(var1)(var0);
                        case 522:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var9.bind(var12)(var0, var6);
                var12 = _closure1_slot0;
                var0 = _closure1_slot2;
                var9 = 7;
                var9 = var0[var9];
                var13 = var12.bind(var3)(var9);
                var12 = var13.useMediaPlayerMutedStore;
                var9 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.isMuted;
                    return var0;
                };
                var9 = var12.bind(var13)(var9);
                _closure2_slot8 = var9;
                var13 = _closure1_slot4;
                var14 = var13.useEffect;
                var12 = new Array(6);
                var12[0] = var10;
                var12[1] = var17;
                var12[2] = var16;
                var12[3] = var15;
                var12[4] = var5;
                var12[5] = var9;
                var9 = function() { // Environment: var2
                    _fun70374: for (var _fun70374_ip = 0;;) switch (_fun70374_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var2 = null;
                            var3 = var2 == var0;
                            var0 = undefined;
                            var1 = undefined;
                            if (var3) {
                                _fun70374_ip = 29;
                                continue _fun70374
                            }
                        case 20:
                            var3 = _closure2_slot7;
                            var1 = var3.current;
                        case 29:
                            var1 = var2 != var1;
                            if (!var1) {
                                _fun70374_ip = 79;
                                continue _fun70374
                            }
                        case 36:
                            var3 = _closure2_slot3;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 3;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.PlayerState;
                            var2 = var2.UNREADY;
                            var1 = var3 !== var2;
                        case 79:
                            if (!var1) {
                                _fun70374_ip = 427;
                                continue _fun70374
                            }
                        case 85:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun70374_ip = 135;
                                continue _fun70374
                            }
                        case 92:
                            var3 = _closure2_slot5;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 3;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.PlayerState;
                            var2 = var2.UNREADY;
                            var1 = var3 === var2;
                        case 135:
                            if (!var1) {
                                _fun70374_ip = 181;
                                continue _fun70374
                            }
                        case 138:
                            var3 = _closure2_slot3;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 3;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.PlayerState;
                            var2 = var2.READY;
                            var1 = var3 === var2;
                        case 181:
                            if (!var1) {
                                _fun70374_ip = 211;
                                continue _fun70374
                            }
                        case 184:
                            var3 = _closure1_slot9;
                            var2 = _closure2_slot7;
                            var1 = {};
                            var5 = 'play';
                            var1.type = var5;
                            var1 = var3.bind(var0)(var2, var1);
                        case 211:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun70374_ip = 225;
                                continue _fun70374
                            }
                        case 218:
                            var2 = _closure2_slot6;
                            var1 = !var2;
                        case 225:
                            if (!var1) {
                                _fun70374_ip = 255;
                                continue _fun70374
                            }
                        case 228:
                            var3 = _closure1_slot9;
                            var2 = _closure2_slot7;
                            var1 = {};
                            var5 = 'play';
                            var1.type = var5;
                            var1 = var3.bind(var0)(var2, var1);
                        case 255:
                            var1 = _closure2_slot0;
                            var1 = !var1;
                            if (!var1) {
                                _fun70374_ip = 269;
                                continue _fun70374
                            }
                        case 265:
                            var1 = _closure2_slot6;
                        case 269:
                            if (!var1) {
                                _fun70374_ip = 299;
                                continue _fun70374
                            }
                        case 272:
                            var3 = _closure1_slot9;
                            var2 = _closure2_slot7;
                            var1 = {};
                            var5 = 'pause';
                            var1.type = var5;
                            var1 = var3.bind(var0)(var2, var1);
                        case 299:
                            var3 = _closure2_slot3;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 3;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.PlayerState;
                            var2 = var2.ENDED;
                            if (!(var3 === var2)) {
                                _fun70374_ip = 390;
                                continue _fun70374
                            }
                        case 342:
                            var5 = _closure1_slot9;
                            var3 = _closure2_slot7;
                            var2 = {
                                'type': 'seekTo',
                                'value': 0
                            };
                            var2 = var5.bind(var0)(var3, var2);
                            var3 = _closure2_slot7;
                            var2 = {};
                            var6 = 'play';
                            var2.type = var6;
                            var2 = var5.bind(var0)(var3, var2);
                        case 390:
                            var3 = _closure1_slot9;
                            var2 = _closure2_slot7;
                            var1 = {};
                            var5 = _closure2_slot8;
                            var4 = 'unMute';
                            if (!var5) {
                                _fun70374_ip = 417;
                                continue _fun70374
                            }
                        case 413:
                            var4 = 'mute';
                        case 417:
                            var1.type = var4;
                            var1 = var3.bind(var0)(var2, var1);
                        case 427:
                            return var0;
                    }
                };
                var9 = var14.bind(var13)(var9, var12);
                var14 = var13.useEffect;
                var12 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.MediaViewerAnalytics;
                    var2 = var3.trackMessageEmbedsActionCompleted;
                    var1 = {
                        'platform': 'tiktok',
                        'action': 'attempted'
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9 = new Array(0);
                var9 = var14.bind(var13)(var12, var9);
                var12 = var13.useMemo;
                var14 = var8.uri;
                var9 = new Array(1);
                var9[0] = var14;
                var2 = function() { // Environment: var2
                    var2 = global;
                    var4 = var2.URL;
                    var1 = _closure2_slot1;
                    var5 = var1.uri;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var6 = var3;
                    var1 = new var6[var4](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var _closure3_slot0 = var1;
                    var4 = var2.Object;
                    var3 = var4.entries;
                    var2 = _closure1_slot6;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun70377: for (var _fun70377_ip = 0;;) switch (_fun70377_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3[Symbol.iterator];
                                var3 = var1().next;
                                var5 = var3().value;
                                var2 = var1;
                                var0 = undefined;
                                var2 = var2 === var0;
                                var4 = undefined;
                                if (var2) {
                                    _fun70377_ip = 27;
                                    continue _fun70377
                                }
                            case 24:
                                var4 = var5;
                            case 27:
                                var5 = undefined;
                                if (var2) {
                                    _fun70377_ip = 57;
                                    continue _fun70377
                                }
                            case 32:
                                var6 = var3().value;
                                var3 = var1;
                                var3 = var3 === var0;
                                var5 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun70377_ip = 57;
                                    continue _fun70377
                                }
                            case 51:
                                var5 = var6;
                                var2 = var3;
                            case 57:
                                if (var2) {
                                    _fun70377_ip = 63;
                                    continue _fun70377
                                }
                            case 60:
                                var1.return();
                            case 63:
                                var1 = _closure3_slot0;
                                var3 = var1.searchParams;
                                var2 = var3.append;
                                var1 = var5.toString;
                                var1 = var1.bind(var5)();
                                var1 = var2.bind(var3)(var4, var1);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0);
                    var0 = var1.toString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var12.bind(var13)(var2, var9);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = var0[var11];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.ref = var10;
                var0.style = var7;
                var7 = {};
                var21 = var7;
                var20 = var8;
                var8 = copyDataProperties(var21, var20);
                var8 = 'uri';
                var7[var8] = var9;
                var0.source = var7;
                var7 = 'https://www.tiktok.com/player/v1/';
                var0.baseURL = var7;
                var7 = '\n  window.addEventListener(\'message\', function(event) {\n    if (!event.data["x-tiktok-player"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n';
                var0.injectedJavaScript = var7;
                var0.onDataReceived = var6;
                var0.playerState = var5;
                var21 = var0;
                var20 = var4;
                var4 = copyDataProperties(var21, var20);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaModalTiktok.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function() { // Original name: createTiktokVideoControls, environment: var1
        var1 = _closure1_slot4;
        var0 = var1.createRef;
        var3 = var0.bind(var1)();
        var _closure2_slot2 = var3;
        var0 = 0;
        var _closure2_slot3 = var0;
        var _closure2_slot4 = var0;
        var0 = false;
        var _closure2_slot5 = var0;
        var0 = {};
        var1 = function(arg0) { // Original name: seek, environment: var2
            var3 = _closure1_slot9;
            var2 = _closure2_slot2;
            var1 = {};
            var0 = 'seekTo';
            var1.type = var0;
            var0 = arg0;
            var1.value = var0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.seek = var1;
        var1 = function(arg0) { // Original name: pause, environment: var2
            _fun70380: for (var _fun70380_ip = 0;;) switch (_fun70380_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure2_slot5;
                    if (!(var1 !== var4)) {
                        _fun70380_ip = 54;
                        continue _fun70380
                    }
                case 14:
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot2;
                    var1 = {};
                    _closure2_slot5 = var4;
                    var0 = 'play';
                    if (!var4) {
                        _fun70380_ip = 42;
                        continue _fun70380
                    }
                case 38:
                    var0 = 'pause';
                case 42:
                    var1.type = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.pause = var1;
        var1 = function(arg0, arg1, arg2) { // Original name: useSubscribe, environment: var2
            var0 = arg0;
            var _closure2_slot0 = var0;
            var0 = arg1;
            var _closure2_slot1 = var0;
            var3 = _closure1_slot4;
            var2 = var3.useLayoutEffect;
            var1 = function() { // Environment: var0
                _fun70382: for (var _fun70382_ip = 0;;) switch (_fun70382_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun70382_ip = 33;
                            continue _fun70382
                        }
                    case 13:
                        var5 = _closure2_slot0;
                        var4 = _closure2_slot3;
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3);
                    case 33:
                        var1 = _closure2_slot1;
                        if (!(var2 != var1)) {
                            _fun70382_ip = 56;
                            continue _fun70382
                        }
                    case 41:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot5;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 56:
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
        var3 = function(arg0) { // Original name: onPlayerStateChange, environment: var2
            _fun70383: for (var _fun70383_ip = 0;;) switch (_fun70383_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70383_ip = 102;
                        continue _fun70383
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
                        _fun70383_ip = 97;
                        continue _fun70383
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
        var3 = function(arg0) { // Original name: onCurrentSecond, environment: var2
            _fun70384: for (var _fun70384_ip = 0;;) switch (_fun70384_ip) {
                case 0:
                    var1 = arg0;
                    _closure2_slot3 = var1;
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70384_ip = 40;
                        continue _fun70384
                    }
                case 20:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.onCurrentSecond = var3;
        var2 = function(arg0) { // Original name: onDuration, environment: var2
            _fun70385: for (var _fun70385_ip = 0;;) switch (_fun70385_ip) {
                case 0:
                    var1 = arg0;
                    _closure2_slot4 = var1;
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun70385_ip = 40;
                        continue _fun70385
                    }
                case 20:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.onDuration = var2;
        var0.props = var1;
        return var0;
    };
    var2.createTiktokVideoControls = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 8815, 5261, 8800, 8804, 8805, 2]);