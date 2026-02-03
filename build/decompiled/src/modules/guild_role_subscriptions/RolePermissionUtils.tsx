// modules/guild_role_subscriptions/RolePermissionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1() {
        _fun24589: for (var _fun24589_ip = 0;;) switch (_fun24589_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun24589_ip = 142;
                    continue _fun24589
                }
            case 18:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var8 = 2;
                var1 = var1[var8];
                var7 = undefined;
                var9 = var2.bind(var7)(var1);
                var6 = var9.has;
                var2 = var4.deny;
                var1 = _closure1_slot3;
                var1 = var1.VIEW_CHANNEL;
                var1 = var6.bind(var9)(var2, var1);
                var2 = !var1;
                var1 = !var2;
                if (!var2) {
                    _fun24589_ip = 139;
                    continue _fun24589
                }
            case 79:
                var2 = var5.isGuildVocal;
                var2 = var2.bind(var5)();
                if (!var2) {
                    _fun24589_ip = 136;
                    continue _fun24589
                }
            case 92:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var6.has;
                var4 = var4.deny;
                var3 = _closure1_slot3;
                var3 = var3.CONNECT;
                var2 = var5.bind(var6)(var4, var3);
            case 136:
                var1 = var2;
            case 139:
                var0 = var1;
            case 142:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.hasPermission;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/RolePermissionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var3 = _closure1_slot2;
        var0 = _closure1_slot3;
        var2 = var0.VIEW_CHANNEL;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var2.hasViewChannelPermission = var4;
    var2.isChannelAccessDeniedBy = var3;
    var1 = function arg0, arg1() {
        _fun24591: for (var _fun24591_ip = 0;;) switch (_fun24591_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun24591_ip = 167;
                    continue _fun24591
                }
            case 18:
                var1 = _closure1_slot4;
                var8 = undefined;
                var1 = var1.bind(var8)(var6, var5);
                var1 = !var1;
                if (!var1) {
                    _fun24591_ip = 164;
                    continue _fun24591
                }
            case 42:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var9 = 2;
                var2 = var2[var9];
                var10 = var3.bind(var8)(var2);
                var7 = var10.has;
                var3 = var5.allow;
                var2 = _closure1_slot3;
                var2 = var2.VIEW_CHANNEL;
                var2 = var7.bind(var10)(var3, var2);
                var3 = !var2;
                var2 = !var3;
                if (var3) {
                    _fun24591_ip = 161;
                    continue _fun24591
                }
            case 98:
                var3 = var6.isGuildVocal;
                var3 = var3.bind(var6)();
                var3 = !var3;
                if (var3) {
                    _fun24591_ip = 158;
                    continue _fun24591
                }
            case 114:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var9];
                var7 = var7.bind(var8)(var6);
                var6 = var7.has;
                var5 = var5.allow;
                var4 = _closure1_slot3;
                var4 = var4.CONNECT;
                var3 = var6.bind(var7)(var5, var4);
            case 158:
                var2 = var3;
            case 161:
                var1 = var2;
            case 164:
                var0 = var1;
            case 167:
                return var0;
        }
    };
    var2.isChannelAccessGrantedBy = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1666, 660, 484, 2]);