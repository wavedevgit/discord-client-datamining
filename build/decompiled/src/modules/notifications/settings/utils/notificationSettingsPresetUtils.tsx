// modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx
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
    var3 = var3.UserNotificationSettings;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'all_messages';
    var3.ALL_MESSAGES = var4;
    var4 = 'mentions';
    var3.MENTIONS = var4;
    var4 = 'nothing';
    var3.NOTHING = var4;
    var4 = 'custom';
    var3.CUSTOM = var4;
    var _closure1_slot4 = var3;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.Presets = var3;
    var3 = function arg0, arg1() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.match;
        var2 = new Array(2);
        var5 = arg1;
        var2[0] = var5;
        var5 = arg0;
        var2[1] = var5;
        var6 = var3.bind(var4)(var2);
        var5 = var6.with;
        var2 = _closure1_slot2;
        var3 = var2.ALL_MESSAGES;
        var4 = new Array(2);
        var4[0] = var3;
        var1 = _closure1_slot3;
        var3 = var1.ALL_MESSAGES;
        var4[1] = var3;
        var3 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.ALL_MESSAGES;
            return var0;
        };
        var6 = var5.bind(var6)(var4, var3);
        var5 = var6.with;
        var3 = var2.ONLY_MENTIONS;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = var1.UNSET;
        var4[1] = var3;
        var3 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.MENTIONS;
            return var0;
        };
        var6 = var5.bind(var6)(var4, var3);
        var5 = var6.with;
        var3 = var2.ONLY_MENTIONS;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = var1.ONLY_MENTIONS;
        var4[1] = var3;
        var3 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.MENTIONS;
            return var0;
        };
        var6 = var5.bind(var6)(var4, var3);
        var5 = var6.with;
        var3 = var2.NO_MESSAGES;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = var1.UNSET;
        var4[1] = var3;
        var3 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.NOTHING;
            return var0;
        };
        var4 = var5.bind(var6)(var4, var3);
        var3 = var4.with;
        var5 = var2.NO_MESSAGES;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = var1.ONLY_MENTIONS;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.NOTHING;
            return var0;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.otherwise;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.CUSTOM;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.presetFromSettings = var3;
    var3 = function arg0() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.match;
        var2 = arg0;
        var5 = var3.bind(var4)(var2);
        var4 = var5.with;
        var1 = _closure1_slot4;
        var3 = var1.ALL_MESSAGES;
        var2 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 3;
            var1 = var5[var0];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.intl;
            var1 = var2.string;
            var0 = var5[var0];
            var0 = var4.bind(var3)(var0);
            var0 = var0.t;
            var0 = var0.hZrr6k;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var4.bind(var5)(var3, var2);
        var4 = var5.with;
        var3 = var1.MENTIONS;
        var2 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 3;
            var1 = var5[var0];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.intl;
            var1 = var2.string;
            var0 = var5[var0];
            var0 = var4.bind(var3)(var0);
            var0 = var0.t;
            var0 = var0.y59NJm;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var4.bind(var5)(var3, var2);
        var4 = var5.with;
        var3 = var1.NOTHING;
        var2 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 3;
            var1 = var5[var0];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.intl;
            var1 = var2.string;
            var0 = var5[var0];
            var0 = var4.bind(var3)(var0);
            var0 = var0.t;
            var0 = var0["pGn/bJ"];
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var4.bind(var5)(var3, var2);
        var2 = var3.with;
        var1 = var1.CUSTOM;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 3;
            var1 = var5[var0];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.intl;
            var1 = var2.string;
            var0 = var5[var0];
            var0 = var4.bind(var3)(var0);
            var0 = var0.t;
            var0 = var0["32yow9"];
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1, var0);
        var0 = var1.exhaustive;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.presetName = var3;
    var1 = function arg0, arg1() {
        _fun39558: for (var _fun39558_ip = 0;;) switch (_fun39558_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = null;
                var0 = var1 != var4;
                if (!var0) {
                    _fun39558_ip = 32;
                    continue _fun39558
                }
            case 15:
                var2 = _closure1_slot3;
                var2 = var2.UNSET;
                var0 = var4 !== var2;
            case 32:
                if (var0) {
                    _fun39558_ip = 62;
                    continue _fun39558
                }
            case 35:
                var1 = var1 != var3;
                if (!var1) {
                    _fun39558_ip = 59;
                    continue _fun39558
                }
            case 42:
                var2 = _closure1_slot2;
                var2 = var2.NULL;
                var1 = var3 !== var2;
            case 59:
                var0 = var1;
            case 62:
                var0 = !var0;
                return var0;
        }
    };
    var2.arePresetSettingsUnset = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4268, 3418, 1234, 2]);