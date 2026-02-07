// modules/user_settings/DefaultDMSettingsExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/DefaultDMSettingsExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun89376: for (var _fun89376_ip = 0;;) switch (_fun89376_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var0 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
                var1 = var2.getIsGidgetPawtectEnabled;
                var0 = 'shouldAgeVerifyForDMDefaultOff';
                var1 = var1.bind(var2)(var0);
                var0 = 1;
                var0 = var5[var0];
                var6 = var4.bind(var3)(var0);
                var2 = var6.isFeatureAgeGated;
                var0 = 2;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.DM_PRIVACY_SETTINGS;
                var2 = var2.bind(var6)(var0);
                var0 = 3;
                var0 = var5[var0];
                var3 = var4.bind(var3)(var0);
                var0 = var3.shouldShowTiggerPawtect;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun89376_ip = 120;
                    continue _fun89376
                }
            case 111:
                if (var1) {
                    _fun89376_ip = 117;
                    continue _fun89376
                }
            case 114:
                var1 = var2;
            case 117:
                var0 = var1;
            case 120:
                return var0;
        }
    };
    var2.shouldAgeVerifyForDMDefaultOff = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4277, 4278, 4300, 4248, 2]);