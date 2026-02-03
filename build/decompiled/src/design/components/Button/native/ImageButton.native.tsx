// design/components/Button/native/ImageButton.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun67685: for (var _fun67685_ip = 0;;) switch (_fun67685_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 4;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var1 = var0.LARGE_BUTTON_PADDING;
                var0 = 'sm';
                if (!(var0 !== var3)) {
                    _fun67685_ip = 75;
                    continue _fun67685
                }
            case 42:
                var0 = 'md';
                if (!(var0 === var3)) {
                    _fun67685_ip = 98;
                    continue _fun67685
                }
            case 50:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var3.bind(var4)(var0);
                var1 = var0.MEDIUM_BUTTON_PADDING;
                _fun67685_ip = 98;
                continue _fun67685;
            case 75:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var3.bind(var4)(var0);
                var1 = var0.SMALL_BUTTON_PADDING;
            case 98:
                var0 = 2;
                var1 = var0 * var1;
                var0 = arg1;
                var3 = var0 + var1;
                var0 = {};
                var1 = {};
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 5;
                var8 = var6[var5];
                var8 = var7.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_4;
                var1.paddingBottom = var8;
                var6 = var6[var5];
                var6 = var7.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_8;
                var1.gap = var6;
                var6 = 'center';
                var1.alignItems = var6;
                var1.alignSelf = var6;
                var7 = arg2;
                var6 = 0;
                if (!var7) {
                    _fun67685_ip = 200;
                    continue _fun67685
                }
            case 197:
                var6 = 1;
            case 200:
                var1.flexGrow = var6;
                var0.labelPressable = var1;
                var1 = {};
                var1.width = var3;
                var1.height = var3;
                var0.button = var1;
                var1 = {
                    'paddingHorizontal': 0,
                    'paddingVertical': 0
                };
                var1.minHeight = var3;
                var1.minWidth = var3;
                var0.pill = var1;
                var1 = {};
                var1.width = var3;
                var1.height = var3;
                var6 = 'relative';
                var1.position = var6;
                var0.imageWrapper = var1;
                var1 = {};
                var1.width = var3;
                var1.height = var3;
                var0.image = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'right': 0,
                    'bottom': 0
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND;
                var1.backgroundColor = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.radii;
                var2 = var2.round;
                var1.borderRadius = var2;
                var0.imageDim = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = "function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}";
    var3.code = var7;
    var _closure1_slot9 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun67686: for (var _fun67686_ip = 0;;) switch (_fun67686_ip) {
            case 0:
                var11 = arg0;
                var20 = arg1;
                var1 = var11.size;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun67686_ip = 23;
                    continue _fun67686
                }
            case 19:
                var1 = 'lg';
            case 23:
                var9 = var11.label;
                var12 = var11.grow;
                var21 = var11.image;
                var6 = var11.accessibilityLabel;
                var10 = var11.maxFontSizeMultiplier;
                var7 = var11.onPressIn;
                var _closure2_slot0 = var7;
                var3 = var11.onPressOut;
                var _closure2_slot1 = var3;
                var8 = {
                    'size': 0,
                    'label': 0,
                    'grow': 0,
                    'image': 0,
                    'accessibilityLabel': 0,
                    'maxFontSizeMultiplier': 0,
                    'onPressIn': 0,
                    'onPressOut': 0
                };
                var0 = null;
                var24 = var8;
                var23 = null;
                var5 = silentSetPrototypeOf(var24, var23);
                var14 = 0;
                var24 = {};
                var23 = var11;
                var22 = var8;
                var16 = copyDataProperties(var24, var23, var22);
                var _closure2_slot2 = var4;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 6;
                var8 = var18[var8];
                var13 = var17.bind(var4)(var8);
                var11 = var13.useIconSizeStyles;
                var8 = true;
                var8 = var11.bind(var13)(var1, var8, var10);
                var11 = _closure1_slot8;
                var8 = var8.width;
                var12 = var11.bind(var4)(var1, var8, var12);
                var11 = 7;
                var8 = var18[var11];
                var13 = var17.bind(var4)(var8);
                var8 = var13.useSharedValue;
                var15 = var8.bind(var13)(var14);
                _closure2_slot2 = var15;
                var13 = _closure1_slot3;
                var14 = var13.useCallback;
                var8 = new Array(2);
                var8[0] = var15;
                var8[1] = var7;
                var7 = function(arg0) { // Environment: var2
                    _fun67687: for (var _fun67687_ip = 0;;) switch (_fun67687_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var1 = 1;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67687_ip = 44;
                                continue _fun67687
                            }
                        case 30:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var14.bind(var13)(var7, var8);
                var8 = var13.useCallback;
                var7 = new Array(2);
                var7[0] = var15;
                var7[1] = var3;
                var3 = function(arg0) { // Environment: var2
                    _fun67688: for (var _fun67688_ip = 0;;) switch (_fun67688_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67688_ip = 43;
                                continue _fun67688
                            }
                        case 29:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 43:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var8.bind(var13)(var3, var7);
                var3 = var18[var11];
                var7 = var17.bind(var4)(var3);
                var3 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun67689: for (var _fun67689_ip = 0;;) switch (_fun67689_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var2 = var4[var2];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var4 = var5.withSpring;
                            var3 = _closure2_slot2;
                            var2 = var3.get;
                            var7 = var2.bind(var3)();
                            var2 = 1;
                            var3 = 0;
                            if (!(var2 === var7)) {
                                _fun67689_ip = 60;
                                continue _fun67689
                            }
                        case 57:
                            var3 = var2;
                        case 60:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 9;
                            var1 = var7[var1];
                            var1 = var2.bind(var6)(var1);
                            var2 = var1.ON_PRESS_SPRING;
                            var1 = 'animate-always';
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var8 = {};
                var19 = 8;
                var19 = var18[var19];
                var19 = var17.bind(var4)(var19);
                var19 = var19.withSpring;
                var8.withSpring = var19;
                var8.pressed = var15;
                var15 = 9;
                var15 = var18[var15];
                var15 = var17.bind(var4)(var15);
                var15 = var15.ON_PRESS_SPRING;
                var8.ON_PRESS_SPRING = var15;
                var2.__closure = var8;
                var8 = 17257158773379.0;
                var2.__workletHash = var8;
                var8 = _closure1_slot9;
                var2.__initData = var8;
                var19 = var3.bind(var7)(var2);
                var7 = _closure1_slot7;
                var3 = _closure1_slot4;
                var2 = {};
                var8 = var12.imageWrapper;
                var2.style = var8;
                var17 = _closure1_slot6;
                var15 = _closure1_slot5;
                var8 = {};
                var8.source = var21;
                var21 = var12.image;
                var8.style = var21;
                var15 = var17.bind(var4)(var15, var8);
                var8 = new Array(2);
                var8[0] = var15;
                var15 = _closure1_slot1;
                var11 = var18[var11];
                var11 = var15.bind(var4)(var11);
                var15 = var11.View;
                var11 = {};
                var21 = var12.imageDim;
                var18 = new Array(2);
                var18[0] = var21;
                var18[1] = var19;
                var11.style = var18;
                var11 = var17.bind(var4)(var15, var11);
                var8[1] = var11;
                var2.children = var8;
                var19 = var7.bind(var4)(var3, var2);
                var7 = var1;
                if (!(var0 == var9)) {
                    _fun67686_ip = 629;
                    continue _fun67686
                }
            case 499:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.BaseIconButton;
                var0 = {};
                var0.ref = var20;
                var24 = var0;
                var23 = var16;
                var3 = copyDataProperties(var24, var23);
                var3 = 'size';
                var0[var3] = var7;
                var3 = 'icon';
                var0[var3] = var19;
                var3 = 'accessibilityLabel';
                var0[var3] = var6;
                var7 = var12.pill;
                var3 = 'pillStyle';
                var0[var3] = var7;
                var7 = 'secondary';
                var3 = 'variant';
                var0[var3] = var7;
                var3 = 'onPressIn';
                var0[var3] = var14;
                var3 = 'onPressOut';
                var0[var3] = var13;
                var0 = var2.bind(var4)(var1, var0);
                _fun67686_ip = 911;
                continue _fun67686;
            case 629:
                var3 = _closure1_slot7;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 10;
                var1 = var11[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.BaseButton;
                var1 = {};
                var8 = var12.labelPressable;
                var1.style = var8;
                var24 = var1;
                var23 = var16;
                var8 = copyDataProperties(var24, var23);
                var18 = 'none';
                var15 = 'variant';
                var1[var15] = var18;
                var17 = 'accessibilityLabel';
                var1[var17] = var6;
                var8 = _closure1_slot6;
                var5 = 11;
                var5 = var11[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.BaseIconButton;
                var5 = {};
                var5.ref = var20;
                var24 = var5;
                var23 = var16;
                var16 = copyDataProperties(var24, var23);
                var16 = 'icon';
                var5[var16] = var19;
                var16 = 'accessibilityRole';
                var5[var16] = var18;
                var16 = '';
                var5[var17] = var16;
                var17 = 'lg';
                var16 = 'size';
                var5[var16] = var17;
                var16 = var12.pill;
                var12 = 'pillStyle';
                var5[var12] = var16;
                var12 = 'secondary';
                var5[var15] = var12;
                var12 = 'onPressIn';
                var5[var12] = var14;
                var12 = 'onPressOut';
                var5[var12] = var13;
                var12 = 'maxFontSizeMultiplier';
                var5[var12] = var10;
                var5 = var8.bind(var4)(var6, var5);
                var6 = new Array(2);
                var6[0] = var5;
                var5 = 12;
                var5 = var11[var5];
                var5 = var7.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'variant': 'text-xs/medium',
                    'color': 'interactive-text-default'
                };
                var5.maxFontSizeMultiplier = var10;
                var5.children = var9;
                var5 = var8.bind(var4)(var7, var5);
                var6[1] = var5;
                var5 = 'children';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 911:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Button/native/ImageButton.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ImageButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4088, 671, 4089, 3720, 4081, 4087, 4093, 7033, 3941, 2]);