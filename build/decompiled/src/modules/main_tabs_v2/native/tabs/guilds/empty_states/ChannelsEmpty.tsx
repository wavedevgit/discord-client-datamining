// modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useYouBarTotalHeight;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var3 = {
        'flex': 1,
        'paddingTop': 12
    };
    var6.wrapper = var3;
    var14 = 16;
    var3 = {
        'flex': 0,
        'marginHorizontal': 16
    };
    var6.rowButton = var3;
    var13 = 'center';
    var3 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'paddingHorizontal': 48
    };
    var6.content = var3;
    var10 = {};
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TextStyleSheet;
    var16 = var3["heading-md/bold"];
    var17 = var10;
    var3 = copyDataProperties(var17, var16);
    var3 = 18;
    var11 = 'fontSize';
    var10[var11] = var3;
    var11 = 'marginTop';
    var10[var11] = var14;
    var11 = 8;
    var14 = 'marginBottom';
    var10[var14] = var11;
    var6.headerText = var10;
    var10 = {};
    var10.textAlign = var13;
    var6.text = var10;
    var10 = {
        'borderRadius': null,
        'height': 44,
        'paddingHorizontal': 20,
        'marginTop': 24
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xl;
    var10.borderRadius = var11;
    var6.button = var10;
    var10 = {
        'marginHorizontal': 12,
        'marginBottom': 12
    };
    var6.personalizeButtonWrapper = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot11 = var6;
    var6 = var7.memo;
    var1 = function arg0() {
        _fun102811: for (var _fun102811_ip = 0;;) switch (_fun102811_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.guild;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot11;
                var3 = undefined;
                var21 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var7 = var4.bind(var3)(var2);
                var6 = var7.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var4 = new Array(1);
                var4[0] = var1;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var4 = _closure1_slot6;
                    var5 = var4.can;
                    var1 = _closure1_slot8;
                    var2 = var1.MANAGE_GUILD;
                    var3 = _closure2_slot0;
                    var2 = var5.bind(var4)(var2, var3);
                    var0.canCustomizeGuild = var2;
                    var2 = var4.can;
                    var1 = var1.MANAGE_CHANNELS;
                    var1 = var2.bind(var4)(var1, var3);
                    var0.canCreateChannel = var1;
                    return var0;
                };
                var2 = var6.bind(var7)(var5, var2, var4);
                var5 = var2.canCustomizeGuild;
                var9 = var2.canCreateChannel;
                var4 = _closure1_slot3;
                var7 = var4.useCallback;
                var2 = var1.id;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = var7.bind(var4)(var2, var6);
                var2 = var4.useCallback;
                var6 = var1.id;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.open;
                    var1 = _closure2_slot0;
                    var7 = var1.id;
                    var9 = var4;
                    var8 = null;
                    var6 = null;
                    var5 = null;
                    var1 = var9[var3](var8, var7, var6, var5, var4);
                    return var0;
                };
                var15 = var2.bind(var4)(var0, var1);
                var0 = _closure1_slot7;
                var11 = 16;
                var7 = var0.bind(var3)(var11);
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var21.wrapper;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = {};
                var6.paddingBottom = var7;
                var4[1] = var6;
                var0.style = var4;
                if (!var5) {
                    _fun102811_ip = 392;
                    continue _fun102811
                }
            case 222:
                var7 = _closure1_slot9;
                var6 = _closure1_slot4;
                var4 = {};
                var8 = var21.personalizeButtonWrapper;
                var4.style = var8;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var8 = 12;
                var8 = var19[var8];
                var8 = var18.bind(var3)(var8);
                var10 = var8.RowButton;
                var8 = {};
                var20 = _closure1_slot1;
                var13 = 13;
                var13 = var19[var13];
                var14 = var20.bind(var3)(var13);
                var13 = {};
                var16 = 14;
                var16 = var19[var16];
                var16 = var20.bind(var3)(var16);
                var13.source = var16;
                var16 = true;
                var13.disableColor = var16;
                var13 = var7.bind(var3)(var14, var13);
                var8.icon = var13;
                var13 = 15;
                var14 = var19[var13];
                var14 = var18.bind(var3)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var13 = var19[var13];
                var13 = var18.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["Yhi9/N"];
                var13 = var14.bind(var16)(var13);
                var8.label = var13;
                var8.onPress = var12;
                var8 = var7.bind(var3)(var10, var8);
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 392:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var21.content;
                var5.style = var8;
                var12 = _closure1_slot9;
                var10 = _closure1_slot5;
                var8 = {};
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = var13[var11];
                var11 = var14.bind(var3)(var11);
                var8.source = var11;
                var10 = var12.bind(var3)(var10, var8);
                var8 = new Array(4);
                var8[0] = var10;
                var18 = _closure1_slot0;
                var10 = 7;
                var11 = var13[var10];
                var11 = var18.bind(var3)(var11);
                var14 = var11.Text;
                var11 = {
                    'color': 'mobile-text-heading-primary',
                    'variant': 'heading-md/bold'
                };
                var19 = var21.text;
                var16 = new Array(2);
                var16[0] = var19;
                var19 = var21.headerText;
                var16[1] = var19;
                var11.style = var16;
                var20 = 15;
                var16 = var13[var20];
                var16 = var18.bind(var3)(var16);
                var22 = var16.intl;
                var19 = var22.string;
                var16 = var13[var20];
                var16 = var18.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.o4s29v;
                var16 = var19.bind(var22)(var16);
                var11.children = var16;
                var11 = var12.bind(var3)(var14, var11);
                var8[1] = var11;
                var10 = var13[var10];
                var10 = var18.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'color': 'text-default',
                    'variant': 'text-md/medium'
                };
                var14 = var21.text;
                var10.style = var14;
                var14 = var13[var20];
                var14 = var18.bind(var3)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var13 = var13[var20];
                var13 = var18.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.iypvFu;
                var13 = var14.bind(var16)(var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var8[2] = var10;
                if (!var9) {
                    _fun102811_ip = 840;
                    continue _fun102811
                }
            case 692:
                var12 = _closure1_slot9;
                var11 = _closure1_slot4;
                var10 = {};
                var19 = _closure1_slot1;
                var16 = _closure1_slot2;
                var18 = 17;
                var13 = var16[var18];
                var14 = var19.bind(var3)(var13);
                var13 = {};
                var22 = true;
                var13.shrink = var22;
                var21 = var21.button;
                var13.style = var21;
                var18 = var16[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.Sizes;
                var18 = var18.MEDIUM;
                var13.size = var18;
                var19 = _closure1_slot0;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["63PyJQ"];
                var16 = var17.bind(var18)(var16);
                var13.text = var16;
                var13.onPress = var15;
                var13 = var12.bind(var3)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 840:
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3091, 5226, 660, 33, 1297, 3941, 671, 632, 8174, 8154, 5384, 4086, 13454, 1234, 13455, 4875, 2]);