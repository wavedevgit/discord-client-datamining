// modules/channel/sanitizeGuildTextChannelName.tsx
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
    var1 = 'modules/channel/sanitizeGuildTextChannelName.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0) { // Original name: sanitizeGuildTextChannelName, environment: var1
        var3 = arg0;
        var2 = var3.replace;
        var1 = /[\s-~]+/g;
        var0 = '-';
        var2 = var2.bind(var3)(var1, var0);
        var1 = var2.replace;
        var0 = /^-+/;
        var3 = '';
        var2 = var1.bind(var2)(var0, var3);
        var1 = var2.replace;
        var0 = /[\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g;
        var1 = var1.bind(var2)(var0, var3);
        var0 = var1.toLowerCase;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);