// modules/video_backgrounds/isVideoBackgroundSupported.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Features;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_backgrounds/isVideoBackgroundSupported.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun66583: for (var _fun66583_ip = 0;;) switch (_fun66583_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66583_ip = 16;
                    continue _fun66583
                }
            case 9:
                var1 = _closure1_slot0;
            case 16:
                var2 = var1.supports;
                var0 = _closure1_slot1;
                var0 = var0.MEDIAPIPE;
                var0 = var2.bind(var1)(var0);
                var4 = var1;
                if (!var0) {
                    _fun66583_ip = 85;
                    continue _fun66583
                }
            case 46:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = var4.getVideoDevices;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var0 = var2 > var1;
            case 85:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3476, 3510, 2]);