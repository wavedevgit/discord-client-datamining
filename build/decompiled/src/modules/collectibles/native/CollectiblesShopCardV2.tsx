// modules/collectibles/native/CollectiblesShopCardV2.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun87315: for (var _fun87315_ip = 0;;) switch (_fun87315_ip) {
        case 0:
            var6 = require;
            var14 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var14;
            var _closure1_slot2 = var7;
            var0 = global;
            var5 = var0.Object;
            var3 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var5)(var2, var0, var1);
            var0 = 0;
            var3 = var7[var0];
            var1 = metroImportAll;
            var0 = undefined;
            var8 = var1.bind(var0)(var3);
            var _closure1_slot3 = var8;
            var12 = 1;
            var1 = var7[var12];
            var1 = var6.bind(var0)(var1);
            var3 = var1.PixelRatio;
            var1 = var1.View;
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var7[var1];
            var1 = var14.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var5 = var1.jsx;
            var _closure1_slot6 = var5;
            var1 = var1.jsxs;
            var _closure1_slot7 = var1;
            var1 = var3.getFontScale;
            var3 = var1.bind(var3)();
            var1 = 1.78;
            var1 = var3 >= var1;
            var3 = 170;
            if (!var1) {
                _fun87315_ip = 187;
                continue _fun87315
            }
        case 181:
            var3 = 302;
        case 187:
            var1 = 4;
            var1 = var7[var1];
            var10 = var6.bind(var0)(var1);
            var9 = var10.createStyles;
            var5 = {};
            var11 = {
                'position': 'relative',
                'height': null,
                'width': 150,
                'display': 'flex',
                'borderWidth': 1,
                'borderRadius': null,
                'overflow': 'hidden'
            };
            var11.height = var3;
            var1 = 150;
            var13 = 5;
            var15 = var7[var13];
            var15 = var14.bind(var0)(var15);
            var15 = var15.radii;
            var15 = var15.sm;
            var11.borderRadius = var15;
            var13 = var7[var13];
            var13 = var14.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BORDER_SUBTLE;
            var11.borderColor = var13;
            var5.card = var11;
            var11 = {
                'position': 'absolute',
                'top': 6,
                'left': 6,
                'right': 6,
                'zIndex': 2,
                'display': 'flex',
                'flexDirection': 'row',
                'gap': 4,
                'justifyContent': 'space-between',
                'alignItems': 'flex-start'
            };
            var5.topRowOverlay = var11;
            var11 = {};
            var11.flexShrink = var12;
            var5.badge = var11;
            var11 = {
                'marginLeft': 'auto',
                'flexShrink': 0
            };
            var5.wishlistButton = var11;
            var5 = var9.bind(var10)(var5);
            var _closure1_slot8 = var5;
            var5 = function arg0() {
                _fun87316: for (var _fun87316_ip = 0;;) switch (_fun87316_ip) {
                    case 0:
                        var1 = arg0;
                        var11 = var1.product;
                        var15 = var1.onPress;
                        var25 = var1.unpublishedAt;
                        var10 = var1.collectibleProductState;
                        var14 = var1.solidBackground;
                        var9 = var1.preferVCPrice;
                        var8 = var1.isDisabled;
                        var3 = undefined;
                        if (!(var8 === var3)) {
                            _fun87316_ip = 54;
                            continue _fun87316
                        }
                    case 52:
                        var8 = false;
                    case 54:
                        var2 = var1.cardWidth;
                        var _closure2_slot0 = var3;
                        var _closure2_slot1 = var3;
                        var _closure2_slot2 = var3;
                        var1 = _closure1_slot8;
                        var24 = var1.bind(var3)();
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 6;
                        var1 = var7[var1];
                        var13 = var4.bind(var3)(var1);
                        var12 = var13.useStateFromStores;
                        var1 = _closure1_slot5;
                        var6 = new Array(1);
                        var6[0] = var1;
                        var1 = function() { // Environment: var0
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.isThemeDark;
                            var0 = _closure1_slot5;
                            var0 = var0.theme;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var13 = var12.bind(var13)(var6, var1);
                        var1 = 8;
                        var1 = var7[var1];
                        var6 = var4.bind(var3)(var1);
                        var1 = var6.useDefaultVariantIndex;
                        var6 = var1.bind(var6)(var11);
                        var1 = 9;
                        var1 = var7[var1];
                        var4 = var4.bind(var3)(var1);
                        var1 = var4.getSelectedProduct;
                        var7 = var1.bind(var4)(var11, var6);
                        var17 = null;
                        if (!(var17 == var2)) {
                            _fun87316_ip = 197;
                            continue _fun87316
                        }
                    case 186:
                        var19 = {};
                        var1 = 150;
                        var19.width = var1;
                        _fun87316_ip = 206;
                        continue _fun87316;
                    case 197:
                        var1 = {};
                        var1.width = var2;
                        var19 = var1;
                    case 206:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var1 = var6[var1];
                        var2 = var4.bind(var3)(var1);
                        var1 = var2.useCurrentUser;
                        var12 = var1.bind(var2)();
                        var1 = 11;
                        var1 = var6[var1];
                        var16 = var4.bind(var3)(var1);
                        var2 = var16.useMobileWishlistOwnerExperiment;
                        var1 = 'CollectiblesShopCardInternalV2';
                        var1 = var2.bind(var16)(var1);
                        var16 = var1.showWishlistButtonInProductCard;
                        var1 = 12;
                        var1 = var6[var1];
                        var2 = var4.bind(var3)(var1);
                        var1 = var2.isWishlistableCollectiblesProduct;
                        var1 = var1.bind(var2)(var7);
                        var2 = 13;
                        var2 = var6[var2];
                        var6 = var4.bind(var3)(var2);
                        var4 = var6.useWishlistButtonState;
                        var2 = {};
                        var2.currentUser = var12;
                        var7 = var7.skuId;
                        var2.skuId = var7;
                        var2 = var4.bind(var6)(var2);
                        var23 = var2.isWishlisted;
                        _closure2_slot0 = var23;
                        var21 = var2.isBusy;
                        var22 = var2.handleToggle;
                        _closure2_slot1 = var22;
                        if (!var16) {
                            _fun87316_ip = 375;
                            continue _fun87316
                        }
                    case 364:
                        var2 = 'purchased';
                        var2 = var2 === var10;
                        var16 = !var2;
                    case 375:
                        var20 = !var1;
                        var1 = var16;
                        if (!var16) {
                            _fun87316_ip = 387;
                            continue _fun87316
                        }
                    case 384:
                        var1 = !var20;
                    case 387:
                        if (!var1) {
                            _fun87316_ip = 393;
                            continue _fun87316
                        }
                    case 390:
                        var1 = !var21;
                    case 393:
                        _closure2_slot2 = var1;
                        var4 = _closure1_slot3;
                        var6 = var4.useMemo;
                        var2 = new Array(2);
                        var2[0] = var1;
                        var2[1] = var23;
                        var1 = function() { // Environment: var0
                            _fun87318: for (var _fun87318_ip = 0;;) switch (_fun87318_ip) {
                                case 0:
                                    var2 = _closure2_slot2;
                                    var7 = undefined;
                                    var0 = undefined;
                                    if (!var2) {
                                        _fun87318_ip = 123;
                                        continue _fun87318
                                    }
                                case 14:
                                    var2 = {};
                                    var3 = 'toggleWishlist';
                                    var2.name = var3;
                                    var1 = _closure2_slot0;
                                    var6 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var3 = 14;
                                    var4 = var8[var3];
                                    var4 = var6.bind(var7)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.string;
                                    var3 = var8[var3];
                                    var3 = var6.bind(var7)(var3);
                                    var3 = var3.t;
                                    if (var1) {
                                        _fun87318_ip = 95;
                                        continue _fun87318
                                    }
                                case 80:
                                    var1 = var3["8DkMEQ"];
                                    var1 = var4.bind(var5)(var1);
                                    _fun87318_ip = 108;
                                    continue _fun87318;
                                case 95:
                                    var3 = var3.yr9TTf;
                                    var1 = var4.bind(var5)(var3);
                                case 108:
                                    var2.label = var1;
                                    var1 = new Array(1);
                                    var1[0] = var2;
                                    var0 = var1;
                                case 123:
                                    return var0;
                            }
                        };
                        var12 = var6.bind(var4)(var1, var2);
                        var2 = var4.useCallback;
                        var1 = new Array(1);
                        var1[0] = var22;
                        var0 = function(arg0) { // Environment: var0
                            _fun87319: for (var _fun87319_ip = 0;;) switch (_fun87319_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.nativeEvent;
                                    var1 = var0.actionName;
                                    var0 = 'toggleWishlist';
                                    if (!(var0 === var1)) {
                                        _fun87319_ip = 38;
                                        continue _fun87319
                                    }
                                case 25:
                                    var1 = _closure2_slot1;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 38:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var2.bind(var4)(var0, var1);
                        var2 = _closure1_slot7;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 15;
                        var0 = var7[var0];
                        var0 = var6.bind(var3)(var0);
                        var1 = var0.PressableOpacity;
                        var0 = {};
                        var26 = var24.card;
                        var18 = new Array(2);
                        var18[0] = var26;
                        var18[1] = var19;
                        var0.style = var18;
                        var0.onPress = var15;
                        var15 = 0.8;
                        var0.activeOpacity = var15;
                        var15 = 'button';
                        var0.accessibilityRole = var15;
                        var0.accessibilityActions = var12;
                        var0.onAccessibilityAction = var4;
                        var4 = 16;
                        var4 = var7[var4];
                        var6 = var6.bind(var3)(var4);
                        var4 = var6.shouldShowLimitedTimeBadge;
                        var18 = var4.bind(var6)(var25);
                        var4 = 'nitroClaim';
                        var15 = var4 === var10;
                        if (var18) {
                            _fun87316_ip = 595;
                            continue _fun87316
                        }
                    case 584:
                        if (var15) {
                            _fun87316_ip = 595;
                            continue _fun87316
                        }
                    case 587:
                        var6 = null;
                        if (!var16) {
                            _fun87316_ip = 818;
                            continue _fun87316
                        }
                    case 595:
                        var12 = _closure1_slot7;
                        var7 = _closure1_slot4;
                        var4 = {};
                        var19 = var24.topRowOverlay;
                        var4.style = var19;
                        if (var18) {
                            _fun87316_ip = 673;
                            continue _fun87316
                        }
                    case 618:
                        var17 = null;
                        if (!var15) {
                            _fun87316_ip = 671;
                            continue _fun87316
                        }
                    case 623:
                        var19 = _closure1_slot6;
                        var18 = _closure1_slot0;
                        var26 = _closure1_slot2;
                        var15 = 18;
                        var15 = var26[var15];
                        var15 = var18.bind(var3)(var15);
                        var18 = var15.NitroWheelIcon;
                        var15 = {};
                        var26 = 'mobile-text-heading-primary';
                        var15.color = var26;
                        var17 = var19.bind(var3)(var18, var15);
                    case 671:
                        _fun87316_ip = 720;
                        continue _fun87316;
                    case 673:
                        var19 = _closure1_slot6;
                        var18 = _closure1_slot1;
                        var26 = _closure1_slot2;
                        var15 = 17;
                        var15 = var26[var15];
                        var18 = var18.bind(var3)(var15);
                        var15 = {};
                        var15.unpublishedAt = var25;
                        var25 = var24.badge;
                        var15.style = var25;
                        var17 = var19.bind(var3)(var18, var15);
                    case 720:
                        var15 = new Array(2);
                        var15[0] = var17;
                        if (!var16) {
                            _fun87316_ip = 804;
                            continue _fun87316
                        }
                    case 731:
                        var19 = _closure1_slot6;
                        var18 = _closure1_slot0;
                        var25 = _closure1_slot2;
                        var17 = 19;
                        var17 = var25[var17];
                        var17 = var18.bind(var3)(var17);
                        var18 = var17.WishlistButtonBase;
                        var17 = {};
                        var24 = var24.wishlistButton;
                        var17.style = var24;
                        var17.isWishlisted = var23;
                        var17.onPress = var22;
                        var17.busy = var21;
                        var17.disabled = var20;
                        var20 = true;
                        var17.accessibilityHidden = var20;
                        var16 = var19.bind(var3)(var18, var17);
                    case 804:
                        var15[1] = var16;
                        var4.children = var15;
                        var6 = var12.bind(var3)(var7, var4);
                    case 818:
                        var4 = new Array(3);
                        var4[0] = var6;
                        var12 = _closure1_slot6;
                        var7 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var6 = 20;
                        var6 = var15[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = {};
                        var6.solidBackground = var14;
                        var6.product = var11;
                        var6.isDarkTheme = var13;
                        var13 = 'purchased';
                        var13 = var13 === var10;
                        if (var13) {
                            _fun87316_ip = 888;
                            continue _fun87316
                        }
                    case 878:
                        var14 = 'partiallyOwnedBundle';
                        var13 = var14 === var10;
                    case 888:
                        var6.isPurchased = var13;
                        var6.isDisabled = var8;
                        var6 = var12.bind(var3)(var7, var6);
                        var4[1] = var6;
                        var7 = _closure1_slot6;
                        var6 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var5 = 21;
                        var5 = var12[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = {};
                        var5.product = var11;
                        var5.collectibleProductState = var10;
                        var5.preferVCPrice = var9;
                        var5.isDisabled = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[2] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot9 = var5;
            var5 = var8.memo;
            var4 = function(arg0) { // Environment: var4
                _fun87320: for (var _fun87320_ip = 0;;) switch (_fun87320_ip) {
                    case 0:
                        var1 = arg0;
                        var13 = var1.product;
                        var _closure2_slot0 = var13;
                        var10 = var1.unpublishedAt;
                        var9 = var1.solidBackground;
                        var8 = var1.preferVCPrice;
                        var6 = var1.cardWidth;
                        var3 = undefined;
                        var _closure2_slot5 = var3;
                        var _closure2_slot6 = var3;
                        var14 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var1 = 8;
                        var1 = var18[var1];
                        var2 = var14.bind(var3)(var1);
                        var1 = var2.useDefaultVariantIndex;
                        var1 = var1.bind(var2)(var13);
                        var _closure2_slot1 = var1;
                        var2 = 9;
                        var2 = var18[var2];
                        var5 = var14.bind(var3)(var2);
                        var2 = var5.getSelectedProduct;
                        var17 = var2.bind(var5)(var13, var1);
                        var2 = _closure1_slot1;
                        var5 = 22;
                        var5 = var18[var5];
                        var5 = var2.bind(var3)(var5);
                        var5 = var5.bind(var3)();
                        var12 = var5.analyticsLocations;
                        var _closure2_slot2 = var12;
                        var11 = _closure1_slot3;
                        var7 = var11.useCallback;
                        var5 = new Array(3);
                        var5[0] = var12;
                        var5[1] = var13;
                        var5[2] = var1;
                        var1 = function() { // Environment: var0
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 23;
                            var2 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.hideActionSheet;
                            var2 = var2.bind(var4)();
                            var2 = _closure1_slot0;
                            var1 = 24;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openProductDetailsActionSheet;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.product = var5;
                            var5 = _closure2_slot1;
                            var1.initialVariantIndex = var5;
                            var4 = _closure2_slot2;
                            var1.analyticsLocations = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var12 = var7.bind(var11)(var1, var5);
                        var1 = 25;
                        var1 = var18[var1];
                        var7 = var14.bind(var3)(var1);
                        var5 = var7.useTrackProductCardImpression;
                        var1 = var13.skuId;
                        var1 = var5.bind(var7)(var1);
                        var5 = var1.handleCardVisibilityChange;
                        var1 = 10;
                        var1 = var18[var1];
                        var7 = var14.bind(var3)(var1);
                        var1 = var7.useCurrentUser;
                        var7 = var1.bind(var7)();
                        var1 = 26;
                        var1 = var18[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.canUseCollectibles;
                        var2 = var1.bind(var2)(var7);
                        var1 = 27;
                        var1 = var18[var1];
                        var7 = var14.bind(var3)(var1);
                        var1 = var7.useProductPurchaseState;
                        var1 = var1.bind(var7)(var17);
                        var15 = var1.isPurchased;
                        var _closure2_slot3 = var15;
                        var16 = var1.isPartiallyOwnedBundle;
                        var _closure2_slot4 = var16;
                        var1 = 28;
                        var1 = var18[var1];
                        var11 = var14.bind(var3)(var1);
                        var7 = var11.useProductDisableState;
                        var1 = var17.skuId;
                        var1 = var7.bind(var11)(var1);
                        var7 = var1.isDisabled;
                        var11 = 16;
                        var1 = var18[var11];
                        var19 = var14.bind(var3)(var1);
                        var1 = var19.isPremiumCollectiblesProduct;
                        var1 = var1.bind(var19)(var17);
                        var11 = var18[var11];
                        var14 = var14.bind(var3)(var11);
                        var11 = var14.isFreeCollectiblesProduct;
                        var11 = var11.bind(var14)(var17);
                        var14 = var1;
                        if (!var1) {
                            _fun87320_ip = 389;
                            continue _fun87320
                        }
                    case 386:
                        var14 = !var2;
                    case 389:
                        if (!var14) {
                            _fun87320_ip = 395;
                            continue _fun87320
                        }
                    case 392:
                        var14 = !var11;
                    case 395:
                        _closure2_slot5 = var14;
                        var17 = var11;
                        if (var17) {
                            _fun87320_ip = 414;
                            continue _fun87320
                        }
                    case 405:
                        if (!var1) {
                            _fun87320_ip = 411;
                            continue _fun87320
                        }
                    case 408:
                        var1 = var2;
                    case 411:
                        var17 = var1;
                    case 414:
                        _closure2_slot6 = var17;
                        var11 = _closure1_slot3;
                        var2 = var11.useMemo;
                        var1 = new Array(4);
                        var1[0] = var17;
                        var1[1] = var16;
                        var1[2] = var15;
                        var1[3] = var14;
                        var0 = function() { // Environment: var0
                            _fun87322: for (var _fun87322_ip = 0;;) switch (_fun87322_ip) {
                                case 0:
                                    var2 = _closure2_slot3;
                                    var1 = true;
                                    if (!(var2 !== var1)) {
                                        _fun87322_ip = 63;
                                        continue _fun87322
                                    }
                                case 13:
                                    var2 = _closure2_slot4;
                                    if (!(var2 !== var1)) {
                                        _fun87322_ip = 55;
                                        continue _fun87322
                                    }
                                case 21:
                                    var2 = _closure2_slot5;
                                    if (!(var2 !== var1)) {
                                        _fun87322_ip = 49;
                                        continue _fun87322
                                    }
                                case 29:
                                    var0 = _closure2_slot6;
                                    if (!(var0 !== var1)) {
                                        _fun87322_ip = 41;
                                        continue _fun87322
                                    }
                                case 37:
                                    var0 = null;
                                    return var0;
                                case 41:
                                    var0 = 'nitroClaim';
                                    return var0;
                                case 49:
                                    var0 = 'nitroUpsell';
                                    return var0;
                                case 55:
                                    var0 = 'partiallyOwnedBundle';
                                    return var0;
                                case 63:
                                    var0 = 'purchased';
                                    return var0;
                            }
                        };
                        var11 = var2.bind(var11)(var0, var1);
                        var2 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var0 = 29;
                        var0 = var14[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var0.onChange = var5;
                        var5 = _closure1_slot9;
                        var4 = {};
                        var4.product = var13;
                        var4.onPress = var12;
                        var4.collectibleProductState = var11;
                        var4.unpublishedAt = var10;
                        var4.solidBackground = var9;
                        var4.preferVCPrice = var8;
                        var4.isDisabled = var7;
                        var4.cardWidth = var6;
                        var4 = var2.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var4 = var5.bind(var8)(var4);
            var5 = 30;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/collectibles/native/CollectiblesShopCardV2.tsx';
            var5 = var6.bind(var7)(var5);
            var2.default = var4;
            var2.COLLECTIBLES_SHOP_CARD_HEIGHT = var3;
            var2.COLLECTIBLES_SHOP_CARD_WIDTH = var1;
            var1 = 180;
            var2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH = var1;
            var1 = 16;
            var2.COLLECTIBLES_SHOP_CARD_GAP = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3196, 33, 1297, 671, 566, 3206, 11291, 4613, 9500, 11292, 11293, 11294, 1234, 4902, 4599, 11305, 5749, 11306, 11311, 11313, 5726, 3278, 11318, 11358, 3109, 11309, 11333, 11360, 2]);