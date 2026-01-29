// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28987: for (var _fun28987_ip = 0;;) switch (_fun28987_ip) {
        case 0:
            var3 = require;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var0 = 0;
            var2 = var4[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var2);
            var2 = var5.hasArrayLengthDefineBug;
            var2 = var2.bind(var5)();
            var _closure1_slot2 = var2;
            if (!var2) {
                _fun28987_ip = 58;
                continue _fun28987
            }
        case 46:
            var5 = 1;
            var5 = var4[var5];
            var2 = var3.bind(var0)(var5);
        case 58:
            var _closure1_slot3 = var2;
            var2 = 2;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 'Object.prototype.propertyIsEnumerable';
            var2 = var3.bind(var0)(var2);
            var _closure1_slot4 = var2;
            var2 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: DefineOwnProperty, environment: var1
                _fun28988: for (var _fun28988_ip = 0;;) switch (_fun28988_ip) {
                    case 0:
                        var2 = arg3;
                        var5 = arg4;
                        var1 = arg5;
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var6 = 3;
                        var3 = var3[var6];
                        var4 = undefined;
                        var3 = var7.bind(var4)(var3);
                        if (var3) {
                            _fun28988_ip = 136;
                            continue _fun28988
                        }
                    case 37:
                        var3 = arg0;
                        var3 = var3.bind(var4)(var1);
                        if (var3) {
                            _fun28988_ip = 52;
                            continue _fun28988
                        }
                    case 48:
                        var3 = false;
                        return var3;
                    case 52:
                        var3 = var1["[[Configurable]]"];
                        if (!var3) {
                            _fun28988_ip = 70;
                            continue _fun28988
                        }
                    case 61:
                        var3 = var1["[[Writable]]"];
                        if (var3) {
                            _fun28988_ip = 74;
                            continue _fun28988
                        }
                    case 70:
                        var3 = false;
                        return var3;
                    case 74:
                        var3 = var5 in var2;
                        if (!var3) {
                            _fun28988_ip = 107;
                            continue _fun28988
                        }
                    case 81:
                        var3 = _closure1_slot4;
                        var7 = var3.bind(var4)(var2, var5);
                        var3 = var1["[[Enumerable]]"];
                        var3 = !var3;
                        var3 = !var3;
                        if (!(var7 === var3)) {
                            _fun28988_ip = 132;
                            continue _fun28988
                        }
                    case 107:
                        var8 = var1["[[Value]]"];
                        var2[var5] = var8;
                        var7 = var2[var5];
                        var3 = arg1;
                        var3 = var3.bind(var4)(var7, var8);
                        return var3;
                    case 132:
                        var3 = false;
                        return var3;
                    case 136:
                        var3 = _closure1_slot2;
                        if (!var3) {
                            _fun28988_ip = 189;
                            continue _fun28988
                        }
                    case 143:
                        var3 = 'length';
                        if (!(var3 === var5)) {
                            _fun28988_ip = 189;
                            continue _fun28988
                        }
                    case 151:
                        var3 = '[[Value]]';
                        var3 = var3 in var1;
                        if (!var3) {
                            _fun28988_ip = 189;
                            continue _fun28988
                        }
                    case 162:
                        var3 = _closure1_slot3;
                        var3 = var3.bind(var4)(var2);
                        if (!var3) {
                            _fun28988_ip = 189;
                            continue _fun28988
                        }
                    case 174:
                        var7 = var2.length;
                        var3 = var1["[[Value]]"];
                        if (!(var7 === var3)) {
                            _fun28988_ip = 225;
                            continue _fun28988
                        }
                    case 189:
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var0 = var0[var6];
                        var3 = var3.bind(var4)(var0);
                        var0 = arg2;
                        var0 = var0.bind(var4)(var1);
                        var0 = var3.bind(var4)(var2, var5, var0);
                        var0 = true;
                        _fun28988_ip = 252;
                        continue _fun28988;
                    case 225:
                        var3 = var1["[[Value]]"];
                        var2.length = var3;
                        var2 = var2.length;
                        var1 = var1["[[Value]]"];
                        var0 = var2 === var1;
                    case 252:
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1405, 3366, 551, 541]);