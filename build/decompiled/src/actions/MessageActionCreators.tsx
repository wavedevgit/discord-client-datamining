// actions/MessageActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun54109: for (var _fun54109_ip = 0;;) switch (_fun54109_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun54109_ip = 46;
                    continue _fun54109
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun54109_ip = 55;
                    continue _fun54109
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun54109_ip = 343;
                    continue _fun54109
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun54109_ip = 323;
                    continue _fun54109
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun54109_ip = 283;
                    continue _fun54109
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun54109_ip = 270;
                    continue _fun54109
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
                    _fun54109_ip = 163;
                    continue _fun54109
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun54109_ip = 179;
                    continue _fun54109
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun54109_ip = 249;
                    continue _fun54109
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun54109_ip = 249;
                    continue _fun54109
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun54109_ip = 234;
                    continue _fun54109
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun54109_ip = 247;
                    continue _fun54109
                }
            case 234:
                var8 = _closure1_slot56;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun54109_ip = 265;
                continue _fun54109;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun54109_ip = 283;
                continue _fun54109;
            case 270:
                var6 = _closure1_slot56;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun54109_ip = 323;
                    continue _fun54109
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
                    _fun54109_ip = 330;
                    continue _fun54109
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun54110: for (var _fun54110_ip = 0;;) switch (_fun54110_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun54110_ip = 56;
                                continue _fun54110
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
                            _fun54110_ip = 67;
                            continue _fun54110;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot55 = var0;
    var0 = function arg0, arg1() {
        _fun54111: for (var _fun54111_ip = 0;;) switch (_fun54111_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun54111_ip = 23;
                    continue _fun54111
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun54111_ip = 33;
                    continue _fun54111
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
                    _fun54111_ip = 70;
                    continue _fun54111
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun54111_ip = 55;
                    continue _fun54111
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot56 = var0;
    var6 = function arg0() {
        _fun54112: for (var _fun54112_ip = 0;;) switch (_fun54112_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.inviteKey;
                var8 = var0.channelId;
                var6 = var0.messageId;
                var9 = var0.location;
                var4 = var0.inviteAnalyticsMetadata;
                var2 = var0.overrideProperties;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun54112_ip = 44;
                    continue _fun54112
                }
            case 42:
                var2 = {};
            case 44:
                var5 = _closure1_slot17;
                var3 = var5.getId;
                var14 = var3.bind(var5)();
                var5 = _closure1_slot20;
                var3 = var5.getInvite;
                var12 = var3.bind(var5)(var7);
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 39;
                var3 = var10[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.parseExtraDataFromInviteKey;
                var3 = var3.bind(var5)(var7);
                var11 = null;
                var7 = var11 != var12;
                if (!var7) {
                    _fun54112_ip = 147;
                    continue _fun54112
                }
            case 116:
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 40;
                var5 = var13[var5];
                var10 = var10.bind(var0)(var5);
                var5 = var10.isEmbeddedApplicationInvite;
                var7 = var5.bind(var10)(var12);
            case 147:
                var5 = var11 == var12;
                var13 = undefined;
                if (var5) {
                    _fun54112_ip = 176;
                    continue _fun54112
                }
            case 156:
                var5 = var12.target_application;
                var10 = var11 == var5;
                var13 = undefined;
                if (var10) {
                    _fun54112_ip = 176;
                    continue _fun54112
                }
            case 171:
                var13 = var5.id;
            case 176:
                var5 = var11 != var13;
                if (!var5) {
                    _fun54112_ip = 186;
                    continue _fun54112
                }
            case 183:
                var5 = var7;
            case 186:
                if (!var5) {
                    _fun54112_ip = 232;
                    continue _fun54112
                }
            case 189:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 33;
                var5 = var10[var5];
                var10 = var7.bind(var0)(var5);
                var7 = var10.trackAppEmbedLinkSent;
                var5 = _closure1_slot44;
                var5 = var5.ACTIVITY_INVITE;
                var5 = var7.bind(var10)(var13, var5, var14);
            case 232:
                var7 = _closure1_slot18;
                var5 = var7.getChannel;
                var5 = var5.bind(var7)(var8);
                if (!(var11 == var5)) {
                    _fun54112_ip = 501;
                    continue _fun54112
                }
            case 253:
                var7 = {};
                var8 = var11 != var12;
                if (!var8) {
                    _fun54112_ip = 281;
                    continue _fun54112
                }
            case 262:
                var13 = var12.state;
                var10 = _closure1_slot32;
                var10 = var10.RESOLVED;
                var8 = var13 === var10;
            case 281:
                if (!var8) {
                    _fun54112_ip = 294;
                    continue _fun54112
                }
            case 284:
                var10 = var12.inviter;
                var8 = var11 != var10;
            case 294:
                if (!var8) {
                    _fun54112_ip = 1131;
                    continue _fun54112
                }
            case 300:
                var8 = var12.inviter;
                var8 = var8.id;
                var7.invite_inviter_id = var8;
                var8 = var12.target_application;
                if (!(var11 != var8)) {
                    _fun54112_ip = 344;
                    continue _fun54112
                }
            case 327:
                var8 = var12.target_application;
                var8 = var8.id;
                var7.application_id = var8;
            case 344:
                var13 = {};
                var19 = var13;
                var18 = var7;
                var7 = copyDataProperties(var19, var18);
                var7 = 'location';
                var13[var7] = var9;
                var7 = _closure1_slot30;
                var8 = var7.FRIEND_INVITE;
                var7 = 'invite_type';
                var13[var7] = var8;
                var8 = var3.baseCode;
                var7 = 'invite_code';
                var13[var7] = var8;
                var7 = 'message_id';
                var13[var7] = var6;
                var7 = _closure1_slot31;
                var8 = var7.DIRECT_MESSAGE;
                var7 = 'send_type';
                var13[var7] = var8;
                var8 = var3.guildScheduledEventId;
                var7 = 'invite_guild_scheduled_event_id';
                var13[var7] = var8;
                var19 = var13;
                var18 = var2;
                var7 = copyDataProperties(var19, var18);
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 31;
                var7 = var10[var7];
                var10 = var8.bind(var0)(var7);
                var8 = var10.trackWithMetadata;
                var7 = _closure1_slot27;
                var7 = var7.INVITE_SENT;
                var7 = var8.bind(var10)(var7, var13);
                _fun54112_ip = 1131;
                continue _fun54112;
            case 501:
                var7 = var5.isMultiUserDM;
                var7 = var7.bind(var5)();
                if (var7) {
                    _fun54112_ip = 541;
                    continue _fun54112
                }
            case 514:
                var7 = var5.isPrivate;
                var7 = var7.bind(var5)();
                var13 = null;
                if (var7) {
                    _fun54112_ip = 551;
                    continue _fun54112
                }
            case 529:
                var7 = _closure1_slot30;
                var13 = var7.SERVER_INVITE;
                _fun54112_ip = 551;
                continue _fun54112;
            case 541:
                var7 = _closure1_slot30;
                var13 = var7.GDM_INVITE;
            case 551:
                var7 = {};
                var8 = var13;
                if (!(var11 != var12)) {
                    _fun54112_ip = 828;
                    continue _fun54112
                }
            case 563:
                var14 = var12.state;
                var10 = _closure1_slot32;
                var10 = var10.RESOLVED;
                var8 = var13;
                if (!(var14 === var10)) {
                    _fun54112_ip = 828;
                    continue _fun54112
                }
            case 588:
                var10 = var12.channel;
                var8 = var13;
                if (!(var11 != var10)) {
                    _fun54112_ip = 828;
                    continue _fun54112
                }
            case 603:
                var10 = var12.channel;
                var14 = var10.id;
                var7.invite_channel_id = var14;
                var15 = var12.guild;
                var16 = var11 == var15;
                var14 = undefined;
                if (var16) {
                    _fun54112_ip = 638;
                    continue _fun54112
                }
            case 633:
                var14 = var15.id;
            case 638:
                var7.invite_guild_id = var14;
                var14 = var10.type;
                var7.invite_channel_type = var14;
                var14 = var12.inviter;
                if (!(var11 != var14)) {
                    _fun54112_ip = 682;
                    continue _fun54112
                }
            case 665:
                var14 = var12.inviter;
                var14 = var14.id;
                var7.invite_inviter_id = var14;
            case 682:
                var14 = var12.target_application;
                if (!(var11 != var14)) {
                    _fun54112_ip = 709;
                    continue _fun54112
                }
            case 692:
                var12 = var12.target_application;
                var12 = var12.id;
                var7.application_id = var12;
            case 709:
                var14 = _closure1_slot16;
                var12 = var14.getLastActiveStream;
                var15 = var12.bind(var14)();
                var8 = var13;
                if (!(var11 != var15)) {
                    _fun54112_ip = 828;
                    continue _fun54112
                }
            case 730:
                var12 = var15.channelId;
                var10 = var10.id;
                var8 = var13;
                if (!(var12 === var10)) {
                    _fun54112_ip = 828;
                    continue _fun54112
                }
            case 747:
                var10 = _closure1_slot30;
                var10 = var10.STREAM;
                var12 = var15.ownerId;
                var7.destination_user_id = var12;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 41;
                var12 = var14[var12];
                var14 = var13.bind(var0)(var12);
                var13 = var14.getStreamerApplication;
                var12 = _closure1_slot22;
                var13 = var13.bind(var14)(var15, var12);
                var14 = var11 != var13;
                var12 = null;
                if (!var14) {
                    _fun54112_ip = 819;
                    continue _fun54112
                }
            case 814:
                var12 = var13.id;
            case 819:
                var7.application_id = var12;
                var8 = var10;
            case 828:
                if (!(var11 != var4)) {
                    _fun54112_ip = 956;
                    continue _fun54112
                }
            case 835:
                var10 = var4.suggestionData;
                if (!(var11 != var10)) {
                    _fun54112_ip = 945;
                    continue _fun54112
                }
            case 845:
                var10 = var4.suggestionData;
                var10 = var10.isAffinitySuggestion;
                var7.is_suggested = var10;
                var10 = var4.suggestionData;
                var10 = var10.rowNum;
                var7.row_num = var10;
                var10 = var4.suggestionData;
                var10 = var10.numTotal;
                var7.num_total = var10;
                var10 = var4.suggestionData;
                var10 = var10.numAffinityConnections;
                var7.num_affinity_connections = var10;
                var10 = var4.suggestionData;
                var10 = var10.isFiltered;
                var7.is_filtered = var10;
            case 945:
                var4 = var4.source;
                var7.source = var4;
            case 956:
                var4 = {};
                var19 = var4;
                var18 = var7;
                var7 = copyDataProperties(var19, var18);
                var7 = 'location';
                var4[var7] = var9;
                var7 = 'invite_type';
                var4[var7] = var8;
                var8 = var3.baseCode;
                var7 = 'invite_code';
                var4[var7] = var8;
                var7 = var5.getGuildId;
                var8 = var7.bind(var5)();
                var7 = 'guild_id';
                var4[var7] = var8;
                var7 = var5.id;
                var5 = 'channel_id';
                var4[var5] = var7;
                var5 = 'message_id';
                var4[var5] = var6;
                var5 = _closure1_slot31;
                var6 = var5.DIRECT_MESSAGE;
                var5 = 'send_type';
                var4[var5] = var6;
                var5 = var3.guildScheduledEventId;
                var3 = 'invite_guild_scheduled_event_id';
                var4[var3] = var5;
                var19 = var4;
                var18 = var2;
                var2 = copyDataProperties(var19, var18);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 31;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.trackWithMetadata;
                var1 = _closure1_slot27;
                var1 = var1.INVITE_SENT;
                var1 = var2.bind(var3)(var1, var4);
            case 1131:
                return var0;
        }
    };
    var _closure1_slot57 = var6;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var7 = var5[var1];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ReferencedMessageState;
    var _closure1_slot14 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot19 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot20 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot21 = var1;
    var1 = 18;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var1 = 19;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot22 = var1;
    var1 = 20;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot23 = var1;
    var1 = 21;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.SlowmodeType;
    var _closure1_slot24 = var1;
    var1 = 22;
    var1 = var5[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot25 = var1;
    var1 = 23;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.AbortCodes;
    var _closure1_slot26 = var7;
    var9 = var1.AnalyticEvents;
    var _closure1_slot27 = var9;
    var9 = var1.Endpoints;
    var _closure1_slot28 = var9;
    var9 = var1.Permissions;
    var9 = var1.ChannelTypes;
    var _closure1_slot29 = var9;
    var9 = var1.LoggingInviteTypes;
    var _closure1_slot30 = var9;
    var9 = var1.SendTypes;
    var _closure1_slot31 = var9;
    var9 = var1.InviteStates;
    var _closure1_slot32 = var9;
    var9 = var1.MessageFlags;
    var _closure1_slot33 = var9;
    var9 = var1.MAX_MESSAGES_FOR_JUMP;
    var _closure1_slot34 = var9;
    var9 = var1.MessageTypes;
    var _closure1_slot35 = var9;
    var9 = var1.AllowedMentionTypes;
    var _closure1_slot36 = var9;
    var9 = var1.HelpdeskArticles;
    var _closure1_slot37 = var9;
    var9 = var1.MarketingURLs;
    var _closure1_slot38 = var9;
    var9 = var1.MessageReferenceTypes;
    var _closure1_slot39 = var9;
    var9 = var1.LOCAL_BOT_ID;
    var _closure1_slot40 = var9;
    var9 = var1.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot41 = var9;
    var9 = var1.MessageStates;
    var _closure1_slot42 = var9;
    var1 = var1.ActivityActionTypes;
    var _closure1_slot43 = var1;
    var1 = 24;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.LinkType;
    var _closure1_slot44 = var1;
    var1 = 25;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildTemplateStates;
    var _closure1_slot45 = var1;
    var1 = 26;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.FileUploadErrorTypes;
    var _closure1_slot46 = var9;
    var1 = var1.MessageSendLocation;
    var _closure1_slot47 = var1;
    var1 = 27;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativeModules;
    var1 = var1.MediaPlayerManager;
    var _closure1_slot48 = var1;
    var1 = 28;
    var9 = var5[var1];
    var11 = var8.bind(var0)(var9);
    var9 = var11.prototype;
    var10 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var14 = 'MessageActionCreators';
    var15 = var10;
    var9 = new var15[var11](var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot49 = var9;
    var1 = var5[var1];
    var9 = var8.bind(var0)(var1);
    var1 = var9.prototype;
    var8 = Object.create(var1, {
        constructor: {
            value: var9
        }
    });
    var14 = 'MessageQueue';
    var15 = var8;
    var1 = new var15[var9](var14, var13);
    var1 = var1 instanceof Object ? var1 : var8;
    var _closure1_slot50 = var1;
    var1 = false;
    var _closure1_slot51 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot6;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot5;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = false;
            var2.completed = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'markComplete';
        var0.key = var4;
        var1 = function() {
            var1 = true;
            var0 = this;
            var0.completed = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot52 = var1;
    var1 = {};
    var9 = var7.EMAIL_VERIFICATION_REQUIRED;
    var8 = {};
    var10 = 'BOT_REQUIRES_EMAIL_VERIFICATION';
    var8.messageName = var10;
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 44;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.k1Cjqr;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var8.messageGetter = var10;
    var1[var9] = var8;
    var9 = var7.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED;
    var8 = {};
    var10 = 'GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED';
    var8.messageName = var10;
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 44;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.Z5SUuv;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var8.messageGetter = var10;
    var1[var9] = var8;
    var9 = var7.INVALID_MESSAGE_SEND_USER;
    var8 = {};
    var10 = 'BOT_DM_SEND_FAILED_WITH_HELP_LINK';
    var8.messageName = var10;
    var10 = function() {
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 44;
        var2 = var8[var0];
        var7 = undefined;
        var2 = var1.bind(var7)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var8[var0];
        var0 = var1.bind(var7)(var0);
        var0 = var0.t;
        var1 = var0.CTMXwL;
        var0 = {};
        var6 = _closure1_slot1;
        var5 = 45;
        var5 = var8[var5];
        var6 = var6.bind(var7)(var5);
        var5 = var6.getArticleURL;
        var4 = _closure1_slot37;
        var4 = var4.DM_COULD_NOT_BE_DELIVERED;
        var4 = var5.bind(var6)(var4);
        var0.helpUrl = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var8.messageGetter = var10;
    var1[var9] = var8;
    var9 = var7.RATE_LIMIT_DM_OPEN;
    var8 = {};
    var10 = 'BOT_DM_RATE_LIMITED';
    var8.messageName = var10;
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 44;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.E8nbNb;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var8.messageGetter = var10;
    var1[var9] = var8;
    var9 = var7.SEND_MESSAGE_TEMPORARILY_DISABLED;
    var8 = {};
    var10 = 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED';
    var8.messageName = var10;
    var11 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 44;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.aRUbah;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var8.messageGetter = var11;
    var1[var9] = var8;
    var9 = var7.SLOWMODE_RATE_LIMITED;
    var8 = {};
    var8.messageName = var10;
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 44;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.aRUbah;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var8.messageGetter = var10;
    var1[var9] = var8;
    var9 = var7.INVALID_MESSAGE_SEND_GAME_FRIEND_DM;
    var8 = {};
    var10 = 'BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND';
    var8.messageName = var10;
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 44;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["/meGhR"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var8.messageGetter = var10;
    var1[var9] = var8;
    var8 = var7.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE;
    var7 = {};
    var9 = 'BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT';
    var7.messageName = var9;
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 44;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.Oc1Zjw;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.messageGetter = var9;
    var1[var8] = var7;
    var _closure1_slot53 = var1;
    var1 = {};
    var7 = function arg0, arg1() {
        _fun54124: for (var _fun54124_ip = 0;;) switch (_fun54124_ip) {
            case 0:
                var5 = arguments[2];
                var4 = arguments[3];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun54124_ip = 14;
                    continue _fun54124
                }
            case 12:
                var5 = false;
            case 14:
                if (!(var4 === var0)) {
                    _fun54124_ip = 20;
                    continue _fun54124
                }
            case 18:
                var4 = {};
            case 20:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 46;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'MESSAGE_CREATE';
                var1.type = var6;
                var6 = arg0;
                var1.channelId = var6;
                var6 = arg1;
                var1.message = var6;
                var1.optimistic = var5;
                var1.sendMessageOptions = var4;
                var4 = false;
                var1.isPushNotification = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.receiveMessage = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        _fun54125: for (var _fun54125_ip = 0;;) switch (_fun54125_ip) {
            case 0:
                var4 = arg0;
                var7 = arg2;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun54125_ip = 77;
                    continue _fun54125
                }
            case 12:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 31;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackWithMetadata;
                var0 = _closure1_slot27;
                var1 = var0.AUTOMATED_MESSAGE_RECEIVED;
                var0 = {};
                var5 = 'Clyde';
                var0.message_author = var5;
                var0.message_name = var7;
                var0 = var2.bind(var3)(var1, var0);
            case 77:
                var3 = _closure1_slot54;
                var2 = var3.receiveMessage;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 47;
                var1 = var1[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var1);
                var5 = var6.createBotMessage;
                var1 = {};
                var8 = arg3;
                var1.messageId = var8;
                var1.channelId = var4;
                var8 = arg1;
                var1.content = var8;
                var1.loggingName = var7;
                var1 = var5.bind(var6)(var1);
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var1.sendBotMessage = var7;
    var7 = function arg0, arg1, arg2() {
        var5 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 47;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = {};
        var1.channelId = var5;
        var3 = arg2;
        var1.nonce = var3;
        var3 = _closure1_slot35;
        var3 = var3.NITRO_NOTIFICATION;
        var1.type = var3;
        var3 = arg1;
        var1.content = var3;
        var3 = _closure1_slot33;
        var3 = var3.EPHEMERAL;
        var1.flags = var3;
        var3 = {
            'id': null,
            'username': 'Nitro Notification',
            'discriminator': null,
            'avatar': 'nitro',
            'bot': true
        };
        var4 = _closure1_slot40;
        var3.id = var4;
        var4 = _closure1_slot41;
        var3.discriminator = var4;
        var4 = true;
        var1.author = var3;
        var9 = var2.bind(var0)(var1);
        var3 = _closure1_slot54;
        var2 = var3.receiveMessage;
        var1 = {};
        var10 = var1;
        var7 = copyDataProperties(var10, var9);
        var6 = _closure1_slot42;
        var7 = var6.SENT;
        var6 = 'state';
        var1[var6] = var7;
        var6 = 'channel_id';
        var1[var6] = var5;
        var1 = var2.bind(var3)(var5, var1, var4);
        return var0;
    };
    var1.sendNitroSystemMessage = var7;
    var7 = function arg0, arg1() {
        var5 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 47;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = {};
        var1.channelId = var5;
        var3 = _closure1_slot35;
        var3 = var3.GIFTING_PROMPT;
        var1.type = var3;
        var3 = '';
        var1.content = var3;
        var3 = _closure1_slot33;
        var3 = var3.EPHEMERAL;
        var1.flags = var3;
        var3 = {
            'id': null,
            'username': 'Gifting Prompt',
            'discriminator': null,
            'avatar': 'gifting_prompt',
            'bot': true
        };
        var4 = _closure1_slot40;
        var3.id = var4;
        var4 = _closure1_slot41;
        var3.discriminator = var4;
        var4 = true;
        var1.author = var3;
        var3 = arg1;
        var1.giftingPrompt = var3;
        var9 = var2.bind(var0)(var1);
        var3 = _closure1_slot54;
        var2 = var3.receiveMessage;
        var1 = {};
        var10 = var1;
        var7 = copyDataProperties(var10, var9);
        var6 = _closure1_slot42;
        var7 = var6.SENT;
        var6 = 'state';
        var1[var6] = var7;
        var1 = var2.bind(var3)(var5, var1, var4);
        return var0;
    };
    var1.sendGiftingPromptSystemMessage = var7;
    var7 = function arg0() {
        _fun54128: for (var _fun54128_ip = 0;;) switch (_fun54128_ip) {
            case 0:
                var5 = arg0;
                var7 = arguments[1];
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun54128_ip = 14;
                    continue _fun54128
                }
            case 12:
                var7 = 0;
            case 14:
                var3 = _closure1_slot18;
                var2 = var3.getChannel;
                var9 = var2.bind(var3)(var5);
                var2 = null;
                if (!(var2 != var9)) {
                    _fun54128_ip = 897;
                    continue _fun54128
                }
            case 40:
                var2 = _closure1_slot26;
                var2 = var2.SLOWMODE_RATE_LIMITED;
                if (!(var7 !== var2)) {
                    _fun54128_ip = 805;
                    continue _fun54128
                }
            case 57:
                var2 = _closure1_slot26;
                var2 = var2.INVALID_MESSAGE_SEND_USER;
                if (!(var7 !== var2)) {
                    _fun54128_ip = 699;
                    continue _fun54128
                }
            case 74:
                var2 = _closure1_slot26;
                var2 = var2.TOO_MANY_THREADS;
                if (!(var7 !== var2)) {
                    _fun54128_ip = 545;
                    continue _fun54128
                }
            case 91:
                var2 = _closure1_slot26;
                var2 = var2.TOO_MANY_ANNOUNCEMENT_THREADS;
                if (!(var7 !== var2)) {
                    _fun54128_ip = 479;
                    continue _fun54128
                }
            case 108:
                var2 = _closure1_slot26;
                var2 = var2.HARMFUL_LINK_MESSAGE_BLOCKED;
                if (!(var7 !== var2)) {
                    _fun54128_ip = 395;
                    continue _fun54128
                }
            case 125:
                var2 = _closure1_slot26;
                var2 = var2.HARMFUL_URL_BLOCKED;
                if (!(var7 !== var2)) {
                    _fun54128_ip = 329;
                    continue _fun54128
                }
            case 142:
                var2 = _closure1_slot53;
                var2 = var7 in var2;
                if (var2) {
                    _fun54128_ip = 296;
                    continue _fun54128
                }
            case 156:
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 44;
                var4 = var11[var2];
                var4 = var3.bind(var0)(var4);
                var6 = var4.intl;
                var4 = var6.formatToPlainString;
                var2 = var11[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.t;
                var3 = var2.CTMXwL;
                var2 = {};
                var10 = _closure1_slot1;
                var8 = 45;
                var8 = var11[var8];
                var11 = var10.bind(var0)(var8);
                var10 = var11.getArticleURL;
                var8 = _closure1_slot37;
                var8 = var8.DM_COULD_NOT_BE_DELIVERED;
                var8 = var10.bind(var11)(var8);
                var2.helpUrl = var8;
                var3 = var4.bind(var6)(var3, var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var4 = 'SEND_FAILED (';
                var2 = ')';
                var2 = var6.bind(var4)(var7, var2);
                var4 = var3;
                var3 = var2;
                _fun54128_ip = 880;
                continue _fun54128;
            case 296:
                var6 = _closure1_slot53;
                var2 = var6[var7];
                var3 = var2.messageName;
                var7 = var6[var7];
                var6 = var7.messageGetter;
                var4 = var6.bind(var7)();
                _fun54128_ip = 880;
                continue _fun54128;
            case 329:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 44;
                var6 = var10[var2];
                var6 = var8.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var10[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2.WxX2Fd;
                var4 = var6.bind(var7)(var2);
                var3 = 'HARMFUL_URL_BLOCKED';
                _fun54128_ip = 880;
                continue _fun54128;
            case 395:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 44;
                var7 = var10[var2];
                var7 = var6.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var2 = var10[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.t;
                var6 = var2.zSG3Qy;
                var2 = {};
                var10 = _closure1_slot38;
                var10 = var10.HARMFUL_LINKS;
                var2.helpUrl = var10;
                var4 = var7.bind(var8)(var6, var2);
                var3 = 'HARMFUL_LINK_MESSAGE_BLOCKED';
                _fun54128_ip = 880;
                continue _fun54128;
            case 479:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 44;
                var6 = var10[var2];
                var6 = var8.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var10[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2["aY+lLC"];
                var4 = var6.bind(var7)(var2);
                var3 = 'TOO_MANY_ANNOUNCEMENT_THREADS';
                _fun54128_ip = 880;
                continue _fun54128;
            case 545:
                var2 = var9.isForumLikeChannel;
                var2 = var2.bind(var9)();
                if (var2) {
                    _fun54128_ip = 630;
                    continue _fun54128
                }
            case 558:
                var2 = var9.isForumPost;
                var2 = var2.bind(var9)();
                if (var2) {
                    _fun54128_ip = 630;
                    continue _fun54128
                }
            case 571:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 44;
                var6 = var10[var2];
                var6 = var8.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var10[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2["5EMPA7"];
                var6 = var6.bind(var7)(var2);
                _fun54128_ip = 687;
                continue _fun54128;
            case 630:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 44;
                var7 = var11[var2];
                var7 = var10.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var11[var2];
                var2 = var10.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2["/jUd2+"];
                var6 = var7.bind(var8)(var2);
            case 687:
                var3 = 'TOO_MANY_THREADS';
                var4 = var6;
                _fun54128_ip = 880;
                continue _fun54128;
            case 699:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 44;
                var7 = var12[var2];
                var7 = var6.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var2 = var12[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.t;
                var6 = var2.CTMXwL;
                var2 = {};
                var11 = _closure1_slot1;
                var10 = 45;
                var10 = var12[var10];
                var12 = var11.bind(var0)(var10);
                var11 = var12.getArticleURL;
                var10 = _closure1_slot37;
                var10 = var10.DM_COULD_NOT_BE_DELIVERED;
                var10 = var11.bind(var12)(var10);
                var2.helpUrl = var10;
                var4 = var7.bind(var8)(var6, var2);
                var3 = 'INVALID_MESSAGE_SEND_USER';
                _fun54128_ip = 880;
                continue _fun54128;
            case 805:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 44;
                var7 = var10[var2];
                var7 = var6.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var2 = var10[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.t;
                var6 = var2.IWntYg;
                var2 = {};
                var9 = var9.rateLimitPerUser;
                var2.seconds = var9;
                var4 = var7.bind(var8)(var6, var2);
                var3 = 'SLOWMODE_RATE_LIMITED';
            case 880:
                var2 = _closure1_slot54;
                var1 = var2.sendBotMessage;
                var1 = var1.bind(var2)(var5, var4, var3);
            case 897:
                return var0;
        }
    };
    var1.sendClydeError = var7;
    var7 = function arg0, arg1, arg2() {
        _fun54129: for (var _fun54129_ip = 0;;) switch (_fun54129_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = _closure1_slot18;
                var1 = var2.getChannel;
                var12 = var1.bind(var2)(var4);
                var1 = null;
                if (!(var1 != var12)) {
                    _fun54129_ip = 365;
                    continue _fun54129
                }
            case 34:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 48;
                var6 = var11[var2];
                var2 = undefined;
                var8 = var10.bind(var2)(var6);
                var7 = var8.match;
                var6 = {};
                var9 = var12.isDM;
                var9 = var9.bind(var12)();
                var6.isDM = var9;
                var9 = var12.isGroupDM;
                var9 = var9.bind(var12)();
                var6.isGDM = var9;
                var9 = var7.bind(var8)(var6);
                var8 = var9.with;
                var7 = {};
                var6 = true;
                var7.isDM = var6;
                var6 = function() { // Environment: var5
                    var0 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 44;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1["mktny/"];
                    var1 = var2.bind(var3)(var1);
                    var0.message = var1;
                    var1 = 'BOT_DM_EXPLICIT_CONTENT';
                    var0.messageName = var1;
                    return var0;
                };
                var9 = var8.bind(var9)(var7, var6);
                var8 = var9.with;
                var7 = {
                    'isDM': false,
                    'isGDM': true
                };
                var6 = function() { // Environment: var5
                    var0 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 44;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1["mktny/"];
                    var1 = var2.bind(var3)(var1);
                    var0.message = var1;
                    var1 = 'BOT_GDM_EXPLICIT_CONTENT';
                    var0.messageName = var1;
                    return var0;
                };
                var7 = var8.bind(var9)(var7, var6);
                var6 = var7.otherwise;
                var5 = function() { // Environment: var5
                    var0 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 44;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.i4AbAS;
                    var1 = var2.bind(var3)(var1);
                    var0.message = var1;
                    var1 = 'BOT_GUILD_EXPLICIT_CONTENT';
                    var0.messageName = var1;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var15 = var5.message;
                var14 = var5.messageName;
                var5 = 49;
                var5 = var11[var5];
                var6 = var10.bind(var2)(var5);
                var5 = var6.createNonce;
                var5 = var5.bind(var6)();
                var7 = _closure1_slot54;
                var6 = var7.sendBotMessage;
                var17 = var7;
                var16 = var4;
                var13 = var5;
                var6 = var17[var6](var16, var15, var14, var13, var12);
                var9 = 50;
                var6 = var11[var9];
                var8 = var10.bind(var2)(var6);
                var7 = var8.trackMediaRedactionAction;
                var6 = {};
                var9 = var11[var9];
                var9 = var10.bind(var2)(var9);
                var9 = var9.TrackMediaRedactionActionType;
                var9 = var9.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT;
                var6.action = var9;
                var6.messageId = var5;
                var6.channelId = var4;
                var9 = arg2;
                var6.context = var9;
                var6 = var7.bind(var8)(var6);
                var1 = var1 != var3;
                if (!var1) {
                    _fun54129_ip = 307;
                    continue _fun54129
                }
            case 296:
                var7 = var3.length;
                var6 = 0;
                var1 = var7 > var6;
            case 307:
                if (!var1) {
                    _fun54129_ip = 365;
                    continue _fun54129
                }
            case 310:
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 46;
                var0 = var6[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var6 = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
                var0.type = var6;
                var0.messageId = var5;
                var0.channelId = var4;
                var0.attachments = var3;
                var0 = var1.bind(var2)(var0);
            case 365:
                var0 = undefined;
                return var0;
        }
    };
    var1.sendExplicitMediaClydeError = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 46;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'TRUNCATE_MESSAGES';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.truncateBottom = var4;
        var4 = arg2;
        var1.truncateTop = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.truncateMessages = var7;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 46;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLEAR_MESSAGES';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearChannel = var7;
    var7 = function arg0, arg1() {
        _fun54135: for (var _fun54135_ip = 0;;) switch (_fun54135_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var6 = _closure1_slot54;
                var5 = var6.trackJump;
                var2 = null;
                var1 = 'Present';
                var1 = var5.bind(var6)(var4, var2, var1);
                var5 = {};
                var1 = true;
                var5.present = var1;
                var2 = _closure1_slot21;
                var1 = var2.hasPresent;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun54135_ip = 93;
                    continue _fun54135
                }
            case 61:
                var6 = _closure1_slot54;
                var2 = var6.fetchMessages;
                var1 = {};
                var1.channelId = var4;
                var1.limit = var3;
                var1.jump = var5;
                var1 = var2.bind(var6)(var1);
                _fun54135_ip = 150;
                continue _fun54135;
            case 93:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 46;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var6 = 'LOAD_MESSAGES_SUCCESS_CACHED';
                var0.type = var6;
                var0.jump = var5;
                var0.channelId = var4;
                var0.limit = var3;
                var0 = var1.bind(var2)(var0);
            case 150:
                var0 = undefined;
                return var0;
        }
    };
    var1.jumpToPresent = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 31;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot27;
        var2 = var1.JUMP;
        var1 = {};
        var5 = arg2;
        var1.context = var5;
        var5 = arg0;
        var1.channel_id = var5;
        var5 = arg1;
        var1.message_id = var5;
        var6 = arg3;
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackJump = var7;
    var7 = function arg0() {
        _fun54137: for (var _fun54137_ip = 0;;) switch (_fun54137_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.channelId;
                var11 = var0.messageId;
                var10 = var0.flash;
                var1 = undefined;
                if (!(var10 === var1)) {
                    _fun54137_ip = 27;
                    continue _fun54137
                }
            case 25:
                var10 = false;
            case 27:
                var9 = var0.offset;
                var6 = var0.context;
                var2 = var0.extraProperties;
                if (!(var2 === var1)) {
                    _fun54137_ip = 50;
                    continue _fun54137
                }
            case 48:
                var2 = null;
            case 50:
                var5 = var0.isPreload;
                var8 = var0.returnMessageId;
                var4 = var0.skipLocalFetch;
                var7 = var0.jumpType;
                var3 = var0.avoidInitialScroll;
                var1 = 'string';
                var0 = typeof var6;
                if (!(var1 === var0)) {
                    _fun54137_ip = 123;
                    continue _fun54137
                }
            case 91:
                var1 = _closure1_slot54;
                var0 = var1.trackJump;
                var17 = var1;
                var16 = var12;
                var15 = var11;
                var14 = var6;
                var13 = var2;
                var0 = var17[var0](var16, var15, var14, var13, var12);
            case 123:
                var0 = _closure1_slot48;
                var2 = null;
                var0 = var2 == var0;
                if (var0) {
                    _fun54137_ip = 153;
                    continue _fun54137
                }
            case 139:
                var1 = _closure1_slot48;
                var1 = var1.pauseAllMediaPlayers;
                var0 = var2 == var1;
            case 153:
                if (var0) {
                    _fun54137_ip = 170;
                    continue _fun54137
                }
            case 156:
                var1 = _closure1_slot48;
                var0 = var1.pauseAllMediaPlayers;
                var0 = var0.bind(var1)();
            case 170:
                var2 = _closure1_slot54;
                var1 = var2.fetchMessages;
                var0 = {};
                var0.channelId = var12;
                var6 = _closure1_slot34;
                var0.limit = var6;
                var6 = {};
                var6.messageId = var11;
                var6.flash = var10;
                var6.offset = var9;
                var6.returnMessageId = var8;
                var6.jumpType = var7;
                var0.jump = var6;
                var0.isPreload = var5;
                var0.skipLocalFetch = var4;
                var0.avoidInitialScroll = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.jumpToMessage = var7;
    var7 = function arg0() {
        var0 = arg0;
        var5 = var0.channelId;
        var4 = var0.messageId;
        var2 = _closure1_slot54;
        var1 = var2.fetchMessages;
        var0 = {};
        var0.channelId = var5;
        var3 = _closure1_slot34;
        var0.limit = var3;
        var3 = {};
        var3.messageId = var4;
        var0.focus = var3;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.focusMessage = var7;
    var7 = function arg0() {
        var1 = arg0;
        var2 = var1.channelId;
        var _closure2_slot0 = var2;
        var1 = var1.messageId;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54141: for (var _fun54141_ip = 0;;) switch (_fun54141_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54141_ip = 191;
                            continue _fun54141
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 51;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {
                            'url': null,
                            'query': null,
                            'retries': 2,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var9 = _closure1_slot28;
                        var8 = var9.MESSAGES;
                        var6 = _closure2_slot0;
                        var6 = var8.bind(var9)(var6);
                        var1.url = var6;
                        var6 = {};
                        var8 = 1;
                        var6.limit = var8;
                        var7 = _closure2_slot1;
                        var6.around = var7;
                        var1.query = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 120);
                    case 118:
                        return var1;
                    case 120:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun54141_ip = 188;
                            continue _fun54141
                        }
                    case 126:
                        var3 = var1.body;
                        var3 = var3.length;
                        var5 = 0;
                        if (!(!(var3 > var5))) {
                            _fun54141_ip = 145;
                            continue _fun54141
                        }
                    case 142:
                        return var4;
                    case 145:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 52;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.createMessageRecord;
                        var2 = var1.body;
                        var2 = var2[var5];
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 188:
                        return var1;
                    case 191:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchMessage = var7;
    var7 = function arg0() {
        _fun54142: for (var _fun54142_ip = 0;;) switch (_fun54142_ip) {
            case 0:
                var0 = arg0;
                var12 = this;
                var13 = var0.channelId;
                var _closure2_slot0 = var13;
                var11 = var0.before;
                var _closure2_slot1 = var11;
                var10 = var0.after;
                var _closure2_slot2 = var10;
                var9 = var0.limit;
                var _closure2_slot3 = var9;
                var8 = var0.jump;
                var _closure2_slot4 = var8;
                var16 = var0.focus;
                var7 = var0.isPreload;
                var3 = var0.skipLocalFetch;
                var19 = var0.truncate;
                var _closure2_slot5 = var19;
                var2 = var0.forICYMI;
                var _closure2_slot6 = var2;
                var2 = var0.avoidInitialScroll;
                var _closure2_slot7 = var2;
                var6 = var0.feature;
                var14 = var0.fetchKey;
                var _closure2_slot8 = var14;
                var0 = undefined;
                var _closure2_slot11 = var0;
                var _closure2_slot12 = var0;
                var4 = _closure1_slot18;
                var2 = var4.getChannel;
                var17 = var2.bind(var4)(var13);
                var4 = _closure1_slot7;
                var2 = var4.isConnectedOrOverlay;
                var2 = var2.bind(var4)();
                var _closure2_slot9 = var2;
                var4 = global;
                var15 = var4.Date;
                var2 = var15.now;
                var2 = var2.bind(var15)();
                var _closure2_slot10 = var2;
                var15 = null;
                if (!(var15 != var17)) {
                    _fun54142_ip = 214;
                    continue _fun54142
                }
            case 192:
                var18 = var17.type;
                var17 = _closure1_slot29;
                var17 = var17.GUILD_STORE;
                if (!(var18 !== var17)) {
                    _fun54142_ip = 828;
                    continue _fun54142
                }
            case 214:
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var17 = 53;
                var17 = var20[var17];
                var17 = var18.bind(var0)(var17);
                var17 = var17.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                if (!(var13 !== var17)) {
                    _fun54142_ip = 826;
                    continue _fun54142
                }
            case 247:
                var18 = _closure1_slot49;
                var17 = var18.log;
                var21 = var4.JSON;
                var20 = var21.stringify;
                var25 = var20.bind(var21)(var8);
                var4 = var4.HermesInternal;
                var23 = var4.concat;
                var32 = 'Fetching messages for ';
                var30 = ' between ';
                var28 = ' and ';
                var26 = '. jump=';
                var31 = var13;
                var29 = var10;
                var27 = var11;
                var4 = var32[var23](var31, var30, var29, var28, var27, var26, var25, var24);
                var4 = var17.bind(var18)(var4);
                var18 = _closure1_slot54;
                var17 = var18._tryFetchMessagesCached;
                var4 = {};
                var4.channelId = var13;
                var4.before = var11;
                var4.after = var10;
                var4.limit = var9;
                var4.jump = var8;
                var4.focus = var16;
                var4.truncate = var19;
                var4 = var17.bind(var18)(var4);
                if (var4) {
                    _fun54142_ip = 826;
                    continue _fun54142
                }
            case 382:
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var4 = 54;
                var4 = var18[var4];
                var4 = var17.bind(var0)(var4);
                var19 = var4.fetchMessages;
                var4 = var19.recordStart;
                var4 = var4.bind(var19)();
                var4 = 55;
                var4 = var18[var4];
                var18 = var17.bind(var0)(var4);
                var17 = var18.recordChannelFetchStart;
                var4 = var2;
                if (!(var15 != var14)) {
                    _fun54142_ip = 448;
                    continue _fun54142
                }
            case 445:
                var4 = var14;
            case 448:
                var32 = var18;
                var31 = var13;
                var30 = var4;
                var29 = var11;
                var28 = var10;
                var27 = var9;
                var4 = var32[var17](var31, var30, var29, var28, var27, var26);
                var17 = var15 != var8;
                var4 = undefined;
                if (!var17) {
                    _fun54142_ip = 482;
                    continue _fun54142
                }
            case 479:
                var4 = var8;
            case 482:
                var8 = var15 == var4;
                if (!var8) {
                    _fun54142_ip = 493;
                    continue _fun54142
                }
            case 489:
                var8 = var15 != var16;
            case 493:
                if (!var8) {
                    _fun54142_ip = 511;
                    continue _fun54142
                }
            case 496:
                var8 = {};
                var31 = var8;
                var30 = var16;
                var16 = copyDataProperties(var31, var30);
                var4 = var8;
            case 511:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 56;
                var18 = var17[var8];
                var19 = var16.bind(var0)(var18);
                var18 = var19.getOrCreate;
                var19 = var18.bind(var19)(var13);
                var18 = var19.loadStart;
                var19 = var18.bind(var19)(var4);
                var8 = var17[var8];
                var18 = var16.bind(var0)(var8);
                var8 = var18.commit;
                var8 = var8.bind(var18)(var19);
                var8 = 46;
                var8 = var17[var8];
                var17 = var16.bind(var0)(var8);
                var16 = var17.dispatch;
                var8 = {};
                var18 = 'LOAD_MESSAGES';
                var8.type = var18;
                var8 = var16.bind(var17)(var8);
                var16 = var15 == var4;
                var8 = undefined;
                if (var16) {
                    _fun54142_ip = 623;
                    continue _fun54142
                }
            case 618:
                var8 = var4.messageId;
            case 623:
                _closure2_slot11 = var8;
                var4 = _closure1_slot52;
                var16 = var4.prototype;
                var16 = Object.create(var16, {
                    constructor: {
                        value: var4
                    }
                });
                var32 = var16;
                var4 = new var32[var4](var31);
                var4 = var4 instanceof Object ? var4 : var16;
                _closure2_slot12 = var4;
                if (var3) {
                    _fun54142_ip = 696;
                    continue _fun54142
                }
            case 658:
                var3 = var12.fetchLocalMessages;
                if (!(var15 != var14)) {
                    _fun54142_ip = 671;
                    continue _fun54142
                }
            case 668:
                var2 = var14;
            case 671:
                var32 = var12;
                var31 = var13;
                var30 = var2;
                var29 = var11;
                var28 = var10;
                var27 = var9;
                var26 = var4;
                var2 = var32[var3](var31, var30, var29, var28, var27, var26, var25);
            case 696:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 51;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.HTTP;
                var3 = var4.get;
                var2 = {
                    'url': null,
                    'query': null,
                    'retries': 2,
                    'oldFormErrors': true,
                    'rejectWithError': false
                };
                var12 = _closure1_slot28;
                var5 = var12.MESSAGES;
                var5 = var5.bind(var12)(var13);
                var2.url = var5;
                var5 = {};
                var5.before = var11;
                var5.after = var10;
                var5.limit = var9;
                var5.around = var8;
                var5.preload = var7;
                var5.feature = var6;
                var2.query = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 54;
                    var5 = var4[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var5);
                    var6 = var5.fetchMessages;
                    var5 = var6.recordEnd;
                    var5 = var5.bind(var6)();
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var2 = var1.dispatchMessages;
                    var1 = var2.measure;
                    var0 = function() { // Environment: var0
                        _fun54144: for (var _fun54144_ip = 0;;) switch (_fun54144_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var8 = var0.body;
                                var0 = _closure2_slot1;
                                var3 = null;
                                var11 = var3 != var0;
                                var0 = _closure2_slot2;
                                var10 = var3 != var0;
                                var0 = _closure2_slot11;
                                var2 = var3 != var0;
                                if (var2) {
                                    _fun54144_ip = 96;
                                    continue _fun54144
                                }
                            case 46:
                                var5 = var8.length;
                                var0 = _closure2_slot3;
                                var0 = var5 === var0;
                                if (!var0) {
                                    _fun54144_ip = 93;
                                    continue _fun54144
                                }
                            case 62:
                                var5 = var11;
                                if (var5) {
                                    _fun54144_ip = 90;
                                    continue _fun54144
                                }
                            case 68:
                                var6 = _closure2_slot1;
                                var6 = var3 == var6;
                                if (!var6) {
                                    _fun54144_ip = 87;
                                    continue _fun54144
                                }
                            case 79:
                                var7 = _closure2_slot2;
                                var6 = var3 == var7;
                            case 87:
                                var5 = var6;
                            case 90:
                                var0 = var5;
                            case 93:
                                var2 = var0;
                            case 96:
                                var0 = _closure2_slot11;
                                var5 = var3 != var0;
                                if (var5) {
                                    _fun54144_ip = 129;
                                    continue _fun54144
                                }
                            case 107:
                                var0 = var10;
                                if (!var0) {
                                    _fun54144_ip = 126;
                                    continue _fun54144
                                }
                            case 113:
                                var7 = var8.length;
                                var6 = _closure2_slot3;
                                var0 = var7 === var6;
                            case 126:
                                var5 = var0;
                            case 129:
                                var0 = _closure2_slot11;
                                var9 = var2;
                                var7 = var5;
                                if (!(var3 != var0)) {
                                    _fun54144_ip = 390;
                                    continue _fun54144
                                }
                            case 146:
                                var0 = global;
                                var13 = var0.Math;
                                var12 = var13.floor;
                                var14 = _closure2_slot3;
                                var0 = 2;
                                var6 = var14 / var0;
                                var6 = var12.bind(var13)(var6);
                                var12 = _closure2_slot11;
                                var15 = new Array(1);
                                var15[0] = var12;
                                var13 = var8.map;
                                var12 = function(arg0) { // Environment: var4
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var24 = var13.bind(var8)(var12);
                                var13 = 1;
                                var25 = var15;
                                var23 = var13;
                                var12 = arraySpread(var25, var24, var23);
                                var12 = var15.filter;
                                var4 = function(arg0, arg1, arg2) { // Environment: var4
                                    var2 = arg2;
                                    var1 = var2.indexOf;
                                    var0 = arg0;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = arg1;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var16 = var12.bind(var15)(var4);
                                var15 = var16.sort;
                                var18 = _closure1_slot1;
                                var17 = _closure1_slot2;
                                var12 = 57;
                                var17 = var17[var12];
                                var12 = undefined;
                                var12 = var18.bind(var12)(var17);
                                var12 = var12.compare;
                                var16 = var15.bind(var16)(var12);
                                var15 = var16.indexOf;
                                var12 = _closure2_slot11;
                                var12 = var15.bind(var16)(var12);
                                var0 = var14 % var0;
                                var0 = var6 + var0;
                                var0 = var0 - var13;
                                if (!(var12 < var0)) {
                                    _fun54144_ip = 306;
                                    continue _fun54144
                                }
                            case 304:
                                var2 = false;
                            case 306:
                                var0 = var8.length;
                                var0 = var0 - var12;
                                if (!(var0 < var6)) {
                                    _fun54144_ip = 321;
                                    continue _fun54144
                                }
                            case 319:
                                var5 = false;
                            case 321:
                                var9 = var2;
                                var7 = var5;
                                if (!var5) {
                                    _fun54144_ip = 390;
                                    continue _fun54144
                                }
                            case 330:
                                var6 = var8.length;
                                var0 = 0;
                                var9 = var2;
                                var7 = var5;
                                if (!(var6 > var0)) {
                                    _fun54144_ip = 390;
                                    continue _fun54144
                                }
                            case 347:
                                var12 = _closure1_slot23;
                                var6 = var12.lastMessageId;
                                var4 = _closure2_slot0;
                                var4 = var6.bind(var12)(var4);
                                var0 = var8[var0];
                                var0 = var0.id;
                                var9 = var2;
                                var7 = var5;
                                if (!(var0 === var4)) {
                                    _fun54144_ip = 390;
                                    continue _fun54144
                                }
                            case 385:
                                var7 = false;
                                var9 = var2;
                            case 390:
                                var5 = _closure1_slot49;
                                var4 = var5.log;
                                var25 = var8.length;
                                var12 = _closure2_slot0;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var15 = var0.concat;
                                var26 = 'Fetched ';
                                var24 = ' messages for ';
                                var22 = ' isBefore:';
                                var20 = ' isAfter:';
                                var23 = var12;
                                var21 = var11;
                                var19 = var10;
                                var0 = var26[var15](var25, var24, var23, var22, var21, var20, var19, var18);
                                var0 = var4.bind(var5)(var0);
                                var4 = _closure2_slot12;
                                var0 = var4.markComplete;
                                var0 = var0.bind(var4)();
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 46;
                                var4 = var4[var0];
                                var0 = undefined;
                                var6 = var5.bind(var0)(var4);
                                var5 = var6.dispatch;
                                var4 = {};
                                var13 = 'LOAD_MESSAGES_SUCCESS';
                                var4.type = var13;
                                var4.channelId = var12;
                                var4.messages = var8;
                                var4.isBefore = var11;
                                var4.isAfter = var10;
                                var4.hasMoreBefore = var9;
                                var4.hasMoreAfter = var7;
                                var7 = _closure2_slot3;
                                var4.limit = var7;
                                var7 = _closure2_slot4;
                                var4.jump = var7;
                                var7 = _closure2_slot6;
                                var4.forICYMI = var7;
                                var7 = _closure2_slot9;
                                var7 = !var7;
                                if (var7) {
                                    _fun54144_ip = 606;
                                    continue _fun54144
                                }
                            case 584:
                                var10 = _closure1_slot7;
                                var9 = var10.lastTimeConnectedChanged;
                                var10 = var9.bind(var10)();
                                var9 = _closure2_slot10;
                                var7 = var10 >= var9;
                            case 606:
                                var4.isStale = var7;
                                var7 = _closure2_slot5;
                                var4.truncate = var7;
                                var7 = _closure2_slot7;
                                var4.avoidInitialScroll = var7;
                                var4 = var5.bind(var6)(var4);
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 55;
                                var2 = var5[var2];
                                var7 = var4.bind(var0)(var2);
                                var6 = var7.recordChannelFetchedNetwork;
                                var5 = _closure2_slot0;
                                var2 = _closure2_slot8;
                                if (!(var3 == var2)) {
                                    _fun54144_ip = 680;
                                    continue _fun54144
                                }
                            case 674:
                                var4 = _closure2_slot10;
                                _fun54144_ip = 684;
                                continue _fun54144;
                            case 680:
                                var4 = _closure2_slot8;
                            case 684:
                                var23 = _closure2_slot1;
                                var22 = _closure2_slot2;
                                var21 = _closure2_slot3;
                                var26 = var7;
                                var25 = var5;
                                var24 = var4;
                                var20 = var8;
                                var1 = var26[var6](var25, var24, var23, var22, var21, var20, var19);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = true;
                    return var0;
                };
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot49;
                    var2 = var4.log;
                    var3 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = 'Failed to fetch messages for ';
                    var1 = var5.bind(var1)(var3);
                    var1 = var2.bind(var4)(var1);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 46;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var4 = 'LOAD_MESSAGES_FAILURE';
                    var0.type = var4;
                    var0.channelId = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = false;
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 826:
                return var0;
            case 828:
                var0 = false;
                return var0;
        }
    };
    var1.fetchMessages = var7;
    var7 = function arg0, arg1, arg2, arg3, arg4, arg5() {
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
        var1 = arg5;
        var _closure2_slot5 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54150: for (var _fun54150_ip = 0;;) switch (_fun54150_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54150_ip = 694;
                            continue _fun54150
                        }
                    case 12:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var6 = _closure1_slot18;
                        var4 = var6.getBasicChannel;
                        var10 = _closure2_slot0;
                        var8 = var4.bind(var6)(var10);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 56;
                        var4 = var9[var4];
                        var6 = var7.bind(var2)(var4);
                        var4 = var6.getOrCreate;
                        var6 = var4.bind(var6)(var10);
                        var4 = 58;
                        var4 = var9[var4];
                        var7 = var7.bind(var2)(var4);
                        var4 = var7.database;
                        var7 = var4.bind(var7)();
                        _closure4_slot0 = var7;
                        var4 = null;
                        if (!(var4 != var7)) {
                            _fun54150_ip = 126;
                            continue _fun54150
                        }
                    case 106:
                        if (!(var4 != var8)) {
                            _fun54150_ip = 126;
                            continue _fun54150
                        }
                    case 110:
                        var7 = _closure2_slot2;
                        if (!(var4 == var7)) {
                            _fun54150_ip = 126;
                            continue _fun54150
                        }
                    case 118:
                        var7 = _closure2_slot3;
                        if (!(var4 != var7)) {
                            _fun54150_ip = 173;
                            continue _fun54150
                        }
                    case 126:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 54;
                        var7 = var10[var7];
                        var11 = var9.bind(var2)(var7);
                        var10 = var11.addLocalMessages;
                        var9 = _closure2_slot0;
                        var7 = -1;
                        var7 = var10.bind(var11)(var9, var7);
                        _fun54150_ip = 688;
                        continue _fun54150;
                    case 173:
                        var7 = var6.ready;
                        if (!var7) {
                            _fun54150_ip = 238;
                            continue _fun54150
                        }
                    case 182:
                        var6 = var6.cached;
                        if (var6) {
                            _fun54150_ip = 238;
                            continue _fun54150
                        }
                    case 191:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 54;
                        var6 = var9[var6];
                        var10 = var7.bind(var2)(var6);
                        var9 = var10.addLocalMessages;
                        var7 = _closure2_slot0;
                        var6 = -2;
                        var6 = var9.bind(var10)(var7, var6);
                        _fun54150_ip = 688;
                        continue _fun54150;
                    case 238:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 59;
                        var6 = var9[var6];
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.tryLoadAsync;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 60;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.load;
                            var2 = _closure4_slot0;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot4;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        };
                        var1 = var6.bind(var7)(var1);
                        SaveGenerator(address = 278);
                    case 276:
                        return var1;
                    case 278:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun54150_ip = 691;
                            continue _fun54150
                        }
                    case 287:
                        if (!(var4 == var1)) {
                            _fun54150_ip = 338;
                            continue _fun54150
                        }
                    case 291:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 54;
                        var4 = var7[var4];
                        var9 = var6.bind(var2)(var4);
                        var7 = var9.addLocalMessages;
                        var6 = _closure2_slot0;
                        var4 = -3;
                        var4 = var7.bind(var9)(var6, var4);
                        _fun54150_ip = 688;
                        continue _fun54150;
                    case 338:
                        var9 = _closure1_slot49;
                        var7 = var9.log;
                        var4 = var1.messages;
                        var22 = var4.length;
                        var10 = _closure2_slot0;
                        var4 = _closure2_slot5;
                        var18 = var4.completed;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var14 = var6.concat;
                        var23 = 'fetched ';
                        var21 = ' messages from local database (channel_id: ';
                        var19 = ', remote_fetch_completed: ';
                        var17 = ')';
                        var20 = var10;
                        var6 = var23[var14](var22, var21, var20, var19, var18, var17, var16);
                        var6 = var7.bind(var9)(var6);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 54;
                        var6 = var9[var6];
                        var9 = var7.bind(var2)(var6);
                        var7 = var9.addLocalMessages;
                        var6 = var1.messages;
                        var6 = var6.length;
                        var6 = var7.bind(var9)(var10, var6);
                        var4 = var4.completed;
                        if (var4) {
                            _fun54150_ip = 688;
                            continue _fun54150
                        }
                    case 474:
                        var4 = var1.messages;
                        var6 = var4.length;
                        var4 = 0;
                        if (!(var6 > var4)) {
                            _fun54150_ip = 688;
                            continue _fun54150
                        }
                    case 494:
                        var4 = var1.messages;
                        var6 = var4.length;
                        var4 = _closure2_slot4;
                        var6 = var6 >= var4;
                        if (!var6) {
                            _fun54150_ip = 540;
                            continue _fun54150
                        }
                    case 516:
                        var7 = var1.connectionId;
                        var9 = _closure1_slot7;
                        var4 = var9.lastTimeConnectedChanged;
                        var4 = var4.bind(var9)();
                        var6 = var7 === var4;
                    case 540:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var7 = 55;
                        var7 = var5[var7];
                        var14 = var4.bind(var2)(var7);
                        var13 = var14.recordChannelFetchedLocal;
                        var7 = _closure2_slot0;
                        var21 = _closure2_slot1;
                        var20 = _closure2_slot2;
                        var19 = _closure2_slot3;
                        var18 = _closure2_slot4;
                        var17 = var1.messages;
                        var23 = var14;
                        var22 = var7;
                        var3 = var23[var13](var22, var21, var20, var19, var18, var17, var16);
                        var3 = 46;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var9 = 'LOCAL_MESSAGES_LOADED';
                        var3.type = var9;
                        var8 = var8.guild_id;
                        var3.guildId = var8;
                        var3.channelId = var7;
                        var7 = var1.users;
                        var3.users = var7;
                        var7 = var1.members;
                        var3.members = var7;
                        var7 = var1.messages;
                        var3.messages = var7;
                        var6 = !var6;
                        var3.stale = var6;
                        var3 = var4.bind(var5)(var3);
                    case 688:
                        return var2;
                    case 691:
                        return var1;
                    case 694:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchLocalMessages = var7;
    var7 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54154: for (var _fun54154_ip = 0;;) switch (_fun54154_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54154_ip = 502;
                            continue _fun54154
                        }
                    case 12:
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var1;
                        var5 = _closure1_slot18;
                        var4 = var5.getBasicChannel;
                        var2 = _closure2_slot0;
                        var10 = var4.bind(var5)(var2);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 58;
                        var2 = var5[var2];
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.database;
                        var2 = var2.bind(var4)();
                        _closure4_slot0 = var2;
                        var5 = null;
                        if (!(var5 != var2)) {
                            _fun54154_ip = 499;
                            continue _fun54154
                        }
                    case 90:
                        if (!(var5 != var10)) {
                            _fun54154_ip = 499;
                            continue _fun54154
                        }
                    case 97:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var8 = 56;
                        var2 = var2[var8];
                        var7 = var4.bind(var1)(var2);
                        var4 = var7.getOrCreate;
                        var2 = _closure2_slot0;
                        var2 = var4.bind(var7)(var2);
                        var2 = var2.hasMoreAfter;
                        if (var2) {
                            _fun54154_ip = 499;
                            continue _fun54154
                        }
                    case 144:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 59;
                        var2 = var7[var2];
                        var7 = var4.bind(var1)(var2);
                        var4 = var7.tryLoadAsync;
                        var2 = function() { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 60;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.load;
                            var2 = _closure4_slot0;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        };
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address = 184);
                    case 182:
                        return var2;
                    case 184:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54154_ip = 496;
                            continue _fun54154
                        }
                    case 193:
                        if (!(var5 != var2)) {
                            _fun54154_ip = 499;
                            continue _fun54154
                        }
                    case 200:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var8 = var7.bind(var1)(var4);
                        var7 = var8.getOrCreate;
                        var4 = _closure2_slot0;
                        var7 = var7.bind(var8)(var4);
                        var4 = var7.last;
                        var7 = var4.bind(var7)();
                        var8 = var5 == var7;
                        var4 = undefined;
                        if (var8) {
                            _fun54154_ip = 256;
                            continue _fun54154
                        }
                    case 251:
                        var4 = var7.id;
                    case 256:
                        _closure4_slot1 = var4;
                        if (!(var5 != var4)) {
                            _fun54154_ip = 287;
                            continue _fun54154
                        }
                    case 264:
                        var5 = var2.messages;
                        var4 = var5.filter;
                        var3 = function(arg0) { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 57;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.compare;
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot1;
                            var1 = var2.bind(var3)(var1, var0);
                            var0 = 0;
                            var0 = var1 > var0;
                            return var0;
                        };
                        var7 = var4.bind(var5)(var3);
                        _fun54154_ip = 293;
                        continue _fun54154;
                    case 287:
                        var7 = var2.messages;
                    case 293:
                        var5 = _closure1_slot49;
                        var4 = var5.log;
                        var3 = var2.messages;
                        var18 = var3.length;
                        var16 = var7.length;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var12 = var3.concat;
                        var19 = 'Fetched ';
                        var17 = ' messages from the cache after foregrounding. ';
                        var15 = ' are new';
                        var3 = var19[var12](var18, var17, var16, var15, var14);
                        var3 = var4.bind(var5)(var3);
                        var4 = var7.length;
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun54154_ip = 499;
                            continue _fun54154
                        }
                    case 372:
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 46;
                        var3 = var8[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var11 = 'LOCAL_MESSAGES_LOADED';
                        var3.type = var11;
                        var10 = var10.guild_id;
                        var3.guildId = var10;
                        var9 = _closure2_slot0;
                        var3.channelId = var9;
                        var9 = var2.users;
                        var3.users = var9;
                        var9 = var2.members;
                        var3.members = var9;
                        var3.messages = var7;
                        var7 = true;
                        var3.stale = var7;
                        var7 = _closure1_slot0;
                        var6 = 61;
                        var6 = var8[var6];
                        var7 = var7.bind(var1)(var6);
                        var6 = var7.isIOSPushNotificationRawPayloadFixExperimentEnabled;
                        var6 = var6.bind(var7)();
                        var3.shouldForceCommitMessages = var6;
                        var3 = var4.bind(var5)(var3);
                        _fun54154_ip = 499;
                        continue _fun54154;
                    case 496:
                        return var2;
                    case 499:
                        return var1;
                    case 502:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchNewLocalMessages = var7;
    var7 = function arg0() {
        _fun54157: for (var _fun54157_ip = 0;;) switch (_fun54157_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var12 = var0.before;
                var14 = var0.after;
                var4 = var0.limit;
                var5 = var0.jump;
                var9 = var0.focus;
                var3 = var0.truncate;
                var2 = _closure1_slot21;
                var1 = var2.getMessages;
                var7 = var1.bind(var2)(var6);
                var1 = var7.cached;
                if (var1) {
                    _fun54157_ip = 919;
                    continue _fun54157
                }
            case 73:
                var1 = var7.ready;
                if (!var1) {
                    _fun54157_ip = 919;
                    continue _fun54157
                }
            case 85:
                var13 = null;
                var8 = var13 == var5;
                var2 = undefined;
                var1 = undefined;
                if (var8) {
                    _fun54157_ip = 103;
                    continue _fun54157
                }
            case 98:
                var1 = var5.messageId;
            case 103:
                if (!(var13 == var1)) {
                    _fun54157_ip = 308;
                    continue _fun54157
                }
            case 110:
                var8 = var13 == var9;
                var1 = undefined;
                if (var8) {
                    _fun54157_ip = 124;
                    continue _fun54157
                }
            case 119:
                var1 = var9.messageId;
            case 124:
                if (!(var13 == var1)) {
                    _fun54157_ip = 308;
                    continue _fun54157
                }
            case 131:
                if (!(var13 != var12)) {
                    _fun54157_ip = 151;
                    continue _fun54157
                }
            case 135:
                var1 = var7.hasBeforeCached;
                var1 = var1.bind(var7)(var12);
                if (var1) {
                    _fun54157_ip = 244;
                    continue _fun54157
                }
            case 151:
                var8 = var13 == var14;
                if (var8) {
                    _fun54157_ip = 174;
                    continue _fun54157
                }
            case 158:
                var1 = var7.hasAfterCached;
                var1 = var1.bind(var7)(var14);
                var8 = !var1;
            case 174:
                var1 = !var8;
                if (var8) {
                    _fun54157_ip = 242;
                    continue _fun54157
                }
            case 180:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 46;
                var8 = var11[var8];
                var11 = var10.bind(var2)(var8);
                var10 = var11.dispatch;
                var8 = {};
                var15 = 'LOAD_MESSAGES_SUCCESS_CACHED';
                var8.type = var15;
                var8.channelId = var6;
                var8.after = var14;
                var8.limit = var4;
                var8.truncate = var3;
                var8 = var10.bind(var11)(var8);
                var1 = true;
            case 242:
                _fun54157_ip = 306;
                continue _fun54157;
            case 244:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 46;
                var8 = var11[var8];
                var11 = var10.bind(var2)(var8);
                var10 = var11.dispatch;
                var8 = {};
                var14 = 'LOAD_MESSAGES_SUCCESS_CACHED';
                var8.type = var14;
                var8.channelId = var6;
                var8.before = var12;
                var8.limit = var4;
                var8.truncate = var3;
                var8 = var10.bind(var11)(var8);
                var1 = true;
            case 306:
                return var1;
            case 308:
                var8 = var13 == var5;
                var1 = undefined;
                if (var8) {
                    _fun54157_ip = 322;
                    continue _fun54157
                }
            case 317:
                var1 = var5.messageId;
            case 322:
                if (!(var13 != var1)) {
                    _fun54157_ip = 350;
                    continue _fun54157
                }
            case 326:
                var10 = var7.has;
                var8 = var5.messageId;
                var1 = false;
                var1 = var10.bind(var7)(var8, var1);
                if (var1) {
                    _fun54157_ip = 855;
                    continue _fun54157
                }
            case 350:
                var8 = var13 == var9;
                var1 = undefined;
                if (var8) {
                    _fun54157_ip = 364;
                    continue _fun54157
                }
            case 359:
                var1 = var9.messageId;
            case 364:
                var11 = var5;
                if (!(var13 != var1)) {
                    _fun54157_ip = 410;
                    continue _fun54157
                }
            case 371:
                var10 = var7.has;
                var8 = var9.messageId;
                var1 = false;
                var1 = var10.bind(var7)(var8, var1);
                if (var1) {
                    _fun54157_ip = 791;
                    continue _fun54157
                }
            case 395:
                var1 = {};
                var18 = var1;
                var17 = var9;
                var8 = copyDataProperties(var18, var17);
                var11 = var1;
            case 410:
                var8 = var13 == var11;
                var1 = undefined;
                if (var8) {
                    _fun54157_ip = 424;
                    continue _fun54157
                }
            case 419:
                var1 = var11.messageId;
            case 424:
                var1 = var13 != var1;
                var10 = 0;
                if (!var1) {
                    _fun54157_ip = 478;
                    continue _fun54157
                }
            case 433:
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 57;
                var1 = var12[var1];
                var12 = var8.bind(var2)(var1);
                var8 = var12.extractTimestamp;
                var14 = var13 == var11;
                var1 = undefined;
                if (var14) {
                    _fun54157_ip = 473;
                    continue _fun54157
                }
            case 468:
                var1 = var11.messageId;
            case 473:
                var10 = var8.bind(var12)(var1);
            case 478:
                var1 = var7.first;
                var12 = var1.bind(var7)();
                var1 = var7.last;
                var8 = var1.bind(var7)();
                var1 = var7.hasMoreBefore;
                var1 = !var1;
                if (!var1) {
                    _fun54157_ip = 514;
                    continue _fun54157
                }
            case 510:
                var1 = var13 != var12;
            case 514:
                if (!var1) {
                    _fun54157_ip = 557;
                    continue _fun54157
                }
            case 517:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 57;
                var14 = var16[var14];
                var16 = var15.bind(var2)(var14);
                var15 = var16.extractTimestamp;
                var14 = var12.id;
                var14 = var15.bind(var16)(var14);
                var1 = var14 >= var10;
            case 557:
                if (var1) {
                    _fun54157_ip = 622;
                    continue _fun54157
                }
            case 560:
                var7 = var7.hasMoreAfter;
                var7 = !var7;
                if (!var7) {
                    _fun54157_ip = 576;
                    continue _fun54157
                }
            case 572:
                var7 = var13 != var8;
            case 576:
                if (!var7) {
                    _fun54157_ip = 619;
                    continue _fun54157
                }
            case 579:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 57;
                var14 = var16[var14];
                var16 = var15.bind(var2)(var14);
                var15 = var16.extractTimestamp;
                var14 = var8.id;
                var14 = var15.bind(var16)(var14);
                var7 = var14 <= var10;
            case 619:
                var1 = var7;
            case 622:
                if (var1) {
                    _fun54157_ip = 725;
                    continue _fun54157
                }
            case 625:
                var7 = var13 != var12;
                if (!var7) {
                    _fun54157_ip = 636;
                    continue _fun54157
                }
            case 632:
                var7 = var13 != var8;
            case 636:
                if (!var7) {
                    _fun54157_ip = 679;
                    continue _fun54157
                }
            case 639:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 57;
                var13 = var15[var13];
                var14 = var14.bind(var2)(var13);
                var13 = var14.extractTimestamp;
                var12 = var12.id;
                var12 = var13.bind(var14)(var12);
                var7 = var12 < var10;
            case 679:
                if (!var7) {
                    _fun54157_ip = 722;
                    continue _fun54157
                }
            case 682:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 57;
                var12 = var14[var12];
                var13 = var13.bind(var2)(var12);
                var12 = var13.extractTimestamp;
                var8 = var8.id;
                var8 = var12.bind(var13)(var8);
                var7 = var8 > var10;
            case 722:
                var1 = var7;
            case 725:
                if (!var1) {
                    _fun54157_ip = 789;
                    continue _fun54157
                }
            case 728:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 46;
                var7 = var10[var7];
                var10 = var8.bind(var2)(var7);
                var8 = var10.dispatch;
                var7 = {};
                var12 = 'LOAD_MESSAGES_SUCCESS_CACHED';
                var7.type = var12;
                var7.channelId = var6;
                var7.jump = var11;
                var11 = _closure1_slot34;
                var7.limit = var11;
                var7 = var8.bind(var10)(var7);
                var1 = true;
            case 789:
                return var1;
            case 791:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 46;
                var1 = var8[var1];
                var8 = var7.bind(var2)(var1);
                var7 = var8.dispatch;
                var1 = {};
                var10 = 'LOAD_MESSAGES_SUCCESS_CACHED';
                var1.type = var10;
                var1.channelId = var6;
                var1.focus = var9;
                var1.limit = var4;
                var1.truncate = var3;
                var1 = var7.bind(var8)(var1);
                var1 = true;
                return var1;
            case 855:
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 46;
                var0 = var7[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var7 = 'LOAD_MESSAGES_SUCCESS_CACHED';
                var0.type = var7;
                var0.channelId = var6;
                var0.jump = var5;
                var0.limit = var4;
                var0.truncate = var3;
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
            case 919:
                var0 = false;
                return var0;
        }
    };
    var1._tryFetchMessagesCached = var7;
    var7 = function arg0, arg1() {
        _fun54158: for (var _fun54158_ip = 0;;) switch (_fun54158_ip) {
            case 0:
                var2 = arguments[2];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun54158_ip = 27;
                    continue _fun54158
                }
            case 25:
                var2 = true;
            case 27:
                var _closure2_slot2 = var2;
                var2 = arguments[3];
                var _closure2_slot3 = var2;
                var2 = _closure1_slot4;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun54160: for (var _fun54160_ip = 0;;) switch (_fun54160_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun54160_ip = 446;
                                    continue _fun54160
                                }
                            case 12:
                                var6 = undefined;
                                var _closure4_slot0 = var6;
                                var1 = _closure2_slot1;
                                var1 = var1.reaction;
                                if (var1) {
                                    _fun54160_ip = 425;
                                    continue _fun54160
                                }
                            case 37:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 62;
                                var1 = var5[var1];
                                var4 = var4.bind(var6)(var1);
                                var1 = _closure2_slot0;
                                var1 = var4.bind(var6)(var1);
                                SaveGenerator(address = 73);
                            case 71:
                                return var1;
                            case 73:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun54160_ip = 422;
                                    continue _fun54160
                                }
                            case 82:
                                var4 = null;
                                if (!(var4 == var1)) {
                                    _fun54160_ip = 387;
                                    continue _fun54160
                                }
                            case 91:
                                var5 = _closure2_slot3;
                                var11 = var5.nonce;
                                if (!(var4 == var11)) {
                                    _fun54160_ip = 135;
                                    continue _fun54160
                                }
                            case 105:
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var4 = 49;
                                var4 = var8[var4];
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.createNonce;
                                var11 = var4.bind(var5)();
                            case 135:
                                var4 = {};
                                var17 = _closure2_slot3;
                                var18 = var4;
                                var5 = copyDataProperties(var18, var17);
                                var5 = 'nonce';
                                var4[var5] = var11;
                                _closure2_slot3 = var4;
                                var5 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var4 = 63;
                                var4 = var8[var4];
                                var8 = var5.bind(var6)(var4);
                                var5 = var8.backgroundify;
                                var4 = function() { // Environment: var7
                                    var4 = _closure1_slot54;
                                    var3 = var4._sendMessage;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot3;
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                    return var0;
                                };
                                var5 = var5.bind(var8)(var4, var6);
                                _closure4_slot0 = var5;
                                var10 = _closure1_slot10;
                                var8 = var10.recordMessageSendAttempt;
                                var9 = _closure2_slot0;
                                var4 = _closure2_slot3;
                                var4 = var8.bind(var10)(var9, var11, var4);
                                var8 = _closure1_slot21;
                                var4 = var8.isReady;
                                var4 = var4.bind(var8)(var9);
                                if (var4) {
                                    _fun54160_ip = 380;
                                    continue _fun54160
                                }
                            case 250:
                                var4 = _closure2_slot2;
                                if (!var4) {
                                    _fun54160_ip = 291;
                                    continue _fun54160
                                }
                            case 257:
                                var8 = _closure2_slot0;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 53;
                                var4 = var10[var4];
                                var4 = var9.bind(var6)(var4);
                                var4 = var4.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                                if (!(var8 === var4)) {
                                    _fun54160_ip = 297;
                                    continue _fun54160
                                }
                            case 291:
                                var4 = var5.bind(var6)();
                                _fun54160_ip = 378;
                                continue _fun54160;
                            case 297:
                                var11 = _closure1_slot50;
                                var10 = var11.info;
                                var14 = _closure2_slot0;
                                var8 = global;
                                var9 = var8.HermesInternal;
                                var13 = var9.concat;
                                var12 = 'Waiting for channel ';
                                var9 = ' to be ready before sending.';
                                var9 = var13.bind(var12)(var14, var9);
                                var9 = var10.bind(var11)(var9);
                                var9 = var8.Promise;
                                var8 = var9.prototype;
                                var8 = Object.create(var8, {
                                    constructor: {
                                        value: var9
                                    }
                                });
                                var18 = function(arg0, arg1) { // Environment: var7
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = arg1;
                                    var _closure5_slot1 = var1;
                                    var3 = _closure1_slot21;
                                    var2 = var3.whenReady;
                                    var1 = _closure2_slot0;
                                    var0 = function() { // Environment: var0
                                        var2 = _closure1_slot50;
                                        var1 = var2.info;
                                        var5 = _closure2_slot0;
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var4 = var0.concat;
                                        var3 = 'Channel ';
                                        var0 = ' is ready for sending now.';
                                        var0 = var4.bind(var3)(var5, var0);
                                        var0 = var1.bind(var2)(var0);
                                        var1 = _closure4_slot0;
                                        var0 = undefined;
                                        var4 = var1.bind(var0)();
                                        var3 = var4.then;
                                        var2 = _closure5_slot0;
                                        var1 = _closure5_slot1;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                    };
                                    var0 = var2.bind(var3)(var1, var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var19 = var8;
                                var7 = new var19[var9](var18, var17);
                                var4 = var7 instanceof Object ? var7 : var8;
                            case 378:
                                _fun54160_ip = 384;
                                continue _fun54160;
                            case 380:
                                var4 = var5.bind(var6)();
                            case 384:
                                return var4;
                            case 387:
                                var6 = _closure1_slot54;
                                var5 = var6.sendMessage;
                                var17 = _closure2_slot1;
                                var16 = _closure2_slot2;
                                var15 = _closure2_slot3;
                                var19 = var6;
                                var18 = var1;
                                var2 = var19[var5](var18, var17, var16, var15, var14);
                                return var2;
                            case 422:
                                return var1;
                            case 425:
                                var1 = global;
                                var2 = var1.Promise;
                                var1 = var2.resolve;
                                var1 = var1.bind(var2)();
                                return var1;
                            case 446:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.sendMessage = var7;
    var7 = function arg0() {
        _fun54164: for (var _fun54164_ip = 0;;) switch (_fun54164_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun54164_ip = 141;
                    continue _fun54164
                }
            case 12:
                var0 = {};
                var3 = {};
                var5 = var2.channel;
                var4 = var5.getGuildId;
                var5 = var4.bind(var5)();
                var6 = var1 != var5;
                var4 = undefined;
                if (!var6) {
                    _fun54164_ip = 43;
                    continue _fun54164
                }
            case 40:
                var4 = var5;
            case 43:
                var3.guild_id = var4;
                var4 = var2.channel;
                var4 = var4.id;
                var3.channel_id = var4;
                var4 = var2.message;
                var4 = var4.id;
                var3.message_id = var4;
                var0.messageReference = var3;
                var2 = var2.shouldMention;
                var1 = undefined;
                if (var2) {
                    _fun54164_ip = 134;
                    continue _fun54164
                }
            case 92:
                var2 = {};
                var3 = global;
                var5 = var3.Object;
                var4 = var5.values;
                var3 = _closure1_slot36;
                var3 = var4.bind(var5)(var3);
                var2.parse = var3;
                var3 = false;
                var2.replied_user = var3;
                var1 = var2;
            case 134:
                var0.allowedMentions = var1;
                _fun54164_ip = 143;
                continue _fun54164;
            case 141:
                var0 = {};
            case 143:
                return var0;
        }
    };
    var1.getSendMessageOptionsForReply = var7;
    var7 = function arg0() {
        _fun54165: for (var _fun54165_ip = 0;;) switch (_fun54165_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isGif;
                var1 = var1.stickers;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun54165_ip = 46;
                    continue _fun54165
                }
            case 23:
                var3 = var1.length;
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun54165_ip = 46;
                    continue _fun54165
                }
            case 34:
                if (var0) {
                    _fun54165_ip = 46;
                    continue _fun54165
                }
            case 37:
                var0 = {};
                var0.stickerIds = var1;
                _fun54165_ip = 48;
                continue _fun54165;
            case 46:
                var0 = {};
            case 48:
                return var0;
        }
    };
    var1.getSendMessageOptionsForStickers = var7;
    var7 = function arg0() {
        _fun54166: for (var _fun54166_ip = 0;;) switch (_fun54166_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.scheduledTimestamp;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun54166_ip = 24;
                    continue _fun54166
                }
            case 15:
                var0 = {};
                var0.scheduledTimestamp = var1;
                _fun54166_ip = 26;
                continue _fun54166;
            case 24:
                var0 = {};
            case 26:
                return var0;
        }
    };
    var1.getSendMessageOptionsForScheduledMessage = var7;
    var7 = function arg0() {
        var0 = {};
        var1 = arg0;
        var1 = var1.alsoForwardToChannelId;
        var0.alsoForwardToChannelId = var1;
        return var0;
    };
    var1.getSendMessageOptionsForAlsoForwardToChannel = var7;
    var7 = function arg0() {
        var4 = arg0;
        var0 = {};
        var5 = _closure1_slot54;
        var3 = var5.getSendMessageOptionsForReply;
        var2 = var4.pendingReply;
        var7 = var3.bind(var5)(var2);
        var8 = var0;
        var2 = copyDataProperties(var8, var7);
        var5 = _closure1_slot54;
        var3 = var5.getSendMessageOptionsForStickers;
        var2 = {};
        var8 = var2;
        var7 = var4;
        var6 = copyDataProperties(var8, var7);
        var7 = var3.bind(var5)(var2);
        var8 = var0;
        var2 = copyDataProperties(var8, var7);
        var5 = _closure1_slot54;
        var3 = var5.getSendMessageOptionsForScheduledMessage;
        var2 = {};
        var8 = var2;
        var7 = var4;
        var6 = copyDataProperties(var8, var7);
        var7 = var3.bind(var5)(var2);
        var8 = var0;
        var2 = copyDataProperties(var8, var7);
        var3 = _closure1_slot54;
        var2 = var3.getSendMessageOptionsForAlsoForwardToChannel;
        var1 = {};
        var8 = var1;
        var7 = var4;
        var4 = copyDataProperties(var8, var7);
        var7 = var2.bind(var3)(var1);
        var8 = var0;
        var1 = copyDataProperties(var8, var7);
        return var0;
    };
    var1.getSendMessageOptions = var7;
    var7 = function arg0, arg1, arg2, arg3, arg4() {
        _fun54169: for (var _fun54169_ip = 0;;) switch (_fun54169_ip) {
            case 0:
                var6 = arg4;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 64;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = arg1;
                var5 = var2.bind(var3)(var0);
                var2 = null;
                var0 = var5;
                if (!(var2 != var6)) {
                    _fun54169_ip = 73;
                    continue _fun54169
                }
            case 45:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '\n';
                var0 = var4.bind(var3)(var6, var2, var5);
            case 73:
                var4 = _closure1_slot54;
                var3 = var4._sendMessage;
                var2 = {};
                var2.content = var0;
                var0 = false;
                var2.tts = var0;
                var0 = new Array(0);
                var2.validNonShortcutEmojis = var0;
                var0 = new Array(0);
                var2.invalidEmojis = var0;
                var1 = {};
                var0 = arg2;
                var1.location = var0;
                var0 = arg3;
                var1.inviteAnalyticsMetadata = var0;
                var0 = arg0;
                var0 = var3.bind(var4)(var0, var2, var1);
                return var0;
        }
    };
    var1.sendInvite = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        var4 = _closure1_slot54;
        var3 = var4._sendMessage;
        var2 = {};
        var0 = arg1;
        var2.content = var0;
        var0 = false;
        var2.tts = var0;
        var0 = new Array(0);
        var2.validNonShortcutEmojis = var0;
        var0 = new Array(0);
        var2.invalidEmojis = var0;
        var1 = {};
        var0 = arg2;
        var1.location = var0;
        var0 = arg3;
        var1.inviteAnalyticsMetadata = var0;
        var0 = arg0;
        var0 = var3.bind(var4)(var0, var2, var1);
        return var0;
    };
    var1.sendActivityBookmark = var7;
    var7 = function arg0, arg1() {
        _fun54171: for (var _fun54171_ip = 0;;) switch (_fun54171_ip) {
            case 0:
                var1 = arguments[2];
                var0 = arguments[4];
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun54171_ip = 16;
                    continue _fun54171
                }
            case 12:
                var1 = '';
            case 16:
                if (!(var0 === var2)) {
                    _fun54171_ip = 22;
                    continue _fun54171
                }
            case 20:
                var0 = false;
            case 22:
                var4 = _closure1_slot54;
                var3 = var4._sendMessage;
                var2 = {};
                var2.content = var1;
                var1 = new Array(0);
                var2.invalidEmojis = var1;
                var1 = new Array(0);
                var2.validNonShortcutEmojis = var1;
                var2.tts = var0;
                var1 = {};
                var7 = arguments[3];
                var8 = var1;
                var0 = copyDataProperties(var8, var7);
                var5 = arg1;
                var0 = 'stickerIds';
                var1[var0] = var5;
                var0 = arg0;
                var0 = var3.bind(var4)(var0, var2, var1);
                return var0;
        }
    };
    var1.sendStickers = var7;
    var7 = function arg0, arg1() {
        _fun54172: for (var _fun54172_ip = 0;;) switch (_fun54172_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var1 = arguments[2];
                var _closure2_slot0 = var10;
                var _closure2_slot1 = var9;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun54172_ip = 27;
                    continue _fun54172
                }
            case 25:
                var1 = {};
            case 27:
                var6 = var1.messageReference;
                var7 = var1.allowedMentions;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 51;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var8 = _closure1_slot28;
                var4 = var8.MESSAGES_GREET;
                var4 = var4.bind(var8)(var10);
                var1.url = var4;
                var4 = {};
                var8 = new Array(1);
                var8[0] = var9;
                var4.sticker_ids = var8;
                var4.allowed_mentions = var7;
                var4.message_reference = var6;
                var1.body = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var4 = {};
                var5 = _closure1_slot47;
                var5 = var5.GREET;
                var4.location = var5;
                var1.context = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 65;
                    var4 = var5[var2];
                    var2 = undefined;
                    var9 = var3.bind(var2)(var4);
                    var7 = var9.donateSentMessage;
                    var4 = var0.body;
                    var6 = var4.content;
                    var8 = _closure2_slot0;
                    var6 = var7.bind(var9)(var6, var8);
                    var7 = _closure1_slot54;
                    var6 = var7.receiveMessage;
                    var1 = var0.body;
                    var1 = var6.bind(var7)(var8, var1);
                    var1 = 46;
                    var1 = var5[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'STICKER_TRACK_USAGE';
                    var1.type = var5;
                    var5 = _closure2_slot1;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.stickerIds = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    _fun54174: for (var _fun54174_ip = 0;;) switch (_fun54174_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot49;
                            var3 = var4.log;
                            var2 = 'Failed to send greeting';
                            var2 = var3.bind(var4)(var2);
                            var3 = var0.status;
                            var2 = 429;
                            if (!(var2 !== var3)) {
                                _fun54174_ip = 74;
                                continue _fun54174
                            }
                        case 41:
                            var5 = _closure1_slot54;
                            var4 = var5.sendClydeError;
                            var3 = _closure2_slot0;
                            var2 = var0.body;
                            var2 = var2.code;
                            var2 = var4.bind(var5)(var3, var2);
                        case 74:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 46;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'MESSAGE_SEND_FAILED';
                            var1.type = var4;
                            var4 = var0.body;
                            var4 = var4.id;
                            var1.messageId = var4;
                            var4 = _closure2_slot0;
                            var1.channelId = var4;
                            var1 = var2.bind(var3)(var1);
                            throw var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.sendGreetMessage = var7;
    var7 = function arg0, arg1() {
        _fun54175: for (var _fun54175_ip = 0;;) switch (_fun54175_ip) {
            case 0:
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun54175_ip = 11;
                    continue _fun54175
                }
            case 9:
                var5 = {};
            case 11:
                var4 = _closure1_slot54;
                var3 = var4._sendMessage;
                var2 = {
                    'content': '',
                    'tts': false
                };
                var1 = new Array(0);
                var2.validNonShortcutEmojis = var1;
                var1 = new Array(0);
                var2.invalidEmojis = var1;
                var1 = {};
                var9 = var1;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var6 = arg1;
                var5 = 'poll';
                var1[var5] = var6;
                var0 = _closure1_slot47;
                var5 = var0.POLL_CREATION;
                var0 = 'location';
                var1[var0] = var5;
                var0 = arg0;
                var0 = var3.bind(var4)(var0, var2, var1);
                return var0;
        }
    };
    var1.sendPollMessage = var7;
    var7 = function arg0, arg1, arg2() {
        _fun54176: for (var _fun54176_ip = 0;;) switch (_fun54176_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.animated;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                if (!var0) {
                    _fun54176_ip = 131;
                    continue _fun54176
                }
            case 24:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 66;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.canUseAnimatedEmojis;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                if (var1) {
                    _fun54176_ip = 131;
                    continue _fun54176
                }
            case 66:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 44;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["V5/GgC"];
                var2 = var1.bind(var2)(var0);
                var1 = 'INVALID_ANIMATED_EMOJI_BODY';
                _fun54176_ip = 199;
                continue _fun54176;
            case 131:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 44;
                var3 = var7[var0];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var0 = var7[var0];
                var0 = var6.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0["Q87rI/"];
                var2 = var3.bind(var4)(var0);
                var1 = 'INVALID_EXTERNAL_EMOJI_BODY';
            case 199:
                var0 = {};
                var0.errorMessage = var2;
                var0.errorMessageName = var1;
                return var0;
        }
    };
    var1.validateMessage = var7;
    var7 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54180: for (var _fun54180_ip = 0;;) switch (_fun54180_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54180_ip = 2469;
                            continue _fun54180
                        }
                    case 12:
                        var10 = undefined;
                        var _closure4_slot0 = var10;
                        var _closure4_slot1 = var10;
                        var _closure4_slot2 = var10;
                        var _closure4_slot3 = var10;
                        var _closure4_slot4 = var10;
                        var _closure4_slot5 = var10;
                        var _closure4_slot6 = var10;
                        var _closure4_slot7 = var10;
                        var27 = undefined;
                        var9 = undefined;
                        var17 = undefined;
                        var _closure4_slot8 = var10;
                        var _closure4_slot9 = var10;
                        var28 = undefined;
                        var _closure4_slot10 = var10;
                        var _closure4_slot11 = var10;
                        var25 = undefined;
                        var _closure4_slot12 = var10;
                        var13 = undefined;
                        var _closure4_slot13 = var10;
                        var22 = undefined;
                        var15 = undefined;
                        var18 = undefined;
                        var19 = undefined;
                        var20 = undefined;
                        var11 = undefined;
                        var14 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var4 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var3 = 62;
                        var3 = var12[var3];
                        var4 = var4.bind(var10)(var3);
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var10)(var3);
                        var12 = null;
                        if (!(var12 == var3)) {
                            _fun54180_ip = 2430;
                            continue _fun54180
                        }
                    case 148:
                        var4 = _closure2_slot1;
                        var35 = var4.content;
                        _closure4_slot0 = var35;
                        var43 = var4.invalidEmojis;
                        var16 = var4.validNonShortcutEmojis;
                        _closure4_slot1 = var16;
                        var4 = var4.tts;
                        var40 = var10 !== var4;
                        if (!var40) {
                            _fun54180_ip = 193;
                            continue _fun54180
                        }
                    case 190:
                        var40 = var4;
                    case 193:
                        var16 = _closure2_slot2;
                        var29 = var16.activityAction;
                        var36 = var16.location;
                        _closure4_slot2 = var36;
                        var4 = var16.inviteAnalyticsMetadata;
                        _closure4_slot3 = var4;
                        var30 = var16.stickerIds;
                        _closure4_slot4 = var30;
                        var39 = var16.messageReference;
                        _closure4_slot5 = var39;
                        var38 = var16.allowedMentions;
                        var32 = var16.poll;
                        _closure4_slot6 = var32;
                        var31 = var16.sharedCustomTheme;
                        var24 = var16.contentInventoryEntry;
                        _closure4_slot7 = var24;
                        var23 = var16.attachments;
                        var27 = var16.attachmentsToUpload;
                        var9 = var16.onAttachmentUploadError;
                        var33 = var16.announcementSendOptions;
                        var4 = var16.withCheckpoint;
                        var16 = var16.flags;
                        var34 = var12 != var16;
                        var21 = 0;
                        var44 = 0;
                        if (!var34) {
                            _fun54180_ip = 327;
                            continue _fun54180
                        }
                    case 324:
                        var44 = var16;
                    case 327:
                        var34 = _closure1_slot1;
                        var37 = _closure1_slot2;
                        var16 = 67;
                        var16 = var37[var16];
                        var16 = var34.bind(var10)(var16);
                        var37 = var16.bind(var10)(var35);
                        var34 = _closure1_slot3;
                        var16 = 2;
                        var37 = var34.bind(var10)(var37, var16);
                        var16 = var37[var21];
                        var34 = 1;
                        var34 = var37[var34];
                        var41 = var35;
                        var37 = var44;
                        if (!var16) {
                            _fun54180_ip = 434;
                            continue _fun54180
                        }
                    case 385:
                        _closure4_slot0 = var34;
                        var35 = _closure1_slot0;
                        var42 = _closure1_slot2;
                        var16 = 68;
                        var16 = var42[var16];
                        var42 = var35.bind(var10)(var16);
                        var35 = var42.addFlag;
                        var16 = _closure1_slot33;
                        var16 = var16.SUPPRESS_NOTIFICATIONS;
                        var37 = var35.bind(var42)(var44, var16);
                        var41 = var34;
                    case 434:
                        var35 = false;
                        var17 = false;
                        var16 = _closure2_slot2;
                        var16 = var16.messageReference;
                        var42 = var12 == var16;
                        var34 = undefined;
                        if (var42) {
                            _fun54180_ip = 462;
                            continue _fun54180
                        }
                    case 457:
                        var34 = var16.type;
                    case 462:
                        var16 = _closure1_slot39;
                        var16 = var16.FORWARD;
                        var34 = var34 === var16;
                        _closure4_slot8 = var34;
                        var16 = '';
                        if (!(var16 === var41)) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 488:
                        if (!(var12 == var29)) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 492:
                        if (!(var12 == var30)) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 496:
                        if (!(var12 == var32)) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 500:
                        if (!(var12 == var31)) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 504:
                        if (!(var12 == var24)) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 508:
                        if (var34) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 511:
                        if (!(var12 != var23)) {
                            _fun54180_ip = 524;
                            continue _fun54180
                        }
                    case 515:
                        var34 = var23.length;
                        if (!(var21 === var34)) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 524:
                        if (var4) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 527:
                        var34 = _closure2_slot1;
                        var34 = var34.components;
                        if (!(var12 != var34)) {
                            _fun54180_ip = 560;
                            continue _fun54180
                        }
                    case 541:
                        var34 = _closure2_slot1;
                        var34 = var34.components;
                        var34 = var34.length;
                        if (!(var21 === var34)) {
                            _fun54180_ip = 602;
                            continue _fun54180
                        }
                    case 560:
                        var34 = var27;
                        if (!(var12 != var34)) {
                            _fun54180_ip = 579;
                            continue _fun54180
                        }
                    case 567:
                        var34 = var27;
                        var34 = var34.length;
                        if (!(!(var34 > var21))) {
                            _fun54180_ip = 600;
                            continue _fun54180
                        }
                    case 579:
                        var34 = global;
                        var42 = var34.Promise;
                        var34 = var42.resolve;
                        var34 = var34.bind(var42)();
                        return var34;
                    case 600:
                        var17 = true;
                    case 602:
                        if (!(var12 == var39)) {
                            _fun54180_ip = 618;
                            continue _fun54180
                        }
                    case 606:
                        var34 = _closure1_slot35;
                        var44 = var34.DEFAULT;
                        _fun54180_ip = 628;
                        continue _fun54180;
                    case 618:
                        var34 = _closure1_slot35;
                        var44 = var34.REPLY;
                    case 628:
                        _closure4_slot9 = var44;
                        var34 = _closure2_slot2;
                        var34 = var34.nonce;
                        if (!(var12 == var34)) {
                            _fun54180_ip = 676;
                            continue _fun54180
                        }
                    case 646:
                        var45 = _closure1_slot0;
                        var46 = _closure1_slot2;
                        var42 = 49;
                        var42 = var46[var42];
                        var45 = var45.bind(var10)(var42);
                        var42 = var45.createNonce;
                        var34 = var42.bind(var45)();
                    case 676:
                        var28 = var34;
                        _closure4_slot10 = var34;
                        _closure4_slot11 = var34;
                        var42 = _closure1_slot1;
                        var45 = _closure1_slot2;
                        var34 = 47;
                        var34 = var45[var34];
                        var42 = var42.bind(var10)(var34);
                        var34 = {};
                        var45 = _closure2_slot0;
                        var34.channelId = var45;
                        var34.content = var41;
                        var34.tts = var40;
                        var34.type = var44;
                        var34.messageReference = var39;
                        var34.allowedMentions = var38;
                        var44 = undefined;
                        if (!(var21 !== var37)) {
                            _fun54180_ip = 749;
                            continue _fun54180
                        }
                    case 746:
                        var44 = var37;
                    case 749:
                        var34.flags = var44;
                        var44 = var28;
                        var34.nonce = var44;
                        var45 = _closure1_slot0;
                        var46 = _closure1_slot2;
                        var44 = 69;
                        var44 = var46[var44];
                        var45 = var45.bind(var10)(var44);
                        var44 = var45.createPollServerDataFromCreateRequest;
                        var44 = var44.bind(var45)(var32);
                        var34.poll = var44;
                        var34.sharedCustomTheme = var31;
                        var25 = var42.bind(var10)(var34);
                        var34 = _closure2_slot2;
                        var34 = var34.eagerDispatch;
                        if (!(var35 !== var34)) {
                            _fun54180_ip = 938;
                            continue _fun54180
                        }
                    case 821:
                        var35 = _closure1_slot0;
                        var42 = _closure1_slot2;
                        var34 = 70;
                        var34 = var42[var34];
                        var44 = var35.bind(var10)(var34);
                        var42 = var44.updateComboOnMessageSend;
                        var35 = _closure2_slot0;
                        var34 = var25;
                        var34 = var34.id;
                        var34 = var42.bind(var44)(var35, var34);
                        if (!(var12 != var30)) {
                            _fun54180_ip = 908;
                            continue _fun54180
                        }
                    case 869:
                        var35 = var25;
                        var42 = var30.map;
                        var34 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot15;
                            var1 = var2.getStickerById;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var44 = var42.bind(var30)(var34);
                        var42 = var44.filter;
                        var34 = function(arg0) { // Environment: var1
                            var1 = null;
                            var0 = arg0;
                            var0 = var1 != var0;
                            return var0;
                        };
                        var34 = var42.bind(var44)(var34);
                        var35.sticker_items = var34;
                    case 908:
                        var46 = _closure1_slot54;
                        var45 = var46.receiveMessage;
                        var50 = _closure2_slot0;
                        var49 = var25;
                        var47 = _closure2_slot2;
                        var48 = true;
                        var51 = var46;
                        var34 = var51[var45](var50, var49, var48, var47, var46);
                    case 938:
                        var34 = _closure1_slot51;
                        if (var34) {
                            _fun54180_ip = 1027;
                            continue _fun54180
                        }
                    case 945:
                        if (!(var12 != var43)) {
                            _fun54180_ip = 1027;
                            continue _fun54180
                        }
                    case 949:
                        var34 = var43.length;
                        if (!(var34 > var21)) {
                            _fun54180_ip = 1027;
                            continue _fun54180
                        }
                    case 958:
                        var34 = true;
                        _closure1_slot51 = var34;
                        var35 = _closure1_slot25;
                        var34 = var35.getCurrentUser;
                        var42 = var34.bind(var35)();
                        var35 = _closure1_slot54;
                        var34 = var35.validateMessage;
                        var44 = _closure2_slot0;
                        var34 = var34.bind(var35)(var43, var42, var44);
                        var43 = var34.errorMessage;
                        var42 = var34.errorMessageName;
                        var35 = _closure1_slot54;
                        var34 = var35.sendBotMessage;
                        var34 = var34.bind(var35)(var44, var43, var42);
                    case 1027:
                        var34 = {};
                        if (!(var12 == var33)) {
                            _fun54180_ip = 1067;
                            continue _fun54180
                        }
                    case 1033:
                        var42 = _closure1_slot0;
                        var43 = _closure1_slot2;
                        var35 = 71;
                        var35 = var43[var35];
                        var35 = var42.bind(var10)(var35);
                        var35 = var35.MessageDataType;
                        var35 = var35.SEND;
                        _fun54180_ip = 1099;
                        continue _fun54180;
                    case 1067:
                        var43 = _closure1_slot0;
                        var44 = _closure1_slot2;
                        var42 = 71;
                        var42 = var44[var42];
                        var42 = var43.bind(var10)(var42);
                        var42 = var42.MessageDataType;
                        var35 = var42.SEND_ANNOUNCEMENT;
                    case 1099:
                        var34.type = var35;
                        var35 = {};
                        var42 = _closure2_slot0;
                        var35.channelId = var42;
                        var35.content = var41;
                        var41 = var28;
                        var35.nonce = var41;
                        var35.tts = var40;
                        var35.message_reference = var39;
                        var35.allowed_mentions = var38;
                        var35.flags = var37;
                        var35.analyticsLocation = var36;
                        var34.message = var35;
                        var13 = var34;
                        _closure4_slot13 = var34;
                        var34 = _closure2_slot1;
                        var34 = var34.components;
                        if (!(var12 != var34)) {
                            _fun54180_ip = 1198;
                            continue _fun54180
                        }
                    case 1174:
                        var34 = var13;
                        var35 = var34.message;
                        var34 = _closure2_slot1;
                        var34 = var34.components;
                        var35.components = var34;
                    case 1198:
                        if (!(var12 != var33)) {
                            _fun54180_ip = 1268;
                            continue _fun54180
                        }
                    case 1202:
                        var34 = var13;
                        var36 = var34.message;
                        var35 = var33.createThread;
                        var36.create_thread = var35;
                        var36 = var34.message;
                        var35 = var33.threadName;
                        var36.title = var35;
                        var34 = var34.message;
                        var35 = var33.publish;
                        var33 = var12 != var35;
                        if (!var33) {
                            _fun54180_ip = 1262;
                            continue _fun54180
                        }
                    case 1259:
                        var33 = var35;
                    case 1262:
                        var34.publish = var33;
                    case 1268:
                        if (!(var12 != var29)) {
                            _fun54180_ip = 1477;
                            continue _fun54180
                        }
                    case 1275:
                        var34 = var12 == var29;
                        var33 = undefined;
                        if (var34) {
                            _fun54180_ip = 1296;
                            continue _fun54180
                        }
                    case 1284:
                        var34 = var29.activity;
                        var33 = var34.session_id;
                    case 1296:
                        var36 = var29.type;
                        var34 = _closure1_slot43;
                        var35 = var34.JOIN_REQUEST;
                        var34 = var33;
                        if (!(var36 !== var35)) {
                            _fun54180_ip = 1361;
                            continue _fun54180
                        }
                    case 1318:
                        var36 = var29.type;
                        var35 = _closure1_slot43;
                        var35 = var35.STREAM_REQUEST;
                        var34 = var33;
                        if (!(var36 !== var35)) {
                            _fun54180_ip = 1361;
                            continue _fun54180
                        }
                    case 1340:
                        var34 = var33;
                        if (!(var12 == var34)) {
                            _fun54180_ip = 1361;
                            continue _fun54180
                        }
                    case 1347:
                        var35 = _closure1_slot17;
                        var33 = var35.getSessionId;
                        var34 = var33.bind(var35)();
                    case 1361:
                        if (!(var12 != var34)) {
                            _fun54180_ip = 1477;
                            continue _fun54180
                        }
                    case 1365:
                        var33 = {};
                        var35 = var29.type;
                        var33.type = var35;
                        var33.session_id = var34;
                        var34 = var29.targetUserId;
                        var33.target_user_id = var34;
                        var34 = var29.activity;
                        var29 = var34.party;
                        var29 = var12 != var29;
                        if (!var29) {
                            _fun54180_ip = 1426;
                            continue _fun54180
                        }
                    case 1411:
                        var35 = var34.party;
                        var35 = var35.id;
                        var29 = var12 != var35;
                    case 1426:
                        if (!var29) {
                            _fun54180_ip = 1446;
                            continue _fun54180
                        }
                    case 1429:
                        var29 = var34.party;
                        var29 = var29.id;
                        var33.party_id = var29;
                    case 1446:
                        var29 = var13;
                        var35 = var29.message;
                        var34 = var34.application_id;
                        var35.application_id = var34;
                        var29 = var29.message;
                        var29.activity = var33;
                    case 1477:
                        if (!(var12 != var32)) {
                            _fun54180_ip = 1495;
                            continue _fun54180
                        }
                    case 1481:
                        var29 = var13;
                        var29 = var29.message;
                        var29.poll = var32;
                    case 1495:
                        if (!(var12 != var31)) {
                            _fun54180_ip = 1513;
                            continue _fun54180
                        }
                    case 1499:
                        var29 = var13;
                        var29 = var29.message;
                        var29.shared_client_theme = var31;
                    case 1513:
                        if (!(var12 != var30)) {
                            _fun54180_ip = 1531;
                            continue _fun54180
                        }
                    case 1517:
                        var29 = var13;
                        var29 = var29.message;
                        var29.sticker_ids = var30;
                    case 1531:
                        var30 = _closure1_slot11;
                        var29 = var30.isEnabled;
                        var29 = var29.bind(var30)();
                        if (!var29) {
                            _fun54180_ip = 1566;
                            continue _fun54180
                        }
                    case 1548:
                        var29 = var13;
                        var30 = var29.message;
                        var29 = true;
                        var30.has_poggermode_enabled = var29;
                    case 1566:
                        if (!var4) {
                            _fun54180_ip = 1587;
                            continue _fun54180
                        }
                    case 1569:
                        var4 = var13;
                        var29 = var4.message;
                        var4 = true;
                        var29.with_checkpoint = var4;
                    case 1587:
                        if (!(var12 != var24)) {
                            _fun54180_ip = 1605;
                            continue _fun54180
                        }
                    case 1591:
                        var4 = var13;
                        var4 = var4.message;
                        var4.content_inventory_entry = var24;
                    case 1605:
                        var4 = var12 != var23;
                        if (!var4) {
                            _fun54180_ip = 1621;
                            continue _fun54180
                        }
                    case 1612:
                        var24 = var23.length;
                        var4 = var24 > var21;
                    case 1621:
                        if (!var4) {
                            _fun54180_ip = 1638;
                            continue _fun54180
                        }
                    case 1624:
                        var4 = var13;
                        var4 = var4.message;
                        var4.attachments = var23;
                    case 1638:
                        var4 = var27;
                        if (!(var12 != var4)) {
                            _fun54180_ip = 2244;
                            continue _fun54180
                        }
                    case 1648:
                        var4 = var27;
                        var4 = var4.length;
                        if (!(var4 > var21)) {
                            _fun54180_ip = 2244;
                            continue _fun54180
                        }
                    case 1663: // try_start_0
                        var23 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var4 = 72;
                        var4 = var24[var4];
                        var24 = var23.bind(var10)(var4);
                        var23 = var24.uploadMessageAttachments;
                        var4 = {};
                        var29 = _closure2_slot0;
                        var4.channelId = var29;
                        var4.nonce = var28;
                        var4.items = var27;
                        var4.message = var25;
                        var26 = _closure2_slot2;
                        var26 = var26.doNotNotifyOnError;
                        var26 = !var26;
                        var25 = var26;
                        if (!var26) {
                            _fun54180_ip = 1733;
                            continue _fun54180
                        }
                    case 1731:
                        var25 = undefined;
                    case 1733:
                        var4.shouldUploadFailureSendNotification = var25;
                        var4 = var23.bind(var24)(var4);
                        SaveGenerator(address = 1747);
                    case 1745:
                        return var4;
                    case 1747:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 23);
                        if (var23) {
                            _fun54180_ip = 2286;
                            continue _fun54180
                        }
                    case 1756:
                        var22 = var4;
                        if (!(var12 != var4)) {
                            _fun54180_ip = 2283;
                            continue _fun54180
                        }
                    case 1766:
                        var15 = var22.attachments;
                        var22 = var22.uploader;
                        _closure4_slot12 = var22;
                        if (!var17) {
                            _fun54180_ip = 1810;
                            continue _fun54180
                        }
                    case 1785:
                        var17 = var15;
                        if (!(var12 != var17)) {
                            _fun54180_ip = 2280;
                            continue _fun54180
                        }
                    case 1795:
                        var17 = var15;
                        var17 = var17.length;
                        if (!(var21 !== var17)) {
                            _fun54180_ip = 2280;
                            continue _fun54180
                        }
                    case 1810:
                        var17 = var15;
                        if (!(var12 != var17)) {
                            _fun54180_ip = 2244;
                            continue _fun54180
                        }
                    case 1820:
                        var17 = var13;
                        var21 = var17.message;
                        var23 = var15;
                        var22 = var23.map;
                        var17 = function(arg0, arg1) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 73;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getAttachmentPayload;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var17 = var22.bind(var23)(var17);
                        var21.attachments = var17;
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var17 = 74;
                        var17 = var22[var17];
                        var21 = var21.bind(var10)(var17);
                        var17 = var21.areAdvancedSignalsEnabled;
                        var17 = var17.bind(var21)();
                        if (!var17) {
                            _fun54180_ip = 2244;
                            continue _fun54180
                        }
                    case 1888:
                        var17 = _closure1_slot55;
                        var15 = var17.bind(var10)(var15);
                        var19 = var15;
                        var15 = var15.bind(var10)();
                        var18 = var15;
                        var15 = var15.done;
                        var17 = 75;
                        if (var15) {
                            _fun54180_ip = 2244;
                            continue _fun54180
                        }
                    case 1921:
                        var15 = var18;
                        var15 = var15.value;
                        var11 = var15;
                        var15 = var15.item;
                        var20 = var15;
                        var15 = var12 == var15;
                        var21 = undefined;
                        if (var15) {
                            _fun54180_ip = 2020;
                            continue _fun54180
                        }
                    case 1949:
                        var15 = var20;
                        var15 = var15.clip;
                        var20 = var15;
                        var15 = var12 == var15;
                        var21 = undefined;
                        if (var15) {
                            _fun54180_ip = 2020;
                            continue _fun54180
                        }
                    case 1970:
                        var15 = var20;
                        var15 = var15.decision;
                        var20 = var15;
                        var15 = var12 == var15;
                        var21 = undefined;
                        if (var15) {
                            _fun54180_ip = 2020;
                            continue _fun54180
                        }
                    case 1991:
                        var15 = var20;
                        var15 = var15.signal;
                        var20 = var15;
                        var15 = var12 == var15;
                        var21 = undefined;
                        if (var15) {
                            _fun54180_ip = 2020;
                            continue _fun54180
                        }
                    case 2012:
                        var15 = var20;
                        var21 = var15.type;
                    case 2020:
                        var22 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var15 = var15[var17];
                        var15 = var22.bind(var10)(var15);
                        var15 = var15.ClipSignalTypes;
                        var15 = var15.DISTRIBUTED;
                        if (!(var21 !== var15)) {
                            _fun54180_ip = 2079;
                            continue _fun54180
                        }
                    case 2053:
                        var15 = var19;
                        var15 = var15.bind(var10)();
                        var18 = var15;
                        var15 = var15.done;
                        if (var15) {
                            _fun54180_ip = 2244;
                            continue _fun54180
                        }
                    case 2074:
                        _fun54180_ip = 1921;
                        continue _fun54180;
                    case 2079:
                        var17 = {};
                        var15 = var11.item;
                        var15 = var15.clip;
                        var15 = var15.id;
                        var17.id = var15;
                        var11 = var11.item;
                        var11 = var11.clip;
                        var11 = var11.decision;
                        var14 = var11;
                        var15 = var12 == var11;
                        var11 = undefined;
                        if (var15) {
                            _fun54180_ip = 2157;
                            continue _fun54180
                        }
                    case 2130:
                        var15 = var14;
                        var15 = var15.signal;
                        var14 = var15;
                        var15 = var12 == var15;
                        var11 = undefined;
                        if (var15) {
                            _fun54180_ip = 2157;
                            continue _fun54180
                        }
                    case 2151:
                        var11 = var14.remoteTriggerClipId;
                    case 2157:
                        var17.remoteTriggerClipId = var11;
                        var11 = global;
                        var15 = var11.JSON;
                        var14 = var15.stringify;
                        var17 = var14.bind(var15)(var17);
                        var14 = var11.HermesInternal;
                        var15 = var14.concat;
                        var14 = '__CLIP_METADATA__';
                        var15 = var15.bind(var14)(var17);
                        var14 = var13;
                        var13 = var14.message;
                        var14 = var14.message;
                        var14 = var14.content;
                        var11 = var11.HermesInternal;
                        var11 = var11.concat;
                        var11 = var11.bind(var16)(var14, var15);
                        var13.content = var11;
                    case 2244: // try_end0
                        var11 = global;
                        var14 = var11.Promise;
                        var11 = var14.prototype;
                        var13 = Object.create(var11, {
                            constructor: {
                                value: var14
                            }
                        });
                        var50 = function(arg0, arg1) { // Environment: var1
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var6 = global;
                            var2 = var6.Date;
                            var0 = var2.now;
                            var0 = var0.bind(var2)();
                            var _closure5_slot2 = var0;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 71;
                            var5 = var4[var2];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var5);
                            var5 = var5.length;
                            var _closure5_slot3 = var5;
                            var9 = var6.Math;
                            var8 = var9.floor;
                            var10 = var6.Math;
                            var5 = var10.random;
                            var10 = var5.bind(var10)();
                            var5 = 10000;
                            var5 = var5 * var10;
                            var5 = var8.bind(var9)(var5);
                            var _closure5_slot4 = var5;
                            var8 = _closure1_slot50;
                            var7 = var8.info;
                            var6 = var6.HermesInternal;
                            var9 = var6.concat;
                            var6 = 'Queueing message to be sent LogId:';
                            var6 = var9.bind(var6)(var5);
                            var6 = var7.bind(var8)(var6);
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.enqueue;
                            var2 = _closure4_slot13;
                            var1 = function(arg0) { // Environment: var1
                                _fun54186: for (var _fun54186_ip = 0;;) switch (_fun54186_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var _closure6_slot0 = var2;
                                        var0 = global;
                                        var1 = var0.Date;
                                        var0 = var1.now;
                                        var3 = var0.bind(var1)();
                                        var1 = _closure5_slot2;
                                        var13 = var3 - var1;
                                        var1 = var2.ok;
                                        if (var1) {
                                            _fun54186_ip = 1214;
                                            continue _fun54186
                                        }
                                    case 52:
                                        var8 = _closure1_slot49;
                                        var7 = var8.log;
                                        var5 = {};
                                        var1 = var2.hasErr;
                                        var5.hasErr = var1;
                                        var1 = var2.status;
                                        var5.status = var1;
                                        var9 = var2.body;
                                        var6 = null;
                                        var11 = var6 == var9;
                                        var4 = undefined;
                                        var1 = undefined;
                                        if (var11) {
                                            _fun54186_ip = 106;
                                            continue _fun54186
                                        }
                                    case 101:
                                        var1 = var9.code;
                                    case 106:
                                        var5.code = var1;
                                        var1 = var2.err;
                                        var5.error = var1;
                                        var1 = 'Failed to send message';
                                        var1 = var7.bind(var8)(var1, var5);
                                        var1 = var2.hasErr;
                                        if (var1) {
                                            _fun54186_ip = 723;
                                            continue _fun54186
                                        }
                                    case 144:
                                        var5 = var2.status;
                                        var1 = 400;
                                        var7 = var5 >= var1;
                                        var9 = undefined;
                                        var1 = false;
                                        if (!var7) {
                                            _fun54186_ip = 752;
                                            continue _fun54186
                                        }
                                    case 169:
                                        var8 = var2.status;
                                        var7 = 500;
                                        var7 = var8 < var7;
                                        var9 = undefined;
                                        var1 = false;
                                        if (!var7) {
                                            _fun54186_ip = 752;
                                            continue _fun54186
                                        }
                                    case 194:
                                        var7 = var2.body;
                                        var9 = undefined;
                                        var1 = false;
                                        if (!var7) {
                                            _fun54186_ip = 752;
                                            continue _fun54186
                                        }
                                    case 209:
                                        var7 = var2.body;
                                        var8 = var7.code;
                                        var7 = _closure1_slot26;
                                        var7 = var7.SLOWMODE_RATE_LIMITED;
                                        if (!(var8 !== var7)) {
                                            _fun54186_ip = 582;
                                            continue _fun54186
                                        }
                                    case 236:
                                        var8 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var7 = 80;
                                        var7 = var11[var7];
                                        var7 = var8.bind(var4)(var7);
                                        var11 = var7.AUTOMOD_ERROR_CODES;
                                        var8 = var11.has;
                                        var7 = var2.body;
                                        var7 = var7.code;
                                        var7 = var8.bind(var11)(var7);
                                        if (var7) {
                                            _fun54186_ip = 486;
                                            continue _fun54186
                                        }
                                    case 288:
                                        var7 = var2.body;
                                        var8 = var7.code;
                                        var7 = _closure1_slot26;
                                        var7 = var7.POGGERMODE_TEMPORARILY_DISABLED;
                                        if (!(var8 !== var7)) {
                                            _fun54186_ip = 437;
                                            continue _fun54186
                                        }
                                    case 315:
                                        var7 = var2.body;
                                        var8 = var7.code;
                                        var7 = _closure1_slot26;
                                        var7 = var7.EXPLICIT_CONTENT;
                                        if (!(var8 !== var7)) {
                                            _fun54186_ip = 420;
                                            continue _fun54186
                                        }
                                    case 339:
                                        var7 = _closure4_slot6;
                                        var7 = var6 != var7;
                                        if (var7) {
                                            _fun54186_ip = 357;
                                            continue _fun54186
                                        }
                                    case 353:
                                        var7 = _closure4_slot8;
                                    case 357:
                                        if (var7) {
                                            _fun54186_ip = 368;
                                            continue _fun54186
                                        }
                                    case 360:
                                        var8 = _closure4_slot7;
                                        var7 = var6 != var8;
                                    case 368:
                                        var9 = undefined;
                                        var1 = false;
                                        if (var7) {
                                            _fun54186_ip = 752;
                                            continue _fun54186
                                        }
                                    case 378:
                                        var12 = _closure1_slot54;
                                        var11 = var12.sendClydeError;
                                        var8 = _closure2_slot0;
                                        var7 = var2.body;
                                        var7 = var7.code;
                                        var7 = var11.bind(var12)(var8, var7);
                                        var9 = undefined;
                                        var1 = false;
                                        _fun54186_ip = 752;
                                        continue _fun54186;
                                    case 420:
                                        var7 = _closure1_slot46;
                                        var9 = var7.EXPLICIT_CONTENT;
                                        var1 = false;
                                        _fun54186_ip = 752;
                                        continue _fun54186;
                                    case 437:
                                        var8 = _closure1_slot1;
                                        var11 = _closure1_slot2;
                                        var7 = 46;
                                        var7 = var11[var7];
                                        var11 = var8.bind(var4)(var7);
                                        var8 = var11.dispatch;
                                        var7 = {};
                                        var12 = 'POGGERMODE_TEMPORARILY_DISABLED';
                                        var7.type = var12;
                                        var7 = var8.bind(var11)(var7);
                                        var9 = undefined;
                                        var1 = false;
                                        _fun54186_ip = 752;
                                        continue _fun54186;
                                    case 486:
                                        var8 = _closure1_slot1;
                                        var11 = _closure1_slot2;
                                        var7 = 46;
                                        var7 = var11[var7];
                                        var11 = var8.bind(var4)(var7);
                                        var8 = var11.dispatch;
                                        var7 = {};
                                        var12 = 'MESSAGE_SEND_FAILED_AUTOMOD';
                                        var7.type = var12;
                                        var12 = _closure4_slot13;
                                        var7.messageData = var12;
                                        var12 = {};
                                        var14 = var2.body;
                                        var14 = var14.code;
                                        var12.code = var14;
                                        var14 = var2.body;
                                        var14 = var14.message;
                                        var12.message = var14;
                                        var7.errorResponseBody = var12;
                                        var7 = var8.bind(var11)(var7);
                                        var9 = undefined;
                                        var1 = false;
                                        _fun54186_ip = 752;
                                        continue _fun54186;
                                    case 582:
                                        var7 = var2.body;
                                        var14 = var7.retry_after;
                                        var7 = var6 != var14;
                                        if (!var7) {
                                            _fun54186_ip = 606;
                                            continue _fun54186
                                        }
                                    case 600:
                                        var8 = 0;
                                        var7 = var14 > var8;
                                    case 606:
                                        var9 = undefined;
                                        var1 = false;
                                        if (!var7) {
                                            _fun54186_ip = 752;
                                            continue _fun54186
                                        }
                                    case 616:
                                        var15 = _closure1_slot1;
                                        var16 = _closure1_slot2;
                                        var7 = 46;
                                        var7 = var16[var7];
                                        var11 = var15.bind(var4)(var7);
                                        var8 = var11.dispatch;
                                        var7 = {};
                                        var12 = 'SLOWMODE_SET_COOLDOWN';
                                        var7.type = var12;
                                        var12 = _closure2_slot0;
                                        var7.channelId = var12;
                                        var12 = _closure1_slot24;
                                        var12 = var12.SendMessage;
                                        var7.slowmodeType = var12;
                                        var12 = 79;
                                        var12 = var16[var12];
                                        var12 = var15.bind(var4)(var12);
                                        var12 = var12.Millis;
                                        var12 = var12.SECOND;
                                        var12 = var14 * var12;
                                        var7.cooldownMs = var12;
                                        var7 = var8.bind(var11)(var7);
                                        var9 = undefined;
                                        var1 = false;
                                        _fun54186_ip = 752;
                                        continue _fun54186;
                                    case 723:
                                        var5 = var2.err;
                                        var7 = var5.code;
                                        var1 = false;
                                        var5 = 'ABORTED';
                                        var9 = undefined;
                                        if (!(var5 === var7)) {
                                            _fun54186_ip = 752;
                                            continue _fun54186
                                        }
                                    case 748:
                                        var1 = true;
                                        var9 = undefined;
                                    case 752:
                                        if (var1) {
                                            _fun54186_ip = 1167;
                                            continue _fun54186
                                        }
                                    case 758:
                                        var5 = _closure4_slot12;
                                        if (!(var6 != var5)) {
                                            _fun54186_ip = 855;
                                            continue _fun54186
                                        }
                                    case 769:
                                        var7 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var5 = 46;
                                        var5 = var8[var5];
                                        var8 = var7.bind(var4)(var5);
                                        var7 = var8.dispatch;
                                        var5 = {};
                                        var11 = 'UPLOAD_FAIL';
                                        var5.type = var11;
                                        var11 = _closure2_slot0;
                                        var5.channelId = var11;
                                        var11 = _closure4_slot12;
                                        var11 = var11._file;
                                        var5.file = var11;
                                        var11 = _closure4_slot11;
                                        var5.messageId = var11;
                                        var5.reason = var9;
                                        var11 = true;
                                        var5.noSendFailed = var11;
                                        var5 = var7.bind(var8)(var5);
                                    case 855:
                                        var5 = var2.hasErr;
                                        if (var5) {
                                            _fun54186_ip = 954;
                                            continue _fun54186
                                        }
                                    case 864:
                                        var5 = _closure1_slot46;
                                        var5 = var5.EXPLICIT_CONTENT;
                                        if (!(var9 === var5)) {
                                            _fun54186_ip = 954;
                                            continue _fun54186
                                        }
                                    case 878:
                                        var11 = _closure1_slot54;
                                        var8 = var11.sendExplicitMediaClydeError;
                                        var7 = _closure2_slot0;
                                        var5 = var2.body;
                                        var12 = var6 == var5;
                                        var6 = undefined;
                                        if (var12) {
                                            _fun54186_ip = 915;
                                            continue _fun54186
                                        }
                                    case 909:
                                        var6 = var5.attachments;
                                    case 915:
                                        var12 = _closure1_slot0;
                                        var14 = _closure1_slot2;
                                        var5 = 50;
                                        var5 = var14[var5];
                                        var5 = var12.bind(var4)(var5);
                                        var5 = var5.TrackMediaRedactionContext;
                                        var5 = var5.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED;
                                        var5 = var8.bind(var11)(var7, var6, var5);
                                    case 954:
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var5 = 46;
                                        var5 = var7[var5];
                                        var8 = var6.bind(var4)(var5);
                                        var6 = var8.dispatch;
                                        var5 = {};
                                        var11 = 'MESSAGE_SEND_FAILED';
                                        var5.type = var11;
                                        var1 = _closure4_slot11;
                                        var5.messageId = var1;
                                        var11 = _closure2_slot0;
                                        var5.channelId = var11;
                                        var11 = _closure2_slot2;
                                        var11 = var11.doNotNotifyOnError;
                                        var11 = !var11;
                                        var5.shouldNotify = var11;
                                        var5.reason = var9;
                                        var5 = var6.bind(var8)(var5);
                                        var6 = _closure1_slot0;
                                        var5 = 76;
                                        var5 = var7[var5];
                                        var7 = var6.bind(var4)(var5);
                                        var6 = var7.logMessageSendFailure;
                                        var5 = {};
                                        var9 = var2.hasErr;
                                        var8 = undefined;
                                        if (var9) {
                                            _fun54186_ip = 1076;
                                            continue _fun54186
                                        }
                                    case 1071:
                                        var8 = var2.status;
                                    case 1076:
                                        var5.failureCode = var8;
                                        var9 = var2.hasErr;
                                        var8 = undefined;
                                        if (!var9) {
                                            _fun54186_ip = 1103;
                                            continue _fun54186
                                        }
                                    case 1092:
                                        var9 = var2.err;
                                        var8 = var9.message;
                                    case 1103:
                                        var5.errorMessage = var8;
                                        var5 = var6.bind(var7)(var5);
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var5 = 71;
                                        var5 = var7[var5];
                                        var6 = var6.bind(var4)(var5);
                                        var5 = var6.cancelPendingSendRequests;
                                        var1 = _closure2_slot0;
                                        var6 = var5.bind(var6)(var1);
                                        var5 = var6.forEach;
                                        var1 = function(arg0) { // Environment: var10
                                            var4 = arg0;
                                            var5 = _closure1_slot49;
                                            var3 = var5.log;
                                            var2 = var4.nonce;
                                            var1 = 'Cancelling pending message';
                                            var1 = var3.bind(var5)(var1, var2);
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 46;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.dispatch;
                                            var1 = {};
                                            var5 = 'MESSAGE_SEND_FAILED';
                                            var1.type = var5;
                                            var5 = var4.nonce;
                                            var1.messageId = var5;
                                            var4 = var4.channelId;
                                            var1.channelId = var4;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var1 = var5.bind(var6)(var1);
                                        _fun54186_ip = 1200;
                                        continue _fun54186;
                                    case 1167:
                                        var8 = _closure1_slot54;
                                        var7 = var8.deleteMessage;
                                        var6 = _closure2_slot0;
                                        var5 = _closure4_slot11;
                                        var1 = true;
                                        var1 = var7.bind(var8)(var6, var5, var1);
                                    case 1200:
                                        var1 = _closure5_slot1;
                                        var1 = var1.bind(var4)(var2);
                                        _fun54186_ip = 2757;
                                        continue _fun54186;
                                    case 1214:
                                        var5 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var1 = 65;
                                        var4 = var4[var1];
                                        var1 = undefined;
                                        var8 = var5.bind(var1)(var4);
                                        var5 = var8.donateSentMessage;
                                        var4 = _closure4_slot0;
                                        var12 = _closure2_slot0;
                                        var4 = var5.bind(var8)(var4, var12);
                                        var11 = _closure1_slot54;
                                        var9 = var11.receiveMessage;
                                        var24 = var2.body;
                                        var5 = {};
                                        var4 = {};
                                        var4.duration = var13;
                                        var13 = _closure5_slot3;
                                        var4.queueSize = var13;
                                        var5.sendAnalytics = var4;
                                        var4 = _closure4_slot6;
                                        var5.poll = var4;
                                        var23 = true;
                                        var26 = var11;
                                        var25 = var12;
                                        var22 = var5;
                                        var4 = var26[var9](var25, var24, var23, var22, var21);
                                        var4 = _closure2_slot2;
                                        var4 = var4.alsoForwardToChannelId;
                                        var8 = null;
                                        if (!(var8 != var4)) {
                                            _fun54186_ip = 1444;
                                            continue _fun54186
                                        }
                                    case 1339:
                                        var5 = _closure1_slot1;
                                        var12 = _closure1_slot2;
                                        var4 = 77;
                                        var4 = var12[var4];
                                        var11 = var5.bind(var1)(var4);
                                        var9 = var11.sendForward;
                                        var5 = _closure1_slot0;
                                        var4 = 52;
                                        var4 = var12[var4];
                                        var12 = var5.bind(var1)(var4);
                                        var5 = var12.createMessageRecord;
                                        var4 = var2.body;
                                        var5 = var5.bind(var12)(var4);
                                        var4 = _closure2_slot2;
                                        var4 = var4.alsoForwardToChannelId;
                                        var9 = var9.bind(var11)(var5, var4);
                                        var5 = var9.then;
                                        var4 = function() { // Environment: var10
                                            _fun54187: for (var _fun54187_ip = 0;;) switch (_fun54187_ip) {
                                                case 0:
                                                    var1 = {};
                                                    var0 = _closure6_slot0;
                                                    var5 = var0.body;
                                                    var2 = null;
                                                    var6 = var2 == var5;
                                                    var0 = undefined;
                                                    var4 = undefined;
                                                    if (var6) {
                                                        _fun54187_ip = 32;
                                                        continue _fun54187
                                                    }
                                                case 27:
                                                    var4 = var5.id;
                                                case 32:
                                                    var1.referencedMessageId = var4;
                                                    var4 = _closure6_slot0;
                                                    var5 = var4.body;
                                                    var6 = var2 == var5;
                                                    var4 = undefined;
                                                    if (var6) {
                                                        _fun54187_ip = 60;
                                                        continue _fun54187
                                                    }
                                                case 55:
                                                    var4 = var5.guild_id;
                                                case 60:
                                                    var1.guildId = var4;
                                                    var3 = _closure6_slot0;
                                                    var3 = var3.body;
                                                    var4 = var2 == var3;
                                                    var2 = undefined;
                                                    if (var4) {
                                                        _fun54187_ip = 87;
                                                        continue _fun54187
                                                    }
                                                case 82:
                                                    var2 = var3.channel_id;
                                                case 87:
                                                    var1.channelId = var2;
                                                    var2 = _closure2_slot2;
                                                    var2 = var2.alsoForwardToChannelId;
                                                    var1.destinationChannelId = var2;
                                                    var8 = var1.referencedMessageId;
                                                    var7 = var1.guildId;
                                                    var6 = var1.channelId;
                                                    var5 = var1.destinationChannelId;
                                                    var3 = _closure1_slot1;
                                                    var4 = _closure1_slot2;
                                                    var2 = 43;
                                                    var2 = var4[var2];
                                                    var4 = var3.bind(var0)(var2);
                                                    var3 = var4.track;
                                                    var1 = _closure1_slot27;
                                                    var2 = var1.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT;
                                                    var1 = {};
                                                    var1.referenced_message_id = var8;
                                                    var1.guild_id = var7;
                                                    var1.channel_id = var6;
                                                    var1.destination_channel_id = var5;
                                                    var1 = var3.bind(var4)(var2, var1);
                                                    return var0;
                                            }
                                        };
                                        var9 = var5.bind(var9)(var4);
                                        var5 = var9.catch;
                                        var4 = function(arg0) { // Environment: var10
                                            _fun54188: for (var _fun54188_ip = 0;;) switch (_fun54188_ip) {
                                                case 0:
                                                    var6 = arg0;
                                                    var4 = _closure1_slot49;
                                                    var3 = var4.log;
                                                    var2 = _closure5_slot4;
                                                    var0 = global;
                                                    var0 = var0.HermesInternal;
                                                    var1 = var0.concat;
                                                    var0 = 'Failed to forward thread message to parent channel LogId:';
                                                    var2 = var1.bind(var0)(var2);
                                                    var1 = {};
                                                    var0 = _closure6_slot0;
                                                    var7 = var0.body;
                                                    var0 = null;
                                                    var8 = var0 == var7;
                                                    var0 = undefined;
                                                    var5 = undefined;
                                                    if (var8) {
                                                        _fun54188_ip = 78;
                                                        continue _fun54188
                                                    }
                                                case 73:
                                                    var5 = var7.id;
                                                case 78:
                                                    var1.referencedMessageId = var5;
                                                    var7 = _closure2_slot0;
                                                    var1.channelId = var7;
                                                    var5 = _closure2_slot2;
                                                    var5 = var5.alsoForwardToChannelId;
                                                    var1.destinationChannelId = var5;
                                                    var5 = var6.toString;
                                                    var5 = var5.bind(var6)();
                                                    var1.error = var5;
                                                    var1 = var3.bind(var4)(var2, var1);
                                                    return var0;
                                            }
                                        };
                                        var4 = var5.bind(var9)(var4);
                                    case 1444:
                                        var5 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var4 = 57;
                                        var4 = var9[var4];
                                        var9 = var5.bind(var1)(var4);
                                        var5 = var9.cast;
                                        var4 = _closure2_slot0;
                                        var9 = var5.bind(var9)(var4);
                                        var5 = _closure1_slot8;
                                        var4 = var5.getRequest;
                                        var4 = var4.bind(var5)(var9);
                                        if (!(var8 != var4)) {
                                            _fun54186_ip = 1583;
                                            continue _fun54186
                                        }
                                    case 1498:
                                        var13 = var4.guildId;
                                        var11 = var4.userId;
                                        var12 = var4.applicationStatus;
                                        var5 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var4 = 78;
                                        var4 = var9[var4];
                                        var9 = var5.bind(var1)(var4);
                                        var5 = var9.trackMemberApplicationInterviewMessage;
                                        var4 = {};
                                        var4.guildId = var13;
                                        var13 = _closure2_slot0;
                                        var4.channelId = var13;
                                        var13 = var2.body;
                                        var13 = var13.id;
                                        var4.messageId = var13;
                                        var4.joinRequestStatus = var12;
                                        var4.joinRequestUserId = var11;
                                        var4 = var5.bind(var9)(var4);
                                    case 1583:
                                        var9 = _closure1_slot10;
                                        var5 = var9.recordMessageSendApiResponse;
                                        var4 = _closure4_slot10;
                                        var4 = var5.bind(var9)(var4);
                                        var5 = _closure4_slot9;
                                        var4 = _closure1_slot35;
                                        var4 = var4.REPLY;
                                        if (!(var5 === var4)) {
                                            _fun54186_ip = 2066;
                                            continue _fun54186
                                        }
                                    case 1625:
                                        var4 = var2.body;
                                        var16 = var4.id;
                                        var12 = _closure2_slot0;
                                        var4 = _closure4_slot5;
                                        var4 = var8 == var4;
                                        var9 = undefined;
                                        if (var4) {
                                            _fun54186_ip = 1662;
                                            continue _fun54186
                                        }
                                    case 1652:
                                        var4 = _closure4_slot5;
                                        var9 = var4.message_id;
                                    case 1662:
                                        var5 = _closure1_slot12;
                                        var4 = var5.getPendingReplyActionSource;
                                        var5 = var4.bind(var5)(var12);
                                        var4 = 'message_swipe';
                                        if (!(var4 !== var5)) {
                                            _fun54186_ip = 1894;
                                            continue _fun54186
                                        }
                                    case 1692:
                                        var4 = 'message_shortcut';
                                        if (!(var4 === var5)) {
                                            _fun54186_ip = 2066;
                                            continue _fun54186
                                        }
                                    case 1705:
                                        var5 = _closure1_slot18;
                                        var4 = var5.getChannel;
                                        var17 = var4.bind(var5)(var12);
                                        var5 = _closure1_slot1;
                                        var11 = _closure1_slot2;
                                        var4 = 43;
                                        var4 = var11[var4];
                                        var13 = var5.bind(var1)(var4);
                                        var11 = var13.track;
                                        var4 = _closure1_slot27;
                                        var5 = var4.MESSAGE_SHORTCUT_ACTION_SENT;
                                        var4 = {};
                                        var4.message_id = var16;
                                        var4.channel_id = var12;
                                        var15 = var8 == var17;
                                        var14 = undefined;
                                        if (var15) {
                                            _fun54186_ip = 1779;
                                            continue _fun54186
                                        }
                                    case 1774:
                                        var14 = var17.guild_id;
                                    case 1779:
                                        var4.guild_id = var14;
                                        var4.original_message_id = var9;
                                        var14 = 'reply';
                                        var4.action = var14;
                                        var15 = _closure1_slot0;
                                        var14 = _closure1_slot2;
                                        var18 = 31;
                                        var14 = var14[var18];
                                        var19 = var15.bind(var1)(var14);
                                        var15 = var19.collectGuildAnalyticsMetadata;
                                        var20 = var8 == var17;
                                        var14 = undefined;
                                        if (var20) {
                                            _fun54186_ip = 1836;
                                            continue _fun54186
                                        }
                                    case 1831:
                                        var14 = var17.guild_id;
                                    case 1836:
                                        var24 = var15.bind(var19)(var14);
                                        var25 = var4;
                                        var14 = copyDataProperties(var25, var24);
                                        var15 = _closure1_slot0;
                                        var14 = _closure1_slot2;
                                        var14 = var14[var18];
                                        var15 = var15.bind(var1)(var14);
                                        var14 = var15.collectChannelAnalyticsMetadata;
                                        var24 = var14.bind(var15)(var17);
                                        var25 = var4;
                                        var14 = copyDataProperties(var25, var24);
                                        var4 = var11.bind(var13)(var5, var4);
                                        _fun54186_ip = 2066;
                                        continue _fun54186;
                                    case 1894:
                                        var4 = var8 != var9;
                                        var15 = null;
                                        if (!var4) {
                                            _fun54186_ip = 1919;
                                            continue _fun54186
                                        }
                                    case 1903:
                                        var5 = _closure1_slot21;
                                        var4 = var5.getMessage;
                                        var15 = var4.bind(var5)(var12, var9);
                                    case 1919:
                                        var5 = _closure1_slot18;
                                        var4 = var5.getChannel;
                                        var14 = var4.bind(var5)(var12);
                                        var5 = _closure1_slot25;
                                        var4 = var5.getCurrentUser;
                                        var13 = var4.bind(var5)();
                                        var5 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var4 = 43;
                                        var4 = var9[var4];
                                        var11 = var5.bind(var1)(var4);
                                        var9 = var11.track;
                                        var4 = _closure1_slot27;
                                        var5 = var4.MESSAGE_SWIPE_ACTION_SENT;
                                        var4 = {};
                                        var4.message_id = var16;
                                        var4.channel_id = var12;
                                        var16 = var8 == var14;
                                        var12 = undefined;
                                        if (var16) {
                                            _fun54186_ip = 2006;
                                            continue _fun54186
                                        }
                                    case 2001:
                                        var12 = var14.guild_id;
                                    case 2006:
                                        var4.guild_id = var12;
                                        var12 = 'reply';
                                        var4.swipe_action = var12;
                                        var12 = var8 != var13;
                                        if (!var12) {
                                            _fun54186_ip = 2055;
                                            continue _fun54186
                                        }
                                    case 2026:
                                        var14 = var13.id;
                                        var16 = var8 == var15;
                                        var13 = undefined;
                                        if (var16) {
                                            _fun54186_ip = 2051;
                                            continue _fun54186
                                        }
                                    case 2040:
                                        var15 = var15.author;
                                        var13 = var15.id;
                                    case 2051:
                                        var12 = var14 === var13;
                                    case 2055:
                                        var4.is_own_message = var12;
                                        var4 = var9.bind(var11)(var5, var4);
                                    case 2066:
                                        var11 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var5 = 46;
                                        var4 = var9[var5];
                                        var14 = var11.bind(var1)(var4);
                                        var13 = var14.dispatch;
                                        var12 = {};
                                        var4 = 'SLOWMODE_RESET_COOLDOWN';
                                        var12.type = var4;
                                        var4 = _closure1_slot24;
                                        var4 = var4.SendMessage;
                                        var12.slowmodeType = var4;
                                        var4 = _closure2_slot0;
                                        var12.channelId = var4;
                                        var12 = var13.bind(var14)(var12);
                                        var12 = var9[var5];
                                        var14 = var11.bind(var1)(var12);
                                        var13 = var14.dispatch;
                                        var12 = {};
                                        var15 = 'EMOJI_TRACK_USAGE';
                                        var12.type = var15;
                                        var15 = _closure4_slot1;
                                        var12.emojiUsed = var15;
                                        var12 = var13.bind(var14)(var12);
                                        var12 = var9[var5];
                                        var14 = var11.bind(var1)(var12);
                                        var13 = var14.dispatch;
                                        var12 = {};
                                        var15 = 'STICKER_TRACK_USAGE';
                                        var12.type = var15;
                                        var15 = _closure4_slot4;
                                        var12.stickerIds = var15;
                                        var12 = var13.bind(var14)(var12);
                                        var9 = var9[var5];
                                        var12 = var11.bind(var1)(var9);
                                        var11 = var12.dispatch;
                                        var9 = {};
                                        var13 = 'LOCAL_MESSAGE_CREATE';
                                        var9.type = var13;
                                        var13 = {};
                                        var13.channel_id = var4;
                                        var15 = _closure1_slot25;
                                        var14 = var15.getCurrentUser;
                                        var14 = var14.bind(var15)();
                                        var13.author = var14;
                                        var9.message = var13;
                                        var9 = var11.bind(var12)(var9);
                                        var9 = {};
                                        var11 = _closure4_slot0;
                                        var9.content = var11;
                                        var9.channelId = var4;
                                        var4 = var2.body;
                                        var4 = var4.id;
                                        var9.messageId = var4;
                                        var4 = _closure4_slot2;
                                        var11 = var8 != var4;
                                        var16 = 'chat_input';
                                        var4 = var16;
                                        if (!var11) {
                                            _fun54186_ip = 2322;
                                            continue _fun54186
                                        }
                                    case 2318:
                                        var4 = _closure4_slot2;
                                    case 2322:
                                        var9.location = var4;
                                        var4 = _closure4_slot3;
                                        var9.inviteAnalyticsMetadata = var4;
                                        var4 = function arg0() {
                                            _fun54189: for (var _fun54189_ip = 0;;) switch (_fun54189_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var3 = var0.content;
                                                    var2 = var0.channelId;
                                                    var _closure7_slot0 = var2;
                                                    var2 = var0.messageId;
                                                    var _closure7_slot1 = var2;
                                                    var2 = var0.location;
                                                    var _closure7_slot2 = var2;
                                                    var2 = var0.inviteAnalyticsMetadata;
                                                    var _closure7_slot3 = var2;
                                                    var2 = var0.overrideProperties;
                                                    var0 = undefined;
                                                    if (!(var2 === var0)) {
                                                        _fun54189_ip = 61;
                                                        continue _fun54189
                                                    }
                                                case 59:
                                                    var2 = {};
                                                case 61:
                                                    var _closure7_slot4 = var2;
                                                    var _closure7_slot5 = var0;
                                                    var5 = _closure1_slot17;
                                                    var4 = var5.getId;
                                                    var4 = var4.bind(var5)();
                                                    _closure7_slot5 = var4;
                                                    var4 = _closure1_slot1;
                                                    var5 = _closure1_slot2;
                                                    var2 = 29;
                                                    var2 = var5[var2];
                                                    var2 = var4.bind(var0)(var2);
                                                    var3 = var2.bind(var0)(var3);
                                                    var2 = var3.forEach;
                                                    var1 = function(arg0) { // Environment: var1
                                                        _fun54190: for (var _fun54190_ip = 0;;) switch (_fun54190_ip) {
                                                            case 0:
                                                                var0 = arg0;
                                                                var6 = var0.type;
                                                                var3 = var0.code;
                                                                var7 = var0.url;
                                                                var4 = _closure1_slot0;
                                                                var0 = _closure1_slot2;
                                                                var5 = 30;
                                                                var2 = var0[var5];
                                                                var0 = undefined;
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.INVITE;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1529;
                                                                    continue _fun54190
                                                                }
                                                            case 62:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.TEMPLATE;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1405;
                                                                    continue _fun54190
                                                                }
                                                            case 98:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.BUILD_OVERRIDE;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 134:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.EXPERIMENT;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 170:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.MANUAL_BUILD_OVERRIDE;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 206:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.EVENT;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 242:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.CHANNEL_LINK;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 278:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.APP_DIRECTORY_PROFILE;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1327;
                                                                    continue _fun54190
                                                                }
                                                            case 314:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.APP_DIRECTORY_STOREFRONT;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1286;
                                                                    continue _fun54190
                                                                }
                                                            case 350:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.APP_DIRECTORY_STOREFRONT_SKU;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1198;
                                                                    continue _fun54190
                                                                }
                                                            case 386:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.ACTIVITY_BOOKMARK;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1093;
                                                                    continue _fun54190
                                                                }
                                                            case 422:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.EMBEDDED_ACTIVITY_INVITE;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1038;
                                                                    continue _fun54190
                                                                }
                                                            case 458:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.GUILD_PRODUCT;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 494:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.SERVER_SHOP;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 530:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.SOCIAL_LAYER_STOREFRONT;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 566:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.QUESTS_EMBED;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 808;
                                                                    continue _fun54190
                                                                }
                                                            case 602:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.APP_OAUTH2_LINK;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 708;
                                                                    continue _fun54190
                                                                }
                                                            case 635:
                                                                var4 = _closure1_slot0;
                                                                var2 = _closure1_slot2;
                                                                var2 = var2[var5];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.CodedLinkType;
                                                                var2 = var2.COLLECTIBLES_SHOP;
                                                                if (!(var6 !== var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 671:
                                                                var2 = global;
                                                                var4 = var2.Error;
                                                                var2 = var2.HermesInternal;
                                                                var5 = var2.concat;
                                                                var2 = 'Unknown coded link type: ';
                                                                var2 = var5.bind(var2)(var6);
                                                                var2 = var4.bind(var0)(var2);
                                                                throw var2;
                                                            case 708:
                                                                var4 = _closure1_slot1;
                                                                var5 = _closure1_slot2;
                                                                var2 = 31;
                                                                var2 = var5[var2];
                                                                var8 = var4.bind(var0)(var2);
                                                                var6 = var8.trackWithMetadata;
                                                                var2 = _closure1_slot27;
                                                                var4 = var2.APP_OAUTH2_LINK_EMBED_URL_SENT;
                                                                var2 = {};
                                                                var2.application_id = var3;
                                                                var2 = var6.bind(var8)(var4, var2);
                                                                var4 = _closure1_slot0;
                                                                var2 = 33;
                                                                var2 = var5[var2];
                                                                var6 = var4.bind(var0)(var2);
                                                                var5 = var6.trackAppEmbedLinkSent;
                                                                var2 = _closure1_slot44;
                                                                var4 = var2.OAUTH;
                                                                var2 = _closure7_slot5;
                                                                var2 = var5.bind(var6)(var3, var4, var2);
                                                                _fun54190_ip = 1590;
                                                                continue _fun54190;
                                                            case 808:
                                                                var4 = _closure1_slot0;
                                                                var5 = _closure1_slot2;
                                                                var2 = 36;
                                                                var6 = var5[var2];
                                                                var10 = var4.bind(var0)(var6);
                                                                var8 = var10.getAdMetadataRaw;
                                                                var9 = 37;
                                                                var6 = var5[var9];
                                                                var6 = var4.bind(var0)(var6);
                                                                var6 = var6.QuestContent;
                                                                var6 = var6.QUESTS_EMBED;
                                                                var12 = var8.bind(var10)(var6);
                                                                var2 = var5[var2];
                                                                var8 = var4.bind(var0)(var2);
                                                                var6 = var8.getAdMetadataSealed;
                                                                var2 = var5[var9];
                                                                var2 = var4.bind(var0)(var2);
                                                                var2 = var2.QuestContent;
                                                                var2 = var2.QUESTS_EMBED;
                                                                var10 = var6.bind(var8)(var2);
                                                                var2 = 38;
                                                                var2 = var5[var2];
                                                                var5 = var4.bind(var0)(var2);
                                                                var4 = var5.trackQuestEvent;
                                                                var2 = {};
                                                                var2.questId = var3;
                                                                var6 = _closure1_slot27;
                                                                var6 = var6.QUEST_LINK_SHARED;
                                                                var2.event = var6;
                                                                var6 = {};
                                                                var8 = null;
                                                                var13 = var8 != var12;
                                                                var11 = null;
                                                                if (!var13) {
                                                                    _fun54190_ip = 960;
                                                                    continue _fun54190
                                                                }
                                                            case 957:
                                                                var11 = var12;
                                                            case 960:
                                                                var6.metadata_raw = var11;
                                                                var11 = var8 != var10;
                                                                var8 = null;
                                                                if (!var11) {
                                                                    _fun54190_ip = 977;
                                                                    continue _fun54190
                                                                }
                                                            case 974:
                                                                var8 = var10;
                                                            case 977:
                                                                var6.metadata_sealed = var8;
                                                                var2.properties = var6;
                                                                var6 = true;
                                                                var2.trackGuildAndChannelMetadata = var6;
                                                                var8 = _closure1_slot0;
                                                                var6 = _closure1_slot2;
                                                                var6 = var6[var9];
                                                                var6 = var8.bind(var0)(var6);
                                                                var6 = var6.QuestContent;
                                                                var6 = var6.QUESTS_EMBED;
                                                                var2.sourceQuestContent = var6;
                                                                var2 = var4.bind(var5)(var2);
                                                                _fun54190_ip = 1590;
                                                                continue _fun54190;
                                                            case 1038:
                                                                var4 = _closure1_slot0;
                                                                var5 = _closure1_slot2;
                                                                var2 = 33;
                                                                var2 = var5[var2];
                                                                var6 = var4.bind(var0)(var2);
                                                                var5 = var6.trackAppEmbedLinkSent;
                                                                var2 = _closure1_slot44;
                                                                var4 = var2.ACTIVITY_INVITE;
                                                                var2 = _closure7_slot5;
                                                                var2 = var5.bind(var6)(var3, var4, var2);
                                                                _fun54190_ip = 1590;
                                                                continue _fun54190;
                                                            case 1093:
                                                                var5 = _closure1_slot0;
                                                                var6 = _closure1_slot2;
                                                                var2 = 35;
                                                                var2 = var6[var2];
                                                                var4 = var5.bind(var0)(var2);
                                                                var2 = var4.extractActivityBookmarkParams;
                                                                var2 = var2.bind(var4)(var7);
                                                                var4 = 33;
                                                                var4 = var6[var4];
                                                                var7 = var5.bind(var0)(var4);
                                                                var6 = var7.trackAppEmbedLinkSent;
                                                                var4 = _closure1_slot44;
                                                                var5 = var4.ACTIVITY;
                                                                var4 = var2.referrerId;
                                                                var8 = null;
                                                                if (!(var8 == var4)) {
                                                                    _fun54190_ip = 1171;
                                                                    continue _fun54190
                                                                }
                                                            case 1164:
                                                                var4 = _closure7_slot5;
                                                            case 1171:
                                                                var14 = var2.customId;
                                                                var18 = var7;
                                                                var17 = var3;
                                                                var16 = var5;
                                                                var15 = var4;
                                                                var2 = var18[var6](var17, var16, var15, var14, var13);
                                                                _fun54190_ip = 1590;
                                                                continue _fun54190;
                                                            case 1198:
                                                                var4 = _closure1_slot0;
                                                                var5 = _closure1_slot2;
                                                                var2 = 34;
                                                                var2 = var5[var2];
                                                                var4 = var4.bind(var0)(var2);
                                                                var2 = var4.parseStorefrontSkuCodedLink;
                                                                var2 = var2.bind(var4)(var3);
                                                                var4 = null;
                                                                if (!(var4 != var2)) {
                                                                    _fun54190_ip = 1590;
                                                                    continue _fun54190
                                                                }
                                                            case 1238:
                                                                var5 = _closure1_slot0;
                                                                var6 = _closure1_slot2;
                                                                var4 = 32;
                                                                var4 = var6[var4];
                                                                var6 = var5.bind(var0)(var4);
                                                                var5 = var6.trackAppDirectoryProfileEmbed;
                                                                var4 = var2.applicationId;
                                                                var2 = 'storefront_sku';
                                                                var2 = var5.bind(var6)(var4, var2);
                                                                _fun54190_ip = 1590;
                                                                continue _fun54190;
                                                            case 1286:
                                                                var4 = _closure1_slot0;
                                                                var5 = _closure1_slot2;
                                                                var2 = 32;
                                                                var2 = var5[var2];
                                                                var5 = var4.bind(var0)(var2);
                                                                var4 = var5.trackAppDirectoryProfileEmbed;
                                                                var2 = 'storefront';
                                                                var2 = var4.bind(var5)(var3, var2);
                                                                _fun54190_ip = 1590;
                                                                continue _fun54190;
                                                            case 1327:
                                                                var4 = _closure1_slot0;
                                                                var5 = _closure1_slot2;
                                                                var2 = 32;
                                                                var2 = var5[var2];
                                                                var6 = var4.bind(var0)(var2);
                                                                var2 = var6.trackAppDirectoryProfileEmbed;
                                                                var2 = var2.bind(var6)(var3);
                                                                var2 = 33;
                                                                var2 = var5[var2];
                                                                var6 = var4.bind(var0)(var2);
                                                                var5 = var6.trackAppEmbedLinkSent;
                                                                var2 = _closure1_slot44;
                                                                var4 = var2.APP_DISCOVERY;
                                                                var2 = _closure7_slot5;
                                                                var2 = var5.bind(var6)(var3, var4, var2);
                                                                _fun54190_ip = 1590;
                                                                continue _fun54190;
                                                            case 1405:
                                                                var4 = _closure1_slot9;
                                                                var2 = var4.getGuildTemplate;
                                                                var7 = var2.bind(var4)(var3);
                                                                var2 = null;
                                                                if (!(var2 != var7)) {
                                                                    _fun54190_ip = 1527;
                                                                    continue _fun54190
                                                                }
                                                            case 1426:
                                                                var4 = var7.state;
                                                                var2 = _closure1_slot45;
                                                                var2 = var2.RESOLVING;
                                                                if (!(var4 !== var2)) {
                                                                    _fun54190_ip = 1527;
                                                                    continue _fun54190
                                                                }
                                                            case 1445:
                                                                var4 = _closure1_slot1;
                                                                var5 = _closure1_slot2;
                                                                var2 = 31;
                                                                var2 = var5[var2];
                                                                var6 = var4.bind(var0)(var2);
                                                                var5 = var6.trackWithMetadata;
                                                                var2 = _closure1_slot27;
                                                                var4 = var2.GUILD_TEMPLATE_LINK_SENT;
                                                                var2 = {};
                                                                var2.guild_template_code = var3;
                                                                var8 = var7.name;
                                                                var2.guild_template_name = var8;
                                                                var8 = var7.description;
                                                                var2.guild_template_description = var8;
                                                                var7 = var7.sourceGuildId;
                                                                var2.guild_template_guild_id = var7;
                                                                var2 = var5.bind(var6)(var4, var2);
                                                                _fun54190_ip = 1590;
                                                                continue _fun54190;
                                                            case 1527:
                                                                return var0;
                                                            case 1529:
                                                                var2 = _closure1_slot57;
                                                                var1 = {};
                                                                var1.inviteKey = var3;
                                                                var4 = _closure7_slot0;
                                                                var1.channelId = var4;
                                                                var4 = _closure7_slot1;
                                                                var1.messageId = var4;
                                                                var4 = _closure7_slot2;
                                                                var1.location = var4;
                                                                var4 = _closure7_slot3;
                                                                var1.inviteAnalyticsMetadata = var4;
                                                                var3 = _closure7_slot4;
                                                                var1.overrideProperties = var3;
                                                                var1 = var2.bind(var0)(var1);
                                                            case 1590:
                                                                return var0;
                                                        }
                                                    };
                                                    var1 = var2.bind(var3)(var1);
                                                    return var0;
                                            }
                                        };
                                        var4 = var4.bind(var1)(var9);
                                        var14 = _closure4_slot0;
                                        var13 = _closure2_slot0;
                                        var4 = var2.body;
                                        var12 = var4.id;
                                        var4 = _closure4_slot2;
                                        var4 = var8 != var4;
                                        var11 = var16;
                                        if (!var4) {
                                            _fun54186_ip = 2381;
                                            continue _fun54186
                                        }
                                    case 2377:
                                        var11 = _closure4_slot2;
                                    case 2381:
                                        var4 = _closure2_slot2;
                                        var9 = var4.isGiftLinkSentOnBehalfOfUser;
                                        var9 = !var9;
                                        var10 = function arg0, arg1, arg2, arg3, arg4() {
                                            var0 = arg1;
                                            var _closure7_slot0 = var0;
                                            var0 = arg2;
                                            var _closure7_slot1 = var0;
                                            var0 = arg3;
                                            var _closure7_slot2 = var0;
                                            var0 = arg4;
                                            var _closure7_slot3 = var0;
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var0 = 42;
                                            var2 = var2[var0];
                                            var0 = undefined;
                                            var4 = var3.bind(var0)(var2);
                                            var3 = var4.findGiftCodes;
                                            var2 = arg0;
                                            var3 = var3.bind(var4)(var2);
                                            var2 = var3.forEach;
                                            var1 = function(arg0) { // Environment: var1
                                                _fun54192: for (var _fun54192_ip = 0;;) switch (_fun54192_ip) {
                                                    case 0:
                                                        var3 = _closure1_slot18;
                                                        var2 = var3.getChannel;
                                                        var1 = _closure7_slot0;
                                                        var5 = var2.bind(var3)(var1);
                                                        var1 = null;
                                                        if (!(var1 != var5)) {
                                                            _fun54192_ip = 145;
                                                            continue _fun54192
                                                        }
                                                    case 30:
                                                        var3 = _closure1_slot1;
                                                        var2 = _closure1_slot2;
                                                        var1 = 31;
                                                        var2 = var2[var1];
                                                        var1 = undefined;
                                                        var3 = var3.bind(var1)(var2);
                                                        var2 = var3.trackWithMetadata;
                                                        var0 = _closure1_slot27;
                                                        var1 = var0.GIFT_CODE_SENT;
                                                        var0 = {};
                                                        var6 = _closure7_slot2;
                                                        var0.location = var6;
                                                        var6 = arg0;
                                                        var0.gift_code = var6;
                                                        var6 = var5.getGuildId;
                                                        var6 = var6.bind(var5)();
                                                        var0.guild_id = var6;
                                                        var6 = var5.id;
                                                        var0.channel_id = var6;
                                                        var5 = var5.type;
                                                        var0.channel_type = var5;
                                                        var5 = _closure7_slot1;
                                                        var0.message_id = var5;
                                                        var4 = _closure7_slot3;
                                                        var0.automatic_send = var4;
                                                        var0 = var2.bind(var3)(var1, var0);
                                                    case 145:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var21 = !var9;
                                        var26 = undefined;
                                        var25 = var14;
                                        var24 = var13;
                                        var23 = var12;
                                        var22 = var11;
                                        var9 = var26[var10](var25, var24, var23, var22, var21, var20);
                                        var4 = var4.gifMetadata;
                                        if (!(var8 != var4)) {
                                            _fun54186_ip = 2671;
                                            continue _fun54186
                                        }
                                    case 2433:
                                        var4 = _closure2_slot2;
                                        var12 = var4.gifMetadata;
                                        var10 = _closure2_slot0;
                                        var4 = var2.body;
                                        var13 = var4.id;
                                        var4 = _closure4_slot2;
                                        var4 = var8 != var4;
                                        if (!var4) {
                                            _fun54186_ip = 2472;
                                            continue _fun54186
                                        }
                                    case 2468:
                                        var16 = _closure4_slot2;
                                    case 2472:
                                        var9 = _closure1_slot18;
                                        var4 = var9.getChannel;
                                        var14 = var4.bind(var9)(var10);
                                        if (!(var8 != var14)) {
                                            _fun54186_ip = 2671;
                                            continue _fun54186
                                        }
                                    case 2493:
                                        var9 = _closure1_slot1;
                                        var15 = _closure1_slot2;
                                        var4 = 43;
                                        var4 = var15[var4];
                                        var11 = var9.bind(var1)(var4);
                                        var10 = var11.track;
                                        var4 = _closure1_slot27;
                                        var9 = var4.MESSAGE_SENT_WITH_GIF;
                                        var4 = {};
                                        var4.location = var16;
                                        var4.message_id = var13;
                                        var13 = var12.gif_provider;
                                        var4.gif_provider = var13;
                                        var13 = var12.load_id;
                                        var4.load_id = var13;
                                        var13 = var12.source_object;
                                        var4.source_object = var13;
                                        var13 = var12.gif_url;
                                        var4.gif_url = var13;
                                        var12 = var12.gif_id;
                                        var4.gif_id = var12;
                                        var13 = _closure1_slot0;
                                        var12 = 31;
                                        var16 = var15[var12];
                                        var18 = var13.bind(var1)(var16);
                                        var17 = var18.collectGuildAnalyticsMetadata;
                                        var16 = var14.getGuildId;
                                        var16 = var16.bind(var14)();
                                        var24 = var17.bind(var18)(var16);
                                        var25 = var4;
                                        var16 = copyDataProperties(var25, var24);
                                        var12 = var15[var12];
                                        var13 = var13.bind(var1)(var12);
                                        var12 = var13.collectChannelAnalyticsMetadata;
                                        var24 = var12.bind(var13)(var14);
                                        var25 = var4;
                                        var12 = copyDataProperties(var25, var24);
                                        var4 = var10.bind(var11)(var9, var4);
                                    case 2671:
                                        var4 = _closure4_slot12;
                                        if (!(var8 != var4)) {
                                            _fun54186_ip = 2748;
                                            continue _fun54186
                                        }
                                    case 2679:
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var5];
                                        var5 = var4.bind(var1)(var3);
                                        var4 = var5.dispatch;
                                        var3 = {};
                                        var8 = 'UPLOAD_COMPLETE';
                                        var3.type = var8;
                                        var7 = _closure2_slot0;
                                        var3.channelId = var7;
                                        var6 = _closure4_slot12;
                                        var6 = var6._file;
                                        var3.file = var6;
                                        var6 = false;
                                        var3.aborted = var6;
                                        var3 = var4.bind(var5)(var3);
                                    case 2748:
                                        var0 = _closure5_slot0;
                                        var0 = var0.bind(var1)(var2);
                                    case 2757:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1, var5);
                            return var0;
                        };
                        var51 = var13;
                        var11 = new var51[var14](var50, var49);
                        var11 = var11 instanceof Object ? var11 : var13;
                        return var11;
                    case 2280:
                        return var10;
                    case 2283:
                        return var10;
                    case 2286:
                        return var4;
                    case 2289: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var16 = var4.file;
                        var8 = var16;
                        var15 = var4.code;
                        var7 = var15;
                        var14 = var4.reason;
                        var6 = var14;
                        var5 = var4.responseBody;
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var4 = 76;
                        var4 = var13[var4];
                        var13 = var11.bind(var10)(var4);
                        var11 = var13.logMessageSendFailure;
                        var4 = {};
                        var16 = var16.items;
                        var4.fileItems = var16;
                        var4.failureCode = var15;
                        var15 = var12 == var14;
                        var14 = undefined;
                        if (var15) {
                            _fun54180_ip = 2384;
                            continue _fun54180
                        }
                    case 2375:
                        var15 = var6;
                        var14 = var15.msg;
                    case 2384:
                        var4.errorMessage = var14;
                        var4 = var11.bind(var13)(var4);
                        var11 = var9;
                        var11 = var12 == var11;
                        var4 = var11;
                        if (var11) {
                            _fun54180_ip = 2425;
                            continue _fun54180
                        }
                    case 2407:
                        var50 = var8;
                        var49 = var7;
                        var48 = var6;
                        var47 = var5;
                        var51 = undefined;
                        var4 = var51[var9](var50, var49, var48, var47, var46);
                    case 2425:
                        var4 = undefined;
                        return var4;
                    case 2430:
                        var5 = _closure1_slot50;
                        var4 = var5.info;
                        var2 = 'Converting channel to a private channel';
                        var2 = var4.bind(var5)(var2);
                        var2 = var3.then;
                        var1 = function(arg0) { // Environment: var1
                            var3 = _closure1_slot50;
                            var2 = var3.info;
                            var1 = 'Finished converting channel to a private channel';
                            var1 = var2.bind(var3)(var1);
                            var4 = _closure1_slot54;
                            var3 = var4._sendMessage;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            var0 = arg0;
                            var0 = var3.bind(var4)(var0, var2, var1);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 2469:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1._sendMessage = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 46;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MESSAGE_START_EDIT';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.messageId = var4;
        var4 = arg2;
        var1.content = var4;
        var4 = arg3;
        var1.source = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.startEditMessage = var7;
    var7 = function arg0, arg1, arg2() {
        _fun54195: for (var _fun54195_ip = 0;;) switch (_fun54195_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var3 = arg2;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 68;
                var4 = var4[var2];
                var2 = undefined;
                var9 = var7.bind(var2)(var4);
                var8 = var9.hasFlag;
                var7 = var5.flags;
                var4 = _closure1_slot33;
                var4 = var4.IS_COMPONENTS_V2;
                var4 = var8.bind(var9)(var7, var4);
                if (!var4) {
                    _fun54195_ip = 98;
                    continue _fun54195
                }
            case 66:
                var8 = var5.components;
                var7 = var8.filter;
                var4 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 81;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ComponentType;
                    var0 = var0.TEXT_DISPLAY;
                    var0 = var1 === var0;
                    return var0;
                };
                var7 = var7.bind(var8)(var4);
                var8 = var7.length;
                var4 = 0;
                if (!(!(var8 > var4))) {
                    _fun54195_ip = 168;
                    continue _fun54195
                }
            case 98:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 46;
                var4 = var9[var4];
                var9 = var8.bind(var2)(var4);
                var8 = var9.dispatch;
                var4 = {};
                var10 = 'MESSAGE_START_EDIT';
                var4.type = var10;
                var4.channelId = var6;
                var10 = var5.id;
                var4.messageId = var10;
                var10 = var5.content;
                var4.content = var10;
                var4.source = var3;
                var4 = var8.bind(var9)(var4);
                return var2;
            case 168:
                var4 = var7.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.content;
                    return var0;
                };
                var7 = var4.bind(var7)(var1);
                var4 = var7.join;
                var1 = '\n';
                var4 = var4.bind(var7)(var1);
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 46;
                var0 = var7[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var7 = 'MESSAGE_START_EDIT';
                var0.type = var7;
                var0.channelId = var6;
                var5 = var5.id;
                var0.messageId = var5;
                var0.content = var4;
                var0.source = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.startEditMessageRecord = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 46;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MESSAGE_UPDATE_EDIT';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.textValue = var4;
        var4 = arg2;
        var1.richValue = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateEditMessage = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 46;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MESSAGE_END_EDIT';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.response = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.endEditMessage = var7;
    var7 = function arg0, arg1, arg2() {
        var1 = arg2;
        var2 = arg0;
        var _closure2_slot0 = var2;
        var2 = arg1;
        var _closure2_slot1 = var2;
        var2 = var1.content;
        var _closure2_slot2 = var2;
        var1 = var1.components;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54202: for (var _fun54202_ip = 0;;) switch (_fun54202_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54202_ip = 545;
                            continue _fun54202
                        }
                    case 12:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var10 = _closure2_slot1;
                        var6 = _closure2_slot0;
                        var5 = _closure1_slot19;
                        var1 = var5.getEditActionSource;
                        var5 = var1.bind(var5)(var6);
                        var1 = 'message_swipe';
                        if (!(var1 === var5)) {
                            _fun54202_ip = 161;
                            continue _fun54202
                        }
                    case 59:
                        var5 = _closure1_slot18;
                        var1 = var5.getChannel;
                        var11 = var1.bind(var5)(var6);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 43;
                        var1 = var7[var1];
                        var8 = var5.bind(var2)(var1);
                        var7 = var8.track;
                        var1 = _closure1_slot27;
                        var5 = var1.MESSAGE_SWIPE_ACTION_SENT;
                        var1 = {};
                        var1.message_id = var10;
                        var1.channel_id = var6;
                        var10 = null;
                        var12 = var10 == var11;
                        var10 = undefined;
                        if (var12) {
                            _fun54202_ip = 135;
                            continue _fun54202
                        }
                    case 130:
                        var10 = var11.guild_id;
                    case 135:
                        var1.guild_id = var10;
                        var10 = 'edit';
                        var1.swipe_action = var10;
                        var10 = true;
                        var1.is_own_message = var10;
                        var1 = var7.bind(var8)(var5, var1);
                    case 161:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 82;
                        var1 = var7[var1];
                        var5 = var5.bind(var2)(var1);
                        var1 = var5.unarchiveThreadIfNecessary;
                        var1 = var1.bind(var5)(var6);
                        SaveGenerator(address = 196);
                    case 194:
                        return var1;
                    case 196:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun54202_ip = 542;
                            continue _fun54202
                        }
                    case 205:
                        var10 = _closure2_slot0;
                        var8 = _closure2_slot1;
                        var6 = _closure1_slot21;
                        var5 = var6.getMessage;
                        var11 = var5.bind(var6)(var10, var8);
                        var6 = null;
                        var7 = var6 != var11;
                        var5 = undefined;
                        if (!var7) {
                            _fun54202_ip = 382;
                            continue _fun54202
                        }
                    case 243:
                        var12 = var11.type;
                        var7 = _closure1_slot35;
                        var7 = var7.REPLY;
                        var5 = undefined;
                        if (!(var12 === var7)) {
                            _fun54202_ip = 382;
                            continue _fun54202
                        }
                    case 264:
                        var13 = _closure1_slot13;
                        var12 = var13.getMessageByReference;
                        var7 = var11.messageReference;
                        var7 = var12.bind(var13)(var7);
                        var13 = var7.state;
                        var12 = _closure1_slot14;
                        var12 = var12.LOADED;
                        var5 = undefined;
                        if (!(var13 === var12)) {
                            _fun54202_ip = 382;
                            continue _fun54202
                        }
                    case 306:
                        var12 = var11.mentions;
                        var11 = var12.includes;
                        var7 = var7.message;
                        var7 = var7.author;
                        var7 = var7.id;
                        var7 = var11.bind(var12)(var7);
                        var5 = undefined;
                        if (var7) {
                            _fun54202_ip = 382;
                            continue _fun54202
                        }
                    case 343:
                        var7 = {};
                        var11 = global;
                        var13 = var11.Object;
                        var12 = var13.values;
                        var11 = _closure1_slot36;
                        var11 = var12.bind(var13)(var11);
                        var7.parse = var11;
                        var11 = false;
                        var7.replied_user = var11;
                        var5 = var7;
                    case 382:
                        var11 = _closure1_slot21;
                        var7 = var11.getMessage;
                        var12 = var7.bind(var11)(var10, var8);
                        var6 = var6 != var12;
                        if (!var6) {
                            _fun54202_ip = 426;
                            continue _fun54202
                        }
                    case 405:
                        var11 = var12.hasFlag;
                        var7 = _closure1_slot33;
                        var7 = var7.CROSSPOSTED;
                        var6 = var11.bind(var12)(var7);
                    case 426:
                        var7 = {};
                        var7.channelId = var10;
                        var7.messageId = var8;
                        var8 = _closure2_slot2;
                        var7.content = var8;
                        var7.isCrossposted = var6;
                        var7.allowed_mentions = var5;
                        var4 = _closure2_slot3;
                        var7.components = var4;
                        _closure4_slot0 = var7;
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var8 = 71;
                        var4 = var10[var8];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.enqueue;
                        var4 = {};
                        var9 = _closure1_slot0;
                        var8 = var10[var8];
                        var8 = var9.bind(var2)(var8);
                        var8 = var8.MessageDataType;
                        var8 = var8.EDIT;
                        var4.type = var8;
                        var4.message = var7;
                        var3 = function(arg0) { // Environment: var3
                            _fun54203: for (var _fun54203_ip = 0;;) switch (_fun54203_ip) {
                                case 0:
                                    var7 = arg0;
                                    var0 = var7.hasErr;
                                    var8 = !var0;
                                    if (!var8) {
                                        _fun54203_ip = 66;
                                        continue _fun54203
                                    }
                                case 15:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 80;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    var2 = var0.AUTOMOD_ERROR_CODES;
                                    var1 = var2.has;
                                    var0 = var7.body;
                                    var0 = var0.code;
                                    var8 = var1.bind(var2)(var0);
                                case 66:
                                    if (!var8) {
                                        _fun54203_ip = 202;
                                        continue _fun54203
                                    }
                                case 72:
                                    var3 = {};
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 71;
                                    var1 = var4[var1];
                                    var2 = undefined;
                                    var1 = var5.bind(var2)(var1);
                                    var1 = var1.MessageDataType;
                                    var1 = var1.EDIT;
                                    var3.type = var1;
                                    var1 = _closure4_slot0;
                                    var3.message = var1;
                                    var1 = _closure1_slot1;
                                    var0 = 46;
                                    var0 = var4[var0];
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.dispatch;
                                    var0 = {};
                                    var4 = 'MESSAGE_EDIT_FAILED_AUTOMOD';
                                    var0.type = var4;
                                    var0.messageData = var3;
                                    var3 = {};
                                    var4 = var7.body;
                                    var4 = var4.code;
                                    var3.code = var4;
                                    var4 = var7.body;
                                    var4 = var4.message;
                                    var3.message = var4;
                                    var0.errorResponseBody = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 202:
                                    var9 = var7.hasErr;
                                    var10 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var0 = 83;
                                    var2 = var11[var0];
                                    var0 = undefined;
                                    var2 = var10.bind(var0)(var2);
                                    var4 = var2.AccessibilityAnnouncer;
                                    var3 = var4.announce;
                                    var2 = 44;
                                    var5 = var11[var2];
                                    var5 = var10.bind(var0)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.string;
                                    var2 = var11[var2];
                                    var2 = var10.bind(var0)(var2);
                                    var2 = var2.t;
                                    if (var9) {
                                        _fun54203_ip = 327;
                                        continue _fun54203
                                    }
                                case 284:
                                    if (var8) {
                                        _fun54203_ip = 307;
                                        continue _fun54203
                                    }
                                case 287:
                                    var8 = var2["0x1HBD"];
                                    var8 = var5.bind(var6)(var8);
                                    var8 = var3.bind(var4)(var8);
                                    _fun54203_ip = 345;
                                    continue _fun54203;
                                case 307:
                                    var8 = var2.Hym4ix;
                                    var8 = var5.bind(var6)(var8);
                                    var8 = var3.bind(var4)(var8);
                                    _fun54203_ip = 345;
                                    continue _fun54203;
                                case 327:
                                    var2 = var2.Atp7FP;
                                    var2 = var5.bind(var6)(var2);
                                    var2 = var3.bind(var4)(var2);
                                case 345:
                                    var6 = _closure1_slot54;
                                    var5 = var6.endEditMessage;
                                    var3 = _closure2_slot0;
                                    var8 = var7.hasErr;
                                    var2 = undefined;
                                    if (var8) {
                                        _fun54203_ip = 376;
                                        continue _fun54203
                                    }
                                case 373:
                                    var2 = var7;
                                case 376:
                                    var2 = var5.bind(var6)(var3, var2);
                                    var3 = _closure1_slot54;
                                    var2 = var3.focusMessage;
                                    var1 = {};
                                    var5 = _closure2_slot0;
                                    var1.channelId = var5;
                                    var4 = _closure2_slot1;
                                    var1.messageId = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 542:
                        return var1;
                    case 545:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.editMessage = var7;
    var7 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54206: for (var _fun54206_ip = 0;;) switch (_fun54206_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54206_ip = 168;
                            continue _fun54206
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 82;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.unarchiveThreadIfNecessary;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun54206_ip = 165;
                            continue _fun54206
                        }
                    case 63:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 51;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.patch;
                        var3 = {};
                        var10 = _closure1_slot28;
                        var9 = var10.MESSAGE;
                        var8 = _closure2_slot0;
                        var6 = _closure2_slot1;
                        var6 = var9.bind(var10)(var8, var6);
                        var3.url = var6;
                        var6 = {};
                        var7 = _closure1_slot33;
                        var7 = var7.SUPPRESS_EMBEDS;
                        var6.flags = var7;
                        var3.body = var6;
                        var6 = true;
                        var3.oldFormErrors = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 165:
                        return var1;
                    case 168:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.suppressEmbeds = var7;
    var7 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54209: for (var _fun54209_ip = 0;;) switch (_fun54209_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54209_ip = 163;
                            continue _fun54209
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 82;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.unarchiveThreadIfNecessary;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun54209_ip = 160;
                            continue _fun54209
                        }
                    case 63:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 51;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.patch;
                        var3 = {};
                        var10 = _closure1_slot28;
                        var9 = var10.MESSAGE;
                        var8 = _closure2_slot0;
                        var6 = _closure2_slot1;
                        var6 = var9.bind(var10)(var8, var6);
                        var3.url = var6;
                        var6 = {};
                        var7 = _closure2_slot2;
                        var6.attachments = var7;
                        var3.body = var6;
                        var6 = true;
                        var3.oldFormErrors = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 160:
                        return var1;
                    case 163:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.patchMessageAttachments = var7;
    var7 = function arg0, arg1() {
        _fun54210: for (var _fun54210_ip = 0;;) switch (_fun54210_ip) {
            case 0:
                var2 = arguments[2];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun54210_ip = 27;
                    continue _fun54210
                }
            case 25:
                var2 = false;
            case 27:
                var _closure2_slot2 = var2;
                var2 = _closure1_slot4;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun54212: for (var _fun54212_ip = 0;;) switch (_fun54212_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun54212_ip = 191;
                                    continue _fun54212
                                }
                            case 12:
                                var2 = function() {
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 46;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'MESSAGE_DELETE';
                                    var1.type = var4;
                                    var5 = _closure2_slot1;
                                    var1.id = var5;
                                    var4 = _closure2_slot0;
                                    var1.channelId = var4;
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.then;
                                    var1 = function() { // Environment: var1
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var0 = 83;
                                        var1 = var7[var0];
                                        var0 = undefined;
                                        var1 = var6.bind(var0)(var1);
                                        var3 = var1.AccessibilityAnnouncer;
                                        var2 = var3.announce;
                                        var1 = 44;
                                        var4 = var7[var1];
                                        var4 = var6.bind(var0)(var4);
                                        var5 = var4.intl;
                                        var4 = var5.string;
                                        var1 = var7[var1];
                                        var1 = var6.bind(var0)(var1);
                                        var1 = var1.t;
                                        var1 = var1.RYMs7s;
                                        var1 = var4.bind(var5)(var1);
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var _closure4_slot0 = var2;
                                var1 = _closure2_slot2;
                                if (var1) {
                                    _fun54212_ip = 180;
                                    continue _fun54212
                                }
                            case 34:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 82;
                                var1 = var5[var1];
                                var6 = undefined;
                                var5 = var4.bind(var6)(var1);
                                var4 = var5.unarchiveThreadIfNecessary;
                                var1 = _closure2_slot0;
                                var1 = var4.bind(var5)(var1);
                                SaveGenerator(address = 78);
                            case 76:
                                return var1;
                            case 78:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun54212_ip = 177;
                                    continue _fun54212
                                }
                            case 84:
                                var5 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var4 = 51;
                                var4 = var9[var4];
                                var4 = var5.bind(var6)(var4);
                                var6 = var4.HTTP;
                                var5 = var6.del;
                                var4 = {
                                    'url': null,
                                    'oldFormErrors': true,
                                    'rejectWithError': false
                                };
                                var10 = _closure1_slot28;
                                var9 = var10.MESSAGE;
                                var8 = _closure2_slot0;
                                var7 = _closure2_slot1;
                                var7 = var9.bind(var10)(var8, var7);
                                var4.url = var7;
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.then;
                                var3 = function() { // Environment: var3
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var3 = var4.bind(var5)(var3);
                                _fun54212_ip = 186;
                                continue _fun54212;
                            case 177:
                                return var1;
                            case 180:
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                            case 186:
                                var1 = undefined;
                                return var1;
                            case 191:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.deleteMessage = var7;
    var7 = function arg0() {
        _fun54216: for (var _fun54216_ip = 0;;) switch (_fun54216_ip) {
            case 0:
                var0 = arg0;
                var4 = this;
                var2 = var0.loggingName;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun54216_ip = 94;
                    continue _fun54216
                }
            case 18:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 31;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                var3 = var5.trackWithMetadata;
                var1 = _closure1_slot27;
                var2 = var1.AUTOMATED_MESSAGE_DISMISSED;
                var1 = {};
                var6 = var0.loggingName;
                var1.message_name = var6;
                var6 = var0.author;
                var6 = var6.username;
                var1.message_author = var6;
                var1 = var3.bind(var5)(var2, var1);
            case 94:
                var3 = var4.deleteMessage;
                var2 = var0.channel_id;
                var1 = var0.id;
                var0 = true;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.dismissAutomatedMessage = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 46;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MESSAGE_REVEAL';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.messageId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.revealMessage = var7;
    var7 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54220: for (var _fun54220_ip = 0;;) switch (_fun54220_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54220_ip = 456;
                            continue _fun54220
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 51;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'failImmediatelyWhenRateLimited': true,
                            'rejectWithError': false
                        };
                        var8 = _closure1_slot28;
                        var7 = var8.MESSAGE_CROSSPOST;
                        var6 = _closure2_slot0;
                        var4 = _closure2_slot1;
                        var4 = var7.bind(var8)(var6, var4);
                        var1.url = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 102);
                    case 100:
                        return var1;
                    case 102:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54220_ip = 111;
                            continue _fun54220
                        }
                    case 108: // try_end0
                        return var1;
                    case 111:
                        return var1;
                    case 114: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var5 = var1;
                        var2 = var1.status;
                        var1 = 429;
                        if (!(var1 !== var2)) {
                            _fun54220_ip = 198;
                            continue _fun54220
                        }
                    case 134:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 44;
                        var2 = var7[var1];
                        var4 = undefined;
                        var2 = var6.bind(var4)(var2);
                        var3 = var2.intl;
                        var2 = var3.string;
                        var1 = var7[var1];
                        var1 = var6.bind(var4)(var1);
                        var1 = var1.t;
                        var1 = var1.z2gyNF;
                        var6 = var2.bind(var3)(var1);
                        _fun54220_ip = 305;
                        continue _fun54220;
                    case 198:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 44;
                        var3 = var8[var1];
                        var2 = undefined;
                        var3 = var7.bind(var2)(var3);
                        var4 = var3.intl;
                        var3 = var4.formatToPlainString;
                        var1 = var8[var1];
                        var1 = var7.bind(var2)(var1);
                        var1 = var1.t;
                        var2 = var1["77cuqz"];
                        var1 = {};
                        var7 = global;
                        var8 = var7.Math;
                        var7 = var8.floor;
                        var5 = var5.body;
                        var9 = var5.retry_after;
                        var5 = 60;
                        var5 = var9 / var5;
                        var5 = var7.bind(var8)(var5);
                        var1.retryAfter = var5;
                        var6 = var3.bind(var4)(var2, var1);
                    case 305:
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 84;
                        var2 = var9[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 44;
                        var7 = var9[var5];
                        var7 = var8.bind(var1)(var7);
                        var11 = var7.intl;
                        var10 = var11.string;
                        var7 = var9[var5];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.Vd1hs6;
                        var7 = var10.bind(var11)(var7);
                        var2.title = var7;
                        var2.body = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.BddRzS;
                        var5 = var6.bind(var7)(var5);
                        var2.confirmText = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 456:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.crosspostMessage = var7;
    var1.trackInvite = var6;
    var _closure1_slot54 = var1;
    var3 = 85;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/MessageActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 3474, 6547, 6548, 6549, 6550, 6552, 4268, 5598, 3714, 1216, 1372, 6553, 3323, 4249, 3091, 3610, 3947, 6555, 1621, 660, 6558, 6510, 1346, 27, 3, 3322, 3327, 4302, 6559, 6560, 3343, 6561, 5242, 5236, 5265, 3324, 3333, 6562, 3348, 795, 1234, 1684, 806, 6563, 3459, 6564, 4256, 507, 3971, 5648, 14, 4380, 4250, 21, 1646, 1665, 4366, 4253, 6565, 6566, 6569, 6570, 3109, 5593, 1384, 6571, 6629, 4301, 6633, 4006, 3508, 3504, 6639, 6640, 6656, 667, 6543, 1645, 6487, 3206, 4002, 2]);