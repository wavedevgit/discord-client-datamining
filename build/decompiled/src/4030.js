// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var0 = ['enabled', 'freezeOnBlur', 'shouldFreeze'];
    var _closure1_slot3 = var0;
    var0 = ['active', 'activityState', 'children', 'isNativeStack', 'fullScreenSwipeEnabled', 'gestureResponseDistance', 'scrollEdgeEffects', 'onGestureCancel', 'style'];
    var _closure1_slot4 = var0;
    var0 = ['active', 'activityState', 'style', 'onComponentRef'];
    var _closure1_slot5 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 1;
    var1 = var8[var1];
    var6 = var7.bind(var0)(var1);
    var _closure1_slot7 = var6;
    var1 = 2;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var5 = var1.Animated;
    var _closure1_slot8 = var5;
    var1 = var1.Platform;
    var1 = 3;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot9 = var1;
    var3 = var5.createAnimatedComponent;
    var1 = 4;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var3.bind(var5)(var1);
    var _closure1_slot10 = var1;
    var3 = var5.createAnimatedComponent;
    var1 = 5;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var3.bind(var5)(var1);
    var3 = var6.forwardRef;
    var1 = function arg0, arg1() {
        _fun37421: for (var _fun37421_ip = 0;;) switch (_fun37421_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var6 = _closure1_slot7;
                var0 = var6.useRef;
                var4 = null;
                var0 = var0.bind(var6)(var4);
                var _closure2_slot1 = var0;
                var3 = var6.useImperativeHandle;
                var2 = arg1;
                var1 = function() { // Environment: var14
                    var0 = _closure2_slot1;
                    var0 = var0.current;
                    return var0;
                };
                var0 = new Array(0);
                var0 = var3.bind(var6)(var2, var1, var0);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.usePrevious;
                var0 = var9.activityState;
                var2 = var1.bind(var2)(var0);
                var22 = function arg0() {
                    _fun37423: for (var _fun37423_ip = 0;;) switch (_fun37423_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot1;
                            var1.current = var2;
                            var1 = _closure2_slot0;
                            var3 = var1.onComponentRef;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun37423_ip = 47;
                                continue _fun37423
                            }
                        case 32:
                            var1 = _closure2_slot0;
                            var0 = var1.onComponentRef;
                            var0 = var0.bind(var1)(var2);
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot2 = var22;
                var7 = var6.useRef;
                var0 = _closure1_slot8;
                var5 = var0.Value;
                var1 = var5.prototype;
                var8 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var1 = 0;
                var43 = var8;
                var42 = 0;
                var5 = new var43[var5](var42, var41);
                var5 = var5 instanceof Object ? var5 : var8;
                var5 = var7.bind(var6)(var5);
                var16 = var5.current;
                var7 = var6.useRef;
                var5 = var0.Value;
                var8 = var5.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var5
                    }
                });
                var43 = var8;
                var42 = 0;
                var5 = new var43[var5](var42, var41);
                var5 = var5 instanceof Object ? var5 : var8;
                var5 = var7.bind(var6)(var5);
                var17 = var5.current;
                var5 = var6.useRef;
                var0 = var0.Value;
                var7 = var0.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var0
                    }
                });
                var43 = var7;
                var42 = 0;
                var0 = new var43[var0](var42, var41);
                var0 = var0 instanceof Object ? var0 : var7;
                var0 = var5.bind(var6)(var0);
                var15 = var0.current;
                var5 = var9.enabled;
                if (!(var3 === var5)) {
                    _fun37421_ip = 279;
                    continue _fun37421
                }
            case 249:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var6 = var6.bind(var3)(var0);
                var0 = var6.screensEnabled;
                var5 = var0.bind(var6)();
            case 279:
                var6 = var9.freezeOnBlur;
                if (!(var3 === var6)) {
                    _fun37421_ip = 319;
                    continue _fun37421
                }
            case 289:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var7 = var7.bind(var3)(var0);
                var0 = var7.freezeEnabled;
                var6 = var0.bind(var7)();
            case 319:
                var0 = var9.shouldFreeze;
                var8 = _closure1_slot6;
                var7 = _closure1_slot3;
                var38 = var8.bind(var3)(var9, var7);
                var13 = var38.sheetAllowedDetents;
                if (!(var3 === var13)) {
                    _fun37421_ip = 359;
                    continue _fun37421
                }
            case 349:
                var13 = [1];
            case 359:
                var21 = var38.sheetLargestUndimmedDetentIndex;
                if (!(var3 === var21)) {
                    _fun37421_ip = 397;
                    continue _fun37421
                }
            case 371:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 8;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var21 = var7.SHEET_DIMMED_ALWAYS;
            case 397:
                var7 = var38.sheetGrabberVisible;
                var24 = var3 !== var7;
                if (!var24) {
                    _fun37421_ip = 413;
                    continue _fun37421
                }
            case 410:
                var24 = var7;
            case 413:
                var7 = var38.sheetCornerRadius;
                var19 = -1;
                var23 = var19;
                if (!(var3 !== var7)) {
                    _fun37421_ip = 435;
                    continue _fun37421
                }
            case 432:
                var23 = var7;
            case 435:
                var7 = var38.sheetExpandsWhenScrolledToEdge;
                var20 = var3 === var7;
                if (var20) {
                    _fun37421_ip = 451;
                    continue _fun37421
                }
            case 448:
                var20 = var7;
            case 451:
                var7 = var38.sheetElevation;
                var27 = 24;
                if (!(var3 !== var7)) {
                    _fun37421_ip = 467;
                    continue _fun37421
                }
            case 464:
                var27 = var7;
            case 467:
                var7 = var38.sheetInitialDetentIndex;
                var9 = 0;
                if (!(var3 !== var7)) {
                    _fun37421_ip = 484;
                    continue _fun37421
                }
            case 481:
                var9 = var7;
            case 484:
                var7 = var38.sheetShouldOverflowTopInset;
                var26 = var3 !== var7;
                if (!var26) {
                    _fun37421_ip = 500;
                    continue _fun37421
                }
            case 497:
                var26 = var7;
            case 500:
                var7 = var38.sheetDefaultResizeAnimationEnabled;
                var25 = var3 === var7;
                if (var25) {
                    _fun37421_ip = 516;
                    continue _fun37421
                }
            case 513:
                var25 = var7;
            case 516:
                var30 = var38.screenId;
                var7 = var38.stackPresentation;
                var37 = var38.onAppear;
                var36 = var38.onDisappear;
                var35 = var38.onWillAppear;
                var34 = var38.onWillDisappear;
                if (!var5) {
                    _fun37421_ip = 587;
                    continue _fun37421
                }
            case 555:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 7;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.isNativePlatformSupported;
                if (var5) {
                    _fun37421_ip = 730;
                    continue _fun37421
                }
            case 587:
                var7 = var38.active;
                var32 = var38.activityState;
                var29 = var38.style;
                var5 = var38.onComponentRef;
                var8 = _closure1_slot6;
                var5 = _closure1_slot5;
                var18 = var8.bind(var3)(var38, var5);
                var5 = var3 !== var7;
                if (!var5) {
                    _fun37421_ip = 635;
                    continue _fun37421
                }
            case 631:
                var5 = var3 === var32;
            case 635:
                if (!var5) {
                    _fun37421_ip = 650;
                    continue _fun37421
                }
            case 638:
                var5 = 0;
                if (!(var1 !== var7)) {
                    _fun37421_ip = 647;
                    continue _fun37421
                }
            case 644:
                var5 = 2;
            case 647:
                var32 = var5;
            case 650:
                var8 = _closure1_slot9;
                var5 = _closure1_slot8;
                var7 = var5.View;
                var5 = global;
                var12 = var5.Object;
                var11 = var12.assign;
                var5 = {};
                var28 = new Array(2);
                var28[0] = var29;
                var29 = {};
                var31 = 'none';
                if (!(var1 !== var32)) {
                    _fun37421_ip = 700;
                    continue _fun37421
                }
            case 696:
                var31 = 'flex';
            case 700:
                var29.display = var31;
                var28[1] = var29;
                var5.style = var28;
                var5.ref = var22;
                var5 = var11.bind(var12)(var5, var18);
                var5 = var8.bind(var3)(var7, var5);
                return var5;
            case 730:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 8;
                var11 = var8[var5];
                var12 = var7.bind(var3)(var11);
                var11 = var12.resolveSheetAllowedDetents;
                var29 = var11.bind(var12)(var13);
                var11 = var8[var5];
                var18 = var7.bind(var3)(var11);
                var13 = var18.resolveSheetLargestUndimmedDetent;
                var12 = var29.length;
                var11 = 1;
                var12 = var12 - var11;
                var28 = var13.bind(var18)(var21, var12);
                var5 = var8[var5];
                var8 = var7.bind(var3)(var5);
                var7 = var8.resolveSheetInitialDetentIndex;
                var5 = var29.length;
                var5 = var5 - var11;
                var18 = var7.bind(var8)(var9, var5);
                var5 = _closure1_slot10;
                var8 = var38.active;
                var31 = var38.activityState;
                var13 = var38.children;
                var11 = var38.isNativeStack;
                var22 = var38.fullScreenSwipeEnabled;
                var21 = var38.gestureResponseDistance;
                var12 = var38.scrollEdgeEffects;
                var32 = var38.onGestureCancel;
                var33 = var38.style;
                var9 = _closure1_slot6;
                var7 = _closure1_slot4;
                var9 = var9.bind(var3)(var38, var7);
                var7 = var3 !== var8;
                if (!var7) {
                    _fun37421_ip = 905;
                    continue _fun37421
                }
            case 901:
                var7 = var3 === var31;
            case 905:
                if (!var7) {
                    _fun37421_ip = 944;
                    continue _fun37421
                }
            case 908:
                var7 = global;
                var39 = var7.console;
                var38 = var39.warn;
                var7 = 'It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens';
                var7 = var38.bind(var39)(var7);
                var7 = 0;
                if (!(var7 !== var8)) {
                    _fun37421_ip = 941;
                    continue _fun37421
                }
            case 938:
                var7 = 2;
            case 941:
                var31 = var7;
            case 944:
                if (!var11) {
                    _fun37421_ip = 962;
                    continue _fun37421
                }
            case 947:
                if (!(var3 !== var2)) {
                    _fun37421_ip = 962;
                    continue _fun37421
                }
            case 951:
                if (!(var3 !== var31)) {
                    _fun37421_ip = 962;
                    continue _fun37421
                }
            case 955:
                if (!(!(var2 > var31))) {
                    _fun37421_ip = 1612;
                    continue _fun37421
                }
            case 962:
                if (!var6) {
                    _fun37421_ip = 976;
                    continue _fun37421
                }
            case 965:
                if (!(var3 === var0)) {
                    _fun37421_ip = 973;
                    continue _fun37421
                }
            case 969:
                var0 = var1 === var31;
            case 973:
                var6 = var0;
            case 976:
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.freeze = var6;
                var6 = global;
                var8 = var6.Object;
                var7 = var8.assign;
                var6 = {};
                var6.onAppear = var37;
                var6.onDisappear = var36;
                var6.onWillAppear = var35;
                var6.onWillDisappear = var34;
                if (!(var4 == var32)) {
                    _fun37421_ip = 1051;
                    continue _fun37421
                }
            case 1046:
                var32 = function() { // Environment: var14
                    var0 = undefined;
                    return var0;
                };
            case 1051:
                var6.onGestureCancel = var32;
                var32 = new Array(2);
                var32[0] = var33;
                var33 = {};
                var33.zIndex = var3;
                var32[1] = var33;
                var6.style = var32;
                var6.activityState = var31;
                var6.screenId = var30;
                var6.sheetAllowedDetents = var29;
                var6.sheetLargestUndimmedDetent = var28;
                var6.sheetElevation = var27;
                var6.sheetShouldOverflowTopInset = var26;
                var6.sheetDefaultResizeAnimationEnabled = var25;
                var6.sheetGrabberVisible = var24;
                var6.sheetCornerRadius = var23;
                var6.sheetExpandsWhenScrolledToEdge = var20;
                var6.sheetInitialDetent = var18;
                var20 = _closure1_slot0;
                var23 = _closure1_slot2;
                var18 = 10;
                var18 = var23[var18];
                var20 = var20.bind(var3)(var18);
                var18 = var20.parseBooleanToOptionalBooleanNativeProp;
                var18 = var18.bind(var20)(var22);
                var6.fullScreenSwipeEnabled = var18;
                var18 = {};
                var20 = var4 == var21;
                var22 = undefined;
                if (var20) {
                    _fun37421_ip = 1186;
                    continue _fun37421
                }
            case 1181:
                var22 = var21.start;
            case 1186:
                var23 = var4 != var22;
                var20 = var19;
                if (!var23) {
                    _fun37421_ip = 1199;
                    continue _fun37421
                }
            case 1196:
                var20 = var22;
            case 1199:
                var18.start = var20;
                var20 = var4 == var21;
                var22 = undefined;
                if (var20) {
                    _fun37421_ip = 1217;
                    continue _fun37421
                }
            case 1212:
                var22 = var21.end;
            case 1217:
                var23 = var4 != var22;
                var20 = var19;
                if (!var23) {
                    _fun37421_ip = 1230;
                    continue _fun37421
                }
            case 1227:
                var20 = var22;
            case 1230:
                var18.end = var20;
                var20 = var4 == var21;
                var22 = undefined;
                if (var20) {
                    _fun37421_ip = 1248;
                    continue _fun37421
                }
            case 1243:
                var22 = var21.top;
            case 1248:
                var23 = var4 != var22;
                var20 = var19;
                if (!var23) {
                    _fun37421_ip = 1261;
                    continue _fun37421
                }
            case 1258:
                var20 = var22;
            case 1261:
                var18.top = var20;
                var22 = var4 == var21;
                var20 = undefined;
                if (var22) {
                    _fun37421_ip = 1279;
                    continue _fun37421
                }
            case 1274:
                var20 = var21.bottom;
            case 1279:
                var21 = var4 != var20;
                if (!var21) {
                    _fun37421_ip = 1289;
                    continue _fun37421
                }
            case 1286:
                var19 = var20;
            case 1289:
                var18.bottom = var19;
                var6.gestureResponseDistance = var18;
                var14 = function arg0() {
                    _fun37425: for (var _fun37425_ip = 0;;) switch (_fun37425_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun37425_ip = 40;
                                continue _fun37425
                            }
                        case 9:
                            var1 = var2.viewConfig;
                            if (!(var0 != var1)) {
                                _fun37425_ip = 40;
                                continue _fun37425
                            }
                        case 19:
                            var1 = var1.validAttributes;
                            if (!(var0 != var1)) {
                                _fun37425_ip = 40;
                                continue _fun37425
                            }
                        case 29:
                            var1 = var1.style;
                            if (var1) {
                                _fun37425_ip = 263;
                                continue _fun37425
                            }
                        case 40:
                            if (!(var0 != var2)) {
                                _fun37425_ip = 75;
                                continue _fun37425
                            }
                        case 44:
                            var1 = var2._viewConfig;
                            if (!(var0 != var1)) {
                                _fun37425_ip = 75;
                                continue _fun37425
                            }
                        case 54:
                            var1 = var1.validAttributes;
                            if (!(var0 != var1)) {
                                _fun37425_ip = 75;
                                continue _fun37425
                            }
                        case 64:
                            var1 = var1.style;
                            if (var1) {
                                _fun37425_ip = 198;
                                continue _fun37425
                            }
                        case 75:
                            var1 = var0 != var2;
                            var4 = undefined;
                            if (!var1) {
                                _fun37425_ip = 97;
                                continue _fun37425
                            }
                        case 84:
                            var3 = var2.__viewConfig;
                            var1 = var0 != var3;
                            var4 = var3;
                        case 97:
                            var3 = var4;
                            if (!var1) {
                                _fun37425_ip = 116;
                                continue _fun37425
                            }
                        case 103:
                            var4 = var4.validAttributes;
                            var1 = var0 != var4;
                            var3 = var4;
                        case 116:
                            if (!var1) {
                                _fun37425_ip = 124;
                                continue _fun37425
                            }
                        case 119:
                            var1 = var3.style;
                        case 124:
                            if (!var1) {
                                _fun37425_ip = 326;
                                continue _fun37425
                            }
                        case 130:
                            var1 = var2.__viewConfig;
                            var3 = var1.validAttributes;
                            var1 = global;
                            var7 = var1.Object;
                            var6 = var7.assign;
                            var1 = var2.__viewConfig;
                            var1 = var1.validAttributes;
                            var5 = var1.style;
                            var4 = {};
                            var4.display = var0;
                            var1 = {};
                            var1 = var6.bind(var7)(var1, var5, var4);
                            var3.style = var1;
                            _fun37425_ip = 326;
                            continue _fun37425;
                        case 198:
                            var1 = var2._viewConfig;
                            var3 = var1.validAttributes;
                            var1 = global;
                            var7 = var1.Object;
                            var6 = var7.assign;
                            var1 = var2._viewConfig;
                            var1 = var1.validAttributes;
                            var5 = var1.style;
                            var4 = {};
                            var4.display = var0;
                            var1 = {};
                            var1 = var6.bind(var7)(var1, var5, var4);
                            var3.style = var1;
                            _fun37425_ip = 326;
                            continue _fun37425;
                        case 263:
                            var1 = var2.viewConfig;
                            var1 = var1.validAttributes;
                            var3 = global;
                            var6 = var3.Object;
                            var5 = var6.assign;
                            var3 = var2.viewConfig;
                            var3 = var3.validAttributes;
                            var4 = var3.style;
                            var3 = {};
                            var3.display = var0;
                            var0 = {};
                            var0 = var5.bind(var6)(var0, var4, var3);
                            var1.style = var0;
                        case 326:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var6.ref = var14;
                var14 = undefined;
                if (!var11) {
                    _fun37421_ip = 1368;
                    continue _fun37421
                }
            case 1312:
                var21 = _closure1_slot8;
                var20 = var21.event;
                var18 = {};
                var19 = {};
                var19.progress = var17;
                var19.closing = var16;
                var19.goingForward = var15;
                var18.nativeEvent = var19;
                var19 = new Array(1);
                var19[0] = var18;
                var18 = {};
                var22 = true;
                var18.useNativeDriver = var22;
                var14 = var20.bind(var21)(var19, var18);
            case 1368:
                var6.onTransitionProgress = var14;
                var18 = var4 == var12;
                var14 = undefined;
                if (var18) {
                    _fun37421_ip = 1387;
                    continue _fun37421
                }
            case 1382:
                var14 = var12.bottom;
            case 1387:
                var6.bottomScrollEdgeEffect = var14;
                var18 = var4 == var12;
                var14 = undefined;
                if (var18) {
                    _fun37421_ip = 1406;
                    continue _fun37421
                }
            case 1401:
                var14 = var12.left;
            case 1406:
                var6.leftScrollEdgeEffect = var14;
                var18 = var4 == var12;
                var14 = undefined;
                if (var18) {
                    _fun37421_ip = 1425;
                    continue _fun37421
                }
            case 1420:
                var14 = var12.right;
            case 1425:
                var6.rightScrollEdgeEffect = var14;
                var14 = var4 == var12;
                var4 = undefined;
                if (var14) {
                    _fun37421_ip = 1444;
                    continue _fun37421
                }
            case 1439:
                var4 = var12.top;
            case 1444:
                var6.topScrollEdgeEffect = var4;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 11;
                var18 = var14[var4];
                var18 = var12.bind(var3)(var18);
                var18 = var18.experiment;
                var18 = var18.synchronousScreenUpdatesEnabled;
                var6.synchronousShadowStateUpdatesEnabled = var18;
                var4 = var14[var4];
                var4 = var12.bind(var3)(var4);
                var4 = var4.experiment;
                var4 = var4.androidResetScreenShadowStateOnOrientationChangeEnabled;
                var6.androidResetScreenShadowStateOnOrientationChangeEnabled = var4;
                var4 = var13;
                if (!var11) {
                    _fun37421_ip = 1581;
                    continue _fun37421
                }
            case 1518:
                var12 = _closure1_slot9;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 12;
                var10 = var14[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Provider;
                var10 = {};
                var14 = {};
                var14.progress = var17;
                var14.closing = var16;
                var14.goingForward = var15;
                var10.value = var14;
                var10.children = var13;
                var4 = var12.bind(var3)(var11, var10);
            case 1581:
                var6.children = var4;
                var4 = {};
                var4 = var7.bind(var8)(var4, var9, var6);
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1612:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var42 = '[RNScreens] activityState cannot be decreased in NativeStack';
                var43 = var1;
                var0 = new var43[var2](var42, var41);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var _closure1_slot11 = var3;
    var1 = var6.createContext;
    var1 = var1.bind(var6)(var3);
    var _closure1_slot12 = var1;
    var5 = var6.forwardRef;
    var4 = function(arg0, arg1) { // Environment: var4
        _fun37426: for (var _fun37426_ip = 0;;) switch (_fun37426_ip) {
            case 0:
                var3 = _closure1_slot7;
                var2 = var3.useContext;
                var1 = _closure1_slot12;
                var3 = var2.bind(var3)(var1);
                if (var3) {
                    _fun37426_ip = 29;
                    continue _fun37426
                }
            case 25:
                var3 = _closure1_slot11;
            case 29:
                var2 = _closure1_slot9;
                var0 = global;
                var6 = var0.Object;
                var5 = var6.assign;
                var4 = {};
                var0 = arg1;
                var4.ref = var0;
                var1 = {};
                var0 = arg0;
                var1 = var5.bind(var6)(var1, var0, var4);
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var4 = var5.bind(var6)(var4);
    var5 = 'Screen';
    var4.displayName = var5;
    var2.default = var4;
    var2.InnerScreen = var3;
    var2.ScreenContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 4031, 4032, 4033, 4029, 4034, 4035, 4037, 4038, 4039]);