// modules/gateway/DispatcherWorkScheduler.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun94671: for (var _fun94671_ip = 0;;) switch (_fun94671_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun94671_ip = 76;
                continue _fun94671;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS;
    var _closure1_slot7 = var6;
    var6 = var3.NATIVE_WORK_BACKOFF_MS;
    var _closure1_slot8 = var6;
    var6 = var3.NATIVE_WORK_DEADLINE_MS;
    var _closure1_slot9 = var6;
    var3 = var3.WorkIdleDeadline;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppStates;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.BasicWorkScheduler;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun94675: for (var _fun94675_ip = 0;;) switch (_fun94675_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var0 = _closure1_slot5;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun94675_ip = 64;
                        continue _fun94675
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var4);
                    _fun94675_ip = 102;
                    continue _fun94675;
                case 64:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var4)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 102:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 7;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.subscribe;
                    var2 = 'APP_STATE_UPDATE';
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0.state;
                        var0 = _closure1_slot11;
                        var0 = var0.BACKGROUND;
                        var2 = _closure3_slot0;
                        var1 = var2._trackAppBackgrounded;
                        var0 = var3 === var0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = '_queueIdleCallback';
        var4.key = var0;
        var0 = function() {
            _fun94677: for (var _fun94677_ip = 0;;) switch (_fun94677_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1._enableRequestIdleCallback;
                    if (!var0) {
                        _fun94677_ip = 80;
                        continue _fun94677
                    }
                case 18:
                    var0 = var1._criticalWorkScheduled;
                    if (var0) {
                        _fun94677_ip = 80;
                        continue _fun94677
                    }
                case 27:
                    var0 = global;
                    var4 = var0.performance;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var _closure3_slot1 = var3;
                    var4 = var0.setTimeout;
                    var0 = undefined;
                    var3 = function() { // Environment: var2
                        var3 = global;
                        var1 = var3.performance;
                        var0 = var1.now;
                        var2 = var0.bind(var1)();
                        var1 = _closure3_slot1;
                        var5 = var2 - var1;
                        var2 = _closure3_slot0;
                        var1 = var2._processWorkCallback;
                        var8 = var2._consecutiveFlushesBeforeQueueEmpty;
                        var7 = var3.Math;
                        var6 = var7.max;
                        var4 = _closure1_slot9;
                        var5 = var4 - var5;
                        var4 = 0;
                        var7 = var6.bind(var7)(var4, var5);
                        var5 = _closure1_slot10;
                        var6 = var3.Math;
                        var4 = var6.max;
                        var3 = _closure1_slot8;
                        var3 = var3 * var8;
                        var3 = var7 + var3;
                        var0 = _closure1_slot7;
                        var10 = var4.bind(var6)(var3, var0);
                        var0 = var5.prototype;
                        var3 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var9 = false;
                        var11 = var3;
                        var0 = new var11[var5](var10, var9, var8);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = 1;
                    var2 = var4.bind(var0)(var3, var2);
                    var1._flushIdleHandler = var2;
                    return var0;
                case 80:
                    var0 = var1._processWorkCallback;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_clearIdleCallback';
        var4.key = var6;
        var5 = function() {
            _fun94679: for (var _fun94679_ip = 0;;) switch (_fun94679_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._flushIdleHandler;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun94679_ip = 42;
                        continue _fun94679
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._flushIdleHandler;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._flushIdleHandler = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/DispatcherWorkScheduler.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot12;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var2 = var1;
        var0 = new var2[var0](var1);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.createDispatcherWorkScheduler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 12422, 660, 806, 12424, 2]);