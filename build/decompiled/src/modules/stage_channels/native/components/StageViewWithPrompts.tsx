// modules/stage_channels/native/components/StageViewWithPrompts.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ThemeTypes;
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot5 = var4;
    var1 = var1.jsxs;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {
        'marginTop': 48,
        'padding': 16,
        'alignItems': 'center'
    };
    var1.container = var8;
    var8 = {
        'marginTop': 48,
        'marginBottom': 16
    };
    var1.sparkle = var8;
    var8 = {
        'marginTop': 16,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var1.title = var8;
    var8 = {
        'fontSize': 14,
        'textAlign': 'center'
    };
    var1.body = var8;
    var8 = {
        'marginTop': 24,
        'display': 'flex',
        'flexDirection': 'column',
        'width': '100%'
    };
    var1.prompts = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot7 = var1;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/StageViewWithPrompts.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var14 = var0.title;
        var10 = var0.body;
        var7 = var0.children;
        var0 = _closure1_slot7;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var8.container;
        var0.style = var4;
        var6 = _closure1_slot5;
        var9 = _closure1_slot1;
        var11 = _closure1_slot2;
        var4 = 5;
        var4 = var11[var4];
        var9 = var9.bind(var3)(var4);
        var4 = {};
        var12 = var8.sparkle;
        var4.style = var12;
        var12 = _closure1_slot4;
        var12 = var12.DARK;
        var4.theme = var12;
        var9 = var6.bind(var3)(var9, var4);
        var4 = new Array(4);
        var4[0] = var9;
        var9 = _closure1_slot0;
        var5 = 6;
        var12 = var11[var5];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'always-white'
        };
        var15 = var8.title;
        var12.style = var15;
        var12.children = var14;
        var12 = var6.bind(var3)(var13, var12);
        var4[1] = var12;
        var5 = var11[var5];
        var5 = var9.bind(var3)(var5);
        var9 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'always-white'
        };
        var11 = var8.body;
        var5.style = var11;
        var5.children = var10;
        var5 = var6.bind(var3)(var9, var5);
        var4[2] = var5;
        var5 = {};
        var8 = var8.prompts;
        var5.style = var8;
        var5.children = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.useStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 483, 33, 1297, 5922, 3932, 2]);