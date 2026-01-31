// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = global;
    var1 = exports;
    var _closure1_slot0 = var2;
    var3 = require;
    var _closure1_slot1 = var3;
    var3 = metroImportDefault;
    var _closure1_slot2 = var3;
    var3 = dependencyMap;
    var _closure1_slot3 = var3;
    var3 = function arg0() {
        _fun1377: for (var _fun1377_ip = 0;;) switch (_fun1377_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot4;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun1377_ip = 31;
                    continue _fun1377
                }
            case 16:
                var4 = _closure1_slot4;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                if (!(var2 == var0)) {
                    _fun1377_ip = 113;
                    continue _fun1377
                }
            case 31:
                var4 = _closure1_slot0;
                var4 = var4.RN$Bridgeless;
                var5 = true;
                if (!(var5 === var4)) {
                    _fun1377_ip = 75;
                    continue _fun1377
                }
            case 47:
                var4 = _closure1_slot0;
                var4 = var4.RN$TurboInterop;
                if (!(var5 !== var4)) {
                    _fun1377_ip = 75;
                    continue _fun1377
                }
            case 61:
                var4 = _closure1_slot0;
                var4 = var4.RN$UnifiedNativeModuleProxy;
                if (!(var5 === var4)) {
                    _fun1377_ip = 109;
                    continue _fun1377
                }
            case 75:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 0;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.default;
                var1 = var1[var3];
                if (!(var2 == var1)) {
                    _fun1377_ip = 111;
                    continue _fun1377
                }
            case 109:
                return var2;
            case 111:
                return var1;
            case 113:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = var2.__turboModuleProxy;
    var _closure1_slot4 = var2;
    var2 = function arg0() {
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var1.get = var2;
    var0 = function arg0() {
        var7 = arg0;
        var0 = _closure1_slot5;
        var4 = undefined;
        var0 = var0.bind(var4)(var7);
        var2 = _closure1_slot2;
        var3 = _closure1_slot3;
        var1 = 1;
        var1 = var3[var1];
        var3 = var2.bind(var4)(var1);
        var1 = null;
        var2 = var1 != var0;
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var5 = "TurboModuleRegistry.getEnforcing(...): '";
        var1 = "' could not be found. Verify that a module by this name is registered in the native binary.";
        var1 = var6.bind(var5)(var7, var1);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.getEnforcing = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [56, 44]);