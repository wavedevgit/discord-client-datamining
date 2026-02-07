// stores/RelationshipStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun24942: for (var _fun24942_ip = 0;;) switch (_fun24942_ip) {
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
                _fun24942_ip = 74;
                continue _fun24942;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot25 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        _fun24945: for (var _fun24945_ip = 0;;) switch (_fun24945_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun24945_ip = 46;
                    continue _fun24945
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun24945_ip = 55;
                    continue _fun24945
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun24945_ip = 343;
                    continue _fun24945
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun24945_ip = 323;
                    continue _fun24945
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun24945_ip = 283;
                    continue _fun24945
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun24945_ip = 270;
                    continue _fun24945
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
                    _fun24945_ip = 163;
                    continue _fun24945
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun24945_ip = 179;
                    continue _fun24945
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun24945_ip = 249;
                    continue _fun24945
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun24945_ip = 249;
                    continue _fun24945
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun24945_ip = 234;
                    continue _fun24945
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun24945_ip = 247;
                    continue _fun24945
                }
            case 234:
                var8 = _closure1_slot27;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun24945_ip = 265;
                continue _fun24945;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun24945_ip = 283;
                continue _fun24945;
            case 270:
                var6 = _closure1_slot27;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun24945_ip = 323;
                    continue _fun24945
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
                    _fun24945_ip = 330;
                    continue _fun24945
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun24946: for (var _fun24946_ip = 0;;) switch (_fun24946_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun24946_ip = 56;
                                continue _fun24946
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
                            _fun24946_ip = 67;
                            continue _fun24946;
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
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1() {
        _fun24947: for (var _fun24947_ip = 0;;) switch (_fun24947_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun24947_ip = 23;
                    continue _fun24947
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun24947_ip = 33;
                    continue _fun24947
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
                    _fun24947_ip = 70;
                    continue _fun24947
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun24947_ip = 55;
                    continue _fun24947
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var2 = _closure1_slot23;
        var0 = undefined;
        var2.friends = var0;
        var2 = _closure1_slot23;
        var2.blocked = var0;
        var2 = _closure1_slot23;
        var2.ignored = var0;
        var1 = _closure1_slot23;
        var1.blockedOrIgnored = var0;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun24949: for (var _fun24949_ip = 0;;) switch (_fun24949_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var2 = _closure1_slot11;
                var1 = var2.get;
                var5 = var1.bind(var2)(var3);
                if (!(var5 !== var6)) {
                    _fun24949_ip = 173;
                    continue _fun24949
                }
            case 30:
                var1 = null;
                if (!(var1 != var5)) {
                    _fun24949_ip = 64;
                    continue _fun24949
                }
            case 36:
                var4 = _closure1_slot24;
                var2 = var4.get;
                var4 = var2.bind(var4)(var5);
                if (!(var1 != var4)) {
                    _fun24949_ip = 64;
                    continue _fun24949
                }
            case 54:
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
            case 64:
                var4 = _closure1_slot11;
                var2 = var4.set;
                var2 = var2.bind(var4)(var3, var6);
                var4 = _closure1_slot24;
                var2 = var4.get;
                var2 = var2.bind(var4)(var6);
                if (!(var1 == var2)) {
                    _fun24949_ip = 153;
                    continue _fun24949
                }
            case 97:
                var5 = _closure1_slot24;
                var4 = var5.set;
                var1 = global;
                var8 = var1.Set;
                var1 = new Array(1);
                var1[0] = var3;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = var7;
                var10 = var1;
                var1 = new var11[var8](var10, var9);
                var1 = var1 instanceof Object ? var1 : var7;
                var1 = var4.bind(var5)(var6, var1);
                _fun24949_ip = 163;
                continue _fun24949;
            case 153:
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
            case 163:
                var1 = _closure1_slot28;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 173:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun24950: for (var _fun24950_ip = 0;;) switch (_fun24950_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot11;
                var1 = var2.get;
                var5 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun24950_ip = 78;
                    continue _fun24950
                }
            case 26:
                var4 = _closure1_slot11;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                var4 = _closure1_slot24;
                var2 = var4.get;
                var2 = var2.bind(var4)(var5);
                if (!(var1 != var2)) {
                    _fun24950_ip = 68;
                    continue _fun24950
                }
            case 58:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
            case 68:
                var1 = _closure1_slot28;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 78:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        _fun24951: for (var _fun24951_ip = 0;;) switch (_fun24951_ip) {
            case 0:
                var0 = _closure1_slot14;
                var0 = var0.size;
                _closure1_slot21 = var0;
                var0 = _closure1_slot16;
                var0 = var0.size;
                _closure1_slot22 = var0;
                var0 = global;
                var5 = var0.Math;
                var4 = var5.max;
                var3 = _closure1_slot24;
                var1 = var3.get;
                var0 = _closure1_slot10;
                var0 = var0.PENDING_INCOMING;
                var6 = var1.bind(var3)(var0);
                var3 = null;
                var7 = var3 == var6;
                var0 = undefined;
                var1 = undefined;
                if (var7) {
                    _fun24951_ip = 84;
                    continue _fun24951
                }
            case 79:
                var1 = var6.size;
            case 84:
                var7 = var3 != var1;
                var3 = 0;
                var6 = 0;
                if (!var7) {
                    _fun24951_ip = 98;
                    continue _fun24951
                }
            case 95:
                var6 = var1;
            case 98:
                var1 = _closure1_slot21;
                var6 = var6 - var1;
                var1 = _closure1_slot22;
                var1 = var6 - var1;
                var1 = var4.bind(var5)(var1, var3);
                _closure1_slot20 = var1;
                var1 = _closure1_slot18;
                var1 = var1 + 1;
                _closure1_slot18 = var1;
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var7 = 0;
    var8 = var5[var7];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.RelationshipTypes;
    var _closure1_slot10 = var8;
    var8 = var1.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot11 = var8;
    var8 = {};
    var _closure1_slot12 = var8;
    var8 = {};
    var _closure1_slot13 = var8;
    var8 = var1.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot14 = var8;
    var8 = var1.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot15 = var8;
    var8 = var1.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot16 = var8;
    var8 = {};
    var _closure1_slot17 = var8;
    var _closure1_slot18 = var7;
    var8 = {};
    var _closure1_slot19 = var8;
    var _closure1_slot20 = var7;
    var _closure1_slot21 = var7;
    var _closure1_slot22 = var7;
    var7 = {};
    var7.friends = var0;
    var7.blocked = var0;
    var7.ignored = var0;
    var7.blockedOrIgnored = var0;
    var _closure1_slot23 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot24 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun24953: for (var _fun24953_ip = 0;;) switch (_fun24953_ip) {
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
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun24953_ip = 69;
                        continue _fun24953
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun24953_ip = 105;
                    continue _fun24953;
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
            var0 = _closure1_slot9;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(28);
        var0[0] = var4;
        var4 = {};
        var6 = 'isFriend';
        var4.key = var6;
        var6 = function arg0() {
            _fun24955: for (var _fun24955_ip = 0;;) switch (_fun24955_ip) {
                case 0:
                    var4 = arg0;
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun24955_ip = 43;
                        continue _fun24955
                    }
                case 12:
                    var3 = _closure1_slot11;
                    var2 = var3.get;
                    var2 = var2.bind(var3)(var4);
                    var1 = _closure1_slot10;
                    var1 = var1.FRIEND;
                    var0 = var2 === var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isBlockedOrIgnored';
        var4.key = var6;
        var6 = function arg0() {
            _fun24956: for (var _fun24956_ip = 0;;) switch (_fun24956_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var2.isBlocked;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun24956_ip = 31;
                        continue _fun24956
                    }
                case 20:
                    var1 = var2.isIgnored;
                    var0 = var1.bind(var2)(var3);
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isBlockedOrIgnoredForMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun24957: for (var _fun24957_ip = 0;;) switch (_fun24957_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var2.isBlockedForMessage;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun24957_ip = 31;
                        continue _fun24957
                    }
                case 20:
                    var1 = var2.isIgnoredForMessage;
                    var0 = var1.bind(var2)(var3);
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isBlocked';
        var4.key = var6;
        var6 = function arg0() {
            _fun24958: for (var _fun24958_ip = 0;;) switch (_fun24958_ip) {
                case 0:
                    var4 = arg0;
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun24958_ip = 43;
                        continue _fun24958
                    }
                case 12:
                    var3 = _closure1_slot11;
                    var2 = var3.get;
                    var2 = var2.bind(var3)(var4);
                    var1 = _closure1_slot10;
                    var1 = var1.BLOCKED;
                    var0 = var2 === var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isBlockedForMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun24959: for (var _fun24959_ip = 0;;) switch (_fun24959_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var1 = var0.author;
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun24959_ip = 60;
                        continue _fun24959
                    }
                case 18:
                    var6 = _closure1_slot11;
                    var5 = var6.get;
                    var3 = var0.author;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var1 = _closure1_slot10;
                    var1 = var1.BLOCKED;
                    if (!(var3 !== var1)) {
                        _fun24959_ip = 176;
                        continue _fun24959
                    }
                case 60:
                    var1 = _closure1_slot8;
                    var3 = var0 instanceof var1;
                    var1 = var2.isBlocked;
                    if (var3) {
                        _fun24959_ip = 126;
                        continue _fun24959
                    }
                case 80:
                    var5 = var0.interaction_metadata;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun24959_ip = 114;
                        continue _fun24959
                    }
                case 95:
                    var5 = var5.user;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun24959_ip = 114;
                        continue _fun24959
                    }
                case 109:
                    var3 = var5.id;
                case 114:
                    var3 = var1.bind(var2)(var3);
                    if (!var3) {
                        _fun24959_ip = 168;
                        continue _fun24959
                    }
                case 122:
                    var3 = true;
                    return var3;
                case 126:
                    var3 = var0.interactionMetadata;
                    var6 = var4 == var3;
                    var0 = undefined;
                    if (var6) {
                        _fun24959_ip = 160;
                        continue _fun24959
                    }
                case 141:
                    var3 = var3.user;
                    var4 = var4 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun24959_ip = 160;
                        continue _fun24959
                    }
                case 155:
                    var0 = var3.id;
                case 160:
                    var0 = var1.bind(var2)(var0);
                    if (var0) {
                        _fun24959_ip = 172;
                        continue _fun24959
                    }
                case 168:
                    var0 = false;
                    return var0;
                case 172:
                    var0 = true;
                    return var0;
                case 176:
                    var0 = true;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isIgnored';
        var4.key = var6;
        var6 = function arg0() {
            _fun24960: for (var _fun24960_ip = 0;;) switch (_fun24960_ip) {
                case 0:
                    var4 = arg0;
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun24960_ip = 63;
                        continue _fun24960
                    }
                case 12:
                    var3 = _closure1_slot11;
                    var1 = var3.get;
                    var3 = var1.bind(var3)(var4);
                    var1 = _closure1_slot10;
                    var1 = var1.BLOCKED;
                    var1 = var3 !== var1;
                    if (!var1) {
                        _fun24960_ip = 60;
                        continue _fun24960
                    }
                case 46:
                    var3 = _closure1_slot15;
                    var2 = var3.has;
                    var1 = var2.bind(var3)(var4);
                case 60:
                    var0 = var1;
                case 63:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isIgnoredForMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun24961: for (var _fun24961_ip = 0;;) switch (_fun24961_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var1 = var0.author;
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun24961_ip = 43;
                        continue _fun24961
                    }
                case 18:
                    var3 = var2.isIgnored;
                    var1 = var0.author;
                    var1 = var1.id;
                    var1 = var3.bind(var2)(var1);
                    if (var1) {
                        _fun24961_ip = 159;
                        continue _fun24961
                    }
                case 43:
                    var1 = _closure1_slot8;
                    var3 = var0 instanceof var1;
                    var1 = var2.isIgnored;
                    if (var3) {
                        _fun24961_ip = 109;
                        continue _fun24961
                    }
                case 63:
                    var5 = var0.interaction_metadata;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun24961_ip = 97;
                        continue _fun24961
                    }
                case 78:
                    var5 = var5.user;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun24961_ip = 97;
                        continue _fun24961
                    }
                case 92:
                    var3 = var5.id;
                case 97:
                    var3 = var1.bind(var2)(var3);
                    if (!var3) {
                        _fun24961_ip = 151;
                        continue _fun24961
                    }
                case 105:
                    var3 = true;
                    return var3;
                case 109:
                    var3 = var0.interactionMetadata;
                    var6 = var4 == var3;
                    var0 = undefined;
                    if (var6) {
                        _fun24961_ip = 143;
                        continue _fun24961
                    }
                case 124:
                    var3 = var3.user;
                    var4 = var4 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun24961_ip = 143;
                        continue _fun24961
                    }
                case 138:
                    var0 = var3.id;
                case 143:
                    var0 = var1.bind(var2)(var0);
                    if (var0) {
                        _fun24961_ip = 155;
                        continue _fun24961
                    }
                case 151:
                    var0 = false;
                    return var0;
                case 155:
                    var0 = true;
                    return var0;
                case 159:
                    var0 = true;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isUnfilteredPendingIncoming';
        var4.key = var6;
        var6 = function arg0() {
            _fun24962: for (var _fun24962_ip = 0;;) switch (_fun24962_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var4 = _closure1_slot11;
                    var1 = var4.get;
                    var1 = var1.bind(var4)(var3);
                    var0 = _closure1_slot10;
                    var0 = var0.PENDING_INCOMING;
                    var0 = var1 === var0;
                    if (!var0) {
                        _fun24962_ip = 54;
                        continue _fun24962
                    }
                case 40:
                    var1 = var2.isSpam;
                    var1 = var1.bind(var2)(var3);
                    var0 = !var1;
                case 54:
                    if (!var0) {
                        _fun24962_ip = 71;
                        continue _fun24962
                    }
                case 57:
                    var1 = var2.isIgnored;
                    var1 = var1.bind(var2)(var3);
                    var0 = !var1;
                case 71:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getPendingCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getSpamCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getPendingIgnoredCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getOutgoingCount';
        var4.key = var6;
        var6 = function() {
            _fun24966: for (var _fun24966_ip = 0;;) switch (_fun24966_ip) {
                case 0:
                    var2 = _closure1_slot24;
                    var1 = var2.get;
                    var0 = _closure1_slot10;
                    var0 = var0.PENDING_OUTGOING;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun24966_ip = 43;
                        continue _fun24966
                    }
                case 38:
                    var1 = var2.size;
                case 43:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun24966_ip = 55;
                        continue _fun24966
                    }
                case 52:
                    var0 = var1;
                case 55:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getFriendCount';
        var4.key = var6;
        var6 = function() {
            _fun24967: for (var _fun24967_ip = 0;;) switch (_fun24967_ip) {
                case 0:
                    var2 = _closure1_slot24;
                    var1 = var2.get;
                    var0 = _closure1_slot10;
                    var0 = var0.FRIEND;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun24967_ip = 43;
                        continue _fun24967
                    }
                case 38:
                    var1 = var2.size;
                case 43:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun24967_ip = 55;
                        continue _fun24967
                    }
                case 52:
                    var0 = var1;
                case 55:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getRelationshipCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.size;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getMutableRelationships';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getVersion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'isSpam';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot14;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getRelationshipType';
        var4.key = var6;
        var6 = function arg0() {
            _fun24972: for (var _fun24972_ip = 0;;) switch (_fun24972_ip) {
                case 0:
                    var3 = _closure1_slot11;
                    var2 = var3.get;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun24972_ip = 36;
                        continue _fun24972
                    }
                case 26:
                    var1 = _closure1_slot10;
                    var0 = var1.NONE;
                case 36:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getNickname';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot12;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getSince';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot13;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getSinces';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'getFriendIDs';
        var4.key = var6;
        var6 = function() {
            _fun24976: for (var _fun24976_ip = 0;;) switch (_fun24976_ip) {
                case 0:
                    var1 = _closure1_slot23;
                    var1 = var1.friends;
                    var5 = null;
                    if (!(var5 == var1)) {
                        _fun24976_ip = 79;
                        continue _fun24976
                    }
                case 19:
                    var2 = _closure1_slot23;
                    var1 = global;
                    var4 = var1.Array;
                    var3 = var4.from;
                    var7 = _closure1_slot24;
                    var6 = var7.get;
                    var1 = _closure1_slot10;
                    var1 = var1.FRIEND;
                    var1 = var6.bind(var7)(var1);
                    if (!(var5 == var1)) {
                        _fun24976_ip = 68;
                        continue _fun24976
                    }
                case 64:
                    var1 = new Array(0);
                case 68:
                    var1 = var3.bind(var4)(var1);
                    var2.friends = var1;
                case 79:
                    var0 = _closure1_slot23;
                    var0 = var0.friends;
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'getBlockedIDs';
        var4.key = var6;
        var6 = function() {
            _fun24977: for (var _fun24977_ip = 0;;) switch (_fun24977_ip) {
                case 0:
                    var1 = _closure1_slot23;
                    var1 = var1.blocked;
                    var5 = null;
                    if (!(var5 == var1)) {
                        _fun24977_ip = 79;
                        continue _fun24977
                    }
                case 19:
                    var2 = _closure1_slot23;
                    var1 = global;
                    var4 = var1.Array;
                    var3 = var4.from;
                    var7 = _closure1_slot24;
                    var6 = var7.get;
                    var1 = _closure1_slot10;
                    var1 = var1.BLOCKED;
                    var1 = var6.bind(var7)(var1);
                    if (!(var5 == var1)) {
                        _fun24977_ip = 68;
                        continue _fun24977
                    }
                case 64:
                    var1 = new Array(0);
                case 68:
                    var1 = var3.bind(var4)(var1);
                    var2.blocked = var1;
                case 79:
                    var0 = _closure1_slot23;
                    var0 = var0.blocked;
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'getIgnoredIDs';
        var4.key = var6;
        var6 = function() {
            _fun24978: for (var _fun24978_ip = 0;;) switch (_fun24978_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot23;
                    var3 = var2.ignored;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun24978_ip = 84;
                        continue _fun24978
                    }
                case 28:
                    var2 = _closure1_slot23;
                    var3 = global;
                    var5 = var3.Array;
                    var4 = var5.from;
                    var6 = _closure1_slot15;
                    var3 = var6.values;
                    var3 = var3.bind(var6)();
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filter;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.isIgnored;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var2.ignored = var1;
                case 84:
                    var0 = _closure1_slot23;
                    var0 = var0.ignored;
                    return var0;
            }
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'getBlockedOrIgnoredIDs';
        var4.key = var6;
        var6 = function() {
            _fun24980: for (var _fun24980_ip = 0;;) switch (_fun24980_ip) {
                case 0:
                    var1 = _closure1_slot23;
                    var1 = var1.blockedOrIgnored;
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun24980_ip = 170;
                        continue _fun24980
                    }
                case 22:
                    var1 = global;
                    var5 = var1.Set;
                    var8 = _closure1_slot15;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var9 = var4;
                    var3 = new var9[var5](var8, var7);
                    var5 = var3 instanceof Object ? var3 : var4;
                    var6 = _closure1_slot24;
                    var4 = var6.get;
                    var3 = _closure1_slot10;
                    var3 = var3.BLOCKED;
                    var3 = var4.bind(var6)(var3);
                    if (!(var2 != var3)) {
                        _fun24980_ip = 135;
                        continue _fun24980
                    }
                case 82:
                    var2 = _closure1_slot26;
                    var6 = undefined;
                    var4 = var2.bind(var6)(var3);
                    var3 = var4.bind(var6)();
                    var2 = var3.done;
                    if (var2) {
                        _fun24980_ip = 135;
                        continue _fun24980
                    }
                case 105:
                    var7 = var3.value;
                    var2 = var5.add;
                    var2 = var2.bind(var5)(var7);
                    var7 = var4.bind(var6)();
                    var2 = var7.done;
                    var3 = var7;
                    if (!var2) {
                        _fun24980_ip = 105;
                        continue _fun24980
                    }
                case 135:
                    var2 = _closure1_slot23;
                    var4 = var1.Array;
                    var3 = var4.from;
                    var1 = var5.values;
                    var1 = var1.bind(var5)();
                    var1 = var3.bind(var4)(var1);
                    var2.blockedOrIgnored = var1;
                case 170:
                    var0 = _closure1_slot23;
                    var0 = var0.blockedOrIgnored;
                    return var0;
            }
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'getOriginApplicationId';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot17;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'isStranger';
        var4.key = var6;
        var5 = function arg0() {
            _fun24982: for (var _fun24982_ip = 0;;) switch (_fun24982_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot19;
                    var3 = var2[var1];
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun24982_ip = 79;
                        continue _fun24982
                    }
                case 20:
                    var2 = _closure1_slot19;
                    var2 = var2[var1];
                    var3 = var2.expiry;
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    if (!(!(var3 < var2))) {
                        _fun24982_ip = 71;
                        continue _fun24982
                    }
                case 55:
                    var2 = _closure1_slot19;
                    var2 = var2[var1];
                    var2 = var2.isStranger;
                    return var2;
                case 71:
                    var0 = _closure1_slot19;
                    var0 = delete var0[var1];
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[27] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'RelationshipStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var2 = _closure1_slot11;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot24;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = {};
        _closure1_slot12 = var0;
        var0 = {};
        _closure1_slot13 = var0;
        var2 = _closure1_slot15;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot14;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot16;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot28;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var2 = {};
        _closure1_slot17 = var2;
        var2 = {};
        _closure1_slot19 = var2;
        var2 = arg0;
        var4 = var2.relationships;
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var2
            _fun24984: for (var _fun24984_ip = 0;;) switch (_fun24984_ip) {
                case 0:
                    var1 = arg0;
                    var5 = _closure1_slot29;
                    var4 = var1.id;
                    var3 = var1.type;
                    var0 = undefined;
                    var3 = var5.bind(var0)(var4, var3);
                    var3 = var1.nickname;
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun24984_ip = 59;
                        continue _fun24984
                    }
                case 40:
                    var6 = _closure1_slot12;
                    var5 = var1.id;
                    var3 = var1.nickname;
                    var6[var5] = var3;
                case 59:
                    var3 = var1.since;
                    if (!(var4 != var3)) {
                        _fun24984_ip = 88;
                        continue _fun24984
                    }
                case 69:
                    var6 = _closure1_slot13;
                    var5 = var1.id;
                    var3 = var1.since;
                    var6[var5] = var3;
                case 88:
                    var3 = var1.is_spam_request;
                    if (!var3) {
                        _fun24984_ip = 116;
                        continue _fun24984
                    }
                case 97:
                    var6 = _closure1_slot14;
                    var5 = var6.add;
                    var3 = var1.id;
                    var3 = var5.bind(var6)(var3);
                case 116:
                    var3 = var1.origin_application_id;
                    if (!(var4 != var3)) {
                        _fun24984_ip = 145;
                        continue _fun24984
                    }
                case 126:
                    var5 = _closure1_slot17;
                    var4 = var1.id;
                    var3 = var1.origin_application_id;
                    var5[var4] = var3;
                case 145:
                    var3 = var1.user_ignored;
                    if (!var3) {
                        _fun24984_ip = 211;
                        continue _fun24984
                    }
                case 154:
                    var5 = _closure1_slot15;
                    var4 = var5.add;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var4 = var1.type;
                    var3 = _closure1_slot10;
                    var3 = var3.PENDING_INCOMING;
                    if (!(var4 === var3)) {
                        _fun24984_ip = 211;
                        continue _fun24984
                    }
                case 192:
                    var3 = _closure1_slot16;
                    var2 = var3.add;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                case 211:
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot31;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun24985: for (var _fun24985_ip = 0;;) switch (_fun24985_ip) {
            case 0:
                var2 = _closure1_slot11;
                var0 = var2.clear;
                var0 = var0.bind(var2)();
                var2 = _closure1_slot24;
                var0 = var2.clear;
                var0 = var0.bind(var2)();
                var3 = _closure1_slot26;
                var0 = arg0;
                var2 = var0.relationships;
                var0 = undefined;
                var7 = var3.bind(var0)(var2);
                var3 = var7.bind(var0)();
                var2 = var3.done;
                var6 = 2;
                var5 = 0;
                var4 = 1;
                if (var2) {
                    _fun24985_ip = 119;
                    continue _fun24985
                }
            case 71:
                var8 = var3.value;
                var2 = _closure1_slot7;
                var2 = var2.bind(var0)(var8, var6);
                var9 = _closure1_slot29;
                var8 = var2[var5];
                var2 = var2[var4];
                var2 = var9.bind(var0)(var8, var2);
                var8 = var7.bind(var0)();
                var2 = var8.done;
                var3 = var8;
                if (!var2) {
                    _fun24985_ip = 71;
                    continue _fun24985
                }
            case 119:
                var1 = _closure1_slot31;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.OVERLAY_INITIALIZE = var8;
    var8 = function arg0() {
        _fun24986: for (var _fun24986_ip = 0;;) switch (_fun24986_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot11;
                var2 = var3.get;
                var0 = var4.relationship;
                var0 = var0.id;
                var5 = var2.bind(var3)(var0);
                var6 = _closure1_slot29;
                var0 = var4.relationship;
                var3 = var0.id;
                var0 = var4.relationship;
                var2 = var0.type;
                var0 = undefined;
                var2 = var6.bind(var0)(var3, var2);
                var2 = var4.relationship;
                var2 = var2.nickname;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun24986_ip = 128;
                    continue _fun24986
                }
            case 83:
                var2 = {};
                var8 = _closure1_slot12;
                var9 = var2;
                var6 = copyDataProperties(var9, var8);
                var6 = var4.relationship;
                var7 = var6.id;
                var6 = var4.relationship;
                var6 = var6.nickname;
                var2[var7] = var6;
                _closure1_slot12 = var2;
            case 128:
                var2 = var4.relationship;
                var2 = var2.since;
                if (!(var3 != var2)) {
                    _fun24986_ip = 189;
                    continue _fun24986
                }
            case 144:
                var2 = {};
                var8 = _closure1_slot13;
                var9 = var2;
                var6 = copyDataProperties(var9, var8);
                var6 = var4.relationship;
                var7 = var6.id;
                var6 = var4.relationship;
                var6 = var6.since;
                var2[var7] = var6;
                _closure1_slot13 = var2;
            case 189:
                var2 = var4.relationship;
                var2 = var2.originApplicationId;
                if (!(var3 != var2)) {
                    _fun24986_ip = 250;
                    continue _fun24986
                }
            case 205:
                var2 = {};
                var8 = _closure1_slot17;
                var9 = var2;
                var3 = copyDataProperties(var9, var8);
                var3 = var4.relationship;
                var6 = var3.id;
                var3 = var4.relationship;
                var3 = var3.originApplicationId;
                var2[var6] = var3;
                _closure1_slot17 = var2;
            case 250:
                var2 = var4.relationship;
                var2 = var2.isSpamRequest;
                var6 = _closure1_slot14;
                if (var2) {
                    _fun24986_ip = 292;
                    continue _fun24986
                }
            case 269:
                var3 = var6.delete;
                var2 = var4.relationship;
                var2 = var2.id;
                var2 = var3.bind(var6)(var2);
                _fun24986_ip = 313;
                continue _fun24986;
            case 292:
                var3 = var6.add;
                var2 = var4.relationship;
                var2 = var2.id;
                var2 = var3.bind(var6)(var2);
            case 313:
                var2 = var4.relationship;
                var2 = var2.userIgnored;
                var6 = _closure1_slot15;
                if (var2) {
                    _fun24986_ip = 383;
                    continue _fun24986
                }
            case 332:
                var3 = var6.delete;
                var2 = var4.relationship;
                var2 = var2.id;
                var2 = var3.bind(var6)(var2);
                var7 = _closure1_slot16;
                var3 = var7.delete;
                var2 = var4.relationship;
                var2 = var2.id;
                var2 = var3.bind(var7)(var2);
                _fun24986_ip = 506;
                continue _fun24986;
            case 383:
                var3 = var6.add;
                var2 = var4.relationship;
                var2 = var2.id;
                var2 = var3.bind(var6)(var2);
                var2 = var4.relationship;
                var3 = var2.type;
                var2 = _closure1_slot10;
                var2 = var2.PENDING_INCOMING;
                if (!(var3 !== var2)) {
                    _fun24986_ip = 481;
                    continue _fun24986
                }
            case 429:
                var2 = var4.relationship;
                var3 = var2.type;
                var2 = _closure1_slot10;
                var2 = var2.FRIEND;
                if (!(var3 === var2)) {
                    _fun24986_ip = 506;
                    continue _fun24986
                }
            case 454:
                var6 = _closure1_slot16;
                var3 = var6.delete;
                var2 = var4.relationship;
                var2 = var2.id;
                var2 = var3.bind(var6)(var2);
                _fun24986_ip = 506;
                continue _fun24986;
            case 481:
                var6 = _closure1_slot16;
                var3 = var6.add;
                var2 = var4.relationship;
                var2 = var2.id;
                var2 = var3.bind(var6)(var2);
            case 506:
                var2 = _closure1_slot31;
                var2 = var2.bind(var0)();
                var2 = var4.relationship;
                var3 = var2.type;
                var2 = _closure1_slot10;
                var2 = var2.FRIEND;
                var2 = var3 === var2;
                if (!var2) {
                    _fun24986_ip = 556;
                    continue _fun24986
                }
            case 542:
                var3 = _closure1_slot10;
                var3 = var3.PENDING_OUTGOING;
                var2 = var5 === var3;
            case 556:
                if (!var2) {
                    _fun24986_ip = 614;
                    continue _fun24986
                }
            case 559:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 9;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'FRIEND_REQUEST_ACCEPTED';
                var1.type = var5;
                var4 = var4.relationship;
                var4 = var4.user;
                var1.user = var4;
                var1 = var2.bind(var3)(var1);
            case 614:
                return var0;
        }
    };
    var1.RELATIONSHIP_ADD = var8;
    var8 = function arg0() {
        _fun24987: for (var _fun24987_ip = 0;;) switch (_fun24987_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot30;
                var0 = var2.relationship;
                var3 = var0.id;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var4 = _closure1_slot12;
                var3 = var2.relationship;
                var3 = var3.id;
                var3 = var4[var3];
                var4 = null;
                if (!(var4 != var3)) {
                    _fun24987_ip = 85;
                    continue _fun24987
                }
            case 53:
                var5 = {};
                var6 = _closure1_slot12;
                var7 = var5;
                var3 = copyDataProperties(var7, var6);
                _closure1_slot12 = var5;
                var3 = var2.relationship;
                var3 = var3.id;
                var3 = delete var5[var3];
            case 85:
                var5 = _closure1_slot13;
                var3 = var2.relationship;
                var3 = var3.id;
                var3 = var5[var3];
                if (!(var4 != var3)) {
                    _fun24987_ip = 140;
                    continue _fun24987
                }
            case 108:
                var5 = {};
                var6 = _closure1_slot13;
                var7 = var5;
                var3 = copyDataProperties(var7, var6);
                _closure1_slot13 = var5;
                var3 = var2.relationship;
                var3 = var3.id;
                var3 = delete var5[var3];
            case 140:
                var5 = _closure1_slot17;
                var3 = var2.relationship;
                var3 = var3.id;
                var3 = var5[var3];
                if (!(var4 != var3)) {
                    _fun24987_ip = 195;
                    continue _fun24987
                }
            case 163:
                var4 = {};
                var6 = _closure1_slot17;
                var7 = var4;
                var3 = copyDataProperties(var7, var6);
                _closure1_slot17 = var4;
                var3 = var2.relationship;
                var3 = var3.id;
                var3 = delete var4[var3];
            case 195:
                var3 = var2.relationship;
                var3 = var3.userIgnored;
                if (var3) {
                    _fun24987_ip = 235;
                    continue _fun24987
                }
            case 210:
                var5 = _closure1_slot15;
                var4 = var5.delete;
                var3 = var2.relationship;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
            case 235:
                var5 = _closure1_slot16;
                var4 = var5.delete;
                var3 = var2.relationship;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot14;
                var3 = var4.delete;
                var2 = var2.relationship;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1 = _closure1_slot31;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.RELATIONSHIP_REMOVE = var8;
    var8 = function arg0() {
        _fun24988: for (var _fun24988_ip = 0;;) switch (_fun24988_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.relationship;
                var5 = _closure1_slot29;
                var4 = var2.id;
                var3 = var2.type;
                var0 = undefined;
                var3 = var5.bind(var0)(var4, var3);
                var3 = var2.since;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun24988_ip = 67;
                    continue _fun24988
                }
            case 46:
                var6 = _closure1_slot13;
                var5 = var2.id;
                var3 = var2.since;
                var6[var5] = var3;
                _fun24988_ip = 80;
                continue _fun24988;
            case 67:
                var5 = _closure1_slot13;
                var3 = var2.id;
                var3 = delete var5[var3];
            case 80:
                var3 = var2.nickname;
                if (!(var4 != var3)) {
                    _fun24988_ip = 111;
                    continue _fun24988
                }
            case 90:
                var6 = _closure1_slot12;
                var5 = var2.id;
                var3 = var2.nickname;
                var6[var5] = var3;
                _fun24988_ip = 124;
                continue _fun24988;
            case 111:
                var5 = _closure1_slot12;
                var3 = var2.id;
                var3 = delete var5[var3];
            case 124:
                var3 = var2.isSpamRequest;
                var6 = _closure1_slot14;
                if (var3) {
                    _fun24988_ip = 154;
                    continue _fun24988
                }
            case 137:
                var5 = var6.delete;
                var3 = var2.id;
                var3 = var5.bind(var6)(var3);
                _fun24988_ip = 169;
                continue _fun24988;
            case 154:
                var5 = var6.add;
                var3 = var2.id;
                var3 = var5.bind(var6)(var3);
            case 169:
                var5 = _closure1_slot19;
                var3 = var2.id;
                var3 = var5[var3];
                if (!(var4 != var3)) {
                    _fun24988_ip = 199;
                    continue _fun24988
                }
            case 186:
                var5 = _closure1_slot19;
                var3 = var2.id;
                var3 = delete var5[var3];
            case 199:
                var3 = var2.originApplicationId;
                if (!(var4 != var3)) {
                    _fun24988_ip = 230;
                    continue _fun24988
                }
            case 209:
                var5 = _closure1_slot17;
                var4 = var2.id;
                var3 = var2.originApplicationId;
                var5[var4] = var3;
                _fun24988_ip = 243;
                continue _fun24988;
            case 230:
                var4 = _closure1_slot17;
                var3 = var2.id;
                var3 = delete var4[var3];
            case 243:
                var3 = var2.userIgnored;
                var5 = _closure1_slot15;
                if (var3) {
                    _fun24988_ip = 292;
                    continue _fun24988
                }
            case 256:
                var4 = var5.delete;
                var3 = var2.id;
                var3 = var4.bind(var5)(var3);
                var6 = _closure1_slot16;
                var4 = var6.delete;
                var3 = var2.id;
                var3 = var4.bind(var6)(var3);
                _fun24988_ip = 345;
                continue _fun24988;
            case 292:
                var4 = var5.add;
                var3 = var2.id;
                var3 = var4.bind(var5)(var3);
                var4 = var2.type;
                var3 = _closure1_slot10;
                var3 = var3.PENDING_INCOMING;
                if (!(var4 === var3)) {
                    _fun24988_ip = 345;
                    continue _fun24988
                }
            case 326:
                var4 = _closure1_slot16;
                var3 = var4.add;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
            case 345:
                var1 = _closure1_slot31;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.RELATIONSHIP_UPDATE = var8;
    var8 = function() {
        _fun24989: for (var _fun24989_ip = 0;;) switch (_fun24989_ip) {
            case 0:
                var3 = _closure1_slot26;
                var2 = _closure1_slot11;
                var0 = var2.keys;
                var2 = var0.bind(var2)();
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.bind(var0)();
                var2 = var3.done;
                if (var2) {
                    _fun24989_ip = 132;
                    continue _fun24989
                }
            case 39:
                var5 = var3.value;
                var6 = _closure1_slot11;
                var2 = var6.get;
                var6 = var2.bind(var6)(var5);
                var2 = _closure1_slot10;
                var2 = var2.PENDING_INCOMING;
                if (!(var6 === var2)) {
                    _fun24989_ip = 117;
                    continue _fun24989
                }
            case 72:
                var2 = _closure1_slot30;
                var2 = var2.bind(var0)(var5);
                var6 = _closure1_slot14;
                var2 = var6.delete;
                var2 = var2.bind(var6)(var5);
                var6 = _closure1_slot16;
                var2 = var6.delete;
                var2 = var2.bind(var6)(var5);
                var2 = _closure1_slot19;
                var2 = delete var2[var5];
            case 117:
                var5 = var4.bind(var0)();
                var2 = var5.done;
                var3 = var5;
                if (!var2) {
                    _fun24989_ip = 39;
                    continue _fun24989
                }
            case 132:
                var1 = _closure1_slot31;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.RELATIONSHIP_PENDING_INCOMING_REMOVED = var8;
    var3 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot19;
        var1 = var3.userId;
        var0 = {};
        var4 = global;
        var5 = var4.Date;
        var4 = var5.now;
        var5 = var4.bind(var5)();
        var4 = 300000;
        var4 = var5 + var4;
        var0.expiry = var4;
        var3 = var3.isStranger;
        var0.isStranger = var3;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var1.UPDATE_STRANGER_STATUS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/RelationshipStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 3103, 1621, 660, 806, 566, 2]);