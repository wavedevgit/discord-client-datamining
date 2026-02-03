// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var2 = 0;
    var5 = var4[var2];
    var0 = undefined;
    var6 = var3.bind(var0)(var5);
    var5 = 'Date.prototype.getDay';
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
        _fun29096: for (var _fun29096_ip = 0;;) switch (_fun29096_ip) {
            case 0:
                var4 = arg0;
                var1 = 'object';
                var0 = typeof var4;
                var0 = var1 === var0;
                if (!var0) {
                    _fun29096_ip = 23;
                    continue _fun29096
                }
            case 17:
                var1 = null;
                var0 = var1 !== var4;
            case 23:
                if (!var0) {
                    _fun29096_ip = 88;
                    continue _fun29096
                }
            case 26:
                var1 = _closure1_slot2;
                if (var1) {
                    _fun29096_ip = 57;
                    continue _fun29096
                }
            case 36:
                var2 = _closure1_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)(var4);
                var1 = '[object Date]';
                var1 = var1 === var2;
                _fun29096_ip = 85;
                continue _fun29096;
            case 57:
                var2 = var4;
            case 60: // try_start_0
                var4 = _closure1_slot0;
                var3 = var2;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
            case 74: // try_end0
                var2 = true;
                _fun29096_ip = 82;
                continue _fun29096;
            case 78: // catch_target0
                CatchBlockStart(arg_register = 3);
                var2 = false;
            case 82:
                var1 = var2;
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [551, 1393]);