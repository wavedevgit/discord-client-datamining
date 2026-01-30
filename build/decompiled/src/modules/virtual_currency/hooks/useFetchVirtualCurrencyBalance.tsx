// modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useFetchVirtualCurrencyBalance, environment: var1
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var6 = undefined;
        var5 = var2.bind(var6)(var1);
        var3 = var5.useStateFromStoresObject;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = {};
            var1 = _closure1_slot3;
            var2 = var1.balance;
            var0.balance = var2;
            var2 = var1.isFetchingBalance;
            var0.isFetching = var2;
            var1 = var1.fetchBalanceError;
            var0.error = var1;
            return var0;
        };
        var1 = var3.bind(var5)(var2, var1);
        var3 = var1.balance;
        var _closure2_slot0 = var3;
        var2 = var1.isFetching;
        var _closure2_slot1 = var2;
        var1 = var1.error;
        var _closure2_slot2 = var1;
        var5 = _closure1_slot2;
        var4 = new Array(3);
        var4[0] = var3;
        var4[1] = var1;
        var4[2] = var2;
        var0 = function() { // Environment: var0
            _fun75300: for (var _fun75300_ip = 0;;) switch (_fun75300_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var0 = var3 !== var0;
                    if (var0) {
                        _fun75300_ip = 24;
                        continue _fun75300
                    }
                case 16:
                    var2 = _closure2_slot2;
                    var0 = var3 !== var2;
                case 24:
                    if (var0) {
                        _fun75300_ip = 31;
                        continue _fun75300
                    }
                case 27:
                    var0 = _closure2_slot1;
                case 31:
                    if (var0) {
                        _fun75300_ip = 69;
                        continue _fun75300
                    }
                case 34:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.fetchVirtualCurrencyBalance;
                    var0 = var0.bind(var1)();
                case 69:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var5.bind(var6)(var0, var4);
        var0 = {};
        var0.balance = var3;
        var0.isFetching = var2;
        var0.error = var1;
        return var0;
    };
    var2.useFetchVirtualCurrencyBalance = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9493, 566, 9494, 2]);