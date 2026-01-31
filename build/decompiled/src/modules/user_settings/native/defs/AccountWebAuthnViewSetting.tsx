// modules/user_settings/native/defs/AccountWebAuthnViewSetting.tsx
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
    var7 = var1.MobileSetting;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.UserSettingsSections;
    var1 = 9;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createRoute;
    var1 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.y7SXYX;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var7 = var7.ACCOUNT;
    var1.parent = var7;
    var7 = function() {
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            _fun81150: for (var _fun81150_ip = 0;;) switch (_fun81150_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    var3 = var0 == var2;
                    var8 = undefined;
                    var1 = undefined;
                    if (var3) {
                        _fun81150_ip = 35;
                        continue _fun81150
                    }
                case 29:
                    var1 = var2.verified;
                case 35:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun81150_ip = 45;
                        continue _fun81150
                    }
                case 42:
                    var0 = var1;
                case 45:
                    if (var0) {
                        _fun81150_ip = 187;
                        continue _fun81150
                    }
                case 51:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 5;
                    var1 = var9[var1];
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = 6;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var10 = var5.intl;
                    var6 = var10.string;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.v740sh;
                    var5 = var6.bind(var10)(var5);
                    var1.title = var5;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.uggF7o;
                    var4 = var5.bind(var6)(var4);
                    var1.body = var4;
                    var1 = var2.bind(var3)(var1);
                case 187:
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.usePreNavigationAction = var7;
    var7 = function() {
        _fun81151: for (var _fun81151_ip = 0;;) switch (_fun81151_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.hasFetchedCredentials;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun81151_ip = 52;
                    continue _fun81151
                }
            case 20:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchWebAuthnCredentials;
                var1 = var1.bind(var2)();
            case 52:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 6;
                    var2 = var6[var0];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var6[var0];
                    var0 = var5.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0.n8mZ0X;
                    var0 = {};
                    var5 = _closure1_slot4;
                    var4 = var5.getCredentials;
                    var4 = var4.bind(var5)();
                    var4 = var4.length;
                    var0.count = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.useTrailing = var7;
    var7 = {};
    var9 = var9.WEBAUTHN_VIEW;
    var7.route = var9;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var7.getComponent = var8;
    var1.screen = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/AccountWebAuthnViewSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7456, 1613, 6967, 660, 3962, 1234, 4529, 566, 8943, 10085, 2]);