// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var _closure1_slot2 = var1;
    var1 = /^\w*$/;
    var _closure1_slot3 = var1;
    var1 = function arg0, arg1() {
        _fun31668: for (var _fun31668_ip = 0;;) switch (_fun31668_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var0 = var3[var0];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var0 = var0.bind(var5)(var4);
                if (var0) {
                    _fun31668_ip = 191;
                    continue _fun31668
                }
            case 41:
                var3 = typeof var4;
                var0 = 'number';
                var1 = var0 !== var3;
                if (!var1) {
                    _fun31668_ip = 63;
                    continue _fun31668
                }
            case 55:
                var0 = 'symbol';
                var1 = var0 !== var3;
            case 63:
                if (!var1) {
                    _fun31668_ip = 74;
                    continue _fun31668
                }
            case 66:
                var0 = 'boolean';
                var1 = var0 !== var3;
            case 74:
                if (!var1) {
                    _fun31668_ip = 83;
                    continue _fun31668
                }
            case 77:
                var0 = null;
                var1 = var0 != var4;
            case 83:
                if (!var1) {
                    _fun31668_ip = 114;
                    continue _fun31668
                }
            case 86:
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 1;
                var0 = var7[var0];
                var0 = var3.bind(var5)(var0);
                var0 = var0.bind(var5)(var4);
                var1 = !var0;
            case 114:
                var0 = !var1;
                if (!var1) {
                    _fun31668_ip = 189;
                    continue _fun31668
                }
            case 120:
                var3 = _closure1_slot3;
                var1 = var3.test;
                var1 = var1.bind(var3)(var4);
                if (var1) {
                    _fun31668_ip = 154;
                    continue _fun31668
                }
            case 137:
                var3 = _closure1_slot2;
                var2 = var3.test;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
            case 154:
                if (var1) {
                    _fun31668_ip = 186;
                    continue _fun31668
                }
            case 157:
                var2 = null;
                var2 = var2 != var6;
                if (!var2) {
                    _fun31668_ip = 183;
                    continue _fun31668
                }
            case 166:
                var3 = global;
                var3 = var3.Object;
                var3 = var3.bind(var5)(var6);
                var2 = var4 in var3;
            case 183:
                var1 = var2;
            case 186:
                var0 = var1;
            case 189:
                return var0;
            case 191:
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [591, 3234]);