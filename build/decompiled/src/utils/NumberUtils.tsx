// utils/NumberUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/NumberUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun17824: for (var _fun17824_ip = 0;;) switch (_fun17824_ip) {
            case 0:
                var4 = arg0;
                var0 = 1000000;
                if (!(!(var4 < var0))) {
                    _fun17824_ip = 99;
                    continue _fun17824
                }
            case 13:
                var2 = var4 / var0;
                var1 = var2.toFixed;
                var0 = 1;
                var5 = var1.bind(var2)(var0);
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var2 = var7[var0];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var7[var0];
                var0 = var6.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.Iku48I;
                var0 = {};
                var0.value = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 99:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 0;
                var2 = var6[var0];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var5.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.OiHat3;
                var0 = {};
                var0.value = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.shortenAndLocalizeNumber = var3;
    var3 = function arg0, arg1() {
        _fun17825: for (var _fun17825_ip = 0;;) switch (_fun17825_ip) {
            case 0:
                var6 = arg0;
                var4 = 1000;
                if (!(!(var6 < var4))) {
                    _fun17825_ip = 280;
                    continue _fun17825
                }
            case 16:
                var7 = 1000000;
                if (!(!(var6 < var7))) {
                    _fun17825_ip = 189;
                    continue _fun17825
                }
            case 29:
                var0 = global;
                var5 = var0.Math;
                var3 = var5.floor;
                var2 = 10;
                var1 = var2 * var6;
                var1 = var1 / var7;
                var1 = var3.bind(var5)(var1);
                var2 = var1 / var2;
                var0 = var0.Intl;
                var5 = var0.NumberFormat;
                var3 = {};
                var0 = 1;
                var3.maximumFractionDigits = var0;
                var0 = var5.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = arg1;
                var11 = var1;
                var9 = var3;
                var0 = new var11[var5](var10, var9, var8);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var1.format;
                var5 = var0.bind(var1)(var2);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 0;
                var2 = var8[var0];
                var1 = undefined;
                var2 = var7.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var8[var0];
                var0 = var7.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.Iku48I;
                var0 = {};
                var0.value = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 189:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var2 = var7[var0];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var7[var0];
                var0 = var5.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0["84R4Tc"];
                var0 = {};
                var5 = global;
                var7 = var5.Math;
                var5 = var7.floor;
                var4 = var6 / var4;
                var4 = var5.bind(var7)(var4);
                var0.value = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 280:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var2 = var5[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var5[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.OiHat3;
                var0 = {};
                var4 = global;
                var5 = var4.Math;
                var4 = var5.floor;
                var4 = var4.bind(var5)(var6);
                var0.value = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.humanizeValue = var3;
    var3 = function arg0() {
        _fun17826: for (var _fun17826_ip = 0;;) switch (_fun17826_ip) {
            case 0:
                var4 = arg0;
                var0 = arguments[1];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun17826_ip = 20;
                    continue _fun17826
                }
            case 12:
                var1 = global;
                var0 = var1.NaN;
            case 20:
                var1 = null;
                if (!(var1 != var4)) {
                    _fun17826_ip = 64;
                    continue _fun17826
                }
            case 26:
                var2 = global;
                var1 = var2.parseInt;
                var1 = var1.bind(var3)(var4);
                var3 = var2.Number;
                var2 = var3.isNaN;
                var2 = var2.bind(var3)(var1);
                if (!var2) {
                    _fun17826_ip = 62;
                    continue _fun17826
                }
            case 59:
                var1 = var0;
            case 62:
                return var1;
            case 64:
                return var0;
        }
    };
    var2.parseInteger = var3;
    var1 = function arg0, arg1() {
        _fun17827: for (var _fun17827_ip = 0;;) switch (_fun17827_ip) {
            case 0:
                var0 = arguments[2];
                var1 = undefined;
                if (!(var0 === var1)) {
                    _fun17827_ip = 11;
                    continue _fun17827
                }
            case 9:
                var0 = {};
            case 11:
                var1 = global;
                var3 = var1.Intl;
                var2 = var3.NumberFormat;
                var1 = {
                    'style': 'percent',
                    'minimumFractionDigits': 0
                };
                var5 = var1;
                var4 = var0;
                var0 = copyDataProperties(var5, var4);
                var0 = arg0;
                var2 = var2.bind(var3)(var0, var1);
                var1 = var2.format;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.formatPercent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2]);