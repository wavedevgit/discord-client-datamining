// modules/messages/getDisplayFilename.tsx
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
    var1 = 'modules/messages/getDisplayFilename.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun56237: for (var _fun56237_ip = 0;;) switch (_fun56237_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.title;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun56237_ip = 24;
                    continue _fun56237
                }
            case 14:
                var1 = var0.filename;
                if (!(var2 == var1)) {
                    _fun56237_ip = 32;
                    continue _fun56237
                }
            case 24:
                var1 = var0.filename;
                return var1;
            case 32:
                var3 = var0.filename;
                var2 = var3.lastIndexOf;
                var1 = '.';
                var4 = var2.bind(var3)(var1);
                var1 = 0;
                var2 = var4 > var1;
                var1 = '';
                if (!var2) {
                    _fun56237_ip = 83;
                    continue _fun56237
                }
            case 66:
                var3 = var0.filename;
                var2 = var3.substr;
                var1 = var2.bind(var3)(var4);
            case 83:
                var0 = var0.title;
                var0 = var0 + var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);