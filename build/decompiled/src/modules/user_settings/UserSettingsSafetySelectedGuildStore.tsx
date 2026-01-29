// modules/user_settings/UserSettingsSafetySelectedGuildStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = {};
    var4 = '0';
    var0.selectedGuildId = var4;
    var _closure1_slot0 = var0;
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var8 = var6.bind(var0)(var3);
    var5 = var8.create;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var4 = _closure1_slot0;
        var5 = var0;
        var2 = copyDataProperties(var5, var4);
        var3 = function(arg0) { // Original name: setSelectedGuildId, environment: var1
            var2 = _closure2_slot0;
            var1 = {};
            var0 = arg0;
            var1.selectedGuildId = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = 'setSelectedGuildId';
        var0[var2] = var3;
        var2 = function() { // Original name: reset, environment: var1
            var2 = _closure2_slot0;
            var1 = _closure1_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = 'reset';
        var0[var1] = var2;
        return var0;
    };
    var3 = var5.bind(var8)(var3);
    var _closure1_slot1 = var3;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/UserSettingsSafetySelectedGuildStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.GUILD_SELECT_ALL_SERVERS_OPTION_ID = var4;
    var2.useUserSafetySettingsSelectedGuildStore = var3;
    var3 = function(arg0) { // Original name: setSelectedGuildId, environment: var1
        var2 = _closure1_slot1;
        var1 = var2.setState;
        var0 = {};
        var3 = arg0;
        var0.selectedGuildId = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.setSelectedGuildId = var3;
    var1 = function() { // Original name: getSelectedGuildId, environment: var1
        var1 = _closure1_slot1;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.selectedGuildId;
        return var0;
    };
    var2.getSelectedGuildId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 2]);