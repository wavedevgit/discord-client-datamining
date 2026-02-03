// modules/premium/useIsPremiumSubscriber.tsx
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/useIsPremiumSubscriber.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun59671: for (var _fun59671_ip = 0;;) switch (_fun59671_ip) {
            case 0:
                var1 = arguments[0];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun59671_ip = 24;
                    continue _fun59671
                }
            case 11:
                var2 = _closure1_slot3;
                var1 = var2.TIER_2;
            case 24:
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useStateFromStores;
                var4 = _closure1_slot2;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isPremiumExactly;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useIsPremiumSubscriber = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 1615, 566, 1628, 2]);