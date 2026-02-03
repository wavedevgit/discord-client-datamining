// modules/guild_scheduled_events/useGuildScheduledEvents.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var6 = _closure1_slot9;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var1 = _closure1_slot6;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot9;
            var1 = var2.getGuildScheduledEventsByIndex;
            var4 = _closure1_slot8;
            var3 = var4.GUILD_EVENT_UPCOMING;
            var0 = _closure2_slot0;
            var0 = var3.bind(var4)(var0);
            var2 = var1.bind(var2)(var0);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun64973: for (var _fun64973_ip = 0;;) switch (_fun64973_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.entity_type;
                        var2 = _closure1_slot11;
                        var2 = var2.NONE;
                        if (!(var3 !== var2)) {
                            _fun64973_ip = 107;
                            continue _fun64973
                        }
                    case 26:
                        var3 = var1.status;
                        var2 = _closure1_slot12;
                        var2 = var2.SCHEDULED;
                        if (!(var3 === var2)) {
                            _fun64973_ip = 107;
                            continue _fun64973
                        }
                    case 45:
                        var3 = var1.channel_id;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun64973_ip = 103;
                            continue _fun64973
                        }
                    case 56:
                        var3 = _closure1_slot4;
                        var2 = var3.getChannel;
                        var1 = var1.channel_id;
                        var3 = var2.bind(var3)(var1);
                        var2 = _closure1_slot6;
                        var1 = var2.can;
                        var0 = _closure1_slot14;
                        var0 = var0.VIEW_CHANNEL;
                        var0 = var1.bind(var2)(var0, var3);
                        return var0;
                    case 103:
                        var0 = true;
                        return var0;
                    case 107:
                        var0 = false;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot17 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var8 = var6[var4];
    var8 = var5.bind(var0)(var8);
    var9 = var8.isGuildScheduledEventActive;
    var _closure1_slot7 = var9;
    var8 = var8.StaticGuildEventIndexes;
    var _closure1_slot8 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot11 = var8;
    var4 = var4.GuildScheduledEventStatus;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.GuildFeatures;
    var _closure1_slot13 = var8;
    var4 = var4.Permissions;
    var _closure1_slot14 = var4;
    var4 = new Array(0);
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.Millis;
    var7 = var4.MINUTE;
    var4 = 15;
    var4 = var4 * var7;
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useGuildScheduledEvents.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        var5 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var7 = _closure1_slot5;
        var2 = new Array(4);
        var2[0] = var7;
        var7 = _closure1_slot9;
        var2[1] = var7;
        var7 = _closure1_slot6;
        var2[2] = var7;
        var1 = _closure1_slot4;
        var2[3] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun64975: for (var _fun64975_ip = 0;;) switch (_fun64975_ip) {
                case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var0);
                    var6 = null;
                    if (!(var6 != var0)) {
                        _fun64975_ip = 98;
                        continue _fun64975
                    }
                case 30:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuildScheduledEventsByIndex;
                    var5 = _closure2_slot1;
                    if (!(var6 == var5)) {
                        _fun64975_ip = 70;
                        continue _fun64975
                    }
                case 48:
                    var6 = _closure1_slot8;
                    var5 = var6.GUILD_EVENT_UPCOMING;
                    var0 = var0.id;
                    var0 = var5.bind(var6)(var0);
                    _fun64975_ip = 74;
                    continue _fun64975;
                case 70:
                    var0 = _closure2_slot1;
                case 74:
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun64976: for (var _fun64976_ip = 0;;) switch (_fun64976_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.channel_id;
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun64976_ip = 59;
                                    continue _fun64976
                                }
                            case 14:
                                var2 = _closure1_slot4;
                                var1 = var2.getChannel;
                                var3 = var1.bind(var2)(var3);
                                var2 = _closure1_slot6;
                                var1 = var2.can;
                                var0 = _closure1_slot14;
                                var0 = var0.VIEW_CHANNEL;
                                var0 = var1.bind(var2)(var0, var3);
                                return var0;
                            case 59:
                                var0 = true;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0);
                    _fun64975_ip = 102;
                    continue _fun64975;
                case 98:
                    var0 = _closure1_slot15;
                case 102:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var4;
    var4 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot9;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var1 = _closure1_slot6;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun64978: for (var _fun64978_ip = 0;;) switch (_fun64978_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getChannel;
                    var0 = _closure2_slot0;
                    var3 = var2.bind(var3)(var0);
                    var5 = _closure1_slot6;
                    var2 = var5.can;
                    var0 = _closure1_slot14;
                    var0 = var0.VIEW_CHANNEL;
                    var2 = var2.bind(var5)(var0, var3);
                    var0 = null;
                    if (var2) {
                        _fun64978_ip = 57;
                        continue _fun64978
                    }
                case 55:
                    return var0;
                case 57:
                    var5 = var0 == var3;
                    var2 = undefined;
                    if (var5) {
                        _fun64978_ip = 71;
                        continue _fun64978
                    }
                case 66:
                    var2 = var3.guild_id;
                case 71:
                    if (!(var0 != var2)) {
                        _fun64978_ip = 131;
                        continue _fun64978
                    }
                case 75:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuildScheduledEventsByIndex;
                    var5 = _closure1_slot8;
                    var4 = var5.CHANNEL_EVENT_ACTIVE;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var3 = var2.bind(var3)(var1);
                    var1 = var3.length;
                    var2 = 0;
                    var4 = var1 > var2;
                    var1 = null;
                    if (!var4) {
                        _fun64978_ip = 129;
                        continue _fun64978
                    }
                case 125:
                    var1 = var3[var2];
                case 129:
                    return var1;
                case 131:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useActiveEvent = var4;
    var4 = function arg0() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStoresArray;
        var3 = _closure1_slot9;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot9;
            var1 = var2.getGuildScheduledEventsForGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var5.bind(var6)(var4, var2, var3);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = global;
            var0 = var0.Map;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var5 = var2;
            var0 = new var5[var0](var4);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot0 = var0;
            var3 = _closure2_slot1;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun64982: for (var _fun64982_ip = 0;;) switch (_fun64982_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = var3.channel_id;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun64982_ip = 32;
                            continue _fun64982
                        }
                    case 14:
                        var1 = _closure3_slot0;
                        var0 = var1.set;
                        var0 = var0.bind(var1)(var2, var3);
                    case 32:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useActiveEventsByChannel = var4;
    var2.useGuildUpcomingEvents = var3;
    var3 = function arg0() {
        _fun64983: for (var _fun64983_ip = 0;;) switch (_fun64983_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot17;
                var0 = undefined;
                var10 = var2.bind(var0)(var3);
                var _closure2_slot1 = var10;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 10;
                var5 = var4[var2];
                var9 = var3.bind(var0)(var5);
                var8 = var9.useStateFromStoresObject;
                var5 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var5;
                var6 = function() { // Environment: var1
                    var1 = _closure1_slot10;
                    var0 = var1.getAllEventDismissals;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var8.bind(var9)(var7, var6);
                var6 = var4[var2];
                var8 = var3.bind(var0)(var6);
                var7 = var8.useStateFromStoresObject;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var1
                    var1 = _closure1_slot10;
                    var0 = var1.getAllUpcomingNoticeSeenTimes;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var7.bind(var8)(var6, var5);
                var5 = var4[var2];
                var13 = var3.bind(var0)(var5);
                var12 = var13.useStateFromStoresObject;
                var5 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var5;
                var6 = new Array(1);
                var6[0] = var10;
                var5 = function() { // Environment: var1
                    _fun64986: for (var _fun64986_ip = 0;;) switch (_fun64986_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun64986_ip = 40;
                                continue _fun64986
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var2 = var3.reduce;
                            var1 = function(arg0, arg1) { // Environment: var0
                                var1 = arg1;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 11;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var0 = var2.getNextRecurrenceIdInEvent;
                                var5 = var0.bind(var2)(var1);
                                var0 = {};
                                var6 = arg0;
                                var7 = var0;
                                var2 = copyDataProperties(var7, var6);
                                var2 = var1.id;
                                var4 = _closure1_slot9;
                                var3 = var4.isInterestedInEventRecurrence;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var1, var5);
                                var0[var2] = var1;
                                return var0;
                            };
                            var0 = {};
                            var0 = var2.bind(var3)(var1, var0);
                            _fun64986_ip = 42;
                            continue _fun64986;
                        case 40:
                            var0 = {};
                        case 42:
                            return var0;
                    }
                };
                var7 = var12.bind(var13)(var7, var5, var6);
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.useStateFromStores;
                var5 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2, var1);
                var6 = null;
                var1 = var6 != var2;
                if (!var1) {
                    _fun64983_ip = 232;
                    continue _fun64983
                }
            case 203:
                var5 = var2.features;
                var4 = var5.has;
                var3 = _closure1_slot13;
                var3 = var3.COMMUNITY;
                var3 = var4.bind(var5)(var3);
                var1 = !var3;
            case 232:
                if (!var1) {
                    _fun64983_ip = 261;
                    continue _fun64983
                }
            case 235:
                var4 = var2.features;
                var3 = var4.has;
                var2 = _closure1_slot13;
                var2 = var2.INTERNAL_EMPLOYEE_ONLY;
                var1 = var3.bind(var4)(var2);
            case 261:
                if (!(var6 != var10)) {
                    _fun64983_ip = 391;
                    continue _fun64983
                }
            case 268:
                if (!(var6 != var7)) {
                    _fun64983_ip = 391;
                    continue _fun64983
                }
            case 272:
                if (!var1) {
                    _fun64983_ip = 391;
                    continue _fun64983
                }
            case 275:
                var1 = var10.length;
                var5 = 0;
                var1 = var5 < var1;
                var4 = 12;
                if (!var1) {
                    _fun64983_ip = 391;
                    continue _fun64983
                }
            case 292:
                var2 = var10[var5];
                var1 = var2.id;
                var14 = var9[var1];
                var1 = var2.id;
                var13 = var8[var1];
                var1 = var2.id;
                var1 = var7[var1];
                var12 = var6 != var1;
                if (!var12) {
                    _fun64983_ip = 333;
                    continue _fun64983
                }
            case 330:
                var12 = var1;
            case 333:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getNextShownUpcomingEventNoticeType;
                var19 = var3;
                var18 = var2;
                var17 = var14;
                var16 = var13;
                var15 = var12;
                var1 = var19[var1](var18, var17, var16, var15, var14);
                if (!(var6 == var1)) {
                    _fun64983_ip = 393;
                    continue _fun64983
                }
            case 379:
                var5 = var5 + 1;
                var3 = var10.length;
                if (var5 < var3) {
                    _fun64983_ip = 292;
                    continue _fun64983
                }
            case 391:
                return var0;
            case 393:
                var0 = {};
                var0.upcomingEvent = var2;
                var0.noticeType = var1;
                return var0;
        }
    };
    var2.useGuildUpcomingEventsNotice = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot9;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var1 = _closure1_slot6;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot9;
            var1 = var2.getGuildScheduledEventsByIndex;
            var4 = _closure1_slot8;
            var3 = var4.GUILD_EVENT_ACTIVE;
            var0 = _closure2_slot0;
            var0 = var3.bind(var4)(var0);
            var2 = var1.bind(var2)(var0);
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                _fun64991: for (var _fun64991_ip = 0;;) switch (_fun64991_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.entity_type;
                        var2 = _closure1_slot11;
                        var2 = var2.NONE;
                        if (!(var3 !== var2)) {
                            _fun64991_ip = 102;
                            continue _fun64991
                        }
                    case 26:
                        var3 = _closure1_slot7;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var1);
                        if (!var2) {
                            _fun64991_ip = 102;
                            continue _fun64991
                        }
                    case 40:
                        var3 = var1.channel_id;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun64991_ip = 98;
                            continue _fun64991
                        }
                    case 51:
                        var3 = _closure1_slot4;
                        var2 = var3.getChannel;
                        var1 = var1.channel_id;
                        var3 = var2.bind(var3)(var1);
                        var2 = _closure1_slot6;
                        var1 = var2.can;
                        var0 = _closure1_slot14;
                        var0 = var0.VIEW_CHANNEL;
                        var0 = var1.bind(var2)(var0, var3);
                        return var0;
                    case 98:
                        var0 = true;
                        return var0;
                    case 102:
                        var0 = false;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGuildActiveEvent = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot9;
            var1 = var2.getGuildScheduledEventsByIndex;
            var4 = _closure1_slot8;
            var3 = var4.CHANNEL_EVENT_UPCOMING;
            var0 = _closure2_slot0;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGuildChannelScheduledEvents = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot9;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun64995: for (var _fun64995_ip = 0;;) switch (_fun64995_ip) {
                case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuildScheduledEventsByIndex;
                    var5 = _closure1_slot8;
                    var4 = var5.GUILD_EVENT_ACTIVE;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.find;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot4;
                        var1 = var2.getChannel;
                        var0 = arg0;
                        var0 = var0.channel_id;
                        var1 = var1.bind(var2)(var0);
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = null;
                    var4 = var0 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun64995_ip = 82;
                        continue _fun64995
                    }
                case 77:
                    var0 = var3.channel_id;
                case 82:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useFirstActiveEventChannel = var3;
    var1 = function arg0() {
        var7 = arg0;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot3;
        var4 = var3.useState;
        var1 = function() { // Environment: var0
            var0 = global;
            var1 = var0.Date;
            var0 = var1.now;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var4.bind(var3)(var1);
        var4 = _closure1_slot2;
        var6 = undefined;
        var1 = 2;
        var5 = var4.bind(var6)(var5, var1);
        var1 = 0;
        var1 = var5[var1];
        var4 = 1;
        var4 = var5[var4];
        var _closure2_slot1 = var4;
        var8 = var3.useEffect;
        var5 = function() { // Environment: var0
            var1 = global;
            var4 = var1.setInterval;
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = function() { // Environment: var0
                var2 = _closure2_slot1;
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var1 = var0.bind(var1)();
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var4.bind(var2)(var1, var3);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = global;
                var2 = var0.clearInterval;
                var1 = _closure3_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var4 = new Array(0);
        var4 = var8.bind(var3)(var5, var4);
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var4 = 10;
        var4 = var8[var4];
        var6 = var5.bind(var6)(var4);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot9;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            _fun65002: for (var _fun65002_ip = 0;;) switch (_fun65002_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun65002_ip = 52;
                        continue _fun65002
                    }
                case 13:
                    var2 = _closure1_slot9;
                    var1 = var2.getGuildScheduledEventsByIndex;
                    var4 = _closure1_slot8;
                    var3 = var4.CHANNEL_EVENT_UPCOMING;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    _fun65002_ip = 56;
                    continue _fun65002;
                case 52:
                    var0 = new Array(0);
                case 56:
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4, var1, var2);
        var _closure2_slot2 = var4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot2;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun65004: for (var _fun65004_ip = 0;;) switch (_fun65004_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 13;
                        var2 = var5[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var2);
                        var2 = var6.getEventSchedule;
                        var2 = var2.bind(var6)(var3);
                        var6 = var2.startTime;
                        var7 = var2.endTime;
                        var2 = 11;
                        var2 = var5[var2];
                        var5 = var4.bind(var1)(var2);
                        var4 = var5.getEventTimeData;
                        var2 = var6.toISOString;
                        var2 = var2.bind(var6)();
                        var6 = null;
                        var6 = var6 == var7;
                        if (var6) {
                            _fun65004_ip = 98;
                            continue _fun65004
                        }
                    case 88:
                        var6 = var7.toISOString;
                        var1 = var6.bind(var7)();
                    case 98:
                        var2 = var4.bind(var5)(var2, var1);
                        var1 = var2.withinStartWindow;
                        var2 = var2.diffMinutes;
                        var3 = var3.status;
                        var0 = _closure1_slot12;
                        var0 = var0.ACTIVE;
                        var0 = var3 !== var0;
                        if (!var0) {
                            _fun65004_ip = 141;
                            continue _fun65004
                        }
                    case 138:
                        var0 = var1;
                    case 141:
                        if (!var0) {
                            _fun65004_ip = 151;
                            continue _fun65004
                        }
                    case 144:
                        var1 = 15;
                        var0 = var2 < var1;
                    case 151:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useImminentUpcomingGuildEvents = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1372, 1410, 3091, 3334, 8081, 1378, 660, 667, 566, 8083, 8082, 8086, 2]);