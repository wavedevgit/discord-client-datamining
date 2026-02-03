// modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 2;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.origin;
        var8 = var0.postMessageToRPCClient;
        var7 = var0.frameId;
        var6 = var0.version;
        var5 = var0.encoding;
        var4 = var0.logger;
        var _closure2_slot0 = var4;
        var3 = var0.postClose;
        var10 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var10.bind(var0)(var2);
        var0 = {};
        var0.origin = var9;
        var0.postMessageToRPCClient = var8;
        var0.frameId = var7;
        var0.version = var6;
        var0.encoding = var5;
        var0.logger = var4;
        var0.postClose = var3;
        var1 = function arg0, arg1() {
            var4 = _closure2_slot0;
            var3 = var4.info;
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = 'Socket Emit: ';
            var0 = arg1;
            var2 = var2.bind(var1)(var0);
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
        var0.onSendingToRPCClient = var1;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var12 = var1;
        var11 = var0;
        var0 = new var12[var2](var11, var10);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7931, 7919, 2]);