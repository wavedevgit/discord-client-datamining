// modules/reactions/canAddNewReactions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reactions/canAddNewReactions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun57454: for (var _fun57454_ip = 0;;) switch (_fun57454_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.getGuildId;
                var4 = var0.bind(var2)();
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun57454_ip = 40;
                    continue _fun57454
                }
            case 22:
                var3 = _closure1_slot0;
                var1 = var3.canChatInGuild;
                var0 = var1.bind(var3)(var4);
            case 40:
                if (!var0) {
                    _fun57454_ip = 72;
                    continue _fun57454
                }
            case 43:
                var4 = _closure1_slot1;
                var3 = var4.can;
                var1 = _closure1_slot2;
                var1 = var1.ADD_REACTIONS;
                var0 = var3.bind(var4)(var1, var2);
            case 72:
                if (var0) {
                    _fun57454_ip = 85;
                    continue _fun57454
                }
            case 75:
                var1 = var2.isPrivate;
                var0 = var1.bind(var2)();
            case 85:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4234, 3091, 660, 2]);