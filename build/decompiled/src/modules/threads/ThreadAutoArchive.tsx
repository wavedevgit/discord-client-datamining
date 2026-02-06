// modules/threads/ThreadAutoArchive.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var4 = function() {
        var1 = {};
        var0 = '1hour';
        var1.id = var0;
        var9 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 2;
        var2 = var5[var6];
        var4 = undefined;
        var2 = var9.bind(var4)(var2);
        var7 = var2.intl;
        var3 = var7.string;
        var2 = var5[var6];
        var2 = var9.bind(var4)(var2);
        var2 = var2.t;
        var2 = var2.cs8A1c;
        var2 = var3.bind(var7)(var2);
        var1.label = var2;
        var3 = _closure1_slot1;
        var2 = 1;
        var0 = var5[var2];
        var0 = var3.bind(var4)(var0);
        var0 = var0.Minutes;
        var0 = var0.HOUR;
        var1.value = var0;
        var0 = new Array(4);
        var0[0] = var1;
        var1 = {};
        var7 = '24hours';
        var1.id = var7;
        var7 = var5[var6];
        var7 = var9.bind(var4)(var7);
        var10 = var7.intl;
        var8 = var10.string;
        var7 = var5[var6];
        var7 = var9.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.zFKbrF;
        var7 = var8.bind(var10)(var7);
        var1.label = var7;
        var7 = var5[var2];
        var7 = var3.bind(var4)(var7);
        var7 = var7.Minutes;
        var7 = var7.DAY;
        var1.value = var7;
        var0[1] = var1;
        var1 = {};
        var7 = '3days';
        var1.id = var7;
        var7 = var5[var6];
        var7 = var9.bind(var4)(var7);
        var10 = var7.intl;
        var8 = var10.string;
        var7 = var5[var6];
        var7 = var9.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.TmPIZX;
        var7 = var8.bind(var10)(var7);
        var1.label = var7;
        var7 = var5[var2];
        var7 = var3.bind(var4)(var7);
        var7 = var7.Minutes;
        var8 = var7.DAY;
        var7 = 3;
        var7 = var7 * var8;
        var1.value = var7;
        var0[2] = var1;
        var1 = {};
        var7 = '1week';
        var1.id = var7;
        var7 = var5[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var5[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6["/7i2el"];
        var6 = var7.bind(var8)(var6);
        var1.label = var6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.Minutes;
        var2 = var2.WEEK;
        var1.value = var2;
        var0[3] = var1;
        return var0;
    };
    var _closure1_slot4 = var4;
    var0 = global;
    var9 = var0.Object;
    var5 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var3 = var3.DEFAULT_AUTO_ARCHIVE_DURATION;
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var8[var10];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Minutes;
    var3 = var3.HOUR;
    var3 = var10 * var3;
    var5 = new Array(4);
    var5[0] = var3;
    var3 = var8[var10];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Minutes;
    var3 = var3.DAY;
    var3 = var10 * var3;
    var5[1] = var3;
    var3 = var8[var10];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Minutes;
    var9 = var3.DAY;
    var3 = 3;
    var9 = var3 * var9;
    var5[2] = var9;
    var9 = var8[var10];
    var9 = var6.bind(var0)(var9);
    var9 = var9.Minutes;
    var9 = var9.WEEK;
    var9 = var10 * var9;
    var5[3] = var9;
    var3 = var8[var3];
    var6 = var6.bind(var0)(var3);
    var3 = function() { // Environment: var1
        var1 = _closure1_slot4;
        var0 = undefined;
        var2 = var1.bind(var0)();
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.value;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = var6.bind(var0)(var3);
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/threads/ThreadAutoArchive.tsx';
    var6 = var7.bind(var8)(var6);
    var2.AUTO_ARCHIVE_OPTION_VALUES = var5;
    var2.getAutoArchiveOptions = var4;
    var2.getAutoArchiveDurations = var3;
    var3 = function arg0() {
        _fun61565: for (var _fun61565_ip = 0;;) switch (_fun61565_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot4;
                var3 = undefined;
                var5 = var2.bind(var3)();
                var2 = var5.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var2.bind(var5)(var0);
                var2 = null;
                var6 = var2 == var5;
                var0 = undefined;
                if (var6) {
                    _fun61565_ip = 53;
                    continue _fun61565
                }
            case 48:
                var0 = var5.label;
            case 53:
                if (!(var2 == var0)) {
                    _fun61565_ip = 102;
                    continue _fun61565
                }
            case 57:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.duration;
                var1 = 'minutes';
                var2 = var2.bind(var3)(var4, var1);
                var1 = var2.humanize;
                var0 = var1.bind(var2)();
            case 102:
                return var0;
        }
    };
    var2.getAutoArchiveDurationText = var3;
    var1 = function arg0, arg1() {
        _fun61567: for (var _fun61567_ip = 0;;) switch (_fun61567_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun61567_ip = 30;
                    continue _fun61567
                }
            case 12:
                var4 = var1 == var3;
                var2 = undefined;
                if (var4) {
                    _fun61567_ip = 27;
                    continue _fun61567
                }
            case 21:
                var2 = var3.defaultAutoArchiveDuration;
            case 27:
                var0 = var2;
            case 30:
                if (!(var1 == var0)) {
                    _fun61567_ip = 41;
                    continue _fun61567
                }
            case 34:
                var0 = _closure1_slot3;
            case 41:
                return var0;
        }
    };
    var2.getAutoArchiveDuration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1233, 667, 1234, 3546, 3047, 2]);