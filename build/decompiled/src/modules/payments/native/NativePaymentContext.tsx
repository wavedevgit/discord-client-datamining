// modules/payments/native/NativePaymentContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var8 = 0;
    var1 = var7[var8];
    var0 = undefined;
    var10 = var11.bind(var0)(var1);
    var3 = 1;
    var5 = var7[var3];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var5);
    var _closure1_slot3 = var1;
    var5 = 2;
    var1 = var7[var5];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var9 = 3;
    var1 = var7[var9];
    var1 = var6.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var11.bind(var0)(var1);
    var1 = var1.bind(var0)();
    var1 = var10.bind(var0)(var1, var9);
    var8 = var1[var8];
    var _closure1_slot6 = var8;
    var3 = var1[var3];
    var1 = var1[var5];
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/payments/native/NativePaymentContext.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0) { // Original name: NativePaymentContextProvider, environment: var4
        var0 = arg0;
        var4 = var0.children;
        var12 = var0.skuIDs;
        var _closure2_slot0 = var12;
        var6 = var0.activeSubscription;
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 5;
        var7 = var5[var3];
        var3 = undefined;
        var8 = var2.bind(var3)(var7);
        var7 = var8.useNativeIAPPayments;
        var7 = var7.bind(var8)();
        var10 = var7.nativePaymentsConnected;
        var7 = var7.storeFront;
        var _closure2_slot1 = var7;
        var11 = _closure1_slot3;
        var9 = var11.useEffect;
        var8 = new Array(2);
        var8[0] = var7;
        var8[1] = var12;
        var1 = function() { // Environment: var1
            _fun86529: for (var _fun86529_ip = 0;;) switch (_fun86529_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var2;
                    if (var1) {
                        _fun86529_ip = 40;
                        continue _fun86529
                    }
                case 16:
                    var4 = _closure1_slot4;
                    var3 = var4.isFetchingForSKUs;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
                case 40:
                    if (var1) {
                        _fun86529_ip = 94;
                        continue _fun86529
                    }
                case 43:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchSubscriptionPlansBySKUs;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var0.country;
                    var0 = var2.bind(var3)(var1, var0);
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var9.bind(var11)(var1, var8);
        var1 = 7;
        var1 = var5[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var8 = var1.selectedPlan;
        var9 = var1.setSelectedPlanId;
        var2 = _closure1_slot5;
        var0 = _closure1_slot6;
        var1 = var0.Provider;
        var0 = {};
        var5 = {};
        var5.isReadyToPurchase = var10;
        var5.setSelectedPlanId = var9;
        var5.selectedPlan = var8;
        var5.storeFront = var7;
        var5.activeSubscription = var6;
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.NativePaymentContextProvider = var4;
    var2.useNativeIAPPaymentContext = var3;
    var2.useForwardedNativePaymentContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3075, 33, 9369, 10717, 5588, 11153, 2]);