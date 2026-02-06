// modules/premium/native/PremiumPlanActionSheetHeader.tsx
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
    var9 = 0;
    var6 = var5[var9];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PremiumTypes;
    var _closure1_slot4 = var6;
    var3 = var3.SubscriptionIntervalTypes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 112,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.header = var8;
    var8 = {
        'position': 'absolute',
        'top': 16,
        'left': 16
    };
    var3.logoContainer = var8;
    var8 = {
        'position': 'absolute',
        'height': 90
    };
    var3.imgWumpus = var8;
    var8 = {};
    var11 = {};
    var10 = -1;
    var11.scaleX = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var8.transform = var10;
    var3.imgWumpusRight = var8;
    var8 = {};
    var8.bottom = var9;
    var3.imgWumpusBottom = var8;
    var8 = {};
    var9 = 10;
    var8.marginTop = var9;
    var3.discountPill = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/PremiumPlanActionSheetHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57847: for (var _fun57847_ip = 0;;) switch (_fun57847_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.premiumType;
                var _closure2_slot0 = var13;
                var21 = var1.trialOffer;
                var18 = var1.discountOffer;
                var1 = _closure1_slot8;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var8 = function() {
                    _fun57848: for (var _fun57848_ip = 0;;) switch (_fun57848_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot4;
                            var1 = var1.TIER_0;
                            if (!(var1 !== var2)) {
                                _fun57848_ip = 84;
                                continue _fun57848
                            }
                        case 24:
                            var1 = _closure1_slot4;
                            var1 = var1.TIER_1;
                            if (!(var1 !== var2)) {
                                _fun57848_ip = 80;
                                continue _fun57848
                            }
                        case 38:
                            var1 = _closure1_slot4;
                            var1 = var1.TIER_2;
                            if (!(var1 !== var2)) {
                                _fun57848_ip = 56;
                                continue _fun57848
                            }
                        case 52:
                            var1 = undefined;
                            return var1;
                        case 56:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        case 80:
                            var1 = null;
                            return var1;
                        case 84:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var14 = null;
                var17 = var14 != var21;
                if (!var17) {
                    _fun57847_ip = 110;
                    continue _fun57847
                }
            case 54:
                var0 = var21.subscription_trial;
                var2 = var14 == var0;
                var1 = undefined;
                if (var2) {
                    _fun57847_ip = 75;
                    continue _fun57847
                }
            case 69:
                var1 = var0.sku_id;
            case 75:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getSkuIdForPremiumType;
                var0 = var0.bind(var2)(var13);
                var17 = var1 === var0;
            case 110:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 7;
                var0 = var0[var4];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getPlanIdForPremiumType;
                var0 = _closure1_slot5;
                var0 = var0.MONTH;
                var5 = var1.bind(var2)(var13, var0);
                var15 = var14 != var18;
                if (!var15) {
                    _fun57847_ip = 193;
                    continue _fun57847
                }
            case 159:
                var1 = var18.discount;
                var2 = var14 == var1;
                var0 = undefined;
                if (var2) {
                    _fun57847_ip = 190;
                    continue _fun57847
                }
            case 174:
                var2 = var1.plan_ids;
                var1 = var2.includes;
                var0 = var1.bind(var2)(var5);
            case 190:
                var15 = var0;
            case 193:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var11.header;
                var0.style = var5;
                var5 = _closure1_slot0;
                var4 = var6[var4];
                var7 = var5.bind(var3)(var4);
                var4 = var7.getPremiumGradientColor;
                var4 = var4.bind(var7)(var13);
                var0.colors = var4;
                var4 = 9;
                var7 = var6[var4];
                var7 = var5.bind(var3)(var7);
                var7 = var7.HorizontalGradient;
                var7 = var7.START;
                var0.start = var7;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.HorizontalGradient;
                var4 = var4.END;
                var0.end = var4;
                var5 = var8.bind(var3)();
                if (!var5) {
                    _fun57847_ip = 356;
                    continue _fun57847
                }
            case 316:
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 10;
                var4 = var9[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var8 = var8.bind(var3)();
                var4.source = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 356:
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var11.logoContainer;
                var5.style = var8;
                var19 = _closure1_slot6;
                var12 = _closure1_slot1;
                var8 = _closure1_slot2;
                var9 = 10;
                var8 = var8[var9];
                var16 = var12.bind(var3)(var8);
                var12 = {};
                var8 = _closure1_slot4;
                var8 = var8.TIER_0;
                if (!(var8 !== var13)) {
                    _fun57847_ip = 498;
                    continue _fun57847
                }
            case 424:
                var8 = _closure1_slot4;
                var8 = var8.TIER_1;
                if (!(var8 !== var13)) {
                    _fun57847_ip = 476;
                    continue _fun57847
                }
            case 438:
                var8 = _closure1_slot4;
                var20 = var8.TIER_2;
                var8 = undefined;
                if (!(var20 === var13)) {
                    _fun57847_ip = 518;
                    continue _fun57847
                }
            case 454:
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var20 = 13;
                var20 = var23[var20];
                var8 = var22.bind(var3)(var20);
                _fun57847_ip = 518;
                continue _fun57847;
            case 476:
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var20 = 12;
                var20 = var23[var20];
                var8 = var22.bind(var3)(var20);
                _fun57847_ip = 518;
                continue _fun57847;
            case 498:
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var20 = 11;
                var20 = var23[var20];
                var8 = var22.bind(var3)(var20);
            case 518:
                var12.source = var8;
                var8 = 'contain';
                var12.resizeMode = var8;
                var16 = var19.bind(var3)(var16, var12);
                var12 = new Array(3);
                var12[0] = var16;
                var16 = null;
                if (!var17) {
                    _fun57847_ip = 619;
                    continue _fun57847
                }
            case 549:
                var20 = _closure1_slot6;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 14;
                var17 = var22[var17];
                var17 = var19.bind(var3)(var17);
                var19 = var17.PremiumPill;
                var17 = {};
                var22 = var11.discountPill;
                var17.style = var22;
                var17.trialOffer = var21;
                var17.premiumType = var13;
                var21 = true;
                var17.useWhiteBackground = var21;
                var17.hideTrialCountdown = var21;
                var16 = var20.bind(var3)(var19, var17);
            case 619:
                var12[1] = var16;
                var14 = null;
                if (!var15) {
                    _fun57847_ip = 698;
                    continue _fun57847
                }
            case 628:
                var17 = _closure1_slot6;
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 14;
                var15 = var19[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.PremiumPill;
                var15 = {};
                var19 = var11.discountPill;
                var15.style = var19;
                var15.discountOffer = var18;
                var15.premiumType = var13;
                var18 = true;
                var15.shouldShowDiscountUpsell = var18;
                var15.useWhiteBackground = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 698:
                var12[2] = var14;
                var5.children = var12;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = _closure1_slot4;
                var9 = var9.TIER_0;
                if (!(var9 !== var13)) {
                    _fun57847_ip = 827;
                    continue _fun57847
                }
            case 753:
                var9 = _closure1_slot4;
                var9 = var9.TIER_1;
                if (!(var9 !== var13)) {
                    _fun57847_ip = 805;
                    continue _fun57847
                }
            case 767:
                var9 = _closure1_slot4;
                var12 = var9.TIER_2;
                var9 = undefined;
                if (!(var12 === var13)) {
                    _fun57847_ip = 847;
                    continue _fun57847
                }
            case 783:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var12 = 17;
                var12 = var15[var12];
                var9 = var14.bind(var3)(var12);
                _fun57847_ip = 847;
                continue _fun57847;
            case 805:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var12 = 16;
                var12 = var15[var12];
                var9 = var14.bind(var3)(var12);
                _fun57847_ip = 847;
                continue _fun57847;
            case 827:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var12 = 15;
                var12 = var15[var12];
                var9 = var14.bind(var3)(var12);
            case 847:
                var5.source = var9;
                var12 = var11.imgWumpus;
                var9 = new Array(2);
                var9[0] = var12;
                var12 = _closure1_slot4;
                var12 = var12.TIER_0;
                if (!(var12 !== var13)) {
                    _fun57847_ip = 917;
                    continue _fun57847
                }
            case 879:
                var12 = _closure1_slot4;
                var12 = var12.TIER_1;
                if (!(var12 !== var13)) {
                    _fun57847_ip = 917;
                    continue _fun57847
                }
            case 893:
                var10 = _closure1_slot4;
                var12 = var10.TIER_2;
                var10 = undefined;
                if (!(var12 === var13)) {
                    _fun57847_ip = 923;
                    continue _fun57847
                }
            case 909:
                var10 = var11.imgWumpusRight;
                _fun57847_ip = 923;
                continue _fun57847;
            case 917:
                var10 = var11.imgWumpusBottom;
            case 923:
                var9[1] = var10;
                var5.style = var9;
                var5.resizeMode = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1623, 33, 1297, 7081, 7082, 3111, 4099, 670, 4705, 7083, 7084, 7085, 7086, 7095, 7096, 7097, 2]);