// modules/channel/ExpandVoiceInviteSuggestionsExperiment.tsx
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
    var7 = var1.CommonTriggerPoints;
    var1 = 1;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createExperiment;
    var1 = {
        'id': '2026-02_expand_voice_invite_suggestions',
        'kind': 'guild',
        'label': 'Expand Voice Invite Suggestions'
    };
    var7 = var7.VOICE_CALL;
    var1.commonTriggerPoint = var7;
    var7 = {};
    var9 = 5;
    var7.totalSuggestions = var9;
    var1.defaultConfig = var7;
    var8 = {
        'id': 0,
        'label': 'Control'
    };
    var7 = {};
    var7.totalSuggestions = var9;
    var8.config = var7;
    var7 = new Array(2);
    var7[0] = var8;
    var8 = {
        'id': 1,
        'label': 'More Suggestions (10)'
    };
    var9 = {};
    var10 = 10;
    var9.totalSuggestions = var10;
    var8.config = var9;
    var7[1] = var8;
    var1.treatments = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/ExpandVoiceInviteSuggestionsExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ExpandVoiceInviteSuggestionsExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3106, 2]);