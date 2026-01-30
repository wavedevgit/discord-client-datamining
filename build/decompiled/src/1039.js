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
    var0 = function() { // Original name: getActivationStart, environment: var0
        _fun10765: for (var _fun10765_ip = 0;;) switch (_fun10765_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var2 = var1[var0];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getNavigationEntry;
                var3 = var2.bind(var3)();
                var2 = null;
                var4 = var2 == var3;
                if (var4) {
                    _fun10765_ip = 49;
                    continue _fun10765
                }
            case 43:
                var1 = var3.activationStart;
            case 49:
                var2 = var2 != var1;
                var0 = 0;
                if (!var2) {
                    _fun10765_ip = 61;
                    continue _fun10765
                }
            case 58:
                var0 = var1;
            case 61:
                return var0;
        }
    };
    var1.getActivationStart = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1040]);