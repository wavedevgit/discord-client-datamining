// modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserNotificationSettings;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildNotificationSettingsFlags;
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun70159: for (var _fun70159_ip = 0;;) switch (_fun70159_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var2 = _closure1_slot3;
                var0 = var2.getGuildFlags;
                var10 = var0.bind(var2)(var5);
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 3;
                var2 = var0[var6];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.Presets;
                var2 = var2.ALL_MESSAGES;
                if (!(var3 !== var2)) {
                    _fun70159_ip = 376;
                    continue _fun70159
                }
            case 65:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var0)(var2);
                var2 = var2.Presets;
                var2 = var2.MENTIONS;
                if (!(var3 !== var2)) {
                    _fun70159_ip = 258;
                    continue _fun70159
                }
            case 101:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var0)(var2);
                var2 = var2.Presets;
                var2 = var2.NOTHING;
                if (!(var3 === var2)) {
                    _fun70159_ip = 492;
                    continue _fun70159
                }
            case 137:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 4;
                var2 = var8[var2];
                var6 = var3.bind(var0)(var2);
                var4 = var6.updateGuildNotificationSettings;
                var3 = {};
                var2 = _closure1_slot4;
                var2 = var2.NO_MESSAGES;
                var3.message_notifications = var2;
                var7 = _closure1_slot0;
                var2 = 5;
                var2 = var8[var2];
                var11 = var7.bind(var0)(var2);
                var9 = var11.withGuildUnreadFlags;
                var2 = _closure1_slot5;
                var2 = var2.UNREADS_ONLY_MENTIONS;
                var2 = var9.bind(var11)(var10, var2);
                var3.flags = var2;
                var2 = 6;
                var2 = var8[var2];
                var2 = var7.bind(var0)(var2);
                var2 = var2.NotificationLabels;
                var2 = var2.PresetNothing;
                var2 = var4.bind(var6)(var5, var3, var2);
                _fun70159_ip = 492;
                continue _fun70159;
            case 258:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 4;
                var2 = var8[var2];
                var6 = var3.bind(var0)(var2);
                var4 = var6.updateGuildNotificationSettings;
                var3 = {};
                var2 = _closure1_slot4;
                var2 = var2.ONLY_MENTIONS;
                var3.message_notifications = var2;
                var7 = _closure1_slot0;
                var2 = 5;
                var2 = var8[var2];
                var11 = var7.bind(var0)(var2);
                var9 = var11.withGuildUnreadFlags;
                var2 = _closure1_slot5;
                var2 = var2.UNREADS_ONLY_MENTIONS;
                var2 = var9.bind(var11)(var10, var2);
                var3.flags = var2;
                var2 = 6;
                var2 = var8[var2];
                var2 = var7.bind(var0)(var2);
                var2 = var2.NotificationLabels;
                var2 = var2.PresetMentions;
                var2 = var4.bind(var6)(var5, var3, var2);
                _fun70159_ip = 492;
                continue _fun70159;
            case 376:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.updateGuildNotificationSettings;
                var2 = {};
                var6 = _closure1_slot4;
                var6 = var6.ALL_MESSAGES;
                var2.message_notifications = var6;
                var6 = _closure1_slot0;
                var8 = 5;
                var8 = var7[var8];
                var9 = var6.bind(var0)(var8);
                var8 = var9.withGuildUnreadFlags;
                var1 = _closure1_slot5;
                var1 = var1.UNREADS_ALL_MESSAGES;
                var1 = var8.bind(var9)(var10, var1);
                var2.flags = var1;
                var1 = 6;
                var1 = var7[var1];
                var1 = var6.bind(var0)(var1);
                var1 = var1.NotificationLabels;
                var1 = var1.PresetAll;
                var1 = var3.bind(var4)(var5, var2, var1);
            case 492:
                return var0;
        }
    };
    var2.updateGuildPreset = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var4 = var6[var1];
        var2 = undefined;
        var9 = var5.bind(var2)(var4);
        var7 = var9.useStateFromStores;
        var8 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var8;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = var2.getGuildUnreadSetting;
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
            var2 = _closure1_slot3;
            var1 = var2.getMessageNotifications;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var3.bind(var7)(var1, var0);
        var0 = {};
        var0.unread = var4;
        var0.notification = var3;
        var1 = 3;
        var1 = var6[var1];
        var2 = var5.bind(var2)(var1);
        var1 = var2.presetFromSettings;
        var1 = var1.bind(var2)(var4, var3);
        var0.preset = var1;
        return var0;
    };
    var2.useGuildPresetSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4304, 660, 665, 4307, 4699, 8790, 4696, 632, 2]);