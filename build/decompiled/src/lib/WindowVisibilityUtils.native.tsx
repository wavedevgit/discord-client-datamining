// lib/WindowVisibilityUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppStates;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/WindowVisibilityUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun64600: for (var _fun64600_ip = 0;;) switch (_fun64600_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getState;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot3;
                var1 = var1.BACKGROUND;
                var2 = var2 === var1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.isInPipMode;
                var1 = var0.bind(var1)();
                var0 = !var2;
                if (!var2) {
                    _fun64600_ip = 72;
                    continue _fun64600
                }
            case 69:
                var0 = var1;
            case 72:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5279, 660, 8029, 2]);