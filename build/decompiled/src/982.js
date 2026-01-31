// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        _fun10097: for (var _fun10097_ip = 0;;) switch (_fun10097_ip) {
            case 0:
                var0 = undefined;
                var4 = undefined;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = arguments.length;
                var3 = 1;
                var2 = var2 > var3;
                if (!var2) {
                    _fun10097_ip = 34;
                    continue _fun10097
                }
            case 26:
                var5 = arguments[var3];
                var2 = var0 !== var5;
            case 34:
                if (!var2) {
                    _fun10097_ip = 41;
                    continue _fun10097
                }
            case 37:
                var2 = arguments[var3];
            case 41:
                if (!var2) {
                    _fun10097_ip = 80;
                    continue _fun10097
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
                    _fun10097_ip = 146;
                    continue _fun10097
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
                        _fun10099: for (var _fun10099_ip = 0;;) switch (_fun10099_ip) {
                            case 0:
                                var4 = undefined;
                                var7 = undefined;
                                var2 = global;
                                var1 = var2.Error;
                                var3 = var1.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var12 = var3;
                                var1 = new var12[var1](var11);
                                var3 = var1 instanceof Object ? var1 : var3;
                                var _closure4_slot0 = var3;
                                var6 = arguments.length;
                                var1 = var2.Array;
                                var5 = var1.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var12 = var5;
                                var11 = var6;
                                var1 = new var12[var1](var11, var10);
                                var5 = var1 instanceof Object ? var1 : var5;
                                var1 = 0;
                                var8 = var1 < var6;
                                if (!var8) {
                                    _fun10099_ip = 94;
                                    continue _fun10099
                                }
                            case 79:
                                var8 = arguments[var1];
                                var5[var1] = var8;
                                var1 = var1 + 1;
                                if (var1 < var6) {
                                    _fun10099_ip = 79;
                                    continue _fun10099
                                }
                            case 94:
                                var6 = _closure1_slot9;
                                var7 = var6.bind(var4)(var5);
                                var9 = {};
                                var9.args = var5;
                                var6 = {};
                                var8 = var7.method;
                                var6.method = var8;
                                var7 = var7.url;
                                var6.url = var7;
                                var9.fetchData = var6;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var6 = 6;
                                var6 = var8[var6];
                                var7 = var7.bind(var4)(var6);
                                var6 = var7.timestampInSeconds;
                                var7 = var6.bind(var7)();
                                var6 = 1000;
                                var6 = var6 * var7;
                                var9.startTimestamp = var6;
                                var9.virtualError = var3;
                                var3 = _closure1_slot10;
                                var3 = var3.bind(var4)(var5);
                                var9.headers = var3;
                                var _closure4_slot1 = var9;
                                var3 = _closure2_slot0;
                                if (var3) {
                                    _fun10099_ip = 273;
                                    continue _fun10099
                                }
                            case 218:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var3 = 2;
                                var3 = var7[var3];
                                var7 = var6.bind(var4)(var3);
                                var6 = var7.triggerHandlers;
                                var8 = var2.Object;
                                var3 = var8.assign;
                                var2 = {};
                                var3 = var3.bind(var8)(var2, var9);
                                var2 = 'fetch';
                                var2 = var6.bind(var7)(var2, var3);
                            case 273:
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
                                            _fun10102: for (var _fun10102_ip = 0;;) switch (_fun10102_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    var1 = arg0;
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                                    if (var2) {
                                                        _fun10102_ip = 153;
                                                        continue _fun10102
                                                    }
                                                case 13:
                                                    var3 = _closure2_slot0;
                                                    if (var3) {
                                                        _fun10102_ip = 139;
                                                        continue _fun10102
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
                                                    var7 = _closure4_slot1;
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
                                                    _fun10102_ip = 150;
                                                    continue _fun10102;
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
                                    _fun10104: for (var _fun10104_ip = 0;;) switch (_fun10104_ip) {
                                        case 0:
                                            var7 = arg0;
                                            var0 = var7;
                                            var6 = _closure1_slot0;
                                            var8 = _closure1_slot1;
                                            var1 = 2;
                                            var1 = var8[var1];
                                            var5 = undefined;
                                            var11 = var6.bind(var5)(var1);
                                            var10 = var11.triggerHandlers;
                                            var1 = global;
                                            var14 = var1.Object;
                                            var13 = var14.assign;
                                            var12 = _closure4_slot1;
                                            var9 = {};
                                            var4 = 6;
                                            var4 = var8[var4];
                                            var15 = var6.bind(var5)(var4);
                                            var4 = var15.timestampInSeconds;
                                            var15 = var4.bind(var15)();
                                            var4 = 1000;
                                            var4 = var4 * var15;
                                            var9.endTimestamp = var4;
                                            var9.error = var7;
                                            var4 = {};
                                            var9 = var13.bind(var14)(var4, var12, var9);
                                            var4 = 'fetch';
                                            var4 = var10.bind(var11)(var4, var9);
                                            var4 = 7;
                                            var4 = var8[var4];
                                            var6 = var6.bind(var5)(var4);
                                            var4 = var6.isError;
                                            var4 = var4.bind(var6)(var7);
                                            if (!var4) {
                                                _fun10104_ip = 158;
                                                continue _fun10104
                                            }
                                        case 145:
                                            var6 = var0;
                                            var6 = var6.stack;
                                            var4 = var5 === var6;
                                        case 158:
                                            if (!var4) {
                                                _fun10104_ip = 220;
                                                continue _fun10104
                                            }
                                        case 161:
                                            var7 = var0;
                                            var4 = _closure4_slot0;
                                            var4 = var4.stack;
                                            var7.stack = var4;
                                            var4 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var3 = 4;
                                            var3 = var6[var3];
                                            var6 = var4.bind(var5)(var3);
                                            var5 = var6.addNonEnumerableProperty;
                                            var4 = 'framesToPop';
                                            var3 = 1;
                                            var3 = var5.bind(var6)(var7, var4, var3);
                                        case 220:
                                            var4 = var0;
                                            var3 = var1.TypeError;
                                            var3 = var4 instanceof var3;
                                            if (!var3) {
                                                _fun10104_ip = 387;
                                                continue _fun10104
                                            }
                                        case 239:
                                            var3 = var0;
                                            var4 = var3.message;
                                            var3 = 'Failed to fetch';
                                            if (!(var3 !== var4)) {
                                                _fun10104_ip = 293;
                                                continue _fun10104
                                            }
                                        case 257:
                                            var3 = var0;
                                            var4 = var3.message;
                                            var3 = 'Load failed';
                                            if (!(var3 !== var4)) {
                                                _fun10104_ip = 293;
                                                continue _fun10104
                                            }
                                        case 275:
                                            var3 = var0;
                                            var4 = var3.message;
                                            var3 = 'NetworkError when attempting to fetch resource.';
                                            if (!(var3 === var4)) {
                                                _fun10104_ip = 387;
                                                continue _fun10104
                                            }
                                        case 293: // try_start_0
                                            var4 = var1.URL;
                                            var2 = _closure4_slot1;
                                            var2 = var2.fetchData;
                                            var19 = var2.url;
                                            var3 = var4.prototype;
                                            var3 = Object.create(var3, {
                                                constructor: {
                                                    value: var4
                                                }
                                            });
                                            var20 = var3;
                                            var2 = new var20[var4](var19, var18);
                                            var3 = var2 instanceof Object ? var2 : var3;
                                            var2 = var0;
                                            var19 = var2.message;
                                            var17 = var3.host;
                                            var1 = var1.HermesInternal;
                                            var5 = var1.concat;
                                            var20 = '';
                                            var18 = ' (';
                                            var16 = ')';
                                            var1 = var20[var5](var19, var18, var17, var16, var15);
                                            var2.message = var1;
                                        case 383: // try_end0
                                            _fun10104_ip = 387;
                                            continue _fun10104;
                                        case 385: // catch_target0
                                            CatchBlockStart(arg_register = 1);
                                        case 387:
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
            case 146:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun10107: for (var _fun10107_ip = 0;;) switch (_fun10107_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun10107_ip = 286;
                            continue _fun10107
                        }
                    case 15:
                        var12 = arg1;
                        var4 = undefined;
                        var _closure4_slot0 = var4;
                        var5 = undefined;
                        var13 = undefined;
                        var2 = undefined;
                        var7 = null;
                        if (!(var7 != var3)) {
                            _fun10107_ip = 268;
                            continue _fun10107
                        }
                    case 39:
                        var6 = var3.body;
                        if (!var6) {
                            _fun10107_ip = 268;
                            continue _fun10107
                        }
                    case 50:
                        var6 = var3.body;
                        _closure4_slot0 = var6;
                        var3 = var6.getReader;
                        var5 = var3.bind(var6)();
                        var3 = global;
                        var10 = var3.setTimeout;
                        var9 = function() { // Environment: var1
                            var1 = _closure4_slot0;
                            var0 = var1.cancel;
                            var3 = var0.bind(var1)();
                            var2 = var3.then;
                            var1 = null;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var8 = 90000;
                        var9 = var10.bind(var4)(var9, var8);
                        var13 = true;
                        var10 = 5000;
                    case 102:
                        var2 = undefined;
                    case 104: // try_start_0 // try_start_1
                        var14 = var3.setTimeout;
                        var8 = function() { // Environment: var1
                            var1 = _closure4_slot0;
                            var0 = var1.cancel;
                            var3 = var0.bind(var1)();
                            var2 = var3.then;
                            var1 = null;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var2 = var14.bind(var4)(var8, var10);
                        var14 = var5;
                        var8 = var14.read;
                        var8 = var8.bind(var14)();
                        SaveGenerator(address = 138);
                    case 136:
                        return var8;
                    case 138:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 14);
                        if (var14) {
                            _fun10107_ip = 177;
                            continue _fun10107
                        }
                    case 144:
                        var14 = var8.done;
                        var16 = var3.clearTimeout;
                        var15 = var2;
                        var15 = var16.bind(var4)(var15);
                        if (!var14) {
                            _fun10107_ip = 175;
                            continue _fun10107
                        }
                    case 166:
                        var14 = var12;
                        var14 = var14.bind(var4)();
                        var13 = false;
                    case 175: // try_end0
                        _fun10107_ip = 198;
                        continue _fun10107;
                    case 177: // try_end1
                        var15 = var3.clearTimeout;
                        var14 = var2;
                        var14 = var15.bind(var4)(var14);
                        return var8;
                    case 194: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var13 = false;
                    case 198: // try_end2
                        var14 = var3.clearTimeout;
                        var8 = var2;
                        var8 = var14.bind(var4)(var8);
                        var8 = var13;
                        if (var8) {
                            _fun10107_ip = 102;
                            continue _fun10107
                        }
                    case 218:
                        var8 = var3.clearTimeout;
                        var8 = var8.bind(var4)(var9);
                        var8 = var5;
                        var5 = var8.releaseLock;
                        var5 = var5.bind(var8)();
                        var5 = var6.cancel;
                        var6 = var5.bind(var6)();
                        var5 = var6.then;
                        var1 = function() { // Environment: var1
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var5.bind(var6)(var7, var1);
                    case 268:
                        return var4;
                    case 271: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var3 = var3.clearTimeout;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 286:
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
        _fun10113: for (var _fun10113_ip = 0;;) switch (_fun10113_ip) {
            case 0:
                var0 = arg0;
                var3 = var0;
                var _closure2_slot0 = var0;
                var0 = undefined;
                var2 = undefined;
            case 16: // try_start_0
                var4 = var3;
                var3 = var4.clone;
                var2 = var3.bind(var4)();
            case 29: // try_end0
                var3 = var2;
                var2 = function arg0, arg1() {
                    var0 = undefined;
                    var3 = _closure1_slot5;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1 = function() { // Environment: var1
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
                    var1 = _closure2_slot0;
                    var2.response = var1;
                    var1 = 'fetch-body-resolved';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var1 = var2.bind(var0)(var3, var1);
                var1 = !var1;
                return var0;
            case 53: // catch_target0
                CatchBlockStart(arg_register = 1);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun10116: for (var _fun10116_ip = 0;;) switch (_fun10116_ip) {
            case 0:
                var2 = arg0;
                var1 = !var2;
                var0 = !var1;
                if (var1) {
                    _fun10116_ip = 23;
                    continue _fun10116
                }
            case 12:
                var3 = 'object';
                var1 = typeof var2;
                var0 = var3 === var1;
            case 23:
                if (!var0) {
                    _fun10116_ip = 39;
                    continue _fun10116
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
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun10117: for (var _fun10117_ip = 0;;) switch (_fun10117_ip) {
            case 0:
                var3 = arg0;
                var2 = 'string';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 !== var1)) {
                    _fun10117_ip = 79;
                    continue _fun10117
                }
            case 17:
                var2 = '';
                var1 = var2;
                if (!var3) {
                    _fun10117_ip = 76;
                    continue _fun10117
                }
            case 27:
                var6 = _closure1_slot7;
                var5 = undefined;
                var4 = 'url';
                var4 = var6.bind(var5)(var3, var4);
                if (var4) {
                    _fun10117_ip = 68;
                    continue _fun10117
                }
            case 49:
                var4 = var3.toString;
                if (!var4) {
                    _fun10117_ip = 66;
                    continue _fun10117
                }
            case 57:
                var4 = var3.toString;
                var2 = var4.bind(var3)();
            case 66:
                _fun10117_ip = 73;
                continue _fun10117;
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
    var _closure1_slot8 = var0;
    var1 = function arg0() {
        _fun10118: for (var _fun10118_ip = 0;;) switch (_fun10118_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun10118_ip = 212;
                    continue _fun10118
                }
            case 17:
                var1 = var5.length;
                var3 = 2;
                if (!(var3 !== var1)) {
                    _fun10118_ip = 112;
                    continue _fun10118
                }
            case 29:
                var4 = var5[var0];
                var1 = {};
                var6 = _closure1_slot8;
                var7 = undefined;
                var6 = var6.bind(var7)(var4);
                var1.url = var6;
                var6 = _closure1_slot7;
                var2 = 'method';
                var6 = var6.bind(var7)(var4, var2);
                var2 = 'GET';
                if (!var6) {
                    _fun10118_ip = 105;
                    continue _fun10118
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
                var3 = _closure1_slot8;
                var3 = var3.bind(var4)(var5);
                var0.url = var3;
                var3 = _closure1_slot7;
                var1 = 'method';
                var3 = var3.bind(var4)(var2, var1);
                var1 = 'GET';
                if (!var3) {
                    _fun10118_ip = 205;
                    continue _fun10118
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
    var _closure1_slot9 = var1;
    var0 = function arg0() {
        _fun10119: for (var _fun10119_ip = 0;;) switch (_fun10119_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var1 = undefined;
                var6 = _closure1_slot2;
                var5 = arg0;
                var4 = 2;
                var5 = var6.bind(var0)(var5, var4);
                var4 = 0;
                var2 = var5[var4];
                var4 = 1;
                var1 = var5[var4];
            case 38: // try_start_0
                var4 = var1;
                var5 = 'object';
                var4 = typeof var4;
                if (!(var5 === var4)) {
                    _fun10119_ip = 87;
                    continue _fun10119
                }
            case 52:
                var5 = var1;
                var4 = null;
                if (!(var4 !== var5)) {
                    _fun10119_ip = 87;
                    continue _fun10119
                }
            case 61:
                var5 = var1;
                var4 = 'headers';
                var4 = var4 in var5;
                if (!var4) {
                    _fun10119_ip = 87;
                    continue _fun10119
                }
            case 75:
                var4 = var1;
                var4 = var4.headers;
                if (var4) {
                    _fun10119_ip = 162;
                    continue _fun10119
                }
            case 87:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 7;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.isRequest;
                var3 = var2;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun10119_ip = 126;
                    continue _fun10119
                }
            case 124: // try_end0
                _fun10119_ip = 200;
                continue _fun10119;
            case 126: // try_start_1
                var3 = global;
                var4 = var3.Headers;
                var8 = var2.headers;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var3;
                var2 = new var9[var4](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
            case 160: // try_end1
                return var2;
            case 162: // try_start_2
                var2 = global;
                var3 = var2.Headers;
                var8 = var1.headers;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
            case 196: // try_end2
                return var1;
            case 198: // catch_target0 // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 1);
            case 200:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 849, 983, 822, 821, 837, 827]);