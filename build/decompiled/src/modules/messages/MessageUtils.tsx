// modules/messages/MessageUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/MessageUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun70335: for (var _fun70335_ip = 0;;) switch (_fun70335_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = var2.getCurrentUser;
                var0 = var0.bind(var2)();
                var4 = _closure1_slot2;
                var3 = var4.getChannel;
                var2 = arg0;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun70335_ip = 46;
                    continue _fun70335
                }
            case 42:
                var0 = var2 != var3;
            case 46:
                if (!var0) {
                    _fun70335_ip = 85;
                    continue _fun70335
                }
            case 49:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.isChannelContentGated;
                var1 = var1.bind(var2)(var3);
                var0 = !var1;
            case 85:
                return var0;
        }
    };
    var2.canViewPotentiallyNSFWChannel = var3;
    var1 = function arg0() {
        _fun70336: for (var _fun70336_ip = 0;;) switch (_fun70336_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getChannel;
                var0 = arg0;
                var0 = var0.channel_id;
                var3 = var1.bind(var2)(var0);
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun70336_ip = 41;
                    continue _fun70336
                }
            case 36:
                var1 = var3.guild_id;
            case 41:
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun70336_ip = 53;
                    continue _fun70336
                }
            case 50:
                var0 = var1;
            case 53:
                return var0;
        }
    };
    var2.getGuildIdFromMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1621, 4551, 2]);