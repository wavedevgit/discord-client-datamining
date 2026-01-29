// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0) { // Original name: _typeof, environment: var1
        _fun86746: for (var _fun86746_ip = 0;;) switch (_fun86746_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86746_ip = 42;
                    continue _fun86746
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun86746_ip = 51;
                    continue _fun86746
                }
            case 42:
                var2 = function(arg0) { // Environment: var0
                    _fun86748: for (var _fun86748_ip = 0;;) switch (_fun86748_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun86748_ip = 58;
                                continue _fun86748
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun86748_ip = 58;
                                continue _fun86748
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun86748_ip = 58;
                                continue _fun86748
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun86748_ip = 61;
                                continue _fun86748
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun86746_ip = 58;
                continue _fun86746;
            case 51:
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 58:
                _closure1_slot2 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var3 = function() { // Original name: create, environment: var1
        _fun86749: for (var _fun86749_ip = 0;;) switch (_fun86749_ip) {
            case 0:
                var0 = _closure1_slot0;
                var3 = var0.ARRAY_TYPE;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 4;
                var5 = var2;
                var0 = new var5[var3](var4, var3);
                var0 = var0 instanceof Object ? var0 : var2;
                var1 = _closure1_slot0;
                var2 = var1.ARRAY_TYPE;
                var1 = global;
                var1 = var1.Float32Array;
                if (!(var2 != var1)) {
                    _fun86749_ip = 85;
                    continue _fun86749
                }
            case 58:
                var2 = 0;
                var0[var2] = var2;
                var1 = 1;
                var0[var1] = var2;
                var1 = 2;
                var0[var1] = var2;
                var1 = 3;
                var0[var1] = var2;
            case 85:
                return var0;
        }
    };
    var10 = function(arg0, arg1, arg2) { // Original name: subtract, environment: var1
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var4 = 0;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 1;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 2;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var2 = 3;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var9 = function(arg0, arg1, arg2) { // Original name: multiply, environment: var1
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var4 = 0;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 * var2;
        var0[var4] = var2;
        var4 = 1;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 * var2;
        var0[var4] = var2;
        var4 = 2;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 * var2;
        var0[var4] = var2;
        var2 = 3;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var3 * var1;
        var0[var2] = var1;
        return var0;
    };
    var8 = function(arg0, arg1, arg2) { // Original name: divide, environment: var1
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var4 = 0;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 / var2;
        var0[var4] = var2;
        var4 = 1;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 / var2;
        var0[var4] = var2;
        var4 = 2;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 / var2;
        var0[var4] = var2;
        var2 = 3;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var3 / var1;
        var0[var2] = var1;
        return var0;
    };
    var7 = function(arg0, arg1) { // Original name: distance, environment: var1
        var2 = arg0;
        var1 = arg1;
        var0 = 0;
        var3 = var1[var0];
        var0 = var2[var0];
        var5 = var3 - var0;
        var0 = 1;
        var3 = var1[var0];
        var0 = var2[var0];
        var4 = var3 - var0;
        var0 = 2;
        var3 = var1[var0];
        var0 = var2[var0];
        var3 = var3 - var0;
        var0 = 3;
        var1 = var1[var0];
        var0 = var2[var0];
        var0 = var1 - var0;
        var1 = global;
        var2 = var1.Math;
        var1 = var2.sqrt;
        var5 = var5 * var5;
        var4 = var4 * var4;
        var4 = var5 + var4;
        var3 = var3 * var3;
        var3 = var4 + var3;
        var0 = var0 * var0;
        var0 = var3 + var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6 = function(arg0, arg1) { // Original name: squaredDistance, environment: var1
        var5 = arg0;
        var4 = arg1;
        var0 = 0;
        var1 = var4[var0];
        var0 = var5[var0];
        var3 = var1 - var0;
        var0 = 1;
        var1 = var4[var0];
        var0 = var5[var0];
        var2 = var1 - var0;
        var0 = 2;
        var1 = var4[var0];
        var0 = var5[var0];
        var1 = var1 - var0;
        var0 = 3;
        var4 = var4[var0];
        var0 = var5[var0];
        var0 = var4 - var0;
        var3 = var3 * var3;
        var2 = var2 * var2;
        var2 = var3 + var2;
        var1 = var1 * var1;
        var1 = var2 + var1;
        var0 = var0 * var0;
        var0 = var1 + var0;
        return var0;
    };
    var5 = function(arg0) { // Original name: length, environment: var1
        var1 = arg0;
        var0 = 0;
        var5 = var1[var0];
        var0 = 1;
        var4 = var1[var0];
        var0 = 2;
        var3 = var1[var0];
        var0 = 3;
        var0 = var1[var0];
        var1 = global;
        var2 = var1.Math;
        var1 = var2.sqrt;
        var5 = var5 * var5;
        var4 = var4 * var4;
        var4 = var5 + var4;
        var3 = var3 * var3;
        var3 = var4 + var3;
        var0 = var0 * var0;
        var0 = var3 + var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4 = function(arg0) { // Original name: squaredLength, environment: var1
        var4 = arg0;
        var0 = 0;
        var3 = var4[var0];
        var0 = 1;
        var2 = var4[var0];
        var0 = 2;
        var1 = var4[var0];
        var0 = 3;
        var0 = var4[var0];
        var3 = var3 * var3;
        var2 = var2 * var2;
        var2 = var3 + var2;
        var1 = var1 * var1;
        var1 = var2 + var1;
        var0 = var0 * var0;
        var0 = var1 + var0;
        return var0;
    };
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var11 = {};
    var0 = true;
    var11.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var11);
    var0 = function(arg0, arg1, arg2) { // Original name: add, environment: var1
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var4 = 0;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 1;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 2;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var2 = 3;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.add = var0;
    var0 = function(arg0, arg1) { // Original name: ceil, environment: var1
        var0 = arg0;
        var1 = arg1;
        var2 = global;
        var6 = var2.Math;
        var5 = var6.ceil;
        var4 = 0;
        var3 = var1[var4];
        var3 = var5.bind(var6)(var3);
        var0[var4] = var3;
        var6 = var2.Math;
        var5 = var6.ceil;
        var4 = 1;
        var3 = var1[var4];
        var3 = var5.bind(var6)(var3);
        var0[var4] = var3;
        var6 = var2.Math;
        var5 = var6.ceil;
        var4 = 2;
        var3 = var1[var4];
        var3 = var5.bind(var6)(var3);
        var0[var4] = var3;
        var4 = var2.Math;
        var3 = var4.ceil;
        var2 = 3;
        var1 = var1[var2];
        var1 = var3.bind(var4)(var1);
        var0[var2] = var1;
        return var0;
    };
    var2.ceil = var0;
    var0 = function(arg0) { // Original name: clone, environment: var1
        var1 = arg0;
        var0 = _closure1_slot0;
        var3 = var0.ARRAY_TYPE;
        var0 = var3.prototype;
        var2 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var4 = 4;
        var5 = var2;
        var0 = new var5[var3](var4, var3);
        var0 = var0 instanceof Object ? var0 : var2;
        var3 = 0;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 1;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 2;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 3;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.clone = var0;
    var0 = function(arg0, arg1) { // Original name: copy, environment: var1
        var0 = arg0;
        var1 = arg1;
        var3 = 0;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 1;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 2;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 3;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.copy = var0;
    var2.create = var3;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: cross, environment: var1
        var0 = arg0;
        var8 = arg1;
        var5 = arg2;
        var1 = arg3;
        var15 = 0;
        var3 = var5[var15];
        var13 = 1;
        var2 = var1[var13];
        var3 = var3 * var2;
        var4 = var5[var13];
        var2 = var1[var15];
        var2 = var4 * var2;
        var4 = var3 - var2;
        var3 = var5[var15];
        var9 = 2;
        var2 = var1[var9];
        var3 = var3 * var2;
        var6 = var5[var9];
        var2 = var1[var15];
        var2 = var6 * var2;
        var6 = var3 - var2;
        var7 = var5[var15];
        var2 = 3;
        var3 = var1[var2];
        var7 = var7 * var3;
        var10 = var5[var2];
        var3 = var1[var15];
        var3 = var10 * var3;
        var10 = var7 - var3;
        var7 = var5[var13];
        var3 = var1[var9];
        var7 = var7 * var3;
        var11 = var5[var9];
        var3 = var1[var13];
        var3 = var11 * var3;
        var7 = var7 - var3;
        var11 = var5[var13];
        var3 = var1[var2];
        var11 = var11 * var3;
        var12 = var5[var2];
        var3 = var1[var13];
        var3 = var12 * var3;
        var11 = var11 - var3;
        var12 = var5[var9];
        var3 = var1[var2];
        var3 = var12 * var3;
        var5 = var5[var2];
        var1 = var1[var9];
        var1 = var5 * var1;
        var14 = var3 - var1;
        var5 = var8[var15];
        var3 = var8[var13];
        var1 = var8[var9];
        var8 = var8[var2];
        var16 = var3 * var14;
        var12 = var1 * var11;
        var16 = var16 - var12;
        var12 = var8 * var7;
        var12 = var16 + var12;
        var0[var15] = var12;
        var12 = -var5;
        var14 = var12 * var14;
        var12 = var1 * var10;
        var14 = var14 + var12;
        var12 = var8 * var6;
        var12 = var14 - var12;
        var0[var13] = var12;
        var11 = var5 * var11;
        var10 = var3 * var10;
        var10 = var11 - var10;
        var8 = var8 * var4;
        var8 = var10 + var8;
        var0[var9] = var8;
        var5 = -var5;
        var5 = var5 * var7;
        var3 = var3 * var6;
        var3 = var5 + var3;
        var1 = var1 * var4;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var2.cross = var0;
    var0 = undefined;
    var2.dist = var0;
    var2.distance = var7;
    var2.div = var0;
    var2.divide = var8;
    var11 = function(arg0, arg1) { // Original name: dot, environment: var1
        var2 = arg0;
        var3 = arg1;
        var0 = 0;
        var1 = var2[var0];
        var0 = var3[var0];
        var1 = var1 * var0;
        var0 = 1;
        var4 = var2[var0];
        var0 = var3[var0];
        var0 = var4 * var0;
        var1 = var1 + var0;
        var0 = 2;
        var4 = var2[var0];
        var0 = var3[var0];
        var0 = var4 * var0;
        var1 = var1 + var0;
        var0 = 3;
        var2 = var2[var0];
        var0 = var3[var0];
        var0 = var2 * var0;
        var0 = var1 + var0;
        return var0;
    };
    var2.dot = var11;
    var11 = function(arg0, arg1) { // Original name: equals, environment: var1
        _fun86763: for (var _fun86763_ip = 0;;) switch (_fun86763_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var3 = 0;
                var11 = var4[var3];
                var7 = 1;
                var14 = var4[var7];
                var2 = 2;
                var12 = var4[var2];
                var0 = 3;
                var10 = var4[var0];
                var16 = var1[var3];
                var15 = var1[var7];
                var13 = var1[var2];
                var9 = var1[var0];
                var1 = global;
                var3 = var1.Math;
                var2 = var3.abs;
                var0 = var11 - var16;
                var2 = var2.bind(var3)(var0);
                var0 = _closure1_slot0;
                var4 = var0.EPSILON;
                var8 = var1.Math;
                var6 = var8.max;
                var5 = var1.Math;
                var0 = var5.abs;
                var5 = var0.bind(var5)(var11);
                var11 = var1.Math;
                var0 = var11.abs;
                var0 = var0.bind(var11)(var16);
                var0 = var6.bind(var8)(var7, var5, var0);
                var0 = var4 * var0;
                var0 = var2 <= var0;
                if (!var0) {
                    _fun86763_ip = 239;
                    continue _fun86763
                }
            case 148:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var14 - var15;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var14);
                var14 = var1.Math;
                var2 = var14.abs;
                var2 = var2.bind(var14)(var15);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 239:
                if (!var0) {
                    _fun86763_ip = 333;
                    continue _fun86763
                }
            case 242:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var12 - var13;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var12);
                var12 = var1.Math;
                var2 = var12.abs;
                var2 = var2.bind(var12)(var13);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 333:
                if (!var0) {
                    _fun86763_ip = 427;
                    continue _fun86763
                }
            case 336:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var10 - var9;
                var2 = var4.bind(var5)(var2);
                var3 = _closure1_slot0;
                var3 = var3.EPSILON;
                var6 = var1.Math;
                var5 = var6.max;
                var8 = var1.Math;
                var4 = var8.abs;
                var4 = var4.bind(var8)(var10);
                var8 = var1.Math;
                var1 = var8.abs;
                var1 = var1.bind(var8)(var9);
                var1 = var5.bind(var6)(var7, var4, var1);
                var1 = var3 * var1;
                var0 = var2 <= var1;
            case 427:
                return var0;
        }
    };
    var2.equals = var11;
    var11 = function(arg0, arg1) { // Original name: exactEquals, environment: var1
        _fun86764: for (var _fun86764_ip = 0;;) switch (_fun86764_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = 0;
                var1 = var2[var0];
                var0 = var3[var0];
                var0 = var1 === var0;
                if (!var0) {
                    _fun86764_ip = 38;
                    continue _fun86764
                }
            case 23:
                var1 = 1;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 38:
                if (!var0) {
                    _fun86764_ip = 56;
                    continue _fun86764
                }
            case 41:
                var1 = 2;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 56:
                if (!var0) {
                    _fun86764_ip = 74;
                    continue _fun86764
                }
            case 59:
                var1 = 3;
                var2 = var2[var1];
                var1 = var3[var1];
                var0 = var2 === var1;
            case 74:
                return var0;
        }
    };
    var2.exactEquals = var11;
    var11 = function(arg0, arg1) { // Original name: floor, environment: var1
        var0 = arg0;
        var1 = arg1;
        var2 = global;
        var6 = var2.Math;
        var5 = var6.floor;
        var4 = 0;
        var3 = var1[var4];
        var3 = var5.bind(var6)(var3);
        var0[var4] = var3;
        var6 = var2.Math;
        var5 = var6.floor;
        var4 = 1;
        var3 = var1[var4];
        var3 = var5.bind(var6)(var3);
        var0[var4] = var3;
        var6 = var2.Math;
        var5 = var6.floor;
        var4 = 2;
        var3 = var1[var4];
        var3 = var5.bind(var6)(var3);
        var0[var4] = var3;
        var4 = var2.Math;
        var3 = var4.floor;
        var2 = 3;
        var1 = var1[var2];
        var1 = var3.bind(var4)(var1);
        var0[var2] = var1;
        return var0;
    };
    var2.floor = var11;
    var2.forEach = var0;
    var11 = function(arg0, arg1, arg2, arg3) { // Original name: fromValues, environment: var1
        var0 = _closure1_slot0;
        var2 = var0.ARRAY_TYPE;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 4;
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        var2 = arg0;
        var1 = 0;
        var0[var1] = var2;
        var2 = arg1;
        var1 = 1;
        var0[var1] = var2;
        var2 = arg2;
        var1 = 2;
        var0[var1] = var2;
        var2 = arg3;
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.fromValues = var11;
    var11 = function(arg0, arg1) { // Original name: inverse, environment: var1
        var0 = arg0;
        var1 = arg1;
        var4 = 0;
        var2 = var1[var4];
        var3 = 1;
        var2 = var3 / var2;
        var0[var4] = var2;
        var2 = var1[var3];
        var2 = var3 / var2;
        var0[var3] = var2;
        var4 = 2;
        var2 = var1[var4];
        var2 = var3 / var2;
        var0[var4] = var2;
        var2 = 3;
        var1 = var1[var2];
        var1 = var3 / var1;
        var0[var2] = var1;
        return var0;
    };
    var2.inverse = var11;
    var2.len = var0;
    var2.length = var5;
    var11 = function(arg0, arg1, arg2, arg3) { // Original name: lerp, environment: var1
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var4 = arg3;
        var10 = 0;
        var11 = var3[var10];
        var8 = 1;
        var9 = var3[var8];
        var6 = 2;
        var7 = var3[var6];
        var2 = 3;
        var3 = var3[var2];
        var5 = var1[var10];
        var5 = var5 - var11;
        var5 = var4 * var5;
        var5 = var11 + var5;
        var0[var10] = var5;
        var5 = var1[var8];
        var5 = var5 - var9;
        var5 = var4 * var5;
        var5 = var9 + var5;
        var0[var8] = var5;
        var5 = var1[var6];
        var5 = var5 - var7;
        var5 = var4 * var5;
        var5 = var7 + var5;
        var0[var6] = var5;
        var1 = var1[var2];
        var1 = var1 - var3;
        var1 = var4 * var1;
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.lerp = var11;
    var11 = function(arg0, arg1, arg2) { // Original name: max, environment: var1
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var2 = global;
        var8 = var2.Math;
        var7 = var8.max;
        var5 = 0;
        var6 = var3[var5];
        var4 = var1[var5];
        var4 = var7.bind(var8)(var6, var4);
        var0[var5] = var4;
        var8 = var2.Math;
        var7 = var8.max;
        var5 = 1;
        var6 = var3[var5];
        var4 = var1[var5];
        var4 = var7.bind(var8)(var6, var4);
        var0[var5] = var4;
        var8 = var2.Math;
        var7 = var8.max;
        var5 = 2;
        var6 = var3[var5];
        var4 = var1[var5];
        var4 = var7.bind(var8)(var6, var4);
        var0[var5] = var4;
        var5 = var2.Math;
        var4 = var5.max;
        var2 = 3;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var4.bind(var5)(var3, var1);
        var0[var2] = var1;
        return var0;
    };
    var2.max = var11;
    var11 = function(arg0, arg1, arg2) { // Original name: min, environment: var1
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var2 = global;
        var8 = var2.Math;
        var7 = var8.min;
        var5 = 0;
        var6 = var3[var5];
        var4 = var1[var5];
        var4 = var7.bind(var8)(var6, var4);
        var0[var5] = var4;
        var8 = var2.Math;
        var7 = var8.min;
        var5 = 1;
        var6 = var3[var5];
        var4 = var1[var5];
        var4 = var7.bind(var8)(var6, var4);
        var0[var5] = var4;
        var8 = var2.Math;
        var7 = var8.min;
        var5 = 2;
        var6 = var3[var5];
        var4 = var1[var5];
        var4 = var7.bind(var8)(var6, var4);
        var0[var5] = var4;
        var5 = var2.Math;
        var4 = var5.min;
        var2 = 3;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var4.bind(var5)(var3, var1);
        var0[var2] = var1;
        return var0;
    };
    var2.min = var11;
    var2.mul = var0;
    var2.multiply = var9;
    var11 = function(arg0, arg1) { // Original name: negate, environment: var1
        var0 = arg0;
        var1 = arg1;
        var3 = 0;
        var2 = var1[var3];
        var2 = -var2;
        var0[var3] = var2;
        var3 = 1;
        var2 = var1[var3];
        var2 = -var2;
        var0[var3] = var2;
        var3 = 2;
        var2 = var1[var3];
        var2 = -var2;
        var0[var3] = var2;
        var2 = 3;
        var1 = var1[var2];
        var1 = -var1;
        var0[var2] = var1;
        return var0;
    };
    var2.negate = var11;
    var11 = function(arg0, arg1) { // Original name: normalize, environment: var1
        _fun86772: for (var _fun86772_ip = 0;;) switch (_fun86772_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var9 = 0;
                var8 = var1[var9];
                var7 = 1;
                var6 = var1[var7];
                var5 = 2;
                var4 = var1[var5];
                var2 = 3;
                var3 = var1[var2];
                var10 = var8 * var8;
                var1 = var6 * var6;
                var10 = var10 + var1;
                var1 = var4 * var4;
                var10 = var10 + var1;
                var1 = var3 * var3;
                var12 = var10 + var1;
                var1 = var12;
                if (!(var1 > var9)) {
                    _fun86772_ip = 91;
                    continue _fun86772
                }
            case 68:
                var10 = global;
                var11 = var10.Math;
                var10 = var11.sqrt;
                var10 = var10.bind(var11)(var12);
                var1 = var7 / var10;
            case 91:
                var8 = var8 * var1;
                var0[var9] = var8;
                var6 = var6 * var1;
                var0[var7] = var6;
                var4 = var4 * var1;
                var0[var5] = var4;
                var1 = var3 * var1;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.normalize = var11;
    var11 = function(arg0, arg1) { // Original name: random, environment: var1
        _fun86773: for (var _fun86773_ip = 0;;) switch (_fun86773_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var7 = 1;
                var2 = undefined;
                var3 = var7;
                if (!(var2 !== var1)) {
                    _fun86773_ip = 21;
                    continue _fun86773
                }
            case 18:
                var3 = var1;
            case 21:
                var4 = _closure1_slot0;
                var2 = var4.RANDOM;
                var12 = var2.bind(var4)();
                var5 = 2;
                var2 = var5 * var12;
                var8 = var2 - var7;
                var4 = _closure1_slot0;
                var2 = var4.RANDOM;
                var2 = var2.bind(var4)();
                var9 = 4;
                var4 = var9 * var2;
                var2 = global;
                var11 = var2.Math;
                var10 = var11.sqrt;
                var6 = -var12;
                var6 = var12 * var6;
                var6 = var6 + var12;
                var6 = var10.bind(var11)(var6);
                var4 = var4 - var5;
                var6 = var4 * var6;
                var10 = _closure1_slot0;
                var4 = var10.RANDOM;
                var12 = var4.bind(var10)();
                var4 = var5 * var12;
                var4 = var4 - var7;
                var10 = _closure1_slot0;
                var1 = var10.RANDOM;
                var1 = var1.bind(var10)();
                var1 = var9 * var1;
                var11 = var2.Math;
                var10 = var11.sqrt;
                var9 = -var12;
                var9 = var12 * var9;
                var9 = var9 + var12;
                var9 = var10.bind(var11)(var9);
                var1 = var1 - var5;
                var1 = var1 * var9;
                var10 = var2.Math;
                var9 = var10.sqrt;
                var11 = var8 * var8;
                var2 = var6 * var6;
                var2 = var11 + var2;
                var11 = var7 - var2;
                var12 = var4 * var4;
                var2 = var1 * var1;
                var2 = var12 + var2;
                var2 = var11 / var2;
                var2 = var9.bind(var10)(var2);
                var9 = var3 * var8;
                var8 = 0;
                var0[var8] = var9;
                var6 = var3 * var6;
                var0[var7] = var6;
                var4 = var3 * var4;
                var4 = var4 * var2;
                var0[var5] = var4;
                var1 = var3 * var1;
                var2 = var1 * var2;
                var1 = 3;
                var0[var1] = var2;
                return var0;
        }
    };
    var2.random = var11;
    var11 = function(arg0, arg1) { // Original name: round, environment: var1
        var0 = arg0;
        var1 = arg1;
        var6 = _closure1_slot0;
        var5 = var6.round;
        var4 = 0;
        var3 = var1[var4];
        var3 = var5.bind(var6)(var3);
        var0[var4] = var3;
        var6 = _closure1_slot0;
        var5 = var6.round;
        var4 = 1;
        var3 = var1[var4];
        var3 = var5.bind(var6)(var3);
        var0[var4] = var3;
        var6 = _closure1_slot0;
        var5 = var6.round;
        var4 = 2;
        var3 = var1[var4];
        var3 = var5.bind(var6)(var3);
        var0[var4] = var3;
        var4 = _closure1_slot0;
        var3 = var4.round;
        var2 = 3;
        var1 = var1[var2];
        var1 = var3.bind(var4)(var1);
        var0[var2] = var1;
        return var0;
    };
    var2.round = var11;
    var11 = function(arg0, arg1, arg2) { // Original name: scale, environment: var1
        var0 = arg0;
        var1 = arg1;
        var3 = arg2;
        var4 = 0;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 1;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 2;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var2 = 3;
        var1 = var1[var2];
        var1 = var1 * var3;
        var0[var2] = var1;
        return var0;
    };
    var2.scale = var11;
    var11 = function(arg0, arg1, arg2, arg3) { // Original name: scaleAndAdd, environment: var1
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var4 = arg3;
        var5 = 0;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 1;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 2;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var2 = 3;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var1 * var4;
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.scaleAndAdd = var11;
    var11 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: set, environment: var1
        var0 = arg0;
        var2 = arg1;
        var1 = 0;
        var0[var1] = var2;
        var2 = arg2;
        var1 = 1;
        var0[var1] = var2;
        var2 = arg3;
        var1 = 2;
        var0[var1] = var2;
        var2 = arg4;
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.set = var11;
    var2.sqrDist = var0;
    var2.sqrLen = var0;
    var2.squaredDistance = var6;
    var2.squaredLength = var4;
    var11 = function(arg0) { // Original name: str, environment: var1
        var3 = arg0;
        var0 = 0;
        var1 = var3[var0];
        var0 = 'vec4(';
        var0 = var0 + var1;
        var1 = 1;
        var1 = var3[var1];
        var2 = ', ';
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 2;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 3;
        var1 = var3[var1];
        var0 = var0 + var2;
        var1 = var0 + var1;
        var0 = ')';
        var0 = var1 + var0;
        return var0;
    };
    var2.str = var11;
    var2.sub = var0;
    var2.subtract = var10;
    var11 = function(arg0, arg1, arg2) { // Original name: transformMat4, environment: var1
        var0 = arg0;
        var1 = arg1;
        var5 = arg2;
        var10 = 0;
        var3 = var1[var10];
        var9 = 1;
        var7 = var1[var9];
        var8 = 2;
        var6 = var1[var8];
        var2 = 3;
        var4 = var1[var2];
        var1 = var5[var10];
        var11 = var1 * var3;
        var1 = 4;
        var1 = var5[var1];
        var1 = var1 * var7;
        var11 = var11 + var1;
        var1 = 8;
        var1 = var5[var1];
        var1 = var1 * var6;
        var11 = var11 + var1;
        var1 = 12;
        var1 = var5[var1];
        var1 = var1 * var4;
        var1 = var11 + var1;
        var0[var10] = var1;
        var1 = var5[var9];
        var10 = var1 * var3;
        var1 = 5;
        var1 = var5[var1];
        var1 = var1 * var7;
        var10 = var10 + var1;
        var1 = 9;
        var1 = var5[var1];
        var1 = var1 * var6;
        var10 = var10 + var1;
        var1 = 13;
        var1 = var5[var1];
        var1 = var1 * var4;
        var1 = var10 + var1;
        var0[var9] = var1;
        var1 = var5[var8];
        var9 = var1 * var3;
        var1 = 6;
        var1 = var5[var1];
        var1 = var1 * var7;
        var9 = var9 + var1;
        var1 = 10;
        var1 = var5[var1];
        var1 = var1 * var6;
        var9 = var9 + var1;
        var1 = 14;
        var1 = var5[var1];
        var1 = var1 * var4;
        var1 = var9 + var1;
        var0[var8] = var1;
        var1 = var5[var2];
        var3 = var1 * var3;
        var1 = 7;
        var1 = var5[var1];
        var1 = var1 * var7;
        var3 = var3 + var1;
        var1 = 11;
        var1 = var5[var1];
        var1 = var1 * var6;
        var3 = var3 + var1;
        var1 = 15;
        var1 = var5[var1];
        var1 = var1 * var4;
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.transformMat4 = var11;
    var11 = function(arg0, arg1, arg2) { // Original name: transformQuat, environment: var1
        var0 = arg0;
        var1 = arg1;
        var3 = arg2;
        var15 = 0;
        var8 = var3[var15];
        var12 = 1;
        var6 = var3[var12];
        var4 = 2;
        var11 = var3[var4];
        var2 = 3;
        var10 = var3[var2];
        var16 = var1[var15];
        var14 = var1[var12];
        var9 = var1[var4];
        var5 = var6 * var9;
        var3 = var11 * var14;
        var3 = var5 - var3;
        var7 = var11 * var16;
        var5 = var8 * var9;
        var5 = var7 - var5;
        var13 = var8 * var14;
        var7 = var6 * var16;
        var7 = var13 - var7;
        var3 = var3 + var3;
        var5 = var5 + var5;
        var7 = var7 + var7;
        var13 = var10 * var3;
        var16 = var16 + var13;
        var13 = var6 * var7;
        var16 = var16 + var13;
        var13 = var11 * var5;
        var13 = var16 - var13;
        var0[var15] = var13;
        var13 = var10 * var5;
        var13 = var14 + var13;
        var11 = var11 * var3;
        var13 = var13 + var11;
        var11 = var8 * var7;
        var11 = var13 - var11;
        var0[var12] = var11;
        var7 = var10 * var7;
        var7 = var9 + var7;
        var5 = var8 * var5;
        var5 = var7 + var5;
        var3 = var6 * var3;
        var3 = var5 - var3;
        var0[var4] = var3;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.transformQuat = var11;
    var11 = function(arg0) { // Original name: zero, environment: var1
        var0 = arg0;
        var2 = 0;
        var0[var2] = var2;
        var1 = 1;
        var0[var1] = var2;
        var1 = 2;
        var0[var1] = var2;
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.zero = var11;
    var12 = arg6;
    var11 = 0;
    var12 = var12[var11];
    var11 = arg1;
    var12 = var11.bind(var0)(var12);
    var11 = function(arg0, arg1) { // Original name: _interopRequireWildcard, environment: var1
        _fun86782: for (var _fun86782_ip = 0;;) switch (_fun86782_ip) {
            case 0:
                var3 = arg0;
                var13 = global;
                var0 = var13.WeakMap;
                var12 = undefined;
                var4 = 'function';
                var0 = typeof var0;
                var2 = undefined;
                if (!(var4 === var0)) {
                    _fun86782_ip = 71;
                    continue _fun86782
                }
            case 26:
                var0 = var13.WeakMap;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var22 = var1;
                var0 = new var22[var0](var21);
                var2 = var0 instanceof Object ? var0 : var1;
                var5 = var13.WeakMap;
                var1 = var5.prototype;
                var22 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var1 = new var22[var5](var21);
            case 71:
                if (!var3) {
                    _fun86782_ip = 89;
                    continue _fun86782
                }
            case 74:
                var1 = var3.__esModule;
                var0 = var3;
                if (var1) {
                    _fun86782_ip = 342;
                    continue _fun86782
                }
            case 89:
                var1 = null;
                var11 = Object.create(var1);
                var11.default = var3;
                var0 = var11;
                if (!(var1 !== var3)) {
                    _fun86782_ip = 342;
                    continue _fun86782
                }
            case 108:
                var1 = _closure1_slot2;
                var5 = var1.bind(var12)(var3);
                var1 = 'object';
                if (!(var1 != var5)) {
                    _fun86782_ip = 141;
                    continue _fun86782
                }
            case 128:
                var1 = typeof var3;
                var0 = var11;
                if (!(var4 === var1)) {
                    _fun86782_ip = 342;
                    continue _fun86782
                }
            case 141:
                if (!var2) {
                    _fun86782_ip = 171;
                    continue _fun86782
                }
            case 144:
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun86782_ip = 332;
                    continue _fun86782
                }
            case 160:
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var11);
            case 171:
                var9 = var3;
                var5 = 'default';
                var4 = var2;
                var1 = undefined;
                var0 = var11;
                for (var6 in var9)
                    case 197: {
                        var0 = var11;
                        case 212: var16 = var6;
                        var14 = var5 !== var16;
                        if (!var14) {
                            _fun86782_ip = 241;
                            continue _fun86782
                        }
                        case 222: var15 = {};
                        var17 = var15.hasOwnProperty;
                        var15 = var17.call;
                        var14 = var15.bind(var17)(var3, var16);
                        case 241: if (!var14) {
                            _fun86782_ip = 197;
                            continue _fun86782
                        }
                        case 244: var14 = var13.Object;
                        var15 = var14.defineProperty;
                        var14 = var15;
                        if (!var14) {
                            _fun86782_ip = 279;
                            continue _fun86782
                        }
                        case 261: var18 = var13.Object;
                        var17 = var18.getOwnPropertyDescriptor;
                        var14 = var17.bind(var18)(var3, var16);
                        case 279: if (!var14) {
                            _fun86782_ip = 298;
                            continue _fun86782
                        }
                        case 282: var17 = var14.get;
                        if (var17) {
                            _fun86782_ip = 314;
                            continue _fun86782
                        }
                        case 290: var17 = var14.set;
                        if (var17) {
                            _fun86782_ip = 314;
                            continue _fun86782
                        }
                        case 298: var17 = var3[var16];
                        var11[var16] = var17;
                        var4 = var15;
                        var1 = var14;
                        _fun86782_ip = 197;
                        continue _fun86782;
                        case 314: var16 = var15.bind(var12)(var11, var16, var14);
                        var4 = var15;
                        var1 = var14;
                        _fun86782_ip = 197;
                        continue _fun86782;
                        case 332: var1 = var2.get;
                        var0 = var1.bind(var2)(var3);
                    }
            case 342:
                return var0;
        }
    };
    var11 = var11.bind(var0)(var12);
    var _closure1_slot0 = var11;
    var2.sub = var10;
    var2.mul = var9;
    var2.div = var8;
    var2.dist = var7;
    var2.sqrDist = var6;
    var2.len = var5;
    var2.sqrLen = var4;
    var3 = var3.bind(var0)();
    var _closure1_slot1 = var3;
    var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
        _fun86783: for (var _fun86783_ip = 0;;) switch (_fun86783_ip) {
            case 0:
                var0 = arg0;
                var11 = arg1;
                var10 = arg2;
                var1 = arg3;
                var9 = arg4;
                var8 = arg5;
                if (var11) {
                    _fun86783_ip = 24;
                    continue _fun86783
                }
            case 21:
                var11 = 4;
            case 24:
                if (var10) {
                    _fun86783_ip = 29;
                    continue _fun86783
                }
            case 27:
                var10 = 0;
            case 29:
                if (var1) {
                    _fun86783_ip = 39;
                    continue _fun86783
                }
            case 32:
                var7 = var0.length;
                _fun86783_ip = 71;
                continue _fun86783;
            case 39:
                var2 = global;
                var4 = var2.Math;
                var3 = var4.min;
                var1 = var1 * var11;
                var2 = var1 + var10;
                var1 = var0.length;
                var7 = var3.bind(var4)(var2, var1);
            case 71:
                var5 = 0;
                var4 = 1;
                var3 = 2;
                var2 = 3;
                var1 = undefined;
                if (!(var10 < var7)) {
                    _fun86783_ip = 198;
                    continue _fun86783
                }
            case 91:
                var12 = _closure1_slot1;
                var13 = var0[var10];
                var12[var5] = var13;
                var13 = var10 + var4;
                var13 = var0[var13];
                var12[var4] = var13;
                var13 = var10 + var3;
                var13 = var0[var13];
                var12[var3] = var13;
                var13 = var10 + var2;
                var13 = var0[var13];
                var12[var2] = var13;
                var13 = var9.bind(var1)(var12, var12, var8);
                var13 = var12[var5];
                var0[var10] = var13;
                var14 = var10 + var4;
                var13 = var12[var4];
                var0[var14] = var13;
                var14 = var10 + var3;
                var13 = var12[var3];
                var0[var14] = var13;
                var13 = var10 + var2;
                var12 = var12[var2];
                var0[var13] = var12;
                var10 = var10 + var11;
                if (var10 < var7) {
                    _fun86783_ip = 91;
                    continue _fun86783
                }
            case 198:
                return var0;
        }
    };
    var2.forEach = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11157]);