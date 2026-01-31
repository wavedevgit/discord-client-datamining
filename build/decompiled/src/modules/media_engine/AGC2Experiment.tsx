// modules/media_engine/AGC2Experiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = {
        'useAGC2': true,
        'enableAnalog': false,
        'enableDigital': true,
        'headroom_db': 5,
        'max_gain_db': 50,
        'initial_gain_db': 15,
        'max_gain_change_db_per_second': 6,
        'max_output_noise_level_dbfs': 4294967246,
        'fixed_gain_db': 0
    };
    var12 = false;
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var8 = var4.bind(var0)(var6);
    var7 = var8.createApexExperiment;
    var6 = {
        'kind': 'user',
        'name': '2025-09-agc2-v2'
    };
    var9 = {};
    var9.noiseCancellationDuringProcessing = var12;
    var13 = {};
    var13.useAGC2 = var12;
    var9.noiseCancellationConfig = var13;
    var6.defaultConfig = var9;
    var9 = {};
    var13 = {};
    var13.noiseCancellationDuringProcessing = var11;
    var14 = {};
    var14.useAGC2 = var12;
    var13.noiseCancellationConfig = var14;
    var9[1] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.5
    };
    var13.noiseCancellationConfig = var10;
    var9[2] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.55
    };
    var13.noiseCancellationConfig = var10;
    var9[3] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.6
    };
    var13.noiseCancellationConfig = var10;
    var9[4] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.65
    };
    var13.noiseCancellationConfig = var10;
    var9[5] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.7
    };
    var13.noiseCancellationConfig = var10;
    var9[6] = var13;
    var6.variations = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot2 = var6;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createApexExperiment;
    var6 = {
        'kind': 'user',
        'name': '2025-12-agc2-v2--mirror'
    };
    var9 = {};
    var9.noiseCancellationDuringProcessing = var12;
    var13 = {};
    var13.useAGC2 = var12;
    var9.noiseCancellationConfig = var13;
    var6.defaultConfig = var9;
    var9 = {};
    var13 = {};
    var13.noiseCancellationDuringProcessing = var11;
    var14 = {};
    var14.useAGC2 = var12;
    var13.noiseCancellationConfig = var14;
    var9[1] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.5
    };
    var13.noiseCancellationConfig = var10;
    var9[2] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.55
    };
    var13.noiseCancellationConfig = var10;
    var9[3] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.6
    };
    var13.noiseCancellationConfig = var10;
    var9[4] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.65
    };
    var13.noiseCancellationConfig = var10;
    var9[5] = var13;
    var13 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.7
    };
    var13.noiseCancellationConfig = var10;
    var9[6] = var13;
    var6.variations = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createApexExperiment;
    var3 = {
        'kind': 'user',
        'name': '2025-12-agc2-v2--shadow'
    };
    var8 = {};
    var8.noiseCancellationDuringProcessing = var12;
    var9 = {};
    var9.useAGC2 = var12;
    var8.noiseCancellationConfig = var9;
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var9.noiseCancellationDuringProcessing = var11;
    var11 = {};
    var11.useAGC2 = var12;
    var9.noiseCancellationConfig = var11;
    var8[1] = var9;
    var9 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.5
    };
    var9.noiseCancellationConfig = var10;
    var8[2] = var9;
    var9 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.55
    };
    var9.noiseCancellationConfig = var10;
    var8[3] = var9;
    var9 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.6
    };
    var9.noiseCancellationConfig = var10;
    var8[4] = var9;
    var9 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.65
    };
    var9.noiseCancellationConfig = var10;
    var8[5] = var9;
    var9 = {
        'noiseCancellationDuringProcessing': true,
        'noiseCancellationConfig': null,
        'vadKrispActivationThreshold': 0.7
    };
    var9.noiseCancellationConfig = var10;
    var8[6] = var9;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/AGC2Experiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getAGC2ExperimentConfig, environment: var1
        _fun93965: for (var _fun93965_ip = 0;;) switch (_fun93965_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.location;
                var0 = var0.disable;
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun93965_ip = 22;
                    continue _fun93965
                }
            case 20:
                var0 = false;
            case 22:
                var1 = {};
                var1.location = var4;
                var1.disable = var0;
                var9 = var1.location;
                var3 = var1.disable;
                if (!(var3 === var5)) {
                    _fun93965_ip = 50;
                    continue _fun93965
                }
            case 48:
                var3 = false;
            case 50:
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 1;
                var2 = var2[var6];
                var2 = var7.bind(var5)(var2);
                var11 = var2.AVMirrorHoldoutExperimentH22025;
                var10 = var11.getCurrentConfig;
                var8 = {};
                var8.location = var9;
                var2 = {};
                var2.disable = var3;
                var7 = true;
                var2.autoTrackExposure = var7;
                var2 = var10.bind(var11)(var8, var2);
                var2 = var2.isInHoldout;
                var11 = _closure1_slot4;
                var10 = var11.getConfig;
                var8 = {};
                var8.location = var9;
                var8 = var10.bind(var11)(var8);
                if (var2) {
                    _fun93965_ip = 144;
                    continue _fun93965
                }
            case 141:
                var2 = var3;
            case 144:
                if (var2) {
                    _fun93965_ip = 168;
                    continue _fun93965
                }
            case 147:
                var8 = _closure1_slot3;
                var3 = var8.getConfig;
                var2 = {};
                var2.location = var9;
                var2 = var3.bind(var8)(var2);
            case 168:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var3.bind(var5)(var2);
                var6 = var2.AVHoldoutExperimentH22025;
                var5 = var6.getCurrentConfig;
                var3 = {};
                var3.location = var4;
                var2 = {};
                var2.disable = var0;
                var2.autoTrackExposure = var7;
                var2 = var5.bind(var6)(var3, var2);
                var2 = var2.isInHoldout;
                if (var2) {
                    _fun93965_ip = 256;
                    continue _fun93965
                }
            case 230:
                if (var0) {
                    _fun93965_ip = 256;
                    continue _fun93965
                }
            case 233:
                var3 = _closure1_slot2;
                var2 = var3.getConfig;
                var0 = {};
                var0.location = var4;
                var0 = var2.bind(var3)(var0);
                _fun93965_ip = 272;
                continue _fun93965;
            case 256:
                var1 = _closure1_slot2;
                var1 = var1.definition;
                var0 = var1.defaultConfig;
            case 272:
                return var0;
        }
    };
    var2.getAGC2ExperimentConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 3910, 2]);