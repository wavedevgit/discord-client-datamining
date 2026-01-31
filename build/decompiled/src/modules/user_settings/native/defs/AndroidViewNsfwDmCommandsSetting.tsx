// modules/user_settings/native/defs/AndroidViewNsfwDmCommandsSetting.tsx
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
    var8 = var1.MobileSetting;
    var1 = 9;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() { // Original name: title, environment: var7
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
        var0 = var0.VGWIAo;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var9 = function() { // Original name: useDescription, environment: var7
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
        var0 = var0["J4zza/"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.useDescription = var9;
    var8 = var8.CONTENT_AND_SOCIAL_DISCORD;
    var1.parent = var8;
    var8 = function() { // Original name: useViewNsfwDmCommandsSettingValue, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.useViewNsfwCommandsOrDefault;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.useValue = var8;
    var8 = function(arg0) { // Original name: handleValueChange, environment: var7
        _fun81378: for (var _fun81378_ip = 0;;) switch (_fun81378_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.shouldAgeVerifyForSettingsToggles;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun81378_ip = 44;
                    continue _fun81378
                }
            case 41:
                if (var3) {
                    _fun81378_ip = 83;
                    continue _fun81378
                }
            case 44:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.ViewNsfwCommands;
                var1 = var2.updateSetting;
                var1 = var1.bind(var2)(var3);
                _fun81378_ip = 149;
                continue _fun81378;
            case 83:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 6;
                var1 = var6[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.showAgeVerificationGetStartedModal;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = 7;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.AgeVerificationModalEntryPoint;
                var4 = var4.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
                var1.entryPoint = var4;
                var1 = var2.bind(var3)(var1);
            case 149:
                return var0;
        }
    };
    var1.onValueChange = var8;
    var7 = function() { // Original name: usePredicate, environment: var7
        _fun81379: for (var _fun81379_ip = 0;;) switch (_fun81379_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 2;
                var0 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
                var0 = var2.useShouldAgeVerifyForSettingsToggles;
                var0 = var0.bind(var2)();
                var2 = 3;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useNSFWAllowed;
                var4 = var2.bind(var4)();
                var2 = null;
                var2 = var2 == var4;
                if (var2) {
                    _fun81379_ip = 69;
                    continue _fun81379
                }
            case 66:
                var2 = var4;
            case 69:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 4;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.useIsVerifiedTeen;
                var4 = var4.bind(var5)();
                if (!var0) {
                    _fun81379_ip = 105;
                    continue _fun81379
                }
            case 102:
                var0 = !var4;
            case 105:
                if (var0) {
                    _fun81379_ip = 111;
                    continue _fun81379
                }
            case 108:
                var0 = var2;
            case 111:
                if (!var0) {
                    _fun81379_ip = 144;
                    continue _fun81379
                }
            case 114:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isAndroid;
                var0 = var1.bind(var2)();
            case 144:
                return var0;
        }
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/AndroidViewNsfwDmCommandsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.AndroidViewNsfwDmCommandsSettingV2 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6967, 7916, 4515, 7917, 4212, 478, 5894, 4519, 1348, 8943, 1234, 2]);