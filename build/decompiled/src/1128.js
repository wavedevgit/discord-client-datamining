// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function(arg0) { // Original name: parseContentLengthHeader, environment: var0
        _fun12332: for (var _fun12332_ip = 0;;) switch (_fun12332_ip) {
            case 0:
                var4 = arg0;
                var0 = undefined;
                if (var4) {
                    _fun12332_ip = 10;
                    continue _fun12332
                }
            case 8:
                return var0;
            case 10:
                var2 = global;
                var3 = var2.parseInt;
                var1 = 10;
                var1 = var3.bind(var0)(var4, var1);
                var2 = var2.isNaN;
                var2 = var2.bind(var0)(var1);
                var0 = undefined;
                if (var2) {
                    _fun12332_ip = 46;
                    continue _fun12332
                }
            case 43:
                var0 = var1;
            case 46:
                return var0;
        }
    };
    var1.parseContentLengthHeader = var2;
    var0 = function(arg0) { // Original name: getBodySize, environment: var0
        _fun12333: for (var _fun12333_ip = 0;;) switch (_fun12333_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                if (!var1) {
                    _fun12333_ip = 299;
                    continue _fun12333
                }
            case 12: // try_start_0
                var1 = var0;
                var2 = 'string';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun12333_ip = 255;
                    continue _fun12333
                }
            case 29:
                var3 = var0;
                var1 = global;
                var2 = var1.URLSearchParams;
                var2 = var3 instanceof var2;
                if (var2) {
                    _fun12333_ip = 201;
                    continue _fun12333
                }
            case 50:
                var3 = var0;
                var2 = var1.FormData;
                var2 = var3 instanceof var2;
                var3 = var0;
                if (var2) {
                    _fun12333_ip = 121;
                    continue _fun12333
                }
            case 69:
                var2 = var1.Blob;
                var4 = var3 instanceof var2;
                var2 = var0;
                if (var4) {
                    _fun12333_ip = 114;
                    continue _fun12333
                }
            case 85:
                var4 = var1.ArrayBuffer;
                var4 = var2 instanceof var4;
                if (var4) {
                    _fun12333_ip = 103;
                    continue _fun12333
                }
            case 98: // try_end0
                _fun12333_ip = 299;
                continue _fun12333;
            case 103: // try_start_1
                var4 = var0;
                var4 = var4.byteLength;
            case 112: // try_end1
                return var4;
            case 114: // try_start_2
                var2 = var2.size;
            case 119: // try_end2
                return var2;
            case 121: // try_start_3
                var1 = var1.URLSearchParams;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var2;
                var6 = var3;
                var1 = new var7[var1](var6, var5);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.encodeUTF8;
                var1 = var1.bind(var2)(var3);
                var1 = var1.length;
            case 199: // try_end3
                return var1;
            case 201: // try_start_4
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.encodeUTF8;
                var4 = var0;
                var1 = var4.toString;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
            case 253: // try_end4
                return var1;
            case 255: // try_start_5
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.encodeUTF8;
                var0 = var1.bind(var2)(var0);
                var0 = var0.length;
            case 295: // try_end5
                return var0;
            case 297: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4 // catch_target5
                CatchBlockStart(arg_register = 0);
            case 299:
                var0 = undefined;
                return var0;
        }
    };
    var1.getBodySize = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1001]);