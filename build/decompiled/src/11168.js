// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var2 = exports;
    var12 = dependencyMap;
    var0 = function(arg0) { // Original name: _typeof, environment: var1
        _fun86715: for (var _fun86715_ip = 0;;) switch (_fun86715_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86715_ip = 42;
                    continue _fun86715
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun86715_ip = 51;
                    continue _fun86715
                }
            case 42:
                var2 = function(arg0) { // Environment: var0
                    _fun86717: for (var _fun86717_ip = 0;;) switch (_fun86717_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun86717_ip = 58;
                                continue _fun86717
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun86717_ip = 58;
                                continue _fun86717
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun86717_ip = 58;
                                continue _fun86717
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun86717_ip = 61;
                                continue _fun86717
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun86715_ip = 58;
                continue _fun86715;
            case 51:
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 58:
                _closure1_slot12 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: _interopRequireWildcard, environment: var1
        _fun86718: for (var _fun86718_ip = 0;;) switch (_fun86718_ip) {
            case 0:
                var1 = global;
                var2 = var1.WeakMap;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86718_ip = 81;
                    continue _fun86718
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
                    _fun86719: for (var _fun86719_ip = 0;;) switch (_fun86719_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            if (var2) {
                                _fun86719_ip = 23;
                                continue _fun86719
                            }
                        case 9:
                            if (!var3) {
                                _fun86719_ip = 23;
                                continue _fun86719
                            }
                        case 12:
                            var0 = var3.__esModule;
                            if (!var0) {
                                _fun86719_ip = 23;
                                continue _fun86719
                            }
                        case 21:
                            return var3;
                        case 23:
                            var1 = null;
                            var0 = Object.create(var1);
                            var0.default = var3;
                            if (!(var1 !== var3)) {
                                _fun86719_ip = 286;
                                continue _fun86719
                            }
                        case 39:
                            var1 = _closure1_slot12;
                            var12 = undefined;
                            var4 = var1.bind(var12)(var3);
                            var1 = 'object';
                            if (!(var1 != var4)) {
                                _fun86719_ip = 75;
                                continue _fun86719
                            }
                        case 61:
                            var4 = 'function';
                            var1 = typeof var3;
                            if (!(var4 === var1)) {
                                _fun86719_ip = 286;
                                continue _fun86719
                            }
                        case 75:
                            if (var2) {
                                _fun86719_ip = 87;
                                continue _fun86719
                            }
                        case 81:
                            var2 = _closure2_slot0;
                            _fun86719_ip = 91;
                            continue _fun86719;
                        case 87:
                            var2 = _closure2_slot1;
                        case 91:
                            if (!var2) {
                                _fun86719_ip = 121;
                                continue _fun86719
                            }
                        case 94:
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            if (var1) {
                                _fun86719_ip = 274;
                                continue _fun86719
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
                                        _fun86719_ip = 184;
                                        continue _fun86719
                                    }
                                    case 165: var14 = {};
                                    var16 = var14.hasOwnProperty;
                                    var14 = var16.call;
                                    var13 = var14.bind(var16)(var3, var15);
                                    case 184: if (!var13) {
                                        _fun86719_ip = 146;
                                        continue _fun86719
                                    }
                                    case 187: var13 = var6.Object;
                                    var14 = var13.defineProperty;
                                    var13 = var14;
                                    if (!var13) {
                                        _fun86719_ip = 222;
                                        continue _fun86719
                                    }
                                    case 204: var17 = var6.Object;
                                    var16 = var17.getOwnPropertyDescriptor;
                                    var13 = var16.bind(var17)(var3, var15);
                                    case 222: if (!var13) {
                                        _fun86719_ip = 241;
                                        continue _fun86719
                                    }
                                    case 225: var16 = var13.get;
                                    if (var16) {
                                        _fun86719_ip = 257;
                                        continue _fun86719
                                    }
                                    case 233: var16 = var13.set;
                                    if (var16) {
                                        _fun86719_ip = 257;
                                        continue _fun86719
                                    }
                                    case 241: var16 = var3[var15];
                                    var0[var15] = var16;
                                    var4 = var14;
                                    var1 = var13;
                                    _fun86719_ip = 146;
                                    continue _fun86719;
                                    case 257: var15 = var14.bind(var12)(var0, var15, var13);
                                    var4 = var14;
                                    var1 = var13;
                                    _fun86719_ip = 146;
                                    continue _fun86719;
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
                _closure1_slot13 = var3;
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var3 = function() { // Original name: create, environment: var1
        _fun86720: for (var _fun86720_ip = 0;;) switch (_fun86720_ip) {
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
                    _fun86720_ip = 78;
                    continue _fun86720
                }
            case 58:
                var2 = 0;
                var0[var2] = var2;
                var1 = 1;
                var0[var1] = var2;
                var1 = 2;
                var0[var1] = var2;
            case 78:
                var2 = 1;
                var1 = 3;
                var0[var1] = var2;
                return var0;
        }
    };
    var5 = function(arg0, arg1, arg2) { // Original name: setAxisAngle, environment: var1
        var0 = arg0;
        var2 = arg1;
        var3 = arg2;
        var1 = 0.5;
        var3 = var3 * var1;
        var1 = global;
        var5 = var1.Math;
        var4 = var5.sin;
        var5 = var4.bind(var5)(var3);
        var6 = 0;
        var4 = var2[var6];
        var4 = var5 * var4;
        var0[var6] = var4;
        var6 = 1;
        var4 = var2[var6];
        var4 = var5 * var4;
        var0[var6] = var4;
        var4 = 2;
        var2 = var2[var4];
        var2 = var5 * var2;
        var0[var4] = var2;
        var2 = var1.Math;
        var1 = var2.cos;
        var2 = var1.bind(var2)(var3);
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot14 = var5;
    var9 = function(arg0, arg1, arg2) { // Original name: multiply, environment: var1
        var0 = arg0;
        var1 = arg1;
        var7 = arg2;
        var13 = 0;
        var8 = var1[var13];
        var12 = 1;
        var6 = var1[var12];
        var11 = 2;
        var4 = var1[var11];
        var2 = 3;
        var9 = var1[var2];
        var5 = var7[var13];
        var3 = var7[var12];
        var1 = var7[var11];
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
    var8 = function(arg0, arg1) { // Original name: exp, environment: var1
        _fun86723: for (var _fun86723_ip = 0;;) switch (_fun86723_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var11 = 0;
                var10 = var1[var11];
                var9 = 1;
                var8 = var1[var9];
                var6 = 2;
                var7 = var1[var6];
                var2 = 3;
                var12 = var1[var2];
                var1 = global;
                var5 = var1.Math;
                var4 = var5.sqrt;
                var13 = var10 * var10;
                var3 = var8 * var8;
                var13 = var13 + var3;
                var3 = var7 * var7;
                var3 = var13 + var3;
                var5 = var4.bind(var5)(var3);
                var4 = var1.Math;
                var3 = var4.exp;
                var3 = var3.bind(var4)(var12);
                var12 = var5 > var11;
                var4 = 0;
                if (!var12) {
                    _fun86723_ip = 123;
                    continue _fun86723
                }
            case 98:
                var13 = var1.Math;
                var12 = var13.sin;
                var12 = var12.bind(var13)(var5);
                var12 = var3 * var12;
                var4 = var12 / var5;
            case 123:
                var10 = var10 * var4;
                var0[var11] = var10;
                var8 = var8 * var4;
                var0[var9] = var8;
                var4 = var7 * var4;
                var0[var6] = var4;
                var4 = var1.Math;
                var1 = var4.cos;
                var1 = var1.bind(var4)(var5);
                var1 = var3 * var1;
                var0[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var8;
    var6 = function(arg0, arg1) { // Original name: ln, environment: var1
        _fun86724: for (var _fun86724_ip = 0;;) switch (_fun86724_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var11 = 0;
                var7 = var1[var11];
                var10 = 1;
                var6 = var1[var10];
                var8 = 2;
                var5 = var1[var8];
                var2 = 3;
                var1 = var1[var2];
                var3 = global;
                var12 = var3.Math;
                var9 = var12.sqrt;
                var13 = var7 * var7;
                var4 = var6 * var6;
                var13 = var13 + var4;
                var4 = var5 * var5;
                var4 = var13 + var4;
                var12 = var9.bind(var12)(var4);
                var9 = var12 > var11;
                var4 = 0;
                if (!var9) {
                    _fun86724_ip = 103;
                    continue _fun86724
                }
            case 81:
                var13 = var3.Math;
                var9 = var13.atan2;
                var9 = var9.bind(var13)(var12, var1);
                var4 = var9 / var12;
            case 103:
                var9 = var7 * var4;
                var0[var11] = var9;
                var9 = var6 * var4;
                var0[var10] = var9;
                var4 = var5 * var4;
                var0[var8] = var4;
                var4 = var3.Math;
                var3 = var4.log;
                var7 = var7 * var7;
                var6 = var6 * var6;
                var6 = var7 + var6;
                var5 = var5 * var5;
                var5 = var6 + var5;
                var1 = var1 * var1;
                var1 = var5 + var1;
                var3 = var3.bind(var4)(var1);
                var1 = 0.5;
                var1 = var1 * var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot16 = var6;
    var4 = function(arg0, arg1, arg2, arg3) { // Original name: slerp, environment: var1
        _fun86725: for (var _fun86725_ip = 0;;) switch (_fun86725_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var1 = arg2;
                var20 = arg3;
                var13 = 0;
                var14 = var3[var13];
                var10 = 1;
                var11 = var3[var10];
                var7 = 2;
                var8 = var3[var7];
                var2 = 3;
                var5 = var3[var2];
                var16 = var1[var13];
                var15 = var1[var10];
                var3 = var1[var7];
                var1 = var1[var2];
                var6 = var14 * var16;
                var4 = var11 * var15;
                var6 = var6 + var4;
                var4 = var8 * var3;
                var6 = var6 + var4;
                var4 = var5 * var1;
                var18 = var6 + var4;
                var12 = var16;
                var9 = var15;
                var6 = var3;
                var4 = var1;
                var17 = var18;
                if (!(var17 < var13)) {
                    _fun86725_ip = 117;
                    continue _fun86725
                }
            case 102:
                var17 = -var18;
                var12 = -var16;
                var9 = -var15;
                var6 = -var3;
                var4 = -var1;
            case 117:
                var3 = var10 - var17;
                var1 = _closure1_slot0;
                var1 = var1.EPSILON;
                if (!(!(var3 > var1))) {
                    _fun86725_ip = 147;
                    continue _fun86725
                }
            case 138:
                var3 = var10 - var20;
                var1 = var20;
                _fun86725_ip = 237;
                continue _fun86725;
            case 147:
                var18 = global;
                var16 = var18.Math;
                var15 = var16.acos;
                var15 = var15.bind(var16)(var17);
                var17 = var18.Math;
                var16 = var17.sin;
                var17 = var16.bind(var17)(var15);
                var21 = var18.Math;
                var19 = var21.sin;
                var16 = var10 - var20;
                var16 = var16 * var15;
                var16 = var19.bind(var21)(var16);
                var3 = var16 / var17;
                var19 = var18.Math;
                var18 = var19.sin;
                var15 = var20 * var15;
                var15 = var18.bind(var19)(var15);
                var1 = var15 / var17;
            case 237:
                var14 = var3 * var14;
                var12 = var1 * var12;
                var12 = var14 + var12;
                var0[var13] = var12;
                var11 = var3 * var11;
                var9 = var1 * var9;
                var9 = var11 + var9;
                var0[var10] = var9;
                var8 = var3 * var8;
                var6 = var1 * var6;
                var6 = var8 + var6;
                var0[var7] = var6;
                var3 = var3 * var5;
                var1 = var1 * var4;
                var1 = var3 + var1;
                var0[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var7 = function(arg0, arg1) { // Original name: fromMat3, environment: var1
        _fun86726: for (var _fun86726_ip = 0;;) switch (_fun86726_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var6 = 0;
                var2 = var5[var6];
                var3 = 4;
                var1 = var5[var3];
                var4 = var2 + var1;
                var2 = 8;
                var1 = var5[var2];
                var1 = var4 + var1;
                if (!(!(var1 > var6))) {
                    _fun86726_ip = 287;
                    continue _fun86726
                }
            case 41:
                var4 = var5[var3];
                var3 = var5[var6];
                var3 = var4 > var3;
                var8 = 0;
                if (!var3) {
                    _fun86726_ip = 61;
                    continue _fun86726
                }
            case 58:
                var8 = 1;
            case 61:
                var3 = var5[var2];
                var12 = 3;
                var2 = var12 * var8;
                var2 = var2 + var8;
                var2 = var5[var2];
                if (!(var3 > var2)) {
                    _fun86726_ip = 87;
                    continue _fun86726
                }
            case 84:
                var8 = 2;
            case 87:
                var14 = 1;
                var2 = var8 + var14;
                var10 = var2 % var12;
                var2 = 2;
                var2 = var8 + var2;
                var3 = var2 % var12;
                var2 = global;
                var13 = var2.Math;
                var11 = var13.sqrt;
                var2 = var12 * var8;
                var4 = var2 + var8;
                var7 = var5[var4];
                var9 = var12 * var10;
                var4 = var9 + var10;
                var4 = var5[var4];
                var15 = var7 - var4;
                var7 = var12 * var3;
                var4 = var7 + var3;
                var4 = var5[var4];
                var4 = var15 - var4;
                var4 = var4 + var14;
                var11 = var11.bind(var13)(var4);
                var4 = 0.5;
                var13 = var4 * var11;
                var0[var8] = var13;
                var4 = var4 / var11;
                var11 = var9 + var3;
                var13 = var5[var11];
                var11 = var7 + var10;
                var11 = var5[var11];
                var11 = var13 - var11;
                var11 = var11 * var4;
                var0[var12] = var11;
                var9 = var9 + var8;
                var11 = var5[var9];
                var9 = var2 + var10;
                var9 = var5[var9];
                var9 = var11 + var9;
                var9 = var9 * var4;
                var0[var10] = var9;
                var7 = var7 + var8;
                var7 = var5[var7];
                var2 = var2 + var3;
                var2 = var5[var2];
                var2 = var7 + var2;
                var2 = var2 * var4;
                var0[var3] = var2;
                _fun86726_ip = 410;
                continue _fun86726;
            case 287:
                var2 = global;
                var3 = var2.Math;
                var2 = var3.sqrt;
                var4 = 1;
                var1 = var1 + var4;
                var3 = var2.bind(var3)(var1);
                var2 = 0.5;
                var7 = var2 * var3;
                var1 = 3;
                var0[var1] = var7;
                var3 = var2 / var3;
                var2 = 5;
                var7 = var5[var2];
                var2 = 7;
                var2 = var5[var2];
                var2 = var7 - var2;
                var2 = var2 * var3;
                var0[var6] = var2;
                var2 = 6;
                var7 = var5[var2];
                var2 = 2;
                var6 = var5[var2];
                var6 = var7 - var6;
                var6 = var6 * var3;
                var0[var4] = var6;
                var4 = var5[var4];
                var1 = var5[var1];
                var1 = var4 - var1;
                var1 = var1 * var3;
                var0[var2] = var1;
            case 410:
                return var0;
        }
    };
    var _closure1_slot18 = var7;
    var0 = global;
    var14 = var0.Object;
    var13 = var14.defineProperty;
    var10 = {};
    var0 = true;
    var10.value = var0;
    var0 = '__esModule';
    var0 = var13.bind(var14)(var2, var0, var10);
    var0 = undefined;
    var2.add = var0;
    var10 = function(arg0, arg1) { // Original name: calculateW, environment: var1
        var0 = arg0;
        var1 = arg1;
        var3 = 0;
        var7 = var1[var3];
        var8 = 1;
        var6 = var1[var8];
        var2 = 2;
        var1 = var1[var2];
        var0[var3] = var7;
        var0[var8] = var6;
        var0[var2] = var1;
        var4 = global;
        var3 = var4.Math;
        var2 = var3.sqrt;
        var5 = var4.Math;
        var4 = var5.abs;
        var7 = var7 * var7;
        var7 = var8 - var7;
        var6 = var6 * var6;
        var6 = var7 - var6;
        var1 = var1 * var1;
        var1 = var6 - var1;
        var1 = var4.bind(var5)(var1);
        var2 = var2.bind(var3)(var1);
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.calculateW = var10;
    var2.clone = var0;
    var10 = function(arg0, arg1) { // Original name: conjugate, environment: var1
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
        var0[var2] = var1;
        return var0;
    };
    var2.conjugate = var10;
    var2.copy = var0;
    var2.create = var3;
    var2.dot = var0;
    var10 = function(arg0, arg1) { // Original name: equals, environment: var1
        var0 = global;
        var3 = var0.Math;
        var2 = var3.abs;
        var6 = _closure1_slot2;
        var5 = var6.dot;
        var4 = arg0;
        var1 = arg1;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var2.bind(var3)(var1);
        var0 = _closure1_slot0;
        var2 = var0.EPSILON;
        var0 = 1;
        var0 = var0 - var2;
        var0 = var1 >= var0;
        return var0;
    };
    var2.equals = var10;
    var2.exactEquals = var0;
    var2.exp = var8;
    var8 = function(arg0, arg1, arg2, arg3) { // Original name: fromEuler, environment: var1
        _fun86730: for (var _fun86730_ip = 0;;) switch (_fun86730_ip) {
            case 0:
                var0 = arg0;
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 4;
                if (!(var3 > var1)) {
                    _fun86730_ip = 25;
                    continue _fun86730
                }
            case 17:
                var3 = arguments[var1];
                if (!(var4 === var3)) {
                    _fun86730_ip = 40;
                    continue _fun86730
                }
            case 25:
                var3 = _closure1_slot0;
                var8 = var3.ANGLE_ORDER;
                _fun86730_ip = 44;
                continue _fun86730;
            case 40:
                var8 = arguments[var1];
            case 44:
                var7 = global;
                var1 = var7.Math;
                var2 = var1.PI;
                var1 = 360;
                var2 = var2 / var1;
                var1 = arg1;
                var3 = var1 * var2;
                var1 = arg3;
                var10 = var1 * var2;
                var1 = arg2;
                var5 = var1 * var2;
                var2 = var7.Math;
                var1 = var2.sin;
                var4 = var1.bind(var2)(var3);
                var2 = var7.Math;
                var1 = var2.cos;
                var6 = var1.bind(var2)(var3);
                var2 = var7.Math;
                var1 = var2.sin;
                var1 = var1.bind(var2)(var5);
                var3 = var7.Math;
                var2 = var3.cos;
                var2 = var2.bind(var3)(var5);
                var5 = var7.Math;
                var3 = var5.sin;
                var3 = var3.bind(var5)(var10);
                var9 = var7.Math;
                var5 = var9.cos;
                var5 = var5.bind(var9)(var10);
                var9 = 'xyz';
                if (!(var9 !== var8)) {
                    _fun86730_ip = 859;
                    continue _fun86730
                }
            case 202:
                var9 = 'xzy';
                if (!(var9 !== var8)) {
                    _fun86730_ip = 750;
                    continue _fun86730
                }
            case 215:
                var9 = 'yxz';
                if (!(var9 !== var8)) {
                    _fun86730_ip = 638;
                    continue _fun86730
                }
            case 228:
                var9 = 'yzx';
                if (!(var9 !== var8)) {
                    _fun86730_ip = 526;
                    continue _fun86730
                }
            case 241:
                var9 = 'zxy';
                if (!(var9 !== var8)) {
                    _fun86730_ip = 414;
                    continue _fun86730
                }
            case 254:
                var9 = 'zyx';
                if (!(var9 !== var8)) {
                    _fun86730_ip = 302;
                    continue _fun86730
                }
            case 264:
                var9 = var7.Error;
                var7 = 'Unknown angle order ';
                var11 = var7 + var8;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var12 = var8;
                var7 = new var12[var9](var11, var10);
                var7 = var7 instanceof Object ? var7 : var8;
                throw var7;
            case 302:
                var7 = var4 * var2;
                var8 = var7 * var5;
                var7 = var6 * var1;
                var7 = var7 * var3;
                var8 = var8 - var7;
                var7 = 0;
                var0[var7] = var8;
                var7 = var6 * var1;
                var8 = var7 * var5;
                var7 = var4 * var2;
                var7 = var7 * var3;
                var8 = var8 + var7;
                var7 = 1;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var3;
                var7 = var4 * var1;
                var7 = var7 * var5;
                var8 = var8 - var7;
                var7 = 2;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var5;
                var7 = var4 * var1;
                var7 = var7 * var3;
                var8 = var8 + var7;
                var7 = 3;
                var0[var7] = var8;
                _fun86730_ip = 966;
                continue _fun86730;
            case 414:
                var7 = var4 * var2;
                var8 = var7 * var5;
                var7 = var6 * var1;
                var7 = var7 * var3;
                var8 = var8 - var7;
                var7 = 0;
                var0[var7] = var8;
                var7 = var6 * var1;
                var8 = var7 * var5;
                var7 = var4 * var2;
                var7 = var7 * var3;
                var8 = var8 + var7;
                var7 = 1;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var3;
                var7 = var4 * var1;
                var7 = var7 * var5;
                var8 = var8 + var7;
                var7 = 2;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var5;
                var7 = var4 * var1;
                var7 = var7 * var3;
                var8 = var8 - var7;
                var7 = 3;
                var0[var7] = var8;
                _fun86730_ip = 966;
                continue _fun86730;
            case 526:
                var7 = var4 * var2;
                var8 = var7 * var5;
                var7 = var6 * var1;
                var7 = var7 * var3;
                var8 = var8 + var7;
                var7 = 0;
                var0[var7] = var8;
                var7 = var6 * var1;
                var8 = var7 * var5;
                var7 = var4 * var2;
                var7 = var7 * var3;
                var8 = var8 + var7;
                var7 = 1;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var3;
                var7 = var4 * var1;
                var7 = var7 * var5;
                var8 = var8 - var7;
                var7 = 2;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var5;
                var7 = var4 * var1;
                var7 = var7 * var3;
                var8 = var8 - var7;
                var7 = 3;
                var0[var7] = var8;
                _fun86730_ip = 966;
                continue _fun86730;
            case 638:
                var7 = var4 * var2;
                var8 = var7 * var5;
                var7 = var6 * var1;
                var7 = var7 * var3;
                var8 = var8 + var7;
                var7 = 0;
                var0[var7] = var8;
                var7 = var6 * var1;
                var8 = var7 * var5;
                var7 = var4 * var2;
                var7 = var7 * var3;
                var8 = var8 - var7;
                var7 = 1;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var3;
                var7 = var4 * var1;
                var7 = var7 * var5;
                var8 = var8 - var7;
                var7 = 2;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var5;
                var7 = var4 * var1;
                var7 = var7 * var3;
                var8 = var8 + var7;
                var7 = 3;
                var0[var7] = var8;
                _fun86730_ip = 966;
                continue _fun86730;
            case 750:
                var7 = var4 * var2;
                var8 = var7 * var5;
                var7 = var6 * var1;
                var7 = var7 * var3;
                var8 = var8 - var7;
                var7 = 0;
                var0[var7] = var8;
                var7 = var6 * var1;
                var8 = var7 * var5;
                var7 = var4 * var2;
                var7 = var7 * var3;
                var8 = var8 - var7;
                var7 = 1;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var3;
                var7 = var4 * var1;
                var7 = var7 * var5;
                var8 = var8 + var7;
                var7 = 2;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var5;
                var7 = var4 * var1;
                var7 = var7 * var3;
                var8 = var8 + var7;
                var7 = 3;
                var0[var7] = var8;
                _fun86730_ip = 966;
                continue _fun86730;
            case 859:
                var7 = var4 * var2;
                var8 = var7 * var5;
                var7 = var6 * var1;
                var7 = var7 * var3;
                var8 = var8 + var7;
                var7 = 0;
                var0[var7] = var8;
                var7 = var6 * var1;
                var8 = var7 * var5;
                var7 = var4 * var2;
                var7 = var7 * var3;
                var8 = var8 - var7;
                var7 = 1;
                var0[var7] = var8;
                var7 = var6 * var2;
                var8 = var7 * var3;
                var7 = var4 * var1;
                var7 = var7 * var5;
                var8 = var8 + var7;
                var7 = 2;
                var0[var7] = var8;
                var2 = var6 * var2;
                var2 = var2 * var5;
                var1 = var4 * var1;
                var1 = var1 * var3;
                var2 = var2 - var1;
                var1 = 3;
                var0[var1] = var2;
            case 966:
                return var0;
        }
    };
    var2.fromEuler = var8;
    var2.fromMat3 = var7;
    var2.fromValues = var0;
    var7 = function(arg0, arg1) { // Original name: getAngle, environment: var1
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var3 = var3.bind(var2)(var1, var0);
        var0 = global;
        var2 = var0.Math;
        var1 = var2.acos;
        var0 = 2;
        var0 = var0 * var3;
        var3 = var0 * var3;
        var0 = 1;
        var0 = var3 - var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getAngle = var7;
    var7 = function(arg0, arg1) { // Original name: getAxisAngle, environment: var1
        _fun86732: for (var _fun86732_ip = 0;;) switch (_fun86732_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var4 = global;
                var5 = var4.Math;
                var2 = var5.acos;
                var0 = 3;
                var0 = var1[var0];
                var0 = var2.bind(var5)(var0);
                var2 = 2;
                var0 = var2 * var0;
                var6 = var4.Math;
                var5 = var6.sin;
                var4 = var0 / var2;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot0;
                var5 = var5.EPSILON;
                if (!(!(var4 > var5))) {
                    _fun86732_ip = 96;
                    continue _fun86732
                }
            case 77:
                var6 = 1;
                var5 = 0;
                var3[var5] = var6;
                var3[var6] = var5;
                var3[var2] = var5;
                _fun86732_ip = 137;
                continue _fun86732;
            case 96:
                var6 = 0;
                var5 = var1[var6];
                var5 = var5 / var4;
                var3[var6] = var5;
                var6 = 1;
                var5 = var1[var6];
                var5 = var5 / var4;
                var3[var6] = var5;
                var1 = var1[var2];
                var1 = var1 / var4;
                var3[var2] = var1;
            case 137:
                return var0;
        }
    };
    var2.getAxisAngle = var7;
    var7 = function(arg0) { // Original name: identity, environment: var1
        var0 = arg0;
        var3 = 0;
        var0[var3] = var3;
        var2 = 1;
        var0[var2] = var3;
        var1 = 2;
        var0[var1] = var3;
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.identity = var7;
    var7 = function(arg0, arg1) { // Original name: invert, environment: var1
        _fun86734: for (var _fun86734_ip = 0;;) switch (_fun86734_ip) {
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
                var10 = var10 + var1;
                var1 = 0;
                if (!var10) {
                    _fun86734_ip = 70;
                    continue _fun86734
                }
            case 66:
                var1 = var7 / var10;
            case 70:
                var8 = -var8;
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
    var2.invert = var7;
    var2.len = var0;
    var2.length = var0;
    var2.lerp = var0;
    var2.ln = var6;
    var2.mul = var0;
    var2.multiply = var9;
    var2.normalize = var0;
    var6 = function(arg0, arg1, arg2) { // Original name: pow, environment: var1
        var0 = arg0;
        var4 = _closure1_slot16;
        var2 = undefined;
        var3 = arg1;
        var3 = var4.bind(var2)(var0, var3);
        var4 = _closure1_slot3;
        var3 = arg2;
        var3 = var4.bind(var2)(var0, var0, var3);
        var1 = _closure1_slot15;
        var1 = var1.bind(var2)(var0, var0);
        return var0;
    };
    var2.pow = var6;
    var6 = function(arg0) { // Original name: random, environment: var1
        var0 = arg0;
        var3 = _closure1_slot0;
        var2 = var3.RANDOM;
        var6 = var2.bind(var3)();
        var3 = _closure1_slot0;
        var2 = var3.RANDOM;
        var10 = var2.bind(var3)();
        var2 = _closure1_slot0;
        var1 = var2.RANDOM;
        var5 = var1.bind(var2)();
        var1 = global;
        var7 = var1.Math;
        var3 = var7.sqrt;
        var4 = 1;
        var2 = var4 - var6;
        var7 = var3.bind(var7)(var2);
        var3 = var1.Math;
        var2 = var3.sqrt;
        var2 = var2.bind(var3)(var6);
        var9 = var1.Math;
        var8 = var9.sin;
        var3 = var1.Math;
        var3 = var3.PI;
        var6 = 2;
        var3 = var6 * var3;
        var3 = var3 * var10;
        var3 = var8.bind(var9)(var3);
        var8 = var7 * var3;
        var3 = 0;
        var0[var3] = var8;
        var9 = var1.Math;
        var8 = var9.cos;
        var3 = var1.Math;
        var3 = var3.PI;
        var3 = var6 * var3;
        var3 = var3 * var10;
        var3 = var8.bind(var9)(var3);
        var3 = var7 * var3;
        var0[var4] = var3;
        var7 = var1.Math;
        var4 = var7.sin;
        var3 = var1.Math;
        var3 = var3.PI;
        var3 = var6 * var3;
        var3 = var3 * var5;
        var3 = var4.bind(var7)(var3);
        var3 = var2 * var3;
        var0[var6] = var3;
        var4 = var1.Math;
        var3 = var4.cos;
        var1 = var1.Math;
        var1 = var1.PI;
        var1 = var6 * var1;
        var1 = var1 * var5;
        var1 = var3.bind(var4)(var1);
        var2 = var2 * var1;
        var1 = 3;
        var0[var1] = var2;
        return var0;
    };
    var2.random = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: rotateX, environment: var1
        var0 = arg0;
        var1 = arg1;
        var3 = arg2;
        var2 = 0.5;
        var12 = var3 * var2;
        var11 = 0;
        var4 = var1[var11];
        var10 = 1;
        var6 = var1[var10];
        var7 = 2;
        var8 = var1[var7];
        var2 = 3;
        var5 = var1[var2];
        var3 = global;
        var9 = var3.Math;
        var1 = var9.sin;
        var1 = var1.bind(var9)(var12);
        var9 = var3.Math;
        var3 = var9.cos;
        var3 = var3.bind(var9)(var12);
        var12 = var4 * var3;
        var9 = var5 * var1;
        var9 = var12 + var9;
        var0[var11] = var9;
        var11 = var6 * var3;
        var9 = var8 * var1;
        var9 = var11 + var9;
        var0[var10] = var9;
        var8 = var8 * var3;
        var6 = var6 * var1;
        var6 = var8 - var6;
        var0[var7] = var6;
        var3 = var5 * var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var2.rotateX = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: rotateY, environment: var1
        var0 = arg0;
        var1 = arg1;
        var3 = arg2;
        var2 = 0.5;
        var12 = var3 * var2;
        var11 = 0;
        var6 = var1[var11];
        var10 = 1;
        var4 = var1[var10];
        var7 = 2;
        var8 = var1[var7];
        var2 = 3;
        var5 = var1[var2];
        var3 = global;
        var9 = var3.Math;
        var1 = var9.sin;
        var1 = var1.bind(var9)(var12);
        var9 = var3.Math;
        var3 = var9.cos;
        var3 = var3.bind(var9)(var12);
        var12 = var6 * var3;
        var9 = var8 * var1;
        var9 = var12 - var9;
        var0[var11] = var9;
        var11 = var4 * var3;
        var9 = var5 * var1;
        var9 = var11 + var9;
        var0[var10] = var9;
        var8 = var8 * var3;
        var6 = var6 * var1;
        var6 = var8 + var6;
        var0[var7] = var6;
        var3 = var5 * var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var2.rotateY = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: rotateZ, environment: var1
        var0 = arg0;
        var1 = arg1;
        var3 = arg2;
        var2 = 0.5;
        var12 = var3 * var2;
        var11 = 0;
        var6 = var1[var11];
        var8 = 1;
        var9 = var1[var8];
        var7 = 2;
        var4 = var1[var7];
        var2 = 3;
        var5 = var1[var2];
        var3 = global;
        var10 = var3.Math;
        var1 = var10.sin;
        var1 = var1.bind(var10)(var12);
        var10 = var3.Math;
        var3 = var10.cos;
        var3 = var3.bind(var10)(var12);
        var12 = var6 * var3;
        var10 = var9 * var1;
        var10 = var12 + var10;
        var0[var11] = var10;
        var9 = var9 * var3;
        var6 = var6 * var1;
        var6 = var9 - var6;
        var0[var8] = var6;
        var8 = var4 * var3;
        var6 = var5 * var1;
        var6 = var8 + var6;
        var0[var7] = var6;
        var3 = var5 * var3;
        var1 = var4 * var1;
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var2.rotateZ = var6;
    var2.rotationTo = var0;
    var2.scale = var0;
    var2.set = var0;
    var2.setAxes = var0;
    var2.setAxisAngle = var5;
    var2.slerp = var4;
    var2.sqlerp = var0;
    var2.sqrLen = var0;
    var2.squaredLength = var0;
    var4 = function(arg0) { // Original name: str, environment: var1
        var3 = arg0;
        var0 = 0;
        var1 = var3[var0];
        var0 = 'quat(';
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
    var5 = _closure1_slot13;
    var8 = 0;
    var4 = var12[var8];
    var4 = var11.bind(var0)(var4);
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var5 = _closure1_slot13;
    var7 = 1;
    var4 = var12[var7];
    var4 = var11.bind(var0)(var4);
    var4 = var5.bind(var0)(var4);
    var6 = _closure1_slot13;
    var5 = 2;
    var5 = var12[var5];
    var5 = var11.bind(var0)(var5);
    var6 = var6.bind(var0)(var5);
    var _closure1_slot1 = var6;
    var10 = _closure1_slot13;
    var5 = 3;
    var5 = var12[var5];
    var5 = var11.bind(var0)(var5);
    var5 = var10.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var10 = var5.clone;
    var2.clone = var10;
    var10 = var5.fromValues;
    var2.fromValues = var10;
    var10 = var5.copy;
    var2.copy = var10;
    var10 = var5.set;
    var2.set = var10;
    var10 = var5.add;
    var2.add = var10;
    var2.mul = var9;
    var9 = var5.scale;
    var2.scale = var9;
    var _closure1_slot3 = var9;
    var9 = var5.dot;
    var2.dot = var9;
    var _closure1_slot4 = var9;
    var9 = var5.lerp;
    var2.lerp = var9;
    var9 = var5.length;
    var2.length = var9;
    var2.len = var9;
    var9 = var5.squaredLength;
    var2.squaredLength = var9;
    var2.sqrLen = var9;
    var9 = var5.normalize;
    var2.normalize = var9;
    var _closure1_slot5 = var9;
    var5 = var5.exactEquals;
    var2.exactEquals = var5;
    var5 = var6.create;
    var5 = var5.bind(var6)();
    var _closure1_slot6 = var5;
    var5 = var6.fromValues;
    var5 = var5.bind(var6)(var7, var8, var8);
    var _closure1_slot7 = var5;
    var5 = var6.fromValues;
    var5 = var5.bind(var6)(var8, var7, var8);
    var _closure1_slot8 = var5;
    var5 = function(arg0, arg1, arg2) { // Environment: var1
        _fun86741: for (var _fun86741_ip = 0;;) switch (_fun86741_ip) {
            case 0:
                var1 = arg0;
                var7 = arg1;
                var6 = arg2;
                var3 = _closure1_slot1;
                var0 = var3.dot;
                var3 = var0.bind(var3)(var7, var6);
                var0 = -0.999999;
                if (!(!(var3 < var0))) {
                    _fun86741_ip = 172;
                    continue _fun86741
                }
            case 45:
                var0 = 0.999999;
                if (!(!(var3 > var0))) {
                    _fun86741_ip = 137;
                    continue _fun86741
                }
            case 59:
                var5 = _closure1_slot1;
                var0 = var5.cross;
                var4 = _closure1_slot6;
                var0 = var0.bind(var5)(var4, var7, var6);
                var5 = 0;
                var0 = var4[var5];
                var1[var5] = var0;
                var0 = 1;
                var5 = var4[var0];
                var1[var0] = var5;
                var5 = 2;
                var4 = var4[var5];
                var1[var5] = var4;
                var3 = var0 + var3;
                var0 = 3;
                var1[var0] = var3;
                var3 = _closure1_slot5;
                var0 = undefined;
                var0 = var3.bind(var0)(var1, var1);
                _fun86741_ip = 167;
                continue _fun86741;
            case 137:
                var5 = 0;
                var1[var5] = var5;
                var4 = 1;
                var1[var4] = var5;
                var3 = 2;
                var1[var3] = var5;
                var3 = 3;
                var1[var3] = var4;
                var0 = var1;
            case 167:
                _fun86741_ip = 297;
                continue _fun86741;
            case 172:
                var5 = _closure1_slot1;
                var6 = var5.cross;
                var4 = _closure1_slot6;
                var3 = _closure1_slot7;
                var3 = var6.bind(var5)(var4, var3, var7);
                var3 = var5.len;
                var4 = var3.bind(var5)(var4);
                var3 = 1e-06;
                if (!(var4 < var3)) {
                    _fun86741_ip = 247;
                    continue _fun86741
                }
            case 222:
                var6 = _closure1_slot1;
                var5 = var6.cross;
                var4 = _closure1_slot6;
                var3 = _closure1_slot8;
                var3 = var5.bind(var6)(var4, var3, var7);
            case 247:
                var4 = _closure1_slot1;
                var3 = var4.normalize;
                var5 = _closure1_slot6;
                var3 = var3.bind(var4)(var5, var5);
                var4 = _closure1_slot14;
                var2 = global;
                var2 = var2.Math;
                var3 = var2.PI;
                var2 = undefined;
                var2 = var4.bind(var2)(var1, var5, var3);
                var0 = var1;
            case 297:
                return var0;
        }
    };
    var2.rotationTo = var5;
    var5 = var3.bind(var0)();
    var _closure1_slot9 = var5;
    var3 = var3.bind(var0)();
    var _closure1_slot10 = var3;
    var3 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
        var0 = arg0;
        var7 = arg5;
        var5 = _closure1_slot17;
        var4 = _closure1_slot9;
        var10 = arg1;
        var9 = arg4;
        var12 = undefined;
        var11 = var4;
        var8 = var7;
        var2 = var12[var5](var11, var10, var9, var8, var7);
        var2 = _closure1_slot10;
        var10 = arg2;
        var9 = arg3;
        var11 = var2;
        var8 = var7;
        var1 = var12[var5](var11, var10, var9, var8, var7);
        var1 = 2;
        var6 = var1 * var7;
        var1 = 1;
        var1 = var1 - var7;
        var8 = var6 * var1;
        var11 = var0;
        var10 = var4;
        var9 = var2;
        var1 = var12[var5](var11, var10, var9, var8, var7);
        return var0;
    };
    var2.sqlerp = var3;
    var3 = var4.create;
    var3 = var3.bind(var4)();
    var _closure1_slot11 = var3;
    var1 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        var2 = arg0;
        var3 = arg1;
        var8 = arg2;
        var7 = arg3;
        var4 = _closure1_slot11;
        var6 = 0;
        var1 = var8[var6];
        var4[var6] = var1;
        var5 = 1;
        var9 = var8[var5];
        var1 = 3;
        var4[var1] = var9;
        var1 = 2;
        var9 = var8[var1];
        var8 = 6;
        var4[var8] = var9;
        var8 = var7[var6];
        var4[var5] = var8;
        var9 = var7[var5];
        var8 = 4;
        var4[var8] = var9;
        var8 = var7[var1];
        var7 = 7;
        var4[var7] = var8;
        var6 = var3[var6];
        var6 = -var6;
        var4[var1] = var6;
        var5 = var3[var5];
        var6 = -var5;
        var5 = 5;
        var4[var5] = var6;
        var1 = var3[var1];
        var3 = -var1;
        var1 = 8;
        var4[var1] = var3;
        var1 = _closure1_slot5;
        var3 = _closure1_slot18;
        var0 = undefined;
        var3 = var3.bind(var0)(var2, var4);
        var0 = var1.bind(var0)(var2, var2);
        return var0;
    };
    var2.setAxes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11163, 11166, 11169, 11170]);