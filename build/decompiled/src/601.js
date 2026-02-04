// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7009: for (var _fun7009_ip = 0;;) switch (_fun7009_ip) {
        case 0:
            var1 = global;
            var0 = var1.self;
            var2 = 'object';
            var0 = typeof var0;
            var3 = var2 === var0;
            if (!var3) {
                _fun7009_ip = 28;
                continue _fun7009
            }
        case 22:
            var3 = var1.self;
        case 28:
            if (!var3) {
                _fun7009_ip = 52;
                continue _fun7009
            }
        case 31:
            var0 = var1.self;
            var2 = var0.Object;
            var0 = var1.Object;
            var3 = var2 === var0;
        case 52:
            if (!var3) {
                _fun7009_ip = 61;
                continue _fun7009
            }
        case 55:
            var3 = var1.self;
        case 61:
            var2 = dependencyMap;
            var0 = 0;
            var4 = var2[var0];
            var2 = require;
            var0 = undefined;
            var2 = var2.bind(var0)(var4);
            if (var2) {
                _fun7009_ip = 86;
                continue _fun7009
            }
        case 83:
            var2 = var3;
        case 86:
            if (var2) {
                _fun7009_ip = 110;
                continue _fun7009
            }
        case 89:
            var3 = var1.Function;
            var1 = 'return this';
            var1 = var3.bind(var0)(var1);
            var2 = var1.bind(var0)();
        case 110:
            var1 = module;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [602]);