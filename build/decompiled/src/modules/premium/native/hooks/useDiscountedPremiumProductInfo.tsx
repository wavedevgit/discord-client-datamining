// modules/premium/native/hooks/useDiscountedPremiumProductInfo.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CurrencyCodes;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/hooks/useDiscountedPremiumProductInfo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useDiscountedPremiumProductInfo, environment: var1
        var5 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot2;
        var6 = var4.useMemo;
        var3 = new Array(2);
        var3[0] = var5;
        var3[1] = var1;
        var1 = function() { // Environment: var0
            _fun58139: for (var _fun58139_ip = 0;;) switch (_fun58139_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun58139_ip = 73;
                        continue _fun58139
                    }
                case 15:
                    var3 = _closure2_slot0;
                    var4 = var3.discount;
                    var5 = var0 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun58139_ip = 40;
                        continue _fun58139
                    }
                case 34:
                    var3 = var4.plan_ids;
                case 40:
                    if (!(var0 == var3)) {
                        _fun58139_ip = 48;
                        continue _fun58139
                    }
                case 44:
                    var3 = new Array(0);
                case 48:
                    var _closure3_slot0 = var3;
                    var3 = _closure2_slot1;
                    var2 = var3.find;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.basePlanId;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                case 73:
                    return var0;
            }
        };
        var1 = var6.bind(var4)(var1, var3);
        var _closure2_slot2 = var1;
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 3;
        var6 = var6[var3];
        var3 = undefined;
        var7 = var7.bind(var3)(var6);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            _fun58141: for (var _fun58141_ip = 0;;) switch (_fun58141_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun58141_ip = 44;
                        continue _fun58141
                    }
                case 16:
                    var3 = _closure1_slot3;
                    var2 = var3.getProduct;
                    var1 = _closure2_slot2;
                    var1 = var1.productId;
                    var0 = var2.bind(var3)(var1);
                case 44:
                    return var0;
            }
        };
        var2 = var6.bind(var7)(var3, var1, var2);
        var _closure2_slot3 = var2;
        var3 = var4.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var2;
        var0 = function() { // Environment: var0
            _fun58142: for (var _fun58142_ip = 0;;) switch (_fun58142_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun58142_ip = 291;
                        continue _fun58142
                    }
                case 18:
                    var1 = _closure2_slot3;
                    if (!(var0 != var1)) {
                        _fun58142_ip = 291;
                        continue _fun58142
                    }
                case 29:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 4;
                    var4 = var5[var4];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var4);
                    var6 = var4.DiscountIdToProductOfferId;
                    var4 = _closure2_slot0;
                    var4 = var4.discount_id;
                    var7 = var6[var4];
                    var6 = var0 == var7;
                    var4 = undefined;
                    if (var6) {
                        _fun58142_ip = 97;
                        continue _fun58142
                    }
                case 83:
                    var6 = _closure2_slot3;
                    var6 = var6.identifier;
                    var4 = var7[var6];
                case 97:
                    var _closure3_slot0 = var4;
                    if (!(var0 != var4)) {
                        _fun58142_ip = 289;
                        continue _fun58142
                    }
                case 108:
                    var4 = _closure2_slot3;
                    var6 = var4.currencyCode;
                    var4 = var6.toLowerCase;
                    var6 = var4.bind(var6)();
                    var4 = _closure1_slot4;
                    var4 = var6 in var4;
                    if (var4) {
                        _fun58142_ip = 151;
                        continue _fun58142
                    }
                case 139:
                    var4 = _closure1_slot4;
                    var4 = var4.USD;
                    _fun58142_ip = 171;
                    continue _fun58142;
                case 151:
                    var6 = _closure2_slot3;
                    var7 = var6.currencyCode;
                    var6 = var7.toLowerCase;
                    var4 = var6.bind(var7)();
                case 171:
                    var3 = _closure2_slot3;
                    var6 = var3.subscriptionOffers;
                    if (!(var0 != var6)) {
                        _fun58142_ip = 237;
                        continue _fun58142
                    }
                case 185:
                    var6 = var3.subscriptionOffers;
                    var3 = var6.find;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.offerId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var3.bind(var6)(var2);
                    if (!(var0 != var2)) {
                        _fun58142_ip = 237;
                        continue _fun58142
                    }
                case 210:
                    var3 = var2.pricingPhases;
                    if (!(var0 != var3)) {
                        _fun58142_ip = 237;
                        continue _fun58142
                    }
                case 220:
                    var3 = var2.pricingPhases;
                    var6 = var3.length;
                    var3 = 0;
                    if (!(!(var6 > var3))) {
                        _fun58142_ip = 239;
                        continue _fun58142
                    }
                case 237:
                    return var0;
                case 239:
                    var2 = var2.pricingPhases;
                    var2 = var2[var3];
                    var3 = var2.price;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 5;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.formatPrice;
                    var1 = var1.bind(var2)(var3, var4);
                    return var1;
                case 289:
                    return var0;
                case 291:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var0, var1);
        var0 = {};
        var0.discountedProduct = var2;
        var0.discountedPriceString = var1;
        return var0;
    };
    var2.useDiscountedPremiumProductInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4568, 483, 566, 4565, 4563, 2]);