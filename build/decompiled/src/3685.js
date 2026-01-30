// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33003: for (var _fun33003_ip = 0;;) switch (_fun33003_ip) {
        case 0:
            var2 = exports;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var1 = dependencyMap;
            var0 = 0;
            var3 = var1[var0];
            var1 = require;
            var0 = undefined;
            var1 = var1.bind(var0)(var3);
            var6 = var1.LogBox;
            var3 = null;
            var4 = var3 == var6;
            var1 = undefined;
            if (var4) {
                _fun33003_ip = 96;
                continue _fun33003
            }
        case 71:
            var5 = var6.addLog;
            var4 = var3 == var5;
            var1 = undefined;
            if (var4) {
                _fun33003_ip = 96;
                continue _fun33003
            }
        case 86:
            var4 = var5.bind;
            var1 = var4.bind(var5)(var6);
        case 96:
            if (!(var3 == var1)) {
                _fun33003_ip = 107;
                continue _fun33003
            }
        case 100:
            var1 = function() { // Original name: noop, environment: var3
                var0 = undefined;
                return var0;
            };
        case 107:
            var2.addLogBoxLog = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);