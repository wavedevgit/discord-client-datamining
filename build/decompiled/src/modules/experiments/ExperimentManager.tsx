// modules/experiments/ExperimentManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var3 = 0;
    var4 = var6[var3];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.registerExperiment;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.ExperimentTypes;
    var _closure1_slot4 = var4;
    var3 = var3.ExposureTypes;
    var3 = {};
    var4 = 'legacy';
    var3.LEGACY = var4;
    var4 = 'apex';
    var3.APEX = var4;
    var _closure1_slot5 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/ExperimentManager.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1, arg2() {
        _fun17816: for (var _fun17816_ip = 0;;) switch (_fun17816_ip) {
            case 0:
                var5 = arg2;
                var3 = _closure1_slot2;
                var2 = var3.trackExposure;
                var1 = {};
                var0 = arg0;
                var1.experimentId = var0;
                var0 = arg1;
                var1.descriptor = var0;
                var4 = null;
                var7 = var4 == var5;
                var0 = undefined;
                var6 = undefined;
                if (var7) {
                    _fun17816_ip = 52;
                    continue _fun17816
                }
            case 47:
                var6 = var5.location;
            case 52:
                var1.location = var6;
                var7 = var4 == var5;
                var6 = undefined;
                if (var7) {
                    _fun17816_ip = 71;
                    continue _fun17816
                }
            case 65:
                var6 = var5.analyticsLocations;
            case 71:
                var1.location_stack = var6;
                var7 = var4 == var5;
                var6 = undefined;
                if (var7) {
                    _fun17816_ip = 91;
                    continue _fun17816
                }
            case 85:
                var6 = var5.fingerprint;
            case 91:
                var1.fingerprint = var6;
                var7 = var4 == var5;
                var6 = undefined;
                if (var7) {
                    _fun17816_ip = 111;
                    continue _fun17816
                }
            case 105:
                var6 = var5.excluded;
            case 111:
                var1.excluded = var6;
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun17816_ip = 131;
                    continue _fun17816
                }
            case 125:
                var4 = var5.exposureType;
            case 131:
                var1.exposureType = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.trackExposureToExperiment = var4;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.id;
        var6 = var0.title;
        var5 = var0.description;
        var4 = var0.buckets;
        var0 = var0.commonTriggerPoint;
        var3 = _closure1_slot3;
        var2 = {};
        var2.experimentId = var1;
        var7 = _closure1_slot4;
        var7 = var7.USER;
        var2.experimentType = var7;
        var2.title = var6;
        var2.description = var5;
        var2.buckets = var4;
        var2.commonTriggerPoint = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2);
        var0 = {};
        var0.id = var1;
        return var0;
    };
    var2.registerUserExperiment = var4;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.id;
        var6 = var0.title;
        var5 = var0.description;
        var4 = var0.buckets;
        var0 = var0.commonTriggerPoint;
        var3 = _closure1_slot3;
        var2 = {};
        var2.experimentId = var1;
        var7 = _closure1_slot4;
        var7 = var7.GUILD;
        var2.experimentType = var7;
        var2.title = var6;
        var2.description = var5;
        var2.buckets = var4;
        var2.commonTriggerPoint = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2);
        var0 = {};
        var0.id = var1;
        return var0;
    };
    var2.registerGuildExperiment = var4;
    var2.ExperimentSystem = var3;
    var1 = function arg0, arg1, arg2() {
        _fun17819: for (var _fun17819_ip = 0;;) switch (_fun17819_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var4 = arg2;
                var1 = _closure1_slot5;
                var1 = var1.LEGACY;
                if (!(var2 !== var1)) {
                    _fun17819_ip = 155;
                    continue _fun17819
                }
            case 29:
                var1 = _closure1_slot5;
                var1 = var1.APEX;
                if (!(var2 === var1)) {
                    _fun17819_ip = 219;
                    continue _fun17819
                }
            case 46:
                var1 = null;
                if (!(var1 != var4)) {
                    _fun17819_ip = 106;
                    continue _fun17819
                }
            case 52:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.dispatch;
                var1 = {};
                var6 = 'APEX_EXPERIMENT_OVERRIDE_CREATE';
                var1.type = var6;
                var1.experimentName = var3;
                var1.variantId = var4;
                var1 = var2.bind(var5)(var1);
                _fun17819_ip = 219;
                continue _fun17819;
            case 106:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.dispatch;
                var1 = {};
                var6 = 'APEX_EXPERIMENT_OVERRIDE_DELETE';
                var1.type = var6;
                var1.experimentName = var3;
                var1 = var2.bind(var5)(var1);
                _fun17819_ip = 219;
                continue _fun17819;
            case 155:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var5 = 'EXPERIMENT_OVERRIDE_BUCKET';
                var0.type = var5;
                var0.experimentId = var3;
                var3 = null;
                var5 = var3 != var4;
                if (!var5) {
                    _fun17819_ip = 209;
                    continue _fun17819
                }
            case 206:
                var3 = var4;
            case 209:
                var0.experimentBucket = var3;
                var0 = var1.bind(var2)(var0);
            case 219:
                var0 = undefined;
                return var0;
        }
    };
    var2.overrideBucket = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1590, 1591, 806, 2]);