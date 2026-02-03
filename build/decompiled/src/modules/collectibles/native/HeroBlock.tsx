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
    var6 = var3.AnalyticEvents;
    var _closure1_slot7 = var6;
    var6 = var3.UserSettingsSections;
    var _closure1_slot8 = var6;
    var3 = var3.VerticalGradient;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun88585: for (var _fun88585_ip = 0;;) switch (_fun88585_ip) {
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
                    _fun88585_ip = 60;
                    continue _fun88585
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
                var2 = 6;
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
    var _closure1_slot13 = var3;
    var3 = function() {
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 7;
        var0 = var9[var0];
        var3 = undefined;
        var0 = var6.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var1 = var0.width;
        var0 = _closure1_slot13;
        var5 = var0.bind(var3)(var1);
        var1 = _closure1_slot0;
        var0 = 8;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.useCardLayout;
        var0 = var0.bind(var1)();
        var8 = var0.cardWidth;
        var2 = _closure1_slot11;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var5.skeletonContainer;
        var0.style = var5;
        var7 = _closure1_slot10;
        var5 = 9;
        var4 = var9[var5];
        var10 = var6.bind(var3)(var4);
        var4 = {};
        var4.width = var8;
        var11 = {};
        var13 = 6;
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
    var _closure1_slot14 = var3;
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/HeroBlock.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88587: for (var _fun88587_ip = 0;;) switch (_fun88587_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.heroBlock;
                var _closure2_slot0 = var1;
                var19 = var0.preferVCPrice;
                var _closure2_slot1 = var19;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var5 = var2.bind(var4)(var0);
                var0 = var5.useNavigation;
                var0 = var0.bind(var5)();
                var _closure2_slot2 = var0;
                var0 = 11;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useCollectiblesAnalyticsContext;
                var0 = var0.bind(var2)();
                var _closure2_slot3 = var0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var9 = var0.width;
                var37 = var1.mobileHeroUrl;
                var0 = null;
                if (!(var0 == var37)) {
                    _fun88587_ip = 141;
                    continue _fun88587
                }
            case 135:
                var37 = var1.heroBannerUrl;
            case 141:
                var36 = var1.heroLogoUrl;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var25
                    var2 = _closure1_slot6;
                    var1 = var2.getCategory;
                    var0 = _closure2_slot0;
                    var0 = var0.categorySkuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var5.bind(var6)(var3, var2);
                _closure2_slot4 = var11;
                var15 = var0 != var11;
                if (!var15) {
                    _fun88587_ip = 214;
                    continue _fun88587
                }
            case 208:
                var15 = var11.isOrbsExclusive;
            case 214:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var2 = var8.bind(var4)(var2);
                var3 = var2.bind(var4)();
                var6 = _closure1_slot0;
                var2 = 14;
                var2 = var7[var2];
                var13 = var6.bind(var4)(var2);
                var12 = var13.useTrackProductCardImpression;
                var10 = var1.categoryStoreListingId;
                var5 = 'mobile_home';
                var2 = 'hero_block';
                var2 = var12.bind(var13)(var10, var5, var2);
                var5 = var2.handleCardVisibilityChange;
                var2 = _closure1_slot13;
                var17 = var2.bind(var4)(var9);
                var2 = 15;
                var9 = var7[var2];
                var12 = var6.bind(var4)(var9);
                var10 = var12.useToken;
                var29 = 6;
                var9 = var7[var29];
                var9 = var8.bind(var4)(var9);
                var9 = var9.colors;
                var9 = var9.BACKGROUND_BASE_LOW;
                var14 = var10.bind(var12)(var9);
                var9 = 16;
                var10 = var7[var9];
                var12 = var6.bind(var4)(var10);
                var10 = var12.hexToRgbaString;
                var9 = var7[var9];
                var13 = var6.bind(var4)(var9);
                var9 = var13.hexWithOpacity;
                var23 = 0;
                var9 = var9.bind(var13)(var14, var23);
                var33 = var10.bind(var12)(var9);
                var2 = var7[var2];
                var10 = var6.bind(var4)(var2);
                var9 = var10.useToken;
                var2 = var7[var29];
                var2 = var8.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BASE_LOWEST;
                var32 = var9.bind(var10)(var2);
                var2 = 17;
                var2 = var7[var2];
                var2 = var8.bind(var4)(var2);
                var2 = var2.bind(var4)();
                _closure2_slot5 = var2;
                var10 = _closure1_slot3;
                var9 = var10.useMemo;
                var12 = var1.rankedSkuIds;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var2;
                var2 = function() { // Environment: var25
                    var2 = _closure2_slot5;
                    var0 = _closure2_slot0;
                    var1 = var0.rankedSkuIds;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = var9.bind(var10)(var2, var8);
                var2 = 18;
                var2 = var7[var2];
                var7 = var6.bind(var4)(var2);
                var6 = var7.useFilteredAndSortedProducts;
                var2 = {};
                var2.products = var8;
                var2.bypassAndroidUnsyncedFilter = var15;
                var21 = var6.bind(var7)(var2);
                if (!(var4 !== var11)) {
                    _fun88587_ip = 2207;
                    continue _fun88587
                }
            case 534:
                var2 = var1.mobileTitle;
                if (!(var0 == var2)) {
                    _fun88587_ip = 551;
                    continue _fun88587
                }
            case 544:
                var34 = var1.title;
                _fun88587_ip = 557;
                continue _fun88587;
            case 551:
                var34 = var1.mobileTitle;
            case 557:
                var2 = var1.mobileSummary;
                if (!(var0 == var2)) {
                    _fun88587_ip = 575;
                    continue _fun88587
                }
            case 567:
                var35 = var1.summary;
                _fun88587_ip = 581;
                continue _fun88587;
            case 575:
                var35 = var1.mobileSummary;
            case 581:
                if (!var15) {
                    _fun88587_ip = 655;
                    continue _fun88587
                }
            case 584:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 20;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isThemeDark;
                var1 = var1.bind(var2)(var3);
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                if (var1) {
                    _fun88587_ip = 640;
                    continue _fun88587
                }
            case 626:
                var1 = 22;
                var1 = var6[var1];
                var1 = var3.bind(var4)(var1);
                _fun88587_ip = 652;
                continue _fun88587;
            case 640:
                var2 = 21;
                var2 = var6[var2];
                var1 = var3.bind(var4)(var2);
            case 652:
                var37 = var1;
            case 655:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 23;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.onChange = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = var17.heroContainer;
                var5.style = var7;
                var7 = var4 !== var11;
                if (!var7) {
                    _fun88587_ip = 2185;
                    continue _fun88587
                }
            case 712:
                var10 = _closure1_slot11;
                var9 = _closure1_slot12;
                var8 = {};
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 24;
                var12 = var18[var12];
                var12 = var20.bind(var4)(var12);
                var13 = var12.PressableOpacity;
                var12 = {
                    'accessibilityRole': 'button',
                    'accessibilityLabel': null,
                    'activeOpacity': 0.8,
                    'androidRippleConfig': null,
                    'hitSlop': 8
                };
                var27 = 25;
                var14 = var18[var27];
                var14 = var20.bind(var4)(var14);
                var24 = var14.intl;
                var22 = var24.formatToPlainString;
                var14 = var18[var27];
                var14 = var20.bind(var4)(var14);
                var14 = var14.t;
                var20 = var14.hEsdA9;
                var14 = {};
                var26 = var11.name;
                var14.category = var26;
                var14 = var22.bind(var24)(var20, var14);
                var12.accessibilityLabel = var14;
                var14 = {};
                var20 = _closure1_slot1;
                var18 = var18[var29];
                var18 = var20.bind(var4)(var18);
                var18 = var18.radii;
                var18 = var18.lg;
                var14.radius = var18;
                var12.androidRippleConfig = var14;
                var14 = function() {
                    _fun88590: for (var _fun88590_ip = 0;;) switch (_fun88590_ip) {
                        case 0:
                            var6 = _closure2_slot4;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 19;
                            var2 = var2[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var2);
                            var4 = var7.track;
                            var2 = _closure1_slot7;
                            var3 = var2.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                            var2 = {};
                            var9 = _closure2_slot3;
                            var8 = null;
                            var10 = var8 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun88590_ip = 74;
                                continue _fun88590
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
                                _fun88590_ip = 128;
                                continue _fun88590
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
                                _fun88590_ip = 156;
                                continue _fun88590
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
                                _fun88590_ip = 203;
                                continue _fun88590
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
                            var1 = _closure1_slot8;
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
                var12.disabled = var15;
                var14 = {};
                var18 = 275;
                var14.height = var18;
                var12.style = var14;
                var18 = var0 != var37;
                if (!var18) {
                    _fun88587_ip = 1150;
                    continue _fun88587
                }
            case 906:
                var22 = _closure1_slot11;
                var20 = _closure1_slot12;
                var14 = {};
                var26 = var15;
                if (!var26) {
                    _fun88587_ip = 1002;
                    continue _fun88587
                }
            case 922:
                var30 = _closure1_slot10;
                var28 = _closure1_slot1;
                var31 = _closure1_slot2;
                var24 = 26;
                var24 = var31[var24];
                var28 = var28.bind(var4)(var24);
                var24 = {};
                var31 = ['rgba(39, 30, 173, 0.3)', 'transparent'];
                var24.colors = var31;
                var31 = _closure1_slot9;
                var38 = var31.START;
                var24.start = var38;
                var31 = var31.END;
                var24.end = var31;
                var31 = var17.orbsBackgroundGradient;
                var24.style = var31;
                var26 = var30.bind(var4)(var28, var24);
            case 1002:
                var24 = new Array(3);
                var24[0] = var26;
                var30 = _closure1_slot10;
                var28 = _closure1_slot4;
                var26 = {};
                var38 = var17.heroBannerImage;
                var31 = new Array(1);
                var31[0] = var38;
                var26.style = var31;
                var31 = {};
                var31.uri = var37;
                var26.source = var31;
                var26 = var30.bind(var4)(var28, var26);
                var24[1] = var26;
                var28 = _closure1_slot1;
                var31 = _closure1_slot2;
                var26 = 26;
                var26 = var31[var26];
                var28 = var28.bind(var4)(var26);
                var26 = {};
                var31 = var17.heroBannerGradient;
                var26.style = var31;
                var31 = new Array(2);
                var31[0] = var33;
                var31[1] = var32;
                var26.colors = var31;
                var31 = _closure1_slot9;
                var32 = var31.START;
                var26.start = var32;
                var31 = var31.END;
                var26.end = var31;
                var26 = var30.bind(var4)(var28, var26);
                var24[2] = var26;
                var14.children = var24;
                var18 = var22.bind(var4)(var20, var14);
            case 1150:
                var14 = new Array(2);
                var14[0] = var18;
                var22 = _closure1_slot10;
                var20 = _closure1_slot5;
                var18 = {};
                var24 = var17.heroBannerContainer;
                var18.style = var24;
                var26 = _closure1_slot11;
                var28 = {};
                if (var15) {
                    _fun88587_ip = 1343;
                    continue _fun88587
                }
            case 1190:
                var24 = var17.innerContainer;
                var28.style = var24;
                var30 = var0 != var36;
                if (!var30) {
                    _fun88587_ip = 1243;
                    continue _fun88587
                }
            case 1207:
                var32 = _closure1_slot10;
                var31 = _closure1_slot4;
                var24 = {};
                var33 = var17.heroLogo;
                var24.style = var33;
                var33 = {};
                var33.uri = var36;
                var24.source = var33;
                var30 = var32.bind(var4)(var31, var24);
            case 1243:
                var24 = new Array(2);
                var24[0] = var30;
                var32 = _closure1_slot10;
                var31 = _closure1_slot5;
                var30 = {};
                var33 = var17.heroViewAllIcon;
                var30.style = var33;
                var36 = _closure1_slot0;
                var37 = _closure1_slot2;
                var33 = 29;
                var33 = var37[var33];
                var33 = var36.bind(var4)(var33);
                var36 = var33.ChevronSmallRightIcon;
                var33 = {
                    'size': 'sm',
                    'color': 'white'
                };
                var33 = var32.bind(var4)(var36, var33);
                var30.children = var33;
                var30 = var32.bind(var4)(var31, var30);
                var24[1] = var30;
                var28.children = var24;
                var24 = var28;
                _fun88587_ip = 1650;
                continue _fun88587;
            case 1343:
                var30 = var17.orbsHeroTitleContainer;
                var28.style = var30;
                var31 = var0 != var34;
                if (!var31) {
                    _fun88587_ip = 1423;
                    continue _fun88587
                }
            case 1360:
                var33 = _closure1_slot10;
                var32 = _closure1_slot0;
                var36 = _closure1_slot2;
                var30 = 27;
                var30 = var36[var30];
                var30 = var32.bind(var4)(var30);
                var32 = var30.Text;
                var30 = {
                    'variant': 'display-md',
                    'color': 'mobile-text-heading-primary'
                };
                var36 = var17.heroTitle;
                var30.style = var36;
                var30.children = var34;
                var31 = var33.bind(var4)(var32, var30);
            case 1423:
                var30 = new Array(3);
                var30[0] = var31;
                var31 = var0 != var35;
                if (!var31) {
                    _fun88587_ip = 1446;
                    continue _fun88587
                }
            case 1438:
                var32 = '';
                var31 = var32 !== var35;
            case 1446:
                if (!var31) {
                    _fun88587_ip = 1498;
                    continue _fun88587
                }
            case 1449:
                var34 = _closure1_slot10;
                var33 = _closure1_slot0;
                var36 = _closure1_slot2;
                var32 = 27;
                var32 = var36[var32];
                var32 = var33.bind(var4)(var32);
                var33 = var32.Text;
                var32 = {};
                var36 = 'text-md/medium';
                var32.variant = var36;
                var32.children = var35;
                var31 = var34.bind(var4)(var33, var32);
            case 1498:
                var30[1] = var31;
                var33 = _closure1_slot10;
                var32 = _closure1_slot5;
                var31 = {};
                var34 = var17.heroButtonContainer;
                var31.style = var34;
                var39 = _closure1_slot0;
                var36 = _closure1_slot2;
                var34 = 28;
                var34 = var36[var34];
                var34 = var39.bind(var4)(var34);
                var35 = var34.Button;
                var34 = {
                    'variant': 'tertiary',
                    'shrink': true,
                    'grow': false,
                    'size': 'sm'
                };
                var37 = var36[var27];
                var37 = var39.bind(var4)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var36[var27];
                var36 = var39.bind(var4)(var36);
                var36 = var36.t;
                var36 = var36.ynollq;
                var36 = var37.bind(var38)(var36);
                var34.text = var36;
                var36 = function() {
                    var2 = _closure2_slot2;
                    var1 = var2.push;
                    var0 = _closure1_slot8;
                    var0 = var0.QUESTS;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var34.onPress = var36;
                var34 = var33.bind(var4)(var35, var34);
                var31.children = var34;
                var31 = var33.bind(var4)(var32, var31);
                var30[2] = var31;
                var28.children = var30;
                var24 = var28;
            case 1650:
                var24 = var26.bind(var4)(var20, var24);
                var18.children = var24;
                var18 = var22.bind(var4)(var20, var18);
                var14[1] = var18;
                var12.children = var14;
                var11 = var11.storeListingId;
                var12 = var10.bind(var4)(var13, var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var14 = _closure1_slot10;
                var13 = _closure1_slot5;
                var12 = {};
                var18 = var17.heroProductsContainer;
                var17 = new Array(2);
                var17[0] = var18;
                if (var15) {
                    _fun88587_ip = 1768;
                    continue _fun88587
                }
            case 1722:
                var18 = {
                    'position': 'absolute',
                    'top': '55%',
                    'left': 0,
                    'right': 0
                };
                var22 = _closure1_slot0;
                var24 = _closure1_slot2;
                var20 = 30;
                var20 = var24[var20];
                var20 = var22.bind(var4)(var20);
                var20 = var20.COLLECTIBLES_SHOP_CARD_HEIGHT;
                var18.height = var20;
                _fun88587_ip = 1827;
                continue _fun88587;
            case 1768:
                var20 = {};
                var24 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 30;
                var22 = var26[var22];
                var22 = var24.bind(var4)(var22);
                var24 = var22.COLLECTIBLES_SHOP_CARD_HEIGHT;
                var22 = 0.5;
                var22 = var22 * var24;
                var20.bottom = var22;
                var22 = '100%';
                var20.height = var22;
                var18 = var20;
            case 1827:
                var17[1] = var18;
                var12.style = var17;
                var18 = _closure1_slot10;
                if (var15) {
                    _fun88587_ip = 2101;
                    continue _fun88587
                }
            case 1845:
                var17 = _closure1_slot12;
                var15 = {};
                var20 = var21.length;
                if (!(var23 !== var20)) {
                    _fun88587_ip = 2073;
                    continue _fun88587
                }
            case 1863:
                var24 = _closure1_slot10;
                var28 = _closure1_slot0;
                var26 = _closure1_slot2;
                var20 = 32;
                var20 = var26[var20];
                var20 = var28.bind(var4)(var20);
                var22 = var20.FlashList;
                var20 = {};
                var30 = true;
                var20.horizontal = var30;
                var30 = var26[var27];
                var30 = var28.bind(var4)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var27 = var26[var27];
                var27 = var28.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.pWG4ze;
                var27 = var30.bind(var31)(var27);
                var20.accessibilityLabel = var27;
                var20.data = var21;
                var27 = function arg0() {
                    var1 = arg0;
                    var0 = var1.item;
                    var8 = var1.index;
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CollectiblesAnalyticsProvider;
                    var1 = {};
                    var6 = {};
                    var6.tilePosition = var8;
                    var1.newValue = var6;
                    var6 = _closure1_slot1;
                    var5 = 30;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = {};
                    var7 = true;
                    var5.solidBackground = var7;
                    var5.product = var0;
                    var8 = _closure2_slot4;
                    var8 = var8.unpublishedAt;
                    var5.unpublishedAt = var8;
                    var7 = _closure2_slot1;
                    var5.preferVCPrice = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1.children = var5;
                    var0 = var0.skuId;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var20.renderItem = var27;
                var27 = 30;
                var27 = var26[var27];
                var27 = var28.bind(var4)(var27);
                var27 = var27.COLLECTIBLES_SHOP_CARD_WIDTH;
                var28 = _closure1_slot1;
                var26 = var26[var29];
                var26 = var28.bind(var4)(var26);
                var26 = var26.spacing;
                var26 = var26.PX_12;
                var26 = var27 + var26;
                var20.estimatedItemSize = var26;
                var26 = false;
                var20.showsHorizontalScrollIndicator = var26;
                var26 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var4 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 6;
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
                var20.ListHeaderComponent = var26;
                var26 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var4 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 6;
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
                var20.ListFooterComponent = var26;
                var25 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var4 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 6;
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
                var20.ItemSeparatorComponent = var25;
                var20.initialScrollIndex = var23;
                var20 = var24.bind(var4)(var22, var20);
                _fun88587_ip = 2089;
                continue _fun88587;
            case 2073:
                var25 = _closure1_slot10;
                var24 = _closure1_slot14;
                var22 = {};
                var20 = var25.bind(var4)(var24, var22);
            case 2089:
                var15.children = var20;
                var15 = var18.bind(var4)(var17, var15);
                _fun88587_ip = 2161;
                continue _fun88587;
            case 2101:
                var17 = _closure1_slot1;
                var20 = _closure1_slot2;
                var16 = 31;
                var16 = var20[var16];
                var17 = var17.bind(var4)(var16);
                var16 = {};
                var16.products = var21;
                var22 = var21.length;
                var20 = 4;
                if (!(var23 !== var22)) {
                    _fun88587_ip = 2145;
                    continue _fun88587
                }
            case 2140:
                var20 = var21.length;
            case 2145:
                var16.loadingCardsNum = var20;
                var16.preferVCPrice = var19;
                var15 = var18.bind(var4)(var17, var16);
            case 2161:
                var12.children = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 2185:
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2207:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4598, 660, 33, 1297, 671, 1464, 11476, 11478, 1469, 11356, 566, 3246, 11355, 3151, 3240, 11479, 11470, 795, 3206, 11481, 11482, 11357, 4902, 1234, 4098, 3941, 4084, 7740, 11287, 11483, 5753, 2]);