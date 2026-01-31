// modules/user_settings/native/defs/AndroidMessageNotificationsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function() { // Original name: useAndroidMessageNotificationsSettingValue, environment: var11
        _fun85223: for (var _fun85223_ip = 0;;) switch (_fun85223_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun85223_ip = 25;
                    continue _fun85223
                }
            case 22:
                var0 = var1;
            case 25:
                return var0;
        }
    };
    var1 = function() { // Original name: useHasAndroidMessageNotificationsSetting, environment: var11
        _fun85224: for (var _fun85224_ip = 0;;) switch (_fun85224_ip) {
            case 0:
                var1 = _closure1_slot2;
                var3 = undefined;
                var2 = var1.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isAndroid;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun85224_ip = 52;
                    continue _fun85224
                }
            case 46:
                var1 = null;
                var0 = var1 != var2;
            case 52:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var5 = var4.useAndroidMessageNotificationsEnabled;
    var _closure1_slot2 = var5;
    var9 = var4.setAndroidMessageNotificationsEnabled;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var10 = var4.MobileSetting;
    var4 = 3;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createToggle;
    var4 = {};
    var11 = function() { // Original name: title, environment: var11
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 4;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["zViLy+"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4.title = var11;
    var10 = var10.NOTIFICATIONS;
    var4.parent = var10;
    var4.useValue = var3;
    var4.onValueChange = var9;
    var4.usePredicate = var1;
    var4 = var5.bind(var8)(var4);
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/defs/AndroidMessageNotificationsSetting.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useAndroidMessageNotificationsSettingValue = var3;
    var2.useHasAndroidMessageNotificationsSetting = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10918, 6967, 478, 8943, 1234, 2]);