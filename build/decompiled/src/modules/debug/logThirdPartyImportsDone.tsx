// modules/debug/logThirdPartyImportsDone.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = dependencyMap;
    var0 = 0;
    var3 = var2[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var1 = var4.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var4
        }
    });
    var5 = 'app';
    var6 = var3;
    var1 = new var6[var4](var5, var4);
    var4 = var1 instanceof Object ? var1 : var3;
    var3 = var4.log;
    var1 = 'Finished loading third party imports';
    var1 = var3.bind(var4)(var1);
    var1 = 1;
    var2 = var2[var1];
    var1 = require;
    var3 = var1.bind(var0)(var2);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/debug/logThirdPartyImportsDone.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3, 2]);