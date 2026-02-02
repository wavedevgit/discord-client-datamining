// modules/applications/ApplicationStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun29431: for (var _fun29431_ip = 0;;) switch (_fun29431_ip) {
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
                _fun29431_ip = 74;
                continue _fun29431;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun29434: for (var _fun29434_ip = 0;;) switch (_fun29434_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun29434_ip = 46;
                    continue _fun29434
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun29434_ip = 55;
                    continue _fun29434
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun29434_ip = 343;
                    continue _fun29434
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun29434_ip = 323;
                    continue _fun29434
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun29434_ip = 283;
                    continue _fun29434
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun29434_ip = 270;
                    continue _fun29434
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
                    _fun29434_ip = 163;
                    continue _fun29434
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun29434_ip = 179;
                    continue _fun29434
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun29434_ip = 249;
                    continue _fun29434
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun29434_ip = 249;
                    continue _fun29434
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun29434_ip = 234;
                    continue _fun29434
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun29434_ip = 247;
                    continue _fun29434
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun29434_ip = 265;
                continue _fun29434;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun29434_ip = 283;
                continue _fun29434;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun29434_ip = 323;
                    continue _fun29434
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
                    _fun29434_ip = 330;
                    continue _fun29434
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun29435: for (var _fun29435_ip = 0;;) switch (_fun29435_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun29435_ip = 56;
                                continue _fun29435
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
                            _fun29435_ip = 67;
                            continue _fun29435;
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
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun29436: for (var _fun29436_ip = 0;;) switch (_fun29436_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun29436_ip = 23;
                    continue _fun29436
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun29436_ip = 33;
                    continue _fun29436
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
                    _fun29436_ip = 70;
                    continue _fun29436
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun29436_ip = 55;
                    continue _fun29436
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun29437: for (var _fun29437_ip = 0;;) switch (_fun29437_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot8;
                var3 = var4.get;
                var0 = var1.id;
                var3 = var3.bind(var4)(var0);
                var6 = _closure1_slot11;
                var5 = var6.set;
                var4 = var1.id;
                var0 = global;
                var7 = var0.Date;
                var0 = var7.now;
                var0 = var0.bind(var7)();
                var0 = var5.bind(var6)(var4, var0);
                var6 = null;
                var5 = var1;
                if (!(var6 != var3)) {
                    _fun29437_ip = 84;
                    continue _fun29437
                }
            case 71:
                var0 = var3.mergeFromApplicationUpdate;
                var5 = var0.bind(var3)(var1);
            case 84:
                var4 = _closure1_slot8;
                var3 = var4.set;
                var0 = var1.id;
                var0 = var3.bind(var4)(var0, var5);
                var4 = _closure1_slot10;
                var3 = var4.set;
                var7 = var1.name;
                var0 = var7.toLowerCase;
                var0 = var0.bind(var7)();
                var0 = var3.bind(var4)(var0, var5);
                var4 = _closure1_slot15;
                var3 = var1.aliases;
                var0 = undefined;
                var7 = var4.bind(var0)(var3);
                var4 = var7.bind(var0)();
                var3 = var4.done;
                if (var3) {
                    _fun29437_ip = 208;
                    continue _fun29437
                }
            case 163:
                var10 = var4.value;
                var9 = _closure1_slot10;
                var8 = var9.set;
                var3 = var10.toLowerCase;
                var3 = var3.bind(var10)();
                var3 = var8.bind(var9)(var3, var5);
                var8 = var7.bind(var0)();
                var3 = var8.done;
                var4 = var8;
                if (!var3) {
                    _fun29437_ip = 163;
                    continue _fun29437
                }
            case 208:
                var3 = var1.linkedGames;
                if (!(var6 != var3)) {
                    _fun29437_ip = 326;
                    continue _fun29437
                }
            case 218:
                var4 = _closure1_slot15;
                var3 = var1.linkedGames;
                var5 = var4.bind(var0)(var3);
                var4 = var5.bind(var0)();
                var3 = var4.done;
                if (var3) {
                    _fun29437_ip = 326;
                    continue _fun29437
                }
            case 245:
                var8 = var4.value;
                var3 = var8.application;
                if (!(var6 != var3)) {
                    _fun29437_ip = 311;
                    continue _fun29437
                }
            case 259:
                var7 = _closure1_slot17;
                var9 = var8.application;
                var3 = _closure1_slot6;
                var3 = var9 instanceof var3;
                if (var3) {
                    _fun29437_ip = 301;
                    continue _fun29437
                }
            case 279:
                var10 = _closure1_slot6;
                var9 = var10.createFromServer;
                var3 = var8.application;
                var3 = var9.bind(var10)(var3);
                _fun29437_ip = 306;
                continue _fun29437;
            case 301:
                var3 = var8.application;
            case 306:
                var3 = var7.bind(var0)(var3);
            case 311:
                var7 = var5.bind(var0)();
                var3 = var7.done;
                var4 = var7;
                if (!var3) {
                    _fun29437_ip = 245;
                    continue _fun29437
                }
            case 326:
                var3 = _closure1_slot12;
                var2 = var3.delete;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var7 = function arg0() {
        _fun29438: for (var _fun29438_ip = 0;;) switch (_fun29438_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.wishlistData;
                var2 = var0.applications;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun29438_ip = 89;
                    continue _fun29438
                }
            case 21:
                var1 = var2.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun29438_ip = 89;
                    continue _fun29438
                }
            case 32:
                var1 = _closure1_slot15;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun29438_ip = 87;
                    continue _fun29438
                }
            case 58:
                var5 = _closure1_slot17;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun29438_ip = 58;
                    continue _fun29438
                }
            case 87:
                return var0;
            case 89:
                var0 = false;
                return var0;
        }
    };
    var0 = function arg0() {
        var2 = _closure1_slot17;
        var3 = _closure1_slot6;
        var1 = var3.createFromServer;
        var0 = arg0;
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun29440: for (var _fun29440_ip = 0;;) switch (_fun29440_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var4 = var0.applicationId;
                var0 = _closure1_slot13;
                var0 = var0.botUserIdToAppUsage;
                var3 = var0[var2];
                var0 = _closure1_slot13;
                var1 = var0.botUserIdToAppUsage;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun29440_ip = 65;
                    continue _fun29440
                }
            case 46:
                var0 = {};
                var0.applicationId = var4;
                var3 = var3.lastUsedMs;
                var0.lastUsedMs = var3;
                _fun29440_ip = 96;
                continue _fun29440;
            case 65:
                var3 = {};
                var3.applicationId = var4;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var3.lastUsedMs = var4;
                var0 = var3;
            case 96:
                var1[var2] = var0;
                var1 = global;
                var0 = var1.Map;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var14 = var2;
                var0 = new var14[var0](var13);
                var4 = var0 instanceof Object ? var0 : var2;
                var3 = var1.Object;
                var2 = var3.entries;
                var0 = _closure1_slot13;
                var0 = var0.botUserIdToAppUsage;
                var9 = var2.bind(var3)(var0);
                var0 = var9.length;
                var5 = 0;
                var2 = var5 < var0;
                var0 = undefined;
                var8 = 2;
                var7 = 1;
                var3 = 0;
                if (!var2) {
                    _fun29440_ip = 224;
                    continue _fun29440
                }
            case 179:
                var10 = var9[var3];
                var2 = _closure1_slot5;
                var2 = var2.bind(var0)(var10, var8);
                var11 = var2[var5];
                var10 = var2[var7];
                var2 = var4.set;
                var2 = var2.bind(var4)(var11, var10);
                var3 = var3 + 1;
                var2 = var9.length;
                if (var3 < var2) {
                    _fun29440_ip = 179;
                    continue _fun29440
                }
            case 224:
                var3 = var1.Array;
                var2 = var3.from;
                var1 = var4.entries;
                var1 = var1.bind(var4)();
                var3 = var2.bind(var3)(var1);
                var2 = var3.sort;
                var1 = function(arg0, arg1) { // Environment: var1
                    var0 = arg1;
                    var2 = 1;
                    var0 = var0[var2];
                    var1 = var0.lastUsedMs;
                    var0 = arg0;
                    var0 = var0[var2];
                    var0 = var0.lastUsedMs;
                    var0 = var1 - var0;
                    return var0;
                };
                var4 = var2.bind(var3)(var1);
                var1 = var4.length;
                var1 = var5 < var1;
                var3 = 10;
                var2 = 0;
                if (!var1) {
                    _fun29440_ip = 323;
                    continue _fun29440
                }
            case 285:
                if (!(var2 >= var3)) {
                    _fun29440_ip = 311;
                    continue _fun29440
                }
            case 289:
                var1 = var4[var2];
                var7 = var1[var5];
                var1 = _closure1_slot13;
                var1 = var1.botUserIdToAppUsage;
                var1 = delete var1[var7];
            case 311:
                var2 = var2 + 1;
                var1 = var4.length;
                if (var2 < var1) {
                    _fun29440_ip = 285;
                    continue _fun29440
                }
            case 323:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var8 = function arg0() {
        _fun29442: for (var _fun29442_ip = 0;;) switch (_fun29442_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.entitlements;
                var0 = _closure1_slot15;
                var7 = undefined;
                var6 = var0.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var4 = null;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun29442_ip = 122;
                    continue _fun29442
                }
            case 44:
                var1 = var3.value;
                var1 = var1.sku;
                var10 = var4 == var1;
                var9 = undefined;
                if (var10) {
                    _fun29442_ip = 69;
                    continue _fun29442
                }
            case 64:
                var9 = var1.application;
            case 69:
                if (!(var4 != var9)) {
                    _fun29442_ip = 104;
                    continue _fun29442
                }
            case 73:
                var9 = _closure1_slot17;
                var11 = _closure1_slot6;
                var10 = var11.createFromServer;
                var1 = var1.application;
                var1 = var10.bind(var11)(var1);
                var1 = var9.bind(var7)(var1);
                var2 = true;
            case 104:
                var10 = var6.bind(var7)();
                var1 = var10.done;
                var3 = var10;
                var0 = var2;
                if (!var1) {
                    _fun29442_ip = 44;
                    continue _fun29442
                }
            case 122:
                return var0;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = new Array(0);
    var _closure1_slot7 = var6;
    var6 = var1.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot8 = var6;
    var6 = var1.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot9 = var6;
    var6 = var1.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot10 = var6;
    var6 = var1.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot11 = var6;
    var1 = var1.Map;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var14 = var6;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot12 = var1;
    var1 = {};
    var6 = {};
    var1.botUserIdToAppUsage = var6;
    var _closure1_slot13 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun29444: for (var _fun29444_ip = 0;;) switch (_fun29444_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun29444_ip = 69;
                        continue _fun29444
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun29444_ip = 105;
                    continue _fun29444;
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
            _fun29445: for (var _fun29445_ip = 0;;) switch (_fun29445_ip) {
                case 0:
                    var9 = arg0;
                    var0 = null;
                    if (!(var0 != var9)) {
                        _fun29445_ip = 158;
                        continue _fun29445
                    }
                case 12:
                    var0 = var9.botUserIdToAppUsage;
                    var1 = 'object';
                    var0 = typeof var0;
                    if (!(var1 === var0)) {
                        _fun29445_ip = 158;
                        continue _fun29445
                    }
                case 32:
                    var7 = var9.botUserIdToAppUsage;
                    var2 = 0;
                    var1 = 'number';
                    var0 = 'string';
                    for (var4 in var7)
                        case 59: {
                            case 68: var12 = var4;
                            var10 = var9.botUserIdToAppUsage;
                            var10 = var10[var12];
                            var14 = var10.applicationId;
                            var13 = var10.lastUsedMs;
                            var10 = typeof var14;
                            var10 = var0 === var10;
                            if (!var10) {
                                _fun29445_ip = 111;
                                continue _fun29445
                            }
                            case 102: var11 = var14.length;
                            var10 = var11 > var2;
                            case 111: if (!var10) {
                                _fun29445_ip = 121;
                                continue _fun29445
                            }
                            case 114: var11 = typeof var13;
                            var10 = var1 === var11;
                            case 121: if (!var10) {
                                _fun29445_ip = 128;
                                continue _fun29445
                            }
                            case 124: var10 = var13 > var2;
                            case 128: if (!var10) {
                                _fun29445_ip = 59;
                                continue _fun29445
                            }
                            case 131: var10 = _closure1_slot13;
                            var11 = var10.botUserIdToAppUsage;
                            var10 = {};
                            var10.applicationId = var14;
                            var10.lastUsedMs = var13;
                            var11[var12] = var10;
                            _fun29445_ip = 59;
                            continue _fun29445;
                        }
                case 158:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_getAllApplications';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var3 = _closure1_slot8;
            var0 = var3.values;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGuildApplication';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun29448: for (var _fun29448_ip = 0;;) switch (_fun29448_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var0 = null;
                    if (!(var0 != var6)) {
                        _fun29448_ip = 96;
                        continue _fun29448
                    }
                case 12:
                    var1 = _closure1_slot15;
                    var2 = _closure1_slot8;
                    var0 = var2.values;
                    var0 = var0.bind(var2)();
                    var4 = undefined;
                    var3 = var1.bind(var4)(var0);
                    var1 = var3.bind(var4)();
                    var0 = var1.done;
                    var2 = var1;
                    if (var0) {
                        _fun29448_ip = 96;
                        continue _fun29448
                    }
                case 54:
                    var0 = var2.value;
                    var1 = var0.guildId;
                    if (!(var1 === var6)) {
                        _fun29448_ip = 77;
                        continue _fun29448
                    }
                case 68:
                    var1 = var0.type;
                    if (!(var1 !== var5)) {
                        _fun29448_ip = 94;
                        continue _fun29448
                    }
                case 77:
                    var7 = var3.bind(var4)();
                    var1 = var7.done;
                    var2 = var7;
                    if (var1) {
                        _fun29448_ip = 96;
                        continue _fun29448
                    }
                case 92:
                    _fun29448_ip = 54;
                    continue _fun29448;
                case 94:
                    return var0;
                case 96:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getGuildApplicationIds';
        var4.key = var6;
        var6 = function arg0() {
            _fun29449: for (var _fun29449_ip = 0;;) switch (_fun29449_ip) {
                case 0:
                    var4 = arg0;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun29449_ip = 36;
                        continue _fun29449
                    }
                case 9:
                    var3 = _closure1_slot9;
                    var0 = var3.get;
                    var0 = var0.bind(var3)(var4);
                    if (!(var2 == var0)) {
                        _fun29449_ip = 34;
                        continue _fun29449
                    }
                case 30:
                    var0 = _closure1_slot7;
                case 34:
                    _fun29449_ip = 43;
                    continue _fun29449;
                case 36:
                    var0 = _closure1_slot7;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getApplication';
        var4.key = var6;
        var6 = function arg0() {
            _fun29450: for (var _fun29450_ip = 0;;) switch (_fun29450_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun29450_ip = 13;
                        continue _fun29450
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var1 = _closure1_slot8;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getApplicationByName';
        var4.key = var6;
        var6 = function arg0() {
            _fun29451: for (var _fun29451_ip = 0;;) switch (_fun29451_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun29451_ip = 13;
                        continue _fun29451
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = var1.toLowerCase;
                    var3 = var0.bind(var1)();
                    var2 = _closure1_slot10;
                    var0 = var2.has;
                    var2 = var0.bind(var2)(var3);
                    var0 = undefined;
                    if (!var2) {
                        _fun29451_ip = 59;
                        continue _fun29451
                    }
                case 45:
                    var2 = _closure1_slot10;
                    var1 = var2.get;
                    var0 = var1.bind(var2)(var3);
                case 59:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getApplicationLastUpdated';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot11;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isFetchingApplication';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = var2.get;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = true;
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'didFetchingApplicationFail';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = var2.get;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = false;
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getFetchingOrFailedFetchingIds';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var3 = _closure1_slot12;
            var0 = var3.keys;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getAppIdForBotUserId';
        var4.key = var6;
        var5 = function arg0() {
            _fun29456: for (var _fun29456_ip = 0;;) switch (_fun29456_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun29456_ip = 13;
                        continue _fun29456
                    }
                case 9:
                    var1 = undefined;
                    return var1;
                case 13:
                    var1 = _closure1_slot13;
                    var1 = var1.botUserIdToAppUsage;
                    var1 = var1[var2];
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun29456_ip = 44;
                        continue _fun29456
                    }
                case 39:
                    var0 = var1.applicationId;
                case 44:
                    return var0;
            }
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ApplicationStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 8;
    var1 = var4[var1];
    var13 = var5.bind(var0)(var1);
    var1 = {};
    var9 = function() {
        var2 = _closure1_slot8;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var2 = _closure1_slot9;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var2 = _closure1_slot10;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var2 = _closure1_slot11;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot12;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var9;
    var9 = function arg0() {
        _fun29458: for (var _fun29458_ip = 0;;) switch (_fun29458_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applications;
                var1 = _closure1_slot15;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun29458_ip = 88;
                    continue _fun29458
                }
            case 35:
                var8 = var2.value;
                var5 = _closure1_slot17;
                var1 = _closure1_slot6;
                var6 = var1.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var6;
                var1 = new var9[var1](var8, var7);
                var1 = var1 instanceof Object ? var1 : var6;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun29458_ip = 35;
                    continue _fun29458
                }
            case 88:
                return var0;
        }
    };
    var1.OVERLAY_INITIALIZE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var4 = var0.applicationId;
        var2 = _closure1_slot12;
        var1 = var2.get;
        var1 = var1.bind(var2)(var4);
        var3 = _closure1_slot12;
        var2 = var3.set;
        var0 = true;
        var2 = var2.bind(var3)(var4, var0);
        var0 = var0 !== var1;
        return var0;
    };
    var1.APPLICATION_FETCH = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.application;
        var1 = _closure1_slot18;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.APPLICATION_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var4 = var0.applicationId;
        var2 = _closure1_slot12;
        var1 = var2.get;
        var1 = var1.bind(var2)(var4);
        var3 = _closure1_slot12;
        var2 = var3.set;
        var0 = false;
        var2 = var2.bind(var3)(var4, var0);
        var0 = var0 !== var1;
        return var0;
    };
    var1.APPLICATION_FETCH_FAIL = var9;
    var9 = function arg0() {
        _fun29462: for (var _fun29462_ip = 0;;) switch (_fun29462_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.applicationIds;
                var0 = _closure1_slot15;
                var5 = undefined;
                var4 = var0.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = true;
                var0 = false;
                if (var1) {
                    _fun29462_ip = 92;
                    continue _fun29462
                }
            case 39:
                var9 = var2.value;
                var7 = _closure1_slot12;
                var1 = var7.get;
                var1 = var1.bind(var7)(var9);
                var8 = _closure1_slot12;
                var7 = var8.set;
                var7 = var7.bind(var8)(var9, var3);
                var0 = var3 !== var1;
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun29462_ip = 39;
                    continue _fun29462
                }
            case 92:
                return var0;
        }
    };
    var1.APPLICATIONS_FETCH = var9;
    var9 = function arg0() {
        _fun29463: for (var _fun29463_ip = 0;;) switch (_fun29463_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applications;
                var1 = _closure1_slot15;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun29463_ip = 79;
                    continue _fun29463
                }
            case 35:
                var7 = var2.value;
                var5 = _closure1_slot17;
                var6 = _closure1_slot6;
                var1 = var6.createFromServer;
                var1 = var1.bind(var6)(var7);
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun29463_ip = 35;
                    continue _fun29463
                }
            case 79:
                return var0;
        }
    };
    var1.APPLICATIONS_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        _fun29464: for (var _fun29464_ip = 0;;) switch (_fun29464_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.applicationIds;
                var0 = _closure1_slot15;
                var5 = undefined;
                var4 = var0.bind(var5)(var1);
                var0 = var4.bind(var5)();
                var1 = var0.done;
                var3 = false;
                var2 = var0;
                var0 = false;
                if (var1) {
                    _fun29464_ip = 95;
                    continue _fun29464
                }
            case 42:
                var9 = var2.value;
                var7 = _closure1_slot12;
                var1 = var7.get;
                var1 = var1.bind(var7)(var9);
                var8 = _closure1_slot12;
                var7 = var8.set;
                var7 = var7.bind(var8)(var9, var3);
                var0 = var3 !== var1;
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun29464_ip = 42;
                    continue _fun29464
                }
            case 95:
                return var0;
        }
    };
    var1.APPLICATIONS_FETCH_FAIL = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.application;
        var1 = _closure1_slot18;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.APPLICATION_UPDATE = var9;
    var1.APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS = var8;
    var1.ENTITLEMENTS_FETCH_FOR_USER_SUCCESS = var8;
    var1.ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        _fun29466: for (var _fun29466_ip = 0;;) switch (_fun29466_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var5 = var0.applications;
                var3 = new Array(0);
                var2 = _closure1_slot15;
                var0 = undefined;
                var6 = var2.bind(var0)(var5);
                var5 = var6.bind(var0)();
                var2 = var5.done;
                if (var2) {
                    _fun29466_ip = 103;
                    continue _fun29466
                }
            case 44:
                var9 = var5.value;
                var7 = var3.push;
                var2 = var9.id;
                var2 = var7.bind(var3)(var2);
                var7 = _closure1_slot17;
                var8 = _closure1_slot6;
                var2 = var8.createFromServer;
                var2 = var2.bind(var8)(var9);
                var2 = var7.bind(var0)(var2);
                var7 = var6.bind(var0)();
                var2 = var7.done;
                var5 = var7;
                if (!var2) {
                    _fun29466_ip = 44;
                    continue _fun29466
                }
            case 103:
                var2 = _closure1_slot9;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
                return var0;
        }
    };
    var1.GUILD_APPLICATIONS_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        _fun29467: for (var _fun29467_ip = 0;;) switch (_fun29467_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.payments;
                var0 = global;
                var0 = var0.Set;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var11 = var1;
                var0 = new var11[var0](var10);
                var0 = var0 instanceof Object ? var0 : var1;
                var1 = _closure1_slot15;
                var5 = undefined;
                var4 = var1.bind(var5)(var2);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = null;
                if (var1) {
                    _fun29467_ip = 154;
                    continue _fun29467
                }
            case 65:
                var1 = var2.value;
                var1 = var1.sku;
                var7 = var3 == var1;
                var9 = undefined;
                if (var7) {
                    _fun29467_ip = 90;
                    continue _fun29467
                }
            case 85:
                var9 = var1.application;
            case 90:
                var1 = var3 == var9;
                if (var1) {
                    _fun29467_ip = 112;
                    continue _fun29467
                }
            case 97:
                var8 = var0.has;
                var7 = var9.id;
                var1 = var8.bind(var0)(var7);
            case 112:
                if (var1) {
                    _fun29467_ip = 139;
                    continue _fun29467
                }
            case 115:
                var7 = _closure1_slot17;
                var8 = _closure1_slot6;
                var1 = var8.createFromServer;
                var1 = var1.bind(var8)(var9);
                var1 = var7.bind(var5)(var1);
            case 139:
                var7 = var4.bind(var5)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun29467_ip = 65;
                    continue _fun29467
                }
            case 154:
                var1 = var0.size;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
        }
    };
    var1.BILLING_PAYMENTS_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        _fun29468: for (var _fun29468_ip = 0;;) switch (_fun29468_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.payment;
                var4 = var1.sku;
                var3 = null;
                var5 = var3 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun29468_ip = 33;
                    continue _fun29468
                }
            case 28:
                var2 = var4.application;
            case 33:
                if (!(var3 != var2)) {
                    _fun29468_ip = 77;
                    continue _fun29468
                }
            case 37:
                var2 = _closure1_slot17;
                var4 = _closure1_slot6;
                var3 = var4.createFromServer;
                var1 = var1.sku;
                var1 = var1.application;
                var1 = var3.bind(var4)(var1);
                var1 = var2.bind(var0)(var1);
                return var0;
            case 77:
                var0 = false;
                return var0;
        }
    };
    var1.PAYMENT_UPDATE = var8;
    var8 = function arg0() {
        _fun29469: for (var _fun29469_ip = 0;;) switch (_fun29469_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.invite;
                var2 = var0.target_application;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun29469_ip = 58;
                    continue _fun29469
                }
            case 21:
                var2 = _closure1_slot17;
                var3 = _closure1_slot6;
                var1 = var3.createFromServer;
                var0 = var0.target_application;
                var1 = var1.bind(var3)(var0);
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 58:
                var0 = false;
                return var0;
        }
    };
    var1.INVITE_RESOLVE_SUCCESS = var8;
    var8 = function arg0() {
        _fun29470: for (var _fun29470_ip = 0;;) switch (_fun29470_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.giftCode;
                var4 = var1.store_listing;
                var3 = null;
                var5 = var3 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun29470_ip = 39;
                    continue _fun29470
                }
            case 28:
                var4 = var4.sku;
                var2 = var4.application;
            case 39:
                if (!(var3 != var2)) {
                    _fun29470_ip = 89;
                    continue _fun29470
                }
            case 43:
                var2 = _closure1_slot17;
                var4 = _closure1_slot6;
                var3 = var4.createFromServer;
                var1 = var1.store_listing;
                var1 = var1.sku;
                var1 = var1.application;
                var1 = var3.bind(var4)(var1);
                var1 = var2.bind(var0)(var1);
                return var0;
            case 89:
                var0 = false;
                return var0;
        }
    };
    var1.GIFT_CODE_RESOLVE_SUCCESS = var8;
    var8 = function arg0() {
        _fun29471: for (var _fun29471_ip = 0;;) switch (_fun29471_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.libraryApplications;
                var1 = _closure1_slot15;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun29471_ip = 84;
                    continue _fun29471
                }
            case 35:
                var1 = var2.value;
                var5 = _closure1_slot17;
                var7 = _closure1_slot6;
                var6 = var7.createFromServer;
                var1 = var1.application;
                var1 = var6.bind(var7)(var1);
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun29471_ip = 35;
                    continue _fun29471
                }
            case 84:
                return var0;
        }
    };
    var1.LIBRARY_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        _fun29472: for (var _fun29472_ip = 0;;) switch (_fun29472_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.storeListing;
                var1 = var0.sku;
                var2 = var1.application;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun29472_ip = 68;
                    continue _fun29472
                }
            case 26:
                var2 = _closure1_slot17;
                var3 = _closure1_slot6;
                var1 = var3.createFromServer;
                var0 = var0.sku;
                var0 = var0.application;
                var1 = var1.bind(var3)(var0);
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 68:
                var0 = false;
                return var0;
        }
    };
    var1.STORE_LISTING_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.messages;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = function arg0() {
                _fun29475: for (var _fun29475_ip = 0;;) switch (_fun29475_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.attachments;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun29475_ip = 32;
                            continue _fun29475
                        }
                    case 15:
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun29476: for (var _fun29476_ip = 0;;) switch (_fun29476_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.application;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun29476_ip = 48;
                                        continue _fun29476
                                    }
                                case 14:
                                    var2 = _closure1_slot17;
                                    var3 = _closure1_slot6;
                                    var1 = var3.createFromServer;
                                    var0 = var0.application;
                                    var1 = var1.bind(var3)(var0);
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 48:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                    case 32:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_MESSAGES_SUCCESS = var8;
    var8 = function arg0() {
        _fun29477: for (var _fun29477_ip = 0;;) switch (_fun29477_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.userProfile;
                var3 = var0.user;
                var0 = var0.application;
                var1 = var3.bot;
                if (!var1) {
                    _fun29477_ip = 34;
                    continue _fun29477
                }
            case 28:
                var2 = null;
                var1 = var2 != var0;
            case 34:
                if (!var1) {
                    _fun29477_ip = 71;
                    continue _fun29477
                }
            case 37:
                var2 = _closure1_slot19;
                var1 = {};
                var3 = var3.id;
                var1.userId = var3;
                var0 = var0.id;
                var1.applicationId = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 71:
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_PROFILE_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        _fun29478: for (var _fun29478_ip = 0;;) switch (_fun29478_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.botUserId;
                var1 = _closure1_slot13;
                var1 = var1.botUserIdToAppUsage;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun29478_ip = 84;
                    continue _fun29478
                }
            case 32:
                var0 = _closure1_slot13;
                var1 = var0.botUserIdToAppUsage;
                var0 = {};
                var6 = var0;
                var5 = var3;
                var3 = copyDataProperties(var6, var5);
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var4 = var3.bind(var4)();
                var3 = 'lastUsedMs';
                var0[var3] = var4;
                var1[var2] = var0;
            case 84:
                var0 = undefined;
                return var0;
        }
    };
    var1.APP_DM_OPEN = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.tokens;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun29480: for (var _fun29480_ip = 0;;) switch (_fun29480_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot17;
                    var5 = _closure1_slot6;
                    var2 = var5.createFromServer;
                    var0 = var3.application;
                    var2 = var2.bind(var5)(var0);
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var2 = var3.application;
                    var4 = var2.bot;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun29480_ip = 88;
                        continue _fun29480
                    }
                case 54:
                    var2 = _closure1_slot19;
                    var1 = {};
                    var4 = var4.id;
                    var1.userId = var4;
                    var3 = var3.application;
                    var3 = var3.id;
                    var1.applicationId = var3;
                    var1 = var2.bind(var0)(var1);
                case 88:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.USER_AUTHORIZED_APPS_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.items;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun29482: for (var _fun29482_ip = 0;;) switch (_fun29482_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.application;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun29482_ip = 48;
                        continue _fun29482
                    }
                case 14:
                    var2 = _closure1_slot17;
                    var3 = _closure1_slot6;
                    var1 = var3.createFromServer;
                    var0 = var0.application;
                    var1 = var1.bind(var3)(var0);
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 48:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.application;
        var2 = _closure1_slot17;
        var1 = _closure1_slot6;
        var0 = var1.createFromServer;
        var1 = var0.bind(var1)(var3);
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.OAUTH2_TOKEN_CREATE = var8;
    var1.WISHLIST_FETCH_SUCCESS = var7;
    var1.WISHLIST_ADD_SKU_SUCCESS = var7;
    var1.WISHLIST_REMOVE_SKU_SUCCESS = var7;
    var7 = function arg0() {
        _fun29484: for (var _fun29484_ip = 0;;) switch (_fun29484_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.storefront;
                var2 = var0.application;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun29484_ip = 36;
                    continue _fun29484
                }
            case 20:
                var1 = _closure1_slot17;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            case 36:
                var0 = false;
                return var0;
        }
    };
    var1.SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS = var7;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.application;
        var1 = _closure1_slot17;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var6](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/ApplicationStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 3416, 566, 806, 2]);