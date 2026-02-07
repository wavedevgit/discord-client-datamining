// utils/native/StyleSheetUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var1 = {};
    var0 = function arg0, arg1() {
        _fun44604: for (var _fun44604_ip = 0;;) switch (_fun44604_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var5 = null;
                if (!(var5 != var6)) {
                    _fun44604_ip = 110;
                    continue _fun44604
                }
            case 12:
                var0 = '';
                if (!(var0 !== var6)) {
                    _fun44604_ip = 110;
                    continue _fun44604
                }
            case 20:
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var7);
                if (var0) {
                    _fun44604_ip = 62;
                    continue _fun44604
                }
            case 41:
                if (!(var5 != var7)) {
                    _fun44604_ip = 110;
                    continue _fun44604
                }
            case 45:
                var1 = 'object';
                var0 = typeof var7;
                if (!(var1 === var0)) {
                    _fun44604_ip = 110;
                    continue _fun44604
                }
            case 56:
                var0 = var7[var6];
                return var0;
            case 62:
                var1 = var7.length;
                var0 = 1;
                var4 = var1 - var0;
                var3 = 0;
                var1 = undefined;
                if (!(var4 >= var3)) {
                    _fun44604_ip = 110;
                    continue _fun44604
                }
            case 85:
                var8 = _closure1_slot0;
                var0 = var7[var4];
                var0 = var8.bind(var1)(var0, var6);
                if (!(var5 == var0)) {
                    _fun44604_ip = 114;
                    continue _fun44604
                }
            case 103:
                var4 = var4 - 1;
                if (var4 >= var3) {
                    _fun44604_ip = 85;
                    continue _fun44604
                }
            case 110:
                var1 = undefined;
                return var1;
            case 114:
                return var0;
        }
    };
    var _closure1_slot0 = var0;
    var1.getStyleProp = var0;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/StyleSheetUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);