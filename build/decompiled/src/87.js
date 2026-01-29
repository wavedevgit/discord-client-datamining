// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = {};
    var0 = undefined;
    var3.x = var0;
    var3.y = var0;
    var _closure1_slot0 = var3;
    var1 = function(arg0, arg1) { // Original name: pointsDiffer, environment: var1
        _fun1506: for (var _fun1506_ip = 0;;) switch (_fun1506_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                if (var3) {
                    _fun1506_ip = 16;
                    continue _fun1506
                }
            case 9:
                var3 = _closure1_slot0;
            case 16:
                if (var2) {
                    _fun1506_ip = 26;
                    continue _fun1506
                }
            case 19:
                var2 = _closure1_slot0;
            case 26:
                var0 = var3 !== var2;
                if (!var0) {
                    _fun1506_ip = 67;
                    continue _fun1506
                }
            case 33:
                var4 = var3.x;
                var1 = var2.x;
                var1 = var4 !== var1;
                if (var1) {
                    _fun1506_ip = 64;
                    continue _fun1506
                }
            case 50:
                var3 = var3.y;
                var2 = var2.y;
                var1 = var3 !== var2;
            case 64:
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);