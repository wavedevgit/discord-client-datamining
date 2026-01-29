// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: processColorElement, environment: var0
        _fun1510: for (var _fun1510_ip = 0;;) switch (_fun1510_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = 0;
                var0 = var0[var1];
                var2 = undefined;
                var0 = var3.bind(var2)(var0);
                var0 = var0.bind(var2)(var5);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun1510_ip = 65;
                    continue _fun1510
                }
            case 38:
                var2 = global;
                var4 = var2.console;
                var3 = var4.error;
                var2 = 'Invalid value in color array:';
                var2 = var3.bind(var4)(var2, var5);
                var0 = 0;
            case 65:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function(arg0) { // Original name: processColorArray, environment: var0
        _fun1511: for (var _fun1511_ip = 0;;) switch (_fun1511_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 == var3;
                if (var1) {
                    _fun1511_ip = 29;
                    continue _fun1511
                }
            case 12:
                var2 = var3.map;
                var1 = _closure1_slot2;
                var0 = var2.bind(var3)(var1);
            case 29:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [38]);