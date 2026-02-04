// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun114450: for (var _fun114450_ip = 0;;) switch (_fun114450_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var6 = dependencyMap;
            var5 = this;
            var0 = function() {
                _fun114451: for (var _fun114451_ip = 0;;) switch (_fun114451_ip) {
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
                    case 72: // try_end0
                        _fun114451_ip = 76;
                        continue _fun114451;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 76:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot7 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot7 = var0;
            var0 = 0;
            var3 = var6[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot0 = var3;
            var3 = 1;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot1 = var3;
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = 3;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 4;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 5;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 6;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var1 = function arg0() {
                var5 = arg0;
                var4 = _closure1_slot6;
                var1 = global;
                var3 = var1.Error;
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = function(arg0) { // Environment: var2
                    var2 = function arg0() {
                        _fun114456: for (var _fun114456_ip = 0;;) switch (_fun114456_ip) {
                            case 0:
                                var9 = arg0;
                                var4 = this;
                                var0 = _closure1_slot1;
                                var3 = _closure3_slot0;
                                var5 = undefined;
                                var0 = var0.bind(var5)(var4, var3);
                                var0 = null;
                                var6 = var0 != var9;
                                var0 = 'Timed out';
                                if (!var6) {
                                    _fun114456_ip = 74;
                                    continue _fun114456
                                }
                            case 43:
                                var6 = global;
                                var6 = var6.HermesInternal;
                                var8 = var6.concat;
                                var7 = 'Timed out after waiting for ';
                                var6 = ' ms';
                                var0 = var8.bind(var7)(var9, var6);
                            case 74:
                                var10 = new Array(1);
                                var10[0] = var0;
                                var0 = _closure1_slot4;
                                var9 = var0.bind(var5)(var3);
                                var3 = _closure1_slot3;
                                var0 = _closure1_slot7;
                                var0 = var0.bind(var5)();
                                if (var0) {
                                    _fun114456_ip = 119;
                                    continue _fun114456
                                }
                            case 106:
                                var0 = var9.apply;
                                var0 = var0.bind(var9)(var4, var10);
                                _fun114456_ip = 153;
                                continue _fun114456;
                            case 119:
                                var6 = global;
                                var8 = var6.Reflect;
                                var7 = var8.construct;
                                var6 = _closure1_slot4;
                                var6 = var6.bind(var5)(var4);
                                var6 = var6.constructor;
                                var0 = var7.bind(var8)(var9, var10, var6);
                            case 153:
                                var0 = var3.bind(var5)(var4, var0);
                                var3 = global;
                                var4 = var3.Object;
                                var3 = var4.setPrototypeOf;
                                var2 = _closure1_slot2;
                                var2 = var2.bind(var5)(var0);
                                var1 = _closure3_slot0;
                                var1 = var1.prototype;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot5;
                    var1 = undefined;
                    var3 = arg0;
                    var3 = var4.bind(var1)(var2, var3);
                    var0 = _closure1_slot0;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var4 = var3.bind(var0)(var4);
                var _closure2_slot0 = var4;
                var3 = function arg0, arg1() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = function(arg0, arg1) { // Environment: var0
                        _fun114458: for (var _fun114458_ip = 0;;) switch (_fun114458_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = arg1;
                            case 6: // try_start_0
                                var4 = _closure3_slot0;
                                var3 = var4.schedule;
                                var1 = _closure3_slot1;
                                var1 = var3.bind(var4)(var2, var1);
                            case 29: // try_end0
                                _fun114458_ip = 43;
                                continue _fun114458;
                            case 31: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var1 = var0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 43:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var _closure2_slot1 = var3;
                var3 = {};
                var6 = function arg0, arg1() {
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = function arg0() {
                        _fun114460: for (var _fun114460_ip = 0;;) switch (_fun114460_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun114460_ip = 24;
                                    continue _fun114460
                                }
                            case 9:
                                var0 = global;
                                var1 = var0.clearTimeout;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 24:
                                var0 = undefined;
                                _closure3_slot1 = var0;
                                return var0;
                        }
                    };
                    var _closure3_slot2 = var0;
                    var0 = global;
                    var4 = var0.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var1
                        var3 = _closure3_slot2;
                        var2 = _closure3_slot1;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var0);
                    var _closure3_slot1 = var0;
                    var0 = {};
                    var1 = function() {
                        var2 = _closure3_slot2;
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.cancel = var1;
                    return var0;
                };
                var3.schedule = var6;
                var _closure2_slot2 = var3;
                var3 = var1.Number;
                var3 = var3.POSITIVE_INFINITY;
                var _closure2_slot3 = var3;
                var2 = function arg0, arg1, arg2() {
                    _fun114463: for (var _fun114463_ip = 0;;) switch (_fun114463_ip) {
                        case 0:
                            var4 = arg1;
                            var3 = arg2;
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var1 = 'number';
                            var0 = typeof var4;
                            var1 = var1 === var0;
                            var5 = var4;
                            if (var1) {
                                _fun114463_ip = 52;
                                continue _fun114463
                            }
                        case 32:
                            var0 = null;
                            var6 = var0 == var4;
                            var0 = undefined;
                            if (var6) {
                                _fun114463_ip = 49;
                                continue _fun114463
                            }
                        case 43:
                            var0 = var4.timeout;
                        case 49:
                            var5 = var0;
                        case 52:
                            var8 = 5000;
                            var0 = null;
                            var6 = var8;
                            if (!(var0 !== var5)) {
                                _fun114463_ip = 79;
                                continue _fun114463
                            }
                        case 67:
                            var7 = undefined;
                            var6 = var8;
                            if (!(var7 !== var5)) {
                                _fun114463_ip = 79;
                                continue _fun114463
                            }
                        case 76:
                            var6 = var5;
                        case 79:
                            var _closure3_slot1 = var6;
                            if (var1) {
                                _fun114463_ip = 106;
                                continue _fun114463
                            }
                        case 86:
                            var5 = var0 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun114463_ip = 103;
                                continue _fun114463
                            }
                        case 95:
                            var1 = var4.intervalBetweenAttempts;
                        case 103:
                            var3 = var1;
                        case 106:
                            var5 = 50;
                            var1 = var5;
                            if (!(var0 !== var3)) {
                                _fun114463_ip = 128;
                                continue _fun114463
                            }
                        case 116:
                            var4 = undefined;
                            var1 = var5;
                            if (!(var4 !== var3)) {
                                _fun114463_ip = 128;
                                continue _fun114463
                            }
                        case 125:
                            var1 = var3;
                        case 128:
                            var _closure3_slot2 = var1;
                            var1 = false;
                            var _closure3_slot3 = var1;
                            var1 = function() {
                                var0 = global;
                                var2 = var0.Promise;
                                var0 = var2.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var3 = function(arg0, arg1) { // Environment: var0
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = arg1;
                                    var _closure5_slot1 = var1;
                                    var1 = function() {
                                        _fun114466: for (var _fun114466_ip = 0;;) switch (_fun114466_ip) {
                                            case 0:
                                                var1 = _closure3_slot3;
                                                if (var1) {
                                                    _fun114466_ip = 82;
                                                    continue _fun114466
                                                }
                                            case 12:
                                                var1 = global;
                                                var3 = var1.Promise;
                                                var1 = var3.prototype;
                                                var2 = Object.create(var1, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var4 = function(arg0, arg1) { // Environment: var0
                                                    _fun114467: for (var _fun114467_ip = 0;;) switch (_fun114467_ip) {
                                                        case 0:
                                                            var1 = arg0;
                                                            var0 = arg1;
                                                        case 6: // try_start_0
                                                            var3 = var1;
                                                            var1 = _closure3_slot0;
                                                            var2 = undefined;
                                                            var1 = var1.bind(var2)();
                                                            var1 = var3.bind(var2)(var1);
                                                        case 27: // try_end0
                                                            _fun114467_ip = 41;
                                                            continue _fun114467;
                                                        case 29: // catch_target0
                                                            CatchBlockStart(arg_register = 2);
                                                            var1 = var0;
                                                            var0 = undefined;
                                                            var0 = var1.bind(var0)(var2);
                                                        case 41:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var5 = var2;
                                                var1 = new var5[var3](var4, var3);
                                                var2 = var1 instanceof Object ? var1 : var2;
                                                var1 = var2.then;
                                                var0 = function(arg0) { // Environment: var0
                                                    _fun114468: for (var _fun114468_ip = 0;;) switch (_fun114468_ip) {
                                                        case 0:
                                                            var2 = arg0;
                                                            if (var2) {
                                                                _fun114468_ip = 66;
                                                                continue _fun114468
                                                            }
                                                        case 6:
                                                            var4 = _closure2_slot1;
                                                            var3 = _closure2_slot2;
                                                            var1 = _closure3_slot2;
                                                            var0 = undefined;
                                                            var4 = var4.bind(var0)(var3, var1);
                                                            var3 = var4.then;
                                                            var1 = _closure5_slot2;
                                                            var3 = var3.bind(var4)(var1);
                                                            var1 = var3.catch;
                                                            var0 = _closure5_slot1;
                                                            var0 = var1.bind(var3)(var0);
                                                            _fun114468_ip = 80;
                                                            continue _fun114468;
                                                        case 66:
                                                            var1 = _closure5_slot0;
                                                            var0 = undefined;
                                                            var0 = var1.bind(var0)(var2);
                                                        case 80:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var2 = var1.bind(var2)(var0);
                                                var1 = var2.catch;
                                                var0 = _closure5_slot1;
                                                var0 = var1.bind(var2)(var0);
                                            case 82:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure5_slot2 = var1;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var4 = var1;
                                var0 = new var4[var2](var3, var2);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var3 = _closure2_slot3;
                            var5 = undefined;
                            var4 = undefined;
                            if (!(var6 !== var3)) {
                                _fun114463_ip = 167;
                                continue _fun114463
                            }
                        case 160:
                            var4 = function() { // Environment: var2
                                var3 = _closure2_slot1;
                                var2 = _closure2_slot2;
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2, var1);
                                var1 = var2.then;
                                var0 = function() { // Environment: var0
                                    var1 = true;
                                    _closure3_slot3 = var1;
                                    var2 = _closure2_slot0;
                                    var3 = _closure3_slot1;
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var4 = var1;
                                    var0 = new var4[var2](var3, var2);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                        case 167:
                            if (!(var0 == var4)) {
                                _fun114463_ip = 177;
                                continue _fun114463
                            }
                        case 171:
                            var0 = var1.bind(var5)();
                            _fun114463_ip = 216;
                            continue _fun114463;
                        case 177:
                            var2 = global;
                            var3 = var2.Promise;
                            var2 = var3.race;
                            var6 = var1.bind(var5)();
                            var1 = new Array(2);
                            var1[0] = var6;
                            var4 = var4.bind(var5)();
                            var1[1] = var4;
                            var0 = var2.bind(var3)(var1);
                        case 216:
                            return var0;
                    }
                };
                var6 = 50;
                var5.DEFAULT_INTERVAL_BETWEEN_ATTEMPTS_IN_MS = var6;
                var6 = 5000;
                var5.DEFAULT_TIMEOUT_IN_MS = var6;
                var5.TimeoutError = var4;
                var5.WAIT_FOREVER = var3;
                var5.default = var2;
                var5.waitUntil = var2;
                var4 = var1.Object;
                var3 = var4.defineProperty;
                var2 = {};
                var1 = true;
                var2.value = var1;
                var1 = '__esModule';
                var1 = var3.bind(var4)(var5, var1, var2);
                return var0;
            };
            var4 = 'object';
            var3 = typeof var2;
            if (!(var4 === var3)) {
                _fun114450_ip = 162;
                continue _fun114450
            }
        case 155:
            var3 = arg4;
            if (!(var0 === var3)) {
                _fun114450_ip = 271;
                continue _fun114450
            }
        case 162:
            var3 = global;
            var4 = var3.define;
            var6 = 'function';
            var4 = typeof var4;
            if (!(var6 === var4)) {
                _fun114450_ip = 196;
                continue _fun114450
            }
        case 181:
            var4 = var3.define;
            var4 = var4.amd;
            if (var4) {
                _fun114450_ip = 247;
                continue _fun114450
            }
        case 196:
            var4 = var3.globalThis;
            var6 = 'undefined';
            var4 = typeof var4;
            if (!(var6 === var4)) {
                _fun114450_ip = 224;
                continue _fun114450
            }
        case 213:
            if (var5) {
                _fun114450_ip = 222;
                continue _fun114450
            }
        case 216:
            var5 = var3.self;
        case 222:
            _fun114450_ip = 230;
            continue _fun114450;
        case 224:
            var5 = var3.globalThis;
        case 230:
            var4 = {};
            var5['async-wait-until'] = var4;
            var4 = var1.bind(var0)(var4);
            _fun114450_ip = 276;
            continue _fun114450;
        case 247:
            var4 = var3.define;
            var3 = ['exports'];
            var3 = var4.bind(var0)(var3, var1);
            _fun114450_ip = 276;
            continue _fun114450;
        case 271:
            var1 = var1.bind(var0)(var2);
        case 276:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 16, 15, 17, 18, 162]);