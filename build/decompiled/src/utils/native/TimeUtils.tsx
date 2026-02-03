// utils/native/TimeUtils.tsx
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
    var1 = 'utils/native/TimeUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1() {
        _fun37659: for (var _fun37659_ip = 0;;) switch (_fun37659_ip) {
            case 0:
                var2 = arg1;
                var0 = arg0;
                var0 = var0 | 0;
                var1 = 60;
                var7 = var0 % var1;
                var0 = var0 - var7;
                var4 = var0 / var1;
                var1 = null;
                var5 = var1 == var2;
                var3 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun37659_ip = 43;
                    continue _fun37659
                }
            case 37:
                var0 = var2.padMinutes;
            case 43:
                if (!(var1 != var0)) {
                    _fun37659_ip = 50;
                    continue _fun37659
                }
            case 47:
                if (var0) {
                    _fun37659_ip = 123;
                    continue _fun37659
                }
            case 50:
                var0 = global;
                var1 = var0.String;
                var6 = var1.bind(var3)(var4);
                var1 = var0.String;
                var8 = var1.bind(var3)(var7);
                var5 = var8.padStart;
                var2 = 2;
                var1 = '0';
                var5 = var5.bind(var8)(var2, var1);
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ':';
                var0 = var2.bind(var1)(var6, var0, var5);
                _fun37659_ip = 206;
                continue _fun37659;
            case 123:
                var1 = global;
                var2 = var1.String;
                var5 = var2.bind(var3)(var4);
                var2 = var5.padStart;
                var6 = 2;
                var4 = '0';
                var5 = var2.bind(var5)(var6, var4);
                var2 = var1.String;
                var3 = var2.bind(var3)(var7);
                var2 = var3.padStart;
                var4 = var2.bind(var3)(var6, var4);
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ':';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 206:
                return var0;
        }
    };
    var2.getTimeFormat = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);