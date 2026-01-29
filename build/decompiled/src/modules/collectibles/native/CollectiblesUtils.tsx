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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun87304: for (var _fun87304_ip = 0;;) switch (_fun87304_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87304_ip = 45;
                    continue _fun87304
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun87304_ip = 54;
                    continue _fun87304
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun87304_ip = 344;
                    continue _fun87304
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87304_ip = 322;
                    continue _fun87304
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87304_ip = 282;
                    continue _fun87304
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87304_ip = 269;
                    continue _fun87304
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
                    _fun87304_ip = 162;
                    continue _fun87304
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun87304_ip = 178;
                    continue _fun87304
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87304_ip = 248;
                    continue _fun87304
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87304_ip = 248;
                    continue _fun87304
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87304_ip = 233;
                    continue _fun87304
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87304_ip = 246;
                    continue _fun87304
                }
            case 233:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun87304_ip = 264;
                continue _fun87304;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun87304_ip = 282;
                continue _fun87304;
            case 269:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun87304_ip = 322;
                    continue _fun87304
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
                    _fun87304_ip = 329;
                    continue _fun87304
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87305: for (var _fun87305_ip = 0;;) switch (_fun87305_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87305_ip = 56;
                                continue _fun87305
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
                            _fun87305_ip = 67;
                            continue _fun87305;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun87306: for (var _fun87306_ip = 0;;) switch (_fun87306_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87306_ip = 23;
                    continue _fun87306
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87306_ip = 33;
                    continue _fun87306
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
                    _fun87306_ip = 70;
                    continue _fun87306
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87306_ip = 55;
                    continue _fun87306
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
    var4 = function(arg0, arg1) { // Original name: extractPriceByPurchaseTypes, environment: var1
        _fun87307: for (var _fun87307_ip = 0;;) switch (_fun87307_ip) {
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
                    _fun87307_ip = 78;
                    continue _fun87307
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
                    _fun87307_ip = 106;
                    continue _fun87307
                }
            case 92:
                var3 = _closure1_slot3;
                var3 = var3.MOBILE_PREMIUM_TIER_2;
                if (!(var6 === var3)) {
                    _fun87307_ip = 221;
                    continue _fun87307
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
                    _fun87307_ip = 153;
                    continue _fun87307
                }
            case 149:
                var2 = var5[var6];
            case 153:
                var2 = var3.bind(var4)(var2);
                var1 = var1 != var2;
                var0 = undefined;
                if (!var1) {
                    _fun87307_ip = 219;
                    continue _fun87307
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
    var3 = function(arg0) { // Original name: isGPlaySynced, environment: var1
        _fun87308: for (var _fun87308_ip = 0;;) switch (_fun87308_ip) {
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
                    _fun87308_ip = 65;
                    continue _fun87308
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
                    _fun87308_ip = 122;
                    continue _fun87308
                }
            case 108:
                var5 = _closure1_slot3;
                var5 = var5.MOBILE_PREMIUM_TIER_2;
                var1 = var6[var5];
            case 122:
                var1 = var3.bind(var4)(var1);
                var0 = var2 != var0;
                if (!var0) {
                    _fun87308_ip = 138;
                    continue _fun87308
                }
            case 134:
                var0 = var2 != var1;
            case 138:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var5 = function(arg0) { // Original name: hasAtLeastOneGPlaySynced, environment: var1
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
        _fun87311: for (var _fun87311_ip = 0;;) switch (_fun87311_ip) {
            case 0:
                var0 = arg1;
                var2 = _closure1_slot3;
                var3 = arg2;
                if (var3) {
                    _fun87311_ip = 35;
                    continue _fun87311
                }
            case 16:
                if (var0) {
                    _fun87311_ip = 27;
                    continue _fun87311
                }
            case 19:
                var3 = var2.DEFAULT;
                _fun87311_ip = 33;
                continue _fun87311;
            case 27:
                var3 = var2.PREMIUM_TIER_2;
            case 33:
                _fun87311_ip = 55;
                continue _fun87311;
            case 35:
                if (var0) {
                    _fun87311_ip = 46;
                    continue _fun87311
                }
            case 38:
                var0 = var2.MOBILE;
                _fun87311_ip = 52;
                continue _fun87311;
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
                    _fun87311_ip = 146;
                    continue _fun87311
                }
            case 81:
                var3 = var2.priceString;
                if (!(var5 == var3)) {
                    _fun87311_ip = 137;
                    continue _fun87311
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
                _fun87311_ip = 143;
                continue _fun87311;
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
        _fun87312: for (var _fun87312_ip = 0;;) switch (_fun87312_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun87312_ip = 92;
                    continue _fun87312
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
                    _fun87312_ip = 90;
                    continue _fun87312
                }
            case 48:
                var6 = var2.value;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)(var6);
                if (!var1) {
                    _fun87312_ip = 75;
                    continue _fun87312
                }
            case 65:
                var1 = var0.push;
                var1 = var1.bind(var0)(var6);
            case 75:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun87312_ip = 48;
                    continue _fun87312
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
            _fun87314: for (var _fun87314_ip = 0;;) switch (_fun87314_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.unpublishedAt;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun87314_ip = 56;
                        continue _fun87314
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
                        _fun87314_ip = 79;
                        continue _fun87314
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4563, 478, 4568, 4556, 11228, 11229, 2]);