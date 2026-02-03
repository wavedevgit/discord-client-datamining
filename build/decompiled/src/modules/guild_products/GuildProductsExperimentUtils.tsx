// modules/guild_products/GuildProductsExperimentUtils.tsx
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
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_products/GuildProductsExperimentUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun49979: for (var _fun49979_ip = 0;;) switch (_fun49979_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.GuildProductsExperiment;
                var1 = var2.useExperiment;
                var0 = {};
                var5 = null;
                if (!(var5 == var3)) {
                    _fun49979_ip = 52;
                    continue _fun49979
                }
            case 48:
                var3 = _closure1_slot2;
            case 52:
                var0.guildId = var3;
                var3 = arg1;
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.useGuildEligibleForGuildProducts = var3;
    var1 = function arg0, arg1() {
        _fun49980: for (var _fun49980_ip = 0;;) switch (_fun49980_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.GuildProductsExperiment;
                var1 = var2.getCurrentConfig;
                var0 = {};
                var5 = null;
                if (!(var5 == var3)) {
                    _fun49980_ip = 52;
                    continue _fun49980
                }
            case 48:
                var3 = _closure1_slot2;
            case 52:
                var0.guildId = var3;
                var3 = arg1;
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.isGuildEligibleForGuildProducts = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5630, 2]);