// records/SKURecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun30870: for (var _fun30870_ip = 0;;) switch (_fun30870_ip) {
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
                _fun30870_ip = 74;
                continue _fun30870;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun30873: for (var _fun30873_ip = 0;;) switch (_fun30873_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun30873_ip = 13;
                    continue _fun30873
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = {};
                var2 = var1.static_image_path;
                var0.staticImagePath = var2;
                var2 = var1.animated_image_path;
                var0.animatedImagePath = var2;
                var1 = var1.video_path;
                var0.videoPath = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun30874: for (var _fun30874_ip = 0;;) switch (_fun30874_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = var2.src;
                var0.src = var1;
                var1 = var2.loop;
                var0.loop = var1;
                var1 = var2.height;
                var0.height = var1;
                var1 = var2.width;
                var0.width = var1;
                var5 = var2.duration;
                var1 = null;
                var6 = var1 != var5;
                var4 = 0;
                if (!var6) {
                    _fun30874_ip = 64;
                    continue _fun30874
                }
            case 61:
                var4 = var5;
            case 64:
                var0.duration = var4;
                var4 = var2.start;
                var5 = var1 != var4;
                var3 = 0;
                if (!var5) {
                    _fun30874_ip = 85;
                    continue _fun30874
                }
            case 82:
                var3 = var4;
            case 85:
                var0.start = var3;
                var3 = var2.loop_delay;
                var0.loopDelay = var3;
                var3 = var2.position;
                var0.position = var3;
                var3 = var2.z_index;
                var0.zIndex = var3;
                var4 = var2.randomized_sources;
                var2 = var1 == var4;
                var1 = undefined;
                if (var2) {
                    _fun30874_ip = 158;
                    continue _fun30874
                }
            case 141:
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    var0 = {};
                    var1 = arg0;
                    var1 = var1.src;
                    var0.src = var1;
                    return var0;
                };
                var1 = var3.bind(var4)(var2);
            case 158:
                var0.randomizedSources = var1;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun30876: for (var _fun30876_ip = 0;;) switch (_fun30876_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                if (!(var3 != var1)) {
                    _fun30876_ip = 140;
                    continue _fun30876
                }
            case 12:
                var5 = var1.type;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 8;
                var0 = var0[var7];
                var4 = undefined;
                var0 = var6.bind(var4)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.AVATAR_DECORATION;
                if (!(var5 !== var0)) {
                    _fun30876_ip = 401;
                    continue _fun30876
                }
            case 61:
                var5 = var1.type;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var6.bind(var4)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.NAMEPLATE;
                if (!(var5 !== var0)) {
                    _fun30876_ip = 317;
                    continue _fun30876
                }
            case 102:
                var5 = var1.type;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var6.bind(var4)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.PROFILE_EFFECT;
                if (!(var5 !== var0)) {
                    _fun30876_ip = 144;
                    continue _fun30876
                }
            case 140:
                var0 = undefined;
                return var0;
            case 144:
                var0 = {};
                var5 = var1.id;
                var0.id = var5;
                var5 = var1.type;
                var0.type = var5;
                var5 = var1.title;
                var0.title = var5;
                var5 = var1.title_localized;
                var0.titleLocalized = var5;
                var5 = var1.description;
                var0.description = var5;
                var5 = var1.description_localized;
                var0.descriptionLocalized = var5;
                var5 = var1.accessibility_label;
                var0.accessibilityLabel = var5;
                var5 = var1.accessibility_label_localized;
                var0.accessibilityLabelLocalized = var5;
                var5 = var1.animation_type;
                var0.animationType = var5;
                var5 = var1.static_frame_src;
                var0.staticFrameSrc = var5;
                var5 = var1.thumbnail_preview_src;
                var0.thumbnailPreviewSrc = var5;
                var5 = var1.reduced_motion_src;
                var0.reducedMotionSrc = var5;
                var7 = var1.effects;
                var5 = var3 == var7;
                var3 = undefined;
                if (var5) {
                    _fun30876_ip = 310;
                    continue _fun30876
                }
            case 296:
                var6 = var7.map;
                var5 = _closure1_slot16;
                var3 = var6.bind(var7)(var5);
            case 310:
                var0.effects = var3;
                return var0;
            case 317:
                var0 = {};
                var3 = var1.id;
                var0.id = var3;
                var3 = var1.type;
                var0.type = var3;
                var3 = var1.asset;
                var0.asset = var3;
                var5 = _closure1_slot15;
                var3 = var1.assets;
                var3 = var5.bind(var4)(var3);
                var0.assets = var3;
                var3 = var1.label;
                var0.label = var3;
                var3 = var1.label_localized;
                var0.labelLocalized = var3;
                var3 = var1.palette;
                var0.palette = var3;
                return var0;
            case 401:
                var0 = {};
                var3 = var1.id;
                var0.id = var3;
                var3 = var1.type;
                var0.type = var3;
                var3 = var1.asset;
                var0.asset = var3;
                var3 = _closure1_slot15;
                var2 = var1.assets;
                var2 = var3.bind(var4)(var2);
                var0.assets = var2;
                var2 = var1.label;
                var0.label = var2;
                var1 = var1.label_localized;
                var0.labelLocalized = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun30877: for (var _fun30877_ip = 0;;) switch (_fun30877_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun30877_ip = 13;
                    continue _fun30877
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = {};
                var2 = var1.role;
                var0.role = var2;
                var2 = var1.base_variant_sku_id;
                var0.baseVariantSkuId = var2;
                var2 = var1.base_variant_name;
                var0.baseVariantName = var2;
                var2 = var1.value;
                var0.value = var2;
                var2 = var1.label;
                var0.label = var2;
                var1 = var1.collapse_under;
                var0.collapseUnder = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun30878: for (var _fun30878_ip = 0;;) switch (_fun30878_ip) {
            case 0:
                var1 = arg0;
                var5 = null;
                if (!(var5 == var1)) {
                    _fun30878_ip = 13;
                    continue _fun30878
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = {};
                var2 = var1.type;
                var0.type = var2;
                var6 = _closure1_slot17;
                var3 = var1.item;
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var0.item = var3;
                var3 = var1.category_sku_id;
                var0.categorySkuId = var3;
                var3 = var1.premium_type;
                var0.premiumType = var3;
                var3 = var1.expires_seconds_after_claim;
                var0.expiresSecondsAfterClaim = var3;
                var3 = var1.expires_at;
                var5 = var5 != var3;
                var3 = undefined;
                if (!var5) {
                    _fun30878_ip = 143;
                    continue _fun30878
                }
            case 99:
                var5 = global;
                var7 = var5.Date;
                var6 = var1.expires_at;
                var5 = 1000;
                var8 = var5 * var6;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var5 = new var9[var7](var8, var7);
                var3 = var5 instanceof Object ? var5 : var6;
            case 143:
                var0.expiresAt = var3;
                var3 = _closure1_slot18;
                var2 = var1.variant;
                var2 = var3.bind(var4)(var2);
                var0.variant = var2;
                var1 = var1.option_selector_display_value;
                var0.optionSelectorDisplayValue = var1;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun30879: for (var _fun30879_ip = 0;;) switch (_fun30879_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun30879_ip = 13;
                    continue _fun30879
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.transformSlayerSKUTenantMetadataFromServer;
                var4 = var1.social_layer;
                var4 = var5.bind(var6)(var4);
                var0.socialLayer = var4;
                var2 = _closure1_slot19;
                var1 = var1.collectibles;
                var1 = var2.bind(var3)(var1);
                var0.collectibles = var1;
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.OperatingSystems;
    var _closure1_slot9 = var7;
    var7 = var6.SKUFlags;
    var _closure1_slot10 = var7;
    var7 = var6.SKUTypes;
    var _closure1_slot11 = var7;
    var6 = var6.GIFTABLE_CURRENCIES;
    var _closure1_slot12 = var6;
    var6 = ['500428425362931713', '451550535720501248', '471376328319303681', '466696214818193408'];
    var _closure1_slot13 = var6;
    var1 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun30881: for (var _fun30881_ip = 0;;) switch (_fun30881_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun30881_ip = 65;
                        continue _fun30881
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun30881_ip = 103;
                    continue _fun30881;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.type;
                    var0.type = var2;
                    var2 = var1.applicationId;
                    var0.applicationId = var2;
                    var2 = var1.application;
                    var0.application = var2;
                    var2 = var1.eligiblePaymentGateways;
                    var0.eligiblePaymentGateways = var2;
                    var2 = var1.productLine;
                    var0.productLine = var2;
                    var2 = var1.name;
                    var0.name = var2;
                    var2 = var1.preorderReleaseAt;
                    var0.preorderReleaseAt = var2;
                    var2 = var1.preorderApproximateReleaseDate;
                    var0.preorderApproximateReleaseDate = var2;
                    var2 = var1.releaseDate;
                    var0.releaseDate = var2;
                    var2 = var1.summary;
                    var0.summary = var2;
                    var2 = var1.features;
                    var0.features = var2;
                    var2 = var1.genres;
                    var0.genres = var2;
                    var2 = var1.dependentSkuId;
                    var0.dependentSkuId = var2;
                    var2 = var1.manifests;
                    var0.manifests = var2;
                    var2 = var1.availableRegions;
                    var0.availableRegions = var2;
                    var2 = var1.accessType;
                    var0.accessType = var2;
                    var2 = var1.systemRequirements;
                    var0.systemRequirements = var2;
                    var2 = var1.contentRating;
                    var0.contentRating = var2;
                    var2 = var1.contentRatingAgency;
                    var0.contentRatingAgency = var2;
                    var2 = var1.legalNotice;
                    var0.legalNotice = var2;
                    var2 = var1.price;
                    var0.price = var2;
                    var2 = var1.premium;
                    var0.premium = var2;
                    var2 = var1.showAgeGate;
                    var0.showAgeGate = var2;
                    var2 = var1.restricted;
                    var0.restricted = var2;
                    var2 = var1.slug;
                    var0.slug = var2;
                    var2 = var1.exclusive;
                    var0.exclusive = var2;
                    var2 = var1.locales;
                    var0.locales = var2;
                    var2 = var1.flags;
                    var0.flags = var2;
                    var2 = var1.externalPurchaseUrl;
                    if (var2) {
                        _fun30881_ip = 462;
                        continue _fun30881
                    }
                case 460:
                    var2 = null;
                case 462:
                    var0.externalPurchaseUrl = var2;
                    var2 = var1.deleted;
                    var0.deleted = var2;
                    var2 = var1.bundledSkuIds;
                    var0.bundledSkuIds = var2;
                    var2 = var1.bundledSkus;
                    var0.bundledSkus = var2;
                    var2 = var1.tenantMetadata;
                    var0.tenantMetadata = var2;
                    var2 = var1.thumbnailAssetId;
                    var0.thumbnailAssetId = var2;
                    var1 = var1.description;
                    var0.description = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'supportedOperatingSystems';
        var5.key = var1;
        var1 = function() {
            _fun30882: for (var _fun30882_ip = 0;;) switch (_fun30882_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.systemRequirements;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun30882_ip = 21;
                        continue _fun30882
                    }
                case 15:
                    var0 = new Array(0);
                    _fun30882_ip = 45;
                    continue _fun30882;
                case 21:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.keys;
                    var1 = var1.systemRequirements;
                    var0 = var2.bind(var3)(var1);
                case 45:
                    var2 = var0.length;
                    var1 = 0;
                    if (!(!(var2 > var1))) {
                        _fun30882_ip = 80;
                        continue _fun30882
                    }
                case 56:
                    var1 = _closure1_slot9;
                    var2 = var1.WINDOWS;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 80:
                    return var0;
            }
        };
        var5.get = var1;
        var1 = new Array(13);
        var1[0] = var5;
        var5 = {};
        var6 = 'isOnSale';
        var5.key = var6;
        var6 = function() {
            _fun30883: for (var _fun30883_ip = 0;;) switch (_fun30883_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.price;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun30883_ip = 34;
                        continue _fun30883
                    }
                case 18:
                    var1 = var1.price;
                    var1 = var1.saleAmount;
                    var0 = var2 != var1;
                case 34:
                    return var0;
            }
        };
        var5.get = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'isGiftable';
        var5.key = var6;
        var6 = function() {
            _fun30884: for (var _fun30884_ip = 0;;) switch (_fun30884_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30884_ip = 18;
                        continue _fun30884
                    }
                case 12:
                    var2 = var1.price;
                case 18:
                    var4 = var1.type;
                    var0 = _closure1_slot11;
                    var0 = var0.DURABLE_PRIMARY;
                    var0 = var4 === var0;
                    if (!var0) {
                        _fun30884_ip = 49;
                        continue _fun30884
                    }
                case 43:
                    var0 = var1.available;
                case 49:
                    if (!var0) {
                        _fun30884_ip = 60;
                        continue _fun30884
                    }
                case 52:
                    var0 = var1.requiresPayment;
                case 60:
                    if (!var0) {
                        _fun30884_ip = 69;
                        continue _fun30884
                    }
                case 63:
                    var4 = null;
                    var0 = var4 != var2;
                case 69:
                    if (!var0) {
                        _fun30884_ip = 92;
                        continue _fun30884
                    }
                case 72:
                    var4 = _closure1_slot12;
                    var3 = var4.has;
                    var2 = var2.currency;
                    var0 = var3.bind(var4)(var2);
                case 92:
                    if (!var0) {
                        _fun30884_ip = 107;
                        continue _fun30884
                    }
                case 95:
                    var2 = var1.externalPurchaseUrl;
                    var1 = null;
                    var0 = var1 == var2;
                case 107:
                    return var0;
            }
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'getPrice';
        var5.key = var6;
        var6 = function() {
            _fun30885: for (var _fun30885_ip = 0;;) switch (_fun30885_ip) {
                case 0:
                    var5 = arguments[0];
                    var1 = arguments[1];
                    var3 = undefined;
                    if (!(var5 === var3)) {
                        _fun30885_ip = 14;
                        continue _fun30885
                    }
                case 12:
                    var5 = null;
                case 14:
                    if (!(var1 === var3)) {
                        _fun30885_ip = 20;
                        continue _fun30885
                    }
                case 18:
                    var1 = true;
                case 20:
                    var0 = this;
                    var2 = var0.price;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun30885_ip = 159;
                        continue _fun30885
                    }
                case 38:
                    if (!(var0 != var5)) {
                        _fun30885_ip = 65;
                        continue _fun30885
                    }
                case 42:
                    var4 = var2.premium;
                    var6 = var0 == var4;
                    var3 = undefined;
                    if (var6) {
                        _fun30885_ip = 61;
                        continue _fun30885
                    }
                case 57:
                    var3 = var4[var5];
                case 61:
                    if (!(var0 == var3)) {
                        _fun30885_ip = 133;
                        continue _fun30885
                    }
                case 65:
                    if (!var1) {
                        _fun30885_ip = 78;
                        continue _fun30885
                    }
                case 68:
                    var1 = var2.saleAmount;
                    if (!(var0 == var1)) {
                        _fun30885_ip = 104;
                        continue _fun30885
                    }
                case 78:
                    var1 = {};
                    var4 = var2.amount;
                    var1.amount = var4;
                    var4 = var2.currency;
                    var1.currency = var4;
                    _fun30885_ip = 131;
                    continue _fun30885;
                case 104:
                    var4 = {};
                    var5 = var2.saleAmount;
                    var4.amount = var5;
                    var5 = var2.currency;
                    var4.currency = var5;
                    var1 = var4;
                case 131:
                    return var1;
                case 133:
                    var1 = {};
                    var3 = var3.amount;
                    var1.amount = var3;
                    var2 = var2.currency;
                    var1.currency = var2;
                    return var1;
                case 159:
                    return var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'getDisplaySalePercentage';
        var5.key = var6;
        var6 = function() {
            _fun30886: for (var _fun30886_ip = 0;;) switch (_fun30886_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.price;
                    var3 = null;
                    var2 = var3 == var0;
                    var0 = null;
                    if (var2) {
                        _fun30886_ip = 80;
                        continue _fun30886
                    }
                case 20:
                    var2 = var1.price;
                    var2 = var2.salePercentage;
                    var2 = var3 == var2;
                    var0 = null;
                    if (var2) {
                        _fun30886_ip = 80;
                        continue _fun30886
                    }
                case 41:
                    var1 = var1.price;
                    var4 = var1.salePercentage;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '-';
                    var1 = '%';
                    var0 = var3.bind(var2)(var4, var1);
                case 80:
                    return var0;
            }
        };
        var5.value = var6;
        var1[4] = var5;
        var5 = {};
        var6 = 'requiresPayment';
        var5.key = var6;
        var6 = function() {
            _fun30887: for (var _fun30887_ip = 0;;) switch (_fun30887_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.getPrice;
                    var1 = var1.bind(var0)();
                    var0 = var0.premium;
                    var0 = !var0;
                    if (!var0) {
                        _fun30887_ip = 31;
                        continue _fun30887
                    }
                case 25:
                    var2 = null;
                    var0 = var2 != var1;
                case 31:
                    if (!var0) {
                        _fun30887_ip = 46;
                        continue _fun30887
                    }
                case 34:
                    var2 = var1.amount;
                    var1 = 0;
                    var0 = var2 > var1;
                case 46:
                    return var0;
            }
        };
        var5.get = var6;
        var1[5] = var5;
        var5 = {};
        var6 = 'isTheGameAwardsWinner';
        var5.key = var6;
        var6 = function() {
            var2 = _closure1_slot13;
            var1 = var2.includes;
            var0 = this;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.get = var6;
        var1[6] = var5;
        var5 = {};
        var6 = 'available';
        var5.key = var6;
        var6 = function() {
            _fun30889: for (var _fun30889_ip = 0;;) switch (_fun30889_ip) {
                case 0:
                    var1 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.hasFlag;
                    var2 = var1.flags;
                    var0 = _closure1_slot10;
                    var0 = var0.AVAILABLE;
                    var0 = var3.bind(var4)(var2, var0);
                    if (var0) {
                        _fun30889_ip = 70;
                        continue _fun30889
                    }
                case 58:
                    var2 = var1.externalPurchaseUrl;
                    var1 = null;
                    var0 = var1 != var2;
                case 70:
                    return var0;
            }
        };
        var5.get = var6;
        var1[7] = var5;
        var5 = {};
        var6 = 'isAvailableForDistribution';
        var5.key = var6;
        var6 = function() {
            _fun30890: for (var _fun30890_ip = 0;;) switch (_fun30890_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.available;
                    if (!var0) {
                        _fun30890_ip = 28;
                        continue _fun30890
                    }
                case 12:
                    var1 = var3.getPrice;
                    var2 = var1.bind(var3)();
                    var1 = null;
                    var0 = var1 != var2;
                case 28:
                    if (!var0) {
                        _fun30890_ip = 43;
                        continue _fun30890
                    }
                case 31:
                    var2 = var3.externalPurchaseUrl;
                    var1 = null;
                    var0 = var1 == var2;
                case 43:
                    if (!var0) {
                        _fun30890_ip = 113;
                        continue _fun30890
                    }
                case 46:
                    var1 = var3.premium;
                    var1 = !var1;
                    if (var1) {
                        _fun30890_ip = 110;
                        continue _fun30890
                    }
                case 58:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 10;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.hasFlag;
                    var3 = var3.flags;
                    var2 = _closure1_slot10;
                    var2 = var2.PREMIUM_AND_DISTRIBUTION;
                    var1 = var4.bind(var5)(var3, var2);
                case 110:
                    var0 = var1;
                case 113:
                    return var0;
            }
        };
        var5.value = var6;
        var1[8] = var5;
        var5 = {};
        var6 = 'isAvailable';
        var5.key = var6;
        var6 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.hasFlag;
            var1 = this;
            var1 = var1.flags;
            var0 = _closure1_slot10;
            var0 = var0.AVAILABLE;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5.value = var6;
        var1[9] = var5;
        var5 = {};
        var6 = 'isPremiumPerk';
        var5.key = var6;
        var6 = function() {
            _fun30892: for (var _fun30892_ip = 0;;) switch (_fun30892_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.premium;
                    if (!var0) {
                        _fun30892_ip = 114;
                        continue _fun30892
                    }
                case 12:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 10;
                    var1 = var1[var7];
                    var6 = undefined;
                    var8 = var4.bind(var6)(var1);
                    var5 = var8.hasFlag;
                    var4 = var3.flags;
                    var1 = _closure1_slot10;
                    var1 = var1.PREMIUM_PURCHASE;
                    var1 = var5.bind(var8)(var4, var1);
                    if (var1) {
                        _fun30892_ip = 111;
                        continue _fun30892
                    }
                case 67:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.hasFlag;
                    var3 = var3.flags;
                    var2 = _closure1_slot10;
                    var2 = var2.PREMIUM_AND_DISTRIBUTION;
                    var1 = var4.bind(var5)(var3, var2);
                case 111:
                    var0 = var1;
                case 114:
                    return var0;
            }
        };
        var5.value = var6;
        var1[10] = var5;
        var5 = {};
        var6 = 'hasFeature';
        var5.key = var6;
        var6 = function arg0() {
            var0 = this;
            var2 = var0.features;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var6;
        var1[11] = var5;
        var5 = {};
        var6 = 'isPreorder';
        var5.key = var6;
        var6 = function() {
            _fun30894: for (var _fun30894_ip = 0;;) switch (_fun30894_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.preorderReleaseAt;
                    var2 = null;
                    var0 = var2 != var0;
                    if (var0) {
                        _fun30894_ip = 28;
                        continue _fun30894
                    }
                case 18:
                    var1 = var1.preorderApproximateReleaseDate;
                    var0 = var2 != var1;
                case 28:
                    return var0;
            }
        };
        var5.value = var6;
        var1[12] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0() {
            _fun30895: for (var _fun30895_ip = 0;;) switch (_fun30895_ip) {
                case 0:
                    var1 = arg0;
                    var7 = var1.price;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var3 = var1.id;
                    var0.id = var3;
                    var3 = var1.type;
                    var0.type = var3;
                    var3 = var1.application_id;
                    var0.applicationId = var3;
                    var3 = var1.application;
                    var4 = null;
                    var5 = var4 != var3;
                    var3 = null;
                    if (!var5) {
                        _fun30895_ip = 85;
                        continue _fun30895
                    }
                case 62:
                    var8 = _closure1_slot8;
                    var6 = var8.createFromServer;
                    var5 = var1.application;
                    var3 = var6.bind(var8)(var5);
                case 85:
                    var0.application = var3;
                    var5 = var1.eligible_payment_gateways;
                    var6 = var4 != var5;
                    var3 = null;
                    if (!var6) {
                        _fun30895_ip = 107;
                        continue _fun30895
                    }
                case 104:
                    var3 = var5;
                case 107:
                    var0.eligiblePaymentGateways = var3;
                    var3 = var1.product_line;
                    var0.productLine = var3;
                    var6 = var1.name;
                    var8 = var4 != var6;
                    var3 = '';
                    var5 = var3;
                    if (!var8) {
                        _fun30895_ip = 145;
                        continue _fun30895
                    }
                case 142:
                    var5 = var6;
                case 145:
                    var0.name = var5;
                    var5 = var1.release_date;
                    var6 = var4 != var5;
                    var5 = null;
                    if (!var6) {
                        _fun30895_ip = 200;
                        continue _fun30895
                    }
                case 164:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 11;
                    var6 = var9[var6];
                    var9 = undefined;
                    var8 = var8.bind(var9)(var6);
                    var6 = var1.release_date;
                    var5 = var8.bind(var9)(var6);
                case 200:
                    var0.releaseDate = var5;
                    var5 = var1.preorder_release_at;
                    var6 = var4 != var5;
                    var5 = null;
                    if (!var6) {
                        _fun30895_ip = 256;
                        continue _fun30895
                    }
                case 220:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 11;
                    var6 = var9[var6];
                    var9 = undefined;
                    var8 = var8.bind(var9)(var6);
                    var6 = var1.preorder_release_at;
                    var5 = var8.bind(var9)(var6);
                case 256:
                    var0.preorderReleaseAt = var5;
                    var5 = var1.preorder_approximate_release_date;
                    var0.preorderApproximateReleaseDate = var5;
                    var5 = var1.summary;
                    var0.summary = var5;
                    var5 = global;
                    var9 = var5.Set;
                    var10 = var1.features;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var11 = var8;
                    var6 = new var11[var9](var10, var9);
                    var6 = var6 instanceof Object ? var6 : var8;
                    var0.features = var6;
                    var8 = var5.Set;
                    var10 = var1.genres;
                    var6 = var8.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var8
                        }
                    });
                    var11 = var6;
                    var5 = new var11[var8](var10, var9);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var0.genres = var5;
                    var5 = var1.dependent_sku_id;
                    var0.dependentSkuId = var5;
                    var5 = var1.manifests;
                    var0.manifests = var5;
                    var5 = var1.available_regions;
                    var0.availableRegions = var5;
                    var5 = var1.access_type;
                    var0.accessType = var5;
                    var5 = var1.system_requirements;
                    var0.systemRequirements = var5;
                    var5 = var1.content_rating;
                    var0.contentRating = var5;
                    var5 = var1.content_rating_agency;
                    var0.contentRatingAgency = var5;
                    var5 = var1.legal_notice;
                    var0.legalNotice = var5;
                    var6 = var4 != var7;
                    var5 = null;
                    if (!var6) {
                        _fun30895_ip = 528;
                        continue _fun30895
                    }
                case 464:
                    var6 = {};
                    var8 = var7.amount;
                    var6.amount = var8;
                    var8 = var7.currency;
                    var6.currency = var8;
                    var8 = var7.sale_amount;
                    var6.saleAmount = var8;
                    var8 = var7.sale_percentage;
                    var6.salePercentage = var8;
                    var7 = var7.premium;
                    var6.premium = var7;
                    var5 = var6;
                case 528:
                    var0.price = var5;
                    var6 = var1.premium;
                    var5 = var4 != var6;
                    if (!var5) {
                        _fun30895_ip = 549;
                        continue _fun30895
                    }
                case 546:
                    var5 = var6;
                case 549:
                    var0.premium = var5;
                    var5 = var1.show_age_gate;
                    if (var5) {
                        _fun30895_ip = 565;
                        continue _fun30895
                    }
                case 563:
                    var5 = false;
                case 565:
                    var0.showAgeGate = var5;
                    var5 = var1.restricted;
                    if (var5) {
                        _fun30895_ip = 581;
                        continue _fun30895
                    }
                case 579:
                    var5 = false;
                case 581:
                    var0.restricted = var5;
                    var5 = var1.slug;
                    var6 = var4 != var5;
                    if (!var6) {
                        _fun30895_ip = 602;
                        continue _fun30895
                    }
                case 599:
                    var3 = var5;
                case 602:
                    var0.slug = var3;
                    var3 = var1.exclusive;
                    if (var3) {
                        _fun30895_ip = 618;
                        continue _fun30895
                    }
                case 616:
                    var3 = false;
                case 618:
                    var0.exclusive = var3;
                    var3 = var1.locales;
                    if (!(var4 == var3)) {
                        _fun30895_ip = 643;
                        continue _fun30895
                    }
                case 633:
                    var3 = ['en-US'];
                case 643:
                    var0.locales = var3;
                    var3 = var1.flags;
                    var0.flags = var3;
                    var3 = var1.external_purchase_url;
                    var0.externalPurchaseUrl = var3;
                    var5 = var1.deleted;
                    var3 = var4 != var5;
                    if (!var3) {
                        _fun30895_ip = 686;
                        continue _fun30895
                    }
                case 683:
                    var3 = var5;
                case 686:
                    var0.deleted = var3;
                    var3 = var1.bundled_sku_ids;
                    if (!(var4 == var3)) {
                        _fun30895_ip = 705;
                        continue _fun30895
                    }
                case 701:
                    var3 = new Array(0);
                case 705:
                    var0.bundledSkuIds = var3;
                    var8 = var1.bundled_skus;
                    var6 = var4 == var8;
                    var5 = undefined;
                    var3 = undefined;
                    if (var6) {
                        _fun30895_ip = 746;
                        continue _fun30895
                    }
                case 729:
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var6
                        var2 = _closure2_slot0;
                        var1 = var2.createFromServer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var7.bind(var8)(var6);
                case 746:
                    if (!(var4 == var3)) {
                        _fun30895_ip = 754;
                        continue _fun30895
                    }
                case 750:
                    var3 = new Array(0);
                case 754:
                    var0.bundledSkus = var3;
                    var4 = _closure1_slot20;
                    var3 = var1.tenant_metadata;
                    var3 = var4.bind(var5)(var3);
                    var0.tenantMetadata = var3;
                    var3 = var1.thumbnail_asset_id;
                    var0.thumbnailAssetId = var3;
                    var1 = var1.description;
                    var0.description = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var1;
                    var10 = var0;
                    var0 = new var11[var2](var10, var9);
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/SKURecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 3455, 660, 3493, 3494, 1384, 3045, 2]);