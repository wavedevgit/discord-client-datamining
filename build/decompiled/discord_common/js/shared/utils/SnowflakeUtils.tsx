// ../discord_common/js/shared/utils/SnowflakeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var5 = function arg0() {
        var0 = global;
        var2 = var0.Math;
        var1 = var2.floor;
        var4 = var0.Number;
        var3 = undefined;
        var0 = arg0;
        var3 = var4.bind(var3)(var0);
        var0 = 4194304;
        var0 = var3 / var0;
        var1 = var1.bind(var2)(var0);
        var0 = _closure1_slot4;
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot5 = var5;
    var4 = function arg0() {
        _fun947: for (var _fun947_ip = 0;;) switch (_fun947_ip) {
            case 0:
                var2 = _closure1_slot4;
                var0 = arg0;
                var3 = var0 - var2;
                var0 = '0';
                var2 = 0;
                if (!(!(var3 <= var2))) {
                    _fun947_ip = 76;
                    continue _fun947
                }
            case 26:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var3 = var1.bind(var2)(var3);
                var2 = var3.shiftLeft;
                var1 = 22;
                var2 = var2.bind(var3)(var1);
                var1 = var2.toString;
                var0 = var1.bind(var2)();
            case 76:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var6 = 1420070400000.0;
    var _closure1_slot4 = var6;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 0;
            var2.seq = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'next';
        var0.key = var1;
        var1 = function() {
            _fun950: for (var _fun950_ip = 0;;) switch (_fun950_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.seq;
                    var0 = 4095;
                    if (!(!(var2 > var0))) {
                        _fun950_ip = 39;
                        continue _fun950
                    }
                case 19:
                    var0 = var1.seq;
                    var0 = parseFloat(var0);
                    var2 = var0 + 1;
                    var1.seq = var2;
                    return var0;
                case 39:
                    var0 = global;
                    var2 = var0.Error;
                    var3 = var1.seq;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'Snowflake sequence number overflow: ';
                    var4 = var1.bind(var0)(var3);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'willOverflowNext';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.seq;
            var0 = 4095;
            var0 = var1 > var0;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var4 = function() {
            var1 = 0;
            var0 = this;
            var0.seq = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var7 = 3;
    var8 = var8[var7];
    var7 = arg1;
    var9 = var7.bind(var0)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = '../discord_common/js/shared/utils/SnowflakeUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.DISCORD_EPOCH = var6;
    var6 = 4095;
    var2.MAX_SNOWFLAKE_SEQ = var6;
    var2.extractTimestamp = var5;
    var2.fromTimestamp = var4;
    var4 = function arg0, arg1() {
        _fun953: for (var _fun953_ip = 0;;) switch (_fun953_ip) {
            case 0:
                var3 = arg1;
                var2 = _closure1_slot4;
                var1 = arg0;
                var4 = var1 - var2;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = 0;
                if (!(!(var4 <= var0))) {
                    _fun953_ip = 48;
                    continue _fun953
                }
            case 45:
                var0 = var4;
            case 48:
                var2 = var1.bind(var2)(var0);
                var1 = var2.shiftLeft;
                var0 = 22;
                var2 = var1.bind(var2)(var0);
                var1 = var2.add;
                var0 = var3.next;
                var0 = var0.bind(var3)();
                var1 = var1.bind(var2)(var0);
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.fromTimestampWithSequence = var4;
    var4 = function arg0() {
        var2 = _closure1_slot6;
        var3 = _closure1_slot5;
        var1 = undefined;
        var0 = arg0;
        var3 = var3.bind(var1)(var0);
        var0 = 1;
        var0 = var3 - var0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.atPreviousMillisecond = var4;
    var4 = function arg0() {
        var2 = _closure1_slot6;
        var3 = _closure1_slot5;
        var1 = undefined;
        var0 = arg0;
        var3 = var3.bind(var1)(var0);
        var0 = 1;
        var0 = var3 + var0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.atNextMillisecond = var4;
    var4 = function arg0() {
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        var3 = _closure1_slot5;
        var2 = undefined;
        var0 = arg0;
        var0 = var3.bind(var2)(var0);
        var0 = var1 - var0;
        return var0;
    };
    var2.age = var4;
    var4 = function arg0, arg1() {
        _fun957: for (var _fun957_ip = 0;;) switch (_fun957_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var0 = 0;
                if (!(var8 !== var7)) {
                    _fun957_ip = 108;
                    continue _fun957
                }
            case 12:
                var2 = null;
                var3 = var2 == var7;
                var6 = 1;
                var1 = var6;
                if (var3) {
                    _fun957_ip = 105;
                    continue _fun957
                }
            case 27:
                var3 = var2 == var8;
                var5 = -1;
                var2 = var5;
                if (var3) {
                    _fun957_ip = 102;
                    continue _fun957
                }
            case 43:
                var4 = var8.length;
                var3 = var7.length;
                var4 = var4 > var3;
                var3 = var6;
                if (var4) {
                    _fun957_ip = 99;
                    continue _fun957
                }
            case 63:
                var9 = var8.length;
                var4 = var7.length;
                var9 = var9 < var4;
                var4 = var5;
                if (var9) {
                    _fun957_ip = 96;
                    continue _fun957
                }
            case 83:
                var7 = var8 > var7;
                if (!var7) {
                    _fun957_ip = 93;
                    continue _fun957
                }
            case 90:
                var5 = var6;
            case 93:
                var4 = var5;
            case 96:
                var3 = var4;
            case 99:
                var2 = var3;
            case 102:
                var1 = var2;
            case 105:
                var0 = var1;
            case 108:
                return var0;
        }
    };
    var2.compare = var4;
    var3 = function arg0() {
        _fun958: for (var _fun958_ip = 0;;) switch (_fun958_ip) {
            case 0:
                var2 = arg0;
                var1 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun958_ip = 79;
                    continue _fun958
                }
            case 12:
                var3 = /^\d{17,19}$/;
                var2 = var3.test;
                var0 = var1;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun958_ip = 46;
                    continue _fun958
                }
            case 42:
                var0 = false;
                return var0;
            case 46: // try_start_0
                var3 = _closure1_slot5;
                var2 = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var0 = _closure1_slot4;
                var0 = var1 >= var0;
            case 71: // try_end0
                return var0;
            case 73: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var2.isProbablyAValidSnowflake = var3;
    var2.SnowflakeSequence = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 24, 2]);