// modules/soundboard/getSoundboardSoundURL.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/getSoundboardSoundURL.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun99102: for (var _fun99102_ip = 0;;) switch (_fun99102_ip) {
            case 0:
                var5 = arg0;
                var1 = global;
                var0 = var1.window;
                var0 = var0.GLOBAL_ENV;
                var4 = var0.CDN_HOST;
                var2 = var0.PROJECT_ENV;
                var0 = 'development';
                if (!(var0 === var2)) {
                    _fun99102_ip = 109;
                    continue _fun99102
                }
            case 37:
                var0 = var1.location;
                var7 = var0.protocol;
                var0 = var1.window;
                var0 = var0.GLOBAL_ENV;
                var6 = var0.API_ENDPOINT;
                var2 = _closure1_slot0;
                var0 = var2.SOUNDBOARD_SOUND;
                var3 = var0.bind(var2)(var5);
                var0 = var1.HermesInternal;
                var2 = var0.concat;
                var0 = '';
                var0 = var2.bind(var0)(var7, var6, var3);
                _fun99102_ip = 150;
                continue _fun99102;
            case 109:
                var3 = _closure1_slot0;
                var2 = var3.SOUNDBOARD_SOUND;
                var3 = var2.bind(var3)(var5);
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'https://';
                var0 = var2.bind(var1)(var4, var3);
            case 150:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);