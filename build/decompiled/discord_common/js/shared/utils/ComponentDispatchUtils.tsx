// ../discord_common/js/shared/utils/ComponentDispatchUtils.tsx
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
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: ComponentDispatcher, environment: var4
            _fun13524: for (var _fun13524_ip = 0;;) switch (_fun13524_ip) {
                case 0:
                    var4 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun13524_ip = 14;
                        continue _fun13524
                    }
                case 12:
                    var4 = {};
                case 14:
                    var5 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var0)(var1, var3);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 2;
                    var2 = var5[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.EventEmitter;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = var3;
                    var2 = new var8[var2](var7);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1.emitter = var2;
                    var2 = {};
                    var1._savedDispatches = var2;
                    var2 = {
                        'maxListeners': 100,
                        'enableDevtools': false
                    };
                    var3 = 100;
                    var7 = var2;
                    var6 = var4;
                    var4 = copyDataProperties(var7, var6);
                    var1.options = var2;
                    var2 = var1.options;
                    var2 = var2.maxListeners;
                    var4 = null;
                    var4 = var4 != var2;
                    if (!var4) {
                        _fun13524_ip = 146;
                        continue _fun13524
                    }
                case 143:
                    var3 = var2;
                case 146:
                    var2 = var1.emitter;
                    var1 = var2.setMaxListeners;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'safeDispatch';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun13525: for (var _fun13525_ip = 0;;) switch (_fun13525_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var4 = 1;
                    var10 = var4;
                    var3 = copyRestArgs(var10);
                    var0 = var2.hasSubscribers;
                    var0 = var0.bind(var2)(var5);
                    if (var0) {
                        _fun13525_ip = 78;
                        continue _fun13525
                    }
                case 30:
                    var0 = 0;
                    var6 = var3[var0];
                    var0 = var2._savedDispatches;
                    var1 = var2._savedDispatches;
                    var1 = var1[var5];
                    var7 = null;
                    if (!(var7 == var1)) {
                        _fun13525_ip = 62;
                        continue _fun13525
                    }
                case 58:
                    var1 = new Array(0);
                case 62:
                    var0[var5] = var1;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var6);
                    return var2;
                case 78:
                    var1 = var2.dispatch;
                    var0 = new Array(1);
                    var0[0] = var5;
                    var10 = var0;
                    var9 = var3;
                    var8 = var4;
                    var3 = arraySpread(var10, var9, var8);
                    var10 = var1;
                    var9 = var0;
                    var8 = var2;
                    var0 = apply(var10, var9, var8);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(13);
        var1[0] = var0;
        var0 = {};
        var5 = 'dispatch';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun13526: for (var _fun13526_ip = 0;;) switch (_fun13526_ip) {
                case 0:
                    var4 = this;
                    var3 = arg0;
                    var2 = arg1;
                    var1 = undefined;
                    var6 = global;
                    var5 = var6.Date;
                    var0 = var5.now;
                    var1 = var0.bind(var5)();
                case 28: // try_start_0
                    var8 = var4.emitter;
                    var7 = var8.emit;
                    var5 = var3;
                    var0 = var2;
                    var0 = var7.bind(var8)(var5, var0);
                case 52: // try_end0
                    var5 = var4.options;
                    var5 = var5.enableDevtools;
                    var0 = var5;
                    if (!var5) {
                        _fun13526_ip = 80;
                        continue _fun13526
                    }
                case 69:
                    var5 = var4.options;
                    var0 = var5.devtoolsReporter;
                case 80:
                    if (!var0) {
                        _fun13526_ip = 129;
                        continue _fun13526
                    }
                case 83:
                    var9 = var4.options;
                    var8 = var9.devtoolsReporter;
                    var7 = var3;
                    var5 = var2;
                    var10 = var6.Date;
                    var0 = var10.now;
                    var10 = var0.bind(var10)();
                    var0 = var1;
                    var0 = var10 - var0;
                    var0 = var8.bind(var9)(var7, var5, var0);
                case 129:
                    return var4;
                case 131: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var7 = var4.options;
                    var7 = var7.enableDevtools;
                    var5 = var7;
                    if (!var7) {
                        _fun13526_ip = 161;
                        continue _fun13526
                    }
                case 150:
                    var7 = var4.options;
                    var5 = var7.devtoolsReporter;
                case 161:
                    if (!var5) {
                        _fun13526_ip = 201;
                        continue _fun13526
                    }
                case 164:
                    var5 = var4.options;
                    var4 = var5.devtoolsReporter;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var1 = var6 - var1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                case 201:
                    throw var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'dispatchToLastSubscribed';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun13527: for (var _fun13527_ip = 0;;) switch (_fun13527_ip) {
                case 0:
                    var4 = this;
                    var3 = arg0;
                    var2 = arg1;
                    var1 = undefined;
                    var0 = undefined;
                    var6 = global;
                    var7 = var6.Date;
                    var5 = var7.now;
                    var1 = var5.bind(var7)();
                case 30: // try_start_0
                    var8 = var4.emitter;
                    var7 = var8.listeners;
                    var5 = var3;
                    var5 = var7.bind(var8)(var5);
                    var0 = var5;
                    var7 = var5.length;
                    var5 = 0;
                    if (!(var7 > var5)) {
                        _fun13527_ip = 91;
                        continue _fun13527
                    }
                case 64:
                    var7 = var0;
                    var5 = var7.length;
                    var0 = 1;
                    var0 = var5 - var0;
                    var5 = var7[var0];
                    var0 = var2;
                    var0 = var5.bind(var7)(var0);
                case 91: // try_end0
                    var5 = var4.options;
                    var5 = var5.enableDevtools;
                    var0 = var5;
                    if (!var5) {
                        _fun13527_ip = 119;
                        continue _fun13527
                    }
                case 108:
                    var5 = var4.options;
                    var0 = var5.devtoolsReporter;
                case 119:
                    if (!var0) {
                        _fun13527_ip = 168;
                        continue _fun13527
                    }
                case 122:
                    var9 = var4.options;
                    var8 = var9.devtoolsReporter;
                    var7 = var3;
                    var5 = var2;
                    var10 = var6.Date;
                    var0 = var10.now;
                    var10 = var0.bind(var10)();
                    var0 = var1;
                    var0 = var10 - var0;
                    var0 = var8.bind(var9)(var7, var5, var0);
                case 168:
                    return var4;
                case 170: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var7 = var4.options;
                    var7 = var7.enableDevtools;
                    var5 = var7;
                    if (!var7) {
                        _fun13527_ip = 200;
                        continue _fun13527
                    }
                case 189:
                    var7 = var4.options;
                    var5 = var7.devtoolsReporter;
                case 200:
                    if (!var5) {
                        _fun13527_ip = 240;
                        continue _fun13527
                    }
                case 203:
                    var5 = var4.options;
                    var4 = var5.devtoolsReporter;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var1 = var6 - var1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                case 240:
                    throw var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'hasSubscribers';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0.emitter;
            var1 = var2.listenerCount;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_checkSavedDispatches';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun13529: for (var _fun13529_ip = 0;;) switch (_fun13529_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var2;
                    var3 = var0._savedDispatches;
                    var4 = var3[var2];
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun13529_ip = 59;
                        continue _fun13529
                    }
                case 32:
                    var3 = var4.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.dispatch;
                        var1 = _closure3_slot1;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = var0._savedDispatches;
                    var0 = undefined;
                    var1[var2] = var0;
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'subscribe';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun13531: for (var _fun13531_ip = 0;;) switch (_fun13531_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var2 = var0.emitter;
                    var1 = var2.listeners;
                    var2 = var1.bind(var2)(var4);
                    var1 = var2.indexOf;
                    var2 = var1.bind(var2)(var3);
                    var1 = 0;
                    if (!(!(var2 >= var1))) {
                        _fun13531_ip = 74;
                        continue _fun13531
                    }
                case 43:
                    var2 = var0.emitter;
                    var1 = var2.on;
                    var1 = var1.bind(var2)(var4, var3);
                    var1 = var0._checkSavedDispatches;
                    var1 = var1.bind(var0)(var4);
                    _fun13531_ip = 116;
                    continue _fun13531;
                case 74:
                    var1 = var0.options;
                    var1 = var1.logger;
                    if (!var1) {
                        _fun13531_ip = 116;
                        continue _fun13531
                    }
                case 88:
                    var1 = var0.options;
                    var3 = var1.logger;
                    var2 = var3.warn;
                    var1 = 'ComponentDispatch.subscribe: Attempting to add a duplicate listener';
                    var1 = var2.bind(var3)(var1, var4);
                case 116:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'subscribeOnce';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            var2 = arg0;
            var0 = this;
            var4 = var0.emitter;
            var3 = var4.once;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var0._checkSavedDispatches;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'resubscribe';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun13533: for (var _fun13533_ip = 0;;) switch (_fun13533_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var2 = var0.emitter;
                    var1 = var2.listeners;
                    var2 = var1.bind(var2)(var4);
                    var1 = var2.includes;
                    var1 = var1.bind(var2)(var3);
                    if (var1) {
                        _fun13533_ip = 83;
                        continue _fun13533
                    }
                case 39:
                    var1 = var0.options;
                    var1 = var1.logger;
                    if (!var1) {
                        _fun13533_ip = 119;
                        continue _fun13533
                    }
                case 53:
                    var1 = var0.options;
                    var5 = var1.logger;
                    var2 = var5.warn;
                    var1 = 'ComponentDispatch.resubscribe: Resubscribe without existing subscription';
                    var1 = var2.bind(var5)(var1, var4);
                    _fun13533_ip = 119;
                    continue _fun13533;
                case 83:
                    var2 = var0.emitter;
                    var1 = var2.off;
                    var1 = var1.bind(var2)(var4, var3);
                    var2 = var0.emitter;
                    var1 = var2.on;
                    var1 = var1.bind(var2)(var4, var3);
                case 119:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'unsubscribe';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            var0 = this;
            var4 = var0.emitter;
            var3 = var4.removeListener;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var2 = var0.emitter;
            var1 = var2.removeAllListeners;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'dispatchKeyed';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            var2 = this;
            var10 = 2;
            var4 = copyRestArgs(var10);
            var1 = var2.dispatch;
            var0 = global;
            var0 = var0.HermesInternal;
            var7 = var0.concat;
            var6 = '';
            var5 = arg0;
            var3 = '_';
            var0 = arg1;
            var3 = var7.bind(var6)(var5, var3, var0);
            var0 = new Array(1);
            var0[0] = var3;
            var8 = 1;
            var10 = var0;
            var9 = var4;
            var3 = arraySpread(var10, var9, var8);
            var10 = var1;
            var9 = var0;
            var8 = var2;
            var0 = apply(var10, var9, var8);
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'subscribeKeyed';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            var3 = this;
            var2 = var3.subscribe;
            var0 = global;
            var0 = var0.HermesInternal;
            var6 = var0.concat;
            var5 = '';
            var4 = arg0;
            var1 = '_';
            var0 = arg1;
            var1 = var6.bind(var5)(var4, var1, var0);
            var0 = arg2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'unsubscribeKeyed';
        var0.key = var5;
        var4 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            var3 = this;
            var2 = var3.unsubscribe;
            var0 = global;
            var0 = var0.HermesInternal;
            var6 = var0.concat;
            var5 = '';
            var4 = arg0;
            var1 = '_';
            var0 = arg1;
            var1 = var6.bind(var5)(var4, var1, var0);
            var0 = arg2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var4;
        var1[12] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/shared/utils/ComponentDispatchUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ComponentDispatcher = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 639, 2]);