// stores/InviteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun28301: for (var _fun28301_ip = 0;;) switch (_fun28301_ip) {
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
                _fun28301_ip = 74;
                continue _fun28301;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
        _fun28304: for (var _fun28304_ip = 0;;) switch (_fun28304_ip) {
            case 0:
                var0 = arg0;
                var5 = null;
                var2 = var5 != var0;
                var1 = '';
                if (!var2) {
                    _fun28304_ip = 19;
                    continue _fun28304
                }
            case 16:
                var1 = var0;
            case 19:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.parseExtraDataFromInviteKey;
                var3 = var3.bind(var4)(var1);
                var6 = _closure1_slot8;
                var4 = var6.get;
                var6 = var4.bind(var6)(var1);
                var4 = var1;
                if (!(var5 == var6)) {
                    _fun28304_ip = 104;
                    continue _fun28304
                }
            case 76:
                var1 = {};
                var7 = _closure1_slot7;
                var7 = var7.RESOLVING;
                var1.state = var7;
                var3 = var3.baseCode;
                var1.code = var3;
                _fun28304_ip = 133;
                continue _fun28304;
            case 104:
                var3 = {};
                var7 = _closure1_slot7;
                var7 = var7.RESOLVING;
                var3.state = var7;
                var9 = var3;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var1 = var3;
            case 133:
                var3 = arg1;
                var3 = var3.bind(var0)(var1);
                var3 = global;
                var7 = var3.Map;
                var9 = _closure1_slot8;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var6;
                var3 = new var10[var7](var9, var8);
                var6 = var3 instanceof Object ? var3 : var6;
                _closure1_slot8 = var6;
                var3 = var6.set;
                var3 = var3.bind(var6)(var4, var1);
                var6 = var1.guild;
                var7 = var5 == var6;
                var3 = var1;
                var1 = undefined;
                if (var7) {
                    _fun28304_ip = 210;
                    continue _fun28304
                }
            case 205:
                var1 = var6.id;
            case 210:
                if (!(var5 != var1)) {
                    _fun28304_ip = 246;
                    continue _fun28304
                }
            case 214:
                var1 = {};
                var8 = _closure1_slot10;
                var9 = var1;
                var5 = copyDataProperties(var9, var8);
                var3 = var3.guild;
                var3 = var3.id;
                var1[var3] = var4;
                _closure1_slot10 = var1;
            case 246:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var8 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot13;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            _fun28306: for (var _fun28306_ip = 0;;) switch (_fun28306_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = 'banned';
                    var1 = var1 in var2;
                    if (!var1) {
                        _fun28306_ip = 31;
                        continue _fun28306
                    }
                case 18:
                    var0 = _closure2_slot0;
                    var0 = var0.banned;
                    if (var0) {
                        _fun28306_ip = 46;
                        continue _fun28306
                    }
                case 31:
                    var0 = _closure1_slot7;
                    var1 = var0.EXPIRED;
                    _fun28306_ip = 59;
                    continue _fun28306;
                case 46:
                    var0 = _closure1_slot7;
                    var1 = var0.BANNED;
                case 59:
                    var0 = arg0;
                    var0.state = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
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
    var7 = var7.InviteStates;
    var _closure1_slot7 = var7;
    var7 = var1.Map;
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot8 = var7;
    var7 = var1.Map;
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun28308: for (var _fun28308_ip = 0;;) switch (_fun28308_ip) {
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
                        _fun28308_ip = 69;
                        continue _fun28308
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun28308_ip = 105;
                    continue _fun28308;
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
        var0 = 'getInvite';
        var4.key = var0;
        var0 = function arg0() {
            var2 = _closure1_slot8;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getInviteError';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot9;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getInvites';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getInviteKeyForGuildId';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot10;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getFriendMemberIds';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot11;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'InviteStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        var0 = arg0;
        var4 = var0.code;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.parseExtraDataFromInviteKey;
        var6 = var1.bind(var2)(var4);
        var1 = global;
        var3 = var1.Map;
        var8 = _closure1_slot8;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var9 = var2;
        var1 = new var9[var3](var8, var7);
        var3 = var1 instanceof Object ? var1 : var2;
        _closure1_slot8 = var3;
        var2 = var3.set;
        var1 = {};
        var6 = var6.baseCode;
        var1.code = var6;
        var5 = _closure1_slot7;
        var5 = var5.RESOLVING;
        var1.state = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var1.INVITE_RESOLVE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot13;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            _fun28316: for (var _fun28316_ip = 0;;) switch (_fun28316_ip) {
                case 0:
                    var1 = arg0;
                    var0 = _closure1_slot7;
                    var0 = var0.RESOLVED;
                    var1.state = var0;
                    var2 = _closure2_slot0;
                    var3 = var2.invite;
                    var3 = var3.guild;
                    var1.guild = var3;
                    var3 = var2.invite;
                    var3 = var3.channel;
                    var1.channel = var3;
                    var3 = var2.invite;
                    var3 = var3.inviter;
                    var1.inviter = var3;
                    var2 = var2.invite;
                    var4 = var2.approximate_member_count;
                    var2 = null;
                    var5 = var2 != var4;
                    var3 = null;
                    if (!var5) {
                        _fun28316_ip = 107;
                        continue _fun28316
                    }
                case 104:
                    var3 = var4;
                case 107:
                    var1.approximate_member_count = var3;
                    var3 = _closure2_slot0;
                    var3 = var3.invite;
                    var3 = var3.approximate_presence_count;
                    var4 = var2 != var3;
                    var2 = null;
                    if (!var4) {
                        _fun28316_ip = 141;
                        continue _fun28316
                    }
                case 138:
                    var2 = var3;
                case 141:
                    var1.approximate_presence_count = var2;
                    var0 = _closure2_slot0;
                    var2 = var0.invite;
                    var2 = var2.target_type;
                    var1.target_type = var2;
                    var2 = var0.invite;
                    var2 = var2.target_user;
                    var1.target_user = var2;
                    var2 = var0.invite;
                    var2 = var2.target_application;
                    var1.target_application = var2;
                    var2 = var0.invite;
                    var2 = var2.expires_at;
                    var1.expires_at = var2;
                    var2 = var0.invite;
                    var2 = var2.friends_count;
                    var1.friends_count = var2;
                    var2 = var0.invite;
                    var2 = var2.is_contact;
                    var1.is_contact = var2;
                    var2 = var0.invite;
                    var2 = var2.guild_scheduled_event;
                    var1.guild_scheduled_event = var2;
                    var2 = var0.invite;
                    var2 = var2.type;
                    var1.type = var2;
                    var2 = var0.invite;
                    var2 = var2.flags;
                    var1.flags = var2;
                    var2 = var0.invite;
                    var2 = var2.is_nickname_changeable;
                    var1.is_nickname_changeable = var2;
                    var2 = var0.invite;
                    var2 = var2.profile;
                    var1.profile = var2;
                    var0 = var0.invite;
                    var0 = var0.roles;
                    var1.roles = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.INVITE_RESOLVE_SUCCESS = var9;
    var1.INVITE_RESOLVE_FAILURE = var8;
    var1.INSTANT_INVITE_REVOKE_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot13;
        var0 = var0.invite;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var0 = _closure1_slot7;
            var0 = var0.RESOLVED;
            var1.state = var0;
            var0 = _closure2_slot0;
            var0 = var0.invite;
            var0 = var0.inviter;
            var1.inviter = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.FRIEND_INVITE_CREATE_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.invites;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot13;
            var0 = arg0;
            var2 = var0.code;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                var0 = _closure1_slot7;
                var1 = var0.EXPIRED;
                var0 = arg0;
                var0.state = var1;
                var0 = undefined;
                return var0;
            };
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.FRIEND_INVITE_REVOKE_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot13;
        var0 = var0.invite;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            _fun28323: for (var _fun28323_ip = 0;;) switch (_fun28323_ip) {
                case 0:
                    var1 = arg0;
                    var0 = _closure1_slot7;
                    var0 = var0.RESOLVED;
                    var1.state = var0;
                    var2 = _closure2_slot0;
                    var3 = var2.invite;
                    var3 = var3.guild;
                    var1.guild = var3;
                    var3 = var2.invite;
                    var3 = var3.channel;
                    var1.channel = var3;
                    var3 = var2.invite;
                    var3 = var3.inviter;
                    var1.inviter = var3;
                    var2 = var2.invite;
                    var4 = var2.approximate_member_count;
                    var2 = null;
                    var5 = var2 != var4;
                    var3 = null;
                    if (!var5) {
                        _fun28323_ip = 107;
                        continue _fun28323
                    }
                case 104:
                    var3 = var4;
                case 107:
                    var1.approximate_member_count = var3;
                    var3 = _closure2_slot0;
                    var3 = var3.invite;
                    var3 = var3.approximate_presence_count;
                    var4 = var2 != var3;
                    var2 = null;
                    if (!var4) {
                        _fun28323_ip = 141;
                        continue _fun28323
                    }
                case 138:
                    var2 = var3;
                case 141:
                    var1.approximate_presence_count = var2;
                    var0 = _closure2_slot0;
                    var2 = var0.invite;
                    var2 = var2.target_type;
                    var1.target_type = var2;
                    var2 = var0.invite;
                    var2 = var2.target_user;
                    var1.target_user = var2;
                    var2 = var0.invite;
                    var2 = var2.target_application;
                    var1.target_application = var2;
                    var2 = var0.invite;
                    var2 = var2.guild_scheduled_event;
                    var1.guild_scheduled_event = var2;
                    var2 = var0.invite;
                    var2 = var2.type;
                    var1.type = var2;
                    var2 = var0.invite;
                    var2 = var2.is_nickname_changeable;
                    var1.is_nickname_changeable = var2;
                    var2 = var0.invite;
                    var2 = var2.profile;
                    var1.profile = var2;
                    var0 = var0.invite;
                    var0 = var0.roles;
                    var1.roles = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.INSTANT_INVITE_CREATE_SUCCESS = var8;
    var8 = function arg0() {
        var3 = _closure1_slot13;
        var0 = arg0;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            var0 = _closure1_slot7;
            var1 = var0.ACCEPTING;
            var0 = arg0;
            var0.state = var1;
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.INVITE_ACCEPT = var8;
    var8 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot13;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var0 = _closure1_slot7;
            var0 = var0.ACCEPTED;
            var1.state = var0;
            var2 = _closure2_slot0;
            var0 = var2.invite;
            var0 = var0.guild;
            var1.guild = var0;
            var0 = var2.invite;
            var0 = var0.new_member;
            var1.new_member = var0;
            var0 = {};
            var4 = var1.channel;
            var5 = var0;
            var3 = copyDataProperties(var5, var4);
            var2 = var2.invite;
            var4 = var2.channel;
            var5 = var0;
            var2 = copyDataProperties(var5, var4);
            var1.channel = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.INVITE_ACCEPT_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var5 = _closure1_slot9;
        var4 = var5.set;
        var3 = var0.code;
        var2 = var0.error;
        var2 = var4.bind(var5)(var3, var2);
        var3 = _closure1_slot13;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            var0 = _closure1_slot7;
            var1 = var0.ERROR;
            var0 = arg0;
            var0.state = var1;
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.INVITE_ACCEPT_FAILURE = var8;
    var8 = function arg0() {
        var3 = _closure1_slot13;
        var0 = arg0;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            var0 = _closure1_slot7;
            var1 = var0.APP_OPENING;
            var0 = arg0;
            var0.state = var1;
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.INVITE_APP_OPENING = var8;
    var8 = function arg0() {
        var3 = _closure1_slot13;
        var0 = arg0;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            var0 = _closure1_slot7;
            var1 = var0.APP_OPENED;
            var0 = arg0;
            var0.state = var1;
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.INVITE_APP_OPENED = var8;
    var8 = function arg0() {
        var3 = _closure1_slot13;
        var0 = arg0;
        var2 = var0.code;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            var0 = _closure1_slot7;
            var1 = var0.APP_NOT_OPENED;
            var0 = arg0;
            var0.state = var1;
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.INVITE_APP_NOT_OPENED = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = global;
        var4 = var1.Map;
        var6 = _closure1_slot11;
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var7 = var3;
        var2 = new var7[var4](var6, var5);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot11 = var3;
        var2 = var3.set;
        var1 = var0.code;
        var0 = var0.friendMemberIds;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var1.INVITE_FRIEND_MEMBERS_FETCH_SUCCESS = var8;
    var3 = function arg0() {
        _fun28337: for (var _fun28337_ip = 0;;) switch (_fun28337_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot11;
                var3 = var4.has;
                var2 = var0.code;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun28337_ip = 32;
                    continue _fun28337
                }
            case 28:
                var2 = false;
                return var2;
            case 32:
                var2 = global;
                var4 = var2.Map;
                var5 = _closure1_slot11;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                _closure1_slot11 = var2;
                var1 = var2.delete;
                var0 = var0.code;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.INVITE_FRIEND_MEMBERS_FETCH_FAILURE = var3;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/InviteStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 3315, 566, 806, 2]);