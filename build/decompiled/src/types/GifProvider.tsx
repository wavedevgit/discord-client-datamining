// types/GifProvider.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = ['tenor', 'giphy', 'klipy'];
    var _closure1_slot0 = var3;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'types/GifProvider.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = {
        'enabled': false,
        'sendProviderToAPI': false,
        'fallbackProvider': 'tenor'
    };
    var2.DEFAULT_GIF_PROVIDER_CONFIG = var4;
    var2.VALID_GIF_PROVIDERS = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isValidGifProvider = var3;
    var1 = function arg0() {
        _fun73204: for (var _fun73204_ip = 0;;) switch (_fun73204_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.enabled;
                if (!var0) {
                    _fun73204_ip = 20;
                    continue _fun73204
                }
            case 11:
                var0 = var1.sendProviderToAPI;
                if (var0) {
                    _fun73204_ip = 24;
                    continue _fun73204
                }
            case 20:
                var0 = undefined;
                return var0;
            case 24:
                var2 = var1.userProvider;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun73204_ip = 44;
                    continue _fun73204
                }
            case 36:
                var0 = var1.fallbackProvider;
                _fun73204_ip = 50;
                continue _fun73204;
            case 44:
                var0 = var1.userProvider;
            case 50:
                return var0;
        }
    };
    var2.getProviderForRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);