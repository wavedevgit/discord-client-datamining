// modules/nameplates/native/NameplateUtils.tsx
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
    var3 = 'modules/nameplates/native/NameplateUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57587: for (var _fun57587_ip = 0;;) switch (_fun57587_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var6 = undefined;
                var4 = var3.bind(var6)(var0);
                var3 = var4.getIsCollectiblesNewAssetUrlEnabled;
                var0 = 'getNameplateAssets';
                var3 = var3.bind(var4)(var0);
                var0 = {};
                if (var3) {
                    _fun57587_ip = 179;
                    continue _fun57587
                }
            case 50:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var3 = var7[var4];
                var11 = var5.bind(var6)(var3);
                var10 = var11.getAssetCDNUrl;
                var13 = var2.src;
                var3 = global;
                var8 = var3.HermesInternal;
                var12 = var8.concat;
                var9 = 'collectibles/';
                var8 = 'static.png';
                var8 = var12.bind(var9)(var13, var8);
                var8 = var10.bind(var11)(var8);
                var0.staticImageUrl = var8;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.getAssetCDNUrl;
                var8 = var2.src;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var3 = 'img.png';
                var3 = var7.bind(var9)(var8, var3);
                var3 = var4.bind(var5)(var3);
                var0.animatedImageUrl = var3;
                return var0;
            case 179:
                var4 = var2.skuId;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 1;
                var2 = var7[var1];
                var8 = var5.bind(var6)(var2);
                var3 = var8.getCollectiblesItemAssetUrl;
                var2 = var7[var1];
                var2 = var5.bind(var6)(var2);
                var2 = var2.CollectiblesItemAssetFormat;
                var2 = var2.STATIC;
                var2 = var3.bind(var8)(var4, var2);
                var0.staticImageUrl = var2;
                var2 = var7[var1];
                var3 = var5.bind(var6)(var2);
                var2 = var3.getCollectiblesItemAssetUrl;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.CollectiblesItemAssetFormat;
                var1 = var1.ANIMATED;
                var1 = var2.bind(var3)(var4, var1);
                var0.animatedImageUrl = var1;
                return var0;
        }
    };
    var2.getNameplateAssets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7000, 7001, 7002, 2]);