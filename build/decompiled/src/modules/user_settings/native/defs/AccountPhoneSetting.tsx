// modules/user_settings/native/defs/AccountPhoneSetting.tsx
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
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = var1;
    var1 = 8;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 9;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.dEYpSt;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.ACCOUNT;
    var1.parent = var9;
    var9 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun81556: for (var _fun81556_ip = 0;;) switch (_fun81556_ip) {
                case 0:
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun81556_ip = 33;
                        continue _fun81556
                    }
                case 27:
                    var0 = var1.phone;
                case 33:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useTrailing = var9;
    var8 = function() {
        var3 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 4;
        var2 = var8[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var4 = var5.pushLazy;
        var7 = _closure1_slot0;
        var2 = 6;
        var2 = var8[var2];
        var6 = var7.bind(var0)(var2);
        var2 = 5;
        var3 = var8[var2];
        var2 = var8.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = {};
        var6 = true;
        var2.allowDeletePhone = var6;
        var6 = 7;
        var6 = var8[var6];
        var6 = var7.bind(var0)(var6);
        var6 = var6.ChangePhoneReason;
        var6 = var6.USER_SETTINGS_UPDATE;
        var2.reason = var6;
        var1 = _closure1_slot4;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.onPress = var8;
    var1.withArrow = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/AccountPhoneSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 7028, 7575, 566, 4561, 7574, 1307, 7577, 9017, 1234, 2]);