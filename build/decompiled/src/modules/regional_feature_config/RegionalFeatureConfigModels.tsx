// modules/regional_feature_config/RegionalFeatureConfigModels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function(arg0) { // Original name: SettingsConfig, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.teenByDefault = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isFeatureTeenByDefault';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.teenByDefault;
            var0 = arg0;
            var0 = var1 & var0;
            var0 = !var0;
            var0 = !var0;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'hasTeenDefaults';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun39300: for (var _fun39300_ip = 0;;) switch (_fun39300_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.teenByDefault;
                    var0 = null;
                    var3 = var0 != var2;
                    var1 = 0;
                    var0 = 0;
                    if (!var3) {
                        _fun39300_ip = 25;
                        continue _fun39300
                    }
                case 22:
                    var0 = var2;
                case 25:
                    var0 = var1 !== var0;
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = var3.bind(var0)();
    var _closure1_slot2 = var4;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function(arg0) { // Original name: AgeVerificationConfig, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.gatedFeatures = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isFeatureAgeGated';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.gatedFeatures;
            var0 = arg0;
            var0 = var1 & var0;
            var0 = !var0;
            var0 = !var0;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'hasAgeGatedFeatures';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun39304: for (var _fun39304_ip = 0;;) switch (_fun39304_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.gatedFeatures;
                    var0 = null;
                    var3 = var0 != var2;
                    var1 = 0;
                    var0 = 0;
                    if (!var3) {
                        _fun39304_ip = 25;
                        continue _fun39304
                    }
                case 22:
                    var0 = var2;
                case 25:
                    var0 = var1 !== var0;
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var4 = function(arg0, arg1) { // Original name: RegionalFeatureConfig, environment: var1
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.settings = var1;
            var1 = arg1;
            var2.ageVerification = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var0 = {};
        var2 = 'isFeatureAgeGated';
        var0.key = var2;
        var2 = function(arg0) { // Original name: value, environment: var1
            var0 = this;
            var2 = var0.ageVerification;
            var1 = var2.isFeatureAgeGated;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var2;
        var2 = new Array(4);
        var2[0] = var0;
        var0 = {};
        var5 = 'isFeatureTeenByDefault';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var1
            var0 = this;
            var2 = var0.settings;
            var1 = var2.isFeatureTeenByDefault;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'hasAgeGatedFeatures';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var1
            var0 = this;
            var1 = var0.ageVerification;
            var0 = var1.hasAgeGatedFeatures;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'hasTeenDefaults';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var1
            var0 = this;
            var1 = var0.settings;
            var0 = var1.hasTeenDefaults;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'fromConnectionOpen';
        var0.key = var5;
        var1 = function(arg0) { // Original name: value, environment: var1
            var0 = arg0;
            var3 = _closure2_slot0;
            var5 = _closure1_slot2;
            var7 = var0.teen_by_default_settings;
            var4 = var5.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var5
                }
            });
            var8 = var4;
            var2 = new var8[var5](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var4 = _closure1_slot3;
            var7 = var0.age_gated_features;
            var1 = var4.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var8 = var1;
            var0 = new var8[var4](var7, var6);
            var6 = var0 instanceof Object ? var0 : var1;
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var8 = var1;
            var7 = var2;
            var0 = new var8[var3](var7, var6, var5);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var5 = 2;
    var6 = var6[var5];
    var5 = arg1;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/regional_feature_config/RegionalFeatureConfigModels.tsx';
    var5 = var6.bind(var7)(var5);
    var2.SettingsConfig = var4;
    var2.AgeVerificationConfig = var3;
    var2.RegionalFeatureConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);