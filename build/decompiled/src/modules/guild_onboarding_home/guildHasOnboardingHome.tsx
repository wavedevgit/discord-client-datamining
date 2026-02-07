// modules/guild_onboarding_home/guildHasOnboardingHome.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var6 = var3.GuildFeatures;
    var _closure1_slot0 = var6;
    var6 = var3.FAVORITES;
    var _closure1_slot1 = var6;
    var3 = var3.ME;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/guildHasOnboardingHome.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun39764: for (var _fun39764_ip = 0;;) switch (_fun39764_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 == var1;
                if (var0) {
                    _fun39764_ip = 28;
                    continue _fun39764
                }
            case 12:
                var3 = var1.id;
                var2 = _closure1_slot2;
                var0 = var3 === var2;
            case 28:
                if (var0) {
                    _fun39764_ip = 47;
                    continue _fun39764
                }
            case 31:
                var3 = var1.id;
                var2 = _closure1_slot1;
                var0 = var3 === var2;
            case 47:
                if (var0) {
                    _fun39764_ip = 82;
                    continue _fun39764
                }
            case 50:
                var4 = var1.features;
                var3 = var4.has;
                var2 = _closure1_slot0;
                var2 = var2.COMMUNITY;
                var2 = var3.bind(var4)(var2);
                var0 = !var2;
            case 82:
                if (var0) {
                    _fun39764_ip = 117;
                    continue _fun39764
                }
            case 85:
                var4 = var1.features;
                var3 = var4.has;
                var2 = _closure1_slot0;
                var2 = var2.GUILD_SERVER_GUIDE;
                var2 = var3.bind(var4)(var2);
                var0 = !var2;
            case 117:
                if (var0) {
                    _fun39764_ip = 152;
                    continue _fun39764
                }
            case 120:
                var3 = var1.features;
                var2 = var3.has;
                var1 = _closure1_slot0;
                var1 = var1.GUILD_ONBOARDING;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 152:
                var0 = !var0;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);