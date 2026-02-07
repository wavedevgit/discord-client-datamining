// modules/slayer_storefront/SlayerStorefrontUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun30911: for (var _fun30911_ip = 0;;) switch (_fun30911_ip) {
        case 0:
            var8 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var8;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var9;
            var5 = function() {
                _fun30912: for (var _fun30912_ip = 0;;) switch (_fun30912_ip) {
                    case 0:
                        var3 = _closure1_slot5;
                        var2 = var3.getGuild;
                        var1 = _closure1_slot7;
                        var1 = var2.bind(var3)(var1);
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun30912_ip = 56;
                            continue _fun30912
                        }
                    case 27:
                        var4 = var1.features;
                        var3 = var4.has;
                        var2 = _closure1_slot9;
                        var2 = var2.SOCIAL_LAYER_STOREFRONT;
                        var2 = var3.bind(var4)(var2);
                        if (var2) {
                            _fun30912_ip = 62;
                            continue _fun30912
                        }
                    case 56:
                        var0 = _closure1_slot6;
                        _fun30912_ip = 67;
                        continue _fun30912;
                    case 62:
                        var0 = var1.id;
                    case 67:
                        return var0;
                }
            };
            var _closure1_slot13 = var5;
            var4 = function arg0() {
                _fun30913: for (var _fun30913_ip = 0;;) switch (_fun30913_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = var1.id;
                        var0 = _closure1_slot13;
                        var2 = undefined;
                        var0 = var0.bind(var2)();
                        var0 = var4 === var0;
                        if (var0) {
                            _fun30913_ip = 78;
                            continue _fun30913
                        }
                    case 28:
                        var5 = var1.features;
                        var1 = null;
                        var4 = var1 == var5;
                        var2 = undefined;
                        if (var4) {
                            _fun30913_ip = 65;
                            continue _fun30913
                        }
                    case 45:
                        var4 = var5.has;
                        var3 = _closure1_slot9;
                        var3 = var3.SOCIAL_LAYER_STOREFRONT;
                        var2 = var4.bind(var5)(var3);
                    case 65:
                        var1 = var1 != var2;
                        if (!var1) {
                            _fun30913_ip = 75;
                            continue _fun30913
                        }
                    case 72:
                        var1 = var2;
                    case 75:
                        var0 = var1;
                    case 78:
                        return var0;
                }
            };
            var _closure1_slot14 = var4;
            var3 = function arg0, arg1() {
                var1 = arg1;
                var0 = global;
                var2 = var0.location;
                var4 = var2.protocol;
                var2 = var0.window;
                var2 = var2.GLOBAL_ENV;
                var3 = var2.WEBAPP_ENDPOINT;
                var7 = _closure1_slot10;
                var6 = var7.GAME_SHOP;
                var5 = var1.id;
                var2 = var1.slug;
                var1 = arg0;
                var2 = var6.bind(var7)(var1, var5, var2);
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '';
                var0 = var1.bind(var0)(var4, var3, var2);
                return var0;
            };
            var _closure1_slot15 = var3;
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
            var6 = var8.bind(var0)(var6);
            var7 = var6.STOREFRONT_MARKETING_GUILD_ID;
            var _closure1_slot6 = var7;
            var7 = var6.STOREFRONT_MARKETING_GUILD_ID_TEST;
            var _closure1_slot7 = var7;
            var6 = var6.STOREFRONT_ENABLED_APPLICATION_IDS;
            var _closure1_slot8 = var6;
            var6 = 4;
            var6 = var9[var6];
            var6 = var8.bind(var0)(var6);
            var7 = var6.GuildFeatures;
            var _closure1_slot9 = var7;
            var7 = var6.Routes;
            var _closure1_slot10 = var7;
            var6 = var6.SKUProductLines;
            var _closure1_slot11 = var6;
            var6 = 5;
            var6 = var9[var6];
            var6 = var8.bind(var0)(var6);
            var7 = var6.SUPPORTS_WEBP;
            var6 = 'jpg';
            if (!var7) {
                _fun30911_ip = 251;
                continue _fun30911
            }
        case 245:
            var6 = 'webp';
        case 251:
            var _closure1_slot12 = var6;
            var7 = 9;
            var7 = var9[var7];
            var9 = var8.bind(var0)(var7);
            var8 = var9.fileFinishedImporting;
            var7 = 'modules/slayer_storefront/SlayerStorefrontUtils.tsx';
            var7 = var8.bind(var9)(var7);
            var2.LARGE_ASSET_FORMAT = var6;
            var6 = function arg0() {
                _fun30915: for (var _fun30915_ip = 0;;) switch (_fun30915_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        var0 = var0 != var1;
                        if (!var0) {
                            _fun30915_ip = 34;
                            continue _fun30915
                        }
                    case 12:
                        var3 = _closure1_slot8;
                        var2 = var3.has;
                        var1 = var1.id;
                        var0 = var2.bind(var3)(var1);
                    case 34:
                        return var0;
                }
            };
            var2.isSlayerStorefrontApplication = var6;
            var6 = function arg0() {
                _fun30916: for (var _fun30916_ip = 0;;) switch (_fun30916_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        var0 = var0 != var1;
                        if (!var0) {
                            _fun30916_ip = 35;
                            continue _fun30916
                        }
                    case 12:
                        var2 = var1.productLine;
                        var1 = _closure1_slot11;
                        var1 = var1.SOCIAL_LAYER_GAME_ITEM;
                        var0 = var2 === var1;
                    case 35:
                        return var0;
                }
            };
            var2.isGameItemSKU = var6;
            var2.getMarketingGuildId = var5;
            var2.hasSocialLayerStorefront = var4;
            var4 = function arg0() {
                _fun30917: for (var _fun30917_ip = 0;;) switch (_fun30917_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = {};
                        var1 = var2.application_id;
                        var0.applicationId = var1;
                        var1 = var2.title;
                        var0.title = var1;
                        var1 = var2.logo_asset_id;
                        var0.logoAssetId = var1;
                        var1 = var2.light_theme_logo_asset_id;
                        var0.lightThemeLogoAssetId = var1;
                        var4 = var2.pages;
                        var3 = var4.map;
                        var1 = function(arg0) { // Environment: var1
                            _fun30918: for (var _fun30918_ip = 0;;) switch (_fun30918_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = {};
                                    var1 = var2.title;
                                    var0.title = var1;
                                    var1 = var2.leaderboard;
                                    var4 = null;
                                    var5 = var4 != var1;
                                    var3 = undefined;
                                    if (!var5) {
                                        _fun30918_ip = 83;
                                        continue _fun30918
                                    }
                                case 31:
                                    var5 = {};
                                    var6 = var2.leaderboard;
                                    var6 = var6.title;
                                    var5.title = var6;
                                    var6 = var2.leaderboard;
                                    var6 = var6.description;
                                    var5.description = var6;
                                    var6 = var2.leaderboard;
                                    var6 = var6.background_image_asset_id;
                                    var5.backgroundImageAssetId = var6;
                                    var3 = var5;
                                case 83:
                                    var0.leaderboard = var3;
                                    var3 = var2.sku_ids;
                                    var0.skuIds = var3;
                                    var3 = var2.sections;
                                    var3 = var4 != var3;
                                    var1 = undefined;
                                    if (!var3) {
                                        _fun30918_ip = 137;
                                        continue _fun30918
                                    }
                                case 114:
                                    var4 = var2.sections;
                                    var3 = var4.map;
                                    var2 = function(arg0) { // Environment: var2
                                        var1 = arg0;
                                        var0 = {};
                                        var2 = var1.title;
                                        var0.title = var2;
                                        var1 = var1.sku_ids;
                                        var0.skuIds = var1;
                                        return var0;
                                    };
                                    var1 = var3.bind(var4)(var2);
                                case 137:
                                    var0.sections = var1;
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        var0.pages = var1;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var4 = var4[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.keyBy;
                        var5 = var2.assets;
                        var4 = 'id';
                        var4 = var6.bind(var7)(var5, var4);
                        var0.assets = var4;
                        var5 = var2.application;
                        var4 = null;
                        var4 = var4 != var5;
                        if (!var4) {
                            _fun30917_ip = 164;
                            continue _fun30917
                        }
                    case 144:
                        var4 = _closure1_slot3;
                        var3 = var4.createFromServer;
                        var2 = var2.application;
                        var1 = var3.bind(var4)(var2);
                    case 164:
                        var0.application = var1;
                        return var0;
                }
            };
            var2.transformSlayerApplicationStorefrontServer = var4;
            var4 = function arg0() {
                _fun30920: for (var _fun30920_ip = 0;;) switch (_fun30920_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = null;
                        if (!(var3 == var1)) {
                            _fun30920_ip = 13;
                            continue _fun30920
                        }
                    case 9:
                        var0 = undefined;
                        return var0;
                    case 13:
                        var0 = {};
                        var5 = var1.carousel_items;
                        var4 = var5.map;
                        var2 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.thumbnail_asset_id;
                            var0.thumbnailAssetId = var2;
                            var2 = var1.asset_id;
                            var0.assetId = var2;
                            var2 = var1.background_asset_id;
                            var0.backgroundAssetId = var2;
                            var2 = var1.youtube_video_id;
                            var0.youtubeVideoId = var2;
                            var2 = var1.label;
                            var0.label = var2;
                            var1 = var1.label_icon_asset_id;
                            var0.labelIconAssetId = var1;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                        var0.carouselItems = var2;
                        var2 = var1.label;
                        var0.label = var2;
                        var2 = var1.expires_at;
                        var3 = var3 != var2;
                        var2 = undefined;
                        if (!var3) {
                            _fun30920_ip = 101;
                            continue _fun30920
                        }
                    case 67:
                        var3 = global;
                        var5 = var3.Date;
                        var6 = var1.expires_at;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var7 = var4;
                        var3 = new var7[var5](var6, var5);
                        var2 = var3 instanceof Object ? var3 : var4;
                    case 101:
                        var0.expiresAt = var2;
                        var2 = var1.card_image_asset_id;
                        var0.cardImageAssetId = var2;
                        var1 = var1.card_background_image_asset_id;
                        var0.cardBackgroundImageAssetId = var1;
                        return var0;
                }
            };
            var2.transformSlayerSKUTenantMetadataFromServer = var4;
            var4 = function arg0() {
                var1 = arg0;
                var0 = {};
                var5 = var1.skus;
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot4;
                    var1 = var2.createFromServer;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var0.skus = var3;
                var5 = global;
                var4 = var5.Object;
                var3 = var4.fromEntries;
                var7 = var5.Object;
                var6 = var7.entries;
                var5 = var1.skus_to_user_ids;
                var6 = var6.bind(var7)(var5);
                var5 = var6.map;
                var2 = function(arg0) { // Environment: var2
                    _fun30924: for (var _fun30924_ip = 0;;) switch (_fun30924_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4[Symbol.iterator];
                            var4 = var0().next;
                            var3 = var4().value;
                            var1 = var0;
                            var6 = undefined;
                            var2 = var1 === var6;
                            var1 = undefined;
                            if (var2) {
                                _fun30924_ip = 27;
                                continue _fun30924
                            }
                        case 24:
                            var1 = var3;
                        case 27:
                            var3 = undefined;
                            if (var2) {
                                _fun30924_ip = 57;
                                continue _fun30924
                            }
                        case 32:
                            var5 = var4().value;
                            var4 = var0;
                            var4 = var4 === var6;
                            var3 = undefined;
                            var2 = var4;
                            if (var4) {
                                _fun30924_ip = 57;
                                continue _fun30924
                            }
                        case 51:
                            var3 = var5;
                            var2 = var4;
                        case 57:
                            if (var2) {
                                _fun30924_ip = 63;
                                continue _fun30924
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var0 = new Array(2);
                            var0[0] = var1;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.user_id;
                                var0.userId = var2;
                                var1 = var1.reason;
                                var0.reason = var1;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var0[1] = var1;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                var0.skusToRecommendationReasons = var2;
                var3 = _closure1_slot3;
                var2 = var3.createFromServer;
                var1 = var1.application;
                var1 = var2.bind(var3)(var1);
                var0.application = var1;
                return var0;
            };
            var2.transformSocialLayerStorefrontRecommendationServer = var4;
            var4 = function arg0, arg1() {
                _fun30926: for (var _fun30926_ip = 0;;) switch (_fun30926_ip) {
                    case 0:
                        var0 = arg0;
                        var11 = arg1;
                        var3 = null;
                        if (!(var3 != var11)) {
                            _fun30926_ip = 265;
                            continue _fun30926
                        }
                    case 15:
                        var4 = var3 == var0;
                        var2 = undefined;
                        var1 = undefined;
                        if (var4) {
                            _fun30926_ip = 62;
                            continue _fun30926
                        }
                    case 26:
                        var4 = var0.tenantMetadata;
                        var5 = var3 == var4;
                        var1 = undefined;
                        if (var5) {
                            _fun30926_ip = 62;
                            continue _fun30926
                        }
                    case 41:
                        var4 = var4.socialLayer;
                        var5 = var3 == var4;
                        var1 = undefined;
                        if (var5) {
                            _fun30926_ip = 62;
                            continue _fun30926
                        }
                    case 56:
                        var1 = var4.carouselItems;
                    case 62:
                        if (!(var3 != var1)) {
                            _fun30926_ip = 265;
                            continue _fun30926
                        }
                    case 69:
                        var1 = var0.tenantMetadata;
                        var1 = var1.socialLayer;
                        var1 = var1.carouselItems;
                        var4 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var4)) {
                            _fun30926_ip = 265;
                            continue _fun30926
                        }
                    case 101:
                        var0 = var0.tenantMetadata;
                        var0 = var0.socialLayer;
                        var0 = var0.carouselItems;
                        var1 = var0[var1];
                        var0 = var1.labelIconAssetId;
                        if (!(var3 != var0)) {
                            _fun30926_ip = 248;
                            continue _fun30926
                        }
                    case 133:
                        var0 = {};
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 7;
                        var5 = var8[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.toURLSafe;
                        var7 = _closure1_slot0;
                        var4 = 5;
                        var4 = var8[var4];
                        var10 = var7.bind(var2)(var4);
                        var9 = var10.getAssetURL;
                        var14 = var1.labelIconAssetId;
                        var13 = 512;
                        var12 = 'webp';
                        var16 = var10;
                        var15 = var11;
                        var4 = var16[var9](var15, var14, var13, var12, var11);
                        var4 = var5.bind(var6)(var4);
                        var5 = var3 != var4;
                        var3 = undefined;
                        if (!var5) {
                            _fun30926_ip = 231;
                            continue _fun30926
                        }
                    case 228:
                        var3 = var4;
                    case 231:
                        var0.primaryIconAsset = var3;
                        var1 = var1.label;
                        var0.primaryIconLabel = var1;
                        _fun30926_ip = 263;
                        continue _fun30926;
                    case 248:
                        var1 = {};
                        var1.primaryIconAsset = var2;
                        var1.primaryIconLabel = var2;
                        var0 = var1;
                    case 263:
                        return var0;
                    case 265:
                        var0 = {};
                        var1 = undefined;
                        var0.primaryIconAsset = var1;
                        var0.primaryIconLabel = var1;
                        return var0;
                }
            };
            var2.getPrimaryCarouselItemInfo = var4;
            var4 = function arg0() {
                _fun30927: for (var _fun30927_ip = 0;;) switch (_fun30927_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = null;
                        if (!(var2 != var0)) {
                            _fun30927_ip = 19;
                            continue _fun30927
                        }
                    case 9:
                        var1 = var0.thumbnailAssetId;
                        if (!(var2 == var1)) {
                            _fun30927_ip = 23;
                            continue _fun30927
                        }
                    case 19:
                        var1 = undefined;
                        return var1;
                    case 23:
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 7;
                        var1 = var6[var1];
                        var5 = undefined;
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.toURLSafe;
                        var4 = _closure1_slot0;
                        var3 = 5;
                        var3 = var6[var3];
                        var7 = var4.bind(var5)(var3);
                        var6 = var7.getAssetURL;
                        var11 = var0.applicationId;
                        var10 = var0.thumbnailAssetId;
                        var9 = 512;
                        var8 = 'webp';
                        var12 = var7;
                        var0 = var12[var6](var11, var10, var9, var8, var7);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var2.getGameItemThumbnailUrl = var4;
            var4 = function arg0() {
                _fun30928: for (var _fun30928_ip = 0;;) switch (_fun30928_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = null;
                        var1 = var0 == var2;
                        var4 = undefined;
                        var7 = undefined;
                        if (var1) {
                            _fun30928_ip = 21;
                            continue _fun30928
                        }
                    case 16:
                        var7 = var2.applicationId;
                    case 21:
                        var1 = var0 == var2;
                        var6 = undefined;
                        if (var1) {
                            _fun30928_ip = 66;
                            continue _fun30928
                        }
                    case 30:
                        var1 = var2.tenantMetadata;
                        var3 = var0 == var1;
                        var6 = undefined;
                        if (var3) {
                            _fun30928_ip = 66;
                            continue _fun30928
                        }
                    case 45:
                        var1 = var1.socialLayer;
                        var3 = var0 == var1;
                        var6 = undefined;
                        if (var3) {
                            _fun30928_ip = 66;
                            continue _fun30928
                        }
                    case 60:
                        var6 = var1.cardImageAssetId;
                    case 66:
                        if (!(var0 == var6)) {
                            _fun30928_ip = 88;
                            continue _fun30928
                        }
                    case 70:
                        var3 = var0 == var2;
                        var1 = undefined;
                        if (var3) {
                            _fun30928_ip = 85;
                            continue _fun30928
                        }
                    case 79:
                        var1 = var2.thumbnailAssetId;
                    case 85:
                        var6 = var1;
                    case 88:
                        if (!(var0 != var6)) {
                            _fun30928_ip = 96;
                            continue _fun30928
                        }
                    case 92:
                        if (!(var0 == var7)) {
                            _fun30928_ip = 98;
                            continue _fun30928
                        }
                    case 96:
                        return var4;
                    case 98:
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.toURLSafe;
                        var3 = _closure1_slot0;
                        var0 = 5;
                        var0 = var5[var0];
                        var5 = var3.bind(var4)(var0);
                        var4 = var5.getAssetURL;
                        var9 = 512;
                        var8 = 'webp';
                        var12 = var5;
                        var11 = var7;
                        var10 = var6;
                        var0 = var12[var4](var11, var10, var9, var8, var7);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var2.getCardImageURL = var4;
            var4 = function arg0() {
                _fun30929: for (var _fun30929_ip = 0;;) switch (_fun30929_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = null;
                        var2 = var1 == var3;
                        var6 = undefined;
                        var0 = undefined;
                        if (var2) {
                            _fun30929_ip = 52;
                            continue _fun30929
                        }
                    case 16:
                        var2 = var3.tenantMetadata;
                        var4 = var1 == var2;
                        var0 = undefined;
                        if (var4) {
                            _fun30929_ip = 52;
                            continue _fun30929
                        }
                    case 31:
                        var2 = var2.socialLayer;
                        var4 = var1 == var2;
                        var0 = undefined;
                        if (var4) {
                            _fun30929_ip = 52;
                            continue _fun30929
                        }
                    case 46:
                        var0 = var2.cardBackgroundImageAssetId;
                    case 52:
                        if (!(var1 != var0)) {
                            _fun30929_ip = 74;
                            continue _fun30929
                        }
                    case 56:
                        var2 = var1 == var3;
                        var0 = undefined;
                        if (var2) {
                            _fun30929_ip = 70;
                            continue _fun30929
                        }
                    case 65:
                        var0 = var3.applicationId;
                    case 70:
                        if (!(var1 == var0)) {
                            _fun30929_ip = 76;
                            continue _fun30929
                        }
                    case 74:
                        return var6;
                    case 76:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 7;
                        var1 = var7[var1];
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.toURLSafe;
                        var5 = _closure1_slot0;
                        var4 = 5;
                        var4 = var7[var4];
                        var7 = var5.bind(var6)(var4);
                        var6 = var7.getAssetURL;
                        var11 = var3.applicationId;
                        var3 = var3.tenantMetadata;
                        var3 = var3.socialLayer;
                        var10 = var3.cardBackgroundImageAssetId;
                        var8 = _closure1_slot12;
                        var9 = 1024;
                        var12 = var7;
                        var0 = var12[var6](var11, var10, var9, var8, var7);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var2.getCardBackgroundImageURL = var4;
            var2.getSKUShareURL = var3;
            var3 = function arg0, arg1() {
                var3 = _closure1_slot15;
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var3 = var3.bind(var2)(var1, var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = '\n\n';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
            };
            var2.getForwardedSKUShareURL = var3;
            var1 = function arg0, arg1() {
                _fun30931: for (var _fun30931_ip = 0;;) switch (_fun30931_ip) {
                    case 0:
                        var3 = _closure1_slot5;
                        var2 = var3.getGuild;
                        var0 = arg0;
                        var4 = var2.bind(var3)(var0);
                        var0 = null;
                        var0 = var0 != var4;
                        if (!var0) {
                            _fun30931_ip = 40;
                            continue _fun30931
                        }
                    case 29:
                        var3 = _closure1_slot14;
                        var2 = undefined;
                        var0 = var3.bind(var2)(var4);
                    case 40:
                        if (!var0) {
                            _fun30931_ip = 85;
                            continue _fun30931
                        }
                    case 43:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getIsEligibleForSocialLayerStorefrontUserExperiment;
                        var1 = {};
                        var4 = arg1;
                        var1.location = var4;
                        var0 = var2.bind(var3)(var1);
                    case 85:
                        return var0;
                }
            };
            var2.canSeeGameShop = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3456, 3493, 1410, 3496, 660, 3362, 22, 1457, 3497, 2]);