// modules/wishlists/records/WishlistRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun87478: for (var _fun87478_ip = 0;;) switch (_fun87478_ip) {
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
                _fun87478_ip = 76;
                continue _fun87478;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.SKUProductLines;
    var _closure1_slot9 = var6;
    var1 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun87482: for (var _fun87482_ip = 0;;) switch (_fun87482_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var0 = var0.bind(var1)(var4, var3);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var1)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun87482_ip = 65;
                        continue _fun87482
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var1);
                    _fun87482_ip = 103;
                    continue _fun87482;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var1)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var3.bind(var1)(var4, var0);
                    var3 = var2.id;
                    var0.id = var3;
                    var3 = var2.userId;
                    var0.userId = var3;
                    var3 = var2.items;
                    var0.items = var3;
                    var2 = var2.applications;
                    var3 = null;
                    var3 = var3 != var2;
                    var1 = undefined;
                    if (!var3) {
                        _fun87482_ip = 162;
                        continue _fun87482
                    }
                case 159:
                    var1 = var2;
                case 162:
                    var0.applications = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getSkuIds';
        var5.key = var1;
        var1 = function() {
            var0 = this;
            var2 = var0.items;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.skuId;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var6 = 'hasSkuId';
        var5.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var2 = var1.items;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.skuId;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'getProductLines';
        var5.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Set;
            var0 = this;
            var3 = var0.items;
            var1 = var3.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.skuProductLine;
                return var0;
            };
            var4 = var1.bind(var3)(var0);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var5 = var1;
            var0 = new var5[var2](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'fromServer';
        var5.key = var6;
        var0 = function arg0() {
            _fun87489: for (var _fun87489_ip = 0;;) switch (_fun87489_ip) {
                case 0:
                    var2 = arg0;
                    var7 = var2.user_id;
                    var3 = var2.wishlist_items;
                    var4 = null;
                    var1 = Object.create(var4);
                    var0 = 0;
                    var1.user_id = var0;
                    var1.wishlist_items = var0;
                    var10 = {};
                    var9 = var2;
                    var8 = var1;
                    var1 = copyDataProperties(var10, var9, var8);
                    var2 = var3.map;
                    var0 = function(arg0) { // Environment: var5
                        _fun87490: for (var _fun87490_ip = 0;;) switch (_fun87490_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = var2.sku_product_line;
                                var1 = _closure1_slot9;
                                var1 = var1.COLLECTIBLES;
                                if (!(var1 !== var3)) {
                                    _fun87490_ip = 74;
                                    continue _fun87490
                                }
                            case 26:
                                var1 = _closure1_slot9;
                                var1 = var1.SOCIAL_LAYER_GAME_ITEM;
                                if (!(var1 !== var3)) {
                                    _fun87490_ip = 57;
                                    continue _fun87490
                                }
                            case 40:
                                var3 = _closure1_slot6;
                                var1 = var3.fromServer;
                                var1 = var1.bind(var3)(var2);
                                return var1;
                            case 57:
                                var3 = _closure1_slot8;
                                var1 = var3.fromServer;
                                var1 = var1.bind(var3)(var2);
                                return var1;
                            case 74:
                                var1 = _closure1_slot7;
                                var0 = var1.fromServer;
                                var0 = var0.bind(var1)(var2);
                                return var0;
                        }
                    };
                    var6 = var2.bind(var3)(var0);
                    var2 = _closure2_slot0;
                    var0 = {};
                    var10 = var0;
                    var9 = var1;
                    var3 = copyDataProperties(var10, var9);
                    var3 = 'userId';
                    var0[var3] = var7;
                    var3 = 'items';
                    var0[var3] = var6;
                    var7 = var1.applications;
                    var6 = var4 == var7;
                    var1 = undefined;
                    if (var6) {
                        _fun87489_ip = 132;
                        continue _fun87489
                    }
                case 115:
                    var6 = var7.map;
                    var5 = function(arg0) { // Environment: var5
                        var2 = _closure1_slot5;
                        var1 = var2.createFromServer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var6.bind(var7)(var5);
                case 132:
                    var4 = var4 != var1;
                    var3 = undefined;
                    if (!var4) {
                        _fun87489_ip = 144;
                        continue _fun87489
                    }
                case 141:
                    var3 = var1;
                case 144:
                    var1 = 'applications';
                    var0[var1] = var3;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var1;
                    var10 = var0;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/wishlists/records/WishlistRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 3457, 11319, 11318, 11322, 660, 2]);