// modules/custom_status/native/EditCustomStatusWithPreview.tsx
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
        var5 = var0.onPress;
        var0 = _closure1_slot15;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot13;
        var11 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 10;
        var0 = var9[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var6 = {
            'borderRadius': 10,
            'paddingLeft': 8
        };
        var0.style = var6;
        var6 = 'button';
        var0.accessibilityRole = var6;
        var6 = 11;
        var7 = var9[var6];
        var7 = var11.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var9[var6];
        var6 = var11.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.VkKicb;
        var6 = var7.bind(var8)(var6);
        var0.accessibilityLabel = var6;
        var0.onPress = var5;
        var5 = {
            'top': 8,
            'bottom': 8,
            'right': 8
        };
        var0.hitSlop = var5;
        var6 = _closure1_slot13;
        var8 = _closure1_slot1;
        var7 = 12;
        var4 = var9[var7];
        var5 = var8.bind(var3)(var4);
        var4 = {};
        var11 = 13;
        var11 = var9[var11];
        var11 = var8.bind(var3)(var11);
        var4.source = var11;
        var10 = var10.closeIcon;
        var4.style = var10;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.Sizes;
        var7 = var7.SMALL;
        var4.size = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.STATUS_MAX_LENGTH;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot10 = var6;
    var13 = var3.Fonts;
    var3 = var3.NOOP;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var9 = 8;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexGrow': 1,
        'padding': 16,
        'rowGap': 24
    };
    var3.container = var8;
    var8 = {};
    var8.rowGap = var9;
    var3.statusSection = var8;
    var8 = {
        'flexDirection': 'column',
        'rowGap': 4,
        'backgroundColor': null,
        'borderRadius': null,
        'padding': 12
    };
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var3.statusInput = var8;
    var12 = 'center';
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.statusInputRow = var8;
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
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_STRONG;
    var8.color = var14;
    var3.status = var8;
    var8 = {
        'fontSize': 16,
        'lineHeight': 20,
        'fontFamily': null,
        'color': null,
        'flexGrow': 1,
        'height': 'auto',
        'textAlignVertical': 'center'
    };
    var13 = var13.PRIMARY_MEDIUM;
    var8.fontFamily = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_STRONG;
    var8.color = var13;
    var3.statusText = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_MUTED;
    var8.color = var13;
    var3.inputPlaceholder = var8;
    var8 = {};
    var8.rowGap = var9;
    var3.clearAfterSection = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var8.borderRadius = var13;
    var13 = 'hidden';
    var8.overflow = var13;
    var3.clearAfterOptions = var8;
    var8 = {};
    var8.alignItems = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.shadows;
    var16 = var12.SHADOW_LOW;
    var17 = var8;
    var12 = copyDataProperties(var17, var16);
    var3.previewContainer = var8;
    var8 = {
        'tintColor': null,
        'paddingLeft': 8,
        'flexShrink': 0
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var8.tintColor = var10;
    var3.closeIcon = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.statusSectionHeader = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.customStatusLabelSection = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 41;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/native/EditCustomStatusWithPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57325: for (var _fun57325_ip = 0;;) switch (_fun57325_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.navigation;
                var _closure2_slot0 = var7;
                var2 = var0.onClose;
                var _closure2_slot1 = var2;
                var3 = var0.analyticsLocations;
                var _closure2_slot2 = var3;
                var5 = var0.prompt;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 14;
                var0 = var6[var0];
                var10 = var1.bind(var4)(var0);
                var9 = var10.useIsEligibleForCustomStatusClearAfterTimesExperiment;
                var0 = {};
                var8 = 'EditCustomStatusWithPreview';
                var0.location = var8;
                var27 = var9.bind(var10)(var0);
                var0 = 15;
                var0 = var6[var0];
                var6 = var1.bind(var4)(var0);
                var1 = var6.useIsEligibleForCustomStatusLabelsExperiment;
                var0 = {};
                var0.location = var8;
                var18 = var1.bind(var6)(var0);
                var1 = _closure1_slot4;
                var0 = var1.useRef;
                var11 = null;
                if (!(var11 == var5)) {
                    _fun57325_ip = 221;
                    continue _fun57325
                }
            case 189:
                var6 = null;
                if (!var18) {
                    _fun57325_ip = 218;
                    continue _fun57325
                }
            case 194:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 16;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var6 = var8.bind(var4)();
            case 218:
                var5 = var6;
            case 221:
                var5 = var0.bind(var1)(var5);
                _closure2_slot3 = var5;
                var8 = _closure1_slot4;
                var6 = var8.useEffect;
                var1 = new Array(1);
                var1[0] = var3;
                var0 = function() { // Environment: var22
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.OPEN_MODAL;
                    var1 = {};
                    var5 = _closure1_slot10;
                    var5 = var5.EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW;
                    var1.type = var5;
                    var5 = _closure2_slot2;
                    var1.location_stack = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var6.bind(var8)(var0, var1);
                var0 = _closure1_slot15;
                var34 = var0.bind(var4)();
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 18;
                var0 = var1[var0];
                var9 = var6.bind(var4)(var0);
                var0 = var9.useCustomStatusActivity;
                var9 = var0.bind(var9)();
                var0 = 19;
                var0 = var1[var0];
                var12 = var6.bind(var4)(var0);
                var10 = var12.useStateFromStores;
                var0 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var22
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var10.bind(var12)(var6, var0);
                _closure2_slot4 = var0;
                var6 = _closure1_slot1;
                var24 = 20;
                var1 = var1[var24];
                var1 = var6.bind(var4)(var1);
                var15 = var1.bind(var4)();
                var6 = var8.useState;
                var1 = var11 == var9;
                var10 = undefined;
                if (var1) {
                    _fun57325_ip = 379;
                    continue _fun57325
                }
            case 374:
                var10 = var9.state;
            case 379:
                var12 = var11 != var10;
                var29 = '';
                var1 = var29;
                if (!var12) {
                    _fun57325_ip = 396;
                    continue _fun57325
                }
            case 393:
                var1 = var10;
            case 396:
                var6 = var6.bind(var8)(var1);
                var1 = _closure1_slot3;
                var13 = 2;
                var1 = var1.bind(var4)(var6, var13);
                var10 = 0;
                var28 = var1[var10];
                _closure2_slot5 = var28;
                var8 = 1;
                var35 = var1[var8];
                _closure2_slot6 = var35;
                var12 = _closure1_slot4;
                var6 = var12.useState;
                var1 = var11 == var9;
                var14 = undefined;
                if (var1) {
                    _fun57325_ip = 459;
                    continue _fun57325
                }
            case 453:
                var14 = var9.emoji;
            case 459:
                var16 = var11 != var14;
                var1 = null;
                if (!var16) {
                    _fun57325_ip = 471;
                    continue _fun57325
                }
            case 468:
                var1 = var14;
            case 471:
                var1 = var6.bind(var12)(var1);
                var12 = _closure1_slot3;
                var1 = var12.bind(var4)(var1, var13);
                var25 = var1[var10];
                _closure2_slot7 = var25;
                var1 = var1[var8];
                _closure2_slot8 = var1;
                var14 = _closure1_slot4;
                var6 = var14.useState;
                var6 = var6.bind(var14)(var15);
                var6 = var12.bind(var4)(var6, var13);
                var26 = var6[var10];
                _closure2_slot9 = var26;
                var6 = var6[var8];
                _closure2_slot10 = var6;
                var6 = var5.current;
                if (!(var11 == var6)) {
                    _fun57325_ip = 604;
                    continue _fun57325
                }
            case 547:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 11;
                var8 = var13[var6];
                var8 = var12.bind(var4)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var6 = var13[var6];
                var6 = var12.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.xod367;
                var38 = var8.bind(var10)(var6);
                _fun57325_ip = 618;
                continue _fun57325;
            case 604:
                var6 = var5.current;
                var5 = var6.label;
                var38 = var5.bind(var6)();
            case 618:
                _closure2_slot11 = var38;
                var5 = _closure1_slot4;
                var8 = var5.useCallback;
                var6 = new Array(5);
                var6[0] = var28;
                var6[1] = var25;
                var6[2] = var26;
                var6[3] = var2;
                var6[4] = var3;
                var3 = function() { // Environment: var22
                    _fun57328: for (var _fun57328_ip = 0;;) switch (_fun57328_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 21;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var1);
                            var3 = {};
                            var5 = _closure2_slot5;
                            var3.text = var5;
                            var5 = _closure2_slot7;
                            var3.emojiInfo = var5;
                            var5 = _closure2_slot9;
                            var3.clearAfter = var5;
                            var5 = _closure2_slot2;
                            var3.analyticsLocations = var5;
                            var5 = _closure2_slot3;
                            var6 = var5.current;
                            var5 = null;
                            var7 = var5 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun57328_ip = 88;
                                continue _fun57328
                            }
                        case 85:
                            var5 = var6;
                        case 88:
                            var3.prompt = var5;
                            var3 = var4.bind(var0)(var3);
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 22;
                            var2 = var8[var2];
                            var2 = var7.bind(var0)(var2);
                            var4 = var2.AccessibilityAnnouncer;
                            var3 = var4.announce;
                            var2 = 11;
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
                    }
                };
                var6 = var8.bind(var5)(var3, var6);
                _closure2_slot12 = var6;
                var8 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var22
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 23;
                    var2 = var7[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.bind(var0)();
                    var6 = _closure1_slot0;
                    var1 = 22;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var3 = var1.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = 11;
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
                var16 = var8.bind(var5)(var2, var3);
                var8 = var5.useCallback;
                var3 = function(arg0) { // Environment: var22
                    _fun57330: for (var _fun57330_ip = 0;;) switch (_fun57330_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot8;
                            var1 = {};
                            var3 = var0.id;
                            var1.id = var3;
                            var4 = var0.id;
                            var3 = null;
                            if (!(var3 == var4)) {
                                _fun57330_ip = 54;
                                continue _fun57330
                            }
                        case 32:
                            var4 = var0.surrogates;
                            if (!(var3 != var4)) {
                                _fun57330_ip = 54;
                                continue _fun57330
                            }
                        case 41:
                            var5 = var0.surrogates;
                            var4 = '';
                            if (!(var4 === var5)) {
                                _fun57330_ip = 75;
                                continue _fun57330
                            }
                        case 54:
                            var4 = var0.name;
                            var5 = var3 != var4;
                            var3 = '';
                            if (!var5) {
                                _fun57330_ip = 73;
                                continue _fun57330
                            }
                        case 70:
                            var3 = var4;
                        case 73:
                            _fun57330_ip = 80;
                            continue _fun57330;
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
                var2 = new Array(0);
                var2 = var8.bind(var5)(var3, var2);
                _closure2_slot13 = var2;
                var8 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var22
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEmojiPickerActionSheet;
                    var1 = {};
                    var5 = _closure2_slot13;
                    var1.onPressEmoji = var5;
                    var4 = _closure1_slot12;
                    var4 = var4.STATUS;
                    var1.pickerIntention = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var32 = var8.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var35;
                var1 = function() { // Environment: var22
                    var3 = _closure2_slot8;
                    var0 = undefined;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot6;
                    var1 = '';
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var31 = var3.bind(var5)(var1, var2);
                var1 = var5.useRef;
                var39 = var1.bind(var5)(var11);
                _closure2_slot14 = var39;
                var3 = var5.useCallback;
                var2 = function() { // Environment: var22
                    _fun57333: for (var _fun57333_ip = 0;;) switch (_fun57333_ip) {
                        case 0:
                            var0 = _closure2_slot14;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun57333_ip = 28;
                                continue _fun57333
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
                var36 = var3.bind(var5)(var2, var1);
                var2 = var5.useRef;
                var1 = {};
                var1.statusText = var28;
                var1.statusEmoji = var25;
                var1.clearAfter = var26;
                var1 = var2.bind(var5)(var1);
                _closure2_slot15 = var1;
                var3 = var5.useMemo;
                var2 = new Array(3);
                var2[0] = var28;
                var2[1] = var25;
                var2[2] = var26;
                var1 = function() { // Environment: var22
                    _fun57334: for (var _fun57334_ip = 0;;) switch (_fun57334_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = _closure2_slot15;
                            var0 = var0.current;
                            var0 = var0.statusText;
                            var0 = var2 !== var0;
                            if (var0) {
                                _fun57334_ip = 52;
                                continue _fun57334
                            }
                        case 29:
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot15;
                            var2 = var2.current;
                            var2 = var2.statusEmoji;
                            var0 = var3 !== var2;
                        case 52:
                            if (var0) {
                                _fun57334_ip = 78;
                                continue _fun57334
                            }
                        case 55:
                            var2 = _closure2_slot9;
                            var1 = _closure2_slot15;
                            var1 = var1.current;
                            var1 = var1.clearAfter;
                            var0 = var2 !== var1;
                        case 78:
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1, var2);
                _closure2_slot16 = var1;
                var8 = var5.useMemo;
                var3 = new Array(4);
                var3[0] = var0;
                var3[1] = var28;
                var3[2] = var25;
                var3[3] = var38;
                var2 = function() { // Environment: var22
                    _fun57335: for (var _fun57335_ip = 0;;) switch (_fun57335_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            var1 = var0 != var1;
                            if (!var1) {
                                _fun57335_ip = 88;
                                continue _fun57335
                            }
                        case 16:
                            var4 = _closure1_slot13;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 25;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = _closure2_slot4;
                            var1.user = var6;
                            var6 = _closure2_slot5;
                            var1.pendingStatusText = var6;
                            var6 = _closure2_slot7;
                            var1.pendingStatusEmoji = var6;
                            var5 = _closure2_slot11;
                            var1.placeholderText = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 88:
                            return var0;
                    }
                };
                var12 = var8.bind(var5)(var2, var3);
                var3 = var5.useLayoutEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var1;
                var1 = function() { // Environment: var22
                    var3 = _closure2_slot0;
                    var2 = var3.setOptions;
                    var1 = {};
                    var0 = function() {
                        var3 = _closure1_slot13;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 26;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderTextButton;
                        var0 = {};
                        var4 = 11;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4["R3BPH+"];
                        var4 = var5.bind(var6)(var4);
                        var0.label = var4;
                        var5 = _closure2_slot12;
                        var0.onPress = var5;
                        var4 = _closure2_slot16;
                        var4 = !var4;
                        var0.disabled = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.headerRight = var0;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 27;
                    var5 = var5[var0];
                    var0 = undefined;
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.getHeaderConditionalBackButton;
                    var4 = function() { // Environment: var4
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 28;
                            var1 = var7[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var5 = _closure2_slot16;
                            var1.hasEdits = var5;
                            var6 = _closure1_slot0;
                            var5 = 29;
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.dismissKeyboard;
                            var1.onHasEdits = var5;
                            var4 = _closure1_slot11;
                            var1.resetPending = var4;
                            var3 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 30;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.close;
                                var1 = var1.bind(var2)();
                                var2 = _closure5_slot0;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onConfirm = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var1.headerLeft = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var3.bind(var5)(var1, var2);
                var1 = var11 == var0;
                var0 = null;
                if (var1) {
                    _fun57325_ip = 2169;
                    continue _fun57325
                }
            case 952:
                var3 = _closure1_slot13;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = 'always';
                var1.keyboardShouldPersistTaps = var5;
                var7 = _closure1_slot14;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var34.container;
                var5.style = var8;
                var10 = _closure1_slot13;
                var8 = {};
                var13 = var34.previewContainer;
                var8.style = var13;
                var8.children = var12;
                var10 = var10.bind(var4)(var6, var8);
                var8 = new Array(4);
                var8[0] = var10;
                var10 = {};
                var12 = var34.statusSection;
                var10.style = var12;
                var13 = _closure1_slot13;
                var12 = {};
                var14 = var34.statusSectionHeader;
                var12.style = var14;
                var17 = _closure1_slot13;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var20 = 31;
                var14 = var14[var20];
                var14 = var15.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {
                    'accessibilityRole': 'header',
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var37 = _closure1_slot0;
                var19 = _closure1_slot2;
                var21 = 11;
                var30 = var19[var21];
                var30 = var37.bind(var4)(var30);
                var33 = var30.intl;
                var30 = var33.string;
                var19 = var19[var21];
                var19 = var37.bind(var4)(var19);
                var19 = var19.t;
                if (var18) {
                    _fun57325_ip = 1157;
                    continue _fun57325
                }
            case 1142:
                var18 = var19.UcdRn2;
                var18 = var30.bind(var33)(var18);
                _fun57325_ip = 1170;
                continue _fun57325;
            case 1157:
                var19 = var19.zOdg0A;
                var18 = var30.bind(var33)(var19);
            case 1170:
                var14.children = var18;
                var14 = var17.bind(var4)(var15, var14);
                var12.children = var14;
                var13 = var13.bind(var4)(var6, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot13;
                var14 = _closure1_slot5;
                var13 = {};
                var17 = var34.statusInput;
                var13.style = var17;
                var18 = _closure1_slot14;
                var17 = {};
                var19 = var34.statusInputRow;
                var17.style = var19;
                var33 = _closure1_slot13;
                var42 = _closure1_slot0;
                var37 = _closure1_slot2;
                var19 = 10;
                var19 = var37[var19];
                var19 = var42.bind(var4)(var19);
                var30 = var19.PressableOpacity;
                var19 = {};
                var40 = var37[var21];
                var40 = var42.bind(var4)(var40);
                var41 = var40.intl;
                var40 = var41.string;
                var37 = var37[var21];
                var37 = var42.bind(var4)(var37);
                var37 = var37.t;
                var37 = var37.WkfRZP;
                var37 = var40.bind(var41)(var37);
                var19.accessibilityLabel = var37;
                var37 = {};
                var41 = var11 == var25;
                var40 = undefined;
                if (var41) {
                    _fun57325_ip = 1330;
                    continue _fun57325
                }
            case 1325:
                var40 = var25.name;
            case 1330:
                var37.text = var40;
                var19.accessibilityValue = var37;
                var37 = 'button';
                var19.accessibilityRole = var37;
                var19.onPress = var32;
                var42 = _closure1_slot13;
                var32 = _closure1_slot1;
                var37 = _closure1_slot2;
                var40 = 32;
                var40 = var37[var40];
                var41 = var32.bind(var4)(var40);
                var40 = {};
                var40.emoji = var25;
                var40.size = var24;
                var24 = var34.emoji;
                var40.style = var24;
                var24 = true;
                var40.withPlaceholder = var24;
                var40 = var42.bind(var4)(var41, var40);
                var19.children = var40;
                var30 = var33.bind(var4)(var30, var19);
                var19 = new Array(3);
                var19[0] = var30;
                var33 = _closure1_slot13;
                var30 = 33;
                var30 = var37[var30];
                var32 = var32.bind(var4)(var30);
                var30 = {};
                var30.ref = var39;
                var39 = _closure1_slot8;
                var30.maxLength = var39;
                var30.placeholder = var38;
                var38 = var34.inputPlaceholder;
                var38 = var38.color;
                var30.placeholderTextColor = var38;
                var40 = _closure1_slot0;
                var38 = var37[var21];
                var38 = var40.bind(var4)(var38);
                var39 = var38.intl;
                var38 = var39.string;
                var37 = var37[var21];
                var37 = var40.bind(var4)(var37);
                var37 = var37.t;
                var37 = var37.xalUlT;
                var37 = var38.bind(var39)(var37);
                var30.accessibilityLabel = var37;
                var30.onSubmitEditing = var36;
                var36 = var34.status;
                var30.style = var36;
                var30.value = var28;
                var30.onChange = var35;
                var35 = false;
                var30.autoCorrect = var35;
                var30.showBorder = var35;
                var30.showTopContainer = var35;
                var35 = 'none';
                var30.autoCapitalize = var35;
                var34 = var34.statusText;
                var30.inputTextStyle = var34;
                var30.multiline = var24;
                var34 = 'blurAndSubmit';
                var30.submitBehavior = var34;
                var34 = 'done';
                var30.returnKeyType = var34;
                var30.autoFocus = var24;
                var30 = var33.bind(var4)(var32, var30);
                var19[1] = var30;
                var25 = var11 != var25;
                if (var25) {
                    _fun57325_ip = 1642;
                    continue _fun57325
                }
            case 1638:
                var25 = var29 !== var28;
            case 1642:
                if (!var25) {
                    _fun57325_ip = 1665;
                    continue _fun57325
                }
            case 1645:
                var30 = _closure1_slot13;
                var29 = _closure1_slot16;
                var28 = {};
                var28.onPress = var31;
                var25 = var30.bind(var4)(var29, var28);
            case 1665:
                var19[2] = var25;
                var17.children = var19;
                var17 = var18.bind(var4)(var14, var17);
                var13.children = var17;
                var13 = var15.bind(var4)(var14, var13);
                var12[1] = var13;
                var10.children = var12;
                var10 = var7.bind(var4)(var6, var10);
                var8[1] = var10;
                var15 = _closure1_slot13;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 34;
                var12 = var17[var10];
                var12 = var18.bind(var4)(var12);
                var14 = var12.TableRowGroup;
                var12 = {};
                var19 = _closure1_slot13;
                var13 = 35;
                var17 = var17[var13];
                var17 = var18.bind(var4)(var17);
                var18 = var17.TableRow;
                var17 = {};
                var28 = _closure1_slot0;
                var25 = _closure1_slot2;
                var29 = var25[var21];
                var29 = var28.bind(var4)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var25 = var25[var21];
                var25 = var28.bind(var4)(var25);
                var28 = var25.t;
                if (var27) {
                    _fun57325_ip = 1820;
                    continue _fun57325
                }
            case 1807:
                var25 = var28.E45wvP;
                var25 = var29.bind(var30)(var25);
                _fun57325_ip = 1833;
                continue _fun57325;
            case 1820:
                var28 = var28["+14vvU"];
                var25 = var29.bind(var30)(var28);
            case 1833:
                var17.label = var25;
                var17.arrow = var24;
                var22 = function() {
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var4 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var4);
                    var4 = var5.dismissKeyboard;
                    var4 = var4.bind(var5)();
                    var4 = _closure1_slot1;
                    var2 = 36;
                    var2 = var1[var2];
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var2 = 38;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 37;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot9;
                    var2.initialValue = var6;
                    var1 = _closure2_slot10;
                    var2.onChange = var1;
                    var1 = 'ClearAfterOptionsActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var17.onPress = var22;
                var24 = _closure1_slot13;
                var22 = _closure1_slot0;
                var29 = _closure1_slot2;
                var20 = var29[var20];
                var20 = var22.bind(var4)(var20);
                var22 = var20.Text;
                var20 = {};
                var25 = 'text-sm/medium';
                var20.variant = var25;
                var28 = _closure1_slot1;
                var25 = 39;
                var25 = var29[var25];
                var25 = var28.bind(var4)(var25);
                var25 = var25.bind(var4)(var26, var27);
                var20.children = var25;
                var20 = var24.bind(var4)(var22, var20);
                var17.trailing = var20;
                var17 = var19.bind(var4)(var18, var17);
                var12.children = var17;
                var12 = var15.bind(var4)(var14, var12);
                var8[2] = var12;
                var9 = var11 != var9;
                if (!var9) {
                    _fun57325_ip = 2145;
                    continue _fun57325
                }
            case 1954:
                var12 = _closure1_slot13;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = var17[var10];
                var10 = var20.bind(var4)(var10);
                var11 = var10.TableRowGroup;
                var10 = {};
                var15 = _closure1_slot13;
                var13 = var17[var13];
                var13 = var20.bind(var4)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var22 = _closure1_slot13;
                var18 = 40;
                var18 = var17[var18];
                var18 = var20.bind(var4)(var18);
                var19 = var18.TrashIcon;
                var18 = {};
                var24 = _closure1_slot1;
                var23 = 9;
                var23 = var17[var23];
                var23 = var24.bind(var4)(var23);
                var23 = var23.colors;
                var23 = var23.TEXT_FEEDBACK_CRITICAL;
                var18.color = var23;
                var18 = var22.bind(var4)(var19, var18);
                var13.icon = var18;
                var18 = var17[var21];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.wO53tu;
                var17 = var18.bind(var19)(var17);
                var13.label = var17;
                var13.onPress = var16;
                var16 = 'danger';
                var13.variant = var16;
                var13 = var15.bind(var4)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 2145:
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 2169:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1621, 7009, 660, 1624, 33, 1297, 671, 4905, 1234, 4087, 5893, 7010, 7011, 7012, 795, 5675, 566, 7013, 7014, 3208, 7016, 7017, 12045, 8928, 4706, 9145, 3720, 7251, 3943, 7821, 5392, 5368, 4901, 3280, 12046, 1307, 12048, 3271, 2]);