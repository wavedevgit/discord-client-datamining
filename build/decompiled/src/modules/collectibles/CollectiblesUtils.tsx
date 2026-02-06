// modules/collectibles/CollectiblesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var20 = require;
    var2 = exports;
    var21 = dependencyMap;
    var _closure1_slot0 = var20;
    var _closure1_slot1 = var21;
    var0 = function arg0, arg1() {
        _fun42097: for (var _fun42097_ip = 0;;) switch (_fun42097_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun42097_ip = 46;
                    continue _fun42097
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun42097_ip = 55;
                    continue _fun42097
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun42097_ip = 343;
                    continue _fun42097
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun42097_ip = 323;
                    continue _fun42097
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun42097_ip = 283;
                    continue _fun42097
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun42097_ip = 270;
                    continue _fun42097
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
                    _fun42097_ip = 163;
                    continue _fun42097
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun42097_ip = 179;
                    continue _fun42097
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun42097_ip = 249;
                    continue _fun42097
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun42097_ip = 249;
                    continue _fun42097
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun42097_ip = 234;
                    continue _fun42097
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun42097_ip = 247;
                    continue _fun42097
                }
            case 234:
                var8 = _closure1_slot34;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun42097_ip = 265;
                continue _fun42097;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun42097_ip = 283;
                continue _fun42097;
            case 270:
                var6 = _closure1_slot34;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun42097_ip = 323;
                    continue _fun42097
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
                    _fun42097_ip = 330;
                    continue _fun42097
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun42098: for (var _fun42098_ip = 0;;) switch (_fun42098_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun42098_ip = 56;
                                continue _fun42098
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
                            _fun42098_ip = 67;
                            continue _fun42098;
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
    var _closure1_slot33 = var0;
    var0 = function arg0, arg1() {
        _fun42099: for (var _fun42099_ip = 0;;) switch (_fun42099_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun42099_ip = 23;
                    continue _fun42099
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun42099_ip = 33;
                    continue _fun42099
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
                    _fun42099_ip = 70;
                    continue _fun42099
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun42099_ip = 55;
                    continue _fun42099
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var21[var0];
    var0 = undefined;
    var3 = var20.bind(var0)(var3);
    var3 = var3.NO_PAYMENT_SOURCE;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var21[var3];
    var3 = var20.bind(var0)(var3);
    var3 = var3.isAvatarDecorationRecord;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var21[var3];
    var3 = var20.bind(var0)(var3);
    var3 = var3.isNameplateRecord;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var21[var3];
    var3 = var20.bind(var0)(var3);
    var3 = var3.isProfileEffectRecord;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var21[var3];
    var3 = var20.bind(var0)(var3);
    var3 = var3.AssetDisplayConfigRecord;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var21[var3];
    var3 = var20.bind(var0)(var3);
    var4 = var3.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot7 = var4;
    var4 = var3.FALLBACK_RECOMMENDED_GIFT_SKU_IDS;
    var _closure1_slot8 = var4;
    var4 = var3.LIMITED_TIME_BADGE_DAYS_THRESHOLD;
    var _closure1_slot9 = var4;
    var4 = var3.RECOMMENDED_GIFT_COUNT;
    var _closure1_slot10 = var4;
    var3 = var3.SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var21[var3];
    var3 = var20.bind(var0)(var3);
    var4 = var3.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot12 = var4;
    var4 = var3.EntitlementTypes;
    var _closure1_slot13 = var4;
    var3 = var3.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var21[var3];
    var3 = var20.bind(var0)(var3);
    var22 = var3.CurrencyCodes;
    var18 = function arg0, arg1, arg2() {
        _fun42100: for (var _fun42100_ip = 0;;) switch (_fun42100_ip) {
            case 0:
                var1 = arg1;
                var2 = _closure1_slot14;
                var3 = arg2;
                if (var3) {
                    _fun42100_ip = 35;
                    continue _fun42100
                }
            case 16:
                if (var1) {
                    _fun42100_ip = 27;
                    continue _fun42100
                }
            case 19:
                var3 = var2.DEFAULT;
                _fun42100_ip = 33;
                continue _fun42100;
            case 27:
                var3 = var2.PREMIUM_TIER_2;
            case 33:
                _fun42100_ip = 55;
                continue _fun42100;
            case 35:
                if (var1) {
                    _fun42100_ip = 46;
                    continue _fun42100
                }
            case 38:
                var1 = var2.MOBILE;
                _fun42100_ip = 52;
                continue _fun42100;
            case 46:
                var1 = var2.MOBILE_PREMIUM_TIER_2;
            case 52:
                var3 = var1;
            case 55:
                var2 = _closure1_slot18;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0, var3);
                return var0;
        }
    };
    var _closure1_slot15 = var18;
    var17 = function arg0() {
        _fun42101: for (var _fun42101_ip = 0;;) switch (_fun42101_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 9;
                var0 = var0[var5];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.isAndroid;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun42101_ip = 94;
                    continue _fun42101
                }
            case 41:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var3 = var3.bind(var4)(var0);
                var0 = var3.isIOS;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun42101_ip = 94;
                    continue _fun42101
                }
            case 71:
                var3 = _closure1_slot14;
                if (var1) {
                    _fun42101_ip = 86;
                    continue _fun42101
                }
            case 78:
                var0 = var3.DEFAULT;
                _fun42101_ip = 92;
                continue _fun42101;
            case 86:
                var0 = var3.PREMIUM_TIER_2;
            case 92:
                _fun42101_ip = 118;
                continue _fun42101;
            case 94:
                var2 = _closure1_slot14;
                if (var1) {
                    _fun42101_ip = 109;
                    continue _fun42101
                }
            case 101:
                var1 = var2.MOBILE;
                _fun42101_ip = 115;
                continue _fun42101;
            case 109:
                var1 = var2.MOBILE_PREMIUM_TIER_2;
            case 115:
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var _closure1_slot16 = var17;
    var16 = function arg0() {
        _fun42102: for (var _fun42102_ip = 0;;) switch (_fun42102_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.bundledProducts;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun42102_ip = 58;
                    continue _fun42102
                }
            case 17:
                var4 = _closure1_slot16;
                var2 = undefined;
                var1 = false;
                var1 = var4.bind(var2)(var1);
                var _closure2_slot0 = var1;
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun42103: for (var _fun42103_ip = 0;;) switch (_fun42103_ip) {
                        case 0:
                            var3 = _closure1_slot18;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var1 = arg1;
                            var2 = var3.bind(var0)(var1, var2);
                            var1 = null;
                            var3 = var1 == var2;
                            if (var3) {
                                _fun42103_ip = 40;
                                continue _fun42103
                            }
                        case 34:
                            var0 = var2.amount;
                        case 40:
                            var2 = var1 != var0;
                            var1 = 0;
                            if (!var2) {
                                _fun42103_ip = 52;
                                continue _fun42103
                            }
                        case 49:
                            var1 = var0;
                        case 52:
                            var0 = arg0;
                            var0 = var0 + var1;
                            return var0;
                    }
                };
                var0 = 0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 58:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot17 = var16;
    var15 = function arg0, arg1() {
        _fun42104: for (var _fun42104_ip = 0;;) switch (_fun42104_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.prices;
                var0 = arg1;
                var0 = var1[var0];
                var2 = null;
                var3 = var2 != var0;
                var1 = null;
                if (!var3) {
                    _fun42104_ip = 30;
                    continue _fun42104
                }
            case 27:
                var1 = var0;
            case 30:
                var3 = var2 != var1;
                var0 = null;
                if (!var3) {
                    _fun42104_ip = 78;
                    continue _fun42104
                }
            case 39:
                var3 = var1.countryPrices;
                var5 = var2 == var3;
                var1 = undefined;
                if (var5) {
                    _fun42104_ip = 75;
                    continue _fun42104
                }
            case 54:
                var3 = var3.prices;
                var2 = var2 == var3;
                var1 = undefined;
                if (var2) {
                    _fun42104_ip = 75;
                    continue _fun42104
                }
            case 69:
                var2 = 0;
                var1 = var3[var2];
            case 75:
                var0 = var1;
            case 78:
                return var0;
        }
    };
    var _closure1_slot18 = var15;
    var14 = {
        'original': 4294967295,
        'discountPercentage': 4294967295
    };
    var _closure1_slot19 = var14;
    var13 = function arg0, arg1() {
        _fun42105: for (var _fun42105_ip = 0;;) switch (_fun42105_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 11;
                var3 = var2[var0];
                var5 = undefined;
                var7 = var1.bind(var5)(var3);
                var6 = var7.flatMap;
                var3 = var4.values;
                var10 = var3.bind(var4)();
                var4 = new Array(0);
                var9 = 0;
                var11 = var4;
                var3 = arraySpread(var11, var10, var9);
                var3 = 'products';
                var4 = var6.bind(var7)(var4, var3);
                var0 = var2[var0];
                var3 = var1.bind(var5)(var0);
                var2 = var3.uniqBy;
                var0 = arg1;
                var1 = var4;
                if (!var0) {
                    _fun42105_ip = 102;
                    continue _fun42105
                }
            case 90:
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun42107: for (var _fun42107_ip = 0;;) switch (_fun42107_ip) {
                            case 0:
                                var4 = arg0;
                                var5 = arg1;
                                var _closure4_slot0 = var5;
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun42107_ip = 74;
                                    continue _fun42107
                                }
                            case 18:
                                var7 = var5.type;
                                var8 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var0 = 10;
                                var0 = var6[var0];
                                var6 = undefined;
                                var0 = var8.bind(var6)(var0);
                                var0 = var0.CollectiblesItemType;
                                var0 = var0.VARIANTS_GROUP;
                                if (!(var7 === var0)) {
                                    _fun42107_ip = 74;
                                    continue _fun42107
                                }
                            case 64:
                                var0 = var5.variants;
                                if (!(var3 == var0)) {
                                    _fun42107_ip = 89;
                                    continue _fun42107
                                }
                            case 74:
                                var0 = var4.push;
                                var0 = var0.bind(var4)(var5);
                                var0 = var4;
                                _fun42107_ip = 141;
                                continue _fun42107;
                            case 89:
                                var3 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var2 = 11;
                                var2 = var7[var2];
                                var3 = var3.bind(var6)(var2);
                                var2 = var3.concat;
                                var6 = var5.variants;
                                var5 = var6.map;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = {};
                                    var4 = arg0;
                                    var5 = var0;
                                    var1 = copyDataProperties(var5, var4);
                                    var1 = _closure4_slot0;
                                    var3 = var1.storeListingId;
                                    var2 = 'variantGroupStoreListingId';
                                    var0[var2] = var3;
                                    var2 = var1.eligibleOffers;
                                    var1 = 'eligibleOffers';
                                    var0[var1] = var2;
                                    return var0;
                                };
                                var1 = var5.bind(var6)(var1);
                                var0 = var2.bind(var3)(var4, var1);
                            case 141:
                                return var0;
                        }
                    };
                    var0 = new Array(0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var0.bind(var5)(var4);
            case 102:
                var0 = 'storeListingId';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var13;
    var12 = function arg0, arg1() {
        _fun42109: for (var _fun42109_ip = 0;;) switch (_fun42109_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 10;
                var0 = var0[var5];
                var2 = undefined;
                var0 = var4.bind(var2)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.AVATAR_DECORATION;
                if (!(var1 !== var0)) {
                    _fun42109_ip = 323;
                    continue _fun42109
                }
            case 50:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var4.bind(var2)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.PROFILE_EFFECT;
                if (!(var1 !== var0)) {
                    _fun42109_ip = 224;
                    continue _fun42109
                }
            case 86:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var4.bind(var2)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.NAMEPLATE;
                if (!(var1 !== var0)) {
                    _fun42109_ip = 125;
                    continue _fun42109
                }
            case 119:
                var0 = new Array(0);
                return var0;
            case 125:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var5 = var4[var0];
                var9 = var1.bind(var2)(var5);
                var8 = var9.flatMap;
                var5 = var6.values;
                var12 = var5.bind(var6)();
                var7 = new Array(0);
                var11 = 0;
                var13 = var7;
                var5 = arraySpread(var13, var12, var11);
                var5 = 'items';
                var8 = var8.bind(var9)(var7, var5);
                var7 = var8.filter;
                var5 = _closure1_slot4;
                var5 = var7.bind(var8)(var5);
                var0 = var4[var0];
                var4 = var1.bind(var2)(var0);
                var1 = var4.uniqBy;
                var0 = 'skuId';
                var0 = var1.bind(var4)(var5, var0);
                return var0;
            case 224:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var5 = var4[var0];
                var9 = var1.bind(var2)(var5);
                var8 = var9.flatMap;
                var5 = var6.values;
                var12 = var5.bind(var6)();
                var7 = new Array(0);
                var11 = 0;
                var13 = var7;
                var5 = arraySpread(var13, var12, var11);
                var5 = 'items';
                var8 = var8.bind(var9)(var7, var5);
                var7 = var8.filter;
                var5 = _closure1_slot5;
                var5 = var7.bind(var8)(var5);
                var0 = var4[var0];
                var4 = var1.bind(var2)(var0);
                var1 = var4.uniqBy;
                var0 = 'skuId';
                var0 = var1.bind(var4)(var5, var0);
                return var0;
            case 323:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var5 = var4[var0];
                var8 = var1.bind(var2)(var5);
                var7 = var8.flatMap;
                var5 = var6.values;
                var12 = var5.bind(var6)();
                var6 = new Array(0);
                var11 = 0;
                var13 = var6;
                var5 = arraySpread(var13, var12, var11);
                var5 = 'items';
                var6 = var7.bind(var8)(var6, var5);
                var5 = var6.filter;
                var3 = _closure1_slot3;
                var3 = var5.bind(var6)(var3);
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.uniqBy;
                var0 = 'skuId';
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var12;
    var11 = function arg0, arg1() {
        _fun42110: for (var _fun42110_ip = 0;;) switch (_fun42110_ip) {
            case 0:
                var1 = arg1;
                var5 = _closure1_slot20;
                var2 = undefined;
                var4 = arg0;
                var0 = true;
                var8 = var5.bind(var2)(var4, var0);
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 10;
                var0 = var0[var5];
                var0 = var4.bind(var2)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.AVATAR_DECORATION;
                if (!(var1 !== var0)) {
                    _fun42110_ip = 288;
                    continue _fun42110
                }
            case 62:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var4.bind(var2)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.PROFILE_EFFECT;
                if (!(var1 !== var0)) {
                    _fun42110_ip = 211;
                    continue _fun42110
                }
            case 95:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var4.bind(var2)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.NAMEPLATE;
                if (!(var1 !== var0)) {
                    _fun42110_ip = 134;
                    continue _fun42110
                }
            case 128:
                var0 = new Array(0);
                return var0;
            case 134:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var5 = var4[var0];
                var7 = var1.bind(var2)(var5);
                var6 = var7.flatMap;
                var5 = 'items';
                var7 = var6.bind(var7)(var8, var5);
                var6 = var7.filter;
                var5 = _closure1_slot4;
                var5 = var6.bind(var7)(var5);
                var0 = var4[var0];
                var4 = var1.bind(var2)(var0);
                var1 = var4.uniqBy;
                var0 = 'skuId';
                var0 = var1.bind(var4)(var5, var0);
                return var0;
            case 211:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var5 = var4[var0];
                var7 = var1.bind(var2)(var5);
                var6 = var7.flatMap;
                var5 = 'items';
                var7 = var6.bind(var7)(var8, var5);
                var6 = var7.filter;
                var5 = _closure1_slot5;
                var5 = var6.bind(var7)(var5);
                var0 = var4[var0];
                var4 = var1.bind(var2)(var0);
                var1 = var4.uniqBy;
                var0 = 'skuId';
                var0 = var1.bind(var4)(var5, var0);
                return var0;
            case 288:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var5 = var4[var0];
                var7 = var1.bind(var2)(var5);
                var6 = var7.flatMap;
                var5 = 'items';
                var6 = var6.bind(var7)(var8, var5);
                var5 = var6.filter;
                var3 = _closure1_slot3;
                var3 = var5.bind(var6)(var3);
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.uniqBy;
                var0 = 'skuId';
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var11;
    var10 = function arg0() {
        var3 = _closure1_slot21;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.CollectiblesItemType;
        var1 = var0.AVATAR_DECORATION;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var10;
    var9 = function arg0() {
        var3 = _closure1_slot22;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.CollectiblesItemType;
        var1 = var0.AVATAR_DECORATION;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var9;
    var8 = function arg0() {
        var3 = _closure1_slot21;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.CollectiblesItemType;
        var1 = var0.PROFILE_EFFECT;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var8;
    var7 = function arg0() {
        var3 = _closure1_slot22;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.CollectiblesItemType;
        var1 = var0.PROFILE_EFFECT;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var7;
    var6 = function arg0() {
        var3 = _closure1_slot21;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.CollectiblesItemType;
        var1 = var0.NAMEPLATE;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var6;
    var5 = function arg0() {
        var3 = _closure1_slot22;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.CollectiblesItemType;
        var1 = var0.NAMEPLATE;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var5;
    var4 = function arg0() {
        var7 = arg0;
        var1 = global;
        var0 = var1.Date;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var11 = var2;
        var0 = new var11[var0](var10);
        var6 = var0 instanceof Object ? var0 : var2;
        var5 = var1.Date;
        var4 = var5.UTC;
        var0 = var6.getFullYear;
        var3 = var0.bind(var6)();
        var0 = var6.getMonth;
        var2 = var0.bind(var6)();
        var0 = var6.getDate;
        var0 = var0.bind(var6)();
        var3 = var4.bind(var5)(var3, var2, var0);
        var6 = var1.Date;
        var5 = var6.UTC;
        var0 = var7.getFullYear;
        var4 = var0.bind(var7)();
        var0 = var7.getMonth;
        var2 = var0.bind(var7)();
        var0 = var7.getDate;
        var0 = var0.bind(var7)();
        var0 = var5.bind(var6)(var4, var2, var0);
        var2 = var1.Math;
        var1 = var2.floor;
        var3 = var0 - var3;
        var0 = 86400000;
        var0 = var3 / var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot29 = var4;
    var3 = function arg0() {
        _fun42118: for (var _fun42118_ip = 0;;) switch (_fun42118_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun42118_ip = 21;
                    continue _fun42118
                }
            case 16:
                var1 = var0.type;
            case 21:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 10;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.BUNDLE;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot30 = var3;
    var23 = var22.KZT;
    var19 = new Array(3);
    var19[0] = var23;
    var23 = var22.NGN;
    var19[1] = var23;
    var22 = var22.EGP;
    var19[2] = var22;
    var _closure1_slot31 = var19;
    var19 = function arg0() {
        _fun42119: for (var _fun42119_ip = 0;;) switch (_fun42119_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.length;
                var1 = _closure1_slot10;
                if (!(!(var3 < var1))) {
                    _fun42119_ip = 21;
                    continue _fun42119
                }
            case 19:
                return var2;
            case 21:
                var4 = _closure1_slot8;
                var3 = var4.slice;
                var1 = _closure1_slot10;
                var0 = var2.length;
                var1 = var1 - var0;
                var0 = 0;
                var1 = var3.bind(var4)(var0, var1);
                var0 = var2.concat;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var _closure1_slot32 = var19;
    var19 = 13;
    var19 = var21[var19];
    var21 = var20.bind(var0)(var19);
    var20 = var21.fileFinishedImporting;
    var19 = 'modules/collectibles/CollectiblesUtils.tsx';
    var19 = var20.bind(var21)(var19);
    var19 = function(arg0) { // Environment: var1
        _fun42120: for (var _fun42120_ip = 0;;) switch (_fun42120_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun42120_ip = 20;
                    continue _fun42120
                }
            case 14:
                var0 = var2.premiumType;
            case 20:
                var0 = var1 != var0;
                return var0;
        }
    };
    var2.isPremiumCollectiblesProduct = var19;
    var19 = function(arg0) { // Environment: var1
        _fun42121: for (var _fun42121_ip = 0;;) switch (_fun42121_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun42121_ip = 20;
                    continue _fun42121
                }
            case 14:
                var1 = var0.purchaseType;
            case 20:
                var0 = _closure1_slot13;
                var0 = var0.PREMIUM_PURCHASE;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isPremiumCollectiblesPurchase = var19;
    var19 = function(arg0) { // Environment: var1
        _fun42122: for (var _fun42122_ip = 0;;) switch (_fun42122_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.items;
                var1 = var2.find;
                var0 = _closure1_slot3;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 == var1;
                var0 = undefined;
                if (var2) {
                    _fun42122_ip = 42;
                    continue _fun42122
                }
            case 36:
                var0 = var1.asset;
            case 42:
                return var0;
        }
    };
    var2.getAssetForAvatarDecorationProduct = var19;
    var2.getPriceForCollectiblesProduct = var18;
    var18 = function(arg0, arg1, arg2) { // Environment: var1
        _fun42123: for (var _fun42123_ip = 0;;) switch (_fun42123_ip) {
            case 0:
                var5 = _closure1_slot15;
                var1 = undefined;
                var4 = arg0;
                var3 = arg1;
                var0 = arg2;
                var5 = var5.bind(var1)(var4, var3, var0);
                var6 = null;
                var3 = var6 == var5;
                var0 = '';
                if (var3) {
                    _fun42123_ip = 100;
                    continue _fun42123
                }
            case 38:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 8;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.formatPrice;
                var7 = var6 == var5;
                var2 = undefined;
                if (var7) {
                    _fun42123_ip = 79;
                    continue _fun42123
                }
            case 73:
                var2 = var5.amount;
            case 79:
                var6 = var6 == var5;
                var1 = undefined;
                if (var6) {
                    _fun42123_ip = 94;
                    continue _fun42123
                }
            case 88:
                var1 = var5.currency;
            case 94:
                var0 = var3.bind(var4)(var2, var1);
            case 100:
                return var0;
        }
    };
    var2.getFormattedPriceForCollectiblesProduct = var18;
    var2.getDefaultPriceSetAssignmentPurchaseType = var17;
    var2.getBundleItemsPriceSum = var16;
    var2.extractPriceByPurchaseTypes = var15;
    var2.NoDiscount = var14;
    var14 = function(arg0, arg1) { // Environment: var1
        _fun42124: for (var _fun42124_ip = 0;;) switch (_fun42124_ip) {
            case 0:
                var6 = arg0;
                var1 = null;
                if (!(var1 != var6)) {
                    _fun42124_ip = 120;
                    continue _fun42124
                }
            case 9:
                var2 = _closure1_slot17;
                var4 = undefined;
                var5 = var2.bind(var4)(var6);
                var2 = 0;
                if (!(!(var5 <= var2))) {
                    _fun42124_ip = 114;
                    continue _fun42124
                }
            case 29:
                var3 = _closure1_slot18;
                var7 = _closure1_slot16;
                var2 = arg1;
                var2 = var7.bind(var4)(var2);
                var2 = var3.bind(var4)(var6, var2);
                if (!(var1 != var2)) {
                    _fun42124_ip = 108;
                    continue _fun42124
                }
            case 55:
                var1 = {};
                var1.original = var5;
                var3 = global;
                var4 = var3.Math;
                var3 = var4.round;
                var2 = var2.amount;
                var2 = var5 - var2;
                var5 = var2 / var5;
                var2 = 100;
                var2 = var5 * var2;
                var2 = var3.bind(var4)(var2);
                var1.discountPercentage = var2;
                _fun42124_ip = 112;
                continue _fun42124;
            case 108:
                var1 = _closure1_slot19;
            case 112:
                return var1;
            case 114:
                var0 = _closure1_slot19;
                return var0;
            case 120:
                var0 = _closure1_slot19;
                return var0;
        }
    };
    var2.getProductDiscount = var14;
    var14 = function(arg0) { // Environment: var1
        _fun42125: for (var _fun42125_ip = 0;;) switch (_fun42125_ip) {
            case 0:
                var3 = _closure1_slot18;
                var0 = _closure1_slot14;
                var2 = var0.DEFAULT;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                var2 = null;
                var2 = var2 == var0;
                if (var2) {
                    _fun42125_ip = 43;
                    continue _fun42125
                }
            case 37:
                var1 = var0.amount;
            case 43:
                var0 = 0;
                var0 = var0 === var1;
                return var0;
        }
    };
    var2.isFreeCollectiblesProduct = var14;
    var2.getProductsFromCategories = var13;
    var2.getItemRecordsFromPurchases = var12;
    var2.getItemRecordsFromCategories = var11;
    var11 = function(arg0) { // Environment: var1
        _fun42126: for (var _fun42126_ip = 0;;) switch (_fun42126_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 != var3;
                var0 = undefined;
                if (!var1) {
                    _fun42126_ip = 32;
                    continue _fun42126
                }
            case 14:
                var2 = _closure1_slot6;
                var1 = var2.fromServer;
                var0 = var1.bind(var2)(var3);
            case 32:
                return var0;
        }
    };
    var2.getAssetDisplayConfig = var11;
    var2.getAvatarDecorationsFromPurchases = var10;
    var2.getAvatarDecorationsFromCategories = var9;
    var9 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 11;
        var1 = var3[var1];
        var6 = undefined;
        var3 = var2.bind(var6)(var1);
        var2 = var3.uniqBy;
        var4 = _closure1_slot23;
        var1 = arg0;
        var8 = var4.bind(var6)(var1);
        var1 = new Array(0);
        var7 = 0;
        var9 = var1;
        var7 = arraySpread(var9, var8, var7);
        var5 = _closure1_slot24;
        var0 = arg1;
        var8 = var5.bind(var6)(var0);
        var9 = var1;
        var0 = arraySpread(var9, var8, var7);
        var0 = 'skuId';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getAvatarDecorations = var9;
    var2.getProfileEffectsFromPurchases = var8;
    var2.getProfileEffectsFromCategories = var7;
    var7 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 11;
        var1 = var3[var1];
        var6 = undefined;
        var3 = var2.bind(var6)(var1);
        var2 = var3.uniqBy;
        var4 = _closure1_slot25;
        var1 = arg0;
        var8 = var4.bind(var6)(var1);
        var1 = new Array(0);
        var7 = 0;
        var9 = var1;
        var7 = arraySpread(var9, var8, var7);
        var5 = _closure1_slot26;
        var0 = arg1;
        var8 = var5.bind(var6)(var0);
        var9 = var1;
        var0 = arraySpread(var9, var8, var7);
        var0 = 'skuId';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getProfileEffects = var7;
    var7 = function(arg0, arg1) { // Environment: var1
        var3 = _closure1_slot25;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var3 = _closure1_slot26;
        var1 = arg0;
        var3 = var3.bind(var4)(var1);
        var1 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var1 = var1.skuId;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot0;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.skuId;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.purchased = var2;
        var0.shopPreviews = var1;
        return var0;
    };
    var2.groupProfileEffects = var7;
    var2.getNameplatesFromPurchases = var6;
    var2.getNameplatesFromCategories = var5;
    var5 = function(arg0, arg1) { // Environment: var1
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 11;
        var1 = var3[var1];
        var6 = undefined;
        var3 = var2.bind(var6)(var1);
        var2 = var3.uniqBy;
        var4 = _closure1_slot27;
        var1 = arg0;
        var8 = var4.bind(var6)(var1);
        var1 = new Array(0);
        var7 = 0;
        var9 = var1;
        var7 = arraySpread(var9, var8, var7);
        var5 = _closure1_slot28;
        var0 = arg1;
        var8 = var5.bind(var6)(var0);
        var9 = var1;
        var0 = arraySpread(var9, var8, var7);
        var0 = 'skuId';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getNameplates = var5;
    var5 = function(arg0) { // Environment: var1
        var0 = arg0;
        var1 = var0.applicationId;
        var0 = _closure1_slot12;
        var0 = var1 === var0;
        return var0;
    };
    var2.isCollectiblesGiftCode = var5;
    var5 = 3.8;
    var2.LOGO_ASPECT_RATIO = var5;
    var5 = function(arg0) { // Environment: var1
        var1 = 3.8;
        var0 = arg0;
        var0 = var1 * var0;
        return var0;
    };
    var2.getLogoSize = var5;
    var2.getDaysRemaining = var4;
    var4 = function(arg0) { // Environment: var1
        _fun42135: for (var _fun42135_ip = 0;;) switch (_fun42135_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun42135_ip = 34;
                    continue _fun42135
                }
            case 12:
                var3 = _closure1_slot29;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var1 = _closure1_slot9;
                var0 = var2 <= var1;
            case 34:
                return var0;
        }
    };
    var2.shouldShowLimitedTimeBadge = var4;
    var4 = function(arg0) { // Environment: var1
        _fun42136: for (var _fun42136_ip = 0;;) switch (_fun42136_ip) {
            case 0:
                var1 = _closure1_slot11;
                var0 = arg0;
                var2 = var1[var0];
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun42136_ip = 65;
                    continue _fun42136
                }
            case 23:
                var1 = global;
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var4 = var3;
                var1 = new var4[var1](var3);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var0 = var1 < var2;
            case 65:
                return var0;
        }
    };
    var2.isProductNew = var4;
    var2.isBundleProduct = var3;
    var3 = function(arg0) { // Environment: var1
        _fun42137: for (var _fun42137_ip = 0;;) switch (_fun42137_ip) {
            case 0:
                var0 = arg0;
                var5 = null;
                if (!(var5 == var0)) {
                    _fun42137_ip = 13;
                    continue _fun42137
                }
            case 9:
                var1 = undefined;
                return var1;
            case 13:
                var6 = var0.type;
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 10;
                var2 = var2[var4];
                var3 = undefined;
                var2 = var7.bind(var3)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.BUNDLE;
                if (!(var6 !== var2)) {
                    _fun42137_ip = 95;
                    continue _fun42137
                }
            case 59:
                var6 = var0.items;
                var2 = var5 == var6;
                var0 = undefined;
                if (var2) {
                    _fun42137_ip = 93;
                    continue _fun42137
                }
            case 73:
                var2 = 0;
                var2 = var6[var2];
                var5 = var5 == var2;
                var0 = undefined;
                if (var5) {
                    _fun42137_ip = 93;
                    continue _fun42137
                }
            case 88:
                var0 = var2.type;
            case 93:
                _fun42137_ip = 124;
                continue _fun42137;
            case 95:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var0 = var1.BUNDLE;
            case 124:
                return var0;
        }
    };
    var2.getCollectiblesItemTypeForDisplay = var3;
    var3 = function(arg0) { // Environment: var1
        _fun42138: for (var _fun42138_ip = 0;;) switch (_fun42138_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.selectedSkuPricePreview;
                var1 = var2.paymentSourceId;
                var5 = var2.selectedSkuId;
                var4 = var2.skuPricePreviewsById;
                var2 = var2.skusById;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun42138_ip = 93;
                    continue _fun42138
                }
            case 45:
                var6 = var3 != var1;
                var1 = null;
                if (!var6) {
                    _fun42138_ip = 90;
                    continue _fun42138
                }
            case 54:
                var6 = var3 != var5;
                var1 = null;
                if (!var6) {
                    _fun42138_ip = 90;
                    continue _fun42138
                }
            case 63:
                var7 = var4[var5];
                var6 = var3 == var7;
                var4 = undefined;
                if (var6) {
                    _fun42138_ip = 87;
                    continue _fun42138
                }
            case 76:
                var6 = _closure1_slot2;
                var4 = var7[var6];
            case 87:
                var1 = var4;
            case 90:
                var0 = var1;
            case 93:
                var4 = var3 == var0;
                var6 = undefined;
                if (var4) {
                    _fun42138_ip = 140;
                    continue _fun42138
                }
            case 102:
                var4 = var0.invoice_items;
                var0 = var3 == var4;
                var6 = undefined;
                if (var0) {
                    _fun42138_ip = 140;
                    continue _fun42138
                }
            case 117:
                var0 = 0;
                var0 = var4[var0];
                var4 = var3 == var0;
                var6 = undefined;
                if (var4) {
                    _fun42138_ip = 140;
                    continue _fun42138
                }
            case 132:
                var6 = var0.unit_price;
            case 140:
                var0 = var3 != var6;
                var4 = undefined;
                if (!var0) {
                    _fun42138_ip = 176;
                    continue _fun42138
                }
            case 149:
                var0 = {};
                var7 = var6.amount;
                var0.amount = var7;
                var6 = var6.currency;
                var0.currency = var6;
                var4 = var0;
            case 176:
                var0 = var4;
                if (!(var3 == var0)) {
                    _fun42138_ip = 255;
                    continue _fun42138
                }
            case 183:
                var0 = var4;
                if (!(var3 != var5)) {
                    _fun42138_ip = 255;
                    continue _fun42138
                }
            case 190:
                var2 = var2[var5];
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun42138_ip = 209;
                    continue _fun42138
                }
            case 203:
                var1 = var2.price;
            case 209:
                var0 = var4;
                if (!(var3 != var1)) {
                    _fun42138_ip = 255;
                    continue _fun42138
                }
            case 216:
                var1 = {};
                var3 = var2.price;
                var3 = var3.amount;
                var1.amount = var3;
                var2 = var2.price;
                var2 = var2.currency;
                var1.currency = var2;
                var0 = var1;
            case 255:
                return var0;
        }
    };
    var2.getCollectiblesPrice = var3;
    var3 = function(arg0) { // Environment: var1
        _fun42139: for (var _fun42139_ip = 0;;) switch (_fun42139_ip) {
            case 0:
                var3 = arg0;
                var1 = !var3;
                var0 = !var1;
                if (var1) {
                    _fun42139_ip = 29;
                    continue _fun42139
                }
            case 12:
                var2 = _closure1_slot31;
                var1 = var2.includes;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var2.shouldHideGiftingForCurrency = var3;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun42140: for (var _fun42140_ip = 0;;) switch (_fun42140_ip) {
            case 0:
                var2 = arg0;
                var3 = arg2;
                var4 = _closure1_slot30;
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                if (var4) {
                    _fun42140_ip = 101;
                    continue _fun42140
                }
            case 23:
                var5 = _closure1_slot14;
                var4 = arg1;
                if (var4) {
                    _fun42140_ip = 52;
                    continue _fun42140
                }
            case 33:
                if (var3) {
                    _fun42140_ip = 44;
                    continue _fun42140
                }
            case 36:
                var4 = var5.PREMIUM_TIER_2;
                _fun42140_ip = 50;
                continue _fun42140;
            case 44:
                var4 = var5.MOBILE_PREMIUM_TIER_2;
            case 50:
                _fun42140_ip = 72;
                continue _fun42140;
            case 52:
                if (var3) {
                    _fun42140_ip = 63;
                    continue _fun42140
                }
            case 55:
                var3 = var5.DEFAULT;
                _fun42140_ip = 69;
                continue _fun42140;
            case 63:
                var3 = var5.MOBILE;
            case 69:
                var4 = var3;
            case 72:
                var3 = _closure1_slot18;
                var4 = var3.bind(var1)(var2, var4);
                var3 = null;
                var5 = var3 == var4;
                var3 = undefined;
                if (var5) {
                    _fun42140_ip = 99;
                    continue _fun42140
                }
            case 93:
                var3 = var4.amount;
            case 99:
                return var3;
            case 101:
                var0 = _closure1_slot17;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.getStrikeThroughPriceAmountForCollectiblesProduct = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun42141: for (var _fun42141_ip = 0;;) switch (_fun42141_ip) {
            case 0:
                var11 = arg1;
                var2 = new Array(0);
                var4 = _closure1_slot33;
                var1 = undefined;
                var3 = arg0;
                var10 = var4.bind(var1)(var3);
                var4 = var10.bind(var1)();
                var3 = var4.done;
                var9 = null;
                var8 = var4;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun42141_ip = 216;
                    continue _fun42141
                }
            case 52:
                var3 = var8.value;
                var14 = var3.heroRanking;
                var13 = var5;
                var12 = var4;
                if (!(var9 != var14)) {
                    _fun42141_ip = 192;
                    continue _fun42141
                }
            case 73:
                var3 = _closure1_slot33;
                var15 = var3.bind(var1)(var14);
                var16 = var15.bind(var1)();
                var3 = var16.done;
                var14 = var16;
                var7 = var14;
                var6 = var15;
                var13 = var5;
                var12 = var4;
                if (var3) {
                    _fun42141_ip = 192;
                    continue _fun42141
                }
            case 109:
                var17 = var14.value;
                var3 = var11.get;
                var16 = var3.bind(var11)(var17);
                if (!(var9 != var16)) {
                    _fun42141_ip = 165;
                    continue _fun42141
                }
            case 128:
                var3 = _closure1_slot30;
                var3 = var3.bind(var1)(var16);
                if (var3) {
                    _fun42141_ip = 165;
                    continue _fun42141
                }
            case 140:
                var3 = var2.push;
                var3 = var3.bind(var2)(var17);
                var18 = var2.length;
                var3 = _closure1_slot10;
                if (!(var18 >= var3)) {
                    _fun42141_ip = 165;
                    continue _fun42141
                }
            case 163:
                return var2;
            case 165:
                var18 = var15.bind(var1)();
                var3 = var18.done;
                var14 = var18;
                var7 = var14;
                var6 = var15;
                var13 = var17;
                var12 = var16;
                if (!var3) {
                    _fun42141_ip = 109;
                    continue _fun42141
                }
            case 192:
                var14 = var10.bind(var1)();
                var3 = var14.done;
                var5 = var13;
                var4 = var12;
                var8 = var14;
                if (!var3) {
                    _fun42141_ip = 52;
                    continue _fun42141
                }
            case 216:
                var0 = _closure1_slot32;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.getRecommendedGiftSkuIds = var3;
    var3 = function(arg0) { // Environment: var1
        _fun42142: for (var _fun42142_ip = 0;;) switch (_fun42142_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.product;
                var0 = var1.isPartiallyOwnedBundle;
                var2 = var1.isPurchased;
                if (var0) {
                    _fun42142_ip = 67;
                    continue _fun42142
                }
            case 24:
                var1 = _closure1_slot7;
                var3 = var1.ORB_PROFILE_BADGE;
                var1 = null;
                var5 = var1 == var4;
                var1 = undefined;
                if (var5) {
                    _fun42142_ip = 54;
                    continue _fun42142
                }
            case 48:
                var1 = var4.skuId;
            case 54:
                var1 = var3 === var1;
                if (!var1) {
                    _fun42142_ip = 64;
                    continue _fun42142
                }
            case 61:
                var1 = var2;
            case 64:
                var0 = var1;
            case 67:
                var0 = !var0;
                return var0;
        }
    };
    var2.canActionOnProduct = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun42143: for (var _fun42143_ip = 0;;) switch (_fun42143_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 10;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var4.bind(var5)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.AVATAR_DECORATION;
                if (!(var0 !== var2)) {
                    _fun42143_ip = 307;
                    continue _fun42143
                }
            case 50:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.PROFILE_EFFECT;
                if (!(var0 !== var2)) {
                    _fun42143_ip = 299;
                    continue _fun42143
                }
            case 86:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.NAMEPLATE;
                if (!(var0 !== var2)) {
                    _fun42143_ip = 293;
                    continue _fun42143
                }
            case 122:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.BUNDLE;
                if (!(var0 !== var2)) {
                    _fun42143_ip = 287;
                    continue _fun42143
                }
            case 158:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.EXTERNAL_SKU;
                if (!(var0 !== var2)) {
                    _fun42143_ip = 238;
                    continue _fun42143
                }
            case 191:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.VARIANTS_GROUP;
                if (!(var0 !== var2)) {
                    _fun42143_ip = 230;
                    continue _fun42143
                }
            case 224:
                var0 = 'unknown';
                return var0;
            case 230:
                var0 = 'variants group';
                return var0;
            case 238:
                var0 = _closure1_slot7;
                var2 = var0.FRACTIONAL_PREMIUM;
                var0 = '3-day nitro credit';
                if (!(var3 !== var2)) {
                    _fun42143_ip = 285;
                    continue _fun42143
                }
            case 258:
                var1 = _closure1_slot7;
                var2 = var1.ORB_PROFILE_BADGE;
                var1 = 'unknown';
                if (!(var3 === var2)) {
                    _fun42143_ip = 282;
                    continue _fun42143
                }
            case 276:
                var1 = 'orb profile badge';
            case 282:
                var0 = var1;
            case 285:
                return var0;
            case 287:
                var0 = 'bundle';
                return var0;
            case 293:
                var0 = 'nameplate';
                return var0;
            case 299:
                var0 = 'profile effect';
                return var0;
            case 307:
                var0 = 'avatar decoration';
                return var0;
        }
    };
    var2.getProductTypeNameForLogging = var3;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun42145: for (var _fun42145_ip = 0;;) switch (_fun42145_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun42145_ip = 40;
                        continue _fun42145
                    }
                case 19:
                    var4 = _closure1_slot15;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var0 = true;
                    var0 = var4.bind(var2)(var7, var3, var0);
                    _fun42145_ip = 89;
                    continue _fun42145;
                case 40:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getProductOrbPrice;
                    var2 = {};
                    var2.product = var7;
                    var7 = _closure2_slot0;
                    var2.isPremiumUser = var7;
                    var0 = var3.bind(var4)(var2);
                case 89:
                    var2 = _closure2_slot1;
                    if (var2) {
                        _fun42145_ip = 117;
                        continue _fun42145
                    }
                case 96:
                    var7 = _closure1_slot15;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = true;
                    var4 = var7.bind(var3)(var6, var4, var2);
                    _fun42145_ip = 166;
                    continue _fun42145;
                case 117:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getProductOrbPrice;
                    var1 = {};
                    var1.product = var6;
                    var5 = _closure2_slot0;
                    var1.isPremiumUser = var5;
                    var4 = var2.bind(var3)(var1);
                case 166:
                    var3 = null;
                    var1 = var3 == var0;
                    var5 = undefined;
                    if (var1) {
                        _fun42145_ip = 183;
                        continue _fun42145
                    }
                case 177:
                    var5 = var0.amount;
                case 183:
                    var6 = var3 != var5;
                    var0 = 0;
                    if (!var6) {
                        _fun42145_ip = 195;
                        continue _fun42145
                    }
                case 192:
                    var0 = var5;
                case 195:
                    var5 = var3 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun42145_ip = 210;
                        continue _fun42145
                    }
                case 204:
                    var2 = var4.amount;
                case 210:
                    var3 = var3 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun42145_ip = 222;
                        continue _fun42145
                    }
                case 219:
                    var1 = var2;
                case 222:
                    var0 = var0 - var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.sortProductsByPrice = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun42146: for (var _fun42146_ip = 0;;) switch (_fun42146_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var2 = var4.length;
                var3 = 0;
                if (!(var3 !== var2)) {
                    _fun42146_ip = 65;
                    continue _fun42146
                }
            case 19:
                var2 = var0.length;
                if (!(var3 !== var2)) {
                    _fun42146_ip = 65;
                    continue _fun42146
                }
            case 28:
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.discountId;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var _closure2_slot0 = var2;
                var2 = var0.sort;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun42148: for (var _fun42148_ip = 0;;) switch (_fun42148_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.eligibleOffers;
                            var1 = null;
                            var0 = var1 == var6;
                            var4 = undefined;
                            if (var0) {
                                _fun42148_ip = 38;
                                continue _fun42148
                            }
                        case 22:
                            var5 = var6.some;
                            var0 = function(arg0) { // Environment: var3
                                var2 = _closure2_slot0;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var4 = var5.bind(var6)(var0);
                        case 38:
                            var0 = var1 != var4;
                            if (!var0) {
                                _fun42148_ip = 48;
                                continue _fun42148
                            }
                        case 45:
                            var0 = var4;
                        case 48:
                            var4 = arg1;
                            var5 = var4.eligibleOffers;
                            var4 = var1 == var5;
                            var2 = undefined;
                            if (var4) {
                                _fun42148_ip = 82;
                                continue _fun42148
                            }
                        case 66:
                            var4 = var5.some;
                            var3 = function(arg0) { // Environment: var3
                                var2 = _closure2_slot0;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var4.bind(var5)(var3);
                        case 82:
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun42148_ip = 92;
                                continue _fun42148
                            }
                        case 89:
                            var1 = var2;
                        case 92:
                            var1 = var1 - 0;
                            var0 = var0 - 0;
                            var0 = var1 - var0;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var1;
            case 65:
                return var0;
        }
    };
    var2.sortProductsByUserDiscounts = var3;
    var1 = function(arg0) { // Environment: var1
        var2 = arg0;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.isCategoryReward;
            var0 = !var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.removeRewardProductsFilter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4601, 4602, 4604, 4605, 4606, 3285, 660, 483, 4607, 478, 3495, 22, 4614, 2]);