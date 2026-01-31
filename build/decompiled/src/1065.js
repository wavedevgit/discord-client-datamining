// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function() {
        _fun10921: for (var _fun10921_ip = 0;;) switch (_fun10921_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.WINDOW;
                var1 = var1.XMLHttpRequest;
                if (!var1) {
                    _fun10921_ip = 159;
                    continue _fun10921
                }
            case 42:
                var1 = global;
                var2 = var1.XMLHttpRequest;
                var2 = var2.prototype;
                var7 = var1.Proxy;
                var9 = var2.open;
                var4 = {};
                var5 = function arg0, arg1, arg2() {
                    _fun10922: for (var _fun10922_ip = 0;;) switch (_fun10922_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var1 = arg2;
                            var _closure3_slot0 = var2;
                            var0 = global;
                            var5 = var0.Error;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var15 = var6;
                            var5 = new var15[var5](var14);
                            var5 = var5 instanceof Object ? var5 : var6;
                            var _closure3_slot1 = var5;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var12 = 1;
                            var8 = var6[var12];
                            var9 = undefined;
                            var10 = var7.bind(var9)(var8);
                            var8 = var10.timestampInSeconds;
                            var10 = var8.bind(var10)();
                            var8 = 1000;
                            var8 = var8 * var10;
                            var _closure3_slot2 = var8;
                            var6 = var6[var12];
                            var10 = var7.bind(var9)(var6);
                            var8 = var10.isString;
                            var7 = 0;
                            var6 = var1[var7];
                            var8 = var8.bind(var10)(var6);
                            var6 = undefined;
                            if (!var8) {
                                _fun10922_ip = 141;
                                continue _fun10922
                            }
                        case 127:
                            var8 = var1[var7];
                            var7 = var8.toUpperCase;
                            var6 = var7.bind(var8)();
                        case 141:
                            var11 = var1[var12];
                            var7 = var11;
                            var10 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var8 = var8[var12];
                            var10 = var10.bind(var9)(var8);
                            var8 = var10.isString;
                            var8 = var8.bind(var10)(var11);
                            if (var8) {
                                _fun10922_ip = 199;
                                continue _fun10922
                            }
                        case 179: // try_start_0
                            var10 = var7;
                            var8 = var10.toString;
                            var8 = var8.bind(var10)();
                        case 191: // try_end0
                            _fun10922_ip = 202;
                            continue _fun10922;
                        case 193: // catch_target0
                            CatchBlockStart(arg_register = 10);
                            var8 = undefined;
                            _fun10922_ip = 202;
                            continue _fun10922;
                        case 199:
                            var8 = var7;
                        case 202:
                            if (!var6) {
                                _fun10922_ip = 208;
                                continue _fun10922
                            }
                        case 205:
                            if (var8) {
                                _fun10922_ip = 221;
                                continue _fun10922
                            }
                        case 208:
                            var7 = var3.apply;
                            var7 = var7.bind(var3)(var2, var1);
                            return var7;
                        case 221:
                            var7 = _closure1_slot3;
                            var5 = {};
                            var5.method = var6;
                            var5.url = var8;
                            var9 = {};
                            var5.request_headers = var9;
                            var2[var7] = var5;
                            var5 = 'POST';
                            var5 = var5 === var6;
                            if (!var5) {
                                _fun10922_ip = 285;
                                continue _fun10922
                            }
                        case 260:
                            var7 = var8.match;
                            var6 = /sentry_key/;
                            var5 = var7.bind(var8)(var6);
                        case 285:
                            if (!var5) {
                                _fun10922_ip = 296;
                                continue _fun10922
                            }
                        case 288:
                            var5 = true;
                            var2.__sentry_own_request__ = var5;
                        case 296:
                            var7 = function() {
                                _fun10923: for (var _fun10923_ip = 0;;) switch (_fun10923_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var2 = undefined;
                                        var4 = _closure3_slot0;
                                        var3 = _closure1_slot3;
                                        var3 = var4[var3];
                                        var2 = var3;
                                        if (!var3) {
                                            _fun10923_ip = 172;
                                            continue _fun10923
                                        }
                                    case 31:
                                        var3 = _closure3_slot0;
                                        var4 = var3.readyState;
                                        var3 = 4;
                                        if (!(var3 === var4)) {
                                            _fun10923_ip = 172;
                                            continue _fun10923
                                        }
                                    case 51: // try_start_0
                                        var3 = var2;
                                        var2 = _closure3_slot0;
                                        var2 = var2.status;
                                        var3.status_code = var2;
                                    case 69: // try_end0
                                        _fun10923_ip = 73;
                                        continue _fun10923;
                                    case 71: // catch_target0
                                        CatchBlockStart(arg_register = 2);
                                    case 73:
                                        var4 = {};
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 1;
                                        var6 = var3[var1];
                                        var7 = var2.bind(var0)(var6);
                                        var6 = var7.timestampInSeconds;
                                        var7 = var6.bind(var7)();
                                        var6 = 1000;
                                        var6 = var6 * var7;
                                        var4.endTimestamp = var6;
                                        var6 = _closure3_slot2;
                                        var4.startTimestamp = var6;
                                        var6 = _closure3_slot0;
                                        var4.xhr = var6;
                                        var5 = _closure3_slot1;
                                        var4.virtualError = var5;
                                        var1 = var3[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.triggerHandlers;
                                        var1 = 'xhr';
                                        var1 = var2.bind(var3)(var1, var4);
                                    case 172:
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var7;
                            var5 = 'onreadystatechange';
                            var5 = var5 in var2;
                            if (!var5) {
                                _fun10922_ip = 333;
                                continue _fun10922
                            }
                        case 316:
                            var5 = var2.onreadystatechange;
                            var6 = 'function';
                            var5 = typeof var5;
                            if (!(var6 !== var5)) {
                                _fun10922_ip = 353;
                                continue _fun10922
                            }
                        case 333:
                            var6 = var2.addEventListener;
                            var5 = 'readystatechange';
                            var5 = var6.bind(var2)(var5, var7);
                            _fun10922_ip = 405;
                            continue _fun10922;
                        case 353:
                            var8 = var0.Proxy;
                            var14 = var2.onreadystatechange;
                            var5 = {};
                            var6 = function arg0, arg1, arg2() {
                                var3 = arg0;
                                var1 = _closure3_slot3;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                var2 = var3.apply;
                                var1 = arg1;
                                var0 = arg2;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var5.apply = var6;
                            var6 = var8.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var8
                                }
                            });
                            var15 = var6;
                            var13 = var5;
                            var5 = new var15[var8](var14, var13, var12);
                            var5 = var5 instanceof Object ? var5 : var6;
                            var2.onreadystatechange = var5;
                        case 405:
                            var6 = var0.Proxy;
                            var14 = var2.setRequestHeader;
                            var0 = {};
                            var4 = function arg0, arg1, arg2() {
                                _fun10925: for (var _fun10925_ip = 0;;) switch (_fun10925_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = arg1;
                                        var1 = arg2;
                                        var4 = _closure1_slot2;
                                        var9 = undefined;
                                        var0 = 2;
                                        var0 = var4.bind(var9)(var1, var0);
                                        var4 = 0;
                                        var6 = var0[var4];
                                        var10 = 1;
                                        var5 = var0[var10];
                                        var0 = _closure1_slot3;
                                        var0 = var2[var0];
                                        var4 = var0;
                                        if (!var4) {
                                            _fun10925_ip = 82;
                                            continue _fun10925
                                        }
                                    case 54:
                                        var11 = _closure1_slot0;
                                        var8 = _closure1_slot1;
                                        var8 = var8[var10];
                                        var11 = var11.bind(var9)(var8);
                                        var8 = var11.isString;
                                        var4 = var8.bind(var11)(var6);
                                    case 82:
                                        if (!var4) {
                                            _fun10925_ip = 113;
                                            continue _fun10925
                                        }
                                    case 85:
                                        var8 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var7 = var7[var10];
                                        var8 = var8.bind(var9)(var7);
                                        var7 = var8.isString;
                                        var4 = var7.bind(var8)(var5);
                                    case 113:
                                        if (!var4) {
                                            _fun10925_ip = 136;
                                            continue _fun10925
                                        }
                                    case 116:
                                        var4 = var0.request_headers;
                                        var0 = var6.toLowerCase;
                                        var0 = var0.bind(var6)();
                                        var4[var0] = var5;
                                    case 136:
                                        var0 = var3.apply;
                                        var0 = var0.bind(var3)(var2, var1);
                                        return var0;
                                }
                            };
                            var0.apply = var4;
                            var4 = var6.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var15 = var4;
                            var13 = var0;
                            var0 = new var15[var6](var14, var13, var12);
                            var0 = var0 instanceof Object ? var0 : var4;
                            var2.setRequestHeader = var0;
                            var0 = var3.apply;
                            var0 = var0.bind(var3)(var2, var1);
                            return var0;
                    }
                };
                var4.apply = var5;
                var5 = var7.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var5;
                var8 = var4;
                var4 = new var10[var7](var9, var8, var7);
                var4 = var4 instanceof Object ? var4 : var5;
                var2.open = var4;
                var5 = var1.Proxy;
                var9 = var2.send;
                var1 = {};
                var3 = function arg0, arg1, arg2() {
                    _fun10926: for (var _fun10926_ip = 0;;) switch (_fun10926_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var1 = arg2;
                            var4 = _closure1_slot3;
                            var6 = var2[var4];
                            if (var6) {
                                _fun10926_ip = 36;
                                continue _fun10926
                            }
                        case 23:
                            var4 = var3.apply;
                            var4 = var4.bind(var3)(var2, var1);
                            return var4;
                        case 36:
                            var4 = 0;
                            var7 = var1[var4];
                            var5 = undefined;
                            if (!(var5 !== var7)) {
                                _fun10926_ip = 58;
                                continue _fun10926
                            }
                        case 48:
                            var4 = var1[var4];
                            var6.body = var4;
                        case 58:
                            var6 = {};
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 1;
                            var8 = var7[var0];
                            var9 = var4.bind(var5)(var8);
                            var8 = var9.timestampInSeconds;
                            var9 = var8.bind(var9)();
                            var8 = 1000;
                            var8 = var8 * var9;
                            var6.startTimestamp = var8;
                            var6.xhr = var2;
                            var0 = var7[var0];
                            var5 = var4.bind(var5)(var0);
                            var4 = var5.triggerHandlers;
                            var0 = 'xhr';
                            var0 = var4.bind(var5)(var0, var6);
                            var0 = var3.apply;
                            var0 = var0.bind(var3)(var2, var1);
                            return var0;
                    }
                };
                var1.apply = var3;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = var3;
                var8 = var1;
                var1 = new var10[var5](var9, var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                var2.send = var1;
            case 159:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var4 = '__sentry_xhr_v3__';
    var _closure1_slot3 = var4;
    var2.SENTRY_XHR_DATA_KEY = var4;
    var3 = function arg0() {
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 1;
        var4 = var5[var2];
        var0 = undefined;
        var8 = var3.bind(var0)(var4);
        var7 = var8.addHandler;
        var4 = 'xhr';
        var6 = arg0;
        var6 = var7.bind(var8)(var4, var6);
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.maybeInstrument;
        var1 = _closure1_slot4;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.addXhrInstrumentationHandler = var3;
    var2.instrumentXHR = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 817, 1036]);