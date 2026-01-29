// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = var3.Image;
    var _closure1_slot0 = var3;
    var1 = function(arg0) { // Original name: parsePossibleSources, environment: var1
        _fun54464: for (var _fun54464_ip = 0;;) switch (_fun54464_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.uri;
                var4 = typeof var2;
                var0 = 'string';
                if (!(var0 !== var4)) {
                    _fun54464_ip = 160;
                    continue _fun54464
                }
            case 22:
                var1 = 'object';
                if (!(var1 === var4)) {
                    _fun54464_ip = 61;
                    continue _fun54464
                }
            case 30:
                if (var5) {
                    _fun54464_ip = 61;
                    continue _fun54464
                }
            case 33:
                var0 = {};
                var3 = global;
                var6 = var3.JSON;
                var3 = var6.stringify;
                var3 = var3.bind(var6)(var2);
                var0.sourceJson = var3;
                _fun54464_ip = 158;
                continue _fun54464;
            case 61:
                if (!(var1 === var4)) {
                    _fun54464_ip = 68;
                    continue _fun54464
                }
            case 65:
                if (var5) {
                    _fun54464_ip = 113;
                    continue _fun54464
                }
            case 68:
                var3 = 'number';
                var1 = undefined;
                if (!(var3 === var4)) {
                    _fun54464_ip = 111;
                    continue _fun54464
                }
            case 78:
                var3 = {};
                var6 = _closure1_slot0;
                var4 = var6.resolveAssetSource;
                var4 = var4.bind(var6)(var2);
                var4 = var4.uri;
                var3.sourceDotLottieURI = var4;
                var1 = var3;
            case 111:
                _fun54464_ip = 155;
                continue _fun54464;
            case 113:
                var4 = var5.includes;
                var3 = '.lottie';
                var3 = var4.bind(var5)(var3);
                var4 = {};
                if (var3) {
                    _fun54464_ip = 144;
                    continue _fun54464
                }
            case 134:
                var4.sourceURL = var5;
                var3 = var4;
                _fun54464_ip = 152;
                continue _fun54464;
            case 144:
                var4.sourceDotLottieURI = var5;
                var3 = var4;
            case 152:
                var1 = var3;
            case 155:
                var0 = var1;
            case 158:
                _fun54464_ip = 170;
                continue _fun54464;
            case 160:
                var1 = {};
                var1.sourceName = var2;
                var0 = var1;
            case 170:
                return var0;
        }
    };
    var2.parsePossibleSources = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);