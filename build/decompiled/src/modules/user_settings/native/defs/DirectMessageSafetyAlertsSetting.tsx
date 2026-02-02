// modules/user_settings/native/defs/DirectMessageSafetyAlertsSetting.tsx
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
    var1 = var1.MobileSetting;
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var8 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.qFsx5q;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var8;
    var8 = function() {
        var0 = _closure1_slot3;
        var0 = var0.CONTENT_AND_SOCIAL;
        return var0;
    };
    var1.parent = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.useSafetyAlertsSettingOrDefault;
    var1.useValue = var8;
    var8 = 7;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.updateDmSafetyAlertsSetting;
    var1.onValueChange = var8;
    var7 = function() {
        _fun81355: for (var _fun81355_ip = 0;;) switch (_fun81355_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.bind(var4)();
                var0 = null;
                var0 = var0 == var2;
                if (var0) {
                    _fun81355_ip = 41;
                    continue _fun81355
                }
            case 38:
                var0 = var2;
            case 41:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var7 = var3.bind(var4)(var1);
                var2 = var7.useIsEligibleForInappropriateConversationWarning;
                var1 = {};
                var5 = 'user_settings_mobile_redesign';
                var1.location = var5;
                var2 = var2.bind(var7)(var1);
                var1 = 3;
                var1 = var6[var1];
                var4 = var3.bind(var4)(var1);
                var3 = var4.useIsEligibleForInappropriateConversationDefaultOn;
                var1 = {};
                var1.location = var5;
                var1 = var3.bind(var4)(var1);
                var0 = !var0;
                if (!var0) {
                    _fun81355_ip = 122;
                    continue _fun81355
                }
            case 119:
                var0 = var2;
            case 122:
                if (!var0) {
                    _fun81355_ip = 128;
                    continue _fun81355
                }
            case 125:
                var0 = !var1;
            case 128:
                return var0;
        }
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/DirectMessageSafetyAlertsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6969, 10053, 8956, 8958, 8945, 1234, 8957, 10345, 2]);