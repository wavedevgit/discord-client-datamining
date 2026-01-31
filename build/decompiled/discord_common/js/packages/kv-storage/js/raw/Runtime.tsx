// ../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun18539: for (var _fun18539_ip = 0;;) switch (_fun18539_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun18539_ip = 46;
                    continue _fun18539
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun18539_ip = 55;
                    continue _fun18539
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun18539_ip = 343;
                    continue _fun18539
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun18539_ip = 323;
                    continue _fun18539
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun18539_ip = 283;
                    continue _fun18539
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun18539_ip = 270;
                    continue _fun18539
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun18539_ip = 163;
                    continue _fun18539
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun18539_ip = 179;
                    continue _fun18539
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun18539_ip = 249;
                    continue _fun18539
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun18539_ip = 249;
                    continue _fun18539
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun18539_ip = 234;
                    continue _fun18539
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun18539_ip = 247;
                    continue _fun18539
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun18539_ip = 265;
                continue _fun18539;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun18539_ip = 283;
                continue _fun18539;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun18539_ip = 323;
                    continue _fun18539
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun18539_ip = 330;
                    continue _fun18539
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun18540: for (var _fun18540_ip = 0;;) switch (_fun18540_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun18540_ip = 56;
                                continue _fun18540
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun18540_ip = 67;
                            continue _fun18540;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun18541: for (var _fun18541_ip = 0;;) switch (_fun18541_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun18541_ip = 23;
                    continue _fun18541
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun18541_ip = 33;
                    continue _fun18541
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun18541_ip = 70;
                    continue _fun18541
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun18541_ip = 55;
                    continue _fun18541
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = global;
    var9 = var3.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var6);
    var6 = 0;
    var7 = var5[var6];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = var3.process;
    var7 = var7.env;
    var8 = var7.KV_STORAGE_LOGGING;
    var7 = '1';
    var7 = var7 === var8;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.Logger;
    var7 = var9.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var12 = 'Runtime';
    var13 = var8;
    var7 = new var13[var9](var12, var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot5 = var7;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot3;
        var3 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'nextId';
        var0.key = var2;
        var2 = function() {
            var1 = this;
            var0 = var1.counter;
            var0 = var0 + 1;
            var1.counter = var0;
            return var0;
        };
        var0.value = var2;
        var2 = new Array(11);
        var2[0] = var0;
        var0 = {};
        var5 = 'executeAsync';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = this;
            var _closure3_slot0 = var2;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = arg1;
            var _closure3_slot2 = var1;
            var1 = var2.initialize;
            var1 = var1.bind(var2)();
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1.nextId;
                var4 = var0.bind(var1)();
                var2 = _closure3_slot2;
                var0 = undefined;
                var2 = var2.bind(var0)(var4);
                var3 = var1.pending;
                var2 = var3.set;
                var1 = {};
                var1.id = var4;
                var5 = _closure3_slot1;
                var1.tag = var5;
                var5 = global;
                var6 = var5.performance;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var1.started = var5;
                var5 = arg0;
                var1.resolve = var5;
                var5 = arg1;
                var1.reject = var5;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'addCompletionCallback';
        var0.key = var5;
        var5 = function arg0() {
            var0 = arg0;
            var1 = this;
            var2 = var1.completionCallbacks;
            var1 = var2.push;
            var1 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'addDatabaseStateCallback';
        var0.key = var5;
        var5 = function arg0() {
            var0 = arg0;
            var1 = this;
            var2 = var1.dbStateCallbacks;
            var1 = var2.push;
            var1 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'removeCompletionCallback';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var2 = arg0;
            var _closure3_slot0 = var2;
            var3 = var1.completionCallbacks;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var0 !== var1;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1.completionCallbacks = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'removeDatabaseStateCallback';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var2 = arg0;
            var _closure3_slot0 = var2;
            var3 = var1.dbStateCallbacks;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var0 !== var1;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1.dbStateCallbacks = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[5] = var0;
        var0 = {};
        var5 = 'onResponse';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun18553: for (var _fun18553_ip = 0;;) switch (_fun18553_ip) {
                case 0:
                    var3 = arg0;
                    var6 = arg1;
                    var2 = this;
                    var0 = global;
                    var1 = var0.performance;
                    var0 = var1.now;
                    var4 = var0.bind(var1)();
                    var5 = var2.pending;
                    var1 = var5.get;
                    var0 = var3.id;
                    var1 = var1.bind(var5)(var0);
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun18553_ip = 127;
                        continue _fun18553
                    }
                case 53:
                    var8 = var2.pending;
                    var7 = var8.delete;
                    var5 = var3.id;
                    var5 = var7.bind(var8)(var5);
                    var5 = var3.timings;
                    var7 = var0 != var6;
                    var0 = 0;
                    if (!var7) {
                        _fun18553_ip = 92;
                        continue _fun18553
                    }
                case 89:
                    var0 = var6;
                case 92:
                    var5.materializationTimeNanoseconds = var0;
                    var0 = var2.completeOperation;
                    var0 = var0.bind(var2)(var1, var3, var4);
                    var0 = var2.resolveOperation;
                    var0 = var0.bind(var2)(var1, var3);
                case 127:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[6] = var0;
        var0 = {};
        var5 = 'onStatus';
        var0.key = var5;
        var5 = function arg0() {
            _fun18554: for (var _fun18554_ip = 0;;) switch (_fun18554_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure1_slot6;
                    var0 = this;
                    var1 = var0.dbStateCallbacks;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun18554_ip = 75;
                        continue _fun18554
                    }
                case 38:
                    var6 = var2.value;
                    var5 = var4.handle;
                    var1 = var4.state;
                    var1 = var6.bind(var0)(var5, var1);
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun18554_ip = 38;
                        continue _fun18554
                    }
                case 75:
                    return var0;
            }
        };
        var0.value = var5;
        var2[7] = var0;
        var0 = {};
        var5 = 'resolveOperation';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun18555: for (var _fun18555_ip = 0;;) switch (_fun18555_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var1 = var0.ok;
                    if (var1) {
                        _fun18555_ip = 84;
                        continue _fun18555
                    }
                case 15:
                    var3 = var2.reject;
                    var1 = var0.data;
                    var4 = 'string';
                    var1 = typeof var1;
                    if (!(var4 !== var1)) {
                        _fun18555_ip = 44;
                        continue _fun18555
                    }
                case 37:
                    var1 = var0.data;
                    _fun18555_ip = 77;
                    continue _fun18555;
                case 44:
                    var4 = global;
                    var6 = var4.Error;
                    var7 = var0.data;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var8 = var5;
                    var4 = new var8[var6](var7, var6);
                    var1 = var4 instanceof Object ? var4 : var5;
                case 77:
                    var1 = var3.bind(var2)(var1);
                    _fun18555_ip = 100;
                    continue _fun18555;
                case 84:
                    var1 = var2.resolve;
                    var0 = var0.data;
                    var0 = var1.bind(var2)(var0);
                case 100:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[8] = var0;
        var0 = {};
        var5 = 'completeOperation';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun18556: for (var _fun18556_ip = 0;;) switch (_fun18556_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var1 = var0.completionCallbacks;
                    var4 = var1.length;
                    var1 = 0;
                    if (!(var4 > var1)) {
                        _fun18556_ip = 247;
                        continue _fun18556
                    }
                case 29:
                    var4 = {};
                    var1 = var2.id;
                    var4.id = var1;
                    var1 = var2.tag;
                    var4.tag = var1;
                    var1 = var3.ok;
                    var4.ok = var1;
                    var1 = var3.data;
                    var4.value = var1;
                    var1 = {};
                    var5 = var3.timings;
                    var6 = var5.queueTimeNanoseconds;
                    var5 = 1000000;
                    var6 = var6 / var5;
                    var1.queue = var6;
                    var6 = var3.timings;
                    var6 = var6.executionTimeNanoseconds;
                    var6 = var6 / var5;
                    var1.execution = var6;
                    var6 = var3.timings;
                    var6 = var6.materializationTimeNanoseconds;
                    var6 = var6 / var5;
                    var1.materialization = var6;
                    var3 = var3.timings;
                    var3 = var3.totalTimeNanoseconds;
                    var3 = var3 / var5;
                    var1.ccTotal = var3;
                    var3 = var2.started;
                    var2 = arg2;
                    var2 = var2 - var3;
                    var1.jsTotal = var2;
                    var4.timings = var1;
                    var1 = _closure1_slot6;
                    var0 = var0.completionCallbacks;
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.bind(var3)();
                    var0 = var1.done;
                    if (var0) {
                        _fun18556_ip = 247;
                        continue _fun18556
                    }
                case 222:
                    var0 = var1.value;
                    var0 = var0.bind(var3)(var4);
                    var5 = var2.bind(var3)();
                    var0 = var5.done;
                    var1 = var5;
                    if (!var0) {
                        _fun18556_ip = 222;
                        continue _fun18556
                    }
                case 247:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[9] = var0;
        var0 = {};
        var5 = 'initialize';
        var0.key = var5;
        var1 = function() {
            _fun18557: for (var _fun18557_ip = 0;;) switch (_fun18557_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.initialized;
                    if (var2) {
                        _fun18557_ip = 132;
                        continue _fun18557
                    }
                case 18:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.KV_RAW;
                    var4 = var5.setCallbacks;
                    var3 = {};
                    var6 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.onStatus;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.status = var6;
                    var6 = function arg0, arg1() {
                        var3 = _closure3_slot0;
                        var2 = var3.onResponse;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var3.response = var6;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure1_slot4;
                    if (!var2) {
                        _fun18557_ip = 124;
                        continue _fun18557
                    }
                case 90:
                    var3 = var1.addCompletionCallback;
                    var2 = function(arg0) { // Environment: var0
                        _fun18560: for (var _fun18560_ip = 0;;) switch (_fun18560_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3.ok;
                                var13 = 'failed';
                                if (!var0) {
                                    _fun18560_ip = 22;
                                    continue _fun18560
                                }
                            case 18:
                                var13 = 'completed';
                            case 22:
                                var0 = var3.timings;
                                var1 = var0.execution;
                                var0 = var1.toFixed;
                                var5 = 3;
                                var4 = var0.bind(var1)(var5);
                                var0 = global;
                                var1 = var0.HermesInternal;
                                var2 = var1.concat;
                                var12 = '';
                                var1 = 'ms execution';
                                var1 = var2.bind(var12)(var4, var1);
                                var4 = new Array(4);
                                var4[0] = var1;
                                var1 = var3.timings;
                                var2 = var1.materialization;
                                var1 = var2.toFixed;
                                var6 = var1.bind(var2)(var5);
                                var1 = var0.HermesInternal;
                                var2 = var1.concat;
                                var1 = 'ms js materialization';
                                var1 = var2.bind(var12)(var6, var1);
                                var4[1] = var1;
                                var1 = var3.timings;
                                var2 = var1.ccTotal;
                                var1 = var2.toFixed;
                                var6 = var1.bind(var2)(var5);
                                var1 = var0.HermesInternal;
                                var2 = var1.concat;
                                var1 = 'ms cc completion';
                                var1 = var2.bind(var12)(var6, var1);
                                var4[2] = var1;
                                var1 = var3.timings;
                                var2 = var1.jsTotal;
                                var1 = var2.toFixed;
                                var6 = var1.bind(var2)(var5);
                                var1 = var0.HermesInternal;
                                var2 = var1.concat;
                                var1 = 'ms js reception';
                                var1 = var2.bind(var12)(var6, var1);
                                var4[3] = var1;
                                var2 = var4.join;
                                var1 = ', ';
                                var15 = var2.bind(var4)(var1);
                                var2 = _closure1_slot5;
                                var1 = var2.info;
                                var10 = var3.tag;
                                var21 = var3.id;
                                var3 = var3.timings;
                                var4 = var3.ccTotal;
                                var3 = var4.toFixed;
                                var17 = var3.bind(var4)(var5);
                                var0 = var0.HermesInternal;
                                var7 = var0.concat;
                                var22 = ' (#';
                                var20 = ') ';
                                var18 = ' in ';
                                var16 = 'ms (';
                                var14 = ').';
                                var24 = var12;
                                var23 = var10;
                                var19 = var13;
                                var0 = var24[var7](var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    var2 = var1.addDatabaseStateCallback;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var2 = _closure1_slot5;
                        var1 = var2.info;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var7 = var0.concat;
                        var12 = '';
                        var11 = arg0;
                        var10 = ' (state: ';
                        var9 = arg1;
                        var8 = ')';
                        var0 = var12[var7](var11, var10, var9, var8, var7);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                case 124:
                    var0 = true;
                    var1.initialized = var0;
                case 132:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2[10] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var1.counter = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var1.pending = var3;
    var3 = false;
    var1.initialized = var3;
    var3 = new Array(0);
    var1.dbStateCallbacks = var3;
    var3 = new Array(0);
    var1.completionCallbacks = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Runtime = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4, 1639, 2]);