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
        _fun44544: for (var _fun44544_ip = 0;;) switch (_fun44544_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun44544_ip = 53;
                    continue _fun44544
                }
            case 12:
                var3 = _closure1_slot3;
                var1 = var3.isValidElement;
                var3 = var1.bind(var3)(var5);
                var1 = var5;
                if (var3) {
                    _fun44544_ip = 50;
                    continue _fun44544
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
            _fun44546: for (var _fun44546_ip = 0;;) switch (_fun44546_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun44546_ip = 11;
                        continue _fun44546
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
        var1 = {};
        var0.containerPressed = var1;
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
        _fun44547: for (var _fun44547_ip = 0;;) switch (_fun44547_ip) {
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
                    _fun44547_ip = 83;
                    continue _fun44547
                }
            case 81:
                var16 = false;
            case 83:
                var32 = var0.hasError;
                if (!(var32 === var3)) {
                    _fun44547_ip = 95;
                    continue _fun44547
                }
            case 93:
                var32 = false;
            case 95:
                var15 = var0.accessible;
                if (!(var15 === var3)) {
                    _fun44547_ip = 106;
                    continue _fun44547
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
                var _closure2_slot4 = var7;
                var31 = var0.activeOpacity;
                var34 = var0.style;
                var6 = var0.labelStyle;
                var _closure2_slot5 = var6;
                var6 = var0.trailingWrapperStyle;
                var _closure2_slot6 = var6;
                var6 = var0.leadingStyle;
                var _closure2_slot7 = var6;
                var6 = var0.delayLongPress;
                var22 = var0.start;
                if (!(var22 === var3)) {
                    _fun44547_ip = 216;
                    continue _fun44547
                }
            case 214:
                var22 = false;
            case 216:
                var21 = var0.end;
                if (!(var21 === var3)) {
                    _fun44547_ip = 227;
                    continue _fun44547
                }
            case 225:
                var21 = false;
            case 227:
                var23 = var0.variant;
                var _closure2_slot8 = var3;
                var26 = function() {
                    _fun44548: for (var _fun44548_ip = 0;;) switch (_fun44548_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = 'function';
                            var0 = typeof var0;
                            if (!(var1 !== var0)) {
                                _fun44548_ip = 104;
                                continue _fun44548
                            }
                        case 18:
                            var4 = _closure1_slot3;
                            var3 = var4.isValidElement;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun44548_ip = 104;
                                continue _fun44548
                            }
                        case 43:
                            var4 = _closure1_slot5;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 8;
                            var0 = var3[var0];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = {};
                            var5 = _closure2_slot4;
                            var0.numberOfLines = var5;
                            var5 = _closure2_slot0;
                            var0.text = var5;
                            var5 = _closure2_slot5;
                            var0.style = var5;
                            var13 = var4.bind(var3)(var2, var0);
                            _fun44548_ip = 122;
                            continue _fun44548;
                        case 104:
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var13 = var3.bind(var0)(var2);
                        case 122:
                            var0 = _closure2_slot2;
                            var0 = typeof var0;
                            if (!(var1 !== var0)) {
                                _fun44548_ip = 224;
                                continue _fun44548
                            }
                        case 133:
                            var4 = _closure1_slot3;
                            var3 = var4.isValidElement;
                            var2 = _closure2_slot2;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun44548_ip = 224;
                                continue _fun44548
                            }
                        case 158:
                            var2 = _closure2_slot2;
                            var12 = null;
                            var2 = var12 != var2;
                            if (!var2) {
                                _fun44548_ip = 222;
                                continue _fun44548
                            }
                        case 171:
                            var4 = _closure1_slot5;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 9;
                            var0 = var3[var0];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = {};
                            var5 = _closure2_slot2;
                            var0.text = var5;
                            var5 = _closure2_slot4;
                            var0.numberOfLines = var5;
                            var12 = var4.bind(var3)(var2, var0);
                        case 222:
                            _fun44548_ip = 242;
                            continue _fun44548;
                        case 224:
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var12 = var3.bind(var0)(var2);
                        case 242:
                            var0 = _closure2_slot1;
                            var0 = typeof var0;
                            if (!(var1 !== var0)) {
                                _fun44548_ip = 284;
                                continue _fun44548
                            }
                        case 253:
                            var3 = _closure1_slot3;
                            var2 = var3.isValidElement;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var0);
                            if (var0) {
                                _fun44548_ip = 284;
                                continue _fun44548
                            }
                        case 278:
                            var4 = _closure2_slot1;
                            _fun44548_ip = 302;
                            continue _fun44548;
                        case 284:
                            var3 = _closure1_slot8;
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                        case 302:
                            var0 = _closure2_slot3;
                            var0 = typeof var0;
                            if (!(var1 !== var0)) {
                                _fun44548_ip = 344;
                                continue _fun44548
                            }
                        case 313:
                            var2 = _closure1_slot3;
                            var1 = var2.isValidElement;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun44548_ip = 344;
                                continue _fun44548
                            }
                        case 338:
                            var9 = _closure2_slot3;
                            _fun44548_ip = 362;
                            continue _fun44548;
                        case 344:
                            var2 = _closure1_slot8;
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var9 = var2.bind(var0)(var1);
                        case 362:
                            var3 = _closure1_slot6;
                            var0 = _closure1_slot3;
                            var2 = var0.Fragment;
                            var1 = {};
                            var0 = _closure2_slot1;
                            var5 = null;
                            var7 = var5 != var0;
                            var0 = null;
                            if (!var7) {
                                _fun44548_ip = 448;
                                continue _fun44548
                            }
                        case 396:
                            var10 = _closure1_slot5;
                            var8 = _closure1_slot4;
                            var7 = {};
                            var14 = _closure2_slot8;
                            var15 = var14.leading;
                            var14 = new Array(2);
                            var14[0] = var15;
                            var15 = _closure2_slot7;
                            var14[1] = var15;
                            var7.style = var14;
                            var7.children = var4;
                            var4 = undefined;
                            var0 = var10.bind(var4)(var8, var7);
                        case 448:
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
                                _fun44548_ip = 570;
                                continue _fun44548
                            }
                        case 520:
                            var8 = _closure1_slot5;
                            var7 = _closure1_slot4;
                            var6 = {};
                            var10 = _closure2_slot8;
                            var12 = var10.trailing;
                            var10 = new Array(2);
                            var10[0] = var12;
                            var11 = _closure2_slot6;
                            var10[1] = var11;
                            var6.style = var10;
                            var6.children = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 570:
                            var4[2] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var17 = _closure1_slot7;
                var33 = var17.bind(var3)();
                _closure2_slot8 = var33;
                var20 = _closure1_slot3;
                var17 = var20.useContext;
                var25 = _closure1_slot0;
                var29 = _closure1_slot2;
                var1 = 5;
                var1 = var29[var1];
                var1 = var25.bind(var3)(var1);
                var1 = var1.FormContext;
                var1 = var17.bind(var20)(var1);
                var28 = var1.isForm;
                var20 = _closure1_slot3;
                var17 = var20.useContext;
                var1 = 6;
                var1 = var29[var1];
                var1 = var25.bind(var3)(var1);
                var1 = var1.RedesignCompatContext;
                var1 = var17.bind(var20)(var1);
                if (var1) {
                    _fun44547_ip = 711;
                    continue _fun44547
                }
            case 342:
                var29 = {};
                var29.disabled = var16;
                var40 = var29;
                var39 = var11;
                var1 = copyDataProperties(var40, var39);
                var30 = null;
                if (!(var30 == var5)) {
                    _fun44547_ip = 498;
                    continue _fun44547
                }
            case 367:
                if (!(var30 == var4)) {
                    _fun44547_ip = 498;
                    continue _fun44547
                }
            case 374:
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
                    _fun44547_ip = 420;
                    continue _fun44547
                }
            case 415:
                var37 = var33.error;
            case 420:
                var25[3] = var37;
                var37 = null;
                if (!var16) {
                    _fun44547_ip = 434;
                    continue _fun44547
                }
            case 429:
                var37 = var33.disabled;
            case 434:
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
                _fun44547_ip = 709;
                continue _fun44547;
            case 498:
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
                    _fun44547_ip = 568;
                    continue _fun44547
                }
            case 563:
                var32 = var33.error;
            case 568:
                var31[3] = var32;
                var32 = null;
                if (!var16) {
                    _fun44547_ip = 582;
                    continue _fun44547
                }
            case 577:
                var32 = var33.disabled;
            case 582:
                var31[4] = var32;
                var17.style = var31;
                var17.disabled = var16;
                var31 = true;
                var17.accessible = var31;
                var31 = var30 != var12;
                var30 = 'button';
                if (!var31) {
                    _fun44547_ip = 614;
                    continue _fun44547
                }
            case 611:
                var30 = var12;
            case 614:
                var17.accessibilityRole = var30;
                var17.accessibilityState = var29;
                var17.accessibilityLabel = var14;
                var17.accessibilityHint = var13;
                var17.accessibilityActions = var10;
                var17.onAccessibilityAction = var9;
                var29 = undefined;
                if (var16) {
                    _fun44547_ip = 650;
                    continue _fun44547
                }
            case 647:
                var29 = var8;
            case 650:
                var17.onAccessibilityTap = var29;
                var29 = undefined;
                if (var16) {
                    _fun44547_ip = 663;
                    continue _fun44547
                }
            case 660:
                var29 = var5;
            case 663:
                var17.onPress = var29;
                var17.onLongPress = var4;
                var17.onPressOut = var27;
                var17.delayLongPress = var6;
                var27 = undefined;
                if (!var28) {
                    _fun44547_ip = 690;
                    continue _fun44547
                }
            case 687:
                var27 = 130;
            case 690:
                var17.unstable_pressDelay = var27;
                var26 = var26.bind(var3)();
                var17.children = var26;
                var1 = var25.bind(var3)(var20, var17);
            case 709:
                return var1;
            case 711:
                var17 = 'function';
                var1 = typeof var19;
                if (!(var17 !== var1)) {
                    _fun44547_ip = 743;
                    continue _fun44547
                }
            case 722:
                var20 = _closure1_slot3;
                var1 = var20.isValidElement;
                var1 = var1.bind(var20)(var19);
                var20 = var19;
                if (!var1) {
                    _fun44547_ip = 752;
                    continue _fun44547
                }
            case 743:
                var1 = _closure1_slot8;
                var20 = var1.bind(var3)(var19);
            case 752:
                var1 = typeof var18;
                if (!(var17 !== var1)) {
                    _fun44547_ip = 791;
                    continue _fun44547
                }
            case 759:
                var19 = _closure1_slot3;
                var1 = var19.isValidElement;
                var1 = var1.bind(var19)(var18);
                if (var1) {
                    _fun44547_ip = 791;
                    continue _fun44547
                }
            case 777:
                var19 = null;
                var1 = var19 != var18;
                if (!var1) {
                    _fun44547_ip = 789;
                    continue _fun44547
                }
            case 786:
                var19 = var18;
            case 789:
                _fun44547_ip = 800;
                continue _fun44547;
            case 791:
                var1 = _closure1_slot8;
                var19 = var1.bind(var3)(var18);
            case 800:
                var1 = typeof var24;
                if (!(var17 !== var1)) {
                    _fun44547_ip = 828;
                    continue _fun44547
                }
            case 807:
                var18 = _closure1_slot3;
                var1 = var18.isValidElement;
                var1 = var1.bind(var18)(var24);
                var18 = var24;
                if (!var1) {
                    _fun44547_ip = 837;
                    continue _fun44547
                }
            case 828:
                var1 = _closure1_slot8;
                var18 = var1.bind(var3)(var24);
            case 837:
                var1 = typeof var2;
                if (!(var17 !== var1)) {
                    _fun44547_ip = 865;
                    continue _fun44547
                }
            case 844:
                var17 = _closure1_slot3;
                var1 = var17.isValidElement;
                var1 = var1.bind(var17)(var2);
                var17 = var2;
                if (!var1) {
                    _fun44547_ip = 874;
                    continue _fun44547
                }
            case 865:
                var1 = _closure1_slot8;
                var17 = var1.bind(var3)(var2);
            case 874:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var24 = _closure1_slot2;
                var0 = 7;
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
    var1 = 8;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var3.Label = var1;
    var1 = 9;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4895, 4900, 4901, 4914, 4915, 4905, 4916, 4917, 4920, 4924, 4927, 2]);