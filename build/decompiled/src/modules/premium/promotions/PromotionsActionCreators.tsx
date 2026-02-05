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
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58218: for (var _fun58218_ip = 0;;) switch (_fun58218_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58218_ip = 430;
                            continue _fun58218
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
                        var5 = 6;
                        var2 = var8[var5];
                        var10 = var4.bind(var1)(var2);
                        var4 = var10.dispatch;
                        var2 = {};
                        var12 = 'ACTIVE_PROMOTIONS_FETCH';
                        var2.type = var12;
                        var2 = var4.bind(var10)(var2);
                        var4 = _closure1_slot0;
                        var2 = 7;
                        var2 = var8[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.MarketingComponentPlatform;
                        var12 = var2.MOBILE;
                        var2 = 8;
                        var2 = var8[var2];
                        var2 = var4.bind(var1)(var2);
                        var8 = var2.HTTP;
                        var4 = var8.get;
                        var2 = {};
                        var10 = _closure1_slot8;
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
                            _fun58218_ip = 377;
                            continue _fun58218
                        }
                    case 187:
                        var7 = var2;
                        var4 = _closure1_slot6;
                        var6 = var4.consumedInboundPromotionId;
                        var4 = _closure1_slot6;
                        var4 = var4.hasFetchedConsumedInboundPromotionId;
                        if (var4) {
                            _fun58218_ip = 321;
                            continue _fun58218
                        }
                    case 213:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 9;
                        var4 = var10[var4];
                        var12 = var8.bind(var1)(var4);
                        var10 = var12.fetchUserEntitlementsForApplication;
                        var8 = _closure1_slot7;
                        var4 = false;
                        var4 = var10.bind(var12)(var8, var4);
                        SaveGenerator(address = 255);
                    case 253:
                        return var4;
                    case 255:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun58218_ip = 318;
                            continue _fun58218
                        }
                    case 261:
                        var10 = var4.find;
                        var8 = function(arg0) { // Environment: var8
                            _fun58219: for (var _fun58219_ip = 0;;) switch (_fun58219_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = var1.promotion_id;
                                    var0 = null;
                                    var0 = var0 != var2;
                                    if (!var0) {
                                        _fun58219_ip = 30;
                                        continue _fun58219
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
                            _fun58218_ip = 298;
                            continue _fun58218
                        }
                    case 292:
                        var10 = var11.promotion_id;
                    case 298:
                        var9 = var10;
                        var10 = var8 != var10;
                        var8 = null;
                        if (!var10) {
                            _fun58218_ip = 313;
                            continue _fun58218
                        }
                    case 310:
                        var8 = var9;
                    case 313:
                        var6 = var8;
                        _fun58218_ip = 321;
                        continue _fun58218;
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
                        _fun58218_ip = 427;
                        continue _fun58218;
                    case 377:
                        return var2;
                    case 380: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 6;
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
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var3 = function() {
        _fun58220: for (var _fun58220_ip = 0;;) switch (_fun58220_ip) {
            case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 6;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'OUTBOUND_PROMOTION_NOTICE_DISMISS';
                var3.type = var6;
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot6;
                var4 = var3.lastDismissedOutboundPromotionStartDate;
                var _closure2_slot0 = var4;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun58220_ip = 138;
                    continue _fun58220
                }
            case 69:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
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
                    var0 = 11;
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
        var3 = _closure1_slot11;
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
                _fun58225: for (var _fun58225_ip = 0;;) switch (_fun58225_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58225_ip = 280;
                            continue _fun58225
                        }
                    case 10:
                        var2 = _closure1_slot6;
                        var2 = var2.isFetchingActiveBogoPromotion;
                        if (var2) {
                            _fun58225_ip = 275;
                            continue _fun58225
                        }
                    case 31: // try_start_0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 6;
                        var2 = var4[var6];
                        var5 = undefined;
                        var7 = var3.bind(var5)(var2);
                        var3 = var7.dispatch;
                        var2 = {};
                        var8 = 'ACTIVE_BOGO_PROMOTION_FETCH';
                        var2.type = var8;
                        var2 = var3.bind(var7)(var2);
                        var3 = _closure1_slot0;
                        var2 = 8;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var7 = _closure1_slot8;
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
                            _fun58225_ip = 226;
                            continue _fun58225
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
                        _fun58225_ip = 275;
                        continue _fun58225;
                    case 226:
                        return var2;
                    case 229: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
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
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var6 = var8.bind(var0)(var6);
    var6 = var6.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot8 = var6;
    var6 = {};
    var6.fetchActivePromotions = var4;
    var6.dismissOutboundPromotionNotice = var3;
    var7 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
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
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium/promotions/PromotionsActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var5 = function() {
        _fun58227: for (var _fun58227_ip = 0;;) switch (_fun58227_ip) {
            case 0:
                var3 = arguments[0];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun58227_ip = 11;
                    continue _fun58227
                }
            case 9:
                var3 = true;
            case 11:
                var2 = _closure1_slot6;
                var2 = var2.isFetchingActivePromotions;
                if (var2) {
                    _fun58227_ip = 51;
                    continue _fun58227
                }
            case 29:
                if (!var3) {
                    _fun58227_ip = 48;
                    continue _fun58227
                }
            case 32:
                var4 = _closure1_slot6;
                var5 = var4.lastFetchedActivePromotions;
                var4 = null;
                var3 = var4 != var5;
            case 48:
                var2 = var3;
            case 51:
                if (var2) {
                    _fun58227_ip = 62;
                    continue _fun58227
                }
            case 54:
                var1 = _closure1_slot9;
                var1 = var1.bind(var0)();
            case 62:
                return var0;
        }
    };
    var2.maybeFetchActivePromotions = var5;
    var2.fetchActivePromotions = var4;
    var2.dismissOutboundPromotionNotice = var3;
    var2.fetchActiveBogoPromotion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1685, 6885, 7097, 1623, 660, 806, 7118, 507, 4653, 1355, 1342, 2]);