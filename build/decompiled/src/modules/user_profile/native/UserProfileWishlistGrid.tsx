// modules/user_profile/native/UserProfileWishlistGrid.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'gap': 16
    };
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileWishlistGrid.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103228: for (var _fun103228_ip = 0;;) switch (_fun103228_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.wishlistId;
                var _closure2_slot0 = var1;
                var0 = var0.backgroundColor;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot8;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 6;
                var0 = var9[var3];
                var11 = var8.bind(var4)(var0);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var2;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot5;
                    var1 = var2.getWishlist;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var10.bind(var11)(var6, var0);
                var0 = var9[var3];
                var12 = var8.bind(var4)(var0);
                var11 = var12.useStateFromStores;
                var10 = new Array(1);
                var10[0] = var2;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot5;
                    var1 = var2.isFetching;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var11.bind(var12)(var10, var0);
                var3 = var9[var3];
                var9 = var8.bind(var4)(var3);
                var8 = var9.useStateFromStores;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var5
                    var2 = _closure1_slot5;
                    var1 = var2.getError;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var8.bind(var9)(var3, var2);
                var10 = _closure1_slot3;
                var9 = var10.useCallback;
                var8 = function(arg0) { // Environment: var5
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 7;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 8;
                    var8 = var7[var5];
                    var8 = var6.bind(var0)(var8);
                    var9 = var8.USER_PROFILE_WISHLIST;
                    var8 = new Array(1);
                    var8[0] = var9;
                    var1.analyticsLocations = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.USER_PROFILE_WISHLIST;
                    var1.analyticsSource = var5;
                    var5 = arg0;
                    var1.initialProductSkuId = var5;
                    var4 = _closure1_slot6;
                    var4 = var4.SHOP_ALL;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = new Array(0);
                var3 = var9.bind(var10)(var8, var3);
                var _closure2_slot2 = var3;
                if (!var0) {
                    _fun103228_ip = 199;
                    continue _fun103228
                }
            case 190:
                var0 = null;
                var3 = var0 == var6;
                if (var3) {
                    _fun103228_ip = 288;
                    continue _fun103228
                }
            case 199:
                var8 = null;
                var2 = var8 != var2;
                var0 = null;
                if (var2) {
                    _fun103228_ip = 288;
                    continue _fun103228
                }
            case 210:
                var2 = var8 == var6;
                var0 = null;
                if (var2) {
                    _fun103228_ip = 288;
                    continue _fun103228
                }
            case 219:
                var2 = var6.items;
                var3 = var2.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun103228_ip = 288;
                    continue _fun103228
                }
            case 237:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var7.container;
                var1.style = var7;
                var7 = var6.items;
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.item = var0;
                    var5 = function() {
                        var2 = _closure2_slot2;
                        var0 = _closure3_slot0;
                        var1 = var0.skuId;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var5;
                    var5 = _closure2_slot1;
                    var1.backgroundColor = var5;
                    var8 = var0.skuId;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var7 = var0.concat;
                    var6 = '';
                    var5 = '-';
                    var0 = arg1;
                    var0 = var7.bind(var6)(var8, var5, var0);
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 288:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11314, 3283, 33, 1297, 566, 4597, 5583, 13499, 2]);