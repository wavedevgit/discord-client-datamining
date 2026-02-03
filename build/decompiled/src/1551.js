// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var3 = var3.bind(var0)(var4);
    var3 = var3.BackHandler;
    var _closure1_slot1 = var3;
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot1;
            var3 = var4.addEventListener;
            var2 = 'hardwareBackPress';
            var1 = function() { // Environment: var0
                _fun17503: for (var _fun17503_ip = 0;;) switch (_fun17503_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        var3 = var0.current;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun17503_ip = 55;
                            continue _fun17503
                        }
                    case 21:
                        var1 = var3.canGoBack;
                        var1 = var1.bind(var3)();
                        var2 = !var1;
                        var1 = !var2;
                        if (var2) {
                            _fun17503_ip = 52;
                            continue _fun17503
                        }
                    case 40:
                        var2 = var3.goBack;
                        var2 = var2.bind(var3)();
                        var1 = true;
                    case 52:
                        var0 = var1;
                    case 55:
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1.remove;
                var0 = var0.bind(var1)();
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27]);