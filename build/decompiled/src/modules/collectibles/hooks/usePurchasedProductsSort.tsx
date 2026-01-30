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
    var3.PARTIAL_OWNED_VARIANTS_GROUP = var7;
    var6 = 'PARTIAL_OWNED_VARIANTS_GROUP';
    var3[var7] = var6;
    var7 = 2;
    var3.PARTIAL_OWNED_BUNDLE = var7;
    var6 = 'PARTIAL_OWNED_BUNDLE';
    var3[var7] = var6;
    var7 = 3;
    var3.PURCHASED = var7;
    var6 = 'PURCHASED';
    var3[var7] = var6;
    var _closure1_slot4 = var3;
    var3 = function(arg0, arg1) { // Original name: productPurchaseStatus, environment: var1
        _fun88761: for (var _fun88761_ip = 0;;) switch (_fun88761_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var6 = var1.type;
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 2;
                var4 = var2[var8];
                var2 = undefined;
                var4 = var7.bind(var2)(var4);
                var4 = var4.CollectiblesItemType;
                var4 = var4.BUNDLE;
                if (!(var6 === var4)) {
                    _fun88761_ip = 88;
                    continue _fun88761
                }
            case 58:
                var7 = var1.items;
                var6 = var7.some;
                var4 = function(arg0) { // Environment: var5
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var6.bind(var7)(var4);
                if (var4) {
                    _fun88761_ip = 219;
                    continue _fun88761
                }
            case 88:
                var6 = var1.type;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var4 = var7.bind(var2)(var4);
                var4 = var4.CollectiblesItemType;
                var4 = var4.VARIANTS_GROUP;
                if (!(var6 === var4)) {
                    _fun88761_ip = 168;
                    continue _fun88761
                }
            case 126:
                var7 = var1.variants;
                var4 = null;
                var6 = var4 == var7;
                var2 = undefined;
                if (var6) {
                    _fun88761_ip = 161;
                    continue _fun88761
                }
            case 143:
                var6 = var7.some;
                var5 = function(arg0) { // Environment: var5
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var6.bind(var7)(var5);
            case 161:
                if (!(var4 != var2)) {
                    _fun88761_ip = 168;
                    continue _fun88761
                }
            case 165:
                if (var2) {
                    _fun88761_ip = 207;
                    continue _fun88761
                }
            case 168:
                var2 = var3.includes;
                var1 = var1.skuId;
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot4;
                if (var1) {
                    _fun88761_ip = 199;
                    continue _fun88761
                }
            case 191:
                var1 = var2.NOT_PURCHASED;
                _fun88761_ip = 205;
                continue _fun88761;
            case 199:
                var1 = var2.PURCHASED;
            case 205:
                return var1;
            case 207:
                var1 = _closure1_slot4;
                var1 = var1.PARTIAL_OWNED_VARIANTS_GROUP;
                return var1;
            case 219:
                var0 = _closure1_slot4;
                var0 = var0.PARTIAL_OWNED_BUNDLE;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = 4;
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
        var1 = 3;
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
                _fun88767: for (var _fun88767_ip = 0;;) switch (_fun88767_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0[Symbol.iterator];
                        var0 = var1().next;
                        var3 = var0().value;
                        var2 = var1;
                        var0 = undefined;
                        var2 = var2 === var0;
                        if (var2) {
                            _fun88767_ip = 25;
                            continue _fun88767
                        }
                    case 22:
                        var0 = var3;
                    case 25:
                        if (var2) {
                            _fun88767_ip = 31;
                            continue _fun88767
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4579, 3452, 632, 2]);