// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = {
        '[[Configurable]]': true,
        '[[Enumerable]]': true,
        '[[Get]]': true,
        '[[Set]]': true,
        '[[Value]]': true,
        '[[Writable]]': true
    };
    var3 = null;
    var4 = var1;
    var2 = silentSetPrototypeOf(var4, var3);
    var _closure1_slot2 = var1;
    var1 = function arg0() {
        _fun29165: for (var _fun29165_ip = 0;;) switch (_fun29165_ip) {
            case 0:
                var6 = arg0;
                if (!var6) {
                    _fun29165_ip = 266;
                    continue _fun29165
                }
            case 9:
                var1 = 'object';
                var0 = typeof var6;
                if (!(var1 === var0)) {
                    _fun29165_ip = 266;
                    continue _fun29165
                }
            case 23:
                var8 = var6;
                var7 = 0;
                var2 = undefined;
                for (var3 in var8)
                    case 41: {
                        case 50: var10 = var3;
                        var11 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var7];
                        var1 = var11.bind(var2)(var1);
                        var1 = var1.bind(var2)(var6, var10);
                        if (!var1) {
                            _fun29165_ip = 41;
                            continue _fun29165
                        }
                        case 79: var1 = _closure1_slot2;
                        var1 = var1[var10];
                        if (var1) {
                            _fun29165_ip = 41;
                            continue _fun29165
                        }
                        case 90: var1 = false;
                        return var1;
                    }
            case 94:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var3 = var3.bind(var2)(var1);
                var1 = '[[Value]]';
                var3 = var3.bind(var2)(var6, var1);
                if (var3) {
                    _fun29165_ip = 151;
                    continue _fun29165
                }
            case 124:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var4 = var4.bind(var2)(var1);
                var1 = '[[Writable]]';
                var3 = var4.bind(var2)(var6, var1);
            case 151:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var4 = var4.bind(var2)(var1);
                var1 = '[[Get]]';
                var1 = var4.bind(var2)(var6, var1);
                if (var1) {
                    _fun29165_ip = 208;
                    continue _fun29165
                }
            case 181:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var5 = var5.bind(var2)(var4);
                var4 = '[[Set]]';
                var1 = var5.bind(var2)(var6, var4);
            case 208:
                if (!var3) {
                    _fun29165_ip = 214;
                    continue _fun29165
                }
            case 211:
                if (var1) {
                    _fun29165_ip = 218;
                    continue _fun29165
                }
            case 214:
                var1 = true;
                return var1;
            case 218:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var2 = var1.bind(var2)(var0);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = 'Property Descriptors may not be both accessor and data descriptors';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 266:
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [550, 518]);