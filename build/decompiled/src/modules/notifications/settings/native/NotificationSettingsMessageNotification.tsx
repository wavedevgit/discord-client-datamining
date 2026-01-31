// modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: NotificationSettingsMessageNotification, environment: var1
        _fun69878: for (var _fun69878_ip = 0;;) switch (_fun69878_ip) {
            case 0:
                var17 = arg0;
                var _closure2_slot0 = var17;
                var1 = _closure1_slot6;
                var3 = undefined;
                var19 = var1.bind(var3)();
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 5;
                var1 = var8[var1];
                var2 = var9.bind(var3)(var1);
                var1 = var2.getPushNotificationSelectOptions;
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
                var11 = _closure1_slot4;
                var15 = 6;
                var7 = var8[var15];
                var7 = var9.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var12 = var19.headerTitle;
                var7.style = var12;
                var22 = 7;
                var12 = var8[var22];
                var12 = var9.bind(var3)(var12);
                var14 = var12.intl;
                var13 = var14.string;
                var12 = var8[var22];
                var12 = var9.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["1m22ZB"];
                var12 = var13.bind(var14)(var12);
                var7.children = var12;
                var10 = var11.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var10 = _closure1_slot4;
                var8 = var8[var15];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/semibold',
                    'color': 'text-default'
                };
                var12 = var17.context;
                var11 = 'guild';
                if (!(var11 !== var12)) {
                    _fun69878_ip = 318;
                    continue _fun69878
                }
            case 262:
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = var11[var22];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var22];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["R1j5+4"];
                var11 = var12.bind(var13)(var11);
                _fun69878_ip = 372;
                continue _fun69878;
            case 318:
                var18 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var22];
                var13 = var18.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var22];
                var12 = var18.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["4bP2ZZ"];
                var11 = var13.bind(var14)(var12);
            case 372:
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot4;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
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
                var11.notificationSetting = var21;
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
                    _fun69878_ip = 581;
                    continue _fun69878
                }
            case 576:
                var21 = var23.label;
            case 581:
                var23 = var20 != var21;
                var20 = 'unset';
                if (!var23) {
                    _fun69878_ip = 595;
                    continue _fun69878
                }
            case 592:
                var20 = var21;
            case 595:
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
                var17 = _closure1_slot4;
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
                var18 = var19.bind(var20)(var18);
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
    var _closure1_slot7 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'backgroundColor': null,
        'borderColor': null,
        'borderRadius': 20,
        'borderWidth': 1,
        'padding': 14
    };
    var10 = 4;
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var11;
    var11 = var6[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_SUBTLE;
    var9.borderColor = var11;
    var4.card = var9;
    var11 = 8;
    var9 = {
        'flex': 1,
        'marginTop': 8,
        'alignItems': 'center'
    };
    var4.information = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 4
    };
    var4.cta = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 8
    };
    var4.label = var9;
    var9 = {};
    var9.marginBottom = var11;
    var4.header = var9;
    var9 = {};
    var9.marginBottom = var10;
    var4.headerTitle = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/settings/native/NotificationSettingsMessageNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function(arg0) { // Original name: NotificationSettingsGuildMessageNotification, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot4;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = 'guild';
        var1.context = var6;
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
        var5 = var5.notification;
        var1.setting = var5;
        var4 = function() { // Original name: onCustomize, environment: var4
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
            var1 = 'MessageNotificationGuildActionSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
            return var0;
        };
        var1.onCustomize = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.NotificationSettingsGuildMessageNotification = var3;
    var1 = function(arg0) { // Original name: NotificationSettingsChannelMessageNotification, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot4;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = 'channel';
        var1.context = var6;
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
        var5 = var5.notification;
        var1.setting = var5;
        var4 = function() { // Original name: onCustomize, environment: var4
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
            var1 = 'MessageNotificationChannelActionSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
            return var0;
        };
        var1.onCustomize = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.NotificationSettingsChannelMessageNotification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8719, 3900, 1234, 4865, 8720, 8717, 3237, 8722, 1307, 8709, 8724, 2]);