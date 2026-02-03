// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun32580: for (var _fun32580_ip = 0;;) switch (_fun32580_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var1 = 0;
            var2 = var5[var1];
            var0 = undefined;
            var3 = var4.bind(var0)(var2);
            if (!var3) {
                _fun32580_ip = 37;
                continue _fun32580
            }
        case 22:
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var3 = var1.isMap;
        case 37:
            if (var3) {
                _fun32580_ip = 54;
                continue _fun32580
            }
        case 40:
            var1 = 2;
            var1 = var5[var1];
            var2 = var4.bind(var0)(var1);
            _fun32580_ip = 71;
            continue _fun32580;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [749, 750, 3664]);