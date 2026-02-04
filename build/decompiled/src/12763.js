// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var2.default = var0;
    var3 = /^(image)\\/.*$ / i;
    var _closure1_slot3 = var3;
    var3 = {};
    var _closure1_slot4 = var3;
    var1 = function() {
        _fun97697: for (var _fun97697_ip = 0;;) switch (_fun97697_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var2 = 0;
                if (!(var1 > var2)) {
                    _fun97697_ip = 23;
                    continue _fun97697
                }
            case 15:
                var1 = arguments[var2];
                if (!(var4 === var1)) {
                    _fun97697_ip = 27;
                    continue _fun97697
                }
            case 23:
                var1 = {};
                _fun97697_ip = 31;
                continue _fun97697;
            case 27:
                var1 = arguments[var2];
            case 31:
                var _closure2_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun97698: for (var _fun97698_ip = 0;;) switch (_fun97698_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var0 = function arg0, arg1() {
                                _fun97699: for (var _fun97699_ip = 0;;) switch (_fun97699_ip) {
                                    case 0:
                                        var1 = arg1;
                                        var0 = _closure3_slot1;
                                        var0 = var0.ignoreUrls;
                                        if (!var0) {
                                            _fun97699_ip = 48;
                                            continue _fun97699
                                        }
                                    case 19:
                                        var0 = _closure3_slot1;
                                        var3 = var0.ignoreUrls;
                                        var2 = var3.test;
                                        var0 = var1._url;
                                        var0 = var2.bind(var3)(var0);
                                        if (var0) {
                                            _fun97699_ip = 112;
                                            continue _fun97699
                                        }
                                    case 48:
                                        var0 = _closure3_slot3;
                                        var0 = var0 + 1;
                                        _closure3_slot3 = var0;
                                        var1._trackingName = var0;
                                        var3 = _closure3_slot4;
                                        var2 = _closure3_slot3;
                                        var0 = {};
                                        var5 = arg0;
                                        var0.data = var5;
                                        var0.xhr = var1;
                                        var5 = _closure3_slot0;
                                        var4 = var5.startTimer;
                                        var4 = var4.bind(var5)();
                                        var0.stopTimer = var4;
                                        var3[var2] = var0;
                                        _fun97699_ip = 120;
                                        continue _fun97699;
                                    case 112:
                                        var0 = true;
                                        var1._skipReactotron = var0;
                                    case 120:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot5 = var0;
                            var0 = function arg0, arg1, arg2, arg3, arg4, arg5() {
                                _fun97700: for (var _fun97700_ip = 0;;) switch (_fun97700_ip) {
                                    case 0:
                                        var3 = arg2;
                                        var8 = arg3;
                                        var4 = arg5;
                                        var1 = arg0;
                                        var _closure4_slot0 = var1;
                                        var _closure4_slot1 = var3;
                                        var _closure4_slot2 = var4;
                                        var1 = var4._skipReactotron;
                                        if (var1) {
                                            _fun97700_ip = 494;
                                            continue _fun97700
                                        }
                                    case 38:
                                        var7 = null;
                                        var _closure4_slot3 = var7;
                                        var1 = -1;
                                        var9 = var1;
                                        if (!var8) {
                                            _fun97700_ip = 71;
                                            continue _fun97700
                                        }
                                    case 56:
                                        var5 = var8.indexOf;
                                        var2 = '?';
                                        var9 = var5.bind(var8)(var2);
                                    case 71:
                                        var1 = var9 > var1;
                                        var5 = null;
                                        if (!var1) {
                                            _fun97700_ip = 138;
                                            continue _fun97700
                                        }
                                    case 80:
                                        var1 = {};
                                        _closure4_slot3 = var1;
                                        var6 = var8.substr;
                                        var2 = 1;
                                        var2 = var9 + var2;
                                        var9 = var6.bind(var8)(var2);
                                        var6 = var9.split;
                                        var2 = '&';
                                        var9 = var6.bind(var9)(var2);
                                        var6 = var9.forEach;
                                        var2 = function(arg0) { // Environment: var0
                                            _fun97701: for (var _fun97701_ip = 0;;) switch (_fun97701_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var1 = var2.split;
                                                    var0 = '=';
                                                    var3 = var1.bind(var2)(var0);
                                                    var2 = _closure1_slot2;
                                                    var0 = undefined;
                                                    var1 = 2;
                                                    var2 = var2.bind(var0)(var3, var1);
                                                    var1 = 0;
                                                    var3 = var2[var1];
                                                    var1 = 1;
                                                    var7 = var2[var1];
                                                    var1 = var3;
                                                    if (!var1) {
                                                        _fun97701_ip = 58;
                                                        continue _fun97701
                                                    }
                                                case 54:
                                                    var1 = var0 !== var7;
                                                case 58:
                                                    if (!var1) {
                                                        _fun97701_ip = 116;
                                                        continue _fun97701
                                                    }
                                                case 61:
                                                    var2 = _closure4_slot3;
                                                    var1 = global;
                                                    var4 = var1.decodeURIComponent;
                                                    var6 = var7.replace;
                                                    var5 = /\+/g;
                                                    var1 = ' ';
                                                    var1 = var6.bind(var7)(var5, var1);
                                                    var1 = var4.bind(var0)(var1);
                                                    var2[var3] = var1;
                                                case 116:
                                                    return var0;
                                            }
                                        };
                                        var2 = var6.bind(var9)(var2);
                                        var5 = var1;
                                    case 138:
                                        var6 = var4._trackingName;
                                        var2 = _closure3_slot4;
                                        var9 = var2[var6];
                                        if (var9) {
                                            _fun97700_ip = 168;
                                            continue _fun97700
                                        }
                                    case 158:
                                        var2 = {};
                                        var2.xhr = var4;
                                        var9 = var2;
                                    case 168:
                                        var2 = _closure3_slot4;
                                        var2[var6] = var7;
                                        var6 = var9.data;
                                        var2 = var9.stopTimer;
                                        var _closure4_slot4 = var2;
                                        var2 = {};
                                        if (var8) {
                                            _fun97700_ip = 208;
                                            continue _fun97700
                                        }
                                    case 196:
                                        var9 = var9.xhr;
                                        var8 = var9._url;
                                    case 208:
                                        var2.url = var8;
                                        var8 = var4._method;
                                        if (var8) {
                                            _fun97700_ip = 223;
                                            continue _fun97700
                                        }
                                    case 221:
                                        var8 = null;
                                    case 223:
                                        var2.method = var8;
                                        var2.data = var6;
                                        var6 = var4._headers;
                                        if (var6) {
                                            _fun97700_ip = 243;
                                            continue _fun97700
                                        }
                                    case 241:
                                        var6 = null;
                                    case 243:
                                        var2.headers = var6;
                                        var2.params = var5;
                                        var _closure4_slot5 = var2;
                                        var5 = var4.responseHeaders;
                                        if (!var5) {
                                            _fun97700_ip = 278;
                                            continue _fun97700
                                        }
                                    case 266:
                                        var2 = var4.responseHeaders;
                                        var5 = var2["content-type"];
                                    case 278:
                                        if (var5) {
                                            _fun97700_ip = 305;
                                            continue _fun97700
                                        }
                                    case 281:
                                        var2 = var4.responseHeaders;
                                        if (!var2) {
                                            _fun97700_ip = 302;
                                            continue _fun97700
                                        }
                                    case 290:
                                        var4 = var4.responseHeaders;
                                        var2 = var4["Content-Type"];
                                    case 302:
                                        var5 = var2;
                                    case 305:
                                        if (var5) {
                                            _fun97700_ip = 312;
                                            continue _fun97700
                                        }
                                    case 308:
                                        var5 = '';
                                    case 312:
                                        var2 = function arg0() {
                                            _fun97702: for (var _fun97702_ip = 0;;) switch (_fun97702_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var1 = var2;
                                                    var0 = '~~~ skipped ~~~';
                                                    if (!var2) {
                                                        _fun97702_ip = 45;
                                                        continue _fun97702
                                                    }
                                                case 15: // try_start_0
                                                    var2 = global;
                                                    var3 = var2.JSON;
                                                    var2 = var3.parse;
                                                    var0 = var2.bind(var3)(var1);
                                                case 34: // try_end0
                                                    _fun97702_ip = 45;
                                                    continue _fun97702;
                                                case 36: // catch_target0
                                                    CatchBlockStart(arg_register = 1);
                                                    var0 = _closure4_slot1;
                                                case 45:
                                                    var4 = {};
                                                    var4.body = var0;
                                                    var0 = _closure4_slot0;
                                                    var4.status = var0;
                                                    var0 = _closure4_slot2;
                                                    var0 = var0.responseHeaders;
                                                    if (var0) {
                                                        _fun97702_ip = 77;
                                                        continue _fun97702
                                                    }
                                                case 75:
                                                    var0 = null;
                                                case 77:
                                                    var4.headers = var0;
                                                    var3 = _closure3_slot0;
                                                    var2 = var3.apiResponse;
                                                    var1 = _closure4_slot5;
                                                    var6 = _closure4_slot4;
                                                    var0 = null;
                                                    if (!var6) {
                                                        _fun97702_ip = 118;
                                                        continue _fun97702
                                                    }
                                                case 108:
                                                    var6 = _closure4_slot4;
                                                    var5 = undefined;
                                                    var0 = var6.bind(var5)();
                                                case 118:
                                                    var0 = var2.bind(var3)(var1, var4, var0);
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var _closure4_slot6 = var2;
                                        var6 = typeof var3;
                                        var4 = 'string';
                                        if (!(var4 !== var6)) {
                                            _fun97700_ip = 345;
                                            continue _fun97700
                                        }
                                    case 334:
                                        var4 = 'object';
                                        if (!(var4 === var6)) {
                                            _fun97700_ip = 483;
                                            continue _fun97700
                                        }
                                    case 345:
                                        var4 = _closure3_slot2;
                                        var1 = var4.test;
                                        if (var5) {
                                            _fun97700_ip = 361;
                                            continue _fun97700
                                        }
                                    case 357:
                                        var5 = '';
                                    case 361:
                                        var1 = var1.bind(var4)(var5);
                                        if (var1) {
                                            _fun97700_ip = 483;
                                            continue _fun97700
                                        }
                                    case 369:
                                        var4 = 'blob';
                                        var1 = arg4;
                                        if (!(var4 === var1)) {
                                            _fun97700_ip = 402;
                                            continue _fun97700
                                        }
                                    case 380:
                                        var1 = global;
                                        var4 = var1.FileReader;
                                        var5 = 'undefined';
                                        var4 = typeof var4;
                                        if (!(var5 !== var4)) {
                                            _fun97700_ip = 402;
                                            continue _fun97700
                                        }
                                    case 399:
                                        if (var3) {
                                            _fun97700_ip = 411;
                                            continue _fun97700
                                        }
                                    case 402:
                                        var4 = undefined;
                                        var4 = var2.bind(var4)(var3);
                                        _fun97700_ip = 494;
                                        continue _fun97700;
                                    case 411:
                                        var1 = var1.FileReader;
                                        var4 = var1.prototype;
                                        var4 = Object.create(var4, {
                                            constructor: {
                                                value: var1
                                            }
                                        });
                                        var13 = var4;
                                        var1 = new var13[var1](var12);
                                        var1 = var1 instanceof Object ? var1 : var4;
                                        var _closure4_slot7 = var1;
                                        var5 = function() {
                                            var3 = _closure4_slot6;
                                            var0 = _closure4_slot7;
                                            var2 = var0.result;
                                            var0 = undefined;
                                            var2 = var3.bind(var0)(var2);
                                            var4 = _closure4_slot7;
                                            var3 = var4.removeEventListener;
                                            var2 = _closure4_slot8;
                                            var1 = 'loadend';
                                            var1 = var3.bind(var4)(var1, var2);
                                            return var0;
                                        };
                                        var _closure4_slot8 = var5;
                                        var4 = var1.addEventListener;
                                        var0 = 'loadend';
                                        var0 = var4.bind(var1)(var0, var5);
                                        var0 = var1.readAsText;
                                        var0 = var0.bind(var1)(var3);
                                        _fun97700_ip = 494;
                                        continue _fun97700;
                                    case 483:
                                        var1 = undefined;
                                        var0 = '';
                                        var0 = var2.bind(var1)(var0);
                                    case 494:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot6 = var0;
                            var0 = global;
                            var6 = var0.Object;
                            var5 = var6.assign;
                            var4 = _closure1_slot4;
                            var3 = _closure2_slot0;
                            var0 = {};
                            var0 = var5.bind(var6)(var0, var4, var3);
                            var _closure3_slot1 = var0;
                            var0 = var0.ignoreContentTypes;
                            if (var0) {
                                _fun97698_ip = 86;
                                continue _fun97698
                            }
                        case 82:
                            var0 = _closure1_slot3;
                        case 86:
                            var _closure3_slot2 = var0;
                            var0 = 1000;
                            var _closure3_slot3 = var0;
                            var0 = {};
                            var _closure3_slot4 = var0;
                            var0 = {};
                            var1 = function() {
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 1;
                                var4 = var3[var1];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var4);
                                var7 = var4.XHRInterceptor;
                                var6 = var7.setSendCallback;
                                var5 = _closure3_slot5;
                                var5 = var6.bind(var7)(var5);
                                var5 = var3[var1];
                                var5 = var2.bind(var0)(var5);
                                var6 = var5.XHRInterceptor;
                                var5 = var6.setResponseCallback;
                                var4 = _closure3_slot6;
                                var4 = var5.bind(var6)(var4);
                                var1 = var3[var1];
                                var1 = var2.bind(var0)(var1);
                                var2 = var1.XHRInterceptor;
                                var1 = var2.enableInterception;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var0.onConnect = var1;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 12764]);