// hooks/useLocalStorageState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/useLocalStorageState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useLocalStorageState, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var2 = function() { // Environment: var1
            _fun67701: for (var _fun67701_ip = 0;;) switch (_fun67701_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var3 = var0.Storage;
                    var2 = var3.get;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun67701_ip = 58;
                        continue _fun67701
                    }
                case 54:
                    var0 = _closure2_slot1;
                case 58:
                    return var0;
            }
        };
        var7 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var6 = undefined;
        var2 = 2;
        var7 = var3.bind(var6)(var7, var2);
        var2 = 0;
        var2 = var7[var2];
        var3 = 1;
        var3 = var7[var3];
        var _closure2_slot2 = var3;
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 3;
        var0 = var7[var0];
        var3 = var3.bind(var6)(var0);
        var0 = function() { // Environment: var1
            _fun67702: for (var _fun67702_ip = 0;;) switch (_fun67702_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var4 = 2;
                    var1 = var0[var4];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var6 = var1.Storage;
                    var5 = var6.get;
                    var3 = _closure2_slot0;
                    var5 = var5.bind(var6)(var3);
                    var3 = null;
                    if (!(var3 == var5)) {
                        _fun67702_ip = 96;
                        continue _fun67702
                    }
                case 54:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.Storage;
                    var3 = var4.set;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                case 96:
                    return var0;
            }
        };
        var0 = var3.bind(var6)(var0);
        var0 = new Array(2);
        var0[0] = var2;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0) { // Environment: var1
            var4 = arg0;
            var2 = _closure2_slot2;
            var0 = undefined;
            var2 = var2.bind(var0)(var4);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var2 = var3.bind(var0)(var2);
            var3 = var2.Storage;
            var2 = var3.set;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1, var4);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0[1] = var1;
        return var0;
    };
    var2.useLocalStorageState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 587, 4056, 2]);