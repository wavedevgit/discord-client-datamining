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
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = var3.LogBox;
    var _closure1_slot0 = var3;
    var1 = function arg0() {
        _fun12830: for (var _fun12830_ip = 0;;) switch (_fun12830_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                if (!var0) {
                    _fun12830_ip = 21;
                    continue _fun12830
                }
            case 9:
                var3 = var1.major;
                var2 = 0;
                var0 = var2 === var3;
            case 21:
                if (!var0) {
                    _fun12830_ip = 37;
                    continue _fun12830
                }
            case 24:
                var2 = var1.minor;
                var1 = 70;
                var0 = var2 < var1;
            case 37:
                if (!var0) {
                    _fun12830_ip = 68;
                    continue _fun12830
                }
            case 40:
                var2 = _closure1_slot0;
                var1 = var2.ignoreLogs;
                var0 = ['Require cycle:'];
                var0 = var1.bind(var2)(var0);
            case 68:
                var0 = undefined;
                return var0;
        }
    };
    var2.ignoreRequireCycleLogs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);