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
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = var3.Image;
    var _closure1_slot0 = var3;
    var3 = function arg0() {
        _fun27418: for (var _fun27418_ip = 0;;) switch (_fun27418_ip) {
            case 0:
                var2 = arg0;
                var3 = typeof var2;
                var0 = 'number';
                if (!(var0 !== var3)) {
                    _fun27418_ip = 116;
                    continue _fun27418
                }
            case 14:
                var1 = var2.uri;
                var0 = 'object';
                var0 = var0 === var3;
                if (!var0) {
                    _fun27418_ip = 33;
                    continue _fun27418
                }
            case 30:
                if (var1) {
                    _fun27418_ip = 107;
                    continue _fun27418
                }
            case 33:
                var4 = var2.fileName;
                var3 = var2.path;
                if (!var0) {
                    _fun27418_ip = 51;
                    continue _fun27418
                }
            case 48:
                if (var4) {
                    _fun27418_ip = 87;
                    continue _fun27418
                }
            case 51:
                var0 = global;
                var6 = var0.Error;
                var0 = var6.prototype;
                var5 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var7 = 'Invalid source provided.';
                var8 = var5;
                var0 = new var8[var6](var7, var6);
                var0 = var0 instanceof Object ? var0 : var5;
                throw var0;
            case 87:
                var0 = {};
                var0.sourceAsset = var4;
                if (!var3) {
                    _fun27418_ip = 105;
                    continue _fun27418
                }
            case 99:
                var0.path = var3;
            case 105:
                return var0;
            case 107:
                var0 = {};
                var0.sourceUrl = var1;
                return var0;
            case 116:
                var1 = _closure1_slot0;
                var0 = var1.resolveAssetSource;
                var1 = var0.bind(var1)(var2);
                if (!var1) {
                    _fun27418_ip = 145;
                    continue _fun27418
                }
            case 137:
                var0 = var1.uri;
                if (var0) {
                    _fun27418_ip = 181;
                    continue _fun27418
                }
            case 145:
                var0 = global;
                var3 = var0.Error;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = 'Invalid asset source provided.';
                var8 = var2;
                var0 = new var8[var3](var7, var6);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 181:
                var0 = {};
                var1 = var1.uri;
                var0.sourceAssetId = var1;
                return var0;
        }
    };
    var2.parsePossibleSources = var3;
    var3 = function arg0() {
        _fun27419: for (var _fun27419_ip = 0;;) switch (_fun27419_ip) {
            case 0:
                var5 = arg0;
                var2 = var5.replace;
                var1 = /^#/;
                var0 = '';
                var10 = var2.bind(var5)(var1, var0);
                var1 = /^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/;
                var0 = var1.test;
                var1 = var0.bind(var1)(var10);
                var0 = global;
                if (var1) {
                    _fun27419_ip = 115;
                    continue _fun27419
                }
            case 61:
                var3 = var0.console;
                var2 = var3.warn;
                var1 = var0.HermesInternal;
                var4 = var1.concat;
                var1 = 'Rive invalid hex color: ';
                var1 = var4.bind(var1)(var5);
                var1 = var2.bind(var3)(var1);
                var1 = {
                    'r': 0,
                    'g': 0,
                    'b': 0,
                    'a': 255
                };
                return var1;
            case 115:
                var2 = var0.parseInt;
                var4 = var10.slice;
                var1 = 0;
                var3 = 2;
                var1 = var4.bind(var10)(var1, var3);
                var7 = undefined;
                var6 = 16;
                var4 = var2.bind(var7)(var1, var6);
                var2 = var0.parseInt;
                var1 = var10.slice;
                var5 = 4;
                var1 = var1.bind(var10)(var3, var5);
                var3 = var2.bind(var7)(var1, var6);
                var2 = var0.parseInt;
                var1 = var10.slice;
                var9 = 6;
                var1 = var1.bind(var10)(var5, var9);
                var2 = var2.bind(var7)(var1, var6);
                var5 = var10.length;
                var1 = 255;
                var8 = 8;
                if (!(var8 === var5)) {
                    _fun27419_ip = 238;
                    continue _fun27419
                }
            case 215:
                var5 = var0.parseInt;
                var0 = var10.slice;
                var0 = var0.bind(var10)(var9, var8);
                var1 = var5.bind(var7)(var0, var6);
            case 238:
                var0 = {};
                var0.r = var4;
                var0.g = var3;
                var0.b = var2;
                var0.a = var1;
                return var0;
        }
    };
    var2.parseColor = var3;
    var3 = function arg0() {
        var3 = arg0;
        var0 = {};
        var1 = 16;
        var1 = var3 >> var1;
        var2 = 255;
        var1 = var1 & var2;
        var0.r = var1;
        var1 = 8;
        var1 = var3 >> var1;
        var1 = var1 & var2;
        var0.g = var1;
        var1 = var2 & var3;
        var0.b = var1;
        var1 = 24;
        var1 = var3 >> var1;
        var1 = var1 & var2;
        var0.a = var1;
        return var0;
    };
    var2.intToRiveRGBA = var3;
    var1 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var2.getPropertyTypeString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);