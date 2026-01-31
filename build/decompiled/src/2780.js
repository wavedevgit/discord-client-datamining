// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function arg0() {
        _fun22759: for (var _fun22759_ip = 0;;) switch (_fun22759_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22759_ip = 18;
                    continue _fun22759
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22759_ip = 27;
                    continue _fun22759
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
        _fun22760: for (var _fun22760_ip = 0;;) switch (_fun22760_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var1 = arg2;
                var14 = undefined;
                var0 = undefined;
                var2 = _closure1_slot10;
                var2 = var2.default;
                var0 = arguments;
                var9 = 2;
                var0 = var2.bind(var14)(var9, var0);
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var11 = 9;
                var0 = var0[var11];
                var0 = var2.bind(var14)(var0);
                var0 = var0.getDefaultOptions;
                var0 = var0.bind(var14)();
                var4 = null;
                var2 = var4 == var1;
                var7 = undefined;
                if (var2) {
                    _fun22760_ip = 83;
                    continue _fun22760
                }
            case 77:
                var7 = var1.locale;
            case 83:
                if (!(var4 !== var7)) {
                    _fun22760_ip = 91;
                    continue _fun22760
                }
            case 87:
                if (!(var14 === var7)) {
                    _fun22760_ip = 97;
                    continue _fun22760
                }
            case 91:
                var7 = var0.locale;
            case 97:
                if (!(var4 !== var7)) {
                    _fun22760_ip = 105;
                    continue _fun22760
                }
            case 101:
                if (!(var14 === var7)) {
                    _fun22760_ip = 114;
                    continue _fun22760
                }
            case 105:
                var0 = _closure1_slot5;
                var7 = var0.default;
            case 114:
                var0 = var7.formatDistance;
                if (var0) {
                    _fun22760_ip = 159;
                    continue _fun22760
                }
            case 123:
                var0 = global;
                var6 = var0.RangeError;
                var0 = var6.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var19 = 'locale must contain formatDistance property';
                var20 = var2;
                var0 = new var20[var6](var19, var18);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 159:
                var0 = _closure1_slot2;
                var0 = var0.default;
                var2 = var0.bind(var14)(var5, var3);
                var0 = global;
                var6 = var0.isNaN;
                var6 = var6.bind(var14)(var2);
                if (var6) {
                    _fun22760_ip = 1053;
                    continue _fun22760
                }
            case 193:
                var6 = _closure1_slot8;
                var12 = var6.default;
                var6 = _closure1_slot7;
                var6 = var6.default;
                var10 = var6.bind(var14)(var1);
                var6 = {};
                var15 = var0.Boolean;
                var16 = var4 == var1;
                var13 = undefined;
                if (var16) {
                    _fun22760_ip = 239;
                    continue _fun22760
                }
            case 233:
                var13 = var1.addSuffix;
            case 239:
                var13 = var15.bind(var14)(var13);
                var6.addSuffix = var13;
                var6.comparison = var2;
                var6 = var12.bind(var14)(var10, var6);
                var10 = 0;
                if (!(!(var2 > var10))) {
                    _fun22760_ip = 296;
                    continue _fun22760
                }
            case 266:
                var2 = _closure1_slot6;
                var2 = var2.default;
                var13 = var2.bind(var14)(var5);
                var2 = _closure1_slot6;
                var2 = var2.default;
                var12 = var2.bind(var14)(var3);
                _fun22760_ip = 324;
                continue _fun22760;
            case 296:
                var2 = _closure1_slot6;
                var2 = var2.default;
                var13 = var2.bind(var14)(var3);
                var2 = _closure1_slot6;
                var2 = var2.default;
                var12 = var2.bind(var14)(var5);
            case 324:
                var2 = _closure1_slot4;
                var2 = var2.default;
                var3 = var2.bind(var14)(var12, var13);
                var2 = _closure1_slot9;
                var2 = var2.default;
                var5 = var2.bind(var14)(var12);
                var2 = _closure1_slot9;
                var2 = var2.default;
                var2 = var2.bind(var14)(var13);
                var5 = var5 - var2;
                var2 = 1000;
                var2 = var5 / var2;
                var16 = var0.Math;
                var15 = var16.round;
                var5 = var3 - var2;
                var2 = 60;
                var5 = var5 / var2;
                var5 = var15.bind(var16)(var5);
                if (!(!(var5 < var9))) {
                    _fun22760_ip = 832;
                    continue _fun22760
                }
            case 415:
                var9 = 45;
                if (!(!(var5 < var9))) {
                    _fun22760_ip = 813;
                    continue _fun22760
                }
            case 425:
                var9 = 90;
                if (!(!(var5 < var9))) {
                    _fun22760_ip = 791;
                    continue _fun22760
                }
            case 435:
                var9 = _closure1_slot11;
                if (!(!(var5 < var9))) {
                    _fun22760_ip = 752;
                    continue _fun22760
                }
            case 446:
                var9 = _closure1_slot12;
                if (!(!(var5 < var9))) {
                    _fun22760_ip = 730;
                    continue _fun22760
                }
            case 457:
                var9 = _closure1_slot13;
                if (!(!(var5 < var9))) {
                    _fun22760_ip = 687;
                    continue _fun22760
                }
            case 468:
                var9 = _closure1_slot14;
                if (!(!(var5 < var9))) {
                    _fun22760_ip = 644;
                    continue _fun22760
                }
            case 479:
                var9 = _closure1_slot3;
                var9 = var9.default;
                var15 = var9.bind(var14)(var12, var13);
                var12 = 12;
                if (!(!(var15 < var12))) {
                    _fun22760_ip = 601;
                    continue _fun22760
                }
            case 501:
                var9 = var15 % var12;
                var14 = var0.Math;
                var13 = var14.floor;
                var12 = var15 / var12;
                var13 = var13.bind(var14)(var12);
                var12 = 3;
                if (!(!(var9 < var12))) {
                    _fun22760_ip = 582;
                    continue _fun22760
                }
            case 533:
                if (!(!(var9 < var11))) {
                    _fun22760_ip = 563;
                    continue _fun22760
                }
            case 537:
                var12 = var7.formatDistance;
                var9 = 1;
                var11 = var13 + var9;
                var9 = 'almostXYears';
                var9 = var12.bind(var7)(var9, var11, var6);
                _fun22760_ip = 580;
                continue _fun22760;
            case 563:
                var12 = var7.formatDistance;
                var11 = 'overXYears';
                var9 = var12.bind(var7)(var11, var13, var6);
            case 580:
                _fun22760_ip = 599;
                continue _fun22760;
            case 582:
                var12 = var7.formatDistance;
                var11 = 'aboutXYears';
                var9 = var12.bind(var7)(var11, var13, var6);
            case 599:
                return var9;
            case 601:
                var12 = var0.Math;
                var11 = var12.round;
                var9 = _closure1_slot13;
                var9 = var5 / var9;
                var12 = var11.bind(var12)(var9);
                var11 = var7.formatDistance;
                var9 = 'xMonths';
                var9 = var11.bind(var7)(var9, var12, var6);
                return var9;
            case 644:
                var12 = var0.Math;
                var11 = var12.round;
                var9 = _closure1_slot13;
                var9 = var5 / var9;
                var12 = var11.bind(var12)(var9);
                var11 = var7.formatDistance;
                var9 = 'aboutXMonths';
                var9 = var11.bind(var7)(var9, var12, var6);
                return var9;
            case 687:
                var11 = var0.Math;
                var9 = var11.round;
                var8 = _closure1_slot11;
                var8 = var5 / var8;
                var11 = var9.bind(var11)(var8);
                var9 = var7.formatDistance;
                var8 = 'xDays';
                var8 = var9.bind(var7)(var8, var11, var6);
                return var8;
            case 730:
                var11 = var7.formatDistance;
                var9 = 'xDays';
                var8 = 1;
                var8 = var11.bind(var7)(var9, var8, var6);
                return var8;
            case 752:
                var11 = var0.Math;
                var9 = var11.round;
                var8 = var5 / var2;
                var11 = var9.bind(var11)(var8);
                var9 = var7.formatDistance;
                var8 = 'aboutXHours';
                var8 = var9.bind(var7)(var8, var11, var6);
                return var8;
            case 791:
                var11 = var7.formatDistance;
                var9 = 'aboutXHours';
                var8 = 1;
                var8 = var11.bind(var7)(var9, var8, var6);
                return var8;
            case 813:
                var9 = var7.formatDistance;
                var8 = 'xMinutes';
                var8 = var9.bind(var7)(var8, var5, var6);
                return var8;
            case 832:
                if (!(var4 != var1)) {
                    _fun22760_ip = 847;
                    continue _fun22760
                }
            case 836:
                var1 = var1.includeSeconds;
                if (var1) {
                    _fun22760_ip = 895;
                    continue _fun22760
                }
            case 847:
                if (!(var10 !== var5)) {
                    _fun22760_ip = 870;
                    continue _fun22760
                }
            case 851:
                var4 = var7.formatDistance;
                var1 = 'xMinutes';
                var1 = var4.bind(var7)(var1, var5, var6);
                _fun22760_ip = 890;
                continue _fun22760;
            case 870:
                var8 = var7.formatDistance;
                var5 = 'lessThanXMinutes';
                var4 = 1;
                var1 = var8.bind(var7)(var5, var4, var6);
            case 890:
                _fun22760_ip = 1051;
                continue _fun22760;
            case 895:
                var5 = 5;
                if (!(!(var3 < var5))) {
                    _fun22760_ip = 1031;
                    continue _fun22760
                }
            case 905:
                var8 = 10;
                if (!(!(var3 < var8))) {
                    _fun22760_ip = 1012;
                    continue _fun22760
                }
            case 912:
                var9 = 20;
                if (!(!(var3 < var9))) {
                    _fun22760_ip = 993;
                    continue _fun22760
                }
            case 919:
                var4 = 40;
                if (!(!(var3 < var4))) {
                    _fun22760_ip = 974;
                    continue _fun22760
                }
            case 926:
                if (!(!(var3 < var2))) {
                    _fun22760_ip = 952;
                    continue _fun22760
                }
            case 930:
                var4 = var7.formatDistance;
                var3 = 'xMinutes';
                var2 = 1;
                var2 = var4.bind(var7)(var3, var2, var6);
                _fun22760_ip = 972;
                continue _fun22760;
            case 952:
                var11 = var7.formatDistance;
                var4 = 'lessThanXMinutes';
                var3 = 1;
                var2 = var11.bind(var7)(var4, var3, var6);
            case 972:
                _fun22760_ip = 991;
                continue _fun22760;
            case 974:
                var4 = var7.formatDistance;
                var3 = 'halfAMinute';
                var2 = var4.bind(var7)(var3, var10, var6);
            case 991:
                _fun22760_ip = 1010;
                continue _fun22760;
            case 993:
                var4 = var7.formatDistance;
                var3 = 'lessThanXSeconds';
                var2 = var4.bind(var7)(var3, var9, var6);
            case 1010:
                _fun22760_ip = 1029;
                continue _fun22760;
            case 1012:
                var4 = var7.formatDistance;
                var3 = 'lessThanXSeconds';
                var2 = var4.bind(var7)(var3, var8, var6);
            case 1029:
                _fun22760_ip = 1048;
                continue _fun22760;
            case 1031:
                var4 = var7.formatDistance;
                var3 = 'lessThanXSeconds';
                var2 = var4.bind(var7)(var3, var5, var6);
            case 1048:
                var1 = var2;
            case 1051:
                return var1;
            case 1053:
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var19 = 'Invalid time value';
                var20 = var1;
                var0 = new var20[var2](var19, var18);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
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
    var2 = 1440;
    var _closure1_slot11 = var2;
    var2 = 2520;
    var _closure1_slot12 = var2;
    var2 = 43200;
    var _closure1_slot13 = var2;
    var2 = 86400;
    var _closure1_slot14 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2708, 2730, 2735, 2778, 2532, 2781, 2782, 2695, 2533, 2537]);