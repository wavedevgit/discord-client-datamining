// modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useVirtualCurrencyBalance, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot2;
            var0 = var0.balance;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useVirtualCurrencyBalance = var3;
    var3 = function(arg0) { // Original name: useHasEnoughVirtualCurrency, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun86638: for (var _fun86638_ip = 0;;) switch (_fun86638_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun86638_ip = 49;
                        continue _fun86638
                    }
                case 16:
                    var3 = _closure1_slot2;
                    var3 = var3.balance;
                    var4 = var2 != var3;
                    var2 = 0;
                    if (!var4) {
                        _fun86638_ip = 41;
                        continue _fun86638
                    }
                case 38:
                    var2 = var3;
                case 41:
                    var1 = _closure2_slot0;
                    var0 = var2 >= var1;
                case 49:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useHasEnoughVirtualCurrency = var3;
    var1 = function() { // Original name: getVirtualCurrencyBalance, environment: var1
        var1 = _closure1_slot2;
        var0 = var1.getCurrentBalance;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.getVirtualCurrencyBalance = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9495, 566, 2]);