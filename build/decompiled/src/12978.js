// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var1 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var1;
    var3 = function(arg0, arg1) { // Original name: getMetricsAggregatorForClient, environment: var4
        _fun100015: for (var _fun100015_ip = 0;;) switch (_fun100015_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var3 = var3[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var3);
                var5 = var6.getGlobalSingleton;
                var3 = 'globalMetricsAggregators';
                var0 = function() { // Environment: var2
                    var0 = global;
                    var0 = var0.WeakMap;
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
                var3 = var5.bind(var6)(var3, var0);
                var0 = var3.get;
                var0 = var0.bind(var3)(var4);
                if (var0) {
                    _fun100015_ip = 157;
                    continue _fun100015
                }
            case 71:
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var10 = var5;
                var9 = var4;
                var1 = new var10[var1](var9, var8);
                var1 = var1 instanceof Object ? var1 : var5;
                var _closure2_slot0 = var1;
                var7 = var4.on;
                var6 = 'flush';
                var5 = function() { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = var1.flush;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var7.bind(var4)(var6, var5);
                var6 = var4.on;
                var5 = 'close';
                var2 = function() { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = var1.close;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var6.bind(var4)(var5, var2);
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                return var1;
            case 157:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: addToMetricsAggregator, environment: var4
        _fun100019: for (var _fun100019_ip = 0;;) switch (_fun100019_ip) {
            case 0:
                var8 = arg1;
                var7 = arg2;
                var6 = arg3;
                var0 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var10 = 4;
                if (!(var2 > var10)) {
                    _fun100019_ip = 31;
                    continue _fun100019
                }
            case 23:
                var2 = arguments[var10];
                if (!(var0 === var2)) {
                    _fun100019_ip = 35;
                    continue _fun100019
                }
            case 31:
                var4 = {};
                _fun100019_ip = 39;
                continue _fun100019;
            case 35:
                var4 = arguments[var10];
            case 39:
                var3 = var4.client;
                if (var3) {
                    _fun100019_ip = 81;
                    continue _fun100019
                }
            case 48:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.getClient;
                var3 = var1.bind(var2)();
            case 81:
                if (!var3) {
                    _fun100019_ip = 429;
                    continue _fun100019
                }
            case 87:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var12 = 3;
                var2 = var2[var12];
                var5 = var5.bind(var0)(var2);
                var2 = var5.getActiveSpan;
                var9 = var2.bind(var5)();
                var11 = undefined;
                if (!var9) {
                    _fun100019_ip = 153;
                    continue _fun100019
                }
            case 125:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var5 = var5.bind(var0)(var2);
                var2 = var5.getRootSpan;
                var11 = var2.bind(var5)(var9);
            case 153:
                var2 = var11;
                if (!var2) {
                    _fun100019_ip = 192;
                    continue _fun100019
                }
            case 159:
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var12];
                var9 = var9.bind(var0)(var5);
                var5 = var9.spanToJSON;
                var5 = var5.bind(var9)(var11);
                var2 = var5.description;
            case 192:
                var5 = var4.unit;
                var12 = var4.tags;
                var4 = var4.timestamp;
                var9 = var3.getOptions;
                var9 = var9.bind(var3)();
                var13 = var9.release;
                var9 = var9.environment;
                var11 = {};
                if (!var13) {
                    _fun100019_ip = 243;
                    continue _fun100019
                }
            case 237:
                var11.release = var13;
            case 243:
                if (!var9) {
                    _fun100019_ip = 252;
                    continue _fun100019
                }
            case 246:
                var11.environment = var9;
            case 252:
                if (!var2) {
                    _fun100019_ip = 261;
                    continue _fun100019
                }
            case 255:
                var11.transaction = var2;
            case 261:
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var10];
                var2 = var9.bind(var0)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun100019_ip = 367;
                    continue _fun100019
                }
            case 287:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 1;
                var2 = var10[var2];
                var2 = var9.bind(var0)(var2);
                var10 = var2.logger;
                var9 = var10.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var15 = var2.concat;
                var22 = 'Adding value of ';
                var20 = ' to ';
                var18 = ' metric ';
                var21 = var6;
                var19 = var8;
                var17 = var7;
                var2 = var22[var15](var21, var20, var19, var18, var17, var16);
                var2 = var9.bind(var10)(var2);
            case 367:
                var2 = _closure1_slot2;
                var1 = arg0;
                var3 = var2.bind(var0)(var3, var1);
                var2 = var3.add;
                var1 = global;
                var10 = var1.Object;
                var9 = var10.assign;
                var1 = {};
                var17 = var9.bind(var10)(var1, var11, var12);
                var22 = var3;
                var21 = var8;
                var20 = var7;
                var19 = var6;
                var18 = var5;
                var16 = var4;
                var1 = var22[var2](var21, var20, var19, var18, var17, var16, var15);
            case 429:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var5 = function(arg0, arg1, arg2, arg3) { // Original name: distribution, environment: var4
        var6 = _closure1_slot3;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var10 = var2.DISTRIBUTION_METRIC_TYPE;
        var2 = _closure1_slot5;
        var1 = arg2;
        var8 = var2.bind(var0)(var1);
        var11 = arg0;
        var9 = arg1;
        var7 = arg3;
        var12 = undefined;
        var1 = var12[var6](var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var _closure1_slot4 = var5;
    var0 = function(arg0) { // Original name: ensureNumber, environment: var4
        _fun100021: for (var _fun100021_ip = 0;;) switch (_fun100021_ip) {
            case 0:
                var3 = arg0;
                var2 = 'string';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun100021_ip = 32;
                    continue _fun100021
                }
            case 17:
                var1 = global;
                var2 = var1.parseInt;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 32:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function(arg0, arg1) { // Original name: increment, environment: var4
        _fun100022: for (var _fun100022_ip = 0;;) switch (_fun100022_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var1 = 2;
                var4 = var2 > var1;
                var5 = 1;
                var2 = var5;
                if (!var4) {
                    _fun100022_ip = 38;
                    continue _fun100022
                }
            case 23:
                var4 = arguments[var1];
                var2 = var5;
                if (!(var0 !== var4)) {
                    _fun100022_ip = 38;
                    continue _fun100022
                }
            case 34:
                var2 = arguments[var1];
            case 38:
                var4 = arguments.length;
                var1 = 3;
                var4 = var4 > var1;
                var6 = undefined;
                if (!var4) {
                    _fun100022_ip = 57;
                    continue _fun100022
                }
            case 53:
                var6 = arguments[var1];
            case 57:
                var5 = _closure1_slot3;
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 5;
                var3 = var7[var3];
                var3 = var4.bind(var0)(var3);
                var11 = var3.COUNTER_METRIC_TYPE;
                var1 = _closure1_slot5;
                var9 = var1.bind(var0)(var2);
                var12 = arg0;
                var10 = arg1;
                var13 = undefined;
                var8 = var6;
                var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var1.increment = var6;
    var1.distribution = var5;
    var5 = function(arg0, arg1, arg2, arg3) { // Original name: set, environment: var4
        var6 = _closure1_slot3;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var10 = var1.SET_METRIC_TYPE;
        var11 = arg0;
        var9 = arg1;
        var8 = arg2;
        var7 = arg3;
        var12 = undefined;
        var1 = var12[var6](var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var1.set = var5;
    var5 = function(arg0, arg1, arg2, arg3) { // Original name: gauge, environment: var4
        var6 = _closure1_slot3;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var10 = var2.GAUGE_METRIC_TYPE;
        var2 = _closure1_slot5;
        var1 = arg2;
        var8 = var2.bind(var0)(var1);
        var11 = arg0;
        var9 = arg1;
        var7 = arg3;
        var12 = undefined;
        var1 = var12[var6](var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var1.gauge = var5;
    var4 = function(arg0, arg1, arg2) { // Original name: timing, environment: var4
        _fun100025: for (var _fun100025_ip = 0;;) switch (_fun100025_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var3 = undefined;
                var7 = undefined;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var4;
                var1 = arguments.length;
                var2 = 3;
                var8 = var1 > var2;
                var9 = 'second';
                var1 = var9;
                if (!var8) {
                    _fun100025_ip = 62;
                    continue _fun100025
                }
            case 47:
                var8 = arguments[var2];
                var1 = var9;
                if (!(var3 !== var8)) {
                    _fun100025_ip = 62;
                    continue _fun100025
                }
            case 58:
                var1 = arguments[var2];
            case 62:
                var8 = arguments.length;
                var2 = 4;
                var8 = var8 > var2;
                var10 = undefined;
                if (!var8) {
                    _fun100025_ip = 81;
                    continue _fun100025
                }
            case 77:
                var10 = arguments[var2];
            case 81:
                var _closure2_slot3 = var10;
                var7 = 'function';
                var2 = typeof var4;
                if (!(var7 !== var2)) {
                    _fun100025_ip = 149;
                    continue _fun100025
                }
            case 96:
                var2 = _closure1_slot4;
                var7 = global;
                var9 = var7.Object;
                var8 = var9.assign;
                var7 = {};
                var7.unit = var1;
                var1 = {};
                var11 = var8.bind(var9)(var1, var10, var7);
                var15 = undefined;
                var14 = var6;
                var13 = var5;
                var12 = var4;
                var1 = var15[var2](var14, var13, var12, var11, var10);
                return var3;
            case 149:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var1 = var6[var1];
                var4 = var2.bind(var3)(var1);
                var1 = var4.timestampInSeconds;
                var4 = var1.bind(var4)();
                var _closure2_slot4 = var4;
                var1 = 6;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.startSpanManual;
                var1 = {};
                var6 = 'metrics.timing';
                var1.op = var6;
                var1.name = var5;
                var1.startTime = var4;
                var4 = true;
                var1.onlyIfParent = var4;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleCallbackErrors;
                    var2 = function() { // Environment: var0
                        var1 = _closure2_slot2;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = function() { // Environment: var0
                        var0 = undefined;
                        return var0;
                    };
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.timestampInSeconds;
                        var3 = var2.bind(var3)();
                        var6 = _closure1_slot4;
                        var5 = _closure2_slot0;
                        var4 = _closure2_slot1;
                        var2 = _closure2_slot4;
                        var2 = var3 - var2;
                        var7 = global;
                        var10 = var7.Object;
                        var9 = var10.assign;
                        var8 = _closure2_slot3;
                        var7 = {};
                        var1 = 'second';
                        var7.unit = var1;
                        var1 = {};
                        var11 = var9.bind(var10)(var1, var8, var7);
                        var15 = undefined;
                        var14 = var5;
                        var13 = var4;
                        var12 = var2;
                        var1 = var15[var6](var14, var13, var12, var11, var10);
                        var2 = _closure3_slot0;
                        var1 = var2.end;
                        var1 = var1.bind(var2)(var3);
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.timing = var4;
    var1.getMetricsAggregatorForClient = var3;
    var2.metrics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12861, 12862, 12927, 12916, 12928, 12979, 12934, 12935]);