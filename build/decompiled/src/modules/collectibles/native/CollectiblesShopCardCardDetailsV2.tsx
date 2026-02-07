// modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var10 = 2;
    var3 = var5[var10];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var11 = 3;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerticalGradient;
    var _closure1_slot6 = var3;
    var15 = 4;
    var3 = var5[var15];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'height': '50%',
        'width': '100%',
        'padding': 10,
        'flex': 1,
        'bottom': 0,
        'overflow': 'hidden',
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-end'
    };
    var13 = 6;
    var16 = var5[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var9.borderRadius = var16;
    var3.regularMetadataContainer = var9;
    var9 = {};
    var9.marginBottom = var15;
    var3.assetName = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'width': '100%'
    };
    var13 = var5[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.gap = var13;
    var3.priceVariantsContainer = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var3.priceDescription = var9;
    var9 = {};
    var9.flexShrink = var12;
    var3.text = var9;
    var9 = {};
    var9.paddingLeft = var11;
    var3.discountPercentage = var9;
    var9 = {
        'marginTop': 0,
        'marginRight': 3
    };
    var3.wheelIcon = var9;
    var9 = {};
    var9.paddingBottom = var10;
    var3.androidTextPadding = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun88054: for (var _fun88054_ip = 0;;) switch (_fun88054_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.product;
                var5 = var0.isPremiumUser;
                var _closure2_slot0 = var5;
                var7 = var0.styles;
                var4 = var0.collectibleProductState;
                var2 = var0.isFetchingGoogleSkus;
                var8 = var0.preferVCPrice;
                var1 = var0.isDisabled;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var3 = 7;
                var6 = var15[var3];
                var3 = undefined;
                var9 = var14.bind(var3)(var6);
                var6 = var9.useDefaultVariantIndex;
                var10 = var6.bind(var9)(var11);
                var6 = 8;
                var6 = var15[var6];
                var9 = var14.bind(var3)(var6);
                var6 = var9.getSelectedProduct;
                var10 = var6.bind(var9)(var11, var10);
                var _closure2_slot1 = var10;
                var6 = 9;
                var6 = var15[var6];
                var11 = var14.bind(var3)(var6);
                var9 = var11.getFormattedPriceForCollectiblesProduct;
                var6 = true;
                var13 = var9.bind(var11)(var10, var5, var6);
                var9 = 10;
                var9 = var15[var9];
                var16 = var14.bind(var3)(var9);
                var11 = var16.isVirtualCurrencyEnabled;
                var9 = {};
                var17 = 'CollectiblesShopCardCardDetailsV2.PriceDescription';
                var9.location = var17;
                var9 = var11.bind(var16)(var9);
                var9 = var9.enabled;
                var _closure2_slot2 = var9;
                var17 = _closure1_slot3;
                var18 = var17.useMemo;
                var16 = new Array(2);
                var16[0] = var10;
                var16[1] = var5;
                var11 = function() { // Environment: var12
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getProductOrbPrice;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.product = var4;
                    var3 = _closure2_slot0;
                    var0.isPremiumUser = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var18.bind(var17)(var11, var16);
                var _closure2_slot3 = var11;
                var18 = var17.useMemo;
                var16 = new Array(2);
                var16[0] = var10;
                var16[1] = var5;
                var10 = function() { // Environment: var12
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getProductDiscount;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = var0.discountPercentage;
                    return var0;
                };
                var16 = var18.bind(var17)(var10, var16);
                var10 = 12;
                var10 = var15[var10];
                var14 = var14.bind(var3)(var10);
                var10 = var14.useFetchVirtualCurrencyBalance;
                var10 = var10.bind(var14)();
                var10 = var10.balance;
                var _closure2_slot4 = var10;
                var15 = var17.useMemo;
                var14 = new Array(3);
                var14[0] = var10;
                var14[1] = var9;
                var14[2] = var11;
                var12 = function() { // Environment: var12
                    _fun88057: for (var _fun88057_ip = 0;;) switch (_fun88057_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun88057_ip = 58;
                                continue _fun88057
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun88057_ip = 58;
                                continue _fun88057
                            }
                        case 31:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!var2) {
                                _fun88057_ip = 58;
                                continue _fun88057
                            }
                        case 40:
                            var2 = _closure2_slot3;
                            var2 = var2.amount;
                            var1 = _closure2_slot4;
                            var0 = var2 <= var1;
                        case 58:
                            return var0;
                    }
                };
                var12 = var15.bind(var17)(var12, var14);
                if (!var2) {
                    _fun88054_ip = 332;
                    continue _fun88054
                }
            case 323:
                var2 = null;
                if (!(var2 != var13)) {
                    _fun88054_ip = 1751;
                    continue _fun88054
                }
            case 332:
                var2 = 'partiallyOwnedBundle';
                if (!(var2 !== var4)) {
                    _fun88054_ip = 1618;
                    continue _fun88054
                }
            case 345:
                var2 = 'purchased';
                if (!(var2 !== var4)) {
                    _fun88054_ip = 1485;
                    continue _fun88054
                }
            case 356:
                var2 = 'nitroUpsell';
                if (!(var2 !== var4)) {
                    _fun88054_ip = 1352;
                    continue _fun88054
                }
            case 367:
                var2 = 'nitroClaim';
                if (!(var2 !== var4)) {
                    _fun88054_ip = 1217;
                    continue _fun88054
                }
            case 380:
                if (var1) {
                    _fun88054_ip = 1082;
                    continue _fun88054
                }
            case 386:
                var4 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = null;
                if (!(var1 != var11)) {
                    _fun88054_ip = 427;
                    continue _fun88054
                }
            case 400:
                if (!(var1 != var10)) {
                    _fun88054_ip = 427;
                    continue _fun88054
                }
            case 404:
                if (!var9) {
                    _fun88054_ip = 427;
                    continue _fun88054
                }
            case 407:
                if (!(var6 !== var8)) {
                    _fun88054_ip = 783;
                    continue _fun88054
                }
            case 414:
                if (var12) {
                    _fun88054_ip = 783;
                    continue _fun88054
                }
            case 420:
                if (!(var1 != var13)) {
                    _fun88054_ip = 783;
                    continue _fun88054
                }
            case 427:
                var1 = {};
                var6 = var7.priceDescription;
                var1.style = var6;
                var6 = var5;
                if (!var6) {
                    _fun88054_ip = 505;
                    continue _fun88054
                }
            case 445:
                var9 = _closure1_slot7;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 18;
                var5 = var10[var5];
                var5 = var8.bind(var3)(var5);
                var8 = var5.NitroWheelIcon;
                var5 = {
                    'size': 'xs',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = var7.wheelIcon;
                var5.style = var10;
                var6 = var9.bind(var3)(var8, var5);
            case 505:
                var5 = new Array(3);
                var5[0] = var6;
                var10 = _closure1_slot7;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 14;
                var6 = var15[var8];
                var6 = var18.bind(var3)(var6);
                var9 = var6.Text;
                var6 = {
                    'variant': 'text-xs/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var17 = var7.text;
                var14 = new Array(2);
                var14[0] = var17;
                var17 = 17;
                var15 = var15[var17];
                var18 = var18.bind(var3)(var15);
                var15 = var18.isAndroid;
                var15 = var15.bind(var18)();
                if (!var15) {
                    _fun88054_ip = 596;
                    continue _fun88054
                }
            case 590:
                var15 = var7.androidTextPadding;
            case 596:
                var14[1] = var15;
                var6.style = var14;
                var6.children = var13;
                var6 = var10.bind(var3)(var9, var6);
                var5[1] = var6;
                var6 = 0;
                var6 = var16 > var6;
                if (!var6) {
                    _fun88054_ip = 770;
                    continue _fun88054
                }
            case 630:
                var10 = _closure1_slot7;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = var14[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'color': 'text-feedback-positive',
                    'variant': 'text-xs/semibold',
                    'lineClamp': 1
                };
                var18 = var7.discountPercentage;
                var13 = new Array(3);
                var13[0] = var18;
                var18 = var7.text;
                var13[1] = var18;
                var14 = var14[var17];
                var15 = var15.bind(var3)(var14);
                var14 = var15.isAndroid;
                var15 = var14.bind(var15)();
                var14 = undefined;
                if (!var15) {
                    _fun88054_ip = 723;
                    continue _fun88054
                }
            case 717:
                var14 = var7.androidTextPadding;
            case 723:
                var13[2] = var14;
                var8.style = var13;
                var13 = global;
                var13 = var13.HermesInternal;
                var15 = var13.concat;
                var14 = '-';
                var13 = '%';
                var13 = var15.bind(var14)(var16, var13);
                var8.children = var13;
                var6 = var10.bind(var3)(var9, var8);
            case 770:
                var5[2] = var6;
                var1.children = var5;
                _fun88054_ip = 1071;
                continue _fun88054;
            case 783:
                var5 = {};
                var8 = var7.priceDescription;
                var6 = new Array(2);
                var6[0] = var8;
                var8 = {};
                var9 = 1;
                var10 = false;
                if (!(var10 === var12)) {
                    _fun88054_ip = 820;
                    continue _fun88054
                }
            case 810:
                var9 = 0.5;
            case 820:
                var8.opacity = var9;
                var6[1] = var8;
                var5.style = var6;
                var10 = _closure1_slot7;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 16;
                var6 = var15[var6];
                var6 = var14.bind(var3)(var6);
                var8 = var6.OrbsIcon;
                var6 = {
                    'size': 'xxs',
                    'color': 'mobile-text-heading-primary'
                };
                var9 = var7.wheelIcon;
                var6.style = var9;
                var8 = var10.bind(var3)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var8 = 14;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var12 = 15;
                var13 = var15[var12];
                var13 = var14.bind(var3)(var13);
                var17 = var13.intl;
                var16 = var17.formatToPlainString;
                var12 = var15[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.W4DfeF;
                var12 = {};
                var18 = var11.amount;
                var12.orbAmount = var18;
                var12 = var16.bind(var17)(var13, var12);
                var8.accessibilityLabel = var12;
                var13 = var7.text;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = 17;
                var13 = var15[var13];
                var14 = var14.bind(var3)(var13);
                var13 = var14.isAndroid;
                var13 = var13.bind(var14)();
                if (!var13) {
                    _fun88054_ip = 1036;
                    continue _fun88054
                }
            case 1030:
                var13 = var7.androidTextPadding;
            case 1036:
                var12[1] = var13;
                var8.style = var12;
                var11 = var11.amount;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var6[1] = var8;
                var5.children = var6;
                var1 = var5;
            case 1071:
                var1 = var4.bind(var3)(var2, var1);
                _fun88054_ip = 1215;
                continue _fun88054;
            case 1082:
                var5 = _closure1_slot7;
                var4 = _closure1_slot4;
                var2 = {};
                var6 = var7.priceDescription;
                var2.style = var6;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 14;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var8 = var6.Text;
                var6 = {
                    'variant': 'text-xs/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var9 = var7.text;
                var6.style = var9;
                var9 = 15;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.wu4gyV;
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var5.bind(var3)(var8, var6);
                var2.children = var6;
                var1 = var5.bind(var3)(var4, var2);
            case 1215:
                return var1;
            case 1217:
                var4 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var7.priceDescription;
                var1.style = var5;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 14;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var8 = var7.text;
                var5.style = var8;
                var8 = 15;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.rt69oo;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var4.bind(var3)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 1352:
                var4 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var7.priceDescription;
                var1.style = var5;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 14;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var8 = var7.text;
                var5.style = var8;
                var8 = 15;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.sEAnVH;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var4.bind(var3)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 1485:
                var4 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var7.priceDescription;
                var1.style = var5;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 14;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var8 = var7.text;
                var5.style = var8;
                var8 = 15;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["6cfuDj"];
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var4.bind(var3)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 1618:
                var4 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var7.priceDescription;
                var1.style = var5;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 14;
                var5 = var11[var5];
                var5 = var10.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var7 = var7.text;
                var5.style = var7;
                var7 = 15;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.BEjTij;
                var7 = var8.bind(var9)(var7);
                var5.children = var7;
                var5 = var4.bind(var3)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 1751:
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.CollectiblesShopPricePlaceholder;
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var7 = var7.bind(var6)(var3);
    var _closure1_slot10 = var7;
    var3 = 'PriceDescription';
    var7.displayName = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var11 = var0.product;
        var16 = var0.collectibleProductState;
        var14 = var0.preferVCPrice;
        var13 = var0.isDisabled;
        var0 = _closure1_slot9;
        var3 = undefined;
        var17 = var0.bind(var3)();
        var5 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 19;
        var0 = var12[var0];
        var1 = var5.bind(var3)(var0);
        var0 = var1.useCurrentUser;
        var2 = var0.bind(var1)();
        var9 = _closure1_slot1;
        var0 = 20;
        var0 = var12[var0];
        var1 = var9.bind(var3)(var0);
        var0 = var1.canUseCollectibles;
        var18 = var0.bind(var1)(var2);
        var0 = 21;
        var0 = var12[var0];
        var2 = var5.bind(var3)(var0);
        var1 = var2.useToken;
        var0 = 6;
        var0 = var12[var0];
        var0 = var9.bind(var3)(var0);
        var0 = var0.colors;
        var0 = var0.BACKGROUND_BASE_LOW;
        var8 = var1.bind(var2)(var0);
        var0 = 22;
        var1 = var12[var0];
        var4 = var5.bind(var3)(var1);
        var2 = var4.hexToRgbaString;
        var1 = var12[var0];
        var10 = var5.bind(var3)(var1);
        var6 = var10.hexWithOpacity;
        var1 = 0.75;
        var1 = var6.bind(var10)(var8, var1);
        var10 = var2.bind(var4)(var1);
        var1 = var12[var0];
        var2 = var5.bind(var3)(var1);
        var1 = var2.hexToRgbaString;
        var0 = var12[var0];
        var6 = var5.bind(var3)(var0);
        var4 = var6.hexWithOpacity;
        var0 = 0;
        var0 = var4.bind(var6)(var8, var0);
        var19 = var1.bind(var2)(var0);
        var0 = 23;
        var0 = var12[var0];
        var1 = var5.bind(var3)(var0);
        var0 = var1.useBaseProductName;
        var6 = var0.bind(var1)(var11);
        var0 = 24;
        var0 = var12[var0];
        var4 = var5.bind(var3)(var0);
        var2 = var4.useStateFromStores;
        var0 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.isFetchingGoogleSkus;
            var0 = var0.bind(var1)();
            return var0;
        };
        var15 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot8;
        var0 = 25;
        var0 = var12[var0];
        var1 = var9.bind(var3)(var0);
        var0 = {};
        var20 = var17.regularMetadataContainer;
        var4 = new Array(1);
        var4[0] = var20;
        var0.style = var4;
        var4 = new Array(3);
        var4[0] = var19;
        var4[1] = var10;
        var4[2] = var8;
        var0.colors = var4;
        var4 = _closure1_slot6;
        var8 = var4.START;
        var0.start = var8;
        var4 = var4.END;
        var0.end = var4;
        var10 = _closure1_slot7;
        var4 = 14;
        var4 = var12[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'heading-sm/bold',
            'color': 'mobile-text-heading-primary',
            'lineClamp': 1,
            'accessibilityRole': 'header'
        };
        var8 = var17.assetName;
        var4.style = var8;
        var4.children = var6;
        var5 = var10.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var6 = _closure1_slot4;
        var5 = {};
        var8 = var17.priceVariantsContainer;
        var5.style = var8;
        var8 = _closure1_slot10;
        var7 = {};
        var7.product = var11;
        var7.isPremiumUser = var18;
        var7.styles = var17;
        var7.collectibleProductState = var16;
        var7.isFetchingGoogleSkus = var15;
        var7.preferVCPrice = var14;
        var7.isDisabled = var13;
        var8 = var10.bind(var3)(var8, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var8 = 26;
        var8 = var12[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8.product = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var5.children = var7;
        var5 = var2.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4611, 660, 33, 1297, 671, 11353, 4613, 11325, 3345, 4599, 10131, 11380, 4878, 1234, 9640, 478, 5800, 9570, 3111, 3153, 3241, 11381, 566, 4098, 11382, 2]);