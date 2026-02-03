// modules/game_update/GameUpdateExperiment.tsx
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
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.createExperiment;
    var3 = {
        'id': '2025-11_game_update_notification',
        'kind': 'user',
        'label': 'Game Update Notification'
    };
    var8 = {};
    var9 = false;
    var8.showToggle = var9;
    var3.defaultConfig = var8;
    var9 = {
        'id': 1,
        'label': 'User can receive game update notifications. Show settings toggle.'
    };
    var8 = {};
    var8.showToggle = var10;
    var9.config = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var3.treatments = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_update/GameUpdateExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.GameUpdateExperiment = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useExperiencesExperiment;
        var1 = _closure1_slot2;
        var0 = {};
        var6 = arg0;
        var7 = var0;
        var4 = copyDataProperties(var7, var6);
        var5 = false;
        var4 = 'autoTrackExposure';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useGameUpdateExperiment = var3;
    var1 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getExperiencesExperiment;
        var1 = _closure1_slot2;
        var0 = {};
        var6 = arg0;
        var7 = var0;
        var4 = copyDataProperties(var7, var6);
        var5 = false;
        var4 = 'autoTrackExposure';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.showToggle;
        return var0;
    };
    var2.isEligibleForGameUpdateExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 7475, 2]);