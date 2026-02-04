// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12202: for (var _fun12202_ip = 0;;) switch (_fun12202_ip) {
        case 0:
            var1 = exports;
            var3 = this;
            var2 = require;
            var _closure1_slot0 = var2;
            var2 = dependencyMap;
            var _closure1_slot1 = var2;
            var2 = function() {
                var1 = this;
                var _closure2_slot0 = var1;
                var1 = false;
                var _closure2_slot1 = var1;
                var1 = null;
                var _closure2_slot2 = var1;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot2;
                    var7 = _closure2_slot0;
                    var4 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun12206: for (var _fun12206_ip = 0;;) switch (_fun12206_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun12206_ip = 233;
                                        continue _fun12206
                                    }
                                case 10:
                                    var2 = _closure2_slot1;
                                    if (var2) {
                                        _fun12206_ip = 155;
                                        continue _fun12206
                                    }
                                case 23: // try_start_0
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var2 = 0;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                    var3 = var2.NATIVE;
                                    var2 = var3.fetchModules;
                                    var2 = var2.bind(var3)();
                                    SaveGenerator(address = 67);
                                case 65:
                                    return var2;
                                case 67:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun12206_ip = 79;
                                        continue _fun12206
                                    }
                                case 73:
                                    _closure2_slot2 = var2;
                                case 77: // try_end0
                                    _fun12206_ip = 149;
                                    continue _fun12206;
                                case 79:
                                    return var2;
                                case 82: // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var2 = 1;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                    var4 = var2.debug;
                                    var3 = var4.log;
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var5 = var2.concat;
                                    var2 = 'Failed to get modules from native: ';
                                    var2 = var5.bind(var2)(var6);
                                    var2 = var3.bind(var4)(var2);
                                case 149:
                                    var2 = true;
                                    _closure2_slot1 = var2;
                                case 155:
                                    var2 = _closure2_slot2;
                                    if (!var2) {
                                        _fun12206_ip = 223;
                                        continue _fun12206
                                    }
                                case 162:
                                    var2 = _closure3_slot0;
                                    var3 = global;
                                    var5 = var3.Object;
                                    var4 = var5.assign;
                                    var7 = var3.Object;
                                    var6 = var7.assign;
                                    var3 = _closure2_slot2;
                                    var1 = {};
                                    var3 = var6.bind(var7)(var1, var3);
                                    var1 = var2.modules;
                                    var1 = var4.bind(var5)(var3, var1);
                                    var2.modules = var1;
                                case 223:
                                    var1 = _closure3_slot0;
                                    return var1;
                                case 233:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var8 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var0 = var8[var3](var7, var6, var5, var4, var3);
                    return var0;
                };
                return var0;
            };
            var _closure1_slot3 = var2;
            var2 = global;
            var6 = var2.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var2 = true;
            var4.value = var2;
            var2 = '__esModule';
            var2 = var5.bind(var6)(var1, var2, var4);
            var2 = var3;
            if (!var2) {
                _fun12202_ip = 75;
                continue _fun12202
            }
        case 69:
            var2 = var3.__awaiter;
        case 75:
            if (var2) {
                _fun12202_ip = 83;
                continue _fun12202
            }
        case 78:
            var2 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                _fun12207: for (var _fun12207_ip = 0;;) switch (_fun12207_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun12207_ip = 48;
                            continue _fun12207
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun12208: for (var _fun12208_ip = 0;;) switch (_fun12208_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function arg0() {
                                        _fun12209: for (var _fun12209_ip = 0;;) switch (_fun12209_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun12209_ip = 52;
                                                continue _fun12209;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function arg0() {
                                        _fun12210: for (var _fun12210_ip = 0;;) switch (_fun12210_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun12210_ip = 53;
                                                continue _fun12210;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function arg0() {
                                        _fun12211: for (var _fun12211_ip = 0;;) switch (_fun12211_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun12211_ip = 54;
                                                    continue _fun12211
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function arg0() {
                                                    _fun12212: for (var _fun12212_ip = 0;;) switch (_fun12212_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun12212_ip = 52;
                                                                continue _fun12212
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun12211_ip = 73;
                                                continue _fun12211;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun12208_ip = 70;
                                        continue _fun12208
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 83:
            var _closure1_slot2 = var2;
            var0 = function() {
                var0 = {};
                var1 = 'ModulesLoader';
                var0.name = var1;
                var1 = function() {
                    var0 = undefined;
                    return var0;
                };
                var0.setupOnce = var1;
                var2 = _closure1_slot3;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var0.processEvent = var1;
                return var0;
            };
            var1.modulesLoaderIntegration = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [998, 817]);