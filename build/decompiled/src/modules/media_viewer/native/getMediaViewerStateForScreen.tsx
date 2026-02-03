// modules/media_viewer/native/getMediaViewerStateForScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/getMediaViewerStateForScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun76496: for (var _fun76496_ip = 0;;) switch (_fun76496_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 0;
                var3 = var0[var7];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.flattenSource;
                var3 = arg2;
                var0 = true;
                var3 = var4.bind(var5)(var3, var0);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun76496_ip = 371;
                    continue _fun76496
                }
            case 56:
                var4 = var2 / var1;
                var5 = var3.width;
                var0 = var3.height;
                var0 = var5 / var0;
                var5 = var3.width;
                if (!(var5 < var2)) {
                    _fun76496_ip = 95;
                    continue _fun76496
                }
            case 83:
                var5 = var3.height;
                if (!(!(var5 < var1))) {
                    _fun76496_ip = 263;
                    continue _fun76496
                }
            case 95:
                if (!(!(var0 > var4))) {
                    _fun76496_ip = 181;
                    continue _fun76496
                }
            case 99:
                var5 = var3.height;
                var11 = var1 / var5;
                var5 = {};
                var8 = 1;
                var6 = var8 / var11;
                var6 = var6 + var8;
                var5.maximumZoomScale = var6;
                var6 = global;
                var10 = var6.Math;
                var9 = var10.floor;
                var8 = var3.width;
                var8 = var8 * var11;
                var8 = var9.bind(var10)(var8);
                var5.width = var8;
                var8 = var6.Math;
                var6 = var8.floor;
                var6 = var6.bind(var8)(var1);
                var5.height = var6;
                return var5;
            case 181:
                var5 = var3.width;
                var10 = var2 / var5;
                var5 = {};
                var8 = 1;
                var6 = var8 / var10;
                var6 = var6 + var8;
                var5.maximumZoomScale = var6;
                var6 = global;
                var9 = var6.Math;
                var8 = var9.floor;
                var8 = var8.bind(var9)(var2);
                var5.width = var8;
                var9 = var6.Math;
                var8 = var9.floor;
                var6 = var3.height;
                var6 = var6 * var10;
                var6 = var8.bind(var9)(var6);
                var5.height = var6;
                return var5;
            case 263:
                if (!(!(var0 > var4))) {
                    _fun76496_ip = 278;
                    continue _fun76496
                }
            case 267:
                var0 = var3.height;
                var4 = var0 / var1;
                _fun76496_ip = 287;
                continue _fun76496;
            case 278:
                var0 = var3.width;
                var4 = var0 / var2;
            case 287:
                var0 = 1.01;
                var6 = var4 / var0;
                var0 = global;
                var5 = var0.Math;
                var4 = var5.min;
                var0 = 0.5;
                var6 = var4.bind(var5)(var0, var6);
                var0 = {};
                var5 = 1;
                var4 = var5;
                if (!(var7 !== var6)) {
                    _fun76496_ip = 346;
                    continue _fun76496
                }
            case 342:
                var4 = var5 / var6;
            case 346:
                var0.maximumZoomScale = var4;
                var4 = var3.width;
                var0.width = var4;
                var3 = var3.height;
                var0.height = var3;
                return var0;
            case 371:
                var0 = {};
                var3 = 1;
                var0.maximumZoomScale = var3;
                var0.width = var2;
                var0.height = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8837, 2]);