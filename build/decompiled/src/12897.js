// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function(arg0, arg1) { // Original name: handleCallbackErrors, environment: var0
        _fun99256: for (var _fun99256_ip = 0;;) switch (_fun99256_ip) {
            case 0:
                var2 = undefined;
                var8 = undefined;
                var5 = arg0;
                var3 = arg1;
                var4 = undefined;
                var1 = undefined;
                var6 = arguments.length;
                var7 = 2;
                if (!(var6 > var7)) {
                    _fun99256_ip = 34;
                    continue _fun99256
                }
            case 26:
                var6 = arguments[var7];
                if (!(var2 === var6)) {
                    _fun99256_ip = 43;
                    continue _fun99256
                }
            case 34:
                var6 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                _fun99256_ip = 47;
                continue _fun99256;
            case 43:
                var6 = arguments[var7];
            case 47:
                var1 = var6;
            case 50: // try_start_0
                var4 = var5.bind(var2)();
            case 54: // try_end0
                var6 = var4;
                var5 = var3;
                var4 = var1;
                var0 = function(arg0, arg1, arg2) { // Original name: maybeHandlePromiseRejection, environment: var0
                    _fun99258: for (var _fun99258_ip = 0;;) switch (_fun99258_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg2;
                            var1 = arg1;
                            var _closure3_slot0 = var1;
                            var _closure3_slot1 = var2;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 0;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.isThenable;
                            var4 = var4.bind(var5)(var3);
                            if (var4) {
                                _fun99258_ip = 63;
                                continue _fun99258
                            }
                        case 57:
                            var1 = var2.bind(var1)();
                            return var3;
                        case 63:
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var0
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                var0 = arg0;
                                return var0;
                            };
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var3 = _closure3_slot0;
                                var2 = undefined;
                                var3 = var3.bind(var2)(var0);
                                var1 = _closure3_slot1;
                                var1 = var1.bind(var2)();
                                throw var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var0.bind(var2)(var6, var5, var4);
                return var0;
            case 79: // catch_target0
                CatchBlockStart(arg_register = 0);
                var3 = var3.bind(var2)(var0);
                var1 = var1.bind(var2)();
                throw var0;
        }
    };
    var1.handleCallbackErrors = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12824]);