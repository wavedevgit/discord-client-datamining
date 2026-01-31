// ../discord_common/js/packages/rpc-schema/helpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var4 = var3.RPCCommands;
    var3 = var3.RPCEvents;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/rpc-schema/helpers.tsx';
    var5 = var6.bind(var7)(var5);
    var2.RPCCommand = var4;
    var2.RPCEvent = var3;
    var3 = function arg0() {
        var1 = arg0;
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.unknown;
        var0 = true;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.joiReqObj = var3;
    var1 = function arg0() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.joiEnum = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [483, 2]);