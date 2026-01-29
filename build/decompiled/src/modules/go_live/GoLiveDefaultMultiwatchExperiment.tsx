// modules/go_live/GoLiveDefaultMultiwatchExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0) { // Original name: getGoLiveDefaultMultiwatchExperimentConfig, environment: var1
        _fun64298: for (var _fun64298_ip = 0;;) switch (_fun64298_ip) {
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
                    _fun64298_ip = 98;
                    continue _fun64298
                }
            case 79:
                var2 = var1.getConfig;
                var0 = {};
                var0.location = var3;
                var0 = var2.bind(var1)(var0);
                _fun64298_ip = 110;
                continue _fun64298;
            case 98:
                var1 = var1.definition;
                var0 = var1.defaultConfig;
            case 110:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var11 = true;
    var4.value = var11;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var10 = {};
    var4 = false;
    var10.defaultWatchMultipleStreams = var4;
    var4 = 1;
    var4 = var6[var4];
    var7 = var7.bind(var0)(var4);
    var4 = {
        'name': '2025-08-go-live-default-multiwatch',
        'kind': 'user'
    };
    var4.defaultConfig = var10;
    var8 = {};
    var9 = {};
    var14 = var9;
    var13 = var10;
    var10 = copyDataProperties(var14, var13);
    var10 = 'defaultWatchMultipleStreams';
    var9[var10] = var11;
    var8[1] = var9;
    var4.variations = var8;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/GoLiveDefaultMultiwatchExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getGoLiveDefaultMultiwatchExperimentConfig = var3;
    var1 = function(arg0) { // Original name: useGoLiveDefaultMultiwatchExperimentConfig, environment: var1
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
    var2.useGoLiveDefaultMultiwatchExperimentConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1211, 1302, 3905, 566, 2]);