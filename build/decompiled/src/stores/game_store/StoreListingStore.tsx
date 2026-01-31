// stores/game_store/StoreListingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun98205: for (var _fun98205_ip = 0;;) switch (_fun98205_ip) {
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
                _fun98205_ip = 76;
                continue _fun98205;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun98208: for (var _fun98208_ip = 0;;) switch (_fun98208_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun98208_ip = 46;
                    continue _fun98208
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun98208_ip = 55;
                    continue _fun98208
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun98208_ip = 345;
                    continue _fun98208
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun98208_ip = 323;
                    continue _fun98208
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun98208_ip = 283;
                    continue _fun98208
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun98208_ip = 270;
                    continue _fun98208
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
                    _fun98208_ip = 163;
                    continue _fun98208
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun98208_ip = 179;
                    continue _fun98208
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun98208_ip = 249;
                    continue _fun98208
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun98208_ip = 249;
                    continue _fun98208
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun98208_ip = 234;
                    continue _fun98208
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun98208_ip = 247;
                    continue _fun98208
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun98208_ip = 265;
                continue _fun98208;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun98208_ip = 283;
                continue _fun98208;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun98208_ip = 323;
                    continue _fun98208
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
                    _fun98208_ip = 330;
                    continue _fun98208
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun98209: for (var _fun98209_ip = 0;;) switch (_fun98209_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun98209_ip = 56;
                                continue _fun98209
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
                            _fun98209_ip = 67;
                            continue _fun98209;
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
        _fun98210: for (var _fun98210_ip = 0;;) switch (_fun98210_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun98210_ip = 23;
                    continue _fun98210
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun98210_ip = 33;
                    continue _fun98210
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
                    _fun98210_ip = 70;
                    continue _fun98210
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun98210_ip = 55;
                    continue _fun98210
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun98211: for (var _fun98211_ip = 0;;) switch (_fun98211_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.id;
                var1 = var0.sku;
                var5 = var1.id;
                var2 = _closure1_slot10;
                var8 = var2[var4];
                var3 = _closure1_slot8;
                var2 = var3.createFromServer;
                var3 = var2.bind(var3)(var0);
                var6 = null;
                var2 = var6 != var8;
                if (!var2) {
                    _fun98211_ip = 67;
                    continue _fun98211
                }
            case 54:
                var7 = var8.isSlimDirectoryVersion;
                var7 = var7.bind(var8)();
                var2 = !var7;
            case 67:
                if (!var2) {
                    _fun98211_ip = 80;
                    continue _fun98211
                }
            case 70:
                var7 = var3.isSlimDirectoryVersion;
                var2 = var7.bind(var3)();
            case 80:
                if (var2) {
                    _fun98211_ip = 204;
                    continue _fun98211
                }
            case 83:
                var7 = var0.published;
                var2 = false;
                if (!(var2 !== var7)) {
                    _fun98211_ip = 105;
                    continue _fun98211
                }
            case 95:
                var2 = _closure1_slot13;
                var2[var5] = var4;
                _fun98211_ip = 171;
                continue _fun98211;
            case 105:
                var2 = _closure1_slot12;
                var2 = var2[var5];
                if (!(var6 == var2)) {
                    _fun98211_ip = 153;
                    continue _fun98211
                }
            case 117:
                var6 = _closure1_slot12;
                var2 = global;
                var2 = var2.Set;
                var7 = var2.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var7;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var7;
                var6[var5] = var2;
            case 153:
                var2 = _closure1_slot12;
                var5 = var2[var5];
                var2 = var5.add;
                var2 = var2.bind(var5)(var4);
            case 171:
                var2 = _closure1_slot10;
                var2[var4] = var3;
                var2 = _closure1_slot14;
                var1 = var2.delete;
                var0 = var0.sku;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
            case 204:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var8 = function() {
        var0 = {};
        _closure1_slot10 = var0;
        var0 = {};
        _closure1_slot13 = var0;
        var0 = {};
        _closure1_slot12 = var0;
        var0 = {};
        _closure1_slot11 = var0;
        var0 = global;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var3 = var2;
        var0 = new var3[var0](var2);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot20 = var8;
    var9 = function() {
        _fun98214: for (var _fun98214_ip = 0;;) switch (_fun98214_ip) {
            case 0:
                var1 = _closure1_slot9;
                var0 = _closure1_slot7;
                var0 = var0.locale;
                if (!(var1 !== var0)) {
                    _fun98214_ip = 47;
                    continue _fun98214
                }
            case 21:
                var1 = _closure1_slot20;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var1 = _closure1_slot7;
                var1 = var1.locale;
                var _closure1_slot9 = var1;
                return var0;
            case 47:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot21 = var9;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var7 = {};
    var _closure1_slot11 = var7;
    var7 = {};
    var _closure1_slot12 = var7;
    var7 = {};
    var _closure1_slot13 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot14 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun98216: for (var _fun98216_ip = 0;;) switch (_fun98216_ip) {
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
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun98216_ip = 69;
                        continue _fun98216
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun98216_ip = 105;
                    continue _fun98216;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var2 = var4.waitFor;
            var0 = _closure1_slot7;
            var0 = var2.bind(var4)(var0);
            var3 = var4.syncWith;
            var0 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var0;
            var0 = _closure1_slot21;
            var0 = var3.bind(var4)(var2, var0);
            var0 = _closure1_slot7;
            var0 = var0.locale;
            _closure1_slot9 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'get';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot10;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getForSKU';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun98219: for (var _fun98219_ip = 0;;) switch (_fun98219_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var0 = _closure1_slot13;
                    var3 = var0[var5];
                    var0 = null;
                    if (!(var0 == var4)) {
                        _fun98219_ip = 42;
                        continue _fun98219
                    }
                case 23:
                    var2 = var0 != var3;
                    var0 = null;
                    if (!var2) {
                        _fun98219_ip = 40;
                        continue _fun98219
                    }
                case 32:
                    var2 = _closure1_slot10;
                    var0 = var2[var3];
                case 40:
                    _fun98219_ip = 62;
                    continue _fun98219;
                case 42:
                    var2 = _closure1_slot11;
                    var3 = _closure1_slot19;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var5);
                    var0 = var2[var1];
                case 62:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getUnpublishedForSKU';
        var4.key = var6;
        var6 = function arg0() {
            _fun98220: for (var _fun98220_ip = 0;;) switch (_fun98220_ip) {
                case 0:
                    var2 = _closure1_slot12;
                    var1 = arg0;
                    var3 = var2[var1];
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun98220_ip = 97;
                        continue _fun98220
                    }
                case 20:
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.from;
                    var3 = var1.bind(var2)(var3);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var1 = _closure1_slot10;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 7;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    _fun98220_ip = 101;
                    continue _fun98220;
                case 97:
                    var0 = new Array(0);
                case 101:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getForChannel';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = _closure1_slot11;
            var4 = _closure1_slot19;
            var3 = undefined;
            var2 = arg0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var0);
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isFetchingForSKU';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot14;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getStoreListing';
        var4.key = var6;
        var5 = function arg0() {
            _fun98224: for (var _fun98224_ip = 0;;) switch (_fun98224_ip) {
                case 0:
                    var0 = arg0;
                    var4 = this;
                    var3 = var0.storeListingId;
                    var6 = var0.skuId;
                    var5 = var0.channelId;
                    var0 = var0.isTestMode;
                    if (!var0) {
                        _fun98224_ip = 66;
                        continue _fun98224
                    }
                case 32:
                    var0 = null;
                    if (!(var0 != var6)) {
                        _fun98224_ip = 66;
                        continue _fun98224
                    }
                case 38:
                    var1 = var4.getUnpublishedForSKU;
                    var1 = var1.bind(var4)(var6);
                    if (!(var0 != var1)) {
                        _fun98224_ip = 66;
                        continue _fun98224
                    }
                case 55:
                    var2 = var1.length;
                    var0 = 0;
                    if (!(!(var2 > var0))) {
                        _fun98224_ip = 166;
                        continue _fun98224
                    }
                case 66:
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun98224_ip = 154;
                        continue _fun98224
                    }
                case 72:
                    if (!(var2 == var5)) {
                        _fun98224_ip = 98;
                        continue _fun98224
                    }
                case 76:
                    var8 = var2 != var6;
                    var7 = null;
                    if (!var8) {
                        _fun98224_ip = 96;
                        continue _fun98224
                    }
                case 85:
                    var8 = var4.getForSKU;
                    var7 = var8.bind(var4)(var6);
                case 96:
                    return var7;
                case 98:
                    if (!(var2 != var6)) {
                        _fun98224_ip = 118;
                        continue _fun98224
                    }
                case 102:
                    var2 = var4.getForChannel;
                    var2 = var2.bind(var4)(var5, var6);
                    return var2;
                case 118:
                    var2 = global;
                    var6 = var2.Error;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = 'getStoreListing with channel expects a skuId';
                    var11 = var5;
                    var2 = new var11[var6](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var5;
                    throw var2;
                case 154:
                    var2 = var4.get;
                    var2 = var2.bind(var4)(var3);
                    return var2;
                case 166:
                    var0 = var1[var0];
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'StoreListingStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.skuId;
        var1 = _closure1_slot14;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.STORE_LISTINGS_FETCH_START = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.skuId;
        var1 = _closure1_slot14;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.STORE_LISTINGS_FETCH_FAIL = var10;
    var10 = function arg0() {
        _fun98227: for (var _fun98227_ip = 0;;) switch (_fun98227_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.storeListings;
                var1 = _closure1_slot16;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun98227_ip = 64;
                    continue _fun98227
                }
            case 35:
                var5 = _closure1_slot18;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun98227_ip = 35;
                    continue _fun98227
                }
            case 64:
                return var0;
        }
    };
    var1.STORE_LISTINGS_FETCH_SUCCESS = var10;
    var10 = function arg0() {
        _fun98228: for (var _fun98228_ip = 0;;) switch (_fun98228_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.storeListing;
                var6 = var0.channelId;
                var0 = null;
                if (!(var0 == var6)) {
                    _fun98228_ip = 36;
                    continue _fun98228
                }
            case 20:
                var1 = _closure1_slot18;
                var0 = undefined;
                var0 = var1.bind(var0)(var3);
                _fun98228_ip = 99;
                continue _fun98228;
            case 36:
                var2 = _closure1_slot8;
                var0 = var2.createFromServer;
                var0 = var0.bind(var2)(var3);
                var3 = _closure1_slot11;
                var5 = _closure1_slot19;
                var4 = var0.skuId;
                var2 = undefined;
                var2 = var5.bind(var2)(var6, var4);
                var3[var2] = var0;
                var2 = _closure1_slot13;
                var1 = var0.skuId;
                var0 = var0.id;
                var2[var1] = var0;
            case 99:
                var0 = undefined;
                return var0;
        }
    };
    var1.STORE_LISTING_FETCH_SUCCESS = var10;
    var1.USER_SETTINGS_PROTO_UPDATE = var9;
    var1.APPLICATION_STORE_CLEAR_DATA = var8;
    var3 = function arg0() {
        _fun98229: for (var _fun98229_ip = 0;;) switch (_fun98229_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.giftCode;
                var2 = var0.store_listing;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun98229_ip = 43;
                    continue _fun98229
                }
            case 21:
                var2 = _closure1_slot18;
                var1 = var0.store_listing;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 43:
                var0 = false;
                return var0;
        }
    };
    var1.GIFT_CODE_RESOLVE_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/game_store/StoreListingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1676, 12772, 1304, 566, 806, 2]);