// modules/app_database/modules/messages/requireSortedDescending.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 2;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/messages/requireSortedDescending.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun39014: for (var _fun39014_ip = 0;;) switch (_fun39014_ip) {
            case 0:
                var8 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 0;
                var2 = var0[var4];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var5 = var8.length;
                var2 = 2;
                var2 = var5 <= var2;
                if (var2) {
                    _fun39014_ip = 105;
                    continue _fun39014
                }
            case 42:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var9 = 1;
                var1 = var1[var9];
                var7 = var5.bind(var0)(var1);
                var6 = var7.compare;
                var1 = var8[var4];
                var5 = var1.id;
                var1 = var8.length;
                var1 = var1 - var9;
                var1 = var8[var1];
                var1 = var1.id;
                var1 = var6.bind(var7)(var5, var1);
                var2 = var1 >= var4;
            case 105:
                var1 = 'messages must be sorted in descending order.';
                var1 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.requireSortedDescending = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44, 21, 2]);