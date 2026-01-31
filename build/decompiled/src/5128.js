// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun46032: for (var _fun46032_ip = 0;;) switch (_fun46032_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var0 = var3;
            if (!var0) {
                _fun46032_ip = 20;
                continue _fun46032
            }
        case 14:
            var0 = var3.__extends;
        case 20:
            if (var0) {
                _fun46032_ip = 37;
                continue _fun46032
            }
        case 23:
            var3 = function arg0, arg1() {
                _fun46033: for (var _fun46033_ip = 0;;) switch (_fun46033_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun46033_ip = 47;
                            continue _fun46033
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun46033_ip = 44;
                            continue _fun46033
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
                            _fun46033_ip = 55;
                            continue _fun46033
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun46035: for (var _fun46035_ip = 0;;) switch (_fun46035_ip) {
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
                                                _fun46035_ip = 19;
                                                continue _fun46035
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun46035_ip = 19;
                                            continue _fun46035;
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
            var0 = function(arg0, arg1) { // Environment: var1
                _fun46036: for (var _fun46036_ip = 0;;) switch (_fun46036_ip) {
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
                            _fun46036_ip = 34;
                            continue _fun46036
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun46036_ip = 114;
                            continue _fun46036
                        }
                    case 34:
                        var4 = _closure1_slot0;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun46036_ip = 88;
                            continue _fun46036
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
                        _fun46036_ip = 106;
                        continue _fun46036;
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
            var _closure1_slot1 = var0;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var3 = arg6;
            var0 = 0;
            var4 = var3[var0];
            var3 = arg1;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var3 = var3.Component;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() {
                    _fun46039: for (var _fun46039_ip = 0;;) switch (_fun46039_ip) {
                        case 0:
                            var1 = this;
                            var2 = undefined;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 !== var4;
                            if (!var0) {
                                _fun46039_ip = 38;
                                continue _fun46039
                            }
                        case 21:
                            var4 = _closure2_slot0;
                            var3 = var4.apply;
                            var2 = arguments;
                            var0 = var3.bind(var4)(var1, var2);
                        case 38:
                            if (var0) {
                                _fun46039_ip = 44;
                                continue _fun46039
                            }
                        case 41:
                            var0 = var1;
                        case 44:
                            return var0;
                    }
                };
                var3 = _closure1_slot1;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = null;
                    return var0;
                };
                var3.getScrollableNode = var2;
                var2 = var0.prototype;
                var1 = function() { // Environment: var1
                    var0 = null;
                    return var0;
                };
                var2.getNativeScrollRef = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);