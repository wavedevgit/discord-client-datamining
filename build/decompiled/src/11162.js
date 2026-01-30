// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function(arg0) { // Original name: _typeof, environment: var1
        _fun86558: for (var _fun86558_ip = 0;;) switch (_fun86558_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86558_ip = 42;
                    continue _fun86558
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun86558_ip = 51;
                    continue _fun86558
                }
            case 42:
                var2 = function(arg0) { // Environment: var0
                    _fun86560: for (var _fun86560_ip = 0;;) switch (_fun86560_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun86560_ip = 58;
                                continue _fun86560
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun86560_ip = 58;
                                continue _fun86560
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun86560_ip = 58;
                                continue _fun86560
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun86560_ip = 61;
                                continue _fun86560
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun86558_ip = 58;
                continue _fun86558;
            case 51:
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 58:
                _closure1_slot0 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot0 = var0;
    var0 = function(arg0, arg1) { // Original name: _interopRequireWildcard, environment: var1
        _fun86561: for (var _fun86561_ip = 0;;) switch (_fun86561_ip) {
            case 0:
                var1 = global;
                var2 = var1.WeakMap;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86561_ip = 81;
                    continue _fun86561
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
                    _fun86562: for (var _fun86562_ip = 0;;) switch (_fun86562_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            if (var2) {
                                _fun86562_ip = 23;
                                continue _fun86562
                            }
                        case 9:
                            if (!var3) {
                                _fun86562_ip = 23;
                                continue _fun86562
                            }
                        case 12:
                            var0 = var3.__esModule;
                            if (!var0) {
                                _fun86562_ip = 23;
                                continue _fun86562
                            }
                        case 21:
                            return var3;
                        case 23:
                            var1 = null;
                            var0 = Object.create(var1);
                            var0.default = var3;
                            if (!(var1 !== var3)) {
                                _fun86562_ip = 286;
                                continue _fun86562
                            }
                        case 39:
                            var1 = _closure1_slot0;
                            var12 = undefined;
                            var4 = var1.bind(var12)(var3);
                            var1 = 'object';
                            if (!(var1 != var4)) {
                                _fun86562_ip = 75;
                                continue _fun86562
                            }
                        case 61:
                            var4 = 'function';
                            var1 = typeof var3;
                            if (!(var4 === var1)) {
                                _fun86562_ip = 286;
                                continue _fun86562
                            }
                        case 75:
                            if (var2) {
                                _fun86562_ip = 87;
                                continue _fun86562
                            }
                        case 81:
                            var2 = _closure2_slot0;
                            _fun86562_ip = 91;
                            continue _fun86562;
                        case 87:
                            var2 = _closure2_slot1;
                        case 91:
                            if (!var2) {
                                _fun86562_ip = 121;
                                continue _fun86562
                            }
                        case 94:
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            if (var1) {
                                _fun86562_ip = 274;
                                continue _fun86562
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
                                        _fun86562_ip = 184;
                                        continue _fun86562
                                    }
                                    case 165: var14 = {};
                                    var16 = var14.hasOwnProperty;
                                    var14 = var16.call;
                                    var13 = var14.bind(var16)(var3, var15);
                                    case 184: if (!var13) {
                                        _fun86562_ip = 146;
                                        continue _fun86562
                                    }
                                    case 187: var13 = var6.Object;
                                    var14 = var13.defineProperty;
                                    var13 = var14;
                                    if (!var13) {
                                        _fun86562_ip = 222;
                                        continue _fun86562
                                    }
                                    case 204: var17 = var6.Object;
                                    var16 = var17.getOwnPropertyDescriptor;
                                    var13 = var16.bind(var17)(var3, var15);
                                    case 222: if (!var13) {
                                        _fun86562_ip = 241;
                                        continue _fun86562
                                    }
                                    case 225: var16 = var13.get;
                                    if (var16) {
                                        _fun86562_ip = 257;
                                        continue _fun86562
                                    }
                                    case 233: var16 = var13.set;
                                    if (var16) {
                                        _fun86562_ip = 257;
                                        continue _fun86562
                                    }
                                    case 241: var16 = var3[var15];
                                    var0[var15] = var16;
                                    var4 = var14;
                                    var1 = var13;
                                    _fun86562_ip = 146;
                                    continue _fun86562;
                                    case 257: var15 = var14.bind(var12)(var0, var15, var13);
                                    var4 = var14;
                                    var1 = var13;
                                    _fun86562_ip = 146;
                                    continue _fun86562;
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
                _closure1_slot1 = var3;
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = undefined;
    var2.glMatrix = var0;
    var2.mat2 = var0;
    var2.mat2d = var0;
    var2.mat3 = var0;
    var2.mat4 = var0;
    var2.quat = var0;
    var2.quat2 = var0;
    var2.vec2 = var0;
    var2.vec3 = var0;
    var2.vec4 = var0;
    var6 = _closure1_slot1;
    var3 = 0;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var2.glMatrix = var3;
    var6 = _closure1_slot1;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var2.mat2 = var3;
    var6 = _closure1_slot1;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var2.mat2d = var3;
    var6 = _closure1_slot1;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var2.mat3 = var3;
    var6 = _closure1_slot1;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var2.mat4 = var3;
    var6 = _closure1_slot1;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var2.quat = var3;
    var6 = _closure1_slot1;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var2.quat2 = var3;
    var6 = _closure1_slot1;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var2.vec2 = var3;
    var6 = _closure1_slot1;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var2.vec3 = var3;
    var3 = _closure1_slot1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var3.bind(var0)(var1);
    var2.vec4 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11163, 11164, 11165, 11166, 11167, 11168, 11171, 11172, 11169, 11170]);