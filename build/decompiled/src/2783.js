// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function arg0() {
        _fun22766: for (var _fun22766_ip = 0;;) switch (_fun22766_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22766_ip = 18;
                    continue _fun22766
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22766_ip = 27;
                    continue _fun22766
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
        _fun22767: for (var _fun22767_ip = 0;;) switch (_fun22767_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var9 = arg2;
                var3 = undefined;
                var0 = undefined;
                var1 = _closure1_slot8;
                var4 = var1.default;
                var0 = arguments;
                var1 = var0;
                var0 = 2;
                var0 = var4.bind(var3)(var0, var1);
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 7;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.getDefaultOptions;
                var0 = var0.bind(var3)();
                var10 = null;
                var1 = var10 == var9;
                var5 = undefined;
                if (var1) {
                    _fun22767_ip = 86;
                    continue _fun22767
                }
            case 80:
                var5 = var9.locale;
            case 86:
                if (!(var10 !== var5)) {
                    _fun22767_ip = 94;
                    continue _fun22767
                }
            case 90:
                if (!(var3 === var5)) {
                    _fun22767_ip = 100;
                    continue _fun22767
                }
            case 94:
                var5 = var0.locale;
            case 100:
                if (!(var10 !== var5)) {
                    _fun22767_ip = 108;
                    continue _fun22767
                }
            case 104:
                if (!(var3 === var5)) {
                    _fun22767_ip = 117;
                    continue _fun22767
                }
            case 108:
                var0 = _closure1_slot7;
                var5 = var0.default;
            case 117:
                var0 = var5.formatDistance;
                if (var0) {
                    _fun22767_ip = 162;
                    continue _fun22767
                }
            case 126:
                var0 = global;
                var4 = var0.RangeError;
                var0 = var4.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var18 = 'locale must contain localize.formatDistance property';
                var19 = var1;
                var0 = new var19[var4](var18, var17);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 162:
                var0 = _closure1_slot3;
                var0 = var0.default;
                var8 = var0.bind(var3)(var6, var2);
                var0 = global;
                var1 = var0.isNaN;
                var1 = var1.bind(var3)(var8);
                if (var1) {
                    _fun22767_ip = 969;
                    continue _fun22767
                }
            case 196:
                var1 = _closure1_slot6;
                var11 = var1.default;
                var1 = _closure1_slot5;
                var1 = var1.default;
                var4 = var1.bind(var3)(var9);
                var1 = {};
                var13 = var0.Boolean;
                var14 = var10 == var9;
                var12 = undefined;
                if (var14) {
                    _fun22767_ip = 242;
                    continue _fun22767
                }
            case 236:
                var12 = var9.addSuffix;
            case 242:
                var12 = var13.bind(var3)(var12);
                var1.addSuffix = var12;
                var1.comparison = var8;
                var4 = var11.bind(var3)(var4, var1);
                var1 = 0;
                if (!(!(var8 > var1))) {
                    _fun22767_ip = 299;
                    continue _fun22767
                }
            case 269:
                var1 = _closure1_slot4;
                var1 = var1.default;
                var12 = var1.bind(var3)(var6);
                var1 = _closure1_slot4;
                var1 = var1.default;
                var11 = var1.bind(var3)(var2);
                _fun22767_ip = 327;
                continue _fun22767;
            case 299:
                var1 = _closure1_slot4;
                var1 = var1.default;
                var12 = var1.bind(var3)(var2);
                var1 = _closure1_slot4;
                var1 = var1.default;
                var11 = var1.bind(var3)(var6);
            case 327:
                var6 = var0.String;
                var1 = var10 == var9;
                var8 = undefined;
                if (var1) {
                    _fun22767_ip = 348;
                    continue _fun22767
                }
            case 342:
                var8 = var9.roundingMethod;
            case 348:
                var2 = 'round';
                var1 = var2;
                if (!(var10 !== var8)) {
                    _fun22767_ip = 369;
                    continue _fun22767
                }
            case 359:
                var1 = var2;
                if (!(var3 !== var8)) {
                    _fun22767_ip = 369;
                    continue _fun22767
                }
            case 366:
                var1 = var8;
            case 369:
                var1 = var6.bind(var3)(var1);
                var6 = 'floor';
                if (!(var6 !== var1)) {
                    _fun22767_ip = 455;
                    continue _fun22767
                }
            case 382:
                var6 = 'ceil';
                if (!(var6 !== var1)) {
                    _fun22767_ip = 441;
                    continue _fun22767
                }
            case 390:
                if (!(var2 === var1)) {
                    _fun22767_ip = 407;
                    continue _fun22767
                }
            case 394:
                var1 = var0.Math;
                var2 = var1.round;
                _fun22767_ip = 467;
                continue _fun22767;
            case 407:
                var8 = var0.RangeError;
                var1 = var8.prototype;
                var6 = Object.create(var1, {
                    constructor: {
                        value: var8
                    }
                });
                var18 = "roundingMethod must be 'floor', 'ceil' or 'round'";
                var19 = var6;
                var1 = new var19[var8](var18, var17);
                var1 = var1 instanceof Object ? var1 : var6;
                throw var1;
            case 441:
                var1 = var0.Math;
                var2 = var1.ceil;
                _fun22767_ip = 467;
                continue _fun22767;
            case 455:
                var1 = var0.Math;
                var2 = var1.floor;
            case 467:
                var1 = var11.getTime;
                var6 = var1.bind(var11)();
                var1 = var12.getTime;
                var1 = var1.bind(var12)();
                var6 = var6 - var1;
                var1 = _closure1_slot9;
                var1 = var6 / var1;
                var8 = _closure1_slot2;
                var8 = var8.default;
                var11 = var8.bind(var3)(var11);
                var8 = _closure1_slot2;
                var8 = var8.default;
                var8 = var8.bind(var3)(var12);
                var8 = var11 - var8;
                var11 = var6 - var8;
                var8 = _closure1_slot9;
                var8 = var11 / var8;
                var11 = var10 == var9;
                var10 = undefined;
                if (var11) {
                    _fun22767_ip = 558;
                    continue _fun22767
                }
            case 552:
                var10 = var9.unit;
            case 558:
                if (var10) {
                    _fun22767_ip = 646;
                    continue _fun22767
                }
            case 561:
                var12 = 'second';
                var9 = 1;
                if (!(!(var1 < var9))) {
                    _fun22767_ip = 644;
                    continue _fun22767
                }
            case 572:
                var9 = 'minute';
                var11 = 60;
                if (!(!(var1 < var11))) {
                    _fun22767_ip = 641;
                    continue _fun22767
                }
            case 583:
                var11 = _closure1_slot10;
                var13 = var1 < var11;
                var11 = 'hour';
                if (var13) {
                    _fun22767_ip = 638;
                    continue _fun22767
                }
            case 598:
                var13 = _closure1_slot11;
                var14 = var8 < var13;
                var13 = 'day';
                if (var14) {
                    _fun22767_ip = 635;
                    continue _fun22767
                }
            case 613:
                var14 = _closure1_slot12;
                var15 = var8 < var14;
                var14 = 'year';
                if (!var15) {
                    _fun22767_ip = 632;
                    continue _fun22767
                }
            case 628:
                var14 = 'month';
            case 632:
                var13 = var14;
            case 635:
                var11 = var13;
            case 638:
                var9 = var11;
            case 641:
                var12 = var9;
            case 644:
                _fun22767_ip = 657;
                continue _fun22767;
            case 646:
                var9 = var0.String;
                var12 = var9.bind(var3)(var10);
            case 657:
                var9 = 'second';
                if (!(var9 !== var12)) {
                    _fun22767_ip = 935;
                    continue _fun22767
                }
            case 668:
                var9 = 'minute';
                if (!(var9 !== var12)) {
                    _fun22767_ip = 911;
                    continue _fun22767
                }
            case 679:
                var9 = 'hour';
                if (!(var9 !== var12)) {
                    _fun22767_ip = 880;
                    continue _fun22767
                }
            case 690:
                var9 = 'day';
                if (!(var9 !== var12)) {
                    _fun22767_ip = 848;
                    continue _fun22767
                }
            case 701:
                var9 = 'month';
                if (!(var9 !== var12)) {
                    _fun22767_ip = 783;
                    continue _fun22767
                }
            case 709:
                var11 = 'year';
                if (!(var11 !== var12)) {
                    _fun22767_ip = 751;
                    continue _fun22767
                }
            case 717:
                var13 = var0.RangeError;
                var11 = var13.prototype;
                var12 = Object.create(var11, {
                    constructor: {
                        value: var13
                    }
                });
                var18 = "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'";
                var19 = var12;
                var11 = new var19[var13](var18, var17);
                var11 = var11 instanceof Object ? var11 : var12;
                throw var11;
            case 751:
                var11 = _closure1_slot12;
                var11 = var8 / var11;
                var13 = var2.bind(var3)(var11);
                var12 = var5.formatDistance;
                var11 = 'xYears';
                var11 = var12.bind(var5)(var11, var13, var4);
                return var11;
            case 783:
                var11 = _closure1_slot11;
                var11 = var8 / var11;
                var11 = var2.bind(var3)(var11);
                var12 = 12;
                if (!(var12 === var11)) {
                    _fun22767_ip = 807;
                    continue _fun22767
                }
            case 803:
                if (!(var9 === var10)) {
                    _fun22767_ip = 826;
                    continue _fun22767
                }
            case 807:
                var10 = var5.formatDistance;
                var9 = 'xMonths';
                var9 = var10.bind(var5)(var9, var11, var4);
                _fun22767_ip = 846;
                continue _fun22767;
            case 826:
                var12 = var5.formatDistance;
                var11 = 'xYears';
                var10 = 1;
                var9 = var12.bind(var5)(var11, var10, var4);
            case 846:
                return var9;
            case 848:
                var7 = _closure1_slot10;
                var7 = var8 / var7;
                var9 = var2.bind(var3)(var7);
                var8 = var5.formatDistance;
                var7 = 'xDays';
                var7 = var8.bind(var5)(var7, var9, var4);
                return var7;
            case 880:
                var7 = 60;
                var7 = var1 / var7;
                var9 = var2.bind(var3)(var7);
                var8 = var5.formatDistance;
                var7 = 'xHours';
                var7 = var8.bind(var5)(var7, var9, var4);
                return var7;
            case 911:
                var8 = var2.bind(var3)(var1);
                var7 = var5.formatDistance;
                var1 = 'xMinutes';
                var1 = var7.bind(var5)(var1, var8, var4);
                return var1;
            case 935:
                var1 = 1000;
                var1 = var6 / var1;
                var3 = var2.bind(var3)(var1);
                var2 = var5.formatDistance;
                var1 = 'xSeconds';
                var1 = var2.bind(var5)(var1, var3, var4);
                return var1;
            case 969:
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var18 = 'Invalid time value';
                var19 = var1;
                var0 = new var19[var2](var18, var17);
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
    var2 = 60000;
    var _closure1_slot9 = var2;
    var2 = 1440;
    var _closure1_slot10 = var2;
    var2 = 43200;
    var _closure1_slot11 = var2;
    var2 = 525600;
    var _closure1_slot12 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2695, 2708, 2532, 2781, 2782, 2778, 2533, 2537]);