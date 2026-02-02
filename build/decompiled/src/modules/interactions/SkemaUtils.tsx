// modules/interactions/SkemaUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun56013: for (var _fun56013_ip = 0;;) switch (_fun56013_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var1 = _closure1_slot1;
                var1 = var4[var1];
                var6 = null;
                if (!(var6 != var1)) {
                    _fun56013_ip = 44;
                    continue _fun56013
                }
            case 23:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun56013_ip = 165;
                    continue _fun56013
                }
            case 44:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.entries;
                var13 = var2.bind(var3)(var4);
                var2 = var13.length;
                var12 = 0;
                var2 = var12 < var2;
                var11 = 'object';
                var4 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                if (!var2) {
                    _fun56013_ip = 144;
                    continue _fun56013
                }
            case 91:
                var3 = var13[var8];
                var2 = _closure1_slot0;
                var2 = var2.bind(var4)(var3, var10);
                var3 = var2[var12];
                var2 = var2[var9];
                var7 = _closure1_slot1;
                if (!(var3 !== var7)) {
                    _fun56013_ip = 132;
                    continue _fun56013
                }
            case 121:
                if (!(var6 != var2)) {
                    _fun56013_ip = 132;
                    continue _fun56013
                }
            case 125:
                var7 = typeof var2;
                if (!(var11 !== var7)) {
                    _fun56013_ip = 146;
                    continue _fun56013
                }
            case 132:
                var8 = var8 + 1;
                var7 = var13.length;
                if (var8 < var7) {
                    _fun56013_ip = 91;
                    continue _fun56013
                }
            case 144:
                return var6;
            case 146:
                var0 = _closure1_slot2;
                if (!(var6 != var5)) {
                    _fun56013_ip = 157;
                    continue _fun56013
                }
            case 154:
                var3 = var5;
            case 157:
                var0 = var0.bind(var4)(var2, var3);
                return var0;
            case 165:
                var0 = 0;
                var0 = var1[var0];
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = '_errors';
    var _closure1_slot1 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interactions/SkemaUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0, var1);
        return var0;
    };
    var2.getFirstSkemaError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 2]);