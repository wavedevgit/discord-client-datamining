// modules/activities/useActivityShelfItemData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useActivityShelfItemData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 1;
        var2 = var5[var2];
        var5 = undefined;
        var3 = var3.bind(var5)(var2);
        var2 = {};
        var6 = arg0;
        var2.guildId = var6;
        var5 = var3.bind(var5)(var2);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun111325: for (var _fun111325_ip = 0;;) switch (_fun111325_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.application;
                        var1 = var0.id;
                        var0 = _closure2_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun111325_ip = 38;
                        continue _fun111325
                    }
                case 35:
                    var0 = var1;
                case 38:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useActivityShelfItemData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11691, 2]);