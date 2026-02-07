// modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103031: for (var _fun103031_ip = 0;;) switch (_fun103031_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.guildId;
                var _closure2_slot0 = var10;
                var9 = var1.listing;
                var _closure2_slot1 = var9;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 3;
                var2 = var6[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var5 = var2.bind(var4)(var10, var9);
                var7 = _closure1_slot0;
                var2 = 4;
                var2 = var6[var2];
                var11 = var7.bind(var4)(var2);
                var8 = var11.useStateFromStores;
                var2 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var8.bind(var11)(var7, var2);
                var2 = 5;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.guildId = var10;
                var6 = var9.powerups;
                var2.powerups = var6;
                var7 = var3.bind(var4)(var2);
                var6 = _closure1_slot3;
                var3 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var3 = _closure2_slot1;
                    var1.listing = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var3.bind(var6)(var0, var2);
                var3 = null;
                var2 = var3 == var7;
                var0 = null;
                if (var2) {
                    _fun103031_ip = 319;
                    continue _fun103031
                }
            case 183:
                var2 = var3 == var5;
                var0 = null;
                if (var2) {
                    _fun103031_ip = 319;
                    continue _fun103031
                }
            case 195:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var9 = var5.title;
                var1.title = var9;
                var9 = var5.description;
                var1.description = var9;
                var9 = var7.cost;
                var1.cost = var9;
                var9 = var5.image;
                if (var8) {
                    _fun103031_ip = 267;
                    continue _fun103031
                }
            case 259:
                var8 = var9.animatedUrl;
                _fun103031_ip = 273;
                continue _fun103031;
            case 267:
                var8 = var9.staticUrl;
            case 273:
                var1.imageUrl = var8;
                var8 = var7.status;
                var1.status = var8;
                var7 = var7.costDecorator;
                var1.costDecorator = var7;
                var1.onPress = var6;
                var5 = var5.badge;
                var1.badge = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 319:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 33, 13450, 566, 13453, 13454, 13448, 2]);