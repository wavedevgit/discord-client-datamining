// modules/guild_automod/GuildAutomodMessageStoreUtils.tsx
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
    var3 = 'modules/guild_automod/GuildAutomodMessageStoreUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun93360: for (var _fun93360_ip = 0;;) switch (_fun93360_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.MessageEmbedTypes;
                var0 = var0.AUTO_MODERATION_MESSAGE;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun93360_ip = 84;
                    continue _fun93360
                }
            case 51:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.MessageEmbedTypes;
                var1 = var1.AUTO_MODERATION_NOTIFICATION;
                var0 = var2 !== var1;
            case 84:
                return var0;
        }
    };
    var2.isNotAutomodEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [791, 2]);