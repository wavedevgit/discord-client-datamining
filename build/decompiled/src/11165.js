// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var0 = function(arg0) { // Original name: _typeof, environment: var3
        _fun86785: for (var _fun86785_ip = 0;;) switch (_fun86785_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86785_ip = 42;
                    continue _fun86785
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun86785_ip = 51;
                    continue _fun86785
                }
            case 42:
                var2 = function(arg0) { // Environment: var0
                    _fun86787: for (var _fun86787_ip = 0;;) switch (_fun86787_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun86787_ip = 58;
                                continue _fun86787
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun86787_ip = 58;
                                continue _fun86787
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun86787_ip = 58;
                                continue _fun86787
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun86787_ip = 61;
                                continue _fun86787
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun86785_ip = 58;
                continue _fun86785;
            case 51:
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 58:
                _closure1_slot5 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: _interopRequireWildcard, environment: var3
        _fun86788: for (var _fun86788_ip = 0;;) switch (_fun86788_ip) {
            case 0:
                var1 = global;
                var2 = var1.WeakMap;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86788_ip = 81;
                    continue _fun86788
                }
            case 21:
                var2 = var1.WeakMap;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var3;
                var2 = new var6[var2](var5);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot0 = var2;
                var1 = var1.WeakMap;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var2;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot1 = var1;
            case 81:
                var3 = function(arg0, arg1) { // Original name: _interopRequireWildcard, environment: var0
                    _fun86789: for (var _fun86789_ip = 0;;) switch (_fun86789_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            if (var2) {
                                _fun86789_ip = 23;
                                continue _fun86789
                            }
                        case 9:
                            if (!var3) {
                                _fun86789_ip = 23;
                                continue _fun86789
                            }
                        case 12:
                            var0 = var3.__esModule;
                            if (!var0) {
                                _fun86789_ip = 23;
                                continue _fun86789
                            }
                        case 21:
                            return var3;
                        case 23:
                            var1 = null;
                            var0 = Object.create(var1);
                            var0.default = var3;
                            if (!(var1 !== var3)) {
                                _fun86789_ip = 286;
                                continue _fun86789
                            }
                        case 39:
                            var1 = _closure1_slot5;
                            var12 = undefined;
                            var4 = var1.bind(var12)(var3);
                            var1 = 'object';
                            if (!(var1 != var4)) {
                                _fun86789_ip = 75;
                                continue _fun86789
                            }
                        case 61:
                            var4 = 'function';
                            var1 = typeof var3;
                            if (!(var4 === var1)) {
                                _fun86789_ip = 286;
                                continue _fun86789
                            }
                        case 75:
                            if (var2) {
                                _fun86789_ip = 87;
                                continue _fun86789
                            }
                        case 81:
                            var2 = _closure2_slot0;
                            _fun86789_ip = 91;
                            continue _fun86789;
                        case 87:
                            var2 = _closure2_slot1;
                        case 91:
                            if (!var2) {
                                _fun86789_ip = 121;
                                continue _fun86789
                            }
                        case 94:
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            if (var1) {
                                _fun86789_ip = 274;
                                continue _fun86789
                            }
                        case 110:
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3, var0);
                        case 121:
                            var10 = var3;
                            var6 = global;
                            var5 = 'default';
                            var4 = var2;
                            var1 = undefined;
                            for (var7 in var10)
                                case 146: {
                                    case 155: var15 = var7;
                                    var13 = var5 !== var15;
                                    if (!var13) {
                                        _fun86789_ip = 184;
                                        continue _fun86789
                                    }
                                    case 165: var14 = {};
                                    var16 = var14.hasOwnProperty;
                                    var14 = var16.call;
                                    var13 = var14.bind(var16)(var3, var15);
                                    case 184: if (!var13) {
                                        _fun86789_ip = 146;
                                        continue _fun86789
                                    }
                                    case 187: var13 = var6.Object;
                                    var14 = var13.defineProperty;
                                    var13 = var14;
                                    if (!var13) {
                                        _fun86789_ip = 222;
                                        continue _fun86789
                                    }
                                    case 204: var17 = var6.Object;
                                    var16 = var17.getOwnPropertyDescriptor;
                                    var13 = var16.bind(var17)(var3, var15);
                                    case 222: if (!var13) {
                                        _fun86789_ip = 241;
                                        continue _fun86789
                                    }
                                    case 225: var16 = var13.get;
                                    if (var16) {
                                        _fun86789_ip = 257;
                                        continue _fun86789
                                    }
                                    case 233: var16 = var13.set;
                                    if (var16) {
                                        _fun86789_ip = 257;
                                        continue _fun86789
                                    }
                                    case 241: var16 = var3[var15];
                                    var0[var15] = var16;
                                    var4 = var14;
                                    var1 = var13;
                                    _fun86789_ip = 146;
                                    continue _fun86789;
                                    case 257: var15 = var14.bind(var12)(var0, var15, var13);
                                    var4 = var14;
                                    var1 = var13;
                                    _fun86789_ip = 146;
                                    continue _fun86789;
                                }
                        case 272:
                            return var0;
                        case 274:
                            var1 = var2.get;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        case 286:
                            return var0;
                    }
                };
                _closure1_slot6 = var3;
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var1 = function(arg0, arg1, arg2) { // Original name: fromRotationTranslation, environment: var3
        var0 = arg0;
        var7 = arg1;
        var1 = arg2;
        var11 = 0;
        var3 = var1[var11];
        var2 = 0.5;
        var3 = var2 * var3;
        var10 = 1;
        var4 = var1[var10];
        var5 = var2 * var4;
        var9 = 2;
        var1 = var1[var9];
        var4 = var2 * var1;
        var6 = var7[var11];
        var1 = var7[var10];
        var2 = var7[var9];
        var8 = 3;
        var7 = var7[var8];
        var0[var11] = var6;
        var0[var10] = var1;
        var0[var9] = var2;
        var0[var8] = var7;
        var10 = var3 * var7;
        var8 = var5 * var2;
        var9 = var4 * var1;
        var8 = var10 + var8;
        var9 = var8 - var9;
        var8 = 4;
        var0[var8] = var9;
        var10 = var5 * var7;
        var8 = var4 * var6;
        var9 = var3 * var2;
        var8 = var10 + var8;
        var9 = var8 - var9;
        var8 = 5;
        var0[var8] = var9;
        var9 = var4 * var7;
        var7 = var3 * var1;
        var8 = var5 * var6;
        var7 = var9 + var7;
        var8 = var7 - var8;
        var7 = 6;
        var0[var7] = var8;
        var3 = -var3;
        var3 = var3 * var6;
        var1 = var5 * var1;
        var2 = var4 * var2;
        var1 = var3 - var1;
        var2 = var1 - var2;
        var1 = 7;
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot7 = var1;
    var0 = function(arg0, arg1) { // Original name: copy, environment: var3
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
        var2 = 7;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot8 = var0;
    var4 = function(arg0, arg1, arg2) { // Original name: multiply, environment: var3
        var0 = arg0;
        var1 = arg1;
        var7 = arg2;
        var25 = 0;
        var16 = var1[var25];
        var24 = 1;
        var14 = var1[var24];
        var23 = 2;
        var12 = var1[var23];
        var22 = 3;
        var17 = var1[var22];
        var21 = 4;
        var13 = var7[var21];
        var20 = 5;
        var11 = var7[var20];
        var19 = 6;
        var9 = var7[var19];
        var2 = 7;
        var15 = var7[var2];
        var8 = var1[var21];
        var6 = var1[var20];
        var4 = var1[var19];
        var10 = var1[var2];
        var5 = var7[var25];
        var3 = var7[var24];
        var1 = var7[var23];
        var7 = var7[var22];
        var26 = var16 * var7;
        var18 = var17 * var5;
        var26 = var26 + var18;
        var18 = var14 * var1;
        var26 = var26 + var18;
        var18 = var12 * var3;
        var18 = var26 - var18;
        var0[var25] = var18;
        var25 = var14 * var7;
        var18 = var17 * var3;
        var25 = var25 + var18;
        var18 = var12 * var5;
        var25 = var25 + var18;
        var18 = var16 * var1;
        var18 = var25 - var18;
        var0[var24] = var18;
        var24 = var12 * var7;
        var18 = var17 * var1;
        var24 = var24 + var18;
        var18 = var16 * var3;
        var24 = var24 + var18;
        var18 = var14 * var5;
        var18 = var24 - var18;
        var0[var23] = var18;
        var23 = var17 * var7;
        var18 = var16 * var5;
        var23 = var23 - var18;
        var18 = var14 * var3;
        var23 = var23 - var18;
        var18 = var12 * var1;
        var18 = var23 - var18;
        var0[var22] = var18;
        var22 = var16 * var15;
        var18 = var17 * var13;
        var22 = var22 + var18;
        var18 = var14 * var9;
        var22 = var22 + var18;
        var18 = var12 * var11;
        var22 = var22 - var18;
        var18 = var8 * var7;
        var22 = var22 + var18;
        var18 = var10 * var5;
        var22 = var22 + var18;
        var18 = var6 * var1;
        var22 = var22 + var18;
        var18 = var4 * var3;
        var18 = var22 - var18;
        var0[var21] = var18;
        var21 = var14 * var15;
        var18 = var17 * var11;
        var21 = var21 + var18;
        var18 = var12 * var13;
        var21 = var21 + var18;
        var18 = var16 * var9;
        var21 = var21 - var18;
        var18 = var6 * var7;
        var21 = var21 + var18;
        var18 = var10 * var3;
        var21 = var21 + var18;
        var18 = var4 * var5;
        var21 = var21 + var18;
        var18 = var8 * var1;
        var18 = var21 - var18;
        var0[var20] = var18;
        var20 = var12 * var15;
        var18 = var17 * var9;
        var20 = var20 + var18;
        var18 = var16 * var11;
        var20 = var20 + var18;
        var18 = var14 * var13;
        var20 = var20 - var18;
        var18 = var4 * var7;
        var20 = var20 + var18;
        var18 = var10 * var1;
        var20 = var20 + var18;
        var18 = var8 * var3;
        var20 = var20 + var18;
        var18 = var6 * var5;
        var18 = var20 - var18;
        var0[var19] = var18;
        var15 = var17 * var15;
        var13 = var16 * var13;
        var13 = var15 - var13;
        var11 = var14 * var11;
        var11 = var13 - var11;
        var9 = var12 * var9;
        var9 = var11 - var9;
        var7 = var10 * var7;
        var7 = var9 + var7;
        var5 = var8 * var5;
        var5 = var7 - var5;
        var3 = var6 * var3;
        var3 = var5 - var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var9.bind(var10)(var2, var5, var6);
    var5 = function(arg0, arg1, arg2) { // Original name: add, environment: var3
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
        var2 = 7;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.add = var5;
    var5 = function(arg0) { // Original name: clone, environment: var3
        var1 = arg0;
        var0 = _closure1_slot0;
        var3 = var0.ARRAY_TYPE;
        var0 = var3.prototype;
        var2 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var4 = 8;
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
        var2 = 7;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.clone = var5;
    var5 = function(arg0, arg1) { // Original name: conjugate, environment: var3
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
        var3 = 3;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 4;
        var2 = var1[var3];
        var2 = -var2;
        var0[var3] = var2;
        var3 = 5;
        var2 = var1[var3];
        var2 = -var2;
        var0[var3] = var2;
        var3 = 6;
        var2 = var1[var3];
        var2 = -var2;
        var0[var3] = var2;
        var2 = 7;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.conjugate = var5;
    var2.copy = var0;
    var0 = function() { // Original name: create, environment: var3
        _fun86796: for (var _fun86796_ip = 0;;) switch (_fun86796_ip) {
            case 0:
                var0 = _closure1_slot0;
                var3 = var0.ARRAY_TYPE;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 8;
                var5 = var2;
                var0 = new var5[var3](var4, var3);
                var0 = var0 instanceof Object ? var0 : var2;
                var1 = _closure1_slot0;
                var2 = var1.ARRAY_TYPE;
                var1 = global;
                var1 = var1.Float32Array;
                if (!(var2 != var1)) {
                    _fun86796_ip = 106;
                    continue _fun86796
                }
            case 58:
                var2 = 0;
                var0[var2] = var2;
                var1 = 1;
                var0[var1] = var2;
                var1 = 2;
                var0[var1] = var2;
                var1 = 4;
                var0[var1] = var2;
                var1 = 5;
                var0[var1] = var2;
                var1 = 6;
                var0[var1] = var2;
                var1 = 7;
                var0[var1] = var2;
            case 106:
                var2 = 1;
                var1 = 3;
                var0[var1] = var2;
                return var0;
        }
    };
    var2.create = var0;
    var0 = undefined;
    var2.dot = var0;
    var5 = function(arg0, arg1) { // Original name: equals, environment: var3
        _fun86797: for (var _fun86797_ip = 0;;) switch (_fun86797_ip) {
            case 0:
                var9 = arg0;
                var1 = arg1;
                var8 = 0;
                var11 = var9[var8];
                var7 = 1;
                var22 = var9[var7];
                var6 = 2;
                var20 = var9[var6];
                var5 = 3;
                var18 = var9[var5];
                var4 = 4;
                var16 = var9[var4];
                var3 = 5;
                var14 = var9[var3];
                var2 = 6;
                var12 = var9[var2];
                var0 = 7;
                var10 = var9[var0];
                var24 = var1[var8];
                var23 = var1[var7];
                var21 = var1[var6];
                var19 = var1[var5];
                var17 = var1[var4];
                var15 = var1[var3];
                var13 = var1[var2];
                var9 = var1[var0];
                var1 = global;
                var3 = var1.Math;
                var2 = var3.abs;
                var0 = var11 - var24;
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
                var0 = var0.bind(var11)(var24);
                var0 = var6.bind(var8)(var7, var5, var0);
                var0 = var4 * var0;
                var0 = var2 <= var0;
                if (!var0) {
                    _fun86797_ip = 283;
                    continue _fun86797
                }
            case 192:
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
            case 283:
                if (!var0) {
                    _fun86797_ip = 377;
                    continue _fun86797
                }
            case 286:
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
            case 377:
                if (!var0) {
                    _fun86797_ip = 471;
                    continue _fun86797
                }
            case 380:
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
            case 471:
                if (!var0) {
                    _fun86797_ip = 565;
                    continue _fun86797
                }
            case 474:
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
            case 565:
                if (!var0) {
                    _fun86797_ip = 659;
                    continue _fun86797
                }
            case 568:
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
            case 659:
                if (!var0) {
                    _fun86797_ip = 753;
                    continue _fun86797
                }
            case 662:
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
            case 753:
                if (!var0) {
                    _fun86797_ip = 847;
                    continue _fun86797
                }
            case 756:
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
            case 847:
                return var0;
        }
    };
    var2.equals = var5;
    var5 = function(arg0, arg1) { // Original name: exactEquals, environment: var3
        _fun86798: for (var _fun86798_ip = 0;;) switch (_fun86798_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = 0;
                var1 = var2[var0];
                var0 = var3[var0];
                var0 = var1 === var0;
                if (!var0) {
                    _fun86798_ip = 38;
                    continue _fun86798
                }
            case 23:
                var1 = 1;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 38:
                if (!var0) {
                    _fun86798_ip = 56;
                    continue _fun86798
                }
            case 41:
                var1 = 2;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 56:
                if (!var0) {
                    _fun86798_ip = 74;
                    continue _fun86798
                }
            case 59:
                var1 = 3;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 74:
                if (!var0) {
                    _fun86798_ip = 92;
                    continue _fun86798
                }
            case 77:
                var1 = 4;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 92:
                if (!var0) {
                    _fun86798_ip = 110;
                    continue _fun86798
                }
            case 95:
                var1 = 5;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 110:
                if (!var0) {
                    _fun86798_ip = 128;
                    continue _fun86798
                }
            case 113:
                var1 = 6;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 128:
                if (!var0) {
                    _fun86798_ip = 146;
                    continue _fun86798
                }
            case 131:
                var1 = 7;
                var2 = var2[var1];
                var1 = var3[var1];
                var0 = var2 === var1;
            case 146:
                return var0;
        }
    };
    var2.exactEquals = var5;
    var5 = function(arg0, arg1) { // Original name: fromMat4, environment: var3
        var0 = arg0;
        var6 = arg1;
        var3 = _closure1_slot1;
        var2 = var3.create;
        var4 = var2.bind(var3)();
        var3 = _closure1_slot2;
        var2 = var3.getRotation;
        var2 = var2.bind(var3)(var4, var6);
        var2 = _closure1_slot0;
        var5 = var2.ARRAY_TYPE;
        var2 = var5.prototype;
        var3 = Object.create(var2, {
            constructor: {
                value: var5
            }
        });
        var9 = 3;
        var10 = var3;
        var2 = new var10[var5](var9, var8);
        var3 = var2 instanceof Object ? var2 : var3;
        var5 = _closure1_slot2;
        var2 = var5.getTranslation;
        var2 = var2.bind(var5)(var3, var6);
        var2 = _closure1_slot7;
        var1 = undefined;
        var1 = var2.bind(var1)(var0, var4, var3);
        return var0;
    };
    var2.fromMat4 = var5;
    var5 = function(arg0, arg1) { // Original name: fromRotation, environment: var3
        var0 = arg0;
        var1 = arg1;
        var2 = 0;
        var3 = var1[var2];
        var0[var2] = var3;
        var4 = 1;
        var3 = var1[var4];
        var0[var4] = var3;
        var4 = 2;
        var3 = var1[var4];
        var0[var4] = var3;
        var3 = 3;
        var1 = var1[var3];
        var0[var3] = var1;
        var1 = 4;
        var0[var1] = var2;
        var1 = 5;
        var0[var1] = var2;
        var1 = 6;
        var0[var1] = var2;
        var1 = 7;
        var0[var1] = var2;
        return var0;
    };
    var2.fromRotation = var5;
    var2.fromRotationTranslation = var1;
    var1 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: fromRotationTranslationValues, environment: var3
        var6 = arg0;
        var5 = arg1;
        var4 = arg2;
        var7 = arg3;
        var0 = _closure1_slot0;
        var2 = var0.ARRAY_TYPE;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var11 = 8;
        var12 = var1;
        var0 = new var12[var2](var11, var10);
        var0 = var0 instanceof Object ? var0 : var1;
        var1 = 0;
        var0[var1] = var6;
        var1 = 1;
        var0[var1] = var5;
        var1 = 2;
        var0[var1] = var4;
        var1 = 3;
        var0[var1] = var7;
        var8 = 0.5;
        var1 = arg4;
        var3 = var8 * var1;
        var1 = arg5;
        var1 = var8 * var1;
        var2 = arg6;
        var2 = var8 * var2;
        var10 = var3 * var7;
        var8 = var1 * var4;
        var9 = var2 * var5;
        var8 = var10 + var8;
        var9 = var8 - var9;
        var8 = 4;
        var0[var8] = var9;
        var10 = var1 * var7;
        var8 = var2 * var6;
        var9 = var3 * var4;
        var8 = var10 + var8;
        var9 = var8 - var9;
        var8 = 5;
        var0[var8] = var9;
        var9 = var2 * var7;
        var7 = var3 * var5;
        var8 = var1 * var6;
        var7 = var9 + var7;
        var8 = var7 - var8;
        var7 = 6;
        var0[var7] = var8;
        var3 = -var3;
        var3 = var3 * var6;
        var1 = var1 * var5;
        var2 = var2 * var4;
        var1 = var3 - var1;
        var2 = var1 - var2;
        var1 = 7;
        var0[var1] = var2;
        return var0;
    };
    var2.fromRotationTranslationValues = var1;
    var1 = function(arg0, arg1) { // Original name: fromTranslation, environment: var3
        var0 = arg0;
        var4 = arg1;
        var2 = 0;
        var0[var2] = var2;
        var5 = 1;
        var0[var5] = var2;
        var1 = 2;
        var0[var1] = var2;
        var3 = 3;
        var0[var3] = var5;
        var6 = var4[var2];
        var3 = 0.5;
        var7 = var3 * var6;
        var6 = 4;
        var0[var6] = var7;
        var5 = var4[var5];
        var6 = var3 * var5;
        var5 = 5;
        var0[var5] = var6;
        var1 = var4[var1];
        var3 = var3 * var1;
        var1 = 6;
        var0[var1] = var3;
        var1 = 7;
        var0[var1] = var2;
        return var0;
    };
    var2.fromTranslation = var1;
    var1 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) { // Original name: fromValues, environment: var3
        var0 = _closure1_slot0;
        var2 = var0.ARRAY_TYPE;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 8;
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
        return var0;
    };
    var2.fromValues = var1;
    var1 = function(arg0, arg1) { // Original name: getDual, environment: var3
        var0 = arg0;
        var2 = arg1;
        var1 = 4;
        var3 = var2[var1];
        var1 = 0;
        var0[var1] = var3;
        var1 = 5;
        var3 = var2[var1];
        var1 = 1;
        var0[var1] = var3;
        var1 = 6;
        var3 = var2[var1];
        var1 = 2;
        var0[var1] = var3;
        var1 = 7;
        var2 = var2[var1];
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.getDual = var1;
    var2.getReal = var0;
    var1 = function(arg0, arg1) { // Original name: getTranslation, environment: var3
        var0 = arg0;
        var10 = arg1;
        var1 = 4;
        var6 = var10[var1];
        var1 = 5;
        var4 = var10[var1];
        var1 = 6;
        var9 = var10[var1];
        var1 = 7;
        var8 = var10[var1];
        var12 = 0;
        var1 = var10[var12];
        var1 = -var1;
        var11 = 1;
        var2 = var10[var11];
        var3 = -var2;
        var2 = 2;
        var5 = var10[var2];
        var5 = -var5;
        var7 = 3;
        var7 = var10[var7];
        var13 = var6 * var7;
        var10 = var8 * var1;
        var13 = var13 + var10;
        var10 = var4 * var5;
        var13 = var13 + var10;
        var10 = var9 * var3;
        var10 = var13 - var10;
        var10 = var2 * var10;
        var0[var12] = var10;
        var12 = var4 * var7;
        var10 = var8 * var3;
        var12 = var12 + var10;
        var10 = var9 * var1;
        var12 = var12 + var10;
        var10 = var6 * var5;
        var10 = var12 - var10;
        var10 = var2 * var10;
        var0[var11] = var10;
        var7 = var9 * var7;
        var5 = var8 * var5;
        var5 = var7 + var5;
        var3 = var6 * var3;
        var3 = var5 + var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var1 = var2 * var1;
        var0[var2] = var1;
        return var0;
    };
    var2.getTranslation = var1;
    var1 = function(arg0) { // Original name: identity, environment: var3
        var0 = arg0;
        var2 = 0;
        var0[var2] = var2;
        var3 = 1;
        var0[var3] = var2;
        var1 = 2;
        var0[var1] = var2;
        var1 = 3;
        var0[var1] = var3;
        var1 = 4;
        var0[var1] = var2;
        var1 = 5;
        var0[var1] = var2;
        var1 = 6;
        var0[var1] = var2;
        var1 = 7;
        var0[var1] = var2;
        return var0;
    };
    var2.identity = var1;
    var1 = function(arg0, arg1) { // Original name: invert, environment: var3
        var0 = arg0;
        var1 = arg1;
        var3 = _closure1_slot4;
        var2 = undefined;
        var3 = var3.bind(var2)(var1);
        var4 = 0;
        var2 = var1[var4];
        var2 = -var2;
        var2 = var2 / var3;
        var0[var4] = var2;
        var4 = 1;
        var2 = var1[var4];
        var2 = -var2;
        var2 = var2 / var3;
        var0[var4] = var2;
        var4 = 2;
        var2 = var1[var4];
        var2 = -var2;
        var2 = var2 / var3;
        var0[var4] = var2;
        var4 = 3;
        var2 = var1[var4];
        var2 = var2 / var3;
        var0[var4] = var2;
        var4 = 4;
        var2 = var1[var4];
        var2 = -var2;
        var2 = var2 / var3;
        var0[var4] = var2;
        var4 = 5;
        var2 = var1[var4];
        var2 = -var2;
        var2 = var2 / var3;
        var0[var4] = var2;
        var4 = 6;
        var2 = var1[var4];
        var2 = -var2;
        var2 = var2 / var3;
        var0[var4] = var2;
        var2 = 7;
        var1 = var1[var2];
        var1 = var1 / var3;
        var0[var2] = var1;
        return var0;
    };
    var2.invert = var1;
    var2.len = var0;
    var2.length = var0;
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: lerp, environment: var3
        _fun86808: for (var _fun86808_ip = 0;;) switch (_fun86808_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var1 = arg2;
                var2 = arg3;
                var6 = 1;
                var5 = var6 - var2;
                var7 = _closure1_slot3;
                var4 = undefined;
                var8 = var7.bind(var4)(var3, var1);
                var7 = 0;
                var4 = var2;
                if (!(var8 < var7)) {
                    _fun86808_ip = 46;
                    continue _fun86808
                }
            case 43:
                var4 = -var2;
            case 46:
                var2 = var3[var7];
                var8 = var2 * var5;
                var2 = var1[var7];
                var2 = var2 * var4;
                var2 = var8 + var2;
                var0[var7] = var2;
                var2 = var3[var6];
                var7 = var2 * var5;
                var2 = var1[var6];
                var2 = var2 * var4;
                var2 = var7 + var2;
                var0[var6] = var2;
                var6 = 2;
                var2 = var3[var6];
                var7 = var2 * var5;
                var2 = var1[var6];
                var2 = var2 * var4;
                var2 = var7 + var2;
                var0[var6] = var2;
                var6 = 3;
                var2 = var3[var6];
                var7 = var2 * var5;
                var2 = var1[var6];
                var2 = var2 * var4;
                var2 = var7 + var2;
                var0[var6] = var2;
                var6 = 4;
                var2 = var3[var6];
                var7 = var2 * var5;
                var2 = var1[var6];
                var2 = var2 * var4;
                var2 = var7 + var2;
                var0[var6] = var2;
                var6 = 5;
                var2 = var3[var6];
                var7 = var2 * var5;
                var2 = var1[var6];
                var2 = var2 * var4;
                var2 = var7 + var2;
                var0[var6] = var2;
                var6 = 6;
                var2 = var3[var6];
                var7 = var2 * var5;
                var2 = var1[var6];
                var2 = var2 * var4;
                var2 = var7 + var2;
                var0[var6] = var2;
                var2 = 7;
                var3 = var3[var2];
                var3 = var3 * var5;
                var1 = var1[var2];
                var1 = var1 * var4;
                var1 = var3 + var1;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.lerp = var1;
    var2.mul = var0;
    var2.multiply = var4;
    var1 = function(arg0, arg1) { // Original name: normalize, environment: var3
        _fun86809: for (var _fun86809_ip = 0;;) switch (_fun86809_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var3 = _closure1_slot4;
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var18 = 0;
                if (!(var4 > var18)) {
                    _fun86809_ip = 225;
                    continue _fun86809
                }
            case 29:
                var2 = global;
                var3 = var2.Math;
                var2 = var3.sqrt;
                var3 = var2.bind(var3)(var4);
                var2 = var1[var18];
                var12 = var2 / var3;
                var17 = 1;
                var2 = var1[var17];
                var9 = var2 / var3;
                var16 = 2;
                var2 = var1[var16];
                var6 = var2 / var3;
                var15 = 3;
                var2 = var1[var15];
                var5 = var2 / var3;
                var13 = 4;
                var14 = var1[var13];
                var10 = 5;
                var11 = var1[var10];
                var7 = 6;
                var8 = var1[var7];
                var2 = 7;
                var4 = var1[var2];
                var19 = var12 * var14;
                var1 = var9 * var11;
                var19 = var19 + var1;
                var1 = var6 * var8;
                var19 = var19 + var1;
                var1 = var5 * var4;
                var1 = var19 + var1;
                var0[var18] = var12;
                var0[var17] = var9;
                var0[var16] = var6;
                var0[var15] = var5;
                var12 = var12 * var1;
                var12 = var14 - var12;
                var12 = var12 / var3;
                var0[var13] = var12;
                var9 = var9 * var1;
                var9 = var11 - var9;
                var9 = var9 / var3;
                var0[var10] = var9;
                var6 = var6 * var1;
                var6 = var8 - var6;
                var6 = var6 / var3;
                var0[var7] = var6;
                var1 = var5 * var1;
                var1 = var4 - var1;
                var1 = var1 / var3;
                var0[var2] = var1;
            case 225:
                return var0;
        }
    };
    var2.normalize = var1;
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: rotateAroundAxis, environment: var3
        _fun86810: for (var _fun86810_ip = 0;;) switch (_fun86810_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var4 = arg2;
                var7 = arg3;
                var2 = global;
                var5 = var2.Math;
                var1 = var5.abs;
                var6 = var1.bind(var5)(var7);
                var5 = _closure1_slot0;
                var5 = var5.EPSILON;
                if (!(!(var6 < var5))) {
                    _fun86810_ip = 509;
                    continue _fun86810
                }
            case 51:
                var8 = var2.Math;
                var6 = var8.sqrt;
                var15 = 0;
                var9 = var4[var15];
                var5 = var4[var15];
                var9 = var9 * var5;
                var14 = 1;
                var10 = var4[var14];
                var5 = var4[var14];
                var5 = var10 * var5;
                var9 = var9 + var5;
                var13 = 2;
                var10 = var4[var13];
                var5 = var4[var13];
                var5 = var10 * var5;
                var5 = var9 + var5;
                var6 = var6.bind(var8)(var5);
                var5 = 0.5;
                var5 = var7 * var5;
                var8 = var2.Math;
                var7 = var8.sin;
                var7 = var7.bind(var8)(var5);
                var8 = var4[var15];
                var8 = var7 * var8;
                var10 = var8 / var6;
                var8 = var4[var14];
                var8 = var7 * var8;
                var8 = var8 / var6;
                var4 = var4[var13];
                var4 = var7 * var4;
                var6 = var4 / var6;
                var4 = var2.Math;
                var2 = var4.cos;
                var11 = var2.bind(var4)(var5);
                var7 = var3[var15];
                var5 = var3[var14];
                var2 = var3[var13];
                var4 = 3;
                var9 = var3[var4];
                var16 = var7 * var11;
                var12 = var9 * var10;
                var16 = var16 + var12;
                var12 = var5 * var6;
                var16 = var16 + var12;
                var12 = var2 * var8;
                var12 = var16 - var12;
                var0[var15] = var12;
                var15 = var5 * var11;
                var12 = var9 * var8;
                var15 = var15 + var12;
                var12 = var2 * var10;
                var15 = var15 + var12;
                var12 = var7 * var6;
                var12 = var15 - var12;
                var0[var14] = var12;
                var14 = var2 * var11;
                var12 = var9 * var6;
                var14 = var14 + var12;
                var12 = var7 * var8;
                var14 = var14 + var12;
                var12 = var5 * var10;
                var12 = var14 - var12;
                var0[var13] = var12;
                var9 = var9 * var11;
                var7 = var7 * var10;
                var7 = var9 - var7;
                var5 = var5 * var8;
                var5 = var7 - var5;
                var2 = var2 * var6;
                var2 = var5 - var2;
                var0[var4] = var2;
                var15 = 4;
                var7 = var3[var15];
                var14 = 5;
                var5 = var3[var14];
                var13 = 6;
                var2 = var3[var13];
                var4 = 7;
                var9 = var3[var4];
                var16 = var7 * var11;
                var12 = var9 * var10;
                var16 = var16 + var12;
                var12 = var5 * var6;
                var16 = var16 + var12;
                var12 = var2 * var8;
                var12 = var16 - var12;
                var0[var15] = var12;
                var15 = var5 * var11;
                var12 = var9 * var8;
                var15 = var15 + var12;
                var12 = var2 * var10;
                var15 = var15 + var12;
                var12 = var7 * var6;
                var12 = var15 - var12;
                var0[var14] = var12;
                var14 = var2 * var11;
                var12 = var9 * var6;
                var14 = var14 + var12;
                var12 = var7 * var8;
                var14 = var14 + var12;
                var12 = var5 * var10;
                var12 = var14 - var12;
                var0[var13] = var12;
                var9 = var9 * var11;
                var7 = var7 * var10;
                var7 = var9 - var7;
                var5 = var5 * var8;
                var5 = var7 - var5;
                var2 = var2 * var6;
                var2 = var5 - var2;
                var0[var4] = var2;
                return var0;
            case 509:
                var2 = _closure1_slot8;
                var1 = undefined;
                var1 = var2.bind(var1)(var0, var3);
                return var0;
        }
    };
    var2.rotateAroundAxis = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: rotateByQuatAppend, environment: var3
        var0 = arg0;
        var7 = arg1;
        var1 = arg2;
        var14 = 0;
        var8 = var1[var14];
        var13 = 1;
        var6 = var1[var13];
        var12 = 2;
        var4 = var1[var12];
        var2 = 3;
        var9 = var1[var2];
        var5 = var7[var14];
        var3 = var7[var13];
        var1 = var7[var12];
        var10 = var7[var2];
        var15 = var5 * var9;
        var11 = var10 * var8;
        var15 = var15 + var11;
        var11 = var3 * var4;
        var15 = var15 + var11;
        var11 = var1 * var6;
        var11 = var15 - var11;
        var0[var14] = var11;
        var14 = var3 * var9;
        var11 = var10 * var6;
        var14 = var14 + var11;
        var11 = var1 * var8;
        var14 = var14 + var11;
        var11 = var5 * var4;
        var11 = var14 - var11;
        var0[var13] = var11;
        var13 = var1 * var9;
        var11 = var10 * var4;
        var13 = var13 + var11;
        var11 = var5 * var6;
        var13 = var13 + var11;
        var11 = var3 * var8;
        var11 = var13 - var11;
        var0[var12] = var11;
        var10 = var10 * var9;
        var5 = var5 * var8;
        var5 = var10 - var5;
        var3 = var3 * var6;
        var3 = var5 - var3;
        var1 = var1 * var4;
        var1 = var3 - var1;
        var0[var2] = var1;
        var13 = 4;
        var5 = var7[var13];
        var12 = 5;
        var3 = var7[var12];
        var11 = 6;
        var1 = var7[var11];
        var2 = 7;
        var7 = var7[var2];
        var14 = var5 * var9;
        var10 = var7 * var8;
        var14 = var14 + var10;
        var10 = var3 * var4;
        var14 = var14 + var10;
        var10 = var1 * var6;
        var10 = var14 - var10;
        var0[var13] = var10;
        var13 = var3 * var9;
        var10 = var7 * var6;
        var13 = var13 + var10;
        var10 = var1 * var8;
        var13 = var13 + var10;
        var10 = var5 * var4;
        var10 = var13 - var10;
        var0[var12] = var10;
        var12 = var1 * var9;
        var10 = var7 * var4;
        var12 = var12 + var10;
        var10 = var5 * var6;
        var12 = var12 + var10;
        var10 = var3 * var8;
        var10 = var12 - var10;
        var0[var11] = var10;
        var7 = var7 * var9;
        var5 = var5 * var8;
        var5 = var7 - var5;
        var3 = var3 * var6;
        var3 = var5 - var3;
        var1 = var1 * var4;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var2.rotateByQuatAppend = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: rotateByQuatPrepend, environment: var3
        var0 = arg0;
        var1 = arg1;
        var7 = arg2;
        var14 = 0;
        var8 = var1[var14];
        var13 = 1;
        var6 = var1[var13];
        var12 = 2;
        var4 = var1[var12];
        var2 = 3;
        var9 = var1[var2];
        var5 = var7[var14];
        var3 = var7[var13];
        var1 = var7[var12];
        var10 = var7[var2];
        var15 = var8 * var10;
        var11 = var9 * var5;
        var15 = var15 + var11;
        var11 = var6 * var1;
        var15 = var15 + var11;
        var11 = var4 * var3;
        var11 = var15 - var11;
        var0[var14] = var11;
        var14 = var6 * var10;
        var11 = var9 * var3;
        var14 = var14 + var11;
        var11 = var4 * var5;
        var14 = var14 + var11;
        var11 = var8 * var1;
        var11 = var14 - var11;
        var0[var13] = var11;
        var13 = var4 * var10;
        var11 = var9 * var1;
        var13 = var13 + var11;
        var11 = var8 * var3;
        var13 = var13 + var11;
        var11 = var6 * var5;
        var11 = var13 - var11;
        var0[var12] = var11;
        var10 = var9 * var10;
        var5 = var8 * var5;
        var5 = var10 - var5;
        var3 = var6 * var3;
        var3 = var5 - var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
        var13 = 4;
        var5 = var7[var13];
        var12 = 5;
        var3 = var7[var12];
        var11 = 6;
        var1 = var7[var11];
        var2 = 7;
        var7 = var7[var2];
        var14 = var8 * var7;
        var10 = var9 * var5;
        var14 = var14 + var10;
        var10 = var6 * var1;
        var14 = var14 + var10;
        var10 = var4 * var3;
        var10 = var14 - var10;
        var0[var13] = var10;
        var13 = var6 * var7;
        var10 = var9 * var3;
        var13 = var13 + var10;
        var10 = var4 * var5;
        var13 = var13 + var10;
        var10 = var8 * var1;
        var10 = var13 - var10;
        var0[var12] = var10;
        var12 = var4 * var7;
        var10 = var9 * var1;
        var12 = var12 + var10;
        var10 = var8 * var3;
        var12 = var12 + var10;
        var10 = var6 * var5;
        var10 = var12 - var10;
        var0[var11] = var10;
        var7 = var9 * var7;
        var5 = var8 * var5;
        var5 = var7 - var5;
        var3 = var6 * var3;
        var3 = var5 - var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var2.rotateByQuatPrepend = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: rotateX, environment: var3
        var0 = arg0;
        var16 = arg1;
        var5 = 0;
        var1 = var16[var5];
        var19 = -var1;
        var3 = 1;
        var1 = var16[var3];
        var17 = -var1;
        var1 = 2;
        var2 = var16[var1];
        var14 = -var2;
        var7 = 3;
        var20 = var16[var7];
        var13 = 4;
        var15 = var16[var13];
        var12 = 5;
        var10 = var16[var12];
        var11 = 6;
        var9 = var16[var11];
        var2 = 7;
        var18 = var16[var2];
        var6 = var15 * var20;
        var4 = var18 * var19;
        var6 = var6 + var4;
        var4 = var10 * var14;
        var6 = var6 + var4;
        var4 = var9 * var17;
        var8 = var6 - var4;
        var6 = var10 * var20;
        var4 = var18 * var17;
        var6 = var6 + var4;
        var4 = var9 * var19;
        var6 = var6 + var4;
        var4 = var15 * var14;
        var6 = var6 - var4;
        var21 = var9 * var20;
        var4 = var18 * var14;
        var21 = var21 + var4;
        var4 = var15 * var17;
        var21 = var21 + var4;
        var4 = var10 * var19;
        var4 = var21 - var4;
        var18 = var18 * var20;
        var15 = var15 * var19;
        var15 = var18 - var15;
        var10 = var10 * var17;
        var10 = var15 - var10;
        var9 = var9 * var14;
        var9 = var10 - var9;
        var15 = _closure1_slot1;
        var14 = var15.rotateX;
        var10 = arg2;
        var10 = var14.bind(var15)(var0, var16, var10);
        var5 = var0[var5];
        var3 = var0[var3];
        var1 = var0[var1];
        var7 = var0[var7];
        var14 = var8 * var7;
        var10 = var9 * var5;
        var14 = var14 + var10;
        var10 = var6 * var1;
        var14 = var14 + var10;
        var10 = var4 * var3;
        var10 = var14 - var10;
        var0[var13] = var10;
        var13 = var6 * var7;
        var10 = var9 * var3;
        var13 = var13 + var10;
        var10 = var4 * var5;
        var13 = var13 + var10;
        var10 = var8 * var1;
        var10 = var13 - var10;
        var0[var12] = var10;
        var12 = var4 * var7;
        var10 = var9 * var1;
        var12 = var12 + var10;
        var10 = var8 * var3;
        var12 = var12 + var10;
        var10 = var6 * var5;
        var10 = var12 - var10;
        var0[var11] = var10;
        var7 = var9 * var7;
        var5 = var8 * var5;
        var5 = var7 - var5;
        var3 = var6 * var3;
        var3 = var5 - var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var2.rotateX = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: rotateY, environment: var3
        var0 = arg0;
        var16 = arg1;
        var5 = 0;
        var1 = var16[var5];
        var19 = -var1;
        var3 = 1;
        var1 = var16[var3];
        var17 = -var1;
        var1 = 2;
        var2 = var16[var1];
        var14 = -var2;
        var7 = 3;
        var20 = var16[var7];
        var13 = 4;
        var15 = var16[var13];
        var12 = 5;
        var10 = var16[var12];
        var11 = 6;
        var9 = var16[var11];
        var2 = 7;
        var18 = var16[var2];
        var6 = var15 * var20;
        var4 = var18 * var19;
        var6 = var6 + var4;
        var4 = var10 * var14;
        var6 = var6 + var4;
        var4 = var9 * var17;
        var8 = var6 - var4;
        var6 = var10 * var20;
        var4 = var18 * var17;
        var6 = var6 + var4;
        var4 = var9 * var19;
        var6 = var6 + var4;
        var4 = var15 * var14;
        var6 = var6 - var4;
        var21 = var9 * var20;
        var4 = var18 * var14;
        var21 = var21 + var4;
        var4 = var15 * var17;
        var21 = var21 + var4;
        var4 = var10 * var19;
        var4 = var21 - var4;
        var18 = var18 * var20;
        var15 = var15 * var19;
        var15 = var18 - var15;
        var10 = var10 * var17;
        var10 = var15 - var10;
        var9 = var9 * var14;
        var9 = var10 - var9;
        var15 = _closure1_slot1;
        var14 = var15.rotateY;
        var10 = arg2;
        var10 = var14.bind(var15)(var0, var16, var10);
        var5 = var0[var5];
        var3 = var0[var3];
        var1 = var0[var1];
        var7 = var0[var7];
        var14 = var8 * var7;
        var10 = var9 * var5;
        var14 = var14 + var10;
        var10 = var6 * var1;
        var14 = var14 + var10;
        var10 = var4 * var3;
        var10 = var14 - var10;
        var0[var13] = var10;
        var13 = var6 * var7;
        var10 = var9 * var3;
        var13 = var13 + var10;
        var10 = var4 * var5;
        var13 = var13 + var10;
        var10 = var8 * var1;
        var10 = var13 - var10;
        var0[var12] = var10;
        var12 = var4 * var7;
        var10 = var9 * var1;
        var12 = var12 + var10;
        var10 = var8 * var3;
        var12 = var12 + var10;
        var10 = var6 * var5;
        var10 = var12 - var10;
        var0[var11] = var10;
        var7 = var9 * var7;
        var5 = var8 * var5;
        var5 = var7 - var5;
        var3 = var6 * var3;
        var3 = var5 - var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var2.rotateY = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: rotateZ, environment: var3
        var0 = arg0;
        var16 = arg1;
        var5 = 0;
        var1 = var16[var5];
        var19 = -var1;
        var3 = 1;
        var1 = var16[var3];
        var17 = -var1;
        var1 = 2;
        var2 = var16[var1];
        var14 = -var2;
        var7 = 3;
        var20 = var16[var7];
        var13 = 4;
        var15 = var16[var13];
        var12 = 5;
        var10 = var16[var12];
        var11 = 6;
        var9 = var16[var11];
        var2 = 7;
        var18 = var16[var2];
        var6 = var15 * var20;
        var4 = var18 * var19;
        var6 = var6 + var4;
        var4 = var10 * var14;
        var6 = var6 + var4;
        var4 = var9 * var17;
        var8 = var6 - var4;
        var6 = var10 * var20;
        var4 = var18 * var17;
        var6 = var6 + var4;
        var4 = var9 * var19;
        var6 = var6 + var4;
        var4 = var15 * var14;
        var6 = var6 - var4;
        var21 = var9 * var20;
        var4 = var18 * var14;
        var21 = var21 + var4;
        var4 = var15 * var17;
        var21 = var21 + var4;
        var4 = var10 * var19;
        var4 = var21 - var4;
        var18 = var18 * var20;
        var15 = var15 * var19;
        var15 = var18 - var15;
        var10 = var10 * var17;
        var10 = var15 - var10;
        var9 = var9 * var14;
        var9 = var10 - var9;
        var15 = _closure1_slot1;
        var14 = var15.rotateZ;
        var10 = arg2;
        var10 = var14.bind(var15)(var0, var16, var10);
        var5 = var0[var5];
        var3 = var0[var3];
        var1 = var0[var1];
        var7 = var0[var7];
        var14 = var8 * var7;
        var10 = var9 * var5;
        var14 = var14 + var10;
        var10 = var6 * var1;
        var14 = var14 + var10;
        var10 = var4 * var3;
        var10 = var14 - var10;
        var0[var13] = var10;
        var13 = var6 * var7;
        var10 = var9 * var3;
        var13 = var13 + var10;
        var10 = var4 * var5;
        var13 = var13 + var10;
        var10 = var8 * var1;
        var10 = var13 - var10;
        var0[var12] = var10;
        var12 = var4 * var7;
        var10 = var9 * var1;
        var12 = var12 + var10;
        var10 = var8 * var3;
        var12 = var12 + var10;
        var10 = var6 * var5;
        var10 = var12 - var10;
        var0[var11] = var10;
        var7 = var9 * var7;
        var5 = var8 * var5;
        var5 = var7 - var5;
        var3 = var6 * var3;
        var3 = var5 - var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var2.rotateZ = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: scale, environment: var3
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
        var2 = 7;
        var1 = var1[var2];
        var1 = var1 * var3;
        var0[var2] = var1;
        return var0;
    };
    var2.scale = var1;
    var1 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) { // Original name: set, environment: var3
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
        return var0;
    };
    var2.set = var1;
    var1 = function(arg0, arg1) { // Original name: setDual, environment: var3
        var0 = arg0;
        var2 = arg1;
        var1 = 0;
        var3 = var2[var1];
        var1 = 4;
        var0[var1] = var3;
        var1 = 1;
        var3 = var2[var1];
        var1 = 5;
        var0[var1] = var3;
        var1 = 2;
        var3 = var2[var1];
        var1 = 6;
        var0[var1] = var3;
        var1 = 3;
        var2 = var2[var1];
        var1 = 7;
        var0[var1] = var2;
        return var0;
    };
    var2.setDual = var1;
    var2.setReal = var0;
    var2.sqrLen = var0;
    var2.squaredLength = var0;
    var1 = function(arg0) { // Original name: str, environment: var3
        var3 = arg0;
        var0 = 0;
        var1 = var3[var0];
        var0 = 'quat2(';
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
        var1 = var0 + var1;
        var0 = ')';
        var0 = var1 + var0;
        return var0;
    };
    var2.str = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: translate, environment: var3
        var0 = arg0;
        var3 = arg1;
        var2 = arg2;
        var19 = 0;
        var5 = var3[var19];
        var18 = 1;
        var7 = var3[var18];
        var17 = 2;
        var6 = var3[var17];
        var12 = 3;
        var9 = var3[var12];
        var1 = var2[var19];
        var4 = 0.5;
        var8 = var4 * var1;
        var1 = var2[var18];
        var1 = var4 * var1;
        var2 = var2[var17];
        var4 = var4 * var2;
        var15 = 4;
        var16 = var3[var15];
        var13 = 5;
        var14 = var3[var13];
        var10 = 6;
        var11 = var3[var10];
        var2 = 7;
        var3 = var3[var2];
        var0[var19] = var5;
        var0[var18] = var7;
        var0[var17] = var6;
        var0[var12] = var9;
        var18 = var9 * var8;
        var12 = var7 * var4;
        var17 = var6 * var1;
        var12 = var18 + var12;
        var12 = var12 - var17;
        var12 = var12 + var16;
        var0[var15] = var12;
        var16 = var9 * var1;
        var12 = var6 * var8;
        var15 = var5 * var4;
        var12 = var16 + var12;
        var12 = var12 - var15;
        var12 = var12 + var14;
        var0[var13] = var12;
        var13 = var9 * var4;
        var9 = var5 * var1;
        var12 = var7 * var8;
        var9 = var13 + var9;
        var9 = var9 - var12;
        var9 = var9 + var11;
        var0[var10] = var9;
        var5 = -var5;
        var5 = var5 * var8;
        var1 = var7 * var1;
        var4 = var6 * var4;
        var1 = var5 - var1;
        var1 = var1 - var4;
        var1 = var1 + var3;
        var0[var2] = var1;
        return var0;
    };
    var2.translate = var1;
    var5 = _closure1_slot6;
    var1 = 0;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var5 = _closure1_slot6;
    var1 = 1;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var6 = _closure1_slot6;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = var1.copy;
    var2.getReal = var5;
    var5 = var1.copy;
    var2.setReal = var5;
    var2.mul = var4;
    var4 = var1.dot;
    var2.dot = var4;
    var _closure1_slot3 = var4;
    var4 = var1.length;
    var2.length = var4;
    var2.len = var4;
    var1 = var1.squaredLength;
    var2.squaredLength = var1;
    var _closure1_slot4 = var1;
    var2.sqrLen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11157, 11162, 11161]);