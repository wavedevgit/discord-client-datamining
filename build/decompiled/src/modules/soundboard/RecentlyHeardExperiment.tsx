// modules/soundboard/RecentlyHeardExperiment.tsx
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
    var8 = var4.bind(var0)(var3);
    var7 = var8.createExperiment;
    var6 = {
        'kind': 'user',
        'id': '2023-11_soundboard_recently_heard_frequently_played',
        'label': 'Soundboard Recently Heard & Frequently Played'
    };
    var3 = {
        'canSeeRecentlyHeard': false,
        'canSeeFrequentlyPlayed': false
    };
    var6.defaultConfig = var3;
    var10 = {
        'id': 1,
        'label': 'User can see Recently Heard soundboard section'
    };
    var3 = 1;
    var9 = {
        'canSeeRecentlyHeard': true,
        'canSeeFrequentlyPlayed': false
    };
    var10.config = var9;
    var9 = new Array(3);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'User can see Frequently Played soundboard section'
    };
    var11 = {
        'canSeeRecentlyHeard': false,
        'canSeeFrequentlyPlayed': true
    };
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': 'User can see Frequently Played & Recently Heard soundboard sections'
    };
    var11 = {
        'canSeeRecentlyHeard': true,
        'canSeeFrequentlyPlayed': true
    };
    var10.config = var11;
    var9[2] = var10;
    var6.treatments = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot0 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/RecentlyHeardExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: recentlyHeardExperiment, environment: var1
        var1 = arg0;
        var0 = var1.location;
        var4 = var1.autoTrackExposure;
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var1.location = var0;
        var0 = {};
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.recentlyHeardExperiment = var3;
    var1 = function(arg0) { // Original name: useRecentlyHeardExperiment, environment: var1
        var0 = arg0;
        var4 = var0.autoTrackExposure;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var1.location = var0;
        var0 = {};
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useRecentlyHeardExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3074, 2]);