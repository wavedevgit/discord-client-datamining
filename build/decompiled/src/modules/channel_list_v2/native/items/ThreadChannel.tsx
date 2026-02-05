// modules/channel_list_v2/native/items/ThreadChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun102042: for (var _fun102042_ip = 0;;) switch (_fun102042_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.channel;
                var _closure2_slot0 = var18;
                var27 = var1.selected;
                var15 = var1.threadId;
                var10 = var1.threadIndex;
                var _closure2_slot1 = var10;
                var1 = var1.threadCount;
                var _closure2_slot2 = var1;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var2 = _closure1_slot20;
                var16 = var2.bind(var3)();
                var _closure2_slot3 = var16;
                var2 = var18.id;
                var _closure2_slot4 = var2;
                var12 = null;
                var4 = var12 == var18;
                var2 = undefined;
                if (var4) {
                    _fun102042_ip = 109;
                    continue _fun102042
                }
            case 103:
                var2 = var18.ownerId;
            case 109:
                _closure2_slot5 = var2;
                var4 = var12 == var18;
                var2 = undefined;
                if (var4) {
                    _fun102042_ip = 128;
                    continue _fun102042
                }
            case 122:
                var2 = var18.parent_id;
            case 128:
                _closure2_slot6 = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 18;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var2 = var6.useFontScale;
                var8 = var2.bind(var6)();
                _closure2_slot7 = var8;
                var2 = 19;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var4 = new Array(8);
                var4[0] = var2;
                var2 = _closure1_slot5;
                var4[1] = var2;
                var2 = _closure1_slot10;
                var4[2] = var2;
                var2 = _closure1_slot12;
                var4[3] = var2;
                var2 = _closure1_slot11;
                var4[4] = var2;
                var2 = _closure1_slot8;
                var4[5] = var2;
                var2 = _closure1_slot9;
                var4[6] = var2;
                var2 = _closure1_slot7;
                var4[7] = var2;
                var2 = function() { // Environment: var0
                    _fun102043: for (var _fun102043_ip = 0;;) switch (_fun102043_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.isMuted;
                            var0 = _closure2_slot4;
                            var2 = var2.bind(var3)(var0);
                            var0 = {};
                            var6 = _closure1_slot10;
                            var5 = var6.getUser;
                            var3 = _closure2_slot5;
                            var3 = var5.bind(var6)(var3);
                            var0.user = var3;
                            var6 = _closure1_slot6;
                            var5 = var6.getChannel;
                            var3 = _closure2_slot6;
                            var3 = var5.bind(var6)(var3);
                            var0.parentChannel = var3;
                            var5 = _closure1_slot12;
                            var3 = var5.getVoiceStatesForChannel;
                            var7 = _closure2_slot0;
                            var3 = var3.bind(var5)(var7);
                            var0.voiceStates = var3;
                            var6 = _closure1_slot11;
                            var5 = var6.hasVideo;
                            var3 = var7.id;
                            var3 = var5.bind(var6)(var3);
                            var0.hasVideo = var3;
                            var6 = _closure1_slot7;
                            var5 = var6.can;
                            var3 = _closure1_slot14;
                            var3 = var3.CONNECT;
                            var3 = var5.bind(var6)(var3, var7);
                            var3 = !var3;
                            var0.isLocked = var3;
                            var0.muted = var2;
                            var2 = !var2;
                            if (!var2) {
                                _fun102043_ip = 186;
                                continue _fun102043
                            }
                        case 167:
                            var6 = _closure1_slot8;
                            var5 = var6.hasUnread;
                            var3 = _closure2_slot4;
                            var2 = var5.bind(var6)(var3);
                        case 186:
                            var0.unread = var2;
                            var3 = _closure1_slot8;
                            var2 = var3.getMentionCount;
                            var4 = _closure2_slot4;
                            var2 = var2.bind(var3)(var4);
                            var0.mentionCount = var2;
                            var3 = _closure1_slot8;
                            var2 = var3.getIsMentionLowImportance;
                            var2 = var2.bind(var3)(var4);
                            var0.isMentionLowImportance = var2;
                            var2 = _closure1_slot9;
                            var1 = var2.getVoiceChannelId;
                            var1 = var1.bind(var2)();
                            var0.selectedVoiceChannelId = var1;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var4, var2);
                var7 = var2.user;
                _closure2_slot8 = var7;
                var6 = var2.parentChannel;
                _closure2_slot9 = var6;
                var17 = var2.voiceStates;
                var24 = var2.hasVideo;
                var4 = var2.isLocked;
                var22 = var2.muted;
                var20 = var2.unread;
                var26 = var2.mentionCount;
                var23 = var2.isMentionLowImportance;
                var13 = var2.selectedVoiceChannelId;
                var9 = _closure1_slot3;
                var5 = var9.useMemo;
                var2 = new Array(4);
                var2[0] = var10;
                var2[1] = var1;
                var2[2] = var8;
                var1 = var16.threadLineSegment;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun102044: for (var _fun102044_ip = 0;;) switch (_fun102044_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var5 = 0;
                            var9 = var5 === var1;
                            var2 = _closure2_slot2;
                            var0 = 1;
                            var0 = var2 - var0;
                            var7 = var1 === var0;
                            var3 = _closure1_slot17;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var0 = _closure2_slot3;
                            var4 = var0.threadLineSegment;
                            var0 = new Array(2);
                            var0[0] = var4;
                            var4 = {};
                            var8 = 0;
                            if (!var9) {
                                _fun102044_ip = 69;
                                continue _fun102044
                            }
                        case 66:
                            var8 = 2;
                        case 69:
                            var4.top = var8;
                            var8 = '100%';
                            if (!var7) {
                                _fun102044_ip = 143;
                                continue _fun102044
                            }
                        case 82:
                            var13 = global;
                            var12 = var13.Math;
                            var11 = var12.ceil;
                            var15 = var13.Math;
                            var14 = var15.max;
                            var13 = _closure2_slot7;
                            var10 = 1.2;
                            var10 = var10 * var13;
                            var13 = 8;
                            var10 = var10 * var13;
                            var10 = var14.bind(var15)(var13, var10);
                            var8 = var11.bind(var12)(var10);
                        case 143:
                            var4.height = var8;
                            var8 = 0;
                            if (!var9) {
                                _fun102044_ip = 184;
                                continue _fun102044
                            }
                        case 152:
                            var12 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var10 = 16;
                            var11 = var11[var10];
                            var10 = undefined;
                            var10 = var12.bind(var10)(var11);
                            var10 = var10.radii;
                            var8 = var10.round;
                        case 184:
                            var4.borderTopRightRadius = var8;
                            var8 = 0;
                            if (!var9) {
                                _fun102044_ip = 226;
                                continue _fun102044
                            }
                        case 194:
                            var11 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var9 = 16;
                            var10 = var10[var9];
                            var9 = undefined;
                            var9 = var11.bind(var9)(var10);
                            var9 = var9.radii;
                            var8 = var9.round;
                        case 226:
                            var4.borderTopLeftRadius = var8;
                            var8 = 0;
                            if (!var7) {
                                _fun102044_ip = 268;
                                continue _fun102044
                            }
                        case 236:
                            var11 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var9 = 16;
                            var10 = var10[var9];
                            var9 = undefined;
                            var9 = var11.bind(var9)(var10);
                            var9 = var9.radii;
                            var8 = var9.round;
                        case 268:
                            var4.borderBottomRightRadius = var8;
                            var5 = 0;
                            if (!var7) {
                                _fun102044_ip = 310;
                                continue _fun102044
                            }
                        case 278:
                            var8 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var6 = 16;
                            var7 = var7[var6];
                            var6 = undefined;
                            var6 = var8.bind(var6)(var7);
                            var6 = var6.radii;
                            var5 = var6.round;
                        case 310:
                            var4.borderBottomLeftRadius = var5;
                            var0[1] = var4;
                            var1.style = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var5 = var5.bind(var9)(var1, var2);
                var1 = var12 == var17;
                var19 = 0;
                var25 = 0;
                if (var1) {
                    _fun102042_ip = 396;
                    continue _fun102042
                }
            case 391:
                var25 = var17.length;
            case 396:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 20;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.channel = var18;
                var1.locked = var4;
                var1.video = var24;
                var1.selected = var27;
                var21 = var2.bind(var3)(var1);
                var9 = _closure1_slot3;
                var4 = var9.useCallback;
                var2 = new Array(1);
                var2[0] = var18;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.transitionToThread;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var5 = _closure1_slot16;
                    var5 = var5.CHANNEL_LIST;
                    var1.source = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var31 = var4.bind(var9)(var1, var2);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(3);
                var1[0] = var18;
                var1[1] = var7;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun102046: for (var _fun102046_ip = 0;;) switch (_fun102046_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.isForumPost;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun102046_ip = 55;
                                continue _fun102046
                            }
                        case 20:
                            var1 = _closure2_slot8;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun102046_ip = 55;
                                continue _fun102046
                            }
                        case 30:
                            var1 = _closure2_slot9;
                            if (!(var2 != var1)) {
                                _fun102046_ip = 55;
                                continue _fun102046
                            }
                        case 38:
                            var2 = _closure2_slot9;
                            var1 = var2.isForumLikeChannel;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun102046_ip = 96;
                                continue _fun102046
                            }
                        case 55:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 23;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            _fun102046_ip = 135;
                            continue _fun102046;
                        case 96:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 22;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot9;
                            var0 = var2.bind(var3)(var1, var0);
                        case 135:
                            var0 = undefined;
                            return var0;
                    }
                };
                var28 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot18;
                var1 = _closure1_slot19;
                var0 = {};
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot17;
                var6 = _closure1_slot21;
                var5 = {};
                var9 = var16.threadLineSegment;
                var9 = var9.backgroundColor;
                var5.color = var9;
                var5.fontScale = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot18;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var16.threadRow;
                var5.style = var8;
                var10 = _closure1_slot17;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var16.unreadContainer;
                var8.style = var11;
                var11 = var20;
                if (!var11) {
                    _fun102042_ip = 640;
                    continue _fun102042
                }
            case 614:
                var32 = _closure1_slot17;
                var30 = _closure1_slot4;
                var29 = {};
                var33 = var16.unreadIcon;
                var29.style = var33;
                var11 = var32.bind(var3)(var30, var29);
            case 640:
                var8.children = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var11 = _closure1_slot17;
                var10 = _closure1_slot4;
                var9 = {};
                var29 = var16.spineSpacer;
                var9.style = var29;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var11 = _closure1_slot17;
                var29 = _closure1_slot1;
                var30 = _closure1_slot2;
                var9 = 24;
                var9 = var30[var9];
                var10 = var29.bind(var3)(var9);
                var9 = {};
                var9.onPress = var31;
                var9.onLongPress = var28;
                var16 = var16.container;
                var9.style = var16;
                var16 = true;
                var9.accessible = var16;
                var28 = 'button';
                var9.accessibilityRole = var28;
                var28 = 25;
                var28 = var30[var28];
                var29 = var29.bind(var3)(var28);
                var28 = {};
                var28.channel = var18;
                var28.unread = var20;
                var28.mentionCount = var26;
                var28 = var29.bind(var3)(var28);
                var9.accessibilityLabel = var28;
                var28 = {};
                var28.selected = var27;
                var9.accessibilityState = var28;
                var9.channel = var18;
                var9.selected = var27;
                var9.muted = var22;
                var9.unread = var20;
                var20 = _closure1_slot15;
                var20 = var20.ALL_MESSAGES;
                var9.resolvedUnreadSetting = var20;
                var9.hideIcon = var16;
                if (!(var19 !== var26)) {
                    _fun102042_ip = 881;
                    continue _fun102042
                }
            case 838:
                var22 = _closure1_slot17;
                var20 = _closure1_slot1;
                var27 = _closure1_slot2;
                var16 = 27;
                var16 = var27[var16];
                var20 = var20.bind(var3)(var16);
                var16 = {};
                var16.value = var26;
                var16.isMentionLowImportance = var23;
                var16 = var22.bind(var3)(var20, var16);
                _fun102042_ip = 941;
                continue _fun102042;
            case 881:
                var20 = null;
                if (!var21) {
                    _fun102042_ip = 938;
                    continue _fun102042
                }
            case 886:
                var23 = _closure1_slot17;
                var22 = _closure1_slot0;
                var26 = _closure1_slot2;
                var21 = 26;
                var21 = var26[var21];
                var21 = var22.bind(var3)(var21);
                var22 = var21.ConnectedUserLimit;
                var21 = {};
                var21.userCount = var25;
                var21.video = var24;
                var21.channel = var18;
                var20 = var23.bind(var3)(var22, var21);
            case 938:
                var16 = var20;
            case 941:
                var9.channelInfo = var16;
                var16 = var17.length;
                var12 = null;
                if (!(var19 !== var16)) {
                    _fun102042_ip = 1168;
                    continue _fun102042
                }
            case 960:
                if (!(var13 !== var15)) {
                    _fun102042_ip = 1117;
                    continue _fun102042
                }
            case 967:
                var15 = var17.length;
                var13 = 1;
                if (!(var13 !== var15)) {
                    _fun102042_ip = 1117;
                    continue _fun102042
                }
            case 982:
                var16 = _closure1_slot17;
                var15 = _closure1_slot1;
                var21 = _closure1_slot2;
                var13 = 29;
                var13 = var21[var13];
                var15 = var15.bind(var3)(var13);
                var13 = {
                    'users': null,
                    'max': 8,
                    'guildId': null,
                    'renderIcon': false,
                    'noPadding': true
                };
                var20 = _closure1_slot0;
                var19 = 30;
                var19 = var21[var19];
                var21 = var20.bind(var3)(var19);
                var20 = var21.computeSummarizedVoiceUsers;
                var19 = {
                    'channels': null,
                    'selectedChannelId': null,
                    'selectedVoiceChannelId': null
                };
                var22 = new Array(1);
                var22[0] = var18;
                var19.channels = var22;
                var22 = {};
                var23 = var18.id;
                var22[var23] = var17;
                var19.voiceStates = var22;
                var19 = var20.bind(var21)(var19);
                var13.users = var19;
                var19 = var18.guild_id;
                var13.guildId = var19;
                var13 = var16.bind(var3)(var15, var13);
                _fun102042_ip = 1165;
                continue _fun102042;
            case 1117:
                var16 = _closure1_slot17;
                var15 = _closure1_slot1;
                var19 = _closure1_slot2;
                var14 = 28;
                var14 = var19[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.channel = var18;
                var18 = false;
                var14.collapsed = var18;
                var14.voiceStates = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 1165:
                var12 = var13;
            case 1168:
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.getScaledChannelRowHeight;
    var _closure1_slot13 = var6;
    var10 = var3.CHANNEL_MARGIN_VERTICAL;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OpenThreadAnalyticsLocations;
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot17 = var6;
    var6 = var3.jsxs;
    var _closure1_slot18 = var6;
    var3 = var3.Fragment;
    var _closure1_slot19 = var3;
    var3 = 15;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginVertical': null,
        'marginStart': 2,
        'marginEnd': 8,
        'borderRadius': null,
        'flex': 1
    };
    var9.marginVertical = var10;
    var10 = 16;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9.borderRadius = var12;
    var3.container = var9;
    var9 = {
        'flex': 0,
        'flexDirection': 'row',
        'alignSelf': 'stretch'
    };
    var3.threadRow = var9;
    var9 = {
        'width': 8,
        'alignItems': 'flex-start',
        'justifyContent': 'flex-start'
    };
    var3.unreadContainer = var9;
    var9 = {};
    var12 = 28;
    var9.width = var12;
    var3.spineSpacer = var9;
    var9 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'backgroundColor': null,
        'marginLeft': 4294967292,
        'marginTop': 12
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_ACTIVE;
    var9.backgroundColor = var12;
    var3.unreadIcon = var9;
    var9 = {
        'backgroundColor': null,
        'width': 2,
        'position': 'absolute',
        'left': 23
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.SPINE_DEFAULT;
    var9.backgroundColor = var10;
    var3.threadLineSegment = var9;
    var9 = {
        'position': 'absolute',
        'left': 23
    };
    var3.threadSpineCurve = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot20 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var7 = var0.color;
        var10 = var0.fontScale;
        var3 = _closure1_slot17;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var4 = 17;
        var0 = var8[var4];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {
            'width': 12,
            'height': 16
        };
        var11 = 16;
        var6 = {
            'position': 'absolute',
            'left': 23
        };
        var9 = _closure1_slot13;
        var9 = var9.bind(var2)(var10);
        var10 = 2;
        var9 = var9 / var10;
        var9 = var9 - var11;
        var9 = var9 + var10;
        var6.top = var9;
        var0.style = var6;
        var6 = _closure1_slot17;
        var5 = _closure1_slot0;
        var4 = var8[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.Path;
        var4 = {};
        var4.fill = var7;
        var7 = 'M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z';
        var4.d = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot21 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/items/ThreadChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102048: for (var _fun102048_ip = 0;;) switch (_fun102048_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.threadId;
                var _closure2_slot0 = var8;
                var7 = var1.threadIndex;
                var6 = var1.threadCount;
                var5 = var1.selected;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 19;
                var2 = var4[var2];
                var4 = undefined;
                var9 = var3.bind(var4)(var2);
                var3 = var9.useStateFromStores;
                var10 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var10;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var3.bind(var9)(var2, var0);
                var0 = null;
                var2 = var0 == var9;
                if (var2) {
                    _fun102048_ip = 137;
                    continue _fun102048
                }
            case 97:
                var3 = _closure1_slot17;
                var2 = _closure1_slot22;
                var1 = {};
                var1.channel = var9;
                var1.threadId = var8;
                var1.threadIndex = var7;
                var1.threadCount = var6;
                var1.selected = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 137:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3093, 1372, 3091, 3947, 1670, 1621, 3521, 3526, 8821, 660, 4304, 1233, 33, 1297, 671, 5464, 4090, 566, 11689, 3943, 9790, 13310, 13312, 7897, 13315, 8663, 13317, 13323, 4236, 2]);