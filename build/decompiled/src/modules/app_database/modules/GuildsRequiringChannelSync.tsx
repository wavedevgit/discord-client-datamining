// modules/app_database/modules/GuildsRequiringChannelSync.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        _fun93760: for (var _fun93760_ip = 0;;) switch (_fun93760_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93760_ip = 46;
                    continue _fun93760
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93760_ip = 55;
                    continue _fun93760
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93760_ip = 345;
                    continue _fun93760
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93760_ip = 323;
                    continue _fun93760
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93760_ip = 283;
                    continue _fun93760
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93760_ip = 270;
                    continue _fun93760
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
                    _fun93760_ip = 163;
                    continue _fun93760
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93760_ip = 179;
                    continue _fun93760
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93760_ip = 249;
                    continue _fun93760
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93760_ip = 249;
                    continue _fun93760
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93760_ip = 234;
                    continue _fun93760
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93760_ip = 247;
                    continue _fun93760
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93760_ip = 265;
                continue _fun93760;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93760_ip = 283;
                continue _fun93760;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93760_ip = 323;
                    continue _fun93760
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
                    _fun93760_ip = 330;
                    continue _fun93760
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93761: for (var _fun93761_ip = 0;;) switch (_fun93761_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93761_ip = 56;
                                continue _fun93761
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
                            _fun93761_ip = 67;
                            continue _fun93761;
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
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun93762: for (var _fun93762_ip = 0;;) switch (_fun93762_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93762_ip = 23;
                    continue _fun93762
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93762_ip = 33;
                    continue _fun93762
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
                    _fun93762_ip = 70;
                    continue _fun93762
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93762_ip = 55;
                    continue _fun93762
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var7 = 10;
    var7 = var5[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.combine;
    var7 = var3.VIEW_CHANNEL;
    var3 = var3.ADMINISTRATOR;
    var3 = var8.bind(var9)(var7, var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = 'GuildsRequiringChannelSync';
    var13 = var6;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'new_guild';
    var3.NewGuild = var6;
    var6 = 'ownership_change';
    var3.OwnershipChange = var6;
    var6 = 'role_permissions';
    var3.RolePermissions = var6;
    var6 = 'member_roles';
    var3.MemberRoles = var6;
    var6 = 'unknown';
    var3.Unknown = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'connection_open';
    var3.ConnectionOpen = var6;
    var6 = 'guild_create';
    var3.GuildCreate = var6;
    var6 = 'background_sync';
    var3.BackgroundSync = var6;
    var _closure1_slot16 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot4;
            var1 = _closure2_slot0;
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
                var2 = var3.handleChannelSync;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_SYNC = var4;
            var3 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleUnmarkResyncGuilds;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.UNMARK_RESYNC_GUILDS = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getAll';
        var0.key = var1;
        var1 = function() {
            _fun93770: for (var _fun93770_ip = 0;;) switch (_fun93770_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.guildsRequiringChannelSync;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun93770_ip = 53;
                        continue _fun93770
                    }
                case 41:
                    var0 = var1.getMany;
                    var0 = var0.bind(var1)();
                    _fun93770_ip = 76;
                    continue _fun93770;
                case 53:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.resolve;
                    var1 = new Array(0);
                    var0 = var2.bind(var3)(var1);
                case 76:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(19);
        var1[0] = var0;
        var0 = {};
        var5 = 'handleConnectionOpen';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93771: for (var _fun93771_ip = 0;;) switch (_fun93771_ip) {
                case 0:
                    var6 = arg1;
                    var5 = this;
                    var0 = arg0;
                    var2 = var0.guilds;
                    var1 = _closure1_slot17;
                    var0 = undefined;
                    var3 = var1.bind(var0)(var2);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93771_ip = 84;
                        continue _fun93771
                    }
                case 41:
                    var8 = var2.value;
                    var7 = var5.handleGuild;
                    var1 = _closure1_slot16;
                    var1 = var1.ConnectionOpen;
                    var1 = var7.bind(var5)(var8, var6, var1);
                    var7 = var3.bind(var0)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun93771_ip = 41;
                        continue _fun93771
                    }
                case 84:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleGuildCreate';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93772: for (var _fun93772_ip = 0;;) switch (_fun93772_ip) {
                case 0:
                    var4 = this;
                    var0 = arg0;
                    var3 = var0.guild;
                    var1 = var3.unavailable;
                    var0 = true;
                    if (!(var0 !== var1)) {
                        _fun93772_ip = 52;
                        continue _fun93772
                    }
                case 23:
                    var2 = var4.handleGuild;
                    var0 = _closure1_slot16;
                    var1 = var0.GuildCreate;
                    var0 = arg1;
                    var0 = var2.bind(var4)(var3, var0, var1);
                case 52:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'handleBackgroundSync';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93773: for (var _fun93773_ip = 0;;) switch (_fun93773_ip) {
                case 0:
                    var5 = arg1;
                    var4 = this;
                    var0 = arg0;
                    var2 = var0.guilds;
                    var1 = _closure1_slot17;
                    var0 = undefined;
                    var3 = var1.bind(var0)(var2);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93773_ip = 75;
                        continue _fun93773
                    }
                case 41:
                    var6 = var2.value;
                    var1 = var4.handleBackgroundSyncGuild;
                    var1 = var1.bind(var4)(var6, var5);
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun93773_ip = 41;
                        continue _fun93773
                    }
                case 75:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'handleUnmarkResyncGuilds';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93774: for (var _fun93774_ip = 0;;) switch (_fun93774_ip) {
                case 0:
                    var7 = arg1;
                    var5 = this;
                    var0 = arg0;
                    var6 = var0.guildIds;
                    var2 = _closure1_slot17;
                    var0 = undefined;
                    var4 = var2.bind(var0)(var6);
                    var3 = var4.bind(var0)();
                    var2 = var3.done;
                    if (var2) {
                        _fun93774_ip = 73;
                        continue _fun93774
                    }
                case 41:
                    var8 = var3.value;
                    var2 = var5.unmarkGuildForResync;
                    var2 = var2.bind(var5)(var8, var7);
                    var8 = var4.bind(var0)();
                    var2 = var8.done;
                    var3 = var8;
                    if (!var2) {
                        _fun93774_ip = 41;
                        continue _fun93774
                    }
                case 73:
                    var3 = _closure1_slot14;
                    var2 = var3.verbose;
                    var1 = global;
                    var5 = var1.JSON;
                    var4 = var5.stringify;
                    var5 = var4.bind(var5)(var6);
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'Unmarked guilds ';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'rolesHaveVisibilityChanges';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun93775: for (var _fun93775_ip = 0;;) switch (_fun93775_ip) {
                case 0:
                    var14 = arg0;
                    var13 = arg1;
                    var12 = arg2;
                    var10 = var13;
                    var6 = undefined;
                    var4 = 10;
                    var3 = null;
                    var2 = undefined;
                    var1 = undefined;
                    for (var7 in var10)
                        case 37: {
                            case 49: var0 = var7;
                            var15 = var12.has;
                            var15 = var15.bind(var12)(var0);
                            if (!var15) {
                                _fun93775_ip = 37;
                                continue _fun93775
                            }
                            case 65: var2 = var13[var0];
                            var1 = var14[var0];
                            if (!(var3 != var1)) {
                                _fun93775_ip = 169;
                                continue _fun93775
                            }
                            case 77: var15 = _closure1_slot2;
                            var0 = _closure1_slot3;
                            var16 = var0[var4];
                            var18 = var15.bind(var6)(var16);
                            var17 = var18.filter;
                            var16 = var1.permissions;
                            var20 = _closure1_slot13;
                            var17 = var17.bind(var18)(var16, var20);
                            var16 = var0[var4];
                            var19 = var15.bind(var6)(var16);
                            var18 = var19.filter;
                            var16 = var2.permissions;
                            var16 = var18.bind(var19)(var16, var20);
                            var0 = var0[var4];
                            var15 = var15.bind(var6)(var0);
                            var0 = var15.equals;
                            var0 = var0.bind(var15)(var17, var16);
                            if (var0) {
                                _fun93775_ip = 37;
                                continue _fun93775
                            }
                            case 165: var0 = true;
                            return var0;
                            case 169: var0 = true;
                            return var0;
                        }
                case 173:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'processMemberRoleIds';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93776: for (var _fun93776_ip = 0;;) switch (_fun93776_ip) {
                case 0:
                    var5 = arg0;
                    var2 = arg1;
                    var1 = var5.length;
                    var0 = var2.length;
                    if (!(var1 === var0)) {
                        _fun93776_ip = 203;
                        continue _fun93776
                    }
                case 23:
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var1;
                    var0 = new var9[var0](var8);
                    var1 = var0 instanceof Object ? var0 : var1;
                    var3 = _closure1_slot17;
                    var4 = undefined;
                    var6 = var3.bind(var4)(var5);
                    var5 = var6.bind(var4)();
                    var3 = var5.done;
                    if (var3) {
                        _fun93776_ip = 107;
                        continue _fun93776
                    }
                case 77:
                    var7 = var5.value;
                    var3 = var1.add;
                    var3 = var3.bind(var1)(var7);
                    var7 = var6.bind(var4)();
                    var3 = var7.done;
                    var5 = var7;
                    if (!var3) {
                        _fun93776_ip = 77;
                        continue _fun93776
                    }
                case 107:
                    var0 = _closure1_slot17;
                    var3 = var0.bind(var4)(var2);
                    var2 = var3.bind(var4)();
                    var0 = var2.done;
                    if (var0) {
                        _fun93776_ip = 187;
                        continue _fun93776
                    }
                case 128:
                    var5 = var2.value;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var5);
                    if (var0) {
                        _fun93776_ip = 162;
                        continue _fun93776
                    }
                case 146:
                    var0 = {
                        'rolesAreDifferent': true,
                        'allRoleIds': null
                    };
                    return var0;
                case 162:
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var5);
                    var5 = var3.bind(var4)();
                    var0 = var5.done;
                    var2 = var5;
                    if (!var0) {
                        _fun93776_ip = 128;
                        continue _fun93776
                    }
                case 187:
                    var0 = {};
                    var2 = false;
                    var0.rolesAreDifferent = var2;
                    var0.allRoleIds = var1;
                    return var0;
                case 203:
                    var0 = {
                        'rolesAreDifferent': true,
                        'allRoleIds': null
                    };
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'userBecameGuildOwner';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun93777: for (var _fun93777_ip = 0;;) switch (_fun93777_ip) {
                case 0:
                    var3 = arg2;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun93777_ip = 32;
                        continue _fun93777
                    }
                case 12:
                    var1 = arg1;
                    var1 = var1 === var3;
                    if (!var1) {
                        _fun93777_ip = 29;
                        continue _fun93777
                    }
                case 22:
                    var2 = arg0;
                    var1 = var2 !== var3;
                case 29:
                    var0 = var1;
                case 32:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'handleBackgroundSyncGuild';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93778: for (var _fun93778_ip = 0;;) switch (_fun93778_ip) {
                case 0:
                    var1 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var6 = _closure1_slot8;
                    var3 = var6.getSelfMember;
                    var2 = var1.id;
                    var11 = var3.bind(var6)(var2);
                    var7 = null;
                    if (!(var7 == var11)) {
                        _fun93778_ip = 58;
                        continue _fun93778
                    }
                case 38:
                    var6 = _closure1_slot8;
                    var3 = var6.getCachedSelfMember;
                    var2 = var1.id;
                    var11 = var3.bind(var6)(var2);
                case 58:
                    if (!(var7 != var11)) {
                        _fun93778_ip = 544;
                        continue _fun93778
                    }
                case 65:
                    var3 = var1.data_mode;
                    var2 = 'partial';
                    if (!(var2 !== var3)) {
                        _fun93778_ip = 118;
                        continue _fun93778
                    }
                case 79:
                    var3 = var1.data_mode;
                    var2 = 'full';
                    if (!(var2 === var3)) {
                        _fun93778_ip = 544;
                        continue _fun93778
                    }
                case 96:
                    var3 = var4.unmarkGuildForResync;
                    var2 = var1.id;
                    var2 = var3.bind(var4)(var2, var5);
                    _fun93778_ip = 544;
                    continue _fun93778;
                case 118:
                    var2 = var4.backgroundSyncGuildHasObfuscatedChannels;
                    var2 = var2.bind(var4)(var1);
                    if (var2) {
                        _fun93778_ip = 156;
                        continue _fun93778
                    }
                case 134:
                    var3 = var4.unmarkGuildForResync;
                    var2 = var1.id;
                    var2 = var3.bind(var4)(var2, var5);
                    _fun93778_ip = 544;
                    continue _fun93778;
                case 156:
                    var2 = _closure1_slot15;
                    var3 = var2.Unknown;
                    var9 = {};
                    var2 = var1.partial_updates;
                    var2 = var2.roles;
                    if (!(var7 != var2)) {
                        _fun93778_ip = 301;
                        continue _fun93778
                    }
                case 184:
                    var6 = _closure1_slot17;
                    var2 = var1.partial_updates;
                    var2 = var2.roles;
                    var12 = undefined;
                    var10 = var6.bind(var12)(var2);
                    var6 = var10.bind(var12)();
                    var2 = var6.done;
                    var8 = 10;
                    if (var2) {
                        _fun93778_ip = 301;
                        continue _fun93778
                    }
                case 222:
                    var14 = var6.value;
                    var13 = var14.id;
                    var2 = {};
                    var15 = var14.id;
                    var2.id = var15;
                    var16 = _closure1_slot2;
                    var15 = _closure1_slot3;
                    var15 = var15[var8];
                    var16 = var16.bind(var12)(var15);
                    var15 = var16.deserialize;
                    var14 = var14.permissions;
                    var14 = var15.bind(var16)(var14);
                    var2.permissions = var14;
                    var9[var13] = var2;
                    var13 = var10.bind(var12)();
                    var2 = var13.done;
                    var6 = var13;
                    if (!var2) {
                        _fun93778_ip = 222;
                        continue _fun93778
                    }
                case 301:
                    var2 = var1.properties;
                    var12 = var4.userBecameGuildOwner;
                    var10 = _closure1_slot10;
                    var8 = var10.getGuild;
                    var6 = var1.id;
                    var6 = var8.bind(var10)(var6);
                    var13 = var7 == var6;
                    var8 = undefined;
                    if (var13) {
                        _fun93778_ip = 347;
                        continue _fun93778
                    }
                case 341:
                    var8 = var6.ownerId;
                case 347:
                    var13 = var7 == var2;
                    var6 = undefined;
                    if (var13) {
                        _fun93778_ip = 362;
                        continue _fun93778
                    }
                case 356:
                    var6 = var2.owner_id;
                case 362:
                    var13 = _closure1_slot6;
                    var2 = var13.getId;
                    var2 = var2.bind(var13)();
                    var6 = var12.bind(var4)(var8, var6, var2);
                    if (var6) {
                        _fun93778_ip = 494;
                        continue _fun93778
                    }
                case 386:
                    var12 = _closure1_slot9;
                    var8 = var12.getUnsafeMutableRoles;
                    var2 = var1.id;
                    var8 = var8.bind(var12)(var2);
                    var2 = global;
                    var2 = var2.Set;
                    var12 = var7 == var11;
                    var10 = undefined;
                    if (var12) {
                        _fun93778_ip = 429;
                        continue _fun93778
                    }
                case 423:
                    var10 = var11.roles;
                case 429:
                    if (!(var7 == var10)) {
                        _fun93778_ip = 437;
                        continue _fun93778
                    }
                case 433:
                    var10 = new Array(0);
                case 437:
                    var7 = var2.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var2
                        }
                    });
                    var21 = var7;
                    var20 = var10;
                    var2 = new var21[var2](var20, var19);
                    var7 = var2 instanceof Object ? var2 : var7;
                    var2 = var4.rolesHaveVisibilityChanges;
                    var7 = var2.bind(var4)(var8, var9, var7);
                    var2 = var7;
                    if (!var7) {
                        _fun93778_ip = 507;
                        continue _fun93778
                    }
                case 479:
                    var8 = _closure1_slot15;
                    var3 = var8.RolePermissions;
                    var2 = var7;
                    _fun93778_ip = 507;
                    continue _fun93778;
                case 494:
                    var7 = _closure1_slot15;
                    var3 = var7.OwnershipChange;
                    var2 = var6;
                case 507:
                    if (!var2) {
                        _fun93778_ip = 544;
                        continue _fun93778
                    }
                case 510:
                    var2 = var4.markGuildForResync;
                    var20 = var1.id;
                    var0 = _closure1_slot16;
                    var18 = var0.BackgroundSync;
                    var21 = var4;
                    var19 = var5;
                    var17 = var3;
                    var0 = var21[var2](var20, var19, var18, var17, var16);
                case 544:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'handleGuild';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun93779: for (var _fun93779_ip = 0;;) switch (_fun93779_ip) {
                case 0:
                    var0 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var1 = var0.channels;
                    var2 = var1.op;
                    var1 = 'full_sync';
                    if (!(var1 !== var2)) {
                        _fun93779_ip = 48;
                        continue _fun93779
                    }
                case 32:
                    var1 = var4.gatewayGuildHasObfuscatedChannels;
                    var1 = var1.bind(var4)(var0);
                    if (var1) {
                        _fun93779_ip = 70;
                        continue _fun93779
                    }
                case 48:
                    var2 = var4.unmarkGuildForResync;
                    var1 = var0.id;
                    var1 = var2.bind(var4)(var1, var5);
                    _fun93779_ip = 566;
                    continue _fun93779;
                case 70:
                    var1 = _closure1_slot15;
                    var1 = var1.Unknown;
                    var6 = _closure1_slot6;
                    var3 = var6.getId;
                    var12 = var3.bind(var6)();
                    var _closure3_slot0 = var12;
                    var7 = _closure1_slot10;
                    var6 = var7.getGuild;
                    var3 = var0.id;
                    var7 = var6.bind(var7)(var3);
                    var6 = null;
                    if (!(var6 == var7)) {
                        _fun93779_ip = 140;
                        continue _fun93779
                    }
                case 126:
                    var3 = _closure1_slot15;
                    var3 = var3.NewGuild;
                    var8 = true;
                    _fun93779_ip = 202;
                    continue _fun93779;
                case 140:
                    var11 = var4.userBecameGuildOwner;
                    var10 = var7.ownerId;
                    var13 = var0.properties;
                    var14 = var6 == var13;
                    var7 = undefined;
                    if (var14) {
                        _fun93779_ip = 173;
                        continue _fun93779
                    }
                case 167:
                    var7 = var13.owner_id;
                case 173:
                    var7 = var11.bind(var4)(var10, var7, var12);
                    var8 = var7;
                    var3 = var1;
                    if (!var7) {
                        _fun93779_ip = 202;
                        continue _fun93779
                    }
                case 189:
                    var1 = _closure1_slot15;
                    var3 = var1.OwnershipChange;
                    var8 = var7;
                case 202:
                    var7 = var3;
                    var10 = null;
                    if (var8) {
                        _fun93779_ip = 382;
                        continue _fun93779
                    }
                case 213:
                    var12 = _closure1_slot8;
                    var11 = var12.getSelfMember;
                    var1 = var0.id;
                    var1 = var11.bind(var12)(var1);
                    if (!(var6 == var1)) {
                        _fun93779_ip = 257;
                        continue _fun93779
                    }
                case 237:
                    var13 = _closure1_slot8;
                    var12 = var13.getCachedSelfMember;
                    var11 = var0.id;
                    var1 = var12.bind(var13)(var11);
                case 257:
                    var12 = var0.members;
                    var11 = var12.find;
                    var9 = function(arg0) { // Environment: var9
                        var0 = arg0;
                        var0 = var0.user;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var12 = var11.bind(var12)(var9);
                    var11 = var4.processMemberRoleIds;
                    if (!(var6 == var1)) {
                        _fun93779_ip = 298;
                        continue _fun93779
                    }
                case 292:
                    var9 = new Array(0);
                    _fun93779_ip = 304;
                    continue _fun93779;
                case 298:
                    var9 = var1.roles;
                case 304:
                    var13 = var6 == var12;
                    var1 = undefined;
                    if (var13) {
                        _fun93779_ip = 319;
                        continue _fun93779
                    }
                case 313:
                    var1 = var12.roles;
                case 319:
                    if (!(var6 == var1)) {
                        _fun93779_ip = 327;
                        continue _fun93779
                    }
                case 323:
                    var1 = new Array(0);
                case 327:
                    var1 = var11.bind(var4)(var9, var1);
                    var9 = var1.rolesAreDifferent;
                    var1 = var1.allRoleIds;
                    if (!var9) {
                        _fun93779_ip = 358;
                        continue _fun93779
                    }
                case 348:
                    var11 = _closure1_slot15;
                    var3 = var11.MemberRoles;
                case 358:
                    var11 = var6 != var1;
                    var8 = var9;
                    var7 = var3;
                    var10 = null;
                    if (!var11) {
                        _fun93779_ip = 382;
                        continue _fun93779
                    }
                case 373:
                    var8 = var9;
                    var7 = var3;
                    var10 = var1;
                case 382:
                    var3 = var7;
                    var1 = var8;
                    if (var1) {
                        _fun93779_ip = 536;
                        continue _fun93779
                    }
                case 394:
                    var1 = var8;
                    var3 = var7;
                    if (!(var6 != var10)) {
                        _fun93779_ip = 536;
                        continue _fun93779
                    }
                case 407:
                    var9 = _closure1_slot9;
                    var8 = var9.getUnsafeMutableRoles;
                    var6 = var0.id;
                    var9 = var8.bind(var9)(var6);
                    var8 = var0.roles;
                    var6 = global;
                    var6 = var6.Array;
                    var6 = var8 instanceof var6;
                    if (var6) {
                        _fun93779_ip = 456;
                        continue _fun93779
                    }
                case 448:
                    var8 = var0.roles;
                    _fun93779_ip = 501;
                    continue _fun93779;
                case 456:
                    var12 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var6 = 13;
                    var11 = var11[var6];
                    var6 = undefined;
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.fromServerArray;
                    var11 = var0.id;
                    var6 = var0.roles;
                    var8 = var12.bind(var13)(var11, var6);
                case 501:
                    var6 = var4.rolesHaveVisibilityChanges;
                    var6 = var6.bind(var4)(var9, var8, var10);
                    var3 = var7;
                    var1 = var6;
                    if (!var1) {
                        _fun93779_ip = 536;
                        continue _fun93779
                    }
                case 523:
                    var2 = _closure1_slot15;
                    var3 = var2.RolePermissions;
                    var1 = var6;
                case 536:
                    if (!var1) {
                        _fun93779_ip = 566;
                        continue _fun93779
                    }
                case 539:
                    var2 = var4.markGuildForResync;
                    var18 = var0.id;
                    var16 = arg2;
                    var19 = var4;
                    var17 = var5;
                    var15 = var3;
                    var0 = var19[var2](var18, var17, var16, var15, var14);
                case 566:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'handleChannelSync';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93781: for (var _fun93781_ip = 0;;) switch (_fun93781_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var2 = var0.guild_id;
                    var0 = var0.integrity_check;
                    if (var0) {
                        _fun93781_ip = 35;
                        continue _fun93781
                    }
                case 20:
                    var1 = var3.unmarkGuildForResync;
                    var0 = arg1;
                    var0 = var1.bind(var3)(var2, var0);
                case 35:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'markGuildForResync';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            var5 = arg0;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var0 = 14;
            var2 = var3[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var2);
            var2 = var4.v4;
            var4 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var6 = 15;
            var6 = var3[var6];
            var8 = var2.bind(var0)(var6);
            var7 = var8.track;
            var1 = _closure1_slot11;
            var6 = var1.GUILD_CHANNEL_RESYNC_REQUESTED;
            var1 = {};
            var1.guild_id = var5;
            var1.request_id = var4;
            var9 = arg2;
            var1.trigger = var9;
            var9 = arg3;
            var1.change_type = var9;
            var1 = var7.bind(var8)(var6, var1);
            var1 = 12;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.guildsRequiringChannelSyncTransaction;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.put;
            var1 = {};
            var1.id = var5;
            var1.requestId = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'unmarkGuildForResync';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.guildsRequiringChannelSyncTransaction;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.delete;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'gatewayGuildHasObfuscatedChannels';
        var0.key = var5;
        var5 = function arg0() {
            _fun93784: for (var _fun93784_ip = 0;;) switch (_fun93784_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = var0.channels;
                    var2 = var1.op;
                    var1 = 'full_sync';
                    if (!(var1 !== var2)) {
                        _fun93784_ip = 53;
                        continue _fun93784
                    }
                case 27:
                    var1 = var0.channels;
                    var2 = var1.writes;
                    var1 = var0.channels;
                    var4 = var1.deletes;
                    _fun93784_ip = 68;
                    continue _fun93784;
                case 53:
                    var1 = var0.channels;
                    var2 = var1.items;
                    var4 = new Array(0);
                case 68:
                    var1 = var3.guildHasStoredObfuscatedChannels;
                    var0 = var0.id;
                    var0 = var1.bind(var3)(var0, var4);
                    if (var0) {
                        _fun93784_ip = 99;
                        continue _fun93784
                    }
                case 88:
                    var1 = var3.anyChannelRecordsObfuscated;
                    var0 = var1.bind(var3)(var2);
                case 99:
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'backgroundSyncGuildHasObfuscatedChannels';
        var0.key = var5;
        var5 = function arg0() {
            _fun93785: for (var _fun93785_ip = 0;;) switch (_fun93785_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var2 = var0.data_mode;
                    var1 = 'partial';
                    if (!(var1 !== var2)) {
                        _fun93785_ip = 32;
                        continue _fun93785
                    }
                case 20:
                    var2 = var0.channels;
                    var4 = new Array(0);
                    _fun93785_ip = 80;
                    continue _fun93785;
                case 32:
                    var1 = var0.partial_updates;
                    var5 = var1.channels;
                    var6 = null;
                    if (!(var6 == var5)) {
                        _fun93785_ip = 54;
                        continue _fun93785
                    }
                case 50:
                    var5 = new Array(0);
                case 54:
                    var1 = var0.partial_updates;
                    var1 = var1.deleted_channel_ids;
                    if (!(var6 == var1)) {
                        _fun93785_ip = 74;
                        continue _fun93785
                    }
                case 70:
                    var1 = new Array(0);
                case 74:
                    var4 = var1;
                    var2 = var5;
                case 80:
                    var1 = var3.guildHasStoredObfuscatedChannels;
                    var0 = var0.id;
                    var0 = var1.bind(var3)(var0, var4);
                    if (var0) {
                        _fun93785_ip = 113;
                        continue _fun93785
                    }
                case 100:
                    var1 = var3.anyChannelsObfuscated;
                    var0 = var1.bind(var3)(var2);
                case 113:
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'guildHasStoredObfuscatedChannels';
        var0.key = var5;
        var5 = function arg0() {
            _fun93786: for (var _fun93786_ip = 0;;) switch (_fun93786_ip) {
                case 0:
                    var1 = arguments[1];
                    var2 = this;
                    var3 = undefined;
                    if (!(var1 === var3)) {
                        _fun93786_ip = 18;
                        continue _fun93786
                    }
                case 14:
                    var1 = new Array(0);
                case 18:
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot7;
                    var3 = var4.getMutableGuildChannelsForGuild;
                    var1 = arg0;
                    var4 = var3.bind(var4)(var1);
                    var1 = global;
                    var3 = var1.Object;
                    var1 = var3.values;
                    var3 = var1.bind(var3)(var4);
                    var1 = var3.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.indexOf;
                        var0 = arg0;
                        var0 = var0.id;
                        var1 = var1.bind(var2)(var0);
                        var0 = -1;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var1 = var1.bind(var3)(var0);
                    var0 = var2.anyChannelRecordsObfuscated;
                    var0 = var0.bind(var2)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'anyChannelRecordsObfuscated';
        var0.key = var5;
        var5 = function arg0() {
            var2 = arg0;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = var1.isObfuscated;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'anyChannelsObfuscated';
        var0.key = var5;
        var5 = function arg0() {
            var2 = arg0;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                _fun93791: for (var _fun93791_ip = 0;;) switch (_fun93791_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hasFlag;
                        var1 = arg0;
                        var4 = var1.flags;
                        var1 = null;
                        var5 = var1 != var4;
                        var1 = 0;
                        if (!var5) {
                            _fun93791_ip = 53;
                            continue _fun93791
                        }
                    case 50:
                        var1 = var4;
                    case 53:
                        var0 = _closure1_slot12;
                        var0 = var0.OBFUSCATED;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'resetInMemoryState';
        var0.key = var5;
        var4 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[18] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var13 = var3;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/GuildsRequiringChannelSync.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1216, 1372, 1683, 1676, 1410, 660, 1379, 483, 484, 3, 1648, 1680, 491, 795, 1384, 2]);