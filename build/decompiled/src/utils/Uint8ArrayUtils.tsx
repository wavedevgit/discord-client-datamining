// utils/Uint8ArrayUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function(arg0, arg1) { // Original name: hasBit, environment: var1
        _fun15560: for (var _fun15560_ip = 0;;) switch (_fun15560_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = var4.length;
                var0 = 0;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun15560_ip = 71;
                    continue _fun15560
                }
            case 20:
                var1 = global;
                var6 = var1.Math;
                var5 = var6.floor;
                var1 = 8;
                var2 = var3 / var1;
                var2 = var5.bind(var6)(var2);
                var2 = var4[var2];
                var3 = var3 % var1;
                var1 = 1;
                var1 = var1 << var3;
                var1 = var2 & var1;
                var1 = !var1;
                var0 = !var1;
            case 71:
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/Uint8ArrayUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.hasBit = var3;
    var3 = function(arg0, arg1) { // Original name: addBit, environment: var1
        _fun15561: for (var _fun15561_ip = 0;;) switch (_fun15561_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var3 = global;
                var5 = var3.Math;
                var2 = var5.floor;
                var1 = 8;
                var0 = var4 / var1;
                var2 = var2.bind(var5)(var0);
                var5 = var7.length;
                var0 = var7;
                if (!(var5 <= var2)) {
                    _fun15561_ip = 93;
                    continue _fun15561
                }
            case 44:
                var6 = var3.Uint8Array;
                var3 = 1;
                var9 = var2 + var3;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var5;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                var6 = var3.set;
                var5 = 0;
                var5 = var6.bind(var3)(var7, var5);
                var0 = var3;
            case 93:
                var3 = var0[var2];
                var4 = var4 % var1;
                var1 = 1;
                var1 = var1 << var4;
                var1 = var3 | var1;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.addBit = var3;
    var3 = function(arg0, arg1) { // Original name: removeBit, environment: var1
        _fun15562: for (var _fun15562_ip = 0;;) switch (_fun15562_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var2 = _closure1_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)(var0, var4);
                if (!var1) {
                    _fun15562_ip = 76;
                    continue _fun15562
                }
            case 24:
                var1 = global;
                var5 = var1.Math;
                var3 = var5.floor;
                var1 = 8;
                var2 = var4 / var1;
                var2 = var3.bind(var5)(var2);
                var3 = var0[var2];
                var4 = var4 % var1;
                var1 = 1;
                var1 = var1 << var4;
                var1 = ~var1;
                var1 = var3 & var1;
                var0[var2] = var1;
            case 76:
                return var0;
        }
    };
    var2.removeBit = var3;
    var3 = function(arg0) { // Original name: isUint8Array, environment: var1
        var0 = global;
        var1 = var0.Uint8Array;
        var0 = arg0;
        var0 = var0 instanceof var1;
        return var0;
    };
    var2.isUint8Array = var3;
    var1 = function(arg0) { // Original name: isSerializedUint8Array, environment: var1
        _fun15564: for (var _fun15564_ip = 0;;) switch (_fun15564_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun15564_ip = 23;
                    continue _fun15564
                }
            case 12:
                var3 = 'object';
                var2 = typeof var1;
                var0 = var3 === var2;
            case 23:
                if (!var0) {
                    _fun15564_ip = 42;
                    continue _fun15564
                }
            case 26:
                var2 = var1.__tag__;
                var1 = 'uint8array';
                var0 = var1 === var2;
            case 42:
                return var0;
        }
    };
    var2.isSerializedUint8Array = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);