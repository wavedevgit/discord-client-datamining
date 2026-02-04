// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96885: for (var _fun96885_ip = 0;;) switch (_fun96885_ip) {
        case 0:
            var2 = require;
            var4 = dependencyMap;
            var1 = 0;
            var3 = var4[var1];
            var0 = undefined;
            var3 = var2.bind(var0)(var3);
            var3 = var3.navigator;
            if (!var3) {
                _fun96885_ip = 49;
                continue _fun96885
            }
        case 28:
            var1 = var4[var1];
            var1 = var2.bind(var0)(var1);
            var1 = var1.navigator;
            var3 = var1.userAgent;
        case 49:
            var2 = '';
            if (!var3) {
                _fun96885_ip = 69;
                continue _fun96885
            }
        case 56:
            var1 = global;
            var1 = var1.String;
            var2 = var1.bind(var0)(var3);
        case 69:
            var1 = module;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12642]);