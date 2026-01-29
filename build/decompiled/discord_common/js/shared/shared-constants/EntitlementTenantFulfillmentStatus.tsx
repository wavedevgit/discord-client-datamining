// ../discord_common/js/shared/shared-constants/EntitlementTenantFulfillmentStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var3 = {};
    var4 = 0;
    var3.UNKNOWN = var4;
    var1 = 'UNKNOWN';
    var3[var4] = var1;
    var5 = 1;
    var3.FULFILLMENT_NOT_NEEDED = var5;
    var1 = 'FULFILLMENT_NOT_NEEDED';
    var3[var5] = var1;
    var5 = 2;
    var3.FULFILLMENT_NEEDED = var5;
    var1 = 'FULFILLMENT_NEEDED';
    var3[var5] = var1;
    var5 = 3;
    var3.FULFILLED = var5;
    var1 = 'FULFILLED';
    var3[var5] = var1;
    var5 = 4;
    var3.FULFILLMENT_FAILED = var5;
    var1 = 'FULFILLMENT_FAILED';
    var3[var5] = var1;
    var5 = 5;
    var3.UNFULFILLMENT_NEEDED = var5;
    var1 = 'UNFULFILLMENT_NEEDED';
    var3[var5] = var1;
    var5 = 6;
    var3.UNFULFILLED = var5;
    var1 = 'UNFULFILLED';
    var3[var5] = var1;
    var5 = 7;
    var3.UNFULFILLMENT_FAILED = var5;
    var1 = 'UNFULFILLMENT_FAILED';
    var3[var5] = var1;
    var5 = 8;
    var3.UNFULFILLMENT_NEEDED_MANUAL = var5;
    var1 = 'UNFULFILLMENT_NEEDED_MANUAL';
    var3[var5] = var1;
    var5 = 9;
    var3.INITIAL_FULFILLMENT_NEEDED = var5;
    var1 = 'INITIAL_FULFILLMENT_NEEDED';
    var3[var5] = var1;
    var1 = {};
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [2, 5, 9];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.ELIGIBLE_FOR_ATTEMPTS = var5;
    var6 = var0.Set;
    var0 = var6.prototype;
    var5 = Object.create(var0, {
        constructor: {
            value: var6
        }
    });
    var10 = [2, 9];
    var11 = var5;
    var0 = new var11[var6](var10, var9);
    var0 = var0 instanceof Object ? var0 : var5;
    var1.ELIGIBLE_FOR_FULFILLMENT = var0;
    var0 = dependencyMap;
    var5 = var0[var4];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/shared-constants/EntitlementTenantFulfillmentStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2.EntitlementTenantFulfillmentStatus = var3;
    var2.EntitlementTenantFulfillmentStatusSets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);