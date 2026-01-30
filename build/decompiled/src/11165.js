// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0) { // Original name: _typeof, environment: var5
        _fun86599: for (var _fun86599_ip = 0;;) switch (_fun86599_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86599_ip = 42;
                    continue _fun86599
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun86599_ip = 51;
                    continue _fun86599
                }
            case 42:
                var2 = function(arg0) { // Environment: var0
                    _fun86601: for (var _fun86601_ip = 0;;) switch (_fun86601_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun86601_ip = 58;
                                continue _fun86601
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun86601_ip = 58;
                                continue _fun86601
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun86601_ip = 58;
                                continue _fun86601
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun86601_ip = 61;
                                continue _fun86601
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun86599_ip = 58;
                continue _fun86599;
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
        var19 = 0;
        var10 = var3[var19];
        var16 = 1;
        var6 = var3[var16];
        var15 = 2;
        var7 = var3[var15];
        var12 = 3;
        var5 = var3[var12];
        var8 = 4;
        var9 = var3[var8];
        var2 = 5;
        var3 = var3[var2];
        var17 = var1[var19];
        var14 = var1[var16];
        var13 = var1[var15];
        var11 = var1[var12];
        var4 = var1[var8];
        var1 = var1[var2];
        var20 = var10 * var17;
        var18 = var7 * var14;
        var18 = var20 + var18;
        var0[var19] = var18;
        var17 = var6 * var17;
        var14 = var5 * var14;
        var14 = var17 + var14;
        var0[var16] = var14;
        var16 = var10 * var13;
        var14 = var7 * var11;
        var14 = var16 + var14;
        var0[var15] = var14;
        var13 = var6 * var13;
        var11 = var5 * var11;
        var11 = var13 + var11;
        var0[var12] = var11;
        var10 = var10 * var4;
        var7 = var7 * var1;
        var7 = var10 + var7;
        var7 = var7 + var9;
        var0[var8] = var7;
        var4 = var6 * var4;
        var1 = var5 * var1;
        var1 = var4 + var1;
        var1 = var1 + var3;
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
        var4 = 3;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 4;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var2 = 5;
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
        var4 = 3;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 4;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var2 = 5;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.add = var0;
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
        var4 = 6;
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
        var3 = 3;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 4;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 5;
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
        var3 = 3;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 4;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 5;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.copy = var0;
    var0 = function() { // Original name: create, environment: var5
        _fun86607: for (var _fun86607_ip = 0;;) switch (_fun86607_ip) {
            case 0:
                var0 = _closure1_slot0;
                var3 = var0.ARRAY_TYPE;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 6;
                var5 = var2;
                var0 = new var5[var3](var4, var3);
                var0 = var0 instanceof Object ? var0 : var2;
                var1 = _closure1_slot0;
                var2 = var1.ARRAY_TYPE;
                var1 = global;
                var1 = var1.Float32Array;
                if (!(var2 != var1)) {
                    _fun86607_ip = 88;
                    continue _fun86607
                }
            case 58:
                var2 = 0;
                var1 = 1;
                var0[var1] = var2;
                var1 = 2;
                var0[var1] = var2;
                var1 = 4;
                var0[var1] = var2;
                var1 = 5;
                var0[var1] = var2;
            case 88:
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
        var0 = 1;
        var2 = var3[var0];
        var0 = 2;
        var0 = var3[var0];
        var0 = var2 * var0;
        var0 = var1 - var0;
        return var0;
    };
    var2.determinant = var0;
    var0 = function(arg0, arg1) { // Original name: equals, environment: var5
        _fun86609: for (var _fun86609_ip = 0;;) switch (_fun86609_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var5 = 0;
                var11 = var6[var5];
                var7 = 1;
                var18 = var6[var7];
                var4 = 2;
                var16 = var6[var4];
                var3 = 3;
                var14 = var6[var3];
                var2 = 4;
                var12 = var6[var2];
                var0 = 5;
                var10 = var6[var0];
                var20 = var1[var5];
                var19 = var1[var7];
                var17 = var1[var4];
                var15 = var1[var3];
                var13 = var1[var2];
                var9 = var1[var0];
                var1 = global;
                var3 = var1.Math;
                var2 = var3.abs;
                var0 = var11 - var20;
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
                var0 = var0.bind(var11)(var20);
                var0 = var6.bind(var8)(var7, var5, var0);
                var0 = var4 * var0;
                var0 = var2 <= var0;
                if (!var0) {
                    _fun86609_ip = 261;
                    continue _fun86609
                }
            case 170:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var18 - var19;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var18);
                var18 = var1.Math;
                var2 = var18.abs;
                var2 = var2.bind(var18)(var19);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 261:
                if (!var0) {
                    _fun86609_ip = 355;
                    continue _fun86609
                }
            case 264:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var16 - var17;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var16);
                var16 = var1.Math;
                var2 = var16.abs;
                var2 = var2.bind(var16)(var17);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 355:
                if (!var0) {
                    _fun86609_ip = 449;
                    continue _fun86609
                }
            case 358:
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
            case 449:
                if (!var0) {
                    _fun86609_ip = 543;
                    continue _fun86609
                }
            case 452:
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
            case 543:
                if (!var0) {
                    _fun86609_ip = 637;
                    continue _fun86609
                }
            case 546:
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
            case 637:
                return var0;
        }
    };
    var2.equals = var0;
    var0 = function(arg0, arg1) { // Original name: exactEquals, environment: var5
        _fun86610: for (var _fun86610_ip = 0;;) switch (_fun86610_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = 0;
                var1 = var2[var0];
                var0 = var3[var0];
                var0 = var1 === var0;
                if (!var0) {
                    _fun86610_ip = 38;
                    continue _fun86610
                }
            case 23:
                var1 = 1;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 38:
                if (!var0) {
                    _fun86610_ip = 56;
                    continue _fun86610
                }
            case 41:
                var1 = 2;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 56:
                if (!var0) {
                    _fun86610_ip = 74;
                    continue _fun86610
                }
            case 59:
                var1 = 3;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 74:
                if (!var0) {
                    _fun86610_ip = 92;
                    continue _fun86610
                }
            case 77:
                var1 = 4;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 92:
                if (!var0) {
                    _fun86610_ip = 110;
                    continue _fun86610
                }
            case 95:
                var1 = 5;
                var2 = var2[var1];
                var1 = var3[var1];
                var0 = var2 === var1;
            case 110:
                return var0;
        }
    };
    var2.exactEquals = var0;
    var0 = function(arg0) { // Original name: frob, environment: var5
        var6 = arg0;
        var0 = global;
        var2 = var0.Math;
        var1 = var2.sqrt;
        var0 = 0;
        var3 = var6[var0];
        var0 = var6[var0];
        var4 = var3 * var0;
        var3 = 1;
        var5 = var6[var3];
        var0 = var6[var3];
        var0 = var5 * var0;
        var4 = var4 + var0;
        var0 = 2;
        var5 = var6[var0];
        var0 = var6[var0];
        var0 = var5 * var0;
        var4 = var4 + var0;
        var0 = 3;
        var5 = var6[var0];
        var0 = var6[var0];
        var0 = var5 * var0;
        var4 = var4 + var0;
        var0 = 4;
        var5 = var6[var0];
        var0 = var6[var0];
        var0 = var5 * var0;
        var4 = var4 + var0;
        var0 = 5;
        var5 = var6[var0];
        var0 = var6[var0];
        var0 = var5 * var0;
        var0 = var4 + var0;
        var0 = var0 + var3;
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
        var3 = var2.bind(var3)(var4);
        var2 = 0;
        var0[var2] = var3;
        var4 = 1;
        var0[var4] = var1;
        var4 = -var1;
        var1 = 2;
        var0[var1] = var4;
        var1 = 3;
        var0[var1] = var3;
        var1 = 4;
        var0[var1] = var2;
        var1 = 5;
        var0[var1] = var2;
        return var0;
    };
    var2.fromRotation = var0;
    var0 = function(arg0, arg1) { // Original name: fromScaling, environment: var5
        var0 = arg0;
        var3 = arg1;
        var2 = 0;
        var1 = var3[var2];
        var0[var2] = var1;
        var1 = 1;
        var0[var1] = var2;
        var4 = 2;
        var0[var4] = var2;
        var3 = var3[var1];
        var1 = 3;
        var0[var1] = var3;
        var1 = 4;
        var0[var1] = var2;
        var1 = 5;
        var0[var1] = var2;
        return var0;
    };
    var2.fromScaling = var0;
    var0 = function(arg0, arg1) { // Original name: fromTranslation, environment: var5
        var0 = arg0;
        var2 = arg1;
        var1 = 1;
        var3 = 0;
        var0[var3] = var1;
        var0[var1] = var3;
        var4 = 2;
        var0[var4] = var3;
        var4 = 3;
        var0[var4] = var1;
        var4 = var2[var3];
        var3 = 4;
        var0[var3] = var4;
        var2 = var2[var1];
        var1 = 5;
        var0[var1] = var2;
        return var0;
    };
    var2.fromTranslation = var0;
    var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: fromValues, environment: var5
        var0 = _closure1_slot0;
        var2 = var0.ARRAY_TYPE;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 6;
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
        var2 = arg4;
        var1 = 4;
        var0[var1] = var2;
        var2 = arg5;
        var1 = 5;
        var0[var1] = var2;
        return var0;
    };
    var2.fromValues = var0;
    var0 = function(arg0) { // Original name: identity, environment: var5
        var0 = arg0;
        var3 = 1;
        var2 = 0;
        var0[var2] = var3;
        var0[var3] = var2;
        var1 = 2;
        var0[var1] = var2;
        var1 = 3;
        var0[var1] = var3;
        var1 = 4;
        var0[var1] = var2;
        var1 = 5;
        var0[var1] = var2;
        return var0;
    };
    var2.identity = var0;
    var0 = function(arg0, arg1) { // Original name: invert, environment: var5
        _fun86617: for (var _fun86617_ip = 0;;) switch (_fun86617_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var14 = 0;
                var5 = var1[var14];
                var13 = 1;
                var6 = var1[var13];
                var12 = 2;
                var9 = var1[var12];
                var11 = 3;
                var7 = var1[var11];
                var8 = 4;
                var4 = var1[var8];
                var2 = 5;
                var1 = var1[var2];
                var10 = var5 * var7;
                var3 = var6 * var9;
                var3 = var10 - var3;
                if (var3) {
                    _fun86617_ip = 66;
                    continue _fun86617
                }
            case 62:
                var10 = null;
                return var10;
            case 66:
                var3 = var13 / var3;
                var10 = var7 * var3;
                var0[var14] = var10;
                var10 = -var6;
                var10 = var10 * var3;
                var0[var13] = var10;
                var10 = -var9;
                var10 = var10 * var3;
                var0[var12] = var10;
                var10 = var5 * var3;
                var0[var11] = var10;
                var9 = var9 * var1;
                var7 = var7 * var4;
                var7 = var9 - var7;
                var7 = var7 * var3;
                var0[var8] = var7;
                var4 = var6 * var4;
                var1 = var5 * var1;
                var1 = var4 - var1;
                var1 = var1 * var3;
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
        var4 = 3;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 4;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var2 = 5;
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
        var5 = 3;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 4;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var2 = 5;
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
        var16 = arg2;
        var15 = 0;
        var13 = var1[var15];
        var14 = 1;
        var9 = var1[var14];
        var11 = 2;
        var10 = var1[var11];
        var6 = 3;
        var8 = var1[var6];
        var4 = 4;
        var3 = var1[var4];
        var2 = 5;
        var1 = var1[var2];
        var5 = global;
        var12 = var5.Math;
        var7 = var12.sin;
        var7 = var7.bind(var12)(var16);
        var12 = var5.Math;
        var5 = var12.cos;
        var5 = var5.bind(var12)(var16);
        var16 = var13 * var5;
        var12 = var10 * var7;
        var12 = var16 + var12;
        var0[var15] = var12;
        var15 = var9 * var5;
        var12 = var8 * var7;
        var12 = var15 + var12;
        var0[var14] = var12;
        var12 = -var7;
        var12 = var13 * var12;
        var10 = var10 * var5;
        var10 = var12 + var10;
        var0[var11] = var10;
        var7 = -var7;
        var7 = var9 * var7;
        var5 = var8 * var5;
        var5 = var7 + var5;
        var0[var6] = var5;
        var0[var4] = var3;
        var0[var2] = var1;
        return var0;
    };
    var2.rotate = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: scale, environment: var5
        var0 = arg0;
        var1 = arg1;
        var5 = arg2;
        var14 = 0;
        var13 = var1[var14];
        var11 = 1;
        var12 = var1[var11];
        var9 = 2;
        var8 = var1[var9];
        var6 = 3;
        var7 = var1[var6];
        var4 = 4;
        var3 = var1[var4];
        var2 = 5;
        var1 = var1[var2];
        var10 = var5[var14];
        var5 = var5[var11];
        var13 = var13 * var10;
        var0[var14] = var13;
        var10 = var12 * var10;
        var0[var11] = var10;
        var8 = var8 * var5;
        var0[var9] = var8;
        var5 = var7 * var5;
        var0[var6] = var5;
        var0[var4] = var3;
        var0[var2] = var1;
        return var0;
    };
    var2.scale = var4;
    var4 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: set, environment: var5
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
        var2 = arg5;
        var1 = 4;
        var0[var1] = var2;
        var2 = arg6;
        var1 = 5;
        var0[var1] = var2;
        return var0;
    };
    var2.set = var4;
    var4 = function(arg0) { // Original name: str, environment: var5
        var3 = arg0;
        var0 = 0;
        var1 = var3[var0];
        var0 = 'mat2d(';
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
        var0 = var0 + var1;
        var1 = 4;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 5;
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
    var4 = function(arg0, arg1, arg2) { // Original name: translate, environment: var5
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var14 = 0;
        var10 = var3[var14];
        var13 = 1;
        var6 = var3[var13];
        var12 = 2;
        var7 = var3[var12];
        var11 = 3;
        var5 = var3[var11];
        var8 = 4;
        var9 = var3[var8];
        var2 = 5;
        var3 = var3[var2];
        var4 = var1[var14];
        var1 = var1[var13];
        var0[var14] = var10;
        var0[var13] = var6;
        var0[var12] = var7;
        var0[var11] = var5;
        var10 = var10 * var4;
        var7 = var7 * var1;
        var7 = var10 + var7;
        var7 = var7 + var9;
        var0[var8] = var7;
        var4 = var6 * var4;
        var1 = var5 * var1;
        var1 = var4 + var1;
        var1 = var1 + var3;
        var0[var2] = var1;
        return var0;
    };
    var2.translate = var4;
    var6 = arg6;
    var4 = 0;
    var6 = var6[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var6);
    var4 = function(arg0, arg1) { // Original name: _interopRequireWildcard, environment: var5
        _fun86625: for (var _fun86625_ip = 0;;) switch (_fun86625_ip) {
            case 0:
                var3 = arg0;
                var13 = global;
                var0 = var13.WeakMap;
                var12 = undefined;
                var4 = 'function';
                var0 = typeof var0;
                var2 = undefined;
                if (!(var4 === var0)) {
                    _fun86625_ip = 71;
                    continue _fun86625
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
                    _fun86625_ip = 89;
                    continue _fun86625
                }
            case 74:
                var1 = var3.__esModule;
                var0 = var3;
                if (var1) {
                    _fun86625_ip = 342;
                    continue _fun86625
                }
            case 89:
                var1 = null;
                var11 = Object.create(var1);
                var11.default = var3;
                var0 = var11;
                if (!(var1 !== var3)) {
                    _fun86625_ip = 342;
                    continue _fun86625
                }
            case 108:
                var1 = _closure1_slot1;
                var5 = var1.bind(var12)(var3);
                var1 = 'object';
                if (!(var1 != var5)) {
                    _fun86625_ip = 141;
                    continue _fun86625
                }
            case 128:
                var1 = typeof var3;
                var0 = var11;
                if (!(var4 === var1)) {
                    _fun86625_ip = 342;
                    continue _fun86625
                }
            case 141:
                if (!var2) {
                    _fun86625_ip = 171;
                    continue _fun86625
                }
            case 144:
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun86625_ip = 332;
                    continue _fun86625
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
                            _fun86625_ip = 241;
                            continue _fun86625
                        }
                        case 222: var15 = {};
                        var17 = var15.hasOwnProperty;
                        var15 = var17.call;
                        var14 = var15.bind(var17)(var3, var16);
                        case 241: if (!var14) {
                            _fun86625_ip = 197;
                            continue _fun86625
                        }
                        case 244: var14 = var13.Object;
                        var15 = var14.defineProperty;
                        var14 = var15;
                        if (!var14) {
                            _fun86625_ip = 279;
                            continue _fun86625
                        }
                        case 261: var18 = var13.Object;
                        var17 = var18.getOwnPropertyDescriptor;
                        var14 = var17.bind(var18)(var3, var16);
                        case 279: if (!var14) {
                            _fun86625_ip = 298;
                            continue _fun86625
                        }
                        case 282: var17 = var14.get;
                        if (var17) {
                            _fun86625_ip = 314;
                            continue _fun86625
                        }
                        case 290: var17 = var14.set;
                        if (var17) {
                            _fun86625_ip = 314;
                            continue _fun86625
                        }
                        case 298: var17 = var3[var16];
                        var11[var16] = var17;
                        var4 = var15;
                        var1 = var14;
                        _fun86625_ip = 197;
                        continue _fun86625;
                        case 314: var16 = var15.bind(var12)(var11, var16, var14);
                        var4 = var15;
                        var1 = var14;
                        _fun86625_ip = 197;
                        continue _fun86625;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [11163]);