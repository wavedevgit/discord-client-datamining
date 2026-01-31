// modules/user_settings/native/defs/FriendRequestsEveryoneSetting.tsx
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
    var3 = var5[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.AllFriendSourceFlags;
    var _closure1_slot3 = var3;
    var1 = var1.FriendSourceFlags;
    var _closure1_slot4 = var1;
    var1 = 6;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() { // Original name: title, environment: var7
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 7;
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
    var1.title = var9;
    var8 = var8.CONTENT_AND_SOCIAL_DISCORD;
    var1.parent = var8;
    var8 = function() { // Original name: useFriendRequestsEveryoneSettingValue, environment: var7
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var3 = var2.FriendSourceFlagsSetting;
        var2 = var3.useSetting;
        var4 = var2.bind(var3)();
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
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
    };
    var1.useValue = var8;
    var8 = function(arg0) { // Original name: onFriendRequestsEveryoneSettingValueChange, environment: var7
        _fun82334: for (var _fun82334_ip = 0;;) switch (_fun82334_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = var2.FriendSourceFlagsSetting;
                var2 = var3.updateSetting;
                var4 = _closure1_slot3;
                var5 = arg0;
                if (var5) {
                    _fun82334_ip = 66;
                    continue _fun82334
                }
            case 47:
                var1 = _closure1_slot4;
                var1 = var1.NO_RELATION;
                var1 = ~var1;
                var1 = var4 & var1;
                _fun82334_ip = 69;
                continue _fun82334;
            case 66:
                var1 = var4;
            case 69:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.onValueChange = var8;
    var7 = function() { // Original name: useIsDisabled, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.useIsParentallyControlled;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.useIsDisabled = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/FriendRequestsEveryoneSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6967, 660, 1348, 7187, 10333, 8943, 1234, 2]);