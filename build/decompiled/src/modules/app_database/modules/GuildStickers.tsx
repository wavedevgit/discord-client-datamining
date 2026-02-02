// modules/app_database/modules/GuildStickers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function arg0, arg1() {
        _fun49430: for (var _fun49430_ip = 0;;) switch (_fun49430_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun49430_ip = 46;
                    continue _fun49430
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun49430_ip = 55;
                    continue _fun49430
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun49430_ip = 343;
                    continue _fun49430
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun49430_ip = 323;
                    continue _fun49430
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun49430_ip = 283;
                    continue _fun49430
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun49430_ip = 270;
                    continue _fun49430
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
                    _fun49430_ip = 163;
                    continue _fun49430
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun49430_ip = 179;
                    continue _fun49430
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun49430_ip = 249;
                    continue _fun49430
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun49430_ip = 249;
                    continue _fun49430
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun49430_ip = 234;
                    continue _fun49430
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun49430_ip = 247;
                    continue _fun49430
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun49430_ip = 265;
                continue _fun49430;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun49430_ip = 283;
                continue _fun49430;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun49430_ip = 323;
                    continue _fun49430
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
                    _fun49430_ip = 330;
                    continue _fun49430
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun49431: for (var _fun49431_ip = 0;;) switch (_fun49431_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun49431_ip = 56;
                                continue _fun49431
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
                            _fun49431_ip = 67;
                            continue _fun49431;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun49432: for (var _fun49432_ip = 0;;) switch (_fun49432_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun49432_ip = 23;
                    continue _fun49432
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun49432_ip = 33;
                    continue _fun49432
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
                    _fun49432_ip = 70;
                    continue _fun49432
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun49432_ip = 55;
                    continue _fun49432
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = 'GuildStickers';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot3;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = {};
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleBackgroundSync;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.BACKGROUND_SYNC = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleConnectionOpen;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CONNECTION_OPEN = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildCreate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_CREATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_DELETE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildStickersUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_STICKERS_UPDATE = var4;
            var3 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_UPDATE = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'getAsync';
        var4.key = var1;
        var6 = _closure1_slot2;
        var1 = undefined;
        var0 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49442: for (var _fun49442_ip = 0;;) switch (_fun49442_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49442_ip = 161;
                            continue _fun49442
                        }
                    case 10:
                        var2 = global;
                        var3 = var2.performance;
                        var1 = var3.now;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 4;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.stickers;
                        var1 = arg0;
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.getMapEntries;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 80);
                    case 78:
                        return var1;
                    case 80:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49442_ip = 158;
                            continue _fun49442
                        }
                    case 86:
                        var5 = var2.performance;
                        var4 = var5.now;
                        var5 = var4.bind(var5)();
                        var4 = _closure1_slot5;
                        var3 = var4.log;
                        var13 = var5 - var6;
                        var11 = var1.length;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var14 = 'asynchronously loaded in ';
                        var12 = 'ms (guilds: ';
                        var10 = ')';
                        var2 = var14[var7](var13, var12, var11, var10, var9);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 158:
                        return var1;
                    case 161:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var6.bind(var1)(var0);
        var _closure2_slot0 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun49444: for (var _fun49444_ip = 0;;) switch (_fun49444_ip) {
                case 0:
                    var5 = arg1;
                    var4 = this;
                    var2 = _closure1_slot6;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun49444_ip = 73;
                        continue _fun49444
                    }
                case 41:
                    var6 = var2.value;
                    var1 = var4.handleOneGuildCreate;
                    var1 = var1.bind(var4)(var6, var5);
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun49444_ip = 41;
                        continue _fun49444
                    }
                case 73:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleGuildCreate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = this;
            var2 = var3.handleOneGuildCreate;
            var0 = arg0;
            var1 = var0.guild;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleGuildUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = arg0;
            var4 = this;
            var3 = var4.replace;
            var1 = var0.guild;
            var2 = var1.id;
            var0 = var0.guild;
            var1 = var0.stickers;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = this;
            var2 = var3.delete;
            var0 = arg0;
            var0 = var0.guild;
            var1 = var0.id;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleGuildStickersUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = arg0;
            var4 = this;
            var3 = var4.replace;
            var2 = var0.guildId;
            var1 = var0.stickers;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleBackgroundSync';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var5 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var2 = var5.promisesForBackgroundSyncToWaitOn;
            var1 = var2.push;
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.all;
            var6 = var5.stickers;
            var5 = var6.map;
            var0 = function(arg0) { // Environment: var0
                _fun49450: for (var _fun49450_ip = 0;;) switch (_fun49450_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.dataMode;
                        var0 = 'unavailable';
                        if (!(var0 !== var2)) {
                            _fun49450_ip = 305;
                            continue _fun49450
                        }
                    case 20:
                        var2 = var1.dataMode;
                        var0 = 'full';
                        if (!(var0 !== var2)) {
                            _fun49450_ip = 201;
                            continue _fun49450
                        }
                    case 37:
                        var0 = var1.updatedEntities;
                        var0 = var0.length;
                        var3 = 0;
                        var0 = var0 > var3;
                        if (var0) {
                            _fun49450_ip = 72;
                            continue _fun49450
                        }
                    case 57:
                        var2 = var1.deletedEntityIds;
                        var2 = var2.length;
                        var0 = var2 > var3;
                    case 72:
                        if (!var0) {
                            _fun49450_ip = 301;
                            continue _fun49450
                        }
                    case 78:
                        var3 = _closure1_slot5;
                        var2 = var3.verbose;
                        var0 = var1.updatedEntities;
                        var14 = var0.length;
                        var0 = var1.deletedEntityIds;
                        var12 = var0.length;
                        var10 = var1.guildId;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var6 = var0.concat;
                        var15 = 'Updating ';
                        var13 = ' and deleting ';
                        var11 = ' stickers for ';
                        var0 = var15[var6](var14, var13, var12, var11, var10, var9);
                        var0 = var2.bind(var3)(var0);
                        var6 = _closure3_slot0;
                        var5 = var6.update;
                        var14 = var1.guildId;
                        var13 = var1.updatedEntities;
                        var12 = var1.deletedEntityIds;
                        var11 = _closure3_slot1;
                        var15 = var6;
                        var0 = var15[var5](var14, var13, var12, var11, var10);
                        _fun49450_ip = 301;
                        continue _fun49450;
                    case 201:
                        var3 = _closure1_slot5;
                        var2 = var3.verbose;
                        var0 = var1.entities;
                        var7 = var0.length;
                        var6 = var1.guildId;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var5 = var0.concat;
                        var4 = 'Replacing ';
                        var0 = ' stickers for ';
                        var0 = var5.bind(var4)(var7, var0, var6);
                        var0 = var2.bind(var3)(var0);
                        var4 = _closure3_slot0;
                        var3 = var4.replace;
                        var2 = var1.guildId;
                        var1 = var1.entities;
                        var0 = _closure3_slot1;
                        var0 = var3.bind(var4)(var2, var1, var0);
                    case 301:
                        var0 = undefined;
                        return var0;
                    case 305:
                        var0 = global;
                        var1 = var0.Promise;
                        var0 = var1.resolve;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var0 = var5.bind(var6)(var0);
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleOneGuildCreate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun49451: for (var _fun49451_ip = 0;;) switch (_fun49451_ip) {
                case 0:
                    var0 = arg0;
                    var4 = arg1;
                    var3 = this;
                    var2 = var0.id;
                    var0 = var0.stickers;
                    var5 = var0.op;
                    var1 = 'full_sync';
                    if (!(var1 !== var5)) {
                        _fun49451_ip = 76;
                        continue _fun49451
                    }
                case 35:
                    var1 = 'update';
                    if (!(var1 === var5)) {
                        _fun49451_ip = 93;
                        continue _fun49451
                    }
                case 43:
                    var6 = var3.update;
                    var9 = var0.writes;
                    var8 = var0.deletes;
                    var11 = var3;
                    var10 = var2;
                    var7 = var4;
                    var1 = var11[var6](var10, var9, var8, var7, var6);
                    _fun49451_ip = 93;
                    continue _fun49451;
                case 76:
                    var1 = var3.replace;
                    var0 = var0.items;
                    var0 = var1.bind(var3)(var2, var0, var4);
                case 93:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'replace';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.stickersTransaction;
            var1 = arg2;
            var4 = var2.bind(var3)(var1);
            var3 = var4.replaceAll;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'delete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.stickersTransaction;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.delete;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'update';
        var4.key = var6;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun49455: for (var _fun49455_ip = 0;;) switch (_fun49455_ip) {
                case 0:
                    var5 = arg0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.stickersTransaction;
                    var2 = arg3;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.putAll;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var5, var2);
                    var2 = _closure1_slot6;
                    var1 = arg2;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun49455_ip = 112;
                        continue _fun49455
                    }
                case 81:
                    var6 = var2.value;
                    var1 = var4.delete;
                    var1 = var1.bind(var4)(var5, var6);
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun49455_ip = 81;
                        continue _fun49455
                    }
                case 112:
                    return var0;
            }
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 5;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/GuildStickers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 3, 1637, 2]);