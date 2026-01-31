// modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: useIsPlanEligibleForGiftingPromotion, environment: var1
        _fun74701: for (var _fun74701_ip = 0;;) switch (_fun74701_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot6;
                var1 = var1.PREMIUM_YEAR_TIER_2;
                var2 = new Array(2);
                var2[0] = var1;
                var0 = _closure1_slot6;
                var0 = var0.PREMIUM_MONTH_TIER_2;
                var2[1] = var0;
                var1 = var2.includes;
                var0 = null;
                var4 = var0 == var3;
                var0 = undefined;
                if (var4) {
                    _fun74701_ip = 59;
                    continue _fun74701
                }
            case 54:
                var0 = var3.id;
            case 59:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SubscriptionPlans;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: useFetchClaimableGiftingPromotionRewards, environment: var1
        _fun74702: for (var _fun74702_ip = 0;;) switch (_fun74702_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var5 = var0.bind(var1)();
                var2 = _closure1_slot3;
                var0 = undefined;
                var1 = 2;
                var5 = var2.bind(var0)(var5, var1);
                var1 = 0;
                var1 = var5[var1];
                var2 = 1;
                var2 = var5[var2];
                var _closure2_slot0 = var2;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var2 = var5.bind(var0)(var2);
                var5 = var2.bind(var0)();
                var2 = null;
                var6 = var2 == var5;
                var10 = undefined;
                if (var6) {
                    _fun74702_ip = 91;
                    continue _fun74702
                }
            case 85:
                var10 = var5.rewards;
            case 91:
                var _closure2_slot1 = var10;
                var6 = var2 == var5;
                var7 = undefined;
                if (var6) {
                    _fun74702_ip = 110;
                    continue _fun74702
                }
            case 104:
                var7 = var5.variants;
            case 110:
                if (!(var2 != var7)) {
                    _fun74702_ip = 139;
                    continue _fun74702
                }
            case 114:
                var6 = var7.flatMap;
                var5 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.variants;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                _closure2_slot1 = var5;
                var10 = var5;
            case 139:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 5;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.useFetchPurchases;
                var5 = var5.bind(var6)();
                var9 = var5.purchases;
                var _closure2_slot2 = var9;
                var8 = var5.hasPreviouslyFetched;
                var _closure2_slot3 = var8;
                var7 = var5.fetchPurchasesError;
                var _closure2_slot4 = var7;
                var6 = _closure1_slot4;
                var5 = var6.useRef;
                var4 = false;
                var4 = var5.bind(var6)(var4);
                var _closure2_slot5 = var4;
                var5 = var6.useEffect;
                var4 = new Array(4);
                var4[0] = var10;
                var4[1] = var9;
                var4[2] = var8;
                var4[3] = var7;
                var3 = function() { // Environment: var3
                    _fun74704: for (var _fun74704_ip = 0;;) switch (_fun74704_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun74704_ip = 92;
                                continue _fun74704
                            }
                        case 10:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            if (var1) {
                                _fun74704_ip = 92;
                                continue _fun74704
                            }
                        case 22:
                            var1 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun74704_ip = 92;
                                continue _fun74704
                            }
                        case 32:
                            var1 = _closure2_slot4;
                            if (!(var2 != var1)) {
                                _fun74704_ip = 46;
                                continue _fun74704
                            }
                        case 40:
                            var3 = new Array(0);
                            _fun74704_ip = 69;
                            continue _fun74704;
                        case 46:
                            var4 = _closure2_slot1;
                            var2 = var4.filter;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure2_slot2;
                                var1 = var2.get;
                                var0 = arg0;
                                var0 = var0.skuId;
                                var1 = var1.bind(var2)(var0);
                                var0 = null;
                                var0 = var0 == var1;
                                return var0;
                            };
                            var3 = var2.bind(var4)(var1);
                        case 69:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var1 = _closure2_slot5;
                            var0 = true;
                            var1.current = var0;
                        case 92:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun74702_ip = 269;
                    continue _fun74702
                }
            case 266:
                var0 = var1;
            case 269:
                return var0;
        }
    };
    var2.useFetchClaimableGiftingPromotionRewards = var4;
    var4 = function() { // Original name: useFetchClaimableGiftingPromotionRewardSkuIds, environment: var1
        var4 = _closure1_slot4;
        var0 = var4.useState;
        var6 = var0.bind(var4)();
        var3 = _closure1_slot3;
        var5 = undefined;
        var0 = 2;
        var6 = var3.bind(var5)(var6, var0);
        var0 = 0;
        var0 = var6[var0];
        var3 = 1;
        var3 = var6[var3];
        var _closure2_slot0 = var3;
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var7 = 6;
        var7 = var6[var7];
        var9 = var3.bind(var5)(var7);
        var8 = var9.useStateFromStores;
        var2 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var2;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getGiftPromotionRewardSkuIds;
            var0 = var0.bind(var1)();
            return var0;
        };
        var8 = var8.bind(var9)(var7, var2);
        var _closure2_slot1 = var8;
        var2 = 5;
        var2 = var6[var2];
        var3 = var3.bind(var5)(var2);
        var2 = var3.useFetchPurchases;
        var2 = var2.bind(var3)();
        var7 = var2.purchases;
        var _closure2_slot2 = var7;
        var6 = var2.hasPreviouslyFetched;
        var _closure2_slot3 = var6;
        var5 = var2.fetchPurchasesError;
        var _closure2_slot4 = var5;
        var3 = var4.useRef;
        var2 = false;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot5 = var2;
        var3 = var4.useEffect;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() { // Environment: var1
            _fun74708: for (var _fun74708_ip = 0;;) switch (_fun74708_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    if (!var1) {
                        _fun74708_ip = 99;
                        continue _fun74708
                    }
                case 10:
                    var1 = _closure2_slot5;
                    var1 = var1.current;
                    if (var1) {
                        _fun74708_ip = 99;
                        continue _fun74708
                    }
                case 22:
                    var1 = _closure2_slot1;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var2 > var1)) {
                        _fun74708_ip = 99;
                        continue _fun74708
                    }
                case 37:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun74708_ip = 53;
                        continue _fun74708
                    }
                case 47:
                    var3 = new Array(0);
                    _fun74708_ip = 76;
                    continue _fun74708;
                case 53:
                    var4 = _closure2_slot1;
                    var2 = var4.filter;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot2;
                        var1 = var2.get;
                        var0 = arg0;
                        var1 = var1.bind(var2)(var0);
                        var0 = null;
                        var0 = var0 == var1;
                        return var0;
                    };
                    var3 = var2.bind(var4)(var1);
                case 76:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var1 = _closure2_slot5;
                    var0 = true;
                    var1.current = var0;
                case 99:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useFetchClaimableGiftingPromotionRewardSkuIds = var4;
    var4 = function() { // Original name: useClaimableGiftingPromotionVariantsRewards, environment: var1
        _fun74710: for (var _fun74710_ip = 0;;) switch (_fun74710_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.bind(var0)();
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun74710_ip = 46;
                    continue _fun74710
                }
            case 40:
                var1 = var3.variants;
            case 46:
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun74710_ip = 58;
                    continue _fun74710
                }
            case 55:
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var2.useClaimableGiftingPromotionVariantsRewards = var4;
    var4 = function() { // Original name: useAllGiftingPromotionRewards, environment: var1
        _fun74711: for (var _fun74711_ip = 0;;) switch (_fun74711_ip) {
            case 0:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var2 = var0.bind(var4)();
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun74711_ip = 46;
                    continue _fun74711
                }
            case 40:
                var0 = var2.rewards;
            case 46:
                var3 = var1 == var2;
                var4 = undefined;
                if (var3) {
                    _fun74711_ip = 61;
                    continue _fun74711
                }
            case 55:
                var4 = var2.variants;
            case 61:
                if (!(var1 != var4)) {
                    _fun74711_ip = 85;
                    continue _fun74711
                }
            case 65:
                var3 = var4.flatMap;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.variants;
                    return var0;
                };
                var0 = var3.bind(var4)(var2);
            case 85:
                if (!(var1 == var0)) {
                    _fun74711_ip = 93;
                    continue _fun74711
                }
            case 89:
                var0 = new Array(0);
            case 93:
                return var0;
        }
    };
    var2.useAllGiftingPromotionRewards = var4;
    var4 = function(arg0) { // Original name: getRewardAssetIdMap, environment: var1
        var3 = arg0;
        var0 = global;
        var0 = var0.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var5 = var2;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var2;
        var _closure2_slot0 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var3 = _closure2_slot0;
            var2 = var3.set;
            var1 = var0.skuId;
            var0 = var0.assetId;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.getRewardAssetIdMap = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: useShouldShowSelectFreeSkuStep, environment: var1
        _fun74715: for (var _fun74715_ip = 0;;) switch (_fun74715_ip) {
            case 0:
                var0 = arg1;
                var3 = arg2;
                var4 = _closure1_slot7;
                var2 = undefined;
                var1 = arg0;
                var2 = var4.bind(var2)(var1);
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun74715_ip = 44;
                    continue _fun74715
                }
            case 32:
                var4 = var3.length;
                var3 = 1;
                var1 = var4 >= var3;
            case 44:
                if (!var0) {
                    _fun74715_ip = 50;
                    continue _fun74715
                }
            case 47:
                var0 = var2;
            case 50:
                if (!var0) {
                    _fun74715_ip = 56;
                    continue _fun74715
                }
            case 53:
                var0 = var1;
            case 56:
                return var0;
        }
    };
    var2.useShouldShowSelectFreeSkuStep = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: useShouldAutoSelectGiftingPromotionReward, environment: var1
        _fun74716: for (var _fun74716_ip = 0;;) switch (_fun74716_ip) {
            case 0:
                var1 = arg1;
                var3 = arg2;
                var4 = _closure1_slot7;
                var2 = undefined;
                var0 = arg0;
                var2 = var4.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun74716_ip = 44;
                    continue _fun74716
                }
            case 32:
                var4 = var3.length;
                var3 = 1;
                var0 = var3 === var4;
            case 44:
                if (!var0) {
                    _fun74716_ip = 50;
                    continue _fun74716
                }
            case 47:
                var0 = var2;
            case 50:
                if (!var0) {
                    _fun74716_ip = 56;
                    continue _fun74716
                }
            case 53:
                var0 = var1;
            case 56:
                return var0;
        }
    };
    var2.useShouldAutoSelectGiftingPromotionReward = var4;
    var2.useIsPlanEligibleForGiftingPromotion = var3;
    var3 = function(arg0, arg1) { // Original name: createGradientStyle, environment: var1
        _fun74717: for (var _fun74717_ip = 0;;) switch (_fun74717_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var5 = null;
                if (!(var5 == var6)) {
                    _fun74717_ip = 18;
                    continue _fun74717
                }
            case 14:
                var0 = undefined;
                return var0;
            case 18:
                if (!(var5 == var1)) {
                    _fun74717_ip = 24;
                    continue _fun74717
                }
            case 22:
                var1 = {};
            case 24:
                var3 = var1.reverse;
                var4 = undefined;
                var0 = var4 !== var3;
                if (!var0) {
                    _fun74717_ip = 42;
                    continue _fun74717
                }
            case 39:
                var0 = var3;
            case 42:
                var3 = var1.colorStops;
                var _closure2_slot0 = var3;
                var1 = var1.defaultAngle;
                var9 = 78.98;
                if (!(var4 !== var1)) {
                    _fun74717_ip = 77;
                    continue _fun74717
                }
            case 74:
                var9 = var1;
            case 77:
                var1 = global;
                var7 = var1.Array;
                var4 = var7.isArray;
                var7 = var4.bind(var7)(var6);
                var4 = var6;
                if (var7) {
                    _fun74717_ip = 107;
                    continue _fun74717
                }
            case 101:
                var4 = var6.gradient;
            case 107:
                var8 = var1.Array;
                var7 = var8.isArray;
                var8 = var7.bind(var8)(var6);
                var7 = var9;
                if (var8) {
                    _fun74717_ip = 148;
                    continue _fun74717
                }
            case 129:
                var8 = var6.angle;
                var7 = var9;
                if (!(var5 != var8)) {
                    _fun74717_ip = 148;
                    continue _fun74717
                }
            case 142:
                var7 = var6.angle;
            case 148:
                var6 = var7;
                if (!var0) {
                    _fun74717_ip = 171;
                    continue _fun74717
                }
            case 154:
                var0 = 180;
                var7 = var7 + var0;
                var0 = 360;
                var6 = var7 % var0;
            case 171:
                var0 = {};
                if (!(var5 == var3)) {
                    _fun74717_ip = 195;
                    continue _fun74717
                }
            case 177:
                var5 = var4.join;
                var3 = ', ';
                var5 = var5.bind(var4)(var3);
                _fun74717_ip = 228;
                continue _fun74717;
            case 195:
                var3 = var4.map;
                var2 = function(arg0, arg1) { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = arg1;
                    var7 = var1[var0];
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var10 = '';
                    var9 = arg0;
                    var8 = ' ';
                    var6 = '%';
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.join;
                var2 = ', ';
                var5 = var3.bind(var4)(var2);
            case 228:
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var14 = 'linear-gradient(';
                var12 = 'deg, ';
                var10 = ')';
                var13 = var6;
                var11 = var5;
                var1 = var14[var4](var13, var12, var11, var10, var9);
                var0.background = var1;
                return var0;
        }
    };
    var2.createGradientStyle = var3;
    var3 = function(arg0) { // Original name: createBackgroundStyle, environment: var1
        _fun74719: for (var _fun74719_ip = 0;;) switch (_fun74719_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun74719_ip = 13;
                    continue _fun74719
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = {
                    'backgroundImage': null,
                    'backgroundSize': 'cover',
                    'backgroundPosition': 'center',
                    'backgroundRepeat': 'no-repeat'
                };
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'url(';
                var1 = ')';
                var1 = var3.bind(var2)(var4, var1);
                var0.backgroundImage = var1;
                return var0;
        }
    };
    var2.createBackgroundStyle = var3;
    var1 = function(arg0, arg1) { // Original name: combinePromotionStyles, environment: var1
        _fun74720: for (var _fun74720_ip = 0;;) switch (_fun74720_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun74720_ip = 16;
                    continue _fun74720
                }
            case 12:
                if (!(var2 == var1)) {
                    _fun74720_ip = 37;
                    continue _fun74720
                }
            case 16:
                var3 = var0;
                if (!(var2 == var3)) {
                    _fun74720_ip = 35;
                    continue _fun74720
                }
            case 23:
                var4 = var1;
                if (!(var2 == var4)) {
                    _fun74720_ip = 32;
                    continue _fun74720
                }
            case 30:
                var4 = {};
            case 32:
                var3 = var4;
            case 35:
                return var3;
            case 37:
                var6 = var1.background;
                var5 = var0.backgroundImage;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = '';
                var1 = ', ';
                var1 = var4.bind(var3)(var5, var1, var6);
                var0.backgroundImage = var1;
                var1 = 'lightgray';
                var0.backgroundColor = var1;
                var1 = 'no-repeat, no-repeat';
                var0.backgroundRepeat = var1;
                var1 = var0.backgroundSize;
                if (!(var2 == var1)) {
                    _fun74720_ip = 129;
                    continue _fun74720
                }
            case 117:
                var1 = 'auto 110%, auto';
                var0.backgroundSize = var1;
            case 129:
                var1 = var0.backgroundPosition;
                if (!(var2 == var1)) {
                    _fun74720_ip = 151;
                    continue _fun74720
                }
            case 139:
                var1 = 'right 90% center, 0% 0%';
                var0.backgroundPosition = var1;
            case 151:
                return var0;
        }
    };
    var2.combinePromotionStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 7036, 1615, 9374, 5689, 566, 2]);