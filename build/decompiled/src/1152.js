// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function arg0() {
        _fun12587: for (var _fun12587_ip = 0;;) switch (_fun12587_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var3.ReactNativeLibraries;
                var5 = var3.AppRegistry;
                if (!var5) {
                    _fun12587_ip = 91;
                    continue _fun12587
                }
            case 49:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.fillTyped;
                var2 = 'runApplication';
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var3 = undefined;
                        var0 = undefined;
                        var4 = _closure2_slot0;
                        var2 = var4.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var1 = var2.bind(var4)(var1);
                        var2 = _closure3_slot0;
                        var1 = var2.apply;
                        var0 = arguments;
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var5, var2, var1);
            case 91:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var3 = 'AppRegistry';
    var1.INTEGRATION_NAME = var3;
    var3 = function() {
        var0 = new Array(0);
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = 'AppRegistry';
        var0.name = var2;
        var2 = function() {
            _fun12592: for (var _fun12592_ip = 0;;) switch (_fun12592_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 0;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.isWeb;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun12592_ip = 53;
                        continue _fun12592
                    }
                case 37:
                    var2 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                case 53:
                    return var0;
            }
        };
        var0.setupOnce = var2;
        var1 = function arg0() {
            _fun12593: for (var _fun12593_ip = 0;;) switch (_fun12593_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure2_slot0;
                    var1 = var3.includes;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun12593_ip = 39;
                        continue _fun12593
                    }
                case 23:
                    var1 = _closure2_slot0;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                    _fun12593_ip = 86;
                    continue _fun12593;
                case 39:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.debug;
                    var1 = var2.log;
                    var0 = '[AppRegistryIntegration] Callback already registered.';
                    var0 = var1.bind(var2)(var0);
                case 86:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.onRunApplication = var1;
        return var0;
    };
    var1.appRegistryIntegration = var3;
    var1.patchAppRegistryRunApplication = var2;
    var0 = function() {
        _fun12594: for (var _fun12594_ip = 0;;) switch (_fun12594_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var1 = 0;
                if (!(var2 > var1)) {
                    _fun12594_ip = 21;
                    continue _fun12594
                }
            case 13:
                var2 = arguments[var1];
                if (!(var0 === var2)) {
                    _fun12594_ip = 56;
                    continue _fun12594
                }
            case 21:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.getClient;
                var2 = var2.bind(var4)();
                _fun12594_ip = 60;
                continue _fun12594;
            case 56:
                var2 = arguments[var1];
            case 60:
                if (var2) {
                    _fun12594_ip = 65;
                    continue _fun12594
                }
            case 63:
                return var0;
            case 65:
                var1 = var2.getIntegrationByName;
                var0 = 'AppRegistry';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.getAppRegistryIntegration = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [999, 817, 994, 1153]);