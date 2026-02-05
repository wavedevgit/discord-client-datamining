// modules/frames/native/getDefaultOrientationLockState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/native/getDefaultOrientationLockState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun110560: for (var _fun110560_ip = 0;;) switch (_fun110560_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun110560_ip = 47;
                    continue _fun110560
                }
            case 12:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.getDefaultOrientationLockState;
                var3 = var1.bind(var2)(var4);
            case 47:
                if (!(var0 != var3)) {
                    _fun110560_ip = 112;
                    continue _fun110560
                }
            case 51:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var5 = 'FRAME_SET_ORIENTATION_LOCK_STATE';
                var0.type = var5;
                var4 = var4.id;
                var0.applicationId = var4;
                var0.lockState = var3;
                var0 = var1.bind(var2)(var0);
            case 112:
                var0 = undefined;
                return var0;
        }
    };
    var2.setOrientationLockState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8076, 806, 2]);