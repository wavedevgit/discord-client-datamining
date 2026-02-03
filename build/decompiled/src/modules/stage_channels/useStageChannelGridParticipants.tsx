// modules/stage_channels/useStageChannelGridParticipants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun69524: for (var _fun69524_ip = 0;;) switch (_fun69524_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun69524_ip = 46;
                    continue _fun69524
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun69524_ip = 55;
                    continue _fun69524
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun69524_ip = 345;
                    continue _fun69524
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun69524_ip = 323;
                    continue _fun69524
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun69524_ip = 283;
                    continue _fun69524
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun69524_ip = 270;
                    continue _fun69524
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
                    _fun69524_ip = 163;
                    continue _fun69524
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun69524_ip = 179;
                    continue _fun69524
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun69524_ip = 249;
                    continue _fun69524
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun69524_ip = 249;
                    continue _fun69524
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun69524_ip = 234;
                    continue _fun69524
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun69524_ip = 247;
                    continue _fun69524
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun69524_ip = 265;
                continue _fun69524;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun69524_ip = 283;
                continue _fun69524;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun69524_ip = 323;
                    continue _fun69524
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
                    _fun69524_ip = 330;
                    continue _fun69524
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun69525: for (var _fun69525_ip = 0;;) switch (_fun69525_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun69525_ip = 56;
                                continue _fun69525
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
                            _fun69525_ip = 67;
                            continue _fun69525;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun69526: for (var _fun69526_ip = 0;;) switch (_fun69526_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun69526_ip = 23;
                    continue _fun69526
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun69526_ip = 33;
                    continue _fun69526
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
                    _fun69526_ip = 70;
                    continue _fun69526
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun69526_ip = 55;
                    continue _fun69526
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var3 = function arg0, arg1, arg2() {
        var4 = arg0;
        var7 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var5;
        var6 = _closure1_slot0;
        var9 = _closure1_slot1;
        var2 = 4;
        var8 = var9[var2];
        var3 = undefined;
        var14 = var6.bind(var3)(var8);
        var13 = var14.useStateFromStores;
        var8 = _closure1_slot5;
        var12 = new Array(1);
        var12[0] = var8;
        var11 = new Array(1);
        var11[0] = var4;
        var8 = 5;
        var8 = var9[var8];
        var8 = var6.bind(var3)(var8);
        var15 = var8.isVersionEqual;
        var17 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var0 = new Array(2);
            var0[0] = var3;
            var2 = _closure1_slot5;
            var1 = var2.getParticipantsVersion;
            var1 = var1.bind(var2)(var3);
            var0[1] = var1;
            return var0;
        };
        var19 = var14;
        var18 = var12;
        var16 = var11;
        var8 = var19[var13](var18, var17, var16, var15, var14);
        var _closure2_slot3 = var8;
        var2 = var9[var2];
        var10 = var6.bind(var3)(var2);
        var9 = var10.useStateFromStores;
        var2 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var2;
        var3 = new Array(1);
        var3[0] = var4;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getSelectedParticipantId;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var9.bind(var10)(var6, var2, var3);
        var _closure2_slot4 = var6;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1[3] = var5;
        var1[4] = var4;
        var0 = function() { // Environment: var0
            _fun69530: for (var _fun69530_ip = 0;;) switch (_fun69530_ip) {
                case 0:
                    var2 = new Array(0);
                    var _closure3_slot0 = var2;
                    var1 = new Array(0);
                    var _closure3_slot1 = var1;
                    var11 = -1;
                    var _closure3_slot2 = var11;
                    var6 = new Array(0);
                    var3 = _closure2_slot2;
                    if (!var3) {
                        _fun69530_ip = 211;
                        continue _fun69530
                    }
                case 45:
                    var4 = _closure1_slot7;
                    var13 = _closure1_slot5;
                    var12 = var13.getMutableParticipants;
                    var5 = _closure2_slot0;
                    var14 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var9 = 6;
                    var3 = var3[var9];
                    var8 = undefined;
                    var3 = var14.bind(var8)(var3);
                    var3 = var3.StageChannelParticipantNamedIndex;
                    var3 = var3.SPEAKER;
                    var3 = var12.bind(var13)(var5, var3);
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.bind(var8)();
                    var3 = var4.done;
                    if (var3) {
                        _fun69530_ip = 211;
                        continue _fun69530
                    }
                case 123:
                    var12 = var4.value;
                    var13 = var12.type;
                    var14 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var9];
                    var3 = var14.bind(var8)(var3);
                    var3 = var3.StageChannelParticipantTypes;
                    var3 = var3.STREAM;
                    if (!(var13 === var3)) {
                        _fun69530_ip = 211;
                        continue _fun69530
                    }
                case 166:
                    var13 = var12.id;
                    var3 = _closure2_slot4;
                    if (!(var13 !== var3)) {
                        _fun69530_ip = 189;
                        continue _fun69530
                    }
                case 179:
                    var3 = var6.push;
                    var3 = var3.bind(var6)(var12);
                case 189:
                    var11 = var11 + 1;
                    _closure3_slot2 = var11;
                    var12 = var5.bind(var8)();
                    var3 = var12.done;
                    var4 = var12;
                    if (!var3) {
                        _fun69530_ip = 123;
                        continue _fun69530
                    }
                case 211:
                    var5 = function arg0, arg1, arg2() {
                        _fun69531: for (var _fun69531_ip = 0;;) switch (_fun69531_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = arg2;
                                var4 = var2;
                                if (!var0) {
                                    _fun69531_ip = 31;
                                    continue _fun69531
                                }
                            case 12:
                                var1 = var2.filter;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun69532: for (var _fun69532_ip = 0;;) switch (_fun69532_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0.id;
                                            var0 = _closure2_slot4;
                                            var0 = var1 !== var0;
                                            if (!var0) {
                                                _fun69532_ip = 36;
                                                continue _fun69532
                                            }
                                        case 22:
                                            var2 = _closure3_slot2;
                                            var1 = arg1;
                                            var0 = var1 > var2;
                                        case 36:
                                            return var0;
                                    }
                                };
                                var4 = var1.bind(var2)(var0);
                            case 31:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.chunk;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var4, var1);
                                var4 = _closure3_slot1;
                                var3 = var4.push;
                                var3 = var3.bind(var4)(var1);
                                var3 = _closure3_slot0;
                                var2 = var3.push;
                                var1 = var1.length;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var5;
                    var3 = _closure2_slot4;
                    var4 = null;
                    var8 = var4 != var3;
                    var3 = null;
                    if (!var8) {
                        _fun69530_ip = 264;
                        continue _fun69530
                    }
                case 237:
                    var10 = _closure1_slot5;
                    var9 = var10.getParticipant;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot4;
                    var3 = var9.bind(var10)(var8, var7);
                case 264:
                    if (!(var4 != var3)) {
                        _fun69530_ip = 277;
                        continue _fun69530
                    }
                case 268:
                    var4 = var3.speaker;
                    if (var4) {
                        _fun69530_ip = 297;
                        continue _fun69530
                    }
                case 277:
                    var9 = undefined;
                    var8 = new Array(0);
                    var7 = 1;
                    var4 = false;
                    var4 = var5.bind(var9)(var8, var7, var4);
                    _fun69530_ip = 319;
                    continue _fun69530;
                case 297:
                    var8 = new Array(1);
                    var8[0] = var3;
                    var7 = undefined;
                    var4 = 1;
                    var3 = false;
                    var3 = var5.bind(var7)(var8, var4, var3);
                case 319:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var3 = 6;
                    var7 = var9[var3];
                    var4 = undefined;
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.StageChannelParticipantNamedIndex;
                    var10 = var7.SPEAKER;
                    var7 = new Array(2);
                    var7[0] = var10;
                    var3 = var9[var3];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.StageChannelParticipantNamedIndex;
                    var3 = var3.AUDIENCE;
                    var7[1] = var3;
                    var3 = var7.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var5 = arg0;
                        var4 = _closure3_slot3;
                        var6 = _closure1_slot5;
                        var3 = var6.getMutableParticipants;
                        var7 = _closure2_slot3;
                        var2 = 0;
                        var2 = var7[var2];
                        var3 = var3.bind(var6)(var2, var5);
                        var1 = _closure2_slot1;
                        var2 = var1[var5];
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var6.bind(var0)(var1);
                        var1 = var1.StageChannelParticipantNamedIndex;
                        var1 = var1.SPEAKER;
                        var1 = var5 === var1;
                        var1 = var4.bind(var0)(var3, var2, var1);
                        return var0;
                    };
                    var0 = var3.bind(var7)(var0);
                    var3 = 1;
                    var0 = false;
                    var0 = var5.bind(var4)(var6, var3, var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var11 = 0;
    var4 = var6[var11];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var10 = 1;
    var8 = var6[var10];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var9 = 2;
    var4 = var6[var9];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var8 = 3;
    var4 = var6[var8];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = {};
    var4.SELECTED = var11;
    var7 = 'SELECTED';
    var4[var11] = var7;
    var4.SPEAKER = var10;
    var7 = 'SPEAKER';
    var4[var10] = var7;
    var4.AUDIENCE = var9;
    var7 = 'AUDIENCE';
    var4[var9] = var7;
    var4.MEDIA = var8;
    var7 = 'MEDIA';
    var4[var8] = var7;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useStageChannelGridParticipants.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useStageChannelParticipantsList = var3;
    var3 = function arg0() {
        _fun69534: for (var _fun69534_ip = 0;;) switch (_fun69534_ip) {
            case 0:
                var1 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 8;
                var0 = var7[var0];
                var5 = undefined;
                var6 = var1.bind(var5)(var0);
                var4 = var6.useStageParticipantsCount;
                var0 = 6;
                var0 = var7[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.StageChannelParticipantNamedIndex;
                var1 = var0.AUDIENCE;
                var0 = arg0;
                var6 = var4.bind(var6)(var0, var1);
                var _closure2_slot0 = var6;
                var4 = _closure1_slot3;
                var1 = var4.useState;
                var0 = false;
                var4 = var1.bind(var4)(var0);
                var1 = _closure1_slot2;
                var0 = 2;
                var5 = var1.bind(var5)(var4, var0);
                var0 = 0;
                var1 = var5[var0];
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot1 = var4;
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() { // Environment: var2
                    _fun69535: for (var _fun69535_ip = 0;;) switch (_fun69535_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = 100;
                            if (!(!(var2 > var1))) {
                                _fun69535_ip = 40;
                                continue _fun69535
                            }
                        case 14:
                            var2 = _closure2_slot0;
                            var1 = 75;
                            if (!(var2 < var1)) {
                                _fun69535_ip = 53;
                                continue _fun69535
                            }
                        case 25:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                            _fun69535_ip = 53;
                            continue _fun69535;
                        case 40:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                if (!var1) {
                    _fun69534_ip = 155;
                    continue _fun69534
                }
            case 149:
                var0 = 5000;
            case 155:
                return var0;
        }
    };
    var2.useThrottleDurationForChannel = var3;
    var1 = function arg0, arg1, arg2() {
        _fun69536: for (var _fun69536_ip = 0;;) switch (_fun69536_ip) {
            case 0:
                var10 = arg1;
                var0 = arguments[3];
                var9 = undefined;
                if (!(var0 === var9)) {
                    _fun69536_ip = 14;
                    continue _fun69536
                }
            case 12:
                var0 = false;
            case 14:
                var3 = _closure1_slot9;
                var1 = arg0;
                var13 = var3.bind(var9)(var1, var10, var0);
                var7 = _closure1_slot2;
                var6 = 2;
                var1 = var7.bind(var9)(var13, var6);
                var4 = 0;
                var8 = var1[var4];
                var3 = 1;
                var5 = var1[var3];
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var1 = 9;
                var1 = var15[var1];
                var12 = var14.bind(var9)(var1);
                var11 = var12.useThrottledState;
                var1 = 6;
                var1 = var15[var1];
                var1 = var14.bind(var9)(var1);
                var1 = var1.StageChannelParticipantNamedIndex;
                var1 = var1.AUDIENCE;
                var1 = var10[var1];
                var10 = new Array(1);
                var10[0] = var1;
                var1 = arg2;
                var1 = var11.bind(var12)(var13, var1, var10);
                var1 = var7.bind(var9)(var1, var6);
                var6 = var1[var4];
                var3 = var1[var3];
                var4 = _closure1_slot6;
                var1 = var0;
                if (var1) {
                    _fun69536_ip = 161;
                    continue _fun69536
                }
            case 153:
                var0 = var4.SELECTED;
                _fun69536_ip = 167;
                continue _fun69536;
            case 161:
                var0 = var4.MEDIA;
            case 167:
                var0 = var8[var0];
                var4 = new Array(3);
                var4[0] = var0;
                var0 = _closure1_slot6;
                var7 = var0.SPEAKER;
                var7 = var8[var7];
                var4[1] = var7;
                var0 = var0.AUDIENCE;
                var0 = var6[var0];
                var4[2] = var0;
                var0 = new Array(2);
                var0[0] = var4;
                var4 = _closure1_slot6;
                if (var1) {
                    _fun69536_ip = 234;
                    continue _fun69536
                }
            case 226:
                var1 = var4.SELECTED;
                _fun69536_ip = 240;
                continue _fun69536;
            case 234:
                var1 = var4.MEDIA;
            case 240:
                var4 = var5[var1];
                var1 = new Array(3);
                var1[0] = var4;
                var2 = _closure1_slot6;
                var4 = var2.SPEAKER;
                var4 = var5[var4];
                var1[1] = var4;
                var2 = var2.AUDIENCE;
                var2 = var3[var2];
                var1[2] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var2.useStageChannelParticipantsListThrottled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3948, 4245, 566, 8411, 5662, 22, 8410, 8691, 2]);