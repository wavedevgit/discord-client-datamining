// modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var3);
    var3 = 1;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = function() {
        var2 = this;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot2;
        var3 = _closure1_slot5;
        var0 = undefined;
        var3 = var4.bind(var0)(var2, var3);
        var3 = global;
        var3 = var3.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var7 = var4;
        var3 = new var7[var3](var6);
        var3 = var3 instanceof Object ? var3 : var4;
        var2.pending = var3;
        var3 = function(arg0) { // Environment: var1
            var0 = _closure2_slot0;
            var2 = var0.pending;
            var1 = var2.add;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2.add = var3;
        var3 = function(arg0) { // Environment: var1
            var0 = _closure2_slot0;
            var2 = var0.pending;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2.remove = var3;
        var3 = function(arg0) { // Environment: var1
            var0 = _closure2_slot0;
            var2 = var0.pending;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2.has = var3;
        var3 = function(arg0, arg1) { // Environment: var1
            _fun105986: for (var _fun105986_ip = 0;;) switch (_fun105986_ip) {
                case 0:
                    var2 = arg1;
                    var3 = _closure2_slot0;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (!var1) {
                        _fun105986_ip = 81;
                        continue _fun105986
                    }
                case 23:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 3;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.fetchNextMessages;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var1, var2);
                    if (!var1) {
                        _fun105986_ip = 81;
                        continue _fun105986
                    }
                case 66:
                    var1 = _closure2_slot0;
                    var0 = var1.remove;
                    var0 = var0.bind(var1)(var2);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.flush = var3;
        var1 = function() { // Environment: var1
            var1 = _closure2_slot0;
            var0 = global;
            var0 = var0.Set;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var3 = var2;
            var0 = new var3[var0](var2);
            var0 = var0 instanceof Object ? var0 : var2;
            var1.pending = var0;
            var0 = undefined;
            return var0;
        };
        var2.reset = var1;
        return var0;
    };
    var _closure1_slot5 = var3;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 4;
        var0 = var4[var0];
        var4 = undefined;
        var3 = var3.bind(var4)(var0);
        var0 = function() { // Environment: var1
            var0 = _closure1_slot4;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var _closure2_slot0 = var0;
        var4 = _closure1_slot3;
        var3 = var4.subscribeTextInputValue;
        var2 = arg0;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun105990: for (var _fun105990_ip = 0;;) switch (_fun105990_ip) {
                case 0:
                    var1 = arg1;
                    var0 = arg0;
                    if (!(var1 !== var0)) {
                        _fun105990_ip = 27;
                        continue _fun105990
                    }
                case 10:
                    var1 = _closure2_slot0;
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                case 27:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useSearchFetchPendingManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 9005, 11697, 4931, 2]);