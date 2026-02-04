// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45810: for (var _fun45810_ip = 0;;) switch (_fun45810_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var1 = var3;
            if (!var1) {
                _fun45810_ip = 20;
                continue _fun45810
            }
        case 14:
            var1 = var3.__extends;
        case 20:
            if (var1) {
                _fun45810_ip = 37;
                continue _fun45810
            }
        case 23:
            var3 = function arg0, arg1() {
                _fun45811: for (var _fun45811_ip = 0;;) switch (_fun45811_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45811_ip = 47;
                            continue _fun45811
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45811_ip = 44;
                            continue _fun45811
                        }
                    case 39:
                        var1 = function(arg0, arg1) { // Environment: var0
                            var1 = arg1;
                            var0 = arg0;
                            var0.__proto__ = var1;
                            var0 = undefined;
                            return var0;
                        };
                    case 44:
                        var3 = var1;
                    case 47:
                        if (var3) {
                            _fun45811_ip = 55;
                            continue _fun45811
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45813: for (var _fun45813_ip = 0;;) switch (_fun45813_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var4 = var6;
                                    var0 = global;
                                    for (var1 in var4)
                                        case 19: {
                                            case 28: var9 = var1;
                                            var8 = var0.Object;
                                            var8 = var8.prototype;
                                            var10 = var8.hasOwnProperty;
                                            var8 = var10.call;
                                            var8 = var8.bind(var10)(var6, var9);
                                            if (!var8) {
                                                _fun45813_ip = 19;
                                                continue _fun45813
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45813_ip = 19;
                                            continue _fun45813;
                                        }
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                    case 55:
                        _closure1_slot0 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot0 = var3;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun45814: for (var _fun45814_ip = 0;;) switch (_fun45814_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var2;
                        var1 = function() {
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0.constructor = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var4 = 'function';
                        var0 = typeof var3;
                        if (!(var4 !== var0)) {
                            _fun45814_ip = 34;
                            continue _fun45814
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45814_ip = 114;
                            continue _fun45814
                        }
                    case 34:
                        var4 = _closure1_slot0;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45814_ip = 88;
                            continue _fun45814
                        }
                    case 55:
                        var4 = var3.prototype;
                        var1.prototype = var4;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var4;
                        var1 = new var8[var1](var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        _fun45814_ip = 106;
                        continue _fun45814;
                    case 88:
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.create;
                        var1 = var4.bind(var5)(var3);
                    case 106:
                        var2.prototype = var1;
                        return var0;
                    case 114:
                        var0 = global;
                        var2 = var0.TypeError;
                        var1 = var0.String;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var3);
                        var0 = 'Class extends value ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ' is not a constructor or null';
                        var7 = var3 + var0;
                        var8 = var1;
                        var0 = new var8[var2](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 37:
            var _closure1_slot1 = var1;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var3 = true;
            var4.value = var3;
            var3 = '__esModule';
            var3 = var5.bind(var6)(var2, var3, var4);
            var3 = var1.Error;
            var1 = function(arg0) { // Environment: var0
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = function arg0() {
                    _fun45817: for (var _fun45817_ip = 0;;) switch (_fun45817_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = this;
                            var4 = _closure2_slot0;
                            var3 = var4.call;
                            var0 = var1.message;
                            var0 = var3.bind(var4)(var2, var0);
                            if (var0) {
                                _fun45817_ip = 35;
                                continue _fun45817
                            }
                        case 32:
                            var0 = var2;
                        case 35:
                            var1 = var1.type;
                            var0.name = var1;
                            return var0;
                    }
                };
                var2 = _closure1_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var0, var3);
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);