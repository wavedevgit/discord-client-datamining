// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68272: for (var _fun68272_ip = 0;;) switch (_fun68272_ip) {
        case 0:
            var10 = exports;
            var5 = require;
            var1 = var10;
            var4 = dependencyMap;
            var0 = undefined;
            var2 = undefined;
            var3 = global;
            var9 = var3.Object;
            var8 = var9.defineProperty;
            var7 = {};
            var6 = true;
            var7.value = var6;
            var6 = '__esModule';
            var6 = var8.bind(var9)(var10, var6, var7);
            var2 = null;
        case 50: // try_start_0
            var7 = var5;
            var8 = var4;
            var6 = 0;
            var6 = var8[var6];
            var2 = var7.bind(var0)(var6);
        case 67: // try_end0
            _fun68272_ip = 112;
            continue _fun68272;
        case 69: // catch_target0
            CatchBlockStart(arg_register = 6);
        case 71: // try_start_1
            var6 = var4;
            var4 = 1;
            var4 = var6[var4];
            var2 = var5.bind(var0)(var4);
        case 86: // try_end1
            _fun68272_ip = 112;
            continue _fun68272;
        case 88: // catch_target1
            CatchBlockStart(arg_register = 4);
            var5 = var3.console;
            var4 = var5.warn;
            var3 = 'Failed to load REACore from both paths';
            var3 = var4.bind(var5)(var3);
        case 112:
            var3 = var2.registerEventHandler;
            var2 = var2.unregisterEventHandler;
            var1.registerEventHandler = var3;
            var1.unregisterEventHandler = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3724, null]);