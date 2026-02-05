// modules/app_database/util/Lru.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
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
            var2.items = var1;
            var1 = arg0;
            var2.limit = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'length';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.items;
            var0 = var0.size;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(13);
        var1[0] = var0;
        var0 = {};
        var5 = 'capacity';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.limit;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = global;
        var5 = var5.Symbol;
        var5 = var5.iterator;
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.items;
            var0 = var1.entries;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'entries';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.items;
            var0 = var1.entries;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'keys';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.items;
            var0 = var1.keys;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'values';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.items;
            var0 = var1.values;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'ordered';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.items;
            var0 = var1.values;
            var4 = var0.bind(var1)();
            var1 = new Array(0);
            var3 = 0;
            var5 = var1;
            var0 = arraySpread(var5, var4, var3);
            var0 = var1.reverse;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.items;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.items;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.items;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'put';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun40220: for (var _fun40220_ip = 0;;) switch (_fun40220_ip) {
                case 0:
                    var4 = arg0;
                    var0 = this;
                    var2 = var0.items;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var4);
                    var3 = var0.items;
                    var2 = var3.set;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var4, var1);
                    var1 = var0.items;
                    var2 = var1.size;
                    var1 = var0.limit;
                    if (!(!(var2 > var1))) {
                        _fun40220_ip = 63;
                        continue _fun40220
                    }
                case 59:
                    var1 = undefined;
                    return var1;
                case 63:
                    var1 = var0.oldestKey;
                    var2 = var1.bind(var0)();
                    var3 = var0.items;
                    var1 = var3.get;
                    var1 = var1.bind(var3)(var2);
                    var3 = var0.items;
                    var0 = var3.delete;
                    var0 = var0.bind(var3)(var2);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.items;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'oldestKey';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = var0.items;
            var0 = var1.keys;
            var1 = var0.bind(var1)();
            var0 = var1.next;
            var0 = var0.bind(var1)();
            var0 = var0.value;
            return var0;
        };
        var0.value = var4;
        var1[12] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/util/Lru.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Lru = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);