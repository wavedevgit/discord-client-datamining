// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function arg0() {
        _fun23086: for (var _fun23086_ip = 0;;) switch (_fun23086_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun23086_ip = 18;
                    continue _fun23086
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun23086_ip = 27;
                    continue _fun23086
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var2);
    var0 = function arg0, arg1, arg2() {
        _fun23087: for (var _fun23087_ip = 0;;) switch (_fun23087_ip) {
            case 0:
                var6 = arg2;
                var1 = undefined;
                var2 = undefined;
                var3 = _closure1_slot11;
                var4 = var3.default;
                var2 = arguments;
                var3 = var2;
                var2 = 2;
                var2 = var4.bind(var1)(var2, var3);
                var2 = _closure1_slot10;
                var3 = var2.default;
                var2 = arg0;
                var8 = var3.bind(var1)(var2);
                var2 = _closure1_slot10;
                var3 = var2.default;
                var2 = arg1;
                var5 = var3.bind(var1)(var2);
                var7 = null;
                if (!(var7 != var6)) {
                    _fun23087_ip = 85;
                    continue _fun23087
                }
            case 73:
                var2 = var6.unit;
                if (var2) {
                    _fun23087_ip = 706;
                    continue _fun23087
                }
            case 85:
                var2 = _closure1_slot9;
                var2 = var2.default;
                var10 = var2.bind(var1)(var8, var5);
                var4 = global;
                var3 = var4.Math;
                var2 = var3.abs;
                var3 = var2.bind(var3)(var10);
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var11 = 10;
                var2 = var2[var11];
                var2 = var9.bind(var1)(var2);
                var2 = var2.secondsInMinute;
                if (!(!(var3 < var2))) {
                    _fun23087_ip = 682;
                    continue _fun23087
                }
            case 152:
                var3 = var4.Math;
                var2 = var3.abs;
                var3 = var2.bind(var3)(var10);
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var11];
                var2 = var9.bind(var1)(var2);
                var2 = var2.secondsInHour;
                if (!(!(var3 < var2))) {
                    _fun23087_ip = 658;
                    continue _fun23087
                }
            case 199:
                var3 = var4.Math;
                var2 = var3.abs;
                var3 = var2.bind(var3)(var10);
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var11];
                var2 = var9.bind(var1)(var2);
                var2 = var2.secondsInDay;
                if (!(var3 < var2)) {
                    _fun23087_ip = 285;
                    continue _fun23087
                }
            case 243:
                var9 = var4.Math;
                var3 = var9.abs;
                var2 = _closure1_slot2;
                var2 = var2.default;
                var2 = var2.bind(var1)(var8, var5);
                var3 = var3.bind(var9)(var2);
                var2 = 1;
                if (!(!(var3 < var2))) {
                    _fun23087_ip = 634;
                    continue _fun23087
                }
            case 285:
                var3 = var4.Math;
                var2 = var3.abs;
                var3 = var2.bind(var3)(var10);
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var11];
                var2 = var9.bind(var1)(var2);
                var2 = var2.secondsInWeek;
                if (!(var3 < var2)) {
                    _fun23087_ip = 381;
                    continue _fun23087
                }
            case 329:
                var2 = _closure1_slot2;
                var2 = var2.default;
                var2 = var2.bind(var1)(var8, var5);
                if (!var2) {
                    _fun23087_ip = 381;
                    continue _fun23087
                }
            case 347:
                var9 = var4.Math;
                var3 = var9.abs;
                var9 = var3.bind(var9)(var2);
                var3 = 7;
                var9 = var9 < var3;
                var3 = 'day';
                if (var9) {
                    _fun23087_ip = 966;
                    continue _fun23087
                }
            case 381:
                var12 = var4.Math;
                var9 = var12.abs;
                var12 = var9.bind(var12)(var10);
                var13 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var9 = var13.bind(var1)(var9);
                var9 = var9.secondsInMonth;
                if (!(!(var12 < var9))) {
                    _fun23087_ip = 610;
                    continue _fun23087
                }
            case 428:
                var12 = var4.Math;
                var9 = var12.abs;
                var12 = var9.bind(var12)(var10);
                var13 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var9 = var13.bind(var1)(var9);
                var9 = var9.secondsInQuarter;
                if (!(!(var12 < var9))) {
                    _fun23087_ip = 586;
                    continue _fun23087
                }
            case 472:
                var9 = var4.Math;
                var4 = var9.abs;
                var9 = var4.bind(var9)(var10);
                var10 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var11];
                var4 = var10.bind(var1)(var4);
                var4 = var4.secondsInYear;
                if (!(var9 < var4)) {
                    _fun23087_ip = 538;
                    continue _fun23087
                }
            case 516:
                var4 = _closure1_slot4;
                var4 = var4.default;
                var9 = var4.bind(var1)(var8, var5);
                var4 = 4;
                if (!(!(var9 < var4))) {
                    _fun23087_ip = 562;
                    continue _fun23087
                }
            case 538:
                var4 = _closure1_slot6;
                var4 = var4.default;
                var2 = var4.bind(var1)(var8, var5);
                var3 = 'year';
                _fun23087_ip = 966;
                continue _fun23087;
            case 562:
                var4 = _closure1_slot4;
                var4 = var4.default;
                var2 = var4.bind(var1)(var8, var5);
                var3 = 'quarter';
                _fun23087_ip = 966;
                continue _fun23087;
            case 586:
                var4 = _closure1_slot3;
                var4 = var4.default;
                var2 = var4.bind(var1)(var8, var5);
                var3 = 'month';
                _fun23087_ip = 966;
                continue _fun23087;
            case 610:
                var4 = _closure1_slot5;
                var4 = var4.default;
                var2 = var4.bind(var1)(var8, var5);
                var3 = 'week';
                _fun23087_ip = 966;
                continue _fun23087;
            case 634:
                var4 = _closure1_slot7;
                var4 = var4.default;
                var2 = var4.bind(var1)(var8, var5);
                var3 = 'hour';
                _fun23087_ip = 966;
                continue _fun23087;
            case 658:
                var4 = _closure1_slot8;
                var4 = var4.default;
                var2 = var4.bind(var1)(var8, var5);
                var3 = 'minute';
                _fun23087_ip = 966;
                continue _fun23087;
            case 682:
                var4 = _closure1_slot9;
                var4 = var4.default;
                var2 = var4.bind(var1)(var8, var5);
                var3 = 'second';
                _fun23087_ip = 966;
                continue _fun23087;
            case 706:
                var9 = var7 == var6;
                var4 = undefined;
                if (var9) {
                    _fun23087_ip = 721;
                    continue _fun23087
                }
            case 715:
                var4 = var6.unit;
            case 721:
                var9 = 'second';
                if (!(var9 !== var4)) {
                    _fun23087_ip = 948;
                    continue _fun23087
                }
            case 732:
                var9 = 'minute';
                if (!(var9 !== var4)) {
                    _fun23087_ip = 928;
                    continue _fun23087
                }
            case 743:
                var9 = 'hour';
                if (!(var9 !== var4)) {
                    _fun23087_ip = 908;
                    continue _fun23087
                }
            case 754:
                var9 = 'day';
                if (!(var9 !== var4)) {
                    _fun23087_ip = 888;
                    continue _fun23087
                }
            case 765:
                var9 = 'week';
                if (!(var9 !== var4)) {
                    _fun23087_ip = 868;
                    continue _fun23087
                }
            case 773:
                var9 = 'month';
                if (!(var9 !== var4)) {
                    _fun23087_ip = 848;
                    continue _fun23087
                }
            case 781:
                var9 = 'quarter';
                if (!(var9 !== var4)) {
                    _fun23087_ip = 828;
                    continue _fun23087
                }
            case 789:
                var2 = 0;
                var9 = 'year';
                var3 = var4;
                if (!(var9 === var3)) {
                    _fun23087_ip = 966;
                    continue _fun23087
                }
            case 805:
                var9 = _closure1_slot6;
                var9 = var9.default;
                var2 = var9.bind(var1)(var8, var5);
                var3 = var4;
                _fun23087_ip = 966;
                continue _fun23087;
            case 828:
                var9 = _closure1_slot4;
                var9 = var9.default;
                var2 = var9.bind(var1)(var8, var5);
                var3 = var4;
                _fun23087_ip = 966;
                continue _fun23087;
            case 848:
                var9 = _closure1_slot3;
                var9 = var9.default;
                var2 = var9.bind(var1)(var8, var5);
                var3 = var4;
                _fun23087_ip = 966;
                continue _fun23087;
            case 868:
                var9 = _closure1_slot5;
                var9 = var9.default;
                var2 = var9.bind(var1)(var8, var5);
                var3 = var4;
                _fun23087_ip = 966;
                continue _fun23087;
            case 888:
                var9 = _closure1_slot2;
                var9 = var9.default;
                var2 = var9.bind(var1)(var8, var5);
                var3 = var4;
                _fun23087_ip = 966;
                continue _fun23087;
            case 908:
                var9 = _closure1_slot7;
                var9 = var9.default;
                var2 = var9.bind(var1)(var8, var5);
                var3 = var4;
                _fun23087_ip = 966;
                continue _fun23087;
            case 928:
                var9 = _closure1_slot8;
                var9 = var9.default;
                var2 = var9.bind(var1)(var8, var5);
                var3 = var4;
                _fun23087_ip = 966;
                continue _fun23087;
            case 948:
                var0 = _closure1_slot9;
                var0 = var0.default;
                var2 = var0.bind(var1)(var8, var5);
                var3 = var4;
            case 966:
                var0 = global;
                var0 = var0.Intl;
                var5 = var0.RelativeTimeFormat;
                var0 = var7 == var6;
                var4 = undefined;
                if (var0) {
                    _fun23087_ip = 995;
                    continue _fun23087
                }
            case 989:
                var4 = var6.locale;
            case 995:
                var0 = {};
                var9 = var7 == var6;
                var8 = undefined;
                if (var9) {
                    _fun23087_ip = 1012;
                    continue _fun23087
                }
            case 1006:
                var8 = var6.localeMatcher;
            case 1012:
                var0.localeMatcher = var8;
                var9 = var7 == var6;
                var8 = undefined;
                if (var9) {
                    _fun23087_ip = 1032;
                    continue _fun23087
                }
            case 1026:
                var8 = var6.numeric;
            case 1032:
                if (var8) {
                    _fun23087_ip = 1039;
                    continue _fun23087
                }
            case 1035:
                var8 = 'auto';
            case 1039:
                var0.numeric = var8;
                var7 = var7 == var6;
                var1 = undefined;
                if (var7) {
                    _fun23087_ip = 1058;
                    continue _fun23087
                }
            case 1053:
                var1 = var6.style;
            case 1058:
                var0.style = var1;
                var1 = var5.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = var1;
                var15 = var4;
                var14 = var0;
                var0 = new var16[var5](var15, var14, var13);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var1.format;
                var0 = var0.bind(var1)(var2, var3);
                return var0;
        }
    };
    var1.default = var0;
    var0 = 0;
    var2 = var6[var0];
    var0 = undefined;
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot11 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2737, 2761, 2762, 2764, 2765, 2767, 2772, 2778, 2575, 2576, 2754]);