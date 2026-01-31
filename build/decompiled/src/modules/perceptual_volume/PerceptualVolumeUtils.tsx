// modules/perceptual_volume/PerceptualVolumeUtils.tsx
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
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/perceptual_volume/PerceptualVolumeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun35995: for (var _fun35995_ip = 0;;) switch (_fun35995_ip) {
            case 0:
                var1 = arg0;
                var2 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun35995_ip = 15;
                    continue _fun35995
                }
            case 12:
                var2 = 100;
            case 15:
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun35995_ip = 111;
                    continue _fun35995
                }
            case 21:
                var6 = var1 / var2;
                var1 = 1;
                if (!(!(var6 < var1))) {
                    _fun35995_ip = 75;
                    continue _fun35995
                }
            case 32:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.pow;
                var7 = var6 - var1;
                var3 = 10;
                var1 = 6;
                var7 = var1 * var7;
                var1 = 20;
                var1 = var7 / var1;
                var1 = var4.bind(var5)(var3, var1);
                _fun35995_ip = 105;
                continue _fun35995;
            case 75:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.pow;
                var3 = 2.8;
                var1 = var4.bind(var5)(var6, var3);
            case 105:
                var1 = var1 * var2;
                return var1;
            case 111:
                return var0;
        }
    };
    var2.perceptualToAmplitude = var3;
    var1 = function arg0() {
        _fun35996: for (var _fun35996_ip = 0;;) switch (_fun35996_ip) {
            case 0:
                var1 = arg0;
                var2 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun35996_ip = 15;
                    continue _fun35996
                }
            case 12:
                var2 = 100;
            case 15:
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun35996_ip = 107;
                    continue _fun35996
                }
            case 21:
                var6 = var1 / var2;
                var3 = 1;
                if (!(!(var6 < var3))) {
                    _fun35996_ip = 71;
                    continue _fun35996
                }
            case 32:
                var1 = global;
                var4 = var1.Math;
                var1 = var4.log10;
                var4 = var1.bind(var4)(var6);
                var1 = 20;
                var4 = var1 * var4;
                var1 = 6;
                var1 = var4 / var1;
                var1 = var1 + var3;
                _fun35996_ip = 101;
                continue _fun35996;
            case 71:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.pow;
                var3 = 0.35714285714285715;
                var1 = var4.bind(var5)(var6, var3);
            case 101:
                var1 = var1 * var2;
                return var1;
            case 107:
                return var0;
        }
    };
    var2.amplitudeToPerceptual = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);