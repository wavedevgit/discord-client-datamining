// modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx
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
    var1 = var1.CommonTriggerPoints;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.CommonTriggerPointConfiguration;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ExpandVoiceInviteSuggestionsExperiment;
    var7 = new Array(4);
    var7[0] = var3;
    var3 = 3;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var7[1] = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HangStatusExperiment;
    var7[2] = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoiceChannelHoistingExperiment;
    var7[3] = var3;
    var10 = var1.VOICE_CALL;
    var1 = {};
    var3 = 'voice call initiated';
    var1.location = var3;
    var3 = var8.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var12 = var3;
    var11 = var7;
    var9 = var1;
    var1 = new var12[var8](var11, var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx';
    var3 = var4.bind(var5)(var3);
    var2.VoiceCallTriggerPoint = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 7131, 14517, 3963, 3616, 14518, 2]);