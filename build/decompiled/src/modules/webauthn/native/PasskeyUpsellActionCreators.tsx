// modules/webauthn/native/PasskeyUpsellActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var3;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5.value = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var2, var1, var5);
    var1 = {};
    var5 = function() {
        _fun80414: for (var _fun80414_ip = 0;;) switch (_fun80414_ip) {
            case 0:
                var2 = this;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 0;
                var4 = var3[var0];
                var0 = undefined;
                var5 = var7.bind(var0)(var4);
                var4 = var5.UNSAFE_isDismissibleContentDismissed;
                var6 = 1;
                var3 = var3[var6];
                var3 = var7.bind(var0)(var3);
                var3 = var3.DismissibleContent;
                var3 = var3.PASSWORDLESS_UPSELL;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun80414_ip = 127;
                    continue _fun80414
                }
            case 65:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 2;
                var3 = var1[var3];
                var4 = var5.bind(var0)(var3);
                var3 = var4.requestMarkDismissibleContentAsShown;
                var1 = var1[var6];
                var1 = var5.bind(var0)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.PASSWORDLESS_UPSELL;
                var1 = var3.bind(var4)(var1);
                var1 = var2.openPasskeyUpsellPromoSheet;
                var1 = var1.bind(var2)();
            case 127:
                return var0;
        }
    };
    var1.openPasskeyUpsell = var5;
    var5 = function() {
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var3 = var1[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.pushLazy;
        var5 = _closure1_slot0;
        var2 = 5;
        var2 = var1[var2];
        var5 = var5.bind(var0)(var2);
        var2 = 4;
        var2 = var1[var2];
        var1 = var1.paths;
        var2 = var5.bind(var0)(var2, var1);
        var1 = 'PASSKEY_UPSELL_KEY';
        var1 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var1.openPasskeyUpsellModal = var5;
    var5 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.popWithKey;
        var1 = 'PASSKEY_UPSELL_KEY';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.closePasskeyUpsellModal = var5;
    var5 = function() {
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var3 = var1[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.openLazy;
        var5 = _closure1_slot0;
        var2 = 5;
        var2 = var1[var2];
        var5 = var5.bind(var0)(var2);
        var2 = 7;
        var2 = var1[var2];
        var1 = var1.paths;
        var2 = var5.bind(var0)(var2, var1);
        var1 = 'PASSKEY_UPSELL_KEY';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.openPasskeyUpsellPromoSheet = var5;
    var5 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.hideActionSheet;
        var1 = 'PASSKEY_UPSELL_KEY';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.closePasskeyUpsellPromoSheet = var5;
    var0 = function arg0() {
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var3 = var1[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var3 = _closure1_slot0;
        var2 = 5;
        var2 = var1[var2];
        var3 = var3.bind(var0)(var2);
        var2 = 8;
        var2 = var1[var2];
        var1 = var1.paths;
        var3 = var3.bind(var0)(var2, var1);
        var2 = arg0;
        var1 = 'PASSKEY_UPSELL_KEY';
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.openPasskeyUpsellPromoModal = var0;
    var0 = 9;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/native/PasskeyUpsellActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3218, 1358, 1360, 4569, 10202, 1307, 3284, 10204, 10206, 2]);