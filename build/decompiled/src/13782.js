// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun105789: for (var _fun105789_ip = 0;;) switch (_fun105789_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var8 = arg2;
                var1 = 'function';
                var0 = typeof var4;
                if (!(var1 === var0)) {
                    _fun105789_ip = 161;
                    continue _fun105789
                }
            case 23:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var7 = var1.bind(var2)(var8);
                var6 = true;
                var5 = true;
                if (!var7) {
                    _fun105789_ip = 115;
                    continue _fun105789
                }
            case 59:
                var7 = 'leading';
                var9 = var7 in var8;
                var7 = true;
                if (!var9) {
                    _fun105789_ip = 84;
                    continue _fun105789
                }
            case 72:
                var9 = var8.leading;
                var9 = !var9;
                var7 = !var9;
            case 84:
                var9 = 'trailing';
                var9 = var9 in var8;
                var1 = true;
                if (!var9) {
                    _fun105789_ip = 109;
                    continue _fun105789
                }
            case 97:
                var8 = var8.trailing;
                var8 = !var8;
                var1 = !var8;
            case 109:
                var5 = var1;
                var6 = var7;
            case 115:
                var1 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 1;
                var0 = var7[var0];
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var0.leading = var6;
                var0.maxWait = var3;
                var0.trailing = var5;
                var0 = var1.bind(var2)(var4, var3, var0);
                return var0;
            case 161:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = 'Expected a function';
                var13 = var1;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [598, 5687]);