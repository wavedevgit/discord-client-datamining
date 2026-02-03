// modules/media_engine/KrispAtEndExperiment.tsx
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
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var3);
    var6 = var7.createApexExperiment;
    var3 = {
        'kind': 'user',
        'name': '2025-10-krisp-at-end'
    };
    var8 = {
        'noiseCancellationAfterProcessing': false,
        'vadAfterWebrtc': false
    };
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {
        'noiseCancellationAfterProcessing': true,
        'vadAfterWebrtc': false
    };
    var8[1] = var9;
    var9 = {
        'noiseCancellationAfterProcessing': false,
        'vadAfterWebrtc': true
    };
    var8[2] = var9;
    var9 = {
        'noiseCancellationAfterProcessing': true,
        'vadAfterWebrtc': true
    };
    var8[3] = var9;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/KrispAtEndExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun94021: for (var _fun94021_ip = 0;;) switch (_fun94021_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.location;
                var0 = var0.disable;
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun94021_ip = 22;
                    continue _fun94021
                }
            case 20:
                var0 = false;
            case 22:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var6 = var2.AVHoldoutExperimentH22025;
                var5 = var6.getCurrentConfig;
                var3 = {};
                var3.location = var4;
                var2 = {};
                var2.disable = var0;
                var7 = true;
                var2.autoTrackExposure = var7;
                var2 = var5.bind(var6)(var3, var2);
                var2 = var2.isInHoldout;
                if (var2) {
                    _fun94021_ip = 118;
                    continue _fun94021
                }
            case 92:
                if (var0) {
                    _fun94021_ip = 118;
                    continue _fun94021
                }
            case 95:
                var3 = _closure1_slot2;
                var2 = var3.getConfig;
                var0 = {};
                var0.location = var4;
                var0 = var2.bind(var3)(var0);
                _fun94021_ip = 134;
                continue _fun94021;
            case 118:
                var1 = _closure1_slot2;
                var1 = var1.definition;
                var0 = var1.defaultConfig;
            case 134:
                return var0;
        }
    };
    var2.getKrispAtEndExperimentConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 3951, 2]);