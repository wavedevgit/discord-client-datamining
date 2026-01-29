// ../discord_common/js/shared/utils/BigFlagUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6236: for (var _fun6236_ip = 0;;) switch (_fun6236_ip) {
        case 0:
            var7 = metroImportDefault;
            var2 = exports;
            var11 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var11;
            var0 = function(arg0, arg1, arg2) { // Original name: fromHexReverseArray, environment: var4
                _fun6237: for (var _fun6237_ip = 0;;) switch (_fun6237_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var2 = 0;
                        var5 = 16;
                        var4 = 4;
                        var3 = undefined;
                        var1 = 0;
                        var0 = 0;
                        if (!(var0 < var4)) {
                            _fun6237_ip = 67;
                            continue _fun6237
                        }
                    case 24:
                        var8 = var6 + var1;
                        var9 = var7[var8];
                        var0 = var2;
                        if (!(var3 !== var9)) {
                            _fun6237_ip = 67;
                            continue _fun6237
                        }
                    case 39:
                        var11 = var5;
                        var10 = var1;
                        var8 = exponentiationOperator(var11, var10);
                        var8 = var9 * var8;
                        var2 = var2 + var8;
                        var1 = var1 + 1;
                        var0 = var2;
                        if (var1 < var4) {
                            _fun6237_ip = 24;
                            continue _fun6237
                        }
                    case 67:
                        return var0;
                }
            };
            var _closure1_slot11 = var0;
            var0 = function(arg0) { // Original name: toHexReverseArray, environment: var4
                _fun6238: for (var _fun6238_ip = 0;;) switch (_fun6238_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = new Array(0);
                        var1 = var6.length;
                        var5 = 0;
                        var1 = var5 < var1;
                        var4 = global;
                        var3 = undefined;
                        var2 = 0;
                        if (!var1) {
                            _fun6238_ip = 152;
                            continue _fun6238
                        }
                    case 30:
                        var7 = var4.Number;
                        var1 = var6[var2];
                        var9 = var7.bind(var3)(var1);
                        var8 = var9;
                        var7 = 0;
                        if (var9) {
                            _fun6238_ip = 70;
                            continue _fun6238
                        }
                    case 53:
                        var1 = var0.length;
                        var1 = var5 < var1;
                        var8 = var9;
                        var7 = 0;
                        if (!var1) {
                            _fun6238_ip = 140;
                            continue _fun6238
                        }
                    case 70:
                        var9 = var0[var7];
                        if (var9) {
                            _fun6238_ip = 79;
                            continue _fun6238
                        }
                    case 77:
                        var9 = 0;
                    case 79:
                        var1 = 10;
                        var1 = var1 * var9;
                        var10 = var8 + var1;
                        var9 = 16;
                        var1 = var10 % var9;
                        var0[var7] = var1;
                        var1 = var0[var7];
                        var1 = var10 - var1;
                        var10 = var1 / var9;
                        var9 = var7 + 1;
                        var8 = var10;
                        var7 = var9;
                        if (var10) {
                            _fun6238_ip = 70;
                            continue _fun6238
                        }
                    case 125:
                        var1 = var0.length;
                        var8 = var10;
                        var7 = var9;
                        if (var7 < var1) {
                            _fun6238_ip = 70;
                            continue _fun6238
                        }
                    case 140:
                        var2 = var2 + 1;
                        var1 = var6.length;
                        if (var2 < var1) {
                            _fun6238_ip = 30;
                            continue _fun6238
                        }
                    case 152:
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var3 = global;
            var8 = var3.Object;
            var6 = var8.defineProperty;
            var5 = {};
            var1 = true;
            var5.value = var1;
            var0 = '__esModule';
            var0 = var6.bind(var8)(var2, var0, var5);
            var5 = 0;
            var6 = var11[var5];
            var0 = undefined;
            var6 = var7.bind(var0)(var6);
            var _closure1_slot2 = var6;
            var6 = 1;
            var6 = var11[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var6 = function() { // Environment: var4
                var4 = function(arg0, arg1) { // Original name: HighLow, environment: var5
                    var2 = this;
                    var3 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var1 = arg0;
                    var2.parts = var1;
                    var1 = arg1;
                    var2.str = var1;
                    return var0;
                };
                var _closure2_slot0 = var4;
                var3 = _closure1_slot3;
                var0 = {};
                var1 = 'and';
                var0.key = var1;
                var1 = function(arg0) { // Original name: value, environment: var5
                    var1 = arg0;
                    var1 = var1.parts;
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot0;
                    var1 = this;
                    var3 = var1.parts;
                    var1 = var3.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg1;
                        var1 = var1[var0];
                        var0 = arg0;
                        var0 = var0 & var1;
                        return var0;
                    };
                    var4 = var1.bind(var3)(var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var0.value = var1;
                var2 = new Array(7);
                var2[0] = var0;
                var0 = {};
                var1 = 'or';
                var0.key = var1;
                var1 = function(arg0) { // Original name: value, environment: var5
                    var1 = arg0;
                    var1 = var1.parts;
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot0;
                    var1 = this;
                    var3 = var1.parts;
                    var1 = var3.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg1;
                        var1 = var1[var0];
                        var0 = arg0;
                        var0 = var0 | var1;
                        return var0;
                    };
                    var4 = var1.bind(var3)(var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var0.value = var1;
                var2[1] = var0;
                var0 = {};
                var1 = 'xor';
                var0.key = var1;
                var1 = function(arg0) { // Original name: value, environment: var5
                    var1 = arg0;
                    var1 = var1.parts;
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot0;
                    var1 = this;
                    var3 = var1.parts;
                    var1 = var3.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg1;
                        var1 = var1[var0];
                        var0 = arg0;
                        var0 = var0 ^ var1;
                        return var0;
                    };
                    var4 = var1.bind(var3)(var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var0.value = var1;
                var2[2] = var0;
                var0 = {};
                var1 = 'not';
                var0.key = var1;
                var1 = function() { // Original name: value, environment: var5
                    var2 = _closure2_slot0;
                    var0 = this;
                    var3 = var0.parts;
                    var1 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = ~var0;
                        return var0;
                    };
                    var4 = var1.bind(var3)(var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var0.value = var1;
                var2[3] = var0;
                var0 = {};
                var1 = 'equals';
                var0.key = var1;
                var1 = function(arg0) { // Original name: value, environment: var5
                    var1 = arg0;
                    var1 = var1.parts;
                    var _closure3_slot0 = var1;
                    var1 = this;
                    var2 = var1.parts;
                    var1 = var2.every;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg1;
                        var1 = var1[var0];
                        var0 = arg0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.value = var1;
                var2[4] = var0;
                var0 = {};
                var1 = 'toString';
                var0.key = var1;
                var1 = function() { // Original name: value, environment: var5
                    _fun6251: for (var _fun6251_ip = 0;;) switch (_fun6251_ip) {
                        case 0:
                            var0 = this;
                            var3 = var0.str;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun6251_ip = 130;
                                continue _fun6251
                            }
                        case 17:
                            var2 = global;
                            var2 = var2.Array;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var4 = 16;
                            var8 = var3;
                            var7 = var4;
                            var2 = new var8[var2](var7, var6);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var _closure3_slot0 = var3;
                            var5 = var0.parts;
                            var2 = var5.forEach;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun6252: for (var _fun6252_ip = 0;;) switch (_fun6252_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var7 = arg1;
                                        var2 = _closure1_slot12;
                                        var0 = var1.toString;
                                        var1 = var0.bind(var1)();
                                        var0 = undefined;
                                        var6 = var2.bind(var0)(var1);
                                        var4 = 4;
                                        var2 = 3;
                                        var1 = 0;
                                    case 40:
                                        var10 = _closure3_slot0;
                                        var8 = var4 * var7;
                                        var9 = var1 + var8;
                                        var8 = var2 - var1;
                                        var8 = var6[var8];
                                        if (var8) {
                                            _fun6252_ip = 65;
                                            continue _fun6252
                                        }
                                    case 63:
                                        var8 = 0;
                                    case 65:
                                        var10[var9] = var8;
                                        var1 = var1 + 1;
                                        if (var1 < var4) {
                                            _fun6252_ip = 40;
                                            continue _fun6252
                                        }
                                    case 76:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var5)(var1);
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 2;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var5.bind(var1)(var2);
                            var1 = var2.fromArray;
                            var2 = var1.bind(var2)(var3, var4);
                            var1 = var2.toString;
                            var1 = var1.bind(var2)();
                            var0.str = var1;
                            return var1;
                        case 130:
                            var0 = var0.str;
                            return var0;
                    }
                };
                var0.value = var1;
                var2[5] = var0;
                var0 = {};
                var1 = 'toJSON';
                var0.key = var1;
                var1 = function() { // Original name: value, environment: var5
                    var1 = this;
                    var0 = var1.toString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.value = var1;
                var2[6] = var0;
                var0 = {};
                var1 = 'fromString';
                var0.key = var1;
                var1 = function(arg0) { // Original name: value, environment: var5
                    _fun6254: for (var _fun6254_ip = 0;;) switch (_fun6254_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var0 = _closure1_slot12;
                            var7 = undefined;
                            var6 = var0.bind(var7)(var3);
                            var0 = global;
                            var0 = var0.Array;
                            var5 = 4;
                            var0 = var0.bind(var7)(var5);
                            var1 = 3;
                            var4 = 0;
                        case 45:
                            var10 = var1 - var4;
                            var11 = _closure1_slot11;
                            var9 = var5 * var4;
                            var9 = var11.bind(var7)(var6, var9, var5);
                            var0[var10] = var9;
                            var4 = var4 + 1;
                            if (var4 < var5) {
                                _fun6254_ip = 45;
                                continue _fun6254
                            }
                        case 75:
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var15 = var1;
                            var14 = var0;
                            var13 = var3;
                            var0 = new var15[var2](var14, var13, var12);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var0.value = var1;
                var1 = new Array(3);
                var1[0] = var0;
                var0 = {};
                var6 = 'fromBit';
                var0.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun6255: for (var _fun6255_ip = 0;;) switch (_fun6255_ip) {
                        case 0:
                            var8 = arg0;
                            var0 = global;
                            var2 = var0.Array;
                            var1 = undefined;
                            var7 = 4;
                            var2 = var2.bind(var1)(var7);
                            var3 = var0.Math;
                            var1 = var3.floor;
                            var6 = 16;
                            var0 = var8 / var6;
                            var5 = var1.bind(var3)(var0);
                            var3 = 1;
                            var1 = 3;
                            var0 = 0;
                        case 53:
                            var10 = var1 - var0;
                            var9 = 0;
                            if (!(var0 === var5)) {
                                _fun6255_ip = 75;
                                continue _fun6255
                            }
                        case 63:
                            var11 = var6 * var5;
                            var11 = var8 - var11;
                            var9 = var3 << var11;
                        case 75:
                            var2[var10] = var9;
                            var0 = var0 + 1;
                            if (var0 < var7) {
                                _fun6255_ip = 53;
                                continue _fun6255
                            }
                        case 86:
                            var0 = _closure2_slot0;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var13 = var1;
                            var12 = var2;
                            var0 = new var13[var0](var12, var11);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var0.value = var6;
                var1[1] = var0;
                var0 = {};
                var6 = 'asUintN';
                var0.key = var6;
                var5 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun6256: for (var _fun6256_ip = 0;;) switch (_fun6256_ip) {
                        case 0:
                            var8 = arg0;
                            var0 = arg1;
                            var7 = var0.parts;
                            var9 = 0;
                            var1 = var9 < var8;
                            var0 = 0;
                            if (!var1) {
                                _fun6256_ip = 162;
                                continue _fun6256
                            }
                        case 26:
                            var1 = var7.length;
                            var6 = 16;
                            var1 = var6 * var1;
                            var5 = global;
                            var4 = 1;
                            var3 = 0;
                            var2 = 0;
                            var0 = 0;
                            if (!(var0 < var1)) {
                                _fun6256_ip = 162;
                                continue _fun6256
                            }
                        case 53:
                            var10 = var5.Math;
                            var9 = var10.min;
                            var1 = var8 - var2;
                            var1 = var9.bind(var10)(var1, var6);
                            var9 = var4 << var1;
                            var11 = var7.length;
                            var13 = var5.Math;
                            var12 = var13.floor;
                            var10 = var2 / var6;
                            var10 = var12.bind(var13)(var10);
                            var10 = var11 - var10;
                            var10 = var10 - var4;
                            var10 = var7[var10];
                            var9 = var9 - var4;
                            var9 = var10 & var9;
                            var9 = var9 << var2;
                            var9 = var3 | var9;
                            var2 = var2 + var1;
                            var0 = var9;
                            if (!(var2 < var8)) {
                                _fun6256_ip = 162;
                                continue _fun6256
                            }
                        case 143:
                            var1 = var7.length;
                            var1 = var6 * var1;
                            var3 = var9;
                            var0 = var3;
                            if (var2 < var1) {
                                _fun6256_ip = 53;
                                continue _fun6256
                            }
                        case 162:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var4, var2, var1);
                return var0;
            };
            var6 = var6.bind(var0)();
            var _closure1_slot4 = var6;
        case 115: // try_start_0
            var6 = var3.BigInt;
        case 121: // try_end0
            var1 = true;
            _fun6236_ip = 129;
            continue _fun6236;
        case 125: // catch_target0
            CatchBlockStart(arg_register = 6);
            var1 = false;
        case 129:
            var6 = var1;
            if (!var6) {
                _fun6236_ip = 158;
                continue _fun6236
            }
        case 135:
            var7 = var3.BigInt;
            var7 = var7.prototype;
            var8 = var7.toJSON;
            var7 = null;
            var6 = var7 == var8;
        case 158:
            if (!var6) {
                _fun6236_ip = 183;
                continue _fun6236
            }
        case 161:
            var3 = var3.BigInt;
            var6 = var3.prototype;
            var3 = function() { // Environment: var4
                var1 = this;
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
            };
            var6.toJSON = var3;
        case 183:
            if (var1) {
                _fun6236_ip = 193;
                continue _fun6236
            }
        case 186:
            var9 = function(arg0) { // Environment: var4
                var1 = _closure1_slot4;
                var0 = arg0;
                var0 = var0 instanceof var1;
                return var0;
            };
            _fun6236_ip = 198;
            continue _fun6236;
        case 193:
            var9 = function(arg0) { // Environment: var4
                var1 = 'bigint';
                var0 = arg0;
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
        case 198:
            var3 = {};
            var _closure1_slot5 = var3;
            if (var1) {
                _fun6236_ip = 214;
                continue _fun6236
            }
        case 207:
            var3 = function(arg0) { // Environment: var4
                _fun6261: for (var _fun6261_ip = 0;;) switch (_fun6261_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure1_slot4;
                        var2 = var4 instanceof var0;
                        var0 = var4;
                        if (var2) {
                            _fun6261_ip = 88;
                            continue _fun6261
                        }
                    case 20:
                        var5 = 'number';
                        var3 = typeof var4;
                        var2 = var4;
                        if (!(var5 === var3)) {
                            _fun6261_ip = 43;
                            continue _fun6261
                        }
                    case 34:
                        var3 = var4.toString;
                        var2 = var3.bind(var4)();
                    case 43:
                        var3 = _closure1_slot5;
                        var4 = var3[var2];
                        var3 = null;
                        if (!(var3 == var4)) {
                            _fun6261_ip = 80;
                            continue _fun6261
                        }
                    case 57:
                        var4 = _closure1_slot5;
                        var5 = _closure1_slot4;
                        var3 = var5.fromString;
                        var3 = var3.bind(var5)(var2);
                        var4[var2] = var3;
                    case 80:
                        var1 = _closure1_slot5;
                        var0 = var1[var2];
                    case 88:
                        return var0;
                }
            };
            _fun6236_ip = 219;
            continue _fun6236;
        case 214:
            var3 = function(arg0) { // Environment: var4
                var0 = global;
                var2 = var0.BigInt;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
        case 219:
            var5 = var3.bind(var0)(var5);
            var _closure1_slot6 = var5;
            var8 = var3;
            if (var1) {
                _fun6236_ip = 241;
                continue _fun6236
            }
        case 234:
            var7 = function() { // Environment: var4
                _fun6263: for (var _fun6263_ip = 0;;) switch (_fun6263_ip) {
                    case 0:
                        var2 = arguments[0];
                        var1 = arguments[1];
                        var0 = undefined;
                        if (!(var2 === var0)) {
                            _fun6263_ip = 19;
                            continue _fun6263
                        }
                    case 12:
                        var2 = _closure1_slot6;
                    case 19:
                        if (!(var1 === var0)) {
                            _fun6263_ip = 30;
                            continue _fun6263
                        }
                    case 23:
                        var1 = _closure1_slot6;
                    case 30:
                        var0 = var2.and;
                        var0 = var0.bind(var2)(var1);
                        return var0;
                }
            };
            _fun6236_ip = 246;
            continue _fun6236;
        case 241:
            var7 = function() { // Environment: var4
                _fun6262: for (var _fun6262_ip = 0;;) switch (_fun6262_ip) {
                    case 0:
                        var1 = arguments[0];
                        var0 = arguments[1];
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun6262_ip = 19;
                            continue _fun6262
                        }
                    case 12:
                        var1 = _closure1_slot6;
                    case 19:
                        if (!(var0 === var2)) {
                            _fun6262_ip = 30;
                            continue _fun6262
                        }
                    case 23:
                        var0 = _closure1_slot6;
                    case 30:
                        var0 = var1 & var0;
                        return var0;
                }
            };
        case 246:
            var _closure1_slot7 = var7;
            if (var1) {
                _fun6236_ip = 260;
                continue _fun6236
            }
        case 253:
            var3 = function() { // Environment: var4
                _fun6265: for (var _fun6265_ip = 0;;) switch (_fun6265_ip) {
                    case 0:
                        var2 = arguments[0];
                        var1 = arguments[1];
                        var0 = undefined;
                        if (!(var2 === var0)) {
                            _fun6265_ip = 19;
                            continue _fun6265
                        }
                    case 12:
                        var2 = _closure1_slot6;
                    case 19:
                        if (!(var1 === var0)) {
                            _fun6265_ip = 30;
                            continue _fun6265
                        }
                    case 23:
                        var1 = _closure1_slot6;
                    case 30:
                        var0 = var2.or;
                        var0 = var0.bind(var2)(var1);
                        return var0;
                }
            };
            _fun6236_ip = 265;
            continue _fun6236;
        case 260:
            var3 = function() { // Environment: var4
                _fun6264: for (var _fun6264_ip = 0;;) switch (_fun6264_ip) {
                    case 0:
                        var1 = arguments[0];
                        var0 = arguments[1];
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun6264_ip = 19;
                            continue _fun6264
                        }
                    case 12:
                        var1 = _closure1_slot6;
                    case 19:
                        if (!(var0 === var2)) {
                            _fun6264_ip = 30;
                            continue _fun6264
                        }
                    case 23:
                        var0 = _closure1_slot6;
                    case 30:
                        var0 = var1 | var0;
                        return var0;
                }
            };
        case 265:
            var _closure1_slot8 = var3;
            if (var1) {
                _fun6236_ip = 279;
                continue _fun6236
            }
        case 272:
            var3 = function() { // Environment: var4
                _fun6267: for (var _fun6267_ip = 0;;) switch (_fun6267_ip) {
                    case 0:
                        var2 = arguments[0];
                        var1 = arguments[1];
                        var0 = undefined;
                        if (!(var2 === var0)) {
                            _fun6267_ip = 19;
                            continue _fun6267
                        }
                    case 12:
                        var2 = _closure1_slot6;
                    case 19:
                        if (!(var1 === var0)) {
                            _fun6267_ip = 30;
                            continue _fun6267
                        }
                    case 23:
                        var1 = _closure1_slot6;
                    case 30:
                        var0 = var2.xor;
                        var0 = var0.bind(var2)(var1);
                        return var0;
                }
            };
            _fun6236_ip = 284;
            continue _fun6236;
        case 279:
            var3 = function() { // Environment: var4
                _fun6266: for (var _fun6266_ip = 0;;) switch (_fun6266_ip) {
                    case 0:
                        var1 = arguments[0];
                        var0 = arguments[1];
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun6266_ip = 19;
                            continue _fun6266
                        }
                    case 12:
                        var1 = _closure1_slot6;
                    case 19:
                        if (!(var0 === var2)) {
                            _fun6266_ip = 30;
                            continue _fun6266
                        }
                    case 23:
                        var0 = _closure1_slot6;
                    case 30:
                        var0 = var1 ^ var0;
                        return var0;
                }
            };
        case 284:
            var _closure1_slot9 = var3;
            if (var1) {
                _fun6236_ip = 298;
                continue _fun6236
            }
        case 291:
            var6 = function() { // Environment: var4
                _fun6269: for (var _fun6269_ip = 0;;) switch (_fun6269_ip) {
                    case 0:
                        var1 = arguments[0];
                        var0 = undefined;
                        if (!(var1 === var0)) {
                            _fun6269_ip = 16;
                            continue _fun6269
                        }
                    case 9:
                        var1 = _closure1_slot6;
                    case 16:
                        var0 = var1.not;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            _fun6236_ip = 303;
            continue _fun6236;
        case 298:
            var6 = function() { // Environment: var4
                _fun6268: for (var _fun6268_ip = 0;;) switch (_fun6268_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun6268_ip = 16;
                            continue _fun6268
                        }
                    case 9:
                        var0 = _closure1_slot6;
                    case 16:
                        var0 = ~var0;
                        return var0;
                }
            };
        case 303:
            if (var1) {
                _fun6236_ip = 313;
                continue _fun6236
            }
        case 306:
            var5 = function(arg0, arg1) { // Environment: var4
                _fun6271: for (var _fun6271_ip = 0;;) switch (_fun6271_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = arg1;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun6271_ip = 29;
                            continue _fun6271
                        }
                    case 12:
                        if (!(var0 != var1)) {
                            _fun6271_ip = 29;
                            continue _fun6271
                        }
                    case 16:
                        var0 = var2.equals;
                        var0 = var0.bind(var2)(var1);
                        _fun6271_ip = 33;
                        continue _fun6271;
                    case 29:
                        var0 = var2 == var1;
                    case 33:
                        return var0;
                }
            };
            _fun6236_ip = 318;
            continue _fun6236;
        case 313:
            var5 = function(arg0, arg1) { // Environment: var4
                var1 = arg0;
                var0 = arg1;
                var0 = var1 === var0;
                return var0;
            };
        case 318:
            var _closure1_slot10 = var5;
            if (var1) {
                _fun6236_ip = 332;
                continue _fun6236
            }
        case 325:
            var3 = function(arg0) { // Environment: var4
                var2 = _closure1_slot4;
                var1 = var2.fromBit;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            _fun6236_ip = 337;
            continue _fun6236;
        case 332:
            var3 = function(arg0) { // Environment: var4
                var0 = global;
                var2 = var0.BigInt;
                var3 = undefined;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                var2 = var0.BigInt;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var0 = var1 << var0;
                return var0;
            };
        case 337:
            if (var1) {
                _fun6236_ip = 347;
                continue _fun6236
            }
        case 340:
            var1 = function(arg0, arg1) { // Environment: var4
                var3 = _closure1_slot4;
                var2 = var3.asUintN;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            _fun6236_ip = 352;
            continue _fun6236;
        case 347:
            var1 = function(arg0, arg1) { // Environment: var4
                var0 = global;
                var2 = var0.Number;
                var4 = var0.BigInt;
                var3 = var4.asUintN;
                var1 = arg0;
                var0 = arg1;
                var1 = var3.bind(var4)(var1, var0);
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
        case 352:
            var10 = 3;
            var11 = var11[var10];
            var10 = arg1;
            var12 = var10.bind(var0)(var11);
            var11 = var12.fileFinishedImporting;
            var10 = '../discord_common/js/shared/utils/BigFlagUtils.tsx';
            var10 = var11.bind(var12)(var10);
            var2.isBigFlag = var9;
            var2.deserialize = var8;
            var2.filter = var7;
            var2.invert = var6;
            var2.equals = var5;
            var5 = function(arg0) { // Original name: combine, environment: var4
                _fun6276: for (var _fun6276_ip = 0;;) switch (_fun6276_ip) {
                    case 0:
                        var0 = 0;
                        var9 = 0;
                        var6 = copyRestArgs(var9);
                        var2 = var6[var0];
                        var1 = var6.length;
                        var5 = 1;
                        var1 = var5 < var1;
                        var3 = undefined;
                        var0 = var2;
                        if (!var1) {
                            _fun6276_ip = 64;
                            continue _fun6276
                        }
                    case 35:
                        var7 = _closure1_slot8;
                        var1 = var6[var5];
                        var2 = var7.bind(var3)(var2, var1);
                        var5 = var5 + 1;
                        var1 = var6.length;
                        var0 = var2;
                        if (var5 < var1) {
                            _fun6276_ip = 35;
                            continue _fun6276
                        }
                    case 64:
                        return var0;
                }
            };
            var2.combine = var5;
            var5 = function(arg0, arg1) { // Original name: has, environment: var4
                var3 = arg1;
                var2 = _closure1_slot10;
                var4 = _closure1_slot7;
                var1 = undefined;
                var0 = arg0;
                var0 = var4.bind(var1)(var0, var3);
                var0 = var2.bind(var1)(var0, var3);
                return var0;
            };
            var2.has = var5;
            var5 = function(arg0, arg1) { // Original name: hasAny, environment: var4
                var3 = _closure1_slot10;
                var5 = _closure1_slot7;
                var2 = undefined;
                var4 = arg0;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var1);
                var0 = _closure1_slot6;
                var0 = var3.bind(var2)(var1, var0);
                var0 = !var0;
                return var0;
            };
            var2.hasAny = var5;
            var5 = function(arg0, arg1) { // Original name: add, environment: var4
                _fun6279: for (var _fun6279_ip = 0;;) switch (_fun6279_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = arg1;
                        var2 = _closure1_slot6;
                        var0 = var4;
                        if (!(var3 !== var2)) {
                            _fun6279_ip = 32;
                            continue _fun6279
                        }
                    case 20:
                        var2 = _closure1_slot8;
                        var1 = undefined;
                        var0 = var2.bind(var1)(var4, var3);
                    case 32:
                        return var0;
                }
            };
            var2.add = var5;
            var4 = function(arg0, arg1) { // Original name: remove, environment: var4
                _fun6280: for (var _fun6280_ip = 0;;) switch (_fun6280_ip) {
                    case 0:
                        var4 = arg0;
                        var5 = arg1;
                        var2 = _closure1_slot6;
                        var0 = var4;
                        if (!(var5 !== var2)) {
                            _fun6280_ip = 42;
                            continue _fun6280
                        }
                    case 20:
                        var3 = _closure1_slot9;
                        var1 = _closure1_slot7;
                        var2 = undefined;
                        var1 = var1.bind(var2)(var4, var5);
                        var0 = var3.bind(var2)(var4, var1);
                    case 42:
                        return var0;
                }
            };
            var2.remove = var4;
            var2.getFlag = var3;
            var2.asUintN = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 24, 2]);