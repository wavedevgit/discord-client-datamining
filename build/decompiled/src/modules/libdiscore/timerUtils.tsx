// modules/libdiscore/timerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var7 = function() {
        _fun118364: for (var _fun118364_ip = 0;;) switch (_fun118364_ip) {
            case 0:
                var0 = _closure1_slot5;
                var2 = var0.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun118364_ip = 161;
                    continue _fun118364
                }
            case 21:
                var4 = _closure1_slot4;
                var3 = var4.warn;
                var0 = _closure1_slot5;
                var7 = var0.length;
                var5 = global;
                var0 = var5.HermesInternal;
                var6 = var0.concat;
                var2 = '[libdiscore.timers] Flushing ';
                var0 = ' delay logs';
                var2 = var6.bind(var2)(var7, var0);
                var0 = _closure1_slot5;
                var0 = var3.bind(var4)(var2, var0);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var0 = _closure1_slot3;
                var2 = var0.LIBDISCORE_SLOW_TIMERS;
                var0 = {};
                var7 = var5.JSON;
                var6 = var7.stringify;
                var5 = _closure1_slot5;
                var5 = var6.bind(var7)(var5);
                var0.delay_reports = var5;
                var0 = var3.bind(var4)(var2, var0);
                var0 = new Array(0);
                _closure1_slot5 = var0;
            case 161:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var7;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun118365: for (var _fun118365_ip = 0;;) switch (_fun118365_ip) {
            case 0:
                var3 = _closure1_slot5;
                var2 = var3.push;
                var1 = {};
                var4 = arg0;
                var1.timerId = var4;
                var4 = arg1;
                var1.expectedDelay = var4;
                var4 = arg2;
                var1.actualDelay = var4;
                var4 = arg3;
                var1.executionTime = var4;
                var1 = var2.bind(var3)(var1);
                var1 = _closure1_slot5;
                var2 = var1.length;
                var1 = 10;
                if (!(!(var2 >= var1))) {
                    _fun118365_ip = 85;
                    continue _fun118365
                }
            case 73:
                var2 = _closure1_slot6;
                var1 = undefined;
                var1 = var2.bind(var1)();
                _fun118365_ip = 95;
                continue _fun118365;
            case 85:
                var1 = _closure1_slot7;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 95:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var9 = var6.bind(var0)(var3);
    var3 = var9.prototype;
    var8 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var12 = 'libdiscore.timers';
    var13 = var8;
    var3 = new var13[var9](var12, var11);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot4 = var3;
    var3 = new Array(0);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = 5000;
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/libdiscore/timerUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.setTimersMonitorCallback;
        var1 = _closure1_slot8;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setupLibdiscoreTimersMonitor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3, 795, 5695, 1620, 2]);