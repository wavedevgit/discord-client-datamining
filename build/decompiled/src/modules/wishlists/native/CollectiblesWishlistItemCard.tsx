// modules/wishlists/native/CollectiblesWishlistItemCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/wishlists/native/CollectiblesWishlistItemCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = arg0;
        var5 = var3.item;
        var _closure2_slot0 = var5;
        var9 = var3.onPress;
        var7 = var3.backgroundColor;
        var _closure2_slot1 = var7;
        var6 = var3.width;
        var2 = {
            'item': 0,
            'onPress': 0,
            'backgroundColor': 0,
            'width': 0
        };
        var12 = null;
        var13 = var2;
        var0 = silentSetPrototypeOf(var13, var12);
        var13 = {};
        var12 = var3;
        var11 = var2;
        var4 = copyDataProperties(var13, var12, var11);
        var8 = _closure1_slot2;
        var3 = var8.useCallback;
        var10 = var5.sku;
        var2 = new Array(2);
        var2[0] = var10;
        var2[1] = var7;
        var1 = function() { // Environment: var1
            _fun103267: for (var _fun103267_ip = 0;;) switch (_fun103267_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var1 = var0.sku;
                    var0 = null;
                    var1 = var0 == var1;
                    if (var1) {
                        _fun103267_ip = 82;
                        continue _fun103267
                    }
                case 22:
                    var4 = _closure1_slot3;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 2;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.sku;
                    var1.sku = var6;
                    var5 = _closure2_slot1;
                    var1.backgroundColor = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 82:
                    return var0;
            }
        };
        var8 = var3.bind(var8)(var1, var2);
        var3 = _closure1_slot3;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.onPress = var9;
        var0.renderPreview = var8;
        var0.backgroundColor = var7;
        var0.width = var6;
        var5 = var5.isOwned;
        var0.isOwned = var5;
        var13 = var0;
        var12 = var4;
        var4 = copyDataProperties(var13, var12);
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 13505, 13506, 2]);