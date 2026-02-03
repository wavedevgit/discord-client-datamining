// modules/channel/native/VoiceChannelDurationMobileExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2026-01_voice_channel_duration_mobile',
        'label': 'Voice Channel Duration (Mobile)'
    };
    var4 = {};
    var9 = false;
    var4.enabled = var9;
    var3.defaultConfig = var4;
    var10 = {
        'id': 1,
        'label': 'Display the duration next to the Voice Channel'
    };
    var4 = 1;
    var9 = {};
    var9.enabled = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/native/VoiceChannelDurationMobileExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.VoiceChannelDurationMobileExperiment = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = var2.useExperiment;
        var0 = {};
        var3 = arg0;
        var0.guildId = var3;
        var3 = arg1;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useVoiceChannelDurationMobileEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3115, 2]);