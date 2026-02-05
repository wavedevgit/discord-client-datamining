// modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx
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
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var13 = 'RPCServer:PostMessage';
    var14 = var7;
    var3 = new var14[var8](var13, var12);
    var12 = var3 instanceof Object ? var3 : var7;
    var3 = 2;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.validateSocketClient;
    var3 = 4;
    var3 = var5[var3];
    var11 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var10 = function(arg0, arg1, arg2) { // Environment: var1
        var4 = arg1;
        var3 = var4.info;
        var0 = arg2;
        var2 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'Socket Message: ';
        var2 = var1.bind(var0)(var2);
        var5 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var1);
        var1 = arg0;
        var1 = var5.bind(var0)(var1);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var14 = var3;
    var13 = var7;
    var1 = new var14[var8](var13, var12, var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3, 7946, 7947, 7953, 7957, 2]);