// utils/native/PremiumUpsellUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function(arg0, arg1, arg2) { // Original name: usePremiumUpsellConfig, environment: var3
        _fun61295: for (var _fun61295_ip = 0;;) switch (_fun61295_ip) {
            case 0:
                var4 = arg0;
                var9 = arg1;
                var2 = arg2;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var9;
                var _closure2_slot2 = var2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 17;
                var3 = var6[var3];
                var11 = undefined;
                var5 = var5.bind(var11)(var3);
                var3 = var5.usePremiumTrialOffer;
                var7 = var3.bind(var5)();
                var _closure2_slot3 = var7;
                var3 = global;
                var6 = var3.Set;
                var3 = _closure1_slot7;
                var5 = var3.GLOBAL_EMOJI;
                var3 = new Array(2);
                var3[0] = var5;
                var5 = _closure1_slot7;
                var5 = var5.UPLOAD;
                var3[1] = var5;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var14 = var5;
                var13 = var3;
                var3 = new var14[var6](var13, var12);
                var5 = var3 instanceof Object ? var3 : var5;
                var10 = null;
                var6 = var10 != var7;
                if (!var6) {
                    _fun61295_ip = 144;
                    continue _fun61295
                }
            case 134:
                var3 = var5.has;
                var6 = var3.bind(var5)(var4);
            case 144:
                var _closure2_slot4 = var6;
                var3 = var6;
                if (!var3) {
                    _fun61295_ip = 198;
                    continue _fun61295
                }
            case 154:
                var5 = var10 == var7;
                var8 = undefined;
                if (var5) {
                    _fun61295_ip = 184;
                    continue _fun61295
                }
            case 163:
                var5 = var7.subscription_trial;
                var10 = var10 == var5;
                var8 = undefined;
                if (var10) {
                    _fun61295_ip = 184;
                    continue _fun61295
                }
            case 178:
                var8 = var5.sku_id;
            case 184:
                var5 = _closure1_slot8;
                var5 = var5.TIER_0;
                var3 = var8 === var5;
            case 198:
                var _closure2_slot5 = var3;
                var10 = _closure1_slot3;
                var8 = var10.useMemo;
                var5 = new Array(2);
                var5[0] = var4;
                var5[1] = var3;
                var4 = function() { // Environment: var0
                    _fun61296: for (var _fun61296_ip = 0;;) switch (_fun61296_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            if (var2) {
                                _fun61296_ip = 237;
                                continue _fun61296
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot7;
                            var1 = var1.UPLOAD;
                            if (!(var1 !== var2)) {
                                _fun61296_ip = 201;
                                continue _fun61296
                            }
                        case 37:
                            var1 = _closure1_slot7;
                            var1 = var1.ANIMATED_EMOJI;
                            if (!(var1 !== var2)) {
                                _fun61296_ip = 201;
                                continue _fun61296
                            }
                        case 54:
                            var1 = _closure1_slot7;
                            var1 = var1.GLOBAL_EMOJI;
                            if (!(var1 !== var2)) {
                                _fun61296_ip = 201;
                                continue _fun61296
                            }
                        case 71:
                            var1 = _closure1_slot7;
                            var1 = var1.GLOBAL_STICKER;
                            if (!(var1 !== var2)) {
                                _fun61296_ip = 201;
                                continue _fun61296
                            }
                        case 85:
                            var1 = _closure1_slot7;
                            var1 = var1.CUSTOM_PROFILES;
                            if (!(var1 !== var2)) {
                                _fun61296_ip = 201;
                                continue _fun61296
                            }
                        case 99:
                            var1 = _closure1_slot7;
                            var1 = var1.PREMIUM_GUILD_PROFILE;
                            if (!(var1 !== var2)) {
                                _fun61296_ip = 201;
                                continue _fun61296
                            }
                        case 113:
                            var1 = _closure1_slot7;
                            var1 = var1.APP_ICONS;
                            if (!(var1 !== var2)) {
                                _fun61296_ip = 201;
                                continue _fun61296
                            }
                        case 127:
                            var1 = _closure1_slot7;
                            var1 = var1.LONGER_MESSAGE;
                            if (!(var1 !== var2)) {
                                _fun61296_ip = 165;
                                continue _fun61296
                            }
                        case 141:
                            var1 = _closure1_slot7;
                            var1 = var1.GUILD_CAP;
                            if (!(var1 !== var2)) {
                                _fun61296_ip = 165;
                                continue _fun61296
                            }
                        case 155:
                            var1 = _closure1_slot7;
                            var1 = var1.ANIMATED_AVATAR;
                        case 165:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = var1.PremiumFeatureCardOrder;
                            var1 = var1.TIER_0_LEADING;
                            return var1;
                        case 201:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = var1.PremiumFeatureCardOrder;
                            var1 = var1.TIER_2_LEADING;
                            return var1;
                        case 237:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.PremiumFeatureCardOrder;
                            var0 = var0.TIER_0_LEADING;
                            return var0;
                    }
                };
                var10 = var8.bind(var10)(var4, var5);
                var _closure2_slot6 = var10;
                var8 = _closure1_slot3;
                var5 = var8.useCallback;
                var4 = new Array(3);
                var4[0] = var10;
                var4[1] = var9;
                var4[2] = var2;
                var2 = function() { // Environment: var0
                    _fun61297: for (var _fun61297_ip = 0;;) switch (_fun61297_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getBestActiveInput;
                            var2 = var1.bind(var2)();
                            var7 = null;
                            if (!(var7 != var2)) {
                                _fun61297_ip = 51;
                                continue _fun61297
                            }
                        case 41:
                            var1 = var2.closeCustomKeyboard;
                            var1 = var1.bind(var2)();
                        case 51:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var2 = 20;
                            var2 = var1[var2];
                            var10 = var3.bind(var0)(var2);
                            var6 = var10.track;
                            var2 = _closure1_slot5;
                            var4 = var2.PREMIUM_PROMOTION_OPENED;
                            var2 = {};
                            var9 = _closure2_slot2;
                            var2.location = var9;
                            var2 = var6.bind(var10)(var4, var2);
                            var2 = 21;
                            var2 = var1[var2];
                            var4 = var3.bind(var0)(var2);
                            var2 = var4.hideActionSheet;
                            var2 = var2.bind(var4)();
                            var2 = 22;
                            var2 = var1[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.pushLazy;
                            var6 = _closure1_slot0;
                            var2 = 15;
                            var2 = var1[var2];
                            var6 = var6.bind(var0)(var2);
                            var2 = 23;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var6.bind(var0)(var2, var1);
                            var1 = {};
                            var6 = {};
                            var13 = var6;
                            var12 = var9;
                            var9 = copyDataProperties(var13, var12);
                            var8 = _closure1_slot6;
                            var9 = var8.BUTTON_CTA;
                            var8 = 'object';
                            var6[var8] = var9;
                            var1.analyticsLocation = var6;
                            var6 = _closure2_slot1;
                            if (!(var7 == var6)) {
                                _fun61297_ip = 231;
                                continue _fun61297
                            }
                        case 225:
                            var6 = new Array(0);
                            _fun61297_ip = 235;
                            continue _fun61297;
                        case 231:
                            var6 = _closure2_slot1;
                        case 235:
                            var1.analyticsLocations = var6;
                            var5 = _closure2_slot6;
                            var1.premiumFeatureCardOrder = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var2 = var5.bind(var8)(var2, var4);
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var1 = new Array(3);
                var1[0] = var3;
                var1[1] = var7;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun61298: for (var _fun61298_ip = 0;;) switch (_fun61298_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun61298_ip = 82;
                                continue _fun61298
                            }
                        case 10:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun61298_ip = 158;
                                continue _fun61298
                            }
                        case 20:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 6;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1["9CM5v9"];
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 82:
                            var2 = _closure2_slot3;
                            var1 = null;
                            var3 = var1 == var2;
                            var4 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun61298_ip = 124;
                                continue _fun61298
                            }
                        case 99:
                            var0 = _closure2_slot3;
                            var0 = var0.subscription_trial;
                            var1 = var1 == var0;
                            var2 = undefined;
                            if (var1) {
                                _fun61298_ip = 124;
                                continue _fun61298
                            }
                        case 118:
                            var2 = var0.sku_id;
                        case 124:
                            var1 = _closure1_slot8;
                            var1 = var1.TIER_0;
                            if (!(var1 !== var2)) {
                                _fun61298_ip = 279;
                                continue _fun61298
                            }
                        case 144:
                            var1 = _closure1_slot8;
                            var1 = var1.TIER_2;
                            if (!(var1 !== var2)) {
                                _fun61298_ip = 220;
                                continue _fun61298
                            }
                        case 158:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 6;
                            var2 = var7[var1];
                            var5 = undefined;
                            var2 = var6.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var5)(var1);
                            var1 = var1.t;
                            var1 = var1.pj0XBN;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 220:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 6;
                            var2 = var6[var1];
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1["Gd/XHF"];
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 279:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 6;
                            var1 = var5[var0];
                            var1 = var3.bind(var4)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var5[var0];
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.t;
                            var0 = var0.hz78hE;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var0, var1);
                var0 = {};
                var0.useTier0UpsellContent = var3;
                var0.onViewAllPerks = var2;
                var0.getNitroText = var1;
                return var0;
        }
    };
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var7[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot5 = var5;
    var5 = var4.AnalyticsObjects;
    var _closure1_slot6 = var5;
    var4 = var4.UpsellTypes;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot8 = var5;
    var4 = var4.PremiumTypes;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = {};
    var5 = function(arg0) { // Original name: handleShowUpsellAlert, environment: var3
        _fun61299: for (var _fun61299_ip = 0;;) switch (_fun61299_ip) {
            case 0:
                var3 = arg0;
                var6 = var3.initialUpsellKey;
                var _closure2_slot0 = var6;
                var1 = var3.analyticsLocation;
                var0 = undefined;
                if (!(var0 === var1)) {
                    _fun61299_ip = 29;
                    continue _fun61299
                }
            case 27:
                var1 = {};
            case 29:
                var _closure2_slot1 = var1;
                var1 = var3.analyticsLocations;
                if (!(var0 === var1)) {
                    _fun61299_ip = 47;
                    continue _fun61299
                }
            case 43:
                var1 = new Array(0);
            case 47:
                var _closure2_slot2 = var1;
                var1 = var3.analyticsProperties;
                if (!(var0 === var1)) {
                    _fun61299_ip = 63;
                    continue _fun61299
                }
            case 61:
                var1 = {};
            case 63:
                var _closure2_slot3 = var1;
                var1 = var3.largestFileSize;
                var _closure2_slot4 = var1;
                var1 = var3.imageSource;
                var _closure2_slot5 = var1;
                var5 = _closure1_slot4;
                var2 = var5.getCurrentUser;
                var8 = var2.bind(var5)();
                var2 = null;
                var5 = var2 == var8;
                var2 = false;
                if (var5) {
                    _fun61299_ip = 819;
                    continue _fun61299
                }
            case 117:
                var5 = _closure1_slot7;
                var5 = var5.UPLOAD;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 774;
                    continue _fun61299
                }
            case 134:
                var5 = _closure1_slot7;
                var5 = var5.GLOBAL_EMOJI;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 738;
                    continue _fun61299
                }
            case 151:
                var5 = _closure1_slot7;
                var5 = var5.ANIMATED_AVATAR;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 702;
                    continue _fun61299
                }
            case 168:
                var5 = _closure1_slot7;
                var5 = var5.BADGE;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 666;
                    continue _fun61299
                }
            case 185:
                var5 = _closure1_slot7;
                var5 = var5.ANIMATED_EMOJI;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 627;
                    continue _fun61299
                }
            case 202:
                var5 = _closure1_slot7;
                var5 = var5.EMOJI_AUTOCOMPLETE;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 551;
                    continue _fun61299
                }
            case 219:
                var5 = _closure1_slot7;
                var5 = var5.CUSTOM_PROFILES;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 512;
                    continue _fun61299
                }
            case 236:
                var5 = _closure1_slot7;
                var5 = var5.APP_ICONS;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 473;
                    continue _fun61299
                }
            case 253:
                var5 = _closure1_slot7;
                var5 = var5.GLOBAL_STICKER;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 434;
                    continue _fun61299
                }
            case 270:
                var5 = _closure1_slot7;
                var5 = var5.PREMIUM_GUILD_PROFILE;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 395;
                    continue _fun61299
                }
            case 284:
                var5 = _closure1_slot7;
                var5 = var5.LONGER_MESSAGE;
                if (!(var5 !== var6)) {
                    _fun61299_ip = 356;
                    continue _fun61299
                }
            case 298:
                var5 = _closure1_slot7;
                var5 = var5.GUILD_CAP;
                var2 = false;
                if (!(var5 === var6)) {
                    _fun61299_ip = 819;
                    continue _fun61299
                }
            case 317:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUseIncreasedGuildCap;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 356:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUseIncreasedMessageLength;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 395:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUsePremiumGuildMemberProfile;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 434:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUseCustomStickersEverywhere;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 473:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUsePremiumAppIcons;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 512:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUsePremiumProfileCustomization;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 551:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var9 = 16;
                var5 = var5[var9];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUseAnimatedEmojis;
                var5 = var5.bind(var6)(var8);
                var5 = !var5;
                if (var5) {
                    _fun61299_ip = 619;
                    continue _fun61299
                }
            case 588:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var7 = var7.bind(var0)(var6);
                var6 = var7.canUseEmojisEverywhere;
                var6 = var6.bind(var7)(var8);
                var5 = !var6;
            case 619:
                var2 = var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 627:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUseAnimatedEmojis;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 666:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUseBadges;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 702:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUseAnimatedAvatar;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 738:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canUseEmojisEverywhere;
                var5 = var5.bind(var6)(var8);
                var2 = !var5;
                _fun61299_ip = 819;
                continue _fun61299;
            case 774:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.isPremiumExactly;
                var5 = _closure1_slot9;
                var5 = var5.TIER_2;
                var5 = var6.bind(var7)(var8, var5);
                var2 = !var5;
            case 819:
                if (!var2) {
                    _fun61299_ip = 893;
                    continue _fun61299
                }
            case 822:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var2 = var5.bind(var0)(var2);
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun61299_ip = 895;
                    continue _fun61299
                }
            case 850:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.openLazy;
                var1 = {};
                var4 = function() { // Original name: importer, environment: var4
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var1 = 15;
                    var1 = var0[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = 14;
                    var1 = var0[var1];
                    var0 = var0.paths;
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var1 = var1.default;
                        var _closure4_slot0 = var1;
                        var0 = function(arg0) { // Environment: var0
                            var3 = _closure1_slot10;
                            var2 = _closure4_slot0;
                            var1 = {};
                            var6 = arg0;
                            var7 = var1;
                            var0 = copyDataProperties(var7, var6);
                            var5 = _closure2_slot0;
                            var4 = 'initialUpsellKey';
                            var1[var4] = var5;
                            var5 = _closure2_slot1;
                            var4 = 'analyticsLocation';
                            var1[var4] = var5;
                            var5 = _closure2_slot3;
                            var4 = 'analyticsProperties';
                            var1[var4] = var5;
                            var5 = _closure2_slot2;
                            var4 = 'analyticsLocations';
                            var1[var4] = var5;
                            var5 = _closure2_slot4;
                            var4 = 'largestFileSize';
                            var1[var4] = var5;
                            var4 = _closure2_slot5;
                            var0 = 'imageSource';
                            var1[var0] = var4;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.importer = var4;
                var1 = var2.bind(var3)(var1);
            case 893:
                return var0;
            case 895:
                return var0;
        }
    };
    var4.handleShowUpsellAlert = var5;
    var4.usePremiumUpsellConfig = var1;
    var5 = 24;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/native/PremiumUpsellUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var3 = function() { // Original name: getUpsellItems, environment: var3
        var1 = {};
        var0 = _closure1_slot7;
        var0 = var0.GLOBAL_EMOJI;
        var1.key = var0;
        var4 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 5;
        var0 = var7[var0];
        var6 = undefined;
        var0 = var4.bind(var6)(var0);
        var1.image = var0;
        var5 = _closure1_slot0;
        var2 = 6;
        var0 = var7[var2];
        var0 = var5.bind(var6)(var0);
        var9 = var0.intl;
        var8 = var9.string;
        var0 = var7[var2];
        var0 = var5.bind(var6)(var0);
        var0 = var0.t;
        var0 = var0.gKtr8N;
        var0 = var8.bind(var9)(var0);
        var1.activeTitle = var0;
        var0 = var7[var2];
        var0 = var5.bind(var6)(var0);
        var9 = var0.intl;
        var8 = var9.string;
        var0 = var7[var2];
        var0 = var5.bind(var6)(var0);
        var0 = var0.t;
        var0 = var0.N8ZRNb;
        var0 = var8.bind(var9)(var0);
        var1.passiveTitle = var0;
        var0 = var7[var2];
        var0 = var5.bind(var6)(var0);
        var10 = var0.intl;
        var9 = var10.format;
        var0 = var7[var2];
        var0 = var5.bind(var6)(var0);
        var0 = var0.t;
        var8 = var0.rf7Ixp;
        var0 = {};
        var0 = var9.bind(var10)(var8, var0);
        var1.description = var0;
        var0 = new Array(6);
        var0[0] = var1;
        var1 = {};
        var8 = _closure1_slot7;
        var8 = var8.ANIMATED_EMOJI;
        var1.key = var8;
        var8 = 7;
        var8 = var7[var8];
        var8 = var4.bind(var6)(var8);
        var1.image = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var8 = var8.F6rmyq;
        var8 = var9.bind(var10)(var8);
        var1.activeTitle = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var8 = var8.e4cKNt;
        var8 = var9.bind(var10)(var8);
        var1.passiveTitle = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var11 = var8.intl;
        var10 = var11.format;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var9 = var8.JxTzzb;
        var8 = {};
        var8 = var10.bind(var11)(var9, var8);
        var1.description = var8;
        var0[1] = var1;
        var1 = {};
        var8 = _closure1_slot7;
        var8 = var8.ANIMATED_AVATAR;
        var1.key = var8;
        var8 = 8;
        var8 = var7[var8];
        var8 = var4.bind(var6)(var8);
        var1.image = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var8 = var8["tQh+gF"];
        var8 = var9.bind(var10)(var8);
        var1.activeTitle = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var8 = var8.HGSXTM;
        var8 = var9.bind(var10)(var8);
        var1.passiveTitle = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var11 = var8.intl;
        var10 = var11.format;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var9 = var8["Tso/Fn"];
        var8 = {};
        var8 = var10.bind(var11)(var9, var8);
        var1.description = var8;
        var0[2] = var1;
        var1 = {};
        var8 = _closure1_slot7;
        var8 = var8.UPLOAD;
        var1.key = var8;
        var8 = 9;
        var8 = var7[var8];
        var8 = var4.bind(var6)(var8);
        var1.image = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var8 = var8["1EOZqw"];
        var8 = var9.bind(var10)(var8);
        var1.activeTitle = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var8 = var8.tB51W4;
        var8 = var9.bind(var10)(var8);
        var1.passiveTitle = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var11 = var8.intl;
        var10 = var11.format;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var9 = var8.DUT5IC;
        var8 = {};
        var12 = var7[var2];
        var12 = var5.bind(var6)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = var7[var2];
        var12 = var5.bind(var6)(var12);
        var12 = var12.t;
        var12 = var12.Ll40SK;
        var12 = var13.bind(var14)(var12);
        var8.maxUploadStandard = var12;
        var12 = var7[var2];
        var12 = var5.bind(var6)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = var7[var2];
        var12 = var5.bind(var6)(var12);
        var12 = var12.t;
        var12 = var12.EaBfeq;
        var12 = var13.bind(var14)(var12);
        var8.maxUploadPremium = var12;
        var8 = var10.bind(var11)(var9, var8);
        var1.description = var8;
        var0[3] = var1;
        var1 = {};
        var8 = _closure1_slot7;
        var8 = var8.BADGE;
        var1.key = var8;
        var8 = 10;
        var8 = var7[var8];
        var8 = var4.bind(var6)(var8);
        var1.image = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var8 = var8["602BK4"];
        var8 = var9.bind(var10)(var8);
        var1.activeTitle = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var8 = var8.j0TXTX;
        var8 = var9.bind(var10)(var8);
        var1.passiveTitle = var8;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var11 = var8.intl;
        var10 = var11.format;
        var8 = var7[var2];
        var8 = var5.bind(var6)(var8);
        var8 = var8.t;
        var9 = var8["p7i+li"];
        var8 = {};
        var8 = var10.bind(var11)(var9, var8);
        var1.description = var8;
        var0[4] = var1;
        var1 = {};
        var3 = _closure1_slot7;
        var3 = var3.APP_ICONS;
        var1.key = var3;
        var3 = 11;
        var3 = var7[var3];
        var3 = var4.bind(var6)(var3);
        var1.image = var3;
        var3 = var7[var2];
        var3 = var5.bind(var6)(var3);
        var8 = var3.intl;
        var4 = var8.string;
        var3 = var7[var2];
        var3 = var5.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3["1B1Cyn"];
        var3 = var4.bind(var8)(var3);
        var1.activeTitle = var3;
        var3 = var7[var2];
        var3 = var5.bind(var6)(var3);
        var8 = var3.intl;
        var4 = var8.string;
        var3 = var7[var2];
        var3 = var5.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3["1B1Cyn"];
        var3 = var4.bind(var8)(var3);
        var1.passiveTitle = var3;
        var3 = var7[var2];
        var3 = var5.bind(var6)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var5.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2.VL5TYT;
        var2 = var3.bind(var4)(var2);
        var1.description = var2;
        var0[5] = var1;
        return var0;
    };
    var2.getUpsellItems = var3;
    var2.usePremiumUpsellConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1613, 660, 1615, 33, 7571, 1234, 7572, 7573, 7574, 7575, 7576, 7577, 3890, 7592, 1307, 3068, 6611, 7631, 3675, 795, 3237, 4518, 7004, 2]);