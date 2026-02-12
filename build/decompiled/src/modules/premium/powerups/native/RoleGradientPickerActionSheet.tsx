// modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx
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
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var13 = 2;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.Pressable;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DEFAULT_GRADIENT_ROLE_COLORS;
    var _closure1_slot7 = var6;
    var3 = var3.GRADIENT_PRESETS;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'paddingVertical': null,
        'paddingHorizontal': null,
        'flexGrow': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var10 = 6;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9.paddingVertical = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9.paddingHorizontal = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.gap = var14;
    var3.body = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.paddingHorizontal = var14;
    var3.gradientContainer = var9;
    var9 = {
        'left': null,
        'right': null,
        'position': 'absolute',
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between'
    };
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var9.left = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var9.right = var14;
    var3.dropperContainer = var9;
    var9 = {
        'borderColor': 'white',
        'tintColor': 'white',
        'padding': null,
        'borderRadius': null,
        'borderWidth': 1
    };
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.padding = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9.borderRadius = var14;
    var3.dropper = var9;
    var9 = {
        'height': 50,
        'width': '100%'
    };
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9.borderRadius = var14;
    var3.gradient = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'gap': null,
        'flexWrap': 'wrap',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.gap = var14;
    var3.optionContainer = var9;
    var9 = {
        'width': 80,
        'height': 50,
        'borderRadius': null,
        'overflow': 'hidden',
        'padding': 2
    };
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9.borderRadius = var14;
    var3.pressable = var9;
    var9 = {};
    var9.borderWidth = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var9.borderColor = var13;
    var3.selected = var9;
    var9 = {};
    var9.flex = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var3.option = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.EyeDropperIcon;
    var6 = {
        'color': 'white',
        'size': 'sm'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EyeDropperIcon;
    var3 = {
        'color': 'white',
        'size': 'sm'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot13 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun117384: for (var _fun117384_ip = 0;;) switch (_fun117384_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.colors;
                var0 = var0.onSelect;
                var _closure2_slot0 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot11;
                var13 = var1.bind(var3)();
                var _closure2_slot1 = var13;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var6 = null;
                if (!(var6 != var4)) {
                    _fun117384_ip = 74;
                    continue _fun117384
                }
            case 64:
                var5 = var4.secondary_color;
                if (!(var6 == var5)) {
                    _fun117384_ip = 78;
                    continue _fun117384
                }
            case 74:
                var4 = _closure1_slot7;
            case 78:
                var4 = var1.bind(var2)(var4);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var5 = var2[var1];
                _closure2_slot2 = var5;
                var1 = 1;
                var1 = var2[var1];
                _closure2_slot3 = var1;
                var1 = global;
                var4 = var1.Object;
                var2 = var4.values;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 8;
                var1 = var15[var1];
                var6 = var14.bind(var3)(var1);
                var1 = var6.extractColorStringsFromServerColors;
                var1 = var1.bind(var6)(var5);
                var4 = var2.bind(var4)(var1);
                var2 = var4.filter;
                var1 = 9;
                var1 = var15[var1];
                var1 = var14.bind(var3)(var1);
                var1 = var1.isNotNullish;
                var17 = var2.bind(var4)(var1);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var9 = var2.bind(var4)(var0, var1);
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var10
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                _closure2_slot4 = var0;
                var6 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var5;
                var2[1] = var0;
                var1 = function() { // Environment: var10
                    _fun117387: for (var _fun117387_ip = 0;;) switch (_fun117387_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = {};
                            var4 = _closure2_slot2;
                            var1 = null;
                            var6 = var1 == var4;
                            var4 = undefined;
                            if (var6) {
                                _fun117387_ip = 55;
                                continue _fun117387
                            }
                        case 45:
                            var5 = _closure2_slot2;
                            var4 = var5.primary_color;
                        case 55:
                            var5 = var1 != var4;
                            var1 = 0;
                            if (!var5) {
                                _fun117387_ip = 67;
                                continue _fun117387
                            }
                        case 64:
                            var1 = var4;
                        case 67:
                            var2.color = var1;
                            var1 = function arg0() {
                                var2 = _closure2_slot4;
                                var1 = {};
                                var4 = _closure2_slot2;
                                var5 = var1;
                                var0 = copyDataProperties(var5, var4);
                                var3 = arg0;
                                var0 = 'primary_color';
                                var1[var0] = var3;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onSelect = var1;
                            var1 = 'stack';
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var18 = var6.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var0;
                var0 = function() { // Environment: var10
                    _fun117389: for (var _fun117389_ip = 0;;) switch (_fun117389_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = {};
                            var4 = _closure2_slot2;
                            var1 = null;
                            var6 = var1 == var4;
                            var4 = undefined;
                            if (var6) {
                                _fun117389_ip = 55;
                                continue _fun117389
                            }
                        case 45:
                            var5 = _closure2_slot2;
                            var4 = var5.secondary_color;
                        case 55:
                            var5 = var1 != var4;
                            var1 = 0;
                            if (!var5) {
                                _fun117389_ip = 67;
                                continue _fun117389
                            }
                        case 64:
                            var1 = var4;
                        case 67:
                            var2.color = var1;
                            var1 = function arg0() {
                                var2 = _closure2_slot4;
                                var1 = {};
                                var4 = _closure2_slot2;
                                var5 = var1;
                                var0 = copyDataProperties(var5, var4);
                                var3 = arg0;
                                var0 = 'secondary_color';
                                var1[var0] = var3;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onSelect = var1;
                            var1 = 'stack';
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var20 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot9;
                var0 = 12;
                var0 = var15[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = 13;
                var4 = var15[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var11 = 14;
                var6 = var15[var11];
                var6 = var14.bind(var3)(var6);
                var8 = var6.intl;
                var7 = var8.string;
                var6 = var15[var11];
                var6 = var14.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.XpWmJz;
                var6 = var7.bind(var8)(var6);
                var4.title = var6;
                var8 = 15;
                var6 = var15[var8];
                var6 = var14.bind(var3)(var6);
                var7 = var6.Button;
                var6 = {
                    'variant': 'secondary',
                    'size': 'sm'
                };
                var16 = var15[var11];
                var16 = var14.bind(var3)(var16);
                var21 = var16.intl;
                var19 = var21.string;
                var16 = var15[var11];
                var16 = var14.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["R3BPH+"];
                var16 = var19.bind(var21)(var16);
                var6.text = var16;
                var6.onPress = var9;
                var6 = var2.bind(var3)(var7, var6);
                var4.trailing = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var13.body;
                var4.style = var7;
                var7 = {};
                var9 = var13.gradientContainer;
                var7.style = var9;
                var16 = _closure1_slot1;
                var9 = 16;
                var9 = var15[var9];
                var16 = var16.bind(var3)(var9);
                var9 = {};
                var19 = var13.gradient;
                var9.style = var19;
                var9.colors = var17;
                var17 = {
                    'x': 0,
                    'y': 0
                };
                var9.start = var17;
                var17 = {
                    'x': 1,
                    'y': 0
                };
                var9.end = var17;
                var16 = var2.bind(var3)(var16, var9);
                var9 = new Array(2);
                var9[0] = var16;
                var16 = {};
                var17 = var13.dropperContainer;
                var16.style = var17;
                var19 = _closure1_slot6;
                var17 = {};
                var21 = var13.dropper;
                var17.style = var21;
                var17.onPress = var18;
                var18 = _closure1_slot12;
                var17.children = var18;
                var18 = var2.bind(var3)(var19, var17);
                var17 = new Array(2);
                var17[0] = var18;
                var18 = {};
                var21 = var13.dropper;
                var18.style = var21;
                var18.onPress = var20;
                var20 = _closure1_slot13;
                var18.children = var20;
                var18 = var2.bind(var3)(var19, var18);
                var17[1] = var18;
                var16.children = var17;
                var16 = var6.bind(var3)(var5, var16);
                var9[1] = var16;
                var7.children = var9;
                var9 = var6.bind(var3)(var5, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var9 = {};
                var13 = var13.optionContainer;
                var9.style = var13;
                var16 = _closure1_slot8;
                var13 = var16.map;
                var12 = function(arg0) { // Environment: var10
                    _fun117391: for (var _fun117391_ip = 0;;) switch (_fun117391_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var4 = _closure1_slot9;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.PressableOpacity;
                            var1 = {};
                            var6 = _closure2_slot1;
                            var7 = var6.pressable;
                            var6 = new Array(2);
                            var6[0] = var7;
                            var10 = var0.start;
                            var7 = _closure2_slot2;
                            var7 = var7.primary_color;
                            var7 = var10 === var7;
                            if (!var7) {
                                _fun117391_ip = 108;
                                continue _fun117391
                            }
                        case 89:
                            var11 = var0.end;
                            var10 = _closure2_slot2;
                            var10 = var10.secondary_color;
                            var7 = var11 === var10;
                        case 108:
                            if (!var7) {
                                _fun117391_ip = 121;
                                continue _fun117391
                            }
                        case 111:
                            var10 = _closure2_slot1;
                            var7 = var10.selected;
                        case 121:
                            var6[1] = var7;
                            var1.style = var6;
                            var5 = function() {
                                var2 = _closure2_slot4;
                                var1 = {};
                                var5 = _closure2_slot2;
                                var6 = var1;
                                var0 = copyDataProperties(var6, var5);
                                var0 = _closure3_slot0;
                                var4 = var0.start;
                                var3 = 'primary_color';
                                var1[var3] = var4;
                                var3 = var0.end;
                                var0 = 'secondary_color';
                                var1[var0] = var3;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onPress = var5;
                            var7 = _closure1_slot9;
                            var6 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var5 = 16;
                            var5 = var11[var5];
                            var6 = var6.bind(var3)(var5);
                            var5 = {};
                            var9 = _closure2_slot1;
                            var9 = var9.option;
                            var5.style = var9;
                            var10 = _closure1_slot0;
                            var9 = 18;
                            var8 = var11[var9];
                            var13 = var10.bind(var3)(var8);
                            var12 = var13.int2hex;
                            var8 = var0.start;
                            var12 = var12.bind(var13)(var8);
                            var8 = new Array(2);
                            var8[0] = var12;
                            var9 = var11[var9];
                            var11 = var10.bind(var3)(var9);
                            var10 = var11.int2hex;
                            var9 = var0.end;
                            var9 = var10.bind(var11)(var9);
                            var8[1] = var9;
                            var5.colors = var8;
                            var8 = {
                                'x': 0,
                                'y': 0
                            };
                            var5.start = var8;
                            var8 = {
                                'x': 1,
                                'y': 0
                            };
                            var5.end = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var1.children = var5;
                            var0 = var0.name;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var12 = var13.bind(var16)(var12);
                var9.children = var12;
                var9 = var2.bind(var3)(var5, var9);
                var7[1] = var9;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.yBZMsQ;
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var10 = function() {
                    var2 = _closure2_slot3;
                    var1 = _closure1_slot7;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPress = var10;
                var8 = var2.bind(var3)(var9, var8);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 14952, 33, 1297, 671, 10802, 1679, 1304, 3279, 10142, 4907, 5237, 1234, 4090, 4104, 4880, 668, 2]);