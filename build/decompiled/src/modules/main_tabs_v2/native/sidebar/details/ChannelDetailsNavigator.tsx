// modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun109334: for (var _fun109334_ip = 0;;) switch (_fun109334_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.channelId;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var3.bind(var5)(var2, var0);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun109334_ip = 98;
                    continue _fun109334
                }
            case 78:
                var3 = _closure1_slot9;
                var2 = _closure1_slot14;
                var1 = {};
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 98:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun109336: for (var _fun109336_ip = 0;;) switch (_fun109336_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.channel;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.useCanStartThread;
                var1 = var1.bind(var2)(var7);
                var6 = _closure1_slot3;
                var3 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.navigateToThreadCreation;
                    var2 = _closure2_slot0;
                    var1 = 'Thread Browser Toolbar';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var6 = var3.bind(var6)(var0, var2);
                var0 = null;
                if (!var1) {
                    _fun109336_ip = 198;
                    continue _fun109336
                }
            case 85:
                var3 = _closure1_slot9;
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var1 = var11.bind(var4)(var1);
                var2 = var1.HeaderIconButton;
                var1 = {};
                var8 = 12;
                var9 = var7[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var7[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.rBIGBL;
                var8 = var9.bind(var10)(var8);
                var1.accessibilityLabel = var8;
                var1.onPress = var6;
                var6 = _closure1_slot1;
                var5 = 13;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var1.source = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 198:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun109338: for (var _fun109338_ip = 0;;) switch (_fun109338_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.navigation;
                var1 = var0.routeName;
                var0 = var0.initialRouteName;
                if (!(var0 !== var1)) {
                    _fun109338_ip = 63;
                    continue _fun109338
                }
            case 25:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.getRenderModalBackImage;
                var0 = var0.bind(var1)(var3);
                _fun109338_ip = 99;
                continue _fun109338;
            case 63:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.getRenderModalCloseImage;
                var0 = var1.bind(var2)(var3);
            case 99:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var3 = global;
    var9 = var3.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot3 = var6;
    var7 = 1;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ChannelDetailsNavigatorScreens;
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.SearchNavigatorScreens;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot9 = var8;
    var7 = var7.jsxs;
    var _closure1_slot10 = var7;
    var8 = var3.Object;
    var7 = var8.freeze;
    var3 = {};
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.createNativeStackNavigator;
    var3 = var3.bind(var7)();
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun109339: for (var _fun109339_ip = 0;;) switch (_fun109339_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.route;
                var1 = var0.params;
                var19 = var1.channelId;
                var _closure2_slot0 = var19;
                var18 = var1.applicationId;
                var16 = var1.search;
                var0 = var1.source;
                var _closure2_slot1 = var0;
                var7 = var1.initialRouteName;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun109339_ip = 71;
                    continue _fun109339
                }
            case 58:
                var1 = _closure1_slot6;
                var7 = var1.DETAILS;
            case 71:
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(3);
                var1[0] = var19;
                var1[1] = var7;
                var1[2] = var0;
                var0 = function() { // Environment: var8
                    _fun109340: for (var _fun109340_ip = 0;;) switch (_fun109340_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot0;
                            var5 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var5)) {
                                _fun109340_ip = 127;
                                continue _fun109340
                            }
                        case 30:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot7;
                            var1 = var0.CHANNEL_SIDEBAR_VIEWED;
                            var0 = {};
                            var6 = var5.id;
                            var0.channel_id = var6;
                            var6 = var5.getGuildId;
                            var6 = var6.bind(var5)();
                            var0.guild_id = var6;
                            var5 = var5.type;
                            var0.channel_type = var5;
                            var5 = _closure2_slot2;
                            var0.initial_route_name = var5;
                            var4 = _closure2_slot1;
                            var0.source = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 127:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 15;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var0 = var4.useChannelSettingsScreensStyles;
                var4 = var0.bind(var4)();
                _closure2_slot3 = var4;
                var9 = _closure1_slot3;
                var6 = var9.useMemo;
                var5 = new Array(1);
                var5[0] = var19;
                var0 = function() { // Environment: var8
                    var0 = {};
                    var1 = {};
                    var2 = _closure2_slot0;
                    var1.channelId = var2;
                    var0.initialParams = var1;
                    return var0;
                };
                var14 = var6.bind(var9)(var0, var5);
                var0 = 16;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useAccessibilityNativeStackOptions;
                var13 = var0.bind(var1)();
                var1 = _closure1_slot5;
                var0 = var1.getChannel;
                var2 = var0.bind(var1)(var19);
                var0 = null;
                var1 = var0 == var2;
                var0 = undefined;
                if (var1) {
                    _fun109339_ip = 245;
                    continue _fun109339
                }
            case 235:
                var1 = var2.getGuildId;
                var0 = var1.bind(var2)();
            case 245:
                _closure2_slot4 = var0;
                var5 = _closure1_slot3;
                var2 = var5.useMemo;
                var1 = new Array(3);
                var1[0] = var19;
                var1[1] = var0;
                var1[2] = var4;
                var0 = function() { // Environment: var8
                    _fun109342: for (var _fun109342_ip = 0;;) switch (_fun109342_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun109342_ip = 17;
                                continue _fun109342
                            }
                        case 13:
                            var0 = {};
                            _fun109342_ip = 67;
                            continue _fun109342;
                        case 17:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 15;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.getChannelSettingsScreens;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot3;
                            var0 = var4.bind(var5)(var3, var2, var1);
                        case 67:
                            return var0;
                    }
                };
                var11 = var2.bind(var5)(var0, var1);
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 17;
                var0 = var20[var0];
                var2 = var17.bind(var3)(var0);
                var1 = var2.useNavigatorBackPressHandler;
                var0 = function() { // Environment: var8
                    _fun109343: for (var _fun109343_ip = 0;;) switch (_fun109343_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.getRootNavigationRef;
                            var3 = var0.bind(var1)();
                            var0 = null;
                            var1 = var0 == var3;
                            if (var1) {
                                _fun109343_ip = 57;
                                continue _fun109343
                            }
                        case 44:
                            var0 = var3.isReady;
                            var0 = var0.bind(var3)();
                            var1 = !var0;
                        case 57:
                            var0 = !var1;
                            if (var1) {
                                _fun109343_ip = 97;
                                continue _fun109343
                            }
                        case 63:
                            var1 = var3.canGoBack;
                            var1 = var1.bind(var3)();
                            var2 = !var1;
                            var1 = !var2;
                            if (var2) {
                                _fun109343_ip = 94;
                                continue _fun109343
                            }
                        case 82:
                            var2 = var3.goBack;
                            var2 = var2.bind(var3)();
                            var1 = true;
                        case 94:
                            var0 = var1;
                        case 97:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = 19;
                var0 = var20[var0];
                var1 = var17.bind(var3)(var0);
                var0 = var1.useLocalHorizontalSafeArea;
                var0 = var0.bind(var1)();
                var9 = var0.left;
                var6 = var0.right;
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var4.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var5.paddingLeft = var9;
                var5.paddingRight = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot10;
                var9 = _closure1_slot12;
                var5 = var9.Navigator;
                var4 = {};
                var12 = 'channel-details-navigator';
                var4.id = var12;
                var12 = {};
                var15 = 11;
                var15 = var20[var15];
                var15 = var17.bind(var3)(var15);
                var15 = var15.renderGenericTitle;
                var12.headerTitle = var15;
                var22 = var12;
                var21 = var13;
                var13 = copyDataProperties(var22, var21);
                var4.screenOptions = var12;
                var4.initialRouteName = var7;
                var15 = _closure1_slot9;
                var12 = var9.Screen;
                var7 = {};
                var13 = {};
                var13.channelId = var19;
                var13.search = var16;
                var7.initialParams = var13;
                var13 = _closure1_slot6;
                var16 = var13.DETAILS;
                var7.name = var16;
                var16 = {};
                var17 = false;
                var16.headerShown = var17;
                var7.options = var16;
                var16 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.default;
                    return var0;
                };
                var7.getComponent = var16;
                var12 = var15.bind(var3)(var12, var7);
                var7 = new Array(6);
                var7[0] = var12;
                var16 = _closure1_slot9;
                var15 = var9.Screen;
                var12 = {};
                var17 = _closure1_slot8;
                var17 = var17.SEARCH_CHAT_PREVIEW;
                var12.name = var17;
                var17 = function arg0() {
                    var0 = arg0;
                    var2 = var0.route;
                    var _closure3_slot0 = var2;
                    var3 = var0.navigation;
                    var0 = {};
                    var2 = function arg0() {
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 11;
                        var0 = var6[var0];
                        var4 = undefined;
                        var2 = var5.bind(var4)(var0);
                        var1 = var2.renderHeader;
                        var0 = {};
                        var7 = arg0;
                        var8 = var0;
                        var3 = copyDataProperties(var8, var7);
                        var3 = 21;
                        var3 = var6[var3];
                        var4 = var5.bind(var4)(var3);
                        var3 = var4.isAndroid;
                        var4 = var3.bind(var4)();
                        var3 = 'shouldHandleSafeArea';
                        var0[var3] = var4;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.header = var2;
                    var1 = function() {
                        var3 = _closure1_slot9;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 22;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var4 = _closure3_slot0;
                        var4 = var4.params;
                        var4 = var4.channelId;
                        var0.channelId = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerTitle = var1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.getRenderBackImage;
                    var1 = var1.bind(var2)(var3);
                    var0.headerLeft = var1;
                    return var0;
                };
                var12.options = var17;
                var17 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.default;
                    return var0;
                };
                var12.getComponent = var17;
                var12 = var16.bind(var3)(var15, var12);
                var7[1] = var12;
                var16 = _closure1_slot9;
                var15 = var9.Screen;
                var12 = {};
                var17 = var13.PINNED_MESSAGES;
                var12.name = var17;
                var17 = {};
                var17.channelId = var19;
                var12.initialParams = var17;
                var17 = function arg0() {
                    var0 = arg0;
                    var5 = var0.navigation;
                    var4 = var0.route;
                    var0 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 12;
                    var6 = var9[var2];
                    var3 = undefined;
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2["mp1N/2"];
                    var2 = var6.bind(var7)(var2);
                    var0.title = var2;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var1.navigation = var5;
                    var5 = _closure2_slot2;
                    var1.initialRouteName = var5;
                    var4 = var4.name;
                    var1.routeName = var4;
                    var1 = var2.bind(var3)(var1);
                    var0.headerLeft = var1;
                    return var0;
                };
                var12.options = var17;
                var17 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.default;
                    return var0;
                };
                var12.getComponent = var17;
                var12 = var16.bind(var3)(var15, var12);
                var7[2] = var12;
                var16 = _closure1_slot9;
                var15 = var9.Screen;
                var12 = {};
                var17 = {};
                var17.channelId = var19;
                var17.applicationId = var18;
                var12.initialParams = var17;
                var17 = var13.MUTE;
                var12.name = var17;
                var17 = function arg0() {
                    var0 = arg0;
                    var5 = var0.navigation;
                    var4 = var0.route;
                    var0 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 12;
                    var6 = var9[var2];
                    var3 = undefined;
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.w4m945;
                    var2 = var6.bind(var7)(var2);
                    var0.title = var2;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var1.navigation = var5;
                    var5 = _closure2_slot2;
                    var1.initialRouteName = var5;
                    var4 = var4.name;
                    var1.routeName = var4;
                    var1 = var2.bind(var3)(var1);
                    var0.headerLeft = var1;
                    return var0;
                };
                var12.options = var17;
                var17 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 25;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.default;
                    return var0;
                };
                var12.getComponent = var17;
                var12 = var16.bind(var3)(var15, var12);
                var7[3] = var12;
                var12 = _closure1_slot9;
                var10 = var9.Screen;
                var9 = {};
                var22 = var9;
                var21 = var14;
                var14 = copyDataProperties(var22, var21);
                var14 = var13.THREADS;
                var13 = 'name';
                var9[var13] = var14;
                var14 = function arg0() {
                    var0 = arg0;
                    var6 = var0.navigation;
                    var5 = var0.route;
                    var _closure3_slot0 = var5;
                    var0 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 12;
                    var7 = var10[var3];
                    var4 = undefined;
                    var7 = var9.bind(var4)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var3 = var10[var3];
                    var3 = var9.bind(var4)(var3);
                    var3 = var3.t;
                    var3 = var3.B2panI;
                    var3 = var7.bind(var8)(var3);
                    var0.title = var3;
                    var3 = _closure1_slot15;
                    var2 = {};
                    var2.navigation = var6;
                    var6 = _closure2_slot2;
                    var2.initialRouteName = var6;
                    var5 = var5.name;
                    var2.routeName = var5;
                    var2 = var3.bind(var4)(var2);
                    var0.headerLeft = var2;
                    var1 = function() {
                        var3 = _closure1_slot9;
                        var2 = _closure1_slot13;
                        var1 = {};
                        var0 = _closure3_slot0;
                        var0 = var0.params;
                        var0 = var0.channelId;
                        var1.channelId = var0;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0.headerRight = var1;
                    return var0;
                };
                var13 = 'options';
                var9[var13] = var14;
                var14 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.default;
                    return var0;
                };
                var13 = 'getComponent';
                var9[var13] = var14;
                var9 = var12.bind(var3)(var10, var9);
                var7[4] = var9;
                var9 = global;
                var10 = var9.Object;
                var9 = var10.entries;
                var10 = var9.bind(var10)(var11);
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    _fun109356: for (var _fun109356_ip = 0;;) switch (_fun109356_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = var6[Symbol.iterator];
                            var6 = var0().next;
                            var2 = var6().value;
                            var1 = var0;
                            var4 = undefined;
                            var1 = var1 === var4;
                            var3 = undefined;
                            if (var1) {
                                _fun109356_ip = 29;
                                continue _fun109356
                            }
                        case 26:
                            var3 = var2;
                        case 29:
                            var _closure3_slot0 = var3;
                            var2 = undefined;
                            if (var1) {
                                _fun109356_ip = 63;
                                continue _fun109356
                            }
                        case 38:
                            var7 = var6().value;
                            var6 = var0;
                            var6 = var6 === var4;
                            var2 = undefined;
                            var1 = var6;
                            if (var6) {
                                _fun109356_ip = 63;
                                continue _fun109356
                            }
                        case 57:
                            var2 = var7;
                            var1 = var6;
                        case 63:
                            var _closure3_slot1 = var2;
                            if (var1) {
                                _fun109356_ip = 73;
                                continue _fun109356
                            }
                        case 70:
                            var0.return();
                        case 73:
                            var2 = _closure1_slot9;
                            var0 = _closure1_slot12;
                            var1 = var0.Screen;
                            var0 = {};
                            var0.name = var3;
                            var6 = function arg0() {
                                var0 = arg0;
                                var4 = var0.navigation;
                                var0 = {};
                                var2 = _closure3_slot1;
                                var2 = var2.title;
                                var0.title = var2;
                                var3 = _closure1_slot15;
                                var2 = {};
                                var2.navigation = var4;
                                var4 = _closure2_slot2;
                                var2.initialRouteName = var4;
                                var1 = _closure3_slot0;
                                var2.routeName = var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var0.headerLeft = var1;
                                return var0;
                            };
                            var0.options = var6;
                            var5 = function arg0() {
                                _fun109358: for (var _fun109358_ip = 0;;) switch (_fun109358_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.route;
                                        var3 = var1.navigation;
                                        var2 = var0.params;
                                        var0 = null;
                                        if (!(var0 == var2)) {
                                            _fun109358_ip = 34;
                                            continue _fun109358
                                        }
                                    case 27:
                                        var2 = _closure1_slot11;
                                    case 34:
                                        var1 = _closure3_slot1;
                                        var0 = var1.render;
                                        var0 = var0.bind(var1)(var2, var3);
                                        return var0;
                                }
                            };
                            var0.children = var5;
                            var0 = var2.bind(var4)(var1, var0, var3);
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8);
                var7[5] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 9063, 660, 13772, 33, 9184, 632, 6774, 9635, 8964, 1235, 11463, 796, 14075, 5845, 4713, 3917, 13069, 14121, 478, 14122, 14123, 14124, 14125, 13853, 2]);