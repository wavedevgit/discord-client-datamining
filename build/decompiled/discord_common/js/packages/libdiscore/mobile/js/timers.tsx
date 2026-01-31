// ../discord_common/js/packages/libdiscore/mobile/js/timers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var5 = function(arg0, arg1) { // Original name: setTimeout, environment: var1
        _fun37593: for (var _fun37593_ip = 0;;) switch (_fun37593_ip) {
            case 0:
                var0 = arg1;
                var1 = global;
                var3 = var1.Math;
                var2 = var3.max;
                var1 = null;
                var4 = var1 != var0;
                var1 = 0;
                if (!var4) {
                    _fun37593_ip = 30;
                    continue _fun37593
                }
            case 27:
                var1 = var0;
            case 30:
                var0 = 4;
                var3 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot3;
                var0 = var2.registerTimeout;
                var0 = var0.bind(var2)(var3);
                var3 = _closure1_slot2;
                var2 = var3.set;
                var1 = arg0;
                var1 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function(arg0, arg1) { // Original name: setInterval, environment: var1
        _fun37594: for (var _fun37594_ip = 0;;) switch (_fun37594_ip) {
            case 0:
                var0 = arg1;
                var1 = global;
                var3 = var1.Math;
                var2 = var3.max;
                var1 = null;
                var4 = var1 != var0;
                var1 = 0;
                if (!var4) {
                    _fun37594_ip = 30;
                    continue _fun37594
                }
            case 27:
                var1 = var0;
            case 30:
                var0 = 4;
                var3 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot3;
                var0 = var2.registerInterval;
                var0 = var0.bind(var2)(var3);
                var3 = _closure1_slot2;
                var2 = var3.set;
                var1 = arg0;
                var1 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var3 = function(arg0) { // Original name: clearTimeout, environment: var1
        _fun37595: for (var _fun37595_ip = 0;;) switch (_fun37595_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun37595_ip = 29;
                    continue _fun37595
                }
            case 12:
                var3 = _closure1_slot2;
                var1 = var3.delete;
                var0 = var1.bind(var3)(var2);
            case 29:
                if (!var0) {
                    _fun37595_ip = 50;
                    continue _fun37595
                }
            case 32:
                var1 = _closure1_slot3;
                var0 = var1.clear;
                var0 = var0.bind(var1)(var2);
            case 50:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var6 = global;
    var11 = var6.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var0 = true;
    var9.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var9);
    var0 = 0;
    var9 = var8[var0];
    var0 = undefined;
    var9 = var7.bind(var0)(var9);
    var9 = var9.typedGlobal;
    var11 = var9.LIBDISCORE_JSI;
    var _closure1_slot0 = var11;
    var9 = null;
    var _closure1_slot1 = var9;
    var10 = {
        'slowExecutionThresholdMillis': 500,
        'delayedExecutionThresholdMillis': 5000
    };
    var9 = function(arg0, arg1, arg2, arg3) { // Original name: onSlowTimer, environment: var1
        _fun37596: for (var _fun37596_ip = 0;;) switch (_fun37596_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun37596_ip = 35;
                    continue _fun37596
                }
            case 13:
                var5 = _closure1_slot1;
                var10 = undefined;
                var9 = arg0;
                var8 = arg1;
                var7 = arg2;
                var6 = arg3;
                var0 = var10[var5](var9, var8, var7, var6, var5);
            case 35:
                var0 = undefined;
                return var0;
        }
    };
    var10.onSlowTimer = var9;
    var6 = var6.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var15 = var9;
    var6 = new var15[var6](var14);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot2 = var6;
    var9 = var11.makeTimerManager;
    var6 = function(arg0, arg1) { // Original name: expirationCallback, environment: var1
        _fun37597: for (var _fun37597_ip = 0;;) switch (_fun37597_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                if (!var1) {
                    _fun37597_ip = 49;
                    continue _fun37597
                }
            case 23:
                var2 = arg1;
                if (!var2) {
                    _fun37597_ip = 43;
                    continue _fun37597
                }
            case 29:
                var2 = _closure1_slot2;
                var0 = var2.delete;
                var0 = var0.bind(var2)(var3);
            case 43:
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 49:
                var0 = undefined;
                return var0;
        }
    };
    var6 = var9.bind(var11)(var6, var10);
    var _closure1_slot3 = var6;
    var _closure1_slot4 = var3;
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/libdiscore/mobile/js/timers.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg0) { // Original name: setTimersMonitorCallback, environment: var1
        var0 = arg0;
        _closure1_slot1 = var0;
        var0 = undefined;
        return var0;
    };
    var2.setTimersMonitorCallback = var6;
    var2.setTimeout = var5;
    var2.setInterval = var4;
    var2.clearTimeout = var3;
    var2.clearInterval = var3;
    var3 = function() { // Original name: registerTimerPolyfills, environment: var1
        var1 = global;
        var3 = var1.window;
        var2 = _closure1_slot5;
        var3.setTimeout = var2;
        var3 = var1.window;
        var2 = _closure1_slot6;
        var3.setInterval = var2;
        var3 = var1.window;
        var2 = _closure1_slot7;
        var3.clearTimeout = var2;
        var1 = var1.window;
        var0 = _closure1_slot4;
        var1.clearInterval = var0;
        var0 = undefined;
        return var0;
    };
    var2.registerTimerPolyfills = var3;
    var1 = function() { // Original name: keepAliveWorkaround, environment: var1
        var2 = _closure1_slot0;
        var1 = var2.runtimeExecutorDemo;
        var0 = 5000;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.keepAliveWorkaround = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4084, 2]);