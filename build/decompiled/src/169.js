// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2507: for (var _fun2507_ip = 0;;) switch (_fun2507_ip) {
        case 0:
            var0 = global;
            var4 = require;
            var3 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var3;
            var6 = null;
            if (!(var6 != var0)) {
                _fun2507_ip = 57;
                continue _fun2507
            }
        case 25:
            var5 = var0.HermesInternal;
            if (!(var6 != var5)) {
                _fun2507_ip = 57;
                continue _fun2507
            }
        case 34:
            var2 = var5.hasPromise;
            if (!(var6 != var2)) {
                _fun2507_ip = 57;
                continue _fun2507
            }
        case 44:
            var2 = var5.hasPromise;
            var2 = var2.bind(var5)();
            if (var2) {
                _fun2507_ip = 93;
                continue _fun2507
            }
        case 57:
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.polyfillGlobal;
            var2 = 'Promise';
            var1 = function() { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.default;
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            _fun2507_ip = 98;
            continue _fun2507;
        case 93:
            var0 = var0.Promise;
        case 98:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [126, 170]);