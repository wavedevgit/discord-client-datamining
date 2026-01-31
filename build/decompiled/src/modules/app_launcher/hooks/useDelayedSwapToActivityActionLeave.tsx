// modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useDelayedSwapToActivityActionLeave, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var2 = var4.useState;
        var6 = var2.bind(var4)(var5);
        var3 = _closure1_slot2;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var6, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot1 = var2;
        var3 = var4.useLayoutEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun107952: for (var _fun107952_ip = 0;;) switch (_fun107952_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ActivityAction;
                    var2 = var2.LEAVE;
                    if (!(var3 !== var2)) {
                        _fun107952_ip = 65;
                        continue _fun107952
                    }
                case 50:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var4)(var1);
                    return var4;
                case 65:
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 100;
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useDelayedSwapToActivityActionLeave = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 13822, 2]);