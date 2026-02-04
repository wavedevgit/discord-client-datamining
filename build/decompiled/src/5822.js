// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['progress', 'layout', 'modal', 'onGoBack', 'headerTitle', 'headerLeft', 'headerRight', 'headerBackImage', 'headerBackTitle', 'headerBackTitleVisible', 'headerTruncatedBackTitle', 'headerBackAccessibilityLabel', 'headerBackTestID', 'headerBackAllowFontScaling', 'headerBackTitleStyle', 'headerTitleContainerStyle', 'headerLeftContainerStyle', 'headerRightContainerStyle', 'headerBackgroundContainerStyle', 'headerStyle', 'headerStatusBarHeight', 'styleInterpolator'];
    var _closure1_slot3 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Platform;
    var3 = var3.StyleSheet;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var1 = function arg0() {
        _fun51303: for (var _fun51303_ip = 0;;) switch (_fun51303_ip) {
            case 0:
                var11 = arg0;
                var8 = _closure1_slot6;
                var2 = var8.useState;
                var3 = undefined;
                var2 = var2.bind(var8)(var3);
                var7 = _closure1_slot5;
                var6 = 2;
                var2 = var7.bind(var3)(var2, var6);
                var5 = 0;
                var25 = var2[var5];
                var _closure2_slot0 = var25;
                var4 = 1;
                var2 = var2[var4];
                var _closure2_slot1 = var2;
                var2 = var8.useState;
                var2 = var2.bind(var8)(var3);
                var2 = var7.bind(var3)(var2, var6);
                var23 = var2[var5];
                var _closure2_slot2 = var23;
                var2 = var2[var4];
                var _closure2_slot3 = var2;
                var2 = function arg0() {
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.height;
                    var _closure3_slot0 = var2;
                    var0 = var0.width;
                    var _closure3_slot1 = var0;
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun51305: for (var _fun51305_ip = 0;;) switch (_fun51305_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun51305_ip = 35;
                                    continue _fun51305
                                }
                            case 6:
                                var3 = _closure3_slot0;
                                var2 = var0.height;
                                if (!(var3 === var2)) {
                                    _fun51305_ip = 35;
                                    continue _fun51305
                                }
                            case 22:
                                var2 = _closure3_slot1;
                                var1 = var0.width;
                                if (!(var2 !== var1)) {
                                    _fun51305_ip = 59;
                                    continue _fun51305
                                }
                            case 35:
                                var1 = {};
                                var3 = _closure3_slot0;
                                var1.height = var3;
                                var2 = _closure3_slot1;
                                var1.width = var2;
                                var0 = var1;
                            case 59:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure2_slot4 = var2;
                var2 = function arg0() {
                    _fun51306: for (var _fun51306_ip = 0;;) switch (_fun51306_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var3 = var0.height;
                            var0 = var0.width;
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun51306_ip = 48;
                                continue _fun51306
                            }
                        case 35:
                            var4 = _closure2_slot0;
                            var4 = var4.height;
                            var2 = var3 === var4;
                        case 48:
                            if (!var2) {
                                _fun51306_ip = 64;
                                continue _fun51306
                            }
                        case 51:
                            var4 = _closure2_slot0;
                            var4 = var4.width;
                            var2 = var0 === var4;
                        case 64:
                            if (var2) {
                                _fun51306_ip = 88;
                                continue _fun51306
                            }
                        case 67:
                            var2 = _closure2_slot1;
                            var1 = {};
                            var1.height = var3;
                            var1.width = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot5 = var2;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Environment: var1
                    _fun51307: for (var _fun51307_ip = 0;;) switch (_fun51307_ip) {
                        case 0:
                            var1 = arg1;
                            var4 = arg3;
                            var2 = {};
                            var0 = {};
                            var3 = arg2;
                            var0.progress = var3;
                            var2.current = var0;
                            var0 = var4;
                            if (!var0) {
                                _fun51307_ip = 38;
                                continue _fun51307
                            }
                        case 28:
                            var3 = {};
                            var3.progress = var4;
                            var0 = var3;
                        case 38:
                            var2.next = var0;
                            var0 = {};
                            var3 = {};
                            var4 = arg6;
                            var3.height = var4;
                            var4 = var1.width;
                            var3.width = var4;
                            var0.header = var3;
                            var0.screen = var1;
                            var1 = arg4;
                            var0.title = var1;
                            var1 = arg5;
                            var0.leftLabel = var1;
                            var2.layouts = var0;
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var20 = var4.bind(var3)(var2);
                var13 = var11.progress;
                var21 = var11.layout;
                var _closure2_slot6 = var21;
                var22 = var11.modal;
                var5 = var11.onGoBack;
                var _closure2_slot7 = var5;
                var2 = var11.headerTitle;
                var _closure2_slot8 = var2;
                var9 = var11.headerLeft;
                if (!(var3 === var9)) {
                    _fun51303_ip = 203;
                    continue _fun51303
                }
            case 190:
                var4 = undefined;
                if (!var5) {
                    _fun51303_ip = 200;
                    continue _fun51303
                }
            case 195:
                var4 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.HeaderBackButton;
                    var0 = global;
                    var6 = var0.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var0 = arg0;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
            case 200:
                var9 = var4;
            case 203:
                var _closure2_slot9 = var9;
                var5 = var11.headerRight;
                var _closure2_slot10 = var5;
                var4 = var11.headerBackImage;
                var _closure2_slot11 = var4;
                var26 = var11.headerBackTitle;
                var _closure2_slot12 = var26;
                var4 = var11.headerBackTitleVisible;
                var18 = var3 !== var4;
                if (!var18) {
                    _fun51303_ip = 253;
                    continue _fun51303
                }
            case 250:
                var18 = var4;
            case 253:
                var4 = var11.headerTruncatedBackTitle;
                var _closure2_slot13 = var4;
                var4 = var11.headerBackAccessibilityLabel;
                var _closure2_slot14 = var4;
                var4 = var11.headerBackTestID;
                var _closure2_slot15 = var4;
                var4 = var11.headerBackAllowFontScaling;
                var _closure2_slot16 = var4;
                var4 = var11.headerBackTitleStyle;
                var _closure2_slot17 = var4;
                var16 = var11.headerTitleContainerStyle;
                var14 = var11.headerLeftContainerStyle;
                var12 = var11.headerRightContainerStyle;
                var10 = var11.headerBackgroundContainerStyle;
                var8 = var11.headerStyle;
                var7 = var11.headerStatusBarHeight;
                var19 = var11.styleInterpolator;
                var6 = _closure1_slot4;
                var4 = _closure1_slot3;
                var6 = var6.bind(var3)(var11, var4);
                var15 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 6;
                var11 = var11[var4];
                var15 = var15.bind(var3)(var11);
                var11 = var15.getDefaultHeaderHeight;
                var11 = var11.bind(var15)(var21, var22, var7);
                var24 = _closure1_slot7;
                var17 = var24.flatten;
                var15 = var8;
                if (var15) {
                    _fun51303_ip = 418;
                    continue _fun51303
                }
            case 416:
                var15 = {};
            case 418:
                var15 = var17.bind(var24)(var15);
                var24 = var15.height;
                if (!(var3 === var24)) {
                    _fun51303_ip = 435;
                    continue _fun51303
                }
            case 432:
                var24 = var11;
            case 435:
                var17 = var13.current;
                var15 = var13.next;
                var13 = undefined;
                if (!var26) {
                    _fun51303_ip = 453;
                    continue _fun51303
                }
            case 450:
                var13 = var25;
            case 453:
                var26 = 'number';
                var25 = typeof var24;
                if (!(var26 === var25)) {
                    _fun51303_ip = 467;
                    continue _fun51303
                }
            case 464:
                var11 = var24;
            case 467:
                var35 = undefined;
                var34 = var19;
                var33 = var21;
                var32 = var17;
                var31 = var15;
                var30 = var23;
                var29 = var13;
                var28 = var11;
                var11 = var35[var20](var34, var33, var32, var31, var30, var29, var28, var27);
                var17 = var11.titleStyle;
                var15 = var11.leftButtonStyle;
                var13 = var11.leftLabelStyle;
                var _closure2_slot18 = var13;
                var13 = var11.rightButtonStyle;
                var11 = var11.backgroundStyle;
                var19 = undefined;
                if (!var9) {
                    _fun51303_ip = 538;
                    continue _fun51303
                }
            case 533:
                var19 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot9;
                    var0 = global;
                    var6 = var0.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var3 = _closure2_slot11;
                    var4.backImage = var3;
                    var3 = _closure2_slot14;
                    var4.accessibilityLabel = var3;
                    var3 = _closure2_slot15;
                    var4.testID = var3;
                    var3 = _closure2_slot16;
                    var4.allowFontScaling = var3;
                    var3 = _closure2_slot7;
                    var4.onPress = var3;
                    var7 = _closure2_slot12;
                    var4.label = var7;
                    var7 = _closure2_slot13;
                    var4.truncatedLabel = var7;
                    var8 = _closure2_slot18;
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = _closure2_slot17;
                    var7[1] = var8;
                    var4.labelStyle = var7;
                    var7 = _closure2_slot5;
                    var4.onLabelLayout = var7;
                    var7 = _closure2_slot6;
                    var4.screenLayout = var7;
                    var1 = _closure2_slot2;
                    var4.titleLayout = var1;
                    var0 = var0.Boolean;
                    var1 = undefined;
                    var0 = var0.bind(var1)(var3);
                    var4.canGoBack = var0;
                    var3 = {};
                    var0 = arg0;
                    var0 = var5.bind(var6)(var3, var0, var4);
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
            case 538:
                var9 = undefined;
                if (!var5) {
                    _fun51303_ip = 548;
                    continue _fun51303
                }
            case 543:
                var9 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot10;
                    var1 = global;
                    var6 = var1.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var3 = var1.Boolean;
                    var0 = _closure2_slot7;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var0);
                    var4.canGoBack = var0;
                    var3 = {};
                    var0 = arg0;
                    var0 = var5.bind(var6)(var3, var0, var4);
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
            case 548:
                var5 = 'function';
                var2 = typeof var2;
                if (!(var5 === var2)) {
                    _fun51303_ip = 566;
                    continue _fun51303
                }
            case 559:
                var20 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot8;
                    var1 = global;
                    var5 = var1.Object;
                    var4 = var5.assign;
                    var3 = {};
                    var0 = _closure2_slot4;
                    var3.onLayout = var0;
                    var1 = {};
                    var0 = arg0;
                    var1 = var4.bind(var5)(var1, var0, var3);
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                _fun51303_ip = 571;
                continue _fun51303;
            case 566:
                var20 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.HeaderTitle;
                    var0 = global;
                    var7 = var0.Object;
                    var6 = var7.assign;
                    var5 = {};
                    var0 = _closure2_slot4;
                    var5.onLayout = var0;
                    var4 = {};
                    var0 = arg0;
                    var0 = var6.bind(var7)(var4, var0, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
            case 571:
                var2 = _closure1_slot8;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Header;
                var0 = global;
                var5 = var0.Object;
                var4 = var5.assign;
                var0 = {};
                var0.modal = var22;
                var0.layout = var21;
                var0.headerTitle = var20;
                var0.headerLeft = var19;
                var0.headerLeftLabelVisible = var18;
                var0.headerRight = var9;
                var9 = new Array(2);
                var9[0] = var17;
                var9[1] = var16;
                var0.headerTitleContainerStyle = var9;
                var9 = new Array(2);
                var9[0] = var15;
                var9[1] = var14;
                var0.headerLeftContainerStyle = var9;
                var9 = new Array(2);
                var9[0] = var13;
                var9[1] = var12;
                var0.headerRightContainerStyle = var9;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var0.headerBackgroundContainerStyle = var9;
                var0.headerStyle = var8;
                var0.headerStatusBarHeight = var7;
                var0 = var4.bind(var5)(var0, var6);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 31, 27, 33, 5823, 5795]);