// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function() {
        _fun98896: for (var _fun98896_ip = 0;;) switch (_fun98896_ip) {
            case 0:
                var0 = global;
                var0 = var0.window;
                var1 = 'undefined';
                var0 = typeof var0;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun98896_ip = 151;
                    continue _fun98896
                }
            case 24:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.isNodeEnv;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if (var1) {
                    _fun98896_ip = 148;
                    continue _fun98896
                }
            case 64:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.GLOBAL_OBJ;
                var2 = var2.process;
                var2 = var5 !== var2;
                if (!var2) {
                    _fun98896_ip = 145;
                    continue _fun98896
                }
            case 103:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.GLOBAL_OBJ;
                var3 = var3.process;
                var4 = var3.type;
                var3 = 'renderer';
                var2 = var3 === var4;
            case 145:
                var1 = var2;
            case 148:
                var0 = var1;
            case 151:
                return var0;
        }
    };
    var1.isBrowser = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12893, 12877]);