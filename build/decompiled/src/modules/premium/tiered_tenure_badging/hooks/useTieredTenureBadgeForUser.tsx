// modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useTieredTenureBadgeForUser, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun59360: for (var _fun59360_ip = 0;;) switch (_fun59360_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var5 = null;
                    var2 = var5 != var2;
                    var3 = null;
                    if (!var2) {
                        _fun59360_ip = 42;
                        continue _fun59360
                    }
                case 20:
                    var4 = _closure1_slot2;
                    var2 = var4.getUserProfile;
                    var0 = _closure2_slot0;
                    var3 = var2.bind(var4)(var0);
                case 42:
                    var0 = var5 == var3;
                    var2 = undefined;
                    if (var0) {
                        _fun59360_ip = 57;
                        continue _fun59360
                    }
                case 51:
                    var2 = var3.premiumSince;
                case 57:
                    var6 = var5 == var3;
                    var0 = null;
                    if (var6) {
                        _fun59360_ip = 119;
                        continue _fun59360
                    }
                case 66:
                    var2 = var5 == var2;
                    var0 = null;
                    if (var2) {
                        _fun59360_ip = 119;
                        continue _fun59360
                    }
                case 75:
                    var2 = var5 == var3;
                    var4 = undefined;
                    if (var2) {
                        _fun59360_ip = 97;
                        continue _fun59360
                    }
                case 84:
                    var3 = var3.badges;
                    var2 = var5 == var3;
                    var4 = var3;
                case 97:
                    if (var2) {
                        _fun59360_ip = 115;
                        continue _fun59360
                    }
                case 100:
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var1
                        _fun59361: for (var _fun59361_ip = 0;;) switch (_fun59361_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.getTieredTenureBadge;
                                var1 = arg0;
                                var1 = var1.id;
                                var2 = var2.bind(var3)(var1);
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun59361_ip = 57;
                                    continue _fun59361
                                }
                            case 50:
                                var _closure3_slot0 = var2;
                            case 57:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                case 115:
                    var0 = _closure3_slot0;
                case 119:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useTieredTenureBadgeForUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4616, 566, 7282, 2]);