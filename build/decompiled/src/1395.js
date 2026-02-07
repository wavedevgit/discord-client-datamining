// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var2 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var2;
    var0 = 0;
    var2 = var2[var0];
    var0 = undefined;
    var3 = var3.bind(var0)(var2);
    var2 = 'RegExp.prototype.exec';
    var2 = var3.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = function arg0() {
        _fun16402: for (var _fun16402_ip = 0;;) switch (_fun16402_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun16402_ip = 90;
                    continue _fun16402
                }
            case 42:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = '`regex` must be a RegExp';
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 90:
                var0 = function arg0() {
                    var3 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var1 = var3.bind(var1)(var2, var0);
                    var0 = null;
                    var0 = var0 !== var1;
                    return var0;
                };
                return var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [551, 1396, 518]);