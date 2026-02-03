// modules/errors/hooks/useCameraEncodeError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/hooks/useCameraEncodeError.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot2;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun111288: for (var _fun111288_ip = 0;;) switch (_fun111288_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getId;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    if (!(var2 !== var1)) {
                        _fun111288_ip = 32;
                        continue _fun111288
                    }
                case 28:
                    var1 = undefined;
                    return var1;
                case 32:
                    var3 = _closure1_slot3;
                    var2 = var3.getActiveErrorsOfType;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.AVError;
                    var1 = var1.CAMERA_SEND_LOW_FPS;
                    var2 = var2.bind(var3)(var1);
                    var1 = 0;
                    var1 = var2[var1];
                    var2 = null;
                    var2 = var2 == var1;
                    if (var2) {
                        _fun111288_ip = 101;
                        continue _fun111288
                    }
                case 96:
                    var0 = var1.type;
                case 101:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 8004, 566, 8005, 2]);