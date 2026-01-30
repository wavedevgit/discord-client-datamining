// modules/guild_member_verification/UserGuildJoinRequestStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun27674: for (var _fun27674_ip = 0;;) switch (_fun27674_ip) {
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
                _fun27674_ip = 74;
                continue _fun27674;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var1 = function(arg0) { // Original name: joinRequestFromServer, environment: var4
        var1 = arg0;
        var0 = {};
        var2 = var1.join_request_id;
        var0.joinRequestId = var2;
        var2 = var1.guild_id;
        var0.guildId = var2;
        var2 = var1.user_id;
        var0.userId = var2;
        var2 = var1.user;
        var0.user = var2;
        var2 = var1.created_at;
        var0.createdAt = var2;
        var2 = var1.form_responses;
        var0.formResponses = var2;
        var2 = var1.rejection_reason;
        var0.rejectionReason = var2;
        var2 = var1.application_status;
        var0.applicationStatus = var2;
        var2 = var1.actioned_at;
        var0.actionedAt = var2;
        var2 = var1.actioned_by_user;
        var0.actionedByUser = var2;
        var2 = var1.last_seen;
        var0.lastSeen = var2;
        var1 = var1.interview_channel_id;
        var0.interviewChannelId = var1;
        return var0;
    };
    var _closure1_slot14 = var1;
    var0 = function(arg0) { // Original name: deleteJoinRequest, environment: var4
        _fun27678: for (var _fun27678_ip = 0;;) switch (_fun27678_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot9;
                var0 = delete var0[var2];
                var0 = _closure1_slot8;
                if (!(var0 === var2)) {
                    _fun27678_ip = 28;
                    continue _fun27678
                }
            case 22:
                var0 = null;
                _closure1_slot8 = var0;
            case 28:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var9 = function(arg0) { // Original name: handleGatewayJoinRequestUpdate, environment: var4
        _fun27679: for (var _fun27679_ip = 0;;) switch (_fun27679_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var4 = var0.request;
                var5 = null;
                if (!(var5 != var4)) {
                    _fun27679_ip = 118;
                    continue _fun27679
                }
            case 20:
                var3 = _closure1_slot14;
                var1 = undefined;
                var4 = var3.bind(var1)(var4);
                var6 = _closure1_slot7;
                var3 = var6.getCurrentUser;
                var3 = var3.bind(var6)();
                if (!(var5 != var3)) {
                    _fun27679_ip = 65;
                    continue _fun27679
                }
            case 51:
                var5 = var4.userId;
                var3 = var3.id;
                if (!(var5 === var3)) {
                    _fun27679_ip = 122;
                    continue _fun27679
                }
            case 65:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var3 = var6[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isApprovedAndAcked;
                var3 = var3.bind(var5)(var4);
                if (var3) {
                    _fun27679_ip = 109;
                    continue _fun27679
                }
            case 99:
                var3 = _closure1_slot9;
                var3[var2] = var4;
                _fun27679_ip = 118;
                continue _fun27679;
            case 109:
                var0 = _closure1_slot15;
                var0 = var0.bind(var1)(var2);
            case 118:
                var0 = undefined;
                return var0;
            case 122:
                var0 = false;
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = null;
    var _closure1_slot8 = var3;
    var3 = {};
    var _closure1_slot9 = var3;
    var3 = false;
    var _closure1_slot10 = var3;
    var3 = {};
    var _closure1_slot11 = var3;
    var3 = {};
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: UserGuildJoinRequestStore, environment: var5
            _fun27681: for (var _fun27681_ip = 0;;) switch (_fun27681_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun27681_ip = 69;
                        continue _fun27681
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun27681_ip = 105;
                    continue _fun27681;
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
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getRequest';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot9;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'computeGuildIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot9;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                _fun27685: for (var _fun27685_ip = 0;;) switch (_fun27685_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        var2 = var0 == var1;
                        var0 = undefined;
                        if (var2) {
                            _fun27685_ip = 19;
                            continue _fun27685
                        }
                    case 14:
                        var0 = var1.guildId;
                    case 19:
                        return var0;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = null;
                var0 = arg0;
                var0 = var1 != var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getJoinRequestGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun27687: for (var _fun27687_ip = 0;;) switch (_fun27687_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure1_slot11;
                    var2 = var0[var4];
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun27687_ip = 64;
                        continue _fun27687
                    }
                case 23:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.fromGuildBasic;
                    var1 = _closure1_slot11;
                    var1 = var1[var4];
                    var0 = var2.bind(var3)(var1);
                case 64:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasFetchedRequestToJoinGuilds';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasJoinRequestCoackmark';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot8;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getCooldown';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot12;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'UserGuildJoinRequestStore';
    var8.displayName = var3;
    var3 = 9;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var10 = function(arg0) { // Original name: handleConnectionOpen, environment: var4
        var0 = arg0;
        var2 = var0.guildJoinRequests;
        var0 = false;
        _closure1_slot10 = var0;
        var0 = {};
        _closure1_slot11 = var0;
        var0 = {};
        _closure1_slot9 = var0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun27692: for (var _fun27692_ip = 0;;) switch (_fun27692_ip) {
                case 0:
                    var4 = arg0;
                    var2 = var4.guild_id;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun27692_ip = 36;
                        continue _fun27692
                    }
                case 14:
                    var1 = _closure1_slot9;
                    var3 = _closure1_slot14;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var4);
                    var1[var2] = var0;
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_OPEN = var10;
    var3.GUILD_JOIN_REQUEST_UPDATE = var9;
    var3.GUILD_JOIN_REQUEST_CREATE = var9;
    var9 = function(arg0) { // Original name: handleRemoveJoinRequest, environment: var4
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot15;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.GUILD_JOIN_REQUEST_DELETE = var9;
    var9 = function(arg0) { // Original name: handleJoinRequestUpdate, environment: var4
        _fun27694: for (var _fun27694_ip = 0;;) switch (_fun27694_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.request;
                var2 = var0.guildId;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun27694_ip = 36;
                    continue _fun27694
                }
            case 20:
                var1 = _closure1_slot15;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                _fun27694_ip = 103;
                continue _fun27694;
            case 36:
                var3 = _closure1_slot14;
                var1 = undefined;
                var4 = var3.bind(var1)(var4);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var3 = var6[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.isApprovedAndAcked;
                var3 = var3.bind(var5)(var4);
                if (var3) {
                    _fun27694_ip = 94;
                    continue _fun27694
                }
            case 84:
                var3 = _closure1_slot9;
                var3[var2] = var4;
                _fun27694_ip = 103;
                continue _fun27694;
            case 94:
                var0 = _closure1_slot15;
                var0 = var0.bind(var1)(var2);
            case 103:
                var0 = undefined;
                return var0;
        }
    };
    var3.USER_GUILD_JOIN_REQUEST_UPDATE = var9;
    var9 = function(arg0) { // Original name: handleGuildLeave, environment: var4
        var2 = _closure1_slot15;
        var0 = arg0;
        var0 = var0.guild;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.GUILD_DELETE = var9;
    var9 = function(arg0) { // Original name: handleJoinRequestGuildsFetch, environment: var4
        var0 = arg0;
        var2 = var0.guilds;
        var0 = true;
        _closure1_slot10 = var0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.id;
            var6 = var0.name;
            var5 = var0.features;
            var4 = var0.icon;
            var3 = var0.splash;
            var1 = _closure1_slot11;
            var0 = {};
            var0.id = var2;
            var0.name = var6;
            var0.features = var5;
            var0.icon = var4;
            var0.splash = var3;
            var1[var2] = var0;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.USER_JOIN_REQUEST_GUILDS_FETCH = var9;
    var9 = function(arg0) { // Original name: handleVerificationFormUpdate, environment: var4
        _fun27698: for (var _fun27698_ip = 0;;) switch (_fun27698_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.form;
                var3 = var0.guildId;
                var6 = null;
                var4 = var6 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun27698_ip = 32;
                    continue _fun27698
                }
            case 27:
                var2 = var1.guild;
            case 32:
                if (!(var6 != var2)) {
                    _fun27698_ip = 111;
                    continue _fun27698
                }
            case 36:
                var1 = var1.guild;
                var9 = var1.id;
                var8 = var1.name;
                var7 = var1.icon;
                var5 = var1.features;
                var4 = var1.splash;
                var2 = _closure1_slot11;
                var1 = {};
                var1.id = var9;
                var1.name = var8;
                var1.icon = var7;
                if (!(var6 == var5)) {
                    _fun27698_ip = 97;
                    continue _fun27698
                }
            case 93:
                var5 = new Array(0);
            case 97:
                var1.features = var5;
                var1.splash = var4;
                var2[var3] = var1;
            case 111:
                return var0;
        }
    };
    var3.MEMBER_VERIFICATION_FORM_UPDATE = var9;
    var9 = function(arg0) { // Original name: handleInviteSuccess, environment: var4
        _fun27699: for (var _fun27699_ip = 0;;) switch (_fun27699_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.invite;
                var1 = var0.guild;
                var7 = var0.join_request;
                var5 = null;
                if (!(var5 != var1)) {
                    _fun27699_ip = 124;
                    continue _fun27699
                }
            case 26:
                if (!(var5 != var7)) {
                    _fun27699_ip = 124;
                    continue _fun27699
                }
            case 30:
                var4 = var7.guild_id;
                var3 = _closure1_slot9;
                var6 = _closure1_slot14;
                var2 = undefined;
                var2 = var6.bind(var2)(var7);
                var3[var4] = var2;
                var2 = var1.id;
                var7 = var1.name;
                var6 = var1.icon;
                var4 = var1.features;
                var3 = var1.splash;
                var1 = _closure1_slot11;
                var0 = {};
                var0.id = var2;
                var0.name = var7;
                var0.icon = var6;
                if (!(var5 == var4)) {
                    _fun27699_ip = 110;
                    continue _fun27699
                }
            case 106:
                var4 = new Array(0);
            case 110:
                var0.features = var4;
                var0.splash = var3;
                var1[var2] = var0;
            case 124:
                var0 = undefined;
                return var0;
        }
    };
    var3.INVITE_ACCEPT_SUCCESS = var9;
    var9 = function(arg0) { // Original name: handleAckApprovedGuildJoinRequest, environment: var4
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot15;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.ACK_APPROVED_GUILD_JOIN_REQUEST = var9;
    var9 = function(arg0) { // Original name: handleShowCoachmark, environment: var4
        var0 = arg0;
        var1 = var0.guildId;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var3.USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW = var9;
    var9 = function() { // Original name: handleClearCoachmark, environment: var4
        var0 = null;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var3.USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR = var9;
    var4 = function(arg0) { // Original name: handleJoinRequestCooldownFetch, environment: var4
        _fun27703: for (var _fun27703_ip = 0;;) switch (_fun27703_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var3 = var0.cooldown;
                var1 = _closure1_slot12;
                var0 = null;
                var4 = var0 != var3;
                var0 = 0;
                if (!var4) {
                    _fun27703_ip = 35;
                    continue _fun27703
                }
            case 32:
                var0 = var3;
            case 35:
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/UserGuildJoinRequestStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.joinRequestFromServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1613, 3174, 1598, 566, 806, 2]);