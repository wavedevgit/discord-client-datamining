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
        _fun87395: for (var _fun87395_ip = 0;;) switch (_fun87395_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var _closure2_slot0 = var3;
                var2 = var3.getPurchase;
                var1 = var8.skuId;
                var3 = var2.bind(var3)(var1);
                var6 = null;
                var1 = var6 != var3;
                var4 = var6 == var3;
                var7 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun87395_ip = 52;
                    continue _fun87395
                }
            case 46:
                var2 = var3.expiresAt;
            case 52:
                var3 = var6 != var2;
                var4 = null;
                if (!var3) {
                    _fun87395_ip = 64;
                    continue _fun87395
                }
            case 61:
                var4 = var2;
            case 64:
                var5 = var6 != var4;
                var2 = var8.items;
                if (!(var6 == var2)) {
                    _fun87395_ip = 81;
                    continue _fun87395
                }
            case 77:
                var2 = new Array(0);
            case 81:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = 1;
                var3 = var11[var3];
                var10 = var10.bind(var7)(var3);
                var11 = var2.map;
                var3 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.getPurchase;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var11.bind(var2)(var3);
                var3 = var10.bind(var7)(var3);
                var11 = var6 == var8;
                var10 = undefined;
                if (var11) {
                    _fun87395_ip = 140;
                    continue _fun87395
                }
            case 135:
                var10 = var8.type;
            case 140:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = 2;
                var11 = var11[var12];
                var11 = var13.bind(var7)(var11);
                var11 = var11.CollectiblesItemType;
                var11 = var11.BUNDLE;
                if (!(var11 !== var10)) {
                    _fun87395_ip = 367;
                    continue _fun87395
                }
            case 179:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var9 = var11.bind(var7)(var9);
                var9 = var9.CollectiblesItemType;
                var9 = var9.VARIANTS_GROUP;
                if (!(var9 !== var10)) {
                    _fun87395_ip = 244;
                    continue _fun87395
                }
            case 212:
                var9 = {
                    'isPurchased': null,
                    'isPartiallyOwnedBundle': false,
                    'isPartiallyOwnedVariantsGroup': false
                };
                var9.isPurchased = var1;
                var9.isRented = var5;
                var9.rentalExpiresAt = var4;
                return var9;
            case 244:
                var12 = var8.variants;
                var10 = var6 == var12;
                var9 = undefined;
                if (var10) {
                    _fun87395_ip = 277;
                    continue _fun87395
                }
            case 259:
                var11 = var12.every;
                var10 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.getPurchase;
                    var0 = arg0;
                    var0 = var0.skuId;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var9 = var11.bind(var12)(var10);
            case 277:
                var10 = var8.variants;
                var8 = var6 == var10;
                var7 = undefined;
                if (var8) {
                    _fun87395_ip = 310;
                    continue _fun87395
                }
            case 292:
                var8 = var10.some;
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
                var7 = var8.bind(var10)(var0);
            case 310:
                if (!var7) {
                    _fun87395_ip = 316;
                    continue _fun87395
                }
            case 313:
                var7 = !var9;
            case 316:
                var0 = {};
                var8 = var6 != var9;
                if (!var8) {
                    _fun87395_ip = 328;
                    continue _fun87395
                }
            case 325:
                var8 = var9;
            case 328:
                var0.isPurchased = var8;
                var8 = false;
                var0.isPartiallyOwnedBundle = var8;
                var6 = var6 != var7;
                if (!var6) {
                    _fun87395_ip = 350;
                    continue _fun87395
                }
            case 347:
                var6 = var7;
            case 350:
                var0.isPartiallyOwnedVariantsGroup = var6;
                var0.isRented = var5;
                var0.rentalExpiresAt = var4;
                return var0;
            case 367:
                var0 = {
                    'isPurchased': null,
                    'isPartiallyOwnedBundle': null,
                    'isPartiallyOwnedVariantsGroup': false,
                    'isRented': false,
                    'rentalExpiresAt': null
                };
                if (var1) {
                    _fun87395_ip = 415;
                    continue _fun87395
                }
            case 384:
                var5 = var2.length;
                var4 = 0;
                var4 = var5 > var4;
                if (!var4) {
                    _fun87395_ip = 412;
                    continue _fun87395
                }
            case 398:
                var6 = var3.length;
                var5 = var2.length;
                var4 = var6 === var5;
            case 412:
                var1 = var4;
            case 415:
                var0.isPurchased = var1;
                var4 = var3.length;
                var1 = 0;
                var1 = var4 > var1;
                if (!var1) {
                    _fun87395_ip = 449;
                    continue _fun87395
                }
            case 435:
                var3 = var3.length;
                var2 = var2.length;
                var1 = var3 < var2;
            case 449:
                var0.isPartiallyOwnedBundle = var1;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [4612, 11288, 3484, 566, 2]);