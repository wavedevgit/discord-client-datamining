// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7035: for (var _fun7035_ip = 0;;) switch (_fun7035_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var1 = 0;
            var2 = var5[var1];
            var0 = undefined;
            var3 = var4.bind(var0)(var2);
            if (!var3) {
                _fun7035_ip = 37;
                continue _fun7035
            }
        case 22:
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var3 = var1.isTypedArray;
        case 37:
            if (var3) {
                _fun7035_ip = 54;
                continue _fun7035
            }
        case 40:
            var1 = 2;
            var1 = var5[var1];
            var2 = var4.bind(var0)(var1);
            _fun7035_ip = 71;
            continue _fun7035;
        case 54:
            var1 = 1;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var2 = var1.bind(var0)(var3);
        case 71:
            var1 = module;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [616, 617, 618]);