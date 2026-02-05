// design/components/Input/native/InputFieldContainer.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun48107: for (var _fun48107_ip = 0;;) switch (_fun48107_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.size;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun48107_ip = 18;
                    continue _fun48107
                }
            case 14:
                var5 = 'lg';
            case 18:
                var3 = var0.isRound;
                if (!(var3 === var4)) {
                    _fun48107_ip = 30;
                    continue _fun48107
                }
            case 28:
                var3 = false;
            case 30:
                var2 = var0.isDisabled;
                if (!(var2 === var4)) {
                    _fun48107_ip = 42;
                    continue _fun48107
                }
            case 40:
                var2 = false;
            case 42:
                var1 = var0.grow;
                if (!(var1 === var4)) {
                    _fun48107_ip = 54;
                    continue _fun48107
                }
            case 52:
                var1 = true;
            case 54:
                var0 = _closure1_slot8;
                var10 = undefined;
                var9 = var5;
                var8 = var3;
                var7 = var2;
                var6 = var1;
                var0 = var10[var0](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Platform;
    var7 = var4.StyleSheet;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = {
        'mass': 0.5,
        'damping': 15,
        'stiffness': 200,
        'overshootClamping': true
    };
    var _closure1_slot7 = var4;
    var4 = 3;
    var7 = var6[var4];
    var9 = var5.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = function() { // Environment: var1
        _fun48108: for (var _fun48108_ip = 0;;) switch (_fun48108_ip) {
            case 0:
                var1 = arguments[0];
                var13 = arguments[1];
                var11 = arguments[2];
                var15 = arguments[3];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun48108_ip = 22;
                    continue _fun48108
                }
            case 18:
                var1 = 'lg';
            case 22:
                if (!(var13 === var4)) {
                    _fun48108_ip = 28;
                    continue _fun48108
                }
            case 26:
                var13 = false;
            case 28:
                if (!(var11 === var4)) {
                    _fun48108_ip = 34;
                    continue _fun48108
                }
            case 32:
                var11 = false;
            case 34:
                if (!(var15 === var4)) {
                    _fun48108_ip = 40;
                    continue _fun48108
                }
            case 38:
                var15 = true;
            case 40:
                var0 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var5 = var6[var3];
                var5 = var7.bind(var4)(var5);
                var5 = var5.InputHeights;
                var5 = var5.SM;
                var0.sm = var5;
                var5 = var6[var3];
                var5 = var7.bind(var4)(var5);
                var5 = var5.InputHeights;
                var5 = var5.MD;
                var0.md = var5;
                var3 = var6[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.InputHeights;
                var3 = var3.LG;
                var0.lg = var3;
                var14 = var0[var1];
                var0 = {};
                var8 = _closure1_slot1;
                var5 = 5;
                var3 = var6[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.radii;
                var3 = var3.md;
                var0.sm = var3;
                var3 = var6[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.radii;
                var3 = var3.md;
                var0.md = var3;
                var3 = var6[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.radii;
                var3 = var3.lg;
                var0.lg = var3;
                var12 = var0[var1];
                var0 = {};
                var3 = 6;
                var9 = var6[var3];
                var9 = var7.bind(var4)(var9);
                var9 = var9.TextStyleSheet;
                var9 = var9["text-xs/medium"];
                var0.sm = var9;
                var9 = var6[var3];
                var9 = var7.bind(var4)(var9);
                var9 = var9.TextStyleSheet;
                var9 = var9["text-sm/medium"];
                var0.md = var9;
                var3 = var6[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.TextStyleSheet;
                var3 = var3["text-md/medium"];
                var0.lg = var3;
                var7 = var0[var1];
                var0 = {};
                var3 = var6[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_8;
                var0.sm = var3;
                var3 = var6[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_12;
                var0.md = var3;
                var3 = var6[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_16;
                var0.lg = var3;
                var9 = var0[var1];
                var0 = {};
                var3 = var6[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_4;
                var0.sm = var3;
                var3 = var6[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_8;
                var0.md = var3;
                var3 = var6[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_8;
                var0.lg = var3;
                var10 = var0[var1];
                var0 = {};
                var3 = {};
                var16 = var6[var5];
                var16 = var8.bind(var4)(var16);
                var16 = var16.spacing;
                var16 = var16.PX_8;
                var3.paddingHorizontal = var16;
                var16 = var6[var5];
                var16 = var8.bind(var4)(var16);
                var16 = var16.spacing;
                var16 = var16.PX_4;
                var3.paddingVertical = var16;
                var0.sm = var3;
                var3 = {};
                var16 = var6[var5];
                var16 = var8.bind(var4)(var16);
                var16 = var16.spacing;
                var16 = var16.PX_12;
                var3.paddingHorizontal = var16;
                var16 = var6[var5];
                var16 = var8.bind(var4)(var16);
                var16 = var16.spacing;
                var16 = var16.PX_8;
                var3.paddingVertical = var16;
                var0.md = var3;
                var3 = {};
                var16 = var6[var5];
                var16 = var8.bind(var4)(var16);
                var16 = var16.spacing;
                var16 = var16.PX_16;
                var3.paddingHorizontal = var16;
                var6 = var6[var5];
                var6 = var8.bind(var4)(var6);
                var6 = var6.spacing;
                var8 = var6.PX_8;
                var6 = 2;
                var6 = var8 + var6;
                var3.paddingVertical = var6;
                var0.lg = var3;
                var3 = var0[var1];
                var0 = {};
                var1 = {};
                var6 = 1;
                var8 = var6;
                if (!var11) {
                    _fun48108_ip = 679;
                    continue _fun48108
                }
            case 669:
                var8 = 0.5;
            case 679:
                var1.opacity = var8;
                var8 = 'auto';
                if (!var11) {
                    _fun48108_ip = 694;
                    continue _fun48108
                }
            case 690:
                var8 = 'none';
            case 694:
                var1.pointerEvents = var8;
                var8 = 'row';
                var1.flexDirection = var8;
                var8 = 0;
                if (!var15) {
                    _fun48108_ip = 715;
                    continue _fun48108
                }
            case 712:
                var8 = var6;
            case 715:
                var1.flexGrow = var8;
                var8 = 'center';
                var1.alignItems = var8;
                var0.container = var1;
                var1 = {};
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var17 = var15[var5];
                var17 = var16.bind(var4)(var17);
                var17 = var17.colors;
                var17 = var17.INPUT_BACKGROUND_DEFAULT;
                var1.backgroundColor = var17;
                var0.background = var1;
                var1 = {};
                var15 = var15[var5];
                var15 = var16.bind(var4)(var15);
                var15 = var15.colors;
                var15 = var15.INPUT_PLACEHOLDER_TEXT_DEFAULT;
                var1.color = var15;
                var0.placeholderText = var1;
                var1 = {};
                var1.minHeight = var14;
                var0.minHeight = var1;
                var1 = {};
                if (!var13) {
                    _fun48108_ip = 846;
                    continue _fun48108
                }
            case 819:
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var5];
                var13 = var14.bind(var4)(var13);
                var13 = var13.radii;
                var12 = var13.round;
            case 846:
                var1.borderRadius = var12;
                var0.radius = var1;
                var0.padding = var3;
                var1 = {};
                var19 = var1;
                var18 = var7;
                var7 = copyDataProperties(var19, var18);
                var7 = 'lineHeight';
                var1[var7] = var4;
                var12 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var5];
                var7 = var12.bind(var4)(var7);
                var7 = var7.colors;
                if (var11) {
                    _fun48108_ip = 913;
                    continue _fun48108
                }
            case 905:
                var11 = var7.TEXT_DEFAULT;
                _fun48108_ip = 919;
                continue _fun48108;
            case 913:
                var11 = var7.TEXT_MUTED;
            case 919:
                var7 = 'color';
                var1[var7] = var11;
                var7 = 'flexGrow';
                var1[var7] = var6;
                var0.text = var1;
                var1 = {
                    'position': 'absolute',
                    'left': 0
                };
                var19 = var1;
                var18 = var3;
                var7 = copyDataProperties(var19, var18);
                var7 = 'paddingEnd';
                var1[var7] = var10;
                var12 = 'zIndex';
                var1[var12] = var6;
                var7 = 'none';
                var11 = 'pointerEvents';
                var1[var11] = var7;
                var0.leadingText = var1;
                var1 = {
                    'position': 'absolute',
                    'right': 0
                };
                var19 = var1;
                var18 = var3;
                var13 = copyDataProperties(var19, var18);
                var13 = 'paddingStart';
                var1[var13] = var10;
                var1[var12] = var6;
                var1[var11] = var7;
                var0.trailingText = var1;
                var1 = {
                    'position': 'absolute',
                    'left': 0,
                    'top': 0,
                    'bottom': 0
                };
                var1.paddingTop = var9;
                var1.paddingBottom = var9;
                var1.paddingStart = var9;
                var1.paddingEnd = var10;
                var1.justifyContent = var8;
                var1.zIndex = var6;
                var1.pointerEvents = var7;
                var0.leadingIcon = var1;
                var1 = {
                    'position': 'absolute',
                    'right': 0,
                    'top': 0,
                    'bottom': 0
                };
                var1.paddingTop = var9;
                var1.paddingBottom = var9;
                var1.paddingStart = var10;
                var1.paddingEnd = var9;
                var1.justifyContent = var8;
                var1.zIndex = var6;
                var1.pointerEvents = var7;
                var0.trailingIcon = var1;
                var1 = {};
                var19 = var1;
                var18 = var3;
                var3 = copyDataProperties(var19, var18);
                var3 = 'borderRightWidth';
                var1[var3] = var6;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var3 = var2.BORDER_STRONG;
                var2 = 'borderRightColor';
                var1[var2] = var3;
                var0.splitBorder = var1;
                return var0;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyleProperties;
    var4 = {};
    var9 = 5;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_FEEDBACK_CRITICAL;
    var4.error = var11;
    var11 = 'transparent';
    var4.default = var11;
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_STRONG;
    var4.focused = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = "function InputFieldContainerNativeTsx1(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG)};}";
    var4.code = var7;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Input/native/InputFieldContainer.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useInputStyles = var3;
    var1 = function arg0() {
        _fun48109: for (var _fun48109_ip = 0;;) switch (_fun48109_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot9;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var _closure2_slot0 = var12;
                var1 = var4.isFocused;
                var7 = var3 !== var1;
                if (!var7) {
                    _fun48109_ip = 38;
                    continue _fun48109
                }
            case 35:
                var7 = var1;
            case 38:
                var _closure2_slot1 = var7;
                var1 = var4.status;
                var13 = 'default';
                if (!(var3 !== var1)) {
                    _fun48109_ip = 58;
                    continue _fun48109
                }
            case 55:
                var13 = var1;
            case 58:
                var _closure2_slot2 = var13;
                var5 = var4.children;
                var2 = _closure1_slot11;
                var1 = {};
                var6 = var4.size;
                var1.size = var6;
                var6 = var4.isRound;
                var1.isRound = var6;
                var6 = var4.isDisabled;
                var1.isDisabled = var6;
                var6 = var4.grow;
                var1.grow = var6;
                var6 = var4.leadingIcon;
                var4 = null;
                var4 = var4 != var6;
                var1.hasLeadingIcon = var4;
                var10 = var2.bind(var3)(var1);
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 7;
                var1 = var11[var4];
                var2 = var9.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun48110: for (var _fun48110_ip = 0;;) switch (_fun48110_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = 'default';
                            if (!(var1 === var2)) {
                                _fun48110_ip = 43;
                                continue _fun48110
                            }
                        case 15:
                            var1 = _closure2_slot1;
                            var4 = 'transparent';
                            var9 = 0;
                            if (!var1) {
                                _fun48110_ip = 55;
                                continue _fun48110
                            }
                        case 28:
                            var1 = _closure2_slot0;
                            var4 = var1.focused;
                            var9 = 1;
                            _fun48110_ip = 55;
                            continue _fun48110;
                        case 43:
                            var0 = _closure2_slot0;
                            var4 = var0.error;
                            var9 = 2;
                        case 55:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 8;
                            var7 = var6[var1];
                            var2 = undefined;
                            var8 = var5.bind(var2)(var7);
                            var7 = var8.withSpring;
                            var3 = _closure1_slot7;
                            var7 = var7.bind(var8)(var9, var3);
                            var0.borderWidth = var7;
                            var1 = var6[var1];
                            var2 = var5.bind(var2)(var1);
                            var1 = var2.withSpring;
                            var1 = var1.bind(var2)(var4, var3);
                            var0.borderColor = var1;
                            return var0;
                    }
                };
                var6 = {};
                var6.status = var13;
                var6.ringColors = var12;
                var6.isFocused = var7;
                var7 = 8;
                var7 = var11[var7];
                var7 = var9.bind(var3)(var7);
                var7 = var7.withSpring;
                var6.withSpring = var7;
                var7 = _closure1_slot7;
                var6.RING_SPRING_CONFIG = var7;
                var0.__closure = var6;
                var6 = 16944298057521.0;
                var0.__workletHash = var6;
                var6 = _closure1_slot10;
                var0.__initData = var6;
                var9 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var10.container;
                var6 = new Array(4);
                var6[0] = var7;
                var7 = var10.background;
                var6[1] = var7;
                var7 = var10.radius;
                var6[2] = var7;
                var7 = var10.minHeight;
                var6[3] = var7;
                var0.style = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var4 = var11[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.View;
                var4 = {};
                var8 = _closure1_slot3;
                var11 = var8.absoluteFill;
                var8 = new Array(3);
                var8[0] = var11;
                var10 = var10.radius;
                var8[1] = var10;
                var8[2] = var9;
                var4.style = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.InputFieldContainer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 5400, 671, 3941, 3720, 4081, 2]);