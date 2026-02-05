// modules/safety_common/native/URLCallout.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot3 = var6;
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'maxHeight': 300,
        'backgroundColor': null,
        'width': '100%'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var3.linkCalloutContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.padding = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.paddingVertical = var9;
    var9 = 'center';
    var8.textAlign = var9;
    var3.linkCalloutContainerText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_common/native/URLCallout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.url;
        var0 = _closure1_slot5;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var9 = _closure1_slot0;
        var11 = _closure1_slot1;
        var0 = 5;
        var0 = var11[var0];
        var1 = var9.bind(var3)(var0);
        var0 = var1.useUrlParts;
        var0 = var0.bind(var1)(var2);
        var15 = var0.protocol;
        var14 = var0.hostname;
        var10 = var0.theRestOfTheUrl;
        var2 = _closure1_slot4;
        var1 = _closure1_slot2;
        var0 = {};
        var5 = var7.linkCalloutContainer;
        var0.style = var5;
        var6 = _closure1_slot3;
        var8 = 6;
        var4 = var11[var8];
        var4 = var9.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {};
        var7 = var7.linkCalloutContainerText;
        var4.style = var7;
        var7 = 'text-md/normal';
        var4.variant = var7;
        var7 = var11[var8];
        var7 = var9.bind(var3)(var7);
        var12 = var7.Text;
        var7 = {
            'variant': 'text-md/normal',
            'color': 'text-muted'
        };
        var13 = new Array(2);
        var13[0] = var15;
        var15 = '//';
        var13[1] = var15;
        var7.children = var13;
        var12 = var6.bind(var3)(var12, var7);
        var7 = new Array(3);
        var7[0] = var12;
        var12 = var11[var8];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-md/semibold',
            'color': 'text-default'
        };
        var12.children = var14;
        var12 = var2.bind(var3)(var13, var12);
        var7[1] = var12;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'variant': 'text-md/normal',
            'color': 'text-muted'
        };
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.URLCallout = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 11384, 3941, 2]);