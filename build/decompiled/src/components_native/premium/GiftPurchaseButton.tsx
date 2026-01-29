// components_native/premium/GiftPurchaseButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/GiftPurchaseButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun82618: for (var _fun82618_ip = 0;;) switch (_fun82618_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.style;
                var10 = var0.color;
                var17 = var0.planId;
                var _closure2_slot0 = var17;
                var15 = var0.analyticsLocation;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun82618_ip = 39;
                    continue _fun82618
                }
            case 37:
                var15 = {};
            case 39:
                var _closure2_slot1 = var15;
                var16 = var0.recipientUserId;
                var _closure2_slot2 = var16;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 5;
                var1 = var8[var6];
                var5 = var7.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var11
                    var1 = _closure1_slot5;
                    var0 = var1.getPremiumSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var1 = 6;
                var1 = var8[var1];
                var4 = var7.bind(var3)(var1);
                var1 = var4.getProductIdForGift;
                var5 = var1.bind(var4)(var17);
                _closure2_slot3 = var5;
                var1 = 7;
                var1 = var8[var1];
                var4 = var7.bind(var3)(var1);
                var1 = var4.useCanPurchaseIAP;
                var4 = var1.bind(var4)(var5);
                var1 = var8[var6];
                var14 = var7.bind(var3)(var1);
                var13 = var14.useStateFromStores;
                var1 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var1;
                var5 = function() { // Environment: var11
                    var2 = _closure1_slot6;
                    var1 = var2.isPurchasingProduct;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var13.bind(var14)(var9, var5);
                var6 = var8[var6];
                var8 = var7.bind(var3)(var6);
                var7 = var8.useStateFromStores;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var11
                    var2 = _closure1_slot6;
                    var1 = var2.getProduct;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var7.bind(var8)(var6, var1);
                _closure2_slot4 = var1;
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun82618_ip = 273;
                    continue _fun82618
                }
            case 263:
                var2 = var2.planId;
                var1 = var2 === var17;
            case 273:
                _closure2_slot5 = var1;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 8;
                var1 = var9[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var14 = var1.analyticsLocations;
                _closure2_slot6 = var14;
                var2 = _closure1_slot0;
                var1 = 9;
                var1 = var9[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.useCreateOrReuseGiftOrder;
                var1 = 'GiftPurchaseButton';
                var13 = var2.bind(var6)(var1);
                _closure2_slot7 = var13;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var11
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun82623: for (var _fun82623_ip = 0;;) switch (_fun82623_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun82623_ip = 331;
                                    continue _fun82623
                                }
                            case 10:
                                var8 = undefined;
                                var5 = undefined;
                            case 14: // try_start_0
                                var2 = _closure2_slot7;
                                var1 = {};
                                var3 = _closure2_slot0;
                                var1.planId = var3;
                                var3 = _closure2_slot2;
                                var1.recipientUserId = var3;
                                var1 = var2.bind(var8)(var1);
                                SaveGenerator(address = 50);
                            case 48:
                                return var1;
                            case 50:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun82623_ip = 182;
                                    continue _fun82623
                                }
                            case 59:
                                var5 = var1;
                            case 62: // try_end0
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 12;
                                var2 = var4[var2];
                                var9 = var3.bind(var8)(var2);
                                var7 = var9.getPremiumTypeFromPlanId;
                                var2 = _closure2_slot0;
                                var2 = var7.bind(var9)(var2);
                                var9 = var2.premiumType;
                                var7 = var2.planInterval;
                                var2 = 13;
                                var2 = var4[var2];
                                var4 = var3.bind(var8)(var2);
                                var3 = var4.openGiftModal;
                                var2 = {};
                                var10 = _closure2_slot2;
                                var2.recipientUserId = var10;
                                var2.premiumType = var9;
                                var2.planInterval = var7;
                                var7 = _closure2_slot1;
                                var2.analyticsLocation = var7;
                                var6 = _closure2_slot6;
                                var2.analyticsLocations = var6;
                                var2.order = var5;
                                var2 = var3.bind(var4)(var2);
                                return var8;
                            case 182:
                                return var1;
                            case 185: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var1 = 10;
                                var1 = var9[var1];
                                var3 = var2.bind(var8)(var1);
                                var2 = var3.show;
                                var1 = {};
                                var7 = _closure1_slot0;
                                var4 = 11;
                                var5 = var9[var4];
                                var5 = var7.bind(var8)(var5);
                                var10 = var5.intl;
                                var6 = var10.string;
                                var5 = var9[var4];
                                var5 = var7.bind(var8)(var5);
                                var5 = var5.t;
                                var5 = var5.R0RpRX;
                                var5 = var6.bind(var10)(var5);
                                var1.title = var5;
                                var5 = var9[var4];
                                var5 = var7.bind(var8)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var9[var4];
                                var4 = var7.bind(var8)(var4);
                                var4 = var4.t;
                                var4 = var4.CKsXk3;
                                var4 = var5.bind(var6)(var4);
                                var1.body = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            case 331:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = new Array(5);
                var1[0] = var17;
                var1[1] = var16;
                var1[2] = var15;
                var1[3] = var14;
                var1[4] = var13;
                var6 = var6.bind(var7)(var2, var1);
                var2 = _closure1_slot7;
                var7 = 14;
                var0 = var9[var7];
                var1 = var8.bind(var3)(var0);
                var0 = {};
                var0.style = var12;
                var11 = function(arg0) { // Original name: text, environment: var11
                    var0 = arg0;
                    var3 = var0.style;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.style = var3;
                    var4 = _closure2_slot0;
                    var0.basePlanId = var4;
                    var4 = _closure2_slot5;
                    var0.isCurrentPlan = var4;
                    var4 = true;
                    var0.isGift = var4;
                    var3 = _closure2_slot4;
                    var0.product = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.text = var11;
                var0.color = var10;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.Sizes;
                var7 = var7.XSMALL;
                var0.size = var7;
                var0.onPress = var6;
                var0.loading = var5;
                var4 = !var4;
                var0.disabled = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 3076, 4568, 33, 566, 4565, 7120, 5684, 9380, 3890, 1234, 3068, 9358, 4829, 10594, 2]);