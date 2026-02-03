// modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61935: for (var _fun61935_ip = 0;;) switch (_fun61935_ip) {
            case 0:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 1;
                var0 = var5[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var4 = var0.width;
                var2 = _closure1_slot0;
                var0 = 2;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AppLauncherEntrypoint;
                var3 = var0.TEXT;
                var2 = arg0;
                var0 = var4;
                if (!(var2 !== var3)) {
                    _fun61935_ip = 95;
                    continue _fun61935
                }
            case 72:
                var2 = global;
                var3 = var2.Math;
                var2 = var3.min;
                var1 = _closure1_slot3;
                var0 = var2.bind(var3)(var4, var1);
            case 95:
                return var0;
        }
    };
    var2.useDefaultAppLauncherWidth = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4932, 1464, 7734, 2]);