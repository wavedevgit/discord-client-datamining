// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = exports;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var3, var0, var4);
    var0 = function arg0() {
        _fun22557: for (var _fun22557_ip = 0;;) switch (_fun22557_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot0;
                if (var2) {
                    _fun22557_ip = 23;
                    continue _fun22557
                }
            case 13:
                var0 = _closure1_slot1;
                var0 = var1[var0];
                _fun22557_ip = 27;
                continue _fun22557;
            case 23:
                var0 = var1[var2];
            case 27:
                return var0;
        }
    };
    var3.getRoundingMethod = var0;
    var0 = {};
    var3 = var2.Math;
    var3 = var3.ceil;
    var0.ceil = var3;
    var3 = var2.Math;
    var3 = var3.round;
    var0.round = var3;
    var2 = var2.Math;
    var2 = var2.floor;
    var0.floor = var2;
    var2 = function arg0() {
        _fun22558: for (var _fun22558_ip = 0;;) switch (_fun22558_ip) {
            case 0:
                var3 = arg0;
                var0 = 0;
                if (!(!(var3 < var0))) {
                    _fun22558_ip = 30;
                    continue _fun22558
                }
            case 9:
                var0 = global;
                var1 = var0.Math;
                var0 = var1.floor;
                var0 = var0.bind(var1)(var3);
                _fun22558_ip = 49;
                continue _fun22558;
            case 30:
                var1 = global;
                var2 = var1.Math;
                var1 = var2.ceil;
                var0 = var1.bind(var2)(var3);
            case 49:
                return var0;
        }
    };
    var0.trunc = var2;
    var _closure1_slot0 = var0;
    var0 = 'trunc';
    var _closure1_slot1 = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);