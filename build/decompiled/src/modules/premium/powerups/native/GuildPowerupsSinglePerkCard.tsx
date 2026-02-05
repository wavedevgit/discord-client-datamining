// modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102537: for (var _fun102537_ip = 0;;) switch (_fun102537_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var6 = var0.powerup;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 2;
                var2 = var8[var2];
                var3 = undefined;
                var5 = var1.bind(var3)(var2);
                var2 = true;
                var7 = var5.bind(var3)(var6, var2);
                var2 = 3;
                var2 = var8[var2];
                var2 = var1.bind(var3)(var2);
                var10 = var2.bind(var3)(var4, var6);
                var5 = _closure1_slot0;
                var2 = 4;
                var2 = var8[var2];
                var9 = var5.bind(var3)(var2);
                var5 = var9.useCalculatePowerupCardStatus;
                var2 = false;
                var5 = var5.bind(var9)(var6, var10, var2);
                var2 = 5;
                var2 = var8[var2];
                var2 = var1.bind(var3)(var2);
                var4 = var2.bind(var3)(var4, var6);
                var2 = _closure1_slot3;
                var0 = 6;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var8 = var6.title;
                var0.title = var8;
                var8 = var6.description;
                var0.description = var8;
                var6 = var6.cost;
                var0.cost = var6;
                var6 = null;
                var8 = var6 != var7;
                var6 = '';
                if (!var8) {
                    _fun102537_ip = 177;
                    continue _fun102537
                }
            case 174:
                var6 = var7;
            case 177:
                var0.imageUrl = var6;
                var0.status = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 13380, 13358, 13376, 13377, 13403, 2]);