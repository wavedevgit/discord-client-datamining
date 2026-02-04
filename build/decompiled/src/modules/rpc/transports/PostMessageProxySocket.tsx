// modules/rpc/transports/PostMessageProxySocket.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun63947: for (var _fun63947_ip = 0;;) switch (_fun63947_ip) {
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
                _fun63947_ip = 74;
                continue _fun63947;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TransportTypes;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RPCCloseCodes;
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun63951: for (var _fun63951_ip = 0;;) switch (_fun63951_ip) {
                case 0:
                    var0 = arg0;
                    var11 = this;
                    var9 = var0.origin;
                    var8 = var0.postMessageToRPCClient;
                    var7 = var0.frameId;
                    var1 = var0.version;
                    var4 = var0.encoding;
                    var6 = var0.logger;
                    var5 = var0.postClose;
                    var2 = var0.onSendingToRPCClient;
                    var12 = _closure1_slot2;
                    var10 = _closure2_slot0;
                    var3 = undefined;
                    var12 = var12.bind(var3)(var11, var10);
                    var12 = _closure1_slot7;
                    var12 = var12.POST_MESSAGE;
                    var16 = new Array(3);
                    var16[0] = var12;
                    var16[1] = var1;
                    var16[2] = var4;
                    var1 = _closure1_slot5;
                    var15 = var1.bind(var3)(var10);
                    var10 = _closure1_slot4;
                    var1 = _closure1_slot9;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun63951_ip = 139;
                        continue _fun63951
                    }
                case 126:
                    var1 = var15.apply;
                    var1 = var1.bind(var15)(var11, var16);
                    _fun63951_ip = 173;
                    continue _fun63951;
                case 139:
                    var12 = global;
                    var14 = var12.Reflect;
                    var13 = var14.construct;
                    var12 = _closure1_slot5;
                    var12 = var12.bind(var3)(var11);
                    var12 = var12.constructor;
                    var1 = var13.bind(var14)(var15, var16, var12);
                case 173:
                    var1 = var10.bind(var3)(var11, var1);
                    var11 = ['etf', 'json'];
                    var10 = var11.indexOf;
                    var11 = var10.bind(var11)(var4);
                    var10 = -1;
                    if (!(var10 !== var11)) {
                        _fun63951_ip = 335;
                        continue _fun63951
                    }
                case 211:
                    var10 = 'etf';
                    if (!(var10 !== var4)) {
                        _fun63951_ip = 267;
                        continue _fun63951
                    }
                case 221:
                    var1.origin = var9;
                    var1.postMessageToRPCClient = var8;
                    var1.frameId = var7;
                    var1.logger = var6;
                    var1.postClose = var5;
                    var1.onSendingToRPCClient = var2;
                    var2 = false;
                    var1.closed = var2;
                    return var1;
                case 267:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 7;
                    var1 = var5[var1];
                    var6 = var2.bind(var3)(var1);
                    var5 = {};
                    var1 = _closure1_slot8;
                    var1 = var1.INVALID_ENCODING;
                    var5.closeCode = var1;
                    var1 = var6.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var6
                        }
                    });
                    var18 = 'Erlpack cannot be used on this client';
                    var20 = var2;
                    var19 = var5;
                    var1 = new var20[var6](var19, var18, var17);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 335:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 7;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = {};
                    var0 = _closure1_slot8;
                    var0 = var0.INVALID_ENCODING;
                    var2.closeCode = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'Invalid Encoding: ';
                    var18 = var1.bind(var0)(var4);
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var20 = var1;
                    var19 = var2;
                    var0 = new var20[var3](var19, var18, var17);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'send';
        var4.key = var0;
        var0 = function arg0() {
            _fun63952: for (var _fun63952_ip = 0;;) switch (_fun63952_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var3 = var4.onSendingToRPCClient;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun63952_ip = 35;
                        continue _fun63952
                    }
                case 18:
                    var2 = var3.call;
                    var0 = var4.id;
                    var0 = var2.bind(var3)(var4, var1, var0);
                case 35:
                    var3 = var4.postMessageToRPCClient;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var5.bind(var0)(var2);
                    var5 = var2.FRAME;
                    var2 = new Array(2);
                    var2[0] = var5;
                    var2[1] = var1;
                    var1 = var4.origin;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'close';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun63953: for (var _fun63953_ip = 0;;) switch (_fun63953_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.closed;
                    if (var0) {
                        _fun63953_ip = 53;
                        continue _fun63953
                    }
                case 12:
                    var4 = var1.postClose;
                    var3 = var1.origin;
                    var2 = {};
                    var0 = arg0;
                    var2.code = var0;
                    var0 = arg1;
                    var2.message = var0;
                    var0 = var1.postMessageToRPCClient;
                    var0 = var4.bind(var1)(var3, var2, var0);
                case 53:
                    var0 = true;
                    var1.closed = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/transports/PostMessageProxySocket.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3356, 660, 7930, 7929, 7940, 2]);