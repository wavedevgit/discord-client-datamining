// modules/collectibles/native/HeroBlock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var6 = var3.UserSettingsSections;
    var _closure1_slot9 = var6;
    var3 = var3.VerticalGradient;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.jsxs;
    var _closure1_slot12 = var6;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun89089: for (var _fun89089_ip = 0;;) switch (_fun89089_ip) {
            case 0:
                var8 = arg0;
                var0 = {};
                var2 = '100%';
                var1 = {
                    'width': '100%',
                    'height': '100%'
                };
                var0.heroContainer = var1;
                var1 = {
                    'height': null,
                    'position': 'absolute',
                    'resizeMode': 'cover',
                    'width': '100%',
                    'zIndex': 1
                };
                var3 = 360;
                var3 = var8 <= var3;
                if (!var3) {
                    _fun89089_ip = 60;
                    continue _fun89089
                }
            case 57:
                var2 = 235;
            case 60:
                var1.height = var2;
                var0.heroBannerImage = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'bottom': 0,
                    'right': 0
                };
                var0.orbsBackgroundGradient = var1;
                var1 = {
                    'position': 'absolute',
                    'bottom': 0,
                    'height': '50%',
                    'width': '100%',
                    'zIndex': 1
                };
                var0.heroBannerGradient = var1;
                var1 = {
                    'display': 'flex',
                    'justifyContent': 'center',
                    'height': '100%',
                    'zIndex': 1
                };
                var0.heroBannerContainer = var1;
                var1 = {};
                var2 = '-10%';
                var1.top = var2;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 7;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var1.padding = var6;
                var0.orbsHeroTitleContainer = var1;
                var1 = {
                    'fontSize': 24,
                    'lineHeight': 30,
                    'textAlignVertical': 'center',
                    'textTransform': 'uppercase'
                };
                var0.heroTitle = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'paddingHorizontal': null,
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'space-between',
                    'width': '100%',
                    'height': '75%'
                };
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var1.paddingHorizontal = var6;
                var6 = 'row';
                var0.innerContainer = var1;
                var1 = {
                    'resizeMode': 'contain',
                    'height': null,
                    'aspectRatio': 1
                };
                var7 = 0.35;
                var7 = var7 * var8;
                var1.height = var7;
                var0.heroLogo = var1;
                var1 = {};
                var7 = var5[var2];
                var7 = var4.bind(var3)(var7);
                var7 = var7.colors;
                var7 = var7.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
                var1.backgroundColor = var7;
                var7 = var5[var2];
                var7 = var4.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_8;
                var1.padding = var7;
                var7 = var5[var2];
                var7 = var4.bind(var3)(var7);
                var7 = var7.radii;
                var7 = var7.round;
                var1.borderRadius = var7;
                var0.heroViewAllIcon = var1;
                var1 = {
                    'display': 'flex',
                    'width': '100%'
                };
                var0.heroProductsContainer = var1;
                var1 = {};
                var1.flexDirection = var6;
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var1.paddingHorizontal = var6;
                var0.skeletonContainer = var1;
                var1 = {};
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_16;
                var1.marginTop = var2;
                var2 = 'flex-start';
                var1.alignSelf = var2;
                var0.heroButtonContainer = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = function() {
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 8;
        var0 = var9[var0];
        var3 = undefined;
        var0 = var6.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var1 = var0.width;
        var0 = _closure1_slot14;
        var5 = var0.bind(var3)(var1);
        var1 = _closure1_slot0;
        var0 = 9;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.useCardLayout;
        var0 = var0.bind(var1)();
        var8 = var0.cardWidth;
        var2 = _closure1_slot12;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var5.skeletonContainer;
        var0.style = var5;
        var7 = _closure1_slot11;
        var5 = 10;
        var4 = var9[var5];
        var10 = var6.bind(var3)(var4);
        var4 = {};
        var4.width = var8;
        var11 = {};
        var13 = 7;
        var12 = var9[var13];
        var12 = var6.bind(var3)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_12;
        var11.marginRight = var12;
        var4.style = var11;
        var10 = var7.bind(var3)(var10, var4);
        var4 = new Array(9);
        var4[0] = var10;
        var10 = var9[var5];
        var11 = var6.bind(var3)(var10);
        var10 = {};
        var10.width = var8;
        var12 = {};
        var14 = var9[var13];
        var14 = var6.bind(var3)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12.marginRight = var14;
        var10.style = var12;
        var10 = var7.bind(var3)(var11, var10);
        var4[1] = var10;
        var10 = var9[var5];
        var11 = var6.bind(var3)(var10);
        var10 = {};
        var10.width = var8;
        var12 = {};
        var14 = var9[var13];
        var14 = var6.bind(var3)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12.marginRight = var14;
        var10.style = var12;
        var10 = var7.bind(var3)(var11, var10);
        var4[2] = var10;
        var10 = var9[var5];
        var11 = var6.bind(var3)(var10);
        var10 = {};
        var10.width = var8;
        var12 = {};
        var14 = var9[var13];
        var14 = var6.bind(var3)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12.marginRight = var14;
        var10.style = var12;
        var10 = var7.bind(var3)(var11, var10);
        var4[3] = var10;
        var10 = var9[var5];
        var11 = var6.bind(var3)(var10);
        var10 = {};
        var10.width = var8;
        var12 = {};
        var14 = var9[var13];
        var14 = var6.bind(var3)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12.marginRight = var14;
        var10.style = var12;
        var10 = var7.bind(var3)(var11, var10);
        var4[4] = var10;
        var10 = var9[var5];
        var11 = var6.bind(var3)(var10);
        var10 = {};
        var10.width = var8;
        var12 = {};
        var14 = var9[var13];
        var14 = var6.bind(var3)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12.marginRight = var14;
        var10.style = var12;
        var10 = var7.bind(var3)(var11, var10);
        var4[5] = var10;
        var10 = var9[var5];
        var11 = var6.bind(var3)(var10);
        var10 = {};
        var10.width = var8;
        var12 = {};
        var14 = var9[var13];
        var14 = var6.bind(var3)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12.marginRight = var14;
        var10.style = var12;
        var10 = var7.bind(var3)(var11, var10);
        var4[6] = var10;
        var10 = var9[var5];
        var11 = var6.bind(var3)(var10);
        var10 = {};
        var10.width = var8;
        var12 = {};
        var13 = var9[var13];
        var13 = var6.bind(var3)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_12;
        var12.marginRight = var13;
        var10.style = var12;
        var10 = var7.bind(var3)(var11, var10);
        var4[7] = var10;
        var5 = var9[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var5.width = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[8] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var3;
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/HeroBlock.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89091: for (var _fun89091_ip = 0;;) switch (_fun89091_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.heroBlock;
                var _closure2_slot0 = var1;
                var22 = var0.preferVCPrice;
                var _closure2_slot1 = var22;
                var6 = var0.screen;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var5 = var2.bind(var4)(var0);
                var0 = var5.useNavigation;
                var0 = var0.bind(var5)();
                var _closure2_slot2 = var0;
                var0 = 12;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useCollectiblesAnalyticsContext;
                var0 = var0.bind(var2)();
                var _closure2_slot3 = var0;
                var2 = _closure1_slot1;
                var0 = 8;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var10 = var0.width;
                var37 = var1.mobileHeroUrl;
                var0 = null;
                if (!(var0 == var37)) {
                    _fun89091_ip = 151;
                    continue _fun89091
                }
            case 145:
                var37 = var1.heroBannerUrl;
            case 151:
                var36 = var1.heroLogoUrl;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 13;
                var2 = var5[var2];
                var7 = var3.bind(var4)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var28
                    var2 = _closure1_slot6;
                    var1 = var2.getCategory;
                    var0 = _closure2_slot0;
                    var0 = var0.categorySkuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var5.bind(var7)(var3, var2);
                _closure2_slot4 = var11;
                var18 = var0 != var11;
                if (!var18) {
                    _fun89091_ip = 224;
                    continue _fun89091
                }
            case 218:
                var18 = var11.isOrbsExclusive;
            case 224:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 14;
                var2 = var8[var2];
                var2 = var9.bind(var4)(var2);
                var3 = var2.bind(var4)();
                var7 = _closure1_slot0;
                var2 = 15;
                var2 = var8[var2];
                var14 = var7.bind(var4)(var2);
                var13 = var14.useTrackProductCardImpression;
                var12 = var1.categoryStoreListingId;
                var5 = 'mobile_home';
                var2 = 'hero_block';
                var2 = var13.bind(var14)(var12, var5, var2);
                var5 = var2.handleCardVisibilityChange;
                var2 = _closure1_slot14;
                var15 = var2.bind(var4)(var10);
                var2 = 16;
                var10 = var8[var2];
                var13 = var7.bind(var4)(var10);
                var12 = var13.useToken;
                var32 = 7;
                var10 = var8[var32];
                var10 = var9.bind(var4)(var10);
                var10 = var10.colors;
                var10 = var10.BACKGROUND_BASE_LOW;
                var16 = var12.bind(var13)(var10);
                var10 = 17;
                var12 = var8[var10];
                var13 = var7.bind(var4)(var12);
                var12 = var13.hexToRgbaString;
                var10 = var8[var10];
                var14 = var7.bind(var4)(var10);
                var10 = var14.hexWithOpacity;
                var26 = 0;
                var10 = var10.bind(var14)(var16, var26);
                var33 = var12.bind(var13)(var10);
                var2 = var8[var2];
                var12 = var7.bind(var4)(var2);
                var10 = var12.useToken;
                var2 = var8[var32];
                var2 = var9.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BASE_LOWEST;
                var31 = var10.bind(var12)(var2);
                var2 = 18;
                var2 = var8[var2];
                var2 = var9.bind(var4)(var2);
                var2 = var2.bind(var4)();
                _closure2_slot5 = var2;
                var12 = _closure1_slot3;
                var10 = var12.useMemo;
                var13 = var1.rankedSkuIds;
                var9 = new Array(2);
                var9[0] = var13;
                var9[1] = var2;
                var2 = function() { // Environment: var28
                    var2 = _closure2_slot5;
                    var0 = _closure2_slot0;
                    var1 = var0.rankedSkuIds;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var9 = var10.bind(var12)(var2, var9);
                var2 = 19;
                var2 = var8[var2];
                var8 = var7.bind(var4)(var2);
                var7 = var8.useFilteredAndSortedProducts;
                var2 = {};
                var2.products = var9;
                var2.bypassAndroidUnsyncedFilter = var18;
                var24 = var7.bind(var8)(var2);
                var2 = _closure1_slot7;
                var2 = var2.FEATURED_PAGE;
                var2 = var6 === var2;
                _closure2_slot6 = var2;
                if (!(var4 !== var11)) {
                    _fun89091_ip = 2277;
                    continue _fun89091
                }
            case 562:
                var2 = var1.mobileTitle;
                if (!(var0 == var2)) {
                    _fun89091_ip = 579;
                    continue _fun89091
                }
            case 572:
                var34 = var1.title;
                _fun89091_ip = 585;
                continue _fun89091;
            case 579:
                var34 = var1.mobileTitle;
            case 585:
                var2 = var1.mobileSummary;
                if (!(var0 == var2)) {
                    _fun89091_ip = 603;
                    continue _fun89091
                }
            case 595:
                var35 = var1.summary;
                _fun89091_ip = 609;
                continue _fun89091;
            case 603:
                var35 = var1.mobileSummary;
            case 609:
                if (!var18) {
                    _fun89091_ip = 683;
                    continue _fun89091
                }
            case 612:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isThemeDark;
                var1 = var1.bind(var2)(var3);
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                if (var1) {
                    _fun89091_ip = 668;
                    continue _fun89091
                }
            case 654:
                var1 = 23;
                var1 = var6[var1];
                var1 = var3.bind(var4)(var1);
                _fun89091_ip = 680;
                continue _fun89091;
            case 668:
                var2 = 22;
                var2 = var6[var2];
                var1 = var3.bind(var4)(var2);
            case 680:
                var37 = var1;
            case 683:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 24;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.onChange = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = var15.heroContainer;
                var5.style = var7;
                var7 = var4 !== var11;
                if (!var7) {
                    _fun89091_ip = 2255;
                    continue _fun89091
                }
            case 740:
                var10 = _closure1_slot12;
                var9 = _closure1_slot13;
                var8 = {};
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 25;
                var12 = var16[var12];
                var12 = var17.bind(var4)(var12);
                var13 = var12.PressableOpacity;
                var12 = {
                    'accessibilityRole': 'button',
                    'accessibilityLabel': null,
                    'activeOpacity': 0.8,
                    'androidRippleConfig': null,
                    'hitSlop': 8
                };
                var30 = 26;
                var14 = var16[var30];
                var14 = var17.bind(var4)(var14);
                var21 = var14.intl;
                var20 = var21.formatToPlainString;
                var14 = var16[var30];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var17 = var14.hEsdA9;
                var14 = {};
                var23 = var11.name;
                var14.category = var23;
                var14 = var20.bind(var21)(var17, var14);
                var12.accessibilityLabel = var14;
                var14 = {};
                var17 = _closure1_slot1;
                var16 = var16[var32];
                var16 = var17.bind(var4)(var16);
                var16 = var16.radii;
                var16 = var16.lg;
                var14.radius = var16;
                var12.androidRippleConfig = var14;
                var14 = function() {
                    _fun89094: for (var _fun89094_ip = 0;;) switch (_fun89094_ip) {
                        case 0:
                            var6 = _closure2_slot4;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var2 = var2[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var2);
                            var4 = var7.track;
                            var2 = _closure1_slot8;
                            var3 = var2.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                            var2 = {};
                            var9 = _closure2_slot3;
                            var8 = null;
                            var10 = var8 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun89094_ip = 74;
                                continue _fun89094
                            }
                        case 64:
                            var10 = _closure2_slot3;
                            var9 = var10.sessionId;
                        case 74:
                            var2.collectibles_shop_session_id = var9;
                            var9 = _closure2_slot0;
                            var9 = var9.categoryStoreListingId;
                            var2.sku_id = var9;
                            var9 = 'mobile_home';
                            var2.page_type = var9;
                            var9 = _closure2_slot3;
                            var10 = var8 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun89094_ip = 128;
                                continue _fun89094
                            }
                        case 118:
                            var10 = _closure2_slot3;
                            var9 = var10.pageSection;
                        case 128:
                            var2.page_section = var9;
                            var9 = _closure2_slot3;
                            var10 = var8 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun89094_ip = 156;
                                continue _fun89094
                            }
                        case 146:
                            var10 = _closure2_slot3;
                            var9 = var10.pageCategory;
                        case 156:
                            var2.page_category = var9;
                            var9 = 'HERO_BLOCK';
                            var2.tile_type = var9;
                            var9 = global;
                            var10 = var9.String;
                            var9 = _closure2_slot3;
                            var11 = var8 == var9;
                            var9 = undefined;
                            if (var11) {
                                _fun89094_ip = 203;
                                continue _fun89094
                            }
                        case 193:
                            var11 = _closure2_slot3;
                            var9 = var11.tilePosition;
                        case 203:
                            var9 = var10.bind(var0)(var9);
                            var2.tile_position = var9;
                            var2.cta_name = var8;
                            var2 = var4.bind(var7)(var3, var2);
                            var4 = _closure2_slot2;
                            var3 = var4.push;
                            var1 = _closure1_slot9;
                            var2 = var1.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                            var1 = {};
                            var1.category = var6;
                            var5 = _closure2_slot3;
                            var1.analyticsContext = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var12.onPress = var14;
                var12.disabled = var18;
                var14 = {};
                var16 = 275;
                var14.height = var16;
                var12.style = var14;
                var16 = var0 != var37;
                if (!var16) {
                    _fun89091_ip = 1178;
                    continue _fun89091
                }
            case 934:
                var20 = _closure1_slot12;
                var17 = _closure1_slot13;
                var14 = {};
                var23 = var18;
                if (!var23) {
                    _fun89091_ip = 1030;
                    continue _fun89091
                }
            case 950:
                var27 = _closure1_slot11;
                var25 = _closure1_slot1;
                var29 = _closure1_slot2;
                var21 = 27;
                var21 = var29[var21];
                var25 = var25.bind(var4)(var21);
                var21 = {};
                var29 = ['rgba(39, 30, 173, 0.3)', 'transparent'];
                var21.colors = var29;
                var29 = _closure1_slot10;
                var38 = var29.START;
                var21.start = var38;
                var29 = var29.END;
                var21.end = var29;
                var29 = var15.orbsBackgroundGradient;
                var21.style = var29;
                var23 = var27.bind(var4)(var25, var21);
            case 1030:
                var21 = new Array(3);
                var21[0] = var23;
                var27 = _closure1_slot11;
                var25 = _closure1_slot4;
                var23 = {};
                var38 = var15.heroBannerImage;
                var29 = new Array(1);
                var29[0] = var38;
                var23.style = var29;
                var29 = {};
                var29.uri = var37;
                var23.source = var29;
                var23 = var27.bind(var4)(var25, var23);
                var21[1] = var23;
                var25 = _closure1_slot1;
                var29 = _closure1_slot2;
                var23 = 27;
                var23 = var29[var23];
                var25 = var25.bind(var4)(var23);
                var23 = {};
                var29 = var15.heroBannerGradient;
                var23.style = var29;
                var29 = new Array(2);
                var29[0] = var33;
                var29[1] = var31;
                var23.colors = var29;
                var29 = _closure1_slot10;
                var31 = var29.START;
                var23.start = var31;
                var29 = var29.END;
                var23.end = var29;
                var23 = var27.bind(var4)(var25, var23);
                var21[2] = var23;
                var14.children = var21;
                var16 = var20.bind(var4)(var17, var14);
            case 1178:
                var14 = new Array(2);
                var14[0] = var16;
                var20 = _closure1_slot11;
                var17 = _closure1_slot5;
                var16 = {};
                var21 = var15.heroBannerContainer;
                var16.style = var21;
                var23 = _closure1_slot12;
                var25 = {};
                if (var18) {
                    _fun89091_ip = 1371;
                    continue _fun89091
                }
            case 1218:
                var21 = var15.innerContainer;
                var25.style = var21;
                var27 = var0 != var36;
                if (!var27) {
                    _fun89091_ip = 1271;
                    continue _fun89091
                }
            case 1235:
                var31 = _closure1_slot11;
                var29 = _closure1_slot4;
                var21 = {};
                var33 = var15.heroLogo;
                var21.style = var33;
                var33 = {};
                var33.uri = var36;
                var21.source = var33;
                var27 = var31.bind(var4)(var29, var21);
            case 1271:
                var21 = new Array(2);
                var21[0] = var27;
                var31 = _closure1_slot11;
                var29 = _closure1_slot5;
                var27 = {};
                var33 = var15.heroViewAllIcon;
                var27.style = var33;
                var36 = _closure1_slot0;
                var37 = _closure1_slot2;
                var33 = 30;
                var33 = var37[var33];
                var33 = var36.bind(var4)(var33);
                var36 = var33.ChevronSmallRightIcon;
                var33 = {
                    'size': 'sm',
                    'color': 'white'
                };
                var33 = var31.bind(var4)(var36, var33);
                var27.children = var33;
                var27 = var31.bind(var4)(var29, var27);
                var21[1] = var27;
                var25.children = var21;
                var21 = var25;
                _fun89091_ip = 1678;
                continue _fun89091;
            case 1371:
                var27 = var15.orbsHeroTitleContainer;
                var25.style = var27;
                var29 = var0 != var34;
                if (!var29) {
                    _fun89091_ip = 1451;
                    continue _fun89091
                }
            case 1388:
                var33 = _closure1_slot11;
                var31 = _closure1_slot0;
                var36 = _closure1_slot2;
                var27 = 28;
                var27 = var36[var27];
                var27 = var31.bind(var4)(var27);
                var31 = var27.Text;
                var27 = {
                    'variant': 'display-md',
                    'color': 'mobile-text-heading-primary'
                };
                var36 = var15.heroTitle;
                var27.style = var36;
                var27.children = var34;
                var29 = var33.bind(var4)(var31, var27);
            case 1451:
                var27 = new Array(3);
                var27[0] = var29;
                var29 = var0 != var35;
                if (!var29) {
                    _fun89091_ip = 1474;
                    continue _fun89091
                }
            case 1466:
                var31 = '';
                var29 = var31 !== var35;
            case 1474:
                if (!var29) {
                    _fun89091_ip = 1526;
                    continue _fun89091
                }
            case 1477:
                var34 = _closure1_slot11;
                var33 = _closure1_slot0;
                var36 = _closure1_slot2;
                var31 = 28;
                var31 = var36[var31];
                var31 = var33.bind(var4)(var31);
                var33 = var31.Text;
                var31 = {};
                var36 = 'text-md/medium';
                var31.variant = var36;
                var31.children = var35;
                var29 = var34.bind(var4)(var33, var31);
            case 1526:
                var27[1] = var29;
                var33 = _closure1_slot11;
                var31 = _closure1_slot5;
                var29 = {};
                var34 = var15.heroButtonContainer;
                var29.style = var34;
                var39 = _closure1_slot0;
                var36 = _closure1_slot2;
                var34 = 29;
                var34 = var36[var34];
                var34 = var39.bind(var4)(var34);
                var35 = var34.Button;
                var34 = {
                    'variant': 'tertiary',
                    'shrink': true,
                    'grow': false,
                    'size': 'sm'
                };
                var37 = var36[var30];
                var37 = var39.bind(var4)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var36[var30];
                var36 = var39.bind(var4)(var36);
                var36 = var36.t;
                var36 = var36.ynollq;
                var36 = var37.bind(var38)(var36);
                var34.text = var36;
                var36 = function() {
                    var2 = _closure2_slot2;
                    var1 = var2.push;
                    var0 = _closure1_slot9;
                    var0 = var0.QUESTS;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var34.onPress = var36;
                var34 = var33.bind(var4)(var35, var34);
                var29.children = var34;
                var29 = var33.bind(var4)(var31, var29);
                var27[2] = var29;
                var25.children = var27;
                var21 = var25;
            case 1678:
                var21 = var23.bind(var4)(var17, var21);
                var16.children = var21;
                var16 = var20.bind(var4)(var17, var16);
                var14[1] = var16;
                var12.children = var14;
                var11 = var11.storeListingId;
                var12 = var10.bind(var4)(var13, var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var14 = _closure1_slot11;
                var13 = _closure1_slot5;
                var12 = {};
                var16 = var15.heroProductsContainer;
                var15 = new Array(2);
                var15[0] = var16;
                if (var18) {
                    _fun89091_ip = 1796;
                    continue _fun89091
                }
            case 1750:
                var16 = {
                    'position': 'absolute',
                    'top': '55%',
                    'left': 0,
                    'right': 0
                };
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 31;
                var17 = var21[var17];
                var17 = var20.bind(var4)(var17);
                var17 = var17.COLLECTIBLES_SHOP_CARD_HEIGHT;
                var16.height = var17;
                _fun89091_ip = 1855;
                continue _fun89091;
            case 1796:
                var17 = {};
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 31;
                var20 = var23[var20];
                var20 = var21.bind(var4)(var20);
                var21 = var20.COLLECTIBLES_SHOP_CARD_HEIGHT;
                var20 = 0.5;
                var20 = var20 * var21;
                var17.bottom = var20;
                var20 = '100%';
                var17.height = var20;
                var16 = var17;
            case 1855:
                var15[1] = var16;
                var12.style = var15;
                var17 = _closure1_slot11;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 32;
                var15 = var20[var15];
                var15 = var16.bind(var4)(var15);
                var16 = var15.LayerScope;
                var15 = {};
                var21 = _closure1_slot11;
                if (var18) {
                    _fun89091_ip = 2161;
                    continue _fun89091
                }
            case 1905:
                var20 = _closure1_slot13;
                var18 = {};
                var23 = var24.length;
                if (!(var26 !== var23)) {
                    _fun89091_ip = 2133;
                    continue _fun89091
                }
            case 1923:
                var27 = _closure1_slot11;
                var31 = _closure1_slot0;
                var29 = _closure1_slot2;
                var23 = 34;
                var23 = var29[var23];
                var23 = var31.bind(var4)(var23);
                var25 = var23.FlashList;
                var23 = {};
                var33 = true;
                var23.horizontal = var33;
                var33 = var29[var30];
                var33 = var31.bind(var4)(var33);
                var34 = var33.intl;
                var33 = var34.string;
                var30 = var29[var30];
                var30 = var31.bind(var4)(var30);
                var30 = var30.t;
                var30 = var30.pWG4ze;
                var30 = var33.bind(var34)(var30);
                var23.accessibilityLabel = var30;
                var23.data = var24;
                var30 = function arg0() {
                    _fun89096: for (var _fun89096_ip = 0;;) switch (_fun89096_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.item;
                            var10 = var1.index;
                            var4 = _closure1_slot11;
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 31;
                            var1 = var5[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var7 = true;
                            var1.solidBackground = var7;
                            var1.product = var0;
                            var8 = _closure2_slot4;
                            var8 = var8.unpublishedAt;
                            var1.unpublishedAt = var8;
                            var8 = _closure2_slot1;
                            var1.preferVCPrice = var8;
                            var9 = var4.bind(var3)(var2, var1);
                            var2 = _closure1_slot0;
                            var1 = 12;
                            var1 = var5[var1];
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.CollectiblesAnalyticsProvider;
                            var1 = {};
                            var5 = {};
                            var5.tilePosition = var10;
                            var1.newValue = var5;
                            var8 = 0;
                            var5 = var9;
                            if (!(var8 === var10)) {
                                _fun89096_ip = 180;
                                continue _fun89096
                            }
                        case 134:
                            var7 = _closure2_slot6;
                            var5 = var9;
                            if (!var7) {
                                _fun89096_ip = 180;
                                continue _fun89096
                            }
                        case 144:
                            var8 = _closure1_slot11;
                            var7 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 35;
                            var6 = var10[var6];
                            var7 = var7.bind(var3)(var6);
                            var6 = {};
                            var6.children = var9;
                            var5 = var8.bind(var3)(var7, var6);
                        case 180:
                            var1.children = var5;
                            var0 = var0.skuId;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var23.renderItem = var30;
                var30 = 31;
                var30 = var29[var30];
                var30 = var31.bind(var4)(var30);
                var30 = var30.COLLECTIBLES_SHOP_CARD_WIDTH;
                var31 = _closure1_slot1;
                var29 = var29[var32];
                var29 = var31.bind(var4)(var29);
                var29 = var29.spacing;
                var29 = var29.PX_12;
                var29 = var30 + var29;
                var23.estimatedItemSize = var29;
                var29 = false;
                var23.showsHorizontalScrollIndicator = var29;
                var29 = function() {
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var4 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.spacing;
                    var5 = var5.PX_16;
                    var4.width = var5;
                    var1.style = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var23.ListHeaderComponent = var29;
                var29 = function() {
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var4 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.spacing;
                    var5 = var5.PX_16;
                    var4.width = var5;
                    var1.style = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var23.ListFooterComponent = var29;
                var28 = function() {
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var4 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.spacing;
                    var5 = var5.PX_12;
                    var4.width = var5;
                    var1.style = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var23.ItemSeparatorComponent = var28;
                var23.initialScrollIndex = var26;
                var23 = var27.bind(var4)(var25, var23);
                _fun89091_ip = 2149;
                continue _fun89091;
            case 2133:
                var28 = _closure1_slot11;
                var27 = _closure1_slot15;
                var25 = {};
                var23 = var28.bind(var4)(var27, var25);
            case 2149:
                var18.children = var23;
                var18 = var21.bind(var4)(var20, var18);
                _fun89091_ip = 2221;
                continue _fun89091;
            case 2161:
                var20 = _closure1_slot1;
                var23 = _closure1_slot2;
                var19 = 33;
                var19 = var23[var19];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var19.products = var24;
                var25 = var24.length;
                var23 = 4;
                if (!(var26 !== var25)) {
                    _fun89091_ip = 2205;
                    continue _fun89091
                }
            case 2200:
                var23 = var24.length;
            case 2205:
                var19.loadingCardsNum = var23;
                var19.preferVCPrice = var22;
                var18 = var21.bind(var4)(var20, var19);
            case 2221:
                var15.children = var18;
                var15 = var17.bind(var4)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 2255:
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2277:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4606, 3289, 660, 33, 1297, 671, 1464, 11341, 11527, 1469, 11406, 566, 3252, 11405, 3158, 3246, 11528, 11520, 796, 3212, 11530, 11531, 11407, 4911, 1235, 4106, 3940, 4092, 7769, 11332, 5263, 11532, 5814, 11534, 2]);