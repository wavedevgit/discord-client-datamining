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
    var0 = function arg0() {
        _fun2953: for (var _fun2953_ip = 0;;) switch (_fun2953_ip) {
            case 0:
                var4 = arg0;
                var0 = global;
                var1 = var0.ArrayBuffer;
                var1 = var4 instanceof var1;
                var2 = var4;
                if (!var1) {
                    _fun2953_ip = 50;
                    continue _fun2953
                }
            case 21:
                var1 = var0.Uint8Array;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var3;
                var10 = var4;
                var1 = new var11[var1](var10, var9);
                var2 = var1 instanceof Object ? var1 : var3;
            case 50:
                var1 = var0.Uint8Array;
                var1 = var2 instanceof var1;
                if (var1) {
                    _fun2953_ip = 204;
                    continue _fun2953
                }
            case 66:
                var3 = var0.ArrayBuffer;
                var1 = var3.isView;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun2953_ip = 120;
                    continue _fun2953
                }
            case 86:
                var4 = var0.Error;
                var1 = var4.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = 'data must be ArrayBuffer or typed array';
                var11 = var3;
                var1 = new var11[var4](var10, var9);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 120:
                var7 = var2.buffer;
                var9 = var2.byteOffset;
                var8 = var2.byteLength;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.fromByteArray;
                var0 = var0.Uint8Array;
                var4 = var0.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var0
                    }
                });
                var11 = var4;
                var10 = var7;
                var0 = new var11[var0](var10, var9, var8, var7);
                var0 = var0 instanceof Object ? var0 : var4;
                var0 = var1.bind(var3)(var0);
                return var0;
            case 204:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.fromByteArray;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [206]);