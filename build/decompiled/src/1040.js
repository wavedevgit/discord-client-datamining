// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function() {
        _fun10771: for (var _fun10771_ip = 0;;) switch (_fun10771_ip) {
            case 0:
                var1 = undefined;
                var0 = undefined;
                var2 = arguments.length;
                var3 = 0;
                var4 = var2 > var3;
                if (!var4) {
                    _fun10771_ip = 24;
                    continue _fun10771
                }
            case 16:
                var2 = arguments[var3];
                var4 = var1 !== var2;
            case 24:
                var2 = !var4;
                if (!var4) {
                    _fun10771_ip = 34;
                    continue _fun10771
                }
            case 30:
                var2 = arguments[var3];
            case 34:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var3];
                var0 = var4.bind(var1)(var0);
                var0 = var0.WINDOW;
                var6 = var0.performance;
                var5 = null;
                var4 = var5 == var6;
                var0 = undefined;
                if (var4) {
                    _fun10771_ip = 111;
                    continue _fun10771
                }
            case 77:
                var4 = var6.getEntriesByType;
                var4 = var5 == var4;
                var0 = undefined;
                if (var4) {
                    _fun10771_ip = 111;
                    continue _fun10771
                }
            case 92:
                var5 = var6.getEntriesByType;
                var4 = 'navigation';
                var4 = var5.bind(var6)(var4);
                var0 = var4[var3];
            case 111:
                if (!var2) {
                    _fun10771_ip = 156;
                    continue _fun10771
                }
            case 114:
                if (!var0) {
                    _fun10771_ip = 154;
                    continue _fun10771
                }
            case 117:
                var2 = var0.responseStart;
                if (!(var2 > var3)) {
                    _fun10771_ip = 154;
                    continue _fun10771
                }
            case 127:
                var3 = var0.responseStart;
                var2 = global;
                var4 = var2.performance;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                if (!(!(var3 < var2))) {
                    _fun10771_ip = 156;
                    continue _fun10771
                }
            case 154:
                return var1;
            case 156:
                return var0;
        }
    };
    var1.getNavigationEntry = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1036]);