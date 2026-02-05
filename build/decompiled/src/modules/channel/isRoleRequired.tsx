// modules/channel/isRoleRequired.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
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
    var3 = var3.GUILD_NON_CATEGORY_CHANNEL_TYPES;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/isRoleRequired.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun41749: for (var _fun41749_ip = 0;;) switch (_fun41749_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun41749_ip = 193;
                    continue _fun41749
                }
            case 12:
                var5 = var2.type;
                var1 = var2.guild_id;
                if (!(var0 != var1)) {
                    _fun41749_ip = 189;
                    continue _fun41749
                }
            case 29:
                var4 = _closure1_slot2;
                var3 = var4.has;
                var3 = var3.bind(var4)(var5);
                if (!var3) {
                    _fun41749_ip = 189;
                    continue _fun41749
                }
            case 52:
                var3 = var2.isGuildVocal;
                var3 = var3.bind(var2)();
                if (!var3) {
                    _fun41749_ip = 116;
                    continue _fun41749
                }
            case 65:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.canEveryoneRole;
                var3 = _closure1_slot3;
                var3 = var3.CONNECT;
                var3 = var4.bind(var5)(var3, var2);
                if (var3) {
                    _fun41749_ip = 116;
                    continue _fun41749
                }
            case 112:
                var3 = true;
                return var3;
            case 116:
                var3 = var2.permissionOverwrites;
                var2 = var2.guild_id;
                var2 = var3[var2];
                var0 = var0 != var2;
                if (!var0) {
                    _fun41749_ip = 187;
                    continue _fun41749
                }
            case 138:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.has;
                var2 = var2.deny;
                var1 = _closure1_slot3;
                var1 = var1.VIEW_CHANNEL;
                var0 = var3.bind(var4)(var2, var1);
            case 187:
                return var0;
            case 189:
                var0 = false;
                return var0;
            case 193:
                var0 = false;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 483, 3096, 484, 2]);