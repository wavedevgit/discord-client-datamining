// modules/collectibles/native/ShopCategory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var7[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.Image;
    var _closure1_slot4 = var4;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var9 = var3.jsx;
    var _closure1_slot8 = var9;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.COLLECTIBLES_SHOP_CARD_HEIGHT;
    var3 = 100;
    var4 = var3 + var4;
    var14 = 6;
    var3 = var7[var14];
    var10 = var6.bind(var0)(var3);
    var8 = var10.createStyles;
    var5 = {};
    var11 = {};
    var12 = 7;
    var3 = var7[var12];
    var3 = var13.bind(var0)(var3);
    var3 = var3.spacing;
    var3 = var3.PX_16;
    var11.marginTop = var3;
    var3 = 24;
    var11.marginBottom = var3;
    var11.height = var4;
    var5.categoryContainer = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'flex-end',
        'alignItems': 'center',
        'marginBottom': 16,
        'marginHorizontal': 16,
        'borderRadius': null,
        'overflow': 'hidden',
        'borderWidth': 1,
        'height': 84,
        'padding': 20
    };
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var11.borderRadius = var15;
    var5.categoryHeader = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PRIMARY_660;
    var11.borderColor = var15;
    var5.categoryHeaderBorderDark = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWEST;
    var11.borderColor = var15;
    var5.categoryHeaderBorderLight = var11;
    var11 = {
        'resizeMode': 'cover',
        'top': 0,
        'bottom': 0,
        'left': 0,
        'right': 0,
        'position': 'absolute'
    };
    var5.imageBackground = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var11.backgroundColor = var15;
    var11.padding = var14;
    var12 = var7[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var11.borderRadius = var12;
    var5.viewAllIcon = var11;
    var5 = var8.bind(var10)(var5);
    var _closure1_slot10 = var5;
    var5 = function() {
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var0 = {};
        var4 = 10;
        var0.width = var4;
        var1.style = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot11 = var5;
    var5 = function() {
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var0 = {};
        var4 = 16;
        var0.width = var4;
        var1.style = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.ChevronSmallRightIcon;
    var5 = {
        'size': 'sm',
        'color': 'white'
    };
    var5 = var9.bind(var0)(var8, var5);
    var _closure1_slot13 = var5;
    var5 = 22;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/native/ShopCategory.tsx';
    var5 = var6.bind(var7)(var5);
    var2.CATEGORY_CONTAINER_HEIGHT = var4;
    var2.CATEGORY_CONTAINER_BOTTOM_MARGIN = var3;
    var1 = function(arg0) { // Environment: var1
        _fun87438: for (var _fun87438_ip = 0;;) switch (_fun87438_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.index;
                var8 = var0.item;
                var _closure2_slot0 = var8;
                var17 = var0.isDarkTheme;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var0 = var1[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.analyticsLocations;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot10;
                var22 = var2.bind(var3)();
                var2 = _closure1_slot0;
                var16 = 10;
                var4 = var1[var16];
                var5 = var2.bind(var3)(var4);
                var4 = var5.useNavigation;
                var4 = var4.bind(var5)();
                var _closure2_slot2 = var4;
                var7 = var8.products;
                var4 = var8.unpublishedAt;
                var _closure2_slot3 = var4;
                var4 = 11;
                var4 = var1[var4];
                var6 = var2.bind(var3)(var4);
                var5 = var6.useFilteredAndSortedProducts;
                var4 = {};
                var4.products = var7;
                var7 = var8.isOrbsExclusive;
                var4.bypassAndroidUnsyncedFilter = var7;
                var19 = var5.bind(var6)(var4);
                var _closure2_slot4 = var19;
                var24 = var8.mobileBannerUrl;
                var4 = 12;
                var4 = var1[var4];
                var6 = var2.bind(var3)(var4);
                var5 = var6.useCollectiblesShopDeepLinkProps;
                var4 = {};
                var4.products = var19;
                var4 = var5.bind(var6)(var4);
                var12 = var4.productIndex;
                var6 = var4.initialProductSkuId;
                var _closure2_slot5 = var6;
                var5 = var4.initialVariantIndex;
                var _closure2_slot6 = var5;
                var9 = _closure1_slot3;
                var4 = var9.useRef;
                var7 = null;
                var21 = var4.bind(var9)(var7);
                var9 = 13;
                var1 = var1[var9];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useScrollToInitialIndexOnce;
                var1 = {};
                var10 = var7 != var12;
                if (!var10) {
                    _fun87438_ip = 278;
                    continue _fun87438
                }
            case 272:
                var11 = 0;
                var10 = var12 > var11;
            case 278:
                var1.shouldScroll = var10;
                var1.initialScrollIndex = var12;
                var1.flashListRef = var21;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.INITIAL_SCROLL_DELAY_MS;
                var1.afterMs = var9;
                var1 = var2.bind(var4)(var1);
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(4);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var19;
                var1[3] = var0;
                var0 = function() { // Environment: var14
                    _fun87439: for (var _fun87439_ip = 0;;) switch (_fun87439_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            var1 = var0 != var1;
                            var4 = null;
                            if (!var1) {
                                _fun87439_ip = 41;
                                continue _fun87439
                            }
                        case 18:
                            var5 = _closure2_slot4;
                            var2 = var5.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.skuId;
                                var0 = _closure2_slot5;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var4 = var2.bind(var5)(var1);
                        case 41:
                            if (!(var0 != var4)) {
                                _fun87439_ip = 132;
                                continue _fun87439
                            }
                        case 45:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 14;
                            var1 = var5[var1];
                            var2 = undefined;
                            var6 = var6.bind(var2)(var1);
                            var1 = var6.hideActionSheet;
                            var1 = var1.bind(var6)();
                            var1 = _closure1_slot0;
                            var0 = 15;
                            var0 = var5[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.openProductDetailsActionSheet;
                            var0 = {};
                            var0.product = var4;
                            var4 = _closure2_slot6;
                            var0.initialVariantIndex = var4;
                            var3 = _closure2_slot1;
                            var0.analyticsLocations = var3;
                            var0 = var1.bind(var2)(var0);
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var0 = 16;
                var1 = var11[var0];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useCollectiblesAnalyticsContext;
                var1 = var1.bind(var2)();
                _closure2_slot7 = var1;
                var2 = _closure1_slot8;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.CollectiblesAnalyticsProvider;
                var0 = {};
                var4 = {};
                var4.categoryPosition = var15;
                var0.newValue = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot5;
                var4 = {};
                var9 = var22.categoryContainer;
                var4.style = var9;
                var9 = 19;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.PressableOpacity;
                var9 = {
                    'style': null,
                    'accessibilityRole': 'button',
                    'accessibilityLabel': null,
                    'activeOpacity': 0.8,
                    'androidRippleConfig': null,
                    'hitSlop': 8
                };
                var18 = var22.categoryHeader;
                var11 = new Array(2);
                var11[0] = var18;
                if (var17) {
                    _fun87438_ip = 504;
                    continue _fun87438
                }
            case 496:
                var17 = var22.categoryHeaderBorderLight;
                _fun87438_ip = 510;
                continue _fun87438;
            case 504:
                var17 = var22.categoryHeaderBorderDark;
            case 510:
                var11[1] = var17;
                var9.style = var11;
                var17 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 20;
                var11 = var23[var20];
                var11 = var17.bind(var3)(var11);
                var25 = var11.intl;
                var18 = var25.formatToPlainString;
                var11 = var23[var20];
                var11 = var17.bind(var3)(var11);
                var11 = var11.t;
                var17 = var11.hEsdA9;
                var11 = {};
                var26 = var8.name;
                var11.category = var26;
                var11 = var18.bind(var25)(var17, var11);
                var9.accessibilityLabel = var11;
                var11 = {};
                var18 = _closure1_slot1;
                var17 = 7;
                var17 = var23[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.radii;
                var17 = var17.lg;
                var11.radius = var17;
                var9.androidRippleConfig = var11;
                var11 = function() {
                    _fun87441: for (var _fun87441_ip = 0;;) switch (_fun87441_ip) {
                        case 0:
                            var6 = _closure2_slot0;
                            var0 = var6.isOrbsExclusive;
                            if (var0) {
                                _fun87441_ip = 62;
                                continue _fun87441
                            }
                        case 19:
                            var4 = _closure2_slot2;
                            var2 = var4.push;
                            var0 = _closure1_slot7;
                            var1 = var0.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                            var0 = {};
                            var0.category = var6;
                            var5 = _closure2_slot7;
                            var0.analyticsContext = var5;
                            var0 = var2.bind(var4)(var1, var0);
                            _fun87441_ip = 167;
                            continue _fun87441;
                        case 62:
                            var1 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 17;
                            var0 = var7[var0];
                            var6 = undefined;
                            var2 = var1.bind(var6)(var0);
                            var1 = var2.openCollectiblesShopMobile;
                            var0 = {};
                            var5 = _closure1_slot1;
                            var4 = 18;
                            var8 = var7[var4];
                            var8 = var5.bind(var6)(var8);
                            var9 = var8.COLLECTIBLES_SHOP;
                            var8 = new Array(1);
                            var8[0] = var9;
                            var0.analyticsLocations = var8;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.COLLECTIBLES_SHOP;
                            var0.analyticsSource = var4;
                            var3 = _closure1_slot6;
                            var3 = var3.ORBS;
                            var0.screen = var3;
                            var0 = var1.bind(var2)(var0);
                        case 167:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9.onPress = var11;
                var11 = var7 != var24;
                if (!var11) {
                    _fun87438_ip = 688;
                    continue _fun87438
                }
            case 652:
                var18 = _closure1_slot8;
                var17 = _closure1_slot4;
                var7 = {};
                var23 = {};
                var23.uri = var24;
                var7.source = var23;
                var23 = var22.imageBackground;
                var7.style = var23;
                var11 = var18.bind(var3)(var17, var7);
            case 688:
                var7 = new Array(2);
                var7[0] = var11;
                var11 = _closure1_slot8;
                var18 = _closure1_slot5;
                var17 = {};
                var22 = var22.viewAllIcon;
                var17.style = var22;
                var22 = _closure1_slot13;
                var17.children = var22;
                var17 = var11.bind(var3)(var18, var17);
                var7[1] = var17;
                var9.children = var7;
                var7 = var8.storeListingId;
                var9 = var6.bind(var3)(var10, var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 21;
                var9 = var18[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.FlashList;
                var9 = {};
                var9.ref = var21;
                var21 = true;
                var9.horizontal = var21;
                var21 = var18[var20];
                var21 = var17.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var18[var20];
                var20 = var17.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.pWG4ze;
                var20 = var21.bind(var22)(var20);
                var9.accessibilityLabel = var20;
                var9.data = var19;
                var14 = function arg0() {
                    var1 = arg0;
                    var0 = var1.item;
                    var8 = var1.index;
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 16;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CollectiblesAnalyticsProvider;
                    var1 = {};
                    var6 = {};
                    var6.tilePosition = var8;
                    var1.newValue = var6;
                    var6 = _closure1_slot1;
                    var5 = 5;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = {};
                    var5.product = var0;
                    var7 = _closure2_slot3;
                    var5.unpublishedAt = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1.children = var5;
                    var0 = var0.skuId;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var9.renderItem = var14;
                var14 = 5;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.COLLECTIBLES_SHOP_CARD_WIDTH;
                var14 = var14 + var16;
                var9.estimatedItemSize = var14;
                var14 = false;
                var9.showsHorizontalScrollIndicator = var14;
                var14 = _closure1_slot12;
                var9.ListHeaderComponent = var14;
                var9.ListFooterComponent = var14;
                var13 = _closure1_slot11;
                var9.ItemSeparatorComponent = var13;
                var9.initialScrollIndex = var12;
                var14 = var8.storeListingId;
                var8 = global;
                var8 = var8.HermesInternal;
                var13 = var8.concat;
                var12 = 'category-flashlist-';
                var8 = '-';
                var8 = var13.bind(var12)(var15, var8, var14);
                var8 = var11.bind(var3)(var10, var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ShopCategory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3284, 660, 33, 8830, 1297, 671, 8440, 5785, 1469, 11274, 11269, 11272, 3279, 8861, 11270, 4603, 5639, 4880, 1234, 5812, 2]);