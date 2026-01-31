// modules/user_settings/native/defs/InAppNotificationsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot3 = var1;
    var1 = 6;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 4;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.rqEZdu;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.NOTIFICATIONS;
    var1.parent = var8;
    var8 = function() {
        _fun85200: for (var _fun85200_ip = 0;;) switch (_fun85200_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 2;
                var0 = var4[var1];
                var2 = undefined;
                var0 = var3.bind(var2)(var0);
                var5 = var0.FocusMode;
                var0 = var5.useSetting;
                var0 = var0.bind(var5)();
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var2 = var1.ShowInAppNotifications;
                var1 = var2.useSetting;
                var1 = var1.bind(var2)();
                var0 = !var0;
                if (!var0) {
                    _fun85200_ip = 75;
                    continue _fun85200
                }
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var1.useValue = var8;
    var8 = function arg0() {
        var5 = arg0;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 2;
        var2 = var4[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.ShowInAppNotifications;
        var2 = var3.updateSetting;
        var2 = var2.bind(var3)(var5);
        var3 = _closure1_slot1;
        var2 = 5;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot3;
        var2 = var1.LOCAL_SETTINGS_UPDATED;
        var1 = {};
        var1.notifications_in_app_enabled = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.onValueChange = var8;
    var7 = function() {
        _fun85202: for (var _fun85202_ip = 0;;) switch (_fun85202_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var0 = var3[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.useFocusModeEnabled;
                var2 = var0.bind(var2)();
                var0 = undefined;
                if (!var2) {
                    _fun85202_ip = 97;
                    continue _fun85202
                }
            case 40:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.cIRG0s;
                var0 = var2.bind(var3)(var1);
            case 97:
                return var0;
        }
    };
    var1.useDescription = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.useFocusModeEnabled;
    var1.useIsDisabled = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/InAppNotificationsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6967, 660, 1348, 8683, 1234, 795, 8943, 2]);