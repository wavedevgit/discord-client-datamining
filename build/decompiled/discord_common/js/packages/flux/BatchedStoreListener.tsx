// ../discord_common/js/packages/flux/BatchedStoreListener.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var1 = function() { // Environment: var1
                _fun7127: for (var _fun7127_ip = 0;;) switch (_fun7127_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.getChangeSentinel;
                        var2 = var1.bind(var2)();
                        var3 = _closure3_slot0;
                        var3 = var3.storeVersionHandled;
                        if (!(var3 !== var2)) {
                            _fun7127_ip = 72;
                            continue _fun7127
                        }
                    case 52:
                        var1 = _closure3_slot0;
                        var3 = var1.changeCallback;
                        var3 = var3.bind(var1)();
                        var1.storeVersionHandled = var2;
                    case 72:
                        return var0;
                }
            };
            var2.handleStoreChange = var1;
            var1 = arg0;
            var2.stores = var1;
            var1 = arg1;
            var2.changeCallback = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'attach';
        var0.key = var1;
        var1 = function arg0() {
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = arg0;
            var _closure3_slot1 = var2;
            var2 = var1.stores;
            var1 = var2.forEach;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun7129: for (var _fun7129_ip = 0;;) switch (_fun7129_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun7129_ip = 37;
                            continue _fun7129
                        }
                    case 9:
                        var1 = var2.addReactChangeListener;
                        var0 = _closure3_slot0;
                        var0 = var0.handleStoreChange;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    case 37:
                        var0 = global;
                        var2 = var0.Error;
                        var10 = _closure3_slot1;
                        var0 = var0.HermesInternal;
                        var5 = var0.concat;
                        var11 = '';
                        var9 = " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ";
                        var8 = arg1;
                        var7 = ' stores before error.';
                        var10 = var11[var5](var10, var9, var8, var7, var6);
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var11 = var1;
                        var0 = new var11[var2](var10, var9);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'detach';
        var0.key = var5;
        var4 = function() {
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = var1.stores;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.removeReactChangeListener;
                var0 = _closure3_slot0;
                var0 = var0.handleStoreChange;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/flux/BatchedStoreListener.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BatchedStoreListener = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 570, 2]);