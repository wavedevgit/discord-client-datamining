// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var5 = function(arg0) { // Original name: week, environment: var2
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun21937: for (var _fun21937_ip = 0;;) switch (_fun21937_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot0;
                    var0 = var2.getUTCDay;
                    var0 = var0.bind(var2)();
                    var3 = var1[var0];
                    var4 = '';
                    var2 = var4.concat;
                    var0 = _closure2_slot0;
                    var1 = "'múlt' ";
                    if (!var0) {
                        _fun21937_ip = 52;
                        continue _fun21937
                    }
                case 49:
                    var1 = var4;
                case 52:
                    var0 = "'";
                    var2 = var2.bind(var4)(var1, var0);
                    var1 = var2.concat;
                    var0 = "' p'-kor'";
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        return var0;
    };
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var4 = true;
    var3.value = var4;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var1, var0, var3);
    var0 = undefined;
    var1.default = var0;
    var3 = ['vasárnap', 'hétfőn', 'kedden', 'szerdán', 'csütörtökön', 'pénteken', 'szombaton'];
    var _closure1_slot0 = var3;
    var3 = {
        'lastWeek': null,
        'yesterday': "'tegnap' p'-kor'",
        'today': "'ma' p'-kor'",
        'tomorrow': "'holnap' p'-kor'",
        'nextWeek': null,
        'other': 'P'
    };
    var6 = false;
    var6 = var5.bind(var0)(var6);
    var3.lastWeek = var6;
    var4 = var5.bind(var0)(var4);
    var3.nextWeek = var4;
    var _closure1_slot1 = var3;
    var2 = function(arg0, arg1) { // Original name: formatRelative, environment: var2
        _fun21938: for (var _fun21938_ip = 0;;) switch (_fun21938_ip) {
            case 0:
                var1 = _closure1_slot1;
                var0 = arg0;
                var3 = var1[var0];
                var2 = 'function';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun21938_ip = 38;
                    continue _fun21938
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