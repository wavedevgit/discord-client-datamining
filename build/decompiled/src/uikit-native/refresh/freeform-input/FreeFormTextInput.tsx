// uikit-native/refresh/freeform-input/FreeFormTextInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ClearButton, environment: var1
        var0 = arg0;
        var5 = var0.onPress;
        var0 = _closure1_slot9;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var12 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 5;
        var0 = var9[var0];
        var0 = var12.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var11 = 8;
        var6 = {
            'borderRadius': 20,
            'padding': 8
        };
        var0.style = var6;
        var6 = 'button';
        var0.accessibilityRole = var6;
        var6 = 6;
        var7 = var9[var6];
        var7 = var12.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var9[var6];
        var6 = var12.bind(var3)(var6);
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
        var6 = _closure1_slot7;
        var8 = _closure1_slot1;
        var7 = 7;
        var4 = var9[var7];
        var5 = var8.bind(var3)(var4);
        var4 = {};
        var11 = var9[var11];
        var11 = var8.bind(var3)(var11);
        var4.source = var11;
        var10 = var10.closeIcon;
        var4.style = var10;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.Sizes;
        var7 = var7.MEDIUM;
        var4.size = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TouchableWithoutFeedback;
    var _closure1_slot4 = var6;
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.TouchableOpacity;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var10 = {
        'backgroundColor': null,
        'height': 48,
        'borderWidth': 1,
        'borderColor': null,
        'borderRadius': null,
        'paddingRight': 6,
        'paddingLeft': 12,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = 4;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var3 = var3.colors;
    var3 = var3.BACKGROUND_BASE_LOWEST;
    var10.backgroundColor = var3;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var3 = var3.colors;
    var3 = var3.BACKGROUND_BASE_LOWEST;
    var10.borderColor = var3;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var3 = var3.radii;
    var3 = var3.xs;
    var10.borderRadius = var3;
    var3 = 12;
    var14 = 'row';
    var6.container = var10;
    var10 = {};
    var10.flexDirection = var14;
    var6.onPress = var10;
    var10 = {};
    var10.flex = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var10.color = var13;
    var6.input = var10;
    var10 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_400;
    var10.borderColor = var13;
    var6.error = var10;
    var10 = {
        'tintColor': null,
        'paddingLeft': 8,
        'flexShrink': 0
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_DEFAULT;
    var10.tintColor = var13;
    var6.closeIcon = var10;
    var10 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var10.color = var11;
    var6.placeholder = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot9 = var6;
    var6 = var7.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun51494: for (var _fun51494_ip = 0;;) switch (_fun51494_ip) {
            case 0:
                var10 = arg0;
                var0 = var10.style;
                var2 = var10.error;
                var7 = var10.renderLeadingComponent;
                var13 = var10.renderTrailingComponent;
                var19 = var10.onChangeText;
                var _closure2_slot0 = var19;
                var1 = var10.onFocus;
                var _closure2_slot1 = var1;
                var23 = var10.accessibilityRole;
                var1 = var10.onBlur;
                var _closure2_slot2 = var1;
                var20 = var10.value;
                var1 = var10.onPress;
                var _closure2_slot3 = var1;
                var16 = var10.editable;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun51494_ip = 90;
                    continue _fun51494
                }
            case 88:
                var16 = true;
            case 90:
                var _closure2_slot4 = var16;
                var22 = var10.accessibilityLabel;
                var5 = var10.accessibilityHint;
                var6 = var10.forceAccessibleContainer;
                if (!(var6 === var3)) {
                    _fun51494_ip = 117;
                    continue _fun51494
                }
            case 115:
                var6 = false;
            case 117:
                var11 = var10.clearButtonVisibility;
                if (!(var11 === var3)) {
                    _fun51494_ip = 162;
                    continue _fun51494
                }
            case 127:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 9;
                var4 = var9[var4];
                var4 = var8.bind(var3)(var4);
                var4 = var4.ClearButtonVisibility;
                var11 = var4.WITH_CONTENT;
            case 162:
                var9 = {
                    'style': 0,
                    'error': 0,
                    'renderLeadingComponent': 0,
                    'renderTrailingComponent': 0,
                    'onChangeText': 0,
                    'onFocus': 0,
                    'accessibilityRole': 0,
                    'onBlur': 0,
                    'value': 0,
                    'onPress': 0,
                    'editable': 0,
                    'accessibilityLabel': 0,
                    'accessibilityHint': 0,
                    'forceAccessibleContainer': 0,
                    'clearButtonVisibility': 0
                };
                var8 = null;
                var28 = var9;
                var27 = null;
                var4 = silentSetPrototypeOf(var28, var27);
                var28 = {};
                var27 = var10;
                var26 = var9;
                var17 = copyDataProperties(var28, var27, var26);
                var _closure2_slot5 = var3;
                var4 = _closure1_slot9;
                var18 = var4.bind(var3)();
                var15 = _closure1_slot3;
                var4 = var15.useRef;
                var21 = var4.bind(var15)(var8);
                _closure2_slot5 = var21;
                var14 = var15.useImperativeHandle;
                var10 = arg1;
                var4 = function() { // Environment: var12
                    var0 = _closure2_slot5;
                    var0 = var0.current;
                    return var0;
                };
                var4 = var14.bind(var15)(var10, var4);
                var10 = _closure1_slot0;
                var4 = _closure1_slot2;
                var15 = 9;
                var4 = var4[var15];
                var4 = var10.bind(var3)(var4);
                var4 = var4.ClearButtonVisibility;
                var4 = var4.ALWAYS;
                var10 = true;
                if (!(var4 !== var11)) {
                    _fun51494_ip = 380;
                    continue _fun51494
                }
            case 290:
                var14 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var15];
                var4 = var14.bind(var3)(var4);
                var4 = var4.ClearButtonVisibility;
                var4 = var4.WITH_CONTENT;
                if (!(var4 !== var11)) {
                    _fun51494_ip = 362;
                    continue _fun51494
                }
            case 323:
                var14 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var15];
                var4 = var14.bind(var3)(var4);
                var4 = var4.ClearButtonVisibility;
                var4 = var4.NEVER;
                var10 = undefined;
                if (!(var4 === var11)) {
                    _fun51494_ip = 380;
                    continue _fun51494
                }
            case 358:
                var10 = false;
                _fun51494_ip = 380;
                continue _fun51494;
            case 362:
                var4 = var8 != var20;
                if (!var4) {
                    _fun51494_ip = 377;
                    continue _fun51494
                }
            case 369:
                var11 = '';
                var4 = var11 !== var20;
            case 377:
                var10 = var4;
            case 380:
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 10;
                var4 = var14[var4];
                var14 = var11.bind(var3)(var4);
                var4 = var8 != var1;
                if (!var4) {
                    _fun51494_ip = 410;
                    continue _fun51494
                }
            case 407:
                var4 = var16;
            case 410:
                var11 = !var4;
                var4 = 'Cannot have an editable input w/ onPress handler';
                var4 = var14.bind(var3)(var11, var4);
                var25 = var8 != var1;
                var1 = var18.container;
                var11 = new Array(3);
                var11[0] = var1;
                var1 = null;
                if (!var2) {
                    _fun51494_ip = 452;
                    continue _fun51494
                }
            case 447:
                var1 = var18.error;
            case 452:
                var11[1] = var1;
                var11[2] = var0;
                var2 = _closure1_slot7;
                if (var25) {
                    _fun51494_ip = 473;
                    continue _fun51494
                }
            case 467:
                var1 = _closure1_slot4;
                _fun51494_ip = 477;
                continue _fun51494;
            case 473:
                var1 = _closure1_slot6;
            case 477:
                var0 = {};
                var4 = function() { // Original name: onPress, environment: var12
                    _fun51496: for (var _fun51496_ip = 0;;) switch (_fun51496_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun51496_ip = 35;
                                continue _fun51496
                            }
                        case 10:
                            var1 = _closure2_slot5;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun51496_ip = 35;
                                continue _fun51496
                            }
                        case 25:
                            var1 = var2.focus;
                            var1 = var1.bind(var2)();
                        case 35:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun51496_ip = 55;
                                continue _fun51496
                            }
                        case 45:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var4;
                var4 = null;
                if (!var25) {
                    _fun51494_ip = 496;
                    continue _fun51494
                }
            case 493:
                var4 = var11;
            case 496:
                var0.style = var4;
                var4 = undefined;
                if (!var6) {
                    _fun51494_ip = 509;
                    continue _fun51494
                }
            case 505:
                var4 = 'button';
            case 509:
                var0.accessibilityRole = var4;
                var0.accessible = var6;
                var4 = undefined;
                if (!var6) {
                    _fun51494_ip = 525;
                    continue _fun51494
                }
            case 522:
                var4 = var22;
            case 525:
                var0.accessibilityLabel = var4;
                var4 = undefined;
                if (!var6) {
                    _fun51494_ip = 543;
                    continue _fun51494
                }
            case 534:
                var14 = {};
                var14.text = var20;
                var4 = var14;
            case 543:
                var0.accessibilityValue = var4;
                var4 = undefined;
                if (!var6) {
                    _fun51494_ip = 556;
                    continue _fun51494
                }
            case 553:
                var4 = var5;
            case 556:
                var0.accessibilityHint = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot5;
                var4 = {};
                if (!var25) {
                    _fun51494_ip = 579;
                    continue _fun51494
                }
            case 574:
                var11 = var18.onPress;
            case 579:
                var4.style = var11;
                var14 = var8 == var7;
                var11 = undefined;
                if (var14) {
                    _fun51494_ip = 596;
                    continue _fun51494
                }
            case 592:
                var11 = var7.bind(var3)();
            case 596:
                var7 = new Array(4);
                var7[0] = var11;
                var15 = _closure1_slot7;
                var14 = _closure1_slot0;
                var24 = _closure1_slot2;
                var11 = 11;
                var11 = var24[var11];
                var11 = var14.bind(var3)(var11);
                var14 = var11.TextInput;
                var11 = {};
                var24 = 'auto';
                if (!var25) {
                    _fun51494_ip = 647;
                    continue _fun51494
                }
            case 643:
                var24 = 'none';
            case 647:
                var11.pointerEvents = var24;
                var11.accessibilityRole = var23;
                var11.accessibilityLabel = var22;
                var11.ref = var21;
                var11.editable = var16;
                var21 = var18.input;
                var11.style = var21;
                var21 = 1;
                var11.numberOfLines = var21;
                var21 = false;
                var11.multiline = var21;
                var11.value = var20;
                var11.onChangeText = var19;
                var19 = function(arg0) { // Original name: onFocus, environment: var12
                    _fun51497: for (var _fun51497_ip = 0;;) switch (_fun51497_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun51497_ip = 27;
                                continue _fun51497
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11.onFocus = var19;
                var19 = function(arg0) { // Original name: onBlur, environment: var12
                    _fun51498: for (var _fun51498_ip = 0;;) switch (_fun51498_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun51498_ip = 27;
                                continue _fun51498
                            }
                        case 13:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11.onBlur = var19;
                var18 = var18.placeholder;
                var18 = var18.color;
                var11.placeholderTextColor = var18;
                var18 = 'never';
                var11.clearButtonMode = var18;
                var28 = var11;
                var27 = var17;
                var17 = copyDataProperties(var28, var27);
                var18 = 'no-hide-descendants';
                if (!var16) {
                    _fun51494_ip = 775;
                    continue _fun51494
                }
            case 769:
                var18 = 'yes';
            case 775:
                var17 = 'importantForAccessibility';
                var11[var17] = var18;
                var17 = !var16;
                var16 = 'accessibilityElementsHidden';
                var11[var16] = var17;
                var11 = var15.bind(var3)(var14, var11);
                var7[1] = var11;
                var14 = var8 == var13;
                var11 = undefined;
                if (var14) {
                    _fun51494_ip = 819;
                    continue _fun51494
                }
            case 815:
                var11 = var13.bind(var3)();
            case 819:
                var7[2] = var11;
                var8 = null;
                if (!var10) {
                    _fun51494_ip = 853;
                    continue _fun51494
                }
            case 828:
                var11 = _closure1_slot7;
                var10 = _closure1_slot10;
                var9 = {};
                var12 = function() { // Original name: onPress, environment: var12
                    _fun51499: for (var _fun51499_ip = 0;;) switch (_fun51499_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun51499_ip = 33;
                                continue _fun51499
                            }
                        case 20:
                            var2 = _closure2_slot0;
                            var1 = '';
                            var0 = var2.bind(var3)(var1);
                        case 33:
                            return var0;
                    }
                };
                var9.onPress = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 853:
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/freeform-input/FreeFormTextInput.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4864, 1234, 4045, 5846, 5368, 44, 4838, 2]);