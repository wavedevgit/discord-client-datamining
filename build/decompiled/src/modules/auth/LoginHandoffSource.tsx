// modules/auth/LoginHandoffSource.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var3.Routes;
    var _closure1_slot2 = var4;
    var3 = var3.UserSettingsSections;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'role_subscription';
    var3.ROLE_SUBSCRIPTION = var4;
    var4 = 'role_subscription_setting';
    var3.ROLE_SUBSCRIPTION_SETTING = var4;
    var _closure1_slot5 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/LoginHandoffSource.tsx';
    var4 = var5.bind(var6)(var4);
    var2.LoginHandoffSource = var3;
    var1 = function arg0() {
        _fun50680: for (var _fun50680_ip = 0;;) switch (_fun50680_ip) {
            case 0:
                var0 = global;
                var2 = var0.decodeURIComponent;
                var0 = undefined;
                var1 = arg0;
                var3 = var2.bind(var0)(var1);
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.tryParseChannelPath;
                var2 = var2.bind(var4)(var3);
                var4 = null;
                if (!(var4 != var2)) {
                    _fun50680_ip = 77;
                    continue _fun50680
                }
            case 58:
                var4 = var2.channelId;
                var2 = _closure1_slot4;
                var2 = var2.ROLE_SUBSCRIPTIONS;
                if (!(var4 !== var2)) {
                    _fun50680_ip = 127;
                    continue _fun50680
                }
            case 77:
                var6 = _closure1_slot2;
                var5 = var6.SETTINGS;
                var2 = _closure1_slot3;
                var4 = var2.SUBSCRIPTIONS;
                var2 = 'role-subscriptions';
                var2 = var5.bind(var6)(var4, var2);
                var0 = undefined;
                if (!(var3 === var2)) {
                    _fun50680_ip = 125;
                    continue _fun50680
                }
            case 115:
                var2 = _closure1_slot5;
                var0 = var2.ROLE_SUBSCRIPTION_SETTING;
            case 125:
                _fun50680_ip = 137;
                continue _fun50680;
            case 127:
                var1 = _closure1_slot5;
                var0 = var1.ROLE_SUBSCRIPTION;
            case 137:
                return var0;
        }
    };
    var2.getLoginHandoffSourceFromRedirectTo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1379, 3454, 2]);