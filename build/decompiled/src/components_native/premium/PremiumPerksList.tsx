// components_native/premium/PremiumPerksList.tsx
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
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 16
    };
    var3.perkInfoContainer = var8;
    var9 = 4;
    var8 = {
        'flexDirection': 'column',
        'gap': 4,
        'maxWidth': 279
    };
    var3.perkInfoTextContainer = var8;
    var8 = {
        'width': '100%',
        'paddingVertical': 24,
        'flexDirection': 'column',
        'gap': 24
    };
    var3.perkListContainer = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'width': 40,
        'height': 40,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.perkIconContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/PremiumPerksList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.perks;
        var1 = _closure1_slot5;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var _closure2_slot0 = var5;
        var2 = _closure1_slot3;
        var1 = _closure1_slot2;
        var0 = {};
        var5 = var5.perkListContainer;
        var0.style = var5;
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            var10 = arg0;
            var8 = var10.IconComponent;
            var4 = _closure1_slot4;
            var3 = _closure1_slot2;
            var2 = {};
            var7 = _closure2_slot0;
            var0 = var7.perkInfoContainer;
            var2.style = var0;
            var9 = _closure1_slot3;
            var0 = {};
            var1 = var7.perkIconContainer;
            var0.style = var1;
            var5 = {};
            var1 = 'md';
            var5.size = var1;
            var1 = undefined;
            var5 = var9.bind(var1)(var8, var5);
            var0.children = var5;
            var5 = var9.bind(var1)(var3, var0);
            var0 = new Array(2);
            var0[0] = var5;
            var5 = {};
            var7 = var7.perkInfoTextContainer;
            var5.style = var7;
            var8 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 5;
            var6 = var11[var7];
            var6 = var8.bind(var1)(var6);
            var12 = var6.Text;
            var6 = {
                'variant': 'text-md/bold',
                'color': 'text-strong'
            };
            var13 = var10.label;
            var6.children = var13;
            var12 = var9.bind(var1)(var12, var6);
            var6 = new Array(2);
            var6[0] = var12;
            var7 = var11[var7];
            var7 = var8.bind(var1)(var7);
            var8 = var7.Text;
            var7 = {
                'variant': 'text-md/medium',
                'color': 'text-default'
            };
            var10 = var10.description;
            var7.children = var10;
            var7 = var9.bind(var1)(var8, var7);
            var6[1] = var7;
            var5.children = var6;
            var5 = var4.bind(var1)(var3, var5);
            var0[1] = var5;
            var2.children = var0;
            var0 = arg1;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3942, 2]);