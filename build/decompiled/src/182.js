// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2616: for (var _fun2616_ip = 0;;) switch (_fun2616_ip) {
        case 0:
            var1 = global;
            var3 = require;
            var4 = dependencyMap;
            var5 = var1.RN$useAlwaysAvailableJSErrorHandling;
            var2 = true;
            if (!(var2 !== var5)) {
                _fun2616_ip = 97;
                continue _fun2616
            }
        case 23:
            var2 = 0;
            var5 = var4[var2];
            var2 = undefined;
            var5 = var3.bind(var2)(var5);
            var6 = var5.default;
            var _closure1_slot0 = var6;
            var5 = var6.installConsoleErrorReporter;
            var5 = var5.bind(var6)();
            var1 = var1.__fbDisableExceptionsManager;
            if (var1) {
                _fun2616_ip = 97;
                continue _fun2616
            }
        case 64:
            var1 = 1;
            var1 = var4[var1];
            var1 = var3.bind(var2)(var1);
            var2 = var1.default;
            var1 = var2.setGlobalHandler;
            var0 = function(arg0, arg1) { // Original name: handleError, environment: var0
                _fun2617: for (var _fun2617_ip = 0;;) switch (_fun2617_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = arg1;
                    case 6: // try_start_0
                        var4 = _closure1_slot0;
                        var3 = var4.handleException;
                        var2 = var0;
                        var1 = var3.bind(var4)(var2, var1);
                    case 28: // try_end0
                        var1 = undefined;
                        return var1;
                    case 32: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2 = global;
                        var4 = var2.console;
                        var3 = var4.log;
                        var2 = var1.message;
                        var1 = 'Failed to print error: ';
                        var1 = var3.bind(var4)(var1, var2);
                        throw var0;
                }
            };
            var0 = var1.bind(var2)(var0);
        case 97:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [183, 70]);