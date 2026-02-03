// modules/nuf_channels/native/components/NUFTemplateV2.tsx
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': 16,
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.title = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 46,
        'paddingLeft': 18,
        'paddingRight': 18
    };
    var3.description = var8;
    var8 = {
        'alignSelf': 'stretch',
        'alignItems': 'center',
        'marginBottom': 32
    };
    var3.illustration = var8;
    var8 = {};
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xl;
    var8.borderRadius = var9;
    var9 = '100%';
    var8.width = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf_channels/native/components/NUFTemplateV2.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var16 = var0.title;
        var6 = var0.illustration;
        var13 = var0.description;
        var8 = var0.onCTAPress;
        var10 = var0.CTALabel;
        var0 = _closure1_slot6;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var9.container;
        var0.style = var4;
        var7 = _closure1_slot4;
        var4 = {};
        var11 = var9.illustration;
        var4.style = var11;
        var4.children = var6;
        var6 = var7.bind(var3)(var1, var4);
        var4 = new Array(4);
        var4[0] = var6;
        var12 = _closure1_slot0;
        var11 = _closure1_slot2;
        var6 = 5;
        var14 = var11[var6];
        var14 = var12.bind(var3)(var14);
        var15 = var14.Text;
        var14 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/bold'
        };
        var17 = var9.title;
        var14.style = var17;
        var14.children = var16;
        var14 = var7.bind(var3)(var15, var14);
        var4[1] = var14;
        var6 = var11[var6];
        var6 = var12.bind(var3)(var6);
        var12 = var6.Text;
        var6 = {};
        var14 = var9.description;
        var6.style = var14;
        var14 = 'text-md/medium';
        var6.variant = var14;
        var6.children = var13;
        var6 = var7.bind(var3)(var12, var6);
        var4[2] = var6;
        var6 = _closure1_slot1;
        var5 = 6;
        var5 = var11[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var5.text = var10;
        var9 = var9.button;
        var5.style = var9;
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