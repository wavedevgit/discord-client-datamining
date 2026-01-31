// records/GuildRoleRecord.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.TypeTag;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/GuildRoleRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 'GuildRole';
    var2.GuildRoleRecordTypeTag = var3;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.id;
        var0 = var0.guildId;
        var0 = var1 === var0;
        return var0;
    };
    var2.isEveryoneRole = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.has;
        var0 = arg0;
        var1 = var0.permissions;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.hasPermission = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.hasAny;
        var0 = arg0;
        var1 = var0.permissions;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.hasAnyPermission = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1411, 484, 2]);