// modules/instant_invite/useInviteAssignableRoles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isEveryoneRole;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/useInviteAssignableRoles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var7 = arg0;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var4.bind(var2)(var3);
        var5 = var6.useStateFromStoresObject;
        var2 = _closure1_slot5;
        var4 = new Array(3);
        var4[0] = var2;
        var2 = _closure1_slot7;
        var4[1] = var2;
        var2 = _closure1_slot6;
        var4[2] = var2;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() { // Environment: var0
            _fun117146: for (var _fun117146_ip = 0;;) switch (_fun117146_ip) {
                case 0:
                    var0 = {};
                    var1 = _closure2_slot0;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun117146_ip = 21;
                        continue _fun117146
                    }
                case 15:
                    var1 = new Array(0);
                    _fun117146_ip = 48;
                    continue _fun117146;
                case 21:
                    var6 = _closure1_slot5;
                    var5 = var6.getSortedRoles;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var1 = var5.bind(var6)(var3);
                case 48:
                    var0.sortedRoles = var1;
                    var5 = _closure1_slot7;
                    var1 = var5.getCurrentUser;
                    var1 = var1.bind(var5)();
                    var0.currentUser = var1;
                    var1 = _closure2_slot0;
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun117146_ip = 115;
                        continue _fun117146
                    }
                case 85:
                    var5 = _closure1_slot6;
                    var4 = var5.can;
                    var3 = _closure1_slot8;
                    var3 = var3.MANAGE_ROLES;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
                case 115:
                    var0.canManageRoles = var1;
                    return var0;
            }
        };
        var2 = var5.bind(var6)(var4, var2, var3);
        var4 = var2.sortedRoles;
        var _closure2_slot1 = var4;
        var6 = var2.currentUser;
        var _closure2_slot2 = var6;
        var5 = var2.canManageRoles;
        var _closure2_slot3 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun117147: for (var _fun117147_ip = 0;;) switch (_fun117147_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun117147_ip = 107;
                        continue _fun117147
                    }
                case 15:
                    var2 = _closure2_slot2;
                    if (!(var3 != var2)) {
                        _fun117147_ip = 107;
                        continue _fun117147
                    }
                case 23:
                    var2 = _closure2_slot3;
                    if (!var2) {
                        _fun117147_ip = 107;
                        continue _fun117147
                    }
                case 30:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.getHighestRole;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot1;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun117148: for (var _fun117148_ip = 0;;) switch (_fun117148_ip) {
                            case 0:
                                var8 = arg0;
                                var0 = _closure1_slot4;
                                var5 = undefined;
                                var0 = var0.bind(var5)(var8);
                                var0 = !var0;
                                if (!var0) {
                                    _fun117148_ip = 136;
                                    continue _fun117148
                                }
                            case 23:
                                var1 = var8.managed;
                                var1 = !var1;
                                if (!var1) {
                                    _fun117148_ip = 133;
                                    continue _fun117148
                                }
                            case 35:
                                var4 = var8.tags;
                                var2 = null;
                                var6 = var2 == var4;
                                var2 = undefined;
                                if (var6) {
                                    _fun117148_ip = 58;
                                    continue _fun117148
                                }
                            case 52:
                                var2 = var4.guild_connections;
                            case 58:
                                var2 = var5 === var2;
                                if (!var2) {
                                    _fun117148_ip = 130;
                                    continue _fun117148
                                }
                            case 65:
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 7;
                                var3 = var6[var3];
                                var7 = var4.bind(var5)(var3);
                                var6 = var7.isRoleHigher;
                                var12 = _closure2_slot0;
                                var3 = _closure2_slot2;
                                var11 = var3.id;
                                var10 = _closure3_slot0;
                                var13 = var7;
                                var9 = var8;
                                var3 = var13[var6](var12, var11, var10, var9, var8);
                                var3 = !var3;
                                var2 = !var3;
                            case 130:
                                var1 = var2;
                            case 133:
                                var0 = var1;
                            case 136:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                case 107:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1666, 1665, 3050, 1613, 660, 566, 3055, 2]);