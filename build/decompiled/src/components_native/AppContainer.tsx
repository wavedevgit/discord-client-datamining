// components_native/AppContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun100441: for (var _fun100441_ip = 0;;) switch (_fun100441_ip) {
        case 0:
            var10 = require;
            var13 = metroImportDefault;
            var9 = exports;
            var11 = dependencyMap;
            var0 = global;
            var _closure1_slot0 = var0;
            var4 = var10;
            var _closure1_slot1 = var10;
            var3 = var13;
            var _closure1_slot2 = var13;
            var1 = var9;
            var5 = var11;
            var _closure1_slot3 = var11;
            var0 = function(arg0) { // Original name: GestureWrapper, environment: var2
                var0 = arg0;
                var4 = var0.children;
                var1 = _closure1_slot12;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var _closure2_slot0 = var9;
                var1 = _closure1_slot1;
                var6 = _closure1_slot3;
                var5 = 10;
                var5 = var6[var5];
                var7 = var1.bind(var3)(var5);
                var5 = var7.useIsScreenLandscape;
                var10 = var5.bind(var7)();
                var _closure2_slot1 = var10;
                var8 = _closure1_slot5;
                var7 = var8.useMemo;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var9;
                var2 = function() { // Environment: var2
                    _fun100443: for (var _fun100443_ip = 0;;) switch (_fun100443_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.flex;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            if (!var3) {
                                _fun100443_ip = 39;
                                continue _fun100443
                            }
                        case 29:
                            var2 = _closure2_slot0;
                            var1 = var2.rootBackgroundColor;
                        case 39:
                            var0[1] = var1;
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var2, var5);
                var2 = _closure1_slot10;
                var0 = 11;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GestureHandlerRootView;
                var0 = {};
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot15 = var0;
            var0 = function() { // Original name: handleNavigationOnReady, environment: var2
                var3 = _closure1_slot2;
                var5 = _closure1_slot3;
                var0 = 12;
                var2 = var5[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.flush;
                var2 = var2.bind(var3)();
                var4 = _closure1_slot1;
                var2 = 13;
                var2 = var5[var2];
                var2 = var4.bind(var0)(var2);
                var3 = var2.ComponentDispatch;
                var2 = var3.dispatch;
                var1 = _closure1_slot9;
                var1 = var1.NAVIGATOR_READY;
                var1 = var2.bind(var3)(var1);
                var1 = 14;
                var1 = var5[var1];
                var1 = var4.bind(var0)(var1);
                var3 = var1.routingInstrumentation;
                var2 = var3.registerNavigationContainer;
                var1 = 15;
                var1 = var5[var1];
                var4 = var4.bind(var0)(var1);
                var1 = var4.getRootNavigationRef;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot16 = var0;
            var0 = function(arg0) { // Original name: AppNavigationContainer, environment: var2
                var1 = arg0;
                var4 = var1.children;
                var2 = _closure1_slot2;
                var10 = _closure1_slot3;
                var1 = 21;
                var1 = var10[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.bind(var3)();
                var5 = _closure1_slot5;
                var1 = var5.useRef;
                var1 = var1.bind(var5)(var3);
                var _closure2_slot0 = var1;
                var8 = _closure1_slot5;
                var6 = var8.useCallback;
                var5 = function() { // Environment: var0
                    _fun100446: for (var _fun100446_ip = 0;;) switch (_fun100446_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 15;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getRootNavigationRef;
                            var4 = var2.bind(var3)();
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun100446_ip = 373;
                                continue _fun100446
                            }
                        case 44:
                            var3 = var4.isReady;
                            var3 = var3.bind(var4)();
                            if (!var3) {
                                _fun100446_ip = 373;
                                continue _fun100446
                            }
                        case 60:
                            var3 = var4.getCurrentRoute;
                            var5 = var3.bind(var4)();
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var7 = 22;
                            var3 = var3[var7];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.coerceMessagesRoute;
                            var3 = var3.bind(var4)(var5);
                            if (!(var2 == var3)) {
                                _fun100446_ip = 133;
                                continue _fun100446
                            }
                        case 105:
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var4 = var4[var7];
                            var6 = var6.bind(var0)(var4);
                            var4 = var6.coerceGuildsRoute;
                            var3 = var4.bind(var6)(var5);
                        case 133:
                            var6 = var2 != var3;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var3 = var3[var7];
                            var8 = var4.bind(var0)(var3);
                            var7 = var8.coerceChannelRoute;
                            var4 = _closure2_slot0;
                            var4 = var4.current;
                            var4 = var7.bind(var8)(var4);
                            var4 = var2 != var4;
                            if (!var4) {
                                _fun100446_ip = 187;
                                continue _fun100446
                            }
                        case 184:
                            var4 = var6;
                        case 187:
                            if (!var4) {
                                _fun100446_ip = 230;
                                continue _fun100446
                            }
                        case 190:
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var4 = 23;
                            var4 = var7[var4];
                            var7 = var6.bind(var0)(var4);
                            var6 = var7.track;
                            var4 = _closure1_slot8;
                            var4 = var4.NAV_DRAWER_OPENED;
                            var4 = var6.bind(var7)(var4);
                        case 230:
                            var3 = _closure2_slot0;
                            var3.current = var5;
                            var4 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var3 = 19;
                            var3 = var6[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = true;
                            var5 = var4.bind(var0)(var5, var3);
                            var4 = _closure1_slot4;
                            var3 = 2;
                            var4 = var4.bind(var0)(var5, var3);
                            var3 = 0;
                            var6 = var4[var3];
                            var3 = 1;
                            var5 = var4[var3];
                            var2 = var2 != var5;
                            if (!var2) {
                                _fun100446_ip = 319;
                                continue _fun100446
                            }
                        case 301:
                            var4 = _closure1_slot7;
                            var3 = var4.getChannelId;
                            var3 = var3.bind(var4)();
                            var2 = var5 !== var3;
                        case 319:
                            if (!var2) {
                                _fun100446_ip = 373;
                                continue _fun100446
                            }
                        case 322:
                            var3 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var2 = 20;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.selectChannel;
                            var2 = {};
                            var2.guildId = var6;
                            var2.channelId = var5;
                            var5 = 'Navigation Fix';
                            var2.source = var5;
                            var2 = var3.bind(var4)(var2);
                        case 373:
                            var1 = _closure1_slot6;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var1 = new Array(0);
                var6 = var6.bind(var8)(var5, var1);
                var9 = _closure1_slot5;
                var8 = var9.useMemo;
                var5 = function() { // Environment: var0
                    _fun100447: for (var _fun100447_ip = 0;;) switch (_fun100447_ip) {
                        case 0:
                            var2 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var0 = 24;
                            var0 = var3[var0];
                            var6 = undefined;
                            var0 = var2.bind(var6)(var0);
                            var0 = var0.bind(var6)();
                            var1 = 25;
                            var1 = var3[var1];
                            var3 = var2.bind(var6)(var1);
                            var2 = var3.log;
                            var4 = null;
                            var1 = var4 == var0;
                            var5 = undefined;
                            if (var1) {
                                _fun100447_ip = 83;
                                continue _fun100447
                            }
                        case 57:
                            var7 = var0.routes;
                            var1 = 0;
                            var1 = var7[var1];
                            var4 = var4 == var1;
                            var5 = undefined;
                            if (var4) {
                                _fun100447_ip = 83;
                                continue _fun100447
                            }
                        case 78:
                            var5 = var1.name;
                        case 83:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var1 = 'Initial Screen: ';
                            var1 = var4.bind(var1)(var5);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = new Array(0);
                var5 = var8.bind(var9)(var5, var1);
                var9 = _closure1_slot5;
                var8 = var9.useRef;
                var1 = true;
                var1 = var8.bind(var9)(var1);
                var _closure2_slot1 = var1;
                var9 = _closure1_slot5;
                var8 = var9.useEffect;
                var1 = function() { // Environment: var0
                    _fun100448: for (var _fun100448_ip = 0;;) switch (_fun100448_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if (var2) {
                                _fun100448_ip = 55;
                                continue _fun100448
                            }
                        case 17:
                            var2 = global;
                            var5 = var2.setTimeout;
                            var4 = undefined;
                            var3 = function() { // Environment: var1
                                _fun100449: for (var _fun100449_ip = 0;;) switch (_fun100449_ip) {
                                    case 0:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot3;
                                        var0 = 15;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.getRootNavigationRef;
                                        var3 = var2.bind(var3)();
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun100449_ip = 125;
                                            continue _fun100449
                                        }
                                    case 41:
                                        var2 = var3.isReady;
                                        var2 = var2.bind(var3)();
                                        if (!var2) {
                                            _fun100449_ip = 125;
                                            continue _fun100449
                                        }
                                    case 54:
                                        var2 = var3.getState;
                                        var2 = var2.bind(var3)();
                                        var5 = var2.routes;
                                        var4 = var5.filter;
                                        var2 = function(arg0) { // Environment: var2
                                            var0 = arg0;
                                            var1 = var0.name;
                                            var0 = 'modal';
                                            var0 = var0 === var1;
                                            return var0;
                                        };
                                        var2 = var4.bind(var5)(var2);
                                        var4 = _closure1_slot2;
                                        var5 = _closure1_slot3;
                                        var1 = 24;
                                        var1 = var5[var1];
                                        var1 = var4.bind(var0)(var1);
                                        var2 = var1.bind(var0)(var2);
                                        var1 = var3.reset;
                                        var1 = var1.bind(var3)(var2);
                                    case 125:
                                        return var0;
                                }
                            };
                            var2 = 0;
                            var2 = var5.bind(var4)(var3, var2);
                            var _closure3_slot0 = var2;
                            var1 = function() { // Environment: var1
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var1;
                        case 55:
                            var1 = _closure2_slot1;
                            var0 = false;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var8.bind(var9)(var1, var0);
                var9 = _closure1_slot1;
                var0 = 26;
                var0 = var10[var0];
                var1 = var9.bind(var3)(var0);
                var0 = var1.useNavigationTheme;
                var8 = var0.bind(var1)(var2);
                var2 = _closure1_slot10;
                var0 = 27;
                var0 = var10[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.NavigationContainer;
                var0 = {};
                var0.theme = var8;
                var8 = 15;
                var8 = var10[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.getRootNavigationRef;
                var8 = var8.bind(var9)();
                var0.ref = var8;
                var7 = _closure1_slot16;
                var0.onReady = var7;
                var0.onStateChange = var6;
                var0.initialState = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot17 = var0;
            var0 = function(arg0) { // Original name: ShareNavigationContainer, environment: var2
                var0 = arg0;
                var4 = var0.children;
                var2 = _closure1_slot2;
                var6 = _closure1_slot3;
                var1 = 21;
                var1 = var6[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var7 = var1.bind(var3)();
                var1 = _closure1_slot1;
                var2 = 26;
                var2 = var6[var2];
                var5 = var1.bind(var3)(var2);
                var2 = var5.useNavigationTheme;
                var5 = var2.bind(var5)(var7);
                var2 = _closure1_slot10;
                var0 = 27;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.NavigationContainer;
                var0 = {};
                var0.theme = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot18 = var0;
            var0 = function(arg0) { // Original name: AppNavigationContainerOrEmpty, environment: var2
                _fun100453: for (var _fun100453_ip = 0;;) switch (_fun100453_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.children;
                        var3 = var0.appEntryKey;
                        var0 = 'main';
                        if (!(var0 !== var3)) {
                            _fun100453_ip = 60;
                            continue _fun100453
                        }
                    case 22:
                        var2 = 'share';
                        var0 = var1;
                        if (!(var2 === var3)) {
                            _fun100453_ip = 58;
                            continue _fun100453
                        }
                    case 33:
                        var5 = _closure1_slot10;
                        var4 = _closure1_slot18;
                        var3 = {};
                        var3.children = var1;
                        var2 = undefined;
                        var0 = var5.bind(var2)(var4, var3);
                    case 58:
                        _fun100453_ip = 85;
                        continue _fun100453;
                    case 60:
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot17;
                        var2 = {};
                        var2.children = var1;
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2);
                    case 85:
                        return var0;
                }
            };
            var _closure1_slot19 = var0;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var9, var0, var6);
            var0 = 0;
            var6 = var11[var0];
            var0 = undefined;
            var6 = var13.bind(var0)(var6);
            var _closure1_slot4 = var6;
            var12 = 1;
            var7 = var11[var12];
            var6 = arg3;
            var6 = var6.bind(var0)(var7);
            var _closure1_slot5 = var6;
            var6 = 2;
            var6 = var11[var6];
            var6 = var10.bind(var0)(var6);
            var7 = var6.NativeModules;
            var6 = var6.Platform;
            var6 = 3;
            var6 = var11[var6];
            var6 = var10.bind(var0)(var6);
            var6 = var6.handleHistoryStoreNavigationChange;
            var _closure1_slot6 = var6;
            var6 = 4;
            var6 = var11[var6];
            var6 = var13.bind(var0)(var6);
            var _closure1_slot7 = var6;
            var6 = 5;
            var6 = var11[var6];
            var6 = var10.bind(var0)(var6);
            var7 = var6.AnalyticEvents;
            var _closure1_slot8 = var7;
            var6 = var6.ComponentActions;
            var _closure1_slot9 = var6;
            var6 = 6;
            var6 = var11[var6];
            var6 = var10.bind(var0)(var6);
            var7 = var6.jsx;
            var _closure1_slot10 = var7;
            var6 = var6.jsxs;
            var _closure1_slot11 = var6;
            var6 = 7;
            var6 = var11[var6];
            var8 = var10.bind(var0)(var6);
            var7 = var8.createStyles;
            var6 = {};
            var9 = {};
            var9.flex = var12;
            var6.flex = var9;
            var9 = {};
            var12 = 8;
            var12 = var11[var12];
            var12 = var13.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.ANDROID_NAVIGATION_BAR_BACKGROUND;
            var9.backgroundColor = var12;
            var6.rootBackgroundColor = var9;
            var6 = var7.bind(var8)(var6);
            var _closure1_slot12 = var6;
            var6 = 9;
            var7 = var11[var6];
            var9 = var10.bind(var0)(var7);
            var8 = var9.configureReanimatedLogger;
            var7 = {};
            var6 = var11[var6];
            var6 = var10.bind(var0)(var6);
            var6 = var6.ReanimatedLogLevel;
            var6 = var6.error;
            var7.level = var6;
            var6 = false;
            var7.strict = var6;
            var7 = var8.bind(var9)(var7);
        case 420: // try_start_0
            var8 = var4;
            var9 = var5;
            var7 = 16;
            var7 = var9[var7];
            var8 = var8.bind(var0)(var7);
            var7 = var8.enableFreeze;
            var7 = var7.bind(var8)();
        case 448: // try_end0
            _fun100441_ip = 452;
            continue _fun100441;
        case 450: // catch_target0
            CatchBlockStart(arg_register = 7);
        case 452:
            var7 = 17;
            var7 = var5[var7];
            var9 = var4.bind(var0)(var7);
            var8 = var9.setDesignConfig;
            var7 = {};
            var10 = 18;
            var10 = var5[var10];
            var10 = var4.bind(var0)(var10);
            var10 = var10.useTrackNavigatorScreenImpression;
            var7.useTrackNavigatorScreenImpression = var10;
            var7 = var8.bind(var9)(var7);
            var _closure1_slot13 = var6;
            var6 = {};
            var7 = 'function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}';
            var6.code = var7;
            var _closure1_slot14 = var6;
            var6 = var3;
            var3 = 48;
            var3 = var5[var3];
            var6 = var6.bind(var0)(var3);
            var3 = var6.profiledRootComponent;
            var2 = function(arg0) { // Original name: AppContainer, environment: var2
                var1 = arg0;
                var51 = var1.children;
                var19 = var1.appEntryKey;
                var50 = _closure1_slot1;
                var49 = _closure1_slot3;
                var1 = 28;
                var1 = var49[var1];
                var3 = undefined;
                var4 = var50.bind(var3)(var1);
                var2 = var4.useRequestGatewaySocket;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var1 = 'AppContainer:';
                var1 = var5.bind(var1)(var19);
                var1 = var2.bind(var4)(var1);
                var5 = _closure1_slot5;
                var4 = var5.useEffect;
                var2 = function() { // Environment: var0
                    _fun100455: for (var _fun100455_ip = 0;;) switch (_fun100455_ip) {
                        case 0:
                            var2 = _closure1_slot13;
                            if (var2) {
                                _fun100455_ip = 115;
                                continue _fun100455
                            }
                        case 12:
                            var2 = _closure1_slot0;
                            var6 = var2.RNScreensTurboModule;
                            var _closure3_slot0 = var6;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 9;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.runOnUI;
                            var0 = function() { // Original name: e, environment: var0
                                var1 = _closure1_slot0;
                                var0 = _closure3_slot0;
                                var1.RNScreensTurboModule = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var5 = {};
                            var5.RNScreensTurboModule = var6;
                            var0.__closure = var5;
                            var5 = 8891274578898.0;
                            var0.__workletHash = var5;
                            var5 = _closure1_slot14;
                            var0.__initData = var5;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var2)();
                            var0 = true;
                            _closure1_slot13 = var0;
                        case 115:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = new Array(0);
                var1 = var4.bind(var5)(var2, var1);
                var5 = _closure1_slot5;
                var4 = var5.useEffect;
                var2 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var4.bind(var5)(var2, var1);
                var0 = function() { // Original name: useManaContextProviderValue, environment: var0
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 46;
                    var2 = var7[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var2 = var6.useRiveRendererExperiment;
                    var4 = 'AppContainer';
                    var6 = var2.bind(var6)(var4);
                    var _closure3_slot0 = var6;
                    var2 = 47;
                    var2 = var7[var2];
                    var3 = var5.bind(var3)(var2);
                    var2 = var3.useRiveBase64ImageExperiment;
                    var2 = var2.bind(var3)(var4);
                    var _closure3_slot1 = var2;
                    var5 = _closure1_slot5;
                    var4 = var5.useMemo;
                    var3 = new Array(2);
                    var3[0] = var6;
                    var3[1] = var2;
                    var2 = function() { // Environment: var0
                        _fun100459: for (var _fun100459_ip = 0;;) switch (_fun100459_ip) {
                            case 0:
                                var0 = new Array(0);
                                var2 = _closure3_slot0;
                                if (!var2) {
                                    _fun100459_ip = 30;
                                    continue _fun100459
                                }
                            case 14:
                                var3 = var0.push;
                                var2 = 'rive-mobile-renderer';
                                var2 = var3.bind(var0)(var2);
                            case 30:
                                var1 = _closure3_slot1;
                                if (!var1) {
                                    _fun100459_ip = 53;
                                    continue _fun100459
                                }
                            case 37:
                                var2 = var0.push;
                                var1 = 'rive-mobile-base64-image';
                                var1 = var2.bind(var0)(var1);
                            case 53:
                                return var0;
                        }
                    };
                    var4 = var4.bind(var5)(var2, var3);
                    var _closure3_slot2 = var4;
                    var3 = _closure1_slot5;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        var0 = {};
                        var1 = {};
                        var2 = _closure3_slot2;
                        var1.enabledExperiments = var2;
                        var0.experiments = var1;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var13 = var0.bind(var3)();
                var2 = _closure1_slot10;
                var47 = _closure1_slot2;
                var4 = 29;
                var0 = var49[var4];
                var1 = var47.bind(var3)(var0);
                var0 = {};
                var4 = var49[var4];
                var4 = var50.bind(var3)(var4);
                var4 = var4.Profiles;
                var4 = var4.AppContainer;
                var0.profile = var4;
                var6 = _closure1_slot10;
                var4 = 30;
                var4 = var49[var4];
                var4 = var50.bind(var3)(var4);
                var5 = var4.ReanimatedScreenProvider;
                var4 = {};
                var9 = _closure1_slot10;
                var7 = 31;
                var7 = var49[var7];
                var7 = var50.bind(var3)(var7);
                var8 = var7.RootThemeContextProvider;
                var7 = {};
                var12 = _closure1_slot10;
                var10 = 32;
                var10 = var49[var10];
                var10 = var50.bind(var3)(var10);
                var11 = var10.ManaContextProvider;
                var10 = {};
                var10.value = var13;
                var15 = _closure1_slot10;
                var13 = 33;
                var13 = var49[var13];
                var14 = var47.bind(var3)(var13);
                var13 = {};
                var18 = _closure1_slot10;
                var17 = _closure1_slot19;
                var16 = {};
                var16.appEntryKey = var19;
                var21 = _closure1_slot10;
                var19 = 34;
                var19 = var49[var19];
                var19 = var50.bind(var3)(var19);
                var20 = var19.WebViewContextProvider;
                var19 = {};
                var24 = _closure1_slot10;
                var22 = 35;
                var22 = var49[var22];
                var22 = var50.bind(var3)(var22);
                var23 = var22.Router;
                var22 = {};
                var25 = 36;
                var25 = var49[var25];
                var26 = var47.bind(var3)(var25);
                var25 = var26.getHistory;
                var25 = var25.bind(var26)();
                var22.history = var25;
                var27 = _closure1_slot10;
                var26 = _closure1_slot15;
                var25 = {};
                var28 = 37;
                var28 = var49[var28];
                var29 = var47.bind(var3)(var28);
                var28 = {};
                var32 = _closure1_slot10;
                var30 = 38;
                var30 = var49[var30];
                var30 = var50.bind(var3)(var30);
                var31 = var30.PortalProvider;
                var30 = {};
                var35 = _closure1_slot10;
                var33 = 39;
                var33 = var49[var33];
                var33 = var47.bind(var3)(var33);
                var34 = var33.Component;
                var33 = {};
                var38 = _closure1_slot11;
                var36 = 40;
                var36 = var49[var36];
                var37 = var47.bind(var3)(var36);
                var36 = {};
                var41 = _closure1_slot10;
                var39 = 41;
                var39 = var49[var39];
                var40 = var47.bind(var3)(var39);
                var39 = {};
                var40 = var41.bind(var3)(var40, var39);
                var39 = new Array(2);
                var39[0] = var40;
                var42 = _closure1_slot10;
                var48 = 42;
                var40 = var49[var48];
                var40 = var50.bind(var3)(var40);
                var41 = var40.SafeAreaProvider;
                var40 = {};
                var43 = 43;
                var43 = var49[var43];
                var44 = var47.bind(var3)(var43);
                var43 = {};
                var45 = new Array(4);
                var45[0] = var51;
                var51 = _closure1_slot10;
                var48 = var49[var48];
                var48 = var50.bind(var3)(var48);
                var50 = var48.SafeAreaReporter;
                var48 = {};
                var48 = var51.bind(var3)(var50, var48);
                var45[1] = var48;
                var51 = _closure1_slot10;
                var48 = 44;
                var48 = var49[var48];
                var50 = var47.bind(var3)(var48);
                var48 = {};
                var48 = var51.bind(var3)(var50, var48);
                var45[2] = var48;
                var48 = _closure1_slot10;
                var46 = 45;
                var46 = var49[var46];
                var47 = var47.bind(var3)(var46);
                var46 = {};
                var46 = var48.bind(var3)(var47, var46);
                var45[3] = var46;
                var43.children = var45;
                var43 = var38.bind(var3)(var44, var43);
                var40.children = var43;
                var40 = var42.bind(var3)(var41, var40);
                var39[1] = var40;
                var36.children = var39;
                var36 = var38.bind(var3)(var37, var36);
                var33.children = var36;
                var33 = var35.bind(var3)(var34, var33);
                var30.children = var33;
                var30 = var32.bind(var3)(var31, var30);
                var28.children = var30;
                var28 = var27.bind(var3)(var29, var28);
                var25.children = var28;
                var25 = var27.bind(var3)(var26, var25);
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2 = var3.bind(var6)(var2);
            var3 = 49;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'components_native/AppContainer.tsx';
            var3 = var4.bind(var5)(var3);
            var1.default = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 13019, 1661, 660, 33, 1297, 671, 3679, 5323, 4923, 4527, 1229, 1208, 3879, 3990, 5810, 13020, 12884, 4195, 3205, 3878, 795, 3880, 13021, 5814, 1470, 13022, 11577, 13023, 13033, 3140, 13034, 8024, 11908, 12881, 13035, 3886, 13036, 13038, 13040, 5177, 13041, 13043, 13052, 13061, 13062, 1207, 2]);