// modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx
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
    var8.padding = var9;
    var3.content = var8;
    var8 = {
        'borderRadius': null,
        'height': 80,
        'width': 80,
        'marginVertical': 16
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.avatar = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.nameWrapper = var8;
    var8 = {};
    var9 = 8;
    var8.marginLeft = var9;
    var3.headerText = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.description = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot6;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var0 = 5;
        var0 = var14[var0];
        var0 = var13.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var12 = true;
        var0.startExpanded = var12;
        var6 = _closure1_slot5;
        var5 = _closure1_slot3;
        var4 = {};
        var8 = var11.content;
        var4.style = var8;
        var16 = _closure1_slot1;
        var7 = 6;
        var7 = var14[var7];
        var8 = var16.bind(var3)(var7);
        var7 = {};
        var9 = var11.avatar;
        var7.style = var9;
        var9 = 7;
        var9 = var14[var9];
        var10 = var13.bind(var3)(var9);
        var9 = var10.getPublicSystemMessageAvatar;
        var9 = var9.bind(var10)();
        var7.source = var9;
        var8 = var2.bind(var3)(var8, var7);
        var7 = new Array(4);
        var7[0] = var8;
        var9 = {};
        var8 = var11.nameWrapper;
        var9.style = var8;
        var8 = 8;
        var8 = var14[var8];
        var10 = var16.bind(var3)(var8);
        var8 = {};
        var15 = 9;
        var15 = var14[var15];
        var15 = var16.bind(var3)(var15);
        var8.source = var15;
        var8.disableColor = var12;
        var8 = var2.bind(var3)(var10, var8);
        var12 = new Array(2);
        var12[0] = var8;
        var8 = 10;
        var10 = var14[var8];
        var10 = var13.bind(var3)(var10);
        var16 = var10.Text;
        var15 = {
            'style': null,
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var10 = var11.headerText;
        var15.style = var10;
        var10 = 11;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var19 = var17.intl;
        var18 = var19.string;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.xfAlNx;
        var17 = var18.bind(var19)(var17);
        var15.children = var17;
        var15 = var2.bind(var3)(var16, var15);
        var12[1] = var15;
        var9.children = var12;
        var9 = var6.bind(var3)(var5, var9);
        var7[1] = var9;
        var9 = var14[var8];
        var9 = var13.bind(var3)(var9);
        var12 = var9.Text;
        var9 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var15 = var11.description;
        var9.style = var15;
        var15 = var14[var10];
        var15 = var13.bind(var3)(var15);
        var17 = var15.intl;
        var16 = var17.string;
        var15 = var14[var10];
        var15 = var13.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.BUZ0sl;
        var15 = var16.bind(var17)(var15);
        var9.children = var15;
        var9 = var2.bind(var3)(var12, var9);
        var7[2] = var9;
        var8 = var14[var8];
        var8 = var13.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var11 = var11.description;
        var8.style = var11;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.w5beJH;
        var10 = var11.bind(var12)(var10);
        var8.children = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[3] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4933, 4704, 6771, 4086, 9948, 3941, 1234, 2]);