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
    var2 = 'PrimitiveTagIntegration';
    var1.INTEGRATION_NAME = var2;
    var0 = function() {
        var0 = {};
        var2 = 'PrimitiveTagIntegration';
        var0.name = var2;
        var2 = function arg0() {
            var3 = arg0;
            var2 = var3.on;
            var1 = 'beforeSendEvent';
            var0 = function(arg0) { // Environment: var0
                _fun12767: for (var _fun12767_ip = 0;;) switch (_fun12767_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = var1.tags;
                        if (!var2) {
                            _fun12767_ip = 57;
                            continue _fun12767
                        }
                    case 18:
                        var2 = global;
                        var3 = var2.Object;
                        var2 = var3.keys;
                        var1 = var1.tags;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var3 = arg0;
                            var1 = _closure4_slot0;
                            var2 = var1.tags;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 0;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.PrimitiveToString;
                            var1 = var1.tags;
                            var1 = var1[var3];
                            var1 = var4.bind(var5)(var1);
                            var2[var3] = var1;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 57:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.setup = var2;
        var1 = function() {
            _fun12769: for (var _fun12769_ip = 0;;) switch (_fun12769_ip) {
                case 0:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var3 = 1;
                    var2 = var0[var3];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var2 = var2.NATIVE;
                    var2 = var2.enableNative;
                    if (!var2) {
                        _fun12769_ip = 81;
                        continue _fun12769
                    }
                case 40:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var3];
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.NATIVE;
                    var2 = var3._setPrimitiveProcessor;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 0;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.PrimitiveToString;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 81:
                    return var0;
            }
        };
        var0.afterAllSetup = var1;
        return var0;
    };
    var1.primitiveTagIntegration = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1171, 998]);