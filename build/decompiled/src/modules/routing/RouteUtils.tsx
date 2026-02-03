// modules/routing/RouteUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.PSEUDO_GUILD_IDS;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.isStaticChannelRoute;
    var _closure1_slot1 = var4;
    var4 = /^\d+$/;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.fileFinishedImporting;
    var4 = 'modules/routing/RouteUtils.tsx';
    var4 = var7.bind(var8)(var4);
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.RouteParam;
    var2.RouteParam = var4;
    var2.isPseudoGuildId = var3;
    var3 = function arg0() {
        _fun28030: for (var _fun28030_ip = 0;;) switch (_fun28030_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun28030_ip = 58;
                    continue _fun28030
                }
            case 12:
                var3 = _closure1_slot3;
                var1 = undefined;
                var1 = var3.bind(var1)(var4);
                var3 = !var1;
                var1 = !var3;
                if (!var3) {
                    _fun28030_ip = 55;
                    continue _fun28030
                }
            case 35:
                var3 = _closure1_slot2;
                var2 = var3.test;
                var2 = var2.bind(var3)(var4);
                var2 = !var2;
                var1 = !var2;
            case 55:
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var2.isValidGuildId = var3;
    var1 = function arg0() {
        _fun28031: for (var _fun28031_ip = 0;;) switch (_fun28031_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 == var4;
                if (var0) {
                    _fun28031_ip = 58;
                    continue _fun28031
                }
            case 12:
                var3 = _closure1_slot2;
                var1 = var3.test;
                var1 = var1.bind(var3)(var4);
                var3 = !var1;
                var1 = !var3;
                if (!var3) {
                    _fun28031_ip = 55;
                    continue _fun28031
                }
            case 38:
                var3 = _closure1_slot1;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var2 = !var2;
                var1 = !var2;
            case 55:
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var2.isValidChannelId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [661, 1379, 2, 3229]);