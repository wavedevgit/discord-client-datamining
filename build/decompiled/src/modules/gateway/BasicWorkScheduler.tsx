// modules/gateway/BasicWorkScheduler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.MAX_DISPATCHER_FLUSH_DEADLINE_TRIES;
    var _closure1_slot5 = var7;
    var7 = var3.DISPATCHER_STANDARD_TIMEOUT_MS;
    var _closure1_slot6 = var7;
    var7 = var3.DISPATCHER_IDEAL_TIME_LIMIT_MS;
    var _closure1_slot7 = var7;
    var3 = var3.DISPATCHER_LONG_TIMEOUT_MS;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'DispatcherWorkScheduler';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot9 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = null;
            var2._flushTimeoutHandler = var3;
            var2._flushIdleHandler = var3;
            var4 = _closure1_slot6;
            var2._nextDispatchTimeout = var4;
            var2._workCallbackFn = var3;
            var3 = 0;
            var2._consecutiveFlushesBeforeQueueEmpty = var3;
            var3 = false;
            var2._isBackgrounded = var3;
            var2._enableRequestIdleCallback = var3;
            var2._criticalWorkScheduled = var3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.WorkSchedulerTelemetry;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var8 = var4;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.telemetry = var3;
            var1 = _closure1_slot9;
            var2._logger = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '_trackAppBackgrounded';
        var0.key = var1;
        var1 = function arg0() {
            _fun94614: for (var _fun94614_ip = 0;;) switch (_fun94614_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1._isBackgrounded;
                    if (!(var2 !== var0)) {
                        _fun94614_ip = 103;
                        continue _fun94614
                    }
                case 16:
                    var1._isBackgrounded = var0;
                    var0 = var1._isBackgrounded;
                    if (!var0) {
                        _fun94614_ip = 37;
                        continue _fun94614
                    }
                case 31:
                    var0 = var1.hasWorkScheduled;
                case 37:
                    if (!var0) {
                        _fun94614_ip = 103;
                        continue _fun94614
                    }
                case 40:
                    var3 = var1.telemetry;
                    var2 = var3.track;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 4;
                    var4 = var4[var0];
                    var0 = undefined;
                    var0 = var5.bind(var0)(var4);
                    var0 = var0.WorkSchedulerTelemetryEvent;
                    var0 = var0.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1._processWorkCallback;
                    var0 = var0.bind(var1)();
                case 103:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(12);
        var1[0] = var0;
        var0 = {};
        var5 = '_queueIdleCallback';
        var0.key = var5;
        var5 = function() {
            var0 = global;
            var2 = var0.Error;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = 'Not implemented';
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '_clearIdleCallback';
        var0.key = var5;
        var5 = function() {
            var0 = global;
            var2 = var0.Error;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = 'Not implemented';
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_hasExceededMaxConsecutiveFlushes';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0._consecutiveFlushesBeforeQueueEmpty;
            var0 = _closure1_slot5;
            var0 = var1 >= var0;
            return var0;
        };
        var0.get = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_processWorkCallback';
        var0.key = var5;
        var5 = function arg0() {
            _fun94618: for (var _fun94618_ip = 0;;) switch (_fun94618_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._workCallbackFn;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun94618_ip = 252;
                        continue _fun94618
                    }
                case 18:
                    var0 = var1._hasExceededMaxConsecutiveFlushes;
                    if (var0) {
                        _fun94618_ip = 256;
                        continue _fun94618
                    }
                case 32:
                    var2 = global;
                    var3 = var2.performance;
                    var0 = var3.now;
                    var4 = var0.bind(var3)();
                    var3 = var1._workCallbackFn;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0);
                    var5 = var2.performance;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var5 = var1.clearWorkTimeout;
                    var5 = var5.bind(var1)();
                    var5 = var3 - var4;
                    var4 = _closure1_slot7;
                    if (!(!(var5 > var4))) {
                        _fun94618_ip = 109;
                        continue _fun94618
                    }
                case 103:
                    var4 = _closure1_slot6;
                    _fun94618_ip = 113;
                    continue _fun94618;
                case 109:
                    var4 = _closure1_slot8;
                case 113:
                    var1._nextDispatchTimeout = var4;
                    var4 = var1._consecutiveFlushesBeforeQueueEmpty;
                    if (var0) {
                        _fun94618_ip = 143;
                        continue _fun94618
                    }
                case 128:
                    var0 = 1;
                    var0 = var4 + var0;
                    var1._consecutiveFlushesBeforeQueueEmpty = var0;
                    _fun94618_ip = 252;
                    continue _fun94618;
                case 143:
                    var0 = 0;
                    if (!(var4 > var0)) {
                        _fun94618_ip = 238;
                        continue _fun94618
                    }
                case 149:
                    var5 = var1.telemetry;
                    var4 = var5.measure;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var7 = undefined;
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.WorkSchedulerTelemetryMeasurement;
                    var3 = var3.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
                    var6 = var2.parseInt;
                    var9 = var1._consecutiveFlushesBeforeQueueEmpty;
                    var2 = var2.HermesInternal;
                    var8 = var2.concat;
                    var2 = '';
                    var2 = var8.bind(var2)(var9);
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var3, var2);
                case 238:
                    var1._consecutiveFlushesBeforeQueueEmpty = var0;
                    var0 = false;
                    var1._criticalWorkScheduled = var0;
                case 252:
                    var0 = undefined;
                    return var0;
                case 256:
                    var4 = _closure1_slot9;
                    var3 = var4.log;
                    var2 = 'Unable to fully flush work queue after max retries, skipping future deadline.';
                    var2 = var3.bind(var4)(var2);
                    var2 = var1._workCallbackFn;
                    var2 = var2.bind(var1)();
                    var2 = var1.clearWorkTimeout;
                    var2 = var2.bind(var1)();
                    var9 = var1.telemetry;
                    var8 = var9.measure;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.WorkSchedulerTelemetryMeasurement;
                    var4 = var3.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
                    var3 = var1._consecutiveFlushesBeforeQueueEmpty;
                    var3 = var8.bind(var9)(var4, var3);
                    var4 = var1.telemetry;
                    var3 = var4.track;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.WorkSchedulerTelemetryEvent;
                    var2 = var2.EXCEEDED_MAX_CONSECUTIVE_FLUSHES;
                    var2 = var3.bind(var4)(var2);
                    var2 = 0;
                    var1._consecutiveFlushesBeforeQueueEmpty = var2;
                    var0 = _closure1_slot8;
                    var1._nextDispatchTimeout = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'markCriticalWorkScheduled';
        var0.key = var5;
        var5 = function() {
            _fun94619: for (var _fun94619_ip = 0;;) switch (_fun94619_ip) {
                case 0:
                    var1 = this;
                    var0 = true;
                    var1._criticalWorkScheduled = var0;
                    var2 = var1._flushIdleHandler;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun94619_ip = 43;
                        continue _fun94619
                    }
                case 23:
                    var0 = var1._clearIdleCallback;
                    var0 = var0.bind(var1)();
                    var0 = var1._processWorkCallback;
                    var0 = var0.bind(var1)();
                case 43:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'toggleRequestIdleCallback';
        var0.key = var5;
        var5 = function arg0() {
            _fun94620: for (var _fun94620_ip = 0;;) switch (_fun94620_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var1._enableRequestIdleCallback = var0;
                    var0 = !var0;
                    if (!var0) {
                        _fun94620_ip = 24;
                        continue _fun94620
                    }
                case 18:
                    var0 = var1.hasWorkScheduled;
                case 24:
                    if (!var0) {
                        _fun94620_ip = 47;
                        continue _fun94620
                    }
                case 27:
                    var0 = var1._clearIdleCallback;
                    var0 = var0.bind(var1)();
                    var0 = var1._processWorkCallback;
                    var0 = var0.bind(var1)();
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'isBackgrounded';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._isBackgrounded;
            return var0;
        };
        var0.get = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'hasWorkScheduled';
        var0.key = var5;
        var5 = function() {
            _fun94622: for (var _fun94622_ip = 0;;) switch (_fun94622_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._flushTimeoutHandler;
                    var2 = null;
                    var0 = var2 != var0;
                    if (var0) {
                        _fun94622_ip = 28;
                        continue _fun94622
                    }
                case 18:
                    var1 = var1._flushIdleHandler;
                    var0 = var2 != var1;
                case 28:
                    return var0;
            }
        };
        var0.get = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'isRequestIdleCallbackEnabled';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._enableRequestIdleCallback;
            return var0;
        };
        var0.get = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'clearWorkTimeout';
        var0.key = var5;
        var5 = function() {
            _fun94624: for (var _fun94624_ip = 0;;) switch (_fun94624_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._flushTimeoutHandler;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun94624_ip = 42;
                        continue _fun94624
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._flushTimeoutHandler;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._flushTimeoutHandler = var0;
                case 42:
                    var2 = var1._clearIdleCallback;
                    var2 = var2.bind(var1)();
                    var2 = _closure1_slot6;
                    var1._nextDispatchTimeout = var2;
                    var1._workCallbackFn = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'requestWorkTimeout';
        var0.key = var5;
        var4 = function arg0() {
            _fun94625: for (var _fun94625_ip = 0;;) switch (_fun94625_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun94625_ip = 20;
                        continue _fun94625
                    }
                case 18:
                    var3 = false;
                case 20:
                    var4 = arg0;
                    var2._workCallbackFn = var4;
                    var4 = var2.hasWorkScheduled;
                    if (var4) {
                        _fun94625_ip = 200;
                        continue _fun94625
                    }
                case 41:
                    var7 = var2.telemetry;
                    var6 = var7.time;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 4;
                    var5 = var5[var8];
                    var5 = var9.bind(var0)(var5);
                    var5 = var5.WorkSchedulerTelemetryTiming;
                    var5 = var5.TIME_TO_QUEUE_EMPTY;
                    var5 = var6.bind(var7)(var5);
                    var6 = var2._nextDispatchTimeout;
                    var5 = _closure1_slot8;
                    if (!(var6 === var5)) {
                        _fun94625_ip = 152;
                        continue _fun94625
                    }
                case 107:
                    var6 = var2.telemetry;
                    var5 = var6.track;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.WorkSchedulerTelemetryEvent;
                    var4 = var4.LONGER_DISPATCH;
                    var4 = var5.bind(var6)(var4);
                case 152:
                    if (var3) {
                        _fun94625_ip = 190;
                        continue _fun94625
                    }
                case 155:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = var2._nextDispatchTimeout;
                    var1 = function() { // Environment: var1
                        _fun94626: for (var _fun94626_ip = 0;;) switch (_fun94626_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 5;
                                var1 = var3[var1];
                                var5 = undefined;
                                var6 = var2.bind(var5)(var1);
                                var2 = _closure3_slot0;
                                var4 = var2._workCallbackFn;
                                var3 = null;
                                var4 = var3 != var4;
                                var3 = 'Work callback should be set';
                                var3 = var6.bind(var5)(var4, var3);
                                var2 = var2._isBackgrounded;
                                var1 = _closure3_slot0;
                                if (var2) {
                                    _fun94626_ip = 81;
                                    continue _fun94626
                                }
                            case 69:
                                var2 = var1._queueIdleCallback;
                                var2 = var2.bind(var1)();
                                return var5;
                            case 81:
                                var3 = var1.telemetry;
                                var2 = var3.track;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var0 = 4;
                                var0 = var6[var0];
                                var0 = var4.bind(var5)(var0);
                                var0 = var0.WorkSchedulerTelemetryEvent;
                                var0 = var0.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
                                var0 = var2.bind(var3)(var0);
                                var0 = var1._processWorkCallback;
                                var0 = var0.bind(var1)();
                                return var0;
                        }
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var2._flushTimeoutHandler = var1;
                    _fun94625_ip = 200;
                    continue _fun94625;
                case 190:
                    var1 = var2._queueIdleCallback;
                    var1 = var1.bind(var2)();
                case 200:
                    return var0;
            }
        };
        var0.value = var4;
        var1[11] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/BasicWorkScheduler.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BasicWorkScheduler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12358, 3, 12361, 44, 2]);