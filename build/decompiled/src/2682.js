// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = undefined;
    var1.default = var0;
    var3 = {
        'lastWeek': null,
        'yesterday': "'ontem às' p",
        'today': "'hoje às' p",
        'tomorrow': "'amanhã às' p",
        'nextWeek': "eeee 'às' p",
        'other': 'P'
    };
    var4 = function arg0() {
        _fun22243: for (var _fun22243_ip = 0;;) switch (_fun22243_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.getUTCDay;
                var2 = var0.bind(var1)();
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun22243_ip = 32;
                    continue _fun22243
                }
            case 19:
                var1 = 'última';
                var0 = 6;
                if (!(var0 === var2)) {
                    _fun22243_ip = 38;
                    continue _fun22243
                }
            case 32:
                var1 = 'último';
            case 38:
                var0 = "'";
                var1 = var0 + var1;
                var0 = "' eeee 'às' p";
                var0 = var1 + var0;
                return var0;
        }
    };
    var3.lastWeek = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2, arg3() {
        _fun22244: for (var _fun22244_ip = 0;;) switch (_fun22244_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = arg0;
                var3 = var1[var0];
                var2 = 'function';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun22244_ip = 38;
                    continue _fun22244
                }
            case 28:
                var2 = undefined;
                var1 = arg1;
                var0 = var3.bind(var2)(var1);
            case 38:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);