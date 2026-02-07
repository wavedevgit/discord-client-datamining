// actions/ActivitiesActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot5 = var6;
    var6 = var1.ActivityTypes;
    var _closure1_slot6 = var6;
    var6 = var1.AnalyticEvents;
    var _closure1_slot7 = var6;
    var1 = var1.LoggingInviteTypes;
    var _closure1_slot8 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.MessageSendLocation;
    var _closure1_slot9 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun78072: for (var _fun78072_ip = 0;;) switch (_fun78072_ip) {
            case 0:
                var2 = arg0;
                var15 = var2.applicationId;
                var _closure2_slot0 = var15;
                var11 = var2.distributor;
                var _closure2_slot1 = var11;
                var12 = var2.shareActivity;
                var14 = var2.token;
                var0 = undefined;
                if (!(var14 === var0)) {
                    _fun78072_ip = 44;
                    continue _fun78072
                }
            case 42:
                var14 = null;
            case 44:
                var13 = var2.duration;
                if (!(var13 === var0)) {
                    _fun78072_ip = 55;
                    continue _fun78072
                }
            case 53:
                var13 = 0;
            case 55:
                var _closure2_slot2 = var13;
                var10 = var2.closed;
                if (!(var10 === var0)) {
                    _fun78072_ip = 71;
                    continue _fun78072
                }
            case 69:
                var10 = false;
            case 71:
                var9 = var2.exePath;
                if (!(var9 === var0)) {
                    _fun78072_ip = 83;
                    continue _fun78072
                }
            case 81:
                var9 = null;
            case 83:
                var8 = var2.voiceChannelId;
                if (!(var8 === var0)) {
                    _fun78072_ip = 95;
                    continue _fun78072
                }
            case 93:
                var8 = null;
            case 95:
                var7 = var2.sessionId;
                if (!(var7 === var0)) {
                    _fun78072_ip = 107;
                    continue _fun78072
                }
            case 105:
                var7 = null;
            case 107:
                var6 = var2.mediaSessionId;
                if (!(var6 === var0)) {
                    _fun78072_ip = 119;
                    continue _fun78072
                }
            case 117:
                var6 = null;
            case 119:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var16 = var3.bind(var0)(var2);
                var3 = var16.wait;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'ACTIVITY_UPDATE_START';
                    var0.type = var3;
                    var4 = _closure2_slot0;
                    var0.applicationId = var4;
                    var4 = _closure2_slot2;
                    var0.duration = var4;
                    var3 = _closure2_slot1;
                    var0.distributor = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var16)(var2);
                var3 = _closure1_slot0;
                var2 = 5;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.HTTP;
                var3 = var4.post;
                var2 = {
                    'url': null,
                    'body': null,
                    'retries': 1,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var5 = _closure1_slot5;
                var5 = var5.ACTIVITIES;
                var2.url = var5;
                var5 = {};
                var5.application_id = var15;
                var5.token = var14;
                var5.duration = var13;
                var5.share_activity = var12;
                var5.distributor = var11;
                var5.closed = var10;
                var5.exePath = var9;
                var5.voice_channel_id = var8;
                var5.session_id = var7;
                var5.media_session_id = var6;
                var2.body = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.body;
                    var5 = var0.token;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'ACTIVITY_UPDATE_SUCCESS';
                    var1.type = var4;
                    var6 = _closure2_slot0;
                    var1.applicationId = var6;
                    var1.token = var5;
                    var5 = _closure2_slot2;
                    var1.duration = var5;
                    var4 = _closure2_slot1;
                    var1.distributor = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'ACTIVITY_UPDATE_FAIL';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.applicationId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.updateActivity = var6;
    var6 = function arg0() {
        _fun78076: for (var _fun78076_ip = 0;;) switch (_fun78076_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.channelId;
                var11 = var1.type;
                var10 = var1.activity;
                var _closure2_slot0 = var10;
                var8 = var1.content;
                var9 = var1.targetUserId;
                var1 = var1.location;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var3 = var2.bind(var3)(var4);
                var _closure2_slot2 = var3;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun78076_ip = 230;
                    continue _fun78076
                }
            case 75:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var6 = undefined;
                var7 = var5.bind(var6)(var4);
                var5 = var7.parse;
                var12 = var2 != var8;
                var4 = '';
                if (!var12) {
                    _fun78076_ip = 117;
                    continue _fun78076
                }
            case 114:
                var4 = var8;
            case 117:
                var15 = var5.bind(var7)(var3, var4);
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 7;
                var4 = var8[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.sendMessage;
                var16 = var3.id;
                var3 = {};
                var8 = {};
                var8.type = var11;
                var8.activity = var10;
                var8.targetUserId = var9;
                var3.activityAction = var8;
                var1 = _closure1_slot9;
                var1 = var1.ACTIVITY_SHARE;
                var3.location = var1;
                var14 = false;
                var17 = var6;
                var13 = var3;
                var4 = var17[var5](var16, var15, var14, var13, var12);
                var3 = var4.then;
                var1 = function(arg0) { // Environment: var0
                    _fun78077: for (var _fun78077_ip = 0;;) switch (_fun78077_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.trackWithMetadata;
                            var0 = _closure1_slot7;
                            var2 = var0.INVITE_SENT;
                            var1 = {};
                            var5 = _closure2_slot1;
                            var1.location = var5;
                            var5 = _closure2_slot0;
                            var8 = var5.type;
                            var5 = _closure1_slot6;
                            var5 = var5.LISTENING;
                            if (!(var8 !== var5)) {
                                _fun78077_ip = 92;
                                continue _fun78077
                            }
                        case 80:
                            var5 = _closure1_slot8;
                            var5 = var5.APPLICATION;
                            _fun78077_ip = 102;
                            continue _fun78077;
                        case 92:
                            var7 = _closure1_slot8;
                            var5 = var7.SPOTIFY;
                        case 102:
                            var1.invite_type = var5;
                            var5 = _closure2_slot0;
                            var5 = var5.application_id;
                            var1.application_id = var5;
                            var5 = _closure2_slot2;
                            var7 = var5.getGuildId;
                            var7 = var7.bind(var5)();
                            var1.guild_id = var7;
                            var5 = var5.id;
                            var1.channel_id = var5;
                            var5 = null;
                            var7 = var5 != var6;
                            if (!var7) {
                                _fun78077_ip = 168;
                                continue _fun78077
                            }
                        case 158:
                            var6 = var6.body;
                            var5 = var6.id;
                        case 168:
                            var1.message_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.resolve;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0 = function(arg0) { // Environment: var0
                    var0 = global;
                    var2 = var0.Promise;
                    var1 = var2.reject;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var1, var0);
                return var0;
            case 230:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1.sendActivityInvite = var6;
    var6 = function arg0() {
        var1 = arg0;
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = var1.userId;
        var2 = var1.type;
        var _closure2_slot1 = var2;
        var2 = var1.activity;
        var _closure2_slot2 = var2;
        var2 = var1.content;
        var _closure2_slot3 = var2;
        var1 = var1.location;
        var _closure2_slot4 = var1;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var1 = var2.ensurePrivateChannel;
        var2 = var1.bind(var2)(var3);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.sendActivityInvite;
            var0 = {};
            var4 = arg0;
            var0.channelId = var4;
            var4 = _closure2_slot1;
            var0.type = var4;
            var4 = _closure2_slot2;
            var0.activity = var4;
            var4 = _closure2_slot3;
            var0.content = var4;
            var3 = _closure2_slot4;
            var0.location = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.sendActivityInviteUser = var6;
    var6 = function arg0, arg1, arg2, arg3, arg4() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var1 = arg4;
        var _closure2_slot4 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun78083: for (var _fun78083_ip = 0;;) switch (_fun78083_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun78083_ip = 174;
                            continue _fun78083
                        }
                    case 10:
                        var4 = {};
                        var1 = _closure2_slot3;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun78083_ip = 35;
                            continue _fun78083
                        }
                    case 25:
                        var1 = _closure2_slot3;
                        var4.channel_id = var1;
                    case 35:
                        var1 = _closure2_slot4;
                        if (!(var2 != var1)) {
                            _fun78083_ip = 53;
                            continue _fun78083
                        }
                    case 43:
                        var1 = _closure2_slot4;
                        var4.message_id = var1;
                    case 53:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var9 = _closure1_slot5;
                        var8 = var9.USER_ACTIVITY_JOIN;
                        var7 = _closure2_slot0;
                        var6 = _closure2_slot1;
                        var5 = _closure2_slot2;
                        var5 = var8.bind(var9)(var7, var6, var5);
                        var1.url = var5;
                        var5 = 3;
                        var1.retries = var5;
                        var1.query = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 151);
                    case 149:
                        return var1;
                    case 151:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun78083_ip = 171;
                            continue _fun78083
                        }
                    case 157:
                        var2 = var1.body;
                        var2 = var2.secret;
                        return var2;
                    case 171:
                        return var1;
                    case 174:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getJoinSecret = var6;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun78086: for (var _fun78086_ip = 0;;) switch (_fun78086_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun78086_ip = 139;
                            continue _fun78086
                        }
                    case 10:
                        var3 = _closure2_slot0;
                        var2 = var3.map;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var5 = var0.userId;
                            var4 = var0.applicationId;
                            var3 = var0.partyId;
                            var2 = var0.messageId;
                            var1 = var0.channelId;
                            var0 = {};
                            var0.user_id = var5;
                            var0.application_id = var4;
                            var0.party_id = var3;
                            var0.message_id = var2;
                            var0.channel_id = var1;
                            return var0;
                        };
                        var5 = var2.bind(var3)(var1);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot5;
                        var4 = var4.USER_ACTIVITY_SUBSCRIBE;
                        var1.url = var4;
                        var4 = {};
                        var4.subscriptions = var5;
                        var1.body = var4;
                        var4 = 1;
                        var1.retries = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 122);
                    case 120:
                        return var1;
                    case 122:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun78086_ip = 136;
                            continue _fun78086
                        }
                    case 128:
                        var2 = var1.body;
                        return var2;
                    case 136:
                        return var1;
                    case 139:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.subscribeActivities = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ActivitiesActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 660, 1346, 806, 507, 5639, 6593, 4302, 3946, 2]);