// modules/collectibles/hooks/useGetProductsFromSkus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useGetProductsFromSkus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useGetProductsFromSkus, environment: var1
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var2 = var3[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.products;
            return var0;
        };
        var4 = var5.bind(var6)(var4, var2);
        var _closure2_slot0 = var4;
        var2 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function(arg0) { // Environment: var0
            var5 = arg0;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var4 = var5.map;
            var1 = function(arg0) { // Environment: var0
                _fun88804: for (var _fun88804_ip = 0;;) switch (_fun88804_ip) {
                    case 0:
                        var2 = _closure2_slot0;
                        var1 = var2.get;
                        var0 = arg0;
                        var1 = var1.bind(var2)(var0);
                        var3 = null;
                        var0 = var1;
                        if (!(var3 != var1)) {
                            _fun88804_ip = 66;
                            continue _fun88804
                        }
                    case 29:
                        var2 = var1.variantGroupStoreListingId;
                        var0 = var1;
                        if (!(var3 != var2)) {
                            _fun88804_ip = 66;
                            continue _fun88804
                        }
                    case 42:
                        var3 = _closure1_slot4;
                        var2 = var3.getProductByStoreListingId;
                        var1 = var1.variantGroupStoreListingId;
                        var0 = var2.bind(var3)(var1);
                    case 66:
                        return var0;
                }
            };
            var4 = var4.bind(var5)(var1);
            var1 = var4.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = null;
                var0 = arg0;
                var0 = var1 != var0;
                return var0;
            };
            var1 = var1.bind(var4)(var0);
            var0 = 'storeListingId';
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4561, 566, 11455, 2]);