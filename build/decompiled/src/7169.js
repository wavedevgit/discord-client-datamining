// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function(arg0) { // Original name: LRUMap, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2._maxSize = var1;
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._cache = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'size';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._cache;
            var0 = var0.size;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: get, environment: var4
            _fun58861: for (var _fun58861_ip = 0;;) switch (_fun58861_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1._cache;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var3);
                    var2 = undefined;
                    if (!(var2 === var0)) {
                        _fun58861_ip = 30;
                        continue _fun58861
                    }
                case 28:
                    return var2;
                case 30:
                    var4 = var1._cache;
                    var2 = var4.delete;
                    var2 = var2.bind(var4)(var3);
                    var2 = var1._cache;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: set, environment: var4
            _fun58862: for (var _fun58862_ip = 0;;) switch (_fun58862_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._cache;
                    var2 = var1.size;
                    var1 = var0._maxSize;
                    if (!(var2 >= var1)) {
                        _fun58862_ip = 69;
                        continue _fun58862
                    }
                case 24:
                    var3 = var0._cache;
                    var2 = var3.delete;
                    var4 = var0._cache;
                    var1 = var4.keys;
                    var4 = var1.bind(var4)();
                    var1 = var4.next;
                    var1 = var1.bind(var4)();
                    var1 = var1.value;
                    var1 = var2.bind(var3)(var1);
                case 69:
                    var3 = var0._cache;
                    var2 = var3.set;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'remove';
        var0.key = var5;
        var5 = function(arg0) { // Original name: remove, environment: var4
            _fun58863: for (var _fun58863_ip = 0;;) switch (_fun58863_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1._cache;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var3);
                    if (!var0) {
                        _fun58863_ip = 41;
                        continue _fun58863
                    }
                case 25:
                    var2 = var1._cache;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                case 41:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() { // Original name: clear, environment: var4
            var0 = this;
            var1 = var0._cache;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'keys';
        var0.key = var5;
        var5 = function() { // Original name: keys, environment: var4
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var0 = this;
            var3 = var0._cache;
            var0 = var3.keys;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'values';
        var0.key = var5;
        var4 = function() { // Original name: values, environment: var4
            var0 = new Array(0);
            var _closure3_slot0 = var0;
            var2 = this;
            var3 = var2._cache;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.push;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.LRUMap = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [153, 6, 7]);