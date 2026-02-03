// modules/premium/native/PremiumAccountCredit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun59431: for (var _fun59431_ip = 0;;) switch (_fun59431_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.planId;
                var12 = var0.months;
                var18 = var0.currentSubscription;
                var7 = var0.shouldAddDivider;
                var4 = var0.unconsumedFractionalPremiumUnits;
                var0 = _closure1_slot8;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 7;
                var1 = var0[var5];
                var9 = var2.bind(var3)(var1);
                var8 = var9.castPremiumSubscriptionAsSkuId;
                var1 = _closure1_slot1;
                var2 = var0[var5];
                var11 = var1.bind(var3)(var2);
                var2 = var11.getSkuIdForPlan;
                var2 = var2.bind(var11)(var19);
                var8 = var8.bind(var9)(var2);
                var0 = var0[var5];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getTierDisplayNameByPlanId;
                var22 = var0.bind(var1)(var19);
                var23 = null;
                var0 = var23 != var18;
                var24 = undefined;
                if (!var0) {
                    _fun59431_ip = 263;
                    continue _fun59431
                }
            case 135:
                var1 = var18.status;
                var0 = _closure1_slot5;
                var0 = var0.PAUSED;
                if (!(var1 === var0)) {
                    _fun59431_ip = 164;
                    continue _fun59431
                }
            case 154:
                var0 = var18.pauseEndsAt;
                if (!(var23 == var0)) {
                    _fun59431_ip = 200;
                    continue _fun59431
                }
            case 164:
                var0 = global;
                var2 = var0.Date;
                var27 = var18.currentPeriodEnd;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var28 = var1;
                var0 = new var28[var2](var27, var26);
                var2 = var0 instanceof Object ? var0 : var1;
                _fun59431_ip = 234;
                continue _fun59431;
            case 200:
                var0 = global;
                var9 = var0.Date;
                var27 = var18.pauseEndsAt;
                var1 = var9.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var9
                    }
                });
                var28 = var1;
                var0 = new var28[var9](var27, var26);
                var2 = var0 instanceof Object ? var0 : var1;
            case 234:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var1 = var1.bind(var3)(var0);
                var0 = var1.extendDateWithUnconsumedFractionalPremium;
                var24 = var0.bind(var1)(var2, var4);
            case 263:
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var10.creditItem;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var7) {
                    _fun59431_ip = 298;
                    continue _fun59431
                }
            case 292:
                var5 = var10.divider;
            case 298:
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot6;
                var5 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 8;
                var4 = var16[var9];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var17 = _closure1_slot0;
                var9 = var16[var9];
                var9 = var17.bind(var3)(var9);
                var9 = var9.GameIconSizes;
                var9 = var9.SMALL;
                var4.size = var9;
                var4.skuId = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var9 = _closure1_slot7;
                var8 = _closure1_slot3;
                var7 = {};
                var5 = var10.textContainer;
                var7.style = var5;
                var15 = _closure1_slot6;
                var5 = 9;
                var11 = var16[var5];
                var11 = var17.bind(var3)(var11);
                var14 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var10.headerText;
                var11.style = var13;
                var13 = 10;
                var20 = var16[var13];
                var20 = var17.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var16 = var16[var13];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var17 = var16.LzobT9;
                var16 = {};
                var16.planName = var22;
                var16 = var20.bind(var21)(var17, var16);
                var11.children = var16;
                var14 = var15.bind(var3)(var14, var11);
                var11 = new Array(2);
                var11[0] = var14;
                if (!(var23 != var18)) {
                    _fun59431_ip = 540;
                    continue _fun59431
                }
            case 526:
                var15 = var18.isPurchasedExternally;
                var14 = null;
                if (var15) {
                    _fun59431_ip = 754;
                    continue _fun59431
                }
            case 540:
                var17 = _closure1_slot6;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var5];
                var15 = var16.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var20 = var10.subText;
                var15.style = var20;
                if (!(var23 != var18)) {
                    _fun59431_ip = 606;
                    continue _fun59431
                }
            case 596:
                var18 = var18.planId;
                if (!(var18 !== var19)) {
                    _fun59431_ip = 670;
                    continue _fun59431
                }
            case 606:
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var20 = var18[var13];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.formatToPlainString;
                var18 = var18[var13];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18.eNXZ5O;
                var18 = {};
                var18.planName = var22;
                var18 = var20.bind(var21)(var19, var18);
                _fun59431_ip = 744;
                continue _fun59431;
            case 670:
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var21 = var19[var13];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.formatToPlainString;
                var19 = var19[var13];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19["5CNRRA"];
                var19 = {};
                var25 = var23 != var24;
                var23 = 0;
                if (!var25) {
                    _fun59431_ip = 733;
                    continue _fun59431
                }
            case 730:
                var23 = var24;
            case 733:
                var19.date = var23;
                var18 = var21.bind(var22)(var20, var19);
            case 744:
                var15.children = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 754:
                var11[1] = var14;
                var7.children = var11;
                var7 = var9.bind(var3)(var8, var7);
                var4[1] = var7;
                var7 = _closure1_slot6;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = var8[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var10 = var10.timeText;
                var5.style = var10;
                var10 = var8[var13];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var8[var13];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8["ess/xl"];
                var8 = {};
                var8.count = var12;
                var8 = var10.bind(var11)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionStatusTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 12;
    var8.marginBottom = var9;
    var3.title = var8;
    var8 = {};
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var3.creditList = var8;
    var12 = 16;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'padding': 16
    };
    var3.creditItem = var8;
    var8 = {
        'marginLeft': 16,
        'marginRight': 16,
        'flexDirection': 'column',
        'flex': 1
    };
    var3.textContainer = var8;
    var8 = {};
    var13 = 20;
    var8.lineHeight = var13;
    var3.headerText = var8;
    var8 = {};
    var8.lineHeight = var12;
    var3.subText = var8;
    var8 = {
        'lineHeight': 20,
        'alignSelf': 'flex-start'
    };
    var3.timeText = var8;
    var8 = {};
    var8.borderBottomWidth = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.borderBottomColor = var9;
    var3.divider = var8;
    var8 = {};
    var9 = 8;
    var8.marginTop = var9;
    var3.creditDescription = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/PremiumAccountCredit.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59432: for (var _fun59432_ip = 0;;) switch (_fun59432_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.currentSubscription;
                var _closure2_slot0 = var9;
                var6 = var0.entitlements;
                var5 = var0.style;
                var20 = var0.creditListContainerStyle;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var0 = _closure1_slot8;
                var12 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStoresArray;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var13
                    var1 = _closure1_slot4;
                    var0 = var1.getUnactivatedFractionalPremiumUnits;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var _closure2_slot1 = var0;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun59432_ip = 675;
                    continue _fun59432
                }
            case 111:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.hasAccountCredit;
                var1 = var1.bind(var2)(var6);
                if (!var1) {
                    _fun59432_ip = 675;
                    continue _fun59432
                }
            case 148:
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 12;
                var1 = var15[var1];
                var2 = var2.bind(var4)(var1);
                var16 = global;
                var3 = var16.Array;
                var1 = var3.from;
                var1 = var1.bind(var3)(var6);
                var3 = var2.bind(var4)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var13
                    _fun59434: for (var _fun59434_ip = 0;;) switch (_fun59434_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.subscriptionPlanId;
                            var3 = var1.parentId;
                            var1 = var1.consumed;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun59434_ip = 34;
                                continue _fun59434
                            }
                        case 30:
                            var0 = var2 != var3;
                        case 34:
                            if (!var0) {
                                _fun59434_ip = 40;
                                continue _fun59434
                            }
                        case 37:
                            var0 = !var1;
                        case 40:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.groupBy;
                var1 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.subscriptionPlanId;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.value;
                var19 = var1.bind(var2)();
                _closure2_slot2 = var19;
                var3 = _closure1_slot7;
                var2 = _closure1_slot3;
                var1 = {};
                var1.style = var5;
                var10 = _closure1_slot6;
                var18 = _closure1_slot0;
                var7 = 9;
                var5 = var15[var7];
                var5 = var18.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var11 = var12.title;
                var5.style = var11;
                var14 = 10;
                var11 = var15[var14];
                var11 = var18.bind(var4)(var11);
                var21 = var11.intl;
                var17 = var21.string;
                var11 = var15[var14];
                var11 = var18.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.YugZY0;
                var11 = var17.bind(var21)(var11);
                var5.children = var11;
                var6 = var10.bind(var4)(var6, var5);
                var5 = new Array(4);
                var5[0] = var6;
                var11 = _closure1_slot6;
                var10 = _closure1_slot3;
                var6 = {};
                var21 = var12.creditList;
                var17 = new Array(2);
                var17[0] = var21;
                var17[1] = var20;
                var6.style = var17;
                var17 = var16.Object;
                var16 = var17.keys;
                var17 = var16.bind(var17)(var19);
                var16 = var17.map;
                var13 = function(arg0) { // Environment: var13
                    var4 = arg0;
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var5)(var2);
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var5)(var1);
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var5 = var2[var1];
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var1.planId = var4;
                    var6 = _closure2_slot2;
                    var6 = var6[var4];
                    var6 = var6.length;
                    var1.months = var6;
                    var6 = _closure2_slot0;
                    var1.currentSubscription = var6;
                    var5 = var4 === var5;
                    var5 = !var5;
                    var1.shouldAddDivider = var5;
                    var0 = _closure2_slot1;
                    var1.unconsumedFractionalPremiumUnits = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var13 = var16.bind(var17)(var13);
                var6.children = var13;
                var6 = var11.bind(var4)(var10, var6);
                var5[1] = var6;
                var13 = _closure1_slot6;
                var6 = var15[var7];
                var6 = var18.bind(var4)(var6);
                var10 = var6.Text;
                var6 = {};
                var11 = var12.creditDescription;
                var6.style = var11;
                var11 = 'text-sm/medium';
                var6.variant = var11;
                var16 = var15[var14];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var14];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.kNEjGm;
                var15 = var16.bind(var17)(var15);
                var6.children = var15;
                var6 = var13.bind(var4)(var10, var6);
                var5[2] = var6;
                var10 = var0 != var9;
                var6 = null;
                if (!var10) {
                    _fun59432_ip = 659;
                    continue _fun59432
                }
            case 550:
                var9 = var9.isPurchasedExternally;
                var6 = null;
                if (!var9) {
                    _fun59432_ip = 659;
                    continue _fun59432
                }
            case 561:
                var9 = _closure1_slot6;
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = var10[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {};
                var12 = var12.creditDescription;
                var7.style = var12;
                var7.variant = var11;
                var11 = var10[var14];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.azRP0E;
                var10 = var11.bind(var12)(var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 659:
                var5[3] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 675:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4648, 660, 33, 1297, 671, 3100, 6887, 3932, 1234, 566, 22, 2]);