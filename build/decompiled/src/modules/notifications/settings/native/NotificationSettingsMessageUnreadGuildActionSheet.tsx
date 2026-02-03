// modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx
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
    var3 = 'modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun70027: for (var _fun70027_ip = 0;;) switch (_fun70027_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var1 = var6[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useGuildPresetSettings;
                var0 = var0.guildId;
                var0 = var1.bind(var2)(var0);
                var5 = var0.unread;
                var9 = var0.notification;
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = _closure1_slot4;
                var8 = var6.ALL_MESSAGES;
                var6 = undefined;
                if (!(var9 === var8)) {
                    _fun70027_ip = 155;
                    continue _fun70027
                }
            case 100:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 8;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.eP8yWU;
                var6 = var8.bind(var9)(var7);
            case 155:
                var0.disabledMentionOnlyWithReason = var6;
                var0.value = var5;
                var4 = function arg0() {
                    _fun70028: for (var _fun70028_ip = 0;;) switch (_fun70028_ip) {
                        case 0:
                            var7 = arg0;
                            var4 = _closure1_slot3;
                            var3 = var4.getGuildFlags;
                            var2 = _closure2_slot0;
                            var0 = var2.guildId;
                            var10 = var3.bind(var4)(var0);
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 9;
                            var3 = var9[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.updateGuildNotificationSettings;
                            var3 = var2.guildId;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var6 = 10;
                            var6 = var9[var6];
                            var9 = var8.bind(var0)(var6);
                            var8 = var9.withGuildUnreadFlags;
                            var6 = _closure1_slot5;
                            var6 = var6.ALL_MESSAGES;
                            if (!(var7 !== var6)) {
                                _fun70028_ip = 116;
                                continue _fun70028
                            }
                        case 104:
                            var6 = _closure1_slot6;
                            var6 = var6.UNREADS_ONLY_MENTIONS;
                            _fun70028_ip = 126;
                            continue _fun70028;
                        case 116:
                            var11 = _closure1_slot6;
                            var6 = var11.UNREADS_ALL_MESSAGES;
                        case 126:
                            var6 = var8.bind(var9)(var10, var6);
                            var2.flags = var6;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 11;
                            var1 = var8[var1];
                            var1 = var6.bind(var0)(var1);
                            var6 = var1.NotificationLabel;
                            var1 = var6.unreads;
                            var1 = var1.bind(var6)(var7);
                            var1 = var4.bind(var5)(var3, var2, var1);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4299, 660, 4300, 665, 33, 8751, 8763, 1234, 4693, 8744, 4690, 2]);