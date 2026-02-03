// modules/channel_prompts/SimpleDeadchatPromptExperiment.tsx
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
    var7 = var4.bind(var0)(var1);
    var6 = var7.createExperiment;
    var1 = {
        'kind': 'guild',
        'id': '2023-08_deadchat_simple_prompt_guild',
        'label': 'Simple deadchat prompt'
    };
    var3 = {
        'triggerDeadchat': false,
        'enableDeadchat': false
    };
    var1.defaultConfig = var3;
    var3 = {
        'id': 0,
        'label': 'Control'
    };
    var8 = {
        'triggerDeadchat': true,
        'enableDeadchat': false
    };
    var3.config = var8;
    var8 = new Array(2);
    var8[0] = var3;
    var9 = {
        'id': 1,
        'label': 'trigger deadchat upon connection open'
    };
    var3 = 1;
    var10 = {
        'triggerDeadchat': true,
        'enableDeadchat': true
    };
    var9.config = var10;
    var8[1] = var9;
    var1.treatments = var8;
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_prompts/SimpleDeadchatPromptExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.SimpleDeadchatPromptExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 2]);