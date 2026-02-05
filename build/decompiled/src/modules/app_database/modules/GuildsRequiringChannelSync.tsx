// modules/app_database/modules/GuildsRequiringChannelSync.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        _fun93267: for (var _fun93267_ip = 0;;) switch (_fun93267_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93267_ip = 46;
                    continue _fun93267
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93267_ip = 55;
                    continue _fun93267
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93267_ip = 345;
                    continue _fun93267
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93267_ip = 323;
                    continue _fun93267
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93267_ip = 283;
                    continue _fun93267
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93267_ip = 270;
                    continue _fun93267
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
                    _fun93267_ip = 163;
                    continue _fun93267
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93267_ip = 179;
                    continue _fun93267
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93267_ip = 249;
                    continue _fun93267
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93267_ip = 249;
                    continue _fun93267
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93267_ip = 234;
                    continue _fun93267
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93267_ip = 247;
                    continue _fun93267
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93267_ip = 265;
                continue _fun93267;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93267_ip = 283;
                continue _fun93267;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93267_ip = 323;
                    continue _fun93267
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
                    _fun93267_ip = 330;
                    continue _fun93267
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93268: for (var _fun93268_ip = 0;;) switch (_fun93268_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93268_ip = 56;
                                continue _fun93268
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
                            _fun93268_ip = 67;
                            continue _fun93268;
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
        _fun93269: for (var _fun93269_ip = 0;;) switch (_fun93269_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93269_ip = 23;
                    continue _fun93269
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93269_ip = 33;
                    continue _fun93269
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
                    _fun93269_ip = 70;
                    continue _fun93269
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93269_ip = 55;
                    continue _fun93269
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var6 = 8;
    var6 = var5[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.combine;
    var6 = var3.VIEW_CHANNEL;
    var3 = var3.ADMINISTRATOR;
    var3 = var7.bind(var8)(var6, var3);
    var _closure1_slot11 = var3;
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
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'connection_open';
    var3.ConnectionOpen = var6;
    var6 = 'guild_create';
    var3.GuildCreate = var6;
    var6 = 'background_sync';
    var3.BackgroundSync = var6;
    var _closure1_slot13 = var3;
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
            var3 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleChannelSync;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_SYNC = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getAll';
        var0.key = var1;
        var1 = function() {
            _fun93276: for (var _fun93276_ip = 0;;) switch (_fun93276_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.guildsRequiringChannelSync;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun93276_ip = 53;
                        continue _fun93276
                    }
                case 41:
                    var0 = var1.getMany;
                    var0 = var0.bind(var1)();
                    _fun93276_ip = 76;
                    continue _fun93276;
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
        var1 = new Array(13);
        var1[0] = var0;
        var0 = {};
        var5 = 'handleConnectionOpen';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93277: for (var _fun93277_ip = 0;;) switch (_fun93277_ip) {
                case 0:
                    var6 = arg1;
                    var5 = this;
                    var0 = arg0;
                    var2 = var0.guilds;
                    var1 = _closure1_slot14;
                    var0 = undefined;
                    var3 = var1.bind(var0)(var2);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93277_ip = 84;
                        continue _fun93277
                    }
                case 41:
                    var8 = var2.value;
                    var7 = var5.handleGuild;
                    var1 = _closure1_slot13;
                    var1 = var1.ConnectionOpen;
                    var1 = var7.bind(var5)(var8, var6, var1);
                    var7 = var3.bind(var0)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun93277_ip = 41;
                        continue _fun93277
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
            _fun93278: for (var _fun93278_ip = 0;;) switch (_fun93278_ip) {
                case 0:
                    var4 = this;
                    var0 = arg0;
                    var3 = var0.guild;
                    var1 = var3.unavailable;
                    var0 = true;
                    if (!(var0 !== var1)) {
                        _fun93278_ip = 52;
                        continue _fun93278
                    }
                case 23:
                    var2 = var4.handleGuild;
                    var0 = _closure1_slot13;
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
            _fun93279: for (var _fun93279_ip = 0;;) switch (_fun93279_ip) {
                case 0:
                    var5 = arg1;
                    var4 = this;
                    var0 = arg0;
                    var2 = var0.guilds;
                    var1 = _closure1_slot14;
                    var0 = undefined;
                    var3 = var1.bind(var0)(var2);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93279_ip = 75;
                        continue _fun93279
                    }
                case 41:
                    var6 = var2.value;
                    var1 = var4.handleBackgroundSyncGuild;
                    var1 = var1.bind(var4)(var6, var5);
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun93279_ip = 41;
                        continue _fun93279
                    }
                case 75:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'rolesHaveVisibilityChanges';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun93280: for (var _fun93280_ip = 0;;) switch (_fun93280_ip) {
                case 0:
                    var14 = arg0;
                    var13 = arg1;
                    var12 = arg2;
                    var10 = var13;
                    var6 = undefined;
                    var4 = 8;
                    var3 = null;
                    var2 = undefined;
                    var1 = undefined;
                    for (var7 in var10)
                        case 37: {
                            case 49: var0 = var7;
                            var15 = var12.has;
                            var15 = var15.bind(var12)(var0);
                            if (!var15) {
                                _fun93280_ip = 37;
                                continue _fun93280
                            }
                            case 65: var2 = var13[var0];
                            var1 = var14[var0];
                            if (!(var3 != var1)) {
                                _fun93280_ip = 169;
                                continue _fun93280
                            }
                            case 77: var15 = _closure1_slot2;
                            var0 = _closure1_slot3;
                            var16 = var0[var4];
                            var18 = var15.bind(var6)(var16);
                            var17 = var18.filter;
                            var16 = var1.permissions;
                            var20 = _closure1_slot11;
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
                                _fun93280_ip = 37;
                                continue _fun93280
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
        var1[4] = var0;
        var0 = {};
        var5 = 'processMemberRoleIds';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93281: for (var _fun93281_ip = 0;;) switch (_fun93281_ip) {
                case 0:
                    var5 = arg0;
                    var2 = arg1;
                    var1 = var5.length;
                    var0 = var2.length;
                    if (!(var1 === var0)) {
                        _fun93281_ip = 203;
                        continue _fun93281
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
                    var3 = _closure1_slot14;
                    var4 = undefined;
                    var6 = var3.bind(var4)(var5);
                    var5 = var6.bind(var4)();
                    var3 = var5.done;
                    if (var3) {
                        _fun93281_ip = 107;
                        continue _fun93281
                    }
                case 77:
                    var7 = var5.value;
                    var3 = var1.add;
                    var3 = var3.bind(var1)(var7);
                    var7 = var6.bind(var4)();
                    var3 = var7.done;
                    var5 = var7;
                    if (!var3) {
                        _fun93281_ip = 77;
                        continue _fun93281
                    }
                case 107:
                    var0 = _closure1_slot14;
                    var3 = var0.bind(var4)(var2);
                    var2 = var3.bind(var4)();
                    var0 = var2.done;
                    if (var0) {
                        _fun93281_ip = 187;
                        continue _fun93281
                    }
                case 128:
                    var5 = var2.value;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var5);
                    if (var0) {
                        _fun93281_ip = 162;
                        continue _fun93281
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
                        _fun93281_ip = 128;
                        continue _fun93281
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
        var1[5] = var0;
        var0 = {};
        var5 = 'userBecameGuildOwner';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun93282: for (var _fun93282_ip = 0;;) switch (_fun93282_ip) {
                case 0:
                    var3 = arg2;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun93282_ip = 32;
                        continue _fun93282
                    }
                case 12:
                    var1 = arg1;
                    var1 = var1 === var3;
                    if (!var1) {
                        _fun93282_ip = 29;
                        continue _fun93282
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
        var1[6] = var0;
        var0 = {};
        var5 = 'handleBackgroundSyncGuild';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93283: for (var _fun93283_ip = 0;;) switch (_fun93283_ip) {
                case 0:
                    var1 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var6 = _closure1_slot7;
                    var3 = var6.getSelfMember;
                    var2 = var1.id;
                    var11 = var3.bind(var6)(var2);
                    var7 = null;
                    if (!(var7 == var11)) {
                        _fun93283_ip = 58;
                        continue _fun93283
                    }
                case 38:
                    var6 = _closure1_slot7;
                    var3 = var6.getCachedSelfMember;
                    var2 = var1.id;
                    var11 = var3.bind(var6)(var2);
                case 58:
                    if (!(var7 != var11)) {
                        _fun93283_ip = 506;
                        continue _fun93283
                    }
                case 65:
                    var3 = var1.data_mode;
                    var2 = 'partial';
                    if (!(var2 !== var3)) {
                        _fun93283_ip = 118;
                        continue _fun93283
                    }
                case 79:
                    var3 = var1.data_mode;
                    var2 = 'full';
                    if (!(var2 === var3)) {
                        _fun93283_ip = 506;
                        continue _fun93283
                    }
                case 96:
                    var3 = var4.unmarkGuildForResync;
                    var2 = var1.id;
                    var2 = var3.bind(var4)(var2, var5);
                    _fun93283_ip = 506;
                    continue _fun93283;
                case 118:
                    var2 = _closure1_slot12;
                    var3 = var2.Unknown;
                    var9 = {};
                    var2 = var1.partial_updates;
                    var2 = var2.roles;
                    if (!(var7 != var2)) {
                        _fun93283_ip = 263;
                        continue _fun93283
                    }
                case 146:
                    var6 = _closure1_slot14;
                    var2 = var1.partial_updates;
                    var2 = var2.roles;
                    var12 = undefined;
                    var10 = var6.bind(var12)(var2);
                    var6 = var10.bind(var12)();
                    var2 = var6.done;
                    var8 = 8;
                    if (var2) {
                        _fun93283_ip = 263;
                        continue _fun93283
                    }
                case 184:
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
                        _fun93283_ip = 184;
                        continue _fun93283
                    }
                case 263:
                    var2 = var1.properties;
                    var12 = var4.userBecameGuildOwner;
                    var10 = _closure1_slot9;
                    var8 = var10.getGuild;
                    var6 = var1.id;
                    var6 = var8.bind(var10)(var6);
                    var13 = var7 == var6;
                    var8 = undefined;
                    if (var13) {
                        _fun93283_ip = 309;
                        continue _fun93283
                    }
                case 303:
                    var8 = var6.ownerId;
                case 309:
                    var13 = var7 == var2;
                    var6 = undefined;
                    if (var13) {
                        _fun93283_ip = 324;
                        continue _fun93283
                    }
                case 318:
                    var6 = var2.owner_id;
                case 324:
                    var13 = _closure1_slot6;
                    var2 = var13.getId;
                    var2 = var2.bind(var13)();
                    var6 = var12.bind(var4)(var8, var6, var2);
                    if (var6) {
                        _fun93283_ip = 456;
                        continue _fun93283
                    }
                case 348:
                    var12 = _closure1_slot8;
                    var8 = var12.getUnsafeMutableRoles;
                    var2 = var1.id;
                    var8 = var8.bind(var12)(var2);
                    var2 = global;
                    var2 = var2.Set;
                    var12 = var7 == var11;
                    var10 = undefined;
                    if (var12) {
                        _fun93283_ip = 391;
                        continue _fun93283
                    }
                case 385:
                    var10 = var11.roles;
                case 391:
                    if (!(var7 == var10)) {
                        _fun93283_ip = 399;
                        continue _fun93283
                    }
                case 395:
                    var10 = new Array(0);
                case 399:
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
                        _fun93283_ip = 469;
                        continue _fun93283
                    }
                case 441:
                    var8 = _closure1_slot12;
                    var3 = var8.RolePermissions;
                    var2 = var7;
                    _fun93283_ip = 469;
                    continue _fun93283;
                case 456:
                    var7 = _closure1_slot12;
                    var3 = var7.OwnershipChange;
                    var2 = var6;
                case 469:
                    if (!var2) {
                        _fun93283_ip = 506;
                        continue _fun93283
                    }
                case 472:
                    var2 = var4.markGuildForResync;
                    var20 = var1.id;
                    var0 = _closure1_slot13;
                    var18 = var0.BackgroundSync;
                    var21 = var4;
                    var19 = var5;
                    var17 = var3;
                    var0 = var21[var2](var20, var19, var18, var17, var16);
                case 506:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'handleGuild';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun93284: for (var _fun93284_ip = 0;;) switch (_fun93284_ip) {
                case 0:
                    var0 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var1 = var0.channels;
                    var2 = var1.op;
                    var1 = 'full_sync';
                    if (!(var1 === var2)) {
                        _fun93284_ip = 54;
                        continue _fun93284
                    }
                case 32:
                    var2 = var4.unmarkGuildForResync;
                    var1 = var0.id;
                    var1 = var2.bind(var4)(var1, var5);
                    _fun93284_ip = 550;
                    continue _fun93284;
                case 54:
                    var1 = _closure1_slot12;
                    var1 = var1.Unknown;
                    var6 = _closure1_slot6;
                    var3 = var6.getId;
                    var12 = var3.bind(var6)();
                    var _closure3_slot0 = var12;
                    var7 = _closure1_slot9;
                    var6 = var7.getGuild;
                    var3 = var0.id;
                    var7 = var6.bind(var7)(var3);
                    var6 = null;
                    if (!(var6 == var7)) {
                        _fun93284_ip = 124;
                        continue _fun93284
                    }
                case 110:
                    var3 = _closure1_slot12;
                    var3 = var3.NewGuild;
                    var8 = true;
                    _fun93284_ip = 186;
                    continue _fun93284;
                case 124:
                    var11 = var4.userBecameGuildOwner;
                    var10 = var7.ownerId;
                    var13 = var0.properties;
                    var14 = var6 == var13;
                    var7 = undefined;
                    if (var14) {
                        _fun93284_ip = 157;
                        continue _fun93284
                    }
                case 151:
                    var7 = var13.owner_id;
                case 157:
                    var7 = var11.bind(var4)(var10, var7, var12);
                    var8 = var7;
                    var3 = var1;
                    if (!var7) {
                        _fun93284_ip = 186;
                        continue _fun93284
                    }
                case 173:
                    var1 = _closure1_slot12;
                    var3 = var1.OwnershipChange;
                    var8 = var7;
                case 186:
                    var7 = var3;
                    var10 = null;
                    if (var8) {
                        _fun93284_ip = 366;
                        continue _fun93284
                    }
                case 197:
                    var12 = _closure1_slot7;
                    var11 = var12.getSelfMember;
                    var1 = var0.id;
                    var1 = var11.bind(var12)(var1);
                    if (!(var6 == var1)) {
                        _fun93284_ip = 241;
                        continue _fun93284
                    }
                case 221:
                    var13 = _closure1_slot7;
                    var12 = var13.getCachedSelfMember;
                    var11 = var0.id;
                    var1 = var12.bind(var13)(var11);
                case 241:
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
                        _fun93284_ip = 282;
                        continue _fun93284
                    }
                case 276:
                    var9 = new Array(0);
                    _fun93284_ip = 288;
                    continue _fun93284;
                case 282:
                    var9 = var1.roles;
                case 288:
                    var13 = var6 == var12;
                    var1 = undefined;
                    if (var13) {
                        _fun93284_ip = 303;
                        continue _fun93284
                    }
                case 297:
                    var1 = var12.roles;
                case 303:
                    if (!(var6 == var1)) {
                        _fun93284_ip = 311;
                        continue _fun93284
                    }
                case 307:
                    var1 = new Array(0);
                case 311:
                    var1 = var11.bind(var4)(var9, var1);
                    var9 = var1.rolesAreDifferent;
                    var1 = var1.allRoleIds;
                    if (!var9) {
                        _fun93284_ip = 342;
                        continue _fun93284
                    }
                case 332:
                    var11 = _closure1_slot12;
                    var3 = var11.MemberRoles;
                case 342:
                    var11 = var6 != var1;
                    var8 = var9;
                    var7 = var3;
                    var10 = null;
                    if (!var11) {
                        _fun93284_ip = 366;
                        continue _fun93284
                    }
                case 357:
                    var8 = var9;
                    var7 = var3;
                    var10 = var1;
                case 366:
                    var3 = var7;
                    var1 = var8;
                    if (var1) {
                        _fun93284_ip = 520;
                        continue _fun93284
                    }
                case 378:
                    var1 = var8;
                    var3 = var7;
                    if (!(var6 != var10)) {
                        _fun93284_ip = 520;
                        continue _fun93284
                    }
                case 391:
                    var9 = _closure1_slot8;
                    var8 = var9.getUnsafeMutableRoles;
                    var6 = var0.id;
                    var9 = var8.bind(var9)(var6);
                    var8 = var0.roles;
                    var6 = global;
                    var6 = var6.Array;
                    var6 = var8 instanceof var6;
                    if (var6) {
                        _fun93284_ip = 440;
                        continue _fun93284
                    }
                case 432:
                    var8 = var0.roles;
                    _fun93284_ip = 485;
                    continue _fun93284;
                case 440:
                    var12 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var6 = 10;
                    var11 = var11[var6];
                    var6 = undefined;
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.fromServerArray;
                    var11 = var0.id;
                    var6 = var0.roles;
                    var8 = var12.bind(var13)(var11, var6);
                case 485:
                    var6 = var4.rolesHaveVisibilityChanges;
                    var6 = var6.bind(var4)(var9, var8, var10);
                    var3 = var7;
                    var1 = var6;
                    if (!var1) {
                        _fun93284_ip = 520;
                        continue _fun93284
                    }
                case 507:
                    var2 = _closure1_slot12;
                    var3 = var2.RolePermissions;
                    var1 = var6;
                case 520:
                    if (!var1) {
                        _fun93284_ip = 550;
                        continue _fun93284
                    }
                case 523:
                    var2 = var4.markGuildForResync;
                    var18 = var0.id;
                    var16 = arg2;
                    var19 = var4;
                    var17 = var5;
                    var15 = var3;
                    var0 = var19[var2](var18, var17, var16, var15, var14);
                case 550:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'handleChannelSync';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93286: for (var _fun93286_ip = 0;;) switch (_fun93286_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var2 = var0.guild_id;
                    var0 = var0.integrity_check;
                    if (var0) {
                        _fun93286_ip = 35;
                        continue _fun93286
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
        var1[9] = var0;
        var0 = {};
        var5 = 'markGuildForResync';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            var5 = arg0;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var0 = 11;
            var2 = var3[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var2);
            var2 = var4.v4;
            var4 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var6 = 12;
            var6 = var3[var6];
            var8 = var2.bind(var0)(var6);
            var7 = var8.track;
            var1 = _closure1_slot10;
            var6 = var1.GUILD_CHANNEL_RESYNC_REQUESTED;
            var1 = {};
            var1.guild_id = var5;
            var1.request_id = var4;
            var9 = arg2;
            var1.trigger = var9;
            var9 = arg3;
            var1.change_type = var9;
            var1 = var7.bind(var8)(var6, var1);
            var1 = 9;
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
        var1[10] = var0;
        var0 = {};
        var5 = 'unmarkGuildForResync';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 9;
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
        var1[11] = var0;
        var0 = {};
        var5 = 'resetInMemoryState';
        var0.key = var5;
        var4 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[12] = var0;
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
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/GuildsRequiringChannelSync.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1216, 1681, 1674, 1410, 660, 483, 484, 1646, 1678, 491, 795, 2]);