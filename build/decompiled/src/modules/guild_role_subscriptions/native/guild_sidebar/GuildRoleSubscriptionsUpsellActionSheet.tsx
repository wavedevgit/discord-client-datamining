// modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx
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
    var3 = var3.GuildSettingsSections;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'paddingLeft': 24,
        'paddingRight': 24,
        'paddingTop': 24
    };
    var3.container = var8;
    var8 = {
        'marginTop': 24,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'marginTop': 8,
        'marginBottom': 24,
        'textAlign': 'center'
    };
    var3.description = var8;
    var8 = {};
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_SUBTLE;
    var8.color = var10;
    var3.dismissButtonText = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.dismissButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildRoleSubscriptionsUpsellActionSheet, environment: var1
        var0 = arg0;
        var1 = var0.guildId;
        var _closure2_slot0 = var1;
        var0 = var0.markAsDismissed;
        var _closure2_slot1 = var0;
        var0 = _closure1_slot7;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var15 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 6;
        var0 = var11[var0];
        var0 = var15.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var5 = true;
        var0.startExpanded = var5;
        var5 = function() { // Original name: onDismiss, environment: var13
            var2 = _closure2_slot1;
            var0 = _closure1_slot4;
            var1 = var0.UNKNOWN;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.onDismiss = var5;
        var7 = _closure1_slot5;
        var10 = _closure1_slot1;
        var4 = 7;
        var4 = var11[var4];
        var5 = var10.bind(var3)(var4);
        var4 = {};
        var6 = 8;
        var6 = var11[var6];
        var6 = var10.bind(var3)(var6);
        var4.source = var6;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(5);
        var4[0] = var5;
        var5 = 9;
        var6 = var11[var5];
        var6 = var15.bind(var3)(var6);
        var9 = var6.Text;
        var6 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var12 = var8.title;
        var6.style = var12;
        var12 = 10;
        var14 = var11[var12];
        var14 = var15.bind(var3)(var14);
        var17 = var14.intl;
        var16 = var17.string;
        var14 = var11[var12];
        var14 = var15.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.C0m4rQ;
        var14 = var16.bind(var17)(var14);
        var6.children = var14;
        var6 = var7.bind(var3)(var9, var6);
        var4[1] = var6;
        var5 = var11[var5];
        var5 = var15.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var9 = var8.description;
        var5.style = var9;
        var9 = var11[var12];
        var9 = var15.bind(var3)(var9);
        var16 = var9.intl;
        var14 = var16.string;
        var9 = var11[var12];
        var9 = var15.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.zOHfEX;
        var9 = var14.bind(var16)(var9);
        var5.children = var9;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var9 = 11;
        var5 = var11[var9];
        var6 = var10.bind(var3)(var5);
        var5 = {};
        var14 = function() { // Original name: onPress, environment: var13
            var4 = _closure2_slot1;
            var0 = _closure1_slot4;
            var3 = var0.UNKNOWN;
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 12;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = var4.open;
            var2 = _closure2_slot0;
            var1 = _closure1_slot3;
            var1 = var1.ROLE_SUBSCRIPTIONS;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var5.onPress = var14;
        var14 = var11[var12];
        var14 = var15.bind(var3)(var14);
        var17 = var14.intl;
        var16 = var17.string;
        var14 = var11[var12];
        var14 = var15.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.OgQQbG;
        var14 = var16.bind(var17)(var14);
        var5.text = var14;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var5 = var11[var9];
        var6 = var10.bind(var3)(var5);
        var5 = {};
        var13 = function() { // Original name: onPress, environment: var13
            var2 = _closure2_slot1;
            var0 = _closure1_slot4;
            var1 = var0.UNKNOWN;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var5.onPress = var13;
        var13 = var11[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var11[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.WAI6xu;
        var12 = var13.bind(var14)(var12);
        var5.text = var12;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.Colors;
        var9 = var9.TRANSPARENT;
        var5.color = var9;
        var9 = var8.dismissButton;
        var5.style = var9;
        var8 = var8.dismissButtonText;
        var5.textStyle = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[4] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 1369, 33, 1297, 671, 4894, 4667, 13386, 3900, 1234, 4836, 8114, 2]);