// modules/roblox_subgame_detection/RobloxSubgameExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var10 = true;
    var1.value = var10;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var1);
    var3 = var4.createApexExperiment;
    var1 = {
        'name': '2025-08-view-roblox-subgames-in-rich-presence',
        'kind': 'user'
    };
    var9 = false;
    var7 = {
        'enabled': false,
        'showPlayButton': false,
        'alternativeTitle': false
    };
    var1.defaultConfig = var7;
    var7 = {};
    var8 = {
        'enabled': false,
        'showPlayButton': false,
        'alternativeTitle': false
    };
    var7[0] = var8;
    var8 = {
        'enabled': true,
        'showPlayButton': false,
        'alternativeTitle': false
    };
    var7[1] = var8;
    var8 = {
        'enabled': true,
        'showPlayButton': true,
        'alternativeTitle': false
    };
    var7[2] = var8;
    var8 = {
        'enabled': true,
        'showPlayButton': false,
        'alternativeTitle': true
    };
    var7[3] = var8;
    var8 = {
        'enabled': true,
        'showPlayButton': true,
        'alternativeTitle': true
    };
    var7[4] = var8;
    var1.variations = var7;
    var3 = var3.bind(var4)(var1);
    var1 = 1;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2025-08_roblox_subgames_rollout',
        'label': 'Roblox subgames fetch rollout'
    };
    var8 = {};
    var8.enabled = var9;
    var1.defaultConfig = var8;
    var9 = {
        'id': 1,
        'label': 'Enables fetching roblox subgame application info'
    };
    var8 = {};
    var8.enabled = var10;
    var9.config = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var1.treatments = var8;
    var1 = var4.bind(var7)(var1);
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/roblox_subgame_detection/RobloxSubgameExperiments.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ViewRobloxSubgamesInRichPresenceExperiment = var3;
    var2.FetchRobloxSubgamesRolloutExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 3117, 2]);