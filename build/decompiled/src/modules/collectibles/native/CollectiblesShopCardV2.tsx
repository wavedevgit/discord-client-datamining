// modules/collectibles/native/CollectiblesShopCardV2.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun87478: for (var _fun87478_ip = 0;;) switch (_fun87478_ip) {
        case 0:
            var6 = require;
            var13 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var13;
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
            var1 = 1;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var3 = var1.PixelRatio;
            var1 = 2;
            var1 = var7[var1];
            var1 = var13.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var5 = var1.jsx;
            var _closure1_slot5 = var5;
            var1 = var1.jsxs;
            var _closure1_slot6 = var1;
            var1 = var3.getFontScale;
            var3 = var1.bind(var3)();
            var1 = 1.78;
            var1 = var3 >= var1;
            var3 = 170;
            if (!var1) {
                _fun87478_ip = 178;
                continue _fun87478
            }
        case 172:
            var3 = 302;
        case 178:
            var1 = 4;
            var1 = var7[var1];
            var10 = var6.bind(var0)(var1);
            var9 = var10.createStyles;
            var5 = {};
            var11 = {
                'height': null,
                'width': 150,
                'display': 'flex',
                'borderWidth': 1,
                'borderRadius': null,
                'overflow': 'hidden'
            };
            var11.height = var3;
            var1 = 150;
            var12 = 5;
            var14 = var7[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.sm;
            var11.borderRadius = var14;
            var12 = var7[var12];
            var12 = var13.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BORDER_SUBTLE;
            var11.borderColor = var12;
            var5.card = var11;
            var11 = {
                'position': 'absolute',
                'top': 6,
                'right': 6,
                'zIndex': 2
            };
            var5.premiumWheel = var11;
            var5 = var9.bind(var10)(var5);
            var _closure1_slot7 = var5;
            var5 = function(arg0) { // Original name: CollectiblesShopCardInternalV2, environment: var4
                _fun87479: for (var _fun87479_ip = 0;;) switch (_fun87479_ip) {
                    case 0:
                        var0 = arg0;
                        var11 = var0.product;
                        var4 = var0.onPress;
                        var15 = var0.unpublishedAt;
                        var10 = var0.collectibleProductState;
                        var14 = var0.solidBackground;
                        var9 = var0.preferVCPrice;
                        var8 = var0.isDisabled;
                        var3 = undefined;
                        if (!(var8 === var3)) {
                            _fun87479_ip = 52;
                            continue _fun87479
                        }
                    case 50:
                        var8 = false;
                    case 52:
                        var1 = var0.cardWidth;
                        var0 = _closure1_slot7;
                        var16 = var0.bind(var3)();
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 6;
                        var0 = var6[var0];
                        var7 = var2.bind(var3)(var0);
                        var6 = var7.useStateFromStores;
                        var0 = _closure1_slot4;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var0 = function() { // Environment: var0
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.isThemeDark;
                            var0 = _closure1_slot4;
                            var0 = var0.theme;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var13 = var6.bind(var7)(var2, var0);
                        var6 = null;
                        if (!(var6 == var1)) {
                            _fun87479_ip = 138;
                            continue _fun87479
                        }
                    case 127:
                        var18 = {};
                        var0 = 150;
                        var18.width = var0;
                        _fun87479_ip = 147;
                        continue _fun87479;
                    case 138:
                        var0 = {};
                        var0.width = var1;
                        var18 = var0;
                    case 147:
                        var2 = _closure1_slot6;
                        var7 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var0 = 8;
                        var0 = var12[var0];
                        var0 = var7.bind(var3)(var0);
                        var1 = var0.PressableOpacity;
                        var0 = {};
                        var19 = var16.card;
                        var17 = new Array(2);
                        var17[0] = var19;
                        var17[1] = var18;
                        var0.style = var17;
                        var0.onPress = var4;
                        var4 = 0.8;
                        var0.activeOpacity = var4;
                        var4 = 'button';
                        var0.accessibilityRole = var4;
                        var4 = 9;
                        var4 = var12[var4];
                        var7 = var7.bind(var3)(var4);
                        var4 = var7.shouldShowLimitedTimeBadge;
                        var4 = var4.bind(var7)(var15);
                        if (var4) {
                            _fun87479_ip = 326;
                            continue _fun87479
                        }
                    case 254:
                        var4 = 'nitroClaim';
                        var6 = null;
                        if (!(var4 === var10)) {
                            _fun87479_ip = 324;
                            continue _fun87479
                        }
                    case 266:
                        var12 = _closure1_slot5;
                        var7 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var4 = 11;
                        var4 = var17[var4];
                        var4 = var7.bind(var3)(var4);
                        var7 = var4.NitroWheelIcon;
                        var4 = {};
                        var16 = var16.premiumWheel;
                        var4.style = var16;
                        var16 = 'mobile-text-heading-primary';
                        var4.color = var16;
                        var6 = var12.bind(var3)(var7, var4);
                    case 324:
                        _fun87479_ip = 363;
                        continue _fun87479;
                    case 326:
                        var12 = _closure1_slot5;
                        var7 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var4 = 10;
                        var4 = var16[var4];
                        var7 = var7.bind(var3)(var4);
                        var4 = {};
                        var4.unpublishedAt = var15;
                        var6 = var12.bind(var3)(var7, var4);
                    case 363:
                        var4 = new Array(3);
                        var4[0] = var6;
                        var12 = _closure1_slot5;
                        var7 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var6 = 12;
                        var6 = var15[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = {};
                        var6.solidBackground = var14;
                        var6.product = var11;
                        var6.isDarkTheme = var13;
                        var13 = 'purchased';
                        var13 = var13 === var10;
                        if (var13) {
                            _fun87479_ip = 433;
                            continue _fun87479
                        }
                    case 423:
                        var14 = 'partiallyOwnedBundle';
                        var13 = var14 === var10;
                    case 433:
                        var6.isPurchased = var13;
                        var6.isDisabled = var8;
                        var6 = var12.bind(var3)(var7, var6);
                        var4[1] = var6;
                        var7 = _closure1_slot5;
                        var6 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var5 = 13;
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
            var _closure1_slot8 = var5;
            var5 = var8.memo;
            var4 = function(arg0) { // Environment: var4
                _fun87481: for (var _fun87481_ip = 0;;) switch (_fun87481_ip) {
                    case 0:
                        var1 = arg0;
                        var13 = var1.product;
                        var _closure2_slot0 = var13;
                        var10 = var1.unpublishedAt;
                        var9 = var1.solidBackground;
                        var8 = var1.preferVCPrice;
                        var6 = var1.cardWidth;
                        var3 = undefined;
                        var _closure2_slot4 = var3;
                        var _closure2_slot5 = var3;
                        var14 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var1 = 14;
                        var1 = var18[var1];
                        var2 = var14.bind(var3)(var1);
                        var1 = var2.useDefaultVariantIndex;
                        var5 = var1.bind(var2)(var13);
                        var1 = 15;
                        var1 = var18[var1];
                        var2 = var14.bind(var3)(var1);
                        var1 = var2.getSelectedProduct;
                        var17 = var1.bind(var2)(var13, var5);
                        var2 = _closure1_slot1;
                        var1 = 16;
                        var1 = var18[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var3)();
                        var1 = var1.analyticsLocations;
                        var _closure2_slot1 = var1;
                        var11 = _closure1_slot3;
                        var7 = var11.useCallback;
                        var5 = new Array(2);
                        var5[0] = var1;
                        var5[1] = var13;
                        var1 = function() { // Environment: var0
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 17;
                            var2 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.hideActionSheet;
                            var2 = var2.bind(var4)();
                            var2 = _closure1_slot0;
                            var1 = 18;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openProductDetailsActionSheet;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.product = var5;
                            var4 = _closure2_slot1;
                            var1.analyticsLocations = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var12 = var7.bind(var11)(var1, var5);
                        var1 = 19;
                        var1 = var18[var1];
                        var7 = var14.bind(var3)(var1);
                        var5 = var7.useTrackProductCardImpression;
                        var1 = var13.skuId;
                        var1 = var5.bind(var7)(var1);
                        var5 = var1.handleCardVisibilityChange;
                        var1 = 20;
                        var1 = var18[var1];
                        var7 = var14.bind(var3)(var1);
                        var1 = var7.useCurrentUser;
                        var7 = var1.bind(var7)();
                        var1 = 21;
                        var1 = var18[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.canUseCollectibles;
                        var2 = var1.bind(var2)(var7);
                        var1 = 22;
                        var1 = var18[var1];
                        var7 = var14.bind(var3)(var1);
                        var1 = var7.useProductPurchaseState;
                        var1 = var1.bind(var7)(var17);
                        var15 = var1.isPurchased;
                        var _closure2_slot2 = var15;
                        var16 = var1.isPartiallyOwnedBundle;
                        var _closure2_slot3 = var16;
                        var1 = 23;
                        var1 = var18[var1];
                        var11 = var14.bind(var3)(var1);
                        var7 = var11.useProductDisableState;
                        var1 = var17.skuId;
                        var1 = var7.bind(var11)(var1);
                        var7 = var1.isDisabled;
                        var11 = 9;
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
                            _fun87481_ip = 381;
                            continue _fun87481
                        }
                    case 378:
                        var14 = !var2;
                    case 381:
                        if (!var14) {
                            _fun87481_ip = 387;
                            continue _fun87481
                        }
                    case 384:
                        var14 = !var11;
                    case 387:
                        _closure2_slot4 = var14;
                        var17 = var11;
                        if (var17) {
                            _fun87481_ip = 406;
                            continue _fun87481
                        }
                    case 397:
                        if (!var1) {
                            _fun87481_ip = 403;
                            continue _fun87481
                        }
                    case 400:
                        var1 = var2;
                    case 403:
                        var17 = var1;
                    case 406:
                        _closure2_slot5 = var17;
                        var11 = _closure1_slot3;
                        var2 = var11.useMemo;
                        var1 = new Array(4);
                        var1[0] = var17;
                        var1[1] = var16;
                        var1[2] = var15;
                        var1[3] = var14;
                        var0 = function() { // Environment: var0
                            _fun87483: for (var _fun87483_ip = 0;;) switch (_fun87483_ip) {
                                case 0:
                                    var2 = _closure2_slot2;
                                    var1 = true;
                                    if (!(var2 !== var1)) {
                                        _fun87483_ip = 63;
                                        continue _fun87483
                                    }
                                case 13:
                                    var2 = _closure2_slot3;
                                    if (!(var2 !== var1)) {
                                        _fun87483_ip = 55;
                                        continue _fun87483
                                    }
                                case 21:
                                    var2 = _closure2_slot4;
                                    if (!(var2 !== var1)) {
                                        _fun87483_ip = 49;
                                        continue _fun87483
                                    }
                                case 29:
                                    var0 = _closure2_slot5;
                                    if (!(var0 !== var1)) {
                                        _fun87483_ip = 41;
                                        continue _fun87483
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
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var0 = 24;
                        var0 = var14[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var0.onChange = var5;
                        var5 = _closure1_slot8;
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
            var5 = 25;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3155, 33, 1297, 671, 566, 3165, 4858, 4556, 11253, 5707, 11254, 11257, 11256, 4570, 5684, 3237, 11264, 11309, 9437, 3068, 11261, 11285, 11311, 2]);