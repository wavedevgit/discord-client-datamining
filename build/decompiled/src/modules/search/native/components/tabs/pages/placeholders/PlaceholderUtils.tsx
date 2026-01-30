// modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx
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
    var1 = 'modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0) { // Original name: getAdjustedPlaceholderCount, environment: var1
        _fun106538: for (var _fun106538_ip = 0;;) switch (_fun106538_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.numColumns;
                var1 = var0.numResults;
                var2 = var0.placeholderCount;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun106538_ip = 39;
                    continue _fun106538
                }
            case 27:
                var1 = var1 % var3;
                var1 = var3 - var1;
                var0 = var2 + var1;
            case 39:
                return var0;
        }
    };
    var2.getAdjustedPlaceholderCount = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);