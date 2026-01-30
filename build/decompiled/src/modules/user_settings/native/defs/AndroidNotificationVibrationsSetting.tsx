// modules/user_settings/native/defs/AndroidNotificationVibrationsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var1.useAndroidNotificationVibrationsEnabled;
    var _closure1_slot2 = var3;
    var8 = var1.setAndroidNotificationVibrationsEnabled;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var10 = function() { // Original name: title, environment: var7
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["lFg/O1"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.NOTIFICATIONS;
    var1.parent = var9;
    var9 = function() { // Original name: useAndroidNotificationVibrationsSettingValue, environment: var7
        _fun85202: for (var _fun85202_ip = 0;;) switch (_fun85202_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun85202_ip = 25;
                    continue _fun85202
                }
            case 22:
                var0 = var1;
            case 25:
                return var0;
        }
    };
    var1.useValue = var9;
    var1.onValueChange = var8;
    var7 = function() { // Original name: useHasAndroidNotificationVibrationsSetting, environment: var7
        _fun85203: for (var _fun85203_ip = 0;;) switch (_fun85203_ip) {
            case 0:
                var0 = _closure1_slot2;
                var4 = undefined;
                var2 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.isIOS;
                var0 = var0.bind(var3)();
                var0 = !var0;
                if (!var0) {
                    _fun85203_ip = 82;
                    continue _fun85203
                }
            case 49:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.hasAndroidNotificationChannels;
                var1 = var1.bind(var3)();
                var0 = !var1;
            case 82:
                if (!var0) {
                    _fun85203_ip = 91;
                    continue _fun85203
                }
            case 85:
                var1 = null;
                var0 = var1 != var2;
            case 91:
                return var0;
        }
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/AndroidNotificationVibrationsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10916, 6968, 478, 10923, 8943, 1234, 2]);