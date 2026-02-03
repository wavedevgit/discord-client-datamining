// modules/user_settings/native/defs/ParentalControlsUseDataForQuests3PSetting.tsx
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
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var10 = function() {
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
        var0 = var0.CyLYKZ;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var1.parent = var9;
    var9 = function() {
        _fun88964: for (var _fun88964_ip = 0;;) switch (_fun88964_ip) {
            case 0:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var1 = var4[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var1 = var3.useSelectedTeenId;
                var3 = var1.bind(var3)();
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.ParentalControlledQuests3PDataOptedOut;
                var1 = var2.useControlledSetting;
                var4 = null;
                var4 = var4 != var3;
                if (!var4) {
                    _fun88964_ip = 71;
                    continue _fun88964
                }
            case 68:
                var0 = var3;
            case 71:
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                return var0;
        }
    };
    var1.useValue = var9;
    var9 = function arg0() {
        _fun88965: for (var _fun88965_ip = 0;;) switch (_fun88965_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getSelectedTeenId;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var4 = var2.ParentalControlledQuests3PDataOptedOut;
                var3 = var4.updateControlledSetting;
                var2 = null;
                var5 = var2 != var1;
                var2 = undefined;
                if (!var5) {
                    _fun88965_ip = 65;
                    continue _fun88965
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
    var1.onValueChange = var9;
    var8 = function() {
        _fun88966: for (var _fun88966_ip = 0;;) switch (_fun88966_ip) {
            case 0:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var1 = var4[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var1 = var3.useSelectedTeenId;
                var3 = var1.bind(var3)();
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.ParentalControlledDropsOptedOut;
                var1 = var2.useControlledSetting;
                var4 = null;
                var4 = var4 != var3;
                if (!var4) {
                    _fun88966_ip = 71;
                    continue _fun88966
                }
            case 68:
                var0 = var3;
            case 71:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.useIsDisabled = var8;
    var1.unsearchable = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ParentalControlsUseDataForQuests3PSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4593, 7005, 6511, 10432, 8996, 1234, 2]);