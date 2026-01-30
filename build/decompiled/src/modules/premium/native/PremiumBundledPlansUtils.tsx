// modules/premium/native/PremiumBundledPlansUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function(arg0) { // Original name: getPremiumBundleWithPredicate, environment: var1
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var3);
        var0 = var0.AppStorePremiumProductIdsToPremiumBundledItems;
        var2 = var1.bind(var2)(var0);
        var1 = var2.find;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var6;
    var5 = function(arg0) { // Original name: getPremiumBundledItemsFromProductId, environment: var1
        _fun58172: for (var _fun58172_ip = 0;;) switch (_fun58172_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 1;
                var2 = var2[var4];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.AppStorePremiumProductIdsToPremiumBundledItems;
                var2 = var1 in var2;
                if (var2) {
                    _fun58172_ip = 93;
                    continue _fun58172
                }
            case 41:
                var2 = global;
                var6 = var2.Error;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = 'Invalid bundled product ID ';
                var7 = var5.bind(var2)(var1);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = var5;
                var2 = new var8[var6](var7, var6);
                var2 = var2 instanceof Object ? var2 : var5;
                throw var2;
            case 93:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AppStorePremiumProductIdsToPremiumBundledItems;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function(arg0) { // Original name: getToggledIntervalProduct, environment: var1
        _fun58173: for (var _fun58173_ip = 0;;) switch (_fun58173_ip) {
            case 0:
                var3 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var _closure2_slot0 = var0;
                var6 = var0.premiumTier;
                var0 = _closure1_slot2;
                var5 = var0.TIER_1;
                var3 = null;
                var0 = null;
                if (!(var6 !== var5)) {
                    _fun58173_ip = 79;
                    continue _fun58173
                }
            case 47:
                var4 = _closure1_slot4;
                var2 = function(arg0) { // Environment: var2
                    _fun58174: for (var _fun58174_ip = 0;;) switch (_fun58174_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.numPremiumGuild;
                            var0 = _closure2_slot0;
                            var0 = var0.numPremiumGuild;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun58174_ip = 49;
                                continue _fun58174
                            }
                        case 29:
                            var4 = var1.premiumTier;
                            var3 = _closure2_slot0;
                            var3 = var3.premiumTier;
                            var0 = var4 === var3;
                        case 49:
                            if (!var0) {
                                _fun58174_ip = 72;
                                continue _fun58174
                            }
                        case 52:
                            var3 = var1.interval;
                            var2 = _closure2_slot0;
                            var2 = var2.interval;
                            var0 = var3 !== var2;
                        case 72:
                            if (!var0) {
                                _fun58174_ip = 84;
                                continue _fun58174
                            }
                        case 75:
                            var1 = var1.isDeprecated;
                            var0 = !var1;
                        case 84:
                            return var0;
                    }
                };
                var2 = var4.bind(var1)(var2);
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun58173_ip = 76;
                    continue _fun58173
                }
            case 70:
                var1 = var2.productId;
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var3 = function(arg0) { // Original name: isValidBundleProductId, environment: var1
        _fun58175: for (var _fun58175_ip = 0;;) switch (_fun58175_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun58175_ip = 47;
                    continue _fun58175
                }
            case 12:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.AppStorePremiumProductIdsToPremiumBundledItems;
                var0 = var2 in var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var10 = var7.PremiumTypes;
    var _closure1_slot2 = var10;
    var7 = var7.SubscriptionIntervalTypes;
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium/native/PremiumBundledPlansUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function(arg0) { // Original name: getPremiumBundlesWithPredicate, environment: var1
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var3);
        var0 = var0.AppStorePremiumProductIdsToPremiumBundledItems;
        var2 = var1.bind(var2)(var0);
        var1 = var2.filter;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getPremiumBundlesWithPredicate = var7;
    var2.getPremiumBundleWithPredicate = var6;
    var2.getPremiumBundledItemsFromProductId = var5;
    var2.getToggledIntervalProduct = var4;
    var4 = function(arg0) { // Original name: getProductIdsForBothIntervals, environment: var1
        _fun58177: for (var _fun58177_ip = 0;;) switch (_fun58177_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot5;
                var1 = undefined;
                var5 = var0.bind(var1)(var3);
                var0 = _closure1_slot6;
                var1 = var0.bind(var1)(var3);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun58177_ip = 95;
                    continue _fun58177
                }
            case 32:
                var0 = {};
                var8 = var5.interval;
                var6 = _closure1_slot3;
                var7 = var6.MONTH;
                var6 = var1;
                if (!(var8 === var7)) {
                    _fun58177_ip = 60;
                    continue _fun58177
                }
            case 57:
                var6 = var3;
            case 60:
                var0.monthly = var6;
                var5 = var5.interval;
                var4 = _closure1_slot3;
                var4 = var4.YEAR;
                if (!(var5 === var4)) {
                    _fun58177_ip = 88;
                    continue _fun58177
                }
            case 85:
                var1 = var3;
            case 88:
                var0.yearly = var1;
                _fun58177_ip = 110;
                continue _fun58177;
            case 95:
                var1 = {};
                var1.monthly = var3;
                var1.yearly = var2;
                var0 = var1;
            case 110:
                return var0;
        }
    };
    var2.getProductIdsForBothIntervals = var4;
    var4 = function(arg0, arg1) { // Original name: productsHaveSamePerks, environment: var1
        _fun58178: for (var _fun58178_ip = 0;;) switch (_fun58178_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var4 = _closure1_slot7;
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                if (!var4) {
                    _fun58178_ip = 35;
                    continue _fun58178
                }
            case 23:
                var4 = _closure1_slot7;
                var4 = var4.bind(var3)(var0);
                if (var4) {
                    _fun58178_ip = 41;
                    continue _fun58178
                }
            case 35:
                var4 = var1 === var0;
                return var4;
            case 41:
                var4 = null;
                if (!(var4 != var1)) {
                    _fun58178_ip = 110;
                    continue _fun58178
                }
            case 47:
                if (!(var4 != var0)) {
                    _fun58178_ip = 110;
                    continue _fun58178
                }
            case 51:
                if (!(var1 !== var0)) {
                    _fun58178_ip = 106;
                    continue _fun58178
                }
            case 55:
                var2 = _closure1_slot5;
                var4 = var2.bind(var3)(var1);
                var3 = var2.bind(var3)(var0);
                var5 = var4.numPremiumGuild;
                var2 = var3.numPremiumGuild;
                var2 = var5 === var2;
                if (!var2) {
                    _fun58178_ip = 104;
                    continue _fun58178
                }
            case 88:
                var4 = var4.premiumTier;
                var3 = var3.premiumTier;
                var2 = var4 === var3;
            case 104:
                return var2;
            case 106:
                var2 = true;
                return var2;
            case 110:
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.productsHaveSamePerks = var4;
    var2.isValidBundleProductId = var3;
    var3 = function(arg0) { // Original name: shouldAlwaysExcludeFromPlanSelect, environment: var1
        _fun58179: for (var _fun58179_ip = 0;;) switch (_fun58179_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isDeprecated;
                if (var0) {
                    _fun58179_ip = 35;
                    continue _fun58179
                }
            case 12:
                var2 = var1.interval;
                var1 = _closure1_slot3;
                var1 = var1.YEAR;
                var0 = var2 === var1;
            case 35:
                return var0;
        }
    };
    var2.shouldAlwaysExcludeFromPlanSelect = var3;
    var1 = function(arg0) { // Original name: makeExternalPaymentGatewayPlanIdOrThrow, environment: var1
        _fun58180: for (var _fun58180_ip = 0;;) switch (_fun58180_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun58180_ip = 104;
                    continue _fun58180
                }
            case 9:
                var1 = _closure1_slot7;
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                if (var1) {
                    _fun58180_ip = 102;
                    continue _fun58180
                }
            case 26:
                var1 = '.1';
                var1 = var0 + var1;
                var2 = _closure1_slot7;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun58180_ip = 100;
                    continue _fun58180
                }
            case 48:
                var2 = global;
                var4 = var2.Error;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Invalid plan ID ';
                var5 = var3.bind(var2)(var0);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 100:
                return var1;
            case 102:
                return var0;
            case 104:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'Invalid null plan ID';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.makeExternalPaymentGatewayPlanIdOrThrow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1615, 4571, 2]);