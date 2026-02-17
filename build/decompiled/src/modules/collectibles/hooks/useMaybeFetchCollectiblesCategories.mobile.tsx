// modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun51531: for (var _fun51531_ip = 0;;) switch (_fun51531_ip) {
            case 0:
                var0 = arg0;
                var5 = null;
                var2 = var5 == var0;
                var1 = undefined;
                var6 = undefined;
                if (var2) {
                    _fun51531_ip = 22;
                    continue _fun51531
                }
            case 16:
                var6 = var0.paymentGateway;
            case 22:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = 1;
                var7 = var4[var7];
                var9 = var3.bind(var1)(var7);
                var8 = var9.useStateFromStoresObject;
                var2 = _closure1_slot2;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var2
                    var0 = {};
                    var3 = _closure1_slot2;
                    var2 = var3.get;
                    var1 = 'shop_disable_cache';
                    var1 = var2.bind(var3)(var1);
                    var0.noCache = var1;
                    var2 = var3.get;
                    var1 = 'shop_include_unpublished';
                    var1 = var2.bind(var3)(var1);
                    var0.includeUnpublished = var1;
                    return var0;
                };
                var2 = var8.bind(var9)(var7, var2);
                var8 = var2.noCache;
                var7 = var2.includeUnpublished;
                var2 = 2;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.useMaybeFetchCollectiblesCategoriesShared;
                var2 = {};
                var2.noCache = var8;
                var2.includeUnpublished = var7;
                var2.paymentGateway = var6;
                var7 = var5 == var0;
                var6 = undefined;
                if (var7) {
                    _fun51531_ip = 138;
                    continue _fun51531
                }
            case 132:
                var6 = var0.countryCode;
            case 138:
                var2.countryCode = var6;
                var6 = true;
                var2.includeBundles = var6;
                var7 = var5 == var0;
                var6 = undefined;
                if (var7) {
                    _fun51531_ip = 165;
                    continue _fun51531
                }
            case 159:
                var6 = var0.logPerf;
            case 165:
                var2.logPerf = var6;
                var5 = var5 == var0;
                var1 = undefined;
                if (var5) {
                    _fun51531_ip = 185;
                    continue _fun51531
                }
            case 179:
                var1 = var0.noOp;
            case 185:
                var0 = arg1;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4002, 566, 5794, 2]);