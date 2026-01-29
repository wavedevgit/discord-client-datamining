// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun17812: for (var _fun17812_ip = 0;;) switch (_fun17812_ip) {
        case 0:
            var3 = require;
            var4 = dependencyMap;
            var0 = 0;
            var2 = var4[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var _closure1_slot0 = var2;
            var2 = 1;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3;
            if (!var3) {
                _fun17812_ip = 76;
                continue _fun17812
            }
        case 43:
            var5 = 'object';
            var4 = typeof var3;
            var2 = var3;
            if (!(var5 === var4)) {
                _fun17812_ip = 76;
                continue _fun17812
            }
        case 57:
            var4 = 'default';
            var4 = var4 in var3;
            var2 = var3;
            if (!var4) {
                _fun17812_ip = 76;
                continue _fun17812
            }
        case 71:
            var2 = var3.default;
        case 76:
            var _closure1_slot1 = var2;
            var2 = {};
            var _closure1_slot2 = var2;
            var2 = function(arg0, arg1) { // Environment: var1
                _fun17813: for (var _fun17813_ip = 0;;) switch (_fun17813_ip) {
                    case 0:
                        var1 = arg0;
                        var6 = arg1;
                        var5 = undefined;
                        if (!(var5 === var6)) {
                            _fun17813_ip = 21;
                            continue _fun17813
                        }
                    case 14:
                        var6 = _closure1_slot1;
                    case 21:
                        var9 = _closure1_slot0;
                        var4 = var9.useRef;
                        var0 = _closure1_slot2;
                        var4 = var4.bind(var9)(var0);
                        var _closure2_slot0 = var4;
                        var0 = var4.current;
                        var _closure2_slot1 = var0;
                        var8 = var9.useEffect;
                        var7 = function() { // Environment: var2
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var7 = var8.bind(var9)(var7);
                        var7 = var4.current;
                        var3 = _closure1_slot2;
                        var3 = var7 !== var3;
                        if (!var3) {
                            _fun17813_ip = 97;
                            continue _fun17813
                        }
                    case 86:
                        var4 = var4.current;
                        var3 = var6.bind(var5)(var1, var4);
                    case 97:
                        if (var3) {
                            _fun17813_ip = 107;
                            continue _fun17813
                        }
                    case 100:
                        _closure2_slot1 = var1;
                        var0 = var1;
                    case 107:
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1603]);