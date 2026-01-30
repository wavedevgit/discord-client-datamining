// modules/icymi/native/ICYMICardInteractionRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: onAddReaction, environment: var4
        _fun104733: for (var _fun104733_ip = 0;;) switch (_fun104733_ip) {
            case 0:
                var5 = arg2;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun104733_ip = 110;
                    continue _fun104733
                }
            case 9:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var1 = undefined;
                var4 = var2.bind(var1)(var0);
                var0 = var4.toReactionEmoji;
                var9 = var0.bind(var4)(var5);
                var0 = 11;
                var4 = var3[var0];
                var5 = var2.bind(var1)(var4);
                var4 = var5.addReaction;
                var0 = var3[var0];
                var0 = var2.bind(var1)(var0);
                var0 = var0.ReactionLocations;
                var8 = var0.MESSAGE;
                var2 = {};
                var0 = arg3;
                var2.burst = var0;
                var11 = arg0;
                var10 = arg1;
                var12 = var5;
                var7 = var2;
                var0 = var12[var4](var11, var10, var9, var8, var7, var6);
            case 110:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot21 = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: useThread, environment: var4
        _fun104734: for (var _fun104734_ip = 0;;) switch (_fun104734_ip) {
            case 0:
                var7 = arg0;
                var8 = arg1;
                var9 = arg2;
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var8;
                var _closure2_slot2 = var9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var10 = undefined;
                var5 = var2.bind(var10)(var1);
                var3 = var5.useStateFromStoresObject;
                var1 = _closure1_slot9;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot8;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun104735: for (var _fun104735_ip = 0;;) switch (_fun104735_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun104735_ip = 141;
                                continue _fun104735
                            }
                        case 16:
                            var0 = _closure2_slot0;
                            if (!(var3 != var0)) {
                                _fun104735_ip = 141;
                                continue _fun104735
                            }
                        case 24:
                            var0 = {};
                            var6 = _closure1_slot9;
                            var5 = var6.getChannel;
                            var4 = _closure2_slot1;
                            var4 = var4.id;
                            var5 = var5.bind(var6)(var4);
                            var6 = var3 != var5;
                            var4 = null;
                            if (!var6) {
                                _fun104735_ip = 64;
                                continue _fun104735
                            }
                        case 61:
                            var4 = var5;
                        case 64:
                            var0.thread = var4;
                            var6 = _closure1_slot8;
                            var5 = var6.getCount;
                            var4 = _closure2_slot1;
                            var4 = var4.id;
                            var4 = var5.bind(var6)(var4);
                            var5 = var3 != var4;
                            var3 = 0;
                            if (!var5) {
                                _fun104735_ip = 105;
                                continue _fun104735
                            }
                        case 102:
                            var3 = var4;
                        case 105:
                            var0.messageCount = var3;
                            var3 = _closure1_slot8;
                            var2 = var3.getMostRecentMessage;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var0.mostRecentMessage = var1;
                            _fun104735_ip = 155;
                            continue _fun104735;
                        case 141:
                            var0 = {
                                'thread': null,
                                'messageCount': 0,
                                'mostRecentMessage': null
                            };
                        case 155:
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var2, var1);
                var3 = var1.thread;
                var2 = var1.messageCount;
                var1 = var1.mostRecentMessage;
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var4 = null;
                var4 = var4 == var7;
                if (var4) {
                    _fun104734_ip = 128;
                    continue _fun104734
                }
            case 123:
                var10 = var7.id;
            case 128:
                var4 = new Array(4);
                var4[0] = var10;
                var4[1] = var9;
                var4[2] = var8;
                var4[3] = var7;
                var0 = function() { // Environment: var0
                    _fun104736: for (var _fun104736_ip = 0;;) switch (_fun104736_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun104736_ip = 24;
                                continue _fun104736
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun104736_ip = 65;
                                continue _fun104736
                            }
                        case 27:
                            var5 = _closure2_slot1;
                            var4 = var5.hasFlag;
                            var2 = _closure1_slot12;
                            var2 = var2.HAS_THREAD;
                            var2 = var4.bind(var5)(var2);
                            if (var2) {
                                _fun104736_ip = 62;
                                continue _fun104736
                            }
                        case 58:
                            var2 = _closure2_slot2;
                        case 62:
                            var1 = var2;
                        case 65:
                            if (!var1) {
                                _fun104736_ip = 99;
                                continue _fun104736
                            }
                        case 68:
                            var5 = _closure1_slot8;
                            var4 = var5.getMostRecentMessage;
                            var2 = _closure2_slot1;
                            var2 = var2.id;
                            var2 = var4.bind(var5)(var2);
                            var1 = var3 == var2;
                        case 99:
                            if (!var1) {
                                _fun104736_ip = 205;
                                continue _fun104736
                            }
                        case 102:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 17;
                            var3 = var4[var1];
                            var1 = undefined;
                            var7 = var2.bind(var1)(var3);
                            var6 = var7.preload;
                            var3 = _closure2_slot0;
                            var5 = var3.id;
                            var3 = _closure2_slot1;
                            var0 = var3.id;
                            var0 = var6.bind(var7)(var5, var0);
                            var0 = 18;
                            var0 = var4[var0];
                            var2 = var2.bind(var1)(var0);
                            var1 = var2.fetchMessages;
                            var0 = {
                                'channelId': null,
                                'isPreload': true,
                                'limit': 25
                            };
                            var3 = var3.id;
                            var0.channelId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 205:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.thread = var3;
                var0.messageCount = var2;
                var0.mostRecentMessage = var1;
                return var0;
        }
    };
    var _closure1_slot22 = var1;
    var0 = function(arg0) { // Original name: AddEmojiButton, environment: var4
        _fun104737: for (var _fun104737_ip = 0;;) switch (_fun104737_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.channel;
                var _closure2_slot0 = var11;
                var10 = var1.onPressEmoji;
                var _closure2_slot1 = var10;
                var5 = var1.showText;
                var4 = var1.disabled;
                var8 = var1.handleItemInteracted;
                var _closure2_slot2 = var8;
                var1 = _closure1_slot20;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var7 = _closure1_slot4;
                var2 = var7.useCallback;
                var1 = new Array(3);
                var1[0] = var11;
                var1[1] = var10;
                var1[2] = var8;
                var0 = function() { // Environment: var0
                    _fun104738: for (var _fun104738_ip = 0;;) switch (_fun104738_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var6 = null;
                            var0 = undefined;
                            var2 = 'press_reaction_picker';
                            var1 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'reaction_picker_button',
                                'actionIntentType': 'open',
                                'actionDestinationType': null
                            };
                            var1 = var3.bind(var0)(var2, var1);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 19;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openEmojiPickerActionSheet;
                            var1 = {
                                'pickerIntention': null,
                                'autoFocus': false,
                                'startExpanded': false
                            };
                            var4 = _closure1_slot15;
                            var4 = var4.REACTION;
                            var1.pickerIntention = var4;
                            var4 = _closure2_slot1;
                            var1.onPressEmoji = var4;
                            var4 = _closure2_slot0;
                            var1.channel = var4;
                            var6 = var6 == var4;
                            var4 = undefined;
                            if (var6) {
                                _fun104738_ip = 131;
                                continue _fun104738
                            }
                        case 122:
                            var5 = _closure2_slot0;
                            var4 = var5.guild_id;
                        case 131:
                            var1.guildId = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot17;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 20;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.onPress = var7;
                var8 = var9.emojiContainer;
                var7 = new Array(3);
                var7[0] = var8;
                var8 = var9.addEmojiContainer;
                var7[1] = var8;
                var8 = null;
                if (!var4) {
                    _fun104737_ip = 168;
                    continue _fun104737
                }
            case 163:
                var8 = var9.disabled;
            case 168:
                var7[2] = var8;
                var0.style = var7;
                var7 = true;
                var0.accessible = var7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var13 = 21;
                var8 = var9[var13];
                var8 = var7.bind(var3)(var8);
                var11 = var8.intl;
                var10 = var11.string;
                var8 = var9[var13];
                var8 = var7.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.lfIHs4;
                var8 = var10.bind(var11)(var8);
                var0.accessibilityLabel = var8;
                var0.disabled = var4;
                var8 = _closure1_slot16;
                var4 = 22;
                var4 = var9[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.ReactionIcon;
                var4 = {};
                var9 = 'sm';
                var4.size = var9;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun104737_ip = 393;
                    continue _fun104737
                }
            case 294:
                var8 = _closure1_slot16;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 23;
                var6 = var9[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-sm/semibold',
                    'color': 'redesign-button-tertiary-text'
                };
                var10 = var9[var13];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.m9O1gd;
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 393:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: EmojiReaction, environment: var4
        _fun104739: for (var _fun104739_ip = 0;;) switch (_fun104739_ip) {
            case 0:
                var1 = arg0;
                var21 = var1.messageId;
                var _closure2_slot0 = var21;
                var22 = var1.channel;
                var _closure2_slot1 = var22;
                var18 = var1.reaction;
                var _closure2_slot2 = var18;
                var14 = var1.count;
                var13 = var1.isBurstReaction;
                var _closure2_slot3 = var13;
                var17 = var1.handleItemInteracted;
                var _closure2_slot4 = var17;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot20;
                var16 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 24;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useEmojiColorPalette;
                var1 = var18.burst_colors;
                var11 = null;
                if (!(var11 == var1)) {
                    _fun104739_ip = 118;
                    continue _fun104739
                }
            case 114:
                var1 = new Array(0);
            case 118:
                var2 = var2.bind(var4)(var1);
                var9 = {};
                var4 = var11 != var2;
                var6 = '';
                var1 = var6;
                if (!var4) {
                    _fun104739_ip = 232;
                    continue _fun104739
                }
            case 139:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 25;
                var4 = var7[var4];
                var10 = var5.bind(var3)(var4);
                var7 = var10.hex2rgb;
                var4 = var11 == var2;
                var5 = undefined;
                if (var4) {
                    _fun104739_ip = 179;
                    continue _fun104739
                }
            case 174:
                var5 = var2.backgroundColor;
            case 179:
                var4 = var11 == var2;
                var12 = undefined;
                if (var4) {
                    _fun104739_ip = 193;
                    continue _fun104739
                }
            case 188:
                var12 = var2.opacity;
            case 193:
                var15 = var11 != var12;
                var4 = 0.15;
                if (!var15) {
                    _fun104739_ip = 213;
                    continue _fun104739
                }
            case 210:
                var4 = var12;
            case 213:
                var4 = var7.bind(var10)(var5, var4);
                var5 = var11 != var4;
                var1 = var6;
                if (!var5) {
                    _fun104739_ip = 232;
                    continue _fun104739
                }
            case 229:
                var1 = var4;
            case 232:
                var9.backgroundColor = var1;
                var4 = var11 == var2;
                var1 = undefined;
                if (var4) {
                    _fun104739_ip = 250;
                    continue _fun104739
                }
            case 245:
                var1 = var2.backgroundColor;
            case 250:
                var9.borderColor = var1;
                var4 = var11 == var2;
                var1 = undefined;
                if (var4) {
                    _fun104739_ip = 270;
                    continue _fun104739
                }
            case 264:
                var1 = var2.accentColor;
            case 270:
                var1 = var11 != var1;
                var12 = null;
                if (!var1) {
                    _fun104739_ip = 294;
                    continue _fun104739
                }
            case 279:
                var1 = {};
                var2 = var2.accentColor;
                var1.color = var2;
                var12 = var1;
            case 294:
                var19 = var18.emoji;
                _closure2_slot5 = var19;
                if (var13) {
                    _fun104739_ip = 315;
                    continue _fun104739
                }
            case 307:
                var10 = var18.me;
                _fun104739_ip = 321;
                continue _fun104739;
            case 315:
                var10 = var18.me_burst;
            case 321:
                var7 = undefined;
                if (!var10) {
                    _fun104739_ip = 332;
                    continue _fun104739
                }
            case 326:
                var7 = var16.selected;
            case 332:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 16;
                var2 = var6[var2];
                var15 = var1.bind(var3)(var2);
                var5 = var15.useStateFromStores;
                var2 = _closure1_slot10;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun104740: for (var _fun104740_ip = 0;;) switch (_fun104740_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = var0.guild_id;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun104740_ip = 48;
                                continue _fun104740
                            }
                        case 21:
                            var3 = _closure1_slot10;
                            var2 = var3.canChatInGuild;
                            var1 = _closure2_slot1;
                            var1 = var1.guild_id;
                            var0 = var2.bind(var3)(var1);
                        case 48:
                            return var0;
                    }
                };
                var4 = var5.bind(var15)(var4, var2);
                var20 = _closure1_slot4;
                var15 = var20.useMemo;
                var5 = new Array(1);
                var5[0] = var19;
                var2 = function() { // Environment: var0
                    _fun104741: for (var _fun104741_ip = 0;;) switch (_fun104741_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var1 = var0.id;
                            var0 = null;
                            var1 = var0 != var1;
                            var4 = undefined;
                            var0 = undefined;
                            if (!var1) {
                                _fun104741_ip = 105;
                                continue _fun104741
                            }
                        case 25:
                            var1 = {};
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 26;
                            var2 = var6[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.getEmojiURL;
                            var2 = {};
                            var6 = _closure2_slot5;
                            var6 = var6.id;
                            var2.id = var6;
                            var5 = _closure2_slot5;
                            var5 = var5.animated;
                            var2.animated = var5;
                            var5 = 48;
                            var2.size = var5;
                            var2 = var3.bind(var4)(var2);
                            var1.uri = var2;
                            var0 = var1;
                        case 105:
                            return var0;
                    }
                };
                var20 = var15.bind(var20)(var2, var5);
                var15 = _closure1_slot4;
                var5 = var15.useCallback;
                var2 = new Array(5);
                var2[0] = var22;
                var2[1] = var13;
                var2[2] = var21;
                var2[3] = var18;
                var2[4] = var17;
                var0 = function() { // Environment: var0
                    var4 = _closure2_slot4;
                    var0 = undefined;
                    var3 = 'press_reaction';
                    var2 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'toggle_existing_reaction_button',
                        'actionIntentType': 'react',
                        'actionDestinationType': null
                    };
                    var2 = var4.bind(var0)(var3, var2);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 27;
                    var2 = var9[var2];
                    var7 = var8.bind(var0)(var2);
                    var6 = var7.handleAddOrRemoveReaction;
                    var5 = _closure2_slot0;
                    var13 = _closure2_slot1;
                    var12 = _closure2_slot2;
                    var11 = _closure2_slot3;
                    var1 = 11;
                    var1 = var9[var1];
                    var1 = var8.bind(var0)(var1);
                    var1 = var1.ReactionLocations;
                    var10 = var1.MESSAGE;
                    var15 = var7;
                    var14 = var5;
                    var1 = var15[var6](var14, var13, var12, var11, var10, var9);
                    return var0;
                };
                var5 = var5.bind(var15)(var0, var2);
                var2 = _closure1_slot17;
                var0 = 20;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var15 = var16.emojiContainer;
                var6 = new Array(3);
                var6[0] = var15;
                var6[1] = var7;
                var7 = var13;
                if (!var7) {
                    _fun104739_ip = 509;
                    continue _fun104739
                }
            case 506:
                var7 = var9;
            case 509:
                var6[2] = var7;
                var0.style = var6;
                var0.onPress = var5;
                var15 = true;
                var0.accessible = var15;
                var5 = var19.name;
                var0.accessibilityLabel = var5;
                var4 = !var4;
                var0.disabled = var4;
                var6 = _closure1_slot16;
                var5 = _closure1_slot5;
                var4 = {};
                var9 = var16.innerEmojiContainer;
                var7 = new Array(2);
                var7[0] = var9;
                var9 = var10;
                if (!var10) {
                    _fun104739_ip = 579;
                    continue _fun104739
                }
            case 573:
                var9 = var16.selectedInnerEmojiContainer;
            case 579:
                var7[1] = var9;
                var4.style = var7;
                var7 = var19.id;
                if (!(var11 != var7)) {
                    _fun104739_ip = 740;
                    continue _fun104739
                }
            case 599:
                var9 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 14;
                var7 = var17[var7];
                var9 = var9.bind(var3)(var7);
                var7 = var9.isAndroid;
                var7 = var7.bind(var9)();
                var18 = _closure1_slot16;
                if (var7) {
                    _fun104739_ip = 694;
                    continue _fun104739
                }
            case 636:
                var9 = _closure1_slot1;
                var17 = _closure1_slot2;
                var7 = 28;
                var7 = var17[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var7.emoji = var19;
                var17 = _closure1_slot19;
                var7.size = var17;
                var17 = var16.defaultEmoji;
                var7.style = var17;
                var7.animate = var15;
                var7 = var18.bind(var3)(var9, var7);
                _fun104739_ip = 738;
                continue _fun104739;
            case 694:
                var17 = _closure1_slot6;
                var9 = {};
                var22 = var16.defaultEmoji;
                var21 = new Array(2);
                var21[0] = var22;
                var22 = var16.emojiImage;
                var21[1] = var22;
                var9.style = var21;
                var9.source = var20;
                var7 = var18.bind(var3)(var17, var9);
            case 738:
                _fun104739_ip = 828;
                continue _fun104739;
            case 740:
                var18 = _closure1_slot16;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 23;
                var9 = var20[var9];
                var9 = var17.bind(var3)(var9);
                var17 = var9.Text;
                var9 = {
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-default',
                    'style': null,
                    'allowFontScaling': false
                };
                var21 = var16.defaultEmoji;
                var20 = new Array(2);
                var20[0] = var21;
                var21 = var16.emojiText;
                var20[1] = var21;
                var9.style = var20;
                var19 = var19.name;
                var9.children = var19;
                var7 = var18.bind(var3)(var17, var9);
            case 828:
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot16;
                var6 = _closure1_slot5;
                var5 = {};
                var17 = var16.innerTextContainer;
                var9 = new Array(2);
                var9[0] = var17;
                if (!var10) {
                    _fun104739_ip = 879;
                    continue _fun104739
                }
            case 873:
                var10 = var16.selectedInnerTextContainer;
            case 879:
                var9[1] = var10;
                var5.style = var9;
                var10 = _closure1_slot16;
                var9 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 29;
                var8 = var16[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.animate = var15;
                var8.count = var14;
                var11 = null;
                if (!var13) {
                    _fun104739_ip = 931;
                    continue _fun104739
                }
            case 928:
                var11 = var12;
            case 931:
                var8.textStyle = var11;
                var11 = 'text-md/semibold';
                var8.textVariant = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: ForwardButton, environment: var4
        _fun104743: for (var _fun104743_ip = 0;;) switch (_fun104743_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.onPress;
                var5 = var0.disabled;
                var0 = _closure1_slot20;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot16;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 20;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.onPress = var6;
                var7 = var8.emojiContainer;
                var6 = new Array(3);
                var6[0] = var7;
                var7 = var8.addEmojiContainer;
                var6[1] = var7;
                var7 = null;
                if (!var5) {
                    _fun104743_ip = 96;
                    continue _fun104743
                }
            case 91:
                var7 = var8.disabled;
            case 96:
                var6[2] = var7;
                var0.style = var6;
                var6 = true;
                var0.accessible = var6;
                var0.disabled = var5;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 21;
                var6 = var7[var5];
                var6 = var9.bind(var3)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var5 = var7[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.xIUfJS;
                var5 = var6.bind(var8)(var5);
                var0.accessibilityLabel = var5;
                var6 = _closure1_slot16;
                var5 = _closure1_slot1;
                var4 = 30;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var7 = 'sm';
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0) { // Original name: ReplyButton, environment: var4
        _fun104744: for (var _fun104744_ip = 0;;) switch (_fun104744_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.onPress;
                var5 = var0.disabled;
                var0 = _closure1_slot20;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot16;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 20;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.onPress = var6;
                var7 = var8.emojiContainer;
                var6 = new Array(3);
                var6[0] = var7;
                var7 = var8.addEmojiContainer;
                var6[1] = var7;
                var7 = null;
                if (!var5) {
                    _fun104744_ip = 96;
                    continue _fun104744
                }
            case 91:
                var7 = var8.disabled;
            case 96:
                var6[2] = var7;
                var0.style = var6;
                var6 = true;
                var0.accessible = var6;
                var0.disabled = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 21;
                var8 = var7[var6];
                var8 = var5.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var7[var6];
                var6 = var5.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["5NwaNY"];
                var6 = var8.bind(var9)(var6);
                var0.accessibilityLabel = var6;
                var6 = _closure1_slot16;
                var4 = 31;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ArrowAngleLeftUpIcon;
                var4 = {};
                var7 = 'sm';
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0) { // Original name: ThreadAsCommentsButton, environment: var4
        _fun104745: for (var _fun104745_ip = 0;;) switch (_fun104745_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.parentMessage;
                var _closure2_slot0 = var10;
                var0 = var1.threadData;
                var _closure2_slot1 = var0;
                var6 = var1.style;
                var9 = var1.handleItemInteracted;
                var _closure2_slot2 = var9;
                var1 = _closure1_slot20;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 16;
                var1 = var5[var1];
                var7 = var4.bind(var3)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot11;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var2
                    var3 = _closure1_slot11;
                    var2 = var3.canWithPartialContext;
                    var0 = _closure1_slot13;
                    var1 = var0.VIEW_CHANNEL;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var0.channelId = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var5.bind(var7)(var4, var1);
                var7 = _closure1_slot4;
                var5 = var7.useCallback;
                var4 = new Array(3);
                var4[0] = var10;
                var10 = var0.thread;
                var4[1] = var10;
                var4[2] = var9;
                var2 = function() { // Environment: var2
                    _fun104747: for (var _fun104747_ip = 0;;) switch (_fun104747_ip) {
                        case 0:
                            var4 = _closure2_slot2;
                            var0 = undefined;
                            var3 = 'press_comments';
                            var1 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'thread_comments_button',
                                'actionIntentType': 'navigate',
                                'actionDestinationType': 'channel'
                            };
                            var1 = var4.bind(var0)(var3, var1);
                            var1 = _closure2_slot0;
                            var4 = null;
                            var1 = var4 != var1;
                            if (!var1) {
                                _fun104747_ip = 62;
                                continue _fun104747
                            }
                        case 48:
                            var3 = _closure2_slot1;
                            var3 = var3.thread;
                            var1 = var4 != var3;
                        case 62:
                            if (!var1) {
                                _fun104747_ip = 135;
                                continue _fun104747
                            }
                        case 65:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 32;
                            var1 = var4[var1];
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.navigateToPost;
                            var1 = _closure2_slot0;
                            var3 = var1.getChannelId;
                            var3 = var3.bind(var1)();
                            var2 = _closure2_slot1;
                            var2 = var2.thread;
                            var2 = var2.guild_id;
                            var1 = var1.id;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 135:
                            return var0;
                    }
                };
                var4 = var5.bind(var7)(var2, var4);
                if (!var1) {
                    _fun104745_ip = 558;
                    continue _fun104745
                }
            case 153:
                var2 = var0.messageCount;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun104745_ip = 558;
                    continue _fun104745
                }
            case 168:
                var1 = var0.thread;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun104745_ip = 193;
                    continue _fun104745
                }
            case 180:
                var1 = var0.mostRecentMessage;
                if (!(var2 == var1)) {
                    _fun104745_ip = 333;
                    continue _fun104745
                }
            case 193:
                var5 = _closure1_slot16;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 20;
                var1 = var15[var1];
                var1 = var12.bind(var3)(var1);
                var2 = var1.PressableHighlight;
                var1 = {};
                var9 = var14.comments;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var6;
                var1.style = var7;
                var1.onPress = var4;
                var10 = _closure1_slot16;
                var9 = _closure1_slot5;
                var7 = {};
                var11 = var14.commentCount;
                var7.style = var11;
                var13 = _closure1_slot16;
                var11 = 33;
                var11 = var15[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.ChatIcon;
                var11 = {};
                var15 = var14.commentsIcon;
                var11.style = var15;
                var11 = var13.bind(var3)(var12, var11);
                var7.children = var11;
                var7 = var10.bind(var3)(var9, var7);
                var1.children = var7;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 333:
                var2 = var0.messageCount;
                var1 = 9;
                var1 = var2 > var1;
                var11 = '9+';
                if (var1) {
                    _fun104745_ip = 361;
                    continue _fun104745
                }
            case 355:
                var11 = var0.messageCount;
            case 361:
                var2 = _closure1_slot16;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 20;
                var0 = var12[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var7 = var14.comments;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.onPress = var4;
                var6 = _closure1_slot17;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var14.commentCount;
                var4.style = var7;
                var13 = _closure1_slot16;
                var7 = 33;
                var7 = var12[var7];
                var7 = var9.bind(var3)(var7);
                var10 = var7.ChatIcon;
                var7 = {};
                var14 = var14.commentsIcon;
                var7.style = var14;
                var10 = var13.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var10 = _closure1_slot16;
                var8 = 23;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-strong'
                };
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 558:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.View;
    var _closure1_slot5 = var9;
    var9 = var5.Image;
    var _closure1_slot6 = var9;
    var5 = var5.ScrollView;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.MessageFlags;
    var _closure1_slot12 = var8;
    var8 = var5.Permissions;
    var _closure1_slot13 = var8;
    var5 = var5.HorizontalGradient;
    var _closure1_slot14 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.EmojiIntention;
    var _closure1_slot15 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.jsx;
    var _closure1_slot16 = var8;
    var8 = var5.jsxs;
    var _closure1_slot17 = var8;
    var5 = var5.Fragment;
    var _closure1_slot18 = var5;
    var5 = 20;
    var _closure1_slot19 = var5;
    var5 = 12;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = function() { // Environment: var4
        _fun104748: for (var _fun104748_ip = 0;;) switch (_fun104748_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'flexWrap': 'wrap',
                    'justifyContent': 'space-between'
                };
                var0.container = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'flexWrap': 'wrap',
                    'gap': 6
                };
                var0.replyForwardButtonContainer = var1;
                var1 = {
                    'position': 'relative',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'flexWrap': 'wrap',
                    'gap': 6
                };
                var0.emojisRowContainer = var1;
                var1 = {
                    'position': 'relative',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'flexWrap': 'wrap',
                    'gap': 6
                };
                var0.emojisContainer = var1;
                var1 = {
                    'flexDirection': 'row',
                    'backgroundColor': null,
                    'borderRadius': null,
                    'flexShrink': 3,
                    'paddingHorizontal': 8,
                    'gap': 6
                };
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 13;
                var2 = var7[var5];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
                var1.backgroundColor = var2;
                var2 = var7[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.radii;
                var2 = var2.sm;
                var1.borderRadius = var2;
                var0.emojiContainer = var1;
                var1 = {};
                var2 = 5;
                var1.paddingVertical = var2;
                var0.innerEmojiContainer = var1;
                var1 = {};
                var2 = 4;
                var1.paddingVertical = var2;
                var0.selectedInnerEmojiContainer = var1;
                var1 = {
                    'minHeight': 30,
                    'alignItems': 'center'
                };
                var0.addEmojiContainer = var1;
                var1 = {};
                var2 = 0.4;
                var1.opacity = var2;
                var0.disabled = var1;
                var1 = {};
                var2 = _closure1_slot19;
                var1.width = var2;
                var2 = _closure1_slot19;
                var1.height = var2;
                var0.defaultEmoji = var1;
                var1 = {
                    'lineHeight': null,
                    'fontSize': 16,
                    'textAlign': 'center',
                    'paddingTop': 2
                };
                var3 = _closure1_slot0;
                var2 = 14;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isAndroid;
                var3 = var2.bind(var3)();
                var2 = 16;
                if (var3) {
                    _fun104748_ip = 306;
                    continue _fun104748
                }
            case 302:
                var2 = _closure1_slot19;
            case 306:
                var1.lineHeight = var2;
                var0.emojiText = var1;
                var1 = {};
                var2 = 3.5;
                var1.paddingBottom = var2;
                var0.selectedInnerTextContainer = var1;
                var1 = {
                    'alignSelf': 'flex-end',
                    'paddingBottom': 4.5
                };
                var0.innerTextContainer = var1;
                var1 = {};
                var2 = 'contain';
                var1.resizeMode = var2;
                var2 = _closure1_slot19;
                var1.width = var2;
                var2 = _closure1_slot19;
                var1.height = var2;
                var0.emojiImage = var1;
                var1 = {
                    'borderColor': null,
                    'borderWidth': 1,
                    'paddingHorizontal': 7
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.unsafe_rawColors;
                var7 = var7.BRAND_560;
                var1.borderColor = var7;
                var7 = _closure1_slot0;
                var6 = 15;
                var6 = var2[var6];
                var9 = var7.bind(var4)(var6);
                var8 = var9.hexWithOpacity;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.unsafe_rawColors;
                var7 = var6.BRAND_500;
                var6 = 0.3;
                var6 = var8.bind(var9)(var7, var6);
                var1.backgroundColor = var6;
                var0.selected = var1;
                var1 = {
                    'position': 'absolute',
                    'right': 0,
                    'top': 0,
                    'bottom': 0,
                    'width': 48
                };
                var0.gradient = var1;
                var1 = {
                    'position': 'absolute',
                    'right': 0
                };
                var0.overflowChevron = var1;
                var1 = {
                    'paddingVertical': 6,
                    'paddingHorizontal': 8,
                    'backgroundColor': null,
                    'borderRadius': null,
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 8
                };
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
                var1.backgroundColor = var6;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.radii;
                var6 = var6.sm;
                var1.borderRadius = var6;
                var0.comments = var1;
                var1 = {
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 4,
                    'justifySelf': 'end'
                };
                var0.commentCount = var1;
                var1 = {
                    'width': 20,
                    'height': 20
                };
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.INTERACTIVE_TEXT_DEFAULT;
                var1.tintColor = var2;
                var0.commentsIcon = var1;
                return var0;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot20 = var5;
    var5 = 44;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMICardInteractionRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0) { // Original name: ICYMICardInteractionRow, environment: var4
        _fun104749: for (var _fun104749_ip = 0;;) switch (_fun104749_ip) {
            case 0:
                var1 = arg0;
                var37 = var1.message;
                var _closure2_slot0 = var37;
                var29 = var1.channel;
                var _closure2_slot1 = var29;
                var5 = var1.guild;
                var23 = var1.hideAdditionalButtons;
                var4 = undefined;
                if (!(var23 === var4)) {
                    _fun104749_ip = 42;
                    continue _fun104749
                }
            case 40:
                var23 = false;
            case 42:
                var _closure2_slot2 = var23;
                var0 = var1.isKeyMessage;
                if (!(var0 === var4)) {
                    _fun104749_ip = 60;
                    continue _fun104749
                }
            case 58:
                var0 = false;
            case 60:
                var _closure2_slot3 = var0;
                var3 = var1.inForum;
                if (!(var3 === var4)) {
                    _fun104749_ip = 76;
                    continue _fun104749
                }
            case 74:
                var3 = false;
            case 76:
                var7 = var1.backgroundVariant;
                if (!(var7 === var4)) {
                    _fun104749_ip = 90;
                    continue _fun104749
                }
            case 86:
                var7 = 'primary';
            case 90:
                var _closure2_slot4 = var7;
                var9 = var1.id;
                var _closure2_slot5 = var9;
                var2 = var1.itemType;
                var _closure2_slot6 = var2;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var1 = _closure1_slot20;
                var21 = var1.bind(var4)();
                var1 = _closure1_slot22;
                var38 = var1.bind(var4)(var5, var37, var3);
                _closure2_slot7 = var38;
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var1 = var37.reactions;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var15
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot0;
                    var3 = var2.reactions;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun104751: for (var _fun104751_ip = 0;;) switch (_fun104751_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3.me_vote;
                                var0 = null;
                                if (!(var0 == var1)) {
                                    _fun104751_ip = 190;
                                    continue _fun104751
                                }
                            case 18:
                                var0 = var3.burst_count;
                                var1 = 0;
                                if (!(var0 > var1)) {
                                    _fun104751_ip = 105;
                                    continue _fun104751
                                }
                            case 30:
                                var4 = _closure3_slot0;
                                var2 = var4.push;
                                var0 = {};
                                var9 = var0;
                                var8 = var3;
                                var5 = copyDataProperties(var9, var8);
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var5 = 34;
                                var6 = var6[var5];
                                var5 = undefined;
                                var5 = var7.bind(var5)(var6);
                                var5 = var5.ReactionTypes;
                                var6 = var5.BURST;
                                var5 = 'type';
                                var0[var5] = var6;
                                var0 = var2.bind(var4)(var0);
                            case 105:
                                var0 = var3.count;
                                if (!(var0 > var1)) {
                                    _fun104751_ip = 190;
                                    continue _fun104751
                                }
                            case 115:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = {};
                                var9 = var0;
                                var8 = var3;
                                var3 = copyDataProperties(var9, var8);
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 34;
                                var4 = var4[var3];
                                var3 = undefined;
                                var3 = var5.bind(var3)(var4);
                                var3 = var3.ReactionTypes;
                                var4 = var3.NORMAL;
                                var3 = 'type';
                                var0[var3] = var4;
                                var0 = var1.bind(var2)(var0);
                            case 190:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var25 = var5.bind(var6)(var1, var3);
                _closure2_slot8 = var25;
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var29;
                var1 = function() { // Environment: var15
                    _fun104752: for (var _fun104752_ip = 0;;) switch (_fun104752_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun104752_ip = 50;
                                continue _fun104752
                            }
                        case 16:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 35;
                            var2 = var3[var2];
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 50:
                            return var0;
                    }
                };
                var22 = var5.bind(var6)(var1, var3);
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 36;
                var5 = var3[var5];
                var6 = var1.bind(var4)(var5);
                var5 = var6.useCanForwardMessage;
                var41 = var5.bind(var6)(var37);
                _closure2_slot9 = var41;
                var5 = 16;
                var5 = var3[var5];
                var10 = var1.bind(var4)(var5);
                var8 = var10.useStateFromStores;
                var5 = _closure1_slot11;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var15
                    var3 = _closure1_slot11;
                    var2 = var3.can;
                    var0 = _closure1_slot13;
                    var1 = var0.SEND_MESSAGES;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var40 = var8.bind(var10)(var6, var5);
                _closure2_slot10 = var40;
                var10 = _closure1_slot4;
                var8 = var10.useMemo;
                var6 = new Array(5);
                var6[0] = var23;
                var5 = var38.messageCount;
                var6[1] = var5;
                var5 = var25.length;
                var6[2] = var5;
                var6[3] = var40;
                var6[4] = var41;
                var5 = function() { // Environment: var15
                    _fun104754: for (var _fun104754_ip = 0;;) switch (_fun104754_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var2 = 4;
                            if (!var0) {
                                _fun104754_ip = 16;
                                continue _fun104754
                            }
                        case 13:
                            var2 = 6;
                        case 16:
                            var0 = _closure2_slot7;
                            var0 = var0.messageCount;
                            var3 = 0;
                            var1 = var2;
                            if (!(var0 > var3)) {
                                _fun104754_ip = 42;
                                continue _fun104754
                            }
                        case 35:
                            var0 = 1;
                            var1 = var2 - var0;
                        case 42:
                            var0 = _closure2_slot8;
                            var0 = var0.length;
                            var0 = var0 > var1;
                            var2 = 0;
                            if (!var0) {
                                _fun104754_ip = 73;
                                continue _fun104754
                            }
                        case 60:
                            var0 = _closure2_slot8;
                            var0 = var0.length;
                            var2 = var0 - var1;
                        case 73:
                            var0 = _closure2_slot7;
                            var0 = var0.messageCount;
                            var1 = var0 > var3;
                            var0 = {};
                            var2 = var2 > var3;
                            var0.hasOverflow = var2;
                            var2 = _closure2_slot2;
                            var2 = !var2;
                            if (!var2) {
                                _fun104754_ip = 122;
                                continue _fun104754
                            }
                        case 108:
                            var3 = _closure2_slot10;
                            if (var3) {
                                _fun104754_ip = 119;
                                continue _fun104754
                            }
                        case 115:
                            var3 = _closure2_slot9;
                        case 119:
                            var2 = var3;
                        case 122:
                            var0.showReplyForwardButtons = var2;
                            var0.showThreadAsComments = var1;
                            return var0;
                    }
                };
                var5 = var8.bind(var10)(var5, var6);
                var16 = var5.hasOverflow;
                var33 = var5.showReplyForwardButtons;
                var34 = var5.showThreadAsComments;
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var2;
                var2 = function(arg0, arg1) { // Environment: var15
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 37;
                    var4 = var3[var1];
                    var0 = undefined;
                    var8 = var2.bind(var0)(var4);
                    var7 = var8.itemInteracted;
                    var5 = _closure2_slot5;
                    var4 = _closure2_slot6;
                    var6 = arg0;
                    var6 = var7.bind(var8)(var5, var4, var6);
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.feedItemActioned;
                    var1 = {};
                    var1.itemId = var5;
                    var1.itemType = var4;
                    var4 = arg1;
                    var1.actionParameters = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var27 = var6.bind(var8)(var2, var5);
                _closure2_slot11 = var27;
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var2 = var29.id;
                var5 = new Array(3);
                var5[0] = var2;
                var2 = var37.id;
                var5[1] = var2;
                var5[2] = var27;
                var2 = function(arg0, arg1) { // Environment: var15
                    var4 = _closure2_slot11;
                    var0 = undefined;
                    var3 = 'press_reaction';
                    var2 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'add_new_reaction_button',
                        'actionIntentType': 'open',
                        'actionDestinationType': null
                    };
                    var2 = var4.bind(var0)(var3, var2);
                    var5 = _closure1_slot21;
                    var2 = _closure2_slot1;
                    var9 = var2.id;
                    var1 = _closure2_slot0;
                    var8 = var1.id;
                    var7 = arg0;
                    var6 = arg1;
                    var10 = undefined;
                    var1 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var28 = var6.bind(var8)(var2, var5);
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var5 = new Array(2);
                var5[0] = var37;
                var5[1] = var27;
                var2 = function() { // Environment: var15
                    var3 = _closure2_slot11;
                    var0 = undefined;
                    var2 = 'press_forward';
                    var1 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'forward_button',
                        'actionIntentType': 'share',
                        'actionDestinationType': 'channel'
                    };
                    var1 = var3.bind(var0)(var2, var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 38;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openForwardModal;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.message = var4;
                    var4 = 'icymi-tab';
                    var1.source = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var42 = var6.bind(var8)(var2, var5);
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var5 = new Array(3);
                var5[0] = var29;
                var5[1] = var37;
                var5[2] = var27;
                var2 = function() { // Environment: var15
                    var4 = _closure2_slot11;
                    var0 = undefined;
                    var3 = 'press_reply';
                    var2 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'reply_button',
                        'actionIntentType': 'reply',
                        'actionDestinationType': 'channel'
                    };
                    var2 = var4.bind(var0)(var3, var2);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 32;
                    var4 = var3[var4];
                    var9 = var2.bind(var0)(var4);
                    var8 = var9.navigateToPost;
                    var5 = _closure2_slot1;
                    var7 = var5.id;
                    var6 = var5.guild_id;
                    var4 = _closure2_slot0;
                    var1 = var4.id;
                    var1 = var8.bind(var9)(var7, var6, var1);
                    var1 = 39;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.createPendingReply;
                    var1 = {};
                    var1.channel = var5;
                    var1.message = var4;
                    var4 = true;
                    var1.shouldMention = var4;
                    var1.showMentionToggle = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var43 = var6.bind(var8)(var2, var5);
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var0;
                var0 = function() { // Environment: var15
                    _fun104759: for (var _fun104759_ip = 0;;) switch (_fun104759_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun104759_ip = 159;
                                continue _fun104759
                            }
                        case 13:
                            var1 = _closure2_slot4;
                            var0 = 'primary';
                            if (!(var0 !== var1)) {
                                _fun104759_ip = 121;
                                continue _fun104759
                            }
                        case 25:
                            var0 = 'secondary';
                            if (!(var0 !== var1)) {
                                _fun104759_ip = 83;
                                continue _fun104759
                            }
                        case 33:
                            var0 = 'base';
                            if (!(var0 !== var1)) {
                                _fun104759_ip = 45;
                                continue _fun104759
                            }
                        case 41:
                            var0 = undefined;
                            return var0;
                        case 45:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.colors;
                            var0 = var0.BACKGROUND_BASE_LOW;
                            return var0;
                        case 83:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.colors;
                            var0 = var0.CARD_SECONDARY_BG;
                            return var0;
                        case 121:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.colors;
                            var0 = var0.CARD_BACKGROUND_DEFAULT;
                            return var0;
                        case 159:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.colors;
                            var0 = var0.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var0, var2);
                var0 = 40;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useToken;
                var24 = var0.bind(var1)(var2);
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var30 = true;
                var2 = var0.bind(var1)(var30);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var4)(var2, var0);
                var26 = 0;
                var14 = var1[var26];
                var0 = 1;
                var0 = var1[var0];
                _closure2_slot12 = var0;
                var3 = _closure1_slot4;
                var2 = var3.useCallback;
                var1 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var1 = var0.contentOffset;
                    var3 = var1.x;
                    var1 = var0.contentSize;
                    var1 = var1.width;
                    var0 = var0.layoutMeasurement;
                    var0 = var0.width;
                    var2 = _closure2_slot12;
                    var0 = var3 + var0;
                    var1 = var0 >= var1;
                    var0 = undefined;
                    var1 = !var1;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var20 = var2.bind(var3)(var1, var0);
                var3 = _closure1_slot4;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var27;
                var0 = function() { // Environment: var15
                    var3 = _closure2_slot11;
                    var0 = undefined;
                    var2 = 'scroll_reaction_row';
                    var1 = {
                        'actionGestureType': 'swipe',
                        'actionTargetElement': 'reaction_row_container',
                        'actionIntentType': 'scroll',
                        'actionDestinationType': null
                    };
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var19 = var2.bind(var3)(var0, var1);
                var0 = var25.length;
                if (!(var26 === var0)) {
                    _fun104749_ip = 723;
                    continue _fun104749
                }
            case 715:
                var0 = null;
                if (var23) {
                    _fun104749_ip = 1425;
                    continue _fun104749
                }
            case 723:
                var3 = _closure1_slot16;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var21.container;
                var1.style = var5;
                var7 = _closure1_slot16;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var21.emojisRowContainer;
                var5.style = var8;
                var8 = var25.length;
                if (!(!(var8 > var26))) {
                    _fun104749_ip = 779;
                    continue _fun104749
                }
            case 771:
                var8 = null;
                if (!var22) {
                    _fun104749_ip = 1405;
                    continue _fun104749
                }
            case 779:
                var11 = _closure1_slot17;
                var10 = _closure1_slot5;
                var9 = {};
                var13 = var21.emojisContainer;
                var12 = new Array(1);
                var12[0] = var13;
                var9.style = var12;
                var17 = _closure1_slot17;
                var13 = _closure1_slot7;
                var12 = {};
                var12.horizontal = var30;
                var12.scrollEnabled = var16;
                var30 = {};
                var31 = 6;
                var30.gap = var31;
                var12.contentContainerStyle = var30;
                var12.onScroll = var20;
                var12.onScrollEndDrag = var19;
                var19 = false;
                var12.showsHorizontalScrollIndicator = var19;
                var20 = !var23;
                if (!var20) {
                    _fun104749_ip = 876;
                    continue _fun104749
                }
            case 864:
                var19 = var33;
                if (var33) {
                    _fun104749_ip = 873;
                    continue _fun104749
                }
            case 870:
                var19 = var34;
            case 873:
                var20 = var19;
            case 876:
                if (!var20) {
                    _fun104749_ip = 1047;
                    continue _fun104749
                }
            case 882:
                var31 = _closure1_slot17;
                var30 = _closure1_slot5;
                var19 = {};
                var32 = var21.replyForwardButtonContainer;
                var19.style = var32;
                if (!var34) {
                    _fun104749_ip = 936;
                    continue _fun104749
                }
            case 905:
                var36 = _closure1_slot16;
                var35 = _closure1_slot27;
                var32 = {};
                var32.threadData = var38;
                var32.parentMessage = var37;
                var32.handleItemInteracted = var27;
                var34 = var36.bind(var4)(var35, var32);
            case 936:
                var32 = new Array(2);
                var32[0] = var34;
                if (!var33) {
                    _fun104749_ip = 1033;
                    continue _fun104749
                }
            case 947:
                var36 = _closure1_slot17;
                var35 = _closure1_slot18;
                var34 = {};
                var39 = _closure1_slot16;
                var38 = _closure1_slot26;
                var37 = {};
                var37.onPress = var43;
                var40 = !var40;
                var37.disabled = var40;
                var38 = var39.bind(var4)(var38, var37);
                var37 = new Array(2);
                var37[0] = var38;
                var40 = _closure1_slot16;
                var39 = _closure1_slot25;
                var38 = {};
                var38.onPress = var42;
                var41 = !var41;
                var38.disabled = var41;
                var38 = var40.bind(var4)(var39, var38);
                var37[1] = var38;
                var34.children = var37;
                var33 = var36.bind(var4)(var35, var34);
            case 1033:
                var32[1] = var33;
                var19.children = var32;
                var20 = var31.bind(var4)(var30, var19);
            case 1047:
                var19 = new Array(3);
                var19[0] = var20;
                var20 = var25.map;
                var15 = function(arg0, arg1) { // Environment: var15
                    _fun104762: for (var _fun104762_ip = 0;;) switch (_fun104762_ip) {
                        case 0:
                            var8 = arg0;
                            var4 = _closure1_slot16;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var5 = _closure1_slot24;
                            var0 = {};
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0.messageId = var1;
                            var1 = _closure2_slot1;
                            var0.channel = var1;
                            var0.reaction = var8;
                            var11 = var8.type;
                            var12 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var10 = 34;
                            var9 = var1[var10];
                            var1 = undefined;
                            var9 = var12.bind(var1)(var9);
                            var9 = var9.ReactionTypes;
                            var9 = var9.BURST;
                            if (!(var11 !== var9)) {
                                _fun104762_ip = 102;
                                continue _fun104762
                            }
                        case 94:
                            var9 = var8.count;
                            _fun104762_ip = 108;
                            continue _fun104762;
                        case 102:
                            var9 = var8.burst_count;
                        case 108:
                            var0.count = var9;
                            var8 = var8.type;
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var10];
                            var7 = var9.bind(var1)(var7);
                            var7 = var7.ReactionTypes;
                            var7 = var7.BURST;
                            var7 = var8 === var7;
                            var0.isBurstReaction = var7;
                            var6 = _closure2_slot11;
                            var0.handleItemInteracted = var6;
                            var0 = var4.bind(var1)(var5, var0);
                            var2.children = var0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = 'reaction-';
                            var0 = arg1;
                            var0 = var6.bind(var5)(var0);
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var15 = var20.bind(var25)(var15);
                var19[1] = var15;
                var20 = null;
                if (var23) {
                    _fun104749_ip = 1116;
                    continue _fun104749
                }
            case 1081:
                var20 = null;
                if (!var22) {
                    _fun104749_ip = 1116;
                    continue _fun104749
                }
            case 1086:
                var25 = _closure1_slot16;
                var23 = _closure1_slot23;
                var22 = {};
                var22.channel = var29;
                var22.onPressEmoji = var28;
                var22.handleItemInteracted = var27;
                var20 = var25.bind(var4)(var23, var22);
            case 1116:
                var19[2] = var20;
                var12.children = var19;
                var13 = var17.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var13 = null;
                if (!var16) {
                    _fun104749_ip = 1391;
                    continue _fun104749
                }
            case 1146:
                var13 = null;
                if (!var14) {
                    _fun104749_ip = 1391;
                    continue _fun104749
                }
            case 1154:
                var16 = _closure1_slot17;
                var15 = _closure1_slot18;
                var14 = {};
                var20 = _closure1_slot16;
                var25 = _closure1_slot1;
                var22 = _closure1_slot2;
                var17 = 41;
                var17 = var22[var17];
                var19 = var25.bind(var4)(var17);
                var17 = {};
                var23 = var21.gradient;
                var17.style = var23;
                var23 = _closure1_slot14;
                var27 = var23.START;
                var17.start = var27;
                var23 = var23.END;
                var17.end = var23;
                var23 = 42;
                var23 = var22[var23];
                var23 = var25.bind(var4)(var23);
                var25 = var23.bind(var4)(var24);
                var23 = var25.alpha;
                var25 = var23.bind(var25)(var26);
                var23 = var25.hex;
                var25 = var23.bind(var25)();
                var23 = new Array(3);
                var23[0] = var25;
                var23[1] = var24;
                var23[2] = var24;
                var17.colors = var23;
                var23 = [0, 0.8, 1];
                var17.locations = var23;
                var19 = var20.bind(var4)(var19, var17);
                var17 = new Array(2);
                var17[0] = var19;
                var20 = _closure1_slot16;
                var19 = _closure1_slot0;
                var18 = 43;
                var18 = var22[var18];
                var18 = var19.bind(var4)(var18);
                var19 = var18.ChevronSmallRightIcon;
                var18 = {
                    'style': null,
                    'size': 'xs',
                    'color': 'icon-muted'
                };
                var22 = var21.overflowChevron;
                var21 = new Array(1);
                var21[0] = var22;
                var18.style = var21;
                var18 = var20.bind(var4)(var19, var18);
                var17[1] = var18;
                var14.children = var17;
                var13 = var16.bind(var4)(var15, var14);
            case 1391:
                var12[1] = var13;
                var9.children = var12;
                var8 = var11.bind(var4)(var10, var9);
            case 1405:
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1425:
                return var0;
        }
    };
    var2.default = var4;
    var2.onAddReaction = var3;
    var2.useThread = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 6434, 1372, 4198, 3050, 660, 1616, 33, 3061, 6514, 1297, 671, 478, 3199, 566, 3905, 6487, 6952, 4864, 1234, 7639, 3901, 9181, 668, 1417, 9175, 7757, 9721, 8845, 9842, 13596, 4800, 6515, 6964, 9136, 8832, 8838, 9209, 3110, 4057, 669, 7703, 2]);