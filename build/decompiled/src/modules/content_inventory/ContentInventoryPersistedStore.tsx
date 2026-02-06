// modules/content_inventory/ContentInventoryPersistedStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun89223: for (var _fun89223_ip = 0;;) switch (_fun89223_ip) {
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
                _fun89223_ip = 76;
                continue _fun89223;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var0 = function arg0, arg1() {
        _fun89226: for (var _fun89226_ip = 0;;) switch (_fun89226_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun89226_ip = 46;
                    continue _fun89226
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun89226_ip = 55;
                    continue _fun89226
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun89226_ip = 345;
                    continue _fun89226
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun89226_ip = 323;
                    continue _fun89226
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun89226_ip = 283;
                    continue _fun89226
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun89226_ip = 270;
                    continue _fun89226
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
                    _fun89226_ip = 163;
                    continue _fun89226
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun89226_ip = 179;
                    continue _fun89226
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun89226_ip = 249;
                    continue _fun89226
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun89226_ip = 249;
                    continue _fun89226
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun89226_ip = 234;
                    continue _fun89226
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun89226_ip = 247;
                    continue _fun89226
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun89226_ip = 265;
                continue _fun89226;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun89226_ip = 283;
                continue _fun89226;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun89226_ip = 323;
                    continue _fun89226
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
                    _fun89226_ip = 330;
                    continue _fun89226
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun89227: for (var _fun89227_ip = 0;;) switch (_fun89227_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun89227_ip = 56;
                                continue _fun89227
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
                            _fun89227_ip = 67;
                            continue _fun89227;
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
        _fun89228: for (var _fun89228_ip = 0;;) switch (_fun89228_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun89228_ip = 23;
                    continue _fun89228
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun89228_ip = 33;
                    continue _fun89228
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
                    _fun89228_ip = 70;
                    continue _fun89228
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun89228_ip = 55;
                    continue _fun89228
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        _fun89229: for (var _fun89229_ip = 0;;) switch (_fun89229_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun89229_ip = 11;
                    continue _fun89229
                }
            case 9:
                var1 = false;
            case 11:
                if (var1) {
                    _fun89229_ip = 45;
                    continue _fun89229
                }
            case 14:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot10;
                if (!(!(var2 < var1))) {
                    _fun89229_ip = 517;
                    continue _fun89229
                }
            case 45:
                var3 = global;
                var2 = var3.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = 2592000000.0;
                var7 = var2 - var1;
                var1 = _closure1_slot7;
                var1 = var1.itemImpressions;
                var1 = var1.length;
                var14 = 0;
                var1 = var14 < var1;
                var13 = 1;
                var12 = 2;
                var5 = 0;
                var4 = 0;
                var6 = 0;
                if (!var1) {
                    _fun89229_ip = 183;
                    continue _fun89229
                }
            case 115:
                var8 = _closure1_slot5;
                var1 = _closure1_slot7;
                var1 = var1.itemImpressions;
                var1 = var1[var4];
                var1 = var8.bind(var0)(var1, var12);
                var8 = var1[var14];
                var1 = var1[var13];
                var6 = var5;
                if (!(var1 < var7)) {
                    _fun89229_ip = 183;
                    continue _fun89229
                }
            case 154:
                var5 = var4 + var13;
                var4 = var4 + 1;
                var1 = _closure1_slot7;
                var1 = var1.itemImpressions;
                var1 = var1.length;
                var6 = var5;
                if (var4 < var1) {
                    _fun89229_ip = 115;
                    continue _fun89229
                }
            case 183:
                if (!(var6 > var14)) {
                    _fun89229_ip = 213;
                    continue _fun89229
                }
            case 187:
                var4 = _closure1_slot7;
                var5 = var4.itemImpressions;
                var1 = var5.slice;
                var1 = var1.bind(var5)(var6);
                var4.itemImpressions = var1;
            case 213:
                var1 = _closure1_slot7;
                var1 = var1.itemImpressions;
                var4 = var1.length;
                var1 = 2048;
                if (!(var4 > var1)) {
                    _fun89229_ip = 270;
                    continue _fun89229
                }
            case 238:
                var4 = _closure1_slot7;
                var6 = var4.itemImpressions;
                var5 = var6.slice;
                var1 = -2048;
                var1 = var5.bind(var6)(var1);
                var4.itemImpressions = var1;
            case 270:
                var1 = _closure1_slot12;
                var11 = 1000;
                if (var1) {
                    _fun89229_ip = 287;
                    continue _fun89229
                }
            case 283:
                var11 = _closure1_slot6;
            case 287:
                var1 = var3.Set;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var20 = var4;
                var1 = new var20[var1](var19);
                var5 = var1 instanceof Object ? var1 : var4;
                var1 = var3.Set;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var20 = var4;
                var1 = new var20[var1](var19);
                var1 = var1 instanceof Object ? var1 : var4;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var10 = var3 - var11;
                var4 = _closure1_slot14;
                var3 = _closure1_slot7;
                var3 = var3.itemImpressions;
                var9 = var4.bind(var0)(var3);
                var3 = var9.bind(var0)();
                var6 = var3.done;
                var4 = null;
                var8 = var3;
                var7 = null;
                var3 = null;
                if (var6) {
                    _fun89229_ip = 482;
                    continue _fun89229
                }
            case 398:
                var15 = var8.value;
                var6 = _closure1_slot5;
                var6 = var6.bind(var0)(var15, var12);
                var16 = var6[var14];
                var6 = var6[var13];
                if (!(!(var6 < var10))) {
                    _fun89229_ip = 438;
                    continue _fun89229
                }
            case 425:
                var15 = var7;
                if (!(var4 == var15)) {
                    _fun89229_ip = 451;
                    continue _fun89229
                }
            case 432:
                var15 = var6 + var11;
                _fun89229_ip = 451;
                continue _fun89229;
            case 438:
                var6 = var5.add;
                var6 = var6.bind(var5)(var16);
                var15 = var7;
            case 451:
                var6 = var1.add;
                var6 = var6.bind(var1)(var16);
                var16 = var9.bind(var0)();
                var6 = var16.done;
                var7 = var15;
                var8 = var16;
                var3 = var7;
                if (!var6) {
                    _fun89229_ip = 398;
                    continue _fun89229
                }
            case 482:
                _closure1_slot8 = var5;
                _closure1_slot9 = var1;
                var1 = inf;
                if (!(var4 != var3)) {
                    _fun89229_ip = 507;
                    continue _fun89229
                }
            case 504:
                var1 = var3;
            case 507:
                _closure1_slot10 = var1;
                var1 = true;
                _closure1_slot11 = var1;
            case 517:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var7 = global;
    var8 = var7.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var6 = 0;
    var1 = var4[var6];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var8 = 3;
    var1 = var4[var8];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.DAY;
    var1 = var8 * var1;
    var _closure1_slot6 = var1;
    var8 = {};
    var1 = new Array(0);
    var8.itemImpressions = var1;
    var1 = false;
    var8.hidden = var1;
    var _closure1_slot7 = var8;
    var8 = var7.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot8 = var8;
    var7 = var7.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot9 = var7;
    var _closure1_slot10 = var6;
    var _closure1_slot11 = var1;
    var _closure1_slot12 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun89231: for (var _fun89231_ip = 0;;) switch (_fun89231_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun89231_ip = 69;
                        continue _fun89231
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun89231_ip = 105;
                    continue _fun89231;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun89232: for (var _fun89232_ip = 0;;) switch (_fun89232_ip) {
                case 0:
                    var2 = arg0;
                    var1 = {};
                    var4 = _closure1_slot7;
                    var5 = var1;
                    var3 = copyDataProperties(var5, var4);
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun89232_ip = 27;
                        continue _fun89232
                    }
                case 25:
                    var2 = {};
                case 27:
                    var5 = var1;
                    var4 = var2;
                    var2 = copyDataProperties(var5, var4);
                    _closure1_slot7 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getImpressionCappedItemIds';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot16;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getDebugFastImpressionCappingEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hidden';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            var0 = var0.hidden;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'reset';
        var4.key = var6;
        var5 = function() {
            var1 = {};
            var0 = new Array(0);
            var1.itemImpressions = var0;
            var0 = false;
            var1.hidden = var0;
            _closure1_slot7 = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ContentInventoryPersistedStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 8;
    var1 = var4[var1];
    var12 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        _fun89238: for (var _fun89238_ip = 0;;) switch (_fun89238_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.itemIds;
                var0 = _closure1_slot11;
                if (var0) {
                    _fun89238_ip = 31;
                    continue _fun89238
                }
            case 21:
                var2 = _closure1_slot16;
                var0 = undefined;
                var0 = var2.bind(var0)();
            case 31:
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var8 = var0.bind(var2)();
                var0 = _closure1_slot14;
                var2 = undefined;
                var7 = var0.bind(var2)(var3);
                var4 = var7.bind(var2)();
                var3 = var4.done;
                var5 = var4;
                var4 = false;
                var0 = false;
                if (var3) {
                    _fun89238_ip = 152;
                    continue _fun89238
                }
            case 78:
                var11 = var5.value;
                var9 = _closure1_slot9;
                var3 = var9.has;
                var3 = var3.bind(var9)(var11);
                if (var3) {
                    _fun89238_ip = 134;
                    continue _fun89238
                }
            case 100:
                var3 = _closure1_slot7;
                var10 = var3.itemImpressions;
                var9 = var10.push;
                var3 = new Array(2);
                var3[0] = var11;
                var3[1] = var8;
                var3 = var9.bind(var10)(var3);
                var4 = true;
            case 134:
                var10 = var7.bind(var2)();
                var3 = var10.done;
                var5 = var10;
                var0 = var4;
                if (!var3) {
                    _fun89238_ip = 78;
                    continue _fun89238
                }
            case 152:
                var1 = _closure1_slot16;
                var1 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS = var7;
    var7 = function() {
        var2 = _closure1_slot7;
        var1 = new Array(0);
        var2.itemImpressions = var1;
        var2 = _closure1_slot16;
        var0 = undefined;
        var1 = true;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS = var7;
    var7 = function() {
        var0 = false;
        return var0;
    };
    var1.CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS = var7;
    var7 = function() {
        var0 = _closure1_slot12;
        var0 = !var0;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING = var7;
    var3 = function() {
        var1 = _closure1_slot7;
        var0 = var1.hidden;
        var0 = !var0;
        var1.hidden = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var6](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/content_inventory/ContentInventoryPersistedStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 667, 566, 806, 2]);