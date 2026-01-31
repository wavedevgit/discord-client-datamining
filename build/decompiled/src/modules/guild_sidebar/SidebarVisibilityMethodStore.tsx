// modules/guild_sidebar/SidebarVisibilityMethodStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {};
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/SidebarVisibilityMethodStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SidebarVisibilityMethodStore = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.setState;
        var0 = {};
        var3 = arg0;
        var0.getVisibleGuildIds = var3;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.setGetVisibleGuildIds = var3;
    var3 = function() {
        var1 = _closure1_slot0;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.getVisibleGuildIds;
        return var0;
    };
    var2.getVisibleGuildIdsMethod = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.setState;
        var0 = {};
        var3 = arg0;
        var0.getVisibleChannelIds = var3;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.setGetVisibleChannelIds = var3;
    var1 = function() {
        var1 = _closure1_slot0;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.getVisibleChannelIds;
        return var0;
    };
    var2.getVisibleChannelIdsMethod = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 2]);