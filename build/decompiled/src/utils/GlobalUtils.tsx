// utils/GlobalUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var0 = var0.window;
    var0 = var0.GLOBAL_ENV;
    var3 = var0.PROJECT_ENV;
    var0 = 'development';
    var0 = var0 === var3;
    var _closure1_slot0 = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/GlobalUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = false;
        return var0;
    };
    var2.isDiscordFrontendDevelopment = var3;
    var3 = function() {
        var0 = _closure1_slot0;
        return var0;
    };
    var2.isDiscordBackendDevelopment = var3;
    var3 = function arg0() {
        var0 = global;
        var2 = var0.Error;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var1 = 'Unhandled value: ';
        var0 = arg0;
        var4 = var3.bind(var1)(var0);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var2.assertNever = var3;
    var3 = function arg0() {
        var1 = null;
        var0 = arg0;
        var0 = var1 != var0;
        return var0;
    };
    var2.isNotNullish = var3;
    var3 = function arg0, arg1() {
        var2 = arg1;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isIn = var3;
    var1 = function arg0() {
        var1 = arg0;
        var0 = 1;
        var1 = var1[var0];
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.isObjectEntryNotNullish = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);