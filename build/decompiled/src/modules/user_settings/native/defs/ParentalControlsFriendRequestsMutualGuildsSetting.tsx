// modules/user_settings/native/defs/ParentalControlsFriendRequestsMutualGuildsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportAll;
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
    var3 = var5[var1];
    var1 = metroImportDefault;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.FriendSourceFlags;
    var _closure1_slot5 = var1;
    var1 = 8;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 9;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.mozb8f;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var1.parent = var9;
    var9 = function() {
        _fun88926: for (var _fun88926_ip = 0;;) switch (_fun88926_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.useSelectedTeenId;
                var2 = var2.bind(var3)();
                var3 = null;
                var3 = var3 != var2;
                var4 = undefined;
                if (!var3) {
                    _fun88926_ip = 51;
                    continue _fun88926
                }
            case 48:
                var4 = var2;
            case 51:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.ParentalControlledFriendSourceFlags;
                var2 = var3.useControlledSetting;
                var4 = var2.bind(var3)(var4);
                var _closure2_slot0 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.computeFlags;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                var0 = var0.mutualGuilds;
                return var0;
        }
    };
    var1.useValue = var9;
    var8 = function arg0() {
        _fun88928: for (var _fun88928_ip = 0;;) switch (_fun88928_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.getSelectedTeenId;
                var3 = var0.bind(var1)();
                var0 = null;
                if (!(var0 != var3)) {
                    _fun88928_ip = 171;
                    continue _fun88928
                }
            case 26:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var5 = var2[var0];
                var6 = undefined;
                var5 = var1.bind(var6)(var5);
                var7 = var5.ParentalControlledFriendSourceFlags;
                var5 = var7.getControlledSetting;
                var7 = var5.bind(var7)(var3);
                var0 = var2[var0];
                var0 = var1.bind(var6)(var0);
                var2 = var0.ParentalControlledFriendSourceFlags;
                var1 = var2.updateControlledSetting;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var6 = var5.bind(var6)(var0);
                var0 = arg0;
                if (var0) {
                    _fun88928_ip = 143;
                    continue _fun88928
                }
            case 112:
                var8 = var6.removeFlags;
                var0 = _closure1_slot5;
                var5 = var0.MUTUAL_GUILDS;
                var0 = var0.NO_RELATION;
                var0 = var8.bind(var6)(var7, var5, var0);
                _fun88928_ip = 165;
                continue _fun88928;
            case 143:
                var5 = var6.addFlag;
                var4 = _closure1_slot5;
                var4 = var4.MUTUAL_GUILDS;
                var0 = var5.bind(var6)(var7, var4);
            case 165:
                var0 = var1.bind(var2)(var3, var0);
            case 171:
                var0 = undefined;
                return var0;
        }
    };
    var1.onValueChange = var8;
    var1.unsearchable = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ParentalControlsFriendRequestsMutualGuildsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4593, 7005, 660, 6511, 10432, 7225, 1384, 8996, 1234, 2]);