// modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var3 = _closure1_slot12;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 14;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-xs/semibold',
            'color': 'text-default'
        };
        var4 = arg0;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var0 = var1.activeSubscription;
        var _closure2_slot0 = var0;
        var4 = var1.activeListingId;
        var _closure2_slot1 = var4;
        var1 = var1.changeToListingId;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot2;
        var13 = _closure1_slot3;
        var1 = 11;
        var1 = var13[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.useName;
        var4 = var1.bind(var2)(var4);
        var2 = _closure1_slot5;
        var1 = 1;
        var2 = var2.bind(var3)(var4, var1);
        var1 = 0;
        var18 = var2[var1];
        var7 = _closure1_slot1;
        var1 = 18;
        var1 = var13[var1];
        var1 = var7.bind(var3)(var1);
        var0 = var0.currentPeriodEnd;
        var2 = var1.bind(var3)(var0);
        var1 = var2.format;
        var0 = 'MMMM Do';
        var17 = var1.bind(var2)(var0);
        var2 = _closure1_slot13;
        var1 = _closure1_slot7;
        var0 = {};
        var10 = _closure1_slot12;
        var12 = _closure1_slot0;
        var4 = 14;
        var4 = var13[var4];
        var4 = var12.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'text-xs/normal',
            'color': 'text-muted'
        };
        var9 = 16;
        var11 = var13[var9];
        var11 = var12.bind(var3)(var11);
        var16 = var11.intl;
        var15 = var16.format;
        var11 = var13[var9];
        var11 = var12.bind(var3)(var11);
        var11 = var11.t;
        var14 = var11.lA7ztO;
        var11 = {};
        var11.activeListingName = var18;
        var11.billingEndDate = var17;
        var17 = _closure1_slot15;
        var11.emphasisHook = var17;
        var11 = var15.bind(var16)(var14, var11);
        var4.children = var11;
        var6 = var10.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var10 = _closure1_slot12;
        var6 = 19;
        var6 = var13[var6];
        var7 = var7.bind(var3)(var6);
        var6 = {};
        var6.size = var9;
        var6 = var10.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot12;
        var5 = 20;
        var5 = var13[var5];
        var5 = var12.bind(var3)(var5);
        var6 = var5.ArrowButton;
        var5 = {};
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.SACegK;
        var9 = var10.bind(var11)(var9);
        var5.text = var9;
        var8 = function() {
            var4 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 21;
            var3 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot0;
            var2 = 23;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 22;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var0)(var2, var1);
            var6 = _closure2_slot2;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'ChangeSubscriptionCard:';
            var2 = var2.bind(var1)(var6);
            var1 = {};
            var8 = _closure2_slot0;
            var1.activeSubscription = var8;
            var7 = _closure2_slot1;
            var1.activeListingId = var7;
            var1.changeToListingId = var6;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsLocations;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 10;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.subscribedButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104851: for (var _fun104851_ip = 0;;) switch (_fun104851_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.listingId;
                var _closure2_slot0 = var8;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var0 = _closure1_slot14;
                var5 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 12;
                var0 = var3[var0];
                var10 = var1.bind(var4)(var0);
                var7 = var10.useStateFromStores;
                var0 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var0;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var2
                    var2 = _closure1_slot9;
                    var1 = var2.getSubscriptionGroupListingForSubscriptionListing;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var7.bind(var10)(var6, var0, var1);
                var1 = _closure1_slot1;
                var0 = 24;
                var0 = var3[var0];
                var3 = var1.bind(var4)(var0);
                var0 = null;
                var6 = var0 == var10;
                var1 = undefined;
                if (var6) {
                    _fun104851_ip = 131;
                    continue _fun104851
                }
            case 126:
                var1 = var10.id;
            case 131:
                var1 = var3.bind(var4)(var1);
                var7 = var1.activeSubscriptionListing;
                var6 = var1.activeSubscription;
                var3 = var0 == var7;
                var1 = undefined;
                if (var3) {
                    _fun104851_ip = 162;
                    continue _fun104851
                }
            case 157:
                var1 = var7.id;
            case 162:
                var3 = function arg0() {
                    _fun104853: for (var _fun104853_ip = 0;;) switch (_fun104853_ip) {
                        case 0:
                            var9 = arg0;
                            var1 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var0 = 11;
                            var2 = var6[var0];
                            var8 = undefined;
                            var5 = var1.bind(var8)(var2);
                            var2 = var5.useSubscriptionPlan;
                            var7 = var2.bind(var5)(var9);
                            var2 = _closure1_slot5;
                            var5 = 1;
                            var7 = var2.bind(var8)(var7, var5);
                            var2 = 0;
                            var11 = var7[var2];
                            var0 = var6[var0];
                            var1 = var1.bind(var8)(var0);
                            var0 = var1.useApplicationId;
                            var7 = var0.bind(var1)(var9);
                            var1 = _closure1_slot0;
                            var0 = 12;
                            var0 = var6[var0];
                            var10 = var1.bind(var8)(var0);
                            var6 = var10.useStateFromStores;
                            var0 = _closure1_slot8;
                            var1 = new Array(1);
                            var1[0] = var0;
                            var0 = function() { // Environment: var3
                                var1 = _closure1_slot8;
                                var0 = var1.getCurrentlySelectedChannelId;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var1 = var6.bind(var10)(var1, var0);
                            var0 = _closure1_slot11;
                            var0 = var0.ROLE_SUBSCRIPTIONS;
                            if (!(var1 !== var0)) {
                                _fun104853_ip = 152;
                                continue _fun104853
                            }
                        case 140:
                            var0 = _closure1_slot10;
                            var10 = var0.ROLE_SUBSCRIPTIONS_TAB;
                            _fun104853_ip = 162;
                            continue _fun104853;
                        case 152:
                            var0 = _closure1_slot10;
                            var10 = var0.ROLE_SUBSCRIPTION_GATED_CHANNEL;
                        case 162:
                            var1 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var0 = 13;
                            var0 = var6[var0];
                            var6 = var1.bind(var8)(var0);
                            var1 = var6.useCreateSubscription;
                            var0 = {};
                            var11 = var11.id;
                            var0.planId = var11;
                            var0.analyticsLocation = var10;
                            var0.skuId = var9;
                            var0.applicationId = var7;
                            var0 = var1.bind(var6)(var0);
                            var7 = var0.createSubscription;
                            var _closure3_slot0 = var7;
                            var1 = var0.nativePaymentsConnected;
                            var6 = _closure1_slot6;
                            var9 = var6.useState;
                            var0 = false;
                            var10 = var9.bind(var6)(var0);
                            var9 = _closure1_slot5;
                            var0 = 2;
                            var0 = var9.bind(var8)(var10, var0);
                            var2 = var0[var2];
                            var0 = var0[var5];
                            var _closure3_slot1 = var0;
                            var0 = {};
                            var5 = var6.useCallback;
                            var4 = _closure1_slot4;
                            var3 = function*() { // Environment: var3
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun104856: for (var _fun104856_ip = 0;;) switch (_fun104856_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun104856_ip = 89;
                                                continue _fun104856
                                            }
                                        case 7: // try_start_0
                                            var3 = _closure3_slot1;
                                            var4 = undefined;
                                            var1 = true;
                                            var1 = var3.bind(var4)(var1);
                                            var1 = _closure3_slot0;
                                            var1 = var1.bind(var4)();
                                            SaveGenerator(address = 35);
                                        case 33:
                                            return var1;
                                        case 35:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                            if (var3) {
                                                _fun104856_ip = 55;
                                                continue _fun104856
                                            }
                                        case 41: // try_end0
                                            var5 = _closure3_slot1;
                                            var3 = false;
                                            var3 = var5.bind(var4)(var3);
                                            return var4;
                                        case 55:
                                            var3 = _closure3_slot1;
                                            var2 = false;
                                            var2 = var3.bind(var4)(var2);
                                            return var1;
                                        case 69: // catch_target0
                                            CatchBlockStart(arg_register = 1);
                                            var4 = _closure3_slot1;
                                            var3 = undefined;
                                            var2 = false;
                                            var2 = var4.bind(var3)(var2);
                                            throw var1;
                                        case 89:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var4 = var4.bind(var8)(var3);
                            var3 = new Array(1);
                            var3[0] = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var0.createSubscription = var3;
                            var1 = !var1;
                            if (var1) {
                                _fun104853_ip = 327;
                                continue _fun104853
                            }
                        case 324:
                            var1 = var2;
                        case 327:
                            var0.loading = var1;
                            return var0;
                    }
                };
                var11 = var3.bind(var4)(var8);
                var3 = var11.loading;
                var15 = var11.createSubscription;
                _closure2_slot1 = var15;
                var11 = var0 == var10;
                var14 = undefined;
                if (var11) {
                    _fun104851_ip = 204;
                    continue _fun104851
                }
            case 199:
                var14 = var10.guild_id;
            case 204:
                _closure2_slot2 = var14;
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var10 = 25;
                var10 = var12[var10];
                var11 = var11.bind(var4)(var10);
                var10 = var11.useShowMemberVerificationGate;
                var13 = var10.bind(var11)(var14);
                _closure2_slot3 = var13;
                var12 = _closure1_slot6;
                var11 = var12.useCallback;
                var10 = new Array(3);
                var10[0] = var15;
                var10[1] = var14;
                var10[2] = var13;
                var2 = function() { // Environment: var2
                    _fun104857: for (var _fun104857_ip = 0;;) switch (_fun104857_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun104857_ip = 20;
                                continue _fun104857
                            }
                        case 10:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun104857_ip = 32;
                                continue _fun104857
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun104857_ip = 52;
                            continue _fun104857;
                        case 32:
                            var2 = _closure2_slot2;
                            var1 = function arg0() {
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var2 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var0 = 15;
                                var1 = var8[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.show;
                                var1 = {};
                                var7 = _closure1_slot0;
                                var4 = 16;
                                var6 = var8[var4];
                                var6 = var7.bind(var0)(var6);
                                var10 = var6.intl;
                                var9 = var10.string;
                                var6 = var8[var4];
                                var6 = var7.bind(var0)(var6);
                                var6 = var6.t;
                                var6 = var6.PYrJGS;
                                var6 = var9.bind(var10)(var6);
                                var1.body = var6;
                                var5 = function() {
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 17;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.openMemberVerificationModal;
                                    var0 = _closure4_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1.onConfirm = var5;
                                var5 = var8[var4];
                                var5 = var7.bind(var0)(var5);
                                var9 = var5.intl;
                                var6 = var9.string;
                                var5 = var8[var4];
                                var5 = var7.bind(var0)(var5);
                                var5 = var5.t;
                                var5 = var5.IjFdkV;
                                var5 = var6.bind(var9)(var5);
                                var1.confirmText = var5;
                                var5 = var8[var4];
                                var5 = var7.bind(var0)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var0)(var4);
                                var4 = var4.t;
                                var4 = var4["ETE/oC"];
                                var4 = var5.bind(var6)(var4);
                                var1.cancelText = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var11.bind(var12)(var2, var10);
                if (!(var1 !== var8)) {
                    _fun104851_ip = 435;
                    continue _fun104851
                }
            case 288:
                if (!(var0 != var7)) {
                    _fun104851_ip = 296;
                    continue _fun104851
                }
            case 292:
                if (!(var0 == var6)) {
                    _fun104851_ip = 394;
                    continue _fun104851
                }
            case 296:
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var15 = _closure1_slot3;
                var0 = 27;
                var0 = var15[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var14 = _closure1_slot0;
                var11 = 16;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.BEeXib;
                var11 = var12.bind(var13)(var11);
                var0.text = var11;
                var0.onPress = var10;
                var0.loading = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun104851_ip = 430;
                continue _fun104851;
            case 394:
                var3 = _closure1_slot12;
                var2 = _closure1_slot16;
                var1 = {};
                var1.changeToListingId = var8;
                var7 = var7.id;
                var1.activeListingId = var7;
                var1.activeSubscription = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 430:
                _fun104851_ip = 566;
                continue _fun104851;
            case 435:
                var3 = _closure1_slot12;
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 26;
                var1 = var8[var6];
                var2 = var7.bind(var4)(var1);
                var1 = {};
                var12 = _closure1_slot0;
                var9 = 16;
                var10 = var8[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var8[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.XvAuMo;
                var9 = var10.bind(var11)(var9);
                var1.text = var9;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.Looks;
                var6 = var6.OUTLINED;
                var1.look = var6;
                var5 = var5.subscribedButton;
                var1.style = var5;
                var5 = true;
                var1.disabled = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 566:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1670, 3087, 660, 1379, 33, 1297, 671, 10845, 566, 10837, 3943, 3938, 1234, 7470, 3047, 9307, 13679, 3280, 13687, 1307, 13675, 4827, 4876, 9330, 2]);