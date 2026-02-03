// modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun89924: for (var _fun89924_ip = 0;;) switch (_fun89924_ip) {
        case 0:
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
            var7 = var3.bind(var0)(var6);
            var _closure1_slot3 = var7;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var14 = 2;
            var3 = var5[var14];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var13 = var3.ACTION_SHEET_BACKGROUND_COLOR;
            var3 = var3.ACTION_SHEET_MAX_WIDTH;
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
            var6 = var3.Fragment;
            var _closure1_slot10 = var6;
            var3 = var3.jsxs;
            var _closure1_slot11 = var3;
            var3 = 6;
            var3 = var5[var3];
            var9 = var4.bind(var0)(var3);
            var8 = var9.createStyles;
            var6 = {};
            var16 = 24;
            var3 = {
                'width': 24,
                'height': 24
            };
            var6.emoji = var3;
            var3 = {
                'width': 24,
                'height': 24
            };
            var6.customEmoji = var3;
            var10 = {};
            var11 = 7;
            var3 = var5[var11];
            var15 = var4.bind(var0)(var3);
            var3 = var15.isIOS;
            var17 = var3.bind(var15)();
            var3 = 20;
            var15 = var3;
            if (!var17) {
                _fun89924_ip = 311;
                continue _fun89924
            }
        case 308:
            var15 = var16;
        case 311:
            var10.fontSize = var15;
            var11 = var5[var11];
            var15 = var4.bind(var0)(var11);
            var11 = var15.isIOS;
            var15 = var11.bind(var15)();
            var11 = undefined;
            if (!var15) {
                _fun89924_ip = 343;
                continue _fun89924
            }
        case 340:
            var11 = 28;
        case 343:
            var10.lineHeight = var11;
            var15 = 'center';
            var10.textAlign = var15;
            var11 = 8;
            var16 = var5[var11];
            var16 = var12.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.INTERACTIVE_TEXT_DEFAULT;
            var10.color = var16;
            var6.textEmoji = var10;
            var10 = {};
            var10.textAlign = var15;
            var6.alignCenter = var10;
            var10 = {};
            var15 = 'row';
            var10.flexDirection = var15;
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_8;
            var10.gap = var15;
            var6.emojiRow = var10;
            var10 = {
                'borderRadius': null,
                'borderWidth': 2,
                'borderColor': 'transparent'
            };
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.radii;
            var15 = var15.md;
            var10.borderRadius = var15;
            var6.emojiPressable = var10;
            var10 = {};
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.BACKGROUND_BRAND;
            var10.borderColor = var15;
            var6.selectedEmojiPressable = var10;
            var10 = {};
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.radii;
            var15 = var15.sm;
            var10.borderRadius = var15;
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_8;
            var10.padding = var15;
            var10.margin = var14;
            var6.emojiWrapper = var10;
            var10 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_MOD_STRONG;
            var10.backgroundColor = var14;
            var6.selectedEmojiWrapper = var10;
            var10 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.REDESIGN_BUTTON_TERTIARY_TEXT;
            var10.color = var14;
            var6.chooseEmojiButton = var10;
            var10 = {
                'backgroundColor': null,
                'height': 24,
                'width': 24,
                'position': 'absolute',
                'right': 4294967288,
                'bottom': 4294967288,
                'borderRadius': null,
                'alignItems': 'center',
                'justifyContent': 'center',
                'borderColor': null,
                'borderWidth': 2,
                'boxSizing': 'content-box'
            };
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_BRAND;
            var10.backgroundColor = var14;
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.round;
            var10.borderRadius = var14;
            var10.borderColor = var13;
            var6.customReactionOverlay = var10;
            var10 = {
                'height': 12,
                'width': 12
            };
            var11 = var5[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.CONTROL_PRIMARY_TEXT_DEFAULT;
            var10.color = var11;
            var6.selectedCustomReactionIcon = var10;
            var6 = var8.bind(var9)(var6);
            var _closure1_slot12 = var6;
            var8 = var7.memo;
            var6 = function(arg0) { // Environment: var1
                _fun89925: for (var _fun89925_ip = 0;;) switch (_fun89925_ip) {
                    case 0:
                        var0 = arg0;
                        var16 = var0.emoji;
                        var _closure2_slot0 = var16;
                        var1 = var0.onPress;
                        var _closure2_slot1 = var1;
                        var9 = var0.selected;
                        var0 = _closure1_slot12;
                        var3 = undefined;
                        var10 = var0.bind(var3)();
                        var1 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 9;
                        var0 = var5[var0];
                        var7 = var1.bind(var3)(var0);
                        var6 = var7.useStateFromStores;
                        var0 = _closure1_slot5;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var0 = function() { // Environment: var4
                            var0 = _closure1_slot5;
                            var0 = var0.useReducedMotion;
                            return var0;
                        };
                        var15 = var6.bind(var7)(var2, var0);
                        var2 = _closure1_slot9;
                        var0 = 10;
                        var0 = var5[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.PressableOpacity;
                        var0 = {};
                        var5 = 'button';
                        var0.accessibilityRole = var5;
                        var11 = null;
                        var5 = var11 == var16;
                        var0.disabled = var5;
                        var4 = function() {
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.onPress = var4;
                        var5 = var10.emojiPressable;
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = undefined;
                        if (!var9) {
                            _fun89925_ip = 171;
                            continue _fun89925
                        }
                    case 165:
                        var5 = var10.selectedEmojiPressable;
                    case 171:
                        var4[1] = var5;
                        var0.style = var4;
                        var6 = _closure1_slot9;
                        var5 = _closure1_slot4;
                        var4 = {};
                        var8 = var10.emojiWrapper;
                        var7 = new Array(2);
                        var7[0] = var8;
                        var8 = undefined;
                        if (!var9) {
                            _fun89925_ip = 214;
                            continue _fun89925
                        }
                    case 208:
                        var8 = var10.selectedEmojiWrapper;
                    case 214:
                        var7[1] = var8;
                        var4.style = var7;
                        var9 = _closure1_slot9;
                        var8 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var7 = 11;
                        var7 = var12[var7];
                        var8 = var8.bind(var3)(var7);
                        var7 = {};
                        var12 = var10.emoji;
                        var7.style = var12;
                        var12 = var10.customEmoji;
                        var7.fastImageStyle = var12;
                        var10 = var10.textEmoji;
                        var7.textEmojiStyle = var10;
                        var10 = var16.id;
                        var12 = var11 == var10;
                        var10 = '';
                        if (!var12) {
                            _fun89925_ip = 301;
                            continue _fun89925
                        }
                    case 296:
                        var10 = var16.surrogates;
                    case 301:
                        var7.name = var10;
                        var10 = var16.id;
                        if (!(var11 == var10)) {
                            _fun89925_ip = 321;
                            continue _fun89925
                        }
                    case 314:
                        var10 = var16.url;
                        _fun89925_ip = 388;
                        continue _fun89925;
                    case 321:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var11 = 12;
                        var11 = var13[var11];
                        var13 = var12.bind(var3)(var11);
                        var12 = var13.getEmojiURL;
                        var11 = {};
                        var17 = var16.id;
                        var11.id = var17;
                        var15 = !var15;
                        if (!var15) {
                            _fun89925_ip = 370;
                            continue _fun89925
                        }
                    case 364:
                        var15 = var16.animated;
                    case 370:
                        var11.animated = var15;
                        var14 = _closure1_slot7;
                        var11.size = var14;
                        var10 = var12.bind(var13)(var11);
                    case 388:
                        var7.src = var10;
                        var7 = var9.bind(var3)(var8, var7);
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var6 = var8.bind(var7)(var6);
            var _closure1_slot13 = var6;
            var6 = var7.memo;
            var1 = function(arg0) { // Environment: var1
                _fun89928: for (var _fun89928_ip = 0;;) switch (_fun89928_ip) {
                    case 0:
                        var1 = arg0;
                        var25 = var1.selectedEmoji;
                        var _closure2_slot0 = var25;
                        var0 = var1.onPressEmoji;
                        var _closure2_slot1 = var0;
                        var5 = var1.style;
                        var1 = _closure1_slot12;
                        var3 = undefined;
                        var21 = var1.bind(var3)();
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 13;
                        var1 = var9[var1];
                        var2 = var6.bind(var3)(var1);
                        var1 = var2.useFrequentlyUsedReactionEmojis;
                        var7 = var1.bind(var2)(var3);
                        var2 = _closure1_slot1;
                        var1 = 14;
                        var1 = var9[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var3)();
                        var11 = var1.width;
                        var1 = global;
                        var10 = var1.Math;
                        var4 = var10.min;
                        var2 = _closure1_slot6;
                        var10 = var4.bind(var10)(var11, var2);
                        var4 = var1.Math;
                        var2 = var4.floor;
                        var1 = 60;
                        var1 = var10 / var1;
                        var2 = var2.bind(var4)(var1);
                        var1 = 9;
                        var1 = var9[var1];
                        var11 = var6.bind(var3)(var1);
                        var10 = var11.useStateFromStores;
                        var1 = _closure1_slot5;
                        var4 = new Array(1);
                        var4[0] = var1;
                        var1 = function() { // Environment: var8
                            var0 = _closure1_slot5;
                            var0 = var0.useReducedMotion;
                            return var0;
                        };
                        var24 = var10.bind(var11)(var4, var1);
                        var4 = var7.filter;
                        var1 = function(arg0) { // Environment: var8
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 15;
                            var0 = var2[var0];
                            var4 = undefined;
                            var2 = var1.bind(var4)(var0);
                            var1 = var2.isEmojiFilteredOrLocked;
                            var0 = {};
                            var5 = arg0;
                            var0.emoji = var5;
                            var0.channel = var4;
                            var3 = _closure1_slot8;
                            var3 = var3.DEFAULT_REACT_EMOJI;
                            var0.intention = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var7 = var4.bind(var7)(var1);
                        var4 = var7.slice;
                        var1 = 1;
                        var2 = var2 - var1;
                        var1 = 0;
                        var7 = var4.bind(var7)(var1, var2);
                        var _closure2_slot2 = var7;
                        var4 = _closure1_slot3;
                        var10 = var4.useMemo;
                        var2 = new Array(2);
                        var2[0] = var7;
                        var2[1] = var25;
                        var1 = function() { // Environment: var8
                            var2 = _closure2_slot2;
                            var1 = var2.findIndex;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 16;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.areEmojisEqual;
                                var1 = _closure2_slot0;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var10 = var10.bind(var4)(var1, var2);
                        var _closure2_slot3 = var10;
                        var11 = var4.useCallback;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var1 = function(arg0) { // Environment: var8
                            var3 = _closure2_slot1;
                            var0 = undefined;
                            var2 = arg0;
                            var1 = true;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var1 = var11.bind(var4)(var1, var2);
                        var _closure2_slot4 = var1;
                        var2 = var4.useCallback;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function(arg0) { // Environment: var8
                            var3 = _closure2_slot1;
                            var0 = undefined;
                            var2 = arg0;
                            var1 = false;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var0 = var2.bind(var4)(var0, var1);
                        var _closure2_slot5 = var0;
                        var2 = _closure1_slot11;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = var21.emojiRow;
                        var4[1] = var5;
                        var0.style = var4;
                        var5 = var7.map;
                        var4 = function(arg0, arg1) { // Environment: var8
                            _fun89935: for (var _fun89935_ip = 0;;) switch (_fun89935_ip) {
                                case 0:
                                    var1 = arg0;
                                    var5 = arg1;
                                    var0 = null;
                                    var2 = var0 != var1;
                                    if (!var2) {
                                        _fun89935_ip = 66;
                                        continue _fun89935
                                    }
                                case 15:
                                    var4 = _closure1_slot9;
                                    var3 = _closure1_slot13;
                                    var2 = {};
                                    var2.emoji = var1;
                                    var6 = _closure2_slot3;
                                    var6 = var5 === var6;
                                    var2.selected = var6;
                                    var1 = _closure2_slot4;
                                    var2.onPress = var1;
                                    var1 = undefined;
                                    var0 = var4.bind(var1)(var3, var2, var5);
                                case 66:
                                    return var0;
                            }
                        };
                        var5 = var5.bind(var7)(var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var7 = _closure1_slot9;
                        var5 = 10;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var6 = var5.PressableOpacity;
                        var5 = {};
                        var9 = 'button';
                        var5.accessibilityRole = var9;
                        var8 = function() {
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 17;
                            var2 = var6[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var2);
                            var3 = var4.openEmojiPickerActionSheet;
                            var2 = {};
                            var7 = _closure2_slot5;
                            var2.onPressEmoji = var7;
                            var2.channel = var0;
                            var1 = _closure1_slot8;
                            var1 = var1.DEFAULT_REACT_EMOJI;
                            var2.pickerIntention = var1;
                            var1 = 18;
                            var1 = var6[var1];
                            var1 = var5.bind(var0)(var1);
                            var1 = var1.ReactionTypes;
                            var1 = var1.NORMAL;
                            var2.reactionType = var1;
                            var1 = true;
                            var2.startExpanded = var1;
                            var1 = 'stack';
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var5.onPress = var8;
                        var9 = var21.emojiPressable;
                        var8 = new Array(2);
                        var8[0] = var9;
                        var9 = -1;
                        var11 = var9 === var10;
                        var9 = var11;
                        if (!var11) {
                            _fun89928_ip = 463;
                            continue _fun89928
                        }
                    case 457:
                        var9 = var21.selectedEmojiPressable;
                    case 463:
                        var8[1] = var9;
                        var5.style = var8;
                        var10 = _closure1_slot9;
                        var9 = _closure1_slot4;
                        var8 = {};
                        var13 = var21.emojiWrapper;
                        var12 = new Array(2);
                        var12[0] = var13;
                        var13 = var11;
                        if (!var13) {
                            _fun89928_ip = 507;
                            continue _fun89928
                        }
                    case 501:
                        var13 = var21.selectedEmojiWrapper;
                    case 507:
                        var12[1] = var13;
                        var8.style = var12;
                        if (var11) {
                            _fun89928_ip = 576;
                            continue _fun89928
                        }
                    case 518:
                        var13 = _closure1_slot9;
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var11 = 19;
                        var11 = var14[var11];
                        var11 = var12.bind(var3)(var11);
                        var12 = var11.ReactionIcon;
                        var11 = {};
                        var14 = var21.chooseEmojiButton;
                        var14 = var14.color;
                        var11.color = var14;
                        var11 = var13.bind(var3)(var12, var11);
                        _fun89928_ip = 876;
                        continue _fun89928;
                    case 576:
                        var14 = _closure1_slot11;
                        var13 = _closure1_slot10;
                        var12 = {};
                        var17 = _closure1_slot9;
                        var16 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var15 = 11;
                        var15 = var18[var15];
                        var16 = var16.bind(var3)(var15);
                        var15 = {};
                        var18 = var21.emoji;
                        var15.style = var18;
                        var18 = var21.customEmoji;
                        var15.fastImageStyle = var18;
                        var18 = var21.textEmoji;
                        var15.textEmojiStyle = var18;
                        var18 = var25.id;
                        var20 = null;
                        var22 = var20 == var18;
                        var18 = '';
                        if (!var22) {
                            _fun89928_ip = 667;
                            continue _fun89928
                        }
                    case 662:
                        var18 = var25.surrogates;
                    case 667:
                        var15.name = var18;
                        var18 = var25.id;
                        if (!(var20 == var18)) {
                            _fun89928_ip = 687;
                            continue _fun89928
                        }
                    case 680:
                        var18 = var25.url;
                        _fun89928_ip = 754;
                        continue _fun89928;
                    case 687:
                        var22 = _closure1_slot1;
                        var23 = _closure1_slot2;
                        var20 = 12;
                        var20 = var23[var20];
                        var23 = var22.bind(var3)(var20);
                        var22 = var23.getEmojiURL;
                        var20 = {};
                        var26 = var25.id;
                        var20.id = var26;
                        var24 = !var24;
                        if (!var24) {
                            _fun89928_ip = 736;
                            continue _fun89928
                        }
                    case 730:
                        var24 = var25.animated;
                    case 736:
                        var20.animated = var24;
                        var24 = _closure1_slot7;
                        var20.size = var24;
                        var18 = var22.bind(var23)(var20);
                    case 754:
                        var15.src = var18;
                        var16 = var17.bind(var3)(var16, var15);
                        var15 = new Array(2);
                        var15[0] = var16;
                        var18 = _closure1_slot9;
                        var17 = _closure1_slot4;
                        var16 = {};
                        var20 = var21.customReactionOverlay;
                        var16.style = var20;
                        var20 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var19 = 19;
                        var19 = var22[var19];
                        var19 = var20.bind(var3)(var19);
                        var20 = var19.ReactionIcon;
                        var19 = {};
                        var22 = var21.selectedCustomReactionIcon;
                        var22 = var22.color;
                        var19.color = var22;
                        var21 = var21.selectedCustomReactionIcon;
                        var19.style = var21;
                        var19 = var18.bind(var3)(var20, var19);
                        var16.children = var19;
                        var16 = var18.bind(var3)(var17, var16);
                        var15[1] = var16;
                        var12.children = var15;
                        var11 = var14.bind(var3)(var13, var12);
                    case 876:
                        var8.children = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var6.bind(var7)(var1);
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 4932, 1624, 33, 1297, 478, 671, 566, 4902, 5769, 1417, 6992, 1464, 3108, 6999, 6989, 6554, 7676, 2]);