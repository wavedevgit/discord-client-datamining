// modules/user_settings/native/defs/UseDataForQuestsSetting.tsx
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
        var0 = var0.VkS7Yd;
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
        var0 = var0.sJYh5t;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.useTitle = var9;
    var8 = var8.DATA_AND_PRIVACY;
    var1.parent = var8;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.DropsOptedOut;
        var0 = var1.useSetting;
        var0 = var0.bind(var1)();
        var0 = !var0;
        return var0;
    };
    var1.useValue = var8;
    var8 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.DropsOptedOut;
        var2 = var3.updateSetting;
        var1 = arg0;
        var1 = !var1;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.onValueChange = var8;
    var7 = function() {
        _fun88748: for (var _fun88748_ip = 0;;) switch (_fun88748_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var2 = undefined;
                var1 = var3.bind(var2)(var0);
                var0 = var1.useAdPersonalizationTogglesDisabled;
                var0 = var0.bind(var1)();
                var1 = 2;
                var1 = var4[var1];
                var2 = var3.bind(var2)(var1);
                var1 = var2.useIsParentallyControlled;
                var1 = var1.bind(var2)();
                if (var0) {
                    _fun88748_ip = 63;
                    continue _fun88748
                }
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var1.useIsDisabled = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/UseDataForQuestsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7008, 11510, 10434, 1348, 8999, 1234, 2]);