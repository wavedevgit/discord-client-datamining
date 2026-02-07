// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var7 = function arg0, arg1() {
        var2 = arg0;
        var1 = var2.getUint8;
        var0 = arg1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var7;
    var6 = function arg0, arg1, arg2() {
        var3 = arg0;
        var2 = var3.getUint32;
        var4 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var1);
        var4 = var0.LITTLE_ENDIAN;
        var1 = arg1;
        var0 = arg2;
        var0 = var0 === var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var6;
    var5 = function arg0, arg1, arg2() {
        var3 = arg0;
        var2 = var3.getInt32;
        var4 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var1);
        var4 = var0.LITTLE_ENDIAN;
        var1 = arg1;
        var0 = arg2;
        var0 = var0 === var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot6 = var5;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var1, var0, var3);
    var4 = {
        1: 1,
        2: 1,
        3: 2,
        4: 4,
        5: 8,
        7: 1,
        9: 4,
        10: 8,
        13: 4
    };
    var _closure1_slot2 = var4;
    var3 = {
        'BYTE': 1,
        'ASCII': 2,
        'SHORT': 3,
        'LONG': 4,
        'RATIONAL': 5,
        'UNDEFINED': 7,
        'SLONG': 9,
        'SRATIONAL': 10,
        'IFD': 13
    };
    var _closure1_slot3 = var3;
    var0 = {};
    var8 = function arg0() {
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
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.getAsciiValue = var8;
    var0.getByteAt = var7;
    var7 = function arg0, arg1() {
        var2 = arg0;
        var1 = var2.getUint8;
        var0 = arg1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.getAsciiAt = var7;
    var7 = function arg0, arg1, arg2() {
        var3 = arg0;
        var2 = var3.getUint16;
        var4 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var1);
        var4 = var0.LITTLE_ENDIAN;
        var1 = arg1;
        var0 = arg2;
        var0 = var0 === var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0.getShortAt = var7;
    var0.getLongAt = var6;
    var6 = function arg0, arg1, arg2() {
        var5 = arg0;
        var6 = arg1;
        var4 = arg2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = var3.bind(var2)(var5, var6, var4);
        var0 = new Array(2);
        var0[0] = var1;
        var1 = 4;
        var1 = var6 + var1;
        var1 = var3.bind(var2)(var5, var1, var4);
        var0[1] = var1;
        return var0;
    };
    var0.getRationalAt = var6;
    var6 = function arg0, arg1() {
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var0.getUndefinedAt = var6;
    var0.getSlongAt = var5;
    var5 = function arg0, arg1, arg2() {
        var5 = arg0;
        var6 = arg1;
        var4 = arg2;
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = var3.bind(var2)(var5, var6, var4);
        var0 = new Array(2);
        var0[0] = var1;
        var1 = 4;
        var1 = var6 + var1;
        var1 = var3.bind(var2)(var5, var1, var4);
        var0[1] = var1;
        return var0;
    };
    var0.getSrationalAt = var5;
    var5 = function arg0, arg1, arg2() {
        var4 = _closure1_slot5;
        var3 = undefined;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var0.getIfdPointerAt = var5;
    var0.typeSizes = var4;
    var0.tagTypes = var3;
    var2 = function arg0() {
        _fun38162: for (var _fun38162_ip = 0;;) switch (_fun38162_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot3;
                var3 = var1[var2];
                var1 = undefined;
                if (!(var1 !== var3)) {
                    _fun38162_ip = 38;
                    continue _fun38162
                }
            case 20:
                var1 = _closure1_slot2;
                var0 = _closure1_slot3;
                var0 = var0[var2];
                var0 = var1[var0];
                return var0;
            case 38:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = 'No such type found.';
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0.getTypeSize = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4170]);