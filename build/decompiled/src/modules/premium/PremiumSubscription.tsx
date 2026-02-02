// modules/premium/PremiumSubscription.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var4 = function arg0() {
        _fun25389: for (var _fun25389_ip = 0;;) switch (_fun25389_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun25389_ip = 21;
                    continue _fun25389
                }
            case 18:
                var1 = 1;
            case 21:
                var _closure2_slot1 = var1;
                var1 = global;
                var4 = var1.Object;
                var3 = var4.keys;
                var2 = _closure1_slot1;
                var3 = var3.bind(var4)(var2);
                var2 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    _fun25390: for (var _fun25390_ip = 0;;) switch (_fun25390_ip) {
                        case 0:
                            var1 = _closure1_slot1;
                            var0 = arg0;
                            var1 = var1[var0];
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun25390_ip = 43;
                                continue _fun25390
                            }
                        case 23:
                            var3 = var1.skuId;
                            var2 = _closure1_slot2;
                            var2 = var2.NONE;
                            var0 = var3 === var2;
                        case 43:
                            if (!var0) {
                                _fun25390_ip = 63;
                                continue _fun25390
                            }
                        case 46:
                            var3 = var1.interval;
                            var2 = _closure2_slot0;
                            var0 = var3 === var2;
                        case 63:
                            if (!var0) {
                                _fun25390_ip = 83;
                                continue _fun25390
                            }
                        case 66:
                            var2 = var1.intervalCount;
                            var1 = _closure2_slot1;
                            var0 = var2 === var1;
                        case 83:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun25389_ip = 81;
                    continue _fun25389
                }
            case 71:
                var1 = _closure1_slot0;
                var0 = var1.NONE_MONTH;
            case 81:
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            _fun25392: for (var _fun25392_ip = 0;;) switch (_fun25392_ip) {
                case 0:
                    var1 = _closure1_slot1;
                    var0 = arg0;
                    var0 = var0.planId;
                    var1 = var1[var0];
                    var2 = null;
                    var0 = var2 != var1;
                    if (!var0) {
                        _fun25392_ip = 39;
                        continue _fun25392
                    }
                case 29:
                    var1 = var1.premiumType;
                    var0 = var2 != var1;
                case 39:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var8 = var5.SubscriptionPlans;
    var _closure1_slot0 = var8;
    var8 = var5.SubscriptionPlanInfo;
    var _closure1_slot1 = var8;
    var5 = var5.PremiumSubscriptionSKUs;
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/PremiumSubscription.tsx';
    var5 = var6.bind(var7)(var5);
    var2.getNonePlanIdForIntervalType = var4;
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var0 = arg0;
        var3 = var0.items;
        var0 = 0;
        var0 = var3[var0];
        var0 = var0.planId;
        var0 = var2[var0];
        var3 = _closure1_slot3;
        var2 = var0.interval;
        var1 = var0.intervalCount;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.getNonePlanIdForSubscription = var4;
    var2.getBaseSubscriptionItemForSubscriptionItems = var3;
    var1 = function arg0, arg1, arg2() {
        _fun25394: for (var _fun25394_ip = 0;;) switch (_fun25394_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var2 = arg2;
                var4 = _closure1_slot4;
                var1 = undefined;
                var4 = var4.bind(var1)(var6);
                var5 = null;
                if (!(var5 != var4)) {
                    _fun25394_ip = 37;
                    continue _fun25394
                }
            case 29:
                var4 = var4.planId;
                return var4;
            case 37:
                var5 = var6.length;
                var4 = 0;
                if (!(var5 > var4)) {
                    _fun25394_ip = 78;
                    continue _fun25394
                }
            case 48:
                var5 = _closure1_slot1;
                var4 = var6[var4];
                var4 = var4.planId;
                var4 = var5[var4];
                var3 = var4.interval;
                var2 = var4.intervalCount;
            case 78:
                var0 = _closure1_slot3;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var2.getBasePlanIdForSubscriptionItems = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1615, 2]);