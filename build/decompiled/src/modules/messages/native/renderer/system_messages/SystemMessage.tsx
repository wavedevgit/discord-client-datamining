// modules/messages/native/renderer/system_messages/SystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.MessageTypes;
    var _closure1_slot2 = var6;
    var3 = var3.BoostedGuildTiers;
    var _closure1_slot3 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/SystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56028: for (var _fun56028_ip = 0;;) switch (_fun56028_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.message;
                var3 = var0.type;
                var1 = _closure1_slot2;
                var1 = var1.RECIPIENT_ADD;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 2293;
                    continue _fun56028
                }
            case 33:
                var1 = _closure1_slot2;
                var1 = var1.RECIPIENT_REMOVE;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 2258;
                    continue _fun56028
                }
            case 50:
                var1 = _closure1_slot2;
                var1 = var1.CALL;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 2223;
                    continue _fun56028
                }
            case 67:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_NAME_CHANGE;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 2188;
                    continue _fun56028
                }
            case 84:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_ICON_CHANGE;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 2153;
                    continue _fun56028
                }
            case 101:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_PINNED_MESSAGE;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 2118;
                    continue _fun56028
                }
            case 118:
                var1 = _closure1_slot2;
                var1 = var1.USER_JOIN;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 2083;
                    continue _fun56028
                }
            case 135:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_BOOST;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 2048;
                    continue _fun56028
                }
            case 152:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_BOOST_TIER_1;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 2002;
                    continue _fun56028
                }
            case 169:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_BOOST_TIER_2;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1956;
                    continue _fun56028
                }
            case 186:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_BOOST_TIER_3;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1910;
                    continue _fun56028
                }
            case 203:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_FOLLOW_ADD;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1875;
                    continue _fun56028
                }
            case 220:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_STREAM;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1840;
                    continue _fun56028
                }
            case 237:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DISCOVERY_DISQUALIFIED;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1805;
                    continue _fun56028
                }
            case 254:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DISCOVERY_REQUALIFIED;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1770;
                    continue _fun56028
                }
            case 271:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1735;
                    continue _fun56028
                }
            case 288:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1700;
                    continue _fun56028
                }
            case 305:
                var1 = _closure1_slot2;
                var1 = var1.CHAT_INPUT_COMMAND;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1665;
                    continue _fun56028
                }
            case 322:
                var1 = _closure1_slot2;
                var1 = var1.CONTEXT_MENU_COMMAND;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1665;
                    continue _fun56028
                }
            case 339:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INVITE_REMINDER;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1661;
                    continue _fun56028
                }
            case 356:
                var1 = _closure1_slot2;
                var1 = var1.THREAD_CREATED;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1626;
                    continue _fun56028
                }
            case 373:
                var1 = _closure1_slot2;
                var1 = var1.THREAD_STARTER_MESSAGE;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1591;
                    continue _fun56028
                }
            case 390:
                var1 = _closure1_slot2;
                var1 = var1.AUTO_MODERATION_ACTION;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1556;
                    continue _fun56028
                }
            case 407:
                var1 = _closure1_slot2;
                var1 = var1.ROLE_SUBSCRIPTION_PURCHASE;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1521;
                    continue _fun56028
                }
            case 424:
                var1 = _closure1_slot2;
                var1 = var1.PURCHASE_NOTIFICATION;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1486;
                    continue _fun56028
                }
            case 441:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_START;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1451;
                    continue _fun56028
                }
            case 458:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_END;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1416;
                    continue _fun56028
                }
            case 475:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_TOPIC;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1381;
                    continue _fun56028
                }
            case 492:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_SPEAKER;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1346;
                    continue _fun56028
                }
            case 509:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_RAISE_HAND;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1311;
                    continue _fun56028
                }
            case 526:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1276;
                    continue _fun56028
                }
            case 543:
                var1 = _closure1_slot2;
                var1 = var1.PRIVATE_CHANNEL_INTEGRATION_ADDED;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1230;
                    continue _fun56028
                }
            case 560:
                var1 = _closure1_slot2;
                var1 = var1.PRIVATE_CHANNEL_INTEGRATION_REMOVED;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1230;
                    continue _fun56028
                }
            case 577:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INCIDENT_ALERT_MODE_ENABLED;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1195;
                    continue _fun56028
                }
            case 594:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INCIDENT_ALERT_MODE_DISABLED;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1160;
                    continue _fun56028
                }
            case 611:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INCIDENT_REPORT_RAID;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1125;
                    continue _fun56028
                }
            case 628:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INCIDENT_REPORT_FALSE_ALARM;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1090;
                    continue _fun56028
                }
            case 645:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DEADCHAT_REVIVE_PROMPT;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1055;
                    continue _fun56028
                }
            case 662:
                var1 = _closure1_slot2;
                var1 = var1.POLL_RESULT;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 1020;
                    continue _fun56028
                }
            case 679:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_LINKED_TO_LOBBY;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 985;
                    continue _fun56028
                }
            case 696:
                var1 = _closure1_slot2;
                var1 = var1.IN_GAME_MESSAGE_NUX;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 950;
                    continue _fun56028
                }
            case 713:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 915;
                    continue _fun56028
                }
            case 730:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 915;
                    continue _fun56028
                }
            case 747:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 915;
                    continue _fun56028
                }
            case 764:
                var1 = _closure1_slot2;
                var1 = var1.EMOJI_ADDED;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 880;
                    continue _fun56028
                }
            case 778:
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_GROUP_INVITE;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 845;
                    continue _fun56028
                }
            case 792:
                var1 = _closure1_slot2;
                var1 = var1.VOICE_SESSION;
                if (!(var1 !== var3)) {
                    _fun56028_ip = 810;
                    continue _fun56028
                }
            case 806:
                var1 = null;
                return var1;
            case 810:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 36;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createVoiceSessionSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 845:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 35;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createPremiumGroupInviteSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 880:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 34;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createEmojiAddedSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 915:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 33;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createJoinRequestNotificationSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 950:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 32;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createInGameMessageNuxSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 985:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 31;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChannelLinkedToLobbySystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1020:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 30;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createPollResultSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1055:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 29;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createSimpleDeadchatPromptSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1090:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 28;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildReportFalseAlarmSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1125:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 27;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildReportRaidSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1160:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 26;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildAlertModeDisabledSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1195:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 26;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildAlertModeEnabledSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1230:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 25;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.createPrivateChannelIntegrationSystemMessage;
                var1 = var2.message;
                var1 = var1.type;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1276:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 24;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createApplicationSubscriptionPurchaseSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1311:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageRaiseHandSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1346:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 22;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageSpeakerSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1381:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageTopicSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1416:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageEndSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1451:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 19;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageStartSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1486:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 18;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createPurchaseNotificationSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1521:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 17;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createRoleSubscriptionPurchaseSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1556:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 16;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createAutoModerationActionSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1591:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createThreadStarterSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1626:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createNewThreadSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1661:
                var1 = null;
                return var1;
            case 1665:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createApplicationCommandSourceSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1700:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildDiscoveryGracePeriodFinalWarningSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1735:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildDiscoveryGracePeriodInitialWarningSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1770:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildDiscoveryRequalifiedSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1805:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildDiscoveryDisqualifiedSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1840:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildStreamSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1875:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChannelFollowAddSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1910:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.createUserPremiumGuildSubscriptionTierAchievedSystemMessage;
                var1 = _closure1_slot3;
                var1 = var1.TIER_3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1956:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.createUserPremiumGuildSubscriptionTierAchievedSystemMessage;
                var1 = _closure1_slot3;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2002:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.createUserPremiumGuildSubscriptionTierAchievedSystemMessage;
                var1 = _closure1_slot3;
                var1 = var1.TIER_1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2048:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createUserPremiumGuildSubscriptionSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2083:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createUserJoinSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2118:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChannelPinnedMessageSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2153:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChangeChannelIconSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2188:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChangeChannelNameSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2223:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createCallSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2258:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createRemoveRecipientSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2293:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.createAddRecipientSystemMessage;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.createSystemMessageContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 6742, 6748, 6749, 6752, 6753, 6754, 6755, 6771, 6773, 6787, 6788, 6789, 6790, 6793, 6794, 6795, 6807, 6808, 6810, 6811, 6812, 6813, 6814, 6815, 6816, 6817, 6824, 6825, 6826, 6829, 6831, 6832, 6833, 6834, 6836, 6840, 2]);