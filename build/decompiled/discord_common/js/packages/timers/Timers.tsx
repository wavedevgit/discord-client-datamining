// ../discord_common/js/packages/timers/Timers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() { // Original name: Timeout, environment: var4
            var3 = _closure1_slot0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'start';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun31982: for (var _fun31982_ip = 0;;) switch (_fun31982_ip) {
                case 0:
                    var4 = arguments[2];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun31982_ip = 27;
                        continue _fun31982
                    }
                case 25:
                    var4 = true;
                case 27:
                    var3 = var2.isStarted;
                    var3 = var3.bind(var2)();
                    if (!var3) {
                        _fun31982_ip = 43;
                        continue _fun31982
                    }
                case 40:
                    var3 = !var4;
                case 43:
                    if (var3) {
                        _fun31982_ip = 89;
                        continue _fun31982
                    }
                case 46:
                    var3 = var2.stop;
                    var3 = var3.bind(var2)();
                    var3 = global;
                    var5 = var3.window;
                    var4 = var5.setTimeout;
                    var3 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = null;
                        var2._ref = var1;
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var1);
                    var2._ref = var1;
                case 89:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun31984: for (var _fun31984_ip = 0;;) switch (_fun31984_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._ref;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun31984_ip = 42;
                        continue _fun31984
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._ref;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._ref = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isStarted';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0._ref;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var5 = var3.bind(var0)();
    var _closure1_slot2 = var5;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function(arg0, arg1) { // Original name: DelayedCall, environment: var4
            var2 = this;
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = arg0;
            var2._delay = var3;
            var3 = arg1;
            var2._handler = var3;
            var1 = _closure1_slot2;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._timeout = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'set';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var1 = arg0;
            var0._delay = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'delay';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun31989: for (var _fun31989_ip = 0;;) switch (_fun31989_ip) {
                case 0:
                    var5 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun31989_ip = 14;
                        continue _fun31989
                    }
                case 12:
                    var5 = true;
                case 14:
                    var4 = var1._timeout;
                    var3 = var4.start;
                    var2 = var1._delay;
                    var1 = var1._handler;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'cancel';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0._timeout;
            var0 = var1.stop;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'isDelayed';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0._timeout;
            var0 = var1.isStarted;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() { // Original name: Interval, environment: var4
            var3 = _closure1_slot0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'start';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var4
            var1 = this;
            var0 = var1.stop;
            var0 = var0.bind(var1)();
            var0 = global;
            var4 = var0.window;
            var3 = var4.setInterval;
            var2 = arg1;
            var0 = arg0;
            var0 = var3.bind(var4)(var2, var0);
            var1._ref = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun31995: for (var _fun31995_ip = 0;;) switch (_fun31995_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._ref;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun31995_ip = 42;
                        continue _fun31995
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearInterval;
                    var3 = var1._ref;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._ref = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isStarted';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0._ref;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var6 = 2;
    var7 = var7[var6];
    var6 = arg1;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/timers/Timers.tsx';
    var6 = var7.bind(var8)(var6);
    var2.Timeout = var5;
    var2.DelayedCall = var4;
    var2.Interval = var3;
    var1 = function(arg0) { // Original name: timeoutPromise, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = global;
            var3 = var0.setTimeout;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
            };
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.timeoutPromise = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);