// modules/user_settings/native/defs/IOSNativePhoneIntegrationSetting.tsx
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
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.V6D0wU;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.NOTIFICATIONS;
    var1.parent = var8;
    var8 = 3;
    var9 = var5[var8];
    var9 = var4.bind(var0)(var9);
    var9 = var9.NativePhoneIntegrationEnabled;
    var9 = var9.useSetting;
    var1.useValue = var9;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.NativePhoneIntegrationEnabled;
    var8 = var8.updateSetting;
    var1.onValueChange = var8;
    var7 = function() {
        _fun85193: for (var _fun85193_ip = 0;;) switch (_fun85193_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var2.bind(var3)(var0);
                var2 = var4.useConfig;
                var0 = {};
                var5 = 'IOSNativePhoneIntegrationSetting';
                var0.location = var5;
                var0 = var2.bind(var4)(var0);
                var0 = var0.enabled;
                if (!var0) {
                    _fun85193_ip = 86;
                    continue _fun85193
                }
            case 56:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isIOS;
                var0 = var1.bind(var2)();
            case 86:
                return var0;
        }
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/IOSNativePhoneIntegrationSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7103, 9818, 1234, 1348, 10904, 478, 2]);