// modules/guild/GuildUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild/GuildUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun74035: for (var _fun74035_ip = 0;;) switch (_fun74035_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun74035_ip = 67;
                    continue _fun74035
                }
            case 15:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.joinGuild;
                var2 = var1.bind(var2)(var3);
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.transitionToGuildSync;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 67:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleJoinGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4642, 2]);