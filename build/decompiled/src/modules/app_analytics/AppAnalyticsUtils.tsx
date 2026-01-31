// modules/app_analytics/AppAnalyticsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var11;
    var0 = function arg0() {
        _fun39427: for (var _fun39427_ip = 0;;) switch (_fun39427_ip) {
            case 0:
                var6 = arg0;
                var1 = 0;
                var2 = 1;
                var0 = 0;
                for (var3 in var6)
                    case 18: {
                        var0 = var1;
                        case 30: var1 = var1 + var2;
                        _fun39427_ip = 18;
                        continue _fun39427;
                    }
            case 36:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var7 = function arg0() {
        _fun39428: for (var _fun39428_ip = 0;;) switch (_fun39428_ip) {
            case 0:
                var11 = arg0;
                var0 = null;
                if (!(var0 != var11)) {
                    _fun39428_ip = 365;
                    continue _fun39428
                }
            case 12:
                var3 = _closure1_slot13;
                var1 = var3.getGuild;
                var6 = var1.bind(var3)(var11);
                if (!(var0 != var6)) {
                    _fun39428_ip = 363;
                    continue _fun39428
                }
            case 36:
                var4 = _closure1_slot12;
                var3 = var4.getNumRoles;
                var1 = var6.id;
                var3 = var3.bind(var4)(var1);
                var4 = _closure1_slot5;
                var1 = var4.getId;
                var5 = var1.bind(var4)();
                var4 = _closure1_slot11;
                var1 = var4.getMember;
                var5 = var1.bind(var4)(var11, var5);
                var4 = _closure1_slot9;
                var1 = var4.getChannels;
                var4 = var1.bind(var4)(var11);
                var1 = _closure1_slot7;
                var1 = var4[var1];
                var8 = var1.length;
                var1 = _closure1_slot8;
                var1 = var4[var1];
                var7 = var1.length;
                var4 = _closure1_slot23;
                var1 = var4.getVoiceStates;
                var4 = var1.bind(var4)(var11);
                var1 = {};
                var9 = var6.id;
                var1.guild_id = var9;
                var10 = _closure1_slot10;
                var9 = var10.getMemberCount;
                var9 = var9.bind(var10)(var11);
                var1.guild_size_total = var9;
                var9 = var8 + var7;
                var1.guild_num_channels = var9;
                var1.guild_num_text_channels = var8;
                var1.guild_num_voice_channels = var7;
                var1.guild_num_roles = var3;
                var7 = var0 != var5;
                var3 = 0;
                if (!var7) {
                    _fun39428_ip = 227;
                    continue _fun39428
                }
            case 216:
                var7 = var5.roles;
                var3 = var7.length;
            case 227:
                var1.guild_member_num_roles = var3;
                var3 = global;
                var8 = var3.String;
                var7 = _closure1_slot15;
                var3 = var7.getGuildPermissions;
                var7 = var3.bind(var7)(var6);
                if (!(var0 == var7)) {
                    _fun39428_ip = 289;
                    continue _fun39428
                }
            case 261:
                var10 = _closure1_slot2;
                var9 = _closure1_slot3;
                var3 = 20;
                var9 = var9[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var9);
                var7 = var3.NONE;
            case 289:
                var3 = undefined;
                var7 = var8.bind(var3)(var7);
                var1.guild_member_perms = var7;
                var8 = var6.features;
                var7 = var8.has;
                var6 = _closure1_slot24;
                var6 = var6.VIP_REGIONS;
                var6 = var7.bind(var8)(var6);
                var1.guild_is_vip = var6;
                var5 = var0 != var5;
                var1.is_member = var5;
                var2 = _closure1_slot29;
                var2 = var2.bind(var3)(var4);
                var1.num_voice_channels_active = var2;
                return var1;
            case 363:
                return var0;
            case 365:
                return var0;
        }
    };
    var _closure1_slot30 = var7;
    var6 = function arg0, arg1() {
        var0 = {};
        var1 = arg1;
        var0.channel_static_route = var1;
        var1 = false;
        var0.channel_hidden = var1;
        return var0;
    };
    var _closure1_slot31 = var6;
    var5 = function arg0() {
        _fun39430: for (var _fun39430_ip = 0;;) switch (_fun39430_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun39430_ip = 258;
                    continue _fun39430
                }
            case 14:
                var2 = var6.getGuildId;
                var3 = var2.bind(var6)();
                var _closure2_slot0 = var3;
                var4 = var0 != var3;
                var2 = false;
                if (!var4) {
                    _fun39430_ip = 116;
                    continue _fun39430
                }
            case 37:
                var7 = function arg0() {
                    _fun39431: for (var _fun39431_ip = 0;;) switch (_fun39431_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun39431_ip = 87;
                                continue _fun39431
                            }
                        case 9:
                            var2 = var1.permissionOverwrites;
                            var1 = _closure2_slot0;
                            var2 = var2[var1];
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun39431_ip = 85;
                                continue _fun39431
                            }
                        case 33:
                            var5 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var3 = 21;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.has;
                            var2 = var2.deny;
                            var1 = _closure1_slot26;
                            var1 = var1.VIEW_CHANNEL;
                            var0 = var3.bind(var4)(var2, var1);
                        case 85:
                            return var0;
                        case 87:
                            var0 = false;
                            return var0;
                    }
                };
                var8 = _closure1_slot4;
                var5 = var8.has;
                var1 = var6.type;
                var1 = var5.bind(var8)(var1);
                if (!var1) {
                    _fun39430_ip = 77;
                    continue _fun39430
                }
            case 67:
                var1 = var6.parent_id;
                if (!(var0 == var1)) {
                    _fun39430_ip = 86;
                    continue _fun39430
                }
            case 77:
                var1 = undefined;
                var1 = var7.bind(var1)(var6);
                _fun39430_ip = 113;
                continue _fun39430;
            case 86:
                var8 = _closure1_slot6;
                var5 = var8.getChannel;
                var4 = var6.parent_id;
                var5 = var5.bind(var8)(var4);
                var4 = undefined;
                var1 = var7.bind(var4)(var5);
            case 113:
                var2 = var1;
            case 116:
                var1 = {};
                var4 = var6.id;
                var1.channel_id = var4;
                var4 = var6.type;
                var1.channel_type = var4;
                var4 = var6.isPrivate;
                var5 = var4.bind(var6)();
                var4 = 0;
                if (!var5) {
                    _fun39430_ip = 163;
                    continue _fun39430
                }
            case 152:
                var5 = var6.recipients;
                var4 = var5.length;
            case 163:
                var1.channel_size_total = var4;
                var4 = global;
                var5 = var4.String;
                if (!(var0 != var3)) {
                    _fun39430_ip = 206;
                    continue _fun39430
                }
            case 182:
                var4 = _closure1_slot15;
                var3 = var4.getChannelPermissions;
                var4 = var3.bind(var4)(var6);
                if (!(var0 == var4)) {
                    _fun39430_ip = 237;
                    continue _fun39430
                }
            case 206:
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var3 = 20;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var4 = var3.NONE;
            case 237:
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var1.channel_member_perms = var3;
                var1.channel_hidden = var2;
                return var1;
            case 258:
                return var0;
        }
    };
    var _closure1_slot32 = var5;
    var4 = function arg0() {
        _fun39432: for (var _fun39432_ip = 0;;) switch (_fun39432_ip) {
            case 0:
                var5 = arg0;
                var10 = arguments[1];
                var6 = arguments[2];
                var0 = undefined;
                if (!(var10 === var0)) {
                    _fun39432_ip = 17;
                    continue _fun39432
                }
            case 15:
                var10 = {};
            case 17:
                if (!(var6 === var0)) {
                    _fun39432_ip = 23;
                    continue _fun39432
                }
            case 21:
                var6 = false;
            case 23:
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var3 = 23;
                var2 = var2[var3];
                var4 = var4.bind(var0)(var2);
                var2 = var4.isThrottled;
                var2 = var2.bind(var4)(var5);
                if (var2) {
                    _fun39432_ip = 378;
                    continue _fun39432
                }
            case 63:
                var2 = 'location';
                var4 = var2 in var10;
                var2 = !var4;
                if (!var4) {
                    _fun39432_ip = 96;
                    continue _fun39432
                }
            case 77:
                var7 = var10.location;
                var4 = _closure1_slot25;
                var4 = var4.GUILD_CREATE_INVITE_SUGGESTION;
                var2 = var7 !== var4;
            case 96:
                var4 = 'guild_id';
                var4 = var4 in var10;
                if (var4) {
                    _fun39432_ip = 128;
                    continue _fun39432
                }
            case 107:
                var8 = null;
                if (!var2) {
                    _fun39432_ip = 126;
                    continue _fun39432
                }
            case 112:
                var7 = _closure1_slot20;
                var4 = var7.getGuildId;
                var8 = var4.bind(var7)();
            case 126:
                _fun39432_ip = 133;
                continue _fun39432;
            case 128:
                var8 = var10.guild_id;
            case 133:
                var4 = 'channel_id';
                var4 = var4 in var10;
                if (var4) {
                    _fun39432_ip = 166;
                    continue _fun39432
                }
            case 144:
                var4 = null;
                if (!var2) {
                    _fun39432_ip = 164;
                    continue _fun39432
                }
            case 149:
                var7 = _closure1_slot19;
                var2 = var7.getChannelId;
                var4 = var2.bind(var7)(var8);
            case 164:
                _fun39432_ip = 171;
                continue _fun39432;
            case 166:
                var4 = var10.channel_id;
            case 171:
                var7 = _closure1_slot6;
                var2 = var7.getChannel;
                var7 = var2.bind(var7)(var4);
                var2 = null;
                var9 = var4;
                if (!(var2 != var7)) {
                    _fun39432_ip = 246;
                    continue _fun39432
                }
            case 194:
                var4 = var7.isPrivate;
                var4 = var4.bind(var7)();
                var11 = null;
                if (var4) {
                    _fun39432_ip = 244;
                    continue _fun39432
                }
            case 209:
                var4 = var7.getGuildId;
                var4 = var4.bind(var7)();
                var12 = var8;
                if (!(var2 != var4)) {
                    _fun39432_ip = 229;
                    continue _fun39432
                }
            case 226:
                var12 = var4;
            case 229:
                var13 = var2 != var12;
                var4 = null;
                if (!var13) {
                    _fun39432_ip = 241;
                    continue _fun39432
                }
            case 238:
                var4 = var12;
            case 241:
                var11 = var4;
            case 244:
                _fun39432_ip = 261;
                continue _fun39432;
            case 246:
                var12 = var2 != var8;
                var4 = null;
                if (!var12) {
                    _fun39432_ip = 258;
                    continue _fun39432
                }
            case 255:
                var4 = var8;
            case 258:
                var11 = var4;
            case 261:
                var4 = {};
                var16 = var4;
                var15 = var10;
                var10 = copyDataProperties(var16, var15);
                var10 = _closure1_slot30;
                var15 = var10.bind(var0)(var11);
                var16 = var4;
                var10 = copyDataProperties(var16, var15);
                if (!(var2 != var8)) {
                    _fun39432_ip = 309;
                    continue _fun39432
                }
            case 293:
                if (!(var2 != var9)) {
                    _fun39432_ip = 309;
                    continue _fun39432
                }
            case 297:
                var2 = _closure1_slot28;
                var2 = var2.bind(var0)(var9);
                if (var2) {
                    _fun39432_ip = 320;
                    continue _fun39432
                }
            case 309:
                var2 = _closure1_slot32;
                var2 = var2.bind(var0)(var7);
                _fun39432_ip = 332;
                continue _fun39432;
            case 320:
                var8 = _closure1_slot31;
                var7 = 0;
                var2 = var8.bind(var0)(var7, var9);
            case 332:
                var16 = var4;
                var15 = var2;
                var2 = copyDataProperties(var16, var15);
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.track;
                var1 = {};
                var1.flush = var6;
                var1 = var2.bind(var3)(var5, var4, var1);
            case 378:
                return var0;
        }
    };
    var3 = function arg0, arg1, arg2() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = {
            'voice_state_count': 0,
            'video_stream_count': 0
        };
        var2 = arg2;
        var0.video_enabled = var2;
        var _closure2_slot1 = var0;
        var5 = _closure1_slot1;
        var4 = _closure1_slot3;
        var3 = 27;
        var3 = var4[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var6 = _closure1_slot23;
        var5 = var6.getVoiceStates;
        var2 = arg0;
        var2 = var5.bind(var6)(var2);
        var4 = var3.bind(var4)(var2);
        var3 = var4.filter;
        var2 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = var0.channelId;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.filter;
        var2 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = var0.userId;
            var2 = _closure1_slot5;
            var0 = var2.getId;
            var0 = var0.bind(var2)();
            var0 = var1 !== var0;
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun39436: for (var _fun39436_ip = 0;;) switch (_fun39436_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure2_slot1;
                    var1 = var3.voice_state_count;
                    var1 = var1 + 1;
                    var3.voice_state_count = var1;
                    var1 = var2.selfVideo;
                    if (var1) {
                        _fun39436_ip = 40;
                        continue _fun39436
                    }
                case 34:
                    var1 = var2.selfStream;
                case 40:
                    if (!var1) {
                        _fun39436_ip = 62;
                        continue _fun39436
                    }
                case 43:
                    var1 = _closure2_slot1;
                    var0 = var1.video_stream_count;
                    var0 = var0 + 1;
                    var1.video_stream_count = var0;
                case 62:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot33 = var3;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var11[var0];
    var0 = undefined;
    var8 = var10.bind(var0)(var8);
    var8 = var8.THREAD_CHANNEL_TYPES;
    var _closure1_slot4 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 3;
    var12 = var11[var8];
    var12 = var10.bind(var0)(var12);
    var13 = var12.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot7 = var13;
    var12 = var12.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot8 = var12;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 4;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot10 = var8;
    var8 = 5;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot11 = var8;
    var8 = 6;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot12 = var8;
    var8 = 7;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot13 = var8;
    var8 = 8;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot14 = var8;
    var8 = 9;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot15 = var8;
    var8 = 10;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot16 = var8;
    var8 = 11;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot17 = var8;
    var8 = 12;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot18 = var8;
    var8 = 13;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot19 = var8;
    var8 = 14;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot20 = var8;
    var8 = 15;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot21 = var8;
    var8 = 16;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot22 = var8;
    var8 = 17;
    var8 = var11[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot23 = var8;
    var8 = 18;
    var8 = var11[var8];
    var8 = var10.bind(var0)(var8);
    var9 = var8.GuildFeatures;
    var _closure1_slot24 = var9;
    var9 = var8.AnalyticsLocations;
    var _closure1_slot25 = var9;
    var9 = var8.Permissions;
    var _closure1_slot26 = var9;
    var8 = var8.ActivityTypes;
    var _closure1_slot27 = var8;
    var8 = 19;
    var8 = var11[var8];
    var8 = var10.bind(var0)(var8);
    var8 = var8.isStaticChannelRoute;
    var _closure1_slot28 = var8;
    var8 = {};
    var8.trackWithMetadata = var4;
    var8.getVoiceStateMetadata = var3;
    var9 = 28;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/app_analytics/AppAnalyticsUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var2.default = var8;
    var2.collectGuildAnalyticsMetadata = var7;
    var2.collectStaticChannelRouteAnalyticsMetadata = var6;
    var6 = function arg0() {
        _fun39437: for (var _fun39437_ip = 0;;) switch (_fun39437_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun39437_ip = 48;
                    continue _fun39437
                }
            case 9:
                var3 = _closure1_slot6;
                var1 = var3.getChannel;
                var4 = var1.bind(var3)(var4);
                var3 = var0 == var4;
                var1 = null;
                if (var3) {
                    _fun39437_ip = 46;
                    continue _fun39437
                }
            case 35:
                var3 = _closure1_slot32;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
            case 46:
                return var1;
            case 48:
                return var0;
        }
    };
    var2.collectChannelAnalyticsMetadataFromId = var6;
    var2.collectChannelAnalyticsMetadata = var5;
    var5 = function arg0() {
        _fun39438: for (var _fun39438_ip = 0;;) switch (_fun39438_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun39438_ip = 180;
                    continue _fun39438
                }
            case 12:
                var3 = _closure1_slot6;
                var1 = var3.getChannel;
                var3 = var1.bind(var3)(var4);
                if (!(var0 != var3)) {
                    _fun39438_ip = 178;
                    continue _fun39438
                }
            case 36:
                var4 = _closure1_slot14;
                var1 = var4.isVideoEnabled;
                var7 = var1.bind(var4)();
                var4 = _closure1_slot17;
                var1 = var4.getMediaSessionId;
                var4 = var1.bind(var4)();
                var1 = {};
                var5 = var3.id;
                var1.channel_id = var5;
                var5 = var3.type;
                var1.channel_type = var5;
                var5 = var3.getGuildId;
                var5 = var5.bind(var3)();
                var1.guild_id = var5;
                var1.media_session_id = var4;
                var6 = _closure1_slot33;
                var4 = var3.getGuildId;
                var5 = var4.bind(var3)();
                var3 = var3.id;
                var4 = undefined;
                var9 = var6.bind(var4)(var5, var3, var7);
                var10 = var1;
                var3 = copyDataProperties(var10, var9);
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 22;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getVoiceAnalyticsMetadataAdditional;
                var9 = var2.bind(var3)();
                var10 = var1;
                var2 = copyDataProperties(var10, var9);
                return var1;
            case 178:
                return var0;
            case 180:
                return var0;
        }
    };
    var2.collectVoiceAnalyticsMetadata = var5;
    var2.trackWithMetadata = var4;
    var4 = function arg0() {
        _fun39439: for (var _fun39439_ip = 0;;) switch (_fun39439_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot28;
                var7 = undefined;
                var0 = var0.bind(var7)(var1);
                if (var0) {
                    _fun39439_ip = 585;
                    continue _fun39439
                }
            case 23:
                var2 = _closure1_slot6;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var1);
                var3 = null;
                if (!(var3 != var0)) {
                    _fun39439_ip = 577;
                    continue _fun39439
                }
            case 46:
                var6 = _closure1_slot13;
                var4 = var6.getGuild;
                var2 = var0.guild_id;
                var9 = var4.bind(var6)(var2);
                if (!(var3 != var9)) {
                    _fun39439_ip = 507;
                    continue _fun39439
                }
            case 72:
                var6 = _closure1_slot18;
                var4 = var6.getSnapshot;
                var10 = _closure1_slot1;
                var8 = _closure1_slot3;
                var2 = 24;
                var2 = var8[var2];
                var2 = var10.bind(var7)(var2);
                var2 = var2.Millis;
                var10 = var2.SECOND;
                var2 = 10;
                var2 = var2 * var10;
                var10 = var4.bind(var6)(var1, var2);
                var2 = {};
                var2.channel_id = var1;
                var4 = var10.unread;
                var2.channel_was_unread = var4;
                var4 = var10.mentionCount;
                var2.channel_mention_count = var4;
                var13 = _closure1_slot21;
                var11 = var13.isChannelMuted;
                var6 = var0.guild_id;
                var4 = var0.id;
                var4 = var11.bind(var13)(var6, var4);
                var2.channel_is_muted = var4;
                var4 = var0.isNSFW;
                var4 = var4.bind(var0)();
                var2.channel_is_nsfw = var4;
                var4 = var13.resolveUnreadSetting;
                var4 = var4.bind(var13)(var0);
                var2.channel_resolved_unread_setting = var4;
                var6 = _closure1_slot0;
                var4 = 25;
                var11 = var8[var4];
                var15 = var6.bind(var7)(var11);
                var14 = var15.presetFromSettings;
                var11 = var13.resolveUnreadSetting;
                var12 = var11.bind(var13)(var0);
                var11 = var13.resolvedMessageNotifications;
                var11 = var11.bind(var13)(var0);
                var11 = var14.bind(var15)(var12, var11);
                var2.channel_preset = var11;
                var11 = var0.guild_id;
                var2.guild_id = var11;
                var11 = var10.guildUnread;
                var2.guild_was_unread = var11;
                var10 = var10.guildMentionCount;
                var2.guild_mention_count = var10;
                var11 = var13.isMuted;
                var10 = var0.guild_id;
                var10 = var11.bind(var13)(var10);
                var2.guild_is_muted = var10;
                var10 = var13.resolveGuildUnreadSetting;
                var10 = var10.bind(var13)(var9);
                var2.guild_resolved_unread_setting = var10;
                var4 = var8[var4];
                var11 = var6.bind(var7)(var4);
                var10 = var11.presetFromSettings;
                var4 = var13.resolveGuildUnreadSetting;
                var9 = var4.bind(var13)(var9);
                var12 = var13.getMessageNotifications;
                var4 = var0.guild_id;
                var4 = var12.bind(var13)(var4);
                var4 = var10.bind(var11)(var9, var4);
                var2.guild_preset = var4;
                var4 = var0.parent_id;
                var2.parent_id = var4;
                var4 = var0.parentChannelThreadType;
                var2.parent_channel_type = var4;
                var4 = 26;
                var4 = var8[var4];
                var7 = var6.bind(var7)(var4);
                var6 = var7.hasPendingMemberAction;
                var4 = var0.guild_id;
                var4 = var6.bind(var7)(var4, var1);
                var2.has_pending_member_action = var4;
                var7 = _closure1_slot15;
                var6 = var7.can;
                var4 = _closure1_slot26;
                var4 = var4.SEND_MESSAGES;
                var4 = var6.bind(var7)(var4, var0);
                var2.can_send_message = var4;
                var4 = false;
                var2.is_app_dm = var4;
                return var2;
            case 507:
                var2 = var0.isDM;
                var6 = var2.bind(var0)();
                var2 = false;
                if (!var6) {
                    _fun39439_ip = 564;
                    continue _fun39439
                }
            case 522:
                var6 = _closure1_slot22;
                var5 = var6.getUser;
                var7 = var0.recipients;
                var0 = 0;
                var0 = var7[var0];
                var0 = var5.bind(var6)(var0);
                var3 = var3 != var0;
                var2 = false;
                if (!var3) {
                    _fun39439_ip = 564;
                    continue _fun39439
                }
            case 558:
                var2 = var0.bot;
            case 564:
                var0 = {};
                var0.channel_id = var1;
                var0.is_app_dm = var2;
                return var0;
            case 577:
                var0 = {};
                var0.channel_id = var1;
                return var0;
            case 585:
                var0 = {};
                var0.channel_static_route = var1;
                return var0;
        }
    };
    var2.getChannelOpenedMetadata = var4;
    var2.getVoiceStateMetadata = var3;
    var1 = function arg0, arg1() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = 0;
        var0.custom_status_count = var2;
        var _closure2_slot1 = var0;
        var5 = _closure1_slot1;
        var4 = _closure1_slot3;
        var3 = 27;
        var3 = var4[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var6 = _closure1_slot23;
        var5 = var6.getVoiceStates;
        var2 = arg0;
        var2 = var5.bind(var6)(var2);
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun39441: for (var _fun39441_ip = 0;;) switch (_fun39441_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.channelId;
                    var1 = _closure2_slot0;
                    var1 = var3 === var1;
                    if (!var1) {
                        _fun39441_ip = 59;
                        continue _fun39441
                    }
                case 22:
                    var5 = _closure1_slot16;
                    var4 = var5.findActivity;
                    var3 = var2.userId;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot27;
                        var0 = var0.CUSTOM_STATUS;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = null;
                    var1 = var2 != var3;
                case 59:
                    if (!var1) {
                        _fun39441_ip = 81;
                        continue _fun39441
                    }
                case 62:
                    var1 = _closure2_slot1;
                    var0 = var1.custom_status_count;
                    var0 = var0 + 1;
                    var1.custom_status_count = var0;
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.getCustomStatusMetadata = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1216, 1372, 1662, 1599, 1672, 1665, 1410, 3435, 3050, 3569, 3477, 3906, 1661, 3172, 4267, 1613, 3480, 660, 1379, 3055, 484, 4269, 795, 667, 4270, 4271, 22, 2]);