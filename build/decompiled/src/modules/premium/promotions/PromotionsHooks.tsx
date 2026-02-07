// modules/premium/promotions/PromotionsHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun58658: for (var _fun58658_ip = 0;;) switch (_fun58658_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun58658_ip = 46;
                    continue _fun58658
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun58658_ip = 55;
                    continue _fun58658
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun58658_ip = 343;
                    continue _fun58658
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun58658_ip = 323;
                    continue _fun58658
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun58658_ip = 283;
                    continue _fun58658
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun58658_ip = 270;
                    continue _fun58658
                }
            case 110:
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
                    _fun58658_ip = 163;
                    continue _fun58658
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun58658_ip = 179;
                    continue _fun58658
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun58658_ip = 249;
                    continue _fun58658
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun58658_ip = 249;
                    continue _fun58658
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun58658_ip = 234;
                    continue _fun58658
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun58658_ip = 247;
                    continue _fun58658
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun58658_ip = 265;
                continue _fun58658;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun58658_ip = 283;
                continue _fun58658;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun58658_ip = 323;
                    continue _fun58658
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun58658_ip = 330;
                    continue _fun58658
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun58659: for (var _fun58659_ip = 0;;) switch (_fun58659_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun58659_ip = 56;
                                continue _fun58659
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
                            _fun58659_ip = 67;
                            continue _fun58659;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun58660: for (var _fun58660_ip = 0;;) switch (_fun58660_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun58660_ip = 23;
                    continue _fun58660
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun58660_ip = 33;
                    continue _fun58660
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
                    _fun58660_ip = 70;
                    continue _fun58660
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun58660_ip = 55;
                    continue _fun58660
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        var6 = arg0;
        var5 = arg1;
        var7 = arg2;
        var4 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var _closure2_slot2 = var7;
        var _closure2_slot3 = var4;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 6;
        var9 = var10[var2];
        var3 = undefined;
        var13 = var8.bind(var3)(var9);
        var12 = var13.useStateFromStoresArray;
        var9 = _closure1_slot7;
        var11 = new Array(1);
        var11[0] = var9;
        var9 = function() { // Environment: var0
            var0 = _closure1_slot7;
            var0 = var0.outboundPromotions;
            return var0;
        };
        var9 = var12.bind(var13)(var11, var9);
        var _closure2_slot4 = var9;
        var2 = var10[var2];
        var10 = var8.bind(var3)(var2);
        var8 = var10.useStateFromStores;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot7;
            var0 = var0.consumedInboundPromotionId;
            return var0;
        };
        var8 = var8.bind(var10)(var3, var2);
        var _closure2_slot5 = var8;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(6);
        var1[0] = var9;
        var1[1] = var8;
        var1[2] = var7;
        var1[3] = var6;
        var1[4] = var5;
        var1[5] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot4;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun58665: for (var _fun58665_ip = 0;;) switch (_fun58665_ip) {
                    case 0:
                        var7 = arg0;
                        var1 = var7.id;
                        var0 = _closure2_slot5;
                        var0 = var1 !== var0;
                        if (!var0) {
                            _fun58665_ip = 139;
                            continue _fun58665
                        }
                    case 22:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var9 = 7;
                        var1 = var1[var9];
                        var8 = undefined;
                        var2 = var2.bind(var8)(var1);
                        var1 = var2.shouldShowOutboundPromotionOnPlatform;
                        var1 = var1.bind(var2)(var7);
                        var2 = !var1;
                        var1 = !var2;
                        if (var2) {
                            _fun58665_ip = 136;
                            continue _fun58665
                        }
                    case 67:
                        var2 = _closure2_slot2;
                        var2 = !var2;
                        if (!var2) {
                            _fun58665_ip = 133;
                            continue _fun58665
                        }
                    case 77:
                        var3 = _closure2_slot0;
                        var3 = !var3;
                        if (!var3) {
                            _fun58665_ip = 94;
                            continue _fun58665
                        }
                    case 87:
                        var6 = _closure2_slot1;
                        var3 = !var6;
                    case 94:
                        if (var3) {
                            _fun58665_ip = 130;
                            continue _fun58665
                        }
                    case 97:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var9];
                        var6 = var6.bind(var8)(var5);
                        var5 = var6.isTrialUserEligibleToSeeOutboundPromotion;
                        var4 = _closure2_slot3;
                        var3 = var5.bind(var6)(var7, var4);
                    case 130:
                        var2 = var3;
                    case 133:
                        var1 = var2;
                    case 136:
                        var0 = var1;
                    case 139:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/promotions/PromotionsHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun58666: for (var _fun58666_ip = 0;;) switch (_fun58666_ip) {
            case 0:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 6;
                var2 = var13[var1];
                var11 = undefined;
                var6 = var12.bind(var11)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var3
                    var0 = _closure1_slot7;
                    var0 = var0.lastFetchedActivePromotions;
                    return var0;
                };
                var10 = var5.bind(var6)(var4, var2);
                var _closure2_slot0 = var10;
                var2 = var13[var1];
                var6 = var12.bind(var11)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var3
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var5.bind(var6)(var4, var2);
                var2 = 8;
                var2 = var13[var2];
                var4 = var12.bind(var11)(var2);
                var2 = var4.useHasActiveTrial;
                var5 = var2.bind(var4)();
                var1 = var13[var1];
                var6 = var12.bind(var11)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var3
                    var1 = _closure1_slot6;
                    var0 = var1.hasAnyUnexpiredOffer;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var4.bind(var6)(var2, var1);
                var1 = 9;
                var1 = var13[var1];
                var2 = var12.bind(var11)(var1);
                var1 = var2.useIsInReverseTrial;
                var8 = var1.bind(var2)();
                var _closure2_slot1 = var8;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var15 = false;
                var1 = var1.bind(var2)(var15);
                var14 = _closure1_slot3;
                var9 = 2;
                var1 = var14.bind(var11)(var1, var9);
                var7 = 0;
                var6 = var1[var7];
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot2 = var1;
                var18 = _closure1_slot4;
                var17 = var18.useState;
                var1 = new Array(0);
                var1 = var17.bind(var18)(var1);
                var1 = var14.bind(var11)(var1, var9);
                var9 = var1[var7];
                var1 = var1[var2];
                var _closure2_slot3 = var1;
                var14 = _closure1_slot4;
                var7 = var14.useEffect;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var8;
                var1 = function() { // Environment: var3
                    _fun58670: for (var _fun58670_ip = 0;;) switch (_fun58670_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (var0) {
                                _fun58670_ip = 20;
                                continue _fun58670
                            }
                        case 16:
                            var0 = _closure2_slot1;
                        case 20:
                            if (!var0) {
                                _fun58670_ip = 66;
                                continue _fun58670
                            }
                        case 23:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.markOutboundPromotionsSeen;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var7.bind(var14)(var1, var2);
                var14 = _closure1_slot4;
                var7 = var14.useCallback;
                var2 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun58673: for (var _fun58673_ip = 0;;) switch (_fun58673_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3.some;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var0 = var0.promotion;
                                    var1 = var0.id;
                                    var0 = _closure3_slot0;
                                    var0 = var0.promotion;
                                    var0 = var0.id;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1 = var1.bind(var3)(var0);
                                var0 = var3;
                                if (var1) {
                                    _fun58673_ip = 65;
                                    continue _fun58673
                                }
                            case 27:
                                var1 = new Array(1);
                                var4 = 0;
                                var6 = var1;
                                var5 = var3;
                                var3 = arraySpread(var6, var5, var4);
                                var2 = _closure3_slot0;
                                var1[var3] = var2;
                                var2 = 1;
                                var2 = var3 + var2;
                                var0 = var1;
                            case 65:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var7.bind(var14)(var2, var1);
                var7 = _closure1_slot1;
                var2 = 12;
                var2 = var13[var2];
                var14 = var7.bind(var11)(var2);
                var7 = var14.isPremiumExactly;
                var2 = _closure1_slot8;
                var2 = var2.TIER_2;
                var2 = var7.bind(var14)(var16, var2);
                var7 = 13;
                var7 = var13[var7];
                var7 = var12.bind(var11)(var7);
                var14 = var7.OutboundPromoDesktopUpsellExperiment;
                var13 = var14.useExperiment;
                var12 = {};
                var7 = 'useOutboundPromotions';
                var12.location = var7;
                var7 = {};
                var7.autoTrackExposure = var15;
                var7.disable = var2;
                var7 = var13.bind(var14)(var12, var7);
                var7 = var7.enabled;
                if (var7) {
                    _fun58666_ip = 420;
                    continue _fun58666
                }
            case 417:
                var7 = var2;
            case 420:
                var _closure2_slot4 = var7;
                var14 = _closure1_slot4;
                var13 = var14.useEffect;
                var12 = new Array(3);
                var12[0] = var10;
                var12[1] = var7;
                var12[2] = var8;
                var2 = function() { // Environment: var3
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        _fun58676: for (var _fun58676_ip = 0;;) switch (_fun58676_ip) {
                            case 0:
                                var0 = _closure2_slot4;
                                if (!var0) {
                                    _fun58676_ip = 30;
                                    continue _fun58676
                                }
                            case 10:
                                var3 = _closure2_slot0;
                                var1 = null;
                                var1 = var1 == var3;
                                if (var1) {
                                    _fun58676_ip = 27;
                                    continue _fun58676
                                }
                            case 23:
                                var1 = _closure2_slot1;
                            case 27:
                                var0 = var1;
                            case 30:
                                if (!var0) {
                                    _fun58676_ip = 68;
                                    continue _fun58676
                                }
                            case 33:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.fetchActivePromotions;
                                var0 = var0.bind(var1)();
                            case 68:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var13.bind(var14)(var2, var12);
                var14 = _closure1_slot4;
                var13 = var14.useEffect;
                var12 = function() { // Environment: var3
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 7;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.fetchClaimedOutboundPromotionCodes;
                        var4 = var2.bind(var3)();
                        var3 = var4.then;
                        var2 = function(arg0) { // Environment: var1
                            var3 = _closure2_slot3;
                            var0 = undefined;
                            var2 = arg0;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot2;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.catch;
                        var1 = function() { // Environment: var1
                            var3 = _closure2_slot3;
                            var0 = undefined;
                            var2 = new Array(0);
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot2;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var13.bind(var14)(var12, var2);
                var2 = {};
                var12 = _closure1_slot9;
                var14 = var12.bind(var11)(var9);
                var13 = var14.bind(var11)();
                var12 = var13.done;
                if (var12) {
                    _fun58666_ip = 547;
                    continue _fun58666
                }
            case 507:
                var12 = var13.value;
                var15 = var12.code;
                var12 = var12.promotion;
                var12 = var12.id;
                var2[var12] = var15;
                var15 = var14.bind(var11)();
                var12 = var15.done;
                var13 = var15;
                if (!var12) {
                    _fun58666_ip = 507;
                    continue _fun58666
                }
            case 547:
                var0 = _closure1_slot11;
                var23 = undefined;
                var22 = var5;
                var21 = var4;
                var20 = var8;
                var19 = var2;
                var4 = var23[var0](var22, var21, var20, var19, var18);
                var0 = global;
                var11 = var0.Set;
                var5 = var4.map;
                var0 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var22 = var5.bind(var4)(var0);
                var5 = var11.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var11
                    }
                });
                var23 = var5;
                var0 = new var23[var11](var22, var21);
                var0 = var0 instanceof Object ? var0 : var5;
                var _closure2_slot5 = var0;
                var5 = var9.filter;
                var0 = function(arg0) { // Environment: var3
                    _fun58682: for (var _fun58682_ip = 0;;) switch (_fun58682_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.promotion;
                            var2 = _closure2_slot5;
                            var1 = var2.has;
                            var0 = var4.id;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            if (!var0) {
                                _fun58682_ip = 103;
                                continue _fun58682
                            }
                        case 37:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isRecurringPromotion;
                            var1 = {};
                            var5 = var4.outboundTitle;
                            var1.promotionPartner = var5;
                            var4 = var4.promotionType;
                            var1.promotionType = var4;
                            var2 = var2.bind(var3)(var1);
                            var1 = false;
                            var0 = var1 === var2;
                        case 103:
                            return var0;
                    }
                };
                var5 = var5.bind(var9)(var0);
                var0 = {};
                if (!var6) {
                    _fun58666_ip = 657;
                    continue _fun58666
                }
            case 636:
                var7 = !var7;
                if (var7) {
                    _fun58666_ip = 648;
                    continue _fun58666
                }
            case 642:
                var9 = null;
                var7 = var9 != var10;
            case 648:
                if (var7) {
                    _fun58666_ip = 654;
                    continue _fun58666
                }
            case 651:
                var7 = var8;
            case 654:
                var6 = var7;
            case 657:
                var0.promotionsLoaded = var6;
                var0.activeOutboundPromotions = var4;
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.shouldShowOutboundPromotionOnPlatform;
                    var0 = arg0;
                    var0 = var0.promotion;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var0.claimedEndedOutboundPromotions = var3;
                var0.claimedOutboundPromotionCodeMap = var2;
                var0.addClaimedOutboundPromotionCode = var1;
                return var0;
        }
    };
    var2.useOutboundPromotions = var3;
    var3 = function() {
        var4 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 6;
        var1 = var9[var3];
        var8 = undefined;
        var7 = var4.bind(var8)(var1);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot7;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot7;
            var0 = var0.lastSeenOutboundPromotionStartDate;
            return var0;
        };
        var1 = var6.bind(var7)(var5, var1);
        var _closure2_slot0 = var1;
        var7 = _closure1_slot11;
        var5 = 8;
        var5 = var9[var5];
        var6 = var4.bind(var8)(var5);
        var5 = var6.useHasActiveTrial;
        var6 = var5.bind(var6)();
        var3 = var9[var3];
        var11 = var4.bind(var8)(var3);
        var10 = var11.useStateFromStores;
        var3 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.hasAnyUnexpiredOffer;
            var0 = var0.bind(var1)();
            return var0;
        };
        var14 = var10.bind(var11)(var5, var3);
        var3 = 9;
        var3 = var9[var3];
        var4 = var4.bind(var8)(var3);
        var3 = var4.useIsInReverseTrial;
        var13 = var3.bind(var4)();
        var12 = {};
        var16 = undefined;
        var15 = var6;
        var5 = var16[var7](var15, var14, var13, var12, var11);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            _fun58687: for (var _fun58687_ip = 0;;) switch (_fun58687_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun58687_ip = 36;
                        continue _fun58687
                    }
                case 13:
                    var3 = _closure2_slot1;
                    var2 = var3.filter;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var4 = var0.startDate;
                        var0 = global;
                        var1 = var0.Date;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var5 = var2;
                        var1 = new var5[var1](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var3 = var0.Date;
                        var4 = _closure2_slot0;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var5 = var2;
                        var0 = new var5[var3](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    _fun58687_ip = 40;
                    continue _fun58687;
                case 36:
                    var0 = _closure2_slot1;
                case 40:
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var1, var2);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.shouldShowOutboundPromotionOnPlatform;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useUnseenOutboundPromotions = var3;
    var1 = function() {
        var0 = {};
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var1
            var0 = _closure1_slot7;
            var0 = var0.bogoPromotion;
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        var0.promotion = var1;
        return var0;
    };
    var2.useBogoPromotion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1621, 6711, 7146, 1623, 566, 7164, 6721, 6727, 806, 7166, 3111, 7168, 2]);