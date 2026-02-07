// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function arg0() {
        _fun49045: for (var _fun49045_ip = 0;;) switch (_fun49045_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var2 = var3.exec;
                var4 = var2.bind(var3)(var1);
                if (var4) {
                    _fun49045_ip = 71;
                    continue _fun49045
                }
            case 24:
                var2 = global;
                var5 = var2.console;
                var3 = var5.warn;
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var6 = '"';
                var2 = '" is not a valid percentage rgb/rgba color';
                var2 = var7.bind(var6)(var1, var2);
                var2 = var3.bind(var5)(var2);
                return var1;
            case 71:
                var1 = 1;
                var5 = var4[var1];
                var1 = 3;
                var3 = var4[var1];
                var1 = 5;
                var1 = var4[var1];
                var2 = 7;
                var7 = var4[var2];
                var2 = _closure1_slot1;
                var4 = undefined;
                var8 = var2.bind(var4)(var5);
                var2 = _closure1_slot1;
                var11 = var2.bind(var4)(var3);
                var0 = _closure1_slot1;
                var9 = var0.bind(var4)(var1);
                var1 = global;
                var0 = var1.HermesInternal;
                var2 = var0.concat;
                var14 = '';
                var6 = ', ';
                var13 = var8;
                var12 = var6;
                var10 = var6;
                var5 = var14[var2](var13, var12, var11, var10, var9, var8);
                if (var7) {
                    _fun49045_ip = 196;
                    continue _fun49045
                }
            case 167:
                var0 = var1.HermesInternal;
                var3 = var0.concat;
                var2 = 'rgb(';
                var0 = ')';
                var0 = var3.bind(var2)(var5, var0);
                _fun49045_ip = 271;
                continue _fun49045;
            case 196:
                var3 = var7.endsWith;
                var2 = '%';
                var2 = var3.bind(var7)(var2);
                var3 = var1.parseFloat;
                var3 = var3.bind(var4)(var7);
                if (var2) {
                    _fun49045_ip = 230;
                    continue _fun49045
                }
            case 225:
                var4 = var3;
                _fun49045_ip = 237;
                continue _fun49045;
            case 230:
                var2 = 100;
                var4 = var3 / var2;
            case 237:
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var14 = 'rgba(';
                var10 = ')';
                var13 = var5;
                var12 = var6;
                var11 = var4;
                var0 = var14[var3](var13, var12, var11, var10, var9);
            case 271:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = /^rgba?\(\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*(?:,\s*(1|0(\.\d+)?|100%|\d{1,2}(\.\d+)?%)\s*)?\)$/;
    var _closure1_slot0 = var2;
    var3 = function arg0() {
        var0 = global;
        var2 = var0.Math;
        var1 = var2.round;
        var4 = var0.parseFloat;
        var3 = undefined;
        var0 = arg0;
        var3 = var4.bind(var3)(var0);
        var0 = 2.55;
        var0 = var0 * var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot1 = var3;
    var1.RGB_RGBA_PATTERN = var2;
    var0 = function arg0() {
        _fun49047: for (var _fun49047_ip = 0;;) switch (_fun49047_ip) {
            case 0:
                var0 = arg0;
                var2 = 'string';
                var1 = typeof var0;
                if (!(var2 === var1)) {
                    _fun49047_ip = 79;
                    continue _fun49047
                }
            case 14:
                var3 = var0.replace;
                var2 = /\s/g;
                var1 = '';
                var4 = var3.bind(var0)(var2, var1);
                var3 = _closure1_slot0;
                var1 = var3.test;
                var3 = var1.bind(var3)(var4);
                var1 = var0;
                if (!var3) {
                    _fun49047_ip = 77;
                    continue _fun49047
                }
            case 66:
                var3 = _closure1_slot2;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
            case 77:
                return var1;
            case 79:
                return var0;
        }
    };
    var1.convertPercentageColor = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);