// design/components/Button/native/BaseButton.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = ['style'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Pressable;
    var8 = var3.TouchableOpacity;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IOS_POINTER_STYLE;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun37613: for (var _fun37613_ip = 0;;) switch (_fun37613_ip) {
            case 0:
                var1 = arg0;
                var2 = {};
                var0 = 'secondary';
                if (!(var0 !== var1)) {
                    _fun37613_ip = 62;
                    continue _fun37613
                }
            case 13:
                var0 = 'primary-overlay';
                if (!(var0 === var1)) {
                    _fun37613_ip = 99;
                    continue _fun37613
                }
            case 23:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                var0 = var0.shadows;
                var2 = var0.SHADOW_BUTTON_OVERLAY;
                _fun37613_ip = 99;
                continue _fun37613;
            case 62:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                var0 = var0.shadows;
                var2 = var0.SHADOW_LOW;
            case 99:
                var0 = {};
                var1 = {};
                var5 = var1;
                var4 = var2;
                var2 = copyDataProperties(var5, var4);
                var0.button = var1;
                var1 = {};
                var2 = 0.5;
                var1.opacity = var2;
                var0.disabled = var1;
                return var0;
        }
    };
    var3 = var9.bind(var10)(var3);
    var _closure1_slot8 = var3;
    var3 = 9;
    var9 = var5[var3];
    var10 = var7.bind(var0)(var9);
    var9 = var10.createAnimatedComponent;
    var9 = var9.bind(var10)(var11);
    var _closure1_slot9 = var9;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var3 = var7.createAnimatedComponent;
    var3 = var3.bind(var7)(var8);
    var _closure1_slot10 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun37614: for (var _fun37614_ip = 0;;) switch (_fun37614_ip) {
            case 0:
                var0 = arg0;
                var23 = arg1;
                var29 = var0.children;
                var26 = var0.style;
                var32 = var0.variant;
                var3 = undefined;
                if (!(var32 === var3)) {
                    _fun37614_ip = 33;
                    continue _fun37614
                }
            case 29:
                var32 = 'primary';
            case 33:
                var2 = var0.disabled;
                if (!(var2 === var3)) {
                    _fun37614_ip = 44;
                    continue _fun37614
                }
            case 42:
                var2 = false;
            case 44:
                var5 = var0.loading;
                if (!(var5 === var3)) {
                    _fun37614_ip = 56;
                    continue _fun37614
                }
            case 54:
                var5 = false;
            case 56:
                var _closure2_slot0 = var5;
                var10 = var0.pressed;
                var1 = var0.onPress;
                var9 = var0.onPressDisabled;
                var27 = var0.onPressIn;
                var21 = var0.onPressOut;
                var8 = var0.onLongPress;
                var30 = var0.onLayout;
                var22 = var0.accessible;
                var4 = var0.accessibilityRole;
                var19 = var0.accessibilityLabel;
                var18 = var0.accessibilityHint;
                var17 = var0.accessibilityValue;
                var28 = var0.accessibilityState;
                var _closure2_slot1 = var28;
                var15 = var0.accessibilityActions;
                var14 = var0.onAccessibilityAction;
                var13 = var0.accessibilityElementsHidden;
                var12 = var0.importantForAccessibility;
                var11 = var0.pointerEvents;
                var6 = var0.hitSlop;
                var31 = var0.scaleAmountInPx;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var7 = _closure1_slot8;
                var24 = var7.bind(var3)(var32);
                var7 = var2;
                if (!var2) {
                    _fun37614_ip = 212;
                    continue _fun37614
                }
            case 206:
                var16 = null;
                var7 = var16 == var9;
            case 212:
                _closure2_slot2 = var7;
                if (!var2) {
                    _fun37614_ip = 222;
                    continue _fun37614
                }
            case 219:
                var1 = var9;
            case 222:
                var20 = null;
                var16 = var20 != var1;
                var9 = undefined;
                if (!var16) {
                    _fun37614_ip = 236;
                    continue _fun37614
                }
            case 233:
                var9 = var1;
            case 236:
                var16 = _closure1_slot0;
                var33 = _closure1_slot2;
                var1 = 8;
                var1 = var33[var1];
                var16 = var16.bind(var3)(var1);
                var1 = var16.useButtonPressAnimationProps;
                var39 = var16;
                var38 = var10;
                var37 = var31;
                var36 = var30;
                var35 = var27;
                var34 = var21;
                var33 = var39[var1](var38, var37, var36, var35, var34, var33);
                var16 = var33.style;
                var31 = _closure1_slot4;
                var1 = _closure1_slot3;
                var1 = var31.bind(var3)(var33, var1);
                if (!(var20 != var10)) {
                    _fun37614_ip = 321;
                    continue _fun37614
                }
            case 307:
                var10 = {};
                var10.animatedScaleStyles = var16;
                var10.buttonAnimationProps = var1;
                _fun37614_ip = 353;
                continue _fun37614;
            case 321:
                var1 = {};
                var1.animatedScaleStyles = var3;
                var16 = {};
                var16.onLayout = var30;
                var16.onPressIn = var27;
                var16.onPressOut = var21;
                var1.buttonAnimationProps = var16;
                var10 = var1;
            case 353:
                var1 = var10.animatedScaleStyles;
                var21 = var10.buttonAnimationProps;
                _closure2_slot3 = var21;
                var27 = _closure1_slot5;
                var16 = var27.useMemo;
                var10 = new Array(3);
                var10[0] = var28;
                var10[1] = var7;
                var10[2] = var5;
                var5 = function() { // Environment: var25
                    var0 = {};
                    var4 = _closure2_slot1;
                    var5 = var0;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure2_slot2;
                    var2 = 'disabled';
                    var0[var2] = var3;
                    var2 = _closure2_slot0;
                    var1 = 'busy';
                    var0[var1] = var2;
                    return var0;
                };
                var16 = var16.bind(var27)(var5, var10);
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var31 = 5;
                var5 = var5[var31];
                var10 = var10.bind(var3)(var5);
                var5 = var10.useThemeContext;
                var5 = var5.bind(var10)();
                var27 = var5.theme;
                var10 = 'light';
                var5 = 'primary-overlay';
                var30 = var10;
                if (!(var5 !== var32)) {
                    _fun37614_ip = 483;
                    continue _fun37614
                }
            case 458:
                var28 = 'secondary-overlay';
                var5 = undefined;
                if (!(var28 === var32)) {
                    _fun37614_ip = 480;
                    continue _fun37614
                }
            case 470:
                var5 = undefined;
                if (!(var10 === var27)) {
                    _fun37614_ip = 480;
                    continue _fun37614
                }
            case 476:
                var5 = 'dark';
            case 480:
                var30 = var5;
            case 483:
                var5 = var29;
                if (!(var20 != var30)) {
                    _fun37614_ip = 534;
                    continue _fun37614
                }
            case 490:
                var28 = _closure1_slot7;
                var27 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var31];
                var10 = var27.bind(var3)(var10);
                var27 = var10.ThemeContextProvider;
                var10 = {};
                var10.theme = var30;
                var10.children = var29;
                var5 = var28.bind(var3)(var27, var10);
            case 534:
                var27 = var24.button;
                var10 = new Array(5);
                var10[0] = var27;
                var10[1] = var26;
                if (!var2) {
                    _fun37614_ip = 560;
                    continue _fun37614
                }
            case 555:
                var2 = var24.disabled;
            case 560:
                var10[2] = var2;
                var10[3] = var1;
                var1 = _closure1_slot6;
                var10[4] = var1;
                var28 = 'none';
                if (!(var28 === var4)) {
                    _fun37614_ip = 861;
                    continue _fun37614
                }
            case 587:
                var27 = '';
                if (var13) {
                    _fun37614_ip = 658;
                    continue _fun37614
                }
            case 594:
                var24 = new Array(2);
                var24[0] = var19;
                var24[1] = var18;
                var2 = var24.filter;
                var26 = _closure1_slot0;
                var29 = _closure1_slot2;
                var1 = 10;
                var1 = var29[var1];
                var1 = var26.bind(var3)(var1);
                var1 = var1.isNotNullish;
                var24 = var2.bind(var24)(var1);
                var2 = var24.join;
                var1 = ', ';
                var27 = var2.bind(var24)(var1);
            case 658:
                var24 = _closure1_slot7;
                var2 = _closure1_slot10;
                var1 = {};
                var38 = var1;
                var37 = var21;
                var26 = copyDataProperties(var38, var37);
                var26 = 'ref';
                var1[var26] = var23;
                var26 = var22;
                if (!(var20 == var26)) {
                    _fun37614_ip = 724;
                    continue _fun37614
                }
            case 694:
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var29 = 11;
                var29 = var31[var29];
                var30 = var30.bind(var3)(var29);
                var29 = var30.isAndroid;
                var26 = var29.bind(var30)();
            case 724:
                var29 = !var26;
                if (!var29) {
                    _fun37614_ip = 732;
                    continue _fun37614
                }
            case 730:
                var29 = undefined;
            case 732:
                var26 = 'accessible';
                var1[var26] = var29;
                var26 = 'accessibilityRole';
                var1[var26] = var28;
                var26 = 'accessibilityLabel';
                var1[var26] = var27;
                var26 = 'accessibilityElementsHidden';
                var1[var26] = var13;
                var27 = 1;
                var26 = 'activeOpacity';
                var1[var26] = var27;
                var26 = 'importantForAccessibility';
                var1[var26] = var12;
                var26 = 'style';
                var1[var26] = var10;
                var26 = 'onPress';
                var1[var26] = var9;
                var27 = function arg0() {
                    _fun37616: for (var _fun37616_ip = 0;;) switch (_fun37616_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.onPressIn;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun37616_ip = 37;
                                continue _fun37616
                            }
                        case 19:
                            var2 = _closure2_slot3;
                            var1 = var2.onPressIn;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = 'onPressIn';
                var1[var26] = var27;
                var26 = function arg0() {
                    _fun37617: for (var _fun37617_ip = 0;;) switch (_fun37617_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.onPressOut;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun37617_ip = 37;
                                continue _fun37617
                            }
                        case 19:
                            var2 = _closure2_slot3;
                            var1 = var2.onPressOut;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = 'onPressOut';
                var1[var25] = var26;
                var25 = 'hitSlop';
                var1[var25] = var6;
                var25 = 'children';
                var1[var25] = var5;
                var1 = var24.bind(var3)(var2, var1);
                return var1;
            case 861:
                var2 = _closure1_slot7;
                var1 = _closure1_slot9;
                var0 = {};
                var38 = var0;
                var37 = var21;
                var21 = copyDataProperties(var38, var37);
                var21 = 'ref';
                var0[var21] = var23;
                var21 = 'accessible';
                var0[var21] = var22;
                var21 = var20 != var4;
                var20 = 'button';
                if (!var21) {
                    _fun37614_ip = 913;
                    continue _fun37614
                }
            case 910:
                var20 = var4;
            case 913:
                var4 = 'accessibilityRole';
                var0[var4] = var20;
                var4 = 'accessibilityLabel';
                var0[var4] = var19;
                var4 = 'accessibilityHint';
                var0[var4] = var18;
                var4 = 'accessibilityValue';
                var0[var4] = var17;
                var4 = 'accessibilityState';
                var0[var4] = var16;
                var4 = 'accessibilityActions';
                var0[var4] = var15;
                var4 = 'onAccessibilityAction';
                var0[var4] = var14;
                var4 = 'accessibilityElementsHidden';
                var0[var4] = var13;
                var4 = 'importantForAccessibility';
                var0[var4] = var12;
                var4 = 'pointerEvents';
                var0[var4] = var11;
                var4 = 'style';
                var0[var4] = var10;
                var4 = 'onPress';
                var0[var4] = var9;
                var4 = 'onLongPress';
                var0[var4] = var8;
                var4 = 'disabled';
                var0[var4] = var7;
                var4 = 'hitSlop';
                var0[var4] = var6;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Button/native/BaseButton.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BaseButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 4094, 33, 3159, 1297, 671, 4089, 3720, 1304, 478, 2]);