// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8358: for (var _fun8358_ip = 0;;) switch (_fun8358_ip) {
        case 0:
            var4 = require;
            var2 = module;
            var0 = exports;
            var5 = dependencyMap;
            var3 = 'object';
            var1 = typeof var0;
            var6 = var3 === var1;
            if (!var6) {
                _fun8358_ip = 29;
                continue _fun8358
            }
        case 26:
            var6 = var0;
        case 29:
            if (!var6) {
                _fun8358_ip = 41;
                continue _fun8358
            }
        case 32:
            var1 = var0.nodeType;
            var6 = !var1;
        case 41:
            if (!var6) {
                _fun8358_ip = 47;
                continue _fun8358
            }
        case 44:
            var6 = var0;
        case 47:
            var1 = var6;
            if (!var1) {
                _fun8358_ip = 60;
                continue _fun8358
            }
        case 53:
            var0 = typeof var2;
            var1 = var3 === var0;
        case 60:
            if (!var1) {
                _fun8358_ip = 66;
                continue _fun8358
            }
        case 63:
            var1 = var2;
        case 66:
            if (!var1) {
                _fun8358_ip = 78;
                continue _fun8358
            }
        case 69:
            var0 = var2.nodeType;
            var1 = !var0;
        case 78:
            if (!var1) {
                _fun8358_ip = 84;
                continue _fun8358
            }
        case 81:
            var1 = var2;
        case 84:
            var0 = undefined;
            var3 = undefined;
            if (!var1) {
                _fun8358_ip = 119;
                continue _fun8358
            }
        case 91:
            var1 = var1.exports;
            var3 = undefined;
            if (!(var1 === var6)) {
                _fun8358_ip = 119;
                continue _fun8358
            }
        case 102:
            var1 = 0;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var3 = var1.Buffer;
        case 119:
            var1 = undefined;
            if (!var3) {
                _fun8358_ip = 130;
                continue _fun8358
            }
        case 124:
            var1 = var3.isBuffer;
        case 130:
            if (var1) {
                _fun8358_ip = 145;
                continue _fun8358
            }
        case 133:
            var3 = 1;
            var3 = var5[var3];
            var1 = var4.bind(var0)(var3);
        case 145:
            var2.exports = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [580, 741]);