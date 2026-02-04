// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun11036: for (var _fun11036_ip = 0;;) switch (_fun11036_ip) {
            case 0:
                var6 = arg0;
                var4 = undefined;
                var1 = undefined;
                var0 = undefined;
                var2 = undefined;
                var3 = arg1;
                var5 = var3.headers;
                var3 = function arg0() {
                    var3 = arg0;
                    var0 = {};
                    var _closure3_slot0 = var0;
                    var2 = var3.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = arg1;
                        var2[var0] = var1;
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var3.bind(var4)(var5);
            case 32: // try_start_0
                var8 = var0;
                var7 = var6;
                var7 = var8[var7];
                var5 = var7;
                if (var7) {
                    _fun11036_ip = 68;
                    continue _fun11036
                }
            case 48:
                var7 = var0;
                var8 = var6;
                var6 = var8.toLowerCase;
                var6 = var6.bind(var8)();
                var5 = var7[var6];
            case 68:
                var3 = var5;
                if (var5) {
                    _fun11036_ip = 76;
                    continue _fun11036
                }
            case 74:
                var3 = undefined;
            case 76:
                var2 = var3;
                if (!var3) {
                    _fun11036_ip = 94;
                    continue _fun11036
                }
            case 82:
                var3 = _closure1_slot5;
                var1 = var3.bind(var4)(var2);
            case 94: // try_end0
                _fun11036_ip = 98;
                continue _fun11036;
            case 96: // catch_target0
                CatchBlockStart(arg_register = 2);
            case 98:
                var2 = var0;
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        _fun11039: for (var _fun11039_ip = 0;;) switch (_fun11039_ip) {
            case 0:
                var0 = arg0;
                if (!var0) {
                    _fun11039_ip = 24;
                    continue _fun11039
                }
            case 6:
                var3 = var0["Content-Length"];
                if (var3) {
                    _fun11039_ip = 21;
                    continue _fun11039
                }
            case 15:
                var3 = var0["content-length"];
            case 21:
                if (var3) {
                    _fun11039_ip = 28;
                    continue _fun11039
                }
            case 24:
                var0 = undefined;
                return var0;
            case 28:
                var0 = global;
                var2 = var0.parseInt;
                var1 = undefined;
                var0 = 10;
                var0 = var2.bind(var1)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = '; ';
        var3 = var1.bind(var2)(var0);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun11041: for (var _fun11041_ip = 0;;) switch (_fun11041_ip) {
                case 0:
                    var0 = arg0;
                    var3 = arg1;
                    var2 = var3.split;
                    var1 = '=';
                    var4 = var2.bind(var3)(var1);
                    var3 = _closure1_slot2;
                    var2 = undefined;
                    var1 = 2;
                    var3 = var3.bind(var2)(var4, var1);
                    var1 = 0;
                    var2 = var3[var1];
                    var1 = 1;
                    var1 = var3[var1];
                    var3 = var2;
                    if (!var3) {
                        _fun11041_ip = 60;
                        continue _fun11041
                    }
                case 57:
                    var3 = var1;
                case 60:
                    if (!var3) {
                        _fun11041_ip = 67;
                        continue _fun11041
                    }
                case 63:
                    var0[var2] = var1;
                case 67:
                    return var0;
            }
        };
        var0 = {};
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun11042: for (var _fun11042_ip = 0;;) switch (_fun11042_ip) {
            case 0:
                var2 = arg0;
                var4 = arg2;
                var5 = var2.failedRequestStatusCodes;
                var3 = function arg0, arg1() {
                    var2 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        _fun11044: for (var _fun11044_ip = 0;;) switch (_fun11044_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = 'number';
                                var0 = typeof var2;
                                if (!(var1 !== var0)) {
                                    _fun11044_ip = 51;
                                    continue _fun11044
                                }
                            case 14:
                                var3 = _closure3_slot0;
                                var0 = 0;
                                var0 = var2[var0];
                                var0 = var3 >= var0;
                                if (!var0) {
                                    _fun11044_ip = 49;
                                    continue _fun11044
                                }
                            case 34:
                                var3 = _closure3_slot0;
                                var1 = 1;
                                var1 = var2[var1];
                                var0 = var3 <= var1;
                            case 49:
                                _fun11044_ip = 62;
                                continue _fun11044;
                            case 51:
                                var1 = _closure3_slot0;
                                var0 = var2 === var1;
                            case 62:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = undefined;
                var0 = arg1;
                var0 = var3.bind(var6)(var5, var0);
                if (!var0) {
                    _fun11042_ip = 50;
                    continue _fun11042
                }
            case 33:
                var2 = var2.failedRequestTargets;
                var1 = function arg0, arg1() {
                    var2 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        _fun11046: for (var _fun11046_ip = 0;;) switch (_fun11046_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = 'string';
                                var0 = typeof var3;
                                if (!(var1 !== var0)) {
                                    _fun11046_ip = 33;
                                    continue _fun11046
                                }
                            case 14:
                                var1 = var3.test;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var3)(var0);
                                _fun11046_ip = 50;
                                continue _fun11046;
                            case 33:
                                var2 = _closure3_slot0;
                                var1 = var2.includes;
                                var0 = var1.bind(var2)(var3);
                            case 50:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var6)(var2, var4);
            case 50:
                if (!var0) {
                    _fun11042_ip = 110;
                    continue _fun11042
                }
            case 53:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 1;
                var2 = var7[var1];
                var3 = var5.bind(var6)(var2);
                var2 = var3.isSentryRequestUrl;
                var1 = var7[var1];
                var5 = var5.bind(var6)(var1);
                var1 = var5.getClient;
                var1 = var1.bind(var5)();
                var1 = var2.bind(var3)(var4, var1);
                var0 = !var1;
            case 110:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun11047: for (var _fun11047_ip = 0;;) switch (_fun11047_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 1;
                var0 = var0[var6];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.getClient;
                var2 = var0.bind(var2)();
                var7 = undefined;
                if (!var2) {
                    _fun11047_ip = 86;
                    continue _fun11047
                }
            case 43:
                var0 = var5.error;
                var7 = undefined;
                if (!var0) {
                    _fun11047_ip = 86;
                    continue _fun11047
                }
            case 53:
                var4 = var5.error;
                var0 = global;
                var0 = var0.Error;
                var0 = var4 instanceof var0;
                var7 = undefined;
                if (!var0) {
                    _fun11047_ip = 86;
                    continue _fun11047
                }
            case 75:
                var0 = var5.error;
                var7 = var0.stack;
            case 86:
                var10 = undefined;
                if (!var7) {
                    _fun11047_ip = 121;
                    continue _fun11047
                }
            case 91:
                var10 = undefined;
                if (!var2) {
                    _fun11047_ip = 121;
                    continue _fun11047
                }
            case 96:
                var0 = var2.getOptions;
                var4 = var0.bind(var2)();
                var2 = var4.stackParser;
                var0 = 0;
                var10 = var2.bind(var4)(var7, var0, var6);
            case 121:
                var7 = var5.status;
                var4 = global;
                var0 = var4.HermesInternal;
                var2 = var0.concat;
                var0 = 'HTTP Client Error with status code: ';
                var7 = var2.bind(var0)(var7);
                var0 = {};
                var0.message = var7;
                var2 = {};
                var8 = {};
                var9 = 'Error';
                var8.type = var9;
                var8.value = var7;
                var7 = undefined;
                if (!var10) {
                    _fun11047_ip = 187;
                    continue _fun11047
                }
            case 177:
                var9 = {};
                var9.frames = var10;
                var7 = var9;
            case 187:
                var8.stacktrace = var7;
                var7 = new Array(1);
                var7[0] = var8;
                var2.values = var7;
                var0.exception = var2;
                var2 = {};
                var7 = var5.url;
                var2.url = var7;
                var7 = var5.method;
                var2.method = var7;
                var7 = var5.requestHeaders;
                var2.headers = var7;
                var7 = var5.requestCookies;
                var2.cookies = var7;
                var0.request = var2;
                var2 = {};
                var7 = {};
                var8 = var5.status;
                var7.status_code = var8;
                var8 = var5.responseHeaders;
                var7.headers = var8;
                var8 = var5.responseCookies;
                var7.cookies = var8;
                var9 = _closure1_slot4;
                var8 = var5.responseHeaders;
                var8 = var9.bind(var3)(var8);
                var7.body_size = var8;
                var2.response = var7;
                var0.contexts = var2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var2.bind(var3)(var1);
                var2 = var3.addExceptionMechanism;
                var1 = {};
                var6 = var5.type;
                var4 = var4.HermesInternal;
                var5 = var4.concat;
                var4 = 'auto.http.client.';
                var4 = var5.bind(var4)(var6);
                var1.type = var4;
                var4 = false;
                var1.handled = var4;
                var1 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        _fun11048: for (var _fun11048_ip = 0;;) switch (_fun11048_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.getClient;
                var4 = var0.bind(var1)();
                var1 = !var4;
                var0 = !var1;
                if (var1) {
                    _fun11048_ip = 73;
                    continue _fun11048
                }
            case 44:
                var1 = global;
                var2 = var1.Boolean;
                var1 = var4.getOptions;
                var1 = var1.bind(var4)();
                var1 = var1.sendDefaultPii;
                var0 = var2.bind(var3)(var1);
            case 73:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var3 = var3.Symbol;
    var6 = var3.toStringTag;
    var3 = {};
    var9 = 'Module';
    var3.value = var9;
    var3 = var7.bind(var8)(var2, var6, var3);
    var3 = 1;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        _fun11049: for (var _fun11049_ip = 0;;) switch (_fun11049_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun11049_ip = 23;
                    continue _fun11049
                }
            case 15:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun11049_ip = 27;
                    continue _fun11049
                }
            case 23:
                var4 = {};
                _fun11049_ip = 31;
                continue _fun11049;
            case 27:
                var4 = arguments[var0];
            case 31:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var0 = {};
                var5 = new Array(1);
                var6 = [500, 599];
                var5[0] = var6;
                var0.failedRequestStatusCodes = var5;
                var5 = new Array(1);
                var6 = /.*/;
                var5[0] = var6;
                var0.failedRequestTargets = var5;
                var0 = var2.bind(var3)(var0, var4);
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'HttpClient';
                var0.name = var2;
                var1 = function arg0() {
                    var3 = arg0;
                    var5 = _closure2_slot0;
                    var4 = function arg0, arg1() {
                        _fun11051: for (var _fun11051_ip = 0;;) switch (_fun11051_ip) {
                            case 0:
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var0 = arg1;
                                var _closure4_slot1 = var0;
                                var5 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var4 = 1;
                                var3 = var0[var4];
                                var0 = undefined;
                                var5 = var5.bind(var0)(var3);
                                var3 = var5.supportsNativeFetch;
                                var3 = var3.bind(var5)();
                                if (var3) {
                                    _fun11051_ip = 56;
                                    continue _fun11051
                                }
                            case 54:
                                return var0;
                            case 56:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var4];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.addFetchInstrumentationHandler;
                                var2 = function(arg0) { // Environment: var1
                                    _fun11052: for (var _fun11052_ip = 0;;) switch (_fun11052_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var4 = _closure1_slot0;
                                            var0 = _closure1_slot1;
                                            var7 = 1;
                                            var2 = var0[var7];
                                            var0 = undefined;
                                            var4 = var4.bind(var0)(var2);
                                            var2 = var4.getClient;
                                            var5 = var2.bind(var4)();
                                            var4 = _closure4_slot0;
                                            if (!(var5 === var4)) {
                                                _fun11052_ip = 136;
                                                continue _fun11052
                                            }
                                        case 49:
                                            var6 = var1.response;
                                            var8 = var1.args;
                                            var5 = var1.error;
                                            var1 = var1.virtualError;
                                            var4 = _closure1_slot2;
                                            var3 = 2;
                                            var3 = var4.bind(var0)(var8, var3);
                                            var4 = 0;
                                            var4 = var3[var4];
                                            var3 = var3[var7];
                                            if (!var6) {
                                                _fun11052_ip = 136;
                                                continue _fun11052
                                            }
                                        case 98:
                                            var2 = _closure4_slot1;
                                            if (var5) {
                                                _fun11052_ip = 108;
                                                continue _fun11052
                                            }
                                        case 105:
                                            var5 = var1;
                                        case 108:
                                            var1 = function arg0, arg1, arg2, arg3, arg4() {
                                                _fun11053: for (var _fun11053_ip = 0;;) switch (_fun11053_ip) {
                                                    case 0:
                                                        var5 = arg1;
                                                        var8 = arg2;
                                                        var4 = arg3;
                                                        var7 = _closure1_slot6;
                                                        var6 = var8.status;
                                                        var3 = var8.url;
                                                        var0 = undefined;
                                                        var2 = arg0;
                                                        var2 = var7.bind(var0)(var2, var6, var3);
                                                        if (!var2) {
                                                            _fun11053_ip = 321;
                                                            continue _fun11053
                                                        }
                                                    case 44:
                                                        if (var4) {
                                                            _fun11053_ip = 65;
                                                            continue _fun11053
                                                        }
                                                    case 47:
                                                        var2 = global;
                                                        var2 = var2.Request;
                                                        var2 = var5 instanceof var2;
                                                        var9 = var5;
                                                        if (var2) {
                                                            _fun11053_ip = 124;
                                                            continue _fun11053
                                                        }
                                                    case 65:
                                                        var2 = global;
                                                        var3 = var2.Request;
                                                        var3 = var5 instanceof var3;
                                                        if (!var3) {
                                                            _fun11053_ip = 92;
                                                            continue _fun11053
                                                        }
                                                    case 80:
                                                        var3 = var5.bodyUsed;
                                                        var9 = var5;
                                                        if (var3) {
                                                            _fun11053_ip = 124;
                                                            continue _fun11053
                                                        }
                                                    case 92:
                                                        var2 = var2.Request;
                                                        var3 = var2.prototype;
                                                        var3 = Object.create(var3, {
                                                            constructor: {
                                                                value: var2
                                                            }
                                                        });
                                                        var18 = var3;
                                                        var17 = var5;
                                                        var16 = var4;
                                                        var2 = new var18[var2](var17, var16, var15);
                                                        var9 = var2 instanceof Object ? var2 : var3;
                                                    case 124:
                                                        var2 = _closure1_slot8;
                                                        var2 = var2.bind(var0)();
                                                        var7 = undefined;
                                                        var6 = undefined;
                                                        var5 = undefined;
                                                        var4 = undefined;
                                                        if (!var2) {
                                                            _fun11053_ip = 215;
                                                            continue _fun11053
                                                        }
                                                    case 143:
                                                        var13 = _closure1_slot3;
                                                        var2 = 'Cookie';
                                                        var3 = var13.bind(var0)(var2, var9);
                                                        var2 = _closure1_slot2;
                                                        var14 = 2;
                                                        var2 = var2.bind(var0)(var3, var14);
                                                        var10 = 0;
                                                        var7 = var2[var10];
                                                        var12 = 1;
                                                        var5 = var2[var12];
                                                        var2 = 'Set-Cookie';
                                                        var13 = var13.bind(var0)(var2, var8);
                                                        var2 = _closure1_slot2;
                                                        var2 = var2.bind(var0)(var13, var14);
                                                        var6 = var2[var10];
                                                        var4 = var2[var12];
                                                    case 215:
                                                        var3 = _closure1_slot7;
                                                        var2 = {};
                                                        var10 = var9.url;
                                                        var2.url = var10;
                                                        var9 = var9.method;
                                                        var2.method = var9;
                                                        var8 = var8.status;
                                                        var2.status = var8;
                                                        var2.requestHeaders = var7;
                                                        var2.responseHeaders = var6;
                                                        var2.requestCookies = var5;
                                                        var2.responseCookies = var4;
                                                        var4 = arg4;
                                                        var2.error = var4;
                                                        var4 = 'fetch';
                                                        var2.type = var4;
                                                        var3 = var3.bind(var0)(var2);
                                                        var2 = _closure1_slot0;
                                                        var4 = _closure1_slot1;
                                                        var1 = 1;
                                                        var1 = var4[var1];
                                                        var2 = var2.bind(var0)(var1);
                                                        var1 = var2.captureEvent;
                                                        var1 = var1.bind(var2)(var3);
                                                    case 321:
                                                        return var0;
                                                }
                                            };
                                            var14 = undefined;
                                            var13 = var2;
                                            var12 = var4;
                                            var11 = var6;
                                            var10 = var3;
                                            var9 = var5;
                                            var1 = var14[var1](var13, var12, var11, var10, var9, var8);
                                        case 136:
                                            return var0;
                                    }
                                };
                                var1 = false;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3, var5);
                    var2 = _closure2_slot0;
                    var1 = function arg0, arg1() {
                        _fun11054: for (var _fun11054_ip = 0;;) switch (_fun11054_ip) {
                            case 0:
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var0 = arg1;
                                var _closure4_slot1 = var0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var0 = 1;
                                var3 = var3[var0];
                                var0 = undefined;
                                var3 = var4.bind(var0)(var3);
                                var4 = var3.GLOBAL_OBJ;
                                var3 = 'XMLHttpRequest';
                                var3 = var3 in var4;
                                if (var3) {
                                    _fun11054_ip = 60;
                                    continue _fun11054
                                }
                            case 58:
                                return var0;
                            case 60:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var2 = 2;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.addXhrInstrumentationHandler;
                                var1 = function(arg0) { // Environment: var1
                                    _fun11055: for (var _fun11055_ip = 0;;) switch (_fun11055_ip) {
                                        case 0:
                                            var11 = arg0;
                                            var0 = undefined;
                                            var10 = undefined;
                                            var5 = undefined;
                                            var7 = undefined;
                                            var9 = undefined;
                                            var6 = undefined;
                                            var3 = undefined;
                                            var12 = _closure1_slot0;
                                            var8 = _closure1_slot1;
                                            var4 = 1;
                                            var8 = var8[var4];
                                            var12 = var12.bind(var0)(var8);
                                            var8 = var12.getClient;
                                            var13 = var8.bind(var12)();
                                            var12 = _closure4_slot0;
                                            if (!(var13 === var12)) {
                                                _fun11055_ip = 261;
                                                continue _fun11055
                                            }
                                        case 64:
                                            var10 = var11.error;
                                            var5 = var11.virtualError;
                                            var12 = var11.xhr;
                                            var7 = var12;
                                            var13 = _closure1_slot0;
                                            var14 = _closure1_slot1;
                                            var11 = 2;
                                            var11 = var14[var11];
                                            var11 = var13.bind(var0)(var11);
                                            var11 = var11.SENTRY_XHR_DATA_KEY;
                                            var11 = var12[var11];
                                            var9 = var11;
                                            if (!var11) {
                                                _fun11055_ip = 261;
                                                continue _fun11055
                                            }
                                        case 123:
                                            var6 = var9.method;
                                            var3 = var9.request_headers;
                                        case 135: // try_start_0
                                            var9 = _closure4_slot1;
                                            var8 = var7;
                                            var7 = var6;
                                            var6 = var3;
                                            var3 = var10;
                                            if (var10) {
                                                _fun11055_ip = 157;
                                                continue _fun11055
                                            }
                                        case 154:
                                            var3 = var5;
                                        case 157:
                                            var15 = var3;
                                            var3 = function arg0, arg1, arg2, arg3, arg4() {
                                                _fun11056: for (var _fun11056_ip = 0;;) switch (_fun11056_ip) {
                                                    case 0:
                                                        var8 = arg1;
                                                        var7 = var8;
                                                        var2 = arg3;
                                                        var0 = undefined;
                                                        var6 = undefined;
                                                        var4 = undefined;
                                                        var5 = undefined;
                                                        var3 = undefined;
                                                        var11 = _closure1_slot6;
                                                        var10 = var8.status;
                                                        var9 = var8.responseURL;
                                                        var8 = arg0;
                                                        var8 = var11.bind(var0)(var8, var10, var9);
                                                        if (!var8) {
                                                            _fun11056_ip = 256;
                                                            continue _fun11056
                                                        }
                                                    case 53:
                                                        var8 = _closure1_slot8;
                                                        var8 = var8.bind(var0)();
                                                        if (!var8) {
                                                            _fun11056_ip = 157;
                                                            continue _fun11056
                                                        }
                                                    case 64: // try_start_0
                                                        var12 = var7;
                                                        var11 = var12.getResponseHeader;
                                                        var10 = 'Set-Cookie';
                                                        var10 = var11.bind(var12)(var10);
                                                        var9 = var10;
                                                        if (var10) {
                                                            _fun11056_ip = 108;
                                                            continue _fun11056
                                                        }
                                                    case 90:
                                                        var12 = var7;
                                                        var11 = var12.getResponseHeader;
                                                        var10 = 'set-cookie';
                                                        var9 = var11.bind(var12)(var10);
                                                    case 108:
                                                        var8 = var9;
                                                        if (var9) {
                                                            _fun11056_ip = 116;
                                                            continue _fun11056
                                                        }
                                                    case 114:
                                                        var8 = undefined;
                                                    case 116:
                                                        var3 = var8;
                                                        if (!var8) {
                                                            _fun11056_ip = 131;
                                                            continue _fun11056
                                                        }
                                                    case 122:
                                                        var8 = _closure1_slot5;
                                                        var4 = var8.bind(var0)(var3);
                                                    case 131: // try_end0
                                                        _fun11056_ip = 135;
                                                        continue _fun11056;
                                                    case 133: // catch_target0
                                                        CatchBlockStart(arg_register = 3);
                                                    case 135: // try_start_1
                                                        var8 = var7;
                                                        var3 = function arg0() {
                                                            _fun11057: for (var _fun11057_ip = 0;;) switch (_fun11057_ip) {
                                                                case 0:
                                                                    var1 = arg0;
                                                                    var0 = var1.getAllResponseHeaders;
                                                                    var2 = var0.bind(var1)();
                                                                    if (var2) {
                                                                        _fun11057_ip = 20;
                                                                        continue _fun11057
                                                                    }
                                                                case 16:
                                                                    var0 = {};
                                                                    return var0;
                                                                case 20:
                                                                    var1 = var2.split;
                                                                    var0 = '\r\n';
                                                                    var3 = var1.bind(var2)(var0);
                                                                    var2 = var3.reduce;
                                                                    var1 = function(arg0, arg1) { // Environment: var0
                                                                        _fun11058: for (var _fun11058_ip = 0;;) switch (_fun11058_ip) {
                                                                            case 0:
                                                                                var0 = arg0;
                                                                                var3 = arg1;
                                                                                var2 = var3.split;
                                                                                var1 = ': ';
                                                                                var4 = var2.bind(var3)(var1);
                                                                                var3 = _closure1_slot2;
                                                                                var2 = undefined;
                                                                                var1 = 2;
                                                                                var3 = var3.bind(var2)(var4, var1);
                                                                                var1 = 0;
                                                                                var2 = var3[var1];
                                                                                var1 = 1;
                                                                                var1 = var3[var1];
                                                                                var3 = var2;
                                                                                if (!var3) {
                                                                                    _fun11058_ip = 62;
                                                                                    continue _fun11058
                                                                                }
                                                                            case 59:
                                                                                var3 = var1;
                                                                            case 62:
                                                                                if (!var3) {
                                                                                    _fun11058_ip = 69;
                                                                                    continue _fun11058
                                                                                }
                                                                            case 65:
                                                                                var0[var2] = var1;
                                                                            case 69:
                                                                                return var0;
                                                                        }
                                                                    };
                                                                    var0 = {};
                                                                    var0 = var2.bind(var3)(var1, var0);
                                                                    return var0;
                                                            }
                                                        };
                                                        var5 = var3.bind(var0)(var8);
                                                    case 150: // try_end1
                                                        _fun11056_ip = 154;
                                                        continue _fun11056;
                                                    case 152: // catch_target1
                                                        CatchBlockStart(arg_register = 3);
                                                    case 154:
                                                        var6 = var2;
                                                    case 157:
                                                        var3 = _closure1_slot7;
                                                        var2 = {};
                                                        var8 = var7.responseURL;
                                                        var2.url = var8;
                                                        var8 = arg2;
                                                        var2.method = var8;
                                                        var7 = var7.status;
                                                        var2.status = var7;
                                                        var2.requestHeaders = var6;
                                                        var2.responseHeaders = var5;
                                                        var2.responseCookies = var4;
                                                        var4 = arg4;
                                                        var2.error = var4;
                                                        var4 = 'xhr';
                                                        var2.type = var4;
                                                        var3 = var3.bind(var0)(var2);
                                                        var2 = _closure1_slot0;
                                                        var4 = _closure1_slot1;
                                                        var1 = 1;
                                                        var1 = var4[var1];
                                                        var2 = var2.bind(var0)(var1);
                                                        var1 = var2.captureEvent;
                                                        var1 = var1.bind(var2)(var3);
                                                    case 256:
                                                        return var0;
                                                }
                                            };
                                            var20 = undefined;
                                            var19 = var9;
                                            var18 = var8;
                                            var17 = var7;
                                            var16 = var6;
                                            var3 = var20[var3](var19, var18, var17, var16, var15, var14);
                                        case 185: // try_end0
                                            _fun11055_ip = 261;
                                            continue _fun11055;
                                        case 187: // catch_target0
                                            CatchBlockStart(arg_register = 1);
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var3 = 3;
                                            var3 = var6[var3];
                                            var3 = var5.bind(var0)(var3);
                                            var3 = var3.DEBUG_BUILD;
                                            if (!var3) {
                                                _fun11055_ip = 261;
                                                continue _fun11055
                                            }
                                        case 218:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var2 = var2[var4];
                                            var2 = var3.bind(var0)(var2);
                                            var4 = var2.debug;
                                            var3 = var4.warn;
                                            var2 = var1;
                                            var1 = 'Error while extracting response event form XHR response';
                                            var1 = var3.bind(var4)(var1, var2);
                                        case 261:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var1 = var1.bind(var0)(var3, var2);
                    return var0;
                };
                var0.setup = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.httpClientIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 817, 1030, 1073]);