// modules/premium/native/gifting/PremiumGiftAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gifting/PremiumGiftAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.currentStep;
        var _closure2_slot0 = var9;
        var0 = var0.children;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 2;
        var4 = var4[var2];
        var2 = undefined;
        var4 = var5.bind(var2)(var4);
        var2 = var4.useNativeGiftContext;
        var4 = var2.bind(var4)();
        var8 = var4.customGiftMessage;
        var _closure2_slot1 = var8;
        var2 = var4.productId;
        var _closure2_slot2 = var2;
        var6 = var4.basePurchaseAnalytics;
        var _closure2_slot3 = var6;
        var4 = _closure1_slot3;
        var5 = var4.useRef;
        var3 = null;
        var5 = var5.bind(var4)(var3);
        var _closure2_slot4 = var5;
        var3 = global;
        var7 = var3.Date;
        var3 = var7.now;
        var7 = var3.bind(var7)();
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var7);
        var _closure2_slot5 = var3;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var7);
        var _closure2_slot6 = var3;
        var7 = var4.useEffect;
        var3 = new Array(5);
        var3[0] = var6;
        var3[1] = var9;
        var3[2] = var5;
        var3[3] = var8;
        var3[4] = var2;
        var2 = function() { // Environment: var1
            _fun75726: for (var _fun75726_ip = 0;;) switch (_fun75726_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot4;
                    var1 = var1.current;
                    if (!(var2 !== var1)) {
                        _fun75726_ip = 580;
                        continue _fun75726
                    }
                case 23:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun75726_ip = 186;
                        continue _fun75726
                    }
                case 58:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 6;
                    var3 = var10[var3];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var3);
                    var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
                    var9 = _closure2_slot3;
                    var3 = var3.bind(var4)(var9);
                    var4 = _closure1_slot1;
                    var3 = 4;
                    var3 = var10[var3];
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.PAYMENT_FLOW_LOADED;
                    var2 = {};
                    var6 = 3;
                    var6 = var10[var6];
                    var8 = var8.bind(var7)(var6);
                    var7 = var8.getPaymentFlowStepAnalyticsFields;
                    var6 = {};
                    var10 = _closure2_slot0;
                    var6.initial_step = var10;
                    var16 = var7.bind(var8)(var9, var6);
                    var17 = var2;
                    var6 = copyDataProperties(var17, var16);
                    var2 = var4.bind(var5)(var3, var2);
                    _fun75726_ip = 556;
                    continue _fun75726;
                case 186:
                    var3 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 3;
                    var2 = var2[var9];
                    var8 = undefined;
                    var2 = var4.bind(var8)(var2);
                    var2 = var2.PaymentFlowStep;
                    var2 = var2.CONFIRM;
                    if (!(var3 === var2)) {
                        _fun75726_ip = 403;
                        continue _fun75726
                    }
                case 234:
                    var3 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var2 = 4;
                    var2 = var14[var2];
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.PAYMENT_FLOW_SUCCEEDED;
                    var2 = {};
                    var13 = _closure1_slot0;
                    var6 = var14[var9];
                    var12 = var13.bind(var8)(var6);
                    var11 = var12.getPaymentFlowStepAnalyticsFields;
                    var10 = _closure2_slot3;
                    var6 = {};
                    var15 = _closure2_slot2;
                    var6.subscription_plan_gateway_plan_id = var15;
                    var16 = var11.bind(var12)(var10, var6);
                    var17 = var2;
                    var6 = copyDataProperties(var17, var16);
                    var10 = _closure2_slot1;
                    var6 = 5;
                    var11 = var14[var6];
                    var11 = var13.bind(var8)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var6 = var14[var6];
                    var6 = var13.bind(var8)(var6);
                    var6 = var6.t;
                    var6 = var6.ZkOo1U;
                    var6 = var11.bind(var12)(var6);
                    var10 = var10 !== var6;
                    var6 = 'is_custom_message_edited';
                    var2[var6] = var10;
                    var10 = false;
                    var6 = 'is_custom_emoji_sound_available';
                    var2[var6] = var10;
                    var2 = var4.bind(var5)(var3, var2);
                case 403:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.PAYMENT_FLOW_STEP;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var6 = var6[var9];
                    var9 = var7.bind(var8)(var6);
                    var8 = var9.getPaymentFlowStepAnalyticsFields;
                    var7 = _closure2_slot3;
                    var6 = {};
                    var10 = _closure2_slot4;
                    var10 = var10.current;
                    var6.from_step = var10;
                    var10 = _closure2_slot0;
                    var6.to_step = var10;
                    var10 = _closure2_slot6;
                    var10 = var10.current;
                    var10 = var1 - var10;
                    var6.step_duration_ms = var10;
                    var10 = _closure2_slot5;
                    var10 = var10.current;
                    var10 = var1 - var10;
                    var6.flow_duration_ms = var10;
                    var10 = _closure2_slot2;
                    var6.subscription_plan_gateway_plan_id = var10;
                    var16 = var8.bind(var9)(var7, var6);
                    var17 = var2;
                    var6 = copyDataProperties(var17, var16);
                    var2 = var4.bind(var5)(var3, var2);
                case 556:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot0;
                    var3.current = var2;
                    var0 = _closure2_slot6;
                    var0.current = var1;
                case 580:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var7.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                _fun75728: for (var _fun75728_ip = 0;;) switch (_fun75728_ip) {
                    case 0:
                        var0 = _closure2_slot4;
                        var4 = var0.current;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 3;
                        var3 = var3[var0];
                        var0 = undefined;
                        var3 = var5.bind(var0)(var3);
                        var3 = var3.PaymentFlowStep;
                        var3 = var3.CONFIRM;
                        if (!(var4 !== var3)) {
                            _fun75728_ip = 98;
                            continue _fun75728
                        }
                    case 53:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 4;
                        var3 = var5[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.track;
                        var2 = _closure1_slot4;
                        var2 = var2.PAYMENT_FLOW_CANCELED;
                        var1 = _closure2_slot3;
                        var1 = var3.bind(var4)(var2, var1);
                    case 98:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 9449, 7129, 795, 1234, 7130, 2]);