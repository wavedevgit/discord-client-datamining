// modules/user_settings/DataHarvestActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/DataHarvestActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: getDataHarvestStatus, environment: var1
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 1;
        var1 = var5[var1];
        var3 = undefined;
        var6 = var2.bind(var3)(var1);
        var2 = var6.dispatch;
        var1 = {};
        var7 = 'LOAD_DATA_HARVEST_TYPE_START';
        var1.type = var7;
        var1 = var2.bind(var6)(var1);
        var2 = _closure1_slot0;
        var1 = 2;
        var1 = var5[var1];
        var1 = var2.bind(var3)(var1);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var4 = _closure1_slot3;
        var4 = var4.USER_HARVEST;
        var1.url = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'UPDATE_DATA_HARVEST_TYPE';
            var1.type = var4;
            var4 = arg0;
            var4 = var4.body;
            var1.harvestType = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'LOAD_DATA_HARVEST_TYPE_FAILURE';
            var1.type = var4;
            var4 = arg0;
            var1.error = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getDataHarvestStatus = var3;
    var1 = function(arg0) { // Original name: requestDataHarvest, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.requestHarvest;
        var0 = arg0;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            _fun81623: for (var _fun81623_ip = 0;;) switch (_fun81623_ip) {
                case 0:
                    var0 = arg0;
                    var3 = null;
                    var1 = var3 != var0;
                    if (!var1) {
                        _fun81623_ip = 21;
                        continue _fun81623
                    }
                case 12:
                    var2 = var0.body;
                    var1 = var3 != var2;
                case 21:
                    if (!var1) {
                        _fun81623_ip = 81;
                        continue _fun81623
                    }
                case 24:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'UPDATE_DATA_HARVEST_TYPE';
                    var1.type = var4;
                    var4 = var0.body;
                    var1.harvestType = var4;
                    var1 = var2.bind(var3)(var1);
                case 81:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.requestDataHarvest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 507, 5679, 2]);