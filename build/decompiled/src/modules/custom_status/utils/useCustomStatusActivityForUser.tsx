// modules/custom_status/utils/useCustomStatusActivityForUser.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/utils/useCustomStatusActivityForUser.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61992: for (var _fun61992_ip = 0;;) switch (_fun61992_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 3;
                var1 = var7[var4];
                var5 = undefined;
                var9 = var6.bind(var5)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var8.bind(var9)(var2, var1);
                var1 = 4;
                var1 = var7[var1];
                var8 = var6.bind(var5)(var1);
                var1 = var8.useCustomStatusActivity;
                var1 = var1.bind(var8)();
                var4 = var7[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var6;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = var3.findActivity;
                    var1 = _closure2_slot0;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot4;
                        var0 = var0.CUSTOM_STATUS;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var4.bind(var5)(var3, var0);
                if (!var2) {
                    _fun61992_ip = 127;
                    continue _fun61992
                }
            case 124:
                var0 = var1;
            case 127:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3610, 660, 566, 5667, 2]);