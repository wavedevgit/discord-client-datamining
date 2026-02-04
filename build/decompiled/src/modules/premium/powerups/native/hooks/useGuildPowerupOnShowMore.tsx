// modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun102408: for (var _fun102408_ip = 0;;) switch (_fun102408_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun102408_ip = 62;
                        continue _fun102408
                    }
                case 13:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 1;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.guildId = var4;
                    var3 = _closure2_slot1;
                    var0.powerup = var3;
                    var0 = var1.bind(var2)(var0);
                case 62:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 13362, 2]);