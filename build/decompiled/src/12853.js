// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var6 = 0;
    var4 = var3[var6];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var3 = var3[var4];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var3 = true;
    var5.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var5);
    var5 = {};
    var _closure1_slot2 = var5;
    var5.PENDING = var6;
    var3 = 'PENDING';
    var5[var6] = var3;
    var5.RESOLVED = var4;
    var3 = 'RESOLVED';
    var5[var4] = var3;
    var4 = 2;
    var5.REJECTED = var4;
    var3 = 'REJECTED';
    var5[var4] = var3;
    var3 = function() { // Environment: var1
        var3 = function(arg0) { // Original name: SyncPromise, environment: var4
            _fun98906: for (var _fun98906_ip = 0;;) switch (_fun98906_ip) {
                case 0:
                    var3 = this;
                    var1 = arg0;
                    var5 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var5.bind(var0)(var3, var4);
                    var5 = var4.prototype;
                    var6 = var5.__init;
                    var5 = var6.call;
                    var5 = var5.bind(var6)(var3);
                    var5 = var4.prototype;
                    var6 = var5.__init2;
                    var5 = var6.call;
                    var5 = var5.bind(var6)(var3);
                    var5 = var4.prototype;
                    var6 = var5.__init3;
                    var5 = var6.call;
                    var5 = var5.bind(var6)(var3);
                    var4 = var4.prototype;
                    var5 = var4.__init4;
                    var4 = var5.call;
                    var4 = var4.bind(var5)(var3);
                    var2 = _closure1_slot2;
                    var2 = var2.PENDING;
                    var3._state = var2;
                    var2 = new Array(0);
                    var3._handlers = var2;
                case 138: // try_start_0
                    var4 = var1;
                    var2 = var3._resolve;
                    var1 = var3._reject;
                    var1 = var4.bind(var0)(var2, var1);
                case 159: // try_end0
                    _fun98906_ip = 174;
                    continue _fun98906;
                case 161: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var1 = var3._reject;
                    var1 = var1.bind(var3)(var2);
                case 174:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot4;
        var0 = {};
        var1 = 'then';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: then, environment: var4
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = this;
            var _closure3_slot2 = var1;
            var2 = _closure2_slot0;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = arg1;
                var _closure4_slot1 = var0;
                var1 = _closure3_slot2;
                var3 = var1._handlers;
                var2 = var3.push;
                var0 = new Array(3);
                var5 = false;
                var0[0] = var5;
                var5 = function(arg0) { // Environment: var4
                    _fun98909: for (var _fun98909_ip = 0;;) switch (_fun98909_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure3_slot0;
                            if (var2) {
                                _fun98909_ip = 32;
                                continue _fun98909
                            }
                        case 13:
                            var4 = _closure4_slot0;
                            var3 = var0;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun98909_ip = 73;
                            continue _fun98909;
                        case 32: // try_start_0
                            var2 = _closure4_slot0;
                            var3 = _closure3_slot0;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var2.bind(var1)(var0);
                        case 55: // try_end0
                            _fun98909_ip = 73;
                            continue _fun98909;
                        case 57: // catch_target0
                            CatchBlockStart(arg_register = 2);
                            var1 = _closure4_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 73:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0[1] = var5;
                var4 = function(arg0) { // Environment: var4
                    _fun98910: for (var _fun98910_ip = 0;;) switch (_fun98910_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure3_slot1;
                            if (var2) {
                                _fun98910_ip = 32;
                                continue _fun98910
                            }
                        case 13:
                            var4 = _closure4_slot1;
                            var3 = var0;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun98910_ip = 73;
                            continue _fun98910;
                        case 32: // try_start_0
                            var2 = _closure4_slot0;
                            var3 = _closure3_slot1;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var2.bind(var1)(var0);
                        case 55: // try_end0
                            _fun98910_ip = 73;
                            continue _fun98910;
                        case 57: // catch_target0
                            CatchBlockStart(arg_register = 2);
                            var1 = _closure4_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 73:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0[2] = var4;
                var0 = var2.bind(var3)(var0);
                var0 = var1._executeHandlers;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'catch';
        var0.key = var5;
        var5 = function(arg0) { // Original name: _catch, environment: var4
            var3 = this;
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                return var0;
            };
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'finally';
        var0.key = var5;
        var5 = function(arg0) { // Original name: _finally, environment: var4
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var _closure3_slot1 = var1;
            var2 = _closure2_slot0;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                var1 = arg0;
                var _closure4_slot0 = var1;
                var1 = arg1;
                var _closure4_slot1 = var1;
                var4 = _closure3_slot1;
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var0
                    _fun98915: for (var _fun98915_ip = 0;;) switch (_fun98915_ip) {
                        case 0:
                            var0 = false;
                            var _closure4_slot3 = var0;
                            var0 = arg0;
                            var _closure4_slot2 = var0;
                            var1 = _closure3_slot0;
                            if (!var1) {
                                _fun98915_ip = 36;
                                continue _fun98915
                            }
                        case 26:
                            var1 = _closure3_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = function(arg0) { // Environment: var0
                    _fun98916: for (var _fun98916_ip = 0;;) switch (_fun98916_ip) {
                        case 0:
                            var0 = true;
                            _closure4_slot3 = var0;
                            var0 = arg0;
                            _closure4_slot2 = var0;
                            var1 = _closure3_slot0;
                            if (!var1) {
                                _fun98916_ip = 36;
                                continue _fun98916
                            }
                        case 26:
                            var1 = _closure3_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    _fun98917: for (var _fun98917_ip = 0;;) switch (_fun98917_ip) {
                        case 0:
                            var1 = _closure4_slot3;
                            if (var1) {
                                _fun98917_ip = 27;
                                continue _fun98917
                            }
                        case 10:
                            var3 = _closure4_slot0;
                            var2 = _closure4_slot2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun98917_ip = 42;
                            continue _fun98917;
                        case 27:
                            var2 = _closure4_slot1;
                            var1 = _closure4_slot2;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 42:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '__init';
        var0.key = var5;
        var5 = function() { // Original name: __init, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure3_slot0;
                var2 = var3._setResult;
                var0 = _closure1_slot2;
                var1 = var0.RESOLVED;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var1._resolve = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '__init2';
        var0.key = var5;
        var5 = function() { // Original name: __init2, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure3_slot0;
                var2 = var3._setResult;
                var0 = _closure1_slot2;
                var1 = var0.REJECTED;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var1._reject = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '__init3';
        var0.key = var5;
        var5 = function() { // Original name: __init3, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun98923: for (var _fun98923_ip = 0;;) switch (_fun98923_ip) {
                    case 0:
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var4 = var1._state;
                        var2 = _closure1_slot2;
                        var2 = var2.PENDING;
                        if (!(var4 === var2)) {
                            _fun98923_ip = 127;
                            continue _fun98923
                        }
                    case 33:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.isThenable;
                        var1 = var1.bind(var2)(var3);
                        if (var1) {
                            _fun98923_ip = 100;
                            continue _fun98923
                        }
                    case 69:
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var2._state = var1;
                        var2._value = var3;
                        var1 = var2._executeHandlers;
                        var1 = var1.bind(var2)();
                        _fun98923_ip = 127;
                        continue _fun98923;
                    case 100:
                        var2 = var3.then;
                        var0 = _closure3_slot0;
                        var1 = var0._resolve;
                        var0 = var0._reject;
                        var0 = var2.bind(var3)(var1, var0);
                    case 127:
                        var0 = undefined;
                        return var0;
                }
            };
            var1._setResult = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = '__init4';
        var0.key = var5;
        var4 = function() { // Original name: __init4, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                _fun98925: for (var _fun98925_ip = 0;;) switch (_fun98925_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var2 = var1._state;
                        var1 = _closure1_slot2;
                        var1 = var1.PENDING;
                        if (!(var2 !== var1)) {
                            _fun98925_ip = 78;
                            continue _fun98925
                        }
                    case 30:
                        var1 = _closure3_slot0;
                        var2 = var1._handlers;
                        var0 = var2.slice;
                        var2 = var0.bind(var2)();
                        var0 = new Array(0);
                        var1._handlers = var0;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun98926: for (var _fun98926_ip = 0;;) switch (_fun98926_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = 0;
                                    var0 = var2[var1];
                                    if (var0) {
                                        _fun98926_ip = 116;
                                        continue _fun98926
                                    }
                                case 12:
                                    var3 = _closure3_slot0;
                                    var5 = var3._state;
                                    var4 = _closure1_slot2;
                                    var4 = var4.RESOLVED;
                                    if (!(var5 === var4)) {
                                        _fun98926_ip = 64;
                                        continue _fun98926
                                    }
                                case 42:
                                    var4 = 1;
                                    var5 = var2[var4];
                                    var4 = _closure3_slot0;
                                    var4 = var4._value;
                                    var4 = var5.bind(var2)(var4);
                                case 64:
                                    var4 = _closure3_slot0;
                                    var4 = var4._state;
                                    var3 = _closure1_slot2;
                                    var3 = var3.REJECTED;
                                    if (!(var4 === var3)) {
                                        _fun98926_ip = 110;
                                        continue _fun98926
                                    }
                                case 88:
                                    var3 = 2;
                                    var3 = var2[var3];
                                    var0 = _closure3_slot0;
                                    var0 = var0._value;
                                    var0 = var3.bind(var2)(var0);
                                case 110:
                                    var0 = true;
                                    var2[var1] = var0;
                                case 116:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                    case 78:
                        var0 = undefined;
                        return var0;
                }
            };
            var1._executeHandlers = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var2.SyncPromise = var3;
    var3 = function(arg0) { // Original name: rejectedSyncPromise, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot5;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = arg1;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.rejectedSyncPromise = var3;
    var1 = function(arg0) { // Original name: resolvedSyncPromise, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot5;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = arg0;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.resolvedSyncPromise = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12826]);