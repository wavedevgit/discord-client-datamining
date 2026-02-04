// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34245: for (var _fun34245_ip = 0;;) switch (_fun34245_ip) {
        case 0:
            var2 = exports;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var4 = true;
            var3.value = var4;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var3);
            var3 = dependencyMap;
            var0 = 0;
            var5 = var3[var0];
            var3 = require;
            var0 = undefined;
            var3 = var3.bind(var0)(var5);
            var3 = var3.Platform;
            var3 = var1.process;
            var3 = var3.env;
            var3 = var3.JEST_WORKER_ID;
            var6 = !var3;
            var5 = !var6;
            var3 = var1.window;
            var1 = var5;
            if (!var6) {
                _fun34245_ip = 97;
                continue _fun34245
            }
        case 95:
            var1 = false;
        case 97:
            var2.IS_ANDROID = var4;
            var4 = false;
            var2.IS_IOS = var4;
            var2.IS_WEB = var4;
            var2.IS_JEST = var5;
            var2.IS_WINDOWS = var4;
            var4 = 'undefined';
            var3 = typeof var3;
            var3 = var4 !== var3;
            var2.IS_WINDOW_AVAILABLE = var3;
            var2.SHOULD_BE_USE_WEB = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);