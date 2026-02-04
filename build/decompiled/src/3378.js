// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var2 = 0;
    var5 = var4[var2];
    var0 = undefined;
    var6 = var3.bind(var0)(var5);
    var5 = 'String.prototype.valueOf';
    var5 = var6.bind(var0)(var5);
    var _closure1_slot0 = var5;
    var2 = var4[var2];
    var5 = var3.bind(var0)(var2);
    var2 = 'Object.prototype.toString';
    var2 = var5.bind(var0)(var2);
    var _closure1_slot1 = var2;
    var2 = 1;
    var2 = var4[var2];
    var2 = var3.bind(var0)(var2);
    var2 = var2.bind(var0)();
    var _closure1_slot2 = var2;
    var2 = function arg0() {
        _fun29081: for (var _fun29081_ip = 0;;) switch (_fun29081_ip) {
            case 0:
                var5 = arg0;
                var3 = typeof var5;
                var0 = 'string';
                var0 = var0 === var3;
                if (var0) {
                    _fun29081_ip = 102;
                    continue _fun29081
                }
            case 17:
                var2 = !var5;
                if (var2) {
                    _fun29081_ip = 31;
                    continue _fun29081
                }
            case 23:
                var1 = 'object';
                var2 = var1 !== var3;
            case 31:
                var1 = !var2;
                if (var2) {
                    _fun29081_ip = 99;
                    continue _fun29081
                }
            case 37:
                var2 = _closure1_slot2;
                if (var2) {
                    _fun29081_ip = 68;
                    continue _fun29081
                }
            case 47:
                var3 = _closure1_slot1;
                var2 = undefined;
                var3 = var3.bind(var2)(var5);
                var2 = '[object String]';
                var2 = var2 === var3;
                _fun29081_ip = 96;
                continue _fun29081;
            case 68:
                var3 = var5;
            case 71: // try_start_0
                var5 = _closure1_slot0;
                var4 = var3;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
            case 85: // try_end0
                var3 = true;
                _fun29081_ip = 93;
                continue _fun29081;
            case 89: // catch_target0
                CatchBlockStart(arg_register = 4);
                var3 = false;
            case 93:
                var2 = var3;
            case 96:
                var1 = var2;
            case 99:
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [551, 1393]);