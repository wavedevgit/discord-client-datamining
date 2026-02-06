// modules/collectibles/native/FeaturedBlock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'relative';
    var8.position = var9;
    var3.container = var8;
    var8 = {
        'width': '100%',
        'aspectRatio': 2,
        'resizeMode': 'contain'
    };
    var3.bannerImage = var8;
    var8 = {
        'position': 'absolute',
        'top': '16%',
        'left': '3%',
        'zIndex': 1
    };
    var3.limitedTimeBadge = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/FeaturedBlock.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88676: for (var _fun88676_ip = 0;;) switch (_fun88676_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.featuredCategory;
                var _closure2_slot0 = var4;
                var1 = var0.category;
                var _closure2_slot1 = var1;
                var0 = _closure1_slot10;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var6 = var2.bind(var3)(var0);
                var0 = var6.useNavigation;
                var0 = var0.bind(var6)();
                var _closure2_slot2 = var0;
                var0 = 7;
                var0 = var5[var0];
                var6 = var2.bind(var3)(var0);
                var0 = var6.useCollectiblesAnalyticsContext;
                var0 = var0.bind(var6)();
                var _closure2_slot3 = var0;
                var18 = var4.assetUrl;
                var0 = 8;
                var0 = var5[var0];
                var8 = var2.bind(var3)(var0);
                var6 = var8.useTrackProductCardImpression;
                var5 = var4.categoryStoreListingId;
                var2 = 'mobile_home';
                var0 = 'featured_block';
                var0 = var6.bind(var8)(var5, var2, var0);
                var5 = var0.handleCardVisibilityChange;
                var2 = var4.unpublishedAt;
                var10 = null;
                if (!(var10 == var2)) {
                    _fun88676_ip = 183;
                    continue _fun88676
                }
            case 165:
                var6 = var10 == var1;
                var0 = undefined;
                if (var6) {
                    _fun88676_ip = 180;
                    continue _fun88676
                }
            case 174:
                var0 = var1.unpublishedAt;
            case 180:
                var2 = var0;
            case 183:
                var0 = var10 != var2;
                var14 = null;
                if (!var0) {
                    _fun88676_ip = 223;
                    continue _fun88676
                }
            case 192:
                var0 = global;
                var0 = var0.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var23 = var1;
                var22 = var2;
                var0 = new var23[var0](var22, var21);
                var14 = var0 instanceof Object ? var0 : var1;
            case 223:
                var2 = _closure1_slot8;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 12;
                var0 = var13[var0];
                var1 = var11.bind(var3)(var0);
                var0 = {};
                var0.onChange = var5;
                var9 = _closure1_slot0;
                var5 = 13;
                var5 = var13[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.PressableOpacity;
                var5 = {
                    'accessibilityRole': 'button',
                    'accessibilityLabel': null,
                    'activeOpacity': 0.8,
                    'androidRippleConfig': null,
                    'hitSlop': 8
                };
                var8 = 14;
                var16 = var13[var8];
                var16 = var9.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.formatToPlainString;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8.hEsdA9;
                var8 = {};
                var19 = var4.name;
                var8.category = var19;
                var8 = var16.bind(var17)(var9, var8);
                var5.accessibilityLabel = var8;
                var8 = {};
                var9 = 15;
                var9 = var13[var9];
                var9 = var11.bind(var3)(var9);
                var9 = var9.radii;
                var9 = var9.lg;
                var8.radius = var9;
                var5.androidRippleConfig = var8;
                var7 = function() {
                    _fun88677: for (var _fun88677_ip = 0;;) switch (_fun88677_ip) {
                        case 0:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var0 = var2[var0];
                            var8 = undefined;
                            var4 = var1.bind(var8)(var0);
                            var3 = var4.track;
                            var0 = _closure1_slot6;
                            var2 = var0.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                            var0 = {};
                            var7 = _closure2_slot3;
                            var1 = null;
                            var9 = var1 == var7;
                            var7 = undefined;
                            if (var9) {
                                _fun88677_ip = 70;
                                continue _fun88677
                            }
                        case 60:
                            var9 = _closure2_slot3;
                            var7 = var9.sessionId;
                        case 70:
                            var0.collectibles_shop_session_id = var7;
                            var7 = _closure2_slot0;
                            var7 = var7.categoryStoreListingId;
                            var0.sku_id = var7;
                            var7 = 'mobile_home';
                            var0.page_type = var7;
                            var7 = _closure2_slot3;
                            var9 = var1 == var7;
                            var7 = undefined;
                            if (var9) {
                                _fun88677_ip = 124;
                                continue _fun88677
                            }
                        case 114:
                            var9 = _closure2_slot3;
                            var7 = var9.pageSection;
                        case 124:
                            var0.page_section = var7;
                            var7 = _closure2_slot3;
                            var9 = var1 == var7;
                            var7 = undefined;
                            if (var9) {
                                _fun88677_ip = 152;
                                continue _fun88677
                            }
                        case 142:
                            var9 = _closure2_slot3;
                            var7 = var9.pageCategory;
                        case 152:
                            var0.page_category = var7;
                            var7 = 'FEATURED_BLOCK';
                            var0.tile_type = var7;
                            var7 = global;
                            var9 = var7.String;
                            var7 = _closure2_slot3;
                            var10 = var1 == var7;
                            var7 = undefined;
                            if (var10) {
                                _fun88677_ip = 199;
                                continue _fun88677
                            }
                        case 189:
                            var10 = _closure2_slot3;
                            var7 = var10.tilePosition;
                        case 199:
                            var7 = var9.bind(var8)(var7);
                            var0.tile_position = var7;
                            var0.cta_name = var1;
                            var0 = var3.bind(var4)(var2, var0);
                            var0 = _closure2_slot1;
                            var0 = var1 != var0;
                            if (!var0) {
                                _fun88677_ip = 400;
                                continue _fun88677
                            }
                        case 234:
                            var1 = _closure2_slot1;
                            var1 = var1.isOrbsExclusive;
                            if (var1) {
                                _fun88677_ip = 294;
                                continue _fun88677
                            }
                        case 247:
                            var4 = _closure2_slot2;
                            var3 = var4.push;
                            var1 = _closure1_slot7;
                            var2 = var1.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                            var1 = {};
                            var7 = _closure2_slot1;
                            var1.category = var7;
                            var6 = _closure2_slot3;
                            var1.analyticsContext = var6;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun88677_ip = 397;
                            continue _fun88677;
                        case 294:
                            var3 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 10;
                            var2 = var9[var2];
                            var4 = var3.bind(var8)(var2);
                            var3 = var4.openCollectiblesShopMobile;
                            var2 = {};
                            var7 = _closure1_slot1;
                            var6 = 11;
                            var10 = var9[var6];
                            var10 = var7.bind(var8)(var10);
                            var11 = var10.COLLECTIBLES_SHOP;
                            var10 = new Array(1);
                            var10[0] = var11;
                            var2.analyticsLocations = var10;
                            var6 = var9[var6];
                            var6 = var7.bind(var8)(var6);
                            var6 = var6.COLLECTIBLES_SHOP;
                            var2.analyticsSource = var6;
                            var5 = _closure1_slot5;
                            var5 = var5.ORBS;
                            var2.screen = var5;
                            var1 = var3.bind(var4)(var2);
                        case 397:
                            var0 = var1;
                        case 400:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onPress = var7;
                var9 = _closure1_slot9;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = var15.container;
                var7.style = var11;
                var11 = var10 != var18;
                if (!var11) {
                    _fun88676_ip = 465;
                    continue _fun88676
                }
            case 429:
                var16 = _closure1_slot8;
                var13 = _closure1_slot3;
                var10 = {};
                var17 = {};
                var17.uri = var18;
                var10.source = var17;
                var17 = var15.bannerImage;
                var10.style = var17;
                var11 = var16.bind(var3)(var13, var10);
            case 465:
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 16;
                var11 = var16[var11];
                var13 = var13.bind(var3)(var11);
                var11 = var13.shouldShowLimitedTimeBadge;
                var11 = var11.bind(var13)(var14);
                if (!var11) {
                    _fun88676_ip = 555;
                    continue _fun88676
                }
            case 507:
                var14 = _closure1_slot8;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 17;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.LimitedTimeBadge;
                var12 = {};
                var15 = var15.limitedTimeBadge;
                var12.style = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 555:
                var10[1] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var5.children = var7;
                var4 = var4.categoryStoreListingId;
                var4 = var2.bind(var3)(var6, var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3285, 660, 33, 1297, 1469, 11380, 11379, 795, 4598, 5584, 11381, 4905, 1234, 671, 4600, 5755, 2]);