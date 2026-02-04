// utils/SortedArrayUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function arg0, arg1, arg2() {
        _fun39160: for (var _fun39160_ip = 0;;) switch (_fun39160_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var6 = arg2;
                var5 = var8.length;
                var4 = 0;
                var9 = var4 < var5;
                var3 = 1;
                var2 = undefined;
                var1 = 0;
                var0 = 0;
                if (!var9) {
                    _fun39160_ip = 74;
                    continue _fun39160
                }
            case 32:
                var9 = var1 + var5;
                var10 = var9 >>> var3;
                var9 = var8[var10];
                var11 = var6.bind(var2)(var9, var7);
                var9 = var10;
                if (!(var11 < var4)) {
                    _fun39160_ip = 64;
                    continue _fun39160
                }
            case 57:
                var1 = var10 + var3;
                var9 = var5;
            case 64:
                var5 = var9;
                var0 = var1;
                if (var0 < var5) {
                    _fun39160_ip = 32;
                    continue _fun39160
                }
            case 74:
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/SortedArrayUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.insertionIndex = var3;
    var1 = function arg0, arg1, arg2() {
        var5 = arg0;
        var4 = arg1;
        var2 = _closure1_slot0;
        var0 = undefined;
        var1 = arg2;
        var3 = var2.bind(var0)(var5, var4, var1);
        var2 = var5.splice;
        var1 = 0;
        var1 = var2.bind(var5)(var3, var1, var4);
        return var0;
    };
    var2.insert = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);