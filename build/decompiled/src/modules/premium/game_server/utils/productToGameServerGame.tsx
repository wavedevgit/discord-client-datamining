// modules/premium/game_server/utils/productToGameServerGame.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/premium/game_server/utils/productToGameServerGame.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun102263: for (var _fun102263_ip = 0;;) switch (_fun102263_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.skus;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var0 = var2.tenant_metadata;
                    var3 = var0.plan_features;
                    var1 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.title;
                        var0.title = var2;
                        var1 = var1.description;
                        var0.description = var1;
                        return var0;
                    };
                    var1 = var1.bind(var3)(var0);
                    var0 = {};
                    var3 = var2.id;
                    var0.id = var3;
                    var3 = var2.name;
                    var0.name = var3;
                    var2 = var2.tenant_metadata;
                    var2 = var2.boost_price;
                    var0.cost = var2;
                    var0.specifications = var1;
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.sort;
                var2 = function(arg0, arg1) { // Environment: var0
                    var0 = arg1;
                    var1 = var0.cost;
                    var0 = arg0;
                    var0 = var0.cost;
                    var0 = var1 - var0;
                    return var0;
                };
                var5 = var3.bind(var4)(var2);
                var2 = var5.length;
                var7 = 0;
                var3 = var2 > var7;
                var2 = 0;
                if (!var3) {
                    _fun102263_ip = 118;
                    continue _fun102263
                }
            case 62:
                var3 = global;
                var4 = var3.Math;
                var3 = var4.min;
                var6 = var5.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.cost;
                    return var0;
                };
                var10 = var6.bind(var5)(var0);
                var0 = new Array(0);
                var11 = var0;
                var9 = 0;
                var6 = arraySpread(var11, var10, var9);
                var11 = var3;
                var10 = var0;
                var9 = var4;
                var2 = apply(var11, var10, var9);
            case 118:
                var0 = {};
                var3 = var1.id;
                var0.id = var3;
                var3 = var1.name;
                var0.name = var3;
                var6 = var1.tenant_metadata;
                var3 = null;
                var8 = var3 == var6;
                var7 = undefined;
                if (var8) {
                    _fun102263_ip = 191;
                    continue _fun102263
                }
            case 155:
                var6 = var6.guild_monetization;
                var8 = var3 == var6;
                var7 = undefined;
                if (var8) {
                    _fun102263_ip = 191;
                    continue _fun102263
                }
            case 170:
                var6 = var6.game_server;
                var8 = var3 == var6;
                var7 = undefined;
                if (var8) {
                    _fun102263_ip = 191;
                    continue _fun102263
                }
            case 185:
                var7 = var6.game_application_id;
            case 191:
                var8 = var3 != var7;
                var6 = '';
                if (!var8) {
                    _fun102263_ip = 205;
                    continue _fun102263
                }
            case 202:
                var6 = var7;
            case 205:
                var0.gameId = var6;
                var7 = var1.tenant_metadata;
                var8 = var3 == var7;
                var6 = undefined;
                if (var8) {
                    _fun102263_ip = 261;
                    continue _fun102263
                }
            case 225:
                var7 = var7.guild_monetization;
                var8 = var3 == var7;
                var6 = undefined;
                if (var8) {
                    _fun102263_ip = 261;
                    continue _fun102263
                }
            case 240:
                var7 = var7.game_server;
                var8 = var3 == var7;
                var6 = undefined;
                if (var8) {
                    _fun102263_ip = 261;
                    continue _fun102263
                }
            case 255:
                var6 = var7.provider;
            case 261:
                var0.provider = var6;
                var0.plans = var5;
                var0.baseCost = var2;
                var5 = var1.tenant_metadata;
                var6 = var3 == var5;
                var2 = undefined;
                if (var6) {
                    _fun102263_ip = 326;
                    continue _fun102263
                }
            case 291:
                var5 = var5.guild_monetization;
                var6 = var3 == var5;
                var2 = undefined;
                if (var6) {
                    _fun102263_ip = 326;
                    continue _fun102263
                }
            case 306:
                var5 = var5.game_server;
                var6 = var3 == var5;
                var2 = undefined;
                if (var6) {
                    _fun102263_ip = 326;
                    continue _fun102263
                }
            case 321:
                var2 = var5.disabled;
            case 326:
                var0.disabled = var2;
                var2 = var1.tenant_metadata;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun102263_ip = 381;
                    continue _fun102263
                }
            case 345:
                var2 = var2.guild_monetization;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun102263_ip = 381;
                    continue _fun102263
                }
            case 360:
                var2 = var2.game_server;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun102263_ip = 381;
                    continue _fun102263
                }
            case 375:
                var1 = var2.early_access;
            case 381:
                var0.early_access = var1;
                return var0;
        }
    };
    var2.productToGameServerGame = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);