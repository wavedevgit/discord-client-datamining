// utils/native/RunAfterInteractionsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        _fun51497: for (var _fun51497_ip = 0;;) switch (_fun51497_ip) {
            case 0:
                var4 = arguments[1];
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun51497_ip = 24;
                    continue _fun51497
                }
            case 18:
                var4 = 2000;
            case 24:
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var6 = _closure1_slot2;
                var5 = var6.runAfterInteractions;
                var2 = function() { // Environment: var1
                    var2 = _closure2_slot2;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                _closure2_slot1 = var2;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var3 = var0.DelayedCall;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var9 = var2;
                var8 = var4;
                var0 = new var9[var3](var8, var7, var6);
                var2 = var0 instanceof Object ? var0 : var2;
                _closure2_slot2 = var2;
                var0 = var2.delay;
                var0 = var0.bind(var2)();
                var0 = {};
                var1 = function() {
                    var2 = _closure2_slot2;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot1;
                    var0 = var1.cancel;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var0.cancel = var1;
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.InteractionManager;
    var _closure1_slot2 = var3;
    var3 = {};
    var3.runAfterInteractions = var1;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/RunAfterInteractionsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.runAfterInteractions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3621, 2]);