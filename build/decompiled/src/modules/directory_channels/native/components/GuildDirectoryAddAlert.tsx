// modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx
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
    var8 = {};
    var9 = 16;
    var8.marginBottom = var9;
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.guildIcon = var8;
    var9 = 'center';
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.description = var8;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var5 = var0.onClose;
        var13 = var0.guild;
        var14 = var0.directoryGuildName;
        var0 = _closure1_slot6;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var8 = _closure1_slot1;
        var15 = _closure1_slot2;
        var0 = 5;
        var0 = var15[var0];
        var1 = var8.bind(var3)(var0);
        var0 = {};
        var11 = _closure1_slot0;
        var10 = 6;
        var6 = var15[var10];
        var6 = var11.bind(var3)(var6);
        var9 = var6.intl;
        var7 = var9.string;
        var6 = var15[var10];
        var6 = var11.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["X0WK+6"];
        var6 = var7.bind(var9)(var6);
        var0.confirmText = var6;
        var0.onConfirm = var5;
        var6 = _closure1_slot5;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var12.container;
        var4.style = var7;
        var9 = 7;
        var7 = var15[var9];
        var8 = var8.bind(var3)(var7);
        var7 = {};
        var16 = var12.guildIcon;
        var7.style = var16;
        var7.guild = var13;
        var9 = var15[var9];
        var9 = var11.bind(var3)(var9);
        var9 = var9.GuildIconSizes;
        var9 = var9.XLARGE;
        var7.size = var9;
        var8 = var2.bind(var3)(var8, var7);
        var7 = new Array(3);
        var7[0] = var8;
        var8 = 8;
        var9 = var15[var8];
        var9 = var11.bind(var3)(var9);
        var13 = var9.Text;
        var9 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'text-lg/bold',
            'color': 'mobile-text-heading-primary'
        };
        var16 = var12.title;
        var9.style = var16;
        var16 = var15[var10];
        var16 = var11.bind(var3)(var16);
        var18 = var16.intl;
        var17 = var18.string;
        var16 = var15[var10];
        var16 = var11.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.CueiPY;
        var16 = var17.bind(var18)(var16);
        var9.children = var16;
        var9 = var2.bind(var3)(var13, var9);
        var7[1] = var9;
        var8 = var15[var8];
        var8 = var11.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var12 = var12.description;
        var8.style = var12;
        var12 = var15[var10];
        var12 = var11.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.format;
        var10 = var15[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.t;
        var11 = var10.R7Pqn5;
        var10 = {};
        var10.guildName = var14;
        var10 = var12.bind(var13)(var11, var10);
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3938, 1234, 7464, 3942, 2]);