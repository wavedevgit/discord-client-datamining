// modules/guild_sidebar/GuildSidebarPopoverGapExperiment.tsx
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
    var10 = 0;
    var3 = var6[var10];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var4 = var3.CommonTriggerPoints;
    var3 = 1;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2026-02_standard_sidebar_popover_gaps',
        'label': 'Standardize Guild Sidebar Popover Gaps'
    };
    var9 = {};
    var11 = null;
    var9.standardPopoverGap = var11;
    var3.defaultConfig = var9;
    var4 = var4.CONNECTION_OPEN;
    var3.commonTriggerPoint = var4;
    var4 = {
        'id': 1,
        'label': 'Standard Gap (0)'
    };
    var9 = {};
    var9.standardPopoverGap = var10;
    var4.config = var9;
    var9 = new Array(4);
    var9[0] = var4;
    var10 = {
        'id': 2,
        'label': 'Standard Gap (4)'
    };
    var4 = 2;
    var11 = {};
    var12 = 4;
    var11.standardPopoverGap = var12;
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': 'Standard Gap (8)'
    };
    var11 = {};
    var12 = 8;
    var11.standardPopoverGap = var12;
    var10.config = var11;
    var9[2] = var10;
    var10 = {
        'id': 4,
        'label': 'Standard Gap (12)'
    };
    var11 = {};
    var12 = 12;
    var11.standardPopoverGap = var12;
    var10.config = var11;
    var9[3] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/GuildSidebarPopoverGapExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.GuildSidebarPopoverGapExperiment = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.guildId;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var1.guildId = var4;
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useGuildSidebarPopoverGapExperiment = var3;
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.guildId;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var1.guildId = var4;
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getGuildSidebarPopoverGapExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3117, 2]);