// modules/wishlists/records/CollectiblesWishlistItemRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun87621: for (var _fun87621_ip = 0;;) switch (_fun87621_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87621_ip = 45;
                    continue _fun87621
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun87621_ip = 54;
                    continue _fun87621
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun87621_ip = 344;
                    continue _fun87621
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87621_ip = 322;
                    continue _fun87621
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87621_ip = 282;
                    continue _fun87621
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87621_ip = 269;
                    continue _fun87621
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
                    _fun87621_ip = 162;
                    continue _fun87621
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun87621_ip = 178;
                    continue _fun87621
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87621_ip = 248;
                    continue _fun87621
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87621_ip = 248;
                    continue _fun87621
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87621_ip = 233;
                    continue _fun87621
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87621_ip = 246;
                    continue _fun87621
                }
            case 233:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun87621_ip = 264;
                continue _fun87621;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun87621_ip = 282;
                continue _fun87621;
            case 269:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun87621_ip = 322;
                    continue _fun87621
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
                    _fun87621_ip = 329;
                    continue _fun87621
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87622: for (var _fun87622_ip = 0;;) switch (_fun87622_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87622_ip = 56;
                                continue _fun87622
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
                            _fun87622_ip = 67;
                            continue _fun87622;
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
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun87623: for (var _fun87623_ip = 0;;) switch (_fun87623_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87623_ip = 23;
                    continue _fun87623
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87623_ip = 33;
                    continue _fun87623
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
                    _fun87623_ip = 70;
                    continue _fun87623
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87623_ip = 55;
                    continue _fun87623
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun87624: for (var _fun87624_ip = 0;;) switch (_fun87624_ip) {
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
                _fun87624_ip = 76;
                continue _fun87624;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var3 = function(arg0) { // Original name: createCollectiblesItemFromServerResponse, environment: var1
        _fun87627: for (var _fun87627_ip = 0;;) switch (_fun87627_ip) {
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
                    _fun87627_ip = 153;
                    continue _fun87627
                }
            case 49:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var1 !== var3)) {
                    _fun87627_ip = 136;
                    continue _fun87627
                }
            case 82:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var1 !== var3)) {
                    _fun87627_ip = 119;
                    continue _fun87627
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
        var4 = function(arg0) { // Original name: CollectiblesWishlistItemRecord, environment: var1
            _fun87629: for (var _fun87629_ip = 0;;) switch (_fun87629_ip) {
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
                        _fun87629_ip = 73;
                        continue _fun87629
                    }
                case 60:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var3, var10);
                    _fun87629_ip = 107;
                    continue _fun87629;
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
                        _fun87629_ip = 253;
                        continue _fun87629
                    }
                case 141:
                    var1 = var2.collectibles_item;
                    if (!(var5 != var1)) {
                        _fun87629_ip = 217;
                        continue _fun87629
                    }
                case 151:
                    var3 = _closure1_slot12;
                    var1 = var2.collectibles_item;
                    var1 = var3.bind(var6)(var1);
                    if (!(var5 != var1)) {
                        _fun87629_ip = 181;
                        continue _fun87629
                    }
                case 170:
                    var0.collectiblesItem = var1;
                    _fun87629_ip = 346;
                    continue _fun87629;
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
                        _fun87629_ip = 327;
                        continue _fun87629
                    }
                case 284:
                    var8 = var3.value;
                    var2 = _closure1_slot12;
                    var8 = var2.bind(var6)(var8);
                    if (!(var5 != var8)) {
                        _fun87629_ip = 312;
                        continue _fun87629
                    }
                case 302:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var8);
                case 312:
                    var8 = var4.bind(var6)();
                    var2 = var8.done;
                    var3 = var8;
                    if (!var2) {
                        _fun87629_ip = 284;
                        continue _fun87629
                    }
                case 327:
                    var3 = var1.length;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun87629_ip = 348;
                        continue _fun87629
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
        var1 = function(arg0) { // Original name: value, environment: var1
            _fun87630: for (var _fun87630_ip = 0;;) switch (_fun87630_ip) {
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
                        _fun87630_ip = 63;
                        continue _fun87630
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4564, 4566, 4567, 3451, 11266, 660, 3452, 2]);