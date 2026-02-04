// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = _closure2_slot0;
            var2 = function() { // Environment: var0
                var2 = _closure3_slot0;
                var0 = _closure2_slot0;
                var1 = var0.result;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1.onsuccess = var2;
            var1.oncomplete = var2;
            var0 = function() { // Environment: var0
                var2 = _closure3_slot1;
                var0 = _closure2_slot0;
                var1 = var0.error;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1.onerror = var0;
            var1.onabort = var0;
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot4 = var0;
    var6 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var3 = var1.indexedDB;
        var2 = var3.open;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var _closure2_slot1 = var3;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot1;
            var2 = var1.result;
            var1 = var2.createObjectStore;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3.onupgradeneeded = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot2;
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var4 = arg0;
                var2 = _closure3_slot0;
                var1 = var4.transaction;
                var3 = _closure2_slot0;
                var0 = 'readwrite';
                var1 = var1.bind(var4)(var3, var0);
                var0 = var1.objectStore;
                var1 = var0.bind(var1)(var3);
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        return var0;
    };
    var _closure1_slot5 = var6;
    var0 = function arg0() {
        var1 = arg0;
        var2 = _closure1_slot4;
        var0 = var1.getAllKeys;
        var1 = var0.bind(var1)();
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var4 = function arg0, arg1, arg2() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var2 = arg0;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var _closure3_slot0 = var3;
            var2 = _closure1_slot6;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                _fun12022: for (var _fun12022_ip = 0;;) switch (_fun12022_ip) {
                    case 0:
                        var9 = arg0;
                        var2 = var9.length;
                        var0 = _closure2_slot1;
                        if (!(!(var2 >= var0))) {
                            _fun12022_ip = 130;
                            continue _fun12022
                        }
                    case 19:
                        var0 = _closure3_slot0;
                        var5 = var0.put;
                        var4 = _closure2_slot0;
                        var1 = global;
                        var2 = var1.Math;
                        var8 = var2.max;
                        var7 = var8.apply;
                        var6 = var1.Math;
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var10 = var3.bind(var2)(var9);
                        var9 = var10.concat;
                        var3 = [0];
                        var3 = var9.bind(var10)(var3);
                        var6 = var7.bind(var8)(var6, var3);
                        var3 = 1;
                        var3 = var6 + var3;
                        var3 = var5.bind(var0)(var4, var3);
                        var1 = _closure1_slot4;
                        var0 = var0.transaction;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    case 130:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot7 = var4;
    var1 = function arg0, arg1, arg2() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var2 = arg0;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var _closure3_slot0 = var3;
            var2 = _closure1_slot6;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                _fun12025: for (var _fun12025_ip = 0;;) switch (_fun12025_ip) {
                    case 0:
                        var9 = arg0;
                        var2 = var9.length;
                        var0 = _closure2_slot1;
                        if (!(!(var2 >= var0))) {
                            _fun12025_ip = 130;
                            continue _fun12025
                        }
                    case 19:
                        var0 = _closure3_slot0;
                        var5 = var0.put;
                        var4 = _closure2_slot0;
                        var1 = global;
                        var2 = var1.Math;
                        var8 = var2.min;
                        var7 = var8.apply;
                        var6 = var1.Math;
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var10 = var3.bind(var2)(var9);
                        var9 = var10.concat;
                        var3 = [0];
                        var3 = var9.bind(var10)(var3);
                        var6 = var7.bind(var8)(var6, var3);
                        var3 = 1;
                        var3 = var6 - var3;
                        var3 = var5.bind(var0)(var4, var3);
                        var1 = _closure1_slot4;
                        var0 = var0.transaction;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    case 130:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot8 = var1;
    var3 = function arg0() {
        var2 = arg0;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var _closure3_slot0 = var3;
            var2 = _closure1_slot6;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                _fun12028: for (var _fun12028_ip = 0;;) switch (_fun12028_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = 0;
                        var4 = var2[var1];
                        var _closure4_slot0 = var4;
                        var1 = null;
                        if (!(var1 == var4)) {
                            _fun12028_ip = 25;
                            continue _fun12028
                        }
                    case 21:
                        var1 = undefined;
                        return var1;
                    case 25:
                        var3 = _closure1_slot4;
                        var2 = _closure3_slot0;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var4);
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.then;
                        var0 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = _closure3_slot0;
                            var3 = var1.delete;
                            var2 = _closure4_slot0;
                            var2 = var3.bind(var1)(var2);
                            var3 = _closure1_slot4;
                            var2 = var1.transaction;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.then;
                            var0 = function() { // Environment: var0
                                var0 = _closure5_slot0;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = function() {
            _fun12032: for (var _fun12032_ip = 0;;) switch (_fun12032_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun12032_ip = 68;
                        continue _fun12032
                    }
                case 13:
                    var4 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var3 = var1.dbName;
                    if (var3) {
                        _fun12032_ip = 39;
                        continue _fun12032
                    }
                case 33:
                    var3 = 'sentry-offline';
                case 39:
                    var1 = _closure2_slot0;
                    var2 = var1.storeName;
                    if (var2) {
                        _fun12032_ip = 56;
                        continue _fun12032
                    }
                case 52:
                    var2 = 'queue';
                case 56:
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    var _closure2_slot1 = var1;
                case 68:
                    var0 = _closure2_slot1;
                    return var0;
            }
        };
        var _closure2_slot5 = var0;
        var0 = {};
        var5 = _closure1_slot2;
        var4 = undefined;
        var3 = function*(arg0) { // Environment: var1
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun12034: for (var _fun12034_ip = 0;;) switch (_fun12034_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun12034_ip = 122;
                            continue _fun12034
                        }
                    case 7:
                        var1 = arg0;
                    case 10: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 2;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.serializeEnvelope;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 50);
                    case 48:
                        return var1;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun12034_ip = 112;
                            continue _fun12034
                        }
                    case 56:
                        var4 = _closure1_slot7;
                        var2 = _closure2_slot5;
                        var3 = var2.bind(var5)();
                        var6 = _closure2_slot0;
                        var6 = var6.maxQueueSize;
                        var2 = var6;
                        if (var6) {
                            _fun12034_ip = 90;
                            continue _fun12034
                        }
                    case 87:
                        var2 = 30;
                    case 90:
                        var2 = var4.bind(var5)(var3, var1, var2);
                        SaveGenerator(address = 101);
                    case 99:
                        return var2;
                    case 101:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun12034_ip = 109;
                            continue _fun12034
                        }
                    case 107: // try_end0
                        _fun12034_ip = 117;
                        continue _fun12034;
                    case 109:
                        return var2;
                    case 112:
                        return var1;
                    case 115: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 117:
                        var1 = undefined;
                        return var1;
                    case 122:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var5.bind(var4)(var3);
        var _closure2_slot4 = var3;
        var3 = function arg0() {
            var0 = undefined;
            var3 = _closure2_slot4;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.push = var3;
        var5 = _closure1_slot2;
        var3 = function*(arg0) { // Environment: var1
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun12037: for (var _fun12037_ip = 0;;) switch (_fun12037_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun12037_ip = 122;
                            continue _fun12037
                        }
                    case 7:
                        var1 = arg0;
                    case 10: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 2;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.serializeEnvelope;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 50);
                    case 48:
                        return var1;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun12037_ip = 112;
                            continue _fun12037
                        }
                    case 56:
                        var4 = _closure1_slot8;
                        var2 = _closure2_slot5;
                        var3 = var2.bind(var5)();
                        var6 = _closure2_slot0;
                        var6 = var6.maxQueueSize;
                        var2 = var6;
                        if (var6) {
                            _fun12037_ip = 90;
                            continue _fun12037
                        }
                    case 87:
                        var2 = 30;
                    case 90:
                        var2 = var4.bind(var5)(var3, var1, var2);
                        SaveGenerator(address = 101);
                    case 99:
                        return var2;
                    case 101:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun12037_ip = 109;
                            continue _fun12037
                        }
                    case 107: // try_end0
                        _fun12037_ip = 117;
                        continue _fun12037;
                    case 109:
                        return var2;
                    case 112:
                        return var1;
                    case 115: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 117:
                        var1 = undefined;
                        return var1;
                    case 122:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var5.bind(var4)(var3);
        var _closure2_slot3 = var3;
        var3 = function arg0() {
            var0 = undefined;
            var3 = _closure2_slot3;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.unshift = var3;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun12040: for (var _fun12040_ip = 0;;) switch (_fun12040_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun12040_ip = 94;
                            continue _fun12040
                        }
                    case 7:
                        var1 = undefined;
                        var3 = undefined;
                    case 11: // try_start_0
                        var5 = _closure1_slot9;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)();
                        var2 = var5.bind(var1)(var2);
                        SaveGenerator(address = 38);
                    case 36:
                        return var2;
                    case 38:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun12040_ip = 86;
                            continue _fun12040
                        }
                    case 44:
                        var3 = var2;
                        if (var2) {
                            _fun12040_ip = 52;
                            continue _fun12040
                        }
                    case 50: // try_end0
                        _fun12040_ip = 91;
                        continue _fun12040;
                    case 52: // try_start_1
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 2;
                        var4 = var6[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.parseEnvelope;
                        var3 = var4.bind(var5)(var3);
                    case 83: // try_end1
                        return var3;
                    case 86:
                        return var2;
                    case 89: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                    case 91:
                        return var1;
                    case 94:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var _closure2_slot2 = var2;
        var1 = function() {
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.shift = var1;
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var7 = var7.Symbol;
    var8 = var7.toStringTag;
    var7 = {};
    var11 = 'Module';
    var7.value = var11;
    var7 = var9.bind(var10)(var2, var8, var7);
    var2.createStore = var6;
    var5 = function() {
        _fun12042: for (var _fun12042_ip = 0;;) switch (_fun12042_ip) {
            case 0:
                var2 = undefined;
                var1 = undefined;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun12042_ip = 21;
                    continue _fun12042
                }
            case 13:
                var3 = arguments[var0];
                if (!(var2 === var3)) {
                    _fun12042_ip = 52;
                    continue _fun12042
                }
            case 21:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var5[var3];
                var3 = var4.bind(var2)(var3);
                var3 = var3.makeFetchTransport;
                _fun12042_ip = 56;
                continue _fun12042;
            case 52:
                var3 = arguments[var0];
            case 56:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.makeOfflineTransport;
                var1 = var0.bind(var1)(var3);
                var0 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function(arg0) { // Environment: var0
                        var4 = _closure3_slot0;
                        var0 = global;
                        var7 = var0.Object;
                        var6 = var7.assign;
                        var5 = {};
                        var0 = _closure1_slot10;
                        var5.createStore = var0;
                        var2 = {};
                        var0 = arg0;
                        var0 = var6.bind(var7)(var2, var0, var5);
                        var2 = undefined;
                        var0 = var4.bind(var2)(var0);
                        var _closure4_slot0 = var0;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 3;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var4 = var3.WINDOW;
                        var3 = var4.addEventListener;
                        var1 = function() { // Environment: var1
                            var3 = _closure1_slot2;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun12047: for (var _fun12047_ip = 0;;) switch (_fun12047_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun12047_ip = 42;
                                                continue _fun12047
                                            }
                                        case 7:
                                            var2 = _closure4_slot0;
                                            var1 = var2.flush;
                                            var1 = var1.bind(var2)();
                                            SaveGenerator(address = 28);
                                        case 26:
                                            return var1;
                                        case 28:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun12047_ip = 39;
                                                continue _fun12047
                                            }
                                        case 34:
                                            var2 = undefined;
                                            return var2;
                                        case 39:
                                            return var1;
                                        case 42:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure5_slot0 = var1;
                            var0 = function(arg0) { // Environment: var0
                                var0 = undefined;
                                var3 = _closure5_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var2 = var1.bind(var2)();
                        var1 = 'online';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    return var0;
                };
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var2.makeBrowserOfflineTransport = var5;
    var2.push = var4;
    var2.shift = var3;
    var2.unshift = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 65, 817, 1025, 1029]);