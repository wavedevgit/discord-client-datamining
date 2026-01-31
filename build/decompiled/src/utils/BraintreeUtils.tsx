// utils/BraintreeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function() { // Original name: getBraintreeSDK, environment: var1
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 2;
        var2 = var5[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.importWithRetry;
        var1 = {};
        var4 = function() { // Original name: createPromise, environment: var0
            var2 = _closure1_slot0;
            var0 = _closure1_slot1;
            var1 = 4;
            var1 = var0[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = 3;
            var1 = var0[var1];
            var0 = var0.paths;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1.createPromise = var4;
        var4 = 5;
        var4 = var5[var4];
        var1.webpackId = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.default;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var3;
    var0 = function(arg0) { // Original name: getDeviceData, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var3 = var1.dataCollector;
            var2 = var3.create;
            var1 = {};
            var4 = _closure2_slot0;
            var1.client = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.deviceData;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.catch;
            var0 = function() { // Environment: var0
                var0 = null;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PaymentSettings;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/BraintreeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getBraintreeSDK = var3;
    var1 = function() { // Original name: collectDeviceData, environment: var1
        _fun25411: for (var _fun25411_ip = 0;;) switch (_fun25411_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = var2.getClient;
                var3 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var3)) {
                    _fun25411_ip = 36;
                    continue _fun25411
                }
            case 23:
                var2 = _closure1_slot5;
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                _fun25411_ip = 63;
                continue _fun25411;
            case 36:
                var2 = _closure1_slot4;
                var1 = undefined;
                var3 = var2.bind(var1)();
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var3 = var1.client;
                    var2 = var3.create;
                    var1 = {};
                    var4 = _closure1_slot3;
                    var4 = var4.BRAINTREE;
                    var4 = var4.KEY;
                    var1.authorization = var4;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot5;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.catch;
                    var0 = function() { // Environment: var0
                        var0 = null;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 63:
                return var0;
        }
    };
    var2.collectDeviceData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3086, 660, 3087, 3090, 1307, 3090, 2]);