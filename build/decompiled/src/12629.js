// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96767: for (var _fun96767_ip = 0;;) switch (_fun96767_ip) {
        case 0:
            var7 = global;
            var5 = this;
            var4 = function arg0() {
                _fun96768: for (var _fun96768_ip = 0;;) switch (_fun96768_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1;
                        if (!var1) {
                            _fun96768_ip = 26;
                            continue _fun96768
                        }
                    case 9:
                        var3 = var1.Math;
                        var2 = global;
                        var2 = var2.Math;
                        var0 = var3 === var2;
                    case 26:
                        if (!var0) {
                            _fun96768_ip = 32;
                            continue _fun96768
                        }
                    case 29:
                        var0 = var1;
                    case 32:
                        return var0;
                }
            };
            var1 = global;
            var0 = var1.globalThis;
            var6 = 'object';
            var0 = typeof var0;
            var2 = var6 === var0;
            if (!var2) {
                _fun96767_ip = 43;
                continue _fun96767
            }
        case 37:
            var2 = var1.globalThis;
        case 43:
            var0 = undefined;
            var2 = var4.bind(var0)(var2);
            if (var2) {
                _fun96767_ip = 79;
                continue _fun96767
            }
        case 53:
            var3 = var1.window;
            var3 = typeof var3;
            var3 = var6 === var3;
            if (!var3) {
                _fun96767_ip = 74;
                continue _fun96767
            }
        case 68:
            var3 = var1.window;
        case 74:
            var2 = var4.bind(var0)(var3);
        case 79:
            if (var2) {
                _fun96767_ip = 109;
                continue _fun96767
            }
        case 82:
            var3 = var1.self;
            var3 = typeof var3;
            var3 = var6 === var3;
            if (!var3) {
                _fun96767_ip = 104;
                continue _fun96767
            }
        case 98:
            var3 = var1.self;
        case 104:
            var2 = var4.bind(var0)(var3);
        case 109:
            if (var2) {
                _fun96767_ip = 130;
                continue _fun96767
            }
        case 112:
            var3 = typeof var7;
            var3 = var6 === var3;
            if (!var3) {
                _fun96767_ip = 125;
                continue _fun96767
            }
        case 122:
            var3 = var7;
        case 125:
            var2 = var4.bind(var0)(var3);
        case 130:
            if (var2) {
                _fun96767_ip = 151;
                continue _fun96767
            }
        case 133:
            var3 = typeof var5;
            var3 = var6 === var3;
            if (!var3) {
                _fun96767_ip = 146;
                continue _fun96767
            }
        case 143:
            var3 = var5;
        case 146:
            var2 = var4.bind(var0)(var3);
        case 151:
            if (var2) {
                _fun96767_ip = 156;
                continue _fun96767
            }
        case 154:
            var2 = undefined;
        case 156:
            if (var2) {
                _fun96767_ip = 180;
                continue _fun96767
            }
        case 159:
            var3 = var1.Function;
            var1 = 'return this';
            var1 = var3.bind(var0)(var1);
            var2 = var1.bind(var0)();
        case 180:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);