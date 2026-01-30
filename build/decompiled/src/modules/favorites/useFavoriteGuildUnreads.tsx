// modules/favorites/useFavoriteGuildUnreads.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/favorites/useFavoriteGuildUnreads.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useFavoriteGuildUnreads, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresObject;
        var5 = _closure1_slot3;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = _closure1_slot5;
        var1[1] = var5;
        var5 = _closure1_slot6;
        var1[2] = var5;
        var4 = _closure1_slot4;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.keys;
            var0 = _closure2_slot0;
            var3 = var1.bind(var2)(var0);
            var2 = var3.reduce;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun101614: for (var _fun101614_ip = 0;;) switch (_fun101614_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = arg1;
                        var2 = _closure1_slot3;
                        var1 = var2.getChannel;
                        var8 = var1.bind(var2)(var6);
                        var7 = null;
                        var1 = var7 == var8;
                        var2 = undefined;
                        if (var1) {
                            _fun101614_ip = 44;
                            continue _fun101614
                        }
                    case 34:
                        var1 = var8.isGuildVocal;
                        var2 = var1.bind(var8)();
                    case 44:
                        var4 = var0.badge;
                        var9 = _closure1_slot5;
                        var1 = var9.getMentionCount;
                        var1 = var1.bind(var9)(var6);
                        var1 = var4 + var1;
                        var0.badge = var1;
                        var1 = var0.unread;
                        if (var1) {
                            _fun101614_ip = 178;
                            continue _fun101614
                        }
                    case 84:
                        var2 = !var2;
                        if (!var2) {
                            _fun101614_ip = 116;
                            continue _fun101614
                        }
                    case 90:
                        var10 = _closure1_slot4;
                        var9 = var10.can;
                        var4 = _closure1_slot7;
                        var4 = var4.VIEW_CHANNEL;
                        var2 = var9.bind(var10)(var4, var8);
                    case 116:
                        if (!var2) {
                            _fun101614_ip = 134;
                            continue _fun101614
                        }
                    case 119:
                        var9 = _closure1_slot5;
                        var4 = var9.hasUnread;
                        var2 = var4.bind(var9)(var6);
                    case 134:
                        if (!var2) {
                            _fun101614_ip = 175;
                            continue _fun101614
                        }
                    case 137:
                        var4 = _closure1_slot6;
                        var3 = var4.isChannelMuted;
                        var7 = var7 == var8;
                        var5 = undefined;
                        if (var7) {
                            _fun101614_ip = 166;
                            continue _fun101614
                        }
                    case 156:
                        var7 = var8.getGuildId;
                        var5 = var7.bind(var8)();
                    case 166:
                        var3 = var3.bind(var4)(var5, var6);
                        var2 = !var3;
                    case 175:
                        var1 = var2;
                    case 178:
                        var0.unread = var1;
                        return var0;
                }
            };
            var0 = {
                'badge': 0,
                'unread': false
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3050, 3907, 4266, 483, 566, 21, 2]);