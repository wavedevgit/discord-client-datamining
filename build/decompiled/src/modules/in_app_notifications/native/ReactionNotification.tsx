// modules/in_app_notifications/native/ReactionNotification.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
    var3 = var6.bind(var0)(var3);
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
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingRight': 4,
        'paddingTop': 0
    };
    var3.newContainerRoleDot = var8;
    var8 = {};
    var9 = 'column';
    var8.flexDirection = var9;
    var3.container = var8;
    var8 = {
        'marginTop': 4,
        'flexGrow': 0,
        'flexShrink': 1,
        'alignSelf': 'flex-start'
    };
    var3.reactionContainer = var8;
    var8 = {};
    var9 = 12;
    var8.fontSize = var9;
    var3.textEmoji = var8;
    var8 = {
        'height': 16,
        'width': 16
    };
    var3.imageEmoji = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_notifications/native/ReactionNotification.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76722: for (var _fun76722_ip = 0;;) switch (_fun76722_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.notification;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var1 = _closure1_slot14;
                var8 = var1.bind(var3)();
                var _closure2_slot0 = var8;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var7 = var1.AnimateEmoji;
                var1 = var7.useSetting;
                var1 = var1.bind(var7)();
                var _closure2_slot1 = var1;
                var17 = var0.user;
                var20 = var0.channel;
                var _closure2_slot2 = var20;
                var15 = var0.guild;
                var _closure2_slot3 = var15;
                var11 = var0.parentChannel;
                var _closure2_slot4 = var11;
                var1 = var0.reaction;
                var _closure2_slot5 = var1;
                var7 = var20.type;
                var1 = _closure1_slot10;
                var1 = var1.GUILD_ANNOUNCEMENT;
                var1 = var7 === var1;
                var10 = _closure1_slot6;
                var26 = var0.message;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var27 = var9;
                var7 = new var27[var10](var26, var25);
                var13 = var7 instanceof Object ? var7 : var9;
                var _closure2_slot6 = var13;
                var0 = var0.message;
                var18 = var0.content;
                var0 = 11;
                var0 = var6[var0];
                var7 = var5.bind(var3)(var0);
                var6 = var7.isReactionMilestoneNotification;
                var5 = var13.reactions;
                var14 = null;
                var9 = var14 == var20;
                var0 = undefined;
                if (var9) {
                    _fun76722_ip = 217;
                    continue _fun76722
                }
            case 212:
                var0 = var20.type;
            case 217:
                var0 = var6.bind(var7)(var5, var0);
                var23 = function() {
                    _fun76723: for (var _fun76723_ip = 0;;) switch (_fun76723_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            var3 = var0 == var2;
                            var5 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun76723_ip = 35;
                                continue _fun76723
                            }
                        case 20:
                            var3 = _closure2_slot5;
                            var3 = var3.emoji;
                            var2 = var3.name;
                        case 35:
                            if (!(var0 != var2)) {
                                _fun76723_ip = 363;
                                continue _fun76723
                            }
                        case 42:
                            var2 = _closure2_slot5;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun76723_ip = 70;
                                continue _fun76723
                            }
                        case 55:
                            var3 = _closure2_slot5;
                            var3 = var3.emoji;
                            var2 = var3.name;
                        case 70:
                            if (!(var0 != var2)) {
                                _fun76723_ip = 109;
                                continue _fun76723
                            }
                        case 74:
                            var2 = _closure2_slot5;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun76723_ip = 102;
                                continue _fun76723
                            }
                        case 87:
                            var3 = _closure2_slot5;
                            var3 = var3.emoji;
                            var2 = var3.id;
                        case 102:
                            if (!(var0 != var2)) {
                                _fun76723_ip = 346;
                                continue _fun76723
                            }
                        case 109:
                            var2 = _closure2_slot5;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun76723_ip = 137;
                                continue _fun76723
                            }
                        case 122:
                            var3 = _closure2_slot5;
                            var3 = var3.emoji;
                            var2 = var3.id;
                        case 137:
                            var2 = var0 != var2;
                            var6 = undefined;
                            if (!var2) {
                                _fun76723_ip = 259;
                                continue _fun76723
                            }
                        case 146:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 12;
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
                                _fun76723_ip = 219;
                                continue _fun76723
                            }
                        case 203:
                            var9 = _closure2_slot5;
                            var9 = var9.emoji;
                            var8 = var9.animated;
                        case 219:
                            var2.animated = var8;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 13;
                            var7 = var9[var7];
                            var7 = var8.bind(var5)(var7);
                            var7 = var7.DEFAULT_EMOJI_SIZE;
                            var2.size = var7;
                            var6 = var3.bind(var4)(var2);
                        case 259:
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 14;
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
                var9 = _closure1_slot3;
                var7 = var9.useMemo;
                var5 = var13.reactions;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.sumBy;
                    var0 = _closure2_slot6;
                    var1 = var0.reactions;
                    var0 = function(arg0) { // Environment: var0
                        _fun76725: for (var _fun76725_ip = 0;;) switch (_fun76725_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.count_details;
                                var3 = null;
                                var0 = var3 == var4;
                                var5 = undefined;
                                if (var0) {
                                    _fun76725_ip = 26;
                                    continue _fun76725
                                }
                            case 20:
                                var5 = var4.burst;
                            case 26:
                                var6 = var3 != var5;
                                var0 = 0;
                                if (!var6) {
                                    _fun76725_ip = 38;
                                    continue _fun76725
                                }
                            case 35:
                                var0 = var5;
                            case 38:
                                var5 = var3 == var4;
                                var2 = undefined;
                                if (var5) {
                                    _fun76725_ip = 53;
                                    continue _fun76725
                                }
                            case 47:
                                var2 = var4.normal;
                            case 53:
                                var3 = var3 != var2;
                                var1 = 0;
                                if (!var3) {
                                    _fun76725_ip = 65;
                                    continue _fun76725
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
                var16 = var7.bind(var9)(var5, var6);
                if (!var1) {
                    _fun76722_ip = 276;
                    continue _fun76722
                }
            case 269:
                var5 = 1;
                var1 = var5 !== var16;
            case 276:
                var12 = null;
                if (var1) {
                    _fun76722_ip = 318;
                    continue _fun76722
                }
            case 281:
                var12 = null;
                if (var0) {
                    _fun76722_ip = 318;
                    continue _fun76722
                }
            case 286:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.getUserAuthor;
                var12 = var5.bind(var6)(var17, var20);
            case 318:
                _closure2_slot7 = var12;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 17;
                var5 = var7[var5];
                var9 = var6.bind(var3)(var5);
                var7 = var9.useStateFromStores;
                var5 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var2
                    var0 = _closure1_slot5;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var9 = var7.bind(var9)(var6, var5);
                var6 = var14 == var12;
                var5 = undefined;
                if (var6) {
                    _fun76722_ip = 387;
                    continue _fun76722
                }
            case 381:
                var5 = var12.colorString;
            case 387:
                var6 = var14 != var5;
                var19 = undefined;
                if (!var6) {
                    _fun76722_ip = 399;
                    continue _fun76722
                }
            case 396:
                var19 = var5;
            case 399:
                var5 = 'username';
                var7 = undefined;
                if (!(var5 === var9)) {
                    _fun76722_ip = 412;
                    continue _fun76722
                }
            case 409:
                var7 = var19;
            case 412:
                var5 = var14 != var7;
                var6 = undefined;
                if (!var5) {
                    _fun76722_ip = 430;
                    continue _fun76722
                }
            case 421:
                var5 = {};
                var5.color = var7;
                var6 = var5;
            case 430:
                var7 = 'dot';
                var5 = undefined;
                if (!(var7 === var9)) {
                    _fun76722_ip = 530;
                    continue _fun76722
                }
            case 440:
                var5 = undefined;
                if (!(var3 !== var19)) {
                    _fun76722_ip = 530;
                    continue _fun76722
                }
            case 446:
                var10 = _closure1_slot11;
                var9 = _closure1_slot0;
                var21 = _closure1_slot2;
                var7 = 18;
                var7 = var21[var7];
                var7 = var9.bind(var3)(var7);
                var9 = var7.RoleDot;
                var7 = {};
                var7.color = var19;
                var19 = var14 == var12;
                var21 = undefined;
                if (var19) {
                    _fun76722_ip = 497;
                    continue _fun76722
                }
            case 491:
                var21 = var12.colorStrings;
            case 497:
                var22 = var14 != var21;
                var19 = null;
                if (!var22) {
                    _fun76722_ip = 509;
                    continue _fun76722
                }
            case 506:
                var19 = var21;
            case 509:
                var7.colors = var19;
                var19 = var8.newContainerRoleDot;
                var7.containerStyles = var19;
                var5 = var10.bind(var3)(var9, var7);
            case 530:
                var10 = _closure1_slot3;
                var9 = var10.useMemo;
                var7 = new Array(4);
                var7[0] = var12;
                var7[1] = var20;
                var7[2] = var15;
                var7[3] = var11;
                var2 = function() { // Environment: var2
                    _fun76727: for (var _fun76727_ip = 0;;) switch (_fun76727_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 19;
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
                                _fun76727_ip = 116;
                                continue _fun76727
                            }
                        case 65:
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 11;
                            var0 = var6[var0];
                            var8 = var2.bind(var4)(var0);
                            var7 = var8.getNotificationTitle;
                            var12 = _closure2_slot2;
                            var11 = _closure2_slot7;
                            var10 = _closure2_slot4;
                            var9 = _closure2_slot3;
                            var13 = var8;
                            var0 = var13[var7](var12, var11, var10, var9, var8);
                            _fun76727_ip = 193;
                            continue _fun76727;
                        case 116:
                            var2 = _closure2_slot3;
                            var2 = var3 != var2;
                            var4 = '';
                            var3 = var4;
                            if (!var2) {
                                _fun76727_ip = 167;
                                continue _fun76727
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
                var9 = var9.bind(var10)(var2, var7);
                if (var1) {
                    _fun76722_ip = 1038;
                    continue _fun76722
                }
            case 578:
                if (var0) {
                    _fun76722_ip = 926;
                    continue _fun76722
                }
            case 584:
                var2 = _closure1_slot13;
                var1 = _closure1_slot12;
                var0 = {};
                var11 = _closure1_slot11;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 20;
                var7 = var12[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                if (!(var14 != var18)) {
                    _fun76722_ip = 659;
                    continue _fun76722
                }
            case 641:
                var12 = var18.trim;
                var18 = var12.bind(var18)();
                var12 = '';
                if (!(var12 === var18)) {
                    _fun76722_ip = 726;
                    continue _fun76722
                }
            case 659:
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var12 = 21;
                var19 = var22[var12];
                var19 = var18.bind(var3)(var19);
                var21 = var19.intl;
                var19 = var21.format;
                var12 = var22[var12];
                var12 = var18.bind(var3)(var12);
                var12 = var12.t;
                var18 = var12.ZOzpKt;
                var12 = {};
                var12.emojiHook = var23;
                var12 = var19.bind(var21)(var18, var12);
                _fun76722_ip = 791;
                continue _fun76722;
            case 726:
                var19 = _closure1_slot0;
                var24 = _closure1_slot2;
                var18 = 21;
                var21 = var24[var18];
                var21 = var19.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var18 = var24[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18.sHV43G;
                var18 = {};
                var18.emojiHook = var23;
                var12 = var21.bind(var22)(var19, var18);
            case 791:
                var7.children = var12;
                var10 = var11.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var12 = _closure1_slot11;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var10 = 22;
                var10 = var19[var10];
                var10 = var18.bind(var3)(var10);
                var11 = var10.NativeMessageChannelRowPreview;
                var10 = {
                    'channel': null,
                    'message': null,
                    'color': 'text-muted',
                    'layout': null,
                    'muted': false,
                    'lineClamp': 2
                };
                var10.channel = var20;
                var10.message = var13;
                var13 = 23;
                var13 = var19[var13];
                var13 = var18.bind(var3)(var13);
                var13 = var13.ChannelListLayoutTypes;
                var13 = var13.COZY;
                var10.layout = var13;
                var13 = _closure1_slot9;
                var10.maxHeight = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7[1] = var10;
                var0.children = var7;
                var7 = var2.bind(var3)(var1, var0);
                _fun76722_ip = 1036;
                continue _fun76722;
            case 926:
                var2 = _closure1_slot11;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var0 = 20;
                var0 = var18[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var10 = 21;
                var12 = var18[var10];
                var12 = var11.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var10 = var18[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10.KTurAR;
                var10 = {};
                var10.count = var16;
                var10 = var12.bind(var13)(var11, var10);
                var0.children = var10;
                var7 = var2.bind(var3)(var1, var0);
            case 1036:
                _fun76722_ip = 1148;
                continue _fun76722;
            case 1038:
                var2 = _closure1_slot11;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var0 = 20;
                var0 = var18[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var10 = 21;
                var12 = var18[var10];
                var12 = var11.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var10 = var18[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10.Tqk79E;
                var10 = {};
                var10.count = var16;
                var10 = var12.bind(var13)(var11, var10);
                var0.children = var10;
                var7 = var2.bind(var3)(var1, var0);
            case 1148:
                var2 = _closure1_slot11;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 24;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Notification;
                var0 = {};
                if (!(var14 == var17)) {
                    _fun76722_ip = 1251;
                    continue _fun76722
                }
            case 1184:
                var12 = _closure1_slot11;
                var11 = _closure1_slot1;
                var18 = _closure1_slot2;
                var13 = 26;
                var10 = var18[var13];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.guild = var15;
                var16 = _closure1_slot0;
                var13 = var18[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.GuildIconSizes;
                var13 = var13.NORMAL;
                var10.size = var13;
                var10 = var12.bind(var3)(var11, var10);
                _fun76722_ip = 1338;
                continue _fun76722;
            case 1251:
                var13 = _closure1_slot11;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var16 = 25;
                var11 = var11[var16];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.user = var17;
                var17 = var14 == var15;
                var14 = undefined;
                if (var17) {
                    _fun76722_ip = 1295;
                    continue _fun76722
                }
            case 1290:
                var14 = var15.id;
            case 1295:
                var11.guildId = var14;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var16];
                var14 = var15.bind(var3)(var14);
                var14 = var14.AvatarSizes;
                var14 = var14.NORMAL;
                var11.size = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 1338:
                var0.icon = var10;
                var0.label = var9;
                var0.labelStyle = var6;
                var0.accessoryLabelNode = var5;
                var6 = _closure1_slot11;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = var8.container;
                var4.style = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3101, 3100, 1621, 8808, 660, 33, 1297, 1348, 8768, 1417, 9787, 5773, 22, 3982, 566, 8214, 4794, 3941, 1234, 8810, 8823, 8809, 5456, 7415, 2]);