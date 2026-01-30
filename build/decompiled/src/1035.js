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
    var0 = function(arg0) { // Original name: whenActivated, environment: var0
        _fun10752: for (var _fun10752_ip = 0;;) switch (_fun10752_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var3.WINDOW;
                var3 = var3.document;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun10752_ip = 60;
                    continue _fun10752
                }
            case 51:
                var3 = var3.prerendering;
                if (var3) {
                    _fun10752_ip = 66;
                    continue _fun10752
                }
            case 60:
                var2 = var2.bind(var0)();
                _fun10752_ip = 94;
                continue _fun10752;
            case 66:
                var2 = global;
                var4 = var2.addEventListener;
                var3 = 'prerenderingchange';
                var2 = function() { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var1 = true;
                var1 = var4.bind(var0)(var3, var2, var1);
            case 94:
                return var0;
        }
    };
    var1.whenActivated = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1036]);