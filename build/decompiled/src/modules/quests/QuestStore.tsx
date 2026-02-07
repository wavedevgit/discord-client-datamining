// modules/quests/QuestStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun47121: for (var _fun47121_ip = 0;;) switch (_fun47121_ip) {
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
                _fun47121_ip = 74;
                continue _fun47121;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot47 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function arg0, arg1() {
        _fun47124: for (var _fun47124_ip = 0;;) switch (_fun47124_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun47124_ip = 46;
                    continue _fun47124
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun47124_ip = 55;
                    continue _fun47124
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun47124_ip = 343;
                    continue _fun47124
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun47124_ip = 323;
                    continue _fun47124
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun47124_ip = 283;
                    continue _fun47124
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun47124_ip = 270;
                    continue _fun47124
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
                    _fun47124_ip = 163;
                    continue _fun47124
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun47124_ip = 179;
                    continue _fun47124
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun47124_ip = 249;
                    continue _fun47124
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun47124_ip = 249;
                    continue _fun47124
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun47124_ip = 234;
                    continue _fun47124
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun47124_ip = 247;
                    continue _fun47124
                }
            case 234:
                var8 = _closure1_slot49;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun47124_ip = 265;
                continue _fun47124;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun47124_ip = 283;
                continue _fun47124;
            case 270:
                var6 = _closure1_slot49;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun47124_ip = 323;
                    continue _fun47124
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
                    _fun47124_ip = 330;
                    continue _fun47124
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun47125: for (var _fun47125_ip = 0;;) switch (_fun47125_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun47125_ip = 56;
                                continue _fun47125
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
                            _fun47125_ip = 67;
                            continue _fun47125;
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
    var _closure1_slot48 = var0;
    var0 = function arg0, arg1() {
        _fun47126: for (var _fun47126_ip = 0;;) switch (_fun47126_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun47126_ip = 23;
                    continue _fun47126
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun47126_ip = 33;
                    continue _fun47126
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
                    _fun47126_ip = 70;
                    continue _fun47126
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun47126_ip = 55;
                    continue _fun47126
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot49 = var0;
    var1 = function() {
        var0 = false;
        var _closure1_slot10 = var0;
        var _closure1_slot11 = var0;
        var1 = global;
        var3 = var1.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure1_slot12 = var3;
        var _closure1_slot13 = var0;
        var _closure1_slot14 = var0;
        var0 = var1.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot15 = var0;
        var0 = var1.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot16 = var0;
        var0 = var1.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot17 = var0;
        var0 = var1.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot18 = var0;
        var0 = var1.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot19 = var0;
        var0 = 0;
        var _closure1_slot20 = var0;
        var _closure1_slot21 = var0;
        var0 = var1.Set;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot22 = var0;
        var0 = var1.Set;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot23 = var0;
        var0 = var1.Set;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot24 = var0;
        var0 = var1.Set;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot25 = var0;
        var0 = var1.Set;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot26 = var0;
        var0 = var1.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        _closure1_slot40 = var0;
        var0 = var1.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot28 = var0;
        var0 = var1.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot29 = var0;
        var0 = var1.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure1_slot30 = var0;
        var3 = null;
        var _closure1_slot31 = var3;
        var0 = var1.Map;
        var4 = var0.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var0
            }
        });
        var5 = var4;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var4;
        var _closure1_slot32 = var0;
        var0 = var1.Set;
        var4 = var0.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var0
            }
        });
        var5 = var4;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var4;
        var _closure1_slot27 = var0;
        var0 = var1.Map;
        var4 = var0.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var0
            }
        });
        var5 = var4;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var4;
        var _closure1_slot33 = var0;
        var0 = var1.Map;
        var4 = var0.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var0
            }
        });
        var5 = var4;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var4;
        var _closure1_slot34 = var0;
        var0 = var1.Map;
        var4 = var0.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var0
            }
        });
        var5 = var4;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var4;
        var _closure1_slot35 = var0;
        var4 = _closure1_slot59;
        var0 = undefined;
        var4 = var4.bind(var0)();
        var _closure1_slot36 = var3;
        var3 = var1.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure1_slot38 = var3;
        var3 = var1.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot45 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var1
            }
        });
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure1_slot37 = var1;
        return var0;
    };
    var _closure1_slot50 = var1;
    var0 = function arg0, arg1() {
        _fun47128: for (var _fun47128_ip = 0;;) switch (_fun47128_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var1 = global;
                var6 = var1.Map;
                var22 = _closure1_slot17;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var23 = var5;
                var2 = new var23[var6](var22, var21);
                var5 = var2 instanceof Object ? var2 : var5;
                _closure1_slot17 = var5;
                var2 = var5.get;
                var5 = var2.bind(var5)(var3);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun47128_ip = 505;
                    continue _fun47128
                }
            case 64:
                var7 = {};
                var22 = var7;
                var21 = var5;
                var5 = copyDataProperties(var22, var21);
                var22 = var7;
                var21 = var4;
                var5 = copyDataProperties(var22, var21);
                var5 = var4.userStatus;
                if (!(var2 != var5)) {
                    _fun47128_ip = 388;
                    continue _fun47128
                }
            case 99:
                var8 = var1.Object;
                var6 = var8.values;
                var9 = var4.userStatus;
                var10 = var2 == var9;
                var13 = undefined;
                var5 = undefined;
                if (var10) {
                    _fun47128_ip = 133;
                    continue _fun47128
                }
            case 127:
                var5 = var9.progress;
            case 133:
                if (!(var2 == var5)) {
                    _fun47128_ip = 139;
                    continue _fun47128
                }
            case 137:
                var5 = {};
            case 139:
                var12 = var6.bind(var8)(var5);
                var5 = var12.length;
                var11 = 0;
                var5 = var11 < var5;
                var10 = 9;
                var9 = 8;
                var8 = undefined;
                var6 = undefined;
                if (!var5) {
                    _fun47128_ip = 388;
                    continue _fun47128
                }
            case 171:
                var16 = var12[var11];
                var14 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var14 = var14.bind(var13)(var5);
                var5 = var14.isNil;
                var5 = var5.bind(var14)(var16);
                var15 = var8;
                var14 = var6;
                if (var5) {
                    _fun47128_ip = 367;
                    continue _fun47128
                }
            case 215:
                var17 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var5 = var17.bind(var13)(var5);
                var5 = var5.FirstPartyQuestTaskTypesSets;
                var18 = var5.DESKTOP;
                var17 = var18.has;
                var5 = var16.eventName;
                var17 = var17.bind(var18)(var5);
                var5 = var6;
                if (!var17) {
                    _fun47128_ip = 361;
                    continue _fun47128
                }
            case 266:
                var17 = var16.heartbeat;
                var19 = var2 == var17;
                var18 = undefined;
                if (var19) {
                    _fun47128_ip = 287;
                    continue _fun47128
                }
            case 281:
                var18 = var17.lastBeatAt;
            case 287:
                if (!(var2 == var18)) {
                    _fun47128_ip = 338;
                    continue _fun47128
                }
            case 291:
                var18 = var16.heartbeat;
                var16 = var2 == var18;
                var19 = undefined;
                if (var16) {
                    _fun47128_ip = 312;
                    continue _fun47128
                }
            case 306:
                var19 = var18.lastBeatAt;
            case 312:
                var16 = var18;
                if (!(var2 == var19)) {
                    _fun47128_ip = 355;
                    continue _fun47128
                }
            case 319:
                var20 = _closure1_slot27;
                var19 = var20.delete;
                var19 = var19.bind(var20)(var3);
                var16 = var18;
                _fun47128_ip = 355;
                continue _fun47128;
            case 338:
                var19 = _closure1_slot27;
                var18 = var19.add;
                var18 = var18.bind(var19)(var3);
                var16 = var6;
            case 355:
                var5 = var16;
                var8 = var17;
            case 361:
                var15 = var8;
                var14 = var5;
            case 367:
                var11 = var11 + 1;
                var5 = var12.length;
                var8 = var15;
                var6 = var14;
                if (var11 < var5) {
                    _fun47128_ip = 171;
                    continue _fun47128
                }
            case 388:
                var6 = _closure1_slot17;
                var5 = var6.set;
                var5 = var5.bind(var6)(var3, var7);
                var6 = _closure1_slot38;
                var5 = var6.has;
                var5 = var5.bind(var6)(var3);
                if (!var5) {
                    _fun47128_ip = 505;
                    continue _fun47128
                }
            case 420:
                var6 = _closure1_slot38;
                var5 = var6.get;
                var5 = var5.bind(var6)(var3);
                if (!(var2 != var5)) {
                    _fun47128_ip = 505;
                    continue _fun47128
                }
            case 438:
                var6 = var1.Map;
                var22 = _closure1_slot38;
                var2 = var6.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var23 = var2;
                var1 = new var23[var6](var22, var21);
                var2 = var1 instanceof Object ? var1 : var2;
                _closure1_slot38 = var2;
                var1 = var2.set;
                var0 = {};
                var22 = var0;
                var21 = var5;
                var5 = copyDataProperties(var22, var21);
                var22 = var0;
                var21 = var4;
                var4 = copyDataProperties(var22, var21);
                var0 = var1.bind(var2)(var3, var0);
            case 505:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot51 = var0;
    var0 = function arg0, arg1() {
        var0 = global;
        var3 = var0.Map;
        var6 = _closure1_slot28;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var7 = var2;
        var0 = new var7[var3](var6, var5);
        var0 = var0 instanceof Object ? var0 : var2;
        var4 = var0.set;
        var3 = arg0;
        var2 = arg1;
        var2 = var4.bind(var0)(var3, var2);
        _closure1_slot28 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot52 = var0;
    var0 = function arg0, arg1() {
        _fun47130: for (var _fun47130_ip = 0;;) switch (_fun47130_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var0 = global;
                var4 = var0.Map;
                var12 = _closure1_slot29;
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = var2;
                var0 = new var13[var4](var12, var11);
                var0 = var0 instanceof Object ? var0 : var2;
                var4 = var0.set;
                var2 = var5.items;
                var2 = var4.bind(var0)(var3, var2);
                _closure1_slot29 = var0;
                var2 = _closure1_slot17;
                var0 = var2.get;
                var2 = var0.bind(var2)(var3);
                var6 = null;
                var4 = var6 == var2;
                var0 = undefined;
                var8 = undefined;
                if (var4) {
                    _fun47130_ip = 94;
                    continue _fun47130
                }
            case 88:
                var8 = var2.userStatus;
            case 94:
                if (!(var6 != var8)) {
                    _fun47130_ip = 317;
                    continue _fun47130
                }
            case 101:
                var2 = var8.claimedAt;
                if (!(var6 == var2)) {
                    _fun47130_ip = 317;
                    continue _fun47130
                }
            case 114:
                var2 = {};
                var2.entitlements = var5;
                var2 = var2.entitlements;
                var4 = var2.items;
                var2 = 0;
                var2 = var4[var2];
                var4 = var2.tenantMetadata;
                var7 = var6 == var4;
                var2 = undefined;
                if (var7) {
                    _fun47130_ip = 165;
                    continue _fun47130
                }
            case 153:
                var4 = var4.questRewards;
                var2 = var4.reward;
            case 165:
                var4 = var6 == var2;
                var9 = undefined;
                if (var4) {
                    _fun47130_ip = 179;
                    continue _fun47130
                }
            case 174:
                var9 = var2.tag;
            case 179:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 10;
                var4 = var10[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.QuestRewardTypes;
                var4 = var4.REWARD_CODE;
                var7 = null;
                if (!(var9 === var4)) {
                    _fun47130_ip = 223;
                    continue _fun47130
                }
            case 217:
                var7 = var2.rewardCode;
            case 223:
                if (!(var6 != var7)) {
                    _fun47130_ip = 237;
                    continue _fun47130
                }
            case 227:
                var2 = _closure1_slot52;
                var2 = var2.bind(var0)(var3, var7);
            case 237:
                var2 = _closure1_slot51;
                var1 = {};
                var4 = {};
                var12 = var4;
                var11 = var8;
                var8 = copyDataProperties(var12, var11);
                var8 = var5.claimedAt;
                var5 = 'claimedAt';
                var4[var5] = var8;
                var8 = var6 == var7;
                var5 = undefined;
                if (var8) {
                    _fun47130_ip = 285;
                    continue _fun47130
                }
            case 279:
                var5 = var7.tier;
            case 285:
                var7 = var6 != var5;
                var6 = null;
                if (!var7) {
                    _fun47130_ip = 297;
                    continue _fun47130
                }
            case 294:
                var6 = var5;
            case 297:
                var5 = 'claimedTier';
                var4[var5] = var6;
                var1.userStatus = var4;
                var1 = var2.bind(var0)(var3, var1);
            case 317:
                return var0;
        }
    };
    var _closure1_slot53 = var0;
    var0 = function arg0() {
        _fun47131: for (var _fun47131_ip = 0;;) switch (_fun47131_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot30;
                var1 = var3.get;
                var3 = var1.bind(var3)(var2);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun47131_ip = 72;
                    continue _fun47131
                }
            case 26:
                var1 = global;
                var4 = var1.Map;
                var5 = _closure1_slot30;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure1_slot30 = var1;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot54 = var0;
    var0 = function arg0() {
        var0 = global;
        var3 = var0.Set;
        var4 = _closure1_slot22;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var5 = var2;
        var0 = new var5[var3](var4, var3);
        var0 = var0 instanceof Object ? var0 : var2;
        var3 = var0.delete;
        var2 = arg0;
        var2 = var3.bind(var0)(var2);
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot55 = var0;
    var0 = function arg0() {
        var0 = global;
        var3 = var0.Set;
        var4 = _closure1_slot25;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var5 = var2;
        var0 = new var5[var3](var4, var3);
        var0 = var0 instanceof Object ? var0 : var2;
        var3 = var0.delete;
        var2 = arg0;
        var2 = var3.bind(var0)(var2);
        _closure1_slot25 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot56 = var0;
    var0 = function arg0() {
        _fun47134: for (var _fun47134_ip = 0;;) switch (_fun47134_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun47134_ip = 42;
                    continue _fun47134
                }
            case 9:
                var0 = 1000;
                var0 = var0 * var1;
                var2 = _closure1_slot39;
                if (!(var0 < var2)) {
                    _fun47134_ip = 36;
                    continue _fun47134
                }
            case 30:
                var2 = 0;
                if (!(!(var0 > var2))) {
                    _fun47134_ip = 40;
                    continue _fun47134
                }
            case 36:
                var0 = _closure1_slot39;
            case 40:
                return var0;
            case 42:
                var0 = _closure1_slot39;
                return var0;
        }
    };
    var _closure1_slot57 = var0;
    var0 = function() {
        _fun47135: for (var _fun47135_ip = 0;;) switch (_fun47135_ip) {
            case 0:
                var2 = function() {
                    _fun47136: for (var _fun47136_ip = 0;;) switch (_fun47136_ip) {
                        case 0:
                            var0 = false;
                            var _closure3_slot0 = var0;
                            var0 = global;
                            var4 = var0.Map;
                            var6 = _closure1_slot35;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var7 = var3;
                            var1 = new var7[var4](var6, var5);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var _closure3_slot1 = var1;
                            var5 = _closure1_slot17;
                            var4 = var5.forEach;
                            var3 = function(arg0, arg1) { // Environment: var2
                                _fun47137: for (var _fun47137_ip = 0;;) switch (_fun47137_ip) {
                                    case 0:
                                        var4 = arg1;
                                        var2 = _closure3_slot1;
                                        var0 = var2.get;
                                        var2 = var0.bind(var2)(var4);
                                        var0 = true;
                                        if (!(var0 !== var2)) {
                                            _fun47137_ip = 119;
                                            continue _fun47137
                                        }
                                    case 26:
                                        var5 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 11;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var5 = var5.bind(var2)(var3);
                                        var3 = var5.isQuestExpired;
                                        var2 = arg0;
                                        var2 = var3.bind(var5)(var2);
                                        var3 = _closure3_slot1;
                                        if (var2) {
                                            _fun47137_ip = 104;
                                            continue _fun47137
                                        }
                                    case 72:
                                        var2 = var3.has;
                                        var2 = var2.bind(var3)(var4);
                                        if (var2) {
                                            _fun47137_ip = 119;
                                            continue _fun47137
                                        }
                                    case 85:
                                        var6 = _closure3_slot1;
                                        var5 = var6.set;
                                        var2 = false;
                                        var2 = var5.bind(var6)(var4, var2);
                                        _fun47137_ip = 119;
                                        continue _fun47137;
                                    case 104:
                                        var2 = var3.set;
                                        var2 = var2.bind(var3)(var4, var0);
                                        _closure3_slot0 = var0;
                                    case 119:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var5)(var3);
                            var2 = _closure3_slot0;
                            if (!var2) {
                                _fun47136_ip = 91;
                                continue _fun47136
                            }
                        case 73:
                            _closure1_slot35 = var1;
                            var1 = _closure1_slot46;
                            var0 = var1.emitChange;
                            var0 = var0.bind(var1)();
                        case 91:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = undefined;
                var2 = var2.bind(var0)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var6 = var4.bind(var0)(var3);
                var5 = var6.findNextUpcomingExpirationEpochMs;
                var3 = global;
                var8 = var3.Array;
                var7 = var8.from;
                var9 = _closure1_slot17;
                var4 = var9.values;
                var4 = var4.bind(var9)();
                var4 = var7.bind(var8)(var4);
                var5 = var5.bind(var6)(var4);
                var4 = null;
                if (!(var4 != var5)) {
                    _fun47135_ip = 167;
                    continue _fun47135
                }
            case 84:
                var7 = var3.Math;
                var6 = var7.max;
                var8 = var3.Date;
                var4 = var8.now;
                var4 = var4.bind(var8)();
                var5 = var5 - var4;
                var4 = 2000;
                var5 = var5 + var4;
                var4 = 5000;
                var4 = var6.bind(var7)(var4, var5);
                var5 = 864000000;
                if (!(!(var4 > var5))) {
                    _fun47135_ip = 167;
                    continue _fun47135
                }
            case 146:
                var3 = var3.setTimeout;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot58;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot41 = var1;
            case 167:
                return var0;
        }
    };
    var _closure1_slot58 = var0;
    var0 = function() {
        _fun47139: for (var _fun47139_ip = 0;;) switch (_fun47139_ip) {
            case 0:
                var2 = _closure1_slot41;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun47139_ip = 36;
                    continue _fun47139
                }
            case 13:
                var2 = global;
                var4 = var2.clearTimeout;
                var3 = _closure1_slot41;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _closure1_slot41 = var0;
            case 36:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot59 = var0;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var8 = var5[var0];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var9 = 6;
    var8 = var5[var9];
    var8 = var4.bind(var0)(var8);
    var8 = var8.QuestsExperimentLocations;
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var8 = var9 * var8;
    var _closure1_slot39 = var8;
    var8 = var7.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot40 = var8;
    var8 = null;
    var _closure1_slot41 = var8;
    var _closure1_slot42 = var8;
    var9 = false;
    var _closure1_slot43 = var9;
    var _closure1_slot44 = var8;
    var7 = var7.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var14 = var8;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot45 = var7;
    var1 = var1.bind(var0)();
    var1 = 16;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun47141: for (var _fun47141_ip = 0;;) switch (_fun47141_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot47;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun47141_ip = 69;
                        continue _fun47141
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun47141_ip = 105;
                    continue _fun47141;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'quests';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(37);
        var0[0] = var4;
        var4 = {};
        var6 = 'excludedQuests';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'claimedQuests';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isFetchingCurrentQuests';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isFetchingClaimedQuests';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isFetchingQuestPreview';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot26;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'lastFetchedCurrentQuests';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'lastFetchedQuestToDeliver';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isFetchingQuestToDeliver';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isFetchingQuestToDeliverByPlacement';
        var4.key = var6;
        var6 = function arg0() {
            _fun47151: for (var _fun47151_ip = 0;;) switch (_fun47151_ip) {
                case 0:
                    var4 = _closure1_slot12;
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun47151_ip = 31;
                        continue _fun47151
                    }
                case 18:
                    var3 = var4.get;
                    var2 = arg0;
                    var1 = var3.bind(var4)(var2);
                case 31:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun47151_ip = 41;
                        continue _fun47151
                    }
                case 38:
                    var0 = var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'questDeliveryOverride';
        var4.key = var6;
        var6 = function() {
            _fun47152: for (var _fun47152_ip = 0;;) switch (_fun47152_ip) {
                case 0:
                    var2 = _closure1_slot17;
                    var1 = var2.get;
                    var4 = _closure1_slot31;
                    var0 = null;
                    var4 = var0 != var4;
                    var0 = '';
                    if (!var4) {
                        _fun47152_ip = 33;
                        continue _fun47152
                    }
                case 29:
                    var0 = _closure1_slot31;
                case 33:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'questToDeliverForPlacement';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot33;
            return var0;
        };
        var4.get = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'questEnrollmentBlockedUntil';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot36;
            return var0;
        };
        var4.get = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'questAdDecisionByPlacement';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot37;
            return var0;
        };
        var4.get = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getFetchQuestPreviewError';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot45;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'isEnrolling';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot22;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'isClaimingReward';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot23;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'isFetchingRewardCode';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot24;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'isDismissingContent';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot25;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getRewardCode';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot28;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getRewards';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot29;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getStreamHeartbeatFailure';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot30;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'getQuest';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot17;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'getQuestConfig';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot16;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'questConfigs';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.get = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'isProgressingOnDesktop';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot27;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'selectedTaskPlatform';
        var4.key = var6;
        var6 = function arg0() {
            _fun47168: for (var _fun47168_ip = 0;;) switch (_fun47168_ip) {
                case 0:
                    var2 = _closure1_slot32;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun47168_ip = 32;
                        continue _fun47168
                    }
                case 29:
                    var0 = var1;
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'getOptimisticProgress';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun47169: for (var _fun47169_ip = 0;;) switch (_fun47169_ip) {
                case 0:
                    var2 = _closure1_slot40;
                    var1 = var2.get;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 == var3;
                    var0 = undefined;
                    if (var1) {
                        _fun47169_ip = 44;
                        continue _fun47169
                    }
                case 31:
                    var2 = var3.get;
                    var1 = arg1;
                    var0 = var2.bind(var3)(var1);
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'getExpiredQuestsMap';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot35;
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'isQuestExpired';
        var4.key = var6;
        var6 = function arg0() {
            _fun47171: for (var _fun47171_ip = 0;;) switch (_fun47171_ip) {
                case 0:
                    var2 = _closure1_slot35;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun47171_ip = 32;
                        continue _fun47171
                    }
                case 29:
                    var0 = var1;
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'getQuestLoadedViaPreview';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot38;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'isFetchingQuestHomeTakeover';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot43;
            return var0;
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'getQuestHomeTakeoverConfig';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot44;
            return var0;
        };
        var4.value = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'getLastFetchedQuestHomeTakeover';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot42;
            return var0;
        };
        var4.value = var6;
        var0[33] = var4;
        var4 = {};
        var6 = 'isFetchingEarnedQuestToDeliver';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var6;
        var0[34] = var4;
        var4 = {};
        var6 = 'isFetchingEarnedQuestToDeliverByPlacement';
        var4.key = var6;
        var6 = function arg0() {
            _fun47177: for (var _fun47177_ip = 0;;) switch (_fun47177_ip) {
                case 0:
                    var4 = _closure1_slot15;
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun47177_ip = 31;
                        continue _fun47177
                    }
                case 18:
                    var3 = var4.get;
                    var2 = arg0;
                    var1 = var3.bind(var4)(var2);
                case 31:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun47177_ip = 41;
                        continue _fun47177
                    }
                case 38:
                    var0 = var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[35] = var4;
        var4 = {};
        var6 = 'earnedQuestForPlacement';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot34;
            return var0;
        };
        var4.get = var5;
        var0[36] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 'QuestStore';
    var8.displayName = var1;
    var1 = 17;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function() {
        var2 = _closure1_slot59;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var2 = _closure1_slot50;
        var2 = var2.bind(var0)();
        var2 = _closure1_slot8;
        var1 = var2.getState;
        var2 = var1.bind(var2)();
        var1 = var2.clearState;
        var1 = var1.bind(var2)();
        return var0;
    };
    var1.LOGOUT = var6;
    var6 = function() {
        var0 = true;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_CURRENT_QUESTS_BEGIN = var6;
    var6 = function arg0() {
        _fun47181: for (var _fun47181_ip = 0;;) switch (_fun47181_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.quests;
                var6 = var0.excludedQuests;
                var5 = var0.questEnrollmentBlockedUntil;
                var3 = global;
                var1 = var3.Date;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                _closure1_slot20 = var0;
                var0 = false;
                _closure1_slot10 = var0;
                var0 = var3.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var25 = var1;
                var0 = new var25[var0](var24);
                var0 = var0 instanceof Object ? var0 : var1;
                _closure1_slot17 = var0;
                var0 = var3.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var25 = var1;
                var0 = new var25[var0](var24);
                var0 = var0 instanceof Object ? var0 : var1;
                _closure1_slot16 = var0;
                var0 = var3.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var25 = var1;
                var0 = new var25[var0](var24);
                var4 = var0 instanceof Object ? var0 : var1;
                var1 = _closure1_slot48;
                var0 = undefined;
                var14 = var1.bind(var0)(var7);
                var7 = var14.bind(var0)();
                var1 = var7.done;
                var13 = 13;
                var12 = 'Delivered ';
                var11 = ' (';
                var10 = ')';
                var9 = 11;
                var8 = 12;
                if (var1) {
                    _fun47181_ip = 440;
                    continue _fun47181
                }
            case 188:
                var1 = var7.value;
                var17 = _closure1_slot17;
                var16 = var17.set;
                var15 = var1.id;
                var15 = var16.bind(var17)(var15, var1);
                var18 = _closure1_slot16;
                var17 = var18.set;
                var16 = var1.id;
                var15 = var1.config;
                var15 = var17.bind(var18)(var16, var15);
                var19 = var4.set;
                var17 = var1.id;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var9];
                var20 = var18.bind(var0)(var16);
                var16 = var20.isQuestExpired;
                var16 = var16.bind(var20)(var1);
                var16 = var19.bind(var4)(var17, var16);
                var17 = var1.targetedContent;
                var16 = var17.includes;
                var15 = var15[var8];
                var15 = var18.bind(var0)(var15);
                var15 = var15.QuestContent;
                var15 = var15.QUEST_BAR;
                var15 = var16.bind(var17)(var15);
                if (!var15) {
                    _fun47181_ip = 422;
                    continue _fun47181
                }
            case 322:
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var13];
                var17 = var16.bind(var0)(var15);
                var16 = var17.getQuestLogger;
                var15 = {};
                var18 = _closure1_slot9;
                var18 = var18.QUESTS_STORE;
                var15.location = var18;
                var16 = var16.bind(var17)(var15);
                var15 = var16.log;
                var17 = var1.config;
                var17 = var17.messages;
                var24 = var17.questName;
                var22 = var1.id;
                var1 = var3.HermesInternal;
                var1 = var1.concat;
                var25 = var12;
                var23 = var11;
                var21 = var10;
                var1 = var25[var1](var24, var23, var22, var21, var20);
                var1 = var15.bind(var16)(var1);
            case 422:
                var15 = var14.bind(var0)();
                var1 = var15.done;
                var7 = var15;
                if (!var1) {
                    _fun47181_ip = 188;
                    continue _fun47181
                }
            case 440:
                var1 = var3.Map;
                var7 = var1.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var1
                    }
                });
                var25 = var7;
                var1 = new var25[var1](var24);
                var1 = var1 instanceof Object ? var1 : var7;
                _closure1_slot18 = var1;
                var1 = _closure1_slot48;
                var7 = var1.bind(var0)(var6);
                var6 = var7.bind(var0)();
                var1 = var6.done;
                if (var1) {
                    _fun47181_ip = 531;
                    continue _fun47181
                }
            case 491:
                var11 = var6.value;
                var10 = _closure1_slot18;
                var8 = var10.set;
                var1 = var11.id;
                var1 = var8.bind(var10)(var1, var11);
                var8 = var7.bind(var0)();
                var1 = var8.done;
                var6 = var8;
                if (!var1) {
                    _fun47181_ip = 491;
                    continue _fun47181
                }
            case 531:
                var7 = _closure1_slot48;
                var10 = _closure1_slot38;
                var1 = null;
                var8 = var1 == var10;
                var6 = undefined;
                if (var8) {
                    _fun47181_ip = 559;
                    continue _fun47181
                }
            case 550:
                var8 = var10.values;
                var6 = var8.bind(var10)();
            case 559:
                var8 = var7.bind(var0)(var6);
                var7 = var8.bind(var0)();
                var6 = var7.done;
                if (var6) {
                    _fun47181_ip = 710;
                    continue _fun47181
                }
            case 579:
                var13 = var7.value;
                var11 = _closure1_slot17;
                var10 = var11.has;
                var6 = var13.id;
                var6 = var10.bind(var11)(var6);
                if (var6) {
                    _fun47181_ip = 695;
                    continue _fun47181
                }
            case 606:
                var11 = _closure1_slot17;
                var10 = var11.set;
                var6 = var13.id;
                var6 = var10.bind(var11)(var6, var13);
                var12 = _closure1_slot16;
                var11 = var12.set;
                var10 = var13.id;
                var6 = var13.config;
                var6 = var11.bind(var12)(var10, var6);
                var11 = var4.set;
                var10 = var13.id;
                var12 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var12 = var12.bind(var0)(var6);
                var6 = var12.isQuestExpired;
                var6 = var6.bind(var12)(var13);
                var6 = var11.bind(var4)(var10, var6);
            case 695:
                var10 = var8.bind(var0)();
                var6 = var10.done;
                var7 = var10;
                if (!var6) {
                    _fun47181_ip = 579;
                    continue _fun47181
                }
            case 710:
                _closure1_slot35 = var4;
                var4 = _closure1_slot59;
                var4 = var4.bind(var0)();
                var4 = _closure1_slot58;
                var4 = var4.bind(var0)();
                var4 = var1 != var5;
                var1 = null;
                if (!var4) {
                    _fun47181_ip = 768;
                    continue _fun47181
                }
            case 739:
                var3 = var3.Date;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var25 = var4;
                var24 = var5;
                var3 = new var25[var3](var24, var23);
                var1 = var3 instanceof Object ? var3 : var4;
            case 768:
                _closure1_slot36 = var1;
                return var0;
        }
    };
    var1.QUESTS_FETCH_CURRENT_QUESTS_SUCCESS = var6;
    var6 = function() {
        var0 = 0;
        _closure1_slot20 = var0;
        var0 = false;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_CURRENT_QUESTS_FAILURE = var6;
    var6 = function() {
        var0 = true;
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_CLAIMED_QUESTS_BEGIN = var6;
    var6 = function arg0() {
        _fun47184: for (var _fun47184_ip = 0;;) switch (_fun47184_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.quests;
                var0 = false;
                _closure1_slot13 = var0;
                var0 = global;
                var0 = var0.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var10 = var1;
                var0 = new var10[var0](var9);
                var0 = var0 instanceof Object ? var0 : var1;
                _closure1_slot19 = var0;
                var1 = _closure1_slot48;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun47184_ip = 113;
                    continue _fun47184
                }
            case 73:
                var7 = var2.value;
                var6 = _closure1_slot19;
                var5 = var6.set;
                var1 = var7.id;
                var1 = var5.bind(var6)(var1, var7);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun47184_ip = 73;
                    continue _fun47184
                }
            case 113:
                return var0;
        }
    };
    var1.QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS = var6;
    var6 = function() {
        var0 = false;
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_CLAIMED_QUESTS_FAILURE = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.placement;
        var2 = true;
        _closure1_slot11 = var2;
        var1 = global;
        var5 = var1.Map;
        var7 = _closure1_slot12;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var8 = var4;
        var1 = new var8[var5](var7, var6);
        var1 = var1 instanceof Object ? var1 : var4;
        _closure1_slot12 = var1;
        var0 = var1.set;
        var0 = var0.bind(var1)(var3, var2);
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN = var6;
    var6 = function arg0() {
        _fun47187: for (var _fun47187_ip = 0;;) switch (_fun47187_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.quest;
                var4 = var0.placement;
                var10 = var0.adDecisionData;
                var9 = var0.adContext;
                var12 = var0.responseTtlSeconds;
                var8 = var0.metadataRaw;
                var7 = var0.metadataSealed;
                var6 = var0.trafficMetadataRaw;
                var5 = var0.trafficMetadataSealed;
                var11 = var0.fetchedAt;
                var2 = global;
                var1 = var2.Date;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                _closure1_slot21 = var0;
                var13 = false;
                _closure1_slot11 = var13;
                var14 = var2.Map;
                var19 = _closure1_slot12;
                var3 = var14.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var14
                    }
                });
                var20 = var3;
                var0 = new var20[var14](var19, var18);
                var3 = var0 instanceof Object ? var0 : var3;
                _closure1_slot12 = var3;
                var0 = var3.set;
                var0 = var0.bind(var3)(var4, var13);
                var13 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 15;
                var3 = var3[var0];
                var0 = undefined;
                var14 = var13.bind(var0)(var3);
                var13 = var14.getConfig;
                var3 = {};
                var16 = 'handleFetchQuestToDeliverSuccess';
                var3.location = var16;
                var3 = var13.bind(var14)(var3);
                var3 = var3.enableNewRequestBehavior;
                var13 = null;
                if (var3) {
                    _fun47187_ip = 274;
                    continue _fun47187
                }
            case 194:
                if (!(var13 != var15)) {
                    _fun47187_ip = 255;
                    continue _fun47187
                }
            case 198:
                var16 = _closure1_slot33;
                var14 = var16.set;
                var3 = {};
                var3.quest = var15;
                var3.adDecisionData = var10;
                var3.adContext = var9;
                var3.metadataRaw = var8;
                var3.metadataSealed = var7;
                var3.trafficMetadataRaw = var6;
                var3.trafficMetadataSealed = var5;
                var3 = var14.bind(var16)(var4, var3);
                _fun47187_ip = 401;
                continue _fun47187;
            case 255:
                var14 = _closure1_slot33;
                var3 = var14.delete;
                var3 = var3.bind(var14)(var4);
                _fun47187_ip = 401;
                continue _fun47187;
            case 274:
                var3 = {};
                var16 = var13 == var15;
                var14 = undefined;
                if (var16) {
                    _fun47187_ip = 290;
                    continue _fun47187
                }
            case 285:
                var14 = var15.id;
            case 290:
                var15 = var13 != var14;
                var13 = null;
                if (!var15) {
                    _fun47187_ip = 302;
                    continue _fun47187
                }
            case 299:
                var13 = var14;
            case 302:
                var3.questId = var13;
                var3.fetchedAt = var11;
                var11 = _closure1_slot57;
                var11 = var11.bind(var0)(var12);
                var3.ttlMillis = var11;
                var3.adDecisionData = var10;
                var3.adContext = var9;
                var3.metadataRaw = var8;
                var3.metadataSealed = var7;
                var3.trafficMetadataRaw = var6;
                var3.trafficMetadataSealed = var5;
                var6 = var2.Map;
                var19 = _closure1_slot37;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var20 = var5;
                var2 = new var20[var6](var19, var18);
                var2 = var2 instanceof Object ? var2 : var5;
                _closure1_slot37 = var2;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
            case 401:
                return var0;
        }
    };
    var1.QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.placement;
        var2 = _closure1_slot33;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = global;
        var4 = var1.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        _closure1_slot21 = var2;
        var2 = false;
        _closure1_slot11 = var2;
        var5 = var1.Map;
        var7 = _closure1_slot12;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var8 = var4;
        var1 = new var8[var5](var7, var6);
        var1 = var1 instanceof Object ? var1 : var4;
        _closure1_slot12 = var1;
        var0 = var1.set;
        var0 = var0.bind(var1)(var3, var2);
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.content;
        var2 = true;
        _closure1_slot14 = var2;
        var1 = global;
        var5 = var1.Map;
        var7 = _closure1_slot15;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var8 = var4;
        var1 = new var8[var5](var7, var6);
        var1 = var1 instanceof Object ? var1 : var4;
        _closure1_slot15 = var1;
        var0 = var1.set;
        var0 = var0.bind(var1)(var3, var2);
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN = var6;
    var6 = function arg0() {
        _fun47190: for (var _fun47190_ip = 0;;) switch (_fun47190_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.quests;
                var5 = var0.metadataRaw;
                var2 = var0.content;
                var4 = false;
                _closure1_slot14 = var4;
                var1 = global;
                var7 = var1.Map;
                var9 = _closure1_slot15;
                var3 = var7.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var3;
                var1 = new var10[var7](var9, var8);
                var3 = var1 instanceof Object ? var1 : var3;
                _closure1_slot15 = var3;
                var1 = var3.set;
                var1 = var1.bind(var3)(var2, var4);
                var3 = var6.size;
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun47190_ip = 116;
                    continue _fun47190
                }
            case 87:
                var4 = _closure1_slot34;
                var3 = var4.set;
                var1 = {};
                var1.quests = var6;
                var1.metadataRaw = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun47190_ip = 130;
                continue _fun47190;
            case 116:
                var1 = _closure1_slot34;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 130:
                var0 = undefined;
                return var0;
        }
    };
    var1.QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.content;
        var2 = _closure1_slot34;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var2 = false;
        _closure1_slot14 = var2;
        var1 = global;
        var5 = var1.Map;
        var7 = _closure1_slot15;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var8 = var4;
        var1 = new var8[var5](var7, var6);
        var1 = var1 instanceof Object ? var1 : var4;
        _closure1_slot15 = var1;
        var0 = var1.set;
        var0 = var0.bind(var1)(var3, var2);
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE = var6;
    var6 = function arg0() {
        var0 = arg0;
        var2 = var0.questId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot26;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var7 = var4;
        var3 = new var7[var5](var6, var5);
        var4 = var3 instanceof Object ? var3 : var4;
        _closure1_slot26 = var4;
        var3 = var4.add;
        var3 = var3.bind(var4)(var2);
        var4 = var1.Map;
        var6 = _closure1_slot45;
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var7 = var3;
        var1 = new var7[var4](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot45 = var1;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_PREVIEW_BEGIN = var6;
    var6 = function arg0() {
        var0 = arg0;
        var2 = var0.questId;
        var3 = var0.quest;
        var1 = global;
        var6 = var1.Set;
        var8 = _closure1_slot26;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot26 = var5;
        var4 = var5.delete;
        var4 = var4.bind(var5)(var2);
        var6 = var1.Map;
        var8 = _closure1_slot38;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot38 = var5;
        var4 = var5.set;
        var4 = var4.bind(var5)(var2, var3);
        var6 = var1.Map;
        var8 = _closure1_slot17;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot17 = var5;
        var4 = var5.set;
        var4 = var4.bind(var5)(var2, var3);
        var6 = var1.Map;
        var8 = _closure1_slot16;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot16 = var5;
        var4 = var5.set;
        var3 = var3.config;
        var3 = var4.bind(var5)(var2, var3);
        var4 = var1.Map;
        var8 = _closure1_slot45;
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var9 = var3;
        var1 = new var9[var4](var8, var7);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot45 = var1;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_PREVIEW_SUCCESS = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.questId;
        var2 = var0.error;
        var1 = global;
        var6 = var1.Set;
        var8 = _closure1_slot26;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        _closure1_slot26 = var5;
        var4 = var5.delete;
        var4 = var4.bind(var5)(var3);
        var5 = var1.Map;
        var8 = _closure1_slot45;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var9 = var4;
        var1 = new var9[var5](var8, var7);
        var1 = var1 instanceof Object ? var1 : var4;
        _closure1_slot45 = var1;
        var0 = var1.set;
        var0 = var0.bind(var1)(var3, var2);
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_PREVIEW_FAILURE = var6;
    var6 = function arg0() {
        _fun47195: for (var _fun47195_ip = 0;;) switch (_fun47195_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.questId;
                var2 = var0.streamKey;
                var0 = var0.userStatus;
                var4 = _closure1_slot27;
                var3 = var4.add;
                var3 = var3.bind(var4)(var5);
                var4 = _closure1_slot51;
                var3 = {};
                var3.userStatus = var0;
                var0 = undefined;
                var3 = var4.bind(var0)(var5, var3);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun47195_ip = 72;
                    continue _fun47195
                }
            case 63:
                var1 = _closure1_slot54;
                var1 = var1.bind(var0)(var2);
            case 72:
                return var0;
        }
    };
    var1.QUESTS_SEND_HEARTBEAT_SUCCESS = var6;
    var6 = function arg0() {
        _fun47196: for (var _fun47196_ip = 0;;) switch (_fun47196_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.questId;
                var3 = var0.streamKey;
                var2 = null;
                var0 = var2 != var3;
                if (!var0) {
                    _fun47196_ip = 45;
                    continue _fun47196
                }
            case 24:
                var4 = _closure1_slot30;
                var1 = var4.get;
                var1 = var1.bind(var4)(var3);
                var0 = var2 == var1;
            case 45:
                if (!var0) {
                    _fun47196_ip = 132;
                    continue _fun47196
                }
            case 48:
                var4 = global;
                var6 = var4.Map;
                var8 = _closure1_slot30;
                var2 = var6.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var2;
                var1 = new var9[var6](var8, var7);
                var2 = var1 instanceof Object ? var1 : var2;
                _closure1_slot30 = var2;
                var1 = var2.set;
                var0 = {};
                var0.questId = var5;
                var0.streamKey = var3;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var0.firstFailedAt = var4;
                var0 = var1.bind(var2)(var3, var0);
            case 132:
                var0 = undefined;
                return var0;
        }
    };
    var1.QUESTS_SEND_HEARTBEAT_FAILURE = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.questId;
        var0 = global;
        var4 = var0.Set;
        var5 = _closure1_slot22;
        var2 = var4.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var4
            }
        });
        var6 = var2;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var2;
        var2 = var0.add;
        var2 = var2.bind(var0)(var3);
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_ENROLL_BEGIN = var6;
    var6 = function arg0() {
        var0 = arg0;
        var1 = var0.enrolledQuestUserStatus;
        var5 = _closure1_slot51;
        var4 = var1.questId;
        var3 = {};
        var3.userStatus = var1;
        var0 = undefined;
        var3 = var5.bind(var0)(var4, var3);
        var2 = _closure1_slot55;
        var1 = var1.questId;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.QUESTS_ENROLL_SUCCESS = var6;
    var6 = function arg0() {
        var0 = arg0;
        var2 = var0.questId;
        var1 = _closure1_slot55;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.QUESTS_ENROLL_FAILURE = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.questId;
        var0 = global;
        var4 = var0.Set;
        var5 = _closure1_slot24;
        var2 = var4.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var4
            }
        });
        var6 = var2;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var2;
        var2 = var0.add;
        var2 = var2.bind(var0)(var3);
        _closure1_slot24 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_REWARD_CODE_BEGIN = var6;
    var6 = function arg0() {
        _fun47201: for (var _fun47201_ip = 0;;) switch (_fun47201_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.questId;
                var5 = var0.rewardCode;
                var0 = global;
                var4 = var0.Set;
                var9 = _closure1_slot24;
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = var2;
                var0 = new var10[var4](var9, var8);
                var0 = var0 instanceof Object ? var0 : var2;
                var2 = var0.delete;
                var2 = var2.bind(var0)(var3);
                _closure1_slot24 = var0;
                var2 = _closure1_slot52;
                var0 = undefined;
                var2 = var2.bind(var0)(var3, var5);
                var4 = _closure1_slot17;
                var2 = var4.get;
                var2 = var2.bind(var4)(var3);
                var7 = null;
                var4 = var7 == var2;
                var6 = undefined;
                if (var4) {
                    _fun47201_ip = 107;
                    continue _fun47201
                }
            case 101:
                var6 = var2.userStatus;
            case 107:
                var2 = var7 != var6;
                if (!var2) {
                    _fun47201_ip = 124;
                    continue _fun47201
                }
            case 114:
                var4 = var6.claimedAt;
                var2 = var7 == var4;
            case 124:
                if (!var2) {
                    _fun47201_ip = 171;
                    continue _fun47201
                }
            case 127:
                var2 = _closure1_slot51;
                var1 = {};
                var4 = {};
                var9 = var4;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var6 = var5.claimedAt;
                var5 = 'claimedAt';
                var4[var5] = var6;
                var1.userStatus = var4;
                var1 = var2.bind(var0)(var3, var1);
            case 171:
                return var0;
        }
    };
    var1.QUESTS_FETCH_REWARD_CODE_SUCCESS = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.questId;
        var0 = global;
        var4 = var0.Set;
        var5 = _closure1_slot24;
        var2 = var4.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var4
            }
        });
        var6 = var2;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var2;
        var2 = var0.delete;
        var2 = var2.bind(var0)(var3);
        _closure1_slot24 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_REWARD_CODE_FAILURE = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.questId;
        var0 = global;
        var4 = var0.Set;
        var5 = _closure1_slot23;
        var2 = var4.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var4
            }
        });
        var6 = var2;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var2;
        var2 = var0.add;
        var2 = var2.bind(var0)(var3);
        _closure1_slot23 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_CLAIM_REWARD_BEGIN = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.questId;
        var2 = var0.entitlements;
        var0 = global;
        var5 = var0.Set;
        var7 = _closure1_slot23;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var8 = var4;
        var1 = new var8[var5](var7, var6);
        var1 = var1 instanceof Object ? var1 : var4;
        var4 = var1.delete;
        var4 = var4.bind(var1)(var3);
        _closure1_slot23 = var1;
        var1 = _closure1_slot53;
        var0 = undefined;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var1.QUESTS_CLAIM_REWARD_SUCCESS = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.questId;
        var0 = global;
        var4 = var0.Set;
        var5 = _closure1_slot23;
        var2 = var4.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var4
            }
        });
        var6 = var2;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var2;
        var2 = var0.delete;
        var2 = var2.bind(var0)(var3);
        _closure1_slot23 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_CLAIM_REWARD_FAILURE = var6;
    var6 = function arg0() {
        _fun47206: for (var _fun47206_ip = 0;;) switch (_fun47206_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.questId;
                var0 = global;
                var4 = var0.Set;
                var5 = _closure1_slot25;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var0 = new var6[var4](var5, var4);
                var0 = var0 instanceof Object ? var0 : var3;
                var3 = var0.add;
                var3 = var3.bind(var0)(var2);
                _closure1_slot25 = var0;
                var0 = _closure1_slot31;
                if (!(var0 === var2)) {
                    _fun47206_ip = 72;
                    continue _fun47206
                }
            case 66:
                var0 = null;
                _closure1_slot31 = var0;
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var1.QUESTS_DISMISS_CONTENT_BEGIN = var6;
    var6 = function arg0() {
        var0 = arg0;
        var1 = var0.dismissedQuestUserStatus;
        var5 = _closure1_slot51;
        var4 = var1.questId;
        var3 = {};
        var3.userStatus = var1;
        var0 = undefined;
        var3 = var5.bind(var0)(var4, var3);
        var2 = _closure1_slot56;
        var1 = var1.questId;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.QUESTS_DISMISS_CONTENT_SUCCESS = var6;
    var6 = function arg0() {
        var0 = arg0;
        var2 = var0.questId;
        var1 = _closure1_slot56;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.QUESTS_DISMISS_CONTENT_FAILURE = var6;
    var6 = function arg0() {
        _fun47209: for (var _fun47209_ip = 0;;) switch (_fun47209_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.user_status;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 13;
                var1 = var7[var0];
                var0 = undefined;
                var5 = var6.bind(var0)(var1);
                var3 = var5.getQuestLogger;
                var1 = {};
                var8 = _closure1_slot9;
                var8 = var8.QUESTS_STORE;
                var1.location = var8;
                var5 = var3.bind(var5)(var1);
                var8 = var5.log;
                var10 = var4.quest_id;
                var3 = global;
                var1 = var3.HermesInternal;
                var9 = var1.concat;
                var1 = 'Received user status update for ';
                var1 = var9.bind(var1)(var10);
                var1 = var8.bind(var5)(var1, var4);
                var1 = 14;
                var1 = var7[var1];
                var6 = var6.bind(var0)(var1);
                var1 = var6.questUserStatusFromServer;
                var1 = var1.bind(var6)(var4);
                var8 = _closure1_slot51;
                var7 = var4.quest_id;
                var6 = {};
                var6.userStatus = var1;
                var6 = var8.bind(var0)(var7, var6);
                var8 = _closure1_slot17;
                var7 = var8.get;
                var6 = var4.quest_id;
                var8 = var7.bind(var8)(var6);
                var6 = null;
                if (!(var6 != var8)) {
                    _fun47209_ip = 280;
                    continue _fun47209
                }
            case 174:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 11;
                var6 = var9[var6];
                var7 = var7.bind(var0)(var6);
                var6 = var7.isQuestExpired;
                var8 = var6.bind(var7)(var8);
                var9 = _closure1_slot35;
                var7 = var9.get;
                var6 = var4.quest_id;
                var6 = var7.bind(var9)(var6);
                if (!(var6 !== var8)) {
                    _fun47209_ip = 280;
                    continue _fun47209
                }
            case 229:
                var9 = var3.Map;
                var12 = _closure1_slot35;
                var7 = var9.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var9
                    }
                });
                var13 = var7;
                var6 = new var13[var9](var12, var11);
                var7 = var6 instanceof Object ? var6 : var7;
                var6 = var7.set;
                var4 = var4.quest_id;
                var4 = var6.bind(var7)(var4, var8);
                _closure1_slot35 = var4;
            case 280:
                var7 = var3.Object;
                var6 = var7.keys;
                var4 = var1.progress;
                var4 = var6.bind(var7)(var4);
                var6 = var4.length;
                var4 = 0;
                var4 = var4 === var6;
                if (!var4) {
                    _fun47209_ip = 336;
                    continue _fun47209
                }
            case 316:
                var8 = _closure1_slot40;
                var7 = var8.has;
                var6 = var1.questId;
                var4 = var7.bind(var8)(var6);
            case 336:
                if (!var4) {
                    _fun47209_ip = 397;
                    continue _fun47209
                }
            case 339:
                var4 = var5.log;
                var7 = var1.questId;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var3 = 'Removing optimistic progress for ';
                var3 = var6.bind(var3)(var7);
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot40;
                var2 = var3.delete;
                var1 = var1.questId;
                var1 = var2.bind(var3)(var1);
            case 397:
                return var0;
        }
    };
    var1.QUESTS_USER_STATUS_UPDATE = var6;
    var6 = function arg0() {
        var0 = arg0;
        var2 = var0.streamKey;
        var1 = _closure1_slot54;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.STREAM_CLOSE = var6;
    var6 = function arg0() {
        var0 = arg0;
        var2 = var0.streamKey;
        var1 = _closure1_slot54;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE = var6;
    var6 = function arg0() {
        _fun47212: for (var _fun47212_ip = 0;;) switch (_fun47212_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.previewQuestUserStatus;
                var5 = _closure1_slot51;
                var4 = var1.questId;
                var3 = {};
                var3.userStatus = var1;
                var0 = undefined;
                var3 = var5.bind(var0)(var4, var3);
                var4 = var1.claimedAt;
                var3 = null;
                if (!(var3 == var4)) {
                    _fun47212_ip = 101;
                    continue _fun47212
                }
            case 49:
                var4 = global;
                var6 = var4.Map;
                var8 = _closure1_slot28;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var6 = var4 instanceof Object ? var4 : var5;
                _closure1_slot28 = var6;
                var5 = var6.delete;
                var4 = var1.questId;
                var4 = var5.bind(var6)(var4);
            case 101:
                var4 = var1.enrolledAt;
                if (!(var3 == var4)) {
                    _fun47212_ip = 194;
                    continue _fun47212
                }
            case 111:
                var4 = global;
                var6 = var4.Map;
                var8 = _closure1_slot32;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var6 = var4 instanceof Object ? var4 : var5;
                _closure1_slot32 = var6;
                var5 = var6.delete;
                var4 = var1.questId;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot8;
                var4 = var5.getState;
                var6 = var4.bind(var5)();
                var5 = var6.resetQuest;
                var4 = var1.questId;
                var4 = var5.bind(var6)(var4);
            case 194:
                var6 = _closure1_slot17;
                var5 = var6.get;
                var4 = var1.questId;
                var5 = var5.bind(var6)(var4);
                if (!(var3 != var5)) {
                    _fun47212_ip = 326;
                    continue _fun47212
                }
            case 218:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 11;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isQuestExpired;
                var5 = var3.bind(var4)(var5);
                var6 = _closure1_slot35;
                var4 = var6.get;
                var3 = var1.questId;
                var3 = var4.bind(var6)(var3);
                if (!(var3 !== var5)) {
                    _fun47212_ip = 326;
                    continue _fun47212
                }
            case 273:
                var3 = global;
                var6 = var3.Map;
                var8 = _closure1_slot35;
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var4;
                var3 = new var9[var6](var8, var7);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = var4.set;
                var1 = var1.questId;
                var1 = var3.bind(var4)(var1, var5);
                _closure1_slot35 = var1;
            case 326:
                return var0;
        }
    };
    var1.QUESTS_PREVIEW_UPDATE_SUCCESS = var6;
    var6 = function arg0() {
        _fun47213: for (var _fun47213_ip = 0;;) switch (_fun47213_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.questId;
                var3 = _closure1_slot31;
                var0 = null;
                if (!(var3 !== var2)) {
                    _fun47213_ip = 25;
                    continue _fun47213
                }
            case 22:
                var0 = var2;
            case 25:
                _closure1_slot31 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.QUESTS_DELIVERY_OVERRIDE = var6;
    var6 = function arg0() {
        _fun47214: for (var _fun47214_ip = 0;;) switch (_fun47214_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.questId;
                var4 = var0.platform;
                var0 = global;
                var5 = var0.Map;
                var7 = _closure1_slot32;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var3;
                var1 = new var8[var5](var7, var6);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure1_slot32 = var1;
                var1 = null;
                if (!(var1 != var4)) {
                    _fun47214_ip = 77;
                    continue _fun47214
                }
            case 60:
                var3 = _closure1_slot32;
                var1 = var3.set;
                var1 = var1.bind(var3)(var2, var4);
                _fun47214_ip = 91;
                continue _fun47214;
            case 77:
                var1 = _closure1_slot32;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 91:
                var0 = undefined;
                return var0;
        }
    };
    var1.QUESTS_SELECT_TASK_PLATFORM = var6;
    var6 = function arg0() {
        _fun47215: for (var _fun47215_ip = 0;;) switch (_fun47215_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.questId;
                var5 = var0.taskEventName;
                var4 = var0.progress;
                var2 = _closure1_slot40;
                var1 = var2.get;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 == var2)) {
                    _fun47215_ip = 72;
                    continue _fun47215
                }
            case 44:
                var1 = global;
                var1 = var1.Map;
                var6 = var1.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var6;
                var1 = new var9[var1](var8);
                var2 = var1 instanceof Object ? var1 : var6;
            case 72:
                var1 = var2.set;
                var1 = var1.bind(var2)(var5, var4);
                var1 = _closure1_slot40;
                var0 = var1.set;
                var0 = var0.bind(var1)(var3, var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.QUESTS_UPDATE_OPTIMISTIC_PROGRESS = var6;
    var6 = function arg0() {
        _fun47216: for (var _fun47216_ip = 0;;) switch (_fun47216_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.questId;
                var3 = _closure1_slot40;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if (!var1) {
                    _fun47216_ip = 43;
                    continue _fun47216
                }
            case 29:
                var3 = _closure1_slot40;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var2);
            case 43:
                var1 = _closure1_slot8;
                var0 = var1.getState;
                var1 = var0.bind(var1)();
                var0 = var1.resetQuest;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.QUESTS_RESET_OPTIMISTIC_PROGRESS = var6;
    var6 = function arg0() {
        _fun47217: for (var _fun47217_ip = 0;;) switch (_fun47217_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.quest_enrollment_blocked_until;
                var1 = null;
                var0 = var1 != var3;
                if (!var0) {
                    _fun47217_ip = 49;
                    continue _fun47217
                }
            case 18:
                var0 = global;
                var0 = var0.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var2;
                var4 = var3;
                var0 = new var5[var0](var4, var3);
                var1 = var0 instanceof Object ? var0 : var2;
            case 49:
                _closure1_slot36 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var1.QUESTS_USER_COMPLETION_UPDATE = var6;
    var6 = function() {
        var0 = true;
        _closure1_slot43 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN = var6;
    var6 = function arg0() {
        var0 = false;
        _closure1_slot43 = var0;
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        _closure1_slot42 = var0;
        var0 = arg0;
        var0 = var0.takeover;
        _closure1_slot44 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS = var6;
    var6 = function() {
        var0 = false;
        _closure1_slot43 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var14 = var6;
    var12 = var1;
    var1 = new var14[var8](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot46 = var1;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/QuestStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5279, 5280, 667, 22, 5286, 5289, 5290, 5282, 5292, 5293, 5291, 566, 806, 2]);