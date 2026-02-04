// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        _fun29193: for (var _fun29193_ip = 0;;) switch (_fun29193_ip) {
            case 0:
                var4 = arg0;
                var3 = undefined;
                if (!(var3 !== var4)) {
                    _fun29193_ip = 153;
                    continue _fun29193
                }
            case 12:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var5 = var0.bind(var3)(var4);
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                if (var5) {
                    _fun29193_ip = 90;
                    continue _fun29193
                }
            case 50:
                var5 = 1;
                var5 = var0[var5];
                var7 = var2.bind(var3)(var5);
                var5 = var7.prototype;
                var6 = Object.create(var5, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = 'Assertion failed: `Desc` must be a Property Descriptor';
                var10 = var6;
                var5 = new var10[var7](var9, var8);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
            case 90:
                var5 = 2;
                var0 = var0[var5];
                var2 = var2.bind(var3)(var0);
                var0 = '[[Get]]';
                var0 = var2.bind(var3)(var4, var0);
                var0 = !var0;
                if (!var0) {
                    _fun29193_ip = 148;
                    continue _fun29193
                }
            case 118:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var2 = var2.bind(var3)(var1);
                var1 = '[[Set]]';
                var1 = var2.bind(var3)(var4, var1);
                var0 = !var1;
            case 148:
                var0 = !var0;
                return var0;
            case 153:
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3419, 518, 550]);