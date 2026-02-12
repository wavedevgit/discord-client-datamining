// components_native/AppContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun100471: for (var _fun100471_ip = 0;;) switch (_fun100471_ip) {
        case 0:
            var11 = require;
            var14 = metroImportDefault;
            var13 = exports;
            var12 = dependencyMap;
            var0 = global;
            var _closure1_slot0 = var0;
            var4 = var11;
            var _closure1_slot1 = var11;
            var3 = var14;
            var _closure1_slot2 = var14;
            var1 = var13;
            var5 = var12;
            var _closure1_slot3 = var12;
            var0 = undefined;
            var6 = undefined;
            var7 = function arg0() {
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
                    _fun100473: for (var _fun100473_ip = 0;;) switch (_fun100473_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.flex;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            if (!var3) {
                                _fun100473_ip = 39;
                                continue _fun100473
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
            var _closure1_slot19 = var7;
            var7 = function() {
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
            var _closure1_slot20 = var7;
            var7 = function arg0() {
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
                    _fun100476: for (var _fun100476_ip = 0;;) switch (_fun100476_ip) {
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
                                _fun100476_ip = 373;
                                continue _fun100476
                            }
                        case 44:
                            var3 = var4.isReady;
                            var3 = var3.bind(var4)();
                            if (!var3) {
                                _fun100476_ip = 373;
                                continue _fun100476
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
                                _fun100476_ip = 133;
                                continue _fun100476
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
                                _fun100476_ip = 187;
                                continue _fun100476
                            }
                        case 184:
                            var4 = var6;
                        case 187:
                            if (!var4) {
                                _fun100476_ip = 230;
                                continue _fun100476
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
                                _fun100476_ip = 319;
                                continue _fun100476
                            }
                        case 301:
                            var4 = _closure1_slot7;
                            var3 = var4.getChannelId;
                            var3 = var3.bind(var4)();
                            var2 = var5 !== var3;
                        case 319:
                            if (!var2) {
                                _fun100476_ip = 373;
                                continue _fun100476
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
                    _fun100477: for (var _fun100477_ip = 0;;) switch (_fun100477_ip) {
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
                                _fun100477_ip = 83;
                                continue _fun100477
                            }
                        case 57:
                            var7 = var0.routes;
                            var1 = 0;
                            var1 = var7[var1];
                            var4 = var4 == var1;
                            var5 = undefined;
                            if (var4) {
                                _fun100477_ip = 83;
                                continue _fun100477
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
                    _fun100478: for (var _fun100478_ip = 0;;) switch (_fun100478_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            if (var2) {
                                _fun100478_ip = 55;
                                continue _fun100478
                            }
                        case 17:
                            var2 = global;
                            var5 = var2.setTimeout;
                            var4 = undefined;
                            var3 = function() { // Environment: var1
                                _fun100479: for (var _fun100479_ip = 0;;) switch (_fun100479_ip) {
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
                                            _fun100479_ip = 125;
                                            continue _fun100479
                                        }
                                    case 41:
                                        var2 = var3.isReady;
                                        var2 = var2.bind(var3)();
                                        if (!var2) {
                                            _fun100479_ip = 125;
                                            continue _fun100479
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
                var7 = _closure1_slot20;
                var0.onReady = var7;
                var0.onStateChange = var6;
                var0.initialState = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot21 = var7;
            var7 = function arg0() {
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
            var _closure1_slot22 = var7;
            var7 = function arg0() {
                _fun100483: for (var _fun100483_ip = 0;;) switch (_fun100483_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.children;
                        var3 = var0.appEntryKey;
                        var0 = 'main';
                        if (!(var0 !== var3)) {
                            _fun100483_ip = 60;
                            continue _fun100483
                        }
                    case 22:
                        var2 = 'share';
                        var0 = var1;
                        if (!(var2 === var3)) {
                            _fun100483_ip = 58;
                            continue _fun100483
                        }
                    case 33:
                        var5 = _closure1_slot10;
                        var4 = _closure1_slot22;
                        var3 = {};
                        var3.children = var1;
                        var2 = undefined;
                        var0 = var5.bind(var2)(var4, var3);
                    case 58:
                        _fun100483_ip = 85;
                        continue _fun100483;
                    case 60:
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot21;
                        var2 = {};
                        var2.children = var1;
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2);
                    case 85:
                        return var0;
                }
            };
            var _closure1_slot23 = var7;
            var7 = global;
            var10 = var7.Object;
            var9 = var10.defineProperty;
            var8 = {};
            var7 = true;
            var8.value = var7;
            var7 = '__esModule';
            var7 = var9.bind(var10)(var13, var7, var8);
            var7 = 0;
            var7 = var12[var7];
            var7 = var14.bind(var0)(var7);
            var _closure1_slot4 = var7;
            var13 = 1;
            var8 = var12[var13];
            var7 = arg3;
            var7 = var7.bind(var0)(var8);
            var _closure1_slot5 = var7;
            var7 = 2;
            var7 = var12[var7];
            var7 = var11.bind(var0)(var7);
            var8 = var7.NativeModules;
            var7 = var7.Platform;
            var7 = 3;
            var7 = var12[var7];
            var7 = var11.bind(var0)(var7);
            var7 = var7.handleHistoryStoreNavigationChange;
            var _closure1_slot6 = var7;
            var7 = 4;
            var7 = var12[var7];
            var7 = var14.bind(var0)(var7);
            var _closure1_slot7 = var7;
            var7 = 5;
            var7 = var12[var7];
            var7 = var11.bind(var0)(var7);
            var8 = var7.AnalyticEvents;
            var _closure1_slot8 = var8;
            var7 = var7.ComponentActions;
            var _closure1_slot9 = var7;
            var7 = 6;
            var7 = var12[var7];
            var7 = var11.bind(var0)(var7);
            var8 = var7.jsx;
            var6 = var8;
            var _closure1_slot10 = var8;
            var7 = var7.jsxs;
            var _closure1_slot11 = var7;
            var7 = 7;
            var7 = var12[var7];
            var9 = var11.bind(var0)(var7);
            var8 = var9.createStyles;
            var7 = {};
            var10 = {};
            var10.flex = var13;
            var7.flex = var10;
            var10 = {};
            var13 = 8;
            var13 = var12[var13];
            var13 = var14.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.ANDROID_NAVIGATION_BAR_BACKGROUND;
            var10.backgroundColor = var13;
            var7.rootBackgroundColor = var10;
            var7 = var8.bind(var9)(var7);
            var _closure1_slot12 = var7;
            var7 = 9;
            var8 = var12[var7];
            var10 = var11.bind(var0)(var8);
            var9 = var10.configureReanimatedLogger;
            var8 = {};
            var7 = var12[var7];
            var7 = var11.bind(var0)(var7);
            var7 = var7.ReanimatedLogLevel;
            var7 = var7.error;
            var8.level = var7;
            var7 = false;
            var8.strict = var7;
            var8 = var9.bind(var10)(var8);
        case 425: // try_start_0
            var9 = var4;
            var10 = var5;
            var8 = 16;
            var8 = var10[var8];
            var9 = var9.bind(var0)(var8);
            var8 = var9.enableFreeze;
            var8 = var8.bind(var9)();
        case 453: // try_end0
            _fun100471_ip = 457;
            continue _fun100471;
        case 455: // catch_target0
            CatchBlockStart(arg_register = 8);
        case 457:
            var8 = 17;
            var8 = var5[var8];
            var10 = var4.bind(var0)(var8);
            var9 = var10.setDesignConfig;
            var8 = {};
            var11 = 18;
            var11 = var5[var11];
            var11 = var4.bind(var0)(var11);
            var11 = var11.useTrackNavigatorScreenImpression;
            var8.useTrackNavigatorScreenImpression = var11;
            var8 = var9.bind(var10)(var8);
            var _closure1_slot13 = var7;
            var7 = {};
            var8 = 'function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}';
            var7.code = var8;
            var _closure1_slot14 = var7;
            var8 = var6;
            var6 = var3;
            var3 = 28;
            var3 = var5[var3];
            var7 = var6.bind(var0)(var3);
            var3 = {};
            var3 = var8.bind(var0)(var7, var3);
            var _closure1_slot15 = var3;
            var3 = 29;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.SafeAreaReporter;
            var3 = {};
            var3 = var8.bind(var0)(var7, var3);
            var _closure1_slot16 = var3;
            var3 = 30;
            var3 = var5[var3];
            var7 = var6.bind(var0)(var3);
            var3 = {};
            var3 = var8.bind(var0)(var7, var3);
            var _closure1_slot17 = var3;
            var3 = 31;
            var3 = var5[var3];
            var7 = var6.bind(var0)(var3);
            var3 = {};
            var3 = var8.bind(var0)(var7, var3);
            var _closure1_slot18 = var3;
            var3 = 48;
            var3 = var5[var3];
            var6 = var6.bind(var0)(var3);
            var3 = var6.profiledRootComponent;
            var2 = function arg0() {
                var1 = arg0;
                var47 = var1.children;
                var19 = var1.appEntryKey;
                var41 = _closure1_slot1;
                var45 = _closure1_slot3;
                var1 = 32;
                var1 = var45[var1];
                var3 = undefined;
                var4 = var41.bind(var3)(var1);
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
                    _fun100485: for (var _fun100485_ip = 0;;) switch (_fun100485_ip) {
                        case 0:
                            var2 = _closure1_slot13;
                            if (var2) {
                                _fun100485_ip = 115;
                                continue _fun100485
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
                            var0 = function() {
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
                var0 = function() {
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
                        _fun100489: for (var _fun100489_ip = 0;;) switch (_fun100489_ip) {
                            case 0:
                                var0 = new Array(0);
                                var2 = _closure3_slot0;
                                if (!var2) {
                                    _fun100489_ip = 30;
                                    continue _fun100489
                                }
                            case 14:
                                var3 = var0.push;
                                var2 = 'rive-mobile-renderer';
                                var2 = var3.bind(var0)(var2);
                            case 30:
                                var1 = _closure3_slot1;
                                if (!var1) {
                                    _fun100489_ip = 53;
                                    continue _fun100489
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
                var44 = _closure1_slot2;
                var4 = 33;
                var0 = var45[var4];
                var1 = var44.bind(var3)(var0);
                var0 = {};
                var4 = var45[var4];
                var4 = var41.bind(var3)(var4);
                var4 = var4.Profiles;
                var4 = var4.AppContainer;
                var0.profile = var4;
                var6 = _closure1_slot10;
                var4 = 34;
                var4 = var45[var4];
                var4 = var41.bind(var3)(var4);
                var5 = var4.ReanimatedScreenProvider;
                var4 = {};
                var9 = _closure1_slot10;
                var7 = 35;
                var7 = var45[var7];
                var7 = var41.bind(var3)(var7);
                var8 = var7.RootThemeContextProvider;
                var7 = {};
                var12 = _closure1_slot10;
                var10 = 36;
                var10 = var45[var10];
                var10 = var41.bind(var3)(var10);
                var11 = var10.ManaContextProvider;
                var10 = {};
                var10.value = var13;
                var15 = _closure1_slot10;
                var13 = 37;
                var13 = var45[var13];
                var14 = var44.bind(var3)(var13);
                var13 = {};
                var18 = _closure1_slot10;
                var17 = _closure1_slot23;
                var16 = {};
                var16.appEntryKey = var19;
                var21 = _closure1_slot10;
                var19 = 38;
                var19 = var45[var19];
                var19 = var41.bind(var3)(var19);
                var20 = var19.WebViewContextProvider;
                var19 = {};
                var24 = _closure1_slot10;
                var22 = 39;
                var22 = var45[var22];
                var22 = var41.bind(var3)(var22);
                var23 = var22.Router;
                var22 = {};
                var25 = 40;
                var25 = var45[var25];
                var26 = var44.bind(var3)(var25);
                var25 = var26.getHistory;
                var25 = var25.bind(var26)();
                var22.history = var25;
                var27 = _closure1_slot10;
                var26 = _closure1_slot19;
                var25 = {};
                var28 = 41;
                var28 = var45[var28];
                var29 = var44.bind(var3)(var28);
                var28 = {};
                var32 = _closure1_slot10;
                var30 = 42;
                var30 = var45[var30];
                var30 = var41.bind(var3)(var30);
                var31 = var30.PortalProvider;
                var30 = {};
                var35 = _closure1_slot10;
                var33 = 43;
                var33 = var45[var33];
                var33 = var44.bind(var3)(var33);
                var34 = var33.Component;
                var33 = {};
                var38 = _closure1_slot11;
                var36 = 44;
                var36 = var45[var36];
                var37 = var44.bind(var3)(var36);
                var36 = {};
                var40 = _closure1_slot15;
                var39 = new Array(2);
                var39[0] = var40;
                var42 = _closure1_slot10;
                var40 = 29;
                var40 = var45[var40];
                var40 = var41.bind(var3)(var40);
                var41 = var40.SafeAreaProvider;
                var40 = {};
                var43 = 45;
                var43 = var45[var43];
                var44 = var44.bind(var3)(var43);
                var43 = {};
                var45 = new Array(4);
                var45[0] = var47;
                var47 = _closure1_slot16;
                var45[1] = var47;
                var47 = _closure1_slot17;
                var45[2] = var47;
                var46 = _closure1_slot18;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 13059, 1672, 660, 33, 1297, 671, 3717, 5429, 4937, 4570, 1229, 1208, 3917, 4026, 5926, 13060, 12924, 4237, 3247, 3916, 795, 3918, 13061, 5930, 1470, 13062, 5241, 13063, 13074, 13083, 11643, 13084, 13092, 3183, 13093, 8190, 11922, 12921, 13094, 3923, 13095, 13065, 13097, 13100, 13101, 1207, 2]);