// ../discord_common/js/packages/flux/Emitter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Logger;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'Flux';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot4 = var3;
    var3 = function arg0() {
        var1 = arg0;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var3 = var1.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.changedStores = var3;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.reactChangedStores = var1;
            var1 = 0;
            var2.changeSentinel = var1;
            var1 = false;
            var2.isBatchEmitting = var1;
            var2.isDispatching = var1;
            var2.isPaused = var1;
            var1 = null;
            var2.pauseTimer = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'destroy';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var2 = var0.changedStores;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var0.reactChangedStores;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = function arg0() {
                var1 = arg0;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
            };
            _closure1_slot5 = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(11);
        var1[0] = var0;
        var0 = {};
        var5 = 'injectBatchEmitChanges';
        var0.key = var5;
        var5 = function arg0() {
            var0 = arg0;
            _closure1_slot5 = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'pause';
        var0.key = var5;
        var5 = function() {
            _fun6901: for (var _fun6901_ip = 0;;) switch (_fun6901_ip) {
                case 0:
                    var4 = arguments[0];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun6901_ip = 20;
                        continue _fun6901
                    }
                case 18:
                    var4 = null;
                case 20:
                    var3 = true;
                    var2.isPaused = var3;
                    var5 = var2.pauseTimer;
                    var3 = null;
                    if (!(var3 !== var5)) {
                        _fun6901_ip = 59;
                        continue _fun6901
                    }
                case 40:
                    var5 = global;
                    var6 = var5.clearTimeout;
                    var5 = var2.pauseTimer;
                    var5 = var6.bind(var0)(var5);
                case 59:
                    if (!(var3 !== var4)) {
                        _fun6901_ip = 88;
                        continue _fun6901
                    }
                case 63:
                    var3 = global;
                    var3 = var3.setTimeout;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = null;
                        var1.pauseTimer = var0;
                        var0 = var1.resume;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var0)(var1, var4);
                    var2.pauseTimer = var1;
                case 88:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'resume';
        var0.key = var5;
        var5 = function() {
            _fun6903: for (var _fun6903_ip = 0;;) switch (_fun6903_ip) {
                case 0:
                    var3 = arguments[0];
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun6903_ip = 20;
                        continue _fun6903
                    }
                case 18:
                    var3 = true;
                case 20:
                    var2 = global;
                    var6 = var2.clearTimeout;
                    var5 = var4.pauseTimer;
                    var5 = var6.bind(var0)(var5);
                    var5 = null;
                    var4.pauseTimer = var5;
                    var5 = var4.isPaused;
                    if (!var5) {
                        _fun6903_ip = 103;
                        continue _fun6903
                    }
                case 56:
                    var5 = false;
                    var4.isPaused = var5;
                    if (!var3) {
                        _fun6903_ip = 84;
                        continue _fun6903
                    }
                case 67:
                    var4 = var4.changedStores;
                    var5 = var4.size;
                    var4 = 0;
                    var3 = var5 > var4;
                case 84:
                    if (!var3) {
                        _fun6903_ip = 103;
                        continue _fun6903
                    }
                case 87:
                    var2 = var2.setImmediate;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.emit;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                case 103:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'batched';
        var0.key = var5;
        var5 = function arg0() {
            _fun6905: for (var _fun6905_ip = 0;;) switch (_fun6905_ip) {
                case 0:
                    var3 = this;
                    var0 = arg0;
                    var1 = var3.isPaused;
                    if (var1) {
                        _fun6905_ip = 84;
                        continue _fun6905
                    }
                case 15: // try_start_0
                    var1 = true;
                    var3.isPaused = var1;
                    var2 = var0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 32: // try_end0
                    var4 = var3.resume;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var2 = var3.emit;
                    var2 = var2.bind(var3)();
                    return var1;
                case 57: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var4 = var3.resume;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var2 = var3.emit;
                    var2 = var2.bind(var3)();
                    throw var1;
                case 84:
                    var1 = var0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'emit';
        var0.key = var5;
        var5 = function() {
            _fun6906: for (var _fun6906_ip = 0;;) switch (_fun6906_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = var2.isBatchEmitting;
                    if (var1) {
                        _fun6906_ip = 24;
                        continue _fun6906
                    }
                case 18:
                    var1 = var2.isPaused;
                case 24:
                    if (var1) {
                        _fun6906_ip = 46;
                        continue _fun6906
                    }
                case 27:
                    var2 = _closure1_slot5;
                    var1 = undefined;
                    var0 = function() { // Environment: var0
                        _fun6907: for (var _fun6907_ip = 0;;) switch (_fun6907_ip) {
                            case 0:
                                var2 = undefined;
                                var6 = undefined;
                                var7 = undefined;
                                var8 = undefined;
                            case 8: // try_start_0
                                var3 = _closure3_slot0;
                                var0 = true;
                                var3.isBatchEmitting = var0;
                                var0 = var3.changeSentinel;
                                var0 = var0 + 1;
                                var3.changeSentinel = var0;
                                var5 = 0;
                                var6 = 0;
                                var0 = global;
                                var4 = var0.Set;
                                var9 = var4.prototype;
                                var9 = Object.create(var9, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var14 = var9;
                                var4 = new var14[var4](var13);
                                var7 = var4 instanceof Object ? var4 : var9;
                                var4 = var0.Set;
                                var9 = var4.prototype;
                                var9 = Object.create(var9, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var14 = var9;
                                var4 = new var14[var4](var13);
                                var8 = var4 instanceof Object ? var4 : var9;
                                var3 = var3.changedStores;
                                var3 = var3.size;
                                var4 = 100;
                                if (!(var3 > var5)) {
                                    _fun6907_ip = 167;
                                    continue _fun6907
                                }
                            case 114:
                                var3 = var6;
                                var3 = var3 + 1;
                                var6 = var3;
                                if (!(!(var3 > var4))) {
                                    _fun6907_ip = 315;
                                    continue _fun6907
                                }
                            case 130:
                                var3 = _closure3_slot0;
                                var11 = var3.emitNonReactOnce;
                                var10 = var7;
                                var9 = var8;
                                var9 = var11.bind(var3)(var10, var9);
                                var3 = var3.changedStores;
                                var3 = var3.size;
                                if (var3 > var5) {
                                    _fun6907_ip = 114;
                                    continue _fun6907
                                }
                            case 167:
                                var3 = _closure3_slot0;
                                var3 = var3.reactChangedStores;
                                var3 = var3.size;
                                if (!(var3 > var5)) {
                                    _fun6907_ip = 228;
                                    continue _fun6907
                                }
                            case 186:
                                var3 = var6;
                                var3 = var3 + 1;
                                var6 = var3;
                                if (!(!(var3 > var4))) {
                                    _fun6907_ip = 242;
                                    continue _fun6907
                                }
                            case 199:
                                var3 = _closure3_slot0;
                                var7 = var3.emitReactOnce;
                                var7 = var7.bind(var3)();
                                var3 = var3.reactChangedStores;
                                var3 = var3.size;
                                if (var3 > var5) {
                                    _fun6907_ip = 186;
                                    continue _fun6907
                                }
                            case 228: // try_end0
                                var3 = _closure3_slot0;
                                var1 = false;
                                var3.isBatchEmitting = var1;
                                return var2;
                            case 242: // try_start_1
                                var5 = _closure1_slot4;
                                var4 = var5.error;
                                var3 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var1 = 3;
                                var1 = var6[var1];
                                var3 = var3.bind(var2)(var1);
                                var1 = var3.serialize;
                                var3 = var1.bind(var3)();
                                var1 = 'LastFewActions';
                                var1 = var4.bind(var5)(var1, var3);
                                var3 = var0.Error;
                                var1 = 'react change emit loop detected, aborting';
                                var1 = var3.bind(var2)(var1);
                                throw var1;
                            case 315:
                                var5 = _closure1_slot4;
                                var4 = var5.error;
                                var3 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var1 = 3;
                                var1 = var6[var1];
                                var3 = var3.bind(var2)(var1);
                                var1 = var3.serialize;
                                var3 = var1.bind(var3)();
                                var1 = 'LastFewActions';
                                var1 = var4.bind(var5)(var1, var3);
                                var1 = var0.Error;
                                var0 = 'change emit loop detected, aborting';
                                var0 = var1.bind(var2)(var0);
                                throw var0;
                            case 388: // try_end1 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register = 0);
                                var2 = _closure3_slot0;
                                var1 = false;
                                var2.isBatchEmitting = var1;
                                throw var0;
                        }
                    };
                    var0 = var2.bind(var1)(var0);
                case 46:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getChangeSentinel';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.changeSentinel;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getIsPaused';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.isPaused;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'markChanged';
        var0.key = var5;
        var5 = function arg0() {
            _fun6910: for (var _fun6910_ip = 0;;) switch (_fun6910_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var3._changeCallbacks;
                    var0 = var2.hasAny;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun6910_ip = 42;
                        continue _fun6910
                    }
                case 25:
                    var2 = var3._syncWiths;
                    var4 = var2.length;
                    var2 = 0;
                    var0 = var4 > var2;
                case 42:
                    if (!var0) {
                        _fun6910_ip = 61;
                        continue _fun6910
                    }
                case 45:
                    var2 = var1.changedStores;
                    var0 = var2.add;
                    var0 = var0.bind(var2)(var3);
                case 61:
                    var2 = var3._reactChangeCallbacks;
                    var0 = var2.hasAny;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun6910_ip = 96;
                        continue _fun6910
                    }
                case 80:
                    var2 = var1.reactChangedStores;
                    var0 = var2.add;
                    var0 = var0.bind(var2)(var3);
                case 96:
                    var0 = var1.isBatchEmitting;
                    if (var0) {
                        _fun6910_ip = 111;
                        continue _fun6910
                    }
                case 105:
                    var0 = var1.isDispatching;
                case 111:
                    if (var0) {
                        _fun6910_ip = 120;
                        continue _fun6910
                    }
                case 114:
                    var0 = var1.isPaused;
                case 120:
                    if (var0) {
                        _fun6910_ip = 133;
                        continue _fun6910
                    }
                case 123:
                    var0 = var1.emit;
                    var0 = var0.bind(var1)();
                case 133:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'emitNonReactOnce';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun6911: for (var _fun6911_ip = 0;;) switch (_fun6911_ip) {
                case 0:
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var1 = arg0;
                    var _closure3_slot1 = var1;
                    var1 = arg1;
                    var _closure3_slot2 = var1;
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.now;
                    var5 = var2.bind(var3)();
                    var3 = var4.changedStores;
                    var2 = var1.Set;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var6;
                    var2 = new var9[var2](var8);
                    var2 = var2 instanceof Object ? var2 : var6;
                    var4.changedStores = var2;
                    var4 = var3.forEach;
                    var2 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var3 = _closure3_slot2;
                        var1 = var3.add;
                        var1 = var1.bind(var3)(var2);
                        var3 = var2._changeCallbacks;
                        var1 = var3.invokeAll;
                        var1 = var1.bind(var3)();
                        var0 = _closure3_slot0;
                        var1 = var0.changedStores;
                        var0 = var1.delete;
                        var0 = var0.bind(var1)(var2);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var4.bind(var3)(var2);
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var2 = var0._syncWiths;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun6914: for (var _fun6914_ip = 0;;) switch (_fun6914_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.func;
                                    var2 = var0.store;
                                    var4 = _closure3_slot1;
                                    var1 = var4.has;
                                    var1 = var1.bind(var4)(var3);
                                    if (var1) {
                                        _fun6914_ip = 107;
                                        continue _fun6914
                                    }
                                case 35:
                                    var4 = _closure3_slot1;
                                    var1 = var4.add;
                                    var1 = var1.bind(var4)(var3);
                                    var1 = undefined;
                                    var3 = var3.bind(var1)();
                                    var1 = false;
                                    if (!(var1 !== var3)) {
                                        _fun6914_ip = 107;
                                        continue _fun6914
                                    }
                                case 61:
                                    var3 = _closure3_slot2;
                                    var1 = var3.has;
                                    var1 = var1.bind(var3)(var2);
                                    if (var1) {
                                        _fun6914_ip = 107;
                                        continue _fun6914
                                    }
                                case 78:
                                    var3 = _closure3_slot2;
                                    var1 = var3.add;
                                    var1 = var1.bind(var3)(var2);
                                    var1 = _closure3_slot0;
                                    var0 = var1.markChanged;
                                    var0 = var0.bind(var1)(var2);
                                case 107:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var2 = var1.Date;
                    var0 = var2.now;
                    var4 = var0.bind(var2)();
                    var2 = var4 - var5;
                    var0 = 100;
                    if (!(var2 > var0)) {
                        _fun6911_ip = 218;
                        continue _fun6911
                    }
                case 134:
                    var3 = _closure1_slot4;
                    var2 = var3.verbose;
                    var6 = var4 - var5;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = 'Slow batch emitChanges took ';
                    var1 = 'ms recentActions:';
                    var1 = var5.bind(var4)(var6, var1);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 3;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var0 = var4.serialize;
                    var0 = var0.bind(var4)();
                    var0 = var2.bind(var3)(var1, var0);
                case 218:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'emitReactOnce';
        var0.key = var5;
        var4 = function() {
            _fun6915: for (var _fun6915_ip = 0;;) switch (_fun6915_ip) {
                case 0:
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.now;
                    var5 = var2.bind(var3)();
                    var3 = var4.reactChangedStores;
                    var2 = var1.Set;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var6;
                    var2 = new var9[var2](var8);
                    var2 = var2 instanceof Object ? var2 : var6;
                    var4.reactChangedStores = var2;
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = var2._reactChangeCallbacks;
                        var0 = var1.invokeAll;
                        var0 = var0.bind(var1)();
                        var0 = _closure3_slot0;
                        var1 = var0.reactChangedStores;
                        var0 = var1.delete;
                        var0 = var0.bind(var1)(var2);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var2 = var1.Date;
                    var0 = var2.now;
                    var4 = var0.bind(var2)();
                    var2 = var4 - var5;
                    var0 = 100;
                    if (!(var2 > var0)) {
                        _fun6915_ip = 189;
                        continue _fun6915
                    }
                case 105:
                    var3 = _closure1_slot4;
                    var2 = var3.verbose;
                    var6 = var4 - var5;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = 'Slow batch emitReactChanges took ';
                    var1 = 'ms recentActions:';
                    var1 = var5.bind(var4)(var6, var1);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 3;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var0 = var4.serialize;
                    var0 = var0.bind(var4)();
                    var0 = var2.bind(var3)(var1, var0);
                case 189:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[10] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/flux/Emitter.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4, 571, 2]);