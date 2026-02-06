// modules/premium/promotions/PromotionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun57922: for (var _fun57922_ip = 0;;) switch (_fun57922_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun57922_ip = 74;
                continue _fun57922;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        _fun57925: for (var _fun57925_ip = 0;;) switch (_fun57925_ip) {
            case 0:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.values;
                var4 = _closure1_slot16;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var5.bind(var1)(var0);
                var0 = var0.PromotionTypes;
                var0 = var0.THIRD_PARTY_OUTBOUND;
                var0 = var4[var0];
                var6 = var2.bind(var3)(var0);
                var0 = var6.length;
                var5 = 0;
                var2 = var5 < var0;
                var0 = null;
                var4 = null;
                var3 = null;
                if (!var2) {
                    _fun57925_ip = 128;
                    continue _fun57925
                }
            case 83:
                var2 = var6[var5];
                var7 = var0 == var4;
                if (var7) {
                    _fun57925_ip = 104;
                    continue _fun57925
                }
            case 94:
                var8 = var2.startDate;
                var7 = var8 > var4;
            case 104:
                if (!var7) {
                    _fun57925_ip = 113;
                    continue _fun57925
                }
            case 107:
                var4 = var2.startDate;
            case 113:
                var5 = var5 + 1;
                var2 = var6.length;
                var3 = var4;
                if (var5 < var2) {
                    _fun57925_ip = 83;
                    continue _fun57925
                }
            case 128:
                var2 = var0 == var3;
                var1 = undefined;
                if (var2) {
                    _fun57925_ip = 147;
                    continue _fun57925
                }
            case 137:
                var2 = var3.toISOString;
                var1 = var2.bind(var3)();
            case 147:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun57925_ip = 159;
                    continue _fun57925
                }
            case 156:
                var0 = var1;
            case 159:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        _fun57926: for (var _fun57926_ip = 0;;) switch (_fun57926_ip) {
            case 0:
                var0 = _closure1_slot7;
                var0 = var0.settings;
                var4 = var0.userContent;
                var1 = null;
                var5 = var1 == var4;
                var0 = undefined;
                var3 = undefined;
                if (var5) {
                    _fun57926_ip = 52;
                    continue _fun57926
                }
            case 32:
                var4 = var4.lastDismissedOutboundPromotionStartDate;
                var5 = var1 == var4;
                var3 = undefined;
                if (var5) {
                    _fun57926_ip = 52;
                    continue _fun57926
                }
            case 47:
                var3 = var4.value;
            case 52:
                var4 = var1 != var3;
                var1 = null;
                if (!var4) {
                    _fun57926_ip = 64;
                    continue _fun57926
                }
            case 61:
                var1 = var3;
            case 64:
                _closure1_slot18 = var1;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var8 = false;
    var7 = null;
    var9 = {
        'hasFetchedConsumedInboundPromotionId': false,
        'consumedInboundPromotionId': null,
        'lastSeenOutboundPromotionStartDate': null
    };
    var _closure1_slot10 = var9;
    var _closure1_slot11 = var7;
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var7;
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var7;
    var8 = {};
    var9 = 8;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.PromotionTypes;
    var11 = var10.BOGO;
    var10 = {};
    var8[var11] = var10;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.PromotionTypes;
    var11 = var10.MARKETING_MOMENT;
    var10 = {};
    var8[var11] = var10;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.PromotionTypes;
    var11 = var10.THIRD_PARTY_INBOUND;
    var10 = {};
    var8[var11] = var10;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.PromotionTypes;
    var11 = var10.THIRD_PARTY_OUTBOUND;
    var10 = {};
    var8[var11] = var10;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.PromotionTypes;
    var11 = var10.GIFT_PROMOTION;
    var10 = {};
    var8[var11] = var10;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.PromotionTypes;
    var10 = var9.THIRD_PARTY_OUTBOUND_RECURRING;
    var9 = {};
    var8[var10] = var9;
    var _closure1_slot16 = var8;
    var8 = {};
    var _closure1_slot17 = var8;
    var _closure1_slot18 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot19 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun57928: for (var _fun57928_ip = 0;;) switch (_fun57928_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun57928_ip = 69;
                        continue _fun57928
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun57928_ip = 105;
                    continue _fun57928;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun57929: for (var _fun57929_ip = 0;;) switch (_fun57929_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun57929_ip = 19;
                        continue _fun57929
                    }
                case 12:
                    _closure1_slot10 = var1;
                case 19:
                    var2 = var3.waitFor;
                    var1 = _closure1_slot7;
                    var1 = var2.bind(var3)(var1);
                    var2 = var3.syncWith;
                    var4 = _closure1_slot7;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot22;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var6 = 'outboundPromotions';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var3 = _closure1_slot16;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var0 = 8;
            var4 = var4[var0];
            var0 = undefined;
            var0 = var5.bind(var0)(var4);
            var0 = var0.PromotionTypes;
            var0 = var0.THIRD_PARTY_OUTBOUND;
            var0 = var3[var0];
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'outboundRecurringPromotions';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot17;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'lastSeenOutboundPromotionStartDate';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            var0 = var0.lastSeenOutboundPromotionStartDate;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'lastDismissedOutboundPromotionStartDate';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'lastFetchedActivePromotions';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isFetchingActivePromotions';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'hasFetchedConsumedInboundPromotionId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            var0 = var0.hasFetchedConsumedInboundPromotionId;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'consumedInboundPromotionId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            var0 = var0.consumedInboundPromotionId;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'bogoPromotion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isFetchingActiveBogoPromotion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'lastFetchedActiveBogoPromotion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'promotionsByType';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.get = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getPromotionByTypeAndId';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun57942: for (var _fun57942_ip = 0;;) switch (_fun57942_ip) {
                case 0:
                    var1 = _closure1_slot16;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun57942_ip = 32;
                        continue _fun57942
                    }
                case 25:
                    var1 = arg1;
                    var0 = var2[var1];
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getMarketingComponentByType';
        var4.key = var6;
        var6 = function arg0() {
            _fun57944: for (var _fun57944_ip = 0;;) switch (_fun57944_ip) {
                case 0:
                    var2 = _closure1_slot19;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun57944_ip = 32;
                        continue _fun57944
                    }
                case 29:
                    var0 = var1;
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getGiftPromotionRewardSkuIds';
        var4.key = var6;
        var5 = function() {
            _fun57945: for (var _fun57945_ip = 0;;) switch (_fun57945_ip) {
                case 0:
                    var1 = _closure1_slot16;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.PromotionTypes;
                    var0 = var0.GIFT_PROMOTION;
                    var1 = var1[var0];
                    var0 = global;
                    var2 = var0.Object;
                    var0 = var2.keys;
                    var2 = var0.bind(var2)(var1);
                    var3 = var2.length;
                    var0 = 0;
                    if (!(var0 !== var3)) {
                        _fun57945_ip = 90;
                        continue _fun57945
                    }
                case 74:
                    var0 = var2[var0];
                    var0 = var1[var0];
                    var0 = var0.rewardSkuIds;
                    _fun57945_ip = 94;
                    continue _fun57945;
                case 90:
                    var0 = new Array(0);
                case 94:
                    return var0;
            }
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'PromotionsStore';
    var7.displayName = var1;
    var1 = 'PromotionsPersistedStore';
    var7.persistKey = var1;
    var1 = new Array(1);
    var8 = function(arg0) { // Environment: var3
        _fun57946: for (var _fun57946_ip = 0;;) switch (_fun57946_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = var0;
                var1 = delete var1.bogoPromotion;
            case 11: // try_end0
                _fun57946_ip = 15;
                continue _fun57946;
            case 13: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 15:
                return var0;
        }
    };
    var1[0] = var8;
    var7.migrations = var1;
    var1 = 11;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun57947: for (var _fun57947_ip = 0;;) switch (_fun57947_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.promotions;
                var2 = var0.consumedInboundPromotionId;
                var0 = {};
                _closure1_slot17 = var0;
                var3 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 8;
                var8 = var7[var4];
                var0 = undefined;
                var8 = var5.bind(var0)(var8);
                var8 = var8.PromotionTypes;
                var9 = var8.BOGO;
                var8 = {};
                var3[var9] = var8;
                var8 = var7[var4];
                var8 = var5.bind(var0)(var8);
                var8 = var8.PromotionTypes;
                var9 = var8.MARKETING_MOMENT;
                var8 = {};
                var3[var9] = var8;
                var8 = var7[var4];
                var8 = var5.bind(var0)(var8);
                var8 = var8.PromotionTypes;
                var9 = var8.THIRD_PARTY_INBOUND;
                var8 = {};
                var3[var9] = var8;
                var8 = var7[var4];
                var8 = var5.bind(var0)(var8);
                var8 = var8.PromotionTypes;
                var9 = var8.THIRD_PARTY_OUTBOUND;
                var8 = {};
                var3[var9] = var8;
                var8 = var7[var4];
                var8 = var5.bind(var0)(var8);
                var8 = var8.PromotionTypes;
                var9 = var8.GIFT_PROMOTION;
                var8 = {};
                var3[var9] = var8;
                var4 = var7[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.PromotionTypes;
                var5 = var4.THIRD_PARTY_OUTBOUND_RECURRING;
                var4 = {};
                var3[var5] = var4;
                _closure1_slot16 = var3;
                var3 = global;
                var4 = var3.Map;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var5;
                var4 = new var11[var4](var10);
                var4 = var4 instanceof Object ? var4 : var5;
                _closure1_slot19 = var4;
                var5 = var6.forEach;
                var4 = function(arg0) { // Environment: var4
                    _fun57948: for (var _fun57948_ip = 0;;) switch (_fun57948_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot8;
                            var0 = var3.createFromServer;
                            var3 = var0.bind(var3)(var2);
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 9;
                            var4 = var4[var0];
                            var0 = undefined;
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.isRecurringPromotion;
                            var4 = {};
                            var7 = var3.outboundTitle;
                            var4.promotionPartner = var7;
                            var7 = var3.promotionType;
                            var4.promotionType = var7;
                            var5 = var5.bind(var6)(var4);
                            var4 = true;
                            if (!(var4 !== var5)) {
                                _fun57948_ip = 231;
                                continue _fun57948
                            }
                        case 87:
                            var5 = var2.promotion_type;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var7 = 8;
                            var4 = var4[var7];
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.PromotionTypes;
                            var4 = var4.THIRD_PARTY;
                            if (!(var5 !== var4)) {
                                _fun57948_ip = 183;
                                continue _fun57948
                            }
                        case 129:
                            var5 = _closure1_slot16;
                            var4 = var2.promotion_type;
                            var5 = var5[var4];
                            var4 = var2.id;
                            var5[var4] = var3;
                            var6 = var2.marketing_components;
                            var4 = null;
                            if (!(var4 != var6)) {
                                _fun57948_ip = 260;
                                continue _fun57948
                            }
                        case 164:
                            var5 = var6.forEach;
                            var4 = function(arg0) { // Environment: var4
                                var5 = arg0;
                                var3 = _closure1_slot19;
                                var2 = var3.set;
                                var1 = var5.component_type;
                                var4 = _closure1_slot9;
                                var0 = var4.createFromServer;
                                var0 = var0.bind(var4)(var5);
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var4 = var5.bind(var6)(var4);
                            _fun57948_ip = 260;
                            continue _fun57948;
                        case 183:
                            var5 = _closure1_slot16;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var7];
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.PromotionTypes;
                            var4 = var4.THIRD_PARTY_OUTBOUND;
                            var4 = var5[var4];
                            var2 = var2.id;
                            var4[var2] = var3;
                            _fun57948_ip = 260;
                            continue _fun57948;
                        case 231:
                            var4 = var3.id;
                            var2 = _closure1_slot17;
                            var2 = var4 in var2;
                            if (var2) {
                                _fun57948_ip = 260;
                                continue _fun57948
                            }
                        case 247:
                            var2 = _closure1_slot17;
                            var1 = var3.id;
                            var2[var1] = var3;
                        case 260:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                _closure1_slot15 = var3;
                var3 = false;
                _closure1_slot14 = var3;
                var3 = _closure1_slot10;
                var3 = var3.hasFetchedConsumedInboundPromotionId;
                if (var3) {
                    _fun57947_ip = 320;
                    continue _fun57947
                }
            case 298:
                var4 = _closure1_slot10;
                var3 = true;
                var4.hasFetchedConsumedInboundPromotionId = var3;
                var1 = _closure1_slot10;
                var1.consumedInboundPromotionId = var2;
            case 320:
                return var0;
        }
    };
    var1.ACTIVE_PROMOTIONS_FETCH_SUCCESS = var8;
    var8 = function() {
        var0 = true;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var1.ACTIVE_PROMOTIONS_FETCH = var8;
    var8 = function() {
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 8;
        var6 = var5[var3];
        var0 = undefined;
        var6 = var4.bind(var0)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.BOGO;
        var6 = {};
        var1[var7] = var6;
        var6 = var5[var3];
        var6 = var4.bind(var0)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.MARKETING_MOMENT;
        var6 = {};
        var1[var7] = var6;
        var6 = var5[var3];
        var6 = var4.bind(var0)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.THIRD_PARTY_INBOUND;
        var6 = {};
        var1[var7] = var6;
        var6 = var5[var3];
        var6 = var4.bind(var0)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.THIRD_PARTY_OUTBOUND;
        var6 = {};
        var1[var7] = var6;
        var6 = var5[var3];
        var6 = var4.bind(var0)(var6);
        var6 = var6.PromotionTypes;
        var7 = var6.GIFT_PROMOTION;
        var6 = {};
        var1[var7] = var6;
        var3 = var5[var3];
        var3 = var4.bind(var0)(var3);
        var3 = var3.PromotionTypes;
        var4 = var3.THIRD_PARTY_OUTBOUND_RECURRING;
        var3 = {};
        var1[var4] = var3;
        _closure1_slot16 = var1;
        var1 = global;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var1
            }
        });
        var9 = var3;
        var1 = new var9[var1](var8);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot19 = var1;
        var1 = false;
        _closure1_slot14 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        return var0;
    };
    var1.ACTIVE_PROMOTIONS_FETCH_FAIL = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.activePromotion;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var3 = var1.startDate;
        var2 = var3.toISOString;
        var2 = var2.bind(var3)();
        var0.startDate = var2;
        var2 = var1.endDate;
        var1 = var2.toISOString;
        var1 = var1.bind(var2)();
        var0.endDate = var1;
        _closure1_slot11 = var0;
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        _closure1_slot13 = var0;
        var0 = false;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS = var8;
    var8 = function() {
        var0 = true;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.ACTIVE_BOGO_PROMOTION_FETCH = var8;
    var8 = function() {
        var0 = null;
        _closure1_slot11 = var0;
        var0 = false;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.ACTIVE_BOGO_PROMOTION_FETCH_FAIL = var8;
    var8 = function() {
        _fun57955: for (var _fun57955_ip = 0;;) switch (_fun57955_ip) {
            case 0:
                var0 = global;
                var4 = var0.Object;
                var3 = var4.values;
                var5 = _closure1_slot16;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var6.bind(var0)(var1);
                var1 = var1.PromotionTypes;
                var1 = var1.THIRD_PARTY_OUTBOUND;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var3 = var1.length;
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun57955_ip = 94;
                    continue _fun57955
                }
            case 74:
                var1 = _closure1_slot21;
                var1 = var1.bind(var0)();
                var3 = null;
                if (!(var3 != var1)) {
                    _fun57955_ip = 92;
                    continue _fun57955
                }
            case 88:
                _closure1_slot18 = var1;
            case 92:
                return var0;
            case 94:
                var0 = false;
                return var0;
        }
    };
    var1.OUTBOUND_PROMOTION_NOTICE_DISMISS = var8;
    var8 = function() {
        _fun57956: for (var _fun57956_ip = 0;;) switch (_fun57956_ip) {
            case 0:
                var0 = global;
                var4 = var0.Object;
                var3 = var4.values;
                var5 = _closure1_slot16;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 8;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var6.bind(var0)(var2);
                var2 = var2.PromotionTypes;
                var2 = var2.THIRD_PARTY_OUTBOUND;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.length;
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun57956_ip = 104;
                    continue _fun57956
                }
            case 74:
                var2 = _closure1_slot21;
                var2 = var2.bind(var0)();
                var3 = null;
                if (!(var3 != var2)) {
                    _fun57956_ip = 102;
                    continue _fun57956
                }
            case 88:
                _closure1_slot18 = var2;
                var1 = _closure1_slot10;
                var1.lastSeenOutboundPromotionStartDate = var2;
            case 102:
                return var0;
            case 104:
                var0 = false;
                return var0;
        }
    };
    var1.OUTBOUND_PROMOTIONS_SEEN = var8;
    var8 = function() {
        var0 = false;
        var2 = null;
        var3 = {
            'hasFetchedConsumedInboundPromotionId': false,
            'consumedInboundPromotionId': null,
            'lastSeenOutboundPromotionStartDate': null
        };
        _closure1_slot10 = var3;
        _closure1_slot14 = var0;
        _closure1_slot15 = var2;
        _closure1_slot12 = var0;
        _closure1_slot13 = var2;
        var3 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var4 = 8;
        var7 = var6[var4];
        var0 = undefined;
        var7 = var5.bind(var0)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.BOGO;
        var7 = {};
        var3[var8] = var7;
        var7 = var6[var4];
        var7 = var5.bind(var0)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.MARKETING_MOMENT;
        var7 = {};
        var3[var8] = var7;
        var7 = var6[var4];
        var7 = var5.bind(var0)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.THIRD_PARTY_INBOUND;
        var7 = {};
        var3[var8] = var7;
        var7 = var6[var4];
        var7 = var5.bind(var0)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.THIRD_PARTY_OUTBOUND;
        var7 = {};
        var3[var8] = var7;
        var7 = var6[var4];
        var7 = var5.bind(var0)(var7);
        var7 = var7.PromotionTypes;
        var8 = var7.GIFT_PROMOTION;
        var7 = {};
        var3[var8] = var7;
        var4 = var6[var4];
        var4 = var5.bind(var0)(var4);
        var4 = var4.PromotionTypes;
        var5 = var4.THIRD_PARTY_OUTBOUND_RECURRING;
        var4 = {};
        var3[var5] = var4;
        _closure1_slot16 = var3;
        _closure1_slot11 = var2;
        var2 = {};
        _closure1_slot17 = var2;
        var2 = _closure1_slot19;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var0;
    };
    var1.LOGOUT = var8;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.data;
        var2 = _closure1_slot9;
        var1 = var2.createFromServer;
        var3 = var1.bind(var2)(var3);
        var2 = _closure1_slot19;
        var1 = var2.set;
        var0 = var3.componentType;
        var0 = var1.bind(var2)(var0, var3);
        var0 = undefined;
        return var0;
    };
    var1.PREMIUM_MARKETING_PREVIEW = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/promotions/PromotionsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 6890, 7103, 6891, 7120, 566, 806, 2]);