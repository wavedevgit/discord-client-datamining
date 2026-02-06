// modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx
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
    var3 = var3.AnalyticsObjects;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelNotificationSettingsFlags;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun77237: for (var _fun77237_ip = 0;;) switch (_fun77237_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var10 = arg2;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 4;
                var1 = var9[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var4 = var5.updateChannelOverrideSettings;
                var3 = {};
                var2 = _closure1_slot0;
                var1 = 5;
                var1 = var9[var1];
                var12 = var2.bind(var0)(var1);
                var11 = var12.withChannelUnreadFlags;
                var13 = _closure1_slot3;
                var1 = var13.getChannelIdFlags;
                var1 = var1.bind(var13)(var7, var6);
                var1 = var11.bind(var12)(var1, var10);
                var3.flags = var1;
                var1 = 6;
                var1 = var9[var1];
                var1 = var2.bind(var0)(var1);
                var9 = var1.NotificationLabel;
                var2 = var9.unreads;
                var1 = _closure1_slot6;
                var1 = var1.UNREADS_ALL_MESSAGES;
                if (!(var10 !== var1)) {
                    _fun77237_ip = 140;
                    continue _fun77237
                }
            case 128:
                var1 = _closure1_slot5;
                var1 = var1.ONLY_MENTIONS;
                _fun77237_ip = 150;
                continue _fun77237;
            case 140:
                var10 = _closure1_slot5;
                var1 = var10.ALL_MESSAGES;
            case 150:
                var15 = var2.bind(var9)(var1);
                var1 = {};
                var8 = _closure1_slot4;
                var8 = var8.NOTIFICATION_SETTING_UNREAD_NOTICE;
                var1.object = var8;
                var19 = var5;
                var18 = var7;
                var17 = var6;
                var16 = var3;
                var14 = var1;
                var1 = var19[var4](var18, var17, var16, var15, var14, var13);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4304, 660, 4305, 665, 4699, 8790, 4696, 2]);