// modules/debug/logAppStart.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var5 = var3.bind(var0)(var1);
    var1 = var5.clear;
    var1 = var1.bind(var5)();
    var1 = 1;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var6 = var1.default;
    var1 = var6.prototype;
    var5 = Object.create(var1, {
        constructor: {
            value: var6
        }
    });
    var9 = 'app';
    var10 = var5;
    var1 = new var10[var6](var9, var8);
    var6 = var1 instanceof Object ? var1 : var5;
    var5 = var6.log;
    var1 = 'Initializing app';
    var1 = var5.bind(var6)(var1);
    var1 = 2;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.default;
    var6 = var5.loadIndex;
    var5 = var6.recordStart;
    var5 = var5.bind(var6)();
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.default;
    var5 = var1.loadImports;
    var1 = var5.recordStart;
    var1 = var1.bind(var5)();
    var1 = 3;
    var1 = var4[var1];
    var4 = var3.bind(var0)(var1);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/debug/logAppStart.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = null;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2, 3, 14, 2]);