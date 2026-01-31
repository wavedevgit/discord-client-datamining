// modules/threads/native/components/ThreadLongPressActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ThreadLongPressActionSheetConnected, environment: var1
        _fun102021: for (var _fun102021_ip = 0;;) switch (_fun102021_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.channel;
                var _closure2_slot0 = var13;
                var0 = var0.onClose;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var1 = var13.getGuildId;
                var1 = var1.bind(var13)();
                var _closure2_slot2 = var1;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 29;
                var2 = var8[var1];
                var7 = var5.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var12
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var6.bind(var7)(var4, var2);
                var2 = var8[var1];
                var7 = var5.bind(var3)(var2);
                var6 = var7.useStateFromStoresObject;
                var2 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var12
                    var0 = {};
                    var5 = _closure1_slot7;
                    var4 = var5.isMuted;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isMuted = var3;
                    var3 = _closure1_slot7;
                    var2 = var3.hasJoined;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.hasJoined = var1;
                    return var0;
                };
                var2 = var6.bind(var7)(var4, var2);
                var15 = var2.isMuted;
                var4 = var2.hasJoined;
                var2 = 30;
                var6 = var8[var2];
                var7 = var5.bind(var3)(var6);
                var6 = var7.useCanManageThread;
                var18 = var6.bind(var7)(var13);
                var6 = var8[var2];
                var7 = var5.bind(var3)(var6);
                var6 = var7.useIsThreadModerator;
                var17 = var6.bind(var7)(var13);
                var6 = var8[var2];
                var7 = var5.bind(var3)(var6);
                var6 = var7.useCanUnarchiveThread;
                var16 = var6.bind(var7)(var13);
                var2 = var8[var2];
                var6 = var5.bind(var3)(var2);
                var2 = var6.useCanJoinThreadVoice;
                var11 = var2.bind(var6)(var13);
                var2 = var8[var1];
                var9 = var5.bind(var3)(var2);
                var7 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var12
                    var2 = _closure1_slot6;
                    var1 = var2.isInChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var9)(var6, var2);
                var1 = var8[var1];
                var9 = var5.bind(var3)(var1);
                var6 = var9.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var12
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isEmpty;
                    var4 = _closure1_slot6;
                    var3 = var4.getVoiceStatesForChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var6.bind(var9)(var2, var1);
                var9 = _closure1_slot1;
                var2 = 32;
                var2 = var8[var2];
                var2 = var9.bind(var3)(var2);
                var6 = var2.bind(var3)(var13);
                var2 = 33;
                var2 = var8[var2];
                var9 = var9.bind(var3)(var2);
                var2 = true;
                var10 = var9.bind(var3)(var13, var2);
                var2 = 34;
                var2 = var8[var2];
                var2 = var5.bind(var3)(var2);
                var5 = var2.DeveloperMode;
                var2 = var5.useSetting;
                var5 = var2.bind(var5)();
                var _closure2_slot3 = var5;
                var8 = null;
                if (!(var8 == var19)) {
                    _fun102021_ip = 456;
                    continue _fun102021
                }
            case 389:
                var20 = _closure1_slot12;
                var9 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 36;
                var2 = var23[var21];
                var9 = var9.bind(var3)(var2);
                var2 = {};
                var22 = _closure1_slot0;
                var21 = var23[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.LARGE;
                var2.size = var21;
                var2.channel = var13;
                var9 = var20.bind(var3)(var9, var2);
                _fun102021_ip = 521;
                continue _fun102021;
            case 456:
                var21 = _closure1_slot12;
                var20 = _closure1_slot1;
                var24 = _closure1_slot2;
                var22 = 35;
                var2 = var24[var22];
                var20 = var20.bind(var3)(var2);
                var2 = {};
                var2.guild = var19;
                var23 = _closure1_slot0;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.GuildIconSizes;
                var22 = var22.LARGE;
                var2.size = var22;
                var9 = var21.bind(var3)(var20, var2);
            case 521:
                var2 = {};
                var2.channel = var13;
                var2.guild = var19;
                var2.canManageThread = var18;
                var2.canModerateThread = var17;
                var2.canUnarchiveThread = var16;
                var2.isMuted = var15;
                var2.hasJoined = var4;
                var4 = var13.isForumPost;
                var4 = var4.bind(var13)();
                var2.isForumPost = var4;
                var4 = null;
                if (!var11) {
                    _fun102021_ip = 584;
                    continue _fun102021
                }
            case 576:
                var4 = null;
                if (var7) {
                    _fun102021_ip = 584;
                    continue _fun102021
                }
            case 581:
                var4 = var6;
            case 584:
                var2.handleJoinThreadVoice = var4;
                var2.hasActiveThreadVoice = var1;
                var1 = function(arg0) { // Original name: getActionSheetButtons, environment: var12
                    _fun102026: for (var _fun102026_ip = 0;;) switch (_fun102026_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.channel;
                            var _closure3_slot0 = var4;
                            var10 = var0.canManageThread;
                            var1 = var0.canModerateThread;
                            var3 = var0.canUnarchiveThread;
                            var13 = var0.isMuted;
                            var _closure3_slot1 = var13;
                            var11 = var0.hasJoined;
                            var7 = var0.isForumPost;
                            var16 = var0.handleJoinThreadVoice;
                            var17 = var0.hasActiveThreadVoice;
                            var0 = new Array(0);
                            var12 = var0.push;
                            var2 = {};
                            var6 = 'mark-as-read';
                            var2.sectionKey = var6;
                            var15 = {};
                            var18 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var6 = 7;
                            var14 = var19[var6];
                            var8 = undefined;
                            var14 = var18.bind(var8)(var14);
                            var21 = var14.intl;
                            var20 = var21.string;
                            var14 = var19[var6];
                            var14 = var18.bind(var8)(var14);
                            var14 = var14.t;
                            var14 = var14.e6RscS;
                            var14 = var20.bind(var21)(var14);
                            var15.label = var14;
                            var14 = 8;
                            var14 = var19[var14];
                            var14 = var18.bind(var8)(var14);
                            var14 = var14.EyeIcon;
                            var15.IconComponent = var14;
                            var14 = function() { // Original name: onPress, environment: var5
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 9;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.ack;
                                var2 = _closure3_slot0;
                                var10 = var2.id;
                                var2 = {};
                                var6 = _closure1_slot10;
                                var6 = var6.THREAD_ACTION_SHEET;
                                var2.section = var6;
                                var6 = _closure1_slot9;
                                var6 = var6.MARK_THREAD_AS_READ_BUTTON;
                                var2.object = var6;
                                var1 = _closure1_slot8;
                                var1 = var1.ACK_MANUAL;
                                var2.objectType = var1;
                                var11 = var5;
                                var9 = var2;
                                var8 = true;
                                var7 = true;
                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                return var0;
                            };
                            var15.onPress = var14;
                            var14 = new Array(1);
                            var14[0] = var15;
                            var2.buttons = var14;
                            var2 = var12.bind(var0)(var2);
                            var2 = {};
                            var12 = 'channel-actions';
                            var2.sectionKey = var12;
                            var12 = new Array(0);
                            var2.buttons = var12;
                            var14 = var2.buttons;
                            var12 = var14.push;
                            if (var11) {
                                _fun102026_ip = 369;
                                continue _fun102026
                            }
                        case 244:
                            var11 = {};
                            var18 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var19 = var15[var6];
                            var19 = var18.bind(var8)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var15 = var15[var6];
                            var15 = var18.bind(var8)(var15);
                            var18 = var15.t;
                            if (var7) {
                                _fun102026_ip = 303;
                                continue _fun102026
                            }
                        case 290:
                            var15 = var18["10kukS"];
                            var15 = var19.bind(var20)(var15);
                            _fun102026_ip = 314;
                            continue _fun102026;
                        case 303:
                            var18 = var18.ihLPiO;
                            var15 = var19.bind(var20)(var18);
                        case 314:
                            var11.label = var15;
                            var18 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var15 = 12;
                            var15 = var19[var15];
                            var15 = var18.bind(var8)(var15);
                            var15 = var15.GroupPlusIcon;
                            var11.IconComponent = var15;
                            var15 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.joinThread;
                                var2 = _closure3_slot0;
                                var1 = 'Context Menu';
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var11.onPress = var15;
                            var11 = var12.bind(var14)(var11);
                            _fun102026_ip = 496;
                            continue _fun102026;
                        case 369:
                            var11 = {};
                            var18 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var19 = var15[var6];
                            var19 = var18.bind(var8)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var15 = var15[var6];
                            var15 = var18.bind(var8)(var15);
                            var18 = var15.t;
                            if (var7) {
                                _fun102026_ip = 428;
                                continue _fun102026
                            }
                        case 415:
                            var15 = var18["fa/84m"];
                            var15 = var19.bind(var20)(var15);
                            _fun102026_ip = 439;
                            continue _fun102026;
                        case 428:
                            var18 = var18["2LsZdT"];
                            var15 = var19.bind(var20)(var18);
                        case 439:
                            var11.label = var15;
                            var18 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var15 = 10;
                            var15 = var19[var15];
                            var15 = var18.bind(var8)(var15);
                            var15 = var15.UserMinusIcon;
                            var11.IconComponent = var15;
                            var15 = true;
                            var11.isDestructive = var15;
                            var15 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.leaveThread;
                                var2 = _closure3_slot0;
                                var1 = 'Context Menu';
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var11.onPress = var15;
                            var11 = var12.bind(var14)(var11);
                        case 496:
                            var12 = null;
                            if (!(var12 != var16)) {
                                _fun102026_ip = 629;
                                continue _fun102026
                            }
                        case 505:
                            var15 = var2.buttons;
                            var14 = var15.push;
                            var11 = {};
                            var21 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var19 = var18[var6];
                            var19 = var21.bind(var8)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var18 = var18[var6];
                            var18 = var21.bind(var8)(var18);
                            var18 = var18.t;
                            if (var17) {
                                _fun102026_ip = 575;
                                continue _fun102026
                            }
                        case 562:
                            var17 = var18.My50nf;
                            var17 = var19.bind(var20)(var17);
                            _fun102026_ip = 586;
                            continue _fun102026;
                        case 575:
                            var18 = var18["0D/6Rz"];
                            var17 = var19.bind(var20)(var18);
                        case 586:
                            var11.label = var17;
                            var18 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var17 = 13;
                            var17 = var19[var17];
                            var17 = var18.bind(var8)(var17);
                            var17 = var17.PhoneCallIcon;
                            var11.IconComponent = var17;
                            var11.onPress = var16;
                            var11 = var14.bind(var15)(var11);
                        case 629:
                            var11 = var4.threadMetadata;
                            if (!(var12 != var11)) {
                                _fun102026_ip = 651;
                                continue _fun102026
                            }
                        case 639:
                            var11 = var11.archived;
                            if (var11) {
                                _fun102026_ip = 793;
                                continue _fun102026
                            }
                        case 651:
                            if (!var10) {
                                _fun102026_ip = 930;
                                continue _fun102026
                            }
                        case 657:
                            var12 = var2.buttons;
                            var11 = var12.push;
                            var10 = {};
                            var15 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var16 = var14[var6];
                            var16 = var15.bind(var8)(var16);
                            var17 = var16.intl;
                            var16 = var17.string;
                            var14 = var14[var6];
                            var14 = var15.bind(var8)(var14);
                            var15 = var14.t;
                            if (var7) {
                                _fun102026_ip = 727;
                                continue _fun102026
                            }
                        case 714:
                            var14 = var15.wiIevd;
                            var14 = var16.bind(var17)(var14);
                            _fun102026_ip = 738;
                            continue _fun102026;
                        case 727:
                            var15 = var15.BTs4Kb;
                            var14 = var16.bind(var17)(var15);
                        case 738:
                            var10.label = var14;
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var14 = 15;
                            var14 = var16[var14];
                            var14 = var15.bind(var8)(var14);
                            var14 = var14.XLargeIcon;
                            var10.IconComponent = var14;
                            var14 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.archiveThread;
                                var2 = _closure3_slot0;
                                var1 = false;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var10.onPress = var14;
                            var10 = var11.bind(var12)(var10);
                            _fun102026_ip = 930;
                            continue _fun102026;
                        case 793:
                            if (!var3) {
                                _fun102026_ip = 930;
                                continue _fun102026
                            }
                        case 799:
                            var11 = var2.buttons;
                            var10 = var11.push;
                            var3 = {};
                            var14 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var15 = var12[var6];
                            var15 = var14.bind(var8)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var12 = var12[var6];
                            var12 = var14.bind(var8)(var12);
                            var14 = var12.t;
                            if (var7) {
                                _fun102026_ip = 869;
                                continue _fun102026
                            }
                        case 856:
                            var12 = var14.S9E4G7;
                            var12 = var15.bind(var16)(var12);
                            _fun102026_ip = 880;
                            continue _fun102026;
                        case 869:
                            var14 = var14.cnRubV;
                            var12 = var15.bind(var16)(var14);
                        case 880:
                            var3.label = var12;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var12 = 14;
                            var12 = var15[var12];
                            var12 = var14.bind(var8)(var12);
                            var12 = var12.ClockIcon;
                            var3.IconComponent = var12;
                            var12 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.unarchiveThread;
                                var2 = _closure3_slot0;
                                var1 = false;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var3.onPress = var12;
                            var3 = var10.bind(var11)(var3);
                        case 930:
                            if (!var1) {
                                _fun102026_ip = 1159;
                                continue _fun102026
                            }
                        case 936:
                            var3 = var4.isLockedThread;
                            var11 = var3.bind(var4)();
                            var10 = var2.buttons;
                            var4 = var10.push;
                            var3 = {};
                            var16 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var14 = var12[var6];
                            var14 = var16.bind(var8)(var14);
                            var15 = var14.intl;
                            var14 = var15.string;
                            var12 = var12[var6];
                            var12 = var16.bind(var8)(var12);
                            var12 = var12.t;
                            if (var11) {
                                _fun102026_ip = 1082;
                                continue _fun102026
                            }
                        case 1003:
                            if (var7) {
                                _fun102026_ip = 1019;
                                continue _fun102026
                            }
                        case 1006:
                            var11 = var12.HoCqm8;
                            var11 = var14.bind(var15)(var11);
                            _fun102026_ip = 1030;
                            continue _fun102026;
                        case 1019:
                            var16 = var12["Ur/0Na"];
                            var11 = var14.bind(var15)(var16);
                        case 1030:
                            var3.label = var11;
                            var16 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var11 = 17;
                            var11 = var17[var11];
                            var11 = var16.bind(var8)(var11);
                            var11 = var11.LockIcon;
                            var3.IconComponent = var11;
                            var11 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.lockThread;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var3.onPress = var11;
                            var11 = var4.bind(var10)(var3);
                            _fun102026_ip = 1159;
                            continue _fun102026;
                        case 1082:
                            if (var7) {
                                _fun102026_ip = 1098;
                                continue _fun102026
                            }
                        case 1085:
                            var11 = var12["jeyb/W"];
                            var11 = var14.bind(var15)(var11);
                            _fun102026_ip = 1109;
                            continue _fun102026;
                        case 1098:
                            var12 = var12["/OKSxp"];
                            var11 = var14.bind(var15)(var12);
                        case 1109:
                            var3.label = var11;
                            var12 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var11 = 16;
                            var11 = var14[var11];
                            var11 = var12.bind(var8)(var11);
                            var11 = var11.LockUnlockedIcon;
                            var3.IconComponent = var11;
                            var11 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.unlockThread;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var3.onPress = var11;
                            var3 = var4.bind(var10)(var3);
                        case 1159:
                            if (!var1) {
                                _fun102026_ip = 1298;
                                continue _fun102026
                            }
                        case 1165:
                            var4 = var2.buttons;
                            var3 = var4.push;
                            var1 = {};
                            var11 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var12 = var10[var6];
                            var12 = var11.bind(var8)(var12);
                            var14 = var12.intl;
                            var12 = var14.string;
                            var10 = var10[var6];
                            var10 = var11.bind(var8)(var10);
                            var11 = var10.t;
                            if (var7) {
                                _fun102026_ip = 1237;
                                continue _fun102026
                            }
                        case 1222:
                            var10 = var11["2Mk1TP"];
                            var10 = var12.bind(var14)(var10);
                            _fun102026_ip = 1248;
                            continue _fun102026;
                        case 1237:
                            var11 = var11.NP1yHG;
                            var10 = var12.bind(var14)(var11);
                        case 1248:
                            var1.label = var10;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = 18;
                            var10 = var12[var10];
                            var10 = var11.bind(var8)(var10);
                            var10 = var10.PencilIcon;
                            var1.IconComponent = var10;
                            var10 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 19;
                                var5 = var3[var1];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var5);
                                var5 = var6.setSection;
                                var4 = _closure1_slot11;
                                var4 = var4.OVERVIEW;
                                var4 = var5.bind(var6)(var4);
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.open;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onPress = var10;
                            var1 = var3.bind(var4)(var1);
                        case 1298:
                            var4 = var2.buttons;
                            var3 = var4.push;
                            var1 = {};
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = var12[var6];
                            var10 = var11.bind(var8)(var10);
                            var15 = var10.intl;
                            var14 = var15.string;
                            var10 = var12[var6];
                            var10 = var11.bind(var8)(var10);
                            var10 = var10.t;
                            var10 = var10.WqhZss;
                            var10 = var14.bind(var15)(var10);
                            var1.label = var10;
                            var10 = 20;
                            var10 = var12[var10];
                            var10 = var11.bind(var8)(var10);
                            var10 = var10.LinkIcon;
                            var1.IconComponent = var10;
                            var10 = false;
                            var1.isDestructive = var10;
                            var10 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 21;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.copyGuildChannelOrThreadLink;
                                var1 = _closure3_slot0;
                                var2 = var1.guild_id;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var1.onPress = var10;
                            var1 = var3.bind(var4)(var1);
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var2);
                            var2 = {};
                            var1 = 'notifications';
                            var2.sectionKey = var1;
                            var1 = new Array(0);
                            var2.buttons = var1;
                            var4 = var2.buttons;
                            var3 = var4.push;
                            var1 = {};
                            var14 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var11 = var10[var6];
                            var11 = var14.bind(var8)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var10[var6];
                            var10 = var14.bind(var8)(var10);
                            var10 = var10.t;
                            if (var13) {
                                _fun102026_ip = 1578;
                                continue _fun102026
                            }
                        case 1499:
                            if (var7) {
                                _fun102026_ip = 1515;
                                continue _fun102026
                            }
                        case 1502:
                            var13 = var10.bUUd8q;
                            var13 = var11.bind(var12)(var13);
                            _fun102026_ip = 1526;
                            continue _fun102026;
                        case 1515:
                            var14 = var10["nP+Ykd"];
                            var13 = var11.bind(var12)(var14);
                        case 1526:
                            var1.label = var13;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var13 = 22;
                            var13 = var15[var13];
                            var13 = var14.bind(var8)(var13);
                            var13 = var13.BellSlashIcon;
                            var1.IconComponent = var13;
                            var13 = function() { // Original name: onPress, environment: var5
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 23;
                                var3 = var1[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.openLazy;
                                var3 = _closure1_slot0;
                                var2 = 25;
                                var2 = var1[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = 24;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var3 = var3.bind(var0)(var2, var1);
                                var6 = _closure3_slot0;
                                var7 = var6.id;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var2 = var1.concat;
                                var1 = 'muteSettings';
                                var2 = var2.bind(var1)(var7);
                                var1 = {};
                                var7 = var6.getGuildId;
                                var7 = var7.bind(var6)();
                                var1.guildId = var7;
                                var6 = var6.id;
                                var1.channelId = var6;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var1.onPress = var13;
                            var13 = var3.bind(var4)(var1);
                            _fun102026_ip = 1655;
                            continue _fun102026;
                        case 1578:
                            if (var7) {
                                _fun102026_ip = 1594;
                                continue _fun102026
                            }
                        case 1581:
                            var7 = var10["Cq/TzF"];
                            var7 = var11.bind(var12)(var7);
                            _fun102026_ip = 1605;
                            continue _fun102026;
                        case 1594:
                            var10 = var10["0JQfsP"];
                            var7 = var11.bind(var12)(var10);
                        case 1605:
                            var1.label = var7;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var7 = 26;
                            var7 = var11[var7];
                            var7 = var10.bind(var8)(var7);
                            var7 = var7.BellIcon;
                            var1.IconComponent = var7;
                            var7 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.setNotificationSettings;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var5 = _closure3_slot1;
                                var5 = !var5;
                                var1.muted = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var1.onPress = var7;
                            var1 = var3.bind(var4)(var1);
                        case 1655:
                            var4 = var2.buttons;
                            var3 = var4.push;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var10 = var9[var6];
                            var10 = var7.bind(var8)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var6 = var9[var6];
                            var6 = var7.bind(var8)(var6);
                            var6 = var6.t;
                            var6 = var6.h850Ss;
                            var6 = var10.bind(var11)(var6);
                            var1.label = var6;
                            var6 = 27;
                            var6 = var9[var6];
                            var6 = var7.bind(var8)(var6);
                            var6 = var6.ChannelNotificationIcon;
                            var1.IconComponent = var6;
                            var5 = function() { // Original name: onPress, environment: var5
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 28;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.showThreadNotificationsBottomSheet;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onPress = var5;
                            var5 = true;
                            var1.disableColor = var5;
                            var1 = var3.bind(var4)(var1);
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var7 = var1.bind(var3)(var2);
                _closure2_slot4 = var7;
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var6 = var7.length;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var0;
                var0 = function() { // Environment: var12
                    _fun102039: for (var _fun102039_ip = 0;;) switch (_fun102039_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = var1.length;
                            var1 = 0;
                            var1 = var1 !== var2;
                            if (var1) {
                                _fun102039_ip = 25;
                                continue _fun102039
                            }
                        case 21:
                            var1 = _closure2_slot3;
                        case 25:
                            if (var1) {
                                _fun102039_ip = 38;
                                continue _fun102039
                            }
                        case 28:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot13;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 37;
                var0 = var11[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var8 = _closure1_slot12;
                var4 = 38;
                var4 = var11[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.ActionSheetIconHeader;
                var4 = {};
                var4.title = var10;
                var4.icon = var9;
                var4 = var8.bind(var3)(var6, var4);
                var0.header = var4;
                var6 = var7.map;
                var4 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 39;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.ActionSheetRow;
                    var2 = var1.Group;
                    var1 = {};
                    var7 = var0.buttons;
                    var6 = var7.map;
                    var5 = function(arg0, arg1) { // Environment: var5
                        _fun102041: for (var _fun102041_ip = 0;;) switch (_fun102041_ip) {
                            case 0:
                                var1 = arg0;
                                var7 = var1.label;
                                var10 = var1.IconComponent;
                                var5 = var1.trailing;
                                var8 = var1.isDestructive;
                                var9 = var1.disableColor;
                                var1 = var1.onPress;
                                var _closure4_slot0 = var1;
                                var4 = _closure1_slot12;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var11 = 39;
                                var1 = var1[var11];
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var2 = var1.ActionSheetRow;
                                var1 = {};
                                var1.label = var7;
                                var7 = 'default';
                                if (!var8) {
                                    _fun102041_ip = 94;
                                    continue _fun102041
                                }
                            case 90:
                                var7 = 'danger';
                            case 94:
                                var1.variant = var7;
                                var8 = _closure1_slot12;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var11];
                                var6 = var7.bind(var3)(var6);
                                var6 = var6.ActionSheetRow;
                                var7 = var6.Icon;
                                var6 = {};
                                var6.IconComponent = var10;
                                var6.disableColor = var9;
                                var6 = var8.bind(var3)(var7, var6);
                                var1.icon = var6;
                                var1.trailing = var5;
                                var0 = function() { // Original name: onPress, environment: var0
                                    var1 = _closure2_slot1;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    var1 = _closure4_slot0;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var1.onPress = var0;
                                var0 = arg1;
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    var1.children = var5;
                    var0 = var0.sectionKey;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6 = var6.bind(var7)(var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun102021_ip = 961;
                    continue _fun102021
                }
            case 758:
                var9 = _closure1_slot12;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 39;
                var6 = var17[var13];
                var6 = var16.bind(var3)(var6);
                var6 = var6.ActionSheetRow;
                var8 = var6.Group;
                var7 = {};
                var11 = _closure1_slot12;
                var6 = var17[var13];
                var6 = var16.bind(var3)(var6);
                var10 = var6.ActionSheetRow;
                var6 = {};
                var15 = _closure1_slot12;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.ActionSheetRow;
                var14 = var13.Icon;
                var13 = {};
                var18 = 40;
                var18 = var17[var18];
                var18 = var16.bind(var3)(var18);
                var18 = var18.IdIcon;
                var13.IconComponent = var18;
                var13 = var15.bind(var3)(var14, var13);
                var6.icon = var13;
                var13 = 7;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.DQ797g;
                var13 = var14.bind(var15)(var13);
                var6.label = var13;
                var12 = function() { // Original name: onPress, environment: var12
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 41;
                    var4 = var3[var4];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.copy;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var1);
                    var1 = 42;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentIdCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var6.onPress = var12;
                var6 = var11.bind(var3)(var10, var6);
                var7.children = var6;
                var6 = 'developer-actions';
                var5 = var9.bind(var3)(var8, var7, var6);
            case 961:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsObjectTypes;
    var _closure1_slot8 = var6;
    var6 = var3.AnalyticsObjects;
    var _closure1_slot9 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot10 = var6;
    var3 = var3.ChannelSettingsSections;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 43;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/ThreadLongPressActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ThreadLongPressActionSheet, environment: var1
        _fun102044: for (var _fun102044_ip = 0;;) switch (_fun102044_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var5 = var1.onClose;
                var _closure2_slot1 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 29;
                var2 = var4[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var7)(var3, var2);
                var _closure2_slot2 = var6;
                var7 = _closure1_slot3;
                var3 = var7.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var0 = function() { // Environment: var0
                    _fun102046: for (var _fun102046_ip = 0;;) switch (_fun102046_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun102046_ip = 23;
                                continue _fun102046
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var7)(var0, var2);
                var0 = null;
                var2 = var0 != var6;
                if (!var2) {
                    _fun102044_ip = 151;
                    continue _fun102044
                }
            case 126:
                var3 = _closure1_slot12;
                var2 = _closure1_slot14;
                var1 = {};
                var1.channel = var6;
                var1.onClose = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 151:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1410, 3480, 3052, 660, 33, 1234, 7502, 4538, 3211, 6429, 8594, 7745, 3233, 3223, 9718, 4821, 7475, 6427, 3213, 9106, 8715, 3237, 8702, 1307, 8131, 9110, 8921, 566, 6659, 22, 8870, 4755, 1348, 7355, 5414, 5171, 5175, 7694, 7689, 5253, 3106, 2]);