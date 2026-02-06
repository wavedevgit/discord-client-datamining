// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.getFileChunk = var0;
    var2.fetchFromObject = var0;
    var2.findMatroskaDocTypeElements = var0;
    var2.isftypStringIncluded = var0;
    var2.isFlvStringIncluded = var0;
    var2.isFileContaineJfiforExifHeader = var0;
    var2.isAvifStringIncluded = var0;
    var2.isHeicSignatureIncluded = var0;
    var3 = function arg0() {
        _fun37839: for (var _fun37839_ip = 0;;) switch (_fun37839_ip) {
            case 0:
                var0 = arg0;
                var3 = undefined;
                var4 = undefined;
                var5 = arguments.length;
                var1 = 1;
                var5 = var5 > var1;
                var6 = 32;
                var8 = var6;
                if (!var5) {
                    _fun37839_ip = 43;
                    continue _fun37839
                }
            case 28:
                var5 = arguments[var1];
                var8 = var6;
                if (!(var3 !== var5)) {
                    _fun37839_ip = 43;
                    continue _fun37839
                }
            case 39:
                var8 = arguments[var1];
            case 43:
                var1 = global;
                var4 = var1.ArrayBuffer;
                var4 = var0 instanceof var4;
                var7 = var0;
                if (!var4) {
                    _fun37839_ip = 90;
                    continue _fun37839
                }
            case 61:
                var4 = var1.Uint8Array;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var5;
                var11 = var0;
                var4 = new var12[var4](var11, var10);
                var7 = var4 instanceof Object ? var4 : var5;
            case 90:
                var5 = var1.Array;
                var4 = var5.isArray;
                var4 = var4.bind(var5)(var0);
                if (!var4) {
                    _fun37839_ip = 122;
                    continue _fun37839
                }
            case 109:
                var4 = function arg0() {
                    var2 = arg0;
                    var1 = var2.every;
                    var0 = function(arg0) { // Environment: var0
                        var1 = 'number';
                        var0 = arg0;
                        var0 = typeof var0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var3)(var0);
                if (var4) {
                    _fun37839_ip = 206;
                    continue _fun37839
                }
            case 122:
                var4 = var1.ArrayBuffer;
                var4 = var0 instanceof var4;
                if (var4) {
                    _fun37839_ip = 206;
                    continue _fun37839
                }
            case 135:
                var4 = var1.Uint8Array;
                var4 = var0 instanceof var4;
                if (var4) {
                    _fun37839_ip = 206;
                    continue _fun37839
                }
            case 148:
                var5 = var1.TypeError;
                var4 = var1.HermesInternal;
                var9 = var4.concat;
                var6 = 'Expected the `file` argument to be of type `Array<number>`, `Uint8Array`, or `ArrayBuffer`, got `';
                var4 = typeof var0;
                var0 = '`';
                var11 = var9.bind(var6)(var4, var0);
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var12 = var4;
                var0 = new var12[var5](var11, var10);
                var0 = var0 instanceof Object ? var0 : var4;
                throw var0;
            case 206:
                var5 = var1.Array;
                var4 = var5.from;
                var6 = var7.slice;
                var0 = 0;
                var0 = var6.bind(var7)(var0, var8);
                var0 = var4.bind(var5)(var0);
                var2 = function arg0() {
                    var2 = arg0;
                    var1 = var2.every;
                    var0 = function(arg0) { // Environment: var0
                        _fun37843: for (var _fun37843_ip = 0;;) switch (_fun37843_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = 'number';
                                var0 = typeof var3;
                                var0 = var1 === var0;
                                if (!var0) {
                                    _fun37843_ip = 35;
                                    continue _fun37843
                                }
                            case 17:
                                var1 = global;
                                var2 = var1.isNaN;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
                                var0 = !var1;
                            case 35:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun37839_ip = 282;
                    continue _fun37839
                }
            case 248:
                var3 = var1.TypeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = 'File content contains illegal values';
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 282:
                return var0;
        }
    };
    var2.getFileChunk = var3;
    var3 = function arg0, arg1() {
        _fun37844: for (var _fun37844_ip = 0;;) switch (_fun37844_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var1 = var5.indexOf;
                var0 = '.';
                var6 = var1.bind(var5)(var0);
                var0 = -1;
                if (!(!(var6 > var0))) {
                    _fun37844_ip = 37;
                    continue _fun37844
                }
            case 31:
                var0 = var2[var5];
                _fun37844_ip = 86;
                continue _fun37844;
            case 37:
                var4 = _closure1_slot0;
                var3 = var5.slice;
                var1 = 0;
                var1 = var3.bind(var5)(var1, var6);
                var3 = var2[var1];
                var2 = var5.slice;
                var1 = 1;
                var1 = var6 + var1;
                var2 = var2.bind(var5)(var1);
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 86:
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var2.fetchFromObject = var3;
    var3 = function arg0() {
        _fun37845: for (var _fun37845_ip = 0;;) switch (_fun37845_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = global;
                    var2 = var0.String;
                    var1 = var2.fromCharCode;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var1 = var3.includes;
                var0 = 'webm';
                var1 = var1.bind(var3)(var0);
                if (var1) {
                    _fun37845_ip = 83;
                    continue _fun37845
                }
            case 53:
                var2 = var3.includes;
                var1 = 'matroska';
                var2 = var2.bind(var3)(var1);
                var1 = undefined;
                if (!var2) {
                    _fun37845_ip = 80;
                    continue _fun37845
                }
            case 74:
                var1 = 'mkv';
            case 80:
                var0 = var1;
            case 83:
                return var0;
        }
    };
    var2.findMatroskaDocTypeElements = var3;
    var3 = function arg0() {
        _fun37847: for (var _fun37847_ip = 0;;) switch (_fun37847_ip) {
            case 0:
                var6 = arg0;
                var5 = [102, 116, 121, 112];
                var1 = var6.length;
                var0 = var5.length;
                var2 = var1 - var0;
                var4 = 0;
                var0 = true;
                var1 = false;
                var3 = 0;
                if (!(var4 < var2)) {
                    _fun37847_ip = 114;
                    continue _fun37847
                }
            case 39:
                var2 = var5.length;
                var7 = var4 < var2;
                var8 = 0;
                var2 = true;
                if (!var7) {
                    _fun37847_ip = 90;
                    continue _fun37847
                }
            case 55:
                var7 = var3 + var8;
                var9 = var6[var7];
                var7 = var5[var8];
                var2 = false;
                if (!(var9 === var7)) {
                    _fun37847_ip = 90;
                    continue _fun37847
                }
            case 73:
                var8 = var8 + 1;
                var7 = var5.length;
                var7 = var8 < var7;
                var2 = true;
                if (var7) {
                    _fun37847_ip = 55;
                    continue _fun37847
                }
            case 90:
                if (var2) {
                    _fun37847_ip = 116;
                    continue _fun37847
                }
            case 93:
                var3 = var3 + 1;
                var7 = var6.length;
                var2 = var5.length;
                var2 = var7 - var2;
                if (var3 < var2) {
                    _fun37847_ip = 39;
                    continue _fun37847
                }
            case 114:
                return var1;
            case 116:
                return var0;
        }
    };
    var2.isftypStringIncluded = var3;
    var3 = function arg0() {
        var3 = arg0;
        var2 = var3.slice;
        var1 = 0;
        var0 = 3;
        var6 = var2.bind(var3)(var1, var0);
        var0 = global;
        var1 = var0.TextDecoder;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var7 = var2;
        var1 = new var7[var1](var6);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.decode;
        var0 = var0.Uint8Array;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var7 = var3;
        var0 = new var7[var0](var6, var5);
        var0 = var0 instanceof Object ? var0 : var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.includes;
        var0 = 'FLV';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isFlvStringIncluded = var3;
    var3 = function arg0() {
        _fun37849: for (var _fun37849_ip = 0;;) switch (_fun37849_ip) {
            case 0:
                var1 = arg0;
                var0 = 3;
                var2 = var1[var0];
                var0 = 224;
                var0 = var0 === var2;
                if (var0) {
                    _fun37849_ip = 27;
                    continue _fun37849
                }
            case 20:
                var1 = 225;
                var0 = var1 === var2;
            case 27:
                return var0;
        }
    };
    var2.isFileContaineJfiforExifHeader = var3;
    var3 = function arg0() {
        var3 = arg0;
        var2 = var3.slice;
        var1 = 4;
        var0 = 12;
        var2 = var2.bind(var3)(var1, var0);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.String;
            var1 = var2.fromCharCode;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '';
        var1 = var1.bind(var2)(var0);
        var0 = 'ftypavif';
        var0 = var0 === var1;
        return var0;
    };
    var2.isAvifStringIncluded = var3;
    var1 = function arg0() {
        var3 = arg0;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.String;
            var1 = var2.fromCharCode;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = '';
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var2 = ['ftypheic', 'ftyphevc', 'ftypmif1', 'ftypmsf1'];
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.includes;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isHeicSignatureIncluded = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);