// modules/guild_scheduled_events/GuildScheduledEventManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function arg0, arg1() {
        _fun66111: for (var _fun66111_ip = 0;;) switch (_fun66111_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun66111_ip = 46;
                    continue _fun66111
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun66111_ip = 55;
                    continue _fun66111
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun66111_ip = 345;
                    continue _fun66111
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun66111_ip = 323;
                    continue _fun66111
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun66111_ip = 283;
                    continue _fun66111
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun66111_ip = 270;
                    continue _fun66111
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
                    _fun66111_ip = 163;
                    continue _fun66111
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun66111_ip = 179;
                    continue _fun66111
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun66111_ip = 249;
                    continue _fun66111
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun66111_ip = 249;
                    continue _fun66111
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun66111_ip = 234;
                    continue _fun66111
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun66111_ip = 247;
                    continue _fun66111
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun66111_ip = 265;
                continue _fun66111;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun66111_ip = 283;
                continue _fun66111;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun66111_ip = 323;
                    continue _fun66111
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
                    _fun66111_ip = 330;
                    continue _fun66111
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun66112: for (var _fun66112_ip = 0;;) switch (_fun66112_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun66112_ip = 56;
                                continue _fun66112
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
                            _fun66112_ip = 67;
                            continue _fun66112;
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
        _fun66113: for (var _fun66113_ip = 0;;) switch (_fun66113_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun66113_ip = 23;
                    continue _fun66113
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun66113_ip = 33;
                    continue _fun66113
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
                    _fun66113_ip = 70;
                    continue _fun66113
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun66113_ip = 55;
                    continue _fun66113
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        _fun66114: for (var _fun66114_ip = 0;;) switch (_fun66114_ip) {
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
                _fun66114_ip = 76;
                continue _fun66114;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = {};
    var _closure1_slot10 = var6;
    var6 = var3.Set;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var12 = var7;
    var6 = new var12[var6](var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot11 = var6;
    var3 = var3.Set;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var12 = var6;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot12 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66119: for (var _fun66119_ip = 0;;) switch (_fun66119_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66119_ip = 191;
                            continue _fun66119
                        }
                    case 13:
                        var1 = var5;
                        var4 = _closure1_slot9;
                        var3 = var4.getGuildScheduledEventsForGuild;
                        var3 = var3.bind(var4)(var5);
                        var4 = var3.length;
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun66119_ip = 186;
                            continue _fun66119
                        }
                    case 48:
                        var5 = _closure1_slot11;
                        var4 = var5.has;
                        var3 = var1;
                        var3 = var4.bind(var5)(var3);
                        if (var3) {
                            _fun66119_ip = 186;
                            continue _fun66119
                        }
                    case 68:
                        var5 = _closure1_slot12;
                        var4 = var5.has;
                        var3 = var1;
                        var3 = var4.bind(var5)(var3);
                        if (var3) {
                            _fun66119_ip = 186;
                            continue _fun66119
                        }
                    case 88: // try_start_0
                        var4 = _closure1_slot11;
                        var3 = var4.add;
                        var5 = var1;
                        var3 = var3.bind(var4)(var5);
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 8;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var6.bind(var3)(var4);
                        var3 = var4.getGuildEventsForCurrentUser;
                        var3 = var3.bind(var4)(var5);
                        SaveGenerator(address = 142);
                    case 140:
                        return var3;
                    case 142:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun66119_ip = 167;
                            continue _fun66119
                        }
                    case 148:
                        var6 = _closure1_slot12;
                        var5 = var6.add;
                        var4 = var1;
                        var4 = var5.bind(var6)(var4);
                    case 165: // try_end0
                        _fun66119_ip = 186;
                        continue _fun66119;
                    case 167:
                        return var3;
                    case 170: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot11;
                        var2 = var3.delete;
                        var1 = var2.bind(var3)(var1);
                    case 186:
                        var1 = undefined;
                        return var1;
                    case 191:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun66122: for (var _fun66122_ip = 0;;) switch (_fun66122_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot2;
                    var1 = _closure2_slot3;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun66122_ip = 86;
                        continue _fun66122
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun66122_ip = 120;
                    continue _fun66122;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var1.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.POST_CONNECTION_OPEN = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildDelete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.GUILD_DELETE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildUnavailable;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.GUILD_UNAVAILABLE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleInviteResolveSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.INVITE_RESOLVE_SUCCESS = var3;
                    var2 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleChannelSelect;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.CHANNEL_SELECT = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot3 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var6 = 'getGuildEventUserCounts';
        var4.key = var6;
        var7 = _closure1_slot7;
        var0 = function*(arg0, arg1, arg2) { // Environment: var5
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun66129: for (var _fun66129_ip = 0;;) switch (_fun66129_ip) {
                    case 0:
                        StartGenerator();
                        var14 = arg0;
                        var11 = arg1;
                        var8 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66129_ip = 258;
                            continue _fun66129
                        }
                    case 21:
                        var4 = var14;
                        var _closure4_slot0 = var14;
                        var3 = var11;
                        var _closure4_slot1 = var11;
                        var1 = undefined;
                        var2 = undefined;
                        var7 = var8.filter;
                        var5 = function(arg0) { // Environment: var6
                            _fun66130: for (var _fun66130_ip = 0;;) switch (_fun66130_ip) {
                                case 0:
                                    var8 = arg0;
                                    var2 = _closure1_slot10;
                                    var14 = _closure4_slot0;
                                    var12 = _closure4_slot1;
                                    var1 = global;
                                    var0 = var1.HermesInternal;
                                    var0 = var0.concat;
                                    var7 = '';
                                    var6 = '-';
                                    var15 = var7;
                                    var13 = var6;
                                    var11 = var6;
                                    var10 = var8;
                                    var0 = var15[var0](var14, var13, var12, var11, var10, var9);
                                    var2 = var2[var0];
                                    var0 = null;
                                    var0 = var0 == var2;
                                    if (var0) {
                                        _fun66130_ip = 143;
                                        continue _fun66130
                                    }
                                case 71:
                                    var5 = var1.Date;
                                    var2 = var5.now;
                                    var2 = var2.bind(var5)();
                                    var3 = _closure1_slot10;
                                    var14 = _closure4_slot0;
                                    var12 = _closure4_slot1;
                                    var1 = var1.HermesInternal;
                                    var1 = var1.concat;
                                    var15 = var7;
                                    var13 = var6;
                                    var11 = var6;
                                    var10 = var8;
                                    var1 = var15[var1](var14, var13, var12, var11, var10, var9);
                                    var1 = var3[var1];
                                    var2 = var2 - var1;
                                    var1 = 1800000;
                                    var0 = var2 > var1;
                                case 143:
                                    return var0;
                            }
                        };
                        var2 = var7.bind(var8)(var5);
                        var7 = global;
                        var8 = var7.Date;
                        var5 = var8.now;
                        var9 = var5.bind(var8)();
                        var10 = _closure1_slot10;
                        var8 = var7.HermesInternal;
                        var8 = var8.concat;
                        var13 = '';
                        var12 = '-';
                        var8 = var8.bind(var13)(var14, var12, var11);
                        var8 = var10[var8];
                        var9 = var9 - var8;
                        var8 = 1800000;
                        if (!(var9 < var8)) {
                            _fun66129_ip = 138;
                            continue _fun66129
                        }
                    case 124:
                        var8 = var2;
                        var9 = var8.length;
                        var8 = 0;
                        if (!(var8 !== var9)) {
                            _fun66129_ip = 255;
                            continue _fun66129
                        }
                    case 138:
                        var9 = _closure1_slot10;
                        var11 = var4;
                        var10 = var3;
                        var8 = var7.HermesInternal;
                        var8 = var8.concat;
                        var8 = var8.bind(var13)(var11, var12, var10);
                        var10 = var7.Date;
                        var7 = var10.now;
                        var7 = var7.bind(var10)();
                        var9[var8] = var7;
                        var8 = var2;
                        var7 = var8.forEach;
                        var6 = function(arg0) { // Environment: var6
                            var2 = _closure1_slot10;
                            var12 = _closure4_slot0;
                            var10 = _closure4_slot1;
                            var0 = global;
                            var1 = var0.HermesInternal;
                            var5 = var1.concat;
                            var13 = '';
                            var3 = '-';
                            var8 = arg0;
                            var11 = var3;
                            var9 = var3;
                            var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                            var3 = var0.Date;
                            var0 = var3.now;
                            var0 = var0.bind(var3)();
                            var2[var1] = var0;
                            return var0;
                        };
                        var6 = var7.bind(var8)(var6);
                    case 205: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 8;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.fetchGuildEventUserCounts;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        SaveGenerator(address = 242);
                    case 240:
                        return var2;
                    case 242:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun66129_ip = 250;
                            continue _fun66129
                        }
                    case 248: // try_end0
                        _fun66129_ip = 255;
                        continue _fun66129;
                    case 250:
                        return var2;
                    case 253: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 255:
                        return var1;
                    case 258:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var7.bind(var2)(var0);
        var _closure2_slot2 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuildEventUsers';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.fetchUsersForGuildEvent;
            var2 = arg0;
            var1 = arg1;
            var0 = arg2;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildEventsForCurrentUser';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot13;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun66136: for (var _fun66136_ip = 0;;) switch (_fun66136_ip) {
                    case 0:
                        StartGenerator();
                        var10 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66136_ip = 226;
                            continue _fun66136
                        }
                    case 15:
                        var3 = _closure1_slot11;
                        var2 = var3.clear;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot12;
                        var2 = var3.clear;
                        var2 = var2.bind(var3)();
                        var2 = {};
                        _closure1_slot10 = var2;
                        var3 = _closure1_slot8;
                        var2 = var3.getLastSelectedGuildId;
                        var8 = var2.bind(var3)();
                        var2 = null;
                        if (!(var2 != var8)) {
                            _fun66136_ip = 221;
                            continue _fun66136
                        }
                    case 75:
                        var2 = _closure1_slot14;
                        var3 = _closure1_slot9;
                        var1 = var3.getGuildScheduledEventsForGuild;
                        var1 = var1.bind(var3)(var8);
                        var7 = undefined;
                        var6 = var2.bind(var7)(var1);
                        var2 = var6.bind(var7)();
                        var1 = var2.done;
                        var5 = global;
                        var4 = var2;
                        if (var1) {
                            _fun66136_ip = 221;
                            continue _fun66136
                        }
                    case 118:
                        var1 = var4.value;
                        var3 = var10.getGuildEventUserCounts;
                        var2 = var1.id;
                        var1 = new Array(0);
                        var1 = var3.bind(var10)(var8, var2, var1);
                        SaveGenerator(address = 149);
                    case 147:
                        return var1;
                    case 149:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66136_ip = 218;
                            continue _fun66136
                        }
                    case 155:
                        var11 = var5.Promise;
                        var2 = var11.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var11
                            }
                        });
                        var14 = function(arg0) { // Environment: var9
                            var0 = global;
                            var3 = var0.setTimeout;
                            var1 = var0.Math;
                            var0 = var1.random;
                            var1 = var0.bind(var1)();
                            var0 = 200;
                            var4 = var0 * var1;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 50;
                            var0 = var4 + var0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var15 = var3;
                        var2 = new var15[var11](var14, var13);
                        var2 = var2 instanceof Object ? var2 : var3;
                        SaveGenerator(address = 192);
                    case 190:
                        return var2;
                    case 192:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun66136_ip = 215;
                            continue _fun66136
                        }
                    case 198:
                        var11 = var6.bind(var7)();
                        var3 = var11.done;
                        var4 = var11;
                        if (var3) {
                            _fun66136_ip = 221;
                            continue _fun66136
                        }
                    case 213:
                        _fun66136_ip = 118;
                        continue _fun66136;
                    case 215:
                        return var2;
                    case 218:
                        return var1;
                    case 221:
                        var1 = undefined;
                        return var1;
                    case 226:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleGuildUnavailable';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var1 = var0.guildId;
            var3 = _closure1_slot11;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var1);
            var3 = _closure1_slot12;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var1);
            var0 = _closure1_slot10;
            var0 = delete var0[var1];
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var0 = var0.guild;
            var1 = var0.id;
            var3 = _closure1_slot11;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var1);
            var3 = _closure1_slot12;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var1);
            var0 = _closure1_slot10;
            var0 = delete var0[var1];
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleInviteResolveSuccess';
        var4.key = var6;
        var6 = function arg0() {
            _fun66141: for (var _fun66141_ip = 0;;) switch (_fun66141_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.invite;
                    var1 = var0.guild_scheduled_event;
                    var4 = var0.guild;
                    var3 = null;
                    var5 = var3 == var4;
                    var0 = undefined;
                    var2 = undefined;
                    if (var5) {
                        _fun66141_ip = 38;
                        continue _fun66141
                    }
                case 33:
                    var2 = var4.id;
                case 38:
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun66141_ip = 49;
                        continue _fun66141
                    }
                case 45:
                    var1 = var3 != var2;
                case 49:
                    if (!var1) {
                        _fun66141_ip = 64;
                        continue _fun66141
                    }
                case 52:
                    var1 = _closure1_slot13;
                    var1 = var1.bind(var0)(var2);
                case 64:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleChannelSelect';
        var4.key = var6;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66143: for (var _fun66143_ip = 0;;) switch (_fun66143_ip) {
                    case 0:
                        StartGenerator();
                        var12 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66143_ip = 326;
                            continue _fun66143
                        }
                    case 15:
                        var1 = arg0;
                        var8 = var1.guildId;
                        var2 = undefined;
                        var9 = undefined;
                        var10 = undefined;
                        var11 = undefined;
                        SaveGenerator(address = 35);
                    case 33:
                        return var2;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun66143_ip = 323;
                            continue _fun66143
                        }
                    case 44:
                        var5 = var8;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun66143_ip = 320;
                            continue _fun66143
                        }
                    case 56:
                        var5 = _closure1_slot14;
                        var7 = _closure1_slot9;
                        var6 = var7.getGuildScheduledEventsForGuild;
                        var4 = var8;
                        var4 = var6.bind(var7)(var4);
                        var4 = var5.bind(var2)(var4);
                        var10 = var4;
                        var4 = var4.bind(var2)();
                        var9 = var4;
                        var4 = var4.done;
                        var5 = global;
                        if (var4) {
                            _fun66143_ip = 320;
                            continue _fun66143
                        }
                    case 109:
                        var4 = var9;
                        var11 = var4.value;
                    case 117: // try_start_0
                        var13 = var12.getGuildEventUserCounts;
                        var7 = var8;
                        var4 = var11;
                        var6 = var4.id;
                        var4 = new Array(0);
                        var6 = var13.bind(var12)(var7, var6, var4);
                        SaveGenerator(address = 149);
                    case 147:
                        return var6;
                    case 149:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 4);
                        if (var4) {
                            _fun66143_ip = 221;
                            continue _fun66143
                        }
                    case 155: // try_end0
                        var13 = var5.Promise;
                        var4 = var13.prototype;
                        var7 = Object.create(var4, {
                            constructor: {
                                value: var13
                            }
                        });
                        var16 = function(arg0) { // Environment: var3
                            var0 = global;
                            var3 = var0.setTimeout;
                            var1 = var0.Math;
                            var0 = var1.random;
                            var1 = var0.bind(var1)();
                            var0 = 200;
                            var4 = var0 * var1;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 50;
                            var0 = var4 + var0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var17 = var7;
                        var4 = new var17[var13](var16, var15);
                        var4 = var4 instanceof Object ? var4 : var7;
                        SaveGenerator(address = 192);
                    case 190:
                        return var4;
                    case 192:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun66143_ip = 218;
                            continue _fun66143
                        }
                    case 198:
                        var7 = var10;
                        var7 = var7.bind(var2)();
                        var9 = var7;
                        var7 = var7.done;
                        if (var7) {
                            _fun66143_ip = 320;
                            continue _fun66143
                        }
                    case 216:
                        _fun66143_ip = 109;
                        continue _fun66143;
                    case 218:
                        return var4;
                    case 221:
                        var8 = var5.Promise;
                        var4 = var8.prototype;
                        var7 = Object.create(var4, {
                            constructor: {
                                value: var8
                            }
                        });
                        var16 = function(arg0) { // Environment: var3
                            var0 = global;
                            var3 = var0.setTimeout;
                            var1 = var0.Math;
                            var0 = var1.random;
                            var1 = var0.bind(var1)();
                            var0 = 200;
                            var4 = var0 * var1;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 50;
                            var0 = var4 + var0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var17 = var7;
                        var4 = new var17[var8](var16, var15);
                        var4 = var4 instanceof Object ? var4 : var7;
                        SaveGenerator(address = 258);
                    case 256:
                        return var4;
                    case 258:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun66143_ip = 267;
                            continue _fun66143
                        }
                    case 264:
                        return var6;
                    case 267:
                        return var4;
                    case 270: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var6 = var5.Promise;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var6
                            }
                        });
                        var16 = function(arg0) { // Environment: var3
                            var0 = global;
                            var3 = var0.setTimeout;
                            var1 = var0.Math;
                            var0 = var1.random;
                            var1 = var0.bind(var1)();
                            var0 = 200;
                            var4 = var0 * var1;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 50;
                            var0 = var4 + var0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var17 = var5;
                        var3 = new var17[var6](var16, var15);
                        var3 = var3 instanceof Object ? var3 : var5;
                        SaveGenerator(address = 309);
                    case 307:
                        return var3;
                    case 309:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun66143_ip = 317;
                            continue _fun66143
                        }
                    case 315:
                        throw var4;
                    case 317:
                        return var3;
                    case 320:
                        return var2;
                    case 323:
                        return var1;
                    case 326:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/GuildScheduledEventManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 3204, 3325, 8095, 4295, 2]);