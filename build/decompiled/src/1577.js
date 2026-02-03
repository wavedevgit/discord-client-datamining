// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun17592: for (var _fun17592_ip = 0;;) switch (_fun17592_ip) {
        case 0:
            var5 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var3 = 0;
            var1 = var6[var3];
            var0 = undefined;
            var4 = var5.bind(var0)(var1);
            var1 = null;
            var7 = var1 == var4;
            var4 = undefined;
            if (var7) {
                _fun17592_ip = 123;
                continue _fun17592
            }
        case 65:
            var7 = var6[var3];
            var7 = var5.bind(var0)(var7);
            var7 = var7.getConstants;
            var7 = var1 == var7;
            var4 = undefined;
            if (var7) {
                _fun17592_ip = 123;
                continue _fun17592
            }
        case 89:
            var3 = var6[var3];
            var5 = var5.bind(var0)(var3);
            var3 = var5.getConstants;
            var3 = var3.bind(var5)();
            var5 = var1 == var3;
            var4 = undefined;
            if (var5) {
                _fun17592_ip = 123;
                continue _fun17592
            }
        case 117:
            var4 = var3.initialWindowMetrics;
        case 123:
            var5 = var1 != var4;
            var3 = null;
            if (!var5) {
                _fun17592_ip = 135;
                continue _fun17592
            }
        case 132:
            var3 = var4;
        case 135:
            var4 = var1 == var3;
            var1 = undefined;
            if (var4) {
                _fun17592_ip = 150;
                continue _fun17592
            }
        case 144:
            var1 = var3.insets;
        case 150:
            var2.initialWindowMetrics = var3;
            var2.initialWindowSafeAreaInsets = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1578]);