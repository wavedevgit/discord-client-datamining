// modules/channel/native/ScreenIndexFrozen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function(arg0) { // Original name: isScreenIndexFrozen, environment: var1
        var2 = _closure1_slot3;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var5;
    var4 = function(arg0) { // Original name: addFrozenScreenIndexesChangedListener, environment: var1
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot4;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var0 = function() { // Environment: var0
            var2 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        return var0;
    };
    var _closure1_slot6 = var4;
    var3 = function(arg0) { // Original name: removeFrozenScreenIndexesChangedListener, environment: var1
        var2 = _closure1_slot4;
        var1 = var2.delete;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot7 = var3;
    var6 = global;
    var11 = var6.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var0 = true;
    var9.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var9);
    var0 = 0;
    var10 = var8[var0];
    var9 = arg3;
    var0 = undefined;
    var9 = var9.bind(var0)(var10);
    var _closure1_slot2 = var9;
    var9 = var6.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot3 = var9;
    var6 = var6.Set;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var15 = var9;
    var6 = new var15[var6](var14);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/channel/native/ScreenIndexFrozen.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg0, arg1) { // Original name: freezeScreenIndex, environment: var1
        _fun32976: for (var _fun32976_ip = 0;;) switch (_fun32976_ip) {
            case 0:
                var3 = arg1;
                var2 = _closure1_slot3;
                var1 = arg0;
                if (var1) {
                    _fun32976_ip = 28;
                    continue _fun32976
                }
            case 16:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                _fun32976_ip = 38;
                continue _fun32976;
            case 28:
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
            case 38:
                var2 = _closure1_slot4;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.freezeScreenIndex = var6;
    var2.isScreenIndexFrozen = var5;
    var2.addFrozenScreenIndexesChangedListener = var4;
    var2.removeFrozenScreenIndexesChangedListener = var3;
    var1 = function(arg0) { // Original name: useIsScreenIndexFrozenSharedValue, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 1;
        var0 = var4[var0];
        var6 = undefined;
        var4 = var3.bind(var6)(var0);
        var3 = var4.useSharedValue;
        var0 = _closure1_slot5;
        var0 = var0.bind(var6)(var5);
        var0 = var3.bind(var4)(var0);
        var _closure2_slot1 = var0;
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var0;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot6;
            var1 = undefined;
            var0 = function() { // Environment: var0
                var3 = _closure2_slot1;
                var2 = var3.set;
                var4 = _closure1_slot5;
                var1 = _closure2_slot0;
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useIsScreenIndexFrozenSharedValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3679, 2]);