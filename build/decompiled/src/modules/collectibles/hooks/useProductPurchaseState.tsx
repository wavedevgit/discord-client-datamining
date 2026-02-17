// modules/collectibles/hooks/useProductPurchaseState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = function arg0, arg1() {
        _fun88024: for (var _fun88024_ip = 0;;) switch (_fun88024_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var3;
                var2 = var3.getPurchase;
                var1 = var6.skuId;
                var1 = var2.bind(var3)(var1);
                var4 = null;
                var1 = var4 != var1;
                var2 = var6.items;
                if (!(var4 == var2)) {
                    _fun88024_ip = 48;
                    continue _fun88024
                }
            case 44:
                var2 = new Array(0);
            case 48:
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 1;
                var3 = var5[var3];
                var5 = undefined;
                var8 = var8.bind(var5)(var3);
                var9 = var2.map;
                var3 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.getPurchase;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var9.bind(var2)(var3);
                var3 = var8.bind(var5)(var3);
                var9 = var4 == var6;
                var8 = undefined;
                if (var9) {
                    _fun88024_ip = 109;
                    continue _fun88024
                }
            case 104:
                var8 = var6.type;
            case 109:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = 2;
                var9 = var9[var10];
                var9 = var11.bind(var5)(var9);
                var9 = var9.CollectiblesItemType;
                var9 = var9.BUNDLE;
                if (!(var9 !== var8)) {
                    _fun88024_ip = 316;
                    continue _fun88024
                }
            case 148:
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var10];
                var7 = var9.bind(var5)(var7);
                var7 = var7.CollectiblesItemType;
                var7 = var7.VARIANTS_GROUP;
                if (!(var7 !== var8)) {
                    _fun88024_ip = 203;
                    continue _fun88024
                }
            case 181:
                var7 = {
                    'isPurchased': null,
                    'isPartiallyOwnedBundle': false,
                    'isPartiallyOwnedVariantsGroup': false
                };
                var7.isPurchased = var1;
                return var7;
            case 203:
                var10 = var6.variants;
                var8 = var4 == var10;
                var7 = undefined;
                if (var8) {
                    _fun88024_ip = 236;
                    continue _fun88024
                }
            case 218:
                var9 = var10.every;
                var8 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.getPurchase;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var7 = var9.bind(var10)(var8);
            case 236:
                var8 = var6.variants;
                var6 = var4 == var8;
                var5 = undefined;
                if (var6) {
                    _fun88024_ip = 269;
                    continue _fun88024
                }
            case 251:
                var6 = var8.some;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.getPurchase;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var5 = var6.bind(var8)(var0);
            case 269:
                if (!var5) {
                    _fun88024_ip = 275;
                    continue _fun88024
                }
            case 272:
                var5 = !var7;
            case 275:
                var0 = {};
                var6 = var4 != var7;
                if (!var6) {
                    _fun88024_ip = 287;
                    continue _fun88024
                }
            case 284:
                var6 = var7;
            case 287:
                var0.isPurchased = var6;
                var6 = false;
                var0.isPartiallyOwnedBundle = var6;
                var4 = var4 != var5;
                if (!var4) {
                    _fun88024_ip = 309;
                    continue _fun88024
                }
            case 306:
                var4 = var5;
            case 309:
                var0.isPartiallyOwnedVariantsGroup = var4;
                return var0;
            case 316:
                var0 = {};
                if (var1) {
                    _fun88024_ip = 352;
                    continue _fun88024
                }
            case 321:
                var5 = var2.length;
                var4 = 0;
                var4 = var5 > var4;
                if (!var4) {
                    _fun88024_ip = 349;
                    continue _fun88024
                }
            case 335:
                var6 = var3.length;
                var5 = var2.length;
                var4 = var6 === var5;
            case 349:
                var1 = var4;
            case 352:
                var0.isPurchased = var1;
                var4 = var3.length;
                var1 = 0;
                var1 = var4 > var1;
                if (!var1) {
                    _fun88024_ip = 385;
                    continue _fun88024
                }
            case 371:
                var3 = var3.length;
                var2 = var2.length;
                var1 = var3 < var2;
            case 385:
                var0.isPartiallyOwnedBundle = var1;
                var1 = false;
                var0.isPartiallyOwnedVariantsGroup = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useProductPurchaseState.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getProductPurchaseState = var3;
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useProductPurchaseState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4621, 11359, 1644, 566, 2]);