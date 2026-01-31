// modules/premium/native/gifting/PremiumGiftDuration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: PremiumGiftDurationButton, environment: var1
        _fun75243: for (var _fun75243_ip = 0;;) switch (_fun75243_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.selected;
                var21 = var0.planInterval;
                var _closure2_slot0 = var21;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.useNativeGiftContext;
                var0 = var0.bind(var1)();
                var1 = var0.premiumType;
                var0 = var0.setPlanInterval;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot9;
                var20 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                if (var5) {
                    _fun75243_ip = 111;
                    continue _fun75243
                }
            case 91:
                var0 = 8;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var6 = var0.RowButton;
                _fun75243_ip = 129;
                continue _fun75243;
            case 111:
                var0 = 7;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var6 = var0.TableRow;
            case 129:
                var0 = _closure1_slot5;
                var0 = var0.YEAR;
                var16 = null;
                var27 = null;
                if (!(var21 === var0)) {
                    _fun75243_ip = 178;
                    continue _fun75243
                }
            case 147:
                var9 = _closure1_slot4;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var2 = '';
                var0 = '%';
                var27 = var4.bind(var2)(var9, var0);
            case 178:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var11 = var0.bind(var3)(var1, var21);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var9 = var20.container;
                var4 = new Array(2);
                var4[0] = var9;
                if (!var5) {
                    _fun75243_ip = 236;
                    continue _fun75243
                }
            case 230:
                var5 = var20.containerSelected;
            case 236:
                var4[1] = var5;
                var0.style = var4;
                var5 = _closure1_slot6;
                var4 = {
                    'label': null,
                    'trailing': null,
                    'onPress': null,
                    'arrow': false,
                    'start': true,
                    'end': true
                };
                var14 = _closure1_slot7;
                var10 = _closure1_slot3;
                var9 = {};
                var12 = var20.labelContainer;
                var9.style = var12;
                var18 = _closure1_slot6;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = 10;
                var12 = var12[var13];
                var12 = var15.bind(var3)(var12);
                var17 = var12.Text;
                var15 = {};
                var12 = 'text-md/semibold';
                var15.variant = var12;
                var19 = _closure1_slot5;
                var19 = var19.MONTH;
                if (!(var21 !== var19)) {
                    _fun75243_ip = 392;
                    continue _fun75243
                }
            case 335:
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var19 = 11;
                var21 = var24[var19];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var19 = var24[var19];
                var19 = var23.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.DRgqMo;
                var19 = var21.bind(var22)(var19);
                _fun75243_ip = 447;
                continue _fun75243;
            case 392:
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 11;
                var22 = var25[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.Mh9bTt;
                var19 = var22.bind(var23)(var21);
            case 447:
                var15.children = var19;
                var17 = var18.bind(var3)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var16 = var16 != var27;
                if (!var16) {
                    _fun75243_ip = 620;
                    continue _fun75243
                }
            case 475:
                var19 = _closure1_slot6;
                var18 = _closure1_slot3;
                var17 = {};
                var20 = var20.labelPromo;
                var17.style = var20;
                var22 = _closure1_slot6;
                var24 = _closure1_slot0;
                var28 = _closure1_slot2;
                var20 = var28[var13];
                var20 = var24.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-md/bold',
                    'color': 'always-white'
                };
                var23 = 11;
                var25 = var28[var23];
                var25 = var24.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.formatToPlainString;
                var23 = var28[var23];
                var23 = var24.bind(var3)(var23);
                var23 = var23.t;
                var24 = var23.IAybsG;
                var23 = {};
                var23.discount = var27;
                var24 = var25.bind(var26)(var24, var23);
                var23 = var24.toUpperCase;
                var23 = var23.bind(var24)();
                var20.children = var23;
                var20 = var22.bind(var3)(var21, var20);
                var17.children = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 620:
                var15[1] = var16;
                var9.children = var15;
                var9 = var14.bind(var3)(var10, var9);
                var4.label = var9;
                var10 = _closure1_slot6;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var13];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {};
                var8.variant = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var4.trailing = var8;
                var7 = function() { // Original name: onPress, environment: var7
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var7;
                var4 = var5.bind(var3)(var6, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var12 = 2;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PREMIUM_YEARLY_DISCOUNT_PERCENT;
    var _closure1_slot4 = var6;
    var6 = var3.SubscriptionIntervalTypes;
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var7 = var6.YEAR;
    var3 = new Array(2);
    var3[0] = var7;
    var6 = var6.MONTH;
    var3[1] = var6;
    var _closure1_slot8 = var3;
    var3 = 4;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var11 = {};
    var9 = 5;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var11.marginTop = var13;
    var6.container = var11;
    var11 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var11.borderColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var11.borderRadius = var13;
    var11.borderWidth = var12;
    var6.containerSelected = var11;
    var11 = {};
    var12 = 'row';
    var11.flexDirection = var12;
    var6.labelContainer = var11;
    var11 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var11.marginStart = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_POSITIVE_BACKGROUND;
    var11.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var11.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var11.borderRadius = var12;
    var6.labelPromo = var11;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginHorizontal = var11;
    var3.durationContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var8.marginTop = var9;
    var3.durationTitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gifting/PremiumGiftDuration.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: PremiumGiftDuration, environment: var1
        var0 = _closure1_slot10;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var0 = 6;
        var0 = var13[var0];
        var1 = var12.bind(var3)(var0);
        var0 = var1.useNativeGiftContext;
        var0 = var0.bind(var1)();
        var0 = var0.planInterval;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot7;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var9.durationContainer;
        var0.style = var4;
        var8 = _closure1_slot6;
        var4 = 10;
        var4 = var13[var4];
        var4 = var12.bind(var3)(var4);
        var7 = var4.Text;
        var4 = {};
        var9 = var9.durationTitle;
        var4.style = var9;
        var9 = 'text-sm/semibold';
        var4.variant = var9;
        var9 = 11;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9["8XT6Nf"];
        var9 = var10.bind(var11)(var9);
        var4.children = var9;
        var7 = var8.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot8;
        var6 = var7.map;
        var5 = function(arg0, arg1) { // Environment: var5
            var0 = arg0;
            var4 = _closure1_slot6;
            var3 = _closure1_slot11;
            var2 = {};
            var1 = _closure2_slot0;
            var1 = var1 === var0;
            var2.selected = var1;
            var2.planInterval = var0;
            var1 = undefined;
            var0 = arg1;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var5 = var6.bind(var7)(var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1615, 33, 1297, 671, 9368, 4861, 5342, 9391, 4839, 1234, 2]);