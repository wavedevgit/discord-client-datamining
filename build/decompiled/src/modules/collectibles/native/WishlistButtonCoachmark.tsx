// modules/collectibles/native/WishlistButtonCoachmark.tsx
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/WishlistButtonCoachmark.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var3 = var1.anchorRef;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 3;
        var6 = var5[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var6);
        var6 = var7.useHasNeverWishlisted;
        var10 = var6.bind(var7)();
        var _closure2_slot0 = var10;
        var6 = 4;
        var6 = var5[var6];
        var8 = var4.bind(var1)(var6);
        var7 = var8.useMobileWishlistOwnerExperiment;
        var6 = 'FirstCardWishlistButtonCoachmark';
        var6 = var7.bind(var8)(var6);
        var6 = var6.showWishlistButtonInProductCard;
        var _closure2_slot1 = var6;
        var7 = _closure1_slot3;
        var9 = var7.useMemo;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var6;
        var6 = function() { // Environment: var0
            _fun89142: for (var _fun89142_ip = 0;;) switch (_fun89142_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun89142_ip = 17;
                        continue _fun89142
                    }
                case 10:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun89142_ip = 23;
                        continue _fun89142
                    }
                case 17:
                    var0 = new Array(0);
                    _fun89142_ip = 71;
                    continue _fun89142;
                case 23:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.DismissibleContent;
                    var2 = var1.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var9 = var9.bind(var7)(var6, var8);
        var6 = 6;
        var6 = var5[var6];
        var8 = var4.bind(var1)(var6);
        var6 = var8.useSelectedDismissibleContent;
        var8 = var6.bind(var8)(var9);
        var6 = _closure1_slot2;
        var2 = 2;
        var6 = var6.bind(var1)(var8, var2);
        var2 = 0;
        var9 = var6[var2];
        var _closure2_slot2 = var9;
        var2 = 1;
        var8 = var6[var2];
        var _closure2_slot3 = var8;
        var6 = var7.useMemo;
        var2 = new Array(2);
        var2[0] = var9;
        var2[1] = var8;
        var0 = function() { // Environment: var0
            var0 = {};
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 7;
            var2 = var5[var1];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var7 = var2.intl;
            var6 = var7.string;
            var2 = var5[var1];
            var2 = var4.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2["47Rhc3"];
            var2 = var6.bind(var7)(var2);
            var0.title = var2;
            var2 = var5[var1];
            var2 = var4.bind(var3)(var2);
            var6 = var2.intl;
            var2 = var6.string;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.t;
            var1 = var1.PXjA0b;
            var1 = var2.bind(var6)(var1);
            var0.description = var1;
            var1 = 'top';
            var0.position = var1;
            var2 = _closure2_slot2;
            var1 = 5;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
            var1 = var2 === var1;
            var0.visible = var1;
            var1 = function() {
                var2 = _closure2_slot3;
                var0 = _closure1_slot4;
                var1 = var0.USER_DISMISS;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0.onDismiss = var1;
            return var0;
        };
        var2 = var6.bind(var7)(var0, var2);
        var0 = 8;
        var0 = var5[var0];
        var1 = var4.bind(var1)(var0);
        var0 = var1.useCoachmark;
        var0 = var0.bind(var1)(var3, var2);
        var0 = null;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1369, 11337, 11335, 1358, 6019, 1235, 7107, 2]);