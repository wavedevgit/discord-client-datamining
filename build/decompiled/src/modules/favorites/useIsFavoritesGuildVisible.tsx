// modules/favorites/useIsFavoritesGuildVisible.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0, arg1, arg2() {
        _fun95017: for (var _fun95017_ip = 0;;) switch (_fun95017_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var0 = var1.getFavoriteChannels;
                var7 = var0.bind(var1)();
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var4 = 4;
                var1 = var1[var4];
                var3 = undefined;
                var5 = var5.bind(var3)(var1);
                var1 = var5.isEmpty;
                var1 = var1.bind(var5)(var7);
                if (var1) {
                    _fun95017_ip = 140;
                    continue _fun95017
                }
            case 68:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var5 = 5;
                var5 = var0[var5];
                var6 = var1.bind(var3)(var5);
                var5 = var6.keys;
                var6 = var5.bind(var6)(var7);
                var5 = var6.filter;
                var2 = function(arg0) { // Environment: var2
                    _fun95018: for (var _fun95018_ip = 0;;) switch (_fun95018_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var1 = var3.getChannel;
                            var0 = arg0;
                            var5 = var1.bind(var3)(var0);
                            var0 = null;
                            var0 = var0 != var5;
                            if (!var0) {
                                _fun95018_ip = 80;
                                continue _fun95018
                            }
                        case 29:
                            var1 = var5.isPrivate;
                            var1 = var1.bind(var5)();
                            var3 = !var1;
                            var1 = !var3;
                            if (!var3) {
                                _fun95018_ip = 77;
                                continue _fun95018
                            }
                        case 48:
                            var4 = _closure2_slot1;
                            var3 = var4.can;
                            var2 = _closure1_slot6;
                            var2 = var2.VIEW_CHANNEL;
                            var1 = var3.bind(var4)(var2, var5);
                        case 77:
                            var0 = var1;
                        case 80:
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2);
                var0 = var0[var4];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isEmpty;
                var0 = var0.bind(var1)(var2);
                var0 = !var0;
                return var0;
            case 140:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/useIsFavoritesGuildVisible.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot5;
        var1 = new Array(3);
        var1[0] = var4;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = _closure1_slot4;
        var1[2] = var0;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = _closure1_slot4;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.isFavoritesGuildVisible = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3098, 1375, 483, 22, 21, 566, 2]);