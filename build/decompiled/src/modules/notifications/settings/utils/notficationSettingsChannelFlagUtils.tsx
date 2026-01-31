// modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserNotificationSettings;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelNotificationSettingsFlags;
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useChannelPresetSettings, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var4 = var6[var1];
        var2 = undefined;
        var9 = var5.bind(var2)(var4);
        var7 = var9.useStateFromStores;
        var8 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var8;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.resolveUnreadSetting;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var7.bind(var9)(var4, var3);
        var1 = var6[var1];
        var7 = var5.bind(var2)(var1);
        var3 = var7.useStateFromStores;
        var1 = new Array(1);
        var1[0] = var8;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.resolvedMessageNotifications;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var3.bind(var7)(var1, var0);
        var0 = {};
        var0.unread = var4;
        var0.notification = var3;
        var1 = 7;
        var1 = var6[var1];
        var2 = var5.bind(var2)(var1);
        var1 = var2.presetFromSettings;
        var1 = var1.bind(var2)(var4, var3);
        var0.preset = var1;
        return var0;
    };
    var2.useChannelPresetSettings = var3;
    var3 = function(arg0) { // Original name: useChannelPresetInheritance, environment: var1
        var3 = arg0;
        var _closure2_slot0 = var3;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var6 = 6;
        var2 = var8[var6];
        var4 = undefined;
        var11 = var7.bind(var4)(var2);
        var10 = var11.useStateFromStoresArray;
        var2 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var2;
        var5 = function() { // Environment: var1
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.filterOverrides;
            var4 = _closure1_slot5;
            var1 = var4.getChannelOverrides;
            var0 = _closure2_slot0;
            var0 = var0.guild_id;
            var1 = var1.bind(var4)(var0);
            var0 = {
                'ignoreMute': true,
                'ignoreUnreadSetting': false,
                'ignoreNotificationSetting': false
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var10.bind(var11)(var9, var5);
        var _closure2_slot1 = var5;
        var6 = var8[var6];
        var8 = var7.bind(var4)(var6);
        var7 = var8.useStateFromStoresArray;
        var6 = new Array(2);
        var6[0] = var2;
        var2 = _closure1_slot4;
        var6[1] = var2;
        var9 = var3.guild_id;
        var2 = new Array(3);
        var2[0] = var9;
        var9 = var3.parent_id;
        var2[1] = var9;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun69844: for (var _fun69844_ip = 0;;) switch (_fun69844_ip) {
                case 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.parent_id;
                    var8 = var3.bind(var4)(var2);
                    var2 = null;
                    if (!(var2 != var8)) {
                        _fun69844_ip = 58;
                        continue _fun69844
                    }
                case 36:
                    var4 = _closure2_slot1;
                    var3 = var4.includes;
                    var2 = var8.id;
                    var2 = var3.bind(var4)(var2);
                    if (var2) {
                        _fun69844_ip = 168;
                        continue _fun69844
                    }
                case 58:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 7;
                    var2 = var7[var4];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var2);
                    var2 = var3.presetName;
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var5 = var6.presetFromSettings;
                    var9 = _closure1_slot5;
                    var7 = var9.getGuildUnreadSetting;
                    var0 = _closure2_slot0;
                    var4 = var0.guild_id;
                    var4 = var7.bind(var9)(var4);
                    var7 = var9.getMessageNotifications;
                    var0 = var0.guild_id;
                    var0 = var7.bind(var9)(var0);
                    var0 = var5.bind(var6)(var4, var0);
                    var2 = var2.bind(var3)(var0);
                    var0 = ['guild'];
                    var0[1] = var2;
                    _fun69844_ip = 265;
                    continue _fun69844;
                case 168:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 7;
                    var2 = var7[var4];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var2);
                    var2 = var3.presetName;
                    var4 = var7[var4];
                    var6 = var6.bind(var5)(var4);
                    var5 = var6.presetFromSettings;
                    var7 = _closure1_slot5;
                    var1 = var7.resolveUnreadSetting;
                    var4 = var1.bind(var7)(var8);
                    var1 = var7.resolvedMessageNotifications;
                    var1 = var1.bind(var7)(var8);
                    var1 = var5.bind(var6)(var4, var1);
                    var2 = var2.bind(var3)(var1);
                    var1 = ['parent'];
                    var1[1] = var2;
                    var0 = var1;
                case 265:
                    return var0;
            }
        };
        var2 = var7.bind(var8)(var6, var1, var2);
        var1 = _closure1_slot3;
        var0 = 2;
        var1 = var1.bind(var4)(var2, var0);
        var0 = 0;
        var2 = var1[var0];
        var0 = 1;
        var1 = var1[var0];
        var0 = {};
        var4 = var5.includes;
        var3 = var3.id;
        var3 = var4.bind(var5)(var3);
        var3 = !var3;
        var0.inherited = var3;
        var0.inheritedFrom = var2;
        var0.inheritedPreset = var1;
        return var0;
    };
    var2.useChannelPresetInheritance = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: updateChannelPreset, environment: var1
        _fun69845: for (var _fun69845_ip = 0;;) switch (_fun69845_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var3 = arg2;
                var2 = _closure1_slot5;
                var0 = var2.getChannelIdFlags;
                var11 = var0.bind(var2)(var6, var5);
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 7;
                var2 = var0[var7];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.Presets;
                var2 = var2.ALL_MESSAGES;
                if (!(var3 !== var2)) {
                    _fun69845_ip = 401;
                    continue _fun69845
                }
            case 69:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var4.bind(var0)(var2);
                var2 = var2.Presets;
                var2 = var2.MENTIONS;
                if (!(var3 !== var2)) {
                    _fun69845_ip = 271;
                    continue _fun69845
                }
            case 105:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var4.bind(var0)(var2);
                var2 = var2.Presets;
                var2 = var2.NOTHING;
                if (!(var3 === var2)) {
                    _fun69845_ip = 526;
                    continue _fun69845
                }
            case 141:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 9;
                var2 = var9[var2];
                var7 = var3.bind(var0)(var2);
                var4 = var7.updateChannelOverrideSettings;
                var3 = {};
                var2 = _closure1_slot6;
                var2 = var2.NO_MESSAGES;
                var3.message_notifications = var2;
                var8 = _closure1_slot0;
                var2 = 10;
                var2 = var9[var2];
                var12 = var8.bind(var0)(var2);
                var10 = var12.withChannelUnreadFlags;
                var2 = _closure1_slot8;
                var2 = var2.UNREADS_ONLY_MENTIONS;
                var2 = var10.bind(var12)(var11, var2);
                var3.flags = var2;
                var2 = 11;
                var2 = var9[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.NotificationLabels;
                var13 = var2.PresetNothing;
                var17 = var7;
                var16 = var6;
                var15 = var5;
                var14 = var3;
                var2 = var17[var4](var16, var15, var14, var13, var12);
                _fun69845_ip = 526;
                continue _fun69845;
            case 271:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 9;
                var2 = var9[var2];
                var7 = var3.bind(var0)(var2);
                var4 = var7.updateChannelOverrideSettings;
                var3 = {};
                var2 = _closure1_slot6;
                var2 = var2.ONLY_MENTIONS;
                var3.message_notifications = var2;
                var8 = _closure1_slot0;
                var2 = 10;
                var2 = var9[var2];
                var12 = var8.bind(var0)(var2);
                var10 = var12.withChannelUnreadFlags;
                var2 = _closure1_slot8;
                var2 = var2.UNREADS_ONLY_MENTIONS;
                var2 = var10.bind(var12)(var11, var2);
                var3.flags = var2;
                var2 = 11;
                var2 = var9[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.NotificationLabels;
                var13 = var2.PresetMentions;
                var17 = var7;
                var16 = var6;
                var15 = var5;
                var14 = var3;
                var2 = var17[var4](var16, var15, var14, var13, var12);
                _fun69845_ip = 526;
                continue _fun69845;
            case 401:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.updateChannelOverrideSettings;
                var2 = {};
                var7 = _closure1_slot6;
                var7 = var7.ALL_MESSAGES;
                var2.message_notifications = var7;
                var7 = _closure1_slot0;
                var9 = 10;
                var9 = var8[var9];
                var10 = var7.bind(var0)(var9);
                var9 = var10.withChannelUnreadFlags;
                var1 = _closure1_slot8;
                var1 = var1.UNREADS_ALL_MESSAGES;
                var1 = var9.bind(var10)(var11, var1);
                var2.flags = var1;
                var1 = 11;
                var1 = var8[var1];
                var1 = var7.bind(var0)(var1);
                var1 = var1.NotificationLabels;
                var13 = var1.PresetAll;
                var17 = var4;
                var16 = var6;
                var15 = var5;
                var14 = var2;
                var1 = var17[var3](var16, var15, var14, var13, var12);
            case 526:
                return var0;
        }
    };
    var2.updateChannelPreset = var3;
    var3 = function(arg0, arg1) { // Original name: updateChannelToGuildDefault, environment: var1
        var6 = arg0;
        var5 = arg1;
        var3 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 9;
        var2 = var8[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.updateChannelOverrideSettings;
        var2 = {};
        var7 = _closure1_slot6;
        var7 = var7.NULL;
        var2.message_notifications = var7;
        var7 = _closure1_slot0;
        var9 = 10;
        var9 = var8[var9];
        var10 = var7.bind(var0)(var9);
        var9 = var10.resetChannelUnreadFlags;
        var11 = _closure1_slot5;
        var1 = var11.getChannelIdFlags;
        var1 = var1.bind(var11)(var6, var5);
        var1 = var9.bind(var10)(var1);
        var2.flags = var1;
        var1 = 11;
        var1 = var8[var1];
        var1 = var7.bind(var0)(var1);
        var1 = var1.NotificationLabels;
        var12 = var1.PresetDefault;
        var16 = var4;
        var15 = var6;
        var14 = var5;
        var13 = var2;
        var1 = var16[var3](var15, var14, var13, var12, var11);
        return var0;
    };
    var2.updateChannelToGuildDefault = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: updateChannelUnreadSetting, environment: var1
        _fun69847: for (var _fun69847_ip = 0;;) switch (_fun69847_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var8 = arg2;
                var2 = _closure1_slot5;
                var0 = var2.getChannelIdFlags;
                var11 = var0.bind(var2)(var6, var5);
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 9;
                var2 = var10[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.updateChannelOverrideSettings;
                var2 = {};
                var9 = _closure1_slot0;
                var7 = 10;
                var7 = var10[var7];
                var10 = var9.bind(var0)(var7);
                var9 = var10.withChannelUnreadFlags;
                var7 = _closure1_slot7;
                var7 = var7.ALL_MESSAGES;
                if (!(var8 !== var7)) {
                    _fun69847_ip = 106;
                    continue _fun69847
                }
            case 94:
                var7 = _closure1_slot8;
                var7 = var7.UNREADS_ONLY_MENTIONS;
                _fun69847_ip = 116;
                continue _fun69847;
            case 106:
                var12 = _closure1_slot8;
                var7 = var12.UNREADS_ALL_MESSAGES;
            case 116:
                var7 = var9.bind(var10)(var11, var7);
                var2.flags = var7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 11;
                var1 = var9[var1];
                var1 = var7.bind(var0)(var1);
                var7 = var1.NotificationLabel;
                var1 = var7.unreads;
                var13 = var1.bind(var7)(var8);
                var17 = var4;
                var16 = var6;
                var15 = var5;
                var14 = var2;
                var1 = var17[var3](var16, var15, var14, var13, var12);
                return var0;
        }
    };
    var2.updateChannelUnreadSetting = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: updateChannelNotificationSetting, environment: var1
        var3 = arg2;
        var4 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 9;
        var2 = var7[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var2);
        var5 = var6.updateChannelOverrideSettings;
        var4 = {};
        var4.message_notifications = var3;
        var2 = _closure1_slot0;
        var1 = 11;
        var1 = var7[var1];
        var1 = var2.bind(var0)(var1);
        var2 = var1.NotificationLabel;
        var1 = var2.notifications;
        var8 = var1.bind(var2)(var3);
        var11 = arg0;
        var10 = arg1;
        var12 = var6;
        var9 = var4;
        var1 = var12[var5](var11, var10, var9, var8, var7);
        return var0;
    };
    var2.updateChannelNotificationSetting = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1372, 4267, 660, 4268, 665, 632, 4270, 8707, 4661, 8710, 4658, 2]);