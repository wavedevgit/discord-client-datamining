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
        'yesterday': "'jučer u' p",
        'today': "'danas u' p",
        'tomorrow': "'sutra u' p",
        'nextWeek': null,
        'other': 'P'
    };
    var4 = function arg0() {
        _fun22116: for (var _fun22116_ip = 0;;) switch (_fun22116_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.getUTCDay;
                var1 = var0.bind(var1)();
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun22116_ip = 57;
                    continue _fun22116
                }
            case 19:
                var0 = 3;
                if (!(var0 !== var1)) {
                    _fun22116_ip = 49;
                    continue _fun22116
                }
            case 26:
                var0 = 6;
                if (!(var0 !== var1)) {
                    _fun22116_ip = 41;
                    continue _fun22116
                }
            case 33:
                var0 = "'prošli' EEEE 'u' p";
                return var0;
            case 41:
                var0 = "'prošlu subotu u' p";
                return var0;
            case 49:
                var0 = "'prošlu srijedu u' p";
                return var0;
            case 57:
                var0 = "'prošlu nedjelju u' p";
                return var0;
        }
    };
    var3.lastWeek = var4;
    var4 = function arg0() {
        _fun22117: for (var _fun22117_ip = 0;;) switch (_fun22117_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.getUTCDay;
                var1 = var0.bind(var1)();
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun22117_ip = 57;
                    continue _fun22117
                }
            case 19:
                var0 = 3;
                if (!(var0 !== var1)) {
                    _fun22117_ip = 49;
                    continue _fun22117
                }
            case 26:
                var0 = 6;
                if (!(var0 !== var1)) {
                    _fun22117_ip = 41;
                    continue _fun22117
                }
            case 33:
                var0 = "'prošli' EEEE 'u' p";
                return var0;
            case 41:
                var0 = "'iduću subotu u' p";
                return var0;
            case 49:
                var0 = "'iduću srijedu u' p";
                return var0;
            case 57:
                var0 = "'iduću nedjelju u' p";
                return var0;
        }
    };
    var3.nextWeek = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2, arg3() {
        _fun22118: for (var _fun22118_ip = 0;;) switch (_fun22118_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = arg0;
                var3 = var1[var0];
                var2 = 'function';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun22118_ip = 38;
                    continue _fun22118
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