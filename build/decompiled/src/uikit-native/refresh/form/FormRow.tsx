// uikit-native/refresh/form/FormRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun44474: for (var _fun44474_ip = 0;;) switch (_fun44474_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun44474_ip = 53;
                    continue _fun44474
                }
            case 12:
                var3 = _closure1_slot3;
                var1 = var3.isValidElement;
                var3 = var1.bind(var3)(var5);
                var1 = var5;
                if (var3) {
                    _fun44474_ip = 50;
                    continue _fun44474
                }
            case 36:
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = {};
                var1 = var4.bind(var3)(var5, var2);
            case 50:
                var0 = var1;
            case 53:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = arg3;
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Platform;
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.jsx;
    var _closure1_slot5 = var8;
    var6 = var6.jsxs;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var5[var6];
    var10 = var4.bind(var0)(var6);
    var8 = var10.createStyles;
    var6 = function() { // Environment: var3
        var4 = function() {
            _fun44476: for (var _fun44476_ip = 0;;) switch (_fun44476_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun44476_ip = 11;
                        continue _fun44476
                    }
                case 9:
                    var2 = 0;
                case 11:
                    var0 = {};
                    var1 = 16;
                    var1 = var1 + var2;
                    var0.paddingHorizontal = var1;
                    var0.paddingVertical = var1;
                    return var0;
            }
        };
        var0 = {};
        var1 = {
            'flexDirection': 'row',
            'justifyContent': 'flex-start',
            'alignItems': 'center'
        };
        var3 = undefined;
        var7 = var4.bind(var3)();
        var8 = var1;
        var2 = copyDataProperties(var8, var7);
        var0.container = var1;
        var1 = {
            'flexShrink': 1,
            'flexGrow': 1,
            'flexBasis': '30%'
        };
        var0.label = var1;
        var1 = {
            'flexGrow': 0,
            'marginRight': 16
        };
        var0.leading = var1;
        var1 = {
            'marginLeft': 'auto',
            'paddingLeft': 16,
            'textAlign': 'right',
            'flexShrink': 0
        };
        var0.trailing = var1;
        var1 = {};
        var2 = 0.5;
        var1.opacity = var2;
        var0.disabled = var1;
        var1 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 4;
        var2 = var6[var2];
        var2 = var5.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.BORDER_FEEDBACK_CRITICAL;
        var1.borderColor = var2;
        var2 = 2;
        var1.borderWidth = var2;
        var2 = -2;
        var7 = var4.bind(var3)(var2);
        var8 = var1;
        var2 = copyDataProperties(var8, var7);
        var0.error = var1;
        return var0;
    };
    var6 = var8.bind(var10)(var6);
    var _closure1_slot7 = var6;
    var6 = var7.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var3
        _fun44477: for (var _fun44477_ip = 0;;) switch (_fun44477_ip) {
            case 0:
                var0 = arg0;
                var36 = arg1;
                var19 = var0.label;
                var _closure2_slot0 = var19;
                var24 = var0.leading;
                var _closure2_slot1 = var24;
                var5 = var0.onPress;
                var4 = var0.onLongPress;
                var27 = var0.onPressOut;
                var35 = var0.DEPRECATED_style;
                var18 = var0.subLabel;
                var _closure2_slot2 = var18;
                var2 = var0.trailing;
                var _closure2_slot3 = var2;
                var16 = var0.disabled;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun44477_ip = 83;
                    continue _fun44477
                }
            case 81:
                var16 = false;
            case 83:
                var32 = var0.hasError;
                if (!(var32 === var3)) {
                    _fun44477_ip = 95;
                    continue _fun44477
                }
            case 93:
                var32 = false;
            case 95:
                var15 = var0.accessible;
                if (!(var15 === var3)) {
                    _fun44477_ip = 106;
                    continue _fun44477
                }
            case 104:
                var15 = true;
            case 106:
                var14 = var0.accessibilityLabel;
                var13 = var0.accessibilityHint;
                var12 = var0.accessibilityRole;
                var11 = var0.accessibilityState;
                var10 = var0.accessibilityActions;
                var9 = var0.onAccessibilityAction;
                var8 = var0.onAccessibilityTap;
                var7 = var0.numberOfLines;
                var31 = var0.activeOpacity;
                var34 = var0.style;
                var28 = var0.labelStyle;
                var6 = var0.trailingWrapperStyle;
                var _closure2_slot4 = var6;
                var6 = var0.leadingStyle;
                var _closure2_slot5 = var6;
                var6 = var0.delayLongPress;
                var22 = var0.start;
                if (!(var22 === var3)) {
                    _fun44477_ip = 208;
                    continue _fun44477
                }
            case 206:
                var22 = false;
            case 208:
                var21 = var0.end;
                if (!(var21 === var3)) {
                    _fun44477_ip = 219;
                    continue _fun44477
                }
            case 217:
                var21 = false;
            case 219:
                var23 = var0.variant;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var26 = function() {
                    _fun44478: for (var _fun44478_ip = 0;;) switch (_fun44478_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = 'function';
                            var0 = typeof var0;
                            if (!(var1 !== var0)) {
                                _fun44478_ip = 49;
                                continue _fun44478
                            }
                        case 18:
                            var3 = _closure1_slot3;
                            var2 = var3.isValidElement;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            if (var0) {
                                _fun44478_ip = 49;
                                continue _fun44478
                            }
                        case 43:
                            var13 = _closure2_slot7;
                            _fun44478_ip = 67;
                            continue _fun44478;
                        case 49:
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var13 = var3.bind(var0)(var2);
                        case 67:
                            var0 = _closure2_slot2;
                            var0 = typeof var0;
                            if (!(var1 !== var0)) {
                                _fun44478_ip = 122;
                                continue _fun44478
                            }
                        case 78:
                            var3 = _closure1_slot3;
                            var2 = var3.isValidElement;
                            var0 = _closure2_slot2;
                            var0 = var2.bind(var3)(var0);
                            if (var0) {
                                _fun44478_ip = 122;
                                continue _fun44478
                            }
                        case 103:
                            var0 = _closure2_slot2;
                            var12 = null;
                            var0 = var12 != var0;
                            if (!var0) {
                                _fun44478_ip = 120;
                                continue _fun44478
                            }
                        case 116:
                            var12 = _closure2_slot6;
                        case 120:
                            _fun44478_ip = 140;
                            continue _fun44478;
                        case 122:
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var12 = var3.bind(var0)(var2);
                        case 140:
                            var0 = _closure2_slot1;
                            var0 = typeof var0;
                            if (!(var1 !== var0)) {
                                _fun44478_ip = 182;
                                continue _fun44478
                            }
                        case 151:
                            var3 = _closure1_slot3;
                            var2 = var3.isValidElement;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var0);
                            if (var0) {
                                _fun44478_ip = 182;
                                continue _fun44478
                            }
                        case 176:
                            var4 = _closure2_slot1;
                            _fun44478_ip = 200;
                            continue _fun44478;
                        case 182:
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                        case 200:
                            var0 = _closure2_slot3;
                            var0 = typeof var0;
                            if (!(var1 !== var0)) {
                                _fun44478_ip = 242;
                                continue _fun44478
                            }
                        case 211:
                            var2 = _closure1_slot3;
                            var1 = var2.isValidElement;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun44478_ip = 242;
                                continue _fun44478
                            }
                        case 236:
                            var9 = _closure2_slot3;
                            _fun44478_ip = 260;
                            continue _fun44478;
                        case 242:
                            var2 = _closure1_slot8;
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var9 = var2.bind(var0)(var1);
                        case 260:
                            var3 = _closure1_slot6;
                            var0 = _closure1_slot3;
                            var2 = var0.Fragment;
                            var1 = {};
                            var0 = _closure2_slot1;
                            var5 = null;
                            var7 = var5 != var0;
                            var0 = null;
                            if (!var7) {
                                _fun44478_ip = 346;
                                continue _fun44478
                            }
                        case 294:
                            var10 = _closure1_slot5;
                            var8 = _closure1_slot4;
                            var7 = {};
                            var14 = _closure2_slot8;
                            var15 = var14.leading;
                            var14 = new Array(2);
                            var14[0] = var15;
                            var15 = _closure2_slot5;
                            var14[1] = var15;
                            var7.style = var14;
                            var7.children = var4;
                            var4 = undefined;
                            var0 = var10.bind(var4)(var8, var7);
                        case 346:
                            var4 = new Array(3);
                            var4[0] = var0;
                            var10 = _closure1_slot6;
                            var8 = _closure1_slot4;
                            var7 = {};
                            var0 = _closure2_slot8;
                            var0 = var0.label;
                            var7.style = var0;
                            var0 = new Array(2);
                            var0[0] = var13;
                            var0[1] = var12;
                            var7.children = var0;
                            var0 = undefined;
                            var7 = var10.bind(var0)(var8, var7);
                            var4[1] = var7;
                            var7 = _closure2_slot3;
                            var7 = var5 != var7;
                            var5 = null;
                            if (!var7) {
                                _fun44478_ip = 468;
                                continue _fun44478
                            }
                        case 418:
                            var8 = _closure1_slot5;
                            var7 = _closure1_slot4;
                            var6 = {};
                            var10 = _closure2_slot8;
                            var12 = var10.trailing;
                            var10 = new Array(2);
                            var10[0] = var12;
                            var11 = _closure2_slot4;
                            var10[1] = var11;
                            var6.style = var10;
                            var6.children = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 468:
                            var4[2] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var30 = _closure1_slot5;
                var20 = _closure1_slot1;
                var29 = _closure1_slot2;
                var17 = 5;
                var17 = var29[var17];
                var25 = var20.bind(var3)(var17);
                var17 = {};
                var17.text = var18;
                var17.numberOfLines = var7;
                var17 = var30.bind(var3)(var25, var17);
                _closure2_slot6 = var17;
                var25 = _closure1_slot5;
                var17 = 6;
                var17 = var29[var17];
                var20 = var20.bind(var3)(var17);
                var17 = {};
                var17.numberOfLines = var7;
                var17.text = var19;
                var17.style = var28;
                var17 = var25.bind(var3)(var20, var17);
                _closure2_slot7 = var17;
                var17 = _closure1_slot7;
                var33 = var17.bind(var3)();
                _closure2_slot8 = var33;
                var20 = _closure1_slot3;
                var17 = var20.useContext;
                var25 = _closure1_slot0;
                var1 = 7;
                var1 = var29[var1];
                var1 = var25.bind(var3)(var1);
                var1 = var1.FormContext;
                var1 = var17.bind(var20)(var1);
                var28 = var1.isForm;
                var20 = _closure1_slot3;
                var17 = var20.useContext;
                var1 = 8;
                var1 = var29[var1];
                var1 = var25.bind(var3)(var1);
                var1 = var1.RedesignCompatContext;
                var1 = var17.bind(var20)(var1);
                if (var1) {
                    _fun44477_ip = 793;
                    continue _fun44477
                }
            case 424:
                var29 = {};
                var29.disabled = var16;
                var40 = var29;
                var39 = var11;
                var1 = copyDataProperties(var40, var39);
                var30 = null;
                if (!(var30 == var5)) {
                    _fun44477_ip = 580;
                    continue _fun44477
                }
            case 449:
                if (!(var30 == var4)) {
                    _fun44477_ip = 580;
                    continue _fun44477
                }
            case 456:
                var20 = _closure1_slot5;
                var17 = _closure1_slot4;
                var1 = {};
                var1.ref = var36;
                var37 = var33.container;
                var25 = new Array(5);
                var25[0] = var37;
                var25[1] = var35;
                var25[2] = var34;
                var37 = var32;
                if (!var32) {
                    _fun44477_ip = 502;
                    continue _fun44477
                }
            case 497:
                var37 = var33.error;
            case 502:
                var25[3] = var37;
                var37 = null;
                if (!var16) {
                    _fun44477_ip = 516;
                    continue _fun44477
                }
            case 511:
                var37 = var33.disabled;
            case 516:
                var25[4] = var37;
                var1.style = var25;
                var1.accessible = var15;
                var1.accessibilityRole = var12;
                var1.accessibilityState = var29;
                var1.accessibilityLabel = var14;
                var1.accessibilityHint = var13;
                var1.accessibilityActions = var10;
                var1.onAccessibilityAction = var9;
                var1.onAccessibilityTap = var8;
                var25 = var26.bind(var3)();
                var1.children = var25;
                var1 = var20.bind(var3)(var17, var1);
                _fun44477_ip = 791;
                continue _fun44477;
            case 580:
                var25 = _closure1_slot5;
                var20 = _closure1_slot0;
                var37 = _closure1_slot2;
                var17 = 10;
                var17 = var37[var17];
                var17 = var20.bind(var3)(var17);
                var20 = var17.PressableHighlight;
                var17 = {};
                var17.ref = var36;
                var17.activeOpacity = var31;
                var36 = var33.container;
                var31 = new Array(5);
                var31[0] = var36;
                var31[1] = var35;
                var31[2] = var34;
                if (!var32) {
                    _fun44477_ip = 650;
                    continue _fun44477
                }
            case 645:
                var32 = var33.error;
            case 650:
                var31[3] = var32;
                var32 = null;
                if (!var16) {
                    _fun44477_ip = 664;
                    continue _fun44477
                }
            case 659:
                var32 = var33.disabled;
            case 664:
                var31[4] = var32;
                var17.style = var31;
                var17.disabled = var16;
                var31 = true;
                var17.accessible = var31;
                var31 = var30 != var12;
                var30 = 'button';
                if (!var31) {
                    _fun44477_ip = 696;
                    continue _fun44477
                }
            case 693:
                var30 = var12;
            case 696:
                var17.accessibilityRole = var30;
                var17.accessibilityState = var29;
                var17.accessibilityLabel = var14;
                var17.accessibilityHint = var13;
                var17.accessibilityActions = var10;
                var17.onAccessibilityAction = var9;
                var29 = undefined;
                if (var16) {
                    _fun44477_ip = 732;
                    continue _fun44477
                }
            case 729:
                var29 = var8;
            case 732:
                var17.onAccessibilityTap = var29;
                var29 = undefined;
                if (var16) {
                    _fun44477_ip = 745;
                    continue _fun44477
                }
            case 742:
                var29 = var5;
            case 745:
                var17.onPress = var29;
                var17.onLongPress = var4;
                var17.onPressOut = var27;
                var17.delayLongPress = var6;
                var27 = undefined;
                if (!var28) {
                    _fun44477_ip = 772;
                    continue _fun44477
                }
            case 769:
                var27 = 130;
            case 772:
                var17.unstable_pressDelay = var27;
                var26 = var26.bind(var3)();
                var17.children = var26;
                var1 = var25.bind(var3)(var20, var17);
            case 791:
                return var1;
            case 793:
                var17 = 'function';
                var1 = typeof var19;
                if (!(var17 !== var1)) {
                    _fun44477_ip = 825;
                    continue _fun44477
                }
            case 804:
                var20 = _closure1_slot3;
                var1 = var20.isValidElement;
                var1 = var1.bind(var20)(var19);
                var20 = var19;
                if (!var1) {
                    _fun44477_ip = 834;
                    continue _fun44477
                }
            case 825:
                var1 = _closure1_slot8;
                var20 = var1.bind(var3)(var19);
            case 834:
                var1 = typeof var18;
                if (!(var17 !== var1)) {
                    _fun44477_ip = 873;
                    continue _fun44477
                }
            case 841:
                var19 = _closure1_slot3;
                var1 = var19.isValidElement;
                var1 = var1.bind(var19)(var18);
                if (var1) {
                    _fun44477_ip = 873;
                    continue _fun44477
                }
            case 859:
                var19 = null;
                var1 = var19 != var18;
                if (!var1) {
                    _fun44477_ip = 871;
                    continue _fun44477
                }
            case 868:
                var19 = var18;
            case 871:
                _fun44477_ip = 882;
                continue _fun44477;
            case 873:
                var1 = _closure1_slot8;
                var19 = var1.bind(var3)(var18);
            case 882:
                var1 = typeof var24;
                if (!(var17 !== var1)) {
                    _fun44477_ip = 910;
                    continue _fun44477
                }
            case 889:
                var18 = _closure1_slot3;
                var1 = var18.isValidElement;
                var1 = var1.bind(var18)(var24);
                var18 = var24;
                if (!var1) {
                    _fun44477_ip = 919;
                    continue _fun44477
                }
            case 910:
                var1 = _closure1_slot8;
                var18 = var1.bind(var3)(var24);
            case 919:
                var1 = typeof var2;
                if (!(var17 !== var1)) {
                    _fun44477_ip = 947;
                    continue _fun44477
                }
            case 926:
                var17 = _closure1_slot3;
                var1 = var17.isValidElement;
                var1 = var1.bind(var17)(var2);
                var17 = var2;
                if (!var1) {
                    _fun44477_ip = 956;
                    continue _fun44477
                }
            case 947:
                var1 = _closure1_slot8;
                var17 = var1.bind(var3)(var2);
            case 956:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var24 = _closure1_slot2;
                var0 = 9;
                var0 = var24[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.variant = var23;
                var0.start = var22;
                var0.end = var21;
                var0.label = var20;
                var0.subLabel = var19;
                var0.icon = var18;
                var0.trailing = var17;
                var0.disabled = var16;
                var0.accessible = var15;
                var0.accessibilityLabel = var14;
                var0.accessibilityHint = var13;
                var0.accessibilityRole = var12;
                var0.accessibilityState = var11;
                var0.accessibilityActions = var10;
                var0.onAccessibilityAction = var9;
                var0.onAccessibilityTap = var8;
                var0.labelLineClamp = var7;
                var0.delayLongPress = var6;
                var0.onPress = var5;
                var0.onLongPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var8 = var6.bind(var7)(var3);
    var7 = var1.Object;
    var6 = var7.assign;
    var3 = {};
    var1 = 11;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var3.Arrow = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var3.Label = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var3.SubLabel = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var3.Radio = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var3.Checkbox = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var3.Checkmark = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var3.Icon = var1;
    var1 = {};
    var1 = var6.bind(var7)(var1, var8, var3);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4868, 4869, 4870, 4875, 4876, 4880, 4889, 4890, 4893, 4897, 4900, 2]);