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
    var0 = function arg0() {
        _fun10173: for (var _fun10173_ip = 0;;) switch (_fun10173_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var2 = var1.GLOBAL_OBJ;
                var1 = global;
                var4 = var1.Symbol;
                var3 = var4.for;
                var1 = '@vercel/request-context';
                var1 = var3.bind(var4)(var1);
                var4 = var2[var1];
                var1 = null;
                var2 = var1 == var4;
                var3 = undefined;
                if (var2) {
                    _fun10173_ip = 93;
                    continue _fun10173
                }
            case 70:
                var2 = var4.get;
                var2 = var1 == var2;
                var3 = undefined;
                if (var2) {
                    _fun10173_ip = 93;
                    continue _fun10173
                }
            case 84:
                var2 = var4.get;
                var3 = var2.bind(var4)();
            case 93:
                var1 = var1 != var3;
                if (!var1) {
                    _fun10173_ip = 106;
                    continue _fun10173
                }
            case 100:
                var1 = var3.waitUntil;
            case 106:
                if (!var1) {
                    _fun10173_ip = 123;
                    continue _fun10173
                }
            case 109:
                var2 = var3.waitUntil;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
            case 123:
                return var0;
        }
    };
    var1.vercelWaitUntil = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [821]);