// modules/voice_messages/native/components/VoiceMessageChat.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun91621: for (var _fun91621_ip = 0;;) switch (_fun91621_ip) {
        case 0:
            var4 = require;
            var14 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var14;
            var _closure1_slot2 = var5;
            var0 = function arg0() {
                var0 = arg0;
                var7 = var0.value;
                var _closure2_slot0 = var7;
                var0 = _closure1_slot17;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var5 = var6[var0];
                var9 = var8.bind(var3)(var5);
                var5 = var9.useSharedValue;
                var10 = 0;
                var13 = var5.bind(var9)(var10);
                var _closure2_slot1 = var13;
                var5 = var6[var0];
                var9 = var8.bind(var3)(var5);
                var5 = var9.useSharedValue;
                var11 = var5.bind(var9)(var10);
                var _closure2_slot2 = var11;
                var5 = var6[var0];
                var9 = var8.bind(var3)(var5);
                var5 = var9.useSharedValue;
                var10 = var5.bind(var9)(var10);
                var _closure2_slot3 = var10;
                var5 = var6[var0];
                var9 = var8.bind(var3)(var5);
                var8 = var9.useAnimatedStyle;
                var5 = function() {
                    var0 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0.height = var2;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0.width = var2;
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.marginRight = var1;
                    return var0;
                };
                var12 = {};
                var12.animatedHeight = var13;
                var12.animatedWidth = var11;
                var12.animatedMargin = var10;
                var5.__closure = var12;
                var12 = 8768145898720.0;
                var5.__workletHash = var12;
                var12 = _closure1_slot18;
                var5.__initData = var12;
                var5 = var8.bind(var9)(var5);
                var12 = _closure1_slot4;
                var9 = var12.useEffect;
                var8 = new Array(2);
                var8[0] = var13;
                var8[1] = var7;
                var7 = function() { // Environment: var2
                    var1 = global;
                    var6 = var1.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot12;
                    var4 = var4 / var3;
                    var3 = 1.25;
                    var4 = var4 * var3;
                    var3 = 1;
                    var4 = var5.bind(var6)(var3, var4);
                    var3 = 20;
                    var8 = var3 * var4;
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 12;
                    var4 = var4[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.withSpring;
                    var7 = var1.Math;
                    var6 = var7.max;
                    var1 = 2;
                    var1 = var6.bind(var7)(var1, var8);
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var9.bind(var12)(var7, var8);
                var9 = _closure1_slot4;
                var8 = var9.useEffect;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var10;
                var2 = function() { // Environment: var2
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 13;
                    var1 = var8[var4];
                    var0 = undefined;
                    var12 = var7.bind(var0)(var1);
                    var11 = var12.withTiming;
                    var10 = {};
                    var9 = 300;
                    var10.duration = var9;
                    var1 = 8;
                    var3 = var8[var1];
                    var3 = var7.bind(var0)(var3);
                    var3 = var3.Easing;
                    var3 = var3.linear;
                    var10.easing = var3;
                    var3 = 2;
                    var3 = var11.bind(var12)(var3, var10);
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var4 = var8[var4];
                    var6 = var7.bind(var0)(var4);
                    var5 = var6.withTiming;
                    var4 = {};
                    var4.duration = var9;
                    var1 = var8[var1];
                    var1 = var7.bind(var0)(var1);
                    var1 = var1.Easing;
                    var1 = var1.linear;
                    var4.easing = var1;
                    var1 = 4;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var8.bind(var9)(var2, var7);
                var2 = _closure1_slot14;
                var1 = _closure1_slot1;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var6 = var4.waveformBar;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot25 = var0;
            var0 = function() {
                var1 = _closure1_slot17;
                var3 = undefined;
                var7 = var1.bind(var3)();
                var2 = _closure1_slot7;
                var1 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.waveformVersion;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot7;
                var1 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.waveform;
                    return var0;
                };
                var5 = var2.bind(var3)(var1);
                var6 = _closure1_slot4;
                var2 = var6.useState;
                var1 = 0;
                var8 = var2.bind(var6)(var1);
                var6 = _closure1_slot3;
                var2 = 2;
                var6 = var6.bind(var3)(var8, var2);
                var1 = var6[var1];
                var2 = 1;
                var2 = var6[var2];
                var _closure2_slot0 = var2;
                var2 = var5.slice;
                var1 = -var1;
                var6 = var2.bind(var5)(var1);
                var8 = _closure1_slot4;
                var5 = var8.useCallback;
                var2 = function(arg0) { // Environment: var4
                    var2 = _closure2_slot0;
                    var0 = global;
                    var3 = var0.Math;
                    var1 = var3.round;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var4 = var0.width;
                    var0 = 6;
                    var0 = var4 / var0;
                    var1 = var1.bind(var3)(var0);
                    var0 = 2;
                    var1 = var1 + var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var5 = var5.bind(var8)(var2, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot5;
                var0 = {};
                var7 = var7.waveformContainer;
                var0.style = var7;
                var0.onLayout = var5;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    _fun91630: for (var _fun91630_ip = 0;;) switch (_fun91630_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var3 = var2().value;
                            var1 = var0;
                            var4 = undefined;
                            var1 = var1 === var4;
                            var5 = undefined;
                            if (var1) {
                                _fun91630_ip = 27;
                                continue _fun91630
                            }
                        case 24:
                            var5 = var3;
                        case 27:
                            var3 = undefined;
                            if (var1) {
                                _fun91630_ip = 57;
                                continue _fun91630
                            }
                        case 32:
                            var6 = var2().value;
                            var2 = var0;
                            var2 = var2 === var4;
                            var3 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun91630_ip = 57;
                                continue _fun91630
                            }
                        case 51:
                            var3 = var6;
                            var1 = var2;
                        case 57:
                            if (var1) {
                                _fun91630_ip = 63;
                                continue _fun91630
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var2 = _closure1_slot14;
                            var1 = _closure1_slot25;
                            var0 = {};
                            var0.value = var5;
                            var0 = var2.bind(var4)(var1, var0, var3);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot26 = var0;
            var0 = function arg0() {
                _fun91631: for (var _fun91631_ip = 0;;) switch (_fun91631_ip) {
                    case 0:
                        var1 = arg0;
                        var9 = var1.animationValue;
                        var _closure2_slot0 = var9;
                        var1 = _closure1_slot17;
                        var3 = undefined;
                        var12 = var1.bind(var3)();
                        var2 = _closure1_slot7;
                        var1 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.startTimeMillis;
                            return var0;
                        };
                        var17 = var2.bind(var3)(var1);
                        var _closure2_slot1 = var17;
                        var4 = _closure1_slot4;
                        var2 = var4.useState;
                        var1 = function() { // Environment: var0
                            _fun91633: for (var _fun91633_ip = 0;;) switch (_fun91633_ip) {
                                case 0:
                                    var2 = _closure2_slot1;
                                    var0 = null;
                                    var2 = var0 != var2;
                                    var0 = 0;
                                    if (!var2) {
                                        _fun91633_ip = 43;
                                        continue _fun91633
                                    }
                                case 18:
                                    var2 = global;
                                    var3 = var2.Date;
                                    var2 = var3.now;
                                    var2 = var2.bind(var3)();
                                    var1 = _closure2_slot1;
                                    var0 = var2 - var1;
                                case 43:
                                    return var0;
                            }
                        };
                        var2 = var2.bind(var4)(var1);
                        var1 = _closure1_slot3;
                        var7 = 2;
                        var1 = var1.bind(var3)(var2, var7);
                        var5 = 0;
                        var2 = var1[var5];
                        var _closure2_slot2 = var2;
                        var4 = 1;
                        var1 = var1[var4];
                        var _closure2_slot3 = var1;
                        var6 = _closure1_slot4;
                        var1 = var6.useState;
                        var6 = var1.bind(var6)(var3);
                        var1 = _closure1_slot3;
                        var6 = var1.bind(var3)(var6, var7);
                        var1 = var6[var5];
                        var _closure2_slot4 = var1;
                        var6 = var6[var4];
                        var _closure2_slot5 = var6;
                        var10 = _closure1_slot7;
                        var6 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.savedVoiceMessageUploadData;
                            var0 = null;
                            var0 = var0 != var1;
                            return var0;
                        };
                        var15 = var10.bind(var3)(var6);
                        var _closure2_slot6 = var15;
                        var13 = _closure1_slot4;
                        var11 = var13.useEffect;
                        var10 = new Array(2);
                        var10[0] = var17;
                        var10[1] = var15;
                        var6 = function() { // Environment: var0
                            _fun91635: for (var _fun91635_ip = 0;;) switch (_fun91635_ip) {
                                case 0:
                                    var2 = _closure2_slot6;
                                    if (var2) {
                                        _fun91635_ip = 51;
                                        continue _fun91635
                                    }
                                case 12:
                                    var2 = global;
                                    var5 = var2.setInterval;
                                    var4 = undefined;
                                    var3 = function() { // Environment: var0
                                        _fun91636: for (var _fun91636_ip = 0;;) switch (_fun91636_ip) {
                                            case 0:
                                                var2 = _closure2_slot1;
                                                var0 = null;
                                                if (!(var0 != var2)) {
                                                    _fun91636_ip = 108;
                                                    continue _fun91636
                                                }
                                            case 13:
                                                var0 = global;
                                                var2 = var0.Date;
                                                var0 = var2.now;
                                                var2 = var0.bind(var2)();
                                                var0 = _closure2_slot1;
                                                var4 = var2 - var0;
                                                var0 = _closure2_slot3;
                                                var2 = undefined;
                                                var0 = var0.bind(var2)(var4);
                                                var3 = _closure1_slot10;
                                                if (!(!(var4 > var3))) {
                                                    _fun91636_ip = 89;
                                                    continue _fun91636
                                                }
                                            case 60:
                                                var3 = _closure1_slot11;
                                                if (!(var4 > var3)) {
                                                    _fun91636_ip = 108;
                                                    continue _fun91636
                                                }
                                            case 68:
                                                var4 = _closure2_slot5;
                                                var3 = _closure1_slot19;
                                                var3 = var3.WARN;
                                                var3 = var4.bind(var2)(var3);
                                                _fun91636_ip = 108;
                                                continue _fun91636;
                                            case 89:
                                                var1 = _closure2_slot5;
                                                var0 = _closure1_slot19;
                                                var0 = var0.REALLY_WARN;
                                                var0 = var1.bind(var2)(var0);
                                            case 108:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var2 = 100;
                                    var2 = var5.bind(var4)(var3, var2);
                                    var _closure3_slot0 = var2;
                                    var0 = function() { // Environment: var0
                                        var0 = global;
                                        var2 = var0.clearInterval;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    return var0;
                                case 51:
                                    var4 = _closure2_slot3;
                                    var3 = _closure1_slot8;
                                    var2 = _closure1_slot9;
                                    var3 = var3 + var2;
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var1 = _closure2_slot5;
                                    var0 = _closure1_slot19;
                                    var0 = var0.ENDED;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var6 = var11.bind(var13)(var6, var10);
                        var11 = _closure1_slot4;
                        var10 = var11.useMemo;
                        var6 = new Array(1);
                        var6[0] = var2;
                        var2 = function() { // Environment: var0
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getTimeFormat;
                            var1 = _closure2_slot2;
                            var0 = 1000;
                            var1 = var1 / var0;
                            var0 = {};
                            var4 = false;
                            var0.padMinutes = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var11 = var10.bind(var11)(var2, var6);
                        var10 = _closure1_slot4;
                        var6 = var10.useState;
                        var2 = false;
                        var6 = var6.bind(var10)(var2);
                        var2 = _closure1_slot3;
                        var2 = var2.bind(var3)(var6, var7);
                        var13 = var2[var5];
                        var2 = var2[var4];
                        var _closure2_slot7 = var2;
                        var5 = _closure1_slot4;
                        var4 = var5.useEffect;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = function() { // Environment: var0
                            _fun91639: for (var _fun91639_ip = 0;;) switch (_fun91639_ip) {
                                case 0:
                                    var2 = _closure2_slot4;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun91639_ip = 30;
                                        continue _fun91639
                                    }
                                case 15:
                                    var4 = _closure2_slot7;
                                    var2 = undefined;
                                    var1 = false;
                                    var1 = var4.bind(var2)(var1);
                                    _fun91639_ip = 64;
                                    continue _fun91639;
                                case 30:
                                    var4 = _closure2_slot4;
                                    var1 = _closure1_slot19;
                                    var1 = var1.ENDED;
                                    if (!(var4 === var1)) {
                                        _fun91639_ip = 68;
                                        continue _fun91639
                                    }
                                case 51:
                                    var5 = _closure2_slot7;
                                    var4 = undefined;
                                    var1 = true;
                                    var1 = var5.bind(var4)(var1);
                                case 64:
                                    var1 = undefined;
                                    return var1;
                                case 68:
                                    var1 = _closure1_slot6;
                                    var4 = var1.useReducedMotion;
                                    var1 = 1000;
                                    if (var4) {
                                        _fun91639_ip = 117;
                                        continue _fun91639
                                    }
                                case 87:
                                    var4 = _closure2_slot4;
                                    var2 = _closure1_slot19;
                                    var3 = var2.WARN;
                                    var2 = 250;
                                    if (!(var4 === var3)) {
                                        _fun91639_ip = 114;
                                        continue _fun91639
                                    }
                                case 108:
                                    var2 = 500;
                                case 114:
                                    var1 = var2;
                                case 117:
                                    var _closure3_slot1 = var1;
                                    var2 = function() {
                                        var2 = _closure2_slot7;
                                        var0 = undefined;
                                        var1 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var0 = !var0;
                                            return var0;
                                        };
                                        var1 = var2.bind(var0)(var1);
                                        var1 = global;
                                        var4 = var1.setTimeout;
                                        var3 = _closure3_slot2;
                                        var1 = _closure3_slot1;
                                        var1 = var4.bind(var0)(var3, var1);
                                        var _closure3_slot0 = var1;
                                        return var0;
                                    };
                                    var _closure3_slot2 = var2;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
                                    var0 = function() { // Environment: var0
                                        var0 = global;
                                        var2 = var0.clearTimeout;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    return var0;
                            }
                        };
                        var1 = var4.bind(var5)(var1, var2);
                        var1 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 8;
                        var2 = var7[var4];
                        var5 = var1.bind(var3)(var2);
                        var2 = var5.useAnimatedStyle;
                        var0 = function() {
                            var0 = {};
                            var2 = _closure2_slot0;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0.opacity = var1;
                            return var0;
                        };
                        var6 = {};
                        var6.animationValue = var9;
                        var0.__closure = var6;
                        var6 = 4012974382717.0;
                        var0.__workletHash = var6;
                        var6 = _closure1_slot20;
                        var0.__initData = var6;
                        var9 = var2.bind(var5)(var0);
                        var2 = _closure1_slot14;
                        var0 = 15;
                        var0 = var7[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.ThemeContextProvider;
                        var0 = {};
                        var5 = _closure1_slot13;
                        var5 = var5.DARK;
                        var0.theme = var5;
                        var6 = _closure1_slot15;
                        var5 = _closure1_slot1;
                        var4 = var7[var4];
                        var4 = var5.bind(var3)(var4);
                        var5 = var4.View;
                        var4 = {};
                        var10 = var12.durationContainer;
                        var7 = new Array(2);
                        var7[0] = var10;
                        var7[1] = var9;
                        var4.style = var7;
                        var10 = _closure1_slot14;
                        var9 = _closure1_slot5;
                        var7 = {};
                        var16 = var12.dot;
                        var14 = new Array(2);
                        var14[0] = var16;
                        var16 = null;
                        var16 = var16 != var17;
                        if (!var16) {
                            _fun91631_ip = 493;
                            continue _fun91631
                        }
                    case 490:
                        var16 = !var15;
                    case 493:
                        var15 = !var16;
                        if (var16) {
                            _fun91631_ip = 505;
                            continue _fun91631
                        }
                    case 499:
                        var15 = var12.dotDismissed;
                    case 505:
                        var14[1] = var15;
                        var7.style = var14;
                        var9 = var10.bind(var3)(var9, var7);
                        var7 = new Array(2);
                        var7[0] = var9;
                        var10 = _closure1_slot14;
                        var9 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var8 = 16;
                        var8 = var14[var8];
                        var8 = var9.bind(var3)(var8);
                        var9 = var8.Text;
                        var8 = {};
                        var12 = var12.duration;
                        var8.style = var12;
                        var12 = 'text-sm/semibold';
                        var8.variant = var12;
                        var12 = 'always-white';
                        if (!var13) {
                            _fun91631_ip = 592;
                            continue _fun91631
                        }
                    case 586:
                        var12 = 'text-feedback-critical';
                    case 592:
                        var8.color = var12;
                        var12 = true;
                        var8.tabularNumbers = var12;
                        var8.children = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[1] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot27 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var11 = 0;
            var3 = var5[var11];
            var0 = undefined;
            var3 = var14.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var10 = 1;
            var6 = var5[var10];
            var3 = arg3;
            var7 = var3.bind(var0)(var6);
            var _closure1_slot4 = var7;
            var9 = 2;
            var3 = var5[var9];
            var3 = var4.bind(var0)(var3);
            var8 = var3.ActivityIndicator;
            var3 = var3.View;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var14.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.useVoiceMessagesUIStore;
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.VOICE_RECORDING_MAX_DURATION_MILLIS;
            var _closure1_slot8 = var6;
            var6 = var3.VOICE_RECORDING_MAX_DURATION_OFFSET;
            var _closure1_slot9 = var6;
            var6 = var3.VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS;
            var _closure1_slot10 = var6;
            var6 = var3.VOICE_RECORDING_WARN_DURATION_MILLIS;
            var _closure1_slot11 = var6;
            var3 = var3.WAVEFORM_WAVE_MAX_VALUE;
            var _closure1_slot12 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ThemeTypes;
            var _closure1_slot13 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot14 = var6;
            var3 = var3.jsxs;
            var _closure1_slot15 = var3;
            var3 = 8;
            var3 = var5[var3];
            var6 = var14.bind(var0)(var3);
            var3 = var6.createAnimatedComponent;
            var3 = var3.bind(var6)(var8);
            var _closure1_slot16 = var3;
            var3 = 9;
            var3 = var5[var3];
            var12 = var4.bind(var0)(var3);
            var8 = var12.createStyles;
            var6 = {};
            var3 = {
                'height': '100%',
                'flexDirection': 'row',
                'alignItems': 'center',
                'padding': 12
            };
            var13 = 10;
            var15 = var5[var13];
            var15 = var14.bind(var0)(var15);
            var15 = var15.radii;
            var15 = var15.xxl;
            var3.borderRadius = var15;
            var6.container = var3;
            var3 = {
                'position': 'absolute',
                'left': 12
            };
            var6.loading = var3;
            var3 = {
                'height': 6,
                'width': 6,
                'backgroundColor': null,
                'marginHorizontal': 4,
                'borderRadius': 6
            };
            var15 = var5[var13];
            var15 = var14.bind(var0)(var15);
            var15 = var15.unsafe_rawColors;
            var15 = var15.RED_400;
            var3.backgroundColor = var15;
            var6.dot = var3;
            var3 = {};
            var15 = 'transparent';
            var3.backgroundColor = var15;
            var6.dotDismissed = var3;
            var3 = {
                'flex': 1,
                'height': '100%',
                'overflow': 'hidden',
                'justifyContent': 'flex-end',
                'flexDirection': 'row',
                'alignItems': 'center',
                'marginLeft': 8
            };
            var6.waveformContainer = var3;
            var3 = {};
            var13 = var5[var13];
            var13 = var14.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.WHITE;
            var3.backgroundColor = var13;
            var3.borderRadius = var10;
            var6.waveformBar = var3;
            var3 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var6.durationContainer = var3;
            var13 = {};
            var3 = 11;
            var3 = var5[var3];
            var14 = var4.bind(var0)(var3);
            var3 = var14.isAndroid;
            var15 = var3.bind(var14)();
            var3 = 17;
            var14 = var3;
            if (!var15) {
                _fun91621_ip = 585;
                continue _fun91621
            }
        case 582:
            var14 = 14;
        case 585:
            var13.lineHeight = var14;
            var6.duration = var13;
            var6 = var8.bind(var12)(var6);
            var _closure1_slot17 = var6;
            var6 = {};
            var8 = 'function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}';
            var6.code = var8;
            var _closure1_slot18 = var6;
            var6 = {};
            var6.WARN = var11;
            var8 = 'WARN';
            var6[var11] = var8;
            var6.REALLY_WARN = var10;
            var8 = 'REALLY_WARN';
            var6[var10] = var8;
            var6.ENDED = var9;
            var8 = 'ENDED';
            var6[var9] = var8;
            var _closure1_slot19 = var6;
            var6 = {};
            var8 = 'function VoiceMessageChatTsx2(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}';
            var6.code = var8;
            var _closure1_slot20 = var6;
            var6 = {};
            var8 = 'function VoiceMessageChatTsx3(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}';
            var6.code = var8;
            var _closure1_slot21 = var6;
            var6 = {};
            var8 = 'function VoiceMessageChatTsx4(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}';
            var6.code = var8;
            var _closure1_slot22 = var6;
            var6 = {};
            var8 = 'function VoiceMessageChatTsx5(){const{initialAnimation,backgroundColor}=this.__closure;return{width:80+20*initialAnimation.get()+"%",backgroundColor:backgroundColor.get()};}';
            var6.code = var8;
            var _closure1_slot23 = var6;
            var6 = {};
            var8 = 'function VoiceMessageChatTsx6(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}';
            var6.code = var8;
            var _closure1_slot24 = var6;
            var6 = var7.memo;
            var1 = function(arg0) { // Environment: var1
                _fun91644: for (var _fun91644_ip = 0;;) switch (_fun91644_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.isRecording;
                        var _closure2_slot0 = var4;
                        var15 = var0.initialAnimation;
                        var _closure2_slot1 = var15;
                        var14 = var0.backgroundColor;
                        var _closure2_slot2 = var14;
                        var0 = _closure1_slot17;
                        var3 = undefined;
                        var10 = var0.bind(var3)();
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 8;
                        var2 = var6[var0];
                        var7 = var8.bind(var3)(var2);
                        var2 = var7.useSharedValue;
                        var9 = 0;
                        var12 = var2.bind(var7)(var9);
                        var _closure2_slot3 = var12;
                        var13 = _closure1_slot4;
                        var11 = var13.useEffect;
                        var7 = new Array(2);
                        var7[0] = var12;
                        var7[1] = var4;
                        var2 = function() { // Environment: var1
                            _fun91645: for (var _fun91645_ip = 0;;) switch (_fun91645_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var0 = undefined;
                                    if (var2) {
                                        _fun91645_ip = 54;
                                        continue _fun91645
                                    }
                                case 14:
                                    var2 = global;
                                    var4 = var2.setTimeout;
                                    var3 = function() { // Environment: var1
                                        var3 = _closure2_slot3;
                                        var2 = var3.set;
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var0 = 13;
                                        var1 = var8[var0];
                                        var0 = undefined;
                                        var6 = var7.bind(var0)(var1);
                                        var5 = var6.withTiming;
                                        var4 = {};
                                        var1 = 8;
                                        var1 = var8[var1];
                                        var1 = var7.bind(var0)(var1);
                                        var1 = var1.Easing;
                                        var1 = var1.quad;
                                        var4.easing = var1;
                                        var1 = 200;
                                        var4.duration = var1;
                                        var1 = 1;
                                        var1 = var5.bind(var6)(var1, var4);
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var2 = 1000;
                                    var2 = var4.bind(var0)(var3, var2);
                                    var _closure3_slot0 = var2;
                                    var1 = function() { // Environment: var1
                                        var0 = global;
                                        var2 = var0.clearTimeout;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    return var1;
                                case 54:
                                    return var0;
                            }
                        };
                        var2 = var11.bind(var13)(var2, var7);
                        var2 = var6[var0];
                        var7 = var8.bind(var3)(var2);
                        var2 = var7.useSharedValue;
                        var9 = var2.bind(var7)(var9);
                        var _closure2_slot4 = var9;
                        var2 = var6[var0];
                        var13 = var8.bind(var3)(var2);
                        var11 = var13.useAnimatedReaction;
                        var7 = function() {
                            _fun91648: for (var _fun91648_ip = 0;;) switch (_fun91648_ip) {
                                case 0:
                                    var2 = _closure2_slot1;
                                    var0 = var2.get;
                                    var2 = var0.bind(var2)();
                                    var0 = 1;
                                    var0 = var0 === var2;
                                    if (!var0) {
                                        _fun91648_ip = 30;
                                        continue _fun91648
                                    }
                                case 26:
                                    var0 = _closure2_slot0;
                                case 30:
                                    return var0;
                            }
                        };
                        var2 = {};
                        var2.initialAnimation = var15;
                        var2.isRecording = var4;
                        var7.__closure = var2;
                        var2 = 7599681139161.0;
                        var7.__workletHash = var2;
                        var2 = _closure1_slot21;
                        var7.__initData = var2;
                        var2 = function arg0, arg1() {
                            _fun91649: for (var _fun91649_ip = 0;;) switch (_fun91649_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2;
                                    if (!var0) {
                                        _fun91649_ip = 16;
                                        continue _fun91649
                                    }
                                case 9:
                                    var1 = arg1;
                                    var0 = var2 !== var1;
                                case 16:
                                    if (!var0) {
                                        _fun91649_ip = 129;
                                        continue _fun91649
                                    }
                                case 19:
                                    var3 = _closure2_slot4;
                                    var2 = var3.set;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var1 = 13;
                                    var1 = var9[var1];
                                    var7 = undefined;
                                    var6 = var8.bind(var7)(var1);
                                    var5 = var6.withTiming;
                                    var4 = {};
                                    var1 = 8;
                                    var1 = var9[var1];
                                    var1 = var8.bind(var7)(var1);
                                    var1 = var1.Easing;
                                    var1 = var1.quad;
                                    var4.easing = var1;
                                    var1 = 200;
                                    var4.duration = var1;
                                    var1 = 1;
                                    var1 = var5.bind(var6)(var1, var4);
                                    var1 = var2.bind(var3)(var1);
                                    var2 = _closure2_slot3;
                                    var1 = var2.set;
                                    var0 = 0;
                                    var0 = var1.bind(var2)(var0);
                                case 129:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var16 = {};
                        var16.animationValue = var9;
                        var17 = 13;
                        var17 = var6[var17];
                        var17 = var8.bind(var3)(var17);
                        var17 = var17.withTiming;
                        var16.withTiming = var17;
                        var17 = var6[var0];
                        var17 = var8.bind(var3)(var17);
                        var17 = var17.Easing;
                        var16.Easing = var17;
                        var16.loadingOpacity = var12;
                        var2.__closure = var16;
                        var16 = 7661977794788.0;
                        var2.__workletHash = var16;
                        var16 = _closure1_slot22;
                        var2.__initData = var16;
                        var2 = var11.bind(var13)(var7, var2);
                        var2 = var6[var0];
                        var11 = var8.bind(var3)(var2);
                        var7 = var11.useAnimatedStyle;
                        var2 = function() {
                            var0 = {};
                            var3 = _closure2_slot1;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 20;
                            var3 = var2 * var3;
                            var2 = 80;
                            var3 = var2 + var3;
                            var2 = '%';
                            var2 = var3 + var2;
                            var0.width = var2;
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0.backgroundColor = var1;
                            return var0;
                        };
                        var13 = {};
                        var13.initialAnimation = var15;
                        var13.backgroundColor = var14;
                        var2.__closure = var13;
                        var13 = 9739486182352.0;
                        var2.__workletHash = var13;
                        var13 = _closure1_slot23;
                        var2.__initData = var13;
                        var7 = var7.bind(var11)(var2);
                        var2 = var6[var0];
                        var8 = var8.bind(var3)(var2);
                        var2 = var8.useAnimatedStyle;
                        var1 = function() {
                            var0 = {};
                            var2 = _closure2_slot3;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0.opacity = var1;
                            return var0;
                        };
                        var11 = {};
                        var11.loadingOpacity = var12;
                        var1.__closure = var11;
                        var11 = 17421928475897.0;
                        var1.__workletHash = var11;
                        var11 = _closure1_slot24;
                        var1.__initData = var11;
                        var11 = var2.bind(var8)(var1);
                        var2 = _closure1_slot15;
                        var1 = _closure1_slot1;
                        var0 = var6[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.View;
                        var0 = {};
                        var8 = var10.container;
                        var6 = new Array(2);
                        var6[0] = var8;
                        var6[1] = var7;
                        var0.style = var6;
                        var6 = null;
                        if (var4) {
                            _fun91644_ip = 573;
                            continue _fun91644
                        }
                    case 492:
                        var8 = _closure1_slot14;
                        var7 = _closure1_slot16;
                        var4 = {};
                        var12 = var10.loading;
                        var10 = new Array(2);
                        var10[0] = var12;
                        var10[1] = var11;
                        var4.style = var10;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 10;
                        var10 = var12[var10];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.unsafe_rawColors;
                        var10 = var10.WHITE;
                        var4.color = var10;
                        var10 = 'small';
                        var4.size = var10;
                        var6 = var8.bind(var3)(var7, var4);
                    case 573:
                        var4 = new Array(3);
                        var4[0] = var6;
                        var8 = _closure1_slot14;
                        var7 = _closure1_slot27;
                        var6 = {};
                        var6.animationValue = var9;
                        var6 = var8.bind(var3)(var7, var6);
                        var4[1] = var6;
                        var7 = _closure1_slot14;
                        var6 = _closure1_slot26;
                        var5 = {};
                        var5 = var7.bind(var3)(var6, var5);
                        var4[2] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var6.bind(var7)(var1);
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/voice_messages/native/components/VoiceMessageChat.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 11672, 11673, 660, 33, 3721, 1297, 671, 478, 4081, 4097, 4122, 3161, 4878, 2]);