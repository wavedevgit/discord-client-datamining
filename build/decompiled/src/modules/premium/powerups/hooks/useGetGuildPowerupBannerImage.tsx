// modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0, arg1, arg2() {
        _fun102457: for (var _fun102457_ip = 0;;) switch (_fun102457_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun102457_ip = 13;
                    continue _fun102457
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = arg1;
                if (var0) {
                    _fun102457_ip = 36;
                    continue _fun102457
                }
            case 19:
                var2 = false;
                var0 = arg2;
                if (!(var2 !== var0)) {
                    _fun102457_ip = 36;
                    continue _fun102457
                }
            case 28:
                var0 = var1.animatedImageUrl;
                _fun102457_ip = 42;
                continue _fun102457;
            case 36:
                var0 = var1.staticImageUrl;
            case 42:
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
    var3 = function arg0, arg1() {
        var4 = _closure1_slot3;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var1 = var3[var1];
        var3 = undefined;
        var5 = var2.bind(var3)(var1);
        var2 = var5.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot2;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var2 = var2.bind(var5)(var1, var0);
        var1 = arg0;
        var0 = arg1;
        var0 = var4.bind(var3)(var1, var2, var0);
        return var0;
    };
    var2.default = var3;
    var2.getGuildPowerupBannerImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 566, 2]);