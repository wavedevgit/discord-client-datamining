// modules/action_sheet/native/components/EmojiRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ContentDismissActionType;
    var _closure1_slot5 = var6;
    var3 = var3.DismissibleContentGroupName;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot7 = var6;
    var3 = var3.EmojiIntention;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var9 = 6;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var3 = var3.colors;
    var11 = var3.BACKGROUND_MOD_STRONG;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 28,
        'height': 28
    };
    var3.emojiImage = var8;
    var8 = {
        'paddingTop': 5,
        'lineHeight': 28,
        'fontSize': 28,
        'color': null,
        'textAlign': 'center',
        'width': 28,
        'height': 28
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var12;
    var3.emojiText = var8;
    var8 = {
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.emojiRowContainer = var8;
    var8 = {
        'height': 52,
        'alignSelf': 'stretch',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'marginTop': 0,
        'marginBottom': 0
    };
    var3.emojiRow = var8;
    var8 = {
        'borderRadius': 24,
        'overflow': 'hidden'
    };
    var3.emojiWrapper = var8;
    var8 = {
        'width': 48,
        'height': 48,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var8.backgroundColor = var11;
    var3.emojiContainer = var8;
    var8 = {};
    var8.backgroundColor = var11;
    var3.addReaction = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var9;
    var3.icon = var8;
    var8 = {
        'marginLeft': 6,
        'marginTop': 6
    };
    var3.sparklingIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        _fun78393: for (var _fun78393_ip = 0;;) switch (_fun78393_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var _closure2_slot0 = var1;
                var1 = var0.channel;
                var _closure2_slot1 = var1;
                var1 = var0.reactionType;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot11;
                var12 = var0.bind(var3)();
                var _closure2_slot2 = var12;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 14;
                var4 = var5[var0];
                var6 = var2.bind(var3)(var4);
                var4 = var6.useThemeContext;
                var4 = var4.bind(var6)();
                var4 = var4.theme;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.isThemeLight;
                var2 = var0.bind(var2)(var4);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                if (var2) {
                    _fun78393_ip = 154;
                    continue _fun78393
                }
            case 146:
                var8 = var0.PRIMARY_300;
                _fun78393_ip = 160;
                continue _fun78393;
            case 154:
                var8 = var0.PRIMARY_500;
            case 160:
                _closure2_slot3 = var8;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 15;
                var0 = var9[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ReactionTypes;
                var0 = var0.BURST;
                var6 = var1 === var0;
                _closure2_slot4 = var6;
                var0 = 16;
                var2 = var9[var0];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ADD_REACTION_ICONS;
                var2 = var2[var1];
                _closure2_slot5 = var2;
                var0 = var9[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ADD_REACTION_ICON_COMPONENTS;
                var7 = var0[var1];
                _closure2_slot6 = var7;
                var2 = _closure1_slot9;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var12.emojiWrapper;
                var0.style = var4;
                var4 = 17;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var9 = 'button';
                var4.accessibilityRole = var9;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 18;
                var14 = var16[var9];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var9 = var16[var9];
                var9 = var13.bind(var3)(var9);
                var13 = var9.t;
                if (var6) {
                    _fun78393_ip = 361;
                    continue _fun78393
                }
            case 348:
                var9 = var13.lfIHs4;
                var9 = var14.bind(var15)(var9);
                _fun78393_ip = 374;
                continue _fun78393;
            case 361:
                var13 = var13.Kfcszg;
                var9 = var14.bind(var15)(var13);
            case 374:
                var4.accessibilityLabel = var9;
                var9 = function() {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 16;
                    var0 = var8[var0];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var0);
                    var4 = var5.handleAddNewReactions;
                    var3 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var11 = var0.id;
                    var0 = 10;
                    var0 = var8[var0];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.ReactionLocations;
                    var10 = var0.MESSAGE;
                    var0 = {};
                    var6 = _closure2_slot4;
                    var0.burst = var6;
                    var13 = var5;
                    var12 = var3;
                    var9 = var0;
                    var0 = var13[var4](var12, var11, var10, var9, var8);
                    return var0;
                };
                var4.onPress = var9;
                var13 = var12.emojiContainer;
                var9 = new Array(2);
                var9[0] = var13;
                var12 = var12.addReaction;
                var9[1] = var12;
                var4.style = var9;
                var9 = _closure1_slot9;
                if (var6) {
                    _fun78393_ip = 438;
                    continue _fun78393
                }
            case 424:
                var6 = {};
                var6.color = var8;
                var6 = var9.bind(var3)(var7, var6);
                _fun78393_ip = 533;
                continue _fun78393;
            case 438:
                var8 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 19;
                var7 = var14[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var13 = _closure1_slot0;
                var12 = 20;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.DismissibleContent;
                var13 = var12.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE;
                var12 = new Array(1);
                var12[0] = var13;
                var7.contentTypes = var12;
                var11 = _closure1_slot6;
                var11 = var11.SUPER_REACTIONS_SPARKLES;
                var7.groupName = var11;
                var10 = function arg0() {
                    _fun78395: for (var _fun78395_ip = 0;;) switch (_fun78395_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.visibleContent;
                            var0 = var0.markAsDismissed;
                            var _closure3_slot0 = var0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 20;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.DismissibleContent;
                            var0 = var0.SUPER_REACTIONS_SPARKLES_ACTION_SHEET_MOBILE;
                            if (!(var3 !== var0)) {
                                _fun78395_ip = 91;
                                continue _fun78395
                            }
                        case 62:
                            var5 = _closure1_slot9;
                            var3 = _closure2_slot6;
                            var0 = {};
                            var6 = _closure2_slot3;
                            var0.color = var6;
                            var0 = var5.bind(var4)(var3, var0);
                            _fun78395_ip = 183;
                            continue _fun78395;
                        case 91:
                            var3 = global;
                            var5 = var3.setTimeout;
                            var3 = function() { // Environment: var2
                                var2 = _closure3_slot0;
                                var0 = _closure1_slot5;
                                var1 = var0.UNKNOWN;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = 10000;
                            var2 = var5.bind(var4)(var3, var2);
                            var3 = _closure1_slot9;
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 21;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var6 = _closure2_slot2;
                            var6 = var6.sparklingIcon;
                            var1.style = var6;
                            var6 = _closure2_slot5;
                            var1.source = var6;
                            var5 = _closure2_slot3;
                            var1.color = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 183:
                            return var0;
                    }
                };
                var7.children = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 533:
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = function arg0() {
        _fun78397: for (var _fun78397_ip = 0;;) switch (_fun78397_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var _closure2_slot0 = var1;
                var15 = var0.emoji;
                var _closure2_slot1 = var15;
                var0 = _closure1_slot11;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var10.emojiWrapper;
                var0.style = var4;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 17;
                var4 = var11[var4];
                var4 = var8.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var7 = 'button';
                var4.accessibilityRole = var7;
                var7 = 18;
                var9 = var11[var7];
                var9 = var8.bind(var3)(var9);
                var12 = var9.intl;
                var9 = var12.formatToPlainString;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var8 = var7["/iYSo6"];
                var7 = {};
                var11 = null;
                var16 = var11 == var15;
                var13 = undefined;
                if (var16) {
                    _fun78397_ip = 155;
                    continue _fun78397
                }
            case 150:
                var13 = var15.name;
            case 155:
                var7.emojiName = var13;
                var7 = var9.bind(var12)(var8, var7);
                var4.accessibilityLabel = var7;
                var7 = var11 == var15;
                var4.disabled = var7;
                var6 = function() {
                    _fun78398: for (var _fun78398_ip = 0;;) switch (_fun78398_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 8;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.hideActionSheet;
                            var3 = var3.bind(var5)();
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun78398_ip = 241;
                                continue _fun78398
                            }
                        case 55:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var6 = 9;
                            var7 = var5[var6];
                            var8 = var3.bind(var0)(var7);
                            var7 = var8.triggerHapticFeedback;
                            var6 = var5[var6];
                            var6 = var3.bind(var0)(var6);
                            var6 = var6.HapticFeedbackTypes;
                            var6 = var6.IMPACT_LIGHT;
                            var6 = var7.bind(var8)(var6);
                            var6 = 10;
                            var6 = var5[var6];
                            var10 = var3.bind(var0)(var6);
                            var9 = var10.addReaction;
                            var8 = var1.channel_id;
                            var7 = var1.id;
                            var6 = 11;
                            var6 = var5[var6];
                            var11 = var3.bind(var0)(var6);
                            var6 = var11.toReactionEmoji;
                            var6 = var6.bind(var11)(var4);
                            var6 = var9.bind(var10)(var8, var7, var6);
                            var6 = _closure1_slot1;
                            var2 = 12;
                            var2 = var5[var2];
                            var7 = var6.bind(var0)(var2);
                            var6 = var7.focusMessage;
                            var2 = {};
                            var8 = var1.channel_id;
                            var2.channelId = var8;
                            var8 = var1.id;
                            var2.messageId = var8;
                            var2 = var6.bind(var7)(var2);
                            var2 = 13;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.initializeDoubleTapEmojiAndUpsell;
                            var1 = var1.channel_id;
                            var1 = var2.bind(var3)(var4, var1);
                        case 241:
                            return var0;
                    }
                };
                var4.onPress = var6;
                var6 = var10.emojiContainer;
                var4.style = var6;
                var7 = var11 != var15;
                var6 = null;
                if (!var7) {
                    _fun78397_ip = 372;
                    continue _fun78397
                }
            case 211:
                var9 = _closure1_slot9;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 22;
                var7 = var12[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var12 = var10.emojiText;
                var7.textEmojiStyle = var12;
                var10 = var10.emojiImage;
                var7.fastImageStyle = var10;
                var10 = var15.id;
                var12 = var11 == var10;
                var10 = '';
                if (!var12) {
                    _fun78397_ip = 280;
                    continue _fun78397
                }
            case 275:
                var10 = var15.surrogates;
            case 280:
                var7.name = var10;
                var10 = var15.id;
                if (!(var11 == var10)) {
                    _fun78397_ip = 300;
                    continue _fun78397
                }
            case 293:
                var10 = var15.url;
                _fun78397_ip = 361;
                continue _fun78397;
            case 300:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 23;
                var11 = var13[var11];
                var13 = var12.bind(var3)(var11);
                var12 = var13.getEmojiURL;
                var11 = {};
                var16 = var15.id;
                var11.id = var16;
                var15 = var15.animated;
                var11.animated = var15;
                var14 = _closure1_slot7;
                var11.size = var14;
                var10 = var12.bind(var13)(var11);
            case 361:
                var7.src = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 372:
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/action_sheet/native/components/EmojiRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78399: for (var _fun78399_ip = 0;;) switch (_fun78399_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.message;
                var _closure2_slot0 = var6;
                var10 = var0.channel;
                var _closure2_slot1 = var10;
                var0 = _closure1_slot11;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var0 = var10.getGuildId;
                var2 = var0.bind(var10)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 25;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useFrequentlyUsedReactionEmojis;
                var2 = var0.bind(var1)(var2);
                var1 = _closure1_slot1;
                var0 = 26;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var11 = var0.width;
                var0 = global;
                var9 = var0.Math;
                var4 = var9.min;
                var1 = _closure1_slot4;
                var9 = var4.bind(var9)(var11, var1);
                var4 = var0.Math;
                var1 = var4.floor;
                var0 = 60;
                var0 = var9 / var0;
                var9 = var1.bind(var4)(var0);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 27;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isEmojiFilteredOrLocked;
                    var0 = {};
                    var4 = arg0;
                    var0.emoji = var4;
                    var4 = _closure2_slot1;
                    var0.channel = var4;
                    var3 = _closure1_slot8;
                    var3 = var3.REACTION;
                    var0.intention = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var12 = var1.bind(var2)(var0);
                var0 = var12.length;
                var1 = null;
                if (!(var0 < var9)) {
                    _fun78399_ip = 196;
                    continue _fun78399
                }
            case 177:
                var0 = var12.push;
                var0 = var0.bind(var12)(var1);
                var0 = var12.length;
                if (var0 < var9) {
                    _fun78399_ip = 177;
                    continue _fun78399
                }
            case 196:
                var2 = _closure1_slot10;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var7.emojiRowContainer;
                var0.style = var4;
                var4 = {};
                var7 = var7.emojiRow;
                var4.style = var7;
                var11 = var12.slice;
                var7 = 1;
                var9 = var9 - var7;
                var7 = 0;
                var9 = var11.bind(var12)(var7, var9);
                var7 = var9.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    _fun78401: for (var _fun78401_ip = 0;;) switch (_fun78401_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var3 = _closure1_slot9;
                            var2 = _closure1_slot13;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var1.message = var6;
                            var1.emoji = var5;
                            var6 = null;
                            if (!(var6 != var5)) {
                                _fun78401_ip = 99;
                                continue _fun78401
                            }
                        case 41:
                            var6 = var5.type;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 24;
                            var7 = var7[var0];
                            var0 = undefined;
                            var0 = var8.bind(var0)(var7);
                            var0 = var0.EmojiTypes;
                            var0 = var0.UNICODE;
                            if (!(var6 !== var0)) {
                                _fun78401_ip = 91;
                                continue _fun78401
                            }
                        case 84:
                            var0 = var5.id;
                            _fun78401_ip = 96;
                            continue _fun78401;
                        case 91:
                            var0 = var5.surrogates;
                        case 96:
                            var4 = var0;
                        case 99:
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1, var4);
                            return var0;
                    }
                };
                var7 = var7.bind(var9)(var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot9;
                var11 = _closure1_slot12;
                var9 = {};
                var9.channel = var10;
                var9.message = var6;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = 15;
                var12 = var10[var12];
                var12 = var6.bind(var3)(var12);
                var12 = var12.ReactionTypes;
                var12 = var12.NORMAL;
                var9.reactionType = var12;
                var9 = var7.bind(var3)(var11, var9);
                var5[1] = var9;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 28;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.DoubleTapEmojiEditNudge;
                var5 = {};
                var9 = _closure1_slot1;
                var8 = 29;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.MESSAGE_LONG_PRESS_MENU;
                var5.location = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4932, 1369, 1624, 33, 671, 1297, 3278, 3279, 6553, 3102, 6526, 6999, 3206, 6554, 9232, 4902, 1234, 5957, 1358, 9939, 5769, 1417, 3107, 6992, 1464, 3108, 9941, 5579, 2]);