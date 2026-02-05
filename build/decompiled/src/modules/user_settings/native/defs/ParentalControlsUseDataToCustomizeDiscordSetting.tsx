// modules/user_settings/native/defs/ParentalControlsUseDataToCustomizeDiscordSetting.tsx
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Consents;
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() {
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
        var0 = var0.MNKzyg;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var1.parent = var8;
    var8 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useParentalControlledConsent;
        var0 = _closure1_slot4;
        var0 = var0.PERSONALIZATION;
        var0 = var1.bind(var2)(var0);
        var0 = var0.hasConsented;
        return var0;
    };
    var1.useValue = var8;
    var7 = function arg0() {
        _fun88992: for (var _fun88992_ip = 0;;) switch (_fun88992_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot3;
                var2 = var3.getSelectedTeenId;
                var4 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var4)) {
                    _fun88992_ip = 118;
                    continue _fun88992
                }
            case 26:
                if (var1) {
                    _fun88992_ip = 35;
                    continue _fun88992
                }
            case 29:
                var3 = new Array(0);
                _fun88992_ip = 56;
                continue _fun88992;
            case 35:
                var2 = _closure1_slot4;
                var5 = var2.PERSONALIZATION;
                var2 = new Array(1);
                var2[0] = var5;
                var3 = var2;
            case 56:
                if (var1) {
                    _fun88992_ip = 79;
                    continue _fun88992
                }
            case 59:
                var1 = _closure1_slot4;
                var1 = var1.PERSONALIZATION;
                var2 = new Array(1);
                var2[0] = var1;
                _fun88992_ip = 83;
                continue _fun88992;
            case 79:
                var2 = new Array(0);
            case 83:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var5.bind(var0)(var1);
                var0 = var1.updateTeenConsents;
                var0 = var0.bind(var1)(var4, var3, var2);
            case 118:
                var0 = undefined;
                return var0;
        }
    };
    var1.onValueChange = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ParentalControlsUseDataToCustomizeDiscordSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4593, 7028, 660, 10452, 4595, 9017, 1234, 2]);