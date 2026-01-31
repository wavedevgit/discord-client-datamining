// modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx
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
        'alignSelf': 'stretch',
        'marginHorizontal': 16,
        'marginBottom': 16
    };
    var3.container = var8;
    var8 = {};
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var9;
    var3.borderColor = var8;
    var9 = 8;
    var8 = {
        'lineHeight': 16,
        'marginBottom': 8
    };
    var3.title = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'flex-start',
        'minHeight': 40,
        'borderRadius': null,
        'borderWidth': 1,
        'padding': 12
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderRadius = var10;
    var3.guildContainer = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.guildInfo = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var10 = var0.guild;
        var0 = _closure1_slot6;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var8 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 5;
        var0 = var12[var0];
        var4 = var8.bind(var3)(var0);
        var2 = var4.hexWithOpacity;
        var0 = var11.borderColor;
        var1 = var0.color;
        var0 = 0.08;
        var15 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var11.container;
        var0.style = var4;
        var9 = _closure1_slot4;
        var7 = 6;
        var4 = var12[var7];
        var4 = var8.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'text-xs/bold'
        };
        var13 = var11.title;
        var4.style = var13;
        var13 = 7;
        var14 = var12[var13];
        var14 = var8.bind(var3)(var14);
        var16 = var14.intl;
        var14 = var16.string;
        var13 = var12[var13];
        var13 = var8.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["0ox7Hq"];
        var14 = var14.bind(var16)(var13);
        var13 = var14.toUpperCase;
        var13 = var13.bind(var14)();
        var4.children = var13;
        var5 = var9.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var14 = var11.guildContainer;
        var13 = new Array(2);
        var13[0] = var14;
        var14 = {};
        var14.borderColor = var15;
        var13[1] = var14;
        var5.style = var13;
        var13 = _closure1_slot1;
        var14 = 8;
        var6 = var12[var14];
        var13 = var13.bind(var3)(var6);
        var6 = {};
        var14 = var12[var14];
        var14 = var8.bind(var3)(var14);
        var14 = var14.GuildIconSizes;
        var14 = var14.LARGE;
        var6.size = var14;
        var6.guild = var10;
        var13 = var9.bind(var3)(var13, var6);
        var6 = new Array(2);
        var6[0] = var13;
        var7 = var12[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var11 = var11.guildInfo;
        var7.style = var11;
        var10 = var10.name;
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var6[1] = var7;
        var5.children = var6;
        var5 = var2.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3199, 3900, 1234, 7355, 2]);