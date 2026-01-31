// modules/gateway/GatewaySocketOpCodes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var4;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun94829: for (var _fun94829_ip = 0;;) switch (_fun94829_ip) {
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
                _fun94829_ip = 76;
                continue _fun94829;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var5);
    var0 = 0;
    var5 = var4[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 8;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var5 = var5.EventEmitter;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: GatewaySocketOpCodes, environment: var5
            _fun94833: for (var _fun94833_ip = 0;;) switch (_fun94833_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun94833_ip = 69;
                        continue _fun94833
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun94833_ip = 105;
                    continue _fun94833;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'presenceUpdate';
        var4.key = var0;
        var0 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.PRESENCE_UPDATE;
            var1 = {};
            var5 = arg0;
            var1.status = var5;
            var5 = arg1;
            var1.since = var5;
            var5 = arg2;
            var1.activities = var5;
            var5 = arg3;
            var1.afk = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(21);
        var0[0] = var4;
        var4 = {};
        var6 = 'voiceStateUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun94835: for (var _fun94835_ip = 0;;) switch (_fun94835_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var11 = var1.guildId;
                    var0 = undefined;
                    if (!(var11 === var0)) {
                        _fun94835_ip = 19;
                        continue _fun94835
                    }
                case 17:
                    var11 = null;
                case 19:
                    var7 = var1.channelId;
                    if (!(var7 === var0)) {
                        _fun94835_ip = 30;
                        continue _fun94835
                    }
                case 28:
                    var7 = null;
                case 30:
                    var10 = var1.selfMute;
                    if (!(var10 === var0)) {
                        _fun94835_ip = 42;
                        continue _fun94835
                    }
                case 40:
                    var10 = false;
                case 42:
                    var9 = var1.selfDeaf;
                    if (!(var9 === var0)) {
                        _fun94835_ip = 54;
                        continue _fun94835
                    }
                case 52:
                    var9 = false;
                case 54:
                    var8 = var1.selfVideo;
                    if (!(var8 === var0)) {
                        _fun94835_ip = 66;
                        continue _fun94835
                    }
                case 64:
                    var8 = false;
                case 66:
                    var5 = var1.preferredRegion;
                    if (!(var5 === var0)) {
                        _fun94835_ip = 78;
                        continue _fun94835
                    }
                case 76:
                    var5 = null;
                case 78:
                    var2 = var1.preferredRegions;
                    if (!(var2 === var0)) {
                        _fun94835_ip = 90;
                        continue _fun94835
                    }
                case 88:
                    var2 = null;
                case 90:
                    var6 = var1.videoStreamParameters;
                    if (!(var6 === var0)) {
                        _fun94835_ip = 102;
                        continue _fun94835
                    }
                case 100:
                    var6 = null;
                case 102:
                    var1 = var1.flags;
                    if (!(var1 === var0)) {
                        _fun94835_ip = 113;
                        continue _fun94835
                    }
                case 111:
                    var1 = 0;
                case 113:
                    var3 = {};
                    var3.guild_id = var11;
                    var3.channel_id = var7;
                    var3.self_mute = var10;
                    var3.self_deaf = var9;
                    var3.self_video = var8;
                    var3.flags = var1;
                    var1 = null;
                    var7 = var1 != var7;
                    if (!var7) {
                        _fun94835_ip = 168;
                        continue _fun94835
                    }
                case 151:
                    var9 = _closure1_slot8;
                    var8 = var9.shouldIncludePreferredRegion;
                    var7 = var8.bind(var9)();
                case 168:
                    if (!var7) {
                        _fun94835_ip = 185;
                        continue _fun94835
                    }
                case 171:
                    var3.preferred_region = var5;
                    var3.preferred_regions = var2;
                case 185:
                    if (!(var1 != var6)) {
                        _fun94835_ip = 223;
                        continue _fun94835
                    }
                case 189:
                    var2 = var1 == var6;
                    var1 = undefined;
                    if (var2) {
                        _fun94835_ip = 217;
                        continue _fun94835
                    }
                case 198:
                    var5 = var6.map;
                    var2 = function(arg0) { // Environment: var2
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.type;
                        var0.type = var2;
                        var2 = var1.rid;
                        var0.rid = var2;
                        var1 = var1.quality;
                        var0.quality = var1;
                        return var0;
                    };
                    var1 = var5.bind(var6)(var2);
                case 217:
                    var3.tracks = var1;
                case 223:
                    var2 = var4.send;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var1 = var6[var1];
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.Opcode;
                    var1 = var1.VOICE_STATE_UPDATE;
                    var1 = var2.bind(var4)(var1, var3);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'voiceServerPing';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.VOICE_SERVER_PING;
            var1 = null;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'requestGuildMembers';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var0 = arg1;
            var4 = this;
            var8 = var0.query;
            var7 = var0.limit;
            var6 = var0.userIds;
            var5 = var0.presences;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.REQUEST_GUILD_MEMBERS;
            var1 = {};
            var9 = arg0;
            var1.guild_id = var9;
            var1.query = var8;
            var1.limit = var7;
            var1.user_ids = var6;
            var1.presences = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'searchRecentMembers';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun94839: for (var _fun94839_ip = 0;;) switch (_fun94839_ip) {
                case 0:
                    var0 = arg1;
                    var4 = this;
                    var8 = var0.query;
                    var6 = var0.continuationToken;
                    var3 = var4.send;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.Opcode;
                    var2 = var1.SEARCH_RECENT_MEMBERS;
                    var1 = {};
                    var5 = arg0;
                    var1.guild_id = var5;
                    var5 = null;
                    var9 = var5 != var8;
                    var7 = '';
                    if (!var9) {
                        _fun94839_ip = 86;
                        continue _fun94839
                    }
                case 83:
                    var7 = var8;
                case 86:
                    var1.query = var7;
                    var7 = var5 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun94839_ip = 103;
                        continue _fun94839
                    }
                case 100:
                    var5 = var6;
                case 103:
                    var1.continuation_token = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'updateGuildSubscriptions';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun94840: for (var _fun94840_ip = 0;;) switch (_fun94840_ip) {
                case 0:
                    var7 = arg0;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var7;
                    var0 = {};
                    var _closure3_slot2 = var0;
                    var3 = 0;
                    var _closure3_slot3 = var3;
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var6.bind(var0)(var2);
                    var2 = var6.keys;
                    var7 = var2.bind(var6)(var7);
                    var6 = var7.forEach;
                    var2 = function(arg0) { // Environment: var5
                        _fun94841: for (var _fun94841_ip = 0;;) switch (_fun94841_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = _closure3_slot1;
                                var3 = var0[var4];
                                var0 = global;
                                var5 = var0.JSON;
                                var2 = var5.stringify;
                                var0 = new Array(2);
                                var0[0] = var4;
                                var0[1] = var3;
                                var0 = var2.bind(var5)(var0);
                                var2 = var0.length;
                                var0 = _closure3_slot3;
                                var5 = var0 + var2;
                                var0 = 15360;
                                if (!(var5 > var0)) {
                                    _fun94841_ip = 144;
                                    continue _fun94841
                                }
                            case 68:
                                var7 = _closure3_slot0;
                                var6 = var7.send;
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 6;
                                var5 = var5[var0];
                                var0 = undefined;
                                var0 = var8.bind(var0)(var5);
                                var0 = var0.Opcode;
                                var5 = var0.GUILD_SUBSCRIPTIONS_BULK;
                                var0 = {};
                                var8 = _closure3_slot2;
                                var0.subscriptions = var8;
                                var0 = var6.bind(var7)(var5, var0);
                                var0 = {};
                                _closure3_slot2 = var0;
                                var0 = 0;
                                _closure3_slot3 = var0;
                            case 144:
                                var0 = _closure3_slot2;
                                var0[var4] = var3;
                                var0 = _closure3_slot3;
                                var0 = var0 + var2;
                                _closure3_slot3 = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var6.bind(var7)(var2);
                    var2 = _closure3_slot3;
                    if (!(var2 > var3)) {
                        _fun94840_ip = 143;
                        continue _fun94840
                    }
                case 88:
                    var3 = var4.send;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var1 = var6[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.Opcode;
                    var2 = var1.GUILD_SUBSCRIPTIONS_BULK;
                    var1 = {};
                    var5 = _closure3_slot2;
                    var1.subscriptions = var5;
                    var1 = var3.bind(var4)(var2, var1);
                case 143:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'callConnect';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.CALL_CONNECT;
            var1 = {};
            var5 = arg0;
            var1.channel_id = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'streamCreate';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun94843: for (var _fun94843_ip = 0;;) switch (_fun94843_ip) {
                case 0:
                    var5 = arguments[3];
                    var4 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun94843_ip = 14;
                        continue _fun94843
                    }
                case 12:
                    var5 = null;
                case 14:
                    var3 = var4.send;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var1 = var6[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.Opcode;
                    var2 = var1.STREAM_CREATE;
                    var1 = {};
                    var6 = arg0;
                    var1.type = var6;
                    var6 = arg1;
                    var1.guild_id = var6;
                    var6 = arg2;
                    var1.channel_id = var6;
                    var1.preferred_region = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'streamWatch';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.STREAM_WATCH;
            var1 = {};
            var5 = arg0;
            var1.stream_key = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'streamPing';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.STREAM_PING;
            var1 = {};
            var5 = arg0;
            var1.stream_key = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'streamDelete';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.STREAM_DELETE;
            var1 = {};
            var5 = arg0;
            var1.stream_key = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'streamSetPaused';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.STREAM_SET_PAUSED;
            var1 = {};
            var5 = arg0;
            var1.stream_key = var5;
            var5 = arg1;
            var1.paused = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'requestForumUnreads';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            var7 = arg2;
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.REQUEST_FORUM_UNREADS;
            var1 = {};
            var5 = arg0;
            var1.guild_id = var5;
            var5 = arg1;
            var1.channel_id = var5;
            var6 = var7.map;
            var5 = function(arg0) { // Environment: var5
                var1 = arg0;
                var0 = {};
                var2 = var1.threadId;
                var0.thread_id = var2;
                var1 = var1.ackMessageId;
                var0.ack_message_id = var1;
                return var0;
            };
            var5 = var6.bind(var7)(var5);
            var1.threads = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'requestSoundboardSounds';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.REQUEST_SOUNDBOARD_SOUNDS;
            var1 = {};
            var5 = arg0;
            var1.guild_ids = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'requestLastMessages';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.REQUEST_LAST_MESSAGES;
            var1 = {};
            var5 = arg0;
            var1.guild_id = var5;
            var5 = arg1;
            var1.channel_ids = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getDeletedEntityIdsNotMatchingHash';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH;
            var1 = {};
            var5 = arg0;
            var1.guild_id = var5;
            var5 = arg1;
            var1.channel_ids_hash = var5;
            var5 = arg2;
            var1.role_ids_hash = var5;
            var5 = arg3;
            var1.emoji_ids_hash = var5;
            var5 = arg4;
            var1.sticker_ids_hash = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'triggerGuildChannelResync';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.GUILD_CHANNELS_RESYNC;
            var1 = {};
            var5 = arg0;
            var1.guild_id = var5;
            var5 = arg1;
            var1.obfuscated_channel_ids = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'requestChannelStatuses';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.REQUEST_CHANNEL_STATUSES;
            var1 = {};
            var5 = arg0;
            var1.guild_id = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'requestChannelInfo';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.REQUEST_CHANNEL_INFO;
            var1 = {};
            var5 = arg0;
            var1.guild_id = var5;
            var5 = arg1;
            var1.fields = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'requestChannelMemberCount';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.REQUEST_CHANNEL_MEMBER_COUNT;
            var1 = {};
            var5 = arg0;
            var1.guild_id = var5;
            var5 = arg1;
            var1.channel_id = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'remoteCommand';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.send;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.Opcode;
            var2 = var1.REMOTE_COMMAND;
            var1 = {};
            var5 = arg0;
            var1.target_session_id = var5;
            var5 = arg1;
            var1.payload = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var5;
        var0[20] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var5);
    var5 = 9;
    var5 = var4[var5];
    var7 = var3.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/gateway/GatewaySocketOpCodes.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.Opcode;
    var2.Opcode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3586, 12383, 21, 639, 2]);