// modules/user_settings/native/defs/SyncContactsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.PlatformTypes;
    var _closure1_slot4 = var1;
    var1 = 6;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 7;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.uSvEy7;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.CONTENT_AND_SOCIAL_DISCORD;
    var1.parent = var8;
    var8 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 4;
        var2 = var4[var0];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var2 = var5.useContactSyncAccount;
        var2 = var2.bind(var5)();
        var0 = var4[var0];
        var1 = var3.bind(var1)(var0);
        var0 = var1.isContactSyncEnabled;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.useValue = var8;
    var7 = function arg0() {
        _fun81414: for (var _fun81414_ip = 0;;) switch (_fun81414_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.getLocalAccount;
                var0 = _closure1_slot4;
                var0 = var0.CONTACTS;
                var5 = var2.bind(var3)(var0);
                var2 = _closure1_slot3;
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var0 = null;
                var3 = var0 == var2;
                var0 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun81414_ip = 60;
                    continue _fun81414
                }
            case 54:
                var4 = var2.phone;
            case 60:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.handleSyncContacts;
                var1 = arg0;
                var1 = var2.bind(var3)(var5, var4, var1);
                return var0;
        }
    };
    var1.onValueChange = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/SyncContactsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4485, 1613, 6969, 660, 10224, 10355, 8945, 1234, 2]);