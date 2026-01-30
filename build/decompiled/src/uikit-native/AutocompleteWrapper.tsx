// uikit-native/AutocompleteWrapper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: getAutocompletesHeight, environment: var1
        _fun90536: for (var _fun90536_ip = 0;;) switch (_fun90536_ip) {
            case 0:
                var4 = arg0;
                var0 = 0;
                if (!(var0 !== var4)) {
                    _fun90536_ip = 74;
                    continue _fun90536
                }
            case 9:
                var2 = arg2;
                if (var2) {
                    _fun90536_ip = 47;
                    continue _fun90536
                }
            case 18:
                var2 = _closure1_slot22;
                var3 = var2.EMOJIS_AND_STICKERS;
                var2 = arg1;
                if (!(var2 !== var3)) {
                    _fun90536_ip = 41;
                    continue _fun90536
                }
            case 35:
                var2 = _closure1_slot18;
                _fun90536_ip = 45;
                continue _fun90536;
            case 41:
                var2 = _closure1_slot17;
            case 45:
                _fun90536_ip = 51;
                continue _fun90536;
            case 47:
                var2 = _closure1_slot7;
            case 51:
                var2 = var4 * var2;
                var3 = 1;
                var3 = var4 - var3;
                var1 = _closure1_slot27;
                var1 = var3 * var1;
                var0 = var2 + var1;
            case 74:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.StyleSheet;
    var9 = var7.View;
    var _closure1_slot5 = var9;
    var7 = var7.FlatList;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.TABLE_ROW_HEIGHT;
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.AutoCompleteResultTypes;
    var _closure1_slot12 = var8;
    var8 = var7.WHITESPACE_RE;
    var _closure1_slot13 = var8;
    var8 = var7.AnalyticEvents;
    var _closure1_slot14 = var8;
    var7 = var7.UpsellTypes;
    var _closure1_slot15 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.BOOLEAN_CHOICES;
    var _closure1_slot16 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.AUTOCOMPLETE_EMOJI_ROW_HEIGHT;
    var _closure1_slot17 = var8;
    var7 = var7.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot18 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.MENTION_SENTINEL;
    var _closure1_slot19 = var8;
    var8 = var7.CHANNEL_SENTINEL;
    var _closure1_slot20 = var8;
    var7 = var7.EMOJI_SENTINEL;
    var _closure1_slot21 = var7;
    var8 = 12;
    var7 = var5[var8];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AutocompleteTypes;
    var _closure1_slot22 = var7;
    var7 = 13;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.EmojiInteractionPoint;
    var _closure1_slot23 = var7;
    var7 = 14;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.jsx;
    var _closure1_slot24 = var9;
    var9 = var7.Fragment;
    var _closure1_slot25 = var9;
    var7 = var7.jsxs;
    var _closure1_slot26 = var7;
    var7 = var3.hairlineWidth;
    var _closure1_slot27 = var7;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.AUTOCOMPLETE_STICKER_NODE_SIZE;
    var3 = 284;
    var3 = var3 + var9;
    var3 = var3 + var8;
    var3 = var3 + var7;
    var _closure1_slot28 = var3;
    var3 = 16;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun90537: for (var _fun90537_ip = 0;;) switch (_fun90537_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var4 = 'relative';
                var1.position = var4;
                var0.autocompletePositionRelative = var1;
                var1 = {
                    'position': null,
                    'left': 0,
                    'right': 0,
                    'bottom': 0
                };
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 17;
                var2 = var5[var2];
                var5 = undefined;
                var6 = var6.bind(var5)(var2);
                var2 = var6.isAndroid;
                var6 = var2.bind(var6)();
                var2 = 'absolute';
                if (!var6) {
                    _fun90537_ip = 76;
                    continue _fun90537
                }
            case 73:
                var2 = var4;
            case 76:
                var1.position = var2;
                var2 = 0;
                var6 = arg0;
                var4 = 0;
                if (!var6) {
                    _fun90537_ip = 95;
                    continue _fun90537
                }
            case 92:
                var4 = 1;
            case 95:
                var1.borderTopWidth = var4;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 18;
                var8 = var6[var4];
                var8 = var7.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BORDER_SUBTLE;
                var1.borderColor = var8;
                var0.autocompleteWrapper = var1;
                var1 = {};
                var8 = var6[var4];
                var8 = var7.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_SURFACE_HIGH;
                var1.backgroundColor = var8;
                var8 = 'hidden';
                var1.overflow = var8;
                var0.autocompleteContainer = var1;
                var1 = {
                    'flexGrow': 0,
                    'flexShrink': 1
                };
                var8 = var6[var4];
                var8 = var7.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_SURFACE_HIGH;
                var1.backgroundColor = var8;
                var0.autocomplete = var1;
                var1 = {};
                var8 = var6[var4];
                var8 = var7.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BORDER_SUBTLE;
                var1.backgroundColor = var8;
                var8 = -16;
                var1.marginLeft = var8;
                var0.sectionDivider = var1;
                var1 = {
                    'height': 18,
                    'backgroundColor': null,
                    'paddingLeft': 12,
                    'marginVertical': 12,
                    'alignItems': 'center'
                };
                var4 = var6[var4];
                var4 = var7.bind(var5)(var4);
                var4 = var4.colors;
                var4 = var4.BACKGROUND_SURFACE_HIGH;
                var1.backgroundColor = var4;
                var7 = 12;
                var0.sectionTitle = var1;
                var1 = {};
                var4 = _closure1_slot0;
                var3 = 15;
                var8 = var6[var3];
                var8 = var4.bind(var5)(var8);
                var8 = var8.AUTOCOMPLETE_STICKER_NODE_MARGIN;
                var8 = var7 - var8;
                var1.paddingLeft = var8;
                var1.marginBottom = var7;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.AUTOCOMPLETE_STICKER_NODE_SIZE;
                var1.height = var3;
                var1.flexShrink = var2;
                var0.stickersAutocompleteList = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot29 = var3;
    var3 = function(arg0) { // Original name: isSlashAutocompleteType, environment: var1
        _fun90538: for (var _fun90538_ip = 0;;) switch (_fun90538_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot22;
                var0 = var0.SLASHES;
                var0 = var2 === var0;
                if (var0) {
                    _fun90538_ip = 37;
                    continue _fun90538
                }
            case 23:
                var1 = _closure1_slot22;
                var1 = var1.SLASHES_DISCOVERY;
                var0 = var2 === var1;
            case 37:
                return var0;
        }
    };
    var _closure1_slot30 = var3;
    var3 = function(arg0, arg1) { // Original name: getStickersItemLayout, environment: var1
        var1 = arg1;
        var0 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 15;
        var3 = var7[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var3 = var3.AUTOCOMPLETE_STICKER_NODE_SIZE;
        var0.length = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.AUTOCOMPLETE_STICKER_NODE_SIZE;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.AUTOCOMPLETE_STICKER_NODE_MARGIN;
        var3 = var4 + var3;
        var3 = var1 * var3;
        var4 = 1;
        var4 = var1 - var4;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.AUTOCOMPLETE_STICKER_NODE_MARGIN;
        var2 = var4 * var2;
        var2 = var3 + var2;
        var0.offset = var2;
        var0.index = var1;
        return var0;
    };
    var _closure1_slot31 = var3;
    var3 = {
        'resultCount': 0,
        'stickerResults': null,
        'nonStickerResults': null,
        'hasStickerResults': false,
        'hasNonStickerResults': false
    };
    var7 = new Array(0);
    var3.stickerResults = var7;
    var7 = new Array(0);
    var3.nonStickerResults = var7;
    var _closure1_slot32 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun90540: for (var _fun90540_ip = 0;;) switch (_fun90540_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.analyticsLocations;
                var _closure2_slot0 = var20;
                var14 = var0.channel;
                var _closure2_slot1 = var14;
                var29 = var0.canMentionEveryone;
                var _closure2_slot2 = var29;
                var9 = var0.keyboardType;
                var _closure2_slot3 = var9;
                var2 = var0.onChangeAutoCompleteVisibility;
                var _closure2_slot4 = var2;
                var8 = var0.commandsDisabled;
                var _closure2_slot5 = var8;
                var13 = var0.chatInputRef;
                var _closure2_slot6 = var13;
                var30 = var0.canOnlyUseTextCommands;
                var25 = var0.screenIndex;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var4 = 22;
                var1 = var17[var4];
                var3 = undefined;
                var7 = var18.bind(var3)(var1);
                var6 = var7.useStateFromStoresObject;
                var1 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var27
                    var0 = {};
                    var3 = _closure1_slot8;
                    var4 = var3.getOptionStates;
                    var1 = _closure2_slot1;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.optionStates = var2;
                    var4 = var3.getActiveOption;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.activeOption = var2;
                    var4 = var3.getActiveCommand;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.activeCommand = var2;
                    var2 = var3.getActiveCommandSection;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.activeSection = var1;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var1);
                var11 = var1.optionStates;
                var _closure2_slot7 = var11;
                var12 = var1.activeOption;
                var _closure2_slot8 = var12;
                var16 = var1.activeCommand;
                var _closure2_slot9 = var16;
                var15 = var1.activeSection;
                var1 = 23;
                var1 = var17[var1];
                var1 = var18.bind(var3)(var1);
                var5 = var1.IncludeStickersInAutocomplete;
                var1 = var5.getSetting;
                var7 = var1.bind(var5)();
                var _closure2_slot10 = var7;
                var19 = _closure1_slot4;
                var5 = var19.useState;
                var1 = _closure1_slot32;
                var1 = var5.bind(var19)(var1);
                var22 = _closure1_slot3;
                var21 = 2;
                var5 = var22.bind(var3)(var1, var21);
                var1 = 0;
                var6 = var5[var1];
                var36 = var6.resultCount;
                var _closure2_slot11 = var36;
                var43 = var6.stickerResults;
                var _closure2_slot12 = var43;
                var26 = var6.nonStickerResults;
                var _closure2_slot13 = var26;
                var32 = var6.hasStickerResults;
                var _closure2_slot14 = var32;
                var31 = var6.hasNonStickerResults;
                var _closure2_slot15 = var31;
                var6 = 1;
                var5 = var5[var6];
                var _closure2_slot16 = var5;
                var5 = var17[var4];
                var24 = var18.bind(var3)(var5);
                var23 = var24.useStateFromStores;
                var5 = _closure1_slot9;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var27
                    var0 = _closure1_slot9;
                    var0 = var0.loadState;
                    return var0;
                };
                var28 = var23.bind(var24)(var10, var5);
                var4 = var17[var4];
                var23 = var18.bind(var3)(var4);
                var10 = var23.useStateFromStores;
                var4 = _closure1_slot11;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var27
                    var0 = _closure1_slot11;
                    var0 = var0.loadState;
                    return var0;
                };
                var4 = var10.bind(var23)(var5, var4);
                var10 = var19.useContext;
                var5 = 24;
                var5 = var17[var5];
                var5 = var18.bind(var3)(var5);
                var5 = var5.RedesignCompatContext;
                var5 = var10.bind(var19)(var5);
                var _closure2_slot17 = var5;
                var23 = var19.useMemo;
                var10 = new Array(2);
                var10[0] = var14;
                var10[1] = var7;
                var7 = function() { // Environment: var27
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 25;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.getAutocompleteOptions;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot10;
                    var0 = true;
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var24 = var23.bind(var19)(var7, var10);
                var _closure2_slot18 = var24;
                var10 = var19.useState;
                var40 = false;
                var42 = '';
                var7 = {
                    'focused': false,
                    'text': '',
                    'selectionStart': 0,
                    'selectionEnd': 0
                };
                var7 = var10.bind(var19)(var7);
                var7 = var22.bind(var3)(var7, var21);
                var10 = var7[var1];
                var33 = var10.focused;
                var _closure2_slot19 = var33;
                var34 = var10.text;
                var _closure2_slot20 = var34;
                var37 = var10.selectionStart;
                var _closure2_slot21 = var37;
                var35 = var10.selectionEnd;
                var _closure2_slot22 = var35;
                var7 = var7[var6];
                var _closure2_slot23 = var7;
                var7 = var19.useState;
                var7 = var7.bind(var19)(var1);
                var10 = var22.bind(var3)(var7, var21);
                var7 = var10[var1];
                var10 = var10[var6];
                var _closure2_slot24 = var10;
                var38 = var19.useEffect;
                var23 = function() { // Environment: var27
                    var1 = false;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot10;
                    var2 = var3.addConditionalChangeListener;
                    var1 = function() { // Environment: var0
                        _fun90546: for (var _fun90546_ip = 0;;) switch (_fun90546_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var0 = !var1;
                                if (var1) {
                                    _fun90546_ip = 83;
                                    continue _fun90546
                                }
                            case 13:
                                var3 = _closure1_slot10;
                                var1 = var3.isConnected;
                                var3 = var1.bind(var3)();
                                var5 = undefined;
                                var1 = undefined;
                                if (!var3) {
                                    _fun90546_ip = 80;
                                    continue _fun90546
                                }
                            case 37:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 26;
                                var3 = var6[var3];
                                var4 = var4.bind(var5)(var3);
                                var3 = var4.initiateEmojiInteraction;
                                var2 = _closure1_slot23;
                                var2 = var2.AutocompleteWrapperShown;
                                var2 = var3.bind(var4)(var2);
                                var1 = false;
                            case 80:
                                var0 = var1;
                            case 83:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var0 = true;
                        _closure3_slot0 = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var10 = new Array(0);
                var10 = var38.bind(var19)(var23, var10);
                var38 = var19.useMemo;
                var23 = function() { // Environment: var27
                    var1 = -1;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = {};
                        var1 = _closure2_slot24;
                        var0.setChatInputHeight = var1;
                        var1 = function(arg0) { // Original name: setData, environment: var1
                            _fun90550: for (var _fun90550_ip = 0;;) switch (_fun90550_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.focused;
                                    var _closure5_slot0 = var2;
                                    var2 = var0.text;
                                    var _closure5_slot1 = var2;
                                    var2 = var0.selectionStart;
                                    var _closure5_slot2 = var2;
                                    var0 = var0.selectionEnd;
                                    var _closure5_slot3 = var0;
                                    var3 = _closure3_slot0;
                                    var0 = -1;
                                    if (!(var0 !== var3)) {
                                        _fun90550_ip = 80;
                                        continue _fun90550
                                    }
                                case 61:
                                    var0 = global;
                                    var4 = var0.clearTimeout;
                                    var3 = _closure3_slot0;
                                    var0 = undefined;
                                    var0 = var4.bind(var0)(var3);
                                case 80:
                                    var0 = global;
                                    var4 = var0.setTimeout;
                                    var0 = undefined;
                                    var3 = function() { // Environment: var1
                                        var2 = _closure2_slot23;
                                        var0 = undefined;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun90552: for (var _fun90552_ip = 0;;) switch (_fun90552_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var3 = var0.focused;
                                                    var1 = _closure5_slot0;
                                                    if (!(var3 === var1)) {
                                                        _fun90552_ip = 61;
                                                        continue _fun90552
                                                    }
                                                case 20:
                                                    var3 = var0.text;
                                                    var1 = _closure5_slot1;
                                                    if (!(var3 === var1)) {
                                                        _fun90552_ip = 61;
                                                        continue _fun90552
                                                    }
                                                case 33:
                                                    var3 = var0.selectionStart;
                                                    var1 = _closure5_slot2;
                                                    if (!(var3 === var1)) {
                                                        _fun90552_ip = 61;
                                                        continue _fun90552
                                                    }
                                                case 47:
                                                    var3 = var0.selectionEnd;
                                                    var1 = _closure5_slot3;
                                                    if (!(var3 !== var1)) {
                                                        _fun90552_ip = 101;
                                                        continue _fun90552
                                                    }
                                                case 61:
                                                    var1 = {};
                                                    var3 = _closure5_slot0;
                                                    var1.focused = var3;
                                                    var3 = _closure5_slot1;
                                                    var1.text = var3;
                                                    var3 = _closure5_slot2;
                                                    var1.selectionStart = var3;
                                                    var2 = _closure5_slot3;
                                                    var1.selectionEnd = var2;
                                                    var0 = var1;
                                                case 101:
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var1 = 16;
                                    var1 = var4.bind(var0)(var3, var1);
                                    _closure3_slot0 = var1;
                                    return var0;
                            }
                        };
                        var0.setData = var1;
                        return var0;
                    };
                    return var0;
                };
                var10 = new Array(0);
                var38 = var38.bind(var19)(var23, var10);
                var23 = var19.useImperativeHandle;
                var10 = arg1;
                var10 = var23.bind(var19)(var10, var38);
                var23 = var19.useMemo;
                var10 = new Array(11);
                var10[0] = var37;
                var10[1] = var35;
                var10[2] = var34;
                var10[3] = var16;
                var10[4] = var11;
                var10[5] = var12;
                var10[6] = var29;
                var10[7] = var8;
                var10[8] = var24;
                var10[9] = var28;
                var10[10] = var4;
                var4 = function() { // Environment: var27
                    _fun90553: for (var _fun90553_ip = 0;;) switch (_fun90553_ip) {
                        case 0:
                            var27 = _closure2_slot21;
                            var _closure3_slot2 = var27;
                            var1 = _closure2_slot20;
                            var10 = null;
                            if (!(var10 != var1)) {
                                _fun90553_ip = 1317;
                                continue _fun90553
                            }
                        case 26:
                            var2 = _closure2_slot20;
                            var1 = var2.trim;
                            var1 = var1.bind(var2)();
                            var1 = var1.length;
                            var26 = 0;
                            if (!(var26 !== var1)) {
                                _fun90553_ip = 1317;
                                continue _fun90553
                            }
                        case 54:
                            var1 = _closure2_slot8;
                            if (!(var10 == var1)) {
                                _fun90553_ip = 90;
                                continue _fun90553
                            }
                        case 62:
                            var3 = {
                                'canMentionEveryone': null,
                                'canMentionHere': null,
                                'canMentionChannels': true,
                                'canMentionUsers': true,
                                'canMentionRoles': true,
                                'canMentionAnyGuildUser': false,
                                'canMentionNonMentionableRoles': false,
                                'canMentionOtherGlobals': true
                            };
                            var1 = _closure2_slot2;
                            var3.canMentionEveryone = var1;
                            var3.canMentionHere = var1;
                            _fun90553_ip = 130;
                            continue _fun90553;
                        case 90:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 27;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.getApplicationCommandOptionQueryOptions;
                            var1 = _closure2_slot8;
                            var3 = var2.bind(var4)(var1);
                        case 130:
                            var1 = _closure2_slot8;
                            var1 = var10 != var1;
                            var17 = undefined;
                            var7 = undefined;
                            if (!var1) {
                                _fun90553_ip = 162;
                                continue _fun90553
                            }
                        case 145:
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot8;
                            var1 = var1.name;
                            var7 = var2[var1];
                        case 162:
                            var1 = _closure2_slot9;
                            var1 = var10 != var1;
                            var25 = undefined;
                            var24 = undefined;
                            var23 = undefined;
                            if (!var1) {
                                _fun90553_ip = 679;
                                continue _fun90553
                            }
                        case 182:
                            var1 = _closure2_slot8;
                            var1 = var10 != var1;
                            var25 = undefined;
                            var24 = undefined;
                            var23 = undefined;
                            if (!var1) {
                                _fun90553_ip = 679;
                                continue _fun90553
                            }
                        case 202:
                            var1 = var10 != var7;
                            var25 = undefined;
                            var24 = undefined;
                            var23 = undefined;
                            if (!var1) {
                                _fun90553_ip = 679;
                                continue _fun90553
                            }
                        case 218:
                            var1 = var7.location;
                            var2 = var10 != var1;
                            var8 = 0;
                            if (!var2) {
                                _fun90553_ip = 235;
                                continue _fun90553
                            }
                        case 232:
                            var8 = var1;
                        case 235:
                            var1 = var7.length;
                            var4 = var10 != var1;
                            var2 = 0;
                            if (!var4) {
                                _fun90553_ip = 252;
                                continue _fun90553
                            }
                        case 249:
                            var2 = var1;
                        case 252:
                            var4 = _closure2_slot21;
                            var1 = var8 + var2;
                            var1 = var4 >= var1;
                            var13 = undefined;
                            if (!var1) {
                                _fun90553_ip = 293;
                                continue _fun90553
                            }
                        case 269:
                            var9 = _closure2_slot20;
                            var5 = var9.substring;
                            var4 = var8 + var2;
                            var1 = _closure2_slot21;
                            var13 = var5.bind(var9)(var4, var1);
                        case 293:
                            var _closure3_slot1 = var13;
                            var1 = _closure2_slot8;
                            var1 = var1.choices;
                            if (!(var10 == var1)) {
                                _fun90553_ip = 626;
                                continue _fun90553
                            }
                        case 314:
                            var1 = _closure2_slot8;
                            var1 = var1.autocomplete;
                            if (var1) {
                                _fun90553_ip = 626;
                                continue _fun90553
                            }
                        case 330:
                            var1 = _closure2_slot8;
                            var15 = var1.type;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 28;
                            var1 = var1[var5];
                            var1 = var4.bind(var17)(var1);
                            var1 = var1.ApplicationCommandOptionType;
                            var1 = var1.BOOLEAN;
                            if (!(var1 !== var15)) {
                                _fun90553_ip = 595;
                                continue _fun90553
                            }
                        case 381:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var17)(var1);
                            var1 = var1.ApplicationCommandOptionType;
                            var1 = var1.CHANNEL;
                            if (!(var1 !== var15)) {
                                _fun90553_ip = 558;
                                continue _fun90553
                            }
                        case 417:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var17)(var1);
                            var1 = var1.ApplicationCommandOptionType;
                            var1 = var1.ROLE;
                            if (!(var1 !== var15)) {
                                _fun90553_ip = 529;
                                continue _fun90553
                            }
                        case 450:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var17)(var1);
                            var1 = var1.ApplicationCommandOptionType;
                            var1 = var1.USER;
                            if (!(var1 !== var15)) {
                                _fun90553_ip = 529;
                                continue _fun90553
                            }
                        case 483:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var17)(var1);
                            var1 = var1.ApplicationCommandOptionType;
                            var14 = var1.MENTIONABLE;
                            var9 = undefined;
                            var11 = undefined;
                            var5 = undefined;
                            var4 = undefined;
                            var1 = false;
                            if (!(var14 === var15)) {
                                _fun90553_ip = 664;
                                continue _fun90553
                            }
                        case 529:
                            var15 = _closure1_slot19;
                            var _closure3_slot0 = var15;
                            var14 = _closure1_slot22;
                            var9 = var14.MENTIONS;
                            var1 = true;
                            var11 = var15;
                            var5 = undefined;
                            var4 = undefined;
                            _fun90553_ip = 664;
                            continue _fun90553;
                        case 558:
                            var16 = _closure1_slot20;
                            _closure3_slot0 = var16;
                            var14 = _closure1_slot22;
                            var9 = var14.CHANNELS;
                            var14 = _closure2_slot8;
                            var4 = var14.channelTypes;
                            var1 = true;
                            var11 = var16;
                            var5 = undefined;
                            _fun90553_ip = 664;
                            continue _fun90553;
                        case 595:
                            var15 = '';
                            _closure3_slot0 = var15;
                            var14 = _closure1_slot22;
                            var9 = var14.CHOICES;
                            var5 = _closure1_slot16;
                            var1 = true;
                            var11 = var15;
                            var4 = undefined;
                            _fun90553_ip = 664;
                            continue _fun90553;
                        case 626:
                            var15 = '';
                            _closure3_slot0 = var15;
                            var12 = _closure1_slot22;
                            var9 = var12.CHOICES;
                            var12 = _closure2_slot8;
                            var5 = var12.choices;
                            var1 = true;
                            var11 = var15;
                            var4 = undefined;
                        case 664:
                            var25 = var9;
                            var24 = var11;
                            var23 = var13;
                            if (var1) {
                                _fun90553_ip = 1102;
                                continue _fun90553
                            }
                        case 679:
                            var12 = var10 != var7;
                            var22 = null;
                            if (!var12) {
                                _fun90553_ip = 726;
                                continue _fun90553
                            }
                        case 688:
                            var14 = var7.location;
                            var15 = var10 != var14;
                            var12 = 0;
                            if (!var15) {
                                _fun90553_ip = 705;
                                continue _fun90553
                            }
                        case 702:
                            var12 = var14;
                        case 705:
                            var14 = var7.length;
                            var15 = var10 != var14;
                            var7 = 0;
                            if (!var15) {
                                _fun90553_ip = 722;
                                continue _fun90553
                            }
                        case 719:
                            var7 = var14;
                        case 722:
                            var22 = var12 + var7;
                        case 726:
                            var21 = global;
                            var20 = 29;
                            var19 = 1;
                            var16 = var10 != var22;
                        case 741:
                            var15 = _closure1_slot13;
                            var14 = var15.test;
                            var18 = _closure2_slot20;
                            var12 = var27 - var19;
                            var12 = var18[var12];
                            var12 = var14.bind(var15)(var12);
                            var14 = 0;
                            if (!var16) {
                                _fun90553_ip = 775;
                                continue _fun90553
                            }
                        case 772:
                            var14 = var22;
                        case 775:
                            if (!(var27 !== var14)) {
                                _fun90553_ip = 788;
                                continue _fun90553
                            }
                        case 779:
                            var30 = var25;
                            if (!var12) {
                                _fun90553_ip = 949;
                                continue _fun90553
                            }
                        case 788:
                            var15 = _closure2_slot20;
                            var14 = var15.slice;
                            var12 = _closure2_slot22;
                            var15 = var14.bind(var15)(var27, var12);
                            var14 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var18 = var12[var20];
                            var28 = var14.bind(var17)(var18);
                            var18 = var28.getPrefix;
                            var29 = var18.bind(var28)(var15);
                            _closure3_slot0 = var29;
                            var12 = var12[var20];
                            var14 = var14.bind(var17)(var12);
                            var12 = var14.getQuery;
                            var28 = var12.bind(var14)(var15);
                            _closure3_slot1 = var28;
                            if (!(var10 != var28)) {
                                _fun90553_ip = 893;
                                continue _fun90553
                            }
                        case 867:
                            var14 = _closure1_slot13;
                            var12 = var14.test;
                            var15 = var12.bind(var14)(var28);
                            var14 = var25;
                            var18 = var28;
                            var12 = var27;
                            if (var15) {
                                _fun90553_ip = 992;
                                continue _fun90553
                            }
                        case 893:
                            var32 = var21.Object;
                            var31 = var32.keys;
                            var15 = _closure2_slot18;
                            var32 = var31.bind(var32)(var15);
                            var31 = var32.find;
                            var15 = function(arg0) { // Environment: var0
                                _fun90555: for (var _fun90555_ip = 0;;) switch (_fun90555_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = _closure2_slot18;
                                        var6 = var0[var3];
                                        var0 = _closure1_slot22;
                                        var0 = var0.SLASHES;
                                        var0 = var3 !== var0;
                                        if (!var0) {
                                            _fun90555_ip = 48;
                                            continue _fun90555
                                        }
                                    case 34:
                                        var1 = _closure1_slot22;
                                        var1 = var1.SLASHES_DISCOVERY;
                                        var0 = var3 !== var1;
                                    case 48:
                                        if (var0) {
                                            _fun90555_ip = 74;
                                            continue _fun90555
                                        }
                                    case 51:
                                        var3 = _closure2_slot9;
                                        var1 = null;
                                        var1 = var1 == var3;
                                        if (!var1) {
                                            _fun90555_ip = 71;
                                            continue _fun90555
                                        }
                                    case 64:
                                        var2 = _closure2_slot5;
                                        var1 = !var2;
                                    case 71:
                                        var0 = var1;
                                    case 74:
                                        if (!var0) {
                                            _fun90555_ip = 132;
                                            continue _fun90555
                                        }
                                    case 77:
                                        var1 = _closure3_slot0;
                                        var4 = undefined;
                                        var1 = var4 !== var1;
                                        if (!var1) {
                                            _fun90555_ip = 101;
                                            continue _fun90555
                                        }
                                    case 93:
                                        var3 = _closure3_slot1;
                                        var1 = var4 !== var3;
                                    case 101:
                                        if (!var1) {
                                            _fun90555_ip = 129;
                                            continue _fun90555
                                        }
                                    case 104:
                                        var5 = var6.matches;
                                        var4 = _closure3_slot0;
                                        var3 = _closure3_slot1;
                                        var2 = _closure3_slot2;
                                        var1 = var5.bind(var6)(var4, var3, var2);
                                    case 129:
                                        var0 = var1;
                                    case 132:
                                        return var0;
                                }
                            };
                            var30 = var31.bind(var32)(var15);
                            var24 = var29;
                            var23 = var28;
                            var18 = var23;
                            var12 = var27;
                            var14 = var30;
                            if (!(var10 == var14)) {
                                _fun90553_ip = 992;
                                continue _fun90553
                            }
                        case 949:
                            var28 = var27 - 1;
                            _closure3_slot2 = var28;
                            var29 = var23;
                            var15 = 0;
                            if (!var16) {
                                _fun90553_ip = 967;
                                continue _fun90553
                            }
                        case 964:
                            var15 = var22;
                        case 967:
                            var25 = var30;
                            var23 = var29;
                            var27 = var28;
                            var14 = var25;
                            var18 = var23;
                            var12 = var27;
                            if (var12 >= var15) {
                                _fun90553_ip = 741;
                                continue _fun90553
                            }
                        case 992:
                            var15 = _closure1_slot22;
                            var16 = var15.SLASHES;
                            var15 = var18;
                            if (!(var14 === var16)) {
                                _fun90553_ip = 1066;
                                continue _fun90553
                            }
                        case 1009:
                            var16 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var7 = 30;
                            var7 = var19[var7];
                            var17 = var16.bind(var17)(var7);
                            var16 = var17.getTextBeforeFirstOption;
                            var19 = var10 != var18;
                            var7 = '';
                            if (!var19) {
                                _fun90553_ip = 1049;
                                continue _fun90553
                            }
                        case 1046:
                            var7 = var18;
                        case 1049:
                            var7 = var16.bind(var17)(var7);
                            var7 = var7.text;
                            _closure3_slot1 = var7;
                            var15 = var7;
                        case 1066:
                            var7 = {};
                            var7.query = var15;
                            var7.autocompleteType = var14;
                            var7.autocompleteSelectionStart = var12;
                            var12 = {};
                            var34 = var12;
                            var33 = var3;
                            var14 = copyDataProperties(var34, var33);
                            var7.queryOptions = var12;
                            return var7;
                        case 1102:
                            var7 = var10 != var11;
                            if (!var7) {
                                _fun90553_ip = 1117;
                                continue _fun90553
                            }
                        case 1109:
                            var12 = '';
                            var7 = var12 !== var11;
                        case 1117:
                            if (!var7) {
                                _fun90553_ip = 1124;
                                continue _fun90553
                            }
                        case 1120:
                            var7 = var10 != var13;
                        case 1124:
                            if (!var7) {
                                _fun90553_ip = 1138;
                                continue _fun90553
                            }
                        case 1127:
                            var10 = var13.startsWith;
                            var7 = var10.bind(var13)(var11);
                        case 1138:
                            var10 = var13;
                            if (!var7) {
                                _fun90553_ip = 1188;
                                continue _fun90553
                            }
                        case 1144:
                            var12 = var13.length;
                            var7 = var11.length;
                            var12 = var12 > var7;
                            var7 = '';
                            if (!var12) {
                                _fun90553_ip = 1181;
                                continue _fun90553
                            }
                        case 1165:
                            var12 = var13.substring;
                            var11 = var11.length;
                            var7 = var12.bind(var13)(var11);
                        case 1181:
                            _closure3_slot1 = var7;
                            var10 = var7;
                        case 1188:
                            var7 = {};
                            var _closure3_slot3 = var7;
                            var11 = global;
                            var13 = var11.Object;
                            var12 = var13.entries;
                            var11 = _closure2_slot7;
                            var12 = var12.bind(var13)(var11);
                            var11 = var12.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun90554: for (var _fun90554_ip = 0;;) switch (_fun90554_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var2 = var5[Symbol.iterator];
                                        var5 = var2().next;
                                        var1 = var5().value;
                                        var3 = var2;
                                        var0 = undefined;
                                        var4 = var3 === var0;
                                        var3 = undefined;
                                        if (var4) {
                                            _fun90554_ip = 27;
                                            continue _fun90554
                                        }
                                    case 24:
                                        var3 = var1;
                                    case 27:
                                        var1 = undefined;
                                        if (var4) {
                                            _fun90554_ip = 57;
                                            continue _fun90554
                                        }
                                    case 32:
                                        var6 = var5().value;
                                        var5 = var2;
                                        var5 = var5 === var0;
                                        var1 = undefined;
                                        var4 = var5;
                                        if (var5) {
                                            _fun90554_ip = 57;
                                            continue _fun90554
                                        }
                                    case 51:
                                        var1 = var6;
                                        var4 = var5;
                                    case 57:
                                        if (var4) {
                                            _fun90554_ip = 63;
                                            continue _fun90554
                                        }
                                    case 60:
                                        var2.return();
                                    case 63:
                                        var4 = var1.optionValue;
                                        var2 = null;
                                        if (!(var2 != var4)) {
                                            _fun90554_ip = 92;
                                            continue _fun90554
                                        }
                                    case 75:
                                        var2 = _closure3_slot3;
                                        var1 = var1.optionValue;
                                        var2[var3] = var1;
                                    case 92:
                                        return var0;
                                }
                            };
                            var0 = var11.bind(var12)(var0);
                            var0 = {};
                            var0.query = var10;
                            var0.autocompleteType = var9;
                            var2 = var8 + var2;
                            var0.autocompleteSelectionStart = var2;
                            var2 = {};
                            var8 = _closure2_slot9;
                            var2.activeCommand = var8;
                            var2.optionValues = var7;
                            var2.isActiveApplicationCommand = var1;
                            var6 = _closure2_slot8;
                            var2.option = var6;
                            var2.choices = var5;
                            var2.channelTypes = var4;
                            var34 = var2;
                            var33 = var3;
                            var3 = copyDataProperties(var34, var33);
                            var0.queryOptions = var2;
                            var0.showOptionValuesPicker = var1;
                            return var0;
                        case 1317:
                            var0 = {
                                'query': null,
                                'autocompleteType': null,
                                'autocompleteSelectionStart': null
                            };
                            return var0;
                    }
                };
                var4 = var23.bind(var19)(var4, var10);
                var23 = var4.autocompleteType;
                var _closure2_slot25 = var23;
                var41 = var4.query;
                var _closure2_slot26 = var41;
                var10 = var4.queryOptions;
                var _closure2_slot27 = var10;
                var29 = var4.autocompleteSelectionStart;
                var _closure2_slot28 = var29;
                var4 = var4.showOptionValuesPicker;
                var _closure2_slot29 = var4;
                var34 = var19.useCallback;
                var28 = new Array(4);
                var28[0] = var23;
                var28[1] = var41;
                var28[2] = var10;
                var28[3] = var24;
                var10 = function(arg0) { // Environment: var27
                    _fun90556: for (var _fun90556_ip = 0;;) switch (_fun90556_ip) {
                        case 0:
                            var0 = _closure2_slot25;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun90556_ip = 23;
                                continue _fun90556
                            }
                        case 15:
                            var0 = _closure2_slot26;
                            if (!(var3 == var0)) {
                                _fun90556_ip = 46;
                                continue _fun90556
                            }
                        case 23:
                            var4 = _closure2_slot16;
                            var3 = _closure1_slot32;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            _fun90556_ip = 178;
                            continue _fun90556;
                        case 46:
                            var3 = _closure2_slot18;
                            var0 = _closure2_slot25;
                            var6 = var3[var0];
                            var5 = var6.queryResults;
                            var4 = _closure2_slot26;
                            var3 = _closure2_slot27;
                            var0 = arg0;
                            var4 = var5.bind(var6)(var4, var3, var0);
                            var3 = new Array(0);
                            var _closure3_slot0 = var3;
                            var0 = new Array(0);
                            var _closure3_slot1 = var0;
                            var5 = var4.forEach;
                            var2 = function(arg0) { // Environment: var2
                                _fun90557: for (var _fun90557_ip = 0;;) switch (_fun90557_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = var2.type;
                                        var0 = _closure1_slot12;
                                        var0 = var0.STICKER;
                                        if (!(var1 !== var0)) {
                                            _fun90557_ip = 44;
                                            continue _fun90557
                                        }
                                    case 25:
                                        var1 = _closure3_slot1;
                                        var0 = var1.push;
                                        var0 = var0.bind(var1)(var2);
                                        _fun90557_ip = 61;
                                        continue _fun90557;
                                    case 44:
                                        var1 = _closure3_slot0;
                                        var0 = var1.push;
                                        var0 = var0.bind(var1)(var2);
                                    case 61:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var5.bind(var4)(var2);
                            var2 = _closure2_slot16;
                            var1 = {};
                            var4 = var4.length;
                            var1.resultCount = var4;
                            var1.stickerResults = var3;
                            var1.nonStickerResults = var0;
                            var4 = var3.length;
                            var3 = 0;
                            var4 = var4 > var3;
                            var1.hasStickerResults = var4;
                            var0 = var0.length;
                            var0 = var0 > var3;
                            var1.hasNonStickerResults = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 178:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var34.bind(var19)(var10, var28);
                var _closure2_slot30 = var10;
                var34 = var19.useEffect;
                var28 = new Array(3);
                var28[0] = var23;
                var28[1] = var10;
                var28[2] = var24;
                var24 = function() { // Environment: var27
                    _fun90558: for (var _fun90558_ip = 0;;) switch (_fun90558_ip) {
                        case 0:
                            var2 = _closure2_slot25;
                            var1 = null;
                            var2 = var1 != var2;
                            var4 = null;
                            if (!var2) {
                                _fun90558_ip = 54;
                                continue _fun90558
                            }
                        case 20:
                            var2 = _closure2_slot18;
                            var5 = var1 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun90558_ip = 51;
                                continue _fun90558
                            }
                        case 33:
                            var5 = _closure2_slot18;
                            var3 = _closure2_slot25;
                            var3 = var5[var3];
                            var2 = var3.stores;
                        case 51:
                            var4 = var2;
                        case 54:
                            if (!(var1 == var4)) {
                                _fun90558_ip = 62;
                                continue _fun90558
                            }
                        case 58:
                            var1 = undefined;
                            return var1;
                        case 62:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.BatchedStoreListener;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var6 = function() { // Environment: var0
                                var2 = _closure2_slot30;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var8 = var2;
                            var7 = var4;
                            var1 = new var8[var3](var7, var6, var5);
                            var3 = var1 instanceof Object ? var1 : var2;
                            var _closure3_slot0 = var3;
                            var2 = var3.attach;
                            var1 = 'AutocompleteWrapper';
                            var1 = var2.bind(var3)(var1);
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = var1.detach;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            return var0;
                    }
                };
                var24 = var34.bind(var19)(var24, var28);
                var28 = var19.useEffect;
                var24 = new Array(1);
                var24[0] = var10;
                var10 = function() { // Environment: var27
                    var2 = _closure2_slot30;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10 = var28.bind(var19)(var10, var24);
                var28 = var19.useCallback;
                var24 = new Array(2);
                var24[0] = var43;
                var24[1] = var26;
                var10 = function() { // Environment: var27
                    var0 = {};
                    var2 = _closure2_slot12;
                    var2 = var2.length;
                    var0.numStickerResults = var2;
                    var3 = _closure2_slot13;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot12;
                        var0 = var0.EMOJI;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.length;
                    var0.numEmojiResults = var1;
                    return var0;
                };
                var28 = var28.bind(var19)(var10, var24);
                var _closure2_slot31 = var28;
                var24 = var19.useMemo;
                var10 = new Array(4);
                var10[0] = var23;
                var10[1] = var33;
                var10[2] = var9;
                var10[3] = var36;
                var9 = function() { // Environment: var27
                    _fun90564: for (var _fun90564_ip = 0;;) switch (_fun90564_ip) {
                        case 0:
                            var0 = _closure2_slot19;
                            var2 = !var0;
                            if (var2) {
                                _fun90564_ip = 50;
                                continue _fun90564
                            }
                        case 13:
                            var3 = _closure2_slot11;
                            var0 = 0;
                            var0 = var0 === var3;
                            if (!var0) {
                                _fun90564_ip = 47;
                                continue _fun90564
                            }
                        case 26:
                            var5 = _closure1_slot30;
                            var4 = _closure2_slot25;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var0 = !var3;
                        case 47:
                            var2 = var0;
                        case 50:
                            var0 = !var2;
                            if (var2) {
                                _fun90564_ip = 101;
                                continue _fun90564
                            }
                        case 56:
                            var2 = _closure2_slot3;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 31;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.KeyboardTypes;
                            var1 = var1.SYSTEM;
                            var0 = var2 === var1;
                        case 101:
                            return var0;
                    }
                };
                var35 = var24.bind(var19)(var9, var10);
                var _closure2_slot32 = var35;
                var9 = var19.useRef;
                var9 = var9.bind(var19)(var40);
                var _closure2_slot33 = var9;
                var24 = var19.useEffect;
                var10 = new Array(2);
                var10[0] = var23;
                var10[1] = var16;
                var9 = function() { // Environment: var27
                    _fun90565: for (var _fun90565_ip = 0;;) switch (_fun90565_ip) {
                        case 0:
                            var0 = _closure2_slot33;
                            var5 = var0.current;
                            var2 = _closure2_slot33;
                            var6 = _closure1_slot30;
                            var1 = _closure2_slot25;
                            var0 = undefined;
                            var1 = var6.bind(var0)(var1);
                            if (var5) {
                                _fun90565_ip = 127;
                                continue _fun90565
                            }
                        case 37:
                            var5 = var1;
                            if (var1) {
                                _fun90565_ip = 53;
                                continue _fun90565
                            }
                        case 43:
                            var7 = _closure2_slot9;
                            var6 = null;
                            var5 = var6 != var7;
                        case 53:
                            var2.current = var5;
                            var5 = _closure2_slot33;
                            var5 = var5.current;
                            if (!var5) {
                                _fun90565_ip = 146;
                                continue _fun90565
                            }
                        case 71:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 32;
                            var5 = var7[var5];
                            var7 = var6.bind(var0)(var5);
                            var6 = var7.trackWithMetadata;
                            var4 = _closure1_slot14;
                            var5 = var4.APPLICATION_COMMAND_TOP_OF_FUNNEL;
                            var4 = {};
                            var8 = 'slash_ui';
                            var4.location = var8;
                            var4 = var6.bind(var7)(var5, var4);
                            _fun90565_ip = 146;
                            continue _fun90565;
                        case 127:
                            if (var1) {
                                _fun90565_ip = 140;
                                continue _fun90565
                            }
                        case 130:
                            var4 = _closure2_slot9;
                            var3 = null;
                            var1 = var3 != var4;
                        case 140:
                            var2.current = var1;
                        case 146:
                            return var0;
                    }
                };
                var9 = var24.bind(var19)(var9, var10);
                var10 = var19.useEffect;
                var9 = new Array(6);
                var9[0] = var2;
                var9[1] = var16;
                var9[2] = var35;
                var9[3] = var23;
                var9[4] = var14;
                var9[5] = var28;
                var2 = function() { // Environment: var27
                    _fun90566: for (var _fun90566_ip = 0;;) switch (_fun90566_ip) {
                        case 0:
                            var1 = _closure2_slot32;
                            if (var1) {
                                _fun90566_ip = 20;
                                continue _fun90566
                            }
                        case 10:
                            var3 = _closure2_slot9;
                            var2 = null;
                            var1 = var2 != var3;
                        case 20:
                            var3 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun90566_ip = 41;
                                continue _fun90566
                            }
                        case 30:
                            var3 = _closure2_slot4;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var1);
                        case 41:
                            if (!var1) {
                                _fun90566_ip = 98;
                                continue _fun90566
                            }
                        case 44:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 33;
                            var1 = var3[var1];
                            var5 = undefined;
                            var4 = var2.bind(var5)(var1);
                            var3 = var4.iOSTrackAutocompleteOpen;
                            var2 = _closure2_slot25;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot31;
                            var0 = var0.bind(var5)();
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 98:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var10.bind(var19)(var2, var9);
                var9 = _closure1_slot1;
                var2 = 19;
                var2 = var17[var2];
                var10 = var9.bind(var3)(var2);
                var2 = {};
                var44 = true;
                var2.ignoreKeyboard = var44;
                var10 = var10.bind(var3)(var2);
                var2 = 20;
                var2 = var17[var2];
                var24 = var9.bind(var3)(var2);
                var2 = {};
                var2.includeKeyboardHeight = var44;
                var2 = var24.bind(var3)(var2);
                var2 = var2.insets;
                var24 = var10.height;
                var10 = var2.top;
                var10 = var24 - var10;
                var2 = var2.bottom;
                var10 = var10 - var2;
                var2 = 21;
                var2 = var17[var2];
                var2 = var18.bind(var3)(var2);
                var2 = var2.NAV_BAR_HEIGHT;
                var2 = var10 - var2;
                var2 = var2 - var7;
                var _closure2_slot34 = var2;
                var10 = var19.useMemo;
                var7 = new Array(3);
                var7[0] = var23;
                var24 = var43.length;
                var7[1] = var24;
                var7[2] = var2;
                var2 = function() { // Environment: var27
                    _fun90567: for (var _fun90567_ip = 0;;) switch (_fun90567_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(!(var2 > var1))) {
                                _fun90567_ip = 47;
                                continue _fun90567
                            }
                        case 18:
                            var2 = _closure2_slot25;
                            var1 = _closure1_slot22;
                            var1 = var1.EMOJIS_AND_STICKERS;
                            var3 = 200;
                            if (!(var2 === var1)) {
                                _fun90567_ip = 45;
                                continue _fun90567
                            }
                        case 42:
                            var3 = 242;
                        case 45:
                            _fun90567_ip = 54;
                            continue _fun90567;
                        case 47:
                            var3 = _closure1_slot28;
                        case 54:
                            var1 = global;
                            var2 = var1.Math;
                            var1 = var2.min;
                            var0 = _closure2_slot34;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var2 = var10.bind(var19)(var2, var7);
                var _closure2_slot35 = var2;
                var10 = var19.useState;
                var7 = null;
                var10 = var10.bind(var19)(var7);
                var10 = var22.bind(var3)(var10, var21);
                var34 = var10[var1];
                var _closure2_slot36 = var34;
                var33 = var10[var6];
                var _closure2_slot37 = var33;
                var24 = var19.useMemo;
                var10 = new Array(9);
                var10[0] = var36;
                var10[1] = var23;
                var10[2] = var35;
                var10[3] = var32;
                var10[4] = var31;
                var35 = var26.length;
                var10[5] = var35;
                var10[6] = var2;
                var10[7] = var34;
                var10[8] = var5;
                var5 = function() { // Environment: var27
                    _fun90568: for (var _fun90568_ip = 0;;) switch (_fun90568_ip) {
                        case 0:
                            var3 = _closure2_slot25;
                            var1 = _closure1_slot22;
                            var1 = var1.EMOJIS_AND_STICKERS;
                            if (!(var3 !== var1)) {
                                _fun90568_ip = 109;
                                continue _fun90568
                            }
                        case 24:
                            var3 = _closure1_slot30;
                            var1 = _closure2_slot25;
                            var7 = undefined;
                            var1 = var3.bind(var7)(var1);
                            if (var1) {
                                _fun90568_ip = 82;
                                continue _fun90568
                            }
                        case 42:
                            var3 = _closure2_slot25;
                            var1 = null;
                            var1 = var1 != var3;
                            var4 = 0;
                            if (!var1) {
                                _fun90568_ip = 80;
                                continue _fun90568
                            }
                        case 57:
                            var6 = _closure1_slot33;
                            var5 = _closure2_slot11;
                            var3 = _closure2_slot25;
                            var1 = _closure2_slot17;
                            var4 = var6.bind(var7)(var5, var3, var1);
                        case 80:
                            _fun90568_ip = 104;
                            continue _fun90568;
                        case 82:
                            var3 = _closure2_slot36;
                            var1 = null;
                            var3 = var1 != var3;
                            var1 = 0;
                            if (!var3) {
                                _fun90568_ip = 101;
                                continue _fun90568
                            }
                        case 97:
                            var1 = _closure2_slot36;
                        case 101:
                            var4 = var1;
                        case 104:
                            _fun90568_ip = 238;
                            continue _fun90568;
                        case 109:
                            var6 = _closure1_slot33;
                            var1 = _closure2_slot13;
                            var5 = var1.length;
                            var3 = _closure2_slot25;
                            var1 = _closure2_slot17;
                            var7 = undefined;
                            var3 = var6.bind(var7)(var5, var3, var1);
                            var1 = _closure2_slot15;
                            var5 = var3;
                            if (!var1) {
                                _fun90568_ip = 156;
                                continue _fun90568
                            }
                        case 149:
                            var1 = 42;
                            var5 = var3 + var1;
                        case 156:
                            var1 = _closure2_slot14;
                            var3 = var5;
                            if (!var1) {
                                _fun90568_ip = 210;
                                continue _fun90568
                            }
                        case 166:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 15;
                            var1 = var8[var1];
                            var1 = var6.bind(var7)(var1);
                            var6 = var1.AUTOCOMPLETE_STICKER_NODE_SIZE;
                            var1 = 42;
                            var6 = var1 + var6;
                            var1 = 12;
                            var1 = var6 + var1;
                            var3 = var5 + var1;
                        case 210:
                            var5 = _closure2_slot14;
                            if (!var5) {
                                _fun90568_ip = 221;
                                continue _fun90568
                            }
                        case 217:
                            var5 = _closure2_slot15;
                        case 221:
                            var1 = var3;
                            if (!var5) {
                                _fun90568_ip = 235;
                                continue _fun90568
                            }
                        case 227:
                            var2 = _closure1_slot27;
                            var1 = var3 + var2;
                        case 235:
                            var4 = var1;
                        case 238:
                            var1 = global;
                            var3 = var1.Math;
                            var2 = var3.min;
                            var5 = _closure2_slot32;
                            var1 = 0;
                            if (!var5) {
                                _fun90568_ip = 263;
                                continue _fun90568
                            }
                        case 260:
                            var1 = var4;
                        case 263:
                            var0 = _closure2_slot35;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var24 = var24.bind(var19)(var5, var10);
                var10 = _closure1_slot29;
                var5 = var24 > var1;
                var5 = var10.bind(var3)(var5);
                var _closure2_slot38 = var5;
                var10 = 34;
                var10 = var17[var10];
                var18 = var18.bind(var3)(var10);
                var10 = var18.useIsScreenReaderEnabled;
                var10 = var10.bind(var18)();
                var _closure2_slot39 = var10;
                var34 = var19.useMemo;
                var18 = new Array(2);
                var18[0] = var10;
                var10 = var5.autocompletePositionRelative;
                var18[1] = var10;
                var10 = function() { // Environment: var27
                    _fun90569: for (var _fun90569_ip = 0;;) switch (_fun90569_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.isIOS;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            if (!var1) {
                                _fun90569_ip = 62;
                                continue _fun90569
                            }
                        case 40:
                            var2 = _closure2_slot39;
                            var0 = null;
                            if (!var2) {
                                _fun90569_ip = 62;
                                continue _fun90569
                            }
                        case 52:
                            var1 = _closure2_slot38;
                            var0 = var1.autocompletePositionRelative;
                        case 62:
                            return var0;
                    }
                };
                var10 = var34.bind(var19)(var10, var18);
                var18 = 35;
                var18 = var17[var18];
                var18 = var9.bind(var3)(var18);
                var18 = var18.bind(var3)(var24, var25);
                var25 = var19.useCallback;
                var24 = new Array(3);
                var24[0] = var20;
                var24[1] = var14;
                var24[2] = var13;
                var20 = function(arg0, arg1, arg2) { // Environment: var27
                    _fun90570: for (var _fun90570_ip = 0;;) switch (_fun90570_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.type;
                            var1 = _closure1_slot12;
                            var1 = var1.EMOJI_PREMIUM_UPSELL;
                            if (!(var3 === var1)) {
                                _fun90570_ip = 92;
                                continue _fun90570
                            }
                        case 25:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 36;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.handleShowUpsellAlert;
                            var1 = {};
                            var5 = _closure1_slot15;
                            var5 = var5.EMOJI_AUTOCOMPLETE;
                            var1.initialUpsellKey = var5;
                            var5 = _closure2_slot0;
                            var1.analyticsLocations = var5;
                            var1 = var3.bind(var4)(var1);
                            _fun90570_ip = 280;
                            continue _fun90570;
                        case 92:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 29;
                            var1 = var3[var1];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var1);
                            var5 = var6.getAutocompleteResultText;
                            var4 = _closure2_slot1;
                            var7 = var5.bind(var6)(var0, var4);
                            var4 = _closure2_slot6;
                            var5 = var4.current;
                            var4 = var5.getApplicationCommandManager;
                            var8 = var4.bind(var5)();
                            var4 = null;
                            var4 = var4 == var8;
                            if (var4) {
                                _fun90570_ip = 192;
                                continue _fun90570
                            }
                        case 161:
                            var6 = var8.setAutoCompleteResult;
                            var4 = _closure2_slot1;
                            var12 = var4.id;
                            var10 = arg2;
                            var13 = var8;
                            var11 = var7;
                            var9 = var0;
                            var3 = var13[var6](var12, var11, var10, var9, var8);
                        case 192:
                            if (var3) {
                                _fun90570_ip = 280;
                                continue _fun90570
                            }
                        case 195:
                            var8 = var0.type;
                            var2 = _closure1_slot12;
                            var3 = var2.STICKER;
                            var4 = _closure2_slot6;
                            var6 = var4.current;
                            var5 = var6.insertText;
                            var4 = arg1;
                            var3 = var8 !== var3;
                            var3 = var5.bind(var6)(var7, var4, var3);
                            var3 = var0.type;
                            var2 = var2.STICKER;
                            if (!(var3 === var2)) {
                                _fun90570_ip = 280;
                                continue _fun90570
                            }
                        case 254:
                            var1 = _closure2_slot6;
                            var2 = var1.current;
                            var1 = var2.handleSelectSticker;
                            var0 = var0.sticker;
                            var0 = var1.bind(var2)(var0);
                        case 280:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = var25.bind(var19)(var20, var24);
                var _closure2_slot40 = var25;
                var24 = var19.useCallback;
                var20 = new Array(3);
                var20[0] = var13;
                var20[1] = var11;
                var20[2] = var14;
                var13 = function(arg0) { // Environment: var27
                    _fun90571: for (var _fun90571_ip = 0;;) switch (_fun90571_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = _closure2_slot6;
                            var2 = var0.current;
                            var0 = var2.getApplicationCommandManager;
                            var5 = var0.bind(var2)();
                            var6 = var1.type;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 28;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.ApplicationCommandOptionType;
                            var3 = var3.ATTACHMENT;
                            if (!(var6 !== var3)) {
                                _fun90571_ip = 90;
                                continue _fun90571
                            }
                        case 71:
                            var3 = null;
                            if (!(var3 != var5)) {
                                _fun90571_ip = 188;
                                continue _fun90571
                            }
                        case 77:
                            var3 = var5.insertOrJumpCommandOption;
                            var3 = var3.bind(var5)(var1);
                            _fun90571_ip = 188;
                            continue _fun90571;
                        case 90:
                            var6 = _closure2_slot7;
                            var3 = var1.name;
                            var3 = var6[var3];
                            var4 = _closure2_slot1;
                            var4 = var4.id;
                            var6 = var3.lastValidationResult;
                            var3 = null;
                            if (!(var3 != var6)) {
                                _fun90571_ip = 133;
                                continue _fun90571
                            }
                        case 124:
                            var6 = var6.success;
                            if (var6) {
                                _fun90571_ip = 150;
                                continue _fun90571
                            }
                        case 133:
                            if (!(var3 != var5)) {
                                _fun90571_ip = 188;
                                continue _fun90571
                            }
                        case 137:
                            var3 = var5.insertOrJumpCommandOption;
                            var3 = var3.bind(var5)(var1);
                            _fun90571_ip = 188;
                            continue _fun90571;
                        case 150:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 37;
                            var2 = var6[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.openCommandAttachmentPreview;
                            var1 = var1.name;
                            var1 = var2.bind(var3)(var5, var4, var1);
                        case 188:
                            return var0;
                    }
                };
                var13 = var24.bind(var19)(var13, var20);
                var24 = var19.useCallback;
                var20 = new Array(6);
                var20[0] = var29;
                var20[1] = var23;
                var20[2] = var28;
                var20[3] = var14;
                var20[4] = var25;
                var20[5] = var4;
                var4 = function(arg0) { // Environment: var27
                    _fun90572: for (var _fun90572_ip = 0;;) switch (_fun90572_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 33;
                            var1 = var1[var0];
                            var0 = undefined;
                            var8 = var2.bind(var0)(var1);
                            var7 = var8.iOSTrackAutocompleteSelect;
                            var6 = _closure2_slot25;
                            var3 = _closure2_slot1;
                            var2 = {};
                            var9 = var4.type;
                            var2.selectionType = var9;
                            var11 = var4.type;
                            var5 = _closure1_slot12;
                            var10 = var5.STICKER;
                            var5 = null;
                            var9 = null;
                            if (!(var11 === var10)) {
                                _fun90572_ip = 91;
                                continue _fun90572
                            }
                        case 80:
                            var10 = var4.sticker;
                            var9 = var10.id;
                        case 91:
                            var2.stickerId = var9;
                            var9 = _closure2_slot31;
                            var13 = var9.bind(var0)();
                            var14 = var2;
                            var9 = copyDataProperties(var14, var13);
                            var2 = var7.bind(var8)(var6, var3, var2);
                            var3 = _closure2_slot40;
                            var2 = _closure2_slot28;
                            var5 = var5 != var2;
                            var2 = 0;
                            if (!var5) {
                                _fun90572_ip = 139;
                                continue _fun90572
                            }
                        case 135:
                            var2 = _closure2_slot28;
                        case 139:
                            var1 = _closure2_slot29;
                            var1 = var3.bind(var0)(var4, var2, var1);
                            return var0;
                    }
                };
                var20 = var24.bind(var19)(var4, var20);
                var _closure2_slot41 = var20;
                var4 = var19.useState;
                var4 = var4.bind(var19)(var7);
                var4 = var22.bind(var3)(var4, var21);
                var1 = var4[var1];
                var _closure2_slot42 = var1;
                var4 = var4[var6];
                var _closure2_slot43 = var4;
                var6 = var19.useCallback;
                var4 = new Array(5);
                var4[0] = var23;
                var4[1] = var20;
                var4[2] = var1;
                var4[3] = var14;
                var4[4] = var16;
                var1 = function(arg0) { // Environment: var27
                    _fun90573: for (var _fun90573_ip = 0;;) switch (_fun90573_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.item;
                            var _closure3_slot0 = var5;
                            var2 = var5.type;
                            var1 = _closure1_slot12;
                            var1 = var1.USER;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 890;
                                continue _fun90573
                            }
                        case 39:
                            var1 = _closure1_slot12;
                            var1 = var1.GLOBAL;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 822;
                                continue _fun90573
                            }
                        case 56:
                            var1 = _closure1_slot12;
                            var1 = var1.ROLE;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 711;
                                continue _fun90573
                            }
                        case 73:
                            var1 = _closure1_slot12;
                            var1 = var1.CHANNEL;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 643;
                                continue _fun90573
                            }
                        case 90:
                            var1 = _closure1_slot12;
                            var1 = var1.EMOJI;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 575;
                                continue _fun90573
                            }
                        case 107:
                            var1 = _closure1_slot12;
                            var1 = var1.EMOJI_PREMIUM_UPSELL;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 507;
                                continue _fun90573
                            }
                        case 124:
                            var1 = _closure1_slot12;
                            var1 = var1.CHOICE;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 439;
                                continue _fun90573
                            }
                        case 141:
                            var1 = _closure1_slot12;
                            var1 = var1.CHOICE_LOADING;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 397;
                                continue _fun90573
                            }
                        case 158:
                            var1 = _closure1_slot12;
                            var1 = var1.STICKER;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 242;
                                continue _fun90573
                            }
                        case 172:
                            var1 = _closure1_slot12;
                            var1 = var1.LABEL;
                            if (!(var1 !== var2)) {
                                _fun90573_ip = 190;
                                continue _fun90573
                            }
                        case 186:
                            var1 = null;
                            return var1;
                        case 190:
                            var6 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Label;
                            var1 = {};
                            var14 = var1;
                            var13 = var5;
                            var7 = copyDataProperties(var14, var13);
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 242:
                            var2 = _closure2_slot42;
                            var1 = var5.sticker;
                            var1 = var1.id;
                            var11 = var2 === var1;
                            var7 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var6 = undefined;
                            var1 = var2.bind(var6)(var1);
                            var3 = var1.Sticker;
                            var2 = {};
                            var14 = var2;
                            var13 = var5;
                            var1 = copyDataProperties(var14, var13);
                            var8 = function() { // Original name: onPress, environment: var4
                                var2 = _closure2_slot41;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = 'onPress';
                            var2[var1] = var8;
                            var8 = function() { // Original name: onLongPress, environment: var4
                                var2 = _closure2_slot43;
                                var0 = _closure3_slot0;
                                var0 = var0.sticker;
                                var1 = var0.id;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = 'onLongPress';
                            var2[var1] = var8;
                            var1 = 'isInteracting';
                            var2[var1] = var11;
                            var1 = var5.sticker;
                            var10 = var1.id;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var9 = var1.concat;
                            var8 = '';
                            var1 = '-';
                            var1 = var9.bind(var8)(var10, var1, var11);
                            var1 = var7.bind(var6)(var3, var2, var1);
                            return var1;
                        case 397:
                            var6 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.ChoiceLoading;
                            var1 = {};
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 439:
                            var6 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Choice;
                            var1 = {};
                            var14 = var1;
                            var13 = var5;
                            var7 = copyDataProperties(var14, var13);
                            var8 = function() { // Original name: onPress, environment: var4
                                var2 = _closure2_slot41;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7 = 'onPress';
                            var1[var7] = var8;
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 507:
                            var6 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.EmojiPremiumUpsell;
                            var1 = {};
                            var14 = var1;
                            var13 = var5;
                            var7 = copyDataProperties(var14, var13);
                            var8 = function() { // Original name: onPress, environment: var4
                                var2 = _closure2_slot41;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7 = 'onPress';
                            var1[var7] = var8;
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 575:
                            var6 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Emoji;
                            var1 = {};
                            var14 = var1;
                            var13 = var5;
                            var7 = copyDataProperties(var14, var13);
                            var8 = function() { // Original name: onPress, environment: var4
                                var2 = _closure2_slot41;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7 = 'onPress';
                            var1[var7] = var8;
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 643:
                            var6 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Channel;
                            var1 = {};
                            var14 = var1;
                            var13 = var5;
                            var7 = copyDataProperties(var14, var13);
                            var8 = function() { // Original name: onPress, environment: var4
                                var2 = _closure2_slot41;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7 = 'onPress';
                            var1[var7] = var8;
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 711:
                            var6 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Role;
                            var1 = {};
                            var14 = var1;
                            var13 = var5;
                            var7 = copyDataProperties(var14, var13);
                            var8 = function() { // Original name: onPress, environment: var4
                                var2 = _closure2_slot41;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7 = 'onPress';
                            var1[var7] = var8;
                            var9 = _closure2_slot25;
                            var8 = _closure1_slot22;
                            var8 = var8.MENTIONS;
                            var8 = var9 === var8;
                            if (!var8) {
                                _fun90573_ip = 805;
                                continue _fun90573
                            }
                        case 795:
                            var9 = _closure2_slot9;
                            var7 = null;
                            var8 = var7 == var9;
                        case 805:
                            var7 = 'showDescription';
                            var1[var7] = var8;
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 822:
                            var6 = _closure1_slot24;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Global;
                            var1 = {};
                            var14 = var1;
                            var13 = var5;
                            var7 = copyDataProperties(var14, var13);
                            var8 = function() { // Original name: onPress, environment: var4
                                var2 = _closure2_slot41;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7 = 'onPress';
                            var1[var7] = var8;
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 890:
                            var3 = _closure1_slot24;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 15;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.User;
                            var0 = {};
                            var14 = var0;
                            var13 = var5;
                            var5 = copyDataProperties(var14, var13);
                            var5 = _closure2_slot1;
                            var6 = var5.guild_id;
                            var5 = 'guildId';
                            var0[var5] = var6;
                            var5 = function() { // Original name: onPress, environment: var4
                                var2 = _closure2_slot41;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var4 = 'onPress';
                            var0[var4] = var5;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var25 = var6.bind(var19)(var1, var4);
                var1 = var5.autocomplete;
                var28 = new Array(2);
                var28[0] = var1;
                var1 = {};
                var1.maxHeight = var2;
                var28[1] = var1;
                var4 = _closure1_slot26;
                var2 = _closure1_slot5;
                var1 = {};
                var19 = var5.autocompleteWrapper;
                var6 = new Array(2);
                var6[0] = var19;
                var6[1] = var10;
                var1.style = var6;
                var10 = _closure1_slot24;
                var6 = 38;
                var6 = var17[var6];
                var6 = var9.bind(var3)(var6);
                var9 = var6.View;
                var6 = {};
                var19 = var5.autocompleteContainer;
                var17 = new Array(2);
                var17[0] = var19;
                var17[1] = var18;
                var6.style = var17;
                var17 = var7 != var23;
                if (!var17) {
                    _fun90540_ip = 2537;
                    continue _fun90540
                }
            case 1669:
                var20 = _closure1_slot26;
                var19 = _closure1_slot25;
                var18 = {};
                var21 = _closure1_slot22;
                var21 = var21.SLASHES_DISCOVERY;
                var22 = var23 === var21;
                if (!var22) {
                    _fun90540_ip = 1754;
                    continue _fun90540
                }
            case 1696:
                var29 = _closure1_slot24;
                var24 = _closure1_slot1;
                var34 = _closure1_slot2;
                var21 = 39;
                var21 = var34[var21];
                var24 = var24.bind(var3)(var21);
                var21 = {};
                var21.channel = var14;
                var34 = function(arg0, arg1, arg2) { // Original name: onPressSlashItem, environment: var27
                    _fun90583: for (var _fun90583_ip = 0;;) switch (_fun90583_ip) {
                        case 0:
                            var3 = _closure2_slot40;
                            var2 = {};
                            var0 = arg0;
                            var2.command = var0;
                            var0 = arg1;
                            var2.section = var0;
                            var1 = _closure1_slot12;
                            var1 = var1.SLASH;
                            var2.type = var1;
                            var1 = arg2;
                            var2.visualSection = var1;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 40;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var5.bind(var0)(var1);
                            var1 = var1.ApplicationCommandTriggerLocations;
                            var1 = var1.DISCOVERY;
                            var2.location = var1;
                            var5 = _closure2_slot28;
                            var1 = null;
                            var5 = var1 != var5;
                            var1 = 0;
                            if (!var5) {
                                _fun90583_ip = 106;
                                continue _fun90583
                            }
                        case 102:
                            var1 = _closure2_slot28;
                        case 106:
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var21.onPressSlashItem = var34;
                var21.onHeightChange = var33;
                var21.canOnlyUseTextCommands = var30;
                var22 = var29.bind(var3)(var24, var21);
            case 1754:
                var21 = new Array(4);
                var21[0] = var22;
                var22 = _closure1_slot22;
                var22 = var22.SLASHES;
                var22 = var23 === var22;
                if (!var22) {
                    _fun90540_ip = 1915;
                    continue _fun90540
                }
            case 1782:
                var30 = _closure1_slot24;
                var29 = _closure1_slot1;
                var33 = _closure1_slot2;
                var24 = 41;
                var24 = var33[var24];
                var29 = var29.bind(var3)(var24);
                var24 = {};
                var24.channel = var14;
                var34 = var7 != var41;
                var33 = var42;
                if (!var34) {
                    _fun90540_ip = 1825;
                    continue _fun90540
                }
            case 1822:
                var33 = var41;
            case 1825:
                var24.query = var33;
                var33 = function(arg0, arg1) { // Original name: onPressCommandItem, environment: var27
                    _fun90584: for (var _fun90584_ip = 0;;) switch (_fun90584_ip) {
                        case 0:
                            var3 = _closure2_slot40;
                            var2 = {};
                            var0 = arg0;
                            var2.command = var0;
                            var0 = arg1;
                            var2.section = var0;
                            var1 = _closure1_slot12;
                            var1 = var1.SLASH;
                            var2.type = var1;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 40;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var5.bind(var0)(var1);
                            var1 = var1.ApplicationCommandTriggerLocations;
                            var1 = var1.DISCOVERY;
                            var2.location = var1;
                            var1 = _closure2_slot26;
                            var2.query = var1;
                            var5 = _closure2_slot28;
                            var1 = null;
                            var5 = var1 != var5;
                            var1 = 0;
                            if (!var5) {
                                _fun90584_ip = 107;
                                continue _fun90584
                            }
                        case 103:
                            var1 = _closure2_slot28;
                        case 107:
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var24.onPressCommandItem = var33;
                var24.style = var28;
                var34 = _closure1_slot0;
                var35 = _closure1_slot2;
                var33 = 29;
                var36 = var35[var33];
                var36 = var34.bind(var3)(var36);
                var36 = var36.getItemSeparator;
                var24.ItemSeparatorComponent = var36;
                var33 = var35[var33];
                var33 = var34.bind(var3)(var33);
                var33 = var33.getItemLayout;
                var24.getItemLayout = var33;
                var33 = function(arg0) { // Original name: onCommandsChange, environment: var27
                    var2 = _closure2_slot37;
                    var5 = _closure1_slot33;
                    var4 = _closure2_slot25;
                    var3 = _closure2_slot17;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var5.bind(var0)(var1, var4, var3);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var24.onCommandsChange = var33;
                var22 = var30.bind(var3)(var29, var24);
            case 1915:
                var21[1] = var22;
                var22 = _closure1_slot22;
                var22 = var22.EMOJIS_AND_STICKERS;
                var22 = var23 === var22;
                if (!var22) {
                    _fun90540_ip = 2427;
                    continue _fun90540
                }
            case 1939:
                var29 = _closure1_slot26;
                var24 = _closure1_slot25;
                var23 = {};
                var33 = var32;
                if (!var32) {
                    _fun90540_ip = 2203;
                    continue _fun90540
                }
            case 1958:
                var35 = _closure1_slot26;
                var34 = _closure1_slot25;
                var30 = {};
                var39 = _closure1_slot24;
                var45 = _closure1_slot0;
                var48 = _closure1_slot2;
                var36 = 42;
                var36 = var48[var36];
                var36 = var45.bind(var3)(var36);
                var37 = var36.Text;
                var36 = {};
                var38 = var5.sectionTitle;
                var36.style = var38;
                var38 = 'text-sm/semibold';
                var36.variant = var38;
                var38 = 43;
                var46 = var48[var38];
                var46 = var45.bind(var3)(var46);
                var47 = var46.intl;
                var46 = var47.format;
                var38 = var48[var38];
                var38 = var45.bind(var3)(var38);
                var38 = var38.t;
                var45 = var38.uferGG;
                var38 = {};
                var38.prefix = var41;
                var38 = var46.bind(var47)(var45, var38);
                var36.children = var38;
                var37 = var39.bind(var3)(var37, var36);
                var36 = new Array(2);
                var36[0] = var37;
                var38 = _closure1_slot6;
                var37 = {};
                var37.horizontal = var44;
                var44 = {};
                var50 = var44;
                var49 = var28;
                var45 = copyDataProperties(var50, var49);
                var49 = var5.stickersAutocompleteList;
                var50 = var44;
                var45 = copyDataProperties(var50, var49);
                var37.style = var44;
                var44 = function(arg0) { // Original name: keyExtractor, environment: var27
                    var0 = arg0;
                    var0 = var0.sticker;
                    var0 = var0.id;
                    return var0;
                };
                var37.keyExtractor = var44;
                var37.data = var43;
                var37.renderItem = var25;
                var37.showsHorizontalScrollIndicator = var40;
                var40 = _closure1_slot31;
                var37.getItemLayout = var40;
                var40 = {};
                var43 = 12;
                var40.right = var43;
                var37.contentInset = var40;
                var37 = var39.bind(var3)(var38, var37);
                var36[1] = var37;
                var30.children = var36;
                var33 = var35.bind(var3)(var34, var30);
            case 2203:
                var30 = new Array(3);
                var30[0] = var33;
                if (!var32) {
                    _fun90540_ip = 2217;
                    continue _fun90540
                }
            case 2214:
                var32 = var31;
            case 2217:
                if (!var32) {
                    _fun90540_ip = 2262;
                    continue _fun90540
                }
            case 2220:
                var35 = _closure1_slot24;
                var34 = _closure1_slot1;
                var36 = _closure1_slot2;
                var33 = 44;
                var33 = var36[var33];
                var34 = var34.bind(var3)(var33);
                var33 = {};
                var36 = var5.sectionDivider;
                var33.style = var36;
                var32 = var35.bind(var3)(var34, var33);
            case 2262:
                var30[1] = var32;
                if (!var31) {
                    _fun90540_ip = 2413;
                    continue _fun90540
                }
            case 2272:
                var34 = _closure1_slot24;
                var36 = _closure1_slot0;
                var39 = _closure1_slot2;
                var32 = 42;
                var32 = var39[var32];
                var32 = var36.bind(var3)(var32);
                var33 = var32.Text;
                var32 = {};
                var35 = var5.sectionTitle;
                var32.style = var35;
                var35 = 'text-sm/semibold';
                var32.variant = var35;
                var35 = 43;
                var37 = var39[var35];
                var37 = var36.bind(var3)(var37);
                var38 = var37.intl;
                var37 = var38.format;
                var35 = var39[var35];
                var35 = var36.bind(var3)(var35);
                var35 = var35.t;
                var36 = var35.ksAVYt;
                var35 = {};
                var40 = _closure1_slot21;
                var39 = global;
                var39 = var39.HermesInternal;
                var39 = var39.concat;
                var39 = var39.bind(var42)(var40, var41);
                var35.prefix = var39;
                var35 = var37.bind(var38)(var36, var35);
                var32.children = var35;
                var31 = var34.bind(var3)(var33, var32);
            case 2413:
                var30[2] = var31;
                var23.children = var30;
                var22 = var29.bind(var3)(var24, var23);
            case 2427:
                var21[2] = var22;
                var24 = _closure1_slot24;
                var23 = _closure1_slot6;
                var22 = {};
                var22.style = var28;
                var27 = function(arg0, arg1) { // Original name: keyExtractor, environment: var27
                    var0 = global;
                    var2 = var0.String;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var22.keyExtractor = var27;
                var22.data = var26;
                var22.renderItem = var25;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var25 = 29;
                var28 = var27[var25];
                var28 = var26.bind(var3)(var28);
                var28 = var28.getItemSeparator;
                var22.ItemSeparatorComponent = var28;
                var25 = var27[var25];
                var25 = var26.bind(var3)(var25);
                var25 = var25.getItemLayout;
                var22.getItemLayout = var25;
                var22 = var24.bind(var3)(var23, var22);
                var21[3] = var22;
                var18.children = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 2537:
                var6.children = var17;
                var9 = var10.bind(var3)(var9, var6);
                var6 = new Array(2);
                var6[0] = var9;
                var7 = var7 != var16;
                if (!var7) {
                    _fun90540_ip = 2565;
                    continue _fun90540
                }
            case 2562:
                var7 = !var8;
            case 2565:
                if (!var7) {
                    _fun90540_ip = 2633;
                    continue _fun90540
                }
            case 2568:
                var10 = _closure1_slot24;
                var9 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 45;
                var8 = var17[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.command = var16;
                var8.section = var15;
                var14 = var14.guild_id;
                var8.guildId = var14;
                var8.onPressOption = var13;
                var8.currentOption = var12;
                var8.optionStates = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 2633:
                var6[1] = var7;
                var1.children = var6;
                var4 = var4.bind(var3)(var2, var1);
                var2 = _closure1_slot24;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var5.autocompletePositionRelative;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = 'AutocompleteWrapper';
    var3.displayName = var1;
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 46;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/AutocompleteWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4832, 6445, 4699, 3433, 5555, 660, 4508, 9221, 6684, 9351, 1616, 33, 11717, 1297, 478, 671, 1464, 4855, 4665, 566, 1348, 4859, 9350, 6953, 4507, 1636, 9220, 11719, 1567, 4265, 11722, 4029, 11723, 7573, 9580, 3679, 11724, 4510, 11731, 3901, 1234, 5345, 11732, 2]);