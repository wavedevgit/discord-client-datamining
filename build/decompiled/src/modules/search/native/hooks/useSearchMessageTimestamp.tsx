// modules/search/native/hooks/useSearchMessageTimestamp.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/hooks/useSearchMessageTimestamp.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useSearchMessageTimestamp, environment: var1
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun105956: for (var _fun105956_ip = 0;;) switch (_fun105956_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 1;
                    var0 = var3[var0];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var0);
                    var2 = var4.extractTimestamp;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var6 = null;
                    if (!(var6 == var0)) {
                        _fun105956_ip = 58;
                        continue _fun105956
                    }
                case 49:
                    var5 = _closure2_slot1;
                    var0 = var5.id;
                case 58:
                    var4 = var2.bind(var4)(var0);
                    var0 = {};
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 2;
                    var6 = var5[var1];
                    var8 = var2.bind(var3)(var6);
                    var7 = var8.getRelativeTimestamp;
                    var6 = true;
                    var6 = var7.bind(var8)(var4, var6);
                    var0.timestamp = var6;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.getRelativeTimestamp;
                    var1 = false;
                    var1 = var2.bind(var3)(var4, var1);
                    var0.timestampAccessibilityLabel = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSearchMessageTimestamp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 21, 4180, 2]);