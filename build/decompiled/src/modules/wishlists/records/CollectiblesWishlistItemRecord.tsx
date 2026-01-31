// modules/wishlists/records/CollectiblesWishlistItemRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun86925: for (var _fun86925_ip = 0;;) switch (_fun86925_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun86925_ip = 46;
                    continue _fun86925
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun86925_ip = 55;
                    continue _fun86925
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun86925_ip = 345;
                    continue _fun86925
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun86925_ip = 323;
                    continue _fun86925
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun86925_ip = 283;
                    continue _fun86925
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun86925_ip = 270;
                    continue _fun86925
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
                    _fun86925_ip = 163;
                    continue _fun86925
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun86925_ip = 179;
                    continue _fun86925
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun86925_ip = 249;
                    continue _fun86925
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun86925_ip = 249;
                    continue _fun86925
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun86925_ip = 234;
                    continue _fun86925
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun86925_ip = 247;
                    continue _fun86925
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun86925_ip = 265;
                continue _fun86925;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun86925_ip = 283;
                continue _fun86925;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun86925_ip = 323;
                    continue _fun86925
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
                    _fun86925_ip = 330;
                    continue _fun86925
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun86926: for (var _fun86926_ip = 0;;) switch (_fun86926_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun86926_ip = 56;
                                continue _fun86926
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
                            _fun86926_ip = 67;
                            continue _fun86926;
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
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun86927: for (var _fun86927_ip = 0;;) switch (_fun86927_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun86927_ip = 23;
                    continue _fun86927
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun86927_ip = 33;
                    continue _fun86927
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
                    _fun86927_ip = 70;
                    continue _fun86927
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun86927_ip = 55;
                    continue _fun86927
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        _fun86928: for (var _fun86928_ip = 0;;) switch (_fun86928_ip) {
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
                _fun86928_ip = 76;
                continue _fun86928;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var6[var3];
    var4 = var4.bind(var0)(var3);
    var3 = 10;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.SKUProductLines;
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        _fun86931: for (var _fun86931_ip = 0;;) switch (_fun86931_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.type;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 11;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var4.bind(var5)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                if (!(var1 !== var3)) {
                    _fun86931_ip = 153;
                    continue _fun86931
                }
            case 49:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var1 !== var3)) {
                    _fun86931_ip = 136;
                    continue _fun86931
                }
            case 82:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var1 !== var3)) {
                    _fun86931_ip = 119;
                    continue _fun86931
                }
            case 115:
                var1 = null;
                return var1;
            case 119:
                var3 = _closure1_slot8;
                var1 = var3.fromServer;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 136:
                var3 = _closure1_slot9;
                var1 = var3.fromServer;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 153:
                var1 = _closure1_slot7;
                var0 = var1.fromServer;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun86933: for (var _fun86933_ip = 0;;) switch (_fun86933_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var6 = undefined;
                    var0 = var0.bind(var6)(var3, var1);
                    var10 = new Array(1);
                    var10[0] = var2;
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var6)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var6)();
                    if (var0) {
                        _fun86933_ip = 73;
                        continue _fun86933
                    }
                case 60:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var3, var10);
                    _fun86933_ip = 107;
                    continue _fun86933;
                case 73:
                    var4 = global;
                    var8 = var4.Reflect;
                    var5 = var8.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var6)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var8)(var9, var10, var4);
                case 107:
                    var0 = var1.bind(var6)(var3, var0);
                    var1 = _closure1_slot11;
                    var1 = var1.COLLECTIBLES;
                    var0.skuProductLine = var1;
                    var1 = var2.bundle_items;
                    var5 = null;
                    if (!(var5 == var1)) {
                        _fun86933_ip = 253;
                        continue _fun86933
                    }
                case 141:
                    var1 = var2.collectibles_item;
                    if (!(var5 != var1)) {
                        _fun86933_ip = 217;
                        continue _fun86933
                    }
                case 151:
                    var3 = _closure1_slot12;
                    var1 = var2.collectibles_item;
                    var1 = var3.bind(var6)(var1);
                    if (!(var5 != var1)) {
                        _fun86933_ip = 181;
                        continue _fun86933
                    }
                case 170:
                    var0.collectiblesItem = var1;
                    _fun86933_ip = 346;
                    continue _fun86933;
                case 181:
                    var1 = global;
                    var4 = var1.Error;
                    var1 = var4.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var13 = 'Collectibles item not found';
                    var14 = var3;
                    var1 = new var14[var4](var13, var12);
                    var1 = var1 instanceof Object ? var1 : var3;
                    throw var1;
                case 217:
                    var1 = global;
                    var4 = var1.Error;
                    var1 = var4.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var13 = 'Collectibles wishlist item missing both collectibles_item and bundle_items';
                    var14 = var3;
                    var1 = new var14[var4](var13, var12);
                    var1 = var1 instanceof Object ? var1 : var3;
                    throw var1;
                case 253:
                    var1 = new Array(0);
                    var3 = _closure1_slot14;
                    var2 = var2.bundle_items;
                    var4 = var3.bind(var6)(var2);
                    var3 = var4.bind(var6)();
                    var2 = var3.done;
                    if (var2) {
                        _fun86933_ip = 327;
                        continue _fun86933
                    }
                case 284:
                    var8 = var3.value;
                    var2 = _closure1_slot12;
                    var8 = var2.bind(var6)(var8);
                    if (!(var5 != var8)) {
                        _fun86933_ip = 312;
                        continue _fun86933
                    }
                case 302:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var8);
                case 312:
                    var8 = var4.bind(var6)();
                    var2 = var8.done;
                    var3 = var8;
                    if (!var2) {
                        _fun86933_ip = 284;
                        continue _fun86933
                    }
                case 327:
                    var3 = var1.length;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun86933_ip = 348;
                        continue _fun86933
                    }
                case 338:
                    var0.bundleItems = var1;
                case 346:
                    return var0;
                case 348:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = 'Bundle has no valid items';
                    var14 = var1;
                    var0 = new var14[var2](var13, var12);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var0 = {};
        var5 = 'fromServer';
        var0.key = var5;
        var1 = function arg0() {
            _fun86934: for (var _fun86934_ip = 0;;) switch (_fun86934_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var7 = var0;
                    var6 = var1;
                    var3 = copyDataProperties(var7, var6);
                    var4 = var1.sku;
                    var3 = null;
                    var4 = var3 != var4;
                    var3 = undefined;
                    if (!var4) {
                        _fun86934_ip = 63;
                        continue _fun86934
                    }
                case 39:
                    var5 = _closure1_slot10;
                    var4 = var5.createFromServer;
                    var1 = var1.sku;
                    var3 = var4.bind(var5)(var1);
                case 63:
                    var1 = 'sku';
                    var0[var1] = var3;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = var1;
                    var7 = var0;
                    var0 = new var8[var2](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var _closure1_slot13 = var3;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/records/CollectiblesWishlistItemRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        var1 = _closure1_slot13;
        var0 = arg0;
        var0 = var0 instanceof var1;
        return var0;
    };
    var2.isCollectiblesWishlistItemRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4565, 4567, 4568, 3451, 11199, 660, 3452, 2]);