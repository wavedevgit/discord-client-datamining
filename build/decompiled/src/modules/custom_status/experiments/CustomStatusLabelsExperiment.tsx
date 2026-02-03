// modules/custom_status/experiments/CustomStatusLabelsExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var8 = var4.bind(var0)(var3);
    var7 = var8.createExperiment;
    var6 = {
        'kind': 'user',
        'id': '2025-04_custom_status_labels',
        'label': 'Custom Status Labels Experiment'
    };
    var3 = {};
    var9 = false;
    var3.enabled = var9;
    var6.defaultConfig = var3;
    var10 = {
        'id': 1,
        'label': 'Enable custom status labels'
    };
    var3 = 1;
    var9 = {};
    var9.enabled = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var6.treatments = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot0 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/experiments/CustomStatusLabelsExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57313: for (var _fun57313_ip = 0;;) switch (_fun57313_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.location;
                var4 = var1.autoTrackExposure;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun57313_ip = 22;
                    continue _fun57313
                }
            case 20:
                var4 = true;
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
    var2.useIsEligibleForCustomStatusLabelsExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3115, 2]);