// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28975: for (var _fun28975_ip = 0;;) switch (_fun28975_ip) {
        case 0:
            var7 = require;
            var8 = dependencyMap;
            var2 = module;
            var0 = undefined;
            var5 = undefined;
            var4 = undefined;
            var3 = 0;
            var3 = var8[var3];
            var9 = var7.bind(var0)(var3);
            var6 = '%Reflect.construct%';
            var3 = true;
            var6 = var9.bind(var0)(var6, var3);
            var5 = var6;
            var _closure1_slot0 = var6;
            var6 = 1;
            var6 = var8[var6];
            var4 = var7.bind(var0)(var6);
        case 61: // try_start_0
            var9 = var4;
            var8 = {};
            var6 = function() {
                var0 = undefined;
                return var0;
            };
            var8['[[Get]]'] = var6;
            var7 = {};
            var6 = '';
            var6 = var9.bind(var0)(var7, var6, var8);
        case 89: // try_end0
            _fun28975_ip = 95;
            continue _fun28975;
        case 91: // catch_target0
            CatchBlockStart(arg_register = 6);
            var4 = null;
        case 95:
            var6 = var4;
            if (!var6) {
                _fun28975_ip = 104;
                continue _fun28975
            }
        case 101:
            if (var5) {
                _fun28975_ip = 120;
                continue _fun28975
            }
        case 104:
            var6 = var2;
            var5 = function arg0() {
                _fun28979: for (var _fun28979_ip = 0;;) switch (_fun28979_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = 'function';
                        var0 = typeof var1;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun28979_ip = 28;
                            continue _fun28979
                        }
                    case 17:
                        var1 = var1.prototype;
                        var1 = !var1;
                        var0 = !var1;
                    case 28:
                        return var0;
                }
            };
            var6.exports = var5;
            _fun28975_ip = 174;
            continue _fun28975;
        case 120:
            var5 = {};
            var _closure1_slot1 = var5;
            var6 = {};
            var _closure1_slot2 = var6;
            var5 = var4;
            var4 = {};
            var7 = function() {
                var0 = _closure1_slot1;
                throw var0;
            };
            var4['[[Get]]'] = var7;
            var4['[[Enumerable]]'] = var3;
            var3 = 'length';
            var3 = var5.bind(var0)(var6, var3, var4);
            var1 = function arg0() {
                _fun28978: for (var _fun28978_ip = 0;;) switch (_fun28978_ip) {
                    case 0:
                        var1 = arg0;
                    case 3: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = var1;
                        var1 = _closure1_slot2;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var2, var1);
                    case 25: // try_end0
                        return var0;
                    case 27: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var0 = _closure1_slot1;
                        var0 = var1 === var0;
                        return var0;
                }
            };
            var2.exports = var1;
        case 174:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3376, 3377]);