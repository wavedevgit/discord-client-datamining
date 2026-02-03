// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94331: for (var _fun94331_ip = 0;;) switch (_fun94331_ip) {
        case 0:
            var1 = {
                'option': 'alt',
                'command': 'meta',
                'return': 'enter',
                'escape': 'esc'
            };
            var2 = 'meta';
            var4 = /Mac|iPod|iPhone|iPad/;
            var3 = var4.test;
            var0 = global;
            var0 = var0.navigator;
            var0 = var0.platform;
            var3 = var3.bind(var4)(var0);
            var0 = 'ctrl';
            if (!var3) {
                _fun94331_ip = 66;
                continue _fun94331
            }
        case 63:
            var0 = var2;
        case 66:
            var1.mod = var0;
            var0 = module;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);