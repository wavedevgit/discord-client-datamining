// modules/wishlists/native/WishlistItemCardShared.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot0 = var6;
    var3 = var3.View;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 170,
        'height': 170,
        'borderWidth': 1,
        'borderRadius': null,
        'borderColor': null,
        'overflow': 'hidden'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.borderColor = var9;
    var3.card = var8;
    var8 = {
        'width': '100%',
        'height': '100%',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.cardContent = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/wishlists/native/WishlistItemCardShared.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var5 = var0.onPress;
        var6 = var0.renderPreview;
        var9 = var0.backgroundColor;
        var0 = _closure1_slot3;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot2;
        var1 = _closure1_slot0;
        var0 = {};
        var8 = var7.card;
        var0.style = var8;
        var0.onPress = var5;
        var5 = _closure1_slot1;
        var4 = {};
        var8 = var7.cardContent;
        var7 = new Array(2);
        var7[0] = var8;
        var8 = {};
        var8.backgroundColor = var9;
        var7[1] = var8;
        var4.style = var7;
        var6 = var6.bind(var3)();
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 2]);