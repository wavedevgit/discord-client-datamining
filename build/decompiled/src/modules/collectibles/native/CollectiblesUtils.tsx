// modules/collectibles/native/CollectiblesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var0 = function arg0, arg1() {
        _fun86976: for (var _fun86976_ip = 0;;) switch (_fun86976_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun86976_ip = 46;
                    continue _fun86976
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun86976_ip = 55;
                    continue _fun86976
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun86976_ip = 345;
                    continue _fun86976
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun86976_ip = 323;
                    continue _fun86976
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun86976_ip = 283;
                    continue _fun86976
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun86976_ip = 270;
                    continue _fun86976
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
                    _fun86976_ip = 163;
                    continue _fun86976
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun86976_ip = 179;
                    continue _fun86976
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun86976_ip = 249;
                    continue _fun86976
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun86976_ip = 249;
                    continue _fun86976
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun86976_ip = 234;
                    continue _fun86976
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun86976_ip = 247;
                    continue _fun86976
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun86976_ip = 265;
                continue _fun86976;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun86976_ip = 283;
                continue _fun86976;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun86976_ip = 323;
                    continue _fun86976
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
                    _fun86976_ip = 330;
                    continue _fun86976
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun86977: for (var _fun86977_ip = 0;;) switch (_fun86977_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun86977_ip = 56;
                                continue _fun86977
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
                            _fun86977_ip = 67;
                            continue _fun86977;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun86978: for (var _fun86978_ip = 0;;) switch (_fun86978_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun86978_ip = 23;
                    continue _fun86978
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun86978_ip = 33;
                    continue _fun86978
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
                    _fun86978_ip = 70;
                    continue _fun86978
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun86978_ip = 55;
                    continue _fun86978
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = var3.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot3 = var3;
    var4 = function arg0, arg1() {
        _fun86979: for (var _fun86979_ip = 0;;) switch (_fun86979_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 2;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun86979_ip = 78;
                    continue _fun86979
                }
            case 44:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.extractPriceByPurchaseTypes;
                var3 = var3.bind(var4)(var1, var6);
                return var3;
            case 78:
                var3 = _closure1_slot3;
                var3 = var3.MOBILE;
                if (!(var6 !== var3)) {
                    _fun86979_ip = 106;
                    continue _fun86979
                }
            case 92:
                var3 = _closure1_slot3;
                var3 = var3.MOBILE_PREMIUM_TIER_2;
                if (!(var6 === var3)) {
                    _fun86979_ip = 221;
                    continue _fun86979
                }
            case 106:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.getProduct;
                var5 = var1.googleSkuIds;
                var1 = null;
                var7 = var1 == var5;
                var2 = undefined;
                if (var7) {
                    _fun86979_ip = 153;
                    continue _fun86979
                }
            case 149:
                var2 = var5[var6];
            case 153:
                var2 = var3.bind(var4)(var2);
                var1 = var1 != var2;
                var0 = undefined;
                if (!var1) {
                    _fun86979_ip = 219;
                    continue _fun86979
                }
            case 167:
                var1 = {};
                var3 = var2.price;
                var1.amount = var3;
                var3 = var2.currencyCode;
                var1.currency = var3;
                var2 = var2.priceString;
                var1.priceString = var2;
                var2 = 0;
                var1.tax = var2;
                var2 = false;
                var1.taxInclusive = var2;
                var0 = var1;
            case 219:
                return var0;
            case 221:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var3 = function arg0() {
        _fun86980: for (var _fun86980_ip = 0;;) switch (_fun86980_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var7 = 3;
                var0 = var0[var7];
                var1 = undefined;
                var4 = var2.bind(var1)(var0);
                var3 = var4.getProduct;
                var9 = var6.googleSkuIds;
                var2 = null;
                var8 = var2 == var9;
                var0 = undefined;
                if (var8) {
                    _fun86980_ip = 65;
                    continue _fun86980
                }
            case 51:
                var8 = _closure1_slot3;
                var8 = var8.MOBILE;
                var0 = var9[var8];
            case 65:
                var0 = var3.bind(var4)(var0);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getProduct;
                var6 = var6.googleSkuIds;
                var7 = var2 == var6;
                var1 = undefined;
                if (var7) {
                    _fun86980_ip = 122;
                    continue _fun86980
                }
            case 108:
                var5 = _closure1_slot3;
                var5 = var5.MOBILE_PREMIUM_TIER_2;
                var1 = var6[var5];
            case 122:
                var1 = var3.bind(var4)(var1);
                var0 = var2 != var0;
                if (!var0) {
                    _fun86980_ip = 138;
                    continue _fun86980
                }
            case 134:
                var0 = var2 != var1;
            case 138:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var5 = function arg0() {
        var0 = arg0;
        var2 = var0.products;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot5;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var1 = var0.length;
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var _closure1_slot6 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/native/CollectiblesUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0, arg1, arg2) { // Environment: var1
        _fun86983: for (var _fun86983_ip = 0;;) switch (_fun86983_ip) {
            case 0:
                var0 = arg1;
                var2 = _closure1_slot3;
                var3 = arg2;
                if (var3) {
                    _fun86983_ip = 35;
                    continue _fun86983
                }
            case 16:
                if (var0) {
                    _fun86983_ip = 27;
                    continue _fun86983
                }
            case 19:
                var3 = var2.DEFAULT;
                _fun86983_ip = 33;
                continue _fun86983;
            case 27:
                var3 = var2.PREMIUM_TIER_2;
            case 33:
                _fun86983_ip = 55;
                continue _fun86983;
            case 35:
                if (var0) {
                    _fun86983_ip = 46;
                    continue _fun86983
                }
            case 38:
                var0 = var2.MOBILE;
                _fun86983_ip = 52;
                continue _fun86983;
            case 46:
                var0 = var2.MOBILE_PREMIUM_TIER_2;
            case 52:
                var3 = var0;
            case 55:
                var2 = _closure1_slot4;
                var4 = undefined;
                var0 = arg0;
                var2 = var2.bind(var4)(var0, var3);
                var5 = null;
                var3 = var5 == var2;
                var0 = null;
                if (var3) {
                    _fun86983_ip = 146;
                    continue _fun86983
                }
            case 81:
                var3 = var2.priceString;
                if (!(var5 == var3)) {
                    _fun86983_ip = 137;
                    continue _fun86983
                }
            case 91:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 1;
                var1 = var5[var1];
                var5 = var3.bind(var4)(var1);
                var4 = var5.formatPrice;
                var3 = var2.amount;
                var1 = var2.currency;
                var1 = var4.bind(var5)(var3, var1);
                _fun86983_ip = 143;
                continue _fun86983;
            case 137:
                var1 = var2.priceString;
            case 143:
                var0 = var1;
            case 146:
                return var0;
        }
    };
    var2.getFormattedPriceForCollectiblesProduct = var5;
    var2.extractPriceByPurchaseTypes = var4;
    var2.isGPlaySynced = var3;
    var3 = function(arg0) { // Environment: var1
        _fun86984: for (var _fun86984_ip = 0;;) switch (_fun86984_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun86984_ip = 92;
                    continue _fun86984
                }
            case 9:
                var0 = new Array(0);
                var2 = _closure1_slot7;
                var1 = var3.values;
                var1 = var1.bind(var3)();
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun86984_ip = 90;
                    continue _fun86984
                }
            case 48:
                var6 = var2.value;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)(var6);
                if (!var1) {
                    _fun86984_ip = 75;
                    continue _fun86984
                }
            case 65:
                var1 = var0.push;
                var1 = var1.bind(var0)(var6);
            case 75:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun86984_ip = 48;
                    continue _fun86984
                }
            case 90:
                return var0;
            case 92:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.filterGPlaySyncedCategories = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = arg0;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun86986: for (var _fun86986_ip = 0;;) switch (_fun86986_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.unpublishedAt;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun86986_ip = 56;
                        continue _fun86986
                    }
                case 18:
                    var3 = var1.unpublishedAt;
                    var2 = global;
                    var2 = var2.Date;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var4;
                    var2 = new var5[var2](var4);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var0 = var3 > var2;
                case 56:
                    var1 = var1.products;
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    if (!var0) {
                        _fun86986_ip = 79;
                        continue _fun86986
                    }
                case 76:
                    var0 = var1;
                case 79:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.filterHiddenCategories = var3;
    var1 = function() { // Environment: var1
        var0 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 5;
        var6 = var4[var2];
        var3 = undefined;
        var6 = var5.bind(var3)(var6);
        var6 = var6.OrbBadges;
        var6 = var6.ORB_PROFILE_BADGE;
        var0.id = var6;
        var2 = var4[var2];
        var2 = var5.bind(var3)(var2);
        var2 = var2.OrbBadges;
        var2 = var2.ORB_PROFILE_BADGE;
        var0.icon = var2;
        var2 = _closure1_slot1;
        var1 = 6;
        var1 = var4[var1];
        var1 = var2.bind(var3)(var1);
        var0.iconSrc = var1;
        var1 = '';
        var0.description = var1;
        var1 = true;
        var0.isPreviewMode = var1;
        return var0;
    };
    var2.createOrbProfileBadge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4602, 478, 4607, 4595, 11242, 11243, 2]);