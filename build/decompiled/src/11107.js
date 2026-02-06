// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var3 = 1;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = global;
    var10 = var3.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var3 = true;
    var8.value = var3;
    var3 = '__esModule';
    var3 = var9.bind(var10)(var2, var3, var8);
    var2.default = var0;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var5 = this;
    var _closure1_slot6 = var5;
    var6 = var4.StyleSheet;
    var5 = var6.create;
    var4 = {};
    var7 = {};
    var8 = 'transparent';
    var7.backgroundColor = var8;
    var4.webView = var7;
    var4 = var5.bind(var6)(var4);
    var _closure1_slot7 = var4;
    var3 = var3.forwardRef;
    var1 = function arg0, arg1() {
        _fun86048: for (var _fun86048_ip = 0;;) switch (_fun86048_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.height;
                var7 = var0.width;
                var13 = var0.videoId;
                var _closure2_slot0 = var13;
                var28 = var0.playList;
                var _closure2_slot1 = var28;
                var2 = var0.play;
                var11 = undefined;
                var27 = var11 !== var2;
                if (!var27) {
                    _fun86048_ip = 55;
                    continue _fun86048
                }
            case 52:
                var27 = var2;
            case 55:
                var _closure2_slot2 = var27;
                var2 = var0.mute;
                var32 = var11 !== var2;
                if (!var32) {
                    _fun86048_ip = 75;
                    continue _fun86048
                }
            case 72:
                var32 = var2;
            case 75:
                var _closure2_slot3 = var32;
                var2 = var0.volume;
                var31 = 100;
                if (!(var11 !== var2)) {
                    _fun86048_ip = 95;
                    continue _fun86048
                }
            case 92:
                var31 = var2;
            case 95:
                var _closure2_slot4 = var31;
                var19 = var0.webViewStyle;
                var10 = var0.webViewProps;
                var20 = var0.useLocalHTML;
                var _closure2_slot5 = var20;
                var6 = var0.baseUrlOverride;
                var _closure2_slot6 = var6;
                var2 = var0.playbackRate;
                var9 = 1;
                var25 = var9;
                if (!(var11 !== var2)) {
                    _fun86048_ip = 156;
                    continue _fun86048
                }
            case 153:
                var25 = var2;
            case 156:
                var _closure2_slot7 = var25;
                var2 = var0.contentScale;
                var15 = var9;
                if (!(var11 !== var2)) {
                    _fun86048_ip = 178;
                    continue _fun86048
                }
            case 175:
                var15 = var2;
            case 178:
                var _closure2_slot8 = var15;
                var23 = var0.onError;
                if (!(var11 === var23)) {
                    _fun86048_ip = 199;
                    continue _fun86048
                }
            case 192:
                var23 = function(arg0) { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
            case 199:
                var _closure2_slot9 = var23;
                var24 = var0.onReady;
                if (!(var11 === var24)) {
                    _fun86048_ip = 220;
                    continue _fun86048
                }
            case 213:
                var24 = function(arg0) { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
            case 220:
                var _closure2_slot10 = var24;
                var2 = var0.playListStartIndex;
                var3 = 0;
                var26 = 0;
                if (!(var11 !== var2)) {
                    _fun86048_ip = 243;
                    continue _fun86048
                }
            case 240:
                var26 = var2;
            case 243:
                var _closure2_slot11 = var26;
                var5 = var0.initialPlayerParams;
                var2 = var0.allowWebViewZoom;
                var4 = var11 !== var2;
                if (!var4) {
                    _fun86048_ip = 271;
                    continue _fun86048
                }
            case 268:
                var4 = var2;
            case 271:
                var _closure2_slot12 = var4;
                var2 = var0.forceAndroidAutoplay;
                var16 = var11 !== var2;
                if (!var16) {
                    _fun86048_ip = 293;
                    continue _fun86048
                }
            case 290:
                var16 = var2;
            case 293:
                var22 = var0.onChangeState;
                if (!(var11 === var22)) {
                    _fun86048_ip = 312;
                    continue _fun86048
                }
            case 305:
                var22 = function(arg0) { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
            case 312:
                var _closure2_slot13 = var22;
                var21 = var0.onFullScreenChange;
                if (!(var11 === var21)) {
                    _fun86048_ip = 335;
                    continue _fun86048
                }
            case 328:
                var21 = function(arg0) { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
            case 335:
                var _closure2_slot14 = var21;
                var2 = var0.onPlaybackQualityChange;
                if (!(var11 === var2)) {
                    _fun86048_ip = 358;
                    continue _fun86048
                }
            case 351:
                var2 = function(arg0) { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
            case 358:
                var _closure2_slot15 = var2;
                var17 = var0.onPlaybackRateChange;
                if (!(var11 === var17)) {
                    _fun86048_ip = 379;
                    continue _fun86048
                }
            case 372:
                var17 = function(arg0) { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
            case 379:
                var _closure2_slot16 = var17;
                var0 = _closure1_slot4;
                var14 = var0.useState;
                var8 = false;
                var29 = var14.bind(var11)(var8);
                var8 = _closure1_slot3;
                var14 = var8.default;
                var8 = 2;
                var8 = var14.bind(var11)(var29, var8);
                var3 = var8[var3];
                var _closure2_slot17 = var3;
                var8 = var8[var9];
                var _closure2_slot18 = var8;
                var8 = var0.useRef;
                var8 = var8.bind(var11)(var13);
                var _closure2_slot19 = var8;
                var8 = var0.useRef;
                var8 = var8.bind(var11)(var28);
                var _closure2_slot20 = var8;
                var0 = var0.useRef;
                if (var5) {
                    _fun86048_ip = 474;
                    continue _fun86048
                }
            case 472:
                var5 = {};
            case 474:
                var0 = var0.bind(var11)(var5);
                var _closure2_slot21 = var0;
                var5 = _closure1_slot4;
                var9 = var5.useRef;
                var8 = null;
                var14 = var9.bind(var11)(var8);
                var _closure2_slot22 = var14;
                var30 = var5.useRef;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var29 = 6;
                var29 = var9[var29];
                var29 = var8.bind(var11)(var29);
                var29 = var29.EventEmitter;
                var33 = var29.prototype;
                var33 = Object.create(var33, {
                    constructor: {
                        value: var29
                    }
                });
                var38 = var33;
                var29 = new var38[var29](var37);
                var29 = var29 instanceof Object ? var29 : var33;
                var29 = var30.bind(var11)(var29);
                var _closure2_slot23 = var29;
                var34 = var5.useImperativeHandle;
                var33 = arg1;
                var30 = function() { // Environment: var1
                    var0 = {};
                    var2 = function() {
                        var0 = _closure2_slot22;
                        var2 = var0.current;
                        var1 = var2.injectJavaScript;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 7;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.PLAYER_FUNCTIONS;
                        var0 = var0.getVideoUrlScript;
                        var0 = var1.bind(var2)(var0);
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = function(arg0) { // Environment: var0
                            var0 = _closure2_slot23;
                            var3 = var0.current;
                            var2 = var3.once;
                            var1 = 'getVideoUrl';
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var0.getVideoUrl = var2;
                    var2 = function() {
                        var0 = _closure2_slot22;
                        var2 = var0.current;
                        var1 = var2.injectJavaScript;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 7;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.PLAYER_FUNCTIONS;
                        var0 = var0.durationScript;
                        var0 = var1.bind(var2)(var0);
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = function(arg0) { // Environment: var0
                            var0 = _closure2_slot23;
                            var3 = var0.current;
                            var2 = var3.once;
                            var1 = 'getDuration';
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var0.getDuration = var2;
                    var2 = function() {
                        var0 = _closure2_slot22;
                        var2 = var0.current;
                        var1 = var2.injectJavaScript;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 7;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.PLAYER_FUNCTIONS;
                        var0 = var0.currentTimeScript;
                        var0 = var1.bind(var2)(var0);
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = function(arg0) { // Environment: var0
                            var0 = _closure2_slot23;
                            var3 = var0.current;
                            var2 = var3.once;
                            var1 = 'getCurrentTime';
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var0.getCurrentTime = var2;
                    var2 = function() {
                        var0 = _closure2_slot22;
                        var2 = var0.current;
                        var1 = var2.injectJavaScript;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 7;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.PLAYER_FUNCTIONS;
                        var0 = var0.isMutedScript;
                        var0 = var1.bind(var2)(var0);
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = function(arg0) { // Environment: var0
                            var0 = _closure2_slot23;
                            var3 = var0.current;
                            var2 = var3.once;
                            var1 = 'isMuted';
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var0.isMuted = var2;
                    var2 = function() {
                        var0 = _closure2_slot22;
                        var2 = var0.current;
                        var1 = var2.injectJavaScript;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 7;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.PLAYER_FUNCTIONS;
                        var0 = var0.getVolumeScript;
                        var0 = var1.bind(var2)(var0);
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = function(arg0) { // Environment: var0
                            var0 = _closure2_slot23;
                            var3 = var0.current;
                            var2 = var3.once;
                            var1 = 'getVolume';
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var0.getVolume = var2;
                    var2 = function() {
                        var0 = _closure2_slot22;
                        var2 = var0.current;
                        var1 = var2.injectJavaScript;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 7;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.PLAYER_FUNCTIONS;
                        var0 = var0.getPlaybackRateScript;
                        var0 = var1.bind(var2)(var0);
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = function(arg0) { // Environment: var0
                            var0 = _closure2_slot23;
                            var3 = var0.current;
                            var2 = var3.once;
                            var1 = 'getPlaybackRate';
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var0.getPlaybackRate = var2;
                    var2 = function() {
                        var0 = _closure2_slot22;
                        var2 = var0.current;
                        var1 = var2.injectJavaScript;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 7;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.PLAYER_FUNCTIONS;
                        var0 = var0.getAvailablePlaybackRatesScript;
                        var0 = var1.bind(var2)(var0);
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = function(arg0) { // Environment: var0
                            var0 = _closure2_slot23;
                            var3 = var0.current;
                            var2 = var3.once;
                            var1 = 'getAvailablePlaybackRates';
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var0.getAvailablePlaybackRates = var2;
                    var1 = function arg0, arg1() {
                        var0 = _closure2_slot22;
                        var3 = var0.current;
                        var2 = var3.injectJavaScript;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var6 = var1.PLAYER_FUNCTIONS;
                        var5 = var6.seekToScript;
                        var4 = arg0;
                        var1 = arg1;
                        var1 = var5.bind(var6)(var4, var1);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.seekTo = var1;
                    return var0;
                };
                var29 = new Array(0);
                var29 = var34.bind(var11)(var33, var30, var29);
                var30 = var5.useEffect;
                var29 = new Array(5);
                var29[0] = var27;
                var29[1] = var32;
                var29[2] = var31;
                var29[3] = var25;
                var29[4] = var3;
                var25 = function() { // Environment: var1
                    _fun86071: for (var _fun86071_ip = 0;;) switch (_fun86071_ip) {
                        case 0:
                            var1 = _closure2_slot17;
                            if (!var1) {
                                _fun86071_ip = 180;
                                continue _fun86071
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 7;
                            var2 = var5[var1];
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            var6 = var2.playMode;
                            var2 = _closure2_slot2;
                            var6 = var6[var2];
                            var2 = new Array(4);
                            var2[0] = var6;
                            var6 = var5[var1];
                            var6 = var4.bind(var3)(var6);
                            var7 = var6.soundMode;
                            var6 = _closure2_slot3;
                            var6 = var7[var6];
                            var2[1] = var6;
                            var6 = var5[var1];
                            var6 = var4.bind(var3)(var6);
                            var8 = var6.PLAYER_FUNCTIONS;
                            var7 = var8.setVolume;
                            var6 = _closure2_slot4;
                            var6 = var7.bind(var8)(var6);
                            var2[2] = var6;
                            var1 = var5[var1];
                            var1 = var4.bind(var3)(var1);
                            var4 = var1.PLAYER_FUNCTIONS;
                            var3 = var4.setPlaybackRate;
                            var1 = _closure2_slot7;
                            var1 = var3.bind(var4)(var1);
                            var2[3] = var1;
                            var1 = var2.forEach;
                            var0 = _closure2_slot22;
                            var0 = var0.current;
                            var0 = var0.injectJavaScript;
                            var0 = var1.bind(var2)(var0);
                        case 180:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = var30.bind(var11)(var25, var29);
                var29 = var5.useEffect;
                var25 = new Array(3);
                var25[0] = var13;
                var25[1] = var27;
                var25[2] = var3;
                var13 = function() { // Environment: var1
                    _fun86072: for (var _fun86072_ip = 0;;) switch (_fun86072_ip) {
                        case 0:
                            var1 = _closure2_slot17;
                            if (!var1) {
                                _fun86072_ip = 27;
                                continue _fun86072
                            }
                        case 10:
                            var2 = _closure2_slot19;
                            var3 = var2.current;
                            var2 = _closure2_slot0;
                            var1 = var3 !== var2;
                        case 27:
                            if (!var1) {
                                _fun86072_ip = 111;
                                continue _fun86072
                            }
                        case 30:
                            var1 = _closure2_slot19;
                            var5 = _closure2_slot0;
                            var1.current = var5;
                            var1 = _closure2_slot22;
                            var2 = var1.current;
                            var1 = var2.injectJavaScript;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 7;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var6.bind(var3)(var4);
                            var4 = var3.PLAYER_FUNCTIONS;
                            var3 = var4.loadVideoById;
                            var0 = _closure2_slot2;
                            var0 = var3.bind(var4)(var5, var0);
                            var0 = var1.bind(var2)(var0);
                        case 111:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var29.bind(var11)(var13, var25);
                var25 = var5.useEffect;
                var13 = new Array(4);
                var13[0] = var28;
                var13[1] = var27;
                var13[2] = var26;
                var13[3] = var3;
                var3 = function() { // Environment: var1
                    _fun86073: for (var _fun86073_ip = 0;;) switch (_fun86073_ip) {
                        case 0:
                            var1 = _closure2_slot17;
                            if (!var1) {
                                _fun86073_ip = 14;
                                continue _fun86073
                            }
                        case 10:
                            var1 = _closure2_slot1;
                        case 14:
                            if (!var1) {
                                _fun86073_ip = 70;
                                continue _fun86073
                            }
                        case 17:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 8;
                            var2 = var4[var2];
                            var5 = undefined;
                            var2 = var3.bind(var5)(var2);
                            var4 = var2.deepComparePlayList;
                            var2 = _closure2_slot20;
                            var3 = var2.current;
                            var2 = _closure2_slot1;
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = !var2;
                        case 70:
                            if (!var1) {
                                _fun86073_ip = 159;
                                continue _fun86073
                            }
                        case 73:
                            var1 = _closure2_slot20;
                            var6 = _closure2_slot1;
                            var1.current = var6;
                            var1 = _closure2_slot22;
                            var2 = var1.current;
                            var1 = var2.injectJavaScript;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 7;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var5 = var3.PLAYER_FUNCTIONS;
                            var4 = var5.loadPlaylist;
                            var3 = _closure2_slot11;
                            var0 = _closure2_slot2;
                            var0 = var4.bind(var5)(var6, var3, var0);
                            var0 = var1.bind(var2)(var0);
                        case 159:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var25.bind(var11)(var3, var13);
                var13 = var5.useCallback;
                var3 = new Array(6);
                var3[0] = var24;
                var3[1] = var23;
                var3[2] = var22;
                var3[3] = var21;
                var3[4] = var17;
                var3[5] = var2;
                var2 = function(arg0) { // Environment: var1
                    _fun86074: for (var _fun86074_ip = 0;;) switch (_fun86074_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = undefined;
                            var1 = undefined;
                        case 7: // try_start_0
                            var3 = global;
                            var4 = var3.JSON;
                            var3 = var4.parse;
                            var2 = var2.nativeEvent;
                            var2 = var2.data;
                            var2 = var3.bind(var4)(var2);
                            var1 = var2;
                            var3 = var2.eventType;
                            var2 = 'fullScreenChange';
                            if (!(var2 !== var3)) {
                                _fun86074_ip = 342;
                                continue _fun86074
                            }
                        case 59:
                            var2 = 'playerStateChange';
                            if (!(var2 !== var3)) {
                                _fun86074_ip = 287;
                                continue _fun86074
                            }
                        case 72:
                            var2 = 'playerReady';
                            if (!(var2 !== var3)) {
                                _fun86074_ip = 263;
                                continue _fun86074
                            }
                        case 85:
                            var2 = 'playerQualityChange';
                            if (!(var2 !== var3)) {
                                _fun86074_ip = 241;
                                continue _fun86074
                            }
                        case 98:
                            var2 = 'playerError';
                            if (!(var2 !== var3)) {
                                _fun86074_ip = 186;
                                continue _fun86074
                            }
                        case 108:
                            var2 = 'playbackRateChange';
                            if (!(var2 !== var3)) {
                                _fun86074_ip = 161;
                                continue _fun86074
                            }
                        case 118:
                            var2 = _closure2_slot23;
                            var5 = var2.current;
                            var4 = var5.emit;
                            var2 = var1;
                            var3 = var2.eventType;
                            var2 = var2.data;
                            var2 = var4.bind(var5)(var3, var2);
                            _fun86074_ip = 359;
                            continue _fun86074;
                        case 161:
                            var3 = _closure2_slot16;
                            var2 = var1;
                            var2 = var2.data;
                            var2 = var3.bind(var0)(var2);
                            _fun86074_ip = 359;
                            continue _fun86074;
                        case 186:
                            var3 = _closure2_slot9;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 9;
                            var2 = var5[var2];
                            var2 = var4.bind(var0)(var2);
                            var4 = var2.PLAYER_ERROR;
                            var2 = var1;
                            var2 = var2.data;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            _fun86074_ip = 359;
                            continue _fun86074;
                        case 241:
                            var3 = _closure2_slot15;
                            var2 = var1;
                            var2 = var2.data;
                            var2 = var3.bind(var0)(var2);
                            _fun86074_ip = 359;
                            continue _fun86074;
                        case 263:
                            var3 = _closure2_slot10;
                            var3 = var3.bind(var0)();
                            var3 = _closure2_slot18;
                            var2 = true;
                            var2 = var3.bind(var0)(var2);
                            _fun86074_ip = 359;
                            continue _fun86074;
                        case 287:
                            var3 = _closure2_slot13;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 9;
                            var2 = var5[var2];
                            var2 = var4.bind(var0)(var2);
                            var4 = var2.PLAYER_STATES;
                            var2 = var1;
                            var2 = var2.data;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            _fun86074_ip = 359;
                            continue _fun86074;
                        case 342:
                            var2 = _closure2_slot14;
                            var1 = var1.data;
                            var1 = var2.bind(var0)(var1);
                        case 359: // try_end0
                            _fun86074_ip = 388;
                            continue _fun86074;
                        case 361: // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var1 = global;
                            var3 = var1.console;
                            var2 = var3.warn;
                            var1 = '[rn-youtube-iframe]';
                            var1 = var2.bind(var3)(var1, var4);
                        case 388:
                            return var0;
                    }
                };
                var13 = var13.bind(var11)(var2, var3);
                var17 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function(arg0) { // Environment: var1
                    _fun86075: for (var _fun86075_ip = 0;;) switch (_fun86075_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = undefined;
                            var1 = undefined;
                        case 7: // try_start_0
                            var3 = var2;
                            var3 = var3.mainDocumentURL;
                            var0 = var3;
                            if (var3) {
                                _fun86075_ip = 27;
                                continue _fun86075
                            }
                        case 22:
                            var0 = var2.url;
                        case 27:
                            var1 = var0;
                            var3 = _closure1_slot5;
                            var3 = var3.Platform;
                            var5 = var3.OS;
                            var3 = 'ios';
                            var3 = var3 === var5;
                            var2 = var3;
                            if (!var3) {
                                _fun86075_ip = 76;
                                continue _fun86075
                            }
                        case 63:
                            var5 = var1;
                            var3 = 'about:blank';
                            var2 = var3 === var5;
                        case 76:
                            var0 = var2;
                            if (var2) {
                                _fun86075_ip = 135;
                                continue _fun86075
                            }
                        case 82:
                            var3 = var1;
                            var2 = var3.startsWith;
                            var5 = _closure2_slot6;
                            var1 = var5;
                            if (var5) {
                                _fun86075_ip = 130;
                                continue _fun86075
                            }
                        case 104:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var4 = 9;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var1 = var4.DEFAULT_BASE_URL;
                        case 130:
                            var0 = var2.bind(var3)(var1);
                        case 135: // try_end0
                            return var0;
                        case 137: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var0 = true;
                            return var0;
                    }
                };
                var17 = var17.bind(var11)(var2, var3);
                var3 = var5.useMemo;
                var2 = new Array(4);
                var2[0] = var20;
                var2[1] = var15;
                var2[2] = var6;
                var2[3] = var4;
                var1 = function() { // Environment: var1
                    _fun86076: for (var _fun86076_ip = 0;;) switch (_fun86076_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 7;
                            var0 = var2[var0];
                            var6 = undefined;
                            var0 = var1.bind(var6)(var0);
                            var8 = var0.MAIN_SCRIPT;
                            var0 = _closure2_slot19;
                            var13 = var0.current;
                            var0 = _closure2_slot20;
                            var12 = var0.current;
                            var0 = _closure2_slot21;
                            var11 = var0.current;
                            var10 = _closure2_slot12;
                            var9 = _closure2_slot8;
                            var14 = undefined;
                            var2 = var14[var8](var13, var12, var11, var10, var9, var8);
                            var4 = _closure2_slot5;
                            var0 = {};
                            if (var4) {
                                _fun86076_ip = 143;
                                continue _fun86076
                            }
                        case 84:
                            var4 = _closure2_slot6;
                            if (var4) {
                                _fun86076_ip = 117;
                                continue _fun86076
                            }
                        case 91:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var3 = 9;
                            var3 = var7[var3];
                            var3 = var5.bind(var6)(var3);
                            var4 = var3.DEFAULT_BASE_URL;
                        case 117:
                            var3 = '?data=';
                            var4 = var4 + var3;
                            var3 = var2.urlEncodedJSON;
                            var3 = var4 + var3;
                            var0.uri = var3;
                            return var0;
                        case 143:
                            var2 = var2.htmlString;
                            var0.html = var2;
                            var2 = _closure2_slot6;
                            if (!var2) {
                                _fun86076_ip = 171;
                                continue _fun86076
                            }
                        case 161:
                            var1 = _closure2_slot6;
                            var0.baseUrl = var1;
                        case 171:
                            return var0;
                    }
                };
                var15 = var3.bind(var11)(var1, var2);
                var4 = var5.default;
                var3 = var4.createElement;
                var1 = _closure1_slot5;
                var2 = var1.View;
                var1 = {};
                var6 = {};
                var6.height = var18;
                var6.width = var7;
                var1.style = var6;
                var6 = _closure1_slot6;
                var1.__self = var6;
                var6 = {
                    'fileName': '/Users/ananthukanive/side-proj/react-native-youtube-iframe/src/YoutubeIframe.js',
                    'lineNumber': 251,
                    'columnNumber': 5
                };
                var1.__source = var6;
                var7 = var5.default;
                var6 = var7.createElement;
                var5 = 10;
                var5 = var9[var5];
                var5 = var8.bind(var11)(var5);
                var5 = var5.WebView;
                var8 = _closure1_slot2;
                var9 = var8.default;
                var8 = {
                    'bounces': false,
                    'originWhitelist': null,
                    'allowsInlineMediaPlayback': true,
                    'style': null,
                    'mediaPlaybackRequiresUserAction': false
                };
                var18 = ['*'];
                var8.originWhitelist = var18;
                var18 = _closure1_slot7;
                var20 = var18.webView;
                var18 = new Array(2);
                var18[0] = var20;
                var18[1] = var19;
                var8.style = var18;
                var8.onShouldStartLoadWithRequest = var17;
                var0 = var0.current;
                var0 = var0.preventFullScreen;
                var0 = !var0;
                var8.allowsFullscreenVideo = var0;
                var19 = '';
                var0 = var19;
                if (!var16) {
                    _fun86048_ip = 1067;
                    continue _fun86048
                }
            case 1008:
                var16 = _closure1_slot5;
                var18 = var16.Platform;
                var17 = var18.select;
                var16 = {};
                var21 = _closure1_slot0;
                var22 = _closure1_slot1;
                var20 = 9;
                var20 = var22[var20];
                var20 = var21.bind(var11)(var20);
                var20 = var20.CUSTOM_USER_AGENT;
                var16.android = var20;
                var16.ios = var19;
                var0 = var17.bind(var18)(var16);
            case 1067:
                var8.userAgent = var0;
                var0 = {};
                var0.source = var15;
                var0.ref = var14;
                var0.onMessage = var13;
                var12 = _closure1_slot6;
                var0.__self = var12;
                var12 = {
                    'fileName': '/Users/ananthukanive/side-proj/react-native-youtube-iframe/src/YoutubeIframe.js',
                    'lineNumber': 252,
                    'columnNumber': 7
                };
                var0.__source = var12;
                var0 = var9.bind(var11)(var8, var10, var0);
                var0 = var6.bind(var7)(var5, var0);
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5433, 11108, 11109, 57, 31, 27, 639, 11110, 11111, 11106, 11112]);