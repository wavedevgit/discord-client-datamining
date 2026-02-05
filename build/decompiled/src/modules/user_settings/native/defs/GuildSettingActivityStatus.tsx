// modules/user_settings/native/defs/GuildSettingActivityStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var1.getSelectedGuildId;
    var _closure1_slot2 = var3;
    var1 = var1.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.IQO6Bi;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.TUKMak;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.useDescription = var9;
    var8 = var8.CONTENT_AND_SOCIAL_DISCORD;
    var1.parent = var8;
    var8 = function() {
        var1 = _closure1_slot3;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var2 = var1.selectedGuildId;
        var1 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 2;
        var0 = var4[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ActivityRestrictedGuilds;
        var0 = var1.useSetting;
        var1 = var0.bind(var1)();
        var0 = var1.includes;
        var0 = var0.bind(var1)(var2);
        var0 = !var0;
        return var0;
    };
    var1.useValue = var8;
    var7 = function arg0() {
        _fun88888: for (var _fun88888_ip = 0;;) switch (_fun88888_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = undefined;
                var3 = var2.bind(var0)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.getSanitizedActivityRestrictedGuilds;
                var5 = var2.bind(var4)();
                var2 = arg0;
                if (var2) {
                    _fun88888_ip = 61;
                    continue _fun88888
                }
            case 49:
                var2 = var5.add;
                var2 = var2.bind(var5)(var3);
                _fun88888_ip = 71;
                continue _fun88888;
            case 61:
                var2 = var5.delete;
                var2 = var2.bind(var5)(var3);
            case 71:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.ActivityRestrictedGuilds;
                var2 = var3.updateSetting;
                var1 = new Array(0);
                var6 = 0;
                var8 = var1;
                var7 = var5;
                var4 = arraySpread(var8, var7, var6);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.onValueChange = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/GuildSettingActivityStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11537, 7028, 1348, 7247, 9017, 1234, 2]);