// modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.Pressable;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DISPLAY_NAME_STYLES_COLOR_PRESETS;
    var _closure1_slot7 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.paddingTop = var10;
    var3.header = var8;
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.headerTrailing = var8;
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {};
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingBottom = var12;
    var3.contentContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.gap = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginBottom = var12;
    var3.presetGrid = var8;
    var8 = {
        'gap': null,
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.gap = var12;
    var12 = 'row';
    var3.presetRow = var8;
    var8 = {
        'width': 40,
        'height': 40,
        'borderRadius': null,
        'borderWidth': 2,
        'borderColor': 'transparent'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.presetColor = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_BRAND_FOREGROUND;
    var8.borderColor = var13;
    var3.presetColorSelected = var8;
    var8 = {};
    var8.flexDirection = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.gap = var10;
    var3.buttonsContainer = var8;
    var8 = {};
    var8.flex = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun85257: for (var _fun85257_ip = 0;;) switch (_fun85257_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.selectedColor;
                var _closure2_slot0 = var1;
                var11 = var0.selectedEffectId;
                var6 = var0.onSelectColor;
                var _closure2_slot1 = var6;
                var0 = _closure1_slot11;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var _closure2_slot2 = var17;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 8;
                var0 = var13[var0];
                var2 = var12.bind(var3)(var0);
                var0 = var2.useBottomSheetRef;
                var0 = var0.bind(var2)();
                var4 = var0.bottomSheetRef;
                var19 = _closure1_slot1;
                var0 = 9;
                var0 = var13[var0];
                var0 = var19.bind(var3)(var0);
                var0 = var0.bind(var3)(var11);
                var _closure2_slot3 = var0;
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var8 = var2.bind(var5)(var1);
                var7 = _closure1_slot3;
                var2 = 2;
                var8 = var7.bind(var3)(var8, var2);
                var25 = 0;
                var7 = var8[var25];
                var _closure2_slot4 = var7;
                var2 = 1;
                var2 = var8[var2];
                var _closure2_slot5 = var2;
                var8 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var1;
                var1 = function() { // Environment: var9
                    var1 = _closure2_slot4;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var8 = var8.bind(var5)(var1, var2);
                var _closure2_slot6 = var8;
                var10 = var5.useCallback;
                var2 = function(arg0) { // Environment: var9
                    var2 = _closure2_slot5;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var10.bind(var5)(var2, var1);
                var _closure2_slot7 = var1;
                var10 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var6;
                var1 = function() { // Environment: var9
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var4 = var3[var2];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var4);
                    var4 = var5.triggerHapticFeedback;
                    var2 = var3[var2];
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure2_slot1;
                    var5 = _closure2_slot3;
                    var2 = 0;
                    var2 = var5[var2];
                    var2 = var4.bind(var0)(var2);
                    var2 = _closure1_slot1;
                    var1 = 11;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var22 = var10.bind(var5)(var1, var2);
                var10 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var6;
                var1 = function() { // Environment: var9
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var3 = _closure2_slot4;
                    var1.color = var3;
                    var3 = function arg0() {
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var4 = var3[var2];
                        var0 = undefined;
                        var5 = var6.bind(var0)(var4);
                        var4 = var5.triggerHapticFeedback;
                        var2 = var3[var2];
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_MEDIUM;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure2_slot1;
                        var2 = arg0;
                        var2 = var4.bind(var0)(var2);
                        var2 = _closure1_slot1;
                        var1 = 11;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1.onSelect = var3;
                    var3 = 'primary';
                    var1.actionButtonVariant = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var16 = var10.bind(var5)(var1, var2);
                var2 = var5.useCallback;
                var1 = new Array(4);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var0;
                var0 = function() { // Environment: var9
                    _fun85263: for (var _fun85263_ip = 0;;) switch (_fun85263_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 10;
                            var3 = var6[var2];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var3);
                            var3 = var4.triggerHapticFeedback;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.HapticFeedbackTypes;
                            var2 = var2.IMPACT_MEDIUM;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure2_slot6;
                            if (!var2) {
                                _fun85263_ip = 153;
                                continue _fun85263
                            }
                        case 67:
                            var2 = _closure2_slot1;
                            var7 = _closure2_slot4;
                            var2 = var2.bind(var0)(var7);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 13;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot8;
                            var3 = var2.DISPLAY_NAME_STYLES_COLOR_SELECTED;
                            var2 = {};
                            var8 = _closure2_slot3;
                            var6 = 0;
                            var6 = var8[var6];
                            var6 = var7 === var6;
                            var2.default = var6;
                            var6 = new Array(1);
                            var6[0] = var7;
                            var2.colors = var6;
                            var2 = var4.bind(var5)(var3, var2);
                        case 153:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var18 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot9;
                var0 = 14;
                var0 = var13[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.ref = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var17.header;
                var4.style = var6;
                var6 = 15;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.BottomSheetTitleHeader;
                var6 = {};
                var20 = 16;
                var8 = var13[var20];
                var8 = var12.bind(var3)(var8);
                var14 = var8.intl;
                var10 = var14.string;
                var27 = 17;
                var8 = var13[var27];
                var8 = var19.bind(var3)(var8);
                var8 = var8["6OxgN7"];
                var8 = var10.bind(var14)(var8);
                var6.title = var8;
                var8 = {};
                var10 = var17.headerTrailing;
                var8.style = var10;
                var14 = 18;
                var10 = var13[var14];
                var10 = var12.bind(var3)(var10);
                var21 = var10.Button;
                var10 = {};
                var23 = var13[var20];
                var23 = var12.bind(var3)(var23);
                var26 = var23.intl;
                var24 = var26.string;
                var23 = var13[var20];
                var23 = var12.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.XqMe3N;
                var23 = var24.bind(var26)(var23);
                var10.text = var23;
                var10.onPress = var18;
                var18 = 'primary';
                var10.variant = var18;
                var18 = 'sm';
                var10.size = var18;
                var10 = var2.bind(var3)(var21, var10);
                var8.children = var10;
                var8 = var2.bind(var3)(var5, var8);
                var6.trailing = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.header = var4;
                var4 = {};
                var6 = var17.container;
                var4.style = var6;
                var7 = _closure1_slot10;
                var6 = {};
                var8 = var17.contentContainer;
                var6.style = var8;
                var8 = {};
                var10 = var17.presetGrid;
                var8.style = var10;
                var10 = 19;
                var10 = var13[var10];
                var23 = var19.bind(var3)(var10);
                var21 = var23.chunk;
                var24 = _closure1_slot7;
                var19 = var24.slice;
                var10 = 12;
                var19 = var19.bind(var24)(var25, var10);
                var10 = 6;
                var19 = var21.bind(var23)(var19, var10);
                var10 = var19.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var6 = arg0;
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var5 = var5.presetRow;
                    var1.style = var5;
                    var5 = var6.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun85265: for (var _fun85265_ip = 0;;) switch (_fun85265_ip) {
                            case 0:
                                var6 = arg0;
                                var _closure4_slot0 = var6;
                                var4 = _closure1_slot9;
                                var3 = _closure1_slot6;
                                var2 = {};
                                var1 = function() {
                                    var2 = _closure2_slot7;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var2.onPress = var1;
                                var1 = _closure2_slot2;
                                var1 = var1.presetColor;
                                var5 = new Array(3);
                                var5[0] = var1;
                                var8 = {};
                                var11 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var7 = 20;
                                var10 = var1[var7];
                                var1 = undefined;
                                var11 = var11.bind(var1)(var10);
                                var10 = var11.int2hex;
                                var10 = var10.bind(var11)(var6);
                                var8.backgroundColor = var10;
                                var5[1] = var8;
                                var8 = _closure2_slot4;
                                var8 = var6 === var8;
                                if (!var8) {
                                    _fun85265_ip = 118;
                                    continue _fun85265
                                }
                            case 108:
                                var9 = _closure2_slot2;
                                var8 = var9.presetColorSelected;
                            case 118:
                                var5[2] = var8;
                                var2.style = var5;
                                var5 = 'button';
                                var2.accessibilityRole = var5;
                                var5 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var0 = var0[var7];
                                var5 = var5.bind(var1)(var0);
                                var0 = var5.int2hex;
                                var0 = var0.bind(var5)(var6);
                                var2.accessibilityLabel = var0;
                                var5 = _closure3_slot0;
                                var0 = 6;
                                var5 = var0 * var5;
                                var0 = arg1;
                                var0 = var5 + var0;
                                var0 = var4.bind(var1)(var3, var2, var0);
                                return var0;
                        }
                    };
                    var0 = var5.bind(var6)(var0);
                    var1.children = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var9 = var10.bind(var19)(var9);
                var8.children = var9;
                var9 = var2.bind(var3)(var5, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var10 = var17.buttonsContainer;
                var9.style = var10;
                var10 = 21;
                var10 = var13[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.DisplayNameEffect;
                var10 = var10.SOLID;
                var11 = var11 === var10;
                if (!var11) {
                    _fun85257_ip = 863;
                    continue _fun85257
                }
            case 733:
                var13 = _closure1_slot9;
                var12 = _closure1_slot5;
                var10 = {};
                var19 = var17.button;
                var10.style = var19;
                var25 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = var23[var14];
                var19 = var25.bind(var3)(var19);
                var21 = var19.Button;
                var19 = {
                    'text': null,
                    'onPress': null,
                    'variant': 'secondary',
                    'size': 'md',
                    'grow': true
                };
                var24 = var23[var20];
                var24 = var25.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var26 = _closure1_slot1;
                var23 = var23[var27];
                var23 = var26.bind(var3)(var23);
                var23 = var23.gIeJTK;
                var23 = var24.bind(var25)(var23);
                var19.text = var23;
                var19.onPress = var22;
                var19 = var13.bind(var3)(var21, var19);
                var10.children = var19;
                var11 = var13.bind(var3)(var12, var10);
            case 863:
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot9;
                var12 = _closure1_slot5;
                var11 = {};
                var17 = var17.button;
                var11.style = var17;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = var19[var14];
                var14 = var17.bind(var3)(var14);
                var15 = var14.Button;
                var14 = {
                    'text': null,
                    'onPress': null,
                    'variant': 'secondary',
                    'size': 'md',
                    'icon': null,
                    'grow': true
                };
                var21 = var19[var20];
                var21 = var17.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var19[var20];
                var20 = var17.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["FHBa/1"];
                var20 = var21.bind(var22)(var20);
                var14.text = var20;
                var14.onPress = var16;
                var16 = 22;
                var16 = var19[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.EyeDropperIcon;
                var16 = {};
                var16.size = var18;
                var16 = var13.bind(var3)(var17, var16);
                var14.icon = var16;
                var14 = var13.bind(var3)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var9.children = var10;
                var9 = var7.bind(var3)(var5, var9);
                var8[1] = var9;
                var6.children = var8;
                var6 = var7.bind(var3)(var5, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1624, 660, 33, 1297, 671, 5720, 6918, 3270, 3269, 10187, 795, 4926, 5206, 1234, 2171, 4075, 22, 668, 1625, 10920, 2]);