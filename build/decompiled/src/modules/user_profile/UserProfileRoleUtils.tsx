// modules/user_profile/UserProfileRoleUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/UserProfileRoleUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun91711: for (var _fun91711_ip = 0;;) switch (_fun91711_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var2 = var5.tags;
                var0 = null;
                var3 = var0 == var2;
                var6 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun91711_ip = 31;
                    continue _fun91711
                }
            case 25:
                var1 = var2.guild_connections;
            case 31:
                var1 = var6 !== var1;
                var2 = var4.tags;
                var3 = var0 == var2;
                var0 = undefined;
                if (var3) {
                    _fun91711_ip = 56;
                    continue _fun91711
                }
            case 50:
                var0 = var2.guild_connections;
            case 56:
                var2 = var6 !== var0;
                if (!var1) {
                    _fun91711_ip = 69;
                    continue _fun91711
                }
            case 63:
                var0 = 1;
                if (!var2) {
                    _fun91711_ip = 118;
                    continue _fun91711
                }
            case 69:
                if (var1) {
                    _fun91711_ip = 81;
                    continue _fun91711
                }
            case 72:
                var1 = -1;
                if (var2) {
                    _fun91711_ip = 115;
                    continue _fun91711
                }
            case 81:
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 0;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.compareGuildRoles;
                var1 = var2.bind(var3)(var5, var4);
            case 115:
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var2.sortRolesByVerification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1667, 2]);