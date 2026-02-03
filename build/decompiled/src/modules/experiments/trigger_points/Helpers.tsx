// modules/experiments/trigger_points/Helpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CommonTriggerPoints;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0, arg1, arg2() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.experiments = var1;
            var1 = arg1;
            var2.triggerPoint = var1;
            var1 = arg2;
            var2.params = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'registeredExperimentIds';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var2 = var0.experiments;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.definition;
                var0 = var0.id;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'trigger';
        var0.key = var5;
        var5 = function() {
            _fun58217: for (var _fun58217_ip = 0;;) switch (_fun58217_ip) {
                case 0:
                    var1 = arguments[0];
                    var4 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun58217_ip = 14;
                        continue _fun58217
                    }
                case 12:
                    var1 = {};
                case 14:
                    var5 = _closure1_slot2;
                    var3 = var5.trackCommonTriggerPointExposures;
                    var2 = var4.params;
                    var2 = var2.location;
                    var2 = var3.bind(var5)(var2);
                    var2 = var4.triggerPoint;
                    var3 = var4.experiments;
                    var2 = {};
                    var7 = var4.params;
                    var8 = var2;
                    var4 = copyDataProperties(var8, var7);
                    var8 = var2;
                    var7 = var1;
                    var1 = copyDataProperties(var8, var7);
                    var1 = function arg0, arg1, arg2() {
                        var2 = arg1;
                        var1 = arg2;
                        var _closure4_slot0 = var1;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var2 = arg0;
                            var1 = var2.trackExposure;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var1.bind(var0)(var0, var3, var2);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getExperiments';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var0 = var0.experiments;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/experiments/trigger_points/Helpers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.CommonTriggerPointConfiguration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1211, 1591, 2]);