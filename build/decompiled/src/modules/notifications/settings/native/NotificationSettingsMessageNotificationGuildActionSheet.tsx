// modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserNotificationSettings;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildNotificationSettingsFlags;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun70152: for (var _fun70152_ip = 0;;) switch (_fun70152_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useGuildPresetSettings;
                var0 = var0.guildId;
                var0 = var1.bind(var2)(var0);
                var8 = var0.unread;
                var _closure2_slot1 = var8;
                var9 = var0.notification;
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = 'guild';
                var0.context = var5;
                var0.value = var9;
                var5 = _closure1_slot4;
                var7 = var5.ALL_MESSAGES;
                var5 = undefined;
                if (!(var9 !== var7)) {
                    _fun70152_ip = 187;
                    continue _fun70152
                }
            case 116:
                var7 = _closure1_slot5;
                var7 = var7.ALL_MESSAGES;
                var5 = undefined;
                if (!(var8 !== var7)) {
                    _fun70152_ip = 187;
                    continue _fun70152
                }
            case 132:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 8;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.eP8yWU;
                var5 = var7.bind(var8)(var6);
            case 187:
                var0.allMessagesSubLabel = var5;
                var4 = function arg0() {
                    _fun70153: for (var _fun70153_ip = 0;;) switch (_fun70153_ip) {
                        case 0:
                            var7 = arg0;
                            var5 = {};
                            var5.message_notifications = var7;
                            var0 = _closure1_slot4;
                            var0 = var0.ALL_MESSAGES;
                            var0 = var7 === var0;
                            if (!var0) {
                                _fun70153_ip = 51;
                                continue _fun70153
                            }
                        case 30:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot5;
                            var2 = var2.ALL_MESSAGES;
                            var0 = var3 !== var2;
                        case 51:
                            if (!var0) {
                                _fun70153_ip = 131;
                                continue _fun70153
                            }
                        case 54:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.withGuildUnreadFlags;
                            var6 = _closure1_slot3;
                            var2 = var6.getGuildFlags;
                            var0 = _closure2_slot0;
                            var0 = var0.guildId;
                            var2 = var2.bind(var6)(var0);
                            var0 = _closure1_slot6;
                            var0 = var0.UNREADS_ALL_MESSAGES;
                            var0 = var3.bind(var4)(var2, var0);
                            var5.flags = var0;
                        case 131:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 10;
                            var2 = var8[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.updateGuildNotificationSettings;
                            var2 = _closure2_slot0;
                            var2 = var2.guildId;
                            var6 = _closure1_slot0;
                            var1 = 11;
                            var1 = var8[var1];
                            var1 = var6.bind(var0)(var1);
                            var6 = var1.NotificationLabel;
                            var1 = var6.notifications;
                            var1 = var1.bind(var6)(var7);
                            var1 = var3.bind(var4)(var2, var5, var1);
                            return var0;
                    }
                };
                var0.onChange = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4303, 660, 4304, 665, 33, 8791, 8797, 1234, 8784, 4698, 4695, 2]);