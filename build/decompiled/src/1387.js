// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16251: for (var _fun16251_ip = 0;;) switch (_fun16251_ip) {
        case 0:
            var1 = module;
            var0 = global;
            var2 = var0.process;
            var2 = var2.env;
            var3 = var2.npm_package_name;
            var2 = 'pseudomap';
            var2 = var2 === var3;
            if (!var2) {
                _fun16251_ip = 62;
                continue _fun16251
            }
        case 36:
            var3 = var0.process;
            var3 = var3.env;
            var4 = var3.npm_lifecycle_script;
            var3 = 'test';
            var2 = var3 === var4;
        case 62:
            if (!var2) {
                _fun16251_ip = 87;
                continue _fun16251
            }
        case 65:
            var2 = var0.process;
            var3 = var2.env;
            var2 = 'true';
            var3.TEST_PSEUDOMAP = var2;
        case 87:
            var2 = var0.Map;
            var3 = 'function';
            var2 = typeof var2;
            if (!(var3 === var2)) {
                _fun16251_ip = 138;
                continue _fun16251
            }
        case 103:
            var2 = var0.process;
            var2 = var2.env;
            var2 = var2.TEST_PSEUDOMAP;
            if (var2) {
                _fun16251_ip = 138;
                continue _fun16251
            }
        case 124:
            var0 = var0.Map;
            var1.exports = var0;
            _fun16251_ip = 163;
            continue _fun16251;
        case 138:
            var2 = dependencyMap;
            var0 = 0;
            var3 = var2[var0];
            var2 = require;
            var0 = undefined;
            var0 = var2.bind(var0)(var3);
            var1.exports = var0;
        case 163:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1388]);