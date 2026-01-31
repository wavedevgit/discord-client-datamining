// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0, arg1, arg2() {
        _fun6434: for (var _fun6434_ip = 0;;) switch (_fun6434_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var4 = arg2;
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 0;
                var2 = var2[var3];
                var6 = undefined;
                var2 = var7.bind(var6)(var2);
                var2 = var2.randomUUID;
                if (!var2) {
                    _fun6434_ip = 77;
                    continue _fun6434
                }
            case 42:
                if (var0) {
                    _fun6434_ip = 77;
                    continue _fun6434
                }
            case 45:
                if (var5) {
                    _fun6434_ip = 77;
                    continue _fun6434
                }
            case 48:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var3];
                var7 = var7.bind(var6)(var2);
                var2 = var7.randomUUID;
                var2 = var2.bind(var7)();
                return var2;
            case 77:
                if (var5) {
                    _fun6434_ip = 82;
                    continue _fun6434
                }
            case 80:
                var5 = {};
            case 82:
                var2 = var5.random;
                if (var2) {
                    _fun6434_ip = 124;
                    continue _fun6434
                }
            case 91:
                var5 = var5.rng;
                if (var5) {
                    _fun6434_ip = 120;
                    continue _fun6434
                }
            case 100:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 1;
                var7 = var9[var7];
                var5 = var8.bind(var6)(var7);
            case 120:
                var2 = var5.bind(var6)();
            case 124:
                var7 = 6;
                var8 = var2[var7];
                var5 = 15;
                var8 = var5 & var8;
                var5 = 64;
                var5 = var8 | var5;
                var2[var7] = var5;
                var7 = 8;
                var8 = var2[var7];
                var5 = 63;
                var8 = var5 & var8;
                var5 = 128;
                var5 = var8 | var5;
                var2[var7] = var5;
                if (var0) {
                    _fun6434_ip = 210;
                    continue _fun6434
                }
            case 177:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var5 = var5.bind(var6)(var1);
                var1 = var5.unsafeStringify;
                var1 = var1.bind(var5)(var2);
                return var1;
            case 210:
                if (var4) {
                    _fun6434_ip = 215;
                    continue _fun6434
                }
            case 213:
                var4 = 0;
            case 215:
                var1 = 16;
                var3 = 0;
            case 220:
                var6 = var4 + var3;
                var5 = var2[var3];
                var0[var6] = var5;
                var3 = var3 + 1;
                if (var3 < var1) {
                    _fun6434_ip = 220;
                    continue _fun6434
                }
            case 239:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [502, 493, 494]);