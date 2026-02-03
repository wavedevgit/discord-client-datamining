// modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx
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
    var3 = var3.ChannelNotificationSettingsFlags;
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
    var3 = 'modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun70142: for (var _fun70142_ip = 0;;) switch (_fun70142_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useChannelPresetSettings;
                var0 = var0.channel;
                var0 = var1.bind(var2)(var0);
                var5 = var0.unread;
                var8 = var0.notification;
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.value = var5;
                var5 = _closure1_slot4;
                var7 = var5.ALL_MESSAGES;
                var5 = undefined;
                if (!(var8 === var7)) {
                    _fun70142_ip = 159;
                    continue _fun70142
                }
            case 104:
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
            case 159:
                var0.disabledMentionOnlyWithReason = var5;
                var4 = function arg0() {
                    _fun70143: for (var _fun70143_ip = 0;;) switch (_fun70143_ip) {
                        case 0:
                            var8 = arg0;
                            var5 = _closure1_slot3;
                            var4 = var5.getChannelIdFlags;
                            var2 = _closure2_slot0;
                            var0 = var2.channel;
                            var3 = var0.guild_id;
                            var0 = var2.channel;
                            var0 = var0.id;
                            var11 = var4.bind(var5)(var3, var0);
                            var4 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var0 = 9;
                            var3 = var10[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.updateChannelOverrideSettings;
                            var3 = var2.channel;
                            var4 = var3.guild_id;
                            var2 = var2.channel;
                            var3 = var2.id;
                            var2 = {};
                            var9 = _closure1_slot0;
                            var7 = 10;
                            var7 = var10[var7];
                            var10 = var9.bind(var0)(var7);
                            var9 = var10.withChannelUnreadFlags;
                            var7 = _closure1_slot5;
                            var7 = var7.ALL_MESSAGES;
                            if (!(var8 !== var7)) {
                                _fun70143_ip = 147;
                                continue _fun70143
                            }
                        case 135:
                            var7 = _closure1_slot6;
                            var7 = var7.UNREADS_ONLY_MENTIONS;
                            _fun70143_ip = 157;
                            continue _fun70143;
                        case 147:
                            var12 = _closure1_slot6;
                            var7 = var12.UNREADS_ALL_MESSAGES;
                        case 157:
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
                            var17 = var6;
                            var16 = var4;
                            var15 = var3;
                            var14 = var2;
                            var1 = var17[var5](var16, var15, var14, var13, var12);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4303, 660, 4304, 665, 33, 8762, 8782, 1234, 4698, 8763, 4695, 2]);