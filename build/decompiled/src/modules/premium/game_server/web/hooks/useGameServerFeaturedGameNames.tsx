// modules/premium/game_server/web/hooks/useGameServerFeaturedGameNames.tsx
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
    var3 = var3.GAME_SERVER_FEATURED_GAME_IDS;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/game_server/web/hooks/useGameServerFeaturedGameNames.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresObject;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun78062: for (var _fun78062_ip = 0;;) switch (_fun78062_ip) {
                case 0:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = 2;
                    var3 = var4.bind(var2)(var3, var1);
                    var1 = 0;
                    var4 = var3[var1];
                    var1 = 1;
                    var3 = var3[var1];
                    var1 = _closure1_slot3;
                    var0 = var1.getDetectableGame;
                    var4 = var0.bind(var1)(var4);
                    var0 = var1.getDetectableGame;
                    var3 = var0.bind(var1)(var3);
                    var0 = {};
                    var1 = null;
                    var6 = var1 == var4;
                    var5 = undefined;
                    if (var6) {
                        _fun78062_ip = 79;
                        continue _fun78062
                    }
                case 74:
                    var5 = var4.name;
                case 79:
                    var6 = var1 != var5;
                    var4 = 'Minecraft';
                    if (!var6) {
                        _fun78062_ip = 95;
                        continue _fun78062
                    }
                case 92:
                    var4 = var5;
                case 95:
                    var0.gameName = var4;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun78062_ip = 114;
                        continue _fun78062
                    }
                case 109:
                    var2 = var3.name;
                case 114:
                    var3 = var1 != var2;
                    var1 = 'Hytale';
                    if (!var3) {
                        _fun78062_ip = 130;
                        continue _fun78062
                    }
                case 127:
                    var1 = var2;
                case 130:
                    var0.gameName2 = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3445, 9875, 566, 2]);