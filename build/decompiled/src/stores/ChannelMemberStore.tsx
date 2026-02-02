// stores/ChannelMemberStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var8;
    var0 = function() {
        _fun50175: for (var _fun50175_ip = 0;;) switch (_fun50175_ip) {
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
                _fun50175_ip = 74;
                continue _fun50175;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot27 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun50178: for (var _fun50178_ip = 0;;) switch (_fun50178_ip) {
            case 0:
                var4 = arg1;
                var2 = arg2;
                var1 = arg3;
                var _closure2_slot0 = var4;
                var0 = _closure1_slot20;
                var0 = var0.ONLINE;
                if (!(var0 !== var4)) {
                    _fun50178_ip = 167;
                    continue _fun50178
                }
            case 35:
                var0 = _closure1_slot20;
                var0 = var0.OFFLINE;
                if (!(var0 !== var4)) {
                    _fun50178_ip = 167;
                    continue _fun50178
                }
            case 49:
                var0 = _closure1_slot20;
                var0 = var0.UNKNOWN;
                if (!(var0 !== var4)) {
                    _fun50178_ip = 167;
                    continue _fun50178
                }
            case 63:
                var7 = _closure1_slot16;
                var6 = var7.getGuild;
                var0 = arg0;
                var0 = var6.bind(var7)(var0);
                var6 = null;
                var8 = var6 != var0;
                var7 = null;
                if (!var8) {
                    _fun50178_ip = 112;
                    continue _fun50178
                }
            case 91:
                var9 = _closure1_slot15;
                var8 = var9.getRole;
                var0 = var0.id;
                var7 = var8.bind(var9)(var0, var4);
            case 112:
                var0 = {};
                var8 = _closure1_slot23;
                var8 = var8.GROUP;
                var0.type = var8;
                var0.key = var4;
                var0.id = var4;
                var8 = var6 != var7;
                var6 = '';
                if (!var8) {
                    _fun50178_ip = 152;
                    continue _fun50178
                }
            case 147:
                var6 = var7.name;
            case 152:
                var0.title = var6;
                var0.count = var2;
                var0.index = var1;
                return var0;
            case 167:
                var0 = {};
                var5 = _closure1_slot23;
                var5 = var5.GROUP;
                var0.type = var5;
                var0.key = var4;
                var0.id = var4;
                var5 = function() {
                    _fun50179: for (var _fun50179_ip = 0;;) switch (_fun50179_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot20;
                            var1 = var1.ONLINE;
                            if (!(var1 !== var2)) {
                                _fun50179_ip = 159;
                                continue _fun50179
                            }
                        case 27:
                            var1 = _closure1_slot20;
                            var1 = var1.OFFLINE;
                            if (!(var1 !== var2)) {
                                _fun50179_ip = 100;
                                continue _fun50179
                            }
                        case 41:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 17;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1["UQMV/E"];
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 100:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 17;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.Vv0abJ;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 159:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var0 = 17;
                            var1 = var5[var0];
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var5[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0.WbGtnH;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var4 = undefined;
                var3 = 'title';
                Object.defineProperty(var0, var3, {
                    get: var5,
                    set: var4,
                    enumerable: true
                });
                var0.count = var2;
                var0.index = var1;
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun50180: for (var _fun50180_ip = 0;;) switch (_fun50180_ip) {
            case 0:
                var11 = arg0;
                var5 = arg2;
                var1 = _closure1_slot11;
                var0 = var1.getId;
                var0 = var0.bind(var1)();
                var0 = var5 === var0;
                var3 = _closure1_slot17;
                var1 = var3.isMobileOnline;
                var4 = var1.bind(var3)(var5);
                var3 = _closure1_slot17;
                var1 = var3.isVROnline;
                var3 = var1.bind(var3)(var5);
                if (var0) {
                    _fun50180_ip = 78;
                    continue _fun50180
                }
            case 60:
                var6 = _closure1_slot17;
                var1 = var6.getStatus;
                var8 = var1.bind(var6)(var5, var11);
                _fun50180_ip = 92;
                continue _fun50180;
            case 78:
                var6 = _closure1_slot18;
                var1 = var6.getStatus;
                var8 = var1.bind(var6)();
            case 92:
                if (var0) {
                    _fun50180_ip = 113;
                    continue _fun50180
                }
            case 95:
                var1 = _closure1_slot17;
                var0 = var1.getActivities;
                var7 = var0.bind(var1)(var5, var11);
                _fun50180_ip = 127;
                continue _fun50180;
            case 113:
                var1 = _closure1_slot18;
                var0 = var1.getActivities;
                var7 = var0.bind(var1)();
            case 127:
                var1 = _closure1_slot10;
                var0 = var1.getStreamForUser;
                var6 = var0.bind(var1)(var5, var11);
                var1 = _closure1_slot19;
                var0 = var1.getUser;
                var9 = var0.bind(var1)(var5);
                var0 = null;
                var1 = var0 == var9;
                if (var1) {
                    _fun50180_ip = 281;
                    continue _fun50180
                }
            case 167:
                var1 = {};
                var10 = _closure1_slot23;
                var10 = var10.MEMBER;
                var1.type = var10;
                var10 = _closure1_slot14;
                var2 = var10.getMember;
                var12 = var2.bind(var10)(var11, var5);
                var13 = var1;
                var2 = copyDataProperties(var13, var12);
                var2 = 'user';
                var1[var2] = var9;
                var2 = 'status';
                var1[var2] = var8;
                var2 = 'activities';
                var1[var2] = var7;
                var2 = 'applicationStream';
                var1[var2] = var6;
                var2 = arg1;
                var5 = var2 === var5;
                var2 = 'isOwner';
                var1[var2] = var5;
                var2 = 'isMobileOnline';
                var1[var2] = var4;
                var2 = 'isVROnline';
                var1[var2] = var3;
                var0 = var1;
            case 281:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun50181: for (var _fun50181_ip = 0;;) switch (_fun50181_ip) {
            case 0:
                var3 = _closure1_slot12;
                var2 = var3.getChannel;
                var0 = arg0;
                var4 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun50181_ip = 60;
                    continue _fun50181
                }
            case 26:
                var0 = var4.memberListId;
                if (!(var2 != var0)) {
                    _fun50181_ip = 44;
                    continue _fun50181
                }
            case 36:
                var0 = var4.memberListId;
                _fun50181_ip = 58;
                continue _fun50181;
            case 44:
                var3 = function arg0() {
                    _fun50182: for (var _fun50182_ip = 0;;) switch (_fun50182_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var2 = 18;
                            var2 = var4[var2];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.canEveryone;
                            var2 = _closure1_slot21;
                            var2 = var2.VIEW_CHANNEL;
                            var2 = var3.bind(var4)(var2, var1);
                            if (var2) {
                                _fun50182_ip = 165;
                                continue _fun50182
                            }
                        case 53:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 19;
                            var2 = var7[var2];
                            var3 = var6.bind(var5)(var2);
                            var2 = var3.v3;
                            var4 = 20;
                            var4 = var7[var4];
                            var4 = var6.bind(var5)(var4);
                            var1 = var1.permissionOverwrites;
                            var6 = var4.bind(var5)(var1);
                            var5 = var6.reduce;
                            var4 = function(arg0, arg1) { // Environment: var1
                                _fun50183: for (var _fun50183_ip = 0;;) switch (_fun50183_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = arg1;
                                        var4 = var1.id;
                                        var9 = var1.allow;
                                        var5 = var1.deny;
                                        var3 = _closure1_slot2;
                                        var2 = _closure1_slot3;
                                        var7 = 21;
                                        var2 = var2[var7];
                                        var6 = undefined;
                                        var8 = var3.bind(var6)(var2);
                                        var3 = var8.has;
                                        var2 = _closure1_slot21;
                                        var2 = var2.VIEW_CHANNEL;
                                        var2 = var3.bind(var8)(var9, var2);
                                        if (var2) {
                                            _fun50183_ip = 149;
                                            continue _fun50183
                                        }
                                    case 72:
                                        var3 = _closure1_slot2;
                                        var2 = _closure1_slot3;
                                        var2 = var2[var7];
                                        var3 = var3.bind(var6)(var2);
                                        var2 = var3.has;
                                        var1 = _closure1_slot21;
                                        var1 = var1.VIEW_CHANNEL;
                                        var1 = var2.bind(var3)(var5, var1);
                                        if (!var1) {
                                            _fun50183_ip = 183;
                                            continue _fun50183
                                        }
                                    case 113:
                                        var2 = var0.push;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var3 = var1.concat;
                                        var1 = 'deny:';
                                        var1 = var3.bind(var1)(var4);
                                        var1 = var2.bind(var0)(var1);
                                        _fun50183_ip = 183;
                                        continue _fun50183;
                                    case 149:
                                        var2 = var0.push;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var3 = var1.concat;
                                        var1 = 'allow:';
                                        var1 = var3.bind(var1)(var4);
                                        var1 = var2.bind(var0)(var1);
                                    case 183:
                                        return var0;
                                }
                            };
                            var1 = new Array(0);
                            var4 = var5.bind(var6)(var4, var1);
                            var1 = var4.sort;
                            var5 = var1.bind(var4)();
                            var4 = var5.join;
                            var1 = ',';
                            var1 = var4.bind(var5)(var1);
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.toString;
                            var1 = var1.bind(var2)();
                            return var1;
                        case 165:
                            var0 = _closure1_slot22;
                            return var0;
                    }
                };
                var2 = undefined;
                var0 = var3.bind(var2)(var4);
            case 58:
                _fun50181_ip = 64;
                continue _fun50181;
            case 60:
                var0 = _closure1_slot22;
            case 64:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var11 = function() {
        var1 = _closure1_slot25;
        var0 = var1.reset;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var0 = function() {
        var2 = _closure1_slot10;
        var0 = var2.getAllApplicationStreams;
        var0 = var0.bind(var2)();
        var3 = _closure1_slot26;
        var2 = var3.concat;
        var2 = var2.bind(var3)(var0);
        _closure1_slot26 = var0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot25;
            var2 = var3.forEach;
            var1 = null;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.rebuildMember;
                var0 = _closure3_slot0;
                var0 = var0.ownerId;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        var3 = _closure1_slot11;
        var2 = var3.getId;
        var2 = var2.bind(var3)();
        var _closure2_slot0 = var2;
        var3 = _closure1_slot25;
        var2 = var3.forEach;
        var1 = null;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.rebuildMember;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var3 = 0;
    var1 = var8[var3];
    var0 = undefined;
    var1 = var9.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 11;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 12;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 13;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 14;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 15;
    var1 = var8[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot19 = var1;
    var1 = 16;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var4 = var1.StatusTypes;
    var _closure1_slot20 = var4;
    var1 = var1.Permissions;
    var _closure1_slot21 = var1;
    var4 = 'everyone';
    var _closure1_slot22 = var4;
    var1 = {};
    var5 = 'GROUP';
    var1.GROUP = var5;
    var5 = 'MEMBER';
    var1.MEMBER = var5;
    var5 = 'CONTENT_INVENTORY';
    var1.CONTENT_INVENTORY = var5;
    var5 = 'CONTENT_INVENTORY_GROUP';
    var1.CONTENT_INVENTORY_GROUP = var5;
    var5 = 'HIDDEN_CONTENT_INVENTORY';
    var1.HIDDEN_CONTENT_INVENTORY = var5;
    var5 = 'CONTENT_INVENTORY_LEADERBOARD';
    var1.CONTENT_INVENTORY_LEADERBOARD = var5;
    var _closure1_slot23 = var1;
    var5 = function() { // Environment: var6
        var3 = _closure1_slot8;
        var2 = function arg0, arg1() {
            var2 = this;
            var3 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2.rows = var1;
            var1 = new Array(0);
            var2.groups = var1;
            var1 = {};
            var2.members = var1;
            var1 = 0;
            var2.version = var1;
            var1 = arg0;
            var2.guildId = var1;
            var1 = arg1;
            var2.listId = var1;
            var1 = var2.updateOwnerId;
            var1 = var1.bind(var2)();
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'updateOwnerId';
        var0.key = var1;
        var1 = function() {
            _fun50192: for (var _fun50192_ip = 0;;) switch (_fun50192_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot16;
                    var3 = var4.getGuild;
                    var1 = var2.guildId;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun50192_ip = 87;
                        continue _fun50192
                    }
                case 31:
                    var4 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var0 = var1.getGuildVisualOwnerId;
                    var1 = var0.bind(var1)(var3);
                    var0 = var2.ownerId;
                    var0 = var0 !== var1;
                    if (!var0) {
                        _fun50192_ip = 85;
                        continue _fun50192
                    }
                case 77:
                    var2.ownerId = var1;
                    var0 = true;
                case 85:
                    return var0;
                case 87:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(10);
        var1[0] = var0;
        var0 = {};
        var5 = 'setGroups';
        var0.key = var5;
        var5 = function arg0() {
            var4 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = 0;
            var _closure3_slot1 = var2;
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var0
                _fun50194: for (var _fun50194_ip = 0;;) switch (_fun50194_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = _closure3_slot1;
                        var2 = global;
                        var6 = var2.Math;
                        var4 = var6.max;
                        var7 = var0.count;
                        var2 = null;
                        var8 = var2 != var7;
                        var3 = 0;
                        var2 = 0;
                        if (!var8) {
                            _fun50194_ip = 45;
                            continue _fun50194
                        }
                    case 42:
                        var2 = var7;
                    case 45:
                        var4 = var4.bind(var6)(var3, var2);
                        var3 = _closure3_slot1;
                        var2 = 1;
                        var2 = var4 + var2;
                        var2 = var3 + var2;
                        _closure3_slot1 = var2;
                        var3 = _closure1_slot28;
                        var1 = _closure3_slot0;
                        var12 = var1.guildId;
                        var11 = var0.id;
                        var13 = undefined;
                        var10 = var4;
                        var9 = var5;
                        var0 = var13[var3](var12, var11, var10, var9, var8);
                        return var0;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1.groups = var2;
            var1 = var1.rows;
            var0 = _closure3_slot1;
            var1.length = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'sync';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50195: for (var _fun50195_ip = 0;;) switch (_fun50195_ip) {
                case 0:
                    var3 = arg1;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = arg0;
                    var2 = var0[Symbol.iterator];
                    var0 = var2().next;
                    var6 = var0().value;
                    var4 = var2;
                    var0 = undefined;
                    var4 = var4 === var0;
                    var5 = undefined;
                    if (var4) {
                        _fun50195_ip = 39;
                        continue _fun50195
                    }
                case 36:
                    var5 = var6;
                case 39:
                    var _closure3_slot1 = var5;
                    if (var4) {
                        _fun50195_ip = 49;
                        continue _fun50195
                    }
                case 46:
                    var2.return();
                case 49:
                    var2 = var3.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.update;
                        var1 = _closure3_slot1;
                        var0 = arg1;
                        var1 = var1 + var0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'invalidate';
        var0.key = var5;
        var5 = function arg0() {
            _fun50197: for (var _fun50197_ip = 0;;) switch (_fun50197_ip) {
                case 0:
                    var2 = this;
                    var6 = arg0;
                    var1 = var6[Symbol.iterator];
                    var6 = var1().next;
                    var4 = var6().value;
                    var3 = var1;
                    var0 = undefined;
                    var3 = var3 === var0;
                    var5 = undefined;
                    if (var3) {
                        _fun50197_ip = 30;
                        continue _fun50197
                    }
                case 27:
                    var5 = var4;
                case 30:
                    var4 = undefined;
                    if (var3) {
                        _fun50197_ip = 60;
                        continue _fun50197
                    }
                case 35:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var0;
                    var4 = undefined;
                    var3 = var6;
                    if (var6) {
                        _fun50197_ip = 60;
                        continue _fun50197
                    }
                case 54:
                    var4 = var7;
                    var3 = var6;
                case 60:
                    if (var3) {
                        _fun50197_ip = 66;
                        continue _fun50197
                    }
                case 63:
                    var1.return();
                case 66:
                    var1 = null;
                    if (!(var5 <= var4)) {
                        _fun50197_ip = 145;
                        continue _fun50197
                    }
                case 75:
                    var6 = var2.rows;
                    var6 = var6[var5];
                    if (!(var1 != var6)) {
                        _fun50197_ip = 145;
                        continue _fun50197
                    }
                case 89:
                    var7 = var2.rows;
                    var7 = delete var7[var5];
                    var8 = var6.type;
                    var7 = _closure1_slot23;
                    var7 = var7.MEMBER;
                    if (!(var8 === var7)) {
                        _fun50197_ip = 138;
                        continue _fun50197
                    }
                case 118:
                    var7 = var2.members;
                    var6 = var6.user;
                    var6 = var6.id;
                    var6 = delete var7[var6];
                case 138:
                    var5 = var5 + 1;
                    if (var5 <= var4) {
                        _fun50197_ip = 75;
                        continue _fun50197
                    }
                case 145:
                    var1 = var2.version;
                    var1 = var1 + 1;
                    var2.version = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'insert';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50198: for (var _fun50198_ip = 0;;) switch (_fun50198_ip) {
                case 0:
                    var5 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = var2.group;
                    var3 = var2.member;
                    var4 = null;
                    if (!(var4 == var0)) {
                        _fun50198_ip = 120;
                        continue _fun50198
                    }
                case 27:
                    if (!(var4 != var3)) {
                        _fun50198_ip = 173;
                        continue _fun50198
                    }
                case 34:
                    var9 = _closure1_slot29;
                    var8 = var1.guildId;
                    var7 = var1.ownerId;
                    var2 = var3.user;
                    var6 = var2.id;
                    var2 = undefined;
                    var6 = var9.bind(var2)(var8, var7, var6);
                    if (!(var4 != var6)) {
                        _fun50198_ip = 118;
                        continue _fun50198
                    }
                case 75:
                    var8 = var1.rows;
                    var7 = var8.splice;
                    var4 = 0;
                    var4 = var7.bind(var8)(var5, var4, var6);
                    var4 = var1.members;
                    var3 = var3.user;
                    var3 = var3.id;
                    var4[var3] = var6;
                    _fun50198_ip = 173;
                    continue _fun50198;
                case 118:
                    return var2;
                case 120:
                    var4 = var1.rows;
                    var3 = var4.splice;
                    var8 = _closure1_slot28;
                    var7 = var1.guildId;
                    var6 = var0.id;
                    var2 = var0.count;
                    var0 = undefined;
                    var2 = var8.bind(var0)(var7, var6, var2);
                    var0 = 0;
                    var0 = var3.bind(var4)(var5, var0, var2);
                case 173:
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50199: for (var _fun50199_ip = 0;;) switch (_fun50199_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = var2.group;
                    var4 = var2.member;
                    var2 = var1.rows;
                    var2 = var2[var3];
                    var5 = null;
                    var6 = var5 != var2;
                    if (!var6) {
                        _fun50199_ip = 62;
                        continue _fun50199
                    }
                case 40:
                    var8 = var2.type;
                    var7 = _closure1_slot23;
                    var7 = var7.MEMBER;
                    var6 = var8 === var7;
                case 62:
                    if (!var6) {
                        _fun50199_ip = 85;
                        continue _fun50199
                    }
                case 65:
                    var6 = var1.members;
                    var2 = var2.user;
                    var2 = var2.id;
                    var2 = delete var6[var2];
                case 85:
                    if (!(var5 == var0)) {
                        _fun50199_ip = 168;
                        continue _fun50199
                    }
                case 89:
                    if (!(var5 != var4)) {
                        _fun50199_ip = 210;
                        continue _fun50199
                    }
                case 93:
                    var9 = _closure1_slot29;
                    var8 = var1.guildId;
                    var7 = var1.ownerId;
                    var2 = var4.user;
                    var6 = var2.id;
                    var2 = undefined;
                    var6 = var9.bind(var2)(var8, var7, var6);
                    if (!(var5 != var6)) {
                        _fun50199_ip = 166;
                        continue _fun50199
                    }
                case 134:
                    var5 = var1.rows;
                    var5[var3] = var6;
                    var5 = var1.members;
                    var4 = var4.user;
                    var4 = var4.id;
                    var5[var4] = var6;
                    _fun50199_ip = 210;
                    continue _fun50199;
                case 166:
                    return var2;
                case 168:
                    var2 = var1.rows;
                    var7 = _closure1_slot28;
                    var6 = var1.guildId;
                    var5 = var0.id;
                    var4 = var0.count;
                    var0 = undefined;
                    var0 = var7.bind(var0)(var6, var5, var4);
                    var2[var3] = var0;
                case 210:
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            _fun50200: for (var _fun50200_ip = 0;;) switch (_fun50200_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var0 = var1.rows;
                    var0 = var0[var4];
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun50200_ip = 100;
                        continue _fun50200
                    }
                case 22:
                    var3 = var0.type;
                    var2 = _closure1_slot23;
                    var2 = var2.MEMBER;
                    if (!(var3 === var2)) {
                        _fun50200_ip = 64;
                        continue _fun50200
                    }
                case 44:
                    var2 = var1.members;
                    var0 = var0.user;
                    var0 = var0.id;
                    var0 = delete var2[var0];
                case 64:
                    var3 = var1.rows;
                    var2 = var3.splice;
                    var0 = 1;
                    var0 = var2.bind(var3)(var4, var0);
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                case 100:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'rebuildMember';
        var0.key = var5;
        var5 = function arg0() {
            _fun50201: for (var _fun50201_ip = 0;;) switch (_fun50201_ip) {
                case 0:
                    var8 = arg0;
                    var1 = this;
                    var0 = var1.members;
                    var4 = var0[var8];
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun50201_ip = 83;
                        continue _fun50201
                    }
                case 22:
                    var0 = global;
                    var3 = var0.Object;
                    var2 = var3.assign;
                    var7 = _closure1_slot29;
                    var6 = var1.guildId;
                    var5 = var1.ownerId;
                    var0 = undefined;
                    var0 = var7.bind(var0)(var6, var5, var8);
                    var0 = var2.bind(var3)(var4, var0);
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                case 83:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'rebuildMembers';
        var0.key = var5;
        var5 = function() {
            _fun50202: for (var _fun50202_ip = 0;;) switch (_fun50202_ip) {
                case 0:
                    var3 = this;
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = var3.members;
                    var2 = var1.bind(var2)(var0);
                    var0 = var2.length;
                    var1 = 0;
                    var0 = var1 < var0;
                    if (!var0) {
                        _fun50202_ip = 68;
                        continue _fun50202
                    }
                case 41:
                    var4 = var2[var1];
                    var0 = var3.rebuildMember;
                    var0 = var0.bind(var3)(var4);
                    var1 = var1 + 1;
                    var0 = var2.length;
                    if (var1 < var0) {
                        _fun50202_ip = 41;
                        continue _fun50202
                    }
                case 68:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'rebuildGroup';
        var0.key = var5;
        var4 = function arg0() {
            _fun50203: for (var _fun50203_ip = 0;;) switch (_fun50203_ip) {
                case 0:
                    var9 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var9;
                    var3 = var1.groups;
                    var2 = var3.findIndex;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var5 = var2.bind(var3)(var0);
                    var0 = var1.groups;
                    var0 = var0[var5];
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun50203_ip = 119;
                        continue _fun50203
                    }
                case 50:
                    var4 = var1.groups;
                    var3 = var4.splice;
                    var8 = _closure1_slot28;
                    var13 = var1.guildId;
                    var11 = var0.count;
                    var10 = var0.index;
                    var14 = undefined;
                    var12 = var9;
                    var2 = var14[var8](var13, var12, var11, var10, var9);
                    var0 = 1;
                    var0 = var3.bind(var4)(var5, var0, var2);
                    var0 = var1.version;
                    var0 = var0 + 1;
                    var1.version = var0;
                case 119:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[9] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var5 = var5.bind(var0)();
    var _closure1_slot24 = var5;
    var5 = function() { // Environment: var6
        var3 = _closure1_slot8;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2._guildLists = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'get';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun50207: for (var _fun50207_ip = 0;;) switch (_fun50207_ip) {
                case 0:
                    var6 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var1 = var0._guildLists;
                    var2 = var1[var6];
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun50207_ip = 40;
                        continue _fun50207
                    }
                case 25:
                    var4 = var0._guildLists;
                    var0 = {};
                    var4[var6] = var0;
                    var2 = var0;
                case 40:
                    var0 = var2[var3];
                    if (!(var1 == var0)) {
                        _fun50207_ip = 130;
                        continue _fun50207
                    }
                case 48:
                    var1 = _closure1_slot24;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var9 = var5;
                    var8 = var6;
                    var7 = var3;
                    var1 = new var9[var1](var8, var7, var6);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var5 = var1.setGroups;
                    var6 = {};
                    var4 = _closure1_slot20;
                    var4 = var4.UNKNOWN;
                    var6.id = var4;
                    var4 = 0;
                    var6.count = var4;
                    var4 = new Array(1);
                    var4[0] = var6;
                    var4 = var5.bind(var1)(var4);
                    var2[var3] = var1;
                    var0 = var1;
                case 130:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'forEach';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun50208: for (var _fun50208_ip = 0;;) switch (_fun50208_ip) {
                case 0:
                    var4 = arg0;
                    var5 = arg1;
                    var1 = this;
                    var _closure3_slot0 = var5;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun50208_ip = 73;
                        continue _fun50208
                    }
                case 21:
                    var3 = var1._guildLists;
                    var4 = var3[var4];
                    if (!(var2 != var4)) {
                        _fun50208_ip = 120;
                        continue _fun50208
                    }
                case 35:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var2 = var3.forEach;
                    var2 = var2.bind(var3)(var4, var5);
                    _fun50208_ip = 120;
                    continue _fun50208;
                case 73:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.forEach;
                    var1 = var1._guildLists;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 20;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.forEach;
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                case 120:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0._guildLists;
            var0 = arg0;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var4 = function() {
            var1 = {};
            var0 = this;
            var0._guildLists = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var5 = var5.bind(var0)();
    var10 = var5.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var5
        }
    });
    var16 = var10;
    var5 = new var16[var5](var15);
    var5 = var5 instanceof Object ? var5 : var10;
    var _closure1_slot25 = var5;
    var5 = new Array(0);
    var _closure1_slot26 = var5;
    var5 = 22;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var10 = var5.Store;
    var5 = function(arg0) { // Environment: var6
        var3 = function() {
            _fun50213: for (var _fun50213_ip = 0;;) switch (_fun50213_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot27;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50213_ip = 69;
                        continue _fun50213
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50213_ip = 105;
                    continue _fun50213;
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
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var13 = var3.waitFor;
            var24 = _closure1_slot19;
            var23 = _closure1_slot16;
            var22 = _closure1_slot15;
            var21 = _closure1_slot12;
            var20 = _closure1_slot14;
            var19 = _closure1_slot17;
            var18 = _closure1_slot18;
            var17 = _closure1_slot11;
            var16 = _closure1_slot13;
            var15 = _closure1_slot10;
            var14 = _closure1_slot9;
            var25 = var3;
            var1 = var25[var13](var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
            var4 = var3.syncWith;
            var1 = _closure1_slot18;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = _closure1_slot32;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var4 = _closure1_slot10;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot31;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getProps';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = _closure1_slot25;
            var2 = var3.get;
            var4 = _closure1_slot30;
            var1 = undefined;
            var0 = arg1;
            var1 = var4.bind(var1)(var0);
            var0 = arg0;
            var1 = var2.bind(var3)(var0, var1);
            var0 = {};
            var6 = var1.guildId;
            var5 = var1.listId;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ':';
            var2 = var4.bind(var3)(var6, var2, var5);
            var0.listId = var2;
            var2 = var1.groups;
            var0.groups = var2;
            var2 = var1.rows;
            var0.rows = var2;
            var1 = var1.version;
            var0.version = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getRows';
        var4.key = var6;
        var5 = function arg0, arg1() {
            var3 = _closure1_slot25;
            var2 = var3.get;
            var4 = _closure1_slot30;
            var1 = undefined;
            var0 = arg1;
            var1 = var4.bind(var1)(var0);
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            var0 = var0.rows;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var10 = var5.bind(var0)(var10);
    var5 = 'ChannelMemberStore';
    var10.displayName = var5;
    var5 = 23;
    var5 = var8[var5];
    var15 = var9.bind(var0)(var5);
    var5 = {};
    var5.CONNECTION_OPEN = var11;
    var5.OVERLAY_INITIALIZE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var5 = _closure1_slot25;
        var4 = var5.get;
        var3 = var0.guildId;
        var2 = var0.id;
        var2 = var4.bind(var5)(var3, var2);
        var _closure2_slot0 = var2;
        var4 = var0.ops;
        var3 = var4.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun50218: for (var _fun50218_ip = 0;;) switch (_fun50218_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.op;
                    var1 = 'SYNC';
                    if (!(var1 !== var2)) {
                        _fun50218_ip = 168;
                        continue _fun50218
                    }
                case 19:
                    var1 = 'INVALIDATE';
                    if (!(var1 !== var2)) {
                        _fun50218_ip = 142;
                        continue _fun50218
                    }
                case 29:
                    var1 = 'INSERT';
                    if (!(var1 !== var2)) {
                        _fun50218_ip = 111;
                        continue _fun50218
                    }
                case 37:
                    var1 = 'UPDATE';
                    if (!(var1 !== var2)) {
                        _fun50218_ip = 80;
                        continue _fun50218
                    }
                case 45:
                    var1 = 'DELETE';
                    if (!(var1 === var2)) {
                        _fun50218_ip = 198;
                        continue _fun50218
                    }
                case 56:
                    var3 = _closure2_slot0;
                    var2 = var3.delete;
                    var1 = var0.index;
                    var1 = var2.bind(var3)(var1);
                    _fun50218_ip = 198;
                    continue _fun50218;
                case 80:
                    var4 = _closure2_slot0;
                    var3 = var4.update;
                    var2 = var0.index;
                    var1 = var0.item;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun50218_ip = 198;
                    continue _fun50218;
                case 111:
                    var4 = _closure2_slot0;
                    var3 = var4.insert;
                    var2 = var0.index;
                    var1 = var0.item;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun50218_ip = 198;
                    continue _fun50218;
                case 142:
                    var3 = _closure2_slot0;
                    var2 = var3.invalidate;
                    var1 = var0.range;
                    var1 = var2.bind(var3)(var1);
                    _fun50218_ip = 198;
                    continue _fun50218;
                case 168:
                    var3 = _closure2_slot0;
                    var2 = var3.sync;
                    var1 = var0.range;
                    var0 = var0.items;
                    var0 = var2.bind(var3)(var1, var0);
                case 198:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1);
        var1 = var2.setGroups;
        var0 = var0.groups;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var5.GUILD_MEMBER_LIST_UPDATE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var3 = _closure1_slot25;
        var2 = var3.forEach;
        var1 = var0.id;
        var0 = function(arg0) { // Environment: var0
            _fun50220: for (var _fun50220_ip = 0;;) switch (_fun50220_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.updateOwnerId;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun50220_ip = 26;
                        continue _fun50220
                    }
                case 16:
                    var0 = var1.rebuildMembers;
                    var0 = var0.bind(var1)();
                case 26:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var5.GUILD_UPDATE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot25;
        var1 = var2.delete;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var5.GUILD_DELETE = var11;
    var11 = function arg0() {
        var1 = arg0;
        var3 = var1.guildId;
        var1 = var1.role;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot25;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = var1.rebuildGroup;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var2.bind(var1)(var0);
            var0 = var1.rebuildMembers;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var3, var0);
        var0 = undefined;
        return var0;
    };
    var5.GUILD_ROLE_UPDATE = var11;
    var11 = function arg0() {
        var1 = arg0;
        var3 = var1.guildId;
        var1 = var1.user;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot25;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.rebuildMember;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var3, var0);
        var0 = undefined;
        return var0;
    };
    var5.GUILD_MEMBER_UPDATE = var11;
    var6 = function() {
        var0 = true;
        return var0;
    };
    var5.CHANNEL_UPDATES = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var16 = var6;
    var14 = var5;
    var5 = new var16[var10](var15, var14, var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 24;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'stores/ChannelMemberStore.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.EVERYONE_ID = var4;
    var2.EVERYONE_CHANNEL_ID = var3;
    var2.MemberListRowTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1590, 3675, 1216, 1372, 1599, 1672, 1665, 1410, 3571, 5621, 1613, 660, 1234, 3057, 1215, 22, 484, 566, 806, 2]);