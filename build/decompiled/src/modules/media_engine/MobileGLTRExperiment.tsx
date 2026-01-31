// modules/media_engine/MobileGLTRExperiment.tsx
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
        'name': '2025-12-mobile-golive-tile-resolution',
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
    var3 = 'modules/media_engine/MobileGLTRExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getMobileGLTRExperimentConfig, environment: var1
        _fun93541: for (var _fun93541_ip = 0;;) switch (_fun93541_ip) {
            case 0:
                var3 = arg0;
                var6 = arguments[1];
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun93541_ip = 14;
                    continue _fun93541
                }
            case 12:
                var6 = true;
            case 14:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var5 = var0.AVHoldoutExperimentH22025;
                var4 = var5.getCurrentConfig;
                var2 = {};
                var2.location = var3;
                var0 = {};
                var0.autoTrackExposure = var6;
                var0 = var4.bind(var5)(var2, var0);
                var0 = var0.isInHoldout;
                var1 = _closure1_slot2;
                if (var0) {
                    _fun93541_ip = 100;
                    continue _fun93541
                }
            case 81:
                var2 = var1.getConfig;
                var0 = {};
                var0.location = var3;
                var0 = var2.bind(var1)(var0);
                _fun93541_ip = 112;
                continue _fun93541;
            case 100:
                var1 = var1.definition;
                var0 = var1.defaultConfig;
            case 112:
                return var0;
        }
    };
    var2.getMobileGLTRExperimentConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 3910, 2]);