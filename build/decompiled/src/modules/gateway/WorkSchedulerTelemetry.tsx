// modules/gateway/WorkSchedulerTelemetry.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var6 = global;
    var9 = var6.Object;
    var5 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var9)(var2, var0, var3);
    var12 = 0;
    var3 = var8[var12];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var5 = {};
    var3 = 'longer_dispatch';
    var5.LONGER_DISPATCH = var3;
    var3 = 'exceeded_max_consecutive_flushes';
    var5.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = var3;
    var3 = 'fired_due_to_max_timeout';
    var5.FIRED_DUE_TO_MAX_TIMEOUT = var3;
    var3 = 'skip_idle_callback_due_to_backgrounded';
    var5.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED = var3;
    var4 = {};
    var3 = 'time_to_fire_idle_callback';
    var4.TIME_TO_FIRE_IDLE_CALLBACK = var3;
    var3 = 'time_to_flush_all_work';
    var4.TIME_TO_QUEUE_EMPTY = var3;
    var3 = 'time_over_deadline';
    var4.TIME_OVER_DEADLINE = var3;
    var3 = 'initial_time_of_deadline';
    var4.DEADLINE_INITIAL_TIME_REMAINING = var3;
    var3 = {};
    var9 = 'count_dispatches_left_after_yield';
    var3.COUNT_DISPATCHES_LEFT_AFTER_YIELD = var9;
    var9 = 'count_flush_before_queue_empty';
    var3.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = var9;
    var9 = 'count_initial_dispatches_length';
    var3.COUNT_INITIAL_DISPATCHS_LENGTH = var9;
    var11 = var6.Object;
    var10 = var11.freeze;
    var9 = {};
    var13 = var4.TIME_TO_FIRE_IDLE_CALLBACK;
    var14 = null;
    var9[var13] = var14;
    var13 = var4.TIME_TO_QUEUE_EMPTY;
    var9[var13] = var14;
    var13 = var4.TIME_OVER_DEADLINE;
    var9[var13] = var14;
    var13 = var4.DEADLINE_INITIAL_TIME_REMAINING;
    var9[var13] = var14;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot5 = var9;
    var11 = var6.Object;
    var10 = var11.freeze;
    var9 = {};
    var14 = var4.TIME_TO_FIRE_IDLE_CALLBACK;
    var13 = [0, 0];
    var9[var14] = var13;
    var14 = var4.TIME_TO_QUEUE_EMPTY;
    var13 = [0, 0];
    var9[var14] = var13;
    var14 = var4.TIME_OVER_DEADLINE;
    var13 = [0, 0];
    var9[var14] = var13;
    var14 = var4.DEADLINE_INITIAL_TIME_REMAINING;
    var13 = [0, 0];
    var9[var14] = var13;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot6 = var9;
    var11 = var6.Object;
    var10 = var11.freeze;
    var9 = {};
    var14 = var3.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
    var13 = [0, 0];
    var9[var14] = var13;
    var14 = var3.COUNT_DISPATCHES_LEFT_AFTER_YIELD;
    var13 = [0, 0];
    var9[var14] = var13;
    var14 = var3.COUNT_INITIAL_DISPATCHS_LENGTH;
    var13 = [0, 0];
    var9[var14] = var13;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot7 = var9;
    var10 = var6.Object;
    var9 = var10.freeze;
    var6 = {};
    var11 = var5.LONGER_DISPATCH;
    var6[var11] = var12;
    var11 = var5.EXCEEDED_MAX_CONSECUTIVE_FLUSHES;
    var6[var11] = var12;
    var11 = var5.FIRED_DUE_TO_MAX_TIMEOUT;
    var6[var11] = var12;
    var11 = var5.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
    var6[var11] = var12;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot8 = var6;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() { // Original name: WorkSchedulerTelemetry, environment: var4
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.cloneDeep;
            var6 = _closure1_slot5;
            var6 = var7.bind(var8)(var6);
            var2._timeTracking = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.cloneDeep;
            var6 = _closure1_slot6;
            var6 = var7.bind(var8)(var6);
            var2._timingStats = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.cloneDeep;
            var6 = _closure1_slot7;
            var6 = var7.bind(var8)(var6);
            var2._measurements = var6;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = var4.cloneDeep;
            var1 = _closure1_slot8;
            var1 = var3.bind(var4)(var1);
            var2._eventCounts = var1;
            var1 = false;
            var2._enabled = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var2 = this;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var6 = var5[var3];
            var0 = undefined;
            var8 = var4.bind(var0)(var6);
            var7 = var8.cloneDeep;
            var6 = _closure1_slot5;
            var6 = var7.bind(var8)(var6);
            var2._timeTracking = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.cloneDeep;
            var6 = _closure1_slot6;
            var6 = var7.bind(var8)(var6);
            var2._timingStats = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.cloneDeep;
            var6 = _closure1_slot7;
            var6 = var7.bind(var8)(var6);
            var2._measurements = var6;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = var4.cloneDeep;
            var1 = _closure1_slot8;
            var1 = var3.bind(var4)(var1);
            var2._eventCounts = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(11);
        var1[0] = var0;
        var0 = {};
        var5 = 'clearTime';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0._timeTracking;
            var1 = null;
            var0 = arg0;
            var2[var0] = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '_storeTimeValue';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            var3 = arg0;
            var2 = this;
            var5 = _closure1_slot2;
            var0 = var2._timingStats;
            var4 = var0[var3];
            var0 = undefined;
            var1 = 2;
            var4 = var5.bind(var0)(var4, var1);
            var1 = 0;
            var1 = var4[var1];
            var5 = 1;
            var4 = var4[var5];
            var2 = var2._timingStats;
            var6 = var1 * var4;
            var1 = arg1;
            var6 = var6 + var1;
            var1 = var4 + var5;
            var6 = var6 / var1;
            var1 = new Array(2);
            var1[0] = var6;
            var4 = var4 + var5;
            var1[1] = var4;
            var2[var3] = var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'time';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun94629: for (var _fun94629_ip = 0;;) switch (_fun94629_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._enabled;
                    if (!var1) {
                        _fun94629_ip = 42;
                        continue _fun94629
                    }
                case 12:
                    var2 = var0._timeTracking;
                    var0 = global;
                    var1 = var0.performance;
                    var0 = var1.now;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var2[var0] = var1;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'timeEnd';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun94630: for (var _fun94630_ip = 0;;) switch (_fun94630_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0._enabled;
                    if (!var1) {
                        _fun94630_ip = 74;
                        continue _fun94630
                    }
                case 15:
                    var1 = var0._timeTracking;
                    var4 = var1[var2];
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun94630_ip = 74;
                        continue _fun94630
                    }
                case 31:
                    var3 = global;
                    var5 = var3.performance;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var4 = var3 - var4;
                    var3 = var0._storeTimeValue;
                    var3 = var3.bind(var0)(var2, var4);
                    var0 = var0._timeTracking;
                    var0[var2] = var1;
                case 74:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'timeTrack';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun94631: for (var _fun94631_ip = 0;;) switch (_fun94631_ip) {
                case 0:
                    var3 = this;
                    var0 = var3._enabled;
                    if (!var0) {
                        _fun94631_ip = 30;
                        continue _fun94631
                    }
                case 12:
                    var2 = var3._storeTimeValue;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 30:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'measure';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun94632: for (var _fun94632_ip = 0;;) switch (_fun94632_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1._enabled;
                    if (!var0) {
                        _fun94632_ip = 101;
                        continue _fun94632
                    }
                case 15:
                    var5 = _closure1_slot2;
                    var0 = var1._measurements;
                    var4 = var0[var2];
                    var3 = undefined;
                    var0 = 2;
                    var3 = var5.bind(var3)(var4, var0);
                    var0 = 0;
                    var0 = var3[var0];
                    var4 = 1;
                    var3 = var3[var4];
                    var1 = var1._measurements;
                    var5 = var0 * var3;
                    var0 = arg1;
                    var5 = var5 + var0;
                    var0 = var3 + var4;
                    var5 = var5 / var0;
                    var0 = new Array(2);
                    var0[0] = var5;
                    var3 = var3 + var4;
                    var0[1] = var3;
                    var1[var2] = var0;
                case 101:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'track';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun94633: for (var _fun94633_ip = 0;;) switch (_fun94633_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0._enabled;
                    if (!var1) {
                        _fun94633_ip = 36;
                        continue _fun94633
                    }
                case 15:
                    var1 = var0._eventCounts;
                    var3 = var1[var2];
                    var0 = 1;
                    var0 = var3 + var0;
                    var1[var2] = var0;
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'toggleTelemetry';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = arg0;
            var0 = this;
            var0._enabled = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'isTelemetryEnabled';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._enabled;
            return var0;
        };
        var0.get = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'generateTelemetry';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var4 = this;
            var5 = global;
            var2 = var5.Object;
            var1 = var2.entries;
            var0 = var4._timingStats;
            var6 = var1.bind(var2)(var0);
            var2 = var6.reduce;
            var1 = function(arg0, arg1) { // Environment: var3
                _fun94637: for (var _fun94637_ip = 0;;) switch (_fun94637_ip) {
                    case 0:
                        var3 = arg0;
                        var7 = arg1;
                        var1 = var7[Symbol.iterator];
                        var7 = var1().next;
                        var11 = undefined;
                        var2 = undefined;
                        var5 = undefined;
                        var8 = var7().value;
                        var9 = var1;
                        var9 = var9 === var11;
                        var2 = var9;
                        if (var9) {
                            _fun94637_ip = 35;
                            continue _fun94637
                        }
                    case 32:
                        var5 = var8;
                    case 35:
                        var4 = var5;
                        var5 = undefined;
                        var8 = var2;
                        if (var8) {
                            _fun94637_ip = 66;
                            continue _fun94637
                        }
                    case 46:
                        var7 = var7().value;
                        var8 = var1;
                        var8 = var8 === var11;
                        var2 = var8;
                        if (var8) {
                            _fun94637_ip = 66;
                            continue _fun94637
                        }
                    case 63:
                        var5 = var7;
                    case 66: // try_start_0
                        var7 = var5;
                        var9 = var7;
                        var5 = var9[Symbol.iterator];
                        var9 = var5().next;
                        var7 = undefined;
                        var8 = undefined;
                        var9 = var9().value;
                        var10 = var5;
                        var10 = var10 === var11;
                        var7 = var10;
                        if (var10) {
                            _fun94637_ip = 99;
                            continue _fun94637
                        }
                    case 96:
                        var8 = var9;
                    case 99:
                        var6 = var8;
                        if (var7) {
                            _fun94637_ip = 108;
                            continue _fun94637
                        }
                    case 105:
                        var5.return();
                    case 108: // try_end0
                        var5 = var2;
                        if (var5) {
                            _fun94637_ip = 117;
                            continue _fun94637
                        }
                    case 114:
                        var1.return();
                    case 117:
                        var8 = var4;
                        var4 = global;
                        var5 = var4.HermesInternal;
                        var7 = var5.concat;
                        var5 = 'avg_';
                        var5 = var7.bind(var5)(var8);
                        var8 = var6;
                        var7 = var8.toFixed;
                        var6 = 2;
                        var8 = var7.bind(var8)(var6);
                        var4 = var4.HermesInternal;
                        var7 = var4.concat;
                        var6 = '';
                        var4 = 'ms';
                        var4 = var7.bind(var6)(var8, var4);
                        var3[var5] = var4;
                        return var3;
                    case 192: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        _fun94637_ip = 198;
                        continue _fun94637;
                    case 196:
                        CatchBlockStart(arg_register = 0);
                    case 198:
                        if (var2) {
                            _fun94637_ip = 204;
                            continue _fun94637
                        }
                    case 201:
                        var1.return();
                    case 204:
                        throw var0;
                }
            };
            var0 = {};
            var2 = var2.bind(var6)(var1, var0);
            var6 = var5.Object;
            var1 = var6.entries;
            var0 = var4._measurements;
            var7 = var1.bind(var6)(var0);
            var6 = var7.reduce;
            var1 = function(arg0, arg1) { // Environment: var3
                _fun94638: for (var _fun94638_ip = 0;;) switch (_fun94638_ip) {
                    case 0:
                        var3 = arg0;
                        var7 = arg1;
                        var1 = var7[Symbol.iterator];
                        var7 = var1().next;
                        var11 = undefined;
                        var2 = undefined;
                        var5 = undefined;
                        var8 = var7().value;
                        var9 = var1;
                        var9 = var9 === var11;
                        var2 = var9;
                        if (var9) {
                            _fun94638_ip = 35;
                            continue _fun94638
                        }
                    case 32:
                        var5 = var8;
                    case 35:
                        var4 = var5;
                        var5 = undefined;
                        var8 = var2;
                        if (var8) {
                            _fun94638_ip = 66;
                            continue _fun94638
                        }
                    case 46:
                        var7 = var7().value;
                        var8 = var1;
                        var8 = var8 === var11;
                        var2 = var8;
                        if (var8) {
                            _fun94638_ip = 66;
                            continue _fun94638
                        }
                    case 63:
                        var5 = var7;
                    case 66: // try_start_0
                        var7 = var5;
                        var9 = var7;
                        var5 = var9[Symbol.iterator];
                        var9 = var5().next;
                        var7 = undefined;
                        var8 = undefined;
                        var9 = var9().value;
                        var10 = var5;
                        var10 = var10 === var11;
                        var7 = var10;
                        if (var10) {
                            _fun94638_ip = 99;
                            continue _fun94638
                        }
                    case 96:
                        var8 = var9;
                    case 99:
                        var6 = var8;
                        if (var7) {
                            _fun94638_ip = 108;
                            continue _fun94638
                        }
                    case 105:
                        var5.return();
                    case 108: // try_end0
                        var5 = var2;
                        if (var5) {
                            _fun94638_ip = 117;
                            continue _fun94638
                        }
                    case 114:
                        var1.return();
                    case 117:
                        var8 = var4;
                        var4 = global;
                        var5 = var4.HermesInternal;
                        var7 = var5.concat;
                        var5 = 'avg_';
                        var5 = var7.bind(var5)(var8);
                        var8 = var6;
                        var7 = var8.toFixed;
                        var6 = 2;
                        var7 = var7.bind(var8)(var6);
                        var4 = var4.HermesInternal;
                        var6 = var4.concat;
                        var4 = '';
                        var4 = var6.bind(var4)(var7);
                        var3[var5] = var4;
                        return var3;
                    case 187: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        _fun94638_ip = 193;
                        continue _fun94638;
                    case 191:
                        CatchBlockStart(arg_register = 0);
                    case 193:
                        if (var2) {
                            _fun94638_ip = 199;
                            continue _fun94638
                        }
                    case 196:
                        var1.return();
                    case 199:
                        throw var0;
                }
            };
            var0 = {};
            var1 = var6.bind(var7)(var1, var0);
            var0 = {};
            var6 = var5.Object;
            var5 = var6.entries;
            var4 = var4._eventCounts;
            var6 = var5.bind(var6)(var4);
            var5 = var6.reduce;
            var4 = function(arg0, arg1) { // Environment: var3
                _fun94639: for (var _fun94639_ip = 0;;) switch (_fun94639_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = arg1;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var4 = var3().value;
                        var2 = var1;
                        var7 = undefined;
                        var2 = var2 === var7;
                        var5 = undefined;
                        if (var2) {
                            _fun94639_ip = 30;
                            continue _fun94639
                        }
                    case 27:
                        var5 = var4;
                    case 30:
                        var4 = undefined;
                        if (var2) {
                            _fun94639_ip = 60;
                            continue _fun94639
                        }
                    case 35:
                        var6 = var3().value;
                        var3 = var1;
                        var3 = var3 === var7;
                        var4 = undefined;
                        var2 = var3;
                        if (var3) {
                            _fun94639_ip = 60;
                            continue _fun94639
                        }
                    case 54:
                        var4 = var6;
                        var2 = var3;
                    case 60:
                        if (var2) {
                            _fun94639_ip = 66;
                            continue _fun94639
                        }
                    case 63:
                        var1.return();
                    case 66:
                        var1 = global;
                        var2 = var1.HermesInternal;
                        var3 = var2.concat;
                        var2 = 'count_';
                        var2 = var3.bind(var2)(var5);
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = '';
                        var1 = var3.bind(var1)(var4);
                        var0[var2] = var1;
                        return var0;
                }
            };
            var3 = {};
            var8 = var5.bind(var6)(var4, var3);
            var9 = var0;
            var3 = copyDataProperties(var9, var8);
            var9 = var0;
            var8 = var2;
            var2 = copyDataProperties(var9, var8);
            var9 = var0;
            var8 = var1;
            var1 = copyDataProperties(var9, var8);
            return var0;
        };
        var0.value = var4;
        var1[10] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/gateway/WorkSchedulerTelemetry.tsx';
    var6 = var7.bind(var8)(var6);
    var2.WorkSchedulerTelemetryEvent = var5;
    var2.WorkSchedulerTelemetryTiming = var4;
    var2.WorkSchedulerTelemetryMeasurement = var3;
    var2.WorkSchedulerTelemetry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 22, 2]);