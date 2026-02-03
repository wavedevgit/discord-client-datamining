// modules/premium/promotions/PromotionsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58175: for (var _fun58175_ip = 0;;) switch (_fun58175_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58175_ip = 430;
                            continue _fun58175
                        }
                    case 10:
                        var1 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var9 = undefined;
                        var11 = undefined;
                    case 20: // try_start_0
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 10;
                        var2 = var8[var5];
                        var10 = var4.bind(var1)(var2);
                        var4 = var10.dispatch;
                        var2 = {};
                        var12 = 'ACTIVE_PROMOTIONS_FETCH';
                        var2.type = var12;
                        var2 = var4.bind(var10)(var2);
                        var4 = _closure1_slot0;
                        var2 = 11;
                        var2 = var8[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.MarketingComponentPlatform;
                        var12 = var2.MOBILE;
                        var2 = 12;
                        var2 = var8[var2];
                        var2 = var4.bind(var1)(var2);
                        var8 = var2.HTTP;
                        var4 = var8.get;
                        var2 = {};
                        var10 = _closure1_slot10;
                        var10 = var10.PROMOTIONS;
                        var2.url = var10;
                        var10 = {};
                        var13 = _closure1_slot4;
                        var13 = var13.locale;
                        var10.locale = var13;
                        var10.platform = var12;
                        var2.query = var10;
                        var10 = true;
                        var2.oldFormErrors = var10;
                        var2.rejectWithError = var10;
                        var2 = var4.bind(var8)(var2);
                        SaveGenerator(address = 178);
                    case 176:
                        return var2;
                    case 178:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58175_ip = 377;
                            continue _fun58175
                        }
                    case 187:
                        var7 = var2;
                        var4 = _closure1_slot7;
                        var6 = var4.consumedInboundPromotionId;
                        var4 = _closure1_slot7;
                        var4 = var4.hasFetchedConsumedInboundPromotionId;
                        if (var4) {
                            _fun58175_ip = 321;
                            continue _fun58175
                        }
                    case 213:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 13;
                        var4 = var10[var4];
                        var12 = var8.bind(var1)(var4);
                        var10 = var12.fetchUserEntitlementsForApplication;
                        var8 = _closure1_slot8;
                        var4 = false;
                        var4 = var10.bind(var12)(var8, var4);
                        SaveGenerator(address = 255);
                    case 253:
                        return var4;
                    case 255:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun58175_ip = 318;
                            continue _fun58175
                        }
                    case 261:
                        var10 = var4.find;
                        var8 = function(arg0) { // Environment: var8
                            _fun58176: for (var _fun58176_ip = 0;;) switch (_fun58176_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = var1.promotion_id;
                                    var0 = null;
                                    var0 = var0 != var2;
                                    if (!var0) {
                                        _fun58176_ip = 30;
                                        continue _fun58176
                                    }
                                case 18:
                                    var2 = var1.consumed;
                                    var1 = true;
                                    var0 = var1 === var2;
                                case 30:
                                    return var0;
                            }
                        };
                        var10 = var10.bind(var4)(var8);
                        var11 = var10;
                        var8 = null;
                        var12 = var8 == var10;
                        var10 = undefined;
                        if (var12) {
                            _fun58175_ip = 298;
                            continue _fun58175
                        }
                    case 292:
                        var10 = var11.promotion_id;
                    case 298:
                        var9 = var10;
                        var10 = var8 != var10;
                        var8 = null;
                        if (!var10) {
                            _fun58175_ip = 313;
                            continue _fun58175
                        }
                    case 310:
                        var8 = var9;
                    case 313:
                        var6 = var8;
                        _fun58175_ip = 321;
                        continue _fun58175;
                    case 318: // try_end0
                        return var4;
                    case 321: // try_start_1
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'ACTIVE_PROMOTIONS_FETCH_SUCCESS';
                        var3.type = var8;
                        var7 = var7.body;
                        var3.promotions = var7;
                        var3.consumedInboundPromotionId = var6;
                        var3 = var4.bind(var5)(var3);
                    case 375: // try_end1
                        _fun58175_ip = 427;
                        continue _fun58175;
                    case 377:
                        return var2;
                    case 380: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 10;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'ACTIVE_PROMOTIONS_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                    case 427:
                        return var1;
                    case 430:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var3 = function() {
        _fun58177: for (var _fun58177_ip = 0;;) switch (_fun58177_ip) {
            case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 10;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'OUTBOUND_PROMOTION_NOTICE_DISMISS';
                var3.type = var6;
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot7;
                var4 = var3.lastDismissedOutboundPromotionStartDate;
                var _closure2_slot0 = var4;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun58177_ip = 138;
                    continue _fun58177
                }
            case 69:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 14;
                var4 = var6[var2];
                var4 = var3.bind(var0)(var4);
                var5 = var4.PreloadedUserSettingsActionCreators;
                var4 = var5.updateAsync;
                var2 = var6[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.UserSettingsDelay;
                var3 = var2.INFREQUENT_USER_ACTION;
                var2 = 'userContent';
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.StringValue;
                    var2 = var3.create;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.value = var4;
                    var2 = var2.bind(var3)(var1);
                    var1 = arg0;
                    var1.lastDismissedOutboundPromotionStartDate = var2;
                    return var0;
                };
                var1 = var4.bind(var5)(var2, var1, var3);
            case 138:
                return var0;
        }
    };
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58182: for (var _fun58182_ip = 0;;) switch (_fun58182_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58182_ip = 280;
                            continue _fun58182
                        }
                    case 10:
                        var2 = _closure1_slot7;
                        var2 = var2.isFetchingActiveBogoPromotion;
                        if (var2) {
                            _fun58182_ip = 275;
                            continue _fun58182
                        }
                    case 31: // try_start_0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 10;
                        var2 = var4[var6];
                        var5 = undefined;
                        var7 = var3.bind(var5)(var2);
                        var3 = var7.dispatch;
                        var2 = {};
                        var8 = 'ACTIVE_BOGO_PROMOTION_FETCH';
                        var2.type = var8;
                        var2 = var3.bind(var7)(var2);
                        var3 = _closure1_slot0;
                        var2 = 12;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var7 = _closure1_slot10;
                        var7 = var7.BOGO_PROMOTIONS;
                        var2.url = var7;
                        var7 = {};
                        var8 = _closure1_slot4;
                        var8 = var8.locale;
                        var7.locale = var8;
                        var2.query = var7;
                        var7 = true;
                        var2.rejectWithError = var7;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 154);
                    case 152:
                        return var2;
                    case 154:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58182_ip = 226;
                            continue _fun58182
                        }
                    case 160:
                        var8 = var2.body;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS';
                        var3.type = var6;
                        var7 = _closure1_slot5;
                        var6 = var7.createFromServer;
                        var6 = var6.bind(var7)(var8);
                        var3.activePromotion = var6;
                        var3 = var4.bind(var5)(var3);
                    case 224: // try_end0
                        _fun58182_ip = 275;
                        continue _fun58182;
                    case 226:
                        return var2;
                    case 229: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'ACTIVE_BOGO_PROMOTION_FETCH_FAIL';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                    case 275:
                        var1 = undefined;
                        return var1;
                    case 280:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var9[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var7 = var6.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot8 = var7;
    var6 = var6.PremiumTypes;
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot10 = var6;
    var6 = {};
    var6.fetchActivePromotions = var4;
    var6.dismissOutboundPromotionNotice = var3;
    var7 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'OUTBOUND_PROMOTIONS_SEEN';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6.markOutboundPromotionsSeen = var7;
    var6.fetchActiveBogoPromotion = var1;
    var7 = 16;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium/promotions/PromotionsActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var5 = function() {
        _fun58184: for (var _fun58184_ip = 0;;) switch (_fun58184_ip) {
            case 0:
                var3 = arguments[0];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun58184_ip = 11;
                    continue _fun58184
                }
            case 9:
                var3 = true;
            case 11:
                var4 = _closure1_slot6;
                var2 = var4.getCurrentUser;
                var6 = var2.bind(var4)();
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.isPremiumExactly;
                var2 = _closure1_slot9;
                var2 = var2.TIER_2;
                var5 = var4.bind(var5)(var6, var2);
                var7 = _closure1_slot0;
                var2 = 8;
                var2 = var8[var2];
                var9 = var7.bind(var0)(var2);
                var6 = var9.isFetchingPromotionsEndpointEnabled;
                var2 = {};
                var4 = 'maybeFetchActivePromotions';
                var2.location = var4;
                var2 = var6.bind(var9)(var2);
                var6 = 9;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var8 = var6.OutboundPromoDesktopUpsellExperiment;
                var7 = var8.getCurrentConfig;
                var6 = {};
                var6.location = var4;
                var4 = {};
                var9 = false;
                var4.autoTrackExposure = var9;
                var4.disable = var5;
                var4 = var7.bind(var8)(var6, var4);
                var4 = var4.enabled;
                if (var2) {
                    _fun58184_ip = 167;
                    continue _fun58184
                }
            case 164:
                var2 = var5;
            case 167:
                if (var2) {
                    _fun58184_ip = 173;
                    continue _fun58184
                }
            case 170:
                var2 = var4;
            case 173:
                if (!var2) {
                    _fun58184_ip = 224;
                    continue _fun58184
                }
            case 176:
                var2 = _closure1_slot7;
                var2 = var2.isFetchingActivePromotions;
                if (var2) {
                    _fun58184_ip = 213;
                    continue _fun58184
                }
            case 191:
                if (!var3) {
                    _fun58184_ip = 210;
                    continue _fun58184
                }
            case 194:
                var4 = _closure1_slot7;
                var5 = var4.lastFetchedActivePromotions;
                var4 = null;
                var3 = var4 != var5;
            case 210:
                var2 = var3;
            case 213:
                if (var2) {
                    _fun58184_ip = 224;
                    continue _fun58184
                }
            case 216:
                var1 = _closure1_slot11;
                var1 = var1.bind(var0)();
            case 224:
                return var0;
        }
    };
    var2.maybeFetchActivePromotions = var5;
    var2.fetchActivePromotions = var4;
    var2.dismissOutboundPromotionNotice = var3;
    var2.fetchActiveBogoPromotion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1685, 6860, 1621, 7074, 1623, 660, 3109, 7095, 7096, 806, 7097, 507, 4653, 1355, 1342, 2]);