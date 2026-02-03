// modules/nuf_channels/native/components/NUFTemplate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': 16,
        'alignItems': 'center'
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.container = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.title = var8;
    var9 = 24;
    var8 = {
        'textAlign': 'center',
        'lineHeight': 18,
        'marginBottom': 24
    };
    var3.description = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.image = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf_channels/native/components/NUFTemplate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var16 = var0.title;
        var14 = var0.description;
        var13 = var0.imageSrc;
        var8 = var0.onCTAPress;
        var12 = var0.CTALabel;
        var0 = _closure1_slot7;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var10.container;
        var0.style = var4;
        var7 = _closure1_slot5;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var6 = 5;
        var4 = var11[var6];
        var4 = var9.bind(var3)(var4);
        var15 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var17 = var10.title;
        var4.style = var17;
        var4.children = var16;
        var15 = var7.bind(var3)(var15, var4);
        var4 = new Array(4);
        var4[0] = var15;
        var6 = var11[var6];
        var6 = var9.bind(var3)(var6);
        var9 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var15 = var10.description;
        var6.style = var15;
        var6.children = var14;
        var6 = var7.bind(var3)(var9, var6);
        var4[1] = var6;
        var9 = _closure1_slot4;
        var6 = {};
        var6.source = var13;
        var10 = var10.image;
        var6.style = var10;
        var6 = var7.bind(var3)(var9, var6);
        var4[2] = var6;
        var10 = _closure1_slot1;
        var9 = 6;
        var5 = var11[var9];
        var6 = var10.bind(var3)(var5);
        var5 = {};
        var5.text = var12;
        var12 = var11[var9];
        var12 = var10.bind(var3)(var12);
        var12 = var12.Sizes;
        var12 = var12.MEDIUM;
        var5.size = var12;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.Colors;
        var9 = var9.BRAND;
        var5.color = var9;
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3941, 4873, 2]);