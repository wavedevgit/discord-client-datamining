// actions/ChannelRTCActionCreators.tsx
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
    var1 = var4.bind(var0)(var1);
    var6 = var1.AppContext;
    var _closure1_slot4 = var6;
    var6 = var1.AnalyticEvents;
    var _closure1_slot5 = var6;
    var1 = var1.ComponentActions;
    var _closure1_slot6 = var1;
    var1 = {};
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_ACTIVE_CHANNELS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.rebuildRTCActiveChannels = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_SELECT_PARTICIPANT';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.id = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.selectParticipant = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_POPOUT_PARTICIPANT';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.participantId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.popoutParticipant = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_RETURN_PARTICIPANT';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.participantId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.returnParticipant = var6;
    var6 = function arg0, arg1() {
        _fun62795: for (var _fun62795_ip = 0;;) switch (_fun62795_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arguments[2];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun62795_ip = 28;
                    continue _fun62795
                }
            case 15:
                var1 = _closure1_slot4;
                var4 = var1.APP;
            case 28:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var9 = var2.bind(var0)(var1);
                var8 = var9.track;
                var1 = _closure1_slot5;
                var7 = var1.VIDEO_LAYOUT_TOGGLED;
                var1 = {};
                var1.video_layout = var5;
                var11 = _closure1_slot0;
                var10 = 4;
                var10 = var3[var10];
                var11 = var11.bind(var0)(var10);
                var10 = var11.collectVoiceAnalyticsMetadata;
                var12 = var10.bind(var11)(var6);
                var13 = var1;
                var10 = copyDataProperties(var13, var12);
                var1 = var8.bind(var9)(var7, var1);
                var1 = 2;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'CHANNEL_RTC_UPDATE_LAYOUT';
                var1.type = var7;
                var1.channelId = var6;
                var1.layout = var5;
                var1.appContext = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.updateLayout = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.participantsOpen = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.toggleParticipants = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.participantsListOpen = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.toggleParticipantsList = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.voiceParticipantsHidden = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.toggleVoiceParticipantsHidden = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.large = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateStageStreamSize = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.dismissed = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateStageVideoLimitBoostUpsellDismissed = var6;
    var6 = function arg0, arg1, arg2() {
        _fun62801: for (var _fun62801_ip = 0;;) switch (_fun62801_ip) {
            case 0:
                var8 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var8;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var7 = 'CHANNEL_RTC_UPDATE_CHAT_OPEN';
                var3.type = var7;
                var3.channelId = var8;
                var3.chatOpen = var2;
                var3 = var4.bind(var5)(var3);
                if (var2) {
                    _fun62801_ip = 264;
                    continue _fun62801
                }
            case 72:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var7 = var2.ComponentDispatch;
                var5 = var7.dispatch;
                var2 = _closure1_slot6;
                var2 = var2.FOCUS_CHAT_BUTTON;
                var2 = var5.bind(var7)(var2);
                var2 = 6;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.AutoOpenTIVExperiment;
                var3 = var4.getConfig;
                var2 = {};
                var5 = 'ChannelCall';
                var2.location = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var2.collectAnalytics;
                if (!var2) {
                    _fun62801_ip = 285;
                    continue _fun62801
                }
            case 168:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var4 = var5.track;
                var2 = _closure1_slot5;
                var3 = var2.TEXT_IN_VOICE_CLOSED;
                var2 = {};
                var7 = arg2;
                var2.reason = var7;
                var2.channel_id = var8;
                var7 = _closure1_slot3;
                var6 = var7.getChannel;
                var8 = var6.bind(var7)(var8);
                var6 = null;
                var7 = var6 == var8;
                var6 = undefined;
                if (var7) {
                    _fun62801_ip = 252;
                    continue _fun62801
                }
            case 242:
                var7 = var8.getGuildId;
                var6 = var7.bind(var8)();
            case 252:
                var2.guild_id = var6;
                var2 = var4.bind(var5)(var3, var2);
                _fun62801_ip = 285;
                continue _fun62801;
            case 264:
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.ComponentDispatch;
                    var3 = var4.dispatch;
                    var1 = _closure1_slot6;
                    var2 = var1.FOCUS_CHANNEL_TEXT_AREA;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.channelId = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = 0;
                var1 = var3.bind(var0)(var2, var1);
            case 285:
                return var0;
        }
    };
    var1.updateChatOpen = var6;
    var3 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.channelId = var4;
        var4 = arg2;
        var1.messageId = var4;
        var4 = arg3;
        var1.jumpType = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.jumpToVoiceChannelMessage = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ChannelRTCActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 660, 806, 795, 4302, 1229, 7901, 2]);