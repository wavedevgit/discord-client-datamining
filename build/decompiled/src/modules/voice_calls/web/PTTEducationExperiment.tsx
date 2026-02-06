// modules/voice_calls/web/PTTEducationExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var10 = true;
    var1.value = var10;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var9 = {
        'showPTTJoinTooltip': false,
        'showPTTIconIndicator': false,
        'showPTTNoKeybindWarning': false,
        'showPTTSpeakingIndicator': false
    };
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var1);
    var3 = var6.createApexExperiment;
    var1 = {
        'name': '2025-12-09-ptt-education',
        'kind': 'user'
    };
    var1.defaultConfig = var9;
    var7 = {};
    var8 = {};
    var14 = var8;
    var13 = var9;
    var11 = copyDataProperties(var14, var13);
    var11 = 'showPTTJoinTooltip';
    var8[var11] = var10;
    var11 = 'showPTTNoKeybindWarning';
    var8[var11] = var10;
    var11 = 'showPTTSpeakingIndicator';
    var8[var11] = var10;
    var7[1] = var8;
    var8 = {};
    var14 = var8;
    var13 = var9;
    var9 = copyDataProperties(var14, var13);
    var9 = 'showPTTIconIndicator';
    var8[var9] = var10;
    var7[2] = var8;
    var1.variations = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/web/PTTEducationExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);