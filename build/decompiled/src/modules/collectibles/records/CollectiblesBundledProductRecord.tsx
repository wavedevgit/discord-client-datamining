// modules/collectibles/records/CollectiblesBundledProductRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var4 = function arg0() {
            var1 = arg0;
            var2 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = var1.prices;
            var2.prices = var3;
            var3 = var1.type;
            var2.type = var3;
            var3 = var1.premiumType;
            var2.premiumType = var3;
            var3 = var1.name;
            var2.name = var3;
            var3 = var1.skuId;
            var2.skuId = var3;
            var1 = var1.summary;
            var2.summary = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'fromServer';
        var0.key = var2;
        var1 = function arg0() {
            var0 = arg0;
            var9 = var0.prices;
            var6 = var0.type;
            var5 = var0.premium_type;
            var4 = var0.name;
            var3 = var0.sku_id;
            var1 = var0.summary;
            var2 = _closure2_slot0;
            var0 = {};
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var7 = 2;
            var8 = var8[var7];
            var7 = undefined;
            var8 = var10.bind(var7)(var8);
            var7 = var8.getPricesFromServer;
            var7 = var7.bind(var8)(var9);
            var0.prices = var7;
            var0.type = var6;
            var0.premiumType = var5;
            var0.name = var4;
            var0.skuId = var3;
            var0.summary = var1;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var12 = var1;
            var11 = var0;
            var0 = new var12[var2](var11, var10);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/CollectiblesBundledProductRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4621, 2]);