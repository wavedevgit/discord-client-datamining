// modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: getFastestListVisibleItemsWithErrorChecking, environment: var1
        _fun60947: for (var _fun60947_ip = 0;;) switch (_fun60947_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var1 = arg2;
                var3 = var0.sectionStart;
                var2 = var1.length;
                var2 = var3 > var2;
                if (var2) {
                    _fun60947_ip = 42;
                    continue _fun60947
                }
            case 27:
                var4 = var0.sectionEnd;
                var3 = var1.length;
                var2 = var4 > var3;
            case 42:
                if (!var2) {
                    _fun60947_ip = 104;
                    continue _fun60947
                }
            case 45:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var4 = var6.logFastestListError;
                var3 = {};
                var3.listId = var5;
                var3.sections = var1;
                var3.visibleItems = var0;
                var2 = 'Visible items `sectionStart/End` is greater than the number of sections';
                var2 = var4.bind(var6)(var2, var3);
            case 104:
                var3 = var0.itemStart;
                var2 = var0.sectionStart;
                var2 = var1[var2];
                var2 = var3 > var2;
                if (var2) {
                    _fun60947_ip = 147;
                    continue _fun60947
                }
            case 127:
                var4 = var0.itemEnd;
                var3 = var0.sectionEnd;
                var3 = var1[var3];
                var2 = var4 > var3;
            case 147:
                if (!var2) {
                    _fun60947_ip = 209;
                    continue _fun60947
                }
            case 150:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.logFastestListError;
                var2 = {};
                var2.listId = var5;
                var2.sections = var1;
                var2.visibleItems = var0;
                var1 = 'Visible items `itemStart/End` is greater than the number of items in the first section';
                var1 = var3.bind(var4)(var1, var2);
            case 209:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7526, 2]);