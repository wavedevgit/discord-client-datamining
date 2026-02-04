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
        _fun60798: for (var _fun60798_ip = 0;;) switch (_fun60798_ip) {
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
                    _fun60798_ip = 202;
                    continue _fun60798
                }
            case 68:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 2;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.getCurrentConfig;
                var3 = {};
                var7 = 'PasskeyUpsellActionCreators';
                var3.location = var7;
                var3 = var4.bind(var5)(var3);
                var5 = new Array(1);
                var5[0] = var3;
                var4 = var5.some;
                var3 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.PasskeyUpsellOnLoginExperimentState;
                    var1 = var0.Sheet;
                    var0 = arg0;
                    var0 = var0 === var1;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun60798_ip = 202;
                    continue _fun60798
                }
            case 140:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 4;
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
            case 202:
                return var0;
        }
    };
    var1.openPasskeyUpsell = var5;
    var5 = function() {
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var3 = var1[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.pushLazy;
        var5 = _closure1_slot0;
        var2 = 7;
        var2 = var1[var2];
        var5 = var5.bind(var0)(var2);
        var2 = 6;
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
        var0 = 5;
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
        var0 = 8;
        var3 = var1[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.openLazy;
        var5 = _closure1_slot0;
        var2 = 7;
        var2 = var1[var2];
        var5 = var5.bind(var0)(var2);
        var2 = 9;
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
        var0 = 8;
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
        var0 = 5;
        var3 = var1[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var3 = _closure1_slot0;
        var2 = 7;
        var2 = var1[var2];
        var3 = var3.bind(var0)(var2);
        var2 = 10;
        var2 = var1[var2];
        var1 = var1.paths;
        var3 = var3.bind(var0)(var2, var1);
        var2 = arg0;
        var1 = 'PASSKEY_UPSELL_KEY';
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.openPasskeyUpsellPromoModal = var0;
    var0 = 11;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/native/PasskeyUpsellActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3212, 1358, 7501, 7502, 1360, 4561, 7504, 1307, 3278, 7506, 7508, 2]);