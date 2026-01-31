// modules/errors/av_errors/AVErrorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var6 = var3.SECOND;
    var3 = 10;
    var3 = var3 * var6;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/AVErrorUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: getReportInboundErrors, environment: var1
        _fun117549: for (var _fun117549_ip = 0;;) switch (_fun117549_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 2;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var2 = var0.WindowVisibilityVideoManager;
                var0 = var2.isIncomingVideoEnabled;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun117549_ip = 108;
                    continue _fun117549
                }
            case 44:
                var2 = global;
                var3 = var2.performance;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var4 = var2.WindowVisibilityVideoManager;
                var2 = var4.lastIncomingVideoEnabledChangeTime;
                var2 = var2.bind(var4)();
                var2 = var3 - var2;
                var1 = _closure1_slot3;
                var0 = var2 > var1;
            case 108:
                return var0;
        }
    };
    var2.getReportInboundErrors = var3;
    var3 = function(arg0, arg1) { // Original name: getAccumulatedStatsWithMinDatapoints, environment: var1
        _fun117550: for (var _fun117550_ip = 0;;) switch (_fun117550_ip) {
            case 0:
                var6 = arg0;
                var4 = arg1;
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun117550_ip = 18;
                    continue _fun117550
                }
            case 15:
                var5 = 15;
            case 18:
                var2 = _closure1_slot2;
                var1 = var2.getAccumulatedPerformanceStats;
                var0 = 'short';
                var3 = var1.bind(var2)(var6, var4, var0);
                var1 = var2.getAccumulatedPerformanceStats;
                var0 = 'long';
                var2 = var1.bind(var2)(var6, var4, var0);
                var4 = null;
                var1 = var4 == var3;
                var0 = null;
                if (var1) {
                    _fun117550_ip = 124;
                    continue _fun117550
                }
            case 70:
                var1 = var4 == var2;
                var0 = null;
                if (var1) {
                    _fun117550_ip = 124;
                    continue _fun117550
                }
            case 79:
                var1 = var3.numDatapoints;
                var1 = var1 < var5;
                var0 = null;
                if (var1) {
                    _fun117550_ip = 124;
                    continue _fun117550
                }
            case 94:
                var1 = var2.numDatapoints;
                var1 = var1 < var5;
                var0 = null;
                if (var1) {
                    _fun117550_ip = 124;
                    continue _fun117550
                }
            case 109:
                var1 = {};
                var1.short = var3;
                var1.long = var2;
                var0 = var1;
            case 124:
                return var0;
        }
    };
    var2.getAccumulatedStatsWithMinDatapoints = var3;
    var1 = function() { // Original name: getWarningFrameRate, environment: var1
        _fun117551: for (var _fun117551_ip = 0;;) switch (_fun117551_ip) {
            case 0:
                var4 = arguments[0];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun117551_ip = 12;
                    continue _fun117551
                }
            case 9:
                var4 = 30;
            case 12:
                var0 = 5;
                var1 = var4 <= var0;
                var0 = 3;
                if (var1) {
                    _fun117551_ip = 57;
                    continue _fun117551
                }
            case 25:
                var3 = 15;
                var2 = var4 <= var3;
                var1 = 8;
                if (var2) {
                    _fun117551_ip = 54;
                    continue _fun117551
                }
            case 38:
                var2 = 30;
                var4 = var4 <= var2;
                if (!var4) {
                    _fun117551_ip = 51;
                    continue _fun117551
                }
            case 48:
                var2 = var3;
            case 51:
                var1 = var2;
            case 54:
                var0 = var1;
            case 57:
                return var0;
        }
    };
    var2.getWarningFrameRate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3567, 667, 7994, 2]);