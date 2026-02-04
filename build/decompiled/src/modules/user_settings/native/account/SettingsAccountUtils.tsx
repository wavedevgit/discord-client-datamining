// modules/user_settings/native/account/SettingsAccountUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/SettingsAccountUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun80117: for (var _fun80117_ip = 0;;) switch (_fun80117_ip) {
                case 0:
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun80117_ip = 33;
                        continue _fun80117
                    }
                case 27:
                    var1 = var2.mfaEnabled;
                case 33:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun80117_ip = 43;
                        continue _fun80117
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIs2FAEnabled = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot2;
            var0 = var1.hasTOTPEnabled;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsTOTPEnabled = var3;
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun80121: for (var _fun80121_ip = 0;;) switch (_fun80121_ip) {
                case 0:
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun80121_ip = 33;
                        continue _fun80121
                    }
                case 27:
                    var1 = var2.verified;
                case 33:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun80121_ip = 43;
                        continue _fun80121
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsUserVerified = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 1621, 632, 2]);