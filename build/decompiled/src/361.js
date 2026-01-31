// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            var2 = this;
            var0 = arg0;
            var1 = var0.onMoreTasks;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var2._onMoreTasks = var1;
            var3 = {};
            var1 = new Array(0);
            var3.tasks = var1;
            var1 = false;
            var3.popable = var1;
            var1 = new Array(1);
            var1[0] = var3;
            var2._queueStack = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'enqueue';
        var0.key = var1;
        var1 = function arg0() {
            var1 = this;
            var0 = var1._getCurrentQueue;
            var2 = var0.bind(var1)();
            var1 = var2.push;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'enqueueTasks';
        var0.key = var5;
        var5 = function arg0() {
            var2 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.enqueue;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'cancelTasks';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var2 = arg0;
            var _closure3_slot0 = var2;
            var4 = var1._queueStack;
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var0
                var4 = arg0;
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var1 = {};
                var6 = var4.tasks;
                var5 = var6.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure3_slot0;
                    var1 = var2.indexOf;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = -1;
                    var0 = var0 === var1;
                    return var0;
                };
                var0 = var5.bind(var6)(var0);
                var1.tasks = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun5341: for (var _fun5341_ip = 0;;) switch (_fun5341_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.tasks;
                        var0 = var0.length;
                        var2 = 0;
                        var0 = var0 > var2;
                        if (var0) {
                            _fun5341_ip = 30;
                            continue _fun5341
                        }
                    case 23:
                        var1 = arg1;
                        var0 = var2 === var1;
                    case 30:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0);
            var1._queueStack = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'hasTasksToProcess';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1._getCurrentQueue;
            var0 = var0.bind(var1)();
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'processNext';
        var0.key = var5;
        var5 = function() {
            _fun5343: for (var _fun5343_ip = 0;;) switch (_fun5343_ip) {
                case 0:
                    var5 = this;
                    var1 = undefined;
                    var2 = undefined;
                    var3 = undefined;
                    var4 = var5._getCurrentQueue;
                    var4 = var4.bind(var5)();
                    var2 = var4;
                    var4 = var4.length;
                    if (!var4) {
                        _fun5343_ip = 205;
                        continue _fun5343
                    }
                case 33:
                    var4 = var2;
                    var2 = var4.shift;
                    var3 = var2.bind(var4)();
                case 46: // try_start_0
                    var2 = var3;
                    var4 = 'object';
                    var2 = typeof var2;
                    if (!(var4 === var2)) {
                        _fun5343_ip = 72;
                        continue _fun5343
                    }
                case 60:
                    var2 = var3;
                    var2 = var2.gen;
                    if (var2) {
                        _fun5343_ip = 191;
                        continue _fun5343
                    }
                case 72:
                    var2 = var3;
                    var2 = typeof var2;
                    if (!(var4 === var2)) {
                        _fun5343_ip = 94;
                        continue _fun5343
                    }
                case 82:
                    var2 = var3;
                    var2 = var2.run;
                    if (var2) {
                        _fun5343_ip = 176;
                        continue _fun5343
                    }
                case 94:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var9 = 2;
                    var2 = var2[var9];
                    var7 = var4.bind(var1)(var2);
                    var2 = var3;
                    var4 = global;
                    var8 = var4.JSON;
                    var6 = var8.stringify;
                    var4 = null;
                    var6 = var6.bind(var8)(var2, var4, var9);
                    var4 = 'Expected Function, SimpleTask, or PromiseTask, but got:\n';
                    var6 = var4 + var6;
                    var8 = 'function';
                    var4 = typeof var2;
                    var4 = var8 === var4;
                    var4 = var7.bind(var1)(var4, var6);
                    var2 = var2.bind(var1)();
                    _fun5343_ip = 205;
                    continue _fun5343;
                case 176:
                    var4 = var3;
                    var2 = var4.run;
                    var2 = var2.bind(var4)();
                    _fun5343_ip = 205;
                    continue _fun5343;
                case 191:
                    var4 = var5._genPromise;
                    var2 = var3;
                    var2 = var4.bind(var5)(var2);
                case 205: // try_end0
                    return var1;
                case 207: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var0 = var2;
                    var3 = var3.name;
                    var1 = var3;
                    if (var3) {
                        _fun5343_ip = 227;
                        continue _fun5343
                    }
                case 223:
                    var1 = '';
                case 227:
                    var3 = var1;
                    var1 = 'TaskQueue: Error with task ';
                    var4 = var1 + var3;
                    var3 = var0.message;
                    var1 = ': ';
                    var1 = var4 + var1;
                    var1 = var1 + var3;
                    var2.message = var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '_getCurrentQueue';
        var0.key = var5;
        var5 = function() {
            _fun5344: for (var _fun5344_ip = 0;;) switch (_fun5344_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._queueStack;
                    var0 = var0.length;
                    var3 = 1;
                    var1 = var0 - var3;
                    var0 = var2._queueStack;
                    var0 = var0[var1];
                    var1 = var0.popable;
                    if (!var1) {
                        _fun5344_ip = 72;
                        continue _fun5344
                    }
                case 40:
                    var1 = var0.tasks;
                    var4 = var1.length;
                    var1 = 0;
                    if (!(var1 === var4)) {
                        _fun5344_ip = 72;
                        continue _fun5344
                    }
                case 57:
                    var1 = var2._queueStack;
                    var1 = var1.length;
                    if (!(!(var1 > var3))) {
                        _fun5344_ip = 80;
                        continue _fun5344
                    }
                case 72:
                    var0 = var0.tasks;
                    _fun5344_ip = 106;
                    continue _fun5344;
                case 80:
                    var3 = var2._queueStack;
                    var1 = var3.pop;
                    var1 = var1.bind(var3)();
                    var1 = var2._getCurrentQueue;
                    var0 = var1.bind(var2)();
                case 106:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = '_genPromise';
        var0.key = var5;
        var4 = function arg0() {
            var2 = arg0;
            var1 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var1;
            var5 = var1._queueStack;
            var4 = var5.push;
            var3 = {};
            var6 = new Array(0);
            var3.tasks = var6;
            var6 = false;
            var3.popable = var6;
            var3 = var4.bind(var5)(var3);
            var3 = var1._queueStack;
            var4 = var3.length;
            var3 = 1;
            var3 = var4 - var3;
            var1 = var1._queueStack;
            var1 = var1[var3];
            var _closure3_slot2 = var1;
            var1 = var2.gen;
            var3 = var1.bind(var2)();
            var2 = var3.then;
            var1 = function() { // Environment: var0
                _fun5346: for (var _fun5346_ip = 0;;) switch (_fun5346_ip) {
                    case 0:
                        var2 = _closure3_slot2;
                        var1 = true;
                        var2.popable = var1;
                        var2 = _closure3_slot1;
                        var1 = var2.hasTasksToProcess;
                        var1 = var1.bind(var2)();
                        if (!var1) {
                            _fun5346_ip = 46;
                            continue _fun5346
                        }
                    case 32:
                        var1 = _closure3_slot1;
                        var0 = var1._onMoreTasks;
                        var0 = var0.bind(var1)();
                    case 46:
                        var0 = undefined;
                        return var0;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.catch;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = global;
                var3 = var0.setTimeout;
                var0 = undefined;
                var2 = function() { // Environment: var1
                    var0 = _closure4_slot0;
                    var1 = _closure3_slot0;
                    var5 = var1.name;
                    var4 = var0.message;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = 'TaskQueue: Error resolving Promise in task ';
                    var1 = ': ';
                    var1 = var3.bind(var2)(var5, var1, var4);
                    var0.message = var1;
                    throw var0;
                };
                var1 = 0;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 44]);