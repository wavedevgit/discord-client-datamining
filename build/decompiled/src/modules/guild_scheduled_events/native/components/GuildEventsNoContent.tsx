// modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildSettingsSections;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var10 = 'center';
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        'marginBottom': 88,
        'padding': 16
    };
    var3.container = var8;
    var8 = {};
    var11 = 7;
    var11 = var5[var11];
    var14 = var12.bind(var0)(var11);
    var13 = var9.DISPLAY_EXTRABOLD;
    var9 = 8;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var17 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var11 = {};
    var11.marginBottom = var9;
    var16 = 24;
    var19 = undefined;
    var18 = var13;
    var15 = var11;
    var17 = var19[var14](var18, var17, var16, var15, var14);
    var18 = var8;
    var9 = copyDataProperties(var18, var17);
    var9 = 'textAlign';
    var8[var9] = var10;
    var3.title = var8;
    var8 = {
        'paddingBottom': 2,
        'textAlign': 'center'
    };
    var3.subtitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun67145: for (var _fun67145_ip = 0;;) switch (_fun67145_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guild;
                var _closure2_slot0 = var0;
                var1 = var1.onClose;
                var _closure2_slot1 = var1;
                var1 = _closure1_slot9;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var16 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 9;
                var1 = var10[var1];
                var5 = var16.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var13
                    var3 = _closure1_slot4;
                    var2 = var3.can;
                    var0 = _closure1_slot6;
                    var1 = var0.MANAGE_ROLES;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var4.bind(var5)(var2, var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var11.container;
                var0.style = var4;
                var9 = _closure1_slot7;
                var12 = _closure1_slot1;
                var4 = 10;
                var4 = var10[var4];
                var7 = var12.bind(var3)(var4);
                var4 = {};
                var8 = 11;
                var8 = var10[var8];
                var8 = var12.bind(var3)(var8);
                var4.icon = var8;
                var8 = 12;
                var8 = var10[var8];
                var8 = var16.bind(var3)(var8);
                var8 = var8.CalendarIcon;
                var4.IconComponent = var8;
                var7 = var9.bind(var3)(var7, var4);
                var4 = new Array(4);
                var4[0] = var7;
                var7 = 13;
                var8 = var10[var7];
                var8 = var16.bind(var3)(var8);
                var12 = var8.Text;
                var8 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var11.title;
                var8.style = var14;
                var14 = 14;
                var15 = var10[var14];
                var15 = var16.bind(var3)(var15);
                var18 = var15.intl;
                var17 = var18.string;
                var15 = var10[var14];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["WgZ+3D"];
                var15 = var17.bind(var18)(var15);
                var8.children = var15;
                var8 = var9.bind(var3)(var12, var8);
                var4[1] = var8;
                var7 = var10[var7];
                var7 = var16.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var12 = var11.subtitle;
                var7.style = var12;
                var12 = var10[var14];
                var12 = var16.bind(var3)(var12);
                var15 = var12.intl;
                var12 = var15.string;
                var10 = var10[var14];
                var10 = var16.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["v/S/PG"];
                var10 = var12.bind(var15)(var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4[2] = var7;
                if (!var5) {
                    _fun67145_ip = 525;
                    continue _fun67145
                }
            case 400:
                var8 = _closure1_slot7;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 15;
                var6 = var9[var6];
                var6 = var10.bind(var3)(var6);
                var7 = var6.TextWithIOSLinkWorkaround;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var11 = var11.subtitle;
                var6.style = var11;
                var11 = var9[var14];
                var11 = var10.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var9 = var9[var14];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var10 = var9["K+DH2o"];
                var9 = {};
                var13 = function() {
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 16;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.open;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot5;
                    var1 = var1.ROLES;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var9.onClick = var13;
                var9 = var11.bind(var12)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 525:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3091, 660, 483, 33, 1297, 4682, 671, 566, 5927, 8178, 8181, 3941, 1234, 5332, 8152, 2]);