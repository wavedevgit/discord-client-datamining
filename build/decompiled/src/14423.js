// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun112200: for (var _fun112200_ip = 0;;) switch (_fun112200_ip) {
        case 0:
            var5 = global;
            var3 = require;
            var4 = dependencyMap;
            var1 = 0;
            var2 = var4[var1];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var2 = var2.default;
            var5.IntlPolyfill = var2;
            var2 = 1;
            var2 = var4[var2];
            var2 = var3.bind(var0)(var2);
            var2 = var5.Intl;
            if (var2) {
                _fun112200_ip = 102;
                continue _fun112200
            }
        case 56:
            var2 = var4[var1];
            var2 = var3.bind(var0)(var2);
            var2 = var2.default;
            var5.Intl = var2;
            var2 = var4[var1];
            var2 = var3.bind(var0)(var2);
            var5 = var2.default;
            var2 = var5.__applyLocaleSensitivePrototypes;
            var2 = var2.bind(var5)();
        case 102:
            var2 = var4[var1];
            var2 = var3.bind(var0)(var2);
            var2 = var2.default;
            var5 = module;
            var5.exports = var2;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.default;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [14424, 553]);