// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var9;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun3022: for (var _fun3022_ip = 0;;) switch (_fun3022_ip) {
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
                _fun3022_ip = 74;
                continue _fun3022;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = ['headers'];
    var _closure1_slot3 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var6 = 0;
    var3 = var9[var6];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var5 = 1;
    var3 = var9[var5];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var4 = 2;
    var3 = var9[var4];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var7 = var9[var3];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var _closure1_slot10 = var6;
    var7 = 17;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0, arg1, arg2) { // Original name: WebSocket, environment: var5
            _fun3026: for (var _fun3026_ip = 0;;) switch (_fun3026_ip) {
                case 0:
                    var6 = arg0;
                    var2 = arg1;
                    var10 = arg2;
                    var3 = this;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var3, var1);
                    var0 = _closure1_slot8;
                    var12 = var0.bind(var4)(var1);
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun3026_ip = 71;
                        continue _fun3026
                    }
                case 58:
                    var0 = var12.apply;
                    var0 = var0.bind(var12)(var3, var4);
                    _fun3026_ip = 109;
                    continue _fun3026;
                case 71:
                    var5 = global;
                    var11 = var5.Reflect;
                    var8 = var11.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var4)(var3);
                    var7 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var8.bind(var11)(var12, var5, var7);
                case 109:
                    var0 = var1.bind(var4)(var3, var0);
                    var7 = 0;
                    var0.CONNECTING = var7;
                    var1 = 1;
                    var0.OPEN = var1;
                    var1 = 2;
                    var0.CLOSING = var1;
                    var1 = 3;
                    var0.CLOSED = var1;
                    var0.readyState = var7;
                    var0.url = var6;
                    var8 = 'string';
                    var1 = typeof var2;
                    var3 = var2;
                    if (!(var8 === var1)) {
                        _fun3026_ip = 187;
                        continue _fun3026
                    }
                case 176:
                    var1 = new Array(1);
                    var1[0] = var2;
                    var3 = var1;
                case 187:
                    if (var10) {
                        _fun3026_ip = 192;
                        continue _fun3026
                    }
                case 190:
                    var10 = {};
                case 192:
                    var1 = var10.headers;
                    if (!(var4 === var1)) {
                        _fun3026_ip = 204;
                        continue _fun3026
                    }
                case 202:
                    var1 = {};
                case 204:
                    var5 = _closure1_slot4;
                    var2 = _closure1_slot3;
                    var11 = var5.bind(var4)(var10, var2);
                    var2 = var11;
                    if (!var2) {
                        _fun3026_ip = 237;
                        continue _fun3026
                    }
                case 224:
                    var5 = var11.origin;
                    var5 = typeof var5;
                    var2 = var8 === var5;
                case 237:
                    if (!var2) {
                        _fun3026_ip = 281;
                        continue _fun3026
                    }
                case 240:
                    var2 = global;
                    var8 = var2.console;
                    var5 = var8.warn;
                    var2 = 'Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.';
                    var2 = var5.bind(var8)(var2);
                    var2 = var11.origin;
                    var1.origin = var2;
                    var2 = delete var11.origin;
                case 281:
                    var2 = global;
                    var8 = var2.Object;
                    var5 = var8.keys;
                    var5 = var5.bind(var8)(var11);
                    var5 = var5.length;
                    if (!(var5 > var7)) {
                        _fun3026_ip = 376;
                        continue _fun3026
                    }
                case 308:
                    var8 = var2.console;
                    var7 = var8.warn;
                    var10 = var2.Object;
                    var5 = var10.keys;
                    var11 = var5.bind(var10)(var11);
                    var10 = var11.join;
                    var5 = '`, `';
                    var10 = var10.bind(var11)(var5);
                    var5 = 'Unrecognized WebSocket connection option(s) `';
                    var10 = var5 + var10;
                    var5 = '`. Did you mean to put these under `headers`?';
                    var5 = var10 + var5;
                    var5 = var7.bind(var8)(var5);
                case 376:
                    var5 = var2.Array;
                    var2 = var5.isArray;
                    var2 = var2.bind(var5)(var3);
                    var5 = var3;
                    if (var2) {
                        _fun3026_ip = 400;
                        continue _fun3026
                    }
                case 398:
                    var5 = null;
                case 400:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var2 = var7[var2];
                    var10 = var3.bind(var4)(var2);
                    var2 = var10.prototype;
                    var8 = Object.create(var2, {
                        constructor: {
                            value: var10
                        }
                    });
                    var16 = null;
                    var17 = var8;
                    var2 = new var17[var10](var16, var15);
                    var2 = var2 instanceof Object ? var2 : var8;
                    var0._eventEmitter = var2;
                    var2 = _closure1_slot10;
                    var2 = parseFloat(var2);
                    var8 = var2 + 1;
                    _closure1_slot10 = var8;
                    var0._socketId = var2;
                    var2 = var0._registerEvents;
                    var2 = var2.bind(var0)();
                    var2 = 7;
                    var2 = var7[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.connect;
                    var2 = {};
                    var2.headers = var1;
                    var13 = var0._socketId;
                    var17 = var4;
                    var16 = var6;
                    var15 = var5;
                    var14 = var2;
                    var1 = var17[var3](var16, var15, var14, var13, var12);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'binaryType';
        var4.key = var0;
        var0 = function() { // Original name: get, environment: var5
            var0 = this;
            var0 = var0._binaryType;
            return var0;
        };
        var4.get = var0;
        var0 = function(arg0) { // Original name: set, environment: var5
            _fun3028: for (var _fun3028_ip = 0;;) switch (_fun3028_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var3 = 'blob';
                    var4 = var3 !== var1;
                    if (!var4) {
                        _fun3028_ip = 28;
                        continue _fun3028
                    }
                case 17:
                    var2 = 'arraybuffer';
                    if (!(var2 === var1)) {
                        _fun3028_ip = 189;
                        continue _fun3028
                    }
                case 28:
                    var2 = var0._binaryType;
                    var2 = var3 !== var2;
                    if (!var2) {
                        _fun3028_ip = 44;
                        continue _fun3028
                    }
                case 41:
                    var2 = var4;
                case 44:
                    if (var2) {
                        _fun3028_ip = 179;
                        continue _fun3028
                    }
                case 50:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var5 = var6[var4];
                    var4 = undefined;
                    var8 = var7.bind(var4)(var5);
                    var5 = 9;
                    var6 = var6[var5];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.isAvailable;
                    var6 = 'Native module BlobModule is required for blob support';
                    var6 = var8.bind(var4)(var7, var6);
                    if (!(var3 !== var1)) {
                        _fun3028_ip = 145;
                        continue _fun3028
                    }
                case 109:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.removeWebSocketHandler;
                    var3 = var0._socketId;
                    var3 = var6.bind(var7)(var3);
                    _fun3028_ip = 179;
                    continue _fun3028;
                case 145:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.addWebSocketHandler;
                    var2 = var0._socketId;
                    var2 = var3.bind(var4)(var2);
                case 179:
                    var0._binaryType = var1;
                    var0 = undefined;
                    return var0;
                case 189:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = "binaryType must be either 'blob' or 'arraybuffer'";
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.set = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'close';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: close, environment: var5
            _fun3029: for (var _fun3029_ip = 0;;) switch (_fun3029_ip) {
                case 0:
                    var3 = this;
                    var1 = var3.readyState;
                    var0 = var3.CLOSING;
                    var0 = var1 !== var0;
                    if (!var0) {
                        _fun3029_ip = 38;
                        continue _fun3029
                    }
                case 22:
                    var2 = var3.readyState;
                    var1 = var3.CLOSED;
                    var0 = var2 !== var1;
                case 38:
                    if (!var0) {
                        _fun3029_ip = 71;
                        continue _fun3029
                    }
                case 41:
                    var0 = var3.CLOSING;
                    var3.readyState = var0;
                    var2 = var3._close;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'send';
        var4.key = var6;
        var6 = function(arg0) { // Original name: send, environment: var5
            _fun3030: for (var _fun3030_ip = 0;;) switch (_fun3030_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0.readyState;
                    var1 = var0.CONNECTING;
                    if (!(var2 !== var1)) {
                        _fun3030_ip = 321;
                        continue _fun3030
                    }
                case 25:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var3 instanceof var2;
                    if (var2) {
                        _fun3030_ip = 240;
                        continue _fun3030
                    }
                case 60:
                    var5 = 'string';
                    var2 = typeof var3;
                    if (!(var5 === var2)) {
                        _fun3030_ip = 114;
                        continue _fun3030
                    }
                case 71:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.send;
                    var2 = var0._socketId;
                    var2 = var5.bind(var6)(var3, var2);
                    _fun3030_ip = 238;
                    continue _fun3030;
                case 114:
                    var2 = global;
                    var5 = var2.ArrayBuffer;
                    var5 = var3 instanceof var5;
                    if (var5) {
                        _fun3030_ip = 183;
                        continue _fun3030
                    }
                case 129:
                    var6 = var2.ArrayBuffer;
                    var5 = var6.isView;
                    var5 = var5.bind(var6)(var3);
                    if (var5) {
                        _fun3030_ip = 183;
                        continue _fun3030
                    }
                case 149:
                    var6 = var2.Error;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = 'Unsupported data type';
                    var11 = var5;
                    var2 = new var11[var6](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var5;
                    throw var2;
                case 183:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 7;
                    var2 = var8[var2];
                    var7 = var5.bind(var4)(var2);
                    var6 = var7.sendBinary;
                    var2 = 11;
                    var2 = var8[var2];
                    var2 = var5.bind(var4)(var2);
                    var5 = var2.bind(var4)(var3);
                    var2 = var0._socketId;
                    var2 = var6.bind(var7)(var5, var2);
                case 238:
                    return var4;
                case 240:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 8;
                    var1 = var5[var1];
                    var8 = var2.bind(var4)(var1);
                    var1 = 9;
                    var6 = var5[var1];
                    var6 = var2.bind(var4)(var6);
                    var7 = var6.isAvailable;
                    var6 = 'Native module BlobModule is required for blob support';
                    var6 = var8.bind(var4)(var7, var6);
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.sendOverSocket;
                    var0 = var0._socketId;
                    var0 = var1.bind(var2)(var3, var0);
                    var0 = undefined;
                    return var0;
                case 321:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = 'INVALID_STATE_ERR';
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'ping';
        var4.key = var6;
        var6 = function() { // Original name: ping, environment: var5
            _fun3031: for (var _fun3031_ip = 0;;) switch (_fun3031_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.readyState;
                    var0 = var1.CONNECTING;
                    if (!(var2 !== var0)) {
                        _fun3031_ip = 63;
                        continue _fun3031
                    }
                case 19:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.ping;
                    var1 = var1._socketId;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                case 63:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = 'INVALID_STATE_ERR';
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = '_close';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: _close, environment: var5
            _fun3032: for (var _fun3032_ip = 0;;) switch (_fun3032_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var1 = this;
                    var9 = 1000;
                    var4 = 'number';
                    var3 = typeof var2;
                    if (!(var4 === var3)) {
                        _fun3032_ip = 29;
                        continue _fun3032
                    }
                case 26:
                    var9 = var2;
                case 29:
                    var8 = '';
                    var3 = 'string';
                    var2 = typeof var0;
                    if (!(var3 === var2)) {
                        _fun3032_ip = 47;
                        continue _fun3032
                    }
                case 44:
                    var8 = var0;
                case 47:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var4 = var3[var0];
                    var0 = undefined;
                    var7 = var5.bind(var0)(var4);
                    var6 = var7.close;
                    var4 = var1._socketId;
                    var4 = var6.bind(var7)(var9, var8, var4);
                    var4 = 9;
                    var3 = var3[var4];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.isAvailable;
                    if (!var3) {
                        _fun3032_ip = 126;
                        continue _fun3032
                    }
                case 112:
                    var6 = var1._binaryType;
                    var5 = 'blob';
                    var3 = var5 === var6;
                case 126:
                    if (!var3) {
                        _fun3032_ip = 163;
                        continue _fun3032
                    }
                case 129:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.removeWebSocketHandler;
                    var1 = var1._socketId;
                    var1 = var2.bind(var3)(var1);
                case 163:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = '_unregisterEvents';
        var4.key = var6;
        var6 = function() { // Original name: _unregisterEvents, environment: var5
            var1 = this;
            var3 = var1._subscriptions;
            var2 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = var1.remove;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var0 = new Array(0);
            var1._subscriptions = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = '_registerEvents';
        var4.key = var6;
        var6 = function() { // Original name: _registerEvents, environment: var5
            var1 = this;
            var _closure3_slot0 = var1;
            var5 = var1._eventEmitter;
            var4 = var5.addListener;
            var3 = 'websocketMessage';
            var0 = function(arg0) { // Environment: var2
                _fun3036: for (var _fun3036_ip = 0;;) switch (_fun3036_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.id;
                        var2 = _closure3_slot0;
                        var2 = var2._socketId;
                        if (!(var3 === var2)) {
                            _fun3036_ip = 228;
                            continue _fun3036
                        }
                    case 28:
                        var3 = var0.data;
                        var4 = var0.type;
                        var2 = 'binary';
                        if (!(var2 !== var4)) {
                            _fun3036_ip = 97;
                            continue _fun3036
                        }
                    case 46:
                        var2 = 'blob';
                        if (!(var2 === var4)) {
                            _fun3036_ip = 144;
                            continue _fun3036
                        }
                    case 54:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 9;
                        var4 = var4[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.createFromOptions;
                        var2 = var0.data;
                        var3 = var4.bind(var5)(var2);
                        _fun3036_ip = 144;
                        continue _fun3036;
                    case 97:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var4 = var4[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.toByteArray;
                        var2 = var0.data;
                        var2 = var4.bind(var5)(var2);
                        var3 = var2.buffer;
                    case 144:
                        var0 = var0.raw_length;
                        var2 = _closure3_slot0;
                        var1 = var2.dispatchEvent;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 13;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = {};
                        var4.data = var3;
                        var4.raw_length = var0;
                        var0 = var5.prototype;
                        var3 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var8 = 'message';
                        var9 = var3;
                        var7 = var4;
                        var0 = new var9[var5](var8, var7, var6);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var0 = var1.bind(var2)(var0);
                    case 228:
                        var0 = undefined;
                        return var0;
                }
            };
            var3 = var4.bind(var5)(var3, var0);
            var0 = new Array(4);
            var0[0] = var3;
            var6 = var1._eventEmitter;
            var5 = var6.addListener;
            var4 = 'websocketOpen';
            var3 = function(arg0) { // Environment: var2
                _fun3037: for (var _fun3037_ip = 0;;) switch (_fun3037_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.id;
                        var2 = _closure3_slot0;
                        var2 = var2._socketId;
                        if (!(var3 === var2)) {
                            _fun3037_ip = 113;
                            continue _fun3037
                        }
                    case 25:
                        var2 = _closure3_slot0;
                        var1 = var2.OPEN;
                        var2.readyState = var1;
                        var0 = var0.protocol;
                        var2.protocol = var0;
                        var1 = var2.dispatchEvent;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 14;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var0 = var4.prototype;
                        var3 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var5 = 'open';
                        var6 = var3;
                        var0 = new var6[var4](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var0 = var1.bind(var2)(var0);
                    case 113:
                        var0 = undefined;
                        return var0;
                }
            };
            var3 = var5.bind(var6)(var4, var3);
            var0[1] = var3;
            var6 = var1._eventEmitter;
            var5 = var6.addListener;
            var4 = 'websocketClosed';
            var3 = function(arg0) { // Environment: var2
                _fun3038: for (var _fun3038_ip = 0;;) switch (_fun3038_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.id;
                        var2 = _closure3_slot0;
                        var2 = var2._socketId;
                        if (!(var3 === var2)) {
                            _fun3038_ip = 149;
                            continue _fun3038
                        }
                    case 28:
                        var1 = _closure3_slot0;
                        var2 = var1.CLOSED;
                        var1.readyState = var2;
                        var2 = var1.dispatchEvent;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 15;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var3 = var0.code;
                        var4.code = var3;
                        var0 = var0.reason;
                        var4.reason = var0;
                        var0 = var5.prototype;
                        var3 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var7 = 'close';
                        var8 = var3;
                        var6 = var4;
                        var0 = new var8[var5](var7, var6, var5);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var0 = var2.bind(var1)(var0);
                        var0 = var1._unregisterEvents;
                        var0 = var0.bind(var1)();
                        var0 = var1.close;
                        var0 = var0.bind(var1)();
                    case 149:
                        var0 = undefined;
                        return var0;
                }
            };
            var3 = var5.bind(var6)(var4, var3);
            var0[2] = var3;
            var5 = var1._eventEmitter;
            var4 = var5.addListener;
            var3 = 'websocketFailed';
            var2 = function(arg0) { // Environment: var2
                _fun3039: for (var _fun3039_ip = 0;;) switch (_fun3039_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.id;
                        var2 = _closure3_slot0;
                        var2 = var2._socketId;
                        if (!(var3 === var2)) {
                            _fun3039_ip = 196;
                            continue _fun3039
                        }
                    case 28:
                        var1 = _closure3_slot0;
                        var2 = var1.CLOSED;
                        var1.readyState = var2;
                        var3 = var1.dispatchEvent;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 14;
                        var2 = var6[var2];
                        var4 = undefined;
                        var8 = var5.bind(var4)(var2);
                        var2 = var8.prototype;
                        var7 = Object.create(var2, {
                            constructor: {
                                value: var8
                            }
                        });
                        var10 = 'error';
                        var11 = var7;
                        var2 = new var11[var8](var10, var9);
                        var2 = var2 instanceof Object ? var2 : var7;
                        var2 = var3.bind(var1)(var2);
                        var2 = var1.dispatchEvent;
                        var3 = 15;
                        var3 = var6[var3];
                        var5 = var5.bind(var4)(var3);
                        var4 = {};
                        var3 = 1006;
                        var4.code = var3;
                        var0 = var0.message;
                        var4.reason = var0;
                        var0 = var5.prototype;
                        var3 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = 'close';
                        var11 = var3;
                        var9 = var4;
                        var0 = new var11[var5](var10, var9, var8);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var0 = var2.bind(var1)(var0);
                        var0 = var1._unregisterEvents;
                        var0 = var0.bind(var1)();
                        var0 = var1.close;
                        var0 = var0.bind(var1)();
                    case 196:
                        var0 = undefined;
                        return var0;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var0[3] = var2;
            var1._subscriptions = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'onclose';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.getEventHandlerAttribute;
            var1 = this;
            var0 = 'close';
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.get = var6;
        var6 = function(arg0) { // Original name: set, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.setEventHandlerAttribute;
            var3 = this;
            var2 = 'close';
            var1 = arg0;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var4.set = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'onerror';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
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
        var6 = function(arg0) { // Original name: set, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
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
        var0[8] = var4;
        var4 = {};
        var6 = 'onmessage';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.getEventHandlerAttribute;
            var1 = this;
            var0 = 'message';
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.get = var6;
        var6 = function(arg0) { // Original name: set, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.setEventHandlerAttribute;
            var3 = this;
            var2 = 'message';
            var1 = arg0;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var4.set = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'onopen';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.getEventHandlerAttribute;
            var1 = this;
            var0 = 'open';
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.get = var6;
        var5 = function(arg0) { // Original name: set, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.setEventHandlerAttribute;
            var3 = this;
            var2 = 'open';
            var1 = arg0;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var4.set = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var7);
    var1.CONNECTING = var6;
    var1.OPEN = var5;
    var1.CLOSING = var4;
    var1.CLOSED = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 209, 218, 44, 194, 197, 212, 206, 220, 201, 221, 199, 200]);