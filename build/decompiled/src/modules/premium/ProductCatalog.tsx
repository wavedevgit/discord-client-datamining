// modules/premium/ProductCatalog.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var34 = require;
    var40 = metroImportDefault;
    var2 = exports;
    var35 = dependencyMap;
    var _closure1_slot0 = var34;
    var _closure1_slot1 = var35;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun97260: for (var _fun97260_ip = 0;;) switch (_fun97260_ip) {
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
                _fun97260_ip = 76;
                continue _fun97260;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var35[var0];
    var0 = undefined;
    var4 = var40.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var35[var4];
    var4 = var40.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var35[var4];
    var4 = var40.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var35[var4];
    var4 = var40.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var35[var4];
    var4 = var40.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var35[var4];
    var4 = var40.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var35[var4];
    var4 = var34.bind(var0)(var4);
    var37 = var4.PremiumSubscriptionSKUs;
    var4 = var4.PremiumTypeToActivePremiumSubscriptionSKU;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var35[var4];
    var6 = var40.bind(var0)(var4);
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var47 = 'ProductCatalog.tsx';
    var48 = var5;
    var4 = new var48[var6](var47, var46);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot9 = var4;
    var5 = 8;
    var4 = var35[var5];
    var6 = var40.bind(var0)(var4);
    var4 = function(arg0) { // Environment: var1
        var2 = function(arg0, arg1) { // Original name: ProductCatalogFeature, environment: var0
            _fun97264: for (var _fun97264_ip = 0;;) switch (_fun97264_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var9 = new Array(3);
                    var0 = arg0;
                    var9[0] = var0;
                    var0 = function(arg0) { // Environment: var1
                        _fun97265: for (var _fun97265_ip = 0;;) switch (_fun97265_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure1_slot4;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var7 = var4.bind(var1)(var2);
                                var6 = var7;
                                var4 = var0;
                                var8 = undefined;
                                var9 = undefined;
                                var2 = undefined;
                                var7 = null;
                                var10 = var7 == var0;
                                var0 = false;
                                if (var10) {
                                    _fun97265_ip = 328;
                                    continue _fun97265
                                }
                            case 50:
                                var10 = var4;
                                var10 = var10.premiumType;
                                var10 = var7 == var10;
                                var0 = false;
                                if (var10) {
                                    _fun97265_ip = 328;
                                    continue _fun97265
                                }
                            case 71: // try_start_0
                                var11 = _closure1_slot8;
                                var10 = var4;
                                var10 = var10.premiumType;
                                var10 = var11[var10];
                                var8 = var10;
                                if (!(var7 != var10)) {
                                    _fun97265_ip = 199;
                                    continue _fun97265
                                }
                            case 95:
                                var11 = _closure1_slot10;
                                var10 = var8;
                                var10 = var11[var10];
                                var9 = var10;
                                if (!(var7 != var10)) {
                                    _fun97265_ip = 131;
                                    continue _fun97265
                                }
                            case 113:
                                var10 = var9.skuFeatures;
                                var9 = var10.includes;
                                var6 = var9.bind(var10)(var6);
                                _fun97265_ip = 191;
                                continue _fun97265;
                            case 131:
                                var10 = _closure1_slot9;
                                var9 = var10.warn;
                                var14 = var8;
                                var8 = var4;
                                var13 = var8.premiumType;
                                var8 = global;
                                var8 = var8.HermesInternal;
                                var12 = var8.concat;
                                var11 = "Cannot find the corresponding product catalog entry to the user's SKU ";
                                var8 = ' and premium type ';
                                var8 = var12.bind(var11)(var14, var8, var13);
                                var8 = var9.bind(var10)(var8);
                                var6 = false;
                            case 191: // try_end0
                                var0 = var6;
                                _fun97265_ip = 328;
                                continue _fun97265;
                            case 199: // try_start_1
                                var8 = _closure1_slot9;
                                var6 = var8.warn;
                                var10 = var4.premiumType;
                                var4 = global;
                                var4 = var4.HermesInternal;
                                var9 = var4.concat;
                                var4 = "Cannot find the corresponding SKU to the user's premium type ";
                                var4 = var9.bind(var4)(var10);
                                var4 = var6.bind(var8)(var4);
                            case 243: // try_end1
                                var0 = false;
                                _fun97265_ip = 328;
                                continue _fun97265;
                            case 247: // catch_target0 // catch_target1
                                CatchBlockStart(arg_register = 6);
                                var5 = var6;
                                var4 = _closure1_slot9;
                                var3 = var4.error;
                                var6 = var6.message;
                                var2 = var6;
                                if (!(var7 == var6)) {
                                    _fun97265_ip = 294;
                                    continue _fun97265
                                }
                            case 273:
                                var6 = global;
                                var7 = var6.JSON;
                                var6 = var7.stringify;
                                var6 = var6.bind(var7)(var5);
                                _fun97265_ip = 297;
                                continue _fun97265;
                            case 294:
                                var6 = var2;
                            case 297:
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var5 = var2.concat;
                                var2 = "Error while retrieving user's feature access: ";
                                var2 = var5.bind(var2)(var6);
                                var2 = var3.bind(var4)(var2);
                                var0 = false;
                            case 328:
                                return var0;
                        }
                    };
                    var9[1] = var0;
                    var0 = arg1;
                    var9[2] = var0;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun97264_ip = 93;
                        continue _fun97264
                    }
                case 80:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun97264_ip = 127;
                    continue _fun97264;
                case 93:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 127:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var36 = var4.bind(var0)(var6);
    var4 = 9;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.ANIMATED_EMOJIS;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var32 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.EMOJIS_EVERYWHERE;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var31 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.STICKERS_EVERYWHERE;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var30 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.SOUNDBOARD_EVERYWHERE;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var29 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.CUSTOM_CALL_SOUNDS;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var28 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.PREMIUM_VOICE_FILTERS;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var27 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.ANIMATED_AVATAR;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var26 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.CUSTOM_DISCRIMINATOR;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var25 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.PREMIUM_GUILD_MEMBER_PROFILE;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var24 = var6 instanceof Object ? var6 : var7;
    var6 = var36.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var47 = 'profileBadges';
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var23 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.PROFILE_PREMIUM_FEATURES;
    var6 = var36.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var46 = 'custom banner and avatar decoration';
    var48 = var7;
    var6 = new var48[var36](var47, var46, var45);
    var22 = var6 instanceof Object ? var6 : var7;
    var6 = var36.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var47 = 'collectibles';
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var21 = var6 instanceof Object ? var6 : var7;
    var6 = var36.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var47 = 'appIcons';
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var20 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.CLIENT_THEMES;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var19 = var6 instanceof Object ? var6 : var7;
    var6 = var36.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var47 = 'boostDiscount';
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var18 = var6 instanceof Object ? var6 : var7;
    var6 = var36.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var47 = 'freeBoosts';
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var17 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.STREAM_MID_QUALITY;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var16 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.STREAM_HIGH_QUALITY;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var15 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.CUSTOM_NOTIFICATION_SOUNDS;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var14 = var6 instanceof Object ? var6 : var7;
    var6 = var36.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var47 = 'fancyVoiceChannelReactions';
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var13 = var6 instanceof Object ? var6 : var7;
    var6 = var36.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var47 = 'installPremiumApplications';
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var12 = var6 instanceof Object ? var6 : var7;
    var6 = var36.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var47 = 'redeemPremiumPerks';
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var11 = var6 instanceof Object ? var6 : var7;
    var6 = var35[var4];
    var6 = var34.bind(var0)(var6);
    var6 = var6.EntitlementFeatureNames;
    var47 = var6.VIDEO_FILTER_ASSETS;
    var7 = var36.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var36
        }
    });
    var48 = var7;
    var6 = new var48[var36](var47, var46);
    var10 = var6 instanceof Object ? var6 : var7;
    var5 = var35[var5];
    var8 = var40.bind(var0)(var5);
    var5 = var35[var4];
    var5 = var34.bind(var0)(var5);
    var5 = var5.EntitlementFeatureNames;
    var7 = var5.INCREASED_FILE_UPLOAD_SIZE;
    var5 = 10;
    var5 = var35[var5];
    var5 = var34.bind(var0)(var5);
    var46 = var5.getUserMaxFileSize;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var48 = var6;
    var47 = var7;
    var5 = new var48[var8](var47, var46, var45);
    var9 = var5 instanceof Object ? var5 : var6;
    var5 = var35[var4];
    var5 = var34.bind(var0)(var5);
    var5 = var5.EntitlementFeatureNames;
    var47 = var5.INCREASED_GUILD_LIMIT;
    var6 = var36.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var36
        }
    });
    var48 = var6;
    var5 = new var48[var36](var47, var46);
    var8 = var5 instanceof Object ? var5 : var6;
    var4 = var35[var4];
    var4 = var34.bind(var0)(var4);
    var4 = var4.EntitlementFeatureNames;
    var47 = var4.INCREASED_MESSAGE_LENGTH;
    var5 = var36.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var36
        }
    });
    var48 = var5;
    var4 = new var48[var36](var47, var46);
    var7 = var4 instanceof Object ? var4 : var5;
    var4 = var36.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var36
        }
    });
    var47 = 'increasedVideoUploadQuality';
    var48 = var5;
    var4 = new var48[var36](var47, var46);
    var6 = var4 instanceof Object ? var4 : var5;
    var4 = var36.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var36
        }
    });
    var47 = 'uploadLargeFiles';
    var48 = var5;
    var4 = new var48[var36](var47, var46);
    var5 = var4 instanceof Object ? var4 : var5;
    var4 = var36.prototype;
    var33 = Object.create(var4, {
        constructor: {
            value: var36
        }
    });
    var47 = 'warpPrivateBrowsing';
    var48 = var33;
    var4 = new var48[var36](var47, var46);
    var4 = var4 instanceof Object ? var4 : var33;
    var36 = var3.Object;
    var33 = var36.freeze;
    var3 = {};
    var41 = var37.TIER_0;
    var39 = 11;
    var38 = var35[var39];
    var44 = var40.bind(var0)(var38);
    var47 = var37.TIER_0;
    var38 = new Array(8);
    var38[0] = var32;
    var38[1] = var31;
    var38[2] = var30;
    var38[3] = var23;
    var38[4] = var10;
    var38[5] = var6;
    var38[6] = var5;
    var38[7] = var20;
    var42 = var44.prototype;
    var42 = Object.create(var42, {
        constructor: {
            value: var44
        }
    });
    var48 = var42;
    var46 = var38;
    var38 = new var48[var44](var47, var46, var45);
    var38 = var38 instanceof Object ? var38 : var42;
    var3[var41] = var38;
    var41 = var37.TIER_1;
    var38 = var35[var39];
    var44 = var40.bind(var0)(var38);
    var47 = var37.TIER_1;
    var38 = new Array(11);
    var38[0] = var32;
    var38[1] = var31;
    var38[2] = var26;
    var38[3] = var25;
    var38[4] = var23;
    var38[5] = var18;
    var38[6] = var16;
    var38[7] = var13;
    var38[8] = var6;
    var38[9] = var5;
    var38[10] = var20;
    var42 = var44.prototype;
    var42 = Object.create(var42, {
        constructor: {
            value: var44
        }
    });
    var48 = var42;
    var46 = var38;
    var38 = new var48[var44](var47, var46, var45);
    var38 = var38 instanceof Object ? var38 : var42;
    var3[var41] = var38;
    var38 = var37.TIER_2;
    var39 = var35[var39];
    var41 = var40.bind(var0)(var39);
    var47 = var37.TIER_2;
    var37 = new Array(28);
    var37[0] = var32;
    var37[1] = var31;
    var37[2] = var30;
    var37[3] = var29;
    var37[4] = var28;
    var37[5] = var26;
    var37[6] = var25;
    var37[7] = var24;
    var37[8] = var23;
    var37[9] = var22;
    var37[10] = var19;
    var37[11] = var18;
    var37[12] = var17;
    var37[13] = var16;
    var37[14] = var15;
    var37[15] = var13;
    var37[16] = var12;
    var37[17] = var11;
    var37[18] = var10;
    var37[19] = var8;
    var37[20] = var7;
    var37[21] = var6;
    var37[22] = var5;
    var37[23] = var20;
    var37[24] = var21;
    var37[25] = var14;
    var37[26] = var27;
    var37[27] = var4;
    var39 = var41.prototype;
    var39 = Object.create(var39, {
        constructor: {
            value: var41
        }
    });
    var48 = var39;
    var46 = var37;
    var37 = new var48[var41](var47, var46, var45);
    var37 = var37 instanceof Object ? var37 : var39;
    var3[var38] = var37;
    var3 = var33.bind(var36)(var3);
    var _closure1_slot10 = var3;
    var33 = new Array(3);
    var33[0] = var18;
    var33[1] = var17;
    var33[2] = var4;
    var _closure1_slot11 = var33;
    var33 = new Array(1);
    var33[0] = var4;
    var _closure1_slot12 = var33;
    var33 = 13;
    var33 = var35[var33];
    var35 = var34.bind(var0)(var33);
    var34 = var35.fileFinishedImporting;
    var33 = 'modules/premium/ProductCatalog.tsx';
    var33 = var34.bind(var35)(var33);
    var2.ANIMATED_EMOJIS = var32;
    var2.EMOJIS_EVERYWHERE = var31;
    var2.STICKERS_EVERYWHERE = var30;
    var2.SOUNDBOARD_EVERYWHERE = var29;
    var2.CUSTOM_CALL_SOUNDS = var28;
    var2.PREMIUM_VOICE_FILTERS = var27;
    var2.ANIMATED_AVATAR = var26;
    var2.CUSTOM_DISCRIMINATOR = var25;
    var2.PREMIUM_GUILD_MEMBER_PROFILE = var24;
    var2.PROFILE_BADGES = var23;
    var2.PROFILE_PREMIUM_FEATURES = var22;
    var2.COLLECTIBLES = var21;
    var2.APP_ICONS = var20;
    var2.CLIENT_THEMES = var19;
    var2.BOOST_DISCOUNT = var18;
    var2.FREE_BOOSTS = var17;
    var2.STREAM_MID_QUALITY = var16;
    var2.STREAM_HIGH_QUALITY = var15;
    var2.CUSTOM_NOTIFICATION_SOUNDS = var14;
    var2.FANCY_VOICE_CHANNEL_REACTIONS = var13;
    var2.INSTALL_PREMIUM_APPLICATIONS = var12;
    var2.REDEEM_PREMIUM_PERKS = var11;
    var2.VIDEO_FILTER_ASSETS = var10;
    var2.INCREASED_FILE_UPLOAD_SIZE = var9;
    var2.INCREASED_GUILD_LIMIT = var8;
    var2.INCREASED_MESSAGE_LENGTH = var7;
    var2.INCREASED_VIDEO_UPLOAD_QUALITY = var6;
    var2.UPLOAD_LARGE_FILES = var5;
    var2.WARP_PRIVATE_BROWSING_PERK = var4;
    var2.PRODUCT_CATALOG = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: canUserUse, environment: var1
        _fun97266: for (var _fun97266_ip = 0;;) switch (_fun97266_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.preventReverseTrialPerkAccess;
                var0 = 'canUserUse';
                var0 = var1.bind(var2)(var0, var4);
                var0 = !var0;
                if (!var0) {
                    _fun97266_ip = 146;
                    continue _fun97266
                }
            case 53:
                var1 = null;
                var1 = var1 == var4;
                if (var1) {
                    _fun97266_ip = 77;
                    continue _fun97266
                }
            case 62:
                var2 = var4.isPremiumWithFractionalPremiumOnly;
                var2 = var2.bind(var4)();
                var1 = !var2;
            case 77:
                if (var1) {
                    _fun97266_ip = 97;
                    continue _fun97266
                }
            case 80:
                var6 = _closure1_slot11;
                var2 = var6.includes;
                var2 = var2.bind(var6)(var5);
                var1 = !var2;
            case 97:
                if (!var1) {
                    _fun97266_ip = 143;
                    continue _fun97266
                }
            case 100:
                var2 = arg2;
                var2 = !var2;
                if (var2) {
                    _fun97266_ip = 126;
                    continue _fun97266
                }
            case 109:
                var6 = _closure1_slot12;
                var3 = var6.includes;
                var3 = var3.bind(var6)(var5);
                var2 = !var3;
            case 126:
                if (!var2) {
                    _fun97266_ip = 140;
                    continue _fun97266
                }
            case 129:
                var3 = var5.getFeatureValue;
                var2 = var3.bind(var5)(var4);
            case 140:
                var1 = var2;
            case 143:
                var0 = var1;
            case 146:
                return var0;
        }
    };
    var2.canUserUse = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 16, 15, 17, 18, 1615, 3, 12619, 7583, 7632, 12620, 12621, 2]);