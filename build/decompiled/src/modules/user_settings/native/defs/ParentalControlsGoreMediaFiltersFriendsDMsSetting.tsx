// modules/user_settings/native/defs/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var10 = function() { // Original name: getTitle, environment: var8
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
        var0 = var0["+uI23H"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot3 = var10;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = arg2;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 8;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var1.title = var10;
    var9 = var9.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS;
    var1.parent = var9;
    var9 = function() { // Original name: useGoreContentFriendsDmSettingValue, environment: var8
        _fun88488: for (var _fun88488_ip = 0;;) switch (_fun88488_ip) {
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
                    _fun88488_ip = 52;
                    continue _fun88488
                }
            case 46:
                var4 = var3.goreContentFriendDm;
            case 52:
                var3 = var0 == var4;
                var0 = null;
                if (var3) {
                    _fun88488_ip = 96;
                    continue _fun88488
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
    var1.useTrailing = var9;
    var8 = function() { // Original name: onGoreContentFriendsDmOnPress, environment: var8
        _fun88489: for (var _fun88489_ip = 0;;) switch (_fun88489_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = var1.getSelectedTeenId;
                var2 = var0.bind(var1)();
                var _closure2_slot0 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun88489_ip = 214;
                    continue _fun88489
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
                var3 = var0.goreContentFriendDm;
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
                    var0.goreContentFriendDm = var4;
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
    var1.onPress = var8;
    var1.unsearchable = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4557, 6967, 10333, 4220, 10336, 10330, 1234, 1311, 8943, 2]);