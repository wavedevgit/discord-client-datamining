// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function arg0() {
        _fun37911: for (var _fun37911_ip = 0;;) switch (_fun37911_ip) {
            case 0:
                var4 = arg0;
                var1 = !var4;
                var0 = !var1;
                if (var1) {
                    _fun37911_ip = 25;
                    continue _fun37911
                }
            case 12:
                var2 = var4.byteLength;
                var1 = 4;
                var0 = var2 >= var1;
            case 25:
                if (!var0) {
                    _fun37911_ip = 95;
                    continue _fun37911
                }
            case 28:
                var1 = var4.getUint16;
                var2 = 0;
                var5 = var1.bind(var4)(var2);
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = var1[var2];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.LITTLE_ENDIAN;
                var3 = var4.getUint16;
                var2 = 2;
                var1 = var5 === var1;
                var2 = var3.bind(var4)(var2, var1);
                var1 = 42;
                var0 = var2 === var1;
            case 95:
                return var0;
        }
    };
    var0.isTiffFile = var3;
    var2 = function() {
        _fun37912: for (var _fun37912_ip = 0;;) switch (_fun37912_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.USE_EXIF;
                if (var0) {
                    _fun37912_ip = 38;
                    continue _fun37912
                }
            case 34:
                var0 = {};
                return var0;
            case 38:
                var0 = {
                    'hasAppMarkers': true,
                    'tiffHeaderOffset': 0
                };
                return var0;
        }
    };
    var0.findTiffOffsets = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4134, 4132]);