// modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun69906: for (var _fun69906_ip = 0;;) switch (_fun69906_ip) {
            case 0:
                var17 = arg0;
                var _closure2_slot0 = var17;
                var1 = _closure1_slot6;
                var3 = undefined;
                var19 = var1.bind(var3)();
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 5;
                var1 = var13[var1];
                var2 = var14.bind(var3)(var1);
                var1 = var2.getUnreadSelectOptions;
                var2 = var1.bind(var2)();
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var0.setting;
                    var0 = var1 === var0;
                    return var0;
                };
                var23 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var17.style;
                var0.style = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var19.header;
                var4.style = var7;
                var9 = _closure1_slot4;
                var15 = 6;
                var7 = var13[var15];
                var7 = var14.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var10 = var19.headerTitle;
                var7.style = var10;
                var22 = 7;
                var10 = var13[var22];
                var10 = var14.bind(var3)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var13[var22];
                var10 = var14.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.Tqd1Af;
                var10 = var11.bind(var12)(var10);
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot4;
                var8 = var13[var15];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/semibold',
                    'color': 'text-default'
                };
                var11 = var13[var22];
                var11 = var14.bind(var3)(var11);
                var18 = var11.intl;
                var12 = var18.string;
                var11 = var13[var22];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.RpQgm5;
                var11 = var12.bind(var18)(var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot4;
                var12 = 8;
                var5 = var13[var12];
                var5 = var14.bind(var3)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var8 = var17.onCustomize;
                var5.onPress = var8;
                var8 = 0.6;
                var5.activeOpacity = var8;
                var10 = _closure1_slot5;
                var9 = _closure1_slot3;
                var8 = {};
                var11 = var19.card;
                var8.style = var11;
                var20 = _closure1_slot4;
                var18 = _closure1_slot1;
                var11 = 9;
                var11 = var13[var11];
                var18 = var18.bind(var3)(var11);
                var11 = {};
                var21 = var17.setting;
                var11.unreadSetting = var21;
                var18 = var20.bind(var3)(var18, var11);
                var11 = new Array(3);
                var11[0] = var18;
                var18 = _closure1_slot4;
                var13 = var13[var15];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {};
                var20 = 'text-sm/medium';
                var13.variant = var20;
                var20 = var19.label;
                var13.style = var20;
                var20 = null;
                var24 = var20 == var23;
                var21 = undefined;
                if (var24) {
                    _fun69906_ip = 494;
                    continue _fun69906
                }
            case 489:
                var21 = var23.label;
            case 494:
                var23 = var20 != var21;
                var20 = 'unset';
                if (!var23) {
                    _fun69906_ip = 508;
                    continue _fun69906
                }
            case 505:
                var20 = var21;
            case 508:
                var13.children = var20;
                var13 = var18.bind(var3)(var14, var13);
                var11[1] = var13;
                var14 = _closure1_slot4;
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = var18[var12];
                var12 = var21.bind(var3)(var12);
                var13 = var12.PressableOpacity;
                var12 = {};
                var17 = var17.onCustomize;
                var12.onPress = var17;
                var17 = _closure1_slot5;
                var15 = var18[var15];
                var15 = var21.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'variant': 'text-sm/semibold',
                    'style': null,
                    'color': 'text-brand'
                };
                var19 = var19.cta;
                var15.style = var19;
                var19 = var18[var22];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var22];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.yxiV9W;
                var19 = var19.bind(var20)(var18);
                var18 = new Array(2);
                var18[0] = var19;
                var19 = ' ';
                var18[1] = var19;
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
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
        'backgroundColor': null,
        'borderColor': null,
        'borderRadius': 20,
        'borderWidth': 1,
        'padding': 14
    };
    var9 = 4;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var10;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_SUBTLE;
    var8.borderColor = var10;
    var3.card = var8;
    var10 = 8;
    var8 = {
        'flex': 1,
        'marginTop': 8,
        'alignItems': 'center'
    };
    var3.information = var8;
    var8 = {
        'marginTop': 4,
        'textAlign': 'center'
    };
    var3.cta = var8;
    var8 = {
        'marginTop': 8,
        'textAlign': 'center'
    };
    var3.label = var8;
    var8 = {};
    var8.marginBottom = var10;
    var3.header = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.headerTitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings/native/NotificationSettingsMessageUnread.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot4;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = var5.style;
        var1.style = var6;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 10;
        var6 = var6[var0];
        var0 = undefined;
        var7 = var7.bind(var0)(var6);
        var6 = var7.useGuildPresetSettings;
        var5 = var5.guildId;
        var5 = var6.bind(var7)(var5);
        var5 = var5.unread;
        var1.setting = var5;
        var4 = function() {
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var3 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot0;
            var2 = 13;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 12;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var0)(var2, var1);
            var2 = {};
            var1 = _closure2_slot0;
            var1 = var1.guildId;
            var2.guildId = var1;
            var1 = 'MessageUnreadActionSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
            return var0;
        };
        var1.onCustomize = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.NotificationSettingsGuildMessageUnread = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot4;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = var5.style;
        var1.style = var6;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 14;
        var6 = var6[var0];
        var0 = undefined;
        var7 = var7.bind(var0)(var6);
        var6 = var7.useChannelPresetSettings;
        var5 = var5.channel;
        var5 = var6.bind(var7)(var5);
        var5 = var5.unread;
        var1.setting = var5;
        var4 = function() {
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var3 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot0;
            var2 = 13;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 15;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var0)(var2, var1);
            var2 = {};
            var1 = _closure2_slot0;
            var1 = var1.channel;
            var2.channel = var1;
            var1 = 'MessageUnreadActionSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
            return var0;
        };
        var1.onCustomize = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.NotificationSettingsChannelMessageUnread = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8721, 3902, 1234, 4867, 8728, 8719, 3239, 8730, 1307, 8711, 8732, 2]);