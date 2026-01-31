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
        'lastWeek': "'el' eeee 'pasado a la' p",
        'yesterday': "'ayer a la' p",
        'today': "'hoy a la' p",
        'tomorrow': "'mañana a la' p",
        'nextWeek': "eeee 'a la' p",
        'other': 'P'
    };
    var _closure1_slot0 = var3;
    var3 = {
        'lastWeek': "'el' eeee 'pasado a las' p",
        'yesterday': "'ayer a las' p",
        'today': "'hoy a las' p",
        'tomorrow': "'mañana a las' p",
        'nextWeek': "eeee 'a las' p",
        'other': 'P'
    };
    var _closure1_slot1 = var3;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: formatRelative, environment: var2
        _fun21870: for (var _fun21870_ip = 0;;) switch (_fun21870_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var1.getUTCHours;
                var1 = var0.bind(var1)();
                var0 = 1;
                if (!(var0 === var1)) {
                    _fun21870_ip = 36;
                    continue _fun21870
                }
            case 23:
                var0 = _closure1_slot0;
                var0 = var0[var2];
                _fun21870_ip = 47;
                continue _fun21870;
            case 36:
                var1 = _closure1_slot1;
                var0 = var1[var2];
            case 47:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);