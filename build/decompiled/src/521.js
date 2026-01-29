// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6605: for (var _fun6605_ip = 0;;) switch (_fun6605_ip) {
        case 0:
            var1 = require;
            var _closure1_slot0 = var1;
            var1 = dependencyMap;
            var _closure1_slot1 = var1;
            var2 = global;
            var1 = var2.Symbol;
            var3 = 'undefined';
            var1 = typeof var1;
            var1 = var3 !== var1;
            if (!var1) {
                _fun6605_ip = 43;
                continue _fun6605
            }
        case 37:
            var1 = var2.Symbol;
        case 43:
            var _closure1_slot2 = var1;
            var1 = function() { // Original name: hasNativeSymbols, environment: var0
                _fun6606: for (var _fun6606_ip = 0;;) switch (_fun6606_ip) {
                    case 0:
                        var0 = _closure1_slot2;
                        var2 = 'function';
                        var0 = typeof var0;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun6606_ip = 124;
                            continue _fun6606
                        }
                    case 21:
                        var3 = global;
                        var1 = var3.Symbol;
                        var1 = typeof var1;
                        var1 = var2 === var1;
                        if (!var1) {
                            _fun6606_ip = 121;
                            continue _fun6606
                        }
                    case 38:
                        var6 = _closure1_slot2;
                        var5 = undefined;
                        var2 = 'foo';
                        var2 = var6.bind(var5)(var2);
                        var6 = 'symbol';
                        var2 = typeof var2;
                        var2 = var6 === var2;
                        if (!var2) {
                            _fun6606_ip = 118;
                            continue _fun6606
                        }
                    case 67:
                        var7 = var3.Symbol;
                        var3 = 'bar';
                        var3 = var7.bind(var5)(var3);
                        var3 = typeof var3;
                        var3 = var6 === var3;
                        if (!var3) {
                            _fun6606_ip = 115;
                            continue _fun6606
                        }
                    case 92:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var4 = 0;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var3 = var4.bind(var5)();
                    case 115:
                        var2 = var3;
                    case 118:
                        var1 = var2;
                    case 121:
                        var0 = var1;
                    case 124:
                        return var0;
                }
            };
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [522]);