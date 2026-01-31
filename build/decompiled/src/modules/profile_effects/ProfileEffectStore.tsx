// modules/profile_effects/ProfileEffectStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun50758: for (var _fun50758_ip = 0;;) switch (_fun50758_ip) {
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
                _fun50758_ip = 74;
                continue _fun50758;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun50761: for (var _fun50761_ip = 0;;) switch (_fun50761_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun50761_ip = 46;
                    continue _fun50761
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun50761_ip = 55;
                    continue _fun50761
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun50761_ip = 343;
                    continue _fun50761
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun50761_ip = 323;
                    continue _fun50761
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun50761_ip = 283;
                    continue _fun50761
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun50761_ip = 270;
                    continue _fun50761
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
                    _fun50761_ip = 163;
                    continue _fun50761
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun50761_ip = 179;
                    continue _fun50761
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun50761_ip = 249;
                    continue _fun50761
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun50761_ip = 249;
                    continue _fun50761
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun50761_ip = 234;
                    continue _fun50761
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun50761_ip = 247;
                    continue _fun50761
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun50761_ip = 265;
                continue _fun50761;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun50761_ip = 283;
                continue _fun50761;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun50761_ip = 323;
                    continue _fun50761
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
                    _fun50761_ip = 330;
                    continue _fun50761
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun50762: for (var _fun50762_ip = 0;;) switch (_fun50762_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun50762_ip = 56;
                                continue _fun50762
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
                            _fun50762_ip = 67;
                            continue _fun50762;
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
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun50763: for (var _fun50763_ip = 0;;) switch (_fun50763_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun50763_ip = 23;
                    continue _fun50763
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun50763_ip = 33;
                    continue _fun50763
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
                    _fun50763_ip = 70;
                    continue _fun50763
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun50763_ip = 55;
                    continue _fun50763
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.isProfileEffectRecord;
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = function(arg0, arg1) { // Original name: handleProfileEffectUpdate, environment: var3
        _fun50764: for (var _fun50764_ip = 0;;) switch (_fun50764_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 6;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.isEqual;
                var0 = _closure1_slot8;
                var0 = var0[var3];
                var0 = var4.bind(var5)(var0, var2);
                var0 = !var0;
                if (!var0) {
                    _fun50764_ip = 67;
                    continue _fun50764
                }
            case 57:
                var1 = _closure1_slot8;
                var1[var3] = var2;
                var0 = true;
            case 67:
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function(arg0) { // Original name: handleProductOrPurchaseUpdate, environment: var3
        _fun50765: for (var _fun50765_ip = 0;;) switch (_fun50765_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = 7;
                var1 = var1[var4];
                var6 = undefined;
                var1 = var3.bind(var6)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var2 !== var1)) {
                    _fun50765_ip = 90;
                    continue _fun50765
                }
            case 49:
                var2 = var0.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var3.bind(var6)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.VARIANTS_GROUP;
                if (!(var2 === var1)) {
                    _fun50765_ip = 302;
                    continue _fun50765
                }
            case 90:
                var11 = var0.items;
                var2 = new Array(0);
                var10 = 0;
                var12 = var2;
                var1 = arraySpread(var12, var11, var10);
                var8 = var0.variants;
                var3 = null;
                var4 = var3 == var8;
                var0 = undefined;
                if (var4) {
                    _fun50765_ip = 143;
                    continue _fun50765
                }
            case 125:
                var5 = var8.flatMap;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.items;
                    return var0;
                };
                var0 = var5.bind(var8)(var4);
            case 143:
                if (!(var3 == var0)) {
                    _fun50765_ip = 151;
                    continue _fun50765
                }
            case 147:
                var0 = new Array(0);
            case 151:
                var12 = var2;
                var11 = var0;
                var10 = var1;
                var0 = arraySpread(var12, var11, var10);
                var1 = var2.filter;
                var0 = _closure1_slot7;
                var4 = var1.bind(var2)(var0);
                var1 = _closure1_slot14;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var3[var0];
                var3 = var2.bind(var6)(var0);
                var2 = var3.uniqBy;
                var0 = 'skuId';
                var0 = var2.bind(var3)(var4, var0);
                var5 = var1.bind(var6)(var0);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var3 = false;
                var0 = false;
                if (var1) {
                    _fun50765_ip = 300;
                    continue _fun50765
                }
            case 239:
                var1 = var2.value;
                var9 = {};
                var8 = var1.skuId;
                var9.skuId = var8;
                var9.config = var1;
                var8 = _closure1_slot9;
                var1 = var1.skuId;
                var1 = var8.bind(var6)(var1, var9);
                if (!var1) {
                    _fun50765_ip = 282;
                    continue _fun50765
                }
            case 280:
                var3 = true;
            case 282:
                var9 = var5.bind(var6)();
                var1 = var9.done;
                var2 = var9;
                var0 = var3;
                if (!var1) {
                    _fun50765_ip = 239;
                    continue _fun50765
                }
            case 300:
                return var0;
            case 302:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function(arg0) { // Original name: handleCategoriesUpdate, environment: var3
        var3 = arg0;
        var1 = false;
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.products;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun50769: for (var _fun50769_ip = 0;;) switch (_fun50769_ip) {
                    case 0:
                        var2 = _closure1_slot10;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        if (!var1) {
                            _fun50769_ip = 29;
                            continue _fun50769
                        }
                    case 20:
                        var1 = true;
                        _closure2_slot0 = var1;
                    case 29:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var _closure1_slot11 = var1;
    var1 = function(arg0) { // Original name: handlePurchasesUpdate, environment: var3
        var3 = arg0;
        var1 = false;
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun50771: for (var _fun50771_ip = 0;;) switch (_fun50771_ip) {
                case 0:
                    var2 = _closure1_slot10;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    if (!var1) {
                        _fun50771_ip = 29;
                        continue _fun50771
                    }
                case 20:
                    var1 = true;
                    _closure2_slot0 = var1;
                case 29:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var _closure1_slot12 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ProfileEffectStore, environment: var5
            _fun50773: for (var _fun50773_ip = 0;;) switch (_fun50773_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50773_ip = 69;
                        continue _fun50773
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50773_ip = 105;
                    continue _fun50773;
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
        var0 = 'getAllProfileEffects';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getProfileEffect';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun50775: for (var _fun50775_ip = 0;;) switch (_fun50775_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 != var2;
                    var0 = undefined;
                    if (!var1) {
                        _fun50775_ip = 25;
                        continue _fun50775
                    }
                case 14:
                    var1 = _closure1_slot8;
                    var0 = var1[var2];
                case 25:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ProfileEffectStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: COLLECTIBLES_PRODUCT_FETCH_SUCCESS, environment: var3
        var0 = arg0;
        var2 = var0.product;
        var1 = _closure1_slot10;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.COLLECTIBLES_PRODUCT_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: COLLECTIBLES_CATEGORIES_FETCH_SUCCESS, environment: var3
        var0 = arg0;
        var0 = var0.categories;
        var2 = _closure1_slot11;
        var1 = var0.categories;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1.COLLECTIBLES_CATEGORIES_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS, environment: var3
        var0 = arg0;
        var0 = var0.shopHome;
        var2 = _closure1_slot11;
        var1 = var0.categories;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var1.COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: COLLECTIBLES_PURCHASES_FETCH_SUCCESS, environment: var3
        var0 = arg0;
        var2 = var0.purchases;
        var1 = _closure1_slot12;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.COLLECTIBLES_PURCHASES_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: COLLECTIBLES_CLAIM_SUCCESS, environment: var3
        _fun50780: for (var _fun50780_ip = 0;;) switch (_fun50780_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.purchases;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun50780_ip = 32;
                    continue _fun50780
                }
            case 18:
                var2 = _closure1_slot12;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 32:
                return var0;
        }
    };
    var1.COLLECTIBLES_CLAIM_SUCCESS = var8;
    var3 = function() { // Original name: LOGOUT, environment: var3
        var0 = {};
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_effects/ProfileEffectStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4568, 22, 3452, 566, 806, 2]);