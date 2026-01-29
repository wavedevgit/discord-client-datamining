// modules/user_settings/hooks/useAllowFriendsFromMutualGuildsOnly.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/hooks/useAllowFriendsFromMutualGuildsOnly.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useAllowFriendsFromMutualGuildsOnly, environment: var1
        _fun88797: for (var _fun88797_ip = 0;;) switch (_fun88797_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
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
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.computeFlags;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var0, var1);
                var0 = var1.mutualGuilds;
                if (!var0) {
                    _fun88797_ip = 95;
                    continue _fun88797
                }
            case 86:
                var1 = var1.all;
                var0 = !var1;
            case 95:
                return var0;
        }
    };
    var2.useAllowFriendsFromMutualGuildsOnly = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1348, 7185, 2]);