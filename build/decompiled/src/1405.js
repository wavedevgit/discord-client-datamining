// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function() { // Original name: hasPropertyDescriptors, environment: var0
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var0 = function() { // Original name: hasArrayLengthDefineBug, environment: var0
        _fun16429: for (var _fun16429_ip = 0;;) switch (_fun16429_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = 0;
                var1 = var1[var2];
                var5 = undefined;
                var1 = var3.bind(var5)(var1);
                if (var1) {
                    _fun16429_ip = 31;
                    continue _fun16429
                }
            case 27:
                var1 = null;
                return var1;
            case 31: // try_start_0
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var2];
                var4 = var1.bind(var5)(var0);
                var3 = {};
                var1 = 1;
                var3.value = var1;
                var2 = new Array(0);
                var0 = 'length';
                var0 = var4.bind(var5)(var2, var0, var3);
                var0 = var0.length;
            case 77: // try_end0
                var0 = var1 !== var0;
                return var0;
            case 83: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = true;
                return var0;
        }
    };
    var1.hasArrayLengthDefineBug = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [541]);