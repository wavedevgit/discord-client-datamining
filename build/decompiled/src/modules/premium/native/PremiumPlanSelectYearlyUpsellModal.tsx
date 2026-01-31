// modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var14.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.usePremiumPlanSelectStore;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PREMIUM_YEARLY_DISCOUNT_PERCENT;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.Fonts;
    var11 = 8;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var12 = 26;
    var8.marginHorizontal = var12;
    var3.container = var8;
    var12 = 'center';
    var8 = {
        'alignSelf': 'center',
        'marginVertical': 32
    };
    var3.image = var8;
    var8 = {};
    var13 = 10;
    var13 = var5[var13];
    var14 = var14.bind(var0)(var13);
    var13 = var10.DISPLAY_EXTRABOLD;
    var10 = 24;
    var16 = var14.bind(var0)(var13, var0, var10);
    var17 = var8;
    var10 = copyDataProperties(var17, var16);
    var10 = 'alignSelf';
    var8[var10] = var12;
    var10 = 'textAlign';
    var8[var10] = var12;
    var10 = 'paddingBottom';
    var8[var10] = var11;
    var10 = 11;
    var11 = var5[var10];
    var11 = var4.bind(var0)(var11);
    var12 = var11.DARK_WHITE_500_LIGHT_BLACK_500;
    var11 = 'color';
    var8[var11] = var12;
    var3.header = var8;
    var8 = {
        'alignSelf': 'center',
        'textAlign': 'center',
        'paddingBottom': 32
    };
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_WHITE_500_LIGHT_BLACK_500;
    var8.color = var10;
    var3.description = var8;
    var8 = {};
    var10 = 16;
    var8.marginBottom = var10;
    var3.upsellButton = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.continueButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PremiumPlanSelectYearlyUpsellModal, environment: var1
        _fun82463: for (var _fun82463_ip = 0;;) switch (_fun82463_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.onClose;
                var6 = var0.productId;
                var _closure2_slot0 = var6;
                var11 = var0.continueWithUpsell;
                var13 = var0.continueWithDefault;
                var _closure2_slot1 = var13;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var0 = _closure1_slot13;
                var15 = var0.bind(var4)();
                var1 = _closure1_slot9;
                var0 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.isPurchasing;
                    return var0;
                };
                var3 = var1.bind(var4)(var0);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 12;
                var0 = var8[var0];
                var1 = var7.bind(var4)(var0);
                var0 = var1.getPremiumBundledItemsFromProductId;
                var0 = var0.bind(var1)(var6);
                var1 = 13;
                var6 = var8[var1];
                var12 = var7.bind(var4)(var6);
                var10 = var12.useStateFromStores;
                var6 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var2
                    var0 = _closure1_slot7;
                    var0 = var0.locale;
                    return var0;
                };
                var6 = var10.bind(var12)(var9, var6);
                var1 = var8[var1];
                var9 = var7.bind(var4)(var1);
                var8 = var9.useStateFromStoresArray;
                var1 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var2
                    var2 = _closure1_slot8;
                    var1 = var2.getProduct;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = var2.isBusy;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var8 = var8.bind(var9)(var7, var1);
                var7 = _closure1_slot3;
                var1 = 2;
                var7 = var7.bind(var4)(var8, var1);
                var1 = 0;
                var23 = var7[var1];
                var1 = 1;
                var1 = var7[var1];
                var12 = var3;
                if (var12) {
                    _fun82463_ip = 222;
                    continue _fun82463
                }
            case 219:
                var12 = var1;
            case 222:
                var29 = var0.premiumTier;
                var0 = null;
                var1 = var0 == var29;
                if (var1) {
                    _fun82463_ip = 241;
                    continue _fun82463
                }
            case 237:
                var1 = var0 == var23;
            case 241:
                _closure2_slot2 = var1;
                var7 = _closure1_slot4;
                var3 = var7.useEffect;
                var2 = function() { // Environment: var2
                    _fun82467: for (var _fun82467_ip = 0;;) switch (_fun82467_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun82467_ip = 20;
                                continue _fun82467
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 20:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var7)(var2);
                if (var1) {
                    _fun82463_ip = 928;
                    continue _fun82463
                }
            case 272:
                var19 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 14;
                var1 = var14[var1];
                var3 = var19.bind(var4)(var1);
                var2 = var3.formatPercent;
                var7 = _closure1_slot10;
                var1 = 100;
                var1 = var7 / var1;
                var25 = var2.bind(var3)(var6, var1);
                var3 = _closure1_slot11;
                var10 = _closure1_slot1;
                var1 = 15;
                var1 = var14[var1];
                var2 = var10.bind(var4)(var1);
                var1 = {};
                var1.onClose = var5;
                var5 = true;
                var1.noDefaultButtons = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var15.container;
                var5.style = var8;
                var9 = _closure1_slot5;
                var8 = {};
                var16 = var15.image;
                var8.style = var16;
                var16 = 16;
                var16 = var14[var16];
                var16 = var10.bind(var4)(var16);
                var8.source = var16;
                var9 = var3.bind(var4)(var9, var8);
                var8 = new Array(5);
                var8[0] = var9;
                var9 = 17;
                var16 = var14[var9];
                var16 = var19.bind(var4)(var16);
                var20 = var16.LegacyText;
                var16 = {};
                var18 = var15.header;
                var16.style = var18;
                var18 = 18;
                var21 = var14[var18];
                var21 = var19.bind(var4)(var21);
                var26 = var21.intl;
                var24 = var26.format;
                var21 = var14[var18];
                var21 = var19.bind(var4)(var21);
                var21 = var21.t;
                var22 = var21.LQCVfK;
                var21 = {};
                var21.discountPercentage = var25;
                var27 = 19;
                var27 = var14[var27];
                var28 = var19.bind(var4)(var27);
                var27 = var28.getPremiumTypeDisplayName;
                var27 = var27.bind(var28)(var29);
                var21.planName = var27;
                var21 = var24.bind(var26)(var22, var21);
                var16.children = var21;
                var16 = var3.bind(var4)(var20, var16);
                var8[1] = var16;
                var9 = var14[var9];
                var9 = var19.bind(var4)(var9);
                var16 = var9.LegacyText;
                var9 = {};
                var20 = var15.description;
                var9.style = var20;
                var20 = var14[var18];
                var20 = var19.bind(var4)(var20);
                var24 = var20.intl;
                var22 = var24.format;
                var20 = var14[var18];
                var20 = var19.bind(var4)(var20);
                var20 = var20.t;
                var21 = var20["7chOVL"];
                var20 = {};
                var20.discountPercentage = var25;
                var20 = var22.bind(var24)(var21, var20);
                var9.children = var20;
                var9 = var3.bind(var4)(var16, var9);
                var8[2] = var9;
                var16 = 20;
                var9 = var14[var16];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var20 = var14[var16];
                var20 = var19.bind(var4)(var20);
                var20 = var20.ButtonColors;
                var20 = var20.GREEN;
                var9.color = var20;
                var20 = var15.upsellButton;
                var9.style = var20;
                var20 = var14[var18];
                var20 = var19.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.formatToPlainString;
                var14 = var14[var18];
                var14 = var19.bind(var4)(var14);
                var14 = var14.t;
                var19 = var14.Qvq6GE;
                var14 = {};
                var24 = var0 == var23;
                var22 = undefined;
                if (var24) {
                    _fun82463_ip = 743;
                    continue _fun82463
                }
            case 737:
                var22 = var23.priceString;
            case 743:
                var14.price = var22;
                var14 = var20.bind(var21)(var19, var14);
                var9.text = var14;
                var9.onPress = var11;
                var9.disabled = var12;
                var9 = var3.bind(var4)(var10, var9);
                var8[3] = var9;
                var11 = _closure1_slot11;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = var14[var16];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var17 = _closure1_slot0;
                var16 = var14[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.ButtonColors;
                var16 = var16.LIGHTGREY;
                var9.color = var16;
                var15 = var15.continueButton;
                var9.style = var15;
                var15 = var14[var18];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.YwEyQM;
                var14 = var15.bind(var16)(var14);
                var9.text = var14;
                var9.onPress = var13;
                var9.disabled = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[4] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 928:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1676, 4575, 7225, 1615, 483, 33, 1297, 4645, 4835, 7093, 566, 1604, 3896, 10533, 4839, 1234, 3068, 4836, 2]);