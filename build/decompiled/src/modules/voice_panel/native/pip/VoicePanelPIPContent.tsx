// modules/voice_panel/native/pip/VoicePanelPIPContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun111872: for (var _fun111872_ip = 0;;) switch (_fun111872_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun111872_ip = 46;
                    continue _fun111872
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun111872_ip = 55;
                    continue _fun111872
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun111872_ip = 345;
                    continue _fun111872
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun111872_ip = 323;
                    continue _fun111872
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun111872_ip = 283;
                    continue _fun111872
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun111872_ip = 270;
                    continue _fun111872
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
                    _fun111872_ip = 163;
                    continue _fun111872
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun111872_ip = 179;
                    continue _fun111872
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun111872_ip = 249;
                    continue _fun111872
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun111872_ip = 249;
                    continue _fun111872
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun111872_ip = 234;
                    continue _fun111872
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun111872_ip = 247;
                    continue _fun111872
                }
            case 234:
                var8 = _closure1_slot33;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun111872_ip = 265;
                continue _fun111872;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun111872_ip = 283;
                continue _fun111872;
            case 270:
                var6 = _closure1_slot33;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun111872_ip = 323;
                    continue _fun111872
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
                    _fun111872_ip = 330;
                    continue _fun111872
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun111873: for (var _fun111873_ip = 0;;) switch (_fun111873_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun111873_ip = 56;
                                continue _fun111873
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
                            _fun111873_ip = 67;
                            continue _fun111873;
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
    var _closure1_slot32 = var0;
    var0 = function arg0, arg1() {
        _fun111874: for (var _fun111874_ip = 0;;) switch (_fun111874_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun111874_ip = 23;
                    continue _fun111874
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun111874_ip = 33;
                    continue _fun111874
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
                    _fun111874_ip = 70;
                    continue _fun111874
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun111874_ip = 55;
                    continue _fun111874
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var8 = _closure1_slot4;
        var7 = var8.useContext;
        var1 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 18;
        var6 = var5[var3];
        var3 = undefined;
        var6 = var1.bind(var3)(var6);
        var6 = var7.bind(var8)(var6);
        var8 = var6.streamOutputSinkStack;
        var9 = var4.streamId;
        var _closure2_slot0 = var9;
        var7 = _closure1_slot0;
        var6 = 19;
        var6 = var5[var6];
        var7 = var7.bind(var3)(var6);
        var6 = var7.useSetHasActiveVideoOutputSink;
        var10 = var6.bind(var7)(var8);
        var _closure2_slot1 = var10;
        var8 = _closure1_slot4;
        var7 = var8.useEffect;
        var6 = new Array(2);
        var6[0] = var10;
        var6[1] = var9;
        var2 = function() { // Environment: var2
            _fun111876: for (var _fun111876_ip = 0;;) switch (_fun111876_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun111876_ip = 17;
                        continue _fun111876
                    }
                case 13:
                    var1 = undefined;
                    return var1;
                case 17:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = true;
                    var0 = var3.bind(var1)(var2, var0);
                    var0 = function() { // Environment: var0
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot0;
                        var0 = undefined;
                        var1 = false;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var2 = var7.bind(var8)(var2, var6);
        var2 = _closure1_slot21;
        var0 = 20;
        var0 = var5[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var12 = var0;
        var11 = var4;
        var4 = copyDataProperties(var12, var11);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 21;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.ComponentDispatch;
        var2 = var3.dispatch;
        var1 = _closure1_slot16;
        var1 = var1.VOICE_PANEL_PIP_CONTENT_READY;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun111879: for (var _fun111879_ip = 0;;) switch (_fun111879_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var7 = arg2;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var7;
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var7;
                var3 = function() { // Environment: var3
                    _fun111880: for (var _fun111880_ip = 0;;) switch (_fun111880_ip) {
                        case 0:
                            var4 = function() {
                                var1 = global;
                                var3 = var1.clearTimeout;
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = var1.setTimeout;
                                var2 = function() { // Environment: var1
                                    _fun111882: for (var _fun111882_ip = 0;;) switch (_fun111882_ip) {
                                        case 0:
                                            var2 = _closure2_slot1;
                                            var0 = null;
                                            var3 = var0 == var2;
                                            var2 = undefined;
                                            var0 = undefined;
                                            if (var3) {
                                                _fun111882_ip = 28;
                                                continue _fun111882
                                            }
                                        case 20:
                                            var1 = _closure2_slot1;
                                            var0 = var1.bind(var2)();
                                        case 28:
                                            return var0;
                                    }
                                };
                                var1 = 17;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var _closure3_slot1 = var4;
                            var3 = _closure2_slot0;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 22;
                            var2 = var5[var2];
                            var5 = undefined;
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            if (!(var3 !== var2)) {
                                _fun111880_ip = 63;
                                continue _fun111880
                            }
                        case 61:
                            return var5;
                        case 63:
                            var2 = global;
                            var6 = var2.setTimeout;
                            var3 = function() { // Environment: var0
                                _fun111883: for (var _fun111883_ip = 0;;) switch (_fun111883_ip) {
                                    case 0:
                                        var2 = _closure2_slot1;
                                        var0 = null;
                                        var3 = var0 == var2;
                                        var2 = undefined;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun111883_ip = 28;
                                            continue _fun111883
                                        }
                                    case 20:
                                        var1 = _closure2_slot1;
                                        var0 = var1.bind(var2)();
                                    case 28:
                                        return var0;
                                }
                            };
                            var2 = 500;
                            var2 = var6.bind(var5)(var3, var2);
                            var _closure3_slot0 = var2;
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 21;
                            var2 = var6[var2];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.ComponentDispatch;
                            var2 = var3.subscribe;
                            var1 = _closure1_slot16;
                            var1 = var1.VOICE_PANEL_PIP_CONTENT_READY;
                            var1 = var2.bind(var3)(var1, var4);
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 21;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var5 = var2.ComponentDispatch;
                                var4 = var5.unsubscribe;
                                var1 = _closure1_slot16;
                                var3 = var1.VOICE_PANEL_PIP_CONTENT_READY;
                                var2 = _closure3_slot1;
                                var2 = var4.bind(var5)(var3, var2);
                                var2 = global;
                                var2 = var2.clearTimeout;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 22;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.TransitionStates;
                var0 = var0.YEETED;
                if (!(var2 !== var0)) {
                    _fun111879_ip = 102;
                    continue _fun111879
                }
            case 94:
                var0 = var1.onBottom;
                _fun111879_ip = 108;
                continue _fun111879;
            case 102:
                var0 = var1.onTop;
            case 108:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.style;
        var _closure2_slot0 = var8;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 23;
        var0 = var6[var0];
        var3 = undefined;
        var1 = var1.bind(var3)(var0);
        var0 = var1.usePIPState;
        var0 = var0.bind(var1)();
        var11 = var0.width;
        var _closure2_slot1 = var11;
        var10 = var0.height;
        var _closure2_slot2 = var10;
        var0 = _closure1_slot23;
        var9 = var0.bind(var3)();
        var _closure2_slot3 = var9;
        var2 = _closure1_slot21;
        var1 = _closure1_slot1;
        var0 = 24;
        var0 = var6[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var7 = _closure1_slot4;
        var6 = var7.useMemo;
        var5 = new Array(4);
        var5[0] = var11;
        var5[1] = var10;
        var9 = var9.innerStroke;
        var5[2] = var9;
        var5[3] = var8;
        var4 = function() { // Environment: var4
            var0 = _closure2_slot3;
            var2 = var0.innerStroke;
            var0 = new Array(3);
            var0[0] = var2;
            var2 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 25;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.getVoicePanelPIPBorderRadius;
            var4 = _closure2_slot1;
            var3 = _closure2_slot2;
            var4 = var5.bind(var6)(var4, var3);
            var3 = 1;
            var3 = var4 + var3;
            var2.borderRadius = var3;
            var0[1] = var2;
            var1 = _closure2_slot0;
            var0[2] = var1;
            return var0;
        };
        var4 = var6.bind(var7)(var4, var5);
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function arg0() {
        _fun111887: for (var _fun111887_ip = 0;;) switch (_fun111887_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.participantId;
                var _closure2_slot0 = var0;
                var12 = var1.transitionState;
                var2 = var1.transitionCleanUp;
                var1 = _closure1_slot23;
                var5 = undefined;
                var6 = var1.bind(var5)();
                var1 = _closure1_slot36;
                var9 = var1.bind(var5)(var6, var12, var2);
                var4 = _closure1_slot4;
                var2 = var4.useContext;
                var8 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 18;
                var1 = var15[var1];
                var1 = var8.bind(var5)(var1);
                var1 = var2.bind(var4)(var1);
                var17 = var1.channelId;
                var _closure2_slot1 = var17;
                var13 = var1.layoutManager;
                var _closure2_slot2 = var13;
                var11 = var1.windowDimensions;
                var _closure2_slot3 = var11;
                var14 = _closure1_slot0;
                var1 = 26;
                var2 = var15[var1];
                var10 = var14.bind(var5)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot11;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var3
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var8.bind(var10)(var4, var2);
                var8 = _closure1_slot4;
                var4 = var8.useState;
                var2 = 22;
                var2 = var15[var2];
                var2 = var14.bind(var5)(var2);
                var2 = var2.TransitionStates;
                var2 = var2.MOUNTED;
                var2 = var12 === var2;
                var8 = var4.bind(var8)(var2);
                var4 = _closure1_slot3;
                var2 = 2;
                var8 = var4.bind(var5)(var8, var2);
                var2 = 0;
                var2 = var8[var2];
                var _closure2_slot4 = var2;
                var4 = 1;
                var4 = var8[var4];
                var _closure2_slot5 = var4;
                var4 = var15[var1];
                var16 = var14.bind(var5)(var4);
                var12 = var16.useStateFromStores;
                var4 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = new Array(2);
                var4[0] = var17;
                var4[1] = var0;
                var0 = function() { // Environment: var3
                    _fun111889: for (var _fun111889_ip = 0;;) switch (_fun111889_ip) {
                        case 0:
                            var5 = _closure1_slot7;
                            var4 = var5.getParticipant;
                            var3 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var4.bind(var5)(var3, var0);
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun111889_ip = 62;
                                continue _fun111889
                            }
                        case 36:
                            var3 = var0.type;
                            var2 = _closure1_slot19;
                            var2 = var2.ACTIVITY;
                            if (!(var3 === var2)) {
                                _fun111889_ip = 62;
                                continue _fun111889
                            }
                        case 55:
                            var0 = var0.applicationId;
                            _fun111889_ip = 66;
                            continue _fun111889;
                        case 62:
                            var0 = _closure2_slot0;
                        case 66:
                            return var0;
                    }
                };
                var0 = var12.bind(var16)(var8, var0, var4);
                var _closure2_slot6 = var0;
                var1 = var15[var1];
                var16 = var14.bind(var5)(var1);
                var12 = var16.useStateFromStores;
                var1 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var1;
                var4 = new Array(1);
                var4[0] = var0;
                var1 = function() { // Environment: var3
                    var2 = _closure1_slot6;
                    var1 = var2.getPipOrientationLockStateForApp;
                    var0 = _closure2_slot6;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var12.bind(var16)(var8, var1, var4);
                var _closure2_slot7 = var12;
                var8 = _closure1_slot4;
                var4 = var8.useCallback;
                var1 = new Array(3);
                var1[0] = var13;
                var1[1] = var12;
                var1[2] = var0;
                var0 = function(arg0) { // Environment: var3
                    _fun111891: for (var _fun111891_ip = 0;;) switch (_fun111891_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.width;
                            var0 = var0.height;
                            var7 = var1 > var0;
                            var2 = _closure2_slot7;
                            var3 = _closure1_slot18;
                            var3 = var3.LANDSCAPE;
                            if (!(var3 !== var2)) {
                                _fun111891_ip = 148;
                                continue _fun111891
                            }
                        case 41:
                            var3 = _closure1_slot18;
                            var3 = var3.PORTRAIT;
                            if (!(var3 !== var2)) {
                                _fun111891_ip = 119;
                                continue _fun111891
                            }
                        case 55:
                            var1 = _closure1_slot18;
                            var1 = var1.UNLOCKED;
                            if (!(var1 !== var2)) {
                                _fun111891_ip = 75;
                                continue _fun111891
                            }
                        case 69:
                            var1 = null;
                            if (!(var1 === var2)) {
                                _fun111891_ip = 175;
                                continue _fun111891
                            }
                        case 75:
                            var5 = _closure2_slot2;
                            var4 = var5.setTargetDimensions;
                            var3 = _closure2_slot6;
                            var6 = 9;
                            var2 = var6;
                            if (!var7) {
                                _fun111891_ip = 101;
                                continue _fun111891
                            }
                        case 98:
                            var2 = 16;
                        case 101:
                            var1 = 16;
                            if (!var7) {
                                _fun111891_ip = 110;
                                continue _fun111891
                            }
                        case 107:
                            var1 = var6;
                        case 110:
                            var1 = var4.bind(var5)(var3, var2, var1);
                            _fun111891_ip = 175;
                            continue _fun111891;
                        case 119:
                            var5 = _closure2_slot2;
                            var4 = var5.setTargetDimensions;
                            var3 = _closure2_slot6;
                            var2 = 9;
                            var1 = 16;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            _fun111891_ip = 175;
                            continue _fun111891;
                        case 148:
                            var4 = _closure2_slot2;
                            var3 = var4.setTargetDimensions;
                            var2 = _closure2_slot6;
                            var1 = 16;
                            var0 = 9;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 175:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var4.bind(var8)(var0, var1);
                var _closure2_slot8 = var12;
                var8 = _closure1_slot4;
                var4 = var8.useLayoutEffect;
                var1 = new Array(1);
                var1[0] = var12;
                var0 = function() { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 27;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getWindowDimensions;
                    var3 = var1.bind(var2)();
                    var2 = _closure2_slot8;
                    var1 = {};
                    var6 = var1;
                    var5 = var3;
                    var4 = copyDataProperties(var6, var5);
                    var4 = var3.width;
                    var3 = var3.height;
                    var4 = var4 > var3;
                    var3 = 'landscape';
                    var1[var3] = var4;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var4.bind(var8)(var0, var1);
                var13 = 28;
                var0 = var15[var13];
                var8 = var14.bind(var5)(var0);
                var4 = var8.useAnimatedReaction;
                var1 = function() {
                    var1 = _closure2_slot3;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = {};
                var0.windowDimensions = var11;
                var1.__closure = var0;
                var0 = 20962628184.0;
                var1.__workletHash = var0;
                var0 = _closure1_slot24;
                var1.__initData = var0;
                var0 = function arg0, arg1() {
                    _fun111894: for (var _fun111894_ip = 0;;) switch (_fun111894_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun111894_ip = 57;
                                continue _fun111894
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 28;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot8;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = {};
                var13 = var15[var13];
                var13 = var14.bind(var5)(var13);
                var13 = var13.runOnJS;
                var11.runOnJS = var13;
                var11.handleTargetAspectRatioParams = var12;
                var0.__closure = var11;
                var11 = 10001753822389.0;
                var0.__workletHash = var11;
                var11 = _closure1_slot25;
                var0.__initData = var11;
                var0 = var4.bind(var8)(var1, var0);
                var0 = null;
                var1 = var0 != var10;
                var _closure2_slot9 = var1;
                var11 = _closure1_slot4;
                var8 = var11.useEffect;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var2;
                var3 = function() { // Environment: var3
                    _fun111895: for (var _fun111895_ip = 0;;) switch (_fun111895_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            if (var2) {
                                _fun111895_ip = 34;
                                continue _fun111895
                            }
                        case 12:
                            var2 = _closure2_slot9;
                            if (!var2) {
                                _fun111895_ip = 34;
                                continue _fun111895
                            }
                        case 19:
                            var3 = _closure1_slot35;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
                            _fun111895_ip = 41;
                            continue _fun111895;
                        case 34:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun111895_ip = 45;
                                continue _fun111895
                            }
                        case 41:
                            var1 = undefined;
                            return var1;
                        case 45:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot5;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                var1 = _closure1_slot35;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1 = 500;
                            var1 = var4.bind(var3)(var2, var1);
                            var _closure3_slot0 = var1;
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
                var3 = var8.bind(var11)(var3, var4);
                if (var2) {
                    _fun111887_ip = 777;
                    continue _fun111887
                }
            case 602:
                if (var1) {
                    _fun111887_ip = 645;
                    continue _fun111887
                }
            case 605:
                var3 = _closure1_slot21;
                var2 = _closure1_slot39;
                var1 = {};
                var8 = _closure1_slot10;
                var4 = var8.getId;
                var4 = var4.bind(var8)();
                var1.participantId = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun111887_ip = 774;
                continue _fun111887;
            case 645:
                var4 = _closure1_slot22;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 24;
                var2 = var11[var2];
                var3 = var8.bind(var5)(var2);
                var2 = {};
                var12 = var6.activity;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var9;
                var2.style = var6;
                var9 = _closure1_slot21;
                var6 = 29;
                var6 = var11[var6];
                var8 = var8.bind(var5)(var6);
                var6 = {};
                var6.channel = var10;
                var10 = _closure1_slot17;
                var10 = var10.PIP;
                var6.layoutMode = var10;
                var8 = var9.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot21;
                var8 = _closure1_slot37;
                var7 = {};
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 774:
                var0 = var1;
            case 777:
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        _fun111898: for (var _fun111898_ip = 0;;) switch (_fun111898_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.participantId;
                var _closure2_slot0 = var9;
                var4 = var0.transitionState;
                var2 = var0.transitionCleanUp;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var0 = _closure1_slot23;
                var13 = var0.bind(var3)();
                var _closure2_slot1 = var13;
                var0 = _closure1_slot36;
                var10 = var0.bind(var3)(var13, var4, var2);
                var _closure2_slot2 = var10;
                var5 = _closure1_slot4;
                var4 = var5.useContext;
                var7 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 18;
                var2 = var0[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var4.bind(var5)(var2);
                var5 = var2.channelId;
                var _closure2_slot3 = var5;
                var28 = var2.guildId;
                var19 = var2.focused;
                var _closure2_slot4 = var19;
                var18 = var2.mode;
                var _closure2_slot5 = var18;
                var2 = var2.layoutManager;
                var _closure2_slot6 = var2;
                var7 = _closure1_slot0;
                var4 = 26;
                var0 = var0[var4];
                var11 = var7.bind(var3)(var0);
                var8 = var11.useStateFromStores;
                var0 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var1
                    _fun111899: for (var _fun111899_ip = 0;;) switch (_fun111899_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getParticipant;
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot0;
                            var4 = var3.bind(var4)(var1, var0);
                            var3 = null;
                            var5 = var3 != var4;
                            var1 = undefined;
                            if (!var5) {
                                _fun111899_ip = 44;
                                continue _fun111899
                            }
                        case 41:
                            var1 = var4;
                        case 44:
                            var4 = var3 == var1;
                            var3 = undefined;
                            if (var4) {
                                _fun111899_ip = 58;
                                continue _fun111899
                            }
                        case 53:
                            var3 = var1.type;
                        case 58:
                            var2 = _closure1_slot19;
                            var2 = var2.USER;
                            var0 = undefined;
                            if (!(var3 === var2)) {
                                _fun111899_ip = 77;
                                continue _fun111899
                            }
                        case 74:
                            var0 = var1;
                        case 77:
                            return var0;
                    }
                };
                var14 = var8.bind(var11)(var7, var0);
                var11 = null;
                var0 = var11 == var14;
                var27 = undefined;
                if (var0) {
                    _fun111898_ip = 215;
                    continue _fun111898
                }
            case 210:
                var27 = var14.user;
            case 215:
                if (!(var11 == var27)) {
                    _fun111898_ip = 232;
                    continue _fun111898
                }
            case 219:
                var7 = _closure1_slot12;
                var0 = var7.getCurrentUser;
                var27 = var0.bind(var7)();
            case 232:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var24 = 30;
                var0 = var0[var24];
                var8 = var7.bind(var3)(var0);
                var7 = var8.useDominantColorFromImage;
                var12 = var11 == var27;
                var0 = undefined;
                if (var12) {
                    _fun111898_ip = 285;
                    continue _fun111898
                }
            case 267:
                var16 = var27.getAvatarURL;
                var15 = 80;
                var12 = false;
                var0 = var16.bind(var27)(var28, var15, var12);
            case 285:
                var0 = var7.bind(var8)(var0);
                _closure2_slot7 = var0;
                var12 = _closure1_slot4;
                var8 = var12.useMemo;
                var7 = new Array(3);
                var7[0] = var13;
                var7[1] = var10;
                var7[2] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure2_slot1;
                    var1 = var0.user;
                    var0 = new Array(3);
                    var0[0] = var1;
                    var1 = _closure2_slot2;
                    var0[1] = var1;
                    var1 = {};
                    var2 = _closure2_slot7;
                    var1.backgroundColor = var2;
                    var0[2] = var1;
                    return var0;
                };
                var0 = var8.bind(var12)(var0, var7);
                var8 = _closure1_slot4;
                var7 = var8.useState;
                var26 = false;
                var12 = var7.bind(var8)(var26);
                var8 = _closure1_slot3;
                var7 = 2;
                var8 = var8.bind(var3)(var12, var7);
                var7 = 0;
                var15 = var8[var7];
                var7 = 1;
                var7 = var8[var7];
                _closure2_slot8 = var7;
                var12 = _closure1_slot4;
                var8 = var12.useCallback;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function(arg0, arg1) { // Environment: var1
                    _fun111901: for (var _fun111901_ip = 0;;) switch (_fun111901_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = null;
                            var2 = var1 != var6;
                            var0 = undefined;
                            var4 = undefined;
                            if (!var2) {
                                _fun111901_ip = 42;
                                continue _fun111901
                            }
                        case 16:
                            var5 = _closure1_slot7;
                            var3 = var5.getParticipant;
                            var2 = _closure2_slot3;
                            var4 = var3.bind(var5)(var2, var6);
                        case 42:
                            var2 = _closure2_slot8;
                            var1 = var1 != var4;
                            if (!var1) {
                                _fun111901_ip = 68;
                                continue _fun111901
                            }
                        case 56:
                            var3 = _closure1_slot20;
                            var1 = var3.bind(var0)(var4);
                        case 68:
                            if (!var1) {
                                _fun111901_ip = 91;
                                continue _fun111901
                            }
                        case 71:
                            var3 = _closure1_slot13;
                            var4 = var3.PANEL;
                            var3 = arg1;
                            var1 = var3 === var4;
                        case 91:
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var20 = var8.bind(var12)(var5, var7);
                _closure2_slot9 = var20;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var21 = 28;
                var8 = var7[var21];
                var17 = var5.bind(var3)(var8);
                var16 = var17.useAnimatedReaction;
                var12 = function() {
                    _fun111902: for (var _fun111902_ip = 0;;) switch (_fun111902_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun111902_ip = 32;
                                continue _fun111902
                            }
                        case 27:
                            var0 = var1.id;
                        case 32:
                            return var0;
                    }
                };
                var8 = {};
                var8.focused = var19;
                var12.__closure = var8;
                var8 = 3980010676581.0;
                var12.__workletHash = var8;
                var8 = _closure1_slot26;
                var12.__initData = var8;
                var8 = function arg0, arg1() {
                    _fun111903: for (var _fun111903_ip = 0;;) switch (_fun111903_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            if (!(var3 !== var0)) {
                                _fun111903_ip = 71;
                                continue _fun111903
                            }
                        case 10:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 28;
                            var0 = var2[var0];
                            var2 = undefined;
                            var5 = var1.bind(var2)(var0);
                            var4 = var5.runOnJS;
                            var1 = _closure2_slot9;
                            var1 = var4.bind(var5)(var1);
                            var4 = _closure2_slot5;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var0 = var1.bind(var2)(var3, var0);
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var22 = {};
                var23 = var7[var21];
                var23 = var5.bind(var3)(var23);
                var23 = var23.runOnJS;
                var22.runOnJS = var23;
                var22.updateIsActivityFocused = var20;
                var22.mode = var18;
                var8.__closure = var22;
                var22 = 5971237403457.0;
                var8.__workletHash = var22;
                var22 = _closure1_slot27;
                var8.__initData = var22;
                var8 = var16.bind(var17)(var12, var8);
                var8 = var7[var21];
                var17 = var5.bind(var3)(var8);
                var16 = var17.useAnimatedReaction;
                var12 = function() {
                    var1 = _closure2_slot5;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = {};
                var8.mode = var18;
                var12.__closure = var8;
                var8 = 8288240256860.0;
                var12.__workletHash = var8;
                var8 = _closure1_slot28;
                var12.__initData = var8;
                var8 = function arg0, arg1() {
                    _fun111905: for (var _fun111905_ip = 0;;) switch (_fun111905_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            if (!(var3 !== var0)) {
                                _fun111905_ip = 87;
                                continue _fun111905
                            }
                        case 10:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 28;
                            var0 = var2[var0];
                            var2 = undefined;
                            var5 = var1.bind(var2)(var0);
                            var4 = var5.runOnJS;
                            var1 = _closure2_slot9;
                            var1 = var4.bind(var5)(var1);
                            var4 = _closure2_slot4;
                            var0 = var4.get;
                            var4 = var0.bind(var4)();
                            var0 = null;
                            var5 = var0 == var4;
                            var0 = undefined;
                            if (var5) {
                                _fun111905_ip = 81;
                                continue _fun111905
                            }
                        case 76:
                            var0 = var4.id;
                        case 81:
                            var0 = var1.bind(var2)(var0, var3);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = {};
                var21 = var7[var21];
                var21 = var5.bind(var3)(var21);
                var21 = var21.runOnJS;
                var18.runOnJS = var21;
                var18.updateIsActivityFocused = var20;
                var18.focused = var19;
                var8.__closure = var18;
                var18 = 12552370107483.0;
                var8.__workletHash = var18;
                var18 = _closure1_slot29;
                var8.__initData = var18;
                var8 = var16.bind(var17)(var12, var8);
                var4 = var7[var4];
                var16 = var5.bind(var3)(var4);
                var12 = var16.useStateFromStoresObject;
                var4 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = function() { // Environment: var1
                    var0 = {};
                    var3 = _closure1_slot8;
                    var2 = var3.isReactingToThermalState;
                    var2 = var2.bind(var3)();
                    var0.isReactingToThermalState = var2;
                    var2 = _closure1_slot8;
                    var1 = var2.consumedRequestToRespondToSeriousThermalState;
                    var1 = var1.bind(var2)();
                    var0.consumedRequestToRespondToSeriousThermalState = var1;
                    return var0;
                };
                var8 = var12.bind(var16)(var8, var4);
                var4 = var8.isReactingToThermalState;
                var8 = var8.consumedRequestToRespondToSeriousThermalState;
                var17 = _closure1_slot4;
                var16 = var17.useCallback;
                var12 = new Array(2);
                var12[0] = var2;
                var12[1] = var9;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var4 = var0.width;
                    var3 = var0.height;
                    var2 = _closure2_slot6;
                    var1 = var2.setTargetDimensions;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0, var4, var3);
                    var0 = undefined;
                    return var0;
                };
                var12 = var16.bind(var17)(var2, var12);
                var2 = 31;
                var2 = var7[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useCanRenderParticipantVideo;
                var5 = var2.bind(var5)(var14);
                if (!var5) {
                    _fun111898_ip = 817;
                    continue _fun111898
                }
            case 805:
                var2 = var15;
                if (!var2) {
                    _fun111898_ip = 814;
                    continue _fun111898
                }
            case 811:
                var2 = var4;
            case 814:
                var5 = !var2;
            case 817:
                _closure2_slot10 = var5;
                var7 = _closure1_slot4;
                var4 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    _fun111908: for (var _fun111908_ip = 0;;) switch (_fun111908_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            if (var0) {
                                _fun111908_ip = 23;
                                continue _fun111908
                            }
                        case 10:
                            var1 = _closure1_slot35;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var7)(var1, var2);
                var2 = _closure1_slot22;
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = 24;
                var1 = var1[var7];
                var1 = var4.bind(var3)(var1);
                var4 = {};
                if (var5) {
                    _fun111898_ip = 1254;
                    continue _fun111898
                }
            case 883:
                var4.style = var0;
                var16 = _closure1_slot21;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var5 = var5.bind(var3)(var0);
                var0 = {};
                var17 = var13.avatarWrapper;
                var0.style = var17;
                var18 = var11 != var27;
                var17 = null;
                if (!var18) {
                    _fun111898_ip = 1072;
                    continue _fun111898
                }
            case 932:
                var20 = _closure1_slot21;
                var19 = _closure1_slot1;
                var21 = _closure1_slot2;
                var23 = 32;
                var18 = var21[var23];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var22 = _closure1_slot0;
                var21 = var21[var24];
                var24 = var22.bind(var3)(var21);
                var22 = var24.getCachedSourceFromURI;
                var25 = var27.getAvatarURL;
                var21 = 80;
                var21 = var25.bind(var27)(var28, var21, var26);
                var21 = var22.bind(var24)(var21);
                var18.source = var21;
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var23];
                var21 = var22.bind(var3)(var21);
                var22 = var21.AvatarSizes;
                if (var15) {
                    _fun111898_ip = 1036;
                    continue _fun111898
                }
            case 1028:
                var21 = var22.XLARGE;
                _fun111898_ip = 1042;
                continue _fun111898;
            case 1036:
                var21 = var22.LARGE;
            case 1042:
                var18.size = var21;
                var22 = var11 == var14;
                var21 = undefined;
                if (var22) {
                    _fun111898_ip = 1061;
                    continue _fun111898
                }
            case 1055:
                var21 = var14.userAvatarDecoration;
            case 1061:
                var18.avatarDecoration = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 1072:
                var0.children = var17;
                var5 = var16.bind(var3)(var5, var0);
                var0 = new Array(3);
                var0[0] = var5;
                var17 = _closure1_slot21;
                var16 = _closure1_slot37;
                var5 = {};
                var18 = var13.userOpacity;
                var5.style = var18;
                var5 = var17.bind(var3)(var16, var5);
                var0[1] = var5;
                var5 = null;
                if (!var15) {
                    _fun111898_ip = 1238;
                    continue _fun111898
                }
            case 1125:
                var5 = null;
                if (!var8) {
                    _fun111898_ip = 1238;
                    continue _fun111898
                }
            case 1130:
                var11 = _closure1_slot21;
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var7 = var20[var7];
                var8 = var19.bind(var3)(var7);
                var7 = {};
                var15 = var13.thermalAlertIconContainer;
                var7.style = var15;
                var17 = _closure1_slot21;
                var15 = 33;
                var15 = var20[var15];
                var16 = var19.bind(var3)(var15);
                var15 = {};
                var18 = var13.thermalAlertIcon;
                var15.style = var18;
                var18 = 34;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var15.source = var18;
                var18 = var13.thermalAlertIcon;
                var18 = var18.color;
                var15.color = var18;
                var15 = var17.bind(var3)(var16, var15);
                var7.children = var15;
                var5 = var11.bind(var3)(var8, var7);
            case 1238:
                var0[2] = var5;
                var4.children = var0;
                var0 = var4;
                _fun111898_ip = 1408;
                continue _fun111898;
            case 1254:
                var7 = var13.blackBackground;
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var13.user;
                var5[1] = var7;
                var4.style = var5;
                var8 = _closure1_slot21;
                var7 = _closure1_slot40;
                var5 = {};
                var5.style = var10;
                var5.participantId = var9;
                var11 = _closure1_slot21;
                var10 = _closure1_slot34;
                var9 = {};
                var14 = var14.streamId;
                var9.streamId = var14;
                var14 = var13.video;
                var13 = new Array(2);
                var13[0] = var14;
                var13[1] = var3;
                var9.style = var13;
                var9.onSize = var12;
                var12 = _closure1_slot35;
                var9.onReady = var12;
                var9 = var11.bind(var3)(var10, var9);
                var5.children = var9;
                var7 = var8.bind(var3)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot21;
                var7 = _closure1_slot37;
                var6 = {};
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 1408:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var11 = var0.participantId;
        var7 = var0.style;
        var4 = var0.children;
        var9 = _closure1_slot4;
        var8 = var9.useContext;
        var1 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 18;
        var6 = var5[var3];
        var3 = undefined;
        var6 = var1.bind(var3)(var6);
        var6 = var8.bind(var9)(var6);
        var10 = var6.layoutManager;
        var8 = _closure1_slot0;
        var6 = 35;
        var6 = var5[var6];
        var9 = var8.bind(var3)(var6);
        var6 = var9.useTargetDimensionsSubscription;
        var10 = var6.bind(var9)(var11, var10);
        var _closure2_slot0 = var10;
        var6 = 28;
        var6 = var5[var6];
        var8 = var8.bind(var3)(var6);
        var6 = var8.useAnimatedStyle;
        var2 = function() {
            _fun111910: for (var _fun111910_ip = 0;;) switch (_fun111910_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var4 = var0.width;
                    var3 = var0.height;
                    var6 = var3 < var4;
                    var0 = 'auto';
                    var5 = '100%';
                    var1 = var0;
                    var2 = var5;
                    if (!var6) {
                        _fun111910_ip = 55;
                        continue _fun111910
                    }
                case 49:
                    var1 = var5;
                    var2 = var0;
                case 55:
                    var0 = {};
                    var5 = 'absolute';
                    var0.position = var5;
                    var3 = var4 / var3;
                    var0.aspectRatio = var3;
                    var0.width = var2;
                    var0.height = var1;
                    return var0;
            }
        };
        var9 = {};
        var9.targetDimensions = var10;
        var2.__closure = var9;
        var9 = 10377220209728.0;
        var2.__workletHash = var9;
        var9 = _closure1_slot30;
        var2.__initData = var9;
        var6 = var6.bind(var8)(var2);
        var2 = _closure1_slot21;
        var0 = 36;
        var0 = var5[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        _fun111911: for (var _fun111911_ip = 0;;) switch (_fun111911_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.participantId;
                var _closure2_slot0 = var7;
                var8 = var0.transitionState;
                var6 = var0.transitionCleanUp;
                var0 = _closure1_slot23;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 23;
                var0 = var10[var0];
                var3 = var9.bind(var4)(var0);
                var0 = var3.usePIPState;
                var0 = var0.bind(var3)();
                var0 = var0.mode;
                var _closure2_slot1 = var0;
                var3 = _closure1_slot36;
                var8 = var3.bind(var4)(var5, var8, var6);
                var11 = _closure1_slot4;
                var6 = var11.useContext;
                var12 = _closure1_slot1;
                var3 = 18;
                var3 = var10[var3];
                var3 = var12.bind(var4)(var3);
                var3 = var6.bind(var11)(var3);
                var6 = var3.channelId;
                var _closure2_slot2 = var6;
                var6 = var3.layoutManager;
                var _closure2_slot3 = var6;
                var3 = 26;
                var11 = var10[var3];
                var14 = var9.bind(var4)(var11);
                var13 = var14.useStateFromStores;
                var11 = _closure1_slot7;
                var12 = new Array(1);
                var12[0] = var11;
                var11 = function() { // Environment: var2
                    _fun111912: for (var _fun111912_ip = 0;;) switch (_fun111912_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getParticipant;
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1, var0);
                            var0 = null;
                            var3 = var0 != var1;
                            var0 = undefined;
                            if (!var3) {
                                _fun111912_ip = 68;
                                continue _fun111912
                            }
                        case 41:
                            var3 = var1.type;
                            var2 = _closure1_slot19;
                            var2 = var2.STREAM;
                            var0 = undefined;
                            if (!(var3 === var2)) {
                                _fun111912_ip = 68;
                                continue _fun111912
                            }
                        case 62:
                            var0 = var1.streamId;
                        case 68:
                            return var0;
                    }
                };
                var12 = var13.bind(var14)(var12, var11);
                var _closure2_slot4 = var12;
                var3 = var10[var3];
                var11 = var9.bind(var4)(var3);
                var10 = var11.useStateFromStores;
                var3 = _closure1_slot9;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = function() { // Environment: var2
                    _fun111913: for (var _fun111913_ip = 0;;) switch (_fun111913_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getActiveStreamForStreamKey;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun111913_ip = 41;
                                continue _fun111913
                            }
                        case 36:
                            var0 = var1.state;
                        case 41:
                            return var0;
                    }
                };
                var3 = var10.bind(var11)(var9, var3);
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = new Array(2);
                var9[0] = var6;
                var9[1] = var7;
                var6 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var4 = var0.width;
                    var3 = var0.height;
                    var2 = _closure2_slot3;
                    var1 = var2.setTargetDimensions;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0, var4, var3);
                    var0 = undefined;
                    return var0;
                };
                var11 = var10.bind(var11)(var6, var9);
                var9 = _closure1_slot5;
                var6 = var9.get;
                var14 = var6.bind(var9)();
                var _closure2_slot5 = var14;
                var9 = _closure1_slot4;
                var6 = var9.useRef;
                var10 = 0;
                var6 = var6.bind(var9)(var10);
                var _closure2_slot6 = var6;
                var9 = _closure1_slot4;
                var6 = var9.useRef;
                var6 = var6.bind(var9)(var10);
                var _closure2_slot7 = var6;
                var13 = _closure1_slot4;
                var10 = var13.useCallback;
                var9 = new Array(3);
                var9[0] = var12;
                var9[1] = var14;
                var9[2] = var0;
                var6 = function(arg0) { // Environment: var2
                    _fun111915: for (var _fun111915_ip = 0;;) switch (_fun111915_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun111915_ip = 178;
                                continue _fun111915
                            }
                        case 16:
                            var1 = arg0;
                            var1 = var1.nativeEvent;
                            var1 = var1.layout;
                            var6 = var1.width;
                            var5 = var1.height;
                            var1 = _closure2_slot6;
                            var1 = var1.current;
                            var1 = var6 === var1;
                            if (!var1) {
                                _fun111915_ip = 70;
                                continue _fun111915
                            }
                        case 57:
                            var2 = _closure2_slot7;
                            var2 = var2.current;
                            var1 = var5 === var2;
                        case 70:
                            if (var1) {
                                _fun111915_ip = 178;
                                continue _fun111915
                            }
                        case 73:
                            var1 = _closure2_slot6;
                            var1.current = var6;
                            var1 = _closure2_slot7;
                            var1.current = var5;
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot14;
                            var2 = var2.IN_APP;
                            if (!(var3 === var2)) {
                                _fun111915_ip = 178;
                                continue _fun111915
                            }
                        case 114:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 37;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.updateVideoSize;
                            var2 = _closure2_slot4;
                            var1 = {};
                            var0 = _closure2_slot5;
                            var6 = var6 * var0;
                            var1.width = var6;
                            var0 = var5 * var0;
                            var1.height = var0;
                            var0 = 1;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 178:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var10.bind(var13)(var6, var9);
                var13 = _closure1_slot4;
                var9 = var13.useCallback;
                var6 = new Array(3);
                var6[0] = var12;
                var6[1] = var14;
                var6[2] = var0;
                var0 = function(arg0) { // Environment: var2
                    _fun111916: for (var _fun111916_ip = 0;;) switch (_fun111916_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot4;
                            var1 = null;
                            var1 = var1 == var3;
                            if (var1) {
                                _fun111916_ip = 22;
                                continue _fun111916
                            }
                        case 19:
                            var1 = var2;
                        case 22:
                            if (var1) {
                                _fun111916_ip = 46;
                                continue _fun111916
                            }
                        case 25:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot14;
                            var2 = var2.IN_APP;
                            var1 = var3 !== var2;
                        case 46:
                            if (var1) {
                                _fun111916_ip = 134;
                                continue _fun111916
                            }
                        case 49:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 37;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.updateVideoSize;
                            var2 = _closure2_slot4;
                            var1 = {};
                            var5 = _closure2_slot6;
                            var6 = var5.current;
                            var5 = _closure2_slot5;
                            var6 = var6 * var5;
                            var1.width = var6;
                            var0 = _closure2_slot7;
                            var0 = var0.current;
                            var0 = var0 * var5;
                            var1.height = var0;
                            var0 = 1;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 134:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var9.bind(var13)(var0, var6);
                var _closure2_slot8 = var0;
                var13 = _closure1_slot4;
                var9 = var13.useEffect;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var2
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 38;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.addOnPipModeChangedListener;
                    var1 = _closure2_slot8;
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun111918: for (var _fun111918_ip = 0;;) switch (_fun111918_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun111918_ip = 27;
                                    continue _fun111918
                                }
                            case 13:
                                var1 = _closure3_slot0;
                                var0 = var1.remove;
                                var0 = var0.bind(var1)();
                            case 27:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var9.bind(var13)(var0, var6);
                var0 = null;
                var0 = var0 != var12;
                var _closure2_slot9 = var0;
                var13 = _closure1_slot4;
                var9 = var13.useEffect;
                var6 = new Array(1);
                var6[0] = var0;
                var2 = function() { // Environment: var2
                    _fun111919: for (var _fun111919_ip = 0;;) switch (_fun111919_ip) {
                        case 0:
                            var0 = _closure2_slot9;
                            if (!var0) {
                                _fun111919_ip = 23;
                                continue _fun111919
                            }
                        case 10:
                            var1 = _closure1_slot35;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var13)(var2, var6);
                var2 = _closure1_slot15;
                var2 = var2.ENDED;
                if (!(var3 !== var2)) {
                    _fun111911_ip = 647;
                    continue _fun111911
                }
            case 481:
                var2 = _closure1_slot15;
                var2 = var2.FAILED;
                if (!(var3 !== var2)) {
                    _fun111911_ip = 589;
                    continue _fun111911
                }
            case 495:
                var6 = _closure1_slot21;
                if (var0) {
                    _fun111911_ip = 521;
                    continue _fun111911
                }
            case 502:
                var2 = _closure1_slot39;
                var0 = {};
                var0.participantId = var7;
                var0 = var6.bind(var4)(var2, var0);
                _fun111911_ip = 587;
                continue _fun111911;
            case 521:
                var3 = _closure1_slot40;
                var2 = {};
                var2.style = var8;
                var2.participantId = var7;
                var9 = _closure1_slot21;
                var8 = _closure1_slot34;
                var7 = {};
                var7.streamId = var12;
                var12 = var5.video;
                var7.style = var12;
                var7.onSize = var11;
                var7.onLayout = var10;
                var7 = var9.bind(var4)(var8, var7);
                var2.children = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 587:
                _fun111911_ip = 645;
                continue _fun111911;
            case 589:
                var6 = _closure1_slot21;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 40;
                var2 = var7[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.StreamFailed;
                var2 = {};
                var7 = var5.streamEmptyImage;
                var2.style = var7;
                var7 = 'contain';
                var2.resizeMode = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 645:
                _fun111911_ip = 703;
                continue _fun111911;
            case 647:
                var3 = _closure1_slot21;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 39;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.StreamEnded;
                var1 = {};
                var5 = var5.streamEmptyImage;
                var1.style = var5;
                var5 = 'contain';
                var1.resizeMode = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 703:
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.id;
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun111921: for (var _fun111921_ip = 0;;) switch (_fun111921_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var5 = arg2;
                var0 = arg3;
                var3 = var2.id;
                var1 = '--voice-panel-pip-empty';
                if (!(var1 !== var3)) {
                    _fun111921_ip = 205;
                    continue _fun111921
                }
            case 30:
                var1 = {};
                var3 = var2.id;
                var1.participantId = var3;
                var1.transitionState = var5;
                var1.transitionCleanUp = var0;
                var6 = var2.type;
                var3 = _closure1_slot19;
                var3 = var3.ACTIVITY;
                if (!(var3 !== var6)) {
                    _fun111921_ip = 174;
                    continue _fun111921
                }
            case 74:
                var3 = _closure1_slot19;
                var3 = var3.STREAM;
                if (!(var3 !== var6)) {
                    _fun111921_ip = 143;
                    continue _fun111921
                }
            case 88:
                var3 = _closure1_slot19;
                var3 = var3.USER;
                if (!(var3 !== var6)) {
                    _fun111921_ip = 112;
                    continue _fun111921
                }
            case 102:
                var3 = _closure1_slot19;
                var3 = var3.HIDDEN_STREAM;
            case 112:
                var8 = _closure1_slot21;
                var7 = _closure1_slot39;
                var6 = {};
                var11 = var6;
                var10 = var1;
                var3 = copyDataProperties(var11, var10);
                var3 = undefined;
                var3 = var8.bind(var3)(var7, var6, var4);
                return var3;
            case 143:
                var8 = _closure1_slot21;
                var7 = _closure1_slot41;
                var6 = {};
                var11 = var6;
                var10 = var1;
                var3 = copyDataProperties(var11, var10);
                var3 = undefined;
                var3 = var8.bind(var3)(var7, var6, var4);
                return var3;
            case 174:
                var6 = _closure1_slot21;
                var3 = _closure1_slot38;
                var2 = {};
                var11 = var2;
                var10 = var1;
                var1 = copyDataProperties(var11, var10);
                var1 = undefined;
                var1 = var6.bind(var1)(var3, var2, var4);
                return var1;
            case 205:
                var3 = _closure1_slot21;
                var2 = _closure1_slot31;
                var1 = {};
                var1.transitionState = var5;
                var1.transitionCleanUp = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1, var4);
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0, arg1() {
        _fun111922: for (var _fun111922_ip = 0;;) switch (_fun111922_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var2 = var1.length;
                var0 = var6.length;
                if (!(var2 === var0)) {
                    _fun111922_ip = 125;
                    continue _fun111922
                }
            case 20:
                var0 = var1.length;
                var5 = 0;
                if (!(var5 !== var0)) {
                    _fun111922_ip = 121;
                    continue _fun111922
                }
            case 31:
                var0 = _closure1_slot32;
                var4 = undefined;
                var3 = var0.bind(var4)(var1);
                var1 = var3.bind(var4)();
                var0 = var1.done;
                var2 = null;
                var5 = 0;
                if (var0) {
                    _fun111922_ip = 117;
                    continue _fun111922
                }
            case 61:
                var0 = var1.value;
                var7 = var0.id;
                var8 = var6[var5];
                var9 = var2 == var8;
                var0 = undefined;
                if (var9) {
                    _fun111922_ip = 89;
                    continue _fun111922
                }
            case 84:
                var0 = var8.id;
            case 89:
                if (!(var7 === var0)) {
                    _fun111922_ip = 113;
                    continue _fun111922
                }
            case 93:
                var5 = var5 + 1;
                var7 = var3.bind(var4)();
                var0 = var7.done;
                var1 = var7;
                if (var0) {
                    _fun111922_ip = 117;
                    continue _fun111922
                }
            case 111:
                _fun111922_ip = 61;
                continue _fun111922;
            case 113:
                var0 = false;
                return var0;
            case 117:
                var0 = true;
                return var0;
            case 121:
                var0 = true;
                return var0;
            case 125:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var13 = 0;
    var3 = var5[var13];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 1;
    var6 = var5[var14];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PixelRatio;
    var _closure1_slot5 = var7;
    var12 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelModes;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelPIPModes;
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ApplicationStreamStates;
    var _closure1_slot15 = var7;
    var3 = var3.ComponentActions;
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityLayoutMode;
    var _closure1_slot17 = var7;
    var3 = var3.OrientationLockState;
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ParticipantTypes;
    var _closure1_slot19 = var7;
    var3 = var3.isActivityParticipant;
    var _closure1_slot20 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot21 = var7;
    var3 = var3.jsxs;
    var _closure1_slot22 = var3;
    var3 = 16;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'overflow': 'hidden',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.contentWrapper = var9;
    var9 = {};
    var10 = 0.1;
    var9.opacity = var10;
    var3.userOpacity = var9;
    var9 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var3.activity = var9;
    var9 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.user = var9;
    var9 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var3.stream = var9;
    var9 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var3.video = var9;
    var9 = {};
    var15 = {};
    var10 = -1;
    var15.scaleX = var10;
    var10 = new Array(1);
    var10[0] = var15;
    var9.transform = var10;
    var3.flip = var9;
    var9 = {
        'position': 'relative',
        'width': '56%',
        'height': '56%',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.avatarWrapper = var9;
    var9 = {
        'width': 22,
        'height': 22,
        'backgroundColor': 'rgba(78, 80, 88, 0.48)',
        'borderRadius': null,
        'justifyContent': 'center',
        'alignItems': 'center',
        'position': 'absolute',
        'top': 6,
        'left': 6
    };
    var10 = 17;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var9.borderRadius = var15;
    var3.thermalAlertIconContainer = var9;
    var9 = {
        'width': 14,
        'height': 14
    };
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var9.color = var15;
    var3.thermalAlertIcon = var9;
    var9 = {};
    var9.zIndex = var14;
    var3.onTop = var9;
    var9 = {};
    var9.zIndex = var13;
    var3.onBottom = var9;
    var9 = {};
    var13 = '50%';
    var9.width = var13;
    var3.streamEmptyImage = var9;
    var9 = {};
    var17 = var12.absoluteFillObject;
    var18 = var9;
    var12 = copyDataProperties(var18, var17);
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var11 = var10.BLACK;
    var10 = 'backgroundColor';
    var9[var10] = var11;
    var3.emptyPip = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967295,
        'left': 4294967295,
        'bottom': 4294967295,
        'right': 4294967295,
        'borderWidth': 2,
        'borderColor': 'white',
        'zIndex': 1,
        'opacity': 0.3
    };
    var3.innerStroke = var9;
    var9 = {};
    var10 = 'black';
    var9.backgroundColor = var10;
    var3.blackBackground = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot23 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}';
    var3.code = var7;
    var _closure1_slot24 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}';
    var3.code = var7;
    var _closure1_slot25 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}';
    var3.code = var7;
    var _closure1_slot26 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}';
    var3.code = var7;
    var _closure1_slot27 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}';
    var3.code = var7;
    var _closure1_slot28 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}';
    var3.code = var7;
    var _closure1_slot29 = var3;
    var3 = {};
    var7 = "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}";
    var3.code = var7;
    var _closure1_slot30 = var3;
    var7 = var6.memo;
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.transitionState;
        var _closure2_slot0 = var8;
        var7 = var0.transitionCleanUp;
        var _closure2_slot1 = var7;
        var2 = _closure1_slot23;
        var3 = undefined;
        var4 = var2.bind(var3)();
        var6 = _closure1_slot4;
        var5 = var6.useEffect;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var7;
        var1 = function() { // Environment: var1
            _fun111924: for (var _fun111924_ip = 0;;) switch (_fun111924_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 22;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var2 = var2.TransitionStates;
                    var2 = var2.YEETED;
                    if (!(var3 === var2)) {
                        _fun111924_ip = 56;
                        continue _fun111924
                    }
                case 48:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                case 56:
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var1, var2);
        var2 = _closure1_slot21;
        var1 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 24;
        var0 = var5[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var4 = var4.emptyPip;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot31 = var3;
    var3 = var6.memo;
    var1 = function() {
        var5 = _closure1_slot4;
        var4 = var5.useContext;
        var1 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 18;
        var2 = var9[var2];
        var3 = undefined;
        var2 = var1.bind(var3)(var2);
        var2 = var4.bind(var5)(var2);
        var4 = var2.channelId;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var2 = 23;
        var2 = var9[var2];
        var6 = var5.bind(var3)(var2);
        var2 = var6.usePIPState;
        var2 = var2.bind(var6)();
        var15 = var2.id;
        var _closure2_slot1 = var15;
        var12 = var2.width;
        var _closure2_slot2 = var12;
        var11 = var2.height;
        var _closure2_slot3 = var11;
        var2 = _closure1_slot23;
        var10 = var2.bind(var3)();
        var _closure2_slot4 = var10;
        var6 = _closure1_slot10;
        var2 = var6.getId;
        var2 = var2.bind(var6)();
        var _closure2_slot5 = var2;
        var6 = 26;
        var6 = var9[var6];
        var14 = var5.bind(var3)(var6);
        var13 = var14.useStateFromStores;
        var6 = _closure1_slot7;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = new Array(3);
        var6[0] = var15;
        var6[1] = var4;
        var6[2] = var2;
        var16 = _closure1_slot44;
        var18 = function() { // Environment: var0
            _fun111926: for (var _fun111926_ip = 0;;) switch (_fun111926_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    if (!(var4 == var2)) {
                        _fun111926_ip = 28;
                        continue _fun111926
                    }
                case 13:
                    var0 = _closure1_slot19;
                    var0 = var0.USER;
                    _fun111926_ip = 68;
                    continue _fun111926;
                case 28:
                    var6 = _closure1_slot7;
                    var5 = var6.getParticipant;
                    var1 = _closure2_slot0;
                    var5 = var5.bind(var6)(var1, var2);
                    var6 = var4 == var5;
                    var1 = undefined;
                    if (var6) {
                        _fun111926_ip = 65;
                        continue _fun111926
                    }
                case 60:
                    var1 = var5.type;
                case 65:
                    var0 = var1;
                case 68:
                    if (!(var4 == var0)) {
                        _fun111926_ip = 85;
                        continue _fun111926
                    }
                case 72:
                    var1 = _closure1_slot19;
                    var0 = var1.USER;
                case 85:
                    var1 = {};
                    if (!(var4 == var2)) {
                        _fun111926_ip = 95;
                        continue _fun111926
                    }
                case 91:
                    var2 = _closure2_slot5;
                case 95:
                    var1.id = var2;
                    var1.type = var0;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
            }
        };
        var20 = var14;
        var19 = var8;
        var17 = var6;
        var8 = var20[var13](var19, var18, var17, var16, var15);
        var6 = _closure1_slot4;
        var4 = var6.useMemo;
        var2 = new Array(3);
        var2[0] = var12;
        var2[1] = var11;
        var10 = var10.contentWrapper;
        var2[2] = var10;
        var0 = function() { // Environment: var0
            var0 = _closure2_slot4;
            var0 = var0.contentWrapper;
            var1 = new Array(2);
            var1[0] = var0;
            var0 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 25;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getVoicePanelPIPBorderRadius;
            var3 = _closure2_slot2;
            var2 = _closure2_slot3;
            var2 = var4.bind(var5)(var3, var2);
            var0.borderRadius = var2;
            var1[1] = var0;
            var0 = new Array(1);
            var0[0] = var1;
            return var0;
        };
        var4 = var4.bind(var6)(var0, var2);
        var2 = _closure1_slot21;
        var0 = 24;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.style = var4;
        var4 = 'none';
        var0.pointerEvents = var4;
        var6 = _closure1_slot21;
        var4 = 22;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.TransitionGroup;
        var4 = {};
        var4.items = var8;
        var8 = _closure1_slot43;
        var4.renderItem = var8;
        var7 = _closure1_slot42;
        var4.getItemKey = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 41;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/pip/VoicePanelPIPContent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 3950, 7922, 3716, 1216, 1372, 1621, 11840, 14283, 660, 3459, 3525, 33, 1297, 671, 11839, 14277, 8068, 1229, 4028, 14287, 6481, 14282, 632, 1464, 3722, 8083, 6920, 8073, 5457, 4087, 7539, 11842, 6482, 14221, 8062, 8034, 8037, 2]);