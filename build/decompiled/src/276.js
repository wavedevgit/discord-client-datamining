// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun3426: for (var _fun3426_ip = 0;;) switch (_fun3426_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var0 = global;
            var6 = var0.Object;
            var3 = var6.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var6)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var3 = var1.default;
            var6 = null;
            if (!(var6 != var3)) {
                _fun3426_ip = 88;
                continue _fun3426
            }
        case 65:
            var1 = var3.reactProfilingEnabled;
            if (!(var6 != var1)) {
                _fun3426_ip = 88;
                continue _fun3426
            }
        case 75:
            var1 = var3.reactProfilingEnabled;
            var1 = var1.bind(var3)();
            if (var1) {
                _fun3426_ip = 102;
                continue _fun3426
            }
        case 88:
            var1 = 2;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            _fun3426_ip = 114;
            continue _fun3426;
        case 102:
            var3 = 1;
            var3 = var5[var3];
            var1 = var4.bind(var0)(var3);
        case 114:
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [277, 278, 279]);