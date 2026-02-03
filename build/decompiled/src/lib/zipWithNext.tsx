// lib/zipWithNext.tsx
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
    var1 = 'lib/zipWithNext.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1() {
        _fun93480: for (var _fun93480_ip = 0;;) switch (_fun93480_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var1 = var6.length;
                var0 = 2;
                if (!(!(var1 < var0))) {
                    _fun93480_ip = 82;
                    continue _fun93480
                }
            case 18:
                var0 = new Array(0);
                var1 = 0;
                var4 = var6[var1];
                var1 = var6.length;
                var3 = 1;
                var1 = var3 < var1;
                var2 = undefined;
                if (!var1) {
                    _fun93480_ip = 80;
                    continue _fun93480
                }
            case 45:
                var7 = var6[var3];
                var8 = var0.push;
                var1 = var5.bind(var2)(var4, var7);
                var1 = var8.bind(var0)(var1);
                var3 = var3 + 1;
                var1 = var6.length;
                var4 = var7;
                if (var3 < var1) {
                    _fun93480_ip = 45;
                    continue _fun93480
                }
            case 80:
                return var0;
            case 82:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);