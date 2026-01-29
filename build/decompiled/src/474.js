// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
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
    var3 = function() { // Original name: vibrate, environment: var2
        _fun6157: for (var _fun6157_ip = 0;;) switch (_fun6157_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var1 = arguments.length;
                var4 = 0;
                var1 = var1 > var4;
                var5 = 400;
                var3 = var5;
                if (!var1) {
                    _fun6157_ip = 40;
                    continue _fun6157
                }
            case 25:
                var1 = arguments[var4];
                var3 = var5;
                if (!(var0 !== var1)) {
                    _fun6157_ip = 40;
                    continue _fun6157
                }
            case 36:
                var3 = arguments[var4];
            case 40:
                var5 = arguments.length;
                var1 = 1;
                var6 = var5 > var1;
                if (!var6) {
                    _fun6157_ip = 61;
                    continue _fun6157
                }
            case 53:
                var5 = arguments[var1];
                var6 = var0 !== var5;
            case 61:
                if (!var6) {
                    _fun6157_ip = 68;
                    continue _fun6157
                }
            case 64:
                var6 = arguments[var1];
            case 68:
                var2 = 'number';
                var1 = typeof var3;
                if (!(var2 !== var1)) {
                    _fun6157_ip = 179;
                    continue _fun6157
                }
            case 79:
                var1 = global;
                var5 = var1.Array;
                var2 = var5.isArray;
                var2 = var2.bind(var5)(var3);
                if (var2) {
                    _fun6157_ip = 134;
                    continue _fun6157
                }
            case 100:
                var5 = var1.Error;
                var1 = var5.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = 'Vibration pattern should be a number or array';
                var9 = var2;
                var1 = new var9[var5](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 134:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var5 = var2.bind(var0)(var1);
                var2 = var5.vibrateByPattern;
                var1 = -1;
                if (!var6) {
                    _fun6157_ip = 171;
                    continue _fun6157
                }
            case 169:
                var1 = 0;
            case 171:
                var1 = var2.bind(var5)(var3, var1);
                _fun6157_ip = 210;
                continue _fun6157;
            case 179:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.vibrate;
                var1 = var1.bind(var2)(var3);
            case 210:
                return var0;
        }
    };
    var0.vibrate = var3;
    var2 = function() { // Original name: cancel, environment: var2
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.cancel;
        var1 = var1.bind(var2)();
        return var0;
    };
    var0.cancel = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [475]);