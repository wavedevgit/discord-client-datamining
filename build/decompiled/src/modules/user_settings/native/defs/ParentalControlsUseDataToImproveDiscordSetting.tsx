// modules/user_settings/native/defs/ParentalControlsUseDataToImproveDiscordSetting.tsx
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
    var1 = var1.Consents;
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
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
        var0 = var0.XuADY2;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var1.parent = var9;
    var9 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useParentalControlledConsent;
        var0 = _closure1_slot4;
        var0 = var0.USAGE_STATISTICS;
        var0 = var1.bind(var2)(var0);
        var0 = var0.hasConsented;
        return var0;
    };
    var1.useValue = var9;
    var8 = function arg0() {
        _fun88860: for (var _fun88860_ip = 0;;) switch (_fun88860_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot3;
                var2 = var3.getSelectedTeenId;
                var4 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var4)) {
                    _fun88860_ip = 118;
                    continue _fun88860
                }
            case 26:
                if (var1) {
                    _fun88860_ip = 35;
                    continue _fun88860
                }
            case 29:
                var3 = new Array(0);
                _fun88860_ip = 56;
                continue _fun88860;
            case 35:
                var2 = _closure1_slot4;
                var5 = var2.USAGE_STATISTICS;
                var2 = new Array(1);
                var2[0] = var5;
                var3 = var2;
            case 56:
                if (var1) {
                    _fun88860_ip = 79;
                    continue _fun88860
                }
            case 59:
                var1 = _closure1_slot4;
                var1 = var1.USAGE_STATISTICS;
                var2 = new Array(1);
                var2[0] = var1;
                _fun88860_ip = 83;
                continue _fun88860;
            case 79:
                var2 = new Array(0);
            case 83:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
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
    var1.onValueChange = var8;
    var1.unsearchable = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ParentalControlsUseDataToImproveDiscordSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4589, 7000, 660, 4591, 10412, 8977, 1234, 2]);