// modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var5 = function arg0() {
        _fun65468: for (var _fun65468_ip = 0;;) switch (_fun65468_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var1 = var3 == var2;
                var0 = null;
                if (var1) {
                    _fun65468_ip = 171;
                    continue _fun65468
                }
            case 17:
                var1 = {};
                var4 = var2.start;
                var1.start = var4;
                var4 = var2.end;
                var1.end = var4;
                var4 = var2.frequency;
                var1.frequency = var4;
                var4 = var2.interval;
                var1.interval = var4;
                var4 = var2.byWeekday;
                var1.by_weekday = var4;
                var4 = var2.byNWeekday;
                var1.by_n_weekday = var4;
                var4 = var2.byMonth;
                var1.by_month = var4;
                var4 = var2.byMonthDay;
                var5 = var3 == var4;
                var6 = undefined;
                if (var5) {
                    _fun65468_ip = 112;
                    continue _fun65468
                }
            case 107:
                var6 = var4.length;
            case 112:
                var7 = var3 != var6;
                var5 = 0;
                var4 = 0;
                if (!var7) {
                    _fun65468_ip = 126;
                    continue _fun65468
                }
            case 123:
                var4 = var6;
            case 126:
                var4 = var4 > var5;
                var3 = null;
                if (!var4) {
                    _fun65468_ip = 141;
                    continue _fun65468
                }
            case 135:
                var3 = var2.byMonthDay;
            case 141:
                var1.by_month_day = var3;
                var3 = var2.byYearDay;
                var1.by_year_day = var3;
                var2 = var2.count;
                var1.count = var2;
                var0 = var1;
            case 171:
                return var0;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function arg0() {
        _fun65469: for (var _fun65469_ip = 0;;) switch (_fun65469_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var1 = var3 == var2;
                var0 = null;
                if (var1) {
                    _fun65469_ip = 216;
                    continue _fun65469
                }
            case 17:
                var1 = {};
                var4 = global;
                var7 = var4.Date;
                var8 = var2.start;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var5 = new var9[var7](var8, var7);
                var6 = var5 instanceof Object ? var5 : var6;
                var5 = var6.toISOString;
                var5 = var5.bind(var6)();
                var1.start = var5;
                var5 = var2.end;
                var5 = var3 != var5;
                var3 = null;
                if (!var5) {
                    _fun65469_ip = 121;
                    continue _fun65469
                }
            case 80:
                var6 = var4.Date;
                var8 = var2.end;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var5 = var4 instanceof Object ? var4 : var5;
                var4 = var5.toISOString;
                var3 = var4.bind(var5)();
            case 121:
                var1.end = var3;
                var3 = var2.frequency;
                var1.frequency = var3;
                var3 = var2.interval;
                var1.interval = var3;
                var3 = var2.by_weekday;
                var1.byWeekday = var3;
                var3 = var2.by_n_weekday;
                var1.byNWeekday = var3;
                var3 = var2.by_month;
                var1.byMonth = var3;
                var3 = var2.by_month_day;
                var1.byMonthDay = var3;
                var3 = var2.by_year_day;
                var1.byYearDay = var3;
                var2 = var2.count;
                var1.count = var2;
                var0 = var1;
            case 216:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = var1.eventExceptionId;
            var0.event_exception_id = var2;
            var2 = var1.eventId;
            var0.event_id = var2;
            var2 = var1.guildId;
            var0.guild_id = var2;
            var2 = var1.scheduledStartTime;
            var0.scheduled_start_time = var2;
            var2 = var1.scheduledEndTime;
            var0.scheduled_end_time = var2;
            var1 = var1.isCanceled;
            var0.is_canceled = var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot9 = var0;
    var3 = function arg0() {
        _fun65472: for (var _fun65472_ip = 0;;) switch (_fun65472_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun65472_ip = 20;
                    continue _fun65472
                }
            case 12:
                var1 = 'id';
                var0 = var1 in var2;
            case 20:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var6);
    var0 = 0;
    var7 = var9[var0];
    var6 = arg2;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var7 = var6.GuildScheduledEventEntityTypes;
    var _closure1_slot3 = var7;
    var7 = var6.GuildScheduledEventStatus;
    var _closure1_slot4 = var7;
    var7 = var6.GuildScheduledEventPrivacyLevel;
    var _closure1_slot5 = var7;
    var6 = var6.FAKE_EVENT_ID;
    var _closure1_slot6 = var6;
    var6 = {};
    var7 = 'ChannelSelector';
    var6.CHANNEL_SELECTOR = var7;
    var7 = 'Details';
    var6.DETAILS = var7;
    var7 = 'Preview';
    var6.PREVIEW = var7;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.EditGuildEventScreens = var6;
    var6 = function arg0() {
        _fun65473: for (var _fun65473_ip = 0;;) switch (_fun65473_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.Boolean;
                var0 = null;
                var4 = var0 == var3;
                var1 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun65473_ip = 29;
                    continue _fun65473
                }
            case 24:
                var0 = var3.id;
            case 29:
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var2.isEditingEvent = var6;
    var2.recurrenceRuleToServer = var5;
    var2.recurrenceRuleFromServer = var4;
    var2.isExistingGuildEvent = var3;
    var3 = function arg0, arg1, arg2() {
        _fun65474: for (var _fun65474_ip = 0;;) switch (_fun65474_ip) {
            case 0:
                var0 = arg0;
                var13 = arg2;
                var11 = var0.name;
                var12 = var0.description;
                var10 = var0.privacyLevel;
                var1 = var0.channelId;
                var9 = var0.scheduledStartTime;
                var8 = var0.scheduledEndTime;
                var4 = var0.entityType;
                var7 = var0.entityMetadata;
                var6 = var0.image;
                var5 = var0.recurrenceRule;
                var3 = var0.eventExceptions;
                var0 = {};
                var2 = null;
                if (!(var2 == var13)) {
                    _fun65474_ip = 84;
                    continue _fun65474
                }
            case 77:
                var13 = _closure1_slot6;
            case 84:
                var0.id = var13;
                var0.name = var11;
                var13 = var2 != var12;
                var11 = null;
                if (!var13) {
                    _fun65474_ip = 104;
                    continue _fun65474
                }
            case 101:
                var11 = var12;
            case 104:
                var0.description = var11;
                var0.privacy_level = var10;
                var0.scheduled_start_time = var9;
                var0.scheduled_end_time = var8;
                var0.entity_type = var4;
                var8 = var2 != var7;
                var4 = null;
                if (!var8) {
                    _fun65474_ip = 140;
                    continue _fun65474
                }
            case 137:
                var4 = var7;
            case 140:
                var0.entity_metadata = var4;
                var7 = var2 != var6;
                var2 = undefined;
                var4 = undefined;
                if (!var7) {
                    _fun65474_ip = 159;
                    continue _fun65474
                }
            case 156:
                var4 = var6;
            case 159:
                var0.image = var4;
                var0.channel_id = var1;
                var1 = arg1;
                var0.guild_id = var1;
                var6 = _closure1_slot2;
                var4 = var6.getId;
                var4 = var4.bind(var6)();
                var0.creator_id = var4;
                var4 = _closure1_slot4;
                var4 = var4.SCHEDULED;
                var0.status = var4;
                var4 = _closure1_slot7;
                var4 = var4.bind(var2)(var5);
                var0.recurrence_rule = var4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var2)(var3);
                var0.guild_scheduled_event_exceptions = var1;
                return var0;
        }
    };
    var2.convertToFakeGuildEvent = var3;
    var1 = function arg0, arg1() {
        _fun65475: for (var _fun65475_ip = 0;;) switch (_fun65475_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var0 = {};
                var1 = null;
                var2 = var1 == var4;
                var5 = undefined;
                var7 = undefined;
                if (var2) {
                    _fun65475_ip = 26;
                    continue _fun65475
                }
            case 21:
                var7 = var4.name;
            case 26:
                var8 = var1 != var7;
                var2 = '';
                var3 = var2;
                if (!var8) {
                    _fun65475_ip = 43;
                    continue _fun65475
                }
            case 40:
                var3 = var7;
            case 43:
                var0.name = var3;
                var7 = var1 == var4;
                var3 = undefined;
                if (var7) {
                    _fun65475_ip = 62;
                    continue _fun65475
                }
            case 56:
                var3 = var4.privacy_level;
            case 62:
                if (!(var1 == var3)) {
                    _fun65475_ip = 79;
                    continue _fun65475
                }
            case 66:
                var7 = _closure1_slot5;
                var3 = var7.GUILD_ONLY;
            case 79:
                var0.privacyLevel = var3;
                var7 = var1 == var4;
                var3 = undefined;
                if (var7) {
                    _fun65475_ip = 98;
                    continue _fun65475
                }
            case 93:
                var3 = var4.description;
            case 98:
                var7 = var1 != var3;
                if (!var7) {
                    _fun65475_ip = 108;
                    continue _fun65475
                }
            case 105:
                var2 = var3;
            case 108:
                var0.description = var2;
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun65475_ip = 127;
                    continue _fun65475
                }
            case 121:
                var2 = var4.scheduled_start_time;
            case 127:
                if (!(var1 == var2)) {
                    _fun65475_ip = 174;
                    continue _fun65475
                }
            case 131:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 2;
                var3 = var8[var3];
                var7 = var7.bind(var5)(var3);
                var3 = var7.getInitialEventStartDate;
                var7 = var3.bind(var7)();
                var3 = var7.toISOString;
                var2 = var3.bind(var7)();
            case 174:
                var0.scheduledStartTime = var2;
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun65475_ip = 194;
                    continue _fun65475
                }
            case 188:
                var2 = var4.entity_type;
            case 194:
                if (!(var1 == var2)) {
                    _fun65475_ip = 211;
                    continue _fun65475
                }
            case 198:
                var3 = _closure1_slot3;
                var2 = var3.NONE;
            case 211:
                var0.entityType = var2;
                var2 = var1 == var4;
                var3 = undefined;
                if (var2) {
                    _fun65475_ip = 231;
                    continue _fun65475
                }
            case 225:
                var3 = var4.entity_metadata;
            case 231:
                var7 = var1 != var3;
                var2 = undefined;
                if (!var7) {
                    _fun65475_ip = 243;
                    continue _fun65475
                }
            case 240:
                var2 = var3;
            case 243:
                var0.entityMetadata = var2;
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun65475_ip = 262;
                    continue _fun65475
                }
            case 257:
                var2 = var4.channel_id;
            case 262:
                var0.channelId = var2;
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun65475_ip = 281;
                    continue _fun65475
                }
            case 275:
                var2 = var4.creator_id;
            case 281:
                var0.creatorId = var2;
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun65475_ip = 301;
                    continue _fun65475
                }
            case 295:
                var2 = var4.image;
            case 301:
                var0.image = var2;
                var3 = var1 == var4;
                var2 = undefined;
                if (var3) {
                    _fun65475_ip = 321;
                    continue _fun65475
                }
            case 315:
                var2 = var4.scheduled_end_time;
            case 321:
                var0.scheduledEndTime = var2;
                var7 = _closure1_slot8;
                var8 = var1 == var4;
                var3 = undefined;
                if (var8) {
                    _fun65475_ip = 348;
                    continue _fun65475
                }
            case 342:
                var3 = var4.recurrence_rule;
            case 348:
                var3 = var7.bind(var5)(var3);
                var0.recurrenceRule = var3;
                var3 = var1 == var4;
                var8 = undefined;
                if (var3) {
                    _fun65475_ip = 373;
                    continue _fun65475
                }
            case 367:
                var8 = var4.guild_scheduled_event_exceptions;
            case 373:
                if (!(var1 == var8)) {
                    _fun65475_ip = 381;
                    continue _fun65475
                }
            case 377:
                var8 = new Array(0);
            case 381:
                var7 = var8.map;
                var3 = function(arg0) { // Environment: var3
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.event_exception_id;
                    var0.eventExceptionId = var2;
                    var2 = var1.event_id;
                    var0.eventId = var2;
                    var2 = var1.guild_id;
                    var0.guildId = var2;
                    var2 = var1.scheduled_start_time;
                    var0.scheduledStartTime = var2;
                    var2 = var1.scheduled_end_time;
                    var0.scheduledEndTime = var2;
                    var1 = var1.is_canceled;
                    var0.isCanceled = var1;
                    return var0;
                };
                var3 = var7.bind(var8)(var3);
                var0.eventExceptions = var3;
                var3 = _closure1_slot10;
                var3 = var3.bind(var5)(var4);
                if (!var3) {
                    _fun65475_ip = 444;
                    continue _fun65475
                }
            case 415:
                var3 = var1 == var4;
                var7 = undefined;
                if (var3) {
                    _fun65475_ip = 430;
                    continue _fun65475
                }
            case 424:
                var7 = var4.entity_type;
            case 430:
                var3 = _closure1_slot3;
                var3 = var3.EXTERNAL;
                if (!(var7 !== var3)) {
                    _fun65475_ip = 536;
                    continue _fun65475
                }
            case 444:
                var3 = var0.channelId;
                var3 = var1 == var3;
                if (!var3) {
                    _fun65475_ip = 460;
                    continue _fun65475
                }
            case 456:
                var3 = var1 != var6;
            case 460:
                if (!var3) {
                    _fun65475_ip = 583;
                    continue _fun65475
                }
            case 463:
                var3 = var6.id;
                var0.channelId = var3;
                var3 = var6.isGuildStageVoice;
                var3 = var3.bind(var6)();
                if (var3) {
                    _fun65475_ip = 518;
                    continue _fun65475
                }
            case 487:
                var3 = var6.isGuildVoice;
                var3 = var3.bind(var6)();
                if (!var3) {
                    _fun65475_ip = 583;
                    continue _fun65475
                }
            case 500:
                var3 = _closure1_slot3;
                var3 = var3.VOICE;
                var0.entityType = var3;
                _fun65475_ip = 583;
                continue _fun65475;
            case 518:
                var3 = _closure1_slot3;
                var3 = var3.STAGE_INSTANCE;
                var0.entityType = var3;
                _fun65475_ip = 583;
                continue _fun65475;
            case 536:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getLocationFromEvent;
                var2 = var2.bind(var3)(var4);
                if (!(var1 != var2)) {
                    _fun65475_ip = 583;
                    continue _fun65475
                }
            case 571:
                var1 = {};
                var1.location = var2;
                var0.entityMetadata = var1;
            case 583:
                return var0;
        }
    };
    var2.getInitialGuildEventData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 1378, 8083, 8102, 2]);