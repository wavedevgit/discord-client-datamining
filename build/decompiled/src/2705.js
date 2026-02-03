// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22303: for (var _fun22303_ip = 0;;) switch (_fun22303_ip) {
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
                _fun22303_ip = 75;
                continue _fun22303
            }
        case 63:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22303_ip = 84;
                continue _fun22303
            }
        case 75:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 84:
            var2 = {};
            var6 = var3.default;
            var4 = {};
            var5 = {
                'full': 'วันEEEEที่ do MMMM y',
                'long': 'do MMMM y',
                'medium': 'd MMM y',
                'short': 'dd/MM/yyyy'
            };
            var4.formats = var5;
            var5 = 'full';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.date = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {
                'full': 'H:mm:ss น. zzzz',
                'long': 'H:mm:ss น. z',
                'medium': 'H:mm:ss น.',
                'short': 'H:mm น.'
            };
            var4.formats = var7;
            var7 = 'medium';
            var4.defaultWidth = var7;
            var4 = var6.bind(var0)(var4);
            var2.time = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {
                'full': "{{date}} 'เวลา' {{time}}",
                'long': "{{date}} 'เวลา' {{time}}",
                'medium': '{{date}}, {{time}}',
                'short': '{{date}}, {{time}}'
            };
            var3.formats = var6;
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