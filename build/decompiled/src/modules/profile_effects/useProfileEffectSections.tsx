// modules/profile_effects/useProfileEffectSections.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.useMemo;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var4 = {};
    var1 = 'purchase';
    var4.PURCHASE = var1;
    var1 = 'premium_purchase';
    var4.PREMIUM_PURCHASE = var1;
    var1 = 'preview';
    var4.PREVIEW = var1;
    var _closure1_slot6 = var4;
    var3 = {};
    var1 = 'None';
    var3.skuId = var1;
    var _closure1_slot7 = var3;
    var1 = {};
    var6 = 'Shop';
    var1.skuId = var6;
    var _closure1_slot8 = var1;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/profile_effects/useProfileEffectSections.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function() { // Original name: _default, environment: var5
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 4;
        var4 = var6[var2];
        var3 = undefined;
        var9 = var5.bind(var3)(var4);
        var8 = var9.useStateFromStores;
        var4 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var4;
        var4 = function() { // Environment: var0
            var0 = _closure1_slot5;
            var0 = var0.purchases;
            return var0;
        };
        var4 = var8.bind(var9)(var7, var4);
        var _closure2_slot0 = var4;
        var2 = var6[var2];
        var7 = var5.bind(var3)(var2);
        var6 = var7.useStateFromStoresArray;
        var2 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot4;
            var2 = var1.categories;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = var1.products;
            var0[1] = var1;
            return var0;
        };
        var6 = var6.bind(var7)(var5, var2);
        var5 = _closure1_slot2;
        var2 = 2;
        var5 = var5.bind(var3)(var6, var2);
        var2 = 0;
        var6 = var5[var2];
        var _closure2_slot1 = var6;
        var2 = 1;
        var5 = var5[var2];
        var _closure2_slot2 = var5;
        var2 = _closure1_slot3;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 5;
            var1 = var8[var1];
            var6 = undefined;
            var5 = var7.bind(var6)(var1);
            var4 = var5.getProfileEffects;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var5 = var4.bind(var5)(var2, var1);
            var4 = var5.reduce;
            var2 = {};
            var1 = new Array(0);
            var2.purchase = var1;
            var1 = new Array(0);
            var2.premium_purchase = var1;
            var1 = new Array(0);
            var2.preview = var1;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun56886: for (var _fun56886_ip = 0;;) switch (_fun56886_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = arg1;
                        var5 = _closure2_slot0;
                        var2 = var5.get;
                        var1 = var3.skuId;
                        var2 = var2.bind(var5)(var1);
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun56886_ip = 93;
                            continue _fun56886
                        }
                    case 35:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var5 = 5;
                        var6 = var6[var5];
                        var5 = undefined;
                        var6 = var7.bind(var5)(var6);
                        var5 = var6.isPremiumCollectiblesProduct;
                        var8 = _closure2_slot2;
                        var7 = var8.get;
                        var4 = var3.skuId;
                        var4 = var7.bind(var8)(var4);
                        var4 = var5.bind(var6)(var4);
                        _fun56886_ip = 129;
                        continue _fun56886;
                    case 93:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var5 = 5;
                        var6 = var6[var5];
                        var5 = undefined;
                        var6 = var7.bind(var5)(var6);
                        var5 = var6.isPremiumCollectiblesPurchase;
                        var4 = var5.bind(var6)(var2);
                    case 129:
                        if (var4) {
                            _fun56886_ip = 172;
                            continue _fun56886
                        }
                    case 132:
                        if (!(var1 == var2)) {
                            _fun56886_ip = 154;
                            continue _fun56886
                        }
                    case 136:
                        var2 = var0.preview;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                        _fun56886_ip = 188;
                        continue _fun56886;
                    case 154:
                        var2 = var0.purchase;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                        _fun56886_ip = 188;
                        continue _fun56886;
                    case 172:
                        var2 = var0.premium_purchase;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                    case 188:
                        return var0;
                }
            };
            var5 = var4.bind(var5)(var1, var2);
            var1 = {};
            var9 = _closure1_slot6;
            var2 = var9.PURCHASE;
            var1.section = var2;
            var4 = _closure1_slot7;
            var2 = new Array(2);
            var2[0] = var4;
            var3 = _closure1_slot8;
            var2[1] = var3;
            var14 = var5.purchase;
            var13 = 2;
            var15 = var2;
            var3 = arraySpread(var15, var14, var13);
            var1.items = var2;
            var4 = 12;
            var1.height = var4;
            var3 = 6;
            var2 = var8[var3];
            var2 = var7.bind(var6)(var2);
            var11 = var2.intl;
            var10 = var11.string;
            var2 = var8[var3];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2["9x1v/p"];
            var2 = var10.bind(var11)(var2);
            var1.header = var2;
            var2 = new Array(3);
            var2[0] = var1;
            var1 = {};
            var10 = var9.PREMIUM_PURCHASE;
            var1.section = var10;
            var10 = var5.premium_purchase;
            var1.items = var10;
            var1.height = var4;
            var10 = var8[var3];
            var10 = var7.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var3];
            var10 = var7.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.TiLCgw;
            var10 = var11.bind(var12)(var10);
            var1.header = var10;
            var2[1] = var1;
            var1 = {};
            var9 = var9.PREVIEW;
            var1.section = var9;
            var5 = var5.preview;
            var1.items = var5;
            var1.height = var4;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3["1vbbee"];
            var3 = var4.bind(var5)(var3);
            var1.header = var3;
            var2[2] = var1;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.items;
                var1 = var0.length;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var5;
    var2.Section = var4;
    var2.NONE_ITEM = var3;
    var2.SHOP_ITEM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4555, 4573, 632, 4556, 1234, 2]);