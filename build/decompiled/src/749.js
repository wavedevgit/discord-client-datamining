// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8370: for (var _fun8370_ip = 0;;) switch (_fun8370_ip) {
        case 0:
            var2 = module;
            var1 = exports;
            var0 = undefined;
            var3 = undefined;
            var4 = undefined;
            var7 = 'object';
            var5 = typeof var1;
            var6 = var7 === var5;
            if (!var6) {
                _fun8370_ip = 29;
                continue _fun8370
            }
        case 26:
            var6 = var1;
        case 29:
            if (!var6) {
                _fun8370_ip = 41;
                continue _fun8370
            }
        case 32:
            var5 = var1.nodeType;
            var6 = !var5;
        case 41:
            if (!var6) {
                _fun8370_ip = 47;
                continue _fun8370
            }
        case 44:
            var6 = var1;
        case 47:
            var5 = var6;
            if (!var5) {
                _fun8370_ip = 60;
                continue _fun8370
            }
        case 53:
            var1 = typeof var2;
            var5 = var7 === var1;
        case 60:
            if (!var5) {
                _fun8370_ip = 66;
                continue _fun8370
            }
        case 63:
            var5 = var2;
        case 66:
            if (!var5) {
                _fun8370_ip = 78;
                continue _fun8370
            }
        case 69:
            var1 = var2.nodeType;
            var5 = !var1;
        case 78:
            if (!var5) {
                _fun8370_ip = 84;
                continue _fun8370
            }
        case 81:
            var5 = var2;
        case 84:
            var3 = var5;
            var1 = var5;
            if (!var1) {
                _fun8370_ip = 102;
                continue _fun8370
            }
        case 93:
            var5 = var5.exports;
            var1 = var5 === var6;
        case 102:
            if (!var1) {
                _fun8370_ip = 128;
                continue _fun8370
            }
        case 105:
            var6 = dependencyMap;
            var5 = 0;
            var6 = var6[var5];
            var5 = require;
            var5 = var5.bind(var0)(var6);
            var1 = var5.process;
        case 128:
            var4 = var1;
        case 131: // try_start_0
            var6 = var3;
            var5 = var6;
            if (!var6) {
                _fun8370_ip = 149;
                continue _fun8370
            }
        case 140:
            var6 = var3;
            var5 = var6.require;
        case 149:
            var1 = var5;
            if (!var5) {
                _fun8370_ip = 179;
                continue _fun8370
            }
        case 155:
            var6 = var3;
            var5 = var6.require;
            var3 = 'util';
            var3 = var5.bind(var6)(var3);
            var1 = var3.types;
        case 179:
            var3 = var1;
            var1 = var3;
            if (var3) {
                _fun8370_ip = 233;
                continue _fun8370
            }
        case 188:
            var6 = var4;
            var5 = var6;
            if (!var6) {
                _fun8370_ip = 206;
                continue _fun8370
            }
        case 197:
            var6 = var4;
            var5 = var6.binding;
        case 206:
            var3 = var5;
            if (!var5) {
                _fun8370_ip = 230;
                continue _fun8370
            }
        case 212:
            var6 = var4;
            var5 = var6.binding;
            var4 = 'util';
            var3 = var5.bind(var6)(var4);
        case 230:
            var1 = var3;
        case 233: // try_end0
            _fun8370_ip = 239;
            continue _fun8370;
        case 235: // catch_target0
            CatchBlockStart(arg_register = 3);
            var1 = undefined;
        case 239:
            var2.exports = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [581]);