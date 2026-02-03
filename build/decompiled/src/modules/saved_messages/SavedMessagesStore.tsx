// modules/saved_messages/SavedMessagesStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun75914: for (var _fun75914_ip = 0;;) switch (_fun75914_ip) {
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
                _fun75914_ip = 76;
                continue _fun75914;
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
        _fun75917: for (var _fun75917_ip = 0;;) switch (_fun75917_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun75917_ip = 46;
                    continue _fun75917
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun75917_ip = 55;
                    continue _fun75917
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun75917_ip = 345;
                    continue _fun75917
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun75917_ip = 323;
                    continue _fun75917
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun75917_ip = 283;
                    continue _fun75917
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun75917_ip = 270;
                    continue _fun75917
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
                    _fun75917_ip = 163;
                    continue _fun75917
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun75917_ip = 179;
                    continue _fun75917
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun75917_ip = 249;
                    continue _fun75917
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun75917_ip = 249;
                    continue _fun75917
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun75917_ip = 234;
                    continue _fun75917
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun75917_ip = 247;
                    continue _fun75917
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun75917_ip = 265;
                continue _fun75917;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun75917_ip = 283;
                continue _fun75917;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun75917_ip = 323;
                    continue _fun75917
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
                    _fun75917_ip = 330;
                    continue _fun75917
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun75918: for (var _fun75918_ip = 0;;) switch (_fun75918_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun75918_ip = 56;
                                continue _fun75918
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
                            _fun75918_ip = 67;
                            continue _fun75918;
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
        _fun75919: for (var _fun75919_ip = 0;;) switch (_fun75919_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun75919_ip = 23;
                    continue _fun75919
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun75919_ip = 33;
                    continue _fun75919
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
                    _fun75919_ip = 70;
                    continue _fun75919
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun75919_ip = 55;
                    continue _fun75919
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun75920: for (var _fun75920_ip = 0;;) switch (_fun75920_ip) {
            case 0:
                var2 = arg0;
                var1 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun75920_ip = 117;
                    continue _fun75920
                }
            case 12: // try_start_0
                var0 = global;
                var3 = var0.Date;
                var6 = var1;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var2;
                var0 = new var7[var3](var6, var5);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var2.getTime;
                var0 = var0.bind(var2)();
            case 53: // try_end0
                return var0;
            case 55: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = global;
                var2 = var0.Error;
                var4 = var1;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var1 = 'Invalid date given (';
                var0 = ')';
                var6 = var3.bind(var1)(var4, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 117:
                var0 = _closure1_slot8;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var1 = function arg0() {
        _fun75921: for (var _fun75921_ip = 0;;) switch (_fun75921_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.dueAt;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun75921_ip = 45;
                    continue _fun75921
                }
            case 15:
                var2 = _closure1_slot8;
                var4 = _closure1_slot18;
                var3 = var1.savedAt;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var2 - var0;
                _fun75921_ip = 65;
                continue _fun75921;
            case 45:
                var3 = _closure1_slot18;
                var2 = var1.dueAt;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 65:
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var0 = function arg0() {
        _fun75922: for (var _fun75922_ip = 0;;) switch (_fun75922_ip) {
            case 0:
                var2 = _closure1_slot14;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun75922_ip = 40;
                    continue _fun75922
                }
            case 29:
                var2 = var1.size;
                var1 = 0;
                var0 = var2 > var1;
            case 40:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var3 = var0.messageId;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '-';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun75924: for (var _fun75924_ip = 0;;) switch (_fun75924_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot21;
                var3 = var2.saveData;
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var4 = _closure1_slot9;
                var3 = var4.get;
                var3 = var3.bind(var4)(var6);
                var5 = null;
                if (!(var5 == var3)) {
                    _fun75924_ip = 64;
                    continue _fun75924
                }
            case 43:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                _closure1_slot11 = var3;
            case 64:
                var4 = _closure1_slot9;
                var3 = var4.set;
                var3 = var3.bind(var4)(var6, var2);
                var3 = var2.saveData;
                var3 = var3.messageId;
                var4 = var2.saveData;
                var8 = var4.channelId;
                var6 = _closure1_slot14;
                var4 = var6.get;
                var7 = var4.bind(var6)(var8);
                if (!(var5 == var7)) {
                    _fun75924_ip = 147;
                    continue _fun75924
                }
            case 119:
                var4 = global;
                var4 = var4.Set;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var6;
                var4 = new var11[var4](var10);
                var7 = var4 instanceof Object ? var4 : var6;
            case 147:
                var4 = var7.add;
                var4 = var4.bind(var7)(var3);
                var6 = _closure1_slot14;
                var4 = var6.set;
                var4 = var4.bind(var6)(var8, var7);
                var4 = var2.message;
                if (!(var5 == var4)) {
                    _fun75924_ip = 195;
                    continue _fun75924
                }
            case 181:
                var6 = _closure1_slot13;
                var4 = var6.add;
                var4 = var4.bind(var6)(var3);
            case 195:
                var4 = var2.saveData;
                var4 = var4.dueAt;
                if (!(var5 != var4)) {
                    _fun75924_ip = 255;
                    continue _fun75924
                }
            case 211:
                var4 = global;
                var4 = var4.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var5;
                var4 = new var11[var4](var10);
                var4 = var4 instanceof Object ? var4 : var5;
                var2 = var2.saveData;
                var2 = var2.dueAt;
                if (!(!(var4 > var2))) {
                    _fun75924_ip = 271;
                    continue _fun75924
                }
            case 255:
                var4 = _closure1_slot12;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                _fun75924_ip = 285;
                continue _fun75924;
            case 271:
                var2 = _closure1_slot12;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
            case 285:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun75925: for (var _fun75925_ip = 0;;) switch (_fun75925_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.messageId;
                var2 = var0.channelId;
                var3 = _closure1_slot21;
                var1 = {};
                var1.messageId = var4;
                var1.channelId = var2;
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var4 = _closure1_slot9;
                var1 = var4.get;
                var4 = var1.bind(var4)(var3);
                var1 = null;
                var5 = var1 == var4;
                if (var5) {
                    _fun75925_ip = 65;
                    continue _fun75925
                }
            case 60:
                var2 = var4.message;
            case 65:
                if (!(var1 != var2)) {
                    _fun75925_ip = 106;
                    continue _fun75925
                }
            case 69:
                var2 = {};
                var7 = var2;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var2.message = var1;
                var1 = _closure1_slot9;
                var0 = var1.set;
                var0 = var0.bind(var1)(var3, var2);
                var0 = true;
                return var0;
            case 106:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var9 = function() {
        _fun75926: for (var _fun75926_ip = 0;;) switch (_fun75926_ip) {
            case 0:
                var0 = _closure1_slot13;
                var1 = var0.size;
                var0 = 0;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun75926_ip = 42;
                    continue _fun75926
                }
            case 21:
                var2 = _closure1_slot10;
                var1 = !var2;
                if (var2) {
                    _fun75926_ip = 39;
                    continue _fun75926
                }
            case 31:
                var2 = true;
                _closure1_slot10 = var2;
                var1 = undefined;
            case 39:
                var0 = var1;
            case 42:
                return var0;
        }
    };
    var3 = global;
    var12 = var3.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var10 = true;
    var8.value = var10;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var8);
    var8 = 0;
    var11 = var6[var8];
    var0 = undefined;
    var11 = var7.bind(var0)(var11);
    var _closure1_slot2 = var11;
    var11 = 1;
    var11 = var6[var11];
    var11 = var7.bind(var0)(var11);
    var _closure1_slot3 = var11;
    var11 = 2;
    var11 = var6[var11];
    var11 = var7.bind(var0)(var11);
    var _closure1_slot4 = var11;
    var11 = 3;
    var11 = var6[var11];
    var11 = var7.bind(var0)(var11);
    var _closure1_slot5 = var11;
    var11 = 4;
    var11 = var6[var11];
    var11 = var7.bind(var0)(var11);
    var _closure1_slot6 = var11;
    var11 = 5;
    var11 = var6[var11];
    var11 = var7.bind(var0)(var11);
    var _closure1_slot7 = var11;
    var11 = 10000000000000.0;
    var _closure1_slot8 = var11;
    var11 = 6;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var14 = var11.SecondaryIndexMap;
    var11 = var14.prototype;
    var12 = Object.create(var11, {
        constructor: {
            value: var14
        }
    });
    var17 = function(arg0) { // Environment: var4
        _fun75927: for (var _fun75927_ip = 0;;) switch (_fun75927_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.saveData;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 7;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.SavedMessageSortTypes;
                var3 = var0.ALL;
                var0 = new Array(2);
                var0[0] = var3;
                var3 = var1.dueAt;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun75927_ip = 97;
                    continue _fun75927
                }
            case 66:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.SavedMessageSortTypes;
                var1 = var1.BOOKMARK;
                _fun75927_ip = 126;
                continue _fun75927;
            case 97:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.SavedMessageSortTypes;
                var1 = var2.REMINDER;
            case 126:
                var0[1] = var1;
                return var0;
        }
    };
    var16 = function(arg0) { // Environment: var4
        var0 = arg0;
        var2 = var0.saveData;
        var1 = _closure1_slot19;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var18 = var12;
    var11 = new var18[var14](var17, var16, var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot9 = var11;
    var _closure1_slot10 = var10;
    var _closure1_slot11 = var8;
    var8 = var3.Set;
    var10 = var8.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var8
        }
    });
    var18 = var10;
    var8 = new var18[var8](var17);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot12 = var8;
    var8 = var3.Set;
    var10 = var8.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var8
        }
    });
    var18 = var10;
    var8 = new var18[var8](var17);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot13 = var8;
    var3 = var3.Map;
    var8 = var3.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var3
        }
    });
    var18 = var8;
    var3 = new var18[var3](var17);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun75930: for (var _fun75930_ip = 0;;) switch (_fun75930_ip) {
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
                        _fun75930_ip = 69;
                        continue _fun75930
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun75930_ip = 105;
                    continue _fun75930;
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
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSavedMessages';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot9;
            var1 = var2.values;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 7;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.SavedMessageSortTypes;
            var0 = var0.ALL;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSavedMessage';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot9;
            var1 = var2.get;
            var4 = _closure1_slot21;
            var3 = {};
            var0 = arg0;
            var3.channelId = var0;
            var0 = arg1;
            var3.messageId = var0;
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getMessageBookmarks';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot9;
            var1 = var2.values;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 7;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.SavedMessageSortTypes;
            var0 = var0.BOOKMARK;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getMessageReminders';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot9;
            var1 = var2.values;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 7;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.SavedMessageSortTypes;
            var0 = var0.REMINDER;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getOverdueMessageReminderCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            var0 = var0.size;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasOverdueReminder';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getSavedMessageCount';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot9;
            var0 = var1.size;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getIsStale';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getLastChanged';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isMessageBookmarked';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun75941: for (var _fun75941_ip = 0;;) switch (_fun75941_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.get;
                    var4 = _closure1_slot21;
                    var3 = {};
                    var0 = arg0;
                    var3.channelId = var0;
                    var0 = arg1;
                    var3.messageId = var0;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var1 = var1.bind(var2)(var0);
                    var2 = null;
                    var0 = var2 != var1;
                    if (!var0) {
                        _fun75941_ip = 69;
                        continue _fun75941
                    }
                case 53:
                    var1 = var1.saveData;
                    var1 = var1.dueAt;
                    var0 = var2 == var1;
                case 69:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'isMessageReminder';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun75942: for (var _fun75942_ip = 0;;) switch (_fun75942_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.get;
                    var4 = _closure1_slot21;
                    var3 = {};
                    var0 = arg0;
                    var3.channelId = var0;
                    var0 = arg1;
                    var3.messageId = var0;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var1 = var1.bind(var2)(var0);
                    var2 = null;
                    var0 = var2 != var1;
                    if (!var0) {
                        _fun75942_ip = 69;
                        continue _fun75942
                    }
                case 53:
                    var1 = var1.saveData;
                    var1 = var1.dueAt;
                    var0 = var2 != var1;
                case 69:
                    return var0;
            }
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'SavedMessagesStore';
    var8.displayName = var3;
    var3 = 10;
    var3 = var6[var3];
    var17 = var7.bind(var0)(var3);
    var3 = {};
    var10 = function() {
        var0 = true;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var3.POST_CONNECTION_OPEN = var10;
    var10 = function() {
        var1 = true;
        _closure1_slot10 = var1;
        var2 = _closure1_slot9;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var2 = _closure1_slot14;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot13;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var3.LOGOUT = var10;
    var10 = function arg0() {
        _fun75945: for (var _fun75945_ip = 0;;) switch (_fun75945_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.savedMessages;
                var0 = false;
                _closure1_slot10 = var0;
                var1 = _closure1_slot9;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                var1 = _closure1_slot14;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                var1 = _closure1_slot13;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                var1 = _closure1_slot16;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun75945_ip = 112;
                    continue _fun75945
                }
            case 83:
                var5 = _closure1_slot22;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun75945_ip = 83;
                    continue _fun75945
                }
            case 112:
                return var0;
        }
    };
    var3.SAVED_MESSAGES_UPDATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.savedMessage;
        var1 = _closure1_slot22;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.SAVED_MESSAGE_CREATE = var10;
    var10 = function arg0() {
        _fun75947: for (var _fun75947_ip = 0;;) switch (_fun75947_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.savedMessageData;
                var0 = _closure1_slot21;
                var1 = undefined;
                var8 = var0.bind(var1)(var5);
                var2 = _closure1_slot9;
                var0 = var2.get;
                var4 = var0.bind(var2)(var8);
                var2 = null;
                var6 = var2 == var4;
                var0 = false;
                if (var6) {
                    _fun75947_ip = 157;
                    continue _fun75947
                }
            case 48:
                var7 = _closure1_slot9;
                var6 = var7.delete;
                var6 = var6.bind(var7)(var8);
                var5 = var5.messageId;
                var7 = _closure1_slot14;
                var6 = var7.get;
                var4 = var4.saveData;
                var4 = var4.channelId;
                var4 = var6.bind(var7)(var4);
                if (!(var2 != var4)) {
                    _fun75947_ip = 106;
                    continue _fun75947
                }
            case 96:
                var2 = var4.delete;
                var2 = var2.bind(var4)(var5);
            case 106:
                var4 = _closure1_slot13;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var5);
                var4 = _closure1_slot12;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var5);
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                _closure1_slot11 = var2;
                var0 = undefined;
            case 157:
                return var0;
        }
    };
    var3.SAVED_MESSAGE_DELETE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.id;
        var0 = var0.channelId;
        var2 = _closure1_slot23;
        var1 = {};
        var1.messageId = var3;
        var1.channelId = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var3.MESSAGE_DELETE = var10;
    var10 = function arg0() {
        _fun75949: for (var _fun75949_ip = 0;;) switch (_fun75949_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.ids;
                var5 = var0.channelId;
                var1 = _closure1_slot16;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun75949_ip = 79;
                    continue _fun75949
                }
            case 40:
                var6 = _closure1_slot23;
                var1 = {};
                var7 = var2.value;
                var1.messageId = var7;
                var1.channelId = var5;
                var1 = var6.bind(var0)(var1);
                var6 = var3.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun75949_ip = 40;
                    continue _fun75949
                }
            case 79:
                return var0;
        }
    };
    var3.MESSAGE_DELETE_BULK = var10;
    var10 = function arg0() {
        _fun75950: for (var _fun75950_ip = 0;;) switch (_fun75950_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.message;
                var0 = var7.id;
                var5 = null;
                if (!(var5 != var0)) {
                    _fun75950_ip = 176;
                    continue _fun75950
                }
            case 22:
                var0 = var7.channel_id;
                if (!(var5 != var0)) {
                    _fun75950_ip = 176;
                    continue _fun75950
                }
            case 34:
                var3 = _closure1_slot21;
                var2 = {};
                var0 = var7.id;
                var2.messageId = var0;
                var0 = var7.channel_id;
                var2.channelId = var0;
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = _closure1_slot9;
                var2 = var3.get;
                var2 = var2.bind(var3)(var4);
                var6 = var5 == var2;
                var3 = undefined;
                if (var6) {
                    _fun75950_ip = 96;
                    continue _fun75950
                }
            case 91:
                var3 = var2.message;
            case 96:
                if (!(var5 != var3)) {
                    _fun75950_ip = 172;
                    continue _fun75950
                }
            case 100:
                var3 = {};
                var10 = var3;
                var9 = var2;
                var5 = copyDataProperties(var10, var9);
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 8;
                var5 = var8[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.updateMessageRecord;
                var2 = var2.message;
                var2 = var5.bind(var6)(var2, var7);
                var3.message = var2;
                var2 = _closure1_slot9;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
                return var0;
            case 172:
                var0 = false;
                return var0;
            case 176:
                var0 = false;
                return var0;
        }
    };
    var3.MESSAGE_UPDATE = var10;
    var3.GUILD_CREATE = var9;
    var3.GUILD_UPDATE = var9;
    var3.GUILD_DELETE = var9;
    var10 = function arg0() {
        _fun75951: for (var _fun75951_ip = 0;;) switch (_fun75951_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var0 = _closure1_slot13;
                var1 = var0.size;
                var0 = 0;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun75951_ip = 78;
                    continue _fun75951
                }
            case 29:
                var3 = _closure1_slot10;
                var1 = !var3;
                if (var3) {
                    _fun75951_ip = 75;
                    continue _fun75951
                }
            case 39:
                var4 = _closure1_slot20;
                var2 = var2.id;
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = !var4;
                var2 = !var2;
                if (!var4) {
                    _fun75951_ip = 72;
                    continue _fun75951
                }
            case 64:
                var4 = true;
                _closure1_slot10 = var4;
                var2 = undefined;
            case 72:
                var1 = var2;
            case 75:
                var0 = var1;
            case 78:
                return var0;
        }
    };
    var3.CHANNEL_CREATE = var10;
    var10 = function arg0() {
        _fun75952: for (var _fun75952_ip = 0;;) switch (_fun75952_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var0 = _closure1_slot13;
                var2 = var0.size;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun75952_ip = 118;
                    continue _fun75952
                }
            case 27:
                var0 = _closure1_slot10;
                if (var0) {
                    _fun75952_ip = 114;
                    continue _fun75952
                }
            case 34:
                var0 = _closure1_slot16;
                var6 = undefined;
                var5 = var0.bind(var6)(var1);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = true;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun75952_ip = 112;
                    continue _fun75952
                }
            case 66:
                var8 = _closure1_slot20;
                var1 = var3.value;
                var1 = var1.id;
                var1 = var8.bind(var6)(var1);
                if (!var1) {
                    _fun75952_ip = 94;
                    continue _fun75952
                }
            case 88:
                _closure1_slot10 = var4;
                var2 = true;
            case 94:
                var9 = var5.bind(var6)();
                var1 = var9.done;
                var3 = var9;
                var0 = var2;
                if (!var1) {
                    _fun75952_ip = 66;
                    continue _fun75952
                }
            case 112:
                return var0;
            case 114:
                var0 = false;
                return var0;
            case 118:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_UPDATES = var10;
    var10 = function arg0() {
        _fun75953: for (var _fun75953_ip = 0;;) switch (_fun75953_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var0 = _closure1_slot13;
                var1 = var0.size;
                var0 = 0;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun75953_ip = 78;
                    continue _fun75953
                }
            case 29:
                var3 = _closure1_slot10;
                var1 = !var3;
                if (var3) {
                    _fun75953_ip = 75;
                    continue _fun75953
                }
            case 39:
                var4 = _closure1_slot20;
                var2 = var2.id;
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = !var4;
                var2 = !var2;
                if (!var4) {
                    _fun75953_ip = 72;
                    continue _fun75953
                }
            case 64:
                var4 = true;
                _closure1_slot10 = var4;
                var2 = undefined;
            case 72:
                var1 = var2;
            case 75:
                var0 = var1;
            case 78:
                return var0;
        }
    };
    var3.CHANNEL_DELETE = var10;
    var10 = function arg0() {
        _fun75954: for (var _fun75954_ip = 0;;) switch (_fun75954_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.user;
                var0 = _closure1_slot13;
                var1 = var0.size;
                var0 = 0;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun75954_ip = 94;
                    continue _fun75954
                }
            case 29:
                var3 = _closure1_slot10;
                var1 = !var3;
                if (var3) {
                    _fun75954_ip = 91;
                    continue _fun75954
                }
            case 39:
                var4 = var2.id;
                var3 = _closure1_slot7;
                var2 = var3.getCurrentUser;
                var6 = var2.bind(var3)();
                var2 = null;
                var7 = var2 == var6;
                var2 = undefined;
                if (var7) {
                    _fun75954_ip = 73;
                    continue _fun75954
                }
            case 68:
                var2 = var6.id;
            case 73:
                var2 = var4 === var2;
                if (!var2) {
                    _fun75954_ip = 88;
                    continue _fun75954
                }
            case 80:
                var4 = true;
                _closure1_slot10 = var4;
                var2 = undefined;
            case 88:
                var1 = var2;
            case 91:
                var0 = var1;
            case 94:
                return var0;
        }
    };
    var3.GUILD_MEMBER_UPDATE = var10;
    var3.GUILD_ROLE_CREATE = var9;
    var3.GUILD_ROLE_UPDATE = var9;
    var3.GUILD_ROLE_DELETE = var9;
    var4 = function arg0() {
        var0 = arg0;
        var0 = var0.savedMessage;
        var2 = _closure1_slot12;
        var1 = var2.add;
        var0 = var0.saveData;
        var0 = var0.messageId;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.MESSAGE_REMINDER_DUE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var18 = var4;
    var16 = var3;
    var3 = new var18[var8](var17, var16, var15);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/SavedMessagesStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.getComparator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1613, 3078, 9621, 3963, 566, 806, 2]);