// modules/collectibles/hooks/useDefaultVariantIndex.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useDefaultVariantIndex.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun86837: for (var _fun86837_ip = 0;;) switch (_fun86837_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var6 = undefined;
                var7 = var3.bind(var6)(var0);
                var4 = var7.useStateFromStores;
                var0 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot2;
                    var0 = var0.purchases;
                    return var0;
                };
                var0 = var4.bind(var7)(var3, var0);
                var _closure2_slot0 = var0;
                var0 = null;
                var3 = var0 != var5;
                var4 = 0;
                var0 = 0;
                if (!var3) {
                    _fun86837_ip = 156;
                    continue _fun86837
                }
            case 77:
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.getIsVariantProduct;
                var2 = var2.bind(var3)(var5);
                var0 = 0;
                if (!var2) {
                    _fun86837_ip = 156;
                    continue _fun86837
                }
            case 113:
                var2 = global;
                var3 = var2.Math;
                var2 = var3.max;
                var6 = var5.variants;
                var5 = var6.findIndex;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var5.bind(var6)(var1);
                var0 = var2.bind(var3)(var4, var1);
            case 156:
                return var0;
        }
    };
    var2.useDefaultVariantIndex = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4580, 566, 4577, 2]);