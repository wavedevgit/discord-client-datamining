// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97299: for (var _fun97299_ip = 0;;) switch (_fun97299_ip) {
        case 0:
            var9 = require;
            var10 = dependencyMap;
            var1 = global;
            var0 = var1.Function;
            var8 = var0.prototype;
            var5 = 0;
            var2 = var10[var5];
            var0 = undefined;
            var7 = var9.bind(var0)(var2);
            if (!var7) {
                _fun97299_ip = 47;
                continue _fun97299
            }
        case 35:
            var1 = var1.Object;
            var7 = var1.getOwnPropertyDescriptor;
        case 47:
            var1 = 1;
            var1 = var10[var1];
            var1 = var9.bind(var0)(var1);
            var6 = 'name';
            var4 = var1.bind(var0)(var8, var6);
            var3 = var4;
            if (!var4) {
                _fun97299_ip = 99;
                continue _fun97299
            }
        case 75:
            var1 = function() { // Original name: something, environment: var1
                var0 = undefined;
                return var0;
            };
            var2 = var1.name;
            var1 = 'something';
            var3 = var1 === var2;
        case 99:
            var1 = var4;
            if (!var1) {
                _fun97299_ip = 150;
                continue _fun97299
            }
        case 105:
            var2 = var10[var5];
            var2 = var9.bind(var0)(var2);
            var2 = !var2;
            if (var2) {
                _fun97299_ip = 147;
                continue _fun97299
            }
        case 120:
            var5 = var10[var5];
            var5 = var9.bind(var0)(var5);
            if (!var5) {
                _fun97299_ip = 144;
                continue _fun97299
            }
        case 132:
            var6 = var7.bind(var0)(var8, var6);
            var5 = var6.configurable;
        case 144:
            var2 = var5;
        case 147:
            var1 = var2;
        case 150:
            var2 = {};
            var2.EXISTS = var4;
            var2.PROPER = var3;
            var2.CONFIGURABLE = var1;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12637, 12657]);