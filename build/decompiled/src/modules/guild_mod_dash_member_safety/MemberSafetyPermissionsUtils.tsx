// modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var9;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot6;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot10;
            var2 = _closure2_slot0;
            var4 = _closure1_slot4;
            var1 = new Array(2);
            var1[0] = var4;
            var0 = _closure1_slot6;
            var1[1] = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var4 = var9[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var4 = var4.MemberSafetyPagePermissions;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var6 = function arg0() {
        _fun50040: for (var _fun50040_ip = 0;;) switch (_fun50040_ip) {
            case 0:
                var3 = arguments[1];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun50040_ip = 35;
                    continue _fun50040
                }
            case 9:
                var4 = _closure1_slot7;
                var1 = new Array(2);
                var1[0] = var4;
                var2 = _closure1_slot8;
                var1[1] = var2;
                var3 = var1;
            case 35:
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var0)(var3, var1);
                var1 = 0;
                var4 = var2[var1];
                var1 = 1;
                var2 = var2[var1];
                var3 = var4.getGuild;
                var1 = arg0;
                var1 = var3.bind(var4)(var1);
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var _closure1_slot9 = var6;
    var5 = function arg0() {
        _fun50041: for (var _fun50041_ip = 0;;) switch (_fun50041_ip) {
            case 0:
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun50041_ip = 35;
                    continue _fun50041
                }
            case 9:
                var4 = _closure1_slot4;
                var0 = new Array(2);
                var0[0] = var4;
                var1 = _closure1_slot6;
                var0[1] = var1;
                var3 = var0;
            case 35:
                var1 = _closure1_slot9;
                var0 = arg0;
                var0 = var1.bind(var2)(var0, var3);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function arg0() {
        _fun50042: for (var _fun50042_ip = 0;;) switch (_fun50042_ip) {
            case 0:
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun50042_ip = 35;
                    continue _fun50042
                }
            case 9:
                var4 = _closure1_slot4;
                var0 = new Array(2);
                var0[0] = var4;
                var1 = _closure1_slot6;
                var0[1] = var1;
                var3 = var0;
            case 35:
                var1 = _closure1_slot9;
                var0 = arg0;
                var0 = var1.bind(var2)(var0, var3);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.getContextForPermission = var6;
    var2.canAccessMemberSafetyPage = var5;
    var2.hasBulkBanningPermissions = var4;
    var2.useCanAccessMemberSafetyPage = var3;
    var3 = function arg0() {
        _fun50043: for (var _fun50043_ip = 0;;) switch (_fun50043_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var0 = _closure1_slot12;
                var5 = undefined;
                var0 = var0.bind(var5)(var6);
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 8;
                var3 = var7[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.useStateFromStores;
                var7 = _closure1_slot4;
                var3 = new Array(2);
                var3[0] = var7;
                var2 = _closure1_slot6;
                var3[1] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot11;
                    var2 = _closure2_slot0;
                    var4 = _closure1_slot4;
                    var1 = new Array(2);
                    var1[0] = var4;
                    var0 = _closure1_slot6;
                    var1[1] = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    var0 = false;
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var1, var2);
                if (!var0) {
                    _fun50043_ip = 94;
                    continue _fun50043
                }
            case 91:
                var0 = var1;
            case 94:
                return var0;
        }
    };
    var2.useCanAccessBulkBanningFeature = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot5;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun50046: for (var _fun50046_ip = 0;;) switch (_fun50046_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var3)(var0);
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun50046_ip = 59;
                        continue _fun50046
                    }
                case 33:
                    var3 = _closure1_slot5;
                    var2 = var3.can;
                    var1 = _closure1_slot8;
                    var1 = var1.MANAGE_GUILD;
                    var0 = var2.bind(var3)(var1, var4);
                case 59:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanAccessInviteCodeFeature = var3;
    var3 = function arg0, arg1, arg2() {
        var6 = arg0;
        var7 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var8 = _closure1_slot5;
        var2 = new Array(2);
        var2[0] = var8;
        var1 = _closure1_slot4;
        var2[1] = var1;
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var0 = function() { // Environment: var0
            _fun50048: for (var _fun50048_ip = 0;;) switch (_fun50048_ip) {
                case 0:
                    var4 = _closure1_slot4;
                    var1 = var4.getGuild;
                    var0 = _closure2_slot0;
                    var6 = var1.bind(var4)(var0);
                    var0 = null;
                    var0 = var0 != var6;
                    if (!var0) {
                        _fun50048_ip = 74;
                        continue _fun50048
                    }
                case 33:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun50048_ip = 71;
                        continue _fun50048
                    }
                case 40:
                    var5 = _closure1_slot5;
                    var4 = var5.canManageUser;
                    var3 = _closure1_slot8;
                    var3 = var3.BAN_MEMBERS;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2, var6);
                case 71:
                    var0 = var1;
                case 74:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanBulkBanUser = var3;
    var1 = function arg0, arg1, arg2() {
        _fun50049: for (var _fun50049_ip = 0;;) switch (_fun50049_ip) {
            case 0:
                var1 = arg1;
                var4 = _closure1_slot4;
                var3 = var4.getGuild;
                var0 = arg0;
                var6 = var3.bind(var4)(var0);
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun50049_ip = 68;
                    continue _fun50049
                }
            case 32:
                if (!var1) {
                    _fun50049_ip = 65;
                    continue _fun50049
                }
            case 35:
                var5 = _closure1_slot5;
                var4 = var5.canManageUser;
                var2 = _closure1_slot8;
                var3 = var2.BAN_MEMBERS;
                var2 = arg2;
                var1 = var4.bind(var5)(var3, var2, var6);
            case 65:
                var0 = var1;
            case 68:
                return var0;
        }
    };
    var2.canBulkBanUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1410, 3091, 1621, 3095, 660, 484, 3096, 566, 2]);