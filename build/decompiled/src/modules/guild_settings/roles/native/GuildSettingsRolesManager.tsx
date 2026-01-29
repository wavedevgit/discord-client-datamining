// modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var1);
    var4 = var7.create;
    var1 = function() { // Environment: var3
        var0 = {};
        var1 = false;
        var0.roleJustCreated = var1;
        return var0;
    };
    var1 = var4.bind(var7)(var1);
    var _closure1_slot2 = var1;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: setRoleJustCreated, environment: var3
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot2;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.roleJustCreated = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setRoleJustCreated = var3;
    var2.useGuildSettingsRolesManagerState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 802, 2]);