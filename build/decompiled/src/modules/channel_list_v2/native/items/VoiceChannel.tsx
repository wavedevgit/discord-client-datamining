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
                _fun103178: for (var _fun103178_ip = 0;;) switch (_fun103178_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103178_ip = 210;
                            continue _fun103178
                        }
                    case 13:
                        var1 = var8.getGuildId;
                        var4 = var1.bind(var8)();
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun103178_ip = 68;
                            continue _fun103178
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
                            _fun103178_ip = 145;
                            continue _fun103178
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
                            _fun103178_ip = 142;
                            continue _fun103178
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
                            _fun103178_ip = 207;
                            continue _fun103178
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
        _fun103179: for (var _fun103179_ip = 0;;) switch (_fun103179_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channel;
                var _closure2_slot0 = var10;
                var20 = var0.selected;
                var19 = var0.locked;
                var5 = var0.collapsed;
                var7 = var0.voiceStates;
                var2 = var0.subtitle;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 16;
                var0 = var6[var0];
                var9 = var1.bind(var3)(var0);
                var4 = var9.useActiveEvent;
                var0 = var10.id;
                var11 = var4.bind(var9)(var0);
                var0 = 17;
                var0 = var6[var0];
                var12 = var1.bind(var3)(var0);
                var9 = var12.useVoiceChannelDurationMobileEnabled;
                var4 = var10.guild_id;
                var0 = 'voice_channel';
                var12 = var9.bind(var12)(var4, var0);
                var0 = 18;
                var0 = var6[var0];
                var4 = var1.bind(var3)(var0);
                var0 = var4.useStartTime;
                var14 = var0.bind(var4)(var10);
                var0 = 19;
                var0 = var6[var0];
                var4 = var1.bind(var3)(var0);
                var1 = var4.useEnsureSyncedChannelVoiceStates;
                var0 = var10.id;
                var13 = var1.bind(var4)(var0, var7);
                var4 = _closure1_slot13;
                var1 = _closure1_slot1;
                var0 = 20;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.channel = var10;
                var0.collapsed = var5;
                var0.voiceStates = var13;
                var9 = var4.bind(var3)(var1, var0);
                var0 = var13.length;
                var4 = null;
                var1 = var4 != var0;
                var7 = 0;
                var21 = 0;
                if (!var1) {
                    _fun103179_ip = 239;
                    continue _fun103179
                }
            case 236:
                var21 = var0;
            case 239:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 21;
                var0 = var6[var0];
                var15 = var1.bind(var3)(var0);
                var0 = var15.useIsConnectedToVoiceChannel;
                var18 = var0.bind(var15)(var10);
                var0 = 22;
                var0 = var6[var0];
                var22 = var1.bind(var3)(var0);
                var17 = var22.useStateFromStoresObject;
                var0 = _closure1_slot8;
                var16 = new Array(2);
                var16[0] = var0;
                var0 = _closure1_slot9;
                var16[1] = var0;
                var15 = new Array(1);
                var15[0] = var10;
                var0 = function() { // Environment: var23
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
                var0 = var17.bind(var22)(var16, var0, var15);
                var17 = var0.hasUnread;
                var22 = var0.mentionCount;
                var16 = var0.resolvedUnreadSetting;
                var0 = 23;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getChannelSubtitleData;
                var1 = var0.bind(var1)(var2);
                var0 = var4 == var2;
                var15 = undefined;
                if (var0) {
                    _fun103179_ip = 385;
                    continue _fun103179
                }
            case 380:
                var15 = var2.type;
            case 385:
                var6 = 'voice';
                var0 = null;
                if (!(var6 === var15)) {
                    _fun103179_ip = 419;
                    continue _fun103179
                }
            case 395:
                var6 = var2.text;
                var6 = var6.length;
                var6 = var6 > var7;
                var0 = null;
                if (!var6) {
                    _fun103179_ip = 419;
                    continue _fun103179
                }
            case 414:
                var0 = var2.text;
            case 419:
                _closure2_slot1 = var0;
                var2 = var4 != var0;
                var15 = null;
                if (!var2) {
                    _fun103179_ip = 489;
                    continue _fun103179
                }
            case 432:
                var6 = _closure1_slot1;
                var24 = _closure1_slot2;
                var2 = 24;
                var2 = var24[var2];
                var25 = var6.bind(var3)(var2);
                var24 = var25.parseVoiceChannelStatus;
                var6 = {};
                var2 = var10.id;
                var6.channelId = var2;
                var2 = 'text-xs/medium';
                var6.linkVariant = var2;
                var2 = true;
                var15 = var24.bind(var25)(var0, var2, var6);
            case 489:
                var6 = _closure1_slot1;
                var24 = _closure1_slot2;
                var2 = 25;
                var2 = var24[var2];
                var6 = var6.bind(var3)(var2);
                var2 = {};
                var2.channel = var10;
                var2.unread = var17;
                var2.mentionCount = var22;
                var2.userCount = var21;
                var21 = var6.bind(var3)(var2);
                var22 = _closure1_slot4;
                var6 = var22.useEffect;
                var24 = var10.id;
                var2 = new Array(3);
                var2[0] = var24;
                var24 = var10.guild_id;
                var2[1] = var24;
                var2[2] = var0;
                var0 = function() { // Environment: var23
                    _fun103181: for (var _fun103181_ip = 0;;) switch (_fun103181_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 !== var1)) {
                                _fun103181_ip = 83;
                                continue _fun103181
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 26;
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
                var0 = var6.bind(var22)(var0, var2);
                if (!(var4 == var15)) {
                    _fun103179_ip = 605;
                    continue _fun103179
                }
            case 587:
                var2 = var4 == var1;
                var0 = undefined;
                if (var2) {
                    _fun103179_ip = 602;
                    continue _fun103179
                }
            case 596:
                var0 = var1.subtitle;
            case 602:
                var15 = var0;
            case 605:
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var24 = _closure1_slot2;
                var0 = 27;
                var0 = var24[var0];
                var6 = var1.bind(var3)(var0);
                var0 = {};
                var0.channel = var10;
                var0.isChannelSelected = var20;
                var0.isChannelCollapsed = var5;
                var0.voiceStates = var13;
                var22 = true;
                var0.enableConnectedUserLimit = var22;
                var0.enableActivities = var22;
                var6 = var2.bind(var3)(var6, var0);
                var0 = 28;
                var0 = var24[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var24 = function() {
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
                var0.onPress = var24;
                var23 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onLongPress = var23;
                var23 = _closure1_slot14;
                var23 = var23.container;
                var0.style = var23;
                var0.accessible = var22;
                var22 = 'button';
                var0.accessibilityRole = var22;
                var0.accessibilityLabel = var21;
                var0.channel = var10;
                var0.selected = var20;
                var0.locked = var19;
                if (!var17) {
                    _fun103179_ip = 754;
                    continue _fun103179
                }
            case 751:
                var17 = var18;
            case 754:
                var0.unread = var17;
                var0.resolvedUnreadSetting = var16;
                var0.subtitle = var15;
                var11 = var4 != var11;
                if (var11) {
                    _fun103179_ip = 786;
                    continue _fun103179
                }
            case 776:
                if (!var12) {
                    _fun103179_ip = 783;
                    continue _fun103179
                }
            case 779:
                var12 = var4 != var14;
            case 783:
                var11 = var12;
            case 786:
                var0.isChannelLive = var11;
                var0.channelInfo = var6;
                var6 = var13.length;
                var4 = null;
                if (!(var7 !== var6)) {
                    _fun103179_ip = 1014;
                    continue _fun103179
                }
            case 810:
                if (var5) {
                    _fun103179_ip = 852;
                    continue _fun103179
                }
            case 813:
                var7 = _closure1_slot13;
                var6 = _closure1_slot5;
                var5 = {};
                var11 = _closure1_slot14;
                var11 = var11.voiceStates;
                var5.style = var11;
                var5.children = var9;
                var4 = var7.bind(var3)(var6, var5);
                _fun103179_ip = 1014;
                continue _fun103179;
            case 852:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 30;
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
                var8 = 31;
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
            case 1014:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot15 = var5;
    var5 = var8.memo;
    var4 = function(arg0) { // Environment: var4
        _fun103185: for (var _fun103185_ip = 0;;) switch (_fun103185_ip) {
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
                var1 = 22;
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
                    _fun103185_ip = 172;
                    continue _fun103185
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 4574, 3093, 3944, 4309, 3523, 9152, 660, 33, 671, 4800, 7739, 1307, 7916, 8209, 12512, 13447, 13456, 13336, 7926, 566, 13445, 4757, 8295, 795, 13446, 13331, 8967, 4242, 13342, 13319, 2]);