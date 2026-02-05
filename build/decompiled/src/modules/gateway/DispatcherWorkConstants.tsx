// modules/gateway/DispatcherWorkConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var3 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var3[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0() {
            _fun94665: for (var _fun94665_ip = 0;;) switch (_fun94665_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun94665_ip = 17;
                        continue _fun94665
                    }
                case 15:
                    var3 = false;
                case 17:
                    var5 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var0)(var2, var1);
                    var1 = global;
                    var7 = var1.Math;
                    var6 = var7.max;
                    var5 = 2.0833333333333335;
                    var5 = var6.bind(var7)(var5, var4);
                    var2._deadlineMs = var5;
                    var2._browserDeadlineMs = var4;
                    var2._firedDueToMaxTimeout = var3;
                    var3 = var1.performance;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2._startMs = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'timeRemaining';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var2 = global;
            var3 = var2.performance;
            var1 = var3.now;
            var3 = var1.bind(var3)();
            var1 = var0._startMs;
            var1 = var3 - var1;
            var3 = var2.Math;
            var2 = var3.max;
            var0 = var0._deadlineMs;
            var1 = var0 - var1;
            var0 = 0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'didTimeout';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._firedDueToMaxTimeout;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'timeSinceExpiration';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = global;
            var2 = var1.performance;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            var2 = var0._startMs;
            var0 = var0._deadlineMs;
            var0 = var2 + var0;
            var0 = var1 - var0;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'generateDeadlineMetrics';
        var0.key = var5;
        var4 = function() {
            var1 = this;
            var0 = {};
            var3 = var1._browserDeadlineMs;
            var2 = 2.0833333333333335;
            var2 = var3 < var2;
            var0.isDeadlineNotIdeal = var2;
            var4 = var1._deadlineMs;
            var2 = var4.toFixed;
            var3 = 2;
            var2 = var2.bind(var4)(var3);
            var0.deadlineMs = var2;
            var2 = global;
            var4 = var2.performance;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1 = var1._startMs;
            var2 = var2 - var1;
            var1 = var2.toFixed;
            var1 = var1.bind(var2)(var3);
            var0.timeSinceStartMs = var1;
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 2;
    var5 = var3[var4];
    var3 = arg1;
    var6 = var3.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var3 = 'modules/gateway/DispatcherWorkConstants.tsx';
    var3 = var5.bind(var6)(var3);
    var3 = 50;
    var2.DISPATCHER_STANDARD_TIMEOUT_MS = var3;
    var2.DISPATCHER_IDEAL_TIME_LIMIT_MS = var3;
    var5 = 2.0833333333333335;
    var2.DISPATCHER_MIN_DEADLINE_TIME_MS = var5;
    var5 = 3.3333333333333335;
    var2.DISPATCHER_DEADLINE_OVERHEAD_MS = var5;
    var5 = 5.555555555555556;
    var2.NATIVE_WORK_DEADLINE_MS = var5;
    var5 = 4.166666666666667;
    var2.NATIVE_WORK_BACKOFF_MS = var5;
    var5 = 200;
    var2.DISPATCHER_LONG_TIMEOUT_MS = var5;
    var5 = 1000;
    var2.MAX_DISPATCHER_TIMEOUT_MS = var5;
    var2.MAX_DISPATCHER_FLUSH_DEADLINE_TRIES = var4;
    var2.DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS = var3;
    var2.WorkIdleDeadline = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);