// modules/collectibles/hooks/usePurchasedProductsSort.tsx
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
    var8 = 0;
    var3 = var5[var8];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var7 = 1;
    var6 = var5[var7];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = {};
    var3.NOT_PURCHASED = var8;
    var6 = 'NOT_PURCHASED';
    var3[var8] = var6;
    var3.PARTIAL_OWNED_BUNDLE = var7;
    var6 = 'PARTIAL_OWNED_BUNDLE';
    var3[var7] = var6;
    var7 = 2;
    var3.PURCHASED = var7;
    var6 = 'PURCHASED';
    var3[var7] = var6;
    var _closure1_slot4 = var3;
    var3 = function arg0, arg1() {
        _fun89057: for (var _fun89057_ip = 0;;) switch (_fun89057_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var5;
                var4 = var3.type;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.BUNDLE;
                if (!(var4 === var1)) {
                    _fun89057_ip = 87;
                    continue _fun89057
                }
            case 58:
                var7 = var3.items;
                var4 = var7.some;
                var1 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var4.bind(var7)(var1);
                if (var1) {
                    _fun89057_ip = 210;
                    continue _fun89057
                }
            case 87:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 3;
                var1 = var7[var1];
                var4 = var4.bind(var6)(var1);
                var1 = var4.getIsVariantProduct;
                var1 = var1.bind(var4)(var3);
                if (var1) {
                    _fun89057_ip = 160;
                    continue _fun89057
                }
            case 121:
                var4 = var5.includes;
                var1 = var3.skuId;
                var1 = var4.bind(var5)(var1);
                var4 = _closure1_slot4;
                if (var1) {
                    _fun89057_ip = 152;
                    continue _fun89057
                }
            case 144:
                var1 = var4.NOT_PURCHASED;
                _fun89057_ip = 158;
                continue _fun89057;
            case 152:
                var1 = var4.PURCHASED;
            case 158:
                _fun89057_ip = 208;
                continue _fun89057;
            case 160:
                var4 = var3.variants;
                var3 = var4.every;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot4;
                if (var2) {
                    _fun89057_ip = 199;
                    continue _fun89057
                }
            case 191:
                var2 = var3.NOT_PURCHASED;
                _fun89057_ip = 205;
                continue _fun89057;
            case 199:
                var2 = var3.PURCHASED;
            case 205:
                var1 = var2;
            case 208:
                return var1;
            case 210:
                var0 = _closure1_slot4;
                var0 = var0.PARTIAL_OWNED_BUNDLE;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/usePurchasedProductsSort.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 4;
        var1 = var3[var1];
        var3 = undefined;
        var7 = var4.bind(var3)(var1);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot3;
            var0 = var0.purchases;
            return var0;
        };
        var1 = var6.bind(var7)(var4, var1);
        var _closure2_slot1 = var1;
        var2 = _closure1_slot2;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() { // Environment: var0
            var4 = _closure2_slot1;
            var2 = new Array(0);
            var3 = 0;
            var5 = var2;
            var0 = arraySpread(var5, var4, var3);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun89063: for (var _fun89063_ip = 0;;) switch (_fun89063_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0[Symbol.iterator];
                        var0 = var1().next;
                        var3 = var0().value;
                        var2 = var1;
                        var0 = undefined;
                        var2 = var2 === var0;
                        if (var2) {
                            _fun89063_ip = 25;
                            continue _fun89063
                        }
                    case 22:
                        var0 = var3;
                    case 25:
                        if (var2) {
                            _fun89063_ip = 31;
                            continue _fun89063
                        }
                    case 28:
                        var1.return();
                    case 31:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var2.bind(var3)(var1, var4);
        var _closure2_slot2 = var4;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure2_slot0;
            var2 = new Array(0);
            var3 = 0;
            var5 = var2;
            var0 = arraySpread(var5, var4, var3);
            var1 = var2.sort;
            var0 = function(arg0, arg1) { // Environment: var0
                var4 = _closure1_slot5;
                var3 = _closure2_slot2;
                var2 = undefined;
                var0 = arg0;
                var1 = var4.bind(var2)(var0, var3);
                var0 = arg1;
                var0 = var4.bind(var2)(var0, var3);
                var0 = var1 - var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.usePurchasedProductsSort = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4619, 1644, 4617, 632, 2]);