// modules/poggermode/PoggermodeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var0 = function() {
        _fun54541: for (var _fun54541_ip = 0;;) switch (_fun54541_ip) {
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
                _fun54541_ip = 74;
                continue _fun54541;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var4 = function arg0() {
        _fun54544: for (var _fun54544_ip = 0;;) switch (_fun54544_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun54544_ip = 51;
                    continue _fun54544
                }
            case 12:
                var4 = var2.value;
                var1 = 0;
                var1 = var4 > var1;
                if (var1) {
                    _fun54544_ip = 48;
                    continue _fun54544
                }
            case 26:
                var4 = var3 == var2;
                var3 = undefined;
                if (var4) {
                    _fun54544_ip = 41;
                    continue _fun54544
                }
            case 35:
                var3 = var2.multiplier;
            case 41:
                var2 = 1;
                var1 = var3 > var2;
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var _closure1_slot19 = var4;
    var0 = function arg0() {
        _fun54545: for (var _fun54545_ip = 0;;) switch (_fun54545_ip) {
            case 0:
                var8 = arg0;
                var0 = undefined;
                var4 = undefined;
                if (!(var0 === var0)) {
                    _fun54545_ip = 15;
                    continue _fun54545
                }
            case 13:
                var4 = true;
            case 15:
                var _closure2_slot0 = var0;
                var6 = _closure1_slot14;
                var3 = var6.get;
                var2 = _closure1_slot16;
                var2 = var2.bind(var0)(var8);
                var6 = var3.bind(var6)(var2);
                var3 = {};
                var14 = var3;
                var13 = var6;
                var2 = copyDataProperties(var14, var13);
                var14 = var3;
                var13 = var8;
                var2 = copyDataProperties(var14, var13);
                var7 = var8.value;
                var2 = null;
                if (!(var2 == var7)) {
                    _fun54545_ip = 95;
                    continue _fun54545
                }
            case 78:
                var10 = var2 == var6;
                var9 = undefined;
                if (var10) {
                    _fun54545_ip = 92;
                    continue _fun54545
                }
            case 87:
                var9 = var6.value;
            case 92:
                var7 = var9;
            case 95:
                var10 = var2 != var7;
                var9 = 0;
                if (!var10) {
                    _fun54545_ip = 107;
                    continue _fun54545
                }
            case 104:
                var9 = var7;
            case 107:
                var7 = 'value';
                var3[var7] = var9;
                var7 = global;
                var11 = var7.Math;
                var10 = var11.min;
                var7 = var8.multiplier;
                if (!(var2 == var7)) {
                    _fun54545_ip = 157;
                    continue _fun54545
                }
            case 139:
                var12 = var2 == var6;
                var9 = undefined;
                if (var12) {
                    _fun54545_ip = 154;
                    continue _fun54545
                }
            case 148:
                var9 = var6.multiplier;
            case 154:
                var7 = var9;
            case 157:
                var12 = var2 != var7;
                var9 = 1;
                if (!var12) {
                    _fun54545_ip = 170;
                    continue _fun54545
                }
            case 167:
                var9 = var7;
            case 170:
                var7 = 7;
                var9 = var10.bind(var11)(var9, var7);
                var7 = 'multiplier';
                var3[var7] = var9;
                var9 = var2 == var6;
                var7 = undefined;
                if (var9) {
                    _fun54545_ip = 203;
                    continue _fun54545
                }
            case 197:
                var7 = var6.decayInterval;
            case 203:
                if (!(var2 == var7)) {
                    _fun54545_ip = 253;
                    continue _fun54545
                }
            case 207:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 11;
                var6 = var10[var6];
                var6 = var9.bind(var0)(var6);
                var6 = var6.Interval;
                var9 = var6.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var6
                    }
                });
                var15 = var9;
                var6 = new var15[var6](var14);
                var7 = var6 instanceof Object ? var6 : var9;
            case 253:
                var6 = 'decayInterval';
                var3[var6] = var7;
                _closure2_slot0 = var3;
                var7 = _closure1_slot14;
                var6 = var7.set;
                var5 = _closure1_slot16;
                var5 = var5.bind(var0)(var8);
                var5 = var6.bind(var7)(var5, var3);
                if (!var4) {
                    _fun54545_ip = 325;
                    continue _fun54545
                }
            case 293:
                var4 = var3.decayInterval;
                if (!(var2 != var4)) {
                    _fun54545_ip = 325;
                    continue _fun54545
                }
            case 303:
                var3 = var4.start;
                var2 = 1000;
                var1 = function() { // Environment: var1
                    _fun54546: for (var _fun54546_ip = 0;;) switch (_fun54546_ip) {
                        case 0:
                            var4 = _closure1_slot14;
                            var3 = var4.get;
                            var6 = _closure1_slot16;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var6.bind(var0)(var2);
                            var4 = var3.bind(var4)(var2);
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun54546_ip = 242;
                                continue _fun54546
                            }
                        case 44:
                            var3 = _closure2_slot0;
                            var6 = var3.multiplier;
                            var3 = var4.multiplier;
                            var3 = var6 !== var3;
                            if (!var3) {
                                _fun54546_ip = 85;
                                continue _fun54546
                            }
                        case 67:
                            var5 = _closure2_slot0;
                            var6 = var5.value;
                            var5 = var4.value;
                            var3 = var6 !== var5;
                        case 85:
                            var6 = var4.value;
                            var5 = 0;
                            if (!(!(var6 <= var5))) {
                                _fun54546_ip = 157;
                                continue _fun54546
                            }
                        case 96:
                            if (var3) {
                                _fun54546_ip = 157;
                                continue _fun54546
                            }
                        case 99:
                            var6 = _closure1_slot20;
                            var3 = {};
                            var10 = var3;
                            var9 = var4;
                            var7 = copyDataProperties(var10, var9);
                            var8 = var4.value;
                            var7 = 1;
                            var8 = var8 - var7;
                            var7 = 'value';
                            var3[var7] = var8;
                            var3 = var6.bind(var0)(var3);
                            var6 = _closure1_slot17;
                            var3 = var6.emitChange;
                            var3 = var3.bind(var6)();
                            _fun54546_ip = 242;
                            continue _fun54546;
                        case 157:
                            var3 = var4.decayInterval;
                            if (!(var2 != var3)) {
                                _fun54546_ip = 177;
                                continue _fun54546
                            }
                        case 167:
                            var2 = var3.stop;
                            var2 = var2.bind(var3)();
                        case 177:
                            var2 = var4.value;
                            if (!(var2 <= var5)) {
                                _fun54546_ip = 242;
                                continue _fun54546
                            }
                        case 186:
                            var3 = _closure1_slot20;
                            var2 = {};
                            var10 = var2;
                            var9 = var4;
                            var4 = copyDataProperties(var10, var9);
                            var4 = 'value';
                            var2[var4] = var5;
                            var5 = 1;
                            var4 = 'multiplier';
                            var2[var4] = var5;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure1_slot17;
                            var1 = var2.emitChange;
                            var1 = var1.bind(var2)();
                        case 242:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
            case 325:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun54547: for (var _fun54547_ip = 0;;) switch (_fun54547_ip) {
            case 0:
                var4 = arg2;
                var3 = arg3;
                var1 = arg0;
                var0 = arg1;
                var0 = var1 === var0;
                if (!var0) {
                    _fun54547_ip = 59;
                    continue _fun54547
                }
            case 19:
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun54547_ip = 41;
                    continue _fun54547
                }
            case 28:
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
            case 41:
                if (!var1) {
                    _fun54547_ip = 56;
                    continue _fun54547
                }
            case 44:
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var1 = true;
            case 56:
                var0 = var1;
            case 59:
                return var0;
        }
    };
    var _closure1_slot21 = var1;
    var3 = global;
    var11 = var3.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var9.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var10 = var5.ShakeLevel;
    var _closure1_slot10 = var10;
    var5 = var5.ShakeLocation;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.ComponentActions;
    var _closure1_slot12 = var5;
    var3 = var3.Set;
    var5 = var3.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var3
        }
    });
    var16 = var5;
    var3 = new var16[var3](var15);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot13 = var3;
    var3 = 10;
    var5 = var8[var3];
    var5 = var7.bind(var0)(var5);
    var12 = var5.SecondaryIndexMap;
    var5 = var12.prototype;
    var10 = Object.create(var5, {
        constructor: {
            value: var12
        }
    });
    var15 = function(arg0) { // Environment: var6
        var0 = arg0;
        var2 = var0.userId;
        var1 = var0.channelId;
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var14 = function(arg0) { // Environment: var6
        var0 = arg0;
        var4 = var0.userId;
        var3 = var0.channelId;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '-';
        var0 = var2.bind(var1)(var3, var0, var4);
        return var0;
    };
    var16 = var10;
    var5 = new var16[var12](var15, var14, var13);
    var5 = var5 instanceof Object ? var5 : var10;
    var _closure1_slot14 = var5;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var11 = var3.SecondaryIndexMap;
    var3 = var11.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var11
        }
    });
    var15 = function(arg0) { // Environment: var6
        var0 = arg0;
        var3 = var0.messageId;
        var2 = var0.channelId;
        var0 = var0.combo;
        var1 = var0.userId;
        var0 = new Array(3);
        var0[0] = var3;
        var0[1] = var2;
        var0[2] = var1;
        return var0;
    };
    var14 = function(arg0) { // Environment: var6
        var0 = arg0;
        var6 = var0.messageId;
        var10 = var0.channelId;
        var0 = var0.combo;
        var8 = var0.userId;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var11 = '';
        var0 = '-';
        var9 = var0;
        var7 = var0;
        var0 = var11[var2](var10, var9, var8, var7, var6, var5);
        return var0;
    };
    var16 = var5;
    var3 = new var16[var11](var15, var14, var13);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.userId;
        var3 = var0.channelId;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '-';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot16 = var3;
    var5 = 14;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var10 = var5.Store;
    var5 = function(arg0) { // Environment: var6
        var3 = function() {
            _fun54554: for (var _fun54554_ip = 0;;) switch (_fun54554_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54554_ip = 69;
                        continue _fun54554
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54554_ip = 105;
                    continue _fun54554;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var1 = _closure1_slot9;
            var0 = _closure1_slot8;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getComboScore';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun54556: for (var _fun54556_ip = 0;;) switch (_fun54556_ip) {
                case 0:
                    var3 = _closure1_slot14;
                    var2 = var3.get;
                    var5 = _closure1_slot16;
                    var0 = {};
                    var4 = arg0;
                    var0.userId = var4;
                    var4 = arg1;
                    var0.channelId = var4;
                    var4 = undefined;
                    var0 = var5.bind(var4)(var0);
                    var3 = var2.bind(var3)(var0);
                    var0 = null;
                    var2 = var0 == var3;
                    var0 = 0;
                    if (var2) {
                        _fun54556_ip = 86;
                        continue _fun54556
                    }
                case 55:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 12;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.getComboScore;
                    var0 = var1.bind(var2)(var3);
                case 86:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getUserCombo';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot14;
            var1 = var2.get;
            var4 = _closure1_slot16;
            var3 = {};
            var0 = arg0;
            var3.userId = var0;
            var0 = arg1;
            var3.channelId = var0;
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isComboing';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun54558: for (var _fun54558_ip = 0;;) switch (_fun54558_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.getUserCombo;
                    var1 = arg0;
                    var0 = arg1;
                    var3 = var2.bind(var3)(var1, var0);
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun54558_ip = 52;
                        continue _fun54558
                    }
                case 30:
                    var2 = var3.value;
                    var1 = _closure1_slot9;
                    var1 = var1.combosRequiredCount;
                    var0 = var2 >= var1;
                case 52:
                    if (!var0) {
                        _fun54558_ip = 69;
                        continue _fun54558
                    }
                case 55:
                    var2 = _closure1_slot19;
                    var1 = undefined;
                    var0 = var2.bind(var1)(var3);
                case 69:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getMessageCombo';
        var4.key = var6;
        var6 = function arg0() {
            _fun54559: for (var _fun54559_ip = 0;;) switch (_fun54559_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var1 = var2.get;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun54559_ip = 37;
                        continue _fun54559
                    }
                case 31:
                    var1 = var3.combo;
                case 37:
                    var2 = var2 != var1;
                    var0 = undefined;
                    if (!var2) {
                        _fun54559_ip = 49;
                        continue _fun54559
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getMostRecentMessageCombo';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot15;
            var1 = var2.values;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var2 = var1.length;
            var0 = 1;
            var0 = var2 - var0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getUserComboShakeIntensity';
        var4.key = var6;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun54561: for (var _fun54561_ip = 0;;) switch (_fun54561_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.getUserCombo;
                    var1 = arg0;
                    var0 = arg1;
                    var4 = var2.bind(var3)(var1, var0);
                    var0 = null;
                    var1 = var0 != var4;
                    var0 = 0;
                    if (!var1) {
                        _fun54561_ip = 79;
                        continue _fun54561
                    }
                case 32:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getComboShakeIntensity;
                    var1 = arg3;
                    var2 = var2.bind(var3)(var4, var1);
                    var1 = arg2;
                    var0 = var2 * var1;
                case 79:
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var11 = var5.bind(var0)(var10);
    var5 = 'PoggermodeStore';
    var11.displayName = var5;
    var5 = 15;
    var5 = var8[var5];
    var15 = var9.bind(var0)(var5);
    var5 = {};
    var9 = function arg0() {
        _fun54562: for (var _fun54562_ip = 0;;) switch (_fun54562_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.type;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.type = var0;
                var6 = {};
                var5 = var2;
                var4 = var1;
                var2 = copyDataProperties(var6, var5, var4);
                var3 = _closure1_slot9;
                var1 = var3.isEnabled;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun54562_ip = 55;
                    continue _fun54562
                }
            case 51:
                var1 = false;
                return var1;
            case 55:
                var1 = _closure1_slot20;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var5.POGGERMODE_UPDATE_COMBO = var9;
    var9 = function arg0() {
        _fun54563: for (var _fun54563_ip = 0;;) switch (_fun54563_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.comboMessage;
                var2 = _closure1_slot9;
                var1 = var2.isEnabled;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun54563_ip = 33;
                    continue _fun54563
                }
            case 29:
                var1 = false;
                return var1;
            case 33:
                var2 = _closure1_slot15;
                var1 = var2.set;
                var0 = var3.messageId;
                var0 = var1.bind(var2)(var0, var3);
                var0 = undefined;
                return var0;
        }
    };
    var5.POGGERMODE_UPDATE_MESSAGE_COMBO = var9;
    var9 = function arg0() {
        _fun54564: for (var _fun54564_ip = 0;;) switch (_fun54564_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channelId;
                var0 = var0.message;
                var5 = var0.mentions;
                var10 = var0.author;
                var11 = var0.nonce;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot9;
                var1 = var4.isEnabled;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun54564_ip = 63;
                    continue _fun54564
                }
            case 59:
                var1 = false;
                return var1;
            case 63:
                var4 = _closure1_slot7;
                var1 = var4.getId;
                var8 = var1.bind(var4)();
                _closure2_slot0 = var8;
                var7 = _closure1_slot21;
                var1 = null;
                var4 = var1 == var10;
                var6 = undefined;
                if (var4) {
                    _fun54564_ip = 101;
                    continue _fun54564
                }
            case 96:
                var6 = var10.id;
            case 101:
                var13 = _closure1_slot13;
                var17 = undefined;
                var16 = var6;
                var15 = var8;
                var14 = var11;
                var4 = var17[var7](var16, var15, var14, var13, var12);
                if (var4) {
                    _fun54564_ip = 127;
                    continue _fun54564
                }
            case 123:
                var4 = false;
                return var4;
            case 127:
                var7 = _closure1_slot14;
                var6 = var7.get;
                var8 = _closure1_slot16;
                var4 = {};
                var12 = var1 == var10;
                var11 = undefined;
                if (var12) {
                    _fun54564_ip = 156;
                    continue _fun54564
                }
            case 151:
                var11 = var10.id;
            case 156:
                var12 = var1 != var11;
                var10 = '???';
                if (!var12) {
                    _fun54564_ip = 172;
                    continue _fun54564
                }
            case 169:
                var10 = var11;
            case 172:
                var4.userId = var10;
                var4.channelId = var9;
                var4 = var8.bind(var3)(var4);
                var7 = var6.bind(var7)(var4);
                var4 = _closure1_slot9;
                var4 = var4.screenshakeEnabled;
                if (!var4) {
                    _fun54564_ip = 253;
                    continue _fun54564
                }
            case 203:
                var4 = _closure1_slot9;
                var6 = var4.screenshakeEnabledLocations;
                var4 = _closure1_slot11;
                var4 = var4.MENTION;
                var4 = var6[var4];
                if (!var4) {
                    _fun54564_ip = 253;
                    continue _fun54564
                }
            case 230:
                if (!(var1 != var5)) {
                    _fun54564_ip = 253;
                    continue _fun54564
                }
            case 234:
                var4 = var5.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                if (!(var1 == var2)) {
                    _fun54564_ip = 257;
                    continue _fun54564
                }
            case 253:
                var2 = false;
                return var2;
            case 257:
                if (!(var1 == var7)) {
                    _fun54564_ip = 288;
                    continue _fun54564
                }
            case 261:
                var2 = global;
                var4 = var2.Math;
                var2 = var4.random;
                var4 = var2.bind(var4)();
                var2 = 4;
                var4 = var2 * var4;
                _fun54564_ip = 353;
                continue _fun54564;
            case 288:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 12;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.getComboShakeIntensity;
                var2 = _closure1_slot10;
                var2 = var2.LEVEL_4;
                var2 = var5.bind(var6)(var7, var2);
                var5 = var1 != var2;
                var1 = 0.001;
                if (!var5) {
                    _fun54564_ip = 350;
                    continue _fun54564
                }
            case 347:
                var1 = var2;
            case 350:
                var4 = var1;
            case 353:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 13;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.ComponentDispatch;
                var2 = var3.dispatch;
                var0 = _closure1_slot12;
                var1 = var0.SHAKE_APP;
                var0 = {};
                var5 = 1000;
                var0.duration = var5;
                var0.intensity = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = true;
                return var0;
        }
    };
    var5.MESSAGE_CREATE = var9;
    var9 = var11.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var16 = var9;
    var14 = var5;
    var5 = new var16[var11](var15, var14, var13);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot17 = var5;
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/poggermode/PoggermodeStore.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.isComboing = var4;
    var2.getComboId = var3;
    var2.shouldTrackMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1661, 6492, 6493, 660, 3046, 3589, 6573, 1229, 566, 806, 2]);