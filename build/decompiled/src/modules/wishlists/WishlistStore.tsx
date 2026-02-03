// modules/wishlists/WishlistStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun87366: for (var _fun87366_ip = 0;;) switch (_fun87366_ip) {
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
            case 72: // try_end0
                _fun87366_ip = 76;
                continue _fun87366;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun87369: for (var _fun87369_ip = 0;;) switch (_fun87369_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot8;
                var0 = var2[var3];
                var1 = null;
                if (!(var0 == var1)) {
                    _fun87369_ip = 41;
                    continue _fun87369
                }
            case 20:
                var1 = {
                    'data': null,
                    'status': 'not_loaded'
                };
                var2[var3] = var1;
                var0 = var1;
            case 41:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun87371: for (var _fun87371_ip = 0;;) switch (_fun87371_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun87371_ip = 69;
                        continue _fun87371
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun87371_ip = 105;
                    continue _fun87371;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'get';
        var4.key = var0;
        var0 = function arg0() {
            _fun87372: for (var _fun87372_ip = 0;;) switch (_fun87372_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun87372_ip = 34;
                        continue _fun87372
                    }
                case 20:
                    var0 = {
                        'data': null,
                        'status': 'not_loaded'
                    };
                case 34:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getWishlist';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.data;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getWishlistItems';
        var4.key = var6;
        var6 = function arg0() {
            _fun87374: for (var _fun87374_ip = 0;;) switch (_fun87374_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var3 = var0.data;
                    var1 = null;
                    var2 = var1 == var3;
                    var0 = undefined;
                    if (var2) {
                        _fun87374_ip = 42;
                        continue _fun87374
                    }
                case 32:
                    var2 = var3.getSkuIds;
                    var0 = var2.bind(var3)();
                case 42:
                    if (!(var1 == var0)) {
                        _fun87374_ip = 50;
                        continue _fun87374
                    }
                case 46:
                    var0 = new Array(0);
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasSkuId';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun87375: for (var _fun87375_ip = 0;;) switch (_fun87375_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var4 = var0.data;
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun87375_ip = 46;
                        continue _fun87375
                    }
                case 32:
                    var3 = var4.hasSkuId;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
                case 46:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun87375_ip = 56;
                        continue _fun87375
                    }
                case 53:
                    var0 = var1;
                case 56:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getStatus';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.status;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.getStatus;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = 'fetching';
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasError';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.getStatus;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = 'error';
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.error;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getUpdatedAt';
        var4.key = var6;
        var5 = function arg0() {
            var2 = this;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.updatedAt;
            return var0;
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.wishlistId;
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        var2 = 'fetching';
        var1.status = var2;
        var1.error = var0;
        return var0;
    };
    var1.WISHLIST_FETCH_START = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.wishlistId;
        var3 = var0.wishlistData;
        var2 = var0.updatedAt;
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)(var4);
        var1.data = var3;
        var3 = 'success';
        var1.status = var3;
        var1.error = var0;
        var1.updatedAt = var2;
        return var0;
    };
    var1.WISHLIST_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.wishlistId;
        var2 = var0.error;
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var3 = 'error';
        var1.status = var3;
        var1.error = var2;
        return var0;
    };
    var1.WISHLIST_FETCH_FAILURE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.wishlistId;
        var2 = var0.wishlistData;
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var1.data = var2;
        var2 = 'success';
        var1.status = var2;
        var1.error = var0;
        return var0;
    };
    var1.WISHLIST_ADD_SKU_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.error;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.captureException;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.WISHLIST_ADD_SKU_FAILURE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.wishlistId;
        var2 = var0.wishlistData;
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var1.data = var2;
        var2 = 'success';
        var1.status = var2;
        var1.error = var0;
        return var0;
    };
    var1.WISHLIST_REMOVE_SKU_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.error;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.captureException;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.WISHLIST_REMOVE_SKU_FAILURE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.wishlistId;
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        var2 = 'success';
        var1.status = var2;
        var1.error = var0;
        return var0;
    };
    var1.WISHLIST_UPDATE_VISIBILITY_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.error;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.captureException;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.WISHLIST_UPDATE_VISIBILITY_FAILURE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.wishlistId;
        var2 = var0.newWishlistData;
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var1.data = var2;
        return var0;
    };
    var1.WISHLIST_REORDER_START = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.wishlistId;
        var2 = var0.wishlistData;
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var1.data = var2;
        var2 = 'success';
        var1.status = var2;
        var1.error = var0;
        return var0;
    };
    var1.WISHLIST_REORDER_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.wishlistId;
        var3 = var0.error;
        var2 = _closure1_slot10;
        var0 = undefined;
        var2 = var2.bind(var0)(var4);
        var2.updatedAt = var0;
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 5;
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.captureException;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.WISHLIST_REORDER_FAILURE = var8;
    var3 = function arg0() {
        _fun87393: for (var _fun87393_ip = 0;;) switch (_fun87393_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.recipientId;
                var6 = var0.skuId;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = var2.default;
                var2 = var3.getFirstWishlistId;
                var2 = var2.bind(var3)(var4);
                var7 = null;
                var3 = var7 != var2;
                if (!var3) {
                    _fun87393_ip = 77;
                    continue _fun87393
                }
            case 65:
                var4 = _closure1_slot8;
                var4 = var4[var2];
                var3 = var7 != var4;
            case 77:
                var5 = undefined;
                if (!var3) {
                    _fun87393_ip = 102;
                    continue _fun87393
                }
            case 82:
                var4 = _closure1_slot8;
                var4 = var4[var2];
                var4 = var4.data;
                var3 = var7 != var4;
                var5 = var4;
            case 102:
                if (!var3) {
                    _fun87393_ip = 116;
                    continue _fun87393
                }
            case 105:
                var4 = var5.hasSkuId;
                var3 = var4.bind(var5)(var6);
            case 116:
                if (!var3) {
                    _fun87393_ip = 133;
                    continue _fun87393
                }
            case 119:
                var1 = _closure1_slot8;
                var1 = var1[var2];
                var1.updatedAt = var0;
            case 133:
                return var0;
        }
    };
    var1.WISHLIST_ITEM_PURCHASED = var3;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/wishlists/WishlistStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1207, 4660, 566, 806, 2]);