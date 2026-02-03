// uikit-native/ChatInputContextBar.tsx
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
        var0 = arg0;
        var4 = var0.onCancelReplying;
        var0 = _closure1_slot14;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 9;
        var0 = var12[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {
            'activeOpacity': 0.5,
            'accessibilityRole': 'button'
        };
        var8 = 10;
        var6 = var12[var8];
        var6 = var11.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var12[var8];
        var6 = var11.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.jSnJGT;
        var6 = var7.bind(var10)(var6);
        var0.accessibilityLabel = var6;
        var0.onPress = var4;
        var4 = var9.contextBarRow;
        var0.style = var4;
        var7 = _closure1_slot9;
        var6 = _closure1_slot4;
        var4 = {};
        var10 = var9.contextCancelIconWrapper;
        var4.style = var10;
        var14 = _closure1_slot9;
        var16 = _closure1_slot1;
        var15 = 11;
        var10 = var12[var15];
        var13 = var16.bind(var3)(var10);
        var10 = {};
        var17 = 12;
        var17 = var12[var17];
        var17 = var16.bind(var3)(var17);
        var10.source = var17;
        var15 = var12[var15];
        var15 = var16.bind(var3)(var15);
        var15 = var15.Sizes;
        var15 = var15.SMALL_20;
        var10.size = var15;
        var10 = var14.bind(var3)(var13, var10);
        var4.children = var10;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot9;
        var5 = 13;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'lineClamp': 1,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var9 = var9.contextButtonText;
        var5.style = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["5IEsGx"];
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun90082: for (var _fun90082_ip = 0;;) switch (_fun90082_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.pendingReply;
                var _closure2_slot0 = var13;
                var1 = var0.pendingReplyAuthor;
                var11 = var0.onTapContextBarReply;
                var8 = var0.onCancelReplying;
                var9 = var0.onToggleReplyMention;
                var0 = _closure1_slot14;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var21 = _closure1_slot0;
                var19 = _closure1_slot2;
                var0 = 14;
                var0 = var19[var0];
                var5 = var21.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var24
                    var0 = _closure1_slot5;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var6 = var4.bind(var5)(var2, var0);
                var _closure2_slot1 = var6;
                var0 = var1.colorString;
                var _closure2_slot2 = var0;
                var4 = var1.colorStrings;
                var _closure2_slot3 = var4;
                var23 = var1.nick;
                var _closure2_slot4 = var23;
                var5 = var1.guildId;
                var _closure2_slot5 = var5;
                var7 = _closure1_slot3;
                var2 = var7.useMemo;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var6;
                var0 = function() { // Environment: var24
                    _fun90084: for (var _fun90084_ip = 0;;) switch (_fun90084_ip) {
                        case 0:
                            var4 = _closure2_slot1;
                            var2 = 'hidden';
                            var0 = undefined;
                            if (!(var2 !== var4)) {
                                _fun90084_ip = 53;
                                continue _fun90084
                            }
                        case 17:
                            var4 = _closure2_slot2;
                            var2 = null;
                            var2 = var2 != var4;
                            var0 = undefined;
                            if (!var2) {
                                _fun90084_ip = 53;
                                continue _fun90084
                            }
                        case 32:
                            var2 = {};
                            var1 = _closure2_slot2;
                            var2.color = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 53:
                            return var0;
                    }
                };
                var0 = var2.bind(var7)(var0, var1);
                var _closure2_slot6 = var0;
                var22 = _closure1_slot1;
                var0 = 15;
                var0 = var19[var0];
                var1 = var22.bind(var3)(var0);
                var0 = {};
                var2 = var13.message;
                var2 = var2.author;
                var2 = var2.id;
                var0.userId = var2;
                var0.guildId = var5;
                var7 = var1.bind(var3)(var0);
                var0 = 16;
                var0 = var19[var0];
                var2 = var21.bind(var3)(var0);
                var1 = var2.useDisplayNameStylesFont;
                var0 = {};
                var0.displayNameStyles = var7;
                var0 = var1.bind(var2)(var0);
                var _closure2_slot7 = var0;
                var0 = 17;
                var0 = var19[var0];
                var2 = var21.bind(var3)(var0);
                var1 = var2.isDisplayNameStylesMobileChatEnabled;
                var0 = {};
                var7 = 'ChatInputContextBar';
                var0.location = var7;
                var0 = var1.bind(var2)(var0);
                var _closure2_slot8 = var0;
                var0 = 18;
                var1 = var19[var0];
                var2 = var21.bind(var3)(var1);
                var1 = var2.useProcessColorStringsArray;
                var4 = var1.bind(var2)(var4);
                var _closure2_slot9 = var4;
                var0 = var19[var0];
                var2 = var21.bind(var3)(var0);
                var1 = var2.useIsRoleStyleAndRoleColorsEligibleForERC;
                var0 = var13.message;
                var0 = var0.author;
                var27 = var0.id;
                var29 = var2;
                var28 = var5;
                var26 = var6;
                var25 = var4;
                var0 = var29[var1](var28, var27, var26, var25, var24);
                var _closure2_slot10 = var0;
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var16.contextBarRow;
                var0.style = var4;
                var7 = _closure1_slot9;
                var6 = 9;
                var4 = var19[var6];
                var4 = var21.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {
                    'accessibilityRole': 'button',
                    'accessibilityLabel': null,
                    'activeOpacity': 0.5
                };
                var18 = 10;
                var10 = var19[var18];
                var10 = var21.bind(var3)(var10);
                var15 = var10.intl;
                var12 = var15.string;
                var10 = var19[var18];
                var10 = var21.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.jSnJGT;
                var10 = var12.bind(var15)(var10);
                var4.accessibilityLabel = var10;
                var10 = 0.5;
                var12 = var16.contextCancelIconWrapper;
                var4.style = var12;
                var4.onPress = var8;
                var15 = _closure1_slot9;
                var20 = 11;
                var8 = var19[var20];
                var12 = var22.bind(var3)(var8);
                var8 = {};
                var17 = 12;
                var17 = var19[var17];
                var17 = var22.bind(var3)(var17);
                var8.source = var17;
                var17 = var19[var20];
                var17 = var22.bind(var3)(var17);
                var17 = var17.Sizes;
                var17 = var17.SMALL_20;
                var8.size = var17;
                var8 = var15.bind(var3)(var12, var8);
                var4.children = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var8 = _closure1_slot9;
                var5 = var19[var6];
                var5 = var21.bind(var3)(var5);
                var7 = var5.PressableOpacity;
                var5 = {};
                var12 = 'link';
                var5.accessibilityRole = var12;
                var12 = var19[var18];
                var12 = var21.bind(var3)(var12);
                var22 = var12.intl;
                var17 = var22.formatToPlainString;
                var12 = var19[var18];
                var12 = var21.bind(var3)(var12);
                var12 = var12.t;
                var15 = var12.EpJL4E;
                var12 = {};
                var12.username = var23;
                var12 = var17.bind(var22)(var15, var12);
                var5.accessibilityLabel = var12;
                var12 = var19[var18];
                var12 = var21.bind(var3)(var12);
                var17 = var12.intl;
                var15 = var17.string;
                var12 = var19[var18];
                var12 = var21.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["0CfCVW"];
                var12 = var15.bind(var17)(var12);
                var5.accessibilityHint = var12;
                var5.activeOpacity = var10;
                var5.onPress = var11;
                var11 = var16.contextButtonText;
                var5.style = var11;
                var15 = _closure1_slot9;
                var17 = 13;
                var11 = var19[var17];
                var11 = var21.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'lineClamp': 1,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var22 = var19[var18];
                var22 = var21.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.format;
                var19 = var19[var18];
                var19 = var21.bind(var3)(var19);
                var19 = var19.t;
                var21 = var19["8E4GxS"];
                var19 = {};
                var24 = function arg0, arg1() {
                    _fun90085: for (var _fun90085_ip = 0;;) switch (_fun90085_ip) {
                        case 0:
                            var9 = arg1;
                            var1 = _closure2_slot1;
                            var0 = 'dot';
                            if (!(var0 === var1)) {
                                _fun90085_ip = 31;
                                continue _fun90085
                            }
                        case 18:
                            var0 = _closure2_slot2;
                            var13 = null;
                            if (!(var13 == var0)) {
                                _fun90085_ip = 247;
                                continue _fun90085
                            }
                        case 31:
                            var4 = _closure1_slot9;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 13;
                            var0 = var6[var0];
                            var3 = undefined;
                            var0 = var5.bind(var3)(var0);
                            var2 = var0.Text;
                            var1 = {};
                            var0 = 'text-sm/semibold';
                            var1.variant = var0;
                            var0 = 20;
                            var0 = var6[var0];
                            var5 = var5.bind(var3)(var0);
                            var0 = var5.isFabric;
                            var0 = var0.bind(var5)();
                            var0 = !var0;
                            var1.experimental_useNativeText = var0;
                            var5 = _closure2_slot6;
                            var0 = new Array(2);
                            var0[0] = var5;
                            var5 = _closure2_slot8;
                            if (!var5) {
                                _fun90085_ip = 136;
                                continue _fun90085
                            }
                        case 126:
                            var7 = _closure2_slot7;
                            var6 = null;
                            var5 = var6 != var7;
                        case 136:
                            if (!var5) {
                                _fun90085_ip = 153;
                                continue _fun90085
                            }
                        case 139:
                            var6 = {};
                            var7 = _closure2_slot7;
                            var6.fontFamily = var7;
                            var5 = var6;
                        case 153:
                            var0[1] = var5;
                            var1.style = var0;
                            var5 = _closure2_slot10;
                            var0 = undefined;
                            if (!var5) {
                                _fun90085_ip = 174;
                                continue _fun90085
                            }
                        case 170:
                            var0 = _closure2_slot9;
                        case 174:
                            var1.gradientColors = var0;
                            var0 = _closure2_slot4;
                            var1.children = var0;
                            var0 = _closure2_slot0;
                            var0 = var0.message;
                            var0 = var0.author;
                            var7 = var0.id;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = '';
                            var0 = '-';
                            var0 = var6.bind(var5)(var9, var0, var7);
                            var0 = var4.bind(var3)(var2, var1, var0);
                            _fun90085_ip = 438;
                            continue _fun90085;
                        case 247:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot11;
                            var2 = {};
                            var12 = _closure1_slot9;
                            var7 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var1 = 19;
                            var5 = var11[var1];
                            var1 = undefined;
                            var5 = var7.bind(var1)(var5);
                            var8 = var5.RoleDot;
                            var5 = {};
                            var14 = _closure2_slot2;
                            var5.color = var14;
                            var14 = _closure2_slot3;
                            var5.colors = var14;
                            var14 = _closure2_slot5;
                            var5.guildId = var14;
                            var14 = 'small';
                            var5.size = var14;
                            var8 = var12.bind(var1)(var8, var5);
                            var5 = new Array(2);
                            var5[0] = var8;
                            var8 = _closure1_slot9;
                            var6 = 13;
                            var6 = var11[var6];
                            var6 = var7.bind(var1)(var6);
                            var7 = var6.Text;
                            var6 = {};
                            var11 = 'text-sm/semibold';
                            var6.variant = var11;
                            var11 = _closure2_slot8;
                            if (!var11) {
                                _fun90085_ip = 388;
                                continue _fun90085
                            }
                        case 380:
                            var12 = _closure2_slot7;
                            var11 = var13 != var12;
                        case 388:
                            if (!var11) {
                                _fun90085_ip = 405;
                                continue _fun90085
                            }
                        case 391:
                            var12 = {};
                            var13 = _closure2_slot7;
                            var12.fontFamily = var13;
                            var11 = var12;
                        case 405:
                            var6.style = var11;
                            var10 = _closure2_slot4;
                            var6.children = var10;
                            var6 = var8.bind(var1)(var7, var6, var9);
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 438:
                            return var0;
                    }
                };
                var19.userHook = var24;
                var19 = var22.bind(var23)(var21, var19);
                var11.children = var19;
                var11 = var15.bind(var3)(var12, var11);
                var5.children = var11;
                var5 = var8.bind(var3)(var7, var5);
                var4[1] = var5;
                var15 = null;
                var7 = var15 == var13;
                var5 = undefined;
                if (var7) {
                    _fun90082_ip = 890;
                    continue _fun90082
                }
            case 884:
                var5 = var13.showMentionToggle;
            case 890:
                if (!var5) {
                    _fun90082_ip = 1381;
                    continue _fun90082
                }
            case 896:
                var8 = _closure1_slot10;
                var21 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = var11[var6];
                var6 = var21.bind(var3)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var12 = 'checkbox';
                var6.accessibilityRole = var12;
                var12 = {};
                var19 = var13.shouldMention;
                var12.checked = var19;
                var6.accessibilityState = var12;
                var12 = var11[var18];
                var12 = var21.bind(var3)(var12);
                var19 = var12.intl;
                var12 = var19.string;
                var11 = var11[var18];
                var11 = var21.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.P8tvKG;
                var11 = var12.bind(var19)(var11);
                var6.accessibilityLabel = var11;
                var11 = var13.shouldMention;
                var22 = _closure1_slot0;
                var12 = _closure1_slot2;
                var19 = var12[var18];
                var19 = var22.bind(var3)(var19);
                var21 = var19.intl;
                var19 = var21.string;
                var12 = var12[var18];
                var12 = var22.bind(var3)(var12);
                var12 = var12.t;
                if (var11) {
                    _fun90082_ip = 1064;
                    continue _fun90082
                }
            case 1049:
                var11 = var12["+LXBxU"];
                var11 = var19.bind(var21)(var11);
                _fun90082_ip = 1077;
                continue _fun90082;
            case 1064:
                var12 = var12.PBgTSF;
                var11 = var19.bind(var21)(var12);
            case 1077:
                var6.accessibilityHint = var11;
                var6.activeOpacity = var10;
                var6.onPress = var9;
                var9 = var16.replyMentionButton;
                var6.style = var9;
                var11 = _closure1_slot9;
                var19 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = var12[var20];
                var10 = var19.bind(var3)(var9);
                var9 = {};
                var21 = 21;
                var21 = var12[var21];
                var21 = var19.bind(var3)(var21);
                var9.source = var21;
                var12 = var12[var20];
                var12 = var19.bind(var3)(var12);
                var12 = var12.Sizes;
                var12 = var12.CUSTOM;
                var9.size = var12;
                var19 = var16.replyMentionIcon;
                var12 = new Array(2);
                var12[0] = var19;
                var20 = var13.shouldMention;
                var19 = null;
                if (!var20) {
                    _fun90082_ip = 1196;
                    continue _fun90082
                }
            case 1190:
                var19 = var16.replyMentionIconActive;
            case 1196:
                var12[1] = var19;
                var9.style = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot9;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var17];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-sm/bold',
                    'color': 'text-muted'
                };
                var17 = var13.shouldMention;
                var15 = null;
                if (!var17) {
                    _fun90082_ip = 1275;
                    continue _fun90082
                }
            case 1269:
                var15 = var16.replyMentionButtonActive;
            case 1275:
                var10.style = var15;
                var13 = var13.shouldMention;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                if (var13) {
                    _fun90082_ip = 1344;
                    continue _fun90082
                }
            case 1329:
                var13 = var14.U7f3bK;
                var13 = var15.bind(var16)(var13);
                _fun90082_ip = 1357;
                continue _fun90082;
            case 1344:
                var14 = var14.p9jC2r;
                var13 = var15.bind(var16)(var14);
            case 1357:
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1381:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var10 = var0.onCancelEditing;
        var0 = _closure1_slot14;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var9.contextBarRow;
        var0.style = var4;
        var7 = _closure1_slot9;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var4 = 9;
        var4 = var12[var4];
        var4 = var11.bind(var3)(var4);
        var6 = var4.PressableOpacity;
        var4 = {
            'accessibilityRole': 'button',
            'accessibilityLabel': null,
            'activeOpacity': 0.5
        };
        var8 = 10;
        var13 = var12[var8];
        var13 = var11.bind(var3)(var13);
        var15 = var13.intl;
        var14 = var15.string;
        var13 = var12[var8];
        var13 = var11.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.qv9j1K;
        var13 = var14.bind(var15)(var13);
        var4.accessibilityLabel = var13;
        var13 = var9.contextCancelIconWrapper;
        var4.style = var13;
        var4.onPress = var10;
        var14 = _closure1_slot9;
        var16 = _closure1_slot1;
        var15 = 11;
        var10 = var12[var15];
        var13 = var16.bind(var3)(var10);
        var10 = {};
        var17 = 12;
        var17 = var12[var17];
        var17 = var16.bind(var3)(var17);
        var10.source = var17;
        var15 = var12[var15];
        var15 = var16.bind(var3)(var15);
        var15 = var15.Sizes;
        var15 = var15.SMALL_20;
        var10.size = var15;
        var10 = var14.bind(var3)(var13, var10);
        var4.children = var10;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot9;
        var5 = 13;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'lineClamp': 1,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var9 = var9.contextButtonText;
        var5.style = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.rtNXxN;
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot7 = var7;
    var3 = var3.Routes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var7 = var3.jsxs;
    var _closure1_slot10 = var7;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 250;
    var3.duration = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.STANDARD_EASING;
    var3.easing = var7;
    var _closure1_slot12 = var3;
    var3 = 7;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = function(arg0) { // Environment: var1
        _fun90087: for (var _fun90087_ip = 0;;) switch (_fun90087_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = {};
                var3 = null;
                if (!(var3 == var2)) {
                    _fun90087_ip = 49;
                    continue _fun90087
                }
            case 13:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.colors;
                var2 = var3.BACKGROUND_SURFACE_HIGH;
            case 49:
                var1.backgroundColor = var2;
                var0.contextBar = var1;
                return var0;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot13 = var7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var3.contextBar = var9;
    var9 = {
        'overflow': 'hidden',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.contextBarRow = var9;
    var9 = {
        'paddingHorizontal': 12,
        'paddingVertical': 10
    };
    var3.contextCancelIconWrapper = var9;
    var9 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'justifyContent': 'center',
        'alignSelf': 'stretch',
        'paddingRight': 12,
        'paddingVertical': 10
    };
    var3.contextButtonText = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 12,
        'paddingVertical': 10
    };
    var3.replyMentionButton = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_BRAND_FOREGROUND;
    var9.color = var12;
    var3.replyMentionButtonActive = var9;
    var9 = {
        'width': 20,
        'height': 20,
        'tintColor': null,
        'marginRight': 4
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var9.tintColor = var12;
    var3.replyMentionIcon = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.CONTROL_BRAND_FOREGROUND;
    var9.tintColor = var10;
    var3.replyMentionIconActive = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function ChatInputContextBarTsx1(){const{stylesBackgroundColor,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,height:heightSv.get()};}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var7 = var6.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var4 = var0.children;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 22;
        var5 = var6[var0];
        var3 = undefined;
        var8 = var7.bind(var3)(var5);
        var5 = var8.useGradientValue;
        var0 = var6[var0];
        var0 = var7.bind(var3)(var0);
        var0 = var0.GradientPercentage;
        var0 = var0.END;
        var5 = var5.bind(var8)(var0);
        var0 = _closure1_slot13;
        var0 = var0.bind(var3)(var5);
        var0 = var0.contextBar;
        var11 = var0.backgroundColor;
        var _closure2_slot0 = var11;
        var0 = 23;
        var5 = var6[var0];
        var9 = var7.bind(var3)(var5);
        var8 = var9.useSharedValue;
        var5 = 0;
        var10 = var8.bind(var9)(var5);
        var _closure2_slot1 = var10;
        var5 = var6[var0];
        var8 = var7.bind(var3)(var5);
        var7 = var8.useAnimatedStyle;
        var5 = function() {
            var0 = {};
            var2 = _closure2_slot0;
            var0.backgroundColor = var2;
            var2 = _closure2_slot1;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.height = var1;
            return var0;
        };
        var9 = {};
        var9.stylesBackgroundColor = var11;
        var9.heightSv = var10;
        var5.__closure = var9;
        var9 = 5608080587636.0;
        var5.__workletHash = var9;
        var9 = _closure1_slot15;
        var5.__initData = var9;
        var5 = var7.bind(var8)(var5);
        var9 = _closure1_slot3;
        var8 = var9.useRef;
        var7 = null;
        var7 = var8.bind(var9)(var7);
        var _closure2_slot2 = var7;
        var10 = _closure1_slot3;
        var9 = var10.useCallback;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() { // Environment: var2
            _fun90090: for (var _fun90090_ip = 0;;) switch (_fun90090_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun90090_ip = 31;
                        continue _fun90090
                    }
                case 18:
                    var1 = _closure2_slot2;
                    var0 = var1.current;
                    var0 = var0.bind(var1)();
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var7 = var9.bind(var10)(var7, var8);
        var _closure2_slot3 = var7;
        var9 = _closure1_slot3;
        var8 = var9.useImperativeHandle;
        var7 = arg1;
        var2 = function() { // Environment: var2
            var0 = {};
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 24;
                var4 = var4[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.withTiming;
                var4 = _closure1_slot12;
                var1 = 40;
                var1 = var5.bind(var6)(var1, var4);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.componentDidAppear = var2;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 24;
                var4 = var4[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.withTiming;
                var4 = _closure1_slot12;
                var1 = 40;
                var1 = var5.bind(var6)(var1, var4);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.componentDidEnter = var2;
            var1 = function arg0() {
                var1 = _closure2_slot2;
                var0 = arg0;
                var1.current = var0;
                var3 = _closure2_slot1;
                var2 = var3.set;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 24;
                var4 = var12[var0];
                var0 = undefined;
                var8 = var11.bind(var0)(var4);
                var7 = var8.withTiming;
                var15 = _closure1_slot12;
                var5 = function arg0() {
                    _fun90095: for (var _fun90095_ip = 0;;) switch (_fun90095_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun90095_ip = 52;
                                continue _fun90095
                            }
                        case 6:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot3;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = {};
                var10 = 23;
                var10 = var12[var10];
                var10 = var11.bind(var0)(var10);
                var10 = var10.runOnJS;
                var4.runOnJS = var10;
                var9 = _closure2_slot3;
                var4.handleTransitionFinished = var9;
                var5.__closure = var4;
                var4 = 10908592279914.0;
                var5.__workletHash = var4;
                var1 = _closure1_slot16;
                var5.__initData = var1;
                var16 = 0;
                var14 = 'respect-motion-settings';
                var17 = var8;
                var13 = var5;
                var1 = var17[var7](var16, var15, var14, var13, var12);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.componentWillLeave = var1;
            return var0;
        };
        var2 = var8.bind(var9)(var7, var2);
        var2 = _closure1_slot9;
        var1 = _closure1_slot1;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot17 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun90096: for (var _fun90096_ip = 0;;) switch (_fun90096_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channel;
                var _closure2_slot0 = var5;
                var4 = var1.chatInputRef;
                var _closure2_slot1 = var4;
                var6 = var1.pendingEdit;
                var7 = var1.pendingReply;
                var _closure2_slot2 = var7;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var5;
                var1[1] = var4;
                var1[2] = var7;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = function() {
                        _fun90098: for (var _fun90098_ip = 0;;) switch (_fun90098_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun90098_ip = 28;
                                    continue _fun90098
                                }
                            case 18:
                                var0 = var1.handleCancelEditing;
                                var0 = var0.bind(var1)();
                            case 28:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onCancelEditing = var2;
                    var2 = function() {
                        _fun90099: for (var _fun90099_ip = 0;;) switch (_fun90099_ip) {
                            case 0:
                                var0 = _closure2_slot2;
                                var8 = null;
                                if (!(var8 != var0)) {
                                    _fun90099_ip = 273;
                                    continue _fun90099
                                }
                            case 16:
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 25;
                                var0 = var2[var0];
                                var4 = undefined;
                                var3 = var1.bind(var4)(var0);
                                var1 = var3.deletePendingReply;
                                var0 = _closure2_slot0;
                                var0 = var0.id;
                                var0 = var1.bind(var3)(var0);
                                var1 = _closure1_slot1;
                                var0 = 26;
                                var0 = var2[var0];
                                var3 = var1.bind(var4)(var0);
                                var2 = var3.track;
                                var0 = _closure1_slot7;
                                var1 = var0.CHAT_CONTEXT_BAR_ACTION_CANCELED;
                                var0 = {};
                                var7 = _closure2_slot2;
                                var9 = var8 == var7;
                                var7 = undefined;
                                if (var9) {
                                    _fun90099_ip = 121;
                                    continue _fun90099
                                }
                            case 107:
                                var9 = _closure2_slot2;
                                var9 = var9.message;
                                var7 = var9.id;
                            case 121:
                                var0.message_id = var7;
                                var7 = _closure2_slot0;
                                var9 = var7.id;
                                var0.channel_id = var9;
                                var7 = var7.guild_id;
                                var0.guild_id = var7;
                                var11 = 'reply';
                                var0.context_action = var11;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var7 = 27;
                                var7 = var10[var7];
                                var10 = var9.bind(var4)(var7);
                                var9 = var10.getContextBarCancelReason;
                                var7 = 'cancel';
                                var7 = var9.bind(var10)(var11, var7);
                                var0.reason = var7;
                                var7 = _closure1_slot6;
                                var5 = var7.getCurrentUser;
                                var7 = var5.bind(var7)();
                                var9 = var8 == var7;
                                var5 = undefined;
                                if (var9) {
                                    _fun90099_ip = 225;
                                    continue _fun90099
                                }
                            case 220:
                                var5 = var7.id;
                            case 225:
                                var7 = _closure2_slot2;
                                var7 = var8 == var7;
                                var4 = undefined;
                                if (var7) {
                                    _fun90099_ip = 258;
                                    continue _fun90099
                                }
                            case 238:
                                var6 = _closure2_slot2;
                                var6 = var6.message;
                                var6 = var6.author;
                                var4 = var6.id;
                            case 258:
                                var4 = var5 === var4;
                                var0.is_own_message = var4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 273:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onCancelReplying = var2;
                    var2 = function() {
                        _fun90100: for (var _fun90100_ip = 0;;) switch (_fun90100_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun90100_ip = 105;
                                    continue _fun90100
                                }
                            case 13:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 28;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.transitionTo;
                                var6 = _closure1_slot8;
                                var5 = var6.CHANNEL;
                                var0 = _closure2_slot2;
                                var4 = var0.channel;
                                var3 = var4.getGuildId;
                                var4 = var3.bind(var4)();
                                var3 = var0.channel;
                                var3 = var3.id;
                                var0 = var0.message;
                                var0 = var0.id;
                                var0 = var5.bind(var6)(var4, var3, var0);
                                var0 = var1.bind(var2)(var0);
                            case 105:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onTapContextBarReply = var2;
                    var1 = function() {
                        _fun90101: for (var _fun90101_ip = 0;;) switch (_fun90101_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun90101_ip = 73;
                                    continue _fun90101
                                }
                            case 13:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 25;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.setPendingReplyShouldMention;
                                var0 = _closure2_slot2;
                                var1 = var0.channel;
                                var1 = var1.id;
                                var0 = var0.shouldMention;
                                var0 = !var0;
                                var0 = var2.bind(var3)(var1, var0);
                            case 73:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onToggleReplyMention = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                var11 = var0.onCancelEditing;
                var15 = var0.onCancelReplying;
                var18 = var0.onTapContextBarReply;
                var17 = var0.onToggleReplyMention;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 29;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.useNullableMessageAuthor;
                var5 = null;
                var4 = var5 == var7;
                var0 = undefined;
                if (var4) {
                    _fun90096_ip = 149;
                    continue _fun90096
                }
            case 144:
                var0 = var7.message;
            case 149:
                var8 = var1.bind(var2)(var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 30;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TransitionGroup;
                var0 = {};
                var4 = _closure1_slot4;
                var0.component = var4;
                var10 = var5 != var7;
                if (!var10) {
                    _fun90096_ip = 206;
                    continue _fun90096
                }
            case 202:
                var10 = var5 != var8;
            case 206:
                if (!var10) {
                    _fun90096_ip = 266;
                    continue _fun90096
                }
            case 209:
                var13 = _closure1_slot9;
                var12 = _closure1_slot17;
                var4 = {};
                var16 = _closure1_slot19;
                var14 = {};
                var14.pendingReply = var7;
                var14.pendingReplyAuthor = var8;
                var14.onTapContextBarReply = var18;
                var14.onCancelReplying = var15;
                var14.onToggleReplyMention = var17;
                var14 = var13.bind(var3)(var16, var14);
                var4.children = var14;
                var10 = var13.bind(var3)(var12, var4);
            case 266:
                var4 = new Array(3);
                var4[0] = var10;
                var7 = var5 != var7;
                if (!var7) {
                    _fun90096_ip = 285;
                    continue _fun90096
                }
            case 281:
                var7 = var5 == var8;
            case 285:
                if (!var7) {
                    _fun90096_ip = 325;
                    continue _fun90096
                }
            case 288:
                var12 = _closure1_slot9;
                var10 = _closure1_slot17;
                var8 = {};
                var14 = _closure1_slot18;
                var13 = {};
                var13.onCancelReplying = var15;
                var13 = var12.bind(var3)(var14, var13);
                var8.children = var13;
                var7 = var12.bind(var3)(var10, var8);
            case 325:
                var4[1] = var7;
                var5 = var5 != var6;
                if (!var5) {
                    _fun90096_ip = 373;
                    continue _fun90096
                }
            case 336:
                var8 = _closure1_slot9;
                var7 = _closure1_slot17;
                var6 = {};
                var10 = _closure1_slot20;
                var9 = {};
                var9.onCancelEditing = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 373:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/ChatInputContextBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1613, 660, 33, 4879, 1297, 671, 4897, 1234, 4077, 5880, 3932, 566, 3975, 6915, 3978, 6672, 8187, 3902, 11703, 3186, 3711, 4088, 9245, 795, 9243, 1220, 3974, 10349, 2]);