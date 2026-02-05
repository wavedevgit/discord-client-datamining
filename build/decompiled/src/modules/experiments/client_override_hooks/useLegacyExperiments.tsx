// modules/experiments/client_override_hooks/useLegacyExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        _fun77624: for (var _fun77624_ip = 0;;) switch (_fun77624_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot6;
                var0 = var0.CONTROL;
                if (!(var2 !== var0)) {
                    _fun77624_ip = 106;
                    continue _fun77624
                }
            case 20:
                var0 = _closure1_slot6;
                var0 = var0.NOT_ELIGIBLE;
                if (!(var2 !== var0)) {
                    _fun77624_ip = 70;
                    continue _fun77624
                }
            case 34:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.Variation_Type;
                var0 = var0.TREATMENT;
                _fun77624_ip = 104;
                continue _fun77624;
            case 70:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.Variation_Type;
                var0 = var2.UNSPECIFIED;
            case 104:
                _fun77624_ip = 140;
                continue _fun77624;
            case 106:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Variation_Type;
                var0 = var1.CONTROL;
            case 140:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var4 = function arg0() {
        _fun77625: for (var _fun77625_ip = 0;;) switch (_fun77625_ip) {
            case 0:
                var0 = {};
                var _closure2_slot0 = var0;
                var9 = function arg0() {
                    _fun77626: for (var _fun77626_ip = 0;;) switch (_fun77626_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var1 = {};
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 5;
                            var8 = var8[var0];
                            var0 = undefined;
                            var8 = var9.bind(var0)(var8);
                            var8 = var8.ExperimentSystem;
                            var8 = var8.LEGACY;
                            var1.system = var8;
                            var9 = var5.type;
                            var7 = _closure1_slot7;
                            var8 = var7.USER;
                            var7 = 'guild';
                            if (!(var9 === var8)) {
                                _fun77626_ip = 91;
                                continue _fun77626
                            }
                        case 87:
                            var7 = 'user';
                        case 91:
                            var1.kind = var7;
                            var6 = _closure2_slot1;
                            var1.name = var6;
                            var6 = var5.title;
                            var1.title = var6;
                            var6 = var5.buckets;
                            var5 = var6.map;
                            var4 = function(arg0, arg1) { // Environment: var4
                                _fun77627: for (var _fun77627_ip = 0;;) switch (_fun77627_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = {};
                                        var1 = var3.valueOf;
                                        var1 = var1.bind(var3)();
                                        var0.id = var1;
                                        var1 = _closure3_slot0;
                                        var1 = var1.description;
                                        var4 = 'object';
                                        var1 = typeof var1;
                                        if (!(var4 !== var1)) {
                                            _fun77627_ip = 79;
                                            continue _fun77627
                                        }
                                    case 41:
                                        var5 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var1 = 6;
                                        var4 = var4[var1];
                                        var1 = undefined;
                                        var4 = var5.bind(var1)(var4);
                                        var1 = var4.getExperimentBucketName;
                                        var1 = var1.bind(var4)(var3);
                                        _fun77627_ip = 95;
                                        continue _fun77627;
                                    case 79:
                                        var2 = _closure3_slot0;
                                        var4 = var2.description;
                                        var2 = arg1;
                                        var1 = var4[var2];
                                    case 95:
                                        var0.label = var1;
                                        var5 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var2 = 6;
                                        var4 = var4[var2];
                                        var2 = undefined;
                                        var5 = var5.bind(var2)(var4);
                                        var4 = var5.getExperimentBucketName;
                                        var4 = var4.bind(var5)(var3);
                                        var0.shortLabel = var4;
                                        var1 = _closure1_slot8;
                                        var1 = var1.bind(var2)(var3);
                                        var0.type = var1;
                                        return var0;
                                }
                            };
                            var4 = var5.bind(var6)(var4);
                            var1.variants = var4;
                            var3[var2] = var1;
                            return var0;
                    }
                };
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = arg0;
                var8 = var2.bind(var3)(var1);
                var1 = var8.length;
                var7 = 0;
                var1 = var7 < var1;
                var5 = undefined;
                var4 = 2;
                var3 = 1;
                var2 = 0;
                if (!var1) {
                    _fun77625_ip = 107;
                    continue _fun77625
                }
            case 64:
                var11 = var8[var2];
                var1 = _closure1_slot3;
                var1 = var1.bind(var5)(var11, var4);
                var11 = var1[var7];
                var _closure2_slot1 = var11;
                var1 = var1[var3];
                var1 = var9.bind(var5)(var1);
                var2 = var2 + 1;
                var1 = var8.length;
                if (var2 < var1) {
                    _fun77625_ip = 64;
                    continue _fun77625
                }
            case 107:
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function arg0() {
        _fun77628: for (var _fun77628_ip = 0;;) switch (_fun77628_ip) {
            case 0:
                var0 = {};
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = arg0;
                var8 = var2.bind(var3)(var1);
                var1 = var8.length;
                var7 = 0;
                var1 = var7 < var1;
                var5 = undefined;
                var4 = 2;
                var3 = 1;
                var2 = 0;
                if (!var1) {
                    _fun77628_ip = 121;
                    continue _fun77628
                }
            case 51:
                var9 = var8[var2];
                var1 = _closure1_slot3;
                var1 = var1.bind(var5)(var9, var4);
                var9 = var1[var7];
                var10 = var1[var3];
                var1 = {};
                var1.experimentId = var9;
                var12 = var10.bucket;
                var11 = var12.valueOf;
                var11 = var11.bind(var12)();
                var1.variantId = var11;
                var1.originalDescriptor = var10;
                var0[var9] = var1;
                var2 = var2 + 1;
                var1 = var8.length;
                if (var2 < var1) {
                    _fun77628_ip = 51;
                    continue _fun77628
                }
            case 121:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.useMemo;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.ExperimentBuckets;
    var _closure1_slot6 = var8;
    var5 = var5.ExperimentTypes;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/client_override_hooks/useLegacyExperiments.tsx';
    var5 = var6.bind(var7)(var5);
    var2.parseRegisteredExperiments = var4;
    var2.getLegacyOverridesInfo = var3;
    var3 = function() {
        var2 = _closure1_slot5;
        var0 = var2.getRegisteredExperiments;
        var5 = var0.bind(var2)();
        var0 = var2.getAllExperimentOverrideDescriptors;
        var3 = var0.bind(var2)();
        var0 = {};
        var4 = _closure1_slot9;
        var2 = undefined;
        var4 = var4.bind(var2)(var5);
        var0.experiments = var4;
        var1 = _closure1_slot10;
        var1 = var1.bind(var2)(var3);
        var0.overridesInfo = var1;
        return var0;
    };
    var2.getLegacyExperiments = var3;
    var1 = function() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var5 = 7;
        var0 = var7[var5];
        var4 = undefined;
        var10 = var6.bind(var4)(var0);
        var9 = var10.useStateFromStoresObject;
        var0 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var0;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getRegisteredExperiments;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var9.bind(var10)(var8, var2);
        var _closure2_slot0 = var2;
        var5 = var7[var5];
        var7 = var6.bind(var4)(var5);
        var6 = var7.useStateFromStoresObject;
        var5 = new Array(1);
        var5[0] = var0;
        var0 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getAllExperimentOverrideDescriptors;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var6.bind(var7)(var5, var0);
        var _closure2_slot1 = var5;
        var0 = {};
        var3 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot9;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = var3.bind(var4)(var2, var6);
        var0.experiments = var2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot10;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.overridesInfo = var1;
        return var0;
    };
    var2.useLegacyExperiments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1590, 1591, 3331, 1600, 3329, 566, 2]);