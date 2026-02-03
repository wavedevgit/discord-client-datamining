// modules/billing/native/subscription/useStoreFrontPrice.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot3 = var1;
    var1 = {};
    var4 = 'PRICE_AVAILABLE';
    var1.PRICE_AVAILABLE = var4;
    var4 = 'SUBSCRIPTION_PLAN_UNAVAILABLE';
    var1.SUBSCRIPTION_PLAN_UNAVAILABLE = var4;
    var4 = 'STOREFRONT_UNAVAILABLE';
    var1.STOREFRONT_UNAVAILABLE = var4;
    var4 = 'MISMATCHING_COUNTRIES';
    var1.MISMATCHING_COUNTRIES = var4;
    var4 = 'COUNTRY_PRICE_UNAVAILABLE';
    var1.COUNTRY_PRICE_UNAVAILABLE = var4;
    var _closure1_slot4 = var1;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/subscription/useStoreFrontPrice.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun104668: for (var _fun104668_ip = 0;;) switch (_fun104668_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun104668_ip = 213;
                        continue _fun104668
                    }
                case 16:
                    var0 = _closure2_slot1;
                    if (!(var1 != var0)) {
                        _fun104668_ip = 196;
                        continue _fun104668
                    }
                case 27:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var5 = 2;
                    var0 = var9[var5];
                    var6 = undefined;
                    var12 = var7.bind(var6)(var0);
                    var11 = var12.getCountryPrices;
                    var0 = _closure2_slot0;
                    var10 = var0.id;
                    var8 = _closure1_slot3;
                    var4 = var8.MOBILE;
                    var4 = var11.bind(var12)(var10, var4);
                    var5 = var9[var5];
                    var7 = var7.bind(var6)(var5);
                    var6 = var7.experimentalGetPrice;
                    var5 = var0.id;
                    var0 = {};
                    var8 = var8.MOBILE;
                    var0.purchaseType = var8;
                    var3 = _closure2_slot1;
                    var8 = var3.currency;
                    var0.currency = var8;
                    var0 = var6.bind(var7)(var5, var0);
                    var4 = var4.countryCode;
                    var3 = var3.country;
                    if (!(var4 === var3)) {
                        _fun104668_ip = 181;
                        continue _fun104668
                    }
                case 153:
                    if (!(var1 != var0)) {
                        _fun104668_ip = 169;
                        continue _fun104668
                    }
                case 157:
                    var1 = _closure1_slot4;
                    var1 = var1.PRICE_AVAILABLE;
                    _fun104668_ip = 179;
                    continue _fun104668;
                case 169:
                    var3 = _closure1_slot4;
                    var1 = var3.COUNTRY_PRICE_UNAVAILABLE;
                case 179:
                    _fun104668_ip = 191;
                    continue _fun104668;
                case 181:
                    var2 = _closure1_slot4;
                    var1 = var2.MISMATCHING_COUNTRIES;
                case 191:
                    var2 = var0;
                    _fun104668_ip = 228;
                    continue _fun104668;
                case 196:
                    var0 = _closure1_slot4;
                    var1 = var0.STOREFRONT_UNAVAILABLE;
                    var2 = undefined;
                    _fun104668_ip = 228;
                    continue _fun104668;
                case 213:
                    var0 = _closure1_slot4;
                    var1 = var0.SUBSCRIPTION_PLAN_UNAVAILABLE;
                    var2 = undefined;
                case 228:
                    var0 = {};
                    var0.price = var2;
                    var0.priceState = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.PriceStates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 3100, 2]);