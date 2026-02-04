// modules/collectibles/hooks/useBadBundleFilter.tsx
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
    var3 = var3.useCallback;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useBadBundleFilter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun88566: for (var _fun88566_ip = 0;;) switch (_fun88566_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var2 = var3[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var5.bind(var6)(var4, var2);
                var2 = null;
                var4 = var2 != var6;
                if (!var4) {
                    _fun88566_ip = 97;
                    continue _fun88566
                }
            case 66:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.canUseCollectibles;
                var4 = var2.bind(var5)(var6);
            case 97:
                var _closure2_slot0 = var4;
                var2 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function(arg0) { // Environment: var0
                    _fun88568: for (var _fun88568_ip = 0;;) switch (_fun88568_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = null;
                            var0 = var3;
                            if (!(var1 != var3)) {
                                _fun88568_ip = 45;
                                continue _fun88568
                            }
                        case 12:
                            var2 = var3.length;
                            var1 = 0;
                            var0 = var3;
                            if (!(var1 !== var2)) {
                                _fun88568_ip = 45;
                                continue _fun88568
                            }
                        case 26:
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                _fun88569: for (var _fun88569_ip = 0;;) switch (_fun88569_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var6 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var1 = 5;
                                        var1 = var4[var1];
                                        var2 = undefined;
                                        var8 = var6.bind(var2)(var1);
                                        var5 = var8.getProductPurchaseState;
                                        var1 = _closure1_slot5;
                                        var1 = var5.bind(var8)(var1, var3);
                                        var1 = var1.isPurchased;
                                        var5 = 6;
                                        var4 = var4[var5];
                                        var6 = var6.bind(var2)(var4);
                                        var4 = var6.isBundleProduct;
                                        var4 = var4.bind(var6)(var3);
                                        if (!var4) {
                                            _fun88569_ip = 377;
                                            continue _fun88569
                                        }
                                    case 81:
                                        var6 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var4 = var4[var5];
                                        var6 = var6.bind(var2)(var4);
                                        var4 = var6.isFreeCollectiblesProduct;
                                        var4 = var4.bind(var6)(var3);
                                        if (var4) {
                                            _fun88569_ip = 377;
                                            continue _fun88569
                                        }
                                    case 115:
                                        if (var1) {
                                            _fun88569_ip = 377;
                                            continue _fun88569
                                        }
                                    case 121:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var1 = 7;
                                        var1 = var6[var1];
                                        var4 = var4.bind(var2)(var1);
                                        var1 = var4.isValidCollectiblesBundle;
                                        var1 = var1.bind(var4)(var3);
                                        if (var1) {
                                            _fun88569_ip = 159;
                                            continue _fun88569
                                        }
                                    case 155:
                                        var1 = false;
                                        return var1;
                                    case 159:
                                        var6 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var4 = 8;
                                        var1 = var1[var4];
                                        var6 = var6.bind(var2)(var1);
                                        var1 = var6.isOrbsExclusiveProduct;
                                        var6 = var1.bind(var6)(var3);
                                        var1 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        if (var6) {
                                            _fun88569_ip = 330;
                                            continue _fun88569
                                        }
                                    case 204:
                                        var6 = var0[var5];
                                        var9 = var1.bind(var2)(var6);
                                        var8 = var9.getDefaultPriceSetAssignmentPurchaseType;
                                        var6 = _closure2_slot0;
                                        var8 = var8.bind(var9)(var6);
                                        var _closure4_slot0 = var8;
                                        var5 = var0[var5];
                                        var6 = var1.bind(var2)(var5);
                                        var5 = var6.extractPriceByPurchaseTypes;
                                        var5 = var5.bind(var6)(var3, var8);
                                        var8 = null;
                                        if (!(var8 != var5)) {
                                            _fun88569_ip = 326;
                                            continue _fun88569
                                        }
                                    case 262:
                                        var6 = var5.amount;
                                        var10 = 0;
                                        if (!(var10 !== var6)) {
                                            _fun88569_ip = 326;
                                            continue _fun88569
                                        }
                                    case 274:
                                        var6 = var3.bundledProducts;
                                        var8 = var8 != var6;
                                        var6 = 0;
                                        if (!var8) {
                                            _fun88569_ip = 314;
                                            continue _fun88569
                                        }
                                    case 289:
                                        var9 = var3.bundledProducts;
                                        var8 = var9.reduce;
                                        var7 = function(arg0, arg1) { // Environment: var7
                                            _fun88570: for (var _fun88570_ip = 0;;) switch (_fun88570_ip) {
                                                case 0:
                                                    var2 = _closure1_slot0;
                                                    var1 = _closure1_slot2;
                                                    var0 = 6;
                                                    var1 = var1[var0];
                                                    var0 = undefined;
                                                    var4 = var2.bind(var0)(var1);
                                                    var3 = var4.extractPriceByPurchaseTypes;
                                                    var2 = _closure4_slot0;
                                                    var1 = arg1;
                                                    var2 = var3.bind(var4)(var1, var2);
                                                    var1 = null;
                                                    var3 = var1 == var2;
                                                    if (var3) {
                                                        _fun88570_ip = 62;
                                                        continue _fun88570
                                                    }
                                                case 56:
                                                    var0 = var2.amount;
                                                case 62:
                                                    var2 = var1 != var0;
                                                    var1 = 0;
                                                    if (!var2) {
                                                        _fun88570_ip = 74;
                                                        continue _fun88570
                                                    }
                                                case 71:
                                                    var1 = var0;
                                                case 74:
                                                    var0 = arg0;
                                                    var0 = var0 + var1;
                                                    return var0;
                                            }
                                        };
                                        var6 = var8.bind(var9)(var7, var10);
                                    case 314:
                                        var5 = var5.amount;
                                        var5 = var5 < var6;
                                        return var5;
                                    case 326:
                                        var5 = true;
                                        return var5;
                                    case 330:
                                        var0 = var0[var4];
                                        var2 = var1.bind(var2)(var0);
                                        var1 = var2.getProductOrbPrice;
                                        var0 = {};
                                        var0.product = var3;
                                        var3 = _closure2_slot0;
                                        var0.isPremiumUser = var3;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = null;
                                        var0 = var0 != var1;
                                        return var0;
                                    case 377:
                                        var0 = true;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 45:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useBadBundleFilter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 4616, 632, 3109, 11309, 4599, 11312, 4613, 2]);