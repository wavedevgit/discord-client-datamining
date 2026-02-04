// modules/premium/native/UserOfferManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun114319: for (var _fun114319_ip = 0;;) switch (_fun114319_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun114319_ip = 76;
                continue _fun114319;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot10 = var7;
    var7 = var3.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot11 = var7;
    var3 = var3.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot12 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun114323: for (var _fun114323_ip = 0;;) switch (_fun114323_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114323_ip = 86;
                        continue _fun114323
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114323_ip = 120;
                    continue _fun114323;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handlePostConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleUserOfferFetchSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.BILLING_USER_OFFER_FETCH_SUCCESS = var3;
                    var0.actions = var2;
                    var2 = function() { // Environment: var1
                        _fun114326: for (var _fun114326_ip = 0;;) switch (_fun114326_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 8;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.isOfferEndpointMigrationExperimentEnabled;
                                var2 = 'UserOfferManager';
                                var2 = var3.bind(var4)(var2);
                                if (!var2) {
                                    _fun114326_ip = 170;
                                    continue _fun114326
                                }
                            case 48:
                                var3 = _closure1_slot8;
                                var2 = var3.getCurrentUser;
                                var5 = var2.bind(var3)();
                                var2 = null;
                                var2 = var2 == var5;
                                if (var2) {
                                    _fun114326_ip = 79;
                                    continue _fun114326
                                }
                            case 70:
                                var3 = var5.verified;
                                var2 = !var3;
                            case 79:
                                if (var2) {
                                    _fun114326_ip = 113;
                                    continue _fun114326
                                }
                            case 82:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 9;
                                var3 = var6[var3];
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.isPremium;
                                var2 = var3.bind(var4)(var5);
                            case 113:
                                if (var2) {
                                    _fun114326_ip = 130;
                                    continue _fun114326
                                }
                            case 116:
                                var4 = _closure1_slot9;
                                var3 = var4.isFetchingOffer;
                                var2 = var3.bind(var4)();
                            case 130:
                                if (var2) {
                                    _fun114326_ip = 170;
                                    continue _fun114326
                                }
                            case 133:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 10;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.fetchUserOffer;
                                var1 = 'MobilePremiumOfferManager';
                                var1 = var2.bind(var3)(var1);
                            case 170:
                                return var0;
                        }
                    };
                    var0.handlePostConnectionOpen = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun114327: for (var _fun114327_ip = 0;;) switch (_fun114327_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.userTrialOffer;
                                var5 = null;
                                if (!(var5 != var1)) {
                                    _fun114327_ip = 330;
                                    continue _fun114327
                                }
                            case 18:
                                var0 = _closure1_slot10;
                                var4 = new Array(3);
                                var4[0] = var0;
                                var0 = _closure1_slot11;
                                var4[1] = var0;
                                var0 = _closure1_slot12;
                                var4[2] = var0;
                                var2 = var4.includes;
                                var0 = var1.trial_id;
                                var0 = var2.bind(var4)(var0);
                                if (!var0) {
                                    _fun114327_ip = 330;
                                    continue _fun114327
                                }
                            case 71:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 11;
                                var2 = var8[var0];
                                var0 = undefined;
                                var9 = var7.bind(var0)(var2);
                                var6 = var9.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
                                var2 = 12;
                                var2 = var8[var2];
                                var2 = var7.bind(var0)(var2);
                                var2 = var2.DismissibleContent;
                                var4 = var2.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
                                var2 = var1.id;
                                var2 = var6.bind(var9)(var4, var2);
                                var6 = var2.isDismissed;
                                var2 = 13;
                                var2 = var8[var2];
                                var2 = var7.bind(var0)(var2);
                                var10 = var2.PremiumTrialOfferActionSheetKillSwitchExperiment;
                                var4 = var10.getConfig;
                                var2 = {};
                                var9 = 'UserOfferManager';
                                var2.location = var9;
                                var2 = var4.bind(var10)(var2);
                                var2 = var2.enabled;
                                var4 = 14;
                                var4 = var8[var4];
                                var4 = var7.bind(var0)(var4);
                                var8 = var4.PremiumTrialOfferActionSheetForceShowExperiment;
                                var7 = var8.getConfig;
                                var4 = {};
                                var4.location = var9;
                                var4 = var7.bind(var8)(var4);
                                var4 = var4.enabled;
                                if (!var6) {
                                    _fun114327_ip = 232;
                                    continue _fun114327
                                }
                            case 229:
                                if (!var4) {
                                    _fun114327_ip = 334;
                                    continue _fun114327
                                }
                            case 232:
                                var4 = var1.expires_at;
                                if (!(var5 == var4)) {
                                    _fun114327_ip = 334;
                                    continue _fun114327
                                }
                            case 242:
                                if (var2) {
                                    _fun114327_ip = 334;
                                    continue _fun114327
                                }
                            case 245:
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var4 = 15;
                                var4 = var2[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.openLazy;
                                var6 = _closure1_slot0;
                                var3 = 17;
                                var3 = var2[var3];
                                var6 = var6.bind(var0)(var3);
                                var3 = 16;
                                var3 = var2[var3];
                                var2 = var2.paths;
                                var3 = var6.bind(var0)(var3, var2);
                                var2 = {};
                                var1 = var1.id;
                                var2.trialOfferId = var1;
                                var1 = 'PremiumTrialOfferActionSheet';
                                var1 = var4.bind(var5)(var3, var1, var2);
                            case 330:
                                var1 = undefined;
                                return var1;
                            case 334:
                                return var0;
                        }
                    };
                    var0.handleUserOfferFetchSuccess = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/UserOfferManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1621, 6644, 1623, 14644, 1638, 6659, 3212, 1358, 14645, 14646, 3278, 11240, 1307, 4299, 2]);