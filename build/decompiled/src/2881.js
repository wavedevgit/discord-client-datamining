// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0, arg1() {
        _fun23176: for (var _fun23176_ip = 0;;) switch (_fun23176_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var0 = var6.length;
                var5 = 0;
                var0 = var5 < var0;
                var4 = global;
                var3 = true;
                var2 = 'value';
                if (!var0) {
                    _fun23176_ip = 102;
                    continue _fun23176
                }
            case 28:
                var10 = var6[var5];
                var0 = var10.enumerable;
                if (var0) {
                    _fun23176_ip = 42;
                    continue _fun23176
                }
            case 40:
                var0 = false;
            case 42:
                var10.enumerable = var0;
                var10.configurable = var3;
                var0 = var2 in var10;
                if (!var0) {
                    _fun23176_ip = 67;
                    continue _fun23176
                }
            case 61:
                var10.writable = var3;
            case 67:
                var9 = var4.Object;
                var8 = var9.defineProperty;
                var0 = var10.key;
                var0 = var8.bind(var9)(var7, var0, var10);
                var5 = var5 + 1;
                var0 = var6.length;
                if (var5 < var0) {
                    _fun23176_ip = 28;
                    continue _fun23176
                }
            case 102:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.Parser = var0;
    var1 = function() { // Environment: var1
        var0 = function() {
            _fun23178: for (var _fun23178_ip = 0;;) switch (_fun23178_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = this;
                    var0 = var0 instanceof var1;
                    if (var0) {
                        _fun23178_ip = 53;
                        continue _fun23178
                    }
                case 17:
                    var0 = global;
                    var2 = var0.TypeError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'Cannot call a class as a function';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 53:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot0 = var0;
        var1 = {};
        var3 = 'run';
        var1.key = var3;
        var3 = function arg0, arg1, arg2, arg3() {
            _fun23179: for (var _fun23179_ip = 0;;) switch (_fun23179_ip) {
                case 0:
                    var3 = this;
                    var5 = var3.parse;
                    var14 = arg0;
                    var13 = arg1;
                    var12 = arg2;
                    var11 = arg3;
                    var15 = var3;
                    var2 = var15[var5](var14, var13, var12, var11, var10);
                    var0 = null;
                    if (!var2) {
                        _fun23179_ip = 132;
                        continue _fun23179
                    }
                case 33:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 0;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var9 = var4.ValueSetter;
                    var14 = var2.value;
                    var13 = var3.validate;
                    var12 = var3.set;
                    var11 = var3.priority;
                    var10 = var3.subPriority;
                    var4 = var9.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var9
                        }
                    });
                    var15 = var4;
                    var3 = new var15[var9](var14, var13, var12, var11, var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var1.setter = var3;
                    var2 = var2.rest;
                    var1.rest = var2;
                    var0 = var1;
                case 132:
                    return var0;
            }
        };
        var1.value = var3;
        var4 = new Array(2);
        var4[0] = var1;
        var1 = {};
        var3 = 'validate';
        var1.key = var3;
        var2 = function arg0, arg1, arg2() {
            var0 = true;
            return var0;
        };
        var1.value = var2;
        var4[1] = var1;
        var3 = _closure1_slot2;
        var2 = var0.prototype;
        var1 = undefined;
        var1 = var3.bind(var1)(var2, var4);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.Parser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2878]);