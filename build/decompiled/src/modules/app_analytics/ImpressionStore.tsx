// modules/app_analytics/ImpressionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var4);
    var4 = var0.Object;
    var3 = var4.freeze;
    var0 = {};
    var7 = null;
    var0.debugTrackedData = var7;
    var7 = new Array(0);
    var0.impressions = var7;
    var0 = var3.bind(var4)(var0);
    var _closure1_slot2 = var0;
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.createWithEqualityFn;
    var3 = function() { // Environment: var1
        var0 = _closure1_slot2;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/ImpressionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var1 = arg0;
                var5 = var1.impressions;
                var1 = new Array(1);
                var4 = 0;
                var6 = var1;
                var3 = arraySpread(var6, var5, var4);
                var2 = _closure2_slot0;
                var1[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                var0.impressions = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setCurrentImpression = var4;
    var4 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var1 = arg0;
                var3 = var1.impressions;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.sequenceId;
                    var0 = _closure2_slot0;
                    var0 = var0.sequenceId;
                    var0 = var1 !== var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.impressions = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.cleanupImpression = var4;
    var4 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = function() { // Environment: var0
                var0 = {};
                var1 = {};
                var3 = _closure2_slot0;
                var1.name = var3;
                var4 = _closure2_slot1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var0.debugTrackedData = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setDebugTrackedData = var4;
    var2.useImpressionStore = var3;
    var3 = function() {
        var0 = {};
        var _closure2_slot0 = var0;
        var3 = _closure1_slot3;
        var2 = var3.getState;
        var2 = var2.bind(var3)();
        var3 = var2.impressions;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun8568: for (var _fun8568_ip = 0;;) switch (_fun8568_ip) {
                case 0:
                    var1 = arg0;
                    var3 = var1.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var2 = var2.ImpressionTypes;
                    var2 = var2.PAGE;
                    if (!(var3 !== var2)) {
                        _fun8568_ip = 69;
                        continue _fun8568
                    }
                case 49:
                    var3 = _closure2_slot0;
                    var2 = var1.name;
                    var3.section = var2;
                    _fun8568_ip = 87;
                    continue _fun8568;
                case 69:
                    var2 = _closure2_slot0;
                    var1 = var1.name;
                    var2.page = var1;
                case 87:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.getLocation = var3;
    var1 = function() {
        var1 = _closure1_slot3;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.impressions;
        return var0;
    };
    var2.getImpressionStack = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [797, 802, 481, 2]);