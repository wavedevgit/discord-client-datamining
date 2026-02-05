// uikit-native/PassthroughTouchView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44530: for (var _fun44530_ip = 0;;) switch (_fun44530_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = 0;
            var6 = var5[var0];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.requireNativeComponent;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot0 = var3;
            var3 = 3;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var3 = var7.isAndroid;
            var3 = var3.bind(var7)();
            if (var3) {
                _fun44530_ip = 136;
                continue _fun44530
            }
        case 123:
            var3 = 'PassthroughTouchView';
            var3 = var6.bind(var0)(var3);
            _fun44530_ip = 151;
            continue _fun44530;
        case 136:
            var6 = 4;
            var7 = var5[var6];
            var6 = metroImportDefault;
            var3 = var6.bind(var0)(var7);
        case 151:
            var _closure1_slot1 = var3;
            var3 = 5;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'uikit-native/PassthroughTouchView.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                var2 = arg0;
                var4 = var2.onTouchDown;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.onTouchDown = var0;
                var7 = {};
                var6 = var2;
                var5 = var1;
                var6 = copyDataProperties(var7, var6, var5);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = {};
                var7 = var1;
                var0 = copyDataProperties(var7, var6);
                var0 = 'onTouchDown';
                var1[var0] = var4;
                var4 = 'box-none';
                var0 = 'pointerEvents';
                var1[var0] = var4;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 4890, 2]);