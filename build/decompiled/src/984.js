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
        _fun10137: for (var _fun10137_ip = 0;;) switch (_fun10137_ip) {
            case 0:
                var0 = global;
                var0 = var0.window;
                var1 = 'undefined';
                var0 = typeof var0;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun10137_ip = 120;
                    continue _fun10137
                }
            case 21:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.isNodeEnv;
                var1 = var1.bind(var4)();
                var1 = !var1;
                if (var1) {
                    _fun10137_ip = 117;
                    continue _fun10137
                }
            case 61:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.GLOBAL_OBJ;
                var2 = var2.process;
                var4 = null;
                var4 = var4 == var2;
                var3 = undefined;
                if (var4) {
                    _fun10137_ip = 109;
                    continue _fun10137
                }
            case 104:
                var3 = var2.type;
            case 109:
                var2 = 'renderer';
                var1 = var2 === var3;
            case 117:
                var0 = var1;
            case 120:
                return var0;
        }
    };
    var1.isBrowser = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [985, 821]);