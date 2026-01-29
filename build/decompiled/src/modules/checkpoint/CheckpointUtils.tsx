// modules/checkpoint/CheckpointUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot3 = var3;
    var4 = 1;
    var3 = var6[var4];
    var3 = var5.bind(var0)(var3);
    var3 = var3.TimeUnits;
    var7 = var3.HOURS;
    var3 = new Array(2);
    var3[0] = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.TimeUnits;
    var4 = var4.MINUTES;
    var3[1] = var4;
    var _closure1_slot4 = var3;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/CheckpointUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.VALID_TIME_UNITS = var3;
    var3 = function(arg0) { // Original name: getVoiceDurationString, environment: var1
        _fun56293: for (var _fun56293_ip = 0;;) switch (_fun56293_ip) {
            case 0:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 1;
                var0 = var5[var6];
                var3 = undefined;
                var8 = var2.bind(var3)(var0);
                var7 = var8.getTimeAndUnit;
                var4 = _closure1_slot4;
                var0 = arg0;
                var0 = var7.bind(var8)(var0, var4);
                var4 = var0.unit;
                var7 = var0.time;
                var0 = 2;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getAbbreviatedFormatter;
                var0 = var0.bind(var2)();
                var2 = null;
                if (!(var2 != var7)) {
                    _fun56293_ip = 240;
                    continue _fun56293
                }
            case 87:
                var2 = global;
                var5 = var2.Math;
                var2 = var5.round;
                var8 = var2.bind(var5)(var7);
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var3)(var2);
                var2 = var2.TimeUnits;
                var2 = var2.HOURS;
                if (!(var4 !== var2)) {
                    _fun56293_ip = 189;
                    continue _fun56293
                }
            case 138:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 3;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var6 = var2.intl;
                var5 = var6.formatToPlainString;
                var4 = var0.minutes;
                var2 = {};
                var2.minutes = var8;
                var2 = var5.bind(var6)(var4, var2);
                _fun56293_ip = 238;
                continue _fun56293;
            case 189:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var7 = var4.intl;
                var6 = var7.formatToPlainString;
                var5 = var0.hours;
                var4 = {};
                var4.hours = var8;
                var2 = var6.bind(var7)(var5, var4);
            case 238:
                return var2;
            case 240:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.intl;
                var2 = var3.formatToPlainString;
                var1 = var0.minutes;
                var0 = {};
                var4 = 0;
                var0.minutes = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getVoiceDurationString = var3;
    var3 = function(arg0) { // Original name: getDurationAndUnit, environment: var1
        _fun56294: for (var _fun56294_ip = 0;;) switch (_fun56294_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getTimeAndUnit;
                var1 = _closure1_slot4;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                var1 = var0.unit;
                var5 = var0.time;
                var0 = {};
                var2 = global;
                var4 = var2.Math;
                var3 = var4.round;
                var2 = null;
                var6 = var2 != var5;
                var2 = 0;
                if (!var6) {
                    _fun56294_ip = 85;
                    continue _fun56294
                }
            case 82:
                var2 = var5;
            case 85:
                var2 = var3.bind(var4)(var2);
                var0.duration = var2;
                var0.unit = var1;
                return var0;
        }
    };
    var2.getDurationAndUnit = var3;
    var3 = function(arg0) { // Original name: getCardAssetUrl, environment: var1
        _fun56295: for (var _fun56295_ip = 0;;) switch (_fun56295_ip) {
            case 0:
                var1 = arg0;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun56295_ip = 326;
                    continue _fun56295
                }
            case 12:
                var0 = 1;
                if (!(var0 !== var1)) {
                    _fun56295_ip = 299;
                    continue _fun56295
                }
            case 22:
                var0 = 2;
                if (!(var0 !== var1)) {
                    _fun56295_ip = 272;
                    continue _fun56295
                }
            case 32:
                var0 = 3;
                if (!(var0 !== var1)) {
                    _fun56295_ip = 245;
                    continue _fun56295
                }
            case 42:
                var0 = 4;
                if (!(var0 !== var1)) {
                    _fun56295_ip = 218;
                    continue _fun56295
                }
            case 52:
                var0 = 5;
                if (!(var0 !== var1)) {
                    _fun56295_ip = 191;
                    continue _fun56295
                }
            case 62:
                var0 = 6;
                if (!(var0 !== var1)) {
                    _fun56295_ip = 164;
                    continue _fun56295
                }
            case 69:
                var0 = 7;
                if (!(var0 !== var1)) {
                    _fun56295_ip = 137;
                    continue _fun56295
                }
            case 76:
                var0 = 8;
                if (!(var0 !== var1)) {
                    _fun56295_ip = 110;
                    continue _fun56295
                }
            case 83:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 110:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 137:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 164:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 191:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 218:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 245:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 272:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 299:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 326:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.getCardAssetUrl = var3;
    var3 = function(arg0, arg1) { // Original name: useCheckpointPercentileAltData, environment: var1
        var5 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var2;
        var0 = {};
        var4 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var5;
        var3[1] = var2;
        var2 = undefined;
        var1 = function() { // Environment: var1
            var0 = global;
            var0 = var0.Date;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var7 = var1;
            var0 = new var7[var0](var6);
            var3 = var0 instanceof Object ? var0 : var1;
            var0 = var3.setDate;
            var4 = 1;
            var0 = var0.bind(var3)(var4);
            var2 = var3.setMonth;
            var1 = _closure2_slot0;
            var1 = var1 - var4;
            var1 = var2.bind(var3)(var1);
            var2 = var3.toLocaleString;
            var1 = _closure2_slot1;
            var0 = {};
            var4 = 'long';
            var0.month = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = var4.bind(var2)(var1, var3);
        var0.monthName = var1;
        return var0;
    };
    var2.useCheckpointPercentileAltData = var3;
    var1 = function(arg0) { // Original name: getCheckpointPowerBarUnits, environment: var1
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3486, 4181, 1234, 6807, 6808, 6809, 6810, 6811, 6812, 6813, 6814, 6815, 6816, 2]);