// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function arg0() {
        _fun37943: for (var _fun37943_ip = 0;;) switch (_fun37943_ip) {
            case 0:
                var2 = arg0;
                var0 = var2;
                var5 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun37943_ip = 17;
                    continue _fun37943
                }
            case 13:
                var2 = false;
                return var2;
            case 17: // try_start_0
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 0;
                var2 = var2[var4];
                var3 = var3.bind(var5)(var2);
                var2 = var3.parseBox;
                var2 = var2.bind(var3)(var0, var4);
                var1 = var2;
                var0 = var2;
                if (!var2) {
                    _fun37943_ip = 97;
                    continue _fun37943
                }
            case 60:
                var3 = ['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'hevm', 'hevs', 'mif1'];
                var2 = var3.indexOf;
                var1 = var1.majorBrand;
                var2 = var2.bind(var3)(var1);
                var1 = -1;
                var0 = var1 !== var2;
            case 97: // try_end0
                return var0;
            case 99: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var0.isHeicFile = var3;
    var2 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.findOffsets;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.findHeicOffsets = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4138]);