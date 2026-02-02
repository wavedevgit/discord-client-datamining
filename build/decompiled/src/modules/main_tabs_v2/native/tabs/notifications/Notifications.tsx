// modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var4 = function() {
        _fun103047: for (var _fun103047_ip = 0;;) switch (_fun103047_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getRootNavigationRef;
                var2 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var2)) {
                    _fun103047_ip = 81;
                    continue _fun103047
                }
            case 41:
                var1 = var2.canGoBack;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun103047_ip = 71;
                    continue _fun103047
                }
            case 54:
                var3 = var2.navigate;
                var1 = 'guilds';
                var1 = var3.bind(var2)(var1);
                _fun103047_ip = 81;
                continue _fun103047;
            case 71:
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
            case 81:
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var5 = function arg0() {
        _fun103048: for (var _fun103048_ip = 0;;) switch (_fun103048_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.style;
                var17 = var1.nestedInLaunchPad;
                var3 = undefined;
                if (!(var17 === var3)) {
                    _fun103048_ip = 24;
                    continue _fun103048
                }
            case 22:
                var17 = false;
            case 24:
                var16 = var1.inNestedNavigator;
                if (!(var16 === var3)) {
                    _fun103048_ip = 36;
                    continue _fun103048
                }
            case 34:
                var16 = false;
            case 36:
                var1 = _closure1_slot9;
                var10 = var1.bind(var3)();
                var5 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 21;
                var1 = var14[var4];
                var2 = var5.bind(var3)(var1);
                var1 = 22;
                var1 = var14[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.NOTIFICATIONS;
                var1 = var2.bind(var3)(var1);
                var7 = var1.analyticsLocations;
                var6 = _closure1_slot3;
                var5 = var6.useLayoutEffect;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.trackAppUIViewed;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var1 = var5.bind(var6)(var2, var1);
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot11;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = true;
                    return var0;
                };
                var0 = new Array(0);
                var2 = var2.bind(var5)(var1, var0);
                var12 = _closure1_slot0;
                var0 = 24;
                var0 = var14[var0];
                var1 = var12.bind(var3)(var0);
                var0 = var1.useNavigatorBackPressHandler;
                var0 = var0.bind(var1)(var2);
                var2 = _closure1_slot7;
                var0 = 25;
                var0 = var14[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.LayerScope;
                var0 = {};
                var5 = 1;
                var0.zIndex = var5;
                var6 = _closure1_slot7;
                var4 = var14[var4];
                var4 = var12.bind(var3)(var4);
                var5 = var4.AnalyticsLocationProvider;
                var4 = {};
                var4.value = var7;
                var9 = _closure1_slot8;
                var8 = _closure1_slot4;
                var7 = {};
                var15 = var10.container;
                var10 = new Array(2);
                var10[0] = var15;
                var10[1] = var13;
                var7.style = var10;
                var15 = _closure1_slot7;
                var13 = _closure1_slot10;
                var10 = {};
                var10.nestedInLaunchPad = var17;
                var10.inNestedNavigator = var16;
                var13 = var15.bind(var3)(var13, var10);
                var10 = new Array(3);
                var10[0] = var13;
                var16 = _closure1_slot7;
                var13 = 26;
                var13 = var14[var13];
                var13 = var12.bind(var3)(var13);
                var15 = var13.NotificationCenterForYou;
                var13 = {};
                var13.nestedInLaunchPad = var17;
                var13 = var16.bind(var3)(var15, var13);
                var10[1] = var13;
                var13 = _closure1_slot7;
                var11 = 27;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.TTIFirstContentfulPaint;
                var11 = {};
                var14 = 'notifications';
                var11.label = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[2] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var5;
    var3 = function arg0() {
        _fun103051: for (var _fun103051_ip = 0;;) switch (_fun103051_ip) {
            case 0:
                var11 = arg0;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 28;
                var1 = var10[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var9 = var1.bind(var3)();
                var1 = 29;
                var1 = var10[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var6 = var1.top;
                var _closure2_slot0 = var6;
                var1 = 8;
                var1 = var10[var1];
                var1 = var5.bind(var3)(var1);
                var7 = var1.bind(var3)();
                var _closure2_slot1 = var7;
                var1 = _closure1_slot9;
                var12 = var1.bind(var3)();
                var _closure2_slot2 = var12;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var12;
                var1[1] = var7;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun103052: for (var _fun103052_ip = 0;;) switch (_fun103052_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            if (var0) {
                                _fun103052_ip = 22;
                                continue _fun103052
                            }
                        case 14:
                            var0 = var1.containerOuter;
                            _fun103052_ip = 54;
                            continue _fun103052;
                        case 22:
                            var2 = var1.containerOuterTablet;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var3 = _closure2_slot0;
                            var2.paddingTop = var3;
                            var1[1] = var2;
                            var0 = var1;
                        case 54:
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var6 = _closure1_slot0;
                var0 = 30;
                var0 = var10[var0];
                var2 = var6.bind(var3)(var0);
                var1 = var2.useTrackTabPerformance;
                var0 = _closure1_slot5;
                var0 = var0.NOTIFICATIONS;
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var4;
                var7 = _closure1_slot7;
                var4 = 31;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var12 = true;
                var4.absolute = var12;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var5 = 32;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ThemeContextProvider;
                var5 = {};
                var5.gradient = var9;
                var10 = _closure1_slot7;
                var9 = _closure1_slot12;
                var8 = {};
                var16 = var8;
                var15 = var11;
                var12 = copyDataProperties(var16, var15);
                var11 = var11.route;
                var13 = null;
                var14 = var13 == var11;
                var12 = undefined;
                if (var14) {
                    _fun103051_ip = 306;
                    continue _fun103051
                }
            case 285:
                var11 = var11.params;
                var13 = var13 == var11;
                var12 = undefined;
                if (var13) {
                    _fun103051_ip = 306;
                    continue _fun103051
                }
            case 300:
                var12 = var11.inNestedNavigator;
            case 306:
                var11 = 'inNestedNavigator';
                var8[var11] = var12;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var9 = var8[var0];
    var6 = arg3;
    var0 = undefined;
    var10 = var6.bind(var0)(var9);
    var _closure1_slot3 = var10;
    var15 = 1;
    var6 = var8[var15];
    var6 = var7.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.MainTabsNavigatorScreens;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ContentDismissActionType;
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.jsx;
    var _closure1_slot7 = var9;
    var6 = var6.jsxs;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var11 = var7.bind(var0)(var6);
    var9 = var11.createStyles;
    var6 = {};
    var12 = {};
    var12.flex = var15;
    var6.containerOuter = var12;
    var12 = {};
    var13 = 6;
    var16 = var8[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var12.backgroundColor = var16;
    var16 = var8[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var12.paddingHorizontal = var16;
    var12.flex = var15;
    var6.containerOuterTablet = var12;
    var12 = {};
    var16 = var8[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var16;
    var12.flexGrow = var15;
    var6.container = var12;
    var12 = {
        'zIndex': 100,
        'width': '100%',
        'marginBottom': 12
    };
    var6.header = var12;
    var15 = 'center';
    var12 = {
        'height': 56,
        'marginHorizontal': 16,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.headerTitle = var12;
    var12 = {
        'flexDirection': 'row',
        'gap': 12
    };
    var6.actionButtons = var12;
    var12 = {};
    var16 = var8[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var12.marginRight = var16;
    var16 = var8[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_32;
    var12.height = var16;
    var16 = var8[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_32;
    var12.width = var16;
    var12.alignItems = var15;
    var12.justifyContent = var15;
    var15 = var8[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var12.borderRadius = var15;
    var6.headerClose = var12;
    var12 = {
        'flex': 1,
        'marginTop': 2
    };
    var6.headerText = var12;
    var12 = {
        'left': 0,
        'bottom': 0,
        'height': 1,
        'width': '100%',
        'position': 'absolute'
    };
    var13 = var8[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var12.backgroundColor = var13;
    var6.headerBorder = var12;
    var6 = var9.bind(var11)(var6);
    var _closure1_slot9 = var6;
    var9 = var10.memo;
    var6 = function arg0() {
        _fun103053: for (var _fun103053_ip = 0;;) switch (_fun103053_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.nestedInLaunchPad;
                var19 = var1.inNestedNavigator;
                var1 = _closure1_slot9;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 8;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var13 = var1.bind(var3)();
                var1 = 9;
                var1 = var9[var1];
                var6 = var2.bind(var3)(var1);
                var4 = var6.useExperiment;
                var1 = {};
                var7 = 'NativeNotifications';
                var1.location = var7;
                var1 = var4.bind(var6)(var1);
                var17 = var1.enabled;
                var4 = _closure1_slot3;
                var1 = var4.useRef;
                var18 = null;
                var22 = var1.bind(var4)(var18);
                var1 = 10;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var6 = var1.bind(var3)(var22);
                var _closure2_slot0 = var6;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot6;
                    var1 = var0.TAKE_ACTION;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var21 = var2.bind(var4)(var0, var1);
                var6 = _closure1_slot0;
                var0 = 11;
                var0 = var9[var0];
                var2 = var6.bind(var3)(var0);
                var1 = var2.useYouBarBackButtonBadgeEnabled;
                var0 = 'Notifications';
                var20 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = _closure1_slot7;
                var4 = 12;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.SafeAreaPaddingView;
                var4 = {};
                var9 = !var10;
                if (!var9) {
                    _fun103053_ip = 235;
                    continue _fun103053
                }
            case 232:
                var9 = !var13;
            case 235:
                var4.top = var9;
                var9 = null;
                if (var10) {
                    _fun103053_ip = 822;
                    continue _fun103053
                }
            case 247:
                var12 = _closure1_slot8;
                var11 = _closure1_slot4;
                var10 = {};
                var14 = var8.headerTitle;
                var10.style = var14;
                if (var13) {
                    _fun103053_ip = 278;
                    continue _fun103053
                }
            case 270:
                var14 = null;
                if (!var19) {
                    _fun103053_ip = 564;
                    continue _fun103053
                }
            case 278:
                var16 = _closure1_slot7;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var13 = 13;
                var13 = var27[var13];
                var13 = var26.bind(var3)(var13);
                var15 = var13.PressableOpacity;
                var13 = {};
                var23 = var8.headerClose;
                var13.style = var23;
                var23 = 14;
                var24 = var27[var23];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var27[var23];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23["13/7kX"];
                var23 = var24.bind(var25)(var23);
                var13.accessibilityLabel = var23;
                var23 = _closure1_slot11;
                var13.onPress = var23;
                var25 = _closure1_slot7;
                if (var19) {
                    _fun103053_ip = 453;
                    continue _fun103053
                }
            case 386:
                var23 = _closure1_slot0;
                var27 = _closure1_slot2;
                var19 = 17;
                var19 = var27[var19];
                var19 = var23.bind(var3)(var19);
                var23 = var19.XSmallIcon;
                var19 = {};
                var26 = _closure1_slot1;
                var24 = 6;
                var24 = var27[var24];
                var24 = var26.bind(var3)(var24);
                var24 = var24.colors;
                var24 = var24.INTERACTIVE_TEXT_DEFAULT;
                var19.color = var24;
                var19 = var25.bind(var3)(var23, var19);
                _fun103053_ip = 554;
                continue _fun103053;
            case 453:
                if (var20) {
                    _fun103053_ip = 523;
                    continue _fun103053
                }
            case 456:
                var23 = _closure1_slot0;
                var27 = _closure1_slot2;
                var20 = 16;
                var20 = var27[var20];
                var20 = var23.bind(var3)(var20);
                var23 = var20.ArrowLargeLeftIcon;
                var20 = {};
                var26 = _closure1_slot1;
                var24 = 6;
                var24 = var27[var24];
                var24 = var26.bind(var3)(var24);
                var24 = var24.colors;
                var24 = var24.INTERACTIVE_TEXT_DEFAULT;
                var20.color = var24;
                var20 = var25.bind(var3)(var23, var20);
                _fun103053_ip = 551;
                continue _fun103053;
            case 523:
                var24 = _closure1_slot1;
                var26 = _closure1_slot2;
                var23 = 15;
                var23 = var26[var23];
                var24 = var24.bind(var3)(var23);
                var23 = {};
                var20 = var25.bind(var3)(var24, var23);
            case 551:
                var19 = var20;
            case 554:
                var13.children = var19;
                var14 = var16.bind(var3)(var15, var13);
            case 564:
                var13 = new Array(3);
                var13[0] = var14;
                var16 = _closure1_slot7;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var14 = 18;
                var14 = var25[var14];
                var14 = var24.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'color': 'mobile-text-heading-primary',
                    'variant': 'heading-lg/bold',
                    'style': null,
                    'maxFontSizeMultiplier': 1.75,
                    'accessibilityRole': 'header'
                };
                var19 = var8.headerText;
                var14.style = var19;
                var19 = 14;
                var20 = var25[var19];
                var20 = var24.bind(var3)(var20);
                var23 = var20.intl;
                var20 = var23.string;
                var19 = var25[var19];
                var19 = var24.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.HcoRu0;
                var19 = var20.bind(var23)(var19);
                var14.children = var19;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var16 = _closure1_slot8;
                var15 = _closure1_slot4;
                var14 = {};
                var19 = var8.actionButtons;
                var14.style = var19;
                var18 = null;
                if (!var17) {
                    _fun103053_ip = 754;
                    continue _fun103053
                }
            case 713:
                var20 = _closure1_slot7;
                var19 = _closure1_slot1;
                var23 = _closure1_slot2;
                var17 = 19;
                var17 = var23[var17];
                var19 = var19.bind(var3)(var17);
                var17 = {};
                var17.ref = var22;
                var17.onOpen = var21;
                var18 = var20.bind(var3)(var19, var17);
            case 754:
                var17 = new Array(2);
                var17[0] = var18;
                var20 = _closure1_slot7;
                var19 = _closure1_slot1;
                var21 = _closure1_slot2;
                var18 = 20;
                var18 = var21[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var18 = var20.bind(var3)(var19, var18);
                var17[1] = var18;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[2] = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 822:
                var4.children = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var8.headerBorder;
                var8 = new Array(1);
                var8[0] = var9;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot10 = var6;
    var6 = 33;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.goBack = var4;
    var2.ThemedNotifications = var3;
    var1 = function() {
        var3 = _closure1_slot7;
        var2 = _closure1_slot13;
        var1 = {};
        var0 = true;
        var1.inNestedNavigator = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.ThemedNotificationsModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6904, 1369, 33, 1297, 671, 3881, 7649, 8698, 13422, 12110, 4699, 4867, 1234, 13423, 4671, 4697, 3902, 13424, 13426, 5690, 5543, 4330, 4673, 5170, 13431, 9658, 3203, 1568, 13076, 8673, 3120, 2]);