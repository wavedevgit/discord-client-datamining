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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
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
    var6 = var7.create;
    var3 = {};
    var8 = {
        'borderWidth': 1,
        'borderColor': null,
        'borderRadius': 2,
        'marginLeft': 4,
        'paddingHorizontal': 2
    };
    var9 = 4;
    var9 = var5[var9];
    var12 = var4.bind(var0)(var9);
    var11 = var12.hexWithOpacity;
    var9 = 5;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/renderPremiumButtonText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun83061: for (var _fun83061_ip = 0;;) switch (_fun83061_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.style;
                var14 = var0.isCurrentPlan;
                var1 = var0.isGift;
                var4 = var0.basePlanId;
                var19 = var0.product;
                var8 = var0.text;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.getInterval;
                var0 = var0.bind(var2)(var4);
                var2 = var0.intervalType;
                var0 = _closure1_slot5;
                var0 = var0.YEAR;
                var5 = null;
                var11 = null;
                if (!(var2 === var0)) {
                    _fun83061_ip = 133;
                    continue _fun83061
                }
            case 97:
                var11 = null;
                if (var14) {
                    _fun83061_ip = 133;
                    continue _fun83061
                }
            case 102:
                var7 = _closure1_slot4;
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var4 = '-';
                var0 = '%';
                var11 = var6.bind(var4)(var7, var0);
            case 133:
                if (!(var5 == var8)) {
                    _fun83061_ip = 447;
                    continue _fun83061
                }
            case 140:
                var4 = var5 == var19;
                var0 = undefined;
                if (var4) {
                    _fun83061_ip = 155;
                    continue _fun83061
                }
            case 149:
                var0 = var19.priceString;
            case 155:
                var4 = var5 != var0;
                var10 = '$...';
                if (!var4) {
                    _fun83061_ip = 171;
                    continue _fun83061
                }
            case 168:
                var10 = var0;
            case 171:
                var0 = _closure1_slot5;
                var0 = var0.MONTH;
                if (!(var2 !== var0)) {
                    _fun83061_ip = 317;
                    continue _fun83061
                }
            case 188:
                var4 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 7;
                var0 = var12[var2];
                var0 = var4.bind(var3)(var0);
                var7 = var0.intl;
                var6 = var7.formatToPlainString;
                if (var1) {
                    _fun83061_ip = 277;
                    continue _fun83061
                }
            case 221:
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var15.bind(var3)(var0);
                var0 = var0.t;
                if (var14) {
                    _fun83061_ip = 254;
                    continue _fun83061
                }
            case 246:
                var15 = var0["rS8FA+"];
                _fun83061_ip = 262;
                continue _fun83061;
            case 254:
                var15 = var0.dFbQCa;
            case 262:
                var0 = {};
                var0.price = var10;
                var0 = var6.bind(var7)(var15, var0);
                _fun83061_ip = 312;
                continue _fun83061;
            case 277:
                var2 = var12[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.rm53bV;
                var2 = {};
                var2.price = var10;
                var0 = var6.bind(var7)(var4, var2);
            case 312:
                _fun83061_ip = 444;
                continue _fun83061;
            case 317:
                var4 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 7;
                var6 = var12[var2];
                var6 = var4.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                if (var1) {
                    _fun83061_ip = 406;
                    continue _fun83061
                }
            case 350:
                var15 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var2];
                var1 = var15.bind(var3)(var1);
                var1 = var1.t;
                if (var14) {
                    _fun83061_ip = 383;
                    continue _fun83061
                }
            case 375:
                var14 = var1.AbOLNu;
                _fun83061_ip = 391;
                continue _fun83061;
            case 383:
                var14 = var1.V6iX43;
            case 391:
                var1 = {};
                var1.price = var10;
                var1 = var6.bind(var7)(var14, var1);
                _fun83061_ip = 441;
                continue _fun83061;
            case 406:
                var2 = var12[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.FIjgMp;
                var2 = {};
                var2.price = var10;
                var1 = var6.bind(var7)(var4, var2);
            case 441:
                var0 = var1;
            case 444:
                var8 = var0;
            case 447:
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = _closure1_slot8;
                var4 = var4.premiumText;
                var0.style = var4;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var18 = _closure1_slot2;
                var14 = 8;
                var4 = var18[var14];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.style = var13;
                var12 = 1;
                var4.numberOfLines = var12;
                var15 = _closure1_slot0;
                var10 = 7;
                var16 = var18[var10];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.formatToPlainString;
                var10 = var18[var10];
                var10 = var15.bind(var3)(var10);
                var10 = var10.t;
                var15 = var10.E0lS2r;
                var10 = {};
                var20 = var5 == var19;
                var18 = undefined;
                if (var20) {
                    _fun83061_ip = 573;
                    continue _fun83061
                }
            case 568:
                var18 = var19.title;
            case 573:
                var10.product = var18;
                var10.description = var8;
                var10 = var16.bind(var17)(var15, var10);
                var4.accessibilityLabel = var10;
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var5 != var11;
                var5 = null;
                if (!var6) {
                    _fun83061_ip = 691;
                    continue _fun83061
                }
            case 619:
                var8 = _closure1_slot6;
                var7 = _closure1_slot3;
                var6 = {};
                var10 = _closure1_slot8;
                var10 = var10.discount;
                var6.style = var10;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var14];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.style = var13;
                var9.numberOfLines = var12;
                var9.children = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 691:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1615, 33, 3231, 671, 3100, 1234, 1295, 2]);