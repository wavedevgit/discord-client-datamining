// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: normalizeTransactionName, environment: var1
        var0 = arg1;
        var2 = arg3;
        var _closure2_slot0 = var2;
        var2 = var0.pathname;
        var _closure2_slot1 = var2;
        var3 = {};
        var3.location = var0;
        var0 = arg0;
        var3.routes = var0;
        var2 = arg2;
        var0 = undefined;
        var1 = function(arg0, arg1, arg2) { // Environment: var1
            _fun12433: for (var _fun12433_ip = 0;;) switch (_fun12433_ip) {
                case 0:
                    var0 = arg2;
                    var1 = arg0;
                    if (var1) {
                        _fun12433_ip = 101;
                        continue _fun12433
                    }
                case 9:
                    if (!var0) {
                        _fun12433_ip = 101;
                        continue _fun12433
                    }
                case 12:
                    var1 = var0.routes;
                    if (var1) {
                        _fun12433_ip = 25;
                        continue _fun12433
                    }
                case 21:
                    var1 = new Array(0);
                case 25:
                    var0 = function(arg0) { // Original name: getRouteStringFromRoutes, environment: var0
                        _fun12434: for (var _fun12434_ip = 0;;) switch (_fun12434_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = global;
                                var2 = var1.Array;
                                var1 = var2.isArray;
                                var1 = var1.bind(var2)(var3);
                                if (!var1) {
                                    _fun12434_ip = 160;
                                    continue _fun12434
                                }
                            case 29:
                                var1 = var3.length;
                                var7 = 0;
                                if (!(var7 !== var1)) {
                                    _fun12434_ip = 160;
                                    continue _fun12434
                                }
                            case 40:
                                var2 = var3.filter;
                                var1 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var0 = var0.path;
                                    var0 = !var0;
                                    var0 = !var0;
                                    return var0;
                                };
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.length;
                                var1 = 1;
                                var6 = var2 - var1;
                                var5 = -1;
                                var4 = '/';
                                var1 = null;
                                var2 = var5;
                                if (!(var6 >= var7)) {
                                    _fun12434_ip = 127;
                                    continue _fun12434
                                }
                            case 86:
                                var8 = var3[var6];
                                var9 = var8.path;
                                if (!(var1 != var9)) {
                                    _fun12434_ip = 117;
                                    continue _fun12434
                                }
                            case 100:
                                var8 = var9.startsWith;
                                var8 = var8.bind(var9)(var4);
                                var2 = var6;
                                if (var8) {
                                    _fun12434_ip = 127;
                                    continue _fun12434
                                }
                            case 117:
                                var6 = var6 - 1;
                                var2 = var5;
                                if (var6 >= var7) {
                                    _fun12434_ip = 86;
                                    continue _fun12434
                                }
                            case 127:
                                var1 = var3.slice;
                                var3 = var1.bind(var3)(var2);
                                var2 = var3.reduce;
                                var1 = function(arg0, arg1) { // Environment: var0
                                    _fun12436: for (var _fun12436_ip = 0;;) switch (_fun12436_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = arg1;
                                            var4 = var0.path;
                                            var1 = '/';
                                            var2 = var4;
                                            if (!(var1 !== var3)) {
                                                _fun12436_ip = 52;
                                                continue _fun12436
                                            }
                                        case 23:
                                            var0 = '';
                                            var2 = var4;
                                            if (!(var0 !== var3)) {
                                                _fun12436_ip = 52;
                                                continue _fun12436
                                            }
                                        case 34:
                                            var0 = global;
                                            var0 = var0.HermesInternal;
                                            var0 = var0.concat;
                                            var2 = var0.bind(var1)(var4);
                                        case 52:
                                            var0 = global;
                                            var0 = var0.HermesInternal;
                                            var1 = var0.concat;
                                            var0 = '';
                                            var0 = var1.bind(var0)(var3, var2);
                                            return var0;
                                    }
                                };
                                var0 = '';
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            case 160:
                                var0 = '';
                                return var0;
                        }
                    };
                    var3 = undefined;
                    var2 = var0.bind(var3)(var1);
                    var1 = var2.length;
                    var0 = 0;
                    if (!(var0 !== var1)) {
                        _fun12433_ip = 83;
                        continue _fun12433
                    }
                case 50:
                    var0 = '/*';
                    if (!(var0 !== var2)) {
                        _fun12433_ip = 83;
                        continue _fun12433
                    }
                case 60:
                    var1 = _closure2_slot0;
                    _closure2_slot1 = var2;
                    var0 = 'route';
                    var0 = var1.bind(var3)(var2, var0);
                    _fun12433_ip = 99;
                    continue _fun12433;
                case 83:
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1);
                case 99:
                    return var0;
                case 101:
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function(arg0) { // Original name: reactRouterV3BrowserTracingIntegration, environment: var1
        _fun12437: for (var _fun12437_ip = 0;;) switch (_fun12437_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
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
                var5 = var3.match;
                var _closure2_slot3 = var5;
                var6 = var3.instrumentPageLoad;
                var5 = var2 === var6;
                if (var5) {
                    _fun12437_ip = 123;
                    continue _fun12437
                }
            case 120:
                var5 = var6;
            case 123:
                var _closure2_slot4 = var5;
                var3 = var3.instrumentNavigation;
                var2 = var2 === var3;
                if (var2) {
                    _fun12437_ip = 143;
                    continue _fun12437
                }
            case 140:
                var2 = var3;
            case 143:
                var _closure2_slot5 = var2;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var0 = function(arg0) { // Original name: afterAllSetup, environment: var0
                    _fun12438: for (var _fun12438_ip = 0;;) switch (_fun12438_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var3 = _closure2_slot0;
                            var2 = var3.afterAllSetup;
                            var2 = var2.bind(var3)(var4);
                            var2 = _closure2_slot4;
                            if (!var2) {
                                _fun12438_ip = 70;
                                continue _fun12438
                            }
                        case 34:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 1;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var3 = var3.WINDOW;
                            var2 = var3.location;
                        case 70:
                            if (!var2) {
                                _fun12438_ip = 135;
                                continue _fun12438
                            }
                        case 73:
                            var7 = _closure1_slot3;
                            var6 = _closure2_slot2;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 1;
                            var2 = var4[var2];
                            var5 = undefined;
                            var2 = var3.bind(var5)(var2);
                            var2 = var2.WINDOW;
                            var10 = var2.location;
                            var9 = _closure2_slot3;
                            var8 = function(arg0) { // Environment: var0
                                _fun12439: for (var _fun12439_ip = 0;;) switch (_fun12439_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var2 = undefined;
                                        var3 = arguments.length;
                                        var1 = 1;
                                        var3 = var3 > var1;
                                        var4 = 'url';
                                        var8 = var4;
                                        if (!var3) {
                                            _fun12439_ip = 39;
                                            continue _fun12439
                                        }
                                    case 24:
                                        var3 = arguments[var1];
                                        var8 = var4;
                                        if (!(var0 !== var3)) {
                                            _fun12439_ip = 39;
                                            continue _fun12439
                                        }
                                    case 35:
                                        var8 = arguments[var1];
                                    case 39:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var1 = var10[var1];
                                        var4 = var9.bind(var0)(var1);
                                        var3 = var4.startBrowserTracingPageLoadSpan;
                                        var2 = _closure3_slot0;
                                        var1 = {};
                                        var6 = arg0;
                                        var1.name = var6;
                                        var7 = _closure1_slot2;
                                        var5 = 2;
                                        var6 = var10[var5];
                                        var6 = var9.bind(var0)(var6);
                                        var12 = var6.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                                        var11 = {};
                                        var6 = 'pageload';
                                        var12 = var7.bind(var0)(var11, var12, var6);
                                        var6 = var10[var5];
                                        var6 = var9.bind(var0)(var6);
                                        var11 = var6.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                                        var6 = 'auto.pageload.react.reactrouter_v3';
                                        var6 = var7.bind(var0)(var12, var11, var6);
                                        var5 = var10[var5];
                                        var5 = var9.bind(var0)(var5);
                                        var5 = var5.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                                        var5 = var7.bind(var0)(var6, var5, var8);
                                        var1.attributes = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var12 = undefined;
                            var11 = var6;
                            var2 = var12[var7](var11, var10, var9, var8, var7);
                        case 135:
                            var2 = _closure2_slot5;
                            if (!var2) {
                                _fun12438_ip = 152;
                                continue _fun12438
                            }
                        case 142:
                            var3 = _closure2_slot1;
                            var2 = var3.listen;
                        case 152:
                            if (!var2) {
                                _fun12438_ip = 175;
                                continue _fun12438
                            }
                        case 155:
                            var2 = _closure2_slot1;
                            var1 = var2.listen;
                            var0 = function(arg0) { // Environment: var0
                                _fun12440: for (var _fun12440_ip = 0;;) switch (_fun12440_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var1 = var5.action;
                                        var0 = 'PUSH';
                                        var0 = var0 !== var1;
                                        if (!var0) {
                                            _fun12440_ip = 32;
                                            continue _fun12440
                                        }
                                    case 19:
                                        var2 = var5.action;
                                        var1 = 'POP';
                                        var0 = var1 !== var2;
                                    case 32:
                                        if (var0) {
                                            _fun12440_ip = 69;
                                            continue _fun12440
                                        }
                                    case 35:
                                        var4 = _closure1_slot3;
                                        var9 = _closure2_slot2;
                                        var7 = _closure2_slot3;
                                        var10 = undefined;
                                        var6 = function(arg0) { // Environment: var0
                                            _fun12441: for (var _fun12441_ip = 0;;) switch (_fun12441_ip) {
                                                case 0:
                                                    var0 = undefined;
                                                    var2 = undefined;
                                                    var3 = arguments.length;
                                                    var1 = 1;
                                                    var3 = var3 > var1;
                                                    var4 = 'url';
                                                    var8 = var4;
                                                    if (!var3) {
                                                        _fun12441_ip = 39;
                                                        continue _fun12441
                                                    }
                                                case 24:
                                                    var3 = arguments[var1];
                                                    var8 = var4;
                                                    if (!(var0 !== var3)) {
                                                        _fun12441_ip = 39;
                                                        continue _fun12441
                                                    }
                                                case 35:
                                                    var8 = arguments[var1];
                                                case 39:
                                                    var9 = _closure1_slot0;
                                                    var10 = _closure1_slot1;
                                                    var1 = var10[var1];
                                                    var4 = var9.bind(var0)(var1);
                                                    var3 = var4.startBrowserTracingNavigationSpan;
                                                    var2 = _closure3_slot0;
                                                    var1 = {};
                                                    var6 = arg0;
                                                    var1.name = var6;
                                                    var7 = _closure1_slot2;
                                                    var5 = 2;
                                                    var6 = var10[var5];
                                                    var6 = var9.bind(var0)(var6);
                                                    var12 = var6.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                                                    var11 = {};
                                                    var6 = 'navigation';
                                                    var12 = var7.bind(var0)(var11, var12, var6);
                                                    var6 = var10[var5];
                                                    var6 = var9.bind(var0)(var6);
                                                    var11 = var6.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                                                    var6 = 'auto.navigation.react.reactrouter_v3';
                                                    var6 = var7.bind(var0)(var12, var11, var6);
                                                    var5 = var10[var5];
                                                    var5 = var9.bind(var0)(var5);
                                                    var5 = var5.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                                                    var5 = var7.bind(var0)(var6, var5, var8);
                                                    var1.attributes = var5;
                                                    var1 = var3.bind(var4)(var2, var1);
                                                    return var0;
                                            }
                                        };
                                        var8 = var5;
                                        var0 = var10[var4](var9, var8, var7, var6, var5);
                                    case 69:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 175:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.afterAllSetup = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var2.reactRouterV3BrowserTracingIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 1021, 817]);