// modules/profile_effects/native/getAssetWHRatio.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = function arg0, arg1() {
        _fun56874: for (var _fun56874_ip = 0;;) switch (_fun56874_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun56874_ip = 18;
                    continue _fun56874
                }
            case 12:
                var2 = 0;
                if (!(var0 <= var2)) {
                    _fun56874_ip = 21;
                    continue _fun56874
                }
            case 18:
                var0 = var1;
            case 21:
                return var0;
        }
    };
    var _closure1_slot0 = var0;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_effects/native/getAssetWHRatio.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 0.5113636363636364;
    var2.DEFAULT_PROFILE_EFFECT_WH_RATIO = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = _closure1_slot0;
        var2 = var0.width;
        var3 = undefined;
        var1 = 450;
        var1 = var4.bind(var3)(var2, var1);
        var2 = var0.height;
        var0 = 880;
        var0 = var4.bind(var3)(var2, var0);
        var0 = var1 / var0;
        return var0;
    };
    var2.getAssetWHRatio = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);