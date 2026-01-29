// modules/rpc/helpers/unavailableCommand.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var1 = var1.RPCErrors;
    var _closure1_slot2 = var1;
    var3 = {};
    var1 = function(arg0) { // Original name: handler, environment: var4
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var0 = _closure1_slot2;
        var0 = var0.INVALID_COMMAND;
        var2.errorCode = var0;
        var0 = arg0;
        var4 = var0.cmd;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'Unsupported command: ';
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
    };
    var3.handler = var1;
    var1 = {};
    var4 = function(arg0) { // Original name: handler, environment: var4
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var0 = _closure1_slot2;
        var0 = var0.INVALID_COMMAND;
        var2.errorCode = var0;
        var0 = arg0;
        var4 = var0.cmd;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'Deprecated command: ';
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
    };
    var1.handler = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/helpers/unavailableCommand.tsx';
    var4 = var5.bind(var6)(var4);
    var2.unsupportedCommand = var3;
    var2.deprecatedCommand = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 7887, 2]);