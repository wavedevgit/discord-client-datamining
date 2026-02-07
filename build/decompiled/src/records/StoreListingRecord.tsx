// records/StoreListingRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun98796: for (var _fun98796_ip = 0;;) switch (_fun98796_ip) {
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
                _fun98796_ip = 76;
                continue _fun98796;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var1 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun98800: for (var _fun98800_ip = 0;;) switch (_fun98800_ip) {
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
                        _fun98800_ip = 65;
                        continue _fun98800
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun98800_ip = 103;
                    continue _fun98800;
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
                    var2 = var1.applicationId;
                    var0.applicationId = var2;
                    var2 = var1.skuId;
                    var0.skuId = var2;
                    var2 = var1.skuFlags;
                    var0.skuFlags = var2;
                    var2 = var1.summary;
                    var0.summary = var2;
                    var2 = var1.tagline;
                    var0.tagline = var2;
                    var2 = var1.flavorText;
                    var0.flavorText = var2;
                    var2 = var1.description;
                    var0.description = var2;
                    var4 = var1.carouselItems;
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun98800_ip = 218;
                        continue _fun98800
                    }
                case 214:
                    var4 = new Array(0);
                case 218:
                    var0.carouselItems = var4;
                    var4 = var1.childSkuIds;
                    if (!(var2 == var4)) {
                        _fun98800_ip = 238;
                        continue _fun98800
                    }
                case 234:
                    var4 = new Array(0);
                case 238:
                    var0.childSkuIds = var4;
                    var4 = var1.alternativeSkuIds;
                    if (!(var2 == var4)) {
                        _fun98800_ip = 258;
                        continue _fun98800
                    }
                case 254:
                    var4 = new Array(0);
                case 258:
                    var0.alternativeSkuIds = var4;
                    var4 = var1.assets;
                    if (!(var2 == var4)) {
                        _fun98800_ip = 278;
                        continue _fun98800
                    }
                case 274:
                    var4 = new Array(0);
                case 278:
                    var0.assets = var4;
                    var4 = var1.staffNotes;
                    var0.staffNotes = var4;
                    var4 = var1.guild;
                    var0.guild = var4;
                    var5 = var1.thumbnail;
                    var6 = var2 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun98800_ip = 325;
                        continue _fun98800
                    }
                case 322:
                    var4 = var5;
                case 325:
                    var0.thumbnail = var4;
                    var5 = var1.boxArt;
                    var6 = var2 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun98800_ip = 349;
                        continue _fun98800
                    }
                case 346:
                    var4 = var5;
                case 349:
                    var0.boxArt = var4;
                    var5 = var1.previewVideo;
                    var6 = var2 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun98800_ip = 373;
                        continue _fun98800
                    }
                case 370:
                    var4 = var5;
                case 373:
                    var0.previewVideo = var4;
                    var5 = var1.headerBackground;
                    var6 = var2 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun98800_ip = 397;
                        continue _fun98800
                    }
                case 394:
                    var4 = var5;
                case 397:
                    var0.headerBackground = var4;
                    var5 = var1.headerLogoDarkTheme;
                    var6 = var2 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun98800_ip = 421;
                        continue _fun98800
                    }
                case 418:
                    var4 = var5;
                case 421:
                    var0.headerLogoDarkTheme = var4;
                    var5 = var1.headerLogoLightTheme;
                    var6 = var2 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun98800_ip = 445;
                        continue _fun98800
                    }
                case 442:
                    var4 = var5;
                case 445:
                    var0.headerLogoLightTheme = var4;
                    var5 = var1.heroBackground;
                    var6 = var2 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun98800_ip = 469;
                        continue _fun98800
                    }
                case 466:
                    var4 = var5;
                case 469:
                    var0.heroBackground = var4;
                    var5 = var1.heroVideo;
                    var6 = var2 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun98800_ip = 493;
                        continue _fun98800
                    }
                case 490:
                    var4 = var5;
                case 493:
                    var0.heroVideo = var4;
                    var4 = var1.entitlementBranchId;
                    var5 = var2 != var4;
                    var2 = null;
                    if (!var5) {
                        _fun98800_ip = 517;
                        continue _fun98800
                    }
                case 514:
                    var2 = var4;
                case 517:
                    var0.entitlementBranchId = var2;
                    var2 = var1.benefits;
                    var0.benefits = var2;
                    var2 = global;
                    var2 = var2.Boolean;
                    var1 = var1.published;
                    var1 = var2.bind(var3)(var1);
                    var0.published = var1;
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
        var1 = 'isSlimDirectoryVersion';
        var5.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.description;
            var0 = null;
            var0 = var0 == var1;
            return var0;
        };
        var5.value = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0() {
            _fun98802: for (var _fun98802_ip = 0;;) switch (_fun98802_ip) {
                case 0:
                    var1 = arg0;
                    var7 = var1.staff_notes;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var3 = var1.id;
                    var0.id = var3;
                    var3 = var1.sku;
                    var3 = var3.application_id;
                    var0.applicationId = var3;
                    var3 = var1.sku;
                    var3 = var3.id;
                    var0.skuId = var3;
                    var3 = var1.sku;
                    var3 = var3.flags;
                    var0.skuFlags = var3;
                    var3 = var1.summary;
                    var0.summary = var3;
                    var3 = var1.tagline;
                    var0.tagline = var3;
                    var3 = var1.flavor_text;
                    var0.flavorText = var3;
                    var3 = var1.description;
                    var0.description = var3;
                    var4 = var1.child_skus;
                    var3 = null;
                    var6 = var3 != var4;
                    var4 = null;
                    if (!var6) {
                        _fun98802_ip = 163;
                        continue _fun98802
                    }
                case 140:
                    var9 = var1.child_skus;
                    var8 = var9.map;
                    var6 = function(arg0) { // Environment: var5
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var4 = var8.bind(var9)(var6);
                case 163:
                    var0.childSkuIds = var4;
                    var4 = var1.alternative_skus;
                    var6 = var3 != var4;
                    var4 = null;
                    if (!var6) {
                        _fun98802_ip = 206;
                        continue _fun98802
                    }
                case 183:
                    var9 = var1.alternative_skus;
                    var8 = var9.map;
                    var6 = function(arg0) { // Environment: var5
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var4 = var8.bind(var9)(var6);
                case 206:
                    var0.alternativeSkuIds = var4;
                    var4 = var1.carousel_items;
                    var6 = var3 != var4;
                    var4 = null;
                    if (!var6) {
                        _fun98802_ip = 249;
                        continue _fun98802
                    }
                case 226:
                    var8 = var1.carousel_items;
                    var6 = var8.map;
                    var5 = function(arg0) { // Environment: var5
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.asset_id;
                        var0.assetId = var2;
                        var1 = var1.youtube_video_id;
                        var0.youtubeVideoId = var1;
                        return var0;
                    };
                    var4 = var6.bind(var8)(var5);
                case 249:
                    var0.carouselItems = var4;
                    var4 = var1.assets;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 316;
                        continue _fun98802
                    }
                case 269:
                    var8 = var1.assets;
                    var6 = var8.map;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var5 = 7;
                    var9 = var9[var5];
                    var5 = undefined;
                    var5 = var10.bind(var5)(var9);
                    var5 = var5.transformStoreAssetFromServer;
                    var4 = var6.bind(var8)(var5);
                case 316:
                    var0.assets = var4;
                    var5 = var3 != var7;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 394;
                        continue _fun98802
                    }
                case 330:
                    var5 = {};
                    var6 = var7.content;
                    var5.content = var6;
                    var6 = var7.user;
                    var8 = var3 != var6;
                    var6 = null;
                    if (!var8) {
                        _fun98802_ip = 387;
                        continue _fun98802
                    }
                case 355:
                    var9 = _closure1_slot7;
                    var11 = var7.user;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = var8;
                    var7 = new var12[var9](var11, var10);
                    var6 = var7 instanceof Object ? var7 : var8;
                case 387:
                    var5.user = var6;
                    var4 = var5;
                case 394:
                    var0.staffNotes = var4;
                    var4 = var1.guild;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 492;
                        continue _fun98802
                    }
                case 413:
                    var5 = {};
                    var6 = var1.guild;
                    var6 = var6.id;
                    var5.id = var6;
                    var6 = var1.guild;
                    var6 = var6.name;
                    var5.name = var6;
                    var6 = var1.guild;
                    var6 = var6.icon;
                    var5.icon = var6;
                    var6 = var1.guild;
                    var6 = var6.approximate_member_count;
                    var5.approximateMemberCount = var6;
                    var6 = var1.guild;
                    var6 = var6.approximate_presence_count;
                    var5.approximatePresenceCount = var6;
                    var4 = var5;
                case 492:
                    var0.guild = var4;
                    var4 = var1.thumbnail;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 553;
                        continue _fun98802
                    }
                case 511:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.transformStoreAssetFromServer;
                    var5 = var1.thumbnail;
                    var4 = var6.bind(var7)(var5);
                case 553:
                    var0.thumbnail = var4;
                    var4 = var1.preview_video;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 615;
                        continue _fun98802
                    }
                case 573:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.transformStoreAssetFromServer;
                    var5 = var1.preview_video;
                    var4 = var6.bind(var7)(var5);
                case 615:
                    var0.previewVideo = var4;
                    var4 = var1.header_background;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 677;
                        continue _fun98802
                    }
                case 635:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.transformStoreAssetFromServer;
                    var5 = var1.header_background;
                    var4 = var6.bind(var7)(var5);
                case 677:
                    var0.headerBackground = var4;
                    var4 = var1.header_logo_dark_theme;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 739;
                        continue _fun98802
                    }
                case 697:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.transformStoreAssetFromServer;
                    var5 = var1.header_logo_dark_theme;
                    var4 = var6.bind(var7)(var5);
                case 739:
                    var0.headerLogoDarkTheme = var4;
                    var4 = var1.header_logo_light_theme;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 801;
                        continue _fun98802
                    }
                case 759:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.transformStoreAssetFromServer;
                    var5 = var1.header_logo_light_theme;
                    var4 = var6.bind(var7)(var5);
                case 801:
                    var0.headerLogoLightTheme = var4;
                    var4 = var1.box_art;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 863;
                        continue _fun98802
                    }
                case 821:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.transformStoreAssetFromServer;
                    var5 = var1.box_art;
                    var4 = var6.bind(var7)(var5);
                case 863:
                    var0.boxArt = var4;
                    var4 = var1.hero_background;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun98802_ip = 925;
                        continue _fun98802
                    }
                case 883:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 7;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.transformStoreAssetFromServer;
                    var5 = var1.hero_background;
                    var4 = var6.bind(var7)(var5);
                case 925:
                    var0.heroBackground = var4;
                    var4 = var1.hero_video;
                    var4 = var3 != var4;
                    var3 = null;
                    if (!var4) {
                        _fun98802_ip = 987;
                        continue _fun98802
                    }
                case 945:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 7;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.transformStoreAssetFromServer;
                    var4 = var1.hero_video;
                    var3 = var5.bind(var6)(var4);
                case 987:
                    var0.heroVideo = var3;
                    var3 = var1.entitlement_branch_id;
                    var0.entitlementBranchId = var3;
                    var3 = var1.benefits;
                    var0.benefits = var3;
                    var1 = var1.published;
                    var0.published = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var1;
                    var11 = var0;
                    var0 = new var12[var2](var11, var10);
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/StoreListingRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 1628, 12884, 2]);