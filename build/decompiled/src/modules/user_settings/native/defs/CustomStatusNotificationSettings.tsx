// modules/user_settings/native/defs/CustomStatusNotificationSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun85700: for (var _fun85700_ip = 0;;) switch (_fun85700_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.CustomStatusPushNotifications;
                var2 = var3.updateSetting;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 4;
                var1 = var7[var1];
                var1 = var4.bind(var0)(var1);
                var4 = var1.CustomStatusPushNotificationType;
                if (var5) {
                    _fun85700_ip = 77;
                    continue _fun85700
                }
            case 69:
                var1 = var4.STATUS_PUSH_DISABLED;
                _fun85700_ip = 83;
                continue _fun85700;
            case 77:
                var1 = var4.STATUS_PUSH_ENABLED;
            case 83:
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot3;
                var2 = var1.NOTIFICATION_SETTINGS_UPDATED;
                var1 = {};
                var6 = _closure1_slot4;
                var6 = var6.ACCOUNT;
                var1.update_type = var6;
                var1.custom_status_push_notifications = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var9 = var3.MobileSetting;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.NotificationSettingsUpdateType;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createToggle;
    var3 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 7;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.PTtxi9;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.title = var10;
    var9 = var9.NOTIFICATIONS;
    var3.parent = var9;
    var8 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 3;
        var0 = var4[var0];
        var2 = undefined;
        var0 = var3.bind(var2)(var0);
        var1 = var0.CustomStatusPushNotifications;
        var0 = var1.useSetting;
        var1 = var0.bind(var1)();
        var0 = 4;
        var0 = var4[var0];
        var0 = var3.bind(var2)(var0);
        var0 = var0.CustomStatusPushNotificationType;
        var0 = var0.STATUS_PUSH_DISABLED;
        var0 = var1 !== var0;
        return var0;
    };
    var3.useValue = var8;
    var3.onValueChange = var1;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.useCustomStatusPushExperiment;
    var3.usePredicate = var8;
    var3 = var4.bind(var7)(var3);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/CustomStatusNotificationSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.onChange = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7005, 660, 3103, 1348, 1311, 795, 8996, 1234, 11027, 2]);