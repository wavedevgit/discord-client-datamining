// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: instrumentReactRouter, environment: var1
        _fun12450: for (var _fun12450_ip = 0;;) switch (_fun12450_ip) {
            case 0:
                var7 = arg0;
                var2 = arg2;
                var3 = arg3;
                var17 = arg4;
                var0 = undefined;
                var8 = undefined;
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var17;
                var5 = function(arg0) { // Original name: normalizeTransactionName, environment: var1
                    _fun12451: for (var _fun12451_ip = 0;;) switch (_fun12451_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = undefined;
                            var0 = undefined;
                            var3 = _closure2_slot2;
                            var5 = var3.length;
                            var3 = 0;
                            if (!(var3 !== var5)) {
                                _fun12451_ip = 152;
                                continue _fun12451
                            }
                        case 28:
                            var3 = _closure2_slot3;
                            if (!var3) {
                                _fun12451_ip = 152;
                                continue _fun12451
                            }
                        case 35:
                            var5 = _closure1_slot6;
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot3;
                            var5 = var5.bind(var4)(var3, var1, var2);
                            var3 = var5;
                            var2 = var3[Symbol.iterator];
                            var3 = var2().next;
                        case 63:
                            var5 = var3().value;
                            var6 = var2;
                            if (!(var6 !== var4)) {
                                _fun12451_ip = 134;
                                continue _fun12451
                            }
                        case 74: // try_start_0
                            var0 = var5;
                            var5 = var5.match;
                            var5 = var5.isExact;
                            if (var5) {
                                _fun12451_ip = 94;
                                continue _fun12451
                            }
                        case 92: // try_end0
                            _fun12451_ip = 63;
                            continue _fun12451;
                        case 94: // try_start_1
                            var0 = var0.match;
                            var3 = var0.path;
                            var0 = new Array(2);
                            var0[0] = var3;
                            var3 = 'route';
                            var0[1] = var3;
                        case 122: // try_end1
                            var2.return();
                            return var0;
                        case 127: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 0);
                            var2.return();
                            throw var0;
                        case 134:
                            var0 = new Array(2);
                            var0[0] = var1;
                            var2 = 'url';
                            var0[1] = var2;
                            return var0;
                        case 152:
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = 'url';
                            var0[1] = var1;
                            return var0;
                    }
                };
                var _closure2_slot4 = var5;
                var4 = arguments.length;
                var6 = 5;
                if (!(var4 > var6)) {
                    _fun12450_ip = 53;
                    continue _fun12450
                }
            case 45:
                var4 = arguments[var6];
                if (!(var0 === var4)) {
                    _fun12450_ip = 59;
                    continue _fun12450
                }
            case 53:
                var4 = new Array(0);
                _fun12450_ip = 63;
                continue _fun12450;
            case 59:
                var4 = arguments[var6];
            case 63:
                var _closure2_slot2 = var4;
                var4 = arguments.length;
                var6 = 6;
                var9 = var4 > var6;
                var4 = undefined;
                if (!var9) {
                    _fun12450_ip = 86;
                    continue _fun12450
                }
            case 82:
                var4 = arguments[var6];
            case 86:
                var _closure2_slot3 = var4;
                var4 = arg1;
                if (!var4) {
                    _fun12450_ip = 381;
                    continue _fun12450
                }
            case 99:
                var4 = var3.location;
                if (var4) {
                    _fun12450_ip = 182;
                    continue _fun12450
                }
            case 107:
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var9 = 3;
                var4 = var4[var9];
                var4 = var8.bind(var0)(var4);
                var4 = var4.WINDOW;
                var8 = var4.location;
                var4 = undefined;
                if (!var8) {
                    _fun12450_ip = 180;
                    continue _fun12450
                }
            case 146:
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var9];
                var6 = var8.bind(var0)(var6);
                var6 = var6.WINDOW;
                var6 = var6.location;
                var4 = var6.pathname;
            case 180:
                _fun12450_ip = 193;
                continue _fun12450;
            case 182:
                var6 = var3.location;
                var4 = var6.pathname;
            case 193:
                if (!var4) {
                    _fun12450_ip = 381;
                    continue _fun12450
                }
            case 199:
                var6 = var5.bind(var0)(var4);
                var5 = _closure1_slot3;
                var4 = 2;
                var5 = var5.bind(var0)(var6, var4);
                var4 = 0;
                var9 = var5[var4];
                var4 = 1;
                var11 = var5[var4];
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 3;
                var4 = var13[var4];
                var6 = var12.bind(var0)(var4);
                var5 = var6.startBrowserTracingPageLoadSpan;
                var4 = {};
                var4.name = var9;
                var10 = _closure1_slot2;
                var8 = 4;
                var9 = var13[var8];
                var9 = var12.bind(var0)(var9);
                var15 = var9.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var14 = {};
                var9 = 'pageload';
                var15 = var10.bind(var0)(var14, var15, var9);
                var9 = var13[var8];
                var9 = var12.bind(var0)(var9);
                var14 = var9.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var9 = global;
                var9 = var9.HermesInternal;
                var16 = var9.concat;
                var9 = 'auto.pageload.react.';
                var9 = var16.bind(var9)(var17);
                var9 = var10.bind(var0)(var15, var14, var9);
                var8 = var13[var8];
                var8 = var12.bind(var0)(var8);
                var8 = var8.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var8 = var10.bind(var0)(var9, var8, var11);
                var4.attributes = var8;
                var4 = var5.bind(var6)(var7, var4);
            case 381:
                if (!var2) {
                    _fun12450_ip = 390;
                    continue _fun12450
                }
            case 384:
                var2 = var3.listen;
            case 390:
                if (!var2) {
                    _fun12450_ip = 409;
                    continue _fun12450
                }
            case 393:
                var2 = var3.listen;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun12452: for (var _fun12452_ip = 0;;) switch (_fun12452_ip) {
                        case 0:
                            var1 = arg1;
                            if (!var1) {
                                _fun12452_ip = 234;
                                continue _fun12452
                            }
                        case 9:
                            var0 = 'PUSH';
                            if (!(var0 !== var1)) {
                                _fun12452_ip = 28;
                                continue _fun12452
                            }
                        case 17:
                            var0 = 'POP';
                            if (!(var0 === var1)) {
                                _fun12452_ip = 234;
                                continue _fun12452
                            }
                        case 28:
                            var1 = _closure2_slot4;
                            var0 = arg0;
                            var0 = var0.pathname;
                            var8 = undefined;
                            var2 = var1.bind(var8)(var0);
                            var1 = _closure1_slot3;
                            var0 = 2;
                            var1 = var1.bind(var8)(var2, var0);
                            var0 = 0;
                            var6 = var1[var0];
                            var0 = 1;
                            var7 = var1[var0];
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var0 = 3;
                            var0 = var10[var0];
                            var3 = var9.bind(var8)(var0);
                            var2 = var3.startBrowserTracingNavigationSpan;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var0.name = var6;
                            var6 = _closure1_slot2;
                            var4 = 4;
                            var11 = var10[var4];
                            var11 = var9.bind(var8)(var11);
                            var13 = var11.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var12 = {};
                            var11 = 'navigation';
                            var12 = var6.bind(var8)(var12, var13, var11);
                            var11 = var10[var4];
                            var11 = var9.bind(var8)(var11);
                            var11 = var11.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var14 = _closure2_slot1;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var13 = var5.concat;
                            var5 = 'auto.navigation.react.';
                            var5 = var13.bind(var5)(var14);
                            var5 = var6.bind(var8)(var12, var11, var5);
                            var4 = var10[var4];
                            var4 = var9.bind(var8)(var4);
                            var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var4 = var6.bind(var8)(var5, var4, var7);
                            var0.attributes = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 234:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 409:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: matchRoutes, environment: var1
        _fun12453: for (var _fun12453_ip = 0;;) switch (_fun12453_ip) {
            case 0:
                var3 = arg0;
                var5 = undefined;
                var4 = undefined;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var0 = arguments.length;
                var2 = 3;
                if (!(var0 > var2)) {
                    _fun12453_ip = 41;
                    continue _fun12453
                }
            case 33:
                var0 = arguments[var2];
                if (!(var5 === var0)) {
                    _fun12453_ip = 47;
                    continue _fun12453
                }
            case 41:
                var0 = new Array(0);
                _fun12453_ip = 51;
                continue _fun12453;
            case 47:
                var0 = arguments[var2];
            case 51:
                var _closure2_slot2 = var0;
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun12454: for (var _fun12454_ip = 0;;) switch (_fun12454_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.path;
                            if (var0) {
                                _fun12454_ip = 91;
                                continue _fun12454
                            }
                        case 15:
                            var0 = _closure2_slot2;
                            var0 = var0.length;
                            if (var0) {
                                _fun12454_ip = 63;
                                continue _fun12454
                            }
                        case 27:
                            var4 = _closure2_slot0;
                            var0 = {
                                'path': '/',
                                'url': '/'
                            };
                            var3 = '/';
                            var5 = {};
                            var0.params = var5;
                            var3 = var3 === var4;
                            var0.isExact = var3;
                            _fun12454_ip = 89;
                            continue _fun12454;
                        case 63:
                            var4 = _closure2_slot2;
                            var5 = var4.length;
                            var3 = 1;
                            var3 = var5 - var3;
                            var3 = var4[var3];
                            var0 = var3.match;
                        case 89:
                            _fun12454_ip = 107;
                            continue _fun12454;
                        case 91:
                            var5 = _closure2_slot1;
                            var4 = _closure2_slot0;
                            var3 = undefined;
                            var0 = var5.bind(var3)(var4, var2);
                        case 107:
                            if (!var0) {
                                _fun12454_ip = 176;
                                continue _fun12454
                            }
                        case 110:
                            var5 = _closure2_slot2;
                            var4 = var5.push;
                            var3 = {};
                            var3.route = var2;
                            var3.match = var0;
                            var3 = var4.bind(var5)(var3);
                            var3 = var2.routes;
                            if (!var3) {
                                _fun12454_ip = 176;
                                continue _fun12454
                            }
                        case 145:
                            var6 = _closure1_slot6;
                            var10 = var2.routes;
                            var9 = _closure2_slot0;
                            var8 = _closure2_slot1;
                            var7 = _closure2_slot2;
                            var11 = undefined;
                            var1 = var11[var6](var10, var9, var8, var7, var6);
                        case 176:
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var3 = var3.Symbol;
    var6 = var3.toStringTag;
    var3 = {};
    var9 = 'Module';
    var3.value = var9;
    var3 = var7.bind(var8)(var2, var6, var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = function(arg0) { // Original name: reactRouterV4BrowserTracingIntegration, environment: var1
        _fun12455: for (var _fun12455_ip = 0;;) switch (_fun12455_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var6 = var4.bind(var2)(var1);
                var5 = var6.browserTracingIntegration;
                var1 = global;
                var9 = var1.Object;
                var8 = var9.assign;
                var7 = {};
                var4 = {
                    'instrumentPageLoad': false,
                    'instrumentNavigation': false
                };
                var4 = var8.bind(var9)(var7, var3, var4);
                var4 = var5.bind(var6)(var4);
                var _closure2_slot0 = var4;
                var5 = var3.history;
                var _closure2_slot1 = var5;
                var5 = var3.routes;
                var _closure2_slot2 = var5;
                var5 = var3.matchPath;
                var _closure2_slot3 = var5;
                var6 = var3.instrumentPageLoad;
                var5 = var2 === var6;
                if (var5) {
                    _fun12455_ip = 123;
                    continue _fun12455
                }
            case 120:
                var5 = var6;
            case 123:
                var _closure2_slot4 = var5;
                var3 = var3.instrumentNavigation;
                var2 = var2 === var3;
                if (var2) {
                    _fun12455_ip = 143;
                    continue _fun12455
                }
            case 140:
                var2 = var3;
            case 143:
                var _closure2_slot5 = var2;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var0 = function(arg0) { // Original name: afterAllSetup, environment: var0
                    var8 = arg0;
                    var2 = _closure2_slot0;
                    var1 = var2.afterAllSetup;
                    var1 = var1.bind(var2)(var8);
                    var7 = _closure1_slot5;
                    var14 = _closure2_slot4;
                    var13 = _closure2_slot5;
                    var12 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot3;
                    var0 = undefined;
                    var11 = 'reactrouter_v4';
                    var16 = undefined;
                    var15 = var8;
                    var1 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8);
                    return var0;
                };
                var1.afterAllSetup = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var2.reactRouterV4BrowserTracingIntegration = var3;
    var3 = function(arg0) { // Original name: reactRouterV5BrowserTracingIntegration, environment: var1
        _fun12457: for (var _fun12457_ip = 0;;) switch (_fun12457_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var6 = var4.bind(var2)(var1);
                var5 = var6.browserTracingIntegration;
                var1 = global;
                var9 = var1.Object;
                var8 = var9.assign;
                var7 = {};
                var4 = {
                    'instrumentPageLoad': false,
                    'instrumentNavigation': false
                };
                var4 = var8.bind(var9)(var7, var3, var4);
                var4 = var5.bind(var6)(var4);
                var _closure2_slot0 = var4;
                var5 = var3.history;
                var _closure2_slot1 = var5;
                var5 = var3.routes;
                var _closure2_slot2 = var5;
                var5 = var3.matchPath;
                var _closure2_slot3 = var5;
                var6 = var3.instrumentPageLoad;
                var5 = var2 === var6;
                if (var5) {
                    _fun12457_ip = 123;
                    continue _fun12457
                }
            case 120:
                var5 = var6;
            case 123:
                var _closure2_slot4 = var5;
                var3 = var3.instrumentNavigation;
                var2 = var2 === var3;
                if (var2) {
                    _fun12457_ip = 143;
                    continue _fun12457
                }
            case 140:
                var2 = var3;
            case 143:
                var _closure2_slot5 = var2;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var0 = function(arg0) { // Original name: afterAllSetup, environment: var0
                    var8 = arg0;
                    var2 = _closure2_slot0;
                    var1 = var2.afterAllSetup;
                    var1 = var1.bind(var2)(var8);
                    var7 = _closure1_slot5;
                    var14 = _closure2_slot4;
                    var13 = _closure2_slot5;
                    var12 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot3;
                    var0 = undefined;
                    var11 = 'reactrouter_v5';
                    var16 = undefined;
                    var15 = var8;
                    var1 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8);
                    return var0;
                };
                var1.afterAllSetup = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var2.reactRouterV5BrowserTracingIntegration = var3;
    var1 = function(arg0) { // Original name: withSentryRouting, environment: var1
        _fun12459: for (var _fun12459_ip = 0;;) switch (_fun12459_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var5 = var3.displayName;
                if (var5) {
                    _fun12459_ip = 22;
                    continue _fun12459
                }
            case 17:
                var5 = var3.name;
            case 22:
                var0 = function(arg0) { // Original name: WrappedRoute, environment: var0
                    _fun12460: for (var _fun12460_ip = 0;;) switch (_fun12460_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = null;
                            if (!(var1 != var6)) {
                                _fun12460_ip = 273;
                                continue _fun12460
                            }
                        case 12:
                            var0 = var6.computedMatch;
                            if (!(var1 != var0)) {
                                _fun12460_ip = 273;
                                continue _fun12460
                            }
                        case 25:
                            var0 = var0.isExact;
                            if (!var0) {
                                _fun12460_ip = 273;
                                continue _fun12460
                            }
                        case 37:
                            var0 = var6.computedMatch;
                            var2 = var0.path;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var5 = 4;
                            var1 = var1[var5];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.getActiveSpan;
                            var8 = var1.bind(var3)();
                            var7 = var8;
                            if (!var7) {
                                _fun12460_ip = 118;
                                continue _fun12460
                            }
                        case 90:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var5];
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.getRootSpan;
                            var7 = var1.bind(var3)(var8);
                        case 118:
                            var3 = undefined;
                            if (!var7) {
                                _fun12460_ip = 182;
                                continue _fun12460
                            }
                        case 123:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var5];
                            var8 = var8.bind(var4)(var1);
                            var1 = var8.spanToJSON;
                            var1 = var1.bind(var8)(var7);
                            var9 = var1.op;
                            var1 = 'navigation';
                            if (!(var1 !== var9)) {
                                _fun12460_ip = 176;
                                continue _fun12460
                            }
                        case 164:
                            var8 = 'pageload';
                            var1 = undefined;
                            if (!(var8 === var9)) {
                                _fun12460_ip = 179;
                                continue _fun12460
                            }
                        case 176:
                            var1 = var7;
                        case 179:
                            var3 = var1;
                        case 182:
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var5];
                            var7 = var7.bind(var4)(var1);
                            var1 = var7.getCurrentScope;
                            var7 = var1.bind(var7)();
                            var1 = var7.setTransactionName;
                            var1 = var1.bind(var7)(var2);
                            if (!var3) {
                                _fun12460_ip = 273;
                                continue _fun12460
                            }
                        case 223:
                            var1 = var3.updateName;
                            var1 = var1.bind(var3)(var2);
                            var2 = var3.setAttribute;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var5];
                            var0 = var1.bind(var4)(var0);
                            var1 = var0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var0 = 'route';
                            var0 = var2.bind(var3)(var1, var0);
                        case 273:
                            var3 = _closure1_slot4;
                            var2 = var3.createElement;
                            var1 = _closure2_slot0;
                            var0 = global;
                            var5 = var0.Object;
                            var4 = var5.assign;
                            var0 = {};
                            var0 = var4.bind(var5)(var0, var6);
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'sentryRoute(';
                var1 = ')';
                var1 = var4.bind(var2)(var5, var1);
                var0.displayName = var1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.hoistNonReactStatics;
                var1 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.withSentryRouting = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 57, 31, 1021, 817, 1136]);