// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        _fun8283: for (var _fun8283_ip = 0;;) switch (_fun8283_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.bind(var1)(var2);
                if (var3) {
                    _fun8283_ip = 39;
                    continue _fun8283
                }
            case 35:
                var3 = false;
                return var3;
            case 39:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var0 = var3.bind(var1)(var0);
                var2 = var0.bind(var1)(var2);
                var0 = '[object Function]';
                var0 = var0 == var2;
                if (var0) {
                    _fun8283_ip = 85;
                    continue _fun8283
                }
            case 75:
                var1 = '[object GeneratorFunction]';
                var0 = var1 == var2;
            case 85:
                if (var0) {
                    _fun8283_ip = 98;
                    continue _fun8283
                }
            case 88:
                var1 = '[object AsyncFunction]';
                var0 = var1 == var2;
            case 98:
                if (var0) {
                    _fun8283_ip = 111;
                    continue _fun8283
                }
            case 101:
                var1 = '[object Proxy]';
                var0 = var1 == var2;
            case 111:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [573, 578]);