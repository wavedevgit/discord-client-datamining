// modules/stage_channels/useMyCurrentStageChannelRole.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/useMyCurrentStageChannelRole.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot3;
        var2[1] = var6;
        var1 = _closure1_slot4;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun69319: for (var _fun69319_ip = 0;;) switch (_fun69319_ip) {
                case 0:
                    var1 = _closure1_slot2;
                    var0 = var1.getId;
                    var4 = var0.bind(var1)();
                    var1 = _closure1_slot3;
                    var0 = var1.getVoiceChannelId;
                    var5 = var0.bind(var1)();
                    var3 = _closure2_slot0;
                    var0 = null;
                    if (!(var5 === var3)) {
                        _fun69319_ip = 64;
                        continue _fun69319
                    }
                case 44:
                    var3 = _closure1_slot4;
                    var2 = var3.getPermissionsForUser;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var4, var1);
                case 64:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 1670, 4247, 566, 2]);