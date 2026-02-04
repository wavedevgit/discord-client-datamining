// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6943: for (var _fun6943_ip = 0;;) switch (_fun6943_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var3 = 0;
            var2 = var5[var3];
            var0 = undefined;
            var6 = var4.bind(var0)(var2);
            var2 = undefined;
            if (!var6) {
                _fun6943_ip = 49;
                continue _fun6943
            }
        case 34:
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var2 = var3.toStringTag;
        case 49:
            var _closure1_slot2 = var2;
            var2 = function arg0() {
                _fun6944: for (var _fun6944_ip = 0;;) switch (_fun6944_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        if (!(var0 != var3)) {
                            _fun6944_ip = 101;
                            continue _fun6944
                        }
                    case 9:
                        var0 = _closure1_slot2;
                        if (!var0) {
                            _fun6944_ip = 45;
                            continue _fun6944
                        }
                    case 19:
                        var4 = _closure1_slot2;
                        var0 = global;
                        var0 = var0.Object;
                        var2 = undefined;
                        var0 = var0.bind(var2)(var3);
                        var0 = var4 in var0;
                        if (var0) {
                            _fun6944_ip = 74;
                            continue _fun6944
                        }
                    case 45:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 2;
                        var0 = var4[var0];
                        var4 = undefined;
                        var0 = var5.bind(var4)(var0);
                        var0 = var0.bind(var4)(var3);
                        _fun6944_ip = 99;
                        continue _fun6944;
                    case 74:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 1;
                        var1 = var5[var1];
                        var1 = var4.bind(var2)(var1);
                        var0 = var1.bind(var2)(var3);
                    case 99:
                        _fun6944_ip = 122;
                        continue _fun6944;
                    case 101:
                        var1 = '[object Null]';
                        var2 = undefined;
                        if (!(var2 === var3)) {
                            _fun6944_ip = 119;
                            continue _fun6944
                        }
                    case 113:
                        var1 = '[object Undefined]';
                    case 119:
                        var0 = var1;
                    case 122:
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [579, 582, 583]);