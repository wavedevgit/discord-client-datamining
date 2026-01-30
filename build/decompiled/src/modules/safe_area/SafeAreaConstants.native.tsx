// modules/safe_area/SafeAreaConstants.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun17566: for (var _fun17566_ip = 0;;) switch (_fun17566_ip) {
        case 0:
            var6 = require;
            var2 = exports;
            var7 = dependencyMap;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var4 = {
                'top': 0,
                'bottom': 0,
                'left': 0,
                'right': 0
            };
            var1 = 0;
            var3 = var7[var1];
            var0 = undefined;
            var3 = var6.bind(var0)(var3);
            var3 = var3.initialWindowMetrics;
            var8 = null;
            var5 = var8 != var3;
            var3 = undefined;
            if (!var5) {
                _fun17566_ip = 96;
                continue _fun17566
            }
        case 81:
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var3 = var1.initialWindowMetrics;
        case 96:
            var1 = var8 == var3;
            var5 = undefined;
            if (var1) {
                _fun17566_ip = 111;
                continue _fun17566
            }
        case 105:
            var5 = var3.insets;
        case 111:
            var1 = var4;
            if (!(var8 != var5)) {
                _fun17566_ip = 121;
                continue _fun17566
            }
        case 118:
            var1 = var5;
        case 121:
            var5 = 1;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/safe_area/SafeAreaConstants.native.tsx';
            var5 = var6.bind(var7)(var5);
            var2.EMPTY_SAFE_AREA_INSETS = var4;
            var2.INITIAL_SAFE_AREA_METRICS = var3;
            var2.INITIAL_SAFE_AREA_INSETS = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1571, 2]);