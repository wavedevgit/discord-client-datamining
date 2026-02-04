// modules/user_settings/native/defs/ParentalControlsFriendRequestsEveryoneSetting.tsx
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
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var3 = var5[var1];
    var1 = metroImportDefault;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.AllFriendSourceFlags;
    var _closure1_slot4 = var3;
    var1 = var1.FriendSourceFlags;
    var _closure1_slot5 = var1;
    var1 = 7;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.mGr3CX;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var1.parent = var9;
    var9 = function() {
        _fun88933: for (var _fun88933_ip = 0;;) switch (_fun88933_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
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
                    _fun88933_ip = 51;
                    continue _fun88933
                }
            case 48:
                var4 = var2;
            case 51:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 5;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.ParentalControlledFriendSourceFlags;
                var2 = var3.useControlledSetting;
                var4 = var2.bind(var3)(var4);
                var _closure2_slot0 = var4;
                var3 = _closure1_slot2;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
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
                var0 = var0.all;
                return var0;
        }
    };
    var1.useValue = var9;
    var8 = function arg0() {
        _fun88935: for (var _fun88935_ip = 0;;) switch (_fun88935_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getSelectedTeenId;
                var3 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var3)) {
                    _fun88935_ip = 95;
                    continue _fun88935
                }
            case 23:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var2 = var1.ParentalControlledFriendSourceFlags;
                var1 = var2.updateControlledSetting;
                var4 = _closure1_slot4;
                var5 = arg0;
                if (var5) {
                    _fun88935_ip = 86;
                    continue _fun88935
                }
            case 67:
                var0 = _closure1_slot5;
                var0 = var0.NO_RELATION;
                var0 = ~var0;
                var0 = var4 & var0;
                _fun88935_ip = 89;
                continue _fun88935;
            case 86:
                var0 = var4;
            case 89:
                var0 = var1.bind(var2)(var3, var0);
            case 95:
                var0 = undefined;
                return var0;
        }
    };
    var1.onValueChange = var8;
    var1.unsearchable = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ParentalControlsFriendRequestsEveryoneSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4593, 7008, 660, 6511, 10435, 7228, 8999, 1234, 2]);