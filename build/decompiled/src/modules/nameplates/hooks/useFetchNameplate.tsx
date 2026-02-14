// modules/nameplates/hooks/useFetchNameplate.tsx
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
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nameplates/hooks/useFetchNameplate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80869: for (var _fun80869_ip = 0;;) switch (_fun80869_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 0;
                var0 = var0[var6];
                var5 = undefined;
                var3 = var1.bind(var5)(var0);
                var1 = var3.useFetchCollectiblesProduct;
                var0 = arg0;
                var0 = var1.bind(var3)(var0);
                var3 = var0.product;
                var1 = var0.isFetching;
                var0 = null;
                var0 = var0 == var3;
                var7 = undefined;
                if (var0) {
                    _fun80869_ip = 75;
                    continue _fun80869
                }
            case 61:
                var0 = var3.items;
                var0 = var0[var6];
                var7 = var0.type;
            case 75:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 1;
                var0 = var8[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.NAMEPLATE;
                var4 = undefined;
                if (!(var7 === var0)) {
                    _fun80869_ip = 122;
                    continue _fun80869
                }
            case 113:
                var0 = var3.items;
                var4 = var0[var6];
            case 122:
                var0 = {};
                var0.nameplateProduct = var3;
                var0.nameplateRecord = var4;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getNameplateData;
                var2 = var2.bind(var3)(var4);
                var0.nameplateData = var2;
                var0.isFetching = var1;
                return var0;
        }
    };
    var2.useFetchNameplate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6966, 1644, 1641, 2]);