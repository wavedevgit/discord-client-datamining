// modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun50896: for (var _fun50896_ip = 0;;) switch (_fun50896_ip) {
            case 0:
                var0 = arg0;
                var5 = null;
                var2 = var5 == var0;
                var1 = undefined;
                var6 = undefined;
                if (var2) {
                    _fun50896_ip = 22;
                    continue _fun50896
                }
            case 16:
                var6 = var0.paymentGateway;
            case 22:
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 0;
                var3 = var4[var3];
                var7 = var7.bind(var1)(var3);
                var3 = 'shop_include_unpublished';
                var7 = var7.bind(var1)(var3);
                var3 = _closure1_slot0;
                var2 = 1;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.useMaybeFetchCollectiblesCategoriesShared;
                var2 = {};
                var2.includeUnpublished = var7;
                var2.paymentGateway = var6;
                var7 = var5 == var0;
                var6 = undefined;
                if (var7) {
                    _fun50896_ip = 104;
                    continue _fun50896
                }
            case 98:
                var6 = var0.countryCode;
            case 104:
                var2.countryCode = var6;
                var6 = true;
                var2.includeBundles = var6;
                var7 = var5 == var0;
                var6 = undefined;
                if (var7) {
                    _fun50896_ip = 131;
                    continue _fun50896
                }
            case 125:
                var6 = var0.logPerf;
            case 131:
                var2.logPerf = var6;
                var5 = var5 == var0;
                var1 = undefined;
                if (var5) {
                    _fun50896_ip = 151;
                    continue _fun50896
                }
            case 145:
                var1 = var0.noOp;
            case 151:
                var0 = arg1;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4588, 5727, 2]);