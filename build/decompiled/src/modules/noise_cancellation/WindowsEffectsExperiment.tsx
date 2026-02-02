// modules/noise_cancellation/WindowsEffectsExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun93981: for (var _fun93981_ip = 0;;) switch (_fun93981_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.location;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var2);
                var5 = var0.AVHoldoutExperimentH22025;
                var4 = var5.getCurrentConfig;
                var2 = {};
                var2.location = var3;
                var0 = {};
                var6 = true;
                var0.autoTrackExposure = var6;
                var0 = var4.bind(var5)(var2, var0);
                var0 = var0.isInHoldout;
                var1 = _closure1_slot3;
                if (var0) {
                    _fun93981_ip = 98;
                    continue _fun93981
                }
            case 79:
                var2 = var1.getConfig;
                var0 = {};
                var0.location = var3;
                var0 = var2.bind(var1)(var0);
                _fun93981_ip = 110;
                continue _fun93981;
            case 98:
                var1 = var1.definition;
                var0 = var1.defaultConfig;
            case 110:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4.value = var12;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var11 = {};
    var4 = false;
    var11.preferSystemEffects = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createApexExperiment;
    var4 = {
        'name': '2025-12-windows-audio-effects',
        'kind': 'user'
    };
    var4.defaultConfig = var11;
    var9 = {};
    var10 = {};
    var15 = var10;
    var14 = var11;
    var11 = copyDataProperties(var15, var14);
    var11 = 'preferSystemEffects';
    var10[var11] = var12;
    var9[1] = var10;
    var4.variations = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/noise_cancellation/WindowsEffectsExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getWindowsAudioEffectsExperimentConfig = var3;
    var1 = function arg0() {
        var1 = arg0;
        var1 = var1.location;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = {};
            var0 = _closure2_slot0;
            var1.location = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useWindowsAudioEffectsExperimentConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1211, 1301, 3912, 566, 2]);