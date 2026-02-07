// modules/icymi/native/ICYMI.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var3 = _closure1_slot14;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 14;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {
            'accessibilityLabel': 'button',
            'variant': 'tertiary',
            'size': 'sm'
        };
        var7 = 'sm';
        var6 = _closure1_slot14;
        var4 = 15;
        var4 = var8[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.FiltersHorizontalIcon;
        var4 = {};
        var4.size = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.icon = var4;
        var4 = function() {
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 16;
            var5 = var1[var3];
            var0 = undefined;
            var8 = var4.bind(var0)(var5);
            var7 = var8.itemInteracted;
            var6 = 'filters_button';
            var5 = 'press_info_button';
            var5 = var7.bind(var8)(var6, var6, var5);
            var3 = var1[var3];
            var6 = var4.bind(var0)(var3);
            var5 = var6.feedPageActioned;
            var3 = {};
            var7 = {
                'actionGestureType': 'press',
                'actionTargetElement': 'settings_button',
                'actionIntentType': 'open',
                'actionDestinationType': null
            };
            var3.actionParameters = var7;
            var3 = var5.bind(var6)(var3);
            var3 = 17;
            var3 = var1[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot0;
            var2 = 19;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 18;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var0)(var2, var1);
            var2 = 'ICYMISettingsActionSheet';
            var1 = {};
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var3 = _closure1_slot14;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 14;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {
            'accessibilityLabel': 'button',
            'variant': 'tertiary',
            'size': 'sm'
        };
        var7 = 'sm';
        var6 = _closure1_slot14;
        var4 = 20;
        var4 = var8[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.CircleInformationIcon;
        var4 = {};
        var4.size = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.icon = var4;
        var4 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 16;
            var5 = var3[var2];
            var0 = undefined;
            var8 = var4.bind(var0)(var5);
            var7 = var8.itemInteracted;
            var6 = 'info_button';
            var5 = 'press_info_button';
            var5 = var7.bind(var8)(var6, var6, var5);
            var2 = var3[var2];
            var5 = var4.bind(var0)(var2);
            var4 = var5.feedPageActioned;
            var2 = {};
            var6 = {
                'actionGestureType': 'press',
                'actionTargetElement': 'info_button',
                'actionIntentType': 'open',
                'actionDestinationType': null
            };
            var2.actionParameters = var6;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot0;
            var1 = 21;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.pushICYMIInfoModal;
            var1 = {};
            var4 = true;
            var1.extendedOnboarding = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var1 = _closure1_slot18;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var6 = _closure1_slot4;
        var4 = var6.useMemo;
        var2 = function() { // Environment: var1
            var3 = _closure1_slot16;
            var2 = _closure1_slot15;
            var1 = {};
            var9 = _closure1_slot14;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 22;
            var4 = var12[var5];
            var0 = undefined;
            var4 = var11.bind(var0)(var4);
            var7 = var4.Text;
            var4 = {
                'color': 'mobile-text-heading-primary',
                'variant': 'heading-lg/bold',
                'maxFontSizeMultiplier': 1.75,
                'accessibilityRole': 'header'
            };
            var8 = 23;
            var10 = var12[var8];
            var10 = var11.bind(var0)(var10);
            var14 = var10.intl;
            var13 = var14.string;
            var10 = var12[var8];
            var10 = var11.bind(var0)(var10);
            var10 = var10.t;
            var10 = var10.SY4sdZ;
            var10 = var13.bind(var14)(var10);
            var4.children = var10;
            var7 = var9.bind(var0)(var7, var4);
            var4 = new Array(2);
            var4[0] = var7;
            var7 = _closure1_slot14;
            var5 = var12[var5];
            var5 = var11.bind(var0)(var5);
            var6 = var5.Text;
            var5 = {
                'color': 'text-brand',
                'variant': 'text-xs/bold'
            };
            var9 = {};
            var10 = 4;
            var9.marginTop = var10;
            var5.style = var9;
            var9 = var12[var8];
            var9 = var11.bind(var0)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var0)(var8);
            var8 = var8.t;
            var8 = var8.Ac2OZA;
            var8 = var9.bind(var10)(var8);
            var5.children = var8;
            var5 = var7.bind(var0)(var6, var5);
            var4[1] = var5;
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1 = new Array(0);
        var4 = var4.bind(var6)(var2, var1);
        var2 = _closure1_slot14;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var5.headerText;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 32;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.hydrateNextPage;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun104075: for (var _fun104075_ip = 0;;) switch (_fun104075_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.inNestedNavigator;
                var0 = _closure1_slot18;
                var3 = undefined;
                var24 = var0.bind(var3)();
                var11 = _closure1_slot1;
                var31 = _closure1_slot2;
                var0 = 33;
                var0 = var31[var0];
                var0 = var11.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var4 = var0.height;
                var33 = var0.width;
                var _closure2_slot0 = var33;
                var0 = 34;
                var0 = var31[var0];
                var0 = var11.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var2 = var0.top;
                var30 = _closure1_slot0;
                var6 = 35;
                var0 = var31[var6];
                var1 = var30.bind(var3)(var0);
                var0 = var1.useIsFocused;
                var15 = var0.bind(var1)();
                var _closure2_slot1 = var15;
                var5 = _closure1_slot4;
                var1 = var5.useLayoutEffect;
                var0 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackAppUIViewed;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = var1.bind(var5)(var0);
                var0 = 37;
                var1 = var31[var0];
                var10 = var30.bind(var3)(var1);
                var8 = var10.useStateFromStores;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var13
                    var0 = _closure1_slot7;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var5 = var8.bind(var10)(var5, var1);
                var _closure2_slot2 = var5;
                var1 = var31[var0];
                var14 = var30.bind(var3)(var1);
                var12 = var14.useStateFromStores;
                var1 = _closure1_slot11;
                var10 = new Array(1);
                var10[0] = var1;
                var8 = function() { // Environment: var13
                    var1 = _closure1_slot11;
                    var0 = var1.notificationItem;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var12 = var12.bind(var14)(var10, var8, var1);
                var1 = 38;
                var1 = var31[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var14 = var1.showDot;
                var16 = _closure1_slot4;
                var10 = var16.useEffect;
                var8 = new Array(1);
                var8[0] = var15;
                var1 = function() { // Environment: var13
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setTabFocused;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var10.bind(var16)(var1, var8);
                var1 = 39;
                var1 = var31[var1];
                var10 = var30.bind(var3)(var1);
                var8 = var10.useSharedICYMILogic;
                var1 = {};
                var1.showDot = var14;
                var1.notificationItem = var12;
                var8 = var8.bind(var10)(var1);
                var21 = var8.data;
                var _closure2_slot3 = var21;
                var14 = var8.loading;
                var10 = var8.version;
                var1 = var8.visibleItemIds;
                var _closure2_slot4 = var1;
                var29 = var8.endVisible;
                var _closure2_slot5 = var29;
                var25 = var8.isRefreshing;
                var28 = var8.handleOnRefresh;
                var _closure2_slot6 = var28;
                var17 = var8.stickyHeaderIndices;
                var16 = var8.viewabilityConfigCallbackPairs;
                var8 = 40;
                var8 = var31[var8];
                var12 = var30.bind(var3)(var8);
                var8 = var12.useICYMIEmptyLoadingAnalytics;
                var8 = var8.bind(var12)(var14, var15);
                var8 = 41;
                var8 = var31[var8];
                var15 = var30.bind(var3)(var8);
                var12 = var15.useGetDismissibleContent;
                var8 = 42;
                var8 = var31[var8];
                var8 = var30.bind(var3)(var8);
                var8 = var8.DismissibleContent;
                var18 = var8.ICYMI_ALPHA_UPSELL;
                var8 = new Array(1);
                var8[0] = var18;
                var15 = var12.bind(var15)(var8);
                var12 = _closure1_slot3;
                var8 = 2;
                var8 = var12.bind(var3)(var15, var8);
                var26 = 0;
                var22 = var8[var26];
                var _closure2_slot7 = var22;
                var15 = 1;
                var20 = var8[var15];
                var _closure2_slot8 = var20;
                var8 = var31[var0];
                var19 = var30.bind(var3)(var8);
                var18 = var19.useStateFromStores;
                var8 = _closure1_slot9;
                var12 = new Array(1);
                var12[0] = var8;
                var8 = function() { // Environment: var13
                    var1 = _closure1_slot9;
                    var0 = var1.getGuildCount;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var18.bind(var19)(var12, var8);
                var _closure2_slot9 = var8;
                var19 = _closure1_slot4;
                var18 = var19.useEffect;
                var12 = new Array(3);
                var12[0] = var22;
                var12[1] = var20;
                var12[2] = var8;
                var8 = function() { // Environment: var13
                    _fun104081: for (var _fun104081_ip = 0;;) switch (_fun104081_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun104081_ip = 87;
                                continue _fun104081
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 21;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.pushICYMIInfoModal;
                            var3 = {};
                            var7 = _closure2_slot9;
                            var6 = _closure1_slot12;
                            var6 = var7 <= var6;
                            var3.extendedOnboarding = var6;
                            var3 = var4.bind(var5)(var3);
                            var1 = _closure2_slot8;
                            var0 = _closure1_slot13;
                            var0 = var0.USER_DISMISS;
                            var0 = var1.bind(var2)(var0);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var18.bind(var19)(var8, var12);
                var19 = _closure1_slot4;
                var18 = var19.useEffect;
                var12 = new Array(1);
                var12[0] = var29;
                var8 = function() { // Environment: var13
                    _fun104082: for (var _fun104082_ip = 0;;) switch (_fun104082_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            if (!var0) {
                                _fun104082_ip = 29;
                                continue _fun104082
                            }
                        case 10:
                            var2 = _closure1_slot11;
                            var1 = var2.hasOpenedEnoughTimes;
                            var0 = var1.bind(var2)();
                        case 29:
                            if (!var0) {
                                _fun104082_ip = 112;
                                continue _fun104082
                            }
                        case 32:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var2 = 17;
                            var2 = var0[var2];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.openLazy;
                            var2 = _closure1_slot0;
                            var1 = 19;
                            var1 = var0[var1];
                            var2 = var2.bind(var5)(var1);
                            var1 = 43;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var5)(var1, var0);
                            var1 = 'ICYMIFeedbackSheet';
                            var0 = {};
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 112:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var18.bind(var19)(var8, var12);
                var18 = _closure1_slot4;
                var12 = var18.useRef;
                var8 = null;
                var23 = var12.bind(var18)(var8);
                var _closure2_slot10 = var23;
                var18 = _closure1_slot4;
                var12 = var18.useRef;
                var8 = {};
                var19 = function() {
                    _fun104083: for (var _fun104083_ip = 0;;) switch (_fun104083_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun104083_ip = 50;
                                continue _fun104083
                            }
                        case 18:
                            var1 = var2.scrollToOffset;
                            var0 = {};
                            var4 = 0;
                            var0.offset = var4;
                            var3 = _closure2_slot2;
                            var3 = !var3;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.scrollToTop = var19;
                var12 = var12.bind(var18)(var8);
                var _closure2_slot11 = var12;
                var6 = var31[var6];
                var8 = var30.bind(var3)(var6);
                var6 = var8.useScrollToTop;
                var6 = var6.bind(var8)(var12);
                var6 = var31[var0];
                var18 = var30.bind(var3)(var6);
                var12 = var18.useStateFromStores;
                var6 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var13
                    var1 = _closure1_slot10;
                    var0 = var1.getDoubleTapBehavior;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var12.bind(var18)(var8, var6);
                var _closure2_slot12 = var19;
                var6 = 44;
                var6 = var31[var6];
                var8 = var30.bind(var3)(var6);
                var6 = var8.useNavigation;
                var6 = var6.bind(var8)();
                var18 = _closure1_slot4;
                var12 = var18.useEffect;
                var8 = new Array(3);
                var8[0] = var19;
                var8[1] = var6;
                var8[2] = var5;
                var6 = function() { // Environment: var13
                    _fun104085: for (var _fun104085_ip = 0;;) switch (_fun104085_ip) {
                        case 0:
                            var4 = _closure2_slot12;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 45;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.GravityICYMIDoubleTapBehavior;
                            var2 = var2.DEFAULT;
                            if (!(var4 !== var2)) {
                                _fun104085_ip = 76;
                                continue _fun104085
                            }
                        case 50:
                            var4 = _closure2_slot11;
                            var2 = {};
                            var5 = function() {
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 46;
                                var3 = var1[var0];
                                var0 = undefined;
                                var6 = var4.bind(var0)(var3);
                                var5 = var6.pushLazy;
                                var3 = _closure1_slot0;
                                var2 = 19;
                                var2 = var1[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = 47;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var10 = var3.bind(var0)(var2, var1);
                                var3 = {};
                                var1 = 'modal';
                                var3.presentation = var1;
                                var9 = {};
                                var8 = 'for-later-modal';
                                var11 = var6;
                                var7 = var3;
                                var1 = var11[var5](var10, var9, var8, var7, var6);
                                return var0;
                            };
                            var2.scrollToTop = var5;
                            var4.current = var2;
                            _fun104085_ip = 100;
                            continue _fun104085;
                        case 76:
                            var2 = _closure2_slot11;
                            var1 = {};
                            var3 = function() {
                                _fun104086: for (var _fun104086_ip = 0;;) switch (_fun104086_ip) {
                                    case 0:
                                        var0 = _closure2_slot10;
                                        var2 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun104086_ip = 50;
                                            continue _fun104086
                                        }
                                    case 18:
                                        var1 = var2.scrollToOffset;
                                        var0 = {};
                                        var4 = 0;
                                        var0.offset = var4;
                                        var3 = _closure2_slot2;
                                        var3 = !var3;
                                        var0.animated = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 50:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.scrollToTop = var3;
                            var2.current = var1;
                        case 100:
                            return var0;
                    }
                };
                var6 = var12.bind(var18)(var6, var8);
                var12 = _closure1_slot4;
                var8 = var12.useCallback;
                var6 = new Array(2);
                var6[0] = var23;
                var6[1] = var5;
                var5 = function() { // Environment: var13
                    _fun104088: for (var _fun104088_ip = 0;;) switch (_fun104088_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun104088_ip = 50;
                                continue _fun104088
                            }
                        case 18:
                            var1 = var2.scrollToOffset;
                            var0 = {};
                            var4 = 0;
                            var0.offset = var4;
                            var3 = _closure2_slot2;
                            var3 = !var3;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var8.bind(var12)(var5, var6);
                var _closure2_slot13 = var5;
                var2 = var4 - var2;
                var18 = 32;
                var5 = var2 - var18;
                var2 = 48;
                var2 = var31[var2];
                var4 = var30.bind(var3)(var2);
                var2 = var4.useMainTabsHeight;
                var4 = var2.bind(var4)();
                var2 = 24;
                var2 = var5 - var2;
                var34 = var2 - var4;
                var _closure2_slot14 = var34;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var29;
                var1 = function(arg0) { // Environment: var13
                    _fun104089: for (var _fun104089_ip = 0;;) switch (_fun104089_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.item;
                            var _closure3_slot0 = var5;
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'message';
                            if (!(var0 !== var1)) {
                                _fun104089_ip = 703;
                                continue _fun104089
                            }
                        case 35:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'contentInventory';
                            if (!(var0 !== var1)) {
                                _fun104089_ip = 612;
                                continue _fun104089
                            }
                        case 58:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'loading';
                            if (!(var0 !== var1)) {
                                _fun104089_ip = 567;
                                continue _fun104089
                            }
                        case 79:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'bottomLoading';
                            if (!(var0 !== var1)) {
                                _fun104089_ip = 522;
                                continue _fun104089
                            }
                        case 102:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'end';
                            if (!(var0 !== var1)) {
                                _fun104089_ip = 471;
                                continue _fun104089
                            }
                        case 123:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'guildEvent';
                            if (!(var0 !== var1)) {
                                _fun104089_ip = 413;
                                continue _fun104089
                            }
                        case 144:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'recommendedGuilds';
                            if (!(var0 !== var1)) {
                                _fun104089_ip = 365;
                                continue _fun104089
                            }
                        case 167:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'icymiHeader';
                            if (!(var0 !== var1)) {
                                _fun104089_ip = 326;
                                continue _fun104089
                            }
                        case 190:
                            var0 = var5.data;
                            var1 = var0.kind;
                            var0 = 'forumThread';
                            if (!(var0 === var1)) {
                                _fun104089_ip = 322;
                                continue _fun104089
                            }
                        case 210:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 59;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ICYMIForumThreadRow;
                            var0 = {};
                            var4 = var5.data;
                            var4 = var4.message;
                            var0.message = var4;
                            var4 = var5.data;
                            var4 = var4.threadChannel;
                            var0.channel = var4;
                            var8 = _closure2_slot4;
                            var6 = var8.find;
                            var4 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var0 = var0.item;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var6 = var6.bind(var8)(var4);
                            var4 = null;
                            var4 = var4 != var6;
                            var0.visible = var4;
                            var4 = var3.bind(var2)(var1, var0);
                            _fun104089_ip = 944;
                            continue _fun104089;
                        case 322:
                            var0 = null;
                            return var0;
                        case 326:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 58;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 365:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 57;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ICYMIServerRecommendationRow;
                            var0 = {};
                            var4 = var3.bind(var2)(var1, var0);
                            _fun104089_ip = 944;
                            continue _fun104089;
                        case 413:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 56;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var6 = var5.data;
                            var6 = var6.eventId;
                            var0.eventId = var6;
                            var4 = var3.bind(var2)(var1, var0);
                            _fun104089_ip = 944;
                            continue _fun104089;
                        case 471:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 55;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var6 = _closure2_slot5;
                            var0.visible = var6;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 522:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 54;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ICYMIBottomLoading;
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 567:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 53;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ICYMILoading;
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 612:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 52;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var9 = _closure2_slot4;
                            var8 = var9.find;
                            var6 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var0 = var0.item;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var8 = var8.bind(var9)(var6);
                            var6 = null;
                            var6 = var6 != var8;
                            var0.visible = var6;
                            var6 = var5.data;
                            var6 = var6.content;
                            var0.content = var6;
                            var4 = var3.bind(var2)(var1, var0);
                            _fun104089_ip = 944;
                            continue _fun104089;
                        case 703:
                            var2 = var5.channelType;
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 49;
                            var0 = var6[var0];
                            var6 = undefined;
                            var0 = var3.bind(var6)(var0);
                            var0 = var0.ChannelTypes;
                            var0 = var0.GUILD_ANNOUNCEMENT;
                            if (!(var2 !== var0)) {
                                _fun104089_ip = 849;
                                continue _fun104089
                            }
                        case 750:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 51;
                            var0 = var8[var0];
                            var2 = var2.bind(var6)(var0);
                            var0 = {};
                            var8 = var5.data;
                            var8 = var8.message;
                            var0.message = var8;
                            var8 = var5.data;
                            var8 = var8.messageContext;
                            var0.messageContext = var8;
                            var10 = _closure2_slot4;
                            var9 = var10.find;
                            var8 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var0 = var0.item;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var9 = var9.bind(var10)(var8);
                            var8 = null;
                            var8 = var8 != var9;
                            var0.visible = var8;
                            var0 = var3.bind(var6)(var2, var0);
                            _fun104089_ip = 941;
                            continue _fun104089;
                        case 849:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 50;
                            var1 = var8[var1];
                            var2 = var2.bind(var6)(var1);
                            var1 = {};
                            var8 = var5.unread;
                            var1.unread = var8;
                            var8 = var5.data;
                            var8 = var8.message;
                            var1.message = var8;
                            var9 = _closure2_slot4;
                            var8 = var9.find;
                            var7 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var0 = var0.item;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var8 = var8.bind(var9)(var7);
                            var7 = null;
                            var7 = var7 != var8;
                            var1.visible = var7;
                            var0 = var3.bind(var6)(var2, var1);
                        case 941:
                            var4 = var0;
                        case 944:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 60;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.CardHeightMeasurer;
                            var0 = {};
                            var5 = var5.id;
                            var0.itemId = var5;
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var20 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot4;
                var4 = var5.useMemo;
                var2 = function() { // Environment: var13
                    var0 = {};
                    var1 = 'transparent';
                    var0.backgroundColor = var1;
                    return var0;
                };
                var1 = new Array(0);
                var22 = var4.bind(var5)(var2, var1);
                var5 = _closure1_slot4;
                var4 = var5.useMemo;
                var2 = new Array(3);
                var2[0] = var34;
                var1 = var21.length;
                var2[1] = var1;
                var2[2] = var33;
                var1 = function() { // Environment: var13
                    _fun104095: for (var _fun104095_ip = 0;;) switch (_fun104095_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var1 = var0.length;
                            var0 = 0;
                            var1 = var1 > var0;
                            var0 = undefined;
                            if (!var1) {
                                _fun104095_ip = 44;
                                continue _fun104095
                            }
                        case 23:
                            var1 = {};
                            var3 = _closure2_slot14;
                            var1.height = var3;
                            var2 = _closure2_slot0;
                            var1.width = var2;
                            var0 = var1;
                        case 44:
                            return var0;
                    }
                };
                var19 = var4.bind(var5)(var1, var2);
                var1 = 61;
                var1 = var31[var1];
                var2 = var30.bind(var3)(var1);
                var1 = var2.useClientThemesOverride;
                var12 = var1.bind(var2)();
                var0 = var31[var0];
                var5 = var30.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot11;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var13
                    var1 = _closure1_slot11;
                    var0 = var1.hasNewContent;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var27 = var4.bind(var5)(var2, var1, var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var24.containerInPanels;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var24.containerBackground;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot19;
                var4 = {};
                var4.inNestedNavigator = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot16;
                var6 = _closure1_slot5;
                var5 = {};
                var32 = var24.flashListWrapper;
                var8 = new Array(3);
                var8[0] = var32;
                var32 = {};
                var32.height = var34;
                var32.width = var33;
                var33 = 'auto';
                var32.marginHorizontal = var33;
                var8[1] = var32;
                var8[2] = var12;
                var5.style = var8;
                var12 = _closure1_slot14;
                var8 = 62;
                var8 = var31[var8];
                var11 = var11.bind(var3)(var8);
                var8 = {};
                var13 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var4 = var3[var1];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var4);
                    var6 = var7.itemInteracted;
                    var5 = 'refresh_button';
                    var4 = 'press_refresh_button';
                    var4 = var6.bind(var7)(var5, var5, var4);
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.feedPageActioned;
                    var1 = {};
                    var4 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'new_content_pill',
                        'actionIntentType': 'refresh',
                        'actionDestinationType': null
                    };
                    var1.actionParameters = var4;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot13;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8.onPress = var13;
                var8.isRefreshing = var25;
                var11 = var12.bind(var3)(var11, var8);
                var8 = new Array(3);
                var8[0] = var11;
                var13 = _closure1_slot14;
                var11 = 63;
                var11 = var31[var11];
                var11 = var30.bind(var3)(var11);
                var12 = var11.FlashList;
                var11 = {};
                var11.ref = var23;
                var23 = !var14;
                var11.scrollEnabled = var23;
                var23 = {};
                var23.endVisible = var29;
                var11.extraData = var23;
                var11.contentContainerStyle = var22;
                var22 = 23;
                var23 = var31[var22];
                var23 = var30.bind(var3)(var23);
                var29 = var23.intl;
                var23 = var29.string;
                var22 = var31[var22];
                var22 = var30.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.OIgYlQ;
                var22 = var23.bind(var29)(var22);
                var11.accessibilityLabel = var22;
                var11.data = var21;
                var11.refreshing = var25;
                var23 = _closure1_slot14;
                var22 = _closure1_slot6;
                var21 = {};
                var21.onRefresh = var28;
                var21.refreshing = var25;
                var24 = var24.refreshing;
                var24 = var24.color;
                var21.tintColor = var24;
                var24 = {};
                var25 = var15;
                if (!var27) {
                    _fun104075_ip = 1364;
                    continue _fun104075
                }
            case 1362:
                var25 = 0;
            case 1364:
                var24.opacity = var25;
                var21.style = var24;
                var21 = var23.bind(var3)(var22, var21);
                var11.refreshControl = var21;
                var21 = 3;
                var11.onEndReachedThreshold = var21;
                var21 = _closure1_slot23;
                var11.onEndReached = var21;
                var21 = _closure1_slot25;
                var11.keyExtractor = var21;
                var11.renderItem = var20;
                var20 = 200;
                var11.estimatedItemSize = var20;
                var11.estimatedListSize = var19;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.itemToType;
                var11.getItemType = var18;
                var18 = 64;
                var18 = var20[var18];
                var19 = var19.bind(var3)(var18);
                var18 = var19.isAndroid;
                var18 = var18.bind(var19)();
                var18 = 100;
                var11.drawDistance = var18;
                var11.stickyHeaderIndices = var17;
                var11.viewabilityConfigCallbackPairs = var16;
                if (var14) {
                    _fun104075_ip = 1501;
                    continue _fun104075
                }
            case 1498:
                var15 = var10;
            case 1501:
                var10 = global;
                var10 = var10.HermesInternal;
                var14 = var10.concat;
                var10 = 'Version-';
                var10 = var14.bind(var10)(var15);
                var10 = var13.bind(var3)(var12, var11, var10);
                var8[1] = var10;
                var11 = _closure1_slot14;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 65;
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.TTIFirstContentfulPaint;
                var9 = {};
                var12 = 'icymi';
                var9.label = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.id;
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot5 = var8;
    var3 = var3.RefreshControl;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NUM_GUILDS_EXTENDED_ONBOARDING;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var6 = var3.Fragment;
    var _closure1_slot15 = var6;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 12;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOWEST;
        var1.backgroundColor = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_8;
        var1.paddingHorizontal = var2;
        var2 = 'hidden';
        var1.overflow = var2;
        var2 = 1;
        var1.flex = var2;
        var2 = arg0;
        var1.paddingTop = var2;
        var0.containerOuterTablet = var1;
        return var0;
    };
    var3 = var6.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {
            'flex': 1,
            'flexShrink': 1,
            'flexGrow': 1
        };
        var0.container = var1;
        var1 = {
            'flex': 1,
            'flexShrink': 1,
            'flexGrow': 1,
            'overflow': 'hidden'
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 12;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.sm;
        var1.borderTopLeftRadius = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.sm;
        var1.borderTopRightRadius = var6;
        var0.containerInPanels = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var6;
        var0.containerBackground = var1;
        var1 = {
            'backgroundColor': null,
            'minHeight': 2,
            'flex': 1
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var6;
        var0.flashListWrapper = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.INTERACTIVE_TEXT_DEFAULT;
        var1.color = var6;
        var0.refreshing = var1;
        var1 = {
            'backgroundColor': null,
            'position': 'relative',
            'overflow': 'hidden',
            'width': '100%'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var6;
        var0.header = var1;
        var6 = 'center';
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var0.headerLeft = var1;
        var1 = {};
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var1.marginRight = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_32;
        var1.height = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_32;
        var1.width = var7;
        var1.alignItems = var6;
        var1.justifyContent = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.lg;
        var1.borderRadius = var6;
        var0.headerClose = var1;
        var1 = {
            'height': 56,
            'marginHorizontal': null,
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between'
        };
        var6 = arg0;
        var6 = var6.margin;
        var1.marginHorizontal = var6;
        var0.headerTitle = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'gap': 4
        };
        var0.headerText = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.gap = var6;
        var0.headerActions = var1;
        var1 = {
            'height': 18,
            'width': 18
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.round;
        var1.borderRadius = var6;
        var0.notificationBadge = var1;
        var1 = {
            'flex': 1,
            'justifyContent': 'center'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_96;
        var1.paddingTop = var6;
        var0.loading = var1;
        var1 = {
            'position': 'absolute',
            'bottom': 0,
            'left': 0,
            'right': 0,
            'backgroundColor': null,
            'height': 1
        };
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.BORDER_SUBTLE;
        var1.backgroundColor = var2;
        var0.headerBorder = var1;
        return var0;
    };
    var3 = var6.bind(var8)(var3);
    var _closure1_slot18 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun104101: for (var _fun104101_ip = 0;;) switch (_fun104101_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.inNestedNavigator;
                var0 = _closure1_slot18;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 24;
                var0 = var12[var0];
                var0 = var6.bind(var3)(var0);
                var13 = var0.bind(var3)();
                var2 = _closure1_slot16;
                var11 = _closure1_slot0;
                var0 = 25;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = !var13;
                var0.top = var4;
                var4 = var8.header;
                var0.style = var4;
                var7 = _closure1_slot14;
                var4 = 26;
                var4 = var12[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {
                    'absolute': true,
                    'wide': true,
                    'tall': true,
                    'mix': true
                };
                var21 = true;
                var9 = {};
                var10 = 27;
                var14 = var12[var10];
                var14 = var11.bind(var3)(var14);
                var14 = var14.OverlayOpacity;
                var14 = var14.LEVEL_7;
                var9.dark = var14;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.OverlayOpacity;
                var10 = var10.LEVEL_8;
                var9.light = var10;
                var4.mixAmount = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var9 = _closure1_slot16;
                var7 = _closure1_slot5;
                var6 = {};
                var10 = var8.headerTitle;
                var6.style = var10;
                var12 = _closure1_slot16;
                var11 = _closure1_slot5;
                var10 = {};
                var14 = var8.headerLeft;
                var10.style = var14;
                if (var13) {
                    _fun104101_ip = 249;
                    continue _fun104101
                }
            case 241:
                var14 = null;
                if (!var17) {
                    _fun104101_ip = 460;
                    continue _fun104101
                }
            case 249:
                var16 = _closure1_slot14;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 28;
                var13 = var20[var13];
                var13 = var19.bind(var3)(var13);
                var15 = var13.PressableOpacity;
                var13 = {};
                var18 = var8.headerClose;
                var13.style = var18;
                var18 = 23;
                var22 = var20[var18];
                var22 = var19.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["13/7kX"];
                var18 = var22.bind(var23)(var18);
                var13.accessibilityLabel = var18;
                var18 = 29;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.goBack;
                var13.onPress = var18;
                var20 = _closure1_slot14;
                if (var17) {
                    _fun104101_ip = 417;
                    continue _fun104101
                }
            case 371:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var17 = 31;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.XSmallIcon;
                var17 = {};
                var19 = 'interactive-text-default';
                var17.color = var19;
                var17 = var20.bind(var3)(var18, var17);
                _fun104101_ip = 450;
                continue _fun104101;
            case 417:
                var19 = _closure1_slot1;
                var22 = _closure1_slot2;
                var18 = 30;
                var18 = var22[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var18.includeNotificationsCount = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 450:
                var13.children = var17;
                var14 = var16.bind(var3)(var15, var13);
            case 460:
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot14;
                var15 = _closure1_slot22;
                var14 = {};
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var11 = var12.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot16;
                var12 = _closure1_slot5;
                var11 = {};
                var14 = var8.headerActions;
                var11.style = var14;
                var16 = _closure1_slot14;
                var15 = _closure1_slot21;
                var14 = {};
                var15 = var16.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot14;
                var16 = _closure1_slot20;
                var15 = {};
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var6.children = var10;
                var6 = var9.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot14;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var8.headerBorder;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 70;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ICYMI.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104102: for (var _fun104102_ip = 0;;) switch (_fun104102_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.route;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 66;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var16 = var2.bind(var3)();
                var6 = _closure1_slot0;
                var2 = 37;
                var2 = var5[var2];
                var8 = var6.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var7.bind(var8)(var6, var2);
                var2 = 24;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var10 = var2.bind(var3)();
                var _closure2_slot0 = var10;
                var2 = 34;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var2 = var2.top;
                var4 = null;
                var5 = var4 == var1;
                var14 = undefined;
                if (var5) {
                    _fun104102_ip = 163;
                    continue _fun104102
                }
            case 142:
                var1 = var1.params;
                var4 = var4 == var1;
                var14 = undefined;
                if (var4) {
                    _fun104102_ip = 163;
                    continue _fun104102
                }
            case 157:
                var14 = var1.inNestedNavigator;
            case 163:
                var1 = _closure1_slot17;
                var5 = var1.bind(var3)(var2);
                _closure2_slot1 = var5;
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var10;
                var5 = var5.containerOuterTablet;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun104104: for (var _fun104104_ip = 0;;) switch (_fun104104_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            if (!var2) {
                                _fun104104_ip = 22;
                                continue _fun104104
                            }
                        case 12:
                            var1 = _closure2_slot1;
                            var0 = var1.containerOuterTablet;
                        case 22:
                            return var0;
                    }
                };
                var12 = var2.bind(var4)(var0, var1);
                if (var10) {
                    _fun104102_ip = 231;
                    continue _fun104102
                }
            case 219:
                var0 = _closure1_slot4;
                var9 = var0.Fragment;
                _fun104102_ip = 235;
                continue _fun104102;
            case 231:
                var9 = _closure1_slot5;
            case 235:
                var2 = _closure1_slot14;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 67;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = _closure1_slot14;
                var5 = _closure1_slot0;
                var4 = 68;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ICYMIContextProvider;
                var4 = {};
                var8 = _closure1_slot16;
                var7 = {};
                if (var10) {
                    _fun104102_ip = 302;
                    continue _fun104102
                }
            case 298:
                var10 = {};
                _fun104102_ip = 311;
                continue _fun104102;
            case 302:
                var11 = {};
                var11.style = var12;
                var10 = var11;
            case 311:
                var22 = var7;
                var21 = var10;
                var10 = copyDataProperties(var22, var21);
                var12 = _closure1_slot14;
                var11 = _closure1_slot1;
                var17 = _closure1_slot2;
                var10 = 26;
                var10 = var17[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var13 = true;
                var10.absolute = var13;
                var10 = var12.bind(var3)(var11, var10);
                var11 = new Array(2);
                var11[0] = var10;
                var13 = _closure1_slot14;
                var12 = _closure1_slot0;
                var10 = 69;
                var10 = var17[var10];
                var10 = var12.bind(var3)(var10);
                var12 = var10.ThemeContextProvider;
                var10 = {};
                var10.gradient = var16;
                var17 = _closure1_slot14;
                var16 = _closure1_slot24;
                var15 = {};
                var15.inNestedNavigator = var14;
                var14 = global;
                var14 = var14.HermesInternal;
                var18 = var14.concat;
                var14 = '';
                var14 = var18.bind(var14)(var19);
                var14 = var17.bind(var3)(var16, var15, var14);
                var10.children = var14;
                var10 = var13.bind(var3)(var12, var10);
                var11[1] = var10;
                var10 = 'children';
                var7[var10] = var11;
                var7 = var8.bind(var3)(var9, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ICYMITab = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1216, 1410, 8949, 8946, 13596, 1369, 33, 1297, 671, 13597, 7579, 10765, 8956, 3279, 13599, 1307, 3267, 13610, 3942, 1234, 7756, 4736, 8795, 3197, 4904, 13549, 13522, 4734, 8955, 1464, 1568, 1470, 4364, 566, 13511, 13630, 13633, 6009, 1358, 13620, 1469, 6688, 4561, 9717, 5276, 790, 13634, 13640, 13645, 13664, 13665, 13666, 13667, 13668, 13669, 13670, 13671, 8981, 13672, 5804, 478, 9782, 3243, 13673, 13598, 3161, 2]);