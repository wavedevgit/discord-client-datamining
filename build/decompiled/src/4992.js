// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44918: for (var _fun44918_ip = 0;;) switch (_fun44918_ip) {
        case 0:
            var2 = exports;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var1 = dependencyMap;
            var0 = 0;
            var3 = var1[var0];
            var1 = require;
            var0 = undefined;
            var1 = var1.bind(var0)(var3);
            var5 = var1.NativeModules;
            var3 = var1.Platform;
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            if (var6) {
                _fun44918_ip = 83;
                continue _fun44918
            }
        case 77:
            var1 = var5.PlatformConstants;
        case 83:
            if (!(var4 == var1)) {
                _fun44918_ip = 93;
                continue _fun44918
            }
        case 87:
            var1 = var3.constants;
        case 93:
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);