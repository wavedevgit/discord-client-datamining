// ../discord_common/js/shared/utils/FlagUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = function arg0, arg1() {
        var1 = arg1;
        var0 = arg0;
        var0 = var0 & var1;
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot0 = var5;
    var4 = function arg0, arg1() {
        var1 = arg0;
        var0 = arg1;
        var0 = var1 | var0;
        return var0;
    };
    var _closure1_slot1 = var4;
    var3 = function arg0, arg1() {
        var0 = arg1;
        var1 = ~var0;
        var0 = arg0;
        var0 = var0 & var1;
        return var0;
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var6 = arg6;
    var0 = 0;
    var7 = var6[var0];
    var6 = arg1;
    var0 = undefined;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/shared/utils/FlagUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.hasFlag = var5;
    var5 = function arg0, arg1() {
        var1 = arg0;
        var0 = arg1;
        var0 = var1 & var0;
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var2.hasAnyFlag = var5;
    var2.addFlag = var4;
    var2.removeFlag = var3;
    var3 = function arg0, arg1() {
        var5 = 1;
        var3 = copyRestArgs(var5);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = arg0;
            var0 = arg1;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.removeFlags = var3;
    var3 = function arg0, arg1, arg2() {
        _fun16192: for (var _fun16192_ip = 0;;) switch (_fun16192_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = arg2;
                if (var0) {
                    _fun16192_ip = 29;
                    continue _fun16192
                }
            case 15:
                var2 = _closure1_slot2;
                var0 = undefined;
                var0 = var2.bind(var0)(var4, var3);
                _fun16192_ip = 41;
                continue _fun16192;
            case 29:
                var2 = _closure1_slot1;
                var1 = undefined;
                var0 = var2.bind(var1)(var4, var3);
            case 41:
                return var0;
        }
    };
    var2.setFlag = var3;
    var1 = function arg0, arg1() {
        _fun16193: for (var _fun16193_ip = 0;;) switch (_fun16193_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = _closure1_slot0;
                var2 = undefined;
                var0 = var0.bind(var2)(var4, var3);
                if (var0) {
                    _fun16193_ip = 36;
                    continue _fun16193
                }
            case 24:
                var0 = _closure1_slot1;
                var0 = var0.bind(var2)(var4, var3);
                _fun16193_ip = 46;
                continue _fun16193;
            case 36:
                var1 = _closure1_slot2;
                var0 = var1.bind(var2)(var4, var3);
            case 46:
                return var0;
        }
    };
    var2.toggleFlag = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);