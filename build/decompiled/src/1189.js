// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = this;
    var _closure1_slot2 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = 'ReactNativeNavigation';
    var2.INTEGRATION_NAME = var3;
    var1 = function(arg0) { // Original name: reactNativeNavigationIntegration, environment: var1
        _fun12929: for (var _fun12929_ip = 0;;) switch (_fun12929_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.navigation;
                var4 = var3.routeChangeTimeoutMs;
                var0 = 1000;
                var5 = undefined;
                if (!(var5 !== var4)) {
                    _fun12929_ip = 32;
                    continue _fun12929
                }
            case 29:
                var0 = var4;
            case 32:
                var _closure2_slot3 = var0;
                var4 = var3.enableTabsInstrumentation;
                var0 = var5 !== var4;
                if (!var0) {
                    _fun12929_ip = 52;
                    continue _fun12929
                }
            case 49:
                var0 = var4;
            case 52:
                var4 = var3.ignoreEmptyBackNavigationTransactions;
                var3 = var5 === var4;
                if (var3) {
                    _fun12929_ip = 68;
                    continue _fun12929
                }
            case 65:
                var3 = var4;
            case 68:
                var _closure2_slot4 = var3;
                var3 = new Array(0);
                var _closure2_slot5 = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.defaultIdleOptions;
                var _closure2_slot6 = var3;
                var3 = null;
                var _closure2_slot7 = var3;
                var4 = function() { // Original name: startIdleNavigationSpan, environment: var1
                    _fun12930: for (var _fun12930_ip = 0;;) switch (_fun12930_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun12930_ip = 22;
                                continue _fun12930
                            }
                        case 12:
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 22:
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var10 = 1;
                            var4 = var0[var10];
                            var0 = undefined;
                            var8 = var5.bind(var0)(var4);
                            var7 = var8.startIdleNavigationSpan;
                            var4 = _closure2_slot0;
                            var5 = null;
                            var6 = var5 == var4;
                            var4 = undefined;
                            if (var6) {
                                _fun12930_ip = 83;
                                continue _fun12930
                            }
                        case 68:
                            var6 = _closure2_slot0;
                            var6 = var6.options;
                            var4 = var6.beforeStartSpan;
                        case 83:
                            if (var4) {
                                _fun12930_ip = 115;
                                continue _fun12930
                            }
                        case 86:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var10];
                            var6 = var6.bind(var0)(var4);
                            var4 = var6.getDefaultIdleNavigationSpanOptions;
                            var6 = var4.bind(var6)();
                            _fun12930_ip = 162;
                            continue _fun12930;
                        case 115:
                            var4 = _closure2_slot0;
                            var11 = var4.options;
                            var9 = var11.beforeStartSpan;
                            var12 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var10];
                            var12 = var12.bind(var0)(var4);
                            var4 = var12.getDefaultIdleNavigationSpanOptions;
                            var4 = var4.bind(var12)();
                            var6 = var9.bind(var11)(var4);
                        case 162:
                            var4 = _closure2_slot6;
                            var4 = var7.bind(var8)(var6, var4);
                            var _closure2_slot2 = var4;
                            if (!(var5 != var4)) {
                                _fun12930_ip = 240;
                                continue _fun12930
                            }
                        case 180:
                            var7 = _closure2_slot2;
                            var6 = var7.setAttribute;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var4 = 3;
                            var4 = var9[var4];
                            var4 = var8.bind(var0)(var4);
                            var5 = var4.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var4 = 4;
                            var4 = var9[var4];
                            var4 = var8.bind(var0)(var4);
                            var4 = var4.SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NATIVE_NAVIGATION;
                            var4 = var6.bind(var7)(var5, var4);
                        case 240:
                            var4 = _closure2_slot4;
                            if (!var4) {
                                _fun12930_ip = 305;
                                continue _fun12930
                            }
                        case 247:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var4 = 5;
                            var4 = var8[var4];
                            var7 = var5.bind(var0)(var4);
                            var6 = var7.ignoreEmptyBackNavigation;
                            var4 = 3;
                            var4 = var8[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.getClient;
                            var5 = var4.bind(var5)();
                            var4 = _closure2_slot2;
                            var4 = var6.bind(var7)(var5, var4);
                        case 305:
                            var8 = _closure2_slot2;
                            var _closure3_slot0 = var8;
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var5 = 5;
                            var5 = var4[var5];
                            var7 = var9.bind(var0)(var5);
                            var6 = var7.ignoreEmptyRouteChangeTransactions;
                            var5 = 3;
                            var5 = var4[var5];
                            var11 = var9.bind(var0)(var5);
                            var5 = var11.getClient;
                            var5 = var5.bind(var11)();
                            var4 = var4[var10];
                            var4 = var9.bind(var0)(var4);
                            var14 = var4.DEFAULT_NAVIGATION_SPAN_NAME;
                            var13 = function() { // Environment: var3
                                var1 = _closure2_slot2;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var17 = var7;
                            var16 = var5;
                            var15 = var8;
                            var3 = var17[var6](var16, var15, var14, var13, var12);
                            var3 = global;
                            var4 = var3.setTimeout;
                            var5 = _closure2_slot9;
                            var3 = var5.bind;
                            var1 = _closure1_slot2;
                            var3 = var3.bind(var5)(var1);
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var0)(var3, var1);
                            var _closure2_slot1 = var1;
                            return var0;
                    }
                };
                var3 = var2.events;
                var5 = var3.bind(var2)();
                var3 = var5.registerCommandListener;
                var3 = var3.bind(var5)(var4);
                if (!var0) {
                    _fun12929_ip = 169;
                    continue _fun12929
                }
            case 148:
                var0 = var2.events;
                var3 = var0.bind(var2)();
                var0 = var3.registerBottomTabPressedListener;
                var0 = var0.bind(var3)(var4);
            case 169:
                var0 = var2.events;
                var3 = var0.bind(var2)();
                var2 = var3.registerComponentWillAppearListener;
                var0 = function(arg0) { // Original name: updateLatestNavigationSpanWithCurrentComponent, environment: var1
                    _fun12932: for (var _fun12932_ip = 0;;) switch (_fun12932_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun12932_ip = 546;
                                continue _fun12932
                            }
                        case 16:
                            var1 = _closure2_slot7;
                            if (!var1) {
                                _fun12932_ip = 46;
                                continue _fun12932
                            }
                        case 23:
                            var3 = var2.componentId;
                            var1 = _closure2_slot7;
                            var1 = var1.componentId;
                            if (!(var3 !== var1)) {
                                _fun12932_ip = 536;
                                continue _fun12932
                            }
                        case 46:
                            var3 = _closure2_slot10;
                            var1 = undefined;
                            var3 = var3.bind(var1)();
                            var5 = _closure2_slot5;
                            var4 = var5.includes;
                            var3 = var2.componentId;
                            var4 = var4.bind(var5)(var3);
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var5 = 3;
                            var6 = var9[var5];
                            var10 = var8.bind(var1)(var6);
                            var7 = var10.spanToJSON;
                            var6 = _closure2_slot2;
                            var6 = var7.bind(var10)(var6);
                            var7 = var6.description;
                            var6 = 1;
                            var6 = var9[var6];
                            var6 = var8.bind(var1)(var6);
                            var6 = var6.DEFAULT_NAVIGATION_SPAN_NAME;
                            if (!(var7 === var6)) {
                                _fun12932_ip = 162;
                                continue _fun12932
                            }
                        case 141:
                            var8 = _closure2_slot2;
                            var7 = var8.updateName;
                            var6 = var2.componentName;
                            var6 = var7.bind(var8)(var6);
                        case 162:
                            var7 = _closure2_slot2;
                            var6 = var7.setAttributes;
                            var11 = _closure1_slot3;
                            var13 = {};
                            var8 = var2.componentName;
                            var13['route.name'] = var8;
                            var8 = var2.componentId;
                            var13['route.component_id'] = var8;
                            var8 = var2.componentType;
                            var13['route.component_type'] = var8;
                            var13['route.has_been_seen'] = var4;
                            var4 = _closure2_slot7;
                            var8 = null;
                            var9 = var8 == var4;
                            var4 = undefined;
                            if (var9) {
                                _fun12932_ip = 241;
                                continue _fun12932
                            }
                        case 231:
                            var9 = _closure2_slot7;
                            var4 = var9.componentName;
                        case 241:
                            var13['previous_route.name'] = var4;
                            var4 = _closure2_slot7;
                            var9 = var8 == var4;
                            var4 = undefined;
                            if (var9) {
                                _fun12932_ip = 269;
                                continue _fun12932
                            }
                        case 259:
                            var9 = _closure2_slot7;
                            var4 = var9.componentId;
                        case 269:
                            var13['previous_route.component_id'] = var4;
                            var4 = _closure2_slot7;
                            var9 = var8 == var4;
                            var4 = undefined;
                            if (var9) {
                                _fun12932_ip = 297;
                                continue _fun12932
                            }
                        case 287:
                            var9 = _closure2_slot7;
                            var4 = var9.componentType;
                        case 297:
                            var13['previous_route.component_type'] = var4;
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var10 = var4[var5];
                            var10 = var9.bind(var1)(var10);
                            var12 = var10.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var10 = 'component';
                            var10 = var11.bind(var1)(var13, var12, var10);
                            var4 = var4[var5];
                            var4 = var9.bind(var1)(var4);
                            var9 = var4.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var4 = 'navigation';
                            var4 = var11.bind(var1)(var10, var9, var4);
                            var4 = var6.bind(var7)(var4);
                            var4 = _closure2_slot0;
                            if (!(var8 != var4)) {
                                _fun12932_ip = 396;
                                continue _fun12932
                            }
                        case 375:
                            var7 = _closure2_slot0;
                            var6 = var7.setCurrentRoute;
                            var4 = var2.componentName;
                            var4 = var6.bind(var7)(var4);
                        case 396:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.addBreadcrumb;
                            var3 = {
                                'category': 'navigation',
                                'type': 'navigation'
                            };
                            var9 = var2.componentName;
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var7 = var6.concat;
                            var6 = 'Navigation to ';
                            var6 = var7.bind(var6)(var9);
                            var3.message = var6;
                            var6 = {};
                            var7 = _closure2_slot7;
                            var8 = var8 == var7;
                            var7 = undefined;
                            if (var8) {
                                _fun12932_ip = 488;
                                continue _fun12932
                            }
                        case 478:
                            var8 = _closure2_slot7;
                            var7 = var8.componentName;
                        case 488:
                            var6.from = var7;
                            var7 = var2.componentName;
                            var6.to = var7;
                            var3.data = var6;
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure2_slot8;
                            var3 = var2.componentId;
                            var3 = var4.bind(var1)(var3);
                            _closure2_slot7 = var2;
                            _closure2_slot2 = var1;
                            _fun12932_ip = 546;
                            continue _fun12932;
                        case 536:
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 546:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                var0 = function(arg0) { // Original name: pushRecentComponentId, environment: var1
                    _fun12933: for (var _fun12933_ip = 0;;) switch (_fun12933_ip) {
                        case 0:
                            var3 = _closure2_slot5;
                            var2 = var3.push;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0);
                            var0 = _closure2_slot5;
                            var0 = var0.length;
                            var4 = 200;
                            if (!(var0 > var4)) {
                                _fun12933_ip = 67;
                                continue _fun12933
                            }
                        case 36:
                            var3 = _closure2_slot5;
                            var2 = var3.slice;
                            var0 = _closure2_slot5;
                            var0 = var0.length;
                            var0 = var0 - var4;
                            var0 = var2.bind(var3)(var0);
                            _closure2_slot5 = var0;
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot8 = var0;
                var0 = function() { // Original name: discardLatestNavigationSpan, environment: var1
                    _fun12934: for (var _fun12934_ip = 0;;) switch (_fun12934_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun12934_ip = 82;
                                continue _fun12934
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.isSentrySpan;
                            var2 = _closure2_slot2;
                            var2 = var3.bind(var4)(var2);
                            if (!var2) {
                                _fun12934_ip = 65;
                                continue _fun12934
                            }
                        case 53:
                            var3 = _closure2_slot2;
                            var2 = false;
                            var3._sampled = var2;
                        case 65:
                            var3 = _closure2_slot2;
                            var2 = var3.end;
                            var2 = var2.bind(var3)();
                            _closure2_slot2 = var1;
                        case 82:
                            var1 = _closure2_slot10;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var _closure2_slot9 = var0;
                var0 = function() { // Original name: clearStateChangeTimeout, environment: var1
                    _fun12935: for (var _fun12935_ip = 0;;) switch (_fun12935_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun12935_ip = 34;
                                continue _fun12935
                            }
                        case 13:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var2 = _closure2_slot1;
                            var2 = var3.bind(var0)(var2);
                            _closure2_slot1 = var0;
                        case 34:
                            return var0;
                    }
                };
                var _closure2_slot10 = var0;
                var0 = {};
                var2 = 'ReactNativeNavigation';
                var0.name = var2;
                var1 = function(arg0) { // Original name: afterAllSetup, environment: var1
                    _fun12936: for (var _fun12936_ip = 0;;) switch (_fun12936_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getReactNativeTracingIntegration;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                            var _closure2_slot0 = var1;
                            if (!var1) {
                                _fun12936_ip = 95;
                                continue _fun12936
                            }
                        case 49:
                            var1 = {};
                            var3 = _closure2_slot0;
                            var3 = var3.options;
                            var3 = var3.finalTimeoutMs;
                            var1.finalTimeout = var3;
                            var3 = _closure2_slot0;
                            var3 = var3.options;
                            var3 = var3.idleTimeoutMs;
                            var1.idleTimeout = var3;
                            _closure2_slot6 = var1;
                        case 95:
                            return var0;
                    }
                };
                var0.afterAllSetup = var1;
                return var0;
        }
    };
    var2.reactNativeNavigationIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 1159, 1165, 817, 1157, 1160, 1118]);