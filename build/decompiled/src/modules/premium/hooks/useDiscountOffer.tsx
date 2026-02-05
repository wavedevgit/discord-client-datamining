// modules/premium/hooks/useDiscountOffer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot6 = var6;
    var3 = var3.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/useDiscountOffer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun55473: for (var _fun55473_ip = 0;;) switch (_fun55473_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 5;
                var1 = var9[var4];
                var5 = undefined;
                var10 = var7.bind(var5)(var1);
                var8 = var10.useStateFromStores;
                var1 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getUserDiscountOffer;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var8.bind(var10)(var6, var1);
                var _closure2_slot1 = var1;
                var8 = _closure1_slot3;
                var10 = var8.useState;
                var6 = 6;
                var6 = var9[var6];
                var11 = var7.bind(var5)(var6);
                var6 = var11.hasUserDiscountExpired;
                var6 = var6.bind(var11)(var1);
                var11 = var10.bind(var8)(var6);
                var10 = _closure1_slot2;
                var6 = 2;
                var11 = var10.bind(var5)(var11, var6);
                var6 = 0;
                var6 = var11[var6];
                var _closure2_slot2 = var6;
                var10 = 1;
                var10 = var11[var10];
                var _closure2_slot3 = var10;
                var4 = var9[var4];
                var9 = var7.bind(var5)(var4);
                var7 = var9.useStateFromStores;
                var4 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isPremium;
                    var3 = _closure1_slot4;
                    var0 = var3.getCurrentUser;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var7.bind(var9)(var5, var4);
                var7 = var8.useEffect;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var1;
                var0 = function() { // Environment: var0
                    _fun55476: for (var _fun55476_ip = 0;;) switch (_fun55476_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun55476_ip = 29;
                                continue _fun55476
                            }
                        case 15:
                            var1 = _closure2_slot1;
                            var1 = var1.expires_at;
                            if (!(var2 == var1)) {
                                _fun55476_ip = 33;
                                continue _fun55476
                            }
                        case 29:
                            var1 = undefined;
                            return var1;
                        case 33:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 8;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var1 = var1.Timeout;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var5 = var3;
                            var1 = new var5[var1](var4);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var _closure3_slot0 = var1;
                            var1 = function() {
                                _fun55477: for (var _fun55477_ip = 0;;) switch (_fun55477_ip) {
                                    case 0:
                                        var0 = _closure2_slot1;
                                        var0 = var0.expires_at;
                                        var2 = null;
                                        var0 = var2 != var0;
                                        var3 = 0;
                                        if (!var0) {
                                            _fun55477_ip = 72;
                                            continue _fun55477
                                        }
                                    case 24:
                                        var0 = global;
                                        var5 = var0.Date;
                                        var4 = var5.parse;
                                        var1 = _closure2_slot1;
                                        var1 = var1.expires_at;
                                        var1 = var4.bind(var5)(var1);
                                        var4 = var0.Date;
                                        var0 = var4.now;
                                        var0 = var0.bind(var4)();
                                        var3 = var1 - var0;
                                    case 72:
                                        var1 = _closure3_slot0;
                                        if (!(var2 != var1)) {
                                            _fun55477_ip = 105;
                                            continue _fun55477
                                        }
                                    case 83:
                                        var2 = _closure3_slot0;
                                        var1 = var2.start;
                                        var0 = function() { // Environment: var0
                                            _fun55478: for (var _fun55478_ip = 0;;) switch (_fun55478_ip) {
                                                case 0:
                                                    var1 = _closure2_slot2;
                                                    if (var1) {
                                                        _fun55478_ip = 66;
                                                        continue _fun55478
                                                    }
                                                case 10:
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot1;
                                                    var1 = 6;
                                                    var1 = var2[var1];
                                                    var2 = undefined;
                                                    var4 = var3.bind(var2)(var1);
                                                    var3 = var4.hasUserDiscountExpired;
                                                    var1 = _closure2_slot1;
                                                    var1 = var3.bind(var4)(var1);
                                                    if (!var1) {
                                                        _fun55478_ip = 66;
                                                        continue _fun55478
                                                    }
                                                case 53:
                                                    var1 = _closure2_slot3;
                                                    var0 = true;
                                                    var0 = var1.bind(var2)(var0);
                                                    _fun55478_ip = 79;
                                                    continue _fun55478;
                                                case 66:
                                                    var1 = _closure3_slot1;
                                                    var0 = undefined;
                                                    var0 = var1.bind(var0)();
                                                case 79:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 105:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var1;
                            var1 = var1.bind(var2)();
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = var1.stop;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var0, var4);
                var0 = null;
                if (var6) {
                    _fun55473_ip = 237;
                    continue _fun55473
                }
            case 207:
                if (!var5) {
                    _fun55473_ip = 234;
                    continue _fun55473
                }
            case 210:
                var5 = arg1;
                if (var5) {
                    _fun55473_ip = 234;
                    continue _fun55473
                }
            case 216:
                var5 = _closure1_slot6;
                if (!(var3 !== var5)) {
                    _fun55473_ip = 234;
                    continue _fun55473
                }
            case 224:
                var2 = _closure1_slot7;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun55473_ip = 237;
                    continue _fun55473
                }
            case 234:
                var0 = var1;
            case 237:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1621, 6664, 1623, 566, 6678, 3109, 3630, 2]);