// modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 2;
        var0 = var7[var4];
        var5 = undefined;
        var10 = var6.bind(var5)(var0);
        var9 = var10.useStateFromStores;
        var3 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var3;
        var0 = function() { // Environment: var1
            _fun60011: for (var _fun60011_ip = 0;;) switch (_fun60011_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun60011_ip = 38;
                        continue _fun60011
                    }
                case 16:
                    var3 = _closure1_slot4;
                    var2 = var3.getRequest;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var0 = var9.bind(var10)(var8, var0);
        var4 = var7[var4];
        var6 = var6.bind(var5)(var4);
        var5 = var6.useStateFromStores;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var1
            var0 = _closure1_slot4;
            var0 = var0.hasFetchedRequestToJoinGuilds;
            return var0;
        };
        var5 = var5.bind(var6)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun60013: for (var _fun60013_ip = 0;;) switch (_fun60013_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun60013_ip = 45;
                        continue _fun60013
                    }
                case 10:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.fetchRequestToJoinGuilds;
                    var0 = var0.bind(var1)();
                case 45:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3214, 566, 7441, 2]);