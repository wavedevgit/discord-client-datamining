// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun19187: for (var _fun19187_ip = 0;;) switch (_fun19187_ip) {
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
                _fun19187_ip = 75;
                continue _fun19187
            }
        case 63:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun19187_ip = 84;
                continue _fun19187
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
                'full': 'EEEE, MMMM do, y',
                'long': 'MMMM do, y',
                'medium': 'MMM d, y',
                'short': 'MM/dd/yyyy'
            };
            var4.formats = var5;
            var5 = 'full';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.date = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {
                'full': 'h:mm:ss a zzzz',
                'long': 'h:mm:ss a z',
                'medium': 'h:mm:ss a',
                'short': 'h:mm a'
            };
            var4.formats = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.time = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {
                'full': "{{date}} 'at' {{time}}",
                'long': "{{date}} 'at' {{time}}",
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [1681]);