// design/components/Icon/native/ClipView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun48196: for (var _fun48196_ip = 0;;) switch (_fun48196_ip) {
        case 0:
            var6 = require;
            var5 = metroImportDefault;
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
            var0 = 0;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var4 = var1.requireNativeComponent;
            var1 = {};
            var3 = 'circle';
            var1.Circle = var3;
            var3 = 'rounded-rect';
            var1.RoundedRect = var3;
            var3 = 1;
            var3 = var7[var3];
            var8 = var6.bind(var0)(var3);
            var3 = var8.isAndroid;
            var3 = var3.bind(var8)();
            if (var3) {
                _fun48196_ip = 125;
                continue _fun48196
            }
        case 112:
            var3 = 'ClipView';
            var4 = var4.bind(var0)(var3);
            _fun48196_ip = 137;
            continue _fun48196;
        case 125:
            var3 = 2;
            var3 = var7[var3];
            var4 = var5.bind(var0)(var3);
        case 137:
            var3 = 3;
            var3 = var7[var3];
            var5 = var5.bind(var0)(var3);
            var3 = var5.createAnimatedComponent;
            var3 = var3.bind(var5)(var4);
            var5 = 4;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'design/components/Icon/native/ClipView.tsx';
            var5 = var6.bind(var7)(var5);
            var2.default = var4;
            var2.ClipViewAnimated = var3;
            var2.CutoutShape = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 5420, 3679, 2]);