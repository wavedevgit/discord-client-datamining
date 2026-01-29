// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var5 = var3.Symbol;
    var0 = undefined;
    var4 = 'isPlatformObject';
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = var3.Symbol;
    var3 = 'clonePlatformObject';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = function(arg0, arg1) { // Original name: setPlatformObject, environment: var1
        _fun2147: for (var _fun2147_ip = 0;;) switch (_fun2147_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var3 = 'function';
                var1 = typeof var2;
                if (!(var3 !== var1)) {
                    _fun2147_ip = 49;
                    continue _fun2147
                }
            case 17:
                var4 = _closure1_slot0;
                var3 = true;
                var2[var4] = var3;
                if (!var0) {
                    _fun2147_ip = 89;
                    continue _fun2147
                }
            case 33:
                var3 = _closure1_slot1;
                var1 = var0.clone;
                var2[var3] = var1;
                _fun2147_ip = 89;
                continue _fun2147;
            case 49:
                var5 = var2.prototype;
                var4 = _closure1_slot0;
                var3 = true;
                var5[var4] = var3;
                if (!var0) {
                    _fun2147_ip = 89;
                    continue _fun2147
                }
            case 70:
                var2 = var2.prototype;
                var1 = _closure1_slot1;
                var0 = var0.clone;
                var2[var1] = var0;
            case 89:
                var0 = undefined;
                return var0;
        }
    };
    var2.setPlatformObject = var3;
    var3 = function(arg0) { // Original name: isPlatformObject, environment: var1
        var1 = _closure1_slot0;
        var0 = arg0;
        var0 = var1 in var0;
        return var0;
    };
    var2.isPlatformObject = var3;
    var1 = function(arg0) { // Original name: getPlatformObjectClone, environment: var1
        var1 = _closure1_slot1;
        var0 = arg0;
        var0 = var0[var1];
        return var0;
    };
    var2.getPlatformObjectClone = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);