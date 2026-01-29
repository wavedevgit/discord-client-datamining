// modules/premium/promotions/PromotionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: claimedOutboundPromotionCodeFromServer, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.code;
        var0.code = var2;
        var2 = var1.user_id;
        var0.userId = var2;
        var2 = var1.claimed_at;
        var0.claimedAt = var2;
        var3 = _closure1_slot6;
        var2 = var3.createFromServer;
        var1 = var1.promotion;
        var1 = var2.bind(var3)(var1);
        var0.promotion = var1;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: _fetchClaimedOutboundPromotionCodes, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57895: for (var _fun57895_ip = 0;;) switch (_fun57895_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57895_ip = 136;
                            continue _fun57895
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var4 = var1.HTTP;
                        var3 = var4.get;
                        var1 = {};
                        var5 = _closure1_slot12;
                        var5 = var5.CLAIMED_OUTBOUND_PROMOTION_CODES;
                        var1.url = var5;
                        var5 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.locale;
                        var5.locale = var6;
                        var1.query = var5;
                        var5 = true;
                        var1.oldFormErrors = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 105);
                    case 103:
                        return var1;
                    case 105:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57895_ip = 133;
                            continue _fun57895
                        }
                    case 111:
                        var4 = var1.body;
                        var3 = var4.map;
                        var2 = _closure1_slot14;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 133:
                        return var1;
                    case 136:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: _claimOutboundPromotion, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun57898: for (var _fun57898_ip = 0;;) switch (_fun57898_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57898_ip = 255;
                            continue _fun57898
                        }
                    case 13:
                        var9 = var1.promotionId;
                        var10 = var1.analyticsLocations;
                        var5 = undefined;
                        SaveGenerator(address = 31);
                    case 29:
                        return var5;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57898_ip = 252;
                            continue _fun57898
                        }
                    case 40:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 11;
                        var2 = var6[var2];
                        var2 = var4.bind(var5)(var2);
                        var6 = var2.HTTP;
                        var4 = var6.post;
                        var2 = {};
                        var8 = _closure1_slot12;
                        var7 = var8.CLAIM_OUTBOUND_PROMOTION_CODE;
                        var7 = var7.bind(var8)(var9);
                        var2.url = var7;
                        var7 = false;
                        var2.rejectWithError = var7;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address = 110);
                    case 108:
                        return var2;
                    case 110:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun57898_ip = 249;
                            continue _fun57898
                        }
                    case 119:
                        var4 = var2.body;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 12;
                        var6 = var8[var6];
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.isIOS;
                        var7 = var6.bind(var7)();
                        var6 = _closure1_slot13;
                        if (var7) {
                            _fun57898_ip = 169;
                            continue _fun57898
                        }
                    case 161:
                        var11 = var6.ANDROID;
                        _fun57898_ip = 175;
                        continue _fun57898;
                    case 169:
                        var11 = var6.IOS;
                    case 175:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 13;
                        var6 = var8[var6];
                        var9 = var7.bind(var5)(var6);
                        var8 = var9.track;
                        var6 = _closure1_slot11;
                        var7 = var6.OUTBOUND_PROMOTION_CLAIMED;
                        var6 = {};
                        var6.platform = var11;
                        var11 = var2.status;
                        var6.status = var11;
                        var6.location_stack = var10;
                        var6 = var8.bind(var9)(var7, var6);
                        var3 = _closure1_slot14;
                        var3 = var3.bind(var5)(var4);
                        return var3;
                    case 249:
                        return var2;
                    case 252:
                        return var1;
                    case 255:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var3 = function() { // Original name: getNextUnseenOutboundPromotionId, environment: var1
        _fun57899: for (var _fun57899_ip = 0;;) switch (_fun57899_ip) {
            case 0:
                var0 = _closure1_slot9;
                var4 = var0.outboundPromotions;
                var0 = _closure1_slot9;
                var0 = var0.consumedInboundPromotionId;
                var _closure2_slot0 = var0;
                var3 = var4.filter;
                var0 = function(arg0) { // Environment: var1
                    _fun57900: for (var _fun57900_ip = 0;;) switch (_fun57900_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.id;
                            var4 = var0.flags;
                            var0 = _closure2_slot0;
                            var0 = var1 !== var0;
                            if (!var0) {
                                _fun57900_ip = 77;
                                continue _fun57900
                            }
                        case 27:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 14;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.hasFlag;
                            var1 = _closure1_slot10;
                            var1 = var1.SUPPRESS_NOTIFICATION;
                            var1 = var2.bind(var3)(var4, var1);
                            var0 = !var1;
                        case 77:
                            return var0;
                    }
                };
                var6 = var3.bind(var4)(var0);
                var0 = _closure1_slot5;
                var0 = var0.settings;
                var4 = var0.userContent;
                var0 = null;
                var5 = var0 == var4;
                var7 = undefined;
                var3 = undefined;
                if (var5) {
                    _fun57899_ip = 130;
                    continue _fun57899
                }
            case 73:
                var5 = var4.recurringDismissibleContentStates;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 15;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.DismissibleContent;
                var4 = var4.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
                var4 = var5[var4];
                var5 = var0 == var4;
                var3 = undefined;
                if (var5) {
                    _fun57899_ip = 130;
                    continue _fun57899
                }
            case 124:
                var3 = var4.lastDismissedObjectId;
            case 130:
                var _closure2_slot1 = var3;
                var5 = var6;
                if (!(var0 != var3)) {
                    _fun57899_ip = 156;
                    continue _fun57899
                }
            case 141:
                var4 = var6.filter;
                var3 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var3 = var0.id;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.compare;
                    var0 = _closure2_slot1;
                    var1 = var1.bind(var2)(var3, var0);
                    var0 = 1;
                    var0 = var0 === var1;
                    return var0;
                };
                var5 = var4.bind(var6)(var3);
            case 156:
                var4 = _closure1_slot7;
                var3 = var4.getPremiumTypeSubscription;
                var4 = var3.bind(var4)();
                var3 = var0 == var4;
                if (var3) {
                    _fun57899_ip = 186;
                    continue _fun57899
                }
            case 177:
                var4 = var4.hasActiveTrial;
                var3 = !var4;
            case 186:
                var4 = _closure1_slot8;
                var2 = var4.hasAnyUnexpiredOffer;
                var2 = var2.bind(var4)();
                if (!var3) {
                    _fun57899_ip = 209;
                    continue _fun57899
                }
            case 203:
                var4 = var5;
                if (!var2) {
                    _fun57899_ip = 224;
                    continue _fun57899
                }
            case 209:
                var3 = var5.filter;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.isRedeemableByTrialUsers;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var3.bind(var5)(var2);
            case 224:
                var3 = var4.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun57899_ip = 262;
                    continue _fun57899
                }
            case 237:
                var3 = var4.sort;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun57903: for (var _fun57903_ip = 0;;) switch (_fun57903_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Date;
                            var1 = arg0;
                            var4 = var1.startDate;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var5 = var2;
                            var1 = new var5[var3](var4, var3);
                            var1 = var1 instanceof Object ? var1 : var2;
                            var3 = var0.Date;
                            var0 = arg1;
                            var4 = var0.startDate;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var5 = var2;
                            var0 = new var5[var3](var4, var3);
                            var0 = var0 instanceof Object ? var0 : var2;
                            var1 = var1 < var0;
                            var0 = 1;
                            if (!var1) {
                                _fun57903_ip = 88;
                                continue _fun57903
                            }
                        case 82:
                            var0 = -1;
                        case 88:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var1 = var1[var2];
                var0 = var1.id;
            case 262:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PromotionFlags;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = var4.Endpoints;
    var _closure1_slot12 = var7;
    var4 = var4.Platforms;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ActivityPlatform;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/PromotionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0, arg1) { // Original name: getPromotionImageURL, environment: var1
        _fun57904: for (var _fun57904_ip = 0;;) switch (_fun57904_ip) {
            case 0:
                var8 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.isThemeDark;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                var7 = 'logo-light';
                if (!var0) {
                    _fun57904_ip = 57;
                    continue _fun57904
                }
            case 51:
                var7 = 'logo-dark';
            case 57:
                var1 = global;
                var0 = var1.window;
                var0 = var0.GLOBAL_ENV;
                var6 = var0.CDN_HOST;
                var0 = null;
                if (!(var0 == var6)) {
                    _fun57904_ip = 156;
                    continue _fun57904
                }
            case 83:
                var0 = var1.location;
                var17 = var0.protocol;
                var0 = var1.window;
                var0 = var0.GLOBAL_ENV;
                var16 = var0.API_ENDPOINT;
                var0 = var1.HermesInternal;
                var5 = var0.concat;
                var18 = '';
                var15 = '/promotions/';
                var13 = '/';
                var11 = '?size=256';
                var14 = var8;
                var12 = var7;
                var0 = var18[var5](var17, var16, var15, var14, var13, var12, var11, var10);
                _fun57904_ip = 202;
                continue _fun57904;
            case 156:
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var18 = 'https://';
                var16 = '/promotions/';
                var14 = '/';
                var12 = '?size=256';
                var17 = var6;
                var15 = var8;
                var13 = var7;
                var0 = var18[var5](var17, var16, var15, var14, var13, var12, var11);
            case 202:
                return var0;
        }
    };
    var2.getPromotionImageURL = var4;
    var4 = function() { // Original name: fetchClaimedOutboundPromotionCodes, environment: var1
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchClaimedOutboundPromotionCodes = var4;
    var4 = function() { // Original name: claimOutboundPromotion, environment: var1
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.claimOutboundPromotion = var4;
    var4 = function(arg0, arg1) { // Original name: getOutboundPromotionRedemptionUrl, environment: var1
        _fun57907: for (var _fun57907_ip = 0;;) switch (_fun57907_ip) {
            case 0:
                var1 = arg1;
                var2 = var1.outboundRedemptionUrlFormat;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun57907_ip = 29;
                    continue _fun57907
                }
            case 15:
                var3 = var1.outboundRedemptionUrlFormat;
                var2 = '';
                if (!(var2 === var3)) {
                    _fun57907_ip = 51;
                    continue _fun57907
                }
            case 29:
                var2 = var1.outboundRedemptionPageLink;
                var3 = var0 != var2;
                var0 = '';
                if (!var3) {
                    _fun57907_ip = 49;
                    continue _fun57907
                }
            case 46:
                var0 = var2;
            case 49:
                _fun57907_ip = 92;
                continue _fun57907;
            case 51:
                var4 = var1.outboundRedemptionUrlFormat;
                var3 = var4.replace;
                var1 = global;
                var5 = var1.encodeURIComponent;
                var2 = undefined;
                var1 = arg0;
                var2 = var5.bind(var2)(var1);
                var1 = '{code}';
                var0 = var3.bind(var4)(var1, var2);
            case 92:
                return var0;
        }
    };
    var2.getOutboundPromotionRedemptionUrl = var4;
    var2.getNextUnseenOutboundPromotionId = var3;
    var3 = function() { // Original name: shouldShowOutboundPromotionNotice, environment: var1
        _fun57908: for (var _fun57908_ip = 0;;) switch (_fun57908_ip) {
            case 0:
                var0 = _closure1_slot17;
                var6 = undefined;
                var5 = var0.bind(var6)();
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun57908_ip = 95;
                    continue _fun57908
                }
            case 22:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
                var1 = var7[var1];
                var4 = var2.bind(var6)(var1);
                var3 = var4.isTimeRecurringSnowflakeBoundDismissibleContentDismissed;
                var1 = 15;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.DismissibleContent;
                var2 = var1.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
                var1 = {};
                var6 = 259200000;
                var1.cooldownDurationMs = var6;
                var1 = var3.bind(var4)(var2, var5, var1);
                var0 = !var1;
            case 95:
                return var0;
        }
    };
    var2.shouldShowOutboundPromotionNotice = var3;
    var3 = function(arg0) { // Original name: shouldShowOutboundPromotionOnPlatform, environment: var1
        _fun57909: for (var _fun57909_ip = 0;;) switch (_fun57909_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var0 = var2.isIOS;
                var0 = var0.bind(var2)();
                var0 = !var0;
                if (var0) {
                    _fun57909_ip = 68;
                    continue _fun57909
                }
            case 44:
                var2 = var3.hasFlag;
                var1 = _closure1_slot10;
                var1 = var1.IS_BLOCKED_IOS;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 68:
                return var0;
        }
    };
    var2.shouldShowOutboundPromotionOnPlatform = var3;
    var3 = function(arg0, arg1) { // Original name: isTrialUserEligibleToSeeOutboundPromotion, environment: var1
        _fun57910: for (var _fun57910_ip = 0;;) switch (_fun57910_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.id;
                var0 = arg1;
                var1 = var0[var1];
                var0 = null;
                var0 = var0 != var1;
                if (var0) {
                    _fun57910_ip = 34;
                    continue _fun57910
                }
            case 24:
                var1 = var2.isRedeemableByTrialUsers;
                var0 = var1.bind(var2)();
            case 34:
                return var0;
        }
    };
    var2.isTrialUserEligibleToSeeOutboundPromotion = var3;
    var1 = function(arg0) { // Original name: isRecurringPromotion, environment: var1
        _fun57911: for (var _fun57911_ip = 0;;) switch (_fun57911_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.promotionPartner;
                var2 = var0.promotionType;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 18;
                var0 = var0[var5];
                var3 = undefined;
                var0 = var6.bind(var3)(var0);
                var0 = var0.PromotionTypes;
                var0 = var0.THIRD_PARTY_OUTBOUND_RECURRING;
                var0 = var2 === var0;
                if (var0) {
                    _fun57911_ip = 102;
                    continue _fun57911
                }
            case 59:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var2.bind(var3)(var1);
                var3 = var1.RECURRING_PARTNER_IDS;
                var2 = var3.has;
                var1 = var4.toLocaleLowerCase;
                var1 = var1.bind(var4)();
                var0 = var2.bind(var3)(var1);
            case 102:
                return var0;
        }
    };
    var2.isRecurringPromotion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1676, 1310, 6820, 3076, 6602, 7034, 1615, 660, 3416, 3165, 507, 478, 795, 1384, 1358, 21, 1360, 6821, 2]);