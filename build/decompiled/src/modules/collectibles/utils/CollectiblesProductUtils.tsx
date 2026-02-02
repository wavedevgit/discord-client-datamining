// modules/collectibles/utils/CollectiblesProductUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var9[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var9[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var9[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var3.ORB_RENTAL_PRICE;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var9[var3];
    var3 = var8.bind(var0)(var3);
    var4 = var3.CurrencyCodes;
    var _closure1_slot5 = var4;
    var3 = var3.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot6 = var3;
    var6 = function arg0() {
        _fun42205: for (var _fun42205_ip = 0;;) switch (_fun42205_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.product;
                var0 = var1.isPremiumUser;
                var3 = var1.isRental;
                if (var3) {
                    _fun42205_ip = 157;
                    continue _fun42205
                }
            case 30:
                var2 = var2.prices;
                var3 = _closure1_slot6;
                if (var0) {
                    _fun42205_ip = 51;
                    continue _fun42205
                }
            case 43:
                var0 = var3.DEFAULT;
                _fun42205_ip = 57;
                continue _fun42205;
            case 51:
                var0 = var3.PREMIUM_TIER_2;
            case 57:
                var2 = var2[var0];
                var0 = null;
                var5 = var0 == var2;
                var4 = undefined;
                if (var5) {
                    _fun42205_ip = 118;
                    continue _fun42205
                }
            case 72:
                var2 = var2.countryPrices;
                var5 = var0 == var2;
                var4 = undefined;
                if (var5) {
                    _fun42205_ip = 118;
                    continue _fun42205
                }
            case 87:
                var6 = var2.prices;
                var2 = var0 == var6;
                var4 = undefined;
                if (var2) {
                    _fun42205_ip = 118;
                    continue _fun42205
                }
            case 102:
                var5 = var6.slice;
                var3 = 0;
                var2 = 2;
                var4 = var5.bind(var6)(var3, var2);
            case 118:
                if (!(var0 == var4)) {
                    _fun42205_ip = 126;
                    continue _fun42205
                }
            case 122:
                var4 = new Array(0);
            case 126:
                var3 = var4.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.currency;
                    var0 = _closure1_slot5;
                    var0 = var0.DISCORD_ORB;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var0 != var2;
                var0 = null;
                if (!var3) {
                    _fun42205_ip = 155;
                    continue _fun42205
                }
            case 152:
                var0 = var2;
            case 155:
                _fun42205_ip = 161;
                continue _fun42205;
            case 157:
                var0 = _closure1_slot4;
            case 161:
                return var0;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function arg0() {
        _fun42207: for (var _fun42207_ip = 0;;) switch (_fun42207_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.product;
                var0 = var0.isPremiumUser;
                var1 = var1.prices;
                var2 = _closure1_slot6;
                if (var0) {
                    _fun42207_ip = 39;
                    continue _fun42207
                }
            case 31:
                var0 = var2.MOBILE;
                _fun42207_ip = 45;
                continue _fun42207;
            case 39:
                var0 = var2.MOBILE_PREMIUM_TIER_2;
            case 45:
                var1 = var1[var0];
                var0 = null;
                var4 = var0 == var1;
                var3 = undefined;
                if (var4) {
                    _fun42207_ip = 106;
                    continue _fun42207
                }
            case 60:
                var1 = var1.countryPrices;
                var4 = var0 == var1;
                var3 = undefined;
                if (var4) {
                    _fun42207_ip = 106;
                    continue _fun42207
                }
            case 75:
                var5 = var1.prices;
                var1 = var0 == var5;
                var3 = undefined;
                if (var1) {
                    _fun42207_ip = 106;
                    continue _fun42207
                }
            case 90:
                var4 = var5.slice;
                var2 = 0;
                var1 = 2;
                var3 = var4.bind(var5)(var2, var1);
            case 106:
                if (!(var0 == var3)) {
                    _fun42207_ip = 114;
                    continue _fun42207
                }
            case 110:
                var3 = new Array(0);
            case 114:
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.currency;
                    var0 = _closure1_slot5;
                    var0 = var0.DISCORD_ORB;
                    var0 = var1 !== var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun42207_ip = 143;
                    continue _fun42207
                }
            case 140:
                var0 = var1;
            case 143:
                return var0;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function arg0() {
        var2 = _closure1_slot7;
        var1 = {
            'product': null,
            'isPremiumUser': false,
            'isRental': false
        };
        var0 = arg0;
        var1.product = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot9 = var4;
    var3 = function arg0() {
        var2 = _closure1_slot8;
        var1 = {};
        var0 = arg0;
        var1.product = var0;
        var0 = false;
        var1.isPremiumUser = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot10 = var3;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/collectibles/utils/CollectiblesProductUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.getProductOrbPrice = var6;
    var2.getProductFiatPrice = var5;
    var2.getHasOrbPrice = var4;
    var2.getHasNonOrbPrice = var3;
    var3 = function(arg0) { // Environment: var1
        _fun42211: for (var _fun42211_ip = 0;;) switch (_fun42211_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun42211_ip = 40;
                    continue _fun42211
                }
            case 9:
                var0 = _closure1_slot9;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                var1 = _closure1_slot10;
                var1 = var1.bind(var2)(var3);
                if (!var0) {
                    _fun42211_ip = 38;
                    continue _fun42211
                }
            case 35:
                var0 = !var1;
            case 38:
                return var0;
            case 40:
                var0 = false;
                return var0;
        }
    };
    var2.isOrbsExclusiveProduct = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = arg0;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun42213: for (var _fun42213_ip = 0;;) switch (_fun42213_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot9;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3);
                    var1 = _closure1_slot10;
                    var1 = var1.bind(var2)(var3);
                    if (!var0) {
                        _fun42213_ip = 32;
                        continue _fun42213
                    }
                case 29:
                    var0 = var1;
                case 32:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getProductsWithOrbsPrice = var3;
    var3 = function(arg0) { // Environment: var1
        _fun42214: for (var _fun42214_ip = 0;;) switch (_fun42214_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 4;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.CollectiblesItemType;
                var0 = var0.VARIANTS_GROUP;
                var0 = var2 === var0;
                if (!var0) {
                    _fun42214_ip = 64;
                    continue _fun42214
                }
            case 52:
                var3 = var1.variants;
                var2 = null;
                var0 = var2 != var3;
            case 64:
                if (!var0) {
                    _fun42214_ip = 84;
                    continue _fun42214
                }
            case 67:
                var1 = var1.variants;
                var2 = var1.length;
                var1 = 0;
                var0 = var1 !== var2;
            case 84:
                return var0;
        }
    };
    var2.getIsVariantProduct = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun42215: for (var _fun42215_ip = 0;;) switch (_fun42215_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var4 = var3.type;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var0 = var5[var0];
                var8 = undefined;
                var0 = var2.bind(var8)(var0);
                var0 = var0.CollectiblesItemType;
                var2 = var0.VARIANTS_GROUP;
                var0 = var3;
                if (!(var4 === var2)) {
                    _fun42215_ip = 123;
                    continue _fun42215
                }
            case 55:
                var2 = null;
                var0 = var3;
                if (!(var2 != var7)) {
                    _fun42215_ip = 123;
                    continue _fun42215
                }
            case 64:
                var5 = _closure1_slot3;
                var4 = var5.getProduct;
                var6 = var3.variants;
                var9 = var2 == var6;
                var1 = undefined;
                if (var9) {
                    _fun42215_ip = 108;
                    continue _fun42215
                }
            case 89:
                var6 = var6[var7];
                var7 = var2 == var6;
                var1 = undefined;
                if (var7) {
                    _fun42215_ip = 108;
                    continue _fun42215
                }
            case 102:
                var1 = var6.skuId;
            case 108:
                var1 = var4.bind(var5)(var1);
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun42215_ip = 123;
                    continue _fun42215
                }
            case 120:
                var0 = var1;
            case 123:
                return var0;
        }
    };
    var2.getSelectedProduct = var3;
    var1 = function(arg0) { // Environment: var1
        _fun42216: for (var _fun42216_ip = 0;;) switch (_fun42216_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun42216_ip = 142;
                    continue _fun42216
                }
            case 12:
                var3 = var1.type;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 4;
                var2 = var6[var2];
                var6 = undefined;
                var2 = var5.bind(var6)(var2);
                var2 = var2.CollectiblesItemType;
                var2 = var2.VARIANTS_GROUP;
                if (!(var3 !== var2)) {
                    _fun42216_ip = 65;
                    continue _fun42216
                }
            case 58:
                var2 = var1.type;
                return var2;
            case 65:
                var2 = var1.variants;
                if (!(var0 != var2)) {
                    _fun42216_ip = 140;
                    continue _fun42216
                }
            case 75:
                var2 = var1.variants;
                var2 = var2.length;
                var3 = 0;
                if (!(var3 !== var2)) {
                    _fun42216_ip = 140;
                    continue _fun42216
                }
            case 92:
                var1 = var1.variants;
                var2 = var1[var3];
                var5 = var0 == var2;
                var1 = null;
                if (var5) {
                    _fun42216_ip = 138;
                    continue _fun42216
                }
            case 111:
                var5 = _closure1_slot2;
                var4 = var2.items;
                var2 = 1;
                var2 = var5.bind(var6)(var4, var2);
                var2 = var2[var3];
                var1 = var2.type;
            case 138:
                return var1;
            case 140:
                return var0;
            case 142:
                return var0;
        }
    };
    var2.getProductType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4564, 3244, 660, 3454, 2]);