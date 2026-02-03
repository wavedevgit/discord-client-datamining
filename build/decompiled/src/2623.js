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
        'about': 'körülbelül',
        'over': 'több mint',
        'almost': 'majdnem',
        'lessthan': 'kevesebb mint'
    };
    var _closure1_slot0 = var3;
    var3 = {
        'xseconds': ' másodperc',
        'halfaminute': 'fél perc',
        'xminutes': ' perc',
        'xhours': ' óra',
        'xdays': ' nap',
        'xweeks': ' hét',
        'xmonths': ' hónap',
        'xyears': ' év'
    };
    var _closure1_slot1 = var3;
    var3 = {};
    var4 = {
        '-1': ' másodperccel ezelőtt',
        1: ' másodperc múlva',
        0: ' másodperce'
    };
    var3.xseconds = var4;
    var4 = {
        '-1': 'fél perccel ezelőtt',
        1: 'fél perc múlva',
        0: 'fél perce'
    };
    var3.halfaminute = var4;
    var4 = {
        '-1': ' perccel ezelőtt',
        1: ' perc múlva',
        0: ' perce'
    };
    var3.xminutes = var4;
    var4 = {
        '-1': ' órával ezelőtt',
        1: ' óra múlva',
        0: ' órája'
    };
    var3.xhours = var4;
    var4 = {
        '-1': ' nappal ezelőtt',
        1: ' nap múlva',
        0: ' napja'
    };
    var3.xdays = var4;
    var4 = {
        '-1': ' héttel ezelőtt',
        1: ' hét múlva',
        0: ' hete'
    };
    var3.xweeks = var4;
    var4 = {
        '-1': ' hónappal ezelőtt',
        1: ' hónap múlva',
        0: ' hónapja'
    };
    var3.xmonths = var4;
    var4 = {
        '-1': ' évvel ezelőtt',
        1: ' év múlva',
        0: ' éve'
    };
    var3.xyears = var4;
    var _closure1_slot2 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun22027: for (var _fun22027_ip = 0;;) switch (_fun22027_ip) {
            case 0:
                var5 = arg0;
                var0 = arg2;
                var2 = var5.match;
                var1 = /about|over|almost|lessthan/i;
                var3 = var2.bind(var5)(var1);
                var6 = var5;
                if (!var3) {
                    _fun22027_ip = 58;
                    continue _fun22027
                }
            case 37:
                var4 = var5.replace;
                var1 = 0;
                var2 = var3[var1];
                var1 = '';
                var6 = var4.bind(var5)(var2, var1);
            case 58:
                var5 = null;
                var4 = var5 == var0;
                var1 = undefined;
                if (var4) {
                    _fun22027_ip = 75;
                    continue _fun22027
                }
            case 69:
                var1 = var0.addSuffix;
            case 75:
                var4 = var6.toLowerCase;
                var4 = var4.bind(var6)();
                var5 = var5 == var0;
                var2 = undefined;
                if (var5) {
                    _fun22027_ip = 100;
                    continue _fun22027
                }
            case 94:
                var2 = var0.comparison;
            case 100:
                if (var2) {
                    _fun22027_ip = 105;
                    continue _fun22027
                }
            case 103:
                var2 = 0;
            case 105:
                var0 = true;
                if (!(var0 !== var1)) {
                    _fun22027_ip = 124;
                    continue _fun22027
                }
            case 111:
                var0 = _closure1_slot1;
                var1 = var0[var4];
                _fun22027_ip = 139;
                continue _fun22027;
            case 124:
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var1 = var0[var2];
            case 139:
                var0 = 'halfaminute';
                var2 = var1;
                if (!(var0 !== var4)) {
                    _fun22027_ip = 157;
                    continue _fun22027
                }
            case 150:
                var0 = arg1;
                var2 = var0 + var1;
            case 157:
                var0 = var2;
                if (!var3) {
                    _fun22027_ip = 204;
                    continue _fun22027
                }
            case 163:
                var1 = 0;
                var3 = var3[var1];
                var1 = var3.toLowerCase;
                var3 = var1.bind(var3)();
                var1 = _closure1_slot0;
                var3 = var1[var3];
                var1 = ' ';
                var1 = var3 + var1;
                var0 = var1 + var2;
            case 204:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);