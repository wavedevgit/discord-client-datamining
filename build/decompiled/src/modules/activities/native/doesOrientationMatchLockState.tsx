// modules/activities/native/doesOrientationMatchLockState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.OrientationLockState;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/doesOrientationMatchLockState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun64628: for (var _fun64628_ip = 0;;) switch (_fun64628_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var0 = null;
                var0 = var0 == var3;
                if (var0) {
                    _fun64628_ip = 32;
                    continue _fun64628
                }
            case 15:
                var2 = _closure1_slot0;
                var2 = var2.UNLOCKED;
                var0 = var3 === var2;
            case 32:
                if (var0) {
                    _fun64628_ip = 61;
                    continue _fun64628
                }
            case 35:
                var2 = !var1;
                if (!var2) {
                    _fun64628_ip = 58;
                    continue _fun64628
                }
            case 41:
                var4 = _closure1_slot0;
                var4 = var4.PORTRAIT;
                var2 = var3 === var4;
            case 58:
                var0 = var2;
            case 61:
                if (var0) {
                    _fun64628_ip = 87;
                    continue _fun64628
                }
            case 64:
                if (!var1) {
                    _fun64628_ip = 84;
                    continue _fun64628
                }
            case 67:
                var2 = _closure1_slot0;
                var2 = var2.LANDSCAPE;
                var1 = var3 === var2;
            case 84:
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3418, 2]);