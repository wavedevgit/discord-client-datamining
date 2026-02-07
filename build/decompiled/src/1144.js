// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun12450: for (var _fun12450_ip = 0;;) switch (_fun12450_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                if (var2) {
                    _fun12450_ip = 12;
                    continue _fun12450
                }
            case 10:
                return var0;
            case 12:
                var _closure2_slot0 = var0;
                var3 = global;
                var4 = var3.Object;
                var3 = var4.entries;
                var2 = var2.params;
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot2;
                    var0 = undefined;
                    var2 = arg0;
                    var1 = 2;
                    var2 = var3.bind(var0)(var2, var1);
                    var1 = 0;
                    var5 = var2[var1];
                    var1 = 1;
                    var3 = var2[var1];
                    var6 = _closure2_slot0;
                    var1 = global;
                    var4 = var1.HermesInternal;
                    var7 = var4.concat;
                    var4 = 'url.path.params.';
                    var4 = var7.bind(var4)(var5);
                    var6[var4] = var3;
                    var6 = _closure2_slot0;
                    var4 = var1.HermesInternal;
                    var7 = var4.concat;
                    var4 = 'url.path.parameter.';
                    var4 = var7.bind(var4)(var5);
                    var6[var4] = var3;
                    var2 = _closure2_slot0;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'params.';
                    var1 = var4.bind(var1)(var5);
                    var2[var1] = var3;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function arg0() {
        _fun12452: for (var _fun12452_ip = 0;;) switch (_fun12452_ip) {
            case 0:
                var2 = undefined;
                var4 = undefined;
                var3 = arguments.length;
                var1 = 1;
                if (!(var3 > var1)) {
                    _fun12452_ip = 24;
                    continue _fun12452
                }
            case 16:
                var3 = arguments[var1];
                if (!(var2 === var3)) {
                    _fun12452_ip = 28;
                    continue _fun12452
                }
            case 24:
                var3 = {};
                _fun12452_ip = 32;
                continue _fun12452;
            case 28:
                var3 = arguments[var1];
            case 32:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var6 = var4.bind(var2)(var1);
                var5 = var6.browserTracingIntegration;
                var1 = global;
                var9 = var1.Object;
                var8 = var9.assign;
                var7 = {};
                var4 = {
                    'instrumentNavigation': false,
                    'instrumentPageLoad': false
                };
                var4 = var8.bind(var9)(var7, var3, var4);
                var4 = var5.bind(var6)(var4);
                var _closure2_slot1 = var4;
                var6 = var3.instrumentPageLoad;
                var5 = var2 === var6;
                if (var5) {
                    _fun12452_ip = 125;
                    continue _fun12452
                }
            case 122:
                var5 = var6;
            case 125:
                var _closure2_slot2 = var5;
                var3 = var3.instrumentNavigation;
                var2 = var2 === var3;
                if (var2) {
                    _fun12452_ip = 145;
                    continue _fun12452
                }
            case 142:
                var2 = var3;
            case 145:
                var _closure2_slot3 = var2;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var0 = function arg0() {
                    _fun12453: for (var _fun12453_ip = 0;;) switch (_fun12453_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var3 = _closure2_slot1;
                            var0 = var3.afterAllSetup;
                            var0 = var0.bind(var3)(var6);
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var5 = 2;
                            var3 = var0[var5];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.WINDOW;
                            var8 = var3.location;
                            var3 = _closure2_slot2;
                            if (!var3) {
                                _fun12453_ip = 345;
                                continue _fun12453
                            }
                        case 73:
                            if (!var8) {
                                _fun12453_ip = 345;
                                continue _fun12453
                            }
                        case 79:
                            var11 = _closure2_slot0;
                            var10 = var11.matchRoutes;
                            var9 = var8.pathname;
                            var3 = _closure2_slot0;
                            var12 = var3.options;
                            var4 = var12.parseSearch;
                            var3 = var8.search;
                            var4 = var4.bind(var12)(var3);
                            var3 = {
                                'preload': false,
                                'throwOnError': false
                            };
                            var4 = var10.bind(var11)(var9, var4, var3);
                            var9 = var4.length;
                            var3 = 1;
                            var3 = var9 - var3;
                            var11 = var4[var3];
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.startBrowserTracingPageLoadSpan;
                            var3 = {};
                            if (var11) {
                                _fun12453_ip = 190;
                                continue _fun12453
                            }
                        case 182:
                            var8 = var8.pathname;
                            _fun12453_ip = 196;
                            continue _fun12453;
                        case 190:
                            var8 = var11.routeId;
                        case 196:
                            var3.name = var8;
                            var8 = global;
                            var10 = var8.Object;
                            var9 = var10.assign;
                            var14 = _closure1_slot3;
                            var12 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var8 = 3;
                            var13 = var15[var8];
                            var13 = var12.bind(var0)(var13);
                            var17 = var13.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var16 = {};
                            var13 = 'pageload';
                            var17 = var14.bind(var0)(var16, var17, var13);
                            var13 = var15[var8];
                            var13 = var12.bind(var0)(var13);
                            var16 = var13.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var13 = 'auto.pageload.react.tanstack_router';
                            var13 = var14.bind(var0)(var17, var16, var13);
                            var8 = var15[var8];
                            var8 = var12.bind(var0)(var8);
                            var12 = var8.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var8 = 'url';
                            if (!var11) {
                                _fun12453_ip = 312;
                                continue _fun12453
                            }
                        case 308:
                            var8 = 'route';
                        case 312:
                            var8 = var14.bind(var0)(var13, var12, var8);
                            var7 = _closure1_slot4;
                            var7 = var7.bind(var0)(var11);
                            var7 = var9.bind(var10)(var8, var7);
                            var3.attributes = var7;
                            var3 = var4.bind(var5)(var6, var3);
                        case 345:
                            var3 = _closure2_slot3;
                            if (!var3) {
                                _fun12453_ip = 379;
                                continue _fun12453
                            }
                        case 352:
                            var4 = _closure2_slot0;
                            var3 = var4.subscribe;
                            var2 = 'onBeforeNavigate';
                            var1 = function(arg0) { // Environment: var1
                                _fun12454: for (var _fun12454_ip = 0;;) switch (_fun12454_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = var3.toLocation;
                                        var4 = var0.state;
                                        var5 = var3.fromLocation;
                                        var0 = null;
                                        var6 = var0 == var5;
                                        var0 = undefined;
                                        var1 = undefined;
                                        if (var6) {
                                            _fun12454_ip = 40;
                                            continue _fun12454
                                        }
                                    case 35:
                                        var1 = var5.state;
                                    case 40:
                                        if (!(var4 !== var1)) {
                                            _fun12454_ip = 344;
                                            continue _fun12454
                                        }
                                    case 47:
                                        var7 = _closure2_slot0;
                                        var6 = var7.matchRoutes;
                                        var4 = var3.toLocation;
                                        var5 = var4.pathname;
                                        var3 = var3.toLocation;
                                        var4 = var3.search;
                                        var3 = {
                                            'preload': false,
                                            'throwOnError': false
                                        };
                                        var4 = var6.bind(var7)(var5, var4, var3);
                                        var5 = var4.length;
                                        var3 = 1;
                                        var3 = var5 - var3;
                                        var11 = var4[var3];
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var3 = 2;
                                        var6 = var5[var3];
                                        var6 = var4.bind(var0)(var6);
                                        var6 = var6.WINDOW;
                                        var8 = var6.location;
                                        var3 = var5[var3];
                                        var6 = var4.bind(var0)(var3);
                                        var5 = var6.startBrowserTracingNavigationSpan;
                                        var4 = _closure3_slot0;
                                        var3 = {};
                                        if (var11) {
                                            _fun12454_ip = 186;
                                            continue _fun12454
                                        }
                                    case 178:
                                        var8 = var8.pathname;
                                        _fun12454_ip = 192;
                                        continue _fun12454;
                                    case 186:
                                        var8 = var11.routeId;
                                    case 192:
                                        var3.name = var8;
                                        var10 = _closure1_slot3;
                                        var8 = _closure1_slot0;
                                        var12 = _closure1_slot1;
                                        var7 = 3;
                                        var9 = var12[var7];
                                        var9 = var8.bind(var0)(var9);
                                        var14 = var9.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                                        var13 = {};
                                        var9 = 'navigation';
                                        var14 = var10.bind(var0)(var13, var14, var9);
                                        var9 = var12[var7];
                                        var9 = var8.bind(var0)(var9);
                                        var13 = var9.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                                        var9 = 'auto.navigation.react.tanstack_router';
                                        var9 = var10.bind(var0)(var14, var13, var9);
                                        var7 = var12[var7];
                                        var7 = var8.bind(var0)(var7);
                                        var8 = var7.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                                        var7 = 'url';
                                        if (!var11) {
                                            _fun12454_ip = 293;
                                            continue _fun12454
                                        }
                                    case 289:
                                        var7 = 'route';
                                    case 293:
                                        var7 = var10.bind(var0)(var9, var8, var7);
                                        var3.attributes = var7;
                                        var3 = var5.bind(var6)(var4, var3);
                                        var _closure4_slot0 = var3;
                                        var5 = _closure2_slot0;
                                        var4 = var5.subscribe;
                                        var3 = 'onResolved';
                                        var1 = function(arg0) { // Environment: var2
                                            _fun12455: for (var _fun12455_ip = 0;;) switch (_fun12455_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var3 = _closure4_slot1;
                                                    var0 = undefined;
                                                    var3 = var3.bind(var0)();
                                                    var3 = _closure4_slot0;
                                                    if (!var3) {
                                                        _fun12455_ip = 193;
                                                        continue _fun12455
                                                    }
                                                case 26:
                                                    var6 = _closure2_slot0;
                                                    var5 = var6.matchRoutes;
                                                    var3 = var1.toLocation;
                                                    var4 = var3.pathname;
                                                    var1 = var1.toLocation;
                                                    var3 = var1.search;
                                                    var1 = {
                                                        'preload': false,
                                                        'throwOnError': false
                                                    };
                                                    var3 = var5.bind(var6)(var4, var3, var1);
                                                    var4 = var3.length;
                                                    var1 = 1;
                                                    var1 = var4 - var1;
                                                    var4 = var3[var1];
                                                    if (!var4) {
                                                        _fun12455_ip = 193;
                                                        continue _fun12455
                                                    }
                                                case 99:
                                                    var5 = _closure4_slot0;
                                                    var3 = var5.updateName;
                                                    var1 = var4.routeId;
                                                    var1 = var3.bind(var5)(var1);
                                                    var7 = _closure4_slot0;
                                                    var6 = var7.setAttribute;
                                                    var5 = _closure1_slot0;
                                                    var8 = _closure1_slot1;
                                                    var3 = 3;
                                                    var3 = var8[var3];
                                                    var3 = var5.bind(var0)(var3);
                                                    var5 = var3.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                                                    var3 = 'route';
                                                    var3 = var6.bind(var7)(var5, var3);
                                                    var3 = _closure4_slot0;
                                                    var2 = var3.setAttributes;
                                                    var1 = _closure1_slot4;
                                                    var1 = var1.bind(var0)(var4);
                                                    var1 = var2.bind(var3)(var1);
                                                case 193:
                                                    return var0;
                                            }
                                        };
                                        var1 = var4.bind(var5)(var3, var1);
                                        var _closure4_slot1 = var1;
                                    case 344:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                        case 379:
                            return var0;
                    }
                };
                var1.afterAllSetup = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var2.tanstackRouterBrowserTracingIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 77, 1021, 817]);