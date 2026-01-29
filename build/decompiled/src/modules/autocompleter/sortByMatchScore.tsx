// modules/autocompleter/sortByMatchScore.tsx
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
    var1 = 'modules/autocompleter/sortByMatchScore.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0, arg1) { // Original name: sortByMatchScore, environment: var1
        _fun49425: for (var _fun49425_ip = 0;;) switch (_fun49425_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var3 = var0.score;
                var2 = var1.score;
                if (!(var3 === var2)) {
                    _fun49425_ip = 135;
                    continue _fun49425
                }
            case 22:
                var4 = var0.sortable;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun49425_ip = 62;
                    continue _fun49425
                }
            case 34:
                var6 = var0.comparator;
                var3 = var5 == var6;
                var2 = undefined;
                if (var3) {
                    _fun49425_ip = 59;
                    continue _fun49425
                }
            case 49:
                var3 = var6.toLocaleLowerCase;
                var2 = var3.bind(var6)();
            case 59:
                var4 = var2;
            case 62:
                var6 = var5 != var4;
                var3 = '';
                var2 = var3;
                if (!var6) {
                    _fun49425_ip = 79;
                    continue _fun49425
                }
            case 76:
                var2 = var4;
            case 79:
                var4 = var0.sortable;
                if (!(var5 == var4)) {
                    _fun49425_ip = 117;
                    continue _fun49425
                }
            case 89:
                var8 = var1.comparator;
                var7 = var5 == var8;
                var6 = undefined;
                if (var7) {
                    _fun49425_ip = 114;
                    continue _fun49425
                }
            case 104:
                var7 = var8.toLocaleLowerCase;
                var6 = var7.bind(var8)();
            case 114:
                var4 = var6;
            case 117:
                var5 = var5 != var4;
                if (!var5) {
                    _fun49425_ip = 127;
                    continue _fun49425
                }
            case 124:
                var3 = var4;
            case 127:
                if (!(!(var2 < var3))) {
                    _fun49425_ip = 158;
                    continue _fun49425
                }
            case 131:
                if (!(!(var2 > var3))) {
                    _fun49425_ip = 153;
                    continue _fun49425
                }
            case 135:
                var1 = var1.score;
                var0 = var0.score;
                var0 = var1 - var0;
                return var0;
            case 153:
                var0 = 1;
                return var0;
            case 158:
                var0 = -1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);