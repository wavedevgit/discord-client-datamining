// modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildPowerupsGameServerCard, environment: var1
        _fun102909: for (var _fun102909_ip = 0;;) switch (_fun102909_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.guildId;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var2 = var7[var2];
                var4 = undefined;
                var6 = var5.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var8 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var5.bind(var6)(var2, var0);
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var7[var2];
                var2 = var5.bind(var4)(var2);
                var6 = var2.bind(var4)(var3);
                var2 = 4;
                var2 = var7[var2];
                var2 = var5.bind(var4)(var2);
                var9 = var2.bind(var4)(var3);
                var2 = 5;
                var2 = var7[var2];
                var8 = var5.bind(var4)(var2);
                var7 = null;
                var2 = var7 != var9;
                var5 = undefined;
                if (!var2) {
                    _fun102909_ip = 133;
                    continue _fun102909
                }
            case 130:
                var5 = var9;
            case 133:
                var2 = true;
                var8 = var8.bind(var4)(var5, var2);
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 6;
                var2 = var10[var2];
                var2 = var5.bind(var4)(var2);
                var5 = var2.bind(var4)(var3, var9);
                var2 = var7 == var0;
                var0 = null;
                if (var2) {
                    _fun102909_ip = 289;
                    continue _fun102909
                }
            case 176:
                var2 = var7 == var9;
                var0 = null;
                if (var2) {
                    _fun102909_ip = 289;
                    continue _fun102909
                }
            case 185:
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 7;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var10 = var9.title;
                var1.title = var10;
                var10 = var9.description;
                var1.description = var10;
                var9 = var9.cost;
                var1.cost = var9;
                var9 = '+';
                var1.costDecorator = var9;
                var9 = var7 != var8;
                var7 = '';
                if (!var9) {
                    _fun102909_ip = 263;
                    continue _fun102909
                }
            case 260:
                var7 = var8;
            case 263:
                var1.imageUrl = var7;
                var7 = false;
                var1.isImageAnimated = var7;
                var1.status = var6;
                var1.onPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 289:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6672, 33, 566, 13395, 9865, 13363, 13360, 13386, 2]);