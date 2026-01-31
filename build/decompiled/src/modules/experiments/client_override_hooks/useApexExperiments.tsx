// modules/experiments/client_override_hooks/useApexExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function(arg0, arg1) { // Original name: mergeApexExperiments, environment: var1
        _fun77085: for (var _fun77085_ip = 0;;) switch (_fun77085_ip) {
            case 0:
                var0 = {};
                var11 = global;
                var3 = var11.Object;
                var2 = var3.entries;
                var1 = arg0;
                var14 = var2.bind(var3)(var1);
                var1 = var14.length;
                var10 = 0;
                var1 = var10 < var1;
                var13 = 'user';
                var8 = undefined;
                var7 = 2;
                var6 = 1;
                var5 = 3;
                var4 = 4;
                var3 = 'guild';
                var2 = 0;
                if (!var1) {
                    _fun77085_ip = 234;
                    continue _fun77085
                }
            case 70:
                var15 = var14[var2];
                var1 = _closure1_slot2;
                var1 = var1.bind(var8)(var15, var7);
                var15 = var1[var10];
                var16 = var1[var6];
                var1 = {};
                var18 = _closure1_slot0;
                var17 = _closure1_slot1;
                var19 = var17[var5];
                var19 = var18.bind(var8)(var19);
                var19 = var19.ExperimentSystem;
                var19 = var19.APEX;
                var1.system = var19;
                var19 = var16.unitType;
                var17 = var17[var4];
                var17 = var18.bind(var8)(var17);
                var17 = var17.UnitType;
                var18 = var17.User;
                var17 = var3;
                if (!(var19 === var18)) {
                    _fun77085_ip = 165;
                    continue _fun77085
                }
            case 162:
                var17 = var13;
            case 165:
                var1.kind = var17;
                var17 = var16.name;
                var1.name = var17;
                var17 = var16.title;
                var1.title = var17;
                var18 = var16.variants;
                var17 = var18.map;
                var16 = function(arg0) { // Environment: var12
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.id = var2;
                    var7 = var1.id;
                    var6 = var1.label;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var5 = var3.concat;
                    var4 = 'Variant ';
                    var3 = ': ';
                    var3 = var5.bind(var4)(var7, var3, var6);
                    var0.label = var3;
                    var3 = var1.id;
                    var2 = var2.HermesInternal;
                    var2 = var2.concat;
                    var2 = var2.bind(var4)(var3);
                    var0.shortLabel = var2;
                    var1 = var1.type;
                    var0.type = var1;
                    return var0;
                };
                var16 = var17.bind(var18)(var16);
                var1.variants = var16;
                var0[var15] = var1;
                var2 = var2 + 1;
                var1 = var14.length;
                if (var2 < var1) {
                    _fun77085_ip = 70;
                    continue _fun77085
                }
            case 234:
                var3 = var11.Object;
                var2 = var3.entries;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = var4.length;
                var1 = var10 < var1;
                var3 = null;
                var2 = 0;
                if (!var1) {
                    _fun77085_ip = 430;
                    continue _fun77085
                }
            case 273:
                var13 = var4[var2];
                var1 = _closure1_slot2;
                var1 = var1.bind(var8)(var13, var7);
                var13 = var1[var10];
                var14 = var1[var6];
                var1 = var0[var13];
                if (!(var3 == var1)) {
                    _fun77085_ip = 415;
                    continue _fun77085
                }
            case 303:
                var1 = {};
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var5];
                var15 = var16.bind(var8)(var15);
                var15 = var15.ExperimentSystem;
                var15 = var15.APEX;
                var1.system = var15;
                var15 = var14.kind;
                var1.kind = var15;
                var15 = var14.name;
                var1.name = var15;
                var15 = var14.name;
                var1.title = var15;
                var16 = var11.Object;
                var15 = var16.entries;
                var14 = var14.variations;
                var16 = var15.bind(var16)(var14);
                var15 = var16.map;
                var14 = function(arg0) { // Environment: var12
                    _fun77087: for (var _fun77087_ip = 0;;) switch (_fun77087_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var5 = var2().value;
                            var1 = var0;
                            var3 = undefined;
                            var1 = var1 === var3;
                            var4 = undefined;
                            if (var1) {
                                _fun77087_ip = 27;
                                continue _fun77087
                            }
                        case 24:
                            var4 = var5;
                        case 27:
                            if (var1) {
                                _fun77087_ip = 41;
                                continue _fun77087
                            }
                        case 30:
                            var2 = var2().value;
                            var2 = var0;
                            var1 = var2 === var3;
                        case 41:
                            if (var1) {
                                _fun77087_ip = 47;
                                continue _fun77087
                            }
                        case 44:
                            var0.return();
                        case 47:
                            var0 = {};
                            var1 = global;
                            var2 = var1.Number;
                            var2 = var2.bind(var3)(var4);
                            var0.id = var2;
                            var2 = var1.HermesInternal;
                            var5 = var2.concat;
                            var2 = 'Variant ';
                            var5 = var5.bind(var2)(var4);
                            var0.label = var5;
                            var1 = var1.HermesInternal;
                            var1 = var1.concat;
                            var1 = var1.bind(var2)(var4);
                            var0.shortLabel = var1;
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 5;
                            var1 = var4[var1];
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.Variation_Type;
                            var1 = var1.UNSPECIFIED;
                            var0.type = var1;
                            return var0;
                    }
                };
                var14 = var15.bind(var16)(var14);
                var1.variants = var14;
                var0[var13] = var1;
            case 415:
                var2 = var2 + 1;
                var1 = var4.length;
                if (var2 < var1) {
                    _fun77085_ip = 273;
                    continue _fun77085
                }
            case 430:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var3 = function(arg0) { // Original name: getApexExperimentOverridesInfo, environment: var1
        _fun77088: for (var _fun77088_ip = 0;;) switch (_fun77088_ip) {
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
                    _fun77088_ip = 112;
                    continue _fun77088
                }
            case 51:
                var9 = var8[var2];
                var1 = _closure1_slot2;
                var1 = var1.bind(var5)(var9, var4);
                var9 = var1[var7];
                var10 = var1[var3];
                var1 = {};
                var1.experimentId = var9;
                var11 = var10.variantId;
                var1.variantId = var11;
                var1.originalDescriptor = var10;
                var0[var9] = var1;
                var2 = var2 + 1;
                var1 = var8.length;
                if (var2 < var1) {
                    _fun77088_ip = 51;
                    continue _fun77088
                }
            case 112:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.useEffect;
    var _closure1_slot3 = var9;
    var5 = var5.useMemo;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/client_override_hooks/useApexExperiments.tsx';
    var5 = var6.bind(var7)(var5);
    var2.mergeApexExperiments = var4;
    var2.getApexExperimentOverridesInfo = var3;
    var3 = function() { // Original name: getApexExperiments, environment: var1
        var0 = {};
        var6 = _closure1_slot6;
        var4 = _closure1_slot5;
        var2 = var4.getExperimentsMetadata;
        var5 = var2.bind(var4)();
        var2 = var4.getRegisteredExperiments;
        var2 = var2.bind(var4)();
        var3 = undefined;
        var2 = var6.bind(var3)(var5, var2);
        var0.experiments = var2;
        var2 = _closure1_slot7;
        var1 = var4.getClientOverrides;
        var1 = var1.bind(var4)();
        var1 = var2.bind(var3)(var1);
        var0.overridesInfo = var1;
        return var0;
    };
    var2.getApexExperiments = var3;
    var1 = function() { // Original name: useApexExperiments, environment: var1
        var5 = _closure1_slot3;
        var4 = undefined;
        var2 = function() { // Environment: var1
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 6;
            var1 = var5[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var1);
            var2 = var3.fetchApexExperimentsMetadata;
            var1 = 5;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var1.Experiment_Surface;
            var1 = var1.APP;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = new Array(0);
        var0 = var5.bind(var4)(var2, var0);
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var5 = 7;
        var0 = var7[var5];
        var10 = var6.bind(var4)(var0);
        var9 = var10.useStateFromStores;
        var0 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var0;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getExperimentsMetadata;
            var0 = var0.bind(var1)();
            return var0;
        };
        var9 = var9.bind(var10)(var8, var2);
        var _closure2_slot0 = var9;
        var2 = var7[var5];
        var11 = var6.bind(var4)(var2);
        var10 = var11.useStateFromStores;
        var8 = new Array(1);
        var8[0] = var0;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getRegisteredExperiments;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var10.bind(var11)(var8, var2);
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var8 = new Array(2);
        var8[0] = var9;
        var8[1] = var2;
        var2 = function() { // Environment: var1
            var3 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var2 = var3.bind(var4)(var2, var8);
        var5 = var7[var5];
        var7 = var6.bind(var4)(var5);
        var6 = var7.useStateFromStores;
        var5 = new Array(1);
        var5[0] = var0;
        var0 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getClientOverrides;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var6.bind(var7)(var5, var0);
        var _closure2_slot2 = var5;
        var0 = {};
        var0.experiments = var2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = _closure2_slot2;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.overridesInfo = var1;
        return var0;
    };
    var2.useApexExperiments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1211, 1600, 1305, 3290, 9763, 566, 2]);