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
        'yesterday': "'χθες στις' p",
        'today': "'σήμερα στις' p",
        'tomorrow': "'αύριο στις' p",
        'nextWeek': "eeee 'στις' p",
        'other': 'P'
    };
    var4 = function arg0() {
        _fun22033: for (var _fun22033_ip = 0;;) switch (_fun22033_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.getUTCDay;
                var2 = var0.bind(var1)();
                var0 = "'την προηγούμενη' eeee 'στις' p";
                var1 = 6;
                if (!(var1 === var2)) {
                    _fun22033_ip = 32;
                    continue _fun22033
                }
            case 26:
                var0 = "'το προηγούμενο' eeee 'στις' p";
            case 32:
                return var0;
        }
    };
    var3.lastWeek = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1() {
        _fun22034: for (var _fun22034_ip = 0;;) switch (_fun22034_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = arg0;
                var3 = var1[var0];
                var2 = 'function';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun22034_ip = 38;
                    continue _fun22034
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