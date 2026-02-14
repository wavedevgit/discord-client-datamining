// modules/collectibles/native/useWishlistNUXActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function() {
        _fun87786: for (var _fun87786_ip = 0;;) switch (_fun87786_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var2 = var6[var3];
                var4 = undefined;
                var9 = var5.bind(var4)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var8.bind(var9)(var7, var2);
                var _closure2_slot0 = var2;
                var2 = var6[var3];
                var9 = var5.bind(var4)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getFirstWishlistId;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var8.bind(var9)(var7, var2);
                var3 = var6[var3];
                var4 = var5.bind(var4)(var3);
                var3 = var4.useStateFromStores;
                var5 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun87789: for (var _fun87789_ip = 0;;) switch (_fun87789_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getUserProfile;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun87789_ip = 46;
                                continue _fun87789
                            }
                        case 34:
                            var2 = var1.fetchEndedAt;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 46:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var1, var0);
                if (!var0) {
                    _fun87786_ip = 148;
                    continue _fun87786
                }
            case 142:
                var1 = null;
                var0 = var1 == var2;
            case 148:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useWishlistNUXActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        var2 = _closure1_slot8;
        var7 = undefined;
        var2 = var2.bind(var7)();
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var5 = var4.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var1
            _fun87791: for (var _fun87791_ip = 0;;) switch (_fun87791_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun87791_ip = 16;
                        continue _fun87791
                    }
                case 10:
                    var0 = new Array(0);
                    _fun87791_ip = 64;
                    continue _fun87791;
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
        var _closure2_slot1 = var5;
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
            var2 = _closure2_slot1;
            var1 = _closure1_slot7;
            var1 = var1.USER_DISMISS;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.showWishlistNUXActionSheet = var1;
        return var0;
    };
    var2.default = var3;
    var2.useHasNeverWishlisted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4666, 1217, 1369, 566, 1358, 6018, 3284, 11337, 1307, 2]);