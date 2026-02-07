// modules/threads/ThreadMemberListStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        _fun55522: for (var _fun55522_ip = 0;;) switch (_fun55522_ip) {
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
                _fun55522_ip = 74;
                continue _fun55522;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun55525: for (var _fun55525_ip = 0;;) switch (_fun55525_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55525_ip = 46;
                    continue _fun55525
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun55525_ip = 55;
                    continue _fun55525
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun55525_ip = 343;
                    continue _fun55525
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55525_ip = 323;
                    continue _fun55525
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55525_ip = 283;
                    continue _fun55525
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55525_ip = 270;
                    continue _fun55525
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
                    _fun55525_ip = 163;
                    continue _fun55525
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun55525_ip = 179;
                    continue _fun55525
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55525_ip = 249;
                    continue _fun55525
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55525_ip = 249;
                    continue _fun55525
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55525_ip = 234;
                    continue _fun55525
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55525_ip = 247;
                    continue _fun55525
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun55525_ip = 265;
                continue _fun55525;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun55525_ip = 283;
                continue _fun55525;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun55525_ip = 323;
                    continue _fun55525
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
                    _fun55525_ip = 330;
                    continue _fun55525
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55526: for (var _fun55526_ip = 0;;) switch (_fun55526_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55526_ip = 56;
                                continue _fun55526
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
                            _fun55526_ip = 67;
                            continue _fun55526;
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
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun55527: for (var _fun55527_ip = 0;;) switch (_fun55527_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55527_ip = 23;
                    continue _fun55527
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55527_ip = 33;
                    continue _fun55527
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
                    _fun55527_ip = 70;
                    continue _fun55527
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55527_ip = 55;
                    continue _fun55527
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var9 = function arg0() {
        var2 = _closure1_slot23;
        var0 = arg0;
        var0 = var0.user;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var0 = function arg0() {
        _fun55529: for (var _fun55529_ip = 0;;) switch (_fun55529_ip) {
            case 0:
                var9 = arg0;
                var0 = null;
                if (!(var0 != var9)) {
                    _fun55529_ip = 71;
                    continue _fun55529
                }
            case 9:
                var7 = _closure1_slot18;
                var1 = false;
                var0 = false;
                for (var3 in var7)
                    case 28: {
                        var0 = var1;
                        case 40: var11 = var3;
                        var10 = _closure1_slot18;
                        var11 = var10[var11];
                        var10 = var11.updateUserId;
                        var10 = var10.bind(var11)(var9);
                        if (!var10) {
                            _fun55529_ip = 28;
                            continue _fun55529
                        }
                        case 65: var1 = true;
                        _fun55529_ip = 28;
                        continue _fun55529;
                    }
            case 69:
                return var0;
            case 71:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var8 = function arg0() {
        _fun55530: for (var _fun55530_ip = 0;;) switch (_fun55530_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guildId;
                var7 = _closure1_slot18;
                var1 = false;
                var0 = false;
                for (var3 in var7)
                    case 27: {
                        var0 = var1;
                        case 39: var11 = var3;
                        var10 = _closure1_slot18;
                        var10 = var10[var11];
                        var10 = var10.guildId;
                        if (var10 !== var9) {
                            _fun55530_ip = 27;
                            continue _fun55530
                        }
                        case 59: var10 = _closure1_slot18;
                        var11 = var10[var11];
                        var10 = var11.rebuild;
                        var10 = var10.bind(var11)();
                        var1 = true;
                        _fun55530_ip = 27;
                        continue _fun55530;
                    }
            case 81:
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.StatusTypes;
    var _closure1_slot16 = var7;
    var1 = var1.Permissions;
    var _closure1_slot17 = var1;
    var1 = {};
    var _closure1_slot18 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot9;
        var2 = function arg0, arg1, arg2() {
            var2 = this;
            var3 = _closure1_slot8;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.guildId = var1;
            var1 = arg1;
            var2.parentId = var1;
            var1 = arg2;
            var2.threadId = var1;
            var1 = 0;
            var2.version = var1;
            var1 = {};
            var2.sections = var1;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.allUserIds = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'rebuild';
        var0.key = var1;
        var1 = function arg0() {
            _fun55533: for (var _fun55533_ip = 0;;) switch (_fun55533_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = var2.version;
                    var0 = var0 + 1;
                    var2.version = var0;
                    var0 = {};
                    var2.sections = var0;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun55533_ip = 78;
                        continue _fun55533
                    }
                case 41:
                    var0 = global;
                    var0 = var0.Set;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var7 = var3;
                    var6 = var4;
                    var0 = new var7[var0](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var2.allUserIds = var0;
                case 78:
                    var5 = _closure1_slot10;
                    var4 = var5.getChannel;
                    var3 = var2.parentId;
                    var3 = var4.bind(var5)(var3);
                    var _closure3_slot1 = var3;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 13;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var4 = global;
                    var5 = var4.Array;
                    var4 = var5.from;
                    var2 = var2.allUserIds;
                    var2 = var4.bind(var5)(var2);
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var3 = _closure3_slot0;
                        var2 = var3.calculateNewState;
                        var0 = _closure3_slot1;
                        var4 = var2.bind(var3)(var1, var0);
                        var3 = _closure1_slot7;
                        var2 = undefined;
                        var0 = 3;
                        var2 = var3.bind(var2)(var4, var0);
                        var0 = {};
                        var0.userId = var1;
                        var1 = 0;
                        var1 = var2[var1];
                        var0.sectionId = var1;
                        var1 = 1;
                        var1 = var2[var1];
                        var0.displayName = var1;
                        var1 = 2;
                        var1 = var2[var1];
                        var0.canViewChannel = var1;
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.sort;
                    var2 = function(arg0, arg1) { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 14;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.compare;
                        var0 = arg0;
                        var1 = var0.userId;
                        var0 = arg1;
                        var0 = var0.userId;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.sortBy;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.displayName;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var6 = _closure3_slot0;
                        var5 = var6.addUser;
                        var11 = var0.userId;
                        var10 = var0.sectionId;
                        var9 = var0.displayName;
                        var8 = var0.canViewChannel;
                        var7 = true;
                        var12 = var6;
                        var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(10);
        var1[0] = var0;
        var0 = {};
        var5 = 'updateMultipleUserIds';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun55538: for (var _fun55538_ip = 0;;) switch (_fun55538_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = null;
                    var0 = var0 == var4;
                    if (var0) {
                        _fun55538_ip = 33;
                        continue _fun55538
                    }
                case 24:
                    var1 = var3.guildId;
                    var0 = var1 === var4;
                case 33:
                    if (!var0) {
                        _fun55538_ip = 111;
                        continue _fun55538
                    }
                case 36:
                    var4 = var5.filter;
                    var1 = function(arg0) { // Environment: var2
                        var0 = _closure3_slot0;
                        var2 = var0.allUserIds;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.length;
                    var1 = 0;
                    var1 = var1 !== var4;
                    if (!var1) {
                        _fun55538_ip = 108;
                        continue _fun55538
                    }
                case 65:
                    var6 = var5.length;
                    var4 = 50;
                    if (!(!(var6 > var4))) {
                        _fun55538_ip = 96;
                        continue _fun55538
                    }
                case 77:
                    var4 = var5.forEach;
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var1 = var2.updateUserId;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var4.bind(var5)(var2);
                    var1 = true;
                    _fun55538_ip = 108;
                    continue _fun55538;
                case 96:
                    var2 = var3.rebuild;
                    var2 = var2.bind(var3)();
                    var1 = true;
                case 108:
                    var0 = var1;
                case 111:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'updateUserId';
        var0.key = var5;
        var5 = function arg0() {
            _fun55541: for (var _fun55541_ip = 0;;) switch (_fun55541_ip) {
                case 0:
                    var6 = arg0;
                    var5 = this;
                    var1 = var5.allUserIds;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var6);
                    if (var0) {
                        _fun55541_ip = 29;
                        continue _fun55541
                    }
                case 25:
                    var0 = false;
                    return var0;
                case 29:
                    var0 = var5.findOldState;
                    var1 = var0.bind(var5)(var6);
                    var11 = _closure1_slot7;
                    var10 = undefined;
                    var9 = 3;
                    var1 = var11.bind(var10)(var1, var9);
                    var4 = 0;
                    var7 = var1[var4];
                    var3 = 1;
                    var8 = var1[var3];
                    var2 = 2;
                    var1 = var1[var2];
                    var12 = var5.calculateNewState;
                    var14 = _closure1_slot10;
                    var13 = var14.getChannel;
                    var0 = var5.parentId;
                    var0 = var13.bind(var14)(var0);
                    var0 = var12.bind(var5)(var6, var0);
                    var0 = var11.bind(var10)(var0, var9);
                    var4 = var0[var4];
                    var3 = var0[var3];
                    var2 = var0[var2];
                    var0 = var7 !== var4;
                    if (var0) {
                        _fun55541_ip = 141;
                        continue _fun55541
                    }
                case 137:
                    var0 = var8 !== var3;
                case 141:
                    if (var0) {
                        _fun55541_ip = 148;
                        continue _fun55541
                    }
                case 144:
                    var0 = var1 !== var2;
                case 148:
                    if (!var0) {
                        _fun55541_ip = 190;
                        continue _fun55541
                    }
                case 151:
                    var1 = var5.removeUserId;
                    var1 = var1.bind(var5)(var6, var7);
                    var1 = var5.addUser;
                    var19 = var5;
                    var18 = var6;
                    var17 = var4;
                    var16 = var3;
                    var15 = var2;
                    var1 = var19[var1](var18, var17, var16, var15, var14);
                    var0 = true;
                case 190:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'addUserId';
        var0.key = var5;
        var5 = function arg0() {
            var6 = arg0;
            var5 = this;
            var2 = var5.calculateNewState;
            var4 = _closure1_slot10;
            var3 = var4.getChannel;
            var1 = var5.parentId;
            var1 = var3.bind(var4)(var1);
            var3 = var2.bind(var5)(var6, var1);
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = 3;
            var2 = var2.bind(var0)(var3, var1);
            var1 = 0;
            var9 = var2[var1];
            var1 = 1;
            var8 = var2[var1];
            var1 = 2;
            var7 = var2[var1];
            var1 = var5.addUser;
            var11 = var5;
            var10 = var6;
            var1 = var11[var1](var10, var9, var8, var7, var6);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'removeUserId';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun55543: for (var _fun55543_ip = 0;;) switch (_fun55543_ip) {
                case 0:
                    var7 = arg0;
                    var1 = arg1;
                    var6 = this;
                    var2 = var6.allUserIds;
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var7);
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun55543_ip = 46;
                        continue _fun55543
                    }
                case 31:
                    var0 = var6.removeUserIdFromSection;
                    var0 = var0.bind(var6)(var7, var1);
                    if (var0) {
                        _fun55543_ip = 95;
                        continue _fun55543
                    }
                case 46:
                    var4 = var6.sections;
                    for (var1 in var4)
                        case 60: {
                            case 69: var8 = var1;
                            var0 = var6.removeUserIdFromSection;
                            var0 = var0.bind(var6)(var7, var8);
                            if (!var0) {
                                _fun55543_ip = 60;
                                continue _fun55543
                            }
                            case 87: var0 = true;
                            return var0;
                        }
                case 91:
                    var0 = false;
                    return var0;
                case 95:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'addUser';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3, arg4() {
            _fun55544: for (var _fun55544_ip = 0;;) switch (_fun55544_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var4 = arg2;
                    var1 = this;
                    var5 = var1.allUserIds;
                    var0 = var5.add;
                    var0 = var0.bind(var5)(var3);
                    var5 = _closure1_slot15;
                    var0 = var5.getUser;
                    var0 = var0.bind(var5)(var3);
                    var5 = null;
                    if (!(var5 != var0)) {
                        _fun55544_ip = 230;
                        continue _fun55544
                    }
                case 55:
                    var5 = var0.username;
                    var0 = '';
                    if (!(var0 !== var5)) {
                        _fun55544_ip = 230;
                        continue _fun55544
                    }
                case 71:
                    var0 = var1.sections;
                    var0 = var2 in var0;
                    if (var0) {
                        _fun55544_ip = 117;
                        continue _fun55544
                    }
                case 84:
                    var5 = var1.sections;
                    var0 = {};
                    var0.sectionId = var2;
                    var6 = {};
                    var0.usersById = var6;
                    var6 = new Array(0);
                    var0.userIds = var6;
                    var5[var2] = var0;
                case 117:
                    var0 = var1.sections;
                    var0 = var0[var2];
                    var5 = var0.usersById;
                    var2 = {};
                    var2.userId = var3;
                    var2.displayName = var4;
                    var6 = arg3;
                    var2.canViewChannel = var6;
                    var5[var3] = var2;
                    var2 = arg4;
                    if (var2) {
                        _fun55544_ip = 199;
                        continue _fun55544
                    }
                case 161:
                    var2 = var1.findUserIdSortedPosition;
                    var6 = var2.bind(var1)(var0, var3, var4);
                    var5 = var0.userIds;
                    var4 = var5.splice;
                    var2 = 0;
                    var2 = var4.bind(var5)(var6, var2, var3);
                    _fun55544_ip = 215;
                    continue _fun55544;
                case 199:
                    var2 = var0.userIds;
                    var0 = var2.push;
                    var0 = var0.bind(var2)(var3);
                case 215:
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                case 230:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'findUserIdSortedPosition';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun55545: for (var _fun55545_ip = 0;;) switch (_fun55545_ip) {
                case 0:
                    var0 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var1 = var0.userIds;
                    var5 = var0.usersById;
                    var0 = var1.length;
                    var4 = 0;
                    var0 = var4 < var0;
                    var3 = null;
                    if (!var0) {
                        _fun55545_ip = 93;
                        continue _fun55545
                    }
                case 37:
                    var2 = var1[var4];
                    var0 = var5[var2];
                    var8 = var0.displayName;
                    var0 = var4;
                    if (!(var8 !== var6)) {
                        _fun55545_ip = 77;
                        continue _fun55545
                    }
                case 57:
                    if (!(var3 != var8)) {
                        _fun55545_ip = 71;
                        continue _fun55545
                    }
                case 61:
                    if (!(var3 != var6)) {
                        _fun55545_ip = 81;
                        continue _fun55545
                    }
                case 65:
                    if (!(var6 < var8)) {
                        _fun55545_ip = 81;
                        continue _fun55545
                    }
                case 69:
                    return var0;
                case 71:
                    if (!(var3 != var6)) {
                        _fun55545_ip = 81;
                        continue _fun55545
                    }
                case 75:
                    return var0;
                case 77:
                    if (!(!(var7 < var2))) {
                        _fun55545_ip = 100;
                        continue _fun55545
                    }
                case 81:
                    var4 = var0 + 1;
                    var2 = var1.length;
                    if (var4 < var2) {
                        _fun55545_ip = 37;
                        continue _fun55545
                    }
                case 93:
                    var1 = var1.length;
                    return var1;
                case 100:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'removeUserIdFromSection';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun55546: for (var _fun55546_ip = 0;;) switch (_fun55546_ip) {
                case 0:
                    var6 = arg0;
                    var1 = arg1;
                    var3 = this;
                    var _closure3_slot0 = var6;
                    var0 = var3.sections;
                    var4 = var0[var1];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun55546_ip = 104;
                        continue _fun55546
                    }
                case 34:
                    var1 = var4.usersById;
                    var1 = var6 in var1;
                    if (!var1) {
                        _fun55546_ip = 101;
                        continue _fun55546
                    }
                case 47:
                    var5 = var4.usersById;
                    var5 = delete var5[var6];
                    var6 = var4.userIds;
                    var5 = var6.filter;
                    var2 = function(arg0) { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var2 = var5.bind(var6)(var2);
                    var4.userIds = var2;
                    var2 = var3.version;
                    var2 = var2 + 1;
                    var3.version = var2;
                    var1 = true;
                case 101:
                    var0 = var1;
                case 104:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'findOldState';
        var0.key = var5;
        var5 = function arg0() {
            _fun55548: for (var _fun55548_ip = 0;;) switch (_fun55548_ip) {
                case 0:
                    var1 = arg0;
                    var9 = this;
                    var7 = var9.sections;
                    for (var4 in var7)
                        case 20: {
                            case 29: var2 = var4;
                            var0 = var9.sections;
                            var0 = var0[var2];
                            var3 = var0.usersById;
                            var3 = var1 in var3;
                            if (!var3) {
                                _fun55548_ip = 20;
                                continue _fun55548
                            }
                            case 55: var0 = var0.usersById;
                            var1 = var0[var1];
                            var0 = new Array(3);
                            var0[0] = var2;
                            var2 = var1.displayName;
                            var0[1] = var2;
                            var1 = var1.canViewChannel;
                            var0[2] = var1;
                            return var0;
                        }
                case 94:
                    var0 = new Array(3);
                    var1 = undefined;
                    var0[0] = var1;
                    var0[1] = var1;
                    var1 = false;
                    var0[2] = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'calculateNewState';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun55549: for (var _fun55549_ip = 0;;) switch (_fun55549_ip) {
                case 0:
                    var8 = arg0;
                    var10 = arg1;
                    var1 = this;
                    var4 = _closure1_slot11;
                    var3 = var4.getMember;
                    var2 = var1.guildId;
                    var6 = var3.bind(var4)(var2, var8);
                    var3 = _closure1_slot15;
                    var2 = var3.getUser;
                    var7 = var2.bind(var3)(var8);
                    var2 = var3.getCurrentUser;
                    var9 = var2.bind(var3)();
                    var3 = null;
                    var4 = var3 == var7;
                    var2 = undefined;
                    var5 = undefined;
                    if (var4) {
                        _fun55549_ip = 75;
                        continue _fun55549
                    }
                case 70:
                    var5 = var7.id;
                case 75:
                    var11 = var3 == var9;
                    var4 = undefined;
                    if (var11) {
                        _fun55549_ip = 89;
                        continue _fun55549
                    }
                case 84:
                    var4 = var9.id;
                case 89:
                    if (!(var5 !== var4)) {
                        _fun55549_ip = 116;
                        continue _fun55549
                    }
                case 93:
                    var5 = _closure1_slot13;
                    var4 = var5.getStatus;
                    var1 = var1.guildId;
                    var8 = var4.bind(var5)(var8, var1);
                    _fun55549_ip = 130;
                    continue _fun55549;
                case 116:
                    var4 = _closure1_slot14;
                    var1 = var4.getStatus;
                    var8 = var1.bind(var4)();
                case 130:
                    var1 = var3 != var7;
                    if (!var1) {
                        _fun55549_ip = 141;
                        continue _fun55549
                    }
                case 137:
                    var1 = var3 != var10;
                case 141:
                    if (!var1) {
                        _fun55549_ip = 200;
                        continue _fun55549
                    }
                case 144:
                    var5 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var4 = 15;
                    var4 = var9[var4];
                    var9 = var5.bind(var2)(var4);
                    var5 = var9.can;
                    var4 = {};
                    var11 = _closure1_slot17;
                    var11 = var11.VIEW_CHANNEL;
                    var4.permission = var11;
                    var4.user = var7;
                    var4.context = var10;
                    var1 = var5.bind(var9)(var4);
                case 200:
                    var4 = _closure1_slot16;
                    var4 = var4.OFFLINE;
                    var9 = 'offline';
                    var5 = var9;
                    if (!(var8 !== var4)) {
                        _fun55549_ip = 287;
                        continue _fun55549
                    }
                case 221:
                    var4 = _closure1_slot16;
                    var4 = var4.INVISIBLE;
                    var5 = var9;
                    if (!(var8 !== var4)) {
                        _fun55549_ip = 287;
                        continue _fun55549
                    }
                case 238:
                    var4 = _closure1_slot16;
                    var4 = var4.UNKNOWN;
                    var5 = var9;
                    if (!(var8 !== var4)) {
                        _fun55549_ip = 287;
                        continue _fun55549
                    }
                case 255:
                    var4 = var3 == var6;
                    var8 = undefined;
                    if (var4) {
                        _fun55549_ip = 270;
                        continue _fun55549
                    }
                case 264:
                    var8 = var6.hoistRoleId;
                case 270:
                    var9 = var3 != var8;
                    var4 = 'online';
                    if (!var9) {
                        _fun55549_ip = 284;
                        continue _fun55549
                    }
                case 281:
                    var4 = var8;
                case 284:
                    var5 = var4;
                case 287:
                    var8 = var3 == var6;
                    var4 = undefined;
                    if (var8) {
                        _fun55549_ip = 302;
                        continue _fun55549
                    }
                case 296:
                    var4 = var6.nick;
                case 302:
                    if (!(var3 == var4)) {
                        _fun55549_ip = 337;
                        continue _fun55549
                    }
                case 306:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var0 = 16;
                    var0 = var8[var0];
                    var6 = var6.bind(var2)(var0);
                    var0 = var6.getName;
                    var4 = var0.bind(var6)(var7);
                case 337:
                    var0 = new Array(3);
                    var0[0] = var5;
                    var3 = var3 == var4;
                    var2 = undefined;
                    if (var3) {
                        _fun55549_ip = 364;
                        continue _fun55549
                    }
                case 354:
                    var3 = var4.toLowerCase;
                    var2 = var3.bind(var4)();
                case 364:
                    var0[1] = var2;
                    var0[2] = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[9] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot19 = var1;
    var1 = 18;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun55551: for (var _fun55551_ip = 0;;) switch (_fun55551_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55551_ip = 69;
                        continue _fun55551
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun55551_ip = 105;
                    continue _fun55551;
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
        var1 = _closure1_slot9;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var8 = var3.waitFor;
            var14 = _closure1_slot10;
            var13 = _closure1_slot11;
            var1 = _closure1_slot12;
            var11 = _closure1_slot13;
            var4 = _closure1_slot14;
            var9 = _closure1_slot15;
            var15 = var3;
            var12 = var1;
            var10 = var4;
            var2 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
            var5 = var3.syncWith;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() { // Environment: var0
                _fun55553: for (var _fun55553_ip = 0;;) switch (_fun55553_ip) {
                    case 0:
                        var1 = _closure1_slot12;
                        var0 = var1.getSubscribedThreadIds;
                        var8 = var0.bind(var1)();
                        var6 = _closure1_slot18;
                        var1 = false;
                        var0 = false;
                        for (var3 in var6)
                            case 33: {
                                var0 = var1;
                                case 45: var11 = var3;
                                var10 = var8.has;
                                var10 = var10.bind(var8)(var11);
                                if (var10) {
                                    _fun55553_ip = 33;
                                    continue _fun55553
                                }
                                case 61: var10 = _closure1_slot18;
                                var10 = delete var10[var11];
                                var1 = true;
                                _fun55553_ip = 33;
                                continue _fun55553;
                            }
                    case 73:
                        return var0;
                }
            };
            var1 = var5.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = function() { // Environment: var0
                _fun55554: for (var _fun55554_ip = 0;;) switch (_fun55554_ip) {
                    case 0:
                        var2 = _closure1_slot23;
                        var1 = _closure1_slot15;
                        var0 = var1.getCurrentUser;
                        var3 = var0.bind(var1)();
                        var0 = null;
                        var4 = var0 == var3;
                        var1 = undefined;
                        var0 = undefined;
                        if (var4) {
                            _fun55554_ip = 38;
                            continue _fun55554
                        }
                    case 33:
                        var0 = var3.id;
                    case 38:
                        var0 = var2.bind(var1)(var0);
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMemberListVersion';
        var4.key = var6;
        var6 = function arg0() {
            _fun55555: for (var _fun55555_ip = 0;;) switch (_fun55555_ip) {
                case 0:
                    var1 = _closure1_slot18;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun55555_ip = 31;
                        continue _fun55555
                    }
                case 25:
                    var0 = var1.version;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMemberListSections';
        var4.key = var6;
        var6 = function arg0() {
            _fun55556: for (var _fun55556_ip = 0;;) switch (_fun55556_ip) {
                case 0:
                    var1 = _closure1_slot18;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun55556_ip = 31;
                        continue _fun55556
                    }
                case 25:
                    var0 = var1.sections;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'canUserViewChannel';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun55557: for (var _fun55557_ip = 0;;) switch (_fun55557_ip) {
                case 0:
                    var1 = _closure1_slot18;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun55557_ip = 82;
                        continue _fun55557
                    }
                case 20:
                    var2 = var1.sections;
                    var1 = arg1;
                    var3 = var2[var1];
                    var4 = var0 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun55557_ip = 55;
                        continue _fun55557
                    }
                case 42:
                    var4 = var3.usersById;
                    var3 = arg2;
                    var2 = var4[var3];
                case 55:
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun55557_ip = 70;
                        continue _fun55557
                    }
                case 64:
                    var1 = var2.canViewChannel;
                case 70:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun55557_ip = 80;
                        continue _fun55557
                    }
                case 77:
                    var0 = var1;
                case 80:
                    return var0;
                case 82:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ThreadMemberListStore';
    var7.displayName = var1;
    var1 = 19;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function() {
        var0 = {};
        _closure1_slot18 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var10;
    var10 = function arg0() {
        _fun55559: for (var _fun55559_ip = 0;;) switch (_fun55559_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = var2.id;
                var1 = _closure1_slot18;
                var1 = var3 in var1;
                if (var1) {
                    _fun55559_ip = 32;
                    continue _fun55559
                }
            case 28:
                var1 = false;
                return var1;
            case 32:
                var5 = var2.addedMembers;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun55559_ip = 59;
                    continue _fun55559
                }
            case 44:
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.userId;
                    var1 = _closure1_slot18;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var1 = var1[var0];
                    var0 = var1.addUserId;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
            case 59:
                var2 = var2.removedMemberIds;
                if (!(var1 != var2)) {
                    _fun55559_ip = 84;
                    continue _fun55559
                }
            case 69:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure1_slot18;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var2 = var1[var0];
                    var1 = var2.removeUserId;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 84:
                var0 = undefined;
                return var0;
        }
    };
    var1.THREAD_MEMBERS_UPDATE = var10;
    var10 = function arg0() {
        _fun55562: for (var _fun55562_ip = 0;;) switch (_fun55562_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var3 = var1.id;
                var0 = _closure1_slot18;
                var0 = var3 in var0;
                if (!var0) {
                    _fun55562_ip = 73;
                    continue _fun55562
                }
            case 27:
                var3 = var1.threadMetadata;
                var0 = null;
                var5 = var0 == var3;
                var0 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun55562_ip = 52;
                    continue _fun55562
                }
            case 46:
                var4 = var3.archived;
            case 52:
                var3 = true;
                if (!(var3 === var4)) {
                    _fun55562_ip = 73;
                    continue _fun55562
                }
            case 58:
                var2 = _closure1_slot18;
                var1 = var1.id;
                var1 = delete var2[var1];
                return var0;
            case 73:
                var0 = false;
                return var0;
        }
    };
    var1.THREAD_UPDATE = var10;
    var10 = function arg0() {
        _fun55563: for (var _fun55563_ip = 0;;) switch (_fun55563_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var3 = var0.id;
                var2 = _closure1_slot18;
                var2 = var3 in var2;
                if (var2) {
                    _fun55563_ip = 31;
                    continue _fun55563
                }
            case 27:
                var2 = false;
                return var2;
            case 31:
                var1 = _closure1_slot18;
                var0 = var0.id;
                var0 = delete var1[var0];
                var0 = undefined;
                return var0;
        }
    };
    var1.THREAD_DELETE = var10;
    var10 = function arg0() {
        _fun55564: for (var _fun55564_ip = 0;;) switch (_fun55564_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channels;
                var0 = global;
                var2 = var0.Set;
                var1 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var13 = var1.bind(var3)(var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var9 = var0 instanceof Object ? var0 : var1;
                var7 = _closure1_slot18;
                var1 = false;
                var0 = false;
                for (var3 in var7)
                    case 73: {
                        var0 = var1;
                        case 85: var11 = var3;
                        var12 = var9.has;
                        var10 = _closure1_slot18;
                        var10 = var10[var11];
                        var10 = var10.parentId;
                        var10 = var12.bind(var9)(var10);
                        if (!var10) {
                            _fun55564_ip = 73;
                            continue _fun55564
                        }
                        case 115: var10 = _closure1_slot18;
                        var11 = var10[var11];
                        var10 = var11.rebuild;
                        var10 = var10.bind(var11)();
                        var1 = true;
                        _fun55564_ip = 73;
                        continue _fun55564;
                    }
            case 137:
                return var0;
        }
    };
    var1.CHANNEL_UPDATES = var10;
    var10 = function arg0() {
        _fun55566: for (var _fun55566_ip = 0;;) switch (_fun55566_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.threadId;
                var8 = var0.guildId;
                var5 = var0.members;
                var3 = _closure1_slot10;
                var0 = var3.getChannel;
                var4 = var0.bind(var3)(var2);
                var3 = null;
                var6 = var3 == var4;
                var0 = undefined;
                var7 = undefined;
                if (var6) {
                    _fun55566_ip = 56;
                    continue _fun55566
                }
            case 50:
                var7 = var4.parent_id;
            case 56:
                if (!(var3 != var7)) {
                    _fun55566_ip = 137;
                    continue _fun55566
                }
            case 60:
                var4 = _closure1_slot18;
                var3 = _closure1_slot19;
                var6 = var3.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var6;
                var11 = var8;
                var10 = var7;
                var9 = var2;
                var3 = new var12[var3](var11, var10, var9, var8);
                var3 = var3 instanceof Object ? var3 : var6;
                var4[var2] = var3;
                var1 = _closure1_slot18;
                var3 = var1[var2];
                var2 = var3.rebuild;
                var4 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.user_id;
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
            case 137:
                return var0;
        }
    };
    var1.THREAD_MEMBER_LIST_UPDATE = var10;
    var1.USER_UPDATE = var9;
    var10 = function arg0() {
        var1 = arg0;
        var3 = var1.updates;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.user;
            var2 = _closure1_slot23;
            var1 = var0.id;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
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
    var1.PRESENCE_UPDATES = var10;
    var1.GUILD_MEMBER_ADD = var9;
    var1.GUILD_MEMBER_UPDATE = var9;
    var1.GUILD_MEMBER_REMOVE = var9;
    var9 = function arg0() {
        _fun55571: for (var _fun55571_ip = 0;;) switch (_fun55571_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.presences;
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 13;
                var0 = var5[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.bind(var4)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun55572: for (var _fun55572_ip = 0;;) switch (_fun55572_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.user;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun55572_ip = 24;
                                continue _fun55572
                            }
                        case 19:
                            var0 = var1.id;
                        case 24:
                            return var0;
                    }
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.filter;
                var3 = _closure1_slot0;
                var0 = 17;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.isNotNullish;
                var1 = var1.bind(var2)(var0);
                var0 = var1.uniq;
                var1 = var0.bind(var1)();
                var0 = var1.value;
                var8 = var0.bind(var1)();
                var6 = _closure1_slot18;
                var1 = false;
                var0 = false;
                for (var3 in var6)
                    case 123: {
                        var0 = var1;
                        case 135: var11 = var3;
                        var10 = _closure1_slot18;
                        var11 = var10[var11];
                        var10 = var11.updateMultipleUserIds;
                        var10 = var10.bind(var11)(var8);
                        if (!var10) {
                            _fun55571_ip = 123;
                            continue _fun55571
                        }
                        case 160: var1 = true;
                        _fun55571_ip = 123;
                        continue _fun55571;
                    }
            case 164:
                return var0;
        }
    };
    var1.PRESENCES_REPLACE = var9;
    var9 = function arg0() {
        _fun55573: for (var _fun55573_ip = 0;;) switch (_fun55573_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.chunks;
                var0 = _closure1_slot21;
                var6 = undefined;
                var5 = var0.bind(var6)(var1);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun55573_ip = 156;
                    continue _fun55573
                }
            case 44:
                var1 = var3.value;
                var16 = var1.guildId;
                var10 = var1.members;
                var9 = var10.map;
                var1 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var0 = var0.user;
                    var0 = var0.id;
                    return var0;
                };
                var15 = var9.bind(var10)(var1);
                var13 = _closure1_slot18;
                var1 = var2;
                var9 = var1;
                for (var10 in var13)
                    case 93: {
                        var9 = var1;
                        case 105: var18 = var10;
                        var17 = _closure1_slot18;
                        var18 = var17[var18];
                        var17 = var18.updateMultipleUserIds;
                        var17 = var17.bind(var18)(var15, var16);
                        if (!var17) {
                            _fun55573_ip = 93;
                            continue _fun55573
                        }
                        case 131: var1 = true;
                        _fun55573_ip = 93;
                        continue _fun55573;
                    }
            case 135:
                var10 = var5.bind(var6)();
                var1 = var10.done;
                var2 = var9;
                var3 = var10;
                var0 = var2;
                if (!var1) {
                    _fun55573_ip = 44;
                    continue _fun55573
                }
            case 156:
                return var0;
        }
    };
    var1.GUILD_MEMBERS_CHUNK_BATCH = var9;
    var1.GUILD_ROLE_UPDATE = var8;
    var1.GUILD_ROLE_DELETE = var8;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.members;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun55576: for (var _fun55576_ip = 0;;) switch (_fun55576_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure1_slot23;
                    var0 = arg1;
                    var0 = var0.user;
                    var2 = var0.id;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    if (var0) {
                        _fun55576_ip = 36;
                        continue _fun55576
                    }
                case 33:
                    var0 = var1;
                case 36:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.PASSIVE_UPDATE_V2 = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ThreadMemberListStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 57, 6, 7, 1372, 1683, 5698, 3611, 5708, 1621, 660, 22, 21, 3098, 3237, 1304, 566, 806, 2]);