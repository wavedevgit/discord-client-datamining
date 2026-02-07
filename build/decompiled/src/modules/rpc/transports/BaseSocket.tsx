// modules/rpc/transports/BaseSocket.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.RPC_VERSION;
    var _closure1_slot4 = var6;
    var3 = var3.RPCCloseCodes;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1, arg2() {
            var3 = arg1;
            var2 = this;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = arg0;
            var2.transport = var4;
            var2.version = var3;
            var4 = arg2;
            var2.encoding = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var5[var1];
            var4 = var4.bind(var0)(var1);
            var1 = var4.uniqueId;
            var1 = var1.bind(var4)();
            var2.id = var1;
            var4 = {
                'authing': false,
                'scopes': null,
                'accessToken': null
            };
            var1 = new Array(0);
            var4.scopes = var1;
            var1 = global;
            var7 = var1.Date;
            var5 = var7.prototype;
            var6 = Object.create(var5, {
                constructor: {
                    value: var7
                }
            });
            var9 = 0;
            var10 = var6;
            var5 = new var10[var7](var9, var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var4.expires = var5;
            var2.authorization = var4;
            var4 = {
                'id': null,
                'name': null,
                'icon': null
            };
            var2.application = var4;
            var1 = var1.AbortController;
            var4 = var1.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var1
                }
            });
            var10 = var4;
            var1 = new var10[var1](var9);
            var1 = var1 instanceof Object ? var1 : var4;
            var2.abortController = var1;
            var1 = var2.checkRpcVersion;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'checkRpcVersion';
        var0.key = var4;
        var1 = function arg0() {
            _fun64458: for (var _fun64458_ip = 0;;) switch (_fun64458_ip) {
                case 0:
                    var4 = arg0;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun64458_ip = 31;
                        continue _fun64458
                    }
                case 9:
                    var0 = _closure1_slot4;
                    if (!(!(var4 > var0))) {
                        _fun64458_ip = 31;
                        continue _fun64458
                    }
                case 20:
                    var0 = 1;
                    if (!(!(var4 < var0))) {
                        _fun64458_ip = 31;
                        continue _fun64458
                    }
                case 27:
                    var0 = undefined;
                    return var0;
                case 31:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var0 = _closure1_slot5;
                    var0 = var0.INVALID_VERSION;
                    var2.closeCode = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'Invalid Version: ';
                    var5 = var1.bind(var0)(var4);
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var1;
                    var6 = var2;
                    var0 = new var7[var3](var6, var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/transports/BaseSocket.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 660, 22, 7998, 2]);