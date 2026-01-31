// modules/user_affinities/VoiceUserAffinityExperiment.tsx
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
    var4 = var7.createApexExperiment;
    var3 = {
        'kind': 'user',
        'name': '2025-08-voice-user-affinity'
    };
    var8 = {};
    var10 = false;
    var8.enabled = var10;
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var9.enabled = var10;
    var9.sortType = var0;
    var8[0] = var9;
    var9 = {
        'enabled': true,
        'sortType': 'vc_probability'
    };
    var8[1] = var9;
    var9 = {
        'enabled': true,
        'sortType': 'communication_probability'
    };
    var8[2] = var9;
    var3.variations = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_affinities/VoiceUserAffinityExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.sortType;
        return var0;
    };
    var2.getVoiceUserAffinitySortType = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.useConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.sortType;
        return var0;
    };
    var2.useVoiceUserAffinitySortType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);