// modules/channel_list_v2/native/items/VoiceChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun103171: for (var _fun103171_ip = 0;;) switch (_fun103171_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103171_ip = 210;
                            continue _fun103171
                        }
                    case 13:
                        var1 = var8.getGuildId;
                        var4 = var1.bind(var8)();
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun103171_ip = 68;
                            continue _fun103171
                        }
                    case 29:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 12;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.shouldShowMembershipVerificationGate;
                        var2 = var2.bind(var5)(var4);
                        if (var2) {
                            _fun103171_ip = 145;
                            continue _fun103171
                        }
                    case 68:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var5 = 14;
                        var6 = var2[var5];
                        var5 = undefined;
                        var7 = var7.bind(var5)(var6);
                        var6 = 15;
                        var6 = var2[var6];
                        var2 = var2.paths;
                        var2 = var7.bind(var5)(var6, var2);
                        SaveGenerator(address = 115);
                    case 113:
                        return var2;
                    case 115:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun103171_ip = 142;
                            continue _fun103171
                        }
                    case 121:
                        var7 = var2.openGuildVoiceModal;
                        var6 = 'Channel List';
                        var6 = var7.bind(var5)(var8, var6);
                        return var5;
                    case 142:
                        return var2;
                    case 145:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 14;
                        var2 = var1[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = 13;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var5.bind(var3)(var2, var1);
                        SaveGenerator(address = 187);
                    case 185:
                        return var1;
                    case 187:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun103171_ip = 207;
                            continue _fun103171
                        }
                    case 193:
                        var2 = var1.openMemberVerificationModal;
                        var2 = var2.bind(var3)(var4);
                        return var2;
                    case 207:
                        return var1;
                    case 210:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var11.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var3 = var7[var1];
    var1 = arg3;
    var8 = var1.bind(var0)(var3);
    var _closure1_slot4 = var8;
    var1 = 2;
    var3 = var7[var1];
    var3 = var6.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.NO_VOICE_STATES;
    var _closure1_slot10 = var3;
    var12 = 8;
    var3 = var7[var12];
    var3 = var6.bind(var0)(var3);
    var13 = var3.CHANNEL_MARGIN_VERTICAL;
    var3 = 9;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.AnalyticEvents;
    var _closure1_slot11 = var5;
    var3 = var3.Permissions;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot13 = var3;
    var5 = {};
    var3 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': null,
        'maxHeight': 1
    };
    var10 = 11;
    var9 = var7[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var3.gap = var9;
    var5.channelInfo = var3;
    var3 = -4;
    var9 = {
        'marginLeft': 36,
        'marginTop': 4294967292,
        'marginBottom': 2
    };
    var5.voiceStates = var9;
    var9 = {};
    var14 = 16;
    var9.marginLeft = var14;
    var5.voiceStatesCollapsed = var9;
    var9 = {};
    var9.marginVertical = var13;
    var9.marginHorizontal = var12;
    var10 = var7[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9.borderRadius = var10;
    var5.container = var9;
    var _closure1_slot14 = var5;
    var9 = var8.memo;
    var5 = function(arg0) { // Environment: var4
        _fun103172: for (var _fun103172_ip = 0;;) switch (_fun103172_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channel;
                var _closure2_slot0 = var10;
                var19 = var0.selected;
                var18 = var0.locked;
                var12 = var0.collapsed;
                var5 = var0.voiceStates;
                var2 = var0.subtitle;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var0 = var4[var0];
                var7 = var1.bind(var3)(var0);
                var6 = var7.useActiveEvent;
                var0 = var10.id;
                var7 = var6.bind(var7)(var0);
                var0 = 17;
                var0 = var4[var0];
                var11 = var1.bind(var3)(var0);
                var9 = var11.useVoiceChannelDurationMobileEnabled;
                var6 = var10.guild_id;
                var0 = 'voice_channel';
                var9 = var9.bind(var11)(var6, var0);
                var0 = 18;
                var0 = var4[var0];
                var6 = var1.bind(var3)(var0);
                var0 = var6.useStartTime;
                var11 = var0.bind(var6)(var10);
                var0 = 19;
                var0 = var4[var0];
                var4 = var1.bind(var3)(var0);
                var1 = var4.useEnsureSyncedChannelVoiceStates;
                var0 = var10.id;
                var13 = var1.bind(var4)(var0, var5);
                var0 = var13.length;
                var4 = null;
                var1 = var4 != var0;
                var6 = 0;
                var20 = 0;
                if (!var1) {
                    _fun103172_ip = 197;
                    continue _fun103172
                }
            case 194:
                var20 = var0;
            case 197:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 20;
                var0 = var5[var0];
                var14 = var1.bind(var3)(var0);
                var0 = var14.useIsConnectedToVoiceChannel;
                var17 = var0.bind(var14)(var10);
                var0 = 21;
                var0 = var5[var0];
                var21 = var1.bind(var3)(var0);
                var16 = var21.useStateFromStoresObject;
                var0 = _closure1_slot8;
                var15 = new Array(2);
                var15[0] = var0;
                var0 = _closure1_slot9;
                var15[1] = var0;
                var14 = new Array(1);
                var14[0] = var10;
                var0 = function() { // Environment: var22
                    var0 = {};
                    var5 = _closure1_slot8;
                    var4 = var5.hasUnread;
                    var3 = _closure2_slot0;
                    var2 = var3.id;
                    var2 = var4.bind(var5)(var2);
                    var0.hasUnread = var2;
                    var4 = var5.getMentionCount;
                    var2 = var3.id;
                    var2 = var4.bind(var5)(var2);
                    var0.mentionCount = var2;
                    var2 = _closure1_slot9;
                    var1 = var2.resolveUnreadSetting;
                    var1 = var1.bind(var2)(var3);
                    var0.resolvedUnreadSetting = var1;
                    return var0;
                };
                var0 = var16.bind(var21)(var15, var0, var14);
                var16 = var0.hasUnread;
                var21 = var0.mentionCount;
                var15 = var0.resolvedUnreadSetting;
                var0 = 22;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getChannelSubtitleData;
                var1 = var0.bind(var1)(var2);
                var0 = var4 == var2;
                var14 = undefined;
                if (var0) {
                    _fun103172_ip = 343;
                    continue _fun103172
                }
            case 338:
                var14 = var2.type;
            case 343:
                var5 = 'voice';
                var0 = null;
                if (!(var5 === var14)) {
                    _fun103172_ip = 377;
                    continue _fun103172
                }
            case 353:
                var5 = var2.text;
                var5 = var5.length;
                var5 = var5 > var6;
                var0 = null;
                if (!var5) {
                    _fun103172_ip = 377;
                    continue _fun103172
                }
            case 372:
                var0 = var2.text;
            case 377:
                _closure2_slot1 = var0;
                var2 = var4 != var0;
                var14 = null;
                if (!var2) {
                    _fun103172_ip = 436;
                    continue _fun103172
                }
            case 390:
                var5 = _closure1_slot1;
                var23 = _closure1_slot2;
                var2 = 23;
                var2 = var23[var2];
                var24 = var5.bind(var3)(var2);
                var23 = var24.parseVoiceChannelStatus;
                var5 = {};
                var2 = var10.id;
                var5.channelId = var2;
                var2 = true;
                var14 = var23.bind(var24)(var0, var2, var5);
            case 436:
                var5 = _closure1_slot1;
                var23 = _closure1_slot2;
                var2 = 24;
                var2 = var23[var2];
                var5 = var5.bind(var3)(var2);
                var2 = {};
                var2.channel = var10;
                var2.unread = var16;
                var2.mentionCount = var21;
                var2.userCount = var20;
                var20 = var5.bind(var3)(var2);
                var21 = _closure1_slot4;
                var5 = var21.useEffect;
                var23 = var10.id;
                var2 = new Array(3);
                var2[0] = var23;
                var23 = var10.guild_id;
                var2[1] = var23;
                var2[2] = var0;
                var0 = function() { // Environment: var22
                    _fun103174: for (var _fun103174_ip = 0;;) switch (_fun103174_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 !== var1)) {
                                _fun103174_ip = 83;
                                continue _fun103174
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 25;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot11;
                            var1 = var0.VOICE_CHANNEL_TOPIC_VIEWED;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var5 = var4.guild_id;
                            var0.guild_id = var5;
                            var4 = var4.id;
                            var0.channel_id = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 83:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var21)(var0, var2);
                if (!(var4 == var14)) {
                    _fun103172_ip = 552;
                    continue _fun103172
                }
            case 534:
                var2 = var4 == var1;
                var0 = undefined;
                if (var2) {
                    _fun103172_ip = 549;
                    continue _fun103172
                }
            case 543:
                var0 = var1.subtitle;
            case 549:
                var14 = var0;
            case 552:
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var23 = _closure1_slot2;
                var0 = 26;
                var0 = var23[var0];
                var5 = var1.bind(var3)(var0);
                var0 = {};
                var0.channel = var10;
                var0.isChannelSelected = var19;
                var0.isChannelCollapsed = var12;
                var0.voiceStates = var13;
                var21 = true;
                var0.enableConnectedUserLimit = var21;
                var0.enableActivities = var21;
                var5 = var2.bind(var3)(var5, var0);
                var0 = 27;
                var0 = var23[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var23 = function() {
                    var2 = _closure2_slot0;
                    var1 = function() {
                        var0 = undefined;
                        var3 = _closure1_slot16;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var0.onPress = var23;
                var22 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onLongPress = var22;
                var22 = _closure1_slot14;
                var22 = var22.container;
                var0.style = var22;
                var0.accessible = var21;
                var21 = 'button';
                var0.accessibilityRole = var21;
                var0.accessibilityLabel = var20;
                var0.channel = var10;
                var0.selected = var19;
                var0.locked = var18;
                if (!var16) {
                    _fun103172_ip = 701;
                    continue _fun103172
                }
            case 698:
                var16 = var17;
            case 701:
                var0.unread = var16;
                var0.resolvedUnreadSetting = var15;
                var0.subtitle = var14;
                var7 = var4 != var7;
                if (var7) {
                    _fun103172_ip = 733;
                    continue _fun103172
                }
            case 723:
                if (!var9) {
                    _fun103172_ip = 730;
                    continue _fun103172
                }
            case 726:
                var9 = var4 != var11;
            case 730:
                var7 = var9;
            case 733:
                var0.isChannelLive = var7;
                var0.channelInfo = var5;
                var5 = var13.length;
                var4 = null;
                if (!(var6 !== var5)) {
                    _fun103172_ip = 1003;
                    continue _fun103172
                }
            case 757:
                if (var12) {
                    _fun103172_ip = 841;
                    continue _fun103172
                }
            case 760:
                var7 = _closure1_slot13;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = _closure1_slot14;
                var9 = var9.voiceStates;
                var5.style = var9;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 31;
                var9 = var14[var9];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var9.channel = var10;
                var9.collapsed = var12;
                var9.voiceStates = var13;
                var9 = var7.bind(var3)(var11, var9);
                var5.children = var9;
                var4 = var7.bind(var3)(var6, var5);
                _fun103172_ip = 1003;
                continue _fun103172;
            case 841:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 29;
                var5 = var12[var5];
                var7 = var6.bind(var3)(var5);
                var6 = var7.computeSummarizedVoiceUsers;
                var5 = {
                    'channels': null,
                    'selectedChannelId': null,
                    'selectedVoiceChannelId': null
                };
                var9 = new Array(1);
                var9[0] = var10;
                var5.channels = var9;
                var9 = {};
                var11 = var10.id;
                var9[var11] = var13;
                var5.voiceStates = var9;
                var11 = var6.bind(var7)(var5);
                var7 = _closure1_slot13;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = _closure1_slot14;
                var9 = var9.voiceStatesCollapsed;
                var5.style = var9;
                var9 = _closure1_slot1;
                var8 = 30;
                var8 = var12[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.users = var11;
                var11 = 8;
                var8.max = var11;
                var10 = var10.guild_id;
                var8.guildId = var10;
                var10 = false;
                var8.renderIcon = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 1003:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot15 = var5;
    var5 = var8.memo;
    var4 = function(arg0) { // Environment: var4
        _fun103178: for (var _fun103178_ip = 0;;) switch (_fun103178_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.channel;
                var _closure2_slot0 = var8;
                var7 = var1.selected;
                var4 = var1.subtitle;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 32;
                var1 = var5[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var8.guild_id;
                var10 = var2.bind(var3)(var1);
                var2 = _closure1_slot0;
                var1 = 21;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.useStateFromStoresObject;
                var6 = _closure1_slot7;
                var1 = new Array(2);
                var1[0] = var6;
                var6 = _closure1_slot6;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var5 = _closure1_slot7;
                    var6 = var5.can;
                    var3 = _closure1_slot12;
                    var4 = var3.CONNECT;
                    var1 = _closure2_slot0;
                    var4 = var6.bind(var5)(var4, var1);
                    var4 = !var4;
                    var0.locked = var4;
                    var4 = var5.can;
                    var3 = var3.MOVE_MEMBERS;
                    var3 = var4.bind(var5)(var3, var1);
                    var0.bypassLimit = var3;
                    var3 = _closure1_slot6;
                    var2 = var3.isCollapsed;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.collapsed = var1;
                    return var0;
                };
                var0 = var2.bind(var5)(var1, var0);
                var6 = var0.locked;
                var5 = var0.bypassLimit;
                var11 = var0.collapsed;
                var2 = _closure1_slot13;
                var1 = _closure1_slot15;
                var0 = {};
                var0.channel = var8;
                var0.collapsed = var11;
                var8 = var8.id;
                var8 = var10[var8];
                var10 = null;
                if (!(var10 == var8)) {
                    _fun103178_ip = 172;
                    continue _fun103178
                }
            case 168:
                var8 = _closure1_slot10;
            case 172:
                var0.voiceStates = var8;
                var0.selected = var7;
                var0.locked = var6;
                var0.bypassLimit = var5;
                var0.subtitle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 33;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel_list_v2/native/items/VoiceChannel.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.VOICE_USERS_MARGIN_TOP = var3;
    var2.VOICE_USERS_MARGIN_BOTTOM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 4568, 3093, 3948, 4303, 3527, 8871, 660, 33, 671, 4826, 7514, 1307, 7947, 8152, 12513, 13471, 13480, 7957, 566, 13469, 4783, 7946, 795, 13470, 13357, 9182, 4236, 13368, 13362, 13345, 2]);