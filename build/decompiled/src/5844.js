// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 1;
    var5 = var7[var8];
    var1 = metroImportAll;
    var5 = var1.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var1 = 2;
    var1 = var7[var1];
    var1 = var3.bind(var0)(var1);
    var6 = var1.StyleSheet;
    var _closure1_slot5 = var6;
    var1 = var1.View;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var3.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot7 = var3;
    var1 = var1.jsxs;
    var _closure1_slot8 = var1;
    var3 = var5.memo;
    var1 = function arg0() {
        _fun51518: for (var _fun51518_ip = 0;;) switch (_fun51518_ip) {
            case 0:
                var1 = arg0;
                var48 = var1.interpolationIndex;
                var38 = var1.index;
                var20 = var1.active;
                var _closure2_slot0 = var20;
                var44 = var1.closing;
                var45 = var1.gesture;
                var6 = var1.focused;
                var10 = var1.modal;
                var16 = var1.getPreviousScene;
                var15 = var1.getFocusedRoute;
                var5 = var1.headerDarkContent;
                var21 = var1.hasAbsoluteFloatHeader;
                var27 = var1.headerHeight;
                var14 = var1.onHeaderHeightChange;
                var25 = var1.isParentHeaderShown;
                var7 = var1.isNextScreenTransparent;
                var4 = var1.detachCurrentScreen;
                var17 = var1.layout;
                var0 = var1.onCloseRoute;
                var _closure2_slot1 = var0;
                var0 = var1.onOpenRoute;
                var _closure2_slot2 = var0;
                var0 = var1.onGestureCancel;
                var _closure2_slot3 = var0;
                var0 = var1.onGestureEnd;
                var _closure2_slot4 = var0;
                var0 = var1.onGestureStart;
                var _closure2_slot5 = var0;
                var0 = var1.onTransitionEnd;
                var _closure2_slot6 = var0;
                var0 = var1.onTransitionStart;
                var _closure2_slot7 = var0;
                var13 = var1.renderHeader;
                var28 = var1.renderScene;
                var9 = var1.safeAreaInsetBottom;
                var0 = var1.safeAreaInsetLeft;
                var11 = var1.safeAreaInsetRight;
                var12 = var1.safeAreaInsetTop;
                var18 = var1.scene;
                var _closure2_slot8 = var18;
                var8 = _closure1_slot4;
                var22 = var8.useContext;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var32 = 4;
                var19 = var2[var32];
                var3 = undefined;
                var19 = var1.bind(var3)(var19);
                var19 = var19.HeaderHeightContext;
                var30 = var22.bind(var8)(var19);
                var22 = _closure1_slot1;
                var19 = 5;
                var19 = var2[var19];
                var22 = var22.bind(var3)(var19);
                var26 = var8.useCallback;
                var19 = var18.descriptor;
                var23 = new Array(1);
                var23[0] = var19;
                var19 = function() { // Environment: var40
                    _fun51519: for (var _fun51519_ip = 0;;) switch (_fun51519_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var0 = var0.descriptor;
                            var1 = var0.options;
                            var2 = var0.navigation;
                            var0 = var2.isFocused;
                            var0 = var0.bind(var2)();
                            if (!var0) {
                                _fun51519_ip = 49;
                                continue _fun51519
                            }
                        case 37:
                            var2 = var1.keyboardHandlingEnabled;
                            var1 = false;
                            var0 = var1 !== var2;
                        case 49:
                            return var0;
                    }
                };
                var19 = var26.bind(var8)(var19, var23);
                var19 = var22.bind(var3)(var19);
                var22 = var19.onPageChangeStart;
                var _closure2_slot9 = var22;
                var22 = var19.onPageChangeCancel;
                var _closure2_slot10 = var22;
                var19 = var19.onPageChangeConfirm;
                var _closure2_slot11 = var19;
                var46 = {};
                var46.top = var12;
                var46.right = var11;
                var46.bottom = var9;
                var46.left = var0;
                var0 = 6;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useTheme;
                var0 = var0.bind(var1)();
                var22 = var0.colors;
                var0 = var8.useState;
                var11 = 'box-none';
                var2 = var0.bind(var8)(var11);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var29 = 0;
                var12 = var1[var29];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot12 = var0;
                var2 = var8.useEffect;
                var1 = new Array(2);
                var1[0] = var12;
                var0 = var18.progress;
                var0 = var0.next;
                var1[1] = var0;
                var0 = function() { // Environment: var40
                    _fun51520: for (var _fun51520_ip = 0;;) switch (_fun51520_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var1 = var1.progress;
                            var4 = var1.next;
                            var5 = null;
                            var2 = var5 == var4;
                            var1 = undefined;
                            if (var2) {
                                _fun51520_ip = 62;
                                continue _fun51520
                            }
                        case 31:
                            var2 = var4.addListener;
                            var2 = var5 == var2;
                            var1 = undefined;
                            if (var2) {
                                _fun51520_ip = 62;
                                continue _fun51520
                            }
                        case 46:
                            var3 = var4.addListener;
                            var2 = function(arg0) { // Environment: var0
                                _fun51521: for (var _fun51521_ip = 0;;) switch (_fun51521_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.value;
                                        var2 = _closure2_slot12;
                                        var0 = 0.1;
                                        var0 = var1 <= var0;
                                        var1 = 'none';
                                        if (!var0) {
                                            _fun51521_ip = 42;
                                            continue _fun51521
                                        }
                                    case 36:
                                        var1 = 'box-none';
                                    case 42:
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2);
                        case 62:
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                _fun51522: for (var _fun51522_ip = 0;;) switch (_fun51522_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        if (!var1) {
                                            _fun51522_ip = 65;
                                            continue _fun51522
                                        }
                                    case 10:
                                        var1 = _closure2_slot8;
                                        var1 = var1.progress;
                                        var2 = var1.next;
                                        var4 = null;
                                        var1 = var4 == var2;
                                        if (var1) {
                                            _fun51522_ip = 47;
                                            continue _fun51522
                                        }
                                    case 37:
                                        var3 = var2.removeListener;
                                        var1 = var4 == var3;
                                    case 47:
                                        if (var1) {
                                            _fun51522_ip = 65;
                                            continue _fun51522
                                        }
                                    case 50:
                                        var1 = var2.removeListener;
                                        var0 = _closure3_slot0;
                                        var0 = var1.bind(var2)(var0);
                                    case 65:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = var2.bind(var8)(var0, var1);
                var0 = var18.descriptor;
                var0 = var0.options;
                var26 = var0.presentation;
                var8 = var0.animationEnabled;
                var43 = var0.cardOverlay;
                var42 = var0.cardOverlayEnabled;
                var41 = var0.cardShadowEnabled;
                var9 = var0.cardStyle;
                var34 = var0.cardStyleInterpolator;
                var47 = var0.gestureDirection;
                var39 = var0.gestureEnabled;
                var37 = var0.gestureResponseDistance;
                var36 = var0.gestureVelocityImpact;
                var23 = var0.headerMode;
                var31 = var0.headerShown;
                var35 = var0.transitionSpec;
                var0 = {};
                var1 = var18.descriptor;
                var1 = var1.route;
                var0.route = var1;
                var19 = var16.bind(var3)(var0);
                var0 = undefined;
                if (!var19) {
                    _fun51518_ip = 667;
                    continue _fun51518
                }
            case 609:
                var1 = var19.descriptor;
                var49 = var1.options;
                var1 = var1.route;
                var33 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var32];
                var33 = var33.bind(var3)(var2);
                var2 = var33.getHeaderTitle;
                var1 = var1.name;
                var1 = var2.bind(var33)(var49, var1);
                var _closure2_slot13 = var1;
                var0 = var1;
            case 667:
                var33 = _closure1_slot4;
                var2 = var33.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var40
                    _fun51523: for (var _fun51523_ip = 0;;) switch (_fun51523_ip) {
                        case 0:
                            var1 = _closure2_slot13;
                            var0 = undefined;
                            if (!(var0 !== var1)) {
                                _fun51523_ip = 26;
                                continue _fun51523
                            }
                        case 13:
                            var1 = {};
                            var2 = _closure2_slot13;
                            var1.title = var2;
                            var0 = var1;
                        case 26:
                            return var0;
                    }
                };
                var33 = var2.bind(var33)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var49 = _closure1_slot2;
                var0 = 7;
                var0 = var49[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.interpolationIndex = var48;
                var0.gestureDirection = var47;
                var0.layout = var17;
                var0.insets = var46;
                var0.gesture = var45;
                var45 = var18.progress;
                var45 = var45.current;
                var0.current = var45;
                var45 = var18.progress;
                var45 = var45.next;
                var0.next = var45;
                var0.closing = var44;
                var44 = function() {
                    var0 = _closure2_slot8;
                    var0 = var0.descriptor;
                    var3 = var0.route;
                    var5 = _closure2_slot6;
                    var4 = {};
                    var4.route = var3;
                    var0 = undefined;
                    var2 = false;
                    var2 = var5.bind(var0)(var4, var2);
                    var2 = _closure2_slot2;
                    var1 = {};
                    var1.route = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onOpen = var44;
                var44 = function() {
                    var0 = _closure2_slot8;
                    var0 = var0.descriptor;
                    var3 = var0.route;
                    var5 = _closure2_slot6;
                    var4 = {};
                    var4.route = var3;
                    var0 = undefined;
                    var2 = true;
                    var2 = var5.bind(var0)(var4, var2);
                    var2 = _closure2_slot1;
                    var1 = {};
                    var1.route = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onClose = var44;
                var0.overlay = var43;
                var0.overlayEnabled = var42;
                var0.shadowEnabled = var41;
                var41 = function arg0() {
                    _fun51526: for (var _fun51526_ip = 0;;) switch (_fun51526_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.closing;
                            var2 = var0.gesture;
                            var0 = _closure2_slot8;
                            var0 = var0.descriptor;
                            var0 = var0.route;
                            if (var2) {
                                _fun51526_ip = 62;
                                continue _fun51526
                            }
                        case 37:
                            var4 = _closure2_slot11;
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun51526_ip = 117;
                                continue _fun51526
                            }
                        case 47:
                            var5 = _closure2_slot11;
                            var4 = undefined;
                            var2 = true;
                            var2 = var5.bind(var4)(var2);
                            _fun51526_ip = 117;
                            continue _fun51526;
                        case 62:
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun51526_ip = 72;
                                continue _fun51526
                            }
                        case 69:
                            if (var3) {
                                _fun51526_ip = 94;
                                continue _fun51526
                            }
                        case 72:
                            var4 = _closure2_slot10;
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun51526_ip = 117;
                                continue _fun51526
                            }
                        case 82:
                            var4 = _closure2_slot10;
                            var2 = undefined;
                            var2 = var4.bind(var2)();
                            _fun51526_ip = 117;
                            continue _fun51526;
                        case 94:
                            var4 = _closure2_slot11;
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun51526_ip = 117;
                                continue _fun51526
                            }
                        case 104:
                            var5 = _closure2_slot11;
                            var4 = undefined;
                            var2 = false;
                            var2 = var5.bind(var4)(var2);
                        case 117:
                            var4 = _closure2_slot7;
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun51526_ip = 146;
                                continue _fun51526
                            }
                        case 127:
                            var2 = _closure2_slot7;
                            var1 = {};
                            var1.route = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1, var3);
                        case 146:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onTransition = var41;
                var41 = function() {
                    var0 = _closure2_slot8;
                    var0 = var0.descriptor;
                    var3 = var0.route;
                    var2 = _closure2_slot9;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot5;
                    var1 = {};
                    var1.route = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onGestureBegin = var41;
                var41 = function() {
                    var0 = _closure2_slot8;
                    var0 = var0.descriptor;
                    var3 = var0.route;
                    var2 = _closure2_slot10;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot3;
                    var1 = {};
                    var1.route = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onGestureCanceled = var41;
                var40 = function() {
                    var0 = _closure2_slot8;
                    var0 = var0.descriptor;
                    var0 = var0.route;
                    var2 = _closure2_slot4;
                    var1 = {};
                    var1.route = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onGestureEnd = var40;
                var38 = var29 !== var38;
                if (!var38) {
                    _fun51518_ip = 866;
                    continue _fun51518
                }
            case 863:
                var38 = var39;
            case 866:
                var0.gestureEnabled = var38;
                var0.gestureResponseDistance = var37;
                var0.gestureVelocityImpact = var36;
                var0.transitionSpec = var35;
                var0.styleInterpolator = var34;
                var34 = !var6;
                var0.accessibilityElementsHidden = var34;
                var34 = 'no-hide-descendants';
                if (!var6) {
                    _fun51518_ip = 912;
                    continue _fun51518
                }
            case 908:
                var34 = 'auto';
            case 912:
                var0.importantForAccessibility = var34;
                if (var20) {
                    _fun51518_ip = 923;
                    continue _fun51518
                }
            case 920:
                var11 = var12;
            case 923:
                var0.pointerEvents = var11;
                var11 = 'float';
                var12 = var11 !== var23;
                var11 = var12;
                if (!var11) {
                    _fun51518_ip = 950;
                    continue _fun51518
                }
            case 942:
                var34 = 'modal';
                var11 = var34 !== var26;
            case 950:
                var0.pageOverflowEnabled = var11;
                var0.headerDarkContent = var5;
                var11 = null;
                var5 = null;
                if (!var21) {
                    _fun51518_ip = 986;
                    continue _fun51518
                }
            case 967:
                var21 = 'screen';
                var5 = null;
                if (!(var21 !== var23)) {
                    _fun51518_ip = 986;
                    continue _fun51518
                }
            case 977:
                var21 = {};
                var21.marginTop = var27;
                var5 = var21;
            case 986:
                var0.containerStyle = var5;
                var21 = {};
                var5 = 'transparent';
                var23 = 'transparentModal';
                if (!(var23 !== var26)) {
                    _fun51518_ip = 1013;
                    continue _fun51518
                }
            case 1007:
                var5 = var22.background;
            case 1013:
                var21.backgroundColor = var5;
                var5 = new Array(2);
                var5[0] = var21;
                var5[1] = var9;
                var0.contentStyle = var5;
                var5 = {};
                var9 = 'hidden';
                if (!var20) {
                    _fun51518_ip = 1045;
                    continue _fun51518
                }
            case 1043:
                var9 = undefined;
            case 1045:
                var5.overflow = var9;
                var26 = false;
                if (!(var26 === var8)) {
                    _fun51518_ip = 1071;
                    continue _fun51518
                }
            case 1056:
                if (!(var26 === var7)) {
                    _fun51518_ip = 1071;
                    continue _fun51518
                }
            case 1060:
                if (!(var26 !== var4)) {
                    _fun51518_ip = 1071;
                    continue _fun51518
                }
            case 1064:
                var4 = 'none';
                if (!var6) {
                    _fun51518_ip = 1075;
                    continue _fun51518
                }
            case 1071:
                var4 = 'flex';
            case 1075:
                var5.display = var4;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = _closure1_slot5;
                var5 = var5.absoluteFill;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = _closure1_slot9;
                var7 = var7.container;
                var4.style = var7;
                var9 = _closure1_slot8;
                var8 = _closure1_slot1;
                var22 = _closure1_slot2;
                var7 = 8;
                var7 = var22[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Provider;
                var7 = {};
                var7.value = var10;
                var10 = {};
                var20 = _closure1_slot9;
                var20 = var20.scene;
                var10.style = var20;
                var23 = _closure1_slot0;
                var20 = var22[var32];
                var20 = var23.bind(var3)(var20);
                var20 = var20.HeaderBackContext;
                var21 = var20.Provider;
                var20 = {};
                var20.value = var33;
                var22 = var22[var32];
                var22 = var23.bind(var3)(var22);
                var22 = var22.HeaderShownContext;
                var23 = var22.Provider;
                var22 = {};
                if (var25) {
                    _fun51518_ip = 1241;
                    continue _fun51518
                }
            case 1237:
                var25 = var26 !== var31;
            case 1241:
                var22.value = var25;
                var26 = _closure1_slot7;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var32];
                var24 = var25.bind(var3)(var24);
                var24 = var24.HeaderHeightContext;
                var25 = var24.Provider;
                var24 = {};
                if (var31) {
                    _fun51518_ip = 1298;
                    continue _fun51518
                }
            case 1283:
                var31 = var11 != var30;
                var29 = 0;
                if (!var31) {
                    _fun51518_ip = 1295;
                    continue _fun51518
                }
            case 1292:
                var29 = var30;
            case 1295:
                var27 = var29;
            case 1298:
                var24.value = var27;
                var27 = {};
                var29 = var18.descriptor;
                var29 = var29.route;
                var27.route = var29;
                var27 = var28.bind(var3)(var27);
                var24.children = var27;
                var24 = var26.bind(var3)(var25, var24);
                var22.children = var24;
                var22 = var6.bind(var3)(var23, var22);
                var20.children = var22;
                var20 = var6.bind(var3)(var21, var20);
                var10.children = var20;
                var20 = var6.bind(var3)(var5, var10);
                var10 = new Array(2);
                var10[0] = var20;
                var11 = null;
                if (!var12) {
                    _fun51518_ip = 1431;
                    continue _fun51518
                }
            case 1379:
                var12 = {};
                var20 = 'screen';
                var12.mode = var20;
                var12.layout = var17;
                var17 = new Array(2);
                var17[0] = var19;
                var17[1] = var18;
                var12.scenes = var17;
                var12.getPreviousScene = var16;
                var12.getFocusedRoute = var15;
                var12.onContentHeightChange = var14;
                var11 = var13.bind(var3)(var12);
            case 1431:
                var10[1] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var5)(var1);
    var5 = var6.create;
    var3 = {};
    var7 = {
        'flex': 1,
        'flexDirection': 'column-reverse'
    };
    var3.container = var7;
    var7 = {};
    var7.flex = var8;
    var3.scene = var7;
    var3 = var5.bind(var6)(var3);
    var _closure1_slot9 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 5795, 5845, 1470, 5825, 5821]);