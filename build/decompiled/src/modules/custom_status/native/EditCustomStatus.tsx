// modules/custom_status/native/EditCustomStatus.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.STATUS_MAX_LENGTH;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot9 = var6;
    var11 = var3.Fonts;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexGrow': 1,
        'padding': 16,
        'rowGap': 32
    };
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'backgroundColor': null,
        'borderRadius': null,
        'padding': 12
    };
    var9 = 8;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var3.statusContainer = var8;
    var8 = {};
    var8.marginRight = var9;
    var3.emoji = var8;
    var8 = {
        'color': null,
        'lineHeight': 16,
        'flexGrow': 1,
        'alignSelf': 'flex-start',
        'paddingVertical': 0,
        'paddingHorizontal': 0
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_STRONG;
    var8.color = var12;
    var3.status = var8;
    var8 = {
        'minHeight': 80,
        'fontSize': 16,
        'lineHeight': 20,
        'fontFamily': null,
        'color': null,
        'flexGrow': 1,
        'height': 'auto'
    };
    var11 = var11.PRIMARY_MEDIUM;
    var8.fontFamily = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_STRONG;
    var8.color = var11;
    var3.statusText = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var8.color = var11;
    var3.inputPlaceholder = var8;
    var8 = {};
    var8.rowGap = var9;
    var3.clearAfterSection = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var9 = 'hidden';
    var8.overflow = var9;
    var3.clearAfterOptions = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/native/EditCustomStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92309: for (var _fun92309_ip = 0;;) switch (_fun92309_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.navigation;
                var _closure2_slot0 = var5;
                var1 = var0.onClose;
                var _closure2_slot1 = var1;
                var0 = var0.analyticsLocations;
                var _closure2_slot2 = var0;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var4 = _closure1_slot4;
                var6 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var13
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot8;
                    var2 = var1.OPEN_MODAL;
                    var1 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.EDIT_CUSTOM_STATUS_MODAL;
                    var1.type = var5;
                    var5 = _closure2_slot2;
                    var1.location_stack = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var6.bind(var4)(var0, var2);
                var0 = _closure1_slot13;
                var21 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useCustomStatusActivity;
                var9 = var0.bind(var2)();
                var2 = _closure1_slot1;
                var0 = 11;
                var0 = var6[var0];
                var0 = var2.bind(var3)(var0);
                var11 = var0.bind(var3)();
                var2 = var4.useState;
                var8 = null;
                var0 = var8 == var9;
                var6 = undefined;
                if (var0) {
                    _fun92309_ip = 185;
                    continue _fun92309
                }
            case 180:
                var6 = var9.state;
            case 185:
                var7 = var8 != var6;
                var0 = '';
                if (!var7) {
                    _fun92309_ip = 199;
                    continue _fun92309
                }
            case 196:
                var0 = var6;
            case 199:
                var2 = var2.bind(var4)(var0);
                var0 = _closure1_slot3;
                var10 = 2;
                var0 = var0.bind(var3)(var2, var10);
                var6 = 0;
                var24 = var0[var6];
                _closure2_slot3 = var24;
                var2 = 1;
                var23 = var0[var2];
                var7 = _closure1_slot4;
                var4 = var7.useState;
                var0 = var8 == var9;
                var12 = undefined;
                if (var0) {
                    _fun92309_ip = 258;
                    continue _fun92309
                }
            case 252:
                var12 = var9.emoji;
            case 258:
                var14 = var8 != var12;
                var0 = null;
                if (!var14) {
                    _fun92309_ip = 270;
                    continue _fun92309
                }
            case 267:
                var0 = var12;
            case 270:
                var0 = var4.bind(var7)(var0);
                var7 = _closure1_slot3;
                var0 = var7.bind(var3)(var0, var10);
                var17 = var0[var6];
                _closure2_slot4 = var17;
                var0 = var0[var2];
                _closure2_slot5 = var0;
                var4 = _closure1_slot4;
                var0 = var4.useState;
                var0 = var0.bind(var4)(var11);
                var0 = var7.bind(var3)(var0, var10);
                var15 = var0[var6];
                _closure2_slot6 = var15;
                var0 = var0[var2];
                _closure2_slot7 = var0;
                var6 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var24;
                var2[1] = var17;
                var2[2] = var15;
                var2[3] = var1;
                var0 = function() { // Environment: var13
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 12;
                    var1 = var8[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var1);
                    var3 = {};
                    var5 = _closure2_slot3;
                    var3.text = var5;
                    var5 = _closure2_slot4;
                    var3.emojiInfo = var5;
                    var5 = _closure2_slot6;
                    var3.clearAfter = var5;
                    var3 = var4.bind(var0)(var3);
                    var7 = _closure1_slot0;
                    var2 = 13;
                    var2 = var8[var2];
                    var2 = var7.bind(var0)(var2);
                    var4 = var2.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var2 = 14;
                    var5 = var8[var2];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var0)(var2);
                    var2 = var2.t;
                    var2 = var2.Og40Yn;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = var6.bind(var4)(var0, var2);
                _closure2_slot8 = var0;
                var6 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var13
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 15;
                    var2 = var7[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.bind(var0)();
                    var6 = _closure1_slot0;
                    var1 = 13;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var3 = var1.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = 14;
                    var4 = var7[var1];
                    var4 = var6.bind(var0)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.t;
                    var1 = var1.YdUwBS;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var14 = var6.bind(var4)(var1, var2);
                var6 = var4.useCallback;
                var2 = function(arg0) { // Environment: var13
                    _fun92313: for (var _fun92313_ip = 0;;) switch (_fun92313_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot5;
                            var1 = {};
                            var3 = var0.id;
                            var1.id = var3;
                            var4 = var0.id;
                            var3 = null;
                            if (!(var3 == var4)) {
                                _fun92313_ip = 54;
                                continue _fun92313
                            }
                        case 32:
                            var4 = var0.surrogates;
                            if (!(var3 != var4)) {
                                _fun92313_ip = 54;
                                continue _fun92313
                            }
                        case 41:
                            var5 = var0.surrogates;
                            var4 = '';
                            if (!(var4 === var5)) {
                                _fun92313_ip = 75;
                                continue _fun92313
                            }
                        case 54:
                            var4 = var0.name;
                            var5 = var3 != var4;
                            var3 = '';
                            if (!var5) {
                                _fun92313_ip = 73;
                                continue _fun92313
                            }
                        case 70:
                            var3 = var4;
                        case 73:
                            _fun92313_ip = 80;
                            continue _fun92313;
                        case 75:
                            var3 = var0.surrogates;
                        case 80:
                            var1.name = var3;
                            var0 = var0.animated;
                            var1.animated = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1 = new Array(0);
                var1 = var6.bind(var4)(var2, var1);
                _closure2_slot9 = var1;
                var6 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEmojiPickerActionSheet;
                    var1 = {};
                    var5 = _closure2_slot9;
                    var1.onPressEmoji = var5;
                    var4 = _closure1_slot10;
                    var4 = var4.STATUS;
                    var1.pickerIntention = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var11 = var6.bind(var4)(var1, var2);
                var1 = var4.useRef;
                var26 = var1.bind(var4)(var8);
                _closure2_slot10 = var26;
                var6 = var4.useCallback;
                var2 = function() { // Environment: var13
                    _fun92315: for (var _fun92315_ip = 0;;) switch (_fun92315_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun92315_ip = 28;
                                continue _fun92315
                            }
                        case 18:
                            var0 = var1.blur;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = new Array(0);
                var25 = var6.bind(var4)(var2, var1);
                var2 = var4.useRef;
                var1 = {};
                var1.statusText = var24;
                var1.statusEmoji = var17;
                var1.clearAfter = var15;
                var1 = var2.bind(var4)(var1);
                _closure2_slot11 = var1;
                var2 = var4.useLayoutEffect;
                var1 = new Array(6);
                var1[0] = var5;
                var1[1] = var0;
                var1[2] = var24;
                var1[3] = var17;
                var1[4] = var15;
                var1[5] = var21;
                var0 = function() { // Environment: var13
                    _fun92316: for (var _fun92316_ip = 0;;) switch (_fun92316_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = var1.trim;
                            var1 = var0.bind(var1)();
                            var0 = '';
                            var6 = var0 === var1;
                            if (!var6) {
                                _fun92316_ip = 38;
                                continue _fun92316
                            }
                        case 28:
                            var1 = _closure2_slot4;
                            var0 = null;
                            var6 = var0 == var1;
                        case 38:
                            if (var6) {
                                _fun92316_ip = 119;
                                continue _fun92316
                            }
                        case 41:
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot11;
                            var0 = var0.current;
                            var0 = var0.statusText;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun92316_ip = 90;
                                continue _fun92316
                            }
                        case 67:
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot11;
                            var1 = var1.current;
                            var1 = var1.statusEmoji;
                            var0 = var2 === var1;
                        case 90:
                            if (!var0) {
                                _fun92316_ip = 116;
                                continue _fun92316
                            }
                        case 93:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot11;
                            var1 = var1.current;
                            var1 = var1.clearAfter;
                            var0 = var2 === var1;
                        case 116:
                            var6 = var0;
                        case 119:
                            var3 = _closure2_slot0;
                            var2 = var3.setOptions;
                            var1 = {};
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun92316_ip = 224;
                                continue _fun92316
                            }
                        case 138:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 17;
                            var6 = var12[var6];
                            var8 = var11.bind(var0)(var6);
                            var7 = var8.getHeaderTextButton;
                            var6 = 14;
                            var9 = var12[var6];
                            var9 = var11.bind(var0)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var12[var6];
                            var6 = var11.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6["R3BPH+"];
                            var6 = var9.bind(var10)(var6);
                            var5 = _closure2_slot8;
                            var4 = var7.bind(var8)(var6, var5);
                        case 224:
                            var1.headerRight = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = 'always';
                var0.keyboardShouldPersistTaps = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var21.container;
                var4.style = var7;
                var7 = {};
                var10 = var21.statusContainer;
                var7.style = var10;
                var27 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 18;
                var10 = var12[var10];
                var10 = var27.bind(var3)(var10);
                var18 = var10.PressableOpacity;
                var10 = {};
                var19 = 14;
                var16 = var12[var19];
                var16 = var27.bind(var3)(var16);
                var22 = var16.intl;
                var16 = var22.string;
                var12 = var12[var19];
                var12 = var27.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.WkfRZP;
                var12 = var16.bind(var22)(var12);
                var10.accessibilityLabel = var12;
                var12 = {};
                var22 = var8 == var17;
                var16 = undefined;
                if (var22) {
                    _fun92309_ip = 716;
                    continue _fun92309
                }
            case 711:
                var16 = var17.name;
            case 716:
                var12.text = var16;
                var10.accessibilityValue = var12;
                var12 = 'button';
                var10.accessibilityRole = var12;
                var10.onPress = var11;
                var12 = _closure1_slot11;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var22 = 19;
                var22 = var16[var22];
                var28 = var11.bind(var3)(var22);
                var27 = {};
                var27.emoji = var17;
                var17 = 20;
                var27.size = var17;
                var22 = var21.emoji;
                var27.style = var22;
                var22 = true;
                var27.withPlaceholder = var22;
                var27 = var12.bind(var3)(var28, var27);
                var10.children = var27;
                var18 = var2.bind(var3)(var18, var10);
                var10 = new Array(2);
                var10[0] = var18;
                var17 = var16[var17];
                var18 = var11.bind(var3)(var17);
                var17 = {};
                var17.ref = var26;
                var26 = _closure1_slot7;
                var17.maxLength = var26;
                var29 = _closure1_slot0;
                var26 = var16[var19];
                var26 = var29.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var16[var19];
                var26 = var29.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.TM2l8B;
                var26 = var27.bind(var28)(var26);
                var17.placeholder = var26;
                var26 = var21.inputPlaceholder;
                var26 = var26.color;
                var17.placeholderTextColor = var26;
                var26 = var16[var19];
                var26 = var29.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var16[var19];
                var26 = var29.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.xalUlT;
                var26 = var27.bind(var28)(var26);
                var17.accessibilityLabel = var26;
                var17.onSubmitEditing = var25;
                var25 = var21.status;
                var17.style = var25;
                var17.value = var24;
                var17.onChange = var23;
                var17.multiline = var22;
                var23 = false;
                var17.autoCorrect = var23;
                var17.showBorder = var23;
                var17.showTopContainer = var23;
                var23 = 'top';
                var17.textAlignVertical = var23;
                var23 = 'none';
                var17.autoCapitalize = var23;
                var17.showCharactersRemaining = var22;
                var21 = var21.statusText;
                var17.inputTextStyle = var21;
                var17 = var12.bind(var3)(var18, var17);
                var10[1] = var17;
                var7.children = var10;
                var10 = var6.bind(var3)(var5, var7);
                var7 = new Array(3);
                var7[0] = var10;
                var10 = 21;
                var10 = var16[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.value = var15;
                var13 = function arg0() {
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var10.onChange = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7[1] = var10;
                var8 = var8 != var9;
                if (!var8) {
                    _fun92309_ip = 1305;
                    continue _fun92309
                }
            case 1116:
                var11 = _closure1_slot11;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 22;
                var9 = var15[var9];
                var9 = var18.bind(var3)(var9);
                var10 = var9.TableRowGroup;
                var9 = {};
                var12 = 23;
                var12 = var15[var12];
                var12 = var18.bind(var3)(var12);
                var13 = var12.TableRow;
                var12 = {};
                var16 = 24;
                var16 = var15[var16];
                var16 = var18.bind(var3)(var16);
                var17 = var16.TrashIcon;
                var16 = {};
                var21 = _closure1_slot1;
                var20 = 8;
                var20 = var15[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.colors;
                var20 = var20.TEXT_FEEDBACK_CRITICAL;
                var16.color = var20;
                var16 = var11.bind(var3)(var17, var16);
                var12.icon = var16;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.wO53tu;
                var15 = var16.bind(var17)(var15);
                var12.label = var15;
                var12.onPress = var14;
                var14 = 'danger';
                var12.variant = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1305:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 6981, 660, 1624, 33, 1297, 671, 795, 5667, 6985, 6986, 3206, 1234, 6988, 6989, 4705, 4902, 7794, 5387, 12027, 5363, 4898, 3269, 2]);