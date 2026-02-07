// design/components/Navigator/native/Navigator.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.screens;
        var _closure2_slot0 = var7;
        var32 = var0.onWillFocus;
        var _closure2_slot1 = var32;
        var5 = var0.onDidFocus;
        var _closure2_slot2 = var5;
        var9 = var0.initialRouteName;
        var10 = var0.detachInactiveScreens;
        var20 = var0.gestureResponseDistance;
        var _closure2_slot3 = var20;
        var21 = var0.gestureDirection;
        var _closure2_slot4 = var21;
        var15 = var0.headerTitleAlign;
        var _closure2_slot5 = var15;
        var19 = var0.cardOverlayEnabled;
        var _closure2_slot6 = var19;
        var18 = var0.cardShadowEnabled;
        var _closure2_slot7 = var18;
        var17 = var0.cardStyle;
        var _closure2_slot8 = var17;
        var28 = var0.headerStyle;
        var _closure2_slot9 = var28;
        var1 = var0.viewStyle;
        var _closure2_slot10 = var1;
        var24 = var0.headerLeftContainerStyle;
        var _closure2_slot11 = var24;
        var25 = var0.headerTitleContainerStyle;
        var _closure2_slot12 = var25;
        var23 = var0.headerRightContainerStyle;
        var _closure2_slot13 = var23;
        var14 = var0.headerStatusBarHeight;
        var _closure2_slot14 = var14;
        var16 = var0.headerBackTitle;
        var _closure2_slot15 = var16;
        var22 = var0.hideTitle;
        var _closure2_slot16 = var22;
        var2 = var0.disableHeaderAnimation;
        var _closure2_slot17 = var2;
        var0 = _closure1_slot7;
        var3 = undefined;
        var29 = var0.bind(var3)();
        var _closure2_slot18 = var29;
        var11 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 7;
        var0 = var8[var0];
        var6 = var11.bind(var3)(var0);
        var0 = var6.useStyles;
        var26 = var0.bind(var6)();
        var _closure2_slot19 = var26;
        var0 = 8;
        var0 = var8[var0];
        var13 = var11.bind(var3)(var0);
        var12 = var13.useToken;
        var6 = _closure1_slot1;
        var0 = 5;
        var0 = var8[var0];
        var0 = var6.bind(var3)(var0);
        var0 = var0.colors;
        var0 = var0.NAVIGATOR_HEADER_TINT;
        var27 = var12.bind(var13)(var0);
        var _closure2_slot20 = var27;
        var0 = 6;
        var0 = var8[var0];
        var11 = var11.bind(var3)(var0);
        var0 = var11.useNavigatorShouldCrossfade;
        var30 = var0.bind(var11)();
        var _closure2_slot21 = var30;
        var12 = _closure1_slot4;
        var11 = var12.useState;
        var0 = function() { // Environment: var4
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.createStackNavigator;
            var0 = var0.bind(var1)();
            return var0;
        };
        var12 = var11.bind(var12)(var0);
        var11 = _closure1_slot3;
        var0 = 1;
        var11 = var11.bind(var3)(var12, var0);
        var0 = 0;
        var0 = var11[var0];
        var _closure2_slot22 = var0;
        var11 = 10;
        var11 = var8[var11];
        var11 = var6.bind(var3)(var11);
        var11 = var11.bind(var3)();
        var13 = var11.top;
        var _closure2_slot23 = var13;
        var31 = _closure1_slot4;
        var12 = var31.useCallback;
        var11 = new Array(2);
        var11[0] = var32;
        var11[1] = var5;
        var5 = function(arg0) { // Environment: var4
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = {};
            var2 = function() {
                _fun51609: for (var _fun51609_ip = 0;;) switch (_fun51609_ip) {
                    case 0:
                        var2 = _closure2_slot1;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun51609_ip = 31;
                            continue _fun51609
                        }
                    case 13:
                        var2 = _closure2_slot1;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 31:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.focus = var2;
            var1 = function arg0() {
                _fun51610: for (var _fun51610_ip = 0;;) switch (_fun51610_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.data;
                        var0 = var0.closing;
                        if (var0) {
                            _fun51610_ip = 30;
                            continue _fun51610
                        }
                    case 17:
                        var2 = _closure2_slot2;
                        var1 = null;
                        var0 = var1 == var2;
                    case 30:
                        if (var0) {
                            _fun51610_ip = 54;
                            continue _fun51610
                        }
                    case 33:
                        var2 = _closure2_slot2;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 54:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.transitionEnd = var1;
            return var0;
        };
        var5 = var12.bind(var31)(var5, var11);
        var _closure2_slot24 = var5;
        var12 = _closure1_slot4;
        var11 = var12.useCallback;
        var5 = new Array(22);
        var5[0] = var30;
        var30 = var29.navbar;
        var5[1] = var30;
        var30 = var29.headerLeftContainerStyle;
        var5[2] = var30;
        var29 = var29.headerRightContainerStyle;
        var5[3] = var29;
        var5[4] = var28;
        var5[5] = var27;
        var27 = var26.headerTitle;
        var5[6] = var27;
        var26 = var26.headerBackTitleStyle;
        var5[7] = var26;
        var5[8] = var25;
        var5[9] = var24;
        var5[10] = var23;
        var5[11] = var22;
        var5[12] = var21;
        var5[13] = var20;
        var5[14] = var19;
        var5[15] = var18;
        var5[16] = var17;
        var5[17] = var16;
        var5[18] = var15;
        var5[19] = var14;
        var5[20] = var13;
        var5[21] = var2;
        var2 = function(arg0) { // Environment: var4
            _fun51611: for (var _fun51611_ip = 0;;) switch (_fun51611_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.navigation;
                    var0 = var2.getState;
                    var0 = var0.bind(var2)();
                    var6 = null;
                    var2 = var6 == var0;
                    var4 = undefined;
                    var7 = undefined;
                    if (var2) {
                        _fun51611_ip = 40;
                        continue _fun51611
                    }
                case 34:
                    var7 = var0.routes;
                case 40:
                    if (!(var6 == var7)) {
                        _fun51611_ip = 48;
                        continue _fun51611
                    }
                case 44:
                    var7 = new Array(0);
                case 48:
                    var0 = {};
                    var5 = _closure2_slot21;
                    var2 = undefined;
                    if (!var5) {
                        _fun51611_ip = 66;
                        continue _fun51611
                    }
                case 62:
                    var2 = 'screen';
                case 66:
                    var0.headerMode = var2;
                    var2 = _closure2_slot18;
                    var5 = var2.navbar;
                    var2 = new Array(2);
                    var2[0] = var5;
                    var5 = _closure2_slot9;
                    var2[1] = var5;
                    var0.headerStyle = var2;
                    var2 = _closure2_slot20;
                    var0.headerTintColor = var2;
                    var2 = _closure2_slot19;
                    var5 = var2.headerTitle;
                    var0.headerTitleStyle = var5;
                    var2 = var2.headerBackTitleStyle;
                    var0.headerBackTitleStyle = var2;
                    var5 = false;
                    var0.headerTitleAllowFontScaling = var5;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 11;
                    var8 = var10[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.isAndroid;
                    var9 = var8.bind(var9)();
                    var8 = undefined;
                    if (var9) {
                        _fun51611_ip = 208;
                        continue _fun51611
                    }
                case 182:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 7;
                    var9 = var11[var9];
                    var9 = var10.bind(var4)(var9);
                    var8 = var9.renderBackImage;
                case 208:
                    var0.headerBackImage = var8;
                    var0.headerBackTitleVisible = var5;
                    var5 = 'center';
                    var8 = new Array(2);
                    var9 = {
                        'maxWidth': '60%',
                        'alignItems': 'center'
                    };
                    var8[0] = var9;
                    var9 = _closure2_slot12;
                    var8[1] = var9;
                    var0.headerTitleContainerStyle = var8;
                    var8 = _closure2_slot18;
                    var10 = var8.headerLeftContainerStyle;
                    var9 = new Array(2);
                    var9[0] = var10;
                    var10 = _closure2_slot11;
                    var9[1] = var10;
                    var0.headerLeftContainerStyle = var9;
                    var9 = var8.headerRightContainerStyle;
                    var8 = new Array(2);
                    var8[0] = var9;
                    var9 = _closure2_slot13;
                    var8[1] = var9;
                    var0.headerRightContainerStyle = var8;
                    var9 = _closure2_slot16;
                    var8 = undefined;
                    if (!var9) {
                        _fun51611_ip = 329;
                        continue _fun51611
                    }
                case 324:
                    var8 = function() { // Environment: var1
                        var0 = undefined;
                        return var0;
                    };
                case 329:
                    var0.headerTitle = var8;
                    var8 = _closure2_slot4;
                    var0.gestureDirection = var8;
                    var8 = _closure2_slot3;
                    var0.gestureResponseDistance = var8;
                    var8 = _closure2_slot6;
                    var0.cardOverlayEnabled = var8;
                    var8 = _closure2_slot7;
                    var0.cardShadowEnabled = var8;
                    var8 = _closure2_slot8;
                    var0.cardStyle = var8;
                    var8 = _closure2_slot15;
                    if (!(var6 == var8)) {
                        _fun51611_ip = 458;
                        continue _fun51611
                    }
                case 387:
                    var9 = var7.length;
                    var8 = 1;
                    var7 = undefined;
                    if (!(var8 === var9)) {
                        _fun51611_ip = 456;
                        continue _fun51611
                    }
                case 401:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 12;
                    var9 = var12[var8];
                    var9 = var11.bind(var4)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var4)(var8);
                    var8 = var8.t;
                    var8 = var8["13/7kX"];
                    var7 = var9.bind(var10)(var8);
                case 456:
                    _fun51611_ip = 462;
                    continue _fun51611;
                case 458:
                    var7 = _closure2_slot15;
                case 462:
                    var0.headerBackTitle = var7;
                    var7 = _closure2_slot5;
                    var7 = var6 != var7;
                    if (!var7) {
                        _fun51611_ip = 482;
                        continue _fun51611
                    }
                case 478:
                    var5 = _closure2_slot5;
                case 482:
                    var0.headerTitleAlign = var5;
                    var5 = _closure2_slot14;
                    if (!(var6 == var5)) {
                        _fun51611_ip = 501;
                        continue _fun51611
                    }
                case 495:
                    var5 = _closure2_slot23;
                    _fun51611_ip = 505;
                    continue _fun51611;
                case 501:
                    var5 = _closure2_slot14;
                case 505:
                    var0.headerStatusBarHeight = var5;
                    var5 = _closure2_slot21;
                    if (var5) {
                        _fun51611_ip = 551;
                        continue _fun51611
                    }
                case 517:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.CardStyleInterpolators;
                    var5 = var5.forHorizontalIOS;
                    _fun51611_ip = 556;
                    continue _fun51611;
                case 551:
                    var5 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.current;
                        var0 = {};
                        var1 = {};
                        var4 = var2.progress;
                        var3 = var4.interpolate;
                        var2 = {};
                        var5 = [0, 1];
                        var2.inputRange = var5;
                        var5 = [0, 1];
                        var2.outputRange = var5;
                        var2 = var3.bind(var4)(var2);
                        var1.opacity = var2;
                        var0.cardStyle = var1;
                        return var0;
                    };
                case 556:
                    var0.cardStyleInterpolator = var5;
                    var5 = _closure2_slot17;
                    if (var5) {
                        _fun51611_ip = 616;
                        continue _fun51611
                    }
                case 568:
                    var3 = _closure2_slot21;
                    if (var3) {
                        _fun51611_ip = 582;
                        continue _fun51611
                    }
                case 575:
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var5 = var0.current;
                        var4 = var0.next;
                        var3 = var0.layouts;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.HeaderStyleInterpolators;
                        var1 = var2.forUIKit;
                        var0 = {};
                        var0.current = var5;
                        var0.next = var4;
                        var0.layouts = var3;
                        var0 = var1.bind(var2)(var0);
                        var2 = var0.leftButtonStyle;
                        var1 = var0.titleStyle;
                        var1 = var1.transform;
                        var2.transform = var1;
                        var2 = var0.rightButtonStyle;
                        var1 = var0.titleStyle;
                        var1 = var1.transform;
                        var2.transform = var1;
                        return var0;
                    };
                    _fun51611_ip = 614;
                    continue _fun51611;
                case 582:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.HeaderStyleInterpolators;
                    var1 = var3.forFade;
                case 614:
                    _fun51611_ip = 648;
                    continue _fun51611;
                case 616:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.HeaderStyleInterpolators;
                    var1 = var2.forNoAnimation;
                case 648:
                    var0.headerStyleInterpolator = var1;
                    return var0;
            }
        };
        var5 = var11.bind(var12)(var2, var5);
        var2 = _closure1_slot6;
        var1 = var0.Navigator;
        var0 = {};
        var0.detachInactiveScreens = var10;
        var0.initialRouteName = var9;
        var0.screenOptions = var5;
        var5 = 13;
        var5 = var8[var5];
        var6 = var6.bind(var3)(var5);
        var5 = var6.keys;
        var6 = var5.bind(var6)(var7);
        var5 = var6.map;
        var4 = function(arg0) { // Environment: var4
            _fun51615: for (var _fun51615_ip = 0;;) switch (_fun51615_ip) {
                case 0:
                    var4 = arg0;
                    var5 = {};
                    var1 = _closure2_slot0;
                    var9 = var1[var4];
                    var10 = var5;
                    var1 = copyDataProperties(var10, var9);
                    var _closure3_slot0 = var5;
                    var1 = var5.fullscreen;
                    if (var1) {
                        _fun51615_ip = 50;
                        continue _fun51615
                    }
                case 38:
                    var3 = var5.customNavbar;
                    var2 = null;
                    var1 = var2 != var3;
                case 50:
                    var2 = _closure2_slot16;
                    if (!var2) {
                        _fun51615_ip = 68;
                        continue _fun51615
                    }
                case 57:
                    var2 = function() { // Environment: var0
                        var0 = undefined;
                        return var0;
                    };
                    var5.headerTitle = var2;
                case 68:
                    if (!var1) {
                        _fun51615_ip = 89;
                        continue _fun51615
                    }
                case 71:
                    var1 = true;
                    var5.headerTransparent = var1;
                    var1 = 'float';
                    var5.headerMode = var1;
                case 89:
                    var3 = _closure1_slot6;
                    var1 = _closure2_slot22;
                    var2 = var1.Screen;
                    var1 = {};
                    var1.name = var4;
                    var7 = var5.initialParams;
                    var1.initialParams = var7;
                    var6 = _closure2_slot24;
                    var1.listeners = var6;
                    var1.options = var5;
                    var0 = function arg0() {
                        var3 = _closure1_slot6;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 14;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.NavigatorScreen;
                        var0 = {};
                        var4 = _closure3_slot0;
                        var0.screen = var4;
                        var6 = arg0;
                        var7 = var0;
                        var4 = copyDataProperties(var7, var6);
                        var5 = _closure2_slot10;
                        var4 = 'viewStyle';
                        var0[var4] = var5;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.children = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun51618: for (var _fun51618_ip = 0;;) switch (_fun51618_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.initialRouteName;
                var0 = var2.initialRouteStack;
                var _closure2_slot0 = var0;
                var9 = var2.initialRouteState;
                var5 = var2.onStateChange;
                var13 = var2.navigationTheme;
                var1 = {
                    'initialRouteName': 0,
                    'initialRouteStack': 0,
                    'initialRouteState': 0,
                    'onStateChange': 0,
                    'navigationTheme': 0
                };
                var10 = null;
                var19 = var1;
                var18 = null;
                var0 = silentSetPrototypeOf(var19, var18);
                var11 = 0;
                var19 = {};
                var18 = var2;
                var17 = var1;
                var7 = copyDataProperties(var19, var18, var17);
                var1 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 15;
                var2 = var15[var0];
                var3 = undefined;
                var12 = var1.bind(var3)(var2);
                var2 = var12.createNavigationContainerRef;
                var14 = var2.bind(var12)();
                var _closure2_slot1 = var14;
                var16 = _closure1_slot4;
                var12 = var16.useState;
                var2 = function() { // Environment: var6
                    _fun51619: for (var _fun51619_ip = 0;;) switch (_fun51619_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var1 = var0 != var1;
                            var0 = undefined;
                            if (!var1) {
                                _fun51619_ip = 32;
                                continue _fun51619
                            }
                        case 18:
                            var1 = {};
                            var2 = _closure2_slot0;
                            var1.routes = var2;
                            var0 = var1;
                        case 32:
                            return var0;
                    }
                };
                var16 = var12.bind(var16)(var2);
                var12 = _closure1_slot3;
                var2 = 1;
                var2 = var12.bind(var3)(var16, var2);
                var11 = var2[var11];
                var12 = _closure1_slot1;
                var2 = 16;
                var2 = var15[var2];
                var2 = var12.bind(var3)(var2);
                var16 = var2.bind(var3)();
                var2 = 17;
                var2 = var15[var2];
                var12 = var1.bind(var3)(var2);
                var2 = var12.useNavigationTheme;
                var12 = var2.bind(var12)(var16);
                var2 = _closure1_slot6;
                var0 = var15[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.NavigationContainer;
                var0 = {};
                var0.ref = var14;
                if (!(var10 != var13)) {
                    _fun51618_ip = 228;
                    continue _fun51618
                }
            case 225:
                var12 = var13;
            case 228:
                var0.theme = var12;
                if (!(var10 == var9)) {
                    _fun51618_ip = 252;
                    continue _fun51618
                }
            case 237:
                var12 = var10 != var11;
                var10 = undefined;
                if (!var12) {
                    _fun51618_ip = 249;
                    continue _fun51618
                }
            case 246:
                var10 = var11;
            case 249:
                var9 = var10;
            case 252:
                var0.initialState = var9;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.routingInstrumentation;
                    var2 = var3.registerNavigationContainer;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onReady = var6;
                var0.onStateChange = var5;
                var5 = true;
                var0.independent = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot8;
                var4 = {};
                var4.initialRouteName = var8;
                var19 = var4;
                var18 = var7;
                var7 = copyDataProperties(var19, var18);
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var15 = var11.absoluteFillObject;
    var16 = var8;
    var9 = copyDataProperties(var16, var15);
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var13 = var12.BACKGROUND_BASE_LOW;
    var12 = 'backgroundColor';
    var8[var12] = var13;
    var3.container = var8;
    var8 = {};
    var11 = var11.hairlineWidth;
    var8.borderBottomWidth = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.borderBottomColor = var9;
    var9 = 'transparent';
    var8.shadowColor = var9;
    var3.navbar = var8;
    var8 = {
        'backgroundColor': 'transparent',
        'borderBottomColor': 'transparent'
    };
    var3.fullscreen = var8;
    var8 = {
        'paddingLeft': 16,
        'marginRight': 4294967280
    };
    var3.headerLeftContainerStyle = var8;
    var8 = {
        'paddingRight': 16,
        'marginLeft': 4294967280
    };
    var3.headerRightContainerStyle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Navigator/native/Navigator.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useNavigatorScreens = var3;
    var3 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useNavigatorShouldCrossfade;
        var4 = var2.bind(var3)();
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun51623: for (var _fun51623_ip = 0;;) switch (_fun51623_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    if (!var1) {
                        _fun51623_ip = 26;
                        continue _fun51623
                    }
                case 12:
                    var1 = {};
                    var2 = 'fade';
                    var1.animation = var2;
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useAccessibilityNativeStackOptions = var3;
    var1 = function arg0() {
        _fun51624: for (var _fun51624_ip = 0;;) switch (_fun51624_ip) {
            case 0:
                var4 = arg0;
                var5 = var4.useContainer;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun51624_ip = 17;
                    continue _fun51624
                }
            case 15:
                var5 = true;
            case 17:
                var0 = var4.android_blockParentGestures;
                if (!(var0 === var3)) {
                    _fun51624_ip = 29;
                    continue _fun51624
                }
            case 27:
                var0 = false;
            case 29:
                var8 = var4.containerStyle;
                var2 = {
                    'useContainer': 0,
                    'android_blockParentGestures': 0,
                    'containerStyle': 0
                };
                var11 = null;
                var12 = var2;
                var1 = silentSetPrototypeOf(var12, var11);
                var12 = {};
                var11 = var4;
                var10 = var2;
                var7 = copyDataProperties(var12, var11, var10);
                var1 = _closure1_slot7;
                var6 = var1.bind(var3)();
                if (var0) {
                    _fun51624_ip = 90;
                    continue _fun51624
                }
            case 84:
                var2 = _closure1_slot5;
                _fun51624_ip = 110;
                continue _fun51624;
            case 90:
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 19;
                var0 = var9[var0];
                var2 = var1.bind(var3)(var0);
            case 110:
                var1 = _closure1_slot6;
                var0 = {};
                var9 = var6.container;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var8;
                var0.style = var6;
                var6 = _closure1_slot6;
                if (var5) {
                    _fun51624_ip = 150;
                    continue _fun51624
                }
            case 144:
                var5 = _closure1_slot8;
                _fun51624_ip = 154;
                continue _fun51624;
            case 150:
                var5 = _closure1_slot9;
            case 154:
                var4 = {};
                var12 = var4;
                var11 = var7;
                var7 = copyDataProperties(var12, var11);
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var2.Navigator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 5838, 4705, 3153, 5839, 1568, 478, 1234, 22, 5899, 1470, 3247, 5904, 1208, 5905, 2]);