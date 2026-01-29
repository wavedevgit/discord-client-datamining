// modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
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
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot13 = var3;
    var3 = 55;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ForumPostLongPressActionSheet, environment: var1
        _fun76435: for (var _fun76435_ip = 0;;) switch (_fun76435_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.thread;
                var _closure2_slot0 = var19;
                var18 = var0.parentChannel;
                var0 = var0.onClose;
                var _closure2_slot1 = var0;
                var0 = var19.getGuildId;
                var0 = var0.bind(var19)();
                var _closure2_slot2 = var0;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 43;
                var1 = var9[var2];
                var3 = undefined;
                var7 = var8.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var23 = var6.bind(var7)(var5, var1);
                var1 = var9[var2];
                var10 = var8.bind(var3)(var1);
                var7 = var10.useStateFromStores;
                var1 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var1;
                var5 = function() { // Environment: var4
                    var2 = _closure1_slot4;
                    var1 = var2.hasJoined;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var7.bind(var10)(var6, var5);
                var5 = var9[var2];
                var7 = var8.bind(var3)(var5);
                var6 = var7.useStateFromStores;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot4;
                    var1 = var2.isMuted;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var6.bind(var7)(var5, var1);
                var1 = var9[var2];
                var7 = var8.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot3;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var4
                    _fun76439: for (var _fun76439_ip = 0;;) switch (_fun76439_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun76439_ip = 38;
                                continue _fun76439
                            }
                        case 16:
                            var3 = _closure1_slot3;
                            var2 = var3.isLurking;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var5, var1);
                var5 = 44;
                var5 = var9[var5];
                var6 = var8.bind(var3)(var5);
                var5 = var6.useFirstForumPostMessage;
                var5 = var5.bind(var6)(var19);
                var5 = var5.firstMessage;
                var6 = 45;
                var7 = var9[var6];
                var10 = var8.bind(var3)(var7);
                var7 = var10.useIsThreadModerator;
                var15 = var7.bind(var10)(var18);
                var7 = var9[var6];
                var10 = var8.bind(var3)(var7);
                var7 = var10.useCanManageThread;
                var12 = var7.bind(var10)(var19);
                var6 = var9[var6];
                var7 = var8.bind(var3)(var6);
                var6 = var7.useCanUnarchiveThread;
                var6 = var6.bind(var7)(var19);
                var7 = 46;
                var7 = var9[var7];
                var10 = var8.bind(var3)(var7);
                var7 = var10.useExistingPin;
                var10 = var7.bind(var10)(var19);
                var7 = var9[var2];
                var14 = var8.bind(var3)(var7);
                var13 = var14.useStateFromStores;
                var7 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() { // Environment: var4
                    _fun76440: for (var _fun76440_ip = 0;;) switch (_fun76440_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getCount;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 != var1;
                            var0 = 0;
                            if (!var2) {
                                _fun76440_ip = 44;
                                continue _fun76440
                            }
                        case 41:
                            var0 = var1;
                        case 44:
                            return var0;
                    }
                };
                var7 = var13.bind(var14)(var11, var7);
                var11 = 47;
                var11 = var9[var11];
                var11 = var8.bind(var3)(var11);
                var13 = var11.DeveloperMode;
                var11 = var13.useSetting;
                var11 = var11.bind(var13)();
                var2 = var9[var2];
                var13 = var8.bind(var3)(var2);
                var9 = var13.useStateFromStores;
                var2 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var4
                    var1 = _closure1_slot6;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var9.bind(var13)(var8, var2);
                var2 = null;
                var8 = var2 == var5;
                var13 = undefined;
                if (var8) {
                    _fun76435_ip = 456;
                    continue _fun76435
                }
            case 445:
                var5 = var5.author;
                var13 = var5.id;
            case 456:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 48;
                var5 = var9[var5];
                var8 = var8.bind(var3)(var5);
                var5 = true;
                var9 = var8.bind(var3)(var19, var5);
                if (!(var2 == var23)) {
                    _fun76435_ip = 555;
                    continue _fun76435
                }
            case 488:
                var20 = _closure1_slot13;
                var8 = _closure1_slot1;
                var24 = _closure1_slot2;
                var21 = 50;
                var2 = var24[var21];
                var8 = var8.bind(var3)(var2);
                var2 = {};
                var22 = _closure1_slot0;
                var21 = var24[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.LARGE;
                var2.size = var21;
                var2.channel = var19;
                var8 = var20.bind(var3)(var8, var2);
                _fun76435_ip = 620;
                continue _fun76435;
            case 555:
                var21 = _closure1_slot13;
                var20 = _closure1_slot1;
                var24 = _closure1_slot2;
                var22 = 49;
                var2 = var24[var22];
                var20 = var20.bind(var3)(var2);
                var2 = {};
                var2.guild = var23;
                var23 = _closure1_slot0;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.GuildIconSizes;
                var22 = var22.LARGE;
                var2.size = var22;
                var8 = var21.bind(var3)(var20, var2);
            case 620:
                var2 = {};
                var2.thread = var19;
                var2.parentChannel = var18;
                var2.hasJoinedPost = var17;
                var2.muted = var16;
                var2.isModerator = var15;
                var13 = var14 === var13;
                var2.isAuthor = var13;
                var2.canManageThread = var12;
                var2.developerModeEnabled = var11;
                var2.existingPin = var10;
                var2.messageCount = var7;
                var2.canUnarchiveThread = var6;
                var2.isLurking = var1;
                var1 = function(arg0) { // Environment: var4
                    _fun76442: for (var _fun76442_ip = 0;;) switch (_fun76442_ip) {
                        case 0:
                            var0 = arg0;
                            var15 = var0.thread;
                            var _closure3_slot0 = var15;
                            var27 = var0.hasJoinedPost;
                            var19 = var0.muted;
                            var _closure3_slot1 = var19;
                            var2 = var0.isModerator;
                            var _closure3_slot2 = var2;
                            var10 = var0.isAuthor;
                            var _closure3_slot3 = var10;
                            var12 = var0.canManageThread;
                            var _closure3_slot4 = var12;
                            var1 = var0.developerModeEnabled;
                            var4 = var0.existingPin;
                            var _closure3_slot5 = var4;
                            var9 = var0.parentChannel;
                            var _closure3_slot6 = var9;
                            var6 = var0.messageCount;
                            var13 = var0.canUnarchiveThread;
                            var4 = var0.isLurking;
                            var7 = undefined;
                            var _closure3_slot7 = var7;
                            var0 = new Array(0);
                            var5 = var15.threadMetadata;
                            var8 = null;
                            var11 = var8 == var5;
                            var14 = undefined;
                            if (var11) {
                                _fun76442_ip = 138;
                                continue _fun76442
                            }
                        case 132:
                            var14 = var5.archived;
                        case 138:
                            var5 = var15.threadMetadata;
                            var8 = var8 == var5;
                            var24 = undefined;
                            if (var8) {
                                _fun76442_ip = 159;
                                continue _fun76442
                            }
                        case 153:
                            var24 = var5.locked;
                        case 159:
                            var11 = var15.hasFlag;
                            var5 = _closure1_slot12;
                            var5 = var5.PINNED;
                            var18 = var11.bind(var15)(var5);
                            var16 = var0.push;
                            var11 = {};
                            var5 = 'mark-as-read';
                            var11.sectionKey = var5;
                            var20 = {};
                            var21 = _closure1_slot0;
                            var22 = _closure1_slot2;
                            var5 = 9;
                            var17 = var22[var5];
                            var17 = var21.bind(var7)(var17);
                            var25 = var17.intl;
                            var23 = var25.string;
                            var17 = var22[var5];
                            var17 = var21.bind(var7)(var17);
                            var17 = var17.t;
                            var17 = var17.e6RscS;
                            var17 = var23.bind(var25)(var17);
                            var20.label = var17;
                            var17 = 10;
                            var17 = var22[var17];
                            var17 = var21.bind(var7)(var17);
                            var17 = var17.EyeIcon;
                            var20.IconComponent = var17;
                            var17 = function() { // Original name: onPress, environment: var3
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 11;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.ack;
                                var2 = _closure3_slot0;
                                var10 = var2.id;
                                var2 = {};
                                var6 = _closure1_slot9;
                                var6 = var6.MARK_FORUM_POST_AS_READ_BUTTON;
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
                            var20.onPress = var17;
                            var17 = new Array(1);
                            var17[0] = var20;
                            var11.buttons = var17;
                            var11 = var16.bind(var0)(var11);
                            var11 = {};
                            var16 = 'channel-actions';
                            var11.sectionKey = var16;
                            var16 = new Array(0);
                            var11.buttons = var16;
                            if (var4) {
                                _fun76442_ip = 506;
                                continue _fun76442
                            }
                        case 341:
                            var20 = var11.buttons;
                            var17 = var20.push;
                            var16 = {};
                            var22 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var21 = var23[var5];
                            var21 = var22.bind(var7)(var21);
                            var26 = var21.intl;
                            var25 = var26.string;
                            var21 = var23[var5];
                            var21 = var22.bind(var7)(var21);
                            var21 = var21.t;
                            if (var27) {
                                _fun76442_ip = 453;
                                continue _fun76442
                            }
                        case 398:
                            var27 = var21.ihLPiO;
                            var27 = var25.bind(var26)(var27);
                            var16.label = var27;
                            var27 = 14;
                            var27 = var23[var27];
                            var27 = var22.bind(var7)(var27);
                            var27 = var27.BellIcon;
                            var16.IconComponent = var27;
                            var27 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.joinThread;
                                var1 = _closure3_slot0;
                                var0 = 'Context Menu';
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var16.onPress = var27;
                            var27 = var17.bind(var20)(var16);
                            _fun76442_ip = 506;
                            continue _fun76442;
                        case 453:
                            var21 = var21["2LsZdT"];
                            var21 = var25.bind(var26)(var21);
                            var16.label = var21;
                            var21 = 12;
                            var21 = var23[var21];
                            var21 = var22.bind(var7)(var21);
                            var21 = var21.UserMinusIcon;
                            var16.IconComponent = var21;
                            var21 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.leaveThread;
                                var1 = _closure3_slot0;
                                var0 = 'Context Menu';
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var16.onPress = var21;
                            var16 = var17.bind(var20)(var16);
                        case 506:
                            if (var14) {
                                _fun76442_ip = 624;
                                continue _fun76442
                            }
                        case 509:
                            if (!var12) {
                                _fun76442_ip = 734;
                                continue _fun76442
                            }
                        case 515:
                            var17 = var11.buttons;
                            var16 = var17.push;
                            var14 = {};
                            var21 = _closure1_slot0;
                            var22 = _closure1_slot2;
                            var20 = var22[var5];
                            var20 = var21.bind(var7)(var20);
                            var25 = var20.intl;
                            var23 = var25.string;
                            var20 = var22[var5];
                            var20 = var21.bind(var7)(var20);
                            var20 = var20.t;
                            var20 = var20.BTs4Kb;
                            var20 = var23.bind(var25)(var20);
                            var14.label = var20;
                            var20 = 16;
                            var20 = var22[var20];
                            var20 = var21.bind(var7)(var20);
                            var20 = var20.XLargeIcon;
                            var14.IconComponent = var20;
                            var20 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.archiveThread;
                                var2 = _closure3_slot0;
                                var1 = false;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var14.onPress = var20;
                            var14 = var16.bind(var17)(var14);
                            _fun76442_ip = 734;
                            continue _fun76442;
                        case 624:
                            if (!var13) {
                                _fun76442_ip = 734;
                                continue _fun76442
                            }
                        case 627:
                            var16 = var11.buttons;
                            var14 = var16.push;
                            var13 = {};
                            var20 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var17 = var21[var5];
                            var17 = var20.bind(var7)(var17);
                            var23 = var17.intl;
                            var22 = var23.string;
                            var17 = var21[var5];
                            var17 = var20.bind(var7)(var17);
                            var17 = var17.t;
                            var17 = var17.cnRubV;
                            var17 = var22.bind(var23)(var17);
                            var13.label = var17;
                            var17 = 15;
                            var17 = var21[var17];
                            var17 = var20.bind(var7)(var17);
                            var17 = var17.ClockIcon;
                            var13.IconComponent = var17;
                            var17 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.unarchiveThread;
                                var2 = _closure3_slot0;
                                var1 = false;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var13.onPress = var17;
                            var13 = var14.bind(var16)(var13);
                        case 734:
                            if (!var12) {
                                _fun76442_ip = 905;
                                continue _fun76442
                            }
                        case 740:
                            var16 = var11.buttons;
                            var14 = var16.push;
                            var13 = {};
                            var20 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var17 = var21[var5];
                            var17 = var20.bind(var7)(var17);
                            var23 = var17.intl;
                            var22 = var23.string;
                            var17 = var21[var5];
                            var17 = var20.bind(var7)(var17);
                            var17 = var17.t;
                            if (var24) {
                                _fun76442_ip = 852;
                                continue _fun76442
                            }
                        case 797:
                            var24 = var17["Ur/0Na"];
                            var24 = var22.bind(var23)(var24);
                            var13.label = var24;
                            var24 = 18;
                            var24 = var21[var24];
                            var24 = var20.bind(var7)(var24);
                            var24 = var24.LockIcon;
                            var13.IconComponent = var24;
                            var24 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.lockThread;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var13.onPress = var24;
                            var24 = var14.bind(var16)(var13);
                            _fun76442_ip = 905;
                            continue _fun76442;
                        case 852:
                            var17 = var17["/OKSxp"];
                            var17 = var22.bind(var23)(var17);
                            var13.label = var17;
                            var17 = 17;
                            var17 = var21[var17];
                            var17 = var20.bind(var7)(var17);
                            var17 = var17.LockUnlockedIcon;
                            var13.IconComponent = var17;
                            var17 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.unlockThread;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var13.onPress = var17;
                            var13 = var14.bind(var16)(var13);
                        case 905:
                            var14 = !var2;
                            if (!var14) {
                                _fun76442_ip = 921;
                                continue _fun76442
                            }
                        case 911:
                            var13 = var15.isLockedThread;
                            var14 = var13.bind(var15)();
                        case 921:
                            var13 = var10;
                            if (!var10) {
                                _fun76442_ip = 930;
                                continue _fun76442
                            }
                        case 927:
                            var13 = !var14;
                        case 930:
                            if (!var13) {
                                _fun76442_ip = 1040;
                                continue _fun76442
                            }
                        case 933:
                            var15 = var11.buttons;
                            var14 = var15.push;
                            var13 = {};
                            var17 = _closure1_slot0;
                            var20 = _closure1_slot2;
                            var16 = var20[var5];
                            var16 = var17.bind(var7)(var16);
                            var22 = var16.intl;
                            var21 = var22.string;
                            var16 = var20[var5];
                            var16 = var17.bind(var7)(var16);
                            var16 = var16.t;
                            var16 = var16.NP1yHG;
                            var16 = var21.bind(var22)(var16);
                            var13.label = var16;
                            var16 = 19;
                            var16 = var20[var16];
                            var16 = var17.bind(var7)(var16);
                            var16 = var16.PencilIcon;
                            var13.IconComponent = var16;
                            var16 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 20;
                                var1 = var8[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openCreateForumPostModal;
                                var1 = {};
                                var6 = _closure3_slot6;
                                var7 = var6.guild_id;
                                var1.guildId = var7;
                                var6 = var6.id;
                                var1.parentChannelId = var6;
                                var4 = _closure3_slot0;
                                var6 = var4.id;
                                var1.threadId = var6;
                                var7 = _closure1_slot1;
                                var6 = 21;
                                var6 = var8[var6];
                                var9 = var7.bind(var0)(var6);
                                var6 = var9.castChannelIdAsMessageId;
                                var4 = var4.id;
                                var4 = var6.bind(var9)(var4);
                                var1.messageId = var4;
                                var4 = true;
                                var1.isEdit = var4;
                                var6 = 22;
                                var4 = var8[var6];
                                var4 = var7.bind(var0)(var4);
                                var9 = var4.FORUM_CHANNEL;
                                var4 = new Array(2);
                                var4[0] = var9;
                                var6 = var8[var6];
                                var6 = var7.bind(var0)(var6);
                                var6 = var6.GUILD_CHANNEL;
                                var4[1] = var6;
                                var1.analyticsLocations = var4;
                                var4 = {};
                                var6 = _closure1_slot10;
                                var6 = var6.CHANNEL_LIST;
                                var4.section = var6;
                                var5 = _closure1_slot9;
                                var5 = var5.CONTEXT_MENU;
                                var4.object = var5;
                                var1.analyticsLocationObject = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var13.onPress = var16;
                            var13 = var14.bind(var15)(var13);
                        case 1040:
                            if (!var12) {
                                _fun76442_ip = 1279;
                                continue _fun76442
                            }
                        case 1046:
                            var14 = var11.buttons;
                            var13 = var14.push;
                            var12 = {};
                            var16 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var15 = var17[var5];
                            var15 = var16.bind(var7)(var15);
                            var21 = var15.intl;
                            var20 = var21.string;
                            var15 = var17[var5];
                            var15 = var16.bind(var7)(var15);
                            var15 = var15.t;
                            var15 = var15.SGuVbR;
                            var15 = var20.bind(var21)(var15);
                            var12.label = var15;
                            var15 = 23;
                            var15 = var17[var15];
                            var15 = var16.bind(var7)(var15);
                            var15 = var15.SettingsIcon;
                            var12.IconComponent = var15;
                            var15 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 24;
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
                            var12.onPress = var15;
                            var12 = var13.bind(var14)(var12);
                            var9 = var9.availableTags;
                            var12 = var9.length;
                            var9 = 0;
                            if (!(var12 > var9)) {
                                _fun76442_ip = 1279;
                                continue _fun76442
                            }
                        case 1172:
                            var13 = var11.buttons;
                            var12 = var13.push;
                            var9 = {};
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var14 = var16[var5];
                            var14 = var15.bind(var7)(var14);
                            var20 = var14.intl;
                            var17 = var20.string;
                            var14 = var16[var5];
                            var14 = var15.bind(var7)(var14);
                            var14 = var14.t;
                            var14 = var14["436ZFw"];
                            var14 = var17.bind(var20)(var14);
                            var9.label = var14;
                            var14 = 25;
                            var14 = var16[var14];
                            var14 = var15.bind(var7)(var14);
                            var14 = var14.TagsIcon;
                            var9.IconComponent = var14;
                            var14 = function() { // Original name: onPress, environment: var3
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 26;
                                var3 = var1[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.openLazy;
                                var3 = _closure1_slot0;
                                var2 = 28;
                                var2 = var1[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = 27;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var3 = var3.bind(var0)(var2, var1);
                                var2 = {};
                                var6 = _closure3_slot0;
                                var2.thread = var6;
                                var6 = _closure3_slot6;
                                var2.parentChannel = var6;
                                var1 = _closure3_slot4;
                                var2.canManageThread = var1;
                                var1 = 'ForumPostTagsActionSheet';
                                var1 = var4.bind(var5)(var3, var1, var2);
                                return var0;
                            };
                            var9.onPress = var14;
                            var9 = var12.bind(var13)(var9);
                        case 1279:
                            var13 = var11.buttons;
                            var12 = var13.push;
                            var9 = {};
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var14 = var16[var5];
                            var14 = var15.bind(var7)(var14);
                            var20 = var14.intl;
                            var17 = var20.string;
                            var14 = var16[var5];
                            var14 = var15.bind(var7)(var14);
                            var14 = var14.t;
                            var14 = var14.WqhZss;
                            var14 = var17.bind(var20)(var14);
                            var9.label = var14;
                            var14 = 29;
                            var14 = var16[var14];
                            var14 = var15.bind(var7)(var14);
                            var14 = var14.LinkIcon;
                            var9.IconComponent = var14;
                            var14 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 30;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.handleCopyLinkForumPost;
                                var1 = _closure3_slot0;
                                var3 = var1.guild_id;
                                var2 = var1.id;
                                var1 = {};
                                var6 = _closure1_slot10;
                                var6 = var6.CONTEXT_MENU;
                                var1.section = var6;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var9.onPress = var14;
                            var9 = var12.bind(var13)(var9);
                            var9 = var0.push;
                            var9 = var9.bind(var0)(var11);
                            if (var4) {
                                _fun76442_ip = 1711;
                                continue _fun76442
                            }
                        case 1402:
                            var9 = {};
                            var4 = 'notifications';
                            var9.sectionKey = var4;
                            var4 = new Array(0);
                            var9.buttons = var4;
                            var12 = var9.buttons;
                            var11 = var12.push;
                            var4 = {};
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var13 = var15[var5];
                            var13 = var14.bind(var7)(var13);
                            var17 = var13.intl;
                            var16 = var17.string;
                            var13 = var15[var5];
                            var13 = var14.bind(var7)(var13);
                            var13 = var13.t;
                            if (var19) {
                                _fun76442_ip = 1534;
                                continue _fun76442
                            }
                        case 1479:
                            var19 = var13["nP+Ykd"];
                            var19 = var16.bind(var17)(var19);
                            var4.label = var19;
                            var19 = 31;
                            var19 = var15[var19];
                            var19 = var14.bind(var7)(var19);
                            var19 = var19.BellSlashIcon;
                            var4.IconComponent = var19;
                            var19 = function() { // Original name: onPress, environment: var3
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 26;
                                var3 = var1[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.openLazy;
                                var3 = _closure1_slot0;
                                var2 = 28;
                                var2 = var1[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = 32;
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
                            var4.onPress = var19;
                            var19 = var11.bind(var12)(var4);
                            _fun76442_ip = 1587;
                            continue _fun76442;
                        case 1534:
                            var13 = var13["0JQfsP"];
                            var13 = var16.bind(var17)(var13);
                            var4.label = var13;
                            var13 = 14;
                            var13 = var15[var13];
                            var13 = var14.bind(var7)(var13);
                            var13 = var13.BellIcon;
                            var4.IconComponent = var13;
                            var13 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.setNotificationSettings;
                                var1 = _closure3_slot0;
                                var0 = {};
                                var4 = _closure3_slot1;
                                var4 = !var4;
                                var0.muted = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var4.onPress = var13;
                            var4 = var11.bind(var12)(var4);
                        case 1587:
                            var12 = var9.buttons;
                            var11 = var12.push;
                            var4 = {};
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var13 = var15[var5];
                            var13 = var14.bind(var7)(var13);
                            var17 = var13.intl;
                            var16 = var17.string;
                            var13 = var15[var5];
                            var13 = var14.bind(var7)(var13);
                            var13 = var13.t;
                            var13 = var13.HcoRu0;
                            var13 = var16.bind(var17)(var13);
                            var4.label = var13;
                            var13 = 33;
                            var13 = var15[var13];
                            var13 = var14.bind(var7)(var13);
                            var13 = var13.ChannelNotificationIcon;
                            var4.IconComponent = var13;
                            var13 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 34;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.showThreadNotificationsBottomSheet;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var4.onPress = var13;
                            var13 = true;
                            var4.disableColor = var13;
                            var4 = var11.bind(var12)(var4);
                            var4 = var0.push;
                            var4 = var4.bind(var0)(var9);
                        case 1711:
                            var4 = {};
                            var9 = 'admin-actions';
                            var4.sectionKey = var9;
                            var9 = new Array(0);
                            var4.buttons = var9;
                            if (!var2) {
                                _fun76442_ip = 1908;
                                continue _fun76442
                            }
                        case 1739:
                            var12 = var4.buttons;
                            var11 = var12.push;
                            var9 = {};
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var13 = var15[var5];
                            var13 = var14.bind(var7)(var13);
                            var17 = var13.intl;
                            var16 = var17.string;
                            var13 = var15[var5];
                            var13 = var14.bind(var7)(var13);
                            var13 = var13.t;
                            if (var18) {
                                _fun76442_ip = 1853;
                                continue _fun76442
                            }
                        case 1796:
                            var18 = var13.EnaWhu;
                            var18 = var16.bind(var17)(var18);
                            var9.label = var18;
                            var18 = 35;
                            var18 = var15[var18];
                            var18 = var14.bind(var7)(var18);
                            var18 = var18.PinIcon;
                            var9.IconComponent = var18;
                            var18 = function() { // Original name: onPress, environment: var3
                                _fun76458: for (var _fun76458_ip = 0;;) switch (_fun76458_ip) {
                                    case 0:
                                        var2 = _closure3_slot5;
                                        var1 = null;
                                        if (!(var1 == var2)) {
                                            _fun76458_ip = 58;
                                            continue _fun76458
                                        }
                                    case 13:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 13;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var2 = var3.bind(var1)(var2);
                                        var1 = var2.pin;
                                        var0 = _closure3_slot0;
                                        var0 = var1.bind(var2)(var0);
                                        _fun76458_ip = 315;
                                        continue _fun76458;
                                    case 58:
                                        var1 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var0 = 36;
                                        var0 = var8[var0];
                                        var7 = undefined;
                                        var2 = var1.bind(var7)(var0);
                                        var1 = var2.show;
                                        var0 = {};
                                        var6 = _closure1_slot0;
                                        var3 = 9;
                                        var4 = var8[var3];
                                        var4 = var6.bind(var7)(var4);
                                        var9 = var4.intl;
                                        var5 = var9.string;
                                        var4 = var8[var3];
                                        var4 = var6.bind(var7)(var4);
                                        var4 = var4.t;
                                        var4 = var4.IMbjxo;
                                        var4 = var5.bind(var9)(var4);
                                        var0.title = var4;
                                        var4 = var8[var3];
                                        var4 = var6.bind(var7)(var4);
                                        var9 = var4.intl;
                                        var5 = var9.string;
                                        var4 = var8[var3];
                                        var4 = var6.bind(var7)(var4);
                                        var4 = var4.t;
                                        var4 = var4["mi5+Vl"];
                                        var4 = var5.bind(var9)(var4);
                                        var0.body = var4;
                                        var4 = var8[var3];
                                        var4 = var6.bind(var7)(var4);
                                        var9 = var4.intl;
                                        var5 = var9.string;
                                        var4 = var8[var3];
                                        var4 = var6.bind(var7)(var4);
                                        var4 = var4.t;
                                        var4 = var4.gm1Vej;
                                        var4 = var5.bind(var9)(var4);
                                        var0.cancelText = var4;
                                        var4 = var8[var3];
                                        var4 = var6.bind(var7)(var4);
                                        var5 = var4.intl;
                                        var4 = var5.string;
                                        var3 = var8[var3];
                                        var3 = var6.bind(var7)(var3);
                                        var3 = var3.t;
                                        var3 = var3.p89ACt;
                                        var3 = var4.bind(var5)(var3);
                                        var0.confirmText = var3;
                                        var3 = function() { // Original name: onConfirm, environment: var3
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 13;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var4 = var2.bind(var0)(var1);
                                            var3 = var4.replacePin;
                                            var2 = _closure3_slot5;
                                            var1 = _closure3_slot0;
                                            var1 = var3.bind(var4)(var2, var1);
                                            return var0;
                                        };
                                        var0.onConfirm = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 315:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var9.onPress = var18;
                            var18 = var11.bind(var12)(var9);
                            _fun76442_ip = 1908;
                            continue _fun76442;
                        case 1853:
                            var13 = var13.trD8ao;
                            var13 = var16.bind(var17)(var13);
                            var9.label = var13;
                            var13 = 35;
                            var13 = var15[var13];
                            var13 = var14.bind(var7)(var13);
                            var13 = var13.PinIcon;
                            var9.IconComponent = var13;
                            var13 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.unpin;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var9.onPress = var13;
                            var9 = var11.bind(var12)(var9);
                        case 1908:
                            if (var2) {
                                _fun76442_ip = 1917;
                                continue _fun76442
                            }
                        case 1911:
                            if (!var10) {
                                _fun76442_ip = 2067;
                                continue _fun76442
                            }
                        case 1917:
                            if (!var10) {
                                _fun76442_ip = 1923;
                                continue _fun76442
                            }
                        case 1920:
                            var10 = !var2;
                        case 1923:
                            if (!var10) {
                                _fun76442_ip = 1932;
                                continue _fun76442
                            }
                        case 1926:
                            var2 = 0;
                            var10 = var6 > var2;
                        case 1932:
                            _closure3_slot7 = var10;
                            var9 = var4.buttons;
                            var6 = var9.push;
                            var2 = {};
                            var14 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var12 = var11[var5];
                            var12 = var14.bind(var7)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var11 = var11[var5];
                            var11 = var14.bind(var7)(var11);
                            var11 = var11.t;
                            if (var10) {
                                _fun76442_ip = 2006;
                                continue _fun76442
                            }
                        case 1993:
                            var10 = var11.nEOg1N;
                            var10 = var12.bind(var13)(var10);
                            _fun76442_ip = 2017;
                            continue _fun76442;
                        case 2006:
                            var11 = var11.xwMqD7;
                            var10 = var12.bind(var13)(var11);
                        case 2017:
                            var2.label = var10;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = 37;
                            var10 = var12[var10];
                            var10 = var11.bind(var7)(var10);
                            var10 = var10.TrashIcon;
                            var2.IconComponent = var10;
                            var10 = function() { // Original name: onPress, environment: var3
                                _fun76460: for (var _fun76460_ip = 0;;) switch (_fun76460_ip) {
                                    case 0:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var4 = 9;
                                        var2 = var1[var4];
                                        var0 = undefined;
                                        var2 = var3.bind(var0)(var2);
                                        var7 = var2.intl;
                                        var6 = var7.string;
                                        var2 = var1[var4];
                                        var2 = var3.bind(var0)(var2);
                                        var2 = var2.t;
                                        var2 = var2.nEOg1N;
                                        var2 = var6.bind(var7)(var2);
                                        var6 = var1[var4];
                                        var6 = var3.bind(var0)(var6);
                                        var7 = var6.intl;
                                        var6 = var7.format;
                                        var1 = var1[var4];
                                        var1 = var3.bind(var0)(var1);
                                        var1 = var1.t;
                                        var3 = var1.su3voL;
                                        var1 = {};
                                        var8 = _closure3_slot0;
                                        var9 = var8.name;
                                        var10 = global;
                                        var8 = var10.HermesInternal;
                                        var8 = var8.concat;
                                        var12 = '"';
                                        var8 = var8.bind(var12)(var9, var12);
                                        var1.postName = var8;
                                        var3 = var6.bind(var7)(var3, var1);
                                        var1 = _closure3_slot7;
                                        if (var1) {
                                            _fun76460_ip = 275;
                                            continue _fun76460
                                        }
                                    case 156:
                                        var1 = _closure3_slot3;
                                        if (!var1) {
                                            _fun76460_ip = 170;
                                            continue _fun76460
                                        }
                                    case 163:
                                        var6 = _closure3_slot2;
                                        var1 = !var6;
                                    case 170:
                                        var8 = var2;
                                        var7 = var3;
                                        if (!var1) {
                                            _fun76460_ip = 373;
                                            continue _fun76460
                                        }
                                    case 182:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var6 = var1[var4];
                                        var6 = var3.bind(var0)(var6);
                                        var9 = var6.intl;
                                        var6 = var9.format;
                                        var1 = var1[var4];
                                        var1 = var3.bind(var0)(var1);
                                        var1 = var1.t;
                                        var3 = var1["6/pY2+"];
                                        var1 = {};
                                        var11 = _closure3_slot0;
                                        var11 = var11.name;
                                        var10 = var10.HermesInternal;
                                        var10 = var10.concat;
                                        var10 = var10.bind(var12)(var11, var12);
                                        var1.postName = var10;
                                        var7 = var6.bind(var9)(var3, var1);
                                        var8 = var2;
                                        _fun76460_ip = 373;
                                        continue _fun76460;
                                    case 275:
                                        var9 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var2 = var1[var4];
                                        var2 = var9.bind(var0)(var2);
                                        var6 = var2.intl;
                                        var3 = var6.string;
                                        var2 = var1[var4];
                                        var2 = var9.bind(var0)(var2);
                                        var2 = var2.t;
                                        var2 = var2.xwMqD7;
                                        var8 = var3.bind(var6)(var2);
                                        var3 = var1[var4];
                                        var3 = var9.bind(var0)(var3);
                                        var6 = var3.intl;
                                        var3 = var6.string;
                                        var1 = var1[var4];
                                        var1 = var9.bind(var0)(var1);
                                        var1 = var1.t;
                                        var1 = var1.RUHcyk;
                                        var7 = var3.bind(var6)(var1);
                                    case 373:
                                        var2 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var1 = 36;
                                        var1 = var6[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.show;
                                        var1 = {};
                                        var1.title = var8;
                                        var1.body = var7;
                                        var5 = _closure1_slot0;
                                        var7 = var6[var4];
                                        var7 = var5.bind(var0)(var7);
                                        var9 = var7.intl;
                                        var8 = var9.string;
                                        var7 = var6[var4];
                                        var7 = var5.bind(var0)(var7);
                                        var7 = var7.t;
                                        var7 = var7.gm1Vej;
                                        var7 = var8.bind(var9)(var7);
                                        var1.cancelText = var7;
                                        var7 = var6[var4];
                                        var7 = var5.bind(var0)(var7);
                                        var8 = var7.intl;
                                        var7 = var8.string;
                                        var4 = var6[var4];
                                        var4 = var5.bind(var0)(var4);
                                        var4 = var4.t;
                                        var4 = var4.p89ACt;
                                        var4 = var7.bind(var8)(var4);
                                        var1.confirmText = var4;
                                        var4 = function() { // Original name: onConfirm, environment: var4
                                            _fun76461: for (var _fun76461_ip = 0;;) switch (_fun76461_ip) {
                                                case 0:
                                                    var1 = _closure3_slot7;
                                                    var6 = _closure1_slot1;
                                                    var7 = _closure1_slot2;
                                                    if (var1) {
                                                        _fun76461_ip = 57;
                                                        continue _fun76461
                                                    }
                                                case 21:
                                                    var1 = 24;
                                                    var2 = var7[var1];
                                                    var1 = undefined;
                                                    var3 = var6.bind(var1)(var2);
                                                    var2 = var3.deleteChannel;
                                                    var1 = _closure3_slot0;
                                                    var1 = var1.id;
                                                    var1 = var2.bind(var3)(var1);
                                                    _fun76461_ip = 120;
                                                    continue _fun76461;
                                                case 57:
                                                    var1 = 38;
                                                    var1 = var7[var1];
                                                    var5 = undefined;
                                                    var3 = var6.bind(var5)(var1);
                                                    var2 = var3.deleteMessage;
                                                    var0 = _closure3_slot0;
                                                    var1 = var0.id;
                                                    var4 = 21;
                                                    var4 = var7[var4];
                                                    var5 = var6.bind(var5)(var4);
                                                    var4 = var5.castChannelIdAsMessageId;
                                                    var0 = var0.id;
                                                    var0 = var4.bind(var5)(var0);
                                                    var0 = var2.bind(var3)(var1, var0);
                                                case 120:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1.onConfirm = var4;
                                        var4 = 39;
                                        var4 = var6[var4];
                                        var4 = var5.bind(var0)(var4);
                                        var4 = var4.ButtonColors;
                                        var4 = var4.RED;
                                        var1.confirmColor = var4;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var2.onPress = var10;
                            var2 = var6.bind(var9)(var2);
                        case 2067:
                            var2 = var0.push;
                            var2 = var2.bind(var0)(var4);
                            if (!var1) {
                                _fun76442_ip = 2210;
                                continue _fun76442
                            }
                        case 2083:
                            var2 = var0.push;
                            var1 = {};
                            var4 = 'developer-actions';
                            var1.sectionKey = var4;
                            var4 = {};
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var9 = var8[var5];
                            var9 = var6.bind(var7)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var5 = var8[var5];
                            var5 = var6.bind(var7)(var5);
                            var5 = var5.t;
                            var5 = var5.DQ797g;
                            var5 = var9.bind(var10)(var5);
                            var4.label = var5;
                            var5 = 40;
                            var5 = var8[var5];
                            var5 = var6.bind(var7)(var5);
                            var5 = var5.IdIcon;
                            var4.IconComponent = var5;
                            var3 = function() { // Original name: onPress, environment: var3
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 41;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.copy;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var1 = var4.bind(var5)(var1);
                                var1 = 42;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.presentPostIdCopied;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var4.onPress = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var1.buttons = var3;
                            var1 = var2.bind(var0)(var1);
                        case 2210:
                            return var0;
                    }
                };
                var6 = var1.bind(var3)(var2);
                var2 = _closure1_slot13;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 51;
                var0 = var10[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var0.showGradient = var5;
                var5 = 52;
                var5 = var10[var5];
                var11 = var7.bind(var3)(var5);
                var5 = var11.isMetaQuest;
                var5 = var5.bind(var11)();
                var0.startExpanded = var5;
                var5 = 53;
                var5 = var10[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.ActionSheetIconHeader;
                var5 = {};
                var5.title = var9;
                var5.icon = var8;
                var5 = var2.bind(var3)(var7, var5);
                var0.header = var5;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var4 = var0.sectionKey;
                    var7 = var0.buttons;
                    var3 = _closure1_slot13;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 54;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.ActionSheetRow;
                    var1 = var0.Group;
                    var0 = {};
                    var6 = var7.map;
                    var5 = function(arg0, arg1) { // Environment: var5
                        _fun76464: for (var _fun76464_ip = 0;;) switch (_fun76464_ip) {
                            case 0:
                                var1 = arg0;
                                var5 = var1.label;
                                var10 = var1.IconComponent;
                                var2 = var1.onPress;
                                var _closure4_slot0 = var2;
                                var9 = var1.disableColor;
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var11 = 9;
                                var2 = var1[var11];
                                var4 = undefined;
                                var2 = var7.bind(var4)(var2);
                                var3 = var2.intl;
                                var2 = var3.string;
                                var1 = var1[var11];
                                var1 = var7.bind(var4)(var1);
                                var1 = var1.t;
                                var1 = var1.nEOg1N;
                                var1 = var2.bind(var3)(var1);
                                var8 = var5 === var1;
                                if (var8) {
                                    _fun76464_ip = 153;
                                    continue _fun76464
                                }
                            case 97:
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = var1[var11];
                                var2 = var7.bind(var4)(var2);
                                var3 = var2.intl;
                                var2 = var3.string;
                                var1 = var1[var11];
                                var1 = var7.bind(var4)(var1);
                                var1 = var1.t;
                                var1 = var1.xwMqD7;
                                var1 = var2.bind(var3)(var1);
                                var8 = var5 === var1;
                            case 153:
                                var3 = _closure1_slot13;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var11 = 54;
                                var1 = var1[var11];
                                var1 = var2.bind(var4)(var1);
                                var2 = var1.ActionSheetRow;
                                var1 = {};
                                var7 = undefined;
                                if (!var8) {
                                    _fun76464_ip = 194;
                                    continue _fun76464
                                }
                            case 190:
                                var7 = 'danger';
                            case 194:
                                var1.variant = var7;
                                var8 = _closure1_slot13;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var11];
                                var6 = var7.bind(var4)(var6);
                                var6 = var6.ActionSheetRow;
                                var7 = var6.Icon;
                                var6 = {};
                                var6.IconComponent = var10;
                                var6.disableColor = var9;
                                var6 = var8.bind(var4)(var7, var6);
                                var1.icon = var6;
                                var1.label = var5;
                                var0 = function() { // Original name: onPress, environment: var0
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    var1 = _closure2_slot1;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var1.onPress = var0;
                                var0 = arg1;
                                var0 = var3.bind(var4)(var2, var1, var0);
                                return var0;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    var0.children = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3051, 3052, 6431, 1216, 1410, 660, 1379, 33, 1234, 7500, 4531, 3211, 6425, 8129, 3233, 3223, 9711, 4814, 7473, 9205, 21, 5536, 5326, 6423, 9712, 3237, 9561, 1307, 3213, 9170, 8711, 8698, 9103, 8917, 9714, 3956, 3228, 6484, 4829, 7687, 5246, 3106, 566, 9715, 6655, 8859, 1348, 4748, 7353, 5409, 5164, 4059, 5168, 7692, 2]);