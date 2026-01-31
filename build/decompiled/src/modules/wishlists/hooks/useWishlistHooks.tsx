// modules/wishlists/hooks/useWishlistHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var10;
    var0 = function arg0, arg1() {
        _fun86852: for (var _fun86852_ip = 0;;) switch (_fun86852_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun86852_ip = 46;
                    continue _fun86852
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun86852_ip = 55;
                    continue _fun86852
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun86852_ip = 345;
                    continue _fun86852
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun86852_ip = 323;
                    continue _fun86852
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun86852_ip = 283;
                    continue _fun86852
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun86852_ip = 270;
                    continue _fun86852
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
                    _fun86852_ip = 163;
                    continue _fun86852
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun86852_ip = 179;
                    continue _fun86852
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun86852_ip = 249;
                    continue _fun86852
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun86852_ip = 249;
                    continue _fun86852
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun86852_ip = 234;
                    continue _fun86852
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun86852_ip = 247;
                    continue _fun86852
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun86852_ip = 265;
                continue _fun86852;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun86852_ip = 283;
                continue _fun86852;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun86852_ip = 323;
                    continue _fun86852
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
                    _fun86852_ip = 330;
                    continue _fun86852
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun86853: for (var _fun86853_ip = 0;;) switch (_fun86853_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun86853_ip = 56;
                                continue _fun86853
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
                            _fun86853_ip = 67;
                            continue _fun86853;
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
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun86854: for (var _fun86854_ip = 0;;) switch (_fun86854_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun86854_ip = 23;
                    continue _fun86854
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun86854_ip = 33;
                    continue _fun86854
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
                    _fun86854_ip = 70;
                    continue _fun86854
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun86854_ip = 55;
                    continue _fun86854
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var4 = function arg0() {
        _fun86855: for (var _fun86855_ip = 0;;) switch (_fun86855_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.wishlistId;
                var _closure2_slot0 = var10;
                var2 = var1.userId;
                var _closure2_slot1 = var2;
                var7 = var1.source;
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun86855_ip = 48;
                    continue _fun86855
                }
            case 35:
                var1 = _closure1_slot15;
                var7 = var1.USER_PROFILE;
            case 48:
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var6;
                var _closure2_slot5 = var6;
                var _closure2_slot6 = var6;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 10;
                var1 = var11[var5];
                var8 = var9.bind(var6)(var1);
                var3 = var8.useStateFromStoresArray;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun86856: for (var _fun86856_ip = 0;;) switch (_fun86856_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun86856_ip = 106;
                                continue _fun86856
                            }
                        case 13:
                            var2 = _closure1_slot10;
                            var0 = var2.getWishlist;
                            var3 = _closure2_slot0;
                            var2 = var0.bind(var2)(var3);
                            var0 = new Array(4);
                            var0[0] = var2;
                            var4 = _closure1_slot10;
                            var2 = var4.isFetching;
                            var2 = var2.bind(var4)(var3);
                            var0[1] = var2;
                            var4 = _closure1_slot10;
                            var2 = var4.getError;
                            var2 = var2.bind(var4)(var3);
                            var0[2] = var2;
                            var2 = _closure1_slot10;
                            var1 = var2.getUpdatedAt;
                            var1 = var1.bind(var2)(var3);
                            var0[3] = var1;
                            _fun86856_ip = 133;
                            continue _fun86856;
                        case 106:
                            var1 = [null];
                            var2 = false;
                            var1[1] = var2;
                            var2 = undefined;
                            var1[2] = var2;
                            var1[3] = var2;
                            var0 = var1;
                        case 133:
                            return var0;
                    }
                };
                var3 = var3.bind(var8)(var2, var1);
                var2 = _closure1_slot3;
                var1 = 4;
                var12 = var2.bind(var6)(var3, var1);
                var1 = 0;
                var3 = var12[var1];
                _closure2_slot3 = var3;
                var1 = 1;
                var2 = var12[var1];
                var1 = 2;
                var1 = var12[var1];
                _closure2_slot4 = var1;
                var8 = 3;
                var8 = var12[var8];
                _closure2_slot5 = var8;
                var5 = var11[var5];
                var12 = var9.bind(var6)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var5;
                var5 = function() { // Environment: var0
                    _fun86857: for (var _fun86857_ip = 0;;) switch (_fun86857_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun86857_ip = 21;
                                continue _fun86857
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            if (!(var0 == var2)) {
                                _fun86857_ip = 25;
                                continue _fun86857
                            }
                        case 21:
                            var2 = undefined;
                            return var2;
                        case 25:
                            var4 = _closure1_slot7;
                            var3 = var4.getWishlistSettings;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2, var1);
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun86857_ip = 69;
                                continue _fun86857
                            }
                        case 63:
                            var0 = var1.updated_at;
                        case 69:
                            return var0;
                    }
                };
                var9 = var11.bind(var12)(var9, var5);
                _closure2_slot6 = var9;
                var5 = _closure1_slot5;
                var4 = new Array(6);
                var4[0] = var10;
                var4[1] = var3;
                var4[2] = var9;
                var4[3] = var8;
                var4[4] = var1;
                var4[5] = var7;
                var0 = function() { // Environment: var0
                    _fun86858: for (var _fun86858_ip = 0;;) switch (_fun86858_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 == var1;
                            if (var1) {
                                _fun86858_ip = 38;
                                continue _fun86858
                            }
                        case 16:
                            var5 = _closure1_slot10;
                            var4 = var5.isFetching;
                            var2 = _closure2_slot0;
                            var1 = var4.bind(var5)(var2);
                        case 38:
                            if (var1) {
                                _fun86858_ip = 49;
                                continue _fun86858
                            }
                        case 41:
                            var2 = _closure2_slot4;
                            var1 = var3 != var2;
                        case 49:
                            if (var1) {
                                _fun86858_ip = 142;
                                continue _fun86858
                            }
                        case 52:
                            var1 = _closure2_slot3;
                            var1 = var3 == var1;
                            if (var1) {
                                _fun86858_ip = 89;
                                continue _fun86858
                            }
                        case 63:
                            var2 = _closure2_slot6;
                            var2 = var3 != var2;
                            if (!var2) {
                                _fun86858_ip = 86;
                                continue _fun86858
                            }
                        case 74:
                            var4 = _closure2_slot5;
                            var3 = _closure2_slot6;
                            var2 = var4 !== var3;
                        case 86:
                            var1 = var2;
                        case 89:
                            if (!var1) {
                                _fun86858_ip = 142;
                                continue _fun86858
                            }
                        case 92:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.fetchWishlist;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot6;
                            var0 = _closure2_slot2;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 142:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.wishlist = var3;
                var0.isFetching = var2;
                var0.error = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var4;
    var0 = function arg0() {
        _fun86859: for (var _fun86859_ip = 0;;) switch (_fun86859_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.items;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun86859_ip = 102;
                    continue _fun86859
                }
            case 14:
                var1 = var2.items;
                var1 = var1.length;
                var4 = 0;
                if (!(var4 !== var1)) {
                    _fun86859_ip = 102;
                    continue _fun86859
                }
            case 30:
                var3 = {};
                var1 = var2.skuId;
                var3.sku_id = var1;
                var1 = var2.name;
                var3.sku_name = var1;
                var5 = _closure1_slot12;
                var5 = var5.COLLECTIBLES;
                var3.sku_product_line = var5;
                var2 = var2.items;
                var2 = var2[var4];
                var3.collectibles_item = var2;
                var2 = _closure1_slot11;
                var1 = var2.fromServer;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 102:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var1 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 10;
        var7 = var6[var4];
        var2 = undefined;
        var10 = var5.bind(var2)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot9;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() { // Environment: var1
            var2 = _closure1_slot9;
            var1 = var2.getUser;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var9 = var9.bind(var10)(var8, var7);
        var _closure2_slot1 = var9;
        var4 = var6[var4];
        var8 = var5.bind(var2)(var4);
        var7 = var8.useStateFromStoresObject;
        var4 = _closure1_slot7;
        var6 = new Array(1);
        var6[0] = var4;
        var5 = new Array(1);
        var5[0] = var3;
        var4 = function() { // Environment: var1
            _fun86862: for (var _fun86862_ip = 0;;) switch (_fun86862_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 != var3;
                    var3 = null;
                    if (!var4) {
                        _fun86862_ip = 42;
                        continue _fun86862
                    }
                case 20:
                    var6 = _closure1_slot7;
                    var5 = var6.getUserProfile;
                    var4 = _closure2_slot0;
                    var3 = var5.bind(var6)(var4);
                case 42:
                    var0.userProfile = var3;
                    var3 = _closure2_slot0;
                    var3 = var1 != var3;
                    var1 = null;
                    if (!var3) {
                        _fun86862_ip = 82;
                        continue _fun86862
                    }
                case 60:
                    var4 = _closure1_slot7;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
                case 82:
                    var0.wishlistId = var1;
                    return var0;
            }
        };
        var4 = var7.bind(var8)(var6, var4, var5);
        var8 = var4.userProfile;
        var _closure2_slot2 = var8;
        var4 = var4.wishlistId;
        var7 = _closure1_slot4;
        var6 = var7.useEffect;
        var5 = new Array(3);
        var5[0] = var9;
        var5[1] = var3;
        var5[2] = var8;
        var1 = function() { // Environment: var1
            _fun86863: for (var _fun86863_ip = 0;;) switch (_fun86863_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var6 = null;
                    var1 = var6 != var1;
                    if (!var1) {
                        _fun86863_ip = 24;
                        continue _fun86863
                    }
                case 16:
                    var2 = _closure2_slot2;
                    var1 = var6 == var2;
                case 24:
                    if (!var1) {
                        _fun86863_ip = 35;
                        continue _fun86863
                    }
                case 27:
                    var2 = _closure2_slot1;
                    var1 = var6 != var2;
                case 35:
                    if (!var1) {
                        _fun86863_ip = 46;
                        continue _fun86863
                    }
                case 38:
                    var2 = _closure2_slot2;
                    var1 = var6 == var2;
                case 46:
                    if (!var1) {
                        _fun86863_ip = 104;
                        continue _fun86863
                    }
                case 49:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var5 = _closure2_slot1;
                    var1 = var5.id;
                    var4 = var5.getAvatarURL;
                    var0 = 80;
                    var0 = var4.bind(var5)(var6, var0);
                    var0 = var2.bind(var3)(var1, var0);
                case 104:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = _closure1_slot18;
        var0 = {};
        var0.wishlistId = var4;
        var0.userId = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot20 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var5);
    var0 = 0;
    var5 = var10[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var10[var5];
    var7 = arg3;
    var7 = var7.bind(var0)(var8);
    var _closure1_slot4 = var7;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.useEffect;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var10[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var10[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var10[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var7 = 6;
    var5 = var10[var7];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var10[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.SKUProductLines;
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.WISHLIST_POPULAR_SKU_IDS;
    var _closure1_slot13 = var5;
    var6 = {};
    var5 = 'wishlist';
    var6.WISHLIST = var5;
    var5 = 'popular';
    var6.POPULAR = var5;
    var _closure1_slot14 = var6;
    var5 = {};
    var8 = 'user_profile';
    var5.USER_PROFILE = var8;
    var _closure1_slot15 = var5;
    var8 = 15;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/wishlists/hooks/useWishlistHooks.tsx';
    var8 = var9.bind(var10)(var8);
    var2.WISHLIST_IN_DM_LENGTH = var7;
    var7 = 350;
    var2.WISHLIST_TOOLTIP_DELAY_MS = var7;
    var7 = 16;
    var2.WISHLIST_TOOLTIP_ICON_SIZE = var7;
    var2.WishlistItemSource = var6;
    var2.WishlistFetchSource = var5;
    var2.useFetchWishlist = var4;
    var4 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot10;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun86865: for (var _fun86865_ip = 0;;) switch (_fun86865_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun86865_ip = 43;
                        continue _fun86865
                    }
                case 16:
                    var4 = _closure1_slot10;
                    var3 = var4.hasSkuId;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = var3.bind(var4)(var2, var1);
                case 43:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsSkuInWishlist = var4;
    var4 = function arg0() {
        _fun86866: for (var _fun86866_ip = 0;;) switch (_fun86866_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.giftRecipient;
                var _closure2_slot0 = var3;
                var10 = var1.minNumItems;
                var _closure2_slot1 = var10;
                var4 = var1.source;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var9 = undefined;
                var7 = var2.bind(var9)(var1);
                var5 = var7.useStateFromStoresObject;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot7;
                    var2 = var3.getFirstWishlistId;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.defaultWishlistId = var1;
                    return var0;
                };
                var1 = var5.bind(var7)(var2, var1);
                var8 = var1.defaultWishlistId;
                var2 = _closure1_slot18;
                var1 = {};
                var1.wishlistId = var8;
                var1.source = var4;
                var1 = var2.bind(var9)(var1);
                var7 = var1.wishlist;
                var _closure2_slot2 = var7;
                var4 = var1.isFetching;
                var1 = var1.error;
                var12 = _closure1_slot4;
                var11 = var12.useMemo;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var10;
                var2 = function() { // Environment: var0
                    _fun86868: for (var _fun86868_ip = 0;;) switch (_fun86868_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun86868_ip = 57;
                                continue _fun86868
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var4 = var2.items;
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.isOwned;
                                var0 = true;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.length;
                            var1 = _closure2_slot1;
                            var0 = var2 >= var1;
                        case 57:
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var2, var5);
                var _closure2_slot3 = var2;
                var5 = var3.id;
                var3 = function arg0() {
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var4 = _closure1_slot4;
                    var2 = var4.useState;
                    var1 = new Array(0);
                    var2 = var2.bind(var4)(var1);
                    var1 = _closure1_slot3;
                    var9 = undefined;
                    var8 = 2;
                    var4 = var1.bind(var9)(var2, var8);
                    var1 = 0;
                    var2 = var4[var1];
                    var5 = 1;
                    var4 = var4[var5];
                    var _closure3_slot1 = var4;
                    var10 = _closure1_slot4;
                    var7 = var10.useState;
                    var4 = false;
                    var7 = var7.bind(var10)(var4);
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var9)(var7, var8);
                    var1 = var4[var1];
                    var4 = var4[var5];
                    var _closure3_slot2 = var4;
                    var5 = _closure1_slot4;
                    var4 = var5.useEffect;
                    var3 = new Array(1);
                    var3[0] = var6;
                    var0 = function() { // Environment: var0
                        var1 = false;
                        var _closure4_slot0 = var1;
                        var3 = _closure3_slot2;
                        var5 = undefined;
                        var2 = true;
                        var2 = var3.bind(var5)(var2);
                        var6 = _closure1_slot13;
                        var4 = var6.map;
                        var3 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            return var0;
                        };
                        var4 = var4.bind(var6)(var3);
                        var _closure4_slot1 = var4;
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 12;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.validateCollectiblesRecipientsBatch;
                        var1 = _closure3_slot0;
                        var3 = var2.bind(var3)(var1, var4);
                        var2 = var3.then;
                        var1 = function(arg0) { // Environment: var0
                            _fun86873: for (var _fun86873_ip = 0;;) switch (_fun86873_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var2 = _closure4_slot0;
                                    if (var2) {
                                        _fun86873_ip = 65;
                                        continue _fun86873
                                    }
                                case 19:
                                    var2 = _closure4_slot1;
                                    var1 = var2.filter;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun86874: for (var _fun86874_ip = 0;;) switch (_fun86874_ip) {
                                            case 0:
                                                var1 = _closure5_slot0;
                                                var0 = arg0;
                                                var0 = var1[var0];
                                                var1 = null;
                                                var2 = var1 == var0;
                                                var1 = undefined;
                                                if (var2) {
                                                    _fun86874_ip = 31;
                                                    continue _fun86874
                                                }
                                            case 25:
                                                var1 = var0.valid;
                                            case 31:
                                                var0 = true;
                                                var0 = var0 === var1;
                                                return var0;
                                        }
                                    };
                                    var3 = var1.bind(var2)(var0);
                                    var1 = _closure3_slot1;
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var3);
                                    var1 = _closure3_slot2;
                                    var0 = false;
                                    var0 = var1.bind(var2)(var0);
                                case 65:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        var0 = function() { // Environment: var0
                            var0 = true;
                            _closure4_slot0 = var0;
                            var0 = undefined;
                            return var0;
                        };
                        return var0;
                    };
                    var0 = var4.bind(var5)(var0, var3);
                    var0 = {};
                    var0.validatedSkuIds = var2;
                    var0.isValidating = var1;
                    return var0;
                };
                var3 = var3.bind(var9)(var5);
                var11 = var3.validatedSkuIds;
                var _closure2_slot4 = var11;
                var5 = var3.isValidating;
                var3 = function arg0, arg1() {
                    var4 = arg0;
                    var3 = var4.slice;
                    var2 = 0;
                    var1 = arg1;
                    var5 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.useStateFromStores;
                    var1 = _closure1_slot6;
                    var3 = new Array(1);
                    var3[0] = var1;
                    var1 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.some;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot6;
                            var1 = var2.isFetchingProduct;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var4.bind(var6)(var3, var1);
                    var4 = _closure1_slot4;
                    var3 = var4.useEffect;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var0 = function() { // Environment: var0
                        _fun86879: for (var _fun86879_ip = 0;;) switch (_fun86879_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.length;
                                var1 = 0;
                                if (!(var1 !== var2)) {
                                    _fun86879_ip = 143;
                                    continue _fun86879
                                }
                            case 21:
                                var1 = _closure1_slot16;
                                var0 = _closure3_slot0;
                                var5 = undefined;
                                var4 = var1.bind(var5)(var0);
                                var1 = var4.bind(var5)();
                                var0 = var1.done;
                                var3 = 12;
                                var2 = null;
                                if (var0) {
                                    _fun86879_ip = 143;
                                    continue _fun86879
                                }
                            case 56:
                                var8 = var1.value;
                                var9 = _closure1_slot6;
                                var0 = var9.getProduct;
                                var0 = var0.bind(var9)(var8);
                                var7 = var9.isFetchingProduct;
                                var7 = var7.bind(var9)(var8);
                                var0 = var2 != var0;
                                if (var0) {
                                    _fun86879_ip = 97;
                                    continue _fun86879
                                }
                            case 94:
                                var0 = var7;
                            case 97:
                                if (var0) {
                                    _fun86879_ip = 128;
                                    continue _fun86879
                                }
                            case 100:
                                var7 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var0 = var0[var3];
                                var7 = var7.bind(var5)(var0);
                                var0 = var7.fetchCollectiblesProduct;
                                var0 = var0.bind(var7)(var8);
                            case 128:
                                var7 = var4.bind(var5)();
                                var0 = var7.done;
                                var1 = var7;
                                if (!var0) {
                                    _fun86879_ip = 56;
                                    continue _fun86879
                                }
                            case 143:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var0, var2);
                    var0 = {};
                    var0.isFetching = var1;
                    return var0;
                };
                var3 = var3.bind(var9)(var11, var10);
                var3 = var3.isFetching;
                var10 = _closure1_slot4;
                var9 = var10.useMemo;
                var6 = new Array(2);
                var6[0] = var2;
                var6[1] = var11;
                var0 = function() { // Environment: var0
                    _fun86880: for (var _fun86880_ip = 0;;) switch (_fun86880_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun86880_ip = 155;
                                continue _fun86880
                            }
                        case 15:
                            var2 = global;
                            var3 = var2.Set;
                            var10 = _closure2_slot4;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var11 = var2;
                            var1 = new var11[var3](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var2;
                            var _closure3_slot0 = var1;
                            var2 = new Array(0);
                            var3 = _closure1_slot16;
                            var1 = _closure1_slot13;
                            var6 = undefined;
                            var5 = var3.bind(var6)(var1);
                            var3 = var5.bind(var6)();
                            var1 = var3.done;
                            var4 = null;
                            if (var1) {
                                _fun86880_ip = 136;
                                continue _fun86880
                            }
                        case 87:
                            var9 = var3.value;
                            var8 = _closure1_slot6;
                            var1 = var8.getProduct;
                            var8 = var1.bind(var8)(var9);
                            if (!(var4 != var8)) {
                                _fun86880_ip = 121;
                                continue _fun86880
                            }
                        case 111:
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var8);
                        case 121:
                            var8 = var5.bind(var6)();
                            var1 = var8.done;
                            var3 = var8;
                            if (!var1) {
                                _fun86880_ip = 87;
                                continue _fun86880
                            }
                        case 136:
                            var1 = var2.filter;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.has;
                                var0 = arg0;
                                var0 = var0.skuId;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 155:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var6 = var9.bind(var10)(var0, var6);
                var0 = {};
                var0.defaultWishlistId = var8;
                var0.wishlist = var7;
                var0.popularCollectiblesProducts = var6;
                var0.isFetchingWishlist = var4;
                var4 = !var2;
                if (!var4) {
                    _fun86866_ip = 292;
                    continue _fun86866
                }
            case 289:
                var4 = var5;
            case 292:
                var0.isValidatingPopularProducts = var4;
                var2 = !var2;
                if (!var2) {
                    _fun86866_ip = 308;
                    continue _fun86866
                }
            case 305:
                var2 = var3;
            case 308:
                var0.isFetchingPopularProducts = var2;
                var0.wishlistError = var1;
                return var0;
        }
    };
    var2.useShopAndWishlistData = var4;
    var4 = function arg0() {
        _fun86882: for (var _fun86882_ip = 0;;) switch (_fun86882_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.wishlist;
                var _closure2_slot0 = var8;
                var6 = var1.popularCollectiblesProducts;
                var _closure2_slot1 = var6;
                var5 = var1.popularSocialLayerStorefrontItems;
                var _closure2_slot2 = var5;
                var7 = var1.wishlistError;
                var _closure2_slot3 = var7;
                var4 = var1.numItems;
                var _closure2_slot4 = var4;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var7;
                var7 = null;
                var9 = var7 == var8;
                var7 = undefined;
                if (var9) {
                    _fun86882_ip = 93;
                    continue _fun86882
                }
            case 88:
                var7 = var8.items;
            case 93:
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    _fun86883: for (var _fun86883_ip = 0;;) switch (_fun86883_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 == var1)) {
                                _fun86883_ip = 511;
                                continue _fun86883
                            }
                        case 18:
                            var1 = _closure2_slot0;
                            var1 = var3 == var1;
                            var2 = undefined;
                            var6 = undefined;
                            if (var1) {
                                _fun86883_ip = 42;
                                continue _fun86883
                            }
                        case 33:
                            var1 = _closure2_slot0;
                            var6 = var1.items;
                        case 42:
                            if (!(var3 == var6)) {
                                _fun86883_ip = 50;
                                continue _fun86883
                            }
                        case 46:
                            var6 = new Array(0);
                        case 50:
                            var5 = var6.filter;
                            var1 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.isOwned;
                                var0 = true;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var5 = var5.bind(var6)(var1);
                            var6 = var5.slice;
                            var9 = _closure2_slot4;
                            var1 = 0;
                            var6 = var6.bind(var5)(var1, var9);
                            var7 = new Array(0);
                            var10 = var7.push;
                            var11 = var6.map;
                            var8 = function(arg0) { // Environment: var0
                                var0 = {};
                                var1 = arg0;
                                var0.item = var1;
                                var1 = _closure1_slot14;
                                var1 = var1.WISHLIST;
                                var0.source = var1;
                                return var0;
                            };
                            var15 = var11.bind(var6)(var8);
                            var8 = new Array(0);
                            var16 = var8;
                            var14 = 0;
                            var11 = arraySpread(var16, var15, var14);
                            var16 = var10;
                            var15 = var8;
                            var14 = var7;
                            var8 = apply(var16, var15, var14);
                            var8 = var7.length;
                            if (!(var8 < var9)) {
                                _fun86883_ip = 430;
                                continue _fun86883
                            }
                        case 148:
                            var8 = global;
                            var10 = var8.Set;
                            var9 = var6.map;
                            var8 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.skuId;
                                return var0;
                            };
                            var16 = var9.bind(var6)(var8);
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var17 = var9;
                            var8 = new var17[var10](var16, var15);
                            var8 = var8 instanceof Object ? var8 : var9;
                            var _closure3_slot0 = var8;
                            var10 = _closure2_slot2;
                            var9 = var10.filter;
                            var8 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.has;
                                var0 = arg0;
                                var0 = var0.skuId;
                                var0 = var1.bind(var2)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var12 = var9.bind(var10)(var8);
                            var8 = var12.length;
                            if (!(var1 < var8)) {
                                _fun86883_ip = 307;
                                continue _fun86883
                            }
                        case 227:
                            var9 = var7.length;
                            var8 = _closure2_slot4;
                            var8 = var9 < var8;
                            var10 = 0;
                            if (!var8) {
                                _fun86883_ip = 307;
                                continue _fun86883
                            }
                        case 248:
                            var9 = var7.push;
                            var8 = {};
                            var13 = var12[var10];
                            var8.item = var13;
                            var13 = _closure1_slot14;
                            var13 = var13.POPULAR;
                            var8.source = var13;
                            var8 = var9.bind(var7)(var8);
                            var10 = var10 + 1;
                            var8 = var12.length;
                            if (!(var10 < var8)) {
                                _fun86883_ip = 307;
                                continue _fun86883
                            }
                        case 294:
                            var9 = var7.length;
                            var8 = _closure2_slot4;
                            if (var9 < var8) {
                                _fun86883_ip = 248;
                                continue _fun86883
                            }
                        case 307:
                            var9 = _closure2_slot1;
                            var8 = var9.filter;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.has;
                                var0 = arg0;
                                var0 = var0.skuId;
                                var0 = var1.bind(var2)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var11 = var8.bind(var9)(var0);
                            var0 = var11.length;
                            if (!(var1 < var0)) {
                                _fun86883_ip = 430;
                                continue _fun86883
                            }
                        case 337:
                            var8 = var7.length;
                            var0 = _closure2_slot4;
                            var0 = var8 < var0;
                            var9 = 0;
                            if (!var0) {
                                _fun86883_ip = 430;
                                continue _fun86883
                            }
                        case 358:
                            var8 = _closure1_slot19;
                            var0 = var11[var9];
                            var12 = var8.bind(var2)(var0);
                            if (!(var3 !== var12)) {
                                _fun86883_ip = 405;
                                continue _fun86883
                            }
                        case 375:
                            var8 = var7.push;
                            var0 = {};
                            var0.item = var12;
                            var12 = _closure1_slot14;
                            var12 = var12.POPULAR;
                            var0.source = var12;
                            var0 = var8.bind(var7)(var0);
                        case 405:
                            var9 = var9 + 1;
                            var0 = var11.length;
                            if (!(var9 < var0)) {
                                _fun86883_ip = 430;
                                continue _fun86883
                            }
                        case 417:
                            var8 = var7.length;
                            var0 = _closure2_slot4;
                            if (var8 < var0) {
                                _fun86883_ip = 358;
                                continue _fun86883
                            }
                        case 430:
                            var0 = {};
                            var0.displayItems = var7;
                            var6 = var6.length;
                            var0.wishlistItemCountToBeDisplayed = var6;
                            var6 = var5.length;
                            var5 = _closure2_slot4;
                            var5 = var6 > var5;
                            var0.hasMoreItems = var5;
                            var5 = _closure2_slot0;
                            var5 = var3 == var5;
                            var2 = undefined;
                            if (var5) {
                                _fun86883_ip = 492;
                                continue _fun86883
                            }
                        case 478:
                            var4 = _closure2_slot0;
                            var4 = var4.items;
                            var2 = var4.length;
                        case 492:
                            var3 = var3 != var2;
                            var1 = 0;
                            if (!var3) {
                                _fun86883_ip = 504;
                                continue _fun86883
                            }
                        case 501:
                            var1 = var2;
                        case 504:
                            var0.totalWishlistItemCount = var1;
                            return var0;
                        case 511:
                            var0 = {
                                'displayItems': null,
                                'wishlistItemCountToBeDisplayed': 0,
                                'hasMoreItems': false,
                                'totalWishlistItemCount': 0
                            };
                            var1 = new Array(0);
                            var0.displayItems = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useShopAndWishlistDisplayItems = var4;
    var4 = function arg0() {
        _fun86889: for (var _fun86889_ip = 0;;) switch (_fun86889_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.location;
                var7 = var1.isGift;
                var _closure2_slot0 = var7;
                var6 = var1.giftRecipient;
                var _closure2_slot1 = var6;
                var5 = undefined;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var4 = var3.bind(var5)(var2);
                var3 = var4.useIsUserSocialLayerStorefrontEligibleInProfile;
                var2 = {};
                var8 = null;
                var11 = var8 == var6;
                var10 = undefined;
                if (var11) {
                    _fun86889_ip = 87;
                    continue _fun86889
                }
            case 82:
                var10 = var6.id;
            case 87:
                var2.userId = var10;
                var2.location = var9;
                var4 = var3.bind(var4)(var2);
                _closure2_slot2 = var4;
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 10;
                var2 = var9[var2];
                var10 = var3.bind(var5)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun86890: for (var _fun86890_ip = 0;;) switch (_fun86890_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun86890_ip = 27;
                                continue _fun86890
                            }
                        case 18:
                            var3 = _closure2_slot1;
                            var2 = var3.id;
                        case 27:
                            var2 = var0 == var2;
                            var0 = null;
                            if (var2) {
                                _fun86890_ip = 63;
                                continue _fun86890
                            }
                        case 36:
                            var3 = _closure1_slot7;
                            var2 = var3.getFirstWishlistId;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 63:
                            return var0;
                    }
                };
                var10 = var9.bind(var10)(var3, var2);
                var3 = _closure1_slot18;
                var2 = {};
                var11 = var8 != var10;
                var9 = null;
                if (!var11) {
                    _fun86889_ip = 186;
                    continue _fun86889
                }
            case 169:
                var9 = null;
                if (!var7) {
                    _fun86889_ip = 186;
                    continue _fun86889
                }
            case 174:
                var11 = var8 != var6;
                var9 = null;
                if (!var11) {
                    _fun86889_ip = 186;
                    continue _fun86889
                }
            case 183:
                var9 = var10;
            case 186:
                var2.wishlistId = var9;
                var9 = var8 == var6;
                var8 = undefined;
                if (var9) {
                    _fun86889_ip = 205;
                    continue _fun86889
                }
            case 200:
                var8 = var6.id;
            case 205:
                var2.userId = var8;
                var2 = var3.bind(var5)(var2);
                var5 = var2.wishlist;
                _closure2_slot3 = var5;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun86891: for (var _fun86891_ip = 0;;) switch (_fun86891_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = true;
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun86891_ip = 26;
                                continue _fun86891
                            }
                        case 16:
                            var3 = _closure2_slot1;
                            var1 = null;
                            var0 = var1 != var3;
                        case 26:
                            if (!var0) {
                                _fun86891_ip = 101;
                                continue _fun86891
                            }
                        case 29:
                            var1 = _closure2_slot3;
                            var3 = null;
                            var4 = var3 == var1;
                            var1 = undefined;
                            if (var4) {
                                _fun86891_ip = 72;
                                continue _fun86891
                            }
                        case 44:
                            var4 = _closure2_slot3;
                            var6 = var4.items;
                            var5 = var6.filter;
                            var4 = function(arg0) { // Environment: var4
                                var0 = arg0;
                                var1 = var0.isOwned;
                                var0 = true;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var1 = var5.bind(var6)(var4);
                        case 72:
                            if (!(var3 == var1)) {
                                _fun86891_ip = 80;
                                continue _fun86891
                            }
                        case 76:
                            var1 = new Array(0);
                        case 80:
                            var3 = var1.length;
                            var1 = 0;
                            var1 = var3 > var1;
                            if (var1) {
                                _fun86891_ip = 98;
                                continue _fun86891
                            }
                        case 94:
                            var1 = _closure2_slot2;
                        case 98:
                            var0 = var1;
                        case 101:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useShouldShowWishlistInDMGifting = var4;
    var3 = function() {
        var2 = _closure1_slot20;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.useStateFromStores;
        var0 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot8;
            var0 = var1.getId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var4.bind(var5)(var3, var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useCurrentUserWishlist = var3;
    var2.useFetchWishlistAndProfileInfoForUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4562, 4623, 1216, 1613, 11197, 11198, 660, 3242, 566, 11200, 4561, 11203, 6914, 2]);