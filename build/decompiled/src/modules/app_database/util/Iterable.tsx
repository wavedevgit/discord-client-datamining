// modules/app_database/util/Iterable.tsx
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
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function(arg0) { // Original name: Chained, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 0;
            var2.index = var1;
            var1 = arg0;
            var2.items = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = global;
        var1 = var1.Symbol;
        var1 = var1.iterator;
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = this;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'next';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun40012: for (var _fun40012_ip = 0;;) switch (_fun40012_ip) {
                case 0:
                    var3 = this;
                    var1 = var3.index;
                    var0 = var3.items;
                    var0 = var0.length;
                    var2 = 1;
                    if (!(var1 < var0)) {
                        _fun40012_ip = 95;
                        continue _fun40012
                    }
                case 26:
                    var1 = var3.items;
                    var0 = var3.index;
                    var1 = var1[var0];
                    var0 = var1.next;
                    var0 = var0.bind(var1)();
                    var1 = var0.done;
                    if (var1) {
                        _fun40012_ip = 60;
                        continue _fun40012
                    }
                case 58:
                    return var0;
                case 60:
                    var0 = var3.index;
                    var0 = var0 + var2;
                    var3.index = var0;
                    var1 = var3.index;
                    var0 = var3.items;
                    var0 = var0.length;
                    if (var1 < var0) {
                        _fun40012_ip = 26;
                        continue _fun40012
                    }
                case 95:
                    var0 = {};
                    var1 = true;
                    var0.done = var1;
                    var1 = undefined;
                    var0.value = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/util/Iterable.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: chain, environment: var1
        var3 = 0;
        var3 = copyRestArgs(var3);
        var0 = _closure1_slot2;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var4 = var1;
        var0 = new var4[var0](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.chain = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);