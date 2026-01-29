// modules/color_picker/native/CustomColorPickerActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: SuggestedColors, environment: var1
        _fun79697: for (var _fun79697_ip = 0;;) switch (_fun79697_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.suggestedColors;
                var1 = var0.onSelect;
                var _closure2_slot0 = var1;
                var0 = var0.color;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot8;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var _closure2_slot2 = var6;
                var8 = null;
                var2 = var8 == var7;
                var0 = null;
                if (var2) {
                    _fun79697_ip = 118;
                    continue _fun79697
                }
            case 58:
                var3 = var7.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun79697_ip = 118;
                    continue _fun79697
                }
            case 71:
                var3 = _closure1_slot6;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var6.suggestedColorsContainer;
                var1.style = var6;
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var8 = arg0;
                    var _closure3_slot0 = var8;
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.color = var8;
                    var6 = _closure2_slot2;
                    var6 = var6.suggestedColor;
                    var1.style = var6;
                    var5 = _closure2_slot1;
                    var5 = var8 === var5;
                    var1.selected = var5;
                    var0 = function() { // Original name: onSelect, environment: var0
                        _fun79699: for (var _fun79699_ip = 0;;) switch (_fun79699_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun79699_ip = 31;
                                    continue _fun79699
                                }
                            case 13:
                                var2 = _closure2_slot0;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 31:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onSelect = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var7 = var0.concat;
                    var6 = '';
                    var5 = '-';
                    var0 = arg1;
                    var0 = var7.bind(var6)(var8, var5, var0);
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 118:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingBottom = var11;
    var3.container = var8;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.save = var8;
    var8 = {
        'minWidth': 32,
        'height': 32
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.suggestedColor = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var3.suggestedColorsContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/color_picker/native/CustomColorPickerActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CustomColorPickerActionSheet, environment: var1
        _fun79700: for (var _fun79700_ip = 0;;) switch (_fun79700_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.color;
                var0 = var1.onSelect;
                var _closure2_slot0 = var0;
                var5 = var1.suggestedColors;
                var25 = var1.actionButtonVariant;
                var3 = undefined;
                if (!(var25 === var3)) {
                    _fun79700_ip = 42;
                    continue _fun79700
                }
            case 38:
                var25 = 'secondary';
            case 42:
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var1 = _closure1_slot8;
                var7 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var19 = 7;
                var1 = var9[var19];
                var6 = var2.bind(var3)(var1);
                var1 = var6.int2hex;
                var10 = var1.bind(var6)(var4);
                var1 = var9[var19];
                var6 = var2.bind(var3)(var1);
                var1 = var6.int2hsv;
                var1 = var1.bind(var6)(var4);
                var14 = var1.h;
                var13 = var1.s;
                var6 = var1.v;
                var15 = _closure1_slot4;
                var1 = var15.useState;
                var12 = var1.bind(var15)(var10);
                var10 = _closure1_slot3;
                var1 = 2;
                var10 = var10.bind(var3)(var12, var1);
                var1 = 0;
                var18 = var10[var1];
                _closure2_slot1 = var18;
                var1 = 1;
                var1 = var10[var1];
                _closure2_slot2 = var1;
                var12 = var15.useMemo;
                var10 = new Array(1);
                var10[0] = var18;
                var1 = function() { // Environment: var11
                    _fun79701: for (var _fun79701_ip = 0;;) switch (_fun79701_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun79701_ip = 99;
                                continue _fun79701
                            }
                        case 13: // try_start_0
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.hex2int;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                        case 53: // try_end0
                            return var0;
                        case 55: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hex2int;
                            var0 = '#000000';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 99:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hex2int;
                            var0 = '#000000';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var16 = var12.bind(var15)(var1, var10);
                _closure2_slot3 = var16;
                var1 = 8;
                var10 = var9[var1];
                var12 = var2.bind(var3)(var10);
                var10 = var12.useSharedValue;
                var14 = var10.bind(var12)(var14);
                _closure2_slot4 = var14;
                var10 = var9[var1];
                var12 = var2.bind(var3)(var10);
                var10 = var12.useSharedValue;
                var13 = var10.bind(var12)(var13);
                _closure2_slot5 = var13;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useSharedValue;
                var12 = var1.bind(var2)(var6);
                _closure2_slot6 = var12;
                var17 = null;
                var1 = var17 == var5;
                var22 = undefined;
                if (var1) {
                    _fun79700_ip = 342;
                    continue _fun79700
                }
            case 315:
                var2 = var5.map;
                var1 = function(arg0) { // Environment: var11
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hex2int;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var5)(var1);
                var1 = var2.concat;
                var22 = var1.bind(var2)(var4);
            case 342:
                var1 = function(arg0) { // Original name: updateInputHexValueFromHsv, environment: var11
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.hsvToRgbWorklet;
                    var1 = arg0;
                    var6 = var4.bind(var5)(var1);
                    var1 = 10;
                    var1 = var3[var1];
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.rgbToHex;
                    var1 = 0;
                    var3 = var6[var1];
                    var1 = 1;
                    var2 = var6[var1];
                    var1 = 2;
                    var1 = var6[var1];
                    var2 = var4.bind(var5)(var3, var2, var1);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                _closure2_slot7 = var1;
                var5 = _closure1_slot4;
                var2 = var5.useCallback;
                var1 = new Array(6);
                var1[0] = var14;
                var1[1] = var13;
                var1[2] = var12;
                var1[3] = var0;
                var1[4] = var16;
                var1[5] = var18;
                var0 = function() { // Environment: var11
                    _fun79704: for (var _fun79704_ip = 0;;) switch (_fun79704_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun79704_ip = 57;
                                continue _fun79704
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.hex2rgb2hsv;
                            var1 = _closure2_slot1;
                            var1 = var4.bind(var5)(var1);
                            if (!(var3 == var1)) {
                                _fun79704_ip = 155;
                                continue _fun79704
                            }
                        case 57:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var3 = undefined;
                            var8 = var5.bind(var3)(var1);
                            var7 = var8.hsv;
                            var5 = _closure2_slot4;
                            var1 = var5.get;
                            var6 = var1.bind(var5)();
                            var5 = _closure2_slot5;
                            var1 = var5.get;
                            var5 = var1.bind(var5)();
                            var9 = _closure2_slot6;
                            var1 = var9.get;
                            var1 = var1.bind(var9)();
                            var5 = var7.bind(var8)(var6, var5, var1);
                            var1 = var5.num;
                            var1 = var1.bind(var5)();
                            var1 = var4.bind(var3)(var1);
                            _fun79704_ip = 168;
                            continue _fun79704;
                        case 155:
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                        case 168:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var2.bind(var5)(var0, var1);
                _closure2_slot8 = var4;
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var11
                    var1 = _closure2_slot8;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var21 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot6;
                var24 = _closure1_slot0;
                var23 = _closure1_slot2;
                var0 = 13;
                var0 = var23[var0];
                var0 = var24.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.onDismiss = var4;
                var4 = true;
                var0.startExpanded = var4;
                var6 = _closure1_slot6;
                var4 = 14;
                var4 = var23[var4];
                var4 = var24.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var15 = 15;
                var9 = var23[var15];
                var9 = var24.bind(var3)(var9);
                var20 = var9.intl;
                var10 = var20.string;
                var9 = var23[var15];
                var9 = var24.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.WTqQ5e;
                var9 = var10.bind(var20)(var9);
                var4.title = var9;
                var20 = _closure1_slot6;
                var9 = 16;
                var9 = var23[var9];
                var9 = var24.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var9.variant = var25;
                var25 = 'sm';
                var9.size = var25;
                var25 = var23[var15];
                var25 = var24.bind(var3)(var25);
                var27 = var25.intl;
                var26 = var27.string;
                var25 = var23[var15];
                var25 = var24.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.XqMe3N;
                var25 = var26.bind(var27)(var25);
                var9.text = var25;
                var9.onPress = var21;
                var9 = var20.bind(var3)(var10, var9);
                var4.trailing = var9;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var7.container;
                var4.style = var7;
                var10 = _closure1_slot6;
                var7 = 17;
                var7 = var23[var7];
                var7 = var24.bind(var3)(var7);
                var9 = var7.TextInput;
                var7 = {};
                var20 = var23[var15];
                var20 = var24.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var15 = var23[var15];
                var15 = var24.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["ozfa/h"];
                var15 = var20.bind(var21)(var15);
                var7.accessibilityLabel = var15;
                var7.value = var18;
                var15 = function(arg0) { // Original name: onChange, environment: var11
                    _fun79706: for (var _fun79706_ip = 0;;) switch (_fun79706_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.length;
                            var3 = 0;
                            var0 = var0 > var3;
                            if (!var0) {
                                _fun79706_ip = 36;
                                continue _fun79706
                            }
                        case 17:
                            var2 = var1.charAt;
                            var3 = var2.bind(var1)(var3);
                            var2 = '#';
                            var0 = var2 !== var3;
                        case 36:
                            var4 = var1;
                            if (!var0) {
                                _fun79706_ip = 50;
                                continue _fun79706
                            }
                        case 42:
                            var0 = '#';
                            var4 = var0 + var1;
                        case 50:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hex2rgb2hsv;
                            var1 = var1.bind(var2)(var4);
                            var3 = _closure2_slot2;
                            var3 = var3.bind(var0)(var4);
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun79706_ip = 172;
                                continue _fun79706
                            }
                        case 104:
                            var5 = _closure2_slot4;
                            var4 = var5.set;
                            var3 = var1.h;
                            var3 = var4.bind(var5)(var3);
                            var6 = _closure2_slot5;
                            var5 = var6.set;
                            var3 = var1.s;
                            var4 = 100;
                            var3 = var3 / var4;
                            var3 = var5.bind(var6)(var3);
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var1 = var1.v;
                            var1 = var1 / var4;
                            var1 = var2.bind(var3)(var1);
                        case 172:
                            return var0;
                    }
                };
                var7.onChange = var15;
                var7.maxLength = var19;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var15 = _closure1_slot6;
                var10 = _closure1_slot9;
                var9 = {};
                var21 = _closure1_slot1;
                var20 = 18;
                var20 = var23[var20];
                var21 = var21.bind(var3)(var20);
                var20 = var21.uniq;
                var20 = var20.bind(var21)(var22);
                var9.suggestedColors = var20;
                var20 = function(arg0) { // Original name: onSelect, environment: var11
                    var4 = arg0;
                    var7 = _closure2_slot2;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var6 = var5[var2];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var6);
                    var6 = var8.int2hex;
                    var6 = var6.bind(var8)(var4);
                    var6 = var7.bind(var0)(var6);
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.int2hsv;
                    var2 = var2.bind(var3)(var4);
                    var6 = var2.h;
                    var5 = var2.s;
                    var3 = var2.v;
                    var4 = _closure2_slot4;
                    var2 = var4.set;
                    var2 = var2.bind(var4)(var6);
                    var4 = _closure2_slot5;
                    var2 = var4.set;
                    var2 = var2.bind(var4)(var5);
                    var2 = _closure2_slot6;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var9.onSelect = var20;
                if (!(var17 == var18)) {
                    _fun79700_ip = 904;
                    continue _fun79700
                }
            case 847:
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var19];
                var21 = var18.bind(var3)(var17);
                var20 = var21.hsv2int;
                var17 = var14.get;
                var19 = var17.bind(var14)();
                var17 = var13.get;
                var18 = var17.bind(var13)();
                var17 = var12.get;
                var17 = var17.bind(var12)();
                var16 = var20.bind(var21)(var19, var18, var17);
            case 904:
                var9.color = var16;
                var9 = var15.bind(var3)(var10, var9);
                var7[1] = var9;
                var10 = _closure1_slot6;
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 19;
                var8 = var15[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.hue = var14;
                var8.saturation = var13;
                var8.value = var12;
                var11 = function() { // Original name: onPanFinalize, environment: var11
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot7;
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var5 = _closure2_slot4;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var1.h = var4;
                    var5 = _closure2_slot5;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var1.s = var4;
                    var4 = _closure2_slot6;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1.v = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPanFinalize = var11;
                var8 = var10.bind(var3)(var9, var8);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 10098, 668, 3677, 10102, 3199, 669, 3237, 4887, 5167, 1234, 4037, 5358, 22, 10103, 2]);