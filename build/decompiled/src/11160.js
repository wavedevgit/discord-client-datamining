// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0) { // Original name: _typeof, environment: var5
        _fun86581: for (var _fun86581_ip = 0;;) switch (_fun86581_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86581_ip = 42;
                    continue _fun86581
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun86581_ip = 51;
                    continue _fun86581
                }
            case 42:
                var2 = function(arg0) { // Environment: var0
                    _fun86583: for (var _fun86583_ip = 0;;) switch (_fun86583_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun86583_ip = 58;
                                continue _fun86583
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun86583_ip = 58;
                                continue _fun86583
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun86583_ip = 58;
                                continue _fun86583
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun86583_ip = 61;
                                continue _fun86583
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun86581_ip = 58;
                continue _fun86581;
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
        var28 = 0;
        var15 = var3[var28];
        var27 = 1;
        var11 = var3[var27];
        var23 = 2;
        var7 = var3[var23];
        var22 = 3;
        var14 = var3[var22];
        var21 = 4;
        var10 = var3[var21];
        var17 = 5;
        var6 = var3[var17];
        var13 = 6;
        var12 = var3[var13];
        var9 = 7;
        var8 = var3[var9];
        var2 = 8;
        var4 = var3[var2];
        var25 = var1[var28];
        var24 = var1[var27];
        var20 = var1[var23];
        var19 = var1[var22];
        var18 = var1[var21];
        var16 = var1[var17];
        var5 = var1[var13];
        var3 = var1[var9];
        var1 = var1[var2];
        var29 = var25 * var15;
        var26 = var24 * var14;
        var29 = var29 + var26;
        var26 = var20 * var12;
        var26 = var29 + var26;
        var0[var28] = var26;
        var28 = var25 * var11;
        var26 = var24 * var10;
        var28 = var28 + var26;
        var26 = var20 * var8;
        var26 = var28 + var26;
        var0[var27] = var26;
        var25 = var25 * var7;
        var24 = var24 * var6;
        var24 = var25 + var24;
        var20 = var20 * var4;
        var20 = var24 + var20;
        var0[var23] = var20;
        var23 = var19 * var15;
        var20 = var18 * var14;
        var23 = var23 + var20;
        var20 = var16 * var12;
        var20 = var23 + var20;
        var0[var22] = var20;
        var22 = var19 * var11;
        var20 = var18 * var10;
        var22 = var22 + var20;
        var20 = var16 * var8;
        var20 = var22 + var20;
        var0[var21] = var20;
        var19 = var19 * var7;
        var18 = var18 * var6;
        var18 = var19 + var18;
        var16 = var16 * var4;
        var16 = var18 + var16;
        var0[var17] = var16;
        var15 = var5 * var15;
        var14 = var3 * var14;
        var14 = var15 + var14;
        var12 = var1 * var12;
        var12 = var14 + var12;
        var0[var13] = var12;
        var11 = var5 * var11;
        var10 = var3 * var10;
        var10 = var11 + var10;
        var8 = var1 * var8;
        var8 = var10 + var8;
        var0[var9] = var8;
        var5 = var5 * var7;
        var3 = var3 * var6;
        var3 = var5 + var3;
        var1 = var1 * var4;
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
        var4 = 5;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 6;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 7;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var2 = 8;
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
        var4 = 5;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 6;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 7;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var2 = 8;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.add = var0;
    var0 = function(arg0, arg1) { // Original name: adjoint, environment: var5
        var0 = arg0;
        var13 = arg1;
        var19 = 0;
        var5 = var13[var19];
        var18 = 1;
        var4 = var13[var18];
        var17 = 2;
        var12 = var13[var17];
        var16 = 3;
        var1 = var13[var16];
        var14 = 4;
        var3 = var13[var14];
        var11 = 5;
        var9 = var13[var11];
        var10 = 6;
        var8 = var13[var10];
        var7 = 7;
        var6 = var13[var7];
        var2 = 8;
        var13 = var13[var2];
        var20 = var3 * var13;
        var15 = var9 * var6;
        var15 = var20 - var15;
        var0[var19] = var15;
        var19 = var12 * var6;
        var15 = var4 * var13;
        var15 = var19 - var15;
        var0[var18] = var15;
        var18 = var4 * var9;
        var15 = var12 * var3;
        var15 = var18 - var15;
        var0[var17] = var15;
        var17 = var9 * var8;
        var15 = var1 * var13;
        var15 = var17 - var15;
        var0[var16] = var15;
        var15 = var5 * var13;
        var13 = var12 * var8;
        var13 = var15 - var13;
        var0[var14] = var13;
        var12 = var12 * var1;
        var9 = var5 * var9;
        var9 = var12 - var9;
        var0[var11] = var9;
        var11 = var1 * var6;
        var9 = var3 * var8;
        var9 = var11 - var9;
        var0[var10] = var9;
        var8 = var4 * var8;
        var6 = var5 * var6;
        var6 = var8 - var6;
        var0[var7] = var6;
        var3 = var5 * var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
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
        var4 = 9;
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
        var3 = 5;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 6;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 7;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 8;
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
        var3 = 5;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 6;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 7;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 8;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.copy = var0;
    var0 = function() { // Original name: create, environment: var5
        _fun86590: for (var _fun86590_ip = 0;;) switch (_fun86590_ip) {
            case 0:
                var0 = _closure1_slot0;
                var3 = var0.ARRAY_TYPE;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 9;
                var5 = var2;
                var0 = new var5[var3](var4, var3);
                var0 = var0 instanceof Object ? var0 : var2;
                var1 = _closure1_slot0;
                var2 = var1.ARRAY_TYPE;
                var1 = global;
                var1 = var1.Float32Array;
                if (!(var2 != var1)) {
                    _fun86590_ip = 102;
                    continue _fun86590
                }
            case 58:
                var2 = 0;
                var1 = 1;
                var0[var1] = var2;
                var1 = 2;
                var0[var1] = var2;
                var1 = 3;
                var0[var1] = var2;
                var1 = 5;
                var0[var1] = var2;
                var1 = 6;
                var0[var1] = var2;
                var1 = 7;
                var0[var1] = var2;
            case 102:
                var2 = 1;
                var1 = 0;
                var0[var1] = var2;
                var1 = 4;
                var0[var1] = var2;
                var1 = 8;
                var0[var1] = var2;
                return var0;
        }
    };
    var2.create = var0;
    var0 = function(arg0) { // Original name: determinant, environment: var5
        var8 = arg0;
        var0 = 0;
        var9 = var8[var0];
        var0 = 1;
        var7 = var8[var0];
        var0 = 2;
        var2 = var8[var0];
        var0 = 3;
        var5 = var8[var0];
        var0 = 4;
        var4 = var8[var0];
        var0 = 5;
        var1 = var8[var0];
        var0 = 6;
        var0 = var8[var0];
        var3 = 7;
        var3 = var8[var3];
        var6 = 8;
        var8 = var8[var6];
        var10 = var8 * var4;
        var6 = var1 * var3;
        var6 = var10 - var6;
        var6 = var9 * var6;
        var8 = -var8;
        var8 = var8 * var5;
        var1 = var1 * var0;
        var1 = var8 + var1;
        var1 = var7 * var1;
        var1 = var6 + var1;
        var3 = var3 * var5;
        var0 = var4 * var0;
        var0 = var3 - var0;
        var0 = var2 * var0;
        var0 = var1 + var0;
        return var0;
    };
    var2.determinant = var0;
    var0 = function(arg0, arg1) { // Original name: equals, environment: var5
        _fun86592: for (var _fun86592_ip = 0;;) switch (_fun86592_ip) {
            case 0:
                var10 = arg0;
                var1 = arg1;
                var9 = 0;
                var11 = var10[var9];
                var7 = 1;
                var24 = var10[var7];
                var8 = 2;
                var22 = var10[var8];
                var6 = 3;
                var20 = var10[var6];
                var5 = 4;
                var18 = var10[var5];
                var4 = 5;
                var16 = var10[var4];
                var3 = 6;
                var14 = var10[var3];
                var2 = 7;
                var12 = var10[var2];
                var0 = 8;
                var10 = var10[var0];
                var26 = var1[var9];
                var25 = var1[var7];
                var23 = var1[var8];
                var21 = var1[var6];
                var19 = var1[var5];
                var17 = var1[var4];
                var15 = var1[var3];
                var13 = var1[var2];
                var9 = var1[var0];
                var1 = global;
                var3 = var1.Math;
                var2 = var3.abs;
                var0 = var11 - var26;
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
                var0 = var0.bind(var11)(var26);
                var0 = var6.bind(var8)(var7, var5, var0);
                var0 = var4 * var0;
                var0 = var2 <= var0;
                if (!var0) {
                    _fun86592_ip = 294;
                    continue _fun86592
                }
            case 203:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var24 - var25;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var24);
                var24 = var1.Math;
                var2 = var24.abs;
                var2 = var2.bind(var24)(var25);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 294:
                if (!var0) {
                    _fun86592_ip = 388;
                    continue _fun86592
                }
            case 297:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var22 - var23;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var22);
                var22 = var1.Math;
                var2 = var22.abs;
                var2 = var2.bind(var22)(var23);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 388:
                if (!var0) {
                    _fun86592_ip = 482;
                    continue _fun86592
                }
            case 391:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var20 - var21;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var20);
                var20 = var1.Math;
                var2 = var20.abs;
                var2 = var2.bind(var20)(var21);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 482:
                if (!var0) {
                    _fun86592_ip = 576;
                    continue _fun86592
                }
            case 485:
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
            case 576:
                if (!var0) {
                    _fun86592_ip = 670;
                    continue _fun86592
                }
            case 579:
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
            case 670:
                if (!var0) {
                    _fun86592_ip = 764;
                    continue _fun86592
                }
            case 673:
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
            case 764:
                if (!var0) {
                    _fun86592_ip = 858;
                    continue _fun86592
                }
            case 767:
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
            case 858:
                if (!var0) {
                    _fun86592_ip = 952;
                    continue _fun86592
                }
            case 861:
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
            case 952:
                return var0;
        }
    };
    var2.equals = var0;
    var0 = function(arg0, arg1) { // Original name: exactEquals, environment: var5
        _fun86593: for (var _fun86593_ip = 0;;) switch (_fun86593_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = 0;
                var1 = var2[var0];
                var0 = var3[var0];
                var0 = var1 === var0;
                if (!var0) {
                    _fun86593_ip = 38;
                    continue _fun86593
                }
            case 23:
                var1 = 1;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 38:
                if (!var0) {
                    _fun86593_ip = 56;
                    continue _fun86593
                }
            case 41:
                var1 = 2;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 56:
                if (!var0) {
                    _fun86593_ip = 74;
                    continue _fun86593
                }
            case 59:
                var1 = 3;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 74:
                if (!var0) {
                    _fun86593_ip = 92;
                    continue _fun86593
                }
            case 77:
                var1 = 4;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 92:
                if (!var0) {
                    _fun86593_ip = 110;
                    continue _fun86593
                }
            case 95:
                var1 = 5;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 110:
                if (!var0) {
                    _fun86593_ip = 128;
                    continue _fun86593
                }
            case 113:
                var1 = 6;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 128:
                if (!var0) {
                    _fun86593_ip = 146;
                    continue _fun86593
                }
            case 131:
                var1 = 7;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 146:
                if (!var0) {
                    _fun86593_ip = 164;
                    continue _fun86593
                }
            case 149:
                var1 = 8;
                var2 = var2[var1];
                var1 = var3[var1];
                var0 = var2 === var1;
            case 164:
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
        var3 = var3 + var0;
        var0 = 4;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 5;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 6;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 7;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 8;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var0 = var3 + var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.frob = var0;
    var0 = function(arg0, arg1) { // Original name: fromMat2d, environment: var5
        var0 = arg0;
        var3 = arg1;
        var5 = 0;
        var1 = var3[var5];
        var0[var5] = var1;
        var2 = 1;
        var1 = var3[var2];
        var0[var2] = var1;
        var1 = 2;
        var0[var1] = var5;
        var4 = var3[var1];
        var1 = 3;
        var0[var1] = var4;
        var1 = var3[var1];
        var4 = 4;
        var0[var4] = var1;
        var1 = 5;
        var0[var1] = var5;
        var5 = var3[var4];
        var4 = 6;
        var0[var4] = var5;
        var3 = var3[var1];
        var1 = 7;
        var0[var1] = var3;
        var1 = 8;
        var0[var1] = var2;
        return var0;
    };
    var2.fromMat2d = var0;
    var0 = function(arg0, arg1) { // Original name: fromMat4, environment: var5
        var0 = arg0;
        var3 = arg1;
        var2 = 0;
        var1 = var3[var2];
        var0[var2] = var1;
        var2 = 1;
        var1 = var3[var2];
        var0[var2] = var1;
        var2 = 2;
        var1 = var3[var2];
        var0[var2] = var1;
        var4 = 4;
        var2 = var3[var4];
        var1 = 3;
        var0[var1] = var2;
        var2 = 5;
        var1 = var3[var2];
        var0[var4] = var1;
        var4 = 6;
        var1 = var3[var4];
        var0[var2] = var1;
        var2 = 8;
        var1 = var3[var2];
        var0[var4] = var1;
        var1 = 9;
        var4 = var3[var1];
        var1 = 7;
        var0[var1] = var4;
        var1 = 10;
        var1 = var3[var1];
        var0[var2] = var1;
        return var0;
    };
    var2.fromMat4 = var0;
    var0 = function(arg0, arg1) { // Original name: fromQuat, environment: var5
        var0 = arg0;
        var4 = arg1;
        var14 = 0;
        var1 = var4[var14];
        var3 = 1;
        var2 = var4[var3];
        var7 = 2;
        var10 = var4[var7];
        var13 = 3;
        var12 = var4[var13];
        var4 = var1 + var1;
        var6 = var2 + var2;
        var9 = var10 + var10;
        var1 = var1 * var4;
        var11 = var2 * var4;
        var2 = var2 * var6;
        var8 = var10 * var4;
        var5 = var10 * var6;
        var10 = var10 * var9;
        var4 = var12 * var4;
        var6 = var12 * var6;
        var9 = var12 * var9;
        var12 = var3 - var2;
        var12 = var12 - var10;
        var0[var14] = var12;
        var12 = var11 - var9;
        var0[var13] = var12;
        var13 = var8 + var6;
        var12 = 6;
        var0[var12] = var13;
        var9 = var11 + var9;
        var0[var3] = var9;
        var9 = var3 - var1;
        var10 = var9 - var10;
        var9 = 4;
        var0[var9] = var10;
        var10 = var5 - var4;
        var9 = 7;
        var0[var9] = var10;
        var6 = var8 - var6;
        var0[var7] = var6;
        var5 = var5 + var4;
        var4 = 5;
        var0[var4] = var5;
        var1 = var3 - var1;
        var2 = var1 - var2;
        var1 = 8;
        var0[var1] = var2;
        return var0;
    };
    var2.fromQuat = var0;
    var0 = function(arg0, arg1) { // Original name: fromRotation, environment: var5
        var0 = arg0;
        var4 = arg1;
        var2 = global;
        var3 = var2.Math;
        var1 = var3.sin;
        var1 = var1.bind(var3)(var4);
        var3 = var2.Math;
        var2 = var3.cos;
        var4 = var2.bind(var3)(var4);
        var3 = 0;
        var0[var3] = var4;
        var2 = 1;
        var0[var2] = var1;
        var5 = 2;
        var0[var5] = var3;
        var5 = -var1;
        var1 = 3;
        var0[var1] = var5;
        var1 = 4;
        var0[var1] = var4;
        var1 = 5;
        var0[var1] = var3;
        var1 = 6;
        var0[var1] = var3;
        var1 = 7;
        var0[var1] = var3;
        var1 = 8;
        var0[var1] = var2;
        return var0;
    };
    var2.fromRotation = var0;
    var0 = function(arg0, arg1) { // Original name: fromScaling, environment: var5
        var0 = arg0;
        var1 = arg1;
        var3 = 0;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 1;
        var0[var2] = var3;
        var4 = 2;
        var0[var4] = var3;
        var4 = 3;
        var0[var4] = var3;
        var4 = var1[var2];
        var1 = 4;
        var0[var1] = var4;
        var1 = 5;
        var0[var1] = var3;
        var1 = 6;
        var0[var1] = var3;
        var1 = 7;
        var0[var1] = var3;
        var1 = 8;
        var0[var1] = var2;
        return var0;
    };
    var2.fromScaling = var0;
    var0 = function(arg0, arg1) { // Original name: fromTranslation, environment: var5
        var0 = arg0;
        var1 = arg1;
        var2 = 1;
        var3 = 0;
        var0[var3] = var2;
        var0[var2] = var3;
        var4 = 2;
        var0[var4] = var3;
        var4 = 3;
        var0[var4] = var3;
        var4 = 4;
        var0[var4] = var2;
        var4 = 5;
        var0[var4] = var3;
        var4 = var1[var3];
        var3 = 6;
        var0[var3] = var4;
        var3 = var1[var2];
        var1 = 7;
        var0[var1] = var3;
        var1 = 8;
        var0[var1] = var2;
        return var0;
    };
    var2.fromTranslation = var0;
    var0 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) { // Original name: fromValues, environment: var5
        var0 = _closure1_slot0;
        var2 = var0.ARRAY_TYPE;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 9;
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
        var2 = arg6;
        var1 = 6;
        var0[var1] = var2;
        var2 = arg7;
        var1 = 7;
        var0[var1] = var2;
        var2 = arg8;
        var1 = 8;
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
        var0[var1] = var3;
        var1 = 4;
        var0[var1] = var2;
        var1 = 5;
        var0[var1] = var3;
        var1 = 6;
        var0[var1] = var3;
        var1 = 7;
        var0[var1] = var3;
        var1 = 8;
        var0[var1] = var2;
        return var0;
    };
    var2.identity = var0;
    var0 = function(arg0, arg1) { // Original name: invert, environment: var5
        _fun86603: for (var _fun86603_ip = 0;;) switch (_fun86603_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var22 = 0;
                var6 = var3[var22];
                var21 = 1;
                var5 = var3[var21];
                var20 = 2;
                var12 = var3[var20];
                var18 = 3;
                var1 = var3[var18];
                var16 = 4;
                var4 = var3[var16];
                var13 = 5;
                var14 = var3[var13];
                var11 = 6;
                var7 = var3[var11];
                var8 = 7;
                var9 = var3[var8];
                var2 = 8;
                var15 = var3[var2];
                var10 = var15 * var4;
                var3 = var14 * var9;
                var19 = var10 - var3;
                var3 = -var15;
                var10 = var3 * var1;
                var3 = var14 * var7;
                var17 = var10 + var3;
                var10 = var9 * var1;
                var3 = var4 * var7;
                var10 = var10 - var3;
                var23 = var6 * var19;
                var3 = var5 * var17;
                var23 = var23 + var3;
                var3 = var12 * var10;
                var3 = var23 + var3;
                if (var3) {
                    _fun86603_ip = 134;
                    continue _fun86603
                }
            case 130:
                var23 = null;
                return var23;
            case 134:
                var3 = var21 / var3;
                var19 = var19 * var3;
                var0[var22] = var19;
                var19 = -var15;
                var22 = var19 * var5;
                var19 = var12 * var9;
                var19 = var22 + var19;
                var19 = var19 * var3;
                var0[var21] = var19;
                var21 = var14 * var5;
                var19 = var12 * var4;
                var19 = var21 - var19;
                var19 = var19 * var3;
                var0[var20] = var19;
                var17 = var17 * var3;
                var0[var18] = var17;
                var17 = var15 * var6;
                var15 = var12 * var7;
                var15 = var17 - var15;
                var15 = var15 * var3;
                var0[var16] = var15;
                var14 = -var14;
                var14 = var14 * var6;
                var12 = var12 * var1;
                var12 = var14 + var12;
                var12 = var12 * var3;
                var0[var13] = var12;
                var10 = var10 * var3;
                var0[var11] = var10;
                var9 = -var9;
                var9 = var9 * var6;
                var7 = var5 * var7;
                var7 = var9 + var7;
                var7 = var7 * var3;
                var0[var8] = var7;
                var4 = var4 * var6;
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
        var4 = 5;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 6;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 7;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var2 = 8;
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
        var5 = 5;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 6;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 7;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var2 = 8;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var1 * var4;
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.multiplyScalarAndAdd = var4;
    var4 = function(arg0, arg1) { // Original name: normalFromMat4, environment: var5
        _fun86606: for (var _fun86606_ip = 0;;) switch (_fun86606_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var35 = 0;
                var20 = var4[var35];
                var33 = 1;
                var21 = var4[var33];
                var29 = 2;
                var24 = var4[var29];
                var27 = 3;
                var18 = var4[var27];
                var23 = 4;
                var31 = var4[var23];
                var16 = 5;
                var30 = var4[var16];
                var14 = 6;
                var32 = var4[var14];
                var10 = 7;
                var28 = var4[var10];
                var2 = 8;
                var19 = var4[var2];
                var1 = 9;
                var17 = var4[var1];
                var1 = 10;
                var25 = var4[var1];
                var1 = 11;
                var3 = var4[var1];
                var1 = 12;
                var8 = var4[var1];
                var1 = 13;
                var7 = var4[var1];
                var1 = 14;
                var12 = var4[var1];
                var1 = 15;
                var5 = var4[var1];
                var4 = var20 * var30;
                var1 = var21 * var31;
                var1 = var4 - var1;
                var6 = var20 * var32;
                var4 = var24 * var31;
                var9 = var6 - var4;
                var6 = var20 * var28;
                var4 = var18 * var31;
                var4 = var6 - var4;
                var11 = var21 * var32;
                var6 = var24 * var30;
                var13 = var11 - var6;
                var11 = var21 * var28;
                var6 = var18 * var30;
                var6 = var11 - var6;
                var15 = var24 * var28;
                var11 = var18 * var32;
                var11 = var15 - var11;
                var22 = var19 * var7;
                var15 = var17 * var8;
                var15 = var22 - var15;
                var26 = var19 * var12;
                var22 = var25 * var8;
                var22 = var26 - var22;
                var26 = var19 * var5;
                var19 = var3 * var8;
                var19 = var26 - var19;
                var34 = var17 * var12;
                var26 = var25 * var7;
                var26 = var34 - var26;
                var34 = var17 * var5;
                var17 = var3 * var7;
                var17 = var34 - var17;
                var25 = var25 * var5;
                var3 = var3 * var12;
                var25 = var25 - var3;
                var34 = var1 * var25;
                var3 = var9 * var17;
                var34 = var34 - var3;
                var3 = var4 * var26;
                var34 = var34 + var3;
                var3 = var13 * var19;
                var34 = var34 + var3;
                var3 = var6 * var22;
                var34 = var34 - var3;
                var3 = var11 * var15;
                var3 = var34 + var3;
                if (var3) {
                    _fun86606_ip = 312;
                    continue _fun86606
                }
            case 308:
                var34 = null;
                return var34;
            case 312:
                var3 = var33 / var3;
                var36 = var30 * var25;
                var34 = var32 * var17;
                var36 = var36 - var34;
                var34 = var28 * var26;
                var34 = var36 + var34;
                var34 = var34 * var3;
                var0[var35] = var34;
                var34 = var32 * var19;
                var32 = var31 * var25;
                var34 = var34 - var32;
                var32 = var28 * var22;
                var32 = var34 - var32;
                var32 = var32 * var3;
                var0[var33] = var32;
                var31 = var31 * var17;
                var30 = var30 * var19;
                var30 = var31 - var30;
                var28 = var28 * var15;
                var28 = var30 + var28;
                var28 = var28 * var3;
                var0[var29] = var28;
                var29 = var24 * var17;
                var28 = var21 * var25;
                var28 = var29 - var28;
                var26 = var18 * var26;
                var26 = var28 - var26;
                var26 = var26 * var3;
                var0[var27] = var26;
                var25 = var20 * var25;
                var24 = var24 * var19;
                var24 = var25 - var24;
                var22 = var18 * var22;
                var22 = var24 + var22;
                var22 = var22 * var3;
                var0[var23] = var22;
                var19 = var21 * var19;
                var17 = var20 * var17;
                var17 = var19 - var17;
                var15 = var18 * var15;
                var15 = var17 - var15;
                var15 = var15 * var3;
                var0[var16] = var15;
                var16 = var7 * var11;
                var15 = var12 * var6;
                var15 = var16 - var15;
                var13 = var5 * var13;
                var13 = var15 + var13;
                var13 = var13 * var3;
                var0[var14] = var13;
                var12 = var12 * var4;
                var11 = var8 * var11;
                var11 = var12 - var11;
                var9 = var5 * var9;
                var9 = var11 - var9;
                var9 = var9 * var3;
                var0[var10] = var9;
                var6 = var8 * var6;
                var4 = var7 * var4;
                var4 = var6 - var4;
                var1 = var5 * var1;
                var1 = var4 + var1;
                var1 = var1 * var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.normalFromMat4 = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: projection, environment: var5
        var0 = arg0;
        var1 = 2;
        var2 = arg1;
        var2 = var1 / var2;
        var3 = 0;
        var0[var3] = var2;
        var2 = 1;
        var0[var2] = var3;
        var0[var1] = var3;
        var1 = 3;
        var0[var1] = var3;
        var4 = -2;
        var1 = arg2;
        var4 = var4 / var1;
        var1 = 4;
        var0[var1] = var4;
        var1 = 5;
        var0[var1] = var3;
        var3 = -1;
        var1 = 6;
        var0[var1] = var3;
        var1 = 7;
        var0[var1] = var2;
        var1 = 8;
        var0[var1] = var2;
        return var0;
    };
    var2.projection = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: rotate, environment: var5
        var0 = arg0;
        var1 = arg1;
        var22 = arg2;
        var21 = 0;
        var15 = var1[var21];
        var20 = 1;
        var12 = var1[var20];
        var19 = 2;
        var10 = var1[var19];
        var16 = 3;
        var17 = var1[var16];
        var13 = 4;
        var14 = var1[var13];
        var8 = 5;
        var11 = var1[var8];
        var6 = 6;
        var5 = var1[var6];
        var4 = 7;
        var3 = var1[var4];
        var2 = 8;
        var1 = var1[var2];
        var9 = global;
        var18 = var9.Math;
        var7 = var18.sin;
        var7 = var7.bind(var18)(var22);
        var18 = var9.Math;
        var9 = var18.cos;
        var9 = var9.bind(var18)(var22);
        var22 = var9 * var15;
        var18 = var7 * var17;
        var18 = var22 + var18;
        var0[var21] = var18;
        var21 = var9 * var12;
        var18 = var7 * var14;
        var18 = var21 + var18;
        var0[var20] = var18;
        var20 = var9 * var10;
        var18 = var7 * var11;
        var18 = var20 + var18;
        var0[var19] = var18;
        var17 = var9 * var17;
        var15 = var7 * var15;
        var15 = var17 - var15;
        var0[var16] = var15;
        var14 = var9 * var14;
        var12 = var7 * var12;
        var12 = var14 - var12;
        var0[var13] = var12;
        var9 = var9 * var11;
        var7 = var7 * var10;
        var7 = var9 - var7;
        var0[var8] = var7;
        var0[var6] = var5;
        var0[var4] = var3;
        var0[var2] = var1;
        return var0;
    };
    var2.rotate = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: scale, environment: var5
        var0 = arg0;
        var1 = arg1;
        var2 = arg2;
        var6 = 0;
        var5 = var2[var6];
        var3 = 1;
        var4 = var2[var3];
        var2 = var1[var6];
        var2 = var5 * var2;
        var0[var6] = var2;
        var2 = var1[var3];
        var2 = var5 * var2;
        var0[var3] = var2;
        var3 = 2;
        var2 = var1[var3];
        var2 = var5 * var2;
        var0[var3] = var2;
        var3 = 3;
        var2 = var1[var3];
        var2 = var4 * var2;
        var0[var3] = var2;
        var3 = 4;
        var2 = var1[var3];
        var2 = var4 * var2;
        var0[var3] = var2;
        var3 = 5;
        var2 = var1[var3];
        var2 = var4 * var2;
        var0[var3] = var2;
        var3 = 6;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 7;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 8;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.scale = var4;
    var4 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) { // Original name: set, environment: var5
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
        var2 = arg7;
        var1 = 6;
        var0[var1] = var2;
        var2 = arg8;
        var1 = 7;
        var0[var1] = var2;
        var2 = arg9;
        var1 = 8;
        var0[var1] = var2;
        return var0;
    };
    var2.set = var4;
    var4 = function(arg0) { // Original name: str, environment: var5
        var3 = arg0;
        var0 = 0;
        var1 = var3[var0];
        var0 = 'mat3(';
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
        var0 = var0 + var1;
        var1 = 6;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 7;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 8;
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
        var20 = 0;
        var14 = var3[var20];
        var19 = 1;
        var10 = var3[var19];
        var18 = 2;
        var6 = var3[var18];
        var17 = 3;
        var11 = var3[var17];
        var16 = 4;
        var7 = var3[var16];
        var15 = 5;
        var5 = var3[var15];
        var12 = 6;
        var13 = var3[var12];
        var8 = 7;
        var9 = var3[var8];
        var2 = 8;
        var3 = var3[var2];
        var4 = var1[var20];
        var1 = var1[var19];
        var0[var20] = var14;
        var0[var19] = var10;
        var0[var18] = var6;
        var0[var17] = var11;
        var0[var16] = var7;
        var0[var15] = var5;
        var14 = var4 * var14;
        var11 = var1 * var11;
        var11 = var14 + var11;
        var11 = var11 + var13;
        var0[var12] = var11;
        var10 = var4 * var10;
        var7 = var1 * var7;
        var7 = var10 + var7;
        var7 = var7 + var9;
        var0[var8] = var7;
        var4 = var4 * var6;
        var1 = var1 * var5;
        var1 = var4 + var1;
        var1 = var1 + var3;
        var0[var2] = var1;
        return var0;
    };
    var2.translate = var4;
    var4 = function(arg0, arg1) { // Original name: transpose, environment: var5
        _fun86613: for (var _fun86613_ip = 0;;) switch (_fun86613_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                if (!(var0 !== var5)) {
                    _fun86613_ip = 110;
                    continue _fun86613
                }
            case 10:
                var2 = 0;
                var1 = var5[var2];
                var0[var2] = var1;
                var2 = 3;
                var3 = var5[var2];
                var1 = 1;
                var0[var1] = var3;
                var4 = 6;
                var6 = var5[var4];
                var3 = 2;
                var0[var3] = var6;
                var1 = var5[var1];
                var0[var2] = var1;
                var2 = 4;
                var1 = var5[var2];
                var0[var2] = var1;
                var2 = 7;
                var6 = var5[var2];
                var1 = 5;
                var0[var1] = var6;
                var3 = var5[var3];
                var0[var4] = var3;
                var1 = var5[var1];
                var0[var2] = var1;
                var2 = 8;
                var1 = var5[var2];
                var0[var2] = var1;
                _fun86613_ip = 176;
                continue _fun86613;
            case 110:
                var8 = 1;
                var7 = var5[var8];
                var9 = 2;
                var4 = var5[var9];
                var6 = 5;
                var2 = var5[var6];
                var1 = 3;
                var3 = var5[var1];
                var0[var8] = var3;
                var3 = 6;
                var8 = var5[var3];
                var0[var9] = var8;
                var0[var1] = var7;
                var1 = 7;
                var5 = var5[var1];
                var0[var6] = var5;
                var0[var3] = var4;
                var0[var1] = var2;
            case 176:
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
        _fun86614: for (var _fun86614_ip = 0;;) switch (_fun86614_ip) {
            case 0:
                var3 = arg0;
                var13 = global;
                var0 = var13.WeakMap;
                var12 = undefined;
                var4 = 'function';
                var0 = typeof var0;
                var2 = undefined;
                if (!(var4 === var0)) {
                    _fun86614_ip = 71;
                    continue _fun86614
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
                    _fun86614_ip = 89;
                    continue _fun86614
                }
            case 74:
                var1 = var3.__esModule;
                var0 = var3;
                if (var1) {
                    _fun86614_ip = 342;
                    continue _fun86614
                }
            case 89:
                var1 = null;
                var11 = Object.create(var1);
                var11.default = var3;
                var0 = var11;
                if (!(var1 !== var3)) {
                    _fun86614_ip = 342;
                    continue _fun86614
                }
            case 108:
                var1 = _closure1_slot1;
                var5 = var1.bind(var12)(var3);
                var1 = 'object';
                if (!(var1 != var5)) {
                    _fun86614_ip = 141;
                    continue _fun86614
                }
            case 128:
                var1 = typeof var3;
                var0 = var11;
                if (!(var4 === var1)) {
                    _fun86614_ip = 342;
                    continue _fun86614
                }
            case 141:
                if (!var2) {
                    _fun86614_ip = 171;
                    continue _fun86614
                }
            case 144:
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun86614_ip = 332;
                    continue _fun86614
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
                            _fun86614_ip = 241;
                            continue _fun86614
                        }
                        case 222: var15 = {};
                        var17 = var15.hasOwnProperty;
                        var15 = var17.call;
                        var14 = var15.bind(var17)(var3, var16);
                        case 241: if (!var14) {
                            _fun86614_ip = 197;
                            continue _fun86614
                        }
                        case 244: var14 = var13.Object;
                        var15 = var14.defineProperty;
                        var14 = var15;
                        if (!var14) {
                            _fun86614_ip = 279;
                            continue _fun86614
                        }
                        case 261: var18 = var13.Object;
                        var17 = var18.getOwnPropertyDescriptor;
                        var14 = var17.bind(var18)(var3, var16);
                        case 279: if (!var14) {
                            _fun86614_ip = 298;
                            continue _fun86614
                        }
                        case 282: var17 = var14.get;
                        if (var17) {
                            _fun86614_ip = 314;
                            continue _fun86614
                        }
                        case 290: var17 = var14.set;
                        if (var17) {
                            _fun86614_ip = 314;
                            continue _fun86614
                        }
                        case 298: var17 = var3[var16];
                        var11[var16] = var17;
                        var4 = var15;
                        var1 = var14;
                        _fun86614_ip = 197;
                        continue _fun86614;
                        case 314: var16 = var15.bind(var12)(var11, var16, var14);
                        var4 = var15;
                        var1 = var14;
                        _fun86614_ip = 197;
                        continue _fun86614;
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