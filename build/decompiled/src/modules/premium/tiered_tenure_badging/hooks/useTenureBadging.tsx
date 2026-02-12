// modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var11;
    var7 = function() {
        _fun68330: for (var _fun68330_ip = 0;;) switch (_fun68330_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var2.bind(var1)(var4);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var5.bind(var6)(var4, var0);
                var0 = 5;
                var0 = var3[var0];
                var3 = var2.bind(var1)(var0);
                var2 = var3.useTieredTenureBadgeForUser;
                var0 = null;
                var5 = var0 == var4;
                if (var5) {
                    _fun68330_ip = 89;
                    continue _fun68330
                }
            case 84:
                var1 = var4.id;
            case 89:
                var1 = var2.bind(var3)(var1);
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun68330_ip = 106;
                    continue _fun68330
                }
            case 103:
                var0 = var1;
            case 106:
                return var0;
        }
    };
    var _closure1_slot12 = var7;
    var5 = function() {
        _fun68332: for (var _fun68332_ip = 0;;) switch (_fun68332_ip) {
            case 0:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 4;
                var5 = var6[var2];
                var4 = undefined;
                var9 = var3.bind(var4)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var1
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var7 = 6;
                var7 = var6[var7];
                var9 = var3.bind(var4)(var7);
                var8 = var9.isPremiumExactly;
                var7 = _closure1_slot6;
                var7 = var7.TIER_2;
                var8 = var8.bind(var9)(var5, var7);
                var _closure2_slot0 = var8;
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    _fun68334: for (var _fun68334_ip = 0;;) switch (_fun68334_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var0 = var1.getPremiumSubscription;
                            var1 = var0.bind(var1)();
                            var3 = null;
                            var2 = var3 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun68334_ip = 46;
                                continue _fun68334
                            }
                        case 28:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!var2) {
                                _fun68334_ip = 46;
                                continue _fun68334
                            }
                        case 40:
                            var0 = var1.premiumSince;
                        case 46:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var3, var1, var2);
                var3 = _closure1_slot9;
                var2 = null;
                var6 = var2 == var5;
                var0 = undefined;
                if (var6) {
                    _fun68332_ip = 163;
                    continue _fun68332
                }
            case 158:
                var0 = var5.id;
            case 163:
                var0 = var3.bind(var4)(var0);
                if (!(var2 != var1)) {
                    _fun68332_ip = 175;
                    continue _fun68332
                }
            case 172:
                var0 = var1;
            case 175:
                return var0;
        }
    };
    var _closure1_slot13 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var11[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var11[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var11[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var11[var1];
    var1 = var10.bind(var0)(var1);
    var4 = var1.PremiumTypes;
    var _closure1_slot6 = var4;
    var1 = var1.TENURE_BADGES;
    var _closure1_slot7 = var1;
    var8 = {};
    var1 = 'upcoming';
    var8.UPCOMING = var1;
    var1 = 'earned';
    var8.EARNED = var1;
    var _closure1_slot8 = var8;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun68336: for (var _fun68336_ip = 0;;) switch (_fun68336_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun68336_ip = 52;
                        continue _fun68336
                    }
                case 13:
                    var3 = _closure1_slot3;
                    var2 = var3.getUserProfile;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun68336_ip = 50;
                        continue _fun68336
                    }
                case 44:
                    var1 = var2.premiumSince;
                case 50:
                    return var1;
                case 52:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var6;
    var4 = function() {
        _fun68337: for (var _fun68337_ip = 0;;) switch (_fun68337_ip) {
            case 0:
                var0 = _closure1_slot12;
                var5 = undefined;
                var4 = var0.bind(var5)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var6 = var1.bind(var5)(var0);
                var3 = var6.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var3.bind(var6)(var1, var0);
                var6 = null;
                var3 = var6 == var4;
                var0 = null;
                if (var3) {
                    _fun68337_ip = 138;
                    continue _fun68337
                }
            case 76:
                var3 = var6 == var1;
                var0 = null;
                if (var3) {
                    _fun68337_ip = 138;
                    continue _fun68337
                }
            case 85:
                var3 = var1.premiumSince;
                var3 = var6 == var3;
                var0 = null;
                if (var3) {
                    _fun68337_ip = 138;
                    continue _fun68337
                }
            case 100:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getEarnedOnDate;
                var1 = var1.premiumSince;
                var0 = var2.bind(var3)(var4, var1);
            case 138:
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function arg0() {
        _fun68339: for (var _fun68339_ip = 0;;) switch (_fun68339_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.useTieredTenureBadgeForUser;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                var3 = var0 == var2;
                if (var3) {
                    _fun68339_ip = 56;
                    continue _fun68339
                }
            case 48:
                var1 = _closure1_slot7;
                var0 = var1[var2];
            case 56:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var9 = 9;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx';
    var9 = var10.bind(var11)(var9);
    var2.TieredTenureBadgeStatus = var8;
    var2.useTieredTenureBadge = var7;
    var2.usePremiumSinceForUser = var6;
    var2.usePremiumSince = var5;
    var5 = function() { // Environment: var3
        _fun68340: for (var _fun68340_ip = 0;;) switch (_fun68340_ip) {
            case 0:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure1_slot7;
                var3 = var2.bind(var3)(var1);
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 4;
                var2 = var7[var1];
                var5 = undefined;
                var10 = var6.bind(var5)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var9.bind(var10)(var8, var2);
                var1 = var7[var1];
                var10 = var6.bind(var5)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var9.bind(var10)(var2, var1);
                var2 = 6;
                var2 = var7[var2];
                var7 = var6.bind(var5)(var2);
                var6 = var7.isPremiumExactly;
                var2 = _closure1_slot6;
                var2 = var2.TIER_2;
                var2 = var6.bind(var7)(var8, var2);
                if (!var2) {
                    _fun68340_ip = 274;
                    continue _fun68340
                }
            case 155:
                var2 = null;
                if (!(var2 != var1)) {
                    _fun68340_ip = 274;
                    continue _fun68340
                }
            case 161:
                var6 = var1.premiumSince;
                if (!(var2 != var6)) {
                    _fun68340_ip = 274;
                    continue _fun68340
                }
            case 171:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 7;
                var6 = var8[var4];
                var6 = var7.bind(var5)(var6);
                var6 = var6.bind(var5)();
                var4 = var8[var4];
                var4 = var7.bind(var5)(var4);
                var1 = var1.premiumSince;
                var7 = var4.bind(var5)(var1);
                var5 = var7.add;
                var4 = 1;
                var1 = 'day';
                var5 = var5.bind(var7)(var4, var1);
                var4 = var6.diff;
                var1 = 'months';
                var1 = var4.bind(var6)(var5, var1);
                var _closure2_slot0 = var1;
                var1 = var3.reduce;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun68343: for (var _fun68343_ip = 0;;) switch (_fun68343_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var1 = var2.id;
                            var3 = var2.tenureReqNumMonths;
                            var2 = _closure2_slot0;
                            if (!(var2 >= var3)) {
                                _fun68343_ip = 31;
                                continue _fun68343
                            }
                        case 28:
                            var0 = var1;
                        case 31:
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0, var2);
                return var0;
            case 274:
                var0 = null;
                return var0;
        }
    };
    var2.useTieredTenureBadgesFromSubscriptionData = var5;
    var2.useTieredTenureEarnedOnDate = var4;
    var3 = function() { // Environment: var3
        _fun68344: for (var _fun68344_ip = 0;;) switch (_fun68344_ip) {
            case 0:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var7 = undefined;
                var4 = var1.bind(var7)(var0);
                var3 = var4.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var3.bind(var4)(var1, var0);
                var3 = _closure1_slot11;
                var0 = null;
                var5 = var0 == var4;
                var1 = undefined;
                if (var5) {
                    _fun68344_ip = 77;
                    continue _fun68344
                }
            case 72:
                var1 = var4.id;
            case 77:
                var3 = var3.bind(var7)(var1);
                var1 = _closure1_slot10;
                var4 = var1.bind(var7)();
                var1 = _closure1_slot13;
                var9 = var1.bind(var7)();
                var1 = global;
                var6 = var1.Object;
                var5 = var6.values;
                var1 = _closure1_slot7;
                var5 = var5.bind(var6)(var1);
                var6 = var0 == var9;
                var1 = null;
                if (var6) {
                    _fun68344_ip = 256;
                    continue _fun68344
                }
            case 132:
                var6 = var0 == var5;
                var1 = null;
                if (var6) {
                    _fun68344_ip = 256;
                    continue _fun68344
                }
            case 141:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 7;
                var6 = var10[var6];
                var6 = var8.bind(var7)(var6);
                var8 = var6.bind(var7)();
                var7 = var8.diff;
                var6 = 'days';
                var8 = var7.bind(var8)(var9, var6);
                var6 = 0;
                var7 = var5[var6];
                var9 = var7.tenureReqNumMonths;
                var5 = 30;
                var5 = var5 * var9;
                var8 = var5 - var8;
                var5 = null;
                if (!(!(var8 <= var6))) {
                    _fun68344_ip = 253;
                    continue _fun68344
                }
            case 210:
                var6 = {};
                var12 = var6;
                var11 = var7;
                var7 = copyDataProperties(var12, var11);
                var7 = 'daysLeft';
                var6[var7] = var8;
                var7 = _closure1_slot8;
                var8 = var7.UPCOMING;
                var7 = 'status';
                var6[var7] = var8;
                var5 = var6;
            case 253:
                var1 = var5;
            case 256:
                if (!(var0 == var3)) {
                    _fun68344_ip = 274;
                    continue _fun68344
                }
            case 260:
                var5 = var0 != var1;
                var0 = null;
                if (!var5) {
                    _fun68344_ip = 272;
                    continue _fun68344
                }
            case 269:
                var0 = var1;
            case 272:
                _fun68344_ip = 319;
                continue _fun68344;
            case 274:
                var1 = {};
                var12 = var1;
                var11 = var3;
                var3 = copyDataProperties(var12, var11);
                var3 = 'earnedOnDate';
                var1[var3] = var4;
                var2 = _closure1_slot8;
                var3 = var2.EARNED;
                var2 = 'status';
                var1[var2] = var3;
                var0 = var1;
            case 319:
                return var0;
        }
    };
    var2.useTieredTenureBadgeData = var3;
    var2.useTieredTenureBadgeDataForUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4667, 1621, 3119, 1623, 566, 8383, 1640, 3047, 8354, 2]);