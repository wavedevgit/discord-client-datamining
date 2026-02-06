// modules/premium/native/hooks/usePremiumProductPricingString.tsx
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/hooks/usePremiumProductPricingString.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun75080: for (var _fun75080_ip = 0;;) switch (_fun75080_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var3 = var5[var1];
                var1 = undefined;
                var8 = var4.bind(var1)(var3);
                var7 = var8.getPlanIdForPremiumType;
                var6 = arg0;
                var3 = arg1;
                var7 = var7.bind(var8)(var6, var3);
                var3 = 2;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.getProductIdForGift;
                var3 = var3.bind(var6)(var7);
                var _closure2_slot0 = var3;
                var3 = 3;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.useStateFromStores;
                var5 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getProduct;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2, var0);
                var0 = null;
                var3 = var0 == var2;
                if (var3) {
                    _fun75080_ip = 129;
                    continue _fun75080
                }
            case 123:
                var1 = var2.priceString;
            case 129:
                var2 = var0 != var1;
                var0 = '$...';
                if (!var2) {
                    _fun75080_ip = 145;
                    continue _fun75080
                }
            case 142:
                var0 = var1;
            case 145:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4612, 3111, 4609, 566, 2]);