// modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CustomCheckoutFlow;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'useGuildBoostPurchaseHandler';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 6;
        var2 = var7[var1];
        var1 = undefined;
        var8 = var6.bind(var1)(var2);
        var4 = var8.useApplePaymentLinkExperimentConfig;
        var2 = {};
        var2.location = var5;
        var2 = var4.bind(var8)(var2);
        var2 = var2.enabled;
        var _closure2_slot1 = var2;
        var4 = 7;
        var4 = var7[var4];
        var8 = var6.bind(var1)(var4);
        var7 = var8.useStateFromStores;
        var4 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            _fun78527: for (var _fun78527_ip = 0;;) switch (_fun78527_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun78527_ip = 14;
                        continue _fun78527
                    }
                case 10:
                    var0 = false;
                    return var0;
                case 14:
                    var2 = _closure1_slot5;
                    var1 = var2.getPremiumSubscription;
                    var6 = var1.bind(var2)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 8;
                    var1 = var4[var0];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var1);
                    var1 = var5.getPremiumManagementMethod;
                    var1 = var1.bind(var5)(var6);
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var0 = var0.PremiumManagementMethod;
                    var0 = var0.IN_WEB;
                    var0 = var1 === var0;
                    return var0;
            }
        };
        var2 = var7.bind(var8)(var6, var2, var4);
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun78530: for (var _fun78530_ip = 0;;) switch (_fun78530_ip) {
                        case 0:
                            StartGenerator();
                            var9 = arg1;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun78530_ip = 167;
                                continue _fun78530
                            }
                        case 15:
                            var2 = arg0;
                            var _closure5_slot0 = var2;
                            var _closure5_slot1 = var9;
                            var2 = undefined;
                            var _closure5_slot2 = var2;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 9;
                            var4 = var6[var4];
                            var7 = var5.bind(var2)(var4);
                            var4 = var7.getNewAnalyticsLoadId;
                            var8 = var4.bind(var7)();
                            _closure5_slot2 = var8;
                            var4 = 10;
                            var4 = var6[var4];
                            var7 = var5.bind(var2)(var4);
                            var6 = var7.goToStandaloneGuildBoostCheckoutFromMobileApp;
                            var14 = _closure2_slot0;
                            var11 = function() { // Environment: var1
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 11;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.track;
                                var2 = _closure1_slot6;
                                var3 = var2.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE;
                                var2 = {};
                                var7 = _closure5_slot1;
                                var2.guild_id = var7;
                                var7 = _closure5_slot2;
                                var2.load_id = var7;
                                var10 = _closure5_slot0;
                                var6 = new Array(0);
                                var9 = 0;
                                var11 = var6;
                                var7 = arraySpread(var11, var10, var9);
                                var2.location_stack = var6;
                                var6 = _closure1_slot7;
                                var6 = var6.APPLE_PAYMENT_LINK;
                                var2.custom_checkout_flow = var6;
                                var2 = var4.bind(var5)(var3, var2);
                                var3 = _closure1_slot8;
                                var2 = var3.log;
                                var1 = 'Successfully opened mobile web Guild Boost Management page';
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var10 = function(arg0) { // Environment: var1
                                var3 = _closure1_slot8;
                                var2 = var3.error;
                                var1 = 'Failed to open mobile web Guild Boost Management page, error response: ';
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                var2 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 12;
                                var1 = var8[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.show;
                                var1 = {};
                                var7 = _closure1_slot0;
                                var4 = 13;
                                var5 = var8[var4];
                                var5 = var7.bind(var0)(var5);
                                var9 = var5.intl;
                                var6 = var9.string;
                                var5 = var8[var4];
                                var5 = var7.bind(var0)(var5);
                                var5 = var5.t;
                                var5 = var5.vgvbiP;
                                var5 = var6.bind(var9)(var5);
                                var1.title = var5;
                                var5 = var8[var4];
                                var5 = var7.bind(var0)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var0)(var4);
                                var4 = var4.t;
                                var4 = var4.ycleJf;
                                var4 = var5.bind(var6)(var4);
                                var1.body = var4;
                                var4 = true;
                                var1.hideActionSheet = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var15 = var7;
                            var13 = var9;
                            var12 = var8;
                            var1 = var15[var6](var14, var13, var12, var11, var10, var9);
                            SaveGenerator(address = 125);
                        case 123:
                            return var1;
                        case 125:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun78530_ip = 164;
                                continue _fun78530
                            }
                        case 131:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 14;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.closeApplyBoostModal;
                            var3 = var3.bind(var4)();
                            return var2;
                        case 164:
                            return var1;
                        case 167:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var1 = var0.bind(var1)();
        var0 = new Array(1);
        var0[0] = var5;
        var1 = var3.bind(var4)(var1, var0);
        var0 = {};
        var0.shouldUseMwebRedirect = var2;
        var0.handleMwebRedirect = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 3117, 660, 3321, 3, 3464, 632, 7296, 7105, 7138, 795, 3936, 1234, 9952, 2]);