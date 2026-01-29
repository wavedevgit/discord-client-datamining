// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var4 = var2.Object;
    var3 = var4.freeze;
    var2 = {
        'VISIBLE': 1,
        'SUSPENDED': 2,
        'HIDDEN': 3
    };
    var2 = var3.bind(var4)(var2);
    var _closure1_slot0 = var2;
    var1.default = var2;
    var0 = function(arg0) { // Original name: coerceDisplayMode, environment: var0
        _fun3316: for (var _fun3316_ip = 0;;) switch (_fun3316_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot0;
                var1 = var1.SUSPENDED;
                if (!(var1 !== var2)) {
                    _fun3316_ip = 58;
                    continue _fun3316
                }
            case 20:
                var1 = _closure1_slot0;
                var1 = var1.HIDDEN;
                if (!(var1 !== var2)) {
                    _fun3316_ip = 46;
                    continue _fun3316
                }
            case 34:
                var1 = _closure1_slot0;
                var1 = var1.VISIBLE;
                return var1;
            case 46:
                var1 = _closure1_slot0;
                var1 = var1.HIDDEN;
                return var1;
            case 58:
                var0 = _closure1_slot0;
                var0 = var0.SUSPENDED;
                return var0;
        }
    };
    var1.coerceDisplayMode = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);