// modules/checkpoint/CheckpointUtils.tsx
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
    var6 = 0;
    var3 = var5[var6];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.TimeUnits;
    var7 = var3.HOURS;
    var3 = new Array(2);
    var3[0] = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TimeUnits;
    var6 = var6.MINUTES;
    var3[1] = var6;
    var _closure1_slot3 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/CheckpointUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun56562: for (var _fun56562_ip = 0;;) switch (_fun56562_ip) {
            case 0:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 0;
                var0 = var6[var4];
                var3 = undefined;
                var8 = var2.bind(var3)(var0);
                var7 = var8.getTimeAndUnit;
                var5 = _closure1_slot3;
                var0 = arg0;
                var0 = var7.bind(var8)(var0, var5);
                var5 = var0.unit;
                var7 = var0.time;
                var0 = 1;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getAbbreviatedFormatter;
                var0 = var0.bind(var2)();
                var2 = null;
                if (!(var2 != var7)) {
                    _fun56562_ip = 239;
                    continue _fun56562
                }
            case 86:
                var2 = global;
                var6 = var2.Math;
                var2 = var6.round;
                var9 = var2.bind(var6)(var7);
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.TimeUnits;
                var2 = var2.HOURS;
                if (!(var5 !== var2)) {
                    _fun56562_ip = 188;
                    continue _fun56562
                }
            case 137:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var7 = var2.intl;
                var6 = var7.formatToPlainString;
                var5 = var0.minutes;
                var2 = {};
                var2.minutes = var9;
                var2 = var6.bind(var7)(var5, var2);
                _fun56562_ip = 237;
                continue _fun56562;
            case 188:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var8 = var5.intl;
                var7 = var8.formatToPlainString;
                var6 = var0.hours;
                var5 = {};
                var5.hours = var9;
                var2 = var7.bind(var8)(var6, var5);
            case 237:
                return var2;
            case 239:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.intl;
                var2 = var3.formatToPlainString;
                var1 = var0.minutes;
                var0 = {};
                var0.minutes = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getVoiceDurationString = var3;
    var3 = function arg0() {
        _fun56563: for (var _fun56563_ip = 0;;) switch (_fun56563_ip) {
            case 0:
                var1 = arg0;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun56563_ip = 326;
                    continue _fun56563
                }
            case 12:
                var0 = 1;
                if (!(var0 !== var1)) {
                    _fun56563_ip = 299;
                    continue _fun56563
                }
            case 22:
                var0 = 2;
                if (!(var0 !== var1)) {
                    _fun56563_ip = 272;
                    continue _fun56563
                }
            case 32:
                var0 = 3;
                if (!(var0 !== var1)) {
                    _fun56563_ip = 245;
                    continue _fun56563
                }
            case 42:
                var0 = 4;
                if (!(var0 !== var1)) {
                    _fun56563_ip = 218;
                    continue _fun56563
                }
            case 52:
                var0 = 5;
                if (!(var0 !== var1)) {
                    _fun56563_ip = 191;
                    continue _fun56563
                }
            case 62:
                var0 = 6;
                if (!(var0 !== var1)) {
                    _fun56563_ip = 164;
                    continue _fun56563
                }
            case 69:
                var0 = 7;
                if (!(var0 !== var1)) {
                    _fun56563_ip = 137;
                    continue _fun56563
                }
            case 76:
                var0 = 8;
                if (!(var0 !== var1)) {
                    _fun56563_ip = 110;
                    continue _fun56563
                }
            case 83:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 110:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 137:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 164:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 191:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 218:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 245:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 272:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 299:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 326:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.getCardAssetUrl = var3;
    var1 = function arg0() {
        var0 = global;
        var3 = var0.Math;
        var2 = var3.min;
        var5 = var0.Math;
        var4 = var5.max;
        var6 = var0.Math;
        var1 = var6.round;
        var7 = arg0;
        var0 = 10;
        var0 = var7 / var0;
        var1 = var1.bind(var6)(var0);
        var0 = 1;
        var1 = var4.bind(var5)(var1, var0);
        var0 = 9;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getCheckpointPowerBarUnits = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3529, 4223, 1234, 6852, 6853, 6854, 6855, 6856, 6857, 6858, 6859, 6860, 6861, 2]);