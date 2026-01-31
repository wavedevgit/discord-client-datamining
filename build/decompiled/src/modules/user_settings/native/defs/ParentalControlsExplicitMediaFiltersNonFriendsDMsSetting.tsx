// modules/user_settings/native/defs/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function() { // Original name: useObscuredContentNonFriendsDmSettingValue, environment: var5
        _fun88482: for (var _fun88482_ip = 0;;) switch (_fun88482_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var3 = var3.bind(var2)(var0);
                var0 = var3.useParentalControlledExplicitContentSettings;
                var3 = var0.bind(var3)();
                var0 = null;
                var5 = var0 == var3;
                var4 = undefined;
                if (var5) {
                    _fun88482_ip = 52;
                    continue _fun88482
                }
            case 46:
                var4 = var3.explicitContentNonFriendDm;
            case 52:
                var3 = var0 == var4;
                var0 = null;
                if (var3) {
                    _fun88482_ip = 96;
                    continue _fun88482
                }
            case 61:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var3 = var3.bind(var2)(var1);
                var1 = var3.redactionSettingToRenderedString;
                var1 = var1.bind(var3)(var4);
                var0 = var1.bind(var2)();
            case 96:
                return var0;
        }
    };
    var1 = function() { // Original name: onObscuredContentNonFriendsDmOnPress, environment: var5
        _fun88483: for (var _fun88483_ip = 0;;) switch (_fun88483_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = var1.getSelectedTeenId;
                var2 = var0.bind(var1)();
                var _closure2_slot0 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun88483_ip = 214;
                    continue _fun88483
                }
            case 32:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 4;
                var0 = var8[var0];
                var6 = undefined;
                var1 = var7.bind(var6)(var0);
                var0 = var1.getExplicitContentSettingOrDefault;
                var0 = var0.bind(var1)(var2);
                var3 = var0.explicitContentNonFriendDm;
                var0 = 5;
                var1 = var8[var0];
                var1 = var7.bind(var6)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var8[var0];
                var0 = var7.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.GYpoAq;
                var9 = var1.bind(var2)(var0);
                var0 = 6;
                var0 = var8[var0];
                var2 = var7.bind(var6)(var0);
                var1 = var2.handleSensitiveMediaFilterPress;
                var0 = {};
                var0.title = var9;
                var5 = _closure1_slot3;
                var5 = var5.bind(var6)();
                var0.subtitle = var5;
                var5 = 7;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.ExplicitContentRedaction;
                var6 = var5.SHOW;
                var5 = new Array(1);
                var5[0] = var6;
                var0.excluded = var5;
                var4 = function(arg0) { // Original name: handlePress, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.updateExplicitContentSetting;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var5 = arg0;
                    var1.explicitContentNonFriendDm = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.handlePress = var4;
                var0.currentValue = var3;
                var0 = var1.bind(var2)(var0);
            case 214:
                var0 = undefined;
                return var0;
        }
    };
    var11 = function() { // Original name: getTitle, environment: var5
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
        var0 = var0["Yh+HX1"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot3 = var11;
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var9 = true;
    var4.value = var9;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var4);
    var0 = 0;
    var8 = var7[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var10 = var4.MobileSetting;
    var4 = 8;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createPressable;
    var4 = {};
    var4.title = var11;
    var10 = var10.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS;
    var4.parent = var10;
    var4.useTrailing = var3;
    var4.onPress = var1;
    var4.unsearchable = var9;
    var4 = var5.bind(var8)(var4);
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/defs/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useObscuredContentNonFriendsDmSettingValue = var3;
    var2.onObscuredContentNonFriendsDmOnPress = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4557, 6967, 10333, 4220, 10336, 1234, 10330, 1311, 8943, 2]);