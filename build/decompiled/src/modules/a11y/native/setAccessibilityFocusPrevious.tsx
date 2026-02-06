// modules/a11y/native/setAccessibilityFocusPrevious.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/a11y/native/setAccessibilityFocusPrevious.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun92992: for (var _fun92992_ip = 0;;) switch (_fun92992_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun92992_ip = 60;
                    continue _fun92992
                }
            case 38:
                var1 = _closure1_slot2;
                var2 = var1.DCDAccessibilityManager;
                var1 = var2.restorePreviousFocus;
                var1 = var1.bind(var2)();
            case 60:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 2]);