// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun45504: for (var _fun45504_ip = 0;;) switch (_fun45504_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var0 = var9.length;
                var8 = 0;
                var1 = var8 < var0;
                var7 = global;
                var0 = undefined;
                var5 = true;
                var4 = 'value';
                var2 = 0;
                if (!var1) {
                    _fun45504_ip = 131;
                    continue _fun45504
                }
            case 35:
                var13 = var9[var2];
                var1 = var13.enumerable;
                if (var1) {
                    _fun45504_ip = 49;
                    continue _fun45504
                }
            case 47:
                var1 = false;
            case 49:
                var13.enumerable = var1;
                var13.configurable = var5;
                var1 = var4 in var13;
                if (!var1) {
                    _fun45504_ip = 74;
                    continue _fun45504
                }
            case 68:
                var13.writable = var5;
            case 74:
                var12 = var7.Object;
                var11 = var12.defineProperty;
                var14 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var14 = var14.bind(var0)(var1);
                var1 = var13.key;
                var1 = var14.bind(var0)(var1);
                var1 = var11.bind(var12)(var10, var1, var13);
                var2 = var2 + 1;
                var1 = var9.length;
                if (var2 < var1) {
                    _fun45504_ip = 35;
                    continue _fun45504
                }
            case 131:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var1 = function arg0, arg1, arg2() {
        _fun45505: for (var _fun45505_ip = 0;;) switch (_fun45505_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var3 = arg2;
                if (!var5) {
                    _fun45505_ip = 32;
                    continue _fun45505
                }
            case 12:
                var4 = _closure1_slot2;
                var2 = var0.prototype;
                var1 = undefined;
                var1 = var4.bind(var1)(var2, var5);
            case 32:
                if (!var3) {
                    _fun45505_ip = 50;
                    continue _fun45505
                }
            case 35:
                var2 = _closure1_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)(var0, var3);
            case 50:
                var1 = global;
                var4 = var1.Object;
                var3 = var4.defineProperty;
                var2 = {};
                var1 = false;
                var2.writable = var1;
                var1 = 'prototype';
                var1 = var3.bind(var4)(var0, var1, var2);
                return var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5067]);