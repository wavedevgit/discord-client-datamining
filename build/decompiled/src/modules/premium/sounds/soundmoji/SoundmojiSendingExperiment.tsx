// modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx
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
        'id': '2024-11_soundmoji_sending',
        'label': 'Send soundmojis',
        'kind': 'user'
    };
    var9 = {
        'enabled': false,
        'showSoundmojiInEmojiPicker': false
    };
    var3.defaultConfig = var9;
    var4 = var4.CONNECTION_OPEN;
    var3.commonTriggerPoint = var4;
    var4 = {
        'id': 1,
        'label': 'Enabled w/o emoji section'
    };
    var9 = {
        'enabled': true,
        'showSoundmojiInEmojiPicker': false
    };
    var4.config = var9;
    var9 = new Array(2);
    var9[0] = var4;
    var10 = {
        'id': 2,
        'label': 'Enabled w/ emoji section'
    };
    var4 = 2;
    var11 = {
        'enabled': true,
        'showSoundmojiInEmojiPicker': true
    };
    var10.config = var11;
    var9[1] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SoundmojiSendingExperiment = var3;
    var3 = function(arg0) { // Original name: getSoundmojiSendExperiment, environment: var1
        var0 = arg0;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.getSoundmojiSendExperiment = var3;
    var3 = function(arg0) { // Original name: useSoundmojiSendExperiment, environment: var1
        var0 = arg0;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useSoundmojiSendExperiment = var3;
    var1 = function(arg0) { // Original name: useSoundmojiEmojiPickerSectionExperiment, environment: var1
        var0 = arg0;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.showSoundmojiInEmojiPicker;
        return var0;
    };
    var2.useSoundmojiEmojiPickerSectionExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3074, 2]);