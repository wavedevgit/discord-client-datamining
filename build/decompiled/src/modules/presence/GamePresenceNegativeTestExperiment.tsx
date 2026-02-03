// modules/presence/GamePresenceNegativeTestExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var3 = var1.CommonTriggerPoints;
    var1 = 1;
    var1 = var5[var1];
    var7 = var4.bind(var0)(var1);
    var6 = var7.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2025-06_game_presence_negative_test',
        'label': 'Game Presence Negative Test'
    };
    var8 = {
        'filterGamePresence': false,
        'filterRichPresence': false
    };
    var1.defaultConfig = var8;
    var3 = var3.CONNECTION_OPEN;
    var1.commonTriggerPoint = var3;
    var3 = {
        'id': 0,
        'label': 'Control'
    };
    var8 = {
        'filterGamePresence': false,
        'filterRichPresence': false
    };
    var3.config = var8;
    var8 = new Array(3);
    var8[0] = var3;
    var3 = {
        'id': 1,
        'label': 'No Gaming Presence (Rich or Game Detection)'
    };
    var9 = {
        'filterGamePresence': true,
        'filterRichPresence': true
    };
    var3.config = var9;
    var8[1] = var3;
    var9 = {
        'id': 2,
        'label': 'Game Presence but NO Rich Presence'
    };
    var3 = 2;
    var10 = {
        'filterGamePresence': false,
        'filterRichPresence': true
    };
    var9.config = var10;
    var8[2] = var9;
    var1.treatments = var8;
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/presence/GamePresenceNegativeTestExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.GamePresenceNegativeTestExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3115, 2]);