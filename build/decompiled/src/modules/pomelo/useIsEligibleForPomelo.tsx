// modules/pomelo/useIsEligibleForPomelo.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun81729: for (var _fun81729_ip = 0;;) switch (_fun81729_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun81729_ip = 25;
                    continue _fun81729
                }
            case 12:
                var1 = var2.hasUniqueUsername;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 25:
                if (!var0) {
                    _fun81729_ip = 59;
                    continue _fun81729
                }
            case 28:
                var1 = var2.hasVerifiedEmailOrPhone;
                var1 = var1.bind(var2)();
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun81729_ip = 56;
                    continue _fun81729
                }
            case 47:
                var2 = arg1;
                var2 = !var2;
                var1 = !var2;
            case 56:
                var0 = var1;
            case 59:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
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
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/useIsEligibleForPomelo.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = _closure1_slot2;
        var1 = var2.getCurrentUser;
        var2 = var1.bind(var2)();
        var4 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var0 = var1[var0];
        var1 = undefined;
        var4 = var4.bind(var1)(var0);
        var0 = var4.getPomeloEligibility;
        var0 = var0.bind(var4)();
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var2.isEligibleForPomelo = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 2;
        var1 = var5[var1];
        var2 = undefined;
        var7 = var4.bind(var2)(var1);
        var6 = var7.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot2;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var6.bind(var7)(var1, var0);
        var0 = 1;
        var0 = var5[var0];
        var4 = var4.bind(var2)(var0);
        var0 = var4.usePomeloEligibility;
        var0 = var0.bind(var4)();
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.useIsEligibleForPomelo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 10404, 632, 2]);