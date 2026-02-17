// modules/in_app_notifications/native/ReactionNotification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var10 = 2;
    var3 = var5[var10];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IN_APP_NOTIFICATION_MAX_HEIGHT;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.Fragment;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AVATAR_SIZE_MAP;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AvatarSizes;
    var3 = var3.NORMAL;
    var9 = var6[var3];
    var3 = 11;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var11 = {
        'paddingRight': 4,
        'paddingTop': 0
    };
    var6.newContainerRoleDot = var11;
    var11 = {};
    var13 = 'column';
    var11.flexDirection = var13;
    var6.container = var11;
    var13 = {};
    var11 = 12;
    var13.fontSize = var11;
    var6.textEmoji = var13;
    var13 = {
        'height': 16,
        'width': 16
    };
    var6.imageEmoji = var13;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot14 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var8.backgroundColor = var11;
    var8.width = var9;
    var8.height = var9;
    var9 = var9 / var10;
    var8.borderRadius = var9;
    var3.clydeNotificationIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        _fun76941: for (var _fun76941_ip = 0;;) switch (_fun76941_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.user;
                var8 = var0.guild;
                var0 = var0.isMilestone;
                var1 = _closure1_slot15;
                var4 = undefined;
                var6 = var1.bind(var4)();
                if (var0) {
                    _fun76941_ip = 200;
                    continue _fun76941
                }
            case 38:
                var7 = null;
                if (!(var7 == var10)) {
                    _fun76941_ip = 111;
                    continue _fun76941
                }
            case 44:
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = 14;
                var0 = var11[var3];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var0.guild = var8;
                var9 = _closure1_slot0;
                var3 = var11[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.GuildIconSizes;
                var3 = var3.NORMAL;
                var0.size = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun76941_ip = 198;
                continue _fun76941;
            case 111:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var9 = 10;
                var1 = var1[var9];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.user = var10;
                var10 = var7 == var8;
                var7 = undefined;
                if (var10) {
                    _fun76941_ip = 155;
                    continue _fun76941
                }
            case 150:
                var7 = var8.id;
            case 155:
                var1.guildId = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var4)(var7);
                var7 = var7.AvatarSizes;
                var7 = var7.NORMAL;
                var1.size = var7;
                var0 = var3.bind(var4)(var2, var1);
            case 198:
                _fun76941_ip = 276;
                continue _fun76941;
            case 200:
                var3 = _closure1_slot11;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var6.clydeNotificationIcon;
                var1.style = var6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 13;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.ClydeIcon;
                var5 = {
                    'color': 'white',
                    'size': 'md'
                };
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 276:
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_notifications/native/ReactionNotification.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76942: for (var _fun76942_ip = 0;;) switch (_fun76942_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.notification;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var1 = _closure1_slot14;
                var7 = var1.bind(var3)();
                var _closure2_slot0 = var7;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var1 = var2[var1];
                var1 = var6.bind(var3)(var1);
                var5 = var1.AnimateEmoji;
                var1 = var5.useSetting;
                var15 = var1.bind(var5)();
                var _closure2_slot1 = var15;
                var14 = var0.user;
                var22 = var0.channel;
                var _closure2_slot2 = var22;
                var13 = var0.guild;
                var _closure2_slot3 = var13;
                var9 = var0.parentChannel;
                var _closure2_slot4 = var9;
                var5 = var0.reaction;
                var _closure2_slot5 = var5;
                var8 = var22.type;
                var1 = _closure1_slot10;
                var1 = var1.GUILD_ANNOUNCEMENT;
                var1 = var8 === var1;
                var12 = _closure1_slot6;
                var27 = var0.message;
                var11 = var12.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var12
                    }
                });
                var28 = var11;
                var8 = new var28[var12](var27, var26);
                var18 = var8 instanceof Object ? var8 : var11;
                var _closure2_slot6 = var18;
                var0 = var0.message;
                var11 = var0.content;
                var0 = 16;
                var2 = var2[var0];
                var16 = var6.bind(var3)(var2);
                var12 = var16.isReactionMilestoneNotification;
                var8 = var18.reactions;
                var2 = null;
                var17 = var2 == var22;
                var6 = undefined;
                if (var17) {
                    _fun76942_ip = 217;
                    continue _fun76942
                }
            case 212:
                var6 = var22.type;
            case 217:
                var12 = var12.bind(var16)(var8, var6);
                var16 = _closure1_slot3;
                var8 = var16.useCallback;
                var6 = new Array(4);
                var6[0] = var15;
                var6[1] = var5;
                var5 = var7.imageEmoji;
                var6[2] = var5;
                var5 = var7.textEmoji;
                var6[3] = var5;
                var5 = function() { // Environment: var10
                    _fun76943: for (var _fun76943_ip = 0;;) switch (_fun76943_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            var3 = var0 == var2;
                            var5 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun76943_ip = 35;
                                continue _fun76943
                            }
                        case 20:
                            var3 = _closure2_slot5;
                            var3 = var3.emoji;
                            var2 = var3.name;
                        case 35:
                            if (!(var0 != var2)) {
                                _fun76943_ip = 363;
                                continue _fun76943
                            }
                        case 42:
                            var2 = _closure2_slot5;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun76943_ip = 70;
                                continue _fun76943
                            }
                        case 55:
                            var3 = _closure2_slot5;
                            var3 = var3.emoji;
                            var2 = var3.name;
                        case 70:
                            if (!(var0 != var2)) {
                                _fun76943_ip = 109;
                                continue _fun76943
                            }
                        case 74:
                            var2 = _closure2_slot5;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun76943_ip = 102;
                                continue _fun76943
                            }
                        case 87:
                            var3 = _closure2_slot5;
                            var3 = var3.emoji;
                            var2 = var3.id;
                        case 102:
                            if (!(var0 != var2)) {
                                _fun76943_ip = 346;
                                continue _fun76943
                            }
                        case 109:
                            var2 = _closure2_slot5;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun76943_ip = 137;
                                continue _fun76943
                            }
                        case 122:
                            var3 = _closure2_slot5;
                            var3 = var3.emoji;
                            var2 = var3.id;
                        case 137:
                            var2 = var0 != var2;
                            var6 = undefined;
                            if (!var2) {
                                _fun76943_ip = 259;
                                continue _fun76943
                            }
                        case 146:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 17;
                            var2 = var4[var2];
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.getEmojiURL;
                            var2 = {};
                            var8 = _closure2_slot5;
                            var8 = var8.emoji;
                            var8 = var8.id;
                            var2.id = var8;
                            var8 = _closure2_slot1;
                            if (!var8) {
                                _fun76943_ip = 219;
                                continue _fun76943
                            }
                        case 203:
                            var9 = _closure2_slot5;
                            var9 = var9.emoji;
                            var8 = var9.animated;
                        case 219:
                            var2.animated = var8;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 18;
                            var7 = var9[var7];
                            var7 = var8.bind(var5)(var7);
                            var7 = var7.DEFAULT_EMOJI_SIZE;
                            var2.size = var7;
                            var6 = var3.bind(var4)(var2);
                        case 259:
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 19;
                            var2 = var7[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = {};
                            var7 = _closure2_slot0;
                            var8 = var7.textEmoji;
                            var2.textEmojiStyle = var8;
                            var7 = var7.imageEmoji;
                            var2.fastImageStyle = var7;
                            var2.src = var6;
                            var6 = _closure2_slot5;
                            var6 = var6.emoji;
                            var6 = var6.name;
                            var2.name = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var2;
                        case 346:
                            var1 = _closure2_slot5;
                            var1 = var1.emoji;
                            var1 = var1.name;
                            return var1;
                        case 363:
                            return var0;
                    }
                };
                var6 = var8.bind(var16)(var5, var6);
                var15 = var16.useMemo;
                var5 = var18.reactions;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var10
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.sumBy;
                    var0 = _closure2_slot6;
                    var1 = var0.reactions;
                    var0 = function(arg0) { // Environment: var0
                        _fun76945: for (var _fun76945_ip = 0;;) switch (_fun76945_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.count_details;
                                var3 = null;
                                var0 = var3 == var4;
                                var5 = undefined;
                                if (var0) {
                                    _fun76945_ip = 26;
                                    continue _fun76945
                                }
                            case 20:
                                var5 = var4.burst;
                            case 26:
                                var6 = var3 != var5;
                                var0 = 0;
                                if (!var6) {
                                    _fun76945_ip = 38;
                                    continue _fun76945
                                }
                            case 35:
                                var0 = var5;
                            case 38:
                                var5 = var3 == var4;
                                var2 = undefined;
                                if (var5) {
                                    _fun76945_ip = 53;
                                    continue _fun76945
                                }
                            case 47:
                                var2 = var4.normal;
                            case 53:
                                var3 = var3 != var2;
                                var1 = 0;
                                if (!var3) {
                                    _fun76945_ip = 65;
                                    continue _fun76945
                                }
                            case 62:
                                var1 = var2;
                            case 65:
                                var0 = var0 + var1;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var17 = var15.bind(var16)(var5, var8);
                if (!var1) {
                    _fun76942_ip = 319;
                    continue _fun76942
                }
            case 312:
                var5 = 1;
                var1 = var5 !== var17;
            case 319:
                var21 = null;
                if (var1) {
                    _fun76942_ip = 361;
                    continue _fun76942
                }
            case 324:
                var21 = null;
                if (var12) {
                    _fun76942_ip = 361;
                    continue _fun76942
                }
            case 329:
                var8 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 21;
                var5 = var15[var5];
                var8 = var8.bind(var3)(var5);
                var5 = var8.getUserAuthor;
                var21 = var5.bind(var8)(var14, var22);
            case 361:
                _closure2_slot7 = var21;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var20 = 22;
                var5 = var5[var20];
                var16 = var8.bind(var3)(var5);
                var15 = var16.useStateFromStores;
                var5 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var10
                    var0 = _closure1_slot5;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var16 = var15.bind(var16)(var8, var5);
                var8 = var2 == var21;
                var5 = undefined;
                if (var8) {
                    _fun76942_ip = 430;
                    continue _fun76942
                }
            case 424:
                var5 = var21.colorString;
            case 430:
                var8 = var2 != var5;
                var23 = undefined;
                if (!var8) {
                    _fun76942_ip = 442;
                    continue _fun76942
                }
            case 439:
                var23 = var5;
            case 442:
                var5 = 'username';
                var15 = undefined;
                if (!(var5 === var16)) {
                    _fun76942_ip = 455;
                    continue _fun76942
                }
            case 452:
                var15 = var23;
            case 455:
                var5 = var2 != var15;
                var8 = undefined;
                if (!var5) {
                    _fun76942_ip = 473;
                    continue _fun76942
                }
            case 464:
                var5 = {};
                var5.color = var15;
                var8 = var5;
            case 473:
                var15 = 'dot';
                var5 = undefined;
                if (!(var15 === var16)) {
                    _fun76942_ip = 573;
                    continue _fun76942
                }
            case 483:
                var5 = undefined;
                if (!(var3 !== var23)) {
                    _fun76942_ip = 573;
                    continue _fun76942
                }
            case 489:
                var19 = _closure1_slot11;
                var16 = _closure1_slot0;
                var24 = _closure1_slot2;
                var15 = 23;
                var15 = var24[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.RoleDot;
                var15 = {};
                var15.color = var23;
                var23 = var2 == var21;
                var24 = undefined;
                if (var23) {
                    _fun76942_ip = 540;
                    continue _fun76942
                }
            case 534:
                var24 = var21.colorStrings;
            case 540:
                var25 = var2 != var24;
                var23 = null;
                if (!var25) {
                    _fun76942_ip = 552;
                    continue _fun76942
                }
            case 549:
                var23 = var24;
            case 552:
                var15.colors = var23;
                var23 = var7.newContainerRoleDot;
                var15.containerStyles = var23;
                var5 = var19.bind(var3)(var16, var15);
            case 573:
                var19 = _closure1_slot3;
                var16 = var19.useMemo;
                var15 = new Array(4);
                var15[0] = var21;
                var15[1] = var22;
                var15[2] = var13;
                var15[3] = var9;
                var9 = function() { // Environment: var10
                    _fun76947: for (var _fun76947_ip = 0;;) switch (_fun76947_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 24;
                            var1 = var3[var1];
                            var4 = undefined;
                            var8 = var2.bind(var4)(var1);
                            var7 = var8.computeChannelName;
                            var12 = _closure2_slot2;
                            var11 = _closure1_slot8;
                            var10 = _closure1_slot7;
                            var9 = true;
                            var13 = var8;
                            var5 = var13[var7](var12, var11, var10, var9, var8);
                            var2 = _closure2_slot7;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun76947_ip = 116;
                                continue _fun76947
                            }
                        case 65:
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 16;
                            var0 = var6[var0];
                            var8 = var2.bind(var4)(var0);
                            var7 = var8.getNotificationTitle;
                            var12 = _closure2_slot2;
                            var11 = _closure2_slot7;
                            var10 = _closure2_slot4;
                            var9 = _closure2_slot3;
                            var13 = var8;
                            var0 = var13[var7](var12, var11, var10, var9, var8);
                            _fun76947_ip = 193;
                            continue _fun76947;
                        case 116:
                            var2 = _closure2_slot3;
                            var2 = var3 != var2;
                            var4 = '';
                            var3 = var4;
                            if (!var2) {
                                _fun76947_ip = 167;
                                continue _fun76947
                            }
                        case 134:
                            var1 = _closure2_slot3;
                            var6 = var1.name;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = ', ';
                            var3 = var2.bind(var1)(var6);
                        case 167:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = ' ';
                            var0 = var2.bind(var4)(var5, var1, var3);
                        case 193:
                            return var0;
                    }
                };
                var9 = var16.bind(var19)(var9, var15);
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var19 = 21;
                var19 = var15[var19];
                var23 = var16.bind(var3)(var19);
                var21 = var23.getUserAuthor;
                var19 = var18.author;
                var19 = var21.bind(var23)(var19, var22);
                var15 = var15[var20];
                var20 = var16.bind(var3)(var15);
                var16 = var20.useStateFromStores;
                var21 = _closure1_slot8;
                var15 = new Array(1);
                var15[0] = var21;
                var10 = function() { // Environment: var10
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var16.bind(var20)(var15, var10);
                var15 = var22.type;
                var10 = _closure1_slot10;
                var10 = var10.GROUP_DM;
                var10 = var15 === var10;
                if (!var10) {
                    _fun76942_ip = 752;
                    continue _fun76942
                }
            case 714:
                var20 = var18.author;
                var21 = var2 == var20;
                var15 = undefined;
                if (var21) {
                    _fun76942_ip = 734;
                    continue _fun76942
                }
            case 729:
                var15 = var20.id;
            case 734:
                var20 = var2 == var16;
                var2 = undefined;
                if (var20) {
                    _fun76942_ip = 748;
                    continue _fun76942
                }
            case 743:
                var2 = var16.id;
            case 748:
                var10 = var15 !== var2;
            case 752:
                if (var1) {
                    _fun76942_ip = 1142;
                    continue _fun76942
                }
            case 758:
                if (var12) {
                    _fun76942_ip = 985;
                    continue _fun76942
                }
            case 764:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var0 = var21[var0];
                var2 = var20.bind(var3)(var0);
                var1 = var2.getNotificationBodyText;
                var0 = {};
                var0.notificationMessageContent = var11;
                var0.isGdmAllReactionNotification = var10;
                var0.messageAuthor = var19;
                var0.emojiHook = var6;
                var15 = var1.bind(var2)(var0);
                var2 = _closure1_slot13;
                var1 = _closure1_slot12;
                var0 = {};
                var16 = _closure1_slot11;
                var6 = 25;
                var6 = var21[var6];
                var6 = var20.bind(var3)(var6);
                var11 = var6.Text;
                var6 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var6.children = var15;
                var11 = var16.bind(var3)(var11, var6);
                var6 = new Array(2);
                var6[0] = var11;
                var11 = 27;
                var11 = var21[var11];
                var11 = var20.bind(var3)(var11);
                var15 = var11.NativeMessageChannelRowPreview;
                var11 = {
                    'channel': null,
                    'message': null,
                    'color': 'text-muted',
                    'layout': null,
                    'muted': false,
                    'lineClamp': 2
                };
                var11.channel = var22;
                var11.message = var18;
                var18 = 28;
                var18 = var21[var18];
                var18 = var20.bind(var3)(var18);
                var18 = var18.ChannelListLayoutTypes;
                var18 = var18.COZY;
                var11.layout = var18;
                var18 = _closure1_slot9;
                var11.maxHeight = var18;
                var11 = var16.bind(var3)(var15, var11);
                var6[1] = var11;
                var0.children = var6;
                var6 = var2.bind(var3)(var1, var0);
                _fun76942_ip = 1252;
                continue _fun76942;
            case 985:
                var2 = _closure1_slot11;
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 25;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var15 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 26;
                var16 = var20[var11];
                var16 = var15.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.format;
                var11 = var20[var11];
                var11 = var15.bind(var3)(var11);
                var11 = var11.t;
                if (var10) {
                    _fun76942_ip = 1098;
                    continue _fun76942
                }
            case 1075:
                var15 = var11.KTurAR;
                var10 = {};
                var10.count = var17;
                var10 = var16.bind(var18)(var15, var10);
                _fun76942_ip = 1130;
                continue _fun76942;
            case 1098:
                var15 = var11.J86pqQ;
                var11 = {};
                var11.count = var17;
                var19 = var19.nick;
                var11.username = var19;
                var10 = var16.bind(var18)(var15, var11);
            case 1130:
                var0.children = var10;
                var6 = var2.bind(var3)(var1, var0);
                _fun76942_ip = 1252;
                continue _fun76942;
            case 1142:
                var2 = _closure1_slot11;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var0 = 25;
                var0 = var18[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var10 = 26;
                var15 = var18[var10];
                var15 = var11.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var10 = var18[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10.Tqk79E;
                var10 = {};
                var10.count = var17;
                var10 = var15.bind(var16)(var11, var10);
                var0.children = var10;
                var6 = var2.bind(var3)(var1, var0);
            case 1252:
                var2 = _closure1_slot11;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 29;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Notification;
                var0 = {};
                var11 = _closure1_slot16;
                var10 = {};
                var10.user = var14;
                var10.guild = var13;
                var10.isMilestone = var12;
                var10 = var2.bind(var3)(var11, var10);
                var0.icon = var10;
                var0.label = var9;
                var0.labelStyle = var8;
                var0.accessoryLabelNode = var5;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var7.container;
                var4.style = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3108, 3107, 1621, 8822, 660, 33, 5517, 5515, 1297, 671, 7627, 7458, 1348, 8781, 1417, 9771, 5831, 22, 3980, 566, 8225, 4801, 3940, 1235, 8824, 8837, 8823, 2]);