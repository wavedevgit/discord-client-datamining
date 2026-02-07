// modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun28907: for (var _fun28907_ip = 0;;) switch (_fun28907_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 0;
                var1 = var4[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.shouldHoldoutVirtualCurrencyFeatures;
                var2 = var1.bind(var2)(var3);
                var1 = {};
                if (var2) {
                    _fun28907_ip = 88;
                    continue _fun28907
                }
            case 43:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 1;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.getCurrentConfig;
                var0 = var0.bind(var2)(var3);
                var0 = var0.enabled;
                var1.enabled = var0;
                var0 = var1;
                _fun28907_ip = 97;
                continue _fun28907;
            case 88:
                var2 = false;
                var1.enabled = var2;
                var0 = var1;
            case 97:
                return var0;
        }
    };
    var2.isVirtualCurrencyEnabled = var3;
    var1 = function(arg0) { // Environment: var1
        _fun28908: for (var _fun28908_ip = 0;;) switch (_fun28908_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 1;
                var0 = var5[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useExperiment;
                var0 = var0.bind(var2)(var3);
                var2 = _closure1_slot0;
                var1 = 0;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.shouldHoldoutVirtualCurrencyFeatures;
                var2 = var1.bind(var2)(var3);
                var1 = {};
                if (var2) {
                    _fun28908_ip = 84;
                    continue _fun28908
                }
            case 70:
                var0 = var0.enabled;
                var1.enabled = var0;
                var0 = var1;
                _fun28908_ip = 93;
                continue _fun28908;
            case 84:
                var2 = false;
                var1.enabled = var2;
                var0 = var1;
            case 93:
                return var0;
        }
    };
    var2.useVirtualCurrencyMobileEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3346, 3348, 2]);