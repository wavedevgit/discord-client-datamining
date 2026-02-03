// modules/payments/hooks/useSubscriptionSelection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/payments/hooks/useSubscriptionSelection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var11 = _closure1_slot3;
        var0 = var11.useState;
        var9 = undefined;
        var0 = var0.bind(var11)(var9);
        var10 = _closure1_slot2;
        var8 = 2;
        var0 = var10.bind(var9)(var0, var8);
        var2 = 0;
        var7 = var0[var2];
        var1 = 1;
        var4 = var0[var1];
        var0 = var11.useState;
        var0 = var0.bind(var11)(var9);
        var0 = var10.bind(var9)(var0, var8);
        var3 = var0[var2];
        var _closure2_slot0 = var3;
        var3 = var0[var1];
        var0 = var11.useState;
        var0 = var0.bind(var11)(var9);
        var0 = var10.bind(var9)(var0, var8);
        var2 = var0[var2];
        var1 = var0[var1];
        var0 = {};
        var0.selectedSkuId = var7;
        var8 = _closure1_slot0;
        var10 = _closure1_slot1;
        var7 = 3;
        var7 = var10[var7];
        var8 = var8.bind(var9)(var7);
        var7 = var8.useStateFromStores;
        var9 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var9;
        var5 = function() { // Environment: var5
            _fun87002: for (var _fun87002_ip = 0;;) switch (_fun87002_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun87002_ip = 37;
                        continue _fun87002
                    }
                case 16:
                    var3 = _closure1_slot4;
                    var2 = var3.get;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 37:
                    return var0;
            }
        };
        var5 = var7.bind(var8)(var6, var5);
        var0.selectedPlan = var5;
        var0.setSelectedSkuId = var4;
        var0.setSelectedPlanId = var3;
        var0.selectedPlanNotification = var2;
        var0.setSelectedPlanNotification = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3116, 566, 2]);