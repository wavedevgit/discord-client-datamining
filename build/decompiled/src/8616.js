// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = var3.useCallback;
    var _closure1_slot0 = var3;
    var1 = function() {
        _fun69084: for (var _fun69084_ip = 0;;) switch (_fun69084_ip) {
            case 0:
                var3 = undefined;
                var5 = undefined;
                var4 = arguments.length;
                var1 = global;
                var1 = var1.Array;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var2;
                var8 = var4;
                var1 = new var9[var1](var8, var7);
                var2 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot0 = var2;
                var1 = 0;
                var6 = var1 < var4;
                if (!var6) {
                    _fun69084_ip = 68;
                    continue _fun69084
                }
            case 53:
                var6 = arguments[var1];
                var2[var1] = var6;
                var1 = var1 + 1;
                if (var1 < var4) {
                    _fun69084_ip = 53;
                    continue _fun69084
                }
            case 68:
                var1 = _closure1_slot0;
                var0 = function(arg0) { // Environment: var0
                    _fun69085: for (var _fun69085_ip = 0;;) switch (_fun69085_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = undefined;
                            var5 = undefined;
                            var1 = _closure2_slot0;
                            var3 = var1;
                            var2 = var3[Symbol.iterator];
                            var3 = var2().next;
                            var1 = 'function';
                        case 24:
                            var6 = var3().value;
                            var7 = var2;
                            if (!(var7 !== var0)) {
                                _fun69085_ip = 85;
                                continue _fun69085
                            }
                        case 35: // try_start_0
                            var5 = var6;
                            if (!var6) {
                                _fun69085_ip = 76;
                                continue _fun69085
                            }
                        case 41:
                            var6 = var5;
                            var6 = typeof var6;
                            if (!(var1 !== var6)) {
                                _fun69085_ip = 65;
                                continue _fun69085
                            }
                        case 51:
                            var7 = var5;
                            var6 = var4;
                            var7.current = var6;
                            _fun69085_ip = 76;
                            continue _fun69085;
                        case 65:
                            var7 = var5;
                            var6 = var4;
                            var6 = var7.bind(var0)(var6);
                        case 76: // try_end0
                            _fun69085_ip = 24;
                            continue _fun69085;
                        case 78: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 85:
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);