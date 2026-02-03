// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = /[\\^$.*+?()[\]{}|]/g;
    var _closure1_slot2 = var0;
    var2 = global;
    var3 = var2.RegExp;
    var2 = var0.source;
    var0 = undefined;
    var2 = var3.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = function arg0() {
        _fun27950: for (var _fun27950_ip = 0;;) switch (_fun27950_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = arg0;
                var4 = var2.bind(var3)(var0);
                var0 = var4;
                if (!var4) {
                    _fun27950_ip = 79;
                    continue _fun27950
                }
            case 38:
                var3 = _closure1_slot3;
                var2 = var3.test;
                var2 = var2.bind(var3)(var4);
                var0 = var4;
                if (!var2) {
                    _fun27950_ip = 79;
                    continue _fun27950
                }
            case 58:
                var3 = var4.replace;
                var2 = _closure1_slot2;
                var1 = '\\$&';
                var0 = var3.bind(var4)(var2, var1);
            case 79:
                return var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3222]);