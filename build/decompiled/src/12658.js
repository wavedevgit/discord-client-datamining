// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96879: for (var _fun96879_ip = 0;;) switch (_fun96879_ip) {
        case 0:
            var5 = require;
            var6 = dependencyMap;
            var0 = 0;
            var1 = var6[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var2 = var1["__core-js_shared__"];
            if (var2) {
                _fun96879_ip = 52;
                continue _fun96879
            }
        case 28:
            var1 = 1;
            var1 = var6[var1];
            var4 = var5.bind(var0)(var1);
            var3 = '__core-js_shared__';
            var1 = {};
            var2 = var4.bind(var0)(var3, var1);
        case 52:
            var1 = module;
            var1.exports = var2;
            var3 = var2.versions;
            if (var3) {
                _fun96879_ip = 83;
                continue _fun96879
            }
        case 70:
            var1 = new Array(0);
            var2.versions = var1;
            var3 = var1;
        case 83:
            var2 = var3.push;
            var1 = {
                'version': '3.41.0',
                'mode': null,
                'copyright': '© 2014-2025 Denis Pushkarev (zloirock.ru)',
                'license': 'https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE',
                'source': 'https://github.com/zloirock/core-js'
            };
            var4 = 2;
            var4 = var6[var4];
            var5 = var5.bind(var0)(var4);
            var4 = 'global';
            if (!var5) {
                _fun96879_ip = 127;
                continue _fun96879
            }
        case 121:
            var4 = 'pure';
        case 127:
            var1.mode = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12642, 12643, 12659]);