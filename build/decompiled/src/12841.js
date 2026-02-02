// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        _fun98786: for (var _fun98786_ip = 0;;) switch (_fun98786_ip) {
            case 0:
                var0 = undefined;
                var4 = undefined;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = arguments.length;
                var3 = 1;
                var2 = var2 > var3;
                if (!var2) {
                    _fun98786_ip = 34;
                    continue _fun98786
                }
            case 26:
                var5 = arguments[var3];
                var2 = var0 !== var5;
            case 34:
                if (!var2) {
                    _fun98786_ip = 41;
                    continue _fun98786
                }
            case 37:
                var2 = arguments[var3];
            case 41:
                if (!var2) {
                    _fun98786_ip = 80;
                    continue _fun98786
                }
            case 44:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 3;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.supportsNativeFetch;
                var3 = var3.bind(var4)();
                var2 = !var3;
            case 80:
                if (var2) {
                    _fun98786_ip = 148;
                    continue _fun98786
                }
            case 83:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 4;
                var2 = var6[var2];
                var5 = var3.bind(var0)(var2);
                var4 = var5.fill;
                var2 = 5;
                var2 = var6[var2];
                var2 = var3.bind(var0)(var2);
                var3 = var2.GLOBAL_OBJ;
                var2 = 'fetch';
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun98788: for (var _fun98788_ip = 0;;) switch (_fun98788_ip) {
                            case 0:
                                var4 = undefined;
                                var6 = undefined;
                                var3 = arguments.length;
                                var2 = global;
                                var1 = var2.Array;
                                var5 = var1.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var13 = var5;
                                var12 = var3;
                                var1 = new var13[var1](var12, var11);
                                var5 = var1 instanceof Object ? var1 : var5;
                                var1 = 0;
                                var7 = var1 < var3;
                                if (!var7) {
                                    _fun98788_ip = 64;
                                    continue _fun98788
                                }
                            case 49:
                                var7 = arguments[var1];
                                var5[var1] = var7;
                                var1 = var1 + 1;
                                if (var1 < var3) {
                                    _fun98788_ip = 49;
                                    continue _fun98788
                                }
                            case 64:
                                var3 = _closure1_slot10;
                                var6 = var3.bind(var4)(var5);
                                var10 = {};
                                var10.args = var5;
                                var3 = {};
                                var7 = var6.method;
                                var3.method = var7;
                                var6 = var6.url;
                                var3.url = var6;
                                var10.fetchData = var3;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var3 = 6;
                                var3 = var7[var3];
                                var6 = var6.bind(var4)(var3);
                                var3 = var6.timestampInSeconds;
                                var6 = var3.bind(var6)();
                                var3 = 1000;
                                var3 = var3 * var6;
                                var10.startTimestamp = var3;
                                var _closure4_slot0 = var10;
                                var3 = _closure2_slot0;
                                if (var3) {
                                    _fun98788_ip = 224;
                                    continue _fun98788
                                }
                            case 169:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var3 = 2;
                                var3 = var7[var3];
                                var8 = var6.bind(var4)(var3);
                                var7 = var8.triggerHandlers;
                                var9 = var2.Object;
                                var6 = var9.assign;
                                var3 = {};
                                var6 = var6.bind(var9)(var3, var10);
                                var3 = 'fetch';
                                var3 = var7.bind(var8)(var3, var6);
                            case 224:
                                var2 = var2.Error;
                                var3 = var2.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var13 = var3;
                                var2 = new var13[var2](var12);
                                var2 = var2 instanceof Object ? var2 : var3;
                                var2 = var2.stack;
                                var _closure4_slot1 = var2;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var1 = 5;
                                var1 = var7[var1];
                                var1 = var6.bind(var4)(var1);
                                var1 = var1.GLOBAL_OBJ;
                                var3 = var2.bind(var3)(var1, var5);
                                var2 = var3.then;
                                var1 = function() { // Environment: var0
                                    var3 = _closure1_slot3;
                                    var2 = undefined;
                                    var1 = function*(arg0) { // Environment: var0
                                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                            _fun98791: for (var _fun98791_ip = 0;;) switch (_fun98791_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    var1 = arg0;
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                                    if (var2) {
                                                        _fun98791_ip = 153;
                                                        continue _fun98791
                                                    }
                                                case 13:
                                                    var3 = _closure2_slot0;
                                                    if (var3) {
                                                        _fun98791_ip = 139;
                                                        continue _fun98791
                                                    }
                                                case 23:
                                                    var11 = _closure1_slot0;
                                                    var12 = _closure1_slot1;
                                                    var3 = 2;
                                                    var3 = var12[var3];
                                                    var10 = undefined;
                                                    var6 = var11.bind(var10)(var3);
                                                    var5 = var6.triggerHandlers;
                                                    var3 = global;
                                                    var9 = var3.Object;
                                                    var8 = var9.assign;
                                                    var7 = _closure4_slot0;
                                                    var4 = {};
                                                    var3 = 6;
                                                    var3 = var12[var3];
                                                    var10 = var11.bind(var10)(var3);
                                                    var3 = var10.timestampInSeconds;
                                                    var10 = var3.bind(var10)();
                                                    var3 = 1000;
                                                    var3 = var3 * var10;
                                                    var4.endTimestamp = var3;
                                                    var4.response = var1;
                                                    var3 = {};
                                                    var4 = var8.bind(var9)(var3, var7, var4);
                                                    var3 = 'fetch';
                                                    var3 = var5.bind(var6)(var3, var4);
                                                    _fun98791_ip = 150;
                                                    continue _fun98791;
                                                case 139:
                                                    var3 = _closure2_slot0;
                                                    var2 = undefined;
                                                    var2 = var3.bind(var2)(var1);
                                                case 150:
                                                    return var1;
                                                case 153:
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
                                var1 = var1.bind(var4)();
                                var0 = function(arg0) { // Environment: var0
                                    _fun98793: for (var _fun98793_ip = 0;;) switch (_fun98793_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var2 = 2;
                                            var2 = var6[var2];
                                            var3 = undefined;
                                            var9 = var5.bind(var3)(var2);
                                            var8 = var9.triggerHandlers;
                                            var2 = global;
                                            var12 = var2.Object;
                                            var11 = var12.assign;
                                            var10 = _closure4_slot0;
                                            var7 = {};
                                            var4 = 6;
                                            var4 = var6[var4];
                                            var13 = var5.bind(var3)(var4);
                                            var4 = var13.timestampInSeconds;
                                            var13 = var4.bind(var13)();
                                            var4 = 1000;
                                            var4 = var4 * var13;
                                            var7.endTimestamp = var4;
                                            var7.error = var0;
                                            var4 = {};
                                            var7 = var11.bind(var12)(var4, var10, var7);
                                            var4 = 'fetch';
                                            var4 = var8.bind(var9)(var4, var7);
                                            var4 = 7;
                                            var4 = var6[var4];
                                            var5 = var5.bind(var3)(var4);
                                            var4 = var5.isError;
                                            var4 = var4.bind(var5)(var0);
                                            if (!var4) {
                                                _fun98793_ip = 152;
                                                continue _fun98793
                                            }
                                        case 142:
                                            var5 = var0.stack;
                                            var4 = var3 === var5;
                                        case 152:
                                            if (!var4) {
                                                _fun98793_ip = 205;
                                                continue _fun98793
                                            }
                                        case 155:
                                            var2 = _closure4_slot1;
                                            var0.stack = var2;
                                            var2 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var1 = 4;
                                            var1 = var4[var1];
                                            var4 = var2.bind(var3)(var1);
                                            var3 = var4.addNonEnumerableProperty;
                                            var2 = 'framesToPop';
                                            var1 = 1;
                                            var1 = var3.bind(var4)(var0, var2, var1);
                                        case 205:
                                            throw var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var2, var1);
            case 148:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var1 = function arg0() {
                var0 = undefined;
                var3 = _closure3_slot1;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot0 = var1;
            var1 = function() {
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot3;
                var1 = function*(arg0) { // Environment: var1
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun98807: for (var _fun98807_ip = 0;;) switch (_fun98807_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun98807_ip = 170;
                                    continue _fun98807
                                }
                            case 10:
                                var1 = arg0;
                                var1 = var1.done;
                                if (var1) {
                                    _fun98807_ip = 149;
                                    continue _fun98807
                                }
                            case 24: // try_start_0
                                var5 = global;
                                var4 = var5.Promise;
                                var2 = var4.race;
                                var3 = undefined;
                                var1 = var3.read;
                                var6 = var1.bind(var3)();
                                var1 = new Array(2);
                                var1[0] = var6;
                                var7 = var5.Promise;
                                var5 = var7.prototype;
                                var6 = Object.create(var5, {
                                    constructor: {
                                        value: var7
                                    }
                                });
                                var8 = function(arg0) { // Environment: var5
                                    var0 = arg0;
                                    var _closure7_slot0 = var0;
                                    var0 = global;
                                    var3 = var0.setTimeout;
                                    var0 = undefined;
                                    var2 = function() { // Environment: var1
                                        var2 = _closure7_slot0;
                                        var1 = {};
                                        var0 = true;
                                        var1.done = var0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var1 = 5000;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var9 = var6;
                                var5 = new var9[var7](var8, var7);
                                var5 = var5 instanceof Object ? var5 : var6;
                                var1[1] = var5;
                                var1 = var2.bind(var4)(var1);
                                SaveGenerator(address = 106);
                            case 104:
                                return var1;
                            case 106:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun98807_ip = 139;
                                    continue _fun98807
                                }
                            case 112:
                                var2 = _closure3_slot0;
                                var2 = var2.bind(var3)(var1);
                                SaveGenerator(address = 128);
                            case 126:
                                return var2;
                            case 128:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun98807_ip = 136;
                                    continue _fun98807
                                }
                            case 134: // try_end0
                                _fun98807_ip = 144;
                                continue _fun98807;
                            case 136:
                                return var2;
                            case 139:
                                return var1;
                            case 142: // catch_target0
                                CatchBlockStart(arg_register = 1);
                            case 144:
                                var1 = undefined;
                                return var1;
                            case 149:
                                var1 = global;
                                var2 = var1.Promise;
                                var1 = var2.resolve;
                                var1 = var1.bind(var2)();
                                return var1;
                            case 170:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                _closure3_slot1 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot1 = var1;
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun98796: for (var _fun98796_ip = 0;;) switch (_fun98796_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun98796_ip = 144;
                            continue _fun98796
                        }
                    case 15:
                        var3 = undefined;
                        var _closure4_slot0 = var3;
                        var4 = function arg0() {
                            var0 = undefined;
                            var3 = _closure4_slot2;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var _closure4_slot1 = var4;
                        var5 = function() {
                            var3 = undefined;
                            var0 = undefined;
                            var2 = _closure1_slot3;
                            var1 = function*(arg0) { // Environment: var1
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun98800: for (var _fun98800_ip = 0;;) switch (_fun98800_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun98800_ip = 174;
                                                continue _fun98800
                                            }
                                        case 10:
                                            var1 = arg0;
                                            var1 = var1.done;
                                            if (var1) {
                                                _fun98800_ip = 153;
                                                continue _fun98800
                                            }
                                        case 24: // try_start_0
                                            var5 = global;
                                            var4 = var5.Promise;
                                            var3 = var4.race;
                                            var6 = _closure4_slot0;
                                            var1 = var6.read;
                                            var6 = var1.bind(var6)();
                                            var1 = new Array(2);
                                            var1[0] = var6;
                                            var7 = var5.Promise;
                                            var5 = var7.prototype;
                                            var6 = Object.create(var5, {
                                                constructor: {
                                                    value: var7
                                                }
                                            });
                                            var8 = function(arg0) { // Environment: var5
                                                var0 = arg0;
                                                var _closure8_slot0 = var0;
                                                var0 = global;
                                                var3 = var0.setTimeout;
                                                var0 = undefined;
                                                var2 = function() { // Environment: var1
                                                    var2 = _closure8_slot0;
                                                    var1 = {};
                                                    var0 = true;
                                                    var1.done = var0;
                                                    var0 = undefined;
                                                    var1 = var2.bind(var0)(var1);
                                                    return var0;
                                                };
                                                var1 = 5000;
                                                var1 = var3.bind(var0)(var2, var1);
                                                return var0;
                                            };
                                            var9 = var6;
                                            var5 = new var9[var7](var8, var7);
                                            var5 = var5 instanceof Object ? var5 : var6;
                                            var1[1] = var5;
                                            var1 = var3.bind(var4)(var1);
                                            SaveGenerator(address = 111);
                                        case 109:
                                            return var1;
                                        case 111:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                            if (var3) {
                                                _fun98800_ip = 143;
                                                continue _fun98800
                                            }
                                        case 117:
                                            var3 = _closure4_slot1;
                                            var2 = undefined;
                                            var2 = var3.bind(var2)(var1);
                                            SaveGenerator(address = 132);
                                        case 130:
                                            return var2;
                                        case 132:
                                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                            if (var3) {
                                                _fun98800_ip = 140;
                                                continue _fun98800
                                            }
                                        case 138: // try_end0
                                            _fun98800_ip = 148;
                                            continue _fun98800;
                                        case 140:
                                            return var2;
                                        case 143:
                                            return var1;
                                        case 146: // catch_target0
                                            CatchBlockStart(arg_register = 1);
                                        case 148:
                                            var1 = undefined;
                                            return var1;
                                        case 153:
                                            var1 = global;
                                            var2 = var1.Promise;
                                            var1 = var2.resolve;
                                            var1 = var1.bind(var2)();
                                            return var1;
                                        case 174:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            _closure4_slot2 = var3;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var _closure4_slot2 = var5;
                        if (!var2) {
                            _fun98796_ip = 68;
                            continue _fun98796
                        }
                    case 46:
                        var5 = var2.body;
                        if (!var5) {
                            _fun98796_ip = 68;
                            continue _fun98796
                        }
                    case 54:
                        var5 = var2.body;
                        var5 = var5.getReader;
                        if (var5) {
                            _fun98796_ip = 71;
                            continue _fun98796
                        }
                    case 68:
                        return var3;
                    case 71:
                        var3 = var2.body;
                        var2 = var3.getReader;
                        var3 = var2.bind(var3)();
                        _closure4_slot0 = var3;
                        var2 = var3.read;
                        var3 = var2.bind(var3)();
                        var2 = var3.then;
                        var4 = var2.bind(var3)(var4);
                        var3 = var4.then;
                        var2 = arg1;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.catch;
                        var1 = function() { // Environment: var1
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 144:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun98813: for (var _fun98813_ip = 0;;) switch (_fun98813_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                        if (var5) {
                            _fun98813_ip = 80;
                            continue _fun98813
                        }
                    case 12:
                        var4 = var1;
                        var _closure4_slot0 = var1;
                        var1 = undefined;
                        var3 = undefined;
                    case 23: // try_start_0
                        var5 = var4;
                        var4 = var5.clone;
                        var3 = var4.bind(var5)();
                    case 36: // try_end0
                        var4 = var3;
                        var3 = function arg0, arg1() {
                            var0 = undefined;
                            var3 = _closure1_slot5;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = function() { // Environment: var2
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var0 = 2;
                            var1 = var6[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var1);
                            var3 = var4.triggerHandlers;
                            var2 = {};
                            var1 = 6;
                            var1 = var6[var1];
                            var5 = var5.bind(var0)(var1);
                            var1 = var5.timestampInSeconds;
                            var5 = var1.bind(var5)();
                            var1 = 1000;
                            var1 = var1 * var5;
                            var2.endTimestamp = var1;
                            var1 = _closure4_slot0;
                            var2.response = var1;
                            var1 = 'fetch-body-resolved';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                        };
                        var2 = var3.bind(var1)(var4, var2);
                        SaveGenerator(address = 63);
                    case 61:
                        return var2;
                    case 63:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun98813_ip = 72;
                            continue _fun98813
                        }
                    case 69:
                        return var1;
                    case 72:
                        return var2;
                    case 75: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        return var1;
                    case 80:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun98816: for (var _fun98816_ip = 0;;) switch (_fun98816_ip) {
            case 0:
                var2 = arg0;
                var1 = !var2;
                var0 = !var1;
                if (var1) {
                    _fun98816_ip = 23;
                    continue _fun98816
                }
            case 12:
                var3 = 'object';
                var1 = typeof var2;
                var0 = var3 === var1;
            case 23:
                if (!var0) {
                    _fun98816_ip = 39;
                    continue _fun98816
                }
            case 26:
                var1 = arg1;
                var1 = var2[var1];
                var1 = !var1;
                var0 = !var1;
            case 39:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun98817: for (var _fun98817_ip = 0;;) switch (_fun98817_ip) {
            case 0:
                var3 = arg0;
                var2 = 'string';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 !== var1)) {
                    _fun98817_ip = 79;
                    continue _fun98817
                }
            case 17:
                var2 = '';
                var1 = var2;
                if (!var3) {
                    _fun98817_ip = 76;
                    continue _fun98817
                }
            case 27:
                var6 = _closure1_slot8;
                var5 = undefined;
                var4 = 'url';
                var4 = var6.bind(var5)(var3, var4);
                if (var4) {
                    _fun98817_ip = 68;
                    continue _fun98817
                }
            case 49:
                var4 = var3.toString;
                if (!var4) {
                    _fun98817_ip = 66;
                    continue _fun98817
                }
            case 57:
                var4 = var3.toString;
                var2 = var4.bind(var3)();
            case 66:
                _fun98817_ip = 73;
                continue _fun98817;
            case 68:
                var2 = var3.url;
            case 73:
                var1 = var2;
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var1 = function arg0() {
        _fun98818: for (var _fun98818_ip = 0;;) switch (_fun98818_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun98818_ip = 212;
                    continue _fun98818
                }
            case 17:
                var1 = var5.length;
                var3 = 2;
                if (!(var3 !== var1)) {
                    _fun98818_ip = 112;
                    continue _fun98818
                }
            case 29:
                var4 = var5[var0];
                var1 = {};
                var6 = _closure1_slot9;
                var7 = undefined;
                var6 = var6.bind(var7)(var4);
                var1.url = var6;
                var6 = _closure1_slot8;
                var2 = 'method';
                var6 = var6.bind(var7)(var4, var2);
                var2 = 'GET';
                if (!var6) {
                    _fun98818_ip = 105;
                    continue _fun98818
                }
            case 76:
                var6 = global;
                var6 = var6.String;
                var4 = var4.method;
                var6 = var6.bind(var7)(var4);
                var4 = var6.toUpperCase;
                var2 = var4.bind(var6)();
            case 105:
                var1.method = var2;
                return var1;
            case 112:
                var2 = _closure1_slot2;
                var4 = undefined;
                var2 = var2.bind(var4)(var5, var3);
                var5 = var2[var0];
                var0 = 1;
                var2 = var2[var0];
                var0 = {};
                var3 = _closure1_slot9;
                var3 = var3.bind(var4)(var5);
                var0.url = var3;
                var3 = _closure1_slot8;
                var1 = 'method';
                var3 = var3.bind(var4)(var2, var1);
                var1 = 'GET';
                if (!var3) {
                    _fun98818_ip = 205;
                    continue _fun98818
                }
            case 176:
                var3 = global;
                var3 = var3.String;
                var2 = var2.method;
                var3 = var3.bind(var4)(var2);
                var2 = var3.toUpperCase;
                var1 = var2.bind(var3)();
            case 205:
                var0.method = var1;
                return var0;
            case 212:
                var0 = {
                    'method': 'GET',
                    'url': ''
                };
                return var0;
        }
    };
    var _closure1_slot10 = var1;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var2, var4, var5);
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var4 = var3[var1];
        var0 = undefined;
        var7 = var2.bind(var0)(var4);
        var6 = var7.addHandler;
        var4 = 'fetch-body-resolved';
        var5 = arg0;
        var5 = var6.bind(var7)(var4, var5);
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.maybeInstrument;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = _closure1_slot6;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.addFetchEndInstrumentationHandler = var4;
    var3 = function arg0, arg1() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 2;
        var4 = var5[var2];
        var0 = undefined;
        var8 = var3.bind(var0)(var4);
        var7 = var8.addHandler;
        var4 = 'fetch';
        var6 = arg0;
        var6 = var7.bind(var8)(var4, var6);
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.maybeInstrument;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var0, var1);
            return var0;
        };
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.addFetchInstrumentationHandler = var3;
    var2.parseFetchArgs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 12838, 12842, 12840, 12831, 12843, 12827]);