// modules/collectibles/hooks/useIsVariantColorLight.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useIsVariantColorLight.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var4 = var1.variantValue;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun87551: for (var _fun87551_ip = 0;;) switch (_fun87551_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var7 = 1;
                    var0 = var0[var7];
                    var6 = undefined;
                    var4 = var1.bind(var6)(var0);
                    var3 = var4.isValidHex;
                    var0 = _closure2_slot0;
                    var0 = var0.variantValue;
                    var0 = var3.bind(var4)(var0);
                    if (!var0) {
                        _fun87551_ip = 124;
                        continue _fun87551
                    }
                case 52:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = var4[var7];
                    var3 = var5.bind(var6)(var2);
                    var2 = var3.getDarkness;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.hex2int;
                    var1 = _closure2_slot0;
                    var1 = var1.variantValue;
                    var1 = var4.bind(var5)(var1);
                    var2 = var2.bind(var3)(var1);
                    var1 = 0.3;
                    var0 = var2 < var1;
                case 124:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 668, 2]);