// modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun111034: for (var _fun111034_ip = 0;;) switch (_fun111034_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun111034_ip = 46;
                    continue _fun111034
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun111034_ip = 55;
                    continue _fun111034
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun111034_ip = 345;
                    continue _fun111034
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun111034_ip = 323;
                    continue _fun111034
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun111034_ip = 283;
                    continue _fun111034
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun111034_ip = 270;
                    continue _fun111034
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun111034_ip = 163;
                    continue _fun111034
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun111034_ip = 179;
                    continue _fun111034
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun111034_ip = 249;
                    continue _fun111034
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun111034_ip = 249;
                    continue _fun111034
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun111034_ip = 234;
                    continue _fun111034
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun111034_ip = 247;
                    continue _fun111034
                }
            case 234:
                var8 = _closure1_slot20;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun111034_ip = 265;
                continue _fun111034;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun111034_ip = 283;
                continue _fun111034;
            case 270:
                var6 = _closure1_slot20;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun111034_ip = 323;
                    continue _fun111034
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun111034_ip = 330;
                    continue _fun111034
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun111035: for (var _fun111035_ip = 0;;) switch (_fun111035_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun111035_ip = 56;
                                continue _fun111035
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun111035_ip = 67;
                            continue _fun111035;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun111036: for (var _fun111036_ip = 0;;) switch (_fun111036_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun111036_ip = 23;
                    continue _fun111036
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun111036_ip = 33;
                    continue _fun111036
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun111036_ip = 70;
                    continue _fun111036
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun111036_ip = 55;
                    continue _fun111036
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = ['ref'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.setVoiceUpsellDismissed;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var8 = var5[var3];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RouteTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var7 = var3.Fragment;
    var _closure1_slot15 = var7;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = new Array(0);
    var _closure1_slot17 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var3 = var0.targetRef;
        var2 = var0.canShowTooltip;
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 10;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var4.bind(var1)(var0);
        var0 = var0.bind(var1)(var3, var2);
        var0 = null;
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot18 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun111038: for (var _fun111038_ip = 0;;) switch (_fun111038_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.isConnectedToVoiceChannel;
                var _closure2_slot0 = var13;
                var11 = var0.channelId;
                var _closure2_slot1 = var11;
                var0 = var0.style;
                var _closure2_slot2 = var0;
                var2 = undefined;
                var _closure2_slot5 = var2;
                var _closure2_slot6 = var2;
                var _closure2_slot9 = var2;
                var _closure2_slot11 = var2;
                var _closure2_slot13 = var2;
                var _closure2_slot14 = var2;
                var _closure2_slot15 = var2;
                var _closure2_slot16 = var2;
                var1 = function arg0() {
                    _fun111039: for (var _fun111039_ip = 0;;) switch (_fun111039_ip) {
                        case 0:
                            var2 = arg0;
                            var13 = null;
                            if (!(var13 == var2)) {
                                _fun111039_ip = 31;
                                continue _fun111039
                            }
                        case 9:
                            var0 = {};
                            var1 = _closure2_slot14;
                            var0.onPress = var1;
                            var1 = undefined;
                            var0.ref = var1;
                            var2 = var0;
                        case 31:
                            var14 = var2.ref;
                            var1 = _closure1_slot4;
                            var0 = _closure1_slot3;
                            var3 = undefined;
                            var12 = var1.bind(var3)(var2, var0);
                            var2 = _closure1_slot16;
                            var1 = _closure1_slot15;
                            var0 = {};
                            var6 = _closure1_slot14;
                            var5 = _closure1_slot18;
                            var4 = {};
                            var7 = _closure2_slot16;
                            var4.targetRef = var7;
                            var7 = _closure2_slot13;
                            if (!var7) {
                                _fun111039_ip = 98;
                                continue _fun111039
                            }
                        case 94:
                            var7 = _closure2_slot0;
                        case 98:
                            var4.canShowTooltip = var7;
                            var5 = var6.bind(var3)(var5, var4);
                            var4 = new Array(2);
                            var4[0] = var5;
                            var7 = _closure1_slot14;
                            var9 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var5 = 28;
                            var5 = var15[var5];
                            var6 = var9.bind(var3)(var5);
                            var5 = {};
                            var8 = _closure2_slot2;
                            var5.style = var8;
                            var8 = _closure2_slot16;
                            var5.ref = var8;
                            var8 = 29;
                            var8 = var15[var8];
                            var9 = var9.bind(var3)(var8);
                            var8 = {};
                            var8.ref = var14;
                            var17 = var8;
                            var16 = var12;
                            var12 = copyDataProperties(var17, var16);
                            var12 = _closure2_slot0;
                            var14 = undefined;
                            if (!var12) {
                                _fun111039_ip = 211;
                                continue _fun111039
                            }
                        case 196:
                            var12 = _closure2_slot6;
                            var14 = undefined;
                            if (!var12) {
                                _fun111039_ip = 211;
                                continue _fun111039
                            }
                        case 205:
                            var14 = 'primary-overlay';
                        case 211:
                            var12 = 'overrideVariant';
                            var8[var12] = var14;
                            var12 = _closure2_slot9;
                            var14 = var13 != var12;
                            var12 = 'loading';
                            var8[var12] = var14;
                            var12 = _closure2_slot11;
                            if (!(var13 == var12)) {
                                _fun111039_ip = 251;
                                continue _fun111039
                            }
                        case 245:
                            var12 = _closure2_slot5;
                            _fun111039_ip = 255;
                            continue _fun111039;
                        case 251:
                            var12 = _closure2_slot11;
                        case 255:
                            var11 = 'icon';
                            var8[var11] = var12;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var10 = 21;
                            var11 = var14[var10];
                            var11 = var13.bind(var3)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10.dnI0AL;
                            var11 = var11.bind(var12)(var10);
                            var10 = 'accessibilityLabel';
                            var8[var10] = var11;
                            var8 = var7.bind(var3)(var9, var8);
                            var5.children = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var4[1] = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 11;
                var0 = var12[var0];
                var0 = var8.bind(var2)(var0);
                var9 = var0.bind(var2)();
                var _closure2_slot3 = var9;
                var7 = _closure1_slot0;
                var0 = 12;
                var0 = var12[var0];
                var3 = var7.bind(var2)(var0);
                var0 = var3.useMaskedSpeakerStates;
                var0 = var0.bind(var3)();
                var5 = var0.toggleAudio;
                var _closure2_slot4 = var5;
                var3 = var0.routeSource;
                _closure2_slot5 = var3;
                var0 = var0.isAudioRouteEnabled;
                _closure2_slot6 = var0;
                var0 = 13;
                var0 = var12[var0];
                var0 = var8.bind(var2)(var0);
                var3 = var0.bind(var2)();
                var _closure2_slot7 = var3;
                var0 = 14;
                var0 = var12[var0];
                var0 = var8.bind(var2)(var0);
                var0 = var0.bind(var2)();
                var _closure2_slot8 = var0;
                var10 = 15;
                var0 = var12[var10];
                var16 = var7.bind(var2)(var0);
                var15 = var16.useStateFromStores;
                var0 = _closure1_slot8;
                var14 = new Array(1);
                var14[0] = var0;
                var0 = function() { // Environment: var4
                    var1 = _closure1_slot8;
                    var0 = var1.getAwaitingRemoteSessionInfo;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var15.bind(var16)(var14, var0);
                _closure2_slot9 = var16;
                var0 = var12[var10];
                var15 = var7.bind(var2)(var0);
                var14 = var15.useStateFromStores;
                var0 = _closure1_slot12;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var4
                    _fun111041: for (var _fun111041_ip = 0;;) switch (_fun111041_ip) {
                        case 0:
                            var2 = _closure1_slot12;
                            var1 = var2.getSessionById;
                            var3 = _closure2_slot8;
                            var0 = null;
                            var5 = var0 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun111041_ip = 41;
                                continue _fun111041
                            }
                        case 31:
                            var4 = _closure2_slot8;
                            var3 = var4.sessionId;
                        case 41:
                            var4 = var0 != var3;
                            var0 = '';
                            if (!var4) {
                                _fun111041_ip = 55;
                                continue _fun111041
                            }
                        case 52:
                            var0 = var3;
                        case 55:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0 = var14.bind(var15)(var7, var0);
                var _closure2_slot10 = var0;
                var15 = _closure1_slot5;
                var14 = var15.useMemo;
                var7 = new Array(2);
                var7[0] = var16;
                var7[1] = var0;
                var0 = function() { // Environment: var4
                    _fun111042: for (var _fun111042_ip = 0;;) switch (_fun111042_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var0 = null;
                            var1 = var0 == var1;
                            var3 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun111042_ip = 29;
                                continue _fun111042
                            }
                        case 20:
                            var1 = _closure2_slot9;
                            var2 = var1.type;
                        case 29:
                            if (!(var0 == var2)) {
                                _fun111042_ip = 74;
                                continue _fun111042
                            }
                        case 33:
                            var1 = _closure2_slot10;
                            var5 = var0 == var1;
                            var1 = undefined;
                            if (var5) {
                                _fun111042_ip = 71;
                                continue _fun111042
                            }
                        case 46:
                            var4 = _closure2_slot10;
                            var4 = var4.clientInfo;
                            var5 = var0 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun111042_ip = 71;
                                continue _fun111042
                            }
                        case 65:
                            var1 = var4.os;
                        case 71:
                            var2 = var1;
                        case 74:
                            var1 = var0 != var2;
                            var0 = null;
                            if (!var1) {
                                _fun111042_ip = 111;
                                continue _fun111042
                            }
                        case 83:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 16;
                            var1 = var5[var1];
                            var1 = var4.bind(var3)(var1);
                            var0 = var1.bind(var3)(var2);
                        case 111:
                            return var0;
                    }
                };
                var0 = var14.bind(var15)(var0, var7);
                _closure2_slot11 = var0;
                var0 = 17;
                var0 = var12[var0];
                var0 = var8.bind(var2)(var0);
                var14 = var0.bind(var2)();
                var _closure2_slot12 = var14;
                var7 = var14.length;
                var0 = 0;
                var0 = var7 > var0;
                var7 = 18;
                var7 = var12[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.bind(var2)(var11);
                var12 = var7.canConnect;
                var7 = var7.isAtMaxCapacity;
                if (!var12) {
                    _fun111038_ip = 394;
                    continue _fun111038
                }
            case 391:
                var12 = !var7;
            case 394:
                if (!var12) {
                    _fun111038_ip = 409;
                    continue _fun111038
                }
            case 397:
                var7 = var13;
                if (var13) {
                    _fun111038_ip = 406;
                    continue _fun111038
                }
            case 403:
                var7 = var0;
            case 406:
                var12 = var7;
            case 409:
                _closure2_slot13 = var12;
                var7 = _closure1_slot5;
                var15 = var7.useCallback;
                var8 = new Array(3);
                var8[0] = var11;
                var8[1] = var13;
                var8[2] = var5;
                var5 = function() { // Environment: var4
                    _fun111043: for (var _fun111043_ip = 0;;) switch (_fun111043_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 19;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun111043_ip = 61;
                                continue _fun111043
                            }
                        case 38:
                            var4 = _closure2_slot4;
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot0;
                            var2 = var4.bind(var0)(var3, var2);
                            _fun111043_ip = 104;
                            continue _fun111043;
                        case 61:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 20;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.showAudioOutputSelector;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2, var1);
                        case 104:
                            return var0;
                    }
                };
                var5 = var15.bind(var7)(var5, var8);
                _closure2_slot14 = var5;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var15 = var8.bind(var2)(var5);
                var10 = var15.useStateFromStores;
                var5 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var4
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentRouteType;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var10.bind(var15)(var8, var5);
                _closure2_slot15 = var10;
                var8 = var7.useMemo;
                var5 = new Array(5);
                var5[0] = var14;
                var5[1] = var11;
                var5[2] = var13;
                var5[3] = var10;
                var5[4] = var3;
                var3 = function() { // Environment: var4
                    _fun111045: for (var _fun111045_ip = 0;;) switch (_fun111045_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 19;
                            var1 = var4[var1];
                            var6 = undefined;
                            var2 = var2.bind(var6)(var1);
                            var1 = var2.isAndroid;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun111045_ip = 521;
                                continue _fun111045
                            }
                        case 43:
                            var1 = _closure2_slot12;
                            var4 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var4)) {
                                _fun111045_ip = 521;
                                continue _fun111045
                            }
                        case 64:
                            var1 = new Array(0);
                            var _closure3_slot0 = var1;
                            var4 = _closure2_slot7;
                            if (var4) {
                                _fun111045_ip = 97;
                                continue _fun111045
                            }
                        case 79:
                            var7 = _closure2_slot15;
                            var5 = _closure1_slot10;
                            var5 = var5.SPEAKER;
                            var4 = var7 !== var5;
                        case 97:
                            if (var4) {
                                _fun111045_ip = 212;
                                continue _fun111045
                            }
                        case 100:
                            var5 = var1.push;
                            var4 = {};
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 21;
                            var8 = var9[var7];
                            var8 = var11.bind(var6)(var8);
                            var10 = var8.intl;
                            var8 = var10.string;
                            var7 = var9[var7];
                            var7 = var11.bind(var6)(var7);
                            var7 = var7.t;
                            var7 = var7.gvQIzx;
                            var7 = var8.bind(var10)(var7);
                            var4.label = var7;
                            var8 = _closure1_slot1;
                            var7 = 22;
                            var7 = var9[var7];
                            var7 = var8.bind(var6)(var7);
                            var4.iconSource = var7;
                            var7 = false;
                            var4.showIconFirst = var7;
                            var7 = function() {
                                _fun111046: for (var _fun111046_ip = 0;;) switch (_fun111046_ip) {
                                    case 0:
                                        var0 = _closure1_slot6;
                                        var3 = var0.AudioRoutePicker;
                                        var0 = null;
                                        var1 = var0 == var3;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun111046_ip = 37;
                                            continue _fun111046
                                        }
                                    case 24:
                                        var2 = var3.toggleSpeaker;
                                        var1 = false;
                                        var0 = var2.bind(var3)(var1);
                                    case 37:
                                        return var0;
                                }
                            };
                            var4.action = var7;
                            var4 = var5.bind(var1)(var4);
                        case 212:
                            var4 = _closure2_slot7;
                            if (var4) {
                                _fun111045_ip = 237;
                                continue _fun111045
                            }
                        case 219:
                            var7 = _closure2_slot15;
                            var5 = _closure1_slot10;
                            var5 = var5.RECEIVER;
                            var4 = var7 !== var5;
                        case 237:
                            if (var4) {
                                _fun111045_ip = 352;
                                continue _fun111045
                            }
                        case 240:
                            var5 = var1.push;
                            var4 = {};
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 21;
                            var8 = var9[var7];
                            var8 = var11.bind(var6)(var8);
                            var10 = var8.intl;
                            var8 = var10.string;
                            var7 = var9[var7];
                            var7 = var11.bind(var6)(var7);
                            var7 = var7.t;
                            var7 = var7.wwTN1g;
                            var7 = var8.bind(var10)(var7);
                            var4.label = var7;
                            var8 = _closure1_slot1;
                            var7 = 23;
                            var7 = var9[var7];
                            var7 = var8.bind(var6)(var7);
                            var4.iconSource = var7;
                            var7 = false;
                            var4.showIconFirst = var7;
                            var7 = function() {
                                _fun111047: for (var _fun111047_ip = 0;;) switch (_fun111047_ip) {
                                    case 0:
                                        var0 = _closure1_slot6;
                                        var3 = var0.AudioRoutePicker;
                                        var0 = null;
                                        var1 = var0 == var3;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun111047_ip = 37;
                                            continue _fun111047
                                        }
                                    case 24:
                                        var2 = var3.toggleSpeaker;
                                        var1 = true;
                                        var0 = var2.bind(var3)(var1);
                                    case 37:
                                        return var0;
                                }
                            };
                            var4.action = var7;
                            var4 = var5.bind(var1)(var4);
                        case 352:
                            var5 = var1.push;
                            var4 = {};
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 21;
                            var8 = var9[var7];
                            var8 = var11.bind(var6)(var8);
                            var10 = var8.intl;
                            var8 = var10.string;
                            var7 = var9[var7];
                            var7 = var11.bind(var6)(var7);
                            var7 = var7.t;
                            var7 = var7.dnI0AL;
                            var7 = var8.bind(var10)(var7);
                            var4.label = var7;
                            var8 = _closure1_slot1;
                            var7 = 24;
                            var7 = var9[var7];
                            var7 = var8.bind(var6)(var7);
                            var4.iconSource = var7;
                            var7 = false;
                            var4.showIconFirst = var7;
                            var7 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 20;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.showAudioOutputSelector;
                                var2 = _closure2_slot1;
                                var1 = _closure2_slot0;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var4.action = var7;
                            var4 = var5.bind(var1)(var4);
                            var5 = function arg0() {
                                _fun111049: for (var _fun111049_ip = 0;;) switch (_fun111049_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var _closure4_slot0 = var4;
                                        var1 = var4.type;
                                        var0 = _closure1_slot13;
                                        var0 = var0.XBOX;
                                        if (!(var1 === var0)) {
                                            _fun111049_ip = 163;
                                            continue _fun111049
                                        }
                                    case 34:
                                        var2 = _closure3_slot0;
                                        var1 = var2.push;
                                        var0 = {};
                                        var11 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var6 = 21;
                                        var7 = var9[var6];
                                        var8 = undefined;
                                        var7 = var11.bind(var8)(var7);
                                        var10 = var7.intl;
                                        var7 = var10.string;
                                        var6 = var9[var6];
                                        var6 = var11.bind(var8)(var6);
                                        var6 = var6.t;
                                        var6 = var6["qVE/VF"];
                                        var6 = var7.bind(var10)(var6);
                                        var0.label = var6;
                                        var7 = _closure1_slot1;
                                        var6 = 16;
                                        var6 = var9[var6];
                                        var7 = var7.bind(var8)(var6);
                                        var6 = var4.type;
                                        var6 = var7.bind(var8)(var6);
                                        var0.iconSource = var6;
                                        var6 = false;
                                        var0.showIconFirst = var6;
                                        var6 = function() {
                                            _fun111050: for (var _fun111050_ip = 0;;) switch (_fun111050_ip) {
                                                case 0:
                                                    var3 = _closure1_slot11;
                                                    var2 = var3.getChannel;
                                                    var1 = _closure2_slot1;
                                                    var3 = var2.bind(var3)(var1);
                                                    var1 = null;
                                                    if (!(var1 != var3)) {
                                                        _fun111050_ip = 71;
                                                        continue _fun111050
                                                    }
                                                case 30:
                                                    var2 = _closure1_slot0;
                                                    var1 = _closure1_slot2;
                                                    var0 = 25;
                                                    var1 = var1[var0];
                                                    var0 = undefined;
                                                    var2 = var2.bind(var0)(var1);
                                                    var1 = var2.onConnectToConsole;
                                                    var0 = _closure4_slot0;
                                                    var0 = var1.bind(var2)(var3, var0);
                                                case 71:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0.action = var6;
                                        var0 = var1.bind(var2)(var0);
                                    case 163:
                                        var1 = var4.type;
                                        var0 = _closure1_slot13;
                                        var0 = var0.PLAYSTATION;
                                        if (!(var1 === var0)) {
                                            _fun111049_ip = 314;
                                            continue _fun111049
                                        }
                                    case 185:
                                        var2 = _closure3_slot0;
                                        var1 = var2.push;
                                        var0 = {};
                                        var11 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var7 = 21;
                                        var9 = var8[var7];
                                        var6 = undefined;
                                        var9 = var11.bind(var6)(var9);
                                        var10 = var9.intl;
                                        var9 = var10.string;
                                        var7 = var8[var7];
                                        var7 = var11.bind(var6)(var7);
                                        var7 = var7.t;
                                        var7 = var7.vzfxmY;
                                        var7 = var9.bind(var10)(var7);
                                        var0.label = var7;
                                        var7 = _closure1_slot1;
                                        var5 = 16;
                                        var5 = var8[var5];
                                        var5 = var7.bind(var6)(var5);
                                        var4 = var4.type;
                                        var4 = var5.bind(var6)(var4);
                                        var0.iconSource = var4;
                                        var4 = false;
                                        var0.showIconFirst = var4;
                                        var3 = function() {
                                            _fun111051: for (var _fun111051_ip = 0;;) switch (_fun111051_ip) {
                                                case 0:
                                                    var3 = _closure1_slot11;
                                                    var2 = var3.getChannel;
                                                    var1 = _closure2_slot1;
                                                    var3 = var2.bind(var3)(var1);
                                                    var1 = null;
                                                    if (!(var1 != var3)) {
                                                        _fun111051_ip = 71;
                                                        continue _fun111051
                                                    }
                                                case 30:
                                                    var2 = _closure1_slot0;
                                                    var1 = _closure1_slot2;
                                                    var0 = 25;
                                                    var1 = var1[var0];
                                                    var0 = undefined;
                                                    var2 = var2.bind(var0)(var1);
                                                    var1 = var2.onConnectToConsole;
                                                    var0 = _closure4_slot0;
                                                    var0 = var1.bind(var2)(var3, var0);
                                                case 71:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0.action = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 314:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = _closure1_slot19;
                            var2 = _closure2_slot12;
                            var4 = var3.bind(var6)(var2);
                            var3 = var4.bind(var6)();
                            var2 = var3.done;
                            if (var2) {
                                _fun111045_ip = 519;
                                continue _fun111045
                            }
                        case 494:
                            var2 = var3.value;
                            var2 = var5.bind(var6)(var2);
                            var7 = var4.bind(var6)();
                            var2 = var7.done;
                            var3 = var7;
                            if (!var2) {
                                _fun111045_ip = 494;
                                continue _fun111045
                            }
                        case 519:
                            return var1;
                        case 521:
                            var0 = _closure1_slot17;
                            return var0;
                    }
                };
                var11 = var8.bind(var7)(var3, var5);
                var8 = var7.useCallback;
                var5 = new Array(1);
                var5[0] = var9;
                var3 = function() { // Environment: var4
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 26;
                    var2 = var6[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 27;
                    var2 = var6[var2];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.DONUT_MOBILE_NUX;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure1_slot7;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure2_slot3;
                    var1 = var2.lock;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var10 = var8.bind(var7)(var3, var5);
                var5 = var7.useRef;
                var3 = null;
                var14 = var5.bind(var7)(var3);
                _closure2_slot16 = var14;
                if (var12) {
                    _fun111038_ip = 595;
                    continue _fun111038
                }
            case 593:
                return var3;
            case 595:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 19;
                var3 = var5[var3];
                var4 = var4.bind(var2)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun111038_ip = 779;
                    continue _fun111038
                }
            case 631:
                if (!var0) {
                    _fun111038_ip = 779;
                    continue _fun111038
                }
            case 637:
                var4 = _closure1_slot16;
                var3 = _closure1_slot15;
                var0 = {};
                var8 = _closure1_slot14;
                var7 = _closure1_slot18;
                var5 = {};
                var5.targetRef = var14;
                if (!var12) {
                    _fun111038_ip = 668;
                    continue _fun111038
                }
            case 665:
                var12 = var13;
            case 668:
                var5.canShowTooltip = var12;
                var7 = var8.bind(var2)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot14;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 30;
                var6 = var12[var6];
                var6 = var7.bind(var2)(var6);
                var7 = var6.MenuPopout;
                var6 = {
                    'menuItems': null,
                    'position': 'bottom',
                    'align': 'end'
                };
                var6.menuItems = var11;
                var6.onRequestOpen = var10;
                var9 = var9.unlock;
                var6.onRequestClose = var9;
                var6.children = var1;
                var6 = var8.bind(var2)(var7, var6);
                var5[1] = var6;
                var0.children = var5;
                var0 = var4.bind(var2)(var3, var0);
                _fun111038_ip = 783;
                continue _fun111038;
            case 779:
                var0 = var1.bind(var2)();
            case 783:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 8676, 3510, 8200, 1372, 3511, 660, 33, 14286, 14251, 8197, 8305, 8286, 632, 8303, 8285, 14288, 478, 8221, 1234, 8218, 8220, 14289, 8287, 3203, 1358, 6452, 14262, 4921, 2]);