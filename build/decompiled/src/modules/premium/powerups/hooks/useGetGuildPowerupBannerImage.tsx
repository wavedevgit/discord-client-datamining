// modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun102939: for (var _fun102939_ip = 0;;) switch (_fun102939_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun102939_ip = 13;
                    continue _fun102939
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = arg1;
                if (var0) {
                    _fun102939_ip = 52;
                    continue _fun102939
                }
            case 19:
                var3 = false;
                var0 = arg2;
                if (!(var3 !== var0)) {
                    _fun102939_ip = 52;
                    continue _fun102939
                }
            case 28:
                var0 = arg3;
                if (var0) {
                    _fun102939_ip = 52;
                    continue _fun102939
                }
            case 34:
                var0 = var1.animatedImageUrl;
                if (!(var2 == var0)) {
                    _fun102939_ip = 50;
                    continue _fun102939
                }
            case 44:
                var0 = var1.staticImageUrl;
            case 50:
                _fun102939_ip = 58;
                continue _fun102939;
            case 52:
                var0 = var1.staticImageUrl;
            case 58:
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1, arg2() {
        var5 = _closure1_slot3;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot2;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var8 = var2.bind(var3)(var1, var0);
        var9 = arg0;
        var7 = arg1;
        var6 = arg2;
        var10 = undefined;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.default = var3;
    var2.getGuildPowerupBannerImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 566, 2]);