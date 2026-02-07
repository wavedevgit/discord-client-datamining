// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28054: for (var _fun28054_ip = 0;;) switch (_fun28054_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var2 = 0;
            var3 = var5[var2];
            var0 = undefined;
            var6 = var4.bind(var0)(var3);
            var3 = undefined;
            if (!var6) {
                _fun28054_ip = 48;
                continue _fun28054
            }
        case 34:
            var2 = var5[var2];
            var2 = var4.bind(var0)(var2);
            var3 = var2.prototype;
        case 48:
            var2 = undefined;
            if (!var3) {
                _fun28054_ip = 58;
                continue _fun28054
            }
        case 53:
            var2 = var3.toString;
        case 58:
            var _closure1_slot2 = var2;
            var2 = function arg0() {
                _fun28055: for (var _fun28055_ip = 0;;) switch (_fun28055_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = 'string';
                        var1 = typeof var0;
                        if (!(var2 !== var1)) {
                            _fun28055_ip = 174;
                            continue _fun28055
                        }
                    case 17:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 1;
                        var4 = var3[var2];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var6 = var4.bind(var3)(var0);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        if (var6) {
                            _fun28055_ip = 147;
                            continue _fun28055
                        }
                    case 58:
                        var6 = 3;
                        var6 = var5[var6];
                        var6 = var4.bind(var3)(var6);
                        var6 = var6.bind(var3)(var0);
                        if (var6) {
                            _fun28055_ip = 120;
                            continue _fun28055
                        }
                    case 78:
                        var6 = '' + var0;
                        var7 = '0';
                        if (!(var7 === var6)) {
                            _fun28055_ip = 115;
                            continue _fun28055
                        }
                    case 91:
                        var8 = var2 / var0;
                        var2 = '-0';
                        var7 = -inf;
                        if (!(var8 !== var7)) {
                            _fun28055_ip = 118;
                            continue _fun28055
                        }
                    case 115:
                        var2 = var6;
                    case 118:
                        return var2;
                    case 120:
                        var6 = _closure1_slot2;
                        var2 = '';
                        if (!var6) {
                            _fun28055_ip = 145;
                            continue _fun28055
                        }
                    case 131:
                        var7 = _closure1_slot2;
                        var6 = var7.call;
                        var2 = var6.bind(var7)(var0);
                    case 145:
                        return var2;
                    case 147:
                        var2 = 2;
                        var2 = var5[var2];
                        var2 = var4.bind(var3)(var2);
                        var1 = _closure1_slot3;
                        var1 = var2.bind(var3)(var0, var1);
                        var1 = '' + var1;
                        return var1;
                    case 174:
                        return var0;
                }
            };
            var _closure1_slot3 = var2;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [600, 591, 3234, 3235]);