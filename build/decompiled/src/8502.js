// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var4;
    var0 = ['content', 'theme', 'doneText', 'button', 'icon', 'showArrows', 'onNextCallback', 'onPrevCallback', 'onDoneCallback', 'blur', 'opacity', 'offset', 'enabled'];
    var _closure1_slot3 = var0;
    var5 = global;
    var9 = var5.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var9 = 1;
    var6 = var4[var9];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var8 = var4[var6];
    var8 = var3.bind(var0)(var8);
    var10 = var8.useCallback;
    var _closure1_slot6 = var10;
    var10 = var8.useEffect;
    var _closure1_slot7 = var10;
    var10 = var8.useMemo;
    var _closure1_slot8 = var10;
    var8 = var8.useState;
    var _closure1_slot9 = var8;
    var6 = var4[var6];
    var6 = var7.bind(var0)(var6);
    var6 = 3;
    var6 = var4[var6];
    var6 = var3.bind(var0)(var6);
    var7 = var6.StyleSheet;
    var8 = var6.Text;
    var _closure1_slot10 = var8;
    var6 = var6.View;
    var _closure1_slot11 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var3.bind(var0)(var6);
    var8 = var6.jsx;
    var _closure1_slot12 = var8;
    var8 = var6.Fragment;
    var _closure1_slot13 = var8;
    var6 = var6.jsxs;
    var _closure1_slot14 = var6;
    var6 = var5.HermesInternal;
    var11 = var6.concat;
    var10 = '';
    var8 = 'keyboard.toolbar';
    var6 = '.previous';
    var6 = var11.bind(var10)(var8, var6);
    var _closure1_slot15 = var6;
    var6 = var5.HermesInternal;
    var11 = var6.concat;
    var6 = '.next';
    var6 = var11.bind(var10)(var8, var6);
    var _closure1_slot16 = var6;
    var6 = var5.HermesInternal;
    var11 = var6.concat;
    var6 = '.content';
    var6 = var11.bind(var10)(var8, var6);
    var _closure1_slot17 = var6;
    var5 = var5.HermesInternal;
    var6 = var5.concat;
    var5 = '.done';
    var5 = var6.bind(var10)(var8, var5);
    var _closure1_slot18 = var5;
    var6 = var7.create;
    var5 = {};
    var8 = {};
    var8.flex = var9;
    var5.flex = var8;
    var9 = 8;
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'alignItems': 'center',
        'width': '100%',
        'flexDirection': 'row',
        'height': 42,
        'paddingHorizontal': 8
    };
    var5.toolbar = var8;
    var8 = {
        'fontWeight': '600',
        'fontSize': 15
    };
    var5.doneButton = var8;
    var8 = {};
    var8.marginRight = var9;
    var5.doneButtonContainer = var8;
    var5 = var6.bind(var7)(var5);
    var _closure1_slot19 = var5;
    var1 = function(arg0) { // Original name: KeyboardToolbar, environment: var1
        _fun68383: for (var _fun68383_ip = 0;;) switch (_fun68383_ip) {
            case 0:
                var10 = arg0;
                var21 = var10.content;
                var19 = var10.theme;
                var3 = undefined;
                if (!(var3 === var19)) {
                    _fun68383_ip = 50;
                    continue _fun68383
                }
            case 22:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var19 = var1.colors;
            case 50:
                var _closure2_slot0 = var19;
                var16 = var10.doneText;
                var13 = var10.button;
                var26 = var10.icon;
                var1 = var10.showArrows;
                var11 = var3 === var1;
                if (var11) {
                    _fun68383_ip = 91;
                    continue _fun68383
                }
            case 88:
                var11 = var1;
            case 91:
                var8 = var10.onNextCallback;
                var _closure2_slot1 = var8;
                var1 = var10.onPrevCallback;
                var _closure2_slot2 = var1;
                var7 = var10.onDoneCallback;
                var _closure2_slot3 = var7;
                var2 = var10.blur;
                var12 = null;
                if (!(var3 !== var2)) {
                    _fun68383_ip = 142;
                    continue _fun68383
                }
            case 139:
                var12 = var2;
            case 142:
                var2 = var10.opacity;
                var4 = 'FF';
                if (!(var3 !== var2)) {
                    _fun68383_ip = 160;
                    continue _fun68383
                }
            case 157:
                var4 = var2;
            case 160:
                var _closure2_slot4 = var4;
                var2 = var10.offset;
                if (!(var3 === var2)) {
                    _fun68383_ip = 176;
                    continue _fun68383
                }
            case 174:
                var2 = {};
            case 176:
                var5 = var2.closed;
                var20 = 0;
                var15 = 0;
                if (!(var3 !== var5)) {
                    _fun68383_ip = 193;
                    continue _fun68383
                }
            case 190:
                var15 = var5;
            case 193:
                var _closure2_slot5 = var15;
                var5 = var2.opened;
                var2 = 0;
                if (!(var3 !== var5)) {
                    _fun68383_ip = 212;
                    continue _fun68383
                }
            case 209:
                var2 = var5;
            case 212:
                var _closure2_slot6 = var2;
                var5 = var10.enabled;
                var6 = var3 === var5;
                if (var6) {
                    _fun68383_ip = 231;
                    continue _fun68383
                }
            case 228:
                var6 = var5;
            case 231:
                var9 = _closure1_slot5;
                var5 = _closure1_slot3;
                var10 = var9.bind(var3)(var10, var5);
                var9 = _closure1_slot1;
                var17 = _closure1_slot2;
                var5 = 6;
                var5 = var17[var5];
                var5 = var9.bind(var3)(var5);
                var17 = var5.bind(var3)();
                var _closure2_slot7 = var17;
                var9 = _closure1_slot9;
                var5 = {
                    'current': 0,
                    'count': 0
                };
                var18 = var9.bind(var3)(var5);
                var9 = _closure1_slot4;
                var5 = 2;
                var9 = var9.bind(var3)(var18, var5);
                var5 = var9[var20];
                var18 = 1;
                var9 = var9[var18];
                var _closure2_slot8 = var9;
                var9 = var5.current;
                var28 = var20 === var9;
                var9 = var5.current;
                var5 = var5.count;
                var5 = var5 - var18;
                var27 = var9 === var5;
                var18 = _closure1_slot7;
                var9 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var3 = var0.FocusedInputEvents;
                    var2 = var3.addListener;
                    var1 = 'focusDidSet';
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot8;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = var0.remove;
                    return var0;
                };
                var5 = new Array(0);
                var5 = var18.bind(var3)(var9, var5);
                var9 = _closure1_slot8;
                var18 = new Array(2);
                var18[0] = var17;
                var18[1] = var19;
                var5 = function() { // Environment: var0
                    var0 = _closure1_slot19;
                    var1 = var0.doneButton;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot7;
                    var2 = var3[var2];
                    var2 = var2.primary;
                    var1.color = var2;
                    var0[1] = var1;
                    return var0;
                };
                var18 = var9.bind(var3)(var5, var18);
                var5 = new Array(3);
                var5[0] = var17;
                var5[1] = var4;
                var5[2] = var19;
                var4 = function() { // Environment: var0
                    var0 = _closure1_slot19;
                    var1 = var0.toolbar;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot7;
                    var3 = var4[var3];
                    var5 = var3.background;
                    var4 = _closure2_slot4;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var2 = var3.bind(var2)(var5, var4);
                    var1.backgroundColor = var2;
                    var0[1] = var1;
                    return var0;
                };
                var4 = var9.bind(var3)(var4, var5);
                var5 = new Array(2);
                var5[0] = var15;
                var5[1] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure2_slot5;
                    var2 = 42;
                    var2 = var3 + var2;
                    var0.closed = var2;
                    var1 = _closure2_slot6;
                    var0.opened = var1;
                    return var0;
                };
                var5 = var9.bind(var3)(var2, var5);
                if (var13) {
                    _fun68383_ip = 482;
                    continue _fun68383
                }
            case 462:
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 8;
                var2 = var15[var2];
                var13 = var9.bind(var3)(var2);
            case 482:
                if (var26) {
                    _fun68383_ip = 505;
                    continue _fun68383
                }
            case 485:
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 9;
                var2 = var15[var2];
                var26 = var9.bind(var3)(var2);
            case 505:
                var2 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function(arg0) { // Environment: var0
                    _fun68389: for (var _fun68389_ip = 0;;) switch (_fun68389_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun68389_ip = 27;
                                continue _fun68389
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 27:
                            var0 = var1.isDefaultPrevented;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun68389_ip = 86;
                                continue _fun68389
                            }
                        case 40:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.KeyboardController;
                            var1 = var2.setFocusTo;
                            var0 = 'next';
                            var0 = var1.bind(var2)(var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = var2.bind(var3)(var8, var9);
                var8 = new Array(1);
                var8[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun68390: for (var _fun68390_ip = 0;;) switch (_fun68390_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun68390_ip = 27;
                                continue _fun68390
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 27:
                            var0 = var1.isDefaultPrevented;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun68390_ip = 86;
                                continue _fun68390
                            }
                        case 40:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.KeyboardController;
                            var1 = var2.setFocusTo;
                            var0 = 'prev';
                            var0 = var1.bind(var2)(var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var23 = var2.bind(var3)(var1, var8);
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function(arg0) { // Environment: var0
                    _fun68391: for (var _fun68391_ip = 0;;) switch (_fun68391_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun68391_ip = 27;
                                continue _fun68391
                            }
                        case 16:
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 27:
                            var0 = var1.isDefaultPrevented;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun68391_ip = 81;
                                continue _fun68391
                            }
                        case 40:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var1 = var0.KeyboardController;
                            var0 = var1.dismiss;
                            var0 = var0.bind(var1)();
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.enabled = var6;
                var0.offset = var5;
                var6 = _closure1_slot14;
                var5 = _closure1_slot11;
                var7 = global;
                var9 = var7.Object;
                var8 = var9.assign;
                var7 = {};
                var7.style = var4;
                var4 = 'keyboard.toolbar';
                var7.testID = var4;
                var4 = new Array(4);
                var4[0] = var12;
                if (!var11) {
                    _fun68383_ip = 837;
                    continue _fun68383
                }
            case 659:
                var20 = _closure1_slot14;
                var17 = _closure1_slot13;
                var12 = {};
                var24 = _closure1_slot12;
                var22 = {
                    'accessibilityHint': 'Moves focus to the previous field',
                    'accessibilityLabel': 'Previous'
                };
                var22.disabled = var28;
                var29 = _closure1_slot15;
                var22.testID = var29;
                var22.theme = var19;
                var22.onPress = var23;
                var23 = {};
                var23.disabled = var28;
                var23.theme = var19;
                var28 = 'prev';
                var23.type = var28;
                var23 = var24.bind(var3)(var26, var23);
                var22.children = var23;
                var23 = var24.bind(var3)(var13, var22);
                var22 = new Array(2);
                var22[0] = var23;
                var23 = {
                    'accessibilityHint': 'Moves focus to the next field',
                    'accessibilityLabel': 'Next'
                };
                var23.disabled = var27;
                var28 = _closure1_slot16;
                var23.testID = var28;
                var23.theme = var19;
                var23.onPress = var25;
                var25 = {};
                var25.disabled = var27;
                var25.theme = var19;
                var27 = 'next';
                var25.type = var27;
                var25 = var24.bind(var3)(var26, var25);
                var23.children = var25;
                var23 = var24.bind(var3)(var13, var23);
                var22[1] = var23;
                var12.children = var22;
                var11 = var20.bind(var3)(var17, var12);
            case 837:
                var4[1] = var11;
                var12 = _closure1_slot12;
                var17 = _closure1_slot11;
                var11 = {};
                var20 = _closure1_slot19;
                var22 = var20.flex;
                var11.style = var22;
                var22 = _closure1_slot17;
                var11.testID = var22;
                var11.children = var21;
                var11 = var12.bind(var3)(var17, var11);
                var4[2] = var11;
                var11 = {
                    'accessibilityHint': 'Closes the keyboard',
                    'accessibilityLabel': 'Done',
                    'rippleRadius': 28
                };
                var17 = 'Done';
                var20 = var20.doneButtonContainer;
                var11.style = var20;
                var20 = _closure1_slot18;
                var11.testID = var20;
                var11.theme = var19;
                var11.onPress = var15;
                var15 = _closure1_slot10;
                var14 = {};
                var19 = 1.3;
                var14.maxFontSizeMultiplier = var19;
                var14.style = var18;
                if (var16) {
                    _fun68383_ip = 966;
                    continue _fun68383
                }
            case 963:
                var16 = var17;
            case 966:
                var14.children = var16;
                var14 = var12.bind(var3)(var15, var14);
                var11.children = var14;
                var11 = var12.bind(var3)(var13, var11);
                var4[3] = var11;
                var7.children = var4;
                var4 = {};
                var4 = var8.bind(var9)(var4, var10, var7);
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.colors;
    var2.DefaultKeyboardToolbarTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 27, 33, 8503, 8504, 8477, 8505, 8506, 8491, 8498]);