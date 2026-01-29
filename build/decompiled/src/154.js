// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun2393: for (var _fun2393_ip = 0;;) switch (_fun2393_ip) {
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
            case 70: // try_end0
                _fun2393_ip = 74;
                continue _fun2393;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: getCachedEventCounts, environment: var1
        _fun2396: for (var _fun2396_ip = 0;;) switch (_fun2396_ip) {
            case 0:
                var1 = _closure1_slot11;
                if (var1) {
                    _fun2396_ip = 286;
                    continue _fun2396
                }
            case 13:
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var7 = 9;
                var1 = var1[var7];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun2396_ip = 222;
                    continue _fun2396
                }
            case 41:
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var7];
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun2396_ip = 222;
                    continue _fun2396
                }
            case 67:
                var4 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var7];
                var1 = var4.bind(var3)(var1);
                var1 = var1.getEventCounts;
                if (!var1) {
                    _fun2396_ip = 222;
                    continue _fun2396
                }
            case 96:
                var1 = global;
                var4 = var1.Map;
                var5 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var7];
                var1 = var5.bind(var3)(var1);
                var1 = var1.getEventCounts;
                var5 = var2 == var1;
                var1 = undefined;
                if (var5) {
                    _fun2396_ip = 163;
                    continue _fun2396
                }
            case 136:
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var5 = var5[var7];
                var6 = var6.bind(var3)(var5);
                var5 = var6.getEventCounts;
                var1 = var5.bind(var6)();
            case 163:
                if (!(var2 == var1)) {
                    _fun2396_ip = 171;
                    continue _fun2396
                }
            case 167:
                var1 = new Array(0);
            case 171:
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var2;
                var8 = var1;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                var _closure1_slot11 = var1;
                var5 = _closure1_slot0;
                var4 = var5.queueMicrotask;
                var2 = function() { // Environment: var2
                    var0 = null;
                    _closure1_slot11 = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                return var1;
            case 222:
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 10;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.warnNoNativePerformance;
                var1 = var1.bind(var2)();
                var1 = global;
                var1 = var1.Map;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var2;
                var1 = new var9[var1](var8);
                var1 = var1 instanceof Object ? var1 : var2;
                _closure1_slot11 = var1;
                return var1;
            case 286:
                var0 = _closure1_slot11;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = 'processingStart';
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 'processingEnd';
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 'interactionId';
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.PerformanceEntry;
    var3 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: PerformanceEventTiming, environment: var5
            _fun2399: for (var _fun2399_ip = 0;;) switch (_fun2399_ip) {
                case 0:
                    var4 = arg0;
                    var7 = this;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var6 = undefined;
                    var0 = var0.bind(var6)(var7, var1);
                    var0 = {};
                    var3 = var4.name;
                    var0.name = var3;
                    var3 = 'event';
                    var0.entryType = var3;
                    var9 = var4.startTime;
                    var5 = null;
                    var10 = var5 != var9;
                    var8 = 0;
                    if (!var10) {
                        _fun2399_ip = 68;
                        continue _fun2399
                    }
                case 65:
                    var8 = var9;
                case 68:
                    var0.startTime = var8;
                    var9 = var4.duration;
                    var10 = var5 != var9;
                    var8 = 0;
                    if (!var10) {
                        _fun2399_ip = 90;
                        continue _fun2399
                    }
                case 87:
                    var8 = var9;
                case 90:
                    var0.duration = var8;
                    var12 = new Array(1);
                    var12[0] = var0;
                    var0 = _closure1_slot7;
                    var11 = var0.bind(var6)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var6)();
                    if (var0) {
                        _fun2399_ip = 139;
                        continue _fun2399
                    }
                case 126:
                    var0 = var11.apply;
                    var0 = var0.bind(var11)(var7, var12);
                    _fun2399_ip = 173;
                    continue _fun2399;
                case 139:
                    var8 = global;
                    var10 = var8.Reflect;
                    var9 = var10.construct;
                    var8 = _closure1_slot7;
                    var8 = var8.bind(var6)(var7);
                    var8 = var8.constructor;
                    var0 = var9.bind(var10)(var11, var12, var8);
                case 173:
                    var0 = var1.bind(var6)(var7, var0);
                    var1 = global;
                    var10 = var1.Object;
                    var9 = var10.defineProperty;
                    var8 = _closure1_slot12;
                    var7 = {};
                    var11 = true;
                    var7.writable = var11;
                    var7.value = var6;
                    var7 = var9.bind(var10)(var0, var8, var7);
                    var12 = var1.Object;
                    var10 = var12.defineProperty;
                    var9 = _closure1_slot13;
                    var7 = {};
                    var7.writable = var11;
                    var7.value = var6;
                    var7 = var10.bind(var12)(var0, var9, var7);
                    var10 = var1.Object;
                    var9 = var10.defineProperty;
                    var7 = _closure1_slot14;
                    var1 = {};
                    var1.writable = var11;
                    var1.value = var6;
                    var1 = var9.bind(var10)(var0, var7, var1);
                    var1 = _closure1_slot10;
                    var7 = var1.bind(var6)(var0, var8);
                    var9 = var4.processingStart;
                    var10 = var5 != var9;
                    var1 = 0;
                    if (!var10) {
                        _fun2399_ip = 310;
                        continue _fun2399
                    }
                case 307:
                    var1 = var9;
                case 310:
                    var7[var8] = var1;
                    var1 = _closure1_slot10;
                    var8 = _closure1_slot13;
                    var7 = var1.bind(var6)(var0, var8);
                    var9 = var4.processingEnd;
                    var10 = var5 != var9;
                    var1 = 0;
                    if (!var10) {
                        _fun2399_ip = 346;
                        continue _fun2399
                    }
                case 343:
                    var1 = var9;
                case 346:
                    var7[var8] = var1;
                    var1 = _closure1_slot10;
                    var2 = _closure1_slot14;
                    var1 = var1.bind(var6)(var0, var2);
                    var4 = var4.interactionId;
                    var5 = var5 != var4;
                    var3 = 0;
                    if (!var5) {
                        _fun2399_ip = 382;
                        continue _fun2399
                    }
                case 379:
                    var3 = var4;
                case 382:
                    var1[var2] = var3;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'processingStart';
        var4.key = var0;
        var0 = function() { // Original name: get, environment: var5
            var3 = _closure1_slot10;
            var1 = _closure1_slot12;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var0 = var0[var1];
            return var0;
        };
        var4.get = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'processingEnd';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var3 = _closure1_slot10;
            var1 = _closure1_slot13;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var0 = var0[var1];
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'interactionId';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var3 = _closure1_slot10;
            var1 = _closure1_slot14;
            var2 = undefined;
            var0 = this;
            var0 = var3.bind(var2)(var0, var1);
            var0 = var0[var1];
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'toJSON';
        var4.key = var6;
        var5 = function() { // Original name: toJSON, environment: var5
            var7 = this;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.assign;
            var13 = _closure2_slot0;
            var2 = function(arg0, arg1, arg2, arg3) { // Original name: _superPropGet, environment: var0
                _fun2404: for (var _fun2404_ip = 0;;) switch (_fun2404_ip) {
                    case 0:
                        var4 = arg0;
                        var6 = arg2;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot8;
                        var3 = _closure1_slot7;
                        var0 = 1;
                        var2 = 3;
                        var7 = var0 & var2;
                        var0 = var4;
                        if (!var7) {
                            _fun2404_ip = 44;
                            continue _fun2404
                        }
                    case 39:
                        var0 = var4.prototype;
                    case 44:
                        var4 = undefined;
                        var3 = var3.bind(var4)(var0);
                        var0 = 'toJSON';
                        var4 = var5.bind(var4)(var3, var0, var6);
                        var _closure4_slot1 = var4;
                        var0 = 2;
                        var2 = var0 & var2;
                        var0 = var4;
                        if (!var2) {
                            _fun2404_ip = 98;
                            continue _fun2404
                        }
                    case 79:
                        var3 = 'function';
                        var2 = typeof var4;
                        var0 = var4;
                        if (!(var3 === var2)) {
                            _fun2404_ip = 98;
                            continue _fun2404
                        }
                    case 93:
                        var0 = function(arg0) { // Environment: var1
                            var3 = _closure4_slot1;
                            var2 = var3.apply;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                    case 98:
                        return var0;
                }
            };
            var6 = undefined;
            var12 = 'toJSON';
            var10 = 3;
            var14 = undefined;
            var11 = var7;
            var1 = var14[var2](var13, var12, var11, var10, var9);
            var0 = new Array(0);
            var2 = var1.bind(var6)(var0);
            var1 = {};
            var0 = _closure1_slot10;
            var9 = _closure1_slot12;
            var8 = var0.bind(var6)(var7, var9);
            var8 = var8[var9];
            var1.processingStart = var8;
            var9 = _closure1_slot13;
            var8 = var0.bind(var6)(var7, var9);
            var8 = var8[var9];
            var1.processingEnd = var8;
            var5 = _closure1_slot14;
            var0 = var0.bind(var6)(var7, var5);
            var0 = var0[var5];
            var1.interactionId = var0;
            var0 = {};
            var0 = var3.bind(var4)(var0, var2, var1);
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() { // Original name: EventCounts, environment: var4
            var3 = _closure1_slot4;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'size';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            var1 = _closure1_slot16;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.size;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'entries';
        var0.key = var5;
        var5 = function() { // Original name: entries, environment: var4
            var1 = _closure1_slot16;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var0 = var1.entries;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'forEach';
        var0.key = var5;
        var5 = function(arg0) { // Original name: forEach, environment: var4
            var1 = _closure1_slot16;
            var0 = undefined;
            var2 = var1.bind(var0)();
            var1 = var2.forEach;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: get, environment: var4
            var1 = _closure1_slot16;
            var0 = undefined;
            var2 = var1.bind(var0)();
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function(arg0) { // Original name: has, environment: var4
            var1 = _closure1_slot16;
            var0 = undefined;
            var2 = var1.bind(var0)();
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'keys';
        var0.key = var5;
        var5 = function() { // Original name: keys, environment: var4
            var1 = _closure1_slot16;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var0 = var1.keys;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'values';
        var0.key = var5;
        var4 = function() { // Original name: values, environment: var4
            var1 = _closure1_slot16;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var0 = var1.values;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.PerformanceEventTiming = var3;
    var2.EventCounts = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 99, 100, 155, 151, 156]);