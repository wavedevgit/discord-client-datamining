// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22272: for (var _fun22272_ip = 0;;) switch (_fun22272_ip) {
        case 0:
            var1 = exports;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var2 = {};
            var0 = true;
            var2.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var1, var0, var2);
            var0 = undefined;
            var1.default = var0;
            var3 = dependencyMap;
            var2 = 0;
            var3 = var3[var2];
            var2 = require;
            var4 = var2.bind(var0)(var3);
            if (!var4) {
                _fun22272_ip = 75;
                continue _fun22272
            }
        case 63:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22272_ip = 84;
                continue _fun22272
            }
        case 75:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 84:
            var2 = {};
            var5 = var3.default;
            var4 = {};
            var6 = {
                'full': "EEEE, d MMMM y 'г.'",
                'long': "d MMMM y 'г.'",
                'medium': "d MMM y 'г.'",
                'short': 'dd.MM.y'
            };
            var4.formats = var6;
            var6 = 'full';
            var4.defaultWidth = var6;
            var4 = var5.bind(var0)(var4);
            var2.date = var4;
            var5 = var3.default;
            var4 = {};
            var7 = {
                'full': 'H:mm:ss zzzz',
                'long': 'H:mm:ss z',
                'medium': 'H:mm:ss',
                'short': 'H:mm'
            };
            var4.formats = var7;
            var4.defaultWidth = var6;
            var4 = var5.bind(var0)(var4);
            var2.time = var4;
            var4 = var3.default;
            var3 = {};
            var5 = {};
            var6 = '{{date}}, {{time}}';
            var5.any = var6;
            var3.formats = var5;
            var5 = 'any';
            var3.defaultWidth = var5;
            var3 = var4.bind(var0)(var3);
            var2.dateTime = var3;
            var1.default = var2;
            var2 = var1.default;
            var1 = module;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1690]);