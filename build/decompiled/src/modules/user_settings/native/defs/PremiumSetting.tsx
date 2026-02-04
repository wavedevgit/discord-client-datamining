// modules/user_settings/native/defs/PremiumSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.UserSettingsSections;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot6 = var1;
    var1 = 10;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createRoute;
    var1 = {};
    var7 = function() {
        _fun82839: for (var _fun82839_ip = 0;;) switch (_fun82839_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var5 = undefined;
                var4 = var2.bind(var5)(var0);
                var3 = var4.hasPremiumSubscriptionToDisplay;
                var2 = _closure1_slot4;
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var6 = _closure1_slot5;
                var0 = var6.getPremiumTypeSubscription;
                var0 = var0.bind(var6)();
                var0 = var3.bind(var4)(var2, var0);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun82839_ip = 124;
                    continue _fun82839
                }
            case 111:
                var0 = var1["8x0jKT"];
                var0 = var2.bind(var3)(var0);
                _fun82839_ip = 135;
                continue _fun82839;
            case 124:
                var1 = var1["8jmdON"];
                var0 = var2.bind(var3)(var1);
            case 135:
                return var0;
        }
    };
    var1.title = var7;
    var7 = null;
    var1.parent = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.NitroWheelIcon;
    var1.IconComponent = var7;
    var7 = function() {
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            _fun82841: for (var _fun82841_ip = 0;;) switch (_fun82841_ip) {
                case 0:
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var0 = var3[var0];
                    var3 = undefined;
                    var6 = var1.bind(var3)(var0);
                    var5 = var6.getCurrentConfig;
                    var4 = {};
                    var0 = 'ddafe5_1';
                    var4.location = var0;
                    var0 = {};
                    var1 = false;
                    var0.autoTrackExposure = var1;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var0.paymentsBlocked;
                    var0 = !var0;
                    if (var0) {
                        _fun82841_ip = 96;
                        continue _fun82841
                    }
                case 70:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.bind(var3)();
                    var0 = false;
                case 96:
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.usePreNavigationAction = var7;
    var7 = function() {
        var3 = _closure1_slot6;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.useTrailing = var7;
    var7 = {};
    var9 = var9.PREMIUM;
    var7.route = var9;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var7.getComponent = var8;
    var1.screen = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/PremiumSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 3117, 660, 33, 3109, 1234, 6870, 6874, 10611, 8999, 5749, 10614, 2]);