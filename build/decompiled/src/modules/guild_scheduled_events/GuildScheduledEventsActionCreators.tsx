// modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx
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
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.ENTITY_TYPES_REQUIRED_CHANNEL_ID;
    var _closure1_slot6 = var6;
    var6 = var1.ENTITY_TYPES_REQUIRED_ENTITY_METADATA;
    var _closure1_slot7 = var6;
    var6 = var1.GuildScheduledEventStatus;
    var _closure1_slot8 = var6;
    var1 = var1.MAX_RSVP_USER_DISPLAY_COUNT;
    var _closure1_slot9 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot10 = var6;
    var1 = var1.Routes;
    var _closure1_slot11 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var7 = _closure1_slot10;
        var6 = var7.GUILD_EVENT;
        var5 = arg1;
        var3 = arg0;
        var3 = var6.bind(var7)(var5, var3);
        var0.url = var3;
        var3 = {};
        var4 = _closure1_slot8;
        var4 = var4.ACTIVE;
        var3.status = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.startEvent = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var7 = _closure1_slot10;
        var6 = var7.GUILD_EVENT;
        var5 = arg1;
        var3 = arg0;
        var3 = var6.bind(var7)(var5, var3);
        var0.url = var3;
        var3 = {};
        var4 = _closure1_slot8;
        var4 = var4.COMPLETED;
        var3.status = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.endEvent = var6;
    var6 = function arg0, arg1() {
        var6 = arg1;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 6;
        var2 = var4[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.selectVoiceChannel;
        var2 = var2.bind(var3)(var6);
        var3 = _closure1_slot0;
        var2 = 7;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.transitionTo;
        var5 = _closure1_slot11;
        var4 = var5.CHANNEL;
        var1 = arg0;
        var1 = var4.bind(var5)(var1, var6);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.joinVoiceEvent = var6;
    var6 = function arg0, arg1, arg2() {
        _fun65504: for (var _fun65504_ip = 0;;) switch (_fun65504_ip) {
            case 0:
                var0 = arg1;
                var3 = _closure1_slot6;
                var2 = var3.has;
                var1 = var0.entityType;
                var1 = var2.bind(var3)(var1);
                var5 = null;
                var2 = null;
                if (!var1) {
                    _fun65504_ip = 38;
                    continue _fun65504
                }
            case 33:
                var2 = var0.channelId;
            case 38:
                var6 = _closure1_slot7;
                var3 = var6.has;
                var1 = var0.entityType;
                var3 = var3.bind(var6)(var1);
                var1 = null;
                if (!var3) {
                    _fun65504_ip = 69;
                    continue _fun65504
                }
            case 63:
                var1 = var0.entityMetadata;
            case 69:
                var3 = var0.image;
                if (!(var5 != var3)) {
                    _fun65504_ip = 117;
                    continue _fun65504
                }
            case 79:
                var6 = /^data:/;
                var5 = var6.test;
                var3 = var0.image;
                var6 = var5.bind(var6)(var3);
                var3 = false;
                var5 = undefined;
                if (!(var3 !== var6)) {
                    _fun65504_ip = 123;
                    continue _fun65504
                }
            case 117:
                var5 = var0.image;
            case 123:
                var3 = {};
                var6 = var0.name;
                var3.name = var6;
                var6 = var0.description;
                var3.description = var6;
                var3.image = var5;
                var5 = var0.privacyLevel;
                var3.privacy_level = var5;
                var5 = var0.scheduledStartTime;
                var3.scheduled_start_time = var5;
                var5 = var0.scheduledEndTime;
                var3.scheduled_end_time = var5;
                var5 = var0.entityType;
                var3.entity_type = var5;
                var3.channel_id = var2;
                var3.entity_metadata = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var6 = var5[var1];
                var1 = undefined;
                var7 = var2.bind(var1)(var6);
                var6 = var7.recurrenceRuleToServer;
                var0 = var0.recurrenceRule;
                var0 = var6.bind(var7)(var0);
                var3.recurrence_rule = var0;
                var0 = 5;
                var0 = var5[var0];
                var0 = var2.bind(var1)(var0);
                var2 = var0.HTTP;
                var1 = var2.patch;
                var0 = {};
                var7 = _closure1_slot10;
                var6 = var7.GUILD_EVENT;
                var5 = arg2;
                var4 = arg0;
                var4 = var6.bind(var7)(var5, var4);
                var0.url = var4;
                var0.body = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.saveEvent = var6;
    var6 = function arg0, arg1() {
        var0 = arg0;
        var3 = {};
        var1 = var0.name;
        var3.name = var1;
        var1 = var0.description;
        var3.description = var1;
        var1 = var0.image;
        var3.image = var1;
        var1 = var0.privacyLevel;
        var3.privacy_level = var1;
        var1 = var0.scheduledStartTime;
        var3.scheduled_start_time = var1;
        var1 = var0.scheduledEndTime;
        var3.scheduled_end_time = var1;
        var1 = var0.entityType;
        var3.entity_type = var1;
        var1 = var0.channelId;
        var3.channel_id = var1;
        var1 = var0.entityMetadata;
        var3.entity_metadata = var1;
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 8;
        var6 = var5[var1];
        var1 = undefined;
        var7 = var2.bind(var1)(var6);
        var6 = var7.recurrenceRuleToServer;
        var0 = var0.recurrenceRule;
        var0 = var6.bind(var7)(var0);
        var3.recurrence_rule = var0;
        var0 = 5;
        var0 = var5[var0];
        var0 = var2.bind(var1)(var0);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var6 = _closure1_slot10;
        var5 = var6.GUILD_EVENTS_FOR_GUILD;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var0.url = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.createGuildEvent = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65508: for (var _fun65508_ip = 0;;) switch (_fun65508_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65508_ip = 153;
                            continue _fun65508
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 9;
                        var1 = var4[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.httpGetWithCountryCodeQuery;
                        var1 = {};
                        var9 = _closure1_slot10;
                        var8 = var9.GUILD_EVENT;
                        var7 = _closure2_slot0;
                        var6 = _closure2_slot1;
                        var6 = var8.bind(var9)(var7, var6);
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 89);
                    case 87:
                        return var1;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun65508_ip = 150;
                            continue _fun65508
                        }
                    case 95:
                        var2 = var1.body;
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 10;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'FETCH_GUILD_EVENT';
                        var3.type = var6;
                        var3.guildScheduledEvent = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 150:
                        return var1;
                    case 153:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchGuildEvent = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65511: for (var _fun65511_ip = 0;;) switch (_fun65511_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65511_ip = 154;
                            continue _fun65511
                        }
                    case 10:
                        var4 = {};
                        var5 = _closure1_slot10;
                        var2 = var5.GUILD_EVENTS_FOR_GUILD;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var5)(var1);
                        var4.url = var1;
                        var1 = false;
                        var4.rejectWithError = var1;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var1 = var5[var1];
                        var5 = undefined;
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.httpGetWithCountryCodeQuery;
                        var1 = var1.bind(var2)(var4);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun65511_ip = 151;
                            continue _fun65511
                        }
                    case 90:
                        var2 = var1.body;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 10;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'FETCH_GUILD_EVENTS_FOR_GUILD';
                        var3.type = var7;
                        var6 = _closure2_slot0;
                        var3.guildId = var6;
                        var3.guildScheduledEvents = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 151:
                        return var1;
                    case 154:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchGuildEventsForGuild = var6;
    var6 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65514: for (var _fun65514_ip = 0;;) switch (_fun65514_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65514_ip = 220;
                            continue _fun65514
                        }
                    case 10:
                        var4 = {};
                        var7 = _closure1_slot10;
                        var5 = var7.GUILD_EVENT_USER_COUNTS;
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot1;
                        var1 = var5.bind(var7)(var2, var1);
                        var4.url = var1;
                        var1 = {};
                        var2 = _closure2_slot2;
                        var1.guild_scheduled_event_exception_ids = var2;
                        var4.query = var1;
                        var1 = false;
                        var4.rejectWithError = var1;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 5;
                        var1 = var5[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var2 = var1.HTTP;
                        var1 = var2.get;
                        var1 = var1.bind(var2)(var4);
                        SaveGenerator(address = 111);
                    case 109:
                        return var1;
                    case 111:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun65514_ip = 217;
                            continue _fun65514
                        }
                    case 117:
                        var4 = var1.body;
                        var2 = {};
                        var7 = var4.guild_scheduled_event_count;
                        var2.eventCount = var7;
                        var4 = var4.guild_scheduled_event_exception_counts;
                        var2.recurrenceCounts = var4;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 10;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS';
                        var3.type = var7;
                        var7 = _closure2_slot0;
                        var3.guildId = var7;
                        var6 = _closure2_slot1;
                        var3.eventId = var6;
                        var3.counts = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 217:
                        return var1;
                    case 220:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchGuildEventUserCounts = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var7 = _closure1_slot10;
        var6 = var7.GUILD_EVENT;
        var5 = arg1;
        var3 = arg0;
        var3 = var6.bind(var7)(var5, var3);
        var0.url = var3;
        var3 = {};
        var4 = _closure1_slot8;
        var4 = var4.CANCELED;
        var3.status = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.cancelGuildEvent = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var6 = _closure1_slot10;
        var5 = var6.GUILD_EVENT;
        var4 = arg1;
        var3 = arg0;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.deleteGuildEvent = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65519: for (var _fun65519_ip = 0;;) switch (_fun65519_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65519_ip = 175;
                            continue _fun65519
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot10;
                        var6 = var6.USER_GUILD_EVENTS;
                        var1.url = var6;
                        var7 = {};
                        var9 = _closure2_slot0;
                        var8 = new Array(1);
                        var8[0] = var9;
                        var7.guild_ids = var8;
                        var1.query = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 103);
                    case 101:
                        return var1;
                    case 103:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun65519_ip = 172;
                            continue _fun65519
                        }
                    case 109:
                        var7 = var1.body;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS';
                        var3.type = var8;
                        var3.guildScheduledEventUsers = var7;
                        var6 = _closure2_slot0;
                        var3.guildId = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 172:
                        return var1;
                    case 175:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getGuildEventsForCurrentUser = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65522: for (var _fun65522_ip = 0;;) switch (_fun65522_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65522_ip = 292;
                            continue _fun65522
                        }
                    case 10:
                        var4 = undefined;
                        var5 = undefined;
                        var3 = _closure1_slot4;
                        var1 = var3.getId;
                        var5 = var1.bind(var3)();
                    case 31: // try_start_0
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var1 = var6[var1];
                        var7 = var3.bind(var4)(var1);
                        var3 = var7.dispatch;
                        var1 = {};
                        var8 = 'GUILD_SCHEDULED_EVENT_USER_ADD';
                        var1.type = var8;
                        var8 = var5;
                        var1.userId = var8;
                        var12 = _closure2_slot2;
                        var1.guildId = var12;
                        var11 = _closure2_slot0;
                        var1.guildEventId = var11;
                        var10 = _closure2_slot1;
                        var1.guildEventExceptionId = var10;
                        var8 = _closure2_slot3;
                        var1.response = var8;
                        var1 = var3.bind(var7)(var1);
                        var3 = _closure1_slot0;
                        var1 = 5;
                        var1 = var6[var1];
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.put;
                        var1 = {};
                        var9 = _closure1_slot10;
                        var7 = var9.USER_GUILD_EVENT;
                        var7 = var7.bind(var9)(var12, var11, var10);
                        var1.url = var7;
                        var7 = {};
                        var7.response = var8;
                        var1.body = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 192);
                    case 190:
                        return var1;
                    case 192:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun65522_ip = 201;
                            continue _fun65522
                        }
                    case 198: // try_end0
                        return var1;
                    case 201:
                        return var1;
                    case 204: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 10;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
                        var2.type = var6;
                        var2.userId = var5;
                        var6 = _closure2_slot2;
                        var2.guildId = var6;
                        var6 = _closure2_slot0;
                        var2.guildEventId = var6;
                        var6 = _closure2_slot1;
                        var2.guildEventExceptionId = var6;
                        var5 = _closure2_slot3;
                        var2.response = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 292:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.createRsvpForGuildEvent = var6;
    var6 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65525: for (var _fun65525_ip = 0;;) switch (_fun65525_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65525_ip = 327;
                            continue _fun65525
                        }
                    case 10:
                        var4 = undefined;
                        var7 = undefined;
                        var5 = undefined;
                        var3 = _closure1_slot4;
                        var1 = var3.getId;
                        var10 = var1.bind(var3)();
                        var7 = var10;
                        var9 = _closure1_slot5;
                        var8 = var9.getRsvp;
                        var3 = _closure2_slot0;
                        var1 = _closure2_slot1;
                        var3 = var8.bind(var9)(var3, var1, var10);
                        var5 = var3;
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun65525_ip = 76;
                            continue _fun65525
                        }
                    case 73:
                        return var4;
                    case 76: // try_start_0
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 10;
                        var1 = var8[var1];
                        var9 = var3.bind(var4)(var1);
                        var3 = var9.dispatch;
                        var1 = {};
                        var10 = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
                        var1.type = var10;
                        var10 = var7;
                        var1.userId = var10;
                        var13 = _closure2_slot2;
                        var1.guildId = var13;
                        var12 = _closure2_slot0;
                        var1.guildEventId = var12;
                        var11 = _closure2_slot1;
                        var1.guildEventExceptionId = var11;
                        var10 = var5;
                        var10 = var10.response;
                        var1.response = var10;
                        var1 = var3.bind(var9)(var1);
                        var3 = _closure1_slot0;
                        var1 = 5;
                        var1 = var8[var1];
                        var1 = var3.bind(var4)(var1);
                        var8 = var1.HTTP;
                        var3 = var8.del;
                        var1 = {};
                        var10 = _closure1_slot10;
                        var9 = var10.USER_GUILD_EVENT;
                        var9 = var9.bind(var10)(var13, var12, var11);
                        var1.url = var9;
                        var9 = false;
                        var1.rejectWithError = var9;
                        var1 = var3.bind(var8)(var1);
                        SaveGenerator(address = 230);
                    case 228:
                        return var1;
                    case 230:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun65525_ip = 239;
                            continue _fun65525
                        }
                    case 236: // try_end0
                        return var1;
                    case 239:
                        return var1;
                    case 242: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 10;
                        var2 = var8[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var8 = 'GUILD_SCHEDULED_EVENT_USER_ADD';
                        var2.type = var8;
                        var2.userId = var7;
                        var7 = _closure2_slot2;
                        var2.guildId = var7;
                        var7 = _closure2_slot0;
                        var2.guildEventId = var7;
                        var6 = _closure2_slot1;
                        var2.guildEventExceptionId = var6;
                        var5 = var5.response;
                        var2.response = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 327:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.deleteRsvpForGuildEvent = var6;
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
        var1 = this;
        var _closure2_slot5 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun65528: for (var _fun65528_ip = 0;;) switch (_fun65528_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65528_ip = 231;
                            continue _fun65528
                        }
                    case 10:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var3 = var3[var1];
                        var1 = undefined;
                        var8 = var5.bind(var1)(var3);
                        var7 = var8.getExistingRsvp;
                        var6 = _closure2_slot0;
                        var5 = _closure2_slot1;
                        var6 = var7.bind(var8)(var6, var5);
                        var5 = null;
                        if (!(var5 == var6)) {
                            _fun65528_ip = 149;
                            continue _fun65528
                        }
                    case 64: // try_start_0
                        var11 = _closure2_slot5;
                        var10 = var11.createRsvpForGuildEvent;
                        var15 = _closure2_slot0;
                        var14 = _closure2_slot1;
                        var13 = _closure2_slot2;
                        var12 = _closure2_slot3;
                        var16 = var11;
                        var6 = var16[var10](var15, var14, var13, var12, var11);
                        SaveGenerator(address = 101);
                    case 99:
                        return var6;
                    case 101:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun65528_ip = 125;
                            continue _fun65528
                        }
                    case 107:
                        var7 = _closure2_slot4;
                        if (!(var5 != var7)) {
                            _fun65528_ip = 123;
                            continue _fun65528
                        }
                    case 115:
                        var7 = _closure2_slot4;
                        var7 = var7.bind(var1)();
                    case 123: // try_end0
                        _fun65528_ip = 228;
                        continue _fun65528;
                    case 125:
                        return var6;
                    case 128: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var6 = _closure2_slot4;
                        if (!(var5 != var6)) {
                            _fun65528_ip = 228;
                            continue _fun65528
                        }
                    case 138:
                        var6 = _closure2_slot4;
                        var4 = var6.bind(var1)(var4);
                        _fun65528_ip = 228;
                        continue _fun65528;
                    case 149: // try_start_1
                        var9 = _closure2_slot5;
                        var8 = var9.deleteRsvpForGuildEvent;
                        var7 = _closure2_slot0;
                        var6 = _closure2_slot1;
                        var4 = _closure2_slot2;
                        var4 = var8.bind(var9)(var7, var6, var4);
                        SaveGenerator(address = 182);
                    case 180:
                        return var4;
                    case 182:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun65528_ip = 206;
                            continue _fun65528
                        }
                    case 188:
                        var6 = _closure2_slot4;
                        if (!(var5 != var6)) {
                            _fun65528_ip = 204;
                            continue _fun65528
                        }
                    case 196:
                        var6 = _closure2_slot4;
                        var6 = var6.bind(var1)();
                    case 204: // try_end1
                        _fun65528_ip = 228;
                        continue _fun65528;
                    case 206:
                        return var4;
                    case 209: // catch_target1
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure2_slot4;
                        if (!(var5 != var4)) {
                            _fun65528_ip = 228;
                            continue _fun65528
                        }
                    case 219:
                        var3 = _closure2_slot4;
                        var2 = var3.bind(var1)(var2);
                    case 228:
                        return var1;
                    case 231:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.updateRsvp = var6;
    var6 = function arg0, arg1, arg2() {
        _fun65529: for (var _fun65529_ip = 0;;) switch (_fun65529_ip) {
            case 0:
                var2 = arguments[3];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun65529_ip = 39;
                    continue _fun65529
                }
            case 32:
                var2 = _closure1_slot9;
            case 39:
                var _closure2_slot3 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun65531: for (var _fun65531_ip = 0;;) switch (_fun65531_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun65531_ip = 257;
                                    continue _fun65531
                                }
                            case 10:
                                var1 = _closure2_slot0;
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun65531_ip = 250;
                                    continue _fun65531
                                }
                            case 26:
                                var1 = _closure2_slot2;
                                if (!(var2 != var1)) {
                                    _fun65531_ip = 250;
                                    continue _fun65531
                                }
                            case 37:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 5;
                                var1 = var4[var1];
                                var4 = undefined;
                                var1 = var3.bind(var4)(var1);
                                var6 = var1.HTTP;
                                var3 = var6.get;
                                var1 = {};
                                var11 = _closure1_slot10;
                                var10 = var11.GUILD_EVENT_USERS;
                                var9 = _closure2_slot2;
                                var8 = _closure2_slot0;
                                var7 = _closure2_slot1;
                                var7 = var10.bind(var11)(var9, var8, var7);
                                var1.url = var7;
                                var7 = {
                                    'limit': null,
                                    'with_member': true,
                                    'upgrade_response_type': true
                                };
                                var8 = _closure2_slot3;
                                var7.limit = var8;
                                var1.query = var7;
                                var7 = false;
                                var1.rejectWithError = var7;
                                var1 = var3.bind(var6)(var1);
                                SaveGenerator(address = 151);
                            case 149:
                                return var1;
                            case 151:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun65531_ip = 247;
                                    continue _fun65531
                                }
                            case 157:
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 10;
                                var2 = var6[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var6 = 'GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS';
                                var2.type = var6;
                                var6 = _closure2_slot0;
                                var2.guildEventId = var6;
                                var6 = var1.body;
                                var2.guildScheduledEventUsers = var6;
                                var6 = _closure2_slot2;
                                var2.guildId = var6;
                                var5 = _closure2_slot1;
                                var2.guildEventExceptionId = var5;
                                var2 = var3.bind(var4)(var2);
                                var2 = var1.body;
                                var2 = var2.users;
                                return var2;
                            case 247:
                                return var1;
                            case 250:
                                var1 = new Array(0);
                                return var1;
                            case 257:
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
    var1.fetchUsersForGuildEvent = var6;
    var6 = function arg0, arg1, arg2() {
        var0 = arg0;
        var7 = var0.original_scheduled_start_time;
        var6 = var0.scheduled_start_time;
        var5 = var0.scheduled_end_time;
        var4 = var0.is_canceled;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var10 = _closure1_slot10;
        var9 = var10.GUILD_EVENT_EXCEPTIONS;
        var8 = arg1;
        var3 = arg2;
        var3 = var9.bind(var10)(var8, var3);
        var0.url = var3;
        var3 = {};
        var3.original_scheduled_start_time = var7;
        var3.scheduled_start_time = var6;
        var3.scheduled_end_time = var5;
        var3.is_canceled = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.createGuildEventException = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        var0 = arg0;
        var6 = var0.scheduled_start_time;
        var5 = var0.scheduled_end_time;
        var4 = var0.is_canceled;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var10 = _closure1_slot10;
        var9 = var10.GUILD_EVENT_EXCEPTION;
        var8 = arg1;
        var7 = arg2;
        var3 = arg3;
        var3 = var9.bind(var10)(var8, var7, var3);
        var0.url = var3;
        var3 = {};
        var3.scheduled_start_time = var6;
        var3.scheduled_end_time = var5;
        var3.is_canceled = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.updateGuildEventException = var6;
    var6 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var7 = _closure1_slot10;
        var6 = var7.GUILD_EVENT_EXCEPTION;
        var5 = arg0;
        var4 = arg1;
        var3 = arg2;
        var3 = var6.bind(var7)(var5, var4, var3);
        var0.url = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.deleteGuildEventException = var6;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun65535: for (var _fun65535_ip = 0;;) switch (_fun65535_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var6 = arg3;
                var2 = this;
                var0 = null;
                if (!(var0 == var6)) {
                    _fun65535_ip = 124;
                    continue _fun65535
                }
            case 21:
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var7.bind(var0)(var1);
                var0 = var1.extractTimestamp;
                var13 = var0.bind(var1)(var3);
                var1 = var2.createGuildEventException;
                var0 = {};
                var7 = global;
                var7 = var7.Date;
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var14 = var8;
                var7 = new var14[var7](var13, var12);
                var8 = var7 instanceof Object ? var7 : var8;
                var7 = var8.toISOString;
                var7 = var7.bind(var8)();
                var0.original_scheduled_start_time = var7;
                var7 = true;
                var0.is_canceled = var7;
                var0 = var1.bind(var2)(var0, var5, var4);
                return var0;
            case 124:
                var1 = var2.updateGuildEventException;
                var0 = {};
                var7 = var6.scheduled_start_time;
                var0.scheduled_start_time = var7;
                var6 = var6.scheduled_end_time;
                var0.scheduled_end_time = var6;
                var6 = true;
                var0.is_canceled = var6;
                var14 = var2;
                var13 = var0;
                var12 = var5;
                var11 = var4;
                var10 = var3;
                var0 = var14[var1](var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var1.deleteRecurrence = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 3336, 1378, 660, 507, 4232, 1220, 8129, 3363, 806, 8131, 21, 2]);