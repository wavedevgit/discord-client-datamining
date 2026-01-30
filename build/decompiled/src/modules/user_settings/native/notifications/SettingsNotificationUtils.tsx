// modules/user_settings/native/notifications/SettingsNotificationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/notifications/SettingsNotificationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: hasAndroidNotificationChannels, environment: var1
        _fun85167: for (var _fun85167_ip = 0;;) switch (_fun85167_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun85167_ip = 91;
                    continue _fun85167
                }
            case 37:
                var2 = global;
                var3 = var2.parseInt;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getSystemVersion;
                var2 = var1.bind(var2)();
                var1 = 10;
                var2 = var3.bind(var4)(var2, var1);
                var1 = 26;
                var0 = var2 >= var1;
            case 91:
                return var0;
        }
    };
    var2.hasAndroidNotificationChannels = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 1309, 2]);