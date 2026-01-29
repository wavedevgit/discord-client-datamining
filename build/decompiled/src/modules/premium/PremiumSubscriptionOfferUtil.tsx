// modules/premium/PremiumSubscriptionOfferUtil.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun55175: for (var _fun55175_ip = 0;;) switch (_fun55175_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55175_ip = 45;
                    continue _fun55175
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun55175_ip = 54;
                    continue _fun55175
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun55175_ip = 342;
                    continue _fun55175
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55175_ip = 322;
                    continue _fun55175
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55175_ip = 282;
                    continue _fun55175
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55175_ip = 269;
                    continue _fun55175
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun55175_ip = 162;
                    continue _fun55175
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun55175_ip = 178;
                    continue _fun55175
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55175_ip = 248;
                    continue _fun55175
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55175_ip = 248;
                    continue _fun55175
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55175_ip = 233;
                    continue _fun55175
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55175_ip = 246;
                    continue _fun55175
                }
            case 233:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun55175_ip = 264;
                continue _fun55175;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun55175_ip = 282;
                continue _fun55175;
            case 269:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun55175_ip = 322;
                    continue _fun55175
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun55175_ip = 329;
                    continue _fun55175
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55176: for (var _fun55176_ip = 0;;) switch (_fun55176_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55176_ip = 56;
                                continue _fun55176
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun55176_ip = 67;
                            continue _fun55176;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun55177: for (var _fun55177_ip = 0;;) switch (_fun55177_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55177_ip = 23;
                    continue _fun55177
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55177_ip = 33;
                    continue _fun55177
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun55177_ip = 70;
                    continue _fun55177
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55177_ip = 55;
                    continue _fun55177
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var6[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID;
    var _closure1_slot6 = var4;
    var4 = var3.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID;
    var _closure1_slot7 = var4;
    var4 = var3.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot8 = var4;
    var4 = var3.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot9 = var4;
    var4 = var3.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID;
    var _closure1_slot10 = var4;
    var4 = var3.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot11 = var4;
    var4 = var3.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID;
    var _closure1_slot12 = var4;
    var3 = var3.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID;
    var _closure1_slot13 = var3;
    var3 = function() { // Original name: useHasDiscountApplied, environment: var1
        _fun55178: for (var _fun55178_ip = 0;;) switch (_fun55178_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var5)(var2, var0);
                var0 = null;
                var5 = var0 == var2;
                var3 = undefined;
                if (var5) {
                    _fun55178_ip = 89;
                    continue _fun55178
                }
            case 66:
                var2 = var2.metadata;
                var5 = var0 == var2;
                var3 = undefined;
                if (var5) {
                    _fun55178_ip = 89;
                    continue _fun55178
                }
            case 81:
                var3 = var2.active_discount_expires_at;
            case 89:
                var0 = var0 != var3;
                if (!var0) {
                    _fun55178_ip = 156;
                    continue _fun55178
                }
            case 96:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 8;
                var2 = var6[var1];
                var7 = var5.bind(var4)(var2);
                var2 = global;
                var8 = var2.Date;
                var2 = var8.now;
                var2 = var2.bind(var8)();
                var2 = var7.bind(var4)(var2);
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)(var3);
                var0 = var2 <= var1;
            case 156:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/PremiumSubscriptionOfferUtil.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: useIsInPremiumOfferExperience, environment: var1
        _fun55180: for (var _fun55180_ip = 0;;) switch (_fun55180_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var2 = undefined;
                var3 = var5.bind(var2)(var0);
                var0 = var3.usePremiumTrialOffer;
                var0 = var0.bind(var3)();
                var3 = 5;
                var3 = var6[var3];
                var4 = var5.bind(var2)(var3);
                var3 = var4.useHasActiveTrial;
                var4 = var3.bind(var4)();
                var3 = 6;
                var3 = var6[var3];
                var5 = var5.bind(var2)(var3);
                var3 = var5.usePremiumDiscountOffer;
                var3 = var3.bind(var5)();
                var1 = _closure1_slot14;
                var1 = var1.bind(var2)();
                var2 = null;
                var0 = var2 != var0;
                if (var0) {
                    _fun55180_ip = 99;
                    continue _fun55180
                }
            case 96:
                var0 = var4;
            case 99:
                if (var0) {
                    _fun55180_ip = 106;
                    continue _fun55180
                }
            case 102:
                var0 = var2 != var3;
            case 106:
                if (var0) {
                    _fun55180_ip = 112;
                    continue _fun55180
                }
            case 109:
                var0 = var1;
            case 112:
                return var0;
        }
    };
    var2.useIsInPremiumOfferExperience = var4;
    var2.useHasDiscountApplied = var3;
    var3 = function() { // Environment: var1
        _fun55181: for (var _fun55181_ip = 0;;) switch (_fun55181_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var4.bind(var5)(var3, var1);
                var4 = null;
                var5 = var4 == var3;
                var1 = undefined;
                if (var5) {
                    _fun55181_ip = 89;
                    continue _fun55181
                }
            case 66:
                var3 = var3.metadata;
                var4 = var4 == var3;
                var1 = undefined;
                if (var4) {
                    _fun55181_ip = 89;
                    continue _fun55181
                }
            case 81:
                var1 = var3.active_discount_id;
            case 89:
                var3 = _closure1_slot8;
                if (!(var3 !== var1)) {
                    _fun55181_ip = 245;
                    continue _fun55181
                }
            case 100:
                var3 = _closure1_slot10;
                if (!(var3 !== var1)) {
                    _fun55181_ip = 245;
                    continue _fun55181
                }
            case 111:
                var3 = _closure1_slot9;
                if (!(var3 !== var1)) {
                    _fun55181_ip = 224;
                    continue _fun55181
                }
            case 119:
                var3 = _closure1_slot12;
                if (!(var3 !== var1)) {
                    _fun55181_ip = 224;
                    continue _fun55181
                }
            case 127:
                var3 = _closure1_slot13;
                if (!(var3 !== var1)) {
                    _fun55181_ip = 224;
                    continue _fun55181
                }
            case 135:
                var3 = _closure1_slot11;
                if (!(var3 !== var1)) {
                    _fun55181_ip = 203;
                    continue _fun55181
                }
            case 143:
                var3 = _closure1_slot6;
                if (!(var3 !== var1)) {
                    _fun55181_ip = 182;
                    continue _fun55181
                }
            case 151:
                var2 = _closure1_slot7;
                if (!(var2 !== var1)) {
                    _fun55181_ip = 161;
                    continue _fun55181
                }
            case 159:
                return var0;
            case 161:
                var0 = {
                    'duration': 1,
                    'percentage': 25
                };
                var0.discountId = var1;
                return var0;
            case 182:
                var0 = {
                    'duration': 1,
                    'percentage': 20
                };
                var0.discountId = var1;
                return var0;
            case 203:
                var0 = {
                    'duration': 1,
                    'percentage': 40
                };
                var0.discountId = var1;
                return var0;
            case 224:
                var0 = {
                    'duration': 3,
                    'percentage': 30
                };
                var0.discountId = var1;
                return var0;
            case 245:
                var0 = {
                    'duration': 1,
                    'percentage': 30
                };
                var0.discountId = var1;
                return var0;
        }
    };
    var2.useActiveDiscountInfo = var3;
    var3 = function(arg0) { // Environment: var1
        _fun55183: for (var _fun55183_ip = 0;;) switch (_fun55183_ip) {
            case 0:
                var12 = _closure1_slot4;
                var1 = var12.useState;
                var4 = false;
                var1 = var1.bind(var12)(var4);
                var10 = _closure1_slot3;
                var5 = undefined;
                var9 = 2;
                var1 = var10.bind(var5)(var1, var9);
                var2 = 0;
                var7 = var1[var2];
                var8 = 1;
                var1 = var1[var8];
                var _closure2_slot0 = var1;
                var1 = var12.useState;
                var1 = var1.bind(var12)(var4);
                var4 = var10.bind(var5)(var1, var9);
                var1 = var4[var2];
                var6 = var4[var8];
                var _closure2_slot1 = var6;
                var11 = var12.useState;
                var4 = null;
                var4 = var11.bind(var12)(var4);
                var4 = var10.bind(var5)(var4, var9);
                var2 = var4[var2];
                var4 = var4[var8];
                var _closure2_slot2 = var4;
                var4 = arg0;
                if (var4) {
                    _fun55183_ip = 220;
                    continue _fun55183
                }
            case 117:
                var4 = function() { // Original name: onFetchComplete, environment: var0
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot1;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure2_slot3 = var4;
                var4 = var1;
                if (var4) {
                    _fun55183_ip = 135;
                    continue _fun55183
                }
            case 132:
                var4 = var7;
            case 135:
                if (var4) {
                    _fun55183_ip = 206;
                    continue _fun55183
                }
            case 138:
                var4 = true;
                var4 = var6.bind(var5)(var4);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.fetchChurnDiscountOffer;
                var5 = var3.bind(var4)();
                var4 = var5.then;
                var3 = function(arg0) { // Environment: var0
                    var3 = _closure2_slot2;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
            case 206:
                var0 = {};
                var0.churnUserDiscountOffer = var2;
                var0.isFetchingChurnDiscountOffer = var1;
                return var0;
            case 220:
                var0 = {};
                var0.churnUserDiscountOffer = var2;
                var0.isFetchingChurnDiscountOffer = var1;
                return var0;
        }
    };
    var2.useFetchChurnUserDiscountOffer = var3;
    var3 = function() { // Environment: var1
        _fun55187: for (var _fun55187_ip = 0;;) switch (_fun55187_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot5;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var4.bind(var5)(var3, var2);
                var0 = _closure1_slot14;
                var1 = var0.bind(var1)();
                var2 = null;
                var0 = var2 !== var3;
                if (!var0) {
                    _fun55187_ip = 80;
                    continue _fun55187
                }
            case 72:
                var0 = var3.hasPremiumNitroMonthly;
            case 80:
                var2 = var2 == var3;
                if (var2) {
                    _fun55187_ip = 96;
                    continue _fun55187
                }
            case 87:
                var3 = var3.hasActiveTrial;
                var2 = !var3;
            case 96:
                if (!var0) {
                    _fun55187_ip = 105;
                    continue _fun55187
                }
            case 99:
                var2 = !var2;
                var0 = !var2;
            case 105:
                if (!var0) {
                    _fun55187_ip = 111;
                    continue _fun55187
                }
            case 108:
                var0 = !var1;
            case 111:
                return var0;
        }
    };
    var2.useShouldFetchChurnOffer = var3;
    var3 = function(arg0) { // Environment: var1
        _fun55189: for (var _fun55189_ip = 0;;) switch (_fun55189_ip) {
            case 0:
                var1 = _closure1_slot15;
                var0 = arg0;
                var0 = var0.invoiceItems;
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var0 = null;
                var3 = var2;
                if (var1) {
                    _fun55189_ip = 180;
                    continue _fun55189
                }
            case 45:
                var1 = var3.value;
                var8 = var1.discounts;
                var2 = var8.find;
                var1 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.InvoiceDiscountTypes;
                    var0 = var0.SUBSCRIPTION_PLAN;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var2.bind(var8)(var1);
                if (!(var0 != var2)) {
                    _fun55189_ip = 97;
                    continue _fun55189
                }
            case 75:
                var8 = var2.discount_id;
                var1 = _closure1_slot8;
                if (!(var1 !== var8)) {
                    _fun55189_ip = 147;
                    continue _fun55189
                }
            case 89:
                var1 = _closure1_slot9;
                if (!(var1 !== var8)) {
                    _fun55189_ip = 114;
                    continue _fun55189
                }
            case 97:
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var3 = var8;
                if (var1) {
                    _fun55189_ip = 180;
                    continue _fun55189
                }
            case 112:
                _fun55189_ip = 45;
                continue _fun55189;
            case 114:
                var1 = {};
                var3 = 3;
                var1.duration = var3;
                var3 = var2.percentage_amount;
                var1.percentage = var3;
                var3 = var2.discount_id;
                var1.discountId = var3;
                return var1;
            case 147:
                var1 = {};
                var3 = 1;
                var1.duration = var3;
                var3 = var2.percentage_amount;
                var1.percentage = var3;
                var2 = var2.discount_id;
                var1.discountId = var2;
                return var1;
            case 180:
                return var0;
        }
    };
    var2.renewalInvoiceChurnDiscountInfo = var3;
    var1 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.useIsInReverseTrial;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.useIsNUXEligible = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3076, 1615, 6611, 6612, 6613, 566, 3004, 6617, 1636, 6618, 2]);