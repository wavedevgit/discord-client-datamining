// modules/favorites/useGuildIdForChannelRoute.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/favorites/useGuildIdForChannelRoute.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun35613: for (var _fun35613_ip = 0;;) switch (_fun35613_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.useStateFromStores;
                var0 = _closure1_slot2;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var3.bind(var4)(var1, var0);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun35613_ip = 74;
                    continue _fun35613
                }
            case 64:
                var1 = var2.getGuildId;
                var0 = var1.bind(var2)();
            case 74:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun35615: for (var _fun35615_ip = 0;;) switch (_fun35615_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot2;
                var0 = var3.getGuildId;
                var3 = var0.bind(var3)();
                var0 = _closure1_slot4;
                if (!(var3 === var0)) {
                    _fun35615_ip = 106;
                    continue _fun35615
                }
            case 28:
                var4 = _closure1_slot3;
                var3 = var4.isFavorite;
                var0 = var2.id;
                var0 = var3.bind(var4)(var0);
                if (var0) {
                    _fun35615_ip = 100;
                    continue _fun35615
                }
            case 51:
                var0 = var2.isThread;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun35615_ip = 88;
                    continue _fun35615
                }
            case 64:
                var4 = _closure1_slot3;
                var3 = var4.isFavorite;
                var0 = var2.parent_id;
                var0 = var3.bind(var4)(var0);
                if (var0) {
                    _fun35615_ip = 100;
                    continue _fun35615
                }
            case 88:
                var0 = var2.getGuildId;
                var0 = var0.bind(var2)();
                _fun35615_ip = 104;
                continue _fun35615;
            case 100:
                var0 = _closure1_slot4;
            case 104:
                _fun35615_ip = 116;
                continue _fun35615;
            case 106:
                var1 = var2.getGuildId;
                var0 = var1.bind(var2)();
            case 116:
                return var0;
        }
    };
    var2.getGuildIdForGenericRedirect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3214, 1375, 660, 566, 2]);