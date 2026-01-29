// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0) { // Original name: _typeof, environment: var5
        _fun86524: for (var _fun86524_ip = 0;;) switch (_fun86524_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86524_ip = 42;
                    continue _fun86524
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun86524_ip = 51;
                    continue _fun86524
                }
            case 42:
                var2 = function(arg0) { // Environment: var0
                    _fun86526: for (var _fun86526_ip = 0;;) switch (_fun86526_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun86526_ip = 58;
                                continue _fun86526
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun86526_ip = 58;
                                continue _fun86526
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun86526_ip = 58;
                                continue _fun86526
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun86526_ip = 61;
                                continue _fun86526
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun86524_ip = 58;
                continue _fun86524;
            case 51:
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 58:
                _closure1_slot1 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var3 = function(arg0, arg1, arg2) { // Original name: multiply, environment: var5
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var13 = 0;
        var8 = var3[var13];
        var10 = 1;
        var5 = var3[var10];
        var7 = 2;
        var6 = var3[var7];
        var2 = 3;
        var4 = var3[var2];
        var11 = var1[var13];
        var9 = var1[var10];
        var3 = var1[var7];
        var1 = var1[var2];
        var14 = var8 * var11;
        var12 = var6 * var9;
        var12 = var14 + var12;
        var0[var13] = var12;
        var11 = var5 * var11;
        var9 = var4 * var9;
        var9 = var11 + var9;
        var0[var10] = var9;
        var8 = var8 * var3;
        var6 = var6 * var1;
        var6 = var8 + var6;
        var0[var7] = var6;
        var3 = var5 * var3;
        var1 = var4 * var1;
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var1 = function(arg0, arg1, arg2) { // Original name: subtract, environment: var5
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
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: LDU, environment: var5
        var2 = arg0;
        var1 = arg2;
        var4 = arg3;
        var5 = 2;
        var6 = var4[var5];
        var3 = 0;
        var0 = var4[var3];
        var0 = var6 / var0;
        var2[var5] = var0;
        var0 = var4[var3];
        var1[var3] = var0;
        var0 = 1;
        var3 = var4[var0];
        var1[var0] = var3;
        var3 = 3;
        var4 = var4[var3];
        var5 = var2[var5];
        var0 = var1[var0];
        var0 = var5 * var0;
        var0 = var4 - var0;
        var1[var3] = var0;
        var0 = new Array(3);
        var0[0] = var2;
        var2 = arg1;
        var0[1] = var2;
        var0[2] = var1;
        return var0;
    };
    var2.LDU = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: add, environment: var5
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
    var0 = function(arg0, arg1) { // Original name: adjoint, environment: var5
        var0 = arg0;
        var3 = arg1;
        var5 = 0;
        var2 = var3[var5];
        var1 = 3;
        var4 = var3[var1];
        var0[var5] = var4;
        var5 = 1;
        var4 = var3[var5];
        var4 = -var4;
        var0[var5] = var4;
        var4 = 2;
        var3 = var3[var4];
        var3 = -var3;
        var0[var4] = var3;
        var0[var1] = var2;
        return var0;
    };
    var2.adjoint = var0;
    var0 = function(arg0) { // Original name: clone, environment: var5
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
    var0 = function(arg0, arg1) { // Original name: copy, environment: var5
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
    var0 = function() { // Original name: create, environment: var5
        _fun86534: for (var _fun86534_ip = 0;;) switch (_fun86534_ip) {
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
                    _fun86534_ip = 74;
                    continue _fun86534
                }
            case 58:
                var2 = 0;
                var1 = 1;
                var0[var1] = var2;
                var1 = 2;
                var0[var1] = var2;
            case 74:
                var2 = 1;
                var1 = 0;
                var0[var1] = var2;
                var1 = 3;
                var0[var1] = var2;
                return var0;
        }
    };
    var2.create = var0;
    var0 = function(arg0) { // Original name: determinant, environment: var5
        var3 = arg0;
        var0 = 0;
        var1 = var3[var0];
        var0 = 3;
        var0 = var3[var0];
        var1 = var1 * var0;
        var0 = 2;
        var2 = var3[var0];
        var0 = 1;
        var0 = var3[var0];
        var0 = var2 * var0;
        var0 = var1 - var0;
        return var0;
    };
    var2.determinant = var0;
    var0 = function(arg0, arg1) { // Original name: equals, environment: var5
        _fun86536: for (var _fun86536_ip = 0;;) switch (_fun86536_ip) {
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
                    _fun86536_ip = 239;
                    continue _fun86536
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
                    _fun86536_ip = 333;
                    continue _fun86536
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
                    _fun86536_ip = 427;
                    continue _fun86536
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
    var2.equals = var0;
    var0 = function(arg0, arg1) { // Original name: exactEquals, environment: var5
        _fun86537: for (var _fun86537_ip = 0;;) switch (_fun86537_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = 0;
                var1 = var2[var0];
                var0 = var3[var0];
                var0 = var1 === var0;
                if (!var0) {
                    _fun86537_ip = 38;
                    continue _fun86537
                }
            case 23:
                var1 = 1;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 38:
                if (!var0) {
                    _fun86537_ip = 56;
                    continue _fun86537
                }
            case 41:
                var1 = 2;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 56:
                if (!var0) {
                    _fun86537_ip = 74;
                    continue _fun86537
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
    var2.exactEquals = var0;
    var0 = function(arg0) { // Original name: frob, environment: var5
        var5 = arg0;
        var0 = global;
        var2 = var0.Math;
        var1 = var2.sqrt;
        var0 = 0;
        var3 = var5[var0];
        var0 = var5[var0];
        var3 = var3 * var0;
        var0 = 1;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 2;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 3;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var0 = var3 + var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.frob = var0;
    var0 = function(arg0, arg1) { // Original name: fromRotation, environment: var5
        var0 = arg0;
        var4 = arg1;
        var2 = global;
        var3 = var2.Math;
        var1 = var3.sin;
        var1 = var1.bind(var3)(var4);
        var3 = var2.Math;
        var2 = var3.cos;
        var2 = var2.bind(var3)(var4);
        var3 = 0;
        var0[var3] = var2;
        var3 = 1;
        var0[var3] = var1;
        var3 = -var1;
        var1 = 2;
        var0[var1] = var3;
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.fromRotation = var0;
    var0 = function(arg0, arg1) { // Original name: fromScaling, environment: var5
        var0 = arg0;
        var2 = arg1;
        var4 = 0;
        var1 = var2[var4];
        var0[var4] = var1;
        var1 = 1;
        var0[var1] = var4;
        var3 = 2;
        var0[var3] = var4;
        var2 = var2[var1];
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.fromScaling = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: fromValues, environment: var5
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
    var2.fromValues = var0;
    var0 = function(arg0) { // Original name: identity, environment: var5
        var0 = arg0;
        var2 = 1;
        var3 = 0;
        var0[var3] = var2;
        var0[var2] = var3;
        var1 = 2;
        var0[var1] = var3;
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.identity = var0;
    var0 = function(arg0, arg1) { // Original name: invert, environment: var5
        _fun86543: for (var _fun86543_ip = 0;;) switch (_fun86543_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var9 = 0;
                var3 = var1[var9];
                var7 = 1;
                var6 = var1[var7];
                var5 = 2;
                var4 = var1[var5];
                var2 = 3;
                var8 = var1[var2];
                var10 = var3 * var8;
                var1 = var4 * var6;
                var1 = var10 - var1;
                if (var1) {
                    _fun86543_ip = 52;
                    continue _fun86543
                }
            case 48:
                var10 = null;
                return var10;
            case 52:
                var1 = var7 / var1;
                var8 = var8 * var1;
                var0[var9] = var8;
                var6 = -var6;
                var6 = var6 * var1;
                var0[var7] = var6;
                var4 = -var4;
                var4 = var4 * var1;
                var0[var5] = var4;
                var1 = var3 * var1;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.invert = var0;
    var0 = undefined;
    var2.mul = var0;
    var2.multiply = var3;
    var4 = function(arg0, arg1, arg2) { // Original name: multiplyScalar, environment: var5
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
    var2.multiplyScalar = var4;
    var4 = function(arg0, arg1, arg2, arg3) { // Original name: multiplyScalarAndAdd, environment: var5
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
    var2.multiplyScalarAndAdd = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: rotate, environment: var5
        var0 = arg0;
        var1 = arg1;
        var12 = arg2;
        var11 = 0;
        var9 = var1[var11];
        var10 = 1;
        var5 = var1[var10];
        var7 = 2;
        var6 = var1[var7];
        var2 = 3;
        var4 = var1[var2];
        var1 = global;
        var8 = var1.Math;
        var3 = var8.sin;
        var3 = var3.bind(var8)(var12);
        var8 = var1.Math;
        var1 = var8.cos;
        var1 = var1.bind(var8)(var12);
        var12 = var9 * var1;
        var8 = var6 * var3;
        var8 = var12 + var8;
        var0[var11] = var8;
        var11 = var5 * var1;
        var8 = var4 * var3;
        var8 = var11 + var8;
        var0[var10] = var8;
        var8 = -var3;
        var8 = var9 * var8;
        var6 = var6 * var1;
        var6 = var8 + var6;
        var0[var7] = var6;
        var3 = -var3;
        var3 = var5 * var3;
        var1 = var4 * var1;
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.rotate = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: scale, environment: var5
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var10 = 0;
        var9 = var3[var10];
        var7 = 1;
        var8 = var3[var7];
        var5 = 2;
        var4 = var3[var5];
        var2 = 3;
        var3 = var3[var2];
        var6 = var1[var10];
        var1 = var1[var7];
        var9 = var9 * var6;
        var0[var10] = var9;
        var6 = var8 * var6;
        var0[var7] = var6;
        var4 = var4 * var1;
        var0[var5] = var4;
        var1 = var3 * var1;
        var0[var2] = var1;
        return var0;
    };
    var2.scale = var4;
    var4 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: set, environment: var5
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
    var2.set = var4;
    var4 = function(arg0) { // Original name: str, environment: var5
        var3 = arg0;
        var0 = 0;
        var1 = var3[var0];
        var0 = 'mat2(';
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
    var2.str = var4;
    var2.sub = var0;
    var2.subtract = var1;
    var4 = function(arg0, arg1) { // Original name: transpose, environment: var5
        _fun86550: for (var _fun86550_ip = 0;;) switch (_fun86550_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                if (!(var0 !== var3)) {
                    _fun86550_ip = 55;
                    continue _fun86550
                }
            case 10:
                var2 = 0;
                var1 = var3[var2];
                var0[var2] = var1;
                var2 = 2;
                var4 = var3[var2];
                var1 = 1;
                var0[var1] = var4;
                var1 = var3[var1];
                var0[var2] = var1;
                var2 = 3;
                var1 = var3[var2];
                var0[var2] = var1;
                _fun86550_ip = 77;
                continue _fun86550;
            case 55:
                var4 = 1;
                var2 = var3[var4];
                var1 = 2;
                var3 = var3[var1];
                var0[var4] = var3;
                var0[var1] = var2;
            case 77:
                return var0;
        }
    };
    var2.transpose = var4;
    var6 = arg6;
    var4 = 0;
    var6 = var6[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var6);
    var4 = function(arg0, arg1) { // Original name: _interopRequireWildcard, environment: var5
        _fun86551: for (var _fun86551_ip = 0;;) switch (_fun86551_ip) {
            case 0:
                var3 = arg0;
                var13 = global;
                var0 = var13.WeakMap;
                var12 = undefined;
                var4 = 'function';
                var0 = typeof var0;
                var2 = undefined;
                if (!(var4 === var0)) {
                    _fun86551_ip = 71;
                    continue _fun86551
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
                    _fun86551_ip = 89;
                    continue _fun86551
                }
            case 74:
                var1 = var3.__esModule;
                var0 = var3;
                if (var1) {
                    _fun86551_ip = 342;
                    continue _fun86551
                }
            case 89:
                var1 = null;
                var11 = Object.create(var1);
                var11.default = var3;
                var0 = var11;
                if (!(var1 !== var3)) {
                    _fun86551_ip = 342;
                    continue _fun86551
                }
            case 108:
                var1 = _closure1_slot1;
                var5 = var1.bind(var12)(var3);
                var1 = 'object';
                if (!(var1 != var5)) {
                    _fun86551_ip = 141;
                    continue _fun86551
                }
            case 128:
                var1 = typeof var3;
                var0 = var11;
                if (!(var4 === var1)) {
                    _fun86551_ip = 342;
                    continue _fun86551
                }
            case 141:
                if (!var2) {
                    _fun86551_ip = 171;
                    continue _fun86551
                }
            case 144:
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun86551_ip = 332;
                    continue _fun86551
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
                            _fun86551_ip = 241;
                            continue _fun86551
                        }
                        case 222: var15 = {};
                        var17 = var15.hasOwnProperty;
                        var15 = var17.call;
                        var14 = var15.bind(var17)(var3, var16);
                        case 241: if (!var14) {
                            _fun86551_ip = 197;
                            continue _fun86551
                        }
                        case 244: var14 = var13.Object;
                        var15 = var14.defineProperty;
                        var14 = var15;
                        if (!var14) {
                            _fun86551_ip = 279;
                            continue _fun86551
                        }
                        case 261: var18 = var13.Object;
                        var17 = var18.getOwnPropertyDescriptor;
                        var14 = var17.bind(var18)(var3, var16);
                        case 279: if (!var14) {
                            _fun86551_ip = 298;
                            continue _fun86551
                        }
                        case 282: var17 = var14.get;
                        if (var17) {
                            _fun86551_ip = 314;
                            continue _fun86551
                        }
                        case 290: var17 = var14.set;
                        if (var17) {
                            _fun86551_ip = 314;
                            continue _fun86551
                        }
                        case 298: var17 = var3[var16];
                        var11[var16] = var17;
                        var4 = var15;
                        var1 = var14;
                        _fun86551_ip = 197;
                        continue _fun86551;
                        case 314: var16 = var15.bind(var12)(var11, var16, var14);
                        var4 = var15;
                        var1 = var14;
                        _fun86551_ip = 197;
                        continue _fun86551;
                        case 332: var1 = var2.get;
                        var0 = var1.bind(var2)(var3);
                    }
            case 342:
                return var0;
        }
    };
    var4 = var4.bind(var0)(var6);
    var _closure1_slot0 = var4;
    var2.mul = var3;
    var2.sub = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11157]);