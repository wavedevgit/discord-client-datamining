// modules/premium/PremiumSubscriptionInvoiceItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/PremiumSubscriptionInvoiceItem.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var4 = arg0;
        var2 = new Array(0);
        var _closure2_slot0 = var2;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var1
            }
        });
        var6 = var3;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot1 = var1;
        var3 = var4.map;
        var1 = function(arg0) { // Environment: var0
            _fun25566: for (var _fun25566_ip = 0;;) switch (_fun25566_ip) {
                case 0:
                    var0 = arg0;
                    var8 = _closure2_slot0;
                    var1 = var8.length;
                    var7 = 0;
                    var1 = var7 < var1;
                    var3 = undefined;
                    var5 = 0;
                    if (!var1) {
                        _fun25566_ip = 139;
                        continue _fun25566
                    }
                case 31:
                    var1 = var8[var5];
                    var9 = var1.subscriptionPlanId;
                    var4 = var0.subscriptionPlanId;
                    if (!(var9 === var4)) {
                        _fun25566_ip = 127;
                        continue _fun25566
                    }
                case 51:
                    var9 = var1.subscriptionPlanPrice;
                    var4 = var0.subscriptionPlanPrice;
                    if (!(var9 === var4)) {
                        _fun25566_ip = 127;
                        continue _fun25566
                    }
                case 67:
                    var9 = var1.amount;
                    var4 = var0.amount;
                    if (!(var9 === var4)) {
                        _fun25566_ip = 127;
                        continue _fun25566
                    }
                case 83:
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var7];
                    var11 = var9.bind(var3)(var4);
                    var10 = var11.isEqual;
                    var9 = var1.discounts;
                    var4 = var0.discounts;
                    var4 = var10.bind(var11)(var9, var4);
                    if (var4) {
                        _fun25566_ip = 167;
                        continue _fun25566
                    }
                case 127:
                    var5 = var5 + 1;
                    var4 = var8.length;
                    if (var5 < var4) {
                        _fun25566_ip = 31;
                        continue _fun25566
                    }
                case 139:
                    var6 = _closure2_slot0;
                    var5 = var6.push;
                    var4 = {};
                    var13 = var4;
                    var12 = var0;
                    var7 = copyDataProperties(var13, var12);
                    var4 = var5.bind(var6)(var4);
                    return var3;
                case 167:
                    var4 = _closure2_slot1;
                    var3 = var4.add;
                    var2 = var1.subscriptionPlanId;
                    var2 = var3.bind(var4)(var2);
                    var2 = var1.quantity;
                    var0 = var0.quantity;
                    var0 = var2 + var0;
                    var1.quantity = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun25567: for (var _fun25567_ip = 0;;) switch (_fun25567_ip) {
                case 0:
                    var2 = arg0;
                    var0 = {};
                    var6 = var0;
                    var5 = var2;
                    var3 = copyDataProperties(var6, var5);
                    var _closure3_slot0 = var0;
                    var4 = _closure2_slot1;
                    var3 = var4.has;
                    var2 = var2.subscriptionPlanId;
                    var2 = var3.bind(var4)(var2);
                    if (!var2) {
                        _fun25567_ip = 96;
                        continue _fun25567
                    }
                case 47:
                    var3 = var0.amount;
                    var2 = var0.quantity;
                    var2 = var3 * var2;
                    var0.amount = var2;
                    var3 = var0.discounts;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = {};
                        var4 = var0;
                        var3 = var1;
                        var2 = copyDataProperties(var4, var3);
                        var2 = var1.amount;
                        var1 = _closure3_slot0;
                        var1 = var1.quantity;
                        var2 = var2 * var1;
                        var1 = 'amount';
                        var0[var1] = var2;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.discounts = var1;
                case 96:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.coalesceInvoiceItems = var3;
    var1 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var2 = var1.subscription_plan_id;
        var0.subscriptionPlanId = var2;
        var2 = var1.subscription_plan_price;
        var0.subscriptionPlanPrice = var2;
        var2 = var1.amount;
        var0.amount = var2;
        var2 = var1.quantity;
        var0.quantity = var2;
        var1 = var1.discounts;
        var0.discounts = var1;
        return var0;
    };
    var2.createInvoiceItemFromServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [22, 2]);