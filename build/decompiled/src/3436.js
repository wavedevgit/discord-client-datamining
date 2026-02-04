// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1() {
        _fun29202: for (var _fun29202_ip = 0;;) switch (_fun29202_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)(var3);
                if (!var0) {
                    _fun29202_ip = 46;
                    continue _fun29202
                }
            case 38:
                var1 = '[[Enumerable]]';
                var0 = var1 in var3;
            case 46:
                if (!var0) {
                    _fun29202_ip = 57;
                    continue _fun29202
                }
            case 49:
                var1 = '[[Configurable]]';
                var0 = var1 in var3;
            case 57:
                if (!var0) {
                    _fun29202_ip = 88;
                    continue _fun29202
                }
            case 60:
                var1 = var4.IsAccessorDescriptor;
                var1 = var1.bind(var4)(var3);
                if (var1) {
                    _fun29202_ip = 85;
                    continue _fun29202
                }
            case 74:
                var2 = var4.IsDataDescriptor;
                var1 = var2.bind(var4)(var3);
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3419]);