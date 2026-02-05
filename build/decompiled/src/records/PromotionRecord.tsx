// records/PromotionRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun56679: for (var _fun56679_ip = 0;;) switch (_fun56679_ip) {
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
            case 70: // try_end0
                _fun56679_ip = 74;
                continue _fun56679;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.PromotionFlags;
    var _closure1_slot7 = var6;
    var1 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun56683: for (var _fun56683_ip = 0;;) switch (_fun56683_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun56683_ip = 65;
                        continue _fun56683
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun56683_ip = 103;
                    continue _fun56683;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.trialId;
                    var0.trialId = var2;
                    var2 = var1.startDate;
                    var0.startDate = var2;
                    var2 = var1.endDate;
                    var0.endDate = var2;
                    var2 = var1.outboundRedemptionEndDate;
                    var0.outboundRedemptionEndDate = var2;
                    var2 = var1.inboundHeaderText;
                    var0.inboundHeaderText = var2;
                    var2 = var1.inboundBodyText;
                    var0.inboundBodyText = var2;
                    var2 = var1.inboundHelpCenterLink;
                    var0.inboundHelpCenterLink = var2;
                    var2 = var1.outboundTitle;
                    var0.outboundTitle = var2;
                    var2 = var1.outboundRedemptionModalBody;
                    var0.outboundRedemptionModalBody = var2;
                    var2 = var1.outboundTermsAndConditions;
                    var0.outboundTermsAndConditions = var2;
                    var2 = var1.outboundRedemptionPageLink;
                    var0.outboundRedemptionPageLink = var2;
                    var2 = var1.outboundRedemptionUrlFormat;
                    var0.outboundRedemptionUrlFormat = var2;
                    var4 = var1.flags;
                    var3 = null;
                    var5 = var3 != var4;
                    var2 = 0;
                    if (!var5) {
                        _fun56683_ip = 283;
                        continue _fun56683
                    }
                case 280:
                    var2 = var4;
                case 283:
                    var0.flags = var2;
                    var2 = var1.inboundRestrictedCountries;
                    if (!(var3 == var2)) {
                        _fun56683_ip = 303;
                        continue _fun56683
                    }
                case 299:
                    var2 = new Array(0);
                case 303:
                    var0.inboundRestrictedCountries = var2;
                    var2 = var1.outboundRestrictedCountries;
                    if (!(var3 == var2)) {
                        _fun56683_ip = 323;
                        continue _fun56683
                    }
                case 319:
                    var2 = new Array(0);
                case 323:
                    var0.outboundRestrictedCountries = var2;
                    var2 = var1.promotionType;
                    var0.promotionType = var2;
                    var2 = var1.partnerId;
                    var0.partnerId = var2;
                    var2 = var1.marketingComponents;
                    var0.marketingComponents = var2;
                    var1 = var1.rewardSkuIds;
                    var0.rewardSkuIds = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'isBogo';
        var5.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.promotionType;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.PromotionTypes;
            var0 = var0.BOGO;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var6 = 'isMarketingMoment';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.promotionType;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.PromotionTypes;
            var0 = var0.MARKETING_MOMENT;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'hasFlag';
        var5.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.hasFlag;
            var0 = this;
            var1 = var0.flags;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'isCountryRestricted';
        var5.key = var6;
        var6 = function arg0() {
            _fun56687: for (var _fun56687_ip = 0;;) switch (_fun56687_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.promotionType;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var6 = 7;
                    var4 = var4[var6];
                    var5 = undefined;
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.PromotionTypes;
                    var4 = var4.THIRD_PARTY_INBOUND;
                    if (!(var4 !== var3)) {
                        _fun56687_ip = 141;
                        continue _fun56687
                    }
                case 53:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.PromotionTypes;
                    var4 = var4.THIRD_PARTY_OUTBOUND;
                    if (!(var4 !== var3)) {
                        _fun56687_ip = 123;
                        continue _fun56687
                    }
                case 86:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.PromotionTypes;
                    var1 = var1.THIRD_PARTY_OUTBOUND_RECURRING;
                    if (!(var1 !== var3)) {
                        _fun56687_ip = 123;
                        continue _fun56687
                    }
                case 119:
                    var1 = false;
                    return var1;
                case 123:
                    var3 = var0.outboundRestrictedCountries;
                    var1 = var3.includes;
                    var1 = var1.bind(var3)(var2);
                    return var1;
                case 141:
                    var1 = var0.inboundRestrictedCountries;
                    var0 = var1.includes;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'isRedeemableByTrialUsers';
        var5.key = var6;
        var6 = function() {
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot7;
            var0 = var0.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var6;
        var1[4] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0() {
            _fun56689: for (var _fun56689_ip = 0;;) switch (_fun56689_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var3 = var1.id;
                    var0.id = var3;
                    var3 = var1.trial_id;
                    var0.trialId = var3;
                    var5 = global;
                    var6 = var5.Date;
                    var8 = var1.start_date;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = var4;
                    var3 = new var9[var6](var8, var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.startDate = var3;
                    var6 = var5.Date;
                    var8 = var1.end_date;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = var4;
                    var3 = new var9[var6](var8, var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.endDate = var3;
                    var4 = var1.outbound_redemption_end_date;
                    var3 = null;
                    var6 = var3 != var4;
                    var4 = null;
                    if (!var6) {
                        _fun56689_ip = 159;
                        continue _fun56689
                    }
                case 127:
                    var7 = var5.Date;
                    var8 = var1.outbound_redemption_end_date;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var9 = var6;
                    var5 = new var9[var7](var8, var7);
                    var4 = var5 instanceof Object ? var5 : var6;
                case 159:
                    var0.outboundRedemptionEndDate = var4;
                    var6 = var1.inbound_header_text;
                    var7 = var3 != var6;
                    var4 = '';
                    var5 = var4;
                    if (!var7) {
                        _fun56689_ip = 189;
                        continue _fun56689
                    }
                case 186:
                    var5 = var6;
                case 189:
                    var0.inboundHeaderText = var5;
                    var6 = var1.inbound_body_text;
                    var7 = var3 != var6;
                    var5 = var4;
                    if (!var7) {
                        _fun56689_ip = 215;
                        continue _fun56689
                    }
                case 212:
                    var5 = var6;
                case 215:
                    var0.inboundBodyText = var5;
                    var6 = var1.inbound_help_center_link;
                    var7 = var3 != var6;
                    var5 = var4;
                    if (!var7) {
                        _fun56689_ip = 241;
                        continue _fun56689
                    }
                case 238:
                    var5 = var6;
                case 241:
                    var0.inboundHelpCenterLink = var5;
                    var6 = var1.outbound_title;
                    var7 = var3 != var6;
                    var5 = var4;
                    if (!var7) {
                        _fun56689_ip = 267;
                        continue _fun56689
                    }
                case 264:
                    var5 = var6;
                case 267:
                    var0.outboundTitle = var5;
                    var6 = var1.outbound_redemption_modal_body;
                    var7 = var3 != var6;
                    var5 = var4;
                    if (!var7) {
                        _fun56689_ip = 293;
                        continue _fun56689
                    }
                case 290:
                    var5 = var6;
                case 293:
                    var0.outboundRedemptionModalBody = var5;
                    var6 = var1.outbound_terms_and_conditions;
                    var7 = var3 != var6;
                    var5 = var4;
                    if (!var7) {
                        _fun56689_ip = 319;
                        continue _fun56689
                    }
                case 316:
                    var5 = var6;
                case 319:
                    var0.outboundTermsAndConditions = var5;
                    var6 = var1.outbound_redemption_page_link;
                    var7 = var3 != var6;
                    var5 = var4;
                    if (!var7) {
                        _fun56689_ip = 345;
                        continue _fun56689
                    }
                case 342:
                    var5 = var6;
                case 345:
                    var0.outboundRedemptionPageLink = var5;
                    var5 = var1.outbound_redemption_url_format;
                    var6 = var3 != var5;
                    if (!var6) {
                        _fun56689_ip = 368;
                        continue _fun56689
                    }
                case 365:
                    var4 = var5;
                case 368:
                    var0.outboundRedemptionUrlFormat = var4;
                    var4 = var1.flags;
                    var0.flags = var4;
                    var4 = var1.inbound_restricted_countries;
                    var0.inboundRestrictedCountries = var4;
                    var4 = var1.outbound_restricted_countries;
                    var0.outboundRestrictedCountries = var4;
                    var4 = var1.promotion_type;
                    var0.promotionType = var4;
                    var5 = var1.partner_id;
                    var6 = var3 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun56689_ip = 439;
                        continue _fun56689
                    }
                case 436:
                    var4 = var5;
                case 439:
                    var0.partnerId = var4;
                    var4 = var1.marketing_components;
                    if (!(var3 == var4)) {
                        _fun56689_ip = 458;
                        continue _fun56689
                    }
                case 454:
                    var4 = new Array(0);
                case 458:
                    var0.marketingComponents = var4;
                    var4 = var1.metadata;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun56689_ip = 501;
                        continue _fun56689
                    }
                case 478:
                    var4 = var4.gift_promotion;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun56689_ip = 501;
                        continue _fun56689
                    }
                case 495:
                    var1 = var4.reward_sku_ids;
                case 501:
                    if (!(var3 == var1)) {
                        _fun56689_ip = 509;
                        continue _fun56689
                    }
                case 505:
                    var1 = new Array(0);
                case 509:
                    var0.rewardSkuIds = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var1;
                    var8 = var0;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/PromotionRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 1623, 6886, 1384, 2]);