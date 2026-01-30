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
    var2 = function(arg0, arg1, arg2) { // Original name: addPageListener, environment: var0
        _fun10762: for (var _fun10762_ip = 0;;) switch (_fun10762_ip) {
            case 0:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 0;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.WINDOW;
                var2 = var2.document;
                if (!var2) {
                    _fun10762_ip = 84;
                    continue _fun10762
                }
            case 39:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var5 = var1.WINDOW;
                var4 = var5.addEventListener;
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var2, var1);
            case 84:
                return var0;
        }
    };
    var1.addPageListener = var2;
    var0 = function(arg0, arg1, arg2) { // Original name: removePageListener, environment: var0
        _fun10763: for (var _fun10763_ip = 0;;) switch (_fun10763_ip) {
            case 0:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 0;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.WINDOW;
                var2 = var2.document;
                if (!var2) {
                    _fun10763_ip = 84;
                    continue _fun10763
                }
            case 39:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var5 = var1.WINDOW;
                var4 = var5.removeEventListener;
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var2, var1);
            case 84:
                return var0;
        }
    };
    var1.removePageListener = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1036]);