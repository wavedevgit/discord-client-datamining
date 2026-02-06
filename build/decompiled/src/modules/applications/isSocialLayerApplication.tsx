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
        _fun82670: for (var _fun82670_ip = 0;;) switch (_fun82670_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.flags;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun82670_ip = 119;
                    continue _fun82670
                }
            case 17:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 1;
                var1 = var1[var7];
                var6 = undefined;
                var8 = var4.bind(var6)(var1);
                var5 = var8.hasFlag;
                var4 = var3.flags;
                var1 = _closure1_slot2;
                var1 = var1.SOCIAL_LAYER_INTEGRATION_LIMITED;
                var1 = var5.bind(var8)(var4, var1);
                if (var1) {
                    _fun82670_ip = 116;
                    continue _fun82670
                }
            case 72:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var5 = var5.bind(var6)(var4);
                var4 = var5.hasFlag;
                var3 = var3.flags;
                var2 = _closure1_slot2;
                var2 = var2.SOCIAL_LAYER_INTEGRATION;
                var1 = var4.bind(var5)(var3, var2);
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1384, 2]);