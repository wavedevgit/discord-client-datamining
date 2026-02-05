// modules/premium/native/gifting/PremiumGiftModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var11.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = {};
    var4 = 'PremiumGiftPlanSelect';
    var1.PLAN_SELECT = var4;
    var4 = 'GiftingSKUSelect';
    var1.REWARD_SELECT = var4;
    var4 = 'PremiumGiftCustomization';
    var1.CUSTOMIZATION = var4;
    var4 = 'PremiumGiftSuccess';
    var1.SUCCESS = var4;
    var _closure1_slot6 = var1;
    var4 = {};
    var9 = var1.PLAN_SELECT;
    var7 = 3;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.PaymentFlowStep;
    var8 = var8.SKU_SELECT;
    var4[var9] = var8;
    var9 = var1.REWARD_SELECT;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.PaymentFlowStep;
    var8 = var8.REWARD_SKU_SELECT;
    var4[var9] = var8;
    var9 = var1.CUSTOMIZATION;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.PaymentFlowStep;
    var8 = var8.PLAN_SELECT;
    var4[var9] = var8;
    var8 = var1.SUCCESS;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.PaymentFlowStep;
    var7 = var7.CONFIRM;
    var4[var8] = var7;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var10 = 'transparent';
    var9.shadowColor = var10;
    var4.header = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun74892: for (var _fun74892_ip = 0;;) switch (_fun74892_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.recipientUserId;
                var15 = var0.premiumType;
                var14 = var0.planInterval;
                var9 = var0.analyticsLocation;
                var _closure2_slot0 = var9;
                var1 = var0.analyticsLocations;
                var _closure2_slot1 = var1;
                var12 = var0.initialRoute;
                var7 = var0.order;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 11;
                var2 = var8[var0];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var1);
                var4 = var2.analyticsLocations;
                var2 = 12;
                var2 = var8[var2];
                var5 = var5.bind(var3)(var2);
                var2 = function() { // Environment: var10
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.v4;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var5.bind(var3)(var2);
                var _closure2_slot2 = var11;
                var8 = _closure1_slot4;
                var5 = var8.useMemo;
                var2 = new Array(3);
                var2[0] = var11;
                var2[1] = var9;
                var2[2] = var1;
                var1 = function() { // Environment: var10
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getBasePurchaseFlowAnalyticsFields;
                    var0 = {};
                    var3 = true;
                    var0.isGift = var3;
                    var4 = _closure2_slot2;
                    var0.analyticsLoadId = var4;
                    var4 = _closure2_slot0;
                    var0.analyticsLocation = var4;
                    var3 = _closure2_slot1;
                    var0.analyticsLocations = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var5.bind(var8)(var1, var2);
                var1 = null;
                if (!(var1 == var12)) {
                    _fun74892_ip = 196;
                    continue _fun74892
                }
            case 167:
                if (!(var1 == var15)) {
                    _fun74892_ip = 183;
                    continue _fun74892
                }
            case 171:
                var1 = _closure1_slot6;
                var1 = var1.PLAN_SELECT;
                _fun74892_ip = 193;
                continue _fun74892;
            case 183:
                var2 = _closure1_slot6;
                var1 = var2.CUSTOMIZATION;
            case 193:
                var12 = var1;
            case 196:
                var5 = _closure1_slot4;
                var8 = var5.useCallback;
                var2 = function() { // Environment: var10
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1 = new Array(0);
                var17 = var8.bind(var5)(var2, var1);
                var1 = function arg0, arg1() {
                    _fun74896: for (var _fun74896_ip = 0;;) switch (_fun74896_ip) {
                        case 0:
                            var10 = arg0;
                            var7 = arg1;
                            var _closure3_slot0 = var7;
                            var0 = _closure1_slot8;
                            var8 = undefined;
                            var4 = var0.bind(var8)();
                            var0 = {};
                            var9 = _closure1_slot6;
                            var2 = var9.PLAN_SELECT;
                            var1 = {
                                'title': '',
                                'headerLeft': null,
                                'headerMode': 'float',
                                'headerTransparent': true
                            };
                            var6 = '';
                            var11 = var9.PLAN_SELECT;
                            var9 = undefined;
                            if (!(var10 === var11)) {
                                _fun74896_ip = 74;
                                continue _fun74896
                            }
                        case 67:
                            var9 = function(arg0) { // Environment: var3
                                var3 = arg0;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 6;
                                var0 = var2[var0];
                                var2 = undefined;
                                var4 = var1.bind(var2)(var0);
                                var1 = var4.getHeaderCloseButton;
                                var0 = _closure3_slot0;
                                var1 = var1.bind(var4)(var0);
                                var0 = {};
                                var8 = var0;
                                var7 = var3;
                                var4 = copyDataProperties(var8, var7);
                                var3 = var3.labelStyle;
                                var5 = new Array(2);
                                var5[0] = var3;
                                var3 = {};
                                var4 = 'white';
                                var3.color = var4;
                                var5[1] = var3;
                                var3 = 'labelStyle';
                                var0[var3] = var5;
                                var3 = 'tintColor';
                                var0[var3] = var4;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                        case 74:
                            var1.headerLeft = var9;
                            var9 = function() {
                                var3 = _closure1_slot5;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 7;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.render = var9;
                            var0[var2] = var1;
                            var9 = _closure1_slot6;
                            var2 = var9.REWARD_SELECT;
                            var1 = {};
                            var1.title = var6;
                            var9 = var9.REWARD_SELECT;
                            if (!(var10 !== var9)) {
                                _fun74896_ip = 155;
                                continue _fun74896
                            }
                        case 123:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var9 = 6;
                            var9 = var12[var9];
                            var11 = var11.bind(var8)(var9);
                            var9 = var11.getHeaderBackButton;
                            var9 = var9.bind(var11)();
                            _fun74896_ip = 186;
                            continue _fun74896;
                        case 155:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var11 = 6;
                            var11 = var13[var11];
                            var12 = var12.bind(var8)(var11);
                            var11 = var12.getHeaderCloseButton;
                            var9 = var11.bind(var12)(var7);
                        case 186:
                            var1.headerLeft = var9;
                            var9 = var4.header;
                            var1.headerStyle = var9;
                            var9 = function arg0() {
                                var0 = arg0;
                                var7 = var0.defaultHighlightedReward;
                                var6 = var0.allRewards;
                                var5 = var0.claimableRewards;
                                var4 = var0.onSelect;
                                var3 = _closure1_slot5;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 8;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var0.defaultHighlightedReward = var7;
                                var0.allRewards = var6;
                                var0.claimableRewards = var5;
                                var0.onSelect = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.render = var9;
                            var0[var2] = var1;
                            var9 = _closure1_slot6;
                            var2 = var9.CUSTOMIZATION;
                            var1 = {};
                            var1.title = var6;
                            var9 = var9.CUSTOMIZATION;
                            if (!(var10 !== var9)) {
                                _fun74896_ip = 276;
                                continue _fun74896
                            }
                        case 244:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 6;
                            var9 = var11[var9];
                            var10 = var10.bind(var8)(var9);
                            var9 = var10.getHeaderBackButton;
                            var9 = var9.bind(var10)();
                            _fun74896_ip = 307;
                            continue _fun74896;
                        case 276:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = 6;
                            var10 = var12[var10];
                            var11 = var11.bind(var8)(var10);
                            var10 = var11.getHeaderCloseButton;
                            var9 = var10.bind(var11)(var7);
                        case 307:
                            var1.headerLeft = var9;
                            var9 = var4.header;
                            var1.headerStyle = var9;
                            var9 = function() {
                                var3 = _closure1_slot5;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 9;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.render = var9;
                            var0[var2] = var1;
                            var1 = _closure1_slot6;
                            var2 = var1.SUCCESS;
                            var1 = {};
                            var1.title = var6;
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 6;
                            var5 = var9[var5];
                            var6 = var6.bind(var8)(var5);
                            var5 = var6.getHeaderCloseButton;
                            var5 = var5.bind(var6)(var7);
                            var1.headerLeft = var5;
                            var4 = var4.header;
                            var1.headerStyle = var4;
                            var3 = function() {
                                var3 = _closure1_slot5;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 10;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.render = var3;
                            var0[var2] = var1;
                            return var0;
                    }
                };
                var11 = var1.bind(var3)(var12, var17);
                var2 = var5.useState;
                var1 = _closure1_slot7;
                var1 = var1[var12];
                var5 = var2.bind(var5)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var5, var1);
                var1 = 0;
                var8 = var2[var1];
                var1 = 1;
                var16 = var2[var1];
                _closure2_slot3 = var16;
                var2 = _closure1_slot5;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = var13[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var4 = 15;
                var4 = var13[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.NativeGiftContextProvider;
                var4 = {};
                var4.basePurchaseAnalytics = var19;
                var4.recipientUserId = var18;
                var4.onClose = var17;
                var4.setCurrentAnalyticsStep = var16;
                var4.premiumType = var15;
                var4.planInterval = var14;
                var4.initialOrder = var7;
                var7 = _closure1_slot1;
                var6 = 16;
                var6 = var13[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.currentStep = var8;
                var8 = 17;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Navigator;
                var8 = {};
                var8.initialRouteName = var12;
                var8.screens = var11;
                var10 = function arg0() {
                    _fun74902: for (var _fun74902_ip = 0;;) switch (_fun74902_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun74902_ip = 54;
                                continue _fun74902
                            }
                        case 9:
                            var1 = var0.routes;
                            var0 = var0.index;
                            var0 = var1[var0];
                            var1 = var0.name;
                            var2 = _closure2_slot3;
                            var0 = _closure1_slot7;
                            var1 = var0[var1];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.onStateChange = var10;
                var8 = var2.bind(var3)(var9, var8);
                var6.children = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.PremiumGiftScreens = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 7124, 1297, 671, 4705, 9441, 9516, 9520, 9557, 5730, 4930, 491, 4561, 9442, 9590, 5790, 2]);