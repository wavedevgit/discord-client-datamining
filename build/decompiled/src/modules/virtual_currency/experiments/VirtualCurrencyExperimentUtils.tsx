// modules/virtual_currency/experiments/VirtualCurrencyExperimentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/experiments/VirtualCurrencyExperimentUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun28714: for (var _fun28714_ip = 0;;) switch (_fun28714_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var0 = null;
                var0 = var0 == var3;
                if (var0) {
                    _fun28714_ip = 38;
                    continue _fun28714
                }
            case 25:
                var2 = var3.isStaff;
                var2 = var2.bind(var3)();
                var0 = !var2;
            case 38:
                if (!var0) {
                    _fun28714_ip = 85;
                    continue _fun28714
                }
            case 41:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getCurrentConfig;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var1 = var1.enabled;
                var0 = !var1;
            case 85:
                return var0;
        }
    };
    var2.shouldHoldoutVirtualCurrencyFeatures = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 3305, 2]);