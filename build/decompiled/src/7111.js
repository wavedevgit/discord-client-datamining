// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var5 = {};
    var7 = 0;
    var5.purchased = var7;
    var0 = 'purchased';
    var5[var7] = var0;
    var6 = 1;
    var5.canceled = var6;
    var0 = 'canceled';
    var5[var6] = var0;
    var2 = 2;
    var5.pending = var2;
    var0 = 'pending';
    var5[var2] = var0;
    var4 = {};
    var4.test = var7;
    var0 = 'test';
    var4[var7] = var0;
    var4.promo = var6;
    var0 = 'promo';
    var4[var6] = var0;
    var4.rewarded = var2;
    var0 = 'rewarded';
    var4[var2] = var0;
    var3 = {};
    var3.yet = var7;
    var0 = 'yet';
    var3[var7] = var0;
    var3.consumed = var6;
    var2 = 'consumed';
    var3[var6] = var2;
    var2 = {};
    var2.yet = var7;
    var2[var7] = var0;
    var2.acknowledged = var6;
    var0 = 'acknowledged';
    var2[var6] = var0;
    var0 = {};
    var6 = 'IN_APP_MESSAGING';
    var0.IN_APP_MESSAGING = var6;
    var6 = 'PRICE_CHANGE_CONFIRMATION';
    var0.PRICE_CHANGE_CONFIRMATION = var6;
    var6 = 'PRODUCT_DETAILS';
    var0.PRODUCT_DETAILS = var6;
    var6 = 'SUBSCRIPTIONS';
    var0.SUBSCRIPTIONS = var6;
    var6 = 'SUBSCRIPTIONS_UPDATE';
    var0.SUBSCRIPTIONS_UPDATE = var6;
    var1.AndroidPurchaseState = var5;
    var1.AndroidPurchaseType = var4;
    var1.AndroidConsumptionState = var3;
    var1.AndroidAcknowledgementState = var2;
    var1.FeatureType = var0;
    var0 = function(arg0) { // Original name: singleProductAndroidMap, environment: var0
        _fun58326: for (var _fun58326_ip = 0;;) switch (_fun58326_ip) {
            case 0:
                var4 = arg0;
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var1 = {};
                var7 = var4.oneTimePurchaseOfferDetails;
                var5 = null;
                var8 = var5 == var7;
                var6 = undefined;
                if (var8) {
                    _fun58326_ip = 41;
                    continue _fun58326
                }
            case 35:
                var6 = var7.formattedPrice;
            case 41:
                if (!(var5 == var6)) {
                    _fun58326_ip = 51;
                    continue _fun58326
                }
            case 45:
                var6 = var4.price;
            case 51:
                var1.price = var6;
                var7 = var4.oneTimePurchaseOfferDetails;
                var8 = var5 == var7;
                var6 = undefined;
                if (var8) {
                    _fun58326_ip = 77;
                    continue _fun58326
                }
            case 71:
                var6 = var7.formattedPrice;
            case 77:
                if (!(var5 == var6)) {
                    _fun58326_ip = 87;
                    continue _fun58326
                }
            case 81:
                var6 = var4.price;
            case 87:
                var1.localizedPrice = var6;
                var6 = var4.oneTimePurchaseOfferDetails;
                var7 = var5 == var6;
                var0 = undefined;
                if (var7) {
                    _fun58326_ip = 115;
                    continue _fun58326
                }
            case 107:
                var0 = var6.priceCurrencyCode;
            case 115:
                if (!(var5 == var0)) {
                    _fun58326_ip = 125;
                    continue _fun58326
                }
            case 119:
                var0 = var4.currency;
            case 125:
                var1.currency = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var1.singleProductAndroidMap = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);