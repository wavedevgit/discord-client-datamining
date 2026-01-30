// actions/SubscriptionPlanActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function() { // Original name: fetchSubscriptionPlansForSKU, environment: var1
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var3;
    var0 = function() { // Original name: _fetchSubscriptionPlansForSKU, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun49780: for (var _fun49780_ip = 0;;) switch (_fun49780_ip) {
                    case 0:
                        StartGenerator();
                        var14 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49780_ip = 508;
                            continue _fun49780
                        }
                    case 13:
                        var4 = var14;
                        var11 = arg1;
                        var10 = arg2;
                        var8 = arg3;
                        var6 = arg4;
                        var5 = undefined;
                        var2 = undefined;
                        var3 = undefined;
                        var12 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 4;
                        var9 = var9[var7];
                        var13 = var12.bind(var5)(var9);
                        var12 = var13.dispatch;
                        var9 = {};
                        var15 = 'SUBSCRIPTION_PLANS_FETCH';
                        var9.type = var15;
                        var9.skuId = var14;
                        var9 = var12.bind(var13)(var9);
                    case 84: // try_start_0
                        var9 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true,
                            'retries': 10
                        };
                        var14 = _closure1_slot5;
                        var13 = var14.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS;
                        var12 = var4;
                        var12 = var13.bind(var14)(var12);
                        var9.url = var12;
                        var2 = var9;
                        var3 = {};
                        var12 = var11;
                        var9 = null;
                        if (!(var9 != var12)) {
                            _fun49780_ip = 145;
                            continue _fun49780
                        }
                    case 136:
                        var12 = var3;
                        var12.country_code = var11;
                    case 145:
                        var11 = var10;
                        if (!(var9 != var11)) {
                            _fun49780_ip = 161;
                            continue _fun49780
                        }
                    case 152:
                        var11 = var3;
                        var11.payment_source_id = var10;
                    case 161:
                        var10 = var8;
                        if (!(var9 != var10)) {
                            _fun49780_ip = 177;
                            continue _fun49780
                        }
                    case 168:
                        var10 = var3;
                        var10.include_unpublished = var8;
                    case 177:
                        var8 = var6;
                        if (!(var9 != var8)) {
                            _fun49780_ip = 195;
                            continue _fun49780
                        }
                    case 184:
                        var8 = var3;
                        var8.revenue_surface = var6;
                    case 195:
                        var6 = var2;
                        var6.query = var3;
                        var3 = _closure1_slot4;
                        var3 = var3.ipCountryCodeLoaded;
                        if (var3) {
                            _fun49780_ip = 260;
                            continue _fun49780
                        }
                    case 217:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 5;
                        var3 = var8[var3];
                        var6 = var6.bind(var5)(var3);
                        var3 = var6.fetchIpCountryCode;
                        var3 = var3.bind(var6)();
                        SaveGenerator(address = 251);
                    case 249:
                        return var3;
                    case 251:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (!var6) {
                            _fun49780_ip = 260;
                            continue _fun49780
                        }
                    case 257: // try_end0
                        return var3;
                    case 260: // try_start_1
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 6;
                        var3 = var8[var3];
                        var3 = var6.bind(var5)(var3);
                        var6 = var3.HTTP;
                        var3 = var6.get;
                        var2 = var3.bind(var6)(var2);
                        SaveGenerator(address = 299);
                    case 297:
                        return var2;
                    case 299:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49780_ip = 365;
                            continue _fun49780
                        }
                    case 305:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var8 = var6.bind(var5)(var3);
                        var6 = var8.dispatch;
                        var3 = {};
                        var9 = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
                        var3.type = var9;
                        var9 = var4;
                        var3.skuId = var9;
                        var9 = var2.body;
                        var3.subscriptionPlans = var9;
                        var3 = var6.bind(var8)(var3);
                    case 362: // try_end1
                        return var5;
                    case 365:
                        return var2;
                    case 368: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var7 = var6[var7];
                        var9 = var2.bind(var5)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'SUBSCRIPTION_PLANS_FETCH_FAILURE';
                        var7.type = var10;
                        var7.skuId = var4;
                        var7 = var8.bind(var9)(var7);
                        var7 = _closure1_slot0;
                        var1 = 7;
                        var1 = var6[var1];
                        var7 = var7.bind(var5)(var1);
                        var1 = var7.captureBillingException;
                        var1 = var1.bind(var7)(var3);
                        var1 = 8;
                        var1 = var6[var1];
                        var1 = var2.bind(var5)(var1);
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var17 = var2;
                        var16 = var3;
                        var1 = new var17[var1](var16, var15);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = 'Failed to fetch subscription plans for SKU ';
                        var2 = var3.bind(var2)(var4);
                        var1.message = var2;
                        throw var1;
                    case 508:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot6 = var7;
    var4 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/SubscriptionPlanActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.fetchSubscriptionPlansForSKU = var3;
    var3 = function(arg0, arg1) { // Original name: fetchSubscriptionPlansBySKUs, environment: var1
        var5 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.all;
        var4 = var5.filter;
        var3 = function(arg0) { // Environment: var0
            var0 = _closure1_slot7;
            var1 = var0.NONE;
            var0 = arg0;
            var0 = var0 !== var1;
            return var0;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot8;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.fetchSubscriptionPlansBySKUs = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: fetchPremiumSubscriptionPlans, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.all;
        var5 = _closure1_slot6;
        var4 = var5.filter;
        var3 = function(arg0) { // Environment: var0
            var0 = _closure1_slot7;
            var1 = var0.NONE;
            var0 = arg0;
            var0 = var0 !== var1;
            return var0;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var5 = _closure1_slot8;
            var9 = _closure2_slot0;
            var8 = _closure2_slot1;
            var6 = _closure2_slot2;
            var10 = arg0;
            var11 = undefined;
            var7 = undefined;
            var0 = var11[var5](var10, var9, var8, var7, var6, var5);
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.fetchPremiumSubscriptionPlans = var3;
    var1 = function() { // Original name: resetSubscriptionPlanData, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SUBSCRIPTION_PLANS_RESET';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetSubscriptionPlanData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3070, 660, 1615, 806, 3402, 507, 3084, 3310, 2]);