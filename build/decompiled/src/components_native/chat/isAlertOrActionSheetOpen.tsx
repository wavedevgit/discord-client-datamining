// components_native/chat/isAlertOrActionSheetOpen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/chat/isAlertOrActionSheetOpen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76416: for (var _fun76416_ip = 0;;) switch (_fun76416_ip) {
            case 0:
                var1 = arguments[1];
                var3 = arguments[2];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun76416_ip = 19;
                    continue _fun76416
                }
            case 12:
                var1 = _closure1_slot0;
            case 19:
                if (!(var3 === var0)) {
                    _fun76416_ip = 30;
                    continue _fun76416
                }
            case 23:
                var3 = _closure1_slot1;
            case 30:
                var0 = var1.getContent;
                var0 = var0.bind(var1)();
                var2 = null;
                var0 = var2 != var0;
                var1 = var3.getAlert;
                var1 = var1.bind(var3)();
                var1 = var2 != var1;
                if (var0) {
                    _fun76416_ip = 66;
                    continue _fun76416
                }
            case 63:
                var0 = var1;
            case 66:
                return var0;
        }
    };
    var2.isAlertOrActionSheetOpen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3140, 9738, 2]);