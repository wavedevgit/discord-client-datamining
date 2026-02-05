// modules/custom_status/utils/formatClearAfterValue.tsx
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ClearAfterValues;
    var _closure1_slot3 = var3;
    var3 = function arg0() {
        _fun92344: for (var _fun92344_ip = 0;;) switch (_fun92344_ip) {
            case 0:
                var0 = global;
                var2 = var0.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = arg0;
                var4 = var2 + var1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 1;
                var2 = var5[var2];
                var7 = undefined;
                var5 = var3.bind(var7)(var2);
                var3 = var5.isSameDay;
                var2 = var0.Date;
                var6 = var2.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var6;
                var2 = new var11[var2](var10);
                var2 = var2 instanceof Object ? var2 : var6;
                var0 = var0.Date;
                var6 = var0.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var0
                    }
                });
                var11 = var6;
                var10 = var4;
                var0 = new var11[var0](var10, var9);
                var0 = var0 instanceof Object ? var0 : var6;
                var0 = var3.bind(var5)(var2, var0);
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 2;
                var1 = var8[var5];
                var1 = var6.bind(var7)(var1);
                var1 = var1.intl;
                if (var0) {
                    _fun92344_ip = 227;
                    continue _fun92344
                }
            case 144:
                var3 = var1.formatToPlainString;
                var0 = var8[var5];
                var0 = var6.bind(var7)(var0);
                var0 = var0.t;
                var2 = var0.bI7n9i;
                var0 = {};
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.intl;
                var7 = var5.data;
                var6 = var7.formatTime;
                var5 = {};
                var8 = 'short';
                var5.format = var8;
                var5 = var6.bind(var7)(var4, var5);
                var0.time = var5;
                var0 = var3.bind(var1)(var2, var0);
                _fun92344_ip = 254;
                continue _fun92344;
            case 227:
                var3 = var1.data;
                var2 = var3.formatTime;
                var1 = {};
                var5 = 'short';
                var1.format = var5;
                var0 = var2.bind(var3)(var4, var1);
            case 254:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/utils/formatClearAfterValue.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92345: for (var _fun92345_ip = 0;;) switch (_fun92345_ip) {
            case 0:
                var5 = arg0;
                var0 = arguments[1];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun92345_ip = 14;
                    continue _fun92345
                }
            case 12:
                var0 = false;
            case 14:
                var2 = _closure1_slot3;
                var2 = var2.TODAY;
                if (!(var2 !== var5)) {
                    _fun92345_ip = 542;
                    continue _fun92345
                }
            case 34:
                var2 = _closure1_slot3;
                var2 = var2.HOURS_4;
                if (!(var2 !== var5)) {
                    _fun92345_ip = 421;
                    continue _fun92345
                }
            case 51:
                var2 = _closure1_slot3;
                var2 = var2.HOURS_1;
                if (!(var2 !== var5)) {
                    _fun92345_ip = 307;
                    continue _fun92345
                }
            case 68:
                var2 = _closure1_slot3;
                var2 = var2.MINUTES_30;
                if (!(var2 !== var5)) {
                    _fun92345_ip = 186;
                    continue _fun92345
                }
            case 82:
                var2 = _closure1_slot3;
                var2 = var2.DONT_CLEAR;
                if (!(var2 !== var5)) {
                    _fun92345_ip = 129;
                    continue _fun92345
                }
            case 96:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.assertNever;
                var2 = var2.bind(var4)(var5);
                return var3;
            case 129:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var4 = var7[var2];
                var4 = var6.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.bRn8cq;
                var2 = var4.bind(var5)(var2);
                return var2;
            case 186:
                if (var0) {
                    _fun92345_ip = 257;
                    continue _fun92345
                }
            case 189:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var5 = var7[var2];
                var5 = var4.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var7[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.TS3eJb;
                var2 = {};
                var7 = 30;
                var2.minutes = var7;
                var2 = var5.bind(var6)(var4, var2);
                _fun92345_ip = 305;
                continue _fun92345;
            case 257:
                var5 = _closure1_slot4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 3;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.Millis;
                var6 = var4.MINUTE;
                var4 = 30;
                var4 = var4 * var6;
                var2 = var5.bind(var3)(var4);
            case 305:
                return var2;
            case 307:
                if (var0) {
                    _fun92345_ip = 378;
                    continue _fun92345
                }
            case 310:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var5 = var7[var2];
                var5 = var4.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var7[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.Rea2gR;
                var2 = {};
                var7 = 1;
                var2.hours = var7;
                var2 = var5.bind(var6)(var4, var2);
                _fun92345_ip = 419;
                continue _fun92345;
            case 378:
                var5 = _closure1_slot4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 3;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.Millis;
                var4 = var4.HOUR;
                var2 = var5.bind(var3)(var4);
            case 419:
                return var2;
            case 421:
                if (var0) {
                    _fun92345_ip = 492;
                    continue _fun92345
                }
            case 424:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var5 = var7[var2];
                var5 = var4.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var7[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.Rea2gR;
                var2 = {};
                var7 = 4;
                var2.hours = var7;
                var2 = var5.bind(var6)(var4, var2);
                _fun92345_ip = 540;
                continue _fun92345;
            case 492:
                var5 = _closure1_slot4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 3;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.Millis;
                var6 = var4.HOUR;
                var4 = 4;
                var4 = var4 * var6;
                var2 = var5.bind(var3)(var4);
            case 540:
                return var2;
            case 542:
                if (var0) {
                    _fun92345_ip = 602;
                    continue _fun92345
                }
            case 545:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 2;
                var2 = var6[var0];
                var2 = var5.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.GQmLrZ;
                var0 = var2.bind(var4)(var0);
                _fun92345_ip = 643;
                continue _fun92345;
            case 602:
                var2 = _closure1_slot4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.Millis;
                var1 = var1.DAY;
                var0 = var2.bind(var3)(var1);
            case 643:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7004, 3132, 1234, 667, 1304, 2]);