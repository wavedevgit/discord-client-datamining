// modules/gateway/createWebSocket.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/gateway/createWebSocket.android.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0, arg1) { // Original name: createWebSocket, environment: var1
        var1 = global;
        var4 = var1.WebSocket;
        var3 = {};
        var0 = {};
        var1 = var1.window;
        var1 = var1.GLOBAL_ENV;
        var6 = var1.WEBAPP_ENDPOINT;
        var5 = var6.replace;
        var2 = '//';
        var1 = '';
        var1 = var5.bind(var6)(var2, var1);
        var0.Origin = var1;
        var3.headers = var0;
        var0 = var4.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var9 = arg0;
        var8 = arg1;
        var10 = var1;
        var7 = var3;
        var0 = new var10[var4](var9, var8, var7, var6);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);