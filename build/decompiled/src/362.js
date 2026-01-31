// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = global;
        var3 = var0.setTimeout;
        var0 = undefined;
        var2 = function() { // Environment: var1
            var0 = _closure2_slot0;
            throw var0;
        };
        var1 = 0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = {
        'interactionStart': 'interactionStart',
        'interactionComplete': 'interactionComplete'
    };
    var0.Events = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = global;
        var3 = var0.Promise;
        var0 = var3.prototype;
        var2 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = function(arg0) { // Environment: var1
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = global;
            var2 = var0.setImmediate;
            var0 = undefined;
            var1 = function() { // Environment: var1
                _fun5354: for (var _fun5354_ip = 0;;) switch (_fun5354_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = 'object';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun5354_ip = 31;
                            continue _fun5354
                        }
                    case 18:
                        var2 = _closure2_slot0;
                        var1 = null;
                        if (!(var1 === var2)) {
                            _fun5354_ip = 157;
                            continue _fun5354
                        }
                    case 31:
                        var1 = _closure2_slot0;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 !== var1)) {
                            _fun5354_ip = 110;
                            continue _fun5354
                        }
                    case 46:
                        var3 = _closure1_slot2;
                        var1 = global;
                        var4 = var1.TypeError;
                        var1 = _closure2_slot0;
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var5 = 'Invalid task of type: ';
                        var1 = typeof var1;
                        var8 = var5 + var1;
                        var9 = var2;
                        var1 = new var9[var4](var8, var7);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _fun5354_ip = 366;
                        continue _fun5354;
                    case 110: // try_start_0
                        var1 = _closure2_slot0;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var2)();
                    case 131: // try_end0
                        _fun5354_ip = 366;
                        continue _fun5354;
                    case 136: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        _fun5354_ip = 366;
                        continue _fun5354;
                    case 157:
                        var1 = _closure2_slot0;
                        var1 = var1.gen;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 !== var1)) {
                            _fun5354_ip = 327;
                            continue _fun5354
                        }
                    case 181:
                        var1 = _closure2_slot0;
                        var1 = var1.run;
                        var1 = typeof var1;
                        if (!(var2 !== var1)) {
                            _fun5354_ip = 280;
                            continue _fun5354
                        }
                    case 198:
                        var3 = _closure1_slot2;
                        var1 = global;
                        var4 = var1.TypeError;
                        var2 = _closure2_slot0;
                        var6 = var2.name;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var2 = 'Task "';
                        var1 = '" missing gen or run.';
                        var8 = var5.bind(var2)(var6, var1);
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var9 = var2;
                        var1 = new var9[var4](var8, var7);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _fun5354_ip = 366;
                        continue _fun5354;
                    case 280: // try_start_1
                        var2 = _closure2_slot0;
                        var1 = var2.run;
                        var1 = var1.bind(var2)();
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                    case 307: // try_end1
                        _fun5354_ip = 366;
                        continue _fun5354;
                    case 309: // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        _fun5354_ip = 366;
                        continue _fun5354;
                    case 327:
                        var1 = _closure2_slot0;
                        var0 = var1.gen;
                        var3 = var0.bind(var1)();
                        var2 = var3.then;
                        var1 = _closure3_slot0;
                        var0 = _closure1_slot2;
                        var0 = var2.bind(var3)(var1, var0);
                    case 366:
                        var0 = undefined;
                        return var0;
                }
            };
            var2 = var2.bind(var0)(var1);
            var _closure2_slot1 = var2;
            return var0;
        };
        var6 = var2;
        var0 = new var6[var3](var5, var4);
        var4 = var0 instanceof Object ? var0 : var2;
        var0 = {};
        var3 = var4.then;
        var2 = var3.bind;
        var2 = var2.bind(var3)(var4);
        var0.then = var2;
        var1 = function() {
            var0 = global;
            var2 = var0.clearImmediate;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.cancel = var1;
        return var0;
    };
    var0.runAfterInteractions = var3;
    var3 = function() {
        var0 = -1;
        return var0;
    };
    var0.createInteractionHandle = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var1 = arg0;
        var1 = !var1;
        var2 = !var1;
        var1 = 'InteractionManager: Must provide a handle to clear.';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var0.clearInteractionHandle = var3;
    var3 = function() {
        var0 = {};
        var1 = function() {
            var0 = undefined;
            return var0;
        };
        var0.remove = var1;
        return var0;
    };
    var0.addListener = var3;
    var2 = function arg0() {
        var0 = undefined;
        return var0;
    };
    var0.setDeadline = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44]);