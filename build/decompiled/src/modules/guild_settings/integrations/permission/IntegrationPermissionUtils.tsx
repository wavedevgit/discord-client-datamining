// modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot3 = var3;
    var0 = function arg0, arg1() {
        _fun40989: for (var _fun40989_ip = 0;;) switch (_fun40989_ip) {
            case 0:
                var9 = arg1;
                var0 = {};
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = arg0;
                var8 = var2.bind(var3)(var1);
                var1 = var8.length;
                var7 = 0;
                var1 = var7 < var1;
                var5 = undefined;
                var4 = 2;
                var3 = 1;
                var2 = 0;
                if (!var1) {
                    _fun40989_ip = 110;
                    continue _fun40989
                }
            case 54:
                var10 = var8[var2];
                var1 = _closure1_slot2;
                var1 = var1.bind(var5)(var10, var4);
                var10 = var1[var7];
                var1 = var1[var3];
                var12 = var9.includes;
                var11 = var1.type;
                var11 = var12.bind(var9)(var11);
                if (!var11) {
                    _fun40989_ip = 98;
                    continue _fun40989
                }
            case 94:
                var0[var10] = var1;
            case 98:
                var2 = var2 + 1;
                var1 = var8.length;
                if (var2 < var1) {
                    _fun40989_ip = 54;
                    continue _fun40989
                }
            case 110:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun40990: for (var _fun40990_ip = 0;;) switch (_fun40990_ip) {
            case 0:
                var2 = arg1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                var0 = var0.ApplicationCommandType;
                var3 = var0.CHAT;
                var1 = arg0;
                var0 = var2;
                if (!(var1 === var3)) {
                    _fun40990_ip = 58;
                    continue _fun40990
                }
            case 50:
                var1 = '/';
                var0 = var1 + var2;
            case 58:
                return var0;
        }
    };
    var2.commandName = var4;
    var4 = function arg0() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.ApplicationCommandPermissionType;
        var0 = var0.CHANNEL;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.commandPermissionChannels = var4;
    var4 = function arg0() {
        var3 = _closure1_slot4;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var1.ApplicationCommandPermissionType;
        var6 = var1.ROLE;
        var1 = new Array(2);
        var1[0] = var6;
        var0 = var5[var0];
        var0 = var4.bind(var2)(var0);
        var0 = var0.ApplicationCommandPermissionType;
        var0 = var0.USER;
        var1[1] = var0;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.commandPermissionMembersRoles = var4;
    var2.toPermissionKey = var3;
    var1 = function arg0() {
        var4 = arg0;
        var0 = global;
        var2 = var0.Object;
        var1 = var2.fromEntries;
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var4 = _closure1_slot3;
            var3 = var1.id;
            var2 = var1.type;
            var0 = undefined;
            var2 = var4.bind(var0)(var3, var2);
            var0 = new Array(2);
            var0[0] = var2;
            var0[1] = var1;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.keyPermissions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1645, 4547, 2]);