// modules/user_settings/hooks/useUserSafetySettingsSelectedGuildId.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot3 = var4;
    var3 = var3.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot5 = var3;
    var3 = function() {
        var1 = _closure1_slot4;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.selectedGuildId;
        return var0;
    };
    var _closure1_slot6 = var3;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/hooks/useUserSafetySettingsSelectedGuildId.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useUserSafetySettingsSelectedGuildId = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot4;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.selectedGuildId;
        var0 = _closure1_slot3;
        var0 = var1 === var0;
        return var0;
    };
    var2.useAllServersOptionSelected = var3;
    var1 = function() { // Environment: var1
        _fun88357: for (var _fun88357_ip = 0;;) switch (_fun88357_ip) {
            case 0:
                var3 = _closure1_slot6;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var _closure2_slot0 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 3;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var3, var0);
                var0 = null;
                var4 = var0 == var3;
                if (var4) {
                    _fun88357_ip = 104;
                    continue _fun88357
                }
            case 78:
                var4 = var3.features;
                var3 = var4.has;
                var2 = _closure1_slot5;
                var2 = var2.HUB;
                var1 = var3.bind(var4)(var2);
            case 104:
                var0 = var0 != var1;
                if (!var0) {
                    _fun88357_ip = 114;
                    continue _fun88357
                }
            case 111:
                var0 = var1;
            case 114:
                return var0;
        }
    };
    var2.useIsSelectedGuildAHub = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 11428, 660, 566, 2]);