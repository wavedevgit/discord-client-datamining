// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function() { // Environment: var1
        var3 = function(arg0) { // Original name: SyncPromise, environment: var4
            var3 = this;
            var2 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var3, var1);
            var1 = 0;
            var3._state = var1;
            var1 = new Array(0);
            var3._handlers = var1;
            var2 = var3._runExecutor;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot3;
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
                    _fun9203: for (var _fun9203_ip = 0;;) switch (_fun9203_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure3_slot0;
                            if (var2) {
                                _fun9203_ip = 32;
                                continue _fun9203
                            }
                        case 13:
                            var4 = _closure4_slot0;
                            var3 = var0;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun9203_ip = 73;
                            continue _fun9203;
                        case 32: // try_start_0
                            var2 = _closure4_slot0;
                            var3 = _closure3_slot0;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var2.bind(var1)(var0);
                        case 55: // try_end0
                            _fun9203_ip = 73;
                            continue _fun9203;
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
                    _fun9204: for (var _fun9204_ip = 0;;) switch (_fun9204_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure3_slot1;
                            if (var2) {
                                _fun9204_ip = 32;
                                continue _fun9204
                            }
                        case 13:
                            var4 = _closure4_slot1;
                            var3 = var0;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun9204_ip = 73;
                            continue _fun9204;
                        case 32: // try_start_0
                            var2 = _closure4_slot0;
                            var3 = _closure3_slot1;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var2.bind(var1)(var0);
                        case 55: // try_end0
                            _fun9204_ip = 73;
                            continue _fun9204;
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
        var1 = new Array(5);
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
                    _fun9209: for (var _fun9209_ip = 0;;) switch (_fun9209_ip) {
                        case 0:
                            var0 = false;
                            var _closure4_slot3 = var0;
                            var0 = arg0;
                            var _closure4_slot2 = var0;
                            var1 = _closure3_slot0;
                            if (!var1) {
                                _fun9209_ip = 36;
                                continue _fun9209
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
                    _fun9210: for (var _fun9210_ip = 0;;) switch (_fun9210_ip) {
                        case 0:
                            var0 = true;
                            _closure4_slot3 = var0;
                            var0 = arg0;
                            _closure4_slot2 = var0;
                            var1 = _closure3_slot0;
                            if (!var1) {
                                _fun9210_ip = 36;
                                continue _fun9210
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
                    _fun9211: for (var _fun9211_ip = 0;;) switch (_fun9211_ip) {
                        case 0:
                            var1 = _closure4_slot3;
                            if (var1) {
                                _fun9211_ip = 27;
                                continue _fun9211
                            }
                        case 10:
                            var3 = _closure4_slot0;
                            var2 = _closure4_slot2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun9211_ip = 42;
                            continue _fun9211;
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
        var5 = '_executeHandlers';
        var0.key = var5;
        var5 = function() { // Original name: _executeHandlers, environment: var4
            _fun9212: for (var _fun9212_ip = 0;;) switch (_fun9212_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var2 = var3._state;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun9212_ip = 61;
                        continue _fun9212
                    }
                case 21:
                    var2 = var3._handlers;
                    var1 = var2.slice;
                    var2 = var1.bind(var2)();
                    var1 = new Array(0);
                    var3._handlers = var1;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun9213: for (var _fun9213_ip = 0;;) switch (_fun9213_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = 0;
                                var0 = var2[var1];
                                if (var0) {
                                    _fun9213_ip = 93;
                                    continue _fun9213
                                }
                            case 12:
                                var3 = _closure3_slot0;
                                var4 = var3._state;
                                var3 = 1;
                                if (!(var3 === var4)) {
                                    _fun9213_ip = 51;
                                    continue _fun9213
                                }
                            case 32:
                                var4 = var2[var3];
                                var3 = _closure3_slot0;
                                var3 = var3._value;
                                var3 = var4.bind(var2)(var3);
                            case 51:
                                var3 = _closure3_slot0;
                                var4 = var3._state;
                                var3 = 2;
                                if (!(var3 === var4)) {
                                    _fun9213_ip = 87;
                                    continue _fun9213
                                }
                            case 68:
                                var3 = var2[var3];
                                var0 = _closure3_slot0;
                                var0 = var0._value;
                                var0 = var3.bind(var2)(var0);
                            case 87:
                                var0 = true;
                                var2[var1] = var0;
                            case 93:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_runExecutor';
        var0.key = var5;
        var4 = function(arg0) { // Original name: _runExecutor, environment: var4
            _fun9214: for (var _fun9214_ip = 0;;) switch (_fun9214_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var3 = function(arg0, arg1) { // Original name: setResult, environment: var4
                        _fun9215: for (var _fun9215_ip = 0;;) switch (_fun9215_ip) {
                            case 0:
                                var3 = arg1;
                                var1 = _closure3_slot0;
                                var2 = var1._state;
                                var1 = 0;
                                if (!(var1 === var2)) {
                                    _fun9215_ip = 111;
                                    continue _fun9215
                                }
                            case 22:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 2;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.isThenable;
                                var1 = var1.bind(var2)(var3);
                                if (var1) {
                                    _fun9215_ip = 92;
                                    continue _fun9215
                                }
                            case 61:
                                var2 = _closure3_slot0;
                                var1 = arg0;
                                var2._state = var1;
                                var2._value = var3;
                                var1 = var2._executeHandlers;
                                var1 = var1.bind(var2)();
                                _fun9215_ip = 111;
                                continue _fun9215;
                            case 92:
                                var2 = var3.then;
                                var1 = _closure3_slot2;
                                var0 = _closure3_slot3;
                                var0 = var2.bind(var3)(var1, var0);
                            case 111:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot1 = var3;
                    var3 = function(arg0) { // Original name: resolve, environment: var4
                        var3 = _closure3_slot1;
                        var0 = undefined;
                        var2 = 1;
                        var1 = arg0;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1 = var3;
                    var _closure3_slot2 = var3;
                    var3 = function(arg0) { // Original name: reject, environment: var4
                        var3 = _closure3_slot1;
                        var0 = undefined;
                        var2 = 2;
                        var1 = arg0;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0 = var3;
                    var _closure3_slot3 = var3;
                case 45: // try_start_0
                    var4 = var2;
                    var3 = var1;
                    var2 = var0;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                case 62: // try_end0
                    _fun9214_ip = 76;
                    continue _fun9214;
                case 64: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var1 = var0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 76:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot4 = var3;
    var2.SyncPromise = var3;
    var3 = function(arg0) { // Original name: rejectedSyncPromise, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
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
        var2 = _closure1_slot4;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 827]);