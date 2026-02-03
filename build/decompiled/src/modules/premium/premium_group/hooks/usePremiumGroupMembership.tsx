// modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun59324: for (var _fun59324_ip = 0;;) switch (_fun59324_ip) {
            case 0:
                var1 = arguments[0];
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun59324_ip = 13;
                    continue _fun59324
                }
            case 11:
                var1 = {};
            case 13:
                var6 = var1.useCachedData;
                if (!(var6 === var5)) {
                    _fun59324_ip = 25;
                    continue _fun59324
                }
            case 23:
                var6 = false;
            case 25:
                var _closure2_slot0 = var6;
                var7 = var1.fetch;
                if (!(var7 === var5)) {
                    _fun59324_ip = 41;
                    continue _fun59324
                }
            case 39:
                var7 = true;
            case 41:
                var _closure2_slot1 = var7;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var8 = var2.bind(var5)(var1);
                var4 = var8.useStateFromStoresObject;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot4;
                    var1 = var2.getMembership;
                    var1 = var1.bind(var2)();
                    var0.premiumGroupMembership = var1;
                    var1 = var2.isFetchingMembership;
                    var1 = var1.bind(var2)();
                    var0.isFetchingMembership = var1;
                    return var0;
                };
                var1 = var4.bind(var8)(var2, var1);
                var2 = var1.premiumGroupMembership;
                var1 = var1.isFetchingMembership;
                var4 = _closure1_slot3;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var0 = function() { // Environment: var0
                    _fun59326: for (var _fun59326_ip = 0;;) switch (_fun59326_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun59326_ip = 86;
                                continue _fun59326
                            }
                        case 10:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun59326_ip = 36;
                                continue _fun59326
                            }
                        case 17:
                            var2 = _closure1_slot4;
                            var1 = var2.hasFetchedMembership;
                            var0 = var1.bind(var2)();
                        case 36:
                            if (var0) {
                                _fun59326_ip = 86;
                                continue _fun59326
                            }
                        case 39:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'PREMIUM_GROUP_MEMBERSHIP_REQUEST';
                            var0.type = var3;
                            var0 = var1.bind(var2)(var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = {};
                var0.premiumGroupMembership = var2;
                var0.isLoading = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7280, 566, 806, 2]);