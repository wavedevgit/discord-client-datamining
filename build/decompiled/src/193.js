// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2718: for (var _fun2718_ip = 0;;) switch (_fun2718_ip) {
        case 0:
            var3 = global;
            var12 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var11 = dependencyMap;
            var _closure1_slot0 = var12;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var11;
            var0 = function arg0, arg1, arg2() {
                _fun2719: for (var _fun2719_ip = 0;;) switch (_fun2719_ip) {
                    case 0:
                        var3 = arg0;
                        var5 = arg2;
                        var1 = _closure1_slot8;
                        var2 = undefined;
                        var0 = arg1;
                        var8 = var1.bind(var2)(var0);
                        var1 = _closure1_slot7;
                        var0 = _closure1_slot13;
                        var0 = var0.bind(var2)();
                        if (var0) {
                            _fun2719_ip = 51;
                            continue _fun2719
                        }
                    case 38:
                        var0 = var8.apply;
                        var0 = var0.bind(var8)(var3, var5);
                        _fun2719_ip = 92;
                        continue _fun2719;
                    case 51:
                        var6 = global;
                        var7 = var6.Reflect;
                        var6 = var7.construct;
                        if (var5) {
                            _fun2719_ip = 71;
                            continue _fun2719
                        }
                    case 67:
                        var5 = new Array(0);
                    case 71:
                        var4 = _closure1_slot8;
                        var4 = var4.bind(var2)(var3);
                        var4 = var4.constructor;
                        var0 = var6.bind(var7)(var8, var5, var4);
                    case 92:
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function() {
                _fun2720: for (var _fun2720_ip = 0;;) switch (_fun2720_ip) {
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
                    case 70: // try_end0
                        _fun2720_ip = 74;
                        continue _fun2720;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot13 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot13 = var0;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var4);
            var8 = 0;
            var4 = var11[var8];
            var0 = undefined;
            var4 = var10.bind(var0)(var4);
            var _closure1_slot3 = var4;
            var7 = 1;
            var4 = var11[var7];
            var4 = var10.bind(var0)(var4);
            var _closure1_slot4 = var4;
            var6 = 2;
            var4 = var11[var6];
            var4 = var10.bind(var0)(var4);
            var _closure1_slot5 = var4;
            var5 = 3;
            var4 = var11[var5];
            var4 = var10.bind(var0)(var4);
            var _closure1_slot6 = var4;
            var4 = 4;
            var9 = var11[var4];
            var9 = var10.bind(var0)(var9);
            var _closure1_slot7 = var9;
            var9 = 5;
            var9 = var11[var9];
            var9 = var10.bind(var0)(var9);
            var _closure1_slot8 = var9;
            var9 = 6;
            var9 = var11[var9];
            var9 = var10.bind(var0)(var9);
            var _closure1_slot9 = var9;
            var9 = 7;
            var13 = var11[var9];
            var13 = var12.bind(var0)(var13);
            var13 = var13.default;
            var13 = var13.isAvailable;
            if (!var13) {
                _fun2718_ip = 242;
                continue _fun2718
            }
        case 218:
            var9 = var11[var9];
            var9 = var12.bind(var0)(var9);
            var12 = var9.default;
            var9 = var12.addNetworkingHandler;
            var9 = var9.bind(var12)();
        case 242:
            var9 = {
                'arraybuffer': null,
                'blob': null,
                'document': false,
                'json': true,
                'text': true,
                '': true
            };
            var13 = var3.ArrayBuffer;
            var12 = 'function';
            var13 = typeof var13;
            var13 = var12 === var13;
            var9.arraybuffer = var13;
            var3 = var3.Blob;
            var3 = typeof var3;
            var3 = var12 === var3;
            var9.blob = var3;
            var3 = false;
            var _closure1_slot10 = var9;
            var9 = 9;
            var12 = var11[var9];
            var13 = var10.bind(var0)(var12);
            var12 = function(arg0) { // Environment: var1
                var3 = function() {
                    var4 = this;
                    var3 = undefined;
                    var0 = undefined;
                    var5 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var5 = var5.bind(var3)(var4, var2);
                    var1 = _closure1_slot12;
                    var0 = arguments;
                    var0 = var1.bind(var3)(var4, var2, var0);
                    return var0;
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot9;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot6;
                var4 = {};
                var0 = 'onload';
                var4.key = var0;
                var0 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'load';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4.get = var0;
                var0 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'load';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4.set = var0;
                var0 = new Array(7);
                var0[0] = var4;
                var4 = {};
                var6 = 'onloadstart';
                var4.key = var6;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'loadstart';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4.get = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'loadstart';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4.set = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'onprogress';
                var4.key = var6;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'progress';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4.get = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'progress';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4.set = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'ontimeout';
                var4.key = var6;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'timeout';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4.get = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'timeout';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4.set = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'onerror';
                var4.key = var6;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'error';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4.get = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'error';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4.set = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'onabort';
                var4.key = var6;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'abort';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4.get = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'abort';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4.set = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'onloadend';
                var4.key = var6;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'loadend';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4.get = var6;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'loadend';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4.set = var5;
                var0[6] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var12 = var12.bind(var0)(var13);
            var _closure1_slot11 = var12;
            var9 = var11[var9];
            var9 = var10.bind(var0)(var9);
            var1 = function(arg0) { // Environment: var1
                var4 = function() {
                    var4 = this;
                    var0 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var3)(var4, var2);
                    var2 = 0;
                    var0.UNSENT = var2;
                    var4 = 1;
                    var0.OPENED = var4;
                    var4 = 2;
                    var0.HEADERS_RECEIVED = var4;
                    var4 = 3;
                    var0.LOADING = var4;
                    var4 = 4;
                    var0.DONE = var4;
                    var0.readyState = var2;
                    var0.status = var2;
                    var0.timeout = var2;
                    var2 = true;
                    var0.withCredentials = var2;
                    var2 = _closure1_slot11;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = var4;
                    var2 = new var8[var2](var7);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var0.upload = var2;
                    var4 = false;
                    var0._aborted = var4;
                    var0._hasError = var4;
                    var2 = null;
                    var0._method = var2;
                    var0._perfKey = var2;
                    var5 = '';
                    var0._response = var5;
                    var0._url = var2;
                    var0._timedOut = var4;
                    var0._incrementalEvents = var4;
                    var0._startTime = var2;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.default;
                    var0._performanceLogger = var1;
                    var1 = var0._reset;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var _closure2_slot0 = var4;
                var2 = _closure1_slot9;
                var3 = undefined;
                var1 = arg0;
                var1 = var2.bind(var3)(var4, var1);
                var2 = _closure1_slot6;
                var0 = {};
                var1 = '_reset';
                var0.key = var1;
                var1 = function() {
                    var2 = this;
                    var0 = var2.UNSENT;
                    var2.readyState = var0;
                    var0 = undefined;
                    var2.responseHeaders = var0;
                    var1 = 0;
                    var2.status = var1;
                    var1 = delete var2.responseURL;
                    var1 = null;
                    var2._requestId = var1;
                    var2._cachedResponse = var0;
                    var1 = false;
                    var2._hasError = var1;
                    var3 = {};
                    var2._headers = var3;
                    var3 = '';
                    var2._response = var3;
                    var2._responseType = var3;
                    var2._sent = var1;
                    var3 = {};
                    var2._lowerCaseResponseHeaders = var3;
                    var3 = var2._clearSubscriptions;
                    var3 = var3.bind(var2)();
                    var2._timedOut = var1;
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(32);
                var1[0] = var0;
                var0 = {};
                var5 = 'responseType';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var0 = var0._responseType;
                    return var0;
                };
                var0.get = var5;
                var5 = function arg0() {
                    _fun2743: for (var _fun2743_ip = 0;;) switch (_fun2743_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = this;
                            var2 = var0._sent;
                            if (var2) {
                                _fun2743_ip = 239;
                                continue _fun2743
                            }
                        case 18:
                            var3 = _closure1_slot10;
                            var2 = var3.hasOwnProperty;
                            var2 = var2.bind(var3)(var1);
                            if (var2) {
                                _fun2743_ip = 91;
                                continue _fun2743
                            }
                        case 39:
                            var2 = global;
                            var5 = var2.console;
                            var3 = var5.warn;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var6 = "The provided value '";
                            var2 = "' is not a valid 'responseType'.";
                            var2 = var7.bind(var6)(var1, var2);
                            var2 = var3.bind(var5)(var2);
                            _fun2743_ip = 235;
                            continue _fun2743;
                        case 91:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var3 = var3[var2];
                            var5 = undefined;
                            var7 = var6.bind(var5)(var3);
                            var3 = _closure1_slot10;
                            var6 = var3[var1];
                            if (var6) {
                                _fun2743_ip = 132;
                                continue _fun2743
                            }
                        case 124:
                            var3 = 'document';
                            var6 = var3 === var1;
                        case 132:
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var9 = var3.concat;
                            var8 = "The provided value '";
                            var3 = "' is unsupported in this environment.";
                            var3 = var9.bind(var8)(var1, var3);
                            var3 = var7.bind(var5)(var6, var3);
                            var3 = 'blob';
                            if (!(var3 === var1)) {
                                _fun2743_ip = 229;
                                continue _fun2743
                            }
                        case 177:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = var6[var2];
                            var4 = var3.bind(var5)(var2);
                            var2 = 7;
                            var2 = var6[var2];
                            var2 = var3.bind(var5)(var2);
                            var2 = var2.default;
                            var3 = var2.isAvailable;
                            var2 = 'Native module BlobModule is required for blob support';
                            var2 = var4.bind(var5)(var3, var2);
                        case 229:
                            var0._responseType = var1;
                        case 235:
                            var0 = undefined;
                            return var0;
                        case 239:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = "Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set after the request has been sent.";
                            var12 = var1;
                            var0 = new var12[var2](var11, var10);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0.set = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'responseText';
                var0.key = var5;
                var5 = function() {
                    _fun2744: for (var _fun2744_ip = 0;;) switch (_fun2744_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1._responseType;
                            var0 = '';
                            if (!(var0 !== var2)) {
                                _fun2744_ip = 31;
                                continue _fun2744
                            }
                        case 17:
                            var3 = var1._responseType;
                            var2 = 'text';
                            if (!(var2 === var3)) {
                                _fun2744_ip = 55;
                                continue _fun2744
                            }
                        case 31:
                            var3 = var1.readyState;
                            var2 = 3;
                            var2 = var3 < var2;
                            if (var2) {
                                _fun2744_ip = 53;
                                continue _fun2744
                            }
                        case 47:
                            var0 = var1._response;
                        case 53:
                            return var0;
                        case 55:
                            var0 = global;
                            var2 = var0.Error;
                            var4 = var1._responseType;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var1 = "The 'responseText' property is only available if 'responseType' is set to '' or 'text', but it is '";
                            var0 = "'.";
                            var6 = var3.bind(var1)(var4, var0);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var7 = var1;
                            var0 = new var7[var2](var6, var5);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0.get = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'response';
                var0.key = var5;
                var5 = function() {
                    _fun2745: for (var _fun2745_ip = 0;;) switch (_fun2745_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1.responseType;
                            var3 = '';
                            if (!(var3 !== var2)) {
                                _fun2745_ip = 467;
                                continue _fun2745
                            }
                        case 20:
                            var0 = 'text';
                            if (!(var0 !== var2)) {
                                _fun2745_ip = 467;
                                continue _fun2745
                            }
                        case 31:
                            var4 = var1.readyState;
                            var0 = 4;
                            if (!(var0 === var4)) {
                                _fun2745_ip = 463;
                                continue _fun2745
                            }
                        case 47:
                            var0 = var1._cachedResponse;
                            var4 = undefined;
                            if (!(var4 === var0)) {
                                _fun2745_ip = 455;
                                continue _fun2745
                            }
                        case 62:
                            var0 = 'document';
                            if (!(var0 !== var2)) {
                                _fun2745_ip = 439;
                                continue _fun2745
                            }
                        case 73:
                            var0 = 'arraybuffer';
                            if (!(var0 !== var2)) {
                                _fun2745_ip = 385;
                                continue _fun2745
                            }
                        case 84:
                            var0 = 'blob';
                            if (!(var0 !== var2)) {
                                _fun2745_ip = 154;
                                continue _fun2745
                            }
                        case 92:
                            var0 = 'json';
                            if (!(var0 === var2)) {
                                _fun2745_ip = 439;
                                continue _fun2745
                            }
                        case 103: // try_start_0
                            var0 = global;
                            var5 = var0.JSON;
                            var2 = var5.parse;
                            var0 = var1._response;
                            var0 = var2.bind(var5)(var0);
                            var1._cachedResponse = var0;
                        case 134: // try_end0
                            _fun2745_ip = 447;
                            continue _fun2745;
                        case 139: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var0 = null;
                            var1._cachedResponse = var0;
                            _fun2745_ip = 447;
                            continue _fun2745;
                        case 154:
                            var0 = var1._response;
                            var2 = 'object';
                            var0 = typeof var0;
                            if (!(var2 === var0)) {
                                _fun2745_ip = 183;
                                continue _fun2745
                            }
                        case 171:
                            var0 = var1._response;
                            if (var0) {
                                _fun2745_ip = 332;
                                continue _fun2745
                            }
                        case 183:
                            var0 = var1._response;
                            if (!(var3 === var0)) {
                                _fun2745_ip = 247;
                                continue _fun2745
                            }
                        case 193:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 7;
                            var0 = var5[var0];
                            var0 = var2.bind(var4)(var0);
                            var5 = var0.default;
                            var2 = var5.createFromParts;
                            var0 = new Array(0);
                            var0 = var2.bind(var5)(var0);
                            var1._cachedResponse = var0;
                            _fun2745_ip = 447;
                            continue _fun2745;
                        case 247:
                            var2 = global;
                            var5 = var2.Error;
                            var0 = var1._response;
                            var7 = var1._response;
                            var6 = var7.trim;
                            var8 = var6.bind(var7)();
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var6 = 'Invalid response for blob - expecting object, was ';
                            var2 = typeof var0;
                            var0 = ': ';
                            var11 = var7.bind(var6)(var2, var0, var8);
                            var2 = var5.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var12 = var2;
                            var0 = new var12[var5](var11, var10);
                            var0 = var0 instanceof Object ? var0 : var2;
                            throw var0;
                        case 332:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 7;
                            var0 = var5[var0];
                            var0 = var2.bind(var4)(var0);
                            var5 = var0.default;
                            var2 = var5.createFromOptions;
                            var0 = var1._response;
                            var0 = var2.bind(var5)(var0);
                            var1._cachedResponse = var0;
                            _fun2745_ip = 447;
                            continue _fun2745;
                        case 385:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 12;
                            var0 = var5[var0];
                            var4 = var2.bind(var4)(var0);
                            var2 = var4.toByteArray;
                            var0 = var1._response;
                            var0 = var2.bind(var4)(var0);
                            var0 = var0.buffer;
                            var1._cachedResponse = var0;
                            _fun2745_ip = 447;
                            continue _fun2745;
                        case 439:
                            var0 = null;
                            var1._cachedResponse = var0;
                        case 447:
                            var0 = var1._cachedResponse;
                            return var0;
                        case 455:
                            var0 = var1._cachedResponse;
                            return var0;
                        case 463:
                            var0 = null;
                            return var0;
                        case 467:
                            var2 = var1.readyState;
                            var0 = 3;
                            var2 = var2 < var0;
                            var0 = var3;
                            if (var2) {
                                _fun2745_ip = 504;
                                continue _fun2745
                            }
                        case 486:
                            var2 = var1._hasError;
                            var0 = var3;
                            if (var2) {
                                _fun2745_ip = 504;
                                continue _fun2745
                            }
                        case 498:
                            var0 = var1._response;
                        case 504:
                            return var0;
                    }
                };
                var0.get = var5;
                var1[3] = var0;
                var0 = {};
                var5 = '__didCreateRequest';
                var0.key = var5;
                var5 = function arg0() {
                    _fun2746: for (var _fun2746_ip = 0;;) switch (_fun2746_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = this;
                            var0._requestId = var5;
                            var2 = _closure2_slot0;
                            var2 = var2._interceptor;
                            if (!var2) {
                                _fun2746_ip = 94;
                                continue _fun2746
                            }
                        case 28:
                            var1 = _closure2_slot0;
                            var4 = var1._interceptor;
                            var3 = var4.requestSent;
                            var2 = var0._url;
                            if (var2) {
                                _fun2746_ip = 57;
                                continue _fun2746
                            }
                        case 53:
                            var2 = '';
                        case 57:
                            var1 = var0._method;
                            if (var1) {
                                _fun2746_ip = 72;
                                continue _fun2746
                            }
                        case 66:
                            var1 = 'GET';
                        case 72:
                            var7 = var0._headers;
                            var11 = var4;
                            var10 = var5;
                            var9 = var2;
                            var8 = var1;
                            var0 = var11[var3](var10, var9, var8, var7, var6);
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[4] = var0;
                var0 = {};
                var5 = '__didUploadProgress';
                var0.key = var5;
                var5 = function arg0, arg1, arg2() {
                    _fun2747: for (var _fun2747_ip = 0;;) switch (_fun2747_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1._requestId;
                            var0 = arg0;
                            if (!(var0 === var2)) {
                                _fun2747_ip = 127;
                                continue _fun2747
                            }
                        case 16:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 13;
                            var2 = var6[var2];
                            var5 = undefined;
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.dispatchTrustedEvent;
                            var1 = var1.upload;
                            var4 = _closure1_slot1;
                            var0 = 14;
                            var0 = var6[var0];
                            var6 = var4.bind(var5)(var0);
                            var5 = {};
                            var0 = true;
                            var5.lengthComputable = var0;
                            var0 = arg1;
                            var5.loaded = var0;
                            var0 = arg2;
                            var5.total = var0;
                            var0 = var6.prototype;
                            var4 = Object.create(var0, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var8 = 'progress';
                            var9 = var4;
                            var7 = var5;
                            var0 = new var9[var6](var8, var7, var6);
                            var0 = var0 instanceof Object ? var0 : var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 127:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[5] = var0;
                var0 = {};
                var5 = '__didReceiveResponse';
                var0.key = var5;
                var5 = function arg0, arg1, arg2, arg3() {
                    _fun2748: for (var _fun2748_ip = 0;;) switch (_fun2748_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var0 = arg2;
                            var3 = arg3;
                            var6 = this;
                            var1 = var6._requestId;
                            if (!(var5 === var1)) {
                                _fun2748_ip = 193;
                                continue _fun2748
                            }
                        case 28:
                            var2 = var6._perfKey;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun2748_ip = 63;
                                continue _fun2748
                            }
                        case 40:
                            var7 = var6._performanceLogger;
                            var2 = var7.stopTimespan;
                            var1 = var6._perfKey;
                            var1 = var2.bind(var7)(var1);
                        case 63:
                            var6.status = var4;
                            var1 = var6.setResponseHeaders;
                            var1 = var1.bind(var6)(var0);
                            var2 = var6.setReadyState;
                            var1 = var6.HEADERS_RECEIVED;
                            var1 = var2.bind(var6)(var1);
                            if (var3) {
                                _fun2748_ip = 115;
                                continue _fun2748
                            }
                        case 100:
                            var1 = '';
                            if (!(var1 !== var3)) {
                                _fun2748_ip = 115;
                                continue _fun2748
                            }
                        case 108:
                            var1 = delete var6.responseURL;
                            _fun2748_ip = 121;
                            continue _fun2748;
                        case 115:
                            var6.responseURL = var3;
                        case 121:
                            var2 = _closure2_slot0;
                            var2 = var2._interceptor;
                            if (!var2) {
                                _fun2748_ip = 193;
                                continue _fun2748
                            }
                        case 137:
                            var1 = _closure2_slot0;
                            var2 = var1._interceptor;
                            var1 = var2.responseReceived;
                            if (var3) {
                                _fun2748_ip = 162;
                                continue _fun2748
                            }
                        case 156:
                            var3 = var6._url;
                        case 162:
                            if (var3) {
                                _fun2748_ip = 169;
                                continue _fun2748
                            }
                        case 165:
                            var3 = '';
                        case 169:
                            if (var0) {
                                _fun2748_ip = 174;
                                continue _fun2748
                            }
                        case 172:
                            var0 = {};
                        case 174:
                            var12 = var2;
                            var11 = var5;
                            var10 = var3;
                            var9 = var4;
                            var8 = var0;
                            var0 = var12[var1](var11, var10, var9, var8, var7);
                        case 193:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[6] = var0;
                var0 = {};
                var5 = '__didReceiveData';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    _fun2749: for (var _fun2749_ip = 0;;) switch (_fun2749_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var4 = this;
                            var0 = var4._requestId;
                            if (!(var3 === var0)) {
                                _fun2749_ip = 88;
                                continue _fun2749
                            }
                        case 19:
                            var4._response = var2;
                            var0 = undefined;
                            var4._cachedResponse = var0;
                            var1 = var4.setReadyState;
                            var0 = var4.LOADING;
                            var0 = var1.bind(var4)(var0);
                            var1 = _closure2_slot0;
                            var1 = var1._interceptor;
                            if (!var1) {
                                _fun2749_ip = 88;
                                continue _fun2749
                            }
                        case 66:
                            var0 = _closure2_slot0;
                            var1 = var0._interceptor;
                            var0 = var1.dataReceived;
                            var0 = var0.bind(var1)(var3, var2);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[7] = var0;
                var0 = {};
                var5 = '__didReceiveIncrementalData';
                var0.key = var5;
                var5 = function arg0, arg1, arg2, arg3() {
                    _fun2750: for (var _fun2750_ip = 0;;) switch (_fun2750_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = arg1;
                            var3 = this;
                            var0 = var3._requestId;
                            if (!(var4 === var0)) {
                                _fun2750_ip = 181;
                                continue _fun2750
                            }
                        case 22:
                            var0 = var3._response;
                            if (var0) {
                                _fun2750_ip = 39;
                                continue _fun2750
                            }
                        case 31:
                            var3._response = var2;
                            _fun2750_ip = 55;
                            continue _fun2750;
                        case 39:
                            var0 = var3._response;
                            var0 = var0 + var2;
                            var3._response = var0;
                        case 55:
                            var1 = _closure2_slot0;
                            var1 = var1._profiling;
                            if (!var1) {
                                _fun2750_ip = 110;
                                continue _fun2750
                            }
                        case 71:
                            var1 = global;
                            var6 = var1.performance;
                            var5 = var6.mark;
                            var1 = var3._getMeasureURL;
                            var7 = var1.bind(var3)();
                            var1 = 'Track:XMLHttpRequest:Incremental Data: ';
                            var1 = var1 + var7;
                            var1 = var5.bind(var6)(var1);
                        case 110:
                            var1 = _closure2_slot0;
                            var1 = var1._interceptor;
                            if (!var1) {
                                _fun2750_ip = 145;
                                continue _fun2750
                            }
                        case 123:
                            var0 = _closure2_slot0;
                            var1 = var0._interceptor;
                            var0 = var1.dataReceived;
                            var0 = var0.bind(var1)(var4, var2);
                        case 145:
                            var1 = var3.setReadyState;
                            var0 = var3.LOADING;
                            var0 = var1.bind(var3)(var0);
                            var2 = var3.__didReceiveDataProgress;
                            var1 = arg2;
                            var0 = arg3;
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 181:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[8] = var0;
                var0 = {};
                var5 = '__didReceiveDataProgress';
                var0.key = var5;
                var5 = function arg0, arg1, arg2() {
                    _fun2751: for (var _fun2751_ip = 0;;) switch (_fun2751_ip) {
                        case 0:
                            var0 = arg2;
                            var3 = this;
                            var2 = var3._requestId;
                            var1 = arg0;
                            if (!(var1 === var2)) {
                                _fun2751_ip = 125;
                                continue _fun2751
                            }
                        case 19:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 13;
                            var1 = var7[var1];
                            var6 = undefined;
                            var2 = var2.bind(var6)(var1);
                            var1 = var2.dispatchTrustedEvent;
                            var5 = _closure1_slot1;
                            var4 = 14;
                            var4 = var7[var4];
                            var6 = var5.bind(var6)(var4);
                            var5 = {};
                            var4 = 0;
                            var4 = var0 >= var4;
                            var5.lengthComputable = var4;
                            var4 = arg1;
                            var5.loaded = var4;
                            var5.total = var0;
                            var0 = var6.prototype;
                            var4 = Object.create(var0, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var9 = 'progress';
                            var10 = var4;
                            var8 = var5;
                            var0 = new var10[var6](var9, var8, var7);
                            var0 = var0 instanceof Object ? var0 : var4;
                            var0 = var1.bind(var2)(var3, var0);
                        case 125:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[9] = var0;
                var0 = {};
                var5 = '__didCompleteResponse';
                var0.key = var5;
                var5 = function arg0, arg1, arg2() {
                    _fun2752: for (var _fun2752_ip = 0;;) switch (_fun2752_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var4 = this;
                            var0 = var4._requestId;
                            if (!(var3 === var0)) {
                                _fun2752_ip = 293;
                                continue _fun2752
                            }
                        case 22:
                            if (!var2) {
                                _fun2752_ip = 85;
                                continue _fun2752
                            }
                        case 25:
                            var1 = var4._responseType;
                            var0 = '';
                            var0 = var0 !== var1;
                            if (!var0) {
                                _fun2752_ip = 56;
                                continue _fun2752
                            }
                        case 42:
                            var5 = var4._responseType;
                            var1 = 'text';
                            var0 = var1 !== var5;
                        case 56:
                            if (var0) {
                                _fun2752_ip = 65;
                                continue _fun2752
                            }
                        case 59:
                            var4._response = var2;
                        case 65:
                            var0 = true;
                            var4._hasError = var0;
                            var1 = arg2;
                            if (!var1) {
                                _fun2752_ip = 85;
                                continue _fun2752
                            }
                        case 79:
                            var4._timedOut = var0;
                        case 85:
                            var0 = var4._clearSubscriptions;
                            var0 = var0.bind(var4)();
                            var5 = null;
                            var4._requestId = var5;
                            var1 = var4.setReadyState;
                            var0 = var4.DONE;
                            var0 = var1.bind(var4)(var0);
                            var1 = _closure2_slot0;
                            var1 = var1._profiling;
                            if (!var1) {
                                _fun2752_ip = 217;
                                continue _fun2752
                            }
                        case 136:
                            var1 = var4._startTime;
                            if (!(var5 != var1)) {
                                _fun2752_ip = 217;
                                continue _fun2752
                            }
                        case 146:
                            var9 = var4._startTime;
                            var8 = global;
                            var7 = var8.performance;
                            var6 = var7.measure;
                            var1 = var4._getMeasureURL;
                            var5 = var1.bind(var4)();
                            var1 = 'Track:XMLHttpRequest:';
                            var5 = var1 + var5;
                            var1 = {};
                            var1.start = var9;
                            var9 = var8.performance;
                            var8 = var9.now;
                            var8 = var8.bind(var9)();
                            var1.end = var8;
                            var1 = var6.bind(var7)(var5, var1);
                        case 217:
                            var1 = _closure2_slot0;
                            var1 = var1._interceptor;
                            if (var2) {
                                _fun2752_ip = 268;
                                continue _fun2752
                            }
                        case 230:
                            if (!var1) {
                                _fun2752_ip = 293;
                                continue _fun2752
                            }
                        case 233:
                            var5 = _closure2_slot0;
                            var6 = var5._interceptor;
                            var5 = var6.loadingFinished;
                            var4 = var4._response;
                            var4 = var4.length;
                            var4 = var5.bind(var6)(var3, var4);
                            _fun2752_ip = 293;
                            continue _fun2752;
                        case 268:
                            if (!var1) {
                                _fun2752_ip = 293;
                                continue _fun2752
                            }
                        case 271:
                            var0 = _closure2_slot0;
                            var1 = var0._interceptor;
                            var0 = var1.loadingFailed;
                            var0 = var0.bind(var1)(var3, var2);
                        case 293:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[10] = var0;
                var0 = {};
                var5 = '_clearSubscriptions';
                var0.key = var5;
                var5 = function() {
                    _fun2753: for (var _fun2753_ip = 0;;) switch (_fun2753_ip) {
                        case 0:
                            var1 = this;
                            var3 = var1._subscriptions;
                            if (var3) {
                                _fun2753_ip = 16;
                                continue _fun2753
                            }
                        case 12:
                            var3 = new Array(0);
                        case 16:
                            var2 = var3.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun2754: for (var _fun2754_ip = 0;;) switch (_fun2754_ip) {
                                    case 0:
                                        var1 = arg0;
                                        if (!var1) {
                                            _fun2754_ip = 16;
                                            continue _fun2754
                                        }
                                    case 6:
                                        var0 = var1.remove;
                                        var0 = var0.bind(var1)();
                                    case 16:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var0);
                            var0 = new Array(0);
                            var1._subscriptions = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[11] = var0;
                var0 = {};
                var5 = 'getAllResponseHeaders';
                var0.key = var5;
                var5 = function() {
                    _fun2755: for (var _fun2755_ip = 0;;) switch (_fun2755_ip) {
                        case 0:
                            var2 = this;
                            var3 = undefined;
                            var6 = undefined;
                            var1 = undefined;
                            var7 = undefined;
                            var8 = undefined;
                            var9 = undefined;
                            var10 = undefined;
                            var4 = var2.responseHeaders;
                            if (var4) {
                                _fun2755_ip = 32;
                                continue _fun2755
                            }
                        case 28:
                            var4 = null;
                            return var4;
                        case 32:
                            var5 = var2.responseHeaders;
                            var6 = var5;
                            var2 = global;
                            var4 = var2.Map;
                            var11 = var4.prototype;
                            var11 = Object.create(var11, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var19 = var11;
                            var4 = new var19[var4](var18);
                            var1 = var4 instanceof Object ? var4 : var11;
                            var4 = var2.Object;
                            var2 = var4.keys;
                            var2 = var2.bind(var4)(var5);
                            var5 = var2;
                            var4 = var5[Symbol.iterator];
                            var5 = var4().next;
                            var2 = ', ';
                        case 97:
                            var12 = var5().value;
                            var11 = var4;
                            if (!(var11 !== var3)) {
                                _fun2755_ip = 260;
                                continue _fun2755
                            }
                        case 111: // try_start_0
                            var7 = var12;
                            var11 = var6;
                            var8 = var11[var12];
                            var11 = var12.toLowerCase;
                            var13 = var11.bind(var12)();
                            var9 = var13;
                            var12 = var1;
                            var11 = var12.get;
                            var11 = var11.bind(var12)(var13);
                            var10 = var11;
                            if (var11) {
                                _fun2755_ip = 205;
                                continue _fun2755
                            }
                        case 153:
                            var14 = var1;
                            var13 = var14.set;
                            var12 = var9;
                            var11 = {};
                            var11.lowerHeaderName = var12;
                            var16 = var7;
                            var15 = var16.toUpperCase;
                            var15 = var15.bind(var16)();
                            var11.upperHeaderName = var15;
                            var15 = var8;
                            var11.headerValue = var15;
                            var11 = var13.bind(var14)(var12, var11);
                            _fun2755_ip = 248;
                            continue _fun2755;
                        case 205:
                            var14 = var10;
                            var12 = var14.headerValue;
                            var11 = var8;
                            var11 = var2 + var11;
                            var11 = var12 + var11;
                            var14.headerValue = var11;
                            var13 = var1;
                            var12 = var13.set;
                            var11 = var9;
                            var11 = var12.bind(var13)(var11, var14);
                        case 248: // try_end0
                            _fun2755_ip = 97;
                            continue _fun2755;
                        case 253: // catch_target0
                            CatchBlockStart(arg_register = 2);
                            var4.return();
                            throw var2;
                        case 260:
                            var2 = _closure1_slot3;
                            var4 = var1;
                            var1 = var4.values;
                            var1 = var1.bind(var4)();
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.sort;
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun2756: for (var _fun2756_ip = 0;;) switch (_fun2756_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = arg1;
                                        var3 = var2.upperHeaderName;
                                        var0 = var1.upperHeaderName;
                                        var3 = var3 < var0;
                                        var0 = -1;
                                        if (var3) {
                                            _fun2756_ip = 58;
                                            continue _fun2756
                                        }
                                    case 31:
                                        var2 = var2.upperHeaderName;
                                        var1 = var1.upperHeaderName;
                                        var2 = var2 > var1;
                                        var1 = 0;
                                        if (!var2) {
                                            _fun2756_ip = 55;
                                            continue _fun2756
                                        }
                                    case 52:
                                        var1 = 1;
                                    case 55:
                                        var0 = var1;
                                    case 58:
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var2 = var0.lowerHeaderName;
                                var1 = ': ';
                                var1 = var2 + var1;
                                var0 = var0.headerValue;
                                var0 = var1 + var0;
                                return var0;
                            };
                            var2 = var1.bind(var2)(var0);
                            var0 = var2.join;
                            var1 = '\r\n';
                            var0 = var0.bind(var2)(var1);
                            var0 = var0 + var1;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[12] = var0;
                var0 = {};
                var5 = 'getResponseHeader';
                var0.key = var5;
                var5 = function arg0() {
                    _fun2758: for (var _fun2758_ip = 0;;) switch (_fun2758_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = this;
                            var1 = var0._lowerCaseResponseHeaders;
                            var0 = var2.toLowerCase;
                            var0 = var0.bind(var2)();
                            var1 = var1[var0];
                            var2 = undefined;
                            var0 = null;
                            if (!(var2 !== var1)) {
                                _fun2758_ip = 37;
                                continue _fun2758
                            }
                        case 34:
                            var0 = var1;
                        case 37:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[13] = var0;
                var0 = {};
                var5 = 'setRequestHeader';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    _fun2759: for (var _fun2759_ip = 0;;) switch (_fun2759_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = this;
                            var3 = var0.readyState;
                            var2 = var0.OPENED;
                            if (!(var3 === var2)) {
                                _fun2759_ip = 62;
                                continue _fun2759
                            }
                        case 22:
                            var3 = var0._headers;
                            var0 = var1.toLowerCase;
                            var2 = var0.bind(var1)();
                            var0 = global;
                            var4 = var0.String;
                            var0 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var0)(var1);
                            var3[var2] = var1;
                            return var0;
                        case 62:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var5 = 'Request has not been opened';
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0.value = var5;
                var1[14] = var0;
                var0 = {};
                var5 = 'setTrackingName';
                var0.key = var5;
                var5 = function arg0() {
                    var0 = this;
                    var1 = arg0;
                    var0._trackingName = var1;
                    return var0;
                };
                var0.value = var5;
                var1[15] = var0;
                var0 = {};
                var5 = 'setPerformanceLogger';
                var0.key = var5;
                var5 = function arg0() {
                    var0 = this;
                    var1 = arg0;
                    var0._performanceLogger = var1;
                    return var0;
                };
                var0.value = var5;
                var1[16] = var0;
                var0 = {};
                var5 = 'open';
                var0.key = var5;
                var5 = function arg0, arg1, arg2() {
                    _fun2762: for (var _fun2762_ip = 0;;) switch (_fun2762_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = arg1;
                            var2 = arg2;
                            var3 = this;
                            var5 = var3.readyState;
                            var0 = var3.UNSENT;
                            if (!(var5 === var0)) {
                                _fun2762_ip = 164;
                                continue _fun2762
                            }
                        case 31:
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun2762_ip = 76;
                                continue _fun2762
                            }
                        case 37:
                            if (var2) {
                                _fun2762_ip = 76;
                                continue _fun2762
                            }
                        case 40:
                            var2 = global;
                            var6 = var2.Error;
                            var2 = var6.prototype;
                            var5 = Object.create(var2, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var7 = 'Synchronous http requests are not supported';
                            var8 = var5;
                            var2 = new var8[var6](var7, var6);
                            var2 = var2 instanceof Object ? var2 : var5;
                            throw var2;
                        case 76:
                            if (var1) {
                                _fun2762_ip = 115;
                                continue _fun2762
                            }
                        case 79:
                            var2 = global;
                            var6 = var2.Error;
                            var2 = var6.prototype;
                            var5 = Object.create(var2, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var7 = 'Cannot load an empty url';
                            var8 = var5;
                            var2 = new var8[var6](var7, var6);
                            var2 = var2 instanceof Object ? var2 : var5;
                            throw var2;
                        case 115:
                            var2 = var4.toUpperCase;
                            var2 = var2.bind(var4)();
                            var3._method = var2;
                            var3._url = var1;
                            var1 = false;
                            var3._aborted = var1;
                            var2 = var3.setReadyState;
                            var1 = var3.OPENED;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        case 164:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var7 = 'Cannot open, already sending';
                            var8 = var1;
                            var0 = new var8[var2](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0.value = var5;
                var1[17] = var0;
                var0 = {};
                var5 = 'send';
                var0.key = var5;
                var5 = function arg0() {
                    _fun2763: for (var _fun2763_ip = 0;;) switch (_fun2763_ip) {
                        case 0:
                            var1 = this;
                            var _closure3_slot0 = var1;
                            var2 = var1.readyState;
                            var0 = var1.OPENED;
                            if (!(var2 === var0)) {
                                _fun2763_ip = 759;
                                continue _fun2763
                            }
                        case 28:
                            var0 = var1._sent;
                            if (var0) {
                                _fun2763_ip = 723;
                                continue _fun2763
                            }
                        case 40:
                            var0 = true;
                            var1._sent = var0;
                            var12 = var1._incrementalEvents;
                            if (var12) {
                                _fun2763_ip = 69;
                                continue _fun2763
                            }
                        case 57:
                            var0 = var1.onreadystatechange;
                            var0 = !var0;
                            var12 = !var0;
                        case 69:
                            if (var12) {
                                _fun2763_ip = 84;
                                continue _fun2763
                            }
                        case 72:
                            var0 = var1.onprogress;
                            var0 = !var0;
                            var12 = !var0;
                        case 84:
                            var9 = var1._subscriptions;
                            var6 = var9.push;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 15;
                            var4 = var7[var5];
                            var0 = undefined;
                            var4 = var8.bind(var0)(var4);
                            var13 = var4.default;
                            var11 = var13.addListener;
                            var10 = 'didSendNetworkData';
                            var4 = function(arg0) { // Environment: var3
                                var3 = _closure3_slot0;
                                var2 = var3.__didUploadProgress;
                                var1 = var2.apply;
                                var5 = _closure1_slot3;
                                var4 = undefined;
                                var0 = arg0;
                                var0 = var5.bind(var4)(var0);
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            };
                            var4 = var11.bind(var13)(var10, var4);
                            var4 = var6.bind(var9)(var4);
                            var9 = var1._subscriptions;
                            var6 = var9.push;
                            var4 = var7[var5];
                            var4 = var8.bind(var0)(var4);
                            var13 = var4.default;
                            var11 = var13.addListener;
                            var10 = 'didReceiveNetworkResponse';
                            var4 = function(arg0) { // Environment: var3
                                var3 = _closure3_slot0;
                                var2 = var3.__didReceiveResponse;
                                var1 = var2.apply;
                                var5 = _closure1_slot3;
                                var4 = undefined;
                                var0 = arg0;
                                var0 = var5.bind(var4)(var0);
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            };
                            var4 = var11.bind(var13)(var10, var4);
                            var4 = var6.bind(var9)(var4);
                            var9 = var1._subscriptions;
                            var6 = var9.push;
                            var4 = var7[var5];
                            var4 = var8.bind(var0)(var4);
                            var13 = var4.default;
                            var11 = var13.addListener;
                            var10 = 'didReceiveNetworkData';
                            var4 = function(arg0) { // Environment: var3
                                var3 = _closure3_slot0;
                                var2 = var3.__didReceiveData;
                                var1 = var2.apply;
                                var5 = _closure1_slot3;
                                var4 = undefined;
                                var0 = arg0;
                                var0 = var5.bind(var4)(var0);
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            };
                            var4 = var11.bind(var13)(var10, var4);
                            var4 = var6.bind(var9)(var4);
                            var9 = var1._subscriptions;
                            var6 = var9.push;
                            var4 = var7[var5];
                            var4 = var8.bind(var0)(var4);
                            var13 = var4.default;
                            var11 = var13.addListener;
                            var10 = 'didReceiveNetworkIncrementalData';
                            var4 = function(arg0) { // Environment: var3
                                var3 = _closure3_slot0;
                                var2 = var3.__didReceiveIncrementalData;
                                var1 = var2.apply;
                                var5 = _closure1_slot3;
                                var4 = undefined;
                                var0 = arg0;
                                var0 = var5.bind(var4)(var0);
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            };
                            var4 = var11.bind(var13)(var10, var4);
                            var4 = var6.bind(var9)(var4);
                            var9 = var1._subscriptions;
                            var6 = var9.push;
                            var4 = var7[var5];
                            var4 = var8.bind(var0)(var4);
                            var13 = var4.default;
                            var11 = var13.addListener;
                            var10 = 'didReceiveNetworkDataProgress';
                            var4 = function(arg0) { // Environment: var3
                                var3 = _closure3_slot0;
                                var2 = var3.__didReceiveDataProgress;
                                var1 = var2.apply;
                                var5 = _closure1_slot3;
                                var4 = undefined;
                                var0 = arg0;
                                var0 = var5.bind(var4)(var0);
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            };
                            var4 = var11.bind(var13)(var10, var4);
                            var4 = var6.bind(var9)(var4);
                            var6 = var1._subscriptions;
                            var4 = var6.push;
                            var7 = var7[var5];
                            var7 = var8.bind(var0)(var7);
                            var9 = var7.default;
                            var8 = var9.addListener;
                            var7 = 'didCompleteNetworkResponse';
                            var3 = function(arg0) { // Environment: var3
                                var3 = _closure3_slot0;
                                var2 = var3.__didCompleteResponse;
                                var1 = var2.apply;
                                var5 = _closure1_slot3;
                                var4 = undefined;
                                var0 = arg0;
                                var0 = var5.bind(var4)(var0);
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            };
                            var3 = var8.bind(var9)(var7, var3);
                            var3 = var4.bind(var6)(var3);
                            var4 = var1._responseType;
                            var11 = 'text';
                            var3 = 'arraybuffer';
                            if (!(var3 === var4)) {
                                _fun2763_ip = 440;
                                continue _fun2763
                            }
                        case 436:
                            var11 = 'base64';
                        case 440:
                            var4 = var1._responseType;
                            var3 = 'blob';
                            if (!(var3 === var4)) {
                                _fun2763_ip = 457;
                                continue _fun2763
                            }
                        case 454:
                            var11 = var3;
                        case 457:
                            var9 = var1._trackingName;
                            var3 = null;
                            if (!(var3 == var9)) {
                                _fun2763_ip = 475;
                                continue _fun2763
                            }
                        case 469:
                            var9 = var1._url;
                        case 475:
                            var4 = global;
                            var6 = var4.String;
                            var7 = var6.bind(var0)(var9);
                            var6 = 'network_XMLHttpRequest_';
                            var6 = var6 + var7;
                            var1._perfKey = var6;
                            var8 = var1._performanceLogger;
                            var7 = var8.startTimespan;
                            var6 = var1._perfKey;
                            var6 = var7.bind(var8)(var6);
                            var6 = var4.performance;
                            var4 = var6.now;
                            var4 = var4.bind(var6)();
                            var1._startTime = var4;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var6 = 11;
                            var7 = var2[var6];
                            var10 = var4.bind(var0)(var7);
                            var8 = var1._method;
                            var7 = 'XMLHttpRequest method needs to be defined (%s).';
                            var7 = var10.bind(var0)(var8, var7, var9);
                            var6 = var2[var6];
                            var8 = var4.bind(var0)(var6);
                            var7 = var1._url;
                            var6 = 'XMLHttpRequest URL needs to be defined (%s).';
                            var6 = var8.bind(var0)(var7, var6, var9);
                            var2 = var2[var5];
                            var2 = var4.bind(var0)(var2);
                            var10 = var2.default;
                            var9 = var10.sendRequest;
                            var8 = var1._method;
                            var2 = var1._trackingName;
                            var3 = var3 != var2;
                            var7 = undefined;
                            if (!var3) {
                                _fun2763_ip = 659;
                                continue _fun2763
                            }
                        case 656:
                            var7 = var2;
                        case 659:
                            var21 = var1._url;
                            var20 = var1._headers;
                            var16 = var1.timeout;
                            var3 = var1.__didCreateRequest;
                            var2 = var3.bind;
                            var15 = var2.bind(var3)(var1);
                            var14 = var1.withCredentials;
                            var19 = arg0;
                            var24 = var10;
                            var23 = var8;
                            var22 = var7;
                            var18 = var11;
                            var17 = var12;
                            var1 = var24[var9](var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
                            return var0;
                        case 723:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var23 = 'Request has already been sent';
                            var24 = var1;
                            var0 = new var24[var2](var23, var22);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 759:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var23 = 'Request has not been opened';
                            var24 = var1;
                            var0 = new var24[var2](var23, var22);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0.value = var5;
                var1[18] = var0;
                var0 = {};
                var5 = 'abort';
                var0.key = var5;
                var5 = function() {
                    _fun2770: for (var _fun2770_ip = 0;;) switch (_fun2770_ip) {
                        case 0:
                            var1 = this;
                            var0 = true;
                            var1._aborted = var0;
                            var0 = var1._requestId;
                            if (!var0) {
                                _fun2770_ip = 67;
                                continue _fun2770
                            }
                        case 20:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 15;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var3 = var0.default;
                            var2 = var3.abortRequest;
                            var0 = var1._requestId;
                            var0 = var2.bind(var3)(var0);
                        case 67:
                            var2 = var1.readyState;
                            var0 = var1.UNSENT;
                            var0 = var2 === var0;
                            if (var0) {
                                _fun2770_ip = 117;
                                continue _fun2770
                            }
                        case 86:
                            var3 = var1.readyState;
                            var2 = var1.OPENED;
                            var2 = var3 === var2;
                            if (!var2) {
                                _fun2770_ip = 114;
                                continue _fun2770
                            }
                        case 105:
                            var3 = var1._sent;
                            var2 = !var3;
                        case 114:
                            var0 = var2;
                        case 117:
                            if (var0) {
                                _fun2770_ip = 136;
                                continue _fun2770
                            }
                        case 120:
                            var3 = var1.readyState;
                            var2 = var1.DONE;
                            var0 = var3 === var2;
                        case 136:
                            if (var0) {
                                _fun2770_ip = 166;
                                continue _fun2770
                            }
                        case 139:
                            var0 = var1._reset;
                            var0 = var0.bind(var1)();
                            var2 = var1.setReadyState;
                            var0 = var1.DONE;
                            var0 = var2.bind(var1)(var0);
                        case 166:
                            var0 = var1._reset;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[19] = var0;
                var0 = {};
                var5 = 'setResponseHeaders';
                var0.key = var5;
                var5 = function arg0() {
                    _fun2771: for (var _fun2771_ip = 0;;) switch (_fun2771_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = this;
                            var2 = var4;
                            if (var4) {
                                _fun2771_ip = 16;
                                continue _fun2771
                            }
                        case 14:
                            var2 = null;
                        case 16:
                            var1.responseHeaders = var2;
                            if (var4) {
                                _fun2771_ip = 27;
                                continue _fun2771
                            }
                        case 25:
                            var4 = {};
                        case 27:
                            var _closure3_slot0 = var4;
                            var2 = global;
                            var3 = var2.Object;
                            var2 = var3.keys;
                            var4 = var2.bind(var3)(var4);
                            var3 = var4.reduce;
                            var2 = function(arg0, arg1) { // Environment: var0
                                var0 = arg0;
                                var3 = arg1;
                                var1 = var3.toLowerCase;
                                var2 = var1.bind(var3)();
                                var1 = _closure3_slot0;
                                var1 = var1[var3];
                                var0[var2] = var1;
                                return var0;
                            };
                            var0 = {};
                            var0 = var3.bind(var4)(var2, var0);
                            var1._lowerCaseResponseHeaders = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[20] = var0;
                var0 = {};
                var5 = 'setReadyState';
                var0.key = var5;
                var5 = function arg0() {
                    _fun2773: for (var _fun2773_ip = 0;;) switch (_fun2773_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = this;
                            var4.readyState = var3;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 13;
                            var6 = var1[var2];
                            var0 = undefined;
                            var8 = var7.bind(var0)(var6);
                            var7 = var8.dispatchTrustedEvent;
                            var9 = _closure1_slot1;
                            var6 = 16;
                            var1 = var1[var6];
                            var10 = var9.bind(var0)(var1);
                            var1 = var10.prototype;
                            var9 = Object.create(var1, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var12 = 'readystatechange';
                            var13 = var9;
                            var1 = new var13[var10](var12, var11);
                            var1 = var1 instanceof Object ? var1 : var9;
                            var1 = var7.bind(var8)(var4, var1);
                            var1 = var4.DONE;
                            if (!(var3 === var1)) {
                                _fun2773_ip = 430;
                                continue _fun2773
                            }
                        case 104:
                            var1 = var4._aborted;
                            if (var1) {
                                _fun2773_ip = 296;
                                continue _fun2773
                            }
                        case 116:
                            var1 = var4._hasError;
                            if (var1) {
                                _fun2773_ip = 196;
                                continue _fun2773
                            }
                        case 125:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var3 = var1[var2];
                            var7 = var7.bind(var0)(var3);
                            var3 = var7.dispatchTrustedEvent;
                            var8 = _closure1_slot1;
                            var1 = var1[var6];
                            var9 = var8.bind(var0)(var1);
                            var1 = var9.prototype;
                            var8 = Object.create(var1, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var12 = 'load';
                            var13 = var8;
                            var1 = new var13[var9](var12, var11);
                            var1 = var1 instanceof Object ? var1 : var8;
                            var1 = var3.bind(var7)(var4, var1);
                            _fun2773_ip = 362;
                            continue _fun2773;
                        case 196:
                            var1 = var4._timedOut;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = var8[var2];
                            var7 = var7.bind(var0)(var3);
                            var3 = var7.dispatchTrustedEvent;
                            var9 = _closure1_slot1;
                            var8 = var8[var6];
                            var9 = var9.bind(var0)(var8);
                            var8 = var9.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var9
                                }
                            });
                            if (var1) {
                                _fun2773_ip = 273;
                                continue _fun2773
                            }
                        case 250:
                            var12 = 'error';
                            var13 = var8;
                            var1 = new var13[var9](var12, var11);
                            var1 = var1 instanceof Object ? var1 : var8;
                            var1 = var3.bind(var7)(var4, var1);
                            _fun2773_ip = 362;
                            continue _fun2773;
                        case 273:
                            var12 = 'timeout';
                            var13 = var8;
                            var1 = new var13[var9](var12, var11);
                            var1 = var1 instanceof Object ? var1 : var8;
                            var1 = var3.bind(var7)(var4, var1);
                            _fun2773_ip = 362;
                            continue _fun2773;
                        case 296:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var3 = var1[var2];
                            var7 = var7.bind(var0)(var3);
                            var3 = var7.dispatchTrustedEvent;
                            var8 = _closure1_slot1;
                            var1 = var1[var6];
                            var9 = var8.bind(var0)(var1);
                            var1 = var9.prototype;
                            var8 = Object.create(var1, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var12 = 'abort';
                            var13 = var8;
                            var1 = new var13[var9](var12, var11);
                            var1 = var1 instanceof Object ? var1 : var8;
                            var1 = var3.bind(var7)(var4, var1);
                        case 362:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.dispatchTrustedEvent;
                            var5 = _closure1_slot1;
                            var1 = var1[var6];
                            var6 = var5.bind(var0)(var1);
                            var1 = var6.prototype;
                            var5 = Object.create(var1, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var12 = 'loadend';
                            var13 = var5;
                            var1 = new var13[var6](var12, var11);
                            var1 = var1 instanceof Object ? var1 : var5;
                            var1 = var2.bind(var3)(var4, var1);
                        case 430:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[21] = var0;
                var0 = {};
                var5 = 'addEventListener';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    _fun2774: for (var _fun2774_ip = 0;;) switch (_fun2774_ip) {
                        case 0:
                            var3 = arg0;
                            var6 = this;
                            var0 = 'readystatechange';
                            var0 = var0 !== var3;
                            if (!var0) {
                                _fun2774_ip = 27;
                                continue _fun2774
                            }
                        case 19:
                            var1 = 'progress';
                            var0 = var1 !== var3;
                        case 27:
                            if (var0) {
                                _fun2774_ip = 38;
                                continue _fun2774
                            }
                        case 30:
                            var0 = true;
                            var6._incrementalEvents = var0;
                        case 38:
                            var10 = _closure2_slot0;
                            var4 = function arg0, arg1, arg2, arg3() {
                                _fun2775: for (var _fun2775_ip = 0;;) switch (_fun2775_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var6 = arg2;
                                        var _closure4_slot0 = var6;
                                        var5 = _closure1_slot4;
                                        var3 = _closure1_slot8;
                                        var0 = 1;
                                        var2 = 3;
                                        var7 = var0 & var2;
                                        var0 = var4;
                                        if (!var7) {
                                            _fun2775_ip = 44;
                                            continue _fun2775
                                        }
                                    case 39:
                                        var0 = var4.prototype;
                                    case 44:
                                        var4 = undefined;
                                        var3 = var3.bind(var4)(var0);
                                        var0 = 'addEventListener';
                                        var4 = var5.bind(var4)(var3, var0, var6);
                                        var _closure4_slot1 = var4;
                                        var0 = 2;
                                        var2 = var0 & var2;
                                        var0 = var4;
                                        if (!var2) {
                                            _fun2775_ip = 98;
                                            continue _fun2775
                                        }
                                    case 79:
                                        var3 = 'function';
                                        var2 = typeof var4;
                                        var0 = var4;
                                        if (!(var3 === var2)) {
                                            _fun2775_ip = 98;
                                            continue _fun2775
                                        }
                                    case 93:
                                        var0 = function(arg0) { // Environment: var1
                                            var3 = _closure4_slot1;
                                            var2 = var3.apply;
                                            var1 = _closure4_slot0;
                                            var0 = arg0;
                                            var0 = var2.bind(var3)(var1, var0);
                                            return var0;
                                        };
                                    case 98:
                                        return var0;
                                }
                            };
                            var0 = undefined;
                            var9 = 'addEventListener';
                            var7 = 3;
                            var11 = undefined;
                            var8 = var6;
                            var2 = var11[var4](var10, var9, var8, var7, var6);
                            var1 = new Array(2);
                            var1[0] = var3;
                            var3 = arg1;
                            var1[1] = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0.value = var5;
                var1[22] = var0;
                var0 = {};
                var5 = '_getMeasureURL';
                var0.key = var5;
                var5 = function() {
                    _fun2777: for (var _fun2777_ip = 0;;) switch (_fun2777_ip) {
                        case 0:
                            var2 = this;
                            var1 = var2._trackingName;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun2777_ip = 21;
                                continue _fun2777
                            }
                        case 15:
                            var1 = var2._url;
                        case 21:
                            var2 = var0 != var1;
                            var0 = 'Unknown URL';
                            if (!var2) {
                                _fun2777_ip = 37;
                                continue _fun2777
                            }
                        case 34:
                            var0 = var1;
                        case 37:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[23] = var0;
                var0 = {};
                var5 = 'onabort';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'abort';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.get = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'abort';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.set = var5;
                var1[24] = var0;
                var0 = {};
                var5 = 'onerror';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'error';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.get = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'error';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.set = var5;
                var1[25] = var0;
                var0 = {};
                var5 = 'onload';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'load';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.get = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'load';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.set = var5;
                var1[26] = var0;
                var0 = {};
                var5 = 'onloadstart';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'loadstart';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.get = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'loadstart';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.set = var5;
                var1[27] = var0;
                var0 = {};
                var5 = 'onprogress';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'progress';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.get = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'progress';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.set = var5;
                var1[28] = var0;
                var0 = {};
                var5 = 'ontimeout';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'timeout';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.get = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'timeout';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.set = var5;
                var1[29] = var0;
                var0 = {};
                var5 = 'onloadend';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'loadend';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.get = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'loadend';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.set = var5;
                var1[30] = var0;
                var0 = {};
                var5 = 'onreadystatechange';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventHandlerAttribute;
                    var1 = this;
                    var0 = 'readystatechange';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.get = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.setEventHandlerAttribute;
                    var3 = this;
                    var2 = 'readystatechange';
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.set = var5;
                var1[31] = var0;
                var5 = {};
                var0 = '__setInterceptor_DO_NOT_USE';
                var5.key = var0;
                var0 = function arg0() {
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var1._interceptor = var0;
                    var0 = undefined;
                    return var0;
                };
                var5.value = var0;
                var0 = new Array(2);
                var0[0] = var5;
                var5 = {};
                var7 = 'enableProfiling';
                var5.key = var7;
                var6 = function arg0() {
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var1._profiling = var0;
                    var0 = undefined;
                    return var0;
                };
                var5.value = var6;
                var0[1] = var5;
                var0 = var2.bind(var3)(var4, var1, var0);
                return var0;
            };
            var1 = var1.bind(var0)(var9);
            var1.UNSENT = var8;
            var1.OPENED = var7;
            var1.HEADERS_RECEIVED = var6;
            var1.LOADING = var5;
            var1.DONE = var4;
            var4 = null;
            var1._interceptor = var4;
            var1._profiling = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 102, 6, 7, 15, 17, 18, 194, 199, 200, 204, 44, 206, 203, 207, 208, 201]);