// modules/core/native/ReanimatedNativeView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun53770: for (var _fun53770_ip = 0;;) switch (_fun53770_ip) {
        case 0:
            var4 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var0 = global;
            var6 = var0.Object;
            var3 = var6.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var6)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if (var1) {
                _fun53770_ip = 84;
                continue _fun53770
            }
        case 70:
            var1 = 2;
            var1 = var5[var1];
            var1 = var8.bind(var0)(var1);
            _fun53770_ip = 96;
            continue _fun53770;
        case 84:
            var3 = 1;
            var3 = var5[var3];
            var1 = var8.bind(var0)(var3);
        case 96:
            var3 = 3;
            var3 = var5[var3];
            var6 = var4.bind(var0)(var3);
            var3 = var6.isFabric;
            var3 = var3.bind(var6)();
            if (var3) {
                _fun53770_ip = 156;
                continue _fun53770
            }
        case 121:
            var3 = 4;
            var3 = var5[var3];
            var7 = var8.bind(var0)(var3);
            var6 = var7.createAnimatedComponent;
            var3 = 5;
            var3 = var5[var3];
            var3 = var8.bind(var0)(var3);
            var1 = var6.bind(var7)(var3);
        case 156:
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/core/native/ReanimatedNativeView.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [479, 3911, 6526, 3912, 3721, 6524, 2]);