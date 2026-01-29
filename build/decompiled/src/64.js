// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = require;
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var4 = function() { // Original name: MessageQueue, environment: var1
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2._lazyCallableModules = var1;
            var1 = new Array(4);
            var3 = new Array(0);
            var1[0] = var3;
            var3 = new Array(0);
            var1[1] = var3;
            var3 = new Array(0);
            var1[2] = var3;
            var3 = 0;
            var1[3] = var3;
            var2._queue = var1;
            var1 = global;
            var4 = var1.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var2._successCallbacks = var4;
            var4 = var1.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var2._failureCallbacks = var4;
            var2._callID = var3;
            var2._lastFlush = var3;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2._eventLoopStartTime = var1;
            var1 = null;
            var2._reactNativeMicrotasksCallback = var1;
            var3 = var2.callFunctionReturnFlushedQueue;
            var1 = var3.bind;
            var1 = var1.bind(var3)(var2);
            var2.callFunctionReturnFlushedQueue = var1;
            var3 = var2.flushedQueue;
            var1 = var3.bind;
            var1 = var1.bind(var3)(var2);
            var2.flushedQueue = var1;
            var3 = var2.invokeCallbackAndReturnFlushedQueue;
            var1 = var3.bind;
            var1 = var1.bind(var3)(var2);
            var2.invokeCallbackAndReturnFlushedQueue = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var0 = {};
        var2 = 'callFunctionReturnFlushedQueue';
        var0.key = var2;
        var2 = function(arg0, arg1, arg2) { // Original name: callFunctionReturnFlushedQueue, environment: var1
            var1 = this;
            var2 = arg0;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = arg2;
            var _closure3_slot2 = var2;
            var _closure3_slot3 = var1;
            var2 = var1.__guard;
            var0 = function() { // Environment: var0
                var4 = _closure3_slot3;
                var3 = var4.__callFunction;
                var2 = _closure3_slot0;
                var1 = _closure3_slot1;
                var0 = _closure3_slot2;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = undefined;
                return var0;
            };
            var0 = var2.bind(var1)(var0);
            var0 = var1.flushedQueue;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var2;
        var2 = new Array(17);
        var2[0] = var0;
        var0 = {};
        var5 = 'invokeCallbackAndReturnFlushedQueue';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: invokeCallbackAndReturnFlushedQueue, environment: var1
            var1 = this;
            var2 = arg0;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var _closure3_slot2 = var1;
            var2 = var1.__guard;
            var0 = function() { // Environment: var0
                var3 = _closure3_slot2;
                var2 = var3.__invokeCallback;
                var1 = _closure3_slot0;
                var0 = _closure3_slot1;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var0 = var2.bind(var1)(var0);
            var0 = var1.flushedQueue;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'flushedQueue';
        var0.key = var5;
        var5 = function() { // Original name: flushedQueue, environment: var1
            _fun1413: for (var _fun1413_ip = 0;;) switch (_fun1413_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = var2.__guard;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.__callReactNativeMicrotasks;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var1 = var2._queue;
                    var0 = new Array(4);
                    var3 = new Array(0);
                    var0[0] = var3;
                    var3 = new Array(0);
                    var0[1] = var3;
                    var3 = new Array(0);
                    var0[2] = var3;
                    var3 = var2._callID;
                    var0[3] = var3;
                    var2._queue = var0;
                    var0 = 0;
                    var0 = var1[var0];
                    var2 = var0.length;
                    var0 = null;
                    if (!var2) {
                        _fun1413_ip = 94;
                        continue _fun1413
                    }
                case 91:
                    var0 = var1;
                case 94:
                    return var0;
            }
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'getEventLoopRunningTime';
        var0.key = var5;
        var5 = function() { // Original name: getEventLoopRunningTime, environment: var1
            var0 = global;
            var1 = var0.Date;
            var0 = var1.now;
            var1 = var0.bind(var1)();
            var0 = this;
            var0 = var0._eventLoopStartTime;
            var0 = var1 - var0;
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'registerCallableModule';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: registerCallableModule, environment: var1
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = this;
            var2 = var1._lazyCallableModules;
            var1 = function() { // Environment: var0
                var0 = _closure3_slot0;
                return var0;
            };
            var0 = arg0;
            var2[var0] = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'registerLazyCallableModule';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: registerLazyCallableModule, environment: var1
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = this;
            var2 = var1._lazyCallableModules;
            var1 = function() { // Environment: var0
                _fun1419: for (var _fun1419_ip = 0;;) switch (_fun1419_ip) {
                    case 0:
                        var1 = _closure3_slot1;
                        if (!var1) {
                            _fun1419_ip = 30;
                            continue _fun1419
                        }
                    case 10:
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var _closure3_slot0 = var1;
                        var1 = null;
                        _closure3_slot1 = var1;
                    case 30:
                        var0 = _closure3_slot0;
                        return var0;
                }
            };
            var0 = arg0;
            var2[var0] = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[5] = var0;
        var0 = {};
        var5 = 'getCallableModule';
        var0.key = var5;
        var5 = function(arg0) { // Original name: getCallableModule, environment: var1
            _fun1420: for (var _fun1420_ip = 0;;) switch (_fun1420_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._lazyCallableModules;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    if (!var2) {
                        _fun1420_ip = 27;
                        continue _fun1420
                    }
                case 21:
                    var1 = undefined;
                    var0 = var2.bind(var1)();
                case 27:
                    return var0;
            }
        };
        var0.value = var5;
        var2[6] = var0;
        var0 = {};
        var5 = 'callNativeSyncHook';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: callNativeSyncHook, environment: var1
            var4 = arg0;
            var3 = arg1;
            var2 = arg2;
            var6 = this;
            var5 = var6.processCallbacks;
            var8 = arg3;
            var7 = arg4;
            var12 = var6;
            var11 = var4;
            var10 = var3;
            var9 = var2;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            var1 = _closure1_slot0;
            var0 = var1.nativeCallSyncHook;
            var0 = var0.bind(var1)(var4, var3, var2);
            return var0;
        };
        var0.value = var5;
        var2[7] = var0;
        var0 = {};
        var5 = 'processCallbacks';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: processCallbacks, environment: var1
            _fun1422: for (var _fun1422_ip = 0;;) switch (_fun1422_ip) {
                case 0:
                    var3 = arg2;
                    var4 = arg3;
                    var5 = arg4;
                    var1 = this;
                    var0 = var4;
                    if (var0) {
                        _fun1422_ip = 21;
                        continue _fun1422
                    }
                case 18:
                    var0 = var5;
                case 21:
                    if (!var0) {
                        _fun1422_ip = 126;
                        continue _fun1422
                    }
                case 24:
                    if (!var4) {
                        _fun1422_ip = 50;
                        continue _fun1422
                    }
                case 27:
                    var2 = var3.push;
                    var6 = var1._callID;
                    var0 = 1;
                    var0 = var6 << var0;
                    var0 = var2.bind(var3)(var0);
                case 50:
                    if (!var5) {
                        _fun1422_ip = 80;
                        continue _fun1422
                    }
                case 53:
                    var2 = var3.push;
                    var0 = var1._callID;
                    var6 = 1;
                    var0 = var0 << var6;
                    var0 = var0 | var6;
                    var0 = var2.bind(var3)(var0);
                case 80:
                    var3 = var1._successCallbacks;
                    var2 = var3.set;
                    var0 = var1._callID;
                    var0 = var2.bind(var3)(var0, var5);
                    var3 = var1._failureCallbacks;
                    var2 = var3.set;
                    var0 = var1._callID;
                    var0 = var2.bind(var3)(var0, var4);
                case 126:
                    var0 = var1._callID;
                    var0 = var0 + 1;
                    var1._callID = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[8] = var0;
        var0 = {};
        var5 = 'enqueueNativeCall';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: enqueueNativeCall, environment: var1
            _fun1423: for (var _fun1423_ip = 0;;) switch (_fun1423_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var4 = arg2;
                    var3 = this;
                    var2 = var3.processCallbacks;
                    var12 = arg3;
                    var11 = arg4;
                    var16 = var3;
                    var15 = var6;
                    var14 = var5;
                    var13 = var4;
                    var0 = var16[var2](var15, var14, var13, var12, var11, var10);
                    var0 = var3._queue;
                    var2 = 0;
                    var1 = var0[var2];
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var6);
                    var0 = var3._queue;
                    var7 = 1;
                    var1 = var0[var7];
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var5);
                    var1 = var3._queue;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var4);
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var1 = var0.bind(var1)();
                    var8 = _closure1_slot0;
                    var8 = var8.nativeFlushQueueImmediate;
                    if (!var8) {
                        _fun1423_ip = 229;
                        continue _fun1423
                    }
                case 141:
                    var8 = var3._lastFlush;
                    var9 = var1 - var8;
                    var8 = 5;
                    if (!(var9 >= var8)) {
                        _fun1423_ip = 229;
                        continue _fun1423
                    }
                case 158:
                    var9 = var3._queue;
                    var8 = new Array(4);
                    var10 = new Array(0);
                    var8[0] = var10;
                    var10 = new Array(0);
                    var8[1] = var10;
                    var10 = new Array(0);
                    var8[2] = var10;
                    var10 = var3._callID;
                    var8[3] = var10;
                    var3._queue = var8;
                    var3._lastFlush = var1;
                    var8 = _closure1_slot0;
                    var1 = var8.nativeFlushQueueImmediate;
                    var1 = var1.bind(var8)(var9);
                case 229:
                    var8 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var9 = var8.bind(var0)(var1);
                    var8 = var9.counterEvent;
                    var1 = var3._queue;
                    var1 = var1[var2];
                    var2 = var1.length;
                    var1 = 'pending_js_to_native_queue';
                    var1 = var8.bind(var9)(var1, var2);
                    var1 = var3.__spy;
                    if (!var1) {
                        _fun1423_ip = 328;
                        continue _fun1423
                    }
                case 293:
                    var2 = var3.__spy;
                    var1 = {};
                    var1.type = var7;
                    var6 = '' + var6;
                    var1.module = var6;
                    var1.method = var5;
                    var1.args = var4;
                    var1 = var2.bind(var3)(var1);
                case 328:
                    return var0;
            }
        };
        var0.value = var5;
        var2[9] = var0;
        var0 = {};
        var5 = 'createDebugLookup';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: createDebugLookup, environment: var1
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[10] = var0;
        var0 = {};
        var5 = 'setReactNativeMicrotasksCallback';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setReactNativeMicrotasksCallback, environment: var1
            var1 = arg0;
            var0 = this;
            var0._reactNativeMicrotasksCallback = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[11] = var0;
        var0 = {};
        var5 = '__guard';
        var0.key = var5;
        var5 = function(arg0) { // Original name: __guard, environment: var1
            _fun1426: for (var _fun1426_ip = 0;;) switch (_fun1426_ip) {
                case 0:
                    var2 = this;
                    var0 = arg0;
                    var1 = var2.__shouldPauseOnThrow;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun1426_ip = 75;
                        continue _fun1426
                    }
                case 19: // try_start_0
                    var2 = var0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 28: // try_end0
                    _fun1426_ip = 84;
                    continue _fun1426;
                case 30: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var2 = var1.default;
                    var1 = var2.reportFatalError;
                    var1 = var1.bind(var2)(var3);
                    _fun1426_ip = 84;
                    continue _fun1426;
                case 75:
                    var1 = var0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 84:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[12] = var0;
        var0 = {};
        var5 = '__shouldPauseOnThrow';
        var0.key = var5;
        var5 = function() { // Original name: __shouldPauseOnThrow, environment: var1
            _fun1427: for (var _fun1427_ip = 0;;) switch (_fun1427_ip) {
                case 0:
                    var1 = global;
                    var0 = var1.DebuggerInternal;
                    var2 = 'undefined';
                    var0 = typeof var0;
                    var0 = var2 !== var0;
                    if (!var0) {
                        _fun1427_ip = 40;
                        continue _fun1427
                    }
                case 22:
                    var1 = var1.DebuggerInternal;
                    var2 = var1.shouldPauseOnThrow;
                    var1 = true;
                    var0 = var1 === var2;
                case 40:
                    return var0;
            }
        };
        var0.value = var5;
        var2[13] = var0;
        var0 = {};
        var5 = '__callReactNativeMicrotasks';
        var0.key = var5;
        var5 = function() { // Original name: __callReactNativeMicrotasks, environment: var1
            _fun1428: for (var _fun1428_ip = 0;;) switch (_fun1428_ip) {
                case 0:
                    var2 = this;
                    var5 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var4 = 3;
                    var0 = var0[var4];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var0);
                    var5 = var6.beginEvent;
                    var0 = 'JSTimers.callReactNativeMicrotasks()';
                    var0 = var5.bind(var6)(var0);
                case 45: // try_start_0
                    var5 = var2._reactNativeMicrotasksCallback;
                    var0 = null;
                    if (!(var0 != var5)) {
                        _fun1428_ip = 67;
                        continue _fun1428
                    }
                case 57:
                    var0 = var2._reactNativeMicrotasksCallback;
                    var0 = var0.bind(var2)();
                case 67: // try_end0
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var4];
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.endEvent;
                    var0 = var0.bind(var2)();
                    return var3;
                case 96: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var4];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.endEvent;
                    var1 = var1.bind(var2)();
                    throw var0;
            }
        };
        var0.value = var5;
        var2[14] = var0;
        var0 = {};
        var5 = '__callFunction';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: __callFunction, environment: var1
            _fun1429: for (var _fun1429_ip = 0;;) switch (_fun1429_ip) {
                case 0:
                    var10 = this;
                    var7 = arg0;
                    var2 = arg1;
                    var0 = arg2;
                    var3 = undefined;
                    var5 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var6 = global;
                    var4 = var6.Date;
                    var1 = var4.now;
                    var1 = var1.bind(var4)();
                    var10._lastFlush = var1;
                    var1 = var10._lastFlush;
                    var10._eventLoopStartTime = var1;
                    var11 = var10.__spy;
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var4 = 3;
                    var12 = var15[var4];
                    var13 = var14.bind(var3)(var12);
                    var12 = var13.beginEvent;
                    var20 = var7;
                    var19 = var2;
                    if (var11) {
                        _fun1429_ip = 141;
                        continue _fun1429
                    }
                case 99:
                    var11 = var6.HermesInternal;
                    var18 = var11.concat;
                    var31 = '';
                    var29 = '.';
                    var27 = '(...)';
                    var30 = var20;
                    var28 = var19;
                    var11 = var31[var18](var30, var29, var28, var27, var26);
                    var11 = var12.bind(var13)(var11);
                    _fun1429_ip = 208;
                    continue _fun1429;
                case 141:
                    var11 = 5;
                    var11 = var15[var11];
                    var15 = var14.bind(var3)(var11);
                    var14 = var15.default;
                    var11 = var0;
                    var26 = var14.bind(var15)(var11);
                    var11 = var6.HermesInternal;
                    var17 = var11.concat;
                    var31 = '';
                    var29 = '.';
                    var27 = '(';
                    var25 = ')';
                    var30 = var20;
                    var28 = var19;
                    var11 = var31[var17](var30, var29, var28, var27, var26, var25, var24);
                    var11 = var12.bind(var13)(var11);
                case 208: // try_start_0
                    var11 = var10.__spy;
                    if (!var11) {
                        _fun1429_ip = 260;
                        continue _fun1429
                    }
                case 217:
                    var12 = var10.__spy;
                    var11 = {};
                    var13 = 0;
                    var11.type = var13;
                    var13 = var7;
                    var11.module = var13;
                    var13 = var2;
                    var11.method = var13;
                    var13 = var0;
                    var11.args = var13;
                    var11 = var12.bind(var10)(var11);
                case 260:
                    var12 = var10.getCallableModule;
                    var11 = var7;
                    var11 = var12.bind(var10)(var11);
                    var5 = var11;
                    if (var11) {
                        _fun1429_ip = 442;
                        continue _fun1429
                    }
                case 283:
                    var12 = var6.Object;
                    var11 = var12.keys;
                    var10 = var10._lazyCallableModules;
                    var12 = var11.bind(var12)(var10);
                    var9 = var12.length;
                    var11 = var12.join;
                    var10 = ', ';
                    var8 = var11.bind(var12)(var10);
                    var10 = _closure1_slot0;
                    var11 = var10.RN$Bridgeless;
                    var20 = 'false';
                    var10 = true;
                    if (!(var10 === var11)) {
                        _fun1429_ip = 350;
                        continue _fun1429
                    }
                case 346:
                    var20 = 'true';
                case 350:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 6;
                    var10 = var12[var10];
                    var10 = var11.bind(var3)(var10);
                    var30 = var7;
                    var28 = var2;
                    var24 = var9;
                    var22 = var8;
                    var8 = var6.HermesInternal;
                    var15 = var8.concat;
                    var31 = 'Failed to call into JavaScript module method ';
                    var29 = '.';
                    var27 = '(). Module has not been registered as callable. Bridgeless Mode: ';
                    var25 = '. Registered callable JavaScript modules (n = ';
                    var23 = '): ';
                    var21 = '.\n          A frequent cause of the error is that the application entry file path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.';
                    var26 = var20;
                    var9 = var31[var15](var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20);
                    var8 = false;
                    var8 = var10.bind(var3)(var8, var9);
                case 442:
                    var9 = var5;
                    var8 = var2;
                    var8 = var9[var8];
                    if (var8) {
                        _fun1429_ip = 520;
                        continue _fun1429
                    }
                case 455:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 6;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var30 = var7;
                    var28 = var2;
                    var6 = var6.HermesInternal;
                    var10 = var6.concat;
                    var31 = 'Failed to call into JavaScript module method ';
                    var29 = '.';
                    var27 = '(). Module exists, but the method is undefined.';
                    var7 = var31[var10](var30, var29, var28, var27, var26);
                    var6 = false;
                    var6 = var8.bind(var3)(var6, var7);
                case 520:
                    var6 = var5;
                    var5 = var6[var2];
                    var2 = var5.apply;
                    var0 = var2.bind(var5)(var6, var0);
                case 538: // try_end0
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var4];
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.endEvent;
                    var0 = var0.bind(var2)();
                    return var3;
                case 567: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var4];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.endEvent;
                    var1 = var1.bind(var2)();
                    throw var0;
            }
        };
        var0.value = var5;
        var2[15] = var0;
        var0 = {};
        var5 = '__invokeCallback';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: __invokeCallback, environment: var1
            _fun1430: for (var _fun1430_ip = 0;;) switch (_fun1430_ip) {
                case 0:
                    var6 = arg0;
                    var3 = this;
                    var1 = arg1;
                    var0 = undefined;
                    var5 = undefined;
                    var2 = undefined;
                    var4 = global;
                    var7 = var4.Date;
                    var4 = var7.now;
                    var4 = var4.bind(var7)();
                    var3._lastFlush = var4;
                    var4 = var3._lastFlush;
                    var3._eventLoopStartTime = var4;
                    var4 = 1;
                    var5 = var6 >>> var4;
                    var4 = var4 & var6;
                    if (var4) {
                        _fun1430_ip = 85;
                        continue _fun1430
                    }
                case 64:
                    var7 = var3._failureCallbacks;
                    var6 = var7.get;
                    var4 = var5;
                    var4 = var6.bind(var7)(var4);
                    _fun1430_ip = 104;
                    continue _fun1430;
                case 85:
                    var8 = var3._successCallbacks;
                    var7 = var8.get;
                    var6 = var5;
                    var4 = var7.bind(var8)(var6);
                case 104:
                    var2 = var4;
                case 107: // try_start_0
                    var4 = var2;
                    if (var4) {
                        _fun1430_ip = 115;
                        continue _fun1430
                    }
                case 113: // try_end0
                    return var0;
                case 115: // try_start_1
                    var6 = var3._successCallbacks;
                    var4 = var6.delete;
                    var4 = var4.bind(var6)(var5);
                    var4 = var3._failureCallbacks;
                    var3 = var4.delete;
                    var3 = var3.bind(var4)(var5);
                    var3 = var2;
                    var2 = var3.apply;
                    var4 = _closure1_slot3;
                    var1 = var4.bind(var0)(var1);
                    var1 = var2.bind(var3)(var0, var1);
                case 173: // try_end1
                    return var0;
                case 175: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 0);
                    throw var0;
            }
        };
        var0.value = var5;
        var2[16] = var0;
        var0 = {};
        var5 = 'spy';
        var0.key = var5;
        var1 = function(arg0) { // Original name: spy, environment: var1
            _fun1431: for (var _fun1431_ip = 0;;) switch (_fun1431_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure2_slot0;
                    var1 = var0.prototype;
                    var0 = true;
                    if (!(var0 !== var2)) {
                        _fun1431_ip = 34;
                        continue _fun1431
                    }
                case 21:
                    var3 = false;
                    var0 = null;
                    if (!(var3 !== var2)) {
                        _fun1431_ip = 32;
                        continue _fun1431
                    }
                case 29:
                    var0 = var2;
                case 32:
                    _fun1431_ip = 41;
                    continue _fun1431;
                case 34:
                    var0 = function(arg0) { // Environment: var2
                        _fun1432: for (var _fun1432_ip = 0;;) switch (_fun1432_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = global;
                                var2 = var0.console;
                                var1 = var2.log;
                                var5 = var4.type;
                                var6 = 'JS->N';
                                var3 = 0;
                                if (!(var3 === var5)) {
                                    _fun1432_ip = 39;
                                    continue _fun1432
                                }
                            case 33:
                                var6 = 'N->JS';
                            case 39:
                                var5 = var4.module;
                                var3 = null;
                                var3 = var3 != var5;
                                var8 = '';
                                var7 = var8;
                                if (!var3) {
                                    _fun1432_ip = 75;
                                    continue _fun1432
                                }
                            case 61:
                                var5 = var4.module;
                                var3 = '.';
                                var7 = var5 + var3;
                            case 75:
                                var5 = var4.method;
                                var3 = var0.HermesInternal;
                                var3 = var3.concat;
                                var5 = var3.bind(var8)(var7, var5);
                                var3 = ' : ';
                                var3 = var6 + var3;
                                var3 = var3 + var5;
                                var6 = var0.JSON;
                                var5 = var6.stringify;
                                var4 = var4.args;
                                var6 = var5.bind(var6)(var4);
                                var0 = var0.HermesInternal;
                                var5 = var0.concat;
                                var4 = '(';
                                var0 = ')';
                                var0 = var5.bind(var4)(var6, var0);
                                var0 = var3 + var0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                case 41:
                    var1.__spy = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 6, 7, 69, 70, 71, 44]);