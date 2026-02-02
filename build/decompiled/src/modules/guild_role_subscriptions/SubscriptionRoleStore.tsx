// modules/guild_role_subscriptions/SubscriptionRoleStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun43744: for (var _fun43744_ip = 0;;) switch (_fun43744_ip) {
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
                _fun43744_ip = 74;
                continue _fun43744;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun43747: for (var _fun43747_ip = 0;;) switch (_fun43747_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun43747_ip = 46;
                    continue _fun43747
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun43747_ip = 55;
                    continue _fun43747
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun43747_ip = 343;
                    continue _fun43747
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun43747_ip = 323;
                    continue _fun43747
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun43747_ip = 283;
                    continue _fun43747
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun43747_ip = 270;
                    continue _fun43747
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
                    _fun43747_ip = 163;
                    continue _fun43747
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun43747_ip = 179;
                    continue _fun43747
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun43747_ip = 249;
                    continue _fun43747
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun43747_ip = 249;
                    continue _fun43747
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun43747_ip = 234;
                    continue _fun43747
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun43747_ip = 247;
                    continue _fun43747
                }
            case 234:
                var8 = _closure1_slot23;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun43747_ip = 265;
                continue _fun43747;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun43747_ip = 283;
                continue _fun43747;
            case 270:
                var6 = _closure1_slot23;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun43747_ip = 323;
                    continue _fun43747
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
                    _fun43747_ip = 330;
                    continue _fun43747
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun43748: for (var _fun43748_ip = 0;;) switch (_fun43748_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun43748_ip = 56;
                                continue _fun43748
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
                            _fun43748_ip = 67;
                            continue _fun43748;
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
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1() {
        _fun43749: for (var _fun43749_ip = 0;;) switch (_fun43749_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun43749_ip = 23;
                    continue _fun43749
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun43749_ip = 33;
                    continue _fun43749
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
                    _fun43749_ip = 70;
                    continue _fun43749
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun43749_ip = 55;
                    continue _fun43749
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun43750: for (var _fun43750_ip = 0;;) switch (_fun43750_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var8 = var1.bind(var2)();
                var2 = _closure1_slot11;
                var1 = var2.getGuild;
                var1 = var1.bind(var2)(var3);
                var7 = null;
                if (!(var7 != var1)) {
                    _fun43750_ip = 563;
                    continue _fun43750
                }
            case 42:
                if (!(var7 != var8)) {
                    _fun43750_ip = 563;
                    continue _fun43750
                }
            case 49:
                var4 = global;
                var2 = var4.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var2
                    }
                });
                var17 = var5;
                var2 = new var17[var2](var16);
                var6 = var2 instanceof Object ? var2 : var5;
                var2 = var4.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var2
                    }
                });
                var17 = var5;
                var2 = new var17[var2](var16);
                var2 = var2 instanceof Object ? var2 : var5;
                var5 = var4.Set;
                var9 = var5.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var5
                    }
                });
                var17 = var9;
                var5 = new var17[var5](var16);
                var5 = var5 instanceof Object ? var5 : var9;
                var12 = _closure1_slot19;
                var10 = var12.set;
                var9 = _closure1_slot7;
                var11 = undefined;
                var9 = var9.bind(var11)(var1, var8);
                var9 = var10.bind(var12)(var3, var9);
                var12 = var1.features;
                var10 = var12.has;
                var9 = _closure1_slot14;
                var9 = var9.ROLE_SUBSCRIPTIONS_ENABLED;
                var9 = var10.bind(var12)(var9);
                if (!var9) {
                    _fun43750_ip = 514;
                    continue _fun43750
                }
            case 188:
                var10 = _closure1_slot9;
                var9 = var10.getMember;
                var8 = var8.id;
                var9 = var9.bind(var10)(var3, var8);
                var8 = var4.Set;
                var10 = var7 == var9;
                var4 = undefined;
                if (var10) {
                    _fun43750_ip = 230;
                    continue _fun43750
                }
            case 224:
                var4 = var9.roles;
            case 230:
                if (!(var7 == var4)) {
                    _fun43750_ip = 238;
                    continue _fun43750
                }
            case 234:
                var4 = new Array(0);
            case 238:
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var17 = var7;
                var16 = var4;
                var4 = new var17[var8](var16, var15);
                var10 = var4 instanceof Object ? var4 : var7;
                var4 = _closure1_slot22;
                var8 = _closure1_slot10;
                var7 = var8.getSortedRoles;
                var1 = var1.id;
                var1 = var7.bind(var8)(var1);
                var9 = var4.bind(var11)(var1);
                var4 = var9.bind(var11)();
                var1 = var4.done;
                var8 = true;
                var7 = 12;
                if (var1) {
                    _fun43750_ip = 514;
                    continue _fun43750
                }
            case 310:
                var14 = var4.value;
                var12 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var12 = var12.bind(var11)(var1);
                var1 = var12.isSubscriptionRole;
                var1 = var1.bind(var12)(var14);
                if (!var1) {
                    _fun43750_ip = 440;
                    continue _fun43750
                }
            case 346:
                var12 = var6.add;
                var1 = var14.id;
                var1 = var12.bind(var6)(var1);
                var12 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var12 = var12.bind(var11)(var1);
                var1 = var12.isSubscriptionRoleAvailableForPurchase;
                var1 = var1.bind(var12)(var14);
                if (!var1) {
                    _fun43750_ip = 440;
                    continue _fun43750
                }
            case 392:
                var12 = var2.add;
                var1 = var14.id;
                var1 = var12.bind(var2)(var1);
                var12 = var10.has;
                var1 = var14.id;
                var1 = var12.bind(var10)(var1);
                if (!var1) {
                    _fun43750_ip = 440;
                    continue _fun43750
                }
            case 425:
                var12 = var5.add;
                var1 = var14.id;
                var1 = var12.bind(var5)(var1);
            case 440:
                var12 = var10.has;
                var1 = var14.id;
                var1 = var12.bind(var10)(var1);
                if (!var1) {
                    _fun43750_ip = 478;
                    continue _fun43750
                }
            case 458:
                var13 = _closure1_slot8;
                var12 = _closure1_slot13;
                var12 = var12.ADMINISTRATOR;
                var1 = var13.bind(var11)(var14, var12);
            case 478:
                if (!var1) {
                    _fun43750_ip = 496;
                    continue _fun43750
                }
            case 481:
                var12 = _closure1_slot19;
                var1 = var12.set;
                var1 = var1.bind(var12)(var3, var8);
            case 496:
                var12 = var9.bind(var11)();
                var1 = var12.done;
                var4 = var12;
                if (!var1) {
                    _fun43750_ip = 310;
                    continue _fun43750
                }
            case 514:
                var4 = _closure1_slot16;
                var1 = var4.set;
                var1 = var1.bind(var4)(var3, var6);
                var4 = _closure1_slot18;
                var1 = var4.set;
                var1 = var1.bind(var4)(var3, var5);
                var1 = _closure1_slot17;
                var0 = var1.set;
                var0 = var0.bind(var1)(var3, var2);
                var0 = true;
                return var0;
            case 563:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var10 = function() {
        var2 = _closure1_slot16;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot18;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot17;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot19;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = null;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var9 = function arg0() {
        _fun43752: for (var _fun43752_ip = 0;;) switch (_fun43752_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var3 = var0.id;
                var0 = _closure1_slot20;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun43752_ip = 224;
                    continue _fun43752
                }
            case 29:
                var4 = _closure1_slot11;
                var0 = var4.getGuild;
                var0 = var0.bind(var4)(var3);
                if (!(var2 != var0)) {
                    _fun43752_ip = 220;
                    continue _fun43752
                }
            case 50:
                var4 = var0.features;
                var2 = var4.has;
                var0 = _closure1_slot14;
                var0 = var0.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                var0 = var2.bind(var4)(var0);
                if (!var0) {
                    _fun43752_ip = 146;
                    continue _fun43752
                }
            case 79:
                var4 = _closure1_slot20;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if (var2) {
                    _fun43752_ip = 146;
                    continue _fun43752
                }
            case 96:
                var2 = global;
                var5 = var2.Set;
                var6 = _closure1_slot20;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = var4;
                var2 = new var7[var5](var6, var5);
                var2 = var2 instanceof Object ? var2 : var4;
                var4 = var2.add;
                var4 = var4.bind(var2)(var3);
                _closure1_slot20 = var2;
                var2 = true;
                return var2;
            case 146:
                if (var0) {
                    _fun43752_ip = 216;
                    continue _fun43752
                }
            case 149:
                var2 = _closure1_slot20;
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                if (!var0) {
                    _fun43752_ip = 216;
                    continue _fun43752
                }
            case 166:
                var0 = global;
                var4 = var0.Set;
                var6 = _closure1_slot20;
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var2;
                var0 = new var7[var4](var6, var5);
                var0 = var0 instanceof Object ? var0 : var2;
                var2 = var0.delete;
                var2 = var2.bind(var0)(var3);
                _closure1_slot20 = var0;
                var0 = true;
                return var0;
            case 216:
                var0 = false;
                return var0;
            case 220:
                var0 = false;
                return var0;
            case 224:
                var0 = false;
                return var0;
        }
    };
    var8 = function arg0() {
        _fun43753: for (var _fun43753_ip = 0;;) switch (_fun43753_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = _closure1_slot16;
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun43753_ip = 45;
                    continue _fun43753
                }
            case 34:
                var2 = _closure1_slot24;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 45:
                return var0;
        }
    };
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
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
    var7 = var4.bind(var0)(var7);
    var7 = var7.isGuildOwner;
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.hasPermission;
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var11 = var7.Permissions;
    var _closure1_slot13 = var11;
    var7 = var7.GuildFeatures;
    var _closure1_slot14 = var7;
    var7 = var1.Set;
    var11 = var7.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var7
        }
    });
    var16 = var11;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot15 = var7;
    var7 = var1.Map;
    var11 = var7.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var7
        }
    });
    var16 = var11;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot16 = var7;
    var7 = var1.Map;
    var11 = var7.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var7
        }
    });
    var16 = var11;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot17 = var7;
    var7 = var1.Map;
    var11 = var7.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var7
        }
    });
    var16 = var11;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot18 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var16 = var7;
    var1 = new var16[var1](var15);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot19 = var1;
    var1 = null;
    var _closure1_slot20 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun43755: for (var _fun43755_ip = 0;;) switch (_fun43755_ip) {
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
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun43755_ip = 69;
                        continue _fun43755
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun43755_ip = 105;
                    continue _fun43755;
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
            var5 = this;
            var4 = var5.waitFor;
            var9 = _closure1_slot11;
            var8 = _closure1_slot10;
            var7 = _closure1_slot12;
            var6 = _closure1_slot9;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuildIdsWithPurchasableRoles';
        var4.key = var6;
        var6 = function() {
            _fun43757: for (var _fun43757_ip = 0;;) switch (_fun43757_ip) {
                case 0:
                    var1 = _closure1_slot20;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun43757_ip = 22;
                        continue _fun43757
                    }
                case 13:
                    var0 = _closure1_slot20;
                    _fun43757_ip = 158;
                    continue _fun43757;
                case 22:
                    var3 = _closure1_slot11;
                    var1 = var3.getGuildsArray;
                    var4 = var1.bind(var3)();
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var11 = var3;
                    var1 = new var11[var1](var10);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var3 = _closure1_slot22;
                    var6 = undefined;
                    var5 = var3.bind(var6)(var4);
                    var4 = var5.bind(var6)();
                    var3 = var4.done;
                    if (var3) {
                        _fun43757_ip = 151;
                        continue _fun43757
                    }
                case 87:
                    var3 = var4.value;
                    var9 = var3.features;
                    var8 = var9.has;
                    var7 = _closure1_slot14;
                    var7 = var7.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                    var7 = var8.bind(var9)(var7);
                    if (!var7) {
                        _fun43757_ip = 136;
                        continue _fun43757
                    }
                case 121:
                    var7 = var1.add;
                    var3 = var3.id;
                    var3 = var7.bind(var1)(var3);
                case 136:
                    var7 = var5.bind(var6)();
                    var3 = var7.done;
                    var4 = var7;
                    if (!var3) {
                        _fun43757_ip = 87;
                        continue _fun43757
                    }
                case 151:
                    _closure1_slot20 = var1;
                    var0 = var1;
                case 158:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'buildRoles';
        var4.key = var6;
        var6 = function arg0() {
            _fun43758: for (var _fun43758_ip = 0;;) switch (_fun43758_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot16;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun43758_ip = 34;
                        continue _fun43758
                    }
                case 23:
                    var1 = _closure1_slot24;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 34:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSubscriptionRoles';
        var4.key = var6;
        var6 = function arg0() {
            _fun43759: for (var _fun43759_ip = 0;;) switch (_fun43759_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = var1.buildRoles;
                    var0 = var0.bind(var1)(var3);
                    var2 = _closure1_slot16;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var3);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun43759_ip = 44;
                        continue _fun43759
                    }
                case 40:
                    var0 = _closure1_slot15;
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getPurchasableSubscriptionRoles';
        var4.key = var6;
        var6 = function arg0() {
            _fun43760: for (var _fun43760_ip = 0;;) switch (_fun43760_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = var1.buildRoles;
                    var0 = var0.bind(var1)(var3);
                    var2 = _closure1_slot17;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var3);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun43760_ip = 44;
                        continue _fun43760
                    }
                case 40:
                    var0 = _closure1_slot15;
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getUserSubscriptionRoles';
        var4.key = var6;
        var6 = function arg0() {
            _fun43761: for (var _fun43761_ip = 0;;) switch (_fun43761_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = var1.buildRoles;
                    var0 = var0.bind(var1)(var3);
                    var2 = _closure1_slot18;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var3);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun43761_ip = 44;
                        continue _fun43761
                    }
                case 40:
                    var0 = _closure1_slot15;
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getUserIsAdmin';
        var4.key = var6;
        var5 = function arg0() {
            _fun43762: for (var _fun43762_ip = 0;;) switch (_fun43762_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1.buildRoles;
                    var0 = var0.bind(var1)(var2);
                    var1 = _closure1_slot19;
                    var0 = var1.get;
                    var1 = var0.bind(var1)(var2);
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun43762_ip = 46;
                        continue _fun43762
                    }
                case 43:
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SubscriptionRoleStore';
    var7.displayName = var1;
    var1 = 14;
    var1 = var5[var1];
    var15 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var10;
    var1.LOGOUT = var10;
    var1.GUILD_CREATE = var9;
    var10 = function arg0() {
        _fun43763: for (var _fun43763_ip = 0;;) switch (_fun43763_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var4 = var0.id;
                var5 = _closure1_slot20;
                var0 = null;
                var1 = var0 == var5;
                var0 = undefined;
                var3 = undefined;
                if (var1) {
                    _fun43763_ip = 43;
                    continue _fun43763
                }
            case 33:
                var1 = var5.has;
                var3 = var1.bind(var5)(var4);
            case 43:
                var1 = true;
                if (!(var1 === var3)) {
                    _fun43763_ip = 97;
                    continue _fun43763
                }
            case 49:
                var1 = global;
                var5 = var1.Set;
                var6 = _closure1_slot20;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = var3;
                var1 = new var7[var5](var6, var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = var1.delete;
                var3 = var3.bind(var1)(var4);
                _closure1_slot20 = var1;
                return var0;
            case 97:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_DELETE = var10;
    var1.GUILD_UPDATE = var9;
    var1.GUILD_ROLE_CREATE = var8;
    var1.GUILD_ROLE_UPDATE = var8;
    var1.GUILD_ROLE_DELETE = var8;
    var3 = function arg0() {
        _fun43764: for (var _fun43764_ip = 0;;) switch (_fun43764_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var0 = var0.user;
                var4 = _closure1_slot12;
                var2 = var4.getCurrentUser;
                var5 = var2.bind(var4)();
                var4 = var0.id;
                var0 = null;
                var6 = var0 == var5;
                var2 = undefined;
                var0 = undefined;
                if (var6) {
                    _fun43764_ip = 52;
                    continue _fun43764
                }
            case 47:
                var0 = var5.id;
            case 52:
                var4 = var4 !== var0;
                if (var4) {
                    _fun43764_ip = 76;
                    continue _fun43764
                }
            case 59:
                var5 = _closure1_slot16;
                var0 = var5.has;
                var0 = var0.bind(var5)(var3);
                var4 = !var0;
            case 76:
                var0 = !var4;
                if (var4) {
                    _fun43764_ip = 91;
                    continue _fun43764
                }
            case 82:
                var1 = _closure1_slot24;
                var0 = var1.bind(var2)(var3);
            case 91:
                return var0;
        }
    };
    var1.GUILD_MEMBER_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var16 = var3;
    var14 = var1;
    var1 = new var16[var7](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/SubscriptionRoleStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1416, 1666, 1672, 1665, 1410, 1613, 660, 3043, 566, 806, 2]);