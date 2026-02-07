// modules/activities/panel/native/utils/ActivityPanelUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/panel/native/utils/ActivityPanelUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun110862: for (var _fun110862_ip = 0;;) switch (_fun110862_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 3;
                    var0 = var3[var0];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var0);
                    var2 = var5.getEmbeddedActivityLocationChannelId;
                    var4 = _closure1_slot3;
                    var0 = var4.getConnectedActivityLocation;
                    var0 = var0.bind(var4)();
                    var2 = var2.bind(var5)(var0);
                    var0 = var4.getActivityPanelMode;
                    var4 = var0.bind(var4)();
                    var0 = _closure1_slot4;
                    var0 = var0.PANEL;
                    var0 = var4 === var0;
                    if (!var0) {
                        _fun110862_ip = 105;
                        continue _fun110862
                    }
                case 77:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 4;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.bind(var3)(var2);
                    var0 = !var1;
                case 105:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsActivityPanelFullscreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 7985, 566, 3083, 8027, 2]);