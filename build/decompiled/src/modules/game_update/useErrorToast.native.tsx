// modules/game_update/useErrorToast.native.tsx
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
    var3 = var3.useEffect;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_update/useErrorToast.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = var0.isLoading;
        var _closure2_slot0 = var4;
        var0 = var0.error;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var4;
        var2[1] = var0;
        var0 = undefined;
        var1 = function() { // Environment: var1
            _fun118257: for (var _fun118257_ip = 0;;) switch (_fun118257_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun118257_ip = 20;
                        continue _fun118257
                    }
                case 10:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var0 = var2 == var3;
                case 20:
                    if (var0) {
                        _fun118257_ip = 58;
                        continue _fun118257
                    }
                case 23:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 1;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.hideActionSheet;
                    var0 = var0.bind(var2)();
                case 58:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun118257_ip = 75;
                        continue _fun118257
                    }
                case 65:
                    var2 = _closure2_slot1;
                    var1 = null;
                    var0 = var1 == var2;
                case 75:
                    if (var0) {
                        _fun118257_ip = 217;
                        continue _fun118257
                    }
                case 81:
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 2;
                    var0 = var6[var0];
                    var5 = undefined;
                    var2 = var9.bind(var5)(var0);
                    var1 = var2.open;
                    var0 = {};
                    var4 = 'GAME_UPDATE_ERROR_TOAST';
                    var0.key = var4;
                    var4 = _closure1_slot0;
                    var3 = 3;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var8 = var3.intl;
                    var7 = var8.string;
                    var3 = 4;
                    var3 = var6[var3];
                    var3 = var9.bind(var5)(var3);
                    var3 = var3["/iXnwU"];
                    var3 = var7.bind(var8)(var3);
                    var0.content = var3;
                    var3 = 5;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.XLargeIcon;
                    var0.IconComponent = var3;
                    var3 = 'icon-feedback-critical';
                    var0.iconColor = var3;
                    var0 = var1.bind(var2)(var0);
                case 217:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.useErrorToast = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3280, 3150, 1234, 2532, 3266, 2]);