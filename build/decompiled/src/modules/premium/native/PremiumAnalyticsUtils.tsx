// modules/premium/native/PremiumAnalyticsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var8;
    var0 = function arg0() {
        _fun58145: for (var _fun58145_ip = 0;;) switch (_fun58145_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var3 = null;
                var5 = var3 == var2;
                var1 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun58145_ip = 23;
                    continue _fun58145
                }
            case 18:
                var4 = var2.id;
            case 23:
                var0.subscription_id = var4;
                var5 = var3 == var2;
                var4 = undefined;
                if (var5) {
                    _fun58145_ip = 42;
                    continue _fun58145
                }
            case 37:
                var4 = var2.type;
            case 42:
                var0.subscription_type = var4;
                var5 = var3 != var2;
                var4 = undefined;
                if (!var5) {
                    _fun58145_ip = 107;
                    continue _fun58145
                }
            case 56:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.getPremiumPlanItem;
                var6 = var5.bind(var6)(var2);
                var7 = var3 == var6;
                var5 = undefined;
                if (var7) {
                    _fun58145_ip = 104;
                    continue _fun58145
                }
            case 99:
                var5 = var6.id;
            case 104:
                var4 = var5;
            case 107:
                var0.subscription_plan_id = var4;
                var5 = var3 == var2;
                var4 = undefined;
                if (var5) {
                    _fun58145_ip = 127;
                    continue _fun58145
                }
            case 121:
                var4 = var2.paymentGatewayPlanId;
            case 127:
                var0.subscription_plan_gateway_plan_id = var4;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun58145_ip = 146;
                    continue _fun58145
                }
            case 141:
                var1 = var2.status;
            case 146:
                var0.subscription_status = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var4 = var3.SubscriptionTypes;
    var _closure1_slot3 = var4;
    var4 = var3.PurchaseTypeToAnalyticsPaymentType;
    var _closure1_slot4 = var4;
    var4 = var3.PurchaseTypes;
    var _closure1_slot5 = var4;
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var5 = {};
    var3 = 'sku_select';
    var5.SKU_SELECT = var3;
    var3 = 'plan_select';
    var5.PLAN_SELECT = var3;
    var3 = 'review';
    var5.REVIEW = var3;
    var3 = 'confirm';
    var5.CONFIRM = var3;
    var3 = 'apple_payment_link_nitro_standard_checkout';
    var5.APPLE_PAYMENT_LINK_NITRO_STANDARD_CHECKOUT = var3;
    var3 = 'yearly_upsell';
    var5.YEARLY_UPSELL = var3;
    var3 = 'premium_upsell';
    var5.PREMIUM_UPSELL = var3;
    var3 = 'external_payment';
    var5.EXTERNAL_PAYMENT = var3;
    var3 = 'reward_sku_select';
    var5.REWARD_SKU_SELECT = var3;
    var4 = {};
    var6 = 1;
    var4.WHAT_YOU_LOSE = var6;
    var3 = 'WHAT_YOU_LOSE';
    var4[var6] = var3;
    var6 = 2;
    var4.CONFIRM = var6;
    var3 = 'CONFIRM';
    var4[var6] = var3;
    var6 = 3;
    var4.PREVIEW = var6;
    var3 = 'PREVIEW';
    var4[var6] = var3;
    var6 = 4;
    var4.DOWNGRADE_TO_TIER_0 = var6;
    var3 = 'DOWNGRADE_TO_TIER_0';
    var4[var6] = var3;
    var9 = 5;
    var4.MOBILE_SUBSCRIPTION_MANAGE = var9;
    var3 = 'MOBILE_SUBSCRIPTION_MANAGE';
    var4[var9] = var3;
    var3 = {};
    var10 = var4.WHAT_YOU_LOSE;
    var9 = "What You're Losing";
    var3[var10] = var9;
    var10 = var4.DOWNGRADE_TO_TIER_0;
    var9 = 'Downgrade To Tier 0';
    var3[var10] = var9;
    var10 = var4.CONFIRM;
    var9 = 'Confirm Cancellation';
    var3[var10] = var9;
    var10 = var4.PREVIEW;
    var9 = 'Preview Updated Subscription';
    var3[var10] = var9;
    var10 = var4.MOBILE_SUBSCRIPTION_MANAGE;
    var9 = 'Mobile Subscription Manage';
    var3[var10] = var9;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/native/PremiumAnalyticsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.PaymentFlowStep = var5;
    var5 = function arg0() {
        _fun58146: for (var _fun58146_ip = 0;;) switch (_fun58146_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.analyticsLoadId;
                var4 = var0.isGift;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun58146_ip = 23;
                    continue _fun58146
                }
            case 21:
                var4 = false;
            case 23:
                var2 = var0.analyticsLocation;
                var3 = var0.analyticsLocations;
                var0 = {};
                var0.load_id = var5;
                var7 = _closure1_slot4;
                var6 = _closure1_slot5;
                var6 = var6.SUBSCRIPTION;
                var6 = var7[var6];
                var0.payment_type = var6;
                var5 = _closure1_slot3;
                var5 = var5.PREMIUM;
                var0.subscription_type = var5;
                var0.is_gift = var4;
                var0.location = var2;
                var0.location_stack = var3;
                var3 = null;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun58146_ip = 113;
                    continue _fun58146
                }
            case 108:
                var1 = var2.section;
            case 113:
                var0.location_section = var1;
                return var0;
        }
    };
    var2.getBasePurchaseFlowAnalyticsFields = var5;
    var5 = function arg0, arg1() {
        var0 = {};
        var2 = arg0;
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        var2 = arg1;
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var2.getPaymentFlowCompletedAnalyticsFields = var5;
    var5 = function arg0, arg1() {
        var0 = {};
        var2 = arg0;
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        var2 = arg1;
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var2.getPaymentFlowStepAnalyticsFields = var5;
    var5 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.v4;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.getNewAnalyticsLoadId = var5;
    var2.CancellationFlowSteps = var4;
    var2.STEP_ANALYTICS_NAMES = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot6;
        var2 = var1.CANCELLATION_FLOW_STARTED;
        var1 = {};
        var6 = arg1;
        var1.location_stack = var6;
        var6 = _closure1_slot7;
        var5 = arg0;
        var7 = var6.bind(var0)(var5);
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackPremiumSubscriptionCancellationStarted = var3;
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.fromStep;
        var8 = var0.toStep;
        var6 = var0.subscription;
        var7 = var0.analyticsLocations;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot6;
        var2 = var1.CANCELLATION_FLOW_STEP;
        var1 = {};
        var1.from_step = var9;
        var1.to_step = var8;
        var1.location_stack = var7;
        var5 = _closure1_slot7;
        var10 = var5.bind(var0)(var6);
        var11 = var1;
        var5 = copyDataProperties(var11, var10);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackPremiumSubscriptionCancellationFlowStep = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 491, 3100, 795, 2]);