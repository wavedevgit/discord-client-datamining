// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun32635: for (var _fun32635_ip = 0;;) switch (_fun32635_ip) {
        case 0:
            var2 = module;
            var0 = exports;
            var4 = 'object';
            var3 = typeof var0;
            var5 = var4 === var3;
            if (!var5) {
                _fun32635_ip = 25;
                continue _fun32635
            }
        case 22:
            var5 = var0;
        case 25:
            if (!var5) {
                _fun32635_ip = 37;
                continue _fun32635
            }
        case 28:
            var3 = var0.nodeType;
            var5 = !var3;
        case 37:
            if (!var5) {
                _fun32635_ip = 43;
                continue _fun32635
            }
        case 40:
            var5 = var0;
        case 43:
            var3 = var5;
            if (!var3) {
                _fun32635_ip = 56;
                continue _fun32635
            }
        case 49:
            var0 = typeof var2;
            var3 = var4 === var0;
        case 56:
            if (!var3) {
                _fun32635_ip = 62;
                continue _fun32635
            }
        case 59:
            var3 = var2;
        case 62:
            if (!var3) {
                _fun32635_ip = 74;
                continue _fun32635
            }
        case 65:
            var0 = var2.nodeType;
            var3 = !var0;
        case 74:
            if (!var3) {
                _fun32635_ip = 80;
                continue _fun32635
            }
        case 77:
            var3 = var2;
        case 80:
            var0 = undefined;
            var4 = undefined;
            if (!var3) {
                _fun32635_ip = 121;
                continue _fun32635
            }
        case 87:
            var3 = var3.exports;
            var4 = undefined;
            if (!(var3 === var5)) {
                _fun32635_ip = 121;
                continue _fun32635
            }
        case 98:
            var5 = dependencyMap;
            var3 = 0;
            var5 = var5[var3];
            var3 = require;
            var3 = var3.bind(var0)(var5);
            var4 = var3.Buffer;
        case 121:
            var3 = undefined;
            if (!var4) {
                _fun32635_ip = 132;
                continue _fun32635
            }
        case 126:
            var3 = var4.allocUnsafe;
        case 132:
            var _closure1_slot0 = var3;
            var1 = function arg0, arg1() {
                _fun32636: for (var _fun32636_ip = 0;;) switch (_fun32636_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = arg1;
                        if (var0) {
                            _fun32636_ip = 78;
                            continue _fun32636
                        }
                    case 9:
                        var4 = var1.length;
                        var0 = _closure1_slot0;
                        if (var0) {
                            _fun32636_ip = 54;
                            continue _fun32636
                        }
                    case 24:
                        var0 = var1.constructor;
                        var3 = var0.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var0
                            }
                        });
                        var6 = var3;
                        var5 = var4;
                        var0 = new var6[var0](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var3;
                        _fun32636_ip = 65;
                        continue _fun32636;
                    case 54:
                        var3 = _closure1_slot0;
                        var2 = undefined;
                        var0 = var3.bind(var2)(var4);
                    case 65:
                        var2 = var1.copy;
                        var2 = var2.bind(var1)(var0);
                        return var0;
                    case 78:
                        var0 = var1.slice;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var2.exports = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [580]);