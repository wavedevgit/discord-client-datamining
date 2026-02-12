// modules/icymi/native/content_inventory/ReactActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var10 = var1.channel;
        var _closure2_slot0 = var10;
        var8 = var1.onOpenPicker;
        var _closure2_slot1 = var8;
        var9 = var1.onPressEmoji;
        var _closure2_slot2 = var9;
        var5 = var1.disabled;
        var1 = _closure1_slot12;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var7 = _closure1_slot5;
        var2 = var7.useCallback;
        var1 = new Array(3);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var0 = function() { // Environment: var0
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var3 = var5.bind(var0)(var1);
            var2 = var3.openEmojiPickerActionSheet;
            var1 = {
                'pickerIntention': null,
                'autoFocus': false,
                'startExpanded': false
            };
            var7 = _closure1_slot8;
            var7 = var7.REACTION;
            var1.pickerIntention = var7;
            var7 = _closure2_slot2;
            var1.onPressEmoji = var7;
            var4 = _closure2_slot0;
            var1.channel = var4;
            var4 = 12;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.ReactionTypes;
            var4 = var4.NORMAL;
            var1.reactionType = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var7 = var2.bind(var7)(var0, var1);
        var2 = _closure1_slot9;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 13;
        var0 = var10[var0];
        var0 = var9.bind(var3)(var0);
        var1 = var0.PressableHighlight;
        var0 = {};
        var0.onPress = var7;
        var7 = var6.emoji;
        var6 = new Array(1);
        var6[0] = var7;
        var0.style = var6;
        var6 = true;
        var0.accessible = var6;
        var6 = 7;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.lfIHs4;
        var6 = var7.bind(var8)(var6);
        var0.accessibilityLabel = var6;
        var0.disabled = var5;
        var4 = _closure1_slot13;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun104868: for (var _fun104868_ip = 0;;) switch (_fun104868_ip) {
            case 0:
                var0 = arg0;
                var44 = var0.content;
                var _closure2_slot0 = var44;
                var34 = var0.author;
                var25 = var0.channel;
                var5 = var0.onPressEmoji;
                var _closure2_slot1 = var5;
                var7 = var0.sendMessage;
                var _closure2_slot2 = var7;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var0 = _closure1_slot12;
                var26 = var0.bind(var3)();
                var _closure2_slot3 = var26;
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = false;
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot4;
                var2 = 2;
                var0 = var0.bind(var3)(var1, var2);
                var22 = 0;
                var20 = var0[var22];
                var _closure2_slot4 = var20;
                var17 = 1;
                var0 = var0[var17];
                var _closure2_slot5 = var0;
                var6 = 'unknown';
                var _closure2_slot6 = var6;
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var24 = 7;
                var1 = var0[var24];
                var1 = var8.bind(var3)(var1);
                var9 = var1.intl;
                var4 = var9.string;
                var1 = var0[var24];
                var1 = var8.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["5IEsGx"];
                var4 = var4.bind(var9)(var1);
                var1 = var44.content_type;
                var9 = 15;
                var0 = var0[var9];
                var0 = var8.bind(var3)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.TOP_GAME;
                if (!(var0 !== var1)) {
                    _fun104868_ip = 377;
                    continue _fun104868
                }
            case 236:
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var0 = var8.bind(var3)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.PLAYED_GAME;
                if (!(var0 !== var1)) {
                    _fun104868_ip = 377;
                    continue _fun104868
                }
            case 269:
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var0 = var8.bind(var3)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.CUSTOM_STATUS;
                var11 = var4;
                if (!(var0 === var1)) {
                    _fun104868_ip = 444;
                    continue _fun104868
                }
            case 308:
                var1 = 'hotwheels_custom_status';
                _closure2_slot6 = var1;
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = var0[var24];
                var4 = var9.bind(var3)(var4);
                var8 = var4.intl;
                var4 = var8.string;
                var0 = var0[var24];
                var0 = var9.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.umDRYM;
                var11 = var4.bind(var8)(var0);
                var6 = var1;
                _fun104868_ip = 444;
                continue _fun104868;
            case 377:
                var1 = 'hotwheels_gaming_activity';
                _closure2_slot6 = var1;
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = var0[var24];
                var4 = var9.bind(var3)(var4);
                var8 = var4.intl;
                var4 = var8.string;
                var0 = var0[var24];
                var0 = var9.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.XC5YE5;
                var11 = var4.bind(var8)(var0);
                var6 = var1;
            case 444:
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var0 = '';
                var1 = var1.bind(var4)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var1, var2);
                var21 = var0[var22];
                _closure2_slot7 = var21;
                var19 = var0[var17];
                _closure2_slot8 = var19;
                var1 = _closure1_slot5;
                var0 = var1.useRef;
                var29 = null;
                var15 = var0.bind(var1)(var29);
                _closure2_slot9 = var15;
                var1 = _closure1_slot5;
                var0 = var1.useState;
                var1 = var0.bind(var1)(var29);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var1, var2);
                var8 = var0[var22];
                var0 = var0[var17];
                _closure2_slot10 = var0;
                var4 = _closure1_slot5;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var27
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        _fun104870: for (var _fun104870_ip = 0;;) switch (_fun104870_ip) {
                            case 0:
                                var0 = _closure2_slot9;
                                var2 = var0.current;
                                var4 = null;
                                var1 = var4 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun104870_ip = 67;
                                    continue _fun104870
                                }
                            case 23:
                                var1 = var2.capture;
                                var1 = var4 == var1;
                                var0 = undefined;
                                if (var1) {
                                    _fun104870_ip = 67;
                                    continue _fun104870
                                }
                            case 38:
                                var1 = var2.capture;
                                var3 = var1.bind(var2)();
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure2_slot10;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1);
                            case 67:
                                return var0;
                        }
                    };
                    var1 = 500;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var27
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun104873: for (var _fun104873_ip = 0;;) switch (_fun104873_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun104873_ip = 194;
                                    continue _fun104873
                                }
                            case 10:
                                var4 = _closure2_slot5;
                                var2 = undefined;
                                var1 = true;
                                var1 = var4.bind(var2)(var1);
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 16;
                                var6 = var5[var1];
                                var11 = var4.bind(var2)(var6);
                                var10 = var11.itemInteracted;
                                var6 = _closure2_slot0;
                                var9 = var6.id;
                                var8 = _closure2_slot6;
                                var7 = 'press_reply_send';
                                var7 = var10.bind(var11)(var9, var8, var7);
                                var1 = var5[var1];
                                var5 = var4.bind(var2)(var1);
                                var4 = var5.feedItemActioned;
                                var1 = {};
                                var6 = var6.id;
                                var1.itemId = var6;
                                var6 = _closure2_slot6;
                                var1.itemType = var6;
                                var6 = {
                                    'actionGestureType': 'press',
                                    'actionTargetElement': 'reply_button',
                                    'actionIntentType': 'reply',
                                    'actionDestinationType': null
                                };
                                var1.actionParameters = var6;
                                var1 = var4.bind(var5)(var1);
                                var4 = _closure2_slot2;
                                var1 = _closure2_slot7;
                                var1 = var4.bind(var2)(var1);
                                SaveGenerator(address = 158);
                            case 156:
                                return var1;
                            case 158:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun104873_ip = 191;
                                    continue _fun104873
                                }
                            case 164:
                                var5 = _closure2_slot5;
                                var4 = false;
                                var4 = var5.bind(var2)(var4);
                                var4 = _closure2_slot8;
                                var3 = '';
                                var3 = var4.bind(var2)(var3);
                                return var2;
                            case 191:
                                return var1;
                            case 194:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var9 = var44.id;
                var0 = new Array(4);
                var0[0] = var9;
                var0[1] = var6;
                var0[2] = var21;
                var0[3] = var7;
                var23 = var2.bind(var4)(var1, var0);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var0 = function() { // Environment: var27
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun104876: for (var _fun104876_ip = 0;;) switch (_fun104876_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun104876_ip = 180;
                                        continue _fun104876
                                    }
                                case 10:
                                    var4 = _closure2_slot5;
                                    var2 = undefined;
                                    var1 = true;
                                    var1 = var4.bind(var2)(var1);
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 16;
                                    var6 = var5[var1];
                                    var11 = var4.bind(var2)(var6);
                                    var10 = var11.itemInteracted;
                                    var6 = _closure2_slot0;
                                    var9 = var6.id;
                                    var8 = _closure2_slot6;
                                    var7 = 'press_emoji_send';
                                    var7 = var10.bind(var11)(var9, var8, var7);
                                    var1 = var5[var1];
                                    var5 = var4.bind(var2)(var1);
                                    var4 = var5.feedItemActioned;
                                    var1 = {};
                                    var6 = var6.id;
                                    var1.itemId = var6;
                                    var6 = _closure2_slot6;
                                    var1.itemType = var6;
                                    var6 = {
                                        'actionGestureType': 'press',
                                        'actionTargetElement': 'reaction_picker_button',
                                        'actionIntentType': 'open',
                                        'actionDestinationType': null
                                    };
                                    var1.actionParameters = var6;
                                    var1 = var4.bind(var5)(var1);
                                    var4 = _closure2_slot1;
                                    var1 = arg0;
                                    var1 = var4.bind(var2)(var1);
                                    SaveGenerator(address = 157);
                                case 155:
                                    return var1;
                                case 157:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun104876_ip = 177;
                                        continue _fun104876
                                    }
                                case 163:
                                    var4 = _closure2_slot5;
                                    var3 = false;
                                    var3 = var4.bind(var2)(var3);
                                    return var2;
                                case 177:
                                    return var1;
                                case 180:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var0.bind(var3)();
                var7 = var44.id;
                var0 = new Array(3);
                var0[0] = var7;
                var0[1] = var6;
                var0[2] = var5;
                var18 = var2.bind(var4)(var1, var0);
                _closure2_slot11 = var18;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 17;
                var0 = var12[var0];
                var1 = var9.bind(var3)(var0);
                var0 = var1.useFrequentlyUsedReactionEmojis;
                var16 = var0.bind(var1)(var29);
                var1 = _closure1_slot1;
                var0 = 18;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var37 = var0.bind(var3)();
                var0 = 19;
                var0 = var12[var0];
                var2 = var9.bind(var3)(var0);
                var0 = var2.useClientThemesOverride;
                var42 = var0.bind(var2)();
                var0 = 20;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.width;
                _closure2_slot12 = var0;
                var4 = _closure1_slot5;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var27
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.min;
                    var2 = _closure2_slot12;
                    var1 = _closure1_slot7;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var0.Math;
                    var1 = var2.floor;
                    var0 = 52;
                    var0 = var3 / var0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot9;
                var0 = 21;
                var0 = var12[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var6 = _closure1_slot9;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var26.header;
                var4.style = var7;
                var10 = _closure1_slot9;
                var7 = 22;
                var7 = var12[var7];
                var7 = var9.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var7.children = var11;
                var7 = var10.bind(var3)(var9, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var26.container;
                var4.style = var7;
                var10 = _closure1_slot9;
                var9 = _closure1_slot6;
                var7 = {};
                var12 = var26.preview;
                var11 = new Array(2);
                var11[0] = var12;
                var13 = var29 == var8;
                var12 = null;
                if (!var13) {
                    _fun104868_ip = 965;
                    continue _fun104868
                }
            case 959:
                var12 = var26.loading;
            case 965:
                var11[1] = var12;
                var7.style = var11;
                var13 = _closure1_slot9;
                var41 = _closure1_slot1;
                var45 = _closure1_slot2;
                var11 = 23;
                var11 = var45[var11];
                var12 = var41.bind(var3)(var11);
                var11 = {};
                var11.ref = var15;
                var15 = {
                    'fileName': 'icymi_content',
                    'format': 'png',
                    'quality': 1
                };
                var11.options = var15;
                var31 = _closure1_slot10;
                var30 = _closure1_slot6;
                var15 = {};
                var32 = var26.base;
                var15.style = var32;
                var36 = _closure1_slot9;
                var32 = 24;
                var32 = var45[var32];
                var33 = var41.bind(var3)(var32);
                var32 = {
                    'absolute': true,
                    'wide': true,
                    'tall': true,
                    'mix': true
                };
                var43 = true;
                var38 = {};
                var35 = _closure1_slot0;
                var39 = 25;
                var40 = var45[var39];
                var40 = var35.bind(var3)(var40);
                var40 = var40.OverlayOpacity;
                var40 = var40.LEVEL_7;
                var38.dark = var40;
                var39 = var45[var39];
                var39 = var35.bind(var3)(var39);
                var39 = var39.OverlayOpacity;
                var39 = var39.LEVEL_8;
                var38.light = var39;
                var32.mixAmount = var38;
                var33 = var36.bind(var3)(var33, var32);
                var32 = new Array(2);
                var32[0] = var33;
                var36 = _closure1_slot9;
                var33 = 26;
                var33 = var45[var33];
                var33 = var35.bind(var3)(var33);
                var35 = var33.ThemeContextProvider;
                var33 = {};
                var33.gradient = var37;
                var39 = _closure1_slot9;
                var38 = _closure1_slot6;
                var37 = {};
                var46 = var26.contentContainer;
                var40 = new Array(2);
                var40[0] = var46;
                var40[1] = var42;
                var37.style = var40;
                var42 = _closure1_slot9;
                var40 = 27;
                var40 = var45[var40];
                var41 = var41.bind(var3)(var40);
                var40 = {};
                var40.content = var44;
                var40.renderForScreenshot = var43;
                var40 = var42.bind(var3)(var41, var40);
                var37.children = var40;
                var37 = var39.bind(var3)(var38, var37);
                var33.children = var37;
                var33 = var36.bind(var3)(var35, var33);
                var32[1] = var33;
                var15.children = var32;
                var15 = var31.bind(var3)(var30, var15);
                var11.children = var15;
                var11 = var13.bind(var3)(var12, var11);
                var7.children = var11;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                if (!(var29 == var8)) {
                    _fun104868_ip = 1322;
                    continue _fun104868
                }
            case 1313:
                var8 = _closure1_slot14;
                _fun104868_ip = 1866;
                continue _fun104868;
            case 1322:
                var11 = _closure1_slot10;
                var10 = _closure1_slot11;
                var9 = {};
                var13 = _closure1_slot6;
                var12 = {};
                var30 = var26.emojis;
                var15 = new Array(2);
                var15[0] = var30;
                var29 = null;
                if (!var20) {
                    _fun104868_ip = 1363;
                    continue _fun104868
                }
            case 1357:
                var29 = var26.submitting;
            case 1363:
                var15[1] = var29;
                var12.style = var15;
                var15 = var16.slice;
                var14 = var14 - var17;
                var16 = var15.bind(var16)(var22, var14);
                var15 = var16.map;
                var14 = function(arg0) { // Environment: var27
                    _fun104879: for (var _fun104879_ip = 0;;) switch (_fun104879_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var1 = var5.id;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun104879_ip = 191;
                                continue _fun104879
                            }
                        case 23:
                            var3 = _closure1_slot9;
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 13;
                            var0 = var9[var0];
                            var2 = undefined;
                            var0 = var6.bind(var2)(var0);
                            var1 = var0.PressableHighlight;
                            var0 = {};
                            var8 = function() {
                                var2 = _closure2_slot11;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onPress = var8;
                            var10 = _closure2_slot3;
                            var11 = var10.emoji;
                            var0.style = var11;
                            var8 = _closure2_slot4;
                            var0.disabled = var8;
                            var8 = _closure1_slot9;
                            var4 = 22;
                            var4 = var9[var4];
                            var4 = var6.bind(var2)(var4);
                            var6 = var4.Text;
                            var4 = {
                                'variant': 'text-md/medium',
                                'color': 'interactive-text-default',
                                'style': null,
                                'allowFontScaling': false
                            };
                            var11 = var10.defaultEmoji;
                            var9 = new Array(2);
                            var9[0] = var11;
                            var10 = var10.emojiText;
                            var9[1] = var10;
                            var4.style = var9;
                            var9 = var5.surrogates;
                            var4.children = var9;
                            var4 = var8.bind(var2)(var6, var4);
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            _fun104879_ip = 398;
                            continue _fun104879;
                        case 191:
                            var4 = _closure1_slot9;
                            var2 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var1 = 13;
                            var1 = var12[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.PressableHighlight;
                            var1 = {};
                            var7 = function() {
                                var2 = _closure2_slot11;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onPress = var7;
                            var10 = _closure2_slot3;
                            var8 = var10.emoji;
                            var1.style = var8;
                            var7 = _closure2_slot4;
                            var1.disabled = var7;
                            var8 = _closure1_slot9;
                            var11 = _closure1_slot1;
                            var6 = 28;
                            var6 = var12[var6];
                            var7 = var11.bind(var3)(var6);
                            var6 = {};
                            var13 = var10.defaultEmoji;
                            var9 = new Array(2);
                            var9[0] = var13;
                            var10 = var10.emojiImage;
                            var9[1] = var10;
                            var6.style = var9;
                            var9 = {};
                            var10 = 29;
                            var10 = var12[var10];
                            var12 = var11.bind(var3)(var10);
                            var11 = var12.getEmojiURL;
                            var10 = {};
                            var13 = var5.id;
                            var10.id = var13;
                            var13 = var5.animated;
                            var10.animated = var13;
                            var13 = 48;
                            var10.size = var13;
                            var10 = var11.bind(var12)(var10);
                            var9.uri = var10;
                            var6.source = var9;
                            var5 = var5.id;
                            var5 = var8.bind(var3)(var7, var6, var5);
                            var1.children = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 398:
                            return var0;
                    }
                };
                var15 = var15.bind(var16)(var14);
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot9;
                var16 = _closure1_slot15;
                var15 = {};
                var27 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var4 = var3[var1];
                    var0 = undefined;
                    var10 = var2.bind(var0)(var4);
                    var9 = var10.itemInteracted;
                    var5 = _closure2_slot0;
                    var8 = var5.id;
                    var7 = _closure2_slot6;
                    var6 = 'press_reply_reaction_picker';
                    var6 = var9.bind(var10)(var8, var7, var6);
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.feedItemActioned;
                    var1 = {};
                    var5 = var5.id;
                    var1.itemId = var5;
                    var4 = _closure2_slot6;
                    var1.itemType = var4;
                    var4 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'reaction_picker_button',
                        'actionIntentType': 'open',
                        'actionDestinationType': null
                    };
                    var1.actionParameters = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var15.onOpenPicker = var27;
                var15.channel = var25;
                var15.onPressEmoji = var18;
                var15.disabled = var20;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var12.children = var14;
                var13 = var11.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot10;
                var14 = _closure1_slot6;
                var13 = {};
                var16 = var26.inputRow;
                var13.style = var16;
                var18 = _closure1_slot9;
                var25 = _closure1_slot0;
                var30 = _closure1_slot2;
                var16 = 30;
                var16 = var30[var16];
                var16 = var25.bind(var3)(var16);
                var17 = var16.TextInput;
                var16 = {
                    'containerStyle': null,
                    'grow': true,
                    'isRound': true
                };
                var26 = var26.input;
                var16.containerStyle = var26;
                var26 = var30[var24];
                var26 = var25.bind(var3)(var26);
                var31 = var26.intl;
                var29 = var31.formatToPlainString;
                var26 = var30[var24];
                var26 = var25.bind(var3)(var26);
                var26 = var26.t;
                var27 = var26.m3dK5W;
                var26 = {};
                var32 = 31;
                var32 = var30[var32];
                var33 = var25.bind(var3)(var32);
                var32 = var33.getName;
                var32 = var32.bind(var33)(var34);
                var26.username = var32;
                var26 = var29.bind(var31)(var27, var26);
                var16.placeholder = var26;
                var16.value = var21;
                var16.onChange = var19;
                var16.isDisabled = var20;
                var17 = var18.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot9;
                var17 = 32;
                var17 = var30[var17];
                var17 = var25.bind(var3)(var17);
                var18 = var17.IconButton;
                var17 = {};
                var26 = var30[var24];
                var26 = var25.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var24 = var30[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.oeb1vg;
                var24 = var26.bind(var27)(var24);
                var17.accessibilityLabel = var24;
                var27 = _closure1_slot9;
                var24 = 33;
                var24 = var30[var24];
                var24 = var25.bind(var3)(var24);
                var26 = var24.SendMessageIcon;
                var25 = {};
                var24 = 'md';
                var25.size = var24;
                var29 = _closure1_slot1;
                var28 = 9;
                var28 = var30[var28];
                var28 = var29.bind(var3)(var28);
                var28 = var28.unsafe_rawColors;
                var28 = var28.WHITE;
                var25.color = var28;
                var25 = var27.bind(var3)(var26, var25);
                var17.icon = var25;
                var17.size = var24;
                var17.onPress = var23;
                var21 = var21.length;
                var21 = var22 === var21;
                var17.disabled = var21;
                var17.loading = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1866:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var3 = var5[var13];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var8 = var3.jsxs;
    var _closure1_slot10 = var8;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var12 = 8;
    var3 = var5[var12];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {
        'width': '100%',
        'display': 'flex',
        'alignItems': 'center',
        'padding': 8
    };
    var3.header = var10;
    var10 = {};
    var11 = 12;
    var10.gap = var11;
    var3.container = var10;
    var10 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'borderWidth': 1
    };
    var11 = 9;
    var14 = var5[var11];
    var14 = var6.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var10.borderRadius = var14;
    var14 = var5[var11];
    var14 = var6.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_STRONG;
    var10.borderColor = var14;
    var3.preview = var10;
    var10 = {};
    var14 = 0.5;
    var10.opacity = var14;
    var3.loading = var10;
    var10 = {};
    var14 = 'relative';
    var10.position = var14;
    var3.base = var10;
    var10 = {};
    var14 = var5[var11];
    var14 = var6.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var14;
    var3.contentContainer = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.inputRow = var10;
    var10 = {};
    var10.flex = var13;
    var13 = var5[var11];
    var13 = var6.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10.borderRadius = var13;
    var3.input = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.emojis = var10;
    var10 = {};
    var13 = 0.6;
    var10.opacity = var13;
    var3.submitting = var10;
    var10 = {};
    var10.padding = var12;
    var12 = var5[var11];
    var12 = var6.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var10.borderRadius = var12;
    var11 = var5[var11];
    var11 = var6.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10.backgroundColor = var11;
    var3.emoji = var10;
    var10 = {
        'width': 24,
        'height': 24
    };
    var3.defaultEmoji = var10;
    var10 = {
        'resizeMode': 'contain',
        'width': 24,
        'height': 24
    };
    var3.emojiImage = var10;
    var10 = {
        'lineHeight': 24,
        'fontSize': 20,
        'textAlign': 'center',
        'paddingTop': 2
    };
    var3.emojiText = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ReactionIcon;
    var3 = {};
    var9 = 'md';
    var3.size = var9;
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot13 = var3;
    var3 = 14;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot14 = var3;
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/content_inventory/ReactActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun104883: for (var _fun104883_ip = 0;;) switch (_fun104883_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun104883_ip = 92;
                    continue _fun104883
                }
            case 9:
                var11 = {};
                var4 = undefined;
                var10 = var1;
                var9 = undefined;
                var10 = copyDataProperties(var11, var10, var9);
                var3 = _closure1_slot9;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 34;
                var0 = var6[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.ICYMIContextProvider;
                var0 = {};
                var7 = _closure1_slot9;
                var6 = _closure1_slot16;
                var5 = {};
                var11 = var5;
                var8 = copyDataProperties(var11, var10);
                var5 = var7.bind(var4)(var6, var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 92:
                var10 = "Cannot destructure 'undefined' or 'null'.";
                var11 = var1;
                var0 = throwTypeError(var11, var10);
                var0 = undefined;
                throw var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        _fun104884: for (var _fun104884_ip = 0;;) switch (_fun104884_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.reply;
                var6 = var0.username;
                var15 = var0.status;
                var14 = var0.emojiStr;
                var9 = var0.attachments;
                var2 = var0.isForward;
                var10 = undefined;
                if (!(var2 === var10)) {
                    _fun104884_ip = 47;
                    continue _fun104884
                }
            case 45:
                var2 = false;
            case 47:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var11 = 7;
                var4 = var0[var11];
                var4 = var7.bind(var10)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var0 = var0[var11];
                var0 = var7.bind(var10)(var0);
                var0 = var0.t;
                if (var2) {
                    _fun104884_ip = 119;
                    continue _fun104884
                }
            case 97:
                var7 = var0.XPQgL2;
                var2 = {};
                var2.username = var6;
                var8 = var4.bind(var5)(var7, var2);
                _fun104884_ip = 139;
                continue _fun104884;
            case 119:
                var2 = var0.S5JNyW;
                var0 = {};
                var0.username = var6;
                var8 = var4.bind(var5)(var2, var0);
            case 139:
                var2 = new Array(0);
                var7 = var2.push;
                var0 = global;
                var4 = var0.HermesInternal;
                var6 = var4.concat;
                var5 = '> -# *';
                var4 = '*';
                var6 = var6.bind(var5)(var8, var4);
                var6 = var7.bind(var2)(var6);
                var6 = var15.length;
                var7 = 0;
                var6 = var6 > var7;
                if (var6) {
                    _fun104884_ip = 205;
                    continue _fun104884
                }
            case 196:
                var8 = var14.length;
                var6 = var8 > var7;
            case 205:
                if (!var6) {
                    _fun104884_ip = 248;
                    continue _fun104884
                }
            case 208:
                var8 = var2.push;
                var6 = var0.HermesInternal;
                var13 = var6.concat;
                var12 = '> ';
                var6 = ' ';
                var6 = var13.bind(var12)(var14, var6, var15);
                var6 = var8.bind(var2)(var6);
            case 248:
                var6 = null;
                if (!(var6 != var9)) {
                    _fun104884_ip = 357;
                    continue _fun104884
                }
            case 254:
                var6 = var9.length;
                if (!(var6 > var7)) {
                    _fun104884_ip = 357;
                    continue _fun104884
                }
            case 263:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = var3[var11];
                var7 = var6.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var3 = var3[var11];
                var3 = var6.bind(var10)(var3);
                var3 = var3.t;
                var6 = var3["JiNPo+"];
                var3 = {};
                var9 = var9.length;
                var3.attachmentsCount = var9;
                var3 = var7.bind(var8)(var6, var3);
                var0 = var0.HermesInternal;
                var0 = var0.concat;
                var3 = var0.bind(var5)(var3, var4);
                var0 = var2.push;
                var0 = var0.bind(var2)(var3);
            case 357:
                var0 = var2.push;
                var0 = var0.bind(var2)(var1);
                var1 = var2.join;
                var0 = '\n';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getStatusReplyContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 4908, 1624, 33, 1234, 1297, 671, 7249, 7087, 6647, 4880, 10660, 6936, 7678, 7090, 3243, 7718, 1464, 5232, 3938, 13633, 7690, 3197, 3161, 13622, 5426, 1417, 5464, 3237, 7585, 3257, 13570, 2]);