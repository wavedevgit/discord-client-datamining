// modules/notification_center/native/ForYouUnreadClearedState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var9 = 2;
    var3 = var5[var9];
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
    var10 = 4;
    var8 = {
        'marginBottom': 4,
        'marginHorizontal': 24,
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var3.container = var8;
    var8 = {
        'width': 48,
        'height': 48,
        'backgroundColor': null,
        'opacity': 0.16,
        'borderRadius': null,
        'marginRight': 16,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_400;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var8.borderRadius = var12;
    var3.imageContainer = var8;
    var8 = {
        'margin': 12,
        'position': 'absolute'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.GREEN_400;
    var8.color = var10;
    var3.icon = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.headerText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/native/ForYouUnreadClearedState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        var0 = _closure1_slot6;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var10.container;
        var0.style = var4;
        var9 = _closure1_slot4;
        var4 = {};
        var5 = var10.imageContainer;
        var4.style = var5;
        var5 = var9.bind(var3)(var1, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var11 = _closure1_slot1;
        var14 = _closure1_slot2;
        var5 = 5;
        var5 = var14[var5];
        var7 = var11.bind(var3)(var5);
        var5 = {};
        var8 = 6;
        var8 = var14[var8];
        var8 = var11.bind(var3)(var8);
        var5.source = var8;
        var8 = var10.icon;
        var5.style = var8;
        var8 = var10.icon;
        var8 = var8.color;
        var5.color = var8;
        var5 = var9.bind(var3)(var7, var5);
        var4[1] = var5;
        var5 = {};
        var13 = _closure1_slot0;
        var7 = 7;
        var6 = var14[var7];
        var6 = var13.bind(var3)(var6);
        var8 = var6.Text;
        var6 = {
            'color': 'mobile-text-heading-primary',
            'variant': 'text-md/semibold'
        };
        var10 = var10.headerText;
        var6.style = var10;
        var10 = 8;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var15 = var11.intl;
        var12 = var15.string;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.DonStq;
        var11 = var12.bind(var15)(var11);
        var6.children = var11;
        var8 = var9.bind(var3)(var8, var6);
        var6 = new Array(2);
        var6[0] = var8;
        var7 = var14[var7];
        var7 = var13.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {
            'color': 'text-default',
            'variant': 'text-md/medium'
        };
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.jXFsai;
        var10 = var11.bind(var12)(var10);
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var6[1] = var7;
        var5.children = var6;
        var5 = var2.bind(var3)(var1, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ForYouUnreadClearedState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4045, 7474, 3901, 1234, 2]);