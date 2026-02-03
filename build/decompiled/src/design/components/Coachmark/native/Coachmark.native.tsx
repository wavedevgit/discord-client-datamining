// design/components/Coachmark/native/Coachmark.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun57483: for (var _fun57483_ip = 0;;) switch (_fun57483_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.targetMeasurements;
                var8 = var2.surfaceMeasurements;
                var37 = var2.title;
                var29 = var2.description;
                var10 = var2.offsetY;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun57483_ip = 41;
                    continue _fun57483
                }
            case 39:
                var10 = 0;
            case 41:
                var22 = var2.imgSource;
                var _closure2_slot0 = var22;
                var5 = var2.position;
                var13 = var2.onDismiss;
                var34 = var2.buttonLabel;
                var36 = var2.buttonVariant;
                var33 = var2.onButtonPress;
                var0 = var2.experimental_withBlurBackground;
                var1 = var2.renderImgComponent;
                var _closure2_slot1 = var1;
                var17 = var2.enterExitAnimatedStyles;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var2 = _closure1_slot14;
                var16 = var2.bind(var3)();
                _closure2_slot2 = var16;
                var7 = _closure1_slot6;
                var2 = var7.useRef;
                var21 = null;
                var23 = var2.bind(var7)(var21);
                _closure2_slot3 = var23;
                var7 = _closure1_slot6;
                var2 = var7.useState;
                var11 = var2.bind(var7)(var21);
                var7 = _closure1_slot5;
                var2 = 2;
                var2 = var7.bind(var3)(var11, var2);
                var18 = 0;
                var20 = var2[var18];
                var14 = 1;
                var2 = var2[var14];
                _closure2_slot4 = var2;
                var7 = _closure1_slot1;
                var30 = _closure1_slot2;
                var2 = 8;
                var2 = var30[var2];
                var7 = var7.bind(var3)(var2);
                var2 = -8;
                var39 = var2 + var10;
                var44 = undefined;
                var43 = var20;
                var42 = var8;
                var41 = var9;
                var40 = var5;
                var2 = var44[var7](var43, var42, var41, var40, var39, var38);
                var9 = var2.adjustmentX;
                var8 = var2.tooltipX;
                var10 = var2.tooltipY;
                var26 = _closure1_slot0;
                var2 = 5;
                var2 = var30[var2];
                var7 = var26.bind(var3)(var2);
                var2 = var7.useSharedValue;
                var19 = var2.bind(var7)(var18);
                _closure2_slot5 = var19;
                var12 = _closure1_slot6;
                var11 = var12.useCallback;
                var7 = new Array(1);
                var7[0] = var19;
                var2 = function() { // Environment: var4
                    var2 = _closure2_slot5;
                    var1 = var2.set;
                    var0 = 1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var27 = var11.bind(var12)(var2, var7);
                var12 = _closure1_slot6;
                var11 = var12.useCallback;
                var7 = new Array(1);
                var7[0] = var19;
                var2 = function() { // Environment: var4
                    var2 = _closure2_slot5;
                    var1 = var2.set;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var25 = var11.bind(var12)(var2, var7);
                var2 = 9;
                var2 = var30[var2];
                var7 = var26.bind(var3)(var2);
                var2 = var7.useButtonPressAnimationProps;
                var11 = var2.bind(var7)(var19);
                var15 = var11.style;
                var7 = _closure1_slot4;
                var2 = _closure1_slot3;
                var11 = var7.bind(var3)(var11, var2);
                var12 = _closure1_slot6;
                var7 = var12.useMemo;
                var2 = new Array(3);
                var2[0] = var22;
                var2[1] = var1;
                var2[2] = var16;
                var1 = function() { // Environment: var4
                    _fun57486: for (var _fun57486_ip = 0;;) switch (_fun57486_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var1;
                            var1 = null;
                            if (!var2) {
                                _fun57486_ip = 28;
                                continue _fun57486
                            }
                        case 18:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = var3.bind(var2)();
                        case 28:
                            var2 = _closure2_slot0;
                            if (!(var0 != var2)) {
                                _fun57486_ip = 79;
                                continue _fun57486
                            }
                        case 36:
                            var6 = _closure1_slot10;
                            var4 = _closure1_slot9;
                            var3 = {};
                            var2 = _closure2_slot0;
                            var3.source = var2;
                            var2 = _closure2_slot2;
                            var2 = var2.image;
                            var3.style = var2;
                            var2 = undefined;
                            var1 = var6.bind(var2)(var4, var3);
                        case 79:
                            var2 = var0 == var1;
                            var0 = null;
                            if (var2) {
                                _fun57486_ip = 127;
                                continue _fun57486
                            }
                        case 88:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot7;
                            var2 = {};
                            var5 = _closure2_slot2;
                            var5 = var5.bottomMargin;
                            var2.style = var5;
                            var2.children = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 127:
                            return var0;
                    }
                };
                var24 = var7.bind(var12)(var1, var2);
                var7 = _closure1_slot11;
                var2 = _closure1_slot12;
                var1 = {};
                var22 = _closure1_slot7;
                var12 = {};
                var12.ref = var23;
                var23 = 'alert';
                var12.accessibilityRole = var23;
                var23 = var16.center;
                var12.style = var23;
                var32 = true;
                var12.accessible = var32;
                var23 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setAccessibilityFocus;
                    var1 = {};
                    var4 = _closure2_slot3;
                    var1.ref = var4;
                    var4 = 100;
                    var1.delay = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12.onLayout = var23;
                var23 = new Array(3);
                var23[0] = var24;
                var35 = _closure1_slot10;
                var24 = 11;
                var28 = var30[var24];
                var28 = var26.bind(var3)(var28);
                var31 = var28.Text;
                var28 = {
                    'style': null,
                    'variant': 'heading-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var38 = var16.text;
                var28.style = var38;
                var28.children = var37;
                var28 = var35.bind(var3)(var31, var28);
                var23[1] = var28;
                var28 = _closure1_slot10;
                var24 = var30[var24];
                var24 = var26.bind(var3)(var24);
                var26 = var24.Text;
                var24 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var30 = var16.text;
                var24.style = var30;
                var24.children = var29;
                var24 = var28.bind(var3)(var26, var24);
                var23[2] = var24;
                var12.children = var23;
                var22 = var7.bind(var3)(var22, var12);
                var12 = new Array(3);
                var12[0] = var22;
                var23 = var21 != var34;
                var22 = null;
                if (!var23) {
                    _fun57483_ip = 820;
                    continue _fun57483
                }
            case 639:
                var23 = var21 != var33;
                var22 = null;
                if (!var23) {
                    _fun57483_ip = 820;
                    continue _fun57483
                }
            case 651:
                var26 = _closure1_slot11;
                var24 = _closure1_slot12;
                var23 = {};
                var30 = _closure1_slot10;
                var29 = _closure1_slot7;
                var28 = {};
                var31 = var16.buttonSpacing;
                var28.style = var31;
                var29 = var30.bind(var3)(var29, var28);
                var28 = new Array(2);
                var28[0] = var29;
                var31 = _closure1_slot10;
                var30 = _closure1_slot0;
                var35 = _closure1_slot2;
                var29 = 12;
                var29 = var35[var29];
                var29 = var30.bind(var3)(var29);
                var30 = var29.Button;
                if (var0) {
                    _fun57483_ip = 771;
                    continue _fun57483
                }
            case 728:
                var29 = {};
                var37 = var21 != var36;
                var35 = 'secondary';
                if (!var37) {
                    _fun57483_ip = 744;
                    continue _fun57483
                }
            case 741:
                var35 = var36;
            case 744:
                var29.variant = var35;
                var35 = 'lg';
                var29.size = var35;
                var29.text = var34;
                var29.onPress = var33;
                var29.grow = var32;
                _fun57483_ip = 800;
                continue _fun57483;
            case 771:
                var32 = {
                    'variant': 'secondary-overlay',
                    'size': 'lg',
                    'text': null,
                    'onPress': null,
                    'grow': true
                };
                var32.text = var34;
                var32.onPress = var33;
                var29 = var32;
            case 800:
                var29 = var31.bind(var3)(var30, var29);
                var28[1] = var29;
                var23.children = var28;
                var22 = var26.bind(var3)(var24, var23);
            case 820:
                var12[1] = var22;
                var24 = _closure1_slot10;
                var23 = _closure1_slot8;
                var22 = {};
                var26 = 'button';
                var22.accessibilityRole = var26;
                var26 = _closure1_slot0;
                var28 = _closure1_slot2;
                var29 = 13;
                var30 = var28[var29];
                var30 = var26.bind(var3)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var28[var29];
                var29 = var26.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.cpT0Cq;
                var29 = var30.bind(var31)(var29);
                var22.accessibilityLabel = var29;
                var29 = var16.closeButton;
                var22.style = var29;
                var22.onPress = var13;
                var22.onPressIn = var27;
                var22.onPressOut = var25;
                var27 = _closure1_slot10;
                var25 = 14;
                var25 = var28[var25];
                var25 = var26.bind(var3)(var25);
                var26 = var25.XSmallIcon;
                var25 = {};
                var25 = var27.bind(var3)(var26, var25);
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var12[2] = var22;
                var1.children = var12;
                var7 = var7.bind(var3)(var2, var1);
                var2 = _closure1_slot10;
                if (var0) {
                    _fun57483_ip = 1032;
                    continue _fun57483
                }
            case 986:
                var1 = _closure1_slot7;
                var0 = {};
                var22 = var16.bodyContainer;
                var12 = new Array(2);
                var12[0] = var22;
                var22 = var16.bodyBgColor;
                var12[1] = var22;
                var0.style = var12;
                var0.children = var7;
                var12 = var2.bind(var3)(var1, var0);
                _fun57483_ip = 1094;
                continue _fun57483;
            case 1032:
                var1 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 15;
                var0 = var22[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BackgroundBlurView;
                var0 = {};
                var22 = var16.bodyContainer;
                var0.style = var22;
                var22 = 'dark';
                var0.blurTheme = var22;
                var0.pressed = var19;
                var0.children = var7;
                var12 = var2.bind(var3)(var1, var0);
            case 1094:
                var2 = _closure1_slot11;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = function arg0() {
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot4;
                    var1 = {};
                    var3 = var0.layout;
                    var3 = var3.width;
                    var1.width = var3;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var1.height = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onLayout = var4;
                var7 = var16.container;
                var4 = new Array(3);
                var4[0] = var7;
                var22 = _closure1_slot0;
                var7 = _closure1_slot2;
                var19 = 16;
                var7 = var7[var19];
                var22 = var22.bind(var3)(var7);
                var7 = var22.isIOS;
                var22 = var7.bind(var22)();
                var7 = undefined;
                if (!var22) {
                    _fun57483_ip = 1168;
                    continue _fun57483
                }
            case 1162:
                var7 = var16.shadow;
            case 1168:
                var4[1] = var7;
                var7 = {};
                var20 = var21 != var20;
                var18 = 0;
                if (!var20) {
                    _fun57483_ip = 1186;
                    continue _fun57483
                }
            case 1183:
                var18 = var14;
            case 1186:
                var7.opacity = var18;
                var7.top = var10;
                var7.left = var8;
                var4[2] = var7;
                var0.style = var4;
                var18 = 'bottom';
                var7 = var18 === var5;
                if (!var7) {
                    _fun57483_ip = 1242;
                    continue _fun57483
                }
            case 1217:
                var10 = _closure1_slot10;
                var8 = _closure1_slot15;
                var4 = {};
                var4.position = var18;
                var4.adjustmentX = var9;
                var7 = var10.bind(var3)(var8, var4);
            case 1242:
                var4 = new Array(3);
                var4[0] = var7;
                var10 = _closure1_slot10;
                var8 = _closure1_slot13;
                var7 = {};
                var43 = var7;
                var42 = var11;
                var11 = copyDataProperties(var43, var42);
                var11 = 'onAccessibilityEscape';
                var7[var11] = var13;
                var18 = false;
                var11 = 'accessible';
                var7[var11] = var18;
                var11 = 'onPress';
                var7[var11] = var13;
                var11 = var16.body;
                var13 = new Array(2);
                var13[0] = var11;
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var19];
                var18 = var18.bind(var3)(var11);
                var11 = var18.isAndroid;
                var11 = var11.bind(var18)();
                if (var11) {
                    _fun57483_ip = 1348;
                    continue _fun57483
                }
            case 1342:
                var11 = new Array(0);
                _fun57483_ip = 1369;
                continue _fun57483;
            case 1348:
                var18 = var16.shadow;
                var16 = new Array(2);
                var16[0] = var18;
                var16[1] = var17;
                var11 = var16;
            case 1369:
                var43 = var13;
                var42 = var11;
                var41 = var14;
                var11 = arraySpread(var43, var42, var41);
                var13[var11] = var15;
                var11 = var11 + var14;
                var11 = 'style';
                var7[var11] = var13;
                var11 = 'children';
                var7[var11] = var12;
                var7 = var10.bind(var3)(var8, var7);
                var4[1] = var7;
                var10 = 'top';
                var5 = var10 === var5;
                if (!var5) {
                    _fun57483_ip = 1455;
                    continue _fun57483
                }
            case 1430:
                var8 = _closure1_slot10;
                var7 = _closure1_slot15;
                var6 = {};
                var6.position = var10;
                var6.adjustmentX = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1455:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var0 = ['style'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var8 = var4.Pressable;
    var _closure1_slot8 = var8;
    var4 = var4.Image;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var7 = var11.bind(var0)(var4);
    var4 = var7.createAnimatedComponent;
    var4 = var4.bind(var7)(var8);
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var12 = 'absolute';
    var9 = {
        'position': 'absolute',
        'alignItems': 'center'
    };
    var4.container = var9;
    var9 = {};
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.shadows;
    var15 = var13.SHADOW_BUTTON_OVERLAY;
    var16 = var9;
    var13 = copyDataProperties(var16, var15);
    var4.shadow = var9;
    var9 = {
        'width': 260,
        'borderRadius': null,
        'overflow': 'hidden',
        'zIndex': 1
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9.borderRadius = var13;
    var4.body = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_COACHMARK_BACKGROUND_DEFAULT;
    var9.backgroundColor = var13;
    var4.bodyBgColor = var9;
    var9 = {
        'padding': 16,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.bodyContainer = var9;
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.center = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.height = var13;
    var4.buttonSpacing = var9;
    var9 = {
        'maxWidth': 200,
        'textAlign': 'center'
    };
    var4.text = var9;
    var9 = {
        'alignItems': 'center',
        'zIndex': 0
    };
    var4.cursorContainer = var9;
    var9 = {
        'height': 8,
        'width': 8,
        'borderRadius': null,
        'borderWidth': 2,
        'backgroundColor': 'transparent'
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9.borderRadius = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_ACTIVE;
    var9.borderColor = var13;
    var4.cursorHead = var9;
    var9 = {
        'width': 2,
        'height': 16
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_ACTIVE;
    var9.backgroundColor = var13;
    var4.cursorSpine = var9;
    var9 = {
        'height': 40,
        'width': 40
    };
    var4.image = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.marginBottom = var13;
    var4.bottomMargin = var9;
    var9 = {};
    var9.position = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.top = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9.right = var10;
    var4.closeButton = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = function arg0() {
        _fun57489: for (var _fun57489_ip = 0;;) switch (_fun57489_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.position;
                var7 = var0.adjustmentX;
                var0 = _closure1_slot14;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var0 = 'top';
                var2 = var0 === var1;
                var9 = 'column';
                if (!var2) {
                    _fun57489_ip = 48;
                    continue _fun57489
                }
            case 42:
                var9 = 'column-reverse';
            case 48:
                var0 = {};
                var1 = -6;
                if (var2) {
                    _fun57489_ip = 68;
                    continue _fun57489
                }
            case 59:
                var0.marginBottom = var1;
                var6 = var0;
                _fun57489_ip = 75;
                continue _fun57489;
            case 68:
                var0.marginTop = var1;
                var6 = var0;
            case 75:
                var2 = _closure1_slot11;
                var1 = _closure1_slot7;
                var0 = {};
                var10 = var8.cursorContainer;
                var4 = new Array(3);
                var4[0] = var10;
                var4[1] = var6;
                var6 = {};
                var6.flexDirection = var9;
                var7 = -var7;
                var6.left = var7;
                var4[2] = var6;
                var0.style = var4;
                var7 = _closure1_slot10;
                var6 = _closure1_slot7;
                var4 = {};
                var9 = var8.cursorHead;
                var4.style = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var8.cursorSpine;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Coachmark/native/Coachmark.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.Coachmark = var3;
    var1 = function arg0() {
        _fun57490: for (var _fun57490_ip = 0;;) switch (_fun57490_ip) {
            case 0:
                var7 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 17;
                var0 = var0[var6];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.useThemeContext;
                var0 = var0.bind(var1)();
                var0 = var0.theme;
                var1 = var7.experimental_withBlurBackground;
                var5 = 'dark';
                if (var1) {
                    _fun57490_ip = 60;
                    continue _fun57490
                }
            case 57:
                var5 = var0;
            case 60:
                var2 = _closure1_slot10;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var0.theme = var5;
                var6 = _closure1_slot10;
                var5 = _closure1_slot16;
                var4 = {};
                var9 = var4;
                var8 = var7;
                var7 = copyDataProperties(var9, var8);
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.CoachmarkContainer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 31, 27, 33, 3711, 1297, 671, 7015, 4080, 4880, 3932, 4075, 1234, 4727, 7020, 478, 3150, 2]);