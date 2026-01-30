// modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HELP_CENTER_LINK;
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
        'marginTop': 32,
        'marginHorizontal': 30
    };
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'backgroundColor': null,
        'justifyContent': 'center',
        'borderRadius': null,
        'marginBottom': 12
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.aboutContainer = var8;
    var8 = {};
    var9 = 16;
    var8.margin = var9;
    var3.warningIcon = var8;
    var8 = {
        'justifyContent': 'center',
        'flex': 1,
        'marginRight': 30
    };
    var3.aboutTextContainer = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 24
    };
    var3.helpdeskText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PremiumGroupEducationActionSheet, environment: var1
        var0 = arg0;
        var16 = var0.aboutText;
        var0 = _closure1_slot7;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var11 = _closure1_slot0;
        var15 = _closure1_slot2;
        var0 = 5;
        var0 = var15[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var6 = _closure1_slot6;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var10.container;
        var4.style = var7;
        var7 = {};
        var8 = var10.aboutContainer;
        var7.style = var8;
        var8 = 6;
        var8 = var15[var8];
        var8 = var11.bind(var3)(var8);
        var9 = var8.CircleErrorIcon;
        var8 = {};
        var12 = 'lg';
        var8.size = var12;
        var12 = var10.warningIcon;
        var8.style = var12;
        var9 = var2.bind(var3)(var9, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var9 = {};
        var12 = var10.aboutTextContainer;
        var9.style = var12;
        var12 = 7;
        var12 = var15[var12];
        var12 = var11.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-sm/medium',
            'color': 'always-white'
        };
        var12.children = var16;
        var12 = var2.bind(var3)(var13, var12);
        var9.children = var12;
        var9 = var2.bind(var3)(var5, var9);
        var8[1] = var9;
        var7.children = var8;
        var8 = var6.bind(var3)(var5, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var8 = 8;
        var8 = var15[var8];
        var8 = var11.bind(var3)(var8);
        var9 = var8.TextWithIOSLinkWorkaround;
        var8 = {
            'variant': 'text-sm/medium',
            'color': 'always-white'
        };
        var10 = var10.helpdeskText;
        var8.style = var10;
        var10 = 9;
        var10 = var15[var10];
        var10 = var11.bind(var3)(var10);
        var13 = var10.intl;
        var12 = var13.format;
        var11 = _closure1_slot1;
        var10 = 10;
        var10 = var15[var10];
        var10 = var11.bind(var3)(var10);
        var11 = var10.ah1Ecm;
        var10 = {};
        var14 = _closure1_slot4;
        var10.helpCenterLink = var14;
        var10 = var12.bind(var13)(var11, var10);
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3083, 33, 1297, 671, 4893, 5352, 3901, 5293, 1234, 2395, 2]);