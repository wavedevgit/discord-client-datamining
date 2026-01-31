// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7315: for (var _fun7315_ip = 0;;) switch (_fun7315_ip) {
        case 0:
            var3 = function arg0() {
                var0 = global;
                var0 = var0.Object;
                var0 = var0.prototype;
                var2 = var0.toString;
                var1 = var2.call;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = '[object Arguments]';
                var0 = var0 == var1;
                return var0;
            };
            var2 = function arg0() {
                _fun7317: for (var _fun7317_ip = 0;;) switch (_fun7317_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = var4;
                        if (!var0) {
                            _fun7317_ip = 20;
                            continue _fun7317
                        }
                    case 9:
                        var2 = 'object';
                        var1 = typeof var4;
                        var0 = var2 === var1;
                    case 20:
                        if (!var0) {
                            _fun7317_ip = 39;
                            continue _fun7317
                        }
                    case 23:
                        var1 = var4.length;
                        var2 = 'number';
                        var1 = typeof var1;
                        var0 = var2 === var1;
                    case 39:
                        if (!var0) {
                            _fun7317_ip = 76;
                            continue _fun7317
                        }
                    case 42:
                        var1 = global;
                        var1 = var1.Object;
                        var1 = var1.prototype;
                        var3 = var1.hasOwnProperty;
                        var2 = var3.call;
                        var1 = 'callee';
                        var0 = var2.bind(var3)(var4, var1);
                    case 76:
                        if (!var0) {
                            _fun7317_ip = 116;
                            continue _fun7317
                        }
                    case 79:
                        var1 = global;
                        var1 = var1.Object;
                        var1 = var1.prototype;
                        var3 = var1.propertyIsEnumerable;
                        var2 = var3.call;
                        var1 = 'callee';
                        var1 = var2.bind(var3)(var4, var1);
                        var0 = !var1;
                    case 116:
                        if (var0) {
                            _fun7317_ip = 121;
                            continue _fun7317
                        }
                    case 119:
                        var0 = false;
                    case 121:
                        return var0;
                }
            };
            var1 = function() { // Environment: var0
                var0 = undefined;
                var1 = global;
                var1 = var1.Object;
                var1 = var1.prototype;
                var2 = var1.toString;
                var1 = var2.call;
                var0 = arguments;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = undefined;
            var5 = var1.bind(var0)();
            var4 = '[object Arguments]';
            var1 = var2;
            if (!(var4 == var5)) {
                _fun7315_ip = 37;
                continue _fun7315
            }
        case 34:
            var1 = var3;
        case 37:
            var4 = arg4;
            var4.exports = var1;
            var1.supported = var3;
            var1.unsupported = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);