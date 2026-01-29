// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2090: for (var _fun2090_ip = 0;;) switch (_fun2090_ip) {
        case 0:
            var1 = global;
            var2 = var1.window;
            var0 = undefined;
            if (!(var0 === var2)) {
                _fun2090_ip = 20;
                continue _fun2090
            }
        case 14:
            var1.window = var1;
        case 20:
            var2 = var1.self;
            if (!(var0 === var2)) {
                _fun2090_ip = 36;
                continue _fun2090
            }
        case 30:
            var1.self = var1;
        case 36:
            var2 = var1.process;
            if (var2) {
                _fun2090_ip = 47;
                continue _fun2090
            }
        case 45:
            var2 = {};
        case 47:
            var1.process = var2;
            var3 = var1.process;
            var2 = var1.process;
            var2 = var2.env;
            if (var2) {
                _fun2090_ip = 76;
                continue _fun2090
            }
        case 74:
            var2 = {};
        case 76:
            var3.env = var2;
            var2 = var1.process;
            var2 = var2.env;
            var2 = var2.NODE_ENV;
            if (var2) {
                _fun2090_ip = 125;
                continue _fun2090
            }
        case 103:
            var1 = var1.process;
            var2 = var1.env;
            var1 = 'production';
            var2.NODE_ENV = var1;
        case 125:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);