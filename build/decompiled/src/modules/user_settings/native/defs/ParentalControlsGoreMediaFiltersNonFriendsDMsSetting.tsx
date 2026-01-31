// modules/user_settings/native/defs/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function() { // Original name: useGoreContentNonFriendsDmSettingValue, environment: var5
        _fun88492: for (var _fun88492_ip = 0;;) switch (_fun88492_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var3 = var3.bind(var2)(var0);
                var0 = var3.useParentalControlledGoreContentSettings;
                var3 = var0.bind(var3)();
                var0 = null;
                var5 = var0 == var3;
                var4 = undefined;
                if (var5) {
                    _fun88492_ip = 52;
                    continue _fun88492
                }
            case 46:
                var4 = var3.goreContentNonFriendDm;
            case 52:
                var3 = var0 == var4;
                var0 = null;
                if (var3) {
                    _fun88492_ip = 96;
                    continue _fun88492
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
    var1 = function() { // Original name: onGoreContentNonFriendsDmOnPress, environment: var5
        _fun88493: for (var _fun88493_ip = 0;;) switch (_fun88493_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = var1.getSelectedTeenId;
                var2 = var0.bind(var1)();
                var _closure2_slot0 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun88493_ip = 214;
                    continue _fun88493
                }
            case 32:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 4;
                var0 = var6[var0];
                var4 = undefined;
                var1 = var5.bind(var4)(var0);
                var0 = var1.getGoreContentSettingOrDefault;
                var0 = var0.bind(var1)(var2);
                var3 = var0.goreContentNonFriendDm;
                var0 = 5;
                var0 = var6[var0];
                var2 = var5.bind(var4)(var0);
                var1 = var2.handleSensitiveMediaFilterPress;
                var0 = {};
                var9 = 6;
                var10 = var6[var9];
                var10 = var5.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var6[var9];
                var9 = var5.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["16/3Bi"];
                var9 = var10.bind(var11)(var9);
                var0.title = var9;
                var8 = _closure1_slot3;
                var8 = var8.bind(var4)();
                var0.subtitle = var8;
                var7 = function(arg0) { // Original name: handlePress, environment: var7
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.updateGoreContentSetting;
                    var1 = _closure2_slot0;
                    var0 = {};
                    var4 = arg0;
                    var0.goreContentNonFriendDm = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.handlePress = var7;
                var0.currentValue = var3;
                var3 = 7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.ExplicitContentRedaction;
                var4 = var3.SHOW;
                var3 = new Array(1);
                var3[0] = var4;
                var0.excluded = var3;
                var0 = var1.bind(var2)(var0);
            case 214:
                var0 = undefined;
                return var0;
        }
    };
    var11 = function() { // Original name: getTitle, environment: var5
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 6;
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
    var5 = 'modules/user_settings/native/defs/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useGoreContentNonFriendsDmSettingValue = var3;
    var2.onGoreContentNonFriendsDmOnPress = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4557, 6967, 10333, 4220, 10336, 10330, 1234, 1311, 8943, 2]);