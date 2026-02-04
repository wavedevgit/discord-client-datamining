// modules/rewards/ProgramRewardsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun95783: for (var _fun95783_ip = 0;;) switch (_fun95783_ip) {
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
            case 72: // try_end0
                _fun95783_ip = 76;
                continue _fun95783;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun95786: for (var _fun95786_ip = 0;;) switch (_fun95786_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95786_ip = 46;
                    continue _fun95786
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95786_ip = 55;
                    continue _fun95786
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95786_ip = 345;
                    continue _fun95786
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95786_ip = 323;
                    continue _fun95786
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95786_ip = 283;
                    continue _fun95786
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95786_ip = 270;
                    continue _fun95786
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
                    _fun95786_ip = 163;
                    continue _fun95786
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95786_ip = 179;
                    continue _fun95786
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95786_ip = 249;
                    continue _fun95786
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95786_ip = 249;
                    continue _fun95786
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95786_ip = 234;
                    continue _fun95786
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95786_ip = 247;
                    continue _fun95786
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95786_ip = 265;
                continue _fun95786;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95786_ip = 283;
                continue _fun95786;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95786_ip = 323;
                    continue _fun95786
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
                    _fun95786_ip = 330;
                    continue _fun95786
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95787: for (var _fun95787_ip = 0;;) switch (_fun95787_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95787_ip = 56;
                                continue _fun95787
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
                            _fun95787_ip = 67;
                            continue _fun95787;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun95788: for (var _fun95788_ip = 0;;) switch (_fun95788_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95788_ip = 23;
                    continue _fun95788
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95788_ip = 33;
                    continue _fun95788
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
                    _fun95788_ip = 70;
                    continue _fun95788
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95788_ip = 55;
                    continue _fun95788
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var3 = function() {
        _fun95789: for (var _fun95789_ip = 0;;) switch (_fun95789_ip) {
            case 0:
                var1 = _closure1_slot10;
                var0 = var1.getValue;
                var2 = var0.bind(var1)();
                var5 = null;
                if (!(var5 != var2)) {
                    _fun95789_ip = 302;
                    continue _fun95789
                }
            case 26:
                var10 = global;
                var0 = var10.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var15 = var1;
                var0 = new var15[var0](var14);
                var9 = var0 instanceof Object ? var0 : var1;
                var1 = _closure1_slot13;
                var0 = var2.values;
                var0 = var0.bind(var2)();
                var8 = undefined;
                var7 = var1.bind(var8)(var0);
                var1 = var7.bind(var8)();
                var0 = var1.done;
                var6 = 7;
                var3 = -1;
                var2 = var1;
                if (var0) {
                    _fun95789_ip = 281;
                    continue _fun95789
                }
            case 101:
                var0 = var2.value;
                var11 = var10.Date;
                var14 = var0.next_reward_date;
                var1 = var11.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var11
                    }
                });
                var15 = var1;
                var0 = new var15[var11](var14, var13);
                var1 = var0 instanceof Object ? var0 : var1;
                var11 = var10.isNaN;
                var0 = var1.getTime;
                var0 = var0.bind(var1)();
                var0 = var11.bind(var8)(var0);
                if (var0) {
                    _fun95789_ip = 263;
                    continue _fun95789
                }
            case 162:
                if (!(!(var9 >= var1))) {
                    _fun95789_ip = 242;
                    continue _fun95789
                }
            case 166:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var11.bind(var8)(var0);
                var0 = var0.bind(var8)(var1, var3);
                if (!(var9 >= var0)) {
                    _fun95789_ip = 263;
                    continue _fun95789
                }
            case 193:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 8;
                var0 = var12[var0];
                var0 = var11.bind(var8)(var0);
                var1 = var0.bind(var8)(var1, var9);
                var0 = {};
                var11 = _closure1_slot11;
                var11 = var11.LESS_THAN_24H_BEFORE_REWARD;
                var0.state = var11;
                var0.msUntilReward = var1;
                _fun95789_ip = 321;
                continue _fun95789;
            case 242:
                var1 = {};
                var11 = _closure1_slot11;
                var11 = var11.PAST_REWARD_DATE;
                var1.state = var11;
                var0 = var1;
                _fun95789_ip = 321;
                continue _fun95789;
            case 263:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var2 = var11;
                if (!var1) {
                    _fun95789_ip = 101;
                    continue _fun95789
                }
            case 281:
                var1 = {};
                var2 = _closure1_slot11;
                var2 = var2.MORE_THAN_24H_BEFORE_REWARD;
                var1.state = var2;
                var0 = var1;
                _fun95789_ip = 321;
                continue _fun95789;
            case 302:
                var1 = {};
                var2 = _closure1_slot11;
                var2 = var2.MORE_THAN_24H_BEFORE_REWARD;
                var1.state = var2;
                var0 = var1;
            case 321:
                var6 = var0.state;
                var3 = var0.msUntilReward;
                var2 = _closure1_slot10;
                var1 = var2.setTtl;
                var0 = _closure1_slot11;
                var0 = var0.LESS_THAN_24H_BEFORE_REWARD;
                if (!(var0 !== var6)) {
                    _fun95789_ip = 388;
                    continue _fun95789
                }
            case 358:
                var0 = _closure1_slot11;
                var0 = var0.MORE_THAN_24H_BEFORE_REWARD;
                if (!(var0 !== var6)) {
                    _fun95789_ip = 382;
                    continue _fun95789
                }
            case 372:
                var0 = _closure1_slot11;
                var0 = var0.PAST_REWARD_DATE;
            case 382:
                var0 = _closure1_slot9;
                _fun95789_ip = 399;
                continue _fun95789;
            case 388:
                if (!(var5 == var3)) {
                    _fun95789_ip = 396;
                    continue _fun95789
                }
            case 392:
                var3 = _closure1_slot9;
            case 396:
                var0 = var3;
            case 399:
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var7 = 86400000;
    var _closure1_slot9 = var7;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.NetworkTtlCache;
    var1 = {};
    var1.ttlMs = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var13 = var7;
    var12 = var1;
    var1 = new var13[var9](var12, var11);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot10 = var1;
    var1 = {};
    var7 = 'MORE_THAN_24H_BEFORE_REWARD';
    var1.MORE_THAN_24H_BEFORE_REWARD = var7;
    var7 = 'LESS_THAN_24H_BEFORE_REWARD';
    var1.LESS_THAN_24H_BEFORE_REWARD = var7;
    var7 = 'PAST_REWARD_DATE';
    var1.PAST_REWARD_DATE = var7;
    var _closure1_slot11 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var8
        var3 = function() {
            _fun95791: for (var _fun95791_ip = 0;;) switch (_fun95791_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95791_ip = 69;
                        continue _fun95791
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95791_ip = 105;
                    continue _fun95791;
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
            _fun95792: for (var _fun95792_ip = 0;;) switch (_fun95792_ip) {
                case 0:
                    var5 = arg0;
                    var3 = this;
                    var2 = var3.waitFor;
                    var0 = _closure1_slot8;
                    var0 = var2.bind(var3)(var0);
                    var3 = null;
                    var4 = var3 == var5;
                    var0 = undefined;
                    var2 = undefined;
                    if (var4) {
                        _fun95792_ip = 43;
                        continue _fun95792
                    }
                case 37:
                    var2 = var5.cache;
                case 43:
                    if (!(var3 != var2)) {
                        _fun95792_ip = 124;
                        continue _fun95792
                    }
                case 47:
                    var2 = global;
                    var4 = var2.Map;
                    var2 = var5.cache;
                    var7 = var2.value;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var3;
                    var2 = new var8[var4](var7, var6);
                    var6 = var2 instanceof Object ? var2 : var3;
                    var4 = _closure1_slot10;
                    var3 = var4.restore;
                    var2 = {};
                    var2.value = var6;
                    var5 = var5.cache;
                    var5 = var5.fetchedAt;
                    var2.fetchedAt = var5;
                    var2 = var3.bind(var4)(var2);
                case 124:
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(13);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            _fun95793: for (var _fun95793_ip = 0;;) switch (_fun95793_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var0 = var1.serialize;
                    var3 = var0.bind(var1)();
                    var0 = {};
                    var1 = null;
                    var2 = var1 != var3;
                    if (!var2) {
                        _fun95793_ip = 81;
                        continue _fun95793
                    }
                case 28:
                    var2 = {};
                    var4 = global;
                    var6 = var4.Array;
                    var5 = var6.from;
                    var7 = var3.value;
                    var4 = var7.entries;
                    var4 = var4.bind(var7)();
                    var4 = var5.bind(var6)(var4);
                    var2.value = var4;
                    var3 = var3.fetchedAt;
                    var2.fetchedAt = var3;
                    var1 = var2;
                case 81:
                    var0.cache = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'passesGeneralUIInvariant';
        var4.key = var6;
        var6 = function arg0() {
            _fun95794: for (var _fun95794_ip = 0;;) switch (_fun95794_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var1 = var4[var1];
                    var4 = undefined;
                    var6 = var5.bind(var4)(var1);
                    var5 = var6.isInProgramRewardsTreatments;
                    var1 = 'ProgramRewardsStore';
                    var1 = var5.bind(var6)(var1);
                    if (var1) {
                        _fun95794_ip = 55;
                        continue _fun95794
                    }
                case 51:
                    var1 = false;
                    return var1;
                case 55:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 10;
                    var1 = var1[var5];
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.RewardProgram;
                    var1 = var1.NITRO;
                    if (!(var3 === var1)) {
                        _fun95794_ip = 310;
                        continue _fun95794
                    }
                case 94:
                    var1 = var2.getRewardForProgram;
                    var2 = var1.bind(var2)(var3);
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun95794_ip = 318;
                        continue _fun95794
                    }
                case 114:
                    var7 = var2.next_reward_date;
                    var2 = var2.program_current_state;
                    if (!(var1 != var2)) {
                        _fun95794_ip = 314;
                        continue _fun95794
                    }
                case 135:
                    if (!(var1 != var7)) {
                        _fun95794_ip = 231;
                        continue _fun95794
                    }
                case 139:
                    var1 = '';
                    if (!(var1 !== var7)) {
                        _fun95794_ip = 231;
                        continue _fun95794
                    }
                case 147:
                    var1 = global;
                    var3 = var1.Date;
                    var6 = var3.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var3
                        }
                    });
                    var9 = var6;
                    var8 = var7;
                    var3 = new var9[var3](var8, var7);
                    var6 = var3 instanceof Object ? var3 : var6;
                    var3 = var6.getTime;
                    var3 = var3.bind(var6)();
                    var7 = var1.Number;
                    var6 = var7.isNaN;
                    var6 = var6.bind(var7)(var3);
                    if (var6) {
                        _fun95794_ip = 227;
                        continue _fun95794
                    }
                case 208:
                    var6 = var1.Date;
                    var1 = var6.now;
                    var1 = var1.bind(var6)();
                    if (!(var3 < var1)) {
                        _fun95794_ip = 310;
                        continue _fun95794
                    }
                case 227:
                    var1 = false;
                    return var1;
                case 231:
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var1 = var0[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.ProgramCurrentState;
                    var6 = var1.PAYMENT_PROCESSING;
                    var1 = new Array(2);
                    var1[0] = var6;
                    var0 = var0[var5];
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.ProgramCurrentState;
                    var0 = var0.PAYMENT_ERROR;
                    var1[1] = var0;
                    var0 = var1.includes;
                    var0 = var0.bind(var1)(var2);
                    if (var0) {
                        _fun95794_ip = 310;
                        continue _fun95794
                    }
                case 306:
                    var0 = false;
                    return var0;
                case 310:
                    var0 = true;
                    return var0;
                case 314:
                    var0 = false;
                    return var0;
                case 318:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'passesProgressBarInvariant';
        var4.key = var6;
        var6 = function arg0() {
            _fun95795: for (var _fun95795_ip = 0;;) switch (_fun95795_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 9;
                    var0 = var4[var0];
                    var4 = undefined;
                    var6 = var5.bind(var4)(var0);
                    var5 = var6.isInProgramRewardsTreatments;
                    var0 = 'ProgramRewardsStore';
                    var0 = var5.bind(var6)(var0);
                    if (var0) {
                        _fun95795_ip = 55;
                        continue _fun95795
                    }
                case 51:
                    var0 = false;
                    return var0;
                case 55:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 10;
                    var0 = var6[var0];
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.RewardProgram;
                    var0 = var0.NITRO;
                    if (!(var3 === var0)) {
                        _fun95795_ip = 361;
                        continue _fun95795
                    }
                case 94:
                    var0 = var2.getRewardForProgram;
                    var3 = var0.bind(var2)(var3);
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun95795_ip = 381;
                        continue _fun95795
                    }
                case 114:
                    var2 = var3.total_countdown_duration_ms;
                    if (!(var0 != var2)) {
                        _fun95795_ip = 377;
                        continue _fun95795
                    }
                case 129:
                    var5 = 0;
                    if (!(!(var2 <= var5))) {
                        _fun95795_ip = 377;
                        continue _fun95795
                    }
                case 138:
                    var8 = var3.next_reward_date;
                    if (!(var0 != var8)) {
                        _fun95795_ip = 373;
                        continue _fun95795
                    }
                case 151:
                    var0 = '';
                    if (!(var0 !== var8)) {
                        _fun95795_ip = 373;
                        continue _fun95795
                    }
                case 162:
                    var0 = global;
                    var3 = var0.Date;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var3
                        }
                    });
                    var11 = var5;
                    var10 = var8;
                    var3 = new var11[var3](var10, var9);
                    var5 = var3 instanceof Object ? var3 : var5;
                    var3 = var5.getTime;
                    var5 = var3.bind(var5)();
                    var6 = var0.Number;
                    var3 = var6.isNaN;
                    var3 = var3.bind(var6)(var5);
                    if (var3) {
                        _fun95795_ip = 369;
                        continue _fun95795
                    }
                case 226:
                    var6 = var0.Date;
                    var3 = var6.now;
                    var3 = var3.bind(var6)();
                    if (!(!(var5 <= var3))) {
                        _fun95795_ip = 369;
                        continue _fun95795
                    }
                case 248:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var1 = var5[var1];
                    var6 = var3.bind(var4)(var1);
                    var1 = var0.Date;
                    var7 = var1.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var1
                        }
                    });
                    var11 = var7;
                    var10 = var8;
                    var1 = new var11[var1](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var7;
                    var0 = var0.Date;
                    var7 = var0.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var0
                        }
                    });
                    var11 = var7;
                    var0 = new var11[var0](var10);
                    var0 = var0 instanceof Object ? var0 : var7;
                    var1 = var6.bind(var4)(var1, var0);
                    var0 = 12;
                    var0 = var5[var0];
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.Millis;
                    var0 = var0.DAY;
                    var0 = var2 / var0;
                    if (!(!(var1 > var0))) {
                        _fun95795_ip = 365;
                        continue _fun95795
                    }
                case 361:
                    var0 = true;
                    return var0;
                case 365:
                    var0 = false;
                    return var0;
                case 369:
                    var0 = false;
                    return var0;
                case 373:
                    var0 = false;
                    return var0;
                case 377:
                    var0 = false;
                    return var0;
                case 381:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot10;
            var0 = var1.isLoading;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isFetched';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot10;
            var0 = var1.isValid;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasCachedValue';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot10;
            var0 = var1.getValue;
            var1 = var0.bind(var1)();
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isReady';
        var4.key = var6;
        var6 = function() {
            _fun95799: for (var _fun95799_ip = 0;;) switch (_fun95799_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.isFetching;
                    var0 = var0.bind(var3)();
                    var0 = !var0;
                    if (!var0) {
                        _fun95799_ip = 136;
                        continue _fun95799
                    }
                case 19:
                    var1 = var3.hasCachedValue;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun95799_ip = 79;
                        continue _fun95799
                    }
                case 34:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.isInProgramRewardsTreatments;
                    var2 = 'ProgramRewardsStore';
                    var2 = var4.bind(var5)(var2);
                    var1 = !var2;
                case 79:
                    if (var1) {
                        _fun95799_ip = 92;
                        continue _fun95799
                    }
                case 82:
                    var2 = var3.isError;
                    var1 = var2.bind(var3)();
                case 92:
                    if (var1) {
                        _fun95799_ip = 133;
                        continue _fun95799
                    }
                case 95:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.hasNecessaryPremiumSubscriptionStatus;
                    var2 = var2.bind(var3)();
                    var1 = !var2;
                case 133:
                    var0 = var1;
                case 136:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'shouldFetch';
        var4.key = var6;
        var6 = function() {
            _fun95800: for (var _fun95800_ip = 0;;) switch (_fun95800_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var5 = 9;
                    var0 = var0[var5];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var0);
                    var2 = var3.isInProgramRewardsTreatments;
                    var0 = 'ProgramRewardsStore.shouldFetch';
                    var0 = var2.bind(var3)(var0);
                    var2 = !var0;
                    if (var2) {
                        _fun95800_ip = 78;
                        continue _fun95800
                    }
                case 48:
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var5];
                    var3 = var3.bind(var4)(var0);
                    var0 = var3.hasNecessaryPremiumSubscriptionStatus;
                    var0 = var0.bind(var3)();
                    var2 = !var0;
                case 78:
                    var0 = !var2;
                    if (var2) {
                        _fun95800_ip = 98;
                        continue _fun95800
                    }
                case 84:
                    var2 = _closure1_slot10;
                    var1 = var2.shouldFetch;
                    var0 = var1.bind(var2)();
                case 98:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isError';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot10;
            var0 = var1.isError;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getStatus';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot10;
            var0 = var1.getStatus;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getRewardForProgram';
        var4.key = var6;
        var6 = function arg0() {
            _fun95803: for (var _fun95803_ip = 0;;) switch (_fun95803_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var0 = var1.getValue;
                    var3 = var0.bind(var1)();
                    var0 = null;
                    var1 = var0 == var3;
                    var0 = undefined;
                    if (var1) {
                        _fun95803_ip = 41;
                        continue _fun95803
                    }
                case 28:
                    var2 = var3.get;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'forceExpire';
        var4.key = var6;
        var5 = function() {
            var1 = _closure1_slot10;
            var0 = var1.forceExpire;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[12] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ProgramRewardsStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 14;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() {
        var1 = _closure1_slot10;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var9;
    var9 = function() {
        var1 = _closure1_slot10;
        var0 = var1.setLoading;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.PROGRAM_REWARDS_FETCH = var9;
    var9 = function arg0() {
        _fun95807: for (var _fun95807_ip = 0;;) switch (_fun95807_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.programRewards;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot10;
                var3 = var4.isLoading;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun95807_ip = 43;
                    continue _fun95807
                }
            case 39:
                var3 = false;
                return var3;
            case 43:
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var4;
                var3 = new var7[var3](var6);
                var4 = var3 instanceof Object ? var3 : var4;
                _closure2_slot0 = var4;
                var3 = var5.forEach;
                var2 = function(arg0) { // Environment: var2
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var0 = var3.reward_program;
                    var0 = var1.bind(var2)(var0, var3);
                    var0 = undefined;
                    return var0;
                };
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot10;
                var2 = var3.setValue;
                var2 = var2.bind(var3)(var4);
                var1 = _closure1_slot15;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.PROGRAM_REWARDS_FETCH_SUCCESS = var9;
    var8 = function() {
        _fun95809: for (var _fun95809_ip = 0;;) switch (_fun95809_ip) {
            case 0:
                var2 = _closure1_slot10;
                var1 = var2.isLoading;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun95809_ip = 24;
                    continue _fun95809
                }
            case 20:
                var1 = false;
                return var1;
            case 24:
                var1 = _closure1_slot10;
                var0 = var1.setError;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
        }
    };
    var1.PROGRAM_REWARDS_FETCH_FAILURE = var8;
    var1.CURRENT_USER_UPDATE = var3;
    var1.CONNECTION_OPEN = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rewards/ProgramRewardsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 12491, 2721, 2766, 12492, 12494, 2735, 667, 566, 806, 2]);