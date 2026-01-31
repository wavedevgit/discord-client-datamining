// modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function() { // Original name: canSeeExperimentEmbeds, environment: var1
        _fun77062: for (var _fun77062_ip = 0;;) switch (_fun77062_ip) {
            case 0:
                var3 = arguments[0];
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun77062_ip = 27;
                    continue _fun77062
                }
            case 9:
                var2 = _closure1_slot4;
                var0 = new Array(1);
                var0[0] = var2;
                var3 = var0;
            case 27:
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2.bind(var1)(var3, var0);
                var0 = 0;
                var4 = var2[var0];
                var0 = var4.getCurrentUser;
                var5 = var0.bind(var4)();
                var2 = null;
                var3 = var2 == var5;
                var0 = undefined;
                if (var3) {
                    _fun77062_ip = 79;
                    continue _fun77062
                }
            case 69:
                var3 = var5.isStaff;
                var0 = var3.bind(var5)();
            case 79:
                if (var0) {
                    _fun77062_ip = 113;
                    continue _fun77062
                }
            case 82:
                var3 = var4.getCurrentUser;
                var3 = var3.bind(var4)();
                var2 = var2 == var3;
                var1 = undefined;
                if (var2) {
                    _fun77062_ip = 110;
                    continue _fun77062
                }
            case 100:
                var2 = var3.isStaffPersonal;
                var1 = var2.bind(var3)();
            case 110:
                var0 = var1;
            case 113:
                return var0;
        }
    };
    var _closure1_slot13 = var4;
    var3 = function() { // Original name: useCanSeeExperimentEmbeds, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot13;
            var0 = _closure1_slot4;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var3;
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
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = {};
    var _closure1_slot7 = var5;
    var5 = {};
    var _closure1_slot8 = var5;
    var5 = {};
    var _closure1_slot9 = var5;
    var5 = {};
    var _closure1_slot10 = var5;
    var5 = {};
    var _closure1_slot11 = var5;
    var5 = {};
    var8 = {};
    var5.legacyExperiments = var8;
    var8 = {};
    var5.legacyOverridesInfo = var8;
    var8 = {};
    var5.apexExperiments = var8;
    var8 = {};
    var5.apexOverridesInfo = var8;
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx';
    var5 = var6.bind(var7)(var5);
    var2.canSeeExperimentEmbeds = var4;
    var2.useCanSeeExperimentEmbeds = var3;
    var1 = function() { // Original name: useCodedLinksExperimentEmbeds, environment: var1
        var2 = _closure1_slot14;
        var10 = undefined;
        var9 = var2.bind(var10)();
        var _closure2_slot0 = var9;
        var4 = _closure1_slot0;
        var11 = _closure1_slot1;
        var3 = 5;
        var2 = var11[var3];
        var8 = var4.bind(var10)(var2);
        var7 = var8.useStateFromStoresObject;
        var2 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var2;
        var5 = function() { // Environment: var0
            _fun77066: for (var _fun77066_ip = 0;;) switch (_fun77066_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun77066_ip = 19;
                        continue _fun77066
                    }
                case 13:
                    var0 = _closure1_slot7;
                    _fun77066_ip = 33;
                    continue _fun77066;
                case 19:
                    var2 = _closure1_slot5;
                    var1 = var2.getRegisteredExperiments;
                    var0 = var1.bind(var2)();
                case 33:
                    return var0;
            }
        };
        var8 = var7.bind(var8)(var6, var5);
        var _closure2_slot1 = var8;
        var5 = var11[var3];
        var7 = var4.bind(var10)(var5);
        var6 = var7.useStateFromStoresObject;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            _fun77067: for (var _fun77067_ip = 0;;) switch (_fun77067_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun77067_ip = 19;
                        continue _fun77067
                    }
                case 13:
                    var0 = _closure1_slot8;
                    _fun77067_ip = 33;
                    continue _fun77067;
                case 19:
                    var2 = _closure1_slot5;
                    var1 = var2.getAllExperimentOverrideDescriptors;
                    var0 = var1.bind(var2)();
                case 33:
                    return var0;
            }
        };
        var7 = var6.bind(var7)(var5, var2);
        var _closure2_slot2 = var7;
        var2 = var11[var3];
        var13 = var4.bind(var10)(var2);
        var12 = var13.useStateFromStores;
        var2 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var2;
        var5 = function() { // Environment: var0
            _fun77068: for (var _fun77068_ip = 0;;) switch (_fun77068_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun77068_ip = 19;
                        continue _fun77068
                    }
                case 13:
                    var0 = _closure1_slot9;
                    _fun77068_ip = 33;
                    continue _fun77068;
                case 19:
                    var2 = _closure1_slot6;
                    var1 = var2.getExperimentsMetadata;
                    var0 = var1.bind(var2)();
                case 33:
                    return var0;
            }
        };
        var6 = var12.bind(var13)(var6, var5);
        var _closure2_slot3 = var6;
        var5 = var11[var3];
        var14 = var4.bind(var10)(var5);
        var13 = var14.useStateFromStores;
        var12 = new Array(1);
        var12[0] = var2;
        var5 = function() { // Environment: var0
            _fun77069: for (var _fun77069_ip = 0;;) switch (_fun77069_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun77069_ip = 19;
                        continue _fun77069
                    }
                case 13:
                    var0 = _closure1_slot10;
                    _fun77069_ip = 33;
                    continue _fun77069;
                case 19:
                    var2 = _closure1_slot6;
                    var1 = var2.getRegisteredExperiments;
                    var0 = var1.bind(var2)();
                case 33:
                    return var0;
            }
        };
        var5 = var13.bind(var14)(var12, var5);
        var _closure2_slot4 = var5;
        var3 = var11[var3];
        var10 = var4.bind(var10)(var3);
        var4 = var10.useStateFromStores;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun77070: for (var _fun77070_ip = 0;;) switch (_fun77070_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun77070_ip = 19;
                        continue _fun77070
                    }
                case 13:
                    var0 = _closure1_slot11;
                    _fun77070_ip = 33;
                    continue _fun77070;
                case 19:
                    var2 = _closure1_slot6;
                    var1 = var2.getClientOverrides;
                    var0 = var1.bind(var2)();
                case 33:
                    return var0;
            }
        };
        var4 = var4.bind(var10)(var3, var2);
        var _closure2_slot5 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(6);
        var1[0] = var9;
        var1[1] = var8;
        var1[2] = var7;
        var1[3] = var6;
        var1[4] = var5;
        var1[5] = var4;
        var0 = function() { // Environment: var0
            _fun77071: for (var _fun77071_ip = 0;;) switch (_fun77071_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun77071_ip = 22;
                        continue _fun77071
                    }
                case 13:
                    var0 = _closure1_slot12;
                    _fun77071_ip = 164;
                    continue _fun77071;
                case 22:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 6;
                    var7 = var6[var3];
                    var4 = undefined;
                    var9 = var5.bind(var4)(var7);
                    var8 = var9.parseRegisteredExperiments;
                    var7 = _closure2_slot1;
                    var7 = var8.bind(var9)(var7);
                    var1.legacyExperiments = var7;
                    var3 = var6[var3];
                    var8 = var5.bind(var4)(var3);
                    var7 = var8.getLegacyOverridesInfo;
                    var3 = _closure2_slot2;
                    var3 = var7.bind(var8)(var3);
                    var1.legacyOverridesInfo = var3;
                    var3 = 7;
                    var7 = var6[var3];
                    var10 = var5.bind(var4)(var7);
                    var9 = var10.mergeApexExperiments;
                    var8 = _closure2_slot3;
                    var7 = _closure2_slot4;
                    var7 = var9.bind(var10)(var8, var7);
                    var1.apexExperiments = var7;
                    var3 = var6[var3];
                    var4 = var5.bind(var4)(var3);
                    var3 = var4.getApexExperimentOverridesInfo;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var4)(var2);
                    var1.apexOverridesInfo = var2;
                    var0 = var1;
                case 164:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useCodedLinksExperimentEmbeds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1613, 1590, 1211, 566, 9761, 9762, 2]);