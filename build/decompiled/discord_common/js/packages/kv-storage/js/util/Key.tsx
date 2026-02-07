// ../discord_common/js/packages/kv-storage/js/util/Key.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/kv-storage/js/util/Key.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun18603: for (var _fun18603_ip = 0;;) switch (_fun18603_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = global;
                var2 = var1.Array;
                var0 = var2.isArray;
                var0 = var0.bind(var2)(var4);
                if (var0) {
                    _fun18603_ip = 57;
                    continue _fun18603
                }
            case 27:
                var0 = new Array(1);
                var7 = 0;
                var9 = var0;
                var8 = var5;
                var3 = arraySpread(var9, var8, var7);
                var0[var3] = var4;
                var2 = 1;
                var2 = var3 + var2;
                _fun18603_ip = 86;
                continue _fun18603;
            case 57:
                var2 = new Array(0);
                var7 = 0;
                var9 = var2;
                var8 = var5;
                var7 = arraySpread(var9, var8, var7);
                var9 = var2;
                var8 = var4;
                var3 = arraySpread(var9, var8, var7);
                var0 = var2;
            case 86:
                var3 = var0.length;
                var2 = 1;
                if (!(var3 >= var2)) {
                    _fun18603_ip = 137;
                    continue _fun18603
                }
            case 98:
                var3 = var0.length;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.MAXIMUM_KEY_BITS;
                if (!(!(var3 <= var2))) {
                    _fun18603_ip = 217;
                    continue _fun18603
                }
            case 137:
                var3 = var1.Error;
                var6 = var0.length;
                var4 = var1.JSON;
                var2 = var4.stringify;
                var5 = var2.bind(var4)(var0);
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'combination results in an invalid key that has ';
                var1 = ' elements: ';
                var9 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 217:
                return var0;
        }
    };
    var2.combineKey = var3;
    var1 = function arg0, arg1() {
        _fun18604: for (var _fun18604_ip = 0;;) switch (_fun18604_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = global;
                var2 = var1.Array;
                var0 = var2.isArray;
                var0 = var0.bind(var2)(var4);
                if (var0) {
                    _fun18604_ip = 57;
                    continue _fun18604
                }
            case 27:
                var0 = new Array(1);
                var7 = 0;
                var9 = var0;
                var8 = var5;
                var3 = arraySpread(var9, var8, var7);
                var0[var3] = var4;
                var2 = 1;
                var2 = var3 + var2;
                _fun18604_ip = 86;
                continue _fun18604;
            case 57:
                var2 = new Array(0);
                var7 = 0;
                var9 = var2;
                var8 = var5;
                var7 = arraySpread(var9, var8, var7);
                var9 = var2;
                var8 = var4;
                var3 = arraySpread(var9, var8, var7);
                var0 = var2;
            case 86:
                var3 = var0.length;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.MAXIMUM_KEY_BITS;
                if (!(!(var3 <= var2))) {
                    _fun18604_ip = 205;
                    continue _fun18604
                }
            case 125:
                var3 = var1.Error;
                var6 = var0.length;
                var4 = var1.JSON;
                var2 = var4.stringify;
                var5 = var2.bind(var4)(var0);
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'combination results in an invalid prefix key that has ';
                var1 = ' elements: ';
                var9 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 205:
                return var0;
        }
    };
    var2.combineKeyPrefix = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1655, 2]);