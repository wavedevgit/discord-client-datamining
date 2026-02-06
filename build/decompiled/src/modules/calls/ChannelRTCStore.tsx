// modules/calls/ChannelRTCStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun35931: for (var _fun35931_ip = 0;;) switch (_fun35931_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun35931_ip = 74;
                continue _fun35931;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot42 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function arg0, arg1() {
        _fun35934: for (var _fun35934_ip = 0;;) switch (_fun35934_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun35934_ip = 46;
                    continue _fun35934
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun35934_ip = 55;
                    continue _fun35934
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun35934_ip = 343;
                    continue _fun35934
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun35934_ip = 323;
                    continue _fun35934
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun35934_ip = 283;
                    continue _fun35934
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun35934_ip = 270;
                    continue _fun35934
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
                    _fun35934_ip = 163;
                    continue _fun35934
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun35934_ip = 179;
                    continue _fun35934
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun35934_ip = 249;
                    continue _fun35934
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun35934_ip = 249;
                    continue _fun35934
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun35934_ip = 234;
                    continue _fun35934
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun35934_ip = 247;
                    continue _fun35934
                }
            case 234:
                var8 = _closure1_slot44;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun35934_ip = 265;
                continue _fun35934;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun35934_ip = 283;
                continue _fun35934;
            case 270:
                var6 = _closure1_slot44;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun35934_ip = 323;
                    continue _fun35934
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
                    _fun35934_ip = 330;
                    continue _fun35934
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun35935: for (var _fun35935_ip = 0;;) switch (_fun35935_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun35935_ip = 56;
                                continue _fun35935
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
                            _fun35935_ip = 67;
                            continue _fun35935;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0, arg1() {
        _fun35936: for (var _fun35936_ip = 0;;) switch (_fun35936_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun35936_ip = 23;
                    continue _fun35936
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun35936_ip = 33;
                    continue _fun35936
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
                    _fun35936_ip = 70;
                    continue _fun35936
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun35936_ip = 55;
                    continue _fun35936
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function arg0() {
        _fun35937: for (var _fun35937_ip = 0;;) switch (_fun35937_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot31;
                var0 = var0[var3];
                var1 = null;
                if (!(var1 == var0)) {
                    _fun35937_ip = 76;
                    continue _fun35937
                }
            case 20:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 21;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var4;
                var6 = var3;
                var1 = new var7[var1](var6, var5);
                var1 = var1 instanceof Object ? var1 : var4;
                var2 = _closure1_slot31;
                var2[var3] = var1;
                var0 = var1;
            case 76:
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function arg0() {
        _fun35938: for (var _fun35938_ip = 0;;) switch (_fun35938_ip) {
            case 0:
                var3 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun35938_ip = 25;
                    continue _fun35938
                }
            case 18:
                var3 = _closure1_slot30;
            case 25:
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun35939: for (var _fun35939_ip = 0;;) switch (_fun35939_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = arg1;
                            var4 = _closure1_slot45;
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = _closure2_slot0;
                            var4 = var4.bind(var2)(var5);
                            if (!var4) {
                                _fun35939_ip = 212;
                                continue _fun35939
                            }
                        case 38:
                            var4 = _closure1_slot45;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.size;
                            var6 = var4.bind(var5)();
                            var4 = 0;
                            if (!(var4 !== var6)) {
                                _fun35939_ip = 198;
                                continue _fun35939
                            }
                        case 65:
                            var4 = _closure1_slot56;
                            var4 = var4.bind(var2)(var3);
                            if (var4) {
                                _fun35939_ip = 101;
                                continue _fun35939
                            }
                        case 77:
                            var4 = _closure1_slot52;
                            var4 = var4.bind(var2)(var5);
                            if (var4) {
                                _fun35939_ip = 101;
                                continue _fun35939
                            }
                        case 89:
                            var4 = _closure1_slot25;
                            var5 = var4.VOICE;
                            _fun35939_ip = 111;
                            continue _fun35939;
                        case 101:
                            var4 = _closure1_slot25;
                            var5 = var4.VIDEO;
                        case 111:
                            var4 = _closure1_slot25;
                            var4 = var4.VOICE;
                            if (!(var5 !== var4)) {
                                _fun35939_ip = 135;
                                continue _fun35939
                            }
                        case 125:
                            var4 = _closure1_slot34;
                            var4[var3] = var5;
                            _fun35939_ip = 198;
                            continue _fun35939;
                        case 135:
                            var4 = _closure1_slot35;
                            var6 = var4[var3];
                            var4 = null;
                            var4 = var4 == var6;
                            var5 = undefined;
                            if (var4) {
                                _fun35939_ip = 168;
                                continue _fun35939
                            }
                        case 154:
                            var4 = _closure1_slot27;
                            var4 = var4.APP;
                            var5 = var6[var4];
                        case 168:
                            var4 = _closure1_slot34;
                            var4 = delete var4[var3];
                            var4 = _closure1_slot24;
                            var4 = var4.HAVEN;
                            if (!(var5 !== var4)) {
                                _fun35939_ip = 198;
                                continue _fun35939
                            }
                        case 190:
                            var1 = _closure1_slot35;
                            var1 = delete var1[var3];
                        case 198:
                            var1 = function arg0() {
                                _fun35940: for (var _fun35940_ip = 0;;) switch (_fun35940_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure1_slot12;
                                        var0 = var2.getId;
                                        var6 = var0.bind(var2)();
                                        var _closure4_slot0 = var6;
                                        var2 = _closure1_slot45;
                                        var0 = undefined;
                                        var7 = var2.bind(var0)(var3);
                                        var2 = var7.size;
                                        var2 = var2.bind(var7)();
                                        var4 = 0;
                                        if (!(var4 !== var2)) {
                                            _fun35940_ip = 553;
                                            continue _fun35940
                                        }
                                    case 55:
                                        var5 = _closure1_slot16;
                                        var2 = var5.getVoiceChannelId;
                                        var2 = var2.bind(var5)();
                                        if (!(var2 === var3)) {
                                            _fun35940_ip = 553;
                                            continue _fun35940
                                        }
                                    case 76:
                                        var2 = _closure1_slot22;
                                        var2 = var2.NONE;
                                        var5 = var7.toArray;
                                        var9 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var12 = 21;
                                        var2 = var2[var12];
                                        var2 = var9.bind(var0)(var2);
                                        var2 = var2.ChannelRTCParticipantsIndexes;
                                        var2 = var2.STREAM;
                                        var9 = var5.bind(var7)(var2);
                                        var5 = var9.find;
                                        var2 = function(arg0) { // Environment: var8
                                            _fun35941: for (var _fun35941_ip = 0;;) switch (_fun35941_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var3 = var1.type;
                                                    var0 = _closure1_slot21;
                                                    var0 = var0.STREAM;
                                                    var0 = var3 === var0;
                                                    if (!var0) {
                                                        _fun35941_ip = 48;
                                                        continue _fun35941
                                                    }
                                                case 28:
                                                    var3 = _closure1_slot11;
                                                    var2 = var3.getActiveStreamForStreamKey;
                                                    var1 = var1.id;
                                                    var0 = var2.bind(var3)(var1);
                                                case 48:
                                                    return var0;
                                            }
                                        };
                                        var2 = var5.bind(var9)(var2);
                                        var9 = null;
                                        if (!(var9 == var2)) {
                                            _fun35940_ip = 330;
                                            continue _fun35940
                                        }
                                    case 153:
                                        var5 = var7.size;
                                        var11 = var5.bind(var7)();
                                        var10 = 1;
                                        var5 = var6;
                                        if (!(var10 !== var11)) {
                                            _fun35940_ip = 386;
                                            continue _fun35940
                                        }
                                    case 175:
                                        var13 = var7.size;
                                        var14 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var11 = var11[var12];
                                        var11 = var14.bind(var0)(var11);
                                        var11 = var11.ChannelRTCParticipantsIndexes;
                                        var11 = var11.VIDEO;
                                        var11 = var13.bind(var7)(var11);
                                        if (!(var10 !== var11)) {
                                            _fun35940_ip = 269;
                                            continue _fun35940
                                        }
                                    case 218:
                                        var11 = var7.toArray;
                                        var13 = var11.bind(var7)();
                                        var11 = var13.find;
                                        var8 = function(arg0) { // Environment: var8
                                            _fun35942: for (var _fun35942_ip = 0;;) switch (_fun35942_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = var1.type;
                                                    var0 = _closure1_slot21;
                                                    var0 = var0.USER;
                                                    var0 = var2 === var0;
                                                    if (!var0) {
                                                        _fun35942_ip = 44;
                                                        continue _fun35942
                                                    }
                                                case 28:
                                                    var3 = var1.id;
                                                    var2 = _closure4_slot0;
                                                    var0 = var3 !== var2;
                                                case 44:
                                                    if (!var0) {
                                                        _fun35942_ip = 56;
                                                        continue _fun35942
                                                    }
                                                case 47:
                                                    var1 = var1.ringing;
                                                    var0 = !var1;
                                                case 56:
                                                    return var0;
                                            }
                                        };
                                        var11 = var11.bind(var13)(var8);
                                        var13 = var9 == var11;
                                        var8 = undefined;
                                        if (var13) {
                                            _fun35940_ip = 257;
                                            continue _fun35940
                                        }
                                    case 252:
                                        var8 = var11.id;
                                    case 257:
                                        if (!(var9 != var8)) {
                                            _fun35940_ip = 264;
                                            continue _fun35940
                                        }
                                    case 261:
                                        var6 = var8;
                                    case 264:
                                        var5 = var6;
                                        _fun35940_ip = 386;
                                        continue _fun35940;
                                    case 269:
                                        var8 = var7.toArray;
                                        var11 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var6 = var6[var12];
                                        var6 = var11.bind(var0)(var6);
                                        var6 = var6.ChannelRTCParticipantsIndexes;
                                        var6 = var6.VIDEO;
                                        var8 = var8.bind(var7)(var6);
                                        var6 = _closure1_slot8;
                                        var6 = var6.bind(var0)(var8, var10);
                                        var6 = var6[var4];
                                        var5 = var6.id;
                                        _fun35940_ip = 386;
                                        continue _fun35940;
                                    case 330:
                                        var8 = _closure1_slot1;
                                        var10 = _closure1_slot2;
                                        var6 = 23;
                                        var6 = var10[var6];
                                        var10 = var8.bind(var0)(var6);
                                        var8 = var2.type;
                                        var6 = _closure1_slot21;
                                        var6 = var6.STREAM;
                                        var8 = var8 === var6;
                                        var6 = 'Impossible condition';
                                        var6 = var10.bind(var0)(var8, var6);
                                        var5 = var2.id;
                                    case 386:
                                        var2 = _closure1_slot48;
                                        var8 = var2.bind(var0)(var3);
                                        var6 = _closure1_slot8;
                                        var2 = 1;
                                        var2 = var6.bind(var0)(var8, var2);
                                        var4 = var2[var4];
                                        var2 = _closure1_slot22;
                                        var2 = var2.AUTO;
                                        var6 = var4;
                                        if (!(var6 !== var2)) {
                                            _fun35940_ip = 529;
                                            continue _fun35940
                                        }
                                    case 429:
                                        var2 = _closure1_slot22;
                                        var2 = var2.NONE;
                                        var6 = var4;
                                        if (!(var4 !== var2)) {
                                            _fun35940_ip = 529;
                                            continue _fun35940
                                        }
                                    case 446:
                                        var2 = var7.getParticipant;
                                        var8 = var2.bind(var7)(var4);
                                        var2 = var9 == var8;
                                        if (var2) {
                                            _fun35940_ip = 513;
                                            continue _fun35940
                                        }
                                    case 464:
                                        var10 = var8.type;
                                        var7 = _closure1_slot21;
                                        var7 = var7.STREAM;
                                        var7 = var10 === var7;
                                        if (!var7) {
                                            _fun35940_ip = 510;
                                            continue _fun35940
                                        }
                                    case 486:
                                        var11 = _closure1_slot11;
                                        var10 = var11.getActiveStreamForStreamKey;
                                        var8 = var8.id;
                                        var8 = var10.bind(var11)(var8);
                                        var7 = var9 == var8;
                                    case 510:
                                        var2 = var7;
                                    case 513:
                                        var6 = var4;
                                        if (!var2) {
                                            _fun35940_ip = 529;
                                            continue _fun35940
                                        }
                                    case 519:
                                        var2 = _closure1_slot22;
                                        var6 = var2.NONE;
                                    case 529:
                                        var4 = _closure1_slot51;
                                        var2 = new Array(2);
                                        var2[0] = var6;
                                        var2[1] = var5;
                                        var2 = var4.bind(var0)(var3, var2);
                                        return var0;
                                    case 553:
                                        var2 = _closure1_slot51;
                                        var1 = null;
                                        var1 = var2.bind(var0)(var3, var1);
                                        return var0;
                                }
                            };
                            var1 = var1.bind(var2)(var3);
                            var0 = true;
                        case 212:
                            return var0;
                    }
                };
                var0 = false;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function arg0() {
        _fun35943: for (var _fun35943_ip = 0;;) switch (_fun35943_ip) {
            case 0:
                var3 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun35943_ip = 25;
                    continue _fun35943
                }
            case 18:
                var3 = _closure1_slot30;
            case 25:
                var1 = _closure1_slot46;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.updateParticipant;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function arg0() {
        _fun35945: for (var _fun35945_ip = 0;;) switch (_fun35945_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot14;
                var0 = var1.getChannel;
                var3 = var0.bind(var1)(var4);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun35945_ip = 36;
                    continue _fun35945
                }
            case 26:
                var0 = var3.isDM;
                var0 = var0.bind(var3)();
            case 36:
                var0 = _closure1_slot22;
                var3 = var0.NONE;
                var0 = _closure1_slot32;
                var0 = var0[var4];
                if (!(var1 == var0)) {
                    _fun35945_ip = 83;
                    continue _fun35945
                }
            case 58:
                var1 = new Array(2);
                var1[0] = var3;
                var2 = _closure1_slot22;
                var2 = var2.NONE;
                var1[1] = var2;
                var0 = var1;
            case 83:
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var0 = function arg0() {
        _fun35946: for (var _fun35946_ip = 0;;) switch (_fun35946_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot32;
                var2 = var0[var3];
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun35946_ip = 66;
                    continue _fun35946
                }
            case 23:
                var5 = _closure1_slot8;
                var2 = _closure1_slot32;
                var4 = var2[var3];
                var3 = undefined;
                var2 = 1;
                var3 = var5.bind(var3)(var4, var2);
                var2 = 0;
                var2 = var3[var2];
                var1 = _closure1_slot22;
                var1 = var1.NONE;
                var0 = var2 !== var1;
            case 66:
                return var0;
        }
    };
    var _closure1_slot49 = var0;
    var0 = function arg0() {
        _fun35947: for (var _fun35947_ip = 0;;) switch (_fun35947_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot33;
                var2 = var1[var4];
                var1 = null;
                if (!(var1 == var2)) {
                    _fun35947_ip = 42;
                    continue _fun35947
                }
            case 20:
                var2 = _closure1_slot33;
                var1 = {
                    'gridDurationMs': 0,
                    'focusDurationMs': 0,
                    'toggleCount': 0,
                    'lastUpdate': 0
                };
                var2[var4] = var1;
            case 42:
                var1 = _closure1_slot33;
                var2 = var1[var4];
                var1 = global;
                var3 = var1.performance;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var3 = _closure1_slot49;
                var0 = undefined;
                var3 = var3.bind(var0)(var4);
                var5 = var2.lastUpdate;
                var4 = 0;
                if (!(var5 > var4)) {
                    _fun35947_ip = 123;
                    continue _fun35947
                }
            case 90:
                var4 = var2.lastUpdate;
                var5 = var1 - var4;
                var4 = 'gridDurationMs';
                if (!var3) {
                    _fun35947_ip = 111;
                    continue _fun35947
                }
            case 107:
                var4 = 'focusDurationMs';
            case 111:
                var3 = var2[var4];
                var3 = var3 + var5;
                var2[var4] = var3;
            case 123:
                var2.lastUpdate = var1;
                return var0;
        }
    };
    var _closure1_slot50 = var0;
    var0 = function arg0, arg1() {
        _fun35948: for (var _fun35948_ip = 0;;) switch (_fun35948_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var3 = _closure1_slot50;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var3 = _closure1_slot49;
                var4 = var3.bind(var0)(var2);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun35948_ip = 45;
                    continue _fun35948
                }
            case 35:
                var3 = _closure1_slot32;
                var3[var2] = var5;
                _fun35948_ip = 53;
                continue _fun35948;
            case 45:
                var3 = _closure1_slot32;
                var3 = delete var3[var2];
            case 53:
                var3 = _closure1_slot49;
                var3 = var3.bind(var0)(var2);
                if (!(var4 !== var3)) {
                    _fun35948_ip = 89;
                    continue _fun35948
                }
            case 66:
                var1 = _closure1_slot33;
                var2 = var1[var2];
                var1 = var2.toggleCount;
                var1 = var1 + 1;
                var2.toggleCount = var1;
            case 89:
                return var0;
        }
    };
    var _closure1_slot51 = var0;
    var0 = function arg0() {
        _fun35949: for (var _fun35949_ip = 0;;) switch (_fun35949_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.size;
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 21;
                var0 = var0[var7];
                var6 = undefined;
                var0 = var4.bind(var6)(var0);
                var0 = var0.ChannelRTCParticipantsIndexes;
                var0 = var0.STREAM;
                var0 = var3.bind(var2)(var0);
                var3 = 0;
                var0 = var0 > var3;
                if (var0) {
                    _fun35949_ip = 102;
                    continue _fun35949
                }
            case 59:
                var4 = var2.size;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ChannelRTCParticipantsIndexes;
                var1 = var1.VIDEO;
                var1 = var4.bind(var2)(var1);
                var0 = var1 > var3;
            case 102:
                if (var0) {
                    _fun35949_ip = 117;
                    continue _fun35949
                }
            case 105:
                var1 = var2.hasEmbeddedActivity;
                var0 = var1.bind(var2)();
            case 117:
                return var0;
        }
    };
    var _closure1_slot52 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var2 = _closure1_slot31;
        var2 = delete var2[var1];
        var2 = _closure1_slot32;
        var2 = delete var2[var1];
        var2 = _closure1_slot34;
        var2 = delete var2[var1];
        var0 = _closure1_slot35;
        var0 = delete var0[var1];
        var0 = undefined;
        return var0;
    };
    var _closure1_slot53 = var0;
    var14 = function() {
        _fun35951: for (var _fun35951_ip = 0;;) switch (_fun35951_ip) {
            case 0:
                var3 = _closure1_slot46;
                var0 = new Array(0);
                var2 = _closure1_slot16;
                var1 = var2.getChannelId;
                var5 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var5)) {
                    _fun35951_ip = 41;
                    continue _fun35951
                }
            case 31:
                var2 = var0.push;
                var2 = var2.bind(var0)(var5);
            case 41:
                var5 = _closure1_slot16;
                var2 = var5.getVoiceChannelId;
                var5 = var2.bind(var5)();
                var2 = var1 == var5;
                if (var2) {
                    _fun35951_ip = 72;
                    continue _fun35951
                }
            case 62:
                var6 = var0.includes;
                var2 = var6.bind(var0)(var5);
            case 72:
                if (var2) {
                    _fun35951_ip = 85;
                    continue _fun35951
                }
            case 75:
                var2 = var0.push;
                var2 = var2.bind(var0)(var5);
            case 85:
                var5 = _closure1_slot10;
                var2 = var5.getRemoteSessionId;
                var7 = var2.bind(var5)();
                var6 = _closure1_slot20;
                var5 = var6.getVoiceStateForSession;
                var8 = _closure1_slot12;
                var2 = var8.getId;
                var2 = var2.bind(var8)();
                var6 = var5.bind(var6)(var2, var7);
                var7 = var1 == var6;
                var2 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun35951_ip = 145;
                    continue _fun35951
                }
            case 140:
                var5 = var6.channelId;
            case 145:
                if (!(var1 != var5)) {
                    _fun35951_ip = 173;
                    continue _fun35951
                }
            case 149:
                var5 = var0.push;
                var7 = var1 == var6;
                var1 = undefined;
                if (var7) {
                    _fun35951_ip = 168;
                    continue _fun35951
                }
            case 163:
                var1 = var6.channelId;
            case 168:
                var1 = var5.bind(var0)(var1);
            case 173:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 22;
                var7 = var6[var1];
                var9 = var5.bind(var2)(var7);
                var8 = var9.difference;
                var7 = _closure1_slot30;
                var9 = var8.bind(var9)(var7, var0);
                var8 = var9.forEach;
                var7 = _closure1_slot53;
                var7 = var8.bind(var9)(var7);
                var1 = var6[var1];
                var6 = var5.bind(var2)(var1);
                var5 = var6.difference;
                var1 = _closure1_slot30;
                var1 = var5.bind(var6)(var0, var1);
                _closure1_slot30 = var0;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.rebuild;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var3.bind(var2)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot54 = var14;
    var0 = function() {
        var2 = _closure1_slot46;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.updateEmbeddedActivities;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot55 = var0;
    var10 = function arg0() {
        var1 = arg0;
        var1 = var1.userId;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot46;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.updateParticipantSpeaking;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var9 = function arg0() {
        var0 = arg0;
        var0 = var0.user;
        var2 = _closure1_slot47;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var12 = function arg0() {
        var0 = arg0;
        var0 = var0.channelId;
        var3 = _closure1_slot46;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.rebuild;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var13 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var2 = var0.id;
        var1 = _closure1_slot38;
        var1 = delete var1[var2];
        var1 = _closure1_slot39;
        var1 = delete var1[var2];
        var1 = _closure1_slot40;
        var1 = delete var1[var2];
        var1 = _closure1_slot53;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var11 = function arg0() {
        var0 = arg0;
        var4 = var0.streamKey;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 25;
        var0 = var3[var0];
        var3 = undefined;
        var2 = var2.bind(var3)(var0);
        var0 = var2.decodeStreamKey;
        var0 = var0.bind(var2)(var4);
        var4 = var0.channelId;
        var2 = _closure1_slot47;
        var1 = var0.ownerId;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0 = function arg0() {
        _fun35962: for (var _fun35962_ip = 0;;) switch (_fun35962_ip) {
            case 0:
                var0 = global;
                var2 = var0.Boolean;
                var3 = _closure1_slot14;
                var1 = var3.getChannel;
                var0 = arg0;
                var4 = var1.bind(var3)(var0);
                var0 = null;
                var3 = var0 == var4;
                var1 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun35962_ip = 51;
                    continue _fun35962
                }
            case 41:
                var3 = var4.isGuildVocalOrThread;
                var0 = var3.bind(var4)();
            case 51:
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot56 = var0;
    var1 = global;
    var15 = var1.Object;
    var8 = var15.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var15)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 15;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 16;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 17;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 18;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.ParticipantTypes;
    var _closure1_slot21 = var8;
    var8 = var3.ParticipantSelectionTypes;
    var _closure1_slot22 = var8;
    var3 = var3.isStreamParticipant;
    var _closure1_slot23 = var3;
    var3 = 19;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.ChannelLayouts;
    var _closure1_slot24 = var8;
    var8 = var3.ChannelModes;
    var _closure1_slot25 = var8;
    var8 = var3.ChannelTypes;
    var _closure1_slot26 = var8;
    var3 = var3.AppContext;
    var _closure1_slot27 = var3;
    var3 = 20;
    var3 = var6[var3];
    var8 = var7.bind(var0)(var3);
    var3 = var8.prototype;
    var15 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var3 = 'ChannelRTCStore';
    var19 = var15;
    var18 = var3;
    var8 = new var19[var8](var18, var17);
    var8 = var8 instanceof Object ? var8 : var15;
    var _closure1_slot28 = var8;
    var15 = var1.Object;
    var8 = var15.freeze;
    var1 = new Array(0);
    var1 = var8.bind(var15)(var1);
    var _closure1_slot29 = var1;
    var8 = new Array(0);
    var _closure1_slot30 = var8;
    var8 = {};
    var _closure1_slot31 = var8;
    var8 = {};
    var _closure1_slot32 = var8;
    var8 = {};
    var _closure1_slot33 = var8;
    var8 = {};
    var _closure1_slot34 = var8;
    var8 = {};
    var _closure1_slot35 = var8;
    var8 = {};
    var _closure1_slot36 = var8;
    var8 = {};
    var _closure1_slot37 = var8;
    var8 = {};
    var _closure1_slot38 = var8;
    var8 = {};
    var _closure1_slot39 = var8;
    var8 = {};
    var _closure1_slot40 = var8;
    var8 = {};
    var _closure1_slot41 = var8;
    var8 = 26;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var15 = var8.PersistedStore;
    var8 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun35964: for (var _fun35964_ip = 0;;) switch (_fun35964_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot42;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun35964_ip = 69;
                        continue _fun35964
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun35964_ip = 105;
                    continue _fun35964;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun35965: for (var _fun35965_ip = 0;;) switch (_fun35965_ip) {
                case 0:
                    var5 = arg0;
                    var4 = this;
                    var15 = var4.waitFor;
                    var27 = _closure1_slot11;
                    var26 = _closure1_slot12;
                    var25 = _closure1_slot13;
                    var24 = _closure1_slot14;
                    var0 = _closure1_slot9;
                    var22 = _closure1_slot10;
                    var21 = _closure1_slot15;
                    var20 = _closure1_slot16;
                    var19 = _closure1_slot17;
                    var18 = _closure1_slot18;
                    var17 = _closure1_slot19;
                    var16 = _closure1_slot20;
                    var28 = var4;
                    var23 = var0;
                    var1 = var28[var15](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
                    var3 = var4.syncWith;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = _closure1_slot55;
                    var0 = var3.bind(var4)(var1, var0);
                    var3 = var4.syncWith;
                    var0 = _closure1_slot10;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = _closure1_slot54;
                    var0 = var3.bind(var4)(var1, var0);
                    var1 = null;
                    var4 = var1 == var5;
                    var0 = undefined;
                    var3 = undefined;
                    if (var4) {
                        _fun35965_ip = 144;
                        continue _fun35965
                    }
                case 138:
                    var3 = var5.voiceParticipantsHidden;
                case 144:
                    if (!(var0 !== var3)) {
                        _fun35965_ip = 186;
                        continue _fun35965
                    }
                case 148:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.assign;
                    var2 = _closure1_slot37;
                    var6 = var1 == var5;
                    var1 = undefined;
                    if (var6) {
                        _fun35965_ip = 180;
                        continue _fun35965
                    }
                case 174:
                    var1 = var5.voiceParticipantsHidden;
                case 180:
                    var1 = var3.bind(var4)(var2, var1);
                case 186:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(26);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = _closure1_slot37;
            var0.voiceParticipantsHidden = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getParticipantsVersion';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.version;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getParticipants';
        var4.key = var6;
        var6 = function arg0() {
            _fun35968: for (var _fun35968_ip = 0;;) switch (_fun35968_ip) {
                case 0:
                    var3 = _closure1_slot45;
                    var2 = undefined;
                    var0 = arg0;
                    var2 = var3.bind(var2)(var0);
                    var0 = var2.toArray;
                    var0 = var0.bind(var2)();
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun35968_ip = 37;
                        continue _fun35968
                    }
                case 33:
                    var0 = _closure1_slot29;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSpeakingParticipants';
        var4.key = var6;
        var6 = function arg0() {
            _fun35969: for (var _fun35969_ip = 0;;) switch (_fun35969_ip) {
                case 0:
                    var2 = _closure1_slot45;
                    var5 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var5)(var0);
                    var2 = var3.toArray;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 21;
                    var0 = var6[var0];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ChannelRTCParticipantsIndexes;
                    var0 = var0.SPEAKING;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun35969_ip = 70;
                        continue _fun35969
                    }
                case 66:
                    var0 = _closure1_slot29;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getFilteredParticipants';
        var4.key = var6;
        var6 = function arg0() {
            _fun35970: for (var _fun35970_ip = 0;;) switch (_fun35970_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot45;
                    var5 = undefined;
                    var3 = var0.bind(var5)(var2);
                    var0 = _closure1_slot37;
                    var0 = var0[var2];
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun35970_ip = 34;
                        continue _fun35970
                    }
                case 31:
                    if (var0) {
                        _fun35970_ip = 79;
                        continue _fun35970
                    }
                case 34:
                    var2 = var3.toArray;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 21;
                    var0 = var6[var0];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ChannelRTCParticipantsIndexes;
                    var0 = var0.NOT_POPPED_OUT;
                    var0 = var2.bind(var3)(var0);
                    _fun35970_ip = 122;
                    continue _fun35970;
                case 79:
                    var2 = var3.toArray;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 21;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.ChannelRTCParticipantsIndexes;
                    var1 = var1.FILTERED;
                    var0 = var2.bind(var3)(var1);
                case 122:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getVideoParticipants';
        var4.key = var6;
        var6 = function arg0() {
            _fun35971: for (var _fun35971_ip = 0;;) switch (_fun35971_ip) {
                case 0:
                    var2 = _closure1_slot45;
                    var5 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var5)(var0);
                    var2 = var3.toArray;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 21;
                    var0 = var6[var0];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ChannelRTCParticipantsIndexes;
                    var0 = var0.VIDEO;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun35971_ip = 70;
                        continue _fun35971
                    }
                case 66:
                    var0 = _closure1_slot29;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getStreamParticipants';
        var4.key = var6;
        var6 = function arg0() {
            _fun35972: for (var _fun35972_ip = 0;;) switch (_fun35972_ip) {
                case 0:
                    var2 = _closure1_slot45;
                    var5 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var5)(var0);
                    var2 = var3.toArray;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 21;
                    var0 = var6[var0];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ChannelRTCParticipantsIndexes;
                    var0 = var0.STREAM;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun35972_ip = 70;
                        continue _fun35972
                    }
                case 66:
                    var0 = _closure1_slot29;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getActivityParticipants';
        var4.key = var6;
        var6 = function arg0() {
            _fun35973: for (var _fun35973_ip = 0;;) switch (_fun35973_ip) {
                case 0:
                    var2 = _closure1_slot45;
                    var5 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var5)(var0);
                    var2 = var3.toArray;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 21;
                    var0 = var6[var0];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.ChannelRTCParticipantsIndexes;
                    var0 = var0.ACTIVITY;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun35973_ip = 70;
                        continue _fun35973
                    }
                case 66:
                    var0 = _closure1_slot29;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getParticipant';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var2 = var2.bind(var1)(var0);
            var1 = var2.getParticipant;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getUserParticipantCount';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot45;
            var5 = undefined;
            var1 = arg0;
            var3 = var2.bind(var5)(var1);
            var1 = var3.size;
            var2 = var1.bind(var3)();
            var7 = var3.size;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 21;
            var1 = var6[var0];
            var1 = var4.bind(var5)(var1);
            var1 = var1.ChannelRTCParticipantsIndexes;
            var1 = var1.STREAM;
            var1 = var7.bind(var3)(var1);
            var1 = var2 - var1;
            var2 = var3.size;
            var0 = var6[var0];
            var0 = var4.bind(var5)(var0);
            var0 = var0.ChannelRTCParticipantsIndexes;
            var0 = var0.ACTIVITY;
            var0 = var2.bind(var3)(var0);
            var0 = var1 - var0;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getParticipantsOpen';
        var4.key = var6;
        var6 = function arg0() {
            _fun35976: for (var _fun35976_ip = 0;;) switch (_fun35976_ip) {
                case 0:
                    var1 = _closure1_slot36;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 == var1;
                    if (var0) {
                        _fun35976_ip = 26;
                        continue _fun35976
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getVoiceParticipantsHidden';
        var4.key = var6;
        var6 = function arg0() {
            _fun35977: for (var _fun35977_ip = 0;;) switch (_fun35977_ip) {
                case 0:
                    var1 = _closure1_slot37;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun35977_ip = 26;
                        continue _fun35977
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getSelectedParticipantId';
        var4.key = var6;
        var6 = function arg0() {
            _fun35978: for (var _fun35978_ip = 0;;) switch (_fun35978_ip) {
                case 0:
                    var1 = _closure1_slot48;
                    var3 = undefined;
                    var0 = arg0;
                    var2 = var1.bind(var3)(var0);
                    var1 = _closure1_slot8;
                    var0 = 2;
                    var2 = var1.bind(var3)(var2, var0);
                    var0 = 0;
                    var1 = var2[var0];
                    var0 = 1;
                    var3 = var2[var0];
                    var0 = _closure1_slot22;
                    var2 = var0.NONE;
                    var0 = null;
                    if (!(var1 !== var2)) {
                        _fun35978_ip = 114;
                        continue _fun35978
                    }
                case 59:
                    var2 = _closure1_slot22;
                    var2 = var2.AUTO;
                    if (!(var1 === var2)) {
                        _fun35978_ip = 111;
                        continue _fun35978
                    }
                case 73:
                    var2 = _closure1_slot22;
                    var6 = var2.NONE;
                    var2 = null;
                    if (!(var3 !== var6)) {
                        _fun35978_ip = 108;
                        continue _fun35978
                    }
                case 89:
                    var4 = _closure1_slot22;
                    var4 = var4.AUTO;
                    var2 = null;
                    if (!(var3 !== var4)) {
                        _fun35978_ip = 108;
                        continue _fun35978
                    }
                case 105:
                    var2 = var3;
                case 108:
                    var1 = var2;
                case 111:
                    var0 = var1;
                case 114:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getSelectedParticipant';
        var4.key = var6;
        var6 = function arg0() {
            _fun35979: for (var _fun35979_ip = 0;;) switch (_fun35979_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var0 = var1.getSelectedParticipantId;
                    var3 = var0.bind(var1)(var4);
                    var0 = null;
                    var1 = var0 == var3;
                    if (var1) {
                        _fun35979_ip = 51;
                        continue _fun35979
                    }
                case 26:
                    var2 = _closure1_slot45;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var4);
                    var1 = var2.getParticipant;
                    var0 = var1.bind(var2)(var3);
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getSelectedParticipantStats';
        var4.key = var6;
        var6 = function arg0() {
            _fun35980: for (var _fun35980_ip = 0;;) switch (_fun35980_ip) {
                case 0:
                    var1 = _closure1_slot33;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun35980_ip = 99;
                        continue _fun35980
                    }
                case 20:
                    var0 = {};
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.floor;
                    var3 = var1.gridDurationMs;
                    var3 = var4.bind(var5)(var3);
                    var0.view_mode_grid_duration_ms = var3;
                    var4 = var2.Math;
                    var3 = var4.floor;
                    var2 = var1.focusDurationMs;
                    var2 = var3.bind(var4)(var2);
                    var0.view_mode_focus_duration_ms = var2;
                    var1 = var1.toggleCount;
                    var0.view_mode_toggle_count = var1;
                    _fun35980_ip = 101;
                    continue _fun35980;
                case 99:
                    var0 = {};
                case 101:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getGuildRingingUsers';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.guildRingingUsers;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getMode';
        var4.key = var6;
        var6 = function arg0() {
            _fun35982: for (var _fun35982_ip = 0;;) switch (_fun35982_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure1_slot34;
                    var0 = var0[var4];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun35982_ip = 55;
                        continue _fun35982
                    }
                case 20:
                    var3 = _closure1_slot56;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4);
                    var2 = _closure1_slot25;
                    if (var1) {
                        _fun35982_ip = 46;
                        continue _fun35982
                    }
                case 38:
                    var1 = var2.VOICE;
                    _fun35982_ip = 52;
                    continue _fun35982;
                case 46:
                    var1 = var2.VIDEO;
                case 52:
                    var0 = var1;
                case 55:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getLayout';
        var4.key = var6;
        var6 = function arg0() {
            _fun35983: for (var _fun35983_ip = 0;;) switch (_fun35983_ip) {
                case 0:
                    var1 = arguments[1];
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun35983_ip = 22;
                        continue _fun35983
                    }
                case 9:
                    var0 = _closure1_slot27;
                    var0 = var0.APP;
                case 22:
                    var0 = _closure1_slot24;
                    var0 = var0.NORMAL;
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getChatOpen';
        var4.key = var6;
        var6 = function arg0() {
            _fun35984: for (var _fun35984_ip = 0;;) switch (_fun35984_ip) {
                case 0:
                    var1 = _closure1_slot38;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun35984_ip = 26;
                        continue _fun35984
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getAllChatOpen';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot38;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getParticipantsListOpen';
        var4.key = var6;
        var6 = function arg0() {
            _fun35986: for (var _fun35986_ip = 0;;) switch (_fun35986_ip) {
                case 0:
                    var1 = _closure1_slot39;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun35986_ip = 26;
                        continue _fun35986
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'isFullscreenInContext';
        var4.key = var6;
        var6 = function() {
            _fun35987: for (var _fun35987_ip = 0;;) switch (_fun35987_ip) {
                case 0:
                    var1 = arguments[0];
                    var2 = undefined;
                    if (!(var1 === var2)) {
                        _fun35987_ip = 24;
                        continue _fun35987
                    }
                case 11:
                    var2 = _closure1_slot27;
                    var1 = var2.APP;
                case 24:
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var1 = _closure1_slot35;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1 = var0[var1];
                        var0 = _closure1_slot24;
                        var0 = var0.FULL_SCREEN;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'getStageStreamSize';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot40;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'getStageVideoLimitBoostUpsellDismissed';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot41;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'isParticipantPoppedOut';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun35991: for (var _fun35991_ip = 0;;) switch (_fun35991_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.getParticipant;
                    var1 = arg0;
                    var0 = arg1;
                    var2 = var2.bind(var3)(var1, var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun35991_ip = 50;
                        continue _fun35991
                    }
                case 30:
                    var1 = 'isPoppedOut';
                    var1 = var1 in var2;
                    if (!var1) {
                        _fun35991_ip = 47;
                        continue _fun35991
                    }
                case 41:
                    var1 = var2.isPoppedOut;
                case 47:
                    var0 = var1;
                case 50:
                    return var0;
            }
        };
        var4.value = var5;
        var0[25] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var8.bind(var0)(var15);
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = 27;
    var3 = var6[var3];
    var18 = var7.bind(var0)(var3);
    var3 = {};
    var15 = function() {
        _fun35992: for (var _fun35992_ip = 0;;) switch (_fun35992_ip) {
            case 0:
                var3 = _closure1_slot43;
                var2 = _closure1_slot30;
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.bind(var0)();
                var2 = var3.done;
                if (var2) {
                    _fun35992_ip = 59;
                    continue _fun35992
                }
            case 30:
                var5 = _closure1_slot53;
                var2 = var3.value;
                var2 = var5.bind(var0)(var2);
                var5 = var4.bind(var0)();
                var2 = var5.done;
                var3 = var5;
                if (!var2) {
                    _fun35992_ip = 30;
                    continue _fun35992
                }
            case 59:
                var1 = _closure1_slot54;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var3.CONNECTION_OPEN = var15;
    var3.CONNECTION_OPEN_SUPPLEMENTAL = var14;
    var3.THREAD_LIST_SYNC = var14;
    var3.OVERLAY_INITIALIZE = var14;
    var15 = function arg0() {
        _fun35993: for (var _fun35993_ip = 0;;) switch (_fun35993_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var5 = var0.currentVoiceChannelId;
                var2 = undefined;
                var _closure2_slot0 = var2;
                var3 = null;
                if (!(var3 == var6)) {
                    _fun35993_ip = 62;
                    continue _fun35993
                }
            case 28:
                if (!(var3 != var5)) {
                    _fun35993_ip = 73;
                    continue _fun35993
                }
            case 32:
                var4 = _closure1_slot38;
                var4 = delete var4[var5];
                var4 = _closure1_slot40;
                var4 = delete var4[var5];
                var0 = _closure1_slot50;
                var0 = var0.bind(var2)(var5);
                _fun35993_ip = 73;
                continue _fun35993;
            case 62:
                var0 = _closure1_slot33;
                var0 = delete var0[var6];
            case 73:
                var0 = false;
                if (!(var6 !== var5)) {
                    _fun35993_ip = 148;
                    continue _fun35993
                }
            case 79:
                var3 = var3 != var5;
                var0 = false;
                if (!var3) {
                    _fun35993_ip = 148;
                    continue _fun35993
                }
            case 88:
                var4 = _closure1_slot45;
                var4 = var4.bind(var2)(var5);
                _closure2_slot0 = var4;
                var7 = var4.guildRingingUsers;
                var6 = var7.forEach;
                var4 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot0;
                    var2 = var3.updateGuildRingingUsers;
                    var1 = arg0;
                    var0 = false;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var6.bind(var7)(var4);
                var4 = _closure1_slot46;
                var3 = new Array(1);
                var3[0] = var5;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.rebuild;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var4.bind(var2)(var1, var3);
            case 148:
                var1 = _closure1_slot54;
                var1 = var1.bind(var2)();
                if (var0) {
                    _fun35993_ip = 165;
                    continue _fun35993
                }
            case 162:
                var0 = var1;
            case 165:
                return var0;
        }
    };
    var3.VOICE_CHANNEL_SELECT = var15;
    var15 = function arg0() {
        _fun35996: for (var _fun35996_ip = 0;;) switch (_fun35996_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var1 = var0.messageId;
                var2 = _closure1_slot54;
                var0 = undefined;
                var0 = var2.bind(var0)();
                var2 = null;
                if (!(var2 != var5)) {
                    _fun35996_ip = 115;
                    continue _fun35996
                }
            case 32:
                if (!(var2 != var1)) {
                    _fun35996_ip = 113;
                    continue _fun35996
                }
            case 36:
                var1 = _closure1_slot38;
                var1 = var1[var5];
                if (var1) {
                    _fun35996_ip = 111;
                    continue _fun35996
                }
            case 47:
                var4 = _closure1_slot14;
                var1 = var4.getChannel;
                var4 = var1.bind(var4)(var5);
                var1 = var0;
                if (!(var2 != var4)) {
                    _fun35996_ip = 109;
                    continue _fun35996
                }
            case 68:
                var2 = var4.isGuildVocal;
                var4 = var2.bind(var4)();
                var2 = var0;
                if (!var4) {
                    _fun35996_ip = 106;
                    continue _fun35996
                }
            case 84:
                var6 = _closure1_slot39;
                var4 = false;
                var6[var5] = var4;
                var4 = _closure1_slot38;
                var3 = true;
                var4[var5] = var3;
                var2 = true;
            case 106:
                var1 = var2;
            case 109:
                return var1;
            case 111:
                return var0;
            case 113:
                return var0;
            case 115:
                return var0;
        }
    };
    var3.CHANNEL_SELECT = var15;
    var3.CHANNEL_RTC_ACTIVE_CHANNELS = var14;
    var14 = function arg0() {
        var1 = arg0;
        var3 = var1.voiceStates;
        var1 = var1.initial;
        var _closure2_slot0 = var1;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun35998: for (var _fun35998_ip = 0;;) switch (_fun35998_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var4 = var0.userId;
                    var3 = var0.channelId;
                    var6 = var0.guildId;
                    var0 = null;
                    var1 = var0 != var6;
                    if (!var1) {
                        _fun35998_ip = 34;
                        continue _fun35998
                    }
                case 30:
                    var1 = var0 != var3;
                case 34:
                    if (!var1) {
                        _fun35998_ip = 128;
                        continue _fun35998
                    }
                case 37:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 24;
                    var7 = var7[var5];
                    var5 = undefined;
                    var10 = var8.bind(var5)(var7);
                    var9 = var10.getCurrentConfig;
                    var8 = {};
                    var8.guildId = var6;
                    var6 = 'voice_status_update';
                    var8.location = var6;
                    var7 = {};
                    var6 = false;
                    var7.autoTrackExposure = var6;
                    var7 = var9.bind(var10)(var8, var7);
                    var7 = var7.enabled;
                    if (!var7) {
                        _fun35998_ip = 128;
                        continue _fun35998
                    }
                case 107:
                    var1 = _closure1_slot45;
                    var5 = var1.bind(var5)(var3);
                    var1 = var5.updateGuildRingingUsers;
                    var1 = var1.bind(var5)(var4, var6);
                case 128:
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun35998_ip = 165;
                        continue _fun35998
                    }
                case 138:
                    if (!(var0 != var3)) {
                        _fun35998_ip = 165;
                        continue _fun35998
                    }
                case 142:
                    var1 = _closure1_slot30;
                    var0 = var1.includes;
                    var1 = var0.bind(var1)(var3);
                    var0 = var2;
                    if (!var1) {
                        _fun35998_ip = 188;
                        continue _fun35998
                    }
                case 165:
                    var3 = _closure1_slot47;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4);
                    if (var1) {
                        _fun35998_ip = 185;
                        continue _fun35998
                    }
                case 182:
                    var1 = var2;
                case 185:
                    var0 = var1;
                case 188:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.VOICE_STATE_UPDATES = var14;
    var14 = function arg0() {
        _fun35999: for (var _fun35999_ip = 0;;) switch (_fun35999_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.type;
                var1 = _closure1_slot26;
                var1 = var1.GROUP_DM;
                if (!(var2 === var1)) {
                    _fun35999_ip = 42;
                    continue _fun35999
                }
            case 30:
                var7 = var0.originChannelId;
                var6 = null;
                if (!(var6 == var7)) {
                    _fun35999_ip = 46;
                    continue _fun35999
                }
            case 42:
                var1 = false;
                return var1;
            case 46:
                var2 = _closure1_slot35;
                var1 = var0.id;
                var0 = {};
                var3 = _closure1_slot27;
                var4 = var3.APP;
                var3 = _closure1_slot35;
                var8 = var3[var7];
                var7 = var6 == var8;
                var3 = undefined;
                if (var7) {
                    _fun35999_ip = 98;
                    continue _fun35999
                }
            case 84:
                var7 = _closure1_slot27;
                var7 = var7.APP;
                var3 = var8[var7];
            case 98:
                if (!(var6 == var3)) {
                    _fun35999_ip = 112;
                    continue _fun35999
                }
            case 102:
                var5 = _closure1_slot24;
                var3 = var5.NORMAL;
            case 112:
                var0[var4] = var3;
                var2[var1] = var0;
                var0 = true;
                return var0;
        }
    };
    var3.CHANNEL_CREATE = var14;
    var3.CHANNEL_DELETE = var13;
    var3.THREAD_DELETE = var13;
    var3.CALL_CREATE = var12;
    var3.CALL_UPDATE = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot53;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.CALL_DELETE = var12;
    var12 = function arg0() {
        _fun36001: for (var _fun36001_ip = 0;;) switch (_fun36001_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channelId;
                var1 = var9;
                var7 = var0.id;
                var4 = var7;
                var0 = undefined;
                var3 = undefined;
                var5 = undefined;
                var8 = _closure1_slot45;
                var8 = var8.bind(var0)(var9);
                var3 = var8;
                var _closure2_slot0 = var8;
                var10 = null;
                if (!(var10 == var7)) {
                    _fun36001_ip = 113;
                    continue _fun36001
                }
            case 52:
                var9 = var3;
                var8 = var9.toArray;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 21;
                var7 = var12[var7];
                var7 = var11.bind(var0)(var7);
                var7 = var7.ChannelRTCParticipantsIndexes;
                var7 = var7.STREAM;
                var8 = var8.bind(var9)(var7);
                var7 = var8.forEach;
                var6 = function(arg0) { // Environment: var6
                    _fun36002: for (var _fun36002_ip = 0;;) switch (_fun36002_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure1_slot23;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            if (!var2) {
                                _fun36002_ip = 48;
                                continue _fun36002
                            }
                        case 20:
                            var3 = _closure2_slot0;
                            var2 = var3.updateParticipant;
                            var1 = var1.user;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                        case 48:
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var6);
            case 113:
                var6 = _closure1_slot48;
                var8 = var1;
                var9 = var6.bind(var0)(var8);
                var7 = _closure1_slot8;
                var6 = 2;
                var7 = var7.bind(var0)(var9, var6);
                var6 = 1;
                var9 = var7[var6];
                var7 = _closure1_slot51;
                var6 = var4;
                if (!(var10 == var6)) {
                    _fun36001_ip = 168;
                    continue _fun36001
                }
            case 156:
                var6 = _closure1_slot22;
                var10 = var6.NONE;
                _fun36001_ip = 171;
                continue _fun36001;
            case 168:
                var10 = var4;
            case 171:
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var9;
                var6 = var7.bind(var0)(var8, var6);
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 25;
                var6 = var6[var8];
                var9 = var7.bind(var0)(var6);
                var7 = var9.isStreamKey;
                var6 = var4;
                var6 = var7.bind(var9)(var6);
                if (!var6) {
                    _fun36001_ip = 382;
                    continue _fun36001
                }
            case 229: // try_start_0
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var8 = var7.bind(var0)(var6);
                var7 = var8.decodeStreamKey;
                var6 = var4;
                var6 = var7.bind(var8)(var6);
                var7 = var6.ownerId;
                var5 = var7;
                var8 = _closure1_slot12;
                var6 = var8.getId;
                var6 = var6.bind(var8)();
                if (!(var7 === var6)) {
                    _fun36001_ip = 311;
                    continue _fun36001
                }
            case 287:
                var7 = _closure1_slot47;
                var6 = var5;
                var8 = var1;
                var5 = new Array(1);
                var5[0] = var8;
                var5 = var7.bind(var0)(var6, var5);
            case 311: // try_end0
                _fun36001_ip = 357;
                continue _fun36001;
            case 313: // catch_target0
                CatchBlockStart(arg_register = 7);
                var6 = _closure1_slot28;
                var5 = var6.warn;
                var9 = var4;
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var4 = 'INVALID STREAM KEY FORMAT ';
                var4 = var8.bind(var4)(var9);
                var4 = var5.bind(var6)(var4, var7);
            case 357:
                var4 = _closure1_slot52;
                var3 = var4.bind(var0)(var3);
                if (var3) {
                    _fun36001_ip = 382;
                    continue _fun36001
                }
            case 369:
                var3 = _closure1_slot36;
                var2 = var1;
                var1 = false;
                var3[var2] = var1;
            case 382:
                return var0;
        }
    };
    var3.CHANNEL_RTC_SELECT_PARTICIPANT = var12;
    var12 = function arg0() {
        _fun36003: for (var _fun36003_ip = 0;;) switch (_fun36003_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var7 = var0.participantId;
                var1 = _closure1_slot48;
                var0 = undefined;
                var5 = var1.bind(var0)(var4);
                var3 = _closure1_slot8;
                var1 = 1;
                var3 = var3.bind(var0)(var5, var1);
                var1 = 0;
                var1 = var3[var1];
                if (!(var1 === var7)) {
                    _fun36003_ip = 63;
                    continue _fun36003
                }
            case 51:
                var3 = _closure1_slot51;
                var1 = null;
                var1 = var3.bind(var0)(var4, var1);
            case 63:
                var1 = _closure1_slot45;
                var6 = var1.bind(var0)(var4);
                var1 = var6.getParticipant;
                var1 = var1.bind(var6)(var7);
                var3 = null;
                var3 = var3 != var1;
                if (!var3) {
                    _fun36003_ip = 111;
                    continue _fun36003
                }
            case 92:
                var8 = var1.type;
                var5 = _closure1_slot21;
                var5 = var5.ACTIVITY;
                var3 = var8 !== var5;
            case 111:
                if (!var3) {
                    _fun36003_ip = 156;
                    continue _fun36003
                }
            case 114:
                var5 = var6.updateParticipantPoppedOut;
                var3 = true;
                var3 = var5.bind(var6)(var7, var3);
                var3 = _closure1_slot47;
                var1 = var1.user;
                var2 = var1.id;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var0)(var2, var1);
            case 156:
                return var0;
        }
    };
    var3.CHANNEL_RTC_POPOUT_PARTICIPANT = var12;
    var12 = function arg0() {
        _fun36004: for (var _fun36004_ip = 0;;) switch (_fun36004_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var5 = var0.participantId;
                var1 = _closure1_slot45;
                var0 = undefined;
                var3 = var1.bind(var0)(var4);
                var6 = var3.updateParticipantPoppedOut;
                var1 = false;
                var1 = var6.bind(var3)(var5, var1);
                var1 = var3.getParticipant;
                var1 = var1.bind(var3)(var5);
                var3 = null;
                var3 = var3 != var1;
                if (!var3) {
                    _fun36004_ip = 81;
                    continue _fun36004
                }
            case 62:
                var6 = var1.type;
                var5 = _closure1_slot21;
                var5 = var5.ACTIVITY;
                var3 = var6 !== var5;
            case 81:
                if (!var3) {
                    _fun36004_ip = 112;
                    continue _fun36004
                }
            case 84:
                var3 = _closure1_slot47;
                var1 = var1.user;
                var2 = var1.id;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var3.bind(var0)(var2, var1);
            case 112:
                return var0;
        }
    };
    var3.CHANNEL_RTC_RETURN_PARTICIPANT = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var4 = var0.layout;
        var3 = var0.appContext;
        var1 = _closure1_slot35;
        var0 = {};
        var6 = var1[var2];
        var7 = var0;
        var5 = copyDataProperties(var7, var6);
        var0[var3] = var4;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.CHANNEL_RTC_UPDATE_LAYOUT = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = var0.participantsOpen;
        var0 = _closure1_slot36;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var3.CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = var0.voiceParticipantsHidden;
        var0 = _closure1_slot37;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var3.CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = var0.large;
        var0 = _closure1_slot40;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var3.CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = var0.dismissed;
        var0 = _closure1_slot41;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var3.CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED = var12;
    var12 = function arg0() {
        _fun36010: for (var _fun36010_ip = 0;;) switch (_fun36010_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channelId;
                var2 = var1.selfStreamHidden;
                var4 = _closure1_slot12;
                var3 = var4.getId;
                var3 = var3.bind(var4)();
                if (!var2) {
                    _fun36010_ip = 123;
                    continue _fun36010
                }
            case 34:
                var2 = _closure1_slot48;
                var5 = undefined;
                var6 = var2.bind(var5)(var0);
                var4 = _closure1_slot8;
                var2 = 1;
                var4 = var4.bind(var5)(var6, var2);
                var2 = 0;
                var6 = var4[var2];
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 25;
                var2 = var7[var2];
                var4 = var4.bind(var5)(var2);
                var2 = var4.isStreamKey;
                var2 = var2.bind(var4)(var6);
                if (!var2) {
                    _fun36010_ip = 108;
                    continue _fun36010
                }
            case 98:
                var4 = var6.includes;
                var2 = var4.bind(var6)(var3);
            case 108:
                if (!var2) {
                    _fun36010_ip = 123;
                    continue _fun36010
                }
            case 111:
                var4 = _closure1_slot51;
                var2 = null;
                var2 = var4.bind(var5)(var0, var2);
            case 123:
                var2 = _closure1_slot47;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var3.STREAM_UPDATE_SELF_HIDDEN = var12;
    var12 = function arg0() {
        _fun36011: for (var _fun36011_ip = 0;;) switch (_fun36011_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = var0.chatOpen;
                var3 = _closure1_slot38;
                var3[var2] = var1;
                if (!var1) {
                    _fun36011_ip = 38;
                    continue _fun36011
                }
            case 28:
                var1 = _closure1_slot39;
                var0 = false;
                var1[var2] = var0;
            case 38:
                var0 = undefined;
                return var0;
        }
    };
    var3.CHANNEL_RTC_UPDATE_CHAT_OPEN = var12;
    var12 = function arg0() {
        _fun36012: for (var _fun36012_ip = 0;;) switch (_fun36012_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = var0.participantsListOpen;
                var3 = _closure1_slot39;
                var3[var2] = var1;
                if (!var1) {
                    _fun36012_ip = 38;
                    continue _fun36012
                }
            case 28:
                var1 = _closure1_slot38;
                var0 = false;
                var1[var2] = var0;
            case 38:
                var0 = undefined;
                return var0;
        }
    };
    var3.CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN = var12;
    var12 = function arg0() {
        var1 = arg0;
        var0 = var1.channelId;
        var3 = var1.userId;
        var2 = _closure1_slot47;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3.RTC_CONNECTION_VIDEO = var12;
    var12 = function arg0() {
        var1 = arg0;
        var0 = var1.channelId;
        var3 = var1.userId;
        var2 = _closure1_slot47;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3.RTC_CONNECTION_PLATFORM = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.userId;
        var1 = _closure1_slot47;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var3.AUDIO_SET_LOCAL_VIDEO_DISABLED = var12;
    var12 = function arg0() {
        var2 = arg0;
        var1 = var2.channelId;
        var3 = var2.senderUserId;
        var _closure2_slot0 = var3;
        var3 = var2.maxResolution;
        var _closure2_slot1 = var3;
        var2 = var2.maxFrameRate;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot46;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var4 = arg0;
            var3 = var4.updateParticipantQuality;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = _closure2_slot2;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var3.MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED = var12;
    var3.STREAM_CLOSE = var11;
    var3.STREAM_DELETE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var4 = var0.streamKey;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 25;
        var0 = var3[var0];
        var3 = undefined;
        var2 = var2.bind(var3)(var0);
        var0 = var2.decodeStreamKey;
        var0 = var0.bind(var2)(var4);
        var4 = var0.channelId;
        var2 = _closure1_slot47;
        var1 = var0.ownerId;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.STREAM_WATCH = var11;
    var3.SPEAKING = var10;
    var3.GUILD_SOUNDBOARD_SOUND_PLAY_START = var10;
    var3.GUILD_SOUNDBOARD_SOUND_PLAY_END = var10;
    var10 = function() {
        var2 = _closure1_slot46;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.updateParticipantSpeaking;
            var3 = _closure1_slot12;
            var0 = var3.getId;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.PUSH_TO_TALK_STATE_CHANGE = var10;
    var10 = function arg0() {
        _fun36021: for (var _fun36021_ip = 0;;) switch (_fun36021_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.channelId;
                var8 = var1.guildId;
                var6 = var1.ringing;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 24;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.getCurrentConfig;
                var2 = {};
                var2.guildId = var8;
                var8 = 'guild_ring_start';
                var2.location = var8;
                var2 = var5.bind(var7)(var2);
                var2 = var2.enabled;
                if (var2) {
                    _fun36021_ip = 89;
                    continue _fun36021
                }
            case 85:
                var2 = false;
                return var2;
            case 89:
                var2 = _closure1_slot45;
                var2 = var2.bind(var3)(var4);
                _closure2_slot0 = var2;
                var5 = var6.forEach;
                var2 = function(arg0) { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.updateGuildRingingUsers;
                    var1 = arg0;
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                var2 = _closure1_slot46;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.rebuild;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var3.GUILD_RING_START = var10;
    var10 = function arg0() {
        _fun36024: for (var _fun36024_ip = 0;;) switch (_fun36024_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.channelId;
                var8 = var1.guildId;
                var6 = var1.ringing;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 24;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.getCurrentConfig;
                var2 = {};
                var2.guildId = var8;
                var8 = 'guild_ring_start';
                var2.location = var8;
                var2 = var5.bind(var7)(var2);
                var2 = var2.enabled;
                if (var2) {
                    _fun36024_ip = 89;
                    continue _fun36024
                }
            case 85:
                var2 = false;
                return var2;
            case 89:
                var2 = _closure1_slot45;
                var2 = var2.bind(var3)(var4);
                _closure2_slot0 = var2;
                var5 = var6.forEach;
                var2 = function(arg0) { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.updateGuildRingingUsers;
                    var1 = arg0;
                    var0 = false;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                var2 = _closure1_slot46;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.rebuild;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var3.GUILD_RING_STOP = var10;
    var3.USER_UPDATE = var9;
    var3.GUILD_MEMBER_UPDATE = var9;
    var4 = function arg0() {
        _fun36027: for (var _fun36027_ip = 0;;) switch (_fun36027_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var _closure2_slot0 = var0;
                var4 = new Array(0);
                var _closure2_slot1 = var4;
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var5 = 22;
                var3 = var0[var5];
                var0 = undefined;
                var8 = var6.bind(var0)(var3);
                var7 = var8.forEach;
                var6 = _closure1_slot30;
                var3 = function(arg0) { // Environment: var1
                    _fun36028: for (var _fun36028_ip = 0;;) switch (_fun36028_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot14;
                            var0 = var1.getChannel;
                            var3 = var0.bind(var1)(var2);
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun36028_ip = 55;
                                continue _fun36028
                            }
                        case 29:
                            var1 = var3.getGuildId;
                            var3 = var1.bind(var3)();
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3 !== var1;
                        case 55:
                            if (var0) {
                                _fun36028_ip = 75;
                                continue _fun36028
                            }
                        case 58:
                            var1 = _closure2_slot1;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var6, var3);
                var6 = var4.length;
                var3 = 0;
                if (!(var3 !== var6)) {
                    _fun36027_ip = 113;
                    continue _fun36027
                }
            case 78:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var0)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot53;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var4, var1);
                return var0;
            case 113:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_DELETE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var19 = var4;
    var17 = var3;
    var3 = new var19[var8](var18, var17, var16);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/ChannelRTCStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.NO_PARTICIPANTS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1371, 3521, 3716, 1216, 3477, 1372, 3612, 1670, 3951, 1621, 3953, 3523, 3525, 660, 3, 3954, 22, 44, 3963, 3507, 566, 806, 2]);