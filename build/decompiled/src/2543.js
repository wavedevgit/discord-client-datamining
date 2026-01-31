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
    var3 = ['neděli', 'pondělí', 'úterý', 'středu', 'čtvrtek', 'pátek', 'sobotu'];
    var _closure1_slot0 = var3;
    var3 = {
        'lastWeek': "'poslední' eeee 've' p",
        'yesterday': "'včera v' p",
        'today': "'dnes v' p",
        'tomorrow': "'zítra v' p",
        'nextWeek': null,
        'other': 'P'
    };
    var4 = function(arg0) { // Original name: nextWeek, environment: var2
        var1 = arg0;
        var0 = var1.getUTCDay;
        var1 = var0.bind(var1)();
        var0 = _closure1_slot0;
        var1 = var0[var1];
        var0 = "'v ";
        var1 = var0 + var1;
        var0 = " o' p";
        var0 = var1 + var0;
        return var0;
    };
    var3.nextWeek = var4;
    var _closure1_slot1 = var3;
    var2 = function(arg0, arg1) { // Original name: formatRelative, environment: var2
        _fun21810: for (var _fun21810_ip = 0;;) switch (_fun21810_ip) {
            case 0:
                var1 = _closure1_slot1;
                var0 = arg0;
                var3 = var1[var0];
                var2 = 'function';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun21810_ip = 38;
                    continue _fun21810
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