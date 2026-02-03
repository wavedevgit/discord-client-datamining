// modules/media_engine/AsyncClipsSourceDeinitExperiment.tsx
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
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var3);
    var6 = var7.createApexExperiment;
    var3 = {
        'name': '2025-11-async-clips-source-deinit',
        'kind': 'user'
    };
    var8 = {};
    var9 = false;
    var8.enabled = var9;
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var9.enabled = var10;
    var8[1] = var9;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/AsyncClipsSourceDeinitExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun94043: for (var _fun94043_ip = 0;;) switch (_fun94043_ip) {
            case 0:
                var3 = arg0;
                var6 = arguments[1];
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun94043_ip = 14;
                    continue _fun94043
                }
            case 12:
                var6 = true;
            case 14:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var5 = var1.AVHoldoutExperimentH22025;
                var4 = var5.getCurrentConfig;
                var2 = {};
                var2.location = var3;
                var1 = {};
                var1.autoTrackExposure = var6;
                var1 = var4.bind(var5)(var2, var1);
                var2 = var1.isInHoldout;
                var1 = {};
                if (var2) {
                    _fun94043_ip = 100;
                    continue _fun94043
                }
            case 79:
                var2 = _closure1_slot2;
                var0 = var2.getConfig;
                var1.location = var3;
                var0 = var0.bind(var2)(var1);
                _fun94043_ip = 109;
                continue _fun94043;
            case 100:
                var2 = false;
                var1.enabled = var2;
                var0 = var1;
            case 109:
                return var0;
        }
    };
    var2.getAsyncClipsSourceDeinitExperimentConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 3951, 2]);