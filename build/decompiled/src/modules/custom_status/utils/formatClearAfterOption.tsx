// modules/custom_status/utils/formatClearAfterOption.tsx
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
    var3 = function(arg0) { // Original name: formatDuration, environment: var1
        _fun92245: for (var _fun92245_ip = 0;;) switch (_fun92245_ip) {
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
                    _fun92245_ip = 227;
                    continue _fun92245
                }
            case 144:
                var3 = var1.formatToPlainString;
                var0 = var8[var5];
                var0 = var6.bind(var7)(var0);
                var0 = var0.t;
                var2 = var0.DN91Jz;
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
                _fun92245_ip = 254;
                continue _fun92245;
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
    var3 = 'modules/custom_status/utils/formatClearAfterOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: formatClearAfterOption, environment: var1
        _fun92246: for (var _fun92246_ip = 0;;) switch (_fun92246_ip) {
            case 0:
                var5 = arg0;
                var0 = arguments[1];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun92246_ip = 14;
                    continue _fun92246
                }
            case 12:
                var0 = false;
            case 14:
                var2 = _closure1_slot3;
                var2 = var2.TODAY;
                if (!(var2 !== var5)) {
                    _fun92246_ip = 635;
                    continue _fun92246
                }
            case 34:
                var2 = _closure1_slot3;
                var2 = var2.HOURS_4;
                if (!(var2 !== var5)) {
                    _fun92246_ip = 484;
                    continue _fun92246
                }
            case 51:
                var2 = _closure1_slot3;
                var2 = var2.HOURS_1;
                if (!(var2 !== var5)) {
                    _fun92246_ip = 337;
                    continue _fun92246
                }
            case 68:
                var2 = _closure1_slot3;
                var2 = var2.MINUTES_30;
                if (!(var2 !== var5)) {
                    _fun92246_ip = 186;
                    continue _fun92246
                }
            case 82:
                var2 = _closure1_slot3;
                var2 = var2.DONT_CLEAR;
                if (!(var2 !== var5)) {
                    _fun92246_ip = 129;
                    continue _fun92246
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
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var5 = var8[var2];
                var5 = var4.bind(var3)(var5);
                var7 = var5.intl;
                var5 = var7.formatToPlainString;
                var2 = var8[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.TS3eJb;
                var2 = {};
                var6 = 30;
                var2.minutes = var6;
                var9 = var5.bind(var7)(var4, var2);
                if (var0) {
                    _fun92246_ip = 260;
                    continue _fun92246
                }
            case 255:
                var2 = var9;
                _fun92246_ip = 335;
                continue _fun92246;
            case 260:
                var5 = _closure1_slot4;
                var7 = _closure1_slot1;
                var4 = 3;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.Millis;
                var4 = var4.MINUTE;
                var4 = var6 * var4;
                var11 = var5.bind(var3)(var4);
                var4 = global;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var14 = '';
                var12 = ' (';
                var10 = ')';
                var13 = var9;
                var2 = var14[var7](var13, var12, var11, var10, var9);
            case 335:
                return var2;
            case 337:
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
                var8 = 1;
                var2.hours = var8;
                var9 = var5.bind(var6)(var4, var2);
                if (var0) {
                    _fun92246_ip = 411;
                    continue _fun92246
                }
            case 406:
                var2 = var9;
                _fun92246_ip = 482;
                continue _fun92246;
            case 411:
                var5 = _closure1_slot4;
                var6 = _closure1_slot1;
                var4 = 3;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.Millis;
                var4 = var4.HOUR;
                var11 = var5.bind(var3)(var4);
                var4 = global;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var14 = '';
                var12 = ' (';
                var10 = ')';
                var13 = var9;
                var2 = var14[var7](var13, var12, var11, var10, var9);
            case 482:
                return var2;
            case 484:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var5 = var8[var2];
                var5 = var4.bind(var3)(var5);
                var7 = var5.intl;
                var5 = var7.formatToPlainString;
                var2 = var8[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.Rea2gR;
                var2 = {};
                var6 = 4;
                var2.hours = var6;
                var9 = var5.bind(var7)(var4, var2);
                if (var0) {
                    _fun92246_ip = 558;
                    continue _fun92246
                }
            case 553:
                var2 = var9;
                _fun92246_ip = 633;
                continue _fun92246;
            case 558:
                var5 = _closure1_slot4;
                var7 = _closure1_slot1;
                var4 = 3;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.Millis;
                var4 = var4.HOUR;
                var4 = var6 * var4;
                var11 = var5.bind(var3)(var4);
                var4 = global;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var14 = '';
                var12 = ' (';
                var10 = ')';
                var13 = var9;
                var2 = var14[var7](var13, var12, var11, var10, var9);
            case 633:
                return var2;
            case 635:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var7 = var6.intl;
                if (var0) {
                    _fun92246_ip = 695;
                    continue _fun92246
                }
            case 663:
                var6 = var7.string;
                var0 = var5[var2];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.GQmLrZ;
                var0 = var6.bind(var7)(var0);
                _fun92246_ip = 807;
                continue _fun92246;
            case 695:
                var6 = var7.formatToPlainString;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.Rea2gR;
                var2 = {};
                var8 = 24;
                var2.hours = var8;
                var6 = var6.bind(var7)(var4, var2);
                var2 = _closure1_slot4;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.Millis;
                var1 = var1.DAY;
                var11 = var2.bind(var3)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var14 = '';
                var12 = ' (';
                var10 = ')';
                var13 = var6;
                var0 = var14[var4](var13, var12, var11, var10, var9);
            case 807:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6943, 3091, 1234, 667, 1304, 2]);