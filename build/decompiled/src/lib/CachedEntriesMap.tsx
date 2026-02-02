// lib/CachedEntriesMap.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = 0;
            var2.version = var4;
            var4 = global;
            var4 = var4.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var11 = var5;
            var4 = new var11[var4](var10);
            var4 = var4 instanceof Object ? var4 : var5;
            var2.data = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.cachedFunction;
            var6 = function() { // Environment: var1
                var0 = global;
                var2 = var0.Array;
                var1 = var2.from;
                var0 = _closure3_slot0;
                var3 = var0.data;
                var0 = var3.values;
                var0 = var0.bind(var3)();
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var6 = var7.bind(var8)(var6);
            var2.cachedValues = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.cachedFunction;
            var6 = function() { // Environment: var1
                var0 = global;
                var2 = var0.Array;
                var1 = var2.from;
                var0 = _closure3_slot0;
                var3 = var0.data;
                var0 = var3.keys;
                var0 = var0.bind(var3)();
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var6 = var7.bind(var8)(var6);
            var2.cachedKeys = var6;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = var4.cachedFunction;
            var1 = function() { // Environment: var1
                var0 = global;
                var2 = var0.Array;
                var1 = var2.from;
                var0 = _closure3_slot0;
                var3 = var0.data;
                var0 = var3.entries;
                var0 = var0.bind(var3)();
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var3.bind(var4)(var1);
            var2.cachedEntries = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'keys';
        var0.key = var1;
        var1 = function() {
            var2 = this;
            var1 = var2.cachedKeys;
            var0 = var2.version;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'values';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.cachedValues;
            var0 = var2.version;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'entries';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.cachedEntries;
            var0 = var2.version;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'size';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.data;
            var0 = var0.size;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.data;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun30590: for (var _fun30590_ip = 0;;) switch (_fun30590_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var1 = this;
                    var2 = var1.data;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var4);
                    if (!(var0 !== var3)) {
                        _fun30590_ip = 59;
                        continue _fun30590
                    }
                case 28:
                    var2 = var1.data;
                    var0 = var2.set;
                    var0 = var0.bind(var2)(var4, var3);
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            _fun30591: for (var _fun30591_ip = 0;;) switch (_fun30591_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.data;
                    var1 = var3.delete;
                    var0 = arg0;
                    var0 = var1.bind(var3)(var0);
                    if (!var0) {
                        _fun30591_ip = 39;
                        continue _fun30591
                    }
                case 24:
                    var1 = var2.version;
                    var1 = var1 + 1;
                    var2.version = var1;
                case 39:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var4 = function() {
            _fun30592: for (var _fun30592_ip = 0;;) switch (_fun30592_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.data;
                    var2 = var0.size;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun30592_ip = 49;
                        continue _fun30592
                    }
                case 19:
                    var2 = var1.data;
                    var0 = var2.clear;
                    var0 = var0.bind(var2)();
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                case 49:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/CachedEntriesMap.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1671, 2]);