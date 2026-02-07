// modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx
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
    var3 = 'modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61671: for (var _fun61671_ip = 0;;) switch (_fun61671_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.itemSizes;
                var1 = var1.length;
                var3 = 1000;
                var1 = var1 > var3;
                if (var1) {
                    _fun61671_ip = 42;
                    continue _fun61671
                }
            case 27:
                var2 = var0.itemKeys;
                var2 = var2.length;
                var1 = var2 > var3;
            case 42:
                if (!var1) {
                    _fun61671_ip = 147;
                    continue _fun61671
                }
            case 45:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.logFastestListError;
                var2 = {};
                var1 = var0.itemSizes;
                var1 = var1.length;
                var2.itemSizesLength = var1;
                var1 = var0.itemKeys;
                var1 = var1.length;
                var2.itemKeysLength = var1;
                var1 = var0.listId;
                var2.listId = var1;
                var1 = 'Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration.';
                var2.detail = var1;
                var1 = 'Non-uniform configuration with large data set detected.';
                var1 = var3.bind(var4)(var1, var2);
            case 147:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7637, 2]);