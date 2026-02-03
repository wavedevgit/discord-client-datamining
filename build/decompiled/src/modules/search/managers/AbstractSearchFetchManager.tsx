// modules/search/managers/AbstractSearchFetchManager.tsx
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
        var2 = function() {
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
            var2.searchFetchers = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'cleanUp';
        var0.key = var1;
        var1 = function arg0() {
            var2 = arg0;
            var1 = this;
            var0 = var1.cancel;
            var0 = var0.bind(var1)(var2);
            var0 = var1.delete;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'cancel';
        var0.key = var5;
        var5 = function arg0() {
            _fun72092: for (var _fun72092_ip = 0;;) switch (_fun72092_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.searchFetchers;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun72092_ip = 38;
                        continue _fun72092
                    }
                case 28:
                    var0 = var1.cancel;
                    var0 = var0.bind(var1)();
                case 38:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.searchFetchers;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.searchFetchers;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var4 = function arg0, arg1() {
            var0 = this;
            var3 = var0.searchFetchers;
            var2 = var3.set;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[4] = var0;
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
    var3 = 'modules/search/managers/AbstractSearchFetchManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AbstractSearchFetchManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);