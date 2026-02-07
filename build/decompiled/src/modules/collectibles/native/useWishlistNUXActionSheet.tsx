// modules/collectibles/native/useWishlistNUXActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/useWishlistNUXActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun87807: for (var _fun87807_ip = 0;;) switch (_fun87807_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var2 = var6[var3];
                var7 = undefined;
                var9 = var5.bind(var7)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var1 = _closure1_slot6;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var8.bind(var9)(var4, var2);
                var _closure2_slot0 = var2;
                var2 = var6[var3];
                var10 = var5.bind(var7)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var2;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getFirstWishlistId;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var9.bind(var10)(var8, var4);
                var3 = var6[var3];
                var6 = var5.bind(var7)(var3);
                var5 = var6.useStateFromStores;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    _fun87810: for (var _fun87810_ip = 0;;) switch (_fun87810_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getUserProfile;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun87810_ip = 46;
                                continue _fun87810
                            }
                        case 34:
                            var2 = var1.fetchEndedAt;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 46:
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var3, var2);
                if (!var2) {
                    _fun87807_ip = 144;
                    continue _fun87807
                }
            case 138:
                var3 = null;
                var2 = var3 == var4;
            case 144:
                var _closure2_slot1 = var2;
                var4 = _closure1_slot4;
                var5 = var4.useMemo;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    _fun87811: for (var _fun87811_ip = 0;;) switch (_fun87811_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun87811_ip = 16;
                                continue _fun87811
                            }
                        case 10:
                            var0 = new Array(0);
                            _fun87811_ip = 64;
                            continue _fun87811;
                        case 16:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = var1.DismissibleContent;
                            var2 = var1.WISHLIST_MOBILE_NUX_ACTION_SHEET;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 64:
                            return var0;
                    }
                };
                var9 = var5.bind(var4)(var2, var3);
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var5 = var6.bind(var7)(var2);
                var3 = var5.useSelectedDismissibleContent;
                var2 = true;
                var3 = var3.bind(var5)(var9, var7, var2);
                var2 = _closure1_slot3;
                var0 = 2;
                var2 = var2.bind(var7)(var3, var0);
                var0 = 0;
                var3 = var2[var0];
                var0 = 1;
                var5 = var2[var0];
                var _closure2_slot2 = var5;
                var0 = {};
                var2 = 6;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.WISHLIST_MOBILE_NUX_ACTION_SHEET;
                var2 = var3 === var2;
                var0.shouldShowWishlistNUXActionSheet = var2;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function(arg0) { // Environment: var1
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var3 = var2[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var3);
                    var6 = var7.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 10;
                    var3 = var2[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = 9;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var11 = var4.bind(var0)(var3, var2);
                    var4 = {};
                    var2 = arg0;
                    var4.product = var2;
                    var10 = 'WishlistNUXAddedItemActionSheet';
                    var8 = 'stack';
                    var12 = var7;
                    var9 = var4;
                    var2 = var12[var6](var11, var10, var9, var8, var7);
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot7;
                    var1 = var1.USER_DISMISS;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                var0.showWishlistNUXActionSheet = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4660, 1216, 1369, 566, 1358, 6008, 3279, 11357, 1307, 2]);