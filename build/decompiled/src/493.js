// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var4 = var2.Uint8Array;
    var2 = var4.prototype;
    var3 = Object.create(var2, {
        constructor: {
            value: var4
        }
    });
    var9 = 16;
    var10 = var3;
    var2 = new var10[var4](var9, var8);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot1 = var2;
    var0 = function() {
        _fun6411: for (var _fun6411_ip = 0;;) switch (_fun6411_ip) {
            case 0:
                var1 = _closure1_slot0;
                if (var1) {
                    _fun6411_ip = 116;
                    continue _fun6411
                }
            case 10:
                var1 = global;
                var2 = var1.crypto;
                var3 = 'undefined';
                var2 = typeof var2;
                var2 = var3 !== var2;
                if (!var2) {
                    _fun6411_ip = 44;
                    continue _fun6411
                }
            case 32:
                var3 = var1.crypto;
                var2 = var3.getRandomValues;
            case 44:
                if (!var2) {
                    _fun6411_ip = 75;
                    continue _fun6411
                }
            case 47:
                var3 = var1.crypto;
                var5 = var3.getRandomValues;
                var4 = var5.bind;
                var3 = var1.crypto;
                var2 = var4.bind(var5)(var3);
            case 75:
                var _closure1_slot0 = var2;
                if (var2) {
                    _fun6411_ip = 116;
                    continue _fun6411
                }
            case 82:
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = 'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported';
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 116:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);