// utils/StringUtils.tsx
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
    var6 = var3.bind(var0)(var1);
    var5 = var6.fileFinishedImporting;
    var1 = 'utils/StringUtils.tsx';
    var1 = var5.bind(var6)(var1);
    var1 = function(arg0) { // Original name: isNullOrEmpty, environment: var1
        _fun17830: for (var _fun17830_ip = 0;;) switch (_fun17830_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 == var1;
                if (var0) {
                    _fun17830_ip = 23;
                    continue _fun17830
                }
            case 12:
                var2 = var1.length;
                var1 = 0;
                var0 = var1 === var2;
            case 23:
                return var0;
        }
    };
    var2.isNullOrEmpty = var1;
    var1 = 1;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.upperCaseFirstChar;
    var2.upperCaseFirstChar = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.getAcronym;
    var2.getAcronym = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.cssValueToNumber;
    var2.cssValueToNumber = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.stripDiacritics;
    var2.stripDiacritics = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.truncateText;
    var2.truncateText = var5;
    var5 = var4[var1];
    var5 = var3.bind(var0)(var5);
    var5 = var5.normalize;
    var2.normalize = var5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.countGraphemeClusters;
    var2.countGraphemeClusters = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2, 1608]);