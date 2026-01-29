// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun3231: for (var _fun3231_ip = 0;;) switch (_fun3231_ip) {
        case 0:
            var2 = global;
            var6 = var2.navigator;
            var0 = undefined;
            if (!(var0 !== var6)) {
                _fun3231_ip = 58;
                continue _fun3231
            }
        case 15:
            var3 = dependencyMap;
            var1 = 0;
            var3 = var3[var1];
            var1 = require;
            var5 = var1.bind(var0)(var3);
            var4 = var5.polyfillObjectProperty;
            var3 = 'product';
            var1 = function() { // Environment: var1
                var0 = 'ReactNative';
                return var0;
            };
            var1 = var4.bind(var5)(var6, var3, var1);
            _fun3231_ip = 75;
            continue _fun3231;
        case 58:
            var1 = {};
            var3 = 'ReactNative';
            var1.product = var3;
            var2.navigator = var1;
        case 75:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [126]);