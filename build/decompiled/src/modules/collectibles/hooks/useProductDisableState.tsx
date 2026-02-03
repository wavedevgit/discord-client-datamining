// modules/collectibles/hooks/useProductDisableState.tsx
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useProductDisableState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun87617: for (var _fun87617_ip = 0;;) switch (_fun87617_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var0 = var2[var0];
                var7 = undefined;
                var6 = var1.bind(var7)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot2;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var0
                    _fun87618: for (var _fun87618_ip = 0;;) switch (_fun87618_ip) {
                        case 0:
                            var1 = _closure1_slot2;
                            var0 = var1.getPremiumSubscription;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun87618_ip = 34;
                                continue _fun87618
                            }
                        case 28:
                            var1 = var0.isPurchasedExternally;
                        case 34:
                            var0 = true;
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4, var0);
                var0 = 2;
                var0 = var2[var0];
                var0 = var1.bind(var7)(var0);
                var0 = var0.FractionalPremiumSKUs;
                var1 = var0.PREMIUM_TIER_2_3_DAY;
                var0 = arg0;
                if (!(var0 !== var1)) {
                    _fun87617_ip = 104;
                    continue _fun87617
                }
            case 88:
                var0 = {
                    'isDisabled': false,
                    'disabledReason': null
                };
                _fun87617_ip = 181;
                continue _fun87617;
            case 104:
                var1 = {};
                var1.isDisabled = var4;
                var2 = null;
                if (!var4) {
                    _fun87617_ip = 173;
                    continue _fun87617
                }
            case 116:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.NbveHD;
                var2 = var4.bind(var5)(var3);
            case 173:
                var1.disabledReason = var2;
                var0 = var1;
            case 181:
                return var0;
        }
    };
    var2.useProductDisableState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3117, 566, 1625, 1234, 2]);