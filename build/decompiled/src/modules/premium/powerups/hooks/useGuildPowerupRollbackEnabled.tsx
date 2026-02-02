// modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
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
    var3 = 'modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2() {
        _fun102291: for (var _fun102291_ip = 0;;) switch (_fun102291_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var0 = var5[var0];
                var3 = undefined;
                var6 = var4.bind(var3)(var0);
                var2 = var6.useVanityURLPerkRollbackEnabled;
                var1 = arg0;
                var0 = arg2;
                var1 = var2.bind(var6)(var1, var0);
                var0 = arg1;
                var2 = var0.skuId;
                var0 = 1;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.VANITY_URL_POWERUP_SKU_ID;
                var0 = var2 === var0;
                if (!var0) {
                    _fun102291_ip = 79;
                    continue _fun102291
                }
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0, arg1, arg2() {
        _fun102292: for (var _fun102292_ip = 0;;) switch (_fun102292_ip) {
            case 0:
                var0 = arg1;
                var2 = var0.skuId;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var0 = var0.VANITY_URL_POWERUP_SKU_ID;
                var0 = var2 === var0;
                if (!var0) {
                    _fun102292_ip = 84;
                    continue _fun102292
                }
            case 47:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.getVanityURLPerkRollbackEnabled;
                var2 = arg0;
                var1 = arg2;
                var0 = var3.bind(var4)(var2, var1);
            case 84:
                return var0;
        }
    };
    var2.isGuildPowerupRollbackEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [13301, 6604, 2]);