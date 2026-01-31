// modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'padding': 16,
        'borderRadius': null,
        'borderWidth': 1
    };
    var9 = 16;
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var3.container = var8;
    var8 = {
        'width': 40,
        'height': 40,
        'borderRadius': 20
    };
    var3.avatar = var8;
    var8 = {};
    var8.marginStart = var9;
    var3.content = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.contextRow = var8;
    var8 = {
        'width': 16,
        'height': 16,
        'marginStart': 8
    };
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildRoleSubscriptionRolePreview, environment: var1
        _fun117036: for (var _fun117036_ip = 0;;) switch (_fun117036_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.content;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun117036_ip = 72;
                    continue _fun117036
                }
            case 14:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 6;
                var2 = var6[var1];
                var2 = var5.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["6OSasb"];
                var10 = var2.bind(var4)(var1);
            case 72:
                var5 = var0.style;
                var11 = var0.textStyle;
                var23 = var0.roleColor;
                var20 = var0.roleImage;
                var19 = var0.roleName;
                var6 = var0.guildId;
                var0 = _closure1_slot8;
                var7 = var0.bind(var3)();
                var8 = _closure1_slot0;
                var12 = _closure1_slot3;
                var0 = 7;
                var0 = var12[var0];
                var4 = var8.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var2.bind(var4)(var1, var0);
                var15 = _closure1_slot1;
                var16 = 8;
                var0 = var12[var16];
                var2 = var15.bind(var3)(var0);
                var1 = var2.useName;
                var0 = null;
                var17 = var1.bind(var2)(var6, var0, var4);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var7.container;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var9 = _closure1_slot6;
                var4 = 9;
                var4 = var12[var4];
                var5 = var15.bind(var3)(var4);
                var4 = {};
                var6 = var7.avatar;
                var4.style = var6;
                var6 = {};
                var6.uri = var20;
                var4.source = var6;
                var5 = var9.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var6 = var7.content;
                var5.style = var6;
                var6 = {};
                var7 = var7.contextRow;
                var6.style = var7;
                var7 = 10;
                var13 = var12[var7];
                var13 = var8.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var18 = {};
                var22 = _closure1_slot2;
                var21 = 11;
                var21 = var12[var21];
                var22 = var22.bind(var3)(var21);
                var21 = var22.int2hex;
                var21 = var21.bind(var22)(var23);
                var18.color = var21;
                var13.style = var18;
                var13.children = var17;
                var14 = var9.bind(var3)(var14, var13);
                var13 = new Array(5);
                var13[0] = var14;
                var14 = 12;
                var17 = var12[var14];
                var18 = var15.bind(var3)(var17);
                var17 = {};
                var21 = 4;
                var17.size = var21;
                var17 = var9.bind(var3)(var18, var17);
                var13[1] = var17;
                var17 = 13;
                var17 = var12[var17];
                var18 = var15.bind(var3)(var17);
                var17 = {};
                var17.name = var19;
                var19 = {};
                var19.uri = var20;
                var17.source = var19;
                var19 = 16;
                var17.size = var19;
                var17 = var9.bind(var3)(var18, var17);
                var13[2] = var17;
                var14 = var12[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.size = var16;
                var14 = var9.bind(var3)(var15, var14);
                var13[3] = var14;
                var14 = var12[var7];
                var14 = var8.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted',
                    'children': '4:20 PM'
                };
                var14 = var9.bind(var3)(var15, var14);
                var13[4] = var14;
                var6.children = var13;
                var13 = var2.bind(var3)(var1, var6);
                var6 = new Array(2);
                var6[0] = var13;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var7.style = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildRoleSubscriptionRolePreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 33, 1297, 671, 1234, 632, 3920, 4667, 3900, 668, 9226, 6698, 2]);