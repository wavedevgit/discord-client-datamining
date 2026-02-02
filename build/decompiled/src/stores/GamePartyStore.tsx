// stores/GamePartyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun92420: for (var _fun92420_ip = 0;;) switch (_fun92420_ip) {
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
                _fun92420_ip = 76;
                continue _fun92420;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
        _fun92423: for (var _fun92423_ip = 0;;) switch (_fun92423_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun92423_ip = 46;
                    continue _fun92423
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun92423_ip = 55;
                    continue _fun92423
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun92423_ip = 345;
                    continue _fun92423
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun92423_ip = 323;
                    continue _fun92423
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun92423_ip = 283;
                    continue _fun92423
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun92423_ip = 270;
                    continue _fun92423
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
                    _fun92423_ip = 163;
                    continue _fun92423
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun92423_ip = 179;
                    continue _fun92423
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun92423_ip = 249;
                    continue _fun92423
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun92423_ip = 249;
                    continue _fun92423
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun92423_ip = 234;
                    continue _fun92423
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun92423_ip = 247;
                    continue _fun92423
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun92423_ip = 265;
                continue _fun92423;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun92423_ip = 283;
                continue _fun92423;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun92423_ip = 323;
                    continue _fun92423
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
                    _fun92423_ip = 330;
                    continue _fun92423
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun92424: for (var _fun92424_ip = 0;;) switch (_fun92424_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun92424_ip = 56;
                                continue _fun92424
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
                            _fun92424_ip = 67;
                            continue _fun92424;
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
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun92425: for (var _fun92425_ip = 0;;) switch (_fun92425_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun92425_ip = 23;
                    continue _fun92425
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun92425_ip = 33;
                    continue _fun92425
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
                    _fun92425_ip = 70;
                    continue _fun92425
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun92425_ip = 55;
                    continue _fun92425
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun92426: for (var _fun92426_ip = 0;;) switch (_fun92426_ip) {
            case 0:
                var1 = _closure1_slot12;
                var0 = arg0;
                var1 = var1[var0];
                var0 = null;
                if (!(var0 == var1)) {
                    _fun92426_ip = 22;
                    continue _fun92426
                }
            case 20:
                var1 = {};
            case 22:
                var0 = arg1;
                var0 = var1[var0];
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun92427: for (var _fun92427_ip = 0;;) switch (_fun92427_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var3 = _closure1_slot17;
                var0 = undefined;
                var3 = var3.bind(var0)(var5, var2);
                var4 = null;
                if (!(var4 != var3)) {
                    _fun92427_ip = 134;
                    continue _fun92427
                }
            case 27:
                var6 = _closure1_slot12;
                var7 = var6[var5];
                var2 = delete var7[var2];
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 9;
                var2 = var8[var2];
                var6 = var6.bind(var0)(var2);
                var2 = var6.isEmpty;
                var2 = var2.bind(var6)(var7);
                if (!var2) {
                    _fun92427_ip = 81;
                    continue _fun92427
                }
            case 73:
                var2 = _closure1_slot12;
                var2 = delete var2[var5];
            case 81:
                var6 = _closure1_slot13;
                var2 = var6.get;
                var2 = var2.bind(var6)(var3);
                if (!(var4 != var2)) {
                    _fun92427_ip = 134;
                    continue _fun92427
                }
            case 99:
                var4 = var2.delete;
                var4 = var4.bind(var2)(var5);
                var4 = var2.size;
                var2 = 0;
                if (!(var2 === var4)) {
                    _fun92427_ip = 134;
                    continue _fun92427
                }
            case 120:
                var2 = _closure1_slot13;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
            case 134:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun92428: for (var _fun92428_ip = 0;;) switch (_fun92428_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = arg2;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    _fun92429: for (var _fun92429_ip = 0;;) switch (_fun92429_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.party;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun92429_ip = 29;
                                continue _fun92429
                            }
                        case 18:
                            var1 = var1.party;
                            var0 = var1.id;
                        case 29:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var5 = null;
                var1 = var5 != var0;
                var9 = null;
                if (!var1) {
                    _fun92428_ip = 65;
                    continue _fun92428
                }
            case 39:
                var1 = var0.party;
                var1 = var5 != var1;
                var9 = null;
                if (!var1) {
                    _fun92428_ip = 65;
                    continue _fun92428
                }
            case 54:
                var0 = var0.party;
                var9 = var0.id;
            case 65:
                var0 = _closure1_slot17;
                var1 = undefined;
                var0 = var0.bind(var1)(var3, var4);
                if (!(var5 != var9)) {
                    _fun92428_ip = 270;
                    continue _fun92428
                }
            case 87:
                var6 = _closure1_slot10;
                var7 = var6.OFFLINE;
                var6 = arg3;
                if (!(var6 !== var7)) {
                    _fun92428_ip = 270;
                    continue _fun92428
                }
            case 107:
                if (!(var5 != var0)) {
                    _fun92428_ip = 128;
                    continue _fun92428
                }
            case 111:
                if (!(var0 !== var9)) {
                    _fun92428_ip = 266;
                    continue _fun92428
                }
            case 118:
                var6 = _closure1_slot18;
                var6 = var6.bind(var1)(var3, var4);
            case 128:
                var6 = _closure1_slot12;
                var6 = var6[var3];
                if (!(var5 == var6)) {
                    _fun92428_ip = 153;
                    continue _fun92428
                }
            case 140:
                var8 = _closure1_slot12;
                var7 = {};
                var8[var3] = var7;
                var6 = var7;
            case 153:
                var6[var4] = var9;
                var7 = _closure1_slot8;
                var6 = var7.isBlocked;
                var6 = var6.bind(var7)(var3);
                if (var6) {
                    _fun92428_ip = 264;
                    continue _fun92428
                }
            case 175:
                var7 = _closure1_slot8;
                var6 = var7.isIgnored;
                var6 = var6.bind(var7)(var3);
                if (var6) {
                    _fun92428_ip = 264;
                    continue _fun92428
                }
            case 193:
                var7 = _closure1_slot13;
                var6 = var7.get;
                var7 = var6.bind(var7)(var9);
                if (!(var5 == var7)) {
                    _fun92428_ip = 239;
                    continue _fun92428
                }
            case 211:
                var6 = global;
                var6 = var6.Set;
                var8 = var6.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = var8;
                var6 = new var12[var6](var11);
                var7 = var6 instanceof Object ? var6 : var8;
            case 239:
                var8 = _closure1_slot13;
                var6 = var8.set;
                var6 = var6.bind(var8)(var9, var7);
                var6 = var7.add;
                var6 = var6.bind(var7)(var3);
            case 264:
                return var1;
            case 266:
                var6 = false;
                return var6;
            case 270:
                var0 = var5 != var0;
                if (!var0) {
                    _fun92428_ip = 289;
                    continue _fun92428
                }
            case 277:
                var2 = _closure1_slot18;
                var2 = var2.bind(var1)(var3, var4);
                var0 = undefined;
            case 289:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var9 = function arg0() {
        _fun92430: for (var _fun92430_ip = 0;;) switch (_fun92430_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var1 = _closure1_slot15;
                var0 = var9.presences;
                var7 = undefined;
                var6 = var1.bind(var7)(var0);
                var0 = var6.bind(var7)();
                var1 = var0.done;
                var5 = false;
                var3 = var0;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun92430_ip = 114;
                    continue _fun92430
                }
            case 49:
                var10 = var3.value;
                var1 = var10.user;
                var14 = var10.status;
                var15 = var10.activities;
                var11 = _closure1_slot19;
                var17 = var9.id;
                var16 = var1.id;
                var18 = undefined;
                var1 = var18[var11](var17, var16, var15, var14, var13);
                if (!(var5 !== var1)) {
                    _fun92430_ip = 96;
                    continue _fun92430
                }
            case 94:
                var2 = true;
            case 96:
                var11 = var6.bind(var7)();
                var1 = var11.done;
                var3 = var11;
                var0 = var2;
                if (!var1) {
                    _fun92430_ip = 49;
                    continue _fun92430
                }
            case 114:
                return var0;
        }
    };
    var _closure1_slot20 = var9;
    var0 = function arg0, arg1() {
        var3 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = false;
        var _closure2_slot1 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun92432: for (var _fun92432_ip = 0;;) switch (_fun92432_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun92432_ip = 53;
                        continue _fun92432
                    }
                case 12:
                    var6 = _closure1_slot19;
                    var10 = _closure2_slot0;
                    var2 = var1.user;
                    var9 = var2.id;
                    var8 = var1.activities;
                    var7 = var1.status;
                    var11 = undefined;
                    var0 = var11[var6](var10, var9, var8, var7, var6);
                case 53:
                    if (!var0) {
                        _fun92432_ip = 65;
                        continue _fun92432
                    }
                case 56:
                    var0 = true;
                    _closure2_slot1 = var0;
                case 65:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot1;
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var2 = _closure1_slot7;
        var1 = var2.getId;
        var4 = var1.bind(var2)();
        var2 = _closure1_slot9;
        var1 = var2.getActivities;
        var3 = var1.bind(var2)();
        var2 = _closure1_slot19;
        var1 = _closure1_slot11;
        var0 = undefined;
        var0 = var2.bind(var0)(var1, var4, var3);
        return var0;
    };
    var _closure1_slot22 = var0;
    var8 = function arg0() {
        _fun92434: for (var _fun92434_ip = 0;;) switch (_fun92434_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.relationship;
                var2 = _closure1_slot8;
                var1 = var2.isBlocked;
                var0 = var6.id;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun92434_ip = 62;
                    continue _fun92434
                }
            case 35:
                var2 = _closure1_slot8;
                var1 = var2.isIgnored;
                var0 = var6.id;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun92434_ip = 62;
                    continue _fun92434
                }
            case 58:
                var0 = false;
                return var0;
            case 62:
                var1 = _closure1_slot12;
                var0 = var6.id;
                var7 = var1[var0];
                var4 = null;
                if (!(var4 != var7)) {
                    _fun92434_ip = 189;
                    continue _fun92434
                }
            case 81:
                var2 = _closure1_slot15;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.values;
                var1 = var1.bind(var3)(var7);
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun92434_ip = 187;
                    continue _fun92434
                }
            case 134:
                var8 = var2.value;
                var7 = _closure1_slot13;
                var1 = var7.get;
                var8 = var1.bind(var7)(var8);
                if (!(var4 != var8)) {
                    _fun92434_ip = 172;
                    continue _fun92434
                }
            case 157:
                var7 = var8.delete;
                var1 = var6.id;
                var1 = var7.bind(var8)(var1);
            case 172:
                var7 = var3.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun92434_ip = 134;
                    continue _fun92434
                }
            case 187:
                return var0;
            case 189:
                var0 = false;
                return var0;
        }
    };
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
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var10 = var7.StatusTypes;
    var _closure1_slot10 = var10;
    var7 = var7.ME;
    var _closure1_slot11 = var7;
    var7 = {};
    var _closure1_slot12 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun92436: for (var _fun92436_ip = 0;;) switch (_fun92436_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun92436_ip = 69;
                        continue _fun92436
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun92436_ip = 105;
                    continue _fun92436;
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
            var3 = var4.syncWith;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = _closure1_slot22;
            var1 = var3.bind(var4)(var2, var1);
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var1 = _closure1_slot8;
            var0 = _closure1_slot9;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getParty';
        var4.key = var6;
        var6 = function arg0() {
            _fun92438: for (var _fun92438_ip = 0;;) switch (_fun92438_ip) {
                case 0:
                    var3 = arg0;
                    var4 = null;
                    var1 = var4 != var3;
                    var0 = null;
                    if (!var1) {
                        _fun92438_ip = 50;
                        continue _fun92438
                    }
                case 14:
                    var5 = _closure1_slot13;
                    var2 = var5.has;
                    var2 = var2.bind(var5)(var3);
                    var0 = null;
                    if (!var2) {
                        _fun92438_ip = 50;
                        continue _fun92438
                    }
                case 36:
                    var2 = _closure1_slot13;
                    var1 = var2.get;
                    var0 = var1.bind(var2)(var3);
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getUserParties';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getParties';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GamePartyStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function arg0() {
        _fun92441: for (var _fun92441_ip = 0;;) switch (_fun92441_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guilds;
                var1 = var0.presences;
                var0 = _closure1_slot15;
                var7 = undefined;
                var10 = var0.bind(var7)(var1);
                var0 = var10.bind(var7)();
                var1 = var0.done;
                var6 = false;
                var9 = null;
                var4 = var0;
                var3 = false;
                var0 = false;
                if (var1) {
                    _fun92441_ip = 132;
                    continue _fun92441
                }
            case 52:
                var1 = var4.value;
                var11 = var1.user;
                var15 = var1.status;
                var14 = var1.activities;
                var1 = var9 != var11;
                if (!var1) {
                    _fun92441_ip = 109;
                    continue _fun92441
                }
            case 80:
                var13 = _closure1_slot19;
                var19 = _closure1_slot11;
                var18 = var11.id;
                var20 = undefined;
                var17 = var14;
                var16 = var15;
                var11 = var20[var13](var19, var18, var17, var16, var15);
                var1 = var6 !== var11;
            case 109:
                if (!var1) {
                    _fun92441_ip = 114;
                    continue _fun92441
                }
            case 112:
                var3 = true;
            case 114:
                var12 = var10.bind(var7)();
                var1 = var12.done;
                var4 = var12;
                var0 = var3;
                if (!var1) {
                    _fun92441_ip = 52;
                    continue _fun92441
                }
            case 132:
                var1 = _closure1_slot15;
                var4 = var1.bind(var7)(var2);
                var2 = var4.bind(var7)();
                var1 = var2.done;
                var3 = var0;
                var0 = var3;
                if (var1) {
                    _fun92441_ip = 203;
                    continue _fun92441
                }
            case 159:
                var9 = _closure1_slot20;
                var1 = {};
                var10 = var2.value;
                var1.guild = var10;
                var1 = var9.bind(var7)(var1);
                if (!(var6 !== var1)) {
                    _fun92441_ip = 185;
                    continue _fun92441
                }
            case 183:
                var3 = true;
            case 185:
                var10 = var4.bind(var7)();
                var1 = var10.done;
                var2 = var10;
                var0 = var3;
                if (!var1) {
                    _fun92441_ip = 159;
                    continue _fun92441
                }
            case 203:
                return var0;
        }
    };
    var1.CONNECTION_OPEN_SUPPLEMENTAL = var10;
    var10 = function arg0() {
        var1 = arg0;
        var3 = var1.parties;
        var _closure2_slot0 = var3;
        var6 = var1.userParties;
        var1 = global;
        var2 = var1.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var2
            }
        });
        var8 = var4;
        var2 = new var8[var2](var7);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot13 = var2;
        var2 = {};
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        _closure1_slot12 = var2;
        var2 = var1.Object;
        var1 = var2.keys;
        var2 = var1.bind(var2)(var3);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var2 = _closure1_slot13;
            var1 = var2.set;
            var0 = global;
            var5 = var0.Set;
            var0 = _closure2_slot0;
            var7 = var0[var3];
            var4 = var5.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var5
                }
            });
            var8 = var4;
            var0 = new var8[var5](var7, var6);
            var0 = var0 instanceof Object ? var0 : var4;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var10;
    var1.GUILD_CREATE = var9;
    var9 = function arg0() {
        _fun92444: for (var _fun92444_ip = 0;;) switch (_fun92444_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.presences;
                var0 = _closure1_slot15;
                var8 = undefined;
                var7 = var0.bind(var8)(var1);
                var0 = var7.bind(var8)();
                var1 = var0.done;
                var6 = false;
                var4 = null;
                var3 = var0;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun92444_ip = 116;
                    continue _fun92444
                }
            case 46:
                var1 = var3.value;
                var10 = var1.user;
                var13 = var1.activities;
                var1 = var4 != var10;
                if (!var1) {
                    _fun92444_ip = 93;
                    continue _fun92444
                }
            case 69:
                var12 = _closure1_slot19;
                var11 = _closure1_slot11;
                var10 = var10.id;
                var10 = var12.bind(var8)(var11, var10, var13);
                var1 = var6 !== var10;
            case 93:
                if (!var1) {
                    _fun92444_ip = 98;
                    continue _fun92444
                }
            case 96:
                var2 = true;
            case 98:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var3 = var11;
                var0 = var2;
                if (!var1) {
                    _fun92444_ip = 46;
                    continue _fun92444
                }
            case 116:
                return var0;
        }
    };
    var1.PRESENCES_REPLACE = var9;
    var9 = function arg0() {
        var1 = arg0;
        var3 = var1.updates;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            _fun92446: for (var _fun92446_ip = 0;;) switch (_fun92446_ip) {
                case 0:
                    var1 = arg0;
                    var5 = var1.guildId;
                    var0 = var1.user;
                    var4 = var1.status;
                    var3 = var1.activities;
                    var2 = _closure1_slot19;
                    var6 = null;
                    if (!(var6 == var5)) {
                        _fun92446_ip = 41;
                        continue _fun92446
                    }
                case 37:
                    var5 = _closure1_slot11;
                case 41:
                    var9 = var0.id;
                    var11 = undefined;
                    var10 = var5;
                    var8 = var3;
                    var7 = var4;
                    var0 = var11[var2](var10, var9, var8, var7, var6);
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.PRESENCE_UPDATES = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var4 = var0.members;
        var2 = _closure1_slot21;
        var1 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.presence;
            return var0;
        };
        var1 = var1.bind(var4)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.THREAD_MEMBER_LIST_UPDATE = var9;
    var9 = function arg0() {
        _fun92450: for (var _fun92450_ip = 0;;) switch (_fun92450_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var5 = var0.addedMembers;
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun92450_ip = 57;
                    continue _fun92450
                }
            case 23:
                var3 = _closure1_slot21;
                var2 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.presence;
                    return var0;
                };
                var2 = var2.bind(var5)(var1);
                var1 = undefined;
                var0 = var3.bind(var1)(var4, var2);
            case 57:
                return var0;
        }
    };
    var1.THREAD_MEMBERS_UPDATE = var9;
    var1.RELATIONSHIP_ADD = var8;
    var1.RELATIONSHIP_UPDATE = var8;
    var3 = function arg0() {
        _fun92452: for (var _fun92452_ip = 0;;) switch (_fun92452_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.relationship;
                var1 = _closure1_slot12;
                var0 = var6.id;
                var7 = var1[var0];
                var4 = null;
                if (!(var4 != var7)) {
                    _fun92452_ip = 139;
                    continue _fun92452
                }
            case 31:
                var2 = _closure1_slot15;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.values;
                var1 = var1.bind(var3)(var7);
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun92452_ip = 137;
                    continue _fun92452
                }
            case 84:
                var8 = var2.value;
                var7 = _closure1_slot13;
                var1 = var7.get;
                var8 = var1.bind(var7)(var8);
                if (!(var4 != var8)) {
                    _fun92452_ip = 122;
                    continue _fun92452
                }
            case 107:
                var7 = var8.add;
                var1 = var6.id;
                var1 = var7.bind(var8)(var1);
            case 122:
                var7 = var3.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun92452_ip = 84;
                    continue _fun92452
                }
            case 137:
                return var0;
            case 139:
                var0 = false;
                return var0;
        }
    };
    var1.RELATIONSHIP_REMOVE = var3;
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GamePartyStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 3061, 5621, 660, 22, 566, 806, 2]);