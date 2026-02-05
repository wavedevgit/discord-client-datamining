// modules/user_settings/native/defs/ParentalControlsUseDataForQuestsSetting.tsx
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
    var1 = 5;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var10 = function() {
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 3;
        var1 = var5[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var3 = _closure1_slot1;
        var0 = 4;
        var0 = var5[var0];
        var0 = var3.bind(var4)(var0);
        var0 = var0.ZhaNu8;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var10 = function() {
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 3;
        var1 = var5[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var3 = _closure1_slot1;
        var0 = 4;
        var0 = var5[var0];
        var0 = var3.bind(var4)(var0);
        var0 = var0.ZhaNu8;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.useTitle = var10;
    var9 = var9.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var1.parent = var9;
    var9 = function() {
        _fun88996: for (var _fun88996_ip = 0;;) switch (_fun88996_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getSelectedTeenId;
                var3 = var1.bind(var2)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var2 = var1.ParentalControlledDropsOptedOut;
                var1 = var2.useControlledSetting;
                var4 = null;
                var4 = var4 != var3;
                if (!var4) {
                    _fun88996_ip = 63;
                    continue _fun88996
                }
            case 60:
                var0 = var3;
            case 63:
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                return var0;
        }
    };
    var1.useValue = var9;
    var8 = function arg0() {
        _fun88997: for (var _fun88997_ip = 0;;) switch (_fun88997_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getSelectedTeenId;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var4 = var2.ParentalControlledDropsOptedOut;
                var3 = var4.updateControlledSetting;
                var2 = null;
                var5 = var2 != var1;
                var2 = undefined;
                if (!var5) {
                    _fun88997_ip = 65;
                    continue _fun88997
                }
            case 62:
                var2 = var1;
            case 65:
                var1 = arg0;
                var1 = !var1;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.onValueChange = var8;
    var1.unsearchable = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ParentalControlsUseDataForQuestsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4593, 7028, 10453, 1234, 1858, 9017, 2]);