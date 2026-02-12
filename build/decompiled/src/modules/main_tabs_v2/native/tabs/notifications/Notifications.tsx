// modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
    var4 = function() {
        _fun103741: for (var _fun103741_ip = 0;;) switch (_fun103741_ip) {
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
                    _fun103741_ip = 81;
                    continue _fun103741
                }
            case 41:
                var1 = var2.canGoBack;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun103741_ip = 71;
                    continue _fun103741
                }
            case 54:
                var3 = var2.navigate;
                var1 = 'guilds';
                var1 = var3.bind(var2)(var1);
                _fun103741_ip = 81;
                continue _fun103741;
            case 71:
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
            case 81:
                return var0;
        }
    };
    var _closure1_slot16 = var4;
    var5 = function arg0() {
        _fun103742: for (var _fun103742_ip = 0;;) switch (_fun103742_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.style;
                var15 = var1.nestedInLaunchPad;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun103742_ip = 24;
                    continue _fun103742
                }
            case 22:
                var15 = false;
            case 24:
                var17 = var1.inNestedNavigator;
                if (!(var17 === var3)) {
                    _fun103742_ip = 36;
                    continue _fun103742
                }
            case 34:
                var17 = false;
            case 36:
                var1 = _closure1_slot9;
                var10 = var1.bind(var3)();
                var5 = _closure1_slot1;
                var16 = _closure1_slot2;
                var4 = 22;
                var1 = var16[var4];
                var2 = var5.bind(var3)(var1);
                var1 = 23;
                var1 = var16[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.NOTIFICATIONS;
                var1 = var2.bind(var3)(var1);
                var7 = var1.analyticsLocations;
                var6 = _closure1_slot3;
                var5 = var6.useLayoutEffect;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
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
                    var1 = _closure1_slot16;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = true;
                    return var0;
                };
                var0 = new Array(0);
                var2 = var2.bind(var5)(var1, var0);
                var13 = _closure1_slot0;
                var0 = 25;
                var0 = var16[var0];
                var1 = var13.bind(var3)(var0);
                var0 = var1.useNavigatorBackPressHandler;
                var0 = var0.bind(var1)(var2);
                var2 = _closure1_slot7;
                var0 = 26;
                var0 = var16[var0];
                var0 = var13.bind(var3)(var0);
                var1 = var0.LayerScope;
                var0 = {};
                var5 = 1;
                var0.zIndex = var5;
                var6 = _closure1_slot7;
                var4 = var16[var4];
                var4 = var13.bind(var3)(var4);
                var5 = var4.AnalyticsLocationProvider;
                var4 = {};
                var4.value = var7;
                var9 = _closure1_slot8;
                var8 = _closure1_slot4;
                var7 = {};
                var14 = var10.container;
                var10 = new Array(2);
                var10[0] = var14;
                var10[1] = var12;
                var7.style = var10;
                var14 = _closure1_slot7;
                var12 = _closure1_slot12;
                var10 = {};
                var10.nestedInLaunchPad = var15;
                var10.inNestedNavigator = var17;
                var12 = var14.bind(var3)(var12, var10);
                var10 = new Array(3);
                var10[0] = var12;
                var14 = _closure1_slot7;
                var12 = 27;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.NotificationCenterForYou;
                var12 = {};
                var12.nestedInLaunchPad = var15;
                var12 = var14.bind(var3)(var13, var12);
                var10[1] = var12;
                var11 = _closure1_slot13;
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
    var _closure1_slot17 = var5;
    var3 = function arg0() {
        _fun103745: for (var _fun103745_ip = 0;;) switch (_fun103745_ip) {
            case 0:
                var11 = arg0;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 29;
                var1 = var10[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var9 = var1.bind(var3)();
                var1 = 30;
                var1 = var10[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var5 = var1.top;
                var _closure2_slot0 = var5;
                var1 = 10;
                var1 = var10[var1];
                var1 = var2.bind(var3)(var1);
                var6 = var1.bind(var3)();
                var _closure2_slot1 = var6;
                var1 = _closure1_slot9;
                var7 = var1.bind(var3)();
                var _closure2_slot2 = var7;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    _fun103746: for (var _fun103746_ip = 0;;) switch (_fun103746_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            if (var0) {
                                _fun103746_ip = 22;
                                continue _fun103746
                            }
                        case 14:
                            var0 = var1.containerOuter;
                            _fun103746_ip = 54;
                            continue _fun103746;
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
                var0 = 31;
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
                var5 = _closure1_slot14;
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
                var9 = _closure1_slot17;
                var8 = {};
                var16 = var8;
                var15 = var11;
                var12 = copyDataProperties(var16, var15);
                var11 = var11.route;
                var13 = null;
                var14 = var13 == var11;
                var12 = undefined;
                if (var14) {
                    _fun103745_ip = 279;
                    continue _fun103745
                }
            case 258:
                var11 = var11.params;
                var13 = var13 == var11;
                var12 = undefined;
                if (var13) {
                    _fun103745_ip = 279;
                    continue _fun103745
                }
            case 273:
                var12 = var11.inNestedNavigator;
            case 279:
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
    var0 = global;
    var12 = var0.Object;
    var9 = var12.defineProperty;
    var6 = {};
    var10 = true;
    var6.value = var10;
    var0 = '__esModule';
    var0 = var9.bind(var12)(var2, var0, var6);
    var0 = 0;
    var9 = var8[var0];
    var6 = arg3;
    var0 = undefined;
    var13 = var6.bind(var0)(var9);
    var _closure1_slot3 = var13;
    var17 = 1;
    var6 = var8[var17];
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
    var14 = var7.bind(var0)(var6);
    var12 = var14.createStyles;
    var6 = {};
    var15 = {};
    var15.flex = var17;
    var6.containerOuter = var15;
    var15 = {};
    var16 = 6;
    var18 = var8[var16];
    var18 = var11.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOWEST;
    var15.backgroundColor = var18;
    var18 = var8[var16];
    var18 = var11.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var15.paddingHorizontal = var18;
    var15.flex = var17;
    var6.containerOuterTablet = var15;
    var15 = {};
    var18 = var8[var16];
    var18 = var11.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOW;
    var15.backgroundColor = var18;
    var15.flexGrow = var17;
    var6.container = var15;
    var17 = 'center';
    var15 = {
        'height': 56,
        'marginHorizontal': 16,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.headerTitle = var15;
    var15 = {
        'flexDirection': 'row',
        'gap': 12
    };
    var6.actionButtons = var15;
    var15 = {};
    var18 = var8[var16];
    var18 = var11.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_16;
    var15.marginRight = var18;
    var18 = var8[var16];
    var18 = var11.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_32;
    var15.height = var18;
    var18 = var8[var16];
    var18 = var11.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_32;
    var15.width = var18;
    var15.alignItems = var17;
    var15.justifyContent = var17;
    var17 = var8[var16];
    var17 = var11.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var15.borderRadius = var17;
    var6.headerClose = var15;
    var15 = {
        'flex': 1,
        'marginTop': 2
    };
    var6.headerText = var15;
    var15 = {
        'left': 0,
        'bottom': 0,
        'height': 1,
        'width': '100%',
        'position': 'absolute'
    };
    var16 = var8[var16];
    var16 = var11.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var15.backgroundColor = var16;
    var6.headerBorder = var15;
    var6 = var12.bind(var14)(var6);
    var _closure1_slot9 = var6;
    var6 = 8;
    var6 = var8[var6];
    var12 = var11.bind(var0)(var6);
    var6 = {};
    var6 = var9.bind(var0)(var12, var6);
    var _closure1_slot10 = var6;
    var6 = 9;
    var6 = var8[var6];
    var12 = var11.bind(var0)(var6);
    var6 = {};
    var6 = var9.bind(var0)(var12, var6);
    var _closure1_slot11 = var6;
    var12 = var13.memo;
    var6 = function arg0() {
        _fun103747: for (var _fun103747_ip = 0;;) switch (_fun103747_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.nestedInLaunchPad;
                var19 = var1.inNestedNavigator;
                var1 = _closure1_slot9;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var13 = var1.bind(var3)();
                var1 = 11;
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
                var1 = 12;
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
                var0 = 13;
                var0 = var9[var0];
                var2 = var6.bind(var3)(var0);
                var1 = var2.useYouBarEnabled;
                var0 = 'Notifications';
                var20 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = _closure1_slot7;
                var4 = 14;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.SafeAreaPaddingView;
                var4 = {};
                var9 = !var10;
                if (!var9) {
                    _fun103747_ip = 235;
                    continue _fun103747
                }
            case 232:
                var9 = !var13;
            case 235:
                var4.top = var9;
                var9 = null;
                if (var10) {
                    _fun103747_ip = 774;
                    continue _fun103747
                }
            case 247:
                var12 = _closure1_slot8;
                var11 = _closure1_slot4;
                var10 = {};
                var14 = var8.headerTitle;
                var10.style = var14;
                if (var13) {
                    _fun103747_ip = 278;
                    continue _fun103747
                }
            case 270:
                var14 = null;
                if (!var19) {
                    _fun103747_ip = 544;
                    continue _fun103747
                }
            case 278:
                var16 = _closure1_slot7;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var13 = 15;
                var13 = var27[var13];
                var13 = var26.bind(var3)(var13);
                var15 = var13.PressableOpacity;
                var13 = {};
                var23 = var8.headerClose;
                var13.style = var23;
                var23 = 16;
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
                var23 = _closure1_slot16;
                var13.onPress = var23;
                if (var19) {
                    _fun103747_ip = 453;
                    continue _fun103747
                }
            case 382:
                var24 = _closure1_slot7;
                var23 = _closure1_slot0;
                var27 = _closure1_slot2;
                var19 = 18;
                var19 = var27[var19];
                var19 = var23.bind(var3)(var19);
                var23 = var19.XSmallIcon;
                var19 = {};
                var26 = _closure1_slot1;
                var25 = 6;
                var25 = var27[var25];
                var25 = var26.bind(var3)(var25);
                var25 = var25.colors;
                var25 = var25.INTERACTIVE_TEXT_DEFAULT;
                var19.color = var25;
                var19 = var24.bind(var3)(var23, var19);
                _fun103747_ip = 534;
                continue _fun103747;
            case 453:
                if (var20) {
                    _fun103747_ip = 527;
                    continue _fun103747
                }
            case 456:
                var24 = _closure1_slot7;
                var23 = _closure1_slot0;
                var27 = _closure1_slot2;
                var20 = 17;
                var20 = var27[var20];
                var20 = var23.bind(var3)(var20);
                var23 = var20.ArrowLargeLeftIcon;
                var20 = {};
                var26 = _closure1_slot1;
                var25 = 6;
                var25 = var27[var25];
                var25 = var26.bind(var3)(var25);
                var25 = var25.colors;
                var25 = var25.INTERACTIVE_TEXT_DEFAULT;
                var20.color = var25;
                var20 = var24.bind(var3)(var23, var20);
                _fun103747_ip = 531;
                continue _fun103747;
            case 527:
                var20 = _closure1_slot10;
            case 531:
                var19 = var20;
            case 534:
                var13.children = var19;
                var14 = var16.bind(var3)(var15, var13);
            case 544:
                var13 = new Array(3);
                var13[0] = var14;
                var16 = _closure1_slot7;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var14 = 19;
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
                var19 = 16;
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
                    _fun103747_ip = 734;
                    continue _fun103747
                }
            case 693:
                var20 = _closure1_slot7;
                var19 = _closure1_slot1;
                var23 = _closure1_slot2;
                var17 = 20;
                var17 = var23[var17];
                var19 = var19.bind(var3)(var17);
                var17 = {};
                var17.ref = var22;
                var17.onOpen = var21;
                var18 = var20.bind(var3)(var19, var17);
            case 734:
                var17 = new Array(2);
                var17[0] = var18;
                var18 = _closure1_slot11;
                var17[1] = var18;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[2] = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 774:
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
    var6 = var12.bind(var13)(var6);
    var _closure1_slot12 = var6;
    var6 = 21;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var12 = var6.TTIFirstContentfulPaint;
    var6 = {};
    var13 = 'notifications';
    var6.label = var13;
    var6 = var9.bind(var0)(var12, var6);
    var _closure1_slot13 = var6;
    var6 = 28;
    var6 = var8[var6];
    var11 = var11.bind(var0)(var6);
    var6 = {};
    var6.absolute = var10;
    var6 = var9.bind(var0)(var11, var6);
    var _closure1_slot14 = var6;
    var6 = {};
    var6.inNestedNavigator = var10;
    var6 = var9.bind(var0)(var3, var6);
    var _closure1_slot15 = var6;
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
        var0 = _closure1_slot15;
        return var0;
    };
    var2.ThemedNotificationsModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7040, 1369, 33, 1297, 671, 3917, 13492, 13522, 7259, 9109, 13527, 5251, 4754, 4880, 1234, 5837, 5234, 3938, 13528, 9570, 5785, 5639, 4370, 5839, 5229, 13529, 7690, 3243, 1568, 13520, 3161, 2]);