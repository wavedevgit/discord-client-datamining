// modules/premium/powerups/hooks/useLoadGuildPowerups.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useLoadGuildPowerups.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var2);
        var4 = var6.useGameServerEnabled;
        var2 = 'useLoadGuildPowerups';
        var2 = var4.bind(var6)(var5, var2);
        var _closure2_slot1 = var2;
        var4 = _closure1_slot2;
        var6 = var4.useEffect;
        var3 = new Array(2);
        var3[0] = var5;
        var3[1] = var2;
        var2 = function() { // Environment: var1
            _fun102199: for (var _fun102199_ip = 0;;) switch (_fun102199_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun102199_ip = 50;
                        continue _fun102199
                    }
                case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchGameServerCatalog;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var3 = var4[var1];
            var0 = undefined;
            var6 = var2.bind(var0)(var3);
            var5 = var6.fetchPowerupCatalogForGuild;
            var3 = _closure2_slot0;
            var5 = var5.bind(var6)(var3);
            var1 = var4[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.fetchGuildBoostEntitlements;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5604, 13291, 9877, 2]);