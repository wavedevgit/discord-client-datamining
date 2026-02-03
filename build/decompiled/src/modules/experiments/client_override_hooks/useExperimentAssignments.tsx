// modules/experiments/client_override_hooks/useExperimentAssignments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1() {
        _fun79119: for (var _fun79119_ip = 0;;) switch (_fun79119_ip) {
            case 0:
                var2 = arg0;
                var4 = arguments[2];
                var6 = undefined;
                if (!(var4 === var6)) {
                    _fun79119_ip = 38;
                    continue _fun79119
                }
            case 12:
                var3 = _closure1_slot3;
                var0 = new Array(2);
                var0[0] = var3;
                var1 = _closure1_slot4;
                var0[1] = var1;
                var4 = var0;
            case 38:
                var3 = _closure1_slot2;
                var0 = 2;
                var3 = var3.bind(var6)(var4, var0);
                var0 = 0;
                var4 = var3[var0];
                var0 = 1;
                var7 = var3[var0];
                var0 = null;
                var3 = var0 == var2;
                if (var3) {
                    _fun79119_ip = 165;
                    continue _fun79119
                }
            case 76:
                var3 = var2.system;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 4;
                var1 = var8[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.ExperimentSystem;
                var1 = var1.LEGACY;
                if (!(var3 !== var1)) {
                    _fun79119_ip = 146;
                    continue _fun79119
                }
            case 118:
                var6 = var7.getServerAssignment;
                var5 = var2.kind;
                var3 = var2.name;
                var1 = arg1;
                var1 = var6.bind(var7)(var5, var1, var3);
                _fun79119_ip = 162;
                continue _fun79119;
            case 146:
                var3 = var4.getLoadedUserExperiment;
                var2 = var2.name;
                var1 = var3.bind(var4)(var2);
            case 162:
                var0 = var1;
            case 165:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/client_override_hooks/useExperimentAssignments.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot4;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun79121: for (var _fun79121_ip = 0;;) switch (_fun79121_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var4 = var0.system;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var5.bind(var1)(var0);
                    var0 = var0.ExperimentSystem;
                    var0 = var0.LEGACY;
                    if (!(var4 !== var0)) {
                        _fun79121_ip = 108;
                        continue _fun79121
                    }
                case 54:
                    var7 = _closure1_slot4;
                    var6 = var7.getAssignment;
                    var0 = _closure2_slot0;
                    var5 = var0.kind;
                    var4 = _closure2_slot1;
                    var0 = var0.name;
                    var4 = var6.bind(var7)(var5, var4, var0);
                    var0 = null;
                    var5 = var0 == var4;
                    var0 = undefined;
                    if (var5) {
                        _fun79121_ip = 106;
                        continue _fun79121
                    }
                case 100:
                    var0 = var4.variantId;
                case 106:
                    _fun79121_ip = 152;
                    continue _fun79121;
                case 108:
                    var4 = _closure1_slot3;
                    var3 = var4.getUserExperimentDescriptor;
                    var2 = _closure2_slot0;
                    var2 = var2.name;
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun79121_ip = 149;
                        continue _fun79121
                    }
                case 143:
                    var1 = var2.bucket;
                case 149:
                    var0 = var1;
                case 152:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useExperimentAssignment = var4;
    var2.getExperimentServerAssignment = var3;
    var1 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot4;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var5 = _closure1_slot3;
            var1 = new Array(2);
            var1[0] = var5;
            var0 = _closure1_slot4;
            var1[1] = var0;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useExperimentServerAssignment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1590, 1211, 566, 1600, 2]);