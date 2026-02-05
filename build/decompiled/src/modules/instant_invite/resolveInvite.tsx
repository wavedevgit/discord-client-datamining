// modules/instant_invite/resolveInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun92747: for (var _fun92747_ip = 0;;) switch (_fun92747_ip) {
            case 0:
                var4 = arg0;
                var3 = null;
                var1 = var3 != var4;
                var0 = null;
                if (!var1) {
                    _fun92747_ip = 183;
                    continue _fun92747
                }
            case 17:
                var1 = var4.channel;
                var1 = var3 != var1;
                var0 = null;
                if (!var1) {
                    _fun92747_ip = 183;
                    continue _fun92747
                }
            case 34:
                var1 = var4.channel;
                var6 = var4.target_type;
                var5 = _closure1_slot7;
                var5 = var5.STREAM;
                if (!(var6 !== var5)) {
                    _fun92747_ip = 170;
                    continue _fun92747
                }
            case 62:
                var5 = var4.target_type;
                var4 = _closure1_slot7;
                var4 = var4.EMBEDDED_APPLICATION;
                if (!(var5 !== var4)) {
                    _fun92747_ip = 158;
                    continue _fun92747
                }
            case 82:
                var6 = _closure1_slot4;
                var5 = var1.type;
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                if (var5) {
                    _fun92747_ip = 146;
                    continue _fun92747
                }
            case 101:
                if (!(var3 != var1)) {
                    _fun92747_ip = 134;
                    continue _fun92747
                }
            case 105:
                var3 = _closure1_slot3;
                var1 = var1.type;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun92747_ip = 134;
                    continue _fun92747
                }
            case 122:
                var1 = _closure1_slot10;
                var1 = var1.SERVER_INVITE;
                _fun92747_ip = 144;
                continue _fun92747;
            case 134:
                var3 = _closure1_slot10;
                var1 = var3.FRIEND_INVITE;
            case 144:
                _fun92747_ip = 156;
                continue _fun92747;
            case 146:
                var3 = _closure1_slot10;
                var1 = var3.GDM_INVITE;
            case 156:
                _fun92747_ip = 168;
                continue _fun92747;
            case 158:
                var3 = _closure1_slot10;
                var1 = var3.APPLICATION;
            case 168:
                _fun92747_ip = 180;
                continue _fun92747;
            case 170:
                var2 = _closure1_slot10;
                var1 = var2.STREAM;
            case 180:
                var0 = var1;
            case 183:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var8 = var6.isPrivate;
    var _closure1_slot3 = var8;
    var6 = var6.isMultiUserDM;
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.InviteTargetTypes;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.Endpoints;
    var _closure1_slot8 = var7;
    var7 = var6.AnalyticEvents;
    var _closure1_slot9 = var7;
    var7 = var6.LoggingInviteTypes;
    var _closure1_slot10 = var7;
    var6 = var6.AbortCodes;
    var _closure1_slot11 = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/resolveInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun92748: for (var _fun92748_ip = 0;;) switch (_fun92748_ip) {
            case 0:
                var2 = arg0;
                var3 = arg2;
                var _closure2_slot0 = var2;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var3;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 5;
                var4 = var6[var4];
                var9 = undefined;
                var7 = var5.bind(var9)(var4);
                var6 = var7.track;
                var4 = _closure1_slot9;
                var5 = var4.INVITE_OPENED;
                var4 = {};
                var4.invite_code = var2;
                var4 = var6.bind(var7)(var5, var4);
                var5 = _closure1_slot12;
                var4 = var5.has;
                var4 = var4.bind(var5)(var2);
                if (var4) {
                    _fun92748_ip = 370;
                    continue _fun92748
                }
            case 96:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 6;
                var4 = var10[var4];
                var5 = var8.bind(var9)(var4);
                var4 = var5.parseExtraDataFromInviteKey;
                var11 = var4.bind(var5)(var2);
                var _closure2_slot3 = var11;
                var7 = {};
                var15 = var7;
                var14 = var3;
                var3 = copyDataProperties(var15, var14);
                var6 = true;
                var3 = 'with_counts';
                var7[var3] = var6;
                var3 = 'with_expiration';
                var7[var3] = var6;
                var4 = var11.guildScheduledEventId;
                var3 = 'guild_scheduled_event_id';
                var7[var3] = var4;
                var3 = 'with_permissions';
                var7[var3] = var6;
                var4 = _closure1_slot1;
                var3 = 7;
                var3 = var10[var3];
                var5 = var4.bind(var9)(var3);
                var4 = var5.get;
                var3 = {};
                var13 = _closure1_slot8;
                var12 = var13.INVITE;
                var11 = var11.baseCode;
                var11 = var12.bind(var13)(var11);
                var3.url = var11;
                var3.query = var7;
                var3.oldFormErrors = var6;
                var6 = {};
                var7 = 8;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.NetworkActionNames;
                var7 = var7.INVITE_RESOLVE;
                var6.event = var7;
                var7 = function arg0() {
                    _fun92749: for (var _fun92749_ip = 0;;) switch (_fun92749_ip) {
                        case 0:
                            var8 = arg0;
                            var7 = var8.body;
                            var0 = var8.body;
                            var4 = null;
                            var1 = var4 == var0;
                            var9 = undefined;
                            var6 = undefined;
                            if (var1) {
                                _fun92749_ip = 31;
                                continue _fun92749
                            }
                        case 26:
                            var6 = var0.code;
                        case 31:
                            var0 = _closure1_slot11;
                            var5 = var0.USER_BANNED;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var0 = var2[var0];
                            var2 = var1.bind(var9)(var0);
                            var1 = var2.exact;
                            var0 = {};
                            var8 = var8.ok;
                            var0.resolved = var8;
                            var10 = var4 == var7;
                            var8 = undefined;
                            if (var10) {
                                _fun92749_ip = 111;
                                continue _fun92749
                            }
                        case 92:
                            var10 = var7.guild;
                            var11 = var4 == var10;
                            var8 = undefined;
                            if (var11) {
                                _fun92749_ip = 111;
                                continue _fun92749
                            }
                        case 106:
                            var8 = var10.id;
                        case 111:
                            var0.guild_id = var8;
                            var10 = var4 == var7;
                            var8 = undefined;
                            if (var10) {
                                _fun92749_ip = 143;
                                continue _fun92749
                            }
                        case 124:
                            var10 = var7.channel;
                            var11 = var4 == var10;
                            var8 = undefined;
                            if (var11) {
                                _fun92749_ip = 143;
                                continue _fun92749
                            }
                        case 138:
                            var8 = var10.id;
                        case 143:
                            var0.channel_id = var8;
                            var10 = var4 == var7;
                            var8 = undefined;
                            if (var10) {
                                _fun92749_ip = 175;
                                continue _fun92749
                            }
                        case 156:
                            var10 = var7.channel;
                            var11 = var4 == var10;
                            var8 = undefined;
                            if (var11) {
                                _fun92749_ip = 175;
                                continue _fun92749
                            }
                        case 170:
                            var8 = var10.type;
                        case 175:
                            var0.channel_type = var8;
                            var10 = var4 == var7;
                            var8 = undefined;
                            if (var10) {
                                _fun92749_ip = 209;
                                continue _fun92749
                            }
                        case 189:
                            var10 = var7.inviter;
                            var11 = var4 == var10;
                            var8 = undefined;
                            if (var11) {
                                _fun92749_ip = 209;
                                continue _fun92749
                            }
                        case 204:
                            var8 = var10.id;
                        case 209:
                            var0.inviter_id = var8;
                            var10 = _closure2_slot3;
                            var10 = var10.baseCode;
                            var0.code = var10;
                            var10 = _closure2_slot2;
                            var11 = var4 == var10;
                            var10 = undefined;
                            if (var11) {
                                _fun92749_ip = 254;
                                continue _fun92749
                            }
                        case 244:
                            var11 = _closure2_slot2;
                            var10 = var11.inputValue;
                        case 254:
                            var0.input_value = var10;
                            var8 = _closure2_slot1;
                            var0.location = var8;
                            var10 = _closure1_slot5;
                            var8 = var10.isAuthenticated;
                            var8 = var8.bind(var10)();
                            var0.authenticated = var8;
                            var10 = var4 == var7;
                            var8 = undefined;
                            if (var10) {
                                _fun92749_ip = 301;
                                continue _fun92749
                            }
                        case 295:
                            var8 = var7.approximate_member_count;
                        case 301:
                            var0.size_total = var8;
                            var10 = var4 == var7;
                            var8 = undefined;
                            if (var10) {
                                _fun92749_ip = 321;
                                continue _fun92749
                            }
                        case 315:
                            var8 = var7.approximate_presence_count;
                        case 321:
                            var0.size_online = var8;
                            var10 = var4 == var7;
                            var8 = undefined;
                            if (var10) {
                                _fun92749_ip = 355;
                                continue _fun92749
                            }
                        case 335:
                            var10 = var7.target_user;
                            var11 = var4 == var10;
                            var8 = undefined;
                            if (var11) {
                                _fun92749_ip = 355;
                                continue _fun92749
                            }
                        case 350:
                            var8 = var10.id;
                        case 355:
                            var0.destination_user_id = var8;
                            var8 = _closure1_slot13;
                            var8 = var8.bind(var9)(var7);
                            var0.invite_type = var8;
                            var5 = var6 === var5;
                            var0.user_banned = var5;
                            var6 = _closure1_slot6;
                            var5 = var6.getGuild;
                            var8 = var4 == var7;
                            var3 = undefined;
                            if (var8) {
                                _fun92749_ip = 420;
                                continue _fun92749
                            }
                        case 401:
                            var7 = var7.guild;
                            var8 = var4 == var7;
                            var3 = undefined;
                            if (var8) {
                                _fun92749_ip = 420;
                                continue _fun92749
                            }
                        case 415:
                            var3 = var7.id;
                        case 420:
                            var3 = var5.bind(var6)(var3);
                            var3 = var4 != var3;
                            var0.user_is_member = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6.properties = var7;
                var3.trackedActionData = var6;
                var6 = false;
                var3.rejectWithError = var6;
                var6 = var4.bind(var5)(var3);
                var5 = var6.then;
                var4 = function(arg0) { // Environment: var1
                    _fun92750: for (var _fun92750_ip = 0;;) switch (_fun92750_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.body;
                            var0 = _closure2_slot1;
                            var8 = null;
                            if (!(var8 != var0)) {
                                _fun92750_ip = 386;
                                continue _fun92750
                            }
                        case 24:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 5;
                            var3 = var5[var3];
                            var13 = undefined;
                            var6 = var4.bind(var13)(var3);
                            var5 = var6.track;
                            var3 = _closure1_slot9;
                            var4 = var3.INVITE_RESOLVED;
                            var3 = {};
                            var7 = true;
                            var3.resolved = var7;
                            var9 = var2.guild;
                            var10 = var8 != var9;
                            var9 = null;
                            if (!var10) {
                                _fun92750_ip = 97;
                                continue _fun92750
                            }
                        case 87:
                            var10 = var2.guild;
                            var9 = var10.id;
                        case 97:
                            var3.guild_id = var9;
                            var9 = var2.channel;
                            var10 = var8 != var9;
                            var9 = null;
                            if (!var10) {
                                _fun92750_ip = 125;
                                continue _fun92750
                            }
                        case 115:
                            var10 = var2.channel;
                            var9 = var10.id;
                        case 125:
                            var3.channel_id = var9;
                            var9 = var2.channel;
                            var10 = var8 != var9;
                            var9 = null;
                            if (!var10) {
                                _fun92750_ip = 153;
                                continue _fun92750
                            }
                        case 143:
                            var10 = var2.channel;
                            var9 = var10.type;
                        case 153:
                            var3.channel_type = var9;
                            var10 = var2.inviter;
                            var9 = null;
                            if (!var10) {
                                _fun92750_ip = 180;
                                continue _fun92750
                            }
                        case 169:
                            var10 = var2.inviter;
                            var9 = var10.id;
                        case 180:
                            var3.inviter_id = var9;
                            var9 = _closure2_slot3;
                            var9 = var9.baseCode;
                            var3.code = var9;
                            var9 = _closure2_slot2;
                            var10 = var8 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun92750_ip = 222;
                                continue _fun92750
                            }
                        case 212:
                            var10 = _closure2_slot2;
                            var9 = var10.inputValue;
                        case 222:
                            var3.input_value = var9;
                            var9 = _closure2_slot1;
                            var3.location = var9;
                            var10 = _closure1_slot5;
                            var9 = var10.isAuthenticated;
                            var9 = var9.bind(var10)();
                            var3.authenticated = var9;
                            var9 = var2.approximate_member_count;
                            var3.size_total = var9;
                            var9 = var2.approximate_presence_count;
                            var3.size_online = var9;
                            var9 = var2.target_user;
                            var10 = var8 != var9;
                            var9 = null;
                            if (!var10) {
                                _fun92750_ip = 302;
                                continue _fun92750
                            }
                        case 291:
                            var10 = var2.target_user;
                            var9 = var10.id;
                        case 302:
                            var3.destination_user_id = var9;
                            var9 = _closure1_slot13;
                            var9 = var9.bind(var13)(var2);
                            var3.invite_type = var9;
                            var10 = _closure1_slot6;
                            var9 = var10.getGuild;
                            var11 = var8 == var2;
                            var0 = undefined;
                            if (var11) {
                                _fun92750_ip = 358;
                                continue _fun92750
                            }
                        case 339:
                            var11 = var2.guild;
                            var12 = var8 == var11;
                            var0 = undefined;
                            if (var12) {
                                _fun92750_ip = 358;
                                continue _fun92750
                            }
                        case 353:
                            var0 = var11.id;
                        case 358:
                            var0 = var9.bind(var10)(var0);
                            var0 = var8 != var0;
                            var3.user_is_member = var0;
                            var0 = {};
                            var0.flush = var7;
                            var0 = var5.bind(var6)(var4, var3, var0);
                        case 386:
                            var0 = {};
                            var0.invite = var2;
                            var1 = _closure2_slot0;
                            var0.code = var1;
                            return var0;
                    }
                };
                var3 = function(arg0) { // Environment: var1
                    _fun92751: for (var _fun92751_ip = 0;;) switch (_fun92751_ip) {
                        case 0:
                            var8 = arg0;
                            var0 = var8.body;
                            var3 = null;
                            var1 = var3 != var0;
                            if (!var1) {
                                _fun92751_ip = 44;
                                continue _fun92751
                            }
                        case 17:
                            var0 = var8.body;
                            var2 = var0.code;
                            var0 = _closure1_slot11;
                            var0 = var0.USER_BANNED;
                            var1 = var2 === var0;
                        case 44:
                            var0 = _closure2_slot1;
                            if (!(var3 != var0)) {
                                _fun92751_ip = 245;
                                continue _fun92751
                            }
                        case 58:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 5;
                            var4 = var4[var0];
                            var0 = undefined;
                            var7 = var5.bind(var0)(var4);
                            var6 = var7.track;
                            var4 = _closure1_slot9;
                            var5 = var4.INVITE_RESOLVED;
                            var4 = {};
                            var10 = false;
                            var4.resolved = var10;
                            var10 = _closure2_slot3;
                            var10 = var10.baseCode;
                            var4.code = var10;
                            var10 = _closure2_slot2;
                            var11 = var3 == var10;
                            var10 = undefined;
                            if (var11) {
                                _fun92751_ip = 144;
                                continue _fun92751
                            }
                        case 134:
                            var11 = _closure2_slot2;
                            var10 = var11.inputValue;
                        case 144:
                            var4.input_value = var10;
                            var10 = _closure2_slot1;
                            var4.location = var10;
                            var10 = _closure1_slot5;
                            var9 = var10.isAuthenticated;
                            var9 = var9.bind(var10)();
                            var4.authenticated = var9;
                            var4.user_banned = var1;
                            var10 = var8.body;
                            var11 = var3 == var10;
                            var9 = undefined;
                            if (var11) {
                                _fun92751_ip = 200;
                                continue _fun92751
                            }
                        case 195:
                            var9 = var10.code;
                        case 200:
                            var4.error_code = var9;
                            var8 = var8.body;
                            var9 = var3 == var8;
                            var0 = undefined;
                            if (var9) {
                                _fun92751_ip = 224;
                                continue _fun92751
                            }
                        case 219:
                            var0 = var8.message;
                        case 224:
                            var4.error_message = var0;
                            var0 = {};
                            var8 = true;
                            var0.flush = var8;
                            var0 = var6.bind(var7)(var5, var4, var0);
                        case 245:
                            var0 = {};
                            var0.invite = var3;
                            var2 = _closure2_slot0;
                            var0.code = var2;
                            var0.banned = var1;
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4, var3);
                var3 = var4.finally;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot12;
                    var1 = var2.delete;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot12;
                var3 = var4.set;
                var3 = var3.bind(var4)(var2, var1);
                return var1;
            case 370:
                var1 = _closure1_slot12;
                var0 = var1.get;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1216, 1410, 3335, 660, 795, 3324, 4525, 481, 1385, 2]);