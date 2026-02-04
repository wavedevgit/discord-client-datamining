// modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(2);
        var1[0] = var4;
        var0 = _closure1_slot3;
        var1[1] = var0;
        var0 = function() { // Environment: var0
            _fun80511: for (var _fun80511_ip = 0;;) switch (_fun80511_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getGuildId;
                    var3 = var1.bind(var2)();
                    var1 = var2.getLastSelectedGuildId;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot3;
                    var0 = var2.getFlattenedGuildIds;
                    var2 = var0.bind(var2)();
                    var0 = 0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun80511_ip = 56;
                        continue _fun80511
                    }
                case 53:
                    var1 = var3;
                case 56:
                    if (!(var2 != var1)) {
                        _fun80511_ip = 63;
                        continue _fun80511
                    }
                case 60:
                    var0 = var1;
                case 63:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3213, 4376, 632, 2]);