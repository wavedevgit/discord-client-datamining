// modules/applications/isSocialLayerApplication.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.ApplicationFlags;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/isSocialLayerApplication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun82909: for (var _fun82909_ip = 0;;) switch (_fun82909_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 1;
                var0 = var0[var6];
                var5 = undefined;
                var3 = var2.bind(var5)(var0);
                var2 = var3.hasApplicationFlag;
                var0 = _closure1_slot2;
                var0 = var0.SOCIAL_LAYER_INTEGRATION_LIMITED;
                var0 = var2.bind(var3)(var4, var0);
                if (var0) {
                    _fun82909_ip = 92;
                    continue _fun82909
                }
            case 53:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.hasApplicationFlag;
                var1 = _closure1_slot2;
                var1 = var1.SOCIAL_LAYER_INTEGRATION;
                var0 = var2.bind(var3)(var4, var1);
            case 92:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5405, 2]);