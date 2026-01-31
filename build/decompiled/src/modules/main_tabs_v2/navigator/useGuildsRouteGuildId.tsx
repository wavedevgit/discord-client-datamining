// modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx
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
    var3 = 'modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useGuildsRouteGuildId, environment: var1
        _fun100712: for (var _fun100712_ip = 0;;) switch (_fun100712_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.useRoute;
                var1 = var1.bind(var2)();
                var1 = var1.params;
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun100712_ip = 54;
                    continue _fun100712
                }
            case 49:
                var0 = var1.guildId;
            case 54:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function() { // Original name: useGuildsRouteGuildAndChannelId, environment: var1
        _fun100713: for (var _fun100713_ip = 0;;) switch (_fun100713_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.useRoute;
                var2 = var0.bind(var1)();
                var3 = null;
                var0 = var3 == var2;
                var1 = undefined;
                if (var0) {
                    _fun100713_ip = 65;
                    continue _fun100713
                }
            case 45:
                var0 = var2.params;
                var5 = var3 == var0;
                var1 = undefined;
                if (var5) {
                    _fun100713_ip = 65;
                    continue _fun100713
                }
            case 60:
                var1 = var0.guildId;
            case 65:
                var0 = new Array(2);
                var0[0] = var1;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun100713_ip = 102;
                    continue _fun100713
                }
            case 82:
                var2 = var2.params;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun100713_ip = 102;
                    continue _fun100713
                }
            case 97:
                var1 = var2.channelId;
            case 102:
                var0[1] = var1;
                return var0;
        }
    };
    var2.useGuildsRouteGuildAndChannelId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1470, 2]);