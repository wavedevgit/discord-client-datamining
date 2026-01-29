// modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function(arg0, arg1) { // Original name: openCreateOrEditGuildEventModal, environment: var1
        _fun65154: for (var _fun65154_ip = 0;;) switch (_fun65154_ip) {
            case 0:
                var1 = arg1;
                var7 = var1.guildEvent;
                var9 = var1.channel;
                var2 = var1.onClose;
                var _closure2_slot0 = var2;
                var6 = var1.recurrenceId;
                var5 = function() { // Original name: handleClose, environment: var0
                    _fun65155: for (var _fun65155_ip = 0;;) switch (_fun65155_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 10;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.popWithKey;
                            var1 = _closure1_slot12;
                            var1 = var2.bind(var3)(var1);
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun65155_ip = 61;
                                continue _fun65155
                            }
                        case 53:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)();
                        case 61:
                            return var0;
                    }
                };
                var2 = null;
                if (!(var2 == var6)) {
                    _fun65154_ip = 170;
                    continue _fun65154
                }
            case 46:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 14;
                var3 = var1[var3];
                var11 = undefined;
                var8 = var4.bind(var11)(var3);
                var3 = var8.hideAllActionSheets;
                var3 = var3.bind(var8)();
                var3 = 10;
                var3 = var1[var3];
                var8 = var4.bind(var11)(var3);
                var4 = var8.pushLazy;
                var10 = _closure1_slot0;
                var3 = 13;
                var3 = var1[var3];
                var10 = var10.bind(var11)(var3);
                var3 = 15;
                var3 = var1[var3];
                var1 = var1.paths;
                var3 = var10.bind(var11)(var3, var1);
                var1 = {};
                var10 = arg0;
                var1.guild = var10;
                var1.targetChannel = var9;
                var1.initialGuildEvent = var7;
                var1.onCloseModal = var5;
                var0 = _closure1_slot12;
                var0 = var4.bind(var8)(var3, var1, var0);
                _fun65154_ip = 291;
                continue _fun65154;
            case 170:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var4 = 11;
                var4 = var1[var4];
                var9 = undefined;
                var8 = var3.bind(var9)(var4);
                var4 = var2 != var7;
                var2 = 'recurrence editing requires a guild event';
                var2 = var8.bind(var9)(var4, var2);
                var2 = 10;
                var2 = var1[var2];
                var4 = var3.bind(var9)(var2);
                var3 = var4.pushLazy;
                var8 = _closure1_slot0;
                var2 = 13;
                var2 = var1[var2];
                var8 = var8.bind(var9)(var2);
                var2 = 12;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var8.bind(var9)(var2, var1);
                var1 = {};
                var1.guildEvent = var7;
                var1.recurrenceId = var6;
                var1.onCloseModal = var5;
                var0 = _closure1_slot12;
                var0 = var3.bind(var4)(var2, var1, var0);
            case 291:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot18 = var7;
    var6 = function(arg0, arg1, arg2) { // Original name: openStartGuildEventModal, environment: var1
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 14;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var3 = var5.hideAllActionSheets;
        var3 = var3.bind(var5)();
        var3 = 10;
        var3 = var2[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var6 = _closure1_slot0;
        var3 = 13;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 17;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = {};
        var6 = arg0;
        var2.event = var6;
        var6 = arg1;
        var2.recurrenceId = var6;
        var6 = arg2;
        var2.onCloseActionSheet = var6;
        var1 = _closure1_slot14;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var _closure1_slot19 = var6;
    var5 = function(arg0, arg1, arg2) { // Original name: openDeleteGuildEventActionSheet, environment: var1
        var3 = _closure1_slot4;
        var2 = var3.lazy;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var0 = _closure1_slot2;
            var1 = 13;
            var1 = var0[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = 18;
            var1 = var0[var1];
            var0 = var0.paths;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var2.bind(var3)(var0);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 19;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.openAlert;
        var2 = _closure1_slot17;
        var1 = {};
        var6 = arg0;
        var1.eventId = var6;
        var6 = arg1;
        var1.guildId = var6;
        var6 = arg2;
        var1.recurrenceId = var6;
        var2 = var2.bind(var0)(var5, var1);
        var1 = 'DeleteEventAlert';
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot20 = var5;
    var4 = function(arg0, arg1, arg2, arg3) { // Original name: updateRsvp, environment: var1
        var7 = arg3;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 20;
        var2 = var2[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var5 = var6.updateRsvp;
        var12 = arg0;
        var11 = arg1;
        var10 = arg2;
        var8 = function(arg0) { // Environment: var1
            _fun65160: for (var _fun65160_ip = 0;;) switch (_fun65160_ip) {
                case 0:
                    var1 = null;
                    var0 = arg0;
                    var3 = var1 != var0;
                    var0 = var3;
                    if (var0) {
                        _fun65160_ip = 39;
                        continue _fun65160
                    }
                case 15:
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot11;
                    var1 = var1.INTERESTED;
                    var0 = var2 === var1;
                case 39:
                    if (!var0) {
                        _fun65160_ip = 215;
                        continue _fun65160
                    }
                case 45:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var0 = var2[var0];
                    var5 = undefined;
                    var2 = var1.bind(var5)(var0);
                    var1 = var2.open;
                    var0 = {};
                    var4 = 'GUILD_EVENT_INTERESTED_NOTIFICATION';
                    if (!var3) {
                        _fun65160_ip = 93;
                        continue _fun65160
                    }
                case 87:
                    var4 = 'ERROR_OCCURRED_TRY_AGAIN';
                case 93:
                    var0.key = var4;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 22;
                    var8 = var10[var4];
                    var8 = var7.bind(var5)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var4 = var10[var4];
                    var4 = var7.bind(var5)(var4);
                    var7 = var4.t;
                    if (var3) {
                        _fun65160_ip = 159;
                        continue _fun65160
                    }
                case 144:
                    var4 = var7.osvXlf;
                    var4 = var8.bind(var9)(var4);
                    _fun65160_ip = 170;
                    continue _fun65160;
                case 159:
                    var7 = var7.fEptJP;
                    var4 = var8.bind(var9)(var7);
                case 170:
                    var0.content = var4;
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if (var3) {
                        _fun65160_ip = 194;
                        continue _fun65160
                    }
                case 185:
                    var3 = 24;
                    var3 = var7[var3];
                    _fun65160_ip = 201;
                    continue _fun65160;
                case 194:
                    var6 = 23;
                    var3 = var7[var6];
                case 201:
                    var3 = var4.bind(var5)(var3);
                    var0.icon = var3;
                    var0 = var1.bind(var2)(var0);
                case 215:
                    var0 = undefined;
                    return var0;
            }
        };
        var13 = var6;
        var9 = var7;
        var1 = var13[var5](var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var _closure1_slot21 = var4;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: handleGuildScheduledEventRsvp, environment: var1
        var7 = arg0;
        var6 = arg2;
        var4 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var4;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 25;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.handleRsvp;
        var1 = {};
        var1.eventId = var7;
        var7 = arg1;
        var1.recurrenceId = var7;
        var1.guildId = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: updateRsvp, environment: var5
            var5 = _closure1_slot21;
            var9 = _closure2_slot0;
            var7 = _closure2_slot1;
            var0 = undefined;
            var8 = arg1;
            var6 = arg3;
            var10 = undefined;
            var1 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var1.updateRsvp = var6;
        var5 = function(arg0, arg1) { // Original name: openRsvpPicker, environment: var5
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 14;
            var3 = var1[var0];
            var0 = undefined;
            var6 = var4.bind(var0)(var3);
            var5 = var6.openLazy;
            var3 = _closure1_slot0;
            var2 = 13;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 26;
            var2 = var1[var2];
            var1 = var1.paths;
            var10 = var3.bind(var0)(var2, var1);
            var3 = {};
            var1 = arg0;
            var3.event = var1;
            var1 = arg1;
            var3.recurrenceId = var1;
            var2 = _closure2_slot1;
            var3.guildId = var2;
            var1 = _closure2_slot2;
            var3.onRsvp = var1;
            var9 = 'GuildEventRsvpPickerActionSheet';
            var7 = 'stack';
            var11 = var6;
            var8 = var3;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var0;
        };
        var1.openRsvpPicker = var5;
        var1.onRsvp = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot22 = var3;
    var0 = function() { // Original name: _transitionToEventDetailsFromInvite, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun65166: for (var _fun65166_ip = 0;;) switch (_fun65166_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65166_ip = 147;
                            continue _fun65166
                        }
                    case 13:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var1);
                        var1 = var4.transitionToGuildFromEventInvite;
                        var1 = var1.bind(var4)(var6);
                        SaveGenerator(address = 53);
                    case 51:
                        return var1;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun65166_ip = 144;
                            continue _fun65166
                        }
                    case 59:
                        var5 = var6.channel_id;
                        var4 = null;
                        var4 = var4 != var5;
                        if (!var4) {
                            _fun65166_ip = 82;
                            continue _fun65166
                        }
                    case 73:
                        var5 = _closure1_slot9;
                        var4 = var5.bind(var2)(var6);
                    case 82:
                        if (var4) {
                            _fun65166_ip = 141;
                            continue _fun65166
                        }
                    case 85:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 32;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.openGuildEventDetails;
                        var3 = {};
                        var7 = var6.id;
                        var3.eventId = var7;
                        var3.event = var6;
                        var6 = arg1;
                        var3.recurrenceId = var6;
                        var3 = var4.bind(var5)(var3);
                    case 141:
                        return var2;
                    case 144:
                        return var1;
                    case 147:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var10[var0];
    var0 = undefined;
    var8 = var11.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var12 = var10[var8];
    var8 = arg3;
    var8 = var8.bind(var0)(var12);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var12 = var10[var8];
    var12 = var9.bind(var0)(var12);
    var13 = var12.isGuildEventEnded;
    var _closure1_slot8 = var13;
    var12 = var12.isGuildScheduledEventActive;
    var _closure1_slot9 = var12;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot10 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.GuildScheduledEventUserResponses;
    var _closure1_slot11 = var8;
    var8 = 7;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.CREATE_GUILD_EVENT_MODAL_KEY;
    var _closure1_slot12 = var11;
    var11 = var8.GUILD_EVENTS_LIST_ACTION_SHEET_KEY;
    var _closure1_slot13 = var11;
    var8 = var8.START_EVENT_MODAL_KEY;
    var _closure1_slot14 = var8;
    var8 = 8;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.InstantInviteSources;
    var _closure1_slot15 = var11;
    var8 = var8.Routes;
    var _closure1_slot16 = var8;
    var8 = 9;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.jsx;
    var _closure1_slot17 = var8;
    var8 = 42;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var2.openCreateOrEditGuildEventModal = var7;
    var7 = function(arg0) { // Original name: openGuildEventListActionSheet, environment: var1
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 14;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 13;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 16;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot13;
        var1 = {};
        var6 = arg0;
        var1.guild = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openGuildEventListActionSheet = var7;
    var7 = function() { // Original name: closeGuildEventListActionSheet, environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 14;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.hideActionSheet;
        var1 = _closure1_slot13;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.closeGuildEventListActionSheet = var7;
    var2.openStartGuildEventModal = var6;
    var2.openDeleteGuildEventActionSheet = var5;
    var2.updateRsvp = var4;
    var2.handleGuildScheduledEventRsvp = var3;
    var3 = function(arg0, arg1) { // Original name: openShareEvent, environment: var1
        _fun65169: for (var _fun65169_ip = 0;;) switch (_fun65169_ip) {
            case 0:
                var5 = arg0;
                var9 = arg1;
                var2 = _closure1_slot5;
                var1 = var2.getChannel;
                var0 = var5.channel_id;
                var3 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 == var3)) {
                    _fun65169_ip = 54;
                    continue _fun65169
                }
            case 34:
                var6 = _closure1_slot6;
                var2 = var6.getDefaultChannel;
                var1 = var5.guild_id;
                var3 = var2.bind(var6)(var1);
            case 54:
                if (!(var0 == var3)) {
                    _fun65169_ip = 182;
                    continue _fun65169
                }
            case 61:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 21;
                var1 = var11[var1];
                var8 = undefined;
                var6 = var10.bind(var8)(var1);
                var2 = var6.open;
                var1 = {};
                var7 = 'ERROR_OCCURRED_TRY_AGAIN';
                var1.key = var7;
                var14 = _closure1_slot0;
                var7 = 22;
                var12 = var11[var7];
                var12 = var14.bind(var8)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var7 = var11[var7];
                var7 = var14.bind(var8)(var7);
                var7 = var7.t;
                var7 = var7.fEptJP;
                var7 = var12.bind(var13)(var7);
                var1.content = var7;
                var7 = 23;
                var7 = var11[var7];
                var7 = var10.bind(var8)(var7);
                var1.icon = var7;
                var1 = var2.bind(var6)(var1);
                _fun65169_ip = 366;
                continue _fun65169;
            case 182:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var1 = var2[var1];
                var2 = undefined;
                var6 = var6.bind(var2)(var1);
                var1 = var6.isGuildEventInvitable;
                var6 = var1.bind(var6)(var5);
                if (var6) {
                    _fun65169_ip = 294;
                    continue _fun65169
                }
            case 218:
                var0 = var0 != var9;
                if (!var0) {
                    _fun65169_ip = 233;
                    continue _fun65169
                }
            case 225:
                var1 = '';
                var0 = var1 !== var9;
            case 233:
                if (!var0) {
                    _fun65169_ip = 366;
                    continue _fun65169
                }
            case 239:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 28;
                var0 = var7[var0];
                var8 = var1.bind(var2)(var0);
                var0 = var8.copy;
                var0 = var0.bind(var8)(var9);
                var0 = 29;
                var0 = var7[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.presentLinkCopied;
                var0 = var0.bind(var1)();
                _fun65169_ip = 366;
                continue _fun65169;
            case 294:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 30;
                var0 = var7[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.showInstantInviteActionSheet;
                var0 = {};
                var0.createInvite = var6;
                var5 = var5.id;
                var0.guildScheduledEventId = var5;
                var5 = 'stack';
                var0.stackingBehavior = var5;
                var4 = _closure1_slot15;
                var4 = var4.GUILD_SCHEDULED_EVENT;
                var0.source = var4;
                var0 = var1.bind(var2)(var3, var0);
            case 366:
                var0 = undefined;
                return var0;
        }
    };
    var2.openShareEvent = var3;
    var3 = function() { // Original name: transitionToEventDetailsFromInvite, environment: var1
        var0 = undefined;
        var3 = _closure1_slot23;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.transitionToEventDetailsFromInvite = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: showGuildEventModeratorActionSheet, environment: var1
        _fun65171: for (var _fun65171_ip = 0;;) switch (_fun65171_ip) {
            case 0:
                var8 = arg0;
                var2 = arg2;
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var2;
                var4 = var8.guild_id;
                var _closure2_slot2 = var4;
                var3 = _closure1_slot7;
                var0 = var3.getGuild;
                var11 = var0.bind(var3)(var4);
                var _closure2_slot3 = var11;
                var4 = _closure1_slot10;
                var3 = var4.isInterestedInEventRecurrence;
                var0 = var8.id;
                var12 = var3.bind(var4)(var0, var2);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 33;
                var3 = var3[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var4 = var6.getEventException;
                var3 = var8.id;
                var3 = var4.bind(var6)(var2, var3);
                var _closure2_slot4 = var3;
                var6 = null;
                var7 = var6 == var3;
                var4 = undefined;
                if (var7) {
                    _fun65171_ip = 127;
                    continue _fun65171
                }
            case 121:
                var4 = var3.is_canceled;
            case 127:
                var10 = var6 != var4;
                if (!var10) {
                    _fun65171_ip = 137;
                    continue _fun65171
                }
            case 134:
                var10 = var4;
            case 137:
                var4 = _closure1_slot9;
                var9 = var4.bind(var0)(var8);
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 34;
                var4 = var13[var4];
                var13 = var7.bind(var0)(var4);
                var7 = var13.getEventTimeData;
                var4 = var8.scheduled_start_time;
                var4 = var7.bind(var13)(var4);
                var13 = var4.withinStartWindow;
                var4 = new Array(0);
                var7 = null;
                if (var9) {
                    _fun65171_ip = 296;
                    continue _fun65171
                }
            case 198:
                var7 = null;
                if (var10) {
                    _fun65171_ip = 296;
                    continue _fun65171
                }
            case 203:
                var14 = {};
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 22;
                var17 = var19[var15];
                var17 = var16.bind(var0)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var19[var15];
                var15 = var16.bind(var0)(var15);
                var16 = var15.t;
                if (var12) {
                    _fun65171_ip = 267;
                    continue _fun65171
                }
            case 252:
                var15 = var16.FXixvH;
                var15 = var17.bind(var18)(var15);
                _fun65171_ip = 280;
                continue _fun65171;
            case 267:
                var16 = var16["7M5gaN"];
                var15 = var17.bind(var18)(var16);
            case 280:
                var14.label = var15;
                var15 = function() { // Original name: onPress, environment: var5
                    var4 = _closure1_slot22;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var14.onPress = var15;
                var7 = var14;
            case 296:
                if (!(var6 != var11)) {
                    _fun65171_ip = 1158;
                    continue _fun65171
                }
            case 303:
                var11 = arg1;
                if (!var11) {
                    _fun65171_ip = 1158;
                    continue _fun65171
                }
            case 312:
                var11 = _closure1_slot8;
                var11 = var11.bind(var0)(var8);
                if (var11) {
                    _fun65171_ip = 1158;
                    continue _fun65171
                }
            case 327:
                if (var9) {
                    _fun65171_ip = 435;
                    continue _fun65171
                }
            case 330:
                if (!var13) {
                    _fun65171_ip = 352;
                    continue _fun65171
                }
            case 333:
                if (var12) {
                    _fun65171_ip = 352;
                    continue _fun65171
                }
            case 336:
                if (!(var6 != var7)) {
                    _fun65171_ip = 435;
                    continue _fun65171
                }
            case 340:
                var11 = var4.push;
                var11 = var11.bind(var4)(var7);
                _fun65171_ip = 435;
                continue _fun65171;
            case 352:
                if (var10) {
                    _fun65171_ip = 435;
                    continue _fun65171
                }
            case 355:
                var14 = var4.push;
                var11 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 22;
                var16 = var19[var15];
                var16 = var18.bind(var0)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var0)(var15);
                var15 = var15.t;
                var15 = var15.cK1GGY;
                var15 = var16.bind(var17)(var15);
                var11.label = var15;
                var15 = function() { // Original name: onPress, environment: var5
                    var3 = _closure1_slot19;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var11.onPress = var15;
                var11 = var14.bind(var4)(var11);
            case 435:
                var11 = !var9;
                if (!var11) {
                    _fun65171_ip = 444;
                    continue _fun65171
                }
            case 441:
                var11 = var13;
            case 444:
                if (!var11) {
                    _fun65171_ip = 450;
                    continue _fun65171
                }
            case 447:
                var11 = !var12;
            case 450:
                if (var11) {
                    _fun65171_ip = 457;
                    continue _fun65171
                }
            case 453:
                var11 = var6 == var7;
            case 457:
                if (var11) {
                    _fun65171_ip = 470;
                    continue _fun65171
                }
            case 460:
                var11 = var4.push;
                var11 = var11.bind(var4)(var7);
            case 470:
                var11 = var6 == var2;
                if (var11) {
                    _fun65171_ip = 480;
                    continue _fun65171
                }
            case 477:
                var11 = var10;
            case 480:
                if (var11) {
                    _fun65171_ip = 565;
                    continue _fun65171
                }
            case 483:
                var12 = var4.push;
                var11 = {};
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 22;
                var14 = var17[var13];
                var14 = var16.bind(var0)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var0)(var13);
                var13 = var13.t;
                var13 = var13.wmVmXN;
                var13 = var14.bind(var15)(var13);
                var11.label = var13;
                var13 = function() { // Original name: onPress, environment: var5
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot3;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.guildEvent = var4;
                    var0 = _closure2_slot1;
                    var1.recurrenceId = var0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var11.onPress = var13;
                var11 = var12.bind(var4)(var11);
            case 565:
                if (var10) {
                    _fun65171_ip = 716;
                    continue _fun65171
                }
            case 571:
                var11 = var4.push;
                var10 = {};
                if (!(var6 == var2)) {
                    _fun65171_ip = 641;
                    continue _fun65171
                }
            case 582:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 22;
                var13 = var16[var12];
                var13 = var15.bind(var0)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var0)(var12);
                var12 = var12.t;
                var12 = var12.Rgy2dU;
                var12 = var13.bind(var14)(var12);
                _fun65171_ip = 698;
                continue _fun65171;
            case 641:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 22;
                var14 = var17[var13];
                var14 = var16.bind(var0)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var0)(var13);
                var13 = var13.t;
                var13 = var13.BW1Qoh;
                var12 = var14.bind(var15)(var13);
            case 698:
                var10.label = var12;
                var12 = function() { // Original name: onPress, environment: var5
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot3;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.guildEvent = var0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var10.onPress = var12;
                var10 = var11.bind(var4)(var10);
            case 716:
                if (var9) {
                    _fun65171_ip = 1069;
                    continue _fun65171
                }
            case 722:
                if (!(var6 != var2)) {
                    _fun65171_ip = 913;
                    continue _fun65171
                }
            case 729:
                if (!(var6 != var3)) {
                    _fun65171_ip = 742;
                    continue _fun65171
                }
            case 733:
                var3 = var3.is_canceled;
                if (var3) {
                    _fun65171_ip = 831;
                    continue _fun65171
                }
            case 742:
                var9 = var4.push;
                var3 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 22;
                var11 = var14[var10];
                var11 = var13.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var0)(var10);
                var10 = var10.t;
                var10 = var10.tqClly;
                var10 = var11.bind(var12)(var10);
                var3.label = var10;
                var10 = true;
                var3.isDestructive = var10;
                var10 = function() { // Original name: onPress, environment: var5
                    var4 = _closure1_slot20;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var2 = var1.guild_id;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var3.onPress = var10;
                var3 = var9.bind(var4)(var3);
                _fun65171_ip = 913;
                continue _fun65171;
            case 831:
                var9 = var4.push;
                var3 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 22;
                var11 = var14[var10];
                var11 = var13.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var0)(var10);
                var10 = var10.t;
                var10 = var10.b8606G;
                var10 = var11.bind(var12)(var10);
                var3.label = var10;
                var10 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 35;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var9 = _closure2_slot4;
                    var2 = _closure2_slot3;
                    var8 = var2.id;
                    var2 = _closure2_slot0;
                    var7 = var2.id;
                    var6 = _closure2_slot1;
                    var10 = undefined;
                    var1 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var3.onPress = var10;
                var3 = var9.bind(var4)(var3);
            case 913:
                var9 = var4.push;
                var3 = {};
                var10 = var8.recurrence_rule;
                if (!(var6 == var10)) {
                    _fun65171_ip = 987;
                    continue _fun65171
                }
            case 930:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 22;
                var11 = var14[var10];
                var11 = var13.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var0)(var10);
                var10 = var10.t;
                var10 = var10.B9sJLX;
                var10 = var11.bind(var12)(var10);
                _fun65171_ip = 1042;
                continue _fun65171;
            case 987:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 22;
                var12 = var15[var11];
                var12 = var14.bind(var0)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var0)(var11);
                var11 = var11.t;
                var11 = var11.wr33rW;
                var10 = var12.bind(var13)(var11);
            case 1042:
                var3.label = var10;
                var10 = true;
                var3.isDestructive = var10;
                var10 = function() { // Original name: onPress, environment: var5
                    var3 = _closure1_slot20;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var1 = var0.guild_id;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1, var0);
                    return var0;
                };
                var3.onPress = var10;
                var3 = var9.bind(var4)(var3);
                _fun65171_ip = 1172;
                continue _fun65171;
            case 1069:
                var9 = var4.push;
                var3 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 22;
                var11 = var14[var10];
                var11 = var13.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var0)(var10);
                var10 = var10.t;
                var10 = var10.qaYzPA;
                var10 = var11.bind(var12)(var10);
                var3.label = var10;
                var10 = true;
                var3.isDestructive = var10;
                var10 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.endEvent;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = var1.guild_id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var3.onPress = var10;
                var3 = var9.bind(var4)(var3);
                _fun65171_ip = 1172;
                continue _fun65171;
            case 1158:
                if (!(var6 != var7)) {
                    _fun65171_ip = 1172;
                    continue _fun65171
                }
            case 1162:
                var3 = var4.push;
                var3 = var3.bind(var4)(var7);
            case 1172:
                var7 = var4.push;
                var3 = {};
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = 22;
                var11 = var9[var10];
                var11 = var13.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var10];
                var9 = var13.bind(var0)(var9);
                var9 = var9.t;
                var9 = var9.IBA5wX;
                var9 = var11.bind(var12)(var9);
                var3.label = var9;
                var9 = true;
                var3.isDestructive = var9;
                var9 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showReportModalForGuildScheduledEvent;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3.onPress = var9;
                var3 = var7.bind(var4)(var3);
                var7 = var4.push;
                var3 = {};
                var9 = var8.recurrence_rule;
                if (!(var6 == var9)) {
                    _fun65171_ip = 1334;
                    continue _fun65171
                }
            case 1278:
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = var9[var10];
                var11 = var13.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var10];
                var9 = var13.bind(var0)(var9);
                var9 = var9.t;
                var9 = var9["9o+VKx"];
                var9 = var11.bind(var12)(var9);
                _fun65171_ip = 1388;
                continue _fun65171;
            case 1334:
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = var11[var10];
                var12 = var14.bind(var0)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var10];
                var11 = var14.bind(var0)(var11);
                var11 = var11.t;
                var11 = var11.AYnhB7;
                var9 = var12.bind(var13)(var11);
            case 1388:
                var3.label = var9;
                var9 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.copy;
                    var1 = global;
                    var5 = var1.location;
                    var8 = var5.protocol;
                    var5 = var1.location;
                    var7 = var5.host;
                    var10 = _closure1_slot16;
                    var9 = var10.GUILD_EVENT_DETAILS;
                    var6 = _closure2_slot2;
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = null;
                    var11 = var9.bind(var10)(var6, var5, var4);
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var15 = '';
                    var13 = '//';
                    var14 = var8;
                    var12 = var7;
                    var1 = var15[var5](var14, var13, var12, var11, var10);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3.onPress = var9;
                var3 = var7.bind(var4)(var3);
                if (!(var6 != var2)) {
                    _fun65171_ip = 1489;
                    continue _fun65171
                }
            case 1410:
                var7 = var4.push;
                var3 = {};
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = var9[var10];
                var11 = var13.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var10];
                var9 = var13.bind(var0)(var9);
                var9 = var9.t;
                var9 = var9.QLtDqP;
                var9 = var11.bind(var12)(var9);
                var3.label = var9;
                var9 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.copy;
                    var1 = global;
                    var5 = var1.location;
                    var8 = var5.protocol;
                    var5 = var1.location;
                    var7 = var5.host;
                    var10 = _closure1_slot16;
                    var9 = var10.GUILD_EVENT_DETAILS;
                    var6 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var4 = _closure2_slot1;
                    var11 = var9.bind(var10)(var6, var5, var4);
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var15 = '';
                    var13 = '//';
                    var14 = var8;
                    var12 = var7;
                    var1 = var15[var5](var14, var13, var12, var11, var10);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3.onPress = var9;
                var3 = var7.bind(var4)(var3);
            case 1489:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 37;
                var3 = var9[var3];
                var3 = var7.bind(var0)(var3);
                var7 = var3.DeveloperMode;
                var3 = var7.getSetting;
                var3 = var3.bind(var7)();
                if (!var3) {
                    _fun65171_ip = 1880;
                    continue _fun65171
                }
            case 1531:
                var7 = var4.push;
                var3 = {};
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = var9[var10];
                var11 = var13.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var10];
                var9 = var13.bind(var0)(var9);
                var9 = var9.t;
                var9 = var9.WZwPO4;
                var9 = var11.bind(var12)(var9);
                var3.label = var9;
                var9 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.copy;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3.onPress = var9;
                var3 = var7.bind(var4)(var3);
                if (!(var6 != var2)) {
                    _fun65171_ip = 1693;
                    continue _fun65171
                }
            case 1614:
                var3 = var4.push;
                var2 = {};
                var12 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = var7[var10];
                var9 = var12.bind(var0)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var7 = var7[var10];
                var7 = var12.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.NZRGQo;
                var7 = var9.bind(var11)(var7);
                var2.label = var7;
                var7 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.copy;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2.onPress = var7;
                var2 = var3.bind(var4)(var2);
            case 1693:
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 38;
                var2 = var11[var2];
                var7 = var9.bind(var0)(var2);
                var3 = var7.getCurrentConfig;
                var2 = {};
                var12 = 'showGuildEventModeratorActionSheet';
                var2.location = var12;
                var2 = var3.bind(var7)(var2);
                var2 = var2.tidaWebformEnabled;
                var7 = _closure1_slot0;
                var3 = 39;
                var3 = var11[var3];
                var7 = var7.bind(var0)(var3);
                var3 = var7.getWindowDimensions;
                var3 = var3.bind(var7)();
                var7 = var3.width;
                var3 = 40;
                var3 = var11[var3];
                var3 = var9.bind(var0)(var3);
                var3 = var3.bind(var0)(var8, var7);
                var _closure2_slot5 = var3;
                if (!var2) {
                    _fun65171_ip = 1800;
                    continue _fun65171
                }
            case 1796:
                var2 = var6 != var3;
            case 1800:
                if (!var2) {
                    _fun65171_ip = 1880;
                    continue _fun65171
                }
            case 1803:
                var3 = var4.push;
                var2 = {};
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var10];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6["8xHmxo"];
                var6 = var7.bind(var8)(var6);
                var2.label = var6;
                var5 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 28;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.copy;
                    var1 = _closure2_slot5;
                    var1 = var4.bind(var5)(var1);
                    var1 = 29;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var2.onPress = var5;
                var2 = var3.bind(var4)(var2);
            case 1880:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 41;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.showSimpleActionSheet;
                var1 = {
                    'key': 'GuildEvent',
                    'stackingBehavior': 'stack'
                };
                var1.options = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.showGuildEventModeratorActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1372, 1662, 1410, 3293, 1378, 8056, 660, 33, 4518, 44, 8057, 1307, 3237, 8081, 8143, 8273, 8285, 3982, 8060, 3107, 1234, 7472, 8137, 8063, 8286, 8124, 5246, 3106, 8287, 5856, 8144, 8047, 8043, 8357, 6451, 1348, 8358, 1464, 8132, 7689, 2]);