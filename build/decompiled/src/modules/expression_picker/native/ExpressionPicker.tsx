// modules/expression_picker/native/ExpressionPicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var6 = var5[var10];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var12 = 2;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ExpressionPickerViewType;
    var _closure1_slot5 = var7;
    var7 = var3.ExpressionPickerOrder;
    var _closure1_slot6 = var7;
    var11 = var3.PADDING_HORIZONTAL;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'overflow': 'hidden',
        'backgroundColor': null,
        'position': 'relative'
    };
    var14 = 7;
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    var9.backgroundColor = var14;
    var9.paddingHorizontal = var11;
    var3.expressionPickerContainer = var9;
    var9 = {};
    var9.flex = var13;
    var3.expressionPickerContent = var9;
    var9 = {};
    var11 = var12 * var11;
    var9.paddingTop = var11;
    var9.paddingHorizontal = var10;
    var3.segmentedControl = var9;
    var9 = {};
    var9.paddingHorizontal = var10;
    var3.segmentedControlUnpadded = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun74036: for (var _fun74036_ip = 0;;) switch (_fun74036_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.bottomSheetRef;
                var17 = var1.bottomSheetIndex;
                var15 = var1.channel;
                var _closure2_slot0 = var15;
                var11 = var1.expressionType;
                var20 = var1.hideGifFavorites;
                var3 = undefined;
                if (!(var20 === var3)) {
                    _fun74036_ip = 46;
                    continue _fun74036
                }
            case 44:
                var20 = false;
            case 46:
                var14 = var1.onPressEmoji;
                var22 = var1.onPressSticker;
                var19 = var1.onPressGIF;
                var13 = var1.onBackspace;
                var8 = var1.visibleTabs;
                if (!(var8 === var3)) {
                    _fun74036_ip = 87;
                    continue _fun74036
                }
            case 80:
                var8 = _closure1_slot6;
            case 87:
                var21 = var1.stickerFormats;
                var7 = var1.height;
                var12 = var1.inPortalKeyboard;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot11;
                var10 = var1.bind(var3)();
                var6 = _closure1_slot3;
                var2 = var6.useRef;
                var1 = false;
                var1 = var2.bind(var6)(var1);
                _closure2_slot1 = var1;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 8;
                var4 = var2[var4];
                var5 = var1.bind(var3)(var4);
                var4 = {};
                var4.expressionType = var11;
                var4.expressionPickerTabs = var8;
                var4 = var5.bind(var3)(var4);
                var18 = var4.expressionPickerSelectedIndex;
                var11 = var4.expressionPickerViewType;
                _closure2_slot2 = var11;
                var24 = var4.expressionPickerTabStrings;
                var8 = var6.useMemo;
                var5 = new Array(1);
                var5[0] = var15;
                var4 = function() { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var8.bind(var6)(var4, var5);
                _closure2_slot3 = var4;
                var8 = var6.useEffect;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.maybeFetchTopEmojisByGuild;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var8.bind(var6)(var4, var5);
                var5 = _closure1_slot0;
                var4 = 10;
                var4 = var2[var4];
                var8 = var5.bind(var3)(var4);
                var5 = var8.useSegmentedControlState;
                var4 = {};
                var23 = 0;
                var4.pageWidth = var23;
                var4.defaultIndex = var18;
                var18 = function arg0() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 11;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var6.bind(var0)(var1);
                    var2 = var3.setKeyboardType;
                    var1 = {};
                    var5 = 12;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.KeyboardTypes;
                    var5 = var5.EXPRESSION;
                    var1.type = var5;
                    var5 = _closure1_slot6;
                    var4 = arg0;
                    var4 = var5[var4];
                    var1.context = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.onSetActiveIndex = var18;
                var23 = var24.map;
                var18 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var0.id = var1;
                    var0.label = var1;
                    var1 = null;
                    var0.page = var1;
                    return var0;
                };
                var18 = var23.bind(var24)(var18);
                var4.items = var18;
                var25 = var5.bind(var8)(var4);
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var11;
                var0 = function() { // Environment: var0
                    _fun74041: for (var _fun74041_ip = 0;;) switch (_fun74041_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = var0.current;
                            if (var1) {
                                _fun74041_ip = 173;
                                continue _fun74041
                            }
                        case 21:
                            var2 = _closure2_slot2;
                            var1 = _closure1_slot5;
                            var1 = var1.EMOJI;
                            if (!(var2 !== var1)) {
                                _fun74041_ip = 115;
                                continue _fun74041
                            }
                        case 39:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var3 = var5.trackWithMetadata;
                            var1 = _closure1_slot7;
                            var2 = var1.EXPRESSION_PICKER_OPENED;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var1.tab = var6;
                            var6 = false;
                            var1.badged = var6;
                            var1 = var3.bind(var5)(var2, var1);
                            var2 = _closure2_slot1;
                            var1 = true;
                            var2.current = var1;
                            _fun74041_ip = 235;
                            continue _fun74041;
                        case 115:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 14;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var5 = _closure1_slot8;
                            var5 = var5.CHAT;
                            var1.intention = var5;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot1;
                            var1 = true;
                            var2.current = var1;
                            _fun74041_ip = 235;
                            continue _fun74041;
                        case 173:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.trackWithMetadata;
                            var0 = _closure1_slot7;
                            var1 = var0.EXPRESSION_PICKER_TAB_CLICKED;
                            var0 = {};
                            var4 = _closure2_slot2;
                            var0.tab = var4;
                            var4 = false;
                            var0.badged = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 235:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = 15;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var2 = _closure1_slot5;
                var2 = var2.EMOJI;
                var2 = var11 === var2;
                if (var2) {
                    _fun74036_ip = 407;
                    continue _fun74036
                }
            case 393:
                var4 = _closure1_slot5;
                var4 = var4.STICKER;
                var2 = var11 === var4;
            case 407:
                var0.hasCategories = var2;
                var1 = var1.bind(var3)(var0);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsScreenReaderEnabled;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun74036_ip = 454;
                    continue _fun74036
                }
            case 450:
                var18 = {};
                _fun74036_ip = 469;
                continue _fun74036;
            case 454:
                var0 = {};
                var1 = var1.safeAreaBottomKeyboardAware;
                var0.marginBottom = var1;
                var18 = var0;
            case 469:
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var10.expressionPickerContainer;
                var4 = new Array(2);
                var4[0] = var5;
                var8 = null;
                var5 = var8 != var7;
                if (!var5) {
                    _fun74036_ip = 511;
                    continue _fun74036
                }
            case 502:
                var6 = {};
                var6.height = var7;
                var5 = var6;
            case 511:
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot4;
                var4 = {};
                if (var12) {
                    _fun74036_ip = 540;
                    continue _fun74036
                }
            case 532:
                var7 = var10.segmentedControlUnpadded;
                _fun74036_ip = 546;
                continue _fun74036;
            case 540:
                var7 = var10.segmentedControl;
            case 546:
                var4.style = var7;
                var7 = _closure1_slot9;
                var24 = _closure1_slot0;
                var26 = _closure1_slot2;
                var23 = 17;
                var23 = var26[var23];
                var23 = var24.bind(var3)(var23);
                var24 = var23.SegmentedControl;
                var23 = {};
                var23.state = var25;
                var23 = var7.bind(var3)(var24, var23);
                var4.children = var23;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var23 = var10.expressionPickerContent;
                var10 = new Array(2);
                var10[0] = var23;
                var10[1] = var18;
                var5.style = var10;
                var10 = _closure1_slot5;
                var10 = var10.EMOJI;
                if (!(var11 !== var10)) {
                    _fun74036_ip = 815;
                    continue _fun74036
                }
            case 655:
                var10 = _closure1_slot5;
                var10 = var10.GIF;
                if (!(var11 !== var10)) {
                    _fun74036_ip = 748;
                    continue _fun74036
                }
            case 669:
                var10 = _closure1_slot5;
                var10 = var10.STICKER;
                var8 = null;
                if (!(var11 === var10)) {
                    _fun74036_ip = 746;
                    continue _fun74036
                }
            case 685:
                var18 = _closure1_slot9;
                var11 = _closure1_slot1;
                var23 = _closure1_slot2;
                var10 = 20;
                var10 = var23[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.bottomSheetRef = var16;
                var10.bottomSheetIndex = var17;
                var10.channel = var15;
                var10.onPressSticker = var22;
                var10.stickerFormats = var21;
                var10.inPortalKeyboard = var12;
                var8 = var18.bind(var3)(var11, var10);
            case 746:
                _fun74036_ip = 813;
                continue _fun74036;
            case 748:
                var18 = _closure1_slot9;
                var11 = _closure1_slot1;
                var21 = _closure1_slot2;
                var10 = 19;
                var10 = var21[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.bottomSheetRef = var16;
                var21 = var15.id;
                var10.channelId = var21;
                var21 = var15.guild_id;
                var10.guildId = var21;
                var10.hideFavorites = var20;
                var10.onPressGIF = var19;
                var8 = var18.bind(var3)(var11, var10);
            case 813:
                _fun74036_ip = 876;
                continue _fun74036;
            case 815:
                var11 = _closure1_slot9;
                var10 = _closure1_slot1;
                var18 = _closure1_slot2;
                var9 = 18;
                var9 = var18[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.bottomSheetIndex = var17;
                var9.bottomSheetRef = var16;
                var9.channel = var15;
                var9.onPressEmoji = var14;
                var9.onBackspace = var13;
                var9.inPortalKeyboard = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 876:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/expression_picker/native/ExpressionPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1565, 660, 1624, 33, 1297, 671, 9290, 6993, 7795, 1467, 1567, 4302, 9291, 9292, 4070, 8188, 9293, 9356, 9370, 2]);