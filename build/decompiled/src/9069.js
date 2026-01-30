// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: NativeStackViewInner, environment: var1
        var0 = arg0;
        var5 = var0.state;
        var _closure2_slot0 = var5;
        var1 = var0.navigation;
        var _closure2_slot1 = var1;
        var1 = var0.descriptors;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 11;
        var0 = var7[var0];
        var3 = undefined;
        var0 = var2.bind(var3)(var0);
        var0 = var0.bind(var3)(var5);
        var0 = var0.setNextDismissedKey;
        var _closure2_slot3 = var0;
        var0 = 12;
        var0 = var7[var0];
        var0 = var2.bind(var3)(var0);
        var0 = var0.bind(var3)(var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var0 = 9;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ScreenStack;
        var0 = {};
        var6 = _closure1_slot11;
        var6 = var6.container;
        var0.style = var6;
        var6 = var5.routes;
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            _fun72654: for (var _fun72654_ip = 0;;) switch (_fun72654_ip) {
                case 0:
                    var0 = arg0;
                    var10 = arg1;
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot2;
                    var2 = var0.key;
                    var8 = var3[var2];
                    var2 = _closure2_slot0;
                    var9 = var2.index;
                    var4 = var2.routes;
                    var3 = 1;
                    var2 = var10 - var3;
                    var7 = var4[var2];
                    var2 = null;
                    var11 = var2 == var7;
                    var4 = undefined;
                    var6 = undefined;
                    if (var11) {
                        _fun72654_ip = 72;
                        continue _fun72654
                    }
                case 67:
                    var6 = var7.key;
                case 72:
                    var7 = _closure2_slot0;
                    var7 = var7.routes;
                    var3 = var10 + var3;
                    var3 = var7[var3];
                    var7 = var2 == var3;
                    var2 = undefined;
                    if (var7) {
                        _fun72654_ip = 104;
                        continue _fun72654
                    }
                case 99:
                    var2 = var3.key;
                case 104:
                    var7 = undefined;
                    if (!var6) {
                        _fun72654_ip = 117;
                        continue _fun72654
                    }
                case 109:
                    var3 = _closure2_slot2;
                    var7 = var3[var6];
                case 117:
                    var6 = undefined;
                    if (!var2) {
                        _fun72654_ip = 130;
                        continue _fun72654
                    }
                case 122:
                    var1 = _closure2_slot2;
                    var6 = var1[var2];
                case 130:
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var1.index = var10;
                    var9 = var9 === var10;
                    var1.focused = var9;
                    var1.descriptor = var8;
                    var1.previousDescriptor = var7;
                    var1.nextDescriptor = var6;
                    var6 = function() { // Original name: onWillDisappear, environment: var5
                        var2 = _closure2_slot1;
                        var1 = var2.emit;
                        var0 = {};
                        var3 = 'transitionStart';
                        var0.type = var3;
                        var3 = {};
                        var4 = true;
                        var3.closing = var4;
                        var0.data = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.key;
                        var0.target = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onWillDisappear = var6;
                    var6 = function() { // Original name: onWillAppear, environment: var5
                        var2 = _closure2_slot1;
                        var1 = var2.emit;
                        var0 = {};
                        var3 = 'transitionStart';
                        var0.type = var3;
                        var3 = {};
                        var4 = false;
                        var3.closing = var4;
                        var0.data = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.key;
                        var0.target = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onWillAppear = var6;
                    var6 = function() { // Original name: onAppear, environment: var5
                        var2 = _closure2_slot1;
                        var1 = var2.emit;
                        var0 = {};
                        var3 = 'transitionEnd';
                        var0.type = var3;
                        var3 = {};
                        var4 = false;
                        var3.closing = var4;
                        var0.data = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.key;
                        var0.target = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onAppear = var6;
                    var6 = function() { // Original name: onDisappear, environment: var5
                        var2 = _closure2_slot1;
                        var1 = var2.emit;
                        var0 = {};
                        var3 = 'transitionEnd';
                        var0.type = var3;
                        var3 = {};
                        var4 = true;
                        var3.closing = var4;
                        var0.data = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.key;
                        var0.target = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onDisappear = var6;
                    var6 = function(arg0) { // Original name: onDismissed, environment: var5
                        var5 = _closure2_slot1;
                        var4 = var5.dispatch;
                        var0 = global;
                        var9 = var0.Object;
                        var8 = var9.assign;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var6 = var1.StackActions;
                        var3 = var6.pop;
                        var1 = arg0;
                        var1 = var1.nativeEvent;
                        var1 = var1.dismissCount;
                        var7 = var3.bind(var6)(var1);
                        var6 = {};
                        var1 = _closure3_slot0;
                        var3 = var1.key;
                        var6.source = var3;
                        var3 = _closure2_slot0;
                        var3 = var3.key;
                        var6.target = var3;
                        var3 = {};
                        var3 = var8.bind(var9)(var3, var7, var6);
                        var3 = var4.bind(var5)(var3);
                        var2 = _closure2_slot3;
                        var1 = var1.key;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onDismissed = var6;
                    var6 = function() { // Original name: onHeaderBackButtonClicked, environment: var5
                        var3 = _closure2_slot1;
                        var2 = var3.dispatch;
                        var0 = global;
                        var7 = var0.Object;
                        var6 = var7.assign;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 4;
                        var4 = var4[var0];
                        var0 = undefined;
                        var4 = var5.bind(var0)(var4);
                        var5 = var4.StackActions;
                        var4 = var5.pop;
                        var5 = var4.bind(var5)();
                        var4 = {};
                        var8 = _closure3_slot0;
                        var8 = var8.key;
                        var4.source = var8;
                        var1 = _closure2_slot0;
                        var1 = var1.key;
                        var4.target = var1;
                        var1 = {};
                        var1 = var6.bind(var7)(var1, var5, var4);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1.onHeaderBackButtonClicked = var6;
                    var6 = function(arg0) { // Original name: onNativeDismissCancelled, environment: var5
                        var3 = _closure2_slot1;
                        var2 = var3.dispatch;
                        var0 = global;
                        var7 = var0.Object;
                        var6 = var7.assign;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 4;
                        var4 = var4[var0];
                        var0 = undefined;
                        var4 = var5.bind(var0)(var4);
                        var8 = var4.StackActions;
                        var5 = var8.pop;
                        var4 = arg0;
                        var4 = var4.nativeEvent;
                        var4 = var4.dismissCount;
                        var5 = var5.bind(var8)(var4);
                        var4 = {};
                        var8 = _closure3_slot0;
                        var8 = var8.key;
                        var4.source = var8;
                        var1 = _closure2_slot0;
                        var1 = var1.key;
                        var4.target = var1;
                        var1 = {};
                        var1 = var6.bind(var7)(var1, var5, var4);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1.onNativeDismissCancelled = var6;
                    var5 = function() { // Original name: onGestureCancel, environment: var5
                        var2 = _closure2_slot1;
                        var1 = var2.emit;
                        var0 = {};
                        var3 = 'gestureCancel';
                        var0.type = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.key;
                        var0.target = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onGestureCancel = var5;
                    var0 = var0.key;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var7 = 1;
    var5 = var6[var7];
    var3 = arg3;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Platform;
    var5 = var3.StyleSheet;
    var _closure1_slot5 = var5;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot7 = var4;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = function(arg0) { // Original name: MaybeNestedStack, environment: var1
        _fun72663: for (var _fun72663_ip = 0;;) switch (_fun72663_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.options;
                var9 = var2.route;
                var _closure2_slot0 = var9;
                var6 = var2.presentation;
                var3 = var2.headerHeight;
                var3 = var2.headerTopInsetEnabled;
                var4 = var2.children;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var2 = var3[var2];
                var3 = undefined;
                var7 = var7.bind(var3)(var2);
                var2 = var7.useTheme;
                var2 = var2.bind(var7)();
                var10 = var2.colors;
                var2 = var1.header;
                var2 = var1.headerShown;
                var11 = var3 === var2;
                if (var11) {
                    _fun72663_ip = 104;
                    continue _fun72663
                }
            case 101:
                var11 = var2;
            case 104:
                var _closure2_slot1 = var11;
                var7 = var1.contentStyle;
                var8 = _closure1_slot4;
                var1 = var8.useRef;
                var1 = var1.bind(var8)(var11);
                var _closure2_slot2 = var1;
                var2 = var8.useEffect;
                var1 = new Array(3);
                var1[0] = var11;
                var1[1] = var6;
                var9 = var9.name;
                var1[2] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var2 = _closure2_slot0;
                    var6 = var2.name;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var3 = "Dynamically changing 'headerShown' in modals will result in remounting the screen and losing all local state. See options for the screen '";
                    var2 = "'.";
                    var3 = var5.bind(var3)(var6, var2);
                    var2 = false;
                    var2 = var4.bind(var0)(var2, var3);
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var2.current = var1;
                    return var0;
                };
                var0 = var2.bind(var8)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 6;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = _closure1_slot11;
                var8 = var5.container;
                var5 = new Array(3);
                var5[0] = var8;
                var8 = 'transparentModal';
                var8 = var8 !== var6;
                if (!var8) {
                    _fun72663_ip = 237;
                    continue _fun72663
                }
            case 227:
                var9 = 'containedTransparentModal';
                var8 = var9 !== var6;
            case 237:
                if (!var8) {
                    _fun72663_ip = 255;
                    continue _fun72663
                }
            case 240:
                var9 = {};
                var10 = var10.background;
                var9.backgroundColor = var10;
                var8 = var9;
            case 255:
                var5[1] = var8;
                var5[2] = var7;
                var0.style = var5;
                var5 = 'push';
                var7 = 'card';
                if (!(var7 !== var6)) {
                    _fun72663_ip = 282;
                    continue _fun72663
                }
            case 279:
                var5 = var6;
            case 282:
                var0.stackPresentation = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = function(arg0) { // Original name: SceneView, environment: var1
        _fun72665: for (var _fun72665_ip = 0;;) switch (_fun72665_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.index;
                var31 = var0.focused;
                var2 = var0.descriptor;
                var3 = var0.previousDescriptor;
                var8 = var0.nextDescriptor;
                var16 = var0.onWillDisappear;
                var15 = var0.onWillAppear;
                var13 = var0.onAppear;
                var12 = var0.onDisappear;
                var11 = var0.onDismissed;
                var7 = var0.onHeaderBackButtonClicked;
                var6 = var0.onNativeDismissCancelled;
                var10 = var0.onGestureCancel;
                var0 = var2.route;
                var36 = var2.navigation;
                var24 = var2.options;
                var41 = var2.render;
                var22 = var24.animationDuration;
                var2 = var24.animationTypeForReplace;
                var52 = 'push';
                var4 = undefined;
                var54 = var52;
                if (!(var4 !== var2)) {
                    _fun72665_ip = 133;
                    continue _fun72665
                }
            case 130:
                var54 = var2;
            case 133:
                var2 = var24.fullScreenGestureShadowEnabled;
                var17 = var4 !== var2;
                if (!var17) {
                    _fun72665_ip = 151;
                    continue _fun72665
                }
            case 148:
                var17 = var2;
            case 151:
                var2 = var24.gestureEnabled;
                var9 = var24.gestureResponseDistance;
                var27 = var24.header;
                var29 = var24.headerBackButtonMenuEnabled;
                var28 = var24.headerShown;
                var23 = var24.headerBackground;
                var37 = var24.headerTransparent;
                var58 = var24.autoHideHomeIndicator;
                var57 = var24.keyboardHandlingEnabled;
                var56 = var24.navigationBarColor;
                var55 = var24.navigationBarHidden;
                var50 = var24.orientation;
                var2 = var24.sheetAllowedDetents;
                var49 = 'large';
                if (!(var4 !== var2)) {
                    _fun72665_ip = 239;
                    continue _fun72665
                }
            case 236:
                var49 = var2;
            case 239:
                var2 = var24.sheetLargestUndimmedDetent;
                var48 = 'all';
                if (!(var4 !== var2)) {
                    _fun72665_ip = 256;
                    continue _fun72665
                }
            case 253:
                var48 = var2;
            case 256:
                var2 = var24.sheetGrabberVisible;
                var47 = var4 !== var2;
                if (!var47) {
                    _fun72665_ip = 272;
                    continue _fun72665
                }
            case 269:
                var47 = var2;
            case 272:
                var2 = var24.sheetCornerRadius;
                var46 = -1;
                if (!(var4 !== var2)) {
                    _fun72665_ip = 291;
                    continue _fun72665
                }
            case 288:
                var46 = var2;
            case 291:
                var2 = var24.sheetExpandsWhenScrolledToEdge;
                var45 = var4 === var2;
                if (var45) {
                    _fun72665_ip = 307;
                    continue _fun72665
                }
            case 304:
                var45 = var2;
            case 307:
                var44 = var24.statusBarAnimation;
                var43 = var24.statusBarHidden;
                var40 = var24.statusBarStyle;
                var33 = var24.statusBarTranslucent;
                var39 = var24.statusBarColor;
                var5 = var24.freezeOnBlur;
                var51 = var24.animation;
                var60 = var24.customAnimationOnGesture;
                var59 = var24.fullScreenGestureEnabled;
                var2 = var24.presentation;
                var53 = 'card';
                var34 = var53;
                if (!(var4 !== var2)) {
                    _fun72665_ip = 383;
                    continue _fun72665
                }
            case 380:
                var34 = var2;
            case 383:
                var32 = var24.gestureDirection;
                if (!(var4 === var32)) {
                    _fun72665_ip = 408;
                    continue _fun72665
                }
            case 393:
                var2 = 'vertical';
                if (!(var53 === var34)) {
                    _fun72665_ip = 405;
                    continue _fun72665
                }
            case 401:
                var2 = 'horizontal';
            case 405:
                var32 = var2;
            case 408:
                var35 = null;
                var14 = var35 == var8;
                var2 = undefined;
                if (var14) {
                    _fun72665_ip = 430;
                    continue _fun72665
                }
            case 419:
                var8 = var8.options;
                var2 = var8.gestureDirection;
            case 430:
                if (!(var35 != var2)) {
                    _fun72665_ip = 437;
                    continue _fun72665
                }
            case 434:
                var32 = var2;
            case 437:
                var20 = 0;
                if (!(var20 === var1)) {
                    _fun72665_ip = 446;
                    continue _fun72665
                }
            case 443:
                var34 = var53;
            case 446:
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 7;
                var2 = var14[var1];
                var18 = var8.bind(var4)(var2);
                var2 = var18.useSafeAreaInsets;
                var2 = var2.bind(var18)();
                var1 = var14[var1];
                var8 = var8.bind(var4)(var1);
                var1 = var8.useSafeAreaFrame;
                var61 = var1.bind(var8)();
                var1 = 'modal';
                var30 = var1 === var34;
                if (var30) {
                    _fun72665_ip = 519;
                    continue _fun72665
                }
            case 509:
                var1 = 'formSheet';
                var30 = var1 === var34;
            case 519:
                var1 = var61.width;
                var1 = var61.height;
                var18 = _closure1_slot4;
                var14 = var18.useContext;
                var25 = _closure1_slot0;
                var1 = _closure1_slot2;
                var42 = 8;
                var8 = var1[var42];
                var8 = var25.bind(var4)(var8);
                var8 = var8.HeaderShownContext;
                var14 = var14.bind(var18)(var8);
                var21 = var18.useContext;
                var8 = var1[var42];
                var8 = var25.bind(var4)(var8);
                var8 = var8.HeaderHeightContext;
                var21 = var21.bind(var18)(var8);
                var8 = var18.useContext;
                var1 = var1[var42];
                var1 = var25.bind(var4)(var1);
                var1 = var1.HeaderBackContext;
                var1 = var8.bind(var18)(var1);
                var25 = 0;
                if (var14) {
                    _fun72665_ip = 632;
                    continue _fun72665
                }
            case 627:
                var25 = var2.top;
            case 632:
                var26 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 4;
                var2 = var18[var8];
                var62 = var26.bind(var4)(var2);
                var2 = var62.usePreventRemoveContext;
                var2 = var2.bind(var62)();
                var2 = var2.preventedRoutes;
                var18 = var18[var42];
                var26 = var26.bind(var4)(var18);
                var18 = var26.getDefaultHeaderHeight;
                var26 = var18.bind(var26)(var61, var30, var25);
                var30 = _closure1_slot4;
                var18 = var30.useState;
                var61 = var18.bind(var30)(var26);
                var30 = _closure1_slot3;
                var18 = 2;
                var61 = var30.bind(var4)(var61, var18);
                var18 = var61[var20];
                var30 = 1;
                var30 = var61[var30];
                var _closure2_slot0 = var30;
                var62 = 'boolean';
                var61 = typeof var33;
                var30 = var25;
                var25 = var33;
                if (!(var62 !== var61)) {
                    _fun72665_ip = 753;
                    continue _fun72665
                }
            case 749:
                var25 = var20 !== var30;
            case 753:
                if (!var27) {
                    _fun72665_ip = 759;
                    continue _fun72665
                }
            case 756:
                var26 = var18;
            case 759:
                var18 = var1;
                if (!var3) {
                    _fun72665_ip = 819;
                    continue _fun72665
                }
            case 765:
                var1 = {};
                var61 = _closure1_slot0;
                var30 = _closure1_slot2;
                var30 = var30[var42];
                var62 = var61.bind(var4)(var30);
                var61 = var62.getHeaderTitle;
                var30 = var3.options;
                var3 = var3.route;
                var3 = var3.name;
                var3 = var61.bind(var62)(var30, var3);
                var1.title = var3;
                var18 = var1;
            case 819:
                var1 = var0.key;
                var1 = var2[var1];
                var2 = var35 == var1;
                var30 = undefined;
                if (var2) {
                    _fun72665_ip = 843;
                    continue _fun72665
                }
            case 837:
                var30 = var1.preventRemove;
            case 843:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var61 = _closure1_slot2;
                var1 = 9;
                var1 = var61[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Screen;
                var1 = {
                    'enabled': true,
                    'isNativeStack': true
                };
                var61 = _closure1_slot5;
                var61 = var61.absoluteFill;
                var1.style = var61;
                var62 = var24.headerLargeTitle;
                var61 = var35 != var62;
                if (!var61) {
                    _fun72665_ip = 917;
                    continue _fun72665
                }
            case 914:
                var61 = var62;
            case 917:
                var1.hasLargeHeader = var61;
                var1.customAnimationOnSwipe = var60;
                var1.fullScreenSwipeEnabled = var59;
                var1.fullScreenSwipeShadowEnabled = var17;
                var17 = false;
                var1.gestureEnabled = var17;
                var1.homeIndicatorHidden = var58;
                var1.hideKeyboardOnSwipe = var57;
                var1.navigationBarColor = var56;
                var1.navigationBarHidden = var55;
                var1.replaceAnimation = var54;
                if (!(var53 !== var34)) {
                    _fun72665_ip = 976;
                    continue _fun72665
                }
            case 973:
                var52 = var34;
            case 976:
                var1.stackPresentation = var52;
                var1.stackAnimation = var51;
                var1.screenOrientation = var50;
                var1.sheetAllowedDetents = var49;
                var1.sheetLargestUndimmedDetent = var48;
                var1.sheetGrabberVisible = var47;
                var1.sheetCornerRadius = var46;
                var1.sheetExpandsWhenScrolledToEdge = var45;
                var1.statusBarAnimation = var44;
                var1.statusBarHidden = var43;
                var1.statusBarStyle = var40;
                var1.statusBarColor = var39;
                var1.statusBarTranslucent = var33;
                var1.swipeDirection = var32;
                var1.transitionDuration = var22;
                var1.onWillDisappear = var16;
                var1.onWillAppear = var15;
                var1.onAppear = var13;
                var1.onDisappear = var12;
                var1.onDismissed = var11;
                var1.onGestureCancel = var10;
                var1.gestureResponseDistance = var9;
                var1.nativeBackButtonDismissalEnabled = var17;
                var1.onHeaderBackButtonClicked = var7;
                var1.preventNativeDismiss = var30;
                var1.onNativeDismissCancelled = var6;
                var1.freezeOnBlur = var5;
                var7 = _closure1_slot7;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = var11[var8];
                var5 = var12.bind(var4)(var5);
                var5 = var5.NavigationContext;
                var6 = var5.Provider;
                var5 = {};
                var5.value = var36;
                var10 = _closure1_slot7;
                var8 = var11[var8];
                var8 = var12.bind(var4)(var8);
                var8 = var8.NavigationRouteContext;
                var9 = var8.Provider;
                var8 = {};
                var8.value = var0;
                var13 = _closure1_slot7;
                var11 = var11[var42];
                var11 = var12.bind(var4)(var11);
                var11 = var11.HeaderShownContext;
                var12 = var11.Provider;
                var11 = {};
                if (var14) {
                    _fun72665_ip = 1215;
                    continue _fun72665
                }
            case 1211:
                var14 = var17 !== var28;
            case 1215:
                var11.value = var14;
                var16 = _closure1_slot8;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var42];
                var14 = var15.bind(var4)(var14);
                var14 = var14.HeaderHeightContext;
                var15 = var14.Provider;
                var14 = {};
                var32 = var17 !== var28;
                var17 = var26;
                if (var32) {
                    _fun72665_ip = 1279;
                    continue _fun72665
                }
            case 1264:
                var22 = var35 != var21;
                var20 = 0;
                if (!var22) {
                    _fun72665_ip = 1276;
                    continue _fun72665
                }
            case 1273:
                var20 = var21;
            case 1276:
                var17 = var20;
            case 1279:
                var14.value = var17;
                var17 = var35 != var23;
                var20 = null;
                if (!var17) {
                    _fun72665_ip = 1367;
                    continue _fun72665
                }
            case 1292:
                var22 = _closure1_slot7;
                var21 = _closure1_slot6;
                var17 = {};
                var33 = _closure1_slot11;
                var39 = var33.background;
                var33 = new Array(3);
                var33[0] = var39;
                var39 = null;
                if (!var37) {
                    _fun72665_ip = 1335;
                    continue _fun72665
                }
            case 1325:
                var40 = _closure1_slot11;
                var39 = var40.translucent;
            case 1335:
                var33[1] = var39;
                var39 = {};
                var39.height = var26;
                var33[2] = var39;
                var17.style = var33;
                var23 = var23.bind(var4)();
                var17.children = var23;
                var20 = var22.bind(var4)(var21, var17);
            case 1367:
                var17 = new Array(3);
                var17[0] = var20;
                var22 = _closure1_slot8;
                var21 = _closure1_slot6;
                var20 = {};
                var23 = !var31;
                var20.accessibilityElementsHidden = var23;
                var23 = 'no-hide-descendants';
                if (!var31) {
                    _fun72665_ip = 1406;
                    continue _fun72665
                }
            case 1402:
                var23 = 'auto';
            case 1406:
                var20.importantForAccessibility = var23;
                var23 = _closure1_slot11;
                var23 = var23.scene;
                var20.style = var23;
                var33 = _closure1_slot7;
                var31 = _closure1_slot9;
                var23 = {};
                var23.options = var24;
                var23.route = var0;
                var23.presentation = var34;
                var23.headerHeight = var26;
                var23.headerTopInsetEnabled = var25;
                var40 = _closure1_slot7;
                var39 = _closure1_slot0;
                var34 = _closure1_slot2;
                var34 = var34[var42];
                var34 = var39.bind(var4)(var34);
                var34 = var34.HeaderBackContext;
                var39 = var34.Provider;
                var34 = {};
                var34.value = var18;
                var41 = var41.bind(var4)();
                var34.children = var41;
                var34 = var40.bind(var4)(var39, var34);
                var23.children = var34;
                var31 = var33.bind(var4)(var31, var23);
                var23 = new Array(2);
                var23[0] = var31;
                var31 = null;
                if (!(var4 !== var27)) {
                    _fun72665_ip = 1618;
                    continue _fun72665
                }
            case 1536:
                var31 = null;
                if (!var32) {
                    _fun72665_ip = 1618;
                    continue _fun72665
                }
            case 1541:
                var34 = _closure1_slot7;
                var33 = _closure1_slot6;
                var32 = {};
                var38 = function(arg0) { // Original name: onLayout, environment: var38
                    var2 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var32.onLayout = var38;
                var35 = null;
                if (!var37) {
                    _fun72665_ip = 1578;
                    continue _fun72665
                }
            case 1568:
                var37 = _closure1_slot11;
                var35 = var37.absolute;
            case 1578:
                var32.style = var35;
                var35 = {};
                var35.back = var18;
                var35.options = var24;
                var35.route = var0;
                var35.navigation = var36;
                var35 = var27.bind(var4)(var35);
                var32.children = var35;
                var31 = var34.bind(var4)(var33, var32);
            case 1618:
                var23[1] = var31;
                var20.children = var23;
                var20 = var22.bind(var4)(var21, var20);
                var17[1] = var20;
                var20 = _closure1_slot7;
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var19 = 10;
                var19 = var22[var19];
                var19 = var21.bind(var4)(var19);
                var21 = global;
                var23 = var21.Object;
                var22 = var23.assign;
                var21 = {};
                var21.route = var0;
                if (!(var4 !== var30)) {
                    _fun72665_ip = 1687;
                    continue _fun72665
                }
            case 1684:
                var29 = !var30;
            case 1687:
                var21.headerBackButtonMenuEnabled = var29;
                var27 = var4 === var27;
                if (!var27) {
                    _fun72665_ip = 1702;
                    continue _fun72665
                }
            case 1699:
                var27 = var28;
            case 1702:
                var21.headerShown = var27;
                var21.headerHeight = var26;
                var27 = var24.headerBackTitle;
                var26 = undefined;
                if (!(var26 !== var27)) {
                    _fun72665_ip = 1730;
                    continue _fun72665
                }
            case 1724:
                var26 = var24.headerBackTitle;
            case 1730:
                var21.headerBackTitle = var26;
                var21.headerTopInsetEnabled = var25;
                var18 = var4 !== var18;
                var21.canGoBack = var18;
                var18 = {};
                var18 = var22.bind(var23)(var18, var24, var21);
                var18 = var20.bind(var4)(var19, var18);
                var17[2] = var18;
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var0.key;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {};
    var6.flex = var7;
    var3.container = var6;
    var6 = {
        'flex': 1,
        'flexDirection': 'column-reverse'
    };
    var3.scene = var6;
    var6 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0
    };
    var3.absolute = var6;
    var6 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'zIndex': 1,
        'elevation': 1
    };
    var3.translucent = var6;
    var6 = {};
    var7 = 'hidden';
    var6.overflow = var7;
    var3.background = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot11 = var3;
    var1 = function(arg0) { // Original name: NativeStackView, environment: var1
        var3 = _closure1_slot7;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.SafeAreaProviderCompat;
        var0 = {};
        var6 = _closure1_slot7;
        var5 = _closure1_slot12;
        var4 = global;
        var9 = var4.Object;
        var8 = var9.assign;
        var7 = {};
        var4 = arg0;
        var4 = var8.bind(var9)(var7, var4);
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1470, 4012, 9070, 1571, 5756, 3990, 9071, 9074, 9075]);