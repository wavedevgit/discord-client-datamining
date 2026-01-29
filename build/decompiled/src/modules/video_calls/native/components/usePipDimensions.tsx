// modules/video_calls/native/components/usePipDimensions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useWindowDimensions;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/usePipDimensions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: usePipDimensions, environment: var1
        _fun62774: for (var _fun62774_ip = 0;;) switch (_fun62774_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.channelId;
                var5 = var1.forcedOrientation;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun62774_ip = 24;
                    continue _fun62774
                }
            case 22:
                var5 = null;
            case 24:
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var6 = var4.bind(var3)(var2);
                var4 = var6.useIsViewingActivity;
                var2 = {};
                var2.channelId = var7;
                var4 = var4.bind(var6)(var2);
                _closure2_slot1 = var4;
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)();
                var6 = var2.width;
                _closure2_slot2 = var6;
                var7 = var2.height;
                _closure2_slot3 = var7;
                var3 = _closure1_slot2;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun62775: for (var _fun62775_ip = 0;;) switch (_fun62775_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var3 = var2 > var1;
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var8 = 3;
                            var1 = var1[var8];
                            var7 = undefined;
                            var1 = var5.bind(var7)(var1);
                            var1 = var1.OrientationType;
                            var1 = var1.LANDSCAPE;
                            var4 = var4 === var1;
                            if (var4) {
                                _fun62775_ip = 109;
                                continue _fun62775
                            }
                        case 63:
                            var1 = var3;
                            if (!var3) {
                                _fun62775_ip = 106;
                                continue _fun62775
                            }
                        case 69:
                            var5 = _closure2_slot0;
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var8];
                            var2 = var6.bind(var7)(var2);
                            var2 = var2.OrientationType;
                            var2 = var2.PORTRAIT;
                            var1 = var5 !== var2;
                        case 106:
                            var4 = var1;
                        case 109:
                            var5 = _closure2_slot1;
                            var1 = 96;
                            var2 = var1;
                            if (var5) {
                                _fun62775_ip = 413;
                                continue _fun62775
                            }
                        case 125:
                            if (var3) {
                                _fun62775_ip = 196;
                                continue _fun62775
                            }
                        case 128:
                            if (var4) {
                                _fun62775_ip = 196;
                                continue _fun62775
                            }
                        case 131:
                            var5 = global;
                            var8 = var5.Math;
                            var7 = var8.min;
                            var6 = _closure2_slot3;
                            var5 = 0.25;
                            var6 = var5 * var6;
                            var5 = 300;
                            var5 = var7.bind(var8)(var6, var5);
                            var6 = 0.5625;
                            var1 = var5 * var6;
                            var2 = var5;
                            _fun62775_ip = 413;
                            continue _fun62775;
                        case 196:
                            if (var3) {
                                _fun62775_ip = 267;
                                continue _fun62775
                            }
                        case 199:
                            if (!var4) {
                                _fun62775_ip = 267;
                                continue _fun62775
                            }
                        case 202:
                            var5 = global;
                            var8 = var5.Math;
                            var7 = var8.min;
                            var6 = _closure2_slot2;
                            var5 = 0.5;
                            var6 = var5 * var6;
                            var5 = 400;
                            var6 = var7.bind(var8)(var6, var5);
                            var5 = 0.5625;
                            var2 = var6 * var5;
                            var1 = var6;
                            _fun62775_ip = 413;
                            continue _fun62775;
                        case 267:
                            if (!var3) {
                                _fun62775_ip = 273;
                                continue _fun62775
                            }
                        case 270:
                            if (var4) {
                                _fun62775_ip = 353;
                                continue _fun62775
                            }
                        case 273:
                            if (!var3) {
                                _fun62775_ip = 279;
                                continue _fun62775
                            }
                        case 276:
                            var3 = !var4;
                        case 279:
                            var1 = 1;
                            var2 = var1;
                            if (!var3) {
                                _fun62775_ip = 413;
                                continue _fun62775
                            }
                        case 291:
                            var3 = global;
                            var6 = var3.Math;
                            var5 = var6.min;
                            var4 = _closure2_slot3;
                            var3 = 0.5;
                            var4 = var3 * var4;
                            var3 = 300;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = 0.5625;
                            var1 = var3 * var4;
                            var2 = var3;
                            _fun62775_ip = 413;
                            continue _fun62775;
                        case 353:
                            var3 = global;
                            var5 = var3.Math;
                            var4 = var5.min;
                            var3 = _closure2_slot2;
                            var0 = 0.25;
                            var3 = var0 * var3;
                            var0 = 400;
                            var3 = var4.bind(var5)(var3, var0);
                            var0 = 0.5625;
                            var2 = var3 * var0;
                            var1 = var3;
                        case 413:
                            var0 = {};
                            var0.height = var2;
                            var0.width = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7862, 7777, 2]);