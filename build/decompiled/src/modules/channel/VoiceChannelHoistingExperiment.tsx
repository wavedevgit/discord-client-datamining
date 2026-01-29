// modules/channel/VoiceChannelHoistingExperiment.tsx
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
    var3 = var5.bind(var0)(var3);
    var4 = var3.CommonTriggerPoints;
    var3 = 1;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2025-12_voice_channel_hoisting',
        'label': 'Voice Channel Hoisting'
    };
    var4 = var4.VOICE_CALL;
    var3.commonTriggerPoint = var4;
    var4 = {
        'enableWaveformIcon': false,
        'enableHighlight': false
    };
    var3.defaultConfig = var4;
    var4 = {
        'id': 1,
        'label': 'Both waveform and highlight'
    };
    var9 = {
        'enableWaveformIcon': true,
        'enableHighlight': true
    };
    var4.config = var9;
    var9 = new Array(2);
    var9[0] = var4;
    var10 = {
        'id': 2,
        'label': 'Waveform icon only'
    };
    var4 = 2;
    var11 = {
        'enableWaveformIcon': true,
        'enableHighlight': false
    };
    var10.config = var11;
    var9[1] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/VoiceChannelHoistingExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.VoiceChannelHoistingExperiment = var3;
    var1 = function(arg0, arg1) { // Original name: useVoiceChannelHoistingExperiment, environment: var1
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = arg0;
        var1.guildId = var0;
        var0 = arg1;
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useVoiceChannelHoistingExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3074, 2]);