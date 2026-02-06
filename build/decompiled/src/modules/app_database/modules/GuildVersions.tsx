// modules/app_database/modules/GuildVersions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun93305: for (var _fun93305_ip = 0;;) switch (_fun93305_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93305_ip = 46;
                    continue _fun93305
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93305_ip = 55;
                    continue _fun93305
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93305_ip = 345;
                    continue _fun93305
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93305_ip = 323;
                    continue _fun93305
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93305_ip = 283;
                    continue _fun93305
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93305_ip = 270;
                    continue _fun93305
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
                    _fun93305_ip = 163;
                    continue _fun93305
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93305_ip = 179;
                    continue _fun93305
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93305_ip = 249;
                    continue _fun93305
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93305_ip = 249;
                    continue _fun93305
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93305_ip = 234;
                    continue _fun93305
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93305_ip = 247;
                    continue _fun93305
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93305_ip = 265;
                continue _fun93305;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93305_ip = 283;
                continue _fun93305;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93305_ip = 323;
                    continue _fun93305
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
                    _fun93305_ip = 330;
                    continue _fun93305
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93306: for (var _fun93306_ip = 0;;) switch (_fun93306_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93306_ip = 56;
                                continue _fun93306
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
                            _fun93306_ip = 67;
                            continue _fun93306;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun93307: for (var _fun93307_ip = 0;;) switch (_fun93307_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93307_ip = 23;
                    continue _fun93307
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93307_ip = 33;
                    continue _fun93307
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
                    _fun93307_ip = 70;
                    continue _fun93307
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93307_ip = 55;
                    continue _fun93307
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'GuildVersions';
    var12 = var4;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot8 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot5;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = global;
            var4 = var1.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var2.pending = var4;
            var1 = var1.Map;
            var4 = var1.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var1
                }
            });
            var8 = var4;
            var1 = new var8[var1](var7);
            var1 = var1 instanceof Object ? var1 : var4;
            var2.committed = var1;
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
                var2 = var3.handleChannelCreate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_CREATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleChannelDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_DELETE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleChannelUpdates;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_UPDATES = var4;
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
                var2 = var3.handleGuildEmojisUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_EMOJIS_UPDATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildRoleChange;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_ROLE_CREATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildRoleDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_ROLE_DELETE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildRoleChange;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_ROLE_UPDATE = var4;
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
        var1 = 'getCommittedVersions';
        var4.key = var1;
        var6 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun93324: for (var _fun93324_ip = 0;;) switch (_fun93324_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93324_ip = 177;
                            continue _fun93324
                        }
                    case 10:
                        var4 = undefined;
                        var1 = undefined;
                        var5 = undefined;
                    case 16: // try_start_0
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 6;
                        var2 = var6[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.guildVersions;
                        var2 = var2.bind(var3)();
                        var1 = var2;
                        var6 = null;
                        if (!(var6 != var2)) {
                            _fun93324_ip = 141;
                            continue _fun93324
                        }
                    case 58:
                        var2 = var1;
                        var1 = var2.getMany;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 75);
                    case 73:
                        return var1;
                    case 75:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93324_ip = 138;
                            continue _fun93324
                        }
                    case 81:
                        var3 = var1.map;
                        var2 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var2 = var1.id;
                            var0 = new Array(2);
                            var0[0] = var2;
                            var1 = var1.version;
                            var0[1] = var1;
                            return var0;
                        };
                        var2 = var3.bind(var1)(var2);
                        var5 = var2;
                        var3 = global;
                        var4 = var3.Object;
                        var3 = var4.fromEntries;
                        if (!(var6 == var2)) {
                            _fun93324_ip = 127;
                            continue _fun93324
                        }
                    case 121:
                        var2 = new Array(0);
                        _fun93324_ip = 130;
                        continue _fun93324;
                    case 127:
                        var2 = var5;
                    case 130:
                        var2 = var3.bind(var4)(var2);
                    case 135: // try_end0
                        return var2;
                    case 138:
                        return var1;
                    case 141:
                        var1 = {};
                        return var1;
                    case 146: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot8;
                        var2 = var3.warn;
                        var1 = "couldn't load guild versions";
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = {};
                        return var1;
                    case 177:
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
        var0 = new Array(20);
        var0[0] = var4;
        var4 = {};
        var6 = 'remove';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = this;
            var1 = var2.deleteWith;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var1 = var2.commit;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleBackgroundSync';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93328: for (var _fun93328_ip = 0;;) switch (_fun93328_ip) {
                case 0:
                    var3 = arg1;
                    var2 = this;
                    var4 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var7 = var4.bind(var0)(var1);
                    var4 = var7.bind(var0)();
                    var1 = var4.done;
                    var6 = null;
                    var5 = 'unavailable';
                    if (var1) {
                        _fun93328_ip = 142;
                        continue _fun93328
                    }
                case 47:
                    var1 = var4.value;
                    var9 = var1.data_mode;
                    if (!(var5 !== var9)) {
                        _fun93328_ip = 87;
                        continue _fun93328
                    }
                case 62:
                    var11 = var2.updateWith;
                    var10 = var1.id;
                    var9 = new Array(1);
                    var9[0] = var1;
                    var9 = var11.bind(var2)(var10, var9);
                case 87:
                    var11 = _closure1_slot7;
                    var10 = var11.getGuild;
                    var9 = var1.id;
                    var9 = var10.bind(var11)(var9);
                    if (!(var6 == var9)) {
                        _fun93328_ip = 127;
                        continue _fun93328
                    }
                case 110:
                    var9 = var2.remove;
                    var1 = var1.id;
                    var1 = var9.bind(var2)(var1, var3);
                case 127:
                    var9 = var7.bind(var0)();
                    var1 = var9.done;
                    var4 = var9;
                    if (!var1) {
                        _fun93328_ip = 47;
                        continue _fun93328
                    }
                case 142:
                    var1 = var2.commit;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93329: for (var _fun93329_ip = 0;;) switch (_fun93329_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.reset;
                    var0 = var0.bind(var3)();
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93329_ip = 93;
                        continue _fun93329
                    }
                case 48:
                    var7 = var2.value;
                    var6 = var3.updateWith;
                    var5 = var7.id;
                    var1 = new Array(1);
                    var1[0] = var7;
                    var1 = var6.bind(var3)(var5, var1);
                    var5 = var4.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun93329_ip = 48;
                        continue _fun93329
                    }
                case 93:
                    var2 = var3.commit;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleGuildCreate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93330: for (var _fun93330_ip = 0;;) switch (_fun93330_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var6 = function arg0() {
                        _fun93331: for (var _fun93331_ip = 0;;) switch (_fun93331_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.op;
                                var1 = 'full_sync';
                                if (!(var1 !== var2)) {
                                    _fun93331_ip = 72;
                                    continue _fun93331
                                }
                            case 18:
                                var1 = 'update';
                                if (!(var1 !== var2)) {
                                    _fun93331_ip = 64;
                                    continue _fun93331
                                }
                            case 26:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 7;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.assertNever;
                                var2 = var2.bind(var3)(var0);
                                return var1;
                            case 64:
                                var1 = var0.writes;
                                return var1;
                            case 72:
                                var0 = var0.items;
                                return var0;
                        }
                    };
                    var5 = var0.guild;
                    var0 = var0.guild;
                    var4 = var0.id;
                    var1 = var3.updateWith;
                    var0 = new Array(1);
                    var0[0] = var5;
                    var0 = var1.bind(var3)(var4, var0);
                    var2 = var3.updateWith;
                    var1 = var5.emojis;
                    var0 = undefined;
                    var1 = var6.bind(var0)(var1);
                    var1 = var2.bind(var3)(var4, var1);
                    var2 = var3.updateWith;
                    var1 = var5.stickers;
                    var1 = var6.bind(var0)(var1);
                    var1 = var2.bind(var3)(var4, var1);
                    var2 = var3.updateWith;
                    var1 = var5.channels;
                    var1 = var6.bind(var0)(var1);
                    var1 = var2.bind(var3)(var4, var1);
                    var2 = var3.updateWith;
                    var1 = global;
                    var8 = var1.Array;
                    var7 = var8.isArray;
                    var6 = var5.roles;
                    var6 = var7.bind(var8)(var6);
                    if (var6) {
                        _fun93330_ip = 178;
                        continue _fun93330
                    }
                case 154:
                    var7 = var1.Object;
                    var6 = var7.values;
                    var1 = var5.roles;
                    var1 = var6.bind(var7)(var1);
                    _fun93330_ip = 184;
                    continue _fun93330;
                case 178:
                    var1 = var5.roles;
                case 184:
                    var1 = var2.bind(var3)(var4, var1);
                    var2 = var3.commit;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleGuildUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93332: for (var _fun93332_ip = 0;;) switch (_fun93332_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var4 = var0.guild;
                    var0 = var0.guild;
                    var3 = var0.id;
                    var1 = var2.updateWith;
                    var0 = new Array(1);
                    var0[0] = var4;
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = var2.updateWith;
                    var0 = var4.emojis;
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = var2.updateWith;
                    var0 = var4.stickers;
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = var2.updateWith;
                    var0 = global;
                    var7 = var0.Array;
                    var6 = var7.isArray;
                    var5 = var4.roles;
                    var5 = var6.bind(var7)(var5);
                    if (var5) {
                        _fun93332_ip = 134;
                        continue _fun93332
                    }
                case 110:
                    var6 = var0.Object;
                    var5 = var6.values;
                    var0 = var4.roles;
                    var0 = var5.bind(var6)(var0);
                    _fun93332_ip = 140;
                    continue _fun93332;
                case 134:
                    var0 = var4.roles;
                case 140:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = var2.commit;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = this;
            var1 = var2.deleteWith;
            var0 = arg0;
            var0 = var0.guild;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            var1 = var2.commit;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleGuildRoleChange';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = arg0;
            var2 = this;
            var3 = var2.updateWith;
            var1 = var0.guildId;
            var4 = var0.role;
            var0 = new Array(1);
            var0[0] = var4;
            var0 = var3.bind(var2)(var1, var0);
            var1 = var2.commit;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleGuildRoleDelete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = arg0;
            var2 = this;
            var3 = var2.updateWith;
            var1 = var0.guildId;
            var4 = {};
            var0 = var0.version;
            var4.version = var0;
            var0 = new Array(1);
            var0[0] = var4;
            var0 = var3.bind(var2)(var1, var0);
            var1 = var2.commit;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleGuildEmojisUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = arg0;
            var2 = this;
            var3 = var2.updateWith;
            var1 = var0.guildId;
            var0 = var0.emojis;
            var0 = var3.bind(var2)(var1, var0);
            var1 = var2.commit;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleGuildStickersUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = arg0;
            var2 = this;
            var3 = var2.updateWith;
            var1 = var0.guildId;
            var0 = var0.stickers;
            var0 = var3.bind(var2)(var1, var0);
            var1 = var2.commit;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'handleChannelCreate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93338: for (var _fun93338_ip = 0;;) switch (_fun93338_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var1 = var0.channel;
                    var3 = var1.guild_id;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun93338_ip = 57;
                        continue _fun93338
                    }
                case 22:
                    var3 = var2.updateWith;
                    var1 = var0.channel;
                    var1 = var1.guild_id;
                    var4 = var0.channel;
                    var0 = new Array(1);
                    var0[0] = var4;
                    var0 = var3.bind(var2)(var1, var0);
                case 57:
                    var1 = var2.commit;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'handleChannelUpdates';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93339: for (var _fun93339_ip = 0;;) switch (_fun93339_ip) {
                case 0:
                    var3 = this;
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var0.channels;
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var2 = var5.bind(var0)();
                    var1 = var2.done;
                    var4 = null;
                    if (var1) {
                        _fun93339_ip = 94;
                        continue _fun93339
                    }
                case 40:
                    var8 = var2.value;
                    var1 = var8.guild_id;
                    if (!(var4 != var1)) {
                        _fun93339_ip = 79;
                        continue _fun93339
                    }
                case 54:
                    var7 = var3.updateWith;
                    var6 = var8.guild_id;
                    var1 = new Array(1);
                    var1[0] = var8;
                    var1 = var7.bind(var3)(var6, var1);
                case 79:
                    var6 = var5.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun93339_ip = 40;
                        continue _fun93339
                    }
                case 94:
                    var2 = var3.commit;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'handleChannelDelete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93340: for (var _fun93340_ip = 0;;) switch (_fun93340_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var1 = var0.channel;
                    var3 = var1.guild_id;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun93340_ip = 57;
                        continue _fun93340
                    }
                case 22:
                    var3 = var2.updateWith;
                    var1 = var0.channel;
                    var1 = var1.guild_id;
                    var4 = var0.channel;
                    var0 = new Array(1);
                    var0[0] = var4;
                    var0 = var3.bind(var2)(var1, var0);
                case 57:
                    var1 = var2.commit;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.reset;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'reset';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = global;
            var2 = var0.Map;
            var3 = var2.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var2
                }
            });
            var4 = var3;
            var2 = new var4[var2](var3);
            var2 = var2 instanceof Object ? var2 : var3;
            var1.committed = var2;
            var0 = var0.Map;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var4 = var2;
            var0 = new var4[var0](var3);
            var0 = var0 instanceof Object ? var0 : var2;
            var1.pending = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'deleteWith';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var3 = var0.pending;
            var2 = var3.set;
            var1 = arg0;
            var0 = null;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'updateWith';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93344: for (var _fun93344_ip = 0;;) switch (_fun93344_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var0 = this;
                    var1 = var4.length;
                    var6 = 0;
                    if (!(var6 !== var1)) {
                        _fun93344_ip = 132;
                        continue _fun93344
                    }
                case 20:
                    var1 = global;
                    var5 = var1.Math;
                    var2 = var5.max;
                    var7 = var0.committed;
                    var1 = var7.get;
                    var7 = var1.bind(var7)(var3);
                    var8 = null;
                    var9 = var8 != var7;
                    var1 = 0;
                    if (!var9) {
                        _fun93344_ip = 63;
                        continue _fun93344
                    }
                case 60:
                    var1 = var7;
                case 63:
                    var9 = var0.pending;
                    var7 = var9.get;
                    var7 = var7.bind(var9)(var3);
                    var8 = var8 != var7;
                    var6 = 0;
                    if (!var8) {
                        _fun93344_ip = 91;
                        continue _fun93344
                    }
                case 88:
                    var6 = var7;
                case 91:
                    var1 = var2.bind(var5)(var1, var6);
                    var2 = var0.computeLatestVersion;
                    var2 = var2.bind(var0)(var1, var4);
                    if (!(var2 > var1)) {
                        _fun93344_ip = 132;
                        continue _fun93344
                    }
                case 115:
                    var1 = var0.pending;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var3, var2);
                case 132:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'computeLatestVersion';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93345: for (var _fun93345_ip = 0;;) switch (_fun93345_ip) {
                case 0:
                    var0 = arg0;
                    var2 = _closure1_slot9;
                    var8 = undefined;
                    var1 = arg1;
                    var7 = var2.bind(var8)(var1);
                    var2 = var7.bind(var8)();
                    var1 = var2.done;
                    var6 = global;
                    var5 = null;
                    var3 = var2;
                    var2 = var0;
                    var0 = var2;
                    if (var1) {
                        _fun93345_ip = 103;
                        continue _fun93345
                    }
                case 45:
                    var1 = var3.value;
                    var10 = var6.Math;
                    var9 = var10.max;
                    var11 = var1.version;
                    var12 = var5 != var11;
                    var1 = 0;
                    if (!var12) {
                        _fun93345_ip = 79;
                        continue _fun93345
                    }
                case 76:
                    var1 = var11;
                case 79:
                    var2 = var9.bind(var10)(var2, var1);
                    var10 = var7.bind(var8)();
                    var1 = var10.done;
                    var3 = var10;
                    var0 = var2;
                    if (!var1) {
                        _fun93345_ip = 45;
                        continue _fun93345
                    }
                case 103:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'commit';
        var4.key = var6;
        var5 = function arg0() {
            _fun93346: for (var _fun93346_ip = 0;;) switch (_fun93346_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.pending;
                    var1 = var1.size;
                    var10 = 0;
                    if (!(var1 > var10)) {
                        _fun93346_ip = 222;
                        continue _fun93346
                    }
                case 23:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var8 = undefined;
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.guildVersionsTransaction;
                    var1 = arg0;
                    var7 = var2.bind(var3)(var1);
                    var2 = _closure1_slot9;
                    var1 = var0.pending;
                    var6 = var2.bind(var8)(var1);
                    var2 = var6.bind(var8)();
                    var1 = var2.done;
                    var5 = 2;
                    var4 = 1;
                    var3 = null;
                    if (var1) {
                        _fun93346_ip = 206;
                        continue _fun93346
                    }
                case 97:
                    var11 = var2.value;
                    var1 = _closure1_slot3;
                    var1 = var1.bind(var8)(var11, var5);
                    var13 = var1[var10];
                    var12 = var1[var4];
                    if (!(var3 == var12)) {
                        _fun93346_ip = 152;
                        continue _fun93346
                    }
                case 124:
                    var1 = var7.delete;
                    var1 = var1.bind(var7)(var13);
                    var11 = var0.committed;
                    var1 = var11.delete;
                    var1 = var1.bind(var11)(var13);
                    _fun93346_ip = 191;
                    continue _fun93346;
                case 152:
                    var11 = var7.put;
                    var1 = {};
                    var1.id = var13;
                    var1.version = var12;
                    var1 = var11.bind(var7)(var1);
                    var11 = var0.committed;
                    var1 = var11.set;
                    var1 = var1.bind(var11)(var13, var12);
                case 191:
                    var11 = var6.bind(var8)();
                    var1 = var11.done;
                    var2 = var11;
                    if (!var1) {
                        _fun93346_ip = 97;
                        continue _fun93346
                    }
                case 206:
                    var1 = var0.pending;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                case 222:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[19] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var4;
    var3 = new var12[var1](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/GuildVersions.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.GuildVersions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 1410, 3, 1646, 1304, 2]);