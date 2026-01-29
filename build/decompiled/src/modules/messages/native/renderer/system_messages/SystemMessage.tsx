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
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/SystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createSystemMessageContent, environment: var1
        _fun55300: for (var _fun55300_ip = 0;;) switch (_fun55300_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.message;
                var3 = var0.type;
                var1 = _closure1_slot2;
                var1 = var1.RECIPIENT_ADD;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 2238;
                    continue _fun55300
                }
            case 33:
                var1 = _closure1_slot2;
                var1 = var1.RECIPIENT_REMOVE;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 2203;
                    continue _fun55300
                }
            case 50:
                var1 = _closure1_slot2;
                var1 = var1.CALL;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 2168;
                    continue _fun55300
                }
            case 67:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_NAME_CHANGE;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 2133;
                    continue _fun55300
                }
            case 84:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_ICON_CHANGE;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 2098;
                    continue _fun55300
                }
            case 101:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_PINNED_MESSAGE;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 2063;
                    continue _fun55300
                }
            case 118:
                var1 = _closure1_slot2;
                var1 = var1.USER_JOIN;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 2028;
                    continue _fun55300
                }
            case 135:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_BOOST;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1993;
                    continue _fun55300
                }
            case 152:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_BOOST_TIER_1;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1947;
                    continue _fun55300
                }
            case 169:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_BOOST_TIER_2;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1901;
                    continue _fun55300
                }
            case 186:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_BOOST_TIER_3;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1855;
                    continue _fun55300
                }
            case 203:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_FOLLOW_ADD;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1820;
                    continue _fun55300
                }
            case 220:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_STREAM;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1785;
                    continue _fun55300
                }
            case 237:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DISCOVERY_DISQUALIFIED;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1750;
                    continue _fun55300
                }
            case 254:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DISCOVERY_REQUALIFIED;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1715;
                    continue _fun55300
                }
            case 271:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1680;
                    continue _fun55300
                }
            case 288:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1645;
                    continue _fun55300
                }
            case 305:
                var1 = _closure1_slot2;
                var1 = var1.CHAT_INPUT_COMMAND;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1610;
                    continue _fun55300
                }
            case 322:
                var1 = _closure1_slot2;
                var1 = var1.CONTEXT_MENU_COMMAND;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1610;
                    continue _fun55300
                }
            case 339:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INVITE_REMINDER;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1606;
                    continue _fun55300
                }
            case 356:
                var1 = _closure1_slot2;
                var1 = var1.THREAD_CREATED;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1571;
                    continue _fun55300
                }
            case 373:
                var1 = _closure1_slot2;
                var1 = var1.THREAD_STARTER_MESSAGE;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1536;
                    continue _fun55300
                }
            case 390:
                var1 = _closure1_slot2;
                var1 = var1.AUTO_MODERATION_ACTION;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1501;
                    continue _fun55300
                }
            case 407:
                var1 = _closure1_slot2;
                var1 = var1.ROLE_SUBSCRIPTION_PURCHASE;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1466;
                    continue _fun55300
                }
            case 424:
                var1 = _closure1_slot2;
                var1 = var1.PURCHASE_NOTIFICATION;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1431;
                    continue _fun55300
                }
            case 441:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_START;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1396;
                    continue _fun55300
                }
            case 458:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_END;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1361;
                    continue _fun55300
                }
            case 475:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_TOPIC;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1326;
                    continue _fun55300
                }
            case 492:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_SPEAKER;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1291;
                    continue _fun55300
                }
            case 509:
                var1 = _closure1_slot2;
                var1 = var1.STAGE_RAISE_HAND;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1256;
                    continue _fun55300
                }
            case 526:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1221;
                    continue _fun55300
                }
            case 543:
                var1 = _closure1_slot2;
                var1 = var1.PRIVATE_CHANNEL_INTEGRATION_ADDED;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1175;
                    continue _fun55300
                }
            case 560:
                var1 = _closure1_slot2;
                var1 = var1.PRIVATE_CHANNEL_INTEGRATION_REMOVED;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1175;
                    continue _fun55300
                }
            case 577:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INCIDENT_ALERT_MODE_ENABLED;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1140;
                    continue _fun55300
                }
            case 594:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INCIDENT_ALERT_MODE_DISABLED;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1105;
                    continue _fun55300
                }
            case 611:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INCIDENT_REPORT_RAID;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1070;
                    continue _fun55300
                }
            case 628:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_INCIDENT_REPORT_FALSE_ALARM;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1035;
                    continue _fun55300
                }
            case 645:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_DEADCHAT_REVIVE_PROMPT;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 1000;
                    continue _fun55300
                }
            case 662:
                var1 = _closure1_slot2;
                var1 = var1.POLL_RESULT;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 965;
                    continue _fun55300
                }
            case 679:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_LINKED_TO_LOBBY;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 930;
                    continue _fun55300
                }
            case 696:
                var1 = _closure1_slot2;
                var1 = var1.IN_GAME_MESSAGE_NUX;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 895;
                    continue _fun55300
                }
            case 713:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 860;
                    continue _fun55300
                }
            case 730:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 860;
                    continue _fun55300
                }
            case 744:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 860;
                    continue _fun55300
                }
            case 758:
                var1 = _closure1_slot2;
                var1 = var1.EMOJI_ADDED;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 825;
                    continue _fun55300
                }
            case 772:
                var1 = _closure1_slot2;
                var1 = var1.PREMIUM_GROUP_INVITE;
                if (!(var1 !== var3)) {
                    _fun55300_ip = 790;
                    continue _fun55300
                }
            case 786:
                var1 = null;
                return var1;
            case 790:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 35;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createPremiumGroupInviteSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 825:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 34;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createEmojiAddedSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 860:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 33;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createJoinRequestNotificationSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 895:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 32;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createInGameMessageNuxSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 930:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 31;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChannelLinkedToLobbySystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 965:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 30;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createPollResultSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1000:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 29;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createSimpleDeadchatPromptSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1035:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 28;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildReportFalseAlarmSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1070:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 27;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildReportRaidSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1105:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 26;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildAlertModeDisabledSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1140:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 26;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildAlertModeEnabledSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1175:
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
            case 1221:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 24;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createApplicationSubscriptionPurchaseSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1256:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageRaiseHandSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1291:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 22;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageSpeakerSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1326:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageTopicSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1361:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageEndSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1396:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 19;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createStageStartSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1431:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 18;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createPurchaseNotificationSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1466:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 17;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createRoleSubscriptionPurchaseSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1501:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 16;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createAutoModerationActionSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1536:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createThreadStarterSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1571:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createNewThreadSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1606:
                var1 = null;
                return var1;
            case 1610:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createApplicationCommandSourceSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1645:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildDiscoveryGracePeriodFinalWarningSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1680:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildDiscoveryGracePeriodInitialWarningSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1715:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildDiscoveryRequalifiedSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1750:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildDiscoveryDisqualifiedSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1785:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createGuildStreamSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1820:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChannelFollowAddSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 1855:
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
            case 1901:
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
            case 1947:
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
            case 1993:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createUserPremiumGuildSubscriptionSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2028:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createUserJoinSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2063:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChannelPinnedMessageSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2098:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChangeChannelIconSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2133:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createChangeChannelNameSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2168:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createCallSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2203:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createRemoveRecipientSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 2238:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 6633, 6639, 6640, 6643, 6644, 6645, 6646, 6662, 6664, 6677, 6678, 6679, 6680, 6683, 6684, 6685, 6697, 6698, 6700, 6701, 6702, 6703, 6704, 6705, 6706, 6707, 6714, 6715, 6716, 6719, 6721, 6722, 6723, 6724, 6726, 2]);