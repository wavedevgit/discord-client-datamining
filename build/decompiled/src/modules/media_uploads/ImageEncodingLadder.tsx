// modules/media_uploads/ImageEncodingLadder.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var3 = function arg0, arg1() {
        _fun37731: for (var _fun37731_ip = 0;;) switch (_fun37731_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = var1.useAdaptiveCompression;
                if (var2) {
                    _fun37731_ip = 30;
                    continue _fun37731
                }
            case 15:
                var2 = _closure1_slot2;
                var2 = var2.HIGH;
                return var2;
            case 30:
                var2 = var0.width;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun37731_ip = 254;
                    continue _fun37731
                }
            case 44:
                var2 = var0.height;
                if (!(var3 != var2)) {
                    _fun37731_ip = 254;
                    continue _fun37731
                }
            case 56:
                var2 = var0.width;
                var0 = var0.height;
                var4 = var2 * var0;
                var0 = _closure1_slot3;
                var0 = var0.SMALL;
                if (!(!(var4 <= var0))) {
                    _fun37731_ip = 229;
                    continue _fun37731
                }
            case 90:
                var0 = _closure1_slot3;
                var0 = var0.MEDIUM;
                if (!(!(var4 <= var0))) {
                    _fun37731_ip = 204;
                    continue _fun37731
                }
            case 104:
                var0 = _closure1_slot3;
                var0 = var0.LARGE;
                if (!(!(var4 <= var0))) {
                    _fun37731_ip = 179;
                    continue _fun37731
                }
            case 118:
                var0 = _closure1_slot3;
                var0 = var0.VERY_LARGE;
                if (!(!(var4 <= var0))) {
                    _fun37731_ip = 154;
                    continue _fun37731
                }
            case 132:
                var0 = var1.veryLowQuality;
                if (!(var3 == var0)) {
                    _fun37731_ip = 152;
                    continue _fun37731
                }
            case 142:
                var4 = _closure1_slot2;
                var0 = var4.HIGH;
            case 152:
                _fun37731_ip = 177;
                continue _fun37731;
            case 154:
                var4 = var1.lowQuality;
                if (!(var3 == var4)) {
                    _fun37731_ip = 174;
                    continue _fun37731
                }
            case 164:
                var5 = _closure1_slot2;
                var4 = var5.HIGH;
            case 174:
                var0 = var4;
            case 177:
                _fun37731_ip = 202;
                continue _fun37731;
            case 179:
                var4 = var1.mediumQuality;
                if (!(var3 == var4)) {
                    _fun37731_ip = 199;
                    continue _fun37731
                }
            case 189:
                var5 = _closure1_slot2;
                var4 = var5.HIGH;
            case 199:
                var0 = var4;
            case 202:
                _fun37731_ip = 227;
                continue _fun37731;
            case 204:
                var4 = var1.highQuality;
                if (!(var3 == var4)) {
                    _fun37731_ip = 224;
                    continue _fun37731
                }
            case 214:
                var5 = _closure1_slot2;
                var4 = var5.HIGH;
            case 224:
                var0 = var4;
            case 227:
                _fun37731_ip = 252;
                continue _fun37731;
            case 229:
                var1 = var1.veryHighQuality;
                if (!(var3 == var1)) {
                    _fun37731_ip = 249;
                    continue _fun37731
                }
            case 239:
                var2 = _closure1_slot2;
                var1 = var2.HIGH;
            case 249:
                var0 = var1;
            case 252:
                return var0;
            case 254:
                var0 = _closure1_slot2;
                var0 = var0.HIGH;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var8[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.CompressionQuality;
    var _closure1_slot2 = var4;
    var5 = {
        'SMALL': 921600,
        'MEDIUM': 2073600,
        'LARGE': 3686400,
        'VERY_LARGE': 8294400
    };
    var _closure1_slot3 = var5;
    var4 = {
        'useAdaptiveCompression': true,
        'veryHighQuality': 0.8,
        'highQuality': 0.7,
        'mediumQuality': 0.6,
        'lowQuality': 0.5,
        'veryLowQuality': 0.4,
        'useOriginalIfSmaller': true
    };
    var _closure1_slot4 = var4;
    var1 = function() { // Environment: var1
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var0 = {};
        var2 = 'selectEncodingConfig';
        var0.key = var2;
        var2 = function arg0() {
            _fun37734: for (var _fun37734_ip = 0;;) switch (_fun37734_ip) {
                case 0:
                    var0 = arg0;
                    var6 = _closure2_slot0;
                    var5 = var6.clampDimensions;
                    var11 = var0.width;
                    var10 = var0.height;
                    var9 = 3840;
                    var8 = 2160;
                    var12 = var6;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
                    var3 = var1.targetWidth;
                    var2 = var1.targetHeight;
                    var1 = var0.width;
                    if (!(var1 === var3)) {
                        _fun37734_ip = 77;
                        continue _fun37734
                    }
                case 68:
                    var0 = var0.height;
                    if (!(var0 !== var2)) {
                        _fun37734_ip = 138;
                        continue _fun37734
                    }
                case 77:
                    var0 = {};
                    var1 = _closure1_slot4;
                    var1 = var1.lowQuality;
                    var4 = null;
                    var5 = var4 != var1;
                    var4 = 0.5;
                    if (!var5) {
                        _fun37734_ip = 114;
                        continue _fun37734
                    }
                case 111:
                    var4 = var1;
                case 114:
                    var1 = 100;
                    var1 = var1 * var4;
                    var0.compressionQuality = var1;
                    var0.targetWidth = var3;
                    var0.targetHeight = var2;
                    _fun37734_ip = 194;
                    continue _fun37734;
                case 138:
                    var1 = {};
                    var7 = _closure1_slot5;
                    var6 = {};
                    var6.width = var3;
                    var6.height = var2;
                    var5 = _closure1_slot4;
                    var4 = undefined;
                    var5 = var7.bind(var4)(var6, var5);
                    var4 = 100;
                    var4 = var4 * var5;
                    var1.compressionQuality = var4;
                    var1.targetWidth = var3;
                    var1.targetHeight = var2;
                    var0 = var1;
                case 194:
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'clampDimensions';
        var0.key = var5;
        var1 = function arg0, arg1, arg2, arg3() {
            _fun37735: for (var _fun37735_ip = 0;;) switch (_fun37735_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var3 = arg2;
                    var0 = arg3;
                    if (!(var2 <= var3)) {
                        _fun37735_ip = 20;
                        continue _fun37735
                    }
                case 16:
                    if (!(!(var1 <= var0))) {
                        _fun37735_ip = 138;
                        continue _fun37735
                    }
                case 20:
                    var7 = global;
                    var5 = var7.Math;
                    var4 = var5.min;
                    var3 = var3 / var2;
                    var0 = var0 / var1;
                    var3 = var4.bind(var5)(var3, var0);
                    var0 = {};
                    var8 = var7.Math;
                    var5 = var8.max;
                    var9 = var7.Math;
                    var6 = var9.round;
                    var4 = var2 * var3;
                    var4 = var6.bind(var9)(var4);
                    var6 = 1;
                    var4 = var5.bind(var8)(var6, var4);
                    var0.targetWidth = var4;
                    var5 = var7.Math;
                    var4 = var5.max;
                    var8 = var7.Math;
                    var7 = var8.round;
                    var3 = var1 * var3;
                    var3 = var7.bind(var8)(var3);
                    var3 = var4.bind(var5)(var6, var3);
                    var0.targetHeight = var3;
                    return var0;
                case 138:
                    var0 = {};
                    var0.targetWidth = var2;
                    var0.targetHeight = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/media_uploads/ImageEncodingLadder.tsx';
    var6 = var7.bind(var8)(var6);
    var2.IMAGE_COMPRESSION_THRESHOLDS = var5;
    var2.ADAPTIVE_COMPRESSION_CONFIG = var4;
    var2.getAdaptiveImageCompressionQuality = var3;
    var2.ImageEncodingLadder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 660, 2]);