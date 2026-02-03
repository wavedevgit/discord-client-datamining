// modules/guild_progress/GuildProgressStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun80438: for (var _fun80438_ip = 0;;) switch (_fun80438_ip) {
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
                _fun80438_ip = 76;
                continue _fun80438;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun80441: for (var _fun80441_ip = 0;;) switch (_fun80441_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun80441_ip = 46;
                    continue _fun80441
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun80441_ip = 55;
                    continue _fun80441
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun80441_ip = 345;
                    continue _fun80441
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun80441_ip = 323;
                    continue _fun80441
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun80441_ip = 283;
                    continue _fun80441
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun80441_ip = 270;
                    continue _fun80441
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
                    _fun80441_ip = 163;
                    continue _fun80441
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun80441_ip = 179;
                    continue _fun80441
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun80441_ip = 249;
                    continue _fun80441
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun80441_ip = 249;
                    continue _fun80441
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun80441_ip = 234;
                    continue _fun80441
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun80441_ip = 247;
                    continue _fun80441
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun80441_ip = 265;
                continue _fun80441;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun80441_ip = 283;
                continue _fun80441;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun80441_ip = 323;
                    continue _fun80441
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
                    _fun80441_ip = 330;
                    continue _fun80441
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun80442: for (var _fun80442_ip = 0;;) switch (_fun80442_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun80442_ip = 56;
                                continue _fun80442
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
                            _fun80442_ip = 67;
                            continue _fun80442;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun80443: for (var _fun80443_ip = 0;;) switch (_fun80443_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun80443_ip = 23;
                    continue _fun80443
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun80443_ip = 33;
                    continue _fun80443
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
                    _fun80443_ip = 70;
                    continue _fun80443
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun80443_ip = 55;
                    continue _fun80443
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun80444: for (var _fun80444_ip = 0;;) switch (_fun80444_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var0 = _closure1_slot11;
                var5 = var0[var4];
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun80444_ip = 93;
                    continue _fun80444
                }
            case 26:
                var1 = var5.has;
                var1 = var1.bind(var5)(var7);
                var1 = !var1;
                if (!var1) {
                    _fun80444_ip = 90;
                    continue _fun80444
                }
            case 42:
                var3 = _closure1_slot11;
                var2 = global;
                var6 = var2.Set;
                var2 = var5.add;
                var8 = var2.bind(var5)(var7);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var5;
                var2 = new var9[var6](var8, var7);
                var2 = var2 instanceof Object ? var2 : var5;
                var3[var4] = var2;
                var1 = true;
            case 90:
                var0 = var1;
            case 93:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Steps;
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun80446: for (var _fun80446_ip = 0;;) switch (_fun80446_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun80446_ip = 69;
                        continue _fun80446
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun80446_ip = 105;
                    continue _fun80446;
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
        var0 = function arg0() {
            _fun80447: for (var _fun80447_ip = 0;;) switch (_fun80447_ip) {
                case 0:
                    var3 = arg0;
                    var7 = this;
                    var _closure3_slot0 = var3;
                    var6 = var7.waitFor;
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot9;
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var2 = {};
                    _closure1_slot11 = var2;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun80447_ip = 101;
                        continue _fun80447
                    }
                case 52:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.keys;
                    var2 = var1.bind(var2)(var3);
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun80448: for (var _fun80448_ip = 0;;) switch (_fun80448_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = _closure3_slot0;
                                var4 = var0[var2];
                                var0 = null;
                                var0 = var0 != var4;
                                if (!var0) {
                                    _fun80448_ip = 52;
                                    continue _fun80448
                                }
                            case 23:
                                var1 = global;
                                var1 = var1.Symbol;
                                var1 = var1.iterator;
                                var1 = var4[var1];
                                var3 = 'function';
                                var1 = typeof var1;
                                var0 = var3 === var1;
                            case 52:
                                if (!var0) {
                                    _fun80448_ip = 97;
                                    continue _fun80448
                                }
                            case 55:
                                var1 = _closure1_slot11;
                                var0 = global;
                                var0 = var0.Set;
                                var3 = var0.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var6 = var3;
                                var5 = var4;
                                var0 = new var6[var0](var5, var4);
                                var0 = var0 instanceof Object ? var0 : var3;
                                var1[var2] = var0;
                            case 97:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 101:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getProgress';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot11;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasProgress';
        var4.key = var6;
        var6 = function arg0() {
            _fun80450: for (var _fun80450_ip = 0;;) switch (_fun80450_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var0 = arg0;
                    var3 = var2[var0];
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun80450_ip = 46;
                        continue _fun80450
                    }
                case 23:
                    var2 = var3.has;
                    var1 = _closure1_slot10;
                    var1 = var1.DISMISSED;
                    var1 = var2.bind(var3)(var1);
                    var0 = !var1;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildProgressStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var3 = new Array(0);
        var _closure2_slot0 = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 9;
        var4 = var4[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var4 = var5.keys;
        var2 = _closure1_slot11;
        var5 = var4.bind(var5)(var2);
        var4 = var5.forEach;
        var2 = function(arg0) { // Environment: var1
            _fun80453: for (var _fun80453_ip = 0;;) switch (_fun80453_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot11;
                    var3 = var1[var2];
                    var1 = var3.has;
                    var0 = _closure1_slot10;
                    var0 = var0.COMPLETED;
                    var0 = var1.bind(var3)(var0);
                    if (!var0) {
                        _fun80453_ip = 54;
                        continue _fun80453
                    }
                case 37:
                    var1 = _closure2_slot0;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var3 = _closure1_slot15;
            var0 = _closure1_slot10;
            var2 = var0.DISMISSED;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun80455: for (var _fun80455_ip = 0;;) switch (_fun80455_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = _closure1_slot11;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun80455_ip = 61;
                    continue _fun80455
                }
            case 25:
                var3 = _closure1_slot11;
                var1 = global;
                var1 = var1.Set;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var4;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var4;
                var3[var2] = var1;
            case 61:
                var1 = _closure1_slot11;
                var4 = var1[var2];
                var3 = var4.has;
                var1 = _closure1_slot10;
                var1 = var1.COMPLETED;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun80455_ip = 120;
                    continue _fun80455
                }
            case 92:
                var1 = _closure1_slot11;
                var2 = var1[var2];
                var1 = var2.delete;
                var0 = _closure1_slot10;
                var0 = var0.DISMISSED;
                var0 = var1.bind(var2)(var0);
            case 120:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_PROGRESS_INITIALIZE = var8;
    var8 = function arg0() {
        _fun80456: for (var _fun80456_ip = 0;;) switch (_fun80456_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = _closure1_slot11;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun80456_ip = 93;
                    continue _fun80456
                }
            case 25:
                var1 = _closure1_slot11;
                var3 = global;
                var4 = var3.Set;
                var3 = _closure1_slot11;
                var5 = var3[var2];
                var3 = var5.add;
                var0 = _closure1_slot10;
                var0 = var0.COMPLETED;
                var6 = var3.bind(var5)(var0);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var3;
                var0 = new var7[var4](var6, var5);
                var0 = var0 instanceof Object ? var0 : var3;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            case 93:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_PROGRESS_COMPLETED_SEEN = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var2 = _closure1_slot15;
        var0 = _closure1_slot10;
        var1 = var0.DISMISSED;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.GUILD_PROGRESS_DISMISS = var8;
    var8 = function arg0() {
        _fun80458: for (var _fun80458_ip = 0;;) switch (_fun80458_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var4 = var0.id;
                var3 = var0.member_count;
                var2 = _closure1_slot9;
                var1 = var2.getGuild;
                var1 = var1.bind(var2)(var4);
                var4 = null;
                if (!(var4 != var1)) {
                    _fun80458_ip = 178;
                    continue _fun80458
                }
            case 45:
                var5 = var1.ownerId;
                var6 = _closure1_slot7;
                var2 = var6.getId;
                var2 = var2.bind(var6)();
                var2 = var5 === var2;
                if (!var2) {
                    _fun80458_ip = 89;
                    continue _fun80458
                }
            case 72:
                var6 = _closure1_slot11;
                var5 = var1.id;
                var5 = var6[var5];
                var2 = var4 != var5;
            case 89:
                if (!var2) {
                    _fun80458_ip = 174;
                    continue _fun80458
                }
            case 92:
                var2 = var1.icon;
                if (!(var4 != var2)) {
                    _fun80458_ip = 134;
                    continue _fun80458
                }
            case 101:
                var4 = _closure1_slot11;
                var2 = var1.id;
                var5 = var4[var2];
                var4 = var5.add;
                var2 = _closure1_slot10;
                var2 = var2.AVATAR;
                var2 = var4.bind(var5)(var2);
            case 134:
                var2 = 1;
                if (!(var3 > var2)) {
                    _fun80458_ip = 174;
                    continue _fun80458
                }
            case 141:
                var2 = _closure1_slot11;
                var1 = var1.id;
                var2 = var2[var1];
                var1 = var2.add;
                var0 = _closure1_slot10;
                var0 = var0.INVITE;
                var0 = var1.bind(var2)(var0);
            case 174:
                var0 = undefined;
                return var0;
            case 178:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_CREATE = var8;
    var8 = function arg0() {
        _fun80459: for (var _fun80459_ip = 0;;) switch (_fun80459_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun80459_ip = 26;
                    continue _fun80459
                }
            case 17:
                var1 = var2.guild_id;
                var0 = var3 != var1;
            case 26:
                if (!var0) {
                    _fun80459_ip = 49;
                    continue _fun80459
                }
            case 29:
                var4 = _closure1_slot11;
                var1 = var2.guild_id;
                var1 = var4[var1];
                var0 = var3 != var1;
            case 49:
                if (!var0) {
                    _fun80459_ip = 82;
                    continue _fun80459
                }
            case 52:
                var4 = _closure1_slot15;
                var3 = var2.guild_id;
                var1 = _closure1_slot10;
                var2 = var1.CHANNEL;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 82:
                return var0;
        }
    };
    var1.CHANNEL_CREATE = var8;
    var8 = function arg0() {
        _fun80460: for (var _fun80460_ip = 0;;) switch (_fun80460_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var0 = _closure1_slot13;
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
                    _fun80460_ip = 142;
                    continue _fun80460
                }
            case 46:
                var10 = var3.value;
                var1 = var4 != var10;
                if (!var1) {
                    _fun80460_ip = 67;
                    continue _fun80460
                }
            case 58:
                var11 = var10.guild_id;
                var1 = var4 != var11;
            case 67:
                if (!var1) {
                    _fun80460_ip = 87;
                    continue _fun80460
                }
            case 70:
                var12 = _closure1_slot11;
                var11 = var10.guild_id;
                var11 = var12[var11];
                var1 = var4 != var11;
            case 87:
                if (!var1) {
                    _fun80460_ip = 119;
                    continue _fun80460
                }
            case 90:
                var12 = _closure1_slot15;
                var11 = var10.guild_id;
                var10 = _closure1_slot10;
                var10 = var10.CHANNEL;
                var10 = var12.bind(var8)(var11, var10);
                var1 = var6 !== var10;
            case 119:
                if (!var1) {
                    _fun80460_ip = 124;
                    continue _fun80460
                }
            case 122:
                var2 = true;
            case 124:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var3 = var11;
                var0 = var2;
                if (!var1) {
                    _fun80460_ip = 46;
                    continue _fun80460
                }
            case 142:
                return var0;
        }
    };
    var1.CHANNEL_UPDATES = var8;
    var8 = function arg0() {
        _fun80461: for (var _fun80461_ip = 0;;) switch (_fun80461_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guild;
                var4 = null;
                var0 = var4 != var3;
                if (!var0) {
                    _fun80461_ip = 97;
                    continue _fun80461
                }
            case 17:
                var1 = var3.id;
                var1 = var4 != var1;
                if (!var1) {
                    _fun80461_ip = 49;
                    continue _fun80461
                }
            case 29:
                var5 = _closure1_slot11;
                var2 = var3.id;
                var2 = var5[var2];
                var1 = var4 != var2;
            case 49:
                if (!var1) {
                    _fun80461_ip = 61;
                    continue _fun80461
                }
            case 52:
                var2 = var3.icon;
                var1 = var4 != var2;
            case 61:
                if (!var1) {
                    _fun80461_ip = 94;
                    continue _fun80461
                }
            case 64:
                var5 = _closure1_slot15;
                var4 = var3.id;
                var2 = _closure1_slot10;
                var3 = var2.AVATAR;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
            case 94:
                var0 = var1;
            case 97:
                return var0;
        }
    };
    var1.GUILD_SETTINGS_SUBMIT_SUCCESS = var8;
    var8 = function arg0() {
        _fun80462: for (var _fun80462_ip = 0;;) switch (_fun80462_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var0 = var0.message;
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var2 = var2.bind(var3)(var4);
                var0 = var0.author;
                var5 = null;
                var6 = var5 == var0;
                var4 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun80462_ip = 54;
                    continue _fun80462
                }
            case 49:
                var3 = var0.id;
            case 54:
                var6 = _closure1_slot7;
                var0 = var6.getId;
                var0 = var0.bind(var6)();
                var0 = var3 === var0;
                if (!var0) {
                    _fun80462_ip = 79;
                    continue _fun80462
                }
            case 75:
                var0 = var5 != var2;
            case 79:
                if (!var0) {
                    _fun80462_ip = 99;
                    continue _fun80462
                }
            case 82:
                var6 = _closure1_slot11;
                var3 = var2.guild_id;
                var3 = var6[var3];
                var0 = var5 != var3;
            case 99:
                if (!var0) {
                    _fun80462_ip = 127;
                    continue _fun80462
                }
            case 102:
                var3 = _closure1_slot15;
                var2 = var2.guild_id;
                var1 = _closure1_slot10;
                var1 = var1.MESSAGE;
                var0 = var3.bind(var4)(var2, var1);
            case 127:
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var8;
    var3 = function arg0() {
        _fun80463: for (var _fun80463_ip = 0;;) switch (_fun80463_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = var0.memberCount;
                var0 = _closure1_slot11;
                var2 = var0[var4];
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun80463_ip = 41;
                    continue _fun80463
                }
            case 34:
                var2 = 1;
                var0 = var3 > var2;
            case 41:
                if (!var0) {
                    _fun80463_ip = 66;
                    continue _fun80463
                }
            case 44:
                var3 = _closure1_slot15;
                var1 = _closure1_slot10;
                var2 = var1.INVITE;
                var1 = undefined;
                var0 = var3.bind(var1)(var4, var2);
            case 66:
                return var0;
        }
    };
    var1.GUILD_MEMBER_LIST_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_progress/GuildProgressStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1372, 1410, 10231, 21, 566, 806, 2]);