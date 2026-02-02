// modules/self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx
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
        'kind': 'user',
        'id': '2024-01_inappropriate_conversation_warning',
        'label': 'Inappropriate Conversation Warning'
    };
    var4 = {};
    var9 = false;
    var4.enabled = var9;
    var3.defaultConfig = var4;
    var10 = {
        'id': 1,
        'label': 'Enable Inappropriate Conversation Warning'
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
    var4 = 'modules/self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.InappropriateConversationExperiment = var3;
    var3 = function arg0() {
        _fun71977: for (var _fun71977_ip = 0;;) switch (_fun71977_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.location;
                var4 = var1.autoTrackExposure;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun71977_ip = 22;
                    continue _fun71977
                }
            case 20:
                var4 = false;
            case 22:
                var3 = _closure1_slot0;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.isEligibleForInappropriateConversationWarning = var3;
    var1 = function arg0() {
        _fun71978: for (var _fun71978_ip = 0;;) switch (_fun71978_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.location;
                var4 = var1.autoTrackExposure;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun71978_ip = 22;
                    continue _fun71978
                }
            case 20:
                var4 = false;
            case 22:
                var3 = _closure1_slot0;
                var2 = var3.useExperiment;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.useIsEligibleForInappropriateConversationWarning = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3076, 2]);