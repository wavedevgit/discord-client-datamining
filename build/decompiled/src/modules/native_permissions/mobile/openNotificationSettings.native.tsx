// modules/native_permissions/mobile/openNotificationSettings.native.tsx
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
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/native_permissions/mobile/openNotificationSettings.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun69515: for (var _fun69515_ip = 0;;) switch (_fun69515_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun69515_ip = 60;
                    continue _fun69515
                }
            case 38:
                var2 = _closure1_slot3;
                var3 = var2.DeviceSettingsManager;
                var2 = var3.openPrivacySettings;
                var2 = var2.bind(var3)();
                _fun69515_ip = 90;
                continue _fun69515;
            case 60:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.openNotificationSettings;
                var1 = var1.bind(var2)();
            case 90:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 4024, 2]);