// modules/collectibles/native/InlinePriceTag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var12 = 0;
    var6 = var5[var12];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var11 = 2;
    var3 = var5[var11];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsSections;
    var _closure1_slot6 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.priceTag = var9;
    var9 = {
        'textDecorationLine': 'line-through',
        'textDecorationStyle': 'solid',
        'opacity': 0.7
    };
    var6.strikedPrice = var9;
    var9 = {};
    var6.regularPrice = var9;
    var9 = {
        'width': 20,
        'height': 20,
        'marginLeft': 8,
        'marginRight': 4
    };
    var6.nitroIcon = var9;
    var9 = {};
    var9.marginLeft = var12;
    var6.nitroIconSubscribeNow = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'justifyContent': 'space-between'
    };
    var6.container = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.priceTagRow = var9;
    var9 = {
        'flexDirection': 'column',
        'alignItems': 'flex-start'
    };
    var6.priceTagColumn = var9;
    var9 = {};
    var12 = 'underline';
    var9.textDecorationLine = var12;
    var6.underline = var9;
    var9 = {
        'marginBottom': 4294967294,
        'marginTop': null,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var12 = 6;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginTop = var12;
    var6.subscribeNowPressable = var9;
    var9 = {};
    var9.paddingBottom = var11;
    var6.androidTextPadding = var9;
    var9 = {};
    var9.marginRight = var10;
    var6.orbsIcon = var9;
    var9 = {};
    var10 = 0.5;
    var9.opacity = var10;
    var6.disabled = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var6 = function(arg0) { // Original name: PriceTag, environment: var1
        _fun87153: for (var _fun87153_ip = 0;;) switch (_fun87153_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.priceFormatted;
                var12 = var0.style;
                var10 = var0.color;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun87153_ip = 31;
                    continue _fun87153
                }
            case 25:
                var10 = 'interactive-text-active';
            case 31:
                var6 = var0.icon;
                var13 = var0.variant;
                if (!(var13 === var3)) {
                    _fun87153_ip = 49;
                    continue _fun87153
                }
            case 45:
                var13 = 'text-md/medium';
            case 49:
                var9 = var0.accessibilityLabel;
                var0 = _closure1_slot10;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var1 = _closure1_slot8;
                var0 = {};
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 7;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var5.variant = var13;
                var13 = var11.priceTag;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var5.style = var11;
                var5.color = var10;
                var5.accessibilityLabel = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var6;
    var6 = function(arg0) { // Original name: OrbsPriceTag, environment: var1
        _fun87154: for (var _fun87154_ip = 0;;) switch (_fun87154_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.vcData;
                var7 = var0.isProductDisabled;
                var0 = _closure1_slot10;
                var4 = undefined;
                var15 = var0.bind(var4)();
                var1 = var13.enabled;
                var12 = null;
                var0 = null;
                if (!var1) {
                    _fun87154_ip = 340;
                    continue _fun87154
                }
            case 43:
                var1 = var13.price;
                var1 = var12 != var1;
                var0 = null;
                if (!var1) {
                    _fun87154_ip = 340;
                    continue _fun87154
                }
            case 61:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var15.priceTagRow;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var13.canAfford;
                var6 = !var6;
                if (var6) {
                    _fun87154_ip = 100;
                    continue _fun87154
                }
            case 97:
                var6 = var7;
            case 100:
                if (!var6) {
                    _fun87154_ip = 108;
                    continue _fun87154
                }
            case 103:
                var6 = var15.disabled;
            case 108:
                var5[1] = var6;
                var1.style = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot11;
                var5 = {};
                var10 = var13.price;
                var11 = var12 == var10;
                var9 = undefined;
                if (var11) {
                    _fun87154_ip = 156;
                    continue _fun87154
                }
            case 141:
                var11 = var10.amount;
                var10 = var11.toString;
                var9 = var10.bind(var11)();
            case 156:
                var5.priceFormatted = var9;
                var9 = 'text-md/semibold';
                var5.variant = var9;
                var11 = _closure1_slot7;
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 8;
                var8 = var14[var8];
                var8 = var9.bind(var4)(var8);
                var10 = var8.OrbsIcon;
                var8 = {
                    'color': 'interactive-text-active',
                    'size': 'sm'
                };
                var15 = var15.orbsIcon;
                var8.style = var15;
                var8 = var11.bind(var4)(var10, var8);
                var5.icon = var8;
                var8 = 9;
                var10 = var14[var8];
                var10 = var9.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var8 = var14[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.t;
                var9 = var8["a/Y8PK"];
                var8 = {};
                var13 = var13.price;
                var14 = var12 == var13;
                var12 = undefined;
                if (var14) {
                    _fun87154_ip = 309;
                    continue _fun87154
                }
            case 294:
                var14 = var13.amount;
                var13 = var14.toString;
                var12 = var13.bind(var14)();
            case 309:
                var8.orbAmount = var12;
                var8 = var10.bind(var11)(var9, var8);
                var5.accessibilityLabel = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 340:
                return var0;
        }
    };
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        _fun87155: for (var _fun87155_ip = 0;;) switch (_fun87155_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'backgroundColor': 'rgba(46, 204, 113, 0.25)',
                    'flexDirection': 'row',
                    'flexShrink': 1,
                    'borderRadius': null,
                    'paddingHorizontal': 6,
                    'marginLeft': 6
                };
                var6 = 1;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var5 = var4[var2];
                var2 = undefined;
                var5 = var7.bind(var2)(var5);
                var5 = var5.radii;
                var5 = var5.xs;
                var5 = var5 - var6;
                var1.borderRadius = var5;
                var6 = _closure1_slot0;
                var5 = 19;
                var4 = var4[var5];
                var6 = var6.bind(var2)(var4);
                var4 = var6.isAndroid;
                var6 = var4.bind(var6)();
                var4 = undefined;
                if (!var6) {
                    _fun87155_ip = 98;
                    continue _fun87155
                }
            case 96:
                var4 = 0;
            case 98:
                var1.paddingTop = var4;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var4 = var4.bind(var2)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                var2 = undefined;
                if (!var3) {
                    _fun87155_ip = 138;
                    continue _fun87155
                }
            case 135:
                var2 = 2;
            case 138:
                var1.paddingBottom = var2;
                var0.discount = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = function(arg0) { // Original name: BundleDiscountV2, environment: var1
        _fun87156: for (var _fun87156_ip = 0;;) switch (_fun87156_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.product;
                var2 = var0.eligibleForPremiumDiscount;
                var0 = _closure1_slot13;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 21;
                var0 = var7[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getProductDiscount;
                var0 = var0.bind(var1)(var3, var2);
                var9 = var0.discountPercentage;
                var0 = 0;
                var1 = var9 <= var0;
                var0 = null;
                if (var1) {
                    _fun87156_ip = 182;
                    continue _fun87156
                }
            case 77:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var6.discount;
                var1.style = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 7;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-md/normal',
                    'color': 'text-feedback-positive'
                };
                var8 = ['-'];
                var8[1] = var9;
                var9 = '%';
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 182:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/InlinePriceTag.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: InlinePriceTag, environment: var1
        _fun87157: for (var _fun87157_ip = 0;;) switch (_fun87157_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.product;
                var1 = _closure1_slot10;
                var3 = undefined;
                var16 = var1.bind(var3)();
                var _closure2_slot0 = var16;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useCurrentUser;
                var7 = var1.bind(var5)();
                var5 = _closure1_slot1;
                var1 = 11;
                var1 = var4[var1];
                var6 = var5.bind(var3)(var1);
                var1 = var6.canUseCollectibles;
                var19 = var1.bind(var6)(var7);
                var1 = 12;
                var1 = var4[var1];
                var5 = var5.bind(var3)(var1);
                var1 = _closure1_slot6;
                var1 = var1.SHOP_PRODUCT_DETAILS;
                var15 = var5.bind(var3)(var1);
                var1 = 13;
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var5 = var6.useProductDisableState;
                var1 = var20.skuId;
                var1 = var5.bind(var6)(var1);
                var6 = var1.isDisabled;
                var8 = 14;
                var1 = var4[var8];
                var9 = var2.bind(var3)(var1);
                var7 = var9.getFormattedPriceForCollectiblesProduct;
                var1 = false;
                var5 = true;
                var23 = var7.bind(var9)(var20, var1, var5);
                var1 = 15;
                var1 = var4[var1];
                var7 = var2.bind(var3)(var1);
                var1 = var7.useVirtualCurrencyData;
                var7 = var1.bind(var7)(var20, var19);
                var1 = 16;
                var1 = var4[var1];
                var9 = var2.bind(var3)(var1);
                var4 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var29
                    var1 = _closure1_slot5;
                    var0 = var1.isFetchingGoogleSkus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var4.bind(var9)(var2, var1);
                if (!var1) {
                    _fun87157_ip = 254;
                    continue _fun87157
                }
            case 245:
                var1 = null;
                if (!(var1 != var23)) {
                    _fun87157_ip = 1342;
                    continue _fun87157
                }
            case 254:
                var4 = null;
                if (!(var4 != var23)) {
                    _fun87157_ip = 1289;
                    continue _fun87157
                }
            case 263:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getFormattedPriceForCollectiblesProduct;
                var30 = var1.bind(var2)(var20, var5, var5);
                var5 = _closure1_slot9;
                var2 = _closure1_slot4;
                var1 = {};
                var8 = var16.container;
                var1.style = var8;
                var8 = {};
                var9 = var16.priceTagColumn;
                var8.style = var9;
                var9 = {};
                var10 = var16.priceTagRow;
                var9.style = var10;
                var14 = _closure1_slot7;
                var13 = _closure1_slot11;
                var10 = {};
                var10.priceFormatted = var23;
                var11 = 'heading-md/semibold';
                if (!var19) {
                    _fun87157_ip = 362;
                    continue _fun87157
                }
            case 360:
                var11 = undefined;
            case 362:
                var10.variant = var11;
                if (var19) {
                    _fun87157_ip = 377;
                    continue _fun87157
                }
            case 369:
                var11 = var16.regularPrice;
                _fun87157_ip = 383;
                continue _fun87157;
            case 377:
                var11 = var16.strikedPrice;
            case 383:
                var10.style = var11;
                var24 = 'interactive-text-active';
                var10.color = var24;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var25 = 9;
                var17 = var11[var25];
                var17 = var12.bind(var3)(var17);
                var22 = var17.intl;
                var21 = var22.formatToPlainString;
                var17 = var11[var25];
                var17 = var12.bind(var3)(var17);
                var17 = var17.t;
                var18 = var17.sPvyr8;
                var17 = {};
                var17.price = var23;
                var17 = var21.bind(var22)(var18, var17);
                var10.accessibilityLabel = var17;
                var13 = var14.bind(var3)(var13, var10);
                var10 = new Array(3);
                var10[0] = var13;
                var13 = var20.type;
                var18 = 18;
                var11 = var11[var18];
                var11 = var12.bind(var3)(var11);
                var11 = var11.CollectiblesItemType;
                var12 = var11.BUNDLE;
                var11 = null;
                if (!(var13 === var12)) {
                    _fun87157_ip = 546;
                    continue _fun87157
                }
            case 515:
                var11 = null;
                if (var19) {
                    _fun87157_ip = 546;
                    continue _fun87157
                }
            case 520:
                var14 = _closure1_slot7;
                var13 = _closure1_slot14;
                var12 = {};
                var12.product = var20;
                var12.eligibleForPremiumDiscount = var19;
                var11 = var14.bind(var3)(var13, var12);
            case 546:
                var10[1] = var11;
                var11 = var4 != var30;
                if (!var11) {
                    _fun87157_ip = 560;
                    continue _fun87157
                }
            case 557:
                var11 = var19;
            case 560:
                if (!var11) {
                    _fun87157_ip = 771;
                    continue _fun87157
                }
            case 566:
                var14 = _closure1_slot7;
                var13 = _closure1_slot11;
                var12 = {
                    'priceFormatted': null,
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-active'
                };
                var12.priceFormatted = var30;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = var22[var25];
                var17 = var21.bind(var3)(var17);
                var27 = var17.intl;
                var26 = var27.formatToPlainString;
                var17 = var22[var25];
                var17 = var21.bind(var3)(var17);
                var17 = var17.t;
                var23 = var17.kWkpdG;
                var17 = {};
                var17.price = var30;
                var17 = var26.bind(var27)(var23, var17);
                var12.accessibilityLabel = var17;
                var17 = 19;
                var17 = var22[var17];
                var21 = var21.bind(var3)(var17);
                var17 = var21.isAndroid;
                var21 = var17.bind(var21)();
                var17 = undefined;
                if (!var21) {
                    _fun87157_ip = 693;
                    continue _fun87157
                }
            case 687:
                var17 = var16.androidTextPadding;
            case 693:
                var12.style = var17;
                var22 = _closure1_slot7;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var17 = 20;
                var17 = var23[var17];
                var17 = var21.bind(var3)(var17);
                var21 = var17.NitroWheelIcon;
                var17 = {};
                var23 = 'interactive-text-default';
                if (!var19) {
                    _fun87157_ip = 741;
                    continue _fun87157
                }
            case 738:
                var23 = var24;
            case 741:
                var17.color = var23;
                var23 = var16.nitroIcon;
                var17.style = var23;
                var17 = var22.bind(var3)(var21, var17);
                var12.icon = var17;
                var11 = var14.bind(var3)(var13, var12);
            case 771:
                var10[2] = var11;
                var9.children = var10;
                var10 = var5.bind(var3)(var2, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var4 != var30;
                if (!var10) {
                    _fun87157_ip = 803;
                    continue _fun87157
                }
            case 800:
                var10 = !var19;
            case 803:
                if (!var10) {
                    _fun87157_ip = 1204;
                    continue _fun87157
                }
            case 809:
                var13 = _closure1_slot9;
                var12 = _closure1_slot4;
                var11 = {};
                var14 = var16.priceTagRow;
                var11.style = var14;
                var17 = _closure1_slot3;
                var14 = {};
                var14.onPress = var15;
                var15 = var16.subscribeNowPressable;
                var14.style = var15;
                var22 = _closure1_slot7;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var15 = 20;
                var15 = var23[var15];
                var15 = var21.bind(var3)(var15);
                var21 = var15.NitroWheelIcon;
                var15 = {};
                var23 = 'interactive-text-default';
                if (!var19) {
                    _fun87157_ip = 893;
                    continue _fun87157
                }
            case 890:
                var23 = var24;
            case 893:
                var15.color = var23;
                var24 = var16.nitroIcon;
                var23 = new Array(2);
                var23[0] = var24;
                var24 = var16.nitroIconSubscribeNow;
                var23[1] = var24;
                var15.style = var23;
                var15 = var22.bind(var3)(var21, var15);
                var21 = new Array(2);
                var21[0] = var15;
                var24 = _closure1_slot7;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var15 = 7;
                var15 = var27[var15];
                var15 = var26.bind(var3)(var15);
                var23 = var15.Text;
                var22 = {
                    'variant': 'text-md/normal',
                    'color': 'interactive-text-default'
                };
                var15 = 19;
                var15 = var27[var15];
                var26 = var26.bind(var3)(var15);
                var15 = var26.isAndroid;
                var26 = var15.bind(var26)();
                var15 = undefined;
                if (!var26) {
                    _fun87157_ip = 1015;
                    continue _fun87157
                }
            case 1009:
                var15 = var16.androidTextPadding;
            case 1015:
                var22.style = var15;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var26 = var15[var25];
                var26 = var16.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.format;
                var25 = var15[var25];
                var25 = var16.bind(var3)(var25);
                var25 = var25.t;
                var26 = var25.Kxw2LT;
                var25 = {};
                var25.price = var30;
                var29 = function(arg0, arg1) { // Original name: subscribeNowHook, environment: var29
                    var4 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {};
                    var0 = 'text-md/normal';
                    var1.variant = var0;
                    var0 = _closure2_slot0;
                    var0 = var0.underline;
                    var1.style = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var25.subscribeNowHook = var29;
                var25 = var27.bind(var28)(var26, var25);
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var21[1] = var22;
                var14.children = var21;
                var17 = var13.bind(var3)(var17, var14);
                var14 = new Array(2);
                var14[0] = var17;
                var17 = var20.type;
                var15 = var15[var18];
                var15 = var16.bind(var3)(var15);
                var15 = var15.CollectiblesItemType;
                var16 = var15.BUNDLE;
                var15 = null;
                if (!(var17 === var16)) {
                    _fun87157_ip = 1190;
                    continue _fun87157
                }
            case 1159:
                var15 = null;
                if (!var19) {
                    _fun87157_ip = 1190;
                    continue _fun87157
                }
            case 1164:
                var18 = _closure1_slot7;
                var17 = _closure1_slot14;
                var16 = {};
                var16.product = var20;
                var16.eligibleForPremiumDiscount = var19;
                var15 = var18.bind(var3)(var17, var16);
            case 1190:
                var14[1] = var15;
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 1204:
                var9[1] = var10;
                var8.children = var9;
                var9 = var5.bind(var3)(var2, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var7.enabled;
                if (!var9) {
                    _fun87157_ip = 1244;
                    continue _fun87157
                }
            case 1234:
                var10 = var7.price;
                var9 = var4 != var10;
            case 1244:
                if (!var9) {
                    _fun87157_ip = 1273;
                    continue _fun87157
                }
            case 1247:
                var12 = _closure1_slot7;
                var11 = _closure1_slot12;
                var10 = {};
                var10.vcData = var7;
                var10.isProductDisabled = var6;
                var9 = var12.bind(var3)(var11, var10);
            case 1273:
                var8[1] = var9;
                var1.children = var8;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 1289:
                var2 = var7.enabled;
                var1 = null;
                if (!var2) {
                    _fun87157_ip = 1340;
                    continue _fun87157
                }
            case 1299:
                var2 = var7.price;
                var2 = var4 != var2;
                var1 = null;
                if (!var2) {
                    _fun87157_ip = 1340;
                    continue _fun87157
                }
            case 1314:
                var5 = _closure1_slot7;
                var4 = _closure1_slot12;
                var2 = {};
                var2.vcData = var7;
                var2.isProductDisabled = var6;
                var1 = var5.bind(var3)(var4, var2);
            case 1340:
                return var1;
            case 1342:
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 17;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.CollectiblesShopPricePlaceholder;
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4575, 660, 33, 1297, 671, 3900, 9514, 1234, 9444, 3068, 11239, 11240, 11164, 11241, 566, 11215, 3452, 478, 5711, 4563, 2]);