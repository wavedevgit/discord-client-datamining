// modules/markup/TimestampUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun44082: for (var _fun44082_ip = 0;;) switch (_fun44082_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.timestamp;
                var5 = var0.format;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 1;
                var0 = var8[var0];
                var3 = undefined;
                var1 = var7.bind(var3)(var0);
                var0 = global;
                var0 = var0.Number;
                var2 = var0.bind(var3)(var6);
                var0 = 2;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.Millis;
                var0 = var0.SECOND;
                var0 = var2 * var0;
                var2 = var1.bind(var3)(var0);
                var0 = var2.isValid;
                var1 = var0.bind(var2)();
                var0 = null;
                if (var1) {
                    _fun44082_ip = 102;
                    continue _fun44082
                }
            case 100:
                return var0;
            case 102:
                var7 = var0 != var5;
                var1 = undefined;
                if (!var7) {
                    _fun44082_ip = 119;
                    continue _fun44082
                }
            case 111:
                var7 = _closure1_slot3;
                var1 = var7[var5];
            case 119:
                if (!(var0 == var1)) {
                    _fun44082_ip = 133;
                    continue _fun44082
                }
            case 123:
                var0 = _closure1_slot3;
                var1 = var0.f;
            case 133:
                var0 = {};
                var0.timestamp = var6;
                var0.format = var5;
                var0.parsed = var2;
                var5 = _closure1_slot3;
                var4 = var5.F;
                var4 = var4.bind(var5)(var2);
                var0.full = var4;
                var1 = var1.bind(var3)(var2);
                var0.formatted = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var2, var4, var5);
    var5 = {};
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dateFormat;
        var1 = arg0;
        var0 = 'LT';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5.t = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dateFormat;
        var1 = arg0;
        var0 = 'LTS';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5.T = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dateFormat;
        var1 = arg0;
        var0 = 'L';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5.d = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dateFormat;
        var1 = arg0;
        var0 = 'LL';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5.D = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dateFormat;
        var1 = arg0;
        var0 = 'LLL';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5.f = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dateFormat;
        var1 = arg0;
        var0 = 'LLLL';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5.F = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dateFormat;
        var1 = arg0;
        var0 = 'L LT';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5.s = var4;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dateFormat;
        var1 = arg0;
        var0 = 'L LTS';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5.S = var4;
    var4 = function arg0() {
        _fun44091: for (var _fun44091_ip = 0;;) switch (_fun44091_ip) {
            case 0:
                var0 = arg0;
                var3 = undefined;
                var11 = undefined;
                var10 = undefined;
                var4 = undefined;
                var1 = undefined;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 1;
                var8 = var6[var5];
                var9 = var7.bind(var3)(var8);
                var8 = var9.relativeTimeThreshold;
                var15 = 's';
                var11 = var8.bind(var9)(var15);
                var8 = var6[var5];
                var12 = var7.bind(var3)(var8);
                var9 = var12.relativeTimeThreshold;
                var8 = 60;
                var9 = var9.bind(var12)(var15, var8);
                var9 = var6[var5];
                var12 = var7.bind(var3)(var9);
                var9 = var12.relativeTimeThreshold;
                var13 = 'ss';
                var10 = var9.bind(var12)(var13);
                var9 = var6[var5];
                var14 = var7.bind(var3)(var9);
                var12 = var14.relativeTimeThreshold;
                var9 = -1;
                var9 = var12.bind(var14)(var13, var9);
                var9 = var6[var5];
                var14 = var7.bind(var3)(var9);
                var12 = var14.relativeTimeThreshold;
                var9 = 'm';
                var4 = var12.bind(var14)(var9);
                var6 = var6[var5];
                var7 = var7.bind(var3)(var6);
                var6 = var7.relativeTimeThreshold;
                var6 = var6.bind(var7)(var9, var8);
                var6 = null;
                var1 = null;
            case 175: // try_start_0
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var5];
                var8 = var8.bind(var3)(var7);
                var12 = var0;
                var7 = var12.toDate;
                var7 = var7.bind(var12)();
                var8 = var8.bind(var3)(var7);
                var7 = var8.fromNow;
                var1 = var7.bind(var8)();
            case 220: // try_end0
                _fun44091_ip = 224;
                continue _fun44091;
            case 222: // catch_target0
                CatchBlockStart(arg_register = 7);
            case 224:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var12 = var7[var5];
                var14 = var8.bind(var3)(var12);
                var12 = var14.relativeTimeThreshold;
                var11 = var12.bind(var14)(var15, var11);
                var11 = var7[var5];
                var12 = var8.bind(var3)(var11);
                var11 = var12.relativeTimeThreshold;
                var10 = var11.bind(var12)(var13, var10);
                var7 = var7[var5];
                var8 = var8.bind(var3)(var7);
                var7 = var8.relativeTimeThreshold;
                var4 = var7.bind(var8)(var9, var4);
                var4 = var1;
                if (!(var6 == var4)) {
                    _fun44091_ip = 349;
                    continue _fun44091
                }
            case 302:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var3)(var2);
                var4 = var0;
                var0 = var4.toDate;
                var0 = var0.bind(var4)();
                var2 = var2.bind(var3)(var0);
                var0 = var2.fromNow;
                var0 = var0.bind(var2)();
                _fun44091_ip = 352;
                continue _fun44091;
            case 349:
                var0 = var1;
            case 352:
                return var0;
        }
    };
    var5.R = var4;
    var _closure1_slot3 = var5;
    var9 = var0.Object;
    var8 = var9.setPrototypeOf;
    var4 = null;
    var4 = var8.bind(var9)(var5, var4);
    var8 = var0.Object;
    var4 = var8.keys;
    var9 = var4.bind(var8)(var5);
    var8 = var9.join;
    var4 = '|';
    var10 = var8.bind(var9)(var4);
    var8 = var0.RegExp;
    var0 = var0.HermesInternal;
    var9 = var0.concat;
    var4 = '^<t:(-?\\d{1,17})(?::(';
    var0 = '))?>';
    var13 = var9.bind(var4)(var10, var0);
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var0 = new var14[var8](var13, var12);
    var4 = var0 instanceof Object ? var0 : var4;
    var0 = 3;
    var6 = var6[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/markup/TimestampUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.TIMESTAMP_FORMATS = var5;
    var5 = 'f';
    var2.DEFAULT_TIMESTAMP_FORMAT = var5;
    var2.TIMESTAMP_REGEX = var4;
    var2.formatTimestampMention = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot4;
        var1 = {};
        var0 = arg0;
        var1.timestamp = var0;
        var0 = arg1;
        var1.format = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.parseTimestamp = var3;
    var1 = function arg0, arg1() {
        _fun44093: for (var _fun44093_ip = 0;;) switch (_fun44093_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun44093_ip = 43;
                    continue _fun44093
                }
            case 12:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '<t:';
                var0 = '>';
                var0 = var2.bind(var1)(var6, var0);
                _fun44093_ip = 80;
                continue _fun44093;
            case 43:
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var11 = '<t:';
                var9 = ':';
                var7 = '>';
                var10 = var6;
                var8 = var5;
                var0 = var11[var4](var10, var9, var8, var7, var6);
            case 80:
                return var0;
        }
    };
    var2.unparseTimestamp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3091, 3004, 667, 2]);