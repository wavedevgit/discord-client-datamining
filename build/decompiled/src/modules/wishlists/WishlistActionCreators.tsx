// modules/wishlists/WishlistActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var1 = var4.bind(var0)(var1);
    var6 = var1.AnalyticEvents;
    var _closure1_slot7 = var6;
    var1 = var1.Endpoints;
    var _closure1_slot8 = var1;
    var1 = {};
    var6 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun87433: for (var _fun87433_ip = 0;;) switch (_fun87433_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87433_ip = 491;
                            continue _fun87433
                        }
                    case 10:
                        var1 = undefined;
                        var7 = undefined;
                        var4 = undefined;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 5;
                        var3 = var3[var2];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var9 = 'WISHLIST_FETCH_START';
                        var3.type = var9;
                        var10 = _closure2_slot0;
                        var3.wishlistId = var10;
                        var3 = var5.bind(var6)(var3);
                    case 73: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 6;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var10 = var3.HTTP;
                        var5 = var10.get;
                        var3 = {};
                        var12 = _closure1_slot8;
                        var11 = var12.USER_WISHLIST;
                        var6 = _closure2_slot0;
                        var6 = var11.bind(var12)(var6);
                        var3.url = var6;
                        var11 = {};
                        var12 = _closure2_slot2;
                        var6 = null;
                        if (!(var6 == var12)) {
                            _fun87433_ip = 174;
                            continue _fun87433
                        }
                    case 140:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var12 = 7;
                        var12 = var14[var12];
                        var12 = var13.bind(var1)(var12);
                        var12 = var12.WishlistFetchSource;
                        var12 = var12.USER_PROFILE;
                        _fun87433_ip = 178;
                        continue _fun87433;
                    case 174:
                        var12 = _closure2_slot2;
                    case 178:
                        var11.source = var12;
                        var3.query = var11;
                        var11 = true;
                        var3.rejectWithError = var11;
                        var3 = var5.bind(var10)(var3);
                        SaveGenerator(address = 202);
                    case 200:
                        return var3;
                    case 202:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun87433_ip = 363;
                            continue _fun87433
                        }
                    case 211:
                        var4 = var3;
                        var5 = var3.body;
                        var7 = var5;
                        var10 = var6 == var5;
                        var5 = undefined;
                        if (var10) {
                            _fun87433_ip = 237;
                            continue _fun87433
                        }
                    case 231:
                        var5 = var7.wishlist_items;
                    case 237:
                        if (!(var6 == var5)) {
                            _fun87433_ip = 278;
                            continue _fun87433
                        }
                    case 241:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 8;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.captureMessage;
                        var5 = 'Wishlist items not found in response';
                        var5 = var6.bind(var7)(var5);
                    case 278:
                        var6 = _closure1_slot6;
                        var5 = var6.fromServer;
                        var4 = var4.body;
                        var7 = var5.bind(var6)(var4);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var2];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var10 = 'WISHLIST_FETCH_SUCCESS';
                        var4.type = var10;
                        var10 = _closure2_slot0;
                        var4.wishlistId = var10;
                        var4.wishlistData = var7;
                        var7 = _closure2_slot1;
                        var4.updatedAt = var7;
                        var4 = var5.bind(var6)(var4);
                    case 358: // try_end0
                        _fun87433_ip = 488;
                        continue _fun87433;
                    case 363:
                        return var3;
                    case 366: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = var5[var2];
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var10 = 'WISHLIST_FETCH_FAILURE';
                        var2.type = var10;
                        var9 = _closure2_slot0;
                        var2.wishlistId = var9;
                        var9 = _closure1_slot0;
                        var8 = 9;
                        var8 = var5[var8];
                        var8 = var9.bind(var1)(var8);
                        var8 = var8.APIError;
                        var9 = var8.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var8
                            }
                        });
                        var16 = var9;
                        var15 = var4;
                        var8 = new var16[var8](var15, var14);
                        var8 = var8 instanceof Object ? var8 : var9;
                        var2.error = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = 8;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
                    case 488:
                        return var1;
                    case 491:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchWishlist = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun87436: for (var _fun87436_ip = 0;;) switch (_fun87436_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87436_ip = 532;
                            continue _fun87436
                        }
                    case 10:
                        var7 = undefined;
                        var6 = undefined;
                        var2 = undefined;
                        var5 = null;
                        var4 = null;
                    case 20: // try_start_1
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 6;
                        var1 = var9[var1];
                        var1 = var8.bind(var7)(var1);
                        var9 = var1.HTTP;
                        var8 = var9.post;
                        var1 = {};
                        var10 = _closure1_slot8;
                        var10 = var10.USER_WISHLIST_ITEMS;
                        var1.url = var10;
                        var10 = {};
                        var12 = _closure2_slot0;
                        var10.sku_id = var12;
                        var1.body = var10;
                        var10 = true;
                        var1.rejectWithError = var10;
                        var1 = var8.bind(var9)(var1);
                        SaveGenerator(address = 103);
                    case 101:
                        return var1;
                    case 103:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 8);
                        if (var8) {
                            _fun87436_ip = 419;
                            continue _fun87436
                        }
                    case 112:
                        var4 = var1;
                        var10 = _closure1_slot6;
                        var9 = var10.fromServer;
                        var8 = var1.body;
                        var12 = var9.bind(var10)(var8);
                        var6 = var12;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var8 = 5;
                        var8 = var10[var8];
                        var10 = var9.bind(var7)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var13 = 'WISHLIST_ADD_SKU_SUCCESS';
                        var8.type = var13;
                        var13 = var12.id;
                        var8.wishlistId = var13;
                        var13 = _closure2_slot0;
                        var8.skuId = var13;
                        var8.wishlistData = var12;
                        var8 = var9.bind(var10)(var8);
                        var8 = _closure2_slot1;
                        if (!(var5 != var8)) {
                            _fun87436_ip = 312;
                            continue _fun87436
                        }
                    case 210: // try_start_0
                        var13 = var6;
                        var6 = var13.getSkuIds;
                        var12 = var6.bind(var13)();
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 10;
                        var6 = var9[var6];
                        var10 = var8.bind(var7)(var6);
                        var9 = var10.track;
                        var6 = _closure1_slot7;
                        var8 = var6.WISHLIST_UPDATED;
                        var6 = {};
                        var13 = var13.id;
                        var6.wishlist_id = var13;
                        var13 = 'ADD';
                        var6.action_type = var13;
                        var13 = _closure2_slot0;
                        var6.sku_id = var13;
                        var6.sku_ids = var12;
                        var11 = _closure2_slot1;
                        var6.location_stack = var11;
                        var6 = var9.bind(var10)(var8, var6);
                    case 308: // try_end0
                        _fun87436_ip = 312;
                        continue _fun87436;
                    case 310: // catch_target0
                        CatchBlockStart(arg_register = 6);
                    case 312: // try_end1
                        if (!(var5 != var4)) {
                            _fun87436_ip = 416;
                            continue _fun87436
                        }
                    case 316:
                        var6 = _closure1_slot5;
                        var4 = var6.getCurrentUser;
                        var4 = var4.bind(var6)();
                        var2 = var4;
                        if (!(var5 != var4)) {
                            _fun87436_ip = 416;
                            continue _fun87436
                        }
                    case 336:
                        var8 = _closure1_slot4;
                        var6 = var8.getFirstWishlistId;
                        var4 = var2;
                        var4 = var4.id;
                        var4 = var6.bind(var8)(var4);
                        if (!(var5 == var4)) {
                            _fun87436_ip = 416;
                            continue _fun87436
                        }
                    case 363: // try_start_2
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 11;
                        var3 = var5[var3];
                        var4 = var4.bind(var7)(var3);
                        var3 = var4.fetchProfile;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 403);
                    case 401:
                        return var2;
                    case 403:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun87436_ip = 411;
                            continue _fun87436
                        }
                    case 409: // try_end2
                        _fun87436_ip = 416;
                        continue _fun87436;
                    case 411:
                        return var2;
                    case 414: // catch_target2
                        CatchBlockStart(arg_register = 2);
                    case 416:
                        return var7;
                    case 419:
                        return var1;
                    case 422: // catch_target1
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 5;
                        var2 = var8[var2];
                        var4 = var3.bind(var7)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'WISHLIST_ADD_SKU_FAILURE';
                        var2.type = var6;
                        var6 = _closure2_slot0;
                        var2.skuId = var6;
                        var6 = _closure1_slot0;
                        var5 = 9;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.APIError;
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var5
                            }
                        });
                        var16 = var6;
                        var15 = var1;
                        var5 = new var16[var5](var15, var14);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 532:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.addSkuToWishlist = var6;
    var6 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun87439: for (var _fun87439_ip = 0;;) switch (_fun87439_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87439_ip = 428;
                            continue _fun87439
                        }
                    case 10:
                        var7 = undefined;
                        var3 = undefined;
                    case 14: // try_start_1
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 6;
                        var1 = var5[var1];
                        var1 = var4.bind(var7)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.del;
                        var1 = {};
                        var11 = _closure1_slot8;
                        var10 = var11.USER_WISHLIST_ITEM;
                        var9 = _closure2_slot0;
                        var8 = _closure2_slot1;
                        var8 = var10.bind(var11)(var9, var8);
                        var1.url = var8;
                        var8 = true;
                        var1.rejectWithError = var8;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 96);
                    case 94:
                        return var1;
                    case 96:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun87439_ip = 306;
                            continue _fun87439
                        }
                    case 105:
                        var8 = _closure1_slot6;
                        var5 = var8.fromServer;
                        var4 = var1.body;
                        var9 = var5.bind(var8)(var4);
                        var3 = var9;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 5;
                        var4 = var8[var4];
                        var8 = var5.bind(var7)(var4);
                        var5 = var8.dispatch;
                        var4 = {};
                        var10 = 'WISHLIST_REMOVE_SKU_SUCCESS';
                        var4.type = var10;
                        var10 = _closure2_slot0;
                        var4.wishlistId = var10;
                        var10 = _closure2_slot1;
                        var4.skuId = var10;
                        var4.wishlistData = var9;
                        var4 = var5.bind(var8)(var4);
                        var5 = _closure2_slot2;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun87439_ip = 303;
                            continue _fun87439
                        }
                    case 201: // try_start_0
                        var9 = var3;
                        var3 = var9.getSkuIds;
                        var8 = var3.bind(var9)();
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var3 = var5[var3];
                        var5 = var4.bind(var7)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot7;
                        var3 = var2.WISHLIST_UPDATED;
                        var2 = {};
                        var9 = var9.id;
                        var2.wishlist_id = var9;
                        var9 = 'REMOVE';
                        var2.action_type = var9;
                        var9 = _closure2_slot1;
                        var2.sku_id = var9;
                        var2.sku_ids = var8;
                        var6 = _closure2_slot2;
                        var2.location_stack = var6;
                        var2 = var4.bind(var5)(var3, var2);
                    case 299: // try_end0
                        _fun87439_ip = 303;
                        continue _fun87439;
                    case 301: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 303: // try_end1
                        return var7;
                    case 306:
                        return var1;
                    case 309: // catch_target1
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 5;
                        var2 = var8[var2];
                        var4 = var3.bind(var7)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'WISHLIST_REMOVE_SKU_FAILURE';
                        var2.type = var6;
                        var9 = _closure2_slot0;
                        var2.wishlistId = var9;
                        var6 = _closure2_slot1;
                        var2.skuId = var6;
                        var6 = _closure1_slot0;
                        var5 = 9;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.APIError;
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var5
                            }
                        });
                        var14 = var6;
                        var13 = var1;
                        var5 = new var14[var5](var13, var12);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 428:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.removeSkuFromWishlist = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun87442: for (var _fun87442_ip = 0;;) switch (_fun87442_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87442_ip = 363;
                            continue _fun87442
                        }
                    case 10:
                        var7 = undefined;
                        var2 = undefined;
                        var3 = _closure1_slot5;
                        var1 = var3.getCurrentUser;
                        var3 = var1.bind(var3)();
                        var2 = var3;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun87442_ip = 250;
                            continue _fun87442
                        }
                    case 42: // try_start_1
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var1 = var3.bind(var7)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.patch;
                        var1 = {};
                        var10 = _closure1_slot8;
                        var9 = var10.USER_WISHLIST_PATCH;
                        var6 = _closure2_slot0;
                        var6 = var9.bind(var10)(var6);
                        var1.url = var6;
                        var6 = {};
                        var9 = _closure2_slot1;
                        var6.visibility = var9;
                        var1.body = var6;
                        var6 = true;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 131);
                    case 129:
                        return var1;
                    case 131:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun87442_ip = 253;
                            continue _fun87442
                        }
                    case 137:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var6 = var4.bind(var7)(var3);
                        var4 = var6.dispatch;
                        var3 = {};
                        var9 = 'WISHLIST_UPDATE_VISIBILITY_SUCCESS';
                        var3.type = var9;
                        var9 = _closure2_slot0;
                        var3.wishlistId = var9;
                        var8 = _closure2_slot1;
                        var3.visibility = var8;
                        var3 = var4.bind(var6)(var3);
                    case 197: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 11;
                        var3 = var6[var3];
                        var4 = var4.bind(var7)(var3);
                        var3 = var4.fetchProfile;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 237);
                    case 235:
                        return var2;
                    case 237:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun87442_ip = 245;
                            continue _fun87442
                        }
                    case 243: // try_end0
                        _fun87442_ip = 250;
                        continue _fun87442;
                    case 245: // try_end1
                        return var2;
                    case 248: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 250: // try_end2
                        return var7;
                    case 253:
                        return var1;
                    case 256: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 5;
                        var2 = var8[var2];
                        var4 = var3.bind(var7)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'WISHLIST_UPDATE_VISIBILITY_FAILURE';
                        var2.type = var6;
                        var6 = _closure2_slot0;
                        var2.wishlistId = var6;
                        var6 = _closure1_slot0;
                        var5 = 9;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.APIError;
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var5
                            }
                        });
                        var12 = var6;
                        var11 = var1;
                        var5 = new var12[var5](var11, var10);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 363:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.updateWishlistVisibility = var6;
    var3 = function arg0, arg1, arg2() {
        var1 = arg2;
        var2 = arg0;
        var _closure2_slot0 = var2;
        var2 = arg1;
        var _closure2_slot1 = var2;
        var2 = var1.previousSkuId;
        var _closure2_slot2 = var2;
        var2 = var1.nextSkuId;
        var _closure2_slot3 = var2;
        var2 = var1.newWishlistData;
        var _closure2_slot4 = var2;
        var1 = var1.analyticsLocations;
        var _closure2_slot5 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun87445: for (var _fun87445_ip = 0;;) switch (_fun87445_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87445_ip = 551;
                            continue _fun87445
                        }
                    case 10:
                        var1 = undefined;
                        var4 = undefined;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 5;
                        var3 = var3[var2];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'WISHLIST_REORDER_START';
                        var3.type = var7;
                        var7 = _closure2_slot0;
                        var3.wishlistId = var7;
                        var7 = _closure2_slot1;
                        var3.skuId = var7;
                        var7 = _closure2_slot2;
                        var3.previousSkuId = var7;
                        var7 = _closure2_slot3;
                        var3.nextSkuId = var7;
                        var7 = _closure2_slot4;
                        var3.newWishlistData = var7;
                        var3 = var5.bind(var6)(var3);
                    case 107: // try_start_1
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 6;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.patch;
                        var3 = {};
                        var12 = _closure1_slot8;
                        var11 = var12.USER_WISHLIST_ITEM;
                        var10 = _closure2_slot0;
                        var7 = _closure2_slot1;
                        var7 = var11.bind(var12)(var10, var7);
                        var3.url = var7;
                        var7 = {};
                        var10 = _closure2_slot2;
                        var7.previous_sku_id = var10;
                        var10 = _closure2_slot3;
                        var7.next_sku_id = var10;
                        var3.body = var7;
                        var7 = true;
                        var3.rejectWithError = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 211);
                    case 209:
                        return var3;
                    case 211:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun87445_ip = 414;
                            continue _fun87445
                        }
                    case 220:
                        var7 = _closure1_slot6;
                        var6 = var7.fromServer;
                        var5 = var3.body;
                        var10 = var6.bind(var7)(var5);
                        var4 = var10;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var2];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var11 = 'WISHLIST_REORDER_SUCCESS';
                        var5.type = var11;
                        var11 = _closure2_slot0;
                        var5.wishlistId = var11;
                        var5.wishlistData = var10;
                        var5 = var6.bind(var7)(var5);
                        var6 = _closure2_slot5;
                        var5 = null;
                        if (!(var5 != var6)) {
                            _fun87445_ip = 409;
                            continue _fun87445
                        }
                    case 306: // try_start_0
                        var5 = var4;
                        var4 = var5.getSkuIds;
                        var10 = var4.bind(var5)();
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 10;
                        var4 = var6[var4];
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.track;
                        var4 = _closure1_slot7;
                        var5 = var4.WISHLIST_UPDATED;
                        var4 = {};
                        var11 = _closure2_slot0;
                        var4.wishlist_id = var11;
                        var11 = 'REORDER';
                        var4.action_type = var11;
                        var11 = _closure2_slot1;
                        var4.sku_id = var11;
                        var4.sku_ids = var10;
                        var10 = _closure2_slot5;
                        var4.location_stack = var10;
                        var4 = var6.bind(var7)(var5, var4);
                    case 405: // try_end0
                        _fun87445_ip = 409;
                        continue _fun87445;
                    case 407: // catch_target0
                        CatchBlockStart(arg_register = 4);
                    case 409: // try_end1
                        _fun87445_ip = 548;
                        continue _fun87445;
                    case 414:
                        return var3;
                    case 417: // catch_target1
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = var5[var2];
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var10 = 'WISHLIST_REORDER_FAILURE';
                        var2.type = var10;
                        var10 = _closure2_slot0;
                        var2.wishlistId = var10;
                        var9 = _closure2_slot1;
                        var2.skuId = var9;
                        var9 = _closure1_slot0;
                        var8 = 9;
                        var8 = var5[var8];
                        var8 = var9.bind(var1)(var8);
                        var8 = var8.APIError;
                        var9 = var8.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var8
                            }
                        });
                        var15 = var9;
                        var14 = var4;
                        var8 = new var15[var8](var14, var13);
                        var8 = var8 instanceof Object ? var8 : var9;
                        var2.error = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = 8;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
                    case 548:
                        return var1;
                    case 551:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.reorderWishlistItem = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/wishlists/WishlistActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4660, 1621, 11300, 660, 806, 507, 11295, 1207, 3350, 795, 6958, 2]);