// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0() {
        _fun29185: for (var _fun29185_ip = 0;;) switch (_fun29185_ip) {
            case 0:
                var0 = arg0;
                var1 = undefined;
                if (!(var1 !== var0)) {
                    _fun29185_ip = 172;
                    continue _fun29185
                }
            case 12:
                var1 = {};
                var2 = '[[Value]]';
                var2 = var2 in var0;
                if (!var2) {
                    _fun29185_ip = 37;
                    continue _fun29185
                }
            case 25:
                var2 = var0["[[Value]]"];
                var1.value = var2;
            case 37:
                var2 = '[[Writable]]';
                var2 = var2 in var0;
                if (!var2) {
                    _fun29185_ip = 66;
                    continue _fun29185
                }
            case 48:
                var2 = var0["[[Writable]]"];
                var2 = !var2;
                var2 = !var2;
                var1.writable = var2;
            case 66:
                var2 = '[[Get]]';
                var2 = var2 in var0;
                if (!var2) {
                    _fun29185_ip = 89;
                    continue _fun29185
                }
            case 77:
                var2 = var0["[[Get]]"];
                var1.get = var2;
            case 89:
                var2 = '[[Set]]';
                var2 = var2 in var0;
                if (!var2) {
                    _fun29185_ip = 112;
                    continue _fun29185
                }
            case 100:
                var2 = var0["[[Set]]"];
                var1.set = var2;
            case 112:
                var2 = '[[Enumerable]]';
                var2 = var2 in var0;
                if (!var2) {
                    _fun29185_ip = 141;
                    continue _fun29185
                }
            case 123:
                var2 = var0["[[Enumerable]]"];
                var2 = !var2;
                var2 = !var2;
                var1.enumerable = var2;
            case 141:
                var2 = '[[Configurable]]';
                var2 = var2 in var0;
                if (!var2) {
                    _fun29185_ip = 170;
                    continue _fun29185
                }
            case 152:
                var2 = var0["[[Configurable]]"];
                var2 = !var2;
                var2 = !var2;
                var1.configurable = var2;
            case 170:
                return var1;
            case 172:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);