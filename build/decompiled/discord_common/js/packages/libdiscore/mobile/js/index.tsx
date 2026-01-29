// ../discord_common/js/packages/libdiscore/mobile/js/index.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37505: for (var _fun37505_ip = 0;;) switch (_fun37505_ip) {
        case 0:
            var6 = require;
            var5 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var4 = global;
            var9 = var4.Object;
            var8 = var9.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var3);
            var0 = 0;
            var3 = var7[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            var _closure1_slot0 = var3;
            var3 = 1;
            var3 = var7[var3];
            var3 = var5.bind(var0)(var3);
            var _closure1_slot1 = var3;
            var3 = 2;
            var3 = var7[var3];
            var3 = var6.bind(var0)(var3);
            var3 = var3.NativeModules;
            var5 = var3.LibDiscoreModule;
            if (var5) {
                _fun37505_ip = 150;
                continue _fun37505
            }
        case 106:
            var9 = var4.Proxy;
            var8 = {};
            var4 = function() { // Original name: get, environment: var1
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = "The package 'react-native-libdiscore-jsi-module' doesn't seem to be linked";
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            };
            var8.get = var4;
            var4 = var9.prototype;
            var5 = Object.create(var4, {
                constructor: {
                    value: var9
                }
            });
            var12 = {};
            var13 = var5;
            var11 = var8;
            var4 = new var13[var9](var12, var11, var10);
            var4 = var4 instanceof Object ? var4 : var5;
            _fun37505_ip = 156;
            continue _fun37505;
        case 150:
            var4 = var3.LibDiscoreModule;
        case 156:
            var3 = var4.bridgeJSIFunctions;
            var3 = var3.bind(var4)();
            var3 = 3;
            var3 = var7[var3];
            var3 = var6.bind(var0)(var3);
            var3 = var3.typedGlobal;
            var3 = var3.LIBDISCORE_JSI;
            var _closure1_slot2 = var3;
            var4 = var3.ExperimentCacher;
            var3 = function() { // Environment: var1
                var4 = _closure1_slot1;
                var3 = function() { // Original name: BlockedDomainsStore, environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = this;
                    var1 = var3.bind(var0)(var1, var2);
                    return var0;
                };
                var _closure2_slot0 = var3;
                var0 = {};
                var2 = 'isBlockedDomain';
                var0.key = var2;
                var2 = function(arg0) { // Original name: value, environment: var1
                    var2 = _closure1_slot2;
                    var1 = var2.isBlockedDomain;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.value = var2;
                var2 = new Array(2);
                var2[0] = var0;
                var0 = {};
                var5 = 'startFetchingBlockedDomains';
                var0.key = var5;
                var1 = function(arg0) { // Original name: value, environment: var1
                    var2 = _closure1_slot2;
                    var1 = var2.startFetchingBlockedDomains;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.value = var1;
                var2[1] = var0;
                var1 = undefined;
                var0 = null;
                var0 = var4.bind(var1)(var3, var0, var2);
                return var0;
            };
            var3 = var3.bind(var0)();
            var5 = 4;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = '../discord_common/js/packages/libdiscore/mobile/js/index.tsx';
            var5 = var6.bind(var7)(var5);
            var2.ExperimentCacher = var4;
            var4 = function(arg0, arg1) { // Original name: rustMultiply, environment: var1
                var3 = _closure1_slot2;
                var2 = var3.rustMultiply;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2.rustMultiply = var4;
            var4 = function() { // Original name: consumeLogs, environment: var1
                var1 = _closure1_slot2;
                var0 = var1.consumeLogs;
                var0 = var0.bind(var1)();
                return var0;
            };
            var2.consumeLogs = var4;
            var2.BlockedDomainsStore = var3;
            var3 = function() { // Original name: getFluxApi, environment: var1
                var0 = null;
                return var0;
            };
            var2.getFluxApi = var3;
            var3 = function() { // Original name: crash, environment: var1
                var1 = _closure1_slot2;
                var0 = var1.crash;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var2.crash = var3;
            var3 = function(arg0) { // Original name: generateLaunchSignature, environment: var1
                var2 = _closure1_slot2;
                var1 = var2.generateLaunchSignature;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.generateLaunchSignature = var3;
            var1 = function() { // Original name: getHttpClientAPI, environment: var1
                var0 = {};
                var2 = _closure1_slot2;
                var2 = var2.httpRequest;
                var0.httpRequest = var2;
                var2 = _closure1_slot2;
                var2 = var2.getHttpRequestStatus;
                var0.getHttpRequestStatus = var2;
                var2 = _closure1_slot2;
                var2 = var2.cancelHttpRequest;
                var0.cancelHttpRequest = var2;
                var1 = _closure1_slot2;
                var1 = var1.getTrackedRequestCount;
                var0.getTrackedRequestCount = var1;
                return var0;
            };
            var2.getHttpClientAPI = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 4078, 2]);