// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function(arg0) { // Original name: winterCGHeadersToDict, environment: var1
        _fun9495: for (var _fun9495_ip = 0;;) switch (_fun9495_ip) {
            case 0:
                var2 = arg0;
                var3 = {};
                var0 = var3;
                var _closure2_slot0 = var3;
            case 14: // try_start_0
                var3 = var2;
                var2 = var3.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun9496: for (var _fun9496_ip = 0;;) switch (_fun9496_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = 'string';
                            var0 = typeof var2;
                            if (!(var1 === var0)) {
                                _fun9496_ip = 28;
                                continue _fun9496
                            }
                        case 14:
                            var1 = _closure2_slot0;
                            var0 = arg1;
                            var1[var0] = var2;
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 32: // try_end0
                _fun9495_ip = 36;
                continue _fun9495;
            case 34: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 36:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var4 = function(arg0) { // Original name: headersToDict, environment: var1
        _fun9497: for (var _fun9497_ip = 0;;) switch (_fun9497_ip) {
            case 0:
                var2 = arg0;
                var0 = undefined;
                var3 = global;
                var6 = var3.Object;
                var5 = var6.create;
                var4 = null;
                var4 = var5.bind(var6)(var4);
                var0 = var4;
                var _closure2_slot0 = var4;
            case 34: // try_start_0
                var4 = var3.Object;
                var3 = var4.entries;
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun9498: for (var _fun9498_ip = 0;;) switch (_fun9498_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var0 = undefined;
                            var2 = arg0;
                            var1 = 2;
                            var2 = var3.bind(var0)(var2, var1);
                            var1 = 0;
                            var3 = var2[var1];
                            var1 = 1;
                            var2 = var2[var1];
                            var4 = 'string';
                            var1 = typeof var2;
                            if (!(var4 === var1)) {
                                _fun9498_ip = 56;
                                continue _fun9498
                            }
                        case 45:
                            var1 = _closure2_slot0;
                            var1[var3] = var2;
                        case 56:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 66: // try_end0
                _fun9497_ip = 70;
                continue _fun9497;
            case 68: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 70:
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var5 = function(arg0) { // Original name: extractQueryParamsFromUrl, environment: var1
        _fun9499: for (var _fun9499_ip = 0;;) switch (_fun9499_ip) {
            case 0:
                var3 = arg0;
                var1 = var3;
                var0 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun9499_ip = 15;
                    continue _fun9499
                }
            case 13:
                return var0;
            case 15: // try_start_0
                var3 = global;
                var5 = var3.URL;
                var7 = var1;
                var1 = var5.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var6 = 'http://s.io';
                var8 = var3;
                var1 = new var8[var5](var7, var6, var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var4 = var1.search;
                var3 = var4.slice;
                var1 = 1;
                var1 = var3.bind(var4)(var1);
                var2 = var1;
                var3 = var1.length;
                var1 = undefined;
                if (!var3) {
                    _fun9499_ip = 87;
                    continue _fun9499
                }
            case 84:
                var1 = var2;
            case 87: // try_end0
                return var1;
            case 89: // catch_target0
                CatchBlockStart(arg_register = 1);
                return var0;
        }
    };
    var _closure1_slot4 = var5;
    var6 = arg6;
    var0 = 0;
    var7 = var6[var0];
    var6 = arg1;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot0 = var6;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var6 = var6.Symbol;
    var7 = var6.toStringTag;
    var6 = {};
    var10 = 'Module';
    var6.value = var10;
    var6 = var8.bind(var9)(var2, var7, var6);
    var6 = ['auth', 'token', 'secret', 'cookie', '-user', 'password', 'key'];
    var _closure1_slot1 = var6;
    var2.extractQueryParamsFromUrl = var5;
    var2.headersToDict = var4;
    var4 = function(arg0) { // Original name: httpHeadersToSpanAttributes, environment: var1
        _fun9500: for (var _fun9500_ip = 0;;) switch (_fun9500_ip) {
            case 0:
                var8 = undefined;
                var5 = undefined;
                var2 = arg0;
                var0 = undefined;
                var6 = arguments.length;
                var4 = 1;
                var6 = var6 > var4;
                if (!var6) {
                    _fun9500_ip = 32;
                    continue _fun9500
                }
            case 24:
                var7 = arguments[var4];
                var6 = var8 !== var7;
            case 32:
                var3 = var6;
                if (!var6) {
                    _fun9500_ip = 42;
                    continue _fun9500
                }
            case 38:
                var3 = arguments[var4];
            case 42:
                var _closure2_slot0 = var3;
                var3 = {};
                var0 = var3;
                var _closure2_slot1 = var3;
            case 55: // try_start_0
                var3 = global;
                var4 = var3.Object;
                var3 = var4.entries;
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun9501: for (var _fun9501_ip = 0;;) switch (_fun9501_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var0 = undefined;
                            var4 = arg0;
                            var2 = 2;
                            var5 = var5.bind(var0)(var4, var2);
                            var2 = 0;
                            var4 = var5[var2];
                            var2 = 1;
                            var5 = var5[var2];
                            if (!(var0 !== var5)) {
                                _fun9501_ip = 222;
                                continue _fun9501
                            }
                        case 43:
                            var2 = var4.toLowerCase;
                            var7 = var2.bind(var4)();
                            var _closure3_slot0 = var7;
                            var4 = _closure2_slot0;
                            if (var4) {
                                _fun9501_ip = 92;
                                continue _fun9501
                            }
                        case 67:
                            var6 = _closure1_slot1;
                            var4 = var6.some;
                            var3 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = var4.bind(var6)(var3);
                            if (!var3) {
                                _fun9501_ip = 92;
                                continue _fun9501
                            }
                        case 90:
                            return var0;
                        case 92:
                            var6 = var7.replace;
                            var4 = /-/g;
                            var3 = '_';
                            var7 = var6.bind(var7)(var4, var3);
                            var4 = global;
                            var3 = var4.HermesInternal;
                            var6 = var3.concat;
                            var3 = 'http.request.header.';
                            var3 = var6.bind(var3)(var7);
                            var6 = var4.Array;
                            var4 = var6.isArray;
                            var4 = var4.bind(var6)(var5);
                            if (var4) {
                                _fun9501_ip = 185;
                                continue _fun9501
                            }
                        case 164:
                            var6 = 'string';
                            var4 = typeof var5;
                            if (!(var6 === var4)) {
                                _fun9501_ip = 222;
                                continue _fun9501
                            }
                        case 175:
                            var4 = _closure2_slot1;
                            var4[var3] = var5;
                            _fun9501_ip = 222;
                            continue _fun9501;
                        case 185:
                            var2 = _closure2_slot1;
                            var4 = var5.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun9503: for (var _fun9503_ip = 0;;) switch (_fun9503_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = null;
                                        var0 = var3;
                                        if (!(var1 != var0)) {
                                            _fun9503_ip = 27;
                                            continue _fun9503
                                        }
                                    case 12:
                                        var1 = global;
                                        var2 = var1.String;
                                        var1 = undefined;
                                        var0 = var2.bind(var1)(var3);
                                    case 27:
                                        return var0;
                                }
                            };
                            var5 = var4.bind(var5)(var1);
                            var4 = var5.join;
                            var1 = ';';
                            var1 = var4.bind(var5)(var1);
                            var2[var3] = var1;
                        case 222:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 89: // try_end0
                _fun9500_ip = 93;
                continue _fun9500;
            case 91: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 93:
                return var0;
        }
    };
    var2.httpHeadersToSpanAttributes = var4;
    var4 = function(arg0) { // Original name: httpRequestToRequestData, environment: var1
        _fun9504: for (var _fun9504_ip = 0;;) switch (_fun9504_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.headers;
                if (var5) {
                    _fun9504_ip = 14;
                    continue _fun9504
                }
            case 12:
                var5 = {};
            case 14:
                var0 = var5["x-forwarded-host"];
                var4 = undefined;
                var6 = 'string';
                var0 = typeof var0;
                var2 = undefined;
                if (!(var6 === var0)) {
                    _fun9504_ip = 41;
                    continue _fun9504
                }
            case 35:
                var2 = var5["x-forwarded-host"];
            case 41:
                if (var2) {
                    _fun9504_ip = 68;
                    continue _fun9504
                }
            case 44:
                var0 = var5.host;
                var1 = typeof var0;
                var0 = undefined;
                if (!(var6 === var1)) {
                    _fun9504_ip = 65;
                    continue _fun9504
                }
            case 59:
                var0 = var5.host;
            case 65:
                var2 = var0;
            case 68:
                var0 = var5["x-forwarded-proto"];
                var0 = typeof var0;
                var1 = undefined;
                if (!(var6 === var0)) {
                    _fun9504_ip = 89;
                    continue _fun9504
                }
            case 83:
                var1 = var5["x-forwarded-proto"];
            case 89:
                if (var1) {
                    _fun9504_ip = 98;
                    continue _fun9504
                }
            case 92:
                var1 = var3.protocol;
            case 98:
                if (var1) {
                    _fun9504_ip = 142;
                    continue _fun9504
                }
            case 101:
                var6 = var3.socket;
                var0 = null;
                var8 = var0 != var6;
                var7 = 'http';
                var0 = var7;
                if (!var8) {
                    _fun9504_ip = 139;
                    continue _fun9504
                }
            case 123:
                var6 = var6.encrypted;
                var0 = var7;
                if (!var6) {
                    _fun9504_ip = 139;
                    continue _fun9504
                }
            case 135:
                var0 = 'https';
            case 139:
                var1 = var0;
            case 142:
                var7 = var3.url;
                if (var7) {
                    _fun9504_ip = 154;
                    continue _fun9504
                }
            case 150:
                var7 = '';
            case 154:
                var0 = {};
                var0.url = var7;
                var0.host = var2;
                var0.protocol = var1;
                var10 = var0.url;
                var9 = var0.protocol;
                var8 = var0.host;
                var0 = null;
                if (!(var0 != var10)) {
                    _fun9504_ip = 214;
                    continue _fun9504
                }
            case 193:
                var1 = var10.startsWith;
                var0 = 'http';
                var0 = var1.bind(var10)(var0);
                var6 = var10;
                if (var0) {
                    _fun9504_ip = 260;
                    continue _fun9504
                }
            case 214:
                var6 = undefined;
                if (!var10) {
                    _fun9504_ip = 260;
                    continue _fun9504
                }
            case 219:
                var6 = undefined;
                if (!var8) {
                    _fun9504_ip = 260;
                    continue _fun9504
                }
            case 224:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var15 = '';
                var13 = '://';
                var14 = var9;
                var12 = var8;
                var11 = var10;
                var6 = var15[var2](var14, var13, var12, var11, var10);
            case 260:
                var1 = var3.body;
                if (var1) {
                    _fun9504_ip = 270;
                    continue _fun9504
                }
            case 268:
                var1 = undefined;
            case 270:
                var2 = var3.cookies;
                var0 = {};
                var0.url = var6;
                var3 = var3.method;
                var0.method = var3;
                var6 = _closure1_slot4;
                var6 = var6.bind(var4)(var7);
                var0.query_string = var6;
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var5);
                var0.headers = var3;
                var0.cookies = var2;
                var0.data = var1;
                return var0;
        }
    };
    var2.httpRequestToRequestData = var4;
    var2.winterCGHeadersToDict = var3;
    var1 = function(arg0) { // Original name: winterCGRequestToRequestData, environment: var1
        var2 = arg0;
        var1 = _closure1_slot2;
        var0 = var2.headers;
        var4 = undefined;
        var1 = var1.bind(var4)(var0);
        var0 = {};
        var5 = var2.method;
        var0.method = var5;
        var5 = var2.url;
        var0.url = var5;
        var3 = _closure1_slot4;
        var2 = var2.url;
        var2 = var3.bind(var4)(var2);
        var0.query_string = var2;
        var0.headers = var1;
        return var0;
    };
    var2.winterCGRequestToRequestData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);