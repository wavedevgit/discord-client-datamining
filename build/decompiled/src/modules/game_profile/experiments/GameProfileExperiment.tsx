// modules/game_profile/experiments/GameProfileExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var8 = var3.CommonTriggerPoints;
    var3 = 1;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2024-06_game_profile_experiment',
        'label': 'Enables the Game Profile'
    };
    var9 = {};
    var11 = false;
    var9.enabled = var11;
    var3.defaultConfig = var9;
    var8 = var8.CONNECTION_OPEN;
    var3.commonTriggerPoint = var8;
    var9 = {
        'id': 1,
        'label': 'Enabled'
    };
    var8 = {};
    var8.enabled = var10;
    var9.config = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var3.treatments = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/experiments/GameProfileExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.GameProfileRolloutExperiment = var3;
    var3 = function(arg0) { // Original name: canSeeGameProfile, environment: var1
        _fun78429: for (var _fun78429_ip = 0;;) switch (_fun78429_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun78429_ip = 11;
                    continue _fun78429
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot0;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.canSeeGameProfile = var3;
    var1 = function(arg0) { // Original name: useCanSeeGameProfile, environment: var1
        _fun78430: for (var _fun78430_ip = 0;;) switch (_fun78430_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun78430_ip = 11;
                    continue _fun78430
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot0;
                var2 = var3.useExperiment;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.useCanSeeGameProfile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3074, 2]);