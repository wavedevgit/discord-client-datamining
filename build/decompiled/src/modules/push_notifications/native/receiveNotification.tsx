// modules/push_notifications/native/receiveNotification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() { // Original name: onStageConnectionError, environment: var1
        var5 = _closure1_slot1;
        var6 = _closure1_slot3;
        var0 = 9;
        var1 = var6[var0];
        var0 = undefined;
        var3 = var5.bind(var0)(var1);
        var2 = var3.open;
        var1 = {};
        var7 = 'STAGE_DISCOVERY_CONNECTION_ERROR_GENERIC';
        var1.key = var7;
        var9 = _closure1_slot0;
        var4 = 10;
        var7 = var6[var4];
        var7 = var9.bind(var0)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var4 = var6[var4];
        var4 = var9.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4.ah3RLk;
        var4 = var7.bind(var8)(var4);
        var1.content = var4;
        var4 = 11;
        var4 = var6[var4];
        var4 = var5.bind(var0)(var4);
        var1.icon = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: waitForConnection, environment: var1
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var2 = _closure1_slot5;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: _connectToStage, environment: var1
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: _connectToStage2, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun118604: for (var _fun118604_ip = 0;;) switch (_fun118604_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118604_ip = 142;
                            continue _fun118604
                        }
                    case 10:
                        var5 = arg0;
                        var4 = arg1;
                        var1 = _closure1_slot16;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 33);
                    case 31:
                        return var1;
                    case 33:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun118604_ip = 139;
                            continue _fun118604
                        }
                    case 39: // try_start_0
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var7 = 13;
                        var6 = var6[var7];
                        var9 = var8.bind(var2)(var6);
                        var8 = var9.connectOrLurkStage;
                        var6 = var5;
                        var5 = var4;
                        var4 = true;
                        var4 = var8.bind(var9)(var6, var5, var4);
                        SaveGenerator(address = 84);
                    case 82:
                        return var4;
                    case 84:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun118604_ip = 123;
                            continue _fun118604
                        }
                    case 90:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var5 = var5[var7];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.navigateToStage;
                        var5 = null;
                        var5 = var6.bind(var7)(var4, var5);
                    case 121: // try_end0
                        _fun118604_ip = 136;
                        continue _fun118604;
                    case 123:
                        return var4;
                    case 126: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot15;
                        var3 = var3.bind(var2)();
                    case 136:
                        return var2;
                    case 139:
                        return var1;
                    case 142:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() { // Original name: _handleStageNotification, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun118607: for (var _fun118607_ip = 0;;) switch (_fun118607_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun118607_ip = 51;
                            continue _fun118607
                        }
                    case 10:
                        var4 = _closure1_slot17;
                        var3 = var1.guild_id;
                        var1 = var1.channel_id;
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3, var1);
                        SaveGenerator(address = 39);
                    case 37:
                        return var1;
                    case 39:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun118607_ip = 48;
                            continue _fun118607
                        }
                    case 45:
                        return var2;
                    case 48:
                        return var1;
                    case 51:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function() { // Original name: _handleGuildEventNotification, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun118610: for (var _fun118610_ip = 0;;) switch (_fun118610_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun118610_ip = 472;
                            continue _fun118610
                        }
                    case 13:
                        var4 = var1.guild_scheduled_event_entity_type;
                        var3 = _closure1_slot13;
                        var3 = var3.STAGE_INSTANCE;
                        if (!(var3 !== var4)) {
                            _fun118610_ip = 412;
                            continue _fun118610
                        }
                    case 41:
                        var3 = _closure1_slot13;
                        var3 = var3.VOICE;
                        if (!(var3 !== var4)) {
                            _fun118610_ip = 217;
                            continue _fun118610
                        }
                    case 58:
                        var3 = _closure1_slot13;
                        var3 = var3.EXTERNAL;
                        if (!(var3 === var4)) {
                            _fun118610_ip = 206;
                            continue _fun118610
                        }
                    case 75:
                        var6 = var1.guild_id;
                        var7 = var1.guild_scheduled_event_id;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var3 = 15;
                        var3 = var4[var3];
                        var4 = undefined;
                        var5 = var5.bind(var4)(var3);
                        var3 = var5.transitionToGuild;
                        var3 = var3.bind(var5)(var6);
                        var3 = _closure1_slot16;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 131);
                    case 129:
                        return var3;
                    case 131:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun118610_ip = 214;
                            continue _fun118610
                        }
                    case 137:
                        var6 = _closure1_slot6;
                        var5 = var6.getGuildScheduledEvent;
                        var8 = var5.bind(var6)(var7);
                        var5 = null;
                        if (!(var5 != var8)) {
                            _fun118610_ip = 211;
                            continue _fun118610
                        }
                    case 158:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var5 = 16;
                        var5 = var7[var5];
                        var7 = var6.bind(var4)(var5);
                        var6 = var7.openGuildEventDetails;
                        var5 = {};
                        var9 = var8.id;
                        var5.eventId = var9;
                        var5.event = var8;
                        var5 = var6.bind(var7)(var5);
                    case 206:
                        var5 = undefined;
                        return var5;
                    case 211:
                        return var4;
                    case 214:
                        return var3;
                    case 217:
                        var6 = var1.channel_id;
                        var3 = null;
                        if (!(var3 != var6)) {
                            _fun118610_ip = 289;
                            continue _fun118610
                        }
                    case 228:
                        var3 = _closure1_slot16;
                        var7 = undefined;
                        var4 = var3.bind(var7)();
                        SaveGenerator(address = 242);
                    case 240:
                        return var4;
                    case 242:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 3);
                        if (var3) {
                            _fun118610_ip = 286;
                            continue _fun118610
                        }
                    case 248:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var3 = 14;
                        var3 = var8[var3];
                        var5 = var5.bind(var7)(var3);
                        var3 = var5.selectVoiceChannel;
                        var3 = var3.bind(var5)(var6);
                        var3 = undefined;
                        _fun118610_ip = 409;
                        continue _fun118610;
                    case 286:
                        return var4;
                    case 289:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var4 = 9;
                        var5 = var10[var4];
                        var4 = undefined;
                        var7 = var9.bind(var4)(var5);
                        var6 = var7.open;
                        var5 = {};
                        var8 = 'VOICE_CONNECTION_ERROR_GENERIC';
                        var5.key = var8;
                        var13 = _closure1_slot0;
                        var8 = 10;
                        var11 = var10[var8];
                        var11 = var13.bind(var4)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var8 = var10[var8];
                        var8 = var13.bind(var4)(var8);
                        var8 = var8.t;
                        var8 = var8.S69lJR;
                        var8 = var11.bind(var12)(var8);
                        var5.content = var8;
                        var8 = 11;
                        var8 = var10[var8];
                        var8 = var9.bind(var4)(var8);
                        var5.icon = var8;
                        var5 = var6.bind(var7)(var5);
                        var3 = undefined;
                    case 409:
                        return var3;
                    case 412:
                        var5 = var1.channel_id;
                        var3 = null;
                        if (!(var3 != var5)) {
                            _fun118610_ip = 457;
                            continue _fun118610
                        }
                    case 423:
                        var4 = _closure1_slot17;
                        var3 = var1.guild_id;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3, var5);
                        SaveGenerator(address = 444);
                    case 442:
                        return var3;
                    case 444:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118610_ip = 454;
                            continue _fun118610
                        }
                    case 450:
                        var1 = undefined;
                        _fun118610_ip = 469;
                        continue _fun118610;
                    case 454:
                        return var3;
                    case 457:
                        var3 = _closure1_slot15;
                        var2 = undefined;
                        var3 = var3.bind(var2)();
                        var1 = undefined;
                    case 469:
                        return var1;
                    case 472:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() { // Original name: _maybeAckNotificationCenter, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun118613: for (var _fun118613_ip = 0;;) switch (_fun118613_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118613_ip = 359;
                            continue _fun118613
                        }
                    case 13:
                        var1 = 'notification_center_id';
                        var2 = var1 in var5;
                        var1 = null;
                        var8 = null;
                        if (!var2) {
                            _fun118613_ip = 34;
                            continue _fun118613
                        }
                    case 28:
                        var8 = var5.notification_center_id;
                    case 34:
                        var2 = 'since';
                        var2 = var2 in var5;
                        var4 = null;
                        if (!var2) {
                            _fun118613_ip = 53;
                            continue _fun118613
                        }
                    case 47:
                        var4 = var5.since;
                    case 53:
                        var3 = var5.type;
                        var2 = 'RELATIONSHIP_ADD';
                        if (!(var2 === var3)) {
                            _fun118613_ip = 108;
                            continue _fun118613
                        }
                    case 66:
                        var2 = global;
                        var7 = var2.Number;
                        var3 = var5.rel_type;
                        var6 = undefined;
                        var9 = var7.bind(var6)(var3);
                        var7 = _closure1_slot10;
                        var7 = var7.PENDING_INCOMING;
                        if (!(var9 === var7)) {
                            _fun118613_ip = 108;
                            continue _fun118613
                        }
                    case 104:
                        if (!(var1 == var4)) {
                            _fun118613_ip = 177;
                            continue _fun118613
                        }
                    case 108:
                        if (!(var1 != var8)) {
                            _fun118613_ip = 351;
                            continue _fun118613
                        }
                    case 115:
                        var1 = _closure1_slot16;
                        var9 = undefined;
                        var1 = var1.bind(var9)();
                        SaveGenerator(address = 132);
                    case 130:
                        return var1;
                    case 132:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun118613_ip = 174;
                            continue _fun118613
                        }
                    case 138:
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var4 = 18;
                        var4 = var10[var4];
                        var7 = var7.bind(var9)(var4);
                        var4 = var7.markNotificationCenterRemoteItemAcked;
                        var4 = var4.bind(var7)(var8);
                        _fun118613_ip = 351;
                        continue _fun118613;
                    case 174:
                        return var1;
                    case 177:
                        var1 = _closure1_slot16;
                        var1 = var1.bind(var6)();
                        SaveGenerator(address = 189);
                    case 187:
                        return var1;
                    case 189:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun118613_ip = 356;
                            continue _fun118613
                        }
                    case 198:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var4 = 17;
                        var4 = var7[var4];
                        var9 = var8.bind(var6)(var4);
                        var8 = var9.fromTimestamp;
                        var11 = var2.Date;
                        var10 = var2.String;
                        var4 = var5.since;
                        var14 = var10.bind(var6)(var4);
                        var10 = var11.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var11
                            }
                        });
                        var15 = var10;
                        var4 = new var15[var11](var14, var13);
                        var10 = var4 instanceof Object ? var4 : var10;
                        var4 = var10.getTime;
                        var4 = var4.bind(var10)();
                        var8 = var8.bind(var9)(var4);
                        var4 = _closure1_slot0;
                        var3 = 18;
                        var3 = var7[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.markNotificationCenterLocalItemsAcked;
                        var7 = var5.user_id;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var5 = 'incoming_friend_requests_';
                        var2 = '_';
                        var5 = var6.bind(var5)(var7, var2, var8);
                        var2 = new Array(1);
                        var2[0] = var5;
                        var2 = var3.bind(var4)(var2);
                    case 351:
                        var2 = undefined;
                        return var2;
                    case 356:
                        return var1;
                    case 359:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0) { // Original name: receiveNotification_, environment: var1
        _fun118614: for (var _fun118614_ip = 0;;) switch (_fun118614_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = var3.type;
                var2 = 'MESSAGE_CREATE';
                if (!(var2 !== var0)) {
                    _fun118614_ip = 771;
                    continue _fun118614
                }
            case 25:
                var5 = var3.type;
                var4 = 'GENERIC_PUSH_NOTIFICATION_SENT';
                var0 = false;
                if (!(var4 === var5)) {
                    _fun118614_ip = 720;
                    continue _fun118614
                }
            case 45:
                var4 = var3.deeplink;
                var9 = null;
                var4 = var9 != var4;
                var0 = false;
                if (!var4) {
                    _fun118614_ip = 720;
                    continue _fun118614
                }
            case 65:
                var5 = var3.deeplink;
                var4 = '';
                var0 = false;
                if (!(var4 !== var5)) {
                    _fun118614_ip = 720;
                    continue _fun118614
                }
            case 84:
                var10 = _closure1_slot1;
                var8 = _closure1_slot3;
                var4 = 26;
                var4 = var8[var4];
                var7 = undefined;
                var10 = var10.bind(var7)(var4);
                var4 = var3.deeplink;
                var4 = var10.bind(var7)(var4);
                var4 = var4.payload;
                var10 = var4.type;
                var11 = _closure1_slot0;
                var12 = 27;
                var8 = var8[var12];
                var8 = var11.bind(var7)(var8);
                var8 = var8.LinkingTypes;
                var8 = var8.MESSAGE;
                if (!(var10 !== var8)) {
                    _fun118614_ip = 553;
                    continue _fun118614
                }
            case 166:
                var10 = var4.type;
                var11 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var12];
                var8 = var11.bind(var7)(var8);
                var8 = var8.LinkingTypes;
                var8 = var8.ICYMI;
                if (!(var10 === var8)) {
                    _fun118614_ip = 226;
                    continue _fun118614
                }
            case 204:
                var8 = var3.channel_id;
                if (!(var9 != var8)) {
                    _fun118614_ip = 226;
                    continue _fun118614
                }
            case 213:
                var8 = var3.message_id;
                if (!(var9 == var8)) {
                    _fun118614_ip = 503;
                    continue _fun118614
                }
            case 226:
                var10 = var4.type;
                var11 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var12];
                var8 = var11.bind(var7)(var8);
                var8 = var8.LinkingTypes;
                var8 = var8.ICYMI;
                var0 = false;
                if (!(var10 === var8)) {
                    _fun118614_ip = 720;
                    continue _fun118614
                }
            case 269:
                var8 = var3.user_id;
                var8 = var9 != var8;
                var0 = false;
                if (!var8) {
                    _fun118614_ip = 720;
                    continue _fun118614
                }
            case 287:
                var8 = var3.notification_center_id;
                var8 = var9 != var8;
                var0 = false;
                if (!var8) {
                    _fun118614_ip = 720;
                    continue _fun118614
                }
            case 305:
                var8 = var3.status_emoji_id;
                var8 = var9 != var8;
                var10 = null;
                if (!var8) {
                    _fun118614_ip = 344;
                    continue _fun118614
                }
            case 320:
                var11 = var3.status_emoji_id;
                var8 = '0';
                var10 = null;
                if (!(var8 !== var11)) {
                    _fun118614_ip = 344;
                    continue _fun118614
                }
            case 338:
                var10 = var3.status_emoji_id;
            case 344:
                var11 = {};
                var8 = var3.notification_center_id;
                var11.id = var8;
                var13 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 30;
                var8 = var12[var8];
                var8 = var13.bind(var7)(var8);
                var8 = var8.ICYMIItemTypes;
                var8 = var8.CUSTOM_STATUS;
                var11.type = var8;
                var8 = 1000;
                var11.score = var8;
                var8 = {};
                var13 = var3.user_id;
                var8.user_id = var13;
                var13 = var3.status_text;
                var8.text = var13;
                var8.emoji_id = var10;
                var10 = var3.status_emoji_name;
                var8.emoji_name = var10;
                var10 = var3.status_emoji_animated;
                var10 = !var10;
                var10 = !var10;
                var8.emoji_animated = var10;
                var11.data = var8;
                var10 = _closure1_slot1;
                var8 = 29;
                var8 = var12[var8];
                var10 = var10.bind(var7)(var8);
                var8 = var10.fetchForStatusNotification;
                var8 = var8.bind(var10)(var11);
                var0 = false;
                _fun118614_ip = 720;
                continue _fun118614;
            case 503:
                var10 = _closure1_slot1;
                var11 = _closure1_slot3;
                var8 = 29;
                var8 = var11[var8];
                var12 = var10.bind(var7)(var8);
                var11 = var12.fetchForNotification;
                var10 = var3.channel_id;
                var8 = var3.message_id;
                var8 = var11.bind(var12)(var10, var8);
                var0 = false;
                _fun118614_ip = 720;
                continue _fun118614;
            case 553:
                var6 = var9 == var3;
                var11 = undefined;
                if (var6) {
                    _fun118614_ip = 568;
                    continue _fun118614
                }
            case 562:
                var11 = var3.tracking_type;
            case 568:
                if (!(var9 == var11)) {
                    _fun118614_ip = 577;
                    continue _fun118614
                }
            case 572:
                var11 = var3.type;
            case 577:
                var6 = var9 != var11;
                if (!var6) {
                    _fun118614_ip = 593;
                    continue _fun118614
                }
            case 584:
                var8 = var4.messageId;
                var6 = var9 != var8;
            case 593:
                if (!var6) {
                    _fun118614_ip = 605;
                    continue _fun118614
                }
            case 596:
                var8 = var4.channelId;
                var6 = var9 != var8;
            case 605:
                if (!var6) {
                    _fun118614_ip = 651;
                    continue _fun118614
                }
            case 608:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var6 = 28;
                var6 = var9[var6];
                var10 = var8.bind(var7)(var6);
                var9 = var10.receivedNotification;
                var8 = var4.messageId;
                var6 = var4.channelId;
                var6 = var9.bind(var10)(var8, var6, var11);
            case 651:
                var6 = _closure1_slot1;
                var8 = _closure1_slot3;
                var5 = 25;
                var5 = var8[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.fetchMessages;
                var5 = {};
                var8 = var4.guildId;
                var5.guildId = var8;
                var8 = var4.channelId;
                var5.channelId = var8;
                var4 = var4.messageId;
                var5.messageId = var4;
                var4 = true;
                var5.isPreload = var4;
                var5 = var6.bind(var7)(var5);
                var0 = true;
            case 720:
                var6 = _closure1_slot14;
                var5 = var6.log;
                var8 = var3.type;
                var4 = global;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var4 = 'Notification clicked of type ';
                var4 = var7.bind(var4)(var8);
                var4 = var5.bind(var6)(var4);
                _fun118614_ip = 922;
                continue _fun118614;
            case 771:
                var7 = _closure1_slot14;
                var6 = var7.log;
                var22 = var3.type;
                var20 = var3.guild_id;
                var18 = var3.channel_id;
                var16 = var3.message_id;
                var5 = global;
                var5 = var5.HermesInternal;
                var11 = var5.concat;
                var23 = 'Notification clicked of type ';
                var21 = ' with guild:';
                var19 = ' channel:';
                var17 = ' message:';
                var5 = var23[var11](var22, var21, var20, var19, var18, var17, var16, var15);
                var5 = var6.bind(var7)(var5);
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var4 = 25;
                var5 = var5[var4];
                var4 = undefined;
                var7 = var6.bind(var4)(var5);
                var6 = var7.fetchMessages;
                var5 = {};
                var4 = var3.guild_id;
                var5.guildId = var4;
                var4 = var3.channel_id;
                var5.channelId = var4;
                var4 = var3.message_id;
                var5.messageId = var4;
                var4 = true;
                var5.isPreload = var4;
                var5 = var6.bind(var7)(var5);
                var0 = true;
            case 922:
                var3 = var3.type;
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 931:
                var2 = 'FORUM_THREAD_CREATED';
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 939:
                var2 = 'RELATIONSHIP_ADD';
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 947:
                var2 = 'CALL_RING';
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 955:
                var2 = 'CALL_CONNECT';
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 963:
                var2 = 'FRIEND_SUGGESTION_CREATE';
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 971:
                var2 = 'STAGE_INSTANCE_CREATE';
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 979:
                var2 = 'GUILD_SCHEDULED_EVENT_UPDATE';
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 987:
                var2 = 'GUILD_STREAM_START';
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 997:
                var2 = 'GENERIC_PUSH_NOTIFICATION_SENT';
                if (!(var2 !== var3)) {
                    _fun118614_ip = 1009;
                    continue _fun118614
                }
            case 1007:
                return var0;
            case 1009:
                var2 = function() { // Original name: dispatch, environment: var1
                    _fun118615: for (var _fun118615_ip = 0;;) switch (_fun118615_ip) {
                        case 0:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var4 = 31;
                            var3 = var6[var4];
                            var0 = undefined;
                            var8 = var5.bind(var0)(var3);
                            var7 = var8.dispatch;
                            var3 = {};
                            var9 = 'PUSH_NOTIFICATION_CLICK';
                            var3.type = var9;
                            var3 = var7.bind(var8)(var3);
                            var3 = 32;
                            var3 = var6[var3];
                            var9 = var5.bind(var0)(var3);
                            var8 = var9.track;
                            var3 = _closure1_slot9;
                            var7 = var3.NOTIFICATION_CLICKED;
                            var3 = {};
                            var10 = _closure2_slot0;
                            var6 = 'tracking_type';
                            var6 = var6 in var10;
                            var10 = _closure2_slot0;
                            if (var6) {
                                _fun118615_ip = 105;
                                continue _fun118615
                            }
                        case 98:
                            var6 = var10.type;
                            _fun118615_ip = 111;
                            continue _fun118615;
                        case 105:
                            var6 = var10.tracking_type;
                        case 111:
                            var3.notif_type = var6;
                            var10 = _closure2_slot0;
                            var6 = 'user_id';
                            var11 = var6 in var10;
                            var6 = null;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 145;
                                continue _fun118615
                            }
                        case 135:
                            var11 = _closure2_slot0;
                            var10 = var11.user_id;
                        case 145:
                            var3.notif_user_id = var10;
                            var11 = _closure2_slot0;
                            var10 = 'message_id';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 177;
                                continue _fun118615
                            }
                        case 167:
                            var11 = _closure2_slot0;
                            var10 = var11.message_id;
                        case 177:
                            var3.message_id = var10;
                            var11 = _closure2_slot0;
                            var10 = 'message_type_';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 213;
                                continue _fun118615
                            }
                        case 201:
                            var11 = _closure2_slot0;
                            var10 = var11.message_type_;
                        case 213:
                            var3.message_type = var10;
                            var11 = _closure2_slot0;
                            var10 = 'message';
                            var10 = var10 in var11;
                            if (!var10) {
                                _fun118615_ip = 246;
                                continue _fun118615
                            }
                        case 233:
                            var11 = _closure2_slot0;
                            var11 = var11.message;
                            var10 = var6 != var11;
                        case 246:
                            var3.has_message = var10;
                            var11 = _closure2_slot0;
                            var10 = 'guild_id';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 279;
                                continue _fun118615
                            }
                        case 270:
                            var11 = _closure2_slot0;
                            var10 = var11.guild_id;
                        case 279:
                            var3.guild_id = var10;
                            var11 = _closure2_slot0;
                            var10 = 'channel_id';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 309;
                                continue _fun118615
                            }
                        case 300:
                            var11 = _closure2_slot0;
                            var10 = var11.channel_id;
                        case 309:
                            var3.channel_id = var10;
                            var11 = _closure2_slot0;
                            var10 = 'channel_type';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 340;
                                continue _fun118615
                            }
                        case 330:
                            var11 = _closure2_slot0;
                            var10 = var11.channel_type;
                        case 340:
                            var3.channel_type = var10;
                            var11 = _closure2_slot0;
                            var10 = 'rel_type';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 385;
                                continue _fun118615
                            }
                        case 362:
                            var11 = global;
                            var12 = var11.Number;
                            var11 = _closure2_slot0;
                            var11 = var11.rel_type;
                            var10 = var12.bind(var0)(var11);
                        case 385:
                            var3.rel_type = var10;
                            var11 = _closure2_slot0;
                            var10 = 'notification_id';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 417;
                                continue _fun118615
                            }
                        case 407:
                            var11 = _closure2_slot0;
                            var10 = var11.notification_id;
                        case 417:
                            var3.notification_id = var10;
                            var11 = _closure2_slot0;
                            var10 = 'image_url';
                            var10 = var10 in var11;
                            if (!var10) {
                                _fun118615_ip = 451;
                                continue _fun118615
                            }
                        case 437:
                            var11 = _closure2_slot0;
                            var11 = var11.image_url;
                            var10 = var6 != var11;
                        case 451:
                            var3.has_image_thumbnail = var10;
                            var11 = _closure2_slot0;
                            var10 = 'join_id';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 485;
                                continue _fun118615
                            }
                        case 475:
                            var11 = _closure2_slot0;
                            var10 = var11.join_id;
                        case 485:
                            var3.join_id = var10;
                            var11 = _closure2_slot0;
                            var10 = 'notif_instance_id';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 517;
                                continue _fun118615
                            }
                        case 507:
                            var11 = _closure2_slot0;
                            var10 = var11.notif_instance_id;
                        case 517:
                            var3.notif_instance_id = var10;
                            var11 = _closure2_slot0;
                            var10 = 'notif_type_id';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 549;
                                continue _fun118615
                            }
                        case 539:
                            var11 = _closure2_slot0;
                            var10 = var11.notif_type_id;
                        case 549:
                            var3.notif_type_id = var10;
                            var11 = _closure2_slot0;
                            var10 = 'mention_type';
                            var11 = var10 in var11;
                            var10 = null;
                            if (!var11) {
                                _fun118615_ip = 581;
                                continue _fun118615
                            }
                        case 571:
                            var11 = _closure2_slot0;
                            var10 = var11.mention_type;
                        case 581:
                            var3.mention_type = var10;
                            var3 = var8.bind(var9)(var7, var3);
                            var3 = _closure2_slot0;
                            var7 = function() { // Original name: maybeAckNotificationCenter, environment: var2
                                var0 = undefined;
                                var3 = _closure1_slot21;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var7 = var7.bind(var0)(var3);
                            var7 = var3.type;
                            var3 = 'MESSAGE_CREATE';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 1412;
                                continue _fun118615
                            }
                        case 624:
                            var3 = 'FORUM_THREAD_CREATED';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 1382;
                                continue _fun118615
                            }
                        case 635:
                            var3 = 'RELATIONSHIP_ADD';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 1149;
                                continue _fun118615
                            }
                        case 646:
                            var3 = 'CALL_RING';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 1119;
                                continue _fun118615
                            }
                        case 657:
                            var3 = 'CALL_CONNECT';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 1089;
                                continue _fun118615
                            }
                        case 668:
                            var3 = 'FRIEND_SUGGESTION_CREATE';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 1059;
                                continue _fun118615
                            }
                        case 679:
                            var3 = 'GUILD_STREAM_START';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 979;
                                continue _fun118615
                            }
                        case 692:
                            var3 = 'GUILD_SCHEDULED_EVENT_UPDATE';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 955;
                                continue _fun118615
                            }
                        case 703:
                            var3 = 'STAGE_INSTANCE_CREATE';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 931;
                                continue _fun118615
                            }
                        case 714:
                            var3 = 'GENERIC_PUSH_NOTIFICATION_SENT';
                            if (!(var3 === var7)) {
                                _fun118615_ip = 1682;
                                continue _fun118615
                            }
                        case 727:
                            var3 = _closure2_slot0;
                            var3 = var3.deeplink;
                            if (!(var6 != var3)) {
                                _fun118615_ip = 1682;
                                continue _fun118615
                            }
                        case 744:
                            var3 = _closure2_slot0;
                            var7 = var3.deeplink;
                            var3 = '';
                            if (!(var3 !== var7)) {
                                _fun118615_ip = 1682;
                                continue _fun118615
                            }
                        case 765:
                            var7 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var3 = 26;
                            var3 = var10[var3];
                            var7 = var7.bind(var0)(var3);
                            var3 = _closure2_slot0;
                            var3 = var3.deeplink;
                            var3 = var7.bind(var0)(var3);
                            var8 = var3.payload;
                            var _closure3_slot0 = var8;
                            var7 = var8.type;
                            var9 = _closure1_slot0;
                            var3 = 27;
                            var3 = var10[var3];
                            var3 = var9.bind(var0)(var3);
                            var3 = var3.LinkingTypes;
                            var3 = var3.GAME_UPDATE;
                            if (!(var7 !== var3)) {
                                _fun118615_ip = 884;
                                continue _fun118615
                            }
                        case 847:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var3 = 50;
                            var3 = var9[var3];
                            var7 = var7.bind(var0)(var3);
                            var3 = {};
                            var3.payload = var8;
                            var3 = var7.bind(var0)(var3);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 884:
                            var3 = _closure1_slot16;
                            var8 = var3.bind(var0)();
                            var7 = var8.then;
                            var3 = function() { // Environment: var2
                                var1 = function() { // Original name: waitForNavigationReady, environment: var0
                                    var0 = global;
                                    var2 = var0.Promise;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var3 = function(arg0) { // Environment: var0
                                        var1 = arg0;
                                        var _closure6_slot0 = var1;
                                        var1 = 0;
                                        var _closure6_slot1 = var1;
                                        var1 = function() { // Original name: checkNavigation, environment: var0
                                            _fun118627: for (var _fun118627_ip = 0;;) switch (_fun118627_ip) {
                                                case 0:
                                                    var3 = _closure1_slot0;
                                                    var1 = _closure1_slot3;
                                                    var0 = 12;
                                                    var1 = var1[var0];
                                                    var0 = undefined;
                                                    var3 = var3.bind(var0)(var1);
                                                    var1 = var3.getRootNavigationRef;
                                                    var3 = var1.bind(var3)();
                                                    var1 = null;
                                                    if (!(var1 != var3)) {
                                                        _fun118627_ip = 54;
                                                        continue _fun118627
                                                    }
                                                case 41:
                                                    var1 = var3.isReady;
                                                    var1 = var1.bind(var3)();
                                                    if (var1) {
                                                        _fun118627_ip = 132;
                                                        continue _fun118627
                                                    }
                                                case 54:
                                                    var4 = _closure6_slot1;
                                                    var3 = 100;
                                                    if (!(!(var4 >= var3))) {
                                                        _fun118627_ip = 102;
                                                        continue _fun118627
                                                    }
                                                case 68:
                                                    var3 = _closure6_slot1;
                                                    var3 = var3 + 1;
                                                    _closure6_slot1 = var3;
                                                    var3 = global;
                                                    var5 = var3.setTimeout;
                                                    var4 = _closure6_slot2;
                                                    var3 = 50;
                                                    var3 = var5.bind(var0)(var4, var3);
                                                    _fun118627_ip = 143;
                                                    continue _fun118627;
                                                case 102:
                                                    var4 = _closure1_slot14;
                                                    var3 = var4.warn;
                                                    var2 = 'waitForNavigationReady exceeded 100 retries. Navigation may not be ready.';
                                                    var2 = var3.bind(var4)(var2);
                                                    var1 = _closure6_slot0;
                                                    var1 = var1.bind(var0)();
                                                    _fun118627_ip = 143;
                                                    continue _fun118627;
                                                case 132:
                                                    var1 = _closure6_slot0;
                                                    var1 = var1.bind(var0)();
                                                case 143:
                                                    return var0;
                                            }
                                        };
                                        var _closure6_slot2 = var1;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var4 = var1;
                                    var0 = new var4[var2](var3, var2);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                                };
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var8 = var7.bind(var8)(var3);
                            var7 = var8.then;
                            var3 = function() { // Environment: var2
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 34;
                                var4 = var1[var0];
                                var0 = undefined;
                                var7 = var3.bind(var0)(var4);
                                var6 = var7.transitionTo;
                                var4 = _closure1_slot11;
                                var5 = var4.NOTIFICATIONS;
                                var4 = {};
                                var8 = true;
                                var4.navigationReplace = var8;
                                var4 = var6.bind(var7)(var5, var4);
                                var4 = _closure1_slot1;
                                var2 = 47;
                                var2 = var1[var2];
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.openLazy;
                                var2 = 49;
                                var2 = var1[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = 48;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var3 = var3.bind(var0)(var2, var1);
                                var2 = {};
                                var6 = _closure3_slot0;
                                var6 = var6.gameUpdateId;
                                var2.gameUpdateId = var6;
                                var1 = _closure3_slot0;
                                var1 = var1.gameId;
                                var2.gameId = var1;
                                var1 = _closure2_slot0;
                                var6 = var1.update_title;
                                var2.initialUpdateTitle = var6;
                                var1 = var1.start_date;
                                var2.initialStartDate = var1;
                                var1 = 'GameUpdateActionSheet';
                                var1 = var4.bind(var5)(var3, var1, var2);
                                return var0;
                            };
                            var3 = var7.bind(var8)(var3);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 931:
                            var7 = _closure2_slot0;
                            var3 = function() { // Original name: handleStageNotification, environment: var2
                                var0 = undefined;
                                var3 = _closure1_slot19;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var3 = var3.bind(var0)(var7);
                            var3 = !var3;
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 955:
                            var7 = _closure2_slot0;
                            var3 = function() { // Original name: handleGuildEventNotification, environment: var2
                                var0 = undefined;
                                var3 = _closure1_slot20;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var3 = var3.bind(var0)(var7);
                            var3 = !var3;
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 979:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var3 = 46;
                            var3 = var8[var3];
                            var7 = var7.bind(var0)(var3);
                            var3 = {};
                            var8 = _closure1_slot12;
                            var8 = var8.GUILD;
                            var3.streamType = var8;
                            var8 = _closure2_slot0;
                            var9 = var8.user_id;
                            var3.ownerId = var9;
                            var9 = var8.guild_id;
                            var3.guildId = var9;
                            var8 = var8.channel_id;
                            var3.channelId = var8;
                            var3 = var7.bind(var0)(var3);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 1059:
                            var3 = _closure1_slot16;
                            var8 = var3.bind(var0)();
                            var7 = var8.then;
                            var3 = function() { // Environment: var2
                                _fun118621: for (var _fun118621_ip = 0;;) switch (_fun118621_ip) {
                                    case 0:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var0 = 12;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.getRootNavigationRef;
                                        var5 = var2.bind(var3)();
                                        var2 = null;
                                        if (!(var2 != var5)) {
                                            _fun118621_ip = 86;
                                            continue _fun118621
                                        }
                                    case 41:
                                        var4 = var5.navigate;
                                        var3 = {};
                                        var2 = 'add-friends';
                                        var3.screen = var2;
                                        var2 = {};
                                        var6 = 'Notifications';
                                        var2.sourcePage = var6;
                                        var3.params = var2;
                                        var2 = 'friends';
                                        var2 = var4.bind(var5)(var2, var3);
                                    case 86:
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var1 = 38;
                                        var1 = var5[var1];
                                        var2 = var4.bind(var0)(var1);
                                        var1 = {};
                                        var3 = _closure2_slot0;
                                        var3 = var3.user_id;
                                        var1.userId = var3;
                                        var3 = 39;
                                        var3 = var5[var3];
                                        var3 = var4.bind(var0)(var3);
                                        var4 = var3.PUSH_NOTIFICATION;
                                        var3 = new Array(1);
                                        var3[0] = var4;
                                        var1.sourceAnalyticsLocations = var3;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var3 = var7.bind(var8)(var3);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 1089:
                            var3 = _closure1_slot16;
                            var8 = var3.bind(var0)();
                            var7 = var8.then;
                            var3 = function() { // Environment: var2
                                _fun118620: for (var _fun118620_ip = 0;;) switch (_fun118620_ip) {
                                    case 0:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot3;
                                        var0 = 41;
                                        var1 = var6[var0];
                                        var0 = undefined;
                                        var7 = var5.bind(var0)(var1);
                                        var4 = var7.transitionToChannel;
                                        var11 = _closure2_slot0;
                                        var3 = var11.channel_id;
                                        var3 = var4.bind(var7)(var3);
                                        var12 = _closure1_slot1;
                                        var3 = 42;
                                        var3 = var6[var3];
                                        var8 = var12.bind(var0)(var3);
                                        var7 = var8.call;
                                        var4 = var11.channel_id;
                                        var3 = false;
                                        var3 = var7.bind(var8)(var4, var3, var3);
                                        var3 = 32;
                                        var4 = var6[var3];
                                        var10 = var12.bind(var0)(var4);
                                        var8 = var10.track;
                                        var4 = _closure1_slot9;
                                        var7 = var4.RING_CALL_ACCEPTED;
                                        var4 = {};
                                        var9 = 39;
                                        var9 = var6[var9];
                                        var9 = var12.bind(var0)(var9);
                                        var9 = var9.PUSH_NOTIFICATION;
                                        var4.location = var9;
                                        var9 = var11.guild_id;
                                        var4.guild_id = var9;
                                        var9 = var11.user_id;
                                        var4.ringer_user_id = var9;
                                        var9 = 43;
                                        var12 = var6[var9];
                                        var13 = var5.bind(var0)(var12);
                                        var12 = var13.collectChannelAnalyticsMetadataFromId;
                                        var11 = var11.channel_id;
                                        var15 = var12.bind(var13)(var11);
                                        var16 = var4;
                                        var11 = copyDataProperties(var16, var15);
                                        var4 = var8.bind(var10)(var7, var4);
                                        var4 = 44;
                                        var4 = var6[var4];
                                        var5 = var5.bind(var0)(var4);
                                        var4 = var5.isAndroid;
                                        var4 = var4.bind(var5)();
                                        if (!var4) {
                                            _fun118620_ip = 361;
                                            continue _fun118620
                                        }
                                    case 223:
                                        var4 = _closure2_slot0;
                                        var4 = var4.is_fullscreen_call_ui;
                                        if (!var4) {
                                            _fun118620_ip = 327;
                                            continue _fun118620
                                        }
                                    case 238:
                                        var4 = _closure1_slot1;
                                        var7 = _closure1_slot3;
                                        var3 = var7[var3];
                                        var6 = var4.bind(var0)(var3);
                                        var5 = var6.track;
                                        var3 = _closure1_slot9;
                                        var4 = var3.CALLKIT_CLICKED;
                                        var3 = {};
                                        var8 = 'join';
                                        var3.action_type = var8;
                                        var8 = _closure1_slot0;
                                        var7 = var7[var9];
                                        var9 = var8.bind(var0)(var7);
                                        var8 = var9.collectChannelAnalyticsMetadataFromId;
                                        var7 = _closure2_slot0;
                                        var7 = var7.channel_id;
                                        var15 = var8.bind(var9)(var7);
                                        var16 = var3;
                                        var7 = copyDataProperties(var16, var15);
                                        var3 = var5.bind(var6)(var4, var3);
                                    case 327:
                                        var3 = _closure1_slot1;
                                        var4 = _closure1_slot3;
                                        var2 = 45;
                                        var2 = var4[var2];
                                        var2 = var3.bind(var0)(var2);
                                        var1 = _closure2_slot0;
                                        var1 = var1.channel_id;
                                        var1 = var2.bind(var0)(var1);
                                    case 361:
                                        return var0;
                                }
                            };
                            var3 = var7.bind(var8)(var3);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 1119:
                            var3 = _closure1_slot16;
                            var8 = var3.bind(var0)();
                            var7 = var8.then;
                            var3 = function() { // Environment: var2
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 41;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.transitionToChannel;
                                var1 = _closure2_slot0;
                                var1 = var1.channel_id;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var3 = var7.bind(var8)(var3);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 1149:
                            var3 = global;
                            var7 = var3.Number;
                            var3 = _closure2_slot0;
                            var3 = var3.rel_type;
                            var7 = var7.bind(var0)(var3);
                            var3 = _closure1_slot10;
                            var3 = var3.PENDING_INCOMING;
                            if (!(var7 !== var3)) {
                                _fun118615_ip = 1352;
                                continue _fun118615
                            }
                        case 1189:
                            var3 = _closure1_slot10;
                            var3 = var3.FRIEND;
                            if (!(var7 !== var3)) {
                                _fun118615_ip = 1299;
                                continue _fun118615
                            }
                        case 1203:
                            var3 = _closure2_slot0;
                            var7 = var3.notification_type;
                            var3 = _closure1_slot8;
                            var3 = var3.REMINDER;
                            if (!(var7 === var3)) {
                                _fun118615_ip = 1682;
                                continue _fun118615
                            }
                        case 1230:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 12;
                            var3 = var8[var3];
                            var7 = var7.bind(var0)(var3);
                            var3 = var7.getRootNavigationRef;
                            var9 = var3.bind(var7)();
                            if (!(var6 != var9)) {
                                _fun118615_ip = 1682;
                                continue _fun118615
                            }
                        case 1267:
                            var8 = var9.navigate;
                            var7 = {};
                            var3 = 'requests';
                            var7.screen = var3;
                            var3 = 'friends';
                            var3 = var8.bind(var9)(var3, var7);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 1299:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var3 = 40;
                            var3 = var8[var3];
                            var8 = var7.bind(var0)(var3);
                            var7 = var8.openPrivateChannel;
                            var3 = {};
                            var9 = _closure2_slot0;
                            var9 = var9.user_id;
                            var3.recipientIds = var9;
                            var3 = var7.bind(var8)(var3);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 1352:
                            var3 = _closure1_slot16;
                            var8 = var3.bind(var0)();
                            var7 = var8.then;
                            var3 = function() { // Environment: var2
                                _fun118618: for (var _fun118618_ip = 0;;) switch (_fun118618_ip) {
                                    case 0:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot3;
                                        var0 = 35;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var4 = var3.bind(var0)(var2);
                                        var3 = var4.getCurrentConfig;
                                        var2 = {};
                                        var5 = 'notification';
                                        var2.location = var5;
                                        var2 = var3.bind(var4)(var2);
                                        var7 = var2.showInDMs;
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot3;
                                        var2 = 34;
                                        var2 = var4[var2];
                                        var6 = var3.bind(var0)(var2);
                                        var5 = var6.transitionTo;
                                        var2 = _closure1_slot11;
                                        if (var7) {
                                            _fun118618_ip = 149;
                                            continue _fun118618
                                        }
                                    case 85:
                                        var7 = var2.NOTIFICATIONS;
                                        var7 = var5.bind(var6)(var7);
                                        var8 = _closure1_slot2;
                                        var7 = 36;
                                        var7 = var4[var7];
                                        var9 = var8.bind(var0)(var7);
                                        var8 = var9.setTab;
                                        var7 = 37;
                                        var7 = var4[var7];
                                        var7 = var3.bind(var0)(var7);
                                        var7 = var7.NotificationCenterTabs;
                                        var7 = var7.ForYou;
                                        var7 = var8.bind(var9)(var7);
                                        _fun118618_ip = 233;
                                        continue _fun118618;
                                    case 149:
                                        var2 = var2.ME;
                                        var2 = var5.bind(var6)(var2);
                                        var2 = 12;
                                        var2 = var4[var2];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.getRootNavigationRef;
                                        var5 = var2.bind(var3)();
                                        var2 = null;
                                        if (!(var2 != var5)) {
                                            _fun118618_ip = 233;
                                            continue _fun118618
                                        }
                                    case 188:
                                        var4 = var5.navigate;
                                        var3 = {};
                                        var2 = 'add-friends';
                                        var3.screen = var2;
                                        var2 = {};
                                        var6 = 'Notifications';
                                        var2.sourcePage = var6;
                                        var3.params = var2;
                                        var2 = 'friends';
                                        var2 = var4.bind(var5)(var2, var3);
                                    case 233:
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var1 = 38;
                                        var1 = var5[var1];
                                        var2 = var4.bind(var0)(var1);
                                        var1 = {};
                                        var3 = _closure2_slot0;
                                        var3 = var3.user_id;
                                        var1.userId = var3;
                                        var3 = 39;
                                        var3 = var5[var3];
                                        var3 = var4.bind(var0)(var3);
                                        var4 = var3.PUSH_NOTIFICATION;
                                        var3 = new Array(1);
                                        var3[0] = var4;
                                        var1.sourceAnalyticsLocations = var3;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var3 = var7.bind(var8)(var3);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 1382:
                            var3 = _closure1_slot16;
                            var7 = var3.bind(var0)();
                            var3 = var7.then;
                            var2 = function() { // Environment: var2
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 34;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.transitionTo;
                                var6 = _closure1_slot11;
                                var5 = var6.CHANNEL;
                                var1 = _closure2_slot0;
                                var2 = var1.guild_id;
                                var1 = var1.channel_id;
                                var2 = var5.bind(var6)(var2, var1);
                                var1 = {
                                    'navigationReplace': true,
                                    'openChannel': true
                                };
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var2 = var3.bind(var7)(var2);
                            _fun118615_ip = 1682;
                            continue _fun118615;
                        case 1412:
                            var2 = _closure2_slot0;
                            var2 = var2.message;
                            if (!(var6 != var2)) {
                                _fun118615_ip = 1497;
                                continue _fun118615
                            }
                        case 1425:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.dispatch;
                            var2 = {
                                'type': 'MESSAGE_CREATE',
                                'channelId': null,
                                'message': null,
                                'optimistic': true,
                                'isPushNotification': true
                            };
                            var7 = _closure2_slot0;
                            var8 = var7.message;
                            var8 = var8.channel_id;
                            var2.channelId = var8;
                            var7 = var7.message;
                            var2.message = var7;
                            var2 = var3.bind(var4)(var2);
                        case 1497:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var4 = 33;
                            var4 = var3[var4];
                            var7 = var2.bind(var0)(var4);
                            var4 = var7.popAll;
                            var4 = var4.bind(var7)();
                            var7 = _closure1_slot0;
                            var4 = 34;
                            var4 = var3[var4];
                            var10 = var7.bind(var0)(var4);
                            var9 = var10.transitionTo;
                            var12 = _closure1_slot11;
                            var11 = var12.CHANNEL;
                            var7 = _closure2_slot0;
                            var8 = var7.guild_id;
                            var4 = var7.channel_id;
                            var1 = var7.message_id;
                            var8 = var11.bind(var12)(var8, var4, var1);
                            var4 = true;
                            var1 = {
                                'navigationReplace': true,
                                'openChannel': true
                            };
                            var1 = var9.bind(var10)(var8, var1);
                            var1 = 14;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.selectChannel;
                            var1 = {};
                            var7 = var7.guild_id;
                            var8 = var6 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun118615_ip = 1645;
                                continue _fun118615
                            }
                        case 1642:
                            var6 = var7;
                        case 1645:
                            var1.guildId = var6;
                            var5 = _closure2_slot0;
                            var6 = var5.channel_id;
                            var1.channelId = var6;
                            var5 = var5.message_id;
                            var1.messageId = var5;
                            var1.isInitialSetup = var4;
                            var1 = var2.bind(var3)(var1);
                        case 1682:
                            return var0;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.addPostConnectionCallback;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NotificationTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot9 = var7;
    var7 = var3.RelationshipTypes;
    var _closure1_slot10 = var7;
    var3 = var3.Routes;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StreamTypes;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'receiveNotification';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot14 = var3;
    var3 = 51;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/push_notifications/native/receiveNotification.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: receiveNotification, environment: var1
        _fun118629: for (var _fun118629_ip = 0;;) switch (_fun118629_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.getData;
                var4 = null;
                if (!(var4 != var0)) {
                    _fun118629_ip = 318;
                    continue _fun118629
                }
            case 20:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 19;
                var0 = var7[var0];
                var5 = undefined;
                var8 = var6.bind(var5)(var0);
                var6 = var8.trackAppOpened;
                var0 = 'notification';
                var0 = var6.bind(var8)(var0);
                var0 = var2.getData;
                var2 = var0.bind(var2)();
                var _closure2_slot0 = var2;
                var6 = _closure1_slot1;
                var0 = 20;
                var0 = var7[var0];
                var8 = var6.bind(var5)(var0);
                var7 = var8.mark;
                var9 = var2.type;
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var0 = 'Receive notification ';
                var6 = var6.bind(var0)(var9);
                var0 = '❗';
                var0 = var7.bind(var8)(var0, var6);
                var0 = var2.receiving_user_id;
                if (!(var4 != var0)) {
                    _fun118629_ip = 187;
                    continue _fun118629
                }
            case 145:
                var6 = _closure1_slot7;
                var0 = var6.getId;
                var0 = var0.bind(var6)();
                if (!(var4 != var0)) {
                    _fun118629_ip = 187;
                    continue _fun118629
                }
            case 163:
                var4 = var2.receiving_user_id;
                var6 = _closure1_slot7;
                var0 = var6.getId;
                var0 = var0.bind(var6)();
                if (!(var4 === var0)) {
                    _fun118629_ip = 233;
                    continue _fun118629
                }
            case 187:
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 24;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var6 = var0.Emitter;
                var4 = var6.batched;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot22;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var4.bind(var6)(var0);
                _fun118629_ip = 316;
                continue _fun118629;
            case 233:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 21;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = 22;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = 23;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.switchAccount;
                var3 = var2.receiving_user_id;
                var2 = false;
                var3 = var4.bind(var5)(var3, var2);
                var2 = var3.then;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.Emitter;
                    var2 = var3.batched;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot22;
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 316:
                return var0;
            case 318:
                var0 = false;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3431, 3293, 1216, 4523, 660, 3465, 1378, 3, 3107, 1234, 9176, 3879, 5872, 4195, 5576, 8147, 21, 13496, 4327, 20, 4328, 3433, 10181, 566, 8407, 3241, 670, 9671, 8832, 6582, 806, 795, 4524, 1220, 13176, 13498, 3931, 7313, 5540, 3905, 3903, 7981, 4265, 478, 7929, 7979, 3237, 15066, 1307, 3430, 2]);