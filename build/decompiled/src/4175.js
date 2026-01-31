// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0, arg1) { // Original name: getImageWidth, environment: var2
        _fun38325: for (var _fun38325_ip = 0;;) switch (_fun38325_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = 0;
                var5 = var2 + var1;
                var4 = var3.byteLength;
                var0 = 4;
                var0 = var5 + var0;
                if (!(!(var0 > var4))) {
                    _fun38325_ip = 102;
                    continue _fun38325
                }
            case 29:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = var0[var1];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.getLongAt;
                var4 = var0.bind(var1)(var3, var2);
                var0 = {};
                var0.value = var4;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = 'px';
                var1 = var3.bind(var2)(var4, var1);
                var0.description = var1;
                return var0;
            case 102:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = function(arg0, arg1) { // Original name: getImageHeight, environment: var2
        _fun38326: for (var _fun38326_ip = 0;;) switch (_fun38326_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = 4;
                var1 = var4 + var0;
                var2 = var3.byteLength;
                var1 = var1 + var0;
                if (!(!(var1 > var2))) {
                    _fun38326_ip = 106;
                    continue _fun38326
                }
            case 27:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.getLongAt;
                var0 = var4 + var0;
                var4 = var1.bind(var2)(var3, var0);
                var0 = {};
                var0.value = var4;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = 'px';
                var1 = var3.bind(var2)(var4, var1);
                var0.description = var1;
                return var0;
            case 106:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0, arg1) { // Original name: getBitDepth, environment: var2
        _fun38327: for (var _fun38327_ip = 0;;) switch (_fun38327_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = 8;
                var5 = var4 + var0;
                var2 = var3.byteLength;
                var1 = 1;
                var1 = var5 + var1;
                if (!(!(var1 > var2))) {
                    _fun38327_ip = 104;
                    continue _fun38327
                }
            case 30:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.getByteAt;
                var0 = var4 + var0;
                var3 = var1.bind(var2)(var3, var0);
                var0 = {};
                var0.value = var3;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var1 = var2.bind(var1)(var3);
                var0.description = var1;
                return var0;
            case 104:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1) { // Original name: getColorType, environment: var2
        _fun38328: for (var _fun38328_ip = 0;;) switch (_fun38328_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = 9;
                var5 = var4 + var0;
                var2 = var3.byteLength;
                var1 = 1;
                var1 = var5 + var1;
                if (!(!(var1 > var2))) {
                    _fun38328_ip = 107;
                    continue _fun38328
                }
            case 30:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.getByteAt;
                var0 = var4 + var0;
                var2 = var1.bind(var2)(var3, var0);
                var0 = {};
                var0.value = var2;
                var1 = {
                    0: 'Grayscale',
                    2: 'RGB',
                    3: 'Palette',
                    4: 'Grayscale with Alpha',
                    6: 'RGB with Alpha'
                };
                var1 = var1[var2];
                if (var1) {
                    _fun38328_ip = 101;
                    continue _fun38328
                }
            case 97:
                var1 = 'Unknown';
            case 101:
                var0.description = var1;
                return var0;
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: getCompression, environment: var2
        _fun38329: for (var _fun38329_ip = 0;;) switch (_fun38329_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var0 = 10;
                var3 = var5 + var0;
                var2 = var4.byteLength;
                var1 = 1;
                var1 = var3 + var1;
                if (!(!(var1 > var2))) {
                    _fun38329_ip = 96;
                    continue _fun38329
                }
            case 30:
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var2 = var1[var3];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var1 = var2.getByteAt;
                var0 = var5 + var0;
                var2 = var1.bind(var2)(var4, var0);
                var0 = {};
                var0.value = var2;
                var1 = 'Unknown';
                if (!(var3 === var2)) {
                    _fun38329_ip = 90;
                    continue _fun38329
                }
            case 84:
                var1 = 'Deflate/Inflate';
            case 90:
                var0.description = var1;
                return var0;
            case 96:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: getFilter, environment: var2
        _fun38330: for (var _fun38330_ip = 0;;) switch (_fun38330_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var0 = 11;
                var3 = var5 + var0;
                var2 = var4.byteLength;
                var1 = 1;
                var1 = var3 + var1;
                if (!(!(var1 > var2))) {
                    _fun38330_ip = 96;
                    continue _fun38330
                }
            case 30:
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var2 = var1[var3];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var1 = var2.getByteAt;
                var0 = var5 + var0;
                var2 = var1.bind(var2)(var4, var0);
                var0 = {};
                var0.value = var2;
                var1 = 'Unknown';
                if (!(var3 === var2)) {
                    _fun38330_ip = 90;
                    continue _fun38330
                }
            case 84:
                var1 = 'Adaptive';
            case 90:
                var0.description = var1;
                return var0;
            case 96:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1) { // Original name: getInterlace, environment: var2
        _fun38331: for (var _fun38331_ip = 0;;) switch (_fun38331_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = 12;
                var5 = var4 + var0;
                var2 = var3.byteLength;
                var1 = 1;
                var1 = var5 + var1;
                if (!(!(var1 > var2))) {
                    _fun38331_ip = 107;
                    continue _fun38331
                }
            case 30:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.getByteAt;
                var0 = var4 + var0;
                var2 = var1.bind(var2)(var3, var0);
                var0 = {};
                var0.value = var2;
                var1 = {
                    0: 'Noninterlaced',
                    1: 'Adam7 Interlace'
                };
                var1 = var1[var2];
                if (var1) {
                    _fun38331_ip = 101;
                    continue _fun38331
                }
            case 97:
                var1 = 'Unknown';
            case 101:
                var0.description = var1;
                return var0;
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var2 = function(arg0, arg1) { // Original name: read, environment: var2
        var4 = arg0;
        var3 = arg1;
        var0 = {};
        var5 = _closure1_slot2;
        var2 = undefined;
        var5 = var5.bind(var2)(var4, var3);
        var0['Image Width'] = var5;
        var5 = _closure1_slot3;
        var5 = var5.bind(var2)(var4, var3);
        var0['Image Height'] = var5;
        var5 = _closure1_slot4;
        var5 = var5.bind(var2)(var4, var3);
        var0['Bit Depth'] = var5;
        var5 = _closure1_slot5;
        var5 = var5.bind(var2)(var4, var3);
        var0['Color Type'] = var5;
        var5 = _closure1_slot6;
        var5 = var5.bind(var2)(var4, var3);
        var0.Compression = var5;
        var5 = _closure1_slot7;
        var5 = var5.bind(var2)(var4, var3);
        var0.Filter = var5;
        var1 = _closure1_slot8;
        var1 = var1.bind(var2)(var4, var3);
        var0.Interlace = var1;
        return var0;
    };
    var0.read = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4146]);