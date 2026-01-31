// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0) { // Original name: getGifVersion, environment: var2
        _fun38361: for (var _fun38361_ip = 0;;) switch (_fun38361_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.byteLength;
                var0 = 6;
                if (!(!(var0 > var1))) {
                    _fun38361_ip = 68;
                    continue _fun38361
                }
            case 16:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getStringFromDataView;
                var0 = 3;
                var1 = var1.bind(var2)(var3, var0, var0);
                var0 = {};
                var0.value = var1;
                var0.description = var1;
                return var0;
            case 68:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = function(arg0) { // Original name: getImageWidth, environment: var2
        _fun38362: for (var _fun38362_ip = 0;;) switch (_fun38362_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.byteLength;
                var0 = 8;
                if (!(!(var0 > var1))) {
                    _fun38362_ip = 72;
                    continue _fun38362
                }
            case 16:
                var2 = var3.getUint16;
                var1 = 6;
                var0 = true;
                var4 = var2.bind(var3)(var1, var0);
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
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0) { // Original name: getImageHeight, environment: var2
        _fun38363: for (var _fun38363_ip = 0;;) switch (_fun38363_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.byteLength;
                var0 = 10;
                if (!(!(var0 > var1))) {
                    _fun38363_ip = 72;
                    continue _fun38363
                }
            case 16:
                var2 = var3.getUint16;
                var1 = 8;
                var0 = true;
                var4 = var2.bind(var3)(var1, var0);
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
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0) { // Original name: getGlobalColorMap, environment: var2
        _fun38364: for (var _fun38364_ip = 0;;) switch (_fun38364_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.byteLength;
                var0 = 11;
                if (!(!(var0 > var1))) {
                    _fun38364_ip = 75;
                    continue _fun38364
                }
            case 16:
                var1 = var2.getUint8;
                var0 = 10;
                var1 = var1.bind(var2)(var0);
                var0 = 128;
                var1 = var0 & var1;
                var0 = 7;
                var3 = var1 >>> var0;
                var0 = {};
                var0.value = var3;
                var1 = 'No';
                var2 = 1;
                if (!(var2 === var3)) {
                    _fun38364_ip = 69;
                    continue _fun38364
                }
            case 63:
                var1 = 'Yes';
            case 69:
                var0.description = var1;
                return var0;
            case 75:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: getColorResolution, environment: var2
        _fun38365: for (var _fun38365_ip = 0;;) switch (_fun38365_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.byteLength;
                var0 = 11;
                if (!(!(var0 > var1))) {
                    _fun38365_ip = 107;
                    continue _fun38365
                }
            case 16:
                var1 = var2.getUint8;
                var0 = 10;
                var1 = var1.bind(var2)(var0);
                var0 = 112;
                var2 = var0 & var1;
                var1 = 1;
                var0 = 4;
                var0 = var2 >>> var0;
                var5 = var1 + var0;
                var0 = {};
                var0.value = var5;
                var4 = 'bits';
                if (!(var1 === var5)) {
                    _fun38365_ip = 71;
                    continue _fun38365
                }
            case 65:
                var4 = 'bit';
            case 71:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ' ';
                var1 = var3.bind(var2)(var5, var1, var4);
                var0.description = var1;
                return var0;
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: getBitDepth, environment: var2
        _fun38366: for (var _fun38366_ip = 0;;) switch (_fun38366_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.byteLength;
                var0 = 11;
                if (!(!(var0 > var1))) {
                    _fun38366_ip = 100;
                    continue _fun38366
                }
            case 16:
                var1 = var2.getUint8;
                var0 = 10;
                var1 = var1.bind(var2)(var0);
                var0 = 7;
                var0 = var0 & var1;
                var1 = 1;
                var5 = var1 + var0;
                var0 = {};
                var0.value = var5;
                var4 = 'bits';
                if (!(var1 === var5)) {
                    _fun38366_ip = 64;
                    continue _fun38366
                }
            case 58:
                var4 = 'bit';
            case 64:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ' ';
                var1 = var3.bind(var2)(var5, var1, var4);
                var0.description = var1;
                return var0;
            case 100:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var2 = function(arg0) { // Original name: read, environment: var2
        var3 = arg0;
        var0 = {};
        var4 = _closure1_slot2;
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var0['GIF Version'] = var4;
        var4 = _closure1_slot3;
        var4 = var4.bind(var2)(var3);
        var0['Image Width'] = var4;
        var4 = _closure1_slot4;
        var4 = var4.bind(var2)(var3);
        var0['Image Height'] = var4;
        var4 = _closure1_slot5;
        var4 = var4.bind(var2)(var3);
        var0['Global Color Map'] = var4;
        var4 = _closure1_slot7;
        var4 = var4.bind(var2)(var3);
        var0['Bits Per Pixel'] = var4;
        var1 = _closure1_slot6;
        var1 = var1.bind(var2)(var3);
        var0['Color Resolution Depth'] = var1;
        return var0;
    };
    var0.read = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4129]);