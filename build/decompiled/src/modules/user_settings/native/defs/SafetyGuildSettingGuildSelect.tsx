// modules/user_settings/native/defs/SafetyGuildSettingGuildSelect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var10 = true;
    var1.value = var10;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.getSelectedGuildId;
    var _closure1_slot6 = var3;
    var3 = var1.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot7 = var3;
    var3 = var1.setSelectedGuildId;
    var _closure1_slot8 = var3;
    var1 = var1.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot9 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var3 = var9.GUILD_SETTING_ACTIVITY_STATUS;
    var1 = new Array(2);
    var1[0] = var3;
    var3 = var9.GUILD_SETTING_ACTIVITY_JOINING;
    var1[1] = var3;
    var _closure1_slot10 = var1;
    var3 = 8;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createGuildSelector;
    var3 = {};
    var3.unsearchable = var10;
    var10 = function() {
        var4 = _closure1_slot5;
        var3 = var4.useField;
        var2 = 'selected';
        var5 = var3.bind(var4)(var2);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun88796: for (var _fun88796_ip = 0;;) switch (_fun88796_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getFlattenedGuildIds;
                    var2 = var1.bind(var2)();
                    var1 = 0;
                    var2 = var2[var1];
                    var4 = _closure1_slot10;
                    var3 = var4.includes;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun88796_ip = 53;
                        continue _fun88796
                    }
                case 47:
                    var3 = null;
                    var1 = var3 != var2;
                case 53:
                    if (!var1) {
                        _fun88796_ip = 74;
                        continue _fun88796
                    }
                case 56:
                    var4 = _closure1_slot6;
                    var3 = undefined;
                    var4 = var4.bind(var3)();
                    var3 = _closure1_slot7;
                    var1 = var4 === var3;
                case 74:
                    if (!var1) {
                        _fun88796_ip = 88;
                        continue _fun88796
                    }
                case 77:
                    var1 = _closure1_slot8;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 88:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = _closure1_slot9;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.selectedGuildId;
        return var0;
    };
    var3.useSelectedGuildId = var10;
    var9 = var9.CONTENT_AND_SOCIAL_DISCORD;
    var3.parent = var9;
    var8 = function() {
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var3 = var1[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.openLazy;
        var5 = _closure1_slot0;
        var2 = 7;
        var2 = var1[var2];
        var5 = var5.bind(var0)(var2);
        var2 = 6;
        var2 = var1[var2];
        var1 = var1.paths;
        var2 = var5.bind(var0)(var2, var1);
        var1 = 'SettingsPrivacyAndSafetyGuildSelectActionSheet';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var3.onPress = var8;
    var3 = var4.bind(var7)(var3);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/SafetyGuildSettingGuildSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.GUILD_SPECIFIC_SETTINGS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4376, 10193, 11519, 7008, 3278, 11520, 1307, 8999, 2]);