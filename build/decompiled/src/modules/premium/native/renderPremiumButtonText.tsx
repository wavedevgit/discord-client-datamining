// modules/premium/native/renderPremiumButtonText.tsx
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
        _fun83594: for (var _fun83594_ip = 0;;) switch (_fun83594_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.style;
                var15 = var0.isCurrentPlan;
                var1 = var0.isGift;
                var4 = var0.basePlanId;
                var20 = var0.product;
                var8 = var0.text;
                var0 = _closure1_slot8;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getInterval;
                var0 = var0.bind(var2)(var4);
                var2 = var0.intervalType;
                var0 = _closure1_slot5;
                var0 = var0.YEAR;
                var5 = null;
                var12 = null;
                if (!(var2 === var0)) {
                    _fun83594_ip = 141;
                    continue _fun83594
                }
            case 105:
                var12 = null;
                if (var15) {
                    _fun83594_ip = 141;
                    continue _fun83594
                }
            case 110:
                var7 = _closure1_slot4;
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var4 = '-';
                var0 = '%';
                var12 = var6.bind(var4)(var7, var0);
            case 141:
                if (!(var5 == var8)) {
                    _fun83594_ip = 455;
                    continue _fun83594
                }
            case 148:
                var4 = var5 == var20;
                var0 = undefined;
                if (var4) {
                    _fun83594_ip = 163;
                    continue _fun83594
                }
            case 157:
                var0 = var20.priceString;
            case 163:
                var4 = var5 != var0;
                var11 = '$...';
                if (!var4) {
                    _fun83594_ip = 179;
                    continue _fun83594
                }
            case 176:
                var11 = var0;
            case 179:
                var0 = _closure1_slot5;
                var0 = var0.MONTH;
                if (!(var2 !== var0)) {
                    _fun83594_ip = 325;
                    continue _fun83594
                }
            case 196:
                var4 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 8;
                var0 = var13[var2];
                var0 = var4.bind(var3)(var0);
                var7 = var0.intl;
                var6 = var7.formatToPlainString;
                if (var1) {
                    _fun83594_ip = 285;
                    continue _fun83594
                }
            case 229:
                var16 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var16.bind(var3)(var0);
                var0 = var0.t;
                if (var15) {
                    _fun83594_ip = 262;
                    continue _fun83594
                }
            case 254:
                var16 = var0["rS8FA+"];
                _fun83594_ip = 270;
                continue _fun83594;
            case 262:
                var16 = var0.dFbQCa;
            case 270:
                var0 = {};
                var0.price = var11;
                var0 = var6.bind(var7)(var16, var0);
                _fun83594_ip = 320;
                continue _fun83594;
            case 285:
                var2 = var13[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.rm53bV;
                var2 = {};
                var2.price = var11;
                var0 = var6.bind(var7)(var4, var2);
            case 320:
                _fun83594_ip = 452;
                continue _fun83594;
            case 325:
                var4 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 8;
                var6 = var13[var2];
                var6 = var4.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                if (var1) {
                    _fun83594_ip = 414;
                    continue _fun83594
                }
            case 358:
                var16 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var2];
                var1 = var16.bind(var3)(var1);
                var1 = var1.t;
                if (var15) {
                    _fun83594_ip = 391;
                    continue _fun83594
                }
            case 383:
                var15 = var1.AbOLNu;
                _fun83594_ip = 399;
                continue _fun83594;
            case 391:
                var15 = var1.V6iX43;
            case 399:
                var1 = {};
                var1.price = var11;
                var1 = var6.bind(var7)(var15, var1);
                _fun83594_ip = 449;
                continue _fun83594;
            case 414:
                var2 = var13[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.FIjgMp;
                var2 = {};
                var2.price = var11;
                var1 = var6.bind(var7)(var4, var2);
            case 449:
                var0 = var1;
            case 452:
                var8 = var0;
            case 455:
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var10.premiumText;
                var0.style = var4;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var19 = _closure1_slot2;
                var15 = 9;
                var4 = var19[var15];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.style = var14;
                var13 = 1;
                var4.numberOfLines = var13;
                var16 = _closure1_slot0;
                var11 = 8;
                var17 = var19[var11];
                var17 = var16.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.formatToPlainString;
                var11 = var19[var11];
                var11 = var16.bind(var3)(var11);
                var11 = var11.t;
                var16 = var11.E0lS2r;
                var11 = {};
                var21 = var5 == var20;
                var19 = undefined;
                if (var21) {
                    _fun83594_ip = 577;
                    continue _fun83594
                }
            case 572:
                var19 = var20.title;
            case 577:
                var11.product = var19;
                var11.description = var8;
                var11 = var17.bind(var18)(var16, var11);
                var4.accessibilityLabel = var11;
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var5 != var12;
                var5 = null;
                if (!var6) {
                    _fun83594_ip = 695;
                    continue _fun83594
                }
            case 623:
                var8 = _closure1_slot6;
                var7 = _closure1_slot3;
                var6 = {};
                var10 = var10.discount;
                var6.style = var10;
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var15];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.style = var14;
                var9.numberOfLines = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 695:
                var4[1] = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PREMIUM_YEARLY_DISCOUNT_PERCENT;
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
        'borderWidth': 1,
        'borderColor': null,
        'borderRadius': 2,
        'marginLeft': 4,
        'paddingHorizontal': 2
    };
    var9 = 5;
    var9 = var5[var9];
    var12 = var4.bind(var0)(var9);
    var11 = var12.hexWithOpacity;
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var10 = var9.WHITE;
    var9 = 0.3;
    var9 = var11.bind(var12)(var10, var9);
    var8.borderColor = var9;
    var3.discount = var8;
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var3.premiumText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/renderPremiumButtonText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = _closure1_slot6;
        var2 = _closure1_slot9;
        var1 = {};
        var4 = arg0;
        var5 = var1;
        var0 = copyDataProperties(var5, var4);
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1623, 33, 1297, 3246, 671, 3116, 1235, 1296, 2]);