// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0) { // Original name: _wrapTimeFunction, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            _fun10960: for (var _fun10960_ip = 0;;) switch (_fun10960_ip) {
                case 0:
                    var10 = undefined;
                    var4 = undefined;
                    var2 = arguments.length;
                    var8 = global;
                    var0 = var8.Array;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var14 = var1;
                    var13 = var2;
                    var0 = new var14[var0](var13, var12);
                    var3 = var0 instanceof Object ? var0 : var1;
                    var1 = 0;
                    var5 = var1 < var2;
                    var0 = 0;
                    if (!var5) {
                        _fun10960_ip = 64;
                        continue _fun10960
                    }
                case 49:
                    var5 = arguments[var0];
                    var3[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var2) {
                        _fun10960_ip = 49;
                        continue _fun10960
                    }
                case 64:
                    var6 = var3[var1];
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 1;
                    var0 = var2[var0];
                    var5 = var9.bind(var10)(var0);
                    var4 = var5.wrap;
                    var0 = {};
                    var7 = {};
                    var11 = false;
                    var7.handled = var11;
                    var2 = var2[var1];
                    var10 = var9.bind(var10)(var2);
                    var9 = var10.getFunctionName;
                    var2 = _closure2_slot0;
                    var10 = var9.bind(var10)(var2);
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = 'auto.browser.browserapierrors.';
                    var8 = var9.bind(var8)(var10);
                    var7.type = var8;
                    var0.mechanism = var7;
                    var0 = var4.bind(var5)(var6, var0);
                    var3[var1] = var0;
                    var1 = var2.apply;
                    var0 = this;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0) { // Original name: _wrapRAF, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var0 = 1;
            var0 = var10[var0];
            var8 = undefined;
            var5 = var9.bind(var8)(var0);
            var4 = var5.wrap;
            var1 = {};
            var0 = {
                'data': null,
                'handled': false,
                'type': 'auto.browser.browserapierrors.requestAnimationFrame'
            };
            var6 = {};
            var7 = 0;
            var7 = var10[var7];
            var8 = var9.bind(var8)(var7);
            var7 = var8.getFunctionName;
            var7 = var7.bind(var8)(var3);
            var6.handler = var7;
            var0.data = var6;
            var1.mechanism = var0;
            var0 = arg0;
            var0 = var4.bind(var5)(var0, var1);
            var1 = new Array(1);
            var1[0] = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0) { // Original name: _wrapXHR, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            _fun10964: for (var _fun10964_ip = 0;;) switch (_fun10964_ip) {
                case 0:
                    var3 = this;
                    var4 = undefined;
                    var _closure3_slot0 = var3;
                    var2 = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun10965: for (var _fun10965_ip = 0;;) switch (_fun10965_ip) {
                            case 0:
                                var4 = arg0;
                                var _closure4_slot0 = var4;
                                var2 = _closure3_slot0;
                                var2 = var4 in var2;
                                if (!var2) {
                                    _fun10965_ip = 42;
                                    continue _fun10965
                                }
                            case 23:
                                var3 = _closure3_slot0;
                                var3 = var3[var4];
                                var5 = 'function';
                                var3 = typeof var3;
                                var2 = var5 === var3;
                            case 42:
                                if (!var2) {
                                    _fun10965_ip = 91;
                                    continue _fun10965
                                }
                            case 45:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 0;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var5.bind(var2)(var3);
                                var2 = var3.fill;
                                var1 = _closure3_slot0;
                                var0 = function(arg0) { // Environment: var0
                                    _fun10966: for (var _fun10966_ip = 0;;) switch (_fun10966_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = {};
                                            var6 = {};
                                            var7 = {};
                                            var5 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var8 = 0;
                                            var9 = var1[var8];
                                            var4 = undefined;
                                            var10 = var5.bind(var4)(var9);
                                            var9 = var10.getFunctionName;
                                            var9 = var9.bind(var10)(var3);
                                            var7.handler = var9;
                                            var6.data = var7;
                                            var7 = false;
                                            var6.handled = var7;
                                            var10 = _closure4_slot0;
                                            var7 = global;
                                            var7 = var7.HermesInternal;
                                            var9 = var7.concat;
                                            var7 = 'auto.browser.browserapierrors.xhr.';
                                            var7 = var9.bind(var7)(var10);
                                            var6.type = var7;
                                            var2.mechanism = var6;
                                            var1 = var1[var8];
                                            var5 = var5.bind(var4)(var1);
                                            var1 = var5.getOriginalFunction;
                                            var7 = var1.bind(var5)(var3);
                                            if (!var7) {
                                                _fun10966_ip = 168;
                                                continue _fun10966
                                            }
                                        case 123:
                                            var1 = var2.mechanism;
                                            var5 = var1.data;
                                            var6 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var1 = var1[var8];
                                            var6 = var6.bind(var4)(var1);
                                            var1 = var6.getFunctionName;
                                            var1 = var1.bind(var6)(var7);
                                            var5.handler = var1;
                                        case 168:
                                            var1 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var0 = 1;
                                            var0 = var5[var0];
                                            var1 = var1.bind(var4)(var0);
                                            var0 = var1.wrap;
                                            var0 = var0.bind(var1)(var3, var2);
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var1, var4, var0);
                            case 91:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var1 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var8 = var2;
                    var7 = var1;
                    var0 = new var8[var0](var7, var6);
                    var2 = var0 instanceof Object ? var0 : var2;
                    var0 = 0;
                    var5 = var0 < var1;
                    if (!var5) {
                        _fun10964_ip = 93;
                        continue _fun10964
                    }
                case 78:
                    var5 = arguments[var0];
                    var2[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var1) {
                        _fun10964_ip = 78;
                        continue _fun10964
                    }
                case 93:
                    var1 = _closure2_slot0;
                    var0 = var1.apply;
                    var0 = var0.bind(var1)(var3, var2);
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'BroadcastChannel', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'SharedWorker', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'];
    var _closure1_slot2 = var0;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() { // Original name: _browserApiErrorsIntegration, environment: var1
        _fun10967: for (var _fun10967_ip = 0;;) switch (_fun10967_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun10967_ip = 23;
                    continue _fun10967
                }
            case 15:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun10967_ip = 27;
                    continue _fun10967
                }
            case 23:
                var4 = {};
                _fun10967_ip = 31;
                continue _fun10967;
            case 27:
                var4 = arguments[var0];
            case 31:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var0 = {
                    'XMLHttpRequest': true,
                    'eventTarget': true,
                    'requestAnimationFrame': true,
                    'setInterval': true,
                    'setTimeout': true,
                    'unregisterOriginalCallbacks': false
                };
                var0 = var2.bind(var3)(var0, var4);
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'BrowserApiErrors';
                var0.name = var2;
                var1 = function() { // Original name: setupOnce, environment: var1
                    _fun10968: for (var _fun10968_ip = 0;;) switch (_fun10968_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var1 = var1.setTimeout;
                            if (!var1) {
                                _fun10968_ip = 78;
                                continue _fun10968
                            }
                        case 15:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = 0;
                            var2 = var7[var2];
                            var3 = undefined;
                            var5 = var6.bind(var3)(var2);
                            var4 = var5.fill;
                            var2 = 1;
                            var2 = var7[var2];
                            var2 = var6.bind(var3)(var2);
                            var3 = var2.WINDOW;
                            var2 = _closure1_slot3;
                            var1 = 'setTimeout';
                            var1 = var4.bind(var5)(var3, var1, var2);
                        case 78:
                            var1 = _closure2_slot0;
                            var1 = var1.setInterval;
                            if (!var1) {
                                _fun10968_ip = 154;
                                continue _fun10968
                            }
                        case 91:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = 0;
                            var2 = var7[var2];
                            var3 = undefined;
                            var5 = var6.bind(var3)(var2);
                            var4 = var5.fill;
                            var2 = 1;
                            var2 = var7[var2];
                            var2 = var6.bind(var3)(var2);
                            var3 = var2.WINDOW;
                            var2 = _closure1_slot3;
                            var1 = 'setInterval';
                            var1 = var4.bind(var5)(var3, var1, var2);
                        case 154:
                            var1 = _closure2_slot0;
                            var1 = var1.requestAnimationFrame;
                            if (!var1) {
                                _fun10968_ip = 230;
                                continue _fun10968
                            }
                        case 167:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var2 = 0;
                            var2 = var7[var2];
                            var3 = undefined;
                            var5 = var6.bind(var3)(var2);
                            var4 = var5.fill;
                            var2 = 1;
                            var2 = var7[var2];
                            var2 = var6.bind(var3)(var2);
                            var3 = var2.WINDOW;
                            var2 = _closure1_slot4;
                            var1 = 'requestAnimationFrame';
                            var1 = var4.bind(var5)(var3, var1, var2);
                        case 230:
                            var1 = _closure2_slot0;
                            var1 = var1.XMLHttpRequest;
                            if (!var1) {
                                _fun10968_ip = 282;
                                continue _fun10968
                            }
                        case 243:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 1;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var3 = var2.WINDOW;
                            var2 = 'XMLHttpRequest';
                            var1 = var2 in var3;
                        case 282:
                            if (!var1) {
                                _fun10968_ip = 343;
                                continue _fun10968
                            }
                        case 285:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 0;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.fill;
                            var2 = global;
                            var2 = var2.XMLHttpRequest;
                            var3 = var2.prototype;
                            var2 = _closure1_slot5;
                            var1 = 'send';
                            var1 = var4.bind(var5)(var3, var1, var2);
                        case 343:
                            var0 = _closure2_slot0;
                            var1 = var0.eventTarget;
                            if (!var1) {
                                _fun10968_ip = 404;
                                continue _fun10968
                            }
                        case 356:
                            var0 = global;
                            var2 = var0.Array;
                            var0 = var2.isArray;
                            var0 = var0.bind(var2)(var1);
                            var2 = var1;
                            if (var0) {
                                _fun10968_ip = 387;
                                continue _fun10968
                            }
                        case 380:
                            var2 = _closure1_slot2;
                        case 387:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var3 = _closure2_slot0;
                                var2 = function(arg0, arg1) { // Original name: _wrapEventTarget, environment: var0
                                    _fun10970: for (var _fun10970_ip = 0;;) switch (_fun10970_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var _closure5_slot0 = var4;
                                            var0 = arg1;
                                            var _closure5_slot1 = var0;
                                            var5 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var0 = 1;
                                            var3 = var3[var0];
                                            var0 = undefined;
                                            var3 = var5.bind(var0)(var3);
                                            var3 = var3.WINDOW;
                                            var3 = var3[var4];
                                            var4 = null;
                                            var6 = var4 == var3;
                                            var5 = undefined;
                                            if (var6) {
                                                _fun10970_ip = 67;
                                                continue _fun10970
                                            }
                                        case 62:
                                            var5 = var3.prototype;
                                        case 67:
                                            if (!(var4 != var5)) {
                                                _fun10970_ip = 169;
                                                continue _fun10970
                                            }
                                        case 71:
                                            var3 = var5.hasOwnProperty;
                                            if (!(var4 != var3)) {
                                                _fun10970_ip = 169;
                                                continue _fun10970
                                            }
                                        case 81:
                                            var3 = var5.hasOwnProperty;
                                            var9 = 'addEventListener';
                                            var3 = var3.bind(var5)(var9);
                                            if (!var3) {
                                                _fun10970_ip = 169;
                                                continue _fun10970
                                            }
                                        case 99:
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var2 = 0;
                                            var6 = var4[var2];
                                            var8 = var3.bind(var0)(var6);
                                            var7 = var8.fill;
                                            var6 = function(arg0) { // Environment: var1
                                                var1 = arg0;
                                                var _closure6_slot0 = var1;
                                                var0 = function(arg0, arg1, arg2) { // Environment: var0
                                                    _fun10972: for (var _fun10972_ip = 0;;) switch (_fun10972_ip) {
                                                        case 0:
                                                            var3 = this;
                                                            var0 = arg0;
                                                            var5 = arg1;
                                                            var4 = arg2;
                                                        case 11: // try_start_0
                                                            var1 = var5;
                                                            var1 = var1.handleEvent;
                                                            var2 = 'function';
                                                            var1 = typeof var1;
                                                            if (!(var2 === var1)) {
                                                                _fun10972_ip = 147;
                                                                continue _fun10972
                                                            }
                                                        case 31:
                                                            var2 = var5;
                                                            var13 = _closure1_slot0;
                                                            var14 = _closure1_slot1;
                                                            var1 = 1;
                                                            var1 = var14[var1];
                                                            var12 = undefined;
                                                            var8 = var13.bind(var12)(var1);
                                                            var7 = var8.wrap;
                                                            var6 = var2.handleEvent;
                                                            var1 = {};
                                                            var9 = {
                                                                'data': null,
                                                                'handled': false,
                                                                'type': 'auto.browser.browserapierrors.handleEvent'
                                                            };
                                                            var10 = {};
                                                            var11 = 0;
                                                            var11 = var14[var11];
                                                            var12 = var13.bind(var12)(var11);
                                                            var11 = var12.getFunctionName;
                                                            var11 = var11.bind(var12)(var2);
                                                            var10.handler = var11;
                                                            var11 = _closure5_slot0;
                                                            var10.target = var11;
                                                            var9.data = var10;
                                                            var1.mechanism = var9;
                                                            var1 = var7.bind(var8)(var6, var1);
                                                            var2.handleEvent = var1;
                                                        case 147: // try_end0
                                                            _fun10972_ip = 151;
                                                            continue _fun10972;
                                                        case 149: // catch_target0
                                                            CatchBlockStart(arg_register = 1);
                                                        case 151:
                                                            var1 = _closure5_slot1;
                                                            var1 = var1.unregisterOriginalCallbacks;
                                                            if (!var1) {
                                                                _fun10972_ip = 236;
                                                                continue _fun10972
                                                            }
                                                        case 167:
                                                            var6 = var0;
                                                            var2 = var5;
                                                            var1 = var3;
                                                            if (!var1) {
                                                                _fun10972_ip = 190;
                                                                continue _fun10972
                                                            }
                                                        case 179:
                                                            var8 = 'object';
                                                            var7 = typeof var3;
                                                            var1 = var8 === var7;
                                                        case 190:
                                                            if (!var1) {
                                                                _fun10972_ip = 201;
                                                                continue _fun10972
                                                            }
                                                        case 193:
                                                            var7 = 'removeEventListener';
                                                            var1 = var7 in var3;
                                                        case 201:
                                                            if (!var1) {
                                                                _fun10972_ip = 221;
                                                                continue _fun10972
                                                            }
                                                        case 204:
                                                            var7 = var3.removeEventListener;
                                                            var8 = 'function';
                                                            var7 = typeof var7;
                                                            var1 = var8 === var7;
                                                        case 221:
                                                            if (!var1) {
                                                                _fun10972_ip = 236;
                                                                continue _fun10972
                                                            }
                                                        case 224:
                                                            var1 = var3.removeEventListener;
                                                            var1 = var1.bind(var3)(var6, var2);
                                                        case 236:
                                                            var2 = _closure6_slot0;
                                                            var1 = var2.apply;
                                                            var6 = var0;
                                                            var0 = new Array(3);
                                                            var0[0] = var6;
                                                            var14 = _closure1_slot0;
                                                            var15 = _closure1_slot1;
                                                            var6 = 1;
                                                            var6 = var15[var6];
                                                            var13 = undefined;
                                                            var8 = var14.bind(var13)(var6);
                                                            var7 = var8.wrap;
                                                            var6 = var5;
                                                            var5 = {};
                                                            var9 = {
                                                                'data': null,
                                                                'handled': false,
                                                                'type': 'auto.browser.browserapierrors.addEventListener'
                                                            };
                                                            var10 = {};
                                                            var12 = 0;
                                                            var12 = var15[var12];
                                                            var13 = var14.bind(var13)(var12);
                                                            var12 = var13.getFunctionName;
                                                            var12 = var12.bind(var13)(var6);
                                                            var10.handler = var12;
                                                            var11 = _closure5_slot0;
                                                            var10.target = var11;
                                                            var9.data = var10;
                                                            var5.mechanism = var9;
                                                            var5 = var7.bind(var8)(var6, var5);
                                                            var0[1] = var5;
                                                            var0[2] = var4;
                                                            var0 = var1.bind(var2)(var3, var0);
                                                            return var0;
                                                    }
                                                };
                                                return var0;
                                            };
                                            var6 = var7.bind(var8)(var5, var9, var6);
                                            var2 = var4[var2];
                                            var4 = var3.bind(var0)(var2);
                                            var3 = var4.fill;
                                            var2 = 'removeEventListener';
                                            var1 = function(arg0) { // Environment: var1
                                                var1 = arg0;
                                                var _closure6_slot0 = var1;
                                                var0 = function(arg0, arg1, arg2) { // Environment: var0
                                                    _fun10974: for (var _fun10974_ip = 0;;) switch (_fun10974_ip) {
                                                        case 0:
                                                            var5 = this;
                                                            var2 = arg0;
                                                            var1 = arg1;
                                                            var0 = arg2;
                                                            var3 = undefined;
                                                        case 13: // try_start_0
                                                            var4 = var1;
                                                            var4 = var4.__sentry_wrapped__;
                                                            var3 = var4;
                                                            if (!var4) {
                                                                _fun10974_ip = 59;
                                                                continue _fun10974
                                                            }
                                                        case 28:
                                                            var8 = _closure6_slot0;
                                                            var7 = var8.call;
                                                            var11 = var2;
                                                            var10 = var3;
                                                            var9 = var0;
                                                            var13 = var8;
                                                            var12 = var5;
                                                            var3 = var13[var7](var12, var11, var10, var9, var8);
                                                        case 59: // try_end0
                                                            _fun10974_ip = 63;
                                                            continue _fun10974;
                                                        case 61: // catch_target0
                                                            CatchBlockStart(arg_register = 3);
                                                        case 63:
                                                            var4 = _closure6_slot0;
                                                            var3 = var4.call;
                                                            var11 = var2;
                                                            var10 = var1;
                                                            var9 = var0;
                                                            var13 = var4;
                                                            var12 = var5;
                                                            var0 = var13[var3](var12, var11, var10, var9, var8);
                                                            return var0;
                                                    }
                                                };
                                                return var0;
                                            };
                                            var1 = var3.bind(var4)(var5, var2, var1);
                                            return var0;
                                        case 169:
                                            return var0;
                                    }
                                };
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1, var3);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 404:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.setupOnce = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.browserApiErrorsIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1025]);