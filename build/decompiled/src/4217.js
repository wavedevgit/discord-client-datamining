// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
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
    var0 = [6, 7, 99];
    var _closure1_slot2 = var0;
    var0 = {};
    var2 = function arg0, arg1, arg2() {
        _fun38520: for (var _fun38520_ip = 0;;) switch (_fun38520_ip) {
            case 0:
                var0 = arg1;
                var1 = var0;
                if (!var1) {
                    _fun38520_ip = 55;
                    continue _fun38520
                }
            case 9:
                var3 = var0.Compression;
                var2 = undefined;
                var2 = var2 === var3;
                if (var2) {
                    _fun38520_ip = 52;
                    continue _fun38520
                }
            case 24:
                var5 = _closure1_slot2;
                var4 = var5.includes;
                var3 = var0.Compression;
                var3 = var3.value;
                var2 = var4.bind(var5)(var3);
            case 52:
                var1 = var2;
            case 55:
                if (!var1) {
                    _fun38520_ip = 64;
                    continue _fun38520
                }
            case 58:
                var1 = var0.JPEGInterchangeFormat;
            case 64:
                if (!var1) {
                    _fun38520_ip = 78;
                    continue _fun38520
                }
            case 67:
                var2 = var0.JPEGInterchangeFormat;
                var1 = var2.value;
            case 78:
                if (!var1) {
                    _fun38520_ip = 87;
                    continue _fun38520
                }
            case 81:
                var1 = var0.JPEGInterchangeFormatLength;
            case 87:
                if (!var1) {
                    _fun38520_ip = 101;
                    continue _fun38520
                }
            case 90:
                var2 = var0.JPEGInterchangeFormatLength;
                var1 = var2.value;
            case 101:
                if (!var1) {
                    _fun38520_ip = 223;
                    continue _fun38520
                }
            case 104:
                var1 = 'image/jpeg';
                var0.type = var1;
                var1 = var0.JPEGInterchangeFormat;
                var2 = var1.value;
                var1 = arg2;
                var4 = var1 + var2;
                var1 = arg0;
                var3 = var1.buffer;
                var2 = var3.slice;
                var1 = var0.JPEGInterchangeFormatLength;
                var1 = var1.value;
                var1 = var4 + var1;
                var1 = var2.bind(var3)(var4, var1);
                var0.image = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.deferInit;
                var2 = 'base64';
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getBase64Image;
                    var0 = this;
                    var0 = var0.image;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var0, var2, var1);
            case 223:
                return var0;
        }
    };
    var0.get = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4165]);