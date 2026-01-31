// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun5321: for (var _fun5321_ip = 0;;) switch (_fun5321_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var8 = function() {
                _fun5322: for (var _fun5322_ip = 0;;) switch (_fun5322_ip) {
                    case 0:
                        var0 = _closure1_slot7;
                        if (var0) {
                            _fun5322_ip = 65;
                            continue _fun5322
                        }
                    case 10:
                        var0 = _closure1_slot9;
                        var5 = 0;
                        if (!(!(var0 > var5))) {
                            _fun5322_ip = 41;
                            continue _fun5322
                        }
                    case 20:
                        var0 = global;
                        var3 = var0.setImmediate;
                        var2 = _closure1_slot12;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        _fun5322_ip = 61;
                        continue _fun5322;
                    case 41:
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = _closure1_slot12;
                        var2 = undefined;
                        var0 = var4.bind(var2)(var3, var5);
                    case 61:
                        _closure1_slot7 = var0;
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot11 = var8;
            var0 = function() {
                _fun5323: for (var _fun5323_ip = 0;;) switch (_fun5323_ip) {
                    case 0:
                        var4 = 0;
                        _closure1_slot7 = var4;
                        var2 = _closure1_slot3;
                        var2 = var2.size;
                        var6 = _closure1_slot4;
                        var5 = var6.forEach;
                        var3 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot3;
                            var1 = var2.add;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var5.bind(var6)(var3);
                        var5 = _closure1_slot5;
                        var3 = var5.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot3;
                            var1 = var2.delete;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var3.bind(var5)(var1);
                        var1 = _closure1_slot3;
                        var1 = var1.size;
                        if (!(var4 !== var2)) {
                            _fun5323_ip = 75;
                            continue _fun5323
                        }
                    case 71:
                        if (!(var4 !== var1)) {
                            _fun5323_ip = 122;
                            continue _fun5323
                        }
                    case 75:
                        var2 = var4 === var2;
                        if (!var2) {
                            _fun5323_ip = 86;
                            continue _fun5323
                        }
                    case 82:
                        var2 = var4 !== var1;
                    case 86:
                        if (!var2) {
                            _fun5323_ip = 153;
                            continue _fun5323
                        }
                    case 89:
                        var5 = _closure1_slot2;
                        var3 = var5.emit;
                        var2 = _closure1_slot10;
                        var2 = var2.Events;
                        var2 = var2.interactionStart;
                        var2 = var3.bind(var5)(var2);
                        _fun5323_ip = 153;
                        continue _fun5323;
                    case 122:
                        var5 = _closure1_slot2;
                        var3 = var5.emit;
                        var2 = _closure1_slot10;
                        var2 = var2.Events;
                        var2 = var2.interactionComplete;
                        var2 = var3.bind(var5)(var2);
                    case 153:
                        if (!(var4 === var1)) {
                            _fun5323_ip = 268;
                            continue _fun5323
                        }
                    case 157:
                        var2 = _closure1_slot6;
                        var1 = var2.hasTasksToProcess;
                        var1 = var1.bind(var2)();
                        var3 = 3;
                        var2 = undefined;
                        if (!var1) {
                            _fun5323_ip = 268;
                            continue _fun5323
                        }
                    case 179:
                        var5 = _closure1_slot6;
                        var1 = var5.processNext;
                        var1 = var1.bind(var5)();
                        var1 = _closure1_slot9;
                        if (!(var1 > var4)) {
                            _fun5323_ip = 241;
                            continue _fun5323
                        }
                    case 201:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var3];
                        var1 = var5.bind(var2)(var1);
                        var5 = var1.default;
                        var1 = var5.getEventLoopRunningTime;
                        var5 = var1.bind(var5)();
                        var1 = _closure1_slot9;
                        if (!(!(var5 >= var1))) {
                            _fun5323_ip = 260;
                            continue _fun5323
                        }
                    case 241:
                        var5 = _closure1_slot6;
                        var1 = var5.hasTasksToProcess;
                        var1 = var1.bind(var5)();
                        if (var1) {
                            _fun5323_ip = 179;
                            continue _fun5323
                        }
                    case 258:
                        _fun5323_ip = 268;
                        continue _fun5323;
                    case 260:
                        var1 = _closure1_slot11;
                        var1 = var1.bind(var2)();
                    case 268:
                        var2 = _closure1_slot4;
                        var1 = var2.clear;
                        var1 = var1.bind(var2)();
                        var1 = _closure1_slot5;
                        var0 = var1.clear;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var7 = global;
            var9 = var7.Object;
            var4 = var9.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var9)(var2, var0, var1);
            var4 = 0;
            var9 = var6[var4];
            var1 = arg2;
            var0 = undefined;
            var1 = var1.bind(var0)(var9);
            var9 = var1.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var1
                }
            });
            var15 = var9;
            var1 = new var15[var1](var14);
            var11 = var1 instanceof Object ? var1 : var9;
            var _closure1_slot2 = var11;
            var1 = {};
            var9 = {
                'interactionStart': 'interactionStart',
                'interactionComplete': 'interactionComplete'
            };
            var1.Events = var9;
            var9 = function arg0() {
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var0 = global;
                var3 = var0.Promise;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = function(arg0) { // Environment: var1
                    _fun5327: for (var _fun5327_ip = 0;;) switch (_fun5327_ip) {
                        case 0:
                            var1 = _closure1_slot11;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var3 = _closure2_slot0;
                            if (!var3) {
                                _fun5327_ip = 41;
                                continue _fun5327
                            }
                        case 23:
                            var5 = _closure2_slot1;
                            var4 = var5.push;
                            var3 = _closure2_slot0;
                            var3 = var4.bind(var5)(var3);
                        case 41:
                            var5 = _closure2_slot1;
                            var4 = var5.push;
                            var3 = {};
                            var6 = arg0;
                            var3.run = var6;
                            var7 = _closure2_slot0;
                            if (!var7) {
                                _fun5327_ip = 76;
                                continue _fun5327
                            }
                        case 67:
                            var6 = _closure2_slot0;
                            var7 = var6.name;
                        case 76:
                            if (var7) {
                                _fun5327_ip = 83;
                                continue _fun5327
                            }
                        case 79:
                            var7 = '?';
                        case 83:
                            var6 = 'resolve ';
                            var6 = var6 + var7;
                            var3.name = var6;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure1_slot6;
                            var2 = var3.enqueueTasks;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
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
                    var2 = _closure1_slot6;
                    var1 = var2.cancelTasks;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.cancel = var1;
                return var0;
            };
            var1.runAfterInteractions = var9;
            var9 = function() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var0 = var2.bind(var0)();
                var0 = _closure1_slot8;
                var0 = var0 + 1;
                _closure1_slot8 = var0;
                var2 = _closure1_slot4;
                var1 = var2.add;
                var1 = var1.bind(var2)(var0);
                return var0;
            };
            var1.createInteractionHandle = var9;
            var9 = function arg0() {
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var2 = !var3;
                var4 = !var2;
                var2 = 'InteractionManager: Must provide a handle to clear.';
                var2 = var5.bind(var0)(var4, var2);
                var2 = _closure1_slot11;
                var2 = var2.bind(var0)();
                var4 = _closure1_slot4;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                var2 = _closure1_slot5;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                return var0;
            };
            var1.clearInteractionHandle = var9;
            var10 = var11.addListener;
            var9 = var10.bind;
            var9 = var9.bind(var10)(var11);
            var1.addListener = var9;
            var9 = function arg0() {
                var0 = arg0;
                _closure1_slot9 = var0;
                var0 = undefined;
                return var0;
            };
            var1.setDeadline = var9;
            var9 = var7.Set;
            var10 = var9.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var9
                }
            });
            var15 = var10;
            var9 = new var15[var9](var14);
            var9 = var9 instanceof Object ? var9 : var10;
            var _closure1_slot3 = var9;
            var9 = var7.Set;
            var10 = var9.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var9
                }
            });
            var15 = var10;
            var9 = new var15[var9](var14);
            var9 = var9 instanceof Object ? var9 : var10;
            var _closure1_slot4 = var9;
            var7 = var7.Set;
            var9 = var7.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var7
                }
            });
            var15 = var9;
            var7 = new var15[var7](var14);
            var7 = var7 instanceof Object ? var7 : var9;
            var _closure1_slot5 = var7;
            var7 = 2;
            var7 = var6[var7];
            var7 = var5.bind(var0)(var7);
            var9 = var7.default;
            var7 = {};
            var7.onMoreTasks = var8;
            var8 = var9.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var9
                }
            });
            var15 = var8;
            var14 = var7;
            var7 = new var15[var9](var14, var13);
            var7 = var7 instanceof Object ? var7 : var8;
            var _closure1_slot6 = var7;
            var _closure1_slot7 = var4;
            var _closure1_slot8 = var4;
            var4 = -1;
            var _closure1_slot9 = var4;
            var4 = 4;
            var7 = var6[var4];
            var4 = arg3;
            var7 = var4.bind(var0)(var7);
            var4 = var7.disableInteractionManager;
            var4 = var4.bind(var7)();
            if (!var4) {
                _fun5321_ip = 391;
                continue _fun5321
            }
        case 374:
            var4 = 5;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var1 = var4.default;
        case 391:
            var _closure1_slot10 = var1;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [98, 44, 361, 63, 79, 362]);