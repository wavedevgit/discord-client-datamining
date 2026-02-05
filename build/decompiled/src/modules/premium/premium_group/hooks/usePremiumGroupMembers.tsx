// modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx
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
    var3 = 'modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59457: for (var _fun59457_ip = 0;;) switch (_fun59457_ip) {
            case 0:
                var8 = arg0;
                var1 = arguments[1];
                var _closure2_slot0 = var8;
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun59457_ip = 20;
                    continue _fun59457
                }
            case 18:
                var1 = {};
            case 20:
                var7 = var1.useCachedData;
                if (!(var7 === var6)) {
                    _fun59457_ip = 32;
                    continue _fun59457
                }
            case 30:
                var7 = false;
            case 32:
                var _closure2_slot1 = var7;
                var9 = var1.fetch;
                if (!(var9 === var6)) {
                    _fun59457_ip = 48;
                    continue _fun59457
                }
            case 46:
                var9 = true;
            case 48:
                var _closure2_slot2 = var9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var5 = var2.bind(var6)(var1);
                var3 = var5.useStateFromStoresObject;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot4;
                    var1 = var2.getMembers;
                    var1 = var1.bind(var2)();
                    var0.premiumGroupMembers = var1;
                    var1 = var2.isFetchingMembers;
                    var1 = var1.bind(var2)();
                    var0.isFetchingMembers = var1;
                    var1 = var2.isUpdatingMembers;
                    var1 = var1.bind(var2)();
                    var0.isUpdatingMembers = var1;
                    return var0;
                };
                var2 = var3.bind(var5)(var2, var1);
                var3 = var2.premiumGroupMembers;
                var1 = var2.isFetchingMembers;
                var2 = var2.isUpdatingMembers;
                var5 = _closure1_slot3;
                var4 = new Array(3);
                var4[0] = var9;
                var4[1] = var8;
                var4[2] = var7;
                var0 = function() { // Environment: var0
                    _fun59459: for (var _fun59459_ip = 0;;) switch (_fun59459_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun59459_ip = 105;
                                continue _fun59459
                            }
                        case 10:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun59459_ip = 36;
                                continue _fun59459
                            }
                        case 17:
                            var2 = _closure1_slot4;
                            var1 = var2.hasFetchedMembers;
                            var0 = var1.bind(var2)();
                        case 36:
                            if (var0) {
                                _fun59459_ip = 105;
                                continue _fun59459
                            }
                        case 39:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun59459_ip = 105;
                                continue _fun59459
                            }
                        case 49:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var4 = 'PREMIUM_GROUP_MEMBERS_REQUEST';
                            var0.type = var4;
                            var3 = _closure2_slot0;
                            var0.subscriptionId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.premiumGroupMembers = var3;
                if (var1) {
                    _fun59457_ip = 166;
                    continue _fun59457
                }
            case 163:
                var1 = var2;
            case 166:
                var0.isLoading = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7302, 566, 806, 2]);