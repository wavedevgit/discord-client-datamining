// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
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
    var _closure1_slot2 = var3;
    var3 = 'ReactNavigation';
    var2.INTEGRATION_NAME = var3;
    var3 = function() {
        _fun12740: for (var _fun12740_ip = 0;;) switch (_fun12740_ip) {
            case 0:
                var8 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun12740_ip = 23;
                    continue _fun12740
                }
            case 15:
                var0 = arguments[var2];
                if (!(var8 === var0)) {
                    _fun12740_ip = 27;
                    continue _fun12740
                }
            case 23:
                var0 = {};
                _fun12740_ip = 31;
                continue _fun12740;
            case 27:
                var0 = arguments[var2];
            case 31:
                var2 = var0.routeChangeTimeoutMs;
                var6 = 1000;
                if (!(var8 !== var2)) {
                    _fun12740_ip = 50;
                    continue _fun12740
                }
            case 47:
                var6 = var2;
            case 50:
                var _closure2_slot6 = var6;
                var2 = var0.enableTimeToInitialDisplay;
                var5 = var8 !== var2;
                if (!var5) {
                    _fun12740_ip = 70;
                    continue _fun12740
                }
            case 67:
                var5 = var2;
            case 70:
                var _closure2_slot7 = var5;
                var2 = var0.ignoreEmptyBackNavigationTransactions;
                var4 = var8 === var2;
                if (var4) {
                    _fun12740_ip = 90;
                    continue _fun12740
                }
            case 87:
                var4 = var2;
            case 90:
                var _closure2_slot8 = var4;
                var2 = var0.enableTimeToInitialDisplayForPreloadedRoutes;
                var3 = var8 !== var2;
                if (!var3) {
                    _fun12740_ip = 110;
                    continue _fun12740
                }
            case 107:
                var3 = var2;
            case 110:
                var0 = var0.useDispatchedActionData;
                var2 = var8 !== var0;
                if (!var2) {
                    _fun12740_ip = 126;
                    continue _fun12740
                }
            case 123:
                var2 = var0;
            case 126:
                var _closure2_slot9 = var2;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 1;
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.defaultIdleOptions;
                var _closure2_slot10 = var7;
                var7 = false;
                var _closure2_slot11 = var7;
                var7 = new Array(0);
                var _closure2_slot12 = var7;
                if (!var5) {
                    _fun12740_ip = 232;
                    continue _fun12740
                }
            case 180:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 2;
                var0 = var9[var0];
                var0 = var7.bind(var8)(var0);
                var7 = var0.NATIVE;
                var0 = var7.initNativeReactNavigationNewFrameTracking;
                var8 = var0.bind(var7)();
                var7 = var8.catch;
                var0 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.debug;
                    var2 = var3.error;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '';
                    var5 = 'ReactNavigation';
                    var4 = ' Failed to initialize native new frame tracking: ';
                    var1 = arg0;
                    var1 = var7.bind(var6)(var5, var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var7.bind(var8)(var0);
            case 232:
                var0 = function arg0() {
                    _fun12742: for (var _fun12742_ip = 0;;) switch (_fun12742_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = undefined;
                            var1 = undefined;
                            var2 = arguments.length;
                            var13 = 1;
                            var15 = var2 > var13;
                            if (!var15) {
                                _fun12742_ip = 30;
                                continue _fun12742
                            }
                        case 22:
                            var2 = arguments[var13];
                            var15 = var0 !== var2;
                        case 30:
                            if (!var15) {
                                _fun12742_ip = 37;
                                continue _fun12742
                            }
                        case 33:
                            var15 = arguments[var13];
                        case 37:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun12742_ip = 75;
                                continue _fun12742
                            }
                        case 47:
                            var1 = null;
                            var4 = var1 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun12742_ip = 69;
                                continue _fun12742
                            }
                        case 58:
                            var4 = var3.data;
                            var1 = var4.noop;
                        case 69:
                            if (var1) {
                                _fun12742_ip = 1008;
                                continue _fun12742
                            }
                        case 75:
                            var1 = _closure2_slot9;
                            var8 = undefined;
                            if (!var1) {
                                _fun12742_ip = 113;
                                continue _fun12742
                            }
                        case 84:
                            var1 = null;
                            var4 = var1 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun12742_ip = 110;
                                continue _fun12742
                            }
                        case 95:
                            var3 = var3.data;
                            var3 = var3.action;
                            var1 = var3.type;
                        case 110:
                            var8 = var1;
                        case 113:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun12742_ip = 149;
                                continue _fun12742
                            }
                        case 120:
                            if (!var8) {
                                _fun12742_ip = 149;
                                continue _fun12742
                            }
                        case 123:
                            var3 = ['PRELOAD', 'SET_PARAMS', 'OPEN_DRAWER', 'CLOSE_DRAWER', 'TOGGLE_DRAWER'];
                            var1 = var3.includes;
                            var1 = var1.bind(var3)(var8);
                            if (var1) {
                                _fun12742_ip = 925;
                                continue _fun12742
                            }
                        case 149:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun12742_ip = 246;
                                continue _fun12742
                            }
                        case 156:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 3;
                            var1 = var4[var1];
                            var1 = var3.bind(var0)(var1);
                            var4 = var1.debug;
                            var3 = var4.log;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var9 = var1.concat;
                            var7 = '';
                            var6 = 'ReactNavigation';
                            var1 = ' A transaction was detected that turned out to be a noop, discarding.';
                            var1 = var9.bind(var7)(var6, var1);
                            var1 = var3.bind(var4)(var1);
                            var1 = _closure2_slot16;
                            var1 = var1.bind(var0)();
                            var1 = _closure2_slot17;
                            var1 = var1.bind(var0)();
                        case 246:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var13];
                            var10 = var3.bind(var0)(var1);
                            var9 = var10.startIdleNavigationSpan;
                            var1 = _closure2_slot1;
                            var6 = null;
                            var3 = var6 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun12742_ip = 302;
                                continue _fun12742
                            }
                        case 287:
                            var3 = _closure2_slot1;
                            var3 = var3.options;
                            var1 = var3.beforeStartSpan;
                        case 302:
                            if (var1) {
                                _fun12742_ip = 334;
                                continue _fun12742
                            }
                        case 305:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var13];
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.getDefaultIdleNavigationSpanOptions;
                            var7 = var1.bind(var3)();
                            _fun12742_ip = 381;
                            continue _fun12742;
                        case 334:
                            var1 = _closure2_slot1;
                            var11 = var1.options;
                            var3 = var11.beforeStartSpan;
                            var12 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var13];
                            var12 = var12.bind(var0)(var1);
                            var1 = var12.getDefaultIdleNavigationSpanOptions;
                            var1 = var1.bind(var12)();
                            var7 = var3.bind(var11)(var1);
                        case 381:
                            var1 = global;
                            var14 = var1.Object;
                            var12 = var14.assign;
                            var17 = var1.Object;
                            var16 = var17.assign;
                            var11 = _closure2_slot10;
                            var3 = {};
                            var11 = var16.bind(var17)(var3, var11);
                            var3 = {};
                            var3.isAppRestart = var15;
                            var3 = var12.bind(var14)(var11, var3);
                            var3 = var9.bind(var10)(var7, var3);
                            var _closure2_slot3 = var3;
                            if (!(var6 != var3)) {
                                _fun12742_ip = 504;
                                continue _fun12742
                            }
                        case 444:
                            var10 = _closure2_slot3;
                            var9 = var10.setAttribute;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var3 = 3;
                            var3 = var12[var3];
                            var3 = var11.bind(var0)(var3);
                            var7 = var3.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var3 = 7;
                            var3 = var12[var3];
                            var3 = var11.bind(var0)(var3);
                            var3 = var3.SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION;
                            var3 = var9.bind(var10)(var7, var3);
                        case 504:
                            var3 = _closure2_slot3;
                            if (!(var6 != var3)) {
                                _fun12742_ip = 554;
                                continue _fun12742
                            }
                        case 512:
                            var7 = _closure2_slot3;
                            var6 = var7.setAttribute;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var3 = 8;
                            var3 = var10[var3];
                            var3 = var9.bind(var0)(var3);
                            var3 = var3.SEMANTIC_ATTRIBUTE_NAVIGATION_ACTION_TYPE;
                            var3 = var6.bind(var7)(var3, var8);
                        case 554:
                            var3 = _closure2_slot8;
                            if (!var3) {
                                _fun12742_ip = 619;
                                continue _fun12742
                            }
                        case 561:
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var3 = 9;
                            var3 = var10[var3];
                            var9 = var6.bind(var0)(var3);
                            var7 = var9.ignoreEmptyBackNavigation;
                            var3 = 3;
                            var3 = var10[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.getClient;
                            var6 = var3.bind(var6)();
                            var3 = _closure2_slot3;
                            var3 = var7.bind(var9)(var6, var3);
                        case 619:
                            var11 = _closure2_slot3;
                            var _closure3_slot0 = var11;
                            var12 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var3 = 9;
                            var3 = var6[var3];
                            var10 = var12.bind(var0)(var3);
                            var9 = var10.ignoreEmptyRouteChangeTransactions;
                            var3 = 3;
                            var7 = var6[var3];
                            var14 = var12.bind(var0)(var7);
                            var7 = var14.getClient;
                            var7 = var7.bind(var14)();
                            var6 = var6[var13];
                            var6 = var12.bind(var0)(var6);
                            var19 = var6.DEFAULT_NAVIGATION_SPAN_NAME;
                            var18 = function() { // Environment: var5
                                var1 = _closure2_slot3;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var22 = var10;
                            var21 = var7;
                            var20 = var11;
                            var5 = var22[var9](var21, var20, var19, var18, var17);
                            var5 = _closure2_slot7;
                            if (!var5) {
                                _fun12742_ip = 719;
                                continue _fun12742
                            }
                        case 715:
                            var5 = _closure2_slot3;
                        case 719:
                            if (!var5) {
                                _fun12742_ip = 896;
                                continue _fun12742
                            }
                        case 725:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var4 = 2;
                            var4 = var9[var4];
                            var4 = var7.bind(var0)(var4);
                            var6 = var4.NATIVE;
                            var5 = var6.setActiveSpanId;
                            var10 = _closure2_slot3;
                            var4 = var10.spanContext;
                            var4 = var4.bind(var10)();
                            var4 = var4.spanId;
                            var4 = var5.bind(var6)(var4);
                            var4 = var9[var3];
                            var6 = var7.bind(var0)(var4);
                            var5 = var6.startInactiveSpan;
                            var4 = {
                                'op': 'navigation.processing',
                                'name': 'Navigation dispatch to navigation cancelled or screen mounted'
                            };
                            var10 = var9[var3];
                            var12 = var7.bind(var0)(var10);
                            var11 = var12.spanToJSON;
                            var10 = _closure2_slot3;
                            var10 = var11.bind(var12)(var10);
                            var10 = var10.start_timestamp;
                            var4.startTime = var10;
                            var6 = var5.bind(var6)(var4);
                            var _closure2_slot4 = var6;
                            var5 = var6.setAttribute;
                            var3 = var9[var3];
                            var3 = var7.bind(var0)(var3);
                            var4 = var3.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var3 = 7;
                            var3 = var9[var3];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION;
                            var3 = var5.bind(var6)(var4, var3);
                        case 896:
                            var4 = var1.setTimeout;
                            var3 = _closure2_slot16;
                            var1 = _closure2_slot6;
                            var1 = var4.bind(var0)(var3, var1);
                            var _closure2_slot5 = var1;
                            _fun12742_ip = 1082;
                            continue _fun12742;
                        case 925:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 3;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.debug;
                            var2 = var3.log;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var7 = var1.concat;
                            var22 = '';
                            var21 = 'ReactNavigation';
                            var20 = ' Navigation action is ';
                            var18 = ', not starting navigation span.';
                            var19 = var8;
                            var1 = var22[var7](var21, var20, var19, var18, var17);
                            var1 = var2.bind(var3)(var1);
                            _fun12742_ip = 1082;
                            continue _fun12742;
                        case 1008:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 3;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.debug;
                            var2 = var3.log;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var5 = '';
                            var4 = 'ReactNavigation';
                            var1 = ' Navigation action is a noop, not starting navigation span.';
                            var1 = var6.bind(var5)(var4, var1);
                            var1 = var2.bind(var3)(var1);
                        case 1082:
                            return var0;
                    }
                };
                var _closure2_slot13 = var0;
                var0 = function() {
                    _fun12744: for (var _fun12744_ip = 0;;) switch (_fun12744_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var5 = 3;
                            var1 = var0[var5];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.timestampInSeconds;
                            var9 = var1.bind(var2)();
                            var11 = _closure2_slot2;
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun12744_ip = 122;
                                continue _fun12744
                            }
                        case 49:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var5];
                            var2 = var4.bind(var0)(var2);
                            var6 = var2.debug;
                            var4 = var6.warn;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var10 = var2.concat;
                            var8 = '';
                            var7 = 'ReactNavigation';
                            var2 = ' Missing navigation container ref. Route transactions will not be sent.';
                            var2 = var10.bind(var8)(var7, var2);
                            var2 = var4.bind(var6)(var2);
                            _fun12744_ip = 922;
                            continue _fun12744;
                        case 122:
                            var4 = _closure2_slot0;
                            var2 = var4.getCurrentRoute;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun12744_ip = 212;
                                continue _fun12744
                            }
                        case 139:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var5];
                            var4 = var6.bind(var0)(var4);
                            var7 = var4.debug;
                            var6 = var7.log;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var12 = var4.concat;
                            var10 = '[';
                            var8 = 'ReactNavigation';
                            var4 = '] Navigation state changed, but no route is rendered.';
                            var4 = var12.bind(var10)(var8, var4);
                            var4 = var6.bind(var7)(var4);
                            _fun12744_ip = 922;
                            continue _fun12744;
                        case 212:
                            var4 = _closure2_slot3;
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            if (var4) {
                                _fun12744_ip = 292;
                                continue _fun12744
                            }
                        case 227:
                            var4 = var12[var5];
                            var4 = var10.bind(var0)(var4);
                            var7 = var4.debug;
                            var6 = var7.log;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var14 = var4.concat;
                            var13 = '[';
                            var8 = 'ReactNavigation';
                            var4 = '] Navigation state changed, but navigation transaction was not started on dispatch.';
                            var4 = var14.bind(var13)(var8, var4);
                            var4 = var6.bind(var7)(var4);
                            _fun12744_ip = 922;
                            continue _fun12744;
                        case 292:
                            var4 = 10;
                            var4 = var12[var4];
                            var8 = var10.bind(var0)(var4);
                            var7 = var8.addTimeToInitialDisplayFallback;
                            var6 = _closure2_slot3;
                            var4 = var6.spanContext;
                            var4 = var4.bind(var6)();
                            var6 = var4.spanId;
                            var4 = 2;
                            var4 = var12[var4];
                            var4 = var10.bind(var0)(var4);
                            var10 = var4.NATIVE;
                            var4 = var10.getNewScreenTimeToDisplay;
                            var4 = var4.bind(var10)();
                            var4 = var7.bind(var8)(var6, var4);
                            if (!var11) {
                                _fun12744_ip = 384;
                                continue _fun12744
                            }
                        case 367:
                            var6 = var11.key;
                            var4 = var2.key;
                            if (!(var6 !== var4)) {
                                _fun12744_ip = 924;
                                continue _fun12744
                            }
                        case 384:
                            var7 = _closure2_slot12;
                            var6 = var7.includes;
                            var4 = var2.key;
                            var4 = var6.bind(var7)(var4);
                            var7 = _closure2_slot4;
                            var6 = null;
                            if (!(var6 != var7)) {
                                _fun12744_ip = 464;
                                continue _fun12744
                            }
                        case 413:
                            var10 = _closure2_slot4;
                            var8 = var10.updateName;
                            var14 = var2.name;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var13 = var7.concat;
                            var12 = 'Navigation dispatch to screen ';
                            var7 = ' mounted';
                            var7 = var13.bind(var12)(var14, var7);
                            var7 = var8.bind(var10)(var7);
                        case 464:
                            var7 = _closure2_slot4;
                            if (!(var6 != var7)) {
                                _fun12744_ip = 516;
                                continue _fun12744
                            }
                        case 472:
                            var10 = _closure2_slot4;
                            var8 = var10.setStatus;
                            var7 = {};
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var12 = var12[var5];
                            var12 = var13.bind(var0)(var12);
                            var12 = var12.SPAN_STATUS_OK;
                            var7.code = var12;
                            var7 = var8.bind(var10)(var7);
                        case 516:
                            var7 = _closure2_slot4;
                            if (!(var6 != var7)) {
                                _fun12744_ip = 538;
                                continue _fun12744
                            }
                        case 524:
                            var8 = _closure2_slot4;
                            var7 = var8.end;
                            var7 = var7.bind(var8)(var9);
                        case 538:
                            _closure2_slot4 = var0;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var7 = var10[var5];
                            var12 = var9.bind(var0)(var7);
                            var8 = var12.spanToJSON;
                            var7 = _closure2_slot3;
                            var7 = var8.bind(var12)(var7);
                            var8 = var7.description;
                            var7 = 1;
                            var7 = var10[var7];
                            var7 = var9.bind(var0)(var7);
                            var7 = var7.DEFAULT_NAVIGATION_SPAN_NAME;
                            if (!(var8 === var7)) {
                                _fun12744_ip = 621;
                                continue _fun12744
                            }
                        case 601:
                            var9 = _closure2_slot3;
                            var8 = var9.updateName;
                            var7 = var2.name;
                            var7 = var8.bind(var9)(var7);
                        case 621:
                            var10 = _closure2_slot3;
                            var9 = var10.setAttributes;
                            var14 = _closure1_slot2;
                            var13 = {};
                            var7 = var2.name;
                            var13['route.name'] = var7;
                            var7 = var2.key;
                            var13['route.key'] = var7;
                            var13['route.has_been_seen'] = var4;
                            var7 = var6 == var11;
                            var4 = undefined;
                            if (var7) {
                                _fun12744_ip = 676;
                                continue _fun12744
                            }
                        case 671:
                            var4 = var11.name;
                        case 676:
                            var13['previous_route.name'] = var4;
                            var7 = var6 == var11;
                            var4 = undefined;
                            if (var7) {
                                _fun12744_ip = 695;
                                continue _fun12744
                            }
                        case 690:
                            var4 = var11.key;
                        case 695:
                            var13['previous_route.key'] = var4;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var8 = 8;
                            var8 = var4[var8];
                            var8 = var7.bind(var0)(var8);
                            var12 = var8.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var8 = 'component';
                            var13 = var14.bind(var0)(var13, var12, var8);
                            var8 = var4[var5];
                            var8 = var7.bind(var0)(var8);
                            var12 = var8.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var8 = 'navigation';
                            var8 = var14.bind(var0)(var13, var12, var8);
                            var8 = var9.bind(var10)(var8);
                            var8 = _closure2_slot17;
                            var8 = var8.bind(var0)();
                            var4 = var4[var5];
                            var8 = var7.bind(var0)(var4);
                            var7 = var8.addBreadcrumb;
                            var4 = {
                                'category': 'navigation',
                                'type': 'navigation'
                            };
                            var12 = var2.name;
                            var9 = global;
                            var9 = var9.HermesInternal;
                            var10 = var9.concat;
                            var9 = 'Navigation to ';
                            var9 = var10.bind(var9)(var12);
                            var4.message = var9;
                            var9 = {};
                            var12 = var6 == var11;
                            var10 = undefined;
                            if (var12) {
                                _fun12744_ip = 850;
                                continue _fun12744
                            }
                        case 845:
                            var10 = var11.name;
                        case 850:
                            var9.from = var10;
                            var10 = var2.name;
                            var9.to = var10;
                            var4.data = var9;
                            var4 = var7.bind(var8)(var4);
                            var4 = _closure2_slot1;
                            if (!(var6 != var4)) {
                                _fun12744_ip = 900;
                                continue _fun12744
                            }
                        case 880:
                            var7 = _closure2_slot1;
                            var6 = var7.setCurrentRoute;
                            var4 = var2.name;
                            var4 = var6.bind(var7)(var4);
                        case 900:
                            var6 = _closure2_slot15;
                            var4 = var2.key;
                            var4 = var6.bind(var0)(var4);
                            var _closure2_slot2 = var2;
                            _closure2_slot3 = var0;
                        case 922:
                            return var0;
                        case 924:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var5 = var3.debug;
                            var4 = var5.log;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var8 = var3.concat;
                            var7 = '[';
                            var6 = 'ReactNavigation';
                            var3 = '] Navigation state changed, but route is the same as previous.';
                            var3 = var8.bind(var7)(var6, var3);
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure2_slot15;
                            var3 = var2.key;
                            var3 = var4.bind(var0)(var3);
                            _closure2_slot2 = var2;
                            _closure2_slot3 = var0;
                            return var0;
                    }
                };
                var _closure2_slot14 = var0;
                var0 = function arg0() {
                    _fun12745: for (var _fun12745_ip = 0;;) switch (_fun12745_ip) {
                        case 0:
                            var3 = _closure2_slot12;
                            var2 = var3.push;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0);
                            var0 = _closure2_slot12;
                            var0 = var0.length;
                            var4 = 200;
                            if (!(var0 > var4)) {
                                _fun12745_ip = 67;
                                continue _fun12745
                            }
                        case 36:
                            var3 = _closure2_slot12;
                            var2 = var3.slice;
                            var0 = _closure2_slot12;
                            var0 = var0.length;
                            var0 = var0 - var4;
                            var0 = var2.bind(var3)(var0);
                            _closure2_slot12 = var0;
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot15 = var0;
                var0 = function() {
                    _fun12746: for (var _fun12746_ip = 0;;) switch (_fun12746_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun12746_ip = 82;
                                continue _fun12746
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.isSentrySpan;
                            var2 = _closure2_slot3;
                            var2 = var3.bind(var4)(var2);
                            if (!var2) {
                                _fun12746_ip = 65;
                                continue _fun12746
                            }
                        case 53:
                            var3 = _closure2_slot3;
                            var2 = false;
                            var3._sampled = var2;
                        case 65:
                            var3 = _closure2_slot3;
                            var2 = var3.end;
                            var2 = var2.bind(var3)();
                            _closure2_slot3 = var0;
                        case 82:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun12746_ip = 95;
                                continue _fun12746
                            }
                        case 89:
                            var0 = undefined;
                            _closure2_slot4 = var0;
                        case 95:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot16 = var0;
                var0 = function() {
                    _fun12747: for (var _fun12747_ip = 0;;) switch (_fun12747_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun12747_ip = 34;
                                continue _fun12747
                            }
                        case 13:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var2 = _closure2_slot5;
                            var2 = var3.bind(var0)(var2);
                            _closure2_slot5 = var0;
                        case 34:
                            return var0;
                    }
                };
                var _closure2_slot17 = var0;
                var0 = {};
                var7 = 'ReactNavigation';
                var0.name = var7;
                var7 = function arg0() {
                    _fun12748: for (var _fun12748_ip = 0;;) switch (_fun12748_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 4;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getReactNativeTracingIntegration;
                            var3 = var2.bind(var3)(var4);
                            var _closure2_slot1 = var3;
                            if (!var3) {
                                _fun12748_ip = 95;
                                continue _fun12748
                            }
                        case 49:
                            var3 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.options;
                            var5 = var5.finalTimeoutMs;
                            var3.finalTimeout = var5;
                            var5 = _closure2_slot1;
                            var5 = var5.options;
                            var5 = var5.idleTimeoutMs;
                            var3.idleTimeout = var5;
                            _closure2_slot10 = var3;
                        case 95:
                            var3 = _closure2_slot11;
                            if (var3) {
                                _fun12748_ip = 196;
                                continue _fun12748
                            }
                        case 102:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 5;
                            var1 = var5[var1];
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.getAppRegistryIntegration;
                            var4 = var1.bind(var3)(var4);
                            var1 = null;
                            var1 = var1 === var4;
                            if (var1) {
                                _fun12748_ip = 146;
                                continue _fun12748
                            }
                        case 142:
                            var1 = var0 === var4;
                        case 146:
                            if (var1) {
                                _fun12748_ip = 167;
                                continue _fun12748
                            }
                        case 149:
                            var3 = var4.onRunApplication;
                            var1 = function() { // Environment: var1
                                _fun12749: for (var _fun12749_ip = 0;;) switch (_fun12749_ip) {
                                    case 0:
                                        var1 = _closure2_slot11;
                                        if (!var1) {
                                            _fun12749_ip = 69;
                                            continue _fun12749
                                        }
                                    case 10:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var1 = 3;
                                        var1 = var2[var1];
                                        var2 = undefined;
                                        var1 = var3.bind(var2)(var1);
                                        var4 = var1.debug;
                                        var3 = var4.log;
                                        var1 = '[ReactNavigationIntegration] Starting new idle navigation span based on runApplication call.';
                                        var1 = var3.bind(var4)(var1);
                                        var1 = _closure2_slot13;
                                        var0 = true;
                                        var0 = var1.bind(var2)(var2, var0);
                                    case 69:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1);
                        case 167:
                            var1 = _closure2_slot13;
                            var1 = var1.bind(var0)();
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun12748_ip = 196;
                                continue _fun12748
                            }
                        case 182:
                            var1 = _closure2_slot14;
                            var1 = var1.bind(var0)();
                            var1 = true;
                            _closure2_slot11 = var1;
                        case 196:
                            return var0;
                    }
                };
                var0.afterAllSetup = var7;
                var1 = function arg0() {
                    _fun12750: for (var _fun12750_ip = 0;;) switch (_fun12750_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var6 = 6;
                            var1 = var0[var6];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.RN_GLOBAL_OBJ;
                            var1 = var1.__sentry_rn_v5_registered;
                            if (!var1) {
                                _fun12750_ip = 114;
                                continue _fun12750
                            }
                        case 43:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 3;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var5 = var1.debug;
                            var4 = var5.log;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var9 = var1.concat;
                            var8 = '';
                            var7 = 'ReactNavigation';
                            var1 = ' Instrumentation already exists, but registering again...';
                            var1 = var9.bind(var8)(var7, var1);
                            var1 = var4.bind(var5)(var1);
                        case 114:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var5 = 3;
                            var1 = var1[var5];
                            var4 = var4.bind(var0)(var1);
                            var1 = var4.isPlainObject;
                            var4 = var1.bind(var4)(var2);
                            var1 = var2;
                            if (!var4) {
                                _fun12750_ip = 170;
                                continue _fun12750
                            }
                        case 151:
                            var4 = 'current';
                            var4 = var4 in var2;
                            var1 = var2;
                            if (!var4) {
                                _fun12750_ip = 170;
                                continue _fun12750
                            }
                        case 165:
                            var1 = var2.current;
                        case 170:
                            var4 = _closure2_slot0;
                            if (!(var4 === var1)) {
                                _fun12750_ip = 254;
                                continue _fun12750
                            }
                        case 181:
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var5];
                            var4 = var7.bind(var0)(var4);
                            var8 = var4.debug;
                            var7 = var8.log;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var11 = var4.concat;
                            var10 = '';
                            var9 = 'ReactNavigation';
                            var4 = ' Navigation container ref is the same as the one already registered.';
                            var4 = var11.bind(var10)(var9, var4);
                            var4 = var7.bind(var8)(var4);
                            _fun12750_ip = 511;
                            continue _fun12750;
                        case 254:
                            var _closure2_slot0 = var1;
                            if (var1) {
                                _fun12750_ip = 334;
                                continue _fun12750
                            }
                        case 261:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var5];
                            var1 = var4.bind(var0)(var1);
                            var7 = var1.debug;
                            var4 = var7.warn;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var10 = var1.concat;
                            var9 = '';
                            var8 = 'ReactNavigation';
                            var1 = ' Received invalid navigation container ref!';
                            var1 = var10.bind(var9)(var8, var1);
                            var1 = var4.bind(var7)(var1);
                            _fun12750_ip = 511;
                            continue _fun12750;
                        case 334:
                            var8 = _closure2_slot0;
                            var7 = var8.addListener;
                            var4 = _closure2_slot13;
                            var1 = '__unsafe_action__';
                            var1 = var7.bind(var8)(var1, var4);
                            var8 = _closure2_slot0;
                            var7 = var8.addListener;
                            var4 = _closure2_slot14;
                            var1 = 'state';
                            var1 = var7.bind(var8)(var1, var4);
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var6];
                            var1 = var4.bind(var0)(var1);
                            var4 = var1.RN_GLOBAL_OBJ;
                            var1 = true;
                            var4.__sentry_rn_v5_registered = var1;
                            var4 = _closure2_slot11;
                            if (var4) {
                                _fun12750_ip = 511;
                                continue _fun12750
                            }
                        case 422:
                            var4 = _closure2_slot3;
                            if (var4) {
                                _fun12750_ip = 499;
                                continue _fun12750
                            }
                        case 429:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var5 = var3.debug;
                            var4 = var5.log;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var8 = var3.concat;
                            var7 = '';
                            var6 = 'ReactNavigation';
                            var3 = ' Navigation container registered, but integration has not been setup yet.';
                            var3 = var8.bind(var7)(var6, var3);
                            var3 = var4.bind(var5)(var3);
                            _fun12750_ip = 511;
                            continue _fun12750;
                        case 499:
                            var3 = _closure2_slot14;
                            var3 = var3.bind(var0)();
                            _closure2_slot11 = var1;
                        case 511:
                            return var0;
                    }
                };
                var0.registerNavigationContainer = var1;
                var1 = {};
                var1.routeChangeTimeoutMs = var6;
                var1.enableTimeToInitialDisplay = var5;
                var1.ignoreEmptyBackNavigationTransactions = var4;
                var1.enableTimeToInitialDisplayForPreloadedRoutes = var3;
                var1.useDispatchedActionData = var2;
                var0.options = var1;
                return var0;
        }
    };
    var2.reactNavigationIntegration = var3;
    var1 = function arg0() {
        var2 = arg0;
        var1 = var2.getIntegrationByName;
        var0 = 'ReactNavigation';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getReactNavigationIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 1159, 998, 817, 1165, 1152, 816, 1157, 1156, 1160, 1168, 1118]);