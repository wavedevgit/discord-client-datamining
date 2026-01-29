// modules/collectibles/native/hooks/useVirtualCurrencyData.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/hooks/useVirtualCurrencyData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Environment: var1
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 1;
        var2 = var7[var2];
        var5 = undefined;
        var4 = var6.bind(var5)(var2);
        var3 = var4.isVirtualCurrencyEnabled;
        var2 = {};
        var8 = 'useVCData';
        var2.location = var8;
        var2 = var3.bind(var4)(var2);
        var4 = var2.enabled;
        var _closure2_slot0 = var4;
        var2 = 2;
        var2 = var7[var2];
        var8 = var6.bind(var5)(var2);
        var3 = var8.getProductOrbPrice;
        var2 = {};
        var9 = arg0;
        var2.product = var9;
        var9 = arg1;
        var2.isPremiumUser = var9;
        var3 = var3.bind(var8)(var2);
        var _closure2_slot1 = var3;
        var2 = 3;
        var2 = var7[var2];
        var5 = var6.bind(var5)(var2);
        var2 = var5.useFetchVirtualCurrencyBalance;
        var2 = var2.bind(var5)();
        var2 = var2.balance;
        var _closure2_slot2 = var2;
        var6 = _closure1_slot2;
        var5 = var6.useMemo;
        var1 = new Array(3);
        var1[0] = var3;
        var1[1] = var2;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun87628: for (var _fun87628_ip = 0;;) switch (_fun87628_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 != var0;
                    var0 = null;
                    if (!var2) {
                        _fun87628_ip = 58;
                        continue _fun87628
                    }
                case 18:
                    var2 = _closure2_slot2;
                    var2 = var3 != var2;
                    var0 = null;
                    if (!var2) {
                        _fun87628_ip = 58;
                        continue _fun87628
                    }
                case 31:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!var2) {
                        _fun87628_ip = 58;
                        continue _fun87628
                    }
                case 40:
                    var2 = _closure2_slot1;
                    var2 = var2.amount;
                    var1 = _closure2_slot2;
                    var0 = var2 <= var1;
                case 58:
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var0, var1);
        var0 = {};
        var0.enabled = var4;
        var0.price = var3;
        var0.balance = var2;
        var0.canAfford = var1;
        return var0;
    };
    var2.useVirtualCurrencyData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3303, 4570, 9953, 2]);