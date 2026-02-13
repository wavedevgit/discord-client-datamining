// modules/user_settings/native/defs/AccountUsernameSetting.tsx
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
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.MobileSetting;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.UserSettingsSections;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var1 = 9;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createRoute;
    var1 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 10;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.IEpCBQ;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var7 = var7.ACCOUNT;
    var1.parent = var7;
    var7 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getUserTag;
            var1 = _closure1_slot3;
            var0 = var1.getCurrentUser;
            var1 = var0.bind(var1)();
            var0 = {};
            var4 = 'never';
            var0.decoration = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useTrailing = var7;
    var7 = function() {
        _fun81679: for (var _fun81679_ip = 0;;) switch (_fun81679_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useGuildAutomodProfileQuarantineErrors;
                var2 = var0.bind(var2)();
                var0 = null;
                var3 = var0 == var2;
                var5 = undefined;
                if (var3) {
                    _fun81679_ip = 67;
                    continue _fun81679
                }
            case 46:
                var3 = var2.nick;
                var2 = var0 == var3;
                var5 = undefined;
                if (var2) {
                    _fun81679_ip = 67;
                    continue _fun81679
                }
            case 61:
                var2 = 0;
                var5 = var3[var2];
            case 67:
                var2 = var0 == var5;
                var0 = null;
                if (var2) {
                    _fun81679_ip = 129;
                    continue _fun81679
                }
            case 76:
                var3 = _closure1_slot4;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-feedback-warning'
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 129:
                return var0;
        }
    };
    var1.useDescription = var7;
    var7 = {};
    var9 = var9.ACCOUNT_CHANGE_USERNAME;
    var7.route = var9;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var7.getComponent = var8;
    var1.screen = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/AccountUsernameSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 7093, 660, 33, 566, 3240, 10172, 3938, 9059, 1235, 10365, 2]);