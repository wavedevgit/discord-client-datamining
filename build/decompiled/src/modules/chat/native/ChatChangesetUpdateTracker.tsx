// modules/chat/native/ChatChangesetUpdateTracker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var0 = var0.WeakMap;
    var3 = var0.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var0
        }
    });
    var10 = var3;
    var0 = new var10[var0](var9);
    var0 = var0 instanceof Object ? var0 : var3;
    var _closure1_slot0 = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/ChatChangesetUpdateTracker.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun73421: for (var _fun73421_ip = 0;;) switch (_fun73421_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = var2.get;
                var0 = var0.bind(var2)(var3);
                var2 = null;
                var4 = var2 != var0;
                var2 = 0;
                if (!var4) {
                    _fun73421_ip = 34;
                    continue _fun73421
                }
            case 31:
                var2 = var0;
            case 34:
                var0 = 1;
                var0 = var2 + var0;
                var2 = _closure1_slot0;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.getAndIncrementChangesetIdForChat = var3;
    var1 = function arg0() {
        _fun73422: for (var _fun73422_ip = 0;;) switch (_fun73422_ip) {
            case 0:
                var5 = arg0;
                var3 = null;
                var2 = var3 == var5;
                var0 = 0;
                if (var2) {
                    _fun73422_ip = 46;
                    continue _fun73422
                }
            case 14:
                var4 = _closure1_slot0;
                var2 = var4.get;
                var2 = var2.bind(var4)(var5);
                var3 = var3 != var2;
                var1 = 0;
                if (!var3) {
                    _fun73422_ip = 43;
                    continue _fun73422
                }
            case 40:
                var1 = var2;
            case 43:
                var0 = var1;
            case 46:
                return var0;
        }
    };
    var2.getChangesetIdForChat = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);