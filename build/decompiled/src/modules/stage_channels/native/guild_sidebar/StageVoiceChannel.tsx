// modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function(arg0) { // Original name: getStageChannelAccessibilityProps, environment: var1
        _fun103065: for (var _fun103065_ip = 0;;) switch (_fun103065_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelName;
                var5 = var0.channel;
                var6 = var0.userCount;
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var9 = 11;
                var3 = var1[var9];
                var8 = undefined;
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var1[var9];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.TPPk2T;
                var1 = {};
                var1.channelName = var7;
                var1 = var3.bind(var4)(var2, var1);
                var3 = var5.userLimit;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun103065_ip = 112;
                    continue _fun103065
                }
            case 100:
                var3 = var5.userLimit;
                var2 = 0;
                if (!(!(var3 > var2))) {
                    _fun103065_ip = 188;
                    continue _fun103065
                }
            case 112:
                var2 = 0;
                if (!(var6 > var2)) {
                    _fun103065_ip = 263;
                    continue _fun103065
                }
            case 121:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var4 = var2[var9];
                var4 = var3.bind(var8)(var4);
                var10 = var4.intl;
                var4 = var10.formatToPlainString;
                var2 = var2[var9];
                var2 = var3.bind(var8)(var2);
                var2 = var2.t;
                var3 = var2["7yr3Qc"];
                var2 = {};
                var2.channelName = var7;
                var2.userCount = var6;
                var1 = var4.bind(var10)(var3, var2);
                _fun103065_ip = 263;
                continue _fun103065;
            case 188:
                var2 = _closure1_slot0;
                var0 = _closure1_slot3;
                var3 = var0[var9];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var0[var9];
                var0 = var2.bind(var8)(var0);
                var0 = var0.t;
                var2 = var0.rhh6Ev;
                var0 = {};
                var0.channelName = var7;
                var0.userCount = var6;
                var5 = var5.userLimit;
                var0.limit = var5;
                var1 = var3.bind(var4)(var2, var0);
            case 263:
                var0 = {
                    'accessible': true,
                    'accessibilityRole': 'button'
                };
                var0.accessibilityLabel = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var6 = var6.bind(var0)(var3);
    var _closure1_slot4 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var7 = var5[var3];
    var7 = var11.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NO_VOICE_STATES;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var10 = 8;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var7 = var3.MAX_STAGE_VOICE_USER_LIMIT;
    var _closure1_slot13 = var7;
    var3 = var3.Permissions;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.CHANNEL_MARGIN_VERTICAL;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginLeft': 36,
        'marginBottom': 8
    };
    var3.voiceStates = var9;
    var9 = {};
    var9.marginVertical = var12;
    var9.marginHorizontal = var10;
    var10 = 13;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9.borderRadius = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun103066: for (var _fun103066_ip = 0;;) switch (_fun103066_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.channel;
                var _closure2_slot0 = var13;
                var15 = var1.selected;
                var1 = _closure1_slot16;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 14;
                var1 = var4[var1];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStoresObject;
                var1 = _closure1_slot12;
                var5 = new Array(6);
                var5[0] = var1;
                var1 = _closure1_slot8;
                var5[1] = var1;
                var1 = _closure1_slot9;
                var5[2] = var1;
                var1 = _closure1_slot10;
                var5[3] = var1;
                var1 = _closure1_slot7;
                var5[4] = var1;
                var1 = _closure1_slot6;
                var5[5] = var1;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var5 = _closure1_slot12;
                    var4 = var5.getStageInstanceByChannel;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.stageInstance = var3;
                    var5 = _closure1_slot8;
                    var4 = var5.hasUnread;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.hasUnread = var3;
                    var4 = _closure1_slot9;
                    var3 = var4.resolveUnreadSetting;
                    var3 = var3.bind(var4)(var1);
                    var0.resolvedUnreadSetting = var3;
                    var4 = _closure1_slot10;
                    var3 = var4.getVoiceStatesForChannel;
                    var3 = var3.bind(var4)(var1);
                    var0.voiceStates = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getStageHasMedia;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.hasMedia = var3;
                    var5 = _closure1_slot7;
                    var4 = var5.can;
                    var3 = _closure1_slot14;
                    var3 = var3.CONNECT;
                    var3 = var4.bind(var5)(var3, var1);
                    var3 = !var3;
                    var0.locked = var3;
                    var3 = _closure1_slot6;
                    var2 = var3.isCollapsed;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.collapsed = var1;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var1, var2);
                var18 = var1.stageInstance;
                var16 = var1.hasUnread;
                var6 = var1.resolvedUnreadSetting;
                var7 = var1.voiceStates;
                var14 = var1.hasMedia;
                var20 = var1.locked;
                var12 = var1.collapsed;
                var2 = _closure1_slot1;
                var1 = 16;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var13.guild_id;
                var2 = var2.bind(var3)(var1);
                var1 = var13.id;
                var11 = var2[var1];
                var17 = null;
                if (!(var17 == var11)) {
                    _fun103066_ip = 220;
                    continue _fun103066
                }
            case 216:
                var11 = _closure1_slot11;
            case 220:
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var4 = 17;
                var4 = var2[var4];
                var19 = var1.bind(var3)(var4);
                var10 = var19.useStageParticipantsCount;
                var5 = var13.id;
                var4 = 18;
                var4 = var2[var4];
                var4 = var1.bind(var3)(var4);
                var4 = var4.StageChannelParticipantNamedIndex;
                var4 = var4.AUDIENCE;
                var10 = var10.bind(var19)(var5, var4);
                var4 = var11.length;
                var24 = var10 + var4;
                var19 = _closure1_slot4;
                var21 = var19.useCallback;
                var5 = new Array(1);
                var5[0] = var13;
                var4 = function() { // Environment: var0
                    _fun103068: for (var _fun103068_ip = 0;;) switch (_fun103068_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = var1.getGuildId;
                            var2 = var0.bind(var1)();
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun103068_ip = 62;
                                continue _fun103068
                            }
                        case 23:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 19;
                            var1 = var3[var1];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var1);
                            var1 = var5.shouldShowMembershipVerificationGate;
                            var1 = var1.bind(var5)(var2);
                            if (var1) {
                                _fun103068_ip = 130;
                                continue _fun103068
                            }
                        case 62:
                            var8 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var1 = 21;
                            var6 = var7[var1];
                            var1 = undefined;
                            var8 = var8.bind(var1)(var6);
                            var6 = var8.dismissGlobalKeyboard;
                            var6 = var6.bind(var8)();
                            var6 = _closure1_slot0;
                            var5 = 22;
                            var5 = var7[var5];
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.connectAndOpen;
                            var4 = _closure2_slot0;
                            var4 = var5.bind(var6)(var4);
                            return var1;
                        case 130:
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 20;
                            var0 = var4[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.openMemberVerificationModal;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var22 = var21.bind(var19)(var4, var5);
                var5 = var19.useCallback;
                var21 = var13.id;
                var4 = new Array(1);
                var4[0] = var21;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var21 = var5.bind(var19)(var0, var4);
                var4 = _closure1_slot1;
                var0 = 24;
                var0 = var2[var0];
                var4 = var4.bind(var3)(var0);
                var0 = false;
                var25 = var4.bind(var3)(var13, var0);
                var0 = 25;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsConnectedToVoiceChannel;
                var4 = var0.bind(var1)(var13);
                var0 = var17 == var18;
                var5 = undefined;
                if (var0) {
                    _fun103066_ip = 413;
                    continue _fun103066
                }
            case 407:
                var5 = var18.topic;
            case 413:
                var2 = _closure1_slot15;
                var1 = _closure1_slot1;
                var19 = _closure1_slot3;
                var0 = 26;
                var0 = var19[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var23 = _closure1_slot17;
                var19 = {};
                var19.channel = var13;
                var19.channelName = var25;
                var19.userCount = var24;
                var28 = var23.bind(var3)(var19);
                var29 = var0;
                var19 = copyDataProperties(var29, var28);
                var19 = 'onPress';
                var0[var19] = var22;
                var19 = 'onLongPress';
                var0[var19] = var21;
                var21 = var9.container;
                var19 = 'style';
                var0[var19] = var21;
                var19 = 'channel';
                var0[var19] = var13;
                var19 = 'selected';
                var0[var19] = var15;
                var19 = 'locked';
                var0[var19] = var20;
                var18 = var17 != var18;
                var17 = 'isChannelLive';
                var0[var17] = var18;
                if (!var16) {
                    _fun103066_ip = 549;
                    continue _fun103066
                }
            case 546:
                var16 = var4;
            case 549:
                var4 = 'unread';
                var0[var4] = var16;
                var4 = 'resolvedUnreadSetting';
                var0[var4] = var6;
                var4 = 'subtitle';
                var0[var4] = var5;
                var6 = _closure1_slot15;
                var5 = _closure1_slot1;
                var16 = _closure1_slot3;
                var4 = 27;
                var4 = var16[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.channel = var13;
                var4.isChannelSelected = var15;
                var4.isChannelCollapsed = var12;
                if (var14) {
                    _fun103066_ip = 651;
                    continue _fun103066
                }
            case 619:
                var16 = var13.userLimit;
                var15 = 0;
                var15 = var16 > var15;
                if (!var15) {
                    _fun103066_ip = 648;
                    continue _fun103066
                }
            case 634:
                var17 = var13.userLimit;
                var16 = _closure1_slot13;
                var15 = var17 < var16;
            case 648:
                var14 = var15;
            case 651:
                var4.enableConnectedUserLimit = var14;
                var4.voiceStates = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'channelInfo';
                var0[var4] = var5;
                var5 = var11.length;
                var4 = 0;
                var5 = var5 > var4;
                if (!var5) {
                    _fun103066_ip = 767;
                    continue _fun103066
                }
            case 690:
                var7 = _closure1_slot15;
                var6 = _closure1_slot5;
                var4 = {};
                var9 = var9.voiceStates;
                var4.style = var9;
                var9 = _closure1_slot1;
                var14 = _closure1_slot3;
                var8 = 28;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.channel = var13;
                var8.collapsed = var12;
                var8.voiceStates = var11;
                var8.audienceCount = var10;
                var8 = var7.bind(var3)(var9, var8);
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 767:
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4525, 3050, 3901, 4260, 3483, 1377, 660, 8743, 33, 1234, 1297, 671, 566, 4202, 13419, 8368, 5620, 4780, 7403, 1582, 5869, 9053, 4748, 7846, 13295, 13407, 13300, 2]);