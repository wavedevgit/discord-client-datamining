// modules/user_settings/native/core/SettingsNavigator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.title;
        var4 = _closure1_slot10;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 11;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {
            'lineClamp': 1,
            'variant': 'heading-lg/bold',
            'color': 'mobile-text-heading-primary',
            'maxFontSizeMultiplier': 2
        };
        var1.children = var5;
        var4 = var4.bind(var3)(var2, var1);
        var1 = _closure1_slot13;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot5;
        var0 = {
            'accessible': true,
            'accessibilityRole': 'header'
        };
        var5 = var5.headerContainer;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 1;
    var6 = var5[var14];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.AnalyticsPages;
    var _closure1_slot8 = var8;
    var3 = var3.UserSettingsSections;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.MIN_HEADER_HEIGHT;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot10 = var8;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var3 = var9.createNativeStackNavigator;
    var3 = var3.bind(var9)();
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var9 = var11.createStyles;
    var3 = {};
    var12 = {};
    var12.flex = var14;
    var14 = 10;
    var15 = var5[var14];
    var15 = var7.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWER;
    var12.backgroundColor = var15;
    var3.statusBarSpacer = var12;
    var12 = {};
    var15 = '100%';
    var12.width = var15;
    var14 = var5[var14];
    var14 = var7.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var12.paddingHorizontal = var14;
    var3.headerContainer = var12;
    var12 = {};
    var14 = -8;
    var12.marginLeft = var14;
    var3.backButton = var12;
    var12 = {};
    var12.height = var13;
    var3.backButtoniOS = var12;
    var3 = var9.bind(var11)(var3);
    var _closure1_slot13 = var3;
    var3 = 12;
    var3 = var5[var3];
    var9 = var7.bind(var0)(var3);
    var3 = {};
    var3.includeNotificationsCount = var10;
    var3 = var8.bind(var0)(var9, var3);
    var _closure1_slot14 = var3;
    var3 = 13;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var3 = {};
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        _fun104977: for (var _fun104977_ip = 0;;) switch (_fun104977_ip) {
            case 0:
                var0 = _closure1_slot13;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var _closure2_slot0 = var8;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 14;
                var0 = var0[var1];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useRoute;
                var2 = var0.bind(var2)();
                var4 = var2.params;
                var0 = null;
                var5 = var0 == var4;
                var10 = undefined;
                if (var5) {
                    _fun104977_ip = 72;
                    continue _fun104977
                }
            case 66:
                var10 = var4.screen;
            case 72:
                if (!(var0 == var10)) {
                    _fun104977_ip = 86;
                    continue _fun104977
                }
            case 76:
                var4 = _closure1_slot9;
                var10 = var4.OVERVIEW;
            case 86:
                var _closure2_slot1 = var10;
                var5 = var2.params;
                var6 = var0 == var5;
                var4 = undefined;
                if (var6) {
                    _fun104977_ip = 111;
                    continue _fun104977
                }
            case 105:
                var4 = var5.params;
            case 111:
                var _closure2_slot2 = var4;
                var4 = var2.params;
                var5 = var0 == var4;
                var2 = undefined;
                if (var5) {
                    _fun104977_ip = 136;
                    continue _fun104977
                }
            case 130:
                var2 = var4.onClose;
            case 136:
                var4 = var0 != var2;
                var0 = undefined;
                if (!var4) {
                    _fun104977_ip = 148;
                    continue _fun104977
                }
            case 145:
                var0 = var2;
            case 148:
                var _closure2_slot3 = var0;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var2 = 15;
                var2 = var23[var2];
                var5 = var22.bind(var3)(var2);
                var4 = var5.useYouBarEnabled;
                var2 = 'NativeSettings';
                var19 = var4.bind(var5)(var2);
                var _closure2_slot4 = var19;
                var1 = var23[var1];
                var2 = var22.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot5 = var1;
                var1 = 16;
                var1 = var23[var1];
                var4 = var22.bind(var3)(var1);
                var2 = var4.useCommonTriggerPoint;
                var1 = 17;
                var1 = var23[var1];
                var1 = var22.bind(var3)(var1);
                var1 = var1.OpenUserSettingsTriggerPoint;
                var1 = var2.bind(var4)(var1);
                var6 = _closure1_slot4;
                var4 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function() { // Environment: var11
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackUserSettingsPaneViewed;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var1.destinationPane = var4;
                    var4 = {};
                    var5 = _closure1_slot8;
                    var5 = var5.USER_SETTINGS;
                    var4.page = var5;
                    var1.source = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var4.bind(var6)(var1, var2);
                var2 = var6.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var11
                    var0 = function() { // Environment: var0
                        _fun104980: for (var _fun104980_ip = 0;;) switch (_fun104980_ip) {
                            case 0:
                                var2 = _closure2_slot3;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun104980_ip = 23;
                                    continue _fun104980
                                }
                            case 13:
                                var1 = _closure2_slot3;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var6)(var0, var1);
                var0 = 19;
                var0 = var23[var0];
                var4 = var22.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var11
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var2 = var6.useState;
                var1 = false;
                var4 = var2.bind(var6)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot6 = var1;
                var2 = var6.useLayoutEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var11
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var6)(var0, var1);
                var7 = _closure1_slot1;
                var0 = 20;
                var1 = var23[var0];
                var2 = var7.bind(var3)(var1);
                var1 = 21;
                var1 = var23[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.USER_SETTINGS;
                var1 = var2.bind(var3)(var1);
                var4 = var1.analyticsLocations;
                var5 = var6.useMemo;
                var2 = function() { // Environment: var11
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getSettingScreens;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var13 = var5.bind(var6)(var2, var1);
                var5 = var6.useLayoutEffect;
                var2 = function() { // Environment: var11
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
                var1 = 24;
                var1 = var23[var1];
                var2 = var22.bind(var3)(var1);
                var1 = var2.useGlobalStatusIndicatorState;
                var9 = var1.bind(var2)();
                var5 = var6.useEffect;
                var2 = function() { // Environment: var11
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 25;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.validate;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var1 = var5.bind(var6)(var2, var1);
                var1 = 26;
                var1 = var23[var1];
                var2 = var22.bind(var3)(var1);
                var1 = var2.useAccessibilityNativeStackOptions;
                var18 = var1.bind(var2)();
                var1 = 27;
                var1 = var23[var1];
                var2 = var22.bind(var3)(var1);
                var1 = var2.useAccessibilityNativeStackFocusTracking;
                var1 = var1.bind(var2)();
                var17 = var1.beforeRemove;
                var14 = var1.transitionStart;
                var1 = 28;
                var1 = var23[var1];
                var5 = var22.bind(var3)(var1);
                var2 = var5.useToken;
                var1 = 10;
                var1 = var23[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.BACKGROUND_BASE_LOWER;
                var1 = var2.bind(var5)(var1);
                var _closure2_slot7 = var1;
                var5 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var19;
                var1 = function(arg0) { // Environment: var11
                    _fun104987: for (var _fun104987_ip = 0;;) switch (_fun104987_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 29;
                            var0 = var3[var0];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = {};
                            var0.navigation = var5;
                            var0 = var4.bind(var3)(var2, var0);
                            var _closure3_slot1 = var0;
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun104987_ip = 74;
                                continue _fun104987
                            }
                        case 65:
                            var0 = function() { // Environment: var1
                                var0 = _closure3_slot1;
                                return var0;
                            };
                            _fun104987_ip = 81;
                            continue _fun104987;
                        case 74:
                            var0 = function() { // Environment: var1
                                _fun104988: for (var _fun104988_ip = 0;;) switch (_fun104988_ip) {
                                    case 0:
                                        var3 = _closure1_slot10;
                                        var2 = _closure1_slot5;
                                        var1 = {};
                                        var0 = _closure2_slot0;
                                        var0 = var0.backButton;
                                        var4 = new Array(2);
                                        var4[0] = var0;
                                        var8 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var0 = 30;
                                        var5 = var5[var0];
                                        var0 = undefined;
                                        var8 = var8.bind(var0)(var5);
                                        var5 = var8.isAndroid;
                                        var8 = var5.bind(var8)();
                                        var5 = null;
                                        if (var8) {
                                            _fun104988_ip = 81;
                                            continue _fun104988
                                        }
                                    case 71:
                                        var6 = _closure2_slot0;
                                        var5 = var6.backButtoniOS;
                                    case 81:
                                        var4[1] = var5;
                                        var1.style = var4;
                                        var4 = false;
                                        var1.collapsable = var4;
                                        var6 = _closure1_slot10;
                                        var12 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var4 = 31;
                                        var4 = var11[var4];
                                        var4 = var12.bind(var0)(var4);
                                        var5 = var4.PressableOpacity;
                                        var4 = {};
                                        var8 = function() {
                                            var1 = _closure3_slot0;
                                            var0 = var1.goBack;
                                            var0 = var0.bind(var1)();
                                            return var0;
                                        };
                                        var4.onPress = var8;
                                        var8 = 32;
                                        var9 = var11[var8];
                                        var9 = var12.bind(var0)(var9);
                                        var10 = var9.intl;
                                        var9 = var10.string;
                                        var8 = var11[var8];
                                        var8 = var12.bind(var0)(var8);
                                        var8 = var8.t;
                                        var8 = var8["13/7kX"];
                                        var8 = var9.bind(var10)(var8);
                                        var4.accessibilityLabel = var8;
                                        var8 = {};
                                        var10 = _closure1_slot1;
                                        var9 = 10;
                                        var9 = var11[var9];
                                        var9 = var10.bind(var0)(var9);
                                        var9 = var9.radii;
                                        var9 = var9.round;
                                        var8.borderRadius = var9;
                                        var4.style = var8;
                                        var7 = _closure1_slot14;
                                        var4.children = var7;
                                        var4 = var6.bind(var0)(var5, var4);
                                        var1.children = var4;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                        case 81:
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var2);
                var _closure2_slot8 = var1;
                var5 = var6.useMemo;
                var2 = function() { // Environment: var11
                    var0 = {};
                    var1 = function arg0() {
                        _fun104992: for (var _fun104992_ip = 0;;) switch (_fun104992_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.data;
                                var1 = var0.closing;
                                var3 = _closure1_slot7;
                                var2 = var3.getState;
                                var3 = var2.bind(var3)();
                                var2 = var3.isActive;
                                var3 = var3.query;
                                if (!var1) {
                                    _fun104992_ip = 49;
                                    continue _fun104992
                                }
                            case 46:
                                var1 = var2;
                            case 49:
                                if (!var1) {
                                    _fun104992_ip = 60;
                                    continue _fun104992
                                }
                            case 52:
                                var2 = '';
                                var1 = var2 === var3;
                            case 60:
                                if (!var1) {
                                    _fun104992_ip = 87;
                                    continue _fun104992
                                }
                            case 63:
                                var2 = _closure1_slot7;
                                var1 = var2.setState;
                                var0 = {};
                                var3 = false;
                                var0.isActive = var3;
                                var0 = var1.bind(var2)(var0);
                            case 87:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.transitionEnd = var1;
                    return var0;
                };
                var1 = new Array(0);
                var15 = var5.bind(var6)(var2, var1);
                var5 = var6.useMemo;
                var2 = function() { // Environment: var11
                    var0 = {};
                    var1 = function arg0() {
                        _fun104994: for (var _fun104994_ip = 0;;) switch (_fun104994_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.data;
                                var0 = var0.closing;
                                if (!var0) {
                                    _fun104994_ip = 45;
                                    continue _fun104994
                                }
                            case 17:
                                var3 = _closure1_slot7;
                                var2 = var3.getField;
                                var1 = 'selected';
                                var2 = var2.bind(var3)(var1);
                                var1 = null;
                                var0 = var1 != var2;
                            case 45:
                                if (!var0) {
                                    _fun104994_ip = 75;
                                    continue _fun104994
                                }
                            case 48:
                                var2 = _closure1_slot7;
                                var1 = var2.setState;
                                var0 = {};
                                var3 = null;
                                var0.selected = var3;
                                var0 = var1.bind(var2)(var0);
                            case 75:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.transitionEnd = var1;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var5.bind(var6)(var2, var1);
                var _closure2_slot9 = var1;
                var1 = 33;
                var1 = var23[var1];
                var2 = var22.bind(var3)(var1);
                var1 = var2.useAutoSettingsSearchSessionAnalytics;
                var1 = var1.bind(var2)();
                var1 = 34;
                var1 = var23[var1];
                var5 = var22.bind(var3)(var1);
                var2 = var5.useIsUserSettingsScrollFixEnabled;
                var1 = {};
                var7 = 'SettingsNavigator';
                var1.location = var7;
                var1 = var2.bind(var5)(var1);
                var _closure2_slot10 = var1;
                var5 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var11
                    _fun104995: for (var _fun104995_ip = 0;;) switch (_fun104995_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            if (var0) {
                                _fun104995_ip = 21;
                                continue _fun104995
                            }
                        case 10:
                            var0 = {};
                            var1 = true;
                            var0.fullScreenGestureEnabled = var1;
                            _fun104995_ip = 23;
                            continue _fun104995;
                        case 21:
                            var0 = {};
                        case 23:
                            return var0;
                    }
                };
                var24 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot11;
                var0 = var23[var0];
                var0 = var22.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var5 = _closure1_slot15;
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var5 = 35;
                var5 = var23[var5];
                var5 = var22.bind(var3)(var5);
                var6 = var5.SafeAreaPaddingView;
                var5 = {};
                var9 = var9.isVisible;
                var5.top = var9;
                var8 = var8.statusBarSpacer;
                var5.style = var8;
                var8 = function arg0() {
                    _fun104996: for (var _fun104996_ip = 0;;) switch (_fun104996_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.actionName;
                            var0 = 'escape';
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun104996_ip = 43;
                                continue _fun104996
                            }
                        case 26:
                            var2 = _closure2_slot5;
                            var1 = var2.canGoBack;
                            var0 = var1.bind(var2)();
                        case 43:
                            if (!var0) {
                                _fun104996_ip = 63;
                                continue _fun104996
                            }
                        case 46:
                            var1 = _closure2_slot5;
                            var0 = var1.goBack;
                            var0 = var0.bind(var1)();
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onAccessibilityAction = var8;
                var9 = {};
                var8 = 'escape';
                var9.name = var8;
                var8 = 32;
                var12 = var23[var8];
                var12 = var22.bind(var3)(var12);
                var21 = var12.intl;
                var12 = var21.string;
                var8 = var23[var8];
                var8 = var22.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["13/7kX"];
                var8 = var12.bind(var21)(var8);
                var9.label = var8;
                var8 = new Array(1);
                var8[0] = var9;
                var5.accessibilityActions = var8;
                var8 = _closure1_slot12;
                var9 = var8.Navigator;
                var8 = {};
                var12 = 'settings-navigator';
                var8.id = var12;
                var12 = {};
                var25 = var12;
                var20 = copyDataProperties(var25, var24);
                if (var19) {
                    _fun104977_ip = 1056;
                    continue _fun104977
                }
            case 1028:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var19 = 36;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.renderGenericTitle;
                _fun104977_ip = 1063;
                continue _fun104977;
            case 1056:
                var20 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var0 = var0.children;
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var1.title = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
            case 1063:
                var19 = 'headerTitle';
                var12[var19] = var20;
                var20 = 'center';
                var19 = 'headerTitleAlign';
                var12[var19] = var20;
                var25 = var12;
                var24 = var18;
                var18 = copyDataProperties(var25, var24);
                var8.screenOptions = var12;
                var12 = {};
                var12.beforeRemove = var17;
                var12.transitionStart = var14;
                var8.screenListeners = var12;
                var8.initialRouteName = var10;
                var14 = _closure1_slot10;
                var10 = _closure1_slot12;
                var12 = var10.Screen;
                var10 = {};
                var16 = _closure1_slot9;
                var16 = var16.OVERVIEW;
                var10.name = var16;
                var16 = function arg0() {
                    var0 = arg0;
                    var4 = var0.navigation;
                    var0 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 32;
                    var2 = var7[var1];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var5 = var2.intl;
                    var2 = var5.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var3)(var1);
                    var1 = var1.t;
                    var1 = var1["3D5yo/"];
                    var1 = var2.bind(var5)(var1);
                    var0.title = var1;
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var3)(var4);
                    var0.headerLeft = var1;
                    var1 = false;
                    var0.headerBackVisible = var1;
                    var1 = {};
                    var2 = _closure2_slot7;
                    var1.backgroundColor = var2;
                    var0.contentStyle = var1;
                    return var0;
                };
                var10.options = var16;
                var10.listeners = var15;
                var15 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 37;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.default;
                    return var0;
                };
                var10.getComponent = var15;
                var12 = var14.bind(var3)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var12 = var13.map;
                var11 = function(arg0) { // Environment: var11
                    _fun105000: for (var _fun105000_ip = 0;;) switch (_fun105000_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var6 = var2().value;
                            var1 = var0;
                            var4 = undefined;
                            var1 = var1 === var4;
                            var3 = undefined;
                            if (var1) {
                                _fun105000_ip = 29;
                                continue _fun105000
                            }
                        case 26:
                            var3 = var6;
                        case 29:
                            var _closure3_slot0 = var3;
                            var6 = undefined;
                            if (var1) {
                                _fun105000_ip = 63;
                                continue _fun105000
                            }
                        case 38:
                            var7 = var2().value;
                            var2 = var0;
                            var2 = var2 === var4;
                            var6 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun105000_ip = 63;
                                continue _fun105000
                            }
                        case 57:
                            var6 = var7;
                            var1 = var2;
                        case 63:
                            var _closure3_slot1 = var6;
                            if (var1) {
                                _fun105000_ip = 73;
                                continue _fun105000
                            }
                        case 70:
                            var0.return();
                        case 73:
                            var2 = _closure1_slot10;
                            var0 = _closure1_slot12;
                            var1 = var0.Screen;
                            var0 = {};
                            var7 = var6.route;
                            var0.name = var7;
                            var7 = function arg0() {
                                _fun105001: for (var _fun105001_ip = 0;;) switch (_fun105001_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = var0.navigation;
                                        var0 = {};
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 22;
                                        var1 = var2[var1];
                                        var2 = undefined;
                                        var6 = var3.bind(var2)(var1);
                                        var5 = var6.getSettingTitle;
                                        var3 = _closure3_slot0;
                                        var3 = var5.bind(var6)(var3);
                                        var0.title = var3;
                                        var3 = _closure2_slot8;
                                        var3 = var3.bind(var2)(var4);
                                        var0.headerLeft = var3;
                                        var3 = false;
                                        var0.headerBackVisible = var3;
                                        var4 = {};
                                        var5 = _closure2_slot7;
                                        var4.backgroundColor = var5;
                                        var0.contentStyle = var4;
                                        var0.headerBackTitleVisible = var3;
                                        var1 = _closure3_slot1;
                                        var3 = var1.navigationOptions;
                                        var1 = null;
                                        var4 = var1 == var3;
                                        if (var4) {
                                            _fun105001_ip = 129;
                                            continue _fun105001
                                        }
                                    case 123:
                                        var2 = var3.headerShadowVisible;
                                    case 129:
                                        var1 = var1 == var2;
                                        if (var1) {
                                            _fun105001_ip = 139;
                                            continue _fun105001
                                        }
                                    case 136:
                                        var1 = var2;
                                    case 139:
                                        var0.headerShadowVisible = var1;
                                        return var0;
                                }
                            };
                            var0.options = var7;
                            var5 = function() {
                                var2 = _closure3_slot1;
                                var0 = var2.getComponent;
                                var0 = var0.bind(var2)();
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 38;
                                var2 = var4[var2];
                                var4 = undefined;
                                var3 = var3.bind(var4)(var2);
                                var2 = null;
                                var2 = var2 != var0;
                                var6 = _closure3_slot0;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var1 = '[Settings Navigator] Invalid component for setting: ';
                                var1 = var5.bind(var1)(var6);
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var0.getComponent = var5;
                            var8 = _closure2_slot1;
                            var7 = var6.route;
                            var6 = undefined;
                            if (!(var8 === var7)) {
                                _fun105000_ip = 148;
                                continue _fun105000
                            }
                        case 144:
                            var6 = _closure2_slot2;
                        case 148:
                            var0.initialParams = var6;
                            var5 = _closure2_slot9;
                            var0.listeners = var5;
                            var0 = var2.bind(var4)(var1, var0, var3);
                            return var0;
                    }
                };
                var11 = var12.bind(var13)(var11);
                var10[1] = var11;
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 39;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/core/SettingsNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1687, 10123, 660, 7705, 33, 8681, 1297, 671, 3938, 13492, 13651, 1470, 5251, 10483, 13652, 7238, 632, 5785, 5639, 10126, 4370, 11837, 11359, 5834, 12253, 3153, 7716, 478, 4880, 1234, 13653, 13654, 4754, 7704, 13655, 44, 2]);