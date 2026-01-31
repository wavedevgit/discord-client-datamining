// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var2 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var2;
    var0 = 0;
    var2 = var2[var0];
    var0 = undefined;
    var2 = var3.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = function(arg0) { // Original name: useShallow, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot2;
        var2 = var3.useRef;
        var1 = undefined;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun24483: for (var _fun24483_ip = 0;;) switch (_fun24483_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var4 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var4)(var0);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 1;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.shallow;
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    var2 = var3.bind(var4)(var2, var0);
                    var1 = _closure2_slot1;
                    if (var2) {
                        _fun24483_ip = 76;
                        continue _fun24483
                    }
                case 68:
                    var1.current = var0;
                    _fun24483_ip = 81;
                    continue _fun24483;
                case 76:
                    var0 = var1.current;
                case 81:
                    return var0;
            }
        };
        return var0;
    };
    var1 = arg5;
    var1.useShallow = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3036]);