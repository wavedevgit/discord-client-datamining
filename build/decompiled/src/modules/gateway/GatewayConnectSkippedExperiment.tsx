// modules/gateway/GatewayConnectSkippedExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var8 = var4.bind(var0)(var3);
    var7 = var8.createExperiment;
    var6 = {
        'kind': 'user',
        'id': '2025-06_gateway_connect_skipped',
        'label': 'Gateway Connect Skipped Logging'
    };
    var3 = {
        'logSkipped': false,
        'logPostSkipped': false
    };
    var6.defaultConfig = var3;
    var10 = {
        'id': 1,
        'label': 'Fully Enabled'
    };
    var3 = 1;
    var9 = {
        'logSkipped': true,
        'logPostSkipped': true
    };
    var10.config = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': "Don't log post-skipped"
    };
    var11 = {
        'logSkipped': true,
        'logPostSkipped': false
    };
    var10.config = var11;
    var9[1] = var10;
    var6.treatments = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot0 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/GatewayConnectSkippedExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = var2.getCurrentConfig;
        var0 = {};
        var3 = 'shouldLogConnectSkipped';
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.logSkipped;
        return var0;
    };
    var2.shouldLogConnectSkipped = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = var2.getCurrentConfig;
        var0 = {};
        var3 = 'shouldLogPostConnectSkipped';
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.logPostSkipped;
        return var0;
    };
    var2.shouldLogPostConnectSkipped = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 2]);